using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1933 - {0}")]
    public class Bridge1933
    {
        [Test]
        public void TestRounding()
        {
            // decimal
            decimal x = 0.25m;
            Assert.AreEqual(".3", x.ToString("##.#"), "decimal");
            Assert.AreEqual("0.3", x.ToString("F1"), "decimal");

            x = -0.25m;
            Assert.AreEqual("-.3", x.ToString("##.#"), "decimal");
            Assert.AreEqual("-0.3", x.ToString("F1"), "decimal");

            x = 0.025m;
            Assert.AreEqual("", x.ToString("##.#"), "decimal");
            Assert.AreEqual("0.0", x.ToString("F1"), "decimal");

            x = -0.025m;
            Assert.AreEqual("", x.ToString("##.#"), "decimal");
            Assert.AreEqual("0.0", x.ToString("F1"), "decimal");


            // double
            double d = 0.25;
            Assert.AreEqual(".3", d.ToString("##.#"), "double");
            Assert.AreEqual("0.3", d.ToString("F1"), "double");

            d = -0.25;
            Assert.AreEqual("-.3", d.ToString("##.#"), "double");
            Assert.AreEqual("-0.3", d.ToString("F1"), "double");

            d = 0.025;
            Assert.AreEqual("", d.ToString("##.#"), "double");
            Assert.AreEqual("0.0", d.ToString("F1"), "double");

            d = -0.025;
            Assert.AreEqual("", d.ToString("##.#"), "double");
            Assert.AreEqual("0.0", d.ToString("F1"), "double");
        }
    }
}