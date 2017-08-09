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
using ICSharpCode.NRefactory.Semantics;

namespace Bridge.Translator
{
    public class MetadataUtils
    {
        public static JObject ConstructTypeMetadata(ITypeDefinition type, IEmitter emitter, bool ifHasAttribute, SyntaxTree tree)
        {
            var properties = ifHasAttribute ? new JObject() : MetadataUtils.GetCommonTypeProperties(type, emitter);
            var scriptableAttributes = MetadataUtils.GetScriptableAttributes(type.Attributes, emitter, tree).ToList();
            if (scriptableAttributes.Count != 0)
            {
                JArray attrArr = new JArray();
                foreach (var a in scriptableAttributes)
                {
                    attrArr.Add(MetadataUtils.ConstructAttribute(a, type, emitter));
                }

                properties.Add("at", attrArr);
            }

            if (type.Kind == TypeKind.Class || type.Kind == TypeKind.Struct || type.Kind == TypeKind.Interface || type.Kind == TypeKind.Enum)
            {
                var members = type.Members.Where(m => MetadataUtils.IsReflectable(m, emitter, ifHasAttribute, tree))
                                          .OrderBy(m => m, MemberOrderer.Instance)
                                          .Select(m => MetadataUtils.ConstructMemberInfo(m, emitter, false, false, tree))
                                          .ToList();
                if (members.Count > 0)
                {
                    properties.Add("m", new JArray(members));
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
                        properties.Add("ni", true);
                    }

                    if (allowMultiple)
                    {
                        properties.Add("am", true);
                    }
                }
            }

            return properties.Count > 0 ? properties : null;
        }

        public static JObject ConstructITypeMetadata(IType type, IEmitter emitter)
        {
            var properties = MetadataUtils.GetCommonTypeProperties(type, emitter);

            if (type.Kind == TypeKind.Class || type.Kind == TypeKind.Anonymous)
            {
                var members = type.GetMembers(null, GetMemberOptions.IgnoreInheritedMembers).Where(m => MetadataUtils.IsReflectable(m, emitter, false, null))
                                          .OrderBy(m => m, MemberOrderer.Instance)
                                          .Select(m => MetadataUtils.ConstructMemberInfo(m, emitter, false, false, null))
                                          .ToList();
                if (members.Count > 0)
                {
                    properties.Add("m", new JArray(members));
                }
            }

            return properties.Count > 0 ? properties : null;
        }

        private static JObject GetCommonTypeProperties(IType type, IEmitter emitter)
        {
            var result = new JObject();
            var typedef = type.GetDefinition();

            if (typedef != null)
            {
                var cecilType = type.Kind == TypeKind.Anonymous ? null : emitter.GetTypeDefinition(type);

                if (type.DeclaringType != null)
                {
                    result.Add("td", new JRaw(MetadataUtils.GetTypeName(type.DeclaringType, emitter, false)));
                }

                if (cecilType != null)
                {
                    result.Add("att", (int)cecilType.Attributes);
                }

                if (typedef.Accessibility != Accessibility.None)
                {
                    result.Add("a", (int)typedef.Accessibility);
                }

                if (typedef.IsStatic)
                {
                    result.Add("s", true);
                }
            }

            return result;
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
                return typeDef != null && !MetadataUtils.IsConditionallyRemoved(a, emitter.Translator, tree) && !emitter.Validator.IsExternalType(typeDef) &&
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
            if (member.IsExplicitInterfaceImplementation)
            {
                return false;
            }

            if (member.Attributes.Any(a => a.AttributeType.FullName == "Bridge.NonScriptableAttribute"))
            {
                return false;
            }

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

            if (memberAccessibility == null || memberAccessibility.Length == 0)
            {
                memberAccessibility = ((AssemblyInfo)emitter.AssemblyInfo).ReflectionInternal.MemberAccessibility;
            }

            if (memberAccessibility == null || memberAccessibility.Length == 0)
            {
                memberAccessibility = new[] { ifHasAttribute ? MemberAccessibility.None : MemberAccessibility.All };

                if (ifHasAttribute && MetadataUtils.GetScriptableAttributes(member.Attributes, emitter, tree).Any())
                {
                    memberAccessibility = new[] { MemberAccessibility.All };
                }
            }

            return MetadataUtils.IsMemberReflectable(member, memberAccessibility);
        }

