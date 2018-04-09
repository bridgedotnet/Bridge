using System;
using System.Linq;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2176 - {0}")]
    public class Bridge2176
    {
        [External]
        [ObjectLiteral(ObjectCreateMode.Constructor)]
        [Convention(Notation.CamelCase, ConventionTarget.Member)]
        public class Config1
        {
            public string Name
            {
                get; set;
            }

            public int Id;
        }

        [External]
        [ObjectLiteral(ObjectCreateMode.Constructor)]
        [Name("Config2")]
        [Convention(Notation.CamelCase, ConventionTarget.Member)]
        public class Config2
        {
            public string Name
            {
                get; set;
            }

            public int Id;
        }

        [Test]
        public static void TestExternalObjectLiteralConstructorMode()
        {
            /*@
            // This emulates external Config1
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge2176.Config1 = function()
            {
                return { id: 1 };
            };

            // This emulates external Config2
            var Config2 = function()
            {
                return { id: 2 };
            };
            */

            var c1 = new Config1() { Name = "Config1" };
            Assert.AreEqual("Config1", c1.Name);
            Assert.AreEqual(1, c1.Id);

            var c2 = new Config2() { Name = "Config2" };
            Assert.AreEqual("Config2", c2.Name);
            Assert.AreEqual(2, c2.Id);
        }
    }
}