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

        [Test]
        public static void TestArrayTypeParsingMoreLevel()
        {
            string name = "BridgeTest.ClientTest.Batch3.Bridge.BridgeIssues.Case8+ApiResponse`1[[BridgeTest.ClientTest.Batch3.Bridge.BridgeIssues.Case8+Container`1[[BridgeTest.ClientTest.Batch3.Bridge.BridgeIssues.Case8+PageEditData[]]][]]], Bridge.ClientTest.Batch3";
            Type type = Type.GetType(name);

            Assert.AreEqual("BridgeTest.ClientTest.Batch3.Bridge.BridgeIssues.Case8+ApiResponse`1[[BridgeTest.ClientTest.Batch3.Bridge.BridgeIssues.Case8+Container`1[[BridgeTest.ClientTest.Batch3.Bridge.BridgeIssues.Case8+PageEditData[]]][]]]", type.FullName);
            var targs = type.GetGenericArguments();

            Assert.AreEqual(1, targs.Length);
            Assert.True(targs[0].IsArray);

            var elementType = targs[0].GetElementType();

            targs = elementType.GetGenericArguments();

            Assert.AreEqual(1, targs.Length);
            Assert.True(targs[0].IsArray);
        }
    }

    public class Case8
    {
        public sealed class Container
        {
            public static Container<K> Create<K>(K value)
            {
                return new Container<K>() { Item1 = value };
            }
        }

        public sealed class Container<T>
        {
            public T Item1;
        }

        public sealed class ApiResponse<T>
        {
            public T Value;
        }

        public sealed class PageEditData
        {
            public int Data
            {
                get; set;
            }
        }

        public sealed class ApiResponse<T, K>
        {
            public T Value1;
            public K Value2
            {
                get; set;
            }
        }

        public sealed class PageEditData<T>
        {
            public T Data
            {
                get; set;
            }
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