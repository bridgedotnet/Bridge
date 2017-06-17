using Bridge.Contract;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading;
using Microsoft.CodeAnalysis.Text;

namespace Bridge.Translator
{
    /// <summary>
    /// Contains useful helper methods to generate Roslyn syntax tree parts.
    /// </summary>
    static internal class SyntaxHelper
    {
        /// <summary>
        /// Generates the static method call.
        /// </summary>
        public static ExpressionStatementSyntax GenerateStaticMethodCall(string methodName, string className, ArgumentSyntax[] arguments = null, ITypeSymbol[] typeArguments = null)
        {
            var methodIdentifier = GenerateMethodIdentifier(methodName, className, typeArguments);
            return SyntaxFactory.ExpressionStatement(
                SyntaxFactory.InvocationExpression(methodIdentifier,
                SyntaxFactory.ArgumentList(SyntaxFactory.SeparatedList(arguments ?? new ArgumentSyntax[] { })))
            );
        }

        /// <summary>
        /// Generates the method call.
        /// </summary>
        public static ExpressionStatementSyntax GenerateMethodCall(string methodName, string targetIdentifier, ArgumentSyntax[] arguments = null, ITypeSymbol[] typeArguments = null)
        {
            var methodIdentifier = GenerateMethodIdentifier(methodName, targetIdentifier, typeArguments);
            return SyntaxFactory.ExpressionStatement(
                SyntaxFactory.InvocationExpression(methodIdentifier,
                SyntaxFactory.ArgumentList(SyntaxFactory.SeparatedList(arguments ?? new ArgumentSyntax[] { })))
            );
        }

        /// <summary>
        /// Generates the method identifier.
        /// </summary>
        public static ExpressionSyntax GenerateMethodIdentifier(string methodName, string targetIdentifierOrTypeName, ITypeSymbol[] typeArguments = null)
        {
            ExpressionSyntax methodIdentifier = SyntaxFactory.IdentifierName(targetIdentifierOrTypeName + "." + methodName);
            if (typeArguments != null && typeArguments.Length > 0)
            {
                methodIdentifier = SyntaxFactory.GenericName(SyntaxFactory.Identifier(targetIdentifierOrTypeName + "." + methodName),
                    SyntaxFactory.TypeArgumentList(SyntaxFactory.SeparatedList(typeArguments.Select(GenerateTypeSyntax))));
            }
            return methodIdentifier;
        }

        /// <summary>
        /// Generates the variable declaration and object creation statement.
        /// </summary>
        public static LocalDeclarationStatementSyntax GenerateVariableDeclarationAndObjectCreationStatement(string variableName, string typeName)
        {
            return GenerateVariableDeclarationAndObjectCreationStatement(variableName, () => SyntaxFactory.ParseTypeName(typeName));
        }

        /// <summary>
        /// Generates the variable declaration and object creation statement.
        /// </summary>
        public static LocalDeclarationStatementSyntax GenerateVariableDeclarationAndObjectCreationStatement(string variableName, Type type)
        {
            return GenerateVariableDeclarationAndObjectCreationStatement(variableName, () => GenerateTypeSyntax(type));
        }

        /// <summary>
        /// Generates the variable declaration and object creation statement.
        /// </summary>
        private static LocalDeclarationStatementSyntax GenerateVariableDeclarationAndObjectCreationStatement(string variableName, Func<TypeSyntax> typeSyntaxFactory)
        {
            return SyntaxFactory.LocalDeclarationStatement(
                SyntaxFactory.VariableDeclaration(
                    typeSyntaxFactory(),
                    SyntaxFactory.SeparatedList(new[] {
                        SyntaxFactory.VariableDeclarator(
                            SyntaxFactory.Identifier(variableName),
                            null,
                            SyntaxFactory.EqualsValueClause(
                                SyntaxFactory.ObjectCreationExpression(typeSyntaxFactory(), SyntaxFactory.ArgumentList(), null)
                            )
                        )
                    })
                )
            );
        }

