using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using ICSharpCode.NRefactory.TypeSystem.Implementation;
using Mono.Cecil;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

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
            return name.Replace('`', '$').Replace('/', '.').Replace("+", ".");
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

                string key = BridgeTypes.GetTypeDefinitionKey(reference.FullName);

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

        public static bool IsIgnoreGeneric(IType type, IEmitter emitter)
        {
            return emitter.Validator.HasAttribute(type.GetDefinition().Attributes, "Bridge.IgnoreGenericAttribute");
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

            return emitter.Validator.HasAttribute(typeDef.Attributes, "Bridge.IgnoreCastAttribute");
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
            if (allowArray && type.Kind == TypeKind.Array)
            {
                var elements = (TypeWithElementType)type;
                type = elements.ElementType;
            }

            type = type.IsKnownType(KnownTypeCode.NullableOfT) ? ((ParameterizedType)type).TypeArguments[0] : type;

            return type.Equals(resolver.Compilation.FindType(KnownTypeCode.Decimal));
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
                if (block.Emitter.Validator.IsIgnoreType(typeDef))
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
                        block.Emitter.Output.Insert(insertPosition, "Bridge.Nullable.lift1(\"$clone\", ");
                        block.WriteCloseParentheses();
                    }
                    else
                    {
                        block.Write(".$clone()");
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
                        block.Emitter.Output.Insert(insertPosition, "Bridge.Nullable.lift1(\"$clone\", ");
                        block.WriteCloseParentheses();
                    }
                    else
                    {
                        block.Write(".$clone()");
                    }
                }
            }
        }

        public static bool IsAutoProperty(IProperty propertyDeclaration)
        {
            // auto properties don't have bodies
            return (propertyDeclaration.CanGet && !propertyDeclaration.Getter.HasBody) ||
                   (propertyDeclaration.CanSet && !propertyDeclaration.Setter.HasBody);
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
            if (propertyMember.ImplementedInterfaceMembers.Count > 0 || propertyMember.DeclaringType.Kind == TypeKind.Interface)
            {
                return false;
            }

            bool isAuto = propertyMember.Attributes.Any(a => a.AttributeType.FullName == "Bridge.FieldPropertyAttribute");
            if (!isAuto && assemblyInfo.AutoPropertyToField && propertyMember is IProperty)
            {
                return Helpers.IsAutoProperty((IProperty)propertyMember);
            }

            return isAuto || assemblyInfo.AutoPropertyToField;
        }

        public static bool IsFieldProperty(IMember propertyMember, IEmitter emitter)
        {
            if (propertyMember.ImplementedInterfaceMembers.Count > 0)
            {
                return false;
            }

            bool isAuto = propertyMember.Attributes.Any(a => a.AttributeType.FullName == "Bridge.FieldPropertyAttribute");
            if (!isAuto && emitter.AssemblyInfo.AutoPropertyToField)
            {
                var typeDef = emitter.GetTypeDefinition(propertyMember.DeclaringType);
                var propDef = typeDef.Properties.FirstOrDefault(p => p.Name == propertyMember.Name);
                return Helpers.IsAutoProperty(propDef);
            }
            return isAuto;
        }

        public static bool IsFieldProperty(IMemberDefinition property, IEmitter emitter)
        {
            bool isAuto = property.CustomAttributes.Any(a => a.AttributeType.FullName == "Bridge.FieldPropertyAttribute");
            if (!isAuto && emitter.AssemblyInfo.AutoPropertyToField)
            {
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

        public static string GetEventRef(CustomEventDeclaration property, IEmitter emitter, bool remove = false, bool noOverload = false, bool ignoreInterface = false)
        {
            var name = emitter.GetEntityName(property, true, ignoreInterface);

            if (!noOverload)
            {
                var overloads = OverloadsCollection.Create(emitter, property, remove);
                name = overloads.HasOverloads ? overloads.GetOverloadName() : name;
                noOverload = !overloads.HasOverloads;
            }

            return (remove ? "remove" : "add") + name;
        }

        public static string GetEventRef(IMember property, IEmitter emitter, bool remove = false, bool noOverload = false, bool ignoreInterface = false)
        {
            var name = emitter.GetEntityName(property, true, ignoreInterface);

            if (!noOverload)
            {
                var overloads = OverloadsCollection.Create(emitter, property, remove);
                name = overloads.HasOverloads ? overloads.GetOverloadName() : name;
                noOverload = !overloads.HasOverloads;
            }
            return (remove ? "remove" : "add") + name;
        }

        public static string GetPropertyRef(PropertyDeclaration property, IEmitter emitter, bool isSetter = false, bool noOverload = false, bool ignoreInterface = false)
        {
            var name = emitter.GetEntityName(property, true, ignoreInterface);

            if (!noOverload)
            {
                var overloads = OverloadsCollection.Create(emitter, property, isSetter);
                name = overloads.HasOverloads ? overloads.GetOverloadName() : name;
                noOverload = !overloads.HasOverloads;
            }

            if (Helpers.IsFieldProperty(property, emitter))
            {
                return noOverload ? emitter.GetEntityName(property, false) : name;
            }

            return (isSetter ? "set" : "get") + name;
        }

        public static string GetPropertyRef(IndexerDeclaration property, IEmitter emitter, bool isSetter = false, bool noOverload = false, bool ignoreInterface = false)
        {
            var name = emitter.GetEntityName(property, true, ignoreInterface);

            if (!noOverload)
            {
                var overloads = OverloadsCollection.Create(emitter, property, isSetter);
                name = overloads.HasOverloads ? overloads.GetOverloadName() : name;
                noOverload = !overloads.HasOverloads;
            }

            return (isSetter ? "set" : "get") + name;
        }

        public static string GetIndexerRef(IMember property, IEmitter emitter, bool isSetter = false, bool noOverload = false, bool ignoreInterface = false)
        {
            var name = emitter.GetEntityName(property, true, ignoreInterface);

            if (!noOverload)
            {
                var overloads = OverloadsCollection.Create(emitter, property, isSetter);
                name = overloads.HasOverloads ? overloads.GetOverloadName() : name;
                noOverload = !overloads.HasOverloads;
            }

            return (isSetter ? "set" : "get") + name;
        }

        public static string GetPropertyRef(IMember property, IEmitter emitter, bool isSetter = false, bool noOverload = false, bool ignoreInterface = false)
        {
            if (property.DeclaringTypeDefinition != null &&
                emitter.Validator.IsIgnoreType(property.DeclaringTypeDefinition))
            {
                var attrName = emitter.GetEntityNameFromAttr(property, isSetter);

                if (!string.IsNullOrEmpty(attrName))
                {
                    return attrName;
                }
            }

            var name = emitter.GetEntityName(property, true, ignoreInterface);

            if (!noOverload)
            {
                var overloads = OverloadsCollection.Create(emitter, property, isSetter);
                name = overloads.HasOverloads ? overloads.GetOverloadName() : name;
                noOverload = !overloads.HasOverloads;
            }

            if (Helpers.IsFieldProperty(property, emitter))
            {
                return noOverload ? emitter.GetEntityName(property, false) : name;
            }

            return (isSetter ? "set" : "get") + name;
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

        private static readonly string[] reservedWords = new string[] { "abstract", "arguments", "as", "boolean", "break", "byte", "case", "catch", "char", "class", "continue", "const", "constructor", "debugger", "default", "delete", "do", "double", "else", "enum", "eval", "export", "extends", "false", "final", "finally", "float", "for", "function", "goto", "if", "implements", "import", "in", "instanceof", "int", "interface", "is", "let", "long", "namespace", "native", "new", "null", "package", "private", "protected", "public", "return", "short", "static", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "true", "try", "typeof", "use", "var", "void", "volatile", "while", "with", "yield" };

        public static bool IsReservedWord(string word)
        {
            return reservedWords.Contains(word);
        }

        public static string ChangeReservedWord(string name)
        {
            if (name == "constructor")
            {
                return "$constructor$";
            }

            return "$" + name;
        }

        public static object GetEnumValue(IEmitter emitter, IType type, object constantValue)
        {
            var enumMode = emitter.Validator.EnumEmitMode(type);

            if ((emitter.Validator.IsIgnoreType(type.GetDefinition()) && enumMode == -1) || enumMode == 2)
            {
                return constantValue;
            }

            if (enumMode >= 3)
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

        public static CustomAttribute GetInheritedAttribute(IEmitter emitter, TypeDefinition type, string attrName)
        {
            foreach (var attr in type.CustomAttributes)
            {
                if (attr.AttributeType.FullName == attrName)
                {
                    return attr;
                }
            }

            return null;
        }

        public static IAttribute GetInheritedAttribute(IType type, string attrName)
        {
            var typeDef = type.GetDefinition();
            foreach (var attr in typeDef.Attributes)
            {
                if (attr.AttributeType.FullName == attrName)
                {
                    return attr;
                }
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
                case "System.Byte":
                    return "Uint8Array";

                case "System.SByte":
                    return "Int8Array";

                case "System.Int16":
                    return "Int16Array";

                case "System.UInt16":
                    return "Uint16Array";

                case "System.Int32":
                    return "Int32Array";

                case "System.UInt32":
                    return "Uint32Array";

                case "System.Single":
                    return "Float32Array";

                case "System.Double":
                    return "Float64Array";
            }
            return null;
        }
    }
}