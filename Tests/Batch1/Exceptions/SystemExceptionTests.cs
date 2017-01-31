using Bridge.Test.NUnit;

using System;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_SYSTEMEXCEPTION)]
    [TestFixture(TestNameFormat = "SystemException - {0}")]
    public class SystemExceptionTests
    {
        private const string DefaultMessage = "System error.";

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.SystemException", typeof(SystemException).FullName, "Name");
            object d = new SystemException();
            Assert.True(d is SystemException, "is SystemException");
            Assert.True(d is Exception, "is Exception");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new SystemException();
            Assert.True((object)ex is SystemException, "is SystemException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual(SystemExceptionTests.DefaultMessage, ex.Message);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new SystemException("The message");
            Assert.True((object)ex is SystemException, "is SystemException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new SystemException("The message", inner);
            Assert.True((object)ex is SystemException, "is SystemException");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }
    }
}