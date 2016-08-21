using System;
using System.Collections;

using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1467 - {0}")]
    public class Bridge1467
    {
        class SomeClass1
        {
            public int Value
            {
                get; set;
            }
        }

        class SomeClass2 : SomeClass1
        {
        }

        class AnotherClass
        {
            public int Value
            {
                get; set;
            }
        }


        [Test(ExpectedCount = 7)]
        public static void TestForeachTypeChecking()
        {
            Assert.Throws<InvalidCastException>(() =>
            {
                foreach (int z in (IEnumerable)new[] { "h" })
                {
                    Console.WriteLine(z);
                }
            }, "(IEnumerable)new[] { \"h\" } foreach int");

            Assert.Throws<InvalidCastException>(() =>
            {
                foreach (char y in (IEnumerable)new[] { "g" })
                {
                    Console.WriteLine(y);
                }
            }, "(IEnumerable)new[] { \"g\" } foreach char");

            foreach (string z1 in (IEnumerable)new[] { "k" })
            {
                Assert.AreEqual("k", z1, "string z1 in (IEnumerable)new[] { \"k\" } foreach string");
            }

            foreach (var z2 in (IEnumerable)new[] { "j" })
            {
                Assert.AreEqual("j", z2, "string z2 in (IEnumerable)new[] { \"j\" } foreach var");
            }

            foreach (SomeClass1 c in (IEnumerable)new[] { new SomeClass1 { Value = 1} })
            {
                Assert.AreEqual(1, c.Value, "(IEnumerable)new[] { new SomeClass1 { Value = 1} } foreach SomeClass1");
            }

            foreach (SomeClass1 d in (IEnumerable)new[] { new SomeClass2 { Value = 2 } })
            {
                Assert.AreEqual(2, d.Value, "(IEnumerable)new[] { new SomeClass2 { Value = 1} } foreach SomeClass1");
            }

            Assert.Throws<InvalidCastException>(() =>
            {
                foreach (SomeClass1 d in (IEnumerable)new[] { new AnotherClass { Value = 3 } })
                {
                    Console.WriteLine(d);
                }
            }, "(IEnumerable)new[] { new AnotherClass { Value = 3 } } foreach SomeClass1");
        }
    }
}