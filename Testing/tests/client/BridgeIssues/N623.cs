using System;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    public class Bridge623A
    {
        public Bridge623A(int foo, Func<int> func)
        {
            this.foo = foo;
            this.func = func;
        }

        public int foo;
        public Func<int> func;

        public virtual int Call()
        {
            return this.func();
        }
    }
    public class Bridge623B1: Bridge623A
    {
        public Bridge623B1(int foo, Func<int> func): base(foo, func)
        {
        }

        public virtual int GetFoo()
        {
            return 2 * this.foo;
        }
    }
    public class Bridge623B2 : Bridge623B1
    {
        public Bridge623B2(int foo, Func<int> func): base(foo, func)
        {
        }

        public override int GetFoo()
        {
            return 3 * this.foo;
        }

        public override int Call()
        {
            return this.func() + 1000;
        }
    }

    // Bridge[#623]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#623 - {0}")]
    public class Bridge623
    {
        [Test(ExpectedCount = 8)]
        public static void TestUseCase()
        {
            Func<int> func1 = () => Script.Caller<Bridge623A>().foo;

            var point1 = new Bridge623A(1, func1);
            var point2 = new Bridge623A(2, func1);

            Assert.AreEqual(point1.Call(), 1, "Bridge623A point1 func1");
            Assert.AreEqual(point2.Call(), 2, "Bridge623A point2 func1");

            var point3 = new Bridge623B1(3, func1);
            var point4 = new Bridge623B1(4, func1);

            Assert.AreEqual(point3.Call(), 3, "Bridge623B1 point3 func1");
            Assert.AreEqual(point4.Call(), 4, "Bridge623B1 point4 func1");

            Func<int> func2 = () => Script.Caller<Bridge623B1>().GetFoo();

            var point5 = new Bridge623B1(5, func2);
            var point6 = new Bridge623B1(6, func2);

            Assert.AreEqual(point5.Call(), 10, "Bridge623B1 point5 func2");
            Assert.AreEqual(point6.Call(), 12, "Bridge623B1 point6 func2");

            Func<int> func3 = () => Script.Caller<Bridge623B2>().GetFoo();

            var point7 = new Bridge623B2(7, func3);
            var point8 = new Bridge623B2(8, func3);

            Assert.AreEqual(point7.Call(), 1021, "Bridge623B2 point7 func3");
            Assert.AreEqual(point8.Call(), 1024, "Bridge623B2 point8 func3");
        }
    }
}