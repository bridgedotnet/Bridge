using System;
using System.Linq;
using System.Reflection;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2940 - {0}")]
    public class Bridge2940
    {
        [Reflectable]
        public enum A
        {
            A,
            B,
            C
        }

        [Reflectable]
        public class C
        {
            public static A Item
            {
                get; set;
            } = A.B;

            public static A GetItem()
            {
                return A.C;
            }
        }

        [Test]
        public static void TestReflectionBoxing()
        {
            var str = string.Join(", ",
                Array.ConvertAll(typeof(A).GetFields(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static),
                    v => v.GetValue(null).ToString()));

            Assert.AreEqual("A, B, C", str);
            Assert.AreEqual("B", typeof(C).GetProperties(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static).First().GetValue(null).ToString());
            Assert.AreEqual("B", typeof(C).GetProperties(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static).First().GetMethod.Invoke(null).ToString());
            Assert.AreEqual("C", typeof(C).GetMethods(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static).First().Invoke(null).ToString());
        }
    }
}