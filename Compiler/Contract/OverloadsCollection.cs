using System;
using Bridge.Contract.Constants;

using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using ITypeDefinition = ICSharpCode.NRefactory.TypeSystem.ITypeDefinition;
using Modifiers = ICSharpCode.NRefactory.CSharp.Modifiers;

namespace Bridge.Contract
{
    public class OverloadsCollection
    {
        public static OverloadsCollection Create(IEmitter emitter, FieldDeclaration fieldDeclaration)
        {
            var key = new Tuple<AstNode, bool>(fieldDeclaration, false);
            if (emitter.OverloadsCacheNodes.ContainsKey(key))
            {
                return emitter.OverloadsCacheNodes[key];
            }

            return new OverloadsCollection(emitter, fieldDeclaration);
        }

        public static OverloadsCollection Create(IEmitter emitter, EventDeclaration eventDeclaration)
        {
            var key = new Tuple<AstNode, bool>(eventDeclaration, false);
            if (emitter.OverloadsCacheNodes.ContainsKey(key))
            {
                return emitter.OverloadsCacheNodes[key];
            }

            return new OverloadsCollection(emitter, eventDeclaration);
        }

        public static OverloadsCollection Create(IEmitter emitter, CustomEventDeclaration eventDeclaration, bool remove)
        {
            var key = new Tuple<AstNode, bool>(eventDeclaration, remove);
            if (emitter.OverloadsCacheNodes.ContainsKey(key))
            {
                return emitter.OverloadsCacheNodes[key];
            }

            return new OverloadsCollection(emitter, eventDeclaration, remove);
        }

        public static OverloadsCollection Create(IEmitter emitter, MethodDeclaration methodDeclaration)
        {
            var key = new Tuple<AstNode, bool>(methodDeclaration, false);
            if (emitter.OverloadsCacheNodes.ContainsKey(key))
            {
                return emitter.OverloadsCacheNodes[key];
            }

            return new OverloadsCollection(emitter, methodDeclaration);
        }

        public static OverloadsCollection Create(IEmitter emitter, ConstructorDeclaration constructorDeclaration)
        {
            var key = new Tuple<AstNode, bool>(constructorDeclaration, false);
            if (emitter.OverloadsCacheNodes.ContainsKey(key))
            {
                return emitter.OverloadsCacheNodes[key];
            }

            return new OverloadsCollection(emitter, constructorDeclaration);
        }

        public static OverloadsCollection Create(IEmitter emitter, PropertyDeclaration propDeclaration, bool isSetter = false)
        {
            var key = new Tuple<AstNode, bool>(propDeclaration, isSetter);
            if (emitter.OverloadsCacheNodes.ContainsKey(key))
            {
                return emitter.OverloadsCacheNodes[key];
            }

            return new OverloadsCollection(emitter, propDeclaration, isSetter);
        }

        public static OverloadsCollection Create(IEmitter emitter, IndexerDeclaration indexerDeclaration, bool isSetter = false)
        {
            var key = new Tuple<AstNode, bool>(indexerDeclaration, isSetter);
            if (emitter.OverloadsCacheNodes.ContainsKey(key))
            {
                return emitter.OverloadsCacheNodes[key];
            }

            return new OverloadsCollection(emitter, indexerDeclaration, isSetter);
        }

        public static OverloadsCollection Create(IEmitter emitter, OperatorDeclaration operatorDeclaration)
        {
            var key = new Tuple<AstNode, bool>(operatorDeclaration, false);
            if (emitter.OverloadsCacheNodes.ContainsKey(key))
            {
                return emitter.OverloadsCacheNodes[key];
            }

            return new OverloadsCollection(emitter, operatorDeclaration);
        }

