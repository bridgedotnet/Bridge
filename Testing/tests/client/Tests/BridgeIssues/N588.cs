using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    internal static class Bridge588B
    {
        internal const int Valeur1 = 1;
        internal const int Valeur2 = Valeur1 + 1;

    }

    [FileName("testBridgeIssues.js")]
    public static class Bridge588A
    {
        public static int Add(int a, int b)
        {
            return a + b;
        }
        public static int Valeur3 = Add(Bridge588B.Valeur2, 1);
    }

    // Bridge[#588]
    [FileName("testBridgeIssues.js")]
    internal class Bridge588
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            assert.Equal(Bridge588A.Valeur3, 3, "Bridge588 TestUseCase");
        }
    }

    // Bridge[#588]
    // Additional test
    [FileName("testBridgeIssues.js")]
    public class Bridge588_2
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

        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            assert.Equal(C1.Default.Value.Name, "default", "Bridge588_2 TestUseCase");
        }
    }
}