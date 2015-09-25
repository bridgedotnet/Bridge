using Bridge.Contract;
using System;
using System.Collections.Generic;
using Mono.Cecil;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.TypeSystem;
using System.Linq;
using System.Text;
using ICSharpCode.NRefactory.Semantics;

namespace Bridge.Contract
{
    public class OverloadsCollection
    {
        public static OverloadsCollection Create(IEmitter emitter, FieldDeclaration fieldDeclaration)
        {
            string key = fieldDeclaration.GetHashCode().ToString();
            if (emitter.OverloadsCache.ContainsKey(key))
            {
                return emitter.OverloadsCache[key];
            }

            return new OverloadsCollection(emitter, fieldDeclaration);
        }

        public static OverloadsCollection Create(IEmitter emitter, EventDeclaration eventDeclaration)
        {
            string key = eventDeclaration.GetHashCode().ToString();
            if (emitter.OverloadsCache.ContainsKey(key))
            {
                return emitter.OverloadsCache[key];
            }

            return new OverloadsCollection(emitter, eventDeclaration);
        }

        public static OverloadsCollection Create(IEmitter emitter, CustomEventDeclaration eventDeclaration, bool remove)
        {
            string key = eventDeclaration.GetHashCode().ToString() + remove.GetHashCode().ToString();
            if (emitter.OverloadsCache.ContainsKey(key))
            {
                return emitter.OverloadsCache[key];
            }

            return new OverloadsCollection(emitter, eventDeclaration, remove);
        }

        public static OverloadsCollection Create(IEmitter emitter, MethodDeclaration methodDeclaration)
        {
            string key = methodDeclaration.GetHashCode().ToString();
            if (emitter.OverloadsCache.ContainsKey(key))
            {
                return emitter.OverloadsCache[key];
            }

            return new OverloadsCollection(emitter, methodDeclaration);
        }

        public static OverloadsCollection Create(IEmitter emitter, ConstructorDeclaration constructorDeclaration)
        {
            string key = constructorDeclaration.GetHashCode().ToString();
            if (emitter.OverloadsCache.ContainsKey(key))
            {
                return emitter.OverloadsCache[key];
            }

            return new OverloadsCollection(emitter, constructorDeclaration);
        }

        public static OverloadsCollection Create(IEmitter emitter, PropertyDeclaration propDeclaration, bool isSetter = false)
        {
            string key = propDeclaration.GetHashCode().ToString() + isSetter.GetHashCode().ToString();
            if (emitter.OverloadsCache.ContainsKey(key))
            {
                return emitter.OverloadsCache[key];
            }

            return new OverloadsCollection(emitter, propDeclaration, isSetter);
        }

        public static OverloadsCollection Create(IEmitter emitter, IndexerDeclaration indexerDeclaration, bool isSetter = false)
        {
            string key = indexerDeclaration.GetHashCode().ToString() + isSetter.GetHashCode().ToString();
            if (emitter.OverloadsCache.ContainsKey(key))
            {
                return emitter.OverloadsCache[key];
            }

            return new OverloadsCollection(emitter, indexerDeclaration, isSetter);
        }

        public static OverloadsCollection Create(IEmitter emitter, OperatorDeclaration operatorDeclaration)
        {
            string key = operatorDeclaration.GetHashCode().ToString();
            if (emitter.OverloadsCache.ContainsKey(key))
            {
                return emitter.OverloadsCache[key];
            }

            return new OverloadsCollection(emitter, operatorDeclaration);
        }

        public static OverloadsCollection Create(IEmitter emitter, IMember member, bool isSetter = false, bool includeInline = false)
        {
            string key = (member.MemberDefinition != null ? member.MemberDefinition.GetHashCode().ToString() : member.GetHashCode().ToString()) + isSetter.GetHashCode().ToString();
            if (emitter.OverloadsCache.ContainsKey(key))
            {
                return emitter.OverloadsCache[key];
            }

            return new OverloadsCollection(emitter, member, isSetter, includeInline);
        }

        public IEmitter Emitter
        {
            get;
            private set;
        }

