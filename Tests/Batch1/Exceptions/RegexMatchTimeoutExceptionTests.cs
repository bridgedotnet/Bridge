using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_REGEXMATCHTIMEOUTEXCEPTION)]
    [TestFixture(TestNameFormat = "RegexMatchTimeoutException - {0}")]
    public class RegexMatchTimeoutExceptionTests
    {
        private const string DefaultMessage1 = "The operation has timed out.";
        private const string DefaultMessage2 = "The RegEx engine has timed out while trying to match a pattern to an input string. This can occur for many reasons, including very large inputs or excessive backtracking caused by nested quantifiers, back-references and other factors.";

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.RegexMatchTimeoutException", typeof(RegexMatchTimeoutException).FullName, "Name");
            object d = new RegexMatchTimeoutException();
            Assert.True(d is RegexMatchTimeoutException, "is RegexMatchTimeoutException");
            Assert.True(d is TimeoutException, "is TimeoutException");
            Assert.True(d is SystemException, "is SystemException");
            Assert.True(d is Exception, "is Exception");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new RegexMatchTimeoutException();
            Assert.True((object)ex is RegexMatchTimeoutException, "is RegexMatchTimeoutException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual(DefaultMessage1, ex.Message);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new RegexMatchTimeoutException("The message");
            Assert.True((object)ex is RegexMatchTimeoutException, "is RegexMatchTimeoutException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("The operation has timed out.", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new RegexMatchTimeoutException("The message", inner);
            Assert.True((object)ex is RegexMatchTimeoutException, "is RegexMatchTimeoutException");
            Assert.False(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual("The operation has timed out.", ex.Message);
        }

        [Test]
        public void ConstructorWithExceptionDetailsWorks()
        {
            var ex = new RegexMatchTimeoutException("testInput", "testPattern", TimeSpan.FromSeconds(77));
            Assert.True((object)ex is RegexMatchTimeoutException, "is RegexMatchTimeoutException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            Assert.AreEqual("testInput", ex.Input, "Input");
            Assert.AreEqual("testPattern", ex.Pattern, "Pattern");
            Assert.AreEqual(TimeSpan.FromSeconds(77), ex.MatchTimeout, "MatchTimeout");
            //Assert.AreEqual(DefaultMessage2, ex.Message);
        }
    }
}