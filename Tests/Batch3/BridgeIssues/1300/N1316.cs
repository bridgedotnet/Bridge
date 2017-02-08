using Bridge.Test.NUnit;

using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1316 - {0}")]
    public class Bridge1316
    {
        [Test]
        public static void TestUseCase()
        {
            int v = 0;
            var s = v + "";

            Assert.AreEqual("0", s);
        }

        [Test]
        public static void TestStringConcatObject()
        {
            object o1 = 3;
            var s1 = string.Concat(o1);

            Assert.AreEqual("3", s1);

            object o2 = null;
            var s2 = string.Concat(o2);

            Assert.AreEqual("", s2);
        }

        [Test]
        public static void TestStringConcatEnumerableString()
        {
            IEnumerable<string> e1 = new string[] { "1", "2" };
            var s1 = string.Concat(e1);

            Assert.AreEqual("12", s1, "All not null");

            IEnumerable<string> e2 = new string[] { "3", null, "4" };
            var s2 = string.Concat(e2);

            Assert.AreEqual("34", s2, "One is null");

            IEnumerable<string> e3 = new string[] { };
            var s3 = string.Concat(e3);

            Assert.AreEqual("", s3, "Empty");
        }

        [Test]
        public static void TestStringConcatEnumerableGeneric()
        {
            IEnumerable<object> e1 = new object[] { 1, "2" };
            var s1 = string.Concat(e1);

            Assert.AreEqual("12", s1, "All not null");

            IEnumerable<object> e2 = new object[] { "3", null, 4 };
            var s2 = string.Concat(e2);

            Assert.AreEqual("34", s2, "One is null");

            IEnumerable<object> e3 = new object[] { };
            var s3 = string.Concat(e3);

            Assert.AreEqual("", s3, "Empty");
        }
    }
}