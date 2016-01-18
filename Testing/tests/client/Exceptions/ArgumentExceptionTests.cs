using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.CompilerServices;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_ARGUMENTEXCEPTION)]
    [TestFixture(TestNameFormat = "ArgumentException - {0}")]
    public class ArgumentExceptionTests
    {
        private const string DefaultMessage = "Value does not fall within the expected range.";

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual(typeof(ArgumentException).GetClassName(), "Bridge.ArgumentException", "Name");
            object d = new ArgumentException();
            Assert.True(d is ArgumentException);
            Assert.True(d is Exception);
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new ArgumentException();
            Assert.True((object)ex is ArgumentException, "is ArgumentException");
            Assert.AreEqual(ex.ParamName, Script.Undefined, "ParamName");
            Assert.AreEqual(ex.InnerException, Script.Undefined, "InnerException");
            Assert.AreEqual(ex.Message, DefaultMessage);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new ArgumentException("The message");
            Assert.True((object)ex is ArgumentException, "is ArgumentException");
            Assert.AreEqual(ex.ParamName, Script.Undefined, "ParamName");
            Assert.AreEqual(ex.InnerException, Script.Undefined, "InnerException");
            Assert.AreEqual(ex.Message, "The message");
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new ArgumentException("The message", inner);
            Assert.True((object)ex is ArgumentException, "is ArgumentException");
            Assert.AreEqual(ex.ParamName, null, "ParamName");
            Assert.AreEqual(ex.InnerException, inner, "InnerException");
            Assert.AreEqual(ex.Message, "The message");
        }

        [Test]
        public void ConstructorWithMessageAndParamNameWorks()
        {
            var ex = new ArgumentException("The message", "someParam");
            Assert.True((object)ex is ArgumentException, "is ArgumentException");
            Assert.AreEqual(ex.ParamName, "someParam", "ParamName");
            Assert.AreEqual(ex.InnerException, Script.Undefined, "InnerException");
            Assert.AreEqual(ex.Message, "The message");
        }

        [Test]
        public void ConstructorWithMessageAndParamNameAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new ArgumentException("The message", "someParam", inner);
            Assert.True((object)ex is ArgumentException, "is ArgumentException");
            Assert.AreEqual(ex.ParamName, "someParam", "ParamName");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual(ex.InnerException, inner, "InnerException");
            Assert.AreEqual(ex.Message, "The message");
        }
    }
}
