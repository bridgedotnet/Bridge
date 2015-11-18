using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
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
                throw (EmitterException)this.CreateException(namespaceDeclaration, "Nested namespaces are not supported");
            }

            ValidateNamespace(namespaceDeclaration);

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

            if (this.HasIgnore(typeDeclaration))
            {
                return;
            }

            var rr = this.Resolver.ResolveNode(typeDeclaration, null);
            var fullName = rr.Type.ReflectionName;
            var partialType = this.Types.FirstOrDefault(t => t.Key == fullName);
            var add = true;

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

                if (parentTypeInfo != null && Emitter.reservedStaticNames.Any(n => String.Equals(this.CurrentType.Name, n, StringComparison.InvariantCultureIgnoreCase)))
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

        public override void VisitFieldDeclaration(FieldDeclaration fieldDeclaration)
        {
            bool isStatic = this.CurrentType.ClassType == ClassType.Enum
                || fieldDeclaration.HasModifier(Modifiers.Static)
                || fieldDeclaration.HasModifier(Modifiers.Const);

            foreach (var item in fieldDeclaration.Variables)
            {
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

                if (isStatic)
                {
                    this.CurrentType.StaticConfig.Fields.Add(new TypeConfigItem
                    {
                        Name = item.Name,
                        Entity = fieldDeclaration,
                        IsConst = fieldDeclaration.HasModifier(Modifiers.Const),
                        VarInitializer = item,
                        Initializer = initializer
                    });
                }
                else
                {
                    this.CurrentType.InstanceConfig.Fields.Add(new TypeConfigItem
                {
                    Name = item.Name,
                    Entity = fieldDeclaration,
                    VarInitializer = item,
                    Initializer = initializer
                });
                }
            }
        }

        public override void VisitConstructorDeclaration(ConstructorDeclaration constructorDeclaration)
        {
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
            if (this.HasInline(operatorDeclaration))
            {
                return;
            }

            this.FixMethodParameters(operatorDeclaration.Parameters, operatorDeclaration.Body);

            bool isStatic = operatorDeclaration.HasModifier(Modifiers.Static);

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
        }

        public override void VisitMethodDeclaration(MethodDeclaration methodDeclaration)
        {
            if (methodDeclaration.HasModifier(Modifiers.Abstract) || this.HasInline(methodDeclaration))
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

            if (!propertyDeclaration.Getter.IsNull
                && !this.HasIgnore(propertyDeclaration)
                && !this.HasInline(propertyDeclaration.Getter)
                && propertyDeclaration.Getter.Body.IsNull
                && !this.HasScript(propertyDeclaration.Getter))
            {
                Expression initializer = this.GetDefaultFieldInitializer(propertyDeclaration.ReturnType);
                TypeConfigInfo info = isStatic ? this.CurrentType.StaticConfig : this.CurrentType.InstanceConfig;
                if (!this.AssemblyInfo.AutoPropertyToField)
                {
                    info.Properties.Add(new TypeConfigItem
                    {
                        Name = key,
                        Entity = propertyDeclaration,
                        Initializer = initializer
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

        public override void VisitDelegateDeclaration(DelegateDeclaration delegateDeclaration)
        {
        }

        public override void VisitEnumMemberDeclaration(EnumMemberDeclaration enumMemberDeclaration)
        {
            Expression initializer = enumMemberDeclaration.Initializer;
            if (enumMemberDeclaration.Initializer.IsNull)
            {
                if (this.CurrentType.Type.GetDefinition().Attributes.Any(attr => attr.AttributeType.FullName == "System.FlagsAttribute"))
                {
                    if (this.CurrentType.LastEnumValue <= 0)
                    {
                        this.CurrentType.LastEnumValue = 1;
                    }
                    else
                    {
                        this.CurrentType.LastEnumValue *= 2;    
                    }
                    
                    initializer = new PrimitiveExpression(this.CurrentType.LastEnumValue);
                }
                else
                {
                    initializer = new PrimitiveExpression(++this.CurrentType.LastEnumValue);    
                }
            }
            else
            {
                var rr = this.Resolver.ResolveNode(enumMemberDeclaration.Initializer, null) as ConstantResolveResult;
                if (rr != null)
                {
                    initializer = new PrimitiveExpression(rr.ConstantValue);
                    this.CurrentType.LastEnumValue = (int)rr.ConstantValue;
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

                var handled = //this.ReadAspect(attr, name, resolveResult, AttributeTargets.Assembly, null) ||
                              this.ReadModuleInfo(attr, name, resolveResult) ||
                              this.ReadFileNameInfo(attr, name, resolveResult) ||
                              this.ReadOutputPathInfo(attr, name, resolveResult) ||
                              this.ReadFileHierarchyInfo(attr, name, resolveResult) ||
                              this.ReadModuleDependency(attr, name, resolveResult);
            }
        }

        protected virtual bool ReadModuleInfo(ICSharpCode.NRefactory.CSharp.Attribute attr, string name, ResolveResult resolveResult)
        {
            if ((name == (Translator.Bridge_ASSEMBLY + ".Module")) ||
                (resolveResult != null && resolveResult.Type != null && resolveResult.Type.FullName == (Translator.Bridge_ASSEMBLY + ".ModuleAttribute")))
            {
                if (attr.Arguments.Count > 0)
                {
                    object nameObj = this.GetAttributeArgumentValue(attr, resolveResult, 0);
                    this.AssemblyInfo.Module = nameObj != null ? nameObj.ToString() : "";
                }
                else
                {
                    this.AssemblyInfo.Module = "";
                }

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
            if ((name == (Translator.Bridge_ASSEMBLY + ".Output")) ||
                (resolveResult != null && resolveResult.Type != null && resolveResult.Type.FullName == (Translator.Bridge_ASSEMBLY + ".OutputPathAttribute")))
            {
                if (attr.Arguments.Count > 0)
                {
                    object nameObj = this.GetAttributeArgumentValue(attr, resolveResult, 0);

                    if (nameObj is string)
                    {
                        this.AssemblyInfo.Output = nameObj.ToString();
                    }
                }

                return true;
            }

            return false;
        }

        protected virtual bool ReadFileHierarchyInfo(ICSharpCode.NRefactory.CSharp.Attribute attr, string name, ResolveResult resolveResult)
        {
            if ((name == (Translator.Bridge_ASSEMBLY + ".FilesHierarchy")) ||
                (resolveResult != null && resolveResult.Type != null && resolveResult.Type.FullName == (Translator.Bridge_ASSEMBLY + ".FilesHierarchyAttribute")))
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
    }
}
