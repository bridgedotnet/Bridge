using Bridge.Test.NUnit;

using System;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_INDEXOUTOFRANGEEXCEPTION)]
    [TestFixture(TestNameFormat = "IndexOutOfRangeException - {0}")]
    public class IndexOutOfRangeExceptionTests
    {
        private const string DefaultMessage = "Index was outside the bounds of the array.";

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.IndexOutOfRangeException", typeof(IndexOutOfRangeException).FullName, "Name");
            object d = new IndexOutOfRangeException();
            Assert.True(d is IndexOutOfRangeException, "is IndexOutOfRangeException");
            Assert.True(d is SystemException, "is SystemException");
            Assert.True(d is Exception, "is Exception");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new IndexOutOfRangeException();
            Assert.True((object)ex is IndexOutOfRangeException, "is IndexOutOfRangeException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual(IndexOutOfRangeExceptionTests.DefaultMessage, ex.Message);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new IndexOutOfRangeException("The message");
            Assert.True((object)ex is IndexOutOfRangeException, "is IndexOutOfRangeException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new IndexOutOfRangeException("The message", inner);
            Assert.True((object)ex is IndexOutOfRangeException, "is IndexOutOfRangeException");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }
    }
}