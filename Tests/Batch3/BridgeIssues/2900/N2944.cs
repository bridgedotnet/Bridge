using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2944 - {0}")]
    public class Bridge2944
    {
        [Test]
        public static void TestGenericsNaming()
        {
            Assert.AreEqual(9, Bridge2944_A<int>.Get());
        }
    }
}

#pragma warning disable 693
public class Bridge2944_A<Bridge2944_Program>
#pragma warning restore 693
{
    public static int Get()
    {
        return global::Bridge2944_Program.Pass();
    }
}

public class Bridge2944_Program
{
    public static int Pass()
    {
        return 9;
    }
}