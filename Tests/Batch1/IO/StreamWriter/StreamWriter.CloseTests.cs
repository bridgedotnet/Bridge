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
    [TestFixture(TestNameFormat = "CloseTests - {0}")]
    public class CloseTests
    {
        protected virtual Stream CreateStream()
        {
            return new MemoryStream();
        }

        [Test]
        public void AfterDisposeThrows()
        {
            StreamWriter sw2;

            // [] Calling methods after disposing the stream should throw
            //-----------------------------------------------------------------
            sw2 = new StreamWriter(CreateStream());
            sw2.Dispose();
            ValidateDisposedExceptions(sw2);
        }

        [Test]
        public void AfterCloseThrows()
        {
            StreamWriter sw2;

            // [] Calling methods after closing the stream should throw
            //-----------------------------------------------------------------
            sw2 = new StreamWriter(CreateStream());
            sw2.Close();
            ValidateDisposedExceptions(sw2);
        }

        private void ValidateDisposedExceptions(StreamWriter sw)
        {
            Assert.Null(sw.BaseStream);
            Assert.Throws<Exception>(() => sw.Write('A'));
            Assert.Throws<Exception>(() => sw.Write("hello"));
            Assert.Throws<Exception>(() => sw.Flush());
            Assert.Throws<Exception>(() => sw.AutoFlush = true);
        }

        [Test]
        public void CloseCausesFlush()
        {
            StreamWriter sw2;
            Stream memstr2;

            // [] Check that flush updates the underlying stream
            //-----------------------------------------------------------------
            memstr2 = CreateStream();
            sw2 = new StreamWriter(memstr2);

            var strTemp = "HelloWorld";
            sw2.Write(strTemp);
            Assert.True(0 == memstr2.Length);

            sw2.Flush();
            Assert.True(strTemp.Length == memstr2.Length);
        }

        [Test]
        public void CantFlushAfterDispose()
        {
            // [] Flushing disposed writer should throw
            //-----------------------------------------------------------------

            Stream memstr2 = CreateStream();
            StreamWriter sw2 = new StreamWriter(memstr2);

            sw2.Dispose();
            Assert.Throws<Exception>(() => sw2.Flush());
        }

        [Test]
        public void CantFlushAfterClose()
        {
            // [] Flushing closed writer should throw
            //-----------------------------------------------------------------

            Stream memstr2 = CreateStream();
            StreamWriter sw2 = new StreamWriter(memstr2);

            sw2.Close();
            Assert.Throws<Exception>(() => sw2.Flush());
        }
    }
}
