using Bridge.Test.NUnit;

namespace Bridge.ClientTest.CSharp7
{
    /// <summary>
    /// The test here consists in checking C# 7's 'is' syntax support.
    /// </summary>
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Is pattern - {0}")]
    public class TestIsPattern
    {
        /// <summary>
        /// Explores several 'is' pattern syntax variations, and fail if they
        /// do not behave the expected way.
        /// </summary>
        [Test]
        public static void IsPatternTests()
        {
            object o = "16"; 
            if (o is int i || (o is string s && int.TryParse(s, out i))) 
            {
                object o1 = "17";
                if (o1 is int i1 || (o1 is string s1 && int.TryParse(s1, out i1)))
                {
                    Assert.AreEqual(17, i1);
                }
                else
                {
                    Assert.Fail("'Is Pattern' failure");
                }

                Assert.AreEqual(16, i);
            }
            else
            {
                Assert.Fail("'Is Pattern' failure");
            }
        }
    }
}