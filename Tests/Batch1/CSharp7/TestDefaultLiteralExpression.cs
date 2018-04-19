using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.CSharp7
{
    /// <summary>
    /// The test here consists in ensuring default literal expressions works
    /// while translating a Bridge project.
    /// </summary>
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "DefaultLiteralExpression - {0}")]
    public class TestDefaultLiteralExpression
    {
        /// <summary>
        /// Test different approaches that should accept the 'default' keyword.
        /// </summary>
        [Test]
        public static void TestBasic()
        {
            int a = default;
            Assert.AreEqual(0, a, "Default int works.");

            bool b = default;
            Assert.False(b, "Default bool works.");

            string c = default;
            Assert.Null(c, "Default string works.");

            int? d = default;
            Assert.Null(d, "Default nullable int works.");

            Action<int, bool> action = default;
            Assert.Null(action, "Default Action<> works.");

            Predicate<string> predicate = default;
            Assert.Null(predicate, "Default Predicate<> works.");

            List<string> list = default;
            Assert.Null(list, "Default List<> works.");

            Dictionary<int, string> dictionary = default;
            Assert.Null(dictionary, "Default Dictionary<> works.");

            Assert.AreEqual(11, Add(11), "Default value in more than one method parameters works.");
            Assert.AreEqual(12, Add(11, 1), "Default value in last method parameter works.");
            Assert.AreEqual(14, Add(11, 1, 2), "Overridden (provided) default value in method parameters works.");
        }

        /// <summary>
        /// A method just implementing "default parameter values" in which
        /// their default value is just the 'default' keyword.
        /// </summary>
        /// <param name="x">This will be a required parameter.</param>
        /// <param name="y">This will be able to assume a default value for the type.</param>
        /// <param name="z">This will be able to assume a default value for the type.</param>
        /// <returns>
        /// A simple sum of the provided values, considering their default (which should be zero).
        /// </returns>
        private static int Add(int x, int y = default, int z = default)
        {
            return x + y + z;
        }
    }
}