        public IType Type
        {
            get;
            private set;
        }

        public ITypeDefinition TypeDefinition
        {
            get;
            private set;
        }

        public string Name
        {
            get;
            private set;
        }

        public string JsName
        {
            get;
            private set;
        }

        public string AltJsName
        {
            get;
            private set;
        }

        public string ParametersCount
        {
            get;
            private set;
        }

        public bool Static
        {
            get;
            private set;
        }

        public bool Inherit
        {
            get;
            private set;
        }

        public bool Constructor
        {
            get;
            private set;
        }

        public bool CancelChangeCase
        {
            get;
            private set;
        }

        public bool IsSetter
        {
            get;
            private set;
        }

        public bool IncludeInline
        {
            get;
            private set;
        }

        public IMember Member
        {
            get;
            private set;
        }

        private OverloadsCollection(IEmitter emitter, FieldDeclaration fieldDeclaration)
        {
            this.Emitter = emitter;
            this.Name = emitter.GetFieldName(fieldDeclaration);
            this.JsName = this.Emitter.GetEntityName(fieldDeclaration, false, true);
            this.Inherit = !fieldDeclaration.HasModifier(Modifiers.Static);
            this.Static = fieldDeclaration.HasModifier(Modifiers.Static);
            this.Member = this.FindMember(fieldDeclaration);
            this.TypeDefinition = this.Member.DeclaringTypeDefinition;
            this.Type = this.Member.DeclaringType;
            this.InitMembers();
            this.Emitter.OverloadsCache[fieldDeclaration.GetHashCode().ToString()] = this;
        }

        private OverloadsCollection(IEmitter emitter, EventDeclaration eventDeclaration)
        {
            this.Emitter = emitter;
            this.Name = emitter.GetEventName(eventDeclaration);
            this.JsName = this.Emitter.GetEntityName(eventDeclaration, false, true);
            this.Inherit = !eventDeclaration.HasModifier(Modifiers.Static);
            this.Static = eventDeclaration.HasModifier(Modifiers.Static);
            this.CancelChangeCase = true;
            this.Member = this.FindMember(eventDeclaration);
            this.TypeDefinition = this.Member.DeclaringTypeDefinition;
            this.Type = this.Member.DeclaringType;
            this.InitMembers();
            this.Emitter.OverloadsCache[eventDeclaration.GetHashCode().ToString()] = this;
        }

        private OverloadsCollection(IEmitter emitter, CustomEventDeclaration eventDeclaration, bool remove)
        {
            this.Emitter = emitter;
            this.Name = eventDeclaration.Name;
            this.JsName = Helpers.GetEventRef(eventDeclaration, emitter, remove, true);
            this.AltJsName = Helpers.GetEventRef(eventDeclaration, emitter, !remove, true);
            this.Inherit = !eventDeclaration.HasModifier(Modifiers.Static);
            this.CancelChangeCase = true;
            this.IsSetter = remove;
            this.Static = eventDeclaration.HasModifier(Modifiers.Static);
            this.Member = this.FindMember(eventDeclaration);
            this.TypeDefinition = this.Member.DeclaringTypeDefinition;
            this.Type = this.Member.DeclaringType;
            this.InitMembers();
            this.Emitter.OverloadsCache[eventDeclaration.GetHashCode().ToString() + remove.GetHashCode().ToString()] = this;
        }

        private OverloadsCollection(IEmitter emitter, MethodDeclaration methodDeclaration)
        {
            this.Emitter = emitter;
            this.Name = methodDeclaration.Name;
            this.JsName = this.Emitter.GetEntityName(methodDeclaration, false, true);
            this.Inherit = !methodDeclaration.HasModifier(Modifiers.Static);
            this.Static = methodDeclaration.HasModifier(Modifiers.Static);
            this.Member = this.FindMember(methodDeclaration);
            this.TypeDefinition = this.Member.DeclaringTypeDefinition;
            this.Type = this.Member.DeclaringType;
            this.InitMembers();
            this.Emitter.OverloadsCache[methodDeclaration.GetHashCode().ToString()] = this;
        }

