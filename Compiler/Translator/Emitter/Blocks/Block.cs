using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.TypeSystem;
using System.Linq;
using ICSharpCode.NRefactory.CSharp.Analysis;

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

        public int BeginPosition
        {
            get;
            set;
        }

        public int SignaturePosition
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

            var ifStatement = parent as IfElseStatement;
            if (ifStatement != null && ifStatement.FalseStatement != null && !ifStatement.FalseStatement.IsNull && ifStatement.FalseStatement != block)
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

        private bool? isMethodBlock;
        public bool IsMethodBlock
        {
            get
            {
                if (!this.isMethodBlock.HasValue)
                {
                    this.isMethodBlock = this.BlockStatement.Parent is MethodDeclaration ||
                                         this.BlockStatement.Parent is AnonymousMethodExpression ||
                                         this.BlockStatement.Parent is LambdaExpression ||
                                         this.BlockStatement.Parent is ConstructorDeclaration ||
                                         this.BlockStatement.Parent is OperatorDeclaration ||
                                         this.BlockStatement.Parent is Accessor;
                }

                return this.isMethodBlock.Value;
            }
        }

        public void DoEmitBlock()
        {
            if (this.BlockStatement.Parent is MethodDeclaration)
            {
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
                var methodDeclaration = (AnonymousMethodExpression)this.BlockStatement.Parent;
                var rr = this.Emitter.Resolver.ResolveNode(methodDeclaration, this.Emitter);
                this.ReturnType = rr.Type;
                this.ConvertParamsToReferences(methodDeclaration.Parameters);
            }
            else if (this.BlockStatement.Parent is LambdaExpression)
            {
                var methodDeclaration = (LambdaExpression)this.BlockStatement.Parent;
                var rr = this.Emitter.Resolver.ResolveNode(methodDeclaration, this.Emitter);
                this.ReturnType = rr.Type;
                this.ConvertParamsToReferences(methodDeclaration.Parameters);
            }
            else if (this.BlockStatement.Parent is ConstructorDeclaration)
            {
                this.ConvertParamsToReferences(((ConstructorDeclaration)this.BlockStatement.Parent).Parameters);
            }
            else if (this.BlockStatement.Parent is OperatorDeclaration)
            {
                this.ConvertParamsToReferences(((OperatorDeclaration)this.BlockStatement.Parent).Parameters);
            }
            else if (this.BlockStatement.Parent is Accessor)
            {
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

            var ra = ReachabilityAnalysis.Create(this.BlockStatement, this.Emitter.Resolver.Resolver);
            this.BlockStatement.Children.ToList().ForEach(child =>
            {
                var statement = child as Statement;
                if (statement != null && !ra.IsReachable(statement))
                {
                    return;
                }

                child.AcceptVisitor(this.Emitter);
            });
        }

        public void EndEmitBlock()
        {
            if (this.IsMethodBlock)
            {
                this.Emitter.ReturnType = this.OldReturnType;
            }

            if (!this.NoBraces && (!this.Emitter.IsAsync || (!this.AsyncNoBraces && this.BlockStatement.Parent != this.Emitter.AsyncBlock.Node)))
            {
                if (this.IsMethodBlock && this.BeginPosition == this.Emitter.Output.Length)
                {
                    this.EndBlock();
                    this.Emitter.Output.Length = this.SignaturePosition;
                    this.WriteOpenCloseBrace();
                }
                else
                {
                    this.EndBlock();
                }
            }

            if (this.AddEndBlock)
            {
                this.WriteNewLine();
                this.EndBlock();
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

            if (!this.NoBraces && (!this.Emitter.IsAsync || (!this.AsyncNoBraces && this.BlockStatement.Parent != this.Emitter.AsyncBlock.Node)))
            {
                this.SignaturePosition = this.Emitter.Output.Length;
                this.BeginBlock();
            }

            this.BeginPosition = this.Emitter.Output.Length;
        }
    }
}