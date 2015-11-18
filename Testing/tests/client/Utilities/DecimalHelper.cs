using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary.Utilities
{
    [FileName("utilities.js")]
    public class DecimalHelper
    {
        public static void AssertIsDecimalAndEqualTo(Assert assert, object v, double d, string message = null)
        {
            assert.StrictEqual(v is decimal, true, message);
            assert.StrictEqual(v.ToString(), d.ToString(), message);
        }

        public static void AssertIsDecimalAndEqualTo(Assert assert, object v, decimal d, string message = null)
        {
            assert.StrictEqual(v is decimal, true, message);
            assert.StrictEqual(v.ToString(), d.ToString(), message);
        }
    }
}
