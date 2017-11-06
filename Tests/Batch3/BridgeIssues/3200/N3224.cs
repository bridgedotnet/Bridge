using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3224 - {0}")]
    public class Bridge3224
    {
        [Rules(AutoProperty = AutoPropertyRule.Plain)]
        public interface IFoo
        {
            int Value { get; }
        }

        [Rules(AutoProperty = AutoPropertyRule.Plain)]
        public class Foo: IFoo
        {
            public int Value { get; }

            public Foo()
            {
                Value = 5;
            }
        }

        [Test]
        public static void TestAutoPlainInterfaceProperty()
        {
            var foo = (IFoo)new Foo();
            Assert.AreEqual(5, foo.Value);
        }
    }
}