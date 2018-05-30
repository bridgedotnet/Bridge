using Bridge.ClientTestHelper;
using Bridge.Test.NUnit;
using System.Runtime.Serialization;
using System.Collections.Generic;

namespace Bridge.ClientTest.BasicCSharp
{
    [Category(Constants.MODULE_ATTRIBUTE)]
    [TestFixture(TestNameFormat = "CollectionDataContract attribute - {0}")]
    public class CollectionDataContractAttributeTest
    {
        [CollectionDataContract(Name = "Custom{0}List", ItemName = "CustomItem")]
        public class CustomList<T> : List<T>
        {
            public CustomList()
                : base()
            {
            }

            public CustomList(T[] items)
                : base()
            {
                foreach (T item in items)
                {
                    Add(item);
                }
            }
        }

        public class TestType
        {
            public string Text { get; set; }
            public int Value { get; set; }
        }

        /// <summary>
        /// The test below basically checks whether using the
        /// CollectionDataContract affects negatively simple class access
        /// operations. I.E. whether it does not break the blass in
        /// client-side.
        /// </summary>
        [Test]
        public static void AttributeUsageWorks()
        {
            var classInstance = new CustomList<TestType>();

            Assert.AreEqual(0, classInstance.Count, "Initially the class instance has zero elements.");

            classInstance.Add(new TestType { Text = "One", Value = 1 });
            classInstance.Add(new TestType { Text = "Two", Value = 2 });

            Assert.AreEqual("One", classInstance[0].Text, "Can access members of CollectionDataContract-affected classes' first entry.");
            Assert.AreEqual("Two", classInstance[1].Text, "Can access members of CollectionDataContract-affected classes' second entry.");
            Assert.AreEqual(2, classInstance.Count, "The elements' count follows as entries are added.");

            var items = new TestType[]
            {
                    new TestType { Text = "Three", Value = 3 },
                    classInstance[1],
                    classInstance[0]
            };

            var classInstance2 = new CustomList<TestType>(items);

            Assert.AreEqual("Three", classInstance2[0].Text, "Can access members of CollectionDataContract-affected classes' initialized with constructor.");
            Assert.AreEqual("One", classInstance2[2].Text, "Can access members of CollectionDataContract-affected classes'. Members can be retrieved from other affected instances.");
        }
    }
}