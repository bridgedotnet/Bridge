namespace Bridge.ClientTestHelperExternal
{
#pragma warning disable 626    // CS0626  Method, operator, or accessor ... is marked external and has no attributes on it. Consider adding a DllImport attribute to specify the external implementation.
    [External]
    [Name("Bridge")]
    public class BridgeHelper
    {
        [Convention(Notation.CamelCase)]
        public static extern T Merge<T>(object o1, object o2);
    }
#pragma warning restore 626
}
