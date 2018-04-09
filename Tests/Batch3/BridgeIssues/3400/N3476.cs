using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in ensuring async tasks can't have the
    /// flow broken, which results in race conditions and data corruption.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3476 - {0}")]
    public class Bridge3476
    {
        /// <summary>
        /// A class to implement the async tasks that can be called.
        /// </summary>
        public class Case0
        {
            public Case0(Action done)
            {
                testData = true;
                this.done = done;
                source = new TaskCompletionSource<object>();
            }

            public void SomeEvent1()
            {
                Method1().ContinueWith(r_ => { });
            }

            public void SomeEvent2()
            {
                Method2().ContinueWith(r_ => { });
            }

            public async Task<string> Method1()
            {
                // wait for second click
                object oResult = await source.Task;

                // do some finishing
                return await Method4();
            }

            public async Task<string> Method2()
            {
                //wake up second activity
                source.SetResult(null);

                //do some finishing
                return await Method3();
            }

            public async Task<string> Method3()
            {
                // call whatever
                await Method5();

                testData = false;

                return "";
            }

            public async Task<string> Method4()
            {
                // Expected: True
                Assert.True(testData, "Data not corrupt as the first task runs.");

                await Method5();

                // Expected: True
                Assert.True(testData, "Data does not get corrupt as the second task runs.");
                done();
                return "";
            }

            public Task<string> Method5()
            {
                return Task.FromResult<string>("");
            }

            bool testData;
            private Action done;
            TaskCompletionSource<object> source;
        }

        public class Case1
        {
            public Case1(Action done)
            {
                iTestData = 0;
                this.done = done;
                source = new TaskCompletionSource<object>();
            }

            public void SomeEvent1()
            {
                Method1().ContinueWith(r_ => { });
            }

            public void SomeEvent2()
            {
                Method2().ContinueWith(r_ => { });
            }

            public async Task<string> Method1()
            {
                // wait for second click
                object oResult = await source.Task;

                // do some finishing
                return await Method4();
            }

            public async Task<string> Method2()
            {
                //wake up second activity
                source.SetResult(null);

                //do some finishing
                return await Method3();
            }

            public async Task<string> Method3()
            {
                // call whatever
                await Method5();

                return "";
            }

            public async Task<string> Method4()
            {
                iTestData++;
                int iStoreValue = iTestData;
                await Method5();

                // Expected: iStoreValue == iTestData
                Assert.AreEqual(iStoreValue, iTestData, "Data did not get corrupt with the async-await calls (." + chkCount + "/3).");

                if (chkCount++ >= 3)
                {
                    done();
                }

                return "";
            }
            public Task<string> Method5()
            {
                return Task.FromResult<string>("");
            }

            int iTestData;
            TaskCompletionSource<object> source;
            private Action done;
            int chkCount = 1;
        }

        /// <summary>
        /// Run the tasks expecting that Case0.Method4 call would assert as true
        /// testData value in both events.
        /// </summary>
        [Test(ExpectedCount = 2)]
        public async static void TestTaskCase0()
        {
            var done = Assert.Async();
            var case0 = new Case0(done);

            case0.SomeEvent1();

            await Task.Delay(1000);

            case0.SomeEvent2();
        }

        /// <summary>
        /// Run the tasks expecting that Temp.Method4 call would assert as true
        /// testData value in both calls.
        /// </summary>
        [Test(ExpectedCount = 3)]
        public static void TestTaskCase1()
        {
            var done = Assert.Async();
            var case1 = new Case1(done);

            case1.SomeEvent1();
            case1.SomeEvent1();
            case1.SomeEvent2();
            case1.SomeEvent1();
        }

    }
}