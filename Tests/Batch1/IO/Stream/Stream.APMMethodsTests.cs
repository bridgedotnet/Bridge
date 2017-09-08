// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.IO;

namespace Bridge.ClientTest.IO
{
    [Category(Constants.MODULE_IO)]
    [TestFixture(TestNameFormat = "StreamAPMTests - {0}")]
    public class StreamAPMTests
    {
        protected virtual Stream CreateStream()
        {
            return new MemoryStream();
        }

        public void EndCallback(IAsyncResult ar)
        {
        }

        [Test(ExpectedCount = 0)]
        public void BeginEndReadTest()
        {
            Stream stream = CreateStream();
            IAsyncResult result = stream.BeginRead(new byte[1], 0, 1, new AsyncCallback(EndCallback), new object());
            stream.EndRead(result);
        }

        [Test(ExpectedCount = 0)]
        public void BeginEndWriteTest()
        {
            Stream stream = CreateStream();
            IAsyncResult result = stream.BeginWrite(new byte[1], 0, 1, new AsyncCallback(EndCallback), new object());
            stream.EndWrite(result);
        }
    }
}
