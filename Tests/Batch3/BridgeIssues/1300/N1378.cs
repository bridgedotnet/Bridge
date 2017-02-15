using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1378 - {0}")]
    public class Bridge1378
    {
        private class IntWrapper
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

            public static IntWrapper operator +(IntWrapper a, IntWrapper b)
            {
                return new IntWrapper(a.value + b.value);
            }

            public static IntWrapper operator -(IntWrapper a, IntWrapper b)
            {
                return new IntWrapper(a.value - b.value);
            }
        }

        public static float x
        {
            get; set;
        }

        [Test]
        public static void TestAssigmentWithMinusOperator()
        {
            x = 1;

            float a = 4;
            float b = 2;
            x -= a - b;

            Assert.AreEqual(-1, x);
        }

        [Test]
        public static void TestAssigmentWithPlusOperator()
        {
            x = 1;

            float a = 4;
            float b = 2;
            x += a + b;

            Assert.AreEqual(7, x);
        }

        [Test]
        public static void TestAssigmentWithOverloadMinusOperator()
        {
            IntWrapper @int = new IntWrapper(1);
            @int -= @int -= new IntWrapper(7);
            Assert.AreEqual(7, @int.ToInt());
        }

        [Test]
        public static void TestAssigmentWithOverloadPlusOperator()
        {
            IntWrapper @int = new IntWrapper(3);
            @int += @int += new IntWrapper(1);
            Assert.AreEqual(7, @int.ToInt());
        }

        [Test]
        public static void TestAssigmentWithConditionalPlusOperator()
        {
            int tabSize = 4;
            int tabLength1 = 0;
            string text = "        There is two tabs.";

            for (int i = 0; i < text.Length; i++)
            {
                tabLength1 += (text[i] == '\t') ? tabSize : 1;
            }

            Assert.AreEqual(26, tabLength1);
        }

        [Test]
        public static void TestAssigmentWithConditionalMinusOperator()
        {
            int tabSize = 5;
            int tabLength1 = 1;
            string text = "        There is two tabs.";

            for (int i = 0; i < text.Length; i++)
            {
                tabLength1 -= (text[i] == '\t') ? tabSize : 1;
            }

            Assert.AreEqual(-25, tabLength1);
        }
    }
}