using Bridge.Test.NUnit;
using System;
using System.Text;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3086 - {0}")]
    public class Bridge3086
    {
        public class A
        {
            public virtual string Property
            {
                get
                {
                    return "A Get!";
                }
                set
                {
                    sb.Append("A Set! " + value);
                }
            }
        }

        public class B : A
        {
            public override string Property
            {
                set
                {
                    sb.Append("B Set! " + value);
                }
            }
        }

        private static void Test(A target)
        {
            target.Property = "SomeString";

            sb.Append("Value=" + target.Property);
            sb.Append("Length=" + target.Property.Length);
        }

        private static StringBuilder sb;

        [Test]
        public static void TestAccessorsOverride()
        {
            sb = new StringBuilder();
            Test(new A());
            Assert.AreEqual("A Set! SomeStringValue=A Get!Length=6", sb.ToString());

            sb = new StringBuilder();
            Test(new B());
            Assert.AreEqual("B Set! SomeStringValue=A Get!Length=6", sb.ToString());
        }
    }
}