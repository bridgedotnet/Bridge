using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in checking whether templates on events would
    /// replace the {value} placeholder even if the {this} placeholder is not
    /// specified.
    /// </summary>
    [TestFixture(TestNameFormat = "#3418 - {0}")]
    public class Bridge3418
    {
        /// <summary>
        ///
        /// </summary>
        public event Action OnDragEnd
        {
            [Template("status = '{value}+';")]
            add { }
            [Template("{this}.status = '{value}-';")]
            remove { }
        }

        public string status { get; set; }

        static void Handler()
        {
        }

        /// <summary>
        /// Instantiate the class and check whether the template code produces
        /// the expected side effects in the environment.
        /// </summary>
        [Test]
        public static void TestEventTemplate()
        {
            var expected = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge3418.Handler";

            var program = new Bridge3418();
            program.status = "none";
            Assert.AreEqual("none", program.status, "Status variable reads 'none'.");

            program.OnDragEnd += Handler;
            Assert.AreEqual(expected + "+", program.status, "Template applied correctly for event.add().");

            program.OnDragEnd -= Handler;
            Assert.AreEqual(expected + "-", program.status, "Template applied correctly for event.remove().");
        }
    }
}