        /// <summary>
        /// Generates the extension method.
        /// </summary>
        public static MethodDeclarationSyntax GenerateExtensionMethod(string methodName, string returnTypeName, ParameterSyntax[] parameters, AttributeSyntax[] attributes = null)
        {
            var methodDeclaration = SyntaxFactory.MethodDeclaration(SyntaxFactory.ParseTypeName(returnTypeName ?? "void"), methodName)
                .WithModifiers(SyntaxTokenList.Create(SyntaxFactory.Token(SyntaxKind.PublicKeyword)).Add(SyntaxFactory.Token(SyntaxKind.StaticKeyword)))
                .WithParameterList(
                    SyntaxFactory.ParameterList(SyntaxFactory.SeparatedList<ParameterSyntax>(parameters))
                );

            if (attributes != null)
            {
                methodDeclaration = methodDeclaration.WithAttributeLists(SyntaxFactory.List(new[]
                {
                    SyntaxFactory.AttributeList(SyntaxFactory.SeparatedList(attributes))
                }));
            }
            return methodDeclaration;
        }

        /// <summary>
        /// Generates the method parameter.
        /// </summary>
        public static ParameterSyntax GenerateMethodParameter(string parameterName, string typeName, bool isExtensionMethodFirstParameter)
        {
            return SyntaxFactory.Parameter(
                SyntaxFactory.List<AttributeListSyntax>(),
                isExtensionMethodFirstParameter ? SyntaxFactory.TokenList(SyntaxFactory.Token(SyntaxKind.ThisKeyword)) : SyntaxFactory.TokenList(),
                SyntaxFactory.ParseTypeName(typeName),
                SyntaxFactory.Identifier(parameterName),
                null
            );
        }

        /// <summary>
        /// Generates the class.
        /// </summary>
        public static ClassDeclarationSyntax GenerateClass(string className, SyntaxKind[] modifiers, MemberDeclarationSyntax[] methods, AttributeSyntax[] attributes = null)
        {
            var list = new SyntaxTokenList();
            list = list.AddRange(modifiers.Select(SyntaxFactory.Token).ToArray());
            var classDeclaration = SyntaxFactory.ClassDeclaration(className)
                .WithModifiers(
                    list
                )
                .WithMembers(
                    SyntaxFactory.List(methods)
                );

            if (attributes != null)
            {
                classDeclaration = classDeclaration.WithAttributeLists(SyntaxFactory.List(new[] {
                    SyntaxFactory.AttributeList(SyntaxFactory.SeparatedList(attributes))
                }));
            }
            return classDeclaration;
        }

        /// <summary>
        /// Generates the namespace.
        /// </summary>
        public static NamespaceDeclarationSyntax GenerateNamespace(string namespaceName, MemberDeclarationSyntax[] members, IEnumerable<string> usings = null)
        {
            var builtinUsings = new List<string>() { "System", "System.Collections.Generic" };
            if (usings != null)
            {
                builtinUsings.AddRange(usings);
            }

            return SyntaxFactory.NamespaceDeclaration(SyntaxFactory.ParseName(namespaceName))
                .WithUsings(SyntaxFactory.List<UsingDirectiveSyntax>(builtinUsings.Distinct().Where(u => namespaceName != u).Select(u => SyntaxFactory.UsingDirective(SyntaxFactory.ParseName(u))).ToArray()))
                .WithMembers(SyntaxFactory.List<MemberDeclarationSyntax>(members));
        }

        /// <summary>
        /// Generates the type syntax.
        /// </summary>
        public static TypeSyntax GenerateTypeSyntax(Type type)
        {
            var name = GetTypeName(type);

            if (type.IsGenericType)
            {
                var genericArguments = type.GetGenericArguments();
                return GenerateGenericName(name, genericArguments);
            }

            return SyntaxFactory.ParseTypeName(name);
        }

        public static TypeSyntax GenerateTypeSyntax(ITypeSymbol type)
        {
            return SyntaxFactory.IdentifierName(type.ToDisplayString(SymbolDisplayFormat.FullyQualifiedFormat)).WithoutTrivia();
        }

        /// <summary>
        /// Generates the name of the generic.
        /// </summary>
        public static GenericNameSyntax GenerateGenericName(string name, IEnumerable<Type> types)
        {
            return SyntaxFactory.GenericName(SyntaxFactory.Identifier(name),
                SyntaxFactory.TypeArgumentList(SyntaxFactory.SeparatedList(types.Select(GenerateTypeSyntax)))
            );
        }

