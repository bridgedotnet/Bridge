using System;
using System.Collections;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1713 - {0}")]
    public class Bridge1713
    {
        int Overloaded(Func<int, int> action)
        {
            return 1;
        }

        int Overloaded(Func<int> function)
        {
            return 2;
        }

        int DoSomething1(int i)
        {
            return 0;
        }

        int DoSomething2()
        {
            return 0;
        }

        [Test]
        public void TestOverloadResolution()
        {
            Assert.AreEqual(1, Overloaded(DoSomething1));
            Assert.AreEqual(2, Overloaded(DoSomething2));
        }
    }

    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1713 - {0}")]
    public class Bridge1713MSDN
    {
        static void Overloaded(Action action)
        {
            Assert.Fail("overload with action called");
        }

        static void Overloaded(Func<int> function)
        {
            Assert.True(true, "overload with Func<int> called");
        }

        static int DoSomething()
        {
            Assert.Fail("DoSomething should not be called");
            return 0;
        }

        [Test]
        public void TestOverloadResolutionMSDN1()
        {
            Overloaded(DoSomething);
        }

        static string buffer;

        static void Foo(Func<Func<long>> func)
        {
            buffer += "Func<long>";
        }

        static void Foo(Func<Func<ulong>> func)
        {
            buffer += "Func<ulong>";
        }

        static void Foo(Func<Func<int>> func)
        {
            buffer += "Func<int>";
        }

        static void Foo(Func<Func<decimal>> func)
        {
            buffer += "Func<decimal>";
        }

        static void Foo(Func<Func<string>> func)
        {
            buffer += "Func<string>";
        }

        [Test]
        public static void TestOverloadResolutionMSDN2()
        {
            buffer = string.Empty;
            Foo(() => () => 9L);
            Assert.AreEqual("Func<long>", buffer, "Should call Func<long>");

            buffer = string.Empty;
            Foo(() => () => 5u);
            Assert.AreEqual("Func<long>", buffer, "Should call Func<long>");

            buffer = string.Empty;
            Foo(() => () => 3UL);
            Assert.AreEqual("Func<ulong>", buffer, "Should call Func<ulong>");

            buffer = string.Empty;
            Foo(() => () => 7);
            Assert.AreEqual("Func<int>", buffer, "Should call Func<int>");

            buffer = string.Empty;
            Foo(() => () => 11m);
            Assert.AreEqual("Func<decimal>", buffer, "Should call Func<decimal>");

            buffer = string.Empty;
            Foo(() => () => "15");
            Assert.AreEqual("Func<string>", buffer, "Should call Func<string>");
        }
    }
}