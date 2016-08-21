using Bridge.Test;

using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1480 - {0}")]
    public class Bridge1480
    {
        public class IntWrapper
        {
            public int value;

            public int ToInt()
            {
                return value;
            }

            public IntWrapper(int value)
            {
                this.value = value;
            }

            public static IntWrapper operator ++(IntWrapper a)
            {
                return new IntWrapper(a.value + 1);
            }
        }

        [Test]
        public void TestOverloadUnaryOperator()
        {
            IntWrapper @int = new IntWrapper(3);
            @int++;
            Assert.AreEqual(4, @int.ToInt(), "4");
            Assert.AreEqual(5, (++@int).ToInt(), "++4");
            Assert.AreEqual(5, (@int++).ToInt(), "5++");
            Assert.AreEqual(6, (@int).ToInt(), "6");
        }
    }
}