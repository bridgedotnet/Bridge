#define THE_SYMBOL

using Bridge.Test.NUnit;
using System;
using System.Diagnostics;

namespace Bridge.ClientTest.Reflection
{
    [Category(Constants.MODULE_REFLECTION)]
    [TestFixture(TestNameFormat = "Reflection - Type attributes {0}")]
    public class TypeAttributeTests
    {
        private class A1Attribute : Attribute
        {
            public int V
            {
                get;
                private set;
            }

            public A1Attribute(int v)
            {
                this.V = v;
            }
        }

        [AttributeUsage(AttributeTargets.All, AllowMultiple = true)]
        private class A2Attribute : Attribute
        {
            public int V
            {
                get;
                private set;
            }

            public A2Attribute(int v)
            {
                this.V = v;
            }
        }

        private class A3Attribute : Attribute
        {
            public int V
            {
                get;
                private set;
            }

            public A3Attribute(int v)
            {
                this.V = v;
            }
        }

        private class A4Attribute : Attribute
        {
            public int V
            {
                get;
                private set;
            }

            public A4Attribute(int v)
            {
                this.V = v;
            }
        }

        [AttributeUsage(AttributeTargets.All, Inherited = false)]
        private class A5Attribute : Attribute
        {
        }

        private class A6Attribute : Attribute
        {
            public bool B
            {
                get;
                private set;
            }

            public byte Y
            {
                get;
                private set;
            }

            public char C
            {
                get;
                private set;
            }

            public double D
            {
                get;
                private set;
            }

            public float F
            {
                get;
                private set;
            }

            public int I
            {
                get;
                private set;
            }

            public long L
            {
                get;
                private set;
            }

            public short H
            {
                get;
                private set;
            }

            public E1 E
            {
                get;
                private set;
            }

            public string S
            {
                get;
                private set;
            }

            public object O
            {
                get;
                private set;
            }

            public Type T
            {
                get;
                private set;
            }

            public A6Attribute(bool b, byte y, char c, double d, float f, int i, long l, short h, E1 e, string s, object o, Type t)
            {
                this.B = b;
                this.Y = y;
                this.C = c;
                this.D = d;
                this.F = f;
                this.I = i;
                this.L = l;
                this.H = h;
                this.E = e;
                this.S = s;
                this.O = o;
                this.T = t;
            }
        }

        private class A7Attribute : Attribute
        {
            public int[] I
            {
                get;
                private set;
            }

            public string[] S
            {
                get;
                private set;
            }

            public A7Attribute(int[] i, string[] s)
            {
                this.I = i;
                this.S = s;
            }
        }

        private class A8Attribute : Attribute
        {
            public E2 E
            {
                get;
                private set;
            }

            public A8Attribute(E2 e)
            {
                this.E = e;
            }
        }

        private class A9Attribute : Attribute
        {
            public int P1
            {
                get;
                set;
            }

            public int P2
            {
                [Template("{this}.$$XX$$")]
                get;
                [Template("{this}.$$XX$$ = {value}")]
                set;
            }

            public int P3
            {
                get;
                set;
            }

            [NonScriptable]
            public int P4
            {
                get;
                set;
            }

            public int F1
            {
                get;
                set;
            }

            [NonScriptable]
            public int F2
            {
                get;
                set;
            }
        }

        [NonScriptable]
        [External]
        private class A10Attribute : Attribute
        {
        }

        private class A11Attribute : Attribute
        {
            public int i;

            public A11Attribute()
            {
            }

            public A11Attribute(int i)
            {
                this.i = i;
            }

            [Template("{ i: {i} }")]
            public A11Attribute(int i, string _)
            {
            }
        }

        [Conditional("THE_SYMBOL")]
        private class A12Attribute : Attribute
        {
        }

        [Conditional("THE_SYMBOL"), Conditional("OTHER_SYMBOL")]
        private class A13Attribute : Attribute
        {
        }

        [Conditional("OTHER_SYMBOL")]
        private class A14Attribute : Attribute
        {
        }

        private class C1
        {
        }

        [A1(1), A2(2)]
        private class C2
        {
        }

        [A1(1), A2(2)]
        private interface I1
        {
        }

        [A1(1), A2(2)]
        private enum E1
        {
            V1 = 1,
            V2 = 2
        }

        [Enum(Emit.StringName)]
        private enum E2
        {
            V1,
            V2
        }

        [A3(3)]
        private class C3 : C2
        {
        }

        [A4(4)]
        private class C4 : C3
        {
        }

