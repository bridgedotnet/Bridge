using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// Ensures External class with ExpandParams attribute references won't
    /// incur into double 'apply()' calls.
    /// </summary>
    [TestFixture(TestNameFormat = "#3627 - {0}")]
    public class Bridge3627
    {
        /// <summary>
        /// External code mock implementation.
        /// </summary>
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

        /// <summary>
        /// Implements the external/mapped 'Log' method the way it used to
        /// trigger the error.
        /// </summary>
        [External]
        [Name("Bridge3627_Logger")]
        public class Logger
        {
            [ExpandParams]
            public extern string Log(string level, params string[] msgs);
        }

        /// <summary>
        /// Instantiates and reference the external class, expecting it should
        /// return a composed string according to its external implementation.
        /// </summary>
        [Test]
        public static void TestExpandParams()
        {
            var arr = new[] { "one", "two", "three" };

            var logger = new Logger();
            Assert.AreEqual("Info: one, two, three", logger.Log("Info", arr), "External+ExpandParams method call returns the expected result.");
        }
    }
}