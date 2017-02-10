using Bridge.Test.NUnit;

using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1374 - {0}")]
    public class Bridge1374
    {
        private class ScopeContainer
        {
            public int Value { get; set; }

            public string InstanceIntConverter(int i)
            {
                return (this.Value + i).ToString();
            }
        }

        public static int Value { get; set; }

        private static string StaticIntConverter(int i)
        {
            return (Value + i).ToString();
        }

        [Test(ExpectedCount = 1)]
        public static void TestConvertAllForIntListStaticMethod()
        {
            var l = new[] { 1, 2, 3 };

            Bridge1374.Value = 100;

            Assert.AreDeepEqual(new[] { "101", "102", "103" }, Array.ConvertAll(l, StaticIntConverter));
        }

        [Test(ExpectedCount = 1)]
        public static void TestConvertAllForIntListInstanceMethod()
        {
            var l = new[] { 1, 2, 3 };

            var t = new ScopeContainer() { Value = 10 };

            Assert.AreDeepEqual(new[] { "11", "12", "13" }, Array.ConvertAll(l, t.InstanceIntConverter));
        }

        [Test(ExpectedCount = 1)]
        public static void TestConvertAllForIntListLambda()
        {
            var l = new[] { 1, 2, 3 };

            Assert.AreDeepEqual(new[] { "1", "2", "3" }, Array.ConvertAll(l, x => x.ToString()));
        }

        [Test(ExpectedCount = 1)]
        public static void TestConvertAllForNullConverter()
        {
            var l = new[] { 1, 2, 3 };

            Converter<int, string> converter = null;

            Assert.Throws<ArgumentNullException>(() => Array.ConvertAll(l, converter), "Null converter throws exception");
        }

        [Test(ExpectedCount = 1)]
        public static void TestConvertAllForNullArray()
        {
            int[] l = null;

            Assert.Throws<ArgumentNullException>(() => Array.ConvertAll(l, x => x), "Null array throws exception");
        }
    }
}