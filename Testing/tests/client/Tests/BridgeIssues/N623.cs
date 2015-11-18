using System;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
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

    [FileName("testBridgeIssues.js")]
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

    [FileName("testBridgeIssues.js")]
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
    [FileName("testBridgeIssues.js")]
    internal class Bridge623
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(8);

            Func<int> func1 = () => Script.Caller<Bridge623A>().foo;

            var point1 = new Bridge623A(1, func1);
            var point2 = new Bridge623A(2, func1);

            assert.Equal(point1.Call(), 1, "Bridge623A point1 func1");
            assert.Equal(point2.Call(), 2, "Bridge623A point2 func1");

            var point3 = new Bridge623B1(3, func1);
            var point4 = new Bridge623B1(4, func1);

            assert.Equal(point3.Call(), 3, "Bridge623B1 point3 func1");
            assert.Equal(point4.Call(), 4, "Bridge623B1 point4 func1");

            Func<int> func2 = () => Script.Caller<Bridge623B1>().GetFoo();

            var point5 = new Bridge623B1(5, func2);
            var point6 = new Bridge623B1(6, func2);

            assert.Equal(point5.Call(), 10, "Bridge623B1 point5 func2");
            assert.Equal(point6.Call(), 12, "Bridge623B1 point6 func2");

            Func<int> func3 = () => Script.Caller<Bridge623B2>().GetFoo();

            var point7 = new Bridge623B2(7, func3);
            var point8 = new Bridge623B2(8, func3);

            assert.Equal(point7.Call(), 1021, "Bridge623B2 point7 func3");
            assert.Equal(point8.Call(), 1024, "Bridge623B2 point8 func3");
        }
    }
}