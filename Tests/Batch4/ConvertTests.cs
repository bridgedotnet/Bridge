using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch4
{
    [TestFixture(TestNameFormat = "ConvertTests - {0}")]
    public class ConvertTests
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
    }
}