using Bridge.Test;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1296 - {0}")]
    public class Bridge1296
    {
        public struct MessageStructId
        {
            public static implicit operator int (MessageStructId id)
            {
                return 123;
            }
        }

        public class BlahId
        {
            public int Value
            {
                get; set;
            }

            public static implicit operator BlahId(int value)
            {
                return new BlahId(value);
            }

            public BlahId(int value)
            {
                this.Value = value;
            }
        }

        [External]
        public class ExternalBlahId
        {
            public static implicit operator ExternalBlahId(int value)
            {
                return new ExternalBlahId();
            }
        }

        [IgnoreGeneric]
        [IgnoreCast]
        public class AnyNonExternal<T1, T2>
        {
            public static implicit operator AnyNonExternal<T1, T2>(T1 t)
            {
                throw new InvalidCastException();
            }

            public static implicit operator AnyNonExternal<T1, T2>(T2 t)
            {
                throw new InvalidCastException();
            }

            public static explicit operator T1(AnyNonExternal<T1, T2> value)
            {
                throw new InvalidCastException();
            }

            public static explicit operator T2(AnyNonExternal<T1, T2> value)
            {
                throw new InvalidCastException();
            }
        }

        public struct MessageId
        {
            public int Value { get; private set; }

            public static explicit operator MessageId(int value)
            {
                return new MessageId { Value = value };
            }

            public static implicit operator int (MessageId id)
            {
                return id.Value;
            }
        }

        private static int Test(Union<string, int> value)
        {
            return (int)value;
        }

        private static int TestAnyNonExternal(AnyNonExternal<string, int> value)
        {
            return (int)value;
        }

        [Test]
        public static void TestImplicitOperator()
        {
            var id = (MessageId)12;
            Assert.AreEqual(12, id.Value);

            var returnedId = Test((int)id);
            Assert.AreEqual(12, returnedId);
        }

        [Test]
        public static void TestIgnoreCast()
        {
            var id = (MessageId)12;
            var returnedId = TestAnyNonExternal((int)id);
            Assert.AreEqual(12, returnedId);
        }

        [Test]
        public static void TestExternalImplicit()
        {
            BlahId idAsBlah = (int)(new MessageStructId());
            Assert.AreEqual(123, idAsBlah.Value);

            ExternalBlahId idAsIgnoreCastBlah = (int)(new MessageStructId());
            Assert.AreEqual(123, idAsIgnoreCastBlah);
        }
    }
}