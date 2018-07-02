using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// Ensures referencing tuples' values from C# maps into valid and
    /// congruent JavaScript code in different scenarios.
    /// </summary>
    [TestFixture(TestNameFormat = "#3645 - {0}")]
    public class Bridge3645
    {
        /// <summary>
        /// The value returned from funcions may be just 'false'.
        /// </summary>
        /// <returns></returns>
        public static (string a, string b) Test()
        {
            return ("testsf0", "testsf1");
        }
        
        /// <summary>
        /// Checks each case of tuples against the expected returned value.
        /// </summary>
        [Test]
        public static void TestTupleUseCases()
        {
            (string Prop1, string Prop2) val1 = ("test1", "test2");
            string test1 = val1.Prop1;
            string test11 = val1.Prop2;
            Assert.AreEqual("test1", test1, "Non nullable tuple 1st value can be retrieved.");
            Assert.AreEqual("test2", test11, "Non nullable tuple 2nd value can be retrieved.");

            (string Prop1, string Prop2)? val2 = ("testn1", "testn2");
            string test2 = val2.Value.Prop1;
            string test21 = val2.Value.Prop2;
            Assert.AreEqual("testn1", test2, "Nullable tuple 1st value can be retrieved.");
            Assert.AreEqual("testn2", test21, "Nullable tuple 2nd value can be retrieved.");

            // The test here must inline the function in order to reproduce the scenario
            Assert.AreEqual("testsf0", Test().a, "Inlined static function tuple 1st value can be retrieved.");
            Assert.AreEqual("testsf1", Test().b, "Inlined static function tuple 2nd value can be retrieved.");

            (string a, string b) val3()
            {
                return ("testlf0", "testlf1");
            };
            Assert.AreEqual("testlf0", val3().a, "Inlined local function tuple 1st value can be retrieved.");
            Assert.AreEqual("testlf1", val3().b, "Inlined local function tuple 2nd value can be retrieved.");
        }
    }
}