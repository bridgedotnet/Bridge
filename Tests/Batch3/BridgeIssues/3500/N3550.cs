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

        interface IProbe
        {
            int Value { get; set; }
            string Text { get; set; }
        }

        public class ProbeImplementation : IProbe
        {
            public int Value { get; set; }
            public string Text { get; set; }
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

            object probe = new ProbeImplementation();
            switch (probe)
            {
                case (object)default:
                    Assert.Fail("Class instance object fell in switch-case 'object' cast fallover.");
                    break;
            }
            switch (probe)
            {
                case (ProbeImplementation)default:
                    Assert.Fail("Class instance object fell in switch-case own cast fallover.");
                    break;
            }
            switch (probe)
            {
                case (IProbe)default:
                    Assert.Fail("Class instance object fell in switch-case interface cast fallover.");
                    break;
            }

            var probe1 = new ProbeImplementation();
            switch (probe1)
            {
                case (ProbeImplementation)default:
                    Assert.Fail("Class instance fell in switch-case own cast fallover.");
                    break;
            }

            IProbe probe2 = new ProbeImplementation();
            switch (probe2)
            {
                case (ProbeImplementation)default:
                    Assert.Fail("Class instance cast into its interface fell in switch-case instance cast fallover.");
                    break;
            }
            switch (probe2)
            {
                case (IProbe)default:
                    Assert.Fail("Class instance cast into its interface fell in switch-case own cast fallover.");
                    break;
            }
        }
    }
}