using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Bridge.Test.NUnit;
using Bridge.Html5;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2456 - {0}")]
    public class Bridge2456
    {
        [External]
        [Name("Bridge")]
        private class BridgeHelper
        {
            [Unbox(false)]
            public static extern bool isArray(object o);
        }

        [Test]
        public static void TestIsArrayFromIFrame()
        {
            var frame = new HTMLIFrameElement();
            Document.Body.AppendChild(frame);

            try
            {
                dynamic xFrame = Window.Frames[Window.Frames.Length - 1];
                object xArray = xFrame.Array;

                // Create an array in the iframe
                var array = Script.Write<int[]>("new {0}(1,2,3)", xArray);

                var contains = array.Contains(3);
                Assert.True(contains, "Checks that an array [1, 2, 3] created in another frame contains 3");

                var isArray = BridgeHelper.isArray(array);
                Assert.True(isArray, "Checks that an array created in another frame returns true for Bridge.isArray(array)");
            }
            finally
            {
                if (frame != null && frame.ParentNode != null)
                {
                    frame.ParentNode.RemoveChild(frame);
                }
            }
        }
    }
}