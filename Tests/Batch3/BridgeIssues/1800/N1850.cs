using System;
using System.Collections;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1850 - {0}")]
    public class Bridge1850
    {
        public sealed class LookupOptions<T> : IEnumerable<KeyValuePair<T, string>>
        {
            public IEnumerator<KeyValuePair<T, string>> GetEnumerator()
            {
                return null;
            }

            IEnumerator IEnumerable.GetEnumerator()
            {
                return null;
            }
        }

        [Test]
        public void TestImplicitInterface()
        {
            var l = new LookupOptions<int>();
            IEnumerable<KeyValuePair<int, string>> i = l;
            Assert.Null(l.GetEnumerator());
            Assert.Null(i.GetEnumerator());
        }
    }
}