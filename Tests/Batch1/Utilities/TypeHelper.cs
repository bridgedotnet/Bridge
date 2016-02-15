using Bridge;

namespace Bridge.ClientTest.Utilities
{
    public class TypeHelper
    {
        public static string GetTypeName(object o)
        {
            return o.GetClassName();
            // return Script.Get<string>("o.__proto__.$$name");
        }
    }
}
