using Bridge.Test.NUnit;

using System;
using System.Globalization;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.PREFIX_EXCEPTIONS)]
    [TestFixture(TestNameFormat = "CultureNotFoundException - {0}")]
    public class CultureNotFoundExceptionTests
    {
        private const string DefaultMessage = "Culture is not supported.";

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.Globalization.CultureNotFoundException", typeof(CultureNotFoundException).FullName, "Name");
            object d = new CultureNotFoundException();
            Assert.True(d is CultureNotFoundException);
            Assert.True(d is Exception);
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new CultureNotFoundException();
            Assert.True((object)ex is CultureNotFoundException, "is CultureNotFoundException");
            Assert.AreEqual(null, ex.ParamName, "ParamName");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual(DefaultMessage, ex.Message);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new CultureNotFoundException("The message");
            Assert.True((object)ex is CultureNotFoundException, "is CultureNotFoundException");
            Assert.AreEqual(null, ex.ParamName, "ParamName");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("The message", ex.Message);
            Assert.AreEqual(null, ex.InvalidCultureName, "InvalidCultureName");
            Assert.AreEqual(null, ex.InvalidCultureId, "InvalidCultureId");
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new CultureNotFoundException("The message", inner);
            Assert.True((object)ex is CultureNotFoundException, "is CultureNotFoundException");
            Assert.AreEqual(null, ex.ParamName, "ParamName");
            Assert.AreEqual(inner, ex.InnerException, "InnerException");
            //Assert.AreEqual("The message", ex.Message);
            Assert.AreEqual(null, ex.InvalidCultureName, "InvalidCultureName");
            Assert.AreEqual(null, ex.InvalidCultureId, "InvalidCultureId");
        }

        [Test]
        public void ConstructorWithMessageAndParamNameWorks()
        {
            var ex = new CultureNotFoundException("someParam", "The message");
            Assert.True((object)ex is CultureNotFoundException, "is CultureNotFoundException");
            Assert.AreEqual("someParam", ex.ParamName, "ParamName");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            //Assert.AreEqual("The message", ex.Message);
            Assert.AreEqual(null, ex.InvalidCultureName, "InvalidCultureName");
            Assert.AreEqual(null, ex.InvalidCultureId, "InvalidCultureId");
        }

        [Test]
        public void ConstructorWithMessageAndCultureNameAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new CultureNotFoundException("The message", "fru", inner);
            Assert.True((object)ex is CultureNotFoundException, "is CultureNotFoundException");
            Assert.AreEqual(null, ex.ParamName, "ParamName");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual(inner, ex.InnerException, "InnerException");
            //Assert.AreEqual("The message", ex.Message);
            Assert.AreEqual("fru", ex.InvalidCultureName, "InvalidCultureName");
            Assert.Null(ex.InvalidCultureId, "InvalidCultureId");
        }

        [Test]
        public void ConstructorWithParamNameAndCultureNameAndMessage()
        {
            var ex = new CultureNotFoundException("SomeParam", "fru", "The message");
            Assert.True((object)ex is CultureNotFoundException, "is CultureNotFoundException");
            Assert.AreEqual("SomeParam", ex.ParamName, "ParamName");
            Assert.Null(ex.InnerException, "InnerException");
            //Assert.AreEqual("The message", ex.Message);
            Assert.AreEqual("fru", ex.InvalidCultureName, "InvalidCultureName");
            Assert.AreEqual(null, ex.InvalidCultureId, "InvalidCultureId");
        }

        [Test]
        public void ConstructorWithMessageAndCultureIdAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new CultureNotFoundException("The message", 1, inner);
            Assert.True((object)ex is CultureNotFoundException, "is CultureNotFoundException");
            Assert.AreEqual(null, ex.ParamName, "ParamName");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual(inner, ex.InnerException, "InnerException");
            //Assert.AreEqual("The message", ex.Message);
            Assert.AreEqual(null, ex.InvalidCultureName, "InvalidCultureName");
            Assert.AreEqual(1, ex.InvalidCultureId, "InvalidCultureId");
        }

        [Test]
        public void ConstructorWithParamNameAndCultureIdAndMessage()
        {
            var ex = new CultureNotFoundException("SomeParam", 2, "The message");
            Assert.True((object)ex is CultureNotFoundException, "is CultureNotFoundException");
            Assert.AreEqual("SomeParam", ex.ParamName, "ParamName");
            Assert.Null(ex.InnerException, "InnerException");
            //Assert.AreEqual("The message", ex.Message);
            Assert.AreEqual(null, ex.InvalidCultureName, "InvalidCultureName");
            Assert.AreEqual(2, ex.InvalidCultureId, "InvalidCultureId");
        }
    }
}