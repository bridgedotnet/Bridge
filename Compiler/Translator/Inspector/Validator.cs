using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using ICSharpCode.NRefactory.TypeSystem.Implementation;
using Mono.Cecil;
using Object.Net.Utilities;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using ICustomAttributeProvider = Mono.Cecil.ICustomAttributeProvider;

namespace Bridge.Translator
{
    public class Validator : IValidator
    {
        public virtual bool CanIgnoreType(TypeDefinition type)
        {
            if (this.IsIgnoreType(type))
            {
                return true;
            }

            if (type.BaseType != null && type.BaseType.FullName == "System.MulticastDelegate")
            {
                return true;
            }

            return false;
        }

        public virtual void CheckType(TypeDefinition type, ITranslator translator)
        {
            if (this.CanIgnoreType(type))
            {
                return;
            }

            this.CheckObjectLiteral(type, translator);
            this.CheckConstructors(type, translator);
            this.CheckFields(type, translator);
            this.CheckProperties(type, translator);
            this.CheckMethods(type, translator);
            this.CheckEvents(type, translator);
            this.CheckFileName(type, translator);
            this.CheckModule(type, translator);
            this.CheckModuleDependenies(type, translator);
        }

        public virtual void CheckObjectLiteral(TypeDefinition type, ITranslator translator)
        {
            if (this.IsObjectLiteral(type))
            {
                var objectCreateMode = this.GetObjectCreateMode(type);

                if (type.IsInterface)
                {
                    if (type.HasMethods && type.Methods.GroupBy(m => m.Name).Any(g => g.Count() > 1))
                    {
                        TranslatorException.Throw("ObjectLiteral interface doesn't support overloaded methods: {0}",
                            type);
                    }

                    if (type.HasEvents)
                    {
                        TranslatorException.Throw("ObjectLiteral interface doesn't support events: {0}", type);
                    }
                }
                else
                {
                    if (type.Methods.Any(m => !m.IsRuntimeSpecialName && m.Name.Contains(".")) ||
                        type.Properties.Any(m => !m.IsRuntimeSpecialName && m.Name.Contains(".")))
                    {
                        TranslatorException.Throw("ObjectLiteral doesn't support explicit interface member implementation: {0}", type);
                    }
                }

                if (type.BaseType != null)
                {
                    TypeDefinition baseType = null;
                    try
                    {
                        baseType = type.BaseType.Resolve();
                    }
                    catch (Exception)
                    {

                    }

                    if (objectCreateMode == 1 && baseType != null && baseType.FullName != "System.Object" && this.GetObjectCreateMode(baseType) == 0)
                    {
                        TranslatorException.Throw("[ObjectLiteral] with Constructor mode should be inherited from class with same options: {0}", type);
                    }

                    if (objectCreateMode == 0 && baseType != null && this.GetObjectCreateMode(baseType) == 1)
                    {
                        TranslatorException.Throw("[ObjectLiteral] with Plain mode cannot be inherited from [ObjectLiteral] with Constructor mode: {0}", type);
                    }
                }

                if (type.Interfaces.Count > 0 && objectCreateMode == 1)
                {
                    foreach (var @interface in type.Interfaces)
                    {
                        TypeDefinition iDef = null;
                        try
                        {
                            iDef = @interface.Resolve();
                        }
                        catch (Exception)
                        {

                        }

                        if (iDef != null && iDef.FullName != "System.Object" && !this.IsObjectLiteral(iDef))
                        {
                            TranslatorException.Throw("[ObjectLiteral] should implement an interface which must be object literal also: {0}", type);
                        }
                    }
                }
            }
        }

        public virtual bool IsIgnoreType(ICustomAttributeProvider type, bool ignoreLiteral = false)
        {
            string externalAttr = Translator.Bridge_ASSEMBLY + ".ExternalAttribute";
            string nonScriptableAttr = Translator.Bridge_ASSEMBLY + ".NonScriptableAttribute";

            return
                this.HasAttribute(type.CustomAttributes, externalAttr)
                || this.HasAttribute(type.CustomAttributes, nonScriptableAttr);
        }

