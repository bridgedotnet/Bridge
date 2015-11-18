using Bridge;
using Bridge.Html5;
using Bridge.QUnit;

using System;
using System.Linq;
using System.Collections.Generic;

namespace ClientTestLibrary
{
    // Bridge[#502]
    [FileName("testBridgeIssues.js")]
    internal class Bridge502
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(1);

            int[] numbers = { 1, 2, 3 };

            int sum = 0;

            foreach (int a in numbers)
            {
                sum = sum + a;
            }

            foreach (int a in numbers)
            {
                sum = sum + a;
            }

            foreach (int a in numbers)
            {
                sum = sum + a;
            }

            foreach (int a in numbers)
            {
                sum = sum + a;
            }

            assert.Equal(sum, 24, "Bridge502 sum");
        }
    }
}