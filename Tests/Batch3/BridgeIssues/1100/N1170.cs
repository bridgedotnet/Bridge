using Bridge.Test.NUnit;
using System;
using System.Threading.Tasks;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1170 - {0}")]
    public class Bridge1170
    {
        private bool isDisposed = false;

        [Test]
        public async static void TestAsyncUsing()
        {
            var done = Assert.Async();
            var parent = new Bridge1170();
            var parent2 = new Bridge1170();

            using (new Class1(parent))
            {
                await Task.Delay(1);
                Assert.False(parent.isDisposed);
            }
            Assert.True(parent.isDisposed);

            parent.isDisposed = false;
            using (var c1 = new Class1(parent))
            {
                await Task.Delay(1);
                Assert.False(c1.isDisposed);
                Assert.False(parent.isDisposed);
            }
            Assert.True(parent.isDisposed);

            parent.isDisposed = false;
            using (Class1 c1 = new Class1(parent), c2 = new Class1(parent2))
            {
                await Task.Delay(1);
                Assert.False(c1.isDisposed);
                Assert.False(c2.isDisposed);
            }
            Assert.True(parent.isDisposed);
            Assert.True(parent2.isDisposed);

            done();
        }

        [Test]
        public async static void TestAsyncUsingWithException()
        {
            var done = Assert.Async();
            var parent = new Bridge1170();

            try
            {
                using (new Class1(parent))
                {
                    await Task.Delay(1);
                    throw new InvalidOperationException("Bridge1170 test");
                }
            }
            catch (InvalidOperationException e)
            {
                Assert.AreEqual("Bridge1170 test", e.Message);
            }

            Assert.True(parent.isDisposed);

            done();
        }

        public class Class1 : IDisposable
        {
            public bool isDisposed = false;
            private Bridge1170 parent;

            public Class1()
            {
            }

            public Class1(Bridge1170 parent)
            {
                this.parent = parent;
            }

            public void Dispose()
            {
                if (this.parent != null)
                {
                    this.parent.isDisposed = true;
                }
                isDisposed = true;
            }
        }
    }
}