using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The tests here consists in ensuring given switch-case and local
    /// function C#7 statement syntaxes are supported by Bridge.
    /// The tests here have been based in a test project (pkHex-Bridge2) which
    /// explored the issues.
    /// </summary>
    [TestFixture(TestNameFormat = "#3567 - {0}")]
    public class Bridge3567
    {
        /// <summary>
        /// Tests with switch-case-when.
        /// </summary>
        [Test(ExpectedCount = 6)]
        public static void TestSwitchCase()
        {
            var int0 = 6;
            var int1 = 25;

            switch (int1)
            {
                case 25 when int0 == 6: // base test
                    Assert.True(true, "Switch-case with when is accepted and it matches.");
                    break;
            }

            switch (int0)
            {
                case 06 when int1 == 0xFE:
                    Assert.Fail("Should not have matched this switch-case statement.");
                    break;
                case 06 when int1 == 0x19:
                    Assert.True(true, "Hex to int and zero-padded integer constant supported in switch-case + when.");
                    break;
            }

            switch (int1)
            {
                case 26 when int0 >= 6: // base test
                    Assert.Fail("Switch-case matches when it shouldn't.");
                    break;
                case 25 when int0 >= 7: // base test
                    Assert.Fail("Switch-case matches when it shouldn't.");
                    break;
                case 25 when int0 >= 6: // base test
                    Assert.True(true, "Switch-case with 'when' is accepted and it matches.");
                    break;
            }

            switch (int1)
            {
                case 26 when int0 >= 6: // base test
                    Assert.Fail("Switch-case matches when it shouldn't.");
                    break;
                case 25 when int0 >= 7: // base test
                    Assert.Fail("Switch-case matches when it shouldn't.");
                    break;
                case 28 when int0 >= 6: // base test
                    Assert.Fail("Switch-case matches when it shouldn't.");
                    break;
                default:
                    Assert.True(true, "Switch-case with 'when' works with the 'default' case when nothing matches.");
                    break;
            }

            switch (int1)
            {
                case 26 when int0 >= 6: // base test
                    Assert.Fail("Switch-case matches when it shouldn't.");
                    break;
                case 25 when int0 >= 7: // base test
                    Assert.Fail("Switch-case matches when it shouldn't.");
                    break;
                case 28 when int0 >= 6: // base test
                    Assert.Fail("Switch-case matches when it shouldn't.");
                    break;
            }
            Assert.True(true, "Switch-case matches nothing and moves ahead when nothing matches.");

            switch (int1)
            {
                case 25 when int0 == 6 && (int1 + int0) < 10:
                    Assert.Fail("Switch-case matches when it shouldn't.");
                    break;
                case 25 when int0 == 6 && (int1 + int0) > 10:
                    Assert.True(true, "Switch-case with when is accepted when involving nested when-expression.");
                    break;
            }
        }

        /// <summary>
        /// Tests with Local Functions.
        /// </summary>
        [Test(ExpectedCount = 2)]
        public static void TestLocalFunction()
        {
            var list = new int[] { 1, 2, 3 };
            var strings = new string[] { "one", "two", "three" };

            int testProbe(int t)
            {
                return t + 1;
            }

            var matches = list.Select(testProbe).ToArray();

            Assert.True(matches.Length == 3 && matches[0] == 2 && matches[1] == 3 && matches[2] == 4, "Linq-select-triggered local function works.");

            var stringPool = new List<StringNum>
            {
                new StringNum { Text = "two", Value = 1 },
                new StringNum { Text = "three", Value = 2 },
                new StringNum { Text = "one", Value = 0 },
                new StringNum { Text = "not_one", Value = 5 },
                new StringNum { Text = "oneself", Value = 0 },
                new StringNum { Text = "twofold", Value = 1 }
            };

            TestLocalFnSort(stringPool, strings);
        }

        public class StringNum
        {
            public string Text { get; set; }
            public int Value { get; set; }
        }

        public static void TestLocalFnSort(List<StringNum> stringPool, string[] strings)
        {
            var list = new int[] { 1, 2, 3 };
            var max = strings.Length - 1;

            string strProbe(int s) => s > max ? string.Empty : strings[s];

            var ordered = stringPool.OrderBy(p => p.Value > max)
                .ThenBy(p => strProbe(p.Value));

            Assert.AreEqual("one,oneself,three,two,twofold,not_one",
                String.Join(",", ordered.Select(o => o.Text)),
                "Local function called from ordered lambda expression works.");
        }
    }
}