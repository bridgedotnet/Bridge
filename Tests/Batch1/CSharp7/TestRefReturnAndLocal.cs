using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.CSharp7
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Ref return and ref local - {0}")]
    public class TestRefReturnAndLocal
    {
        class Score
        {
            public int value = 5;

            public ref int Get()
            {
                return ref this.value;
            }
        }

        private static void change(int value)
        {
            value = 30;
        }

        [Test]
        public static void TestBasic()
        {
            var score = new Score();

            ref int highscore = ref score.Get();
            int anotherScore = score.Get();

            Assert.AreEqual(5, score.value);
            Assert.AreEqual(5, highscore);
            Assert.AreEqual(5, anotherScore);

            highscore = 10;
            anotherScore = 20;

            change(highscore);

            Assert.AreEqual(10, score.value);
            Assert.AreEqual(10, highscore);
            Assert.AreEqual(20, anotherScore);
        }

        private static ref int ThirdElement(int[] array)
        {
            return ref array[2];
        }

        [Test]
        public static void TestBasic2()
        {
            int[] values = { 1, 2, 3, 4, 5 };

            Assert.AreEqual("1,2,3,4,5", string.Join(",", values));

            ref int value = ref ThirdElement(values);
            value = 10;

            Assert.AreEqual("1,2,10,4,5", string.Join(",", values));
        }

        [Test]
        public static void TestBasic3()
        {
            int i = 5;

            ref int j = ref i;

            j = 10;

            Assert.AreEqual(10, i);
            Assert.AreEqual(10, j);
        }

        private static ref int Max(ref int first, ref int second)
        {
            if (first > second)
                return ref first;

            return ref second;
        }


        [Test]
        public static void TestBasic4()
        {
            int i = 5;
            int j = 10;

            Assert.AreEqual(5, i);
            Assert.AreEqual(10, j);

            Max(ref i, ref j) = 20;

            Assert.AreEqual(5, i);
            Assert.AreEqual(20, j);
        }
    }
}