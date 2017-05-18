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
    public class GeneratorBlock : AbstractEmitterBlock, IAsyncBlock
    {
        public GeneratorBlock(IEmitter emitter, MethodDeclaration methodDeclaration)
            : base(emitter, methodDeclaration)
        {
            this.Emitter = emitter;
            this.MethodDeclaration = methodDeclaration;
        }

        public GeneratorBlock(IEmitter emitter, LambdaExpression lambdaExpression)
            : base(emitter, lambdaExpression)
        {

            this.Emitter = emitter;
            this.LambdaExpression = lambdaExpression;
        }

        public GeneratorBlock(IEmitter emitter, AnonymousMethodExpression anonymousMethodExpression)
            : base(emitter, anonymousMethodExpression)
        {
            this.Emitter = emitter;
            this.AnonymousMethodExpression = anonymousMethodExpression;
        }

        public GeneratorBlock(IEmitter emitter, Accessor accessor)
             : base(emitter, accessor)
         {
             this.Emitter = emitter;
             this.Accessor = accessor;
         }

        public AstNode Node
        {
            get
            {
                if(this.MethodDeclaration != null)
                {
                    return this.MethodDeclaration;
                }

                if(this.AnonymousMethodExpression != null)
                {
                    return this.AnonymousMethodExpression;
                }

                if(this.LambdaExpression != null)
                {
                    return this.LambdaExpression;
                }

                if(this.Accessor != null)
                {
                    return this.Accessor;
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

        public Accessor Accessor
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
                if(this.MethodDeclaration != null)
                {
                    return this.MethodDeclaration.Body;
                }

                if(this.LambdaExpression != null)
                {
                    return this.LambdaExpression.Body;
                }

                if(this.AnonymousMethodExpression != null)
                {
                    return this.AnonymousMethodExpression.Body;
                }

                if(this.Accessor != null)
                {
                    return this.Accessor.Body;
                }

                return null;
            }
        }

        public List<string> Parameters
        {
            get
            {
                AstNodeCollection<ParameterDeclaration> prms = null;
                AstNodeCollection<TypeParameterDeclaration> tprms = null;

                if (this.MethodDeclaration != null)
                {
                    prms = this.MethodDeclaration.Parameters;

                    if (this.MethodDeclaration.TypeParameters.Count > 0 &&
                        !Helpers.IsIgnoreGeneric(this.MethodDeclaration, this.Emitter))
                    {
                        tprms = this.MethodDeclaration.TypeParameters;
                    }
                }
                else if (this.LambdaExpression != null)
                {
                    prms = this.LambdaExpression.Parameters;
                }
                else if (this.AnonymousMethodExpression != null)
                {
                    prms = this.AnonymousMethodExpression.Parameters;
                }

                var result = new List<string>();

                if (tprms != null)
                {
                    foreach (var typeParameterDeclaration in tprms)
                    {
                        result.Add(typeParameterDeclaration.Name);
                    }
                }

                if (prms != null)
                {
                    foreach (var parameterDeclaration in prms)
                    {
                        var name = this.Emitter.GetParameterName(parameterDeclaration);
                        if (this.Emitter.LocalsNamesMap != null && this.Emitter.LocalsNamesMap.ContainsKey(name))
                        {
                            name = this.Emitter.LocalsNamesMap[name];
                        }

                        result.Add(name);
                    }
                }

                return result;
            }
        }

        protected bool PreviousIsAync
        {
            get;
            set;
        }

        protected bool PreviousIsYield
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
            this.PreviousIsYield = this.Emitter.IsYield;
            this.Emitter.IsAsync = true;
            this.Emitter.IsYield = true;

            this.PreviousAsyncVariables = this.Emitter.AsyncVariables;
            this.Emitter.AsyncVariables = new List<string>();

            this.PreviousAsyncBlock = this.Emitter.AsyncBlock;
            this.Emitter.AsyncBlock = this;

            this.ReplaceAwaiterByVar = this.Emitter.ReplaceAwaiterByVar;
            this.Emitter.ReplaceAwaiterByVar = false;

            this.DetectReturnType();

            this.Steps = new List<IAsyncStep>();
            this.TryInfos = new List<IAsyncTryInfo>();
            this.JumpLabels = new List<IAsyncJumpLabel>();
            this.WrittenAwaitExpressions = new List<AstNode>();
        }

        protected void DetectReturnType()
        {
            if(this.MethodDeclaration != null)
            {
                this.ReturnType = this.Emitter.Resolver.ResolveNode(this.MethodDeclaration.ReturnType, this.Emitter).Type;
            }
            else if(this.LambdaExpression != null)
            {
                this.ReturnType = ((LambdaResolveResult)this.Emitter.Resolver.ResolveNode(this.LambdaExpression, this.Emitter)).ReturnType;
            }
            else if(this.AnonymousMethodExpression != null)
            {
                this.ReturnType = ((LambdaResolveResult)this.Emitter.Resolver.ResolveNode(this.AnonymousMethodExpression, this.Emitter)).ReturnType;
            }
            else if(this.Accessor != null)
            {
                this.ReturnType = this.Emitter.Resolver.ResolveNode(((EntityDeclaration)this.Accessor.Parent).ReturnType, this.Emitter).Type;
            }

            IsEnumeratorReturn = this.ReturnType.Name == "IEnumerator";
        }

        protected void FinishGeneratorBlock()
        {
            this.Emitter.IsAsync = this.PreviousIsAync;
            this.Emitter.IsYield = this.PreviousIsYield;
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
            if(!skipInit)
            {
                this.InitAsyncBlock();
            }

            this.EmitGeneratorBlock();
            this.FinishGeneratorBlock();
        }

        protected void EmitGeneratorBlock()
        {
            this.BeginBlock();
            var args = this.Parameters;

            if (!IsEnumeratorReturn)
            {
                this.WriteReturn(true);
                this.Write("new ");

                if(this.ReturnType.IsParameterized)
                {
                    this.Write("(Bridge.GeneratorEnumerable$1(" + BridgeTypes.ToJsName(this.ReturnType.TypeArguments[0], this.Emitter) + "))");
                }
                else
                {
                    this.Write("Bridge.GeneratorEnumerable");
                }

                this.WriteOpenParentheses();

                this.Write(JS.Funcs.BRIDGE_BIND + "(this, ");
                this.WriteFunction();
                if (args.Count > 0)
                {
                    this.WriteOpenParentheses();

                    for (int i = 0; i < args.Count; i++)
                    {
                        this.Write(args[i]);

                        if (i < args.Count - 1)
                        {
                            this.Write(", ");
                        }
                    }

                    this.WriteCloseParentheses();
                }
                else
                {
                    this.WriteOpenCloseParentheses(true);
                }

                this.WriteSpace();

                this.BeginBlock();
            }

            this.WriteVar(true);
            this.Write(JS.Vars.ASYNC_STEP + " = 0");
            this.Emitter.Comma = true;
            this.Indent();

            // This is required to add async variables into Emitter.AsyncVariables and emit them prior to body
            IWriterInfo writerInfo = this.SaveWriter();
            StringBuilder body = this.NewWriter();
            Emitter.ResetLevel(writerInfo.Level - 1);
            this.EmitGeneratorBody();
            this.RestoreWriter(writerInfo);

            foreach (var localVar in this.Emitter.AsyncVariables)
            {
                this.EnsureComma(true);
                this.Write(localVar);
                this.Emitter.Comma = true;
            }

            this.Emitter.Comma = false;
            this.WriteSemiColon();
            this.Outdent();
            this.WriteNewLine();
            this.WriteNewLine();

            this.WriteVar(true);
            this.Write(JS.Vars.ENUMERATOR + " = new ");

            if(this.ReturnType.IsParameterized)
            {
                this.Write("(" + JS.Types.Bridge.Generator.NAME_GENERIC +"(" + BridgeTypes.ToJsName(this.ReturnType.TypeArguments[0], this.Emitter) + "))");
            }
            else
            {
                this.Write(JS.Types.Bridge.Generator.NAME);
            }

            this.WriteOpenParentheses();
            this.Write(JS.Funcs.BRIDGE_BIND + "(this, ");
            this.WriteFunction();
            this.WriteOpenCloseParentheses(true);

            this.Write(body);

            this.WriteCloseParentheses();
            this.EmitFinallyHandler();
            this.WriteCloseParentheses();
            this.WriteSemiColon();
            this.WriteNewLine();

            this.WriteReturn(true);
            this.Write(JS.Vars.ENUMERATOR);
            this.WriteSemiColon();
            this.WriteNewLine();

            if(!IsEnumeratorReturn)
            {
                this.EndBlock();
                if (args.Count > 0)
                {
                    this.Write(", arguments");
                }
                this.WriteCloseParentheses();
                this.WriteCloseParentheses();
                this.WriteSemiColon();
                this.WriteNewLine();
            }

            this.EndBlock();
        }

        protected void EmitGeneratorBody()
        {
            this.BeginBlock();

            var asyncTryVisitor = new AsyncTryVisitor();
            this.Node.AcceptChildren(asyncTryVisitor);
            var needTry = true;

            this.Emitter.AsyncVariables.Add(JS.Vars.ASYNC_JUMP);
            if (needTry)
            {
                this.Emitter.AsyncVariables.Add(JS.Vars.ASYNC_RETURN_VALUE);

                this.WriteTry();
                this.BeginBlock();
            }

            this.WriteFor();
            this.Write("(;;) ");
            this.BeginBlock();

            this.WriteSwitch();
            this.Write("(" + JS.Vars.ASYNC_STEP + ") ");
            this.BeginBlock();

            this.Step = 0;
            var writer = this.SaveWriter();
            this.AddAsyncStep();

            this.Body.AcceptVisitor(this.Emitter);

            this.RestoreWriter(writer);

            this.InjectSteps();

            this.WriteNewLine();
            this.EndBlock();

            this.WriteNewLine();
            this.EndBlock();

            if(needTry)
            {
                if(!this.Emitter.Locals.ContainsKey(JS.Vars.ASYNC_E))
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

        protected void InjectCatchHandlers()
        {
            var infos = this.TryInfos;

            foreach(var info in infos)
            {
                if(info.CatchBlocks.Count > 0)
                {
                    this.WriteIf();
                    this.WriteOpenParentheses(true);
                    this.Write(string.Format(JS.Vars.ASYNC_STEP + " >= {0} && " + JS.Vars.ASYNC_STEP + " <= {1}", info.StartStep, info.EndStep));
                    this.WriteCloseParentheses(true);
                    this.BeginBlock();
                    var firstClause = true;

                    for(int i = 0; i < info.CatchBlocks.Count; i++)
                    {
                        var clause = info.CatchBlocks[i];
                        var varName = clause.Item1;
                        var exceptionType = clause.Item2;
                        var step = clause.Item3;
                        var isBaseException = exceptionType == JS.Types.System.Exception.NAME;

                        if(info.CatchBlocks.Count == 1 && isBaseException)
                        {
                            if(!string.IsNullOrEmpty(varName))
                            {
                                this.Write(varName + " = " + JS.Vars.ASYNC_E + ";");
                                this.WriteNewLine();
                            }

                            this.Write(JS.Vars.ASYNC_STEP + " = " + step + ";");

                            this.WriteNewLine();
                            this.Write(JS.Vars.ENUMERATOR + "." + JS.Funcs.ASYNC_YIELD_BODY + "();");
                            this.WriteNewLine();
                            this.Write("return;");
                        }
                        else
                        {
                            if(!firstClause)
                            {
                                this.WriteSpace();
                                this.WriteElse();
                            }

                            if(!isBaseException)
                            {
                                this.WriteIf();
                                this.WriteOpenParentheses();
                                this.Write(JS.Types.Bridge.IS + "(" + JS.Vars.ASYNC_E + ", " + exceptionType + ")");
                                this.WriteCloseParentheses();
                                this.WriteSpace();
                            }

                            firstClause = false;

                            this.BeginBlock();

                            if(!string.IsNullOrEmpty(varName))
                            {
                                this.Write(varName + " = " + JS.Vars.ASYNC_E + ";");
                                this.WriteNewLine();
                            }

                            this.Write(JS.Vars.ASYNC_STEP + " = " + step + ";");

                            this.WriteNewLine();
                            this.Write(JS.Vars.ENUMERATOR + "." + JS.Funcs.ASYNC_YIELD_BODY + "();");
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

                if(info.FinallyStep > 0)
                {
                    if(!this.Emitter.Locals.ContainsKey(JS.Vars.ASYNC_E))
                    {
                        this.AddLocal(JS.Vars.ASYNC_E, null, AstType.Null);
                    }

                    this.WriteIf();
                    this.WriteOpenParentheses();
                    this.Write(string.Format(JS.Vars.ASYNC_STEP + " >= {0} && " + JS.Vars.ASYNC_STEP + " <= {1}", info.StartStep, info.CatchBlocks.Count > 0 ? info.CatchBlocks.Last().Item4 : info.EndStep));
                    this.WriteCloseParentheses();
                    this.BeginBlock();

                    //this.Write(Variables.E + " = " + Variables.ASYNC_E + ";");
                    this.WriteNewLine();
                    this.Write(JS.Vars.ASYNC_STEP + " = " + info.FinallyStep + ";");

                    this.WriteNewLine();
                    this.Write(JS.Vars.ENUMERATOR + "." + JS.Funcs.ASYNC_YIELD_BODY + "();");
                    this.WriteNewLine();
                    this.Write("return;");

                    this.WriteNewLine();
                    this.EndBlock();
                    this.WriteNewLine();
                }
            }

            this.Write("throw " + JS.Vars.ASYNC_E + ";");
        }

        protected bool EmitFinallyHandler()
        {
            var infos = this.TryInfos;
            bool needHeader = true;

            foreach (var info in infos)
            {
                if (info.FinallyStep > 0)
                {
                    if (!this.Emitter.Locals.ContainsKey(JS.Vars.ASYNC_E))
                    {
                        this.AddLocal(JS.Vars.ASYNC_E, null, AstType.Null);
                    }

                    if (needHeader)
                    {
                        this.Write(", function () ");
                        this.BeginBlock();
                        needHeader = false;
                    }

                    this.WriteIf();
                    this.WriteOpenParentheses();
                    this.Write(string.Format(JS.Vars.ASYNC_STEP + " >= {0} && " + JS.Vars.ASYNC_STEP + " <= {1}", info.StartStep, info.CatchBlocks.Count > 0 ? info.CatchBlocks.Last().Item4 : info.EndStep));
                    this.WriteCloseParentheses();
                    this.BeginBlock();

                    this.WriteNewLine();
                    this.Write(JS.Vars.ASYNC_STEP + " = " + info.FinallyStep + ";");

                    this.WriteNewLine();
                    this.Write(JS.Vars.ENUMERATOR + "." + JS.Funcs.ASYNC_YIELD_BODY + "();");
                    this.WriteNewLine();
                    this.Write("return;");

                    this.WriteNewLine();
                    this.EndBlock();
                    this.WriteNewLine();
                }
            }

            if (!needHeader)
            {
                this.WriteNewLine();
                this.EndBlock();
            }

            return !needHeader;
        }

        protected void InjectSteps()
        {
            foreach(var label in this.JumpLabels)
            {
                var tostep = this.Steps.First(s => s.Node == label.Node);
                label.Output.Replace(Helpers.PrefixDollar("{", label.Node.GetHashCode(), "}"), tostep.Step.ToString());
            }

            for(int i = 0; i < this.Steps.Count; i++)
            {
                var step = this.Steps[i];

                if(i != 0)
                {
                    this.WriteNewLine();
                }

                var output = step.Output.ToString();
                var cleanOutput = this.RemoveTokens(output);

                this.Write("case " + i + ": ");

                this.BeginBlock();

                bool addNewLine = false;

                if(!string.IsNullOrWhiteSpace(cleanOutput))
                {
                    if(addNewLine)
                    {
                        this.WriteNewLine();
                    }

                    this.Write(this.WriteIndentToString(output.TrimEnd()));
                }

                if(!this.IsOnlyWhitespaceOnPenultimateLine(false))
                {
                    addNewLine = true;
                }

                if(step.JumpToStep > -1 && !AbstractEmitterBlock.IsJumpStatementLast(cleanOutput))
                {
                    if(addNewLine)
                    {
                        this.WriteNewLine();
                    }

                    this.Write(JS.Vars.ASYNC_STEP + " = " + step.JumpToStep + ";");
                    this.WriteNewLine();
                    this.Write("continue;");
                }
                else if(step.JumpToNode != null && !AbstractEmitterBlock.IsJumpStatementLast(cleanOutput))
                {
                    var tostep = this.Steps.First(s => s.Node == step.JumpToNode);

                    if(addNewLine)
                    {
                        this.WriteNewLine();
                    }

                    this.Write(JS.Vars.ASYNC_STEP + " = " + tostep.Step + ";");
                    this.WriteNewLine();
                    this.Write("continue;");
                }
                else if(i == (this.Steps.Count - 1) && !AbstractEmitterBlock.IsReturnLast(cleanOutput))
                {
                    if(addNewLine)
                    {
                        this.WriteNewLine();
                    }
                }

                this.WriteNewLine();
                this.EndBlock();
            }

            this.WriteNewLine();
            this.Write("default: ");
            this.BeginBlock();

            this.Write("return false;");
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
            if(child is IfElseStatement)
            {
                return false;
            }
            else
            {
                foreach(var awaiter in this.AwaitExpressions)
                {
                    if(child.IsInside(awaiter.StartLocation))
                    {
                        return true;
                    }
                }
            }

            return false;
        }
    }

    public class GeneratorStep : IAsyncStep
    {
        public GeneratorStep(IEmitter emitter, int step)
        {
            this.Step = step;
            this.Emitter = emitter;
            this.JumpToStep = -1;

            if(this.Emitter.LastSavedWriter != null)
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

    public class GeneratorJumpLabel : IAsyncJumpLabel
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