using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1264 - {0}")]
    public class Bridge1264
    {
        public class Bar { }

        private class Foo
        {
            private object _bck = new Bar();
        }

        [Test(ExpectedCount = 1)]
        public static void TestDefaultGetHashCodeIsRepeatable()
        {
            var foo = new Foo();
            var h1 = foo.GetHashCode();
            var h2 = foo.GetHashCode();

            Assert.AreEqual(h1, h2);
        }
    }
}