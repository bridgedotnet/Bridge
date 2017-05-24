using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2703 - {0}")]
    public class Bridge2703
    {
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
            var v1 = new Vector2(0f, 0f);
            var v2 = new Vector2(1f, 2f);
            
            Assert.AreEqual(0, v1.GetHashCode());
            Assert.AreEqual(v2.GetHashCode(), v2.GetHashCode());
            object o = v2.GetHashCode();
            Assert.True(o is int);
        }
    }
}