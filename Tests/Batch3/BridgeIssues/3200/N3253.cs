using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// This test consists in checking whether class properties' CanWrite
    /// method returns a value congruent to C# and the class definition.
    /// In addition, checks also for the CanRead state.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3253 - {0}")]
    public class Bridge3253
    {
        /// <summary>
        /// A subject class with a read-only and read-write properties
        /// </summary>
        [Reflectable]
        public class Person
        {
            // CanRead, !CanWrite
            public int RyWn { get; }

            // CanRead, CanWrite
            public int RyWy { get; set; }

            // !CanRead, CanWrite
            public int RnWy { set { } }
        }

        /// <summary>
        /// Check each class' property whether they have the expected
        /// CanWrite and CanRead states
        /// </summary>
        [Test]
        public static void TestCanSetForReadonlyProperty()
        {
            var p1 = typeof(Person).GetProperty("RyWn");
            var p2 = typeof(Person).GetProperty("RyWy");
            var p3 = typeof(Person).GetProperty("RnWy");

            Assert.False(p1.CanWrite, "Readonly RyWn property has CanWrite() == false");
            Assert.True(p1.CanRead, "Readonly RyWn property has CanRead() == true");

            Assert.True(p2.CanWrite, "Read-write RyWy property has CanWrite() == true");
            Assert.True(p2.CanRead, "Read-write RyWy property has CanRead() == true");

            Assert.True(p3.CanWrite, "Write-only RnWy property has CanWrite() == true");
            Assert.False(p3.CanRead, "Write-only RnWy property has CanRead() == false");
        }
    }
}