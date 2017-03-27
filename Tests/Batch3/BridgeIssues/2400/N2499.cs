using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2499 - {0}")]
    public class Bridge2499
    {
        private static int CompareDinosByLength(string x, string y)
        {
            if (x == null)
            {
                return y == null ? 0 : -1;
            }

            if (y == null)
            {
                return 1;
            }

            int retval = x.Length.CompareTo(y.Length);

            return retval != 0 ? retval : x.CompareTo(y);
        }

        [Test]
        public static void TestArraySortComparison()
        {
            string[] dinosaurs = {
            "Pachycephalosaurus",
            "Amargasaurus",
            "",
            null,
            "Mamenchisaurus",
            "Deinonychus" };
            Array.Sort(dinosaurs, CompareDinosByLength);

            Assert.Null(dinosaurs[0]);
            Assert.AreEqual("", dinosaurs[1]);
            Assert.AreEqual("Deinonychus", dinosaurs[2]);
            Assert.AreEqual("Amargasaurus", dinosaurs[3]);
            Assert.AreEqual("Mamenchisaurus", dinosaurs[4]);
            Assert.AreEqual("Pachycephalosaurus", dinosaurs[5]);
        }

        class Named
        {
            public string Name
            {
                get; set;
            }
        }

        [Test]
        public static void TestArraySortComparisonWithEntity()
        {
            var items = new[]
            {
                new Named { Name = "C" },
                new Named { Name = "B" },
                new Named { Name = "A" }
            };

            var theLittle = "C";

            Array.Sort(items,
                (x, y) =>
                {
                    if (x.Name == theLittle)
                    {
                        return -1;
                    }

                    return string.Compare(x.Name, y.Name);
                }
            );

            Assert.AreEqual(3, items.Length);
            Assert.AreEqual("C", items[0].Name);
            Assert.AreEqual("A", items[1].Name);
            Assert.AreEqual("B", items[2].Name);
        }
    }
}