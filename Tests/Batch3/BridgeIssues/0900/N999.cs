using Bridge.Test;

using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#999]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#999 - {0}")]
    public class Bridge999
    {
        [Test(ExpectedCount = 12)]
        public static void TestNestedLambdasToLifting()
        {
            var offset = 1;
            Func<string> f1 = () =>
            {
                return string.Join(", ", new[] { 1, 2, 3 }.Select(value => value));
            };

            Func<string> f2 = () =>
            {
                return string.Join(", ", new[] { 4, 5, 6 }.Select(value => value + offset));
            };

            Func<string> f3 = () =>
            {
                Func<string> f4 = () =>
                {
                    return string.Join(", ", new[] { 7, 8, 9 }.Select(value => value + offset));
                };

                return f4();
            };

            Func<string> f5 = () =>
            {
                var offset2 = 2;
                return string.Join(", ", new[] { 4, 5, 6 }.Select(value => value + offset2));
            };

            dynamic scope = Script.Get("$_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge999");

            Assert.NotNull(scope.f1, "scope.f1 should exists");
            Assert.NotNull(scope.f2, "scope.f2 should exists");
            Assert.NotNull(scope.f3, "scope.f3 should exists");
            Assert.Null(scope.f4, "scope.f4 should be null");
            Assert.Null(scope.f5, "scope.f5 should be null");
            Assert.AreEqual(scope.f1(1), 1, "scope.f1(1) should be 1");
            Assert.AreEqual(scope.f2(), "1, 2, 3", "scope.f2() should be 1, 2, 3");
            Assert.AreEqual(scope.f3(), "6, 7, 8", "scope.f3() should be 6, 7, 8");
            Assert.AreEqual(f1(), "1, 2, 3", "f1() should be 1, 2, 3");
            Assert.AreEqual(f2(), "5, 6, 7", "f2() should be 5, 6, 7");
            Assert.AreEqual(f3(), "8, 9, 10", "f3() should be 8, 9, 10");
            Assert.AreEqual(f5(), "6, 7, 8", "f5() should be 6, 7, 8");
        }
    }

    // Bridge[#999_1]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#999 - {0}")]
    public class Bridge999_1
    {
        [Test(ExpectedCount = 5)]
        public static void TestNestedLambdasToLiftingInForeach()
        {
            var one = new List<int>(new []{1}).Select(x => x);

            int sum = 0;

            one.ForEach(el =>
            {
                var list = new List<int>(new [] {3,5}).Select(x => x);

                list.ForEach(el2 =>
                {
                    sum = sum + el2;
                });
            });

            Assert.AreEqual(8, sum);

            dynamic scope = Script.Get("$_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge999_1");

            Assert.NotNull(scope.f1, "scope.f1 should exists");
            Assert.Null(scope.f2, "scope.f2 should be null");
            Assert.Null(scope.f3, "scope.f3 should be null");
            Assert.AreEqual(scope.f1(1), 1, "scope.f1(1) should be 1");
        }
    }
}