using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.CompilerServices;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_EXCEPTION)]
    [TestFixture(TestNameFormat = "Exception - {0}")]
    public class ExceptionTests
    {
        class MyException : Exception
        {
            private readonly string _message;
            private readonly Exception _innerException;

            public MyException(string message, Exception innerException)
            {
                _message = message;
                _innerException = innerException;
            }

            public override string Message { get { return _message; } }
            public override Exception InnerException { get { return _innerException; } }
        }

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual(typeof(Exception).GetClassName(), "Bridge.Exception", "Name");
            object d = new Exception();
            Assert.True(d is Exception);
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new Exception();
            Assert.True((object)ex is Exception, "is Exception");
            Assert.AreEqual(ex.InnerException, Script.Undefined, "InnerException");
            Assert.AreEqual(ex.Message, Script.Undefined);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new Exception("The message");
            Assert.True((object)ex is Exception, "is Exception");
            Assert.AreEqual(ex.InnerException, Script.Undefined, "InnerException");
            Assert.AreEqual(ex.Message, "The message");
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new Exception("The message", inner);
            Assert.True((object)ex is Exception, "is Exception");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual(ex.Message, "The message");
        }

        [Test]
        public void MessagePropertyCanBeOverridden()
        {
            var ex = (Exception)new MyException("Test message", null);
            Assert.AreEqual(ex.Message, "Test message");
        }

        [Test]
        public void InnerExceptionPropertyCanBeOverridden()
        {
            var inner = new Exception("a");
            var ex = (Exception)new MyException("Test message", inner);
            Assert.True(ReferenceEquals(ex.InnerException, inner));
        }
    }
}
