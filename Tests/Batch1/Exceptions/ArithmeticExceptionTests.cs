using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_ARITHMETICEXCEPTION)]
    [TestFixture(TestNameFormat = "ArithmeticException - {0}")]
    public class ArithmeticExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.ArithmeticException", typeof(ArithmeticException).FullName, "Name");
            Assert.True(typeof(ArithmeticException).IsClass, "IsClass");
            Assert.AreEqual(typeof(Exception), typeof(ArithmeticException).BaseType, "BaseType");
            object d = new ArithmeticException();
            Assert.True(d is ArithmeticException, "is DivideByZeroException");
            Assert.True(d is Exception, "is Exception");

            var interfaces = typeof(ArithmeticException).GetInterfaces();
            Assert.AreEqual(0, interfaces.Length, "Interfaces length");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new ArithmeticException();
            Assert.True((object)ex is ArithmeticException, "is ArithmeticException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("Overflow or underflow in the arithmetic operation.", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new ArithmeticException("The message");
            Assert.True((object)ex is ArithmeticException, "is OverflowException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new ArithmeticException("The message", inner);
            Assert.True((object)ex is ArithmeticException, "is OverflowException");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }
    }
}