using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.Semantics;

namespace Bridge.Translator
{
    public abstract partial class AbstractEmitterBlock : IAbstractEmitterBlock
    {
        private AstNode previousNode;

        public AbstractEmitterBlock(IEmitter emitter, AstNode node)
        {
            this.Emitter = emitter;
            this.previousNode = this.Emitter.Translator.EmitNode;
            this.Emitter.Translator.EmitNode = node;
        }

        protected abstract void DoEmit();

        public AstNode PreviousNode
        {
            get
            {
                return this.previousNode;
            }
        }

        public IEmitter Emitter
        {
            get;
            set;
        }

        public virtual void Emit()
        {
            this.BeginEmit();
            this.DoEmit();
            this.EndEmit();
        }

        private int startPos;
        private int checkPos;
        protected virtual void BeginEmit()
        {
            if (this.NeedSequencePoint())
            {
                this.startPos = this.Emitter.Output.Length;
                this.WriteSequencePoint(this.Emitter.Translator.EmitNode.Region);
                this.checkPos = this.Emitter.Output.Length;
            }
        }

        protected virtual void EndEmit()
        {
            if (this.NeedSequencePoint() && this.checkPos == this.Emitter.Output.Length)
            {
                this.Emitter.Output.Length = this.startPos;
            }
            this.Emitter.Translator.EmitNode = this.previousNode;
        }

        protected bool NeedSequencePoint()
        {
            if (this.Emitter.Translator.EmitNode != null && !this.Emitter.Translator.EmitNode.Region.IsEmpty)
            {
                if (this.Emitter.Translator.EmitNode is EntityDeclaration ||
                    this.Emitter.Translator.EmitNode is BlockStatement ||
                    this.Emitter.Translator.EmitNode is ArrayInitializerExpression ||
                    this.Emitter.Translator.EmitNode is PrimitiveExpression ||
                    this.Emitter.Translator.EmitNode is Comment)
                {
                    return false;
                }

                return true;
            }

            return false;

            //return this.Emitter.Translator.EmitNode != null && !this.Emitter.Translator.EmitNode.Region.IsEmpty;
            //return this.Emitter.Translator.EmitNode is Statement && !(this.Emitter.Translator.EmitNode is BlockStatement);
        }

        public virtual void EmitBlockOrIndentedLine(AstNode node)
        {
            bool block = node is BlockStatement;
            var ifStatement = node.Parent as IfElseStatement;

            if (!block && node is IfElseStatement && ifStatement != null && ifStatement.FalseStatement == node)
            {
                block = true;
            }

            if (!block)
            {
                this.WriteNewLine();
                this.Indent();
            }
            else
            {
                this.WriteSpace();
            }

            node.AcceptVisitor(this.Emitter);

            if (!block)
            {
                this.Outdent();
            }
        }

        public bool NoValueableSiblings(AstNode node)
        {
            while (node.NextSibling != null)
            {
                var sibling = node.NextSibling;

                if (sibling is NewLineNode || sibling is CSharpTokenNode || sibling is Comment)
                {
                    node = sibling;
                }
                else
                {
                    return false;
                }
            }

            return true;
        }

        protected AstNode[] GetAwaiters(AstNode node)
        {
            var awaitSearch = new AwaitSearchVisitor(this.Emitter);
            node.AcceptVisitor(awaitSearch);

            return awaitSearch.GetAwaitExpressions().ToArray();
        }

        protected bool IsDirectAsyncBlockChild(AstNode node)
        {
            var block = node.GetParent<BlockStatement>();

            if (block != null && (block.Parent is MethodDeclaration || block.Parent is AnonymousMethodExpression || block.Parent is LambdaExpression))
            {
                return true;
            }

            return false;
        }

