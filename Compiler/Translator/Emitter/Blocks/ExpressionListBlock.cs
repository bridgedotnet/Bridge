using Bridge.Contract;
using Bridge.Contract.Constants;

using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.CSharp.Resolver;
using System.Collections.Generic;
using ICSharpCode.NRefactory.Semantics;

namespace Bridge.Translator
{
    public class ExpressionListBlock : AbstractEmitterBlock
    {
        public ExpressionListBlock(IEmitter emitter, IEnumerable<Expression> expressions, Expression paramArg, AstNode invocation = null)
            : base(emitter, null)
        {
            this.Emitter = emitter;
            this.Expressions = expressions;
            this.ParamExpression = paramArg;
            this.InvocationExpression = invocation;
        }

        public IEnumerable<Expression> Expressions
        {
            get;
            set;
        }

        public Expression ParamExpression
        {
            get;
            set;
        }

        public AstNode InvocationExpression
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            var oldIsAssignment = this.Emitter.IsAssignment;
            var oldUnary = this.Emitter.IsUnaryAccessor;
            this.Emitter.IsAssignment = false;
            this.Emitter.IsUnaryAccessor = false;
            this.EmitExpressionList(this.Expressions, this.ParamExpression);
            this.Emitter.IsAssignment = oldIsAssignment;
            this.Emitter.IsUnaryAccessor = oldUnary;
        }

        protected virtual void EmitExpressionList(IEnumerable<Expression> expressions, Expression paramArg)
        {
            bool needComma = false;
            int count = this.Emitter.Writers.Count;
            bool expanded = true;

            if (paramArg != null && this.InvocationExpression != null)
            {
                var rr = this.Emitter.Resolver.ResolveNode(this.InvocationExpression, this.Emitter) as CSharpInvocationResolveResult;
                if (rr != null)
                {
                    expanded = rr.IsExpandedForm;
                }
            }

            foreach (var expr in expressions)
            {
                if (expr == null)
                {
                    continue;
                }
                
                this.Emitter.Translator.EmitNode = expr;

                if (needComma)
                {
                    this.WriteComma();
                }

                needComma = true;
                
                var directExpr = expr as DirectionExpression;
                if (directExpr != null)
                {
                    var rr = this.Emitter.Resolver.ResolveNode(expr, this.Emitter) as ByReferenceResolveResult;

                    if (rr != null && !(rr.ElementResult is LocalResolveResult))
                    {
                        this.Write(JS.Funcs.BRIDGE_REF + "(");

                        this.Emitter.IsRefArg = true;
                        expr.AcceptVisitor(this.Emitter);
                        this.Emitter.IsRefArg = false;

                        if (this.Emitter.Writers.Count != count)
                        {
                            this.PopWriter();
                            count = this.Emitter.Writers.Count;
                        }

                        this.Write(")");

                        continue;
                    }
                }
                            

                if (expanded && expr == paramArg)
                {
                    this.WriteOpenBracket();
                }
                
                int pos = this.Emitter.Output.Length;
                expr.AcceptVisitor(this.Emitter);

                if (this.Emitter.Writers.Count != count)
                {
                    this.PopWriter();
                    count = this.Emitter.Writers.Count;
                }

                if (expr is AssignmentExpression)
                {
                    Helpers.CheckValueTypeClone(this.Emitter.Resolver.ResolveNode(expr, this.Emitter), expr, this, pos);
                }
            }

            if (expanded && paramArg != null)
            {
                this.WriteCloseBracket();
            }
        }
    }
}