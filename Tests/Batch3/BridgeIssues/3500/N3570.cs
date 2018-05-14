using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3570 - {0}")]
    public class Bridge3570
    {
        [Test]
        public static void TestIDisposable()
        {
            var cts = new CancellationTokenSource();
            cts.Dispose();

            Assert.NotNull(cts);
        }
    }
}