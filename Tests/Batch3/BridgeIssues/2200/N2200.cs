using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2200 - {0}")]
    public class Bridge2200
    {
        [Test]
        public static void TestSequence()
        {
            var seq = new Sequence<int, string>(1, "one");
            Assert.AreEqual(1, seq.Item1);
            Assert.AreEqual("one", seq.Item2);

            seq.Item1 = 2;
            seq.Item2 = "two";
            Assert.AreEqual(2, seq.Item1);
            Assert.AreEqual("two", seq.Item2);

            seq.SetItemUnsafe(0, 3);
            seq.SetItemUnsafe(1, "three");
            Assert.AreEqual(3, seq.Item1);
            Assert.AreEqual("three", seq.Item2);

            Assert.True(seq.Is<Array>());
            Assert.AreEqual(2, seq.As<Array>().Length);
            Assert.AreEqual(3, seq.As<Array>()[0]);
            Assert.AreEqual("three", seq.As<Array>()[1]);
        }
    }
}