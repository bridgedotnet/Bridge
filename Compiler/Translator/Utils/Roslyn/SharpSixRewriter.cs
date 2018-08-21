using Bridge.Contract;
using Bridge.Contract.Constants;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Symbols;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using LanguageVersion = Microsoft.CodeAnalysis.CSharp.LanguageVersion;

namespace Bridge.Translator
{
    public class SharpSixRewriter : CSharpSyntaxRewriter
    {
        public const string AutoInitFieldPrefix = "__Property__Initializer__";
        private const string SYSTEM_IDENTIFIER = "System";
        private const string FUNC_IDENTIFIER = "Func";

        public readonly string envnl = Environment.NewLine;
        private readonly ILogger logger;
        private readonly ITranslator translator;
        private CSharpCompilation compilation;
        private SemanticModel semanticModel;
        private List<MemberDeclarationSyntax> fields;
        private int tempKey = 1;
        private Stack<ITypeSymbol> currentType;
        private bool hasStaticUsingOrAliases;
        private bool hasChainingAssigment;
        private bool hasIsPattern;
        private bool hasCasePatternSwitchLabel;
        private bool hasLocalFunctions;

        public SharpSixRewriter(ITranslator translator)
        {
            this.translator = translator;
            this.logger = translator.Log;
            this.compilation = this.CreateCompilation();
        }

        public SharpSixRewriter(SharpSixRewriter rewriter)
        {
            this.translator = rewriter.translator;
            this.logger = rewriter.logger;
            this.compilation = rewriter.compilation;
        }

        public string Rewrite(int index)
        {
            this.currentType = new Stack<ITypeSymbol>();

            var syntaxTree = this.compilation.SyntaxTrees[index];
            this.semanticModel = this.compilation.GetSemanticModel(syntaxTree, true);

            SyntaxTree newTree = null;

            Func<SyntaxNode, Tuple<SyntaxTree, SemanticModel>> modelUpdater = (root) => {
                newTree = SyntaxFactory.SyntaxTree(root, GetParseOptions());
                compilation = compilation.ReplaceSyntaxTree(syntaxTree, newTree);
                syntaxTree = newTree;
                this.semanticModel = this.compilation.GetSemanticModel(newTree, true);
                return new Tuple<SyntaxTree, SemanticModel>(newTree, semanticModel);
            };

            var result = new ExpressionBodyToStatementRewriter(semanticModel).Visit(syntaxTree.GetRoot());
            modelUpdater(result);

            result = new DiscardReplacer().Replace(syntaxTree.GetRoot(), semanticModel, modelUpdater);
            modelUpdater(result);

            result = new DeconstructionReplacer().Replace(syntaxTree.GetRoot(), semanticModel, modelUpdater);
            modelUpdater(result);

            result = this.Visit(syntaxTree.GetRoot());

            var replacers = new List<ICSharpReplacer>();

            if (this.hasLocalFunctions)
            {
                replacers.Add(new LocalFunctionReplacer());
            }

            if (this.hasChainingAssigment)
            {
                replacers.Add(new ChainingAssigmentReplacer());
            }

            if (this.hasStaticUsingOrAliases)
            {
                replacers.Add(new UsingStaticReplacer());
            }

            if (this.hasIsPattern)
            {
                replacers.Add(new IsPatternReplacer());
            }

            if (this.hasCasePatternSwitchLabel)
            {
                replacers.Add(new SwitchPatternReplacer());
            }
            
            foreach (var replacer in replacers)
            {
                modelUpdater(result);

                try
                {
                    result = replacer.Replace(newTree.GetRoot(), semanticModel);
                }
                catch (Exception e)
                {
                    logger.Error("Error trying to rewrite syntax block while parsing source file." + envnl +
                        "Replacer: " + replacer.ToString() + envnl +
                        "File: " + translator.SourceFiles[index] + envnl +
                        "Inner exception: " + e.Message);

                    throw new TranslatorException("Error applying replacer '" + replacer.ToString() + "' on file '" + translator.SourceFiles[index] + "'. Inner exception: " + e.Message, e);
                }
            }

            modelUpdater(result);

            return newTree.GetRoot().ToFullString();
        }

        // FIXME: Same call made by Bridge.Translator.BuildAssembly
        // (Translator\Translator.Build.cs). Shouldn't this also be called
        // from there (so this might become public/static).
        private CSharpParseOptions GetParseOptions()
        {
            return new CSharpParseOptions(LanguageVersion.CSharp7, Microsoft.CodeAnalysis.DocumentationMode.None, SourceCodeKind.Regular, translator.DefineConstants);
        }

        private CSharpCompilation CreateCompilation()
        {
            var compilationOptions = new CSharpCompilationOptions(OutputKind.DynamicallyLinkedLibrary);

            var parseOptions = GetParseOptions();

            var syntaxTrees = translator.SourceFiles.Select(s => ParseSourceFile(s, parseOptions)).Where(s => s != null).ToList();
            var references = new MetadataReference[this.translator.References.Count()];
            var i = 0;
            foreach (var r in this.translator.References)
            {
                references[i++] = MetadataReference.CreateFromFile(r.MainModule.FullyQualifiedName, new MetadataReferenceProperties(MetadataImageKind.Assembly, ImmutableArray.Create("global")));
            }

            return CSharpCompilation.Create(GetAssemblyName(), syntaxTrees, references, compilationOptions);
        }

        private string GetAssemblyName()
        {
            if (this.translator.AssemblyLocation != null)
            {
                return Path.GetFileNameWithoutExtension(this.translator.AssemblyLocation);
            }
            else if (this.translator.SourceFiles.Count > 0)
            {
                return Path.GetFileNameWithoutExtension(this.translator.SourceFiles[0]);
            }
            else
            {
                return null;
            }
        }

        private SyntaxTree ParseSourceFile(string path, CSharpParseOptions options)
        {
            if (!File.Exists(path))
            {
                logger.Error(string.Format("Source file `{0}' could not be found", path));
            }

            try
            {
                using (var rdr = new StreamReader(path))
                {
                    return SyntaxFactory.ParseSyntaxTree(rdr.ReadToEnd(), options, path);
                }
            }
            catch (IOException ex)
            {
                logger.Error(string.Format("Error reading source file `{0}': {1}", path, ex.Message));
                return null;
            }
        }

        private static bool IsExpandedForm(SemanticModel semanticModel, InvocationExpressionSyntax node, IMethodSymbol method)
        {
            var parameters = method.Parameters;
            var arguments = node.ArgumentList.Arguments;

            ExpressionSyntax target = null;
            if (method.ReducedFrom != null)
            {
                var mae = (MemberAccessExpressionSyntax)node.Expression;
                target = mae.Expression;
            }

            var isReducedExtensionMethod = target != null;

            if (parameters.Length == 0 || !parameters[parameters.Length - 1].IsParams)
                return false;   // Last parameter must be params

            int actualArgumentCount = arguments.Count + (isReducedExtensionMethod ? 1 : 0);

            if (actualArgumentCount < parameters.Length - 1)
                return false;   // No default arguments are allowed

            if (arguments.Any(a => a.NameColon != null))
                return false;   // No named arguments are allowed

            if (actualArgumentCount == parameters.Length - 1)
                return true;    // Empty param array

            var lastType = semanticModel.GetTypeInfo(arguments[arguments.Count - 1].Expression).ConvertedType;
            if (Equals(((IArrayTypeSymbol)parameters[parameters.Length - 1].Type).ElementType, lastType))
                return true;    // A param array needs to be created

            return false;
        }

        public override SyntaxNode VisitCaseSwitchLabel(CaseSwitchLabelSyntax node)
        {
            node =  (CaseSwitchLabelSyntax)base.VisitCaseSwitchLabel(node);

            if (node.Value is CastExpressionSyntax ce && ce.Expression.Kind() == SyntaxKind.DefaultLiteralExpression)
            {
                this.hasCasePatternSwitchLabel = true;
            }

            return node;
        }

        public override SyntaxNode VisitBinaryExpression(BinaryExpressionSyntax node)
        {
            var symbol = semanticModel.GetSymbolInfo(node.Right).Symbol;
            var newNode = base.VisitBinaryExpression(node);
            node = newNode as BinaryExpressionSyntax;
            if (node != null && node.OperatorToken.Kind() == SyntaxKind.IsKeyword && !(symbol is ITypeSymbol))
            {
                //node = node.WithOperatorToken(SyntaxFactory.Token(SyntaxKind.EqualsEqualsToken));                
                newNode = SyntaxFactory.InvocationExpression(SyntaxFactory.MemberAccessExpression(
                                    SyntaxKind.SimpleMemberAccessExpression,
                                    node.Left,
                                    SyntaxFactory.IdentifierName("Equals")), SyntaxFactory.ArgumentList(
                                    SyntaxFactory.SingletonSeparatedList<ArgumentSyntax>(
                                        SyntaxFactory.Argument(
                                            node.Right)))).NormalizeWhitespace().WithLeadingTrivia(node.GetLeadingTrivia()).WithTrailingTrivia(node.GetTrailingTrivia());
            }

            return newNode;
        }

        public override SyntaxNode VisitLocalFunctionStatement(LocalFunctionStatementSyntax node)
        {
            this.hasLocalFunctions = true;
            return base.VisitLocalFunctionStatement(node);
        }

        private void ThrowRefNotSupported(SyntaxNode node)
        {
            var mapped = this.semanticModel.SyntaxTree.GetLineSpan(node.Span);
            throw new NotSupportedException(string.Format(CultureInfo.InvariantCulture, "{2} - {3}({0},{1}): {4}", mapped.StartLinePosition.Line + 1, mapped.StartLinePosition.Character + 1, "Ref returns and locals are not supported", this.semanticModel.SyntaxTree.FilePath, node.ToString()));
        }

        public override SyntaxNode VisitRefType(RefTypeSyntax node)
        {
            node = (RefTypeSyntax)base.VisitRefType(node);

            return SyntaxFactory.GenericName(SyntaxFactory.Identifier("Bridge.Ref"), SyntaxFactory.TypeArgumentList(SyntaxFactory.SeparatedList<TypeSyntax>(new[] { node.Type }))).NormalizeWhitespace().WithTrailingTrivia(node.GetTrailingTrivia()).WithLeadingTrivia(node.GetLeadingTrivia());
        }

