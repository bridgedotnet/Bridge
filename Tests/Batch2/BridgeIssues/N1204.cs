using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch2.BridgeIssues
{
    // Bridge[#1204]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1204 - " + Constants.BATCH_NAME + " {0}")]
    public class N1204
    {
        [Test]
        public static void TestStrictNullChecksOptionForNulls()
        {
            object temp = new object();
            object temp1 = temp;
            object temp2 = new object();
            long l = 5L;
            object ol = 5L;
            object oi = 5;
            object varNull = null;
            object varUndefined = temp["this-prop-undefined"];

            Assert.False(varNull == varUndefined, "varNull == varUndefined");
            Assert.True(varNull == null, "varNull == null");
            Assert.False(varUndefined == null, "varUndefined == null");
            Assert.True(Script.Undefined == varUndefined, "Script.Undefined == varUndefined");
            Assert.True(temp == temp1, "temp == temp1");
            Assert.False(temp == temp2, "temp == temp2");
            Assert.True(l == 5, "l == 5");
            Assert.False(ol == oi, "ol == oi");

            Assert.False(varUndefined == varNull, "varUndefined == varNull");
            Assert.True(null == varNull, "null == varNull");
            Assert.False(null == varUndefined, "null == varUndefined");
            Assert.True(varUndefined == Script.Undefined, "varUndefined == Script.Undefined");
            Assert.True(temp1 == temp, "temp1 == temp");
            Assert.False(temp2 == temp, "temp2 == temp");
            Assert.True(5 == l, "5 == l");
            Assert.False(oi == ol, "oi == ol");
        }
    }
}