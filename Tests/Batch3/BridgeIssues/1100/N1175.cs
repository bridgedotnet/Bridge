using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1175 - {0}")]
    public class Bridge1175
    {
        [Test]
        public static void TestNullComparing()
        {
            object temp = new object();
            object varNull = null;
            object varUndefined = temp["this-prop-undefined"];

            Assert.True(varNull == varUndefined, "varNull == varUndefined");
            Assert.True(varNull == null, "varNull == null");
            Assert.True(varUndefined == null, "varUndefined == null");
            Assert.True(Script.Undefined == varUndefined, "Script.Undefined == varUndefined");

            Assert.True(varUndefined == varNull, "varUndefined == varNull");
            Assert.True(null == varNull, "null == varNull");
            Assert.True(null == varUndefined, "null == varUndefined");
            Assert.True(varUndefined == Script.Undefined, "varUndefined == Script.Undefined");
        }
    }
}