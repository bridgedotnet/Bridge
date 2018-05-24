using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The tests here consists in ensuring the template substitution accepts
    /// the {0} placeholder in some situations elucidated by the issue's
    /// report.
    /// </summary>
    [TestFixture(TestNameFormat = "#3588 - {0}")]
    public class Bridge3588
    {
        [External]
        [Name("Bridge3588.Vec2")]
        public class Vector2
        {
            public float x;
            public float y;

            [Template("new Bridge3588.Vec2({0}, {1})")]
            public extern Vector2(float x, float y);

            [Template("new Bridge3588.Vec3({0}.x, {0}.y, 0)")]
            public extern static implicit operator Vector3(Vector2 source);
        }

        [External]
        [Name("Bridge3588.Vec3")]
        public class Vector3
        {
            public float x;
            public float y;
            public float z;

            [Template("new Bridge3588.Vec3({0}, {1}, {2})")]
            public extern Vector3(float x, float y, float z);

            [Template("new Bridge3588.Vec2({0}.x, {0}.y)")]
            public extern static implicit operator Vector2(Vector3 source);
        }

        public class Utility
        {
            public Vector3 F(Vector3 v)
            {
                // This is how the code should be output to Bridge in JavaScript.
                /*@
                var Bridge3588 = {
                    Vec3: function (x, y, z) {
                        this.x = x;
                        this.y = y;
                        this.z = z;
                    }
                };
                */

                return new Vector3(v.x + 1, v.y + 2, v.z + 3);
            }
        }

        [Test]
        public static void TestOperatorTemplate()
        {
            // This is how the code should be output to Bridge in JavaScript.
            /*@
            var Bridge3588 = {
                Vec2: function (x, y) {
                    this.x = x;
                    this.y = y;
                },

                Vec3: function (x, y, z) {
                    this.x = x;
                    this.y = y;
                    this.z = z;
                }
            };
            */

            var u = new Utility();
            Vector2 v0 = new Vector2(1, 1);
            Vector2 v1 = u.F(v0);

            Assert.True(((object)v1) is Vector2, "Object cast does not lose ancestor type information.");
            Assert.AreEqual(2, v1.x, "Template parameter substitution works as expected for a two-parameter expression.");
            Assert.AreEqual(3, v1.y, "Template parameter substitution works as expected for a three-parameter expression.");
        }
    }
}