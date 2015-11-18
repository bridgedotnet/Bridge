using Bridge;
using Bridge.QUnit;
using System;
using System.Collections.Generic;
using System.Linq;
using Bridge.Html5;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    public class Bridge597A
    {
        private string _something = "HI!";

        public string Get()
        {
            var items = new[] { "a" };
            var mappedItemsWithoutInstanceMemberAccess = items.Select((value, index) => index + ":" + value).ToArray();
            return mappedItemsWithoutInstanceMemberAccess[0];
        }

        public string GetWithMember()
        {
            var items = new[] { "a" };
            var mappedItemsWithInstanceMemberAccess = items.Select((value, index) => _something + ":" + index + ":" + value).ToArray();
            return mappedItemsWithInstanceMemberAccess[0];
        }
    }

    // Bridge[#597]
    [FileName("testBridgeIssues.js")]
    internal class Bridge597
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(2);

            var inst = new Bridge597A();
            assert.Equal(inst.Get(), "0:a", "Bridge597 Without instance member access");
            assert.Equal(inst.GetWithMember(), "HI!:0:a", "Bridge597 With instance member access");
        }
    }
}