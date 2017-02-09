using Bridge.Test.NUnit;

using System.ComponentModel;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1501 - {0}")]
    public class Bridge1501
    {
        [Test]
        public void TestPropertyChangedEventArgs()
        {
            var ea1 = new PropertyChangedEventArgs("prop1");
            Assert.AreEqual("prop1", ea1.PropertyName, "prop1 PropertyName");
            Assert.Null(ea1.OldValue, "prop1 OldValue");
            Assert.Null(ea1.NewValue, "prop1 NewValue");

            var ea2 = new PropertyChangedEventArgs("prop2", 77);
            Assert.AreEqual("prop2", ea2.PropertyName, "prop2 PropertyName");
            Assert.Null(ea2.OldValue, "prop2 OldValue");
            Assert.AreEqual(77, ea2.NewValue, "prop2 NewValue");

            var ea3 = new PropertyChangedEventArgs("prop3", 120, 270);
            Assert.AreEqual("prop3", ea3.PropertyName, "prop3 PropertyName");
            Assert.AreEqual(270, ea3.OldValue, "prop3 OldValue");
            Assert.AreEqual(120, ea3.NewValue, "prop3 NewValue");
        }
    }
}