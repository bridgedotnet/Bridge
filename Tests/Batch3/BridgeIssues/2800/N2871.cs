using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2871 - {0}")]
    public class Bridge2871
    {
        public struct Vector3
        {
            public float x;
            public float y;
            public float z;
        }

        public class Transform
        {
            public Vector3 localPosition
            {
                get
                {
                    return new Vector3();
                }
            }
        }

        [Test]
        public static void TestCloneOnAssignment()
        {
            Vector3[] vector3s = new Vector3[3];
            Vector3 vec = new Vector3();
            vector3s[0] = vector3s[1] = vec;
            vector3s[0].x = 1;
            Assert.AreNotEqual(vector3s[0].x, vector3s[1].x);

            Transform transform = new Transform();
            vector3s[0] = vector3s[1] = vector3s[2] = transform.localPosition;
            vector3s[0].x = 1;
            Assert.AreNotEqual(vector3s[0].x, vector3s[1].x);
            Assert.AreNotEqual(vector3s[0].x, vector3s[2].x);

            vector3s[1].x = 2;
            Assert.AreNotEqual(vector3s[1].x, vector3s[2].x);
        }
    }
}