using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2574 - {0}")]
    public class Bridge2574
    {
        public class A
        {
            [Template("{Yes:6}")]
            public static extern implicit operator A(int value);

            public int Yes = 7;
        }

        static A Cool()
        {
            return -1;
        }

        [Test]
        public static void TestOperatorTemplate()
        {
            Assert.AreEqual(6, Bridge2574.Cool().Yes);
        }
    }
}