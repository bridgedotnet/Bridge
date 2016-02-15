using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.CompilerServices;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_DIVIDEBYZEROEXCEPTION)]
    [TestFixture(TestNameFormat = "DivideByZeroException - {0}")]
    public class DivideByZeroExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("Bridge.DivideByZeroException", typeof(DivideByZeroException).GetClassName(), "Name");
            object d = new DivideByZeroException();
            Assert.True(d is DivideByZeroException, "is DivideByZeroException");
            Assert.True(d is Exception, "is Exception");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new DivideByZeroException();
            Assert.True((object)ex is DivideByZeroException, "is DivideByZeroException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("Division by 0.", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new DivideByZeroException("The message");
            Assert.True((object)ex is DivideByZeroException, "is DivideByZeroException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new DivideByZeroException("The message", inner);
            Assert.True((object)ex is DivideByZeroException, "is DivideByZeroException");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }
    }
}
