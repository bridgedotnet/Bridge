using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch4.Exceptions
{
    [TestFixture(TestNameFormat = "FormatExceptionTests - {0}")]
    public class FormatExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.FormatException", typeof(FormatException).FullName, "Name");
            Assert.True(typeof(FormatException).IsClass, "IsClass");
            Assert.AreEqual(typeof(Exception), typeof(FormatException).BaseType, "BaseType");
            object d = new FormatException();
            Assert.True(d is FormatException, "is FormatException");
            Assert.True(d is Exception, "is Exception");

            var interfaces = typeof(FormatException).GetInterfaces();
            Assert.AreEqual(0, interfaces.Length, "Interfaces length");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new FormatException();
            Assert.True((object)ex is FormatException, "is FormatException");
            Assert.True(ex.InnerException == null, "InnerException");
            Assert.AreEqual("Invalid format.", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new FormatException("The message");
            Assert.True((object)ex is FormatException, "is FormatException");
            Assert.True(ex.InnerException == null, "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new FormatException("The message", inner);
            Assert.True((object)ex is FormatException, "is FormatException");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }
    }
}