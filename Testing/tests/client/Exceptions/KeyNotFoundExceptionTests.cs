using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.CompilerServices;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_KEYNOTFOUNDEXCEPTION)]
    [TestFixture(TestNameFormat = "KeyNotFoundException - {0}")]
    public class KeyNotFoundExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual(typeof(KeyNotFoundException).GetClassName(), "Bridge.KeyNotFoundException", "Name");
            object d = new KeyNotFoundException();
            Assert.True(d is KeyNotFoundException, "is KeyNotFoundException");
            Assert.True(d is Exception, "is Exception");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new KeyNotFoundException();
            Assert.True((object)ex is KeyNotFoundException, "is KeyNotFoundException");
            Assert.AreEqual(ex.InnerException, Script.Undefined, "InnerException");
            Assert.AreEqual(ex.Message, "Key not found.");
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new KeyNotFoundException("The message");
            Assert.True((object)ex is KeyNotFoundException, "is KeyNotFoundException");
            Assert.AreEqual(ex.InnerException, Script.Undefined, "InnerException");
            Assert.AreEqual(ex.Message, "The message");
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new KeyNotFoundException("The message", inner);
            Assert.True((object)ex is KeyNotFoundException, "is KeyNotFoundException");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual(ex.Message, "The message");
        }
    }
}
