using Bridge.Html5;
using Bridge.Test;

using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Bridge.ClientTest.Threading
{
    [Category(Constants.MODULE_THREADING)]
    [TestFixture(TestNameFormat = "Tasks - {0}")]
    public class TaskTests
    {
        private IEnumerable<T> MakeEnumerable<T>(params T[] args)
        {
            foreach (var a in args)
                yield return a;
        }

        [Test(ExpectedCount = 2)]
        public void TaskCompletionSourceTypePropertiesAreCorrect()
        {
            Assert.AreEqual(typeof(TaskCompletionSource<int>).GetClassName(), "Bridge.TaskCompletionSource", "FullName should be correct");
            var tcs = new TaskCompletionSource<int>();
            Assert.True(tcs is TaskCompletionSource<int>);
        }

        [Test(ExpectedCount = 5)]
        public void TaskTypePropertiesAreCorrect()
        {
            Assert.AreEqual(typeof(Task).GetClassName(), "Bridge.Task", "FullName for non-generic task should be correct");
            Assert.AreEqual(typeof(Task<int>).GetClassName(), "Bridge.Task", "FullName for generic task should be correct");

            var task = new TaskCompletionSource<int>().Task;
            Assert.True(task is Task<int>);
            Assert.True(task is Task);
            Assert.True(task is IDisposable);

            task.Dispose();	// Should not throw
        }

        [Test(ExpectedCount = 10)]
        public void TaskCompletionSourceWorksWhenSettingResult()
        {
            var completeAsync = Assert.Async();

            bool callbackRun = false;
            var tcs = new TaskCompletionSource<int>();

            var task = tcs.Task;

            task.ContinueWith(t =>
                {
                    Assert.True(t == task, "Callback parameter should be correct");
                    Assert.AreEqual(task.Status, TaskStatus.RanToCompletion, "Task should be completed when in the callback");
                    Assert.AreEqual(task.Result, 1, "Result should be 1 after the callback");
                    Assert.AreEqual(task.Exception, null, "Exception should be null in the callback");

                    callbackRun = true;
                });

            Assert.AreEqual(task.Status, TaskStatus.Running, "The task should be running before SetResult is called");
            Assert.False(callbackRun, "Callback should not be run before SetResult() is called");

            tcs.SetResult(1);

            Assert.AreEqual(task.Status, TaskStatus.RanToCompletion, "Task should be completed directly after SetResult() is called");
            Assert.AreEqual(task.Result, 1, "Result should be set immediately");
            Assert.AreEqual(task.Exception, null, "Exception should be null after SetResult()");

            Task.Run(() =>
                {
                    Assert.True(callbackRun, "Callback should be run");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 12)]
        public void TaskCompletionSourceWorksWhenSettingASingleException()
        {
            var completeAsync = Assert.Async();

            bool callbackRun = false;
            var tcs = new TaskCompletionSource<int>();
            var task = tcs.Task;

            var ex = new Exception("Some text");

            task.ContinueWith(t =>
                {
                    Assert.True(t == task, "Callback parameter should be correct");
                    Assert.AreEqual(task.Status, TaskStatus.Faulted, "Task should be faulted in the callback");
                    Assert.True((object)task.Exception is AggregateException);
                    Assert.True(task.Exception.InnerExceptions[0] == ex, "The exception should be correct");
                    Assert.Throws(() =>
                    {
                        var x = task.Result;
                    }, "Getting the result property in the callback should throw");

                    callbackRun = true;
                });

            Assert.AreEqual(task.Status, TaskStatus.Running, "The task should be running before the SetException() call");
            Assert.False(callbackRun, "Callback should not be run before SetException() is called");

            tcs.SetException(ex);

            Assert.AreEqual(task.Status, TaskStatus.Faulted, "The task should be faulted immediately after the SetException() call");
            Assert.True((object)task.Exception is AggregateException);
            Assert.True(task.Exception.InnerExceptions[0] == ex, "The exception should be correct immediately after SetException()");
            Assert.Throws(() =>
            {
                var x = task.Result;
            },
            "Getting the result property after SetException() should throw");

            Task.Run(() =>
                {
                    Assert.True(callbackRun, "Callback should be run");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 14)]
        public void TaskCompletionSourceWorksWhenSettingTwoExceptions()
        {
            var completeAsync = Assert.Async();

            bool callbackRun = false;
            var tcs = new TaskCompletionSource<int>();
            var task = tcs.Task;
            var ex1 = new Exception("Some text");
            var ex2 = new Exception("Some other text");

            task.ContinueWith(t =>
                {
                    Assert.True(t == task, "Callback parameter should be correct");
                    Assert.AreEqual(task.Status, TaskStatus.Faulted, "Task should be faulted in the callback");
                    Assert.True((object)task.Exception is AggregateException);
                    Assert.True(task.Exception.InnerExceptions[0] == ex1, "InnerExceptions[0] should be correct in callback");
                    Assert.True(task.Exception.InnerExceptions[1] == ex2, "InnerExceptions[1] should be correct in callback");
                    Assert.Throws(() =>
                    {
                        var x = task.Result;
                    }, "Getting the result property in the callback should throw");

                    callbackRun = true;
                });

            Assert.AreEqual(task.Status, TaskStatus.Running, "The task should be running before the SetException() call");
            Assert.False(callbackRun, "Callback should not be run before SetException() is called");

            tcs.SetException(MakeEnumerable(new[] { ex1, ex2 }));

            Assert.AreEqual(task.Status, TaskStatus.Faulted, "The task should be faulted immediately after the SetException() call");
            Assert.True((object)task.Exception is AggregateException);
            Assert.True(task.Exception.InnerExceptions[0] == ex1, "InnerExceptions[0] should be correct immediately after SetException");
            Assert.True(task.Exception.InnerExceptions[1] == ex2, "InnerExceptions[1] should be correct immediately after SetException");
            Assert.Throws(() =>
            {
                var x = task.Result;
            }, "Getting the result property after SetException() should throw");

            Task.Run(() =>
                {
                    Assert.True(callbackRun, "Callback should be run");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 10)]
        public void TaskCompletionSourceWorksWhenCancelling()
        {
            var completeAsync = Assert.Async();

            bool callbackRun = false;
            var tcs = new TaskCompletionSource<int>();
            var task = tcs.Task;

            var task1 = task.ContinueWith(t =>
                {
                    Assert.True(t == task, "Callback parameter should be correct");
                    Assert.AreEqual(task.Status, TaskStatus.Canceled, "Task should be cancelled in the callback");
                    Assert.True(task.Exception == null, "Exception should be null in the callback");
                    Assert.Throws(() =>
                    {
                        var x = task.Result;
                    }, "Getting the result property in the callback should throw");

                    callbackRun = true;
                });

            Assert.AreEqual(task.Status, TaskStatus.Running, "The task should be running before the SetCanceled() call");
            Assert.False(callbackRun, "Callback should not be run before SetCanceled() is called");

            tcs.SetCanceled();

            Assert.AreEqual(task.Status, TaskStatus.Canceled, "The task should be cancelled immediately after the SetCanceled() call");
            Assert.True(task.Exception == null, "The exception should be correct immediately after SetCanceled()");
            Assert.Throws(() =>
            {
                var x = task.Result;
            }, "Getting the result property after SetCanceled() should throw");

            task1.ContinueWith(x =>
                {
                    Assert.True(callbackRun, "The callback should be run");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 2)]
        public void CancelledTaskThrowsTaskCanceledExceptionWhenAwaited()
        {
            var completeAsync = Assert.Async();

            var tcs = new TaskCompletionSource<int>();
            tcs.SetCanceled();

            TaskCanceledException caughtException = null;

            Action someMethod = async () =>
            {
                try
                {
                    await tcs.Task;

                    Assert.Fail("Await should throw");
                }
                catch (TaskCanceledException ex)
                {
                    caughtException = ex;
                }
            };

            someMethod();

            Task.Run(() =>
                {
                    Assert.NotNull(caughtException, "Should catch");
                    Assert.True(ReferenceEquals(tcs.Task, caughtException.Task));

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 3)]
        public void CancelledTaskThrowsAggregateExceptionWithTaskCanceledExceptionWhenResultIsAccessed()
        {
            var tcs = new TaskCompletionSource<int>();
            tcs.SetCanceled();

            try
            {
                int r = tcs.Task.Result;

                Assert.Fail("Should throw");
            }
            catch (AggregateException ex)
            {
                Assert.AreEqual(ex.InnerExceptions.Count, 1, "InnerExceptions.Count");
                var tce = ex.InnerExceptions[0] as TaskCanceledException;
                Assert.NotNull(tce, "is TaskCanceledException");
                Assert.True(ReferenceEquals(tcs.Task, tce.Task), "Task");
            }
        }

        [Test(ExpectedCount = 1)]
        public void SetResultFailsWhenTheTaskIsCompleted()
        {
            var tcs = new TaskCompletionSource<int>();
            tcs.SetResult(1);
            Assert.Throws(() => tcs.SetResult(1));
        }

        [Test(ExpectedCount = 1)]
        public void SetCanceledFailsWhenTheTaskIsCompleted()
        {
            var tcs = new TaskCompletionSource<int>();
            tcs.SetCanceled();
            Assert.Throws(() => tcs.SetCanceled());
        }

        [Test(ExpectedCount = 1)]
        public void SetExceptionFailsWhenTheTaskIsCompleted()
        {
            var ex = new Exception();
            var tcs = new TaskCompletionSource<int>();
            tcs.SetException(ex);
            Assert.Throws(() => tcs.SetException(ex));
        }

        [Test(ExpectedCount = 3)]
        public void CompletedTaskHasCorrectIsXProperties()
        {
            var tcs = new TaskCompletionSource<int>();
            tcs.SetResult(1);
            Assert.True(tcs.Task.IsCompleted);
            Assert.False(tcs.Task.IsFaulted);
            Assert.False(tcs.Task.IsCanceled);
        }

        [Test(ExpectedCount = 3)]
        public void CancelledTaskHasCorrectIsXProperties()
        {
            var tcs = new TaskCompletionSource<int>();
            tcs.SetCanceled();
            Assert.True(tcs.Task.IsCompleted);
            Assert.False(tcs.Task.IsFaulted);
            Assert.True(tcs.Task.IsCanceled);
        }

        [Test(ExpectedCount = 3)]
        public void FaultedTaskHasCorrectIsXProperties()
        {
            var tcs = new TaskCompletionSource<int>();
            tcs.SetException(new Exception());
            Assert.True(tcs.Task.IsCompleted);
            Assert.True(tcs.Task.IsFaulted);
            Assert.False(tcs.Task.IsCanceled);
        }

        [Test(ExpectedCount = 2)]
        public void TrySetResultReturnsFalseWhenTheTaskIsCompleted()
        {
            var tcs = new TaskCompletionSource<int>();
            Assert.True(tcs.TrySetResult(1));
            Assert.False(tcs.TrySetResult(1));
        }

        [Test(ExpectedCount = 2)]
        public void TrySetCanceledReturnsFalseWhenTheTaskIsCompleted()
        {
            var tcs = new TaskCompletionSource<int>();
            Assert.True(tcs.TrySetCanceled());
            Assert.False(tcs.TrySetCanceled());
        }

        [Test(ExpectedCount = 2)]
        public void TrySetExceptionReturnsFalseWhenTheTaskIsCompleted()
        {
            var ex = new Exception();
            var tcs = new TaskCompletionSource<int>();
            Assert.True(tcs.TrySetException(ex));
            Assert.False(tcs.TrySetException(ex));
        }

        [Test(ExpectedCount = 10)]
        public void ContinueWithForNonGenericTaskWorkWithNoResultAndNoException()
        {
            var completeAsync = Assert.Async();

            bool complete = false;
            var tcs = new TaskCompletionSource<int>();
            Task task = tcs.Task;

            Assert.AreEqual(task.Status, TaskStatus.Running, "task should be running at point 1");

            Task continuedTask = null;

            continuedTask = task.ContinueWith(t =>
                {
                    Assert.True(t == task, "argument to task.ContinueWith callback should be correct");
                    Assert.AreEqual(task.Status, TaskStatus.RanToCompletion, "task should have run to completion at point 2");
                    Assert.AreEqual(task.Exception, null, "task should not have an exception");
                    Assert.AreEqual(continuedTask.Status, TaskStatus.Running, "continuedTask should be running at point 2");
                });

            Assert.False(task == continuedTask, "task and continuedTask should not be the same");

            var continuedTask1 = continuedTask.ContinueWith(t =>
                {
                    Assert.True(t == continuedTask, "argument to continuedTask.ContinueWith callback should be correct");
                    Assert.AreEqual(continuedTask.Status, TaskStatus.RanToCompletion, "continuedTask should have run to completion at point 3");
                    Assert.AreEqual(continuedTask.Exception, null, "continuedTask should not have an exception");

                    complete = true;
                });

            tcs.SetResult(0);

            continuedTask1.ContinueWith(x =>
                {
                    Assert.True(complete, "We should not time out");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 6)]
        public void ContinueWithWhenCallbackThrowsAnException()
        {
            var completeAsync = Assert.Async();

            bool cb1Invoked = false, cb2Invoked = false;
            var tcs = new TaskCompletionSource<int>();
            Task task = tcs.Task;

            Assert.AreEqual(task.Status, TaskStatus.Running, "task should be running at point 1");

            var t1 = task.ContinueWith(t =>
                {
                    cb1Invoked = true;
                    throw new Exception("Test");
                });

            var t2 = task.ContinueWith(t =>
                {
                    cb2Invoked = true;
                });

            tcs.SetResult(0);

            Task.Run(() =>
                {
                    Assert.AreEqual(task.Status, TaskStatus.RanToCompletion, "task status should be RanToCompletion");

                    Assert.AreEqual(t1.Status, TaskStatus.Faulted, "t1 status should be Faulted");
                    Assert.True(cb1Invoked, "Callback 1 should have been invoked");

                    Assert.AreEqual(t2.Status, TaskStatus.RanToCompletion, "t2 status should be RanToCompletion");
                    Assert.True(cb2Invoked, "Callback 2 should have been invoked");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 8)]
        public void ExceptionInTaskBodyAppearsInTheExceptionMemberForNonGenericTask()
        {
            var completeAsync = Assert.Async();

            bool complete = false;
            var tcs = new TaskCompletionSource<int>();
            Task task = tcs.Task;

            Assert.AreEqual(task.Status, TaskStatus.Running, "task should be running at point 1");

            Task continuedTask = null;

            continuedTask = task.ContinueWith(t =>
                {
                    Script.Eval("throw 'This is a test message'");
                });

            Assert.False(task == continuedTask, "task and continuedTask should not be the same");

            var continuedTask1 = continuedTask.ContinueWith(t =>
                {
                    Assert.True(t == continuedTask, "argument to continuedTask.ContinueWith callback should be correct");
                    Assert.AreEqual(continuedTask.Status, TaskStatus.Faulted, "continuedTask should have run to completion at point 3");
                    Assert.AreNotEqual(continuedTask.Exception, null, "continuedTask should have an exception");
                    Assert.True((object)continuedTask.Exception is AggregateException);
                    Assert.AreEqual(continuedTask.Exception.InnerExceptions[0].Message, "This is a test message");

                    complete = true;
                });

            tcs.SetResult(0);

            continuedTask1.ContinueWith(x =>
                {
                    Assert.True(complete, "We should not time out");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 11)]
        public void ContinueWithForNonGenericTaskCanReturnAValue()
        {
            var completeAsync = Assert.Async();

            bool done = false;
            var tcs = new TaskCompletionSource<int>();
            Task task = tcs.Task;

            Assert.AreEqual(task.Status, TaskStatus.Running, "task should be running at point 1");

            Task<int> continuedTask = null;
            continuedTask = task.ContinueWith(t =>
                {
                    Assert.True(t == task, "argument to task.ContinueWith callback should be correct");
                    Assert.AreEqual(task.Status, TaskStatus.RanToCompletion, "task should have run to completion at point 2");
                    Assert.AreEqual(task.Exception, null, "task should not have an exception");

                    Assert.AreEqual(continuedTask.Status, TaskStatus.Running, "continuedTask should be running at point 2");

                    return 42;
                });

            Assert.False(task == continuedTask, "task and continuedTask should not be the same");

            var continuedTask1 = continuedTask.ContinueWith(t =>
                {
                    Assert.True(t == continuedTask, "argument to continuedTask.ContinueWith callback should be correct");
                    Assert.AreEqual(continuedTask.Status, TaskStatus.RanToCompletion, "continuedTask should have run to completion at point 3");
                    Assert.AreEqual(continuedTask.Exception, null, "continuedTask should not have an exception");
                    Assert.AreEqual(t.Result, 42);

                    done = true;
                });

            tcs.SetResult(0);

            continuedTask1.ContinueWith(x =>
                {
                    Assert.True(done, "We should not time out");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 10)]
        public void ContinueWithWithNoReturnValueForGenericTaskWorks()
        {
            var completeAsync = Assert.Async();

            bool done = false;
            var tcs = new TaskCompletionSource<int>();
            Task<int> task = tcs.Task;

            Assert.AreEqual(task.Status, TaskStatus.Running, "task should be running at point 1");

            Task continuedTask = null;

            continuedTask = task.ContinueWith(t =>
                {
                    Assert.True(t == task, "argument to task.ContinueWith callback should be correct");
                    Assert.AreEqual(task.Status, TaskStatus.RanToCompletion, "task should have run to completion at point 2");
                    Assert.AreEqual(task.Exception, null, "task should not have an exception");
                    Assert.AreEqual(continuedTask.Status, TaskStatus.Running, "continuedTask should be running at point 2");
                });

            Assert.False(task == continuedTask, "task and continuedTask should not be the same");

            var continuedTask1 = continuedTask.ContinueWith(t =>
                {
                    Assert.True(t == continuedTask, "argument to continuedTask.ContinueWith callback should be correct");
                    Assert.AreEqual(continuedTask.Status, TaskStatus.RanToCompletion, "continuedTask should have run to completion at point 3");
                    Assert.AreEqual(continuedTask.Exception, null, "continuedTask should not have an exception");

                    done = true;
                });

            tcs.SetResult(0);

            continuedTask1.ContinueWith(x =>
                {
                    Assert.True(done, "We should not time out");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 11)]
        public void ContinueWithForGenericTaskCanReturnAValue()
        {
            var completeAsync = Assert.Async();

            bool done = false;
            var tcs = new TaskCompletionSource<int>();
            Task<int> task = tcs.Task;

            Assert.AreEqual(task.Status, TaskStatus.Running, "task should be running at point 1");

            Task<string> continuedTask = null;

            continuedTask = task.ContinueWith(t =>
                {
                    Assert.True(t == task, "argument to task.ContinueWith callback should be correct");
                    Assert.AreEqual(task.Status, TaskStatus.RanToCompletion, "task should have run to completion at point 2");
                    Assert.AreEqual(task.Exception, null, "task should not have an exception");
                    Assert.AreEqual(continuedTask.Status, TaskStatus.Running, "continuedTask should be running at point 2");

                    return t.Result + "_";
                });

            Assert.False((object)task == (object)continuedTask, "task and continuedTask should not be the same");

            var doneTask = continuedTask.ContinueWith(t =>
            {
                Assert.True(t == continuedTask, "argument to continuedTask.ContinueWith callback should be correct");
                Assert.AreEqual(continuedTask.Status, TaskStatus.RanToCompletion, "continuedTask should have run to completion at point 3");
                Assert.AreEqual(continuedTask.Exception, null, "continuedTask should not have an exception");
                Assert.AreEqual(t.Result, "42_");

                done = true;
            });

            tcs.SetResult(42);

            doneTask.ContinueWith(x =>
                {
                    Assert.True(done, "We should not time out");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 6)]
        public void DelayWorks()
        {
            var completeAsync = Assert.Async();

            bool done = false;

            Task.Run(() =>
                {
                    Assert.False(done, "Done should not be set too early");
                });

            var delay = Task.Delay(100);

            Assert.AreEqual(delay.Status, TaskStatus.Running, "delay should be running at point 1");

            var afterDelay = delay.ContinueWith(t =>
                {
                    Assert.True(t == delay, "argument to delay.ContinueWith callback should be correct");
                    Assert.AreEqual(delay.Status, TaskStatus.RanToCompletion, "delay should have run to completion at point 2");
                    Assert.AreEqual(delay.Exception, null, "delay should not have an exception");

                    done = true;
                });

            afterDelay.ContinueWith(x =>
                {
                    Assert.True(done, "We should not time out");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 3)]
        public void FromResultWorks()
        {
            var t = Task.FromResult(3);
            Assert.AreEqual(t.Status, TaskStatus.RanToCompletion, "Task should be finished");
            Assert.AreEqual(t.Result, 3, "Result should be correct");
            Assert.AreEqual(t.Exception, null, "Exception should be null");
        }

        [Test(ExpectedCount = 6)]
        public void RunWithoutResultWorks()
        {
            var completeAsync = Assert.Async();
            bool bodyRun = false, continuationRun = false;

            var task = Task.Run(() =>
                {
                    bodyRun = true;
                });

            Assert.AreEqual(task.Status, TaskStatus.Running, "task should be running at point 1");

            var doneTask = task.ContinueWith(t =>
                {
                    Assert.True(t == task, "argument to task.ContinueWith callback should be correct");
                    Assert.True(bodyRun, "Body should be run before continuation");
                    Assert.AreEqual(task.Status, TaskStatus.RanToCompletion, "task should have run to completion at point 2");
                    Assert.AreEqual(task.Exception, null, "task should not have an exception");

                    continuationRun = true;
                });

            doneTask.ContinueWith(x =>
                {
                    Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 7)]
        public void RunWithResultWorks()
        {
            var completeAsync = Assert.Async();
            bool bodyRun = false, continuationRun = false;

            var task = Task.Run(() =>
                {
                    bodyRun = true;
                    return 42;
                });

            Assert.AreEqual(task.Status, TaskStatus.Running, "task should be running at point 1");

            var doneTask = task.ContinueWith(t =>
                {
                    Assert.True(t == task, "argument to task.ContinueWith callback should be correct");
                    Assert.True(bodyRun, "Body should be run before continuation");
                    Assert.AreEqual(task.Status, TaskStatus.RanToCompletion, "task should have run to completion at point 2");
                    Assert.AreEqual(task.Result, 42);
                    Assert.AreEqual(task.Exception, null, "task should not have an exception");

                    continuationRun = true;
                });

            doneTask.ContinueWith(x =>
                {
                    Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 7)]
        public void RunWorksWhenBodyThrows()
        {
            var completeAsync = Assert.Async();
            bool bodyRun = false, continuationRun = false;

            var task = Task.Run(() =>
                {
                    bodyRun = true;
                    Script.Eval("throw 'This is a test message'");
                });

            Assert.AreEqual(task.Status, TaskStatus.Running, "task should be running at point 1");

            var doneTask = task.ContinueWith(t =>
                {
                    Assert.True(t == task, "argument to task.ContinueWith callback should be correct");
                    Assert.True(bodyRun, "Body should be run before continuation");
                    Assert.AreEqual(task.Status, TaskStatus.Faulted, "task should have faulted at point 2");
                    Assert.True((object)task.Exception is AggregateException);
                    Assert.AreEqual(task.Exception.InnerExceptions[0].Message, "This is a test message");

                    continuationRun = true;
                });

            doneTask.ContinueWith(x =>
                {
                    Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 13)]
        public void WhenAllParamArrayWithResultWorks()
        {
            var completeAsync = Assert.Async();

            bool continuationRun = false;
            var tcs1 = new TaskCompletionSource<int>();
            var tcs2 = new TaskCompletionSource<int>();
            var tcs3 = new TaskCompletionSource<int>();

            tcs1.Task.ContinueWith(_ =>
                {
                    Assert.False(continuationRun, "Continuation should not be run too early.");
                });

            tcs2.Task.ContinueWith(_ =>
                {
                    Assert.False(continuationRun, "Continuation should not be run too early.");
                });

            tcs3.Task.ContinueWith(_ =>
                {
                    Assert.False(continuationRun, "Continuation should not be run too early.");
                });

            var task = Task.WhenAll(tcs1.Task, tcs2.Task, tcs3.Task);

            var doneTask = task.ContinueWith(t =>
                {
                    Assert.False(continuationRun, "Continuation should only be run once.");
                    Assert.AreEqual(tcs1.Task.Status, TaskStatus.RanToCompletion, "Task1 should have run to completion");
                    Assert.AreEqual(tcs2.Task.Status, TaskStatus.RanToCompletion, "Task2 should have run to completion");
                    Assert.AreEqual(tcs3.Task.Status, TaskStatus.RanToCompletion, "Task3 should have run to completion");

                    Assert.True(task == t, "Callback parameter should be correct");

                    Assert.AreEqual(t.Result, new[] { 101, 3, 42 }, "Result should be correct");
                    Assert.AreEqual(t.Exception, null, "Exception for the aggregate task should be null");
                    Assert.AreEqual(t.Status, TaskStatus.RanToCompletion, "Aggregate task should have run to completion");

                    continuationRun = true;
                });

            Assert.AreEqual(task.Status, TaskStatus.Running, "task should be running after creation.");

            tcs2.SetResult(3);
            tcs1.SetResult(101);
            tcs3.SetResult(42);

            doneTask.ContinueWith(x =>
                {
                    Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 13)]
        public void WhenAllEnumerableWithResultWorks()
        {
            var completeAsync = Assert.Async();

            bool continuationRun = false;
            var tcs1 = new TaskCompletionSource<int>();
            var tcs2 = new TaskCompletionSource<int>();
            var tcs3 = new TaskCompletionSource<int>();

            tcs1.Task.ContinueWith(_ =>
                {
                    Assert.False(continuationRun, "Continuation should not be run too early.");
                });

            tcs2.Task.ContinueWith(_ =>
                {
                    Assert.False(continuationRun, "Continuation should not be run too early.");
                });

            tcs3.Task.ContinueWith(_ =>
                {
                    Assert.False(continuationRun, "Continuation should not be run too early.");
                });

            var task = Task.WhenAll(MakeEnumerable(tcs1.Task, tcs2.Task, tcs3.Task));

            var doneTask = task.ContinueWith(t =>
                {
                    Assert.False(continuationRun, "Continuation should only be run once.");
                    Assert.AreEqual(tcs1.Task.Status, TaskStatus.RanToCompletion, "Task1 should have run to completion");
                    Assert.AreEqual(tcs2.Task.Status, TaskStatus.RanToCompletion, "Task2 should have run to completion");
                    Assert.AreEqual(tcs3.Task.Status, TaskStatus.RanToCompletion, "Task3 should have run to completion");

                    Assert.True(task == t, "Callback parameter should be correct");

                    Assert.AreEqual(t.Result, new[] { 101, 3, 42 }, "Result should be correct");
                    Assert.AreEqual(t.Exception, null, "Exception for the aggregate task should be null");
                    Assert.AreEqual(t.Status, TaskStatus.RanToCompletion, "Aggregate task should have run to completion");

                    continuationRun = true;
                });

            Assert.AreEqual(task.Status, TaskStatus.Running, "task should be running after creation.");

            tcs2.SetResult(3);
            tcs1.SetResult(101);
            tcs3.SetResult(42);

            doneTask.ContinueWith(x =>
                {
                    Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 12)]
        public void WhenAllParamArrayWithoutResultWorks()
        {
            var completeAsync = Assert.Async();

            bool continuationRun = false;
            var tcs1 = new TaskCompletionSource<int>();
            var tcs2 = new TaskCompletionSource<int>();
            var tcs3 = new TaskCompletionSource<int>();

            tcs1.Task.ContinueWith(_ =>
                {
                    Assert.False(continuationRun, "Continuation should not be run too early.");
                });

            tcs2.Task.ContinueWith(_ =>
                {
                    Assert.False(continuationRun, "Continuation should not be run too early.");
                });

            tcs3.Task.ContinueWith(_ =>
                {
                    Assert.False(continuationRun, "Continuation should not be run too early.");
                });

            var task = Task.WhenAll((Task)tcs1.Task, (Task)tcs2.Task, (Task)tcs3.Task);

            var doneTask = task.ContinueWith(t =>
                {
                    Assert.False(continuationRun, "Continuation should only be run once.");
                    Assert.AreEqual(tcs1.Task.Status, TaskStatus.RanToCompletion, "Task1 should have run to completion");
                    Assert.AreEqual(tcs2.Task.Status, TaskStatus.RanToCompletion, "Task2 should have run to completion");
                    Assert.AreEqual(tcs3.Task.Status, TaskStatus.RanToCompletion, "Task3 should have run to completion");

                    Assert.True(task == t, "Callback parameter should be correct");

                    Assert.AreEqual(t.Exception, null, "Exception for the aggregate task should be null");
                    Assert.AreEqual(t.Status, TaskStatus.RanToCompletion, "Aggregate task should have run to completion");

                    continuationRun = true;
                });

            Assert.AreEqual(task.Status, TaskStatus.Running, "task should be running after creation.");

            tcs2.SetResult(3);
            tcs1.SetResult(101);
            tcs3.SetResult(42);

            doneTask.ContinueWith(x =>
                {
                    Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 12)]
        public void WhenAllEnumerableWithoutResultWorks()
        {
            var completeAsync = Assert.Async();

            bool continuationRun = false;
            var tcs1 = new TaskCompletionSource<int>();
            var tcs2 = new TaskCompletionSource<int>();
            var tcs3 = new TaskCompletionSource<int>();

            tcs1.Task.ContinueWith(_ =>
                {
                    Assert.False(continuationRun, "Continuation should not be run too early.");
                });

            tcs2.Task.ContinueWith(_ =>
                {
                    Assert.False(continuationRun, "Continuation should not be run too early.");
                });

            tcs3.Task.ContinueWith(_ =>
                {
                    Assert.False(continuationRun, "Continuation should not be run too early.");
                });

            var task = Task.WhenAll(MakeEnumerable((Task)tcs1.Task, (Task)tcs2.Task, (Task)tcs3.Task));

            var doneTask = task.ContinueWith(t =>
            {
                Assert.False(continuationRun, "Continuation should only be run once.");
                Assert.AreEqual(tcs1.Task.Status, TaskStatus.RanToCompletion, "Task1 should have run to completion");
                Assert.AreEqual(tcs2.Task.Status, TaskStatus.RanToCompletion, "Task2 should have run to completion");
                Assert.AreEqual(tcs3.Task.Status, TaskStatus.RanToCompletion, "Task3 should have run to completion");

                Assert.True(task == t, "Callback parameter should be correct");

                Assert.AreEqual(t.Exception, null, "Exception for the aggregate task should be null");
                Assert.AreEqual(t.Status, TaskStatus.RanToCompletion, "Aggregate task should have run to completion");

                continuationRun = true;
            });

            Assert.AreEqual(task.Status, TaskStatus.Running, "task should be running after creation.");

            tcs2.SetResult(3);
            tcs1.SetResult(101);
            tcs3.SetResult(42);

            doneTask.ContinueWith(x =>
                {
                    Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 17)]
        public void WhenAllShouldHaveAnErrorIfAnyIncludedTaskFaulted()
        {
            var completeAsync = Assert.Async();

            bool continuationRun = false;
            var tcs1 = new TaskCompletionSource<int>();
            var tcs2 = new TaskCompletionSource<int>();
            var tcs3 = new TaskCompletionSource<int>();
            var tcs4 = new TaskCompletionSource<int>();

            tcs1.Task.ContinueWith(_ =>
                {
                    Assert.False(continuationRun, "Continuation should not be run too early.");
                });

            tcs2.Task.ContinueWith(_ =>
                {
                    Assert.False(continuationRun, "Continuation should not be run too early.");
                });

            tcs3.Task.ContinueWith(_ =>
                {
                    Assert.False(continuationRun, "Continuation should not be run too early.");
                });

            tcs4.Task.ContinueWith(_ =>
                {
                    Assert.False(continuationRun, "Continuation should not be run too early.");
                });

            var ex1 = new Exception("exception 1");
            var ex2 = new Exception("exception 1");

            var task = Task.WhenAll(MakeEnumerable((Task)tcs1.Task, (Task)tcs2.Task, (Task)tcs3.Task, (Task)tcs4.Task));

            var doneTask = task.ContinueWith(t =>
                {
                    Assert.False(continuationRun, "Continuation should only be run once.");
                    Assert.AreEqual(tcs1.Task.Status, TaskStatus.RanToCompletion, "Task1 should have run to completion");
                    Assert.AreEqual(tcs2.Task.Status, TaskStatus.Faulted, "Task2 should be faulted");
                    Assert.AreEqual(tcs3.Task.Status, TaskStatus.Faulted, "Task3 should be faulted");
                    Assert.AreEqual(tcs4.Task.Status, TaskStatus.Canceled, "Task4 should be cancelled");

                    Assert.True(task == t, "Callback parameter should be correct");

                    Assert.True(t.Exception is AggregateException, "Exception for the aggregate task should be null");
                    Assert.AreEqual(t.Exception.InnerExceptions.Count, 2, "Should be 2 inner exceptions");
                    Assert.True(t.Exception.InnerExceptions.Contains(ex1), "ex1 should be propagated");
                    Assert.True(t.Exception.InnerExceptions.Contains(ex2), "ex2 should be propagated");
                    Assert.AreEqual(t.Status, TaskStatus.Faulted, "Aggregate task should be faulted");

                    continuationRun = true;
                });

            Assert.AreEqual(task.Status, TaskStatus.Running, "task should be running after creation.");

            tcs2.SetException(ex1);
            tcs1.SetResult(101);
            tcs3.SetException(ex2);
            tcs4.SetCanceled();

            doneTask.ContinueWith(x =>
                {
                    Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 12)]
        public void WhenAllShouldBeCancelledIfNoTaskWasFaultedButSomeWasCancelled()
        {
            var completeAsync = Assert.Async();

            bool continuationRun = false;
            var tcs1 = new TaskCompletionSource<int>();
            var tcs2 = new TaskCompletionSource<int>();
            var tcs3 = new TaskCompletionSource<int>();
            tcs1.Task.ContinueWith(_ =>
                {
                    Assert.False(continuationRun, "Continuation should not be run too early.");
                });

            tcs2.Task.ContinueWith(_ =>
                {
                    Assert.False(continuationRun, "Continuation should not be run too early.");
                });

            tcs3.Task.ContinueWith(_ =>
                {
                    Assert.False(continuationRun, "Continuation should not be run too early.");
                });

            var task = Task.WhenAll(tcs1.Task, tcs2.Task, tcs3.Task);

            var doneTask = task.ContinueWith(t =>
                {
                    Assert.False(continuationRun, "Continuation should only be run once.");
                    Assert.AreEqual(tcs1.Task.Status, TaskStatus.Canceled, "Task1 should be cancelled");
                    Assert.AreEqual(tcs2.Task.Status, TaskStatus.RanToCompletion, "Task2 should have run to completion");
                    Assert.AreEqual(tcs3.Task.Status, TaskStatus.RanToCompletion, "Task3 should have run to completion");

                    Assert.True(task == t, "Callback parameter should be correct");

                    Assert.AreEqual(t.Exception, null, "Exception for the aggregate task should be null");
                    Assert.AreEqual(t.Status, TaskStatus.Canceled, "Aggregate task should have run to completion");

                    continuationRun = true;
                });

            Assert.AreEqual(task.Status, TaskStatus.Running, "task should be running after creation.");

            tcs2.SetResult(3);
            tcs1.SetCanceled();
            tcs3.SetResult(42);

            doneTask.ContinueWith(x =>
                {
                    Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 10)]
        public void WhenAnyParamArrayWithResultWorks()
        {
            var completeAsync = Assert.Async();

            bool continuationRun = false;

            var tcs1 = new TaskCompletionSource<int>();
            var tcs2 = new TaskCompletionSource<int>();
            var tcs3 = new TaskCompletionSource<int>();

            Task<Task<int>> task = Task.WhenAny(tcs1.Task, tcs2.Task, tcs3.Task);

            var task1 = task.ContinueWith(t =>
                {
                    Assert.False(continuationRun, "Continuation should only be run once.");
                    Assert.AreEqual(tcs2.Task.Status, TaskStatus.RanToCompletion, "Task2 should have run to completion");

                    Assert.True(task == t, "Callback parameter should be correct");

                    Assert.True(t.Result == tcs2.Task, "Result should be correct");
                    Assert.AreEqual(t.Result.Result, 3, "Result should be correct");
                    Assert.AreEqual(t.Exception, null, "Exception for the aggregate task should be null");
                    Assert.AreEqual(t.Status, TaskStatus.RanToCompletion, "Aggregate task should have run to completion");

                    continuationRun = true;
                });

            Assert.AreEqual(task.Status, TaskStatus.Running, "task should be running after creation.");

            tcs2.SetResult(3);

            var doneTask = task1.ContinueWith(x =>
                {
                    Assert.True(continuationRun, "Continuation should be run immediately");

                    tcs1.SetResult(101);
                    tcs3.SetResult(42);
                });

            doneTask.ContinueWith(x =>
                {
                    Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 10)]
        public void WhenAnyEnumerableWithResultWorks()
        {
            var completeAsync = Assert.Async();

            bool continuationRun = false;
            var tcs1 = new TaskCompletionSource<int>();
            var tcs2 = new TaskCompletionSource<int>();
            var tcs3 = new TaskCompletionSource<int>();

            Task<Task<int>> task = Task.WhenAny(MakeEnumerable(tcs1.Task, tcs2.Task, tcs3.Task));

            var task1 = task.ContinueWith(t =>
                {
                    Assert.False(continuationRun, "Continuation should only be run once.");
                    Assert.AreEqual(tcs2.Task.Status, TaskStatus.RanToCompletion, "Task2 should have run to completion");

                    Assert.True(task == t, "Callback parameter should be correct");

                    Assert.True(t.Result == tcs2.Task, "Result should be correct");
                    Assert.AreEqual(t.Result.Result, 3, "Result should be correct");
                    Assert.AreEqual(t.Exception, null, "Exception for the aggregate task should be null");
                    Assert.AreEqual(t.Status, TaskStatus.RanToCompletion, "Aggregate task should have run to completion");

                    continuationRun = true;
                });

            Assert.AreEqual(task.Status, TaskStatus.Running, "task should be running after creation.");

            tcs2.SetResult(3);

            var doneTask = task1.ContinueWith(x =>
                {
                    Assert.True(continuationRun, "Continuation should be run immediately");

                    tcs1.SetResult(101);
                    tcs3.SetResult(42);
                });

            doneTask.ContinueWith(x =>
                {
                    Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 9)]
        public void WhenAnyParamArrayWithoutResultWorks()
        {
            var completeAsync = Assert.Async();

            bool continuationRun = false;

            var tcs1 = new TaskCompletionSource<int>();
            var tcs2 = new TaskCompletionSource<int>();
            var tcs3 = new TaskCompletionSource<int>();

            Task<Task> task = Task.WhenAny((Task)tcs1.Task, (Task)tcs2.Task, (Task)tcs3.Task);

            var task1 = task.ContinueWith(t =>
                {
                    Assert.False(continuationRun, "Continuation should only be run once.");
                    Assert.AreEqual(tcs2.Task.Status, TaskStatus.RanToCompletion, "Task2 should have run to completion");

                    Assert.True(task == t, "Callback parameter should be correct");

                    Assert.True(t.Result == tcs2.Task, "Result should be correct");
                    Assert.AreEqual(t.Exception, null, "Exception for the aggregate task should be null");
                    Assert.AreEqual(t.Status, TaskStatus.RanToCompletion, "Aggregate task should have run to completion");

                    continuationRun = true;
                });

            Assert.AreEqual(task.Status, TaskStatus.Running, "task should be running after creation.");

            tcs2.SetResult(3);

            var doneTask = task1.ContinueWith(x =>
                {
                    Assert.True(continuationRun, "Continuation should be run immediately");

                    tcs1.SetResult(101);
                    tcs3.SetResult(42);
                });

            doneTask.ContinueWith(x =>
                {
                    Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 9)]
        public void WhenAnyEnumerableWithoutResultWorks()
        {
            var completeAsync = Assert.Async();

            bool continuationRun = false;

            var tcs1 = new TaskCompletionSource<int>();
            var tcs2 = new TaskCompletionSource<int>();
            var tcs3 = new TaskCompletionSource<int>();

            Task<Task> task = Task.WhenAny(MakeEnumerable((Task)tcs1.Task, (Task)tcs2.Task, (Task)tcs3.Task));

            var task1 = task.ContinueWith(t =>
                {
                    Assert.False(continuationRun, "Continuation should only be run once.");
                    Assert.AreEqual(tcs2.Task.Status, TaskStatus.RanToCompletion, "Task2 should have run to completion");

                    Assert.True(task == t, "Callback parameter should be correct");

                    Assert.True(t.Result == tcs2.Task, "Result should be correct");
                    Assert.AreEqual(t.Exception, null, "Exception for the aggregate task should be null");
                    Assert.AreEqual(task.Status, TaskStatus.RanToCompletion, "Aggregate task should have run to completion");

                    continuationRun = true;
                });

            Assert.AreEqual(task.Status, TaskStatus.Running, "task should be running after creation.");

            tcs2.SetResult(3);

            var doneTask = task1.ContinueWith(x =>
                {
                    Assert.True(continuationRun, "Continuation should be run immediately");

                    tcs1.SetResult(101);
                    tcs3.SetResult(42);
                });

            doneTask.ContinueWith(x =>
                {
                    Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 9)]
        public void WhenAnyFaultsIfTheFirstTaskFaulted()
        {
            var completeAsync = Assert.Async();

            bool continuationRun = false;

            var tcs1 = new TaskCompletionSource<int>();
            var tcs2 = new TaskCompletionSource<int>();
            var tcs3 = new TaskCompletionSource<int>();
            var ex = new Exception("Some text");

            Task<Task<int>> task = Task.WhenAny(MakeEnumerable(tcs1.Task, tcs2.Task, tcs3.Task));

            var task1 = task.ContinueWith(t =>
                {
                    Assert.False(continuationRun, "Continuation should only be run once.");
                    Assert.AreEqual(tcs2.Task.Status, TaskStatus.Faulted, "Task2 should have faulted");

                    Assert.True(task == t, "Callback parameter should be correct");

                    Assert.AreEqual(t.Exception.InnerExceptions.Count, 1, "There should be one inner exception");
                    Assert.True(t.Exception.InnerExceptions[0] == ex, "Exception for the aggregate task should be correct");
                    Assert.AreEqual(task.Status, TaskStatus.Faulted, "Aggregate task should have faulted");

                    continuationRun = true;
                });

            Assert.AreEqual(task.Status, TaskStatus.Running, "task should be running after creation.");

            tcs2.SetException(ex);

            var doneTask = task1.ContinueWith(x =>
                {
                    Assert.True(continuationRun, "Continuation should be run immediately");

                    tcs1.SetResult(101);
                    tcs3.SetResult(42);
                });

            doneTask.ContinueWith(x =>
                {
                    Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 8)]
        public void WhenAnyIsCancelledIfTheFirstTaskWasCancelled()
        {
            var completeAsync = Assert.Async();

            bool continuationRun = false;
            var tcs1 = new TaskCompletionSource<int>();
            var tcs2 = new TaskCompletionSource<int>();
            var tcs3 = new TaskCompletionSource<int>();

            Task<Task<int>> task = Task.WhenAny(MakeEnumerable(tcs1.Task, tcs2.Task, tcs3.Task));

            var task1 = task.ContinueWith(t =>
                {
                    Assert.False(continuationRun, "Continuation should only be run once.");
                    Assert.AreEqual(tcs2.Task.Status, TaskStatus.Canceled, "Task2 should be cancelled");

                    Assert.True(task == t, "Callback parameter should be correct");

                    Assert.AreEqual(t.Exception, null, "Aggregate task should not have exception");
                    Assert.AreEqual(task.Status, TaskStatus.Canceled, "Aggregate task should be cancelled");

                    continuationRun = true;
                });

            Assert.AreEqual(task.Status, TaskStatus.Running, "task should be running after creation.");

            tcs2.SetCanceled();

            var doneTask = task1.ContinueWith(x =>
                {
                    Assert.True(continuationRun, "Continuation should be run immediately");

                    tcs1.SetResult(101);
                    tcs3.SetResult(42);
                });

            doneTask.ContinueWith(x =>
                {
                    Assert.True(continuationRun, "We should not time out");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 7)]
        public void ConstructorWithOnlyActionWorks()
        {
            var completeAsync = Assert.Async();

            bool taskRun = false, continuationRun = false;

            var task = new Task(() =>
                {
                    taskRun = true;
                });

            var task1 = task.ContinueWith(t =>
                {
                    Assert.True(taskRun, "Task should be run before continuation");
                    Assert.AreEqual(task.Status, TaskStatus.RanToCompletion, "Task should have run to completion");
                    Assert.True(task.Exception == null, "Exception should be null");

                    continuationRun = true;
                });

            Assert.AreEqual(task.Status, TaskStatus.Created);

            Task.Run(() =>
                {
                    Assert.False(taskRun, "Task should not be run before being started");

                    task.Start();

                    Assert.AreEqual(task.Status, TaskStatus.Running);
                });

            task1.ContinueWith(x =>
                {
                    Assert.True(continuationRun, "The continuation should be run");
                    completeAsync();
                });
        }

        [Test(ExpectedCount = 8)]
        public void ConstructorWithActionAndStateWorks()
        {
            var completeAsync = Assert.Async();

            bool taskRun = false, continuationRun = false;
            var state = new object();

            var task = new Task(s =>
                {
                    Assert.True(state == s, "The state should be correct.");
                    taskRun = true;
                }, state);

            var task1 = task.ContinueWith(t =>
                {
                    Assert.True(taskRun, "Task should be run before continuation");
                    Assert.AreEqual(task.Status, TaskStatus.RanToCompletion, "Task should have run to completion");
                    Assert.True(task.Exception == null, "Exception should be null");

                    continuationRun = true;
                });

            Assert.AreEqual(task.Status, TaskStatus.Created);

            Task.Run(() =>
                {
                    Assert.False(taskRun, "Task should not be run before being started");

                    task.Start();

                    Assert.AreEqual(task.Status, TaskStatus.Running);
                });

            task1.ContinueWith(x =>
                {
                    Assert.True(continuationRun, "The continuation should be run");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 8)]
        public void ExceptionInManuallyCreatedTaskIsStoredOnTheTask()
        {
            var completeAsync = Assert.Async();

            bool taskRun = false, continuationRun = false;
            var ex = new Exception();

            var task = new Task(() =>
                {
                    taskRun = true;
                    throw ex;
                });

            var task1 = task.ContinueWith(t =>
                {
                    Assert.True(taskRun, "Task should be run before continuation");
                    Assert.AreEqual(task.Status, TaskStatus.Faulted, "Task should be faulted");
                    Assert.True((object)task.Exception is AggregateException, "Exception should be correct");
                    Assert.AreEqual(task.Exception.InnerExceptions.Count, 1, "There should be one inner exception");
                    Assert.True(task.Exception.InnerExceptions[0] == ex, "InnerException should be correct");

                    continuationRun = true;
                });

            Assert.AreEqual(task.Status, TaskStatus.Created);

            Task.Run(() =>
                {
                    Assert.False(taskRun, "Task should not be run before being started");

                    task.Start();
                });

            task1.ContinueWith(x =>
                {
                    Assert.True(continuationRun, "The continuation should be run");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 8)]
        public void ConstructorWithOnlyFunctionWorks()
        {
            var completeAsync = Assert.Async();

            bool taskRun = false, continuationRun = false;

            var task = new Task<int>(() =>
                {
                    taskRun = true;
                    return 42;
                });

            var doneTask = task.ContinueWith(t =>
                {
                    Assert.True(taskRun, "Task should be run before continuation");
                    Assert.AreEqual(task.Status, TaskStatus.RanToCompletion, "Task should have run to completion");
                    Assert.AreEqual(task.Result, 42, "Result should be correct");
                    Assert.True(task.Exception == null, "Exception should be null");

                    continuationRun = true;
                });

            Assert.AreEqual(task.Status, TaskStatus.Created);

            Task.Run(() =>
                {
                    Assert.False(taskRun, "Task should not be run before being started");

                    task.Start();

                    Assert.AreEqual(task.Status, TaskStatus.Running);
                });

            doneTask.ContinueWith(x =>
                {
                    Assert.True(continuationRun, "The continuation should be run");

                    completeAsync();
                });
        }

        [Test(ExpectedCount = 9)]
        public void ConstructorWithFunctionAndStateWorks()
        {
            var completeAsync = Assert.Async();

            bool taskRun = false, continuationRun = false;
            var state = new object();

            var task = new Task<int>(s =>
                {
                    Assert.True(state == s, "The state should be correct.");
                    taskRun = true;
                    return 42;
                }, state);

            var doneTask = task.ContinueWith(t =>
                {
                    Assert.True(taskRun, "Task should be run before continuation");
                    Assert.AreEqual(task.Status, TaskStatus.RanToCompletion, "Task should have run to completion");
                    Assert.AreEqual(task.Result, 42, "Result should be correct");
                    Assert.True(task.Exception == null, "Exception should be null");

                    continuationRun = true;
                });

            Assert.AreEqual(task.Status, TaskStatus.Created);

            Task.Run(() =>
                {
                    Assert.False(taskRun, "Task should not be run before being started");

                    task.Start();

                    Assert.AreEqual(task.Status, TaskStatus.Running);
                });

            doneTask.ContinueWith(x =>
                {
                    Assert.True(continuationRun, "The continuation should be run");

                    completeAsync();
                });
        }
    }
}
