using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.TypeSystem;
using System.Linq;

namespace Bridge.Translator
{
    public class Block : AbstractEmitterBlock
    {
        public Block(IEmitter emitter, BlockStatement blockStatement)
            : base(emitter, blockStatement)
        {
            this.Emitter = emitter;
            this.BlockStatement = blockStatement;

            if (blockStatement.Parent is BlockStatement && this.Emitter.IsAsync)
            {
                this.Emitter.IgnoreBlock = blockStatement;
            }

            if (this.Emitter.IgnoreBlock == blockStatement)
            {
                this.AsyncNoBraces = true;
            }

            if (this.Emitter.NoBraceBlock == blockStatement)
            {
                this.NoBraces = true;
            }
        }

        public BlockStatement BlockStatement
        {
            get;
            set;
        }

        protected bool AddEndBlock
        {
            get;
            set;
        }

        public bool AsyncNoBraces
        {
            get;
            set;
        }

        public bool NoBraces
        {
            get;
            set;
        }

        public bool? WrapByFn
        {
            get;
            set;
        }

        public bool? HandleContinue
        {
            get;
            set;
        }

        public bool? HandleBreak
        {
            get;
            set;
        }

        public bool? HandleReturn
        {
            get;
            set;
        }

        public int BeginPosition
        {
            get;
            set;
        }

        public bool IsMethodBlock
        {
            get;
            set;
        }

        public bool IsYield
        {
            get;
            set;
        }

        public IType ReturnType
        {
            get;
            set;
        }

        private IType OldReturnType
        {
            get;
            set;
        }

        public string LoopVar
        {
            get;
            set;
        }

        public bool? OldReplaceJump
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            if ((!this.WrapByFn.HasValue || this.WrapByFn.Value) && (this.BlockStatement.Parent is ForStatement ||
                     this.BlockStatement.Parent is ForeachStatement ||
                     this.BlockStatement.Parent is WhileStatement ||
                     this.BlockStatement.Parent is DoWhileStatement))
            {
                var visitor = new LambdaVisitor(true, this.Emitter);
                this.BlockStatement.AcceptVisitor(visitor);

                this.WrapByFn = visitor.LambdaExpression.Count > 0;

                if (this.WrapByFn.Value)
                {
                    var jumpVisitor = new ContinueBreakVisitor(false);
                    this.BlockStatement.AcceptVisitor(jumpVisitor);
                    this.HandleContinue = jumpVisitor.Continue.Count > 0;
                    this.HandleBreak = jumpVisitor.Break.Count > 0;

                    jumpVisitor = new ContinueBreakVisitor(true);
                    this.BlockStatement.AcceptVisitor(jumpVisitor);
                    this.HandleReturn = jumpVisitor.Return.Count > 0;
                }

                this.OldReplaceJump = this.Emitter.ReplaceJump;
                this.Emitter.ReplaceJump = (this.HandleContinue.HasValue && this.HandleContinue.Value) ||
                                           (this.HandleBreak.HasValue && this.HandleBreak.Value) ||
                                           (this.HandleReturn.HasValue && this.HandleReturn.Value);
            }

            this.EmitBlock();
        }

        protected virtual bool KeepLineAfterBlock(BlockStatement block)
        {
            var parent = block.Parent;

            if (this.AsyncNoBraces || this.NoBraces)
            {
                return true;
            }

            if (parent is AnonymousMethodExpression)
            {
                return true;
            }

            if (parent is LambdaExpression)
            {
                return true;
            }

            if (parent is MethodDeclaration)
            {
                return true;
            }

            if (parent is OperatorDeclaration)
            {
                return true;
            }

            if (parent is Accessor && (parent.Parent is PropertyDeclaration || parent.Parent is CustomEventDeclaration || parent.Parent is IndexerDeclaration))
            {
                return true;
            }

            var loop = parent as DoWhileStatement;

            if (loop != null)
            {
                return true;
            }

            return false;
        }

        public void EmitBlock()
        {
            this.BeginEmitBlock();
            this.DoEmitBlock();
            this.EndEmitBlock();
        }