        private OverloadsCollection(IEmitter emitter, ConstructorDeclaration constructorDeclaration)
        {
            this.Emitter = emitter;
            this.Name = constructorDeclaration.Name;
            this.JsName = this.Emitter.GetEntityName(constructorDeclaration, false, true);
            this.Inherit = false;
            this.Constructor = true;
            this.Static = constructorDeclaration.HasModifier(Modifiers.Static);
            this.Member = this.FindMember(constructorDeclaration);
            this.TypeDefinition = this.Member.DeclaringTypeDefinition;
            this.Type = this.Member.DeclaringType;
            this.InitMembers();
            this.Emitter.OverloadsCache[constructorDeclaration.GetHashCode().ToString()] = this;
        }

        private OverloadsCollection(IEmitter emitter, PropertyDeclaration propDeclaration, bool isSetter)
        {
            this.Emitter = emitter;
            this.Name = propDeclaration.Name;
            this.JsName = Helpers.GetPropertyRef(propDeclaration, emitter, isSetter, true, true);
            this.AltJsName = Helpers.GetPropertyRef(propDeclaration, emitter, !isSetter, true, true);
            this.Inherit = !propDeclaration.HasModifier(Modifiers.Static);
            this.Static = propDeclaration.HasModifier(Modifiers.Static);
            this.CancelChangeCase = !Helpers.IsFieldProperty(propDeclaration, emitter);
            this.IsSetter = isSetter;
            this.Member = this.FindMember(propDeclaration);
            this.TypeDefinition = this.Member.DeclaringTypeDefinition;
            this.Type = this.Member.DeclaringType;
            this.InitMembers();
            this.Emitter.OverloadsCache[propDeclaration.GetHashCode().ToString() + isSetter.GetHashCode().ToString()] = this;
        }

        private OverloadsCollection(IEmitter emitter, IndexerDeclaration indexerDeclaration, bool isSetter)
        {
            this.Emitter = emitter;
            this.Name = indexerDeclaration.Name;
            this.JsName = Helpers.GetPropertyRef(indexerDeclaration, emitter, isSetter, true, true);
            this.AltJsName = Helpers.GetPropertyRef(indexerDeclaration, emitter, !isSetter, true, true);
            this.Inherit = true;
            this.Static = false;
            this.CancelChangeCase = true;
            this.IsSetter = isSetter;
            this.Member = this.FindMember(indexerDeclaration);
            this.TypeDefinition = this.Member.DeclaringTypeDefinition;
            this.Type = this.Member.DeclaringType;
            this.InitMembers();
            this.Emitter.OverloadsCache[indexerDeclaration.GetHashCode().ToString() + isSetter.GetHashCode().ToString()] = this;
        }

        private OverloadsCollection(IEmitter emitter, OperatorDeclaration operatorDeclaration)
        {
            this.Emitter = emitter;
            this.Name = operatorDeclaration.Name;
            this.JsName = this.Emitter.GetEntityName(operatorDeclaration, false, true);
            this.Inherit = !operatorDeclaration.HasModifier(Modifiers.Static);
            this.Static = operatorDeclaration.HasModifier(Modifiers.Static);
            this.Member = this.FindMember(operatorDeclaration);
            this.TypeDefinition = this.Member.DeclaringTypeDefinition;
            this.Type = this.Member.DeclaringType;
            this.InitMembers();
            this.Emitter.OverloadsCache[operatorDeclaration.GetHashCode().ToString()] = this;
        }

