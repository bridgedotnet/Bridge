using Bridge.Test.NUnit;
using System;
using System.Reflection;

#pragma warning disable 169, 649

namespace Bridge.ClientTest.Reflection
{
    [Category(Constants.MODULE_REFLECTION)]
    [TestFixture(TestNameFormat = "Reflection - Reflection {0}")]
    public class ReflectionTests
    {
        private class A1Attribute : Attribute
        {
            public int X { get; private set; }

            public A1Attribute()
            {
            }

            public A1Attribute(int x)
            {
                X = x;
            }
        }

        [NonScriptable]
        [External]
        private class A2Attribute : Attribute
        { }

        private class A3Attribute : Attribute
        { }

        private class A4Attribute : Attribute
        { }

        public class C1
        {
            public void M1()
            {
            }

            [A1]
            public void M2() { }

            [Reflectable]
            public void M3() { }

            [A2]
            public void M4() { }
        }

        public struct S1
        {
            public void M1()
            {
            }

            [A1]
            public void M2() { }

            [Reflectable]
            public void M3() { }

            [A2]
            public void M4() { }
        }

        public class C2
        {
            [Reflectable]
            public void M1() { }

            [Reflectable]
            public static void M2() { }
        }

        public class C3
        {
            [Reflectable]
            public int M1() { return 0; }

            [Reflectable]
            public int M2(string x) { return 0; }

            [Reflectable]
            public int M3(string x, int y) { return 0; }

            [Reflectable]
            public void M4() { }
        }

        public class C4
        {
            [Reflectable]
            public void M() { }

            [Reflectable]
            public void M(int i) { }

            [Reflectable, Name("x")]
            public void M(int i, string s) { }
        }

        public class C5<T1, T2>
        {
            [Reflectable]
            public T1 M(T2 t2, string s) { return default(T1); }

            [Reflectable]
            public object M2() { return null; }
        }

        public class C6
        {
            [Reflectable]
            public T1 M1<T1, T2>(T2 t2, string s) { return default(T1); }

            [Reflectable]
            public T1 M2<T1>(string s) { return default(T1); }

            [Reflectable]
            public void M3(string s) { }
        }

        public class C7
        {
            public int x;

            [Reflectable]
            public int M1(int x) { return this.x + x; }

            [Reflectable]
            public static void M2(string x) { }

            [Reflectable]
            public string M3<T1, T2>(string s) { return x.ToString() + " " + typeof(T1).FullName + " " + typeof(T2).FullName + " " + s; }
        }

        public class C8
        {
            private string s;

            public C8(string s)
            {
                this.s = s;
            }

            [Reflectable]
            public string M1(string a, string b) { return s + " " + a + " " + b; }

            [Reflectable]
            public static string M2(string a, string b) { return a + " " + b; }

            [Reflectable]
            public string M3<T1, T2>(string a) { return s + " " + typeof(T1).FullName + " " + typeof(T2).FullName + " " + a; }

            [Reflectable]
            public static string M4<T1, T2>(string a) { return typeof(T1).FullName + " " + typeof(T2).FullName + " " + a; }
        }

        public class C9<T1, T2>
        {
            [Reflectable]
            public static string M(string a) { return typeof(T1).FullName + " " + typeof(T2).FullName + " " + a; }
        }

        public class C10
        {
            public int X;
            public string S;

            [Reflectable]
            public C10(int x) { X = x; S = "X"; }

            [Reflectable]
            public C10(int x, string s) { X = x; S = s; }
        }

        public class C11
        {
            public DateTime D;

            [Reflectable]
            public C11(DateTime dt) { D = dt; }
        }

        public class C12
        {
            [Reflectable]
            public int F1;

            [Reflectable, Name("renamedF2")]
            public DateTime F2;

            [Reflectable]
            public static string F3;
        }

        public class C13
        {
            public Action addedE3Handler;

            public Action removedE3Handler;

            public static Action addedE4Handler;

            public static Action removedE4Handler;

            [Reflectable]
            public event Action E1;

            [Reflectable]
            public static event Action E2;

            [Reflectable]
            public event Action E3 { [Template("{this}.addedE3Handler = {value}")] add { } [Template("{this}.removedE3Handler = {value}")] remove { } }

            [Reflectable]
            public static event Action E4 { [Template("Bridge.ClientTest.Reflection.ReflectionTests.C13.addedE4Handler = {value}")] add { } [Template("Bridge.ClientTest.Reflection.ReflectionTests.C13.removedE4Handler = {value}")] remove { } }

            public void RaiseE1()
            {
                if (E1 != null) E1();
            }

            public static void RaiseE2()
            {
                if (E2 != null) E2();
            }
        }

        public class C14
        {
            public int p13Field;

            public static int p14Field;

            [Reflectable]
            public int P1 { get; set; }

            [Reflectable]
            public string P2 { get; set; }

            [Reflectable]
            public static DateTime P3 { get; set; }

            [Reflectable]
            public static double P4 { get; set; }

            [Reflectable]
            public int P5 { get { return 0; } }

            [Reflectable]
            public string P6 { get; set; }

            [Reflectable]
            public static DateTime P7 { get { return default(DateTime); } }

            [Reflectable]
            public static double P8 { get; set; }

            [Reflectable]
            public int P9 { set { } }

            [Reflectable]
            public string P10 { get; set; }

            [Reflectable]
            public static DateTime P11 { set { } }

            [Reflectable]
            public static double P12 { get; set; }

            [Reflectable]
            public int P13 { [Template("{this}.p13Field")] get; [Template("{this}.p13Field = {value}")] set; }

            [Reflectable]
            public static int P14 { [Template("Bridge.ClientTest.Reflection.ReflectionTests.C14.p14Field")] get; [Template("Bridge.ClientTest.Reflection.ReflectionTests.C14.p14Field = {value}")] set; }
        }

        public class C15
        {
            public int x;
            public string s;
            public string v;

            [Reflectable]
            public string this[int x, string s] { get { return v + " " + x + " " + s; } set { this.x = x; this.s = s; this.v = value; } }
        }

        public class C16
        {
            [Reflectable]
            public string this[int x, string s] { get { return null; } }
        }

        public class C17
        {
            [Reflectable]
            public string this[int x, string s] { set { } }
        }

        public class C18
        {
            [A1(1), A3]
            public C18() { }

            [A1(2), A3]
            public void M() { }

            [A1(3), A3]
            public int F;

            [A1(4), A3]
            public int P { [A1(5), A3] get; [A1(6), A3] set; }

            [A1(7), A3]
            public event Action E { [A1(8), A3] add { } [A1(9), A3] remove { } }
        }

        [Constructor("{ }")]
        public class C19
        {
            public int A;

            public string B;

            [Reflectable]
            public C19(int a, string b)
            {
            }
        }

        public class C20
        {
            public int A;

            public string B;

            [Reflectable, Template("{ A: {a}, B: {b} }")]
            public C20(int a, string b)
            {
            }
        }

        public class C21
        {
            public int X;

            public C21(int x)
            {
                X = x;
            }

            [Reflectable, Template("{this}.X + {a} + {b}")]
            public int M1(int a, int b) { return 0; }

            [Reflectable, Template("{a} + {b}")]
            public static int M2(int a, int b) { return 0; }

            [Reflectable, Template("{this}.X + Bridge.Reflection.getTypeFullName({T}) + {s}")]
            public string M3<T>(string s) { return null; }
        }

        public class C22
        {
            public object a;
            public object b;

            [Reflectable]
            public C22(int a, params int[] b)
            {
                this.a = a;
                this.b = b;
            }

            [Reflectable, ExpandParams]
            public C22(string a, params string[] b)
            {
                this.a = a;
                this.b = b;
            }

            [Reflectable]
            public object[] M1(int a, params int[] b)
            {
                return new object[] { a, b };
            }

            [Reflectable, ExpandParams]
            public object[] M2(int a, params int[] b)
            {
                return new object[] { a, b };
            }
        }

        public class C23
        {
            public object a;
            public object b;

            [Reflectable]
            public C23(int a, params int[] b)
            {
                this.a = a;
                this.b = b;
            }

            [Reflectable, ExpandParams]
            public C23(string a, params string[] b)
            {
                this.a = a;
                this.b = b;
            }

            [Reflectable]
            public object[] M1(int a, params int[] b)
            {
                return new object[] { a, b };
            }

            [Reflectable, ExpandParams]
            public object[] M2(int a, params int[] b)
            {
                return new object[] { a, b };
            }
        }

        public class C24
        {
            public int x;

            public string s;

            public string v;

            [Reflectable]
            public string this[int x, string s] { [Template("{this}.v + ' ' + {x} + ' ' + {s}")] get { return null; } [Template("(function(t, x, s) { t.x = x; t.s = s; t.v = {value}; })({this}, {x}, {s})")] set { } }
        }

        [Reflectable(MemberAccessibility.None)]
        public class C25
        {
            public int A1;

            [Reflectable]
            public int B1;

            [Reflectable(true)]
            public int C1;

            [Reflectable(false)]
            public int D1;

            internal int A2;

            [Reflectable]
            internal int B2;

            [Reflectable(true)]
            internal int C2;

            [Reflectable(false)]
            internal int D2;

            protected int A3;

            [Reflectable]
            protected int B3;

            [Reflectable(true)]
            protected int C3;

            [Reflectable(false)]
            protected int D3;

            protected internal int A4;

            [Reflectable]
            protected internal int B4;

            [Reflectable(true)]
            protected internal int C4;

            [Reflectable(false)]
            protected internal int D4;

            private int A5;

            [Reflectable]
            private int B5;

            [Reflectable(true)]
            private int C5;

            [Reflectable(false)]
            private int D5;
        }

        [Reflectable(MemberAccessibility.PublicAndProtected)]
        public class C26
        {
            public int A1;

            [Reflectable]
            public int B1;

            [Reflectable(true)]
            public int C1;

            [Reflectable(false)]
            public int D1;

            internal int A2;

            [Reflectable]
            internal int B2;

            [Reflectable(true)]
            internal int C2;

            [Reflectable(false)]
            internal int D2;

            protected int A3;

            [Reflectable]
            protected int B3;

            [Reflectable(true)]
            protected int C3;

            [Reflectable(false)]
            protected int D3;

            protected internal int A4;

            [Reflectable]
            protected internal int B4;

            [Reflectable(true)]
            protected internal int C4;

            [Reflectable(false)]
            protected internal int D4;

            private int A5;

            [Reflectable]
            private int B5;

            [Reflectable(true)]
            private int C5;

            [Reflectable(false)]
            private int D5;
        }

        [Reflectable(MemberAccessibility.NonPrivate)]
        public class C27
        {
            public int A1;

            [Reflectable]
            public int B1;

            [Reflectable(true)]
            public int C1;

            [Reflectable(false)]
            public int D1;

            internal int A2;

            [Reflectable]
            internal int B2;

            [Reflectable(true)]
            internal int C2;

            [Reflectable(false)]
            internal int D2;

            protected int A3;

            [Reflectable]
            protected int B3;

            [Reflectable(true)]
            protected int C3;

            [Reflectable(false)]
            protected int D3;

            protected internal int A4;

            [Reflectable]
            protected internal int B4;

            [Reflectable(true)]
            protected internal int C4;

            [Reflectable(false)]
            protected internal int D4;

            private int A5;

            [Reflectable]
            private int B5;

            [Reflectable(true)]
            private int C5;

            [Reflectable(false)]
            private int D5;
        }

        [Reflectable(MemberAccessibility.All)]
        public class C28
        {
            public int A1;

