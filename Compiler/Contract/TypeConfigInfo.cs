using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using System.Collections.Generic;
using System.Globalization;
using ICSharpCode.NRefactory.TypeSystem;

namespace Bridge.Contract
{
    public class TypeConfigItem
    {
        public string Name
        {
            get;
            set;
        }

        public EntityDeclaration Entity
        {
            get;
            set;
        }

        public Expression Initializer
        {
            get;
            set;
        }

        public VariableInitializer VarInitializer
        {
            get;
            set;
        }

        public bool IsConst
        {
            get;
            set;
        }

        public IMember InterfaceMember
        {
            get; set;
        }

        public IMember DerivedMember
        {
            get; set;
        }

        public string GetName(IEmitter emitter, bool withoutTypeParams = false)
        {
            string fieldName = this.Name;

            if (this.VarInitializer != null)
            {
                var rr = emitter.Resolver.ResolveNode(this.VarInitializer, emitter) as MemberResolveResult;
                fieldName = OverloadsCollection.Create(emitter, rr.Member).GetOverloadName(false, null, withoutTypeParams);
            }
            else if (this.Entity is PropertyDeclaration)
            {
                fieldName = OverloadsCollection.Create(emitter, (PropertyDeclaration)this.Entity).GetOverloadName(false, null, withoutTypeParams);
            }
            else
            {
                bool done = false;
                if (this.Entity != null)
                {
                    var rr = emitter.Resolver.ResolveNode(this.Entity, emitter) as MemberResolveResult;

                    if (rr != null)
                    {
                        fieldName = OverloadsCollection.Create(emitter, rr.Member).GetOverloadName(false, null, withoutTypeParams);
                        done = true;
                    }
                }

                if (!done)
                {
                    fieldName = emitter.AssemblyInfo.PreserveMemberCase ? fieldName : TypeConfigItem.ToLowerCamelCase(fieldName);

                    if (fieldName == "__proto__")
                    {
                        fieldName = "$__proto__";
                    }
                    /*if (Helpers.IsReservedWord(fieldName))
                    {
                        fieldName = Helpers.ChangeReservedWord(fieldName);
                    }*/
                }
            }
            return fieldName;
        }

        public static string ToLowerCamelCase(string text)
        {
            return text.Substring(0, 1).ToLower(CultureInfo.InvariantCulture) + text.Substring(1);
        }
    }

    public class TypeConfigInfo
    {
        public TypeConfigInfo()
        {
            this.Fields = new List<TypeConfigItem>();
            this.Events = new List<TypeConfigItem>();
            this.Properties = new List<TypeConfigItem>();
            this.Alias = new List<TypeConfigItem>();
        }

        public bool HasMembers
        {
            get
            {
                return this.Fields.Count > 0 || this.Events.Count > 0 || this.Properties.Count > 0 || this.Alias.Count > 0;
            }
        }

        public bool HasConfigMembers
        {
            get
            {
                return this.Events.Count > 0 || this.Properties.Count > 0 || this.Alias.Count > 0;
            }
        }

        public List<TypeConfigItem> Fields
        {
            get;
            set;
        }

        public List<TypeConfigItem> Events
        {
            get;
            set;
        }

        public List<TypeConfigItem> Properties
        {
            get;
            set;
        }

        public List<TypeConfigItem> Alias
        {
            get;
            set;
        }
    }
}