        public static OverloadsCollection Create(IEmitter emitter, IMember member, bool isSetter = false, bool includeInline = false)
        {
            var key = new Tuple<IMember, bool, bool>(member, isSetter, includeInline);

            if (emitter.OverloadsCacheMembers.ContainsKey(key))
            {
                return emitter.OverloadsCacheMembers[key];
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

        public string FieldJsName
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
            set;
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
            this.Emitter.OverloadsCacheNodes[new Tuple<AstNode, bool>(fieldDeclaration, false)] = this;
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
            this.Emitter.OverloadsCacheNodes[new Tuple<AstNode, bool>(eventDeclaration, false)] = this;
        }

        private OverloadsCollection(IEmitter emitter, CustomEventDeclaration eventDeclaration, bool remove)
        {
            this.Emitter = emitter;
            this.Name = eventDeclaration.Name;
            this.JsName = Helpers.GetEventRef(eventDeclaration, emitter, remove, true);
            this.AltJsName = Helpers.GetEventRef(eventDeclaration, emitter, !remove, true);
            this.FieldJsName = emitter.GetEntityName(eventDeclaration);
            this.Inherit = !eventDeclaration.HasModifier(Modifiers.Static);
            this.CancelChangeCase = true;
            this.IsSetter = remove;
            this.Static = eventDeclaration.HasModifier(Modifiers.Static);
            this.Member = this.FindMember(eventDeclaration);
            this.FieldJsName = Helpers.GetEventRef(this.Member, emitter, true, true, true, false, true); ;
            this.TypeDefinition = this.Member.DeclaringTypeDefinition;
            this.Type = this.Member.DeclaringType;
            this.InitMembers();
            this.Emitter.OverloadsCacheNodes[new Tuple<AstNode, bool>(eventDeclaration, remove)] = this;
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
            this.Emitter.OverloadsCacheNodes[new Tuple<AstNode, bool>(methodDeclaration, false)] = this;
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
            this.Emitter.OverloadsCacheNodes[new Tuple<AstNode, bool>(constructorDeclaration, false)] = this;
        }

        private OverloadsCollection(IEmitter emitter, PropertyDeclaration propDeclaration, bool isSetter)
        {
            this.Emitter = emitter;
            this.Name = propDeclaration.Name;
            this.JsName = Helpers.GetPropertyRef(propDeclaration, emitter, isSetter, true, true);
            this.AltJsName = Helpers.GetPropertyRef(propDeclaration, emitter, !isSetter, true, true);
            this.FieldJsName = propDeclaration.Getter != null && propDeclaration.Getter.Body.IsNull ? emitter.GetEntityName(propDeclaration) : null;
            this.Inherit = !propDeclaration.HasModifier(Modifiers.Static);
            this.Static = propDeclaration.HasModifier(Modifiers.Static);
            this.CancelChangeCase = !Helpers.IsFieldProperty(propDeclaration, emitter);
            this.IsSetter = isSetter;
            this.Member = this.FindMember(propDeclaration);
            var p = (IProperty)this.Member;
            this.FieldJsName = Helpers.IsAutoProperty(p) ? (Helpers.IsFieldProperty(p, this.Emitter) ? this.Emitter.GetEntityName(p) : Helpers.GetPropertyRef(p, this.Emitter, true, true, true, false, true)) : null;
            this.TypeDefinition = this.Member.DeclaringTypeDefinition;
            this.Type = this.Member.DeclaringType;
            this.InitMembers();
            this.Emitter.OverloadsCacheNodes[new Tuple<AstNode, bool>(propDeclaration, isSetter)] = this;
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
            this.Emitter.OverloadsCacheNodes[new Tuple<AstNode, bool>(indexerDeclaration, isSetter)] = this;
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
            this.Emitter.OverloadsCacheNodes[new Tuple<AstNode, bool>(operatorDeclaration, false)] = this;
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
                var p = (IProperty) member;
                this.FieldJsName = Helpers.IsAutoProperty(p) ? (Helpers.IsFieldProperty(p, this.Emitter) ? this.Emitter.GetEntityName(p) : Helpers.GetPropertyRef(p, this.Emitter, true, true, true, false, true)) : null;
            }
            else if (member is IEvent)
            {
                this.CancelChangeCase = true;
                this.JsName = Helpers.GetEventRef(member, emitter, isSetter, true, true);
                this.AltJsName = Helpers.GetEventRef(member, emitter, !isSetter, true, true);
                this.FieldJsName = Helpers.GetEventRef(member, emitter, true, true, true, false, true);
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
            this.Emitter.OverloadsCacheMembers[new Tuple<IMember, bool, bool>(member, isSetter, includeInline)] = this;
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

            while (member != null && member.IsOverride && !this.IsTemplateOverride(member))
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
                this.Properties = this.GetPropertyOverloads();
                this.Events = this.GetEventOverloads();
                this.Methods = this.GetMethodOverloads();
                this.Fields = this.GetFieldOverloads();
                

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

                var v1 = m1 is IField ? 1 : (m1 is IEvent ? 2 : (m1 is IProperty ? 3 : (m1 is IMethod ? 4 : 5)));
                var v2 = m2 is IField ? 1 : (m2 is IEvent ? 2 : (m2 is IProperty ? 3 : (m2 is IMethod ? 4 : 5)));

                if (v1 != v2)
                {
                    return v1.CompareTo(v2);
                }

                var name1 = this.MemberToString(m1);
                var name2 = this.MemberToString(m2);

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

        public virtual bool IsTemplateOverride(IMember member)
        {
            if (member.IsOverride)
            {
                member = InheritanceHelper.GetBaseMember(member);

                if (member != null)
                {
                    var inline = this.Emitter.GetInline(member);
                    bool isInline = !string.IsNullOrWhiteSpace(inline);
                    if (isInline)
                    {
                        if (member.IsOverride)
                        {
                            return this.IsTemplateOverride(member);
                        }
                        return true;
                    }
                }
            }

            return false;
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
                    if (m.IsExplicitInterfaceImplementation)
                    {
                        return false;
                    }

                    if (!this.IncludeInline)
                    {
                        var inline = this.Emitter.GetInline(m);
                        if (!string.IsNullOrWhiteSpace(inline))
                        {
                            return false;
                        }
                    }

                    var name = this.Emitter.GetEntityName(m, false, true);
                    if ((name == this.JsName || name == this.AltJsName || name == this.FieldJsName) && m.IsStatic == this.Static &&
                        ((m.IsConstructor && this.JsName == JS.Funcs.CONSTRUCTOR) || m.IsConstructor == this.Constructor))
                    {
                        if (m.IsConstructor != this.Constructor && (m.Parameters.Count > 0 || m.DeclaringTypeDefinition != this.TypeDefinition))
                        {
                            return false;
                        }

                        if (m.IsOverride && !this.IsTemplateOverride(m))
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
                    var baseTypeDefinitions = typeDef.DirectBaseTypes.Where(t => t.Kind == typeDef.Kind || (typeDef.Kind == TypeKind.Struct && t.Kind == TypeKind.Class));

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
                var bridgeType = this.Emitter.BridgeTypes.Get(typeDef);
                var monoTypeDef = bridgeType != null ? bridgeType.TypeDefinition : null;
                var properties = typeDef.Properties.Where(p =>
                {
                    if (p.IsExplicitInterfaceImplementation)
                    {
                        return false;
                    }

                    var canGet = p.CanGet && p.Getter != null;
                    var canSet = p.CanSet && p.Setter != null;

                    if (monoTypeDef != null)
                    {
                        var monoProp = monoTypeDef.Properties.FirstOrDefault(mp => mp.Name == p.Name);

                        if (monoProp != null)
                        {
                            canGet = monoProp.GetMethod != null;
                            canSet = monoProp.SetMethod != null;
                        }
                    }

                    if (!this.IncludeInline)
                    {
                        var inline = canGet ? this.Emitter.GetInline(p.Getter) : null;
                        if (!string.IsNullOrWhiteSpace(inline))
                        {
                            return false;
                        }

                        inline = canSet ? this.Emitter.GetInline(p.Setter) : null;
                        if (!string.IsNullOrWhiteSpace(inline))
                        {
                            return false;
                        }

                        if (p.IsIndexer && canGet && p.Getter.Attributes.Any(a => a.AttributeType.FullName == "Bridge.ExternalAttribute"))
                        {
                            return false;
                        }
                    }

                    bool eq = false;
                    bool? equalsByGetter = null;
                    if (p.IsStatic == this.Static)
                    {
                        var getterIgnore = canGet && this.Emitter.Validator.IsIgnoreType(p.Getter);
                        var setterIgnore = canSet && this.Emitter.Validator.IsIgnoreType(p.Setter);
                        var getterName = canGet ? Helpers.GetPropertyRef(p, this.Emitter, false, true, true) : null;
                        var setterName = canSet ? Helpers.GetPropertyRef(p, this.Emitter, true, true, true) : null;
                        var fieldName = Helpers.IsAutoProperty(p) ? (Helpers.IsFieldProperty(p, this.Emitter) ? this.Emitter.GetEntityName(p) : Helpers.GetPropertyRef(p, this.Emitter, true, true, true, false, true)) : null;

                        if (!getterIgnore && getterName != null && (getterName == this.JsName || getterName == this.AltJsName || getterName == this.FieldJsName))
                        {
                            eq = true;
                            equalsByGetter = true;
                        }
                        else if (!setterIgnore && setterName != null && (setterName == this.JsName || setterName == this.AltJsName || setterName == this.FieldJsName))
                        {
                            eq = true;
                            equalsByGetter = false;
                        }
                        else if (fieldName != null && (fieldName == this.JsName || fieldName == this.AltJsName || fieldName == this.FieldJsName))
                        {
                            eq = true;
                        }
                    }

                    if (eq)
                    {
                        if (p.IsOverride && !this.IsTemplateOverride(p))
                        {
                            return false;
                        }

                        if (equalsByGetter.HasValue && this.Member is IMethod && this.AltJsName == null)
                        {
                            this.AltJsName = Helpers.GetPropertyRef(p, this.Emitter, equalsByGetter.Value, true, true);
                        }

                        return true;
                    }

                    return false;
                });

                list.AddRange(properties);

                if (this.Inherit)
                {
                    var baseTypeDefinitions = typeDef.DirectBaseTypes.Where(t => t.Kind == typeDef.Kind || (typeDef.Kind == TypeKind.Struct && t.Kind == TypeKind.Class));

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
                    if (f.IsExplicitInterfaceImplementation)
                    {
                        return false;
                    }

                    var inline = this.Emitter.GetInline(f);
                    if (!string.IsNullOrWhiteSpace(inline))
                    {
                        return false;
                    }

                    var name = this.Emitter.GetEntityName(f);
                    if ((name == this.JsName || name == this.AltJsName || name == this.FieldJsName) && f.IsStatic == this.Static)
                    {
                        return true;
                    }

                    return false;
                });

                list.AddRange(fields);

                if (this.Inherit)
                {
                    var baseTypeDefinitions = typeDef.DirectBaseTypes.Where(t => t.Kind == typeDef.Kind || (typeDef.Kind == TypeKind.Struct && t.Kind == TypeKind.Class));

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
                    if (e.IsExplicitInterfaceImplementation)
                    {
                        return false;
                    }

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
                    bool? equalsByAdd = null;
                    if (e.IsStatic == this.Static)
                    {
                        var addName = e.AddAccessor != null && e.CanAdd ? Helpers.GetEventRef(e, this.Emitter, false, true, true) : null;
                        var removeName = e.RemoveAccessor != null && e.CanRemove ? Helpers.GetEventRef(e, this.Emitter, true, true, true) : null;
                        var fieldName = Helpers.GetEventRef(e, this.Emitter, true, true, true, false, true);
                        if (addName != null && (addName == this.JsName || addName == this.AltJsName || addName == this.FieldJsName))
                        {
                            eq = true;
                            equalsByAdd = true;
                        }
                        else if (removeName != null && (removeName == this.JsName || removeName == this.AltJsName || removeName == this.FieldJsName))
                        {
                            eq = true;
                            equalsByAdd = false;
                        }
                        else if (fieldName != null && (fieldName == this.JsName || fieldName == this.AltJsName || fieldName == this.FieldJsName))
                        {
                            eq = true;
                        }
                    }

                    if (eq)
                    {
                        if (e.IsOverride && !this.IsTemplateOverride(e))
                        {
                            return false;
                        }

                        if (equalsByAdd.HasValue && this.Member is IMethod && this.AltJsName == null)
                        {
                            this.AltJsName = Helpers.GetEventRef(e, this.Emitter, equalsByAdd.Value, true, true);
                        }

                        return true;
                    }

                    return false;
                });

                list.AddRange(events);

                if (this.Inherit)
                {
                    var baseTypeDefinitions = typeDef.DirectBaseTypes.Where(t => t.Kind == typeDef.Kind || (typeDef.Kind == TypeKind.Struct && t.Kind == TypeKind.Class));

                    foreach (var baseTypeDef in baseTypeDefinitions)
                    {
                        var result = this.GetEventOverloads(list, baseTypeDef.GetDefinition());
                        list.AddRange(result);
                    }
                }
            }

            return isTop ? list.Distinct().ToList() : list;
        }