        private static bool? ReflectableValue(IList<IAttribute> attributes, IMember member, IEmitter emitter)
        {
            var attr = attributes.FirstOrDefault(a => a.AttributeType.FullName == "Bridge.ReflectableAttribute");

            if (attr == null)
            {
                attr = Helpers.GetInheritedAttribute(member, "Bridge.ReflectableAttribute");

                if (attr != null)
                {
                    if (attr.NamedArguments.Count > 0 && attr.NamedArguments.Any(arg => arg.Key.Name == "Inherits"))
                    {
                        var inherits = attr.NamedArguments.First(arg => arg.Key.Name == "Inherits");

                        if (!(bool)inherits.Value.ConstantValue)
                        {
                            attr = null;
                        }
                    }
                    else
                    {
                        attr = null;
                    }
                }
            }

            if (attr != null)
            {
                if (attr.PositionalArguments.Count == 0)
                {
                    return true;
                }

                if (attr.PositionalArguments.Count > 1)
                {
                    var list = new List<MemberAccessibility>();
                    for (int i = 0; i < attr.PositionalArguments.Count; i++)
                    {
                        object v = attr.PositionalArguments[i].ConstantValue;
                        list.Add((MemberAccessibility)(int)v);
                    }

                    return MetadataUtils.IsMemberReflectable(member, list.ToArray());
                }
                else
                {
                    var rr = attr.PositionalArguments.First();
                    var value = rr.ConstantValue;

                    if (rr is ArrayCreateResolveResult)
                    {
                        return MetadataUtils.IsMemberReflectable(member, ((ArrayCreateResolveResult)rr).InitializerElements.Select(ie => (int)ie.ConstantValue).Cast<MemberAccessibility>().ToArray());
                    }

                    if (value is bool)
                    {
                        return (bool)attr.PositionalArguments.First().ConstantValue;
                    }

                    if (value is int)
                    {
                        return MetadataUtils.IsMemberReflectable(member, new[] { (MemberAccessibility)(int)value });
                    }

                    if (value is int[])
                    {
                        return MetadataUtils.IsMemberReflectable(member, ((int[])value).Cast<MemberAccessibility>().ToArray());
                    }
                }
            }

            return null;
        }

        private static bool IsMemberReflectable(IMember member, MemberAccessibility[] memberReflectability)
        {
            if (member.IsExplicitInterfaceImplementation)
            {
                return false;
            }

            foreach (var memberAccessibility in memberReflectability)
            {
                if (memberAccessibility == MemberAccessibility.All)
                {
                    return true;
                }

                if (memberAccessibility == MemberAccessibility.None)
                {
                    return false;
                }

                var accesibiliy = new List<string>();

                if (memberAccessibility.HasFlag(MemberAccessibility.Public))
                {
                    accesibiliy.Add("Public");
                }

                if (memberAccessibility.HasFlag(MemberAccessibility.Private))
                {
                    accesibiliy.Add("Private");
                }

                if (memberAccessibility.HasFlag(MemberAccessibility.Internal))
                {
                    accesibiliy.Add("Internal");
                }

                if (memberAccessibility.HasFlag(MemberAccessibility.Protected))
                {
                    accesibiliy.Add("Protected");
                }

                if (accesibiliy.Count > 0)
                {
                    if (member.Accessibility == Accessibility.ProtectedOrInternal)
                    {
                        if (!(accesibiliy.Contains("Protected") || accesibiliy.Contains("Internal")))
                        {
                            continue;
                        }
                    }
                    else if (!accesibiliy.Contains(member.Accessibility.ToString()))
                    {
                        continue;
                    }
                }

                if (memberAccessibility.HasFlag(MemberAccessibility.Instance) && member.IsStatic)
                {
                    continue;
                }

                if (memberAccessibility.HasFlag(MemberAccessibility.Static) && !member.IsStatic)
                {
                    continue;
                }

                var kind = new List<string>();

                if (memberAccessibility.HasFlag(MemberAccessibility.Constructor))
                {
                    kind.Add("Constructor");
                }

                if (memberAccessibility.HasFlag(MemberAccessibility.Field))
                {
                    kind.Add("Field");
                }

                if (memberAccessibility.HasFlag(MemberAccessibility.Event))
                {
                    kind.Add("Event");
                }

                if (memberAccessibility.HasFlag(MemberAccessibility.Method))
                {
                    kind.Add("Method");
                }

                if (memberAccessibility.HasFlag(MemberAccessibility.Property))
                {
                    kind.Add("Property");
                }

                if (kind.Count > 0 && !kind.Contains(member.SymbolKind.ToString()))
                {
                    continue;
                }

                return true;
            }

            return false;
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

                result.Add("at", attrArr);
            }

