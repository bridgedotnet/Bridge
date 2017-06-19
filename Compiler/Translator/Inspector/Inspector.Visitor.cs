using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.Translator
{
    public partial class Inspector : Visitor
    {
        public override void VisitSyntaxTree(SyntaxTree node)
        {
            node.AcceptChildren(this);
        }

        public override void VisitUsingDeclaration(UsingDeclaration usingDeclaration)
        {
        }

        public override void VisitNamespaceDeclaration(NamespaceDeclaration namespaceDeclaration)
        {
            if (!String.IsNullOrEmpty(this.Namespace))
            {
                //throw (EmitterException)this.CreateException(namespaceDeclaration, "Nested namespaces are not supported");
            }

            if (!this.AssemblyInfo.Assembly.EnableReservedNamespaces)
            {
                ValidateNamespace(namespaceDeclaration);
            }

            var prevNamespace = this.Namespace;

            this.Namespace = namespaceDeclaration.Name;

            namespaceDeclaration.AcceptChildren(this);

            this.Namespace = prevNamespace;
        }

        public override void VisitTypeDeclaration(TypeDeclaration typeDeclaration)
        {
            if (this.CurrentType != null)
            {
                this.NestedTypes = this.NestedTypes ?? new List<Tuple<TypeDeclaration, ITypeInfo>>();
                this.NestedTypes.Add(new Tuple<TypeDeclaration, ITypeInfo>(typeDeclaration, this.CurrentType));
                return;
            }

            ValidateNamespace(typeDeclaration);

            var rr = this.Resolver.ResolveNode(typeDeclaration, null);
            var fullName = rr.Type.ReflectionName;
            var partialType = this.Types.FirstOrDefault(t => t.Key == fullName);
            var add = true;
            var ignored = this.IgnoredTypes.Contains(fullName);
            var external = this.HasExternal(typeDeclaration);

            if (!external)
            {
                var resolveResult = this.Resolver.ResolveNode(typeDeclaration, null);
                if (resolveResult != null && resolveResult.Type != null)
                {
                    var def = resolveResult.Type.GetDefinition();
                    external = def != null && def.ParentAssembly.AssemblyAttributes.Any(a => a.AttributeType.FullName == "Bridge.ExternalAttribute");
                }
            }

            if ((external || ignored || this.IsNonScriptable(typeDeclaration)) && !this.IsObjectLiteral(typeDeclaration))
            {
                if (partialType != null)
                {
                    this.Types.Remove(partialType);
                }

                if (!ignored)
                {
                    this.IgnoredTypes.Add(fullName);
                }

                return;
            }

            if (partialType == null)
            {
                ITypeInfo parentTypeInfo = null;
                var parentTypeDeclaration = typeDeclaration.GetParent<TypeDeclaration>();
                if (parentTypeDeclaration != null)
                {
                    var rr1 = this.Resolver.ResolveNode(parentTypeDeclaration, null);
                    var parentName = rr1.Type.ReflectionName;
                    parentTypeInfo = this.Types.FirstOrDefault(t => t.Key == parentName);
                }

                this.CurrentType = new TypeInfo()
                {
                    Key = rr.Type.ReflectionName,
                    TypeDeclaration = typeDeclaration,
                    ParentType = parentTypeInfo,
                    Name = typeDeclaration.Name,
                    ClassType = typeDeclaration.ClassType,
                    Namespace = this.Namespace,
                    IsEnum = typeDeclaration.ClassType == ClassType.Enum,
                    IsStatic = typeDeclaration.ClassType == ClassType.Enum || typeDeclaration.HasModifier(Modifiers.Static),
                    IsObjectLiteral = this.IsObjectLiteral(typeDeclaration),
                    Type = rr.Type
                };

                if (parentTypeInfo != null && JS.Reserved.StaticNames.Any(n => String.Equals(this.CurrentType.Name, n, StringComparison.InvariantCultureIgnoreCase)))
                {
                    throw new EmitterException(typeDeclaration, "Nested class cannot have such name: " + this.CurrentType.Name + ". Please rename it.");
                }
            }
            else
            {
                this.CurrentType = partialType;
                this.CurrentType.PartialTypeDeclarations.Add(typeDeclaration);
                add = false;
            }

            if (typeDeclaration.ClassType != ClassType.Interface)
            {
                typeDeclaration.AcceptChildren(this);
            }
            else
            {
                typeDeclaration.AcceptChildren(this);
            }

            if (add)
            {
                this.Types.Add(this.CurrentType);
            }

            if (typeDeclaration.ClassType != ClassType.Interface)
            {
                this.AddMissingAliases(typeDeclaration);
            }

            this.CurrentType = null;

            while (this.NestedTypes != null && this.NestedTypes.Count > 0)
            {
                var types = this.NestedTypes;
                this.NestedTypes = null;
                foreach (var nestedType in types)
                {
                    this.VisitTypeDeclaration(nestedType.Item1);
                }
            }
        }

        private void AddMissingAliases(TypeDeclaration typeDeclaration)
        {
            var type = this.Resolver.ResolveNode(typeDeclaration, null).Type;
            var interfaces = type.DirectBaseTypes.Where(t => t.Kind == TypeKind.Interface).ToArray();
            var members = type.GetMembers(null, GetMemberOptions.IgnoreInheritedMembers).ToArray();
            var baseTypes = type.GetNonInterfaceBaseTypes().ToArray().Reverse();

            if (interfaces.Length > 0)
            {
                foreach (var baseInterface in interfaces)
                {
                    var interfaceMembers = baseInterface.GetMembers().Where(m => m.DeclaringTypeDefinition.Kind == TypeKind.Interface);
                    foreach (var interfaceMember in interfaceMembers)
                    {
                        var isDirectlyImplemented = members.Any(m => m.ImplementedInterfaceMembers.Contains(interfaceMember));
                        if (!isDirectlyImplemented)
                        {
                            foreach (var baseType in baseTypes)
                            {
                                //var derivedMember = InheritanceHelper.GetDerivedMember(interfaceMember, baseType.GetDefinition());
                                IMember derivedMember = null;
                                IEnumerable<IMember> baseMembers;
                                if (interfaceMember.SymbolKind == SymbolKind.Accessor)
                                {
                                    baseMembers = baseType.GetAccessors(m => m.Name == interfaceMember.Name && !m.IsExplicitInterfaceImplementation, GetMemberOptions.IgnoreInheritedMembers);
                                }
                                else
                                {
                                    baseMembers = baseType.GetMembers(m => m.Name == interfaceMember.Name && !m.IsExplicitInterfaceImplementation, GetMemberOptions.IgnoreInheritedMembers);
                                }

                                foreach (IMember baseMember in baseMembers)
                                {
                                    if (baseMember.IsPrivate)
                                    {
                                        continue;
                                    }
                                    if (SignatureComparer.Ordinal.Equals(interfaceMember, baseMember))
                                    {
                                        derivedMember = baseMember.Specialize(interfaceMember.Substitution);
                                        break;
                                    }
                                }

                                if (derivedMember != null && !derivedMember.ImplementedInterfaceMembers.Contains(interfaceMember))
                                {
                                    this.CurrentType.InstanceConfig.Alias.Add(new TypeConfigItem { Entity = typeDeclaration, InterfaceMember = interfaceMember, DerivedMember = derivedMember });
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }

        public override void VisitFieldDeclaration(FieldDeclaration fieldDeclaration)
        {
            bool isStatic = this.CurrentType.ClassType == ClassType.Enum
                || fieldDeclaration.HasModifier(Modifiers.Static)
                || fieldDeclaration.HasModifier(Modifiers.Const);

            foreach (var item in fieldDeclaration.Variables)
            {
                var rr = this.Resolver.ResolveNode(item, null) as MemberResolveResult;
                if (fieldDeclaration.HasModifier(Modifiers.Const) && rr != null && rr.Member.Attributes.Any(a => a.AttributeType.FullName == Bridge.Translator.Translator.Bridge_ASSEMBLY + ".InlineConstAttribute"))
                {
                    continue;
                }

                Expression initializer = item.Initializer;

                if (initializer.IsNull)
                {
                    if (this.CurrentType.ClassType == ClassType.Enum)
                    {
                        throw (EmitterException)this.CreateException(fieldDeclaration, "Enum items must be explicitly numbered");
                    }

                    initializer = this.GetDefaultFieldInitializer(fieldDeclaration.ReturnType);
                }

                this.CurrentType.FieldsDeclarations.Add(item.Name, fieldDeclaration);

                string prefix = SharpSixRewriter.AutoInitFieldPrefix;
                bool autoInitializer = item.Name.StartsWith(prefix);
                string name = autoInitializer ? item.Name.Substring(prefix.Length) : item.Name;

                if (isStatic)
                {
                    var collection = this.CurrentType.StaticConfig.Fields;
                    if (autoInitializer)
                    {
                        collection = this.CurrentType.StaticConfig.AutoPropertyInitializers;
                        var prop = this.CurrentType.StaticConfig.Properties.FirstOrDefault(p => p.Name == name);

                        if (prop == null)
                        {
                            prop = this.CurrentType.StaticConfig.Fields.FirstOrDefault(p => p.Name == name);
                        }

                        if (prop != null)
                        {
                            prop.Initializer = initializer;
                            prop.IsPropertyInitializer = true;
                        }
                    }

                    collection.Add(new TypeConfigItem
                    {
                        Name = name,
                        Entity = fieldDeclaration,
                        IsConst = fieldDeclaration.HasModifier(Modifiers.Const),
                        VarInitializer = item,
                        Initializer = initializer
                    });
                }
                else
                {
                    var collection = this.CurrentType.InstanceConfig.Fields;
                    if (autoInitializer)
                    {
                        collection = this.CurrentType.InstanceConfig.AutoPropertyInitializers;
                        var prop = this.CurrentType.InstanceConfig.Properties.FirstOrDefault(p => p.Name == name);

                        if (prop == null)
                        {
                            prop = this.CurrentType.InstanceConfig.Fields.FirstOrDefault(p => p.Name == name);
                        }

                        if (prop != null)
                        {
                            prop.Initializer = initializer;
                            prop.IsPropertyInitializer = true;
                        }
                    }

                    collection.Add(new TypeConfigItem
                    {
                        Name = name,
                        Entity = fieldDeclaration,
                        VarInitializer = item,
                        Initializer = initializer
                    });
                }

                if (OverloadsCollection.NeedCreateAlias(rr))
                {
                    var config = isStatic
                    ? CurrentType.StaticConfig
                    : CurrentType.InstanceConfig;
                    config.Alias.Add(new TypeConfigItem { Entity = fieldDeclaration, VarInitializer = item });
                }
            }
        }

        public override void VisitConstructorDeclaration(ConstructorDeclaration constructorDeclaration)
        {
            if (this.HasTemplate(constructorDeclaration) || constructorDeclaration.HasModifier(Modifiers.Extern) && !this.HasScript(constructorDeclaration))
            {
                return;
            }

            bool isStatic = constructorDeclaration.HasModifier(Modifiers.Static);

            this.FixMethodParameters(constructorDeclaration.Parameters, constructorDeclaration.Body);

            if (isStatic)
            {
                this.CurrentType.StaticCtor = constructorDeclaration;
            }
            else
            {
                this.CurrentType.Ctors.Add(constructorDeclaration);
            }
        }

        public override void VisitOperatorDeclaration(OperatorDeclaration operatorDeclaration)
        {
            if (this.HasTemplate(operatorDeclaration))
            {
                return;
            }

            this.FixMethodParameters(operatorDeclaration.Parameters, operatorDeclaration.Body);

            Dictionary<OperatorType, List<OperatorDeclaration>> dict = this.CurrentType.Operators;

            var key = operatorDeclaration.OperatorType;
            if (dict.ContainsKey(key))
            {
                dict[key].Add(operatorDeclaration);
            }
            else
            {
                dict.Add(key, new List<OperatorDeclaration>(new[] { operatorDeclaration }));
            }
        }

        public override void VisitIndexerDeclaration(IndexerDeclaration indexerDeclaration)
        {
            if (indexerDeclaration.HasModifier(Modifiers.Abstract))
            {
                return;
            }

            IDictionary<string, List<EntityDeclaration>> dict = CurrentType.InstanceProperties;

            var key = indexerDeclaration.Name;

            if (dict.ContainsKey(key))
            {
                dict[key].Add(indexerDeclaration);
            }
            else
            {
                dict.Add(key, new List<EntityDeclaration>(new[] { indexerDeclaration }));
            }

            var rr = this.Resolver.ResolveNode(indexerDeclaration, null) as MemberResolveResult;
            if (OverloadsCollection.NeedCreateAlias(rr))
            {
                var config = rr.Member.IsStatic
                ? CurrentType.StaticConfig
                : CurrentType.InstanceConfig;
                config.Alias.Add(new TypeConfigItem { Entity = indexerDeclaration });
            }
        }

        public override void VisitMethodDeclaration(MethodDeclaration methodDeclaration)
        {
            if (methodDeclaration.HasModifier(Modifiers.Abstract) || this.HasTemplate(methodDeclaration))
            {
                return;
            }

            this.FixMethodParameters(methodDeclaration.Parameters, methodDeclaration.Body);

            bool isStatic = methodDeclaration.HasModifier(Modifiers.Static);

            Dictionary<string, List<MethodDeclaration>> dict = isStatic
                ? CurrentType.StaticMethods
                : CurrentType.InstanceMethods;

            var key = methodDeclaration.Name;

            if (dict.ContainsKey(key))
            {
                dict[key].Add(methodDeclaration);
            }
            else
            {
                dict.Add(key, new List<MethodDeclaration>(new[] { methodDeclaration }));
            }

            var memberrr = Resolver.ResolveNode(methodDeclaration, null) as MemberResolveResult;

            if (OverloadsCollection.NeedCreateAlias(memberrr))
            {
                var config = isStatic
                ? CurrentType.StaticConfig
                : CurrentType.InstanceConfig;
                config.Alias.Add(new TypeConfigItem { Entity = methodDeclaration });
            }
        }

        public override void VisitCustomEventDeclaration(CustomEventDeclaration customEventDeclaration)
        {
            if (customEventDeclaration.HasModifier(Modifiers.Abstract))
            {
                return;
            }

            bool isStatic = customEventDeclaration.HasModifier(Modifiers.Static);

            IDictionary<string, List<EntityDeclaration>> dict = isStatic
                ? CurrentType.StaticProperties
                : CurrentType.InstanceProperties;

            var key = customEventDeclaration.Name;

            if (dict.ContainsKey(key))
            {
                dict[key].Add(customEventDeclaration);
            }
            else
            {
                dict.Add(key, new List<EntityDeclaration>(new[] { customEventDeclaration }));
            }

            var rr = this.Resolver.ResolveNode(customEventDeclaration, null) as MemberResolveResult;
            if (OverloadsCollection.NeedCreateAlias(rr))
            {
                var config = rr.Member.IsStatic
                ? CurrentType.StaticConfig
                : CurrentType.InstanceConfig;
                config.Alias.Add(new TypeConfigItem { Entity = customEventDeclaration });
            }
        }

        public override void VisitPropertyDeclaration(PropertyDeclaration propertyDeclaration)
        {
            if (propertyDeclaration.HasModifier(Modifiers.Abstract))
            {
                return;
            }

            bool isStatic = propertyDeclaration.HasModifier(Modifiers.Static);

            IDictionary<string, List<EntityDeclaration>> dict = isStatic
                ? CurrentType.StaticProperties
                : CurrentType.InstanceProperties;

            var key = propertyDeclaration.Name;

            if (dict.ContainsKey(key))
            {
                dict[key].Add(propertyDeclaration);
            }
            else
            {
                dict.Add(key, new List<EntityDeclaration>(new[] { propertyDeclaration }));
            }

            var rr = this.Resolver.ResolveNode(propertyDeclaration, null) as MemberResolveResult;
            if (OverloadsCollection.NeedCreateAlias(rr))
            {
                var config = rr.Member.IsStatic
                ? CurrentType.StaticConfig
                : CurrentType.InstanceConfig;
                config.Alias.Add(new TypeConfigItem { Entity = propertyDeclaration });
            }

            if (!this.HasExternal(propertyDeclaration)
                && !this.HasTemplate(propertyDeclaration.Getter))
            {
                Expression initializer = this.GetDefaultFieldInitializer(propertyDeclaration.ReturnType);
                TypeConfigInfo info = isStatic ? this.CurrentType.StaticConfig : this.CurrentType.InstanceConfig;

                bool autoPropertyToField = false;
                if (rr != null && rr.Member != null && Helpers.IsAutoProperty((IProperty)rr.Member))
                {
                    autoPropertyToField = this.HasFieldAttribute(rr.Member);

                    if (!autoPropertyToField && rr.Member.ImplementedInterfaceMembers.Count > 0)
                    {
                        foreach (var interfaceMember in rr.Member.ImplementedInterfaceMembers)
                        {
                            autoPropertyToField = this.HasFieldAttribute(interfaceMember, false);

                            if (autoPropertyToField)
                            {
                                break;
                            }
                        }
                    }
                }

                var autoInitializer = info.AutoPropertyInitializers.FirstOrDefault(f => f.Name == key);

                if (autoInitializer != null)
                {
                    initializer = autoInitializer.Initializer;
                }

                if (!autoPropertyToField)
                {
                    info.Properties.Add(new TypeConfigItem
                    {
                        Name = key,
                        Entity = propertyDeclaration,
                        Initializer = initializer,
                        IsPropertyInitializer = autoInitializer != null
                    });
                }
                else
                {
                    info.Fields.Add(new TypeConfigItem
                    {
                        Name = key,
                        Entity = propertyDeclaration,
                        Initializer = initializer
                    });
                }
            }
        }

        private bool HasFieldAttribute(IMember member, bool checkAssembly = true)
        {
            var fieldAttributeName = "Bridge.FieldAttribute";
            var autoPropertyToField = member.Attributes.Any(a => a.AttributeType.FullName == fieldAttributeName);

            if (!autoPropertyToField)
            {
                autoPropertyToField = member.DeclaringTypeDefinition.Attributes.Any(a => a.AttributeType.FullName == fieldAttributeName);
            }

            if (!autoPropertyToField && checkAssembly)
            {
                autoPropertyToField = member.DeclaringTypeDefinition.ParentAssembly.AssemblyAttributes.Any(a => a.AttributeType.FullName == fieldAttributeName);
            }

            return autoPropertyToField;
        }

        private void CheckFieldProperty(PropertyDeclaration propertyDeclaration, MemberResolveResult resolvedProperty)
        {
            if (this.HasExternal(propertyDeclaration) || this.CurrentType.IsObjectLiteral)
            {
                return;
            }

            if (resolvedProperty != null && resolvedProperty.Member != null)
            {
                var possiblyWrongGetter = !propertyDeclaration.Getter.IsNull
                        && !propertyDeclaration.Getter.Body.IsNull
                        && !this.HasTemplate(propertyDeclaration.Getter)
                        && !this.HasScript(propertyDeclaration.Getter);

                var possiblyWrongSetter = !propertyDeclaration.Setter.IsNull
                    && !propertyDeclaration.Setter.Body.IsNull
                    && !this.HasTemplate(propertyDeclaration.Setter)
                    && !this.HasScript(propertyDeclaration.Setter);

                if (possiblyWrongGetter || possiblyWrongSetter)
                {
                    var message = string.Format(
                            Bridge.Translator.Constants.Messages.Exceptions.FIELD_PROPERTY_MARKED_ADVISE,
                            resolvedProperty.Member.ToString(),
                            possiblyWrongGetter ? "getter" : string.Empty,
                            possiblyWrongSetter ? (possiblyWrongGetter ? " and " : string.Empty) + "setter" : string.Empty
                        );

                    throw new EmitterException(propertyDeclaration, message);
                }
            }
        }

        public override void VisitDelegateDeclaration(DelegateDeclaration delegateDeclaration)
        {
        }

        public override void VisitEnumMemberDeclaration(EnumMemberDeclaration enumMemberDeclaration)
        {
            Expression initializer = enumMemberDeclaration.Initializer;
            var member = this.Resolver.ResolveNode(enumMemberDeclaration, null) as MemberResolveResult;
            var initializerIsString = false;
            if (member != null)
            {
                var enumMode = Helpers.EnumEmitMode(member.Member.DeclaringTypeDefinition);

                if (enumMode >= 3 && enumMode < 7)
                {
                    initializerIsString = true;
                    string enumStringName = member.Member.Name;
                    var attr = Helpers.GetInheritedAttribute(member.Member, Translator.Bridge_ASSEMBLY + ".NameAttribute");

                    if (attr != null)
                    {
                        var value = attr.PositionalArguments.First().ConstantValue;
                        string name = null;
                        if (value is string)
                        {
                            name = value.ToString();
                            name = Helpers.ConvertNameTokens(name, enumStringName);
                        }
                        else if (value is bool)
                        {
                            name = (bool)value ? Object.Net.Utilities.StringUtils.ToLowerCamelCase(member.Member.Name) : member.Member.Name;
                        }

                        if (member.Member.IsStatic && Helpers.IsReservedStaticName(name))
                        {
                            name = Helpers.ChangeReservedWord(name);
                        }
                        initializer = new PrimitiveExpression(name);
                    }
                    else
                    {
                        switch (enumMode)
                        {
                            case 3:
                                enumStringName = Object.Net.Utilities.StringUtils.ToLowerCamelCase(member.Member.Name);
                                break;

                            case 4:
                                break;

                            case 5:
                                enumStringName = enumStringName.ToLowerInvariant();
                                break;

                            case 6:
                                enumStringName = enumStringName.ToUpperInvariant();
                                break;
                        }

                        initializer = new PrimitiveExpression(enumStringName);
                    }
                }
            }

            if (!initializerIsString)
            {
                if (enumMemberDeclaration.Initializer.IsNull)
                {
                    dynamic i = this.CurrentType.LastEnumValue;
                    ++i;
                    this.CurrentType.LastEnumValue = i;

                    if (member != null && member.Member.DeclaringTypeDefinition.EnumUnderlyingType.IsKnownType(KnownTypeCode.Int64))
                    {
                        initializer = new PrimitiveExpression(Convert.ToInt64(this.CurrentType.LastEnumValue));
                    }
                    else if (member != null && member.Member.DeclaringTypeDefinition.EnumUnderlyingType.IsKnownType(KnownTypeCode.UInt64))
                    {
                        initializer = new PrimitiveExpression(Convert.ToUInt64(this.CurrentType.LastEnumValue));
                    }
                    else
                    {
                        initializer = new PrimitiveExpression(this.CurrentType.LastEnumValue);
                    }
                }
                else
                {
                    var rr = this.Resolver.ResolveNode(enumMemberDeclaration.Initializer, null) as ConstantResolveResult;
                    if (rr != null)
                    {
                        if (member != null && member.Member.DeclaringTypeDefinition.EnumUnderlyingType.IsKnownType(KnownTypeCode.Int64))
                        {
                            initializer = new PrimitiveExpression(Convert.ToInt64(rr.ConstantValue));
                        }
                        else if (member != null && member.Member.DeclaringTypeDefinition.EnumUnderlyingType.IsKnownType(KnownTypeCode.UInt64))
                        {
                            initializer = new PrimitiveExpression(Convert.ToUInt64(rr.ConstantValue));
                        }
                        else
                        {
                            initializer = new PrimitiveExpression(rr.ConstantValue);
                        }
                        this.CurrentType.LastEnumValue = rr.ConstantValue;
                    }
                }
            }

            this.CurrentType.StaticConfig.Fields.Add(new TypeConfigItem
            {
                Name = enumMemberDeclaration.Name,
                Entity = enumMemberDeclaration,
                Initializer = initializer
            });
        }

        public override void VisitEventDeclaration(EventDeclaration eventDeclaration)
        {
            bool isStatic = eventDeclaration.HasModifier(Modifiers.Static);
            foreach (var item in eventDeclaration.Variables)
            {
                Expression initializer = item.Initializer;
                this.CurrentType.EventsDeclarations.Add(item.Name, eventDeclaration);
                if (isStatic)
                {
                    this.CurrentType.StaticConfig.Events.Add(new TypeConfigItem
                    {
                        Name = item.Name,
                        Entity = eventDeclaration,
                        Initializer = initializer,
                        VarInitializer = item
                    });
                }
                else
                {
                    this.CurrentType.InstanceConfig.Events.Add(new TypeConfigItem
                    {
                        Name = item.Name,
                        Entity = eventDeclaration,
                        Initializer = initializer,
                        VarInitializer = item
                    });
                }

                var rr = this.Resolver.ResolveNode(item, null) as MemberResolveResult;
                if (OverloadsCollection.NeedCreateAlias(rr))
                {
                    var config = rr.Member.IsStatic
                    ? CurrentType.StaticConfig
                    : CurrentType.InstanceConfig;
                    config.Alias.Add(new TypeConfigItem { Entity = eventDeclaration, VarInitializer = item });
                }
            }
        }

        public override void VisitAttributeSection(AttributeSection attributeSection)
        {
            if (attributeSection.AttributeTarget != "assembly")
            {
                return;
            }

            foreach (var attr in attributeSection.Attributes)
            {
                var name = attr.Type.ToString();
                var resolveResult = this.Resolver.ResolveNode(attr, null);

                this.ReadModuleInfo(attr, name, resolveResult);
                this.ReadFileNameInfo(attr, name, resolveResult);
                this.ReadOutputPathInfo(attr, name, resolveResult);
                this.ReadOutputByInfo(attr, name, resolveResult);
                this.ReadModuleDependency(attr, name, resolveResult);
                this.ReadReflectionInfo(attr, name, resolveResult);
            }
        }

        protected virtual bool ReadReflectionInfo(ICSharpCode.NRefactory.CSharp.Attribute attr, string name, ResolveResult resolveResult)
        {
            if (resolveResult != null && resolveResult.Type != null && resolveResult.Type.FullName == Translator.Bridge_ASSEMBLY + ".ReflectableAttribute")
            {
                var config = ((AssemblyInfo)this.AssemblyInfo).ReflectionInternal;

                if (attr.Arguments.Count > 0)
                {
                    if (attr.Arguments.Count > 1)
                    {
                        var list = new List<MemberAccessibility>();
                        for (int i = 0; i < attr.Arguments.Count; i++)
                        {
                            object v = this.GetAttributeArgumentValue(attr, resolveResult, i);
                            list.Add((MemberAccessibility)(int)v);
                        }

                        config.MemberAccessibility = list.ToArray();
                    }
                    else
                    {
                        object v = this.GetAttributeArgumentValue(attr, resolveResult, 0);

                        if (v is bool)
                        {
                            config.Disabled = !(bool)v;
                        }
                        else if (v is string)
                        {
                            if (string.IsNullOrEmpty(config.Filter))
                            {
                                config.Filter = v.ToString();
                            }
                            else
                            {
                                config.Filter += ";" + v.ToString();
                            }
                        }
                        else if (v is int)
                        {
                            IType t = this.GetAttributeArgumentType(attr, resolveResult, 0);

                            if (t.FullName == "Bridge.TypeAccessibility")
                            {
                                config.TypeAccessibility = (TypeAccessibility)(int)v;
                            }
                            else
                            {
                                config.MemberAccessibility = new[] { (MemberAccessibility)(int)v };
                            }
                        }
                        else if (v is int[])
                        {
                            config.MemberAccessibility = ((int[])v).Cast<MemberAccessibility>().ToArray();
                        }
                    }
                }
                else
                {
                    config.Disabled = false;
                }

                return true;
            }

            return false;
        }

        protected virtual bool ReadModuleInfo(ICSharpCode.NRefactory.CSharp.Attribute attr, string name, ResolveResult resolveResult)
        {
            if ((name == (Translator.Bridge_ASSEMBLY + ".Module")) ||
                (resolveResult != null && resolveResult.Type != null && resolveResult.Type.FullName == (Translator.Bridge_ASSEMBLY + ".ModuleAttribute")))
            {
                Module module = null;
                var args = ((InvocationResolveResult) resolveResult).Arguments.Select(a=> a.ConstantValue).ToList();
                var positionArgs =
                    ((InvocationResolveResult) resolveResult).InitializerStatements.Select(s => new
                    {
                        Name = ((MemberResolveResult)((OperatorResolveResult)s).Operands[0]).Member.Name,
                        Value = ((OperatorResolveResult)s).Operands[1].ConstantValue
                    }).ToList();
                
                if (args.Count == 1)
                {
                    var obj = args[0];

                    if (obj is bool)
                    {
                        module = new Module((bool)obj);
                    }
                    else if (obj is string)
                    {
                        module = new Module(obj.ToString());
                    }
                    else if (obj is int)
                    {
                        module = new Module("", (ModuleType)(int)obj);
                    }
                    else
                    {
                        module = new Module();
                    }
                }
                else if (args.Count == 2)
                {
                    var first = args[0];
                    var second = args[1];

                    if (first is string)
                    {
                        var mname = first;
                        var preventName = second;

                        module = new Module(mname != null ? mname.ToString() : "", (bool)preventName);
                    }
                    else if (second is bool)
                    {
                        var mtype = first;
                        var preventName = second;

                        module = new Module("", (ModuleType)(int)mtype, (bool)preventName);
                    }
                    else
                    {
                        var mtype = first;
                        var mname = second;

                        module = new Module(mname != null ? mname.ToString() : "", (ModuleType)(int)mtype);
                    }
                }
                else if (args.Count == 3)
                {
                    var mtype = args[0];
                    var mname = args[1];
                    var preventName = args[2];

                    module = new Module(mname != null ? mname.ToString() : "", (ModuleType)(int)mtype, (bool)preventName);
                }
                else
                {
                    module = new Module();
                }

                if (positionArgs.Count > 0)
                {
                    foreach (var arg in positionArgs)
                    {
                        if (arg.Name == "Name")
                        {
                            module.Name = arg.Value != null ? (string)arg.Value : "";
                        }
                        else if (arg.Name == "ExportAsNamespace")
                        {
                            module.ExportAsNamespace = arg.Value != null ? (string)arg.Value : "";
                        }
                    }
                }

                this.AssemblyInfo.Module = module;

                return true;
            }

            return false;
        }

        protected virtual bool ReadFileNameInfo(ICSharpCode.NRefactory.CSharp.Attribute attr, string name, ResolveResult resolveResult)
        {
            if ((name == (Translator.Bridge_ASSEMBLY + ".FileName")) ||
                (resolveResult != null && resolveResult.Type != null && resolveResult.Type.FullName == (Translator.Bridge_ASSEMBLY + ".FileNameAttribute")))
            {
                if (attr.Arguments.Count > 0)
                {
                    object nameObj = this.GetAttributeArgumentValue(attr, resolveResult, 0);

                    if (nameObj is string)
                    {
                        this.AssemblyInfo.FileName = nameObj.ToString();
                    }
                }

                return true;
            }

            return false;
        }

        protected virtual bool ReadOutputPathInfo(ICSharpCode.NRefactory.CSharp.Attribute attr, string name, ResolveResult resolveResult)
        {
            var configHelper = new ConfigHelper();

            if ((name == (Translator.Bridge_ASSEMBLY + ".Output")) ||
                (resolveResult != null && resolveResult.Type != null && resolveResult.Type.FullName == (Translator.Bridge_ASSEMBLY + ".OutputPathAttribute")))
            {
                if (attr.Arguments.Count > 0)
                {
                    object nameObj = this.GetAttributeArgumentValue(attr, resolveResult, 0);

                    if (nameObj is string)
                    {
                        this.AssemblyInfo.Output = configHelper.ConvertPath(nameObj.ToString());
                    }
                }

                return true;
            }

            return false;
        }

        protected virtual bool ReadOutputByInfo(ICSharpCode.NRefactory.CSharp.Attribute attr, string name, ResolveResult resolveResult)
        {
            if ((name == (Translator.Bridge_ASSEMBLY + ".OutputBy")) ||
                (resolveResult != null && resolveResult.Type != null && resolveResult.Type.FullName == (Translator.Bridge_ASSEMBLY + ".OutputByAttribute")))
            {
                if (attr.Arguments.Count > 0)
                {
                    object nameObj = this.GetAttributeArgumentValue(attr, resolveResult, 0);

                    if (nameObj != null)
                    {
                        this.AssemblyInfo.OutputBy = (OutputBy)Enum.ToObject(typeof(OutputBy), nameObj);
                    }

                    if (attr.Arguments.Count > 1)
                    {
                        nameObj = this.GetAttributeArgumentValue(attr, resolveResult, 1);

                        if (nameObj is int)
                        {
                            this.AssemblyInfo.StartIndexInName = (int)nameObj;
                        }
                    }
                }

                return true;
            }

            return false;
        }

        protected virtual bool ReadModuleDependency(ICSharpCode.NRefactory.CSharp.Attribute attr, string name, ResolveResult resolveResult)
        {
            if ((name == (Translator.Bridge_ASSEMBLY + ".ModuleDependency")) ||
                (resolveResult != null && resolveResult.Type != null && resolveResult.Type.FullName == (Translator.Bridge_ASSEMBLY + ".ModuleDependencyAttribute")))
            {
                if (attr.Arguments.Count > 0)
                {
                    ModuleDependency dependency = new ModuleDependency();
                    object nameObj = this.GetAttributeArgumentValue(attr, resolveResult, 0);

                    if (nameObj is string)
                    {
                        dependency.DependencyName = nameObj.ToString();
                    }

                    nameObj = this.GetAttributeArgumentValue(attr, resolveResult, 1);

                    if (nameObj is string)
                    {
                        dependency.VariableName = nameObj.ToString();
                    }

                    this.AssemblyInfo.Dependencies.Add(dependency);
                }

                return true;
            }

            return false;
        }

        protected virtual object GetAttributeArgumentValue(ICSharpCode.NRefactory.CSharp.Attribute attr, ResolveResult resolveResult, int index)
        {
            object nameObj = null;

            if (!(resolveResult is ErrorResolveResult) && (resolveResult is InvocationResolveResult))
            {
                nameObj = ((InvocationResolveResult)resolveResult).Arguments.Skip(index).Take(1).First().ConstantValue;
            }
            else
            {
                var arg = attr.Arguments.Skip(index).Take(1).First();

                if (arg is PrimitiveExpression)
                {
                    var primitive = (PrimitiveExpression)arg;
                    nameObj = primitive.Value;
                }
            }
            return nameObj;
        }

        protected virtual IType GetAttributeArgumentType(ICSharpCode.NRefactory.CSharp.Attribute attr, ResolveResult resolveResult, int index)
        {
            if (!(resolveResult is ErrorResolveResult) && (resolveResult is InvocationResolveResult))
            {
                var arg = ((InvocationResolveResult)resolveResult).Arguments.Skip(index).Take(1).First();
                return arg.Type;
            }
            else
            {
                var arg = attr.Arguments.Skip(index).Take(1).First();

                if (arg is PrimitiveExpression)
                {
                    var primitive = (PrimitiveExpression)arg;
                    return this.Resolver.ResolveNode(primitive, null).Type;
                }
            }
            return null;
        }
    }
}