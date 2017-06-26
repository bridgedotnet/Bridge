using System;
using System.Collections.Generic;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2840 - {0}")]
    public class Bridge2840
    {
        public interface ISerialiseToAndFromJson
        {
            string Serialise<T>(T value);
            T Deserialise<T>(string json);
        }

        public class NullSerialiser : ISerialiseToAndFromJson
        {
            public string Serialise<T>(T value) { return "_" + value; }
            public T Deserialise<T>(string json) { return default(T); }
        }

        public class ApiCaller
        {
            private readonly ISerialiseToAndFromJson _serialiser;
            public ApiCaller(ISerialiseToAndFromJson serialiser)
            {
                _serialiser = serialiser;
            }

            public string Test(object data)
            {
                return Something(data, _serialiser.Serialise);
            }

            public string Test2(object data)
            {
                return Something(data, Serialise);
            }

            public string Serialise<T>(T value)
            {
                return "_" + value;
            }

            private static string Something(object data, Func<object, string> serialiser)
            {
                return serialiser(data);
            }
        }

        [Test]
        public static void TestScope()
        {
            var x = new ApiCaller(new NullSerialiser());
            Assert.AreEqual("_abc", x.Test("abc"));
            Assert.AreEqual("_abc2", x.Test2("abc2"));
        }
    }
}