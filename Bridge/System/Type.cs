using Bridge;
using System.ComponentModel;
using System.Reflection;

namespace System
{
    [External]
    [Name("Function")]
    public class Type
    {
        public extern string FullName
        {
            [Template("Bridge.Reflection.getTypeFullName({this})")]
            get;
        }

        public extern Type BaseType
        {
            [Template("Bridge.Reflection.getBaseType({this})")]
            get;
        }

        [Template("Bridge.Reflection.isAssignableFrom({this}, {type})")]
        public extern bool IsAssignableFrom(Type type);

        public extern string AssemblyQualifiedName
        {
            [Template("Bridge.Reflection.getTypeQName({this})")]
            get;
        }

        public extern string Name
        {
            [Template("Bridge.Reflection.getTypeName({this})")]
            get;
        }

        public extern string Namespace
        {
            [Template("Bridge.Reflection.getTypeNamespace({this})")]
            get;
        }

        public extern Assembly Assembly
        {
            [Template("Bridge.Reflection.getTypeAssembly({this})")]
            get;
        }

        [Template("Bridge.Reflection.getType({typeName})")]
        public static extern Type GetType(string typeName);

        [Template("{this}.apply(null, {typeArguments})")]
        public extern Type MakeGenericType(Type[] typeArguments);

        [Template("Bridge.Reflection.getGenericTypeDefinition({this})")]
        public extern Type GetGenericTypeDefinition();

        public extern bool IsGenericTypeDefinition
        {
            [Template("Bridge.Reflection.isGenericTypeDefinition({this})")]
            get;
        }

        public extern int GenericParameterCount
        {
            [Template("Bridge.Reflection.getGenericParameterCount({this})")]
            get;
        }

        [Template("Bridge.Reflection.getGenericArguments({this})")]
        public extern Type[] GetGenericArguments();

        [Template("Bridge.Reflection.getInterfaces({this})")]
        public extern Type[] GetInterfaces();

        [Template("{this}.prototype instanceof {type}")]
        public extern bool IsSubclassOf(Type type);

        public extern bool IsClass
        {
            [Template("Bridge.Reflection.isClass({this})")]
            get;
        }

        public extern bool IsEnum
        {
            [Template("Bridge.Reflection.isEnum({this})")]
            get;
        }

        public extern bool IsFlags
        {
            [Template("Bridge.Reflection.isFlags({this})")]
            get;
        }

        public extern bool IsInterface
        {
            [Template("Bridge.Reflection.isInterface({this})")]
            get;
        }

        public extern bool IsArray
        {
            [Template("{this} === Array")]
            get;
        }

        [Template("Bridge.Reflection.getAttributes({this}, null, {inherit})")]
        public extern object[] GetCustomAttributes(bool inherit);

        [Template("Bridge.Reflection.getAttributes({this}, {attributeType}, {inherit})")]
        public extern object[] GetCustomAttributes(Type attributeType, bool inherit);

        [Template("Bridge.Reflection.isInstanceOfType({instance}, {this})")]
        public extern bool IsInstanceOfType(object instance);

        [Template("Bridge.Reflection.isInstanceOfType({instance}, {type})")]
        public static extern bool IsInstanceOfType(object instance, Type type);

        [Template("Bridge.Reflection.getMembers({this}, 31, 28)")]
        public extern MemberInfo[] GetMembers();

        [Template("Bridge.Reflection.getMembers({this}, 31, {bindingAttr})")]
        public extern MemberInfo[] GetMembers(BindingFlags bindingAttr);

        [Template("Bridge.Reflection.getMembers({this}, 31, 28, {name})")]
        public extern MemberInfo[] GetMember(string name);

        [Template("Bridge.Reflection.getMembers({this}, 31, {bindingAttr}, {name})")]
        public extern MemberInfo[] GetMember(string name, BindingFlags bindingAttr);

        [Template("Bridge.Reflection.getMembers({this}, 1, 28)")]
        public extern ConstructorInfo[] GetConstructors();

