using Bridge.Test.NUnit;

using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1160 - {0}")]
    public class Bridge1160
    {
        [Test]
        public static void TestBitwiseOrAnd()
        {
            var x = new Bridge1160A();

            var processor = x.Processor;
            Assert.AreEqual("Hello", processor("Hello"));
            Assert.AreEqual("Hello", x.Processor("Hello"));
        }
    }

    public class Bridge1160A
    {
        public Func<string, string> Processor { get { return message => message; } }
    }
}