using Bridge;
using Bridge.Test;

using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#381]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#381 - {0}")]
    public class Bridge381
    {
        public class Animal
        {
            public string Kind;
            public string Order;

            public Animal(string kind, string order)
            {
                this.Kind = kind;
                this.Order = order;
            }

            public override string ToString()
            {
                return this.Kind;
            }
        }

        [Test(ExpectedCount = 6)]
        public static void TestUseCase()
        {
            var s1 = string.Join(",", new[] { "a", "b" });
            Assert.AreEqual("a,b", s1, "Join1");

            var animals = new List<Animal>();
            animals.Add(new Animal("Squirrel", "Rodent"));
            animals.Add(new Animal("Gray Wolf", "Carnivora"));
            animals.Add(new Animal("Capybara", "Rodent"));

            string s2 = String.Join(" ", animals);
            Assert.AreEqual("Squirrel Gray Wolf Capybara", s2, "Join2");

            object[] values = { null, "Cobb", 4189, 11434, .366 };
            string s31 = String.Join("|", values);
            Assert.AreEqual("|Cobb|4189|11434|0.366", s31, "Join31");

            values[0] = String.Empty;
            string s32 = String.Join("|", values);
            Assert.AreEqual("|Cobb|4189|11434|0.366", s32, "Join32");


            string[] sArr = new string[10];
            for (int i = 0; i < 10; i++)
                sArr[i] = String.Format("{0,-3}", i * 5);

            string s4 = String.Join(":", sArr);
            Assert.AreEqual("0  :5  :10 :15 :20 :25 :30 :35 :40 :45 ", s4, "Join4");

            var val = new string[] { "apple", "orange", "grape", "pear" };
            var s5 = string.Join(", ", val, 1, 2);
            Assert.AreEqual("orange, grape", s5, "Join5");
        }
    }
}
