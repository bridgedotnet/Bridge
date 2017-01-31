using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    public static class Bridge743ObjectExtention
    {
        [Template("Bridge.equals({this}, b)")]
        public static extern bool BridgeEquals(this object a, object b);

        [Template("Bridge.equals({a}, b)")]
        public static extern bool BridgeEquals1(this object a, object b);

        [Template("{str1} + ' ' + {str2}")]
        public static extern string Concat(string str1, string str2);

        public static List<T2> ConvertAllItems<T, T2>(this IEnumerable<T> value, Func<T, T2> function)
        {
            List<T2> result = new List<T2>();
            foreach (T item in value)
            {
                result.Add(function(item));
            }
            return result;
        }
    }

    // Bridge[#743]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#743 - {0}")]
    public class Bridge743
    {
        [Test(ExpectedCount = 9)]
        public static void TestInlineMethodsAsReference()
        {
            object aaa = 7;
            Func<object, bool> fn1 = aaa.BridgeEquals;
            Assert.True(fn1(7));

            fn1 = aaa.BridgeEquals1;
            Assert.True(fn1(7));

            Func<object, object, bool> fn2 = Bridge743ObjectExtention.BridgeEquals;
            Assert.True(fn2(aaa, 7));

            fn2 = Bridge743ObjectExtention.BridgeEquals1;
            Assert.True(fn2(aaa, 7));

            List<string> list = new List<string> { "1", "2", "3" };
            List<int> converted = list.ConvertAllItems(int.Parse);
            Assert.AreEqual(converted[0], 1);
            Assert.AreEqual(converted[1], 2);
            Assert.AreEqual(converted[2], 3);

            Assert.Throws(() =>
            {
                List<string> list1 = new List<string> { "2147483648" };
                List<int> converted1 = list1.ConvertAllItems(int.Parse);
            }, e => e is OverflowException);

            Func<string, string, string> action1 = Bridge743ObjectExtention.Concat;
            Assert.AreEqual(action1("Hello", "world!"), "Hello world!");
        }
    }
}