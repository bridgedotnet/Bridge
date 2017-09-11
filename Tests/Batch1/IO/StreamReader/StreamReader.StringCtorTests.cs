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
    [TestFixture(TestNameFormat = "StreamReader_ctorTests - {0}")]
    public class StreamReader_StringCtorTests
    {
        [Test]
        public static void NullArgs_ThrowsArgumentNullException()
        {
            Assert.Throws<ArgumentNullException>(() => new StreamReader((string)null));
            Assert.Throws<ArgumentNullException>(() => new StreamReader((string)null, null));
            Assert.Throws<ArgumentNullException>(() => new StreamReader((string)null, null, true));
            Assert.Throws<ArgumentNullException>(() => new StreamReader((string)null, null, true, -1));
            Assert.Throws<ArgumentNullException>(() => new StreamReader("", null));
            Assert.Throws<ArgumentNullException>(() => new StreamReader("", null, true));
            Assert.Throws<ArgumentNullException>(() => new StreamReader("", null, true, -1));
        }

        [Test]
        public static void EmptyPath_ThrowsArgumentException()
        {
            // No argument name for the empty path exception
            Assert.Throws<ArgumentException>(() => new StreamReader(""));
            Assert.Throws<ArgumentException>(() => new StreamReader("", Encoding.UTF8));
            Assert.Throws<ArgumentException>(() => new StreamReader("", Encoding.UTF8, true));
            Assert.Throws<ArgumentException>(() => new StreamReader("", Encoding.UTF8, true, -1));
        }

        [Test]
        public static void NegativeBufferSize_ThrowsArgumentOutOfRangeException()
        {
            Assert.Throws<ArgumentOutOfRangeException>(() => new StreamReader("path", Encoding.UTF8, true, -1));
            Assert.Throws<ArgumentOutOfRangeException>(() => new StreamReader("path", Encoding.UTF8, true, 0));
        }
    }
}