            [Reflectable]
            public int B1;

            [Reflectable(true)]
            public int C1;

            [Reflectable(false)]
            public int D1;

            internal int A2;

            [Reflectable]
            internal int B2;

            [Reflectable(true)]
            internal int C2;

            [Reflectable(false)]
            internal int D2;

            protected int A3;

            [Reflectable]
            protected int B3;

            [Reflectable(true)]
            protected int C3;

            [Reflectable(false)]
            protected int D3;

            protected internal int A4;

            [Reflectable]
            protected internal int B4;

            [Reflectable(true)]
            protected internal int C4;

            [Reflectable(false)]
            protected internal int D4;

            private int A5;

            [Reflectable]
            private int B5;

            [Reflectable(true)]
            private int C5;

            [Reflectable(false)]
            private int D5;
        }

        [Test]
        public void GetMembersReturnsMethodsWithAnyScriptableAttributeOrReflectableAttribute()
        {
            var methods = typeof(C1).GetMembers();
            Assert.AreEqual(methods.Length, 2, "Should be two methods");
            Assert.True(methods[0].Name == "M2" || methods[1].Name == "M2");
            Assert.True(methods[0].Name == "M3" || methods[1].Name == "M3");
        }

        [Test]
        public void StructMemberReflectionWorks()
        {
            var methods = typeof(S1).GetMembers();
            Assert.AreEqual(methods.Length, 2, "Should be two methods");
            Assert.True(methods[0].Name == "M2" || methods[1].Name == "M2");
            Assert.True(methods[0].Name == "M3" || methods[1].Name == "M3");
        }

        [Test]
        public void IsStaticFlagWorksForMethod()
        {
            Assert.AreEqual(typeof(C2).GetMembers(BindingFlags.Instance | BindingFlags.Public)[0].IsStatic, false, "Instance member should not be static");
            Assert.AreEqual(typeof(C2).GetMembers(BindingFlags.Static | BindingFlags.Public)[0].IsStatic, true, "Static member should be static");
        }

        [Test]
        public void MemberTypeIsMethodForMethod()
        {
            Assert.AreEqual(typeof(C3).GetMethod("M1").MemberType, MemberTypes.Method);
            Assert.AreEqual(typeof(C21).GetMethod("M1").MemberType, MemberTypes.Method);
        }

        [Test]
        public void IsConstructorIsFalseForMethod()
        {
            Assert.AreEqual(typeof(C3).GetMethod("M1").IsConstructor, false);
            Assert.AreEqual(typeof(C21).GetMethod("M1").IsConstructor, false);
        }

        [Test]
        public void IsConstructorIsTrueForAllKindsOfConstructors()
        {
            var c10 = typeof(C10).GetMembers();
            var c11 = typeof(C11).GetMembers();
            var c19 = typeof(C19).GetMembers();
            var c20 = typeof(C20).GetMembers();
            Assert.True(((ConstructorInfo)c10[0]).IsConstructor, "Unnamed");
            Assert.True(((ConstructorInfo)c10[1]).IsConstructor, "Named");
            Assert.True(((ConstructorInfo)c11[0]).IsConstructor, "Static method");
            Assert.True(((ConstructorInfo)c19[0]).IsConstructor, "Object literal");
            Assert.True(((ConstructorInfo)c20[0]).IsConstructor, "Inline code");
        }

        [Test]
        public void IsStaticIsFalseForAllKindsOfConstructors()
        {
            var c10 = typeof(C10).GetMembers();
            var c11 = typeof(C11).GetMembers();
            var c19 = typeof(C19).GetMembers();
            var c20 = typeof(C20).GetMembers();
            Assert.False(c10[0].IsStatic, "Unnamed");
            Assert.False(c10[1].IsStatic, "Named");
            Assert.False(c11[0].IsStatic, "Static method");
            Assert.False(c19[0].IsStatic, "Object literal");
            Assert.False(c20[0].IsStatic, "Inline code");
        }

        [Test]
        public void MemberTypeIsConstructorForAllKindsOfConstructors()
        {
            var c10 = typeof(C10).GetMembers();
            var c11 = typeof(C11).GetMembers();
            var c19 = typeof(C19).GetMembers();
            var c20 = typeof(C20).GetMembers();
            Assert.AreEqual(c10[0].MemberType, MemberTypes.Constructor, "Unnamed");
            Assert.AreEqual(c10[1].MemberType, MemberTypes.Constructor, "Named");
            Assert.AreEqual(c11[0].MemberType, MemberTypes.Constructor, "Static method");
            Assert.AreEqual(c19[0].MemberType, MemberTypes.Constructor, "Object literal");
            Assert.AreEqual(c20[0].MemberType, MemberTypes.Constructor, "Inline code");
        }

        [Test]
        public void NameIsCtorForAllKindsOfConstructors()
        {
            var c10 = typeof(C10).GetMembers();
            var c11 = typeof(C11).GetMembers();
            var c19 = typeof(C19).GetMembers();
            var c20 = typeof(C20).GetMembers();
            Assert.AreEqual(c10[0].Name, ".ctor", "Unnamed");
            Assert.AreEqual(c10[1].Name, ".ctor", "Named");
            Assert.AreEqual(c11[0].Name, ".ctor", "Static method");
            Assert.AreEqual(c19[0].Name, ".ctor", "Object literal");
            Assert.AreEqual(c20[0].Name, ".ctor", "Inline code");
        }

        [Test]
        public void DeclaringTypeIsCorrectForAllKindsOfConstructors()
        {
            var c10 = typeof(C10).GetMembers();
            var c11 = typeof(C11).GetMembers();
            var c19 = typeof(C19).GetMembers();
            var c20 = typeof(C20).GetMembers();
            Assert.AreEqual(c10[0].DeclaringType, typeof(C10), "Unnamed");
            Assert.AreEqual(c10[1].DeclaringType, typeof(C10), "Named");
            Assert.AreEqual(c11[0].DeclaringType, typeof(C11), "Static method");
            Assert.AreEqual(c19[0].DeclaringType, typeof(C19), "Object literal");
            Assert.AreEqual(c20[0].DeclaringType, typeof(C20), "Inline code");
        }

        [Test]
        public void ScriptNameIsCorrectForAllKindsOfConstructors()
        {
            var c10 = typeof(C10).GetMembers();
            var c11 = typeof(C11).GetMembers();
            var c19 = typeof(C19).GetMembers();
            var c20 = typeof(C20).GetMembers();
            Assert.True(((ConstructorInfo)c10[0]).ScriptName == "ctor", "Unnamed");
            Assert.AreEqual(((ConstructorInfo)c10[1]).ScriptName, "$ctor1", "Named");
            Assert.AreEqual(((ConstructorInfo)c11[0]).ScriptName, "ctor", "Static method");
            Assert.True(((ConstructorInfo)c19[0]).ScriptName == null, "Object literal");
            Assert.True(((ConstructorInfo)c20[0]).ScriptName == null, "Inline code");
        }

        [Test]
        public void IsStaticMethodIsTrueOnlyForStaticMethodConstructors()
        {
            var c10 = typeof(C10).GetMembers();
            var c11 = typeof(C11).GetMembers();
            var c19 = typeof(C19).GetMembers();
            var c20 = typeof(C20).GetMembers();
            Assert.False(((ConstructorInfo)c10[0]).IsStaticMethod, "Unnamed");
            Assert.False(((ConstructorInfo)c10[1]).IsStaticMethod, "Named");
            Assert.False(((ConstructorInfo)c11[0]).IsStaticMethod, "Static method");
            Assert.False(((ConstructorInfo)c19[0]).IsStaticMethod, "Object literal");
            Assert.False(((ConstructorInfo)c20[0]).IsStaticMethod, "Inline code");
        }

        [Test]
        public void IsExpandParamsIsCorrectForConstructors()
        {
            var c1 = typeof(C22).GetConstructor(new[] { typeof(int), typeof(int[]) });
            var c2 = typeof(C22).GetConstructor(new[] { typeof(string), typeof(string[]) });
            var c3 = typeof(C23).GetConstructor(new[] { typeof(int), typeof(int[]) });
            var c4 = typeof(C23).GetConstructor(new[] { typeof(string), typeof(string[]) });
            Assert.False(c1.IsExpandParams);
            Assert.True(c2.IsExpandParams);
            Assert.False(c3.IsExpandParams);
            Assert.True(c4.IsExpandParams);
        }

        [Test]
        public void SpecialImplementationExistsOnlyForObjectLiteralAndInlineCodeConstructors()
        {
            var c10 = typeof(C10).GetMembers();
            var c11 = typeof(C11).GetMembers();
            var c19 = typeof(C19).GetMembers();
            var c20 = typeof(C20).GetMembers();
            Assert.True(((ConstructorInfo)c10[0]).SpecialImplementation == null, "Unnamed");
            Assert.True(((ConstructorInfo)c10[1]).SpecialImplementation == null, "Named");
            Assert.True(((ConstructorInfo)c11[0]).SpecialImplementation == null, "Static method");
            Assert.True(((ConstructorInfo)c19[0]).SpecialImplementation != null, "Object literal");
            Assert.True(((ConstructorInfo)c20[0]).SpecialImplementation != null, "Inline code");
        }

        [Test]
        public void DeclaringTypeShouldBeCorrectForMethods()
        {
            Assert.AreEqual(typeof(C3).GetMethod("M1").DeclaringType, typeof(C3), "Simple type");
            Assert.AreEqual(typeof(C5<,>).GetMethod("M").DeclaringType, typeof(C5<,>), "Open generic type");
            Assert.AreEqual(typeof(C5<int, string>).GetMethod("M").DeclaringType, typeof(C5<int, string>), "Constructed generic type");
        }

        [Test]
        public void ReturnTypeAndParameterTypesAreCorrectForMethods()
        {
            var m1 = typeof(C3).GetMethod("M1");
            Assert.AreEqual(m1.ReturnType, typeof(int), "Return type should be int");
            Assert.AreEqual(m1.ParameterTypes.Length, 0, "M1 should have no parameters");

            var m2 = typeof(C3).GetMethod("M2");
            Assert.AreEqual(m2.ParameterTypes, new[] { typeof(string) }, "M2 parameter types should be correct");

            var m3 = typeof(C3).GetMethod("M3");
            Assert.AreEqual(m3.ParameterTypes, new[] { typeof(string), typeof(int) }, "M3 parameter types should be correct");

            var m4 = typeof(C7).GetMethod("M1");
            Assert.False(m4.IsStatic, "M4 should not be static");
            Assert.AreEqual(m4.ParameterTypes, new[] { typeof(int) }, "C7.M1 parameters should be correct");

            var m5 = typeof(C21).GetMethod("M1");
            Assert.AreEqual(m5.ReturnType, typeof(int), "M5 Return type should be int");
            Assert.False(m5.IsStatic, "M5 should not be static");
            Assert.AreEqual(m5.ParameterTypes, new[] { typeof(int), typeof(int) }, "M5 parameters should be correct");
        }

        [Test]
        public void ParameterTypesShouldBeCorrectForConstructors()
        {
            var c10 = typeof(C10).GetMembers();
            var c11 = typeof(C11).GetMembers();
            var c19 = typeof(C19).GetMembers();
            var c20 = typeof(C20).GetMembers();
            Assert.AreEqual(((ConstructorInfo)c10[0]).ParameterTypes, new[] { typeof(int) }, "Unnamed");
            Assert.AreEqual(((ConstructorInfo)c10[1]).ParameterTypes, new[] { typeof(int), typeof(string) }, "Named");
            Assert.AreEqual(((ConstructorInfo)c11[0]).ParameterTypes, new[] { typeof(DateTime) }, "Static method");
            Assert.AreEqual(((ConstructorInfo)c19[0]).ParameterTypes, new[] { typeof(int), typeof(string) }, "Object literal");
            Assert.AreEqual(((ConstructorInfo)c20[0]).ParameterTypes, new[] { typeof(int), typeof(string) }, "Object literal");
        }

