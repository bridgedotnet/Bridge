using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using System.Collections.Generic;
using System.Linq;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using Object.Net.Utilities;

namespace Bridge.Translator
{
    public class LambdaBlock : AbstractMethodBlock
    {
        public LambdaBlock(IEmitter emitter, LambdaExpression lambdaExpression)
            : this(emitter, lambdaExpression.Parameters, lambdaExpression.Body, lambdaExpression, lambdaExpression.IsAsync)
        {
        }

        public LambdaBlock(IEmitter emitter, AnonymousMethodExpression anonymousMethodExpression)
            : this(emitter, anonymousMethodExpression.Parameters, anonymousMethodExpression.Body, anonymousMethodExpression, anonymousMethodExpression.IsAsync)
        {
        }

        public LambdaBlock(IEmitter emitter, IEnumerable<ParameterDeclaration> parameters, AstNode body, AstNode context, bool isAsync)
            : base(emitter, context)
        {
            this.Emitter = emitter;
            this.Parameters = parameters;
            this.Body = body;
            this.Context = context;
            this.IsAsync = isAsync;
        }

        public bool IsAsync
        {
            get;
            set;
        }

        public IEnumerable<ParameterDeclaration> Parameters
        {
            get;
            set;
        }

        public AstNode Body
        {
            get;
            set;
        }

        public AstNode Context
        {
            get;
            set;
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

        public bool ReplaceAwaiterByVar
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            var oldParentVariables = this.Emitter.ParentTempVariables;
            if (this.Emitter.ParentTempVariables == null)
            {
                this.Emitter.ParentTempVariables = new Dictionary<string,bool>(this.Emitter.TempVariables);
            }
            else
            {
                this.Emitter.ParentTempVariables = new Dictionary<string, bool>(this.Emitter.ParentTempVariables);
                foreach (var item in this.Emitter.TempVariables)
                {
                    this.Emitter.ParentTempVariables.Add(item.Key, item.Value);
                }
            }

            var oldVars = this.Emitter.TempVariables;
            this.Emitter.TempVariables = new Dictionary<string, bool>();
            this.PreviousIsAync = this.Emitter.IsAsync;
            this.Emitter.IsAsync = this.IsAsync;

            this.PreviousAsyncVariables = this.Emitter.AsyncVariables;
            this.Emitter.AsyncVariables = null;

            this.PreviousAsyncBlock = this.Emitter.AsyncBlock;
            this.Emitter.AsyncBlock = null;

            this.ReplaceAwaiterByVar = this.Emitter.ReplaceAwaiterByVar;
            this.Emitter.ReplaceAwaiterByVar = false;

            this.EmitLambda(this.Parameters, this.Body, this.Context);

            this.Emitter.IsAsync = this.PreviousIsAync;
            this.Emitter.AsyncVariables = this.PreviousAsyncVariables;
            this.Emitter.AsyncBlock = this.PreviousAsyncBlock;
            this.Emitter.ReplaceAwaiterByVar = this.ReplaceAwaiterByVar;
            this.Emitter.TempVariables = oldVars;
            this.Emitter.ParentTempVariables = oldParentVariables;
        }

        protected virtual void EmitLambda(IEnumerable<ParameterDeclaration> parameters, AstNode body, AstNode context)
        {
            var analyzer = new CaptureAnalyzer(this.Emitter.Resolver.Resolver);
            analyzer.Analyze(this.Body, this.Parameters.Select(p => p.Name));

            var oldLevel = this.Emitter.Level;
            if (analyzer.UsedVariables.Count == 0)
            {
                this.Emitter.Level = 2;
            }

            AsyncBlock asyncBlock = null;
            this.PushLocals();

            if (this.IsAsync)
            {
                if (context is LambdaExpression)
                {
                    asyncBlock = new AsyncBlock(this.Emitter, (LambdaExpression)context);
                }
                else
                {
                    asyncBlock = new AsyncBlock(this.Emitter, (AnonymousMethodExpression)context);
                }

                asyncBlock.InitAsyncBlock();
            }

            var prevMap = this.BuildLocalsMap();
            var prevNamesMap = this.BuildLocalsNamesMap();
            this.AddLocals(parameters, body);

            bool block = body is BlockStatement;
            this.Write("");

            var savedPos = this.Emitter.Output.Length;
            var savedThisCount = this.Emitter.ThisRefCounter;

            this.WriteFunction();
            this.EmitMethodParameters(parameters, null, context);
            this.WriteSpace();

            int pos = 0;
            if (!block && !this.IsAsync)
            {
                this.BeginBlock();
                pos = this.Emitter.Output.Length;
            }

            bool isSimpleLambda = body.Parent is LambdaExpression && !block && !this.IsAsync;

            if (isSimpleLambda)
            {
                this.ConvertParamsToReferences(parameters);
                var rr = this.Emitter.Resolver.ResolveNode(this.Context, this.Emitter) as LambdaResolveResult;

                if (rr == null || rr.ReturnType.Kind != TypeKind.Void)
                {
                    this.WriteReturn(true);    
                }
            }

            if (this.IsAsync)
            {
                asyncBlock.Emit(true);
            }
            else
            {
                body.AcceptVisitor(this.Emitter);
            }

            if (isSimpleLambda)
            {
                this.WriteSemiColon();
            }

            if (!block && !this.IsAsync)
            {
                this.WriteNewLine();
                this.EndBlock();
            }

            if (!block && !this.IsAsync)
            {
                this.EmitTempVars(pos);
            }

            if (analyzer.UsedVariables.Count == 0)
            {
                var name = "$f" + (this.Emitter.NamedFunctions.Count + 1);
                var code = this.Emitter.Output.ToString().Substring(savedPos);
                var pair = this.Emitter.NamedFunctions.FirstOrDefault(p => p.Value == code);

                if (pair.Key != null && pair.Value != null)
                {
                    name = pair.Key;
                }
                else
                {
                    this.Emitter.NamedFunctions.Add(name, code);    
                }
                
                this.Emitter.Output.Remove(savedPos, this.Emitter.Output.Length - savedPos);
                this.Emitter.Output.Insert(savedPos, BridgeTypes.ToJsName(this.Emitter.TypeInfo.Type, this.Emitter) + "." + name);
                this.Emitter.Level = oldLevel;
            }

            if (this.Emitter.ThisRefCounter > savedThisCount)
            {
                this.Emitter.Output.Insert(savedPos, Bridge.Translator.Emitter.ROOT + "." + Bridge.Translator.Emitter.DELEGATE_BIND + "(this, ");
                this.WriteCloseParentheses();
            }

            this.PopLocals();
            this.ClearLocalsMap(prevMap);
            this.ClearLocalsNamesMap(prevNamesMap);
        }
    }
}
