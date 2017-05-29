using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2722 - {0}")]
    public class Bridge2722
    {
        public enum Mode
        {
            None,
            A,
            B,
            C
        }

        [Test]
        public static void TestEnumParsing()
        {
            const string section = null;

            Mode mode;
            if (Enum.TryParse(section, true, out mode) == false)
            {
                mode = Mode.A;
            }

            Assert.True(Mode.A == mode);
        }
    }
}