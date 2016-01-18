using System;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#652]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#652 - {0}")]
    public class Bridge652
    {
        private static string log;
        internal class Bridge652A1 : Bridge652C<Bridge652B1>
        {
        }
        internal class Bridge652B1
        {
            public Bridge652B1()
            {
                log = "Bridge652B1";
            }
        }
        internal class Bridge652C<T> where T : new()
        {
            public T Bar;

            public Bridge652C()
            {
                Bar = new T();
            }
        }
        internal class Bridge652A2 : Bridge652D<Bridge652B2>
        {
        }
        internal class Bridge652B2 : IComparable
        {
            public int CompareTo(Object obj)
            {
                return 0;
            }

            public Bridge652B2()
            {
                log = "Bridge652B2";
            }
        }
        internal class Bridge652D<T> where T : IComparable, new()
        {
            public T Bar;

            public Bridge652D()
            {
                Bar = new T();
            }
        }

        [Test(ExpectedCount = 4)]
        public static void TestUseCase()
        {
            log = null;
            var c = new Bridge652A1();
            Assert.AreNotEqual(c.Bar, null, "Bridge652A1 Bar NotNull");
            Assert.AreEqual(log, "Bridge652B1", "Bridge652A1 log");

            log = null;
            var d = new Bridge652A2();
            Assert.AreNotEqual(d.Bar, null, "Bridge652A2 Bar NotNull");
            Assert.AreEqual(log, "Bridge652B2", "Bridge652A2 log");
        }
    }
}