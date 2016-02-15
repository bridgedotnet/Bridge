using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.Utilities
{
    public class DecimalHelper
    {
        public static void AssertIsDecimalAndEqualTo(object v, double d, string message = null)
        {
           Assert.AreStrictEqual(true, v is decimal, message);
           Assert.AreStrictEqual(d.ToString(), v.ToString(), message);
        }

        public static void AssertIsDecimalAndEqualTo(object v, decimal d, string message = null)
        {
           Assert.AreStrictEqual(true, v is decimal, message);
           Assert.AreStrictEqual(d.ToString(), v.ToString(), message);
        }
    }
}
