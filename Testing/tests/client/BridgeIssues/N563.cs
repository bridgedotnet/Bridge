using System;
using Bridge;
using Bridge.Html5;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#563]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#563 - {0}")]
    public class Bridge563
    {
        [Test(ExpectedCount = 2)]
        public static void TesForeach()
        {
            string[] keys = new[] { "1", "2", "3" };
            Action[] handlers = new Action[3];
            int i = 0;
            string result = "";

            foreach (var itm in keys)
                handlers[i++] = () => result += itm;

            foreach (var handler in handlers)
            {
                handler();
            }

            Assert.AreEqual(result, "123", "Bridge563 No block foreach loop");

            i = 0;
            result = "";

            foreach (var itm in keys)
            {
                handlers[i++] = () => result += itm;
            }

            foreach (var handler in handlers)
            {
                handler();
            }

            Assert.AreEqual(result, "123", "Bridge563 block foreach loop");
        }

        [Test(ExpectedCount = 1)]
        public static void TesFor()
        {
            string[] keys = new[] { "1", "2", "3" };
            Action[] handlers = new Action[3];
            int i = 0;
            string result = "";

            for (int j = 0; j < keys.Length; j++)
            {
                var itm = keys[j];
                handlers[i++] = () => result += itm;
            }

            foreach (var handler in handlers)
            {
                handler();
            }

            Assert.AreEqual(result, "123", "Bridge563 For loop");
        }
    }
}