using System;
using System.Text.RegularExpressions;
using Bridge.Html5;
using Bridge.Test.NUnit;
using System.ComponentModel;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2600 - {0}")]
    public class Bridge2600
    {
        [Reflectable]
        class Properties
        {
            [Browsable(false)]
            public int Prop1
            {
                get;
                set;
            }

            public int Prop2
            {
                get;
                set;
            }
        }        

        [Test]
        public static void TestBrowsableAttribute()
        {
            var props = typeof(Properties).GetProperties().Where(p => p.GetCustomAttributes(typeof(BrowsableAttribute)).Length > 0);

            Assert.AreEqual(1, props.Count());
            Assert.AreEqual("Prop1", props.First().Name);
        }
    }
}