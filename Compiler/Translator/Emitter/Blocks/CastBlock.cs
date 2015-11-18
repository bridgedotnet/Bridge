using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using ICSharpCode.NRefactory.TypeSystem.Implementation;
using System.Collections.Generic;
using System.Linq;
using System.Text;

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
                this.EmitCastExpression(this.CastExpression.Expression, this.CastExpression.Type, Bridge.Translator.Emitter.CAST);
            }
            else if (this.AsExpression != null)
            {
                this.EmitCastExpression(this.AsExpression.Expression, this.AsExpression.Type, Bridge.Translator.Emitter.AS);
            }
            else if (this.IsExpression != null)
            {
                this.EmitCastExpression(this.IsExpression.Expression, this.IsExpression.Type, Bridge.Translator.Emitter.IS);
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
            var castToEnum = this.Emitter.BridgeTypes.ToType(type).Kind == TypeKind.Enum;

            if (method != Bridge.Translator.Emitter.IS && (Helpers.IsIgnoreCast(type, this.Emitter) || castToEnum))
            {
                expression.AcceptVisitor(this.Emitter);
                return;
            }

            if (method == Bridge.Translator.Emitter.IS && castToEnum)
            {
                this.Write("Bridge.hasValue(");
                expression.AcceptVisitor(this.Emitter);
                this.Write(")");
                return;
            }

            var expressionrr = this.Emitter.Resolver.ResolveNode(expression, this.Emitter);
            var typerr = this.Emitter.Resolver.ResolveNode(type, this.Emitter);

            if (expressionrr.Type.Equals(typerr.Type))
            {
                if (method == Bridge.Translator.Emitter.IS)
                {
                    this.WriteScript(true);
                }
                else
                {
                    expression.AcceptVisitor(this.Emitter);
                }

                return;
            }

            bool isInlineCast;
            string castCode = this.GetCastCode(expression, type, out isInlineCast);
            bool isNullable = NullableType.IsNullable(expressionrr.Type);
            bool isResultNullable = NullableType.IsNullable(typerr.Type);

            if (isInlineCast)
            {
                if (isNullable)
                {
                    isNullable = !NullableType.GetUnderlyingType(expressionrr.Type).Equals(typerr.Type);
                }

                this.EmitInlineCast(expression, type, castCode, isNullable, isResultNullable);
                return;
            }

            if (method == Bridge.Translator.Emitter.CAST)
            {
                if (Helpers.IsIntegerType(typerr.Type, this.Emitter.Resolver))
                {
                    if (expressionrr.Type != null && Helpers.IsFloatType(expressionrr.Type, this.Emitter.Resolver))
                    {
                        this.Write("Bridge.Int.trunc(");
                        if (isNullable && !isResultNullable)
                        {
                            this.Write("Bridge.Nullable.getValue(");
                        }
                        expression.AcceptVisitor(this.Emitter);
                        if (isNullable && !isResultNullable)
                        {
                            this.WriteCloseParentheses();
                        }
                        this.Write(")");

                        return;
                    }
                }

                if (ConversionBlock.IsUserDefinedConversion(this, this.CastExpression))
                {
                    expression.AcceptVisitor(this.Emitter);

                    return;
                }
            }

            var simpleType = type as SimpleType;
            bool hasValue = false;

            if (simpleType != null && simpleType.Identifier == "dynamic")
            {
                if (method == Bridge.Translator.Emitter.CAST || method == Bridge.Translator.Emitter.AS)
                {
                    expression.AcceptVisitor(this.Emitter);
                    return;
                }
                else if (method == Bridge.Translator.Emitter.IS)
                {
                    hasValue = true;
                    method = "hasValue";
                }
            }

            this.Write(Bridge.Translator.Emitter.ROOT);
            this.WriteDot();
            this.Write(method);
            this.WriteOpenParentheses();
            if (isNullable && !isResultNullable)
            {
                this.Write("Bridge.Nullable.getValue(");
            }
            expression.AcceptVisitor(this.Emitter);
            if (isNullable && !isResultNullable)
            {
                this.WriteCloseParentheses();
            }

            if (!hasValue)
            {
                this.WriteComma();

                if (castCode != null)
                {
                    this.Write(castCode);
                }
                else
                {
                    this.EmitCastType(type);
                }
            }

            if (isResultNullable && method != Bridge.Translator.Emitter.IS)
            {
                this.WriteComma();
                this.WriteScript(true);
            }

            this.WriteCloseParentheses();
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
                this.Write("Function");
            }
            else if (resolveResult.Type.Kind == TypeKind.Array)
            {
                this.Write("Array");
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
                this.Write("Function");
            }
            else if (iType.Kind == TypeKind.Array)
            {
                this.Write("Array");
            }
            else if (iType.Kind == TypeKind.Anonymous)
            {
                this.Write("Object");
            }
            else
            {
                this.Write(BridgeTypes.ToJsName(iType, this.Emitter));
            }
        }

        protected virtual string GetCastCode(Expression expression, AstType astType, out bool isInline)
        {
            var resolveResult = this.Emitter.Resolver.ResolveNode(astType, this.Emitter) as TypeResolveResult;
            var exprResolveResult = this.Emitter.Resolver.ResolveNode(expression, this.Emitter);
            string inline = null;
            isInline = false;

            var method = this.GetCastMethod(exprResolveResult.Type, resolveResult.Type, out inline);

            if (method == null && (NullableType.IsNullable(exprResolveResult.Type) || NullableType.IsNullable(resolveResult.Type)))
            {
                method = this.GetCastMethod(NullableType.IsNullable(exprResolveResult.Type) ? NullableType.GetUnderlyingType(exprResolveResult.Type) : exprResolveResult.Type,
                                            NullableType.IsNullable(resolveResult.Type) ? NullableType.GetUnderlyingType(resolveResult.Type) : resolveResult.Type, out inline);
            }

            if (inline != null)
            {
                this.InlineMethod = method;
                isInline = true;
                return inline;
            }

            return null;
        }

        private IMethod GetCastMethod(IType fromType, IType toType, out string template)
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

        protected virtual void EmitInlineCast(Expression expression, AstType astType, string castCode, bool isNullable, bool isResultNullable)
        {
            this.Write("");
            var name = "{" + this.InlineMethod.Parameters[0].Name + "}";

            if (!castCode.Contains(name))
            {
                name = "{this}";
            }

            if (castCode.Contains(name))
            {
                var oldBuilder = this.Emitter.Output;
                this.Emitter.Output = new StringBuilder();

                if (isNullable && !isResultNullable)
                {
                    this.Write("Bridge.Nullable.getValue(");
                }
                expression.AcceptVisitor(this.Emitter);
                if (isNullable && !isResultNullable)
                {
                    this.WriteCloseParentheses();
                }

                castCode = castCode.Replace(name, this.Emitter.Output.ToString());
                this.Emitter.Output = oldBuilder;
            }

            if (castCode.Contains("{0}"))
            {
                var oldBuilder = this.Emitter.Output;
                this.Emitter.Output = new StringBuilder();
                this.EmitCastType(astType);
                castCode = castCode.Replace("{0}", this.Emitter.Output.ToString());
                this.Emitter.Output = oldBuilder;
            }

            this.Write(castCode);
        }

        public IMethod InlineMethod
        {
            get;
            set;
        }
    }
}
