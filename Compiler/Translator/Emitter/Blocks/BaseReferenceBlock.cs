using System.Linq;
using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;

namespace Bridge.Translator
{
    public class BaseReferenceBlock : ConversionBlock
    {
        public BaseReferenceBlock(IEmitter emitter, BaseReferenceExpression baseReferenceExpression)
            : base(emitter, baseReferenceExpression)
        {
            this.Emitter = emitter;
            this.BaseReferenceExpression = baseReferenceExpression;
        }

        public BaseReferenceExpression BaseReferenceExpression
        {
            get;
            set;
        }

        protected override Expression GetExpression()
        {
            return this.BaseReferenceExpression;
        }

        protected override void EmitConversionExpression()
        {
            var proto = false;
            var isProperty = false;
            IMember member = null;
            if (this.BaseReferenceExpression.Parent != null)
            {
                var rr = this.Emitter.Resolver.ResolveNode(this.BaseReferenceExpression.Parent, this.Emitter) as MemberResolveResult;

                if (rr != null)
                {
                    if (rr.IsVirtualCall)
                    {
                        proto = true;
                    }
                    else
                    {
                        var method = rr.Member as IMethod;
                        if (method != null && (method.IsVirtual || method.IsOverride))
                        {
                            proto = true;
                        }
                        else
                        {
                            var prop = rr.Member as IProperty;

                            if (prop != null && (prop.IsVirtual || prop.IsOverride))
                            {
                                proto = true;
                            }
                        }
                    }

                    var iproperty = rr.Member as IProperty;
                    if (iproperty != null && !iproperty.IsIndexer)
                    {
                        isProperty = true;
                        member = rr.Member;
                    }
                }
            }

            if (proto)
            {
                if (isProperty)
                {
                    if (this.Emitter.GetInline(member) == null)
                    {
                        var name = OverloadsCollection.Create(this.Emitter, member).GetOverloadName(true);
                        this.Write(JS.Types.Bridge.ENSURE_BASE_PROPERTY + "(this, " + this.Emitter.ToJavaScript(name) + ")");
                    }
                    else
                    {
                        this.WriteThis();
                    }
                }
                else
                {
                    var baseType = this.Emitter.GetBaseTypeDefinition();

                    if (this.Emitter.TypeInfo.GetBaseTypes(this.Emitter).Any())
                    {
                        this.Write(BridgeTypes.ToJsName(this.Emitter.TypeInfo.GetBaseClass(this.Emitter), this.Emitter), "." + JS.Fields.PROTOTYPE);
                    }
                    else
                    {
                        this.Write(BridgeTypes.ToJsName(baseType, this.Emitter), "." + JS.Fields.PROTOTYPE);
                    }
                }
            }
            else
            {
                this.WriteThis();
            }
        }
    }
}