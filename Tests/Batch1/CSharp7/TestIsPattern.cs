using Bridge.Test.NUnit;

namespace Bridge.ClientTest.CSharp6
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Is pattern - {0}")]
    public class TestIsPattern
    {
        [Test]
        public static void PatterAndTry()
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