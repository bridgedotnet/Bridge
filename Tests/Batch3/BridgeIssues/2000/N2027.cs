using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2027 - {0}")]
    public class Bridge2027
    {
        public static Options Status
        {
            get
            {
                return Options.Whatever;
            }
        }

        public enum Options
        {
            Whatever
        }

        [Test]
        public static void TestToStringForEnumWhenConcatWithString()
        {
            var value = Options.Whatever;
            Assert.AreEqual("Value: Whatever", "Value: " + value);
            Assert.AreEqual("Value: Whatever", "Value: " + value.ToString());
            Assert.AreEqual("Value: Whatever", "Value: " + Status);
            Assert.AreEqual("Value: Whatever", "Value: " + Status.ToString());
        }
    }
}