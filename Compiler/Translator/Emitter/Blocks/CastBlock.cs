using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.Translator
{
    public class CastBlock : ConversionBlock
    {
        public CastBlock(IEmitter emitter, CastExpression castExpression)
            : base(emitter, castExpression)
        {
            this.Emitter = emitter;
            this.CastExpression = castExpression;
        }

        public CastBlock(IEmitter emitter, AsExpression asExpression)
            : base(emitter, asExpression)
        {
            this.Emitter = emitter;
            this.AsExpression = asExpression;
        }

        public CastBlock(IEmitter emitter, IsExpression isExpression)
            : base(emitter, isExpression)
        {
            this.Emitter = emitter;
            this.IsExpression = isExpression;
        }

        public CastBlock(IEmitter emitter, IType iType)
            : base(emitter, null)
        {
            this.Emitter = emitter;
            this.IType = iType;
        }

        public CastBlock(IEmitter emitter, AstType astType)
            : base(emitter, astType)
        {
            this.Emitter = emitter;
            this.AstType = astType;
        }

        public CastExpression CastExpression
        {
            get;
            set;
        }

        public AsExpression AsExpression
        {
            get;
            set;
        }

        public IsExpression IsExpression
        {
            get;
            set;
        }

        public IType IType
        {
            get;
            set;
        }

        public AstType AstType
        {
            get;
            set;
        }

        protected override Expression GetExpression()
        {
            if (this.CastExpression != null)
            {
                return this.CastExpression;
            }
            else if (this.AsExpression != null)
            {
                return this.AsExpression;
            }
            else if (this.IsExpression != null)
            {
                return this.IsExpression;
            }

            return null;
        }

        protected override void EmitConversionExpression()
        {
            if (this.CastExpression != null)
            {
                this.EmitCastExpression(this.CastExpression.Expression, this.CastExpression.Type, CS.Ops.CAST);
            }
            else if (this.AsExpression != null)
            {
                this.EmitCastExpression(this.AsExpression.Expression, this.AsExpression.Type, CS.Ops.AS);
            }
            else if (this.IsExpression != null)
            {
                this.EmitCastExpression(this.IsExpression.Expression, this.IsExpression.Type, CS.Ops.IS);
            }
            else if (this.IType != null)
            {
                this.EmitCastType(this.IType);
            }
            else if (this.AstType != null)
            {
                this.EmitCastType(this.AstType);
            }
        }

        protected virtual void EmitCastExpression(Expression expression, AstType type, string method)
        {
            var itype = this.Emitter.BridgeTypes.ToType(type);
            bool isCastAttr;
            string castCode = this.GetCastCode(expression, type, out isCastAttr);

            if (itype != null && castCode == null && method != CS.Ops.CAST && itype.GetDefinition() != null && this.Emitter.Validator.IsObjectLiteral(itype.GetDefinition()))
            {
                throw new EmitterException(expression, "The type " + itype.FullName + " cannot be used in cast operation because there is no way to check its type");
            }

            var enumType = itype;
            if (NullableType.IsNullable(enumType))
            {
                enumType = NullableType.GetUnderlyingType(enumType);
            }

            var castToEnum = enumType.Kind == TypeKind.Enum;

            if (castToEnum)
            {
                itype = enumType.GetDefinition().EnumUnderlyingType;
                var enumMode = this.Emitter.Validator.EnumEmitMode(enumType);
                if (enumMode >= 3 && enumMode < 7)
                {
                    itype = this.Emitter.Resolver.Compilation.FindType(KnownTypeCode.String);
                }
            }

            if (expression is NullReferenceExpression || (method != CS.Ops.IS && Helpers.IsIgnoreCast(type, this.Emitter)))
            {
                if (expression is ParenthesizedExpression)
                {
                    expression = ((ParenthesizedExpression) expression).Expression;
                }
                
                expression.AcceptVisitor(this.Emitter);
                return;
            }

            if (method == CS.Ops.CAST)
            {
                var cast_rr = this.Emitter.Resolver.ResolveNode(this.CastExpression, this.Emitter);

                if (cast_rr is ConstantResolveResult)
                {
                    var expectedType = this.Emitter.Resolver.Resolver.GetExpectedType(this.CastExpression);
                    var value = ((ConstantResolveResult)cast_rr).ConstantValue;

                    this.WriteCastValue(value, expectedType);
                    return;
                }
                else
                {
                    var conv_rr = cast_rr as ConversionResolveResult;
                    if (conv_rr != null && conv_rr.Input is ConstantResolveResult && !conv_rr.Conversion.IsUserDefined)
                    {
                        var expectedType = this.Emitter.Resolver.Resolver.GetExpectedType(this.CastExpression);
                        var value = ((ConstantResolveResult)conv_rr.Input).ConstantValue;
                        this.WriteCastValue(value, expectedType);
                        return;
                    }
                }
            }

            if (method == CS.Ops.IS && castToEnum)
            {
                this.Write("Bridge.is(");
                expression.AcceptVisitor(this.Emitter);
                this.Write(", ");
                this.Write(BridgeTypes.ToJsName(itype, this.Emitter));
                this.Write(")");
                return;
            }

            var expressionrr = this.Emitter.Resolver.ResolveNode(expression, this.Emitter);
            var typerr = this.Emitter.Resolver.ResolveNode(type, this.Emitter);

            if (expressionrr.Type.Equals(itype))
            {
                if (method == CS.Ops.IS)
                {
                    this.Write(JS.Funcs.BRIDGE_HASVALUE);
                    this.WriteOpenParentheses();
                }
                expression.AcceptVisitor(this.Emitter);
                if (method == CS.Ops.IS)
                {
                    this.Write(")");
                }

                return;
            }
            
            bool isResultNullable = NullableType.IsNullable(typerr.Type);

            if (castCode != null)
            {
                this.EmitInlineCast(expressionrr, expression, type, castCode, isCastAttr, method);
                return;
            }

            bool isCast = method == CS.Ops.CAST;
            if (isCast)
            {
                if (ConversionBlock.IsUserDefinedConversion(this, this.CastExpression.Expression) || ConversionBlock.IsUserDefinedConversion(this, this.CastExpression))
                {
                    expression.AcceptVisitor(this.Emitter);

                    return;
                }
            }

            var conversion = this.Emitter.Resolver.Resolver.GetConversion(expression);

            if (conversion.IsNumericConversion || conversion.IsEnumerationConversion || (isCast && conversion.IsIdentityConversion))
            {
                expression.AcceptVisitor(this.Emitter);
                return;
            }

            var simpleType = type as SimpleType;
            bool hasValue = false;

            if (simpleType != null && simpleType.Identifier == "dynamic")
            {
                if (method == CS.Ops.CAST || method == CS.Ops.AS)
                {
                    expression.AcceptVisitor(this.Emitter);
                    return;
                }
                else if (method == CS.Ops.IS)
                {
                    hasValue = true;
                    method = "hasValue";
                }
            }

            bool unbox = !(itype.IsReferenceType.HasValue ? itype.IsReferenceType.Value : true) && !NullableType.IsNullable(itype) && isCast && conversion.IsUnboxingConversion;
            if (unbox)
            {
                this.Write("System.Nullable.getValue(");
            }

            this.Write(JS.NS.BRIDGE);
            this.WriteDot();
            this.Write(method);
            this.WriteOpenParentheses();

            expression.AcceptVisitor(this.Emitter);

            if (!hasValue)
            {
                this.WriteComma();
                this.EmitCastType(itype);
            }

            if (isResultNullable && method != CS.Ops.IS)
            {
                this.WriteComma();
                this.WriteScript(true);
            }

            this.WriteCloseParentheses();

            if (unbox)
            {
                this.Write(")");
            }
        }

        private void WriteCastValue(object value, IType expectedType)
        {
            string typeName = null;

            if (value == null || value.GetType().FullName != expectedType.ReflectionName)
            {
                if (Helpers.IsDecimalType(expectedType, this.Emitter.Resolver))
                {
                    typeName = JS.Types.SYSTEM_DECIMAL;
                }
                else if (Helpers.IsLongType(expectedType, this.Emitter.Resolver))
                {
                    typeName = JS.Types.System.Int64.NAME;
                }
                else if (Helpers.IsULongType(expectedType, this.Emitter.Resolver))
                {
                    typeName = JS.Types.SYSTEM_UInt64;
                }
            }

            if (typeName != null)
            {
                this.Write(typeName);
                this.WriteOpenParentheses();
                this.WriteScript(value);
                this.WriteCloseParentheses();
            }
            if (value is float && expectedType.IsKnownType(KnownTypeCode.Double))
            {
                this.WriteScript((double)(float)value);
            }
            else
            {
                this.WriteScript(value);
            }
        }

        protected virtual void EmitCastType(AstType astType)
        {
            var resolveResult = this.Emitter.Resolver.ResolveNode(astType, this.Emitter);

            if (NullableType.IsNullable(resolveResult.Type))
            {
                this.Write(BridgeTypes.ToJsName(NullableType.GetUnderlyingType(resolveResult.Type), this.Emitter));
            }
            else if (resolveResult.Type.Kind == TypeKind.Delegate)
            {
                this.Write(JS.Types.FUNCTION);
            }
            else if (resolveResult.Type.Kind == TypeKind.Array)
            {
                this.EmitArray(resolveResult.Type);
            }
            else
            {
                astType.AcceptVisitor(this.Emitter);
            }
        }

        protected virtual void EmitCastType(IType iType)
        {
            if (NullableType.IsNullable(iType))
            {
                this.Write(BridgeTypes.ToJsName(NullableType.GetUnderlyingType(iType), this.Emitter));
            }
            else if (iType.Kind == TypeKind.Delegate)
            {
                this.Write(JS.Types.FUNCTION);
            }
            else if (iType.Kind == TypeKind.Array)
            {
                this.EmitArray(iType);
            }
            else if (iType.Kind == TypeKind.Anonymous)
            {
                this.Write(JS.Types.Object.NAME);
            }
            else
            {
                this.Write(BridgeTypes.ToJsName(iType, this.Emitter));
            }
        }

        protected virtual string GetCastCode(Expression expression, AstType astType, out bool isCastAttr)
        {
            var resolveResult = this.Emitter.Resolver.ResolveNode(astType, this.Emitter) as TypeResolveResult;
            isCastAttr = false;

            if (resolveResult == null)
            {
                return null;
            }

            var exprResolveResult = this.Emitter.Resolver.ResolveNode(expression, this.Emitter);
            string inline = null;

            var method = this.GetCastMethod(exprResolveResult.Type, resolveResult.Type, out inline);

            if (method == null && (NullableType.IsNullable(exprResolveResult.Type) || NullableType.IsNullable(resolveResult.Type)))
            {
                method = this.GetCastMethod(NullableType.IsNullable(exprResolveResult.Type) ? NullableType.GetUnderlyingType(exprResolveResult.Type) : exprResolveResult.Type,
                                            NullableType.IsNullable(resolveResult.Type) ? NullableType.GetUnderlyingType(resolveResult.Type) : resolveResult.Type, out inline);
            }

            if (inline != null)
            {
                this.InlineMethod = method;
                return inline;
            }

            IEnumerable<IAttribute> attributes = null;
            var type = resolveResult.Type.GetDefinition();

            if (type != null)
            {
                attributes = type.Attributes;
            }
            else
            {
                ParameterizedType paramType = resolveResult.Type as ParameterizedType;

                if (paramType != null)
                {
                    attributes = paramType.GetDefinition().Attributes;
                }
            }

            if (attributes != null)
            {
                var attribute = this.Emitter.GetAttribute(attributes, Translator.Bridge_ASSEMBLY + ".CastAttribute");

                if (attribute != null)
                {
                    isCastAttr = true;
                    return attribute.PositionalArguments[0].ConstantValue.ToString();
                }
            }

            return null;
        }

        private void EmitArray(IType iType)
        {
            string typedArrayName = null;
            if (this.Emitter.AssemblyInfo.UseTypedArrays && (typedArrayName = Helpers.GetTypedArrayName(iType)) != null)
            {
                this.Write(typedArrayName);
            }
            else
            {
                this.Write(JS.Types.ARRAY);
            }
        }

        

        protected virtual void EmitInlineCast(ResolveResult expressionrr, Expression expression, AstType astType, string castCode, bool isCastAttr, string method)
        {
            this.Write("");
            string name;

            if (this.InlineMethod == null)
            {
                name = "{this}";
            }
            else
            {
                name = "{" + this.InlineMethod.Parameters[0].Name + "}";
                if (!castCode.Contains(name))
                {
                    name = "{this}";
                }
            }

            string tempVar = null;
            string expressionStr;
            var memberTargetrr = expressionrr as MemberResolveResult;
            bool isField = memberTargetrr != null && memberTargetrr.Member is IField &&
                           (memberTargetrr.TargetResult is ThisResolveResult ||
                            memberTargetrr.TargetResult is LocalResolveResult);

            var oldBuilder = this.SaveWriter();
            var sb = this.NewWriter();

            expression.AcceptVisitor(this.Emitter);

            expressionStr = sb.ToString();
            this.RestoreWriter(oldBuilder);

            if (!(expressionrr is ThisResolveResult || expressionrr is ConstantResolveResult || expressionrr is LocalResolveResult || isField) && isCastAttr)
            {
                tempVar = this.GetTempVarName();
            }

            if (castCode.Contains(name))
            {
                castCode = castCode.Replace(name, tempVar ?? expressionStr);
            }

            if (castCode.Contains("{0}"))
            {
                oldBuilder = this.SaveWriter();
                sb = this.NewWriter();
                this.EmitCastType(astType);
                castCode = castCode.Replace("{0}", sb.ToString());
                this.RestoreWriter(oldBuilder);
            }

            if (isCastAttr)
            {
                if (tempVar != null)
                {
                    castCode = string.Format("({0} = {1}, Bridge.{2}({0}, {4}({0}) && ({3})))", tempVar, expressionStr, method, castCode, JS.Funcs.BRIDGE_HASVALUE);
                    this.RemoveTempVar(tempVar);
                }
                else
                {
                    castCode = string.Format("Bridge.{1}({0}, {3}({0}) && ({2}))", expressionStr, method, castCode, JS.Funcs.BRIDGE_HASVALUE);
                }
            }

            this.Write(castCode);
        }

        public IMethod GetCastMethod(IType fromType, IType toType, out string template)
        {
            string inline = null;
            var method = fromType.GetMethods().FirstOrDefault(m =>
            {
                if (m.IsOperator && (m.Name == "op_Explicit" || m.Name == "op_Implicit") &&
                    m.Parameters.Count == 1 &&
                    m.ReturnType.ReflectionName == toType.ReflectionName &&
                    m.Parameters[0].Type.ReflectionName == fromType.ReflectionName
                    )
                {
                    string tmpInline = this.Emitter.GetInline(m);

                    if (!string.IsNullOrWhiteSpace(tmpInline))
                    {
                        inline = tmpInline;
                        return true;
                    }
                }

                return false;
            });

            if (method == null)
            {
                method = toType.GetMethods().FirstOrDefault(m =>
                {
                    if (m.IsOperator && (m.Name == "op_Explicit" || m.Name == "op_Implicit") &&
                        m.Parameters.Count == 1 &&
                        m.ReturnType.ReflectionName == toType.ReflectionName &&
                        (m.Parameters[0].Type.ReflectionName == fromType.ReflectionName)
                        )
                    {
                        string tmpInline = this.Emitter.GetInline(m);

                        if (!string.IsNullOrWhiteSpace(tmpInline))
                        {
                            inline = tmpInline;
                            return true;
                        }
                    }

                    return false;
                });
            }

            if (method == null && this.CastExpression != null)
            {
                var conversion = this.Emitter.Resolver.Resolver.GetConversion(this.CastExpression);

                if (conversion.IsUserDefined)
                {
                    method = conversion.Method;

                    string tmpInline = this.Emitter.GetInline(method);

                    if (!string.IsNullOrWhiteSpace(tmpInline))
                    {
                        inline = tmpInline;
                    }
                }
            }

            template = inline;
            return method;
        }

        public IMethod InlineMethod
        {
            get;
            set;
        }
    }
}