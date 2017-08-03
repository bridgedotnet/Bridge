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
    [TestFixture(TestNameFormat = "#2964 - {0}")]
    public class Bridge2964
    {
        public interface IWhatever
        {
        }

        public struct Wrapped<T>
        {
            public Wrapped(T value)
            {
                Value = value;
            }

            public T Value
            {
                get;
            }

            public static implicit operator Wrapped<T>(T value)
            {
                Bridge2964.lastOperatorTypeName = typeof(T);
                return new Wrapped<T>(value);
            }
        }

        private static Type lastOperatorTypeName;
        private static void DoSomething(Wrapped<string> value)
        {
        }

        private static void DoSomethingElse(Wrapped<IWhatever> value)
        {
        }

        [Test]
        public static void TestGenericOperator()
        {
            DoSomething(null);
            Assert.AreEqual(typeof(string), Bridge2964.lastOperatorTypeName);

            DoSomethingElse(null);
            Assert.AreEqual(typeof(IWhatever), Bridge2964.lastOperatorTypeName);
        }
    }
}