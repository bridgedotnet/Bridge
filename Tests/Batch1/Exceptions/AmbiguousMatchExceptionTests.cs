// #1621
using Bridge.Test.NUnit;
using System;
using System.Reflection;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.PREFIX_EXCEPTIONS)]
    [TestFixture(TestNameFormat = "AmbiguousMatchException - {0}")]
    public class AmbiguousMatchExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.Reflection.AmbiguousMatchException", typeof(AmbiguousMatchException).FullName, "Name");
            Assert.True(typeof(AmbiguousMatchException).IsClass, "IsClass");
            Assert.AreEqual(typeof(SystemException), typeof(AmbiguousMatchException).BaseType, "BaseType");
            object d = new AmbiguousMatchException();
            Assert.True(d is AmbiguousMatchException, "is AmbiguousMatchException");
            Assert.True(d is Exception, "is Exception");

            var interfaces = typeof(AmbiguousMatchException).GetInterfaces();
            Assert.AreEqual(0, interfaces.Length, "Interfaces length");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new AmbiguousMatchException();
            Assert.True((object)ex is AmbiguousMatchException, "is AmbiguousMatchException");
            Assert.True(ex.InnerException == null, "InnerException");
            Assert.AreEqual("Ambiguous match found.", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new AmbiguousMatchException("The message");
            Assert.True((object)ex is AmbiguousMatchException, "is AmbiguousMatchException");
            Assert.True(ex.InnerException == null, "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new AmbiguousMatchException("The message", inner);
            Assert.True((object)ex is AmbiguousMatchException, "is AmbiguousMatchException");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }
    }
}