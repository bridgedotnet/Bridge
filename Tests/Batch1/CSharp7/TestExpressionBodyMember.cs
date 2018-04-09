using Bridge.Test.NUnit;

namespace Bridge.ClientTest.CSharp7
{
    /// <summary>
    /// The test here consists in checking expression-bodied members support,
    /// following C#7 specification patterns.
    /// </summary>
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Expression-bodied members - {0}")]
    public class TestExpressionBodyMember
    {
        /// <summary>
        /// Instantiate the different expression body enabled classes
        /// and explore the side effects of the defined expressions.
        /// </summary>
        [Test]
        public static void Test()
        {
            var common = new Common();
            Assert.True(common.Initialized, "Simple expression-bodied members works.");

            common.ExampleText = "test";
            Assert.AreEqual("test", common.ExampleText, "Get/set (property) expression body works.");
        }

        /// <summary>
        /// Simple expression member, that mangles another, boolean, value
        /// within the class.
        /// </summary>
        class Common
        {
            public bool Initialized = false;

            public Common() => Initialized = true;

            private string _exampleText;
            public string ExampleText
            {
                get => _exampleText;
                set => _exampleText = value;
            }
        }
    }
}