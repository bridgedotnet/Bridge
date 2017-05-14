using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace Bridge.Translator
{
    public class IndexerAccessor
    {
        public IAttribute InlineAttr
        {
            get;
            set;
        }

        public string InlineCode
        {
            get;
            set;
        }

        public IMethod Method
        {
            get;
            set;
        }

        public bool IgnoreAccessor
        {
            get;
            set;
        }
    }

    public class IndexerBlock : ConversionBlock
    {
        private bool isRefArg;

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

        protected override Expression GetExpression()
        {
            return this.IndexerExpression;
        }

        protected override void EmitConversionExpression()
        {
            this.VisitIndexerExpression();
        }

        protected void VisitIndexerExpression()
        {
            this.isRefArg = this.Emitter.IsRefArg;
            this.Emitter.IsRefArg = false;

            IndexerExpression indexerExpression = this.IndexerExpression;
            int pos = this.Emitter.Output.Length;
            var resolveResult = this.Emitter.Resolver.ResolveNode(indexerExpression, this.Emitter);
            var memberResolveResult = resolveResult as MemberResolveResult;

            var arrayAccess = resolveResult as ArrayAccessResolveResult;

            if (arrayAccess != null && arrayAccess.Indexes.Count > 1)
            {
                this.EmitMultiDimArrayAccess(indexerExpression);
                Helpers.CheckValueTypeClone(resolveResult, indexerExpression, this, pos);
                return;
            }

            var isIgnore = true;
            var isAccessorsIndexer = false;

            IProperty member = null;

            IndexerAccessor current = null;

            if (memberResolveResult != null)
            {
                var resolvedMember = memberResolveResult.Member;
                isIgnore = this.Emitter.Validator.IsExternalType(resolvedMember.DeclaringTypeDefinition);
                isAccessorsIndexer = this.Emitter.Validator.IsAccessorsIndexer(resolvedMember);

                var property = resolvedMember as IProperty;
                if (property != null)
                {
                    member = property;
                    current = IndexerBlock.GetIndexerAccessor(this.Emitter, member, this.Emitter.IsAssignment);
                }
            }

            if (current != null && current.InlineAttr != null)
            {
                this.EmitInlineIndexer(indexerExpression, current);
            }
            else if (!(isIgnore || (current != null && current.IgnoreAccessor)) || isAccessorsIndexer)
            {
                this.EmitAccessorIndexer(indexerExpression, memberResolveResult, member);
            }
            else
            {
                this.EmitSingleDimArrayIndexer(indexerExpression);
            }

            Helpers.CheckValueTypeClone(resolveResult, indexerExpression, this, pos);
        }

        private void WriteInterfaceMember(string interfaceTempVar, MemberResolveResult resolveResult, bool isSetter, string prefix = null)
        {
            if (interfaceTempVar != null)
            {
                this.WriteComma();
                this.Write(interfaceTempVar);
            }

            var itypeDef = resolveResult.Member.DeclaringTypeDefinition;
            var externalInterface = this.Emitter.Validator.IsExternalInterface(itypeDef);
            bool variance = MetadataUtils.IsJsGeneric(itypeDef, this.Emitter) &&
                itypeDef.TypeParameters != null &&
                itypeDef.TypeParameters.Any(typeParameter => typeParameter.Variance != VarianceModifier.Invariant);

            this.WriteOpenBracket();
            if (externalInterface != null && externalInterface.IsDualImplementation || variance)
            {
                this.Write(JS.Funcs.BRIDGE_GET_I);
                this.WriteOpenParentheses();

                if (interfaceTempVar != null)
                {
                    this.Write(interfaceTempVar);
                }
                else
                {
                    var oldIsAssignment = this.Emitter.IsAssignment;
                    var oldUnary = this.Emitter.IsUnaryAccessor;

                    this.Emitter.IsAssignment = false;
                    this.Emitter.IsUnaryAccessor = false;
                    this.IndexerExpression.Target.AcceptVisitor(this.Emitter);
                    this.Emitter.IsAssignment = oldIsAssignment;
                    this.Emitter.IsUnaryAccessor = oldUnary;
                }

                this.WriteComma();

                var interfaceName = Helpers.GetPropertyRef(resolveResult.Member, this.Emitter, isSetter, ignoreInterface:false);
                
                if (interfaceName.StartsWith("\""))
                {
                    this.Write(interfaceName);
                }
                else
                {
                    this.WriteScript(interfaceName);
                }

                if (variance)
                {
                    this.WriteComma();
                    this.WriteScript(Helpers.GetPropertyRef(resolveResult.Member, this.Emitter, isSetter, ignoreInterface: false, withoutTypeParams:true));
                }

                this.Write(")");
            }
            else if (externalInterface == null || externalInterface.IsNativeImplementation)
            {
                this.Write(Helpers.GetPropertyRef(resolveResult.Member, this.Emitter, isSetter, ignoreInterface: false));
            }
            else
            {
                this.Write(Helpers.GetPropertyRef(resolveResult.Member, this.Emitter, isSetter, ignoreInterface: true));
            }

            this.WriteCloseBracket();

            if (interfaceTempVar != null)
            {
                this.WriteCloseParentheses();
            }
        }

        public static IndexerAccessor GetIndexerAccessor(IEmitter emitter, IProperty member, bool setter)
        {
            string inlineCode = null;
            var method = setter ? member.Setter : member.Getter;

            if (method == null)
            {
                return null;
            }

            var inlineAttr = emitter.GetAttribute(method.Attributes, Translator.Bridge_ASSEMBLY + ".TemplateAttribute");

            var ignoreAccessor = emitter.Validator.IsExternalType(method);

            if (inlineAttr != null)
            {
                var inlineArg = inlineAttr.PositionalArguments[0];

                if (inlineArg.ConstantValue != null)
                {
                    inlineCode = inlineArg.ConstantValue.ToString();
                }
            }

            return new IndexerAccessor
            {
                IgnoreAccessor = ignoreAccessor,
                InlineAttr = inlineAttr,
                InlineCode = inlineCode,
                Method = method
            };
        }

        protected virtual void EmitInlineIndexer(IndexerExpression indexerExpression, IndexerAccessor current)
        {
            var oldIsAssignment = this.Emitter.IsAssignment;
            var oldUnary = this.Emitter.IsUnaryAccessor;
            var inlineCode = current.InlineCode;
            bool hasThis = inlineCode != null && inlineCode.Contains("{this}");

            if (inlineCode != null && inlineCode.StartsWith("<self>"))
            {
                hasThis = true;
                inlineCode = inlineCode.Substring(6);
            }

            if (!hasThis && current.InlineAttr != null)
            {
                this.Emitter.IsAssignment = false;
                this.Emitter.IsUnaryAccessor = false;
                indexerExpression.Target.AcceptVisitor(this.Emitter);
                this.Emitter.IsAssignment = oldIsAssignment;
                this.Emitter.IsUnaryAccessor = oldUnary;
            }

            if (hasThis)
            {
                this.Write("");
                var oldBuilder = this.Emitter.Output;
                this.Emitter.Output = new StringBuilder();
                this.Emitter.IsAssignment = false;
                this.Emitter.IsUnaryAccessor = false;
                indexerExpression.Target.AcceptVisitor(this.Emitter);
                int thisIndex = inlineCode.IndexOf("{this}");
                var thisArg = this.Emitter.Output.ToString();
                inlineCode = inlineCode.Replace("{this}", thisArg);

                this.Emitter.Output = new StringBuilder();
                inlineCode = inlineCode.Replace("{0}", "[[0]]");
                new InlineArgumentsBlock(this.Emitter, new ArgumentsInfo(this.Emitter, indexerExpression, this.Emitter.Resolver.ResolveNode(indexerExpression, this.Emitter) as InvocationResolveResult), inlineCode).Emit();
                inlineCode = this.Emitter.Output.ToString();
                inlineCode = inlineCode.Replace("[[0]]", "{0}");

                this.Emitter.IsAssignment = oldIsAssignment;
                this.Emitter.IsUnaryAccessor = oldUnary;
                this.Emitter.Output = oldBuilder;
                int[] range = null;

                if (thisIndex > -1)
                {
                    range = new[] { thisIndex, thisIndex + thisArg.Length };
                }

                this.PushWriter(inlineCode, null, thisArg, range);
                new ExpressionListBlock(this.Emitter, indexerExpression.Arguments, null, null, 0).Emit();

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

            if (inlineCode != null)
            {
                this.WriteDot();
                this.PushWriter(inlineCode);
                this.Emitter.IsAssignment = false;
                this.Emitter.IsUnaryAccessor = false;
                new ExpressionListBlock(this.Emitter, indexerExpression.Arguments, null, null, 0).Emit();
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

        protected virtual void EmitAccessorIndexer(IndexerExpression indexerExpression, MemberResolveResult memberResolveResult, IProperty member)
        {
            string targetVar = null;
            string valueVar = null;
            bool writeTargetVar = false;
            bool isStatement = false;
            var oldIsAssignment = this.Emitter.IsAssignment;
            var oldUnary = this.Emitter.IsUnaryAccessor;
            var isInterfaceMember = false;
            bool nativeImplementation = true;
            var hasTypeParemeter = Helpers.IsTypeParameterType(memberResolveResult.Member.DeclaringType);
            var isExternalInterface = false;

            if (memberResolveResult.Member.DeclaringTypeDefinition != null &&
                memberResolveResult.Member.DeclaringTypeDefinition.Kind == TypeKind.Interface)
            {
                var itypeDef = memberResolveResult.Member.DeclaringTypeDefinition;
                var variance = MetadataUtils.IsJsGeneric(itypeDef, this.Emitter) &&
                    itypeDef.TypeParameters != null &&
                    itypeDef.TypeParameters.Any(typeParameter => typeParameter.Variance != VarianceModifier.Invariant);

                if (variance)
                {
                    isInterfaceMember = true;
                }
                else
                {
                    var ei =
                        this.Emitter.Validator.IsExternalInterface(memberResolveResult.Member.DeclaringTypeDefinition);

                    if (ei != null)
                    {
                        nativeImplementation = ei.IsNativeImplementation;
                        isExternalInterface = true;
                    }
                    else
                    {
                        nativeImplementation =
                            memberResolveResult.Member.DeclaringTypeDefinition.ParentAssembly.AssemblyName == CS.NS.ROOT ||
                            !this.Emitter.Validator.IsExternalType(memberResolveResult.Member.DeclaringTypeDefinition);
                    }

                    if (ei != null && ei.IsSimpleImplementation)
                    {
                        nativeImplementation = false;
                        isExternalInterface = false;
                    }
                    else if (hasTypeParemeter || ei != null && !nativeImplementation)
                    {
                        isInterfaceMember = true;
                        writeTargetVar = true;
                    }
                }
            }

            if (this.Emitter.IsUnaryAccessor)
            {
                writeTargetVar = true;

                isStatement = indexerExpression.Parent is UnaryOperatorExpression &&
                              indexerExpression.Parent.Parent is ExpressionStatement;

                if (memberResolveResult != null && NullableType.IsNullable(memberResolveResult.Type))
                {
                    isStatement = false;
                }

                if (!isStatement)
                {
                    this.WriteOpenParentheses();
                }
            }

            var targetrr = this.Emitter.Resolver.ResolveNode(indexerExpression.Target, this.Emitter);
            var memberTargetrr = targetrr as MemberResolveResult;
            bool isField = memberTargetrr != null && memberTargetrr.Member is IField &&
                           (memberTargetrr.TargetResult is ThisResolveResult ||
                           memberTargetrr.TargetResult is TypeResolveResult ||
                            memberTargetrr.TargetResult is LocalResolveResult);
            bool isSimple = targetrr is ThisResolveResult || targetrr is LocalResolveResult ||
                            targetrr is ConstantResolveResult || isField;
            bool needTemp = isExternalInterface && !nativeImplementation && !isSimple;

            if (isInterfaceMember && (!this.Emitter.IsUnaryAccessor || isStatement) && needTemp)
            {
                this.WriteOpenParentheses();
            }

            if (writeTargetVar)
            {
                if (needTemp)
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
                else if (!isInterfaceMember)
                {
                    this.WriteSemiColon();
                    this.WriteNewLine();
                    this.Write(targetVar);
                }
            }

            if (!isInterfaceMember)
            {
                this.WriteDot();
            }

            bool isBase = indexerExpression.Target is BaseReferenceExpression;

            var argsInfo = new ArgumentsInfo(this.Emitter, indexerExpression);
            var argsExpressions = argsInfo.ArgumentsExpressions;
            var paramsArg = argsInfo.ParamsExpression;
            var name = Helpers.GetPropertyRef(member, this.Emitter, this.Emitter.IsAssignment, ignoreInterface: !nativeImplementation);

            if (!this.Emitter.IsAssignment)
            {
                if (this.Emitter.IsUnaryAccessor)
                {
                    var oldWriter = this.SaveWriter();
                    this.NewWriter();
                    new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg, null, 0).Emit();
                    var paramsStr = this.Emitter.Output.ToString();
                    this.RestoreWriter(oldWriter);

                    bool isDecimal = Helpers.IsDecimalType(member.ReturnType, this.Emitter.Resolver);
                    bool isLong = Helpers.Is64Type(member.ReturnType, this.Emitter.Resolver);
                    bool isNullable = NullableType.IsNullable(member.ReturnType);
                    if (isStatement)
                    {
                        if (isInterfaceMember)
                        {
                            this.WriteInterfaceMember(targetVar, memberResolveResult, true, JS.Funcs.Property.SET);
                        }
                        else
                        {
                            this.Write(Helpers.GetPropertyRef(memberResolveResult.Member, this.Emitter, true, ignoreInterface: !nativeImplementation));
                        }

                        this.WriteOpenParentheses();
                        this.Write(paramsStr);
                        this.WriteComma(false);

                        if (isDecimal || isLong)
                        {
                            if (isNullable)
                            {
                                this.Write(JS.Types.SYSTEM_NULLABLE + "." + JS.Funcs.Math.LIFT1);
                                this.WriteOpenParentheses();
                                if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment ||
                                    this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                {
                                    this.WriteScript(JS.Funcs.Math.INC);
                                }
                                else
                                {
                                    this.WriteScript(JS.Funcs.Math.DEC);
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

                                if (!isInterfaceMember)
                                {
                                    this.WriteDot();
                                    this.Write(Helpers.GetPropertyRef(member, this.Emitter, false, ignoreInterface: !nativeImplementation));
                                }
                                else
                                {
                                    this.WriteInterfaceMember(targetVar, memberResolveResult, false, JS.Funcs.Property.GET);
                                }

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

                                if (!isInterfaceMember)
                                {
                                    this.WriteDot();
                                    this.Write(Helpers.GetPropertyRef(member, this.Emitter, false, ignoreInterface: !nativeImplementation));
                                }
                                else
                                {
                                    this.WriteInterfaceMember(targetVar, memberResolveResult, false, JS.Funcs.Property.GET);
                                }

                                this.WriteOpenParentheses();
                                this.Write(paramsStr);
                                this.WriteCloseParentheses();
                                this.WriteDot();
                                if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment ||
                                    this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                {
                                    this.Write(JS.Funcs.Math.INC);
                                }
                                else
                                {
                                    this.Write(JS.Funcs.Math.DEC);
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

                            if (!isInterfaceMember)
                            {
                                this.WriteDot();
                                this.Write(Helpers.GetPropertyRef(member, this.Emitter, false, ignoreInterface: !nativeImplementation));
                            }
                            else
                            {
                                this.WriteInterfaceMember(targetVar, memberResolveResult, false, JS.Funcs.Property.GET);
                            }

                            this.WriteOpenParentheses();
                            this.Write(paramsStr);
                            this.WriteCloseParentheses();

                            if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment ||
                                this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
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
                        if (!isInterfaceMember)
                        {
                            this.Write(Helpers.GetPropertyRef(member, this.Emitter, false, ignoreInterface: !nativeImplementation));
                        }
                        else
                        {
                            this.WriteInterfaceMember(targetVar, memberResolveResult, false, JS.Funcs.Property.GET);
                        }

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
                        if (!isInterfaceMember)
                        {
                            this.WriteDot();
                            this.Write(Helpers.GetPropertyRef(member, this.Emitter, true, ignoreInterface: !nativeImplementation));
                        }
                        else
                        {
                            this.WriteInterfaceMember(targetVar, memberResolveResult, true, JS.Funcs.Property.SET);
                        }

                        this.WriteOpenParentheses();
                        this.Write(paramsStr);
                        this.WriteComma(false);

                        if (isDecimal || isLong)
                        {
                            if (isNullable)
                            {
                                this.Write(JS.Types.SYSTEM_NULLABLE + "." + JS.Funcs.Math.LIFT1);
                                this.WriteOpenParentheses();
                                if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment ||
                                    this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                {
                                    this.WriteScript(JS.Funcs.Math.INC);
                                }
                                else
                                {
                                    this.WriteScript(JS.Funcs.Math.DEC);
                                }
                                this.WriteComma();
                                this.Write(valueVar);
                                this.WriteCloseParentheses();
                            }
                            else
                            {
                                this.Write(valueVar);
                                this.WriteDot();
                                if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment ||
                                    this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                {
                                    this.Write(JS.Funcs.Math.INC);
                                }
                                else
                                {
                                    this.Write(JS.Funcs.Math.DEC);
                                }
                                this.WriteOpenCloseParentheses();
                            }
                        }
                        else
                        {
                            this.Write(valueVar);

                            if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment ||
                                this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
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
                            if (!isInterfaceMember)
                            {
                                this.WriteDot();
                                this.Write(Helpers.GetPropertyRef(member, this.Emitter, false, ignoreInterface: !nativeImplementation));
                            }
                            else
                            {
                                this.WriteInterfaceMember(targetVar, memberResolveResult, false, JS.Funcs.Property.GET);
                            }
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
                    if (!isInterfaceMember)
                    {
                        this.Write(name);
                    }
                    else
                    {
                        this.WriteInterfaceMember(targetVar, memberResolveResult, this.Emitter.IsAssignment, Helpers.GetSetOrGet(this.Emitter.IsAssignment));
                    }

                    if (isBase)
                    {
                        this.WriteCall();
                        this.WriteOpenParentheses();
                        this.WriteThis();
                        this.WriteComma(false);
                    }
                    else
                    {
                        this.WriteOpenParentheses();
                    }

                    new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg, null, 0).Emit();
                    this.WriteCloseParentheses();
                }
            }
            else
            {
                if (this.Emitter.AssignmentType != AssignmentOperatorType.Assign)
                {
                    var oldWriter = this.SaveWriter();
                    this.NewWriter();
                    new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg, null, 0).Emit();
                    var paramsStr = this.Emitter.Output.ToString();
                    this.RestoreWriter(oldWriter);

                    string memberStr;
                    if (isInterfaceMember)
                    {
                        oldWriter = this.SaveWriter();
                        this.NewWriter();

                        this.Emitter.IsAssignment = false;
                        this.Emitter.IsUnaryAccessor = false;
                        this.WriteInterfaceMember(targetVar, memberResolveResult, this.Emitter.IsAssignment, Helpers.GetSetOrGet(this.Emitter.IsAssignment));
                        this.Emitter.IsAssignment = oldIsAssignment;
                        this.Emitter.IsUnaryAccessor = oldUnary;
                        memberStr = this.Emitter.Output.ToString();
                        this.RestoreWriter(oldWriter);
                    }
                    else
                    {
                        memberStr = name;
                    }

                    string getterMember;
                    if (isInterfaceMember)
                    {
                        oldWriter = this.SaveWriter();
                        this.NewWriter();

                        this.Emitter.IsAssignment = false;
                        this.Emitter.IsUnaryAccessor = false;
                        this.WriteInterfaceMember(targetVar, memberResolveResult, false, JS.Funcs.Property.GET);
                        this.Emitter.IsAssignment = oldIsAssignment;
                        this.Emitter.IsUnaryAccessor = oldUnary;
                        getterMember = this.Emitter.Output.ToString();
                        this.RestoreWriter(oldWriter);
                    }
                    else
                    {
                        getterMember = "." + Helpers.GetPropertyRef(memberResolveResult.Member, this.Emitter, false, ignoreInterface: !nativeImplementation);
                    }

                    if (targetVar != null)
                    {
                        this.PushWriter(string.Concat(
                            memberStr,
                            "(",
                            paramsStr,
                            ", ",
                            targetVar,
                            getterMember,
                            isBase ? "." + JS.Funcs.CALL : "",
                            "(",
                            isBase ? "this, " : "",
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
                            memberStr,
                            "(",
                            paramsStr,
                            ", ",
                            trg,
                            getterMember,
                            isBase ? "." + JS.Funcs.CALL : "",
                            "(",
                            isBase ? "this, " : "",
                            paramsStr,
                            "){0})"));
                    }
                }
                else
                {
                    if (!isInterfaceMember)
                    {
                        this.Write(name);
                    }
                    else
                    {
                        this.WriteInterfaceMember(targetVar, memberResolveResult, this.Emitter.IsAssignment, Helpers.GetSetOrGet(this.Emitter.IsAssignment));
                    }

                    if (isBase)
                    {
                        this.WriteCall();
                        this.WriteOpenParentheses();
                        this.WriteThis();
                        this.WriteComma(false);
                    }
                    else
                    {
                        this.WriteOpenParentheses();
                    }

                    this.Emitter.IsAssignment = false;
                    this.Emitter.IsUnaryAccessor = false;
                    new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg, null, 0).Emit();
                    this.Emitter.IsAssignment = oldIsAssignment;
                    this.Emitter.IsUnaryAccessor = oldUnary;
                    this.PushWriter(", {0})");
                }
            }
        }

        protected virtual void EmitMultiDimArrayAccess(IndexerExpression indexerExpression)
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

            if (this.isRefArg)
            {
                this.WriteComma();
            }
            else
            {
                this.WriteDot();
            }

            var argsInfo = new ArgumentsInfo(this.Emitter, indexerExpression);
            var argsExpressions = argsInfo.ArgumentsExpressions;
            var paramsArg = argsInfo.ParamsExpression;

            if (!this.Emitter.IsAssignment)
            {
                if (this.Emitter.IsUnaryAccessor)
                {
                    bool isDecimal = Helpers.IsDecimalType(resolveResult.Type, this.Emitter.Resolver);
                    bool isLong = Helpers.Is64Type(resolveResult.Type, this.Emitter.Resolver);
                    bool isNullable = NullableType.IsNullable(resolveResult.Type);

                    if (isStatement)
                    {
                        this.Write(JS.Funcs.Property.SET);
                        this.WriteOpenParentheses();
                        this.WriteOpenBracket();
                        new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg, null, 0).Emit();
                        this.WriteCloseBracket();
                        this.WriteComma(false);

                        if (isDecimal || isLong)
                        {
                            if (isNullable)
                            {
                                this.Write(JS.Types.SYSTEM_NULLABLE + "." + JS.Funcs.Math.LIFT1);
                                this.WriteOpenParentheses();
                                if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment || this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                {
                                    this.WriteScript(JS.Funcs.Math.INC);
                                }
                                else
                                {
                                    this.WriteScript(JS.Funcs.Math.DEC);
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

                                this.Write(JS.Funcs.Property.GET);
                                this.WriteOpenParentheses();
                                this.WriteOpenBracket();
                                new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg, null, 0).Emit();
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

                                this.Write(JS.Funcs.Property.GET);
                                this.WriteOpenParentheses();
                                this.WriteOpenBracket();
                                new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg, null, 0).Emit();
                                this.WriteCloseBracket();
                                this.WriteCloseParentheses();
                                this.WriteDot();
                                if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment || this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                {
                                    this.Write(JS.Funcs.Math.INC);
                                }
                                else
                                {
                                    this.Write(JS.Funcs.Math.DEC);
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

                            this.Write(JS.Funcs.Property.GET);
                            this.WriteOpenParentheses();
                            this.WriteOpenBracket();
                            new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg, null, 0).Emit();
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
                        this.Write(JS.Funcs.Property.GET);
                        this.WriteOpenParentheses();
                        this.WriteOpenBracket();
                        new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg, null, 0).Emit();
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
                        this.Write(JS.Funcs.Property.SET);
                        this.WriteOpenParentheses();
                        this.WriteOpenBracket();
                        new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg, null, 0).Emit();
                        this.WriteCloseBracket();
                        this.WriteComma(false);

                        if (isDecimal || isLong)
                        {
                            if (isNullable)
                            {
                                this.Write(JS.Types.SYSTEM_NULLABLE + "." + JS.Funcs.Math.LIFT1);
                                this.WriteOpenParentheses();
                                if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment ||
                                    this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                {
                                    this.WriteScript(JS.Funcs.Math.INC);
                                }
                                else
                                {
                                    this.WriteScript(JS.Funcs.Math.DEC);
                                }
                                this.WriteComma();

                                this.Write(valueVar);

                                this.WriteDot();

                                this.Write(JS.Funcs.Property.GET);
                                this.WriteOpenParentheses();
                                this.WriteOpenBracket();
                                new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg, null, 0).Emit();
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

                                this.Write(JS.Funcs.Property.GET);
                                this.WriteOpenParentheses();
                                this.WriteOpenBracket();
                                new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg, null, 0).Emit();
                                this.WriteCloseBracket();
                                this.WriteCloseParentheses();
                                this.WriteDot();
                                if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment ||
                                    this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                {
                                    this.Write(JS.Funcs.Math.INC);
                                }
                                else
                                {
                                    this.Write(JS.Funcs.Math.DEC);
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

                            this.Write(JS.Funcs.Property.GET);
                            this.WriteOpenParentheses();
                            this.WriteOpenBracket();
                            new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg, null, 0).Emit();
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
                    if (!this.isRefArg)
                    {
                        this.Write(JS.Funcs.Property.GET);
                        this.WriteOpenParentheses();
                    }

                    this.WriteOpenBracket();
                    new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg, null, 0).Emit();
                    this.WriteCloseBracket();
                    if (!this.isRefArg)
                    {
                        this.WriteCloseParentheses();
                    }
                }
            }
            else
            {
                if (this.Emitter.AssignmentType != AssignmentOperatorType.Assign)
                {
                    var oldWriter = this.SaveWriter();
                    this.NewWriter();
                    new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg, null, 0).Emit();
                    var paramsStr = this.Emitter.Output.ToString();
                    this.RestoreWriter(oldWriter);

                    if (targetVar != null)
                    {
                        this.PushWriter(string.Concat(
                            JS.Funcs.Property.SET,
                            "([",
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
                            JS.Funcs.Property.SET,
                            "([",
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
                    this.Write(JS.Funcs.Property.SET);
                    this.WriteOpenParentheses();
                    this.WriteOpenBracket();
                    new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg, null, 0).Emit();
                    this.WriteCloseBracket();
                    this.PushWriter(", {0})");
                }
            }
        }

        protected virtual void EmitSingleDimArrayIndexer(IndexerExpression indexerExpression)
        {
            var oldIsAssignment = this.Emitter.IsAssignment;
            var oldUnary = this.Emitter.IsUnaryAccessor;
            this.Emitter.IsAssignment = false;
            this.Emitter.IsUnaryAccessor = false;

            var targetrr = this.Emitter.Resolver.ResolveNode(indexerExpression.Target, this.Emitter);
            var memberTargetrr = targetrr as MemberResolveResult;
            bool isField = memberTargetrr != null && memberTargetrr.Member is IField &&
                           (memberTargetrr.TargetResult is ThisResolveResult ||
                            memberTargetrr.TargetResult is TypeResolveResult ||
                            memberTargetrr.TargetResult is LocalResolveResult);
            bool isSimple = targetrr is ThisResolveResult || targetrr is LocalResolveResult ||
                            targetrr is ConstantResolveResult || isField;
            string targetVar = null;

            if (!isSimple)
            {
                this.WriteOpenParentheses();
                targetVar = this.GetTempVarName();
                this.Write(targetVar);
                this.Write(" = ");
            }

            indexerExpression.Target.AcceptVisitor(this.Emitter);

            if (!isSimple)
            {
                this.WriteCloseParentheses();
            }

            this.Emitter.IsAssignment = oldIsAssignment;
            this.Emitter.IsUnaryAccessor = oldUnary;

            if (indexerExpression.Arguments.Count != 1)
            {
                throw new EmitterException(indexerExpression, "Only one index is supported");
            }

            var index = indexerExpression.Arguments.First();

            var primitive = index as PrimitiveExpression;

            if (primitive != null && primitive.Value != null &&
                Regex.Match(primitive.Value.ToString(), "^[_$a-z][_$a-z0-9]*$", RegexOptions.IgnoreCase).Success)
            {
                if (this.isRefArg)
                {
                    this.WriteComma();
                    this.WriteScript(primitive.Value);
                }
                else
                {
                    this.WriteDot();
                    this.Write(primitive.Value);
                }
            }
            else
            {
                this.Emitter.IsAssignment = false;
                this.Emitter.IsUnaryAccessor = false;
                if (this.isRefArg)
                {
                    this.WriteComma();
                }
                else
                {
                    this.WriteOpenBracket();
                    this.Write(JS.Types.System.Array.INDEX);
                    this.WriteOpenParentheses();
                }

                index.AcceptVisitor(this.Emitter);

                if (!this.isRefArg)
                {
                    this.WriteComma();

                    if (targetVar != null)
                    {
                        this.Write(targetVar);
                    }
                    else
                    {
                        indexerExpression.Target.AcceptVisitor(this.Emitter);
                    }

                    this.WriteCloseParentheses();
                    this.WriteCloseBracket();
                }

                this.Emitter.IsAssignment = oldIsAssignment;
                this.Emitter.IsUnaryAccessor = oldUnary;
            }
        }
    }
}