using Bridge.Test;
using System;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_NULLREFERENCEEXCEPTION)]
    [TestFixture(TestNameFormat = "NullReferenceException - {0}")]
    public class NullReferenceExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.NullReferenceException", typeof(NullReferenceException).FullName, "Name");
            object d = new NullReferenceException();
            Assert.True(d is NullReferenceException, "is NullReferenceException");
            Assert.True(d is Exception, "is Exception");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new NullReferenceException();
            Assert.True((object)ex is NullReferenceException, "is NullReferenceException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("Object is null.", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new NullReferenceException("The message");
            Assert.True((object)ex is NullReferenceException, "is NullReferenceException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new NullReferenceException("The message", inner);
            Assert.True((object)ex is NullReferenceException, "is NullReferenceException");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test(Name = "NullReferenceException - {0}", ExpectedCount = 1)]
        public void AccessingAFieldOnANullObjectCausesANullReferenceException()
        {
            try
            {
                dynamic d = null;
#pragma warning disable 219
                int x = d.someField;
#pragma warning restore 219
                Assert.Fail("A NullReferenceException should have been thrown");
            }
            catch (NullReferenceException ex)
            {
                Exception inner = ex.InnerException;
                Assert.NotNull(inner, "Inner Exception");
            }
            catch (Exception ex)
            {
                Assert.Fail("Expected NullReferenceException, got type " + ex.GetType());
            }
        }
    }
}