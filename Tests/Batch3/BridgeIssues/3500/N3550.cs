using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The tests here consists in ensuring broken use cases identified and
    /// reported in issue #3550 are usable in Bridge.
    /// </summary>
    [TestFixture(TestNameFormat = "#3550 - {0}")]
    public class Bridge3550
    {
        /// <summary>
        /// The chained switch case involfing 'when' expression.
        /// </summary>
        [Test(ExpectedCount = 1)]
        public static void TestSwitchCaseWhen()
        {
            var probe0 = 744;
            var probe1 = 1;

            switch (probe0)
            {
                case 744 when probe1 == 1:
                case 745 when probe1 == 2:
                    Assert.True(true, "Switch-case-when chained statement works.");
                    break;
            }
        }

        /// <summary>
        /// The typed-default switch case.
        /// </summary>
        [Test(ExpectedCount = 2)]
        public static void TestSwitchCaseTypedDefault()
        {
            object obj = false;

            switch (obj)
            {
                case (bool)default:
                    Assert.True(true, "Typed default switch-case alternative works.");
                    break;
            }

            switch (obj)
            {
                case (int)default:
                    Assert.Fail("Bool object fell in switch-case 'int' fallover.");
                    break;
                case (string)default:
                    Assert.Fail("Bool object fell in switch-case 'string' fallover.");
                    break;
                case (bool)default:
                    Assert.True(true, "Typed default switch-case alternative matches the type when choosing its fallover 'default'.");
                    break;
            }
        }
    }
}