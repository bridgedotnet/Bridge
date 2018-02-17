using Bridge.Test.NUnit;
using System.Threading.Tasks;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in checking whether Task.FromResult() returns
    /// a generics instance of System.Threading.Tasks, so that it can be
    /// cast into non-generics then back to the generics version.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3420 - {0}")]
    public class Bridge3420
    {
        /// <summary>
        /// Call Task.FromResult() casting to non-generics Task and try to cast
        /// it back to the generics, thus being able to fetch the result value
        /// fed to FromResult().
        /// </summary>
        [Test]
        public async static void TestTaskFromResult()
        {
            var done = Assert.Async();
            Task t = Task.FromResult(3);
            Task<int> t2 = (Task<int>)t;
            Assert.AreEqual(3, await t2, "The task result matches the expected value.");
            done();
        }
    }
}