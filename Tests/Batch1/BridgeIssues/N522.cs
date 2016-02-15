using Bridge;
using Bridge.Html5;
using Bridge.Test;

using System;
using System.Linq;
using System.Collections.Generic;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#522]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#522 - {0}")]
    public class Bridge522
    {
        public class BaseClass
        {
            private List<int> values = new List<int>();

            public void AddValue(int a)
            {
                values.Add(a);
            }

            public List<int> GetValues()
            {
                return values;
            }
        }

        public class DerivedClass1 : BaseClass
        {
            public DerivedClass1()
            {

            }
        }

        public class DerivedClass2 : BaseClass
        {
            public int B { get; set; }

            public DerivedClass2()
            {

            }
        }

        [Test(ExpectedCount = 2)]
        public static void TestUseCase1()
        {
            var dc1 = new DerivedClass1();
            dc1.AddValue(5);

            Assert.AreEqual(1, dc1.GetValues().Count, "Bridge522 dc1.Count = 1");

            var dc2 = new DerivedClass1();
            Assert.AreEqual(0, dc2.GetValues().Count, "Bridge522 dc2.Count = 0");
        }

        [Test(ExpectedCount = 2)]
        public static void TestUseCase2()
        {
            var dc1 = new DerivedClass2();
            dc1.AddValue(5);

            Assert.AreEqual(1, dc1.GetValues().Count, "Bridge522 dc1.Count = 1");

            var dc2 = new DerivedClass2();
            Assert.AreEqual(0, dc2.GetValues().Count, "Bridge522 dc2.Count = 0");
        }
    }
}