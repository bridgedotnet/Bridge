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
    [TestFixture(TestNameFormat = "FlushTests - {0}")]
    public class FlushTests
    {
        protected virtual Stream CreateStream()
        {
            return new MemoryStream();
        }

        [Test]
        public void AutoFlushSetTrue()
        {
            // [] Set the autoflush to true
            var sw2 = new StreamWriter(CreateStream());
            sw2.AutoFlush = true;
            Assert.True(sw2.AutoFlush);
        }

        [Test]
        public void AutoFlushSetFalse()
        {
            // [] Set autoflush to false
            var sw2 = new StreamWriter(CreateStream());
            sw2.AutoFlush = false;
            Assert.False(sw2.AutoFlush);
        }
    }
}
