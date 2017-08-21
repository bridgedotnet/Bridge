using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Threading.Tasks;
using Bridge.ClientTest.Batch3;
using Bridge.Test.NUnit;

namespace BridgeTest.ClientTest.Batch3.Bridge.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3071 - {0}")]
    public class Bridge3071
    {
        [Test]
        public static void TestArrayTypeParsing()
        {
            var type = Type.GetType("BridgeTest.ClientTest.Batch3.Bridge.BridgeIssues.ApiResponse`1[[BridgeTest.ClientTest.Batch3.Bridge.BridgeIssues.KeyValuePairDataModel[], Bridge.ClientTest.Batch3]], Bridge.ClientTest.Batch3");
            Assert.AreEqual("BridgeTest.ClientTest.Batch3.Bridge.BridgeIssues.ApiResponse`1[[BridgeTest.ClientTest.Batch3.Bridge.BridgeIssues.KeyValuePairDataModel[]]]", type.FullName);

            type = Type.GetType("System.Int32[]");
            Assert.AreEqual("System.Int32[]", type.FullName);

            type = Type.GetType("System.Int32[,]");
            Assert.AreEqual("System.Int32[,]", type.FullName);

            type = Type.GetType("System.Int32[,], mscorlib");
            Assert.AreEqual("System.Int32[,]", type.FullName);
        }
    }

    public sealed class KeyValuePairDataModel
    {
        public int Key;
        public string Value;
    }

    public sealed class ApiResponse<T>
    {
        public ApiResponse(T resultIfSuccessful)
        {
            ResultIfSuccessful = resultIfSuccessful;
        }

        public T ResultIfSuccessful { get; }

    }
}