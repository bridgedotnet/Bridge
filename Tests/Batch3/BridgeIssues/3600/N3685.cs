using Bridge.Test.NUnit;
using System.Collections;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// THis tests whether the System.IList.IsFixed system property returns the
    /// correct result depending on the list being fixed-size or not.
    /// </summary>
    [TestFixture(TestNameFormat = "#3685 - {0}")]
    public class Bridge3685
    {
        /// <summary>
        /// Simply tests a fixed array and a List against its fixed size
        /// property result.
        /// </summary>
        [Test]
        public static void TestIsFixedSize()
        {
            IList arr = new int[10];
            IList list = new List<int>();
            IList ltdList = new List<int>(10);

            Assert.True(arr.IsFixedSize, "IList.IsFixedSize is true for a fixed-length array.");
            Assert.False(list.IsFixedSize, "IList.IsFixedSize is false for an instance of System.Collections.Generic.List.");

            // Right or wrong, this matches native .NET results.
            Assert.False(ltdList.IsFixedSize, "IList.IsFixedSize is false for an instance of System.Collections.Generic.List with specified capacity.");
        }
    }
}