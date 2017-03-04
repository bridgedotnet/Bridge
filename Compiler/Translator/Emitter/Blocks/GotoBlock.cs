using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.TypeSystem;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.Translator
{
    public class GotoBlock : AbstractEmitterBlock
    {
        public GotoBlock(IEmitter emitter, GotoCaseStatement gotoCaseStatement) : base(emitter, gotoCaseStatement)
        {
            this.GotoCaseStatement = gotoCaseStatement;
        }

        public GotoBlock(IEmitter emitter, GotoDefaultStatement gotoDefaultStatement) : base(emitter, gotoDefaultStatement)
        {
            this.GotoDefaultStatement = gotoDefaultStatement;
        }

        public GotoBlock(IEmitter emitter, GotoStatement gotoStatement) : base(emitter, gotoStatement)
        {
            this.GotoStatement = gotoStatement;
        }

        public GotoCaseStatement GotoCaseStatement
        {
            get; set;
        }

        public GotoDefaultStatement GotoDefaultStatement
        {
            get; set;
        }

        public GotoStatement GotoStatement
        {
            get; set;
        }

        protected override void DoEmit()
        {
            AstNode node = null;
            if (this.GotoStatement != null)
            {
                node = this.Emitter.AsyncBlock.AwaitExpressions.First(expr => expr is LabelStatement && ((LabelStatement)expr).Label == this.GotoStatement.Label);
            }
            else if (this.GotoCaseStatement != null)
            {
                var switchStatement = this.GotoCaseStatement.GetParent<SwitchStatement>();
                var rr = this.Emitter.Resolver.ResolveNode(this.GotoCaseStatement.LabelExpression, this.Emitter);

                node = switchStatement.SwitchSections.First(ss => ss.CaseLabels.Any(cl =>
                {
                    if (cl.Expression.IsNull)
                    {
                        return false;
                    }

                    var caseLabel_rr = this.Emitter.Resolver.ResolveNode(cl.Expression, this.Emitter);

                    if (caseLabel_rr.ConstantValue is string)
                    {
                        return caseLabel_rr.ConstantValue.Equals(rr.ConstantValue);
                    }

                    return System.Convert.ToInt64(caseLabel_rr.ConstantValue) == System.Convert.ToInt64(rr.ConstantValue);
                }));
            }
            else if (this.GotoDefaultStatement != null)
            {
                var switchStatement = this.GotoDefaultStatement.GetParent<SwitchStatement>();
                node = switchStatement.SwitchSections.First(ss => ss.CaseLabels.Any(cl => cl.Expression.IsNull));
            }

            var hashcode = node.GetHashCode();
            this.Emitter.AsyncBlock.JumpLabels.Add(new AsyncJumpLabel
            {
                Node = node,
                Output = this.Emitter.Output
            });
            this.Write(JS.Vars.ASYNC_STEP + " = " + Helpers.PrefixDollar("{", hashcode, "};"));
            this.WriteNewLine();
            this.Write("continue;");
        }
    }
}