        public static GenericNameSyntax GenerateGenericName(SyntaxToken name, IEnumerable<ITypeSymbol> types)
        {
            return SyntaxFactory.GenericName(name, SyntaxFactory.TypeArgumentList(SyntaxFactory.SeparatedList(types.Select(GenerateTypeSyntax))));
        }

        /// <summary>
        /// Gets the C# representation of System.Type with respect to generics.
        /// </summary>
        private static string GetTypeName(Type type)
        {
            var name = type.Name.Replace("+", ".");
            if (name.Contains("`"))
            {
                name = name.Substring(0, name.IndexOf("`"));
            }
            return "global::" + name;
        }

        /// <summary>
        /// Generates the assignment statement.
        /// </summary>
        public static ExpressionStatementSyntax GenerateAssignmentStatement(ExpressionSyntax leftSide, ExpressionSyntax rightSide)
        {
            return SyntaxFactory.ExpressionStatement(
                SyntaxFactory.BinaryExpression(
                    SyntaxKind.SimpleAssignmentExpression,
                    leftSide,
                    rightSide
                )
            );
        }

        /// <summary>
        /// Generates the attribute on the class or method.
        /// </summary>
        public static AttributeSyntax GenerateAttribute(Type type, params ExpressionSyntax[] parameters)
        {
            return SyntaxFactory.Attribute(SyntaxFactory.ParseName(type.FullName),
                SyntaxFactory.AttributeArgumentList(SyntaxFactory.SeparatedList(parameters.Select(SyntaxFactory.AttributeArgument)))
            );
        }

        public static bool IsCSharpKeyword(this string name)
        {
            switch (name)
            {
                case "bool":
                case "byte":
                case "sbyte":
                case "short":
                case "ushort":
                case "int":
                case "uint":
                case "long":
                case "ulong":
                case "double":
                case "float":
                case "decimal":
                case "string":
                case "char":
                case "object":
                case "typeof":
                case "sizeof":
                case "null":
                case "true":
                case "false":
                case "if":
                case "else":
                case "while":
                case "for":
                case "foreach":
                case "do":
                case "switch":
                case "case":
                case "default":
                case "lock":
                case "try":
                case "throw":
                case "catch":
                case "finally":
                case "goto":
                case "break":
                case "continue":
                case "return":
                case "public":
                case "private":
                case "internal":
                case "protected":
                case "static":
                case "readonly":
                case "sealed":
                case "const":
                case "new":
                case "override":
                case "abstract":
                case "virtual":
                case "partial":
                case "ref":
                case "out":
                case "in":
                case "where":
                case "params":
                case "this":
                case "base":
                case "namespace":
                case "using":
                case "class":
                case "struct":
                case "interface":
                case "delegate":
                case "checked":
                case "get":
                case "set":
                case "add":
                case "remove":
                case "operator":
                case "implicit":
                case "explicit":
                case "fixed":
                case "extern":
                case "event":
                case "enum":
                case "unsafe":
                    return true;
                default:
                    return false;
            }
        }

        public static string GetFullyQualifiedNameAndValidate(this ISymbol symbol, SemanticModel semanticModel, int position, bool appenTypeArgs = true)
        {
            var name = symbol.FullyQualifiedName(appenTypeArgs);

            if (symbol is ITypeSymbol)
            {
                var ti = semanticModel.GetSpeculativeTypeInfo(position, SyntaxFactory.ParseTypeName(name), SpeculativeBindingOption.BindAsTypeOrNamespace);
                var type = ti.Type ?? ti.ConvertedType;
                if (type == null || type.Kind == SymbolKind.ErrorType)
                {
                    ti = semanticModel.GetSpeculativeTypeInfo(position, SyntaxFactory.ParseTypeName("global::" + name), SpeculativeBindingOption.BindAsTypeOrNamespace);
                    type = ti.Type ?? ti.ConvertedType;
                    if (type != null && type.Kind != SymbolKind.ErrorType)
                    {
                        name = "global::" + name;
                    }
                }
            }
            else
            {
                var si = semanticModel.GetSpeculativeSymbolInfo(position, SyntaxFactory.ParseExpression(name), SpeculativeBindingOption.BindAsExpression);
                if (si.Symbol == null || si.Symbol.Kind == SymbolKind.ErrorType)
                {
                    si = semanticModel.GetSpeculativeSymbolInfo(position, SyntaxFactory.ParseExpression("global::" + name), SpeculativeBindingOption.BindAsExpression);

                    if (si.Symbol != null && si.Symbol.Kind != SymbolKind.ErrorType)
                    {
                        name = "global::" + name;
                    }
                }
            }

            return name;
        }

