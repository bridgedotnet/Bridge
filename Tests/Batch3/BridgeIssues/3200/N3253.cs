using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// This test consists in checking whether class properties' CanWrite()
    /// method returns a value congruent to C# and the class definition.
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
            public Person(int id, string name)
            {
                Id = id;
                RWId = id;
                Name = name;
                RWName = name;
            }
            public int Id { get; }
            public string Name { get; }
            public int RWId { get; }
            public string RWName { get; }
        }

        /// <summary>
        /// Check each class' property whether they have the expected
        /// CanWrite() state
        /// </summary>
        [Test]
        public static void TestCanSetForReadonlyProperty()
        {
            var idProperty = typeof(Person).GetProperty("Id");
            Assert.False(idProperty.CanWrite, "Readonly Id property has CanWrite() == false");

            var nameProperty = typeof(Person).GetProperty("Name");
            Assert.False(nameProperty.CanWrite, "Readonly Name property has CanWrite() == false");

            var rwidProperty = typeof(Person).GetProperty("RWId");
            Assert.True(idProperty.CanWrite, "Read-write RWId property has CanWrite() == true");

            var rwnameProperty = typeof(Person).GetProperty("RWName");
            Assert.True(idProperty.CanWrite, "Read-write RWName property has CanWrite() == true");
        }
    }
}