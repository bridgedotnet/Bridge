using Bridge.Test.NUnit;
using System;
using System.Threading;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_ARGUMENTEXCEPTION)]
    [TestFixture(TestNameFormat = "OperationCanceledException - {0}")]
    public class OperationCanceledExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.OperationCanceledException", typeof(OperationCanceledException).FullName, "Name");
            Assert.True(typeof(OperationCanceledException).IsClass, "IsClass");
            Assert.AreEqual(typeof(Exception), typeof(OperationCanceledException).BaseType, "BaseType");
            object d = new OperationCanceledException();
            Assert.True(d is OperationCanceledException, "is OperationCanceledException");
            Assert.True(d is Exception, "is Exception");

            var interfaces = typeof(OperationCanceledException).GetInterfaces();
            Assert.AreEqual(0, interfaces.Length, "Interfaces length");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new OperationCanceledException();
            Assert.True((object)ex is OperationCanceledException, "is OperationCanceledException");
            Assert.AreEqual("Operation was canceled.", ex.Message, "Message");
            Assert.True(ReferenceEquals(ex.CancellationToken, CancellationToken.None), "CancellationToken");
            Assert.Null(ex.InnerException, "InnerException");
        }

        [Test]
        public void CancellationTokenOnlyConstructorWorks()
        {
            var ct = new CancellationToken();
            var ex = new OperationCanceledException(ct);
            Assert.True((object)ex is OperationCanceledException, "is OperationCanceledException");
            Assert.AreEqual("Operation was canceled.", ex.Message, "Message");
            Assert.True(ReferenceEquals(ex.CancellationToken, ct), "CancellationToken");
            Assert.Null(ex.InnerException, "InnerException");
        }

        [Test]
        public void MessageOnlyConstructorWorks()
        {
            var ex = new OperationCanceledException("Some message");
            Assert.True((object)ex is OperationCanceledException, "is OperationCanceledException");
            Assert.AreEqual("Some message", ex.Message, "Message");
            Assert.True(ReferenceEquals(ex.CancellationToken, CancellationToken.None), "CancellationToken");
            Assert.Null(ex.InnerException, "InnerException");
        }

        [Test]
        public void MessageAndInnerExceptionConstructorWorks()
        {
            var innerException = new Exception();
            var ex = new OperationCanceledException("Some message", innerException);
            Assert.True((object)ex is OperationCanceledException, "is OperationCanceledException");
            Assert.AreEqual("Some message", ex.Message, "Message");
            Assert.True(ReferenceEquals(ex.CancellationToken, CancellationToken.None), "CancellationToken");
            Assert.True(ReferenceEquals(ex.InnerException, innerException), "InnerException");
        }

        [Test]
        public void MessageAndCancellationTokenConstructorWorks()
        {
            var ct = new CancellationToken();
            var ex = new OperationCanceledException("Some message", ct);
            Assert.True((object)ex is OperationCanceledException, "is OperationCanceledException");
            Assert.AreEqual("Some message", ex.Message, "Message");
            Assert.True(ReferenceEquals(ex.CancellationToken, ct), "CancellationToken");
            Assert.Null(ex.InnerException, "InnerException");
        }

        [Test]
        public void MessageAndInnerExceptionAndCancellationTokenConstructorWorks()
        {
            var ct = new CancellationToken();
            var innerException = new Exception();
            var ex = new OperationCanceledException("Some message", innerException, ct);
            Assert.True((object)ex is OperationCanceledException, "is OperationCanceledException");
            Assert.AreEqual("Some message", ex.Message, "Message");
            Assert.True(ReferenceEquals(ex.CancellationToken, ct), "CancellationToken");
            Assert.True(ReferenceEquals(ex.InnerException, innerException), "InnerException");
        }
    }
}