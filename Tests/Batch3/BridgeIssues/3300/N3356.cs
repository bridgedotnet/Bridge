using System;
using Bridge.Html5;
using Bridge.Test.NUnit;
using System.Reflection;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// This consists in checking whether reflecion unboxing works with
    /// DateTime and integer.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3356 - {0}")]
    public class Bridge3356
    {
        [Reflectable]
        public class Box
        {
            public void PerformTest()
            {
                DateTime time = DateTime.MinValue;
                Type type = GetType();
                MethodInfo method = type.GetMethod("CheckDateTime");

                method.Invoke(this, new object[] { time });

                method = type.GetMethod("CheckInt");

                method.Invoke(this, new object[] { 5 });
            }

            public void CheckDateTime(DateTime time)
            {
                if (DateTime.MaxValue > time)
                {
                    Assert.True(time == DateTime.MinValue, "Provided DateTime value is DateTime.MinValue.");
                }
                else
                {
                    Assert.Fail("Provided DateTime value is greater than DateTime.MaxValue (should be equal to DateTime.MinValue).");
                }
            }

            public void CheckInt(object i)
            {
                if (i is int)
                {
                    Assert.AreEqual(5, (int)i, "Provided object value is Integer and its value is 5.");
                }
                else
                {
                    Assert.Fail("Provided object is not an Integer.");
                }
            }
        }

        [Test(ExpectedCount = 2)]
        public static void TestReflectionUnbox()
        {
            Box box = new Box();
            box.PerformTest();
        }
    }
}