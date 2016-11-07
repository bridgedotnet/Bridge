using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using System.Collections.Generic;

namespace Bridge.Translator
{
    public class FieldBlock : AbstractEmitterBlock
    {
        public FieldBlock(IEmitter emitter, ITypeInfo typeInfo, bool staticBlock, bool fieldsOnly, bool isObjectLiteral = false)
            : base(emitter, typeInfo.TypeDeclaration)
        {
            this.Emitter = emitter;
            this.TypeInfo = typeInfo;
            this.StaticBlock = staticBlock;
            this.FieldsOnly = fieldsOnly;
            this.Injectors = new List<string>();
            this.IsObjectLiteral = isObjectLiteral;
        }

        public bool IsObjectLiteral
        {
            get;
            set;
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
            if (this.Emitter.TempVariables != null)
            {
                this.Emitter.TempVariables = new Dictionary<string, bool>();
            }
            this.EmitFields(this.StaticBlock ? this.TypeInfo.StaticConfig : this.TypeInfo.InstanceConfig);
        }

        protected virtual void EmitFields(TypeConfigInfo info)
        {
            if (this.FieldsOnly || this.IsObjectLiteral)
            {
                if (info.Fields.Count > 0)
                {
                    var hasProperties = this.WriteObject(null, info.Fields, "this.{0} = {1};", "this[{0}] = {1};");
                    if (hasProperties)
                    {
                        this.Emitter.Comma = true;
                        this.WasEmitted = true;
                    }
                }

                if (!this.IsObjectLiteral)
                {
                    return;
                }
            }

            if (info.Events.Count > 0 && !this.IsObjectLiteral)
            {
                var hasProperties = this.WriteObject(JS.Fields.EVENTS, info.Events, JS.Funcs.BRIDGE_EVENT + "(this, \"{0}\", {1});", JS.Funcs.BRIDGE_EVENT + "(this, {0}, {1});");
                if (hasProperties)
                {
                    this.Emitter.Comma = true;
                    this.WasEmitted = true;
                }
            }

            if (info.Properties.Count > 0)
            {
                var hasProperties = this.WriteObject(JS.Fields.PROPERTIES, info.Properties, JS.Funcs.BRIDGE_PROPERTY + "(this, \"{0}\", {1});", JS.Funcs.BRIDGE_PROPERTY + "(this, {0}, {1});");
                if (hasProperties)
                {
                    this.Emitter.Comma = true;
                    this.WasEmitted = true;
                }
            }

            if (info.Alias.Count > 0 && !this.IsObjectLiteral)
            {
                this.WriteAlias("alias", info.Alias);
                this.Emitter.Comma = true;
            }
        }

        protected virtual bool WriteObject(string objectName, List<TypeConfigItem> members, string format, string interfaceFormat)
        {
            bool hasProperties = this.HasProperties(objectName, members);

            if (hasProperties && objectName != null && !this.IsObjectLiteral)
            {
                this.EnsureComma();
                this.Write(objectName);

                this.WriteColon();
                this.BeginBlock();
            }

            bool isProperty = JS.Fields.PROPERTIES == objectName;
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

                    ResolveResult rr = null;
                    if (member.VarInitializer != null)
                    {
                        rr = this.Emitter.Resolver.ResolveNode(member.VarInitializer, this.Emitter);
                    }
                    else
                    {
                        rr = this.Emitter.Resolver.ResolveNode(member.Entity, this.Emitter);
                    }

                    if (rr != null && rr.Type.Kind == TypeKind.Enum)
                    {
                        constValue = Helpers.GetEnumValue(this.Emitter, rr.Type, constValue);
                        writeScript = true;
                    }
                }

                if (constValue is RawValue)
                {
                    constValue = constValue.ToString();
                    write = true;
                    writeScript = false;
                }

                var isNull = member.Initializer.IsNull || member.Initializer is NullReferenceExpression;

