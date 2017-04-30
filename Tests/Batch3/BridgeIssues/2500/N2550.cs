using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2550 - {0}")]
    public class Bridge2550
    {
        [Test]
        public static void TestExplictImplementationReflectability()
        {
            Assert.AreEqual(0, typeof(B).GetProperties().Length);
            Assert.AreEqual(1, typeof(IA).GetProperties().Length);
        }

        [Reflectable]
        public class B : IA
        {
            int IA.A { get { return 0; } }
        }

        [Reflectable]
        public interface IA
        {
            int A { get; }
        }
    }
}