        private OverloadsCollection(IEmitter emitter, IMember member, bool isSetter = false, bool includeInline = false)
        {
            if (member is IMethod)
            {
                var method = (IMethod)member;
                this.Inherit = !method.IsConstructor && !method.IsStatic;
                this.Static = method.IsStatic;
                this.Constructor = method.IsConstructor;
            }
            else if (member is IEntity)
            {
                var entity = (IEntity)member;
                this.Inherit = !entity.IsStatic;
                this.Static = entity.IsStatic;
            }

            this.Emitter = emitter;
            this.Name = member.Name;

            if (member is IProperty)
            {
                this.CancelChangeCase = !Helpers.IsFieldProperty(member, emitter);
                this.JsName = Helpers.GetPropertyRef(member, emitter, isSetter, true, true);
                this.AltJsName = Helpers.GetPropertyRef(member, emitter, !isSetter, true, true);
            }
            else if (member is IEvent)
            {
                this.CancelChangeCase = true;
                this.JsName = Helpers.GetEventRef(member, emitter, isSetter, true, true);
                this.AltJsName = Helpers.GetEventRef(member, emitter, !isSetter, true, true);
            }
            else
            {
                this.JsName = this.Emitter.GetEntityName(member, false, true);
            }

            this.IncludeInline = includeInline;
            this.Member = member;
            this.TypeDefinition = this.Member.DeclaringTypeDefinition;
            this.Type = this.Member.DeclaringType;
            this.IsSetter = isSetter;
            this.InitMembers();
            string key = (member.MemberDefinition != null ? member.MemberDefinition.GetHashCode().ToString() : member.GetHashCode().ToString()) + isSetter.GetHashCode().ToString();
            this.Emitter.OverloadsCache[key] = this;
        }


        public List<IMethod> Methods
        {
            get;
            private set;
        }

        public List<IField> Fields
        {
            get;
            private set;
        }

        public List<IProperty> Properties
        {
            get;
            private set;
        }

        public List<IEvent> Events
        {
            get;
            private set;
        }

        public bool HasOverloads
        {
            get
            {
                return this.Members.Count > 1;
            }
        }

        protected virtual int GetIndex(IMember member)
        {
            var originalMember = member;

            while (member.IsOverride)
            {
                member = InheritanceHelper.GetBaseMember(member);
            }

            if (member == null)
            {
                member = originalMember;
            }

            return this.Members.IndexOf(member.MemberDefinition);
        }

        private List<IMember> members;
        public List<IMember> Members
        {
            get
            {
                this.InitMembers();
                return this.members;
            }
        }

        protected virtual void InitMembers()
        {
            if (this.members == null)
            {
                this.Methods = this.GetMethodOverloads();
                this.Properties = this.GetPropertyOverloads();
                this.Fields = this.GetFieldOverloads();
                this.Events = this.GetEventOverloads();

                this.members = new List<IMember>();
                this.members.AddRange(this.Methods);
                this.members.AddRange(this.Properties);
                this.members.AddRange(this.Fields);
                this.members.AddRange(this.Events);

                this.SortMembersOverloads();
            }
        }

        protected virtual void SortMembersOverloads()
        {
            this.Members.Sort((m1, m2) =>
            {
                if (m1.DeclaringType != m2.DeclaringType)
                {
                    return m1.DeclaringTypeDefinition.IsDerivedFrom(m2.DeclaringTypeDefinition) ? 1 : -1;
                }

                var iCount1 = m1.ImplementedInterfaceMembers.Count;
                var iCount2 = m2.ImplementedInterfaceMembers.Count;
                if (iCount1 > 0 && iCount2 == 0)
                {
                    return -1;
                }

                if (iCount2 > 0 && iCount1 == 0)
                {
                    return 1;
                }

                if (iCount1 > 0 && iCount2 > 0)
                {
                    foreach (var im1 in m1.ImplementedInterfaceMembers)
                    {
                        foreach (var im2 in m2.ImplementedInterfaceMembers)
                        {
                            if (im1.DeclaringType != im2.DeclaringType)
                            {

                                if (im1.DeclaringTypeDefinition.IsDerivedFrom(im2.DeclaringTypeDefinition))
                                {
                                    return 1;
                                }

                                if (im2.DeclaringTypeDefinition.IsDerivedFrom(im1.DeclaringTypeDefinition))
                                {
                                    return -1;
                                }
                            }
                        }
                    }
                }

                var method1 = m1 as IMethod;
                var method2 = m2 as IMethod;

                if ((method1 != null && method1.IsConstructor) &&
                    (method2 == null || !method2.IsConstructor))
                {
                    return -1;
                }

                if ((method2 != null && method2.IsConstructor) &&
                    (method1 == null || !method1.IsConstructor))
                {
                    return 1;
                }

                if ((method1 != null && method1.IsConstructor) &&
                    (method2 != null && method2.IsConstructor))
                {
                    return string.Compare(this.MemberToString(m1), this.MemberToString(m2));
                }

                var a1 = this.GetAccessibilityWeight(m1.Accessibility);
                var a2 = this.GetAccessibilityWeight(m2.Accessibility);
                if (a1 != a2)
                {
                    return a1.CompareTo(a2);
                }

                var v1 = m1 is IField ? 1 : (m1 is IEvent ? 2 : (m1 is IMethod ? 3 : 4));
                var v2 = m2 is IField ? 1 : (m2 is IEvent ? 2 : (m2 is IMethod ? 3 : 4));

                if (v1 != v2)
                {
                    return v1.CompareTo(v2);
                }

                var name1 = this.MemberToString(m1);
                var name2 = this.MemberToString(m2);

                if (name1.Length != name2.Length)
                {
                   //return name1.Length.CompareTo(name2.Length);
                }

                return string.Compare(name1, name2);
            });
        }