        [Test]
        public void VoidIsConsideredObjectAsReturnType()
        {
            Assert.AreEqual(typeof(C3).GetMethod("M4").ReturnType, typeof(void), "Return type of void method should be void");
        }

        [Test]
        public void MethodNameIsTheCSharpName()
        {
            var members = (MethodInfo[])typeof(C4).GetMembers();
            Assert.AreEqual(members.Filter(m => m.Name == "M").Length, 3, "All methods should have name M");
        }

        [Test]
        public void TypeParametersAreReplacedWithObjectForReturnAndParameterTypesForOpenGenericTypes()
        {
            var m = typeof(C5<,>).GetMethod("M");
            Assert.AreEqual("T1", m.ReturnType.Name, "Return type should be object");
            Assert.AreDeepEqual(m.ParameterTypes.Map(p => p.Name), new[] { "T2", "String" }, "Parameters should be correct");
        }

        [Test]
        public void TypeParametersAreCorrectForReturnAndParameterTypesForConstructedGenericTypes()
        {
            var m = typeof(C5<string, DateTime>).GetMethod("M");
            Assert.AreEqual(m.ReturnType, typeof(string), "Return type of M should be string");
            Assert.AreDeepEqual(m.ParameterTypes, new[] { typeof(DateTime), typeof(string) }, "Parameters to M should be correct");

            var m2 = typeof(C5<string, DateTime>).GetMethod("M2");
            Assert.AreEqual(m2.ReturnType, typeof(object), "Return type of M2 should be object");
            Assert.AreEqual(m2.ParameterTypes.Length, 0, "M2 should not have any parameters");
        }

        [Test]
        public void MethodTypeParametersAreReplacedWithObjectForReturnAndParameterTypes()
        {
            var m = typeof(C6).GetMethod("M1");
            Assert.AreEqual(m.ReturnType, typeof(object), "Return type should be object");
            Assert.AreDeepEqual(m.ParameterTypes, new[] { typeof(object), typeof(string) }, "Parameters should be correct");
        }

        [Test]
        public void IsGenericMethodDefinitionAndTypeParameterCountWork()
        {
            Assert.True(typeof(C6).GetMethod("M1").IsGenericMethodDefinition, "M1 should be generic");
            Assert.True(typeof(C6).GetMethod("M2").IsGenericMethodDefinition, "M2 should be generic");
            Assert.False(typeof(C6).GetMethod("M3").IsGenericMethodDefinition, "M3 should not be generic");
            Assert.AreEqual(typeof(C6).GetMethod("M1").TypeParameterCount, 2, "M1 should have 2 type parameters");
            Assert.AreEqual(typeof(C6).GetMethod("M2").TypeParameterCount, 1, "M2 should have 1 type parameters");
            Assert.AreEqual(typeof(C6).GetMethod("M3").TypeParameterCount, 0, "M3 should have 0 type parameters");
        }

        [Test]
        public void ScriptNameWorksForAllKindsOfMethods()
        {
            Assert.AreEqual(typeof(C4).GetMethod("M", new[] { typeof(int) }).ScriptName, "M$1", "C4.M");
            Assert.True(typeof(C21).GetMethod("M1").ScriptName == null, "C21.M1");
            Assert.AreEqual(typeof(C7).GetMethod("M1").ScriptName, "M1", "C7.m1");
        }

        /*[Test]
		public void IsStaticMethodWithThisAsFirstArgumentIsTrueOnlyForMethodsOnSerializableTypes() {
			Assert.False(typeof(C21).GetMethod("M3").IsStaticMethodWithThisAsFirstArgument, "C21.M3");
			Assert.True (typeof(C7 ).GetMethod("M1").IsStaticMethodWithThisAsFirstArgument, "C7.m1");
		}*/

        [Test]
        public void SpecialImplementationExistsOnlyForMethodsImplementedAsInlineCode()
        {
            Assert.True(typeof(C4).GetMethod("M", new[] { typeof(int) }).SpecialImplementation == null, "C4.M");
            Assert.True(typeof(C21).GetMethod("M3").SpecialImplementation != null, "C21.M3");
            Assert.True(typeof(C7).GetMethod("M1").SpecialImplementation == null, "C7.m1");
        }

        [Test]
        public void IsExpandParamsIsCorrectForMethods()
        {
            var m1 = typeof(C22).GetMethod("M1");
            var m2 = typeof(C22).GetMethod("M2");
            var m3 = typeof(C23).GetMethod("M1");
            var m4 = typeof(C23).GetMethod("M2");
            Assert.False(m1.IsExpandParams);
            Assert.True(m2.IsExpandParams);
            Assert.False(m3.IsExpandParams);
            Assert.True(m4.IsExpandParams);
        }

        [Test]
        public void CreateDelegateWorksForNonGenericInstanceMethods()
        {
            var m = typeof(C8).GetMethod("M1");
            var c = new C8("X");
            var f1 = (Func<string, string, string>)m.CreateDelegate(typeof(Func<string, string, string>), c);
            var f2 = (Func<string, string, string>)m.CreateDelegate(c);
            Assert.AreEqual(f1("a", "b"), "X a b", "Delegate created with delegate type should be correct");
            Assert.AreEqual(f2("c", "d"), "X c d", "Delegate created without delegate type should be correct");
            Assert.Throws(() => m.CreateDelegate(typeof(Func<string, string, string>)), "Without target with delegate type should throw");
            Assert.Throws(() => m.CreateDelegate(), "Without target without delegate type should throw");
            Assert.Throws(() => m.CreateDelegate(typeof(Func<string, string, string>), (object)null), "Null target with delegate type should throw");
            Assert.Throws(() => m.CreateDelegate((object)null), "Null target without delegate type should throw");
            Assert.Throws(() => m.CreateDelegate(c, new[] { typeof(string) }), "With type arguments with target should throw");
            Assert.Throws(() => m.CreateDelegate(new[] { typeof(string) }), "With type arguments without target should throw");
            Assert.Throws(() => m.CreateDelegate((object)null, new[] { typeof(string) }), "With type arguments with null target should throw");
        }

        [Test]
        public void DelegateCreateDelegateWorksForNonGenericInstanceMethods()
        {
            var m = typeof(C8).GetMethod("M1");
            var f1 = (Func<string, string, string>)Delegate.CreateDelegate(typeof(Func<string, string, string>), new C8("X"), m);
            Assert.AreEqual(f1("a", "b"), "X a b", "Delegate should be correct");
        }

        [Test]
        public void CreateDelegateWorksNonGenericStaticMethods()
        {
            var m = typeof(C8).GetMethod("M2");
            var f1 = (Func<string, string, string>)m.CreateDelegate(typeof(Func<string, string, string>));
            var f2 = (Func<string, string, string>)m.CreateDelegate();
            var f3 = (Func<string, string, string>)m.CreateDelegate(typeof(Func<string, string, string>), (object)null);
            var f4 = (Func<string, string, string>)m.CreateDelegate((object)null);
            Assert.AreEqual(f1("a", "b"), "a b", "Delegate created with delegate type without target should be correct");
            Assert.AreEqual(f2("c", "d"), "c d", "Delegate created without delegate type without target should be correct");
            Assert.AreEqual(f3("e", "f"), "e f", "Delegate created with delegate type with null target should be correct");
            Assert.AreEqual(f4("g", "h"), "g h", "Delegate created without delegate type with null target should be correct");
            Assert.Throws(() => m.CreateDelegate(typeof(Func<string, string, string>), new C8("")), "With target with delegate type should throw");
            Assert.Throws(() => m.CreateDelegate(new C8("")), "With target without delegate type should throw");
            Assert.Throws(() => m.CreateDelegate(new C8(""), new[] { typeof(string) }), "With type arguments with target should throw");
            Assert.Throws(() => m.CreateDelegate(new[] { typeof(string) }), "With type arguments without target should throw");
            Assert.Throws(() => m.CreateDelegate((object)null, new[] { typeof(string) }), "With type arguments with null target should throw");
        }

        [Test]
        public void CreateDelegateWorksNonGenericStaticMethodOfGenericType()
        {
            var m = typeof(C9<int, string>).GetMethod("M");
            var f = (Func<string, string>)m.CreateDelegate();
            Assert.AreEqual(f("a"), "System.Int32 System.String a", "Delegate should return correct results");
        }

        [Test]
        public void CreateDelegateWorksForGenericInstanceMethods()
        {
            var m = typeof(C8).GetMethod("M3");
            var c = new C8("X");
            var f = (Func<string, string>)m.CreateDelegate(c, new[] { typeof(int), typeof(string) });
            Assert.AreEqual(f("a"), "X System.Int32 System.String a", "Result of invoking delegate should be correct");
            Assert.Throws(() => m.CreateDelegate((object)null, new[] { typeof(int), typeof(string) }), "Null target with correct type arguments should throw");
            Assert.Throws(() => m.CreateDelegate(c), "No type arguments with target should throw");
            Assert.Throws(() => m.CreateDelegate(c, new Type[0]), "0 type arguments with target should throw");
            Assert.Throws(() => m.CreateDelegate(c, new Type[1]), "1 type arguments with target should throw");
            Assert.Throws(() => m.CreateDelegate(c, new Type[3]), "3 type arguments with target should throw");
        }

        [Test]
        public void CreateDelegateWorksForGenericStaticMethods()
        {
            var m = typeof(C8).GetMethod("M4");
            var f = (Func<string, string>)m.CreateDelegate((object)null, new[] { typeof(int), typeof(string) });
            Assert.AreEqual(f("a"), "System.Int32 System.String a", "Result of invoking delegate should be correct");
            Assert.Throws(() => m.CreateDelegate(new C8(""), new[] { typeof(int), typeof(string) }), "Target with correct type arguments should throw");
            Assert.Throws(() => m.CreateDelegate((object)null), "No type arguments without target should throw");
            Assert.Throws(() => m.CreateDelegate((object)null, new Type[0]), "0 type arguments without target should throw");
            Assert.Throws(() => m.CreateDelegate((object)null, new Type[1]), "1 type arguments without target should throw");
            Assert.Throws(() => m.CreateDelegate((object)null, new Type[3]), "3 type arguments without target should throw");
        }

        [Test]
        public void InvokeWorksForNonGenericInstanceMethods()
        {
            var m = typeof(C8).GetMethod("M1");
            var argsArr = new object[] { "c", "d" };
            var c = new C8("X");
            Assert.AreEqual(m.Invoke(c, "a", "b"), "X a b", "Invoke with target should work");
            Assert.AreEqual(m.Invoke(c, argsArr), "X c d", "Invoke (non-expanded) with target should work");
            Assert.Throws(() => m.Invoke(null, "a", "b"), "Invoke without target should throw");
            Assert.Throws(() => m.Invoke(c, new[] { typeof(string) }, "a", "b"), "Invoke with type arguments with target should throw");
            Assert.Throws(() => m.Invoke(null, new[] { typeof(string) }, "a", "b"), "Invoke with type arguments without target should throw");
        }

