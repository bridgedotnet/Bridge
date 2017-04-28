using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2525 - {0}")]
    public class Bridge2525
    {
        class A
        {
#pragma warning disable 414
            public int value;
#pragma warning restore 414
        }

        [Cast("{this}.value == 33")]
        class B
        {
#pragma warning disable 649
            public int value;
#pragma warning restore 649
        }

        [Test]
        public static void TestCastAttribute()
        {
            var a = new A();
            a.value = 33;

            var b = (B)(object)a;

            Assert.AreEqual(33, b.value, "value 33 casts");


            a.value = 34;

            Assert.Throws(() =>
            {
                var c = (B)(object)a;
            }, "value 34 should throw");
        }
    }
}