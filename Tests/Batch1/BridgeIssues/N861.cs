using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    internal class Bridge861A
    {
        public int MyId { get; set; }

        public delegate void MyDelegate(Bridge861A data);

        public MyDelegate Delegates { get; set; }

        public void InvokeDelegates()
        {
            if (Delegates != null)
            {
                Delegates(this);
            }
        }
    }

    // Bridge[#861]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#861 - {0}")]
    public class Bridge861
    {
        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            var testA = new Bridge861A
            {
                MyId = 1
            };

            testA.Delegates += new Bridge861A.MyDelegate(data => data.MyId++);

            var testB = new Bridge861A
            {
                MyId = 2,
                Delegates = testA.Delegates
            };

            testB.Delegates += new Bridge861A.MyDelegate(data => data.MyId = 0);
            testB.InvokeDelegates();

            Assert.AreEqual(0, testB.MyId);
        }
    }
}