        public virtual bool IsIgnoreType(IEntity enity, bool ignoreLiteral = false)
        {
            string externalAttr = Translator.Bridge_ASSEMBLY + ".ExternalAttribute";
            string nonScriptableAttr = Translator.Bridge_ASSEMBLY + ".NonScriptableAttribute";

            return
                this.HasAttribute(enity.Attributes, externalAttr)
                || this.HasAttribute(enity.Attributes, nonScriptableAttr);
        }

        public virtual bool IsBridgeClass(TypeDefinition type)
        {
            foreach (var i in type.Interfaces)
            {
                if (i.FullName == JS.Types.BRIDGE_IBridgeClass)
                {
                    return true;
                }
            }

            return false;
        }

        public virtual bool IsIgnoreType(ICSharpCode.NRefactory.TypeSystem.ITypeDefinition typeDefinition, bool ignoreLiteral = false)
        {
            string externalAttr = Translator.Bridge_ASSEMBLY + ".ExternalAttribute";

            return typeDefinition.Attributes.Any(attr => attr.Constructor != null && attr.Constructor.DeclaringType.FullName == externalAttr);
        }

        public virtual bool IsExternalInterface(ICSharpCode.NRefactory.TypeSystem.ITypeDefinition typeDefinition, out bool isNative)
        {
            string externalAttr = Translator.Bridge_ASSEMBLY + ".ExternalInterfaceAttribute";
            var attr = typeDefinition.Attributes.FirstOrDefault(a => a.Constructor != null && (a.Constructor.DeclaringType.FullName == externalAttr));
            isNative = attr != null && attr.PositionalArguments.Count == 1 && (bool)attr.PositionalArguments[0].ConstantValue;

            if (attr == null)
            {
                isNative = typeDefinition.ParentAssembly.AssemblyName == "Bridge" || !this.IsIgnoreType(typeDefinition);
            }

            return attr != null;
        }

        public virtual bool IsImmutableType(ICustomAttributeProvider type)
        {
            string attrName = Translator.Bridge_ASSEMBLY + ".ImmutableAttribute";

            return this.HasAttribute(type.CustomAttributes, attrName);
        }

        public virtual int EnumEmitMode(DefaultResolvedTypeDefinition type)
        {
            string enumAttr = Translator.Bridge_ASSEMBLY + ".EnumAttribute";
            int result = 7;
            type.Attributes.Any(attr =>
            {
                if (attr.Constructor != null && attr.Constructor.DeclaringType.FullName == enumAttr && attr.PositionalArguments.Count > 0)
                {
                    result = (int)attr.PositionalArguments.First().ConstantValue;
                    return true;
                }

                return false;
            });

            return result;
        }

        public virtual int EnumEmitMode(IType type)
        {
            string enumAttr = Translator.Bridge_ASSEMBLY + ".EnumAttribute";
            int result = 7;
            type.GetDefinition().Attributes.Any(attr =>
            {
                if (attr.Constructor != null && attr.Constructor.DeclaringType.FullName == enumAttr && attr.PositionalArguments.Count > 0)
                {
                    result = (int)attr.PositionalArguments.First().ConstantValue;
                    return true;
                }

                return false;
            });

            return result;
        }

        public virtual bool IsValueEnum(DefaultResolvedTypeDefinition type)
        {
            return this.EnumEmitMode(type) == 2;
        }

        public virtual bool IsNameEnum(DefaultResolvedTypeDefinition type)
        {
            var enumEmitMode = this.EnumEmitMode(type);
            return enumEmitMode == 1 || enumEmitMode > 6;
        }

        public virtual bool IsStringNameEnum(DefaultResolvedTypeDefinition type)
        {
            return this.EnumEmitMode(type) == 3;
        }

        public virtual bool HasAttribute(IEnumerable<CustomAttribute> attributes, string name)
        {
            return this.GetAttribute(attributes, name) != null;
        }

        public virtual bool HasAttribute(IEnumerable<ICSharpCode.NRefactory.TypeSystem.IAttribute> attributes, string name)
        {
            return this.GetAttribute(attributes, name) != null;
        }

        public virtual CustomAttribute GetAttribute(IEnumerable<CustomAttribute> attributes, string name)
        {
            CustomAttribute a = attributes
                .FirstOrDefault(attr => attr.AttributeType.FullName == name);
            return a;
        }