        public static string FullyQualifiedName(this ISymbol symbol, bool appenTypeArgs = true)
        {
            var at = symbol as IArrayTypeSymbol;

            if (at != null)
            {
                string result = at.ElementType.FullyQualifiedName() + "[";

                for (int i = 0; i < at.Rank - 1; i++)
                {
                    result += ",";
                }

                result += "]";

                return result;
            }

            var localName = symbol.Name;

            if (SyntaxHelper.IsCSharpKeyword(localName))
            {
                localName = "@" + localName;
            }

            if (symbol is ITypeParameterSymbol)
            {
                return localName;
            }

            if (appenTypeArgs)
            {
                if (symbol is INamedTypeSymbol)
                {
                    localName = AppendTypeArguments(localName, ((INamedTypeSymbol)symbol).TypeArguments);
                }
                else if (symbol is IMethodSymbol)
                {
                    localName = AppendTypeArguments(localName, ((IMethodSymbol)symbol).TypeArguments);
                }
            }

            if (symbol.ContainingType != null)
            {
                return symbol.ContainingType.FullyQualifiedName() + "." + localName;
            }
            else if (symbol.ContainingNamespace != null)
            {
                if (symbol.ContainingNamespace.IsGlobalNamespace)
                {
                    //return "global::" + localName;
                    return localName;
                }

                return symbol.ContainingNamespace.FullyQualifiedName() + "." + localName;
            }
            else
            {
                return localName;
            }
        }

        public static bool IsAnonymous(ITypeSymbol type)
        {
            if (type.IsAnonymousType)
            {
                return true;
            }

            var namedType = type as INamedTypeSymbol;
            if (namedType != null && namedType.IsGenericType)
            {
                return namedType.TypeArguments.Any(SyntaxHelper.IsAnonymous);
            }

            return false;
        }


        private static string AppendTypeArguments(string localName, IReadOnlyCollection<ITypeSymbol> typeArguments)
        {
            if (typeArguments.Count > 0 && !typeArguments.Any(SyntaxHelper.IsAnonymous))
            {
                bool first = true;

                foreach (var ta in typeArguments)
                {
                    localName += (first ? "<" : ", ") + ta.FullyQualifiedName();
                    first = false;
                }

                localName += ">";
            }

            return localName;
        }

        public static bool IsAutoProperty(this PropertyDeclarationSyntax propertyDeclaration)
        {
            if (propertyDeclaration.Modifiers.Any(m => m.Kind() == SyntaxKind.AbstractKeyword || m.Kind() == SyntaxKind.ExternKeyword))
            {
                return false;
            }

            if (propertyDeclaration.AccessorList == null)
            {
                return false;
            }

            var getter = propertyDeclaration.AccessorList.Accessors.SingleOrDefault(a => a.Keyword.Kind() == SyntaxKind.GetKeyword);

            if (getter == null || getter.Body != null)
            {
                return false;
            }

            var setter = propertyDeclaration.AccessorList.Accessors.SingleOrDefault(a => a.Keyword.Kind() == SyntaxKind.SetKeyword);

            if (setter != null && setter.Body != null)
            {
                return false;
            }

            return true;
        }

