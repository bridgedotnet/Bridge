using Bridge;

namespace System.Reflection
{
    [External]
    public class Assembly
    {
        private extern Assembly();

        public extern string FullName
        {
            get;
        }

        [Template("{typeName} + ', ' + {assemblyName}")]
        public static extern string CreateQualifiedName(string assemblyName, string typeName);

        [Template("Bridge.Reflection.getTypeAssembly({type})")]
        public static extern Assembly GetAssembly(Type type);

        [Template("Bridge.Reflection.load({assemblyString})")]
        public static extern Assembly Load(string assemblyString);

        [Template("Bridge.Reflection.getType({name}, {this})")]
        public extern Type GetType(string name);

        [Template("Bridge.Reflection.getAssemblyTypes({this})")]
        public extern Type[] GetTypes();

        [Template("Bridge.Reflection.createAssemblyInstance({this}, {typeName})")]
        public extern object CreateInstance(string typeName);

        [Template("$asm")]
        public static extern Assembly GetExecutingAssembly();

        public extern object[] GetCustomAttributes();

        public extern object[] GetCustomAttributes(Type attributeType);

        public extern object[] GetCustomAttributes(bool inherit);

        public extern object[] GetCustomAttributes(Type attributeType, bool inherit);

        public extern string[] GetManifestResourceNames();

        public extern string GetManifestResourceDataAsBase64(string name);

        public extern string GetManifestResourceDataAsBase64(Type type, string name);

        public extern byte[] GetManifestResourceData(string name);

        public extern byte[] GetManifestResourceData(Type type, string name);
    }
}