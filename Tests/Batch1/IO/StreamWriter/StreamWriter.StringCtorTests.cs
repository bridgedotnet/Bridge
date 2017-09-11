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
    [TestFixture(TestNameFormat = "StreamWriter_StringCtorTests - {0}")]
    public class StreamWriter_StringCtorTests
    {
        [Test]
        public static void NullArgs_ThrowsArgumentNullException()
        {
            Assert.Throws<NotSupportedException>(() => new StreamWriter((string)null));
            Assert.Throws<NotSupportedException>(() => new StreamWriter((string)null, true));
            Assert.Throws<NotSupportedException>(() => new StreamWriter((string)null, true, null));
            Assert.Throws<NotSupportedException>(() => new StreamWriter((string)null, true, null, -1));
            Assert.Throws<NotSupportedException>(() => new StreamWriter("path", true, null));
            Assert.Throws<NotSupportedException>(() => new StreamWriter("path", true, null, -1));
            Assert.Throws<NotSupportedException>(() => new StreamWriter("", true, null));
            Assert.Throws<NotSupportedException>(() => new StreamWriter("", true, null, -1));
        }

        [Test]
        public static void EmptyPath_ThrowsArgumentException()
        {
            // No argument name for the empty path exception
            Assert.Throws<NotSupportedException>(() => new StreamWriter(""));
            Assert.Throws<NotSupportedException>(() => new StreamWriter("", true));
            Assert.Throws<NotSupportedException>(() => new StreamWriter("", true, Encoding.UTF8));
            Assert.Throws<NotSupportedException>(() => new StreamWriter("", true, Encoding.UTF8, -1));
        }

        [Test]
        public static void NegativeBufferSize_ThrowsArgumentOutOfRangeException()
        {
            Assert.Throws<NotSupportedException>(() => new StreamWriter("path", false, Encoding.UTF8, -1));
            Assert.Throws<NotSupportedException>(() => new StreamWriter("path", true, Encoding.UTF8, 0));
        }
    }
}
