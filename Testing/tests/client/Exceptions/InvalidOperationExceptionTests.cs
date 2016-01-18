using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.CompilerServices;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_INVALIDOPERATIONEXCEPTION)]
    [TestFixture(TestNameFormat = "InvalidOperationException - {0}")]
    public class InvalidOperationExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual(typeof(InvalidOperationException).GetClassName(), "Bridge.InvalidOperationException", "Name");
            object d = new InvalidOperationException();
            Assert.True(d is InvalidOperationException, "is InvalidOperationException");
            Assert.True(d is Exception, "is Exception");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new InvalidOperationException();
            Assert.True((object)ex is InvalidOperationException, "is InvalidOperationException");
            Assert.AreEqual(ex.InnerException, Script.Undefined, "InnerException");
            Assert.AreEqual(ex.Message, "Operation is not valid due to the current state of the object.");
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new InvalidOperationException("The message");
            Assert.True((object)ex is InvalidOperationException, "is InvalidOperationException");
            Assert.AreEqual(ex.InnerException, Script.Undefined, "InnerException");
            Assert.AreEqual(ex.Message, "The message");
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new InvalidOperationException("The message", inner);
            Assert.True((object)ex is InvalidOperationException, "is InvalidOperationException");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual(ex.Message, "The message");
        }
    }
}