        public override SyntaxNode VisitRefExpression(RefExpressionSyntax node)
        {
            var symbol = semanticModel.GetSymbolInfo(node.Expression).Symbol;
            var typeInfo = semanticModel.GetTypeInfo(node.Expression);
            var type = typeInfo.Type ?? typeInfo.ConvertedType;

            node = (RefExpressionSyntax)base.VisitRefExpression(node);

            if (symbol is ILocalSymbol ls && ls.IsRef || symbol is IMethodSymbol ms && ms.ReturnsByRef)
            {
                return node.Expression.NormalizeWhitespace().WithTrailingTrivia(node.GetTrailingTrivia()).WithLeadingTrivia(node.GetLeadingTrivia());
            }
            
            var createExpression = SyntaxFactory.ObjectCreationExpression(SyntaxFactory.GenericName(SyntaxFactory.Identifier("Bridge.Ref"), SyntaxFactory.TypeArgumentList(SyntaxFactory.SeparatedList<TypeSyntax>(new []{
                SyntaxHelper.GenerateTypeSyntax(type, semanticModel, node.Expression.GetLocation().SourceSpan.Start)
            })))).WithArgumentList(SyntaxFactory.ArgumentList(
                SyntaxFactory.SeparatedList<ArgumentSyntax>(
                    new SyntaxNodeOrToken[]{
                        SyntaxFactory.Argument(
                            SyntaxFactory.ParenthesizedLambdaExpression(
                                node.Expression)
                            .WithParameterList(
                                SyntaxFactory.ParameterList()
                                .WithOpenParenToken(
                                    SyntaxFactory.Token(SyntaxKind.OpenParenToken))
                                .WithCloseParenToken(
                                    SyntaxFactory.Token(SyntaxKind.CloseParenToken)))
                            .WithArrowToken(
                                SyntaxFactory.Token(SyntaxKind.EqualsGreaterThanToken))),
                        SyntaxFactory.Token(SyntaxKind.CommaToken),
                        SyntaxFactory.Argument(
                            SyntaxFactory.ParenthesizedLambdaExpression(
                                SyntaxFactory.AssignmentExpression(
                                    SyntaxKind.SimpleAssignmentExpression,
                                    node.Expression,
                                    SyntaxFactory.IdentifierName("_v_"))
                                .WithOperatorToken(
                                    SyntaxFactory.Token(SyntaxKind.EqualsToken)))
                            .WithParameterList(
                                SyntaxFactory.ParameterList(
                                    SyntaxFactory.SingletonSeparatedList<ParameterSyntax>(
                                        SyntaxFactory.Parameter(
                                            SyntaxFactory.Identifier("_v_"))))
                                .WithOpenParenToken(
                                    SyntaxFactory.Token(SyntaxKind.OpenParenToken))
                                .WithCloseParenToken(
                                    SyntaxFactory.Token(SyntaxKind.CloseParenToken)))
                            .WithArrowToken(
                                SyntaxFactory.Token(SyntaxKind.EqualsGreaterThanToken)))})));


            return createExpression.NormalizeWhitespace().WithTrailingTrivia(node.GetTrailingTrivia()).WithLeadingTrivia(node.GetLeadingTrivia());
        }

        public override SyntaxNode VisitRefTypeExpression(RefTypeExpressionSyntax node)
        {
            ThrowRefNotSupported(node);
            return node;
        }

        public override SyntaxNode VisitRefValueExpression(RefValueExpressionSyntax node)
        {
            ThrowRefNotSupported(node);
            return node;
        }

        private static Regex binaryLiteral = new Regex(@"[_Bb]", RegexOptions.Compiled);
        public override SyntaxNode VisitLiteralExpression(LiteralExpressionSyntax node)
        {
            var spanStart = node.SpanStart;
            node =  (LiteralExpressionSyntax)base.VisitLiteralExpression(node);

            if (node.Kind() == SyntaxKind.NumericLiteralExpression)
            {
                var text = node.Token.Text;

                if (node.Token.ValueText != node.Token.Text && binaryLiteral.Match(text).Success)
                {
                    dynamic value = node.Token.Value;
                    node = node.WithToken(SyntaxFactory.Literal(value));
                }                
            }
            else if (node.Kind() == SyntaxKind.DefaultLiteralExpression)
            {
                var typeInfo = semanticModel.GetTypeInfo(node);
                var type = typeInfo.Type ?? typeInfo.ConvertedType;

                if (type != null && type.TypeKind != TypeKind.Error)
                {
                    return SyntaxFactory.DefaultExpression(SyntaxFactory.ParseTypeName(type.ToMinimalDisplayString(semanticModel, node.GetLocation().SourceSpan.Start)));
                }
            }

            return node;
        }

        public override SyntaxNode VisitTupleExpression(TupleExpressionSyntax node)
        {
            if (node.Parent is AssignmentExpressionSyntax ae && ae.Left == node)
            {
                return base.VisitTupleExpression(node);
            }

            var typeInfo = semanticModel.GetTypeInfo(node);
            var type = typeInfo.Type ?? typeInfo.ConvertedType;
            ImmutableArray<IFieldSymbol> elements;
            List<TypeSyntax> types = new List<TypeSyntax>();

            if (type.IsTupleType)
            {
                elements = ((INamedTypeSymbol)type).TupleElements;
                foreach (var el in elements)
                {
                    types.Add(SyntaxHelper.GenerateTypeSyntax(el.Type, semanticModel, node.GetLocation().SourceSpan.Start));
                }
            }
            node = (TupleExpressionSyntax)base.VisitTupleExpression(node);

            if (type.IsTupleType)
            {
                var createExpression = SyntaxFactory.ObjectCreationExpression(SyntaxFactory.GenericName(SyntaxFactory.Identifier("System.ValueTuple"), SyntaxFactory.TypeArgumentList(SyntaxFactory.SeparatedList<TypeSyntax>(types))));
                var argExpressions = new List<ArgumentSyntax>();

                foreach (var arg in node.Arguments)
                {
                    argExpressions.Add(arg.WithNameColon(null));
                }

                createExpression = createExpression.WithArgumentList(SyntaxFactory.ArgumentList(SyntaxFactory.SeparatedList<ArgumentSyntax>(argExpressions))).NormalizeWhitespace();
                return createExpression.WithLeadingTrivia(node.GetLeadingTrivia()).WithTrailingTrivia(node.GetTrailingTrivia());
            }

            return node;
        }

        public override SyntaxNode VisitTupleType(TupleTypeSyntax node)
        {
            node = (TupleTypeSyntax)base.VisitTupleType(node);

            List<TypeSyntax> types = new List<TypeSyntax>();
            foreach (var el in node.Elements)
            {
                types.Add(el.Type);
            }

            var newType = SyntaxFactory.GenericName(SyntaxFactory.Identifier("System.ValueTuple"), SyntaxFactory.TypeArgumentList(SyntaxFactory.SeparatedList<TypeSyntax>(types)));

            return newType.WithLeadingTrivia(node.GetLeadingTrivia()).WithTrailingTrivia(node.GetTrailingTrivia()); ;
        }

        public override SyntaxNode VisitCasePatternSwitchLabel(CasePatternSwitchLabelSyntax node)
        {
            this.hasCasePatternSwitchLabel = true;
            return base.VisitCasePatternSwitchLabel(node);
        }

        public override SyntaxNode VisitIsPatternExpression(IsPatternExpressionSyntax node)
        {
            this.hasIsPattern = true;
            return base.VisitIsPatternExpression(node);
        }

        public override SyntaxNode VisitAssignmentExpression(AssignmentExpressionSyntax node)
        {
            var identifier = node.Left as IdentifierNameSyntax;
            if (identifier != null)
            {
                var local = node.GetParent<LocalDeclarationStatementSyntax>();
                var name = identifier.Identifier.ValueText;

                if (local != null && local.Declaration.Variables.Any(v => v.Identifier.ValueText == name))
                {
                    this.hasChainingAssigment = true;
                }
            }
            return base.VisitAssignmentExpression(node);
        }

        public override SyntaxNode VisitParameter(ParameterSyntax node)
        {
            node = (ParameterSyntax)base.VisitParameter(node);

            var idx = node.Modifiers.IndexOf(SyntaxKind.InKeyword);
            if (idx > -1)
            {
                node = node.WithModifiers(node.Modifiers.RemoveAt(idx));
            }

            return node;
        }