        public virtual ICSharpCode.NRefactory.TypeSystem.IAttribute GetAttribute(IEnumerable<ICSharpCode.NRefactory.TypeSystem.IAttribute> attributes, string name)
        {
            ICSharpCode.NRefactory.TypeSystem.IAttribute a = attributes
                .FirstOrDefault(attr => attr.AttributeType.FullName == name);
            return a;
        }

        public virtual string GetAttributeValue(IEnumerable<CustomAttribute> attributes, string name)
        {
            CustomAttribute a = this.GetAttribute(attributes, name);

            if (a != null)
            {
                return (string)a.ConstructorArguments[0].Value;
            }

            return null;
        }

        public virtual bool IsInlineMethod(MethodDefinition method)
        {
            var attr = this.GetAttribute(method.CustomAttributes, Translator.Bridge_ASSEMBLY + ".TemplateAttribute");

            return attr != null && !attr.HasConstructorArguments;
        }

        public virtual string GetInlineCode(MethodDefinition method)
        {
            return this.GetAttributeValue(method.CustomAttributes, Translator.Bridge_ASSEMBLY + ".TemplateAttribute");
        }

        public virtual string GetInlineCode(PropertyDefinition property)
        {
            return this.GetAttributeValue(property.CustomAttributes, Translator.Bridge_ASSEMBLY + ".TemplateAttribute");
        }

        public virtual bool IsObjectLiteral(TypeDefinition type)
        {
            return this.HasAttribute(type.CustomAttributes, Translator.Bridge_ASSEMBLY + ".ObjectLiteralAttribute");
        }

        public int GetObjectInitializationMode(TypeDefinition type)
        {
            var attr = type.CustomAttributes.FirstOrDefault(a => a.AttributeType.FullName == Translator.Bridge_ASSEMBLY + ".ObjectLiteralAttribute");

            if (attr != null)
            {
                var args = attr.ConstructorArguments;

                if (args.Count > 0)
                {
                    if (args[0].Type.FullName == Translator.Bridge_ASSEMBLY + ".ObjectInitializationMode")
                    {
                        return (int) args[0].Value;
                    }
                    else if (args[0].Type.FullName == Translator.Bridge_ASSEMBLY + ".DefaultValueMode")
                    {
                        return (int)args[0].Value;
                    }
                }
            }

            return 0;
        }

        public int GetObjectCreateMode(TypeDefinition type)
        {
            var attr = type.CustomAttributes.FirstOrDefault(a => a.AttributeType.FullName == Translator.Bridge_ASSEMBLY + ".ObjectLiteralAttribute");

            if (attr != null)
            {
                var args = attr.ConstructorArguments;

                if (args.Count > 0)
                {
                    for (int i = 0; i < args.Count; i++)
                    {
                        if (args[i].Type.FullName == Translator.Bridge_ASSEMBLY + ".ObjectCreateMode")
                        {
                            return (int)args[i].Value;
                        }
                    }
                }
            }

            return 0;
        }

        public virtual bool IsObjectLiteral(ICSharpCode.NRefactory.TypeSystem.ITypeDefinition type)
        {
            return this.HasAttribute(type.Attributes, Translator.Bridge_ASSEMBLY + ".ObjectLiteralAttribute");
        }

        private Stack<TypeDefinition> _stack = new Stack<TypeDefinition>();

