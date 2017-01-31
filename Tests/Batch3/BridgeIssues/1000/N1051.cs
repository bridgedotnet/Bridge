using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1051 - {0}")]
    public class Bridge1051
    {
        [Test]
        public static void TestInlinePopertyWithValue()
        {
            Script.Write("var Foo = function(){this.currentBar = false; this.setBar = function(value){this.currentBar = value;};};");

            var foo = new Foo();
            foo.Bar = true;
            var baz = foo.Bar;
            Assert.AreEqual(true, baz);
        }

        [External]
        [Name("Foo")]
        public class Foo
        {
            [FieldProperty]
            [Name("currentBar")]
            public bool Bar
            {
                get { return false; }
                [Template("setBar({value})")]
                set
                { }
            }
        }
    }
}