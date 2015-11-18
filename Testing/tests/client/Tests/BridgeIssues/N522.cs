using Bridge;
using Bridge.Html5;
using Bridge.QUnit;

using System;
using System.Linq;
using System.Collections.Generic;

namespace ClientTestLibrary
{
    // Bridge[#522]
    [FileName("testBridgeIssues.js")]
    internal class Bridge522
    {
        public class BaseClass
        {
            private List<int> values = new List<int>();

            public void AddValue(int a)
            {
                values.Add(a);
            }

            public List<int> GetValues()
            {
                return values;
            }
        }

        public class DerivedClass1 : BaseClass
        {
            public DerivedClass1()
            {

            }
        }

        public class DerivedClass2 : BaseClass
        {
            public int B { get; set; }

            public DerivedClass2()
            {

            }
        }

        public static void TestUseCase1(Assert assert)
        {
            assert.Expect(2);

            var dc1 = new DerivedClass1();
            dc1.AddValue(5);

            assert.Equal(dc1.GetValues().Count, 1, "Bridge522 dc1.Count = 1");

            var dc2 = new DerivedClass1();
            assert.Equal(dc2.GetValues().Count, 0, "Bridge522 dc2.Count = 0");
        }

        public static void TestUseCase2(Assert assert)
        {
            assert.Expect(2);

            var dc1 = new DerivedClass2();
            dc1.AddValue(5);

            assert.Equal(dc1.GetValues().Count, 1, "Bridge522 dc1.Count = 1");

            var dc2 = new DerivedClass2();
            assert.Equal(dc2.GetValues().Count, 0, "Bridge522 dc2.Count = 0");
        }
    }
}