using Bridge.Test.NUnit;

using System;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_RANDOM)]
    [TestFixture(TestNameFormat = "Random - {0}")]
    public class RandomTests
    {
        private const int ITERATIONS = 100;

        [Test]
        public static void Unseeded()
        {
            Random r = new Random();

            for (int i = 0; i < ITERATIONS; i++)
            {
                int x = r.Next(20);
                Assert.True(x >= 0 && x < 20, x + " under 20 - Next(maxValue)");
            }

            for (int i = 0; i < ITERATIONS; i++)
            {
                int x = r.Next(20, 30);
                Assert.True(x >= 20 && x < 30, x + " between 20 and 30 - Next(minValue, maxValue)");
            }

            for (int i = 0; i < ITERATIONS; i++)
            {
                double x = r.NextDouble();
                Assert.True(x >= 0.0 && x < 1.0, x + " between 0.0 and 1.0  - NextDouble()");
            }
        }

        [Test]
        public static void Seeded()
        {
            int seed = (int)DateTime.Now.Ticks;

            Random r1 = new Random(seed);
            Random r2 = new Random(seed);

            byte[] b1 = new byte[ITERATIONS];
            r1.NextBytes(b1);

            byte[] b2 = new byte[ITERATIONS];
            r2.NextBytes(b2);

            for (int i = 0; i < b1.Length; i++)
            {
                Assert.AreEqual(b1[i], b2[i], "NextBytes()");
            }

            for (int i = 0; i < b1.Length; i++)
            {
                int x1 = r1.Next();
                int x2 = r2.Next();

                Assert.AreEqual(x1, x2, "Next()");
            }
        }

        [Test]
        public static void Sample()
        {
            SubRandom r = new SubRandom();

            for (int i = 0; i < ITERATIONS; i++)
            {
                double d = r.ExposeSample();
                Assert.True(d >= 0.0 && d < 1.0, d + " between 0.0 and 1.0  - ExposeSample()");
            }
        }

        private class SubRandom : Random
        {
            public double ExposeSample()
            {
                return Sample();
            }
        }
    }
}