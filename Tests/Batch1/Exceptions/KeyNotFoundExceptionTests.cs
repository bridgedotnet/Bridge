using Bridge.Test;
using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_KEYNOTFOUNDEXCEPTION)]
    [TestFixture(TestNameFormat = "KeyNotFoundException - {0}")]
    public class KeyNotFoundExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.Collections.Generic.KeyNotFoundException", typeof(KeyNotFoundException).FullName, "Name");
            object d = new KeyNotFoundException();
            Assert.True(d is KeyNotFoundException, "is KeyNotFoundException");
            Assert.True(d is Exception, "is Exception");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new KeyNotFoundException();
            Assert.True((object)ex is KeyNotFoundException, "is KeyNotFoundException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("Key not found.", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new KeyNotFoundException("The message");
            Assert.True((object)ex is KeyNotFoundException, "is KeyNotFoundException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new KeyNotFoundException("The message", inner);
            Assert.True((object)ex is KeyNotFoundException, "is KeyNotFoundException");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }
    }
}