using System;
using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3126 - {0}")]
    public class Bridge3126
    {
        class Foo
        {
            public int V;
        }

        [Test]
        public static void TestListSortComparison()
        {
            var list = new List<Foo>();

            list.Add(new Foo() { V = 3 });
            list.Add(new Foo() { V = 1 });
            list.Add(new Foo() { V = 2 });

            list.Sort((a, b) =>
            {
                return a.V.CompareTo(b.V);
            });

            Assert.AreEqual(1, list[0].V);
            Assert.AreEqual(2, list[1].V);
            Assert.AreEqual(3, list[2].V);
        }
    }
}