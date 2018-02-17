using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in checking whether copyTo works for dictionary
    /// when its keys are instances of a class or complex structure.
    /// </summary>
    [TestFixture(TestNameFormat = "#3408 - {0}")]
    public class Bridge3408
    {
        /// <summary>
        /// The tests just creates an instance of a dictionary with an
        /// empty-bodied class as its keys, adds entries then copies to a
        /// simple array, then checks whether the value in the array is the
        /// expected one.
        /// </summary>
        [Test]
        public static void TestCpxDicCopyTo()
        {
            var cpx = new Dictionary<C, int>();

            cpx.Add(new C(), 5);
            cpx.Add(new C(), 7);
            cpx.Add(new C(), 3);

            var cpa = new int[3];
            cpx.Values.CopyTo(cpa, 0);

            Assert.AreEqual(5, cpa[0], "First element extracted matches.");
            Assert.AreEqual(7, cpa[1], "Second element extracted matches.");
            Assert.AreEqual(3, cpa[2], "Third element extracted matches.");

            var cpk = new C[3];
            cpx.Keys.CopyTo(cpk, 0);

            Assert.True(cpk[0] is C, "First key extracted matches.");
            Assert.True(cpk[1] is C, "Second key extracted matches.");
            Assert.True(cpk[2] is C, "Third key extracted matches.");
        }

        /// <summary>
        /// A dummy class to serve as a "complex" key for the test dictionary.
        /// </summary>
        private class C { }
    }
}