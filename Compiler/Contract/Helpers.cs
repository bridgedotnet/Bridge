using Bridge.Contract.Constants;

using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using ICSharpCode.NRefactory.TypeSystem.Implementation;
using Mono.Cecil;

using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text.RegularExpressions;

namespace Bridge.Contract
{
    public static partial class Helpers
    {
        public static void AcceptChildren(this AstNode node, IAstVisitor visitor)
        {
            foreach (AstNode child in node.Children)
            {
                child.AcceptVisitor(visitor);
            }
        }

        public static string ReplaceSpecialChars(string name)
        {
            return name.Replace('`', JS.Vars.D).Replace('/', '.').Replace("+", ".");
        }

        public static bool HasGenericArgument(GenericInstanceType type, TypeDefinition searchType, IEmitter emitter, bool deep)
        {
            foreach (var gArg in type.GenericArguments)
            {
                var orig = gArg;

                var gArgDef = gArg;
                if (gArgDef.IsGenericInstance)
                {
                    gArgDef = gArgDef.GetElementType();
                }

                TypeDefinition gTypeDef = null;
                try
                {
                    gTypeDef = Helpers.ToTypeDefinition(gArgDef, emitter);
                }
                catch
                {
                }

                if (gTypeDef == searchType)
                {
                    return true;
                }

                if (deep && gTypeDef != null && (Helpers.IsSubclassOf(gTypeDef, searchType, emitter) ||
                    (searchType.IsInterface && Helpers.IsImplementationOf(gTypeDef, searchType, emitter))))
                {
                    return true;
                }

                if (orig.IsGenericInstance)
                {
                    var result = Helpers.HasGenericArgument((GenericInstanceType)orig, searchType, emitter, deep);

                    if (result)
                    {
                        return true;
                    }
                }
            }

            return false;
        }

        public static bool IsTypeArgInSubclass(TypeDefinition thisTypeDefinition, TypeDefinition typeArgDefinition, IEmitter emitter, bool deep = true)
        {
            foreach (TypeReference interfaceReference in thisTypeDefinition.Interfaces)
            {
                var gBaseType = interfaceReference as GenericInstanceType;
                if (gBaseType != null && Helpers.HasGenericArgument(gBaseType, typeArgDefinition, emitter, deep))
                {
                    return true;
                }
            }

            if (thisTypeDefinition.BaseType != null)
            {
                TypeDefinition baseTypeDefinition = null;

                var gBaseType = thisTypeDefinition.BaseType as GenericInstanceType;
                if (gBaseType != null && Helpers.HasGenericArgument(gBaseType, typeArgDefinition, emitter, deep))
                {
                    return true;
                }

                try
                {
                    baseTypeDefinition = Helpers.ToTypeDefinition(thisTypeDefinition.BaseType, emitter);
                }
                catch
                {
                }

                if (baseTypeDefinition != null && deep)
                {
                    return Helpers.IsTypeArgInSubclass(baseTypeDefinition, typeArgDefinition, emitter);
                }
            }
            return false;
        }

        public static bool IsSubclassOf(TypeDefinition thisTypeDefinition, TypeDefinition typeDefinition, IEmitter emitter)
        {
            if (thisTypeDefinition.BaseType != null)
            {
                TypeDefinition baseTypeDefinition = null;

                try
                {
                    baseTypeDefinition = Helpers.ToTypeDefinition(thisTypeDefinition.BaseType, emitter);
                }
                catch
                {
                }

                if (baseTypeDefinition != null)
                {
                    return (baseTypeDefinition == typeDefinition || Helpers.IsSubclassOf(baseTypeDefinition, typeDefinition, emitter));
                }
            }
            return false;
        }

        public static bool IsImplementationOf(TypeDefinition thisTypeDefinition, TypeDefinition interfaceTypeDefinition, IEmitter emitter)
        {
            foreach (TypeReference interfaceReference in thisTypeDefinition.Interfaces)
            {
                var iref = interfaceReference;
                if (interfaceReference.IsGenericInstance)
                {
                    iref = interfaceReference.GetElementType();
                }

                if (iref == interfaceTypeDefinition)
                {
                    return true;
                }

                TypeDefinition interfaceDefinition = null;

                try
                {
                    interfaceDefinition = Helpers.ToTypeDefinition(iref, emitter);
                }
                catch
                {
                }

                if (interfaceDefinition != null && Helpers.IsImplementationOf(interfaceDefinition, interfaceTypeDefinition, emitter))
                {
                    return true;
                }
            }
            return false;
        }

