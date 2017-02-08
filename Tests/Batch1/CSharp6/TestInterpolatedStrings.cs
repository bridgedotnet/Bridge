using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.CSharp6
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Interpolated Strings - {0}")]
    public class TestInterpolatedStrings
    {
        private class Person
        {
            public string Name { get; set; } = "Jane";
            public int Age { get; set; } = 10;
        }

        public static int P { get; set; }

        public static int F1()
        {
            return 0;
        }

        public static int F2()
        {
            return 0;
        }

        public static int F3()
        {
            return 0;
        }

        [Test]
        public static void TestBasic()
        {
            var p = new Person();

            Assert.AreEqual("Jane is 10 year{s} old", $"{p.Name} is {p.Age} year{{s}} old");
            Assert.AreEqual("                Jane is 010 year{s} old", $"{p.Name,20} is {p.Age:D3} year{{s}} old");

            Assert.AreEqual("Jane is 10 years old", $"{p.Name} is {p.Age} year{(p.Age == 1 ? "" : "s")} old");
            p.Age = 1;
            Assert.AreEqual("Jane is 1 year old", $"{p.Name} is {p.Age} year{(p.Age == 1 ? "" : "s")} old");

            int i = 0, j = 1, k = 2;
            Assert.AreEqual("i = 0, j = 1", $"i = {i}, j = {j}");
            Assert.AreEqual("{0, 1}", $"{{{i}, {j}}}");
            Assert.AreEqual("i = 00, j = 1, k =            2", $"i = {i:00}, j = {j:##}, k = {k,12:#0}");
            Assert.AreEqual("0, 0, 0", $"{F1()}, {P = F2()}, {F3()}");

            IFormattable f1 = $"i = {i}, j = {j}";
            FormattableString f2 = $"i = {i}, j = {j}";
            Assert.AreEqual(2, f2.ArgumentCount);
            Assert.AreEqual("i = {0}, j = {1}", f2.Format);
            Assert.AreEqual(0, f2.GetArgument(0));
            Assert.AreEqual(1, f2.GetArgument(1));
            Assert.AreEqual(2, f2.GetArguments().Length);
            Assert.AreEqual("i = 0, j = 1", f2.ToString());
        }
    }
}