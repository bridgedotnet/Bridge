using Bridge;

namespace System.Reflection
{
    [External]
    public class Assembly
    {
        private extern Assembly();

        /// <summary>
        /// Gets the display name of the assembly.
        /// </summary>
        [Name("name")]
        public extern string FullName
        {
            get;
        }

        /// <summary>
        /// Creates the name of a type qualified by the display name of its assembly.
        /// </summary>
        /// <param name="assemblyName">The display name of an assembly.</param>
        /// <param name="typeName">The full name of a type.</param>
        /// <returns>The full name of the type qualified by the display name of the assembly.</returns>
        [Template("{typeName} + \", \" + {assemblyName}")]
        public static extern string CreateQualifiedName(string assemblyName, string typeName);

        /// <summary>
        /// Gets the currently loaded assembly in which the specified type is defined.
        /// </summary>
        /// <param name="type">An object representing a type in the assembly that will be returned.</param>
        /// <returns>The assembly in which the specified type is defined.</returns>
        [Template("Bridge.Reflection.getTypeAssembly({type})")]
        public static extern Assembly GetAssembly(Type type);

        /// <summary>
        /// Loads an assembly given the long form of its name.
        /// </summary>
        /// <param name="assemblyString">The long form of the assembly name.</param>
        /// <returns>The loaded assembly.</returns>
        [Template("Bridge.Reflection.load({assemblyString})")]
        public static extern Assembly Load(string assemblyString);

        /// <summary>
        /// Gets the Type object with the specified name in the assembly instance.
        /// </summary>
        /// <param name="name">The full name of the type.</param>
        /// <returns>An object that represents the specified class, or null if the class is not found.</returns>
        [Template("Bridge.Reflection.getType({name}, {this})")]
        public extern Type GetType(string name);

        /// <summary>
        /// Gets the types defined in this assembly.
        /// </summary>
        /// <returns>An array that contains all the types that are defined in this assembly.</returns>
        [Template("Bridge.Reflection.getAssemblyTypes({this})")]
        public extern Type[] GetTypes();

        /// <summary>
        /// Locates the specified type from this assembly and creates an instance of it using the system activator, using case-sensitive search.
        /// </summary>
        /// <param name="typeName">The Type.FullName of the type to locate.</param>
        /// <returns>An instance of the specified type created with the default constructor; or null if typeName is not found. The type is resolved using the default binder, without specifying culture or activation attributes, and with BindingFlags set to Public or Instance.</returns>
        [Template("Bridge.Reflection.createAssemblyInstance({this}, {typeName})")]
        public extern object CreateInstance(string typeName);

        /// <summary>
        /// Gets the assembly that contains the code that is currently executing.
        /// </summary>
        /// <returns>The assembly that contains the code that is currently executing.</returns>
        [Template("$asm")]
        public static extern Assembly GetExecutingAssembly();

        /// <summary>
        /// Retrieves a collection of custom attributes that are applied to a specified assembly.
        /// </summary>
        /// <returns>A collection of the custom attributes that are applied to element, or an empty collection if no such attributes exist.</returns>
        public extern object[] GetCustomAttributes();

        /// <summary>
        /// Retrieves a collection of custom attributes of a specified type that are applied to a specified assembly.
        /// </summary>
        /// <param name="attributeType">The type of attribute to search for.</param>
        /// <returns>A collection of the custom attributes that are applied to element and that match attributeType, or an empty collection if no such attributes exist.</returns>
        public extern object[] GetCustomAttributes(Type attributeType);

        /// <summary>
        /// Gets all the custom attributes for this assembly.
        /// </summary>
        /// <param name="inherit">This argument is ignored for objects of type Assembly.</param>
        /// <returns>An array that contains the custom attributes for this assembly.</returns>
        public extern object[] GetCustomAttributes(bool inherit);

        /// <summary>
        /// Gets the custom attributes for this assembly as specified by type.
        /// </summary>
        /// <param name="attributeType">The type for which the custom attributes are to be returned.</param>
        /// <param name="inherit">This argument is ignored for objects of type Assembly.</param>
        /// <returns>An array that contains the custom attributes for this assembly as specified by attributeType.</returns>
        public extern object[] GetCustomAttributes(Type attributeType, bool inherit);

        /// <summary>
        /// Returns the names of all the resources in this assembly.
        /// </summary>
        /// <returns>An array that contains the names of all the resources.</returns>
        public extern string[] GetManifestResourceNames();

        public extern string GetManifestResourceDataAsBase64(string name);

        public extern string GetManifestResourceDataAsBase64(Type type, string name);

        public extern byte[] GetManifestResourceData(string name);

        public extern byte[] GetManifestResourceData(Type type, string name);
    }
}