using System;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    public class Opti<T> : IEquatable<Opti<T>>
    {
        public bool Equals(Opti<T> obj)
        {
            return this == obj;
        }
    }
    public class Class1 : IEquatable<Class1>
    {
        public bool Equals(Class1 other)
        {
            return this == other;
        }
    }

    // Bridge[#607]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#607 - {0}")]
    public class Bridge607
    {
        [Test(ExpectedCount = 4)]
        public static void TestUseCase()
        {
            var c = new Opti<string>();
            var c1 = new Class1();

            Assert.True(c.Equals(c));
            Assert.False(c.Equals(null));

            Assert.True(c1.Equals(c1));
            Assert.False(c1.Equals(null));
        }
    }
}