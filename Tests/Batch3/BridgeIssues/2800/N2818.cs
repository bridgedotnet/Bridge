using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2818 - {0}")]
    public class Bridge2818
    {
        public struct MyStruct
        {
            public string Value
            {
                get;
                set;
            }

            public MyStruct(string value)
            {
                this.Value = value;
            }

            [Template(Fn = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2818.MyStructToString")]
            public override extern string ToString();

            [Template(Fn = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2818.MyStructGetHashCode")]
            public override extern int GetHashCode();

            [Template("Bridge.ClientTest.Batch3.BridgeIssues.Bridge2818.TestMethod({i})", Fn = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2818.TestMethod")]
            public static extern int TestMethod(int i);
        }

        public static string MyStructToString(MyStruct s)
        {
            return s.Value;
        }

        public static int MyStructGetHashCode(MyStruct s)
        {
            return 143;
        }

        public static int TestMethod(int i)
        {
            return i;
        }

        [Test]
        public static void TestFnProperty()
        {
            Assert.AreEqual("abc", new MyStruct("abc").ToString());
            Assert.AreEqual(143, new MyStruct("abc").GetHashCode());

            object o = 1d;
            Assert.AreEqual(1d.GetHashCode(), o.GetHashCode());

            Assert.AreEqual(10, MyStruct.TestMethod(10));

            Func<int, int> func = MyStruct.TestMethod;
            Assert.AreEqual(10, func(10));
        }
    }
}