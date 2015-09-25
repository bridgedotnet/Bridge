using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using System.Collections.Generic;
using ICSharpCode.NRefactory.TypeSystem;

namespace Bridge.Translator
{
    public class FieldBlock : AbstractEmitterBlock
    {
        public FieldBlock(IEmitter emitter, ITypeInfo typeInfo, bool staticBlock, bool fieldsOnly) : base(emitter, typeInfo.TypeDeclaration)
        {
            this.Emitter = emitter;
            this.TypeInfo = typeInfo;
            this.StaticBlock = staticBlock;
            this.FieldsOnly = fieldsOnly;
            this.Injectors = new List<string>();
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

        public bool FieldsOnly
        {
            get;
            set;
        }

        public List<string> Injectors
        {
            get;
            private set;
        }

        public bool WasEmitted
        {
            get;
            private set;
        }

        protected override void DoEmit()
        {
            this.EmitFields(this.StaticBlock ? this.TypeInfo.StaticConfig : this.TypeInfo.InstanceConfig);
        }

        protected virtual void EmitFields(TypeConfigInfo info)
        {
            if (this.FieldsOnly)
            {
                if (info.Fields.Count > 0)
                {
                    var hasProperties = this.WriteObject(null, info.Fields, "this.{0} = {1};");
                    if (hasProperties)
                    {
                        this.Emitter.Comma = true;
                        this.WasEmitted = true;
                    }
                }
                return;
            }

            if (info.Events.Count > 0)
            {
                var hasProperties = this.WriteObject("events", info.Events, "Bridge.event(this, \"{0}\", {1});");
                if (hasProperties)
                {
                    this.Emitter.Comma = true;
                    this.WasEmitted = true;
                }
            }

            if (info.Properties.Count > 0)
            {
                var hasProperties = this.WriteObject("properties", info.Properties, "Bridge.property(this, \"{0}\", {1});");
                if (hasProperties)
                {
                    this.Emitter.Comma = true;
                    this.WasEmitted = true;
                }
            }

            if (info.Alias.Count > 0)
            {
                this.WriteAlias("alias", info.Alias);
                this.Emitter.Comma = true;
            }
        }

        protected virtual bool WriteObject(string objectName, List<TypeConfigItem> members, string format)
        {
            bool hasProperties = this.HasProperties(members);

            if (hasProperties && objectName != null)
            {
                this.EnsureComma();
                this.Write(objectName);

                this.WriteColon();
                this.BeginBlock();
            }

            foreach (var member in members)
            {
                var primitiveExpr = member.Initializer as PrimitiveExpression;
                var isNull = member.Initializer.IsNull || member.Initializer is NullReferenceExpression;
                var isNullable = false;

                if (primitiveExpr != null && primitiveExpr.Value is AstType)
                {
                    var itype = this.Emitter.Resolver.ResolveNode((AstType) primitiveExpr.Value, this.Emitter);

                    if (NullableType.IsNullable(itype.Type))
                    {
                        isNullable = true;
                    }
                }

                if (!isNull && (primitiveExpr == null || (primitiveExpr.Value is AstType)))
                {
                    string value = null;

                    if (primitiveExpr == null)
                    {
                        var oldWriter = this.SaveWriter();
                        this.NewWriter();
                        member.Initializer.AcceptVisitor(this.Emitter);
                        value = this.Emitter.Output.ToString();
                        this.RestoreWriter(oldWriter);
                    }
                    else
                    {
                        if (isNullable)
                        {
                            value = "null";
                        }
                        else
                        {
                            value = "new " + BridgeTypes.ToJsName((AstType)primitiveExpr.Value, this.Emitter) + "()";
                        }
                    }

                    this.Injectors.Add(string.Format(format, member.GetName(this.Emitter), value));
                    continue;
                }

                this.EnsureComma();
                XmlToJsDoc.EmitComment(this, member.Entity);
                this.Write(member.GetName(this.Emitter));
                this.WriteColon();

                if (primitiveExpr != null && primitiveExpr.Value is AstType)
                {
                    if (isNullable)
                    {
                        this.Write("null");
                    }
                    else
                    {
                        this.Write("new " + BridgeTypes.ToJsName((AstType)primitiveExpr.Value, this.Emitter) + "()");
                    }
                }
                else
                {
                    member.Initializer.AcceptVisitor(this.Emitter);
                }

                this.Emitter.Comma = true;
            }

            if (hasProperties && objectName != null)
            {
                this.WriteNewLine();
                this.EndBlock();
            }

            return hasProperties;
        }

        protected virtual bool HasProperties(List<TypeConfigItem> members)
        {
            foreach (var member in members)
            {
                var primitiveExpr = member.Initializer as PrimitiveExpression;
                var isNull = member.Initializer.IsNull || member.Initializer is NullReferenceExpression;

                if (isNull)
                {
                    return true;
                }

                if (primitiveExpr == null || (primitiveExpr.Value is AstType))
                {
                    continue;
                }

                return true;
            }

            return false;
        }

        protected virtual void WriteAlias(string objectName, List<TypeConfigItem> members)
        {
            /*if (objectName != null)
            {
                this.EnsureComma();
                this.Write(objectName);

                this.WriteColon();
                this.BeginBlock();
            }

            foreach (var member in members)
            {
                this.EnsureComma();
                this.Write(member.Item1);
                this.WriteColon();

                this.Write(member.Item2);
                this.Emitter.Comma = true;
            }

            this.WriteNewLine();
            this.EndBlock();*/
        }
    }
}