using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2689 - {0}")]
    public class Bridge2689
    {
        private StringBuilder tracker = new StringBuilder();

        public async Task<string> GetStr(string tag, string arg = null)
        {
            tracker.Append(tag);
            await Task.Delay(1);
            return arg ?? tag;
        }

        public async Task<T> ShouldNotBeInvokedAsync<T>(string tag)
        {
            await Task.Delay(1);
            throw new InvalidOperationException(tag);
        }

        public T ShouldNotBeInvoked<T>(string tag)
        {
            throw new InvalidOperationException(tag);
        }

        public async Task<bool> GetBool(string tag, bool result)
        {
            tracker.Append(tag);
            await Task.Delay(1);
            return result;
        }

        [Test]
        public static async void TestAsyncConditionalExpression1()
        {
            var done = Assert.Async();

            var c = new Bridge2689();
            var condition = false;

            var result = condition ? c.ShouldNotBeInvoked<string>("1") : (await c.GetStr("2")).ToString();
            Assert.AreEqual("2", result);

            done();
        }

        [Test]
        public static async void TestAsyncConditionalExpression2()
        {
            var done = Assert.Async();

            var c = new Bridge2689();
            var condition = false;

            var result = condition ? await c.ShouldNotBeInvokedAsync<string>("1") : await c.GetStr("2");
            Assert.AreEqual("2", result);

            done();
        }

        [Test]
        public static async void TestAsyncConditionalExpression3()
        {
            var done = Assert.Async();

            var c = new Bridge2689();
            var condition = true;

            var result = condition ? await c.GetStr("1") : c.ShouldNotBeInvoked<string>("2");
            Assert.AreEqual("1", result);

            done();
        }

        [Test]
        public static async void TestAsyncConditionalExpression4()
        {
            var done = Assert.Async();

            var c = new Bridge2689();
            var condition = true;

            var result = condition ? await c.GetStr("1") : await c.ShouldNotBeInvokedAsync<string>("2");
            Assert.AreEqual("1", result);

            done();
        }

        [Test]
        public static async void TestAsyncConditionalExpression5()
        {
            var done = Assert.Async();

            var c = new Bridge2689();
            var condition = false;

            var result = condition ? c.ShouldNotBeInvoked<string>("1") : await c.GetStr("2", await c.GetStr("3"));
            Assert.AreEqual("3", result);
            Assert.AreEqual("32", c.tracker.ToString());

            done();
        }

        [Test]
        public static async void TestAsyncConditionalExpression6()
        {
            var done = Assert.Async();

            var c = new Bridge2689();
            var condition = false;

            var result = condition ? c.ShouldNotBeInvoked<string>("1") : await c.GetStr("2", await c.GetStr("3", await c.GetStr("4")));
            Assert.AreEqual("4", result);
            Assert.AreEqual("432", c.tracker.ToString());

            done();
        }

        [Test]
        public static async void TestAsyncConditionalExpression7()
        {
            var done = Assert.Async();

            var c = new Bridge2689();
            var condition = true;

            var result = condition ? await c.GetStr("2", await c.GetStr("3", await c.GetStr("4"))) : c.ShouldNotBeInvoked<string>("1");
            Assert.AreEqual("4", result);
            Assert.AreEqual("432", c.tracker.ToString());

            done();
        }

        [Test]
        public static async void TestAsyncConditionalExpression8()
        {
            var done = Assert.Async();

            var c = new Bridge2689();
            var condition = false;

            var result = condition ? c.ShouldNotBeInvoked<string>("1") : await c.GetStr("2", await c.GetStr("3", condition ? c.ShouldNotBeInvoked<string>("3_1") : await c.GetStr("3_2")));
            Assert.AreEqual("3_2", result);
            Assert.AreEqual("3_232", c.tracker.ToString());

            done();
        }

        [Test]
        public static async void TestAsyncConditionalExpression9()
        {
            var done = Assert.Async();

            var c = new Bridge2689();
            var condition = true;

            var result = condition ? (!condition ? c.ShouldNotBeInvoked<string>("1") : await c.GetStr("2")) : await c.ShouldNotBeInvokedAsync<string>("3");
            Assert.AreEqual("2", result);

            done();
        }

        [Test]
        public static async void TestAsyncConditionalExpression10()
        {
            var done = Assert.Async();

            var c = new Bridge2689();

            var result = await c.GetBool("1", true) ? await c.GetStr("2") : await c.ShouldNotBeInvokedAsync<string>("3");
            Assert.AreEqual("2", result);
            Assert.AreEqual("12", c.tracker.ToString());

            done();
        }

        [Test]
        public static async void TestAsyncBinaryExpression1()
        {
            var done = Assert.Async();

            var c = new Bridge2689();

            var result = await c.GetBool("1", true) && (await c.GetBool("2", true) ? await c.GetBool("3", true) : await c.ShouldNotBeInvokedAsync<bool>("4"));
            Assert.True(result);
            Assert.AreEqual("123", c.tracker.ToString());

            done();
        }

        [Test]
        public static async void TestAsyncBinaryExpression2()
        {
            var done = Assert.Async();

            var c = new Bridge2689();

            var result = await c.GetBool("1", true) && await c.GetBool("2", true) && await c.GetBool("3", true);
            Assert.True(result);
            Assert.AreEqual("123", c.tracker.ToString());

            done();
        }

        [Test]
        public static async void TestAsyncBinaryExpression3()
        {
            var done = Assert.Async();

            var c = new Bridge2689();

            var result = await c.GetBool("1", true) && await c.GetBool("2", false) && await c.GetBool("3", true);
            Assert.False(result);
            Assert.AreEqual("12", c.tracker.ToString());

            done();
        }

        [Test]
        public static async void TestAsyncBinaryExpression4()
        {
            var done = Assert.Async();

            var c = new Bridge2689();

            var result = true && await c.GetBool("1", true) && await c.GetBool("2", true) && await c.GetBool("3", true);
            Assert.True(result);
            Assert.AreEqual("123", c.tracker.ToString());

            done();
        }

        [Test]
        public static async void TestAsyncBinaryExpression5()
        {
            var done = Assert.Async();

            var c = new Bridge2689();

            var result = await c.GetBool("1", false) || (await c.GetBool("2", true) ? await c.GetBool("3", true) : await c.ShouldNotBeInvokedAsync<bool>("4"));
            Assert.True(result);
            Assert.AreEqual("123", c.tracker.ToString());

            done();
        }

        [Test]
        public static async void TestAsyncBinaryExpression6()
        {
            var done = Assert.Async();

            var c = new Bridge2689();

            var result = await c.GetBool("1", false) || await c.GetBool("2", false) || await c.GetBool("3", true);
            Assert.True(result);
            Assert.AreEqual("123", c.tracker.ToString());

            done();
        }

        [Test]
        public static async void TestAsyncBinaryExpression7()
        {
            var done = Assert.Async();

            var c = new Bridge2689();

            var result = await c.GetBool("1", true) || await c.GetBool("2", false) || await c.GetBool("3", true);
            Assert.True(result);
            Assert.AreEqual("1", c.tracker.ToString());

            done();
        }

        [Test]
        public static async void TestAsyncBinaryExpression8()
        {
            var done = Assert.Async();

            var c = new Bridge2689();

            var result = false || await c.GetBool("1", false) || await c.GetBool("2", false) || await c.GetBool("3", false);
            Assert.False(result);
            Assert.AreEqual("123", c.tracker.ToString());

            done();
        }

        [Test]
        public static async void TestAsyncBinaryExpression9()
        {
            var done = Assert.Async();

            var c = new Bridge2689();

            var result = await c.GetBool("1", true) && await c.GetBool("2", false) || await c.GetBool("3", true);
            Assert.True(result);
            Assert.AreEqual("123", c.tracker.ToString());

            done();
        }

        [Test]
        public static async void TestAsyncBinaryExpression10()
        {
            var done = Assert.Async();

            var c = new Bridge2689();

            var result = await c.GetBool("1", true) && await c.GetBool("2", true) || await c.GetBool("3", false);
            Assert.True(result);
            Assert.AreEqual("12", c.tracker.ToString());

            done();
        }
    }
}