using System;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    public class Bridge607A<T> : IEquatable<Bridge607A<T>>
    {
        public bool Equals(Bridge607A<T> obj)
        {
            return this == obj;
        }
    }

    public class Bridge607B : IEquatable<Bridge607B>
    {
        public bool Equals(Bridge607B other)
        {
            return this == other;
        }
    }

    public class Bridge607C : IEquatable<Bridge607C>
    {
        bool IEquatable<Bridge607C>.Equals(Bridge607C other)
        {
            return Equals(this, other);
        }
    }

    // Bridge[#607]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#607 - {0}")]
    public class Bridge607
    {
        [Test(ExpectedCount = 5)]
        public static void TestUseCase()
        {
            var c = new Bridge607A<string>();
            var c1 = new Bridge607B();

            Assert.True(c.Equals(c), "Bridge607A c");
            Assert.False(c.Equals(null), "Bridge607A null");
            
            Assert.True(c1.Equals(c1), "Bridge607B c");
            Assert.False(c1.Equals(null), "Bridge607B null");
            
            Assert.False(new Bridge607C().Equals(null), "Bridge607C null");
        }
    }
}