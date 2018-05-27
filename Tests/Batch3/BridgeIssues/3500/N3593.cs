using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The tests here consists in verifying the Script.Return method works
    /// in a generic situation.
    /// Notice despite the tests here just check whether it takes over return
    /// values from methods, its intended use is for javascript events which
    /// can be represented in regular C# blocks, which can't handle a 'return'
    /// statement.
    /// </summary>
    [TestFixture(TestNameFormat = "#3593 - {0}")]
    public class Bridge3593
    {
        [Test]
        public static void CheckStringStartsWithString()
        {
            var val1 = "Value";

            Assert.True(val1.StartsWith("V"));
            Assert.True(val1.StartsWith("Va"));
            Assert.True(val1.StartsWith("Val"));
            Assert.True(val1.StartsWith("Valu"));
            Assert.True(val1.StartsWith("Value"));
            Assert.False(val1.StartsWith("v"));
            Assert.False(val1.StartsWith("X"));

            Assert.True(val1.StartsWith("V", StringComparison.CurrentCulture));
            Assert.True(val1.StartsWith("Va", StringComparison.CurrentCulture));
            Assert.True(val1.StartsWith("Val", StringComparison.CurrentCulture));
            Assert.True(val1.StartsWith("Valu", StringComparison.CurrentCulture));
            Assert.True(val1.StartsWith("Value", StringComparison.CurrentCulture));
            Assert.False(val1.StartsWith("v", StringComparison.CurrentCulture));
            Assert.False(val1.StartsWith("X", StringComparison.CurrentCulture));

            Assert.True(val1.StartsWith("v", StringComparison.CurrentCultureIgnoreCase));
            Assert.True(val1.StartsWith("vA", StringComparison.CurrentCultureIgnoreCase));
            Assert.True(val1.StartsWith("vAL", StringComparison.CurrentCultureIgnoreCase));
            Assert.True(val1.StartsWith("vALU", StringComparison.CurrentCultureIgnoreCase));
            Assert.True(val1.StartsWith("vALUE", StringComparison.CurrentCultureIgnoreCase));
            Assert.False(val1.StartsWith("vALUEX", StringComparison.CurrentCultureIgnoreCase));

            Assert.True(val1.StartsWith("V", StringComparison.InvariantCulture));
            Assert.True(val1.StartsWith("Va", StringComparison.InvariantCulture));
            Assert.True(val1.StartsWith("Val", StringComparison.InvariantCulture));
            Assert.True(val1.StartsWith("Valu", StringComparison.InvariantCulture));
            Assert.True(val1.StartsWith("Value", StringComparison.InvariantCulture));
            Assert.False(val1.StartsWith("v", StringComparison.InvariantCulture));
            Assert.False(val1.StartsWith("X", StringComparison.InvariantCulture));

            Assert.True(val1.StartsWith("v", StringComparison.InvariantCultureIgnoreCase));
            Assert.True(val1.StartsWith("vA", StringComparison.InvariantCultureIgnoreCase));
            Assert.True(val1.StartsWith("vAL", StringComparison.InvariantCultureIgnoreCase));
            Assert.True(val1.StartsWith("vALU", StringComparison.InvariantCultureIgnoreCase));
            Assert.True(val1.StartsWith("vALUE", StringComparison.InvariantCultureIgnoreCase));
            Assert.False(val1.StartsWith("vALUEX", StringComparison.InvariantCultureIgnoreCase));

            Assert.True(val1.StartsWith("V", StringComparison.Ordinal));
            Assert.True(val1.StartsWith("Va", StringComparison.Ordinal));
            Assert.True(val1.StartsWith("Val", StringComparison.Ordinal));
            Assert.True(val1.StartsWith("Valu", StringComparison.Ordinal));
            Assert.True(val1.StartsWith("Value", StringComparison.Ordinal));
            Assert.False(val1.StartsWith("v", StringComparison.Ordinal));
            Assert.False(val1.StartsWith("X", StringComparison.Ordinal));

            Assert.True(val1.StartsWith("v", StringComparison.OrdinalIgnoreCase));
            Assert.True(val1.StartsWith("vA", StringComparison.OrdinalIgnoreCase));
            Assert.True(val1.StartsWith("vAL", StringComparison.OrdinalIgnoreCase));
            Assert.True(val1.StartsWith("vALU", StringComparison.OrdinalIgnoreCase));
            Assert.True(val1.StartsWith("vALUE", StringComparison.OrdinalIgnoreCase));
            Assert.False(val1.StartsWith("vALUEX", StringComparison.OrdinalIgnoreCase));

            Assert.True(val1.StartsWith("V"));
            Assert.False(val1.StartsWith("v"));
            Assert.False(val1.StartsWith("X"));
        }

        [Test]
        public static void CheckStringEndsWithString()
        {
            var val1 = "Value";

            Assert.True(val1.EndsWith("e"));
            Assert.True(val1.EndsWith("ue"));
            Assert.True(val1.EndsWith("lue"));
            Assert.True(val1.EndsWith("alue"));
            Assert.True(val1.EndsWith("Value"));
            Assert.False(val1.EndsWith("v"));
            Assert.False(val1.EndsWith("X"));

            Assert.True(val1.EndsWith("e", StringComparison.CurrentCulture));
            Assert.True(val1.EndsWith("ue", StringComparison.CurrentCulture));
            Assert.True(val1.EndsWith("lue", StringComparison.CurrentCulture));
            Assert.True(val1.EndsWith("alue", StringComparison.CurrentCulture));
            Assert.True(val1.EndsWith("Value", StringComparison.CurrentCulture));
            Assert.False(val1.EndsWith("v", StringComparison.CurrentCulture));
            Assert.False(val1.EndsWith("X", StringComparison.CurrentCulture));

            Assert.True(val1.EndsWith("E", StringComparison.CurrentCultureIgnoreCase));
            Assert.True(val1.EndsWith("UE", StringComparison.CurrentCultureIgnoreCase));
            Assert.True(val1.EndsWith("LUE", StringComparison.CurrentCultureIgnoreCase));
            Assert.True(val1.EndsWith("ALUE", StringComparison.CurrentCultureIgnoreCase));
            Assert.True(val1.EndsWith("vALUE", StringComparison.CurrentCultureIgnoreCase));
            Assert.False(val1.EndsWith("vALUEX", StringComparison.CurrentCultureIgnoreCase));

            Assert.True(val1.EndsWith("e", StringComparison.InvariantCulture));
            Assert.True(val1.EndsWith("ue", StringComparison.InvariantCulture));
            Assert.True(val1.EndsWith("lue", StringComparison.InvariantCulture));
            Assert.True(val1.EndsWith("alue", StringComparison.InvariantCulture));
            Assert.True(val1.EndsWith("Value", StringComparison.InvariantCulture));
            Assert.False(val1.EndsWith("v", StringComparison.InvariantCulture));
            Assert.False(val1.EndsWith("X", StringComparison.InvariantCulture));

            Assert.True(val1.EndsWith("E", StringComparison.InvariantCultureIgnoreCase));
            Assert.True(val1.EndsWith("UE", StringComparison.InvariantCultureIgnoreCase));
            Assert.True(val1.EndsWith("LUE", StringComparison.InvariantCultureIgnoreCase));
            Assert.True(val1.EndsWith("ALUE", StringComparison.InvariantCultureIgnoreCase));
            Assert.True(val1.EndsWith("vALUE", StringComparison.InvariantCultureIgnoreCase));
            Assert.False(val1.EndsWith("vALUEX", StringComparison.InvariantCultureIgnoreCase));

            Assert.True(val1.EndsWith("e", StringComparison.Ordinal));
            Assert.True(val1.EndsWith("ue", StringComparison.Ordinal));
            Assert.True(val1.EndsWith("lue", StringComparison.Ordinal));
            Assert.True(val1.EndsWith("alue", StringComparison.Ordinal));
            Assert.True(val1.EndsWith("Value", StringComparison.Ordinal));
            Assert.False(val1.EndsWith("v", StringComparison.Ordinal));
            Assert.False(val1.EndsWith("X", StringComparison.Ordinal));

            Assert.True(val1.EndsWith("E", StringComparison.OrdinalIgnoreCase));
            Assert.True(val1.EndsWith("UE", StringComparison.OrdinalIgnoreCase));
            Assert.True(val1.EndsWith("LUE", StringComparison.OrdinalIgnoreCase));
            Assert.True(val1.EndsWith("ALUE", StringComparison.OrdinalIgnoreCase));
            Assert.True(val1.EndsWith("vALUE", StringComparison.OrdinalIgnoreCase));
            Assert.False(val1.EndsWith("vALUEX", StringComparison.OrdinalIgnoreCase));

            Assert.True(val1.EndsWith("e"));
            Assert.False(val1.EndsWith("v"));
            Assert.False(val1.EndsWith("X"));
        }

        /// <summary>
        /// The tests here were failing because of the initial implementation of
        /// the fix for this issue. Several other tests were failing because of
        /// the broken string comparison, when startsWith/endsWith() were used.
        /// </summary>
        [Test]
        public static void CheckAdditionalBrokenCases()
        {
            var fullString = "System.Collections.Generic.ICollection$1$System.Int32";

            var startChunk = fullString.Substring(0, fullString.Length - 1);
            var endChunk = fullString.Substring(1);

            var firstChar = ' ';
            var lastChar = ' ';

            // Just iterate thru the original string taking one character a
            // time and check if it is equal. Remove the last character, and
            // append a different character and ensure it is different.
            while (startChunk.Length > 0)
            {
                Assert.True(fullString.StartsWith(startChunk), "String '" + fullString + "' starts with '" + startChunk + "'.");

                lastChar = startChunk[startChunk.Length - 1];

                // ensure the character we append is different than the one we just removed.
                lastChar = lastChar == 'x' ? 'y' : 'x';

                startChunk = startChunk.Substring(0, startChunk.Length - 1);

                Assert.False(fullString.StartsWith(startChunk + lastChar), "String '" + fullString + "' does not start with '" + startChunk + lastChar + "'.");
            }

            while (endChunk.Length > 0)
            {
                Assert.True(fullString.EndsWith(endChunk), "String '" + fullString + "' ends with '" + endChunk + "'.");

                firstChar = endChunk[0];

                // ensure the character we append is different than the one we just removed.
                firstChar = firstChar == 'x' ? 'y' : 'x';

                endChunk = endChunk.Substring(1);

                Assert.False(fullString.EndsWith(firstChar + endChunk), "String '" + fullString + "' does not end with '" + firstChar + endChunk + "'.");

            }
        }
    }
}