        [A1(5)]
        private class C5 : C2
        {
        }

        [A2(6)]
        private class C6 : C2
        {
        }

        [A5]
        private class C7
        {
        }

        private class C8 : C7
        {
        }

        [A1(7), A2(8), A2(9), A3(10)]
        private class C9
        {
        }

        [A1(11)]
        private class C10<T1, T2>
        {
        }

        [A1(12)]
        private class I2<T1, T2>
        {
        }

        [A6(true, 43, '\x44', 45.5, 46.5f, 47, 48, 49, E1.V1, "Test_string", null, typeof(string))]
        private class C11
        {
        }

        [A7(new[] { 42, 17, 31 }, new[] { "X", "Y2", "Z3" })]
        private class C12
        {
        }

        [A8(E2.V2)]
        private class C13
        {
        }

        [A9(P1 = 42)]
        private class C14
        {
        }

        [A9(P2 = 18)]
        private class C15
        {
        }

        [A9(P3 = 43)]
        private class C16
        {
        }

        [A9(F1 = 13)]
        private class C18
        {
        }

        [A10, A1(12)]
        private class C19
        {
        }

        [A11(42)]
        private class C20
        {
        }

        [A11(18, "X")]
        private class C21
        {
        }

        [A12, A13, A14]
        private class C22
        {
            [A12, A13, A14]
            public void M()
            {
            }
        }

        [Test]
        public void CanGetCustomTypeAttributesForTypeWithNoAttributes()
        {
            var arr = typeof(C1).GetCustomAttributes(false);
            Assert.AreEqual(arr.Length, 0, "Should have no attributes");
        }

        [Test]
        public void CanGetCustomTypeAttributesForClassWithAttributes()
        {
            var arr = typeof(C2).GetCustomAttributes(false);
            Assert.AreEqual(arr.Length, 2, "Should have two attributes");
            Assert.True(arr[0] is A1Attribute || arr[1] is A1Attribute, "A1 should exist");
            Assert.True(arr[0] is A2Attribute || arr[1] is A2Attribute, "A2 should exist");
            var a1 = (A1Attribute)(arr[0] is A1Attribute ? arr[0] : arr[1]);
            Assert.AreEqual(a1.V, 1);
            var a2 = (A2Attribute)(arr[0] is A2Attribute ? arr[0] : arr[1]);
            Assert.AreEqual(a2.V, 2);
        }

        [Test]
        public void NonScriptableAttributesAreNotIncluded()
        {
            var arr = typeof(C19).GetCustomAttributes(false);
            Assert.AreEqual(arr.Length, 1, "Should have one attribute");
            Assert.True(arr[0] is A1Attribute, "A1 should exist");
        }

        [Test]
        public void CanGetCustomTypeAttributesForInterfaceWithAttributes()
        {
            var arr = typeof(I1).GetCustomAttributes(false);
            Assert.AreEqual(arr.Length, 2, "Should have two attributes");
            Assert.True(arr[0] is A1Attribute || arr[1] is A1Attribute, "A1 should exist");
            Assert.True(arr[0] is A2Attribute || arr[1] is A2Attribute, "A2 should exist");
            var a1 = (A1Attribute)(arr[0] is A1Attribute ? arr[0] : arr[1]);
            Assert.AreEqual(a1.V, 1);
            var a2 = (A2Attribute)(arr[0] is A2Attribute ? arr[0] : arr[1]);
            Assert.AreEqual(a2.V, 2);
        }

        [Test]
        public void CanGetCustomTypeAttributesForEnumWithAttributes()
        {
            var arr = typeof(E1).GetCustomAttributes(false);
            Assert.AreEqual(arr.Length, 2, "Should have two attributes");
            Assert.True(arr[0] is A1Attribute || arr[1] is A1Attribute, "A1 should exist");
            Assert.True(arr[0] is A2Attribute || arr[1] is A2Attribute, "A2 should exist");
            var a1 = (A1Attribute)(arr[0] is A1Attribute ? arr[0] : arr[1]);
            Assert.AreEqual(a1.V, 1);
            var a2 = (A2Attribute)(arr[0] is A2Attribute ? arr[0] : arr[1]);
            Assert.AreEqual(a2.V, 2);
        }

