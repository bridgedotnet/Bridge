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
            Assert.AreEqual("Amargasaurus", dinosaurs[2]);
            Assert.AreEqual("Deinonychus", dinosaurs[3]);
            Assert.AreEqual("Mamenchisaurus", dinosaurs[4]);
            Assert.AreEqual("Pachycephalosaurus", dinosaurs[5]);
        }
    }
}