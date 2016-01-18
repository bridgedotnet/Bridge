using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.Utilities
{
    public class DecimalHelper
    {
        public static void AssertIsDecimalAndEqualTo(object v, double d, string message = null)
        {
           Assert.AreStrictEqual(v is decimal, true, message);
           Assert.AreStrictEqual(v.ToString(), d.ToString(), message);
        }

        public static void AssertIsDecimalAndEqualTo(object v, decimal d, string message = null)
        {
           Assert.AreStrictEqual(v is decimal, true, message);
           Assert.AreStrictEqual(v.ToString(), d.ToString(), message);
        }
    }
}
