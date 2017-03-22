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
            public SecondLevelException(Exception inner)
                : base(null, inner)
            { }
        }
        class ThirdLevelException : Exception
        {
            public ThirdLevelException(Exception inner)
                : base(null, inner)
            { }
        }

        static void Rethrow()
        {
            try
            {
                DivideBy0();
            }
            catch (Exception ex)
            {
                throw new ThirdLevelException(ex);
            }
        }

        static void DivideBy0()
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
                Assert.True(list[0] is ThirdLevelException);
                Assert.True(list[1] is SecondLevelException);
                Assert.True(list[2] is DivideByZeroException);
                Assert.True(ex.GetBaseException() is DivideByZeroException);
            }
        }
    }
}