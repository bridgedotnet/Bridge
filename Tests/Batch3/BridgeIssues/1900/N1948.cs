using System;
using System.Collections;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1948 - {0}")]
    public class Bridge1948
    {
        private class AddObj : IEnumerable<KeyValuePair<string, object>>
        {
            public Dictionary<string, object> dic;
            public bool isGeneric;
            public AddObj() : base()
            {
                this.dic = new Dictionary<string, object>();
            }

            public void Add(string key, object value)
            {
                this.dic.Add(key, value);
            }

            IEnumerator<KeyValuePair<string, object>> IEnumerable<KeyValuePair<string, object>>.GetEnumerator()
            {
                isGeneric = true;
                return this.dic.GetEnumerator();
            }

            public IEnumerator GetEnumerator()
            {
                isGeneric = false;
                return this.dic.GetEnumerator();
            }
        }

        [Test]
        public void TestCase()
        {
            foreach (var item in new object[] { new { } })
            {
                if (false)
#pragma warning disable 162
                    continue;
#pragma warning restore 162

                var newJObj1 = new AddObj { { "name", item } };

                foreach (var jObj in newJObj1)
                {
                }
                Assert.AreEqual(false, newJObj1.isGeneric);
                Assert.AreEqual(1, newJObj1.dic.Count);

                IEnumerable<KeyValuePair<string, object>>  newJObj2 = new AddObj { { "name", 1 } };
                foreach (var jObj in newJObj2)
                {
                }
                Assert.AreEqual(true, ((AddObj)newJObj2).isGeneric);
                Assert.AreEqual(1, ((AddObj)newJObj2).dic.Count);
            }
        }
    }
}