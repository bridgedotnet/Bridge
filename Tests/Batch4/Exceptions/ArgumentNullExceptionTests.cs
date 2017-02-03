using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch4.Exceptions
{
    [TestFixture(TestNameFormat = "ArgumentNullExceptionTests - {0}")]
    public class ArgumentNullExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.ArgumentNullException", typeof(ArgumentNullException).FullName, "Name");
            Assert.True(typeof(ArgumentNullException).IsClass, "IsClass");
            Assert.AreEqual(typeof(ArgumentException), typeof(ArgumentNullException).BaseType, "BaseType");
            object d = new ArgumentNullException();
            Assert.True(d is ArgumentNullException, "is ArgumentNullException");
            Assert.True(d is ArgumentException, "is ArgumentException");
            Assert.True(d is Exception, "is Exception");

            var interfaces = typeof(ArgumentNullException).GetInterfaces();
            Assert.AreEqual(0, interfaces.Length, "Interfaces length");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new ArgumentNullException();
            Assert.True((object)ex is ArgumentNullException, "is ArgumentNullException");
            Assert.True(ex.ParamName == null, "ParamName");
            Assert.True(ex.InnerException == null, "InnerException");
            Assert.AreEqual("Value cannot be null.", ex.Message);
        }

        [Test]
        public void ConstructorWithParamNameWorks()
        {
            var ex = new ArgumentNullException("someParam");
            Assert.True((object)ex is ArgumentNullException, "is ArgumentNullException");
            Assert.AreEqual("someParam", ex.ParamName, "ParamName");
            Assert.True(ex.InnerException == null, "InnerException");
            Assert.AreEqual("Value cannot be null.\nParameter name: someParam", ex.Message);
        }

        [Test]
        public void ConstructorWithParamNameAndMessageWorks()
        {
            var ex = new ArgumentNullException("someParam", "The message");
            Assert.True((object)ex is ArgumentNullException, "is ArgumentNullException");
            Assert.AreEqual("someParam", ex.ParamName, "ParamName");
            Assert.True(ex.InnerException == null, "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new ArgumentNullException("The message", inner);
            Assert.True((object)ex is ArgumentNullException, "is ArgumentException");
            Assert.True(ex.ParamName == null, "ParamName");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }
    }
}