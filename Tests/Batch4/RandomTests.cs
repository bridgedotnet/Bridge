using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch4
{
    [TestFixture(TestNameFormat = "RandomTests - {0}")]
    public class RandomTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            var rand = new Random();
            Assert.AreEqual("System.Random", typeof(Random).FullName);
            Assert.True(typeof(Random).IsClass);
            Assert.True(rand is Random);
        }

#pragma warning disable 219

        [Test(ExpectedCount = 0)]
        public void DefaultConstructorWorks()
        {
            var rand = new Random();
        }

        [Test(ExpectedCount = 0)]
        public void SeedConstructorWorks()
        {
            var rand = new Random(854);
        }

#pragma warning restore 219

        [Test]
        public void NextWorks()
        {
            var rand = new Random();
            for (var i = 0; i < 10; i++)
            {
                int randomNumber = rand.Next();
                Assert.True(randomNumber >= 0, randomNumber + " is greater or equal to 0");
                Assert.True(randomNumber <= int.MaxValue, randomNumber + " is less than or equal to int.MaxValue");
            }
        }

        [Test]
        public void NextWithMaxWorks()
        {
            var rand = new Random();
            for (var i = 0; i < 10; i++)
            {
                int randomNumber = rand.Next(5);
                Assert.True(randomNumber >= 0, randomNumber + " is greater or equal to 0");
                Assert.True(randomNumber < 5, randomNumber + " is smaller than 5");
            }
        }

        [Test]
        public void NextWithMinAndMaxWorks()
        {
            var rand = new Random();
            for (var i = 0; i < 10; i++)
            {
                int randomNumber = rand.Next(5, 10);
                Assert.True(randomNumber >= 5, randomNumber + " is greater or equal to 5");
                Assert.True(randomNumber < 10, randomNumber + " is smaller than 10");
            }
        }

        [Test]
        public void NextDoubleWorks()
        {
            var rand = new Random();
            for (var i = 0; i < 10; i++)
            {
                double randomNumber = rand.NextDouble();
                Assert.True(randomNumber >= 0.0, randomNumber + " is greater or equal to 0.0");
                Assert.True(randomNumber < 1.0, randomNumber + " is smaller than 1.0");
            }
        }

        [Test]
        public void NextBytesWorks()
        {
            var rand = new Random((int)(1362952481370 % 2147483647));
            var bytes = new byte[150];
            rand.NextBytes(bytes);
            for (var i = 0; i < bytes.Length; i++)
            {
                Assert.True(bytes[i] >= byte.MinValue, "a: " + bytes[i] + " is greater or equal to " + byte.MinValue);
                Assert.True(bytes[i] <= byte.MaxValue, "a: " + bytes[i] + " is smaller than or equal to " + byte.MaxValue);
            }
        }
    }
}