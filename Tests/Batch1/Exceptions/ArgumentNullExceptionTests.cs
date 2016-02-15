using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.CompilerServices;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_ARGUMENTNULLEXCEPTION)]
    [TestFixture(TestNameFormat = "ArgumentNullException - {0}")]
    public class ArgumentNullExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("Bridge.ArgumentNullException", typeof(ArgumentNullException).GetClassName(), "Name");
            object d = new ArgumentNullException();
            Assert.True(d is ArgumentNullException, "is ArgumentNullException");
            Assert.True(d is ArgumentException, "is ArgumentException");
            Assert.True(d is Exception, "is Exception");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new ArgumentNullException();
            Assert.True((object)ex is ArgumentNullException, "is ArgumentNullException");
            Assert.AreEqual(null, ex.ParamName, "ParamName");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("Value cannot be null.", ex.Message);
        }

        [Test]
        public void ConstructorWithParamNameWorks()
        {
            var ex = new ArgumentNullException("someParam");
            Assert.True((object)ex is ArgumentNullException, "is ArgumentNullException");
            Assert.AreEqual("someParam", ex.ParamName, "ParamName");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("Value cannot be null.\nParameter name: someParam", ex.Message);
        }

        [Test]
        public void ConstructorWithParamNameAndMessageWorks()
        {
            var ex = new ArgumentNullException("someParam", "The message");
            Assert.True((object)ex is ArgumentNullException, "is ArgumentNullException");
            Assert.AreEqual("someParam", ex.ParamName, "ParamName");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new ArgumentNullException("The message", inner);
            Assert.True((object)ex is ArgumentNullException, "is ArgumentException");
            Assert.AreEqual(null, ex.ParamName, "ParamName");
            Assert.AreEqual(inner, ex.InnerException, "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }
    }
}
