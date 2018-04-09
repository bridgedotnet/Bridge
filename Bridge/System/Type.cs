using System.ComponentModel;
using System.Reflection;

namespace System
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("Function")]
    public class Type
    {
        public extern string FullName
        {
            [Bridge.Template("Bridge.Reflection.getTypeFullName({this})")]
            get;
        }

        /// <summary>
        /// Gets the type from which the current Type directly inherits.
        /// </summary>
        public extern Type BaseType
        {
            [Bridge.Template("Bridge.Reflection.getBaseType({this})")]
            get;
        }

        [Bridge.Template("Bridge.Reflection.isAssignableFrom({this}, {type})")]
        public extern bool IsAssignableFrom(Type type);

        public extern string AssemblyQualifiedName
        {
            [Bridge.Template("Bridge.Reflection.getTypeQName({this})")]
            get;
        }

        public extern string Name
        {
            [Bridge.Template("Bridge.Reflection.getTypeName({this})")]
            get;
        }

        public extern string Namespace
        {
            [Bridge.Template("Bridge.Reflection.getTypeNamespace({this})")]
            get;
        }

        public extern Assembly Assembly
        {
            [Bridge.Template("Bridge.Reflection.getTypeAssembly({this})")]
            get;
        }

        [Bridge.Template("Bridge.Reflection.getType({typeName})")]
        public static extern Type GetType(string typeName);

        [Bridge.Template("{this}.apply(null, {typeArguments})")]
        public extern Type MakeGenericType(Type[] typeArguments);

        [Bridge.Template("Bridge.Reflection.getGenericTypeDefinition({this})")]
        public extern Type GetGenericTypeDefinition();

        public extern bool IsGenericTypeDefinition
        {
            [Bridge.Template("Bridge.Reflection.isGenericTypeDefinition({this})")]
            get;
        }

        /// <summary>
        /// Gets a value indicating whether the current type is a generic type.
        /// </summary>
        public extern bool IsGenericType
        {
            [Bridge.Template("Bridge.Reflection.isGenericType({this})")]
            get;
        }

        public extern int GenericParameterCount
        {
            [Bridge.Template("Bridge.Reflection.getGenericParameterCount({this})")]
            get;
        }

        /// <summary>
        /// Gets a value indicating whether the Type is abstract and must be overridden.
        /// </summary>
        public extern bool IsAbstract
        {
            [Bridge.Template("((Bridge.Reflection.getMetaValue({this}, \"att\", 0)  & 128)  != 0)")]
            get;
        }

        /// <summary>
        /// Gets a value indicating whether the Type is declared sealed.
        /// </summary>
        public extern bool IsSealed
        {
            [Bridge.Template("((Bridge.Reflection.getMetaValue({this}, \"att\", 0)  & 256)  != 0)")]
            get;
        }

        /// <summary>
        /// Gets the type that declares the current nested type or generic type parameter.
        /// </summary>
        public extern Type DeclaringType
        {
            [Bridge.Template("Bridge.Reflection.getMetaValue({this}, \"td\", null)")]
            get;
        }

        /// <summary>
        /// Gets a value indicating whether the current Type object represents a type whose definition is nested inside the definition of another type.
        /// </summary>
        public extern bool IsNested
        {
            [Bridge.Template("(Bridge.Reflection.getMetaValue({this}, \"td\", null) != null)")]
            get;
        }

        /// <summary>
        /// Gets the attributes associated with the Type.
        /// </summary>
        public extern TypeAttributes Attributes
        {
            [Bridge.Template("Bridge.Reflection.getMetaValue({this}, \"att\", 0)")]
            get;
        }

        /// <summary>
        /// Gets a value indicating whether the current Type object has type parameters that have not been replaced by specific types.
        /// </summary>
        public extern bool ContainsGenericParameters
        {
            [Bridge.Template("Bridge.Reflection.hasGenericParameters({this})")]
            get;
        }

        /// <summary>
        /// Gets a value indicating whether the current Type represents a type parameter in the definition of a generic type or method.
        /// </summary>
        public extern bool IsGenericParameter
        {
            [Bridge.Template("({this}.$isTypeParameter || false)")]
            get;
        }

        /// <summary>
        /// Returns an array of Type objects that represent the type arguments of a closed generic type or the type parameters of a generic type definition.
        /// </summary>
        /// <returns>An array of Type objects that represent the type arguments of a generic type. Returns an empty array if the current type is not a generic type.</returns>
        [Bridge.Template("Bridge.Reflection.getGenericArguments({this})")]
        public extern Type[] GetGenericArguments();

        [Bridge.Template("Bridge.Reflection.getInterfaces({this})")]
        public extern Type[] GetInterfaces();

        [Bridge.Template("({this}.prototype instanceof {type})")]
        public extern bool IsSubclassOf(Type type);

        public extern bool IsClass
        {
            [Bridge.Template("Bridge.Reflection.isClass({this})")]
            get;
        }

        public extern bool IsEnum
        {
            [Bridge.Template("Bridge.Reflection.isEnum({this})")]
            get;
        }

        public extern bool IsFlags
        {
            [Bridge.Template("Bridge.Reflection.isFlags({this})")]
            get;
        }

        public extern bool IsInterface
        {
            [Bridge.Template("Bridge.Reflection.isInterface({this})")]
            get;
        }

        public extern bool IsArray
        {
            [Bridge.Template("Bridge.isArray(null, {this})")]
            get;
        }

        [Bridge.Template("Bridge.Reflection.getAttributes({this}, null, {inherit})")]
        public extern object[] GetCustomAttributes(bool inherit);

        [Bridge.Template("Bridge.Reflection.getAttributes({this}, {attributeType}, {inherit})")]
        public extern object[] GetCustomAttributes(Type attributeType, bool inherit);

        [Bridge.Template("Bridge.Reflection.isInstanceOfType({instance}, {this})")]
        public extern bool IsInstanceOfType(object instance);

        [Bridge.Template("Bridge.Reflection.isInstanceOfType({instance}, {type})")]
        public static extern bool IsInstanceOfType(object instance, Type type);

        [Bridge.Template("Bridge.Reflection.getMembers({this}, 31, 28)")]
        public extern MemberInfo[] GetMembers();

        [Bridge.Template("Bridge.Reflection.getMembers({this}, 31, {bindingAttr})")]
        public extern MemberInfo[] GetMembers(BindingFlags bindingAttr);

        [Bridge.Template("Bridge.Reflection.getMembers({this}, 31, 28, {name})")]
        public extern MemberInfo[] GetMember(string name);

        [Bridge.Template("Bridge.Reflection.getMembers({this}, 31, {bindingAttr}, {name})")]
        public extern MemberInfo[] GetMember(string name, BindingFlags bindingAttr);

        [Bridge.Template("Bridge.Reflection.getMembers({this}, 1, 28)")]
        public extern ConstructorInfo[] GetConstructors();

        [Bridge.Template("Bridge.Reflection.getMembers({this}, 1, 284, null, {parameterTypes})")]
        public extern ConstructorInfo GetConstructor(Type[] parameterTypes);

        [Bridge.Template("Bridge.Reflection.getMembers({this}, 8, 28)")]
        public extern MethodInfo[] GetMethods();

        [Bridge.Template("Bridge.Reflection.getMembers({this}, 8, {bindingAttr})")]
        public extern MethodInfo[] GetMethods(BindingFlags bindingAttr);

        [Bridge.Template("Bridge.Reflection.getMembers({this}, 8, 284, {name})")]
        public extern MethodInfo GetMethod(string name);

        [Bridge.Template("Bridge.Reflection.getMembers({this}, 8, {bindingAttr} | 256, {name})")]
        public extern MethodInfo GetMethod(string name, BindingFlags bindingAttr);

        [Bridge.Template("Bridge.Reflection.getMembers({this}, 8, 284, {name}, {parameterTypes})")]
        public extern MethodInfo GetMethod(string name, Type[] parameterTypes);

        [Bridge.Template("Bridge.Reflection.getMembers({this}, 8, {bindingAttr} | 256, {name}, {parameterTypes})")]
        public extern MethodInfo GetMethod(string name, BindingFlags bindingAttr, Type[] parameterTypes);

        [Bridge.Template("Bridge.Reflection.getMembers({this}, 16, 28)")]
        public extern PropertyInfo[] GetProperties();

        [Bridge.Template("Bridge.Reflection.getMembers({this}, 16, {bindingAttr})")]
        public extern PropertyInfo[] GetProperties(BindingFlags bindingAttr);

        [Bridge.Template("Bridge.Reflection.getMembers({this}, 16, 284, {name})")]
        public extern PropertyInfo GetProperty(string name);

        [Bridge.Template("Bridge.Reflection.getMembers({this}, 16, {bindingAttr} | 256, {name})")]
        public extern PropertyInfo GetProperty(string name, BindingFlags bindingAttr);

        [Bridge.Template("Bridge.Reflection.getMembers({this}, 16, 284, {name}, {parameterTypes})")]
        public extern PropertyInfo GetProperty(string name, Type[] parameterTypes);

        [Bridge.Template("Bridge.Reflection.getMembers({this}, 16, {bindingAttr} | 256, {name}, {parameterTypes})")]
        public extern PropertyInfo GetProperty(string name, BindingFlags bindingAttr, Type[] parameterTypes);

        [Bridge.Template("Bridge.Reflection.getMembers({this}, 2, 28)")]
        public extern EventInfo[] GetEvents();

        [Bridge.Template("Bridge.Reflection.getMembers({this}, 2, {bindingAttr})")]
        public extern EventInfo[] GetEvents(BindingFlags bindingAttr);

        [Bridge.Template("Bridge.Reflection.getMembers({this}, 2, 284, {name})")]
        public extern EventInfo GetEvent(string name);

        [Bridge.Template("Bridge.Reflection.getMembers({this}, 2, {bindingAttr} | 256, {name})")]
        public extern EventInfo GetEvent(string name, BindingFlags bindingAttr);

        [Bridge.Template("Bridge.Reflection.getMembers({this}, 4, 28)")]
        public extern FieldInfo[] GetFields();

        [Bridge.Template("Bridge.Reflection.getMembers({this}, 4, {bindingAttr})")]
        public extern FieldInfo[] GetFields(BindingFlags bindingAttr);

        [Bridge.Template("Bridge.Reflection.getMembers({this}, 4, 284, {name})")]
        public extern FieldInfo GetField(string name);

        [Bridge.Template("Bridge.Reflection.getMembers({this}, 4, {bindingAttr} | 256, {name})")]
        public extern FieldInfo GetField(string name, BindingFlags bindingAttr);

        [Bridge.Template("Bridge.Reflection.getNestedTypes({this})")]
        public extern Type[] GetNestedTypes();

        [Bridge.Template("Bridge.Reflection.getNestedTypes({this}, {bindingAttr})")]
        public extern Type[] GetNestedTypes(BindingFlags bindingAttr);

        [Bridge.Template("Bridge.Reflection.getNestedType({this}, {name})")]
        public extern Type GetNestedType(string name);

        [Bridge.Template("Bridge.Reflection.getNestedType({this}, {name}, {bindingAttr})")]
        public extern Type GetNestedType(string name, BindingFlags bindingAttr);

        /// <summary>
        /// When overridden in a derived class, returns the Type of the object encompassed or referred to by the current array, pointer or reference type.
        /// </summary>
        /// <returns>The Type of the object encompassed or referred to by the current array, pointer, or reference type, or null if the current Type is not an array or a pointer, or is not passed by reference, or represents a generic type or a type parameter in the definition of a generic type or generic method.</returns>
        [Bridge.Template("({this}.$elementType || null)")]
        public extern Type GetElementType();

        /// <summary>
        /// Gets a value indicating whether the current Type encompasses or refers to another type; that is, whether the current Type is an array, a pointer, or is passed by reference.
        /// </summary>
        public extern bool HasElementType
        {
            [Bridge.Template("(!!{this}.$elementType)")]
            get;
        }

        /// <summary>
        /// Returns a Type object representing a one-dimensional array of the current type, with a lower bound of zero.
        /// </summary>
        /// <returns>A Type object representing a one-dimensional array of the current type, with a lower bound of zero.</returns>
        [Bridge.Template("System.Array.type({this})")]
        public extern Type MakeArrayType();

        /// <summary>
        /// Returns a Type object representing an array of the current type, with the specified number of dimensions.
        /// </summary>
        /// <param name="rank">The number of dimensions for the array. This number must be less than or equal to 32.</param>
        /// <returns>An object representing an array of the current type, with the specified number of dimensions.</returns>
        [Bridge.Template("System.Array.type({this}, {rank})")]
        public extern Type MakeArrayType(int rank);

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern object Prototype { get; }

        [EditorBrowsable(EditorBrowsableState.Never)]
        [Bridge.NonScriptable]
        public static extern Type GetTypeFromHandle(RuntimeTypeHandle typeHandle);

        /// <summary>
        /// Returns the names of the members of the current enumeration type.
        /// </summary>
        /// <returns>An array that contains the names of the members of the enumeration.</returns>
        [Bridge.Template("System.Enum.getNames({this})")]
        public virtual extern string[] GetEnumNames();

        /// <summary>
        /// Returns the name of the constant that has the specified value, for the current enumeration type.
        /// </summary>
        /// <param name="value">The value whose name is to be retrieved.</param>
        /// <returns>The name of the member of the current enumeration type that has the specified value, or null if no such constant is found.</returns>
        [Bridge.Template("System.Enum.getName({this}, {value})")]
        public virtual extern string GetEnumName(object value);

        /// <summary>
        /// Returns an array of the values of the constants in the current enumeration type.
        /// </summary>
        /// <returns>An array that contains the values. The elements of the array are sorted by the binary values (that is, the unsigned values) of the enumeration constants.</returns>
        [Bridge.Template("System.Enum.getValues({this})")]
        public virtual extern Array GetEnumValues();

        /// <summary>
        /// Returns the underlying type of the current enumeration type.
        /// </summary>
        /// <returns>The underlying type of the current enumeration.</returns>
        [Bridge.Template("System.Enum.getUnderlyingType({this})")]
        public virtual extern Type GetEnumUnderlyingType();

        /// <summary>
        /// Gets a value indicating whether the Type is declared public.
        /// </summary>
        public extern bool IsPublic
        {
            [Bridge.Template("((Bridge.Reflection.getMetaValue({this}, \"att\", 0)  & 7)  == 1)")]
            get;
        }

        /// <summary>
        /// Gets a value indicating whether the Type is not declared public.
        /// </summary>
        public extern bool IsNotPublic
        {
            [Bridge.Template("((Bridge.Reflection.getMetaValue({this}, \"att\", 0)  & 7)  == 0)")]
            get;
        }

        /// <summary>
        /// Gets a value indicating whether a class is nested and declared public.
        /// </summary>
        public extern bool IsNestedPublic
        {
            [Bridge.Template("((Bridge.Reflection.getMetaValue({this}, \"att\", 0)  & 7)  == 2)")]
            get;
        }

        /// <summary>
        /// Gets a value indicating whether the Type is nested and declared private.
        /// </summary>
        public extern bool IsNestedPrivate
        {
            [Bridge.Template("((Bridge.Reflection.getMetaValue({this}, \"att\", 0)  & 7)  == 3)")]
            get;
        }

        /// <summary>
        /// Gets a value indicating whether the Type is nested and visible only within its own family.
        /// </summary>
        public extern bool IsNestedFamily
        {
            [Bridge.Template("((Bridge.Reflection.getMetaValue({this}, \"att\", 0)  & 7)  == 4)")]
            get;
        }

        /// <summary>
        /// Gets a value indicating whether the Type is nested and visible only within its own assembly.
        /// </summary>
        public extern bool IsNestedAssembly
        {
            [Bridge.Template("((Bridge.Reflection.getMetaValue({this}, \"att\", 0)  & 7)  == 5)")]
            get;
        }

        [Bridge.Template("Bridge.getTypeName({this})")]
        public override extern string ToString();

        public extern bool IsValueType
        {
            [Bridge.Template("Bridge.Reflection.isValueType({this})")]
            get;
        }
    }
}