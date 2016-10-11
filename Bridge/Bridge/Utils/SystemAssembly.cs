namespace Bridge.Utils
{
    class SystemAssemblyVersion
    {
        [Init(InitPosition.Before)]
        public static void Version()
        {
            SystemAssembly.Assembly.VersionString = AssemblyVersionMarker.GetVersion();
            SystemAssembly.Assembly.CompilerVersionString = AssemblyVersionMarker.GetVersion(AssemblyVersionMarker.VersionType.Compiler);
        }
    }

    [External]
    class SystemAssembly
    {
#pragma warning disable 649 // CS0649  Field is never assigned to, and will always have its default value null
        [Template("Bridge.SystemAssembly")]
        public static SystemAssembly Assembly;
        [Name("version")]
        public string VersionString;

        [Name("compiler")]
        public string CompilerVersionString;
#pragma warning restore 649 // CS0649  Field is never assigned to, and will always have its default value null
    }

    /// <summary>
    /// The class is to get version string representation either of the current assembly or Compiler
    /// </summary>
    [External]
    public class AssemblyVersionMarker
    {
        [Enum(Emit.Value)]
        public enum VersionType
        {
            CurrentAssembly = 0,
            Compiler = 1
        }

        /// <summary>
        /// Compiler will replace the method call with an version required by method parameter
        /// </summary>
        /// <param name="type">Specifies either CurrentAssembly or Compiler version, default is CurrentAssembly</param>
        /// <returns>Current assembly or Compiler version in string representation</returns>
        [Template("{type:version}")]
        public static extern string GetVersion(VersionType type = VersionType.CurrentAssembly);
    }
}