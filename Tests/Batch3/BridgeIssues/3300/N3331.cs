using System;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The tests here should be verified in Microsoft Edge 41.16299.15.0 (Microsoft EdgeHTML 16.16299).
    /// Ensures that HTML attributes are being processed correctly
    /// even if incorrect names of properties are being requested.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3331 - {0}")]
    public class Bridge3331
    {
        private const string NameAttr = "name";
        private const string ValueAttr = "value";

        /// <summary>
        /// Should be verified in Microsoft Edge 41.16299.15.0 (Microsoft EdgeHTML 16.16299).
        /// Checks that "Bridge.getEnumerator()" is able to processs HTML attribute collection represented by <see cref="NamedNodeMap"/>.
        /// </summary>
        [Test]
        public static void TestHtmlAttributesIteration()
        {
            var el = InitElementWithAttributes();

            var index = 0;

            foreach (var attr in el.Attributes)
            {
                VerifyAttributeNode(index++, attr);
            }
        }

        /// <summary>
        /// Should be verified in Microsoft Edge 41.16299.15.0 (Microsoft EdgeHTML 16.16299).
        /// Checks that "Bridge.equals()" is able to process HTML attributes.
        /// </summary>
        [Test]
        public static void TestHtmlAttributesEquality()
        {
            var el = InitElementWithAttributes();

            var attr0 = el.Attributes[0];
            var attr1 = el.Attributes[1];

            Assert.True(attr0.Equals(attr0), "Attribute #1 equals to itself.");
            Assert.False(attr0.Equals(attr1), "Attribute #1 does not equal to Attribute #2.");
        }

        /// <summary>
        /// Should be verified in Microsoft Edge 41.16299.15.0 (Microsoft EdgeHTML 16.16299).
        /// Checks that "Bridge.equals()" is able to process HTML attributes.
        /// </summary>
        [Test]
        public static void TestHtmlAttributeCollectionsEquality()
        {
            var el1 = InitElementWithAttributes();
            var el2 = InitElementWithAttributes();

            Assert.True(el1.Equals(el1), "Attributes Collection #1 equals to itself.");
            Assert.False(el1.Equals(el2), "Attributes Collection #1 does not equal to Attribute Collection #2.");
        }

        private static HTMLElement InitElementWithAttributes()
        {
            var el = Document.CreateElement("input");

            el.SetAttribute(NameAttr, "test name");
            el.SetAttribute(ValueAttr, "test val");

            return el;
        }

        private static void VerifyAttributeNode(int index, Node node)
        {
            var attrName = node.NodeName;

            if (index == 0)
            {
                Assert.AreEqual(NameAttr, attrName, "Attribute 'name' could be processed.");
            }
            else if (index == 1)
            {
                Assert.AreEqual(ValueAttr, attrName, "Attribute 'value' could be processed.");
            }
            else
            {
                throw new IndexOutOfRangeException("Unexpected attribute index.");
            }
        }
    }
}