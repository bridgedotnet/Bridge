using Bridge;
using Bridge.Test;

using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#577]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#577 - {0}")]
    public class Bridge577
    {
        public struct Bridge577UnitA
        {
        }
        public struct Bridge577UnitB
        {
            public int Number { get; set; }
        }

        public static Bridge577UnitA SomeMethodA(int j)
        {
            return new Bridge577UnitA();
        }

        public static Bridge577UnitB SomeMethodB(int j)
        {
            var v = new Bridge577UnitB();
            v.Number = j;

            return v;
        }

        [Test(ExpectedCount = 2)]
        public static void TestUseCase()
        {
            var a = SomeMethodA(1);
            Assert.NotNull(a, "#577 Bridge577UnitA created");

            var b = SomeMethodB(7);
            Assert.AreEqual(7, b.Number, "#577 Bridge577UnitB created");
        }
    }
}