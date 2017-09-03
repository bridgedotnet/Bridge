using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3081 - {0}")]
    public class Bridge3081
    {
        class UsualClass
        {
            [Name("UsualClass Field")]
            public int Field;

            [Name("UsualClass Prop")]
            public int Prop
            {
                get; set;
            }
        }

        [ObjectLiteral]
        class ObjectLiteralClass
        {
            [Name("ObjectLiteralClass Field")]
            public int Field;

            [Name("ObjectLiteralClass Prop")]
            public int Prop
            {
                get; set;
            }
        }

        [Test]
        public static void TestNonStandardName()
        {
            var usualClass = new UsualClass() { Field = 3, Prop = 4 };
            Assert.AreEqual(3, usualClass.Field);
            Assert.AreEqual(4, usualClass.Prop);

            usualClass.Field = 1;
            usualClass.Prop = 2;
            Assert.AreEqual(1, usualClass.Field);
            Assert.AreEqual(2, usualClass.Prop);

            var objectLiteral = new ObjectLiteralClass() { Field = 3, Prop = 4 };
            Assert.AreEqual(3, objectLiteral.Field);
            Assert.AreEqual(4, objectLiteral.Prop);

            objectLiteral.Field = 1;
            objectLiteral.Prop = 2;
            Assert.AreEqual(1, objectLiteral.Field);
            Assert.AreEqual(2, objectLiteral.Prop);
        }
    }
}