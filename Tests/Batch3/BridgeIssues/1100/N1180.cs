using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1180 - {0}")]
    public class Bridge1180
    {
        [Test]
        public static void TestStructClone()
        {
            List<Vector2> list = new List<Vector2>();
            list.Add(new Vector2() { x = 0.0f, y = 1.0f });

            Vector2 vec = list[0];
            vec.x = 5.0f;

            Assert.AreEqual(0, list[0].x);
            Assert.AreEqual(5, vec.x);
        }

        public struct Vector2
        {
            public float x;
            public float y;
        }
    }
}