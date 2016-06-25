using Bridge.Contract.Constants;

using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.TypeSystem;
using Mono.Cecil;
using Object.Net.Utilities;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace Bridge.Contract
{
    public class BridgeType
    {
        public BridgeType(string key)
        {
            this.Key = key;
        }

        public IEmitter Emitter
        {
            get;
            set;
        }

        public string Key
        {
            get;
            private set;
        }

        public TypeDefinition TypeDefinition
        {
            get;
            set;
        }

        public IType Type
        {
            get;
            set;
        }

        public ITypeInfo TypeInfo
        {
            get;
            set;
        }
    }

    public class BridgeTypes : Dictionary<string, BridgeType>
    {
        public void InitItems(IEmitter emitter)
        {
            var logger = emitter.Log;

            logger.Trace("Initializing items for Bridge types...");

            this.Emitter = emitter;
            foreach (var item in this)
            {
                var type = item.Value;
                var key = BridgeTypes.GetTypeDefinitionKey(type.TypeDefinition);
                type.Emitter = emitter;
                type.Type = ReflectionHelper.ParseReflectionName(key).Resolve(emitter.Resolver.Resolver.TypeResolveContext);
                type.TypeInfo = emitter.Types.FirstOrDefault(t => t.Key == key);

                if (type.TypeInfo != null && emitter.TypeInfoDefinitions.ContainsKey(type.TypeInfo.Key))
                {
                    var typeInfo = this.Emitter.TypeInfoDefinitions[type.Key];

                    type.TypeInfo.Module = typeInfo.Module;
                    type.TypeInfo.FileName = typeInfo.FileName;
                    type.TypeInfo.Dependencies = typeInfo.Dependencies;
                }
            }

            logger.Trace("Initializing items for Bridge types done");
        }

        public IEmitter Emitter
        {
            get;
            set;
        }

        public BridgeType Get(string key)
        {
            return this[key];
        }

        public BridgeType Get(TypeDefinition type, bool safe = false)
        {
            foreach (var item in this)
            {
                if (item.Value.TypeDefinition == type)
                {
                    return item.Value;
                }
            }

            if (!safe)
            {
                throw new Exception("Cannot find type: " + type.FullName);
            }

            return null;
        }

        public BridgeType Get(TypeReference type, bool safe = false)
        {
            var name = type.FullName;
            if (type.IsGenericInstance)
            {
                /*try
                {
                    name = type.Resolve().FullName;
                }
                catch
                {
                    try
                    {
                        var elementType = type.GetElementType();

                        name = elementType != null ? elementType.FullName : type.FullName;
                    }
                    catch
                    {
                        name = type.FullName;
                    }
                }*/

                name = type.GetElementType().FullName;
            }

            foreach (var item in this)
            {
                if (item.Value.TypeDefinition.FullName == name)
                {
                    return item.Value;
                }
            }

            if (!safe)
            {
                throw new Exception("Cannot find type: " + type.FullName);
            }

            return null;
        }

        public BridgeType Get(IType type, bool safe = false)
        {
            if (type.IsParameterized)
            {
                type = ((ParameterizedTypeReference)type.ToTypeReference()).GenericType.Resolve(this.Emitter.Resolver.Resolver.TypeResolveContext);
            }

            foreach (var item in this)
            {
                if (item.Value.Type == type)
                {
                    return item.Value;
                }
            }

            if (!safe)
            {
                throw new Exception("Cannot find type: " + type.ReflectionName);
            }

            return null;
        }

        public BridgeType Get(ITypeInfo type, bool safe = false)
        {
            foreach (var item in this)
            {
                if (item.Value.Type.ReflectionName == type.Key)
                {
                    return item.Value;
                }
            }

            if (!safe)
            {
                throw new Exception("Cannot find type: " + type.Key);
            }

            return null;
        }

        public IType ToType(AstType type)
        {
            var resolveResult = this.Emitter.Resolver.ResolveNode(type, this.Emitter);
            return resolveResult.Type;
        }

        public static string GetParentNames(TypeDefinition typeDef)
        {
            List<string> names = new List<string>();
            while (typeDef.DeclaringType != null)
            {
                names.Add(BridgeTypes.ConvertName(typeDef.DeclaringType.Name));
                typeDef = typeDef.DeclaringType;
            }

            names.Reverse();
            return names.Join(".");
        }

        public static string GetParentNames(IType type)
        {
            List<string> names = new List<string>();
            while (type.DeclaringType != null)
            {
                var name = BridgeTypes.ConvertName(type.DeclaringType.Name);

                if (type.DeclaringType.TypeArguments.Count > 0)
                {
                    name += Helpers.PrefixDollar(type.TypeArguments.Count);
                }
                names.Add(name);
                type = type.DeclaringType;
            }

            names.Reverse();
            return names.Join(".");
        }

        public static string ToJsName(IType type, IEmitter emitter, bool asDefinition = false, bool excludens = false, bool isAlias = false)
        {
            if (type.Kind == TypeKind.Array)
            {
                return JS.Types.ARRAY;
            }

            if (type.Kind == TypeKind.Delegate)
            {
                return JS.Types.FUNCTION;
            }

            if (type.Kind == TypeKind.Dynamic)
            {
                return JS.Types.OBJECT;
            }

            if (NullableType.IsNullable(type))
            {
                return BridgeTypes.ToJsName(NullableType.GetUnderlyingType(type), emitter);
            }

            BridgeType bridgeType = emitter.BridgeTypes.Get(type, true);

            var name = excludens ? "" : type.Namespace;

            var hasTypeDef = bridgeType != null && bridgeType.TypeDefinition != null;
            if (hasTypeDef)
            {
                var typeDef = bridgeType.TypeDefinition;
                if (typeDef.IsNested && !excludens)
                {
                    name = (string.IsNullOrEmpty(name) ? "" : (name + ".")) + BridgeTypes.GetParentNames(typeDef);
                }

                name = (string.IsNullOrEmpty(name) ? "" : (name + ".")) + BridgeTypes.ConvertName(typeDef.Name);
            }
            else
            {
                if (type.DeclaringType != null && !excludens)
                {
                    name = (string.IsNullOrEmpty(name) ? "" : (name + ".")) + BridgeTypes.GetParentNames(type);

                    if (type.DeclaringType.TypeArguments.Count > 0)
                    {
                        name += Helpers.PrefixDollar(type.TypeArguments.Count);
                    }
                }

                name = (string.IsNullOrEmpty(name) ? "" : (name + ".")) + BridgeTypes.ConvertName(type.Name);
            }

            bool isCustomName = false;
            if (bridgeType != null)
            {
                name = BridgeTypes.AddModule(name, bridgeType, out isCustomName);
            }

            if (!hasTypeDef && !isCustomName && type.TypeArguments.Count > 0)
            {
                name += Helpers.PrefixDollar(type.TypeArguments.Count);
            }

            if (isAlias)
            {
                name = OverloadsCollection.NormalizeInterfaceName(name);
            }

            if (type.TypeArguments.Count > 0 && !Helpers.IsIgnoreGeneric(type, emitter))
            {
                if (isAlias)
                {
                    StringBuilder sb = new StringBuilder(name);
                    bool needComma = false;
                    sb.Append(JS.Vars.D);
                    bool isStr = false;
                    foreach (var typeArg in type.TypeArguments)
                    {
                        if (sb.ToString().EndsWith(")"))
                        {
                            sb.Append(" + \"");
                        }

                        if (needComma && !sb.ToString().EndsWith(JS.Vars.D.ToString()))
                        {
                            sb.Append(JS.Vars.D);
                        }

                        needComma = true;
                        bool needGet = typeArg.Kind == TypeKind.TypeParameter && !asDefinition;
                        if (needGet)
                        {
                            if (!isStr)
                            {
                                sb.Insert(0, "\"");
                                isStr = true;
                            }
                            sb.Append("\" + Bridge.getTypeAlias(");
                        }

                        var typeArgName = BridgeTypes.ToJsName(typeArg, emitter, false, false, true);

                        if (!needGet && typeArgName.StartsWith("\""))
                        {
                            sb.Append(typeArgName.Substring(1));

                            if (!isStr)
                            {
                                isStr = true;
                                sb.Insert(0, "\"");
                            }
                        }
                        else
                        {
                            sb.Append(typeArgName);
                        }

                        if (needGet)
                        {
                            sb.Append(")");
                        }
                    }

                    if (isStr && !sb.ToString().EndsWith(")"))
                    {
                        sb.Append("\"");
                    }

                    name = sb.ToString();
                }
                else if(!asDefinition)
                {
                    StringBuilder sb = new StringBuilder(name);
                    bool needComma = false;
                    sb.Append( "(");
                    foreach (var typeArg in type.TypeArguments)
                    {
                        if (needComma)
                        {
                            sb.Append(",");
                        }

                        needComma = true;
                        
                        sb.Append(BridgeTypes.ToJsName(typeArg, emitter));
                    }
                    sb.Append(")");
                    name = sb.ToString();
                }
            }

            return name;
        }

        public static string ToJsName(TypeDefinition type, IEmitter emitter, bool asDefinition = false)
        {
            return BridgeTypes.ToJsName(ReflectionHelper.ParseReflectionName(BridgeTypes.GetTypeDefinitionKey(type)).Resolve(emitter.Resolver.Resolver.TypeResolveContext), emitter, asDefinition);
        }

        public static string DefinitionToJsName(IType type, IEmitter emitter)
        {
            return BridgeTypes.ToJsName(type, emitter, true);
        }

        public static string DefinitionToJsName(TypeDefinition type, IEmitter emitter)
        {
            return BridgeTypes.ToJsName(type, emitter, true);
        }

        public static string ToJsName(AstType astType, IEmitter emitter)
        {
            var primitive = astType as PrimitiveType;

            if (primitive != null && primitive.KnownTypeCode == KnownTypeCode.Void)
            {
                return "void";
            }

            var composedType = astType as ComposedType;

            if (composedType != null && composedType.ArraySpecifiers != null && composedType.ArraySpecifiers.Count > 0)
            {
                return JS.Types.ARRAY;
            }

            var simpleType = astType as SimpleType;

            if (simpleType != null && simpleType.Identifier == "dynamic")
            {
                return JS.Types.OBJECT;
            }

            var resolveResult = emitter.Resolver.ResolveNode(astType, emitter);
            return BridgeTypes.ToJsName(resolveResult.Type, emitter);
        }

        public static string AddModule(string name, BridgeType type, out bool isCustomName)
        {
            isCustomName = false;
            var emitter = type.Emitter;
            var currentTypeInfo = emitter.TypeInfo;
            string module = null;

            if (currentTypeInfo.Key != type.Key && type.TypeInfo != null)
            {
                var typeInfo = type.TypeInfo;
                module = typeInfo.Module;
                if (typeInfo.Module != null && currentTypeInfo.Module != typeInfo.Module && !emitter.CurrentDependencies.Any(d => d.DependencyName == typeInfo.Module))
                {
                    emitter.CurrentDependencies.Add(new ModuleDependency
                    {
                        DependencyName = typeInfo.Module
                    });
                }
            }

            var customName = emitter.Validator.GetCustomTypeName(type.TypeDefinition, emitter);

            if (!String.IsNullOrEmpty(customName))
            {
                isCustomName = true;
                name = customName;
            }

            if (!String.IsNullOrEmpty(module) && currentTypeInfo.Key != type.Key && currentTypeInfo.Module != module)
            {
                name = module + "." + name;
            }

            return name;
        }

        private static System.Collections.Generic.Dictionary<string, string> replacements;
        private static Regex convRegex;

        public static string ConvertName(string name)
        {
            if (BridgeTypes.convRegex == null)
            {
                replacements = new System.Collections.Generic.Dictionary<string, string>(4);
                replacements.Add("`", JS.Vars.D.ToString());
                replacements.Add("/", ".");
                replacements.Add("+", ".");
                replacements.Add("[", "");
                replacements.Add("]", "");

                BridgeTypes.convRegex = new Regex("(\\" + String.Join("|\\", replacements.Keys.ToArray()) + ")", RegexOptions.Compiled | RegexOptions.Singleline);
            }

            return BridgeTypes.convRegex.Replace
            (
                name,
                delegate (Match m)
                {
                    return replacements[m.Value];
                }
            );
        }

        public static string GetTypeDefinitionKey(TypeDefinition type)
        {
            return BridgeTypes.GetTypeDefinitionKey(type.FullName);
        }

        public static string GetTypeDefinitionKey(string name)
        {
            return name.Replace("/", "+");
        }

        public static string ToTypeScriptName(AstType astType, IEmitter emitter, bool asDefinition = false, bool ignoreDependency = false)
        {
            string name = null;
            var primitive = astType as PrimitiveType;
            name = BridgeTypes.GetTsPrimitivie(primitive);
            if (name != null)
            {
                return name;
            }

            var composedType = astType as ComposedType;
            if (composedType != null && composedType.ArraySpecifiers != null && composedType.ArraySpecifiers.Count > 0)
            {
                return BridgeTypes.ToTypeScriptName(composedType.BaseType, emitter) + string.Concat(Enumerable.Repeat("[]", composedType.ArraySpecifiers.Count));
            }

            var simpleType = astType as SimpleType;
            if (simpleType != null && simpleType.Identifier == "dynamic")
            {
                return "any";
            }

            var resolveResult = emitter.Resolver.ResolveNode(astType, emitter);
            return BridgeTypes.ToTypeScriptName(resolveResult.Type, emitter, asDefinition: asDefinition, ignoreDependency: ignoreDependency);
        }

        public static string ToTypeScriptName(IType type, IEmitter emitter, bool asDefinition = false, bool excludens = false, bool ignoreDependency = false)
        {
            if (type.Kind == TypeKind.Delegate)
            {
                var method = type.GetDelegateInvokeMethod();

                StringBuilder sb = new StringBuilder();
                sb.Append("{");
                sb.Append("(");

                var last = method.Parameters.LastOrDefault();
                foreach (var p in method.Parameters)
                {
                    var ptype = BridgeTypes.ToTypeScriptName(p.Type, emitter);

                    if (p.IsOut || p.IsRef)
                    {
                        ptype = "{v: " + ptype + "}";
                    }

                    sb.Append(p.Name + ": " + ptype);
                    if (p != last)
                    {
                        sb.Append(", ");
                    }
                }

                sb.Append(")");
                sb.Append(": ");
                sb.Append(BridgeTypes.ToTypeScriptName(method.ReturnType, emitter));
                sb.Append("}");

                return sb.ToString();
            }

            if (type.IsKnownType(KnownTypeCode.String))
            {
                return "string";
            }

            if (type.IsKnownType(KnownTypeCode.Boolean))
            {
                return "boolean";
            }

            if (type.IsKnownType(KnownTypeCode.Void))
            {
                return "void";
            }

            if (type.IsKnownType(KnownTypeCode.Byte) ||
                type.IsKnownType(KnownTypeCode.Char) ||
                type.IsKnownType(KnownTypeCode.Decimal) ||
                type.IsKnownType(KnownTypeCode.Double) ||
                type.IsKnownType(KnownTypeCode.Int16) ||
                type.IsKnownType(KnownTypeCode.Int32) ||
                type.IsKnownType(KnownTypeCode.Int64) ||
                type.IsKnownType(KnownTypeCode.SByte) ||
                type.IsKnownType(KnownTypeCode.Single) ||
                type.IsKnownType(KnownTypeCode.UInt16) ||
                type.IsKnownType(KnownTypeCode.UInt32) ||
                type.IsKnownType(KnownTypeCode.UInt64))
            {
                return "number";
            }

            if (type.Kind == TypeKind.Array)
            {
                ICSharpCode.NRefactory.TypeSystem.ArrayType arrayType = (ICSharpCode.NRefactory.TypeSystem.ArrayType)type;
                return BridgeTypes.ToTypeScriptName(arrayType.ElementType, emitter, asDefinition, excludens) + "[]";
            }

            if (type.Kind == TypeKind.Dynamic)
            {
                return "any";
            }

            if (type.Kind == TypeKind.Enum && type.DeclaringType != null && !excludens)
            {
                return "number";
            }

            if (NullableType.IsNullable(type))
            {
                return BridgeTypes.ToTypeScriptName(NullableType.GetUnderlyingType(type), emitter, asDefinition, excludens);
            }

            BridgeType bridgeType = emitter.BridgeTypes.Get(type, true);
            //string name = BridgeTypes.ConvertName(excludens ? type.Name : type.FullName);

            var name = excludens ? "" : type.Namespace;

            var hasTypeDef = bridgeType != null && bridgeType.TypeDefinition != null;
            if (hasTypeDef)
            {
                var typeDef = bridgeType.TypeDefinition;
                if (typeDef.IsNested && !excludens)
                {
                    name = (string.IsNullOrEmpty(name) ? "" : (name + ".")) + BridgeTypes.GetParentNames(typeDef);
                }

                name = (string.IsNullOrEmpty(name) ? "" : (name + ".")) + BridgeTypes.ConvertName(typeDef.Name);
            }
            else
            {
                if (type.DeclaringType != null && !excludens)
                {
                    name = (string.IsNullOrEmpty(name) ? "" : (name + ".")) + BridgeTypes.GetParentNames(type);

                    if (type.DeclaringType.TypeArguments.Count > 0)
                    {
                        name += Helpers.PrefixDollar(type.TypeArguments.Count);
                    }
                }

                name = (string.IsNullOrEmpty(name) ? "" : (name + ".")) + BridgeTypes.ConvertName(type.Name);
            }

            bool isCustomName = false;
            if (bridgeType != null)
            {
                if (!ignoreDependency && emitter.AssemblyInfo.OutputBy != OutputBy.Project &&
                    bridgeType.TypeInfo != null && bridgeType.TypeInfo.Namespace != emitter.TypeInfo.Namespace)
                {
                    var info = BridgeTypes.GetNamespaceFilename(bridgeType.TypeInfo, emitter);
                    var ns = info.Item1;
                    var fileName = info.Item2;

                    if (!emitter.CurrentDependencies.Any(d => d.DependencyName == fileName))
                    {
                        emitter.CurrentDependencies.Add(new ModuleDependency()
                        {
                            DependencyName = fileName
                        });
                    }
                }

                name = BridgeTypes.AddModule(name, bridgeType, out isCustomName);
            }

            if (!hasTypeDef && !isCustomName && type.TypeArguments.Count > 0)
            {
                name += Helpers.PrefixDollar(type.TypeArguments.Count);
            }

            if (!asDefinition && type.TypeArguments.Count > 0 && !Helpers.IsIgnoreGeneric(type, emitter))
            {
                StringBuilder sb = new StringBuilder(name);
                bool needComma = false;
                sb.Append("<");
                foreach (var typeArg in type.TypeArguments)
                {
                    if (needComma)
                    {
                        sb.Append(",");
                    }

                    needComma = true;
                    sb.Append(BridgeTypes.ToTypeScriptName(typeArg, emitter, asDefinition, excludens));
                }
                sb.Append(">");
                name = sb.ToString();
            }

            return name;
        }

        public static string GetTsPrimitivie(PrimitiveType primitive)
        {
            if (primitive != null)
            {
                switch (primitive.KnownTypeCode)
                {
                    case KnownTypeCode.Void:
                        return "void";

                    case KnownTypeCode.Boolean:
                        return "boolean";

                    case KnownTypeCode.String:
                        return "string";

                    case KnownTypeCode.Decimal:
                    case KnownTypeCode.Double:
                    case KnownTypeCode.Byte:
                    case KnownTypeCode.Char:
                    case KnownTypeCode.Int16:
                    case KnownTypeCode.Int32:
                    case KnownTypeCode.Int64:
                    case KnownTypeCode.SByte:
                    case KnownTypeCode.Single:
                    case KnownTypeCode.UInt16:
                    case KnownTypeCode.UInt32:
                    case KnownTypeCode.UInt64:
                        return "number";
                }
            }

            return null;
        }

        public static Tuple<string, string> GetNamespaceFilename(ITypeInfo typeInfo, IEmitter emitter)
        {
            var cas = emitter.BridgeTypes.Get(typeInfo.Key).TypeDefinition.CustomAttributes;
            var fileName = typeInfo.Namespace;

            // Search for an 'NamespaceAttribute' entry
            foreach (var ca in cas)
            {
                if (ca.AttributeType.Name == "NamespaceAttribute" &&
                    ca.ConstructorArguments.Count > 0 &&
                    ca.ConstructorArguments[0].Value is string &&
                    !string.IsNullOrWhiteSpace(ca.ConstructorArguments[0].Value.ToString()))
                {
                    fileName = ca.ConstructorArguments[0].Value.ToString();
                    break;
                }
            }

            var ns = fileName;

            switch (emitter.AssemblyInfo.FileNameCasing)
            {
                case FileNameCaseConvert.Lowercase:
                    fileName = fileName.ToLower();
                    break;

                case FileNameCaseConvert.CamelCase:
                    var sepList = new string[] { ".", System.IO.Path.DirectorySeparatorChar.ToString(), "\\", "/" };

                    // Populate list only with needed separators, as usually we will never have all four of them
                    var neededSepList = new List<string>();

                    foreach (var separator in sepList)
                    {
                        if (fileName.Contains(separator.ToString()) && !neededSepList.Contains(separator))
                        {
                            neededSepList.Add(separator);
                        }
                    }

                    // now, separating the filename string only by the used separators, apply lowerCamelCase
                    if (neededSepList.Count > 0)
                    {
                        foreach (var separator in neededSepList)
                        {
                            var stringList = new List<string>();

                            foreach (var str in fileName.Split(separator[0]))
                            {
                                stringList.Add(str.ToLowerCamelCase());
                            }

                            fileName = stringList.Join(separator);
                        }
                    }
                    else
                    {
                        fileName = fileName.ToLowerCamelCase();
                    }
                    break;
            }

            return new Tuple<string, string>(ns, fileName);
        }
    }
}