        public static T RemoveSemicolon<T>(T node, SyntaxToken semicolonToken, Func<SyntaxToken, T> withSemicolonToken) where T : SyntaxNode
        {
            if (semicolonToken.Kind() != SyntaxKind.None)
            {
                var leadingTrivia = semicolonToken.LeadingTrivia;
                var trailingTrivia = semicolonToken.TrailingTrivia;

                SyntaxToken newToken = SyntaxFactory.Token(
                  leadingTrivia,
                  SyntaxKind.None,
                  trailingTrivia);

                bool addNewline = semicolonToken.HasTrailingTrivia
                  && trailingTrivia.Count() == 1
                  && trailingTrivia.First().Kind() == SyntaxKind.EndOfLineTrivia;

                var newNode = withSemicolonToken(newToken);

                if (addNewline)
                {
                    return newNode.WithTrailingTrivia(SyntaxFactory.Whitespace(Environment.NewLine));
                }

                return newNode;
            }
            return node;
        }

        public static SyntaxNode Wrap(this SyntaxNode node, SyntaxNode oldNode)
        {
            var leadingTrivia = oldNode.GetLeadingTrivia();
            var trailingTrivia = oldNode.GetTrailingTrivia();

            node = node.WithLeadingTrivia(leadingTrivia);
            node = node.WithTrailingTrivia(trailingTrivia);

            return node;
        }

        public static PropertyDeclarationSyntax ToStatementBody(PropertyDeclarationSyntax property)
        {
            var accessor = SyntaxFactory
                               .AccessorDeclaration(SyntaxKind.GetAccessorDeclaration)
                               .WithBody(SyntaxFactory.Block(SyntaxFactory.ReturnStatement(property.ExpressionBody.Expression.WithLeadingTrivia(SyntaxFactory.Space))));

            var accessorDeclList = new SyntaxList<AccessorDeclarationSyntax>();
            accessorDeclList = accessorDeclList.Add(accessor);

            return property
                .WithAccessorList(SyntaxFactory.AccessorList(accessorDeclList))
                .WithExpressionBody(null)
                .WithSemicolonToken(SyntaxFactory.MissingToken(SyntaxKind.SemicolonToken))
                .WithTrailingTrivia(property.GetTrailingTrivia());
        }

        public static MethodDeclarationSyntax ToStatementBody(MethodDeclarationSyntax method)
        {
            var isVoid = false;
            var predefined = method.ReturnType as PredefinedTypeSyntax;
            if (predefined != null && predefined.Keyword.Kind() == SyntaxKind.VoidKeyword)
            {
                isVoid = true;
            }

            var body = method.ExpressionBody.Expression.WithLeadingTrivia(SyntaxFactory.Space);

            return method.WithBody(SyntaxFactory.Block(isVoid ? SyntaxFactory.ExpressionStatement(body) : (StatementSyntax)SyntaxFactory.ReturnStatement(body)))
                         .WithExpressionBody(null)
                         .WithSemicolonToken(SyntaxFactory.MissingToken(SyntaxKind.SemicolonToken))
                         .WithTrailingTrivia(method.GetTrailingTrivia());
        }

        public static OperatorDeclarationSyntax ToStatementBody(OperatorDeclarationSyntax method)
        {
            var isVoid = false;
            var predefined = method.ReturnType as PredefinedTypeSyntax;
            if (predefined != null && predefined.Keyword.Kind() == SyntaxKind.VoidKeyword)
            {
                isVoid = true;
            }

            var body = method.ExpressionBody.Expression.WithLeadingTrivia(SyntaxFactory.Space);

            return method.WithBody(SyntaxFactory.Block(isVoid ? SyntaxFactory.ExpressionStatement(body) : (StatementSyntax)SyntaxFactory.ReturnStatement(body)))
                         .WithExpressionBody(null)
                         .WithSemicolonToken(SyntaxFactory.MissingToken(SyntaxKind.SemicolonToken))
                         .WithTrailingTrivia(method.GetTrailingTrivia());
        }

        public static ConversionOperatorDeclarationSyntax ToStatementBody(ConversionOperatorDeclarationSyntax method)
        {
            var body = method.ExpressionBody.Expression.WithLeadingTrivia(SyntaxFactory.Space);

            return method.WithBody(SyntaxFactory.Block((StatementSyntax)SyntaxFactory.ReturnStatement(body)))
                         .WithExpressionBody(null)
                         .WithSemicolonToken(SyntaxFactory.MissingToken(SyntaxKind.SemicolonToken))
                         .WithTrailingTrivia(method.GetTrailingTrivia());
        }

