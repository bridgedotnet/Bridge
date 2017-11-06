using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// This test consists in checking whether binding a dynamic array to
    /// a class and casting it to its interface taints the resulting array.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3222 - {0}")]
    public class Bridge3222
    {
        /// <summary>
        /// An initial property with just the individual entry.
        /// </summary>
        interface IProperty
        {
            object Value { get; set; }
        }

        /// <summary>
        /// An interface implementing a generic spacialization to the interface
        /// above
        /// </summary>
        /// <typeparam name="T"></typeparam>
        interface IProperty<T> : IProperty
        {
#pragma warning disable CS0108 // Member hides inherited member; missing new keyword
            T Value { get; set; }
#pragma warning restore CS0108 // Member hides inherited member; missing new keyword
        }

        /// <summary>
        /// A generic class defining the interface above.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        class Property<T> : IProperty<T>
        {
            T value;
            public T Value
            {
                get { return value; }
                set { this.value = value; }
            }

            object IProperty.Value
            {
                get { return value; }
                set { this.value = (T)value; }
            }
        }

        /// <summary>
        /// Check whether the array is maintained when assigned to the
        /// interface-cast property.
        /// </summary>
        [Test]
        public static void TestArrayUnbox()
        {
            var array = new[] { "abc", "def" };
            IProperty p1 = new Property<string[]>();
            p1.Value = array;

            Assert.True(Object.Equals(array, p1.Value), "Array not tainted when assigned to interface's property");
        }
    }
}