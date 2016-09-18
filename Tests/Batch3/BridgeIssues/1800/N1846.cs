using System;
using System.Collections;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1846 - {0}")]
    public class Bridge1846
    {
        public class Obj
        {
            public string s;
            public static implicit operator Obj(string str)
            {
                return new Obj() { s = str };
            }
        }

        [Test]
        public void TestCase()
        {
            var arr = new string[] { "a", "b" };
            int i = 0;
            foreach (Obj o in arr)
            {
                Assert.AreEqual(arr[i++], o.s);
            }
        }
    }
}