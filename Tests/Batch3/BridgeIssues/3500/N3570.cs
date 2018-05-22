using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The tests here consists in ensuring tasks' related Dispose() calls
    /// works.
    /// </summary>
    [TestFixture(TestNameFormat = "#3570 - {0}")]
    public class Bridge3570
    {
        /// <summary>
        /// Just simply instantiate a task and related class then call its
        /// Dispose() method. Following, just check whether the instance is not
        /// null, meaning the code could be run down to that point.
        /// </summary>
        [Test]
        public static void TestIDisposable()
        {
            var tsk = Task.FromResult(true);
            tsk.Dispose();
            Assert.NotNull(tsk, "Task.Dispose() call works.");

            var cts = new CancellationTokenSource();
            cts.Dispose();

            Assert.NotNull(cts, "CancellationTokenSource.Dispose() call works.");

            var ctr = new CancellationTokenRegistration();
            ctr.Dispose();

            Assert.NotNull(ctr, "CancellationTokenRegistration.Dispose() call works.");
        }
    }
}