        public virtual string GetCustomTypeName(TypeDefinition type, IEmitter emitter)
        {
            if (this._stack.Contains(type))
            {
                return null;
            }

            var nsAtrr = this.GetAttribute(type.CustomAttributes, Translator.Bridge_ASSEMBLY + ".NamespaceAttribute");
            bool hasNs = nsAtrr != null && nsAtrr.ConstructorArguments.Count > 0;
            var nameAttr = this.GetAttribute(type.CustomAttributes, Translator.Bridge_ASSEMBLY + ".NameAttribute");

            string name = null;
            bool changeCase = false;
            if (nameAttr != null && nameAttr.ConstructorArguments.Count > 0)
            {
                if (nameAttr.ConstructorArguments[0].Value is string)
                {
                    name = (string)nameAttr.ConstructorArguments[0].Value;
                }
                else if (nameAttr.ConstructorArguments[0].Value is bool)
                {
                    var boolValue = (bool)nameAttr.ConstructorArguments[0].Value;

                    if (boolValue)
                    {
                        if (hasNs)
                        {
                            changeCase = true;
                        }
                        else
                        {
                            this._stack.Push(type);
                            name = BridgeTypes.ToJsName(type, emitter);
                            var i = name.LastIndexOf(".");

                            if (i > -1)
                            {
                                char[] chars = name.ToCharArray();
                                chars[i + 1] = Char.ToLowerInvariant(chars[i + 1]);
                                name = new string(chars);
                            }
                            else
                            {
                                name = name.ToLowerCamelCase();
                            }
                            this._stack.Pop();

                            return name;
                        }
                    }
                }
            }

            if (!string.IsNullOrEmpty(name))
            {
                return name;
            }

            if (hasNs)
            {
                var arg = nsAtrr.ConstructorArguments[0];
                name = "";
                if (arg.Value is string)
                {
                    name = arg.Value.ToString();
                }

                if (arg.Value is bool && ((bool)arg.Value))
                {
                    return null;
                }

                if (type.IsNested)
                {
                    name = (string.IsNullOrEmpty(name) ? "" : (name + ".")) + BridgeTypes.GetParentNames(type);
                }

                name = (string.IsNullOrEmpty(name) ? "" : (name + ".")) + BridgeTypes.ConvertName(changeCase ? type.Name.ToLowerCamelCase() : type.Name);

                return name;
            }

            if (this.HasAttribute(type.CustomAttributes, Translator.Bridge_ASSEMBLY + ".ObjectLiteralAttribute"))
            {
                //var mode = this.GetObjectCreateMode(type);
                //var ignore = mode == 0 && !type.Methods.Any(m => !m.IsConstructor && !m.IsGetter && !m.IsSetter && !m.IsRemoveOn && !m.IsAddOn);

                if (emitter.Validator.IsIgnoreType(type))
                {
                    return "Object";
                }
            }

            return null;
        }

        public virtual string GetCustomConstructor(TypeDefinition type)
        {
            string ctor = this.GetAttributeValue(type.CustomAttributes, Translator.Bridge_ASSEMBLY + ".ConstructorAttribute");

            if (!string.IsNullOrEmpty(ctor))
            {
                return ctor;
            }

            if (this.HasAttribute(type.CustomAttributes, Translator.Bridge_ASSEMBLY + ".ObjectLiteralAttribute") && this.GetObjectCreateMode(type) == 0)
            {
                return "{ }";
            }

            return null;
        }

        public virtual void CheckConstructors(TypeDefinition type, ITranslator translator)
        {
            if (type.HasMethods)
            {
                var ctors = type.Methods.Where(method => method.IsConstructor);

                foreach (MethodDefinition ctor in ctors)
                {
                    this.CheckMethodArguments(ctor);
                }
            }
        }

        public virtual void CheckFields(TypeDefinition type, ITranslator translator)
        {

        }

        public virtual void CheckProperties(TypeDefinition type, ITranslator translator)
        {
        }

        public virtual void CheckEvents(TypeDefinition type, ITranslator translator)
        {
            if (type.HasEvents && this.IsObjectLiteral(type))
            {
                TranslatorException.Throw("ObjectLiteral type doesn't support events: {0}", type);
            }
        }

        public virtual void CheckMethods(TypeDefinition type, ITranslator translator)
        {
            foreach (MethodDefinition method in type.Methods)
            {
                if (method.HasCustomAttributes && method.CustomAttributes.Any(a => a.AttributeType.FullName == "System.Runtime.CompilerServices.CompilerGeneratedAttribute"))
                {
                    continue;
                }

                this.CheckMethodArguments(method);
            }
        }

        public virtual void CheckMethodArguments(MethodDefinition method)
        {
        }

