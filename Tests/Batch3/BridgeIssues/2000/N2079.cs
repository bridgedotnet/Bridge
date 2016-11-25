using System;
using System.Collections.Generic;
using System.Linq;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    public static class Bridge2079Parsers
    {
        public static Bridge2079.Parser<IEnumerable<TValue1>> Bad2<TValue1, TValue2>(this Bridge2079.Parser<TValue1> p, Bridge2079.Parser<TValue2> sep) =>
               from head in p
               from tail in Many(
                   from _ in sep
                   from t in p
                   select t
                   )
               select (IEnumerable<TValue1>)ToEnumerable(head).Concat(tail);

        public static Bridge2079.Parser<TValue2> SelectMany<TValue, TIntermediate, TValue2>(this Bridge2079.Parser<TValue> parser, Func<TValue, Bridge2079.Parser<TIntermediate>> selector, Func<TValue, TIntermediate, TValue2> projector) =>
             i =>
             {
                 var res = parser(i);
                 return new Bridge2079.Result<TValue2>();
             };

        public static Bridge2079.Parser<IEnumerable<TValue>> Many<TValue>(Bridge2079.Parser<TValue> parser) =>
          i => new Bridge2079.Result<IEnumerable<TValue>>();

        private static IEnumerable<TValue> ToEnumerable<TValue>(TValue head)
        {
            yield return head;
        }
    }

    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2079 - {0}")]
    public class Bridge2079
    {
        public class Result<TValue> { }
        public class Source { }
        public delegate Result<TValue> Parser<TValue>(Source input);
        
        [Test]
        public static void TestQueryAsArgument()
        {
            Assert.True(true, "Just check that Bridge2079Parsers is compiled ok");    
        }
    }
}