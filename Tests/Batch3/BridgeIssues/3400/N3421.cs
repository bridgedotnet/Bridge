using System;
using Bridge.Test.NUnit;
#if RELEASE
using static Bridge.ClientTest.Batch3.BridgeIssues.Bridge3421.Logger;
#endif
#if SOMETHING_NOT_DEFINED
using static Bridge.ClientTest.Batch3.BridgeIssues.Bridge3421.NoLogger;
#else
using static Bridge.ClientTest.Batch3.BridgeIssues.Bridge3421.NoLoggerElse;
#endif

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in ensuring Bridge works with 'using static'
    /// when it is excluded/included at compile-time by a macro.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3421 - {0}")]
    public class Bridge3421
    {
        /// <summary>
        /// This class will be statically used if RELEASE compile-time constant
        /// is set.
        /// </summary>
        public static class Logger
        {
            public static int Log(string msg)
            {
                return msg.Length;
            }
        }

        /// <summary>
        /// This class will be statically used if Bridge incorrectly triggers
        /// code for undefined compile-time constants.
        /// </summary>
        public static class NoLogger
        {
            public static bool NoLog()
            {
                return false;
            }
        }

        /// <summary>
        /// This class will be statically used if Bridge averted code enclosed
        /// by an undefined/false compile-time constant.
        /// </summary>
        public static class NoLoggerElse
        {
            public static bool NoLog()
            {
                return true;
            }
        }

        /// <summary>
        /// To test just go ahead and call the statically used methods and
        /// check the result.
        /// </summary>
        [Test(ExpectedCount = 2)]
        public static void TestUsingStaticWithDirective()
        {
#if RELEASE
            Assert.AreEqual(7, Log("Success"), "The Log function is enabled via a compile-time constant.");
#endif
            Assert.True(NoLog(), "The expected using static was triggered for unset compile-time constat.");
        }
    }
}