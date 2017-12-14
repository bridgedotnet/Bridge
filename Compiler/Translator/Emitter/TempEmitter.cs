using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.PatternMatching;
using ICSharpCode.NRefactory.TypeSystem;
using Mono.Cecil;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bridge.Translator
{
    internal class TempEmitter : IEmitter
    {
        public TempEmitter()
        {
            this.AssemblyCompilerRuleCache = new Dictionary<IAssembly, CompilerRule[]>();
            this.ClassCompilerRuleCache = new Dictionary<ITypeDefinition, CompilerRule[]>();

        }

        public Dictionary<AnonymousType, IAnonymousTypeConfig> AnonymousTypes
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public Dictionary<IAssembly, CompilerRule[]> AssemblyCompilerRuleCache
        {
            get;
            set;
        }

        public IAssemblyInfo AssemblyInfo
        {
            get;
            set;
        }

        public Dictionary<IAssembly, NameRule[]> AssemblyNameRuleCache
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public AssignmentOperatorType AssignmentType
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public IAsyncBlock AsyncBlock
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public bool AsyncExpressionHandling
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public SwitchStatement AsyncSwitch
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public List<string> AsyncVariables
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public List<string> AutoStartupMethods
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public Action BeforeBlock
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public BridgeTypes BridgeTypes
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public EmitterCache Cache
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public string CatchBlockVariable
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public Dictionary<ITypeDefinition, CompilerRule[]> ClassCompilerRuleCache
        {
            get;
            set;
        }

        public Dictionary<ITypeDefinition, NameRule[]> ClassNameRuleCache
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public bool Comma
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public List<IPluginDependency> CurrentDependencies
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public bool DisableDependencyTracking
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public IEmitterOutput EmitterOutput
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public bool EnableSemicolon
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public bool ForbidLifting
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public AstNode IgnoreBlock
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public bool InConstructor
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public int InitialLevel
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public InitPosition? InitPosition
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public bool IsAnonymousReflectable
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public bool IsAssignment
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public bool IsAsync
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public bool IsJavaScriptOverflowMode
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public bool IsNewLine
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public bool IsRefArg
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public bool IsUnaryAccessor
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public bool IsYield
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public int IteratorCount
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public IJsDoc JsDoc
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public List<IJumpInfo> JumpStatements
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public IWriterInfo LastSavedWriter
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public string LastSequencePoint
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public int Level
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public Dictionary<string, AstType> Locals
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public Dictionary<IVariable, string> LocalsMap
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public Dictionary<string, string> LocalsNamesMap
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public Stack<Dictionary<string, AstType>> LocalsStack
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public ILogger Log
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public string MetaDataOutputName
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public IEnumerable<MethodDefinition> MethodsGroup
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public Dictionary<int, StringBuilder> MethodsGroupBuilder
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public Dictionary<IType, Dictionary<string, string>> NamedBoxedFunctions
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public Dictionary<string, string> NamedFunctions
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public Dictionary<string, string> NamedTempVariables
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public Dictionary<string, int> NamespacesCache
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public AstNode NoBraceBlock
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public StringBuilder Output
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public IEmitterOutputs Outputs
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public Dictionary<string, bool> ParentTempVariables
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public IPlugins Plugins
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public IEnumerable<AssemblyDefinition> References
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public IType[] ReflectableTypes
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public bool ReplaceAwaiterByVar
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public bool ReplaceJump
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public IMemberResolver Resolver
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public IType ReturnType
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public CompilerRule Rules
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public bool SkipSemiColon
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public string SourceFileName
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public int SourceFileNameIndex
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public IList<string> SourceFiles
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public bool StaticBlock
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public string Tag
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public Dictionary<string, bool> TempVariables
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public int ThisRefCounter
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public ITranslator Translator
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public IDictionary<string, TypeDefinition> TypeDefinitions
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public ITypeInfo TypeInfo
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public Dictionary<string, ITypeInfo> TypeInfoDefinitions
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public List<ITypeInfo> Types
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public UnaryOperatorType UnaryOperatorType
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public IValidator Validator
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public Stack<IWriter> Writers
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public int CompareTypeInfosByName(ITypeInfo x, ITypeInfo y)
        {
            throw new NotImplementedException();
        }

        public int CompareTypeInfosByPriority(ITypeInfo x, ITypeInfo y)
        {
            throw new NotImplementedException();
        }

        public IVisitorException CreateException(AstNode node)
        {
            throw new NotImplementedException();
        }

        public IVisitorException CreateException(AstNode node, string message)
        {
            throw new NotImplementedException();
        }

        public List<TranslatorOutputItem> Emit()
        {
            throw new NotImplementedException();
        }

        public CustomAttribute GetAttribute(IEnumerable<CustomAttribute> attributes, string name)
        {
            throw new NotImplementedException();
        }

        public IAttribute GetAttribute(IEnumerable<IAttribute> attributes, string name)
        {
            throw new NotImplementedException();
        }

        public TypeDefinition GetBaseMethodOwnerTypeDefinition(string methodName, int genericParamCount)
        {
            throw new NotImplementedException();
        }

        public TypeDefinition GetBaseTypeDefinition()
        {
            throw new NotImplementedException();
        }

        public TypeDefinition GetBaseTypeDefinition(TypeDefinition type)
        {
            throw new NotImplementedException();
        }

        public string GetEntityName(IEntity member)
        {
            throw new NotImplementedException();
        }

        public string GetEntityName(EntityDeclaration entity)
        {
            throw new NotImplementedException();
        }

        public string GetEntityNameFromAttr(IEntity member, bool setter = false)
        {
            throw new NotImplementedException();
        }

        public string GetEventName(EventDeclaration evt)
        {
            throw new NotImplementedException();
        }

        public string GetFieldName(FieldDeclaration field)
        {
            throw new NotImplementedException();
        }

        public string GetInline(IEntity entity)
        {
            throw new NotImplementedException();
        }

        public string GetInline(EntityDeclaration method)
        {
            throw new NotImplementedException();
        }

        public Tuple<bool, bool, string> GetInlineCode(MemberReferenceExpression node)
        {
            throw new NotImplementedException();
        }

        public Tuple<bool, bool, string> GetInlineCode(InvocationExpression node)
        {
            throw new NotImplementedException();
        }

        public string GetLiteralEntityName(IEntity member)
        {
            throw new NotImplementedException();
        }

        public NameSemantic GetNameSemantic(IEntity member)
        {
            throw new NotImplementedException();
        }

        public string GetParameterName(ParameterDeclaration entity)
        {
            throw new NotImplementedException();
        }

        public int GetPriority(TypeDefinition type)
        {
            throw new NotImplementedException();
        }

        public string GetReflectionName(IType type)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<string> GetScript(EntityDeclaration method)
        {
            throw new NotImplementedException();
        }

        public TypeDefinition GetTypeDefinition()
        {
            throw new NotImplementedException();
        }

        public TypeDefinition GetTypeDefinition(IType type)
        {
            throw new NotImplementedException();
        }

        public TypeDefinition GetTypeDefinition(AstType reference, bool safe = false)
        {
            throw new NotImplementedException();
        }

        public string GetTypeHierarchy()
        {
            throw new NotImplementedException();
        }

        public string GetTypeName(ITypeDefinition type, TypeDefinition typeDefinition)
        {
            throw new NotImplementedException();
        }

        public void InitEmitter()
        {
            throw new NotImplementedException();
        }

        public bool IsForbiddenInvocation(InvocationExpression node)
        {
            throw new NotImplementedException();
        }

        public Tuple<bool, string> IsGlobalTarget(IMember member)
        {
            throw new NotImplementedException();
        }

        public bool IsInheritedFrom(ITypeInfo x, ITypeInfo y)
        {
            throw new NotImplementedException();
        }

        public bool IsInlineConst(IMember member)
        {
            throw new NotImplementedException();
        }

        public bool IsMemberConst(IMember member)
        {
            throw new NotImplementedException();
        }

        public bool IsNativeMember(string fullName)
        {
            throw new NotImplementedException();
        }

        public void LogError(string message)
        {
            throw new NotImplementedException();
        }

        public void LogMessage(string message)
        {
            throw new NotImplementedException();
        }

        public void LogMessage(string level, string message)
        {
            throw new NotImplementedException();
        }

        public void LogWarning(string message)
        {
            throw new NotImplementedException();
        }

        public int ResetLevel(int? level = default(int?))
        {
            throw new NotImplementedException();
        }

        public void SortTypesByInheritance()
        {
            throw new NotImplementedException();
        }

        public string ToJavaScript(object value)
        {
            throw new NotImplementedException();
        }

        public void VisitAccessor(Accessor accessor)
        {
            throw new NotImplementedException();
        }

        public void VisitAnonymousMethodExpression(AnonymousMethodExpression anonymousMethodExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitAnonymousTypeCreateExpression(AnonymousTypeCreateExpression anonymousTypeCreateExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitArrayCreateExpression(ArrayCreateExpression arrayCreateExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitArrayInitializerExpression(ArrayInitializerExpression arrayInitializerExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitArraySpecifier(ArraySpecifier arraySpecifier)
        {
            throw new NotImplementedException();
        }

        public void VisitAsExpression(AsExpression asExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitAssignmentExpression(AssignmentExpression assignmentExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitAttribute(ICSharpCode.NRefactory.CSharp.Attribute attribute)
        {
            throw new NotImplementedException();
        }

        public void VisitAttributeSection(AttributeSection attributeSection)
        {
            throw new NotImplementedException();
        }

        public void VisitBaseReferenceExpression(BaseReferenceExpression baseReferenceExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitBinaryOperatorExpression(BinaryOperatorExpression binaryOperatorExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitBlockStatement(BlockStatement blockStatement)
        {
            throw new NotImplementedException();
        }

        public void VisitBreakStatement(BreakStatement breakStatement)
        {
            throw new NotImplementedException();
        }

        public void VisitCaseLabel(CaseLabel caseLabel)
        {
            throw new NotImplementedException();
        }

        public void VisitCastExpression(CastExpression castExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitCatchClause(CatchClause catchClause)
        {
            throw new NotImplementedException();
        }

        public void VisitCheckedExpression(CheckedExpression checkedExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitCheckedStatement(CheckedStatement checkedStatement)
        {
            throw new NotImplementedException();
        }

        public void VisitComment(Comment comment)
        {
            throw new NotImplementedException();
        }

        public void VisitComposedType(ComposedType composedType)
        {
            throw new NotImplementedException();
        }

        public void VisitConditionalExpression(ConditionalExpression conditionalExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitConstraint(Constraint constraint)
        {
            throw new NotImplementedException();
        }

        public void VisitConstructorDeclaration(ConstructorDeclaration constructorDeclaration)
        {
            throw new NotImplementedException();
        }

        public void VisitConstructorInitializer(ConstructorInitializer constructorInitializer)
        {
            throw new NotImplementedException();
        }

        public void VisitContinueStatement(ContinueStatement continueStatement)
        {
            throw new NotImplementedException();
        }

        public void VisitCSharpTokenNode(CSharpTokenNode cSharpTokenNode)
        {
            throw new NotImplementedException();
        }

        public void VisitCustomEventDeclaration(CustomEventDeclaration customEventDeclaration)
        {
            throw new NotImplementedException();
        }

        public void VisitDefaultValueExpression(DefaultValueExpression defaultValueExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitDelegateDeclaration(DelegateDeclaration delegateDeclaration)
        {
            throw new NotImplementedException();
        }

        public void VisitDestructorDeclaration(DestructorDeclaration destructorDeclaration)
        {
            throw new NotImplementedException();
        }

        public void VisitDirectionExpression(DirectionExpression directionExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitDocumentationReference(DocumentationReference documentationReference)
        {
            throw new NotImplementedException();
        }

        public void VisitDoWhileStatement(DoWhileStatement doWhileStatement)
        {
            throw new NotImplementedException();
        }

        public void VisitEmptyStatement(EmptyStatement emptyStatement)
        {
            throw new NotImplementedException();
        }

        public void VisitEnumMemberDeclaration(EnumMemberDeclaration enumMemberDeclaration)
        {
            throw new NotImplementedException();
        }

        public void VisitErrorNode(AstNode errorNode)
        {
            throw new NotImplementedException();
        }

        public void VisitEventDeclaration(EventDeclaration eventDeclaration)
        {
            throw new NotImplementedException();
        }

        public void VisitExpressionStatement(ExpressionStatement expressionStatement)
        {
            throw new NotImplementedException();
        }

        public void VisitExternAliasDeclaration(ExternAliasDeclaration externAliasDeclaration)
        {
            throw new NotImplementedException();
        }

        public void VisitFieldDeclaration(FieldDeclaration fieldDeclaration)
        {
            throw new NotImplementedException();
        }

        public void VisitFixedFieldDeclaration(FixedFieldDeclaration fixedFieldDeclaration)
        {
            throw new NotImplementedException();
        }

        public void VisitFixedStatement(FixedStatement fixedStatement)
        {
            throw new NotImplementedException();
        }

        public void VisitFixedVariableInitializer(FixedVariableInitializer fixedVariableInitializer)
        {
            throw new NotImplementedException();
        }

        public void VisitForeachStatement(ForeachStatement foreachStatement)
        {
            throw new NotImplementedException();
        }

        public void VisitForStatement(ForStatement forStatement)
        {
            throw new NotImplementedException();
        }

        public void VisitGotoCaseStatement(GotoCaseStatement gotoCaseStatement)
        {
            throw new NotImplementedException();
        }

        public void VisitGotoDefaultStatement(GotoDefaultStatement gotoDefaultStatement)
        {
            throw new NotImplementedException();
        }

        public void VisitGotoStatement(GotoStatement gotoStatement)
        {
            throw new NotImplementedException();
        }

        public void VisitIdentifier(Identifier identifier)
        {
            throw new NotImplementedException();
        }

        public void VisitIdentifierExpression(IdentifierExpression identifierExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitIfElseStatement(IfElseStatement ifElseStatement)
        {
            throw new NotImplementedException();
        }

        public void VisitIndexerDeclaration(IndexerDeclaration indexerDeclaration)
        {
            throw new NotImplementedException();
        }

        public void VisitIndexerExpression(IndexerExpression indexerExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitInvocationExpression(InvocationExpression invocationExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitIsExpression(IsExpression isExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitLabelStatement(LabelStatement labelStatement)
        {
            throw new NotImplementedException();
        }

        public void VisitLambdaExpression(LambdaExpression lambdaExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitLockStatement(LockStatement lockStatement)
        {
            throw new NotImplementedException();
        }

        public void VisitMemberReferenceExpression(MemberReferenceExpression memberReferenceExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitMemberType(MemberType memberType)
        {
            throw new NotImplementedException();
        }

        public void VisitMethodDeclaration(MethodDeclaration methodDeclaration)
        {
            throw new NotImplementedException();
        }

        public void VisitNamedArgumentExpression(NamedArgumentExpression namedArgumentExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitNamedExpression(NamedExpression namedExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitNamespaceDeclaration(NamespaceDeclaration namespaceDeclaration)
        {
            throw new NotImplementedException();
        }

        public void VisitNewLine(NewLineNode newLineNode)
        {
            throw new NotImplementedException();
        }

        public void VisitNullNode(AstNode nullNode)
        {
            throw new NotImplementedException();
        }

        public void VisitNullReferenceExpression(NullReferenceExpression nullReferenceExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitObjectCreateExpression(ObjectCreateExpression objectCreateExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitOperatorDeclaration(OperatorDeclaration operatorDeclaration)
        {
            throw new NotImplementedException();
        }

        public void VisitParameterDeclaration(ParameterDeclaration parameterDeclaration)
        {
            throw new NotImplementedException();
        }

        public void VisitParenthesizedExpression(ParenthesizedExpression parenthesizedExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitPatternPlaceholder(AstNode placeholder, Pattern pattern)
        {
            throw new NotImplementedException();
        }

        public void VisitPointerReferenceExpression(PointerReferenceExpression pointerReferenceExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitPreProcessorDirective(PreProcessorDirective preProcessorDirective)
        {
            throw new NotImplementedException();
        }

        public void VisitPrimitiveExpression(PrimitiveExpression primitiveExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitPrimitiveType(PrimitiveType primitiveType)
        {
            throw new NotImplementedException();
        }

        public void VisitPropertyDeclaration(PropertyDeclaration propertyDeclaration)
        {
            throw new NotImplementedException();
        }

        public void VisitQueryContinuationClause(QueryContinuationClause queryContinuationClause)
        {
            throw new NotImplementedException();
        }

        public void VisitQueryExpression(QueryExpression queryExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitQueryFromClause(QueryFromClause queryFromClause)
        {
            throw new NotImplementedException();
        }

        public void VisitQueryGroupClause(QueryGroupClause queryGroupClause)
        {
            throw new NotImplementedException();
        }

        public void VisitQueryJoinClause(QueryJoinClause queryJoinClause)
        {
            throw new NotImplementedException();
        }

        public void VisitQueryLetClause(QueryLetClause queryLetClause)
        {
            throw new NotImplementedException();
        }

        public void VisitQueryOrderClause(QueryOrderClause queryOrderClause)
        {
            throw new NotImplementedException();
        }

        public void VisitQueryOrdering(QueryOrdering queryOrdering)
        {
            throw new NotImplementedException();
        }

        public void VisitQuerySelectClause(QuerySelectClause querySelectClause)
        {
            throw new NotImplementedException();
        }

        public void VisitQueryWhereClause(QueryWhereClause queryWhereClause)
        {
            throw new NotImplementedException();
        }

        public void VisitReturnStatement(ReturnStatement returnStatement)
        {
            throw new NotImplementedException();
        }

        public void VisitSimpleType(SimpleType simpleType)
        {
            throw new NotImplementedException();
        }

        public void VisitSizeOfExpression(SizeOfExpression sizeOfExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitStackAllocExpression(StackAllocExpression stackAllocExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitSwitchSection(SwitchSection switchSection)
        {
            throw new NotImplementedException();
        }

        public void VisitSwitchStatement(SwitchStatement switchStatement)
        {
            throw new NotImplementedException();
        }

        public void VisitSyntaxTree(SyntaxTree syntaxTree)
        {
            throw new NotImplementedException();
        }

        public void VisitText(TextNode textNode)
        {
            throw new NotImplementedException();
        }

        public void VisitThisReferenceExpression(ThisReferenceExpression thisReferenceExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitThrowStatement(ThrowStatement throwStatement)
        {
            throw new NotImplementedException();
        }

        public void VisitTryCatchStatement(TryCatchStatement tryCatchStatement)
        {
            throw new NotImplementedException();
        }

        public void VisitTypeDeclaration(TypeDeclaration typeDeclaration)
        {
            throw new NotImplementedException();
        }

        public void VisitTypeOfExpression(TypeOfExpression typeOfExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitTypeParameterDeclaration(TypeParameterDeclaration typeParameterDeclaration)
        {
            throw new NotImplementedException();
        }

        public void VisitTypeReferenceExpression(TypeReferenceExpression typeReferenceExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitUnaryOperatorExpression(UnaryOperatorExpression unaryOperatorExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitUncheckedExpression(UncheckedExpression uncheckedExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitUncheckedStatement(UncheckedStatement uncheckedStatement)
        {
            throw new NotImplementedException();
        }

        public void VisitUndocumentedExpression(UndocumentedExpression undocumentedExpression)
        {
            throw new NotImplementedException();
        }

        public void VisitUnsafeStatement(UnsafeStatement unsafeStatement)
        {
            throw new NotImplementedException();
        }

        public void VisitUsingAliasDeclaration(UsingAliasDeclaration usingAliasDeclaration)
        {
            throw new NotImplementedException();
        }

        public void VisitUsingDeclaration(UsingDeclaration usingDeclaration)
        {
            throw new NotImplementedException();
        }

        public void VisitUsingStatement(UsingStatement usingStatement)
        {
            throw new NotImplementedException();
        }

        public void VisitVariableDeclarationStatement(VariableDeclarationStatement variableDeclarationStatement)
        {
            throw new NotImplementedException();
        }

        public void VisitVariableInitializer(VariableInitializer variableInitializer)
        {
            throw new NotImplementedException();
        }

        public void VisitWhileStatement(WhileStatement whileStatement)
        {
            throw new NotImplementedException();
        }

        public void VisitWhitespace(WhitespaceNode whitespaceNode)
        {
            throw new NotImplementedException();
        }

        public void VisitYieldBreakStatement(YieldBreakStatement yieldBreakStatement)
        {
            throw new NotImplementedException();
        }

        public void VisitYieldReturnStatement(YieldReturnStatement yieldReturnStatement)
        {
            throw new NotImplementedException();
        }

        public void WriteIndented(string s, int? position = default(int?))
        {
            throw new NotImplementedException();
        }
    }
}