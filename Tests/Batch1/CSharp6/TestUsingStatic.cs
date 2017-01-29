using Bridge.Test.NUnit;
using static Bridge.Test.NUnit.Assert;
using static System.DayOfWeek;
using static System.Linq.Enumerable;
using static System.Math;

namespace Bridge.ClientTest.CSharp6
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Using static - {0}")]
    public class TestUsingStatic
    {
        [Test]
        public static void TestBasic()
        {
            AreEqual(5, Sqrt(3 * 3 + 4 * 4));
            AreEqual(4, Friday - Monday);

            var range = Range(5, 17);
            var even = range.Where(i => i % 2 == 0);
            AreEqual(8, even.Count());
            AreEqual(6, even.First());
            AreEqual(20, even.Last());
        }
    }
}