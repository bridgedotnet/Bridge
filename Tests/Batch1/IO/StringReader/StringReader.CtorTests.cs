// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace Bridge.ClientTest.IO
{
    [Category(Constants.MODULE_IO)]
    [TestFixture(TestNameFormat = "ReaderTests - {0}")]
    public class ReaderTests
    {
        [Test]
        public static void StringReaderWithNullString()
        {
            Assert.Throws<ArgumentNullException>(() => new StringReader(null));
        }

        [Test]
        public static void StringReaderWithEmptyString()
        {
            // [] Check vanilla construction
            //-----------------------------------------------------------
            StringReader sr = new StringReader(string.Empty);
            Assert.AreEqual(string.Empty, sr.ReadToEnd());
        }

        [Test]
        public static void StringReaderWithGenericString()
        {
            // [] Another vanilla construction
            //-----------------------------------------------------------

            StringReader sr = new StringReader("Hello\0World");
            Assert.AreEqual("Hello\0World", sr.ReadToEnd());
        }

        [Test]
        public static void ReadEmptyString()
        {
            StringReader sr = new StringReader(string.Empty);
            Assert.AreEqual(-1, sr.Read());

        }

        [Test]
        public static void ReadString()
        {
            string str1 = "Hello\0\t\v   \\ World";
            StringReader sr = new StringReader(str1);
            for (int i = 0; i < str1.Length; i++)
            {
                Assert.AreEqual((int)str1[i], sr.Read());
            }
        }

        [Test]
        public static void ReadLine()
        {
            string str1 = "Hello\0\t\v   \\ World";
            string str2 = str1 + Environment.NewLine + str1;

            using (StringReader sr = new StringReader(str1))
            {
                Assert.AreEqual(str1, sr.ReadLine());
            }
            using (StringReader sr = new StringReader(str2))
            {
                Assert.AreEqual(str1, sr.ReadLine());
                Assert.AreEqual(str1, sr.ReadLine());
            }
        }

        [Test]
        public static void ReadPseudoRandomString()
        {
            string str1 = string.Empty;
            Random r = new Random(-55);
            for (int i = 0; i < 5000; i++)
                str1 += (char)r.Next(0, 255);

            StringReader sr = new StringReader(str1);
            for (int i = 0; i < str1.Length; i++)
            {
                Assert.AreEqual((int)str1[i], sr.Read());
            }
        }

        [Test]
        public static void PeekEmptyString()
        {
            StringReader sr = new StringReader(string.Empty);
            Assert.AreEqual(-1, sr.Peek());

        }

        [Test]
        public static void PeekString()
        {
            string str1 = "Hello\0\t\v   \\ World";
            StringReader sr = new StringReader(str1);
            for (int i = 0; i < str1.Length; i++)
            {
                int test = sr.Peek();
                sr.Read();
                Assert.AreEqual((int)str1[i], test);
            }

        }

        [Test]
        public static void PeekPseudoRandomString()
        {
            string str1 = string.Empty;
            Random r = new Random(-55);
            for (int i = 0; i < 5000; i++)
                str1 += (char)r.Next(0, 255);

            StringReader sr = new StringReader(str1);
            for (int i = 0; i < str1.Length; i++)
            {
                int test = sr.Peek();
                sr.Read();
                Assert.AreEqual((int)str1[i], test);
            }
        }

        [Test]
        public static void ReadToEndEmptyString()
        {
            /////////////////////////  START TESTS ////////////////////////////
            ///////////////////////////////////////////////////////////////////

            StringReader sr;

            sr = new StringReader(string.Empty);
            Assert.AreEqual(string.Empty, sr.ReadToEnd());

        }

        [Test]
        public static void ReadToEndString()
        {
            string str1 = "Hello\0\t\v   \\ World";
            StringReader sr = new StringReader(str1);
            Assert.AreEqual(str1, sr.ReadToEnd());
        }

        [Test]
        public static void ReadToEndPseudoRandom()
        {
            // [] Try with large random strings
            //-----------------------------------------------------------
            string str1 = string.Empty;
            Random r = new Random(-55);
            for (int i = 0; i < 10000; i++)
                str1 += (char)r.Next(0, 255);

            StringReader sr = new StringReader(str1);
            Assert.AreEqual(str1, sr.ReadToEnd());
        }

        [Test]
        public static void Closed_DisposedExceptions()
        {
            StringReader sr = new StringReader("abcdefg");
            sr.Close();
            ValidateDisposedExceptions(sr);
        }

        [Test]
        public static void Disposed_DisposedExceptions()
        {
            StringReader sr = new StringReader("abcdefg");
            sr.Dispose();
            ValidateDisposedExceptions(sr);
        }

        private static void ValidateDisposedExceptions(StringReader sr)
        {
            Assert.Throws<Exception>(() => { sr.Peek(); });
            Assert.Throws<Exception>(() => { sr.Read(); });
            Assert.Throws<Exception>(() => { sr.Read(new char[10], 0, 1); });
        }
    }
}
