// The source is licensed to the .NET Foundation under the MIT license:
// https://github.com/dotnet/corefx/blob/master/src/System.Runtime.Extensions/tests/System/Convert.ToBase64String.cs
// https://github.com/dotnet/corefx/blob/master/LICENSE

using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.ConvertTests
{
    [Category(Constants.MODULE_CONVERT)]
    [TestFixture(TestNameFormat = "Convert.ToBase64String - {0}")]
    public class ConvertToBase64StringTests
    {
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

        [Test]
        public static void KnownByteSequence()
        {
            var inputBytes = new byte[4];
            for (int i = 0; i < 4; i++)
                inputBytes[i] = (byte)(i + 5);

            // The sequence of bits for this byte array is
            // 00000101000001100000011100001000
            // Encoding adds 16 bits of trailing bits to make this a multiple of 24 bits.
            // |        +         +         +         +
            // 000001010000011000000111000010000000000000000000
            // which is, (Interesting, how do we distinguish between '=' and 'A'?)
            // 000001 010000 011000 000111 000010 000000 000000 000000
            // B      Q      Y      H      C      A      =      =

            Assert.AreEqual("BQYHCA==", Convert.ToBase64String(inputBytes));
        }

        [Test]
        public static void ZeroLength()
        {
            byte[] inputBytes = Convert.FromBase64String("test");
            Assert.AreEqual(string.Empty, Convert.ToBase64String(inputBytes, 0, 0));
        }

        [Test]
        public static void InvalidInputBuffer()
        {
            Assert.Throws(() => Convert.ToBase64String(null), err => err is ArgumentNullException);
            Assert.Throws(() => Convert.ToBase64String(null, 0, 0), err => err is ArgumentNullException);
        }

        [Test]
        public static void InvalidOffset()
        {
            byte[] inputBytes = Convert.FromBase64String("test");

            Assert.Throws(() => Convert.ToBase64String(inputBytes, -1, inputBytes.Length), err => err is ArgumentOutOfRangeException);
            Assert.Throws(() => Convert.ToBase64String(inputBytes, inputBytes.Length, inputBytes.Length), err => err is ArgumentOutOfRangeException);
        }

        [Test]
        public static void InvalidLength()
        {
            byte[] inputBytes = Convert.FromBase64String("test");

            Assert.Throws(() => Convert.ToBase64String(inputBytes, 0, -1), err => err is ArgumentOutOfRangeException);
            Assert.Throws(() => Convert.ToBase64String(inputBytes, 0, inputBytes.Length + 1), err => err is ArgumentOutOfRangeException);
            Assert.Throws(() => Convert.ToBase64String(inputBytes, 1, inputBytes.Length), err => err is ArgumentOutOfRangeException);
        }

        [Test]
        public void ToBase64StringWithOnlyArrayWorks()
        {
            var testArr = GetTestArr();

            Assert.AreEqual("AAAABAAACAAADAAAEAAAFAAAGAAAHAAAIAAAJAAAKAAALAAAMAAANAAAOAAAPAAAQAAARAAASAAATAAAUAAAVAAAWAAAXAAAYAAAZAAAaAAAbAAAcAAAdAAAeAAAfAAAgAAAhAAAiAAAjAAAkAAAlAAAmAAAnAAAoAAApAAAqAAArAAAsAAAtAAAuAAAvAAAwAAAxAAAyAAAzAAA0AAA1AAA2AAA3AAA4AAA5AAA6AAA7AAA8AAA9AAA+AAA/AAA", Convert.ToBase64String(testArr));
            Assert.AreEqual("AQID", Convert.ToBase64String(new byte[] { 1, 2, 3 }));
            Assert.AreEqual("AQIDBA==", Convert.ToBase64String(new byte[] { 1, 2, 3, 4 }));
            Assert.AreEqual("AQIDBAU=", Convert.ToBase64String(new byte[] { 1, 2, 3, 4, 5 }));
            Assert.AreEqual("AQIDBAUG", Convert.ToBase64String(new byte[] { 1, 2, 3, 4, 5, 6 }));
            Assert.AreEqual("", Convert.ToBase64String(new byte[0]));
        }

        [Test]
        public void ToBase64StringWithArrayAndFormattingOptionsWorks()
        {
            var testArr = GetTestArr();
            Assert.AreEqual("AAAABAAACAAADAAAEAAAFAAAGAAAHAAAIAAAJAAAKAAALAAAMAAANAAAOAAAPAAAQAAARAAASAAATAAAUAAAVAAAWAAAXAAAYAAAZAAAaAAAbAAAcAAAdAAAeAAAfAAAgAAAhAAAiAAAjAAAkAAAlAAAmAAAnAAAoAAApAAAqAAArAAAsAAAtAAAuAAAvAAAwAAAxAAAyAAAzAAA0AAA1AAA2AAA3AAA4AAA5AAA6AAA7AAA8AAA9AAA+AAA/AAA", Convert.ToBase64String(testArr, Base64FormattingOptions.None));
            Assert.AreEqual("AAAABAAACAAADAAAEAAAFAAAGAAAHAAAIAAAJAAAKAAALAAAMAAANAAAOAAAPAAAQAAARAAASAAA\r\n" +
                            "TAAAUAAAVAAAWAAAXAAAYAAAZAAAaAAAbAAAcAAAdAAAeAAAfAAAgAAAhAAAiAAAjAAAkAAAlAAA\r\n" +
                            "mAAAnAAAoAAApAAAqAAArAAAsAAAtAAAuAAAvAAAwAAAxAAAyAAAzAAA0AAA1AAA2AAA3AAA4AAA\r\n" +
                            "5AAA6AAA7AAA8AAA9AAA+AAA/AAA", Convert.ToBase64String(testArr, Base64FormattingOptions.InsertLineBreaks));
        }

        [Test]
        public void ToBase64StringWithArrayAndOffsetAndLengthWorks()
        {
            var arr = GetTestArr();
            Assert.AreEqual("AACIAACMAACQAACUAACYAACcAACgAACkAACoAACsAACwAAC0AAC4AAC8AADAAADEAADIAADMAADQAADUAADYAADcAADgAADkAADoAADsAADwAAD0AAD4AAD8", Convert.ToBase64String(arr, 100, 90));
        }

        [Test]
        public void ToBase64StringWithArrayAndOffsetAndLengthAndFormattingOptionsWorks()
        {
            var arr = GetTestArr();
            Assert.AreEqual("AACIAACMAACQAACUAACYAACcAACgAACkAACoAACsAACwAAC0AAC4AAC8AADAAADEAADIAADMAADQAADUAADYAADcAADgAADkAADoAADsAADwAAD0AAD4AAD8", Convert.ToBase64String(arr, 100, 90, Base64FormattingOptions.None));
            Assert.AreEqual("AACIAACMAACQAACUAACYAACcAACgAACkAACoAACsAACwAAC0AAC4AAC8AADAAADEAADIAADMAADQ\r\n" +
                            "AADUAADYAADcAADgAADkAADoAADsAADwAAD0AAD4AAD8", Convert.ToBase64String(arr, 100, 90, Base64FormattingOptions.InsertLineBreaks));
            Assert.AreEqual("AABgAABkAABoAABsAABwAAB0AAB4AAB8AACAAACEAACIAACMAACQAACUAACYAACcAACgAACkAACo\r\n" +
                            "AACsAACwAAC0AAC4AAC8AADAAADEAADIAADMAADQAADUAADYAADcAADgAADkAADoAADsAADwAAD0", Convert.ToBase64String(arr, 70, 114, Base64FormattingOptions.InsertLineBreaks));
        }
    }
}