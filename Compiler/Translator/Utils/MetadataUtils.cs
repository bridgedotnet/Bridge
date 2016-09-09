using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.TypeSystem;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;

namespace Bridge.Translator
{
    public class MetadataUtils
    {
        public static JObject ConstructTypeMetadata(ITypeDefinition type, IEmitter emitter, bool ifHasAttribute, SyntaxTree tree)
        {
            var properties = new JObject();
            var scriptableAttributes = MetadataUtils.GetScriptableAttributes(type.Attributes, emitter, tree).ToList();
            if (scriptableAttributes.Count != 0)
            {
                JArray attrArr = new JArray();
                foreach (var a in scriptableAttributes)
                {
                    attrArr.Add(MetadataUtils.ConstructAttribute(a, type, emitter));
                }

                properties.Add("attr", attrArr);
            }

            if (type.Kind == TypeKind.Class || type.Kind == TypeKind.Struct || type.Kind == TypeKind.Interface)
            {
                var members = type.Members.Where(m => MetadataUtils.IsReflectable(m, emitter, ifHasAttribute, tree))
                                          .OrderBy(m => m, MemberOrderer.Instance)
                                          .Select(m => MetadataUtils.ConstructMemberInfo(m, emitter, false, false, tree))
                                          .ToList();
                if (members.Count > 0)
                {
                    properties.Add("members", new JArray(members));
                }

                var aua = type.Attributes.FirstOrDefault(a => a.AttributeType.FullName == "System.AttributeUsageAttribute");
                if (aua != null)
                {
                    var inherited = true;
                    var allowMultiple = false;

                    if (aua.PositionalArguments.Count == 3)
                    {
                        allowMultiple = (bool)aua.PositionalArguments[1].ConstantValue;
                        inherited = (bool)aua.PositionalArguments[2].ConstantValue;
                    }

                    if (aua.NamedArguments.Count > 0)
                    {
                        foreach (var arg in aua.NamedArguments)
                        {
                            if (arg.Key.Name == "AllowMultiple")
                            {
                                allowMultiple = (bool)arg.Value.ConstantValue;
                            }
                            else if (arg.Key.Name == "Inherited")
                            {
                                inherited = (bool)arg.Value.ConstantValue;
                            }
                        }
                    }

                    if (!inherited)
                    {
                        properties.Add("attrNoInherit", true);
                    }

                    if (allowMultiple)
                    {
                        properties.Add("attrAllowMultiple", true);
                    }
                }
            }

            return properties.Count > 0 ? properties : null;
        }

        public static JObject ConstructITypeMetadata(IType type, IEmitter emitter)
        {
            var properties = new JObject();

            if (type.Kind == TypeKind.Class || type.Kind == TypeKind.Anonymous)
            {
                var members = type.GetMembers(null, GetMemberOptions.IgnoreInheritedMembers).Where(m => MetadataUtils.IsReflectable(m, emitter, false, null))
                                          .OrderBy(m => m, MemberOrderer.Instance)
                                          .Select(m => MetadataUtils.ConstructMemberInfo(m, emitter, false, false, null))
                                          .ToList();
                if (members.Count > 0)
                {
                    properties.Add("members", new JArray(members));
                }
            }

            return properties.Count > 0 ? properties : null;
        }

        public static JRaw ConstructAttribute(IAttribute attr, ITypeDefinition currentType, IEmitter emitter)
        {
            var block = new AttributeCreateBlock(emitter, attr);
            var oldWriter = block.SaveWriter();
            block.NewWriter();
            block.Emit();
            var str = emitter.Output.ToString();

            block.RestoreWriter(oldWriter);
            return new JRaw(str);
        }

        public static IEnumerable<IAttribute> GetScriptableAttributes(IEnumerable<IAttribute> attributes, IEmitter emitter, SyntaxTree tree)
        {
            return attributes.Where(a =>
            {
                var typeDef = a.AttributeType.GetDefinition();
                return typeDef != null && !MetadataUtils.IsConditionallyRemoved(a, emitter.Translator, tree) && !emitter.Validator.IsIgnoreType(typeDef) &&
                       !Helpers.IsNonScriptable(typeDef);
            });
        }