        public static bool IsAssignableFrom(TypeDefinition thisTypeDefinition, TypeDefinition typeDefinition, IEmitter emitter)
        {
            return (thisTypeDefinition == typeDefinition
                    || (typeDefinition.IsClass && !typeDefinition.IsValueType && Helpers.IsSubclassOf(typeDefinition, thisTypeDefinition, emitter))
                    || (typeDefinition.IsInterface && Helpers.IsImplementationOf(typeDefinition, thisTypeDefinition, emitter)));
        }

        public static TypeDefinition ToTypeDefinition(TypeReference reference, IEmitter emitter)
        {
            if (reference == null)
            {
                return null;
            }

            try
            {
                if (reference.IsGenericInstance)
                {
                    reference = reference.GetElementType();
                }

                if (emitter.TypeDefinitions.ContainsKey(reference.FullName))
                {
                    return emitter.TypeDefinitions[reference.FullName];
                }

                return reference.Resolve();
            }
            catch
            {
            }

            return null;
        }

        public static bool IsIgnoreGeneric(ITypeDefinition type)
        {
            return type.Attributes.Any(a => a.AttributeType.FullName == "Bridge.IgnoreGenericAttribute");
        }

        public static bool IsIgnoreGeneric(IType type, IEmitter emitter)
        {
            return emitter.Validator.HasAttribute(type.GetDefinition().Attributes, "Bridge.IgnoreGenericAttribute");
        }

        public static bool IsIgnoreGeneric(IEntity member, IEmitter emitter)
        {
            return emitter.Validator.HasAttribute(member.Attributes, "Bridge.IgnoreGenericAttribute");
        }

        public static bool IsIgnoreGeneric(MethodDeclaration method, IEmitter emitter)
        {
            MemberResolveResult resolveResult = emitter.Resolver.ResolveNode(method, emitter) as MemberResolveResult;
            if (resolveResult != null && resolveResult.Member != null)
            {
                return IsIgnoreGeneric(resolveResult.Member, emitter);
            }

            return false;
        }

        public static bool IsIgnoreCast(AstType astType, IEmitter emitter)
        {
            if (emitter.AssemblyInfo.IgnoreCast)
            {
                return true;
            }

            var typeDef = emitter.BridgeTypes.ToType(astType).GetDefinition();

            if (typeDef == null)
            {
                return false;
            }

            if (typeDef.Kind == TypeKind.Delegate)
            {
                return true;
            }

            var ctorAttr = emitter.Validator.GetAttribute(typeDef.Attributes, "Bridge.ConstructorAttribute");

            if (ctorAttr != null)
            {
                var inline = ctorAttr.PositionalArguments[0].ConstantValue.ToString();
                if (Regex.Match(inline, @"\s*\{\s*\}\s*").Success)
                {
                    return true;
                }
            }

            return emitter.Validator.HasAttribute(typeDef.Attributes, "Bridge.IgnoreCastAttribute") ||
                   emitter.Validator.HasAttribute(typeDef.Attributes, "Bridge.ObjectLiteralAttribute");
        }

        public static bool IsIgnoreCast(ITypeDefinition typeDef, IEmitter emitter)
        {
            if (emitter.AssemblyInfo.IgnoreCast)
            {
                return true;
            }

            if (typeDef == null)
            {
                return false;
            }

            if (typeDef.Kind == TypeKind.Delegate)
            {
                return true;
            }

            var ctorAttr = emitter.Validator.GetAttribute(typeDef.Attributes, "Bridge.ConstructorAttribute");

            if (ctorAttr != null)
            {
                var inline = ctorAttr.PositionalArguments[0].ConstantValue.ToString();
                if (Regex.Match(inline, @"\s*\{\s*\}\s*").Success)
                {
                    return true;
                }
            }

            return emitter.Validator.HasAttribute(typeDef.Attributes, "Bridge.IgnoreCastAttribute") ||
                   emitter.Validator.HasAttribute(typeDef.Attributes, "Bridge.ObjectLiteralAttribute");
        }

