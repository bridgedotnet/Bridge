using System.Linq;
using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;

namespace Bridge.Translator
{
    public class ReturnBlock : AbstractEmitterBlock
    {
        public ReturnBlock(IEmitter emitter, ReturnStatement returnStatement)
            : base(emitter, returnStatement)
        {
            this.Emitter = emitter;
            this.ReturnStatement = returnStatement;
        }

        public ReturnBlock(IEmitter emitter, Expression expression)
            : base(emitter, expression)
        {
            this.Emitter = emitter;
            this.Expression = expression;
        }

        public Expression Expression
        {
            get;
            set;
        }

        public ReturnStatement ReturnStatement
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            this.VisitReturnStatement();
        }

        protected void VisitReturnStatement()
        {
            ReturnStatement returnStatement = this.ReturnStatement;
            Expression expression = this.Expression;

            if (this.Emitter.IsAsync && (this.Emitter.AsyncBlock.MethodDeclaration == null || this.Emitter.AsyncBlock.MethodDeclaration.HasModifier(Modifiers.Async)))
            {
                var finallyNode = this.GetParentFinallyBlock(returnStatement ?? (AstNode)expression, false);
                var catchNode = this.GetParentCatchBlock(returnStatement ?? (AstNode)expression, false);
                expression = returnStatement != null ? returnStatement.Expression : expression;

                if (this.Emitter.AsyncBlock != null && this.Emitter.AsyncBlock.IsTaskReturn)
                {
                    this.WriteAwaiters(expression);

                    if (finallyNode != null)
                    {
                        this.Write(JS.Vars.ASYNC_RETURN_VALUE + " = ");
                    }
                    else
                    {
                        this.Write(JS.Vars.ASYNC_TCS + "." + JS.Funcs.SET_RESULT + "(");
                    }

                    if (!expression.IsNull)
                    {
                        var oldValue = this.Emitter.ReplaceAwaiterByVar;
                        this.Emitter.ReplaceAwaiterByVar = true;
                        expression.AcceptVisitor(this.Emitter);
                        this.Emitter.ReplaceAwaiterByVar = oldValue;
                    }
                    else
                    {
                        this.Write("null");
                    }

                    this.Write(finallyNode != null ? ";" : ");");
                    this.WriteNewLine();
                }

                if (finallyNode != null)
                {
                    if (catchNode == null || !catchNode.Body.Statements.Last().Equals(this.ReturnStatement))
                    {
                        if (catchNode != null)
                        {
                            Write(JS.Vars.ASYNC_E + " = null;");
                        }

                        var hashcode = finallyNode.GetHashCode();
                        this.Emitter.AsyncBlock.JumpLabels.Add(new AsyncJumpLabel
                        {
                            Node = finallyNode,
                            Output = this.Emitter.Output
                        });
                        this.Write(JS.Vars.ASYNC_STEP + " = " + Helpers.PrefixDollar("{", hashcode, "};"));
                        this.WriteNewLine();
                        this.Write("continue;");
                        this.WriteNewLine();
                    }
                }
                else
                {
                    this.WriteReturn(false);
                    this.WriteSemiColon();
                    this.WriteNewLine();
                }
            }
            else
            {
                this.WriteReturn(false);
                expression = returnStatement != null ? returnStatement.Expression : expression;

                if (this.Emitter.ReplaceJump && this.Emitter.JumpStatements == null)
                {
                    this.WriteSpace();
                    this.Write("{jump: 3");

                    if (!expression.IsNull)
                    {
                        this.Write(", v: ");
                        expression.AcceptVisitor(this.Emitter);
                    }

                    this.Write("}");
                }
                else if (!expression.IsNull)
                {
                    this.WriteSpace();
                    expression.AcceptVisitor(this.Emitter);
                }

                this.WriteSemiColon();
                this.WriteNewLine();
            }
        }
    }
}