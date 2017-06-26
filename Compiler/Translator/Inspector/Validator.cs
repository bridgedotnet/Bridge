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
using System.Text.RegularExpressions;
using Mono.Cecil.Rocks;
using ICustomAttributeProvider = Mono.Cecil.ICustomAttributeProvider;

namespace Bridge.Translator
{
    public class Validator : IValidator
    {
        public virtual bool CanIgnoreType(TypeDefinition type)
        {
            if (this.IsExternalType(type))
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
            this.CheckObjectLiteral(type, translator);

            if (this.CanIgnoreType(type))
            {
                return;
            }

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
            if (!this.IsObjectLiteral(type))
            {
                return;
            }

            var objectCreateMode = this.GetObjectCreateMode(type);

            if (objectCreateMode == 0)
            {
                var ctors = type.GetConstructors();

                foreach (var ctor in ctors)
                {
                    foreach (var parameter in ctor.Parameters)
                    {
                        if (parameter.ParameterType.FullName == "Bridge.ObjectCreateMode")
                        {
                            TranslatorException.Throw(Constants.Messages.Exceptions.OBJECT_LITERAL_PLAIN_NO_CREATE_MODE_CUSTOM_CONSTRUCTOR, type);
                        }

                        if (parameter.ParameterType.FullName == "Bridge.ObjectInitializationMode")
                        {
                            continue;
                        }

                        TranslatorException.Throw(Constants.Messages.Exceptions.OBJECT_LITERAL_PLAIN_CUSTOM_CONSTRUCTOR, type);
                    }
                }
            }

            if (type.IsInterface)
            {
                if (type.HasMethods && type.Methods.GroupBy(m => m.Name).Any(g => g.Count() > 1))
                {
                    TranslatorException.Throw(Constants.Messages.Exceptions.OBJECT_LITERAL_INTERFACE_NO_OVERLOAD_METHODS, type);
                }

                if (type.HasEvents)
                {
                    TranslatorException.Throw(Constants.Messages.Exceptions.OBJECT_LITERAL_INTERFACE_NO_EVENTS, type);
                }
            }
            else
            {
                if (type.Methods.Any(m => !m.IsRuntimeSpecialName && m.Name.Contains(".") && !m.Name.Contains("<")) ||
                    type.Properties.Any(m => !m.IsRuntimeSpecialName && m.Name.Contains(".") && !m.Name.Contains("<")))
                {
                    TranslatorException.Throw(Constants.Messages.Exceptions.OBJECT_LITERAL_INTERFACE_NO_EXPLICIT_IMPLEMENTATION, type);
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
                    TranslatorException.Throw(Constants.Messages.Exceptions.OBJECT_LITERAL_CONSTRUCTOR_INHERITANCE, type);
                }

                if (objectCreateMode == 0 && baseType != null && this.GetObjectCreateMode(baseType) == 1)
                {
                    TranslatorException.Throw(Constants.Messages.Exceptions.OBJECT_LITERAL_PLAIN_INHERITANCE, type);
                }
            }

            if (type.Interfaces.Count > 0)
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
                        TranslatorException.Throw(Constants.Messages.Exceptions.OBJECT_LITERAL_INTERFACE_INHERITANCE, type);
                    }
                }
            }

            if (objectCreateMode == 0)
            {
                var hasVirtualMethods = false;

                foreach (MethodDefinition method in type.Methods)
                {
                    if (AttributeHelper.HasCompilerGeneratedAttribute(method))
                    {
                        continue;
                    }

                    if (method.IsVirtual && !(method.IsSetter || method.IsGetter))
                    {
                        hasVirtualMethods = true;
                        break;
                    }
                }

                if (hasVirtualMethods)
                {
                    Bridge.Translator.TranslatorException.Throw(Constants.Messages.Exceptions.OBJECT_LITERAL_NO_VIRTUAL_METHODS, type);
                }
            }
        }

        public virtual bool IsExternalType(TypeDefinition type, bool ignoreLiteral = false)
        {
            string externalAttr = Translator.Bridge_ASSEMBLY + ".ExternalAttribute";
            string nonScriptableAttr = Translator.Bridge_ASSEMBLY + ".NonScriptableAttribute";

            var has = this.HasAttribute(type.CustomAttributes, externalAttr)
                      || this.HasAttribute(type.CustomAttributes, nonScriptableAttr);

            if (!has && type.DeclaringType != null)
            {
                has = this.HasAttribute(type.DeclaringType.CustomAttributes, externalAttr) || this.HasAttribute(type.DeclaringType.CustomAttributes, nonScriptableAttr);
            }

            if (!has)
            {
                has = this.HasAttribute(type.Module.Assembly.CustomAttributes, externalAttr);
            }

            if (!has)
            {
                has = IsVirtualTypeStatic(type);
            }

            return has;
        }

        public virtual bool IsExternalType(IEntity entity, bool ignoreLiteral = false)
        {
            string externalAttr = Translator.Bridge_ASSEMBLY + ".ExternalAttribute";
            string nonScriptableAttr = Translator.Bridge_ASSEMBLY + ".NonScriptableAttribute";

            return
                this.HasAttribute(entity.Attributes, externalAttr)
                || this.HasAttribute(entity.Attributes, nonScriptableAttr);
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

        public virtual bool IsExternalType(ICSharpCode.NRefactory.TypeSystem.ITypeDefinition typeDefinition, bool ignoreLiteral = false)
        {
            string externalAttr = Translator.Bridge_ASSEMBLY + ".ExternalAttribute";

            var has = typeDefinition.Attributes.Any(attr => attr.Constructor != null && attr.Constructor.DeclaringType.FullName == externalAttr);

            if (!has && typeDefinition.DeclaringTypeDefinition != null)
            {
                has = this.HasAttribute(typeDefinition.DeclaringTypeDefinition.Attributes, externalAttr);
            }

            if (!has)
            {
                has = typeDefinition.ParentAssembly.AssemblyAttributes.Any(attr => attr.Constructor != null && attr.Constructor.DeclaringType.FullName == externalAttr);
            }

            if (!has)
            {
                has = this.IsVirtualType(typeDefinition);
            }

            return has;
        }

        public bool IsVirtualType(ITypeDefinition typeDefinition)
        {
            return Validator.IsVirtualTypeStatic(typeDefinition);
        }

        public static bool IsVirtualTypeStatic(TypeDefinition typeDefinition)
        {
            string virtualAttr = Translator.Bridge_ASSEMBLY + ".VirtualAttribute";
            CustomAttribute attr = attr =
                    typeDefinition.CustomAttributes.FirstOrDefault(
                        a => a.AttributeType.FullName == virtualAttr);

            if (attr == null)
            {
                attr = typeDefinition.Module.Assembly.CustomAttributes.FirstOrDefault(a => a.AttributeType.FullName == virtualAttr);
            }

            bool isVirtual = false;

            if (attr != null)
            {
                if (attr.ConstructorArguments.Count == 0)
                {
                    isVirtual = true;
                }
                else
                {
                    var value = (int)attr.ConstructorArguments[0].Value;

                    switch (value)
                    {
                        case 0:
                            isVirtual = true;
                            break;
                        case 1:
                            isVirtual = !typeDefinition.IsInterface;
                            break;
                        case 2:
                            isVirtual = typeDefinition.IsInterface;
                            break;
                    }
                }
            }

            if (isVirtual && typeDefinition.NestedTypes.Count > 0)
            {
                throw new Exception(string.Format(Constants.Messages.Exceptions.VIRTUAL_CLASS_NO_NESTED_TYPES, typeDefinition.FullName));
            }

            return isVirtual;
        }

        public static bool IsVirtualTypeStatic(ITypeDefinition typeDefinition)
        {
            string virtualAttr = Translator.Bridge_ASSEMBLY + ".VirtualAttribute";
            IAttribute attr = null;
            if (typeDefinition.GetDefinition() != null)
            {
                attr =
                    typeDefinition.GetDefinition().Attributes.FirstOrDefault(
                        a => a.AttributeType.FullName == virtualAttr);
            }

            if (attr == null)
            {
                attr = typeDefinition.ParentAssembly.AssemblyAttributes.FirstOrDefault(a => a.AttributeType.FullName == virtualAttr);
            }

            bool isVirtual = false;

            if (attr != null)
            {
                if (attr.PositionalArguments.Count == 0)
                {
                    isVirtual = true;
                }
                else
                {
                    var value = (int)attr.PositionalArguments[0].ConstantValue;

                    switch (value)
                    {
                        case 0:
                            isVirtual = true;
                            break;
                        case 1:
                            isVirtual = typeDefinition.Kind != TypeKind.Interface;
                            break;
                        case 2:
                            isVirtual = typeDefinition.Kind == TypeKind.Interface;
                            break;
                    }
                }
            }

            if (isVirtual && typeDefinition.NestedTypes.Count > 0)
            {
                throw new Exception(string.Format(Constants.Messages.Exceptions.VIRTUAL_CLASS_NO_NESTED_TYPES, typeDefinition.FullName));
            }

            return isVirtual;
        }

        public virtual bool IsExternalInterface(ICSharpCode.NRefactory.TypeSystem.ITypeDefinition typeDefinition, out bool isNative)
        {
            string externalAttr = Translator.Bridge_ASSEMBLY + ".ExternalInterfaceAttribute";
            var attr = typeDefinition.Attributes.FirstOrDefault(a => a.Constructor != null && (a.Constructor.DeclaringType.FullName == externalAttr));

            if (attr == null)
            {
                attr = typeDefinition.ParentAssembly.AssemblyAttributes.FirstOrDefault(a => a.Constructor != null && (a.Constructor.DeclaringType.FullName == externalAttr));
            }

            isNative = attr != null && attr.PositionalArguments.Count == 1 && (bool)attr.PositionalArguments[0].ConstantValue;

            if (attr == null)
            {
                isNative = typeDefinition.ParentAssembly.AssemblyName == CS.NS.ROOT || !this.IsExternalType(typeDefinition);
            }

            return attr != null;
        }

        public virtual IExternalInterface IsExternalInterface(ICSharpCode.NRefactory.TypeSystem.ITypeDefinition typeDefinition)
        {
            string externalAttr = Translator.Bridge_ASSEMBLY + ".ExternalInterfaceAttribute";
            var attr = typeDefinition.Attributes.FirstOrDefault(a => a.Constructor != null && (a.Constructor.DeclaringType.FullName == externalAttr));

            if (attr == null)
            {
                attr = typeDefinition.ParentAssembly.AssemblyAttributes.FirstOrDefault(a => a.Constructor != null && (a.Constructor.DeclaringType.FullName == externalAttr));
            }

            if (attr != null)
            {
                var ei = new ExternalInterface();
                if (attr.PositionalArguments.Count == 1)
                {
                    bool isNative = (bool)attr.PositionalArguments[0].ConstantValue;

                    if (isNative)
                    {
                        ei.IsNativeImplementation = true;
                    }
                    else
                    {
                        ei.IsSimpleImplementation = true;
                    }
                }

                if (attr.NamedArguments.Count == 1)
                {
                    if (attr.NamedArguments[0].Key.Name == "IsVirtual")
                    {
                        ei.IsVirtual = (bool)attr.NamedArguments[0].Value.ConstantValue;
                    }
                }

                return ei;
            }

            return null;
        }

        public virtual bool IsImmutableType(ICustomAttributeProvider type)
        {
            string attrName = Translator.Bridge_ASSEMBLY + ".ImmutableAttribute";

            return this.HasAttribute(type.CustomAttributes, attrName);
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

        public virtual string GetCustomTypeName(TypeDefinition type, IEmitter emitter, bool excludeNs)
        {
            if (this._stack.Contains(type))
            {
                return null;
            }

            var nsAtrr = excludeNs ? null : this.GetAttribute(type.CustomAttributes, Translator.Bridge_ASSEMBLY + ".NamespaceAttribute");
            bool hasNs = nsAtrr != null && nsAtrr.ConstructorArguments.Count > 0;
            var nameAttr = this.GetAttribute(type.CustomAttributes, Translator.Bridge_ASSEMBLY + ".NameAttribute");

            string name = null;
            bool changeCase = false;
            if (nameAttr != null && nameAttr.ConstructorArguments.Count > 0)
            {
                if (nameAttr.ConstructorArguments[0].Value is string)
                {
                    name = Helpers.ConvertNameTokens((string)nameAttr.ConstructorArguments[0].Value, type.Name);
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
                    name = (string.IsNullOrEmpty(name) ? "" : (name + ".")) + BridgeTypes.GetParentNames(emitter, type);
                }


                var typeName = emitter.GetTypeName(emitter.BridgeTypes.Get(type).Type.GetDefinition(), type);
                name = (string.IsNullOrEmpty(name) ? "" : (name + ".")) + BridgeTypes.ConvertName(changeCase ? typeName.ToLowerCamelCase() : typeName);

                return name;
            }

            if (this.HasAttribute(type.CustomAttributes, Translator.Bridge_ASSEMBLY + ".ObjectLiteralAttribute"))
            {
                var mode = this.GetObjectCreateMode(type);
                if (emitter.Validator.IsExternalType(type) && mode == 0)
                {
                    return JS.Types.System.Object.NAME;
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
            /*if (type.HasProperties && this.IsObjectLiteral(type))
            {
                var objectCreateMode = this.GetObjectCreateMode(type);
                if (objectCreateMode == 0)
                {
                    foreach (PropertyDefinition prop in type.Properties)
                    {
                        if ((prop.GetMethod != null && prop.GetMethod.IsVirtual) || (prop.SetMethod != null && prop.SetMethod.IsVirtual))
                        {
                            TranslatorException.Throw(Constants.Messages.Exceptions.OBJECT_LITERAL_NO_VIRTUAL_METHODS, type);
                        }
                    }
                }
            }*/
        }

        public virtual void CheckEvents(TypeDefinition type, ITranslator translator)
        {
        }

        public virtual void CheckMethods(TypeDefinition type, ITranslator translator)
        {
            foreach (MethodDefinition method in type.Methods)
            {
                if (AttributeHelper.HasCompilerGeneratedAttribute(method))
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
                    this.ReadModuleFromAttribute(type, translator, attr);
                }
            }

            if (type.Module.Assembly.HasCustomAttributes)
            {
                var attr = this.GetAttribute(type.Module.Assembly.CustomAttributes, Translator.Bridge_ASSEMBLY + ".ModuleAttribute");

                if (attr != null)
                {
                    this.ReadModuleFromAttribute(type, translator, attr);
                }
            }
        }

        private void ReadModuleFromAttribute(TypeDefinition type, ITranslator translator, CustomAttribute attr)
        {
            var typeInfo = this.EnsureTypeInfo(type, translator);
            Module module = null;

            if (attr.ConstructorArguments.Count == 1)
            {
                var obj = attr.ConstructorArguments[0].Value;

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
            else if (attr.ConstructorArguments.Count == 2)
            {
                if (attr.ConstructorArguments[0].Value is string)
                {
                    var name = attr.ConstructorArguments[0].Value;
                    var preventName = attr.ConstructorArguments[1].Value;

                    module = new Module(name != null ? name.ToString() : "", (bool)preventName);
                }
                else if (attr.ConstructorArguments[1].Value is bool)
                {
                    var mtype = attr.ConstructorArguments[0].Value;
                    var preventName = attr.ConstructorArguments[1].Value;

                    module = new Module("", (ModuleType)(int)mtype, (bool)preventName);
                }
                else
                {
                    var mtype = attr.ConstructorArguments[0].Value;
                    var name = attr.ConstructorArguments[1].Value;

                    module = new Module(name != null ? name.ToString() : "", (ModuleType)(int)mtype);
                }
            }
            else if (attr.ConstructorArguments.Count == 3)
            {
                var mtype = attr.ConstructorArguments[0].Value;
                var name = attr.ConstructorArguments[1].Value;
                var preventName = attr.ConstructorArguments[2].Value;

                module = new Module(name != null ? name.ToString() : "", (ModuleType)(int)mtype, (bool)preventName);
            }
            else
            {
                module = new Module();
            }

            if (attr.Properties.Count > 0)
            {
                foreach (var prop in attr.Properties)
                {
                    if (prop.Name == "Name")
                    {
                        module.Name = prop.Argument.Value != null ? (string)prop.Argument.Value : "";
                    }
                    else if (prop.Name == "ExportAsNamespace")
                    {
                        module.ExportAsNamespace = prop.Argument.Value != null ? (string)prop.Argument.Value : "";
                    }
                }
            }

            typeInfo.Module = module;
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