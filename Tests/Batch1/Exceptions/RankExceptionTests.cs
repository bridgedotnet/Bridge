using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_ARGUMENTEXCEPTION)]
    [TestFixture(TestNameFormat = "RankException - {0}")]
    public class RankExceptionTests
    {
        private const string DefaultMessage = "Attempted to operate on an array with the incorrect number of dimensions.";

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.RankException", typeof(RankException).FullName, "Name");
            object d = new RankException();
            Assert.True(d is RankException);
            Assert.True(d is Exception);
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new RankException();
            Assert.True((object)ex is RankException, "is ArgumentException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual(DefaultMessage, ex.Message);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new RankException("The message");
            Assert.True((object)ex is RankException, "is RankException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }
    }
}