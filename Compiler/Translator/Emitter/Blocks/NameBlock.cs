using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;

namespace Bridge.Translator
{
    public class NameBlock : AbstractEmitterBlock
    {
        public NameBlock(IEmitter emitter, NamedExpression namedExpression)
            : this(emitter, namedExpression.Name, namedExpression, namedExpression.Expression, null)
        {
        }

        public NameBlock(IEmitter emitter, string name, Expression namedExpression, Expression expression, bool? isSet)
            : base(emitter, null)
        {
            this.Emitter = emitter;
            this.NamedExpression = namedExpression;
            this.Expression = expression;
            this.Name = name;
            this.IsSet = isSet;

            this.Emitter.Translator.EmitNode = namedExpression ?? expression;
        }

        public bool? IsSet { get; set; }

        public string Name
        {
            get;
            set;
        }

        public Expression Expression
        {
            get;
            set;
        }

        public Expression NamedExpression
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            this.EmitNameExpression(this.Name, this.NamedExpression, this.Expression);
        }

        protected virtual void EmitNameExpression(string name, Expression namedExpression, Expression expression)
        {
            var resolveResult = this.Emitter.Resolver.ResolveNode(namedExpression, this.Emitter);

            if (resolveResult is MemberResolveResult)
            {
                var member = ((MemberResolveResult)resolveResult).Member;
                name = this.Emitter.GetEntityName(member);

                bool isSet = this.IsSet ?? !(expression is ArrayInitializerExpression);
                if (member is IProperty)
                {
                    this.Write(Helpers.GetPropertyRef(member, this.Emitter, isSet));
                }
                else if (member is IEvent)
                {
                    this.Write(Helpers.GetEventRef(member, this.Emitter, !isSet));
                }
                else
                {
                    this.Write(name);
                }
            }
            else
            {
                this.Write(name);
            }

            this.WriteColon();
            expression.AcceptVisitor(this.Emitter);
        }
    }
}