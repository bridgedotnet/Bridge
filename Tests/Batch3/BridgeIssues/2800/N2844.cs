using System;
using System.Collections.Generic;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2844 - {0}")]
    public class Bridge2844
    {
        public class ChartControl
        {
            public ChartControl()
            {
            }

            public ChartProperties Properties
            { get; internal set; } = new ChartProperties();
        }

        public class ChartProperties
        {
            public Font Font
            { get; set; } = new Font { FontFamily = "Arial", Height = 14 };

            public int HalfYAxisLabelHeight => (int)Math.Ceiling(1.2 * Font.Height / 2);
        }

        public class Font
        {
            public string FontFamily
            { get; set; } = "Arial";

            public int Height
            { get; set; } = 12;
        }

        [Test]
        public static void TestPropertyInitialization()
        {
            ChartControl chartControl = new ChartControl { Properties = new ChartProperties() };
            Assert.NotNull(chartControl.Properties);
            Assert.NotNull(chartControl.Properties.Font);
            Assert.AreEqual("Arial", chartControl.Properties.Font.FontFamily);
            Assert.AreEqual(14, chartControl.Properties.Font.Height);
        }
    }
}