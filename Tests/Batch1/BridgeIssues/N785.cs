using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#785]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#785 - {0}")]
    public class Bridge785
    {
        public class DataClass
        {
            public int Value { get; set; }

            public DataClass GetSomething(int i)
            {
                return new DataClass() { Value = i };
            }
        }

        public struct DataStruct
        {
            public int Value { get; set; }

            public DataStruct GetSomething(int i)
            {
                return new DataStruct() { Value = i };
            }
        }

        [Test(ExpectedCount = 7)]
        public static void TestUseCase()
        {
            {
                var i = 1;
                var j = Script.Write<int>("{i}", i);
                Assert.AreEqual(1, j, "Bridge785 by name");
            }
            {
                var i = 2;
                var j = Script.Write<int>("{0}", i);
                Assert.AreEqual(2, j, "Bridge785 by index");
            }
            {
                var i = new DataClass() { Value = 3 };
                var j = Script.Write<int>("{0}", i.Value);
                Assert.AreEqual(3, j, "Bridge785 by index for DataClass property");
            }
            {
                var i = new DataClass() { Value = 4 };
                var j = Script.Write<int>("{0}", i);
                Assert.AreEqual(i, j, "Bridge785 by index for DataClass");
            }
            {
                var i = new DataClass() { Value = 5 };
                var j = Script.Write<int>("{0}", i.GetSomething(55).Value);
                Assert.AreEqual(55, j, "Bridge785 by index for DataClass method");
            }
            {
                var i = new DataStruct() { Value = 6 };
                var j = Script.Write<int>("{0}", i.Value);
                Assert.AreEqual(6, j, "Bridge785 by index for DataStruct property");
            }
            {
                var i = new DataStruct() { Value = 7 };
                var j = Script.Write<int>("{0}", i.GetSomething(77).Value);
                Assert.AreEqual(77, j, "Bridge785 by index for DataStruct method");
            }
        }
    }
}