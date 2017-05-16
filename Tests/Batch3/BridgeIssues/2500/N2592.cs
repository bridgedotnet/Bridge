using System;
using System.Text.RegularExpressions;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2592 - {0}")]
    public class Bridge2592
    {
        private static void MethodThrowsException1()
        {
            string nulref = null;
            var ch = nulref.CharAt(1);
        }

        private static void MethodThrowsException2()
        {
            throw new Exception("ThrownFromMethod2");
        }

        private static int Prop1
        {
            get
            {
                throw new Exception("ThrownFromGetterProp1");
            }
            set
            {
                throw new Exception("ThrownFromSetterProp1");
            }
        }

        [Test]
        public static void TestStackTrace()
        {
            try
            {
                MethodThrowsException1();
                Assert.Fail("Should have thrown at MethodThrowsException1");
            }
            catch (Exception e)
            {
                AssertStackTrace(e.StackTrace, "MethodThrowsException1");
            }

            try
            {
                MethodThrowsException2();
                Assert.Fail("Should have thrown at MethodThrowsException2");
            }
            catch (Exception e)
            {
                AssertStackTrace(e.StackTrace, "MethodThrowsException2");
            }

            /*try
            {
                var i = Prop1;
                Assert.Fail("Should have thrown at getter Prop1");
            }
            catch (Exception e)
            {
                AssertStackTrace(e.StackTrace, "Prop1.get");
            }

            try
            {
                Prop1 = 1;
                Assert.Fail("Should have thrown at setter Prop1");
            }
            catch (Exception e)
            {
                AssertStackTrace(e.StackTrace, "Prop1.set");
            }*/
        }

        private static void AssertStackTrace(string stack, string fragment)
        {
            if (stack == null)
            {
                Assert.Fail(stack);
                return;
            }

            if (stack.Contains(fragment))
            {
                Assert.True(true);
            }
            else
            {
                Assert.Fail(stack);
            }
        }
    }
}