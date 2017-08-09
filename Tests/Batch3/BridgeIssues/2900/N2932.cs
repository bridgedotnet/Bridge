using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2932 - {0}")]
    public class Bridge2932
    {
        enum A { A, B, C }

        [Test]
        public static void TestEnumBaseType()
        {
            Assert.AreEqual("System.Enum", typeof(A).BaseType.FullName);
            Assert.AreEqual(typeof(Enum), typeof(A).BaseType);
        }
    }
}