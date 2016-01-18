using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.CompilerServices;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_INVALIDCASTEXCEPTION)]
    [TestFixture(TestNameFormat = "InvalidCastException - {0}")]
    public class InvalidCastExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual(typeof(InvalidCastException).GetClassName(), "Bridge.InvalidCastException", "Name");
            object d = new InvalidCastException();
            Assert.True(d is InvalidCastException, "is InvalidCastException");
            Assert.True(d is Exception, "is Exception");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new InvalidCastException();
            Assert.True((object)ex is InvalidCastException, "is InvalidCastException");
            Assert.AreEqual(ex.InnerException, Script.Undefined, "InnerException");
            Assert.AreEqual(ex.Message, "The cast is not valid.");
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new InvalidCastException("The message");
            Assert.True((object)ex is InvalidCastException, "is InvalidCastException");
            Assert.AreEqual(ex.InnerException, Script.Undefined, "InnerException");
            Assert.AreEqual(ex.Message, "The message");
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new InvalidCastException("The message", inner);
            Assert.True((object)ex is InvalidCastException, "is InvalidCastException");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual(ex.Message, "The message");
        }
    }
}
