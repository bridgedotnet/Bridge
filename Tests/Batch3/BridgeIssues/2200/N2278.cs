using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2278 - {0}")]
    public class Bridge2278
    {
        public class Item<T>
        {
        }

        public interface ISomething<T>
        {
            T DoSomething(T t);
        }

        public class Something<T> : ISomething<Item<T>>
        {
            Item<T> ISomething<Item<T>>.DoSomething(Item<T> t)
            {
                return t;
            }
        }

        [Test]
        public static void TestGenericInterface()
        {
            var itemString = new Item<string>();
            ISomething<Item<string>> s = new Something<string>();

            Assert.AreEqual(itemString, s.DoSomething(itemString));

            var itemLong = new Item<long>();
            ISomething<Item<long>> sLong = new Something<long>();

            Assert.AreEqual(itemLong, sLong.DoSomething(itemLong));

            var itemDecimal = new Item<decimal>();
            ISomething<Item<decimal>> sDecimal = new Something<decimal>();

            Assert.AreEqual(itemDecimal, sDecimal.DoSomething(itemDecimal));
        }
    }
}