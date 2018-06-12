using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3627 - {0}")]
    public class Bridge3627
    {
        [Init(InitPosition.Top)]
        public static void Init()
        {
            /*@
    var Bridge3627_Logger = (function () {
        function Bridge3627_Logger() {
        }
        Bridge3627_Logger.prototype.Log = function (s) {
            var args = [].slice.call(arguments, 1);
            var msg = args.join(", ");
            return arguments[0] + ": " + msg;
        };
        return Bridge3627_Logger;
    }());
            */
        }

        [External]
        [Name("Bridge3627_Logger")]
        public class Logger
        {
            [ExpandParams]
            public extern string Log(string level, params string[] msgs);
        }

        [Test]
        public static void TestExpandParams()
        {
            var arr = new[] { "one", "two", "three" };

            var logger = new Logger();
            Assert.AreEqual("Info: one, two, three", logger.Log("Info", arr));
        }
    }
}