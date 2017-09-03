using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3089 - {0}")]
    public class Bridge3089
    {
        public class C
        {
            [Template("({c})")]
            [Script("return c")]
            static public implicit operator C(string c)
            {
                return null;
            }
        }

        static public string method()
        {
            return "test";
        }

        [Test]
        public static void TestOperatorTemplate()
        {
            C c = method();
            Assert.AreEqual("test", c);
        }
    }
}