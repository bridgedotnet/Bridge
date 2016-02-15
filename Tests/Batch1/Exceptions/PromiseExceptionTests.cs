using System;
using System.Threading.Tasks;
using Bridge.Test;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_ARGUMENTEXCEPTION)]
    [TestFixture(TestNameFormat = "PromiseException - {0}")]
    public class PromiseExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("Bridge.PromiseException", typeof(PromiseException).GetClassName(), "Name");
            object d = new PromiseException(new object[0]);
            Assert.True(d is PromiseException, "is PromiseException");
            Assert.True(d is Exception, "is Exception");
        }

        [Test]
        public void ArgumentsOnlyConstructorWorks()
        {
            var args = new object[] { "a", 1 };
            var ex = new PromiseException(args);
            Assert.True((object)ex is PromiseException, "is PromiseException");
            Assert.AreEqual(args, ex.Arguments, "Arguments");
            Assert.True(ex.InnerException == null, "InnerException");
            Assert.AreEqual("a", ex.Message, "Message");
        }

        [Test]
        public void ArgumentsAndMessageConstructorWorks()
        {
            var args = new object[] { "a", 1 };
            var ex = new PromiseException(args, "Some message");
            Assert.True((object)ex is PromiseException, "is PromiseException");
            Assert.True(ex.InnerException == null, "InnerException");
            Assert.AreEqual(args, ex.Arguments, "Arguments");
            Assert.AreEqual("Some message", ex.Message, "Message");
        }

        [Test]
        public void ArgumentsAndMessageAndInnerExceptionConstructorWorks()
        {
            var inner = new Exception("a");
            var args = new object[] { "a", 1 };
            var ex = new PromiseException(args, "Some message", inner);
            Assert.True((object)ex is PromiseException, "is PromiseException");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual(args, ex.Arguments, "Arguments");
            Assert.AreEqual("Some message", ex.Message, "Message");
        }
    }
}
