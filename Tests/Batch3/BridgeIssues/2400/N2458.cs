using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2458 - {0}")]
    public class Bridge2458
    {
        class SecondLevelException : Exception
        {
            public SecondLevelException(Exception inner): base(null, inner)
            {
            }
        }

        class ThirdLevelException : Exception
        {
            public ThirdLevelException(Exception inner): base(null, inner)
            {
            }
        }

        static void Rethrow()
        {
            try
            {
                DivideByZero();
            }
            catch (Exception ex)
            {
                throw new ThirdLevelException(ex);
            }
        }

        static void DivideByZero()
        {
            try
            {
                int zero = 0;
                int ecks = 1 / zero;
            }
            catch (Exception ex)
            {
                throw new SecondLevelException(ex);
            }
        }

        [Test]
        public static void TestGetBaseException()
        {
            try
            {
                Rethrow();
            }
            catch (Exception ex)
            {
                List<Exception> list = new List<Exception>();
                Exception current;
                current = ex;

                while (current != null)
                {
                    list.Add(current);
                    current = current.InnerException;
                }

                Assert.AreEqual(3, list.Count);

                var l0 = list[0];
                Assert.True(l0 is ThirdLevelException, GetType(l0));

                var l1 = list[1];
                Assert.True(l1 is SecondLevelException, GetType(l1));

                var l2 = list[2];
                Assert.True(l2 is DivideByZeroException, GetType(l2));

                var l3 = ex.GetBaseException();
                Assert.True(l3 is DivideByZeroException, GetType(l3));
            }
        }

        private static string GetType(object o)
        {
            if (o == null)
            {
                return "[null]";
            }

            return o.GetType().Name;
        }
    }
}