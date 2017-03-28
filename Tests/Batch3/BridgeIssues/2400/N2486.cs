using System;
using System.Reflection;
using System.Collections.Generic;
using System.Threading.Tasks;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2486 - {0}")]
    public class Bridge2486
    {
        public class Linear : IKernel<string[]>
        {
            public double Function(string[] x)
            {
                return 123;
            }
        }

        public interface IKernel<T>
        {
            double Function(T x);
        }

        [Test]
        public static void TestGenericArrayInterface()
        {
            var x = new Linear();
            var r = x.Function(null);

            Assert.AreEqual(123, r);
        }
    }
}