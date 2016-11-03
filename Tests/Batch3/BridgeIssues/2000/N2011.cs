using System;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2011 - {0}")]
    public class Bridge2011
    {
        [Immutable]
#pragma warning disable 660,661
        public struct Optional<T> : IEquatable<Optional<T>>
#pragma warning restore 660,661
        {
            public static Optional<T> Missing { get { return _missing; } }
            private static Optional<T> _missing = new Optional<T>();
            // implementations below of IEquatable are not real, and only exist to allow IEquatable to be applied.
            public static implicit operator Optional<T>(T value)
            {
                return new Optional<T>();
            }
            public static bool operator ==(Optional<T> x, Optional<T> y)
            {
                return x.Equals(y);
            }
            public static bool operator !=(Optional<T> x, Optional<T> y)
            {
                return !(x == y);
            }
            public bool Equals(Optional<T> other)
            {
                return false;
            }

            public T field;
        }

        public static int OverloadedMethod<T>(T value)
        {
            return 1;
        }
        public static int OverloadedMethod<T>(Func<T, T> valueUpdater)
        {
            return 2;
        }

        [Test]
        public void TestCase()
        {
            bool? nullableBool = false;
            var varValue = nullableBool ?? Optional<bool>.Missing;

            Optional<bool> typedValue = varValue;
            Assert.AreStrictEqual(false, varValue.field);
            Assert.AreEqual(1, OverloadedMethod(typedValue));
            Assert.AreEqual(1, OverloadedMethod(varValue));
        }
    }
}