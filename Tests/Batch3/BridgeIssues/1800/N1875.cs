using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1875 - {0}")]
    public class Bridge1875
    {
        public class ClassA
        {
            public long Id { get; set; }
        }

        [Test]
        public void TestDictionaryWithLongVariableAsKey()
        {
            ClassA a = new ClassA();
            a.Id = 1;

            Dictionary<long, int> x = new Dictionary<long, int>();
            x[a.Id] = 2;
            int y;
            x.TryGetValue(a.Id, out y);
            Assert.AreEqual(2, y);
            Assert.True(x.ContainsKey(a.Id));

            x.Clear();
            x.Set(a.Id, 2);
            x.TryGetValue(a.Id, out y);
            Assert.AreEqual(2, y);
            Assert.True(x.ContainsKey(a.Id));
            Assert.AreEqual(2, x.Get(a.Id));
            Assert.AreEqual(2, x[a.Id]);
        }
    }
}