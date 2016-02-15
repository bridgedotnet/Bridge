using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    internal static class Bridge588B
    {
        internal const int Valeur1 = 1;
        internal const int Valeur2 = Valeur1 + 1;
    }

    public static class Bridge588A
    {
        public static int Add(int a, int b)
        {
            return a + b;
        }

        public static int Valeur3 = Add(Bridge588B.Valeur2, 1);
    }

    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#588 - {0}")]
    public class Bridge588C
    {
        public class C1
        {
            private static readonly C1 _default = new C1(C2.Default);
            public static C1 Default { get { return _default; } }

            public C1(C2 value)
            {
                Value = value;
            }

            public C2 Value { get; private set; }
        }

        public class C2
        {
            private static readonly C2 _default = new C2("default");
            public static C2 Default { get { return _default; } }

            public C2(string name)
            {
                Name = name;
            }

            public string Name { get; private set; }
        }

        // Bridge[#588]
        [Test(ExpectedCount = 9)]
        public static void TestUseCase2()
        {
            var c2 = new C2("C2 value");
            Assert.True(c2 != null, "Bridge588 C2");
            Assert.AreEqual("C2 value", c2.Name, "Bridge588 C2.Name");

            var c1 = new C1(c2);
            Assert.True(c1 != null, "Bridge588 C1");
            Assert.AreEqual("C2 value", c1.Value.Name, "Bridge588 C1.Value.Name");

            Assert.True(C1.Default != null, "Bridge588 C1.Default");
            Assert.True(C1.Default.Value != null, "Bridge588 C1.Default.Value");
            Assert.AreEqual("default", C1.Default.Value.Name, "Bridge588 C1.Default.Value.Name");
            Assert.True(C2.Default != null, "Bridge588 C2.Default");
            Assert.True(C2.Default.Name != null, "Bridge588 C2.Default.Name");

        }
    }

    // Bridge[#588]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#588 - {0}")]
    public class Bridge588
    {
        [Test(ExpectedCount = 2)]
        public static void TestUseCase1()
        {
            Assert.AreEqual(3, Bridge588A.Valeur3, "Bridge588 TestUseCase");
            Assert.AreEqual("default", Bridge588C.C1.Default.Value.Name, "Bridge588_2 TestUseCase");
        }
    }
}