using Bridge.Test;
using System;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_INVALIDCASTEXCEPTION)]
    [TestFixture(TestNameFormat = "InvalidCastException - {0}")]
    public class InvalidCastExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.InvalidCastException", typeof(InvalidCastException).FullName, "Name");
            object d = new InvalidCastException();
            Assert.True(d is InvalidCastException, "is InvalidCastException");
            Assert.True(d is Exception, "is Exception");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new InvalidCastException();
            Assert.True((object)ex is InvalidCastException, "is InvalidCastException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("The cast is not valid.", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new InvalidCastException("The message");
            Assert.True((object)ex is InvalidCastException, "is InvalidCastException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new InvalidCastException("The message", inner);
            Assert.True((object)ex is InvalidCastException, "is InvalidCastException");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }
    }
}