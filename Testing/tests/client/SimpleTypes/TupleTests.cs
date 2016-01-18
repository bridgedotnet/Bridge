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
                Assert.AreStrictEqual(t.Item1, "a");
            }
        }

        [Test]
        public void Tuple2Works()
        {
            for (int i = 0; i <= 1; i++)
            {
                var t = i == 0 ? Tuple.Create("a", "b") : new Tuple<string, string>("a", "b");
                Assert.AreStrictEqual(t.Item1, "a");
                Assert.AreStrictEqual(t.Item2, "b");
            }
        }

        [Test]
        public void Tuple3Works()
        {
            for (int i = 0; i <= 1; i++)
            {
                var t = i == 0 ? Tuple.Create("a", "b", "c") : new Tuple<string, string, string>("a", "b", "c");
                Assert.AreStrictEqual(t.Item1, "a");
                Assert.AreStrictEqual(t.Item2, "b");
                Assert.AreStrictEqual(t.Item3, "c");
            }
        }

        [Test]
        public void Tuple4Works()
        {
            for (int i = 0; i <= 1; i++)
            {
                var t = i == 0 ? Tuple.Create("a", "b", "c", "d") : new Tuple<string, string, string, string>("a", "b", "c", "d");
                Assert.AreStrictEqual(t.Item1, "a");
                Assert.AreStrictEqual(t.Item2, "b");
                Assert.AreStrictEqual(t.Item3, "c");
                Assert.AreStrictEqual(t.Item4, "d");
            }
        }

        [Test]
        public void Tuple5Works()
        {
            for (int i = 0; i <= 1; i++)
            {
                var t = i == 0 ? Tuple.Create("a", "b", "c", "d", "e") : new Tuple<string, string, string, string, string>("a", "b", "c", "d", "e");
                Assert.AreStrictEqual(t.Item1, "a");
                Assert.AreStrictEqual(t.Item2, "b");
                Assert.AreStrictEqual(t.Item3, "c");
                Assert.AreStrictEqual(t.Item4, "d");
                Assert.AreStrictEqual(t.Item5, "e");
            }
        }

        [Test]
        public void Tuple6Works()
        {
            for (int i = 0; i <= 1; i++)
            {
                var t = i == 0 ? Tuple.Create("a", "b", "c", "d", "e", "f") : new Tuple<string, string, string, string, string, string>("a", "b", "c", "d", "e", "f");
                Assert.AreStrictEqual(t.Item1, "a");
                Assert.AreStrictEqual(t.Item2, "b");
                Assert.AreStrictEqual(t.Item3, "c");
                Assert.AreStrictEqual(t.Item4, "d");
                Assert.AreStrictEqual(t.Item5, "e");
                Assert.AreStrictEqual(t.Item6, "f");
            }
        }

        [Test]
        public void Tuple7Works()
        {
            for (int i = 0; i <= 1; i++)
            {
                var t = i == 0 ? Tuple.Create("a", "b", "c", "d", "e", "f", "g") : new Tuple<string, string, string, string, string, string, string>("a", "b", "c", "d", "e", "f", "g");
                Assert.AreStrictEqual(t.Item1, "a");
                Assert.AreStrictEqual(t.Item2, "b");
                Assert.AreStrictEqual(t.Item3, "c");
                Assert.AreStrictEqual(t.Item4, "d");
                Assert.AreStrictEqual(t.Item5, "e");
                Assert.AreStrictEqual(t.Item6, "f");
                Assert.AreStrictEqual(t.Item7, "g");
            }
        }

        [Test]
        public void Tuple8Works()
        {
            for (int i = 0; i <= 1; i++)
            {
                var t = i == 0 ? Tuple.Create("a", "b", "c", "d", "e", "f", "g", "h") : new Tuple<string, string, string, string, string, string, string, string>("a", "b", "c", "d", "e", "f", "g", "h");
                Assert.AreStrictEqual(t.Item1, "a");
                Assert.AreStrictEqual(t.Item2, "b");
                Assert.AreStrictEqual(t.Item3, "c");
                Assert.AreStrictEqual(t.Item4, "d");
                Assert.AreStrictEqual(t.Item5, "e");
                Assert.AreStrictEqual(t.Item6, "f");
                Assert.AreStrictEqual(t.Item7, "g");
                Assert.AreStrictEqual(t.Rest, "h");
            }
        }
    }
}
