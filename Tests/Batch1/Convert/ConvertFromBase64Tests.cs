// The source is licensed to the .NET Foundation under the MIT license:
// https://github.com/dotnet/corefx/blob/master/src/System.Runtime.Extensions/tests/System/Convert.FromBase64.cs
// https://github.com/dotnet/corefx/blob/master/LICENSE

using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.ConvertTests
{
    [Category(Constants.MODULE_CONVERT)]
    [TestFixture(TestNameFormat = "Convert.FromBase64 - {0}")]
    public class ConvertFromBase64Tests
    {
        [Test]
        public static void Roundtrip1()
        {
            string input = "test";
            Verify(input, result =>
            {
                // See Freed, N. and N. Borenstein, RFC2045, Section 6.8 for a description of why this check is necessary.
                Assert.AreEqual(result.Length, 3);

                uint triplet = (uint)((result[0] << 16) | (result[1] << 8) | result[2]);
                Assert.AreEqual(triplet >> 18, 45); // 't'
                Assert.AreEqual((triplet << 14) >> 26, 30); // 'e'
                Assert.AreEqual((triplet << 20) >> 26, 44); // 's'
                Assert.AreEqual((triplet << 26) >> 26, 45); // 't'

                Assert.AreEqual(Convert.ToBase64String(result), input);
            });
        }

        [Test]
        public static void Roundtrip2()
        {
            VerifyRoundtrip("AAAA");
        }

        [Test]
        public static void Roundtrip3()
        {
            VerifyRoundtrip("AAAAAAAA");
        }

        [Test]
        public static void EmptyString()
        {
            string input = string.Empty;
            Verify(input, result =>
            {
                Assert.NotNull(result);
                Assert.AreEqual(0, result.Length);
            });
        }

        [Test]
        public static void ZeroLengthArray()
        {
            string input = "test";
            char[] inputChars = input.ToCharArray();
            byte[] result = Convert.FromBase64CharArray(inputChars, 0, 0);

            Assert.NotNull(result);
            Assert.AreEqual(0, result.Length);
        }

        [Test]
        public static void RoundtripWithPadding1()
        {
            VerifyRoundtrip("abc=");
        }

        [Test]
        public static void RoundtripWithPadding2()
        {
            VerifyRoundtrip("BQYHCA==");
        }

        [Test]
        public static void PartialRoundtripWithPadding1()
        {
            string input = "ab==";
            Verify(input, result =>
            {
                Assert.AreEqual(1, result.Length);

                string roundtrippedString = Convert.ToBase64String(result);
                Assert.AreNotEqual(roundtrippedString, input);
                Assert.AreEqual(input[0], roundtrippedString[0]);
            });
        }

        [Test]
        public static void PartialRoundtripWithPadding2()
        {
            string input = "789=";
            Verify(input, result =>
            {
                Assert.AreEqual(2, result.Length);

                string roundtrippedString = Convert.ToBase64String(result);
                Assert.AreNotEqual(roundtrippedString, input);
                Assert.AreEqual(input[0], roundtrippedString[0]);
                Assert.AreEqual(input[1], roundtrippedString[1]);
            });
        }

        [Test]
        public static void ParseWithWhitespace()
        {
            VerifyRoundtrip("abc= \t \r\n =", "bQ==");
        }

        [Test]
        public static void RoundtripWithWhitespace2()
        {
            string input = "abc=  \t\n\t\r ";
            VerifyRoundtrip(input, input.Trim());
        }

        [Test]
        public static void RoundtripWithWhitespace3()
        {
            string input = "abc \r\n\t   =  \t\n\t\r ";
            VerifyRoundtrip(input, "abc=");
        }

        [Test]
        public static void RoundtripWithWhitespace4()
        {
            string expected = "test";
            string input = expected.Insert(1, new string(' ', 17)).PadLeft(31, ' ').PadRight(12, ' ');
            VerifyRoundtrip(input, expected, expectedLengthBytes: 3);
        }

        [Test]
        public static void RoundtripWithWhitespace5()
        {
            string expected = "test";
            string input = expected.Insert(2, new string('\t', 9)).PadLeft(37, '\t').PadRight(8, '\t');
            VerifyRoundtrip(input, expected, expectedLengthBytes: 3);
        }

        [Test]
        public static void RoundtripWithWhitespace6()
        {
            string expected = "test";
            string input = expected.Insert(2, new string('\r', 13)).PadLeft(7, '\r').PadRight(29, '\r');
            VerifyRoundtrip(input, expected, expectedLengthBytes: 3);
        }

        [Test]
        public static void RoundtripWithWhitespace7()
        {
            string expected = "test";
            string input = expected.Insert(2, new string('\n', 23)).PadLeft(17, '\n').PadRight(34, '\n');
            VerifyRoundtrip(input, expected, expectedLengthBytes: 3);
        }

        [Test]
        public static void RoundtripLargeString()
        {
            string input = new string('a', 10000);
            VerifyRoundtrip(input, input);
        }

        [Test]
        public static void InvalidOffset()
        {
            string input = "test";
            char[] inputChars = input.ToCharArray();

            Assert.Throws(() => Convert.FromBase64CharArray(inputChars, -1, inputChars.Length), err => err is ArgumentOutOfRangeException);
            Assert.Throws(() => Convert.FromBase64CharArray(inputChars, inputChars.Length, inputChars.Length), err => err is ArgumentOutOfRangeException);
        }

        [Test]
        public static void InvalidLength()
        {
            string input = "test";
            char[] inputChars = input.ToCharArray();

            Assert.Throws(() => Convert.FromBase64CharArray(inputChars, 0, -1), err => err is ArgumentOutOfRangeException);
            Assert.Throws(() => Convert.FromBase64CharArray(inputChars, 0, inputChars.Length + 1), err => err is ArgumentOutOfRangeException);
            Assert.Throws(() => Convert.FromBase64CharArray(inputChars, 1, inputChars.Length), err => err is ArgumentOutOfRangeException);
        }

        [Test]
        public static void InvalidInput()
        {
            Assert.Throws(() => Convert.FromBase64CharArray(null, 0, 3), err => err is ArgumentNullException);

            // Input must be at least 4 characters long
            VerifyInvalidInput("No");

            // Length of input must be a multiple of 4
            VerifyInvalidInput("NoMore");

            // Input must not contain invalid characters
            VerifyInvalidInput("2-34");

            // Input must not contain 3 or more padding characters in a row
            VerifyInvalidInput("a===");
            VerifyInvalidInput("abc=====");
            VerifyInvalidInput("a===\r  \t  \n");

            // Input must not contain padding characters in the middle of the string
            VerifyInvalidInput("No=n");
            VerifyInvalidInput("abcdabc=abcd");
            VerifyInvalidInput("abcdab==abcd");
            VerifyInvalidInput("abcda===abcd");
            VerifyInvalidInput("abcd====abcd");
        }

        [Test]
        public static void InvalidCharactersInInput()
        {
            ushort[] invalidChars = { 30122, 62608, 13917, 19498, 2473, 40845, 35988, 2281, 51246, 36372 };

            foreach (char ch in invalidChars)
            {
                var builder = "abc";
                var addingStr = new string(new[] { ch });
                builder.Insert(1, addingStr);
                VerifyInvalidInput(builder);
            }
        }

        [Test]
        public void FromBase64StringWorks()
        {
            Assert.AreEqual(GetTestArr(), Convert.FromBase64String("AAAABAAACAAADAAAEAAAFAAAGAAAHAAAIAAAJAAAKAAALAAAMAAANAAAOAAAPAAAQAAARAAASAAATAAAUAAAVAAAWAAAXAAAYAAAZAAAaAAAbAAAcAAAdAAAeAAAfAAAgAAAhAAAiAAAjAAAkAAAlAAAmAAAnAAAoAAApAAAqAAArAAAsAAAtAAAuAAAvAAAwAAAxAAAyAAAzAAA0AAA1AAA2AAA3AAA4AAA5AAA6AAA7AAA8AAA9AAA+AAA/AAA"));
            Assert.AreEqual(new byte[] { 1, 2, 3 }, Convert.FromBase64String("AQID"));
            Assert.AreEqual(new byte[] { 1, 2, 3, 4 }, Convert.FromBase64String("AQIDBA=="));
            Assert.AreEqual(new byte[] { 1, 2, 3, 4, 5 }, Convert.FromBase64String("AQIDBAU="));
            Assert.AreEqual(new byte[] { 1, 2, 3, 4, 5, 6 }, Convert.FromBase64String("AQIDBAUG"));
            Assert.AreEqual(new byte[] { 1, 2, 3, 4, 5 }, Convert.FromBase64String("AQIDBAU="));
            Assert.AreEqual(new byte[] { 1, 2, 3 }, Convert.FromBase64String("A Q\nI\tD"));
            Assert.AreEqual(new byte[0], Convert.FromBase64String(""));
        }

        private static void VerifyRoundtrip(string input, string expected = null, int? expectedLengthBytes = null)
        {
            if (expected == null)
            {
                expected = input;
            }

            Verify(input, result =>
            {
                if (expectedLengthBytes.HasValue)
                {
                    Assert.AreEqual(expectedLengthBytes.Value, result.Length);
                }
                Assert.AreEqual(expected, Convert.ToBase64String(result));
                Assert.AreEqual(expected, Convert.ToBase64String(result, 0, result.Length));
            });
        }

        private static void VerifyInvalidInput(string input)
        {
            char[] inputChars = input.ToCharArray();

            Assert.Throws(() => Convert.FromBase64CharArray(inputChars, 0, inputChars.Length), err => err is FormatException);
            Assert.Throws(() => Convert.FromBase64String(input), err => err is FormatException);
        }

        private static void Verify(string input, Action<byte[]> action = null)
        {
            if (action != null)
            {
                action(Convert.FromBase64CharArray(input.ToCharArray(), 0, input.Length));
                action(Convert.FromBase64String(input));
            }
        }
        private byte[] GetTestArr()
        {
            var result = new byte[64 * 3];
            for (int i = 0; i < 64; i++)
            {
                result[i * 3] = (byte)(i << 2);
                result[i * 3 + 1] = 0;
                result[i * 3 + 2] = 0;
            }
            return result;
        }

    }
}