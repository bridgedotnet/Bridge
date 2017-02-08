// The source is licensed to the .NET Foundation under the MIT license:
// https://github.com/dotnet/corefx/blob/master/src/System.Runtime.Extensions/tests/System/Convert.ToBase64CharArray.cs
// https://github.com/dotnet/corefx/blob/master/LICENSE

using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.ConvertTests
{
    [Category(Constants.MODULE_CONVERT)]
    [TestFixture(TestNameFormat = "Convert.ToBase64CharArray - {0}")]
    public class ConvertToBase64CharArrayTests
    {
        [Test]
        public static void ValidOffsetIn()
        {
            string input = "test";
            byte[] inputBytes = Convert.FromBase64String(input);
            char[] resultChars = new char[4];
            int fillCharCount = Convert.ToBase64CharArray(inputBytes, 0, inputBytes.Length - 1, resultChars, 0);
            Assert.AreEqual(input.Length, fillCharCount);
        }

        [Test]
        public static void ShortInputArray()
        {
            // Regression test for bug where a short input array caused an exception to be thrown
            byte[] inputBuffer = new byte[] { (byte)'a', (byte)'b', (byte)'c' };
            char[] ouputBuffer = new char[4];
            var c1 = Convert.ToBase64CharArray(inputBuffer, 0, 3, ouputBuffer, 0);
            Assert.AreEqual(4, c1);

            var c2 = Convert.ToBase64CharArray(inputBuffer, 0, 2, ouputBuffer, 0);
            Assert.AreEqual(4, c2);
        }

        [Test]
        public static void ValidOffsetOut()
        {
            // Regression test for bug where offsetOut parameter was ignored
            char[] outputBuffer = "........".ToCharArray();
            byte[] inputBuffer = new byte[6];
            for (int i = 0; i < inputBuffer.Length; inputBuffer[i] = (byte)i++) ;

            // Convert the first half of the byte array, write to the first half of the char array
            int c = Convert.ToBase64CharArray(inputBuffer, 0, 3, outputBuffer, 0);
            Assert.AreEqual(4, c);
            Assert.AreEqual("AAEC....", new string(outputBuffer));

            // Convert the second half of the byte array, write to the second half of the char array
            c = Convert.ToBase64CharArray(inputBuffer, 3, 3, outputBuffer, 4);
            Assert.AreEqual(4, c);
            Assert.AreEqual("AAECAwQF", new string(outputBuffer));
        }

        [Test]
        public static void InvalidInputBuffer()
        {
            Assert.Throws(() => Convert.ToBase64CharArray(null, 0, 1, new char[1], 0), err => err is ArgumentNullException);
        }

        [Test]
        public static void InvalidOutputBuffer()
        {
            char[] inputChars = "test".ToCharArray();
            byte[] inputBytes = Convert.FromBase64CharArray(inputChars, 0, inputChars.Length);
            Assert.Throws(() => Convert.ToBase64CharArray(inputBytes, 0, inputBytes.Length, null, 0), err => err is ArgumentNullException);
        }

        [Test]
        public static void InvalidOffsetIn()
        {
            char[] inputChars = "test".ToCharArray();
            byte[] inputBytes = Convert.FromBase64CharArray(inputChars, 0, inputChars.Length);
            char[] outputBuffer = new char[4];

            Assert.Throws(() => Convert.ToBase64CharArray(inputBytes, -1, inputBytes.Length, outputBuffer, 0), err => err is ArgumentOutOfRangeException);
            Assert.Throws(() => Convert.ToBase64CharArray(inputBytes, inputBytes.Length, inputBytes.Length, outputBuffer, 0), err => err is ArgumentOutOfRangeException);
        }

        [Test]
        public static void InvalidOffsetOut()
        {
            char[] inputChars = "test".ToCharArray();
            byte[] inputBytes = Convert.FromBase64CharArray(inputChars, 0, inputChars.Length);
            char[] outputBuffer = new char[4];

            Assert.Throws(() => Convert.ToBase64CharArray(inputBytes, 0, inputBytes.Length, outputBuffer, -1), err => err is ArgumentOutOfRangeException);
            Assert.Throws(() => Convert.ToBase64CharArray(inputBytes, 0, inputBytes.Length, outputBuffer, 1), err => err is ArgumentOutOfRangeException);
        }

        [Test]
        public static void InvalidInputLength()
        {
            char[] inputChars = "test".ToCharArray();
            byte[] inputBytes = Convert.FromBase64CharArray(inputChars, 0, inputChars.Length);
            char[] outputBuffer = new char[4];

            Assert.Throws(() => Convert.ToBase64CharArray(inputBytes, 0, -1, outputBuffer, 0), err => err is ArgumentOutOfRangeException);
            Assert.Throws(() => Convert.ToBase64CharArray(inputBytes, 0, inputBytes.Length + 1, outputBuffer, 0), err => err is ArgumentOutOfRangeException);
            Assert.Throws(() => Convert.ToBase64CharArray(inputBytes, 1, inputBytes.Length, outputBuffer, 0), err => err is ArgumentOutOfRangeException);
        }
    }
}