using Bridge.Test.NUnit;

using System;

#pragma warning disable 162    // CS0162: Unreachable code detected. Disable because we want to assert that code does not reach unreachable parts

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_EXCEPTION)]
    [TestFixture(TestNameFormat = "Try/Catch/Finally - {0}")]
    public class CommonExceptionTests
    {
        public class E1 : Exception
        {
            public E1(string message) : base(message)
            {
            }
        }

        public class E2 : E1
        {
            public E2(string message) : base(message)
            {
            }
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
                Assert.AreEqual("The message", e.Message);
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
                Assert.AreEqual("The message", e.Message);
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
                Assert.AreEqual("The message", e.Message);
                return;
            }
            Assert.Fail("Should not get to statement after catch");
        }

        [Template("(function() {{ throw 'The message'; }})()")]
        private static void ThrowIt() { }

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
                Assert.AreEqual("The message", e.Message);
                return;
            }
            Assert.Fail("Should not get to statement after catch");
        }

        [Test(Name = "Exception - {0}", ExpectedCount = 1)]
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
                Assert.True(true);
                return;
            }
            Assert.Fail("Should not get to statement after catch");
        }
    }
}