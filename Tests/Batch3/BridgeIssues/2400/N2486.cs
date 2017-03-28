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

        public class Linear1 : IKernel<double[]>
        {
            public double Function(double[] x)
            {
                return x[0];
            }
        }

        public class Linear2 : IKernel<double[,]>
        {
            public double Function(double[,] x)
            {
                return x[1, 1];
            }
        }
        public class Linear3 : IKernel<List<double>>
        {
            public double Function(List<double> x)
            {
                return x[1];
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

            var x1 = new Linear1();
            var r1 = x1.Function(new[] { 1.1 });

            Assert.AreEqual(1.1, r1);

            var x2 = new Linear2();
            var r2 = x2.Function(new double[,] { { 1.1, 2.2, 3.3 }, { 4.1, 5.1, 6.1 } });

            Assert.AreEqual(5.1, r2);

            var x3 = new Linear3();
            var r3 = x3.Function(new List<double>(new[] { 1.1, 2.1 }));

            Assert.AreEqual(2.1, r3);
        }
    }
}