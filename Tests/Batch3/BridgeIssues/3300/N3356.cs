using System;
using Bridge.Html5;
using Bridge.Test.NUnit;
using System.Reflection;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3356 - {0}")]
    public class Bridge3356
    {
        [Reflectable]
        public class Box
        {
            public void DoStuff()
            {
                DateTime time = DateTime.MinValue;
                Type type = GetType();
                MethodInfo method = type.GetMethod("Foo");

                method.Invoke(this, new object[] { time });

                method = type.GetMethod("Foo2");

                method.Invoke(this, new object[] { 5 });
            }

            public void Foo(DateTime time)
            {                
                if (DateTime.MaxValue > time)
                {
                    Assert.True(time == DateTime.MinValue);
                }
            }

            public void Foo2(object i)
            {
                if (i is int)
                {
                    Assert.AreEqual(5, (int)i);
                }
            }
        }

        [Test(ExpectedCount = 2)]
        public static void TestReflectionUnbox()
        {
            Box box = new Box();
            box.DoStuff();
        }
    }
}