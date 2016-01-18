using Bridge;
using Bridge.Test;
using Bridge.ClientTest;

using System;
#pragma warning disable 162	// CS0162: Unreachable code detected. Disable because we want to assert that code does not reach unreachable parts

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_EXCEPTION)]
    [TestFixture(TestNameFormat = "Try/Catch/Finally - {0}")]
    public class ExceptionTests
    {
        public class E1 : Exception
        {
            public E1(string message) : base(message) { }
        }
        public class E2 : E1
        {
            public E2(string message) : base(message) { }
        }

        [Test]
        public void ThrowingAndCatchingExceptionsWorks()
        {
            try
            {
                throw new E2("The message");
                Assert.Fail("Should not get to statement after throw");
            }
            catch (E2 e)
            {
                Assert.AreEqual(e.Message, "The message");
                return;
            }
            Assert.Fail("Should not get to statement after catch");
        }

        [Test]
        public void ExceptionOfWrongTypeIsNotCaught()
        {
            try
            {
                throw new E1("The message");
                Assert.Fail("Should not get to statement after throw");
            }
            catch (E2)
            {
                Assert.Fail("Should not catch E2");
            }
            catch (E1 e)
            {
                Assert.AreEqual(e.Message, "The message");
                return;
            }
            Assert.Fail("Should not get to statement after catch");
        }

        [Test]
        public void CanCatchExceptionAsBaseType()
        {
            try
            {
                throw new E2("The message");
                Assert.Fail("Should not get to statement after throw");
            }
            catch (E1 e)
            {
                Assert.AreEqual(e.Message, "The message");
                return;
            }
            Assert.Fail("Should not get to statement after catch");
        }

        //[System.Runtime.CompilerServices.InlineCode("(function() {{ throw 'The message'; }})()")]
        [Template("(function() {{ throw 'The message'; }})()")]
        private static void ThrowIt() { }

        [IgnoreTest(Until = Constants.IGNORE_DATE)]
        [Test]
        public void CanCatchStringAsException()
        {
            try
            {
                ThrowIt();
                Assert.Fail("Should not get to statement after throw");
            }
            catch (E1)
            {
                Assert.Fail("Should not catch E1");
            }
            catch (Exception e)
            {
                Assert.AreEqual(e.Message, "The message");
                return;
            }
            Assert.Fail("Should not get to statement after catch");
        }

        [IgnoreTest(Until = Constants.IGNORE_DATE)]
        [Test(Name = "Exception - {0}", ExpectedCount = 0)]
        public void CanCatchStringAsCatchAll()
        {
            try
            {
                ThrowIt();
                Assert.Fail("Should not get to statement after throw");
            }
            catch (E1)
            {
                Assert.Fail("Should not catch E1");
            }
            catch
            {
                return;
            }
            Assert.Fail("Should not get to statement after catch");
        }
    }
}