        public static IndexerDeclarationSyntax ToStatementBody(IndexerDeclarationSyntax property)
        {
            var accessor = SyntaxFactory
                               .AccessorDeclaration(SyntaxKind.GetAccessorDeclaration)
                               .WithBody(SyntaxFactory.Block(SyntaxFactory.ReturnStatement(property.ExpressionBody.Expression.WithLeadingTrivia(SyntaxFactory.Space))));

            var accessorDeclList = new SyntaxList<AccessorDeclarationSyntax>();
            accessorDeclList = accessorDeclList.Add(accessor);

            return property
                .WithAccessorList(SyntaxFactory.AccessorList(accessorDeclList))
                .WithExpressionBody(null)
                .WithSemicolonToken(SyntaxFactory.MissingToken(SyntaxKind.SemicolonToken))
                .WithTrailingTrivia(property.GetTrailingTrivia());
        }

        public static string GetSymbolName(InvocationExpressionSyntax node, SemanticModel semanticModel)
        {
            var si = semanticModel.GetSymbolInfo(node.ArgumentList.Arguments[0].Expression);
            var symbol = si.Symbol;

            if (symbol == null && si.CandidateSymbols.Any())
            {
                symbol = si.CandidateSymbols.First();
            }

            var name = (string)semanticModel.GetConstantValue(node).Value;

            if (symbol != null && symbol.Kind != SymbolKind.Namespace)
            {
                //bool preserveMemberChange = !(symbol.Kind == SymbolKind.Method || symbol.Kind == SymbolKind.Property);

                int enumMode = -1;

                if (symbol.ContainingType != null && symbol.ContainingType.TypeKind == TypeKind.Enum && symbol is IFieldSymbol)
                {
                    string enumAttr = Translator.Bridge_ASSEMBLY + ".EnumAttribute";
                    enumMode = 7;

                    foreach (var attr in symbol.ContainingType.GetAttributes())
                    {
                        if (attr.AttributeClass != null && attr.AttributeClass.FullyQualifiedName() == enumAttr && attr.ConstructorArguments.Any())
                        {
                            enumMode = (int)attr.ConstructorArguments.First().Value;
                            break;
                        }
                    }
                }

                //if (symbol is IFieldSymbol && ((IFieldSymbol)symbol).IsConst)
                //{
                //    preserveMemberChange = true;
                //}

                var nameAttr = SyntaxHelper.GetInheritedAttribute(symbol, Bridge.Translator.Translator.Bridge_ASSEMBLY + ".NameAttribute");
                bool isIgnore = symbol.ContainingType != null && SyntaxHelper.IsExternalType(symbol.ContainingType);

                name = symbol.Name;

                if (nameAttr != null)
                {
                    var value = nameAttr.ConstructorArguments.First().Value;
                    if (value is string)
                    {
                        name = value.ToString();
                        if (!isIgnore && symbol.IsStatic && Helpers.IsReservedStaticName(name))
                        {
                            name = Helpers.ChangeReservedWord(name);
                        }
                        return name;
                    }

                    //preserveMemberChange = !(bool)value;
                    enumMode = -1;
                }

                if (enumMode > 6)
                {
                    switch (enumMode)
                    {
                        case 7:
                            break;

                        case 8:
                            name = name.ToLowerInvariant();
                            break;

                        case 9:
                            name = name.ToUpperInvariant();
                            break;
                    }
                }
                /*else
                {
                    name = !preserveMemberChange ? Object.Net.Utilities.StringUtils.ToLowerCamelCase(name) : name;
                }*/

                if (!isIgnore && symbol.IsStatic && Helpers.IsReservedStaticName(name))
                {
                    name = Helpers.ChangeReservedWord(name);
                }
            }

            return name;
        }

