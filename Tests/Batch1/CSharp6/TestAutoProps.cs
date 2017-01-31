using Bridge.Test.NUnit;

namespace Bridge.ClientTest.CSharp6
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Auto properties - {0}")]
    public class TestAutoProps
    {
        public class Customer
        {
            public string First { get; set; } = "Jane";
            public string Last { get; set; } = "Doe";
            public string Name { get; }

            public static string staticField = "test1";
            public string Prop1 { get; set; } = staticField;
            public string Prop2 { get; set; } = staticField + "2";

            public Customer(string first, string last)
            {
                Name = first + " " + last;
            }
        }

        [Test]
        public static void TestBasic()
        {
            var c = new Customer("A", "B");

            Assert.AreEqual("A B", c.Name);
            Assert.AreEqual("Jane", c.First);
            Assert.AreEqual("Doe", c.Last);
            Assert.AreEqual("test1", c.Prop1);
            Assert.AreEqual("test12", c.Prop2);
        }
    }
}