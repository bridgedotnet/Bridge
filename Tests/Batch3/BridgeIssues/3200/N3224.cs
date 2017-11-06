using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// This test consists in checking whether a interface cast of a class
    /// instance allows accessing the class' properties.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3224 - {0}")]
    public class Bridge3224
    {
        /// <summary>
        /// Interface with the property we want to access after the cast.
        /// </summary>
        [Rules(AutoProperty = AutoPropertyRule.Plain)]
        public interface IFoo
        {
            int Value { get; }
        }

        /// <summary>
        /// Class that will implement the interface above.
        /// </summary>
        [Rules(AutoProperty = AutoPropertyRule.Plain)]
        public class Foo: IFoo
        {
            public int Value { get; }

            public Foo()
            {
                Value = 5;
            }
        }

        /// <summary>
        /// Create an instance of the class, casting it back to its interface,
        /// and then from that, access the value.
        /// </summary>
        [Test]
        public static void TestAutoPlainInterfaceProperty()
        {
            var foo = (IFoo)new Foo();
            Assert.AreEqual(5, foo.Value, "Can access properties from instances cast into their interfaces");
        }
    }
}