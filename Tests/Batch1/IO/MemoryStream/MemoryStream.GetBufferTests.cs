// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

using Bridge.Test.NUnit;
using System;
using System.IO;

namespace Bridge.ClientTest.IO
{
    [Category(Constants.MODULE_IO)]
    [TestFixture(TestNameFormat = "MemoryStream_GetBufferTests - {0}")]
    public class MemoryStream_GetBufferTests
    {
        [Test]
        public void MemoryStream_GetBuffer_Length()
        {
            MemoryStream ms = new MemoryStream();
            byte[] buffer = ms.GetBuffer();
            Assert.AreEqual(0, buffer.Length);
        }

        [Test]
        public void MemoryStream_GetBuffer_NonExposable()
        {
            MemoryStream ms = new MemoryStream(new byte[100]);
            Assert.Throws<Exception>(() => ms.GetBuffer());
        }

        [Test]
        public void MemoryStream_GetBuffer_Exposable()
        {
            MemoryStream ms = new MemoryStream(new byte[500], 0, 100, true, true);
            byte[] buffer = ms.GetBuffer();
            Assert.AreEqual(500, buffer.Length);
        }

        [Test]
        public void MemoryStream_GetBuffer()
        {
            byte[] testdata = new byte[100];
            new Random(45135).NextBytes(testdata);
            MemoryStream ms = new MemoryStream(100);
            byte[] buffer = ms.GetBuffer();
            Assert.AreEqual(100, buffer.Length);

            ms.Write(testdata, 0, 100);
            ms.Write(testdata, 0, 100);
            Assert.True(200 == ms.Length);
            buffer = ms.GetBuffer();
            Assert.AreEqual(256, buffer.Length); // Minimun size after writing
        }
    }
}