        [Test]
        public void InvokeWorksForNonGenericStaticMethods()
        {
            var m = typeof(C8).GetMethod("M2");
            Assert.AreEqual(m.Invoke(null, "a", "b"), "a b", "Invoke without target should work");
            Assert.Throws(() => m.Invoke(new C8(""), "a", "b"), "Invoke with target should throw");
            Assert.Throws(() => m.Invoke(new C8(""), new[] { typeof(string) }, "a", "b"), "Invoke with type arguments with target should throw");
            Assert.Throws(() => m.Invoke(null, new[] { typeof(string) }, "a", "b"), "Invoke with type arguments without target should throw");
        }

        [Test]
        public void InvokeWorksForNonGenericInstanceMethodsOnSerializableTypes()
        {
            var m = typeof(C7).GetMethod("M1");
            Assert.AreEqual(m.Invoke(new C7 { x = 13 }, 14), 27, "Invoke should work");
        }

        [Test]
        public void InvokeWorksForNonGenericInlineCodeMethods()
        {
            Assert.AreEqual(typeof(C21).GetMethod("M1").Invoke(new C21(14), 15, 16), 45, "Instance invoke should work");
            Assert.AreEqual(typeof(C21).GetMethod("M2").Invoke(null, 15, 16), 31, "Static invoke should work");
        }

        [Test]
        public void InvokeWorksForGenericInlineCodeMethods()
        {
            var m = typeof(C21).GetMethod("M3");
            Assert.AreEqual(m.Invoke(new C21(42), new[] { typeof(string) }, "World"), "42System.StringWorld", "Invoke should work");
        }

        [Test]
        public void InvokeWorksForGenericInstanceMethod()
        {
            var m = typeof(C8).GetMethod("M3");
            var argsArr = new object[] { "x" };
            var c = new C8("X");
            Assert.AreEqual(m.Invoke(c, new[] { typeof(int), typeof(string) }, "a"), "X System.Int32 System.String a", "Result of invoking delegate should be correct");
            Assert.AreEqual(m.Invoke(c, new[] { typeof(int), typeof(string) }, argsArr), "X System.Int32 System.String x", "Result of invoking delegate should be correct");
            Assert.Throws(() => m.Invoke(null, new[] { typeof(int), typeof(string) }, "a"), "Null target with correct type arguments should throw");
            Assert.Throws(() => m.Invoke(c, "a"), "No type arguments with target should throw");
            Assert.Throws(() => m.Invoke(c, new Type[0], "a"), "0 type arguments with target should throw");
            Assert.Throws(() => m.Invoke(c, new Type[1], "a"), "1 type arguments with target should throw");
            Assert.Throws(() => m.Invoke(c, new Type[3], "a"), "3 type arguments with target should throw");
        }

        [Test]
        public void InvokeWorksForGenericStaticMethod()
        {
            var m = typeof(C8).GetMethod("M4");
            Assert.AreEqual(m.Invoke(null, new[] { typeof(int), typeof(string) }, "a"), "System.Int32 System.String a", "Result of invoking delegate should be correct");
            Assert.Throws(() => m.Invoke(new C8(""), new[] { typeof(int), typeof(string) }, "a"), "Target with correct type arguments should throw");
            Assert.Throws(() => m.Invoke(null, "a"), "No type arguments without target should throw");
            Assert.Throws(() => m.Invoke(null, new Type[0], "a"), "0 type arguments without target should throw");
            Assert.Throws(() => m.Invoke(null, new Type[1], "a"), "1 type arguments without target should throw");
            Assert.Throws(() => m.Invoke(null, new Type[3], "a"), "3 type arguments without target should throw");
        }

        [Test]
        public void InvokeWorksForGenericInstanceMethodsOnSerializableTypes()
        {
            var m = typeof(C7).GetMethod("M3");
            Assert.AreEqual(m.Invoke(new C7 { x = 13 }, new[] { typeof(int), typeof(string) }, "Suffix"), "13 System.Int32 System.String Suffix", "Invoke should work");
        }

        [Test]
        public void InvokeWorksForExpandParamsMethods()
        {
            var m1 = typeof(C22).GetMethod("M2");
            var r1 = (object[])m1.Invoke(new C22(0, null), new object[] { 2, new[] { 17, 31 } });
            Assert.AreEqual(r1, new object[] { 2, new[] { 17, 31 } });

            var m2 = typeof(C23).GetMethod("M2");
            var r2 = (object[])m2.Invoke(new C23(0, null), new object[] { 2, new[] { 17, 32 } });
            Assert.AreEqual(r2, new object[] { 2, new[] { 17, 32 } });
        }

        [Test]
        public void InvokeWorksForAllKindsOfConstructors()
        {
            var c1 = (ConstructorInfo)typeof(C10).GetMembers().Filter(m => ((ConstructorInfo)m).ParameterTypes.Length == 1)[0];
            var o1 = (C10)c1.Invoke(42);
            Assert.AreEqual(o1.X, 42, "o1.X");
            Assert.AreEqual(o1.S, "X", "o1.S");

            var c2 = (ConstructorInfo)typeof(C10).GetMembers().Filter(m => ((ConstructorInfo)m).ParameterTypes.Length == 2)[0];
            var o2 = (C10)c2.Invoke(14, "Hello");
            Assert.AreEqual(o2.X, 14, "o2.X");
            Assert.AreEqual(o2.S, "Hello", "o2.S");

            var c3 = (ConstructorInfo)typeof(C11).GetMembers()[0];
            var o3 = (C11)c3.Invoke(new DateTime(2012, 1, 2));
            Assert.AreEqual(o3.D, new DateTime(2012, 1, 2), "o3.D");

            var c19 = (ConstructorInfo)typeof(C19).GetMembers()[0];
            var o4 = (C19)c19.Invoke(42, "Hello");
            Assert.AreDeepEqual(o4, Script.ToPlainObject(new { a = 42, b = "Hello" }));

            var c20 = (ConstructorInfo)typeof(C20).GetMembers()[0];
            var o5 = c20.Invoke(42, "Hello");
            Assert.AreDeepEqual(o5, Script.ToPlainObject(new { A = 42, B = "Hello" }));
        }

        [Test]
        public void InvokeWorksForExpandParamsConstructors()
        {
            var c1 = typeof(C22).GetConstructor(new[] { typeof(string), typeof(string[]) });
            var o1 = (C22)c1.Invoke(new object[] { "a", new[] { "b", "c" } });
            Assert.AreEqual(o1.a, "a", "o1.a");
            Assert.AreEqual(o1.b, new[] { "b", "c" }, "o1.b");

            var c2 = typeof(C23).GetConstructor(new[] { typeof(string), typeof(string[]) });
            var o2 = (C23)c2.Invoke(new object[] { "a", new[] { "b", "c" } });
            Assert.AreEqual(o2.a, "a", "o1.a");
            Assert.AreEqual(o2.b, new[] { "b", "c" }, "o1.b");
        }

        [Test]
        public void MemberTypeIsFieldForField()
        {
            Assert.AreEqual(typeof(C12).GetField("F1").MemberType, MemberTypes.Field, "Instance");
            Assert.AreEqual(typeof(C12).GetField("F3").MemberType, MemberTypes.Field, "Static");
        }

        [Test]
        public void DeclaringTypeIsCorrectForField()
        {
            Assert.AreEqual(typeof(C12).GetField("F1").DeclaringType, typeof(C12), "Instance");
            Assert.AreEqual(typeof(C12).GetField("F3").DeclaringType, typeof(C12), "Static");
        }

        [Test]
        public void NameIsCorrectForField()
        {
            Assert.AreEqual(typeof(C12).GetField("F1").Name, "F1", "Instance");
            Assert.AreEqual(typeof(C12).GetField("F3").Name, "F3", "Static");
        }

        [Test]
        public void IsStaticIsCorrectForField()
        {
            Assert.AreEqual(typeof(C12).GetField("F1").IsStatic, false, "Instance 1");
            Assert.AreEqual(typeof(C12).GetField("F2").IsStatic, false, "Instance 2");
            Assert.AreEqual(typeof(C12).GetField("F3").IsStatic, true, "Static");
        }

        [Test]
        public void FieldTypeIsCorrectForField()
        {
            Assert.AreEqual(typeof(C12).GetField("F1").FieldType, typeof(int), "Instance 1");
            Assert.AreEqual(typeof(C12).GetField("F2").FieldType, typeof(DateTime), "Instance 2");
            Assert.AreEqual(typeof(C12).GetField("F3").FieldType, typeof(string), "Static");
        }

        [Test]
        public void ScriptNameIsCorrectForField()
        {
            Assert.AreEqual(typeof(C12).GetField("F1").ScriptName, "F1", "f1");
            Assert.AreEqual(typeof(C12).GetField("F2").ScriptName, "renamedF2", "f2");
        }

        [Test]
        public void GetValueWorksForInstanceField()
        {
            var c = new C12 { F1 = 42 };
            Assert.AreEqual(typeof(C12).GetField("F1").GetValue(c), 42);
        }

        [Test]
        public void GetValueWorksForStaticField()
        {
            C12.F3 = "X_Test";
            Assert.AreEqual(typeof(C12).GetField("F3").GetValue(null), "X_Test");
        }

        [Test]
        public void SetValueWorksForInstanceField()
        {
            var c = new C12();
            typeof(C12).GetField("F1").SetValue(c, 14);
            Assert.AreEqual(c.F1, 14);
        }

        [Test]
        public void SetValueWorksForStaticField()
        {
            typeof(C12).GetField("F3").SetValue(null, "Hello, world");
            Assert.AreEqual(C12.F3, "Hello, world");
        }

        [Test]
        public void MemberTypeIsEventForEvent()
        {
            Assert.AreEqual(typeof(C13).GetEvent("E1").MemberType, MemberTypes.Event, "Instance");
            Assert.AreEqual(typeof(C13).GetEvent("E2").MemberType, MemberTypes.Event, "Static");
        }

        [Test]
        public void DeclaringTypeIsCorrectForEvent()
        {
            Assert.AreEqual(typeof(C13).GetEvent("E1").DeclaringType, typeof(C13), "Instance");
            Assert.AreEqual(typeof(C13).GetEvent("E2").DeclaringType, typeof(C13), "Static");
        }

        [Test]
        public void NameIsCorrectForEvent()
        {
            Assert.AreEqual(typeof(C13).GetEvent("E1").Name, "E1", "Instance");
            Assert.AreEqual(typeof(C13).GetEvent("E2").Name, "E2", "Static");
        }

        [Test]
        public void IsStaticIsCorrectForEvent()
        {
            Assert.AreEqual(typeof(C13).GetEvent("E1").IsStatic, false, "Instance");
            Assert.AreEqual(typeof(C13).GetEvent("E2").IsStatic, true, "Static");
        }

        [Test]
        public void AddEventHandlerMethodWorksForInstanceEvent()
        {
            int i = 0;
            Action handler = () => i++;
            var obj = new C13();
            var e = typeof(C13).GetEvent("E1");
            e.AddEventHandler(obj, handler);
            obj.RaiseE1();
            Assert.AreEqual(i, 1, "Event should have been raised");
        }

        [Test]
        public void AddEventHandlerMethodWorksForInstanceEventWithInlineCodeAddMethod()
        {
            int i = 0;
            Action handler = () => i++;
            var obj = new C13();
            var e = typeof(C13).GetEvent("E3");
            e.AddEventHandler(obj, handler);
            Assert.True(ReferenceEquals(obj.addedE3Handler, handler), "Event handler should have been added");
        }

        [Test]
        public void AddEventHandlerMethodWorksForStaticEvent()
        {
            int i = 0;
            Action handler = () => i++;
            var e = typeof(C13).GetEvent("E2");
            e.AddEventHandler(null, handler);
            C13.RaiseE2();
            Assert.AreEqual(i, 1, "Event should have been raised");
        }

