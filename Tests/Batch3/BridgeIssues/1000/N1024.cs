using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#1024]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1024 - {0}")]
    public class Bridge1024
    {
        public class ClassB : ClassC
        {
            public ClassB(string p = "classB") : base(p)
            {
            }

            public string GetFieldA()
            {
                return this.a;
            }
        }

        public class ClassC
        {
            public string a;

            public ClassC(string b)
            {
                a = b;
            }
        }

        [Test(ExpectedCount = 1)]
        public static void TestConstructorOptionalParameter()
        {
            ClassB obj = new ClassB();
            Assert.AreEqual("classB", obj.GetFieldA());
        }
    }
}