        public void DoEmitBlock()
        {
            if (this.BlockStatement.Parent is MethodDeclaration)
            {
                this.IsMethodBlock = true;
                var methodDeclaration = (MethodDeclaration)this.BlockStatement.Parent;
                if (!methodDeclaration.ReturnType.IsNull)
                {
                    var rr = this.Emitter.Resolver.ResolveNode(methodDeclaration.ReturnType, this.Emitter);
                    this.ReturnType = rr.Type;
                }
                this.ConvertParamsToReferences(methodDeclaration.Parameters);
            }
            else if (this.BlockStatement.Parent is AnonymousMethodExpression)
            {
                this.IsMethodBlock = true;
                var methodDeclaration = (AnonymousMethodExpression)this.BlockStatement.Parent;
                var rr = this.Emitter.Resolver.ResolveNode(methodDeclaration, this.Emitter);
                this.ReturnType = rr.Type;
                this.ConvertParamsToReferences(methodDeclaration.Parameters);
            }
            else if (this.BlockStatement.Parent is LambdaExpression)
            {
                this.IsMethodBlock = true;
                var methodDeclaration = (LambdaExpression)this.BlockStatement.Parent;
                var rr = this.Emitter.Resolver.ResolveNode(methodDeclaration, this.Emitter);
                this.ReturnType = rr.Type;
                this.ConvertParamsToReferences(methodDeclaration.Parameters);
            }
            else if (this.BlockStatement.Parent is ConstructorDeclaration)
            {
                this.IsMethodBlock = true;
                this.ConvertParamsToReferences(((ConstructorDeclaration)this.BlockStatement.Parent).Parameters);
            }
            else if (this.BlockStatement.Parent is OperatorDeclaration)
            {
                this.IsMethodBlock = true;
                this.ConvertParamsToReferences(((OperatorDeclaration)this.BlockStatement.Parent).Parameters);
            }
            else if (this.BlockStatement.Parent is Accessor)
            {
                this.IsMethodBlock = true;
                var role = this.BlockStatement.Parent.Role.ToString();

                if (role == "Setter")
                {
                    this.ConvertParamsToReferences(new ParameterDeclaration[] { new ParameterDeclaration { Name = "value" } });
                }
                else if (role == "Getter")
                {
                    var methodDeclaration = (Accessor)this.BlockStatement.Parent;
                    if (!methodDeclaration.ReturnType.IsNull)
                    {
                        var rr = this.Emitter.Resolver.ResolveNode(methodDeclaration.ReturnType, this.Emitter);
                        this.ReturnType = rr.Type;
                    }
                }
            }

            if (this.IsMethodBlock && YieldBlock.HasYield(this.BlockStatement))
            {
                this.IsYield = true;
                YieldBlock.EmitYield(this, this.ReturnType);
            }

            if (this.IsMethodBlock)
            {
                this.OldReturnType = this.Emitter.ReturnType;
                this.Emitter.ReturnType = this.ReturnType;
            }

            if (this.Emitter.BeforeBlock != null)
            {
                this.Emitter.BeforeBlock();
                this.Emitter.BeforeBlock = null;
            }

            this.BlockStatement.Children.ToList().ForEach(child => child.AcceptVisitor(this.Emitter));
        }

        public void EndEmitBlock()
        {
            if (this.IsYield)
            {
                YieldBlock.EmitYieldReturn(this, this.ReturnType);
            }

            if (this.IsMethodBlock)
            {
                this.Emitter.ReturnType = this.OldReturnType;
            }

            if (!this.NoBraces && (!this.Emitter.IsAsync || (!this.AsyncNoBraces && this.BlockStatement.Parent != this.Emitter.AsyncBlock.Node)))
            {
                this.EndBlock();
            }

            if (this.AddEndBlock)
            {
                this.WriteNewLine();
                this.EndBlock();
            }

            if (this.WrapByFn.HasValue && this.WrapByFn.Value)
            {
                var isBlock = (this.HandleContinue.HasValue && this.HandleContinue.Value) ||
                              (this.HandleBreak.HasValue && this.HandleBreak.Value) ||
                              (this.HandleReturn.HasValue && this.HandleReturn.Value);

                if (this.NoBraces)
                {
                    this.Outdent();
                }

                if (this.NoBraces)
                {
                    this.Write("}");
                }

                this.Write(")");
                this.WriteCall("this");

                if (isBlock)
                {
                    this.Write(" || {}");
                }

                this.Write(";");

                if (this.HandleContinue.HasValue && this.HandleContinue.Value)
                {
                    this.WriteNewLine();
                    this.Write("if(" + this.LoopVar + ".jump == 1) continue;");
                }

                if (this.HandleBreak.HasValue && this.HandleBreak.Value)
                {
                    this.WriteNewLine();
                    this.Write("if(" + this.LoopVar + ".jump == 2) break;");
                }

                if (this.HandleReturn.HasValue && this.HandleReturn.Value)
                {
                    this.WriteNewLine();
                    this.Write("if(" + this.LoopVar + ".jump == 3) return ");

                    if (this.OldReplaceJump.HasValue && this.OldReplaceJump.Value && this.Emitter.JumpStatements == null)
                    {
                        this.Write("{jump: 3, v: " + this.LoopVar + ".v};");    
                    }
                    else
                    {
                        this.Write(this.LoopVar + ".v;");    
                    }
                }

                if (!this.NoBraces)
                {
                    this.WriteNewLine();
                    this.EndBlock();
                }

                if (isBlock)
                {
                    this.RemoveTempVar(this.LoopVar);
                }
            }

            if (this.OldReplaceJump.HasValue)
            {
                this.Emitter.ReplaceJump = this.OldReplaceJump.Value;
            }

            if (!this.KeepLineAfterBlock(this.BlockStatement))
            {
                this.WriteNewLine();
            }

            if (this.IsMethodBlock && !this.Emitter.IsAsync)
            {
                this.EmitTempVars(this.BeginPosition);
            }

            this.PopLocals();
        }

        public void BeginEmitBlock()
        {
            this.PushLocals();

            if (this.WrapByFn.HasValue && this.WrapByFn.Value)
            {
                if (!this.NoBraces)
                {
                    this.BeginBlock();
                }

                if ((this.HandleContinue.HasValue && this.HandleContinue.Value) ||
                    (this.HandleBreak.HasValue && this.HandleBreak.Value) ||
                    (this.HandleReturn.HasValue && this.HandleReturn.Value))
                {
                    this.LoopVar = this.GetTempVarName();
                    this.Write("var " + this.LoopVar + " = ");
                }
                else if (!this.NoBraces)
                {
                    //this.Indent();
                }

                this.Write("(function () ");
                this.BeginBlock();
            }
            else if (!this.NoBraces && (!this.Emitter.IsAsync || (!this.AsyncNoBraces && this.BlockStatement.Parent != this.Emitter.AsyncBlock.Node)))
            {
                this.BeginBlock();
            }

            this.BeginPosition = this.Emitter.Output.Length;
        }
    }
}
