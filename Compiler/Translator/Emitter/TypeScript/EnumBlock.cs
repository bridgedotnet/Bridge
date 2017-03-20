using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using Object.Net.Utilities;
using System.Linq;
using ICSharpCode.NRefactory.Semantics;

namespace Bridge.Translator.TypeScript
{
    public class EnumBlock : TypeScriptBlock
    {
        public EnumBlock(IEmitter emitter, ITypeInfo typeInfo)
            : base(emitter, typeInfo.TypeDeclaration)
        {
            this.TypeInfo = typeInfo;
        }

        public ITypeInfo TypeInfo
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            var typeDef = this.Emitter.GetTypeDefinition();
            string name = this.Emitter.Validator.GetCustomTypeName(typeDef, this.Emitter);

            if (name.IsEmpty())
            {
                name = BridgeTypes.ToTypeScriptName(this.TypeInfo.Type, this.Emitter, false, true);
            }

            this.Write("export enum ");
            this.Write(name);

            this.WriteSpace();
            this.BeginBlock();

            if (this.TypeInfo.StaticConfig.Fields.Count > 0)
            {
                var lastField = this.TypeInfo.StaticConfig.Fields.Last();
                foreach (var field in this.TypeInfo.StaticConfig.Fields)
                {
                    var memeber_rr = (MemberResolveResult)this.Emitter.Resolver.ResolveNode(field.Entity, this.Emitter);
                    var mode = this.Emitter.Validator.EnumEmitMode(memeber_rr.Member.DeclaringTypeDefinition);

                    if (mode < 6)
                    {
                        this.Write(field.Name);
                    }
                    else
                    {
                        this.Write(field.GetName(this.Emitter, true));
                    }

                    var initializer = field.Initializer;
                    if (initializer != null && initializer is PrimitiveExpression)
                    {
                        this.Write(" = ");
                        if (this.Emitter.Validator.IsStringNameEnum(this.TypeInfo.Type))
                        {
                            this.WriteScript(((PrimitiveExpression)initializer).Value);
                        }
                        else
                        {
                            this.Write(((PrimitiveExpression)initializer).Value);
                        }
                        
                    }

                    if (field != lastField)
                    {
                        this.Write(",");
                    }

                    this.WriteNewLine();
                }
            }

            this.EndBlock();
        }
    }
}