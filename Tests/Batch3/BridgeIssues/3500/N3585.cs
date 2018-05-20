using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3585 - {0}")]
    public class Bridge3585
    {
        [Test]
        public static void TestInsert()
        {
            var list = new List<int> { 1, 2, 3 };
            var roList = list.AsReadOnly();
            var ilist = (IList)roList;

            try
            {
                ilist.Insert(0, 0);
                Assert.Fail();
            }
            catch (Exception ex)
            {
                Assert.AreEqual("Collection is read-only.", ex.Message);
            }
        }
    }
}