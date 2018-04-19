using System;
using System.Text.RegularExpressions;
using Bridge.Html5;
using Bridge.Test.NUnit;
using System.ComponentModel;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// This test consists in checking whether Bridge can translate
    /// instantiation of the System.ComponentModel.BrowsableAttribute.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2600 - {0}")]
    public class Bridge2600
    {
        /// <summary>
        /// Class using the Browsable attribute in one of its properties.
        /// </summary>
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

        /// <summary>
        /// Checks whether it is possible to fetch the BrowsableAttribute from
        /// a class using it.
        /// </summary>
        [Test]
        public static void TestBrowsableAttribute()
        {
            var props = typeof(Properties).GetProperties().Where(p => p.GetCustomAttributes(typeof(BrowsableAttribute)).Length > 0);

            Assert.AreEqual(1, props.Count(), "Found one match of the BrowsableAttribute in the checked class.");
            Assert.AreEqual("Prop1", props.First().Name, "Matching property with BrowsableAttribute is the 'Prop1' one.");
        }
    }
}