        protected IAsyncStep WriteAwaiter(AstNode node)
        {
            var index = System.Array.IndexOf(this.Emitter.AsyncBlock.AwaitExpressions, node) + 1;

            if (node is ConditionalExpression)
            {
                new ConditionalBlock(this.Emitter, (ConditionalExpression)node).WriteAsyncConditionalExpression(index);
                return null;
            }

            if (node is BinaryOperatorExpression)
            {
                var binaryOperatorExpression = (BinaryOperatorExpression) node;
                if (binaryOperatorExpression.Operator == BinaryOperatorType.BitwiseAnd ||
                    binaryOperatorExpression.Operator == BinaryOperatorType.BitwiseOr ||
                    binaryOperatorExpression.Operator == BinaryOperatorType.ConditionalOr ||
                    binaryOperatorExpression.Operator == BinaryOperatorType.ConditionalAnd)
                {
                    new BinaryOperatorBlock(this.Emitter, binaryOperatorExpression).WriteAsyncBinaryExpression(index);
                    return null;
                }
            }

            if (this.Emitter.AsyncBlock.WrittenAwaitExpressions.Contains(node))
            {
                return null;
            }

            this.Emitter.AsyncBlock.WrittenAwaitExpressions.Add(node);

            this.Write(JS.Vars.ASYNC_TASK + index + " = ");
            bool customAwaiter = false;
            var oldValue = this.Emitter.ReplaceAwaiterByVar;
            this.Emitter.ReplaceAwaiterByVar = true;

            var unaryExpr = node.Parent as UnaryOperatorExpression;
            if (unaryExpr != null && unaryExpr.Operator == UnaryOperatorType.Await)
            {
                var rr = this.Emitter.Resolver.ResolveNode(unaryExpr, this.Emitter) as AwaitResolveResult;

                if (rr != null)
                {
                    var awaiterMethod = rr.GetAwaiterInvocation as InvocationResolveResult;

                    if (awaiterMethod != null && awaiterMethod.Member.FullName != "System.Threading.Tasks.Task.GetAwaiter")
                    {
                        this.WriteCustomAwaiter(node, awaiterMethod);
                        customAwaiter = true;
                    }
                }
            }

            if (!customAwaiter)
            {
                node.AcceptVisitor(this.Emitter);
            }

            this.Emitter.ReplaceAwaiterByVar = oldValue;

            this.WriteSemiColon();
            this.WriteNewLine();
            this.Write(JS.Vars.ASYNC_STEP + " = " + this.Emitter.AsyncBlock.Step + ";");
            this.WriteNewLine();

            if (this.Emitter.AsyncBlock.IsTaskReturn)
            {
                this.Write(JS.Vars.ASYNC_TASK + index + "." + JS.Funcs.CONTINUE_WITH + "(" + JS.Funcs.ASYNC_BODY + ");");
            }
            else
            {
                this.Write(JS.Vars.ASYNC_TASK + index + "." + JS.Funcs.CONTINUE_WITH + "(" + JS.Funcs.ASYNC_BODY + ", true);");
            }

            this.WriteNewLine();
            this.Write("return;");

            var asyncStep = this.Emitter.AsyncBlock.AddAsyncStep(index);

            if (this.Emitter.AsyncBlock.EmittedAsyncSteps != null)
            {
                this.Emitter.AsyncBlock.EmittedAsyncSteps.Add(asyncStep);
            }

            return asyncStep;
        }

        private void WriteCustomAwaiter(AstNode node, InvocationResolveResult awaiterMethod)
        {
            var method = awaiterMethod.Member;
            var inline = this.Emitter.GetInline(method);

            if (!string.IsNullOrWhiteSpace(inline))
            {
                var argsInfo = new ArgumentsInfo(this.Emitter, node as Expression, awaiterMethod);
                new InlineArgumentsBlock(this.Emitter, argsInfo, inline).Emit();
            }
            else
            {
                if (method.IsStatic)
                {
                    this.Write(BridgeTypes.ToJsName(method.DeclaringType, this.Emitter));
                    this.WriteDot();
                    this.Write(OverloadsCollection.Create(this.Emitter, method).GetOverloadName());
                    this.WriteOpenParentheses();
                    new ExpressionListBlock(this.Emitter, new Expression[] { (Expression)node }, null, null, 0).Emit();
                    this.WriteCloseParentheses();
                }
                else
                {
                    node.AcceptVisitor(this.Emitter);
                    this.WriteDot();
                    var name = OverloadsCollection.Create(this.Emitter, method).GetOverloadName();
                    this.Write(name);
                    this.WriteOpenParentheses();
                    this.WriteCloseParentheses();
                }
            }
        }

        protected void WriteAwaiters(AstNode node)
        {
            var awaiters = this.Emitter.IsAsync && !node.IsNull ? this.GetAwaiters(node) : null;

            if (awaiters != null && awaiters.Length > 0)
            {
                var oldValue = this.Emitter.AsyncExpressionHandling;
                this.Emitter.AsyncExpressionHandling = true;

                foreach (var awaiter in awaiters)
                {
                    this.WriteAwaiter(awaiter);
                }

                this.Emitter.AsyncExpressionHandling = oldValue;
            }
        }

        public AstNode GetParentFinallyBlock(AstNode node, bool stopOnLoops)
        {
            var insideTryFinally = false;
            var target = node.GetParent(n =>
            {
                if (n is LambdaExpression || n is AnonymousMethodExpression || n is MethodDeclaration)
                {
                    return true;
                }

                if (stopOnLoops && (n is WhileStatement || n is ForeachStatement || n is ForStatement || n is DoWhileStatement))
                {
                    return true;
                }

                if (n is TryCatchStatement && !((TryCatchStatement)n).FinallyBlock.IsNull)
                {
                    insideTryFinally = true;
                    return true;
                }

                return false;
            });

            return insideTryFinally ? ((TryCatchStatement)target).FinallyBlock : null;
        }

        public CatchClause GetParentCatchBlock(AstNode node, bool stopOnLoops)
        {
            var insideCatch = false;
            var target = node.GetParent(n =>
            {
                if (n is LambdaExpression || n is AnonymousMethodExpression || n is MethodDeclaration)
                {
                    return true;
                }

                if (stopOnLoops && (n is WhileStatement || n is ForeachStatement || n is ForStatement || n is DoWhileStatement))
                {
                    return true;
                }

                if (n is CatchClause)
                {
                    insideCatch = true;
                    return true;
                }

                return false;
            });

            return insideCatch ? (CatchClause)target : null;
        }

        public void WriteIdentifier(string name, bool script = true)
        {
            var isValid = Helpers.IsValidIdentifier(name);

            if (isValid)
            {
                this.Write(name);
            }
            else
            {
                if (this.Emitter.Output[this.Emitter.Output.Length - 1] == '.')
                {
                    --this.Emitter.Output.Length;
                    this.Write("[");
                    if (script)
                    {
                        this.WriteScript(name);
                    }
                    else
                    {
                        this.Write(name);
                    }

                    this.Write("]");
                }
            }
        }
    }
}