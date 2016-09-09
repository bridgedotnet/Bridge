using Bridge.Test;
using System;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_TIMOUTEXCEPTION)]
    [TestFixture(TestNameFormat = "TimeoutException - {0}")]
    public class TimeoutExceptionTests
    {
        private const string DefaultMessage = "The operation has timed out.";

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.TimeoutException", typeof(TimeoutException).FullName, "Name");
            object d = new TimeoutException();
            Assert.True(d is TimeoutException, "is TimeoutException");
            Assert.True(d is SystemException, "is SystemException");
            Assert.True(d is Exception, "is Exception");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new TimeoutException();
            Assert.True((object)ex is TimeoutException, "is TimeoutException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual(DefaultMessage, ex.Message);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new TimeoutException("The message");
            Assert.True((object)ex is TimeoutException, "is TimeoutException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new TimeoutException("The message", inner);
            Assert.True((object)ex is TimeoutException, "is TimeoutException");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }
    }
}