        [Test]
        public void AddEventHandlerMethodWorksForStaticEventWithInlineCodeAddMethod()
        {
            int i = 0;
            Action handler = () => i++;
            var e = typeof(C13).GetEvent("E4");
            e.AddEventHandler(null, handler);
            Assert.True(ReferenceEquals(C13.addedE4Handler, handler), "Event handler should have been added");
        }

        [Test]
        public void RemoveEventHandlerMethodWorksForInstanceEvent()
        {
            int i = 0;
            Action handler = () => i++;
            var obj = new C13();
            obj.E1 += handler;
            obj.RaiseE1();

            typeof(C13).GetEvent("E1").RemoveEventHandler(obj, handler);
            obj.RaiseE1();

            Assert.AreEqual(i, 1, "Event handler should have been removed");
        }

        [Test]
        public void RemoveEventHandlerMethodWorksForInstanceEventWithInlineCodeRemoveMethod()
        {
            int i = 0;
            Action handler = () => i++;
            var obj = new C13();

            typeof(C13).GetEvent("E3").RemoveEventHandler(obj, handler);

            Assert.True(ReferenceEquals(obj.removedE3Handler, handler), "Event handler should have been removed");
        }

        [Test]
        public void RemoveEventHandlerMethodWorksForStaticEvent()
        {
            int i = 0;
            Action handler = () => i++;
            C13.E2 += handler;
            C13.RaiseE2();

            typeof(C13).GetEvent("E2").RemoveEventHandler(null, handler);
            C13.RaiseE2();

            Assert.AreEqual(i, 1, "Event handler should have been removed");
        }

        [Test]
        public void RemoveEventHandlerMethodWorksForStaticEventWithInlineCodeRemoveMethod()
        {
            int i = 0;
            Action handler = () => i++;

            typeof(C13).GetEvent("E4").RemoveEventHandler(null, handler);

            Assert.True(ReferenceEquals(C13.removedE4Handler, handler), "Event handler should have been removed");
        }

        [Test]
        public void PropertiesForAddMethodAreCorrect()
        {
            var m1 = typeof(C13).GetEvent("E1").AddMethod;
            var m2 = typeof(C13).GetEvent("E2").AddMethod;

            Assert.AreEqual(m1.MemberType, MemberTypes.Method, "m1.MemberType");
            Assert.AreEqual(m2.MemberType, MemberTypes.Method, "m2.MemberType");
            Assert.AreEqual(m1.Name, "add_E1", "m1.Name");
            Assert.AreEqual(m2.Name, "add_E2", "m2.Name");
            Assert.AreEqual(m1.DeclaringType, typeof(C13), "m1.DeclaringType");
            Assert.AreEqual(m2.DeclaringType, typeof(C13), "m2.DeclaringType");
            Assert.False(m1.IsStatic, "m1.IsStatic");
            Assert.True(m2.IsStatic, "m2.IsStatic");
            Assert.AreEqual(m1.ParameterTypes, new[] { typeof(Delegate) }, "m1.ParameterTypes");
            Assert.AreEqual(m2.ParameterTypes, new[] { typeof(Delegate) }, "m2.ParameterTypes");
            Assert.False(m1.IsConstructor, "m1.IsConstructor");
            Assert.False(m2.IsConstructor, "m2.IsConstructor");
            Assert.AreEqual(m1.ReturnType, typeof(void), "m1.ReturnType");
            Assert.AreEqual(m2.ReturnType, typeof(void), "m2.ReturnType");
            Assert.AreEqual(m1.TypeParameterCount, 0, "m1.TypeParameterCount");
            Assert.AreEqual(m2.TypeParameterCount, 0, "m2.TypeParameterCount");
            Assert.AreEqual(m1.IsGenericMethodDefinition, false, "m1.IsGenericMethodDefinition");
            Assert.AreEqual(m2.IsGenericMethodDefinition, false, "m2.IsGenericMethodDefinition");

            int i1 = 0, i2 = 0;
            var obj = new C13();
            Action handler1 = () => i1++, handler2 = () => i2++;
            m1.Invoke(obj, handler1);
            obj.RaiseE1();
            Assert.AreEqual(i1, 1, "m1.Invoke");

            m2.Invoke(null, handler2);
            C13.RaiseE2();
            Assert.AreEqual(i2, 1, "m2.Invoke");
        }

        [Test]
        public void PropertiesForRemoveMethodAreCorrect()
        {
            var m1 = typeof(C13).GetEvent("E1").RemoveMethod;
            var m2 = typeof(C13).GetEvent("E2").RemoveMethod;

            Assert.AreEqual(m1.MemberType, MemberTypes.Method, "m1.MemberType");
            Assert.AreEqual(m2.MemberType, MemberTypes.Method, "m2.MemberType");
            Assert.AreEqual(m1.Name, "remove_E1", "m1.Name");
            Assert.AreEqual(m2.Name, "remove_E2", "m2.Name");
            Assert.AreEqual(m1.DeclaringType, typeof(C13), "m1.DeclaringType");
            Assert.AreEqual(m2.DeclaringType, typeof(C13), "m2.DeclaringType");
            Assert.False(m1.IsStatic, "m1.IsStatic");
            Assert.True(m2.IsStatic, "m2.IsStatic");
            Assert.AreEqual(m1.ParameterTypes, new[] { typeof(Delegate) }, "m1.ParameterTypes");
            Assert.AreEqual(m2.ParameterTypes, new[] { typeof(Delegate) }, "m2.ParameterTypes");
            Assert.False(m1.IsConstructor, "m1.IsConstructor");
            Assert.False(m2.IsConstructor, "m2.IsConstructor");
            Assert.AreEqual(m1.ReturnType, typeof(void), "m1.ReturnType");
            Assert.AreEqual(m2.ReturnType, typeof(void), "m2.ReturnType");
            Assert.AreEqual(m1.TypeParameterCount, 0, "m1.TypeParameterCount");
            Assert.AreEqual(m2.TypeParameterCount, 0, "m2.TypeParameterCount");
            Assert.AreEqual(m1.IsGenericMethodDefinition, false, "m1.IsGenericMethodDefinition");
            Assert.AreEqual(m2.IsGenericMethodDefinition, false, "m2.IsGenericMethodDefinition");

            int i1 = 0, i2 = 0;
            var obj = new C13();
            Action handler1 = () => i1++, handler2 = () => i2++;
            obj.E1 += handler1;
            m1.Invoke(obj, handler1);
            obj.RaiseE1();
            Assert.AreEqual(i1, 0, "m1.Invoke");

            C13.E2 += handler2;
            m2.Invoke(null, handler2);
            C13.RaiseE2();
            Assert.AreEqual(i2, 0, "m2.Invoke");
        }

        [Test]
        public void MemberTypeIsPropertyForProperty()
        {
            Assert.AreEqual(typeof(C14).GetProperty("P1").MemberType, MemberTypes.Property, "P1");
            Assert.AreEqual(typeof(C14).GetProperty("P2").MemberType, MemberTypes.Property, "P2");
            Assert.AreEqual(typeof(C14).GetProperty("P3").MemberType, MemberTypes.Property, "P3");
            Assert.AreEqual(typeof(C14).GetProperty("P4").MemberType, MemberTypes.Property, "P4");
        }

        [Test]
        public void ScriptFieldNameIsCorrectForPropertiesImplementedAsFieldAndNullForOtherProperties()
        {
            Assert.True(typeof(C14).GetProperty("P1").ScriptFieldName != null, "P1");
            Assert.AreEqual(typeof(C14).GetProperty("P2").ScriptFieldName, "P2", "P2");
        }

        [Test]
        public void MemberTypeIsPropertyForIndexer()
        {
            Assert.AreEqual(typeof(C15).GetProperty("Item").MemberType, MemberTypes.Property);
            Assert.AreEqual(typeof(C24).GetProperty("Item").MemberType, MemberTypes.Property);
        }

        [Test]
        public void DeclaringTypeIsCorrectForProperty()
        {
            Assert.AreEqual(typeof(C14).GetProperty("P1").DeclaringType, typeof(C14), "P1");
            Assert.AreEqual(typeof(C14).GetProperty("P2").DeclaringType, typeof(C14), "P2");
            Assert.AreEqual(typeof(C14).GetProperty("P3").DeclaringType, typeof(C14), "P3");
            Assert.AreEqual(typeof(C14).GetProperty("P4").DeclaringType, typeof(C14), "P4");
        }

        [Test]
        public void DeclaringTypeIsCorrectForIndexer()
        {
            Assert.AreEqual(typeof(C15).GetProperty("Item").DeclaringType, typeof(C15));
            Assert.AreEqual(typeof(C24).GetProperty("Item").DeclaringType, typeof(C24));
        }

        [Test]
        public void NameIsCorrectForProperty()
        {
            Assert.AreEqual(typeof(C14).GetProperty("P1").Name, "P1");
            Assert.AreEqual(typeof(C14).GetProperty("P2").Name, "P2");
            Assert.AreEqual(typeof(C14).GetProperty("P3").Name, "P3");
            Assert.AreEqual(typeof(C14).GetProperty("P4").Name, "P4");
        }

        [Test]
        public void NameIsCorrectForIndexer()
        {
            Assert.AreEqual(typeof(C15).GetProperty("Item").Name, "Item");
            Assert.AreEqual(typeof(C24).GetProperty("Item").Name, "Item");
        }

        [Test]
        public void IsStaticIsCorrectForProperty()
        {
            Assert.AreEqual(typeof(C14).GetProperty("P1").IsStatic, false, "P1");
            Assert.AreEqual(typeof(C14).GetProperty("P2").IsStatic, false, "P2");
            Assert.AreEqual(typeof(C14).GetProperty("P3").IsStatic, true, "P3");
            Assert.AreEqual(typeof(C14).GetProperty("P4").IsStatic, true, "P4");
        }

        [Test]
        public void IsStaticIsFalseForIndexer()
        {
            Assert.AreEqual(typeof(C15).GetProperty("Item").IsStatic, false);
            Assert.AreEqual(typeof(C24).GetProperty("Item").IsStatic, false);
        }

        [Test]
        public void PropertyTypeIsCorrectForProperty()
        {
            Assert.AreEqual(typeof(C14).GetProperty("P1").PropertyType, typeof(int), "P1");
            Assert.AreEqual(typeof(C14).GetProperty("P2").PropertyType, typeof(string), "P2");
            Assert.AreEqual(typeof(C14).GetProperty("P3").PropertyType, typeof(DateTime), "P3");
            Assert.AreEqual(typeof(C14).GetProperty("P4").PropertyType, typeof(double), "P4");
        }

        [Test]
        public void PropertyTypeIsCorrectForIndexer()
        {
            Assert.AreEqual(typeof(C15).GetProperty("Item").PropertyType, typeof(string));
            Assert.AreEqual(typeof(C24).GetProperty("Item").PropertyType, typeof(string));
        }

        [Test]
        public void IndexParameterTypesAreEmptyForProperty()
        {
            Assert.AreEqual(typeof(C14).GetProperty("P1").IndexParameterTypes, new Type[0], "P1");
            Assert.AreEqual(typeof(C14).GetProperty("P2").IndexParameterTypes, new Type[0], "P2");
            Assert.AreEqual(typeof(C14).GetProperty("P3").IndexParameterTypes, new Type[0], "P3");
            Assert.AreEqual(typeof(C14).GetProperty("P4").IndexParameterTypes, new Type[0], "P4");
        }