                if (!isNull && !isPrimitive)
                {
                    var constrr = this.Emitter.Resolver.ResolveNode(member.Initializer, this.Emitter);
                    if (constrr != null && constrr.IsCompileTimeConstant)
                    {
                        isPrimitive = true;
                        constValue = constrr.ConstantValue;

                        if (constrr.Type.Kind == TypeKind.Enum)
                        {
                            constValue = Helpers.GetEnumValue(this.Emitter, constrr.Type, constrr.ConstantValue);
                        }

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

                bool written = false;
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
                        AstType astType = null;
                        if (member.VarInitializer != null)
                        {
                            rr = this.Emitter.Resolver.ResolveNode(member.VarInitializer, this.Emitter);
                        }
                        else
                        {
                            astType = member.Entity.ReturnType;
                            rr = this.Emitter.Resolver.ResolveNode(member.Entity, this.Emitter);
                        }

                        constValue = Inspector.GetDefaultFieldValue(rr.Type, astType);
                        if (rr.Type.Kind == TypeKind.Enum)
                        {
                            constValue = Helpers.GetEnumValue(this.Emitter, rr.Type, constValue);
                        }
                        isNullable = NullableType.IsNullable(rr.Type);
                        needContinue = constValue is IType;
                        writeScript = true;

                        if (needContinue && !(member.Initializer is ObjectCreateExpression))
                        {
                            defValue = " || " + Inspector.GetStructDefaultValue((IType) constValue, this.Emitter);
                        }
                    }
                    else
                    {
                        value = isNullable
                            ? "null"
                            : Inspector.GetStructDefaultValue((AstType) constValue, this.Emitter);
                        constValue = value;
                        write = true;
                        needContinue = !isProperty && !isNullable;
                    }

                    var name = member.GetName(this.Emitter);

                    if (isProperty && isPrimitive)
                    {
                        constValue = "null";

                        if (this.IsObjectLiteral)
                        {
                            written = true;
                            this.Write(string.Format("this.{0} = {1};", name, value));
                            this.WriteNewLine();
                        }
                        else
                        {
                            this.Injectors.Add(string.Format(name.StartsWith("\"") ? "this[{0}] = {1};" : "this.{0} = {1};", name, value));
                        }
                    }
                    else
                    {
                        if (this.IsObjectLiteral)
                        {
                            written = true;
                            this.Write(string.Format("this.{0} = {1};", name, value + defValue));
                            this.WriteNewLine();
                        }
                        else
                        {
                            this.Injectors.Add(string.Format(name.StartsWith("\"") ? interfaceFormat : format, name,value + defValue));
                        }
                    }

                    if (needContinue)
                    {
                        continue;
                    }
                }

                if (written)
                {
                    continue;
                }

                if (this.IsObjectLiteral)
                {
                    this.WriteThis();
                    this.WriteDot();
                    this.Write(member.GetName(this.Emitter, true));
                    this.Write(" = ");
                }
                else
                {
                    this.EnsureComma();
                    XmlToJsDoc.EmitComment(this, member.Entity);
                    this.Write(member.GetName(this.Emitter, true));
                    this.WriteColon();
                }

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

                if (this.IsObjectLiteral)
                {
                    this.WriteSemiColon(true);
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

        protected virtual bool HasProperties(string objectName, List<TypeConfigItem> members)
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

                if (!isPrimitive || (constValue is AstType && objectName != JS.Fields.PROPERTIES))
                {
                    continue;
                }

                return true;
            }

            return false;
        }

