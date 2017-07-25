using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_INVALIDOPERATIONEXCEPTION)]
    [TestFixture(TestNameFormat = "InvalidOperationException - {0}")]
    public class InvalidOperationExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.InvalidOperationException", typeof(InvalidOperationException).FullName, "Name");
            Assert.True(typeof(InvalidOperationException).IsClass, "IsClass");
            Assert.AreEqual(typeof(Exception), typeof(InvalidOperationException).BaseType, "BaseType");
            object d = new InvalidOperationException();
            Assert.True(d is InvalidOperationException, "is InvalidOperationException");
            Assert.True(d is Exception, "is Exception");

            var interfaces = typeof(InvalidOperationException).GetInterfaces();
            Assert.AreEqual(0, interfaces.Length, "Interfaces length");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new InvalidOperationException();
            Assert.True((object)ex is InvalidOperationException, "is InvalidOperationException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("Operation is not valid due to the current state of the object.", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new InvalidOperationException("The message");
            Assert.True((object)ex is InvalidOperationException, "is InvalidOperationException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new InvalidOperationException("The message", inner);
            Assert.True((object)ex is InvalidOperationException, "is InvalidOperationException");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }
    }
}