using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// This issue involves getting whether the intersection results in an
    /// object with Type1 and Type2 properties, so we just check if the
    /// resulting intersection is that.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3231 - {0}")]
    public class Bridge3231
    {

        [ObjectLiteral(ObjectCreateMode.Constructor)]
        public class Person
        {
            public Person(string name)
            {
                Name = name;
            }
            public string Name { get; }
        }

        [ObjectLiteral(ObjectCreateMode.Constructor)]
        public class Wrapper<T>
        {
            public Wrapper(T value)
            {
                Value = value;
            }
            public T Value { get; }
        }

        [Test]
        public static void TestGenericObjectLiteral()
        {
            object x = new Wrapper<Person>(new Person("test"));

            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge3231+Wrapper`1[[Bridge.ClientTest.Batch3.BridgeIssues.Bridge3231+Person, Bridge.ClientTest.Batch3]]", x.GetType().FullName);
        }
    }
}