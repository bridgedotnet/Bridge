namespace Test.BridgeIssues.N3488
{
    /// <summary>
    /// The output here must be something like:
    /// require(["Test", "Test", "Test"], function (Test, lib2, lib3) {
    /// not this:
    /// require(["Test"], function (Test) {
    /// 
    /// In othre words, should require the same name three times, and
    /// for each, include the respective namespace as one of the
    /// function's parameters.
    /// </summary>
    public class N3488
    {
        public static void Main()
        {
            var a = new Library1.TestModule.A();
            var aa = new Library1.TestModule.AA();
            var b = new Library2.TestModule.B();
            var c = new Library3.TestModule.C();
        }
    }
}

namespace Library1
{
    using Bridge;

    [External]
    [Module("Test")]
    public static class TestModule
    {
        public class A
        {
        }

        public class AA
        {
        }
    }
}

namespace Library2
{
    using Bridge;

    [External]
    [Module("Test", ExportAsNamespace = "lib2")]
    public static class TestModule
    {
        public class B
        {
        }
    }
}

namespace Library3
{
    using Bridge;

    [External]
    [Module("Test", ExportAsNamespace = "lib3")]
    public static class TestModule
    {
        public class C
        {
        }
    }
}
