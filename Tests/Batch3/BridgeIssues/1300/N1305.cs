using Bridge.Test.NUnit;

using System.Threading.Tasks;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1305 - {0}")]
    public class Bridge1305
    {
        private static int CurrentInt;
        private static DataClass CurrentDataClass;
        private static DataStruct CurrentDataStruct;

        [Test]
        public static async void TestAsyncIntReturnWithAssigmentFromResult()
        {
            var done = Assert.Async();

            var result = await TestIntResult();
            Assert.AreEqual(10, result);
            Assert.AreEqual(10, CurrentInt);

            done();
        }

        [Test]
        public static async void TestAsyncDataClassReturnWithAssigmentFromResult()
        {
            var done = Assert.Async();

            var result = await TestClassResult();
            Assert.NotNull(result);
            Assert.AreEqual(11, result.Value);
            Assert.NotNull(CurrentDataClass);
            Assert.AreEqual(11, CurrentDataClass.Value);

            done();
        }

        [Test]
        public static async void TestAsyncDataStructReturnWithAssigmentFromResult()
        {
            var done = Assert.Async();

            var result = await TestStructResult();
            Assert.NotNull(result);
            Assert.AreEqual(12, result.Value);
            Assert.NotNull(CurrentDataStruct);
            Assert.AreEqual(12, CurrentDataStruct.Value);

            done();
        }

        private static async Task<int> TestIntResult()
        {
            return CurrentInt = await Task.FromResult(10);
        }

        private class DataClass
        {
            public int Value { get; set; }
        }

        private static async Task<DataClass> TestClassResult()
        {
            return CurrentDataClass = await Task.FromResult(new DataClass() { Value = 11 });
        }

        private class DataStruct
        {
            public int Value { get; set; }
        }

        private static async Task<DataStruct> TestStructResult()
        {
            return CurrentDataStruct = await Task.FromResult(new DataStruct() { Value = 12 });
        }
    }
}