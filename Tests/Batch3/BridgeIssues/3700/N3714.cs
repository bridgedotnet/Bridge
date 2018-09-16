using Bridge.Test.NUnit;
using System.Collections;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    public class SubClass : BaseClass
    {
        public SubClass() : base(1)
        {

        }
    }

    public class BaseClass
    {
        public BaseClass(decimal value)
        {
            this.Value = value;
        }

        public decimal Value { get; set; }
    }

    [TestFixture(TestNameFormat = "#3714 - {0}")]
    public class Bridge3714
    {
        [Test]
        public static void TestBaseCtorArgumentConversion()
        {
            var test = new SubClass();
            var v = test.Value + test.Value;

            Assert.True(v == 2m);
        }
    }
}