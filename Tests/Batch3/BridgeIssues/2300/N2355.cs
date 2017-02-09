using System;
using System.Collections.Generic;
using System.Linq;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2355 - {0}")]
    public class Bridge2355
    {
        public class Plant
        {
            public string Common { get; set; }
            public string Light { get; set; }
            public bool Indoor { get; set; }
        }

        public class Plants
        {
            public static List<Plant> Flowers
            {
                get
                {
                    return new List<Plant>
            {
                new Plant {
                    Common = "Anemone",
                    Light = "Shade",
                    Indoor = true
                },

                new Plant {
                    Common = "Columbine",
                    Light = "Shade",
                    Indoor = true
                },

                new Plant {
                    Common = "Marsh Marigold",
                    Light = "Sunny",
                    Indoor = false
                },

                new Plant {
                    Common = "Gential",
                    Light = "Sun or Shade",
                    Indoor = false
                },

                new Plant {
                    Common = "Woodland",
                    Light = "Sun or Shade",
                    Indoor = false
                }
            };
                }
            }
        }

        [Test]
        public static void TestLinqGrouping()
        {
            var query = Plants.Flowers.GroupBy(flower => flower.Light);

            foreach (IGrouping<string, Plant> grp in query)
            {
                Assert.True((object)grp is Grouping<string, Plant>);
                Assert.True((object)grp is IGrouping<string, Plant>);
            }
        }

        [Test]
        public static void TestLinqLookup()
        {
            var query = Plants.Flowers.ToLookup(flower => flower.Light);

            Assert.True((object)query is Lookup<string, Plant>);
            Assert.True((object)query is ILookup<string, Plant>);
            Assert.AreEqual(2, query["Shade"].Count());
        }

        [Test]
        public static void TestLinqOrderedEnumerable()
        {
            var query = Plants.Flowers.OrderBy(flower => flower.Common);

            Assert.True((object)query is OrderedEnumerable<Plant>);
            Assert.True((object)query is IOrderedEnumerable<Plant>);
        }
    }
}