using System;
using System.Linq;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2558 - {0}")]
    public class Bridge2558
    {
        public enum Status
        {
            [Display("tst")]
            Item1
        }

        class DisplayAttribute : Attribute
        {
            public DisplayAttribute(string name)
            {
                this.Name = name;
            }

            public string Name { get; set; }
        }

        [Test]
        public static void TestEnumReflection()
        {
            var a = Status.Item1.GetAttribute<DisplayAttribute>();
            Assert.AreEqual("tst", a.Name);

            var a1 = Bridge2558EnumExtensions.GetAttribute<DisplayAttribute>(Status.Item1);
            Assert.AreEqual("tst", a1.Name);

            var a2 = (DisplayAttribute)Status.Item1
                .GetType()
                .GetField(Status.Item1.ToString())
                .GetCustomAttributes(typeof(DisplayAttribute), false)
                .FirstOrDefault();

            Assert.AreEqual("tst", a2.Name);
        }
    }

    public static class Bridge2558EnumExtensions
    {
        public static T GetAttribute<T>(this Enum value)
        where T : Attribute
        {
            return value
            .GetType()
            .GetField(value.ToString())
            .GetCustomAttributes(typeof(T), false)
            .FirstOrDefault()
            as T;
        }
    }
}