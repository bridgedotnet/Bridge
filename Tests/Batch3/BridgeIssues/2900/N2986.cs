using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2986 - {0}")]
    public class Bridge2986
    {
        [Reflectable]
        public interface ISomeInterface
        {
            Task<string> GetString();
        }

        [Test]
        public static void TestGenericTaskReflection()
        {
            var type = typeof(ISomeInterface);
            var methods = type.GetMethods();
            var firstMethod = methods[0];
            Assert.AreEqual("GetString", firstMethod.Name);
            var genericArgs = firstMethod.ReturnType.GetGenericArguments();
            Assert.AreEqual(1, genericArgs.Length);
            Assert.AreEqual(typeof(string), genericArgs[0]);
            Assert.AreEqual(typeof(Task<string>), firstMethod.ReturnType);
        }
    }
}