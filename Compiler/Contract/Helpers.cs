using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using ICSharpCode.NRefactory.TypeSystem.Implementation;
using Mono.Cecil;
using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ArrayType = ICSharpCode.NRefactory.TypeSystem.ArrayType;

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
            return type.Attributes.Any(a => a.AttributeType.FullName == "Bridge.IgnoreGenericAttribute") || type.DeclaringTypeDefinition != null && Helpers.IsIgnoreGeneric(type.DeclaringTypeDefinition);
        }

        public static bool IsIgnoreGeneric(TypeDefinition type)
        {
            return type.CustomAttributes.Any(a => a.AttributeType.FullName == "Bridge.IgnoreGenericAttribute") || type.DeclaringType != null && Helpers.IsIgnoreGeneric(type.DeclaringType);
        }

        public static bool IsIgnoreGeneric(IType type, IEmitter emitter, bool allowInTypeScript = false)
        {
            var attr = type.GetDefinition().Attributes.FirstOrDefault(a => a.AttributeType.FullName == "Bridge.IgnoreGenericAttribute");

            if (attr != null)
            {
                var member = allowInTypeScript ? attr.NamedArguments.FirstOrDefault(arg => arg.Key.Name == "AllowInTypeScript").Value : null;

                if (member != null)
                {
                    return !(bool)member.ConstantValue;
                }

                return true;
            }

            return type.DeclaringType != null && Helpers.IsIgnoreGeneric(type.DeclaringType, emitter, allowInTypeScript);
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
                return Helpers.IsIgnoreGeneric(resolveResult.Member, emitter);
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
            return Helpers.IsKnownType(KnownTypeCode.Decimal, type, resolver, allowArray);
        }

        public static bool IsLongType(IType type, IMemberResolver resolver, bool allowArray = false)
        {
            return Helpers.IsKnownType(KnownTypeCode.Int64, type, resolver, allowArray);
        }

        public static bool IsULongType(IType type, IMemberResolver resolver, bool allowArray = false)
        {
            return Helpers.IsKnownType(KnownTypeCode.UInt64, type, resolver, allowArray);
        }

        public static bool Is64Type(IType type, IMemberResolver resolver, bool allowArray = false)
        {
            return Helpers.IsKnownType(KnownTypeCode.UInt64, type, resolver, allowArray) || Helpers.IsKnownType(KnownTypeCode.Int64, type, resolver, allowArray);
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

            var conversion = block.Emitter.Resolver.Resolver.GetConversion(expression);
            if (conversion.IsBoxingConversion || conversion.IsUnboxingConversion)
            {
                return;
            }

            bool writeClone = false;
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
                else
                {
                    var prop = (resolveResult as MemberResolveResult)?.Member as IProperty;

                    if (prop != null && prop.IsIndexer)
                    {
                        ret = false;
                        writeClone = true;
                    }
                }

                if (ret)
                {
                    return;
                }
            }

            var rrtype = resolveResult.Type;
            var nullable = rrtype.IsKnownType(KnownTypeCode.NullableOfT);

            var forEachResolveResult = resolveResult as ForEachResolveResult;
            if (forEachResolveResult != null)
            {
                rrtype = forEachResolveResult.ElementType;
            }

            var type = nullable ? ((ParameterizedType)rrtype).TypeArguments[0] : rrtype;
            if (type.Kind == TypeKind.Struct)
            {
                if (Helpers.IsImmutableStruct(block.Emitter, type))
                {
                    return;
                }

                if (writeClone)
                {
                    Helpers.WriteClone(block, insertPosition, nullable);
                    return;
                }

                var memberResult = resolveResult as MemberResolveResult;

                var field = memberResult != null ? memberResult.Member as DefaultResolvedField : null;

                if (field != null && field.IsReadOnly)
                {
                    Helpers.WriteClone(block, insertPosition, nullable);
                    return;
                }

                var isOperator = false;
                if (expression != null &&
                    (expression.Parent is BinaryOperatorExpression || expression.Parent is UnaryOperatorExpression))
                {
                    var orr = block.Emitter.Resolver.ResolveNode(expression.Parent, block.Emitter) as OperatorResolveResult;

                    isOperator = orr != null && orr.UserDefinedOperatorMethod != null;
                }

                if (expression == null || isOperator ||
                    expression.Parent is NamedExpression ||
                    expression.Parent is ObjectCreateExpression ||
                    expression.Parent is ArrayInitializerExpression ||
                    expression.Parent is ReturnStatement ||
                    expression.Parent is InvocationExpression ||
                    expression.Parent is AssignmentExpression ||
                    expression.Parent is VariableInitializer ||
                    expression.Parent is ForeachStatement && resolveResult is ForEachResolveResult)
                {
                    if (expression != null && expression.Parent is InvocationExpression)
                    {
                        var invocationExpression = (InvocationExpression)expression.Parent;
                        if (invocationExpression.Target == expression)
                        {
                            return;
                        }
                    }

                    Helpers.WriteClone(block, insertPosition, nullable);
                }
            }
        }

        private static void WriteClone(IAbstractEmitterBlock block, int insertPosition, bool nullable)
        {
            if (nullable)
            {
                block.Emitter.Output.Insert(insertPosition,
                    JS.Types.SYSTEM_NULLABLE + "." + JS.Funcs.Math.LIFT1 + "(\"" + JS.Funcs.CLONE + "\", ");
                block.WriteCloseParentheses();
            }
            else
            {
                block.Write("." + JS.Funcs.CLONE + "()");
            }
        }

        public static bool IsImmutableStruct(IEmitter emitter, IType type)
        {
            if (type.Kind != TypeKind.Struct)
            {
                return true;
            }

            var typeDef = emitter.GetTypeDefinition(type);
            if (emitter.Validator.IsExternalType(typeDef) || emitter.Validator.IsImmutableType(typeDef))
            {
                return true;
            }

            var mutableFields = type.GetFields(f => !f.IsReadOnly && !f.IsConst, GetMemberOptions.IgnoreInheritedMembers);
            var autoProps = typeDef.Properties.Where(Helpers.IsAutoProperty);
            var autoEvents = type.GetEvents(null, GetMemberOptions.IgnoreInheritedMembers);

            if (!mutableFields.Any() && !autoProps.Any() && !autoEvents.Any())
            {
                return true;
            }
            return false;
        }

        public static bool IsScript(IMethod method)
        {
            return method.Attributes.Any(a => a.AttributeType.FullName == CS.NS.ROOT + ".ScriptAttribute");
        }

        public static bool IsScript(MethodDefinition method)
        {
            return method.CustomAttributes.Any(a => a.AttributeType.FullName == CS.NS.ROOT + ".ScriptAttribute");
        }

        public static bool IsAutoProperty(IProperty propertyDeclaration)
        {
            if (propertyDeclaration.CanGet && Helpers.IsScript(propertyDeclaration.Getter))
            {
                return false;
            }

            if (propertyDeclaration.CanSet && Helpers.IsScript(propertyDeclaration.Setter))
            {
                return false;
            }
            // auto properties don't have bodies
            return (propertyDeclaration.CanGet && (!propertyDeclaration.Getter.HasBody || propertyDeclaration.Getter.BodyRegion.IsEmpty)) ||
                   (propertyDeclaration.CanSet && (!propertyDeclaration.Setter.HasBody || propertyDeclaration.Setter.BodyRegion.IsEmpty));
        }

        public static bool IsAutoProperty(PropertyDefinition propDef)
        {
            if (propDef.GetMethod != null && Helpers.IsScript(propDef.GetMethod))
            {
                return false;
            }

            if (propDef.SetMethod != null && Helpers.IsScript(propDef.SetMethod))
            {
                return false;
            }

            if (propDef.GetMethod == null || propDef.SetMethod == null)
            {
                return false;
            }
            if (AttributeHelper.HasCompilerGeneratedAttribute(propDef.GetMethod))
            {
                return true;
            }

            var typeDef = propDef.DeclaringType;
            return typeDef != null && typeDef.Fields.Any(f => !f.IsPublic && !f.IsStatic && f.Name.Contains("BackingField") && f.Name.Contains("<" + propDef.Name + ">"));
        }

        public static string GetAddOrRemove(bool isAdd, string name = null)
        {
            return (isAdd ? JS.Funcs.Event.ADD : JS.Funcs.Event.REMOVE) + name;
        }

        public static string GetEventRef(CustomEventDeclaration property, IEmitter emitter, bool remove = false, bool noOverload = false, bool ignoreInterface = false, bool withoutTypeParams = false)
        {
            MemberResolveResult resolveResult = emitter.Resolver.ResolveNode(property, emitter) as MemberResolveResult;
            if (resolveResult != null && resolveResult.Member != null)
            {
                return Helpers.GetEventRef(resolveResult.Member, emitter, remove, noOverload, ignoreInterface, withoutTypeParams);
            }

            if (!noOverload)
            {
                var overloads = OverloadsCollection.Create(emitter, property, remove);
                return overloads.GetOverloadName(ignoreInterface, Helpers.GetAddOrRemove(!remove), withoutTypeParams);
            }

            var name = emitter.GetEntityName(property);
            return Helpers.GetAddOrRemove(!remove, name);
        }

        public static string GetEventRef(IMember property, IEmitter emitter, bool remove = false, bool noOverload = false, bool ignoreInterface = false, bool withoutTypeParams = false, bool skipPrefix = false)
        {
            var attrName = emitter.GetEntityNameFromAttr(property, remove);

            if (!String.IsNullOrEmpty(attrName))
            {
                return Helpers.AddInterfacePrefix(property, emitter, ignoreInterface, attrName, remove);
            }

            if (!noOverload)
            {
                var overloads = OverloadsCollection.Create(emitter, property, remove);
                return overloads.GetOverloadName(ignoreInterface, skipPrefix ? null : Helpers.GetAddOrRemove(!remove), withoutTypeParams);
            }

            var name = emitter.GetEntityName(property);
            return skipPrefix ? name : Helpers.GetAddOrRemove(!remove, name);
        }

        public static string GetSetOrGet(bool isSetter, string name = null)
        {
            return (isSetter ? JS.Funcs.Property.SET : JS.Funcs.Property.GET) + name;
        }

        public static string GetPropertyRef(PropertyDeclaration property, IEmitter emitter, bool isSetter = false, bool noOverload = false, bool ignoreInterface = false, bool withoutTypeParams = false, bool skipPrefix = true)
        {
            ResolveResult resolveResult = emitter.Resolver.ResolveNode(property, emitter) as MemberResolveResult;
            if (resolveResult != null && ((MemberResolveResult)resolveResult).Member != null)
            {
                return Helpers.GetPropertyRef(((MemberResolveResult)resolveResult).Member, emitter, isSetter, noOverload, ignoreInterface, withoutTypeParams, skipPrefix);
            }

            string name;

            if (!noOverload)
            {
                var overloads = OverloadsCollection.Create(emitter, property, isSetter);
                return overloads.GetOverloadName(ignoreInterface, skipPrefix ? null : Helpers.GetSetOrGet(isSetter), withoutTypeParams);
            }

            name = emitter.GetEntityName(property);
            return Helpers.GetSetOrGet(isSetter, name);
        }

        public static string GetPropertyRef(IndexerDeclaration property, IEmitter emitter, bool isSetter = false, bool noOverload = false, bool ignoreInterface = false)
        {
            ResolveResult resolveResult = emitter.Resolver.ResolveNode(property, emitter) as MemberResolveResult;
            if (resolveResult != null && ((MemberResolveResult)resolveResult).Member != null)
            {
                return Helpers.GetIndexerRef(((MemberResolveResult)resolveResult).Member, emitter, isSetter, noOverload, ignoreInterface);
            }

            if (!noOverload)
            {
                var overloads = OverloadsCollection.Create(emitter, property, isSetter);
                return overloads.GetOverloadName(ignoreInterface, Helpers.GetSetOrGet(isSetter));
            }

            var name = emitter.GetEntityName(property);
            return Helpers.GetSetOrGet(isSetter, name);
        }

        public static string GetIndexerRef(IMember property, IEmitter emitter, bool isSetter = false, bool noOverload = false, bool ignoreInterface = false)
        {
            var attrName = emitter.GetEntityNameFromAttr(property, isSetter);

            if (!String.IsNullOrEmpty(attrName))
            {
                return Helpers.AddInterfacePrefix(property, emitter, ignoreInterface, attrName, isSetter);
            }

            if (!noOverload)
            {
                var overloads = OverloadsCollection.Create(emitter, property, isSetter);
                return overloads.GetOverloadName(ignoreInterface, Helpers.GetSetOrGet(isSetter));
            }

            var name = emitter.GetEntityName(property);
            return Helpers.GetSetOrGet(isSetter, name);
        }

        public static string GetPropertyRef(IMember property, IEmitter emitter, bool isSetter = false, bool noOverload = false, bool ignoreInterface = false, bool withoutTypeParams = false, bool skipPrefix = true)
        {
            var attrName = emitter.GetEntityNameFromAttr(property, isSetter);

            if (!String.IsNullOrEmpty(attrName))
            {
                return Helpers.AddInterfacePrefix(property, emitter, ignoreInterface, attrName, isSetter);
            }

            string name = null;

            if (property.SymbolKind == SymbolKind.Indexer)
            {
                skipPrefix = false;
            }

            if (!noOverload)
            {
                var overloads = OverloadsCollection.Create(emitter, property, isSetter);
                return overloads.GetOverloadName(ignoreInterface, skipPrefix ? null : Helpers.GetSetOrGet(isSetter), withoutTypeParams);
            }

            name = emitter.GetEntityName(property);
            return skipPrefix ? name : Helpers.GetSetOrGet(isSetter, name);
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

        public static bool IsReservedWord(IEmitter emitter, string word)
        {
            if (emitter != null && (emitter.TypeInfo.JsName == word || emitter.TypeInfo.JsName.StartsWith(word + ".")))
            {
                return true;
            }
            return JS.Reserved.Words.Contains(word);
        }

        public static string ChangeReservedWord(string name)
        {
            return Helpers.PrefixDollar(name);
        }

        public static object GetEnumValue(IEmitter emitter, IType type, object constantValue)
        {
            var enumMode = Helpers.EnumEmitMode(type);

            if ((emitter.Validator.IsExternalType(type.GetDefinition()) && enumMode == -1) || enumMode == 2)
            {
                return constantValue;
            }

            if (enumMode >= 3 && enumMode < 7)
            {
                var member = type.GetFields().FirstOrDefault(f => f.ConstantValue != null && f.ConstantValue.Equals(constantValue));

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
                return Helpers.GetInheritedAttribute(baseType.GetDefinition(), attrName);
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
            return JS.Vars.D + String.Join("", parts);
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

        public static bool IsEntryPointMethod(IEmitter emitter, MethodDeclaration methodDeclaration)
        {
            var member_rr = emitter.Resolver.ResolveNode(methodDeclaration, emitter) as MemberResolveResult;
            IMethod method = member_rr != null ? member_rr.Member as IMethod : null;

            return Helpers.IsEntryPointMethod(method);
        }

        public static bool IsEntryPointMethod(IMethod method)
        {
            if (method != null && method.Name == CS.Methods.AUTO_STARTUP_METHOD_NAME &&
                method.IsStatic &&
                !method.IsAbstract &&
                Helpers.IsEntryPointCandidate(method))
            {
                bool isReady = false;
                foreach (var attr in method.Attributes)
                {
                    if (attr.AttributeType.FullName == CS.Attributes.READY_ATTRIBUTE_NAME)
                    {
                        isReady = true;
                        break;
                    }
                }

                if (!isReady)
                {
                    return true;
                }
            }

            return false;
        }

        public static bool IsEntryPointCandidate(IEmitter emitter, MethodDeclaration methodDeclaration)
        {
            if (methodDeclaration == null)
            {
                return false;
            }

            var m_rr = emitter.Resolver.ResolveNode(methodDeclaration, emitter) as MemberResolveResult;

            if (m_rr == null || !(m_rr.Member is IMethod))
            {
                return false;
            }

            var m = (IMethod)m_rr.Member;

            return Helpers.IsEntryPointCandidate(m);
        }

        public static bool IsEntryPointCandidate(IMethod m)
        {
            if (m.Name != CS.Methods.AUTO_STARTUP_METHOD_NAME || !m.IsStatic || m.DeclaringTypeDefinition.TypeParameterCount > 0 ||
                m.TypeParameters.Count > 0) // Must be a static, non-generic Main
                return false;
            if (!m.ReturnType.IsKnownType(KnownTypeCode.Void) && !m.ReturnType.IsKnownType(KnownTypeCode.Int32))
                // Must return void or int.
                return false;
            if (m.Parameters.Count == 0) // Can have 0 parameters.
                return true;
            if (m.Parameters.Count > 1) // May not have more than 1 parameter.
                return false;
            if (m.Parameters[0].IsRef || m.Parameters[0].IsOut) // The single parameter must not be ref or out.
                return false;

            var at = m.Parameters[0].Type as ArrayType;
            return at != null && at.Dimensions == 1 && at.ElementType.IsKnownType(KnownTypeCode.String);
            // The single parameter must be a one-dimensional array of strings.
        }

        public static bool IsTypeParameterType(IType type)
        {
            var typeDef = type.GetDefinition();
            if (typeDef != null && Helpers.IsIgnoreGeneric(typeDef))
            {
                return false;
            }
            return type.TypeArguments.Any(Helpers.HasTypeParameters);
        }

        public static bool HasTypeParameters(IType type)
        {
            if (type.Kind == TypeKind.TypeParameter)
            {
                return true;
            }

            if (type.TypeArguments.Count > 0)
            {
                foreach (var typeArgument in type.TypeArguments)
                {
                    var typeDef = typeArgument.GetDefinition();
                    if (typeDef != null && Helpers.IsIgnoreGeneric(typeDef))
                    {
                        continue;
                    }

                    if (Helpers.HasTypeParameters(typeArgument))
                    {
                        return true;
                    }
                }
            }

            return false;
        }

        private static Regex validIdentifier = new Regex("^[$A-Z_][0-9A-Z_$]*$", RegexOptions.Compiled | RegexOptions.Singleline | RegexOptions.IgnoreCase);
        public static bool IsValidIdentifier(string name)
        {
            return Helpers.validIdentifier.IsMatch(name);
        }

        public static int EnumEmitMode(ITypeDefinition type)
        {
            string enumAttr = "Bridge.EnumAttribute";
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

        public static int EnumEmitMode(IType type)
        {
            string enumAttr = "Bridge.EnumAttribute";
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

        public static bool IsValueEnum(IType type)
        {
            return Helpers.EnumEmitMode(type) == 2;
        }

        public static bool IsNameEnum(IType type)
        {
            var enumEmitMode = Helpers.EnumEmitMode(type);
            return enumEmitMode == 1 || enumEmitMode > 6;
        }

        public static bool IsStringNameEnum(IType type)
        {
            var mode = Helpers.EnumEmitMode(type);
            return mode >= 3 && mode <= 6;
        }

        public static bool IsReservedStaticName(string name)
        {
            return JS.Reserved.StaticNames.Any(n => String.Equals(name, n, StringComparison.InvariantCultureIgnoreCase));
        }

        public static string GetFunctionName(NamedFunctionMode mode, IMember member, IEmitter emitter, bool isSetter = false)
        {
            var overloads = OverloadsCollection.Create(emitter, member, isSetter);
            string name = null;
            switch (mode)
            {
                case NamedFunctionMode.None:
                    break;
                case NamedFunctionMode.Name:
                    name = overloads.GetOverloadName(false, null, true);
                    break;
                case NamedFunctionMode.FullName:
                    var td = member.DeclaringTypeDefinition;
                    name = td != null ? BridgeTypes.ToJsName(td, emitter, true) : "";
                    name = name.Replace(".", "_");
                    name += "_" + overloads.GetOverloadName(false, null, true);
                    break;
                case NamedFunctionMode.ClassName:
                    var t = member.DeclaringType;
                    name = BridgeTypes.ToJsName(t, emitter, true, true);
                    name = name.Replace(".", "_");
                    name += "_" + overloads.GetOverloadName(false, null, true);
                    break;
                default:
                    throw new ArgumentOutOfRangeException();
            }

            if (name != null)
            {
                if (member is IProperty)
                {
                    name = name + "_" + (isSetter ? "set" : "get");
                }
                else if (member is IEvent)
                {
                    name = name + "_" + (isSetter ? "remove" : "add");
                }
            }

            return name;
        }

        public static bool HasThis(string template)
        {
            return template.IndexOf("{this}", StringComparison.Ordinal) > -1 || template.IndexOf("{$}", StringComparison.Ordinal) > -1;
        }

        public static string ConvertTokens(IEmitter emitter, string template, IMember member)
        {
            string name = OverloadsCollection.Create(emitter, member).GetOverloadName(true);
            return template.Replace("{@}", name).Replace("{$}", "{this}." + name);
        }

        public static string ConvertNameTokens(string name, string replacer)
        {
            return name.Replace("{@}", replacer).Replace("{$}", replacer);
        }

        public static string ReplaceThis(IEmitter emitter, string template, string replacer, IMember member)
        {
            template = Helpers.ConvertTokens(emitter, template, member);
            return template.Replace("{this}", replacer);
        }

        public static string DelegateToTemplate(string tpl, IMethod method, IEmitter emitter)
        {
            bool addThis = !method.IsStatic;

            StringBuilder sb = new StringBuilder(tpl);
            sb.Append("(");

            bool comma = false;
            if (addThis)
            {
                sb.Append("{this}");
                comma = true;
            }

            if (!Helpers.IsIgnoreGeneric(method, emitter) && method.TypeArguments.Count > 0)
            {
                foreach (var typeParameter in method.TypeArguments)
                {
                    if (comma)
                    {
                        sb.Append(", ");
                    }

                    if (typeParameter.Kind == TypeKind.TypeParameter)
                    {
                        sb.Append("{");
                        sb.Append(typeParameter.Name);
                        sb.Append("}");
                    }
                    else
                    {
                        sb.Append(BridgeTypes.ToJsName(typeParameter, emitter));
                    }
                    comma = true;
                }
            }

            foreach (var parameter in method.Parameters)
            {
                if (comma)
                {
                    sb.Append(", ");
                }

                sb.Append("{");

                if (parameter.IsParams &&
                    method.Attributes.Any(a => a.AttributeType.FullName == "Bridge.ExpandParamsAttribute"))
                {
                    sb.Append("*");
                }

                sb.Append(parameter.Name);
                sb.Append("}");
                comma = true;
            }

            sb.Append(")");
            return sb.ToString();
        }
    }
}