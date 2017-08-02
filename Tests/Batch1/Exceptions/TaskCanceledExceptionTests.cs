using Bridge.Test.NUnit;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_ARGUMENTEXCEPTION)]
    [TestFixture(TestNameFormat = "TaskCanceledException - {0}")]
    public class TaskCanceledExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.Threading.Tasks.TaskCanceledException", typeof(TaskCanceledException).FullName, "Name");
            Assert.True(typeof(TaskCanceledException).IsClass, "IsClass");
            Assert.AreEqual(typeof(OperationCanceledException), typeof(TaskCanceledException).BaseType, "BaseType");
            object d = new TaskCanceledException();
            Assert.True(d is TaskCanceledException, "is TaskCanceledException");
            Assert.True(d is OperationCanceledException, "is OperationCanceledException");
            Assert.True(d is Exception, "is Exception");

            var interfaces = typeof(TaskCanceledException).GetInterfaces();
            Assert.AreEqual(0, interfaces.Length, "Interfaces length");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new TaskCanceledException();
            Assert.True((object)ex is TaskCanceledException, "is TaskCanceledException");
            Assert.AreEqual("A task was canceled.", ex.Message, "Message");
            Assert.Null(ex.Task, "Task");
            Assert.True(ReferenceEquals(ex.CancellationToken, CancellationToken.None), "CancellationToken");
            Assert.Null(ex.InnerException, "InnerException");
        }

        [Test]
        public void MessageOnlyConstructorWorks()
        {
            var ex = new TaskCanceledException("Some message");
            Assert.True((object)ex is TaskCanceledException, "is TaskCanceledException");
            Assert.AreEqual("Some message", ex.Message, "Message");
            Assert.Null(ex.Task, "Task");
            Assert.True(ReferenceEquals(ex.CancellationToken, CancellationToken.None), "CancellationToken");
            Assert.Null(ex.InnerException, "InnerException");
        }

        [Test]
        public void TaskOnlyConstructorWorks()
        {
            var task = new TaskCompletionSource<int>().Task;
            var ex = new TaskCanceledException(task);
            Assert.True((object)ex is TaskCanceledException, "is TaskCanceledException");
            Assert.AreEqual("A task was canceled.", ex.Message, "Message");
            Assert.True(ReferenceEquals(ex.Task, task), "Task");
            Assert.True(ReferenceEquals(ex.CancellationToken, CancellationToken.None), "CancellationToken");
            Assert.Null(ex.InnerException, "InnerException");
        }

        [Test]
        public void MessageAndInnerExceptionConstructorWorks()
        {
            var innerException = new Exception();
            var ex = new TaskCanceledException("Some message", innerException);
            Assert.True((object)ex is TaskCanceledException, "is TaskCanceledException");
            Assert.AreEqual("Some message", ex.Message, "Message");
            Assert.Null(ex.Task, "Task");
            Assert.True(ReferenceEquals(ex.CancellationToken, CancellationToken.None), "CancellationToken");
            Assert.True(ReferenceEquals(ex.InnerException, innerException), "InnerException");
        }
    }
}