        protected virtual int GetAccessibilityWeight(Accessibility a)
        {
            int w = 0;
            switch (a)
            {
                case Accessibility.None:
                    w = 4;
                    break;
                case Accessibility.Private:
                    w = 4;
                    break;
                case Accessibility.Public:
                    w = 1;
                    break;
                case Accessibility.Protected:
                    w = 3;
                    break;
                case Accessibility.Internal:
                    w = 2;
                    break;
                case Accessibility.ProtectedOrInternal:
                    w = 2;
                    break;
                case Accessibility.ProtectedAndInternal:
                    w = 3;
                    break;
            }

            return w;
        }

        protected virtual string MemberToString(IMember member)
        {
            if (member is IMethod)
            {
                return this.MethodToString((IMethod)member);
            }

            return member.Name;
        }

        protected virtual string MethodToString(IMethod m)
        {
            StringBuilder sb = new StringBuilder();

            sb.Append(m.ReturnType.ToString()).Append(" ");
            sb.Append(m.Name).Append(" ");
            sb.Append(m.TypeParameters.Count).Append(" ");

            foreach (var p in m.Parameters)
            {
                sb.Append(p.Type.ToString()).Append(" ");
            }

            return sb.ToString();
        }

        protected virtual List<IMethod> GetMethodOverloads(List<IMethod> list = null, ITypeDefinition typeDef = null)
        {
            bool isTop = list == null;
            list = list ?? new List<IMethod>();
            typeDef = typeDef ?? this.TypeDefinition;

            if (typeDef != null)
            {
                var methods = typeDef.Methods.Where(m =>
                {
                    if (!this.IncludeInline)
                    {
                        var inline = this.Emitter.GetInline(m);
                        if (!string.IsNullOrWhiteSpace(inline))
                        {
                            return false;
                        }
                    }

                    var name = this.Emitter.GetEntityName(m, false, true);
                    if ((name == this.JsName || name == this.AltJsName) && m.IsStatic == this.Static &&
                        ((m.IsConstructor && this.JsName == "$constructor") || m.IsConstructor == this.Constructor))
                    {
                        if (m.IsConstructor != this.Constructor)
                        {
                            return false;
                        }

                        if (m.IsOverride)
                        {
                            return false;
                        }

                        return true;
                    }

                    return false;
                });

                list.AddRange(methods);

                if (this.Inherit)
                {
                    var baseTypeDefinitions = typeDef.DirectBaseTypes.Where(t => t.Kind == typeDef.Kind);

                    foreach (var baseTypeDef in baseTypeDefinitions)
                    {
                        var result = this.GetMethodOverloads(list, baseTypeDef.GetDefinition());
                        list.AddRange(result);
                    }
                }
            }

            return isTop ? list.Distinct().ToList() : list;
        }

