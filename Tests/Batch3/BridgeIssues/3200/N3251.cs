using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// This tests consists in just creating an instance of an object with
    /// the ObjectLiteral's CreateMode.Constructor setting and ensure it
    /// outputs functional JavaScript.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3251 - {0}")]
    public class Bridge3251
    {
        /// <summary>
        /// Subject struct using Constructor create mode of ObjectLiteral
        /// </summary>
        [ObjectLiteral(ObjectCreateMode.Constructor)]
        public struct PlaceKey
        {
            public PlaceKey(int i)
            {
            }
        }

        /// <summary>
        /// Create an instance of the subject struct and ensure it exists and
        /// is not null.
        /// </summary>
        [Test]
        public static void TestStructObjectLiteral()
        {
            var key = new PlaceKey(0);
            Assert.NotNull(key, "Instance of CreateMode.Constructor ObjectLiteral class generated and not null.");
        }
    }
}