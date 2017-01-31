using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch4.Exceptions
{
    [TestFixture(TestNameFormat = "ArgumentExceptionTests - {0}")]
    public class ArgumentExceptionTests
    {
        private const string DefaultMessage = "Value does not fall within the expected range.";

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.ArgumentException", typeof(ArgumentException).FullName, "Name");
            Assert.True(typeof(ArgumentException).IsClass, "IsClass");
            Assert.AreEqual(typeof(Exception), typeof(ArgumentException).BaseType, "BaseType");
            object d = new ArgumentException();
            Assert.True(d is ArgumentException);
            Assert.True(d is Exception);

            var interfaces = typeof(ArgumentException).GetInterfaces();
            Assert.AreEqual(0, interfaces.Length);
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new ArgumentException();
            Assert.True((object)ex is ArgumentException, "is ArgumentException");
            Assert.True(ex.ParamName == null, "ParamName");
            Assert.True(ex.InnerException == null, "InnerException");
            Assert.AreEqual(DefaultMessage, ex.Message);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new ArgumentException("The message");
            Assert.True((object)ex is ArgumentException, "is ArgumentException");
            Assert.True(ex.ParamName == null, "ParamName");
            Assert.True(ex.InnerException == null, "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new ArgumentException("The message", inner);
            Assert.True((object)ex is ArgumentException, "is ArgumentException");
            Assert.True(ex.ParamName == null, "ParamName");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageAndParamNameWorks()
        {
            var ex = new ArgumentException("The message", "someParam");
            Assert.True((object)ex is ArgumentException, "is ArgumentException");
            Assert.AreEqual("someParam", ex.ParamName, "ParamName");
            Assert.True(ex.InnerException == null, "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageAndParamNameAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new ArgumentException("The message", "someParam", inner);
            Assert.True((object)ex is ArgumentException, "is ArgumentException");
            Assert.AreEqual("someParam", ex.ParamName, "ParamName");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }
    }
}