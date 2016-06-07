using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1341 - {0}")]
    public class Bridge1341
    {
        [Test]
        public static void TestPlainObject()
        {
            var o1 = Script.ToPlainObject(new { A = 1 });
            Assert.NotNull(o1, "o1 not null");
            Assert.AreEqual(1, o1.A, "o1.A == 1");

            Assert.Null(o1["getHashCode"], "o1 has no getHashCode");
            Assert.Null(o1["toJSON"], "o1 has no toJSON");
            Assert.Null(o1["$constructor"], "o1 has no $constructor");
            Assert.Null(o1["equals"], "o1 has no equals");
            Assert.NotNull(o1["a"], "o1 has a");

            var o2 = Script.ToPlainObject(new { A = 1, B = "2" });
            Assert.NotNull(o2, "o2 not null");
            Assert.AreEqual(1, o2.A, "o2.A == 1");
            Assert.AreEqual("2", o2.B, "o2.B == \"2\"");

            var o3 = Script.ToPlainObject(new { A = 1, B = new SomeStructA() { Value1 = 1 } });
            Assert.NotNull(o3, "o3 not null");
            Assert.AreEqual(1, o3.A, "o3.A == 1");
            Assert.NotNull(o3.B, "o3.B not null");
            Assert.AreEqual(1, o3.B.Value1, "o3.B.Value1 == 1");

            var o4 = Script.ToPlainObject(new { A = 1, B = new SomeStructA() { Value1 = 1 } });
            Assert.NotNull(o4, "o4 not null");
            Assert.AreEqual(1, o4.A, "o4.A == 1");
            Assert.NotNull(o4.B, "o4.B not null");
            Assert.AreEqual(1, o4.B.Value1, "o4.B.Value1 == 1");

            var o5 = Script.ToPlainObject(new { A = 1, B = new SomeClassB() { Value1 = 1, Value2 = new SomeStructA() { Value1 = 1 } } });
            Assert.NotNull(o5, "o5 not null");
            Assert.AreEqual(1, o5.A, "o5.A == 1");
            Assert.NotNull(o5.B, "o5.B not null");
            Assert.AreEqual(1, o5.B.Value1, "o5.B.Value1 == 1");
            Assert.NotNull(o5.B.Value2, "o5.B.Value2 not null");
            Assert.AreEqual(1, o5.B.Value2.Value1, "o5.B.Value2.Value1 == 1");

            Assert.Null(o5["getHashCode"], "o5 has no getHashCode");
            Assert.Null(o5["toJSON"], "o5 has no toJSON");
            Assert.Null(o5["$constructor"], "o5 has no $constructor");
            Assert.Null(o5["equals"], "o5 has no equals");
            Assert.NotNull(o5["a"], "o5 has a");
            Assert.NotNull(o5["b"], "o5 has b");
            Assert.NotNull(o5.B["getValue1"], "o5.B has getValue1");
        }

        [Test]
        public static void TestAnonymousTypeCreation()
        {
            var o1 = new { A = 1 };
            Assert.NotNull(o1, "o1 not null");
            Assert.AreEqual(1, o1.A, "o1.A == 1");

            Assert.NotNull(o1["getHashCode"], "o1 has getHashCode");
            Assert.NotNull(o1["toJSON"], "o1 has toJSON");
            Assert.NotNull(o1["$constructor"], "o1 has $constructor");
            Assert.NotNull(o1["equals"], "o1 has equals");
            Assert.NotNull(o1["getA"], "o1 has getA");

            var o2 = new { A = 1, B = "2" };
            Assert.NotNull(o2, "o2 not null");
            Assert.AreEqual(1, o2.A, "o2.A == 1");
            Assert.AreEqual("2", o2.B, "o2.B == \"2\"");

            var o3 = new { A = 1, B = new SomeStructA() { Value1 = 1 } };
            Assert.NotNull(o3, "o3 not null");
            Assert.AreEqual(1, o3.A, "o3.A == 1");
            Assert.NotNull(o3.B, "o3.B not null");
            Assert.AreEqual(1, o3.B.Value1, "o3.B.Value1 == 1");

            var o4 = new { A = 1, B = new SomeStructA() { Value1 = 1 } };
            Assert.NotNull(o4, "o4 not null");
            Assert.AreEqual(1, o4.A, "o4.A == 1");
            Assert.NotNull(o4.B, "o4.B not null");
            Assert.AreEqual(1, o4.B.Value1, "o4.B.Value1 == 1");

            var o5 = new { A = 1, B = new SomeClassB() { Value1 = 1, Value2 = new SomeStructA() { Value1 = 1 } } };
            Assert.NotNull(o5, "o5 not null");
            Assert.AreEqual(1, o5.A, "o5.A == 1");
            Assert.NotNull(o5.B, "o5.B not null");
            Assert.AreEqual(1, o5.B.Value1, "o5.B.Value1 == 1");
            Assert.NotNull(o5.B.Value2, "o5.B.Value2 not null");
            Assert.AreEqual(1, o5.B.Value2.Value1, "o5.B.Value2.Value1 == 1");

            Assert.NotNull(o5["getHashCode"], "o5 has getHashCode");
            Assert.NotNull(o5["toJSON"], "o5 has toJSON");
            Assert.NotNull(o5["$constructor"], "o5 has $constructor");
            Assert.NotNull(o5["equals"], "o5 has equals");
            Assert.NotNull(o5["getA"], "o5 has getA");
            Assert.NotNull(o5["getB"], "o5 has getB");
            Assert.NotNull(o5.B["getValue1"], "o5.B has getValue1");
        }

        [Test]
        public static void TestDiffStructHashCode()
        {
            var s = new SomeStructA() { Value1 = 10 };
            var s1 = new SomeStructA1() { Value1 = 10 };

            Assert.AreNotEqual(s.GetHashCode(), s1.GetHashCode(), "Structs of diff types with same fields and values should give diff hash codes");

            var s2 = new SomeStructA2() { Value2 = 10 };

            Assert.AreNotEqual(s.GetHashCode(), s2.GetHashCode(), "Structs of diff types with same values should give diff hash codes");
        }

        [Test]
        public static void TestDiffAnonymousTypesHashCode()
        {
            var s = new { Value1 = 10 };
            var s1 = new { Value2 = 10 };

            Assert.AreNotEqual(s.GetHashCode(), s1.GetHashCode(), "Same field values should give diff hash codes");
        }

        private static void Test(object[] values)
        {
            var o1 = values[0];
            var o2 = values[1];
            var o3 = values[2];
            var o4 = values[3];
            var o5 = values[4];
            var o6 = values[5];

            Assert.AreEqual(o1.GetHashCode(), o2.GetHashCode(), "GetHashCode o1 == o2");
            Assert.AreNotEqual(o1.GetHashCode(), o3.GetHashCode(), "GetHashCode o1 != o3");
            Assert.AreNotEqual(o1.GetHashCode(), o4.GetHashCode(), "GetHashCode o1 != o4");
            Assert.AreEqual(o1.GetHashCode(), o5.GetHashCode(), "GetHashCode o1 == o5");
            Assert.AreNotEqual(o1.GetHashCode(), o6.GetHashCode(), "GetHashCode o1 != o6");

            Assert.True(o1.Equals(o2), "Equals o1 == o2");
            Assert.False(o1.Equals(o3), "Equals o1 != o3");
            Assert.False(o1.Equals(o4), "Equals o1 != o4");
            Assert.True(o1.Equals(o5), "Equals o1 == o5");
            Assert.False(o1.Equals(o6), "Equals o1 != o6");

            Assert.True(o2.Equals(o1), "Equals o2 == o1");
            Assert.False(o3.Equals(o1), "Equals o3 != o1");
            Assert.False(o4.Equals(o1), "Equals o4 != o1");
            Assert.True(o5.Equals(o1), "Equals o5 == o1");
            Assert.False(o6.Equals(o1), "Equals o6 != o1");
        }

        [Test]
        public static void Test1AnonymousType()
        {
            var o1 = new { A = 1 };
            var o2 = new { A = 1 };
            var o3 = new { A = 2 };
            var o4 = new { B = 1 };
            var o5 = o1;
            var o6 = o3;

            object[] values = new object[] { o1, o2, o3, o4, o5, o6};

            Test(values);
        }

        [Test]
        public static void Test2AnonymousType()
        {
            var o1 = new { A = 1, B = "2" };
            var o2 = new { A = 1, B = "2" };
            var o3 = new { A = 1, B = "3" };
            var o4 = new { B = 1, C = "2" };
            var o5 = o1;
            var o6 = o3;

            object[] values = new object[] { o1, o2, o3, o4, o5, o6 };

            Test(values);
        }

        [Test]
        public static void Test3AnonymousType()
        {
            var o1 = new { A = 1, B = new SomeClassA() { Value1 = 1 } };
            var o2 = o1;
            var o3 = new { A = 1, B = new SomeClassA() { Value1 = 1 } };
            var o4 = new { B = 1, C = new SomeClassA() { Value1 = 1 } };
            var o5 = o1;
            var o6 = o3;

            object[] values = new object[] { o1, o2, o3, o4, o5, o6 };

            Test(values);
        }

        [Test]
        public static void Test4AnonymousType()
        {
            var o1 = new { A = 1, B = new SomeStructA() { Value1 = 1 } };
            var o2 = new { A = 1, B = new SomeStructA() { Value1 = 1 } };
            var o3 = new { A = 1, B = new SomeStructA() { Value1 = 2 } };
            var o4 = new { B = 1, A = new SomeStructA() { Value1 = 1 } };
            var o5 = o1;
            var o6 = o3;

            object[] values = new object[] { o1, o2, o3, o4, o5, o6 };

            Test(values);
        }

        [Test]
        public static void Test5AnonymousType()
        {
            var o1 = new { A = 1, B = new SomeClassB() { Value1 = 1, Value2 = new SomeStructA() { Value1 = 1} } };
            var o2 = o1;
            var o3 = new { A = 1, B = new SomeClassB() { Value1 = 1, Value2 = new SomeStructA() { Value1 = 1 } } };
            var o4 = new { B = 1, C = new SomeClassB() { Value1 = 1, Value2 = new SomeStructA() { Value1 = 1 } } };
            var o5 = o1;
            var o6 = o3;

            object[] values = new object[] { o1, o2, o3, o4, o5, o6 };

            Test(values);
        }

        class SomeClassA
        {
            public int Value1 { get; set; }
        }

        struct SomeStructA
        {
            public int Value1 { get; set; }
        }

        struct SomeStructA1
        {
            public int Value1 { get; set; }
        }

        struct SomeStructA2
        {
            public int Value2 { get; set; }
        }

        class SomeClassB
        {
            public int Value1 { get; set; }
            public SomeStructA Value2 { get; set; }
        }
    }
}
