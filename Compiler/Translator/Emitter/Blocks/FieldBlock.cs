using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using System.Collections.Generic;

namespace Bridge.Translator
{
    public class FieldBlock : AbstractEmitterBlock
    {
        public FieldBlock(IEmitter emitter, ITypeInfo typeInfo, bool staticBlock, bool fieldsOnly)
            : base(emitter, typeInfo.TypeDeclaration)
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
                object constValue = null;
                bool isPrimitive = false;
                var primitiveExpr = member.Initializer as PrimitiveExpression;
                bool write = false;
                bool writeScript = false;

                if (primitiveExpr != null)
                {
                    isPrimitive = true;
                    constValue = primitiveExpr.Value;
                    writeScript = true;
                }

                var isNull = member.Initializer.IsNull || member.Initializer is NullReferenceExpression;

                if (!isNull && !isPrimitive)
                {
                    var constrr = this.Emitter.Resolver.ResolveNode(member.Initializer, this.Emitter);
                    if (constrr != null && constrr.IsCompileTimeConstant)
                    {
                        isPrimitive = true;
                        constValue = constrr.ConstantValue;
                        writeScript = true;
                    }
                }

                var isNullable = false;

                if (isPrimitive && constValue is AstType)
                {
                    var itype = this.Emitter.Resolver.ResolveNode((AstType)constValue, this.Emitter);

                    if (NullableType.IsNullable(itype.Type))
                    {
                        isNullable = true;
                    }
                }
                
                if (!isNull && (!isPrimitive || (constValue is AstType)))
                {
                    string value = null;
                    bool needContinue = false;
                    string defValue = "";
                    if (!isPrimitive)
                    {
                        var oldWriter = this.SaveWriter();
                        this.NewWriter();
                        member.Initializer.AcceptVisitor(this.Emitter);
                        value = this.Emitter.Output.ToString();
                        this.RestoreWriter(oldWriter);

                        ResolveResult rr = null;
                        if (member.VarInitializer != null)
                        {
                            rr = this.Emitter.Resolver.ResolveNode(member.VarInitializer, this.Emitter);
                        }
                        else
                        {
                            rr = this.Emitter.Resolver.ResolveNode(member.Entity, this.Emitter);
                        }
                
                        constValue = Inspector.GetDefaultFieldValue(rr.Type);
                        isNullable = NullableType.IsNullable(rr.Type);
                        needContinue = constValue is IType;
                        writeScript = true;

                        if (needContinue && !(member.Initializer is ObjectCreateExpression))
                        {
                            defValue = " || " + Inspector.GetStructDefaultValue((IType)constValue, this.Emitter);
                        }
                    }
                    else
                    {
                        value = isNullable ? "null" : Inspector.GetStructDefaultValue((AstType)constValue, this.Emitter);
                        constValue = value;
                        write = true;
                        needContinue = !isNullable;
                    }

                    this.Injectors.Add(string.Format(format, member.GetName(this.Emitter), value + defValue));

                    if (needContinue)
                    {
                        continue;    
                    }
                }

                this.EnsureComma();
                XmlToJsDoc.EmitComment(this, member.Entity);
                this.Write(member.GetName(this.Emitter));
                this.WriteColon();

                if (constValue is AstType)
                {
                    if (isNullable)
                    {
                        this.Write("null");
                    }
                    else
                    {
                        this.Write(Inspector.GetStructDefaultValue((AstType)constValue, this.Emitter));
                    }
                }
                else if (constValue is IType)
                {
                    if (isNullable)
                    {
                        this.Write("null");
                    }
                    else
                    {
                        this.Write(Inspector.GetStructDefaultValue((IType)constValue, this.Emitter));
                    }
                }
                else if (write)
                {
                    this.Write(constValue);
                }
                else if (writeScript)
                {
                    this.WriteScript(constValue);
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
                object constValue = null;
                bool isPrimitive = false;
                var primitiveExpr = member.Initializer as PrimitiveExpression;
                if (primitiveExpr != null)
                {
                    isPrimitive = true;
                    constValue = primitiveExpr.Value;
                }

                var isNull = member.Initializer.IsNull || member.Initializer is NullReferenceExpression;

                if (!isNull && !isPrimitive)
                {
                    var constrr = this.Emitter.Resolver.ResolveNode(member.Initializer, this.Emitter) as ConstantResolveResult;
                    if (constrr != null)
                    {
                        isPrimitive = true;
                        constValue = constrr.ConstantValue;
                    }
                }

                if (isNull)
                {
                    return true;
                }

                if (!isPrimitive || (constValue is AstType))
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
