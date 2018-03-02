using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in checking whether System.DateTime tests works
    /// with current date and max/min values.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3290 - {0}")]
    public class Bridge3290
    {
        /// <summary>
        /// Tests the comparison variations between datetime values.
        /// </summary>
        [Test]
        public static void CheckCultureInfoGetFormatIsVirtual()
        {
            var culture = new MyCultureInfoAdapter("en-US");

            var format = culture.GetFormat(typeof(System.Globalization.NumberFormatInfo));

            Assert.AreEqual(culture.NumberFormat, format, "GetFormat can be overridden");
        }
    }

    public class MyCultureInfoAdapter : System.Globalization.CultureInfo
    {
        public MyCultureInfoAdapter(string name) : base(name)
        {
        }

        public override object GetFormat(Type formatType)
        {
            return this.NumberFormat;
        }
    }
}