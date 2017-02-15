using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch4.Exceptions
{
    [TestFixture(TestNameFormat = "OverflowExceptionTests - {0}")]
    public class OverflowExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.OverflowException", typeof(OverflowException).FullName, "Name");
            Assert.True(typeof(OverflowException).IsClass, "IsClass");
            Assert.AreEqual(typeof(ArithmeticException), typeof(OverflowException).BaseType, "BaseType");
            object d = new OverflowException();
            Assert.True(d is OverflowException, "is OverflowException");
            Assert.True(d is Exception, "is Exception");

            var interfaces = typeof(OverflowException).GetInterfaces();
            Assert.AreEqual(0, interfaces.Length, "Interfaces length");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new OverflowException();
            Assert.True((object)ex is OverflowException, "is OverflowException");
            Assert.True(ex.InnerException == null, "InnerException");
            Assert.AreEqual("Arithmetic operation resulted in an overflow.", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new OverflowException("The message");
            Assert.True((object)ex is OverflowException, "is OverflowException");
            Assert.True(ex.InnerException == null, "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new OverflowException("The message", inner);
            Assert.True((object)ex is OverflowException, "is OverflowException");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }
    }
}