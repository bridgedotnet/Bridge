using Bridge.Contract;
using Bridge.Contract.Constants;

using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.TypeSystem;

namespace Bridge.Translator
{
    public class DefaultValueBlock : AbstractEmitterBlock
    {
        public DefaultValueBlock(IEmitter emitter, DefaultValueExpression defaultValueExpression)
            : base(emitter, defaultValueExpression)
        {
            this.Emitter = emitter;
            this.DefaultValueExpression = defaultValueExpression;
        }

        public DefaultValueExpression DefaultValueExpression
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            var resolveResult = this.Emitter.Resolver.ResolveNode(this.DefaultValueExpression.Type, this.Emitter);

            if ((!resolveResult.IsError && resolveResult.Type.IsReferenceType.HasValue && resolveResult.Type.IsReferenceType.Value) || resolveResult.Type.IsKnownType(KnownTypeCode.NullableOfT))
            {
                this.Write("null");
            }
            else
            {
                this.Write(JS.Funcs.BRIDGE_GETDEFAULTVALUE + "(" + BridgeTypes.ToJsName(DefaultValueExpression.Type, this.Emitter) + ")");
            }
        }
    }
}
