using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using Object.Net.Utilities;
using System.Linq;

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
                    this.Write(field.GetName(this.Emitter));

                    var initializer = field.Initializer;
                    if (initializer != null && initializer is PrimitiveExpression)
                    {
                        this.Write(" = ");
                        this.Write(((PrimitiveExpression)initializer).Value);
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