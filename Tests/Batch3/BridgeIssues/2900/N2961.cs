using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2961 - {0}")]
    public class Bridge2961
    {
        public enum TestEnum1
        {
            Name = 1,
            Life = 2
        }

        public enum TestEnum2
        {
            One = 1,
            name = 3
        }

        public enum TestEnum3
        {
            Two = 2,
            name = 4,
            Name = 5
        }

        [Test]
        public static void TestEnumMemberName()
        {
            dynamic o = null;

            //@ o = Bridge.ClientTest.Batch3.BridgeIssues.Bridge2961.TestEnum1.Name;
            Assert.AreEqual(1, o);

            //@ o = Bridge.ClientTest.Batch3.BridgeIssues.Bridge2961.TestEnum2.$name;
            Assert.AreEqual(3, o);

            //@ o = Bridge.ClientTest.Batch3.BridgeIssues.Bridge2961.TestEnum3.$name;
            Assert.AreEqual(4, o);

            //@ o = Bridge.ClientTest.Batch3.BridgeIssues.Bridge2961.TestEnum3.Name;
            Assert.AreEqual(5, o);
        }
    }
}