        private Dictionary<Tuple<bool, string, bool>, string> overloadName = new Dictionary<Tuple<bool, string, bool>, string>();

        public string GetOverloadName(bool skipInterfaceName = false, string prefix = null, bool withoutTypeParams = false)
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

            var key = new Tuple<bool, string, bool>(skipInterfaceName, prefix, withoutTypeParams);
            string name = null;
            var contains = this.overloadName.ContainsKey(key);
            if (!contains && this.Member != null)
            {
                name = this.GetOverloadName(this.Member, skipInterfaceName, prefix, withoutTypeParams);
                this.overloadName[key] = name;
            }
            else if(contains)
            {
                name = this.overloadName[key];
            }

            return name;
        }

        public static string NormalizeInterfaceName(string interfaceName)
        {
            return Regex.Replace(interfaceName, @"[\.\(\)\,]", JS.Vars.D.ToString());
        }

        public static string GetInterfaceMemberName(IEmitter emitter, IMember interfaceMember, string name, string prefix, bool withoutTypeParams = false, bool isSetter = false)
        {
            var interfaceMemberName = name ?? OverloadsCollection.Create(emitter, interfaceMember, isSetter).GetOverloadName(true, prefix);
            var interfaceName = BridgeTypes.ToJsName(interfaceMember.DeclaringType, emitter, withoutTypeParams, false, true);

            if (interfaceName.StartsWith("\""))
            {
                if (interfaceName.EndsWith(")"))
                {
                    return interfaceName + " + \"" + JS.Vars.D + interfaceMemberName + "\"";
                }

                if (interfaceName.EndsWith("\""))
                {
                    interfaceName = interfaceName.Substring(0, interfaceName.Length - 1);
                }

                return interfaceName + JS.Vars.D + interfaceMemberName + "\"";
            }

            return interfaceName + (interfaceName.EndsWith(JS.Vars.D.ToString()) ? "" : JS.Vars.D.ToString()) + interfaceMemberName;
        }

