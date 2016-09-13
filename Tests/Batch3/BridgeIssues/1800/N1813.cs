using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1813 - {0}")]
    public class Bridge1813
    {
        private List<object> list = new List<object>(); 
        public void Add(params object[] obj)
        {
            this.list.AddRange(obj);
        }

        public static void instance_callback(object a = null)
        {
        }

        [Test]
        public void TestAddStaticMethod()
        {
            Bridge1813 callbacks = new Bridge1813();
            callbacks.Add(((System.Action<object>)(instance_callback)));
            Assert.AreEqual(1, callbacks.list.Count);
            Assert.True((System.Action<object>)callbacks.list[0] == instance_callback);
        }
    }
}