        private static bool IsConditionallyRemoved(IAttribute attr, ITranslator translator, SyntaxTree tree)
        {
            var typeDef = attr.AttributeType.GetDefinition();
            if (typeDef != null)
            {
                var symbols = MetadataUtils.FindConditionalSymbols(typeDef);

                if (symbols.Count > 0)
                {
                    if (tree != null)
                    {
                        return !symbols.Intersect(tree.ConditionalSymbols).Any();
                    }
                    else
                    {
                        return !symbols.Intersect(translator.DefineConstants).Any();
                    }
                }

                return false;
            }
            return false;
        }

        private static IList<string> FindConditionalSymbols(IEntity entity)
        {
            var result = new List<string>();
            foreach (var a in entity.Attributes)
            {
                var type = a.AttributeType.GetDefinition();
                if (type != null && type.FullName.Equals("System.Diagnostics.ConditionalAttribute", StringComparison.Ordinal))
                {
                    if (a.PositionalArguments.Count > 0)
                    {
                        var symbol = a.PositionalArguments[0].ConstantValue as string;
                        if (symbol != null)
                        {
                            result.Add(symbol);
                        }
                    }
                }
            }
            return result;
        }

        public static bool IsJsGeneric(IMethod method, IEmitter emitter)
        {
            return method.TypeParameters.Count > 0 && !Helpers.IsIgnoreGeneric(method, emitter);
        }

        public static bool IsJsGeneric(ITypeDefinition type, IEmitter emitter)
        {
            return type.TypeParameterCount > 0 && !Helpers.IsIgnoreGeneric(type);
        }

        public static bool IsReflectable(IMember member, IEmitter emitter, bool ifHasAttribute, SyntaxTree tree)
        {
            bool? reflectable = MetadataUtils.ReflectableValue(member.Attributes, member, emitter);

            if (reflectable != null)
            {
                return reflectable.Value;
            }

            if (member.DeclaringTypeDefinition != null)
            {
                reflectable = MetadataUtils.ReflectableValue(member.DeclaringTypeDefinition.Attributes, member, emitter);
            }

            if (reflectable != null)
            {
                return reflectable.Value;
            }

            var memberAccessibility = emitter.AssemblyInfo.Reflection.MemberAccessibility;

            if (memberAccessibility == null)
            {
                memberAccessibility = ifHasAttribute ? MemberAccessibility.None : MemberAccessibility.All;

                if (ifHasAttribute && MetadataUtils.GetScriptableAttributes(member.Attributes, emitter, tree).Any())
                {
                    memberAccessibility = MemberAccessibility.All;
                }
            }

            return MetadataUtils.IsMemberReflectable(member, memberAccessibility.Value);
        }

        private static bool? ReflectableValue(IList<IAttribute> attributes, IMember member, IEmitter emitter)
        {
            var attr = attributes.FirstOrDefault(a => a.AttributeType.FullName == "Bridge.ReflectableAttribute");

            if (attr != null)
            {
                if (attr.PositionalArguments.Count == 0)
                {
                    return true;
                }

                var value = attr.PositionalArguments.First().ConstantValue;

                if (value is bool)
                {
                    return (bool)attr.PositionalArguments.First().ConstantValue;
                }

                if (value is int)
                {
                    return MetadataUtils.IsMemberReflectable(member, (MemberAccessibility)(int)value);
                }
            }

            return null;
        }

        private static bool IsMemberReflectable(IMember member, MemberAccessibility memberReflectability)
        {
            switch (memberReflectability)
            {
                case MemberAccessibility.None:
                    return false;

                case MemberAccessibility.PublicAndProtected:
                    return !member.IsPrivate && !member.IsInternal;

                case MemberAccessibility.NonPrivate:
                    return !member.IsPrivate;

                case MemberAccessibility.All:
                    return true;

                default:
                    throw new ArgumentException("reflectability");
            }
        }

