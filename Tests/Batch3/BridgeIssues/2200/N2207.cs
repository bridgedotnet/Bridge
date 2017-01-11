using System;
using System.Reflection;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2207 - {0}")]
    public class Bridge2207
    {
        struct SomeStruct
        {
            int? i;

            public SomeStruct(int i)
            {
                this.i = i;
            }

            public bool IsDefault()
            {
                return i == null;
            }
        }

        static T SomeMethod<T>(T input = default(T))
        {
            return input;
        }

        [Test]
        public static void TestDefaultOptionalParam()
        {
            var first = SomeMethod<string>();
            Assert.Null(first);

            var second = SomeMethod<int>();
            Assert.AreEqual(0, second);

            var third = SomeMethod<SomeStruct>();
            Assert.True(third.IsDefault());
        }
    }
}