using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_EXCEPTION)]
    [TestFixture(TestNameFormat = "Exception - {0}")]
    public class ExceptionTests
    {
        private class MyException : Exception
        {
            private readonly string _message;
            private readonly Exception _innerException;

            public MyException(string message, Exception innerException)
            {
                _message = message;
                _innerException = innerException;
            }

            public override string Message
            {
                get
                {
                    return _message;
                }
            }

            public override Exception InnerException
            {
                get
                {
                    return _innerException;
                }
            }
        }

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.Exception", typeof(Exception).FullName, "Name");
            Assert.True(typeof(Exception).IsClass, "IsClass");
            Assert.AreEqual(typeof(object), typeof(Exception).BaseType, "BaseType");
            object d = new Exception();
            Assert.True(d is Exception);

            var interfaces = typeof(Exception).GetInterfaces();
            Assert.AreEqual(0, interfaces.Length);
        }

        [Test]
        public void DefaultConstructorWorks_SPI_1669()
        {
            var ex = new Exception();
            Assert.True((object)ex is Exception, "is Exception");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            // #1669
            Assert.AreEqual("Exception of type 'System.Exception' was thrown.", ex.Message);
            Assert.False(string.IsNullOrEmpty(ex.StackTrace), "Stack available");
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new Exception("The message");
            Assert.True((object)ex is Exception, "is Exception");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("The message", ex.Message);
            Assert.False(string.IsNullOrEmpty(ex.StackTrace), "Stack available");
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new Exception("The message", inner);
            Assert.True((object)ex is Exception, "is Exception");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual("The message", ex.Message);
            Assert.False(string.IsNullOrEmpty(ex.StackTrace), "Stack available");
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