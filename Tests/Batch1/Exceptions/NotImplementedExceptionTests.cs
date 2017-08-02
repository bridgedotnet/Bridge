using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_NOTIMPLEMENTEDEXCEPTION)]
    [TestFixture(TestNameFormat = "NotImplementedException - {0}")]
    public class NotImplementedExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.NotImplementedException", typeof(NotImplementedException).FullName, "Name");
            Assert.True(typeof(NotImplementedException).IsClass, "IsClass");
            Assert.AreEqual(typeof(Exception), typeof(NotImplementedException).BaseType, "BaseType");
            object d = new NotImplementedException();
            Assert.True(d is NotImplementedException, "is NotImplementedException");
            Assert.True(d is Exception, "is Exception");

            var interfaces = typeof(NotImplementedException).GetInterfaces();
            Assert.AreEqual(0, interfaces.Length, "Interfaces length");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new NotImplementedException();
            Assert.True((object)ex is NotImplementedException, "is NotImplementedException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("The method or operation is not implemented.", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new NotImplementedException("The message");
            Assert.True((object)ex is NotImplementedException, "is NotImplementedException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new NotImplementedException("The message", inner);
            Assert.True((object)ex is NotImplementedException, "is NotImplementedException");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }
    }
}