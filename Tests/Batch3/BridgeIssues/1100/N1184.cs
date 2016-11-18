using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1184 - {0}")]
    public class Bridge1184
    {
        [Test]
        public static void TestGetTypeForNumberTypes()
        {
            byte b = 1;
            Assert.AreEqual(typeof(byte), b.GetType());

            sbyte sb = 1;
            Assert.AreEqual(typeof(sbyte), sb.GetType());

            short s = 1;
            Assert.AreEqual(typeof(short), s.GetType());

            ushort us = 1;
            Assert.AreEqual(typeof(ushort), us.GetType());

            int i = 1;
            Assert.AreEqual(typeof(int), i.GetType());

            uint ui = 1;
            Assert.AreEqual(typeof(uint), ui.GetType());

            double d = 1.1;
            Assert.AreEqual(typeof(double), d.GetType());

            float f = 1.1f;
            Assert.AreEqual(typeof(float), f.GetType());

            object o = b;
            Assert.AreEqual(typeof(byte), o.GetType());

            o = f;
            Assert.AreEqual(typeof(float), o.GetType());
        }
    }
}