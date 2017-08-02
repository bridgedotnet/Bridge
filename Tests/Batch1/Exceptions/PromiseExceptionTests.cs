using Bridge.Test.NUnit;
using System;
using System.Threading.Tasks;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_ARGUMENTEXCEPTION)]
    [TestFixture(TestNameFormat = "PromiseException - {0}")]
    public class PromiseExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("Bridge.PromiseException", typeof(PromiseException).FullName, "Name");
            Assert.True(typeof(PromiseException).IsClass, "IsClass");
            Assert.AreEqual(typeof(Exception), typeof(PromiseException).BaseType, "BaseType");
            object d = new PromiseException(new object[0]);
            Assert.True(d is PromiseException, "is PromiseException");
            Assert.True(d is Exception, "is Exception");

            var interfaces = typeof(PromiseException).GetInterfaces();
            Assert.AreEqual(0, interfaces.Length, "Interfaces length");
        }

        [Test]
        public void ArgumentsOnlyConstructorWorks()
        {
            var args = new object[] { "a", 1 };
            var ex = new PromiseException(args);
            Assert.True((object)ex is PromiseException, "is PromiseException");
            Assert.AreEqual(args, ex.Arguments, "Arguments");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
            // #1528
            Assert.AreEqual("Promise exception: [a, 1]", ex.Message, "Message");
        }

        [Test]
        public void ArgumentsAndMessageConstructorWorks()
        {
            var args = new object[] { "a", 1 };
            var ex = new PromiseException(args, "Some message");
            Assert.True((object)ex is PromiseException, "is PromiseException");
            Assert.AreEqual(null, ex.InnerException, "InnerException");
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