        public virtual HashSet<string> GetParentTypes(IDictionary<string, TypeDefinition> allTypes)
        {
            var result = new HashSet<string>();

            foreach (var type in allTypes.Values)
            {
                if (type.BaseType != null)
                {
                    string parentName = type.BaseType.FullName.LeftOf('<').Replace('`', JS.Vars.D);

                    if (!allTypes.ContainsKey(parentName))
                    {
                        Bridge.Translator.TranslatorException.Throw("Unknown type {0}", parentName);
                    }

                    if (!result.Contains(parentName))
                    {
                        result.Add(parentName);
                    }
                }
            }
            return result;
        }

        public virtual void CheckFileName(TypeDefinition type, ITranslator translator)
        {
            if (type.HasCustomAttributes)
            {
                var attr = this.GetAttribute(type.CustomAttributes, Translator.Bridge_ASSEMBLY + ".FileNameAttribute");

                if (attr != null)
                {
                    var typeInfo = this.EnsureTypeInfo(type, translator);

                    var obj = this.GetAttributeArgumentValue(attr, 0);

                    if (obj is string)
                    {
                        typeInfo.FileName = obj.ToString();
                    }
                }
            }
        }

        public virtual void CheckModule(TypeDefinition type, ITranslator translator)
        {
            if (type.HasCustomAttributes)
            {
                var attr = this.GetAttribute(type.CustomAttributes, Translator.Bridge_ASSEMBLY + ".ModuleAttribute");

                if (attr != null)
                {
                    var typeInfo = this.EnsureTypeInfo(type, translator);

                    if (attr.ConstructorArguments.Count > 0)
                    {
                        var obj = this.GetAttributeArgumentValue(attr, 0);
                        typeInfo.Module = obj is string ? obj.ToString() : "";
                    }
                    else
                    {
                        typeInfo.Module = "";
                    }
                }
            }
        }

        public virtual void CheckModuleDependenies(TypeDefinition type, ITranslator translator)
        {
            if (type.HasCustomAttributes)
            {
                var attr = this.GetAttribute(type.CustomAttributes, Translator.Bridge_ASSEMBLY + ".ModuleDependencyAttribute");

                if (attr != null)
                {
                    var typeInfo = this.EnsureTypeInfo(type, translator);

                    if (attr.ConstructorArguments.Count > 0)
                    {
                        ModuleDependency dependency = new ModuleDependency();
                        var obj = this.GetAttributeArgumentValue(attr, 0);
                        dependency.DependencyName = obj is string ? obj.ToString() : "";

                        if (attr.ConstructorArguments.Count > 1)
                        {
                            obj = this.GetAttributeArgumentValue(attr, 1);
                            dependency.VariableName = obj is string ? obj.ToString() : "";
                        }

                        typeInfo.Dependencies.Add(dependency);
                    }
                }
            }
        }

        protected virtual object GetAttributeArgumentValue(CustomAttribute attr, int index)
        {
            return attr.ConstructorArguments.ElementAt(index).Value;
        }

        protected virtual ITypeInfo EnsureTypeInfo(TypeDefinition type, ITranslator translator)
        {
            string key = BridgeTypes.GetTypeDefinitionKey(type);
            ITypeInfo typeInfo = null;

            if (translator.TypeInfoDefinitions.ContainsKey(key))
            {
                typeInfo = translator.TypeInfoDefinitions[key];
            }
            else
            {
                typeInfo = new TypeInfo();
                translator.TypeInfoDefinitions[key] = typeInfo;
            }
            return typeInfo;
        }

        public virtual bool IsDelegateOrLambda(ResolveResult result)
        {
            return result.Type.Kind == ICSharpCode.NRefactory.TypeSystem.TypeKind.Delegate || result is LambdaResolveResult;
        }

        public virtual void CheckIdentifier(string name, AstNode context)
        {
            if (Helpers.IsReservedWord(null, name))
            {
                throw new EmitterException(context, "Cannot use '" + name + "' as identifier");
            }
        }

        public virtual bool IsAccessorsIndexer(IEntity entity)
        {
            if (entity == null)
            {
                return false;
            }

            if (this.HasAttribute(entity.Attributes, CS.Attributes.ACCESSORSINDEXER_ATTRIBUTE_NAME))
            {
                return true;
            }

            return false;
        }
    }
}