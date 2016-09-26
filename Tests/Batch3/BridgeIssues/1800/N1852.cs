using System;
using Bridge.Test;
using static Bridge.ClientTest.Batch3.BridgeIssues.Bridge1852DispatcherMessageExtensions;
using static Bridge.ClientTest.Batch3.BridgeIssues.Bridge1852DispatcherMessageExtensions.Class1;
using static Bridge.ClientTest.Batch3.BridgeIssues.Bridge1852DispatcherMessageExtensions.Class1.Class2;
using static Bridge.ClientTest.Batch3.BridgeIssues.Bridge1852Test1<string>;
#pragma warning disable 169

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1852 - {0}")]
    public class Bridge1852
    {
        //This test case contains dummy code just to check that compilation will not failed

        public class MatchDispatcherMessages : IMatchDispatcherMessages
        {
            public void DoSomething<T>(string name)
            {
            }
        }

        public static int DoSomething<T>(IMatchDispatcherMessages matcher, Class1.Class2 cls, Class2 cls1, Aux1.Aux2<int> aux1, Aux2<int>.Aux1 aux2)
        {
            var a = new Aux1();
            var a1 = new Aux2<int>();
            Test1Method();
            Test1Method2<string>();

            var c6 = new Class1.Class2.Class3.Class4();
            matcher.DoSomething<T>(null);
            var c1 = new Bridge1852Test1<int>.Aux1();
            var c2 = new Bridge1852DispatcherMessageExtensions.Class1();
            var c3 = new Bridge1852DispatcherMessageExtensions.Class1.Class2();
            var c4 = new Class2();
            var c5 = new Class1.Class2();

            return 1;
        }

        [Test]
        public void TestCase()
        {
            Assert.AreEqual(1, DoSomething<int>(new MatchDispatcherMessages(), null, null, null, null));
        }
    }

    public class Bridge1852Test1<T>
    {
        public Aux1 field;

        public static void Test1Method()
        {
        }

        public static void Test1Method2<T1>()
        {
        }

        public class Aux1
        {
            public class Aux2<T1>
            {
            }
        }

        public class Aux2<T1>
        {
            public class Aux1
            {
            }
        }
    }

    public static class Bridge1852DispatcherMessageExtensions
    {
        public interface IMatchDispatcherMessages
        {
            void DoSomething<T>(string name);
        }

        private static Class1 cls1;
        private static Class2 cls2;
        private static Class1.Class2 cls3;
        private static Class2.Class3 cls4;
        private static Class1.Class2.Class3 cls5;
        private static Class2.Class3.Class4 cls6;
        private static Class1.Class2.Class3.Class4 cls7;
        private static Class3 cls8;

        public class Class1
        {
            public class Class2
            {
                public class Class3
                {
                    public class Class4
                    {

                    }
                }
            }
        }
    }
}