        [Test]
        public void IndexParameterTypesAreCorrectForIndexer()
        {
            Assert.AreEqual(typeof(C15).GetProperty("Item").IndexParameterTypes, new[] { typeof(int), typeof(string) });
            Assert.AreEqual(typeof(C24).GetProperty("Item").IndexParameterTypes, new[] { typeof(int), typeof(string) });
        }

        [Test]
        public void PropertiesForGetMethodAreCorrectForPropertyImplementedAsGetAndSetMethods()
        {
            var m1 = typeof(C14).GetProperty("P1").GetMethod;
            var m2 = typeof(C14).GetProperty("P3").GetMethod;
            var m3 = typeof(C14).GetProperty("P13").GetMethod;
            var m4 = typeof(C14).GetProperty("P14").GetMethod;

            Assert.AreEqual(m1.MemberType, MemberTypes.Method, "m1.MemberType");
            Assert.AreEqual(m2.MemberType, MemberTypes.Method, "m2.MemberType");
            Assert.AreEqual(m3.MemberType, MemberTypes.Method, "m3.MemberType");
            Assert.AreEqual(m1.Name, "get_P1", "m1.Name");
            Assert.AreEqual(m2.Name, "get_P3", "m2.Name");
            Assert.AreEqual(m3.Name, "get_P13", "m3.Name");
            Assert.AreEqual(m1.DeclaringType, typeof(C14), "m1.DeclaringType");
            Assert.AreEqual(m2.DeclaringType, typeof(C14), "m2.DeclaringType");
            Assert.AreEqual(m3.DeclaringType, typeof(C14), "m3.DeclaringType");
            Assert.False(m1.IsStatic, "m1.IsStatic");
            Assert.True(m2.IsStatic, "m2.IsStatic");
            Assert.False(m3.IsStatic, "m3.IsStatic");
            Assert.AreEqual(m1.ParameterTypes.Length, 0, "m1.ParameterTypes");
            Assert.AreEqual(m2.ParameterTypes.Length, 0, "m2.ParameterTypes");
            Assert.AreEqual(m3.ParameterTypes.Length, 0, "m3.ParameterTypes");
            Assert.False(m1.IsConstructor, "m1.IsConstructor");
            Assert.False(m2.IsConstructor, "m2.IsConstructor");
            Assert.False(m3.IsConstructor, "m3.IsConstructor");
            Assert.AreEqual(m1.ReturnType, typeof(int), "m1.ReturnType");
            Assert.AreEqual(m2.ReturnType, typeof(DateTime), "m2.ReturnType");
            Assert.AreEqual(m3.ReturnType, typeof(int), "m3.ReturnType");
            Assert.AreEqual(m1.TypeParameterCount, 0, "m1.TypeParameterCount");
            Assert.AreEqual(m2.TypeParameterCount, 0, "m2.TypeParameterCount");
            Assert.AreEqual(m3.TypeParameterCount, 0, "m3.TypeParameterCount");
            Assert.AreEqual(m1.IsGenericMethodDefinition, false, "m1.IsGenericMethodDefinition");
            Assert.AreEqual(m2.IsGenericMethodDefinition, false, "m2.IsGenericMethodDefinition");
            Assert.AreEqual(m3.IsGenericMethodDefinition, false, "m3.IsGenericMethodDefinition");

            var c = new C14() { P1 = 78 };
            object p1 = m1.Invoke(c);
            Assert.AreEqual(p1, 78, "m1.Invoke");

            C14.P3 = new DateTime(2012, 4, 2);
            object p2 = m2.Invoke(null);
            Assert.AreEqual(p2, new DateTime(2012, 4, 2), "m2.Invoke");

            c = new C14() { p13Field = 13 };
            object p3 = m3.Invoke(c);
            Assert.AreEqual(p3, 13, "m3.Invoke");

            C14.p14Field = 124;
            object p4 = m4.Invoke(null);
            Assert.AreEqual(p4, 124, "m4.Invoke");
        }

        [Test]
        public void PropertiesForSetMethodAreCorrectForPropertyImplementedAsGetAndSetMethods()
        {
            var m1 = typeof(C14).GetProperty("P1").SetMethod;
            var m2 = typeof(C14).GetProperty("P3").SetMethod;
            var m3 = typeof(C14).GetProperty("P13").SetMethod;
            var m4 = typeof(C14).GetProperty("P14").SetMethod;

            Assert.AreEqual(m1.MemberType, MemberTypes.Method, "m1.MemberType");
            Assert.AreEqual(m2.MemberType, MemberTypes.Method, "m2.MemberType");
            Assert.AreEqual(m3.MemberType, MemberTypes.Method, "m3.MemberType");
            Assert.AreEqual(m1.Name, "set_P1", "m1.Name");
            Assert.AreEqual(m2.Name, "set_P3", "m2.Name");
            Assert.AreEqual(m3.Name, "set_P13", "m2.Name");
            Assert.AreEqual(m1.DeclaringType, typeof(C14), "m1.DeclaringType");
            Assert.AreEqual(m2.DeclaringType, typeof(C14), "m2.DeclaringType");
            Assert.AreEqual(m3.DeclaringType, typeof(C14), "m3.DeclaringType");
            Assert.False(m1.IsStatic, "m1.IsStatic");
            Assert.True(m2.IsStatic, "m2.IsStatic");
            Assert.False(m3.IsStatic, "m3.IsStatic");
            Assert.AreEqual(m1.ParameterTypes, new[] { typeof(int) }, "m1.ParameterTypes");
            Assert.AreEqual(m2.ParameterTypes, new[] { typeof(DateTime) }, "m2.ParameterTypes");
            Assert.AreEqual(m3.ParameterTypes, new[] { typeof(int) }, "m3.ParameterTypes");
            Assert.False(m1.IsConstructor, "m1.IsConstructor");
            Assert.False(m2.IsConstructor, "m2.IsConstructor");
            Assert.False(m3.IsConstructor, "m3.IsConstructor");
            Assert.AreEqual(m1.ReturnType, typeof(void), "m1.ReturnType");
            Assert.AreEqual(m2.ReturnType, typeof(void), "m2.ReturnType");
            Assert.AreEqual(m3.ReturnType, typeof(void), "m3.ReturnType");
            Assert.AreEqual(m1.TypeParameterCount, 0, "m1.TypeParameterCount");
            Assert.AreEqual(m2.TypeParameterCount, 0, "m2.TypeParameterCount");
            Assert.AreEqual(m3.TypeParameterCount, 0, "m3.TypeParameterCount");
            Assert.AreEqual(m1.IsGenericMethodDefinition, false, "m1.IsGenericMethodDefinition");
            Assert.AreEqual(m2.IsGenericMethodDefinition, false, "m2.IsGenericMethodDefinition");
            Assert.AreEqual(m2.IsGenericMethodDefinition, false, "m3.IsGenericMethodDefinition");

            var c = new C14();
            m1.Invoke(c, 42);
            Assert.AreEqual(c.P1, 42, "m1.Invoke");

            C14.P3 = new DateTime(2010, 1, 1);
            m2.Invoke(null, new DateTime(2012, 2, 3));
            Assert.AreEqual(C14.P3, new DateTime(2012, 2, 3), "m2.Invoke");

            c = new C14();
            m3.Invoke(c, 422);
            Assert.AreEqual(c.p13Field, 422, "m3.Invoke");

            C14.p14Field = 11;
            m4.Invoke(null, 52);
            Assert.AreEqual(C14.p14Field, 52, "m4.Invoke");
        }

        [Test]
        public void PropertiesForGetMethodAreCorrectForPropertyImplementedAsFields()
        {
            var m1 = typeof(C14).GetProperty("P2").GetMethod;
            var m2 = typeof(C14).GetProperty("P4").GetMethod;

            Assert.AreEqual(m1.MemberType, MemberTypes.Method, "m1.MemberType");
            Assert.AreEqual(m2.MemberType, MemberTypes.Method, "m2.MemberType");
            Assert.AreEqual(m1.Name, "get_P2", "m1.Name");
            Assert.AreEqual(m2.Name, "get_P4", "m2.Name");
            Assert.AreEqual(m1.DeclaringType, typeof(C14), "m1.DeclaringType");
            Assert.AreEqual(m2.DeclaringType, typeof(C14), "m2.DeclaringType");
            Assert.False(m1.IsStatic, "m1.IsStatic");
            Assert.True(m2.IsStatic, "m2.IsStatic");
            Assert.AreEqual(m1.ParameterTypes.Length, 0, "m1.ParameterTypes");
            Assert.AreEqual(m2.ParameterTypes.Length, 0, "m2.ParameterTypes");
            Assert.False(m1.IsConstructor, "m1.IsConstructor");
            Assert.False(m2.IsConstructor, "m2.IsConstructor");
            Assert.AreEqual(m1.ReturnType, typeof(string), "m1.ReturnType");
            Assert.AreEqual(m2.ReturnType, typeof(double), "m2.ReturnType");
            Assert.AreEqual(m1.TypeParameterCount, 0, "m1.TypeParameterCount");
            Assert.AreEqual(m2.TypeParameterCount, 0, "m2.TypeParameterCount");
            Assert.AreEqual(m1.IsGenericMethodDefinition, false, "m1.IsGenericMethodDefinition");
            Assert.AreEqual(m2.IsGenericMethodDefinition, false, "m2.IsGenericMethodDefinition");

            var c = new C14() { P2 = "Hello, world" };
            object p1 = m1.Invoke(c);
            Assert.AreEqual(p1, "Hello, world", "m1.Invoke");

            C14.P4 = 3.5;
            object p2 = m2.Invoke(null);
            Assert.AreEqual(p2, 3.5, "m2.Invoke");
        }

        [Test]
        public void PropertiesForSetMethodAreCorrectForPropertyImplementedAsFields()
        {
            var m1 = typeof(C14).GetProperty("P2").SetMethod;
            var m2 = typeof(C14).GetProperty("P4").SetMethod;

            Assert.AreEqual(m1.MemberType, MemberTypes.Method, "m1.MemberType");
            Assert.AreEqual(m2.MemberType, MemberTypes.Method, "m2.MemberType");
            Assert.AreEqual(m1.Name, "set_P2", "m1.Name");
            Assert.AreEqual(m2.Name, "set_P4", "m2.Name");
            Assert.AreEqual(m1.DeclaringType, typeof(C14), "m1.DeclaringType");
            Assert.AreEqual(m2.DeclaringType, typeof(C14), "m2.DeclaringType");
            Assert.False(m1.IsStatic, "m1.IsStatic");
            Assert.True(m2.IsStatic, "m2.IsStatic");
            Assert.AreEqual(m1.ParameterTypes, new[] { typeof(string) }, "m1.ParameterTypes");
            Assert.AreEqual(m2.ParameterTypes, new[] { typeof(double) }, "m2.ParameterTypes");
            Assert.False(m1.IsConstructor, "m1.IsConstructor");
            Assert.False(m2.IsConstructor, "m2.IsConstructor");
            Assert.AreEqual(m1.ReturnType, typeof(void), "m1.ReturnType");
            Assert.AreEqual(m2.ReturnType, typeof(void), "m2.ReturnType");
            Assert.AreEqual(m1.TypeParameterCount, 0, "m1.TypeParameterCount");
            Assert.AreEqual(m2.TypeParameterCount, 0, "m2.TypeParameterCount");
            Assert.AreEqual(m1.IsGenericMethodDefinition, false, "m1.IsGenericMethodDefinition");
            Assert.AreEqual(m2.IsGenericMethodDefinition, false, "m2.IsGenericMethodDefinition");

            var c = new C14();
            m1.Invoke(c, "Something");
            Assert.AreEqual(c.P2, "Something", "m1.Invoke");

            C14.P4 = 7.5;
            m2.Invoke(null, 2.5);
            Assert.AreEqual(C14.P4, 2.5, "m2.Invoke");
        }

