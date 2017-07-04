using Bridge.Test.NUnit;
using System;
using System.Runtime.CompilerServices;

namespace Bridge.ClientTest.Batch4
{
    // Moved
    [TestFixture(TestNameFormat = "UserDefinedStructTests - {0}")]
    public class UserDefinedStructTests
    {
#pragma warning disable 649

        private struct S1
        {
            public readonly int I;

            public S1(int i)
            {
                I = i;
            }
        }

        private struct S2
        {
            public readonly int I;
            public readonly double D;
            public readonly DateTime DT;
            public readonly object O;
            public readonly int T;
        }

        private struct S2G<TT>
        {
            public readonly int I;
            public readonly double D;
            public readonly DateTime DT;
            public readonly object O;
            public readonly TT T;
        }

        private struct S3
        {
            public readonly int I1, I2;
            public static int StaticField;

            public S3(int i1, int i2)
            {
                I1 = i1;
                I2 = i2;
            }
        }

        private struct S4
        {
            public readonly int I1, I2;

            public S4(int i1, int i2)
            {
                I1 = i1;
                I2 = i2;
            }
        }

        private struct S5
        {
            public readonly int I;

            public S5(int i)
            {
                I = i;
            }

            public override int GetHashCode()
            {
                return I + 1;
            }

            public override bool Equals(object o)
            {
                return Math.Abs(((S5)o).I - I) <= 1;
            }
        }

        private struct S6
        {
            [Name("i")]
            public readonly int I;

            [Template("{ i: 42 }")]
            public S6(DummyTypeUsedToAddAttributeToDefaultValueTypeConstructor _)
                : this()
            {
            }
        }

        private struct S6G<TT>
        {
            [Name("i")]
            public readonly TT I;

            [Template("{ i: 42 }")]
            public S6G(DummyTypeUsedToAddAttributeToDefaultValueTypeConstructor _)
                : this()
            {
            }
        }

        private struct S7
        {
            public readonly int I;

            public S7(int i)
            {
                I = i;
            }

            public static S7 operator +(S7 a, S7 b)
            {
                return new S7(a.I + b.I);
            }

            public static S7 operator -(S7 s)
            {
                return new S7(-s.I);
            }

            public static explicit operator int(S7 s)
            {
                return s.I;
            }
        }

        private struct MS1
        {
            public int i;

            public string P1
            {
                get;
                set;
            }

            public int P2
            {
                get;
                set;
            }

            public event Action E;

            public MS2 N;

            public void RaiseE()
            {
                E();
            }
        }

        private struct MS2
        {
            public int i;
        }

        private struct MS3<T>
        {
            public T t;
        }

        private struct MS4
        {
            public int i;

            //[Name("x")]
            public MS4(DummyTypeUsedToAddAttributeToDefaultValueTypeConstructor _)
                : this()
            {
            }
        }

#pragma warning restore 649

        private T Create<T>() where T : new()
        {
            return new T();
        }

        [Test]
        public void DefaultValueOfStructWithInlineCodeDefaultConstructorWorks_SPI_1610()
        {
            var s1 = default(S6);
            var s2 = Create<S6>();
            // #1610
            Assert.AreEqual(42, s1.I, "#1");
            Assert.AreEqual(42, s2.I, "#2");
        }

        [Test]
        public void DefaultValueOfStructWithInlineCodeDefaultConstructorWorksGeneric_SPI_1610()
        {
            var s1 = default(S6G<int>);
            var s2 = Create<S6G<int>>();
            // #1610
            Assert.AreEqual(42, s1.I, "#1");
            Assert.AreEqual(42, s2.I, "#2");
        }

        [Test]
        public void CanLiftUserDefinedConversionOperator_SPI_1611()
        {
            S7? a = new S7(42), b = null;
            double? d1 = null;
            TestHelper.Safe(() => d1 = (double?)a);
            Assert.AreEqual(42, d1, "#1");
            // #1611
            double? d2 = 1;
            TestHelper.Safe(() => d2 = (double?)b);
            Assert.Null(d2, "#2");
        }

        [Test]
        public void AutoEventBackingFieldsAreClonedWhenValueTypeIsCopied_SPI_1612()
        {
            int count = 0;
            Action a = () => count++;
            var s1 = new MS1();
            s1.E += a;
            var s2 = s1;
            s2.E += a;

            s1.RaiseE();
            Assert.AreEqual(1, count);

            s2.RaiseE();
            // #1612
            Assert.AreEqual(3, count);
        }
    }
}