        protected virtual List<IProperty> GetPropertyOverloads(List<IProperty> list = null, ITypeDefinition typeDef = null)
        {
            bool isTop = list == null;
            list = list ?? new List<IProperty>();
            typeDef = typeDef ?? this.TypeDefinition;

            if (typeDef != null)
            {
                var properties = typeDef.Properties.Where(p =>
                {
                    if (!this.IncludeInline)
                    {
                        var inline = p.Getter != null ? this.Emitter.GetInline(p.Getter) : null;
                        if (!string.IsNullOrWhiteSpace(inline))
                        {
                            return false;
                        }

                        inline = p.Setter != null ? this.Emitter.GetInline(p.Setter) : null;
                        if (!string.IsNullOrWhiteSpace(inline))
                        {
                            return false;
                        }
                    }

                    bool eq = false;
                    if (p.IsStatic == this.Static)
                    {
                        var getterIgnore = p.Getter != null && this.Emitter.Validator.HasAttribute(p.Getter.Attributes, "Bridge.IgnoreAttribute");
                        var setterIgnore = p.Setter != null && this.Emitter.Validator.HasAttribute(p.Setter.Attributes, "Bridge.IgnoreAttribute");
                        var getterName = p.Getter != null ? Helpers.GetPropertyRef(p, this.Emitter, false, true, true) : null;
                        var setterName = p.Setter != null ? Helpers.GetPropertyRef(p, this.Emitter, true, true, true) : null;
                        if (!getterIgnore && getterName != null && (getterName == this.JsName || getterName == this.AltJsName))
                        {
                            eq = true;
                        }
                        else if (!setterIgnore && setterName != null && (setterName == this.JsName || setterName == this.AltJsName))
                        {
                            eq = true;
                        }
                    }

                    if (eq)
                    {
                        if (p.IsOverride)
                        {
                            return false;
                        }

                        return true;
                    }

                    return false;
                });

                list.AddRange(properties);

                if (this.Inherit)
                {
                    var baseTypeDefinitions = typeDef.DirectBaseTypes.Where(t => t.Kind == typeDef.Kind);

                    foreach (var baseTypeDef in baseTypeDefinitions)
                    {
                        var result = this.GetPropertyOverloads(list, baseTypeDef.GetDefinition());
                        list.AddRange(result);
                    }
                }
            }

            return isTop ? list.Distinct().ToList() : list;
        }

        protected virtual List<IField> GetFieldOverloads(List<IField> list = null, ITypeDefinition typeDef = null)
        {
            bool isTop = list == null;
            list = list ?? new List<IField>();
            typeDef = typeDef ?? this.TypeDefinition;

            if (typeDef != null)
            {
                var fields = typeDef.Fields.Where(f =>
                {
                    var inline = this.Emitter.GetInline(f);
                    if (!string.IsNullOrWhiteSpace(inline))
                    {
                        return false;
                    }

                    var name = this.Emitter.GetEntityName(f);
                    if ((name == this.JsName || name == this.AltJsName) && f.IsStatic == this.Static)
                    {
                        return true;
                    }

                    return false;
                });

                list.AddRange(fields);

                if (this.Inherit)
                {
                    var baseTypeDefinitions = typeDef.DirectBaseTypes.Where(t => t.Kind == typeDef.Kind);

                    foreach (var baseTypeDef in baseTypeDefinitions)
                    {
                        var result = this.GetFieldOverloads(list, baseTypeDef.GetDefinition());
                        list.AddRange(result);
                    }
                }
            }

            return isTop ? list.Distinct().ToList() : list;
        }