        [Test]
        public void InheritedFlagToGetCustomAttributesWorks()
        {
            var arr = typeof(C3).GetCustomAttributes(false);
            Assert.AreEqual(arr.Length, 1, "Should have one non-inherited attribute");
            Assert.True(arr[0] is A3Attribute);

            arr = typeof(C3).GetCustomAttributes(true);
            Assert.AreEqual(arr.Length, 3, "Should have three inherited attributes");
            Assert.True(arr[0] is A1Attribute || arr[1] is A1Attribute || arr[2] is A1Attribute, "A1 should exist");
            Assert.True(arr[0] is A2Attribute || arr[1] is A2Attribute || arr[2] is A2Attribute, "A2 should exist");
            Assert.True(arr[0] is A3Attribute || arr[1] is A3Attribute || arr[2] is A3Attribute, "A3 should exist");
        }

        [Test]
        public void DeepInheritanceWorks()
        {
            var arr = typeof(C4).GetCustomAttributes(true);
            Assert.AreEqual(arr.Length, 4, "Should have 4 attributes");
            Assert.True(arr[0] is A1Attribute || arr[1] is A1Attribute || arr[2] is A1Attribute || arr[3] is A1Attribute, "A1 should exist");
            Assert.True(arr[0] is A2Attribute || arr[1] is A2Attribute || arr[2] is A2Attribute || arr[3] is A2Attribute, "A2 should exist");
            Assert.True(arr[0] is A3Attribute || arr[1] is A3Attribute || arr[2] is A3Attribute || arr[3] is A3Attribute, "A3 should exist");
            Assert.True(arr[0] is A4Attribute || arr[1] is A4Attribute || arr[2] is A4Attribute || arr[3] is A4Attribute, "A4 should exist");
        }

        [Test]
        public void OverridingSingleUseAttributeReplacesTheAttributeOnTheBaseClass()
        {
            var arr = typeof(C5).GetCustomAttributes(true);
            Assert.AreEqual(arr.Length, 2, "Should have 2 attributes");
            Assert.True(arr[0] is A1Attribute || arr[1] is A1Attribute, "A1 should exist");
            Assert.True(arr[0] is A2Attribute || arr[1] is A2Attribute, "A2 should exist");
            var a1 = (A1Attribute)(arr[0] is A1Attribute ? arr[0] : arr[1]);
            Assert.AreEqual(a1.V, 5);
        }

        [Test]
        public void ApplyingNewInstanceOfMultipleUseAttributeAddsTheAttribute()
        {
            var arr = typeof(C6).GetCustomAttributes(true);
            Assert.AreEqual(arr.Length, 3, "Should have 2 attributes");
            Assert.AreEqual(1, arr.Filter(a => a is A1Attribute).Length, "Should have one A1");
            Assert.AreEqual(2, arr.Filter(a => a is A2Attribute).Length, "Should have two A2");
            var a2 = (A2Attribute[])arr.Filter(a => a is A2Attribute);
            Assert.True(a2[0].V == 2 || a2[1].V == 2);
            Assert.True(a2[0].V == 6 || a2[1].V == 6);
        }

        [Test]
        public void NonInheritedAttributeIsNotInherited()
        {
            var arr = typeof(C8).GetCustomAttributes(true);
            Assert.AreEqual(arr.Length, 0, "Should not have any attributes");
        }

        [Test]
        public void GetCustomAttributesTypeFilterWorks()
        {
            var arr = typeof(C9).GetCustomAttributes(typeof(A2Attribute), true);
            Assert.AreEqual(arr.Length, 2, "Should have 2 A2 attributes");
            Assert.True(arr[0] is A2Attribute && arr[1] is A2Attribute, "Should only return A2 attributes");
            Assert.True(((A2Attribute)arr[0]).V == 8 || ((A2Attribute)arr[0]).V == 9, "Attribute members should be correct");
            Assert.True(((A2Attribute)arr[1]).V == 8 || ((A2Attribute)arr[1]).V == 9, "Attribute members should be correct");
        }

        [Test]
        public void GetCustomAttributesWorksForOpenGenericClass()
        {
            var arr = typeof(C10<,>).GetCustomAttributes(true);
            Assert.AreEqual(arr.Length, 1, "Should have one attribute");
            Assert.True(arr[0] is A1Attribute, "Should be A1");
        }

        [Test]
        public void GetCustomAttributesWorksForConstructedGenericClass()
        {
            var arr = typeof(C10<int, string>).GetCustomAttributes(true);
            Assert.AreEqual(arr.Length, 1, "Should have one attribute");
            Assert.True(arr[0] is A1Attribute, "Should be A1");
        }

        [Test]
        public void GetCustomAttributesWorksForOpenGenericInterface()
        {
            var arr = typeof(I2<,>).GetCustomAttributes(true);
            Assert.AreEqual(arr.Length, 1, "Should have one attribute");
            Assert.True(arr[0] is A1Attribute, "Should be A1");
        }

