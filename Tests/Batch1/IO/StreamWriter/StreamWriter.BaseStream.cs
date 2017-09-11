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
    [TestFixture(TestNameFormat = "BaseStream - {0}")]
    public class BaseStream
    {
        [Test]
        public static void GetBaseStream()
        {
            // [] Get an underlying memorystream
            MemoryStream memstr2 = new MemoryStream();
            StreamWriter sw = new StreamWriter(memstr2);
            Assert.AreStrictEqual(sw.BaseStream, memstr2);
        }
    }
}
