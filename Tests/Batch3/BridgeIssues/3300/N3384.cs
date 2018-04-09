using Bridge.Test.NUnit;
using Bridge.Html5;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in checking whether the parsed type of
    /// Bridge.Html5.ProgressEvent's Loaded and Total variables are
    /// ulong, that would allow testing the numbers bound to them above
    /// the integer limit -- albeit JavaScript's limit is both beyond
    /// System.Int32 and way behind System.UInt64.
    /// </summary>
    [TestFixture(TestNameFormat = "#3384 - {0}")]
    public class Bridge3384
    {
        /// <summary>
        /// Makes an assynchronous call and fetch its event argument (cast into
        /// ProgressEvent), checking whether the type resolves to UInt64/ulong.
        /// Although this will not make much difference in client-side, this
        /// will ensure comparisons with big numbers won't assume the
        /// limitations of System.Int32.
        /// </summary>
        [Test(ExpectedCount = 2)]
        public static void TestProgressEventType()
        {
            var xhr = new XMLHttpRequest();
            var done = Assert.Async();

            xhr.OnLoadEnd = ev =>
            {
                Assert.AreEqual(typeof(ulong), ((ProgressEvent)ev).Loaded.GetType(), "ProgressEvent.Loaded is ulong.");
                Assert.AreEqual(typeof(ulong), ((ProgressEvent)ev).Total.GetType(), "ProgressEvent.Total is ulong.");
                done();
            };
            xhr.Open("GET", "/");
            xhr.Send();
        }
    }
}