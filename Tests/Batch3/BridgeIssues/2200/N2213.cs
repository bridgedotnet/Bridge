using System;
using System.Reflection;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2213 - {0}")]
    public class Bridge2213
    {
        public class UIUtils
        {
            public class DataTables
            {
                public static DataTable GetTable()
                {
                    return Script.Write<DataTable>("{i:1}");
                }
            }

            public class DataTable
            {
                public int i;
            }
        }

        [Test]
        public static void TestCase()
        {
            var t = UIUtils.DataTables.GetTable();
            Assert.AreEqual(1, t.i);
        }
    }
}