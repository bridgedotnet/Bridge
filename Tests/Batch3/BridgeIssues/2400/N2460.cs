using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2460 - {0}")]
    public class N2460
    {
        class Point2D : Sequence<int, int>
        {
            public int X => Item1;
            public int Y => Item2;

            public Point2D(int x, int y)
                : base(x, y)
            {
            }
        }

        [Test]
        public static void TestSequenceInheritance()
        {
            var point = new Point2D(3, 5);

            Assert.True(point is Sequence<int, int>);

            Assert.AreEqual(3, point.X);
            Assert.AreEqual(5, point.Y);
            Assert.AreEqual(3, point.Item1);
            Assert.AreEqual(5, point.Item2);

            var sequence = (Sequence<int, int>) point;
            Assert.AreEqual(3, sequence.Item1);
            Assert.AreEqual(5, sequence.Item2);
        }
    }
}