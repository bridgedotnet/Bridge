using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using static Bridge.Test.NUnit.Assert;
using static System.DayOfWeek;
using static System.Linq.Enumerable;
using static System.Math;

namespace Bridge.ClientTest.CSharp6
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "DefaultLiteralExpression - {0}")]
    public class TestDefaultLiteralExpression
    {
        [Test]
        public static void TestBasic()
        {
            int a = default;
            Assert.AreEqual(0, a);

            bool b = default;
            Assert.False(b);

            string c = default;
            Assert.Null(c);

            int? d = default;
            Assert.Null(d);

            Action<int, bool> action = default;
            Assert.Null(action);

            Predicate<string> predicate = default;
            Assert.Null(predicate);

            List<string> list = default;
            Assert.Null(list);

            Dictionary<int, string> dictionary = default;
            Assert.Null(dictionary);

            Assert.AreEqual(11, Add(11));
            Assert.AreEqual(12, Add(11, 1));
            Assert.AreEqual(14, Add(11, 1, 2));
        }

        private static int Add(int x, int y = default, int z = default)
        {
            return x + y + z;
        }
    }
}