using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2992 - {0}")]
    public class Bridge2992
    {
        public struct Vector2
        {
            private static Vector2 zeroVector = new Vector2(0f, 0f);

            public float X;
            public float Y;

            public Vector2(float x, float y)
            {
                X = x;
                Y = y;
            }

            public static float DistanceSquared(Vector2 value1, Vector2 value2)
            {
                return (value1.X - value2.X) * (value1.X - value2.X) + (value1.Y - value2.Y) * (value1.Y - value2.Y);
            }

            public void Normalize(bool setNewValue = false)
            {
                if (setNewValue)
                {
                    SetNewValue(ref this);
                }
                else
                {
                    Normalize(ref this, out this);
                }
                
            }

            public static void Normalize(ref Vector2 value, out Vector2 result)
            {
                float factor = DistanceSquared(value, zeroVector);
                factor = 1f / (float)Math.Sqrt(factor);
                result.X = value.X * factor;
                result.Y = value.Y * factor;
            }

            public static void SetNewValue(ref Vector2 value)
            {
                value = new Vector2(7,7);
            }
        }

        [Test]
        public static void TestRefThis()
        {
            var q = new Vector2(10, 10);
            var x = q.X;
            var y = q.Y;

            q.Normalize();
            Assert.AreNotEqual(x, q.X);
            Assert.AreNotEqual(y, q.Y);

            q.Normalize(true);
            Assert.AreEqual(7, q.X);
            Assert.AreEqual(7, q.Y);
        }
    }
}