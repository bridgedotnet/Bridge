using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2703 - {0}")]
    public class Bridge2703
    {
        public class Vector1
        {
            public double X;
            public double Y;

            public Vector1(double x, double y)
            {
                X = x;
                Y = y;
            }

            public override int GetHashCode()
            {
                return X.GetHashCode() + Y.GetHashCode();
            }
        }

        public class Vector2
        {
            public float X;
            public float Y;

            public Vector2(float x, float y)
            {
                X = x;
                Y = y;
            }

            public override int GetHashCode()
            {
                return X.GetHashCode() + Y.GetHashCode();
            }
        }

        [Test]
        public static void TestDoubleGetHashCode()
        {
            double d = 0.0d;

            Assert.AreEqual(0, d.GetHashCode());
            object o1 = d.GetHashCode();
            Assert.True(o1 is int);

            var v1 = new Vector1(0, 0);
            var v2 = new Vector1(1, 2);

            Assert.AreEqual(0, v1.GetHashCode());
            Assert.AreEqual(v2.GetHashCode(), v2.GetHashCode());
            Assert.AreNotEqual(0, v2.GetHashCode());
            object o2 = v2.GetHashCode();
            Assert.True(o2 is int);
        }

        [Test]
        public static void TestSingleGetHashCode()
        {
            float d = 0.0f;

            Assert.AreEqual(0, d.GetHashCode());
            object o1 = d.GetHashCode();
            Assert.True(o1 is int);

            var v1 = new Vector2(0f, 0f);
            var v2 = new Vector2(1f, 2f);

            Assert.AreEqual(0, v1.GetHashCode());
            Assert.AreEqual(v2.GetHashCode(), v2.GetHashCode());
            Assert.AreNotEqual(0, v2.GetHashCode());
            object o2 = v2.GetHashCode();
            Assert.True(o2 is int);
        }
    }
}