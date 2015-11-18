using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace Bridge.Translator
{
    public class IndexerBlock : AbstractEmitterBlock
    {
        public IndexerBlock(IEmitter emitter, IndexerExpression indexerExpression)
            : base(emitter, indexerExpression)
        {
            this.Emitter = emitter;
            this.IndexerExpression = indexerExpression;
        }

        public IndexerExpression IndexerExpression
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            this.VisitIndexerExpression();
        }

        protected void VisitIndexerExpression()
        {
            IndexerExpression indexerExpression = this.IndexerExpression;

            IAttribute inlineAttr = null;
            string inlineCode = null;
            var resolveResult = this.Emitter.Resolver.ResolveNode(indexerExpression, this.Emitter);
            var memberResolveResult = resolveResult as MemberResolveResult;

            var arrayAccess = resolveResult as ArrayAccessResolveResult;

            if (arrayAccess != null && arrayAccess.Indexes.Count > 1)
            {
                this.EmitArrayAccess(indexerExpression);
                return;
            }

            var isIgnore = true;
            var isAccessorsIndexer = false;
            var ignoreAccessor = false;
            IProperty member = null;
            IMethod method = null;
            var oldIsAssignment = this.Emitter.IsAssignment;
            var oldUnary = this.Emitter.IsUnaryAccessor;
            bool isName = false;

            if (memberResolveResult != null)
            {
                var resolvedMember = memberResolveResult.Member;
                isIgnore = this.Emitter.Validator.IsIgnoreType(resolvedMember.DeclaringTypeDefinition);
                isAccessorsIndexer =
                    resolvedMember.DeclaringTypeDefinition.DirectBaseTypes.Any(
                        t => t.FullName == "Bridge.IAccessorsIndexer");

                if (resolvedMember is IProperty)
                {
                    member = (IProperty)resolvedMember;
                    method = this.Emitter.IsAssignment ? member.Setter : member.Getter;
                    inlineAttr = this.Emitter.GetAttribute(method.Attributes, Translator.Bridge_ASSEMBLY + ".TemplateAttribute");

                    if (inlineAttr == null)
                    {
                        inlineAttr = this.Emitter.GetAttribute(method.Attributes, Translator.Bridge_ASSEMBLY + ".NameAttribute");
                        isName = true;
                    }

                    ignoreAccessor = this.Emitter.Validator.IsIgnoreType(method);
                }
            }

            if (inlineAttr != null)
            {
                var inlineArg = inlineAttr.PositionalArguments[0];

                if (inlineArg.ConstantValue != null)
                {
                    inlineCode = inlineArg.ConstantValue.ToString();

                    if (inlineCode != null && isName)
                    {
                        inlineCode += "({0})";
                    }
                }
            }

            if (inlineCode != null && inlineCode.Contains("{this}"))
            {
                this.Write("");
                var oldBuilder = this.Emitter.Output;
                this.Emitter.Output = new StringBuilder();
                this.Emitter.IsAssignment = false;
                this.Emitter.IsUnaryAccessor = false;
                indexerExpression.Target.AcceptVisitor(this.Emitter);
                this.Emitter.IsAssignment = oldIsAssignment;
                this.Emitter.IsUnaryAccessor = oldUnary;
                inlineCode = inlineCode.Replace("{this}", this.Emitter.Output.ToString());
                this.Emitter.Output = oldBuilder;

                this.PushWriter(inlineCode);
                new ExpressionListBlock(this.Emitter, indexerExpression.Arguments, null).Emit();

                if (!this.Emitter.IsAssignment)
                {
                    this.PopWriter();
                }
                else
                {
                    this.WriteComma();
                }

                return;
            }

            if (inlineAttr != null || (isIgnore && !isAccessorsIndexer))
            {
                this.Emitter.IsAssignment = false;
                this.Emitter.IsUnaryAccessor = false;
                indexerExpression.Target.AcceptVisitor(this.Emitter);
                this.Emitter.IsAssignment = oldIsAssignment;
                this.Emitter.IsUnaryAccessor = oldUnary;
            }

            if (inlineAttr != null)
            {
                if (inlineCode != null)
                {
                    this.WriteDot();
                    this.PushWriter(inlineCode);
                    this.Emitter.IsAssignment = false;
                    this.Emitter.IsUnaryAccessor = false;
                    new ExpressionListBlock(this.Emitter, indexerExpression.Arguments, null).Emit();
                    this.Emitter.IsAssignment = oldIsAssignment;
                    this.Emitter.IsUnaryAccessor = oldUnary;

                    if (!this.Emitter.IsAssignment)
                    {
                        this.PopWriter();
                    }
                    else
                    {
                        this.WriteComma();
                    }
                }
            }
            else if (!(isIgnore || ignoreAccessor) || isAccessorsIndexer)
            {
                string targetVar = null;
                string valueVar = null;
                bool writeTargetVar = false;
                bool isStatement = false;

                if (this.Emitter.IsAssignment && this.Emitter.AssignmentType != AssignmentOperatorType.Assign)
                {
                    writeTargetVar = true;
                }
                else if (this.Emitter.IsUnaryAccessor)
                {
                    writeTargetVar = true;

                    isStatement = indexerExpression.Parent is UnaryOperatorExpression && indexerExpression.Parent.Parent is ExpressionStatement;

                    if (memberResolveResult != null && NullableType.IsNullable(memberResolveResult.Type))
                    {
                        isStatement = false;
                    }

                    if (!isStatement)
                    {
                        this.WriteOpenParentheses();
                    }
                }

                if (writeTargetVar)
                {
                    var targetrr = this.Emitter.Resolver.ResolveNode(indexerExpression.Target, this.Emitter);
                    var memberTargetrr = targetrr as MemberResolveResult;
                    bool isField = memberTargetrr != null && memberTargetrr.Member is IField && (memberTargetrr.TargetResult is ThisResolveResult || memberTargetrr.TargetResult is LocalResolveResult);

                    if (!(targetrr is ThisResolveResult || targetrr is LocalResolveResult || isField))
                    {
                        targetVar = this.GetTempVarName();
                        this.Write(targetVar);
                        this.Write(" = ");
                    }
                }

                if (this.Emitter.IsUnaryAccessor && !isStatement && targetVar == null)
                {
                    valueVar = this.GetTempVarName();

                    this.Write(valueVar);
                    this.Write(" = ");
                }

                this.Emitter.IsAssignment = false;
                this.Emitter.IsUnaryAccessor = false;
                indexerExpression.Target.AcceptVisitor(this.Emitter);
                this.Emitter.IsAssignment = oldIsAssignment;
                this.Emitter.IsUnaryAccessor = oldUnary;

                if (targetVar != null)
                {
                    if (this.Emitter.IsUnaryAccessor && !isStatement)
                    {
                        this.WriteComma(false);

                        valueVar = this.GetTempVarName();

                        this.Write(valueVar);
                        this.Write(" = ");

                        this.Write(targetVar);
                    }
                    else
                    {
                        this.WriteSemiColon();
                        this.WriteNewLine();
                        this.Write(targetVar);
                    }
                }

                this.WriteDot();
                var argsInfo = new ArgumentsInfo(this.Emitter, indexerExpression);
                var argsExpressions = argsInfo.ArgumentsExpressions;
                var paramsArg = argsInfo.ParamsExpression;
                var name = Helpers.GetPropertyRef(member, this.Emitter, this.Emitter.IsAssignment);

                if (!this.Emitter.IsAssignment)
                {
                    if (this.Emitter.IsUnaryAccessor)
                    {
                        var oldWriter = this.SaveWriter();
                        this.NewWriter();
                        new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg).Emit();
                        var paramsStr = this.Emitter.Output.ToString();
                        this.RestoreWriter(oldWriter);

                        bool isDecimal = Helpers.IsDecimalType(member.ReturnType, this.Emitter.Resolver);
                        bool isNullable = NullableType.IsNullable(member.ReturnType);
                        if (isStatement)
                        {
                            this.Write(Helpers.GetPropertyRef(member, this.Emitter, true));
                            this.WriteOpenParentheses();
                            this.Write(paramsStr);
                            this.WriteComma(false);

                            if (isDecimal)
                            {
                                if (isNullable)
                                {
                                    this.Write("Bridge.Nullable.lift1");
                                    this.WriteOpenParentheses();
                                    if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment || this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                    {
                                        this.WriteScript("inc");
                                    }
                                    else
                                    {
                                        this.WriteScript("dec");
                                    }
                                    this.WriteComma();

                                    if (targetVar != null)
                                    {
                                        this.Write(targetVar);
                                    }
                                    else
                                    {
                                        indexerExpression.Target.AcceptVisitor(this.Emitter);
                                    }

                                    this.WriteDot();

                                    this.Write(Helpers.GetPropertyRef(member, this.Emitter, false));
                                    this.WriteOpenParentheses();
                                    this.Write(paramsStr);
                                    this.WriteCloseParentheses();

                                    this.WriteCloseParentheses();
                                }
                                else
                                {
                                    if (targetVar != null)
                                    {
                                        this.Write(targetVar);
                                    }
                                    else
                                    {
                                        indexerExpression.Target.AcceptVisitor(this.Emitter);
                                    }

                                    this.WriteDot();

                                    this.Write(Helpers.GetPropertyRef(member, this.Emitter, false));
                                    this.WriteOpenParentheses();
                                    this.Write(paramsStr);
                                    this.WriteCloseParentheses();
                                    this.WriteDot();
                                    if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment || this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                    {
                                        this.Write("inc");
                                    }
                                    else
                                    {
                                        this.Write("dec");
                                    }
                                    this.WriteOpenCloseParentheses();
                                }
                            }
                            else
                            {
                                if (targetVar != null)
                                {
                                    this.Write(targetVar);
                                }
                                else
                                {
                                    indexerExpression.Target.AcceptVisitor(this.Emitter);
                                }

                                this.WriteDot();

                                this.Write(Helpers.GetPropertyRef(member, this.Emitter, false));
                                this.WriteOpenParentheses();
                                this.Write(paramsStr);
                                this.WriteCloseParentheses();

                                if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment || this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                {
                                    this.Write("+");
                                }
                                else
                                {
                                    this.Write("-");
                                }

                                this.Write("1");
                            }

                            this.WriteCloseParentheses();
                        }
                        else
                        {
                            this.Write(Helpers.GetPropertyRef(member, this.Emitter, false));
                            this.WriteOpenParentheses();
                            this.Write(paramsStr);
                            this.WriteCloseParentheses();
                            this.WriteComma();

                            if (targetVar != null)
                            {
                                this.Write(targetVar);
                            }
                            else
                            {
                                indexerExpression.Target.AcceptVisitor(this.Emitter);
                            }
                            this.WriteDot();
                            this.Write(Helpers.GetPropertyRef(member, this.Emitter, true));
                            this.WriteOpenParentheses();
                            this.Write(paramsStr);
                            this.WriteComma(false);

                            if (isDecimal)
                            {
                                if (isNullable)
                                {
                                    this.Write("Bridge.Nullable.lift1");
                                    this.WriteOpenParentheses();
                                    if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment || this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                    {
                                        this.WriteScript("inc");
                                    }
                                    else
                                    {
                                        this.WriteScript("dec");
                                    }
                                    this.WriteComma();
                                    this.Write(valueVar);
                                    this.WriteCloseParentheses();
                                }
                                else
                                {
                                    this.Write(valueVar);
                                    this.WriteDot();
                                    if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment || this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                    {
                                        this.Write("inc");
                                    }
                                    else
                                    {
                                        this.Write("dec");
                                    }
                                    this.WriteOpenCloseParentheses();
                                }
                            }
                            else
                            {
                                this.Write(valueVar);

                                if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment || this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                {
                                    this.Write("+");
                                }
                                else
                                {
                                    this.Write("-");
                                }

                                this.Write("1");
                            }

                            this.WriteCloseParentheses();
                            this.WriteComma();

                            bool isPreOp = this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment ||
                                           this.Emitter.UnaryOperatorType == UnaryOperatorType.Decrement;

                            if (isPreOp)
                            {
                                if (targetVar != null)
                                {
                                    this.Write(targetVar);
                                }
                                else
                                {
                                    indexerExpression.Target.AcceptVisitor(this.Emitter);
                                }
                                this.WriteDot();
                                this.Write(Helpers.GetPropertyRef(member, this.Emitter, false));
                                this.WriteOpenParentheses();
                                this.Write(paramsStr);
                                this.WriteCloseParentheses();
                            }
                            else
                            {
                                this.Write(valueVar);
                            }

                            this.WriteCloseParentheses();

                            if (valueVar != null)
                            {
                                this.RemoveTempVar(valueVar);
                            }
                        }

                        if (targetVar != null)
                        {
                            this.RemoveTempVar(targetVar);
                        }
                    }
                    else
                    {
                        this.Write(name);
                        this.WriteOpenParentheses();
                        new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg).Emit();
                        this.WriteCloseParentheses();
                    }
                }
                else
                {
                    if (this.Emitter.AssignmentType != AssignmentOperatorType.Assign)
                    {
                        var oldWriter = this.SaveWriter();
                        this.NewWriter();
                        new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg).Emit();
                        var paramsStr = this.Emitter.Output.ToString();
                        this.RestoreWriter(oldWriter);

                        if (targetVar != null)
                        {
                            this.PushWriter(string.Concat(
                                name,
                                "(",
                                paramsStr,
                                ", ",
                                targetVar,
                                ".",
                                Helpers.GetPropertyRef(member, this.Emitter, false),
                                "(",
                                paramsStr,
                                "){0})"));

                            this.RemoveTempVar(targetVar);
                        }
                        else
                        {
                            oldWriter = this.SaveWriter();
                            this.NewWriter();

                            this.Emitter.IsAssignment = false;
                            this.Emitter.IsUnaryAccessor = false;
                            indexerExpression.Target.AcceptVisitor(this.Emitter);
                            this.Emitter.IsAssignment = oldIsAssignment;
                            this.Emitter.IsUnaryAccessor = oldUnary;

                            var trg = this.Emitter.Output.ToString();

                            this.RestoreWriter(oldWriter);
                            this.PushWriter(string.Concat(
                                name,
                                "(",
                                paramsStr,
                                ", ",
                                trg,
                                ".",
                                Helpers.GetPropertyRef(member, this.Emitter, false),
                                "(",
                                paramsStr,
                                "){0})"));
                        }
                    }
                    else
                    {
                        this.Write(name);
                        this.WriteOpenParentheses();
                        this.Emitter.IsAssignment = false;
                        this.Emitter.IsUnaryAccessor = false;
                        new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg).Emit();
                        this.Emitter.IsAssignment = oldIsAssignment;
                        this.Emitter.IsUnaryAccessor = oldUnary;
                        this.PushWriter(", {0})");
                    }
                }
            }
            else
            {
                if (indexerExpression.Arguments.Count != 1)
                {
                    throw new EmitterException(indexerExpression, "Only one index is supported");
                }

                var index = indexerExpression.Arguments.First();

                var primitive = index as PrimitiveExpression;

                if (primitive != null && primitive.Value != null && Regex.Match(primitive.Value.ToString(), "^[_$a-z][_$a-z0-9]*$", RegexOptions.IgnoreCase).Success)
                {
                    this.WriteDot();
                    this.Write(primitive.Value);
                }
                else
                {
                    this.Emitter.IsAssignment = false;
                    this.Emitter.IsUnaryAccessor = false;
                    this.WriteOpenBracket();
                    index.AcceptVisitor(this.Emitter);
                    this.WriteCloseBracket();
                    this.Emitter.IsAssignment = oldIsAssignment;
                    this.Emitter.IsUnaryAccessor = oldUnary;
                }
            }
        }

        protected virtual void EmitArrayAccess(IndexerExpression indexerExpression)
        {
            string targetVar = null;
            bool writeTargetVar = false;
            bool isStatement = false;
            string valueVar = null;
            var resolveResult = this.Emitter.Resolver.ResolveNode(indexerExpression, this.Emitter);

            if (this.Emitter.IsAssignment && this.Emitter.AssignmentType != AssignmentOperatorType.Assign)
            {
                writeTargetVar = true;
            }
            else if (this.Emitter.IsUnaryAccessor)
            {
                writeTargetVar = true;

                isStatement = indexerExpression.Parent is UnaryOperatorExpression && indexerExpression.Parent.Parent is ExpressionStatement;

                if (NullableType.IsNullable(resolveResult.Type))
                {
                    isStatement = false;
                }

                if (!isStatement)
                {
                    this.WriteOpenParentheses();
                }
            }

            if (writeTargetVar)
            {
                var targetrr = this.Emitter.Resolver.ResolveNode(indexerExpression.Target, this.Emitter);
                var memberTargetrr = targetrr as MemberResolveResult;
                bool isField = memberTargetrr != null && memberTargetrr.Member is IField && (memberTargetrr.TargetResult is ThisResolveResult || memberTargetrr.TargetResult is LocalResolveResult);

                if (!(targetrr is ThisResolveResult || targetrr is LocalResolveResult || isField))
                {
                    targetVar = this.GetTempVarName();

                    this.Write(targetVar);
                    this.Write(" = ");
                }
            }

            if (this.Emitter.IsUnaryAccessor && !isStatement && targetVar == null)
            {
                valueVar = this.GetTempVarName();

                this.Write(valueVar);
                this.Write(" = ");
            }

            var oldIsAssignment = this.Emitter.IsAssignment;
            var oldUnary = this.Emitter.IsUnaryAccessor;

            this.Emitter.IsAssignment = false;
            this.Emitter.IsUnaryAccessor = false;
            indexerExpression.Target.AcceptVisitor(this.Emitter);
            this.Emitter.IsAssignment = oldIsAssignment;
            this.Emitter.IsUnaryAccessor = oldUnary;

            if (targetVar != null)
            {
                if (this.Emitter.IsUnaryAccessor && !isStatement)
                {
                    this.WriteComma(false);

                    valueVar = this.GetTempVarName();

                    this.Write(valueVar);
                    this.Write(" = ");

                    this.Write(targetVar);
                }
                else
                {
                    this.WriteSemiColon();
                    this.WriteNewLine();
                    this.Write(targetVar);
                }
            }

            this.WriteDot();

            var argsInfo = new ArgumentsInfo(this.Emitter, indexerExpression);
            var argsExpressions = argsInfo.ArgumentsExpressions;
            var paramsArg = argsInfo.ParamsExpression;

            if (!this.Emitter.IsAssignment)
            {
                if (this.Emitter.IsUnaryAccessor)
                {
                    bool isDecimal = Helpers.IsDecimalType(resolveResult.Type, this.Emitter.Resolver);
                    bool isNullable = NullableType.IsNullable(resolveResult.Type);

                    if (isStatement)
                    {
                        this.Write("set");
                        this.WriteOpenParentheses();
                        this.WriteOpenBracket();
                        new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg).Emit();
                        this.WriteCloseBracket();
                        this.WriteComma(false);

                        if (isDecimal)
                        {
                            if (isNullable)
                            {
                                this.Write("Bridge.Nullable.lift1");
                                this.WriteOpenParentheses();
                                if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment || this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                {
                                    this.WriteScript("inc");
                                }
                                else
                                {
                                    this.WriteScript("dec");
                                }
                                this.WriteComma();

                                if (targetVar != null)
                                {
                                    this.Write(targetVar);
                                }
                                else
                                {
                                    indexerExpression.Target.AcceptVisitor(this.Emitter);
                                }

                                this.WriteDot();

                                this.Write("get");
                                this.WriteOpenParentheses();
                                this.WriteOpenBracket();
                                new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg).Emit();
                                this.WriteCloseBracket();
                                this.WriteCloseParentheses();
                                this.WriteCloseParentheses();
                            }
                            else
                            {
                                if (targetVar != null)
                                {
                                    this.Write(targetVar);
                                }
                                else
                                {
                                    indexerExpression.Target.AcceptVisitor(this.Emitter);
                                }

                                this.WriteDot();

                                this.Write("get");
                                this.WriteOpenParentheses();
                                this.WriteOpenBracket();
                                new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg).Emit();
                                this.WriteCloseBracket();
                                this.WriteCloseParentheses();
                                this.WriteDot();
                                if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment || this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                {
                                    this.Write("inc");
                                }
                                else
                                {
                                    this.Write("dec");
                                }

                                this.WriteOpenCloseParentheses();
                            }
                        }
                        else
                        {
                            if (targetVar != null)
                            {
                                this.Write(targetVar);
                            }
                            else
                            {
                                indexerExpression.Target.AcceptVisitor(this.Emitter);
                            }

                            this.WriteDot();

                            this.Write("get");
                            this.WriteOpenParentheses();
                            this.WriteOpenBracket();
                            new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg).Emit();
                            this.WriteCloseBracket();
                            this.WriteCloseParentheses();

                            if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment || this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                            {
                                this.Write("+");
                            }
                            else
                            {
                                this.Write("-");
                            }

                            this.Write("1");
                        }

                        this.WriteCloseParentheses();
                    }
                    else
                    {
                        this.Write("get");
                        this.WriteOpenParentheses();
                        this.WriteOpenBracket();
                        new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg).Emit();
                        this.WriteCloseBracket();
                        this.WriteCloseParentheses();
                        this.WriteComma();

                        if (targetVar != null)
                        {
                            this.Write(targetVar);
                        }
                        else
                        {
                            indexerExpression.Target.AcceptVisitor(this.Emitter);
                        }
                        this.WriteDot();
                        this.Write("set");
                        this.WriteOpenParentheses();
                        this.WriteOpenBracket();
                        new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg).Emit();
                        this.WriteCloseBracket();
                        this.WriteComma(false);

                        if (isDecimal)
                        {
                            if (isNullable)
                            {
                                this.Write("Bridge.Nullable.lift1");
                                this.WriteOpenParentheses();
                                if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment ||
                                    this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                {
                                    this.WriteScript("inc");
                                }
                                else
                                {
                                    this.WriteScript("dec");
                                }
                                this.WriteComma();

                                this.Write(valueVar);

                                this.WriteDot();

                                this.Write("get");
                                this.WriteOpenParentheses();
                                this.WriteOpenBracket();
                                new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg).Emit();
                                this.WriteCloseBracket();
                                this.WriteCloseParentheses();
                                this.WriteCloseParentheses();
                            }
                            else
                            {
                                if (targetVar != null)
                                {
                                    this.Write(targetVar);
                                }
                                else
                                {
                                    indexerExpression.Target.AcceptVisitor(this.Emitter);
                                }

                                this.WriteDot();

                                this.Write("get");
                                this.WriteOpenParentheses();
                                this.WriteOpenBracket();
                                new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg).Emit();
                                this.WriteCloseBracket();
                                this.WriteCloseParentheses();
                                this.WriteDot();
                                if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment ||
                                    this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                {
                                    this.Write("inc");
                                }
                                else
                                {
                                    this.Write("dec");
                                }

                                this.WriteOpenCloseParentheses();
                            }
                        }
                        else
                        {
                            this.Write(valueVar);

                            if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment || this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                            {
                                this.Write("+");
                            }
                            else
                            {
                                this.Write("-");
                            }

                            this.Write("1");
                        }

                        this.WriteCloseParentheses();
                        this.WriteComma();

                        var isPreOp = this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment ||
                                      this.Emitter.UnaryOperatorType == UnaryOperatorType.Decrement;

                        if (isPreOp)
                        {
                            if (targetVar != null)
                            {
                                this.Write(targetVar);
                            }
                            else
                            {
                                indexerExpression.Target.AcceptVisitor(this.Emitter);
                            }

                            this.WriteDot();

                            this.Write("get");
                            this.WriteOpenParentheses();
                            this.WriteOpenBracket();
                            new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg).Emit();
                            this.WriteCloseBracket();
                            this.WriteCloseParentheses();
                        }
                        else
                        {
                            this.Write(valueVar);
                        }

                        this.WriteCloseParentheses();

                        if (valueVar != null)
                        {
                            this.RemoveTempVar(valueVar);
                        }
                    }

                    if (targetVar != null)
                    {
                        this.RemoveTempVar(targetVar);
                    }
                }
                else
                {
                    this.Write("get");
                    this.WriteOpenParentheses();
                    this.WriteOpenBracket();
                    new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg).Emit();
                    this.WriteCloseBracket();
                    this.WriteCloseParentheses();
                }
            }
            else
            {
                if (this.Emitter.AssignmentType != AssignmentOperatorType.Assign)
                {
                    var oldWriter = this.SaveWriter();
                    this.NewWriter();
                    new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg).Emit();
                    var paramsStr = this.Emitter.Output.ToString();
                    this.RestoreWriter(oldWriter);

                    if (targetVar != null)
                    {
                        this.PushWriter(string.Concat(
                            "set([",
                            paramsStr,
                            "],",
                            targetVar,
                            ".get([",
                            paramsStr,
                            "]){0})"), () =>
                            {
                                this.RemoveTempVar(targetVar);
                            });
                    }
                    else
                    {
                        oldWriter = this.SaveWriter();
                        this.NewWriter();

                        this.Emitter.IsAssignment = false;
                        this.Emitter.IsUnaryAccessor = false;
                        indexerExpression.Target.AcceptVisitor(this.Emitter);
                        this.Emitter.IsAssignment = oldIsAssignment;
                        this.Emitter.IsUnaryAccessor = oldUnary;

                        var trg = this.Emitter.Output.ToString();

                        this.RestoreWriter(oldWriter);
                        this.PushWriter(string.Concat(
                            "set([",
                            paramsStr,
                            "],",
                            trg,
                            ".get([",
                            paramsStr,
                            "]){0})"));
                    }
                }
                else
                {
                    this.Write("set");
                    this.WriteOpenParentheses();
                    this.WriteOpenBracket();
                    new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg).Emit();
                    this.WriteCloseBracket();
                    this.PushWriter(", {0})");
                }
            }
        }
    }
}
