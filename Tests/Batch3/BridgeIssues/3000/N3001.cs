using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;
using Bridge.Test.NUnit;
using NSBridge3001.SomeLib;

[assembly: Reflectable("NSBridge3001.SomeLib.*")]
namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3001 - {0}")]
    public class Bridge3001
    {
        [Init(InitPosition.Top)]
        public static void Init()
        {
            /*@
                var Bridge3001_SomeLib = (function () {
                    function Bridge3001_SomeLib() { }

                    return Bridge3001_SomeLib;
                }());
            */
        }

        [Test]
        public static void TestExternalReflectable()
        {
            Assert.AreEqual(3, typeof(SomeLib).GetFields().Length);
        }
    }
}

namespace NSBridge3001.SomeLib
{
    [External]
    [Name("Bridge3001_SomeLib")]
    public class SomeLib
    {
        public int mode;
        public int val;
        public int something;
    }
}