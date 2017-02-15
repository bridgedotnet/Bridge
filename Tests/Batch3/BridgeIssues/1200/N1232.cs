using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1232 - {0}")]
    public class Bridge1232
    {
        public class ClassA
        {
            public string[] A { get; set; }
            public int Number { get; set; }

            public ClassA(int a, params string[] str)
            {
                A = str;
                Number = a;
            }

            public ClassA(params string[] str)
                : this(1, str)
            {
            }
        }

        public class ClassB
        {
            public string[] A { get; set; }

            public string S { get; set; }

            public int Number { get; set; }

            public ClassB(int a, params string[] str)
            {
                A = str;
                Number = a;
            }

            public ClassB(params string[] str)
                : this(1, str)
            {
            }

            public ClassB(string s, params string[] str) : this(str)
            {
                this.S = s;
            }
        }

        [Test]
        public static void TestParamsInThisCtorInit()
        {
            var t1 = new ClassA("a", "b");
            Assert.AreEqual(2, t1.A.Length, "Length ab");
            Assert.AreEqual("a", t1.A[0], "First ab");
            Assert.AreEqual("b", t1.A[1], "Second ab");
            Assert.AreEqual(1, t1.Number, "Number ab");

            var t2 = new ClassA(new string[] { "a", "b", "c" });
            Assert.AreEqual(3, t2.A.Length, "Length abc");
            Assert.AreEqual("a", t2.A[0], "First abc");
            Assert.AreEqual("b", t2.A[1], "Second abc");
            Assert.AreEqual("c", t2.A[2], "Third abc");
            Assert.AreEqual(1, t2.Number, "Number abc");

            var t3 = new ClassA(3, new string[] { "a", "b", "c", "d" });
            Assert.AreEqual(4, t3.A.Length, "Length abcd");
            Assert.AreEqual("a", t3.A[0], "First abcd");
            Assert.AreEqual("b", t3.A[1], "Second abcd");
            Assert.AreEqual("c", t3.A[2], "Third abcd");
            Assert.AreEqual("d", t3.A[3], "Forth abcd");
            Assert.AreEqual(3, t3.Number, "Number abcd");
        }

        [Test]
        public static void TestExtendedParamsInThisCtorInit()
        {
            var t1 = new ClassB("a", "b");
            Assert.AreEqual(1, t1.A.Length, "Length ab");
            Assert.AreEqual("b", t1.A[0], "First ab");
            Assert.AreEqual("a", t1.S, "S ab");
            Assert.AreEqual(1, t1.Number, "Number ab");

            var t2 = new ClassB(new string[] { "a", "b", "c" });
            Assert.AreEqual(3, t2.A.Length, "Length abc");
            Assert.AreEqual("a", t2.A[0], "First abc");
            Assert.AreEqual("b", t2.A[1], "Second abc");
            Assert.AreEqual("c", t2.A[2], "Third abc");
            Assert.AreEqual(null, t2.S, "S abc");
            Assert.AreEqual(1, t2.Number, "Number abc");

            var t3 = new ClassB("e", new string[] { "a", "b", "c", "d" });
            Assert.AreEqual(4, t3.A.Length, "Length abcd");
            Assert.AreEqual("a", t3.A[0], "First abcd");
            Assert.AreEqual("b", t3.A[1], "Second abcd");
            Assert.AreEqual("c", t3.A[2], "Third abcd");
            Assert.AreEqual("d", t3.A[3], "Forth abcd");
            Assert.AreEqual("e", t3.S, "S abcd");
            Assert.AreEqual(1, t3.Number, "Number abcd");

            var t4 = new ClassB(7, new string[] { "a", "b", "c", "d", "e" });
            Assert.AreEqual(5, t4.A.Length, "Length abcde");
            Assert.AreEqual("a", t4.A[0], "First abcde");
            Assert.AreEqual("b", t4.A[1], "Second abcde");
            Assert.AreEqual("c", t4.A[2], "Third abcde");
            Assert.AreEqual("d", t4.A[3], "Forth abcde");
            Assert.AreEqual("e", t4.A[4], "Fifth abcde");
            Assert.AreEqual(null, t4.S, "S abcde");
            Assert.AreEqual(7, t4.Number, "Number abcde");
        }
    }
}