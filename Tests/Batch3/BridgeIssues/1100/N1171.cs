using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1171 - {0}")]
    public class Bridge1171
    {
        [Test]
        public static void TestLinqEnumerableInList()
        {
            ObjectA[] result = new ObjectA[2];
            result[0] = new ObjectA { FieldA = null };
            result[1] = new ObjectA { FieldA = 2 };

            var query = result.Where(x => x.FieldA.HasValue).GroupBy(x => x.FieldA.GetValueOrDefault());
            Assert.AreEqual(1, query.Count());

            foreach (var key in query)
            {
                Assert.AreEqual(1, new List<ObjectA>(key).Count);
            }
        }

        public class ObjectA
        {
            public int? FieldA { get; set; }
        }
    }
}