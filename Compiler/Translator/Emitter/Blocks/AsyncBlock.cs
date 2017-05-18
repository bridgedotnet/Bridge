using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using System;
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

        public AstNode[] AwaitExpressions
        {
            get;
            set;
        }

        public List<AstNode> WrittenAwaitExpressions
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

        public bool IsEnumeratorReturn
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
            this.WrittenAwaitExpressions = new List<AstNode>();
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
                if(this.AwaitExpressions[i] is Expression)
                {
                    this.Emitter.AsyncVariables.Add(JS.Vars.ASYNC_TASK + (i + 1));

                    if(this.IsTaskResult((Expression)this.AwaitExpressions[i]))
                    {
                        this.Emitter.AsyncVariables.Add(JS.Vars.ASYNC_TASK_RESULT + (i + 1));
                    }
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
            this.BeginBlock();
            this.WriteVar(true);
            this.Write(JS.Vars.ASYNC_STEP + " = 0,");
            var pos = this.Emitter.Output.Length;
            this.WriteNewLine();

            this.Indent();
            this.Write(JS.Funcs.ASYNC_BODY + " = " + JS.Funcs.BRIDGE_BIND + "(this, ");
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
            this.Write(", " + JS.Vars.ARGUMENTS + ")");
            this.WriteSemiColon();
            this.WriteNewLine();
            this.WriteNewLine();
            this.Outdent();

            if (this.Emitter.AsyncBlock.MethodDeclaration != null &&
                !this.Emitter.AsyncBlock.MethodDeclaration.HasModifier(Modifiers.Async))
            {
                this.Write("return ");    
            }

            this.Write(JS.Funcs.ASYNC_BODY + "();");

            if (this.IsTaskReturn)
            {
                this.WriteNewLine();
                this.Write("return " + JS.Vars.ASYNC_TCS + "." + JS.Fields.ASYNC_TASK + ";");
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

            this.Emitter.AsyncVariables.Add(JS.Vars.ASYNC_JUMP);
            if (needTry)
            {
                if (this.IsTaskReturn)
                {
                    this.Emitter.AsyncVariables.Add(JS.Vars.ASYNC_TCS + " = new " + JS.Types.TASK_COMPLETION_SOURCE + "()");
                }

                this.Emitter.AsyncVariables.Add(JS.Vars.ASYNC_RETURN_VALUE);

                this.Write("try");
                this.WriteSpace();
                this.BeginBlock();
            }

            this.Write("for (;;) ");
            this.BeginBlock();
            this.WriteIndent();
            int checkerPos = this.Emitter.Output.Length;
            this.WriteNewLine();
            this.Write("switch (" + JS.Vars.ASYNC_STEP + ") ");

            this.BeginBlock();

            this.Step = 0;
            var writer = this.SaveWriter();
            this.AddAsyncStep();

            if (this.Body.Parent is LambdaExpression && this.Body is Expression && this.IsTaskReturn)
            {
                new ReturnBlock(this.Emitter, (Expression)this.Body).Emit();
            }
            else
            {
                var level = this.Emitter.InitialLevel;
                ((Emitter) this.Emitter).InitialLevel = 0;
                this.Emitter.ResetLevel();
                this.Body.AcceptVisitor(this.Emitter);
                ((Emitter)this.Emitter).InitialLevel = level;
            }

            this.RestoreWriter(writer);

            this.InjectSteps();

            this.WriteNewLine();
            this.EndBlock();

            this.InjectStepsChecker(checkerPos);
            this.WriteNewLine();
            this.EndBlock();

            if (needTry)
            {
                if (!this.Emitter.Locals.ContainsKey(JS.Vars.ASYNC_E))
                {
                    this.AddLocal(JS.Vars.ASYNC_E, null, AstType.Null);
                }

                this.WriteNewLine();
                this.EndBlock();
                this.Write(" catch(" + JS.Vars.ASYNC_E1 + ") ");
                this.BeginBlock();
                this.Write(JS.Vars.ASYNC_E + " = " + JS.Types.System.Exception.CREATE + "(" + JS.Vars.ASYNC_E1 + ");");
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
                if (string.IsNullOrWhiteSpace(this.RemoveTokens(step.Output.ToString())) && step.JumpToStep == (i + 1) && step.FromTaskNumber < 0)
                {
                    continue;
                }
                list.Add(i);
            }

            this.Emitter.Output.Insert(pos, JS.Vars.ASYNC_STEP + " = " + JS.Types.System.Array.MIN + "(" + this.Emitter.ToJavaScript(list.ToArray()) + ", " + JS.Vars.ASYNC_STEP + ");");
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
                    this.Write(string.Format(JS.Vars.ASYNC_STEP + " >= {0} && " + JS.Vars.ASYNC_STEP + " <= {1}", info.StartStep, info.EndStep));
                    this.WriteCloseParentheses(true);
                    this.WriteSpace();
                    this.BeginBlock();
                    var firstClause = true;

                    for (int i = 0; i < info.CatchBlocks.Count; i++)
                    {
                        var clause = info.CatchBlocks[i];
                        var varName = clause.Item1;
                        var exceptionType = clause.Item2;
                        var step = clause.Item3;
                        var isBaseException = exceptionType == JS.Types.System.Exception.NAME;

                        if (info.CatchBlocks.Count == 1 && isBaseException)
                        {
                            if (!string.IsNullOrEmpty(varName))
                            {
                                this.Write(varName + " = " + JS.Vars.ASYNC_E + ";");
                                this.WriteNewLine();
                            }

                            this.Write(JS.Vars.ASYNC_STEP + " = " + step + ";");

                            this.WriteNewLine();
                            this.Write(JS.Funcs.ASYNC_BODY + "();");
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
                                this.Write(JS.Types.Bridge.IS + "(" + JS.Vars.ASYNC_E + ", " + exceptionType + ")");
                                this.WriteCloseParentheses();
                                this.WriteSpace();
                            }

                            firstClause = false;

                            this.BeginBlock();

                            if (!string.IsNullOrEmpty(varName))
                            {
                                this.Write(varName + " = " + JS.Vars.ASYNC_E + ";");
                                this.WriteNewLine();
                            }

                            this.Write(JS.Vars.ASYNC_STEP + " = " + step + ";");

                            this.WriteNewLine();
                            this.Write(JS.Funcs.ASYNC_BODY + "();");
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
                    if (!this.Emitter.Locals.ContainsKey(JS.Vars.ASYNC_E))
                    {
                        this.AddLocal(JS.Vars.ASYNC_E, null, AstType.Null);
                    }

                    this.WriteIf();
                    this.WriteOpenParentheses();
                    this.Write(string.Format(JS.Vars.ASYNC_STEP + " >= {0} && " + JS.Vars.ASYNC_STEP + " <= {1}", info.StartStep, info.CatchBlocks.Count > 0 ? info.CatchBlocks.Last().Item4 : info.EndStep));
                    this.WriteCloseParentheses();
                    this.WriteSpace();
                    this.BeginBlock();

                    //this.Write(Variables.E + " = " + Variables.ASYNC_E + ";");
                    //this.WriteNewLine();
                    this.Write(JS.Vars.ASYNC_STEP + " = " + info.FinallyStep + ";");

                    this.WriteNewLine();
                    this.Write(JS.Funcs.ASYNC_BODY + "();");
                    this.WriteNewLine();
                    this.Write("return;");

                    this.WriteNewLine();
                    this.EndBlock();
                    this.WriteNewLine();
                }
            }

            if (this.IsTaskReturn)
            {
                this.Write(JS.Vars.ASYNC_TCS + "." + JS.Funcs.SET_EXCEPTION + "(" + JS.Vars.ASYNC_E + ");");
            }
            else
            {
                this.Write("throw " + JS.Vars.ASYNC_E + ";");
            }
        }

        protected void InjectSteps()
        {
            foreach (var label in this.JumpLabels)
            {
                var tostep = this.Steps.First(s => s.Node == label.Node);
                label.Output.Replace(Helpers.PrefixDollar("{", label.Node.GetHashCode(), "}"), tostep.Step.ToString());
            }

            for (int i = 0; i < this.Steps.Count; i++)
            {
                var step = this.Steps[i];

                if (i != 0)
                {
                    this.WriteNewLine();
                }

                var output = step.Output.ToString();
                var cleanOutput = this.RemoveTokens(output);

                if (string.IsNullOrWhiteSpace(cleanOutput) && step.JumpToStep == (i + 1) && step.FromTaskNumber < 0)
                {
                    continue;
                }

                this.Write("case " + i + ": ");

                this.BeginBlock();

                bool addNewLine = false;

                if (step.FromTaskNumber > -1)
                {
                    var expression = (Expression)this.AwaitExpressions[step.FromTaskNumber - 1];

                    if (this.IsTaskResult(expression))
                    {
                        this.Write(string.Format("{0}{1} = {2}{1}.{3}();", JS.Vars.ASYNC_TASK_RESULT, step.FromTaskNumber, JS.Vars.ASYNC_TASK, JS.Funcs.GET_AWAITED_RESULT));
                    }
                    else
                    {
                        this.Write(string.Format("{0}{1}.{2}();", JS.Vars.ASYNC_TASK, step.FromTaskNumber, JS.Funcs.GET_AWAITED_RESULT));
                    }

                    addNewLine = true;
                }

                if (!string.IsNullOrWhiteSpace(cleanOutput))
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

                if (step.JumpToStep > -1 && !AbstractEmitterBlock.IsJumpStatementLast(cleanOutput))
                {
                    if (addNewLine)
                    {
                        this.WriteNewLine();
                    }

                    this.Write(JS.Vars.ASYNC_STEP + " = " + step.JumpToStep + ";");
                    this.WriteNewLine();
                    this.Write("continue;");
                }
                else if (step.JumpToNode != null && !AbstractEmitterBlock.IsJumpStatementLast(cleanOutput))
                {
                    var tostep = this.Steps.First(s => s.Node == step.JumpToNode);

                    if (addNewLine)
                    {
                        this.WriteNewLine();
                    }

                    this.Write(JS.Vars.ASYNC_STEP + " = " + tostep.Step + ";");
                    this.WriteNewLine();
                    this.Write("continue;");
                }
                else if (i == (this.Steps.Count - 1) && !AbstractEmitterBlock.IsReturnLast(cleanOutput))
                {
                    if (addNewLine)
                    {
                        this.WriteNewLine();
                    }

                    if (this.IsTaskReturn)
                    {
                        this.Write(JS.Vars.ASYNC_TCS + "." + JS.Funcs.SET_RESULT + "(null);");
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
                this.Write(JS.Vars.ASYNC_TCS + "." + JS.Funcs.SET_RESULT + "(null);");
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

        public static bool HasGoto(AstNode node)
        {
            var visitor = new GotoSearchVisitor();
            node.AcceptVisitor(visitor);
            return visitor.Found;
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
            this.Emitter.ResetLevel();
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

        public object Label
        {
            get; set;
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