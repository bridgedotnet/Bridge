using System;
using System.Reflection;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2212 - {0}")]
    [Reflectable]
    public class Bridge2212
    {
        int test = 0;

        void Run()
        {
            var mytest = 1;
            Func<Action> a = () => {
                Action b = () => {
                    test = mytest;
                };
                return b;
            };

            for (var i = 0; i < 1000; i++)
            {
                a()();
            }
        }

        [Test]
        public static void TestDelegateBindCache()
        {
            var app = new Bridge2212();
            app.Run();
            var length = Script.Write<int>("app.$$bind ? app.$$bind.length : 0;");

            Assert.AreEqual(0, length);
        }
    }
}