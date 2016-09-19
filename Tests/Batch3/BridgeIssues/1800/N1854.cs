using System;
using System.Collections;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1854 - {0}")]
    public class Bridge1854
    {
        public class UseReader<T>
        {
            public IRead<T> Reader { get; set; }

            public IRead1<T> Reader1 { get; set; }

            public string Read()
            {
                return Reader.Read();
            }

            public string Read1()
            {
                return Reader1.Read();
            }
        }

        public class SomeReader<T> : IRead<T>, IRead1<T>
        {
            private string _param;

            public SomeReader(string param)
            {
                _param = param;
            }

            public string Read()
            {
                return _param;
            }
        }

        public interface IRead<T>
        {
            string Read();
        }

        [ExternalInterface]
        [Name("Object")]
        public interface IRead1<T>
        {
            string Read();
        }

        [Test]
        public void TestCase()
        {
            var reader = new UseReader<string>
            {
                Reader = new SomeReader<string>("test"),
                Reader1 = new SomeReader<string>("test1")
            };
            var result = reader.Read();
            Assert.AreEqual("test", result);

            result = reader.Read1();
            Assert.AreEqual("test1", result);
        }
    }
}