        private static JObject ConstructParameterInfo(IParameter p, IEmitter emitter, bool includeDeclaringType, bool isGenericSpecialization, SyntaxTree tree)
        {
            var result = new JObject();

            var attr = MetadataUtils.GetScriptableAttributes(p.Attributes, emitter, tree).ToList();
            if (attr.Count > 0)
            {
                JArray attrArr = new JArray();
                foreach (var a in attr)
                {
                    attrArr.Add(MetadataUtils.ConstructAttribute(a, null, emitter));
                }

                result.Add("attr", attrArr);
            }

            result.Add("name", p.Name);

            if (p.IsOptional)
            {
                var typeParam = p.Type as ITypeParameter;
                if (typeParam != null && p.ConstantValue == null)
                {
                    result.Add("defaultValue",
                        typeParam.OwnerType == SymbolKind.Method
                            ? new JRaw(emitter.ToJavaScript(p.ConstantValue))
                            : new JRaw(string.Format("{0}({1})", JS.Funcs.BRIDGE_GETDEFAULTVALUE, typeParam.Name)));
                }
                else
                {
                    result.Add("defaultValue", new JRaw(emitter.ToJavaScript(p.ConstantValue)));
                }

                result.Add("isOptional", true);
            }

            if (p.IsOut)
            {
                result.Add("isOut", true);
            }

            if (p.IsRef)
            {
                result.Add("isRef", true);
            }

            if (p.IsParams)
            {
                result.Add("isParams", true);
            }

            result.Add("parameterType", new JRaw(MetadataUtils.GetTypeName(p.Type, emitter, isGenericSpecialization)));
            result.Add("position", p.Owner.Parameters.IndexOf(p));

            var nameAttr = p.Attributes.FirstOrDefault(a => a.AttributeType.FullName == "Bridge.NameAttribute");
            if (nameAttr != null)
            {
                var value = nameAttr.PositionalArguments.First().ConstantValue;
                if (value is string)
                {
                    var name = value.ToString();
                    if (Helpers.IsReservedWord(name))
                    {
                        name = Helpers.ChangeReservedWord(name);
                    }

                    result.Add("sname", name);
                }
            }

            return result;
        }

