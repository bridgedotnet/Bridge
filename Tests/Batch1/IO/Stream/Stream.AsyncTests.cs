// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Bridge.ClientTest.IO
{
    [Category(Constants.MODULE_IO)]
    [TestFixture(TestNameFormat = "StreamTests - {0}")]
    public class StreamTests
    {
        protected virtual Stream CreateStream() => new MemoryStream();

        [Test]
        public void CopyToAsyncTest()
        {
            byte[] data = Enumerable.Range(0, 1000).Select(i => (byte)(i % 256)).ToArray();

            Stream ms = CreateStream();
            ms.Write(data, 0, data.Length);
            ms.Position = 0;

            var ms2 = new MemoryStream();
            ms.CopyTo(ms2);

            Assert.AreEqual(data, ms2.ToArray());
        }
    }
}
