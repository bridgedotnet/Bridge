using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// This test involves checking whether an object literal correctly emits its
    /// $getType function.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3231 - {0}")]
    public class Bridge3231
    {
        /// <summary>
        /// The Person object literal class for the wrapper class.
        /// </summary>
        [ObjectLiteral(ObjectCreateMode.Constructor)]
        public class Person
        {
            public Person(string name)
            {
                Name = name;
            }
            public string Name { get; }
        }

        /// <summary>
        /// Wrapper class which should get checked against its output.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        [ObjectLiteral(ObjectCreateMode.Constructor)]
        public class Wrapper<T>
        {
            public Wrapper(T value)
            {
                Value = value;
            }
            public T Value { get; }
        }

        /// <summary>
        /// Asserts Wrapper&lt;Person&gt; output format in client-side.
        /// </summary>
        [Test]
        public static void TestGenericObjectLiteral()
        {
            object x = new Wrapper<Person>(new Person("test"));

            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge3231+Wrapper`1[[Bridge.ClientTest.Batch3.BridgeIssues.Bridge3231+Person, Bridge.ClientTest.Batch3]]", x.GetType().FullName);
        }
    }
}