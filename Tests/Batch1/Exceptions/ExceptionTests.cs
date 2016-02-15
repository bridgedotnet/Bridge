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
            Assert.AreEqual("Bridge.Exception", typeof(Exception).GetClassName(), "Name");
            object d = new Exception();
            Assert.True(d is Exception);
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new Exception();
            Assert.True((object)ex is Exception, "is Exception");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual(null, ex.Message);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new Exception("The message");
            Assert.True((object)ex is Exception, "is Exception");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new Exception("The message", inner);
            Assert.True((object)ex is Exception, "is Exception");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test]
        public void MessagePropertyCanBeOverridden()
        {
            var ex = (Exception)new MyException("Test message", null);
            Assert.AreEqual("Test message", ex.Message);
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
