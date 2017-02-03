using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1410 - {0}")]
    public class Bridge1410
    {
        public int this[int v]
        {
            get
            {
                return 5;
            }
            set
            {
            }
        }

        public static float X
        {
            set
            {
            }
        }

        public static int Prop1
        {
            get
            {
                return 5;
            }
            set
            {
            }
        }

        public static float Method1()
        {
            return X = 5.0f;
        }

        public static int Method2(int i)
        {
            return i;
        }

        [Test]
        public static void TestSetterOnly()
        {
            Assert.AreEqual(5, Method1());
        }

        [Test]
        public static void TestIndexer()
        {
            var app = new Bridge1410();
            Assert.AreEqual(2, app[0] = 2);
            Assert.AreEqual(2, Method2(app[0] /= 2));
            Assert.AreEqual(6, Method2(app[0] += 1));
        }

        [Test]
        public static void TestAssigmentWithOp()
        {
            string result = "test_";
            string itm = "item";
            Func<string> handler = () => result += itm;

            var str = handler();
            Assert.AreEqual(str, result);
            Assert.AreEqual("test_item", str);

            Assert.AreEqual(2, Prop1 = 2);
            Assert.AreEqual(2, Method2(Prop1 /= 2));
            Assert.AreEqual(6, Method2(Prop1 += 1));
        }
    }
}