        public static JObject ConstructMemberInfo(IMember m, IEmitter emitter, bool includeDeclaringType, bool isGenericSpecialization, SyntaxTree tree)
        {
            if (m is IMethod && ((IMethod)m).IsConstructor)
            {
                return MetadataUtils.ConstructConstructorInfo((IMethod)m, emitter, includeDeclaringType, isGenericSpecialization, tree);
            }

            var properties = MetadataUtils.GetCommonMemberInfoProperties(m, emitter, includeDeclaringType, isGenericSpecialization, tree);
            if (m.IsStatic)
            {
                properties.Add("isStatic", true);
            }

            if (m is IMethod)
            {
                var method = (IMethod)m;
                var inline = emitter.GetInline(method);

                if (string.IsNullOrEmpty(inline) && method.Attributes.Any(a => a.AttributeType.FullName == "Bridge.ExpandParamsAttribute"))
                {
                    properties.Add("exp", true);
                }

                properties.Add("type", (int)MemberTypes.Method);

                var parametersInfo = method.Parameters.Select(p => MetadataUtils.ConstructParameterInfo(p, emitter, false, false, tree)).ToList();
                if (parametersInfo.Count > 0)
                {
                    properties.Add("paramsInfo", new JArray(parametersInfo));
                }

                if (!string.IsNullOrEmpty(inline))
                {
                    if (inline.StartsWith("<self>"))
                    {
                        inline = inline.Substring(6);
                    }

                    var block = new InlineArgumentsBlock(emitter, new ArgumentsInfo(emitter, method), inline, method);
                    var oldWriter = block.SaveWriter();
                    block.NewWriter();
                    block.EmitFunctionReference(true);
                    var str = emitter.Output.ToString();

                    block.RestoreWriter(oldWriter);
                    properties.Add("tpcount", method.TypeParameters.Count);
                    properties.Add("def", new JRaw(str));
                }
                else
                {
                    if (MetadataUtils.IsJsGeneric(method, emitter))
                    {
                        properties.Add("tpcount", method.TypeParameters.Count);
                    }

                    string sname;
                    if (method.IsAccessor)
                    {
                        if (method.AccessorOwner is IProperty)
                        {
                            sname = Helpers.GetPropertyRef(method.AccessorOwner, emitter, ((IProperty)method.AccessorOwner).Setter == method);
                        }
                        else if (method.AccessorOwner is IEvent)
                        {
                            sname = Helpers.GetEventRef(method.AccessorOwner, emitter, ((IEvent)method.AccessorOwner).RemoveAccessor == method);
                        }
                        else
                        {
                            sname = OverloadsCollection.Create(emitter, method).GetOverloadName();
                        }
                    }
                    else
                    {
                        sname = OverloadsCollection.Create(emitter, method).GetOverloadName();
                    }

                    properties.Add("sname", sname);
                }
                properties.Add("returnType", new JRaw(MetadataUtils.GetTypeName(method.ReturnType, emitter, isGenericSpecialization)));

                var attr = MetadataUtils.GetScriptableAttributes(method.ReturnTypeAttributes, emitter, tree).ToList();
                if (attr.Count > 0)
                {
                    JArray attrArr = new JArray();
                    foreach (var a in attr)
                    {
                        attrArr.Add(MetadataUtils.ConstructAttribute(a, null, emitter));
                    }

                    properties.Add("returnTypeAttributes", attrArr);
                }

                if (method.Parameters.Count > 0)
                {
                    properties.Add("params", new JArray(method.Parameters.Select(p => new JRaw(MetadataUtils.GetTypeName(p.Type, emitter, isGenericSpecialization)))));
                }
            }
            else if (m is IField)
            {
                var field = (IField)m;

                properties.Add("type", (int)MemberTypes.Field);
                properties.Add("returnType", new JRaw(MetadataUtils.GetTypeName(field.ReturnType, emitter, isGenericSpecialization)));
                properties.Add("sname", OverloadsCollection.Create(emitter, field).GetOverloadName());
                properties.Add("isReadOnly", field.IsReadOnly);
            }
            else if (m is IProperty)
            {
                var prop = (IProperty)m;
                properties.Add("type", (int)MemberTypes.Property);
                properties.Add("returnType", new JRaw(MetadataUtils.GetTypeName(prop.ReturnType, emitter, isGenericSpecialization)));
                if (prop.Parameters.Count > 0)
                {
                    properties.Add("params", new JArray(prop.Parameters.Select(p => new JRaw(MetadataUtils.GetTypeName(p.Type, emitter, isGenericSpecialization)))));
                }

                if (prop.IsIndexer)
                {
                    properties.Add("isIndexer", true);
                }

                if (prop.IsIndexer)
                {
                    if (prop.Getter != null)
                    {
                        var parametersInfo = prop.Getter.Parameters.Select(p => MetadataUtils.ConstructParameterInfo(p, emitter, false, false, tree)).ToList();
                        if (parametersInfo.Count > 0)
                        {
                            properties.Add("indexParamsInfo", new JArray(parametersInfo));
                        }
                    }
                    else if (prop.Setter != null)
                    {
                        var parametersInfo = prop.Setter.Parameters.Take(prop.Setter.Parameters.Count - 1).Select(p => MetadataUtils.ConstructParameterInfo(p, emitter, false, false, tree)).ToList();
                        if (parametersInfo.Count > 0)
                        {
                            properties.Add("indexParamsInfo", new JArray(parametersInfo));
                        }
                    }
                }

                if (!Helpers.IsFieldProperty(prop, emitter))
                {
                    if (prop.CanGet)
                    {
                        properties.Add("getter", MetadataUtils.ConstructMemberInfo(prop.Getter, emitter, includeDeclaringType, isGenericSpecialization, tree));
                    }

                    if (prop.CanSet)
                    {
                        properties.Add("setter", MetadataUtils.ConstructMemberInfo(prop.Setter, emitter, includeDeclaringType, isGenericSpecialization, tree));
                    }
                }
                else
                {
                    var fieldName = OverloadsCollection.Create(emitter, prop).GetOverloadName();
                    if (prop.CanGet)
                    {
                        properties.Add("getter", MetadataUtils.ConstructFieldPropertyAccessor(prop.Getter, emitter, fieldName, true, includeDeclaringType, isGenericSpecialization, tree));
                    }
                    if (prop.CanSet)
                    {
                        properties.Add("setter", MetadataUtils.ConstructFieldPropertyAccessor(prop.Setter, emitter, fieldName, false, includeDeclaringType, isGenericSpecialization, tree));
                    }

                    properties.Add("fname", fieldName);
                }
            }
            else if (m is IEvent)
            {
                var evt = (IEvent)m;

                properties.Add("type", (int)MemberTypes.Event);
                properties.Add("adder", MetadataUtils.ConstructMemberInfo(evt.AddAccessor, emitter, includeDeclaringType, isGenericSpecialization, tree));
                properties.Add("remover", MetadataUtils.ConstructMemberInfo(evt.RemoveAccessor, emitter, includeDeclaringType, isGenericSpecialization, tree));
            }
            else
            {
                throw new ArgumentException("Invalid member " + m);
            }

            return properties;
        }

