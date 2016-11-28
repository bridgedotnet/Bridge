using System;
using System.Collections.Generic;
using Bridge.Test;
using System.Threading.Tasks;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2092 - {0}")]
    public class Bridge2092
    {
        [IgnoreGeneric]
        private static TOut Combine<TIn, TToAdd, TOut>(TIn value, TToAdd toAdd, Func<TIn, TToAdd, TOut> combiner)
        {
            return combiner(value, toAdd);
        }

        [IgnoreGeneric]
        private static Tuple<T1, T2> ExtendTuple<T1, T2>(Tuple<T1> tuple, T2 value)
        {
            return Tuple.Create(tuple.Item1, value);
        }

        [Test]
        public static void TestIgnoreGenericForDelegate()
        {
            var stringValueInTuple = Tuple.Create("abc");
            var stringAndIntValuesInTuple = Combine(stringValueInTuple, 123, ExtendTuple);

            Assert.AreEqual("abc", stringAndIntValuesInTuple.Item1);
            Assert.AreEqual(123, stringAndIntValuesInTuple.Item2);
        }
    }
}