using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.CompilerServices;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_NOTSUPPORTEDEXCEPTION)]
    [TestFixture(TestNameFormat = "NotSupportedException - {0}")]
    public class NotSupportedExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("Bridge.NotSupportedException", typeof(NotSupportedException).GetClassName(), "Name");
            object d = new NotSupportedException();
            Assert.True(d is NotSupportedException, "is NotSupportedException");
            Assert.True(d is Exception, "is Exception");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new NotSupportedException();
            Assert.True((object)ex is NotSupportedException, "is NotSupportedException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("Specified method is not supported.", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new NotSupportedException("The message");
            Assert.True((object)ex is NotSupportedException, "is NotSupportedException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
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
