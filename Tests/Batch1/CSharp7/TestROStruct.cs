using Bridge.Test.NUnit;

namespace Bridge.ClientTest.CSharp7
{
    /// <summary>
    /// The test here consists in checking C# 7.2's readonly struct syntax
    /// handling support.
    /// </summary>
    /// <remarks>This test required adding LangVersion=7.2 to the test project.</remarks>
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "C# 7.2's ReadOnly struct - {0}")]
    public class TestROStruct
    {
        readonly struct Item
        {
            public readonly int Index;
            public readonly string Description;

            public Item(bool blankSeparator = false)
            {
                Index = -1;
                Description = blankSeparator ? "" : "--------";
            }

            public Item(int i, string d)
            {
                Index = i;
                Description = d;
            }

            public override string ToString()
            {
                return Index.ToString() + ". " + Description;
            }
        }

        /// <summary>
        /// Check whether a valid readonly struct provided allows for proper
        /// handling from Bridge.
        /// </summary>
        [Test]
        public static void TestReadOnlyStruct()
        {
            var entry = new Item();
            var entry1 = new Item(false);
            var entry2 = new Item(5, "Coldplay");

            Assert.AreEqual(0, entry.Index, "Default/empty constructor called, not 'bool/default' one.");
            Assert.AreEqual(-1, entry1.Index, "Bool constructor triggered with bool parameter matching default.");
            Assert.AreEqual("5. Coldplay", entry2.ToString(), "Full constructor matched and instance filled accordingly.");
        }
    }
}