        public override SyntaxNode VisitArgument(ArgumentSyntax node)
        {
            var ti = this.semanticModel.GetTypeInfo(node.Expression);

            ITypeSymbol type = null;
            IMethodSymbol method = null;
            IParameterSymbol parameter = null;
            bool nonTrailing = false;

            if (node.NameColon == null && node.Parent is ArgumentListSyntax argList)
            {
                foreach (var arg in argList.Arguments)
                {
                    if (arg == node)
                    {
                        break;
                    }

                    if (arg.NameColon != null)
                    {
                        nonTrailing = true;
                        break;
                    }
                }
            }

            if (ti.Type != null && (ti.Type.TypeKind == TypeKind.Delegate || nonTrailing))
            {
                type = ti.Type;
            }
            else if (ti.ConvertedType != null && (ti.ConvertedType.TypeKind == TypeKind.Delegate || nonTrailing))
            {
                type = ti.ConvertedType;
            }

            if (type != null)
            {
                var list = node.Parent as ArgumentListSyntax;
                var invocation = node.Parent.Parent as InvocationExpressionSyntax;

                if (list != null && invocation != null)
                {
                    method = this.semanticModel.GetSymbolInfo(invocation).Symbol as IMethodSymbol;

                    if (method != null)
                    {
                        if (node.NameColon != null)
                        {
                            if (node.NameColon.Name != null)
                            {
                                var nameText = node.NameColon.Name.Identifier.ValueText;
                                if (nameText != null)
                                {
                                    foreach (var p in method.Parameters)
                                    {
                                        if (string.Equals(p.Name, nameText, StringComparison.Ordinal))
                                        {
                                            parameter = p;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        else
                        {
                            var index = list.Arguments.IndexOf(node);
                            if (index >= 0)
                            {
                                if (index < method.Parameters.Length)
                                {
                                    parameter = method.Parameters[index];
                                }
                                else if (index >= method.Parameters.Length && method.Parameters[method.Parameters.Length - 1].IsParams)
                                {
                                    parameter = method.Parameters[method.Parameters.Length - 1];
                                }
                            }
                        }
                    }
                }
            }
            var isParam = parameter != null && !SyntaxHelper.IsAnonymous(parameter.Type);
            var parent = isParam && parameter.IsParams ? (InvocationExpressionSyntax)node.Parent.Parent : null;
            node = (ArgumentSyntax)base.VisitArgument(node);

            if (isParam)
            {
                var pType = parameter.Type;
                if (parameter.IsParams && SharpSixRewriter.IsExpandedForm(this.semanticModel, parent, method))
                {
                    pType = ((IArrayTypeSymbol)parameter.Type).ElementType;
                }

                if (node.Expression is CastExpressionSyntax && type.Equals(pType) || parameter.RefKind != RefKind.None)
                {
                    return node;
                }

                if (pType.TypeKind == TypeKind.Delegate || parameter.IsParams && ((IArrayTypeSymbol)parameter.Type).ElementType.TypeKind == TypeKind.Delegate)
                {
                    var name = SyntaxFactory.IdentifierName(pType.ToDisplayString(SymbolDisplayFormat.FullyQualifiedFormat)).WithoutTrivia();
                    var expr = node.Expression;

                    if (expr is LambdaExpressionSyntax || expr is AnonymousMethodExpressionSyntax || expr is QueryExpressionSyntax)
                    {
                        expr = SyntaxFactory.ParenthesizedExpression(expr);
                    }

                    var cast = SyntaxFactory.CastExpression(name, expr);
                    node = node.WithExpression(cast);
                }
            }

            if (nonTrailing && parameter != null)
            {
                node = node.WithNameColon(SyntaxFactory.NameColon(SyntaxFactory.IdentifierName(parameter.Name)));
            }

            if (node.RefKindKeyword.Kind() == SyntaxKind.InKeyword)
            {
                node = node.WithRefKindKeyword(SyntaxFactory.Token(SyntaxKind.None));
            }

            return node;
        }

        public override SyntaxNode VisitConstructorDeclaration(ConstructorDeclarationSyntax node)
        {
            node = (ConstructorDeclarationSyntax)base.VisitConstructorDeclaration(node);

            if (node.Modifiers.IndexOf(SyntaxKind.PrivateKeyword) > -1 && node.Modifiers.IndexOf(SyntaxKind.ProtectedKeyword) > -1)
            {
                node = node.WithModifiers(node.Modifiers.Replace(node.Modifiers[node.Modifiers.IndexOf(SyntaxKind.ProtectedKeyword)], SyntaxFactory.Token(SyntaxKind.InternalKeyword).WithTrailingTrivia(SyntaxFactory.Whitespace(" "))));
                node = node.WithModifiers(node.Modifiers.Replace(node.Modifiers[node.Modifiers.IndexOf(SyntaxKind.PrivateKeyword)], SyntaxFactory.Token(SyntaxKind.ProtectedKeyword).WithTrailingTrivia(SyntaxFactory.Whitespace(" "))));
                node = node.WithAttributeLists(node.AttributeLists.Add(SyntaxFactory.AttributeList(SyntaxFactory.SingletonSeparatedList(SyntaxFactory.Attribute(SyntaxFactory.IdentifierName("Bridge.PrivateProtectedAttribute"))))));
            }

            if (node.ExpressionBody != null)
            {
                return SyntaxHelper.ToStatementBody(node);
            }

            return node;
        }

        public override SyntaxNode VisitDestructorDeclaration(DestructorDeclarationSyntax node)
        {
            node = (DestructorDeclarationSyntax)base.VisitDestructorDeclaration(node);

            if (node.ExpressionBody != null)
            {
                return SyntaxHelper.ToStatementBody(node);
            }

            return node;
        }

        public override SyntaxNode VisitInvocationExpression(InvocationExpressionSyntax node)
        {
            var method = this.semanticModel.GetSymbolInfo(node).Symbol as IMethodSymbol;
            var isRef = false;

            if (method != null && method.ReturnsByRef && node.Parent is AssignmentExpressionSyntax aes && aes.Left == node)
            {
                isRef = true;
            }

            var spanStart = node.SpanStart;
            var si = node.ArgumentList.Arguments.Count > 0 ? semanticModel.GetSymbolInfo(node.ArgumentList.Arguments[0].Expression) : default(SymbolInfo);
            var costValue = (string)semanticModel.GetConstantValue(node).Value;
            var conditionalParent = node.GetParent<ConditionalAccessExpressionSyntax>();

            node = (InvocationExpressionSyntax)base.VisitInvocationExpression(node);
            if (node.Expression is IdentifierNameSyntax &&
                ((IdentifierNameSyntax)node.Expression).Identifier.Text == "nameof")
            {
                string name = SyntaxHelper.GetSymbolName(node, si, costValue, semanticModel);
                return SyntaxFactory.LiteralExpression(SyntaxKind.StringLiteralExpression, SyntaxFactory.Literal(name));
            }
            else
            {
                if (method != null && method.IsGenericMethod && !method.TypeArguments.Any(ta => SyntaxHelper.IsAnonymous(ta) || ta.Kind == SymbolKind.TypeParameter && (ta as ITypeParameterSymbol)?.ContainingSymbol == method))
                {
                    var expr = node.Expression;
                    var ma = expr as MemberAccessExpressionSyntax;

                    if (expr is IdentifierNameSyntax)
                    {
                        var name = (IdentifierNameSyntax)expr;

                        var genericName = SyntaxHelper.GenerateGenericName(name.Identifier, method.TypeArguments);
                        genericName = genericName.WithLeadingTrivia(name.GetLeadingTrivia().ExcludeDirectivies()).WithTrailingTrivia(name.GetTrailingTrivia().ExcludeDirectivies());
                        node = node.WithExpression(genericName);
                    }
                    else if (ma != null && ma.Name is IdentifierNameSyntax)
                    {
                        expr = ma.Name;
                        var name = (IdentifierNameSyntax)expr;
                        var genericName = SyntaxHelper.GenerateGenericName(name.Identifier, method.TypeArguments);
                        genericName = genericName.WithLeadingTrivia(name.GetLeadingTrivia().ExcludeDirectivies()).WithTrailingTrivia(name.GetTrailingTrivia().ExcludeDirectivies());

                        if (method.MethodKind == MethodKind.ReducedExtension && conditionalParent == null)
                        {
                            var target = ma.Expression;
                            var clsName = method.ContainingType.GetFullyQualifiedNameAndValidate(this.semanticModel, spanStart);
                            ma = SyntaxFactory.MemberAccessExpression(SyntaxKind.SimpleMemberAccessExpression, SyntaxFactory.IdentifierName(clsName), genericName);
                            node = node.WithArgumentList(node.ArgumentList.WithArguments(node.ArgumentList.Arguments.Insert(0, SyntaxFactory.Argument(target))));
                        }
                        else
                        {
                            ma = ma.WithName(genericName);
                        }

                        node = node.WithExpression(ma);
                    }
                }
            }

            if (isRef)
            {
                return SyntaxFactory.MemberAccessExpression(SyntaxKind.SimpleMemberAccessExpression, node, SyntaxFactory.IdentifierName("Value")).NormalizeWhitespace().WithLeadingTrivia(node.GetLeadingTrivia()).WithTrailingTrivia(node.GetTrailingTrivia());
            }

            return node;
        }

        public override SyntaxNode VisitInterpolatedStringExpression(InterpolatedStringExpressionSyntax node)
        {
            var isInterpolatedString = semanticModel.GetConversion(node).IsInterpolatedString;

            node = (InterpolatedStringExpressionSyntax)base.VisitInterpolatedStringExpression(node);
            string methodNameToCall;
            string classNameToCall;

            if (isInterpolatedString)
            {
                classNameToCall = "System.Runtime.CompilerServices.FormattableStringFactory";
                methodNameToCall = "Create";
            }
            else
            {
                classNameToCall = "string";
                methodNameToCall = "Format";
            }

            string str = "";
            int placeholder = 0;
            var expressions = new List<ExpressionSyntax>();
            var idx = -1;

            foreach (var content in node.Contents)
            {
                idx++;
                var interpolatedStringTextSyntax = content as InterpolatedStringTextSyntax;
                if (interpolatedStringTextSyntax != null)
                {
                    str += interpolatedStringTextSyntax.TextToken.ValueText;
                }
                else if (content is InterpolationSyntax)
                {
                    var interpolation = (InterpolationSyntax)content;

                    str += "{" + placeholder.ToString(CultureInfo.InvariantCulture);

                    if (interpolation.AlignmentClause != null)
                    {
                        object value = null;

                        if (interpolation.AlignmentClause.Value is LiteralExpressionSyntax)
                        {
                            value = ((LiteralExpressionSyntax)interpolation.AlignmentClause.Value).Token.Value;
                        }
                        else
                        {
                            value = semanticModel.GetConstantValue(interpolation.AlignmentClause.Value).Value;
                        }

                        if (value == null)
                        {
                            logger.Error("Non-constant alignment");
                            return null;
                        }

                        str += "," + Convert.ToInt32(value).ToString(CultureInfo.InvariantCulture);
                    }

                    if (interpolation.FormatClause != null)
                    {
                        str += ":" + interpolation.FormatClause.FormatStringToken.Text;
                    }

                    str += "}";
                    placeholder++;
                    expressions.Add(interpolation.Expression);
                }
                else
                {
                    logger.Error("Unknown content in interpolated string: " + content);
                    return null;
                }
            }

            expressions.Insert(0, SyntaxFactory.LiteralExpression(SyntaxKind.StringLiteralExpression, SyntaxFactory.Literal(str)));

            var methodIdentifier = SyntaxFactory.IdentifierName(classNameToCall + "." + methodNameToCall);
            var invocation = SyntaxFactory.InvocationExpression(methodIdentifier, SyntaxFactory.ArgumentList(SyntaxFactory.SeparatedList(expressions.Select(SyntaxFactory.Argument))));

            return invocation;
        }

        public override SyntaxNode VisitUsingDirective(UsingDirectiveSyntax node)
        {
            if (node.StaticKeyword.RawKind == (int)SyntaxKind.StaticKeyword)
            {
                this.hasStaticUsingOrAliases = true;
            }
            if (node.Alias != null)
            {
                this.hasStaticUsingOrAliases = true;
            }
            return base.VisitUsingDirective(node);
        }

        public override SyntaxNode VisitGenericName(GenericNameSyntax node)
        {
            if (!this.hasStaticUsingOrAliases)
            {
                return base.VisitGenericName(node);
            }

            var symbol = semanticModel.GetSymbolInfo(node).Symbol;
            var nodeParent = node.Parent;

            ITypeSymbol thisType = this.currentType.Count == 0 ? null : this.currentType.Peek();

            bool needHandle = !node.IsVar &&
                              symbol is ITypeSymbol &&
                              symbol.ContainingType != null &&
                              thisType != null &&
                              !thisType.InheritsFromOrEquals(symbol.ContainingType) &&
                              !thisType.Equals(symbol);

            var qns = nodeParent as QualifiedNameSyntax;
            if (qns != null && needHandle)
            {
                SyntaxNode n = node;
                do
                {
                    if (!qns.Left.Equals(n))
                    {
                        needHandle = false;
                    }

                    n = qns;
                    qns = qns.Parent as QualifiedNameSyntax;
                } while (qns != null && needHandle);
            }

            var spanStart = node.SpanStart;
            node = (GenericNameSyntax)base.VisitGenericName(node);

            if (needHandle && !(nodeParent is MemberAccessExpressionSyntax))
            {
                INamedTypeSymbol namedType = symbol as INamedTypeSymbol;
                if (namedType != null && namedType.IsGenericType && namedType.TypeArguments.Length > 0 && !namedType.TypeArguments.Any(SyntaxHelper.IsAnonymous))
                {
                    return SyntaxHelper.GenerateGenericName(SyntaxFactory.Identifier(node.GetLeadingTrivia(), symbol.GetFullyQualifiedNameAndValidate(this.semanticModel, spanStart, false), node.GetTrailingTrivia()), namedType.TypeArguments);
                }

                return SyntaxFactory.IdentifierName(SyntaxFactory.Identifier(node.GetLeadingTrivia(), symbol.GetFullyQualifiedNameAndValidate(this.semanticModel, spanStart), node.GetTrailingTrivia()));
            }

            IMethodSymbol methodSymbol = null;

            if (symbol != null && symbol.IsStatic && symbol.ContainingType != null
                && thisType != null && !thisType.InheritsFromOrEquals(symbol.ContainingType)
                && !(nodeParent is MemberAccessExpressionSyntax)
                && (
                    (methodSymbol = symbol as IMethodSymbol) != null
                    || symbol is IPropertySymbol
                    || symbol is IFieldSymbol
                    || symbol is IEventSymbol)
                )
            {
                if (methodSymbol != null && methodSymbol.IsGenericMethod && methodSymbol.TypeArguments.Length > 0 && !methodSymbol.TypeArguments.Any(SyntaxHelper.IsAnonymous))
                {
                    return SyntaxHelper.GenerateGenericName(SyntaxFactory.Identifier(node.GetLeadingTrivia(), symbol.GetFullyQualifiedNameAndValidate(this.semanticModel, spanStart, false), node.GetTrailingTrivia()), methodSymbol.TypeArguments);
                }

                return SyntaxFactory.IdentifierName(SyntaxFactory.Identifier(node.GetLeadingTrivia(), symbol.GetFullyQualifiedNameAndValidate(this.semanticModel, spanStart), node.GetTrailingTrivia()));
            }

            return node;
        }

        public override SyntaxNode VisitIdentifierName(IdentifierNameSyntax node)
        {
            var symbol = semanticModel.GetSymbolInfo(node).Symbol;
            bool isRef = false;
            if (symbol != null && symbol is ILocalSymbol ls && ls.IsRef && !(node.Parent is RefExpressionSyntax))
            {
                isRef = true;
            }

            if (!this.hasStaticUsingOrAliases)
            {
                var newNode = (ExpressionSyntax)base.VisitIdentifierName(node);

                if (isRef)
                {
                    return SyntaxFactory.MemberAccessExpression(SyntaxKind.SimpleMemberAccessExpression, newNode, SyntaxFactory.IdentifierName("Value")).NormalizeWhitespace().WithLeadingTrivia(node.GetLeadingTrivia()).WithTrailingTrivia(node.GetTrailingTrivia());
                }

                return newNode;
            }
            
            var isAlias = semanticModel.GetAliasInfo(node) != null;

            ITypeSymbol thisType = this.currentType.Count == 0 ? null : this.currentType.Peek();

            bool needHandle = !isAlias &&
                              !node.IsVar &&
                              symbol is ITypeSymbol &&
                              symbol.ContainingType != null &&
                              thisType != null &&
                              !thisType.InheritsFromOrEquals(symbol.ContainingType) &&
                              !thisType.Equals(symbol);

            var qns = node.Parent as QualifiedNameSyntax;
            if (qns != null && needHandle)
            {
                SyntaxNode n = node;
                do
                {
                    if (!qns.Left.Equals(n))
                    {
                        needHandle = false;
                    }

                    n = qns;
                    qns = qns.Parent as QualifiedNameSyntax;
                } while (qns != null && needHandle);
            }

            var spanStart = node.SpanStart;
            node = (IdentifierNameSyntax)base.VisitIdentifierName(node);

            if (needHandle && !(node.Parent is MemberAccessExpressionSyntax))
            {
                INamedTypeSymbol namedType = symbol as INamedTypeSymbol;
                if (namedType != null && namedType.IsGenericType && namedType.TypeArguments.Length > 0 && !namedType.TypeArguments.Any(SyntaxHelper.IsAnonymous))
                {
                    var genericName = SyntaxHelper.GenerateGenericName(node.Identifier, namedType.TypeArguments);
                    return genericName.WithLeadingTrivia(node.GetLeadingTrivia().ExcludeDirectivies()).WithTrailingTrivia(node.GetTrailingTrivia().ExcludeDirectivies());
                }

                return SyntaxFactory.IdentifierName(SyntaxFactory.Identifier(node.GetLeadingTrivia(), symbol.GetFullyQualifiedNameAndValidate(this.semanticModel, spanStart), node.GetTrailingTrivia()));
            }

            IMethodSymbol methodSymbol = null;

            if (symbol != null && symbol.IsStatic && symbol.ContainingType != null
                && thisType != null && !thisType.InheritsFromOrEquals(symbol.ContainingType)
                && !(node.Parent is MemberAccessExpressionSyntax)
                && !(node.Parent is QualifiedNameSyntax)
                && (
                    (methodSymbol = symbol as IMethodSymbol) != null
                    || symbol is IPropertySymbol
                    || symbol is IFieldSymbol
                    || symbol is IEventSymbol
                    || symbol is INamedTypeSymbol)
                )
            {
                if (methodSymbol != null && methodSymbol.IsGenericMethod && methodSymbol.TypeArguments.Length > 0 && !methodSymbol.TypeArguments.Any(SyntaxHelper.IsAnonymous))
                {
                    var genericName = SyntaxHelper.GenerateGenericName(SyntaxFactory.Identifier(symbol.GetFullyQualifiedNameAndValidate(this.semanticModel, spanStart, false)), methodSymbol.TypeArguments);
                    return genericName.WithLeadingTrivia(node.GetLeadingTrivia().ExcludeDirectivies()).WithTrailingTrivia(node.GetTrailingTrivia().ExcludeDirectivies());
                }

                return SyntaxFactory.IdentifierName(SyntaxFactory.Identifier(node.GetLeadingTrivia(), symbol.GetFullyQualifiedNameAndValidate(this.semanticModel, spanStart), node.GetTrailingTrivia()));
            }

            if (isRef)
            {
                return SyntaxFactory.MemberAccessExpression(SyntaxKind.SimpleMemberAccessExpression, node, SyntaxFactory.IdentifierName("Value")).NormalizeWhitespace().WithLeadingTrivia(node.GetLeadingTrivia()).WithTrailingTrivia(node.GetTrailingTrivia());
            }

            return node;
        }

        public override SyntaxNode VisitMemberAccessExpression(MemberAccessExpressionSyntax node)
        {
            var oldNode = node;
            var symbol = new Lazy<ISymbol>(() => semanticModel.GetSymbolInfo(oldNode.Expression).Symbol);
            var symbolNode = new Lazy<ISymbol>(() => semanticModel.GetSymbolInfo(oldNode).Symbol);

            ITypeSymbol thisType = this.currentType.Count == 0 ? null : this.currentType.Peek();

            var spanStart = node.Expression.SpanStart;
            node = (MemberAccessExpressionSyntax)base.VisitMemberAccessExpression(node);
            var isIdentifier = node.Expression.Kind() == SyntaxKind.IdentifierName || node.Expression.Kind() == SyntaxKind.GenericName;

            if (isIdentifier && symbolNode.Value != null && symbolNode.Value is IPropertySymbol ps && ps.RefKind == RefKind.In)
            {
                return SyntaxFactory.MemberAccessExpression(SyntaxKind.SimpleMemberAccessExpression, node, SyntaxFactory.IdentifierName("Value")).NormalizeWhitespace().WithLeadingTrivia(node.GetLeadingTrivia()).WithTrailingTrivia(node.GetTrailingTrivia());
            }

            if (symbolNode.Value != null && symbolNode.Value is IFieldSymbol && symbolNode.Value.ContainingType.IsTupleType)
            {
                var field = symbolNode.Value as IFieldSymbol;
                var tupleField = field.CorrespondingTupleField;
                node = node.WithName(SyntaxFactory.IdentifierName(tupleField.Name));
            }

            if (isIdentifier
                && symbol.Value != null
                && (symbol.Value.IsStatic || symbol.Value.Kind == SymbolKind.NamedType)
                && symbol.Value.ContainingType != null
                && thisType != null
                && !thisType.InheritsFromOrEquals(symbol.Value.ContainingType)
                && (symbol.Value.Kind == SymbolKind.Method || symbol.Value.Kind == SymbolKind.Property || symbol.Value.Kind == SymbolKind.Field || symbol.Value.Kind == SymbolKind.Event || symbol.Value.Kind == SymbolKind.NamedType))
            {
                return SyntaxFactory.MemberAccessExpression(SyntaxKind.SimpleMemberAccessExpression,
                    SyntaxFactory.IdentifierName(SyntaxFactory.Identifier(node.GetLeadingTrivia(),
                        symbol.Value.GetFullyQualifiedNameAndValidate(this.semanticModel, spanStart),
                        node.GetTrailingTrivia())), node.OperatorToken, node.Name);
            }

            if (isIdentifier
                && symbol.Value != null
                && symbolNode.Value != null
                && symbol.Value.Kind == SymbolKind.NamedType
                && symbolNode.Value.IsStatic
                && symbol.Value.ContainingType != null
                && thisType != null && !thisType.InheritsFromOrEquals((ITypeSymbol)symbol.Value)
                && !((ITypeSymbol)symbol.Value).IsAccessibleIn(thisType)
                && (symbol.Value.Kind == SymbolKind.Method || symbol.Value.Kind == SymbolKind.Property || symbol.Value.Kind == SymbolKind.Field || symbol.Value.Kind == SymbolKind.Event || symbol.Value.Kind == SymbolKind.NamedType))
            {
                return SyntaxFactory.MemberAccessExpression(SyntaxKind.SimpleMemberAccessExpression,
                    SyntaxFactory.IdentifierName(SyntaxFactory.Identifier(node.GetLeadingTrivia(),
                        symbol.Value.GetFullyQualifiedNameAndValidate(this.semanticModel, spanStart),
                        node.GetTrailingTrivia())), node.OperatorToken, node.Name);
            }

            return node;
        }

        public override SyntaxNode VisitAccessorList(AccessorListSyntax node)
        {
            node = (AccessorListSyntax)base.VisitAccessorList(node);

            if (node.Accessors.Any(a => a.ExpressionBody != null))
            {
                var list = new List<AccessorDeclarationSyntax>();
                foreach (var accessor in node.Accessors)
                {
                    if (accessor != null && accessor.ExpressionBody != null)
                    {
                        list.Add(SyntaxHelper.ToStatementBody(accessor));
                    }
                    else
                    {
                        list.Add(accessor);
                    }
                }

                node = node.WithAccessors(SyntaxFactory.List(list));
            }            

            return node;
        }

        public override SyntaxNode VisitPropertyDeclaration(PropertyDeclarationSyntax node)
        {
            node = (PropertyDeclarationSyntax)base.VisitPropertyDeclaration(node);
            var newNode = node;

            if (node.ExpressionBody != null)
            {
                newNode = SyntaxHelper.ToStatementBody(node);
            }

            if (node.Modifiers.IndexOf(SyntaxKind.PrivateKeyword) > -1 && node.Modifiers.IndexOf(SyntaxKind.ProtectedKeyword) > -1)
            {
                newNode = newNode.WithModifiers(newNode.Modifiers.Replace(newNode.Modifiers[newNode.Modifiers.IndexOf(SyntaxKind.ProtectedKeyword)], SyntaxFactory.Token(SyntaxKind.InternalKeyword).WithTrailingTrivia(SyntaxFactory.Whitespace(" "))));
                newNode = newNode.WithModifiers(newNode.Modifiers.Replace(newNode.Modifiers[newNode.Modifiers.IndexOf(SyntaxKind.PrivateKeyword)], SyntaxFactory.Token(SyntaxKind.ProtectedKeyword).WithTrailingTrivia(SyntaxFactory.Whitespace(" "))));
                newNode = newNode.WithAttributeLists(newNode.AttributeLists.Add(SyntaxFactory.AttributeList(SyntaxFactory.SingletonSeparatedList(SyntaxFactory.Attribute(SyntaxFactory.IdentifierName("Bridge.PrivateProtectedAttribute"))))));
            }

            if (node.IsAutoProperty() && node.AccessorList != null)
            {
                var setter = node.AccessorList.Accessors.SingleOrDefault(a => a.Keyword.Kind() == SyntaxKind.SetKeyword);

                if (setter == null)
                {
                    var getter = node.AccessorList.Accessors.Single(a => a.Keyword.Kind() == SyntaxKind.GetKeyword);
                    setter = SyntaxFactory.AccessorDeclaration(SyntaxKind.SetAccessorDeclaration)
                            .WithModifiers(SyntaxTokenList.Create(SyntaxFactory.Token(SyntaxKind.PrivateKeyword).WithTrailingTrivia(SyntaxFactory.Space)))
                            .WithBody(null)
                            .WithSemicolonToken(SyntaxFactory.Token(SyntaxKind.SemicolonToken))
                            .WithLeadingTrivia(getter.GetLeadingTrivia())
                            .WithTrailingTrivia(getter.GetTrailingTrivia());

                    newNode = newNode.AddAccessorListAccessors(setter);
                }

                if (newNode.Initializer != null)
                {
                    var modifiers = SyntaxTokenList.Create(SyntaxFactory.Token(SyntaxKind.PrivateKeyword).WithTrailingTrivia(SyntaxFactory.Space));

                    if (node.Modifiers.Any(m => m.Kind() == SyntaxKind.StaticKeyword))
                    {
                        modifiers = modifiers.Add(SyntaxFactory.Token(SyntaxKind.StaticKeyword).WithTrailingTrivia(SyntaxFactory.Space));
                    }

                    var evc = SyntaxFactory.EqualsValueClause(newNode.Initializer.Value);
                    var field = SyntaxFactory.FieldDeclaration(SyntaxFactory.List<AttributeListSyntax>(),
                        modifiers,
                        SyntaxFactory.VariableDeclaration(
                            node.Type,
                            SyntaxFactory.SeparatedList(new[] {
                                SyntaxFactory.VariableDeclarator(
                                    SyntaxFactory.Identifier(AutoInitFieldPrefix + node.Identifier.Text),
                                    null,
                                    evc
                                )
                            })
                        ),
                        SyntaxFactory.Token(SyntaxKind.SemicolonToken)
                    );


                    fields.Add(field);
                    newNode = newNode.ReplaceNode(newNode.Initializer, (SyntaxNode)null);
                    var trivias = node.Initializer.GetLeadingTrivia().AddRange(node.Initializer.GetTrailingTrivia());
                    newNode = newNode.WithTrailingTrivia(trivias.AddRange(node.GetTrailingTrivia()));
                    newNode = SyntaxHelper.RemoveSemicolon(newNode, newNode.SemicolonToken, t => newNode.WithSemicolonToken(t));
                }

                return newNode;
            }

            return newNode.Equals(node) ? node : newNode;
        }

        public override SyntaxNode VisitEnumDeclaration(EnumDeclarationSyntax node)
        {
            node = base.VisitEnumDeclaration(node) as EnumDeclarationSyntax;

            if (node.Modifiers.IndexOf(SyntaxKind.PrivateKeyword) > -1 && node.Modifiers.IndexOf(SyntaxKind.ProtectedKeyword) > -1)
            {
                node = node.WithModifiers(node.Modifiers.Replace(node.Modifiers[node.Modifiers.IndexOf(SyntaxKind.ProtectedKeyword)], SyntaxFactory.Token(SyntaxKind.InternalKeyword).WithTrailingTrivia(SyntaxFactory.Whitespace(" "))));
                node = node.WithModifiers(node.Modifiers.Replace(node.Modifiers[node.Modifiers.IndexOf(SyntaxKind.PrivateKeyword)], SyntaxFactory.Token(SyntaxKind.ProtectedKeyword).WithTrailingTrivia(SyntaxFactory.Whitespace(" "))));
                node = node.WithAttributeLists(node.AttributeLists.Add(SyntaxFactory.AttributeList(SyntaxFactory.SingletonSeparatedList(SyntaxFactory.Attribute(SyntaxFactory.IdentifierName("Bridge.PrivateProtectedAttribute"))))));
            }

            return node;
        }

        public override SyntaxNode VisitFieldDeclaration(FieldDeclarationSyntax node)
        {
            node = base.VisitFieldDeclaration(node) as FieldDeclarationSyntax;

            if (node.Modifiers.IndexOf(SyntaxKind.PrivateKeyword) > -1 && node.Modifiers.IndexOf(SyntaxKind.ProtectedKeyword) > -1)
            {
                node = node.WithModifiers(node.Modifiers.Replace(node.Modifiers[node.Modifiers.IndexOf(SyntaxKind.ProtectedKeyword)], SyntaxFactory.Token(SyntaxKind.InternalKeyword).WithTrailingTrivia(SyntaxFactory.Whitespace(" "))));
                node = node.WithModifiers(node.Modifiers.Replace(node.Modifiers[node.Modifiers.IndexOf(SyntaxKind.PrivateKeyword)], SyntaxFactory.Token(SyntaxKind.ProtectedKeyword).WithTrailingTrivia(SyntaxFactory.Whitespace(" "))));
                node = node.WithAttributeLists(node.AttributeLists.Add(SyntaxFactory.AttributeList(SyntaxFactory.SingletonSeparatedList(SyntaxFactory.Attribute(SyntaxFactory.IdentifierName("Bridge.PrivateProtectedAttribute"))))));
            }

            return node;
        }

        public override SyntaxNode VisitEventDeclaration(EventDeclarationSyntax node)
        {
            node = base.VisitEventDeclaration(node) as EventDeclarationSyntax;

            if (node.Modifiers.IndexOf(SyntaxKind.PrivateKeyword) > -1 && node.Modifiers.IndexOf(SyntaxKind.ProtectedKeyword) > -1)
            {
                node = node.WithModifiers(node.Modifiers.Replace(node.Modifiers[node.Modifiers.IndexOf(SyntaxKind.ProtectedKeyword)], SyntaxFactory.Token(SyntaxKind.InternalKeyword).WithTrailingTrivia(SyntaxFactory.Whitespace(" "))));
                node = node.WithModifiers(node.Modifiers.Replace(node.Modifiers[node.Modifiers.IndexOf(SyntaxKind.PrivateKeyword)], SyntaxFactory.Token(SyntaxKind.ProtectedKeyword).WithTrailingTrivia(SyntaxFactory.Whitespace(" "))));
                node = node.WithAttributeLists(node.AttributeLists.Add(SyntaxFactory.AttributeList(SyntaxFactory.SingletonSeparatedList(SyntaxFactory.Attribute(SyntaxFactory.IdentifierName("Bridge.PrivateProtectedAttribute"))))));
            }

            return node;
        }

        public override SyntaxNode VisitEventFieldDeclaration(EventFieldDeclarationSyntax node)
        {
            node = base.VisitEventFieldDeclaration(node) as EventFieldDeclarationSyntax;

            if (node.Modifiers.IndexOf(SyntaxKind.PrivateKeyword) > -1 && node.Modifiers.IndexOf(SyntaxKind.ProtectedKeyword) > -1)
            {
                node = node.WithModifiers(node.Modifiers.Replace(node.Modifiers[node.Modifiers.IndexOf(SyntaxKind.ProtectedKeyword)], SyntaxFactory.Token(SyntaxKind.InternalKeyword).WithTrailingTrivia(SyntaxFactory.Whitespace(" "))));
                node = node.WithModifiers(node.Modifiers.Replace(node.Modifiers[node.Modifiers.IndexOf(SyntaxKind.PrivateKeyword)], SyntaxFactory.Token(SyntaxKind.ProtectedKeyword).WithTrailingTrivia(SyntaxFactory.Whitespace(" "))));
                node = node.WithAttributeLists(node.AttributeLists.Add(SyntaxFactory.AttributeList(SyntaxFactory.SingletonSeparatedList(SyntaxFactory.Attribute(SyntaxFactory.IdentifierName("Bridge.PrivateProtectedAttribute"))))));
            }

            return node;
        }

        public override SyntaxNode VisitDelegateDeclaration(DelegateDeclarationSyntax node)
        {
            node = base.VisitDelegateDeclaration(node) as DelegateDeclarationSyntax;

            if (node.Modifiers.IndexOf(SyntaxKind.PrivateKeyword) > -1 && node.Modifiers.IndexOf(SyntaxKind.ProtectedKeyword) > -1)
            {
                node = node.WithModifiers(node.Modifiers.Replace(node.Modifiers[node.Modifiers.IndexOf(SyntaxKind.ProtectedKeyword)], SyntaxFactory.Token(SyntaxKind.InternalKeyword).WithTrailingTrivia(SyntaxFactory.Whitespace(" "))));
                node = node.WithModifiers(node.Modifiers.Replace(node.Modifiers[node.Modifiers.IndexOf(SyntaxKind.PrivateKeyword)], SyntaxFactory.Token(SyntaxKind.ProtectedKeyword).WithTrailingTrivia(SyntaxFactory.Whitespace(" "))));
                node = node.WithAttributeLists(node.AttributeLists.Add(SyntaxFactory.AttributeList(SyntaxFactory.SingletonSeparatedList(SyntaxFactory.Attribute(SyntaxFactory.IdentifierName("Bridge.PrivateProtectedAttribute"))))));
            }

            return node;
        }

        public override SyntaxNode VisitStructDeclaration(StructDeclarationSyntax node)
        {
            this.currentType.Push(this.semanticModel.GetDeclaredSymbol(node));

            var old = this.fields;
            this.fields = new List<MemberDeclarationSyntax>();
            var isReadOnly = node.Modifiers.IndexOf(SyntaxKind.ReadOnlyKeyword) > -1;
            var isRef = node.Modifiers.IndexOf(SyntaxKind.RefKeyword) > -1;
            var c = base.VisitStructDeclaration(node) as StructDeclarationSyntax;

            if (c != null && this.fields.Count > 0)
            {
                var list = c.Members.ToList();
                var arr = this.fields.ToArray();
                var trivias = c.CloseBraceToken.LeadingTrivia;
                trivias = trivias.Insert(0, SyntaxFactory.Whitespace("\n")).Add(SyntaxFactory.Whitespace("\n"));
                arr[0] = arr[0].WithLeadingTrivia(trivias);
                c = c.WithCloseBraceToken(c.CloseBraceToken.WithLeadingTrivia(null));
                list.AddRange(arr);
                c = c.WithMembers(SyntaxFactory.List(list));
            }

            if (c != null && isReadOnly)
            {
                c = c.WithModifiers(c.Modifiers.RemoveAt(c.Modifiers.IndexOf(SyntaxKind.ReadOnlyKeyword)));
                c = c.WithAttributeLists(c.AttributeLists.Add(SyntaxFactory.AttributeList(SyntaxFactory.SeparatedList<AttributeSyntax>(new AttributeSyntax[1] { SyntaxFactory.Attribute(SyntaxFactory.IdentifierName("Bridge.Immutable")) })).WithTrailingTrivia(SyntaxFactory.Whitespace("\n"))));
            }

            if (c != null && isRef)
            {
                c = c.WithModifiers(c.Modifiers.RemoveAt(c.Modifiers.IndexOf(SyntaxKind.RefKeyword)));
            }

            if (c.Modifiers.IndexOf(SyntaxKind.PrivateKeyword) > -1 && c.Modifiers.IndexOf(SyntaxKind.ProtectedKeyword) > -1)
            {
                c = c.WithModifiers(c.Modifiers.Replace(c.Modifiers[c.Modifiers.IndexOf(SyntaxKind.ProtectedKeyword)], SyntaxFactory.Token(SyntaxKind.InternalKeyword).WithTrailingTrivia(SyntaxFactory.Whitespace(" "))));
                c = c.WithModifiers(c.Modifiers.Replace(c.Modifiers[c.Modifiers.IndexOf(SyntaxKind.PrivateKeyword)], SyntaxFactory.Token(SyntaxKind.ProtectedKeyword).WithTrailingTrivia(SyntaxFactory.Whitespace(" "))));
                node = node.WithAttributeLists(node.AttributeLists.Add(SyntaxFactory.AttributeList(SyntaxFactory.SingletonSeparatedList(SyntaxFactory.Attribute(SyntaxFactory.IdentifierName("Bridge.PrivateProtectedAttribute"))))));
            }

            this.fields = old;
            this.currentType.Pop();

            return c;
        }

        public override SyntaxNode VisitClassDeclaration(ClassDeclarationSyntax node)
        {
            this.currentType.Push(this.semanticModel.GetDeclaredSymbol(node));
            var oldIndex = this.IndexInstance;
            this.IndexInstance = 0;
            var old = this.fields;
            this.fields = new List<MemberDeclarationSyntax>();

            var c = base.VisitClassDeclaration(node) as ClassDeclarationSyntax;

            if (c != null && this.fields.Count > 0)
            {
                var list = c.Members.ToList();
                var arr = this.fields.ToArray();
                var trivias = c.CloseBraceToken.LeadingTrivia;
                trivias = trivias.Insert(0, SyntaxFactory.Whitespace("\n")).Add(SyntaxFactory.Whitespace("\n"));
                arr[0] = arr[0].WithLeadingTrivia(trivias);
                c = c.WithCloseBraceToken(c.CloseBraceToken.WithLeadingTrivia(null));
                list.AddRange(arr);
                c = c.WithMembers(SyntaxFactory.List(list));
            }

            if (c.Modifiers.IndexOf(SyntaxKind.PrivateKeyword) > -1 && c.Modifiers.IndexOf(SyntaxKind.ProtectedKeyword) > -1)
            {
                c = c.WithModifiers(c.Modifiers.Replace(c.Modifiers[c.Modifiers.IndexOf(SyntaxKind.ProtectedKeyword)], SyntaxFactory.Token(SyntaxKind.InternalKeyword).WithTrailingTrivia(SyntaxFactory.Whitespace(" "))));
                c = c.WithModifiers(c.Modifiers.Replace(c.Modifiers[c.Modifiers.IndexOf(SyntaxKind.PrivateKeyword)], SyntaxFactory.Token(SyntaxKind.ProtectedKeyword).WithTrailingTrivia(SyntaxFactory.Whitespace(" "))));
                node = node.WithAttributeLists(node.AttributeLists.Add(SyntaxFactory.AttributeList(SyntaxFactory.SingletonSeparatedList(SyntaxFactory.Attribute(SyntaxFactory.IdentifierName("Bridge.PrivateProtectedAttribute"))))));
            }

            this.fields = old;
            this.IndexInstance = oldIndex;
            this.currentType.Pop();

            return c;
        }

        public override SyntaxNode VisitInterfaceDeclaration(InterfaceDeclarationSyntax node)
        {
            this.currentType.Push(this.semanticModel.GetDeclaredSymbol(node));
            node = base.VisitInterfaceDeclaration(node) as InterfaceDeclarationSyntax;
            this.currentType.Pop();

            if (node.Modifiers.IndexOf(SyntaxKind.PrivateKeyword) > -1 && node.Modifiers.IndexOf(SyntaxKind.ProtectedKeyword) > -1)
            {
                node = node.WithModifiers(node.Modifiers.Replace(node.Modifiers[node.Modifiers.IndexOf(SyntaxKind.ProtectedKeyword)], SyntaxFactory.Token(SyntaxKind.InternalKeyword).WithTrailingTrivia(SyntaxFactory.Whitespace(" "))));
                node = node.WithModifiers(node.Modifiers.Replace(node.Modifiers[node.Modifiers.IndexOf(SyntaxKind.PrivateKeyword)], SyntaxFactory.Token(SyntaxKind.ProtectedKeyword).WithTrailingTrivia(SyntaxFactory.Whitespace(" "))));
                node = node.WithAttributeLists(node.AttributeLists.Add(SyntaxFactory.AttributeList(SyntaxFactory.SingletonSeparatedList(SyntaxFactory.Attribute(SyntaxFactory.IdentifierName("Bridge.PrivateProtectedAttribute"))))));
            }

            return node;
        }

        public override SyntaxNode VisitMethodDeclaration(MethodDeclarationSyntax node)
        {
            var oldIndex = this.IndexInstance;
            this.IndexInstance = 0;

            node = base.VisitMethodDeclaration(node) as MethodDeclarationSyntax;

            if (node.Modifiers.IndexOf(SyntaxKind.PrivateKeyword) > -1 && node.Modifiers.IndexOf(SyntaxKind.ProtectedKeyword) > -1)
            {
                node = node.WithModifiers(node.Modifiers.Replace(node.Modifiers[node.Modifiers.IndexOf(SyntaxKind.ProtectedKeyword)], SyntaxFactory.Token(SyntaxKind.InternalKeyword).WithTrailingTrivia(SyntaxFactory.Whitespace(" "))));
                node = node.WithModifiers(node.Modifiers.Replace(node.Modifiers[node.Modifiers.IndexOf(SyntaxKind.PrivateKeyword)], SyntaxFactory.Token(SyntaxKind.ProtectedKeyword).WithTrailingTrivia(SyntaxFactory.Whitespace(" "))));
                node = node.WithAttributeLists(node.AttributeLists.Add(SyntaxFactory.AttributeList(SyntaxFactory.SingletonSeparatedList(SyntaxFactory.Attribute(SyntaxFactory.IdentifierName("Bridge.PrivateProtectedAttribute"))))));
            }

            if (node.ExpressionBody != null)
            {
                return SyntaxHelper.ToStatementBody(node);
            }

            this.IndexInstance = oldIndex;

            return node;
        }

        public override SyntaxNode VisitAccessorDeclaration(AccessorDeclarationSyntax node)
        {
            var oldIndex = this.IndexInstance;
            this.IndexInstance = 0;
            var result = base.VisitAccessorDeclaration(node);

            this.IndexInstance = oldIndex;
            return result;
        }

        public override SyntaxNode VisitOperatorDeclaration(OperatorDeclarationSyntax node)
        {
            node = (OperatorDeclarationSyntax)base.VisitOperatorDeclaration(node);
            if (node.ExpressionBody != null)
            {
                return SyntaxHelper.ToStatementBody(node);
            }

            return node;
        }

        public override SyntaxNode VisitConversionOperatorDeclaration(ConversionOperatorDeclarationSyntax node)
        {
            node = (ConversionOperatorDeclarationSyntax)base.VisitConversionOperatorDeclaration(node);
            if (node.ExpressionBody != null)
            {
                return SyntaxHelper.ToStatementBody(node);
            }

            return node;
        }

        public override SyntaxNode VisitIndexerDeclaration(IndexerDeclarationSyntax node)
        {
            node = (IndexerDeclarationSyntax)base.VisitIndexerDeclaration(node);
            if (node.ExpressionBody != null)
            {
                return SyntaxHelper.ToStatementBody(node);
            }

            return node;
        }

        public override SyntaxNode VisitParenthesizedLambdaExpression(ParenthesizedLambdaExpressionSyntax node)
        {
            var ti = this.semanticModel.GetTypeInfo(node);
            var oldValue = this.IsExpressionOfT;

            if (ti.Type != null && ti.Type.IsExpressionOfT() ||
                ti.ConvertedType != null && ti.ConvertedType.IsExpressionOfT())
            {
                this.IsExpressionOfT = true;
            }

            var newNode = base.VisitParenthesizedLambdaExpression(node);

            this.IsExpressionOfT = oldValue;

            return newNode;
        }

        public override SyntaxNode VisitSimpleLambdaExpression(SimpleLambdaExpressionSyntax node)
        {
            var ti = this.semanticModel.GetTypeInfo(node);
            var oldValue = this.IsExpressionOfT;

            if (ti.Type != null && ti.Type.IsExpressionOfT() ||
                ti.ConvertedType != null && ti.ConvertedType.IsExpressionOfT())
            {
                this.IsExpressionOfT = true;
            }

            var newNode = base.VisitSimpleLambdaExpression(node);

            this.IsExpressionOfT = oldValue;

            return newNode;
        }

        public bool IsExpressionOfT
        {
            get; set;
        }

        private int IndexInstance
        {
            get;
            set;
        }

        private class InitializerInfo
        {
            public IMethodSymbol method;
            public List<InitializerInfo> nested;
        }

        private bool NeedRewriteInitializer(InitializerExpressionSyntax initializer, List<InitializerInfo> infos, ref bool extensionMethodExists, ref bool isImplicitElementAccessSyntax)
        {
            bool need = false;
            foreach (var init in initializer.Expressions)
            {
                var info = new InitializerInfo();
                infos.Add(info);
                var ae = init as AssignmentExpressionSyntax;
                if (ae?.Right is InitializerExpressionSyntax)
                {
                    info.nested = new List<InitializerInfo>();
                    if (NeedRewriteInitializer((InitializerExpressionSyntax)ae.Right, info.nested, ref extensionMethodExists, ref isImplicitElementAccessSyntax))
                    {
                        need = true;
                    }
                }
                else
                {
                    var symbolInfo = this.semanticModel.GetCollectionInitializerSymbolInfo(init);
                    var collectionInitializer = symbolInfo.Symbol;

                    if (symbolInfo.Symbol == null && symbolInfo.CandidateSymbols.Length > 0)
                    {
                        collectionInitializer = symbolInfo.CandidateSymbols[0];
                    }

                    var mInfo = collectionInitializer != null ? collectionInitializer as IMethodSymbol : null;
                    if (mInfo != null)
                    {
                        info.method = mInfo;
                        if (mInfo.IsExtensionMethod)
                        {
                            extensionMethodExists = true;
                        }
                        need = true;
                    }

                    if (init.Kind() == SyntaxKind.SimpleAssignmentExpression)
                    {
                        var be = (AssignmentExpressionSyntax)init;
                        if (be.Left is ImplicitElementAccessSyntax)
                        {
                            isImplicitElementAccessSyntax = true;
                            need = true;
                        }
                    }
                }
            }

            return need;
        }

        public override SyntaxNode VisitObjectCreationExpression(ObjectCreationExpressionSyntax node)
        {
            bool needRewrite = false;
            List<InitializerInfo> initializerInfos = null;
            bool extensionMethodExists = false;
            bool isImplicitElementAccessSyntax = false;

            if (node.Initializer != null)
            {
                initializerInfos = new List<InitializerInfo>();
                needRewrite = NeedRewriteInitializer(node.Initializer, initializerInfos, ref extensionMethodExists, ref isImplicitElementAccessSyntax);
            }

            node = (ObjectCreationExpressionSyntax)base.VisitObjectCreationExpression(node);
            if (needRewrite)
            {
                if (this.IsExpressionOfT)
                {
                    if (isImplicitElementAccessSyntax)
                    {
                        var mapped = this.semanticModel.SyntaxTree.GetLineSpan(node.Span);
                        throw new Exception(string.Format(CultureInfo.InvariantCulture, "{2} - {3}({0},{1}): {4}", mapped.StartLinePosition.Line + 1, mapped.StartLinePosition.Character + 1, "Index collection initializer is not supported inside Expression<T>", this.semanticModel.SyntaxTree.FilePath, node.ToString()));
                    }

                    if (extensionMethodExists)
                    {
                        var mapped = this.semanticModel.SyntaxTree.GetLineSpan(node.Span);
                        throw new Exception(string.Format(CultureInfo.InvariantCulture, "{2} - {3}({0},{1}): {4}", mapped.StartLinePosition.Line + 1, mapped.StartLinePosition.Character + 1, "Extension method for collection initializer is not supported inside Expression<T>", this.semanticModel.SyntaxTree.FilePath, node.ToString()));
                    }

                    return node;
                }

                var initializers = node.Initializer.Expressions;
                ExpressionSyntax[] args = new ExpressionSyntax[2];
                var target = node.WithInitializer(null).WithoutTrivia();

                if (target.ArgumentList == null)
                {
                    target = target.WithArgumentList(SyntaxFactory.ArgumentList());
                }

                args[0] = target;

                List<StatementSyntax> statements = new List<StatementSyntax>();

                var parent = node.Parent;

                while (parent != null && !(parent is MethodDeclarationSyntax) && !(parent is ClassDeclarationSyntax))
                {
                    parent = parent.Parent;
                }

                string instance = "_o" + ++IndexInstance;
                if (parent != null)
                {
                    var info = LocalUsageGatherer.GatherInfo(this.semanticModel, parent);
                    while (info.DirectlyOrIndirectlyUsedLocals.Any(s => s.Name == instance) || info.Names.Contains(instance))
                    {
                        instance = "_o" + ++IndexInstance;
                    }
                }

                SharpSixRewriter.ConvertInitializers(initializers, instance, statements, initializerInfos);

                statements.Add(SyntaxFactory.ReturnStatement(SyntaxFactory.IdentifierName(instance).WithLeadingTrivia(SyntaxFactory.Space)));

                var body = SyntaxFactory.Block(statements);
                var lambda = SyntaxFactory.ParenthesizedLambdaExpression(SyntaxFactory.ParameterList(SyntaxFactory.SeparatedList(new[] { SyntaxFactory.Parameter(SyntaxFactory.Identifier(instance)) })), body);
                var isAsync = AwaitersCollector.HasAwaiters(this.semanticModel, node);
                if (isAsync)
                {
                    lambda = lambda.WithAsyncKeyword(SyntaxFactory.Token(SyntaxKind.AsyncKeyword));
                }

                args[1] = lambda;

                var methodIdentifier = isAsync ? SyntaxFactory.IdentifierName("global::Bridge.Script.AsyncCallFor") : SyntaxFactory.IdentifierName("global::Bridge.Script.CallFor");
                var invocation = SyntaxFactory.InvocationExpression(methodIdentifier, SyntaxFactory.ArgumentList(SyntaxFactory.SeparatedList(args.Select(SyntaxFactory.Argument))));
                invocation = invocation.WithLeadingTrivia(node.GetLeadingTrivia()).WithTrailingTrivia(node.GetTrailingTrivia());

                if (isAsync)
                {
                    return SyntaxFactory.AwaitExpression(invocation.WithLeadingTrivia(invocation.GetLeadingTrivia().Insert(0, SyntaxFactory.Whitespace(" "))));
                }

                return invocation;
            }

            return node;
        }

        private static void ConvertInitializers(SeparatedSyntaxList<ExpressionSyntax> initializers, string instance, List<StatementSyntax> statements, List<InitializerInfo> infos)
        {
            var idx = 0;
            foreach (var init in initializers)
            {
                var info = infos[idx++];
                var mInfo = info != null && info.method != null ? info.method : null;
                if (mInfo != null)
                {
                    if (mInfo.IsStatic)
                    {
                        var ie = SyntaxHelper.GenerateStaticMethodCall(mInfo.Name,
                            mInfo.ContainingType.FullyQualifiedName(),
                            new[]
                            {
                                SyntaxFactory.Argument(SyntaxFactory.IdentifierName(instance)),
                                SyntaxFactory.Argument(init.WithoutTrivia())
                            }, mInfo.TypeArguments.ToArray());
                        statements.Add(ie);
                    }
                    else
                    {
                        ArgumentSyntax[] arguments = null;
                        if (init.Kind() == SyntaxKind.ComplexElementInitializerExpression)
                        {
                            var complexInit = (InitializerExpressionSyntax)init;

                            arguments = new ArgumentSyntax[complexInit.Expressions.Count];
                            for (int i = 0; i < complexInit.Expressions.Count; i++)
                            {
                                arguments[i] = SyntaxFactory.Argument(complexInit.Expressions[i].WithoutTrivia());
                            }
                        }
                        else
                        {
                            arguments = new[]
                            {
                                SyntaxFactory.Argument(init.WithoutTrivia())
                            };
                        }

                        var ie = SyntaxHelper.GenerateMethodCall(mInfo.Name, instance, arguments, mInfo.TypeArguments.ToArray());
                        statements.Add(ie);
                    }
                }
                else
                {
                    var be = (AssignmentExpressionSyntax)init;

                    if (be.Right is InitializerExpressionSyntax)
                    {
                        string name = null;
                        if (be.Left is IdentifierNameSyntax)
                        {
                            var identifier = (IdentifierNameSyntax)be.Left;
                            name = instance + "." + identifier.Identifier.ValueText;
                        }
                        else if (be.Left is ImplicitElementAccessSyntax)
                        {
                            name = SyntaxFactory.ElementAccessExpression(SyntaxFactory.IdentifierName(instance),
                                    ((ImplicitElementAccessSyntax)be.Left).ArgumentList.WithoutTrivia()).ToString();
                        }
                        else
                        {
                            name = instance;
                        }

                        SharpSixRewriter.ConvertInitializers(((InitializerExpressionSyntax)be.Right).Expressions, name, statements, info.nested);
                    }
                    else
                    {
                        var indexerKeys = be.Left as ImplicitElementAccessSyntax;

                        if (indexerKeys != null)
                        {
                            be = be.WithLeft(SyntaxFactory.ElementAccessExpression(SyntaxFactory.IdentifierName(instance),
                                    indexerKeys.ArgumentList.WithoutTrivia()));
                        }
                        else
                        {
                            var identifier = (IdentifierNameSyntax)be.Left;
                            be =
                                be.WithLeft(SyntaxFactory.MemberAccessExpression(SyntaxKind.SimpleMemberAccessExpression,
                                    SyntaxFactory.IdentifierName(instance),
                                    SyntaxFactory.IdentifierName(identifier.Identifier.ValueText)));
                        }

                        be = be.WithRight(be.Right.WithoutTrivia());
                        be = be.WithoutTrivia();

                        statements.Add(SyntaxFactory.ExpressionStatement(be, SyntaxFactory.Token(SyntaxKind.SemicolonToken)));
                    }
                }
            }
        }

        public override SyntaxNode VisitThrowExpression(ThrowExpressionSyntax node)
        {
            if (node.Parent is ExpressionStatementSyntax es && es.Expression == node || node.Parent is ThrowStatementSyntax)
            {
                return base.VisitThrowExpression(node);
            }

            var typeInfo = semanticModel.GetTypeInfo(node);

            node = (ThrowExpressionSyntax)base.VisitThrowExpression(node);

            if ((typeInfo.ConvertedType ?? typeInfo.Type) != null)
            {
                var type = typeInfo.ConvertedType ?? typeInfo.Type;

                var invocation = SyntaxFactory.InvocationExpression(
                        SyntaxFactory.ParenthesizedExpression(
                            SyntaxFactory.CastExpression(
                                SyntaxFactory.QualifiedName(
                                    SyntaxFactory.IdentifierName(SYSTEM_IDENTIFIER),
                                    SyntaxFactory.GenericName(
                                        SyntaxFactory.Identifier(FUNC_IDENTIFIER))
                                    .WithTypeArgumentList(
                                        SyntaxFactory.TypeArgumentList(
                                            SyntaxFactory.SingletonSeparatedList<TypeSyntax>(
                                                SyntaxFactory.ParseTypeName(type.ToMinimalDisplayString(semanticModel, node.GetLocation().SourceSpan.Start))
                                                ))
                                        .WithLessThanToken(
                                            SyntaxFactory.Token(SyntaxKind.LessThanToken))
                                        .WithGreaterThanToken(
                                            SyntaxFactory.Token(SyntaxKind.GreaterThanToken))))
                                .WithDotToken(
                                    SyntaxFactory.Token(SyntaxKind.DotToken)),
                                SyntaxFactory.ParenthesizedExpression(
                                    SyntaxFactory.ParenthesizedLambdaExpression(
                                        SyntaxFactory.Block(
                                            SyntaxFactory.SingletonList<StatementSyntax>(
                                                SyntaxFactory.ThrowStatement(node.Expression)
                                                .WithThrowKeyword(
                                                    SyntaxFactory.Token(SyntaxKind.ThrowKeyword))
                                                .WithSemicolonToken(
                                                    SyntaxFactory.Token(SyntaxKind.SemicolonToken))
                                                .NormalizeWhitespace()))
                                        .WithOpenBraceToken(
                                            SyntaxFactory.Token(SyntaxKind.OpenBraceToken))
                                        .WithCloseBraceToken(
                                            SyntaxFactory.Token(SyntaxKind.CloseBraceToken)))
                                    .WithParameterList(
                                        SyntaxFactory.ParameterList()
                                        .WithOpenParenToken(
                                            SyntaxFactory.Token(SyntaxKind.OpenParenToken))
                                        .WithCloseParenToken(
                                            SyntaxFactory.Token(SyntaxKind.CloseParenToken)))
                                    .WithArrowToken(
                                        SyntaxFactory.Token(SyntaxKind.EqualsGreaterThanToken)))
                                .WithOpenParenToken(
                                    SyntaxFactory.Token(SyntaxKind.OpenParenToken))
                                .WithCloseParenToken(
                                    SyntaxFactory.Token(SyntaxKind.CloseParenToken)))
                            .WithOpenParenToken(
                                SyntaxFactory.Token(SyntaxKind.OpenParenToken))
                            .WithCloseParenToken(
                                SyntaxFactory.Token(SyntaxKind.CloseParenToken)))
                        .WithOpenParenToken(
                            SyntaxFactory.Token(SyntaxKind.OpenParenToken))
                        .WithCloseParenToken(
                            SyntaxFactory.Token(SyntaxKind.CloseParenToken)))
                    .WithArgumentList(
                        SyntaxFactory.ArgumentList()
                        .WithOpenParenToken(
                            SyntaxFactory.Token(SyntaxKind.OpenParenToken))
                        .WithCloseParenToken(
                            SyntaxFactory.Token(SyntaxKind.CloseParenToken)));

                return invocation;
            }

            return node;
        }

        public override SyntaxNode VisitTryStatement(TryStatementSyntax node)
        {
            var replace = node.Catches.Any(c => c.Filter != null);
            var parent = node.Parent;

            if (replace)
            {
                while (parent != null && !(parent is MethodDeclarationSyntax) && !(parent is ClassDeclarationSyntax))
                {
                    parent = parent.Parent;
                }
            }

            node = (TryStatementSyntax)base.VisitTryStatement(node);

            List<CatchClauseSyntax> catches = new List<CatchClauseSyntax>();

            if (replace)
            {
                string instance = "_e" + ++IndexInstance;
                if (parent != null)
                {
                    var info = LocalUsageGatherer.GatherInfo(this.semanticModel, parent);
                    while (info.DirectlyOrIndirectlyUsedLocals.Any(s => s.Name == instance) || info.Names.Contains(instance))
                    {
                        instance = "_e" + ++IndexInstance;
                    }
                }

                List<StatementSyntax> statements = new List<StatementSyntax>();
                statements.Add(CreateIfForCatch(node.Catches, 0, instance));

                var catchDeclaration = SyntaxFactory.CatchDeclaration(SyntaxFactory.ParseTypeName(CS.Types.System.Exception.NAME), SyntaxFactory.Identifier(instance));
                catches.Add(SyntaxFactory.CatchClause(catchDeclaration, null, SyntaxFactory.Block(statements)));
            }

            return replace ? node.WithCatches(SyntaxFactory.List(catches)).NormalizeWhitespace() : node;
        }

        private IfStatementSyntax CreateIfForCatch(SyntaxList<CatchClauseSyntax> catches, int index, string varName)
        {
            var catchItem = catches[index];
            ExpressionSyntax condition = SyntaxFactory.BinaryExpression(SyntaxKind.IsExpression,
                    SyntaxFactory.IdentifierName(varName), catchItem.Declaration.Type);

            if (catchItem.Filter != null)
            {
                var methodIdentifier = SyntaxFactory.IdentifierName("global::Bridge.Script.SafeFunc");
                var lambda = SyntaxFactory.ParenthesizedLambdaExpression(SyntaxFactory.ParameterList(), catchItem.Declaration.Identifier.Kind() != SyntaxKind.None ? new IdentifierReplacer(catchItem.Declaration.Identifier.Value.ToString(), SyntaxFactory.CastExpression(catchItem.Declaration.Type, SyntaxFactory.IdentifierName(varName))).Replace(catchItem.Filter.FilterExpression) : catchItem.Filter.FilterExpression);
                var invocation = SyntaxFactory.InvocationExpression(methodIdentifier, SyntaxFactory.ArgumentList(SyntaxFactory.SeparatedList(new[] { SyntaxFactory.Argument(
                    lambda
                    ) })));

                condition = SyntaxFactory.BinaryExpression(SyntaxKind.LogicalAndExpression, condition, invocation);
            }

            BlockSyntax block = catchItem.Block.WithoutTrivia();

            if (catchItem.Declaration.Identifier.Kind() != SyntaxKind.None)
            {
                var variableStatement = SyntaxFactory.LocalDeclarationStatement(SyntaxFactory.VariableDeclaration(catchItem.Declaration.Type,
                    SyntaxFactory.SeparatedList<VariableDeclaratorSyntax>(new[] { SyntaxFactory.VariableDeclarator(SyntaxFactory.Identifier(catchItem.Declaration.Identifier.Text)).WithInitializer(
                        SyntaxFactory.EqualsValueClause(SyntaxFactory.CastExpression(catchItem.Declaration.Type, SyntaxFactory.IdentifierName(varName)))
                    ) })));

                block = block.WithStatements(block.Statements.Insert(0, variableStatement));
            }

            var ifStatement = index < (catches.Count - 1) ?
                                SyntaxFactory.IfStatement(condition, block, SyntaxFactory.ElseClause(CreateIfForCatch(catches, index + 1, varName))) :
                                SyntaxFactory.IfStatement(condition, block, SyntaxFactory.ElseClause(SyntaxFactory.ThrowStatement()));

            return ifStatement;
        }

        private class ConditionalAccessInfo
        {
            public ConditionalAccessInfo(SemanticModel semanticModel, ConditionalAccessExpressionSyntax node)
            {
                Node = node;
                var trueSymbolNode = semanticModel.GetSymbolInfo(node.WhenNotNull).Symbol;

                var expressionType = semanticModel.GetTypeInfo(node.Expression).Type;
                ExpressionType = SyntaxFactory.ParseTypeName(expressionType.ToMinimalDisplayString(semanticModel, node.Expression.GetLocation().SourceSpan.Start));
                this.IsNullable = expressionType.OriginalDefinition.SpecialType == SpecialType.System_Nullable_T;

                if (this.IsNullable)
                {
                    UnderlyingNullableType = ((INamedTypeSymbol)expressionType).TypeArguments[0];
                    ExpressionType = SyntaxFactory.ParseTypeName(UnderlyingNullableType.ToMinimalDisplayString(semanticModel, node.Expression.GetLocation().SourceSpan.Start));
                }

                var resultType = semanticModel.GetTypeInfo(node).Type;
                ResultType = SyntaxFactory.ParseTypeName(resultType.ToMinimalDisplayString(semanticModel, node.GetLocation().SourceSpan.Start));

                IsResultVoid = resultType.SpecialType == SpecialType.System_Void;
                IsComplex = IsExpressionComplexEnoughToGetATemporaryVariable.IsComplex(semanticModel, node.Expression);

                if (trueSymbolNode != null && trueSymbolNode is IFieldSymbol && trueSymbolNode.ContainingType.IsTupleType)
                {
                    var field = trueSymbolNode as IFieldSymbol;
                    var tupleField = field.CorrespondingTupleField;
                    TupleField = "." + tupleField.Name;
                }
            }

            public ConditionalAccessExpressionSyntax Node;
            public TypeSyntax ResultType;
            public TypeSyntax ExpressionType;
            public bool IsResultVoid;
            public bool IsComplex;
            public bool IsNullable;
            public ITypeSymbol UnderlyingNullableType;
            public string TupleField;
        }

        public override SyntaxNode VisitConditionalAccessExpression(ConditionalAccessExpressionSyntax node)
        {
            if (node.Parent is ConditionalAccessExpressionSyntax)
            {
                return base.VisitConditionalAccessExpression(node);
            }

            var infos = new List<ConditionalAccessInfo> { new ConditionalAccessInfo(semanticModel, node) };

            var conditionNode = node.WhenNotNull as ConditionalAccessExpressionSyntax;
            while (conditionNode != null)
            {
                infos.Add(new ConditionalAccessInfo(semanticModel, conditionNode));
                conditionNode = conditionNode.WhenNotNull as ConditionalAccessExpressionSyntax;
            }

            bool needParenthesized = node.Parent is BinaryExpressionSyntax
                                     || node.Parent is AwaitExpressionSyntax
                                     || node.Parent is PostfixUnaryExpressionSyntax
                                     || node.Parent is PrefixUnaryExpressionSyntax;

            node = (ConditionalAccessExpressionSyntax)base.VisitConditionalAccessExpression(node);
            var idx = 0;
            infos[idx++].Node = node;
            conditionNode = node.WhenNotNull as ConditionalAccessExpressionSyntax;
            while (conditionNode != null)
            {
                infos[idx++].Node = conditionNode;
                conditionNode = conditionNode.WhenNotNull as ConditionalAccessExpressionSyntax;
            }

            ExpressionSyntax parentTarget = null;
            List<BinaryExpressionSyntax> conditions = new List<BinaryExpressionSyntax>();
            foreach (var info in infos)
            {
                ExpressionSyntax leftForCondition;
                if (info.IsComplex)
                {
                    var key = tempKey++;
                    var keyArg = SyntaxFactory.LiteralExpression(SyntaxKind.StringLiteralExpression, SyntaxFactory.Literal("key" + key));
                    var methodIdentifier = SyntaxFactory.IdentifierName("global::Bridge.Script.ToTemp");
                    var arg = parentTarget != null
                        ? SyntaxFactory.ParseExpression(parentTarget.ToString() + info.Node.Expression.WithoutTrivia().ToString())
                        : info.Node.Expression.WithoutTrivia();

                    leftForCondition = SyntaxFactory.InvocationExpression(methodIdentifier,
                        SyntaxFactory.ArgumentList(SyntaxFactory.SeparatedList(new[] { SyntaxFactory.Argument(keyArg), SyntaxFactory.Argument(arg) })));

                    var parentMethodIdentifier = SyntaxFactory.GenericName(SyntaxFactory.Identifier("global::Bridge.Script.FromTemp"),
                                                                 SyntaxFactory.TypeArgumentList(SyntaxFactory.SeparatedList(new[] { info.ExpressionType })));
                    var invocation = SyntaxFactory.InvocationExpression(parentMethodIdentifier,
                        SyntaxFactory.ArgumentList(SyntaxFactory.SeparatedList(new[] { SyntaxFactory.Argument(keyArg) })));

                    parentTarget = SyntaxFactory.ParseExpression(invocation.ToString());
                }
                else
                {
                    leftForCondition = SyntaxFactory.ParseExpression(parentTarget != null ? (parentTarget.ToString() + info.Node.Expression.WithoutTrivia().ToString()) : (info.Node.Expression.WithoutTrivia().ToString()));
                    parentTarget = SyntaxFactory.ParseExpression(parentTarget != null ? (parentTarget.ToString() + info.Node.Expression.WithoutTrivia().ToString() + (info.IsNullable ? ".Value" : "")) : (info.Node.Expression.WithoutTrivia().ToString() + (info.IsNullable ? ".Value" : "")));
                }

                conditions.Add(SyntaxFactory.BinaryExpression(SyntaxKind.NotEqualsExpression, leftForCondition, SyntaxFactory.LiteralExpression(SyntaxKind.NullLiteralExpression)));
            }

            BinaryExpressionSyntax condition = null;

            if (conditions.Count == 1)
            {
                condition = conditions[0];
            }
            else
            {
                condition = conditions[0];

                for (int i = 1; i < conditions.Count; i++)
                {
                    condition = SyntaxFactory.BinaryExpression(SyntaxKind.LogicalAndExpression, condition, conditions[i]);
                }
            }

            ConditionalAccessInfo lastInfo = infos.Last();
            ExpressionSyntax whenTrue = SyntaxFactory.ParseExpression(parentTarget.ToString() + (lastInfo.TupleField ?? lastInfo.Node.WhenNotNull.WithoutTrivia().ToString()));

            if (lastInfo.IsResultVoid && lastInfo.Node.WhenNotNull is InvocationExpressionSyntax)
            {
                var methodIdentifier = SyntaxFactory.IdentifierName(SyntaxFactory.Identifier("global::Bridge.Script.FromLambda"));
                var invocation = SyntaxFactory.InvocationExpression(methodIdentifier,
                    SyntaxFactory.ArgumentList(SyntaxFactory.SeparatedList(new[] { SyntaxFactory.Argument(SyntaxFactory.ParenthesizedLambdaExpression(whenTrue)) })));
                whenTrue = invocation;
            }

            ExpressionSyntax whenFalse = lastInfo.IsResultVoid ? (ExpressionSyntax)SyntaxFactory.LiteralExpression(SyntaxKind.NullLiteralExpression) : SyntaxFactory.CastExpression(lastInfo.ResultType, SyntaxFactory.LiteralExpression(SyntaxKind.NullLiteralExpression));

            var newNode = needParenthesized ? SyntaxFactory.ParenthesizedExpression(SyntaxFactory.ConditionalExpression(condition, whenTrue, whenFalse)) :
                                       (SyntaxNode)SyntaxFactory.ConditionalExpression(condition, whenTrue, whenFalse);

            return newNode.WithLeadingTrivia(node.GetLeadingTrivia()).WithTrailingTrivia(node.GetTrailingTrivia());
        }
    }
}