        public static JObject ConstructFieldPropertyAccessor(IMethod m, IEmitter emitter, string fieldName, bool isGetter, bool includeDeclaringType, bool isGenericSpecialization, SyntaxTree tree)
        {
            var properties = MetadataUtils.GetCommonMemberInfoProperties(m, emitter, includeDeclaringType, isGenericSpecialization, tree);
            properties.Add("type", (int)MemberTypes.Method);
            if (m.Parameters.Count > 0)
            {
                properties.Add("params", new JArray(m.Parameters.Select(p => new JRaw(MetadataUtils.GetTypeName(p.Type, emitter, isGenericSpecialization)))));
            }

            properties.Add("returnType", new JRaw(MetadataUtils.GetTypeName(m.ReturnType, emitter, isGenericSpecialization)));
            properties.Add(isGetter ? "fget" : "fset", fieldName);
            if (m.IsStatic)
            {
                properties.Add("isStatic", true);
            }

            return properties;
        }

        private static JObject ConstructConstructorInfo(IMethod constructor, IEmitter emitter, bool includeDeclaringType, bool isGenericSpecialization, SyntaxTree tree)
        {
            var properties = MetadataUtils.GetCommonMemberInfoProperties(constructor, emitter, includeDeclaringType, isGenericSpecialization, tree);

            if (Helpers.IsNonScriptable(constructor))
            {
                return null;
            }

            properties.Add("type", (int)MemberTypes.Constructor);
            if (constructor.Parameters.Count > 0)
            {
                properties.Add("params", new JArray(constructor.Parameters.Select(p => new JRaw(MetadataUtils.GetTypeName(p.Type, emitter, isGenericSpecialization)))));
            }

            var parametersInfo = constructor.Parameters.Select(p => MetadataUtils.ConstructParameterInfo(p, emitter, false, false, tree)).ToList();
            if (parametersInfo.Count > 0)
            {
                properties.Add("paramsInfo", new JArray(parametersInfo));
            }

            var inline = emitter.GetInline(constructor);
            var typeDef = constructor.DeclaringTypeDefinition;
            IAttribute customCtor = null;
            if (typeDef != null)
            {
                customCtor = emitter.Validator.GetAttribute(typeDef.Attributes, Translator.Bridge_ASSEMBLY + ".ConstructorAttribute");
            }

            if (string.IsNullOrEmpty(inline) && customCtor == null)
            {
                string sname;
                if (constructor.IsStatic || constructor.DeclaringType.Kind == TypeKind.Anonymous)
                {
                    sname = JS.Funcs.CONSTRUCTOR;
                }
                else
                {
                    sname = OverloadsCollection.Create(emitter, constructor).GetOverloadName();
                }

                properties.Add("sname", sname);
            }

            if (constructor.IsStatic)
            {
                properties.Add("sm", true);
            }

            if (string.IsNullOrEmpty(inline) && constructor.Attributes.Any(a => a.AttributeType.FullName == "Bridge.ExpandParamsAttribute"))
            {
                properties.Add("exp", true);
            }

            if (!string.IsNullOrEmpty(inline))
            {
                var block = new InlineArgumentsBlock(emitter, new ArgumentsInfo(emitter, constructor), inline, constructor);
                var oldWriter = block.SaveWriter();
                block.NewWriter();
                block.EmitFunctionReference(true);
                var str = emitter.Output.ToString();
                block.RestoreWriter(oldWriter);

                properties.Add("def", new JRaw(str));
            }
            else if (customCtor != null)
            {
                inline = customCtor.PositionalArguments[0].ConstantValue.ToString();
                if (Regex.Match(inline, @"\s*\{\s*\}\s*").Success)
                {
                    var names = constructor.Parameters.Select(p => p.Name);

                    StringBuilder sb = new StringBuilder("function(" + string.Join(", ", names.ToArray()) + ") { return {");

                    bool needComma = false;
                    foreach (var name in names)
                    {
                        if (needComma)
                        {
                            sb.Append(", ");
                        }

                        needComma = true;

                        sb.Append(name + ": " + name);
                    }
                    sb.Append("};}");
                    properties.Add("def", new JRaw(sb.ToString()));
                }
                else
                {
                    var block = new InlineArgumentsBlock(emitter, new ArgumentsInfo(emitter, constructor), inline, constructor);
                    var oldWriter = block.SaveWriter();
                    block.NewWriter();
                    block.EmitFunctionReference(true);
                    var str = emitter.Output.ToString();
                    block.RestoreWriter(oldWriter);

                    properties.Add("def", new JRaw(str));
                }
            }

            return properties;
        }

