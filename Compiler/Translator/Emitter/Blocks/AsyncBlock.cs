using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Bridge.Translator
{
    public class AsyncBlock : AbstractEmitterBlock, IAsyncBlock
    {
        public AsyncBlock(IEmitter emitter, MethodDeclaration methodDeclaration)
            : base(emitter, methodDeclaration)
        {
            this.Emitter = emitter;
            this.MethodDeclaration = methodDeclaration;
        }

        public AsyncBlock(IEmitter emitter, LambdaExpression lambdaExpression)
            : base(emitter, lambdaExpression)
        {
            this.Emitter = emitter;
            this.LambdaExpression = lambdaExpression;
        }

        public AsyncBlock(IEmitter emitter, AnonymousMethodExpression anonymousMethodExpression)
            : base(emitter, anonymousMethodExpression)
        {
            this.Emitter = emitter;
            this.AnonymousMethodExpression = anonymousMethodExpression;
        }

        public AstNode Node
        {
            get
            {
                if (this.MethodDeclaration != null)
                {
                    return this.MethodDeclaration;
                }

                if (this.AnonymousMethodExpression != null)
                {
                    return this.AnonymousMethodExpression;
                }

                if (this.LambdaExpression != null)
                {
                    return this.LambdaExpression;
                }

                return null;
            }
        }

        public MethodDeclaration MethodDeclaration
        {
            get;
            set;
        }

        public LambdaExpression LambdaExpression
        {
            get;
            set;
        }

        public AnonymousMethodExpression AnonymousMethodExpression
        {
            get;
            set;
        }

        public List<IAsyncJumpLabel> JumpLabels
        {
            get;
            set;
        }

        public AstNode Body
        {
            get
            {
                if (this.MethodDeclaration != null)
                {
                    return this.MethodDeclaration.Body;
                }

                if (this.LambdaExpression != null)
                {
                    return this.LambdaExpression.Body;
                }

                if (this.AnonymousMethodExpression != null)
                {
                    return this.AnonymousMethodExpression.Body;
                }

                return null;
            }
        }

        protected bool PreviousIsAync
        {
            get;
            set;
        }

        protected List<string> PreviousAsyncVariables
        {
            get;
            set;
        }

        protected IAsyncBlock PreviousAsyncBlock
        {
            get;
            set;
        }

        public Expression[] AwaitExpressions
        {
            get;
            set;
        }

        public IType ReturnType
        {
            get;
            set;
        }

        public bool IsTaskReturn
        {
            get;
            set;
        }

        public int Step
        {
            get;
            set;
        }

        public List<IAsyncStep> Steps
        {
            get;
            set;
        }

        public List<IAsyncStep> EmittedAsyncSteps
        {
            get;
            set;
        }

        public bool ReplaceAwaiterByVar
        {
            get;
            set;
        }

        public List<IAsyncTryInfo> TryInfos
        {
            get;
            set;
        }

        public void InitAsyncBlock()
        {
            this.PreviousIsAync = this.Emitter.IsAsync;
            this.Emitter.IsAsync = true;

            this.PreviousAsyncVariables = this.Emitter.AsyncVariables;
            this.Emitter.AsyncVariables = new List<string>();

            this.PreviousAsyncBlock = this.Emitter.AsyncBlock;
            this.Emitter.AsyncBlock = this;

            this.ReplaceAwaiterByVar = this.Emitter.ReplaceAwaiterByVar;
            this.Emitter.ReplaceAwaiterByVar = false;

            this.DetectReturnType();
            this.FindAwaitNodes();

            this.Steps = new List<IAsyncStep>();
            this.TryInfos = new List<IAsyncTryInfo>();
            this.JumpLabels = new List<IAsyncJumpLabel>();
        }

        protected void DetectReturnType()
        {
            AstNode node = this.MethodDeclaration != null ? this.MethodDeclaration.ReturnType : null;

            if (node == null)
            {
                node = this.AnonymousMethodExpression;
            }

            if (node == null)
            {
                node = this.LambdaExpression;
            }

            var resolveResult = this.Emitter.Resolver.ResolveNode(node, this.Emitter);

            if (resolveResult is LambdaResolveResult)
            {
                this.ReturnType = ((LambdaResolveResult)resolveResult).ReturnType;
            }
            else if (resolveResult is TypeResolveResult)
            {
                this.ReturnType = ((TypeResolveResult)resolveResult).Type;
            }

            this.IsTaskReturn = this.ReturnType != null && this.ReturnType.Name == "Task" && this.ReturnType.FullName.StartsWith("System.Threading.Tasks.Task");
        }

        protected void FindAwaitNodes()
        {
            this.AwaitExpressions = this.GetAwaiters(this.Body);

            for (int i = 0; i < this.AwaitExpressions.Length; i++)
            {
                this.Emitter.AsyncVariables.Add("$task" + (i + 1));

                if (this.IsTaskResult(this.AwaitExpressions[i]))
                {
                    this.Emitter.AsyncVariables.Add("$taskResult" + (i + 1));
                }
            }
        }

        protected bool IsTaskResult(Expression expression)
        {
            var resolveResult = this.Emitter.Resolver.ResolveNode(expression, this.Emitter);

            IType type;

            if (resolveResult is DynamicInvocationResolveResult)
            {
                return expression.Parent is UnaryOperatorExpression && !(expression.Parent.Parent is Statement);
            }
            else if (resolveResult is InvocationResolveResult)
            {
                type = ((InvocationResolveResult)resolveResult).Member.ReturnType;
            }
            else
            {
                type = resolveResult.Type;
            }

            if ((type.FullName == "System.Threading.Tasks.TaskAwaiter" || type.FullName == "System.Threading.Tasks.Task") && type.TypeParameterCount > 0)
            {
                return true;
            }

            var unaryExpr = expression.Parent as UnaryOperatorExpression;
            if (unaryExpr != null && unaryExpr.Operator == UnaryOperatorType.Await)
            {
                var rr = this.Emitter.Resolver.ResolveNode(unaryExpr, this.Emitter) as AwaitResolveResult;

                if (rr != null)
                {
                    var awaiterMethod = rr.GetAwaiterInvocation as InvocationResolveResult;

                    if (awaiterMethod != null)
                    {
                        type = awaiterMethod.Type;

                        if ((type.FullName == "System.Threading.Tasks.TaskAwaiter" || type.FullName == "System.Threading.Tasks.Task") && type.TypeParameterCount > 0)
                        {
                            return true;
                        }
                    }

                    var awaiterMethod2 = rr.GetAwaiterInvocation as DynamicInvocationResolveResult;
                    if (!(unaryExpr.Parent.Role is ICSharpCode.NRefactory.Role<ICSharpCode.NRefactory.CSharp.Statement>))
                    {                        
                        return true;
                    }
                }                
            }

            return false;
        }

        protected void FinishAsyncBlock()
        {
            this.Emitter.IsAsync = this.PreviousIsAync;
            this.Emitter.AsyncVariables = this.PreviousAsyncVariables;
            this.Emitter.AsyncBlock = this.PreviousAsyncBlock;
            this.Emitter.ReplaceAwaiterByVar = this.ReplaceAwaiterByVar;
        }

        protected override void DoEmit()
        {
            this.Emit(false);
        }

        public void Emit(bool skipInit)
        {
            if (!skipInit)
            {
                this.InitAsyncBlock();
            }

            this.EmitAsyncBlock();
            this.FinishAsyncBlock();
        }

        protected void EmitAsyncBlock()
        {
            var pos = 0;
            this.BeginBlock();
            this.WriteVar(true);
            this.Write("$step = 0,");
            pos = this.Emitter.Output.Length;
            this.WriteNewLine();

            this.Indent();
            this.Write("$asyncBody = Bridge.fn.bind(this, ");
            this.WriteFunction();
            this.Write("() ");

            this.EmitAsyncBody();

            string temp = this.Emitter.Output.ToString(pos, this.Emitter.Output.Length - pos);
            this.Emitter.Output.Length = pos;

            foreach (var localVar in this.Emitter.AsyncVariables)
            {
                this.WriteNewLine();
                this.Write(localVar);
                this.WriteComma();
            }

            this.Emitter.Output.Append(temp);
            this.Write(", arguments)");
            this.WriteSemiColon();
            this.WriteNewLine();
            this.WriteNewLine();
            this.Outdent();
            this.Write("$asyncBody();");

            if (this.IsTaskReturn)
            {
                this.WriteNewLine();
                this.Write("return $tcs.task;");
            }

            this.WriteNewLine();

            this.EndBlock();
        }

        protected void EmitAsyncBody()
        {
            this.BeginBlock();

            var asyncTryVisitor = new AsyncTryVisitor();
            this.Node.AcceptChildren(asyncTryVisitor);
            var needTry = asyncTryVisitor.Found || this.IsTaskReturn;

            this.Emitter.AsyncVariables.Add("$jumpFromFinally");
            if (needTry)
            {
                if (this.IsTaskReturn)
                {
                    this.Emitter.AsyncVariables.Add("$tcs = new Bridge.TaskCompletionSource()");
                }

                this.Emitter.AsyncVariables.Add("$returnValue");

                this.Write("try");
                this.WriteSpace();
                this.BeginBlock();
            }

            this.Write("for (;;) ");
            this.BeginBlock();
            this.WriteIndent();
            int checkerPos = this.Emitter.Output.Length;
            this.WriteNewLine();
            this.Write("switch ($step) ");

            this.BeginBlock();

            this.Step = 0;
            var writer = this.SaveWriter();
            this.AddAsyncStep();

            this.Body.AcceptVisitor(this.Emitter);

            this.RestoreWriter(writer);

            this.InjectSteps();

            this.WriteNewLine();
            this.EndBlock();

            this.InjectStepsChecker(checkerPos);
            this.WriteNewLine();
            this.EndBlock();

            if (needTry)
            {
                this.WriteNewLine();
                this.EndBlock();
                this.Write(" catch($e1) ");
                this.BeginBlock();
                this.Write("$e1 = Bridge.Exception.create($e1);");
                this.WriteNewLine();
                this.InjectCatchHandlers();

                this.WriteNewLine();
                this.EndBlock();
            }

            this.WriteNewLine();
            this.EndBlock();
        }

        protected void InjectStepsChecker(int pos)
        {
            var list = new List<int>();
            for (int i = 0; i < this.Steps.Count; i++)
            {
                var step = this.Steps[i];
                if (string.IsNullOrWhiteSpace(step.Output.ToString()) && step.JumpToStep == (i + 1))
                {
                    continue;
                }
                list.Add(i);
            }

            this.Emitter.Output.Insert(pos, "$step = Bridge.Array.min(" + this.Emitter.ToJavaScript(list.ToArray()) + ", $step);");
        }

        protected void InjectCatchHandlers()
        {
            var infos = this.TryInfos;

            foreach (var info in infos)
            {
                if (info.CatchBlocks.Count > 0)
                {
                    this.WriteIf();
                    this.WriteOpenParentheses(true);
                    this.Write(string.Format("$step >= {0} && $step <= {1}", info.StartStep, info.EndStep));
                    this.WriteCloseParentheses(true);
                    this.BeginBlock();
                    var firstClause = true;

                    for (int i = 0; i < info.CatchBlocks.Count; i++)
                    {
                        var clause = info.CatchBlocks[i];
                        var varName = clause.Item1;
                        var exceptionType = clause.Item2;
                        var step = clause.Item3;
                        var isBaseException = exceptionType == "Bridge.Exception";

                        if (info.CatchBlocks.Count == 1 && isBaseException)
                        {
                            if (!string.IsNullOrEmpty(varName))
                            {
                                this.Write(varName + " = $e1;");
                                this.WriteNewLine();
                            }
                            /*else
                            {
                                if (!this.Emitter.Locals.ContainsKey("$e"))
                                {
                                    this.AddLocal("$e", AstType.Null);
                                }
                                this.Write("$e = $e1;");
                            }*/

                            this.Write("$step = " + step + ";");

                            this.WriteNewLine();
                            this.Write("$asyncBody();");
                            this.WriteNewLine();
                            this.Write("return;");
                        }
                        else
                        {
                            if (!firstClause)
                            {
                                this.WriteSpace();
                                this.WriteElse();
                            }

                            if (!isBaseException)
                            {
                                this.WriteIf();
                                this.WriteOpenParentheses();
                                this.Write("Bridge.is($e1, " + exceptionType + ")");
                                this.WriteCloseParentheses();
                                this.WriteSpace();
                            }

                            firstClause = false;

                            this.BeginBlock();

                            if (!string.IsNullOrEmpty(varName))
                            {
                                this.Write(varName + " = $e1;");
                                this.WriteNewLine();
                            }
                            /*else
                            {
                                if (!this.Emitter.Locals.ContainsKey("$e"))
                                {
                                    this.AddLocal("$e", AstType.Null);
                                }
                                this.Write("$e = $e1;");
                            }*/

                            this.Write("$step = " + step + ";");

                            this.WriteNewLine();
                            this.Write("$asyncBody();");
                            this.WriteNewLine();
                            this.Write("return;");
                            this.WriteNewLine();
                            this.EndBlock();
                        }
                    }

                    this.WriteNewLine();
                    this.EndBlock();
                    this.WriteNewLine();
                }

                if (info.FinallyStep > 0)
                {
                    if (!this.Emitter.Locals.ContainsKey("$e"))
                    {
                        this.AddLocal("$e", AstType.Null);
                    }

                    this.WriteIf();
                    this.WriteOpenParentheses();
                    this.Write(string.Format("$step >= {0} && $step <= {1}", info.StartStep, info.CatchBlocks.Count > 0 ? info.CatchBlocks.Last().Item3 : info.EndStep));
                    this.WriteCloseParentheses();
                    this.BeginBlock();

                    this.Write("$e = $e1;");
                    this.WriteNewLine();
                    this.Write("$step = " + info.FinallyStep + ";");

                    this.WriteNewLine();
                    this.Write("$asyncBody();");
                    this.WriteNewLine();
                    this.Write("return;");

                    this.WriteNewLine();
                    this.EndBlock();
                    this.WriteNewLine();
                }
            }

            if (this.IsTaskReturn)
            {
                this.Write("$tcs.setException($e1);");
            }
            else
            {
                this.Write("throw $e1;");
            }
        }

        protected void InjectSteps()
        {
            foreach (var label in this.JumpLabels)
            {
                var tostep = this.Steps.First(s => s.Node == label.Node);
                label.Output.Replace("${" + label.Node.GetHashCode() + "}", tostep.Step.ToString());
            }

            for (int i = 0; i < this.Steps.Count; i++)
            {
                var step = this.Steps[i];

                if (i != 0)
                {
                    this.WriteNewLine();
                }

                var output = step.Output.ToString();

                if (string.IsNullOrWhiteSpace(output) && step.JumpToStep == (i + 1))
                {
                    continue;
                }

                this.Write("case " + i + ": ");
                

                this.BeginBlock();

                bool addNewLine = false;

                if (step.FromTaskNumber > -1)
                {
                    var expression = this.AwaitExpressions[step.FromTaskNumber - 1];

                    if (this.IsTaskResult(expression))
                    {
                        this.Write(string.Format("$taskResult{0} = $task{0}.getAwaitedResult();", step.FromTaskNumber));
                    }
                    else
                    {
                        this.Write(string.Format("$task{0}.getAwaitedResult();", step.FromTaskNumber));
                    }

                    addNewLine = true;
                }

                if (!string.IsNullOrWhiteSpace(output))
                {
                    if (addNewLine)
                    {
                        this.WriteNewLine();
                    }

                    this.Write(this.WriteIndentToString(output.TrimEnd()));
                }

                if (!this.IsOnlyWhitespaceOnPenultimateLine(false))
                {
                    addNewLine = true;
                }

                if (step.JumpToStep > -1 && !AbstractEmitterBlock.IsJumpStatementLast(output))
                {
                    if (addNewLine)
                    {
                        this.WriteNewLine();
                    }

                    this.Write("$step = " + step.JumpToStep + ";");
                    this.WriteNewLine();
                    this.Write("continue;");
                }
                else if (step.JumpToNode != null && !AbstractEmitterBlock.IsJumpStatementLast(output))
                {
                    var tostep = this.Steps.First(s => s.Node == step.JumpToNode);

                    if (addNewLine)
                    {
                        this.WriteNewLine();
                    }

                    this.Write("$step = " + tostep.Step + ";");
                    this.WriteNewLine();
                    this.Write("continue;");
                }
                else if (i == (this.Steps.Count - 1) && !AbstractEmitterBlock.IsReturnLast(output))
                {
                    if (addNewLine)
                    {
                        this.WriteNewLine();
                    }

                    if (this.IsTaskReturn)
                    {
                        this.Write("$tcs.setResult(null);");
                        this.WriteNewLine();
                    }

                    this.Write("return;");
                }

                this.WriteNewLine();
                this.EndBlock();
            }

            this.WriteNewLine();
            this.Write("default: ");
            this.BeginBlock();

            if (this.IsTaskReturn)
            {
                this.Write("$tcs.setResult(null);");
                this.WriteNewLine();
            }

            this.Write("return;");
            this.WriteNewLine();
            this.EndBlock();
        }

        public IAsyncStep AddAsyncStep(int fromTaskNumber = -1)
        {
            var step = this.Step++;
            var asyncStep = new AsyncStep(this.Emitter, step, fromTaskNumber);
            this.Steps.Add(asyncStep);

            return asyncStep;
        }

        public IAsyncStep AddAsyncStep(AstNode node)
        {
            var asyncStep = this.AddAsyncStep();
            asyncStep.Node = node;

            return asyncStep;
        }

        public bool IsParentForAsync(AstNode child)
        {
            if (child is IfElseStatement)
            {
                return false;
            }
            else
            {
                foreach (var awaiter in this.AwaitExpressions)
                {
                    if (child.IsInside(awaiter.StartLocation))
                    {
                        return true;
                    }
                }
            }

            return false;
        }
    }

    public class AsyncStep : IAsyncStep
    {
        public AsyncStep(IEmitter emitter, int step, int fromTaskNumber)
        {
            this.Step = step;
            this.Emitter = emitter;
            this.JumpToStep = -1;
            this.FromTaskNumber = -1;

            if (this.Emitter.LastSavedWriter != null)
            {
                this.Emitter.LastSavedWriter.Comma = this.Emitter.Comma;
                this.Emitter.LastSavedWriter.IsNewLine = this.Emitter.IsNewLine;
                this.Emitter.LastSavedWriter.Level = this.Emitter.Level;
                this.Emitter.LastSavedWriter = null;
            }

            this.Output = new StringBuilder();
            this.Emitter.Output = this.Output;
            this.Emitter.IsNewLine = false;
            this.Emitter.Level = 0;
            this.Emitter.Comma = false;

            this.FromTaskNumber = fromTaskNumber;
        }

        public int FromTaskNumber
        {
            get;
            set;
        }

        public int JumpToStep
        {
            get;
            set;
        }

        public AstNode JumpToNode
        {
            get;
            set;
        }

        public AstNode Node
        {
            get;
            set;
        }

        public int Step
        {
            get;
            set;
        }

        protected IEmitter Emitter
        {
            get;
            set;
        }

        public StringBuilder Output
        {
            get;
            set;
        }
    }

    public class AsyncJumpLabel : IAsyncJumpLabel
    {
        public StringBuilder Output
        {
            get;
            set;
        }

        public AstNode Node
        {
            get;
            set;
        }
    }
}