        [Template("Bridge.Reflection.getMembers({this}, 1, 284, null, {parameterTypes})")]
        public extern ConstructorInfo GetConstructor(Type[] parameterTypes);

        [Template("Bridge.Reflection.getMembers({this}, 8, 28)")]
        public extern MethodInfo[] GetMethods();

        [Template("Bridge.Reflection.getMembers({this}, 8, {bindingAttr})")]
        public extern MethodInfo[] GetMethods(BindingFlags bindingAttr);

        [Template("Bridge.Reflection.getMembers({this}, 8, 284, {name})")]
        public extern MethodInfo GetMethod(string name);

        [Template("Bridge.Reflection.getMembers({this}, 8, {bindingAttr} | 256, {name})")]
        public extern MethodInfo GetMethod(string name, BindingFlags bindingAttr);

        [Template("Bridge.Reflection.getMembers({this}, 8, 284, {name}, {parameterTypes})")]
        public extern MethodInfo GetMethod(string name, Type[] parameterTypes);

        [Template("Bridge.Reflection.getMembers({this}, 8, {bindingAttr} | 256, {name}, {parameterTypes})")]
        public extern MethodInfo GetMethod(string name, BindingFlags bindingAttr, Type[] parameterTypes);

        [Template("Bridge.Reflection.getMembers({this}, 16, 28)")]
        public extern PropertyInfo[] GetProperties();

        [Template("Bridge.Reflection.getMembers({this}, 16, {bindingAttr})")]
        public extern PropertyInfo[] GetProperties(BindingFlags bindingAttr);

        [Template("Bridge.Reflection.getMembers({this}, 16, 284, {name})")]
        public extern PropertyInfo GetProperty(string name);

        [Template("Bridge.Reflection.getMembers({this}, 16, {bindingAttr} | 256, {name})")]
        public extern PropertyInfo GetProperty(string name, BindingFlags bindingAttr);

        [Template("Bridge.Reflection.getMembers({this}, 16, 284, {name}, {parameterTypes})")]
        public extern PropertyInfo GetProperty(string name, Type[] parameterTypes);

        [Template("Bridge.Reflection.getMembers({this}, 16, {bindingAttr} | 256, {name}, {parameterTypes})")]
        public extern PropertyInfo GetProperty(string name, BindingFlags bindingAttr, Type[] parameterTypes);

        [Template("Bridge.Reflection.getMembers({this}, 2, 28)")]
        public extern EventInfo[] GetEvents();

        [Template("Bridge.Reflection.getMembers({this}, 2, {bindingAttr})")]
        public extern EventInfo[] GetEvents(BindingFlags bindingAttr);

        [Template("Bridge.Reflection.getMembers({this}, 2, 284, {name})")]
        public extern EventInfo GetEvent(string name);

        [Template("Bridge.Reflection.getMembers({this}, 2, {bindingAttr} | 256, {name})")]
        public extern EventInfo GetEvent(string name, BindingFlags bindingAttr);

        [Template("Bridge.Reflection.getMembers({this}, 4, 28)")]
        public extern FieldInfo[] GetFields();

        [Template("Bridge.Reflection.getMembers({this}, 4, {bindingAttr})")]
        public extern FieldInfo[] GetFields(BindingFlags bindingAttr);

        [Template("Bridge.Reflection.getMembers({this}, 4, 284, {name})")]
        public extern FieldInfo GetField(string name);

        [Template("Bridge.Reflection.getMembers({this}, 4, {bindingAttr} | 256, {name})")]
        public extern FieldInfo GetField(string name, BindingFlags bindingAttr);

        [FieldProperty]
        public extern object Prototype { get; }

        [EditorBrowsable(EditorBrowsableState.Never)]
        [NonScriptable]
        public static extern Type GetTypeFromHandle(RuntimeTypeHandle typeHandle);

        [Template("Bridge.getTypeName({this})")]
        public override extern string GetClassName();
    }
}