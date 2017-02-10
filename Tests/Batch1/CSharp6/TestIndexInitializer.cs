using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.CSharp6
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Index initializer - {0}")]
    public class TestIndexInitializer
    {
        [Test]
        public static void TestBasic()
        {
            var bitinator = new BitFlipinator
            {
                Value = 255,
                [4] = 0
            };

            Assert.AreEqual(239, bitinator.Value);

            var numbers = new Dictionary<int, string>
            {
                [7] = "seven",
                [9] = "nine",
                [13] = "thirteen"
            };
            Assert.AreEqual("seven", numbers[7]);
            Assert.AreEqual("nine", numbers[9]);
            Assert.AreEqual("thirteen", numbers[13]);

            numbers = new Dictionary<int, string>(10)
            {
                [7] = "seven",
                [9] = "nine",
                [13] = "thirteen"
            };
            Assert.AreEqual("seven", numbers[7]);
            Assert.AreEqual("nine", numbers[9]);
            Assert.AreEqual("thirteen", numbers[13]);

            numbers = new Dictionary<int, string>()
            {
                [7] = "seven",
                [9] = "nine",
                [13] = "thirteen"
            };
            Assert.AreEqual("seven", numbers[7]);
            Assert.AreEqual("nine", numbers[9]);
            Assert.AreEqual("thirteen", numbers[13]);
        }

        public class BitFlipinator
        {
            public int Value { get; set; }

            public int this[int bit]
            {
                set { Set(bit, value); }
            }

            public void Set(int bit, int value)
            {
                if (value < 0 || value > 1) throw new ArgumentOutOfRangeException();
                if (bit < 1 || bit > 32) throw new ArgumentOutOfRangeException();

                var filterBit = 0x01 << bit;
                Value = (value == 1) ? Value | filterBit
                    : Value & ~filterBit;
            }
        }
    }
}