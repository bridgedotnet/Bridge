using Bridge.Test;

using System;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_OUTOFMEMORYEXCEPTION)]
    [TestFixture(TestNameFormat = "OutOfMemoryException - {0}")]
    public class OutOfMemoryExceptionTests
    {
        private const string DefaultMessage = "Insufficient memory to continue the execution of the program.";

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.OutOfMemoryException", typeof(OutOfMemoryException).FullName, "Name");
            object d = new OutOfMemoryException();
            Assert.True(d is OutOfMemoryException, "is OutOfMemoryException");
            Assert.True(d is SystemException, "is SystemException");
            Assert.True(d is Exception, "is Exception");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new OutOfMemoryException();
            Assert.True((object)ex is OutOfMemoryException, "is OutOfMemoryException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual(OutOfMemoryExceptionTests.DefaultMessage, ex.Message);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new OutOfMemoryException("The message");
            Assert.True((object)ex is OutOfMemoryException, "is OutOfMemoryException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new OutOfMemoryException("The message", inner);
            Assert.True((object)ex is OutOfMemoryException, "is OutOfMemoryException");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }
    }
}