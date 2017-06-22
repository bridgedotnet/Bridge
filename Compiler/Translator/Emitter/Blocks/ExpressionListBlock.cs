using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.Translator
{
    public class ExpressionListBlock : AbstractEmitterBlock
    {
        public ExpressionListBlock(IEmitter emitter, IEnumerable<Expression> expressions, Expression paramArg, AstNode invocation, int openBracketPosition, bool newLine = false)
            : base(emitter, null)
        {
            this.Emitter = emitter;
            this.Expressions = expressions;
            this.ParamExpression = paramArg;
            this.InvocationExpression = invocation;
            this.OpenBracketPosition = openBracketPosition;
            this.NewLine = newLine;
        }

        public bool NewLine
        {
            get;
            set;
        }

        public int OpenBracketPosition
        {
            get;
            set;
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
            bool wrapByBrackets = true;
            bool expandParams = false;
            bool isApply = false;

            if (paramArg != null && this.InvocationExpression != null)
            {
                var rr = this.Emitter.Resolver.ResolveNode(this.InvocationExpression, this.Emitter) as CSharpInvocationResolveResult;
                if (rr != null)
                {
                    expandParams = rr.Member.Attributes.Any(a => a.AttributeType.FullName == "Bridge.ExpandParamsAttribute");
                    wrapByBrackets = rr.IsExpandedForm && !expandParams;
                }
            }

            if (paramArg != null && expandParams)
            {
                var resolveResult = this.Emitter.Resolver.ResolveNode(paramArg, this.Emitter);

                if (resolveResult.Type.Kind == TypeKind.Array && !(paramArg is ArrayCreateExpression) && expressions.Last() == paramArg)
                {
                    bool needConcat = expressions.Count() > 1;

                    if (this.InvocationExpression is ObjectCreateExpression)
                    {
                        if (needConcat)
                        {
                            this.Write("[");
                        }
                    }
                    else
                    {
                        var scope = "null";

                        if (this.InvocationExpression != null)
                        {
                            var rr = this.Emitter.Resolver.ResolveNode(this.InvocationExpression, this.Emitter) as MemberResolveResult;

                            if (rr != null && !rr.Member.IsStatic && this.InvocationExpression is InvocationExpression)
                            {
                                var oldWriter = this.SaveWriter();
                                var sb = this.NewWriter();
                                var target = ((InvocationExpression)this.InvocationExpression).Target;

                                if (target is MemberReferenceExpression)
                                {
                                    target = ((MemberReferenceExpression)target).Target;
                                }
                                else if (target is IdentifierExpression)
                                {
                                    target = new ThisReferenceExpression();
                                }

                                target.AcceptVisitor(this.Emitter);
                                scope = sb.ToString();
                                this.RestoreWriter(oldWriter);
                            }
                        }

                        var pos = this.OpenBracketPosition;
                        this.Emitter.Output.Insert(pos, "." + JS.Funcs.APPLY);
                        pos += 7;

                        this.Emitter.Output.Insert(pos, scope + ", " + (needConcat ? "[" : ""));
                    }

                    isApply = needConcat;
                }
            }

            if (this.NewLine)
            {
                this.WriteNewLine();
                this.Indent();
            }

            foreach (var expr in expressions)
            {
                if (expr == null)
                {
                    continue;
                }

                this.Emitter.Translator.EmitNode = expr;
                var isParamsArg = expr == paramArg;

                if (needComma && !(isParamsArg && isApply))
                {
                    this.WriteComma();
                    if (this.NewLine)
                    {
                        this.WriteNewLine();
                        this.WriteIndent();
                    }
                }

                needComma = true;

                var directExpr = expr as DirectionExpression;
                if (directExpr != null)
                {
                    var resolveResult = this.Emitter.Resolver.ResolveNode(expr, this.Emitter);
                    var byReferenceResolveResult = resolveResult as ByReferenceResolveResult;

                    if (byReferenceResolveResult != null && !(byReferenceResolveResult.ElementResult is LocalResolveResult))
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

                if (isParamsArg)
                {
                    if (wrapByBrackets)
                    {
                        this.WriteOpenBracket();
                    }
                    else if (isApply)
                    {
                        this.Write("].concat(");
                    }
                }

                int pos = this.Emitter.Output.Length;

                if (expandParams && isParamsArg && expr is ArrayCreateExpression)
                {
                    new ExpressionListBlock(this.Emitter, ((ArrayCreateExpression)expr).Initializer.Elements, null, null, 0).DoEmit();
                }
                else
                {
                    expr.AcceptVisitor(this.Emitter);

                    if (isParamsArg && isApply)
                    {
                        this.Write(")");
                    }
                }

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

            if (this.NewLine)
            {
                this.WriteNewLine();
                this.Outdent();
            }

            if (wrapByBrackets && paramArg != null)
            {
                this.WriteCloseBracket();
            }
        }
    }
}