        protected virtual void WriteAlias(string objectName, List<TypeConfigItem> members)
        {
            int pos = this.Emitter.Output.Length;
            bool oldComma = this.Emitter.Comma;
            bool oldNewLine = this.Emitter.IsNewLine;
            bool nonEmpty = false;

            if (objectName != null)
            {
                this.EnsureComma();
                this.Write(objectName);

                this.WriteColon();
                this.WriteOpenBracket();
                this.WriteNewLine();
            }

            foreach (var member in members)
            {
                if (member.DerivedMember != null)
                {
                    if (this.EmitMemberAlias(member.DerivedMember, member.InterfaceMember))
                    {
                        nonEmpty = true;
                    }

                    continue;
                }

                var rr = Emitter.Resolver.ResolveNode(member.Entity, Emitter) as MemberResolveResult;

                if (rr == null && member.VarInitializer != null)
                {
                    rr = Emitter.Resolver.ResolveNode(member.VarInitializer, Emitter) as MemberResolveResult;
                }

                if (rr != null)
                {
                    foreach (var interfaceMember in rr.Member.ImplementedInterfaceMembers)
                    {
                        if (this.EmitMemberAlias(rr.Member, interfaceMember))
                        {
                            nonEmpty = true;
                        }
                    }
                }
            }

            this.WriteNewLine();
            this.WriteCloseBracket();

            if (!nonEmpty)
            {
                this.Emitter.Output.Length = pos;
                this.Emitter.Comma = oldComma;
                this.Emitter.IsNewLine = oldNewLine;
            }
        }

        protected bool EmitMemberAlias(IMember member, IMember interfaceMember)
        {
            bool nonEmpty = false;
            if (member.IsShadowing || !member.IsOverride)
            {
                var baseMember = InheritanceHelper.GetBaseMember(member);

                if (baseMember != null && baseMember.ImplementedInterfaceMembers.Contains(interfaceMember))
                {
                    return false;
                }
            }

            if (member is IProperty)
            {
                var property = (IProperty)member;
                if (property.CanGet)
                {
                    nonEmpty = true;
                    this.EnsureComma();
                    this.WriteScript(Helpers.GetPropertyRef(member, this.Emitter, false, false, false, true));
                    this.WriteComma();
                    var alias = Helpers.GetPropertyRef(interfaceMember, this.Emitter, false, false, false);

                    if (alias.StartsWith("\""))
                    {
                        this.Write(alias);
                    }
                    else
                    {
                        this.WriteScript(alias);
                    }

                    this.Emitter.Comma = true;
                }

                if (property.CanSet)
                {
                    nonEmpty = true;
                    this.EnsureComma();
                    this.WriteScript(Helpers.GetPropertyRef(member, this.Emitter, true, false, false, true));
                    this.WriteComma();
                    var alias = Helpers.GetPropertyRef(interfaceMember, this.Emitter, true, false, false);

                    if (alias.StartsWith("\""))
                    {
                        this.Write(alias);
                    }
                    else
                    {
                        this.WriteScript(alias);
                    }

                    this.Emitter.Comma = true;
                }
            }
            else if (member is IEvent)
            {
                var ev = (IEvent)member;
                if (ev.CanAdd)
                {
                    nonEmpty = true;
                    this.EnsureComma();
                    this.WriteScript(Helpers.GetEventRef(member, this.Emitter, false, false, false, true));
                    this.WriteComma();
                    var alias = Helpers.GetEventRef(interfaceMember, this.Emitter, false, false, false);

                    if (alias.StartsWith("\""))
                    {
                        this.Write(alias);
                    }
                    else
                    {
                        this.WriteScript(alias);
                    }

                    this.Emitter.Comma = true;
                }

                if (ev.CanRemove)
                {
                    nonEmpty = true;
                    this.EnsureComma();
                    this.WriteScript(Helpers.GetEventRef(member, this.Emitter, true, false, false, true));
                    this.WriteComma();
                    var alias = Helpers.GetEventRef(interfaceMember, this.Emitter, true, false, false);

                    if (alias.StartsWith("\""))
                    {
                        this.Write(alias);
                    }
                    else
                    {
                        this.WriteScript(alias);
                    }

                    this.Emitter.Comma = true;
                }
            }
            else
            {
                nonEmpty = true;
                this.EnsureComma();
                this.WriteScript(OverloadsCollection.Create(Emitter, member).GetOverloadName(false, null, true));
                this.WriteComma();
                var alias = OverloadsCollection.Create(Emitter, interfaceMember).GetOverloadName();

                if (alias.StartsWith("\""))
                {
                    this.Write(alias);
                }
                else
                {
                    this.WriteScript(alias);
                }
            }

            this.Emitter.Comma = true;
            return nonEmpty;
        }
    }
}