        [Test]
        public void GetCustomAttributesWorksForConstructedGenericInterface()
        {
            var arr = typeof(I2<int, string>).GetCustomAttributes(true);
            Assert.AreEqual(arr.Length, 1, "Should have one attribute");
            Assert.True(arr[0] is A1Attribute, "Should be A1");
        }

        [Test]
        public void AllSupportedScalarTypesCanBeUsedAsAttributeArguments()
        {
            var a6 = (A6Attribute)typeof(C11).GetCustomAttributes(false)[0];
            Assert.AreEqual(a6.B, true, "B");
            Assert.AreEqual(a6.Y, 43, "Y");
            Assert.AreEqual((int)a6.C, 0x44, "C");
            Assert.AreEqual(a6.D, 45.5, "D");
            Assert.AreEqual(a6.F, 46.5, "F");
            Assert.AreEqual(a6.I, 47, "I");
            Assert.True(a6.L == 48, "L");
            Assert.AreEqual(a6.H, 49, "H");
            Assert.AreEqual(a6.E, E1.V1, "E");
            Assert.AreEqual(a6.S, "Test_string", "S");
            Assert.AreEqual(a6.O, null, "O");
            Assert.AreEqual(a6.T, typeof(string), "T");
        }

        [Test]
        public void ArraysCanBeUsedAsAttributeArguments()
        {
            var a7 = (A7Attribute)typeof(C12).GetCustomAttributes(false)[0];
            Assert.AreEqual(a7.I, new[] { 42, 17, 31 }, "I");
            Assert.AreEqual(a7.S, new[] { "X", "Y2", "Z3" }, "S");
        }

        [Test]
        public void NamedValuesEnumCanBeUsedAsAttributeArgument()
        {
            var a8 = (A8Attribute)typeof(C13).GetCustomAttributes(false)[0];
            Assert.AreEqual(a8.E, "v2", "E");
        }

        [Test]
        public void PropertiesWithSetMethodsImplementedAsNormalMethodsCanBeSetInAttributeDeclaration()
        {
            var a = (A9Attribute)typeof(C14).GetCustomAttributes(false)[0];
            Assert.AreEqual(a.P1, 42);
        }

        [Test]
        public void PropertiesWithSetMethodsImplementedAsInlineCodeCanBeSetInAttributeDeclaration()
        {
            var a = (A9Attribute)typeof(C15).GetCustomAttributes(false)[0];
            Assert.AreEqual(a.P2, 18);
        }

        [Test]
        public void PropertiesImplementedAsFieldsCanBeAssignedInAttributeDeclaration()
        {
            var a = (A9Attribute)typeof(C16).GetCustomAttributes(false)[0];
            Assert.AreEqual(a.P3, 43);
        }

        [Test]
        public void FieldsCanBeAssignedInAttributeDeclaration()
        {
            var a = (A9Attribute)typeof(C18).GetCustomAttributes(false)[0];
            Assert.AreEqual(a.F1, 13);
        }

        [Test]
        public void CreatingAttributeWithNamedConstructorWorks()
        {
            var a = (A11Attribute)typeof(C20).GetCustomAttributes(false)[0];
            Assert.AreEqual(a.i, 42);
        }

        [Test]
        public void CreatingAttributeWithInlineCodeConstructorWorks()
        {
            dynamic a = typeof(C21).GetCustomAttributes(false)[0];
            Assert.AreEqual(a.i, 18);
        }

        [Test]
        public void ConditionalAttributesWhoseSymbolsAreNotDefinedAreRemoved()
        {
            Assert.AreEqual(typeof(C22).GetCustomAttributes(typeof(A12Attribute), false).Length, 1, "A12");
            Assert.AreEqual(typeof(C22).GetCustomAttributes(typeof(A13Attribute), false).Length, 1, "A13");
            Assert.AreEqual(typeof(C22).GetCustomAttributes(typeof(A14Attribute), false).Length, 0, "A14");
            Assert.AreEqual(typeof(C22).GetMethod("M").GetCustomAttributes(typeof(A12Attribute), false).Length, 1, "A12");
            Assert.AreEqual(typeof(C22).GetMethod("M").GetCustomAttributes(typeof(A13Attribute), false).Length, 1, "A13");
            Assert.AreEqual(typeof(C22).GetMethod("M").GetCustomAttributes(typeof(A14Attribute), false).Length, 0, "A14");
        }
    }
}