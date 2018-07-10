using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// Ensures an external, template-driven constructor works on Bridge.
    /// </summary>
    /// <remarks>
    /// It is required for the class to be marked as [Reflectable] and
    /// Bridge's metadata generation rule should be enabled for this scenario
    /// to work at all.
    /// </remarks>
    [TestFixture(TestNameFormat = "#3540 - {0}")]
    public class Bridge3540
    {
        /// <summary>
        /// This class should be marked as reflectable, so that the custom
        /// constructor's template can be handled by Bridge.
        /// </summary>
        [Reflectable]
        public class Test
        {
            public int a;

            /// <summary>
            /// An extern, template-driven constructor.
            /// </summary>
            [Template("{a: 1}")]
            public extern Test();
        }

        /// <summary>
        /// A generics parameter-driven method, necessary to reproduce the issue.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        static T TemplateMethod<T>() where T : class, new()
        {
            return new T();
        }

        /// <summary>
        /// To test, we'd just call the template method specifying the Test
        /// class as its generics' specialized type, and expect the custom
        /// constructor to be executed.
        /// </summary>
        [Test]
        public static void TestTemplateCtor()
        {
            var test = TemplateMethod<Test>();

            Assert.AreEqual(1, test.a, "Custom, template-driven constructor is correctly called.");
        }
    }
}