        protected virtual List<IEvent> GetEventOverloads(List<IEvent> list = null, ITypeDefinition typeDef = null)
        {
            bool isTop = list == null;
            list = list ?? new List<IEvent>();
            typeDef = typeDef ?? this.TypeDefinition;

            if (typeDef != null)
            {
                var events = typeDef.Events.Where(e =>
                {
                    var inline = e.AddAccessor != null ? this.Emitter.GetInline(e.AddAccessor) : null;
                    if (!string.IsNullOrWhiteSpace(inline))
                    {
                        return false;
                    }

                    inline = e.RemoveAccessor != null ? this.Emitter.GetInline(e.RemoveAccessor) : null;
                    if (!string.IsNullOrWhiteSpace(inline))
                    {
                        return false;
                    }

                    bool eq = false;
                    if (e.IsStatic == this.Static)
                    {
                        var addName = e.AddAccessor != null ? Helpers.GetEventRef(e, this.Emitter, false, true, true) : null;
                        var removeName = e.RemoveAccessor != null ? Helpers.GetEventRef(e, this.Emitter, true, true, true) : null;
                        if (addName != null && (addName == this.JsName || addName == this.AltJsName))
                        {
                            eq = true;
                        }
                        else if (removeName != null && (removeName == this.JsName || removeName == this.AltJsName))
                        {
                            eq = true;
                        }
                    }

                    if (eq)
                    {
                        if (e.IsOverride)
                        {
                            return false;
                        }

                        return true;
                    }

                    return false;
                });

                list.AddRange(events);

                if (this.Inherit)
                {
                    var baseTypeDefinitions = typeDef.DirectBaseTypes.Where(t => t.Kind == typeDef.Kind);

                    foreach (var baseTypeDef in baseTypeDefinitions)
                    {
                        var result = this.GetEventOverloads(list, baseTypeDef.GetDefinition());
                        list.AddRange(result);
                    }
                }
            }

            return isTop ? list.Distinct().ToList() : list;
        }

        private string overloadName;
        public string GetOverloadName()
        {
            if (this.Member == null)
            {
                if (this.Members.Count == 1)
                {
                    this.Member = this.Members[0];
                }
                else
                {
                    return this.JsName;
                }
            }

            if (this.overloadName == null && this.Member != null)
            {
                this.overloadName = this.GetOverloadName(this.Member);
            }

            return this.overloadName;
        }

        protected virtual string GetOverloadName(IMember definition)
        {
            string name = this.Emitter.GetEntityName(definition, this.CancelChangeCase);
            if (name.StartsWith(".ctor"))
            {
                name = "constructor";
            }

            var attr = this.Emitter.GetAttribute(definition.Attributes, "Bridge.NameAttribute");

            if (attr == null && definition is IProperty)
            {
                var prop = (IProperty)definition;
                var acceessor = this.IsSetter ? prop.Setter : prop.Getter;

                if (acceessor != null)
                {
                    attr = this.Emitter.GetAttribute(acceessor.Attributes, "Bridge.NameAttribute");
                }
            }

            if (attr != null || (definition.DeclaringTypeDefinition != null && definition.DeclaringTypeDefinition.Kind != TypeKind.Interface && this.Emitter.Validator.IsIgnoreType(definition.DeclaringTypeDefinition)))
            {
                return name;
            }

            if (definition is IMethod && ((IMethod)definition).IsConstructor)
            {
                name = "constructor";
            }

            var index = this.GetIndex(definition);

            if (index > 0)
            {
                name += "$" + index;

                if (name.StartsWith("$"))
                {
                    name = name.Substring(1);
                }
            }

            if (definition.ImplementedInterfaceMembers.Count > 0)
            {
                foreach (var iMember in definition.ImplementedInterfaceMembers)
                {
                    if (OverloadsCollection.Create(this.Emitter, iMember, false, true).GetOverloadName() != name)
                    {
                        string message = "Cannot translate interface ({2}) member '{0}' in '{1}' due name conflicts. Please rename methods or refactor your code";
                        throw new Exception(string.Format(message,definition.ToString(), definition.DeclaringType.ToString(), iMember.DeclaringType.ToString()));
                    }
                }
            }

            return name;
        }

        protected virtual IMember FindMember(EntityDeclaration entity)
        {
            var rr = this.Emitter.Resolver.ResolveNode(entity, this.Emitter) as MemberResolveResult;

            if (rr != null)
            {
                return rr.Member;
            }

            return null;
        }
    }
}
