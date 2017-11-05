using System;
using Bridge.Test.NUnit;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3242 - {0}")]
    public class Bridge3242
    {
        [ObjectLiteral(ObjectCreateMode.Constructor)]
        public class MyString
        {
            public MyString(string value)
            {
                Value = value;
            }

            public string Value { get; }

            public static implicit operator string(MyString value)
            {
                return (value == null) ? null : value.Value;
            }
        }

        [Test]
        public static void TestObjectLiteralOperator()
        {
            string str = "Hello, World!";
            string msg = new MyString(str);
            Assert.AreEqual(str, msg);
        }
    }
}