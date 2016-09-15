using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1842 - {0}")]
    public class Bridge1842
    {
        public class Class
        {
            private Type type;
            static public implicit operator Class(Type t)
            {
                return new Class() { type = t };
            }

            static public implicit operator Type(Class t)
            {
                return t.type;
            }
        }

        [Test]
        public void TestTypeOfConversion()
        {
            object t;
            var @class = (Class)typeof(Bridge1842);
            t = @class;
            Assert.True(t.GetType() == typeof(Class));

            @class = typeof(Bridge1842);
            t = @class;
            Assert.True(t.GetType() == typeof(Class));
        }
    }
}