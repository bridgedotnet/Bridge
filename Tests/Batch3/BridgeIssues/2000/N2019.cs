using System;
using System.Collections.Generic;
using System.Linq;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2019 - {0}")]
    public class Bridge2019
    {
        public interface ISome<T>
        {
            int SomeProp
            {
                set; get;
            }

            void SomeMethod();
        }

        public class Some<T> : ISome<T>
        {
            public int SomeProp
            {
                set; get;
            }

            public void SomeMethod()
            {
                SomeProp += 11;
            }
        }

        public static int Process<T>()
        {
            Action<ISome<T>> actionSet = c => c.SomeProp += 1;
            Action<ISome<T>> actionCall = c => c.SomeMethod();

            var items = new List<ISome<T>> { new Some<T> { SomeProp = 5 } };

            items.ForEach(actionSet);
            items.ForEach(actionCall);

            return items.Select(c => c.SomeProp).Sum();
        }

        [Test]
        public void TestLambdaExpressionsInGenericMethod()
        {
            var res = Bridge2019.Process<string>();
            Assert.AreEqual(17, res);
        }
    }
}