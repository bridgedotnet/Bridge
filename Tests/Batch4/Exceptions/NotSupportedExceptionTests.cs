using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch4.Exceptions
{
    [TestFixture(TestNameFormat = "NotSupportedExceptionTests - {0}")]
    public class NotSupportedExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.NotSupportedException", typeof(NotSupportedException).FullName, "Name");
            Assert.True(typeof(NotSupportedException).IsClass, "IsClass");
            Assert.AreEqual(typeof(Exception), typeof(NotSupportedException).BaseType, "BaseType");
            object d = new NotSupportedException();
            Assert.True(d is NotSupportedException, "is NotSupportedException");
            Assert.True(d is Exception, "is Exception");

            var interfaces = typeof(NotSupportedException).GetInterfaces();
            Assert.AreEqual(0, interfaces.Length, "Interfaces length");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new NotSupportedException();
            Assert.True((object)ex is NotSupportedException, "is NotSupportedException");
            Assert.True(ex.InnerException == null, "InnerException");
            Assert.AreEqual("Specified method is not supported.", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new NotSupportedException("The message");
            Assert.True((object)ex is NotSupportedException, "is NotSupportedException");
            Assert.True(ex.InnerException == null, "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new NotSupportedException("The message", inner);
            Assert.True((object)ex is NotSupportedException, "is NotSupportedException");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }
    }
}