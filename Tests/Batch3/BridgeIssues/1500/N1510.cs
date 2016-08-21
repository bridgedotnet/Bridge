using Bridge.Test;

using System.ComponentModel;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1510 - {0}")]
    public class Bridge1510
    {
        [Test]
        public void TestPropertyChangedEventArgs()
        {
            int a = 3;
            Assert.True(Function(a * 1000) == 3000);
            Assert.True(Function2(a * 1000) == 3000);
            Assert.True(Function3(a * 1000) == 3000);
            Assert.True(Function4(a * 1000) == 3000);
        }

        public static int Function(IntWrap wrap)
        {
            return wrap.v;
        }

        public static int Function2(IntWrap2 wrap)
        {
            return wrap.v;
        }

        public static long Function3(IntWrap3 wrap)
        {
            return wrap.v;
        }

        public static long Function4(IntWrap4 wrap)
        {
            return wrap.v;
        }

        public class IntWrap
        {
            public int v;

            public IntWrap(int value)
            {
                v = value;
            }

            [Template("Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1510.IntWrap(), {v:{v}})")]
            public static extern implicit operator IntWrap(int v);
        }

        public class IntWrap2
        {
            public int v;

            public IntWrap2(int value)
            {
                v = value;
            }

            public static implicit operator IntWrap2(int v)
            {
                return new IntWrap2(v);
            }
        }

        public class IntWrap3
        {
            public long v;

            public IntWrap3(long value)
            {
                v = value;
            }

            [Template("Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1510.IntWrap3(), {v:{v}})")]
            public static implicit operator IntWrap3(long v)
            {
                return new IntWrap3(v);
            }
        }

        public class IntWrap4
        {
            public long v;

            public IntWrap4(long value)
            {
                v = value;
            }

            public static implicit operator IntWrap4(long v)
            {
                return new IntWrap4(v);
            }
        }
    }
}