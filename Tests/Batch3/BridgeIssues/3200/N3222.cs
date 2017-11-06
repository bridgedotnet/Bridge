using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3222 - {0}")]
    public class Bridge3222
    {
        interface IProperty
        {
            object Value { get; set; }
        }
        interface IProperty<T> : IProperty
        {
#pragma warning disable CS0108 // Member hides inherited member; missing new keyword
            T Value { get; set; }
#pragma warning restore CS0108 // Member hides inherited member; missing new keyword
        }
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

        [Test]
        public static void TestArrayUnbox()
        {
            var array = new[] { "abc", "def" };
            IProperty p1 = new Property<string[]>();
            p1.Value = array;

            Assert.True(Object.Equals(array, p1.Value));
        }
    }
}