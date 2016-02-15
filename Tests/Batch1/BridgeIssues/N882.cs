using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    public class Bridge882_Static
    {
        public static int Sum { get; set; }

        public class Bridge882_A_Static
        {
            public static int Sum { get; set; }

            static Bridge882_A_Static()
            {
                var a = new[] { 5, 6, 7 };

                var s = 0;
                foreach (var v in a)
                {
                    s += v;
                }

                Bridge882_A_Static.Sum = s;
            }
        }

        static Bridge882_Static()
        {
            var a = new[] { 1, 2, 3 };

            var s = 0;
            foreach (var v in a)
            {
                s += v;
            }

            Bridge882_Static.Sum = s;
        }
    }

    // Bridge[#882]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#882 - {0}")]
    public class Bridge882
    {
        [Test(ExpectedCount = 2)]
        public static void TestUseCase()
        {
            Assert.AreEqual(6, Bridge882_Static.Sum, "Bridge882_Static.Sum");
            Assert.AreEqual(18, Bridge882_Static.Bridge882_A_Static.Sum, "Bridge882_A_Static.Sum");
        }
    }
}