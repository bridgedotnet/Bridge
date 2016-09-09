using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    public class Bridge634A<T>
    {
        public class Nested
        {
            public class SubNested
            {
            }

            public class SubNested<T1>
            {
            }
        }

        public class Nested<T1>
        {
            public class SubNested
            {
            }

            public class SubNested<T2>
            {
            }
        }
    }

    [Namespace("ClientTestLibraryCustom")]
    public class Bridge634B<T>
    {
        public class Nested
        {
            public class SubNested
            {
            }

            public class SubNested<T1>
            {
            }
        }

        public class Nested<T1>
        {
            public class SubNested
            {
            }

            public class SubNested<T2>
            {
            }
        }
    }

    public class Bridge634C
    {
        public class Nested
        {
            public class SubNested
            {
            }

            public class SubNested<T1>
            {
            }
        }

        public class Nested<T1>
        {
            public class SubNested
            {
            }

            public class SubNested<T2>
            {
            }
        }
    }

    [Namespace(false)]
    public class Bridge634D
    {
        public class Nested
        {
        }
    }

    // Bridge[#634]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#634 - {0}")]
    public class Bridge634
    {
        [Test(ExpectedCount = 21)]
        public static void TestUseCase2()
        {
            var a = new Bridge634A<string>();
            var a1 = new Bridge634A<string>.Nested();
            var a2 = new Bridge634A<string>.Nested<int>();
            var a3 = new Bridge634A<string>.Nested.SubNested();
            var a4 = new Bridge634A<string>.Nested.SubNested<int>();
            var a5 = new Bridge634A<string>.Nested<int>.SubNested();
            var a6 = new Bridge634A<string>.Nested<int>.SubNested<int>();

            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1[[String]]", a.GetType().FullName, "Bridge634 A a");
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1.Nested[[String]]", a1.GetType().FullName, "Bridge634 A a1");
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1.Nested$1[[String],[System.Int32, mscorlib]]", a2.GetType().FullName, "Bridge634 A a2");
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1.Nested.SubNested[[String]]", a3.GetType().FullName, "Bridge634 A a3");
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1.Nested.SubNested$1[[String],[System.Int32, mscorlib]]", a4.GetType().FullName, "Bridge634 A a4");
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1.Nested$1.SubNested[[String],[System.Int32, mscorlib]]", a5.GetType().FullName, "Bridge634 A a5");
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1.Nested$1.SubNested$1[[String],[System.Int32, mscorlib],[System.Int32, mscorlib]]", a6.GetType().FullName, "Bridge634 A a6");

            var b = new Bridge634B<string>();
            var b1 = new Bridge634B<string>.Nested();
            var b2 = new Bridge634B<string>.Nested<int>();
            var b3 = new Bridge634B<string>.Nested.SubNested();
            var b4 = new Bridge634B<string>.Nested.SubNested<int>();
            var b5 = new Bridge634B<string>.Nested<int>.SubNested();
            var b6 = new Bridge634B<string>.Nested<int>.SubNested<int>();

            Assert.AreEqual("ClientTestLibraryCustom.Bridge634B$1[[String]]", b.GetType().FullName, "Bridge634 B b");
            Assert.AreEqual("ClientTestLibraryCustom.Bridge634B$1.Nested[[String]]", b1.GetType().FullName, "Bridge634 B b1");
            Assert.AreEqual("ClientTestLibraryCustom.Bridge634B$1.Nested$1[[String],[System.Int32, mscorlib]]", b2.GetType().FullName, "Bridge634 B b2");
            Assert.AreEqual("ClientTestLibraryCustom.Bridge634B$1.Nested.SubNested[[String]]", b3.GetType().FullName, "Bridge634 B b3");
            Assert.AreEqual("ClientTestLibraryCustom.Bridge634B$1.Nested.SubNested$1[[String],[System.Int32, mscorlib]]", b4.GetType().FullName, "Bridge634 B b4");
            Assert.AreEqual("ClientTestLibraryCustom.Bridge634B$1.Nested$1.SubNested[[String],[System.Int32, mscorlib]]", b5.GetType().FullName, "Bridge634 B b5");
            Assert.AreEqual("ClientTestLibraryCustom.Bridge634B$1.Nested$1.SubNested$1[[String],[System.Int32, mscorlib],[System.Int32, mscorlib]]", b6.GetType().FullName, "Bridge634 B b6");

            var c = new Bridge634C();
            var c1 = new Bridge634C.Nested();
            var c2 = new Bridge634C.Nested<int>();
            var c3 = new Bridge634C.Nested.SubNested();
            var c4 = new Bridge634C.Nested.SubNested<int>();
            var c5 = new Bridge634C.Nested<int>.SubNested();
            var c6 = new Bridge634C.Nested<int>.SubNested<int>();

            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C", c.GetType().FullName, "Bridge634 C c");
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C.Nested", c1.GetType().FullName, "Bridge634 C c1");
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C.Nested$1[[System.Int32, mscorlib]]", c2.GetType().FullName, "Bridge634 C c2");
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C.Nested.SubNested", c3.GetType().FullName, "Bridge634 C c3");
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C.Nested.SubNested$1[[System.Int32, mscorlib]]", c4.GetType().FullName, "Bridge634 C c4");
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C.Nested$1.SubNested[[System.Int32, mscorlib]]", c5.GetType().FullName, "Bridge634 C c5");
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C.Nested$1.SubNested$1[[System.Int32, mscorlib],[System.Int32, mscorlib]]", c6.GetType().FullName, "Bridge634 C c6");
        }
    }
}