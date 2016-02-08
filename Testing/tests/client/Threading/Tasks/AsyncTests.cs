using Bridge.Html5;
using Bridge.Test;

using System;
using System.Threading.Tasks;

namespace Bridge.ClientTest.Threading
{
    [Category(Constants.MODULE_THREADING)]
    [TestFixture(TestNameFormat = "Async - {0}")]
    public class AsyncTests
    {
        [Test(ExpectedCount = 3)]
        public void AsyncVoid()
        {
            var done = Assert.Async();

            int state = 0;
            var tcs = new TaskCompletionSource<int>();
            Task task = tcs.Task;

            Action someMethod = async () =>
            {
                state = 1;
                await task;
                state = 2;
            };

            someMethod();

            Assert.AreEqual(state, 1, "Async method should start running after being invoked");

            task.ContinueWith(x =>
                {
                    Assert.AreEqual(state, 2, "Async method should finish after the task is finished");
                    done();
                });

            Assert.AreEqual(state, 1, "Async method should not continue past point 1 until task is finished");

            tcs.SetResult(0);
        }

        [Test(ExpectedCount = 7)]
        public void AsyncTask()
        {
            var done = Assert.Async();

            int state = 0;
            var tcs = new TaskCompletionSource<int>();
            Task task = tcs.Task;

            Func<Task> someMethod = async () =>
            {
                state = 1;
                await task;
                state = 2;
            };

            Task asyncTask = someMethod();

            Assert.AreEqual(asyncTask.Status, TaskStatus.Running, "asyncTask should be running immediately");
            Assert.AreEqual(state, 1, "Async method should start running after being invoked");

            asyncTask.ContinueWith(x =>
               {
                   Assert.AreEqual(asyncTask.Status, TaskStatus.RanToCompletion, "asyncTask should run to completion");
                   Assert.True(asyncTask.Exception == null, "asyncTask should not throw an exception");
                   Assert.AreEqual(state, 2, "Async method should finish after the task is finished");

                   done();
               });

            Assert.AreEqual(asyncTask.Status, TaskStatus.Running, "asyncTask should be running before awaited task is finished");
            Assert.AreEqual(state, 1, "Async method should not continue past point 1 until task is finished");

            tcs.SetResult(0);
        }

        [Test(ExpectedCount = 8)]
        public void AsyncTaskBodyThrowsException()
        {
            var done = Assert.Async();

            int state = 0;
            var tcs = new TaskCompletionSource<int>();
            Task task = tcs.Task;
            var ex = new Exception("Some text");

            Func<Task> someMethod = async () =>
            {
                state = 1;
                await task;
                state = 2;
                throw ex;
            };

            Task asyncTask = someMethod();

            Assert.AreEqual(asyncTask.Status, TaskStatus.Running, "asyncTask should be running immediately");
            Assert.AreEqual(state, 1, "Async method should start running after being invoked");

            asyncTask.ContinueWith(x =>
                {
                    Assert.AreEqual(asyncTask.Status, TaskStatus.Faulted, "asyncTask should fault");
                    Assert.True(asyncTask.Exception != null, "asyncTask should have an exception");
                    Assert.True(asyncTask.Exception.InnerExceptions[0] == ex, "asyncTask should throw the correct exception");
                    Assert.AreEqual(state, 2, "Async method should finish after the task is finished");

                    done();
                });

            Assert.AreEqual(asyncTask.Status, TaskStatus.Running, "asyncTask should be running before awaited task is finished");
            Assert.AreEqual(state, 1, "Async method should not continue past point 1 until task is finished");

            tcs.SetResult(0);
        }

        [Test(ExpectedCount = 8)]
        public void AwaitTaskThatFaults()
        {
            var done = Assert.Async();

            int state = 0;
            var tcs = new TaskCompletionSource<int>();
            Task task = tcs.Task;
            var ex = new Exception("Some text");

            Func<Task> someMethod = async () =>
            {
                state = 1;
                await task;
                state = 2;
            };

            Task asyncTask = someMethod();

            Assert.AreEqual(asyncTask.Status, TaskStatus.Running, "asyncTask should be running immediately");
            Assert.AreEqual(state, 1, "Async method should start running after being invoked");

            asyncTask.ContinueWith(x =>
                {
                    Assert.AreEqual(asyncTask.Status, TaskStatus.Faulted, "asyncTask should fault");
                    Assert.True(asyncTask.Exception != null, "asyncTask should have an exception");
                    Assert.True(asyncTask.Exception.InnerExceptions[0] == ex, "asyncTask should throw the correct exception");
                    Assert.AreEqual(state, 1, "Async method should not have reach anything after the faulting await");

                    done();
                });

            Assert.AreEqual(asyncTask.Status, TaskStatus.Running, "asyncTask should be running before awaited task is finished");
            Assert.AreEqual(state, 1, "Async method should not continue past point 1 until task is finished");

            tcs.SetException(ex);
        }

        [Test(ExpectedCount = 2)]
        public void AggregateExceptionsAreUnwrappedWhenAwaitingTask()
        {
            var done = Assert.Async();

            int state = 0;
            var tcs = new TaskCompletionSource<int>();
            Task task = tcs.Task;

            var ex = new Exception("Some text");
            tcs.SetException(ex);

            Func<Task> someMethod = async () =>
            {
                try
                {
                    await task;
                    Assert.Fail("Await should have thrown");
                }
                catch (Exception ex2)
                {
                    Assert.True(ReferenceEquals(ex, ex2), "The exception should be correct");
                }
                state = 1;
            };

            someMethod();

            task.ContinueWith(x =>
                {
                    Assert.AreEqual(state, 1, "Should have reached the termination state");

                    done();
                });
        }

        [Test(ExpectedCount = 8)]
        public void AsyncTaskThatReturnsValue()
        {
            var done = Assert.Async();

            int state = 0;
            var tcs = new TaskCompletionSource<int>();
            Task task = tcs.Task;

            Func<Task<int>> someMethod = async () =>
            {
                state = 1;
                await task;
                state = 2;
                return 42;
            };

            Task<int> asyncTask = someMethod();

            Assert.AreEqual(asyncTask.Status, TaskStatus.Running, "asyncTask should be running immediately");
            Assert.AreEqual(state, 1, "Async method should start running after being invoked");

            asyncTask.ContinueWith(x =>
                {
                    Assert.AreEqual(asyncTask.Status, TaskStatus.RanToCompletion, "asyncTask should run to completion");
                    Assert.True(asyncTask.Exception == null, "asyncTask should not throw an exception");
                    Assert.AreEqual(state, 2, "Async method should finish after the task is finished");
                    Assert.AreEqual(asyncTask.Result, 42, "Result should be correct");

                    done();
                });

            Assert.AreEqual(asyncTask.Status, TaskStatus.Running, "asyncTask should be running before awaited task is finished");
            Assert.AreEqual(state, 1, "Async method should not continue past point 1 until task is finished");

            tcs.SetResult(0);
        }
    }
}