        private static bool IsExternalType(INamedTypeSymbol symbol)
        {
            string externalAttr = Translator.Bridge_ASSEMBLY + ".ExternalAttribute";
            string virtualAttr = Translator.Bridge_ASSEMBLY + ".VirtualAttribute";
            string objectLiteralAttr = Translator.Bridge_ASSEMBLY + ".ObjectLiteralAttribute";

            var result = SyntaxHelper.HasAttribute(symbol.GetAttributes(), externalAttr)
                   || SyntaxHelper.HasAttribute(symbol.GetAttributes(), objectLiteralAttr)
                   || SyntaxHelper.HasAttribute(symbol.ContainingAssembly.GetAttributes(), externalAttr);

            if (result)
            {
                return true;
            }

            var attr = symbol.GetAttributes().FirstOrDefault(a => a.AttributeClass != null && a.AttributeClass.FullyQualifiedName() == virtualAttr);

            if (attr == null)
            {
                attr = symbol.ContainingAssembly.GetAttributes().FirstOrDefault(a => a.AttributeClass != null && a.AttributeClass.FullyQualifiedName() == virtualAttr);
            }

            if (attr != null)
            {
                if (attr.ConstructorArguments.Length == 0)
                {
                    return true;
                }

                var value = (int) attr.ConstructorArguments[0].Value;

                switch (value)
                {
                    case 0:
                        return true;
                    case 1:
                        return symbol.TypeKind != TypeKind.Interface;
                    case 2:
                        return symbol.TypeKind == TypeKind.Interface;
                }
            }

            return false;
        }

        private static bool HasAttribute(ImmutableArray<AttributeData> attributes, string attrName)
        {
            foreach (var attr in attributes)
            {
                if (attr.AttributeClass != null && attr.AttributeClass.FullyQualifiedName() == attrName)
                {
                    return true;
                }
            }

            return false;
        }

        private static AttributeData GetInheritedAttribute(ISymbol symbol, string attrName)
        {
            foreach (var attr in symbol.GetAttributes())
            {
                if (attr.AttributeClass.FullyQualifiedName() == attrName)
                {
                    return attr;
                }
            }

            var method = symbol as IMethodSymbol;
            if (method != null && method.OverriddenMethod != null)
            {
                return SyntaxHelper.GetInheritedAttribute(method.OverriddenMethod, attrName);
            }

            var property = symbol as IPropertySymbol;
            if (property != null && property.OverriddenProperty != null)
            {
                return SyntaxHelper.GetInheritedAttribute(property.OverriddenProperty, attrName);
            }

            return null;
        }

        public static bool IsExpressionOfT(this ITypeSymbol type)
        {
            return type is INamedTypeSymbol && type.OriginalDefinition.MetadataName == typeof(System.Linq.Expressions.Expression<>).Name && type.ContainingNamespace.FullyQualifiedName() == typeof(System.Linq.Expressions.Expression<>).Namespace;
        }

        public static IEnumerable<ITypeSymbol> GetBaseTypesAndThis(this ITypeSymbol type)
        {
            var current = type;
            while (current != null)
            {
                yield return current;
                current = current.BaseType;
            }
        }

        public static bool InheritsFromOrEquals(this ITypeSymbol type, ITypeSymbol baseType)
        {
            return type.GetBaseTypesAndThis().Contains(baseType);
        }

        public static T GetParent<T>(this SyntaxNode node) where T : SyntaxNode
        {
            var p = node.Parent;
            while (p != null && !(p is T))
            {
                p = p.Parent;
            }

            return p as T;
        }

        public static SyntaxTriviaList ExcludeDirectivies(this SyntaxTriviaList list)
        {
            return SyntaxFactory.TriviaList(list.Where(t => !t.IsDirective));
        }

        public static bool IsAccessibleIn(this ITypeSymbol type, ITypeSymbol currentType)
        {
            var list = new List<ITypeSymbol>();

            while (currentType != null && currentType.ContainingType != null)
            {
                var nested = currentType.GetTypeMembers();

                if (nested != null && nested.Length > 0)
                {
                    list.AddRange(nested);
                }

                list.Add(currentType.ContainingType);
                currentType = currentType.ContainingType;
            }

            if (currentType != null)
            {
                var nested1 = currentType.GetTypeMembers();

                if (nested1 != null && nested1.Length > 0)
                {
                    list.AddRange(nested1);
                }
            }

            return list.Contains(type);
        }
    }
}