        [Test]
        public void PropertiesForGetMethodAreCorrectForIndexer()
        {
            var m1 = typeof(C15).GetProperty("Item").GetMethod;
            var m2 = typeof(C24).GetProperty("Item").GetMethod;

            Assert.AreEqual(m1.MemberType, MemberTypes.Method, "m1.MemberType");
            Assert.AreEqual(m2.MemberType, MemberTypes.Method, "m2.MemberType");
            Assert.AreEqual(m1.Name, "get_Item", "m1.Name");
            Assert.AreEqual(m2.Name, "get_Item", "m2.Name");
            Assert.AreEqual(m1.DeclaringType, typeof(C15), "m1.DeclaringType");
            Assert.AreEqual(m2.DeclaringType, typeof(C24), "m2.DeclaringType");
            Assert.False(m1.IsStatic, "m1.IsStatic");
            Assert.False(m2.IsStatic, "m2.IsStatic");
            Assert.AreEqual(m1.ParameterTypes, new[] { typeof(int), typeof(string) }, "m1.ParameterTypes");
            Assert.AreEqual(m2.ParameterTypes, new[] { typeof(int), typeof(string) }, "m2.ParameterTypes");
            Assert.False(m1.IsConstructor, "m1.IsConstructor");
            Assert.False(m2.IsConstructor, "m2.IsConstructor");
            Assert.AreEqual(m1.ReturnType, typeof(string), "m1.ReturnType");
            Assert.AreEqual(m2.ReturnType, typeof(string), "m2.ReturnType");
            Assert.AreEqual(m1.TypeParameterCount, 0, "m1.TypeParameterCount");
            Assert.AreEqual(m2.TypeParameterCount, 0, "m2.TypeParameterCount");
            Assert.AreEqual(m1.IsGenericMethodDefinition, false, "m1.IsGenericMethodDefinition");
            Assert.AreEqual(m2.IsGenericMethodDefinition, false, "m2.IsGenericMethodDefinition");

            var c1 = new C15() { v = "X" };
            object v1 = m1.Invoke(c1, 42, "Hello");
            Assert.AreEqual(v1, "X 42 Hello", "m1.Invoke");

            var c2 = new C24() { v = "Y" };
            object v2 = m2.Invoke(c2, 24, "World");
            Assert.AreEqual(v2, "Y 24 World", "m2.Invoke");
        }

        [Test]
        public void PropertiesForSetMethodAreCorrectForIndexer()
        {
            var m1 = typeof(C15).GetProperty("Item").SetMethod;
            var m2 = typeof(C24).GetProperty("Item").SetMethod;

            Assert.AreEqual(m1.MemberType, MemberTypes.Method, "m1.MemberType");
            Assert.AreEqual(m1.MemberType, MemberTypes.Method, "m2.MemberType");
            Assert.AreEqual(m1.Name, "set_Item", "m1.Name");
            Assert.AreEqual(m2.Name, "set_Item", "m2.Name");
            Assert.AreEqual(m1.DeclaringType, typeof(C15), "m1.DeclaringType");
            Assert.AreEqual(m2.DeclaringType, typeof(C24), "m2.DeclaringType");
            Assert.False(m1.IsStatic, "m1.IsStatic");
            Assert.False(m2.IsStatic, "m2.IsStatic");
            Assert.AreEqual(m1.ParameterTypes, new[] { typeof(int), typeof(string), typeof(string) }, "m1.ParameterTypes");
            Assert.AreEqual(m2.ParameterTypes, new[] { typeof(int), typeof(string), typeof(string) }, "m2.ParameterTypes");
            Assert.False(m1.IsConstructor, "m1.IsConstructor");
            Assert.False(m2.IsConstructor, "m2.IsConstructor");
            Assert.AreEqual(m1.ReturnType, typeof(void), "m1.ReturnType");
            Assert.AreEqual(m2.ReturnType, typeof(void), "m2.ReturnType");
            Assert.AreEqual(m1.TypeParameterCount, 0, "m1.TypeParameterCount");
            Assert.AreEqual(m2.TypeParameterCount, 0, "m2.TypeParameterCount");
            Assert.AreEqual(m1.IsGenericMethodDefinition, false, "m1.IsGenericMethodDefinition");
            Assert.AreEqual(m2.IsGenericMethodDefinition, false, "m2.IsGenericMethodDefinition");

            var c1 = new C15();
            m1.Invoke(c1, 42, "Hello", "The_value");

            Assert.AreEqual(c1.x, 42, "m1.Invoke (x)");
            Assert.AreEqual(c1.s, "Hello", "m1.Invoke (s)");
            Assert.AreEqual(c1.v, "The_value", "m1.Invoke (value)");

            var c2 = new C24();
            m2.Invoke(c2, 234, "World", "Other_value");

            Assert.AreEqual(c2.x, 234, "m2.Invoke (x)");
            Assert.AreEqual(c2.s, "World", "m2.Invoke (s)");
            Assert.AreEqual(c2.v, "Other_value", "m2.Invoke (value)");
        }

        [Test]
        public void CanReadAndWriteAndPropertiesWithOnlyOneAccessor()
        {
            Assert.AreEqual(typeof(C14).GetProperty("P1").CanRead, true, "P1.CanRead");
            Assert.AreEqual(typeof(C14).GetProperty("P1").CanWrite, true, "P1.CanWrite");
            Assert.AreEqual(typeof(C14).GetProperty("P2").CanRead, true, "P2.CanRead");
            Assert.AreEqual(typeof(C14).GetProperty("P2").CanWrite, true, "P2.CanWrite");
            Assert.AreEqual(typeof(C14).GetProperty("P3").CanRead, true, "P3.CanRead");
            Assert.AreEqual(typeof(C14).GetProperty("P3").CanWrite, true, "P3.CanWrite");
            Assert.AreEqual(typeof(C14).GetProperty("P4").CanRead, true, "P4.CanRead");
            Assert.AreEqual(typeof(C14).GetProperty("P4").CanWrite, true, "P4.CanWrite");
            Assert.AreEqual(typeof(C14).GetProperty("P5").CanRead, true, "P5.CanRead");
            Assert.AreEqual(typeof(C14).GetProperty("P5").CanWrite, false, "P5.CanWrite");
            Assert.AreEqual(typeof(C14).GetProperty("P6").CanRead, true, "P6.CanRead");
            Assert.AreEqual(typeof(C14).GetProperty("P6").CanWrite, true, "P6.CanWrite");
            Assert.AreEqual(typeof(C14).GetProperty("P7").CanRead, true, "P7.CanRead");
            Assert.AreEqual(typeof(C14).GetProperty("P7").CanWrite, false, "P7.CanWrite");
            Assert.AreEqual(typeof(C14).GetProperty("P8").CanRead, true, "P8.CanRead");
            Assert.AreEqual(typeof(C14).GetProperty("P8").CanWrite, true, "P8.CanWrite");
            Assert.AreEqual(typeof(C14).GetProperty("P9").CanRead, false, "P9.CanRead");
            Assert.AreEqual(typeof(C14).GetProperty("P9").CanWrite, true, "P9.CanWrite");
            Assert.AreEqual(typeof(C14).GetProperty("P10").CanRead, true, "P10.CanRead");
            Assert.AreEqual(typeof(C14).GetProperty("P10").CanWrite, true, "P10.CanWrite");
            Assert.AreEqual(typeof(C14).GetProperty("P11").CanRead, false, "P11.CanRead");
            Assert.AreEqual(typeof(C14).GetProperty("P11").CanWrite, true, "P11.CanWrite");
            Assert.AreEqual(typeof(C14).GetProperty("P12").CanRead, true, "P12.CanRead");
            Assert.AreEqual(typeof(C14).GetProperty("P12").CanWrite, true, "P12.CanWrite");

            Assert.True(typeof(C14).GetProperty("P1").GetMethod != null, "P1.GetMethod");
            Assert.True(typeof(C14).GetProperty("P1").SetMethod != null, "P1.SetMethod");
            Assert.True(typeof(C14).GetProperty("P2").GetMethod != null, "P2.GetMethod");
            Assert.True(typeof(C14).GetProperty("P2").SetMethod != null, "P2.SetMethod");
            Assert.True(typeof(C14).GetProperty("P3").GetMethod != null, "P3.GetMethod");
            Assert.True(typeof(C14).GetProperty("P3").SetMethod != null, "P3.SetMethod");
            Assert.True(typeof(C14).GetProperty("P4").GetMethod != null, "P4.GetMethod");
            Assert.True(typeof(C14).GetProperty("P4").SetMethod != null, "P4.SetMethod");
            Assert.True(typeof(C14).GetProperty("P5").GetMethod != null, "P5.GetMethod");
            Assert.False(typeof(C14).GetProperty("P5").SetMethod != null, "P5.SetMethod");
            Assert.True(typeof(C14).GetProperty("P6").GetMethod != null, "P6.GetMethod");
            Assert.True(typeof(C14).GetProperty("P6").SetMethod != null, "P6.SetMethod");
            Assert.True(typeof(C14).GetProperty("P7").GetMethod != null, "P7.GetMethod");
            Assert.False(typeof(C14).GetProperty("P7").SetMethod != null, "P7.SetMethod");
            Assert.True(typeof(C14).GetProperty("P8").GetMethod != null, "P8.GetMethod");
            Assert.True(typeof(C14).GetProperty("P8").SetMethod != null, "P8.SetMethod");
            Assert.False(typeof(C14).GetProperty("P9").GetMethod != null, "P9.GetMethod");
            Assert.True(typeof(C14).GetProperty("P9").SetMethod != null, "P9.SetMethod");
            Assert.True(typeof(C14).GetProperty("P10").GetMethod != null, "P10.GetMethod");
            Assert.True(typeof(C14).GetProperty("P10").SetMethod != null, "P10.SetMethod");
            Assert.False(typeof(C14).GetProperty("P11").GetMethod != null, "P11.GetMethod");
            Assert.True(typeof(C14).GetProperty("P11").SetMethod != null, "P11.SetMethod");
            Assert.True(typeof(C14).GetProperty("P12").GetMethod != null, "P12.GetMethod");
            Assert.True(typeof(C14).GetProperty("P12").SetMethod != null, "P12.SetMethod");
        }

        [Test]
        public void CanReadAndWriteAndIndexersWithOnlyOneAccessor()
        {
            Assert.AreEqual(typeof(C15).GetProperty("Item").CanRead, true, "C15.CanRead");
            Assert.AreEqual(typeof(C15).GetProperty("Item").CanWrite, true, "C15.CanWrite");
            Assert.AreEqual(typeof(C16).GetProperty("Item").CanRead, true, "C16.CanRead");
            Assert.AreEqual(typeof(C16).GetProperty("Item").CanWrite, false, "C16.CanWrite");
            Assert.AreEqual(typeof(C17).GetProperty("Item").CanRead, false, "C17.CanRead");
            Assert.AreEqual(typeof(C17).GetProperty("Item").CanWrite, true, "C17.CanWrite");

            Assert.True(typeof(C15).GetProperty("Item").GetMethod != null, "C15.GetMethod");
            Assert.True(typeof(C15).GetProperty("Item").SetMethod != null, "C15.SetMethod");
            Assert.True(typeof(C16).GetProperty("Item").GetMethod != null, "C16.GetMethod");
            Assert.False(typeof(C16).GetProperty("Item").SetMethod != null, "C16.SetMethod");
            Assert.False(typeof(C17).GetProperty("Item").GetMethod != null, "C17.GetMethod");
            Assert.True(typeof(C17).GetProperty("Item").SetMethod != null, "C17.SetMethod");
        }

