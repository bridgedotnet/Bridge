using Bridge;
using Bridge.Test;

using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.BridgeIssues
{
    public class Bridge625A : IEqualityComparer<int>
    {
        public bool Equals(int x, int y)
        {
            return x == y;
        }

        public int GetHashCode(int obj)
        {
            return obj.GetHashCode();
        }
    }

    // Bridge[#625]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#625 - {0}")]
    public class Bridge625
    {
        [Test(ExpectedCount = 4)]
        public static void TestUseCase()
        {
            var list = new int[] { 1, 2, 3 };

            var d1 = list.ToDictionary(x => x);
            Assert.True(d1 is Dictionary<int, int>,"Bridge625 d1");

            var d2 = list.ToDictionary(x => x, new Bridge625A());
            Assert.True(d2 is Dictionary<int, int>, "Bridge625 d2");

            var d3 = list.ToDictionary(x => x, y => y);
            Assert.True(d3 is Dictionary<int, int>, "Bridge625 d3");

            var d4 = list.ToDictionary(x => x, y => y, new Bridge625A());
            Assert.True(d4 is Dictionary<int, int>, "Bridge625 d4");

        }
    }
}