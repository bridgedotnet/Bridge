using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in checking whether referencing Bridge.Html5's
    /// typed array classes constants won't result in invalid javascript code.
    /// </summary>
    [TestFixture(TestNameFormat = "#3401 - {0}")]
    public class Bridge3401
    {
        /// <summary>
        /// Make simple references to the constants.
        /// </summary>
        [Test]
        public static void TestCustomComparer()
        {
#pragma warning disable CS0183 // The given expression is always of the provided ('short') type
            Assert.True(Float32Array.BYTES_PER_ELEMENT is short, "Could reference Float32Array's bytes per element constant.");
            Assert.True(Float64Array.BYTES_PER_ELEMENT is short, "Could reference Float64Array's bytes per element constant.");
            Assert.True(Int16Array.BYTES_PER_ELEMENT is short, "Could reference Int16Array's bytes per element constant.");
            Assert.True(Int32Array.BYTES_PER_ELEMENT is short, "Could reference Int32Array's bytes per element constant.");
            Assert.True(Int8Array.BYTES_PER_ELEMENT is short, "Could reference Int8Array's bytes per element constant.");
            Assert.True(Uint16Array.BYTES_PER_ELEMENT is short, "Could reference Uint16Array's bytes per element constant.");
            Assert.True(Uint32Array.BYTES_PER_ELEMENT is short, "Could reference Uint32Array's bytes per element constant.");
            Assert.True(Uint8Array.BYTES_PER_ELEMENT is short, "Could reference Uint8Array's bytes per element constant.");
            Assert.True(Uint8ClampedArray.BYTES_PER_ELEMENT is short, "Could reference Uint8ClampedArray's bytes per element constant.");
#pragma warning restore CS0183 // The given expression is always of the provided ('short') type
        }
    }
}