        [Test]
        public void PropertyInfoGetValueWorks()
        {
            var p1 = typeof(C14).GetProperty("P1");
            var p2 = typeof(C14).GetProperty("P2");
            var p3 = typeof(C14).GetProperty("P3");
            var p4 = typeof(C14).GetProperty("P4");
            var i = typeof(C15).GetProperty("Item");

            var c14 = new C14 { P1 = 42, P2 = "Hello, world!" };
            C14.P3 = new DateTime(2013, 3, 5);
            C14.P4 = 7.5;
            Assert.AreEqual(p1.GetValue(c14), 42, "P1.GetValue");
            Assert.AreEqual(p2.GetValue(c14), "Hello, world!", "P2.GetValue");
            Assert.AreEqual(p3.GetValue(null), new DateTime(2013, 3, 5), "P3.GetValue");
            Assert.AreEqual(p4.GetValue(null), 7.5, "P4.GetValue");

            var c15 = new C15() { v = "X" };
            Assert.AreEqual(i.GetValue(c15, new object[] { 42, "Hello" }), "X 42 Hello", "Item.GetValue");
        }

        [Test]
        public void PropertyInfoSetValueWorks()
        {
            var p1 = typeof(C14).GetProperty("P1");
            var p2 = typeof(C14).GetProperty("P2");
            var p3 = typeof(C14).GetProperty("P3");
            var p4 = typeof(C14).GetProperty("P4");
            var i = typeof(C15).GetProperty("Item");

            var c14 = new C14();
            p1.SetValue(c14, 42);
            p2.SetValue(c14, "Hello, world!");
            p3.SetValue(null, new DateTime(2013, 3, 5));
            p4.SetValue(null, 7.5);

            Assert.AreEqual(c14.P1, 42, "P1.SetValue");
            Assert.AreEqual(c14.P2, "Hello, world!", "P2.SetValue");
            Assert.AreEqual(C14.P3, new DateTime(2013, 3, 5), "P3.SetValue");
            Assert.AreEqual(C14.P4, 7.5, "P4.SetValue");

            var c15 = new C15() { v = "X" };
            i.SetValue(c15, "The_value", new object[] { 378, "X" });
            Assert.AreEqual(c15.s, "X", "Item.SetValue.s");
            Assert.AreEqual(c15.x, 378, "Item.SetValue.x");
            Assert.AreEqual(c15.v, "The_value", "Item.SetValue.value");
        }

        private void TestMemberAttribute(MemberInfo member, int expectedA1)
        {
            var all = member.GetCustomAttributes();
            Assert.AreEqual(all.Length, 2);
            Assert.True(all[0] is A1Attribute || all[1] is A1Attribute);
            Assert.True(all[0] is A3Attribute || all[1] is A3Attribute);
            Assert.AreEqual(((A1Attribute)(all[0] is A1Attribute ? all[0] : all[1])).X, expectedA1);

            all = member.GetCustomAttributes(true);
            Assert.AreEqual(all.Length, 2);
            Assert.True(all[0] is A1Attribute || all[1] is A1Attribute);
            Assert.True(all[0] is A3Attribute || all[1] is A3Attribute);
            Assert.AreEqual(((A1Attribute)(all[0] is A1Attribute ? all[0] : all[1])).X, expectedA1);

            all = member.GetCustomAttributes(typeof(A1Attribute));
            Assert.AreEqual(all.Length, 1);
            Assert.True(all[0] is A1Attribute);
            Assert.AreEqual(((A1Attribute)all[0]).X, expectedA1);

            all = member.GetCustomAttributes(typeof(A1Attribute), false);
            Assert.AreEqual(all.Length, 1);
            Assert.True(all[0] is A1Attribute);
            Assert.AreEqual(((A1Attribute)all[0]).X, expectedA1);

            Assert.AreEqual(member.GetCustomAttributes(typeof(A4Attribute)).Length, 0);
            Assert.AreEqual(member.GetCustomAttributes(typeof(A4Attribute), false).Length, 0);
        }

        [Test]
        public void MemberAttributesWork()
        {
            TestMemberAttribute(typeof(C18).GetConstructor(new Type[0]), 1);
            TestMemberAttribute(typeof(C18).GetMethod("M"), 2);
            TestMemberAttribute(typeof(C18).GetField("F"), 3);
            TestMemberAttribute(typeof(C18).GetProperty("P"), 4);
            TestMemberAttribute(typeof(C18).GetProperty("P").GetMethod, 5);
            TestMemberAttribute(typeof(C18).GetProperty("P").SetMethod, 6);
            TestMemberAttribute(typeof(C18).GetEvent("E"), 7);
            TestMemberAttribute(typeof(C18).GetEvent("E").AddMethod, 8);
            TestMemberAttribute(typeof(C18).GetEvent("E").RemoveMethod, 9);

            Assert.AreEqual(typeof(C2).GetMethod("M1").GetCustomAttributes().Length, 0);
        }

        [Test]
        public void MembersReflectableAttributeWorks()
        {
            var c25 = typeof(C25);
            var c26 = typeof(C26);
            var c27 = typeof(C27);
            var c28 = typeof(C28);

            var flags = BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static | BindingFlags.Instance;
            Assert.Null(c25.GetField("A1", flags), "C25.A1");
            Assert.NotNull(c25.GetField("B1", flags), "C25.B1");
            Assert.NotNull(c25.GetField("C1", flags), "C25.C1");
            Assert.Null(c25.GetField("D1", flags), "C25.D1");
            Assert.Null(c25.GetField("A2", flags), "C25.A2");
            Assert.NotNull(c25.GetField("B2", flags), "C25.B2");
            Assert.NotNull(c25.GetField("C2", flags), "C25.C2");
            Assert.Null(c25.GetField("D2", flags), "C25.D2");
            Assert.Null(c25.GetField("A3", flags), "C25.A3");
            Assert.NotNull(c25.GetField("B3", flags), "C25.B3");
            Assert.NotNull(c25.GetField("C3", flags), "C25.C3");
            Assert.Null(c25.GetField("D3", flags), "C25.D3");
            Assert.Null(c25.GetField("A4", flags), "C25.A4");
            Assert.NotNull(c25.GetField("B4", flags), "C25.B4");
            Assert.NotNull(c25.GetField("C4", flags), "C25.C4");
            Assert.Null(c25.GetField("D4", flags), "C25.D4");
            Assert.Null(c25.GetField("A5", flags), "C25.A5");
            Assert.NotNull(c25.GetField("B5", flags), "C25.B5");
            Assert.NotNull(c25.GetField("C5", flags), "C25.C5");
            Assert.Null(c25.GetField("D5", flags), "C25.D5");

            Assert.NotNull(c26.GetField("A1", flags), "C26.A1");
            Assert.NotNull(c26.GetField("B1", flags), "C26.B1");
            Assert.NotNull(c26.GetField("C1", flags), "C26.C1");
            Assert.Null(c26.GetField("D1", flags), "C26.D1");
            Assert.Null(c26.GetField("A2", flags), "C26.A2");
            Assert.NotNull(c26.GetField("B2", flags), "C26.B2");
            Assert.NotNull(c26.GetField("C2", flags), "C26.C2");
            Assert.Null(c26.GetField("D2", flags), "C26.D2");
            Assert.NotNull(c26.GetField("A3", flags), "C26.A3");
            Assert.NotNull(c26.GetField("B3", flags), "C26.B3");
            Assert.NotNull(c26.GetField("C3", flags), "C26.C3");
            Assert.Null(c26.GetField("D3", flags), "C26.D3");
            Assert.NotNull(c26.GetField("A4", flags), "C26.A4");
            Assert.NotNull(c26.GetField("B4", flags), "C26.B4");
            Assert.NotNull(c26.GetField("C4", flags), "C26.C4");
            Assert.Null(c26.GetField("D4", flags), "C26.D4");
            Assert.Null(c26.GetField("A5", flags), "C26.A5");
            Assert.NotNull(c26.GetField("B5", flags), "C26.B5");
            Assert.NotNull(c26.GetField("C5", flags), "C26.C5");
            Assert.Null(c26.GetField("D5", flags), "C26.D5");

            Assert.NotNull(c27.GetField("A1", flags), "C27.A1");
            Assert.NotNull(c27.GetField("B1", flags), "C27.B1");
            Assert.NotNull(c27.GetField("C1", flags), "C27.C1");
            Assert.Null(c27.GetField("D1", flags), "C27.D1");
            Assert.NotNull(c27.GetField("A2", flags), "C27.A2");
            Assert.NotNull(c27.GetField("B2", flags), "C27.B2");
            Assert.NotNull(c27.GetField("C2", flags), "C27.C2");
            Assert.Null(c27.GetField("D2", flags), "C27.D2");
            Assert.NotNull(c27.GetField("A3", flags), "C27.A3");
            Assert.NotNull(c27.GetField("B3", flags), "C27.B3");
            Assert.NotNull(c27.GetField("C3", flags), "C27.C3");
            Assert.Null(c27.GetField("D3", flags), "C27.D3");
            Assert.NotNull(c27.GetField("A4", flags), "C27.A4");
            Assert.NotNull(c27.GetField("B4", flags), "C27.B4");
            Assert.NotNull(c27.GetField("C4", flags), "C27.C4");
            Assert.Null(c27.GetField("D4", flags), "C27.D4");
            Assert.Null(c27.GetField("A5", flags), "C27.A5");
            Assert.NotNull(c27.GetField("B5", flags), "C27.B5");
            Assert.NotNull(c27.GetField("C5", flags), "C27.C5");
            Assert.Null(c27.GetField("D5", flags), "C27.D5");

            Assert.NotNull(c28.GetField("A1", flags), "C28.A1");
            Assert.NotNull(c28.GetField("B1", flags), "C28.B1");
            Assert.NotNull(c28.GetField("C1", flags), "C28.C1");
            Assert.Null(c28.GetField("D1", flags), "C28.D1");
            Assert.NotNull(c28.GetField("A2", flags), "C28.A2");
            Assert.NotNull(c28.GetField("B2", flags), "C28.B2");
            Assert.NotNull(c28.GetField("C2", flags), "C28.C2");
            Assert.Null(c28.GetField("D2", flags), "C28.D2");
            Assert.NotNull(c28.GetField("A3", flags), "C28.A3");
            Assert.NotNull(c28.GetField("B3", flags), "C28.B3");
            Assert.NotNull(c28.GetField("C3", flags), "C28.C3");
            Assert.Null(c28.GetField("D3", flags), "C28.D3");
            Assert.NotNull(c28.GetField("A4", flags), "C28.A4");
            Assert.NotNull(c28.GetField("B4", flags), "C28.B4");
            Assert.NotNull(c28.GetField("C4", flags), "C28.C4");
            Assert.Null(c28.GetField("D4", flags), "C28.D4");
            Assert.NotNull(c28.GetField("A5", flags), "C28.A5");
            Assert.NotNull(c28.GetField("B5", flags), "C28.B5");
            Assert.NotNull(c28.GetField("C5", flags), "C28.C5");
            Assert.Null(c28.GetField("D5", flags), "C28.D5");
        }
    }
}