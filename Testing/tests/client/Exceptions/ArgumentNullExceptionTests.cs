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
            Assert.AreEqual(typeof(ArgumentNullException).GetClassName(), "Bridge.ArgumentNullException", "Name");
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
            Assert.AreEqual(ex.ParamName, Script.Undefined, "ParamName");
            Assert.AreEqual(ex.InnerException, Script.Undefined, "InnerException");
            Assert.AreEqual(ex.Message, "Value cannot be null.");
        }

        [Test]
        public void ConstructorWithParamNameWorks()
        {
            var ex = new ArgumentNullException("someParam");
            Assert.True((object)ex is ArgumentNullException, "is ArgumentNullException");
            Assert.AreEqual(ex.ParamName, "someParam", "ParamName");
            Assert.AreEqual(ex.InnerException, Script.Undefined, "InnerException");
            Assert.AreEqual(ex.Message, "Value cannot be null.\nParameter name: someParam");
        }

        [Test]
        public void ConstructorWithParamNameAndMessageWorks()
        {
            var ex = new ArgumentNullException("someParam", "The message");
            Assert.True((object)ex is ArgumentNullException, "is ArgumentNullException");
            Assert.AreEqual(ex.ParamName, "someParam", "ParamName");
            Assert.AreEqual(ex.InnerException, Script.Undefined, "InnerException");
            Assert.AreEqual(ex.Message, "The message");
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new ArgumentNullException("The message", inner);
            Assert.True((object)ex is ArgumentNullException, "is ArgumentException");
            Assert.AreEqual(ex.ParamName, null, "ParamName");
            Assert.AreEqual(ex.InnerException, inner, "InnerException");
            Assert.AreEqual(ex.Message, "The message");
        }
    }
}
