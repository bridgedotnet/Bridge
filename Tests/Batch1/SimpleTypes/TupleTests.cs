using System;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_TUPLE)]
    [TestFixture(TestNameFormat = "Tuple - {0}")]
    public class TupleTests
    {
        [Test]
        public void Tuple1Works()
        {
            for (int i = 0; i <= 1; i++)
            {
                var t = i == 0 ? Tuple.Create("a") : new Tuple<string>("a");
                Assert.AreStrictEqual("a", t.Item1);
            }
        }

        [Test]
        public void Tuple2Works()
        {
            for (int i = 0; i <= 1; i++)
            {
                var t = i == 0 ? Tuple.Create("a", "b") : new Tuple<string, string>("a", "b");
                Assert.AreStrictEqual("a", t.Item1);
                Assert.AreStrictEqual("b", t.Item2);
            }
        }

        [Test]
        public void Tuple3Works()
        {
            for (int i = 0; i <= 1; i++)
            {
                var t = i == 0 ? Tuple.Create("a", "b", "c") : new Tuple<string, string, string>("a", "b", "c");
                Assert.AreStrictEqual("a", t.Item1);
                Assert.AreStrictEqual("b", t.Item2);
                Assert.AreStrictEqual("c", t.Item3);
            }
        }

        [Test]
        public void Tuple4Works()
        {
            for (int i = 0; i <= 1; i++)
            {
                var t = i == 0 ? Tuple.Create("a", "b", "c", "d") : new Tuple<string, string, string, string>("a", "b", "c", "d");
                Assert.AreStrictEqual("a", t.Item1);
                Assert.AreStrictEqual("b", t.Item2);
                Assert.AreStrictEqual("c", t.Item3);
                Assert.AreStrictEqual("d", t.Item4);
            }
        }

        [Test]
        public void Tuple5Works()
        {
            for (int i = 0; i <= 1; i++)
            {
                var t = i == 0 ? Tuple.Create("a", "b", "c", "d", "e") : new Tuple<string, string, string, string, string>("a", "b", "c", "d", "e");
                Assert.AreStrictEqual("a", t.Item1);
                Assert.AreStrictEqual("b", t.Item2);
                Assert.AreStrictEqual("c", t.Item3);
                Assert.AreStrictEqual("d", t.Item4);
                Assert.AreStrictEqual("e", t.Item5);
            }
        }

        [Test]
        public void Tuple6Works()
        {
            for (int i = 0; i <= 1; i++)
            {
                var t = i == 0 ? Tuple.Create("a", "b", "c", "d", "e", "f") : new Tuple<string, string, string, string, string, string>("a", "b", "c", "d", "e", "f");
                Assert.AreStrictEqual("a", t.Item1);
                Assert.AreStrictEqual("b", t.Item2);
                Assert.AreStrictEqual("c", t.Item3);
                Assert.AreStrictEqual("d", t.Item4);
                Assert.AreStrictEqual("e", t.Item5);
                Assert.AreStrictEqual("f", t.Item6);
            }
        }

        [Test]
        public void Tuple7Works()
        {
            for (int i = 0; i <= 1; i++)
            {
                var t = i == 0 ? Tuple.Create("a", "b", "c", "d", "e", "f", "g") : new Tuple<string, string, string, string, string, string, string>("a", "b", "c", "d", "e", "f", "g");
                Assert.AreStrictEqual("a", t.Item1);
                Assert.AreStrictEqual("b", t.Item2);
                Assert.AreStrictEqual("c", t.Item3);
                Assert.AreStrictEqual("d", t.Item4);
                Assert.AreStrictEqual("e", t.Item5);
                Assert.AreStrictEqual("f", t.Item6);
                Assert.AreStrictEqual("g", t.Item7);
            }
        }

        [Test]
        public void Tuple8Works()
        {
            for (int i = 0; i <= 1; i++)
            {
                var t = i == 0 ? Tuple.Create("a", "b", "c", "d", "e", "f", "g", "h") : new Tuple<string, string, string, string, string, string, string, string>("a", "b", "c", "d", "e", "f", "g", "h");
                Assert.AreStrictEqual("a", t.Item1);
                Assert.AreStrictEqual("b", t.Item2);
                Assert.AreStrictEqual("c", t.Item3);
                Assert.AreStrictEqual("d", t.Item4);
                Assert.AreStrictEqual("e", t.Item5);
                Assert.AreStrictEqual("f", t.Item6);
                Assert.AreStrictEqual("g", t.Item7);
                Assert.AreStrictEqual("h", t.Rest);
            }
        }
    }
}
