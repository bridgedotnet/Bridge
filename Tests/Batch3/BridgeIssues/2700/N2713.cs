using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2713 - {0}")]
    [Convention(Target = ConventionTarget.Class, Notation = Notation.LowerCamelCase)]
    public class Bridge2713
    {
        [Namespace(false)]
        public static class Bridge2713_Startup1
        {
            public static class Next
            {
                public static int Test()
                {
                    return 1;
                }
            }
        }

        [Namespace(false)]
        public static class Bridge2713_Startup2
        {
            public static int Test()
            {
                return 2;
            }
        }

        [Test]
        public static void TestConventionForNestedClass()
        {
            Assert.NotNull(Script.Write<object>("bridge2713.bridge2713_Startup1"));
            Assert.NotNull(Script.Write<object>("bridge2713.bridge2713_Startup1.next"));
            Assert.NotNull(Script.Write<object>("bridge2713.bridge2713_Startup2"));

            Assert.AreEqual(1, Bridge2713_Startup1.Next.Test());
            Assert.AreEqual(2, Bridge2713_Startup2.Test());
        }
    }
}