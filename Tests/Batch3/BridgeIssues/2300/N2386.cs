using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2386 - {0}")]
    public class Bridge2386
    {
        interface IChangeBoxedPoint
        {
            void Change(int x, int y);
        }

        struct Point : IChangeBoxedPoint
        {
            private int m_x, m_y;

            public Point(int x, int y)
            {
                m_x = x;
                m_y = y;
            }

            public void Change(int x, int y)
            {
                m_x = x;
                m_y = y;
            }

            public override string ToString()
            {
                return $"({m_x}, {m_y})";
            }
        }

        [Test]
        public static void TestStructBoxingOperations()
        {
            Point p = new Point(1, 1);
            Assert.AreEqual("(1, 1)", p.ToString());

            p.Change(2, 2);
            Assert.AreEqual("(2, 2)", p.ToString());

            object o = p;
            Assert.AreEqual("(2, 2)", o.ToString());

            ((Point)o).Change(3, 3);
            Assert.AreEqual("(2, 2)", o.ToString());

            ((IChangeBoxedPoint)p).Change(4, 4);
            Assert.AreEqual("(2, 2)", p.ToString());

            ((IChangeBoxedPoint)o).Change(5, 5);
            Assert.AreEqual("(5, 5)", o.ToString());
        }
    }
}