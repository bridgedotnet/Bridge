using Bridge.Test;
using System;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_ARGUMENTOUTOFRANGEEXCEPTION)]
    [TestFixture(TestNameFormat = "ArgumentOutOfRangeException - {0}")]
    public class ArgumentOutOfRangeExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.ArgumentOutOfRangeException", typeof(ArgumentOutOfRangeException).FullName, "Name");
            object d = new ArgumentOutOfRangeException();
            Assert.True(d is ArgumentOutOfRangeException, "is ArgumentOutOfRangeException");
            Assert.True(d is ArgumentException, "is ArgumentException");
            Assert.True(d is Exception, "is Exception");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new ArgumentOutOfRangeException();
            Assert.True((object)ex is ArgumentOutOfRangeException, "is ArgumentOutOfRangeException");
            Assert.AreEqual(null, ex.ParamName, "ParamName");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual(null, ex.ActualValue, "ActualValue");
            Assert.AreEqual("Value is out of range.", ex.Message);
        }

        [Test]
        public void ConstructorWithParamNameWorks()
        {
            var ex = new ArgumentOutOfRangeException("someParam");
            Assert.True((object)ex is ArgumentOutOfRangeException, "is ArgumentOutOfRangeException");
            Assert.AreEqual("someParam", ex.ParamName, "ParamName");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual(null, ex.ActualValue, "ActualValue");
            Assert.AreEqual("Value is out of range.\nParameter name: someParam", ex.Message);
        }

        [Test]
        public void ConstructorWithParamNameAndMessageWorks()
        {
            var ex = new ArgumentOutOfRangeException("someParam", "The message");
            Assert.True((object)ex is ArgumentOutOfRangeException, "is ArgumentOutOfRangeException");
            Assert.AreEqual("someParam", ex.ParamName, "ParamName");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual(null, ex.ActualValue, "ActualValue");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new ArgumentOutOfRangeException("The message", inner);
            Assert.True((object)ex is ArgumentOutOfRangeException, "is ArgumentOutOfRangeException");
            Assert.Null(ex.ParamName, "ParamName");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual(null, ex.ActualValue, "ActualValue");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test]
        public void ConstructorWithParamNameAndActualValueAndMessageWorks()
        {
            var ex = new ArgumentOutOfRangeException("someParam", 42, "The message");
            Assert.True((object)ex is ArgumentOutOfRangeException, "is ArgumentOutOfRangeException");
            Assert.AreEqual("someParam", ex.ParamName, "ParamName");
            Assert.Null(ex.InnerException, "InnerException");
            Assert.AreEqual(42, ex.ActualValue, "ActualValue");
            Assert.AreEqual("The message", ex.Message);
        }
    }
}