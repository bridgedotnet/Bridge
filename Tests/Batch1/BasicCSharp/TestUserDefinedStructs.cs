using Bridge.Test.NUnit;
using System;
using System.Runtime.CompilerServices;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_STRUCT)]
    [TestFixture(TestNameFormat = "Structs - {0}")]
    public class TestUserDefinedStructs
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

        private struct S8
        {
            public int Number;

            public S8(int i)
            {
                Number = i;
            }

            public override string ToString()
            {
                return Number.ToString();
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
        public void IsClassIsFalse()
        {
            Assert.False(typeof(S1).IsClass, "#1");
            Assert.False(typeof(S2G<int>).IsClass, "#2");
        }

        [Test]
        public void UserDefinedStructCanBeUsed()
        {
            var s1 = new S1(42);
            Assert.AreEqual(42, s1.I);
        }

        [Test]
        public void DefaultConstructorOfStructReturnsInstanceWithAllMembersInitialized()
        {
            var s2 = default(S2);
            Assert.AreEqual(0, s2.I, "I");
            Assert.AreEqual(0, s2.D, "D");
            Assert.AreEqual(default(DateTime), s2.DT, "DT");
            Assert.Null(s2.O, "O");
            Assert.AreEqual(0, s2.T, "T");
        }

        [Test]
        public void DefaultConstructorOfStructReturnsInstanceWithAllMembersInitializedGeneric()
        {
            var s2 = default(S2G<int>);
            Assert.AreEqual(0, s2.I, "I");
            Assert.AreEqual(0, s2.D, "D");
            Assert.AreEqual(default(DateTime), s2.DT, "DT");
            Assert.Null(s2.O, "O");
            Assert.AreEqual(0, s2.T, "T");
        }

        [Test]
        public void DefaultValueOfStructIsInstanceWithAllMembersInitialized()
        {
            var s2 = default(S2);
            Assert.AreEqual(0, s2.I, "I");
            Assert.AreEqual(0, s2.D, "D");
            Assert.AreEqual(default(DateTime), s2.DT, "DT");
            Assert.Null(s2.O, "O");
            Assert.AreEqual(0, s2.T, "T");
        }

        [Test]
        public void DefaultValueOfStructIsInstanceWithAllMembersInitializedGeneric()
        {
            var s2 = default(S2G<int>);
            Assert.AreEqual(0, s2.I, "I");
            Assert.AreEqual(0, s2.D, "D");
            Assert.AreEqual(default(DateTime), s2.DT, "DT");
            Assert.Null(s2.O, "O");
            Assert.AreEqual(0, s2.T, "T");
        }

        [Test]
        public void DefaultValueOfStructIsInstanceWithAllMembersInitializedIndirect()
        {
            var s2 = Create<S2>();
            Assert.AreEqual(0, s2.I, "I");
            Assert.AreEqual(0, s2.D, "D");
            Assert.AreEqual(default(DateTime), s2.DT, "DT");
            Assert.Null(s2.O, "O");
            Assert.AreEqual(0, s2.T, "T");
        }

        [Test]
        public void DefaultValueOfStructIsInstanceWithAllMembersInitializedIndirectGeneric()
        {
            var s2 = Create<S2G<DateTime>>();
            Assert.AreEqual(0, s2.I, "I");
            Assert.AreEqual(0, s2.D, "D");
            Assert.AreEqual(default(DateTime), s2.DT, "DT");
            Assert.Null(s2.O, "O");
            Assert.AreEqual(default(DateTime), s2.T, "T");
        }

        [Test]
        public void DefaultConstructorOfStructWithInlineCodeDefaultConstructorWorks()
        {
            var s1 = new S6();
            Assert.AreEqual(42, s1.I);
        }

        [Test]
        public void DefaultConstructorOfStructWithInlineCodeDefaultConstructorWorksGeneric()
        {
            var s1 = new S6G<int>();
            Assert.AreEqual(42, s1.I);
        }

        [Test]
        public void DefaultGetHashCodeGeneratesHashCodeBasedOnAllInstanceFields()
        {
            S3.StaticField = 10;
            var s1 = new S3(235, 45);
            var s2 = new S3(235, 45);
            var s3 = new S3(235, 44);
            Assert.AreEqual(s2.GetHashCode(), s1.GetHashCode(), "#1");
            Assert.AreNotEqual(s3.GetHashCode(), s1.GetHashCode(), "#2");
            int hc = s1.GetHashCode();
            S3.StaticField = 20;
            Assert.AreEqual(hc, s1.GetHashCode(), "#3");
        }

        [Test]
        public void DefaultEqualsUsesValueEqualityForAllMembers()
        {
            var s1 = new S3(235, 45);
            var s2 = new S3(235, 45);
            var s3 = new S3(235, 44);
            var s4 = new S4(235, 45);
            Assert.True(s1.Equals(s2), "#1");
            Assert.False(s1.Equals(s3), "#2");
            Assert.False(s1.Equals(s4), "#3");
        }

        [Test]
        public void CanOverrideGetHashCode()
        {
            var s1 = new S5(42);
            Assert.AreEqual(43, s1.GetHashCode());
        }

        [Test]
        public void CanOverrideEquals()
        {
            var s1 = new S5(42);
            var s2 = new S5(43);
            var s3 = new S5(44);
            Assert.True(s1.Equals(s2), "#1");
            Assert.False(s1.Equals(s3), "#2");
        }

        [Test]
        public void CanLiftUserDefinedBinaryOperator()
        {
            S7? a = new S7(42), b = new S7(32), c = null;
            Assert.AreEqual(74, (a + b).Value.I, "#1");
            Assert.Null((a + c), "#2");
        }

        [Test]
        public void CanLiftUserDefinedUnaryOperator_SPI_1634()
        {
            S7? a = new S7(42), b = null;
            Assert.AreEqual(-42, -a.Value.I, "#1");
            // #1634 #SPI
            Assert.Null(-b, "#2");
        }

        [Test]
        public void ClonedValueTypeIsCorrectType()
        {
            var s1 = new MS1
            {
                i = 42
            };
            var s2 = s1;
            Assert.True((object)s2 is MS1);
        }

        [Test]
        public void FieldsAreClonedWhenValueTypeIsCopied()
        {
            var s1 = new MS1
            {
                i = 42
            };
            var s2 = s1;
            Assert.AreEqual(42, s2.i);
            s2.i = 43;
            Assert.AreEqual(42, s1.i);
            Assert.AreEqual(43, s2.i);
        }

        [Test]
        public void AutoPropertyBackingFieldsAreClonedWhenValueTypeIsCopied()
        {
            var s1 = new MS1
            {
                P1 = "hello"
            };
            var s2 = s1;
            Assert.AreEqual("hello", s2.P1);
            s2.P1 = "world";
            Assert.AreEqual("hello", s1.P1);
            Assert.AreEqual("world", s2.P1);
        }

        [Test]
        public void PropertiesWithFieldImplementationAreClonedWhenValueTypeIsCopied()
        {
            var s1 = new MS1
            {
                P2 = 42
            };
            var s2 = s1;
            Assert.AreEqual(42, s2.P2);
            s2.P2 = 43;
            Assert.AreEqual(42, s1.P2);
            Assert.AreEqual(43, s2.P2);
        }

        [Test]
        public void NestedStructsAreClonedWhenValueTypeIsCopied_SPI_1613()
        {
            var s1 = new MS1
            {
                N = new MS2
                {
                    i = 42
                }
            };
            var s2 = s1;
            Assert.AreEqual(42, s2.N.i);
            s2.N.i = 43;
            // #1613
            Assert.AreEqual(42, s1.N.i);

            Assert.AreEqual(43, s2.N.i);
        }

        [Test]
        public void GenericMutableValueTypeWorks()
        {
            var s1 = new MS3<int>
            {
                t = 42
            };
            var s2 = s1;
            Assert.AreEqual(42, s2.t);
            s2.t = 43;
            Assert.True((object)s2 is MS3<int>);
            Assert.AreEqual(42, s1.t);
            Assert.AreEqual(43, s2.t);
        }

        [Test]
        public void CloningValueTypeWithNamedDefaultConstructorWorks()
        {
            var s1 = new MS1
            {
                i = 42
            };
            var s2 = s1;
            s1.i = 10;
            Assert.AreEqual(42, s2.i);
            Assert.True((object)s2 is MS1);
        }

        [Test]
        public void CloningNullableValueTypesWorks()
        {
            MS1? s1 = null;
            MS1? s2 = new MS1
            {
                i = 42
            };
            var s3 = s1;
            var s4 = s2;

            Assert.Null(s3, "s3 should be null");
            Assert.AreEqual(42, s4.Value.i, "s4.i should be 42");
            Assert.False(ReferenceEquals(s2, s4), "s2 and s4 should not be the same object");
        }

        [Test]
        public void ToStringWorks()
        {
            var s = new S8(5);
            object o = new S8(6);

            Assert.AreEqual("5", s.ToString(), "Struct");
            Assert.AreEqual("6", o.ToString(), "Boxed");
        }

        [Test]
        public void ToStringNullabeTypeWorks()
        {
            var s = new S8?(new S8(5));
            object o = new S8?(new S8(6));

            Assert.AreEqual("5", s.ToString(), "Struct Nullable type");
            Assert.AreEqual("6", o.ToString(), "Boxed Nullable type");
        }
    }
}