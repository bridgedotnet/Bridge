using Bridge.Contract;
using Bridge.Contract.Constants;

using ICSharpCode.NRefactory.CSharp;

namespace Bridge.Translator.TypeScript
{
    public class MemberBlock : AbstractEmitterBlock
    {
        public MemberBlock(IEmitter emitter, ITypeInfo typeInfo, bool staticBlock)
            : base(emitter, typeInfo.TypeDeclaration)
        {
            this.Emitter = emitter;
            this.TypeInfo = typeInfo;
            this.StaticBlock = staticBlock;
        }

        public ITypeInfo TypeInfo
        {
            get;
            set;
        }

        public bool StaticBlock
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            this.EmitFields(this.StaticBlock ? this.TypeInfo.StaticConfig : this.TypeInfo.InstanceConfig);
        }

        protected virtual void EmitFields(TypeConfigInfo info)
        {
            if (info.Fields.Count > 0)
            {
                foreach (var field in info.Fields)
                {
                    if (field.Entity.HasModifier(Modifiers.Public) || this.TypeInfo.IsEnum)
                    {
                        XmlToJsDoc.EmitComment(this, field.Entity);
                        this.Write(field.GetName(this.Emitter));
                        this.WriteColon();
                        string typeName = this.TypeInfo.IsEnum ? "number" : BridgeTypes.ToTypeScriptName(field.Entity.ReturnType, this.Emitter);
                        this.Write(typeName);
                        this.WriteSemiColon();
                        this.WriteNewLine();
                    }
                }
            }

            if (info.Events.Count > 0)
            {
                foreach (var ev in info.Events)
                {
                    if (ev.Entity.HasModifier(Modifiers.Public))
                    {
                        var name = ev.GetName(this.Emitter);
                        name = Helpers.ReplaceFirstDollar(name);

                        this.WriteEvent(ev, Helpers.GetAddOrRemove(true,  name));
                        this.WriteEvent(ev, Helpers.GetAddOrRemove(false, name));
                    }
                }
            }

            if (info.Properties.Count > 0)
            {
                foreach (var prop in info.Properties)
                {
                    if (prop.Entity.HasModifier(Modifiers.Public))
                    {
                        var name = prop.GetName(this.Emitter);
                        name = Helpers.ReplaceFirstDollar(name);

                        this.WriteProp(prop, name, true);
                        this.WriteProp(prop, name, false);
                    }
                }
            }

            new MethodsBlock(this.Emitter, this.TypeInfo, this.StaticBlock).Emit();
        }

        private void WriteEvent(TypeConfigItem ev, string name)
        {
            XmlToJsDoc.EmitComment(this, ev.Entity);
            this.Write(name);
            this.WriteOpenParentheses();
            this.Write("value");
            this.WriteColon();
            string typeName = BridgeTypes.ToTypeScriptName(ev.Entity.ReturnType, this.Emitter);
            this.Write(typeName);
            this.WriteCloseParentheses();
            this.WriteColon();
            this.Write("void");

            this.WriteSemiColon();
            this.WriteNewLine();
        }

        private void WriteProp(TypeConfigItem ev, string name, bool getter)
        {
            XmlToJsDoc.EmitComment(this, ev.Entity);
            this.Write(getter ? "get" : "set");
            this.Write(name);
            this.WriteOpenParentheses();

            if (!getter)
            {
                this.Write("value");
                this.WriteColon();
                string typeName = BridgeTypes.ToTypeScriptName(ev.Entity.ReturnType, this.Emitter);
                this.Write(typeName);
            }

            this.WriteCloseParentheses();
            this.WriteColon();

            if (!getter)
            {
                this.Write("void");
            }
            else
            {
                string typeName = BridgeTypes.ToTypeScriptName(ev.Entity.ReturnType, this.Emitter);
                this.Write(typeName);
            }

            this.WriteSemiColon();
            this.WriteNewLine();
        }
    }
}
