using System;
using System.Linq;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2156 - {0}")]
    public class Bridge2156
    {
        [Test]
        public static void TestLinqIntersect()
        {
            double[] numbers1 = { 2.0, 2.0, 2.1, 2.2, 2.3, 2.3, 2.4, 2.5 };
            double[] numbers2 = { 2.2, 2.2, 2.4, 2.4, 2.7 };
            var numbers = numbers1.Intersect(numbers2).ToArray();

            Assert.AreEqual(2, numbers.Length);
            Assert.AreEqual(2.2, numbers[0]);
            Assert.AreEqual(2.4, numbers[1]);

            double[] numbers3 = { 2.2 };
            double[] numbers4 = { 2.4 };
            var count3 = 0;
            foreach (var item in numbers3.Intersect(numbers4))
            {
                Assert.Fail("numbers3.Intersect(numbers4) should be empty");
            }
            Assert.AreEqual(0, count3, "numbers3.Intersect(numbers4) should be empty");

            double[] numbers5 = { 2.0 };
            double[] numbers6 = { 2.0 };
            var count5 = 0;
            foreach (var item in numbers5.Intersect(numbers6))
            {
                Assert.AreEqual(2.0, item);
                count5++;
            }
            Assert.AreEqual(1, count5);

            double[] numbers7 = { };
            double[] numbers8 = { 2.0 };
            var count7 = 0;
            foreach (var item in numbers7.Intersect(numbers8))
            {
                Assert.Fail("numbers7.Intersect(numbers8) should be empty");
                count7++;
            }
            Assert.AreEqual(0, count7, "numbers7.Intersect(numbers8) should be empty");

            double[] numbers9 = { 7.0 };
            double[] numbers10 = { };
            var count9 = 0;
            foreach (var item in numbers9.Intersect(numbers10))
            {
                Assert.Fail("numbers9.Intersect(numbers10) should be empty");
                count9++;
            }
            Assert.AreEqual(0, count9);

            double[] numbers11 = { };
            double[] numbers12 = { };
            var count11 = 0;
            foreach (var item in numbers11.Intersect(numbers12))
            {
                Assert.Fail("numbers11.Intersect(numbers12) should be empty");
            }
            Assert.AreEqual(0, count11, "numbers11.Intersect(numbers12) should be empty");
        }
    }
}