        public static bool NeedCreateAlias(MemberResolveResult rr)
        {
            if (rr == null || rr.Member.ImplementedInterfaceMembers.Count == 0)
            {
                return false;
            }

            if (rr.Member.IsExplicitInterfaceImplementation)
            {
                var explicitInterfaceMember = rr.Member.ImplementedInterfaceMembers.First();
                var typeDef = explicitInterfaceMember.DeclaringTypeDefinition;
                var type = explicitInterfaceMember.DeclaringType;

                return typeDef != null && !Helpers.IsIgnoreGeneric(typeDef) && type != null && type.TypeArguments.Count > 0 && Helpers.IsTypeParameterType(type);
            }

            return true;
        }

        protected virtual string GetOverloadName(IMember definition, bool skipInterfaceName = false, string prefix = null, bool withoutTypeParams = false)
        {
            IMember interfaceMember = null;
            if (definition.IsExplicitInterfaceImplementation)
            {
                interfaceMember = definition.ImplementedInterfaceMembers.First();
            }
            else if (definition.DeclaringTypeDefinition != null && definition.DeclaringTypeDefinition.Kind == TypeKind.Interface)
            {
                interfaceMember = definition;
            }

            if (interfaceMember != null && !skipInterfaceName && !this.Emitter.Validator.IsObjectLiteral(interfaceMember.DeclaringTypeDefinition))
            {
                return OverloadsCollection.GetInterfaceMemberName(this.Emitter, interfaceMember, null, prefix, withoutTypeParams, this.IsSetter);
            }

            string name = this.Emitter.GetEntityName(definition, this.CancelChangeCase);
            if (name.StartsWith(".ctor"))
            {
                name = JS.Funcs.CONSTRUCTOR;
            }

            var attr = Helpers.GetInheritedAttribute(definition, "Bridge.NameAttribute");

            if (attr == null && definition is IProperty)
            {
                var prop = (IProperty)definition;
                var acceessor = this.IsSetter ? prop.Setter : prop.Getter;

                if (acceessor != null)
                {
                    attr = Helpers.GetInheritedAttribute(acceessor, "Bridge.NameAttribute");
                }
            }

            if (attr != null)
            {
                var value = attr.PositionalArguments.First().ConstantValue;
                if (value is string)
                {
                    name = value.ToString();
                }

                prefix = null;
            }

            if (attr != null && definition.ImplementedInterfaceMembers.Count > 0)
            {
                if (this.Members.Where(member => member.ImplementedInterfaceMembers.Count > 0)
                        .Any(member => definition.ImplementedInterfaceMembers.Any(implementedInterfaceMember => member.ImplementedInterfaceMembers.Any(m => m.DeclaringTypeDefinition == implementedInterfaceMember.DeclaringTypeDefinition))))
                {
                    attr = null;
                }
            }

            if (attr != null || (definition.DeclaringTypeDefinition != null && definition.DeclaringTypeDefinition.Kind != TypeKind.Interface && this.Emitter.Validator.IsIgnoreType(definition.DeclaringTypeDefinition)))
            {
                return prefix != null ? prefix + name : name;
            }

            var isCtor = definition is IMethod && ((IMethod)definition).IsConstructor;
            if (isCtor)
            {
                name = JS.Funcs.CONSTRUCTOR;
            }

            var index = this.GetIndex(definition);

            if (index > 0)
            {
                if (isCtor)
                {
                    name = JS.Vars.D + name + index;
                }
                else
                {
                    name += Helpers.PrefixDollar(index);
                    name = Helpers.ReplaceFirstDollar(name);
                }
            }

            return prefix != null ? prefix + name : name;
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