            result.Add("n", p.Name);

            if (p.IsOptional)
            {
                var typeParam = p.Type as ITypeParameter;
                if (typeParam != null && p.ConstantValue == null)
                {
                    result.Add("dv",
                        typeParam.OwnerType == SymbolKind.Method
                            ? new JRaw(emitter.ToJavaScript(p.ConstantValue))
                            : new JRaw(string.Format("{0}({1})", JS.Funcs.BRIDGE_GETDEFAULTVALUE, typeParam.Name)));
                }
                else
                {
                    result.Add("dv", new JRaw(emitter.ToJavaScript(p.ConstantValue)));
                }

                result.Add("o", true);
            }

            if (p.IsOut)
            {
                result.Add("out", true);
            }

            if (p.IsRef)
            {
                result.Add("ref", true);
            }

            if (p.IsParams)
            {
                result.Add("ip", true);
            }

            result.Add("pt", new JRaw(MetadataUtils.GetTypeName(p.Type, emitter, isGenericSpecialization)));
            result.Add("ps", p.Owner.Parameters.IndexOf(p));

            var nameAttr = p.Attributes.FirstOrDefault(a => a.AttributeType.FullName == "Bridge.NameAttribute");
            if (nameAttr != null)
            {
                var value = nameAttr.PositionalArguments.First().ConstantValue;
                if (value is string)
                {
                    var name = Helpers.ConvertNameTokens(value.ToString(), p.Name);
                    if (Helpers.IsReservedWord(emitter, name))
                    {
                        name = Helpers.ChangeReservedWord(name);
                    }

                    result.Add("sn", name);
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
                properties.Add("is", true);
            }

            if (m is IMethod)
            {
                var method = (IMethod)m;
                var inline = emitter.GetInline(method);

                if (string.IsNullOrEmpty(inline) && method.Attributes.Any(a => a.AttributeType.FullName == "Bridge.ExpandParamsAttribute"))
                {
                    properties.Add("exp", true);
                }

                properties.Add("t", (int)MemberTypes.Method);

                var parametersInfo = method.Parameters.Select(p => MetadataUtils.ConstructParameterInfo(p, emitter, false, false, tree)).ToList();
                if (parametersInfo.Count > 0)
                {
                    properties.Add("pi", new JArray(parametersInfo));
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
                    properties.Add("tpc", method.TypeParameters.Count);
                    properties.Add("def", new JRaw(str));
                }
                else
                {
                    if (MetadataUtils.IsJsGeneric(method, emitter))
                    {
                        properties.Add("tpc", method.TypeParameters.Count);
                        properties.Add("tprm", new JArray(method.TypeParameters.Select(tp => tp.Name).ToArray()));
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

                    if (sname.Contains("\""))
                    {
                        properties.Add("sn", new JRaw(sname));
                    }
                    else
                    {
                        properties.Add("sn", sname);
                    }
                }
                properties.Add("rt", new JRaw(MetadataUtils.GetTypeName(method.ReturnType, emitter, isGenericSpecialization)));

                var attr = MetadataUtils.GetScriptableAttributes(method.ReturnTypeAttributes, emitter, tree).ToList();
                if (attr.Count > 0)
                {
                    JArray attrArr = new JArray();
                    foreach (var a in attr)
                    {
                        attrArr.Add(MetadataUtils.ConstructAttribute(a, null, emitter));
                    }

                    properties.Add("rta", attrArr);
                }

                if (method.Parameters.Count > 0)
                {
                    properties.Add("p", new JArray(method.Parameters.Select(p => new JRaw(MetadataUtils.GetTypeName(p.Type, emitter, isGenericSpecialization)))));
                }

                MetadataUtils.AddBox(m, emitter, properties);
            }
            else if (m is IField)
            {
                var field = (IField)m;

                properties.Add("t", (int)MemberTypes.Field);
                properties.Add("rt", new JRaw(MetadataUtils.GetTypeName(field.ReturnType, emitter, isGenericSpecialization)));
                properties.Add("sn", OverloadsCollection.Create(emitter, field).GetOverloadName());
                if (field.IsReadOnly)
                {
                    properties.Add("ro", field.IsReadOnly);
                }

                MetadataUtils.AddBox(m, emitter, properties);
            }
            else if (m is IProperty)
            {
                var prop = (IProperty)m;
                properties.Add("t", (int)MemberTypes.Property);
                properties.Add("rt", new JRaw(MetadataUtils.GetTypeName(prop.ReturnType, emitter, isGenericSpecialization)));
                if (prop.Parameters.Count > 0)
                {
                    properties.Add("p", new JArray(prop.Parameters.Select(p => new JRaw(MetadataUtils.GetTypeName(p.Type, emitter, isGenericSpecialization)))));
                }

                if (prop.IsIndexer)
                {
                    properties.Add("i", true);
                }

                if (prop.IsIndexer)
                {
                    if (prop.Getter != null)
                    {
                        var parametersInfo = prop.Getter.Parameters.Select(p => MetadataUtils.ConstructParameterInfo(p, emitter, false, false, tree)).ToList();
                        if (parametersInfo.Count > 0)
                        {
                            properties.Add("ipi", new JArray(parametersInfo));
                        }
                    }
                    else if (prop.Setter != null)
                    {
                        var parametersInfo = prop.Setter.Parameters.Take(prop.Setter.Parameters.Count - 1).Select(p => MetadataUtils.ConstructParameterInfo(p, emitter, false, false, tree)).ToList();
                        if (parametersInfo.Count > 0)
                        {
                            properties.Add("ipi", new JArray(parametersInfo));
                        }
                    }
                }

                var inlineGetter = prop.CanGet && (emitter.GetInline(prop.Getter) != null || Helpers.IsScript(prop.Getter));
                var inlineSetter = prop.CanSet && (emitter.GetInline(prop.Setter) != null || Helpers.IsScript(prop.Setter));

                if (inlineGetter || inlineSetter || prop.IsIndexer)
                {
                    if (prop.CanGet)
                    {
                        properties.Add("g", MetadataUtils.ConstructMemberInfo(prop.Getter, emitter, includeDeclaringType, isGenericSpecialization, tree));
                    }

                    if (prop.CanSet)
                    {
                        properties.Add("s", MetadataUtils.ConstructMemberInfo(prop.Setter, emitter, includeDeclaringType, isGenericSpecialization, tree));
                    }
                }
                else
                {
                    var fieldName = OverloadsCollection.Create(emitter, prop).GetOverloadName();
                    if (prop.CanGet)
                    {
                        properties.Add("g", MetadataUtils.ConstructFieldPropertyAccessor(prop.Getter, emitter, fieldName, true, includeDeclaringType, isGenericSpecialization, tree));
                    }
                    if (prop.CanSet)
                    {
                        properties.Add("s", MetadataUtils.ConstructFieldPropertyAccessor(prop.Setter, emitter, fieldName, false, includeDeclaringType, isGenericSpecialization, tree));
                    }

                    properties.Add("fn", fieldName);
                }
            }
            else if (m is IEvent)
            {
                var evt = (IEvent)m;

                properties.Add("t", (int)MemberTypes.Event);
                properties.Add("ad", MetadataUtils.ConstructMemberInfo(evt.AddAccessor, emitter, includeDeclaringType, isGenericSpecialization, tree));
                properties.Add("r", MetadataUtils.ConstructMemberInfo(evt.RemoveAccessor, emitter, includeDeclaringType, isGenericSpecialization, tree));
            }
            else
            {
                throw new ArgumentException("Invalid member " + m);
            }

            return properties;
        }

        private static void AddBox(IMember m, IEmitter emitter, JObject properties)
        {
            bool needBox = ConversionBlock.IsBoxable(m.ReturnType, emitter)
                        || m.ReturnType.IsKnownType(KnownTypeCode.NullableOfT)
                        && ConversionBlock.IsBoxable(NullableType.GetUnderlyingType(m.ReturnType), emitter);

            if (needBox)
            {
                StringBuilder sb = new StringBuilder("function (" + JS.Vars.V + ") { return ");

                sb.Append(JS.Types.Bridge.BOX);
                sb.Append("(" + JS.Vars.V + ", ");
                sb.Append(ConversionBlock.GetBoxedType(m.ReturnType, emitter));

                var inlineMethod = ConversionBlock.GetInlineMethod(emitter, CS.Methods.TOSTRING,
                    emitter.Resolver.Compilation.FindType(KnownTypeCode.String), m.ReturnType, null);

                if (inlineMethod != null)
                {
                    sb.Append(", " + inlineMethod);
                }

                inlineMethod = ConversionBlock.GetInlineMethod(emitter, CS.Methods.GETHASHCODE,
                    emitter.Resolver.Compilation.FindType(KnownTypeCode.Int32), m.ReturnType, null);

                if (inlineMethod != null)
                {
                    sb.Append(", " + inlineMethod);
                }

                sb.Append(");");

                sb.Append("}");
                properties.Add(JS.Fields.BOX, new JRaw(sb.ToString()));
            }
        }

        public static JObject ConstructFieldPropertyAccessor(IMethod m, IEmitter emitter, string fieldName, bool isGetter, bool includeDeclaringType, bool isGenericSpecialization, SyntaxTree tree)
        {
            var properties = MetadataUtils.GetCommonMemberInfoProperties(m, emitter, includeDeclaringType, isGenericSpecialization, tree);
            properties.Add("t", (int)MemberTypes.Method);
            if (m.Parameters.Count > 0)
            {
                properties.Add("p", new JArray(m.Parameters.Select(p => new JRaw(MetadataUtils.GetTypeName(p.Type, emitter, isGenericSpecialization)))));
            }

            properties.Add("rt", new JRaw(MetadataUtils.GetTypeName(m.ReturnType, emitter, isGenericSpecialization)));
            properties.Add(isGetter ? "fg" : "fs", fieldName);
            if (m.IsStatic)
            {
                properties.Add("is", true);
            }

            MetadataUtils.AddBox(m, emitter, properties);

            return properties;
        }

        private static JObject ConstructConstructorInfo(IMethod constructor, IEmitter emitter, bool includeDeclaringType, bool isGenericSpecialization, SyntaxTree tree)
        {
            var properties = MetadataUtils.GetCommonMemberInfoProperties(constructor, emitter, includeDeclaringType, isGenericSpecialization, tree);

            if (Helpers.IsNonScriptable(constructor))
            {
                return null;
            }

            properties.Add("t", (int)MemberTypes.Constructor);
            if (constructor.Parameters.Count > 0)
            {
                properties.Add("p", new JArray(constructor.Parameters.Select(p => new JRaw(MetadataUtils.GetTypeName(p.Type, emitter, isGenericSpecialization)))));
            }

            var parametersInfo = constructor.Parameters.Select(p => MetadataUtils.ConstructParameterInfo(p, emitter, false, false, tree)).ToList();
            if (parametersInfo.Count > 0)
            {
                properties.Add("pi", new JArray(parametersInfo));
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

                properties.Add("sn", sname);
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

                    StringBuilder sb = new StringBuilder("function (" + string.Join(", ", names.ToArray()) + ") { return {");

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

                result.Add("at", attrArr);
            }

            if (includeDeclaringType)
            {
                result.Add("td", new JRaw(MetadataUtils.GetTypeName(m.DeclaringType, emitter, isGenericSpecialization)));
            }

            if (m.IsOverride)
            {
                result.Add("ov", true);
            }

            if (m.IsVirtual)
            {
                result.Add("v", true);
            }

            if (m.IsAbstract)
            {
                result.Add("ab", true);
            }

            if (m.Accessibility != Accessibility.None)
            {
                result.Add("a", (int)m.Accessibility);
            }

            if (m.IsSealed)
            {
                result.Add("sl", true);
            }

            if (m.IsSynthetic)
            {
                result.Add("isSynthetic", true);
            }

            result.Add("n", m.Name);

            return result;
        }

        internal static string GetTypeName(IType type, IEmitter emitter, bool isGenericSpecialization, bool asDefinition = false)
        {
            var typeParam = type as ITypeParameter;
            if (typeParam != null && (typeParam.OwnerType == SymbolKind.Method || Helpers.IsIgnoreGeneric(typeParam.Owner, emitter)))
            {
                return JS.Types.System.Object.NAME;
            }

            var itypeDef = type.GetDefinition();
            if (itypeDef != null && itypeDef.Attributes.Any(a => a.AttributeType.FullName == "Bridge.NonScriptableAttribute"))
            {
                return JS.Types.System.Object.NAME;
            }

            var name = BridgeTypes.ToJsName(type, emitter, asDefinition, skipMethodTypeParam: true);

            if (emitter.NamespacesCache != null && name.StartsWith(type.Namespace + "."))
            {
                int key;
                if (emitter.NamespacesCache.ContainsKey(type.Namespace))
                {
                    key = emitter.NamespacesCache[type.Namespace];
                }
                else
                {
                    key = emitter.NamespacesCache.Count;
                    emitter.NamespacesCache.Add(type.Namespace, key);
                }

                name = string.Concat("$n[", key, "]", name.Substring(type.Namespace.Length));
            }

            return name;
        }
    }
}