        private static JObject GetCommonMemberInfoProperties(IMember m, IEmitter emitter, bool includeDeclaringType, bool isGenericSpecialization, SyntaxTree tree)
        {
            var result = new JObject();
            var attr = MetadataUtils.GetScriptableAttributes(m.Attributes, emitter, tree).ToList();
            if (attr.Count > 0)
            {
                JArray attrArr = new JArray();
                foreach (var a in attr)
                {
                    attrArr.Add(MetadataUtils.ConstructAttribute(a, m.DeclaringTypeDefinition, emitter));
                }

                result.Add("attr", attrArr);
            }

            if (includeDeclaringType)
            {
                result.Add("typeDef", new JRaw(MetadataUtils.GetTypeName(m.DeclaringType, emitter, isGenericSpecialization)));
            }

            if (m.IsOverride)
            {
                result.Add("isOverride", true);
            }

            if (m.IsVirtual)
            {
                result.Add("isVirtual", true);
            }

            if (m.IsAbstract)
            {
                result.Add("isAbstract", true);
            }

            if (m.Accessibility != Accessibility.None)
            {
                result.Add("accessibility", (int)m.Accessibility);
            }

            if (m.IsSealed)
            {
                result.Add("isSealed", true);
            }

            if (m.IsSynthetic)
            {
                result.Add("isSynthetic", true);
            }

            result.Add("name", m.Name);

            return result;
        }

        private static string GetTypeName(IType type, IEmitter emitter, bool isGenericSpecialization)
        {
            var typeParam = type as ITypeParameter;
            if (typeParam != null && typeParam.OwnerType == SymbolKind.Method)
            {
                return "Object";
            }

            return BridgeTypes.ToJsName(type, emitter);
        }
    }
}