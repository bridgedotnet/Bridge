using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2318 - {0}")]
    public class Bridge2318
    {
        public struct MyStruct
        {

        }

        [External]
        [Convention(Target = ConventionTarget.Member, Notation = Notation.CamelCase)]
        public class MyClass
        {
#pragma warning disable CS0626 // Method, operator, or accessor is marked external and has no attributes on it
            public extern bool IsBoxed(object o);
            public extern bool IsBoxedArray(object o);
#pragma warning restore CS0626 // Method, operator, or accessor is marked external and has no attributes on it
        }

        [Test]
        public static void TestBoxing()
        {
            object o1 = 1;
            IComparable o2 = 1;
            object[] o3 = new object[] { 1, true };
            object o4 = new MyStruct();
            object o5 = 1.0m;
            object o6 = 1L;

            Assert.AreEqual(true, o1["$boxed"]);
            Assert.AreEqual(true, o2["$boxed"]);
            Assert.AreEqual(true, o3[0]["$boxed"]);
            Assert.AreEqual(true, o3[1]["$boxed"]);
            Assert.Null(o4["$boxed"]);
            Assert.Null(o5["$boxed"]);
            Assert.Null(o6["$boxed"]);

            MyClass c = null;
            //@ c = {isBoxed: function (o) {return o.$boxed;}, isBoxedArray: function (o) {return o[0].$boxed;}};
            Assert.False(c.IsBoxed(o1));
            Assert.False(c.IsBoxed(o2));
            Assert.False(c.IsBoxedArray(o3));
        }
    }
}