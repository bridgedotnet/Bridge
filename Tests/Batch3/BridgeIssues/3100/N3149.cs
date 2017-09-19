using System;
using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3149 - {0}")]
    public class Bridge3149
    {
        public class Entity { }

        [Test]
        public static void TestListRemove()
        {
            var listOfInts = new List<Entity>();

            listOfInts.Remove(null);

            var ent = new Entity();
            listOfInts.Add(ent);
            listOfInts.Remove(ent);

            listOfInts.Remove(null);
            Assert.AreEqual(0, listOfInts.Count);
        }
    }
}