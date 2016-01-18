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
            Assert.AreEqual(s1, "a,b", "Join1");

            var animals = new List<Animal>();
            animals.Add(new Animal("Squirrel", "Rodent"));
            animals.Add(new Animal("Gray Wolf", "Carnivora"));
            animals.Add(new Animal("Capybara", "Rodent"));

            string s2 = String.Join(" ", animals);
            Assert.AreEqual(s2, "Squirrel Gray Wolf Capybara", "Join2");

            object[] values = { null, "Cobb", 4189, 11434, .366 };
            string s31 = String.Join("|", values);
            Assert.AreEqual(s31, "|Cobb|4189|11434|0.366", "Join31");

            values[0] = String.Empty;
            string s32 = String.Join("|", values);
            Assert.AreEqual(s32, "|Cobb|4189|11434|0.366", "Join32");


            string[] sArr = new string[10];
            for (int i = 0; i < 10; i++)
                sArr[i] = String.Format("{0,-3}", i * 5);

            string s4 = String.Join(":", sArr);
            Assert.AreEqual(s4, "0  :5  :10 :15 :20 :25 :30 :35 :40 :45 ", "Join4");

            var val = new string[] { "apple", "orange", "grape", "pear" };
            var s5 = string.Join(", ", val, 1, 2);
            Assert.AreEqual(s5, "orange, grape", "Join5");
        }
    }
}
