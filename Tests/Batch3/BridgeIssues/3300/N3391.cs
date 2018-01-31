using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in checking whether the equals (==) operator's
    /// result matches the Equals() method result with boxed enums.
    /// </summary>
    [TestFixture(TestNameFormat = "#3391 - {0}")]
    public class Bridge3391
    {
        public enum BindingConst
        {
            Nulloid = 1
        }

        /// <summary>
        /// Box the enum then check equality.
        /// </summary>
        [Test]
        public static void TestBoxedEnumEquals()
        {
            object a = BindingConst.Nulloid;
            object b = a;

            Assert.True(a == b, "== operator works.");
            Assert.True(a.Equals(b), "Equals() method works.");
            Assert.True((a == b) == a.Equals(b), "Nesting == and Equals() is the same.");
            Assert.True((a == b) == b.Equals(a), "Nesting == and inverted order of Equals() is the same.");
            Assert.True((b == a) == a.Equals(b), "Nesting inverted == and Equals() is the same.");
            Assert.True((a != b) == (!a.Equals(b)), "Nesting != and !Equals() is the same.");
        }
    }
}