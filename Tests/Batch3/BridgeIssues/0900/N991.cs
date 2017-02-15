using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#991]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#991 - {0}")]
    public class Bridge991
    {
        public static int Prop
        {
            get;
            set;
        }

        [Test(ExpectedCount = 14)]
        public static void TestMultiplyAssignment()
        {
            var dict = new Dictionary<int, int>();
            int i = 0;

            dict[0] = i = 1;
            Assert.AreEqual(dict[0], 1);
            Assert.AreEqual(i, 1);

            i = dict[0] = 2;
            Assert.AreEqual(dict[0], 2);
            Assert.AreEqual(i, 2);

            dict[0] = Prop = 3;
            Assert.AreEqual(dict[0], 3);
            Assert.AreEqual(Prop, 3);

            Prop = dict[0] = 4;
            Assert.AreEqual(dict[0], 4);
            Assert.AreEqual(Prop, 4);

            dict[0] = Bridge991.Prop = 5;
            Assert.AreEqual(dict[0], 5);
            Assert.AreEqual(Bridge991.Prop, 5);

            Bridge991.Prop = dict[0] = 6;
            Assert.AreEqual(dict[0], 6);
            Assert.AreEqual(Bridge991.Prop, 6);

            dict[0] = dict[1] = 7;
            Assert.AreEqual(dict[0], 7);
            Assert.AreEqual(dict[1], 7);
        }
    }
}