        public static bool IsIntegerType(IType type, IMemberResolver resolver)
        {
            type = type.IsKnownType(KnownTypeCode.NullableOfT) ? ((ParameterizedType)type).TypeArguments[0] : type;

            return type.Equals(resolver.Compilation.FindType(KnownTypeCode.Byte))
                || type.Equals(resolver.Compilation.FindType(KnownTypeCode.SByte))
                || type.Equals(resolver.Compilation.FindType(KnownTypeCode.Char))
                || type.Equals(resolver.Compilation.FindType(KnownTypeCode.Int16))
                || type.Equals(resolver.Compilation.FindType(KnownTypeCode.UInt16))
                || type.Equals(resolver.Compilation.FindType(KnownTypeCode.Int32))
                || type.Equals(resolver.Compilation.FindType(KnownTypeCode.UInt32))
                || type.Equals(resolver.Compilation.FindType(KnownTypeCode.Int64))
                || type.Equals(resolver.Compilation.FindType(KnownTypeCode.UInt64));
        }

        public static bool IsFloatType(IType type, IMemberResolver resolver)
        {
            type = type.IsKnownType(KnownTypeCode.NullableOfT) ? ((ParameterizedType)type).TypeArguments[0] : type;

            return type.Equals(resolver.Compilation.FindType(KnownTypeCode.Decimal))
                || type.Equals(resolver.Compilation.FindType(KnownTypeCode.Double))
                || type.Equals(resolver.Compilation.FindType(KnownTypeCode.Single));
        }

        public static bool IsDecimalType(IType type, IMemberResolver resolver, bool allowArray = false)
        {
            return IsKnownType(KnownTypeCode.Decimal, type, resolver, allowArray);
        }

        public static bool IsLongType(IType type, IMemberResolver resolver, bool allowArray = false)
        {
            return IsKnownType(KnownTypeCode.Int64, type, resolver, allowArray);
        }

        public static bool IsULongType(IType type, IMemberResolver resolver, bool allowArray = false)
        {
            return IsKnownType(KnownTypeCode.UInt64, type, resolver, allowArray);
        }

        public static bool Is64Type(IType type, IMemberResolver resolver, bool allowArray = false)
        {
            return IsKnownType(KnownTypeCode.UInt64, type, resolver, allowArray) || IsKnownType(KnownTypeCode.Int64, type, resolver, allowArray);
        }

        public static bool IsKnownType(KnownTypeCode typeCode, IType type, IMemberResolver resolver, bool allowArray = false)
        {
            if (allowArray && type.Kind == TypeKind.Array)
            {
                var elements = (TypeWithElementType)type;
                type = elements.ElementType;
            }

            type = type.IsKnownType(KnownTypeCode.NullableOfT) ? ((ParameterizedType)type).TypeArguments[0] : type;

            return type.Equals(resolver.Compilation.FindType(typeCode));
        }

        public static void CheckValueTypeClone(ResolveResult resolveResult, Expression expression, IAbstractEmitterBlock block, int insertPosition)
        {
            if (resolveResult == null || resolveResult.IsError)
            {
                return;
            }

            if (block.Emitter.IsAssignment)
            {
                return;
            }

            if (resolveResult is InvocationResolveResult)
            {
                bool ret = true;
                if (expression.Parent is InvocationExpression)
                {
                    var invocationExpression = (InvocationExpression)expression.Parent;
                    if (invocationExpression.Arguments.Any(a => a == expression))
                    {
                        ret = false;
                    }
                }
                else if (expression.Parent is AssignmentExpression)
                {
                    ret = false;
                }
                else if (expression.Parent is VariableInitializer)
                {
                    ret = false;
                }

                if (ret)
                {
                    return;
                }
            }

            var nullable = resolveResult.Type.IsKnownType(KnownTypeCode.NullableOfT);
            var type = nullable ? ((ParameterizedType)resolveResult.Type).TypeArguments[0] : resolveResult.Type;
            if (type.Kind == TypeKind.Struct)
            {
                var typeDef = block.Emitter.GetTypeDefinition(type);
                if (block.Emitter.Validator.IsIgnoreType(typeDef) || block.Emitter.Validator.IsImmutableType(typeDef))
                {
                    return;
                }

                var mutableFields = type.GetFields(f => !f.IsReadOnly && !f.IsConst, GetMemberOptions.IgnoreInheritedMembers);
                var autoProps = typeDef.Properties.Where(Helpers.IsAutoProperty);
                var autoEvents = type.GetEvents(null, GetMemberOptions.IgnoreInheritedMembers);

                if (!mutableFields.Any() && !autoProps.Any() && !autoEvents.Any())
                {
                    return;
                }

                var memberResult = resolveResult as MemberResolveResult;

                var field = memberResult != null ? memberResult.Member as DefaultResolvedField : null;

                if (field != null && field.IsReadOnly)
                {
                    if (nullable)
                    {
                        block.Emitter.Output.Insert(insertPosition, JS.Types.SYSTEM_NULLABLE + "." + JS.Funcs.Math.LIFT1 + "(\"" + JS.Funcs.CLONE + "\", ");
                        block.WriteCloseParentheses();
                    }
                    else
                    {
                        block.Write("." + JS.Funcs.CLONE + "()");
                    }

                    return;
                }

                if (expression == null ||
                    expression.Parent is NamedExpression ||
                    expression.Parent is ObjectCreateExpression ||
                    expression.Parent is ArrayInitializerExpression ||
                    expression.Parent is ReturnStatement ||
                    expression.Parent is InvocationExpression ||
                    expression.Parent is AssignmentExpression ||
                    expression.Parent is VariableInitializer)
                {
                    if (expression.Parent is InvocationExpression)
                    {
                        var invocationExpression = (InvocationExpression)expression.Parent;
                        if (invocationExpression.Target == expression)
                        {
                            return;
                        }
                    }

                    if (nullable)
                    {
                        block.Emitter.Output.Insert(insertPosition, JS.Types.SYSTEM_NULLABLE + "." + JS.Funcs.Math.LIFT1 + "(\"" + JS.Funcs.CLONE + "\", ");
                        block.WriteCloseParentheses();
                    }
                    else
                    {
                        block.Write("." + JS.Funcs.CLONE + "()");
                    }
                }
            }
        }

        public static bool IsAutoProperty(IProperty propertyDeclaration)
        {
            // auto properties don't have bodies
            return (propertyDeclaration.CanGet && (!propertyDeclaration.Getter.HasBody || propertyDeclaration.Getter.BodyRegion.IsEmpty)) ||
                   (propertyDeclaration.CanSet && (!propertyDeclaration.Setter.HasBody || propertyDeclaration.Setter.BodyRegion.IsEmpty));
        }

        public static bool IsAutoProperty(PropertyDefinition propDef)
        {
            var typeDef = propDef.DeclaringType;
            if (propDef != null)
            {
                if (propDef.GetMethod == null || propDef.SetMethod == null)
                {
                    return false;
                }
                if (propDef.GetMethod.CustomAttributes.Any(a => a.AttributeType.FullName == "System.Runtime.CompilerServices.CompilerGeneratedAttribute"))
                {
                    return true;
                }
            }
            return typeDef.Fields.Any(f => !f.IsPublic && !f.IsStatic && f.Name.Contains("BackingField") && f.Name.Contains("<" + propDef.Name + ">"));
        }

        public static bool IsFieldProperty(IMember propertyMember, IAssemblyInfo assemblyInfo)
        {
            bool isAuto = propertyMember.Attributes.Any(a => a.AttributeType.FullName == "Bridge.FieldPropertyAttribute");
            if (!isAuto && assemblyInfo.AutoPropertyToField && propertyMember is IProperty)
            {
                var isIgnore = propertyMember.DeclaringTypeDefinition.Attributes.Any(a => a.AttributeType.FullName == "Bridge.ExternalAttribute");
                if (isIgnore)
                {
                    return false;
                }
                return propertyMember.DeclaringType.Kind == TypeKind.Interface || Helpers.IsAutoProperty((IProperty)propertyMember);
            }

            return isAuto || assemblyInfo.AutoPropertyToField;
        }

        public static bool IsFieldProperty(IMember propertyMember, IEmitter emitter)
        {
            bool isAuto = propertyMember.Attributes.Any(a => a.AttributeType.FullName == "Bridge.FieldPropertyAttribute");
            if (!isAuto && emitter.AssemblyInfo.AutoPropertyToField)
            {
                var typeDef = emitter.GetTypeDefinition(propertyMember.DeclaringType);
                if (emitter.Validator.IsIgnoreType(typeDef))
                {
                    return false;
                }
                var propDef = typeDef.Properties.FirstOrDefault(p => p.Name == propertyMember.Name);
                return typeDef.IsInterface || Helpers.IsAutoProperty(propDef);
            }
            return isAuto;
        }

        public static bool IsFieldProperty(IMemberDefinition property, IEmitter emitter)
        {
            bool isAuto = property.CustomAttributes.Any(a => a.AttributeType.FullName == "Bridge.FieldPropertyAttribute");
            if (!isAuto && emitter.AssemblyInfo.AutoPropertyToField)
            {
                var typeDef = property.DeclaringType;
                if (emitter.Validator.IsIgnoreType(typeDef))
                {
                    return false;
                }
                return Helpers.IsAutoProperty((PropertyDefinition)property);
            }
            return isAuto;
        }

        public static bool IsFieldProperty(PropertyDeclaration property, IEmitter emitter)
        {
            ResolveResult resolveResult = emitter.Resolver.ResolveNode(property, emitter) as MemberResolveResult;
            if (resolveResult != null && ((MemberResolveResult)resolveResult).Member != null)
            {
                return IsFieldProperty(((MemberResolveResult)resolveResult).Member, emitter);
            }

            string name = "Bridge.FieldProperty";
            string name1 = name + "Attribute";
            foreach (var i in property.Attributes)
            {
                foreach (var j in i.Attributes)
                {
                    if (j.Type.ToString() == name || j.Type.ToString() == name1)
                    {
                        return true;
                    }
                    resolveResult = emitter.Resolver.ResolveNode(j, emitter);
                    if (resolveResult != null && resolveResult.Type != null && resolveResult.Type.FullName == name1)
                    {
                        return true;
                    }
                }
            }

            if (!emitter.AssemblyInfo.AutoPropertyToField)
            {
                return false;
            }

            var typeDef = emitter.GetTypeDefinition();
            var propDef = typeDef.Properties.FirstOrDefault(p => p.Name == property.Name);
            return Helpers.IsAutoProperty(propDef);
        }

        public static string GetAddOrRemove(bool isAdd, string name = null)
        {
            return (isAdd ? JS.Funcs.Event.ADD : JS.Funcs.Event.REMOVE) + name;
        }

        public static string GetEventRef(CustomEventDeclaration property, IEmitter emitter, bool remove = false, bool noOverload = false, bool ignoreInterface = false, bool withoutTypeParams = false)
        {
            ResolveResult resolveResult = emitter.Resolver.ResolveNode(property, emitter) as MemberResolveResult;
            if (resolveResult != null && ((MemberResolveResult)resolveResult).Member != null)
            {
                return GetEventRef(((MemberResolveResult)resolveResult).Member, emitter, remove, noOverload, ignoreInterface);
            }

            if (!noOverload)
            {
                var overloads = OverloadsCollection.Create(emitter, property, remove);
                return overloads.GetOverloadName(ignoreInterface, GetAddOrRemove(!remove), withoutTypeParams);
            }

            var name = emitter.GetEntityName(property, true, ignoreInterface);
            return GetAddOrRemove(!remove, name);
        }

        public static string GetEventRef(IMember property, IEmitter emitter, bool remove = false, bool noOverload = false, bool ignoreInterface = false, bool withoutTypeParams = false)
        {
            var attrName = emitter.GetEntityNameFromAttr(property, remove);

            if (!string.IsNullOrEmpty(attrName))
            {
                return Helpers.AddInterfacePrefix(property, emitter, ignoreInterface, attrName, remove);
            }

            if (!noOverload)
            {
                var overloads = OverloadsCollection.Create(emitter, property, remove);
                return overloads.GetOverloadName(ignoreInterface, GetAddOrRemove(!remove), withoutTypeParams);
            }

            var name = emitter.GetEntityName(property, true, ignoreInterface);
            return GetAddOrRemove(!remove, name);
        }

        public static string GetSetOrGet(bool isSetter, string name = null)
        {
            return (isSetter ? JS.Funcs.Property.SET : JS.Funcs.Property.GET) + name;
        }

        public static string GetPropertyRef(PropertyDeclaration property, IEmitter emitter, bool isSetter = false, bool noOverload = false, bool ignoreInterface = false, bool withoutTypeParams = false)
        {
            ResolveResult resolveResult = emitter.Resolver.ResolveNode(property, emitter) as MemberResolveResult;
            if (resolveResult != null && ((MemberResolveResult)resolveResult).Member != null)
            {
                return GetPropertyRef(((MemberResolveResult)resolveResult).Member, emitter, isSetter, noOverload, ignoreInterface);
            }

            string name;
            bool isFieldProperty = Helpers.IsFieldProperty(property, emitter);

            if (isFieldProperty)
            {
                return emitter.GetEntityName(property, false, ignoreInterface);
            }

            if (!noOverload)
            {
                var overloads = OverloadsCollection.Create(emitter, property, isSetter);
                return overloads.GetOverloadName(ignoreInterface, GetSetOrGet(isSetter), withoutTypeParams);
            }

            name = emitter.GetEntityName(property, true, ignoreInterface);
            return GetSetOrGet(isSetter, name);
        }

        public static string GetPropertyRef(IndexerDeclaration property, IEmitter emitter, bool isSetter = false, bool noOverload = false, bool ignoreInterface = false)
        {
            ResolveResult resolveResult = emitter.Resolver.ResolveNode(property, emitter) as MemberResolveResult;
            if (resolveResult != null && ((MemberResolveResult)resolveResult).Member != null)
            {
                return GetIndexerRef(((MemberResolveResult)resolveResult).Member, emitter, isSetter, noOverload, ignoreInterface);
            }

            if (!noOverload)
            {
                var overloads = OverloadsCollection.Create(emitter, property, isSetter);
                return overloads.GetOverloadName(ignoreInterface, GetSetOrGet(isSetter));
            }

            var name = emitter.GetEntityName(property, true, ignoreInterface);
            return GetSetOrGet(isSetter, name);
        }

        public static string GetIndexerRef(IMember property, IEmitter emitter, bool isSetter = false, bool noOverload = false, bool ignoreInterface = false)
        {
            var attrName = emitter.GetEntityNameFromAttr(property, isSetter);

            if (!string.IsNullOrEmpty(attrName))
            {
                return Helpers.AddInterfacePrefix(property, emitter, ignoreInterface, attrName, isSetter);
            }

            if (!noOverload)
            {
                var overloads = OverloadsCollection.Create(emitter, property, isSetter);
                return overloads.GetOverloadName(ignoreInterface, GetSetOrGet(isSetter));
            }

            var name = emitter.GetEntityName(property, true, ignoreInterface);
            return GetSetOrGet(isSetter, name);
        }

        public static string GetPropertyRef(IMember property, IEmitter emitter, bool isSetter = false, bool noOverload = false, bool ignoreInterface = false, bool withoutTypeParams = false)
        {
            var attrName = emitter.GetEntityNameFromAttr(property, isSetter);

            if (!string.IsNullOrEmpty(attrName))
            {
                return Helpers.AddInterfacePrefix(property, emitter, ignoreInterface, attrName, isSetter);
            }

            string name = null;
            bool isFieldProperty = Helpers.IsFieldProperty(property, emitter);

            if (isFieldProperty)
            {
                return emitter.GetEntityName(property, false, ignoreInterface);
            }

            if (!noOverload)
            {
                var overloads = OverloadsCollection.Create(emitter, property, isSetter);
                return overloads.GetOverloadName(ignoreInterface, GetSetOrGet(isSetter), withoutTypeParams);
            }

            name = emitter.GetEntityName(property, true, ignoreInterface);
            return GetSetOrGet(isSetter, name);
        }

        private static string AddInterfacePrefix(IMember property, IEmitter emitter, bool ignoreInterface, string attrName, bool isSetter)
        {
            IMember interfaceMember = null;
            if (property.IsExplicitInterfaceImplementation)
            {
                interfaceMember = property.ImplementedInterfaceMembers.First();
            }
            else if (property.DeclaringTypeDefinition != null && property.DeclaringTypeDefinition.Kind == TypeKind.Interface)
            {
                interfaceMember = property;
            }

            if (interfaceMember != null && !ignoreInterface)
            {
                return OverloadsCollection.GetInterfaceMemberName(emitter, interfaceMember, attrName, null, false, isSetter);
            }

            return attrName;
        }

        public static List<MethodDefinition> GetMethods(TypeDefinition typeDef, IEmitter emitter, List<MethodDefinition> list = null)
        {
            if (list == null)
            {
                list = new List<MethodDefinition>(typeDef.Methods);
            }
            else
            {
                list.AddRange(typeDef.Methods);
            }

            var baseTypeDefinition = Helpers.ToTypeDefinition(typeDef.BaseType, emitter);

            if (baseTypeDefinition != null)
            {
                Helpers.GetMethods(baseTypeDefinition, emitter, list);
            }

            return list;
        }

        public static bool IsReservedWord(string word)
        {
            return JS.Reserved.Words.Contains(word);
        }

        public static string ChangeReservedWord(string name)
        {
            if (name == JS.Funcs.CONSTRUCTOR)
            {
                return JS.Funcs.DCONSTRUCTOR + JS.Vars.D;
            }

            return Helpers.PrefixDollar(name);
        }

        public static object GetEnumValue(IEmitter emitter, IType type, object constantValue)
        {
            var enumMode = emitter.Validator.EnumEmitMode(type);

            if ((emitter.Validator.IsIgnoreType(type.GetDefinition()) && enumMode == -1) || enumMode == 2)
            {
                return constantValue;
            }

            if (enumMode >= 3 && enumMode < 7)
            {
                var member = type.GetFields().FirstOrDefault(f => f.ConstantValue == constantValue);

                if (member == null)
                {
                    return constantValue;
                }

                string enumStringName = member.Name;
                var attr = emitter.GetAttribute(member.Attributes, "Bridge.NameAttribute");

                if (attr != null)
                {
                    enumStringName = emitter.GetEntityName(member);
                }
                else
                {
                    switch (enumMode)
                    {
                        case 3:
                            enumStringName = member.Name.Substring(0, 1).ToLower(CultureInfo.InvariantCulture) + member.Name.Substring(1);
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
                }

                return enumStringName;
            }

            return constantValue;
        }

        public static string GetBinaryOperatorMethodName(BinaryOperatorType operatorType)
        {
            switch (operatorType)
            {
                case BinaryOperatorType.Any:
                    return null;

                case BinaryOperatorType.BitwiseAnd:
                    return "op_BitwiseAnd";

                case BinaryOperatorType.BitwiseOr:
                    return "op_BitwiseOr";

                case BinaryOperatorType.ConditionalAnd:
                    return "op_LogicalAnd";

                case BinaryOperatorType.ConditionalOr:
                    return "op_LogicalOr";

                case BinaryOperatorType.ExclusiveOr:
                    return "op_ExclusiveOr";

                case BinaryOperatorType.GreaterThan:
                    return "op_GreaterThan";

                case BinaryOperatorType.GreaterThanOrEqual:
                    return "op_GreaterThanOrEqual";

                case BinaryOperatorType.Equality:
                    return "op_Equality";

                case BinaryOperatorType.InEquality:
                    return "op_Inequality";

                case BinaryOperatorType.LessThan:
                    return "op_LessThan";

                case BinaryOperatorType.LessThanOrEqual:
                    return "op_LessThanOrEqual";

                case BinaryOperatorType.Add:
                    return "op_Addition";

                case BinaryOperatorType.Subtract:
                    return "op_Subtraction";

                case BinaryOperatorType.Multiply:
                    return "op_Multiply";

                case BinaryOperatorType.Divide:
                    return "op_Division";

                case BinaryOperatorType.Modulus:
                    return "op_Modulus";

                case BinaryOperatorType.ShiftLeft:
                    return "LeftShift";

                case BinaryOperatorType.ShiftRight:
                    return "RightShift";

                case BinaryOperatorType.NullCoalescing:
                    return null;

                default:
                    throw new ArgumentOutOfRangeException("operatorType", operatorType, null);
            }
        }

        public static string GetUnaryOperatorMethodName(UnaryOperatorType operatorType)
        {
            switch (operatorType)
            {
                case UnaryOperatorType.Any:
                    return null;

                case UnaryOperatorType.Not:
                    return "op_LogicalNot";

                case UnaryOperatorType.BitNot:
                    return "op_OnesComplement";

                case UnaryOperatorType.Minus:
                    return "op_UnaryNegation";

                case UnaryOperatorType.Plus:
                    return "op_UnaryPlus";

                case UnaryOperatorType.Increment:
                case UnaryOperatorType.PostIncrement:
                    return "op_Increment";

                case UnaryOperatorType.Decrement:
                case UnaryOperatorType.PostDecrement:
                    return "op_Decrement";

                case UnaryOperatorType.Dereference:
                    return null;

                case UnaryOperatorType.AddressOf:
                    return null;

                case UnaryOperatorType.Await:
                    return null;

                default:
                    throw new ArgumentOutOfRangeException("operatorType", operatorType, null);
            }
        }

        public static BinaryOperatorType TypeOfAssignment(AssignmentOperatorType operatorType)
        {
            switch (operatorType)
            {
                case AssignmentOperatorType.Assign:
                    return BinaryOperatorType.Any;

                case AssignmentOperatorType.Add:
                    return BinaryOperatorType.Add;

                case AssignmentOperatorType.Subtract:
                    return BinaryOperatorType.Subtract;

                case AssignmentOperatorType.Multiply:
                    return BinaryOperatorType.Multiply;

                case AssignmentOperatorType.Divide:
                    return BinaryOperatorType.Divide;

                case AssignmentOperatorType.Modulus:
                    return BinaryOperatorType.Modulus;

                case AssignmentOperatorType.ShiftLeft:
                    return BinaryOperatorType.ShiftLeft;

                case AssignmentOperatorType.ShiftRight:
                    return BinaryOperatorType.ShiftRight;

                case AssignmentOperatorType.BitwiseAnd:
                    return BinaryOperatorType.BitwiseAnd;

                case AssignmentOperatorType.BitwiseOr:
                    return BinaryOperatorType.BitwiseOr;

                case AssignmentOperatorType.ExclusiveOr:
                    return BinaryOperatorType.ExclusiveOr;

                case AssignmentOperatorType.Any:
                    return BinaryOperatorType.Any;

                default:
                    throw new ArgumentOutOfRangeException("operatorType", operatorType, null);
            }
        }

        public static IAttribute GetInheritedAttribute(IEntity entity, string attrName)
        {
            if (entity is IMember)
            {
                return Helpers.GetInheritedAttribute((IMember)entity, attrName);
            }

            foreach (var attr in entity.Attributes)
            {
                if (attr.AttributeType.FullName == attrName)
                {
                    return attr;
                }
            }
            return null;
        }

        public static IAttribute GetInheritedAttribute(IMember member, string attrName)
        {
            foreach (var attr in member.Attributes)
            {
                if (attr.AttributeType.FullName == attrName)
                {
                    return attr;
                }
            }

            if (member.IsOverride)
            {
                member = InheritanceHelper.GetBaseMember(member);

                if (member != null)
                {
                    return Helpers.GetInheritedAttribute(member, attrName);
                }
            }
            else if (member.ImplementedInterfaceMembers != null && member.ImplementedInterfaceMembers.Count > 0)
            {
                foreach (var interfaceMember in member.ImplementedInterfaceMembers)
                {
                    var attr = Helpers.GetInheritedAttribute(interfaceMember, attrName);
                    if (attr != null)
                    {
                        return attr;
                    }
                }
            }

            return null;
        }

        public static IAttribute GetInheritedAttribute(ITypeDefinition typeDef, string attrName)
        {
            foreach (var attr in typeDef.Attributes)
            {
                if (attr.AttributeType.FullName == attrName)
                {
                    return attr;
                }
            }

            var baseType = typeDef.DirectBaseTypes.Where(t => t.Kind != TypeKind.Interface).FirstOrDefault();

            if (baseType != null)
            {
                return GetInheritedAttribute(baseType.GetDefinition(), attrName);
            }

            return null;
        }

        public static CustomAttribute GetInheritedAttribute(IEmitter emitter, IMemberDefinition member, string attrName)
        {
            foreach (var attr in member.CustomAttributes)
            {
                if (attr.AttributeType.FullName == attrName)
                {
                    return attr;
                }
            }

            var methodDefinition = member as MethodDefinition;
            if (methodDefinition != null)
            {
                var isOverride = methodDefinition.IsVirtual && methodDefinition.IsReuseSlot;

                if (isOverride)
                {
                    member = Helpers.GetBaseMethod(methodDefinition, emitter);

                    if (member != null)
                    {
                        return Helpers.GetInheritedAttribute(emitter, member, attrName);
                    }
                }
            }

            return null;
        }

        public static string GetTypedArrayName(IType elementType)
        {
            switch (elementType.FullName)
            {
                case CS.Types.System_Byte:
                    return JS.Types.Uint8Array;

                case CS.Types.System_SByte:
                    return JS.Types.Int8Array;

                case CS.Types.System_Int16:
                    return JS.Types.Int16Array;

                case CS.Types.System_UInt16:
                    return JS.Types.Uint16Array;

                case CS.Types.System_Int32:
                    return JS.Types.Int32Array;

                case CS.Types.System_UInt32:
                    return JS.Types.Uint32Array;

                case CS.Types.System_Single:
                    return JS.Types.Float32Array;

                case CS.Types.System_Double:
                    return JS.Types.Float64Array;
            }
            return null;
        }

        public static string PrefixDollar(params object[] parts)
        {
            return JS.Vars.D + string.Join("", parts);
        }

        public static string ReplaceFirstDollar(string s)
        {
            if (s == null)
            {
                return s;
            }

            if (s.StartsWith(JS.Vars.D.ToString()))
            {
                return s.Substring(1);
            }

            return s;
        }

        public static bool IsNonScriptable(ITypeDefinition type)
        {
            return Helpers.GetInheritedAttribute(type, "Bridge.NonScriptableAttribute") != null;
        }

        public static bool IsNonScriptable(IEntity entity)
        {
            return Helpers.GetInheritedAttribute(entity, "Bridge.NonScriptableAttribute") != null;
        }
    }
}