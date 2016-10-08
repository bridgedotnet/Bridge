using System;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1914 - {0}")]
    public class Bridge1914
    {
        [Test]
        public void TestCase()
        {
            var list = new List<int>();
            list.Add(1);

            var readOnlyList = new System.Collections.ObjectModel.ReadOnlyCollection<int>(list);
            list.Add(2);

            Assert.True(list.Count == readOnlyList.Count);
        }
    }
}