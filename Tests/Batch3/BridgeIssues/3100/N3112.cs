using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3112 - {0}")]
    public class Bridge3112
    {
        class SomeDisposable : IDisposable
        {
            public int Data;

            public void Dispose()
            {
            }
        }

        class A
        {
            public int Number;

            public void DoSomething()
            {
                for (var i = 0; i < 1; i++)
                {
                    using (var d = new SomeDisposable())
                    {
                        d.Data = 7;

                        Action<int> action = (n) => { this.Number = n; var d1 = d; };

                        action(d.Data);
                    }
                }
            }
        }

        [Test]
        public static void TestUsingScopeWitinLoopInLambda()
        {
            var a = new A();
            a.DoSomething();

            Assert.AreEqual(7, a.Number);
        }
    }
}