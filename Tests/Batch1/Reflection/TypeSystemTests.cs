using Bridge.Test.NUnit;
using Bridge.Utils;
using System;
using System.Collections.Generic;
using Bridge;

[assembly: Reflectable("System.String;System.Int32")]

namespace Bridge.ClientTest.Reflection
{
    [Category(Constants.MODULE_REFLECTION)]
    [TestFixture(TestNameFormat = "Reflection - TypeSystem {0}")]
    [Reflectable]
    public class TypeSystemTests
    {
        public class ClassWithExpandParamsCtor
        {
            public object[] CtorArgs;

            [ExpandParams]
            public ClassWithExpandParamsCtor(params object[] args)
            {
                this.CtorArgs = args;
            }
        }

        [Reflectable]
        public abstract class CA1
        {
        }

        [Reflectable]
        public abstract class CA2 : CA1
        {
        }

        [Reflectable]
        public interface I1
        {
        }

        public interface I2 : I1
        {
        }

        public interface I3
        {
        }

        public interface I4 : I3
        {
        }

        [Reflectable]
        public class B : I2
        {
        }

        [Reflectable]
        public class C : B, I4
        {
        }

        [Reflectable]
        public interface IG<T>
        {
        }

        public class BX<T>
        {
        }

        [Reflectable]
        public class G<T1, T2> : BX<G<T1, C>>, IG<G<T2, string>>
        {
            public static string field;

            static G()
            {
                field = typeof(T1).FullName + " " + typeof(T2).FullName;
            }
        }

        public class G2<T1, T2> : BX<int>
        {
        }

        public class G3<T1, T2> : G2<T1, T2>
        {
        }

        public class G4<T1> : G2<T1, string>
        {
        }

        public class G5 : G4<int>
        {
        }

        [Reflectable]
        public sealed class CS1<T> : B
        {
        }

        [Reflectable]
        private sealed class CS2<T, K> : I1
        {
        }

        [Reflectable]
        internal sealed class CS3
        {
        }

        [Reflectable]
        private class L1
        {
            public int P
            {
                get; set;
            }

            public void M<T>(T a)
            {
            }

            [Reflectable]
            public class L2
            {
                public int P
                {
                    get; set;
                }

                public void M<T>(T a)
                {
                }
            }
        }

        [Reflectable]
        private class L31<T> : L30
        {
            public void M2<K>(K a)
            {
            }
        }

        [Reflectable]
        private class L30
        {
            public void M1()
            {
            }

            public int P1
            {
                get; set;
            }
        }

        [Reflectable]
        private class L32 : L31<int>
        {
            public new void M1()
            {
            }

            public void M4<K>(K a)
            {
            }

            public void M5<T>(T a)
            {
            }
        }

        [Reflectable]
        protected internal class ProtectedInternalClass
        {
        }

        [Reflectable]
        protected class ProtectedClass
        {
        }

        public enum E0
        {
            V3,
            V2,
            V1
        }

        [Reflectable]
        public enum E1
        {
            V3 = 3,
            V2 = 2,
            V1 = 1,
        }

        [Flags]
        public enum E2
        {
            B1 = 1,
            B2 = 2,
            B3 = 3
        }

        public enum E3 : long
        {
        }

        [External]
        [Name("System.Object")]
        public interface IImported
        {
        }

        public class BS
        {
            public int X;

            public BS(int x)
            {
                X = x;
            }
        }

        public class DS : BS
        {
            public int GetX()
            {
                return X;
            }

            public DS(int x) : base(x)
            {
            }
        }

        public class CS2
        {
            public int X;
        }

        public class DS2 : BS
        {
            public DS2() : base(0)
            {
            }
        }

        private string AssemblyName
        {
            get
            {
                return "Bridge.ClientTest";
            }
        }

        private string AssemblyWithVersion
        {
            get
            {
                //return AssemblyName + ", Version=" + AssemblyVersionMarker.GetVersion(AssemblyVersionMarker.VersionType.CurrentAssembly);
                return AssemblyName;
            }
        }

        [Test]
        public void FullNamePropertyReturnsTheNameWithTheNamespace()
        {
            Assert.AreEqual("Bridge.ClientTest.Reflection.TypeSystemTests", typeof(TypeSystemTests).FullName);
        }

        [Test]
        public void AssemblyQualifiedNameReturnsTheNameWithTheNamespaceAndAssemblyName()
        {
            Assert.AreEqual("Bridge.ClientTest.Reflection.TypeSystemTests, Bridge.ClientTest", typeof(TypeSystemTests).AssemblyQualifiedName);
            Assert.AreEqual("Bridge.ClientTest.Reflection.TypeSystemTests+BX`1, Bridge.ClientTest", typeof(BX<>).AssemblyQualifiedName);
            Assert.AreEqual("Bridge.ClientTest.Reflection.TypeSystemTests+BX`1[[System.Int32, mscorlib]], Bridge.ClientTest", typeof(BX<int>).AssemblyQualifiedName);
        }

        [Test]
        public void AssemblyPropertyWorks()
        {
            Assert.AreEqual(AssemblyWithVersion, typeof(B).Assembly.FullName);
            Assert.AreEqual(AssemblyWithVersion, typeof(I1).Assembly.FullName);
            Assert.AreEqual(AssemblyWithVersion, typeof(IG<>).Assembly.FullName);
            Assert.AreEqual(AssemblyWithVersion, typeof(BX<>).Assembly.FullName);
            Assert.AreEqual(AssemblyWithVersion, typeof(IG<int>).Assembly.FullName);
            Assert.AreEqual(AssemblyWithVersion, typeof(BX<int>).Assembly.FullName);
            Assert.AreEqual(AssemblyWithVersion, typeof(E1).Assembly.FullName);
        }

        [Test]
        public void NamespacePropertyReturnsTheNamespaceWithoutTheName()
        {
            Assert.AreEqual("Bridge.ClientTest.Reflection", typeof(TypeSystemTests).Namespace);
            Assert.AreEqual("Bridge.ClientTest.Reflection", typeof(DS2).Namespace);
        }

        [Test]
        public void InstantiatingClassWithConstructorThatNeedsToBeAppliedWorks()
        {
            var args = new List<object> { 42, "x", 18 };
            var obj = new ClassWithExpandParamsCtor(args.ToArray());

            Assert.AreEqual(args.ToArray(), obj.CtorArgs);
            Assert.AreEqual(typeof(ClassWithExpandParamsCtor), obj.GetType());
        }

        [Test]
        public void NamePropertyRemovesTheNamespace()
        {
            Assert.AreEqual("TypeSystemTests", typeof(TypeSystemTests).Name, "non-generic");
            Assert.AreEqual("G`2", typeof(G<int, string>).Name, "generic");
            Assert.AreEqual("G`2", typeof(G<BX<double>, string>).Name, "nested generic");
        }

        [Test]
        public void GettingBaseTypeWorks()
        {
            Assert.AreEqual(typeof(object), typeof(B).BaseType);
            Assert.AreEqual(typeof(B), typeof(C).BaseType);
            Assert.AreEqual(null, typeof(object).BaseType);
        }

        [Test]
        public void GettingImplementedInterfacesWorks()
        {
            var ifs = typeof(C).GetInterfaces();
            Assert.AreEqual(4, ifs.Length);
            Assert.True(ifs.Contains(typeof(I1)));
            Assert.True(ifs.Contains(typeof(I2)));
            Assert.True(ifs.Contains(typeof(I3)));
            Assert.True(ifs.Contains(typeof(I4)));
        }

        [Test]
        public void TypeOfAnOpenGenericClassWorks()
        {
            Assert.AreEqual("Bridge.ClientTest.Reflection.TypeSystemTests+G`2", typeof(G<,>).FullName);
        }

        [Test]
        public void TypeOfAnOpenGenericInterfaceWorks()
        {
            Assert.AreEqual("Bridge.ClientTest.Reflection.TypeSystemTests+IG`1", typeof(IG<>).FullName);
        }

        [Test]
        public void TypeOfInstantiatedGenericClassWorks()
        {
            Assert.AreEqual("Bridge.ClientTest.Reflection.TypeSystemTests+G`2[[System.Int32, mscorlib],[Bridge.ClientTest.Reflection.TypeSystemTests+C, Bridge.ClientTest]]", typeof(G<int, C>).FullName);
        }

        [Test]
        public void TypeOfInstantiatedGenericInterfaceWorks()
        {
            Assert.AreEqual("Bridge.ClientTest.Reflection.TypeSystemTests+IG`1[[System.Int32, mscorlib]]", typeof(IG<int>).FullName);
        }

        [Test]
        public void ConstructingAGenericTypeTwiceWithTheSameArgumentsReturnsTheSameInstance()
        {
            var t1 = typeof(G<int, C>);
            var t2 = typeof(G<C, int>);
            var t3 = typeof(G<int, C>);
            Assert.False(t1 == t2);
            Assert.True(t1 == t3);
        }

        [Test]
        public void AccessingAStaticMemberInAGenericClassWorks()
        {
            Assert.AreEqual("System.Int32 Bridge.ClientTest.Reflection.TypeSystemTests+C", G<int, C>.field);
            Assert.AreEqual("Bridge.ClientTest.Reflection.TypeSystemTests+C System.Int32", G<C, int>.field);
            Assert.AreEqual("Bridge.ClientTest.Reflection.TypeSystemTests+G`2[[Bridge.ClientTest.Reflection.TypeSystemTests+C, Bridge.ClientTest],[System.Int32, mscorlib]] Bridge.ClientTest.Reflection.TypeSystemTests+G`2[[System.String, mscorlib],[Bridge.ClientTest.Reflection.TypeSystemTests+C, Bridge.ClientTest]]", G<G<C, int>, G<string, C>>.field);
        }

        [Test]
        public void TypeOfNestedGenericClassWorks()
        {
            Assert.AreEqual("Bridge.ClientTest.Reflection.TypeSystemTests+G`2[[System.Int32, mscorlib],[Bridge.ClientTest.Reflection.TypeSystemTests+G`2[[Bridge.ClientTest.Reflection.TypeSystemTests+C, Bridge.ClientTest],[Bridge.ClientTest.Reflection.TypeSystemTests+IG`1[[System.String, mscorlib]], Bridge.ClientTest]], Bridge.ClientTest]]", typeof(G<int, G<C, IG<string>>>).FullName);
        }

        [Test]
        public void BaseTypeAndImplementedInterfacesForGenericTypeWorks()
        {
            Assert.AreEqual("Bridge.ClientTest.Reflection.TypeSystemTests+BX`1[[Bridge.ClientTest.Reflection.TypeSystemTests+G`2[[System.Int32, mscorlib],[Bridge.ClientTest.Reflection.TypeSystemTests+C, Bridge.ClientTest]], Bridge.ClientTest]]", typeof(G<int, G<C, IG<string>>>).BaseType.FullName);
            Assert.AreEqual("Bridge.ClientTest.Reflection.TypeSystemTests+IG`1[[Bridge.ClientTest.Reflection.TypeSystemTests+G`2[[Bridge.ClientTest.Reflection.TypeSystemTests+G`2[[Bridge.ClientTest.Reflection.TypeSystemTests+C, Bridge.ClientTest],[Bridge.ClientTest.Reflection.TypeSystemTests+IG`1[[System.String, mscorlib]], Bridge.ClientTest]], Bridge.ClientTest],[System.String, mscorlib]], Bridge.ClientTest]]", typeof(G<int, G<C, IG<string>>>).GetInterfaces()[0].FullName);
        }

        [Test] // #2144
        public void IsAbstractWorks()
        {
            Assert.True(typeof(CA1).IsAbstract);
            Assert.True(typeof(CA2).IsAbstract);
            Assert.True(typeof(I1).IsAbstract);
            Assert.True(typeof(IG<>).IsAbstract);
            Assert.False(typeof(CS1<>).IsAbstract);
            Assert.False(typeof(C).IsAbstract);
            Assert.False(typeof(E1).IsAbstract);
            Assert.False(typeof(G<,>).IsAbstract);
        }

        [Test] // #2161
        public void IsGenericTypeWorks()
        {
            Assert.True(typeof(G<,>).IsGenericType);
            Assert.True(typeof(G<int, string>).IsGenericType);
            Assert.False(typeof(C).IsGenericType);
            Assert.True(typeof(IG<>).IsGenericType);
            Assert.True(typeof(IG<int>).IsGenericType);
            Assert.False(typeof(I2).IsGenericType);
            Assert.False(typeof(E1).IsGenericType);
        }

        [Test] // #2161
        public static void IsNestedWorks()
        {
            Assert.True(typeof(L1).IsNested);
            Assert.True(typeof(I1).IsNested);
            Assert.True(typeof(G<,>).IsNested);
            Assert.False(typeof(TypeSystemTests).IsNested);
        }

        [Test] // #2161
        public void IsPublicWorks()
        {
            Assert.True(typeof(TypeSystemTests).IsPublic);
            Assert.False(typeof(CA1).IsPublic);
            Assert.False(typeof(CA2).IsPublic);
            Assert.False(typeof(I1).IsPublic);
            Assert.False(typeof(IG<>).IsPublic);
            Assert.False(typeof(CS1<>).IsPublic);
            Assert.False(typeof(CS2<,>).IsPublic);
            Assert.False(typeof(CS3).IsPublic);
            Assert.False(typeof(C).IsPublic);
            Assert.False(typeof(E1).IsPublic);
            Assert.False(typeof(G<,>).IsPublic);
        }

        [Test] // #2161
        public void IsNestedPublicWorks()
        {
            Assert.False(typeof(TypeSystemTests).IsNestedPublic);
            Assert.True(typeof(CA1).IsNestedPublic);
            Assert.True(typeof(CA2).IsNestedPublic);
            Assert.True(typeof(I1).IsNestedPublic);
            Assert.True(typeof(IG<>).IsNestedPublic);
            Assert.True(typeof(CS1<>).IsNestedPublic);
            Assert.False(typeof(CS2<,>).IsNestedPublic);
            Assert.False(typeof(CS3).IsNestedPublic);
            Assert.False(typeof(L1).IsNestedPublic);
            Assert.True(typeof(C).IsNestedPublic);
            Assert.True(typeof(E1).IsNestedPublic);
            Assert.True(typeof(G<,>).IsNestedPublic);
        }

        [Test] // #2161
        public void IsNestedPrivateWorks()
        {
            Assert.False(typeof(TypeSystemTests).IsNestedPrivate);
            Assert.False(typeof(CA1).IsNestedPrivate);
            Assert.False(typeof(CA2).IsNestedPrivate);
            Assert.False(typeof(I1).IsNestedPrivate);
            Assert.False(typeof(IG<>).IsNestedPrivate);
            Assert.False(typeof(CS1<>).IsNestedPrivate);
            Assert.True(typeof(CS2<,>).IsNestedPrivate);
            Assert.False(typeof(CS3).IsNestedPrivate);
            Assert.True(typeof(L1).IsNestedPrivate);
            Assert.False(typeof(C).IsNestedPrivate);
            Assert.False(typeof(E1).IsNestedPrivate);
            Assert.False(typeof(G<,>).IsNestedPrivate);
        }

        [Test] // #2161
        public void IsNestedFamilyWorks()
        {
            Assert.False(typeof(TypeSystemTests).IsNestedFamily);
            Assert.False(typeof(CA1).IsNestedFamily);
            Assert.False(typeof(CA2).IsNestedFamily);
            Assert.False(typeof(I1).IsNestedFamily);
            Assert.False(typeof(IG<>).IsNestedFamily);
            Assert.False(typeof(CS1<>).IsNestedFamily);
            Assert.False(typeof(CS2<,>).IsNestedFamily);
            Assert.False(typeof(CS3).IsNestedFamily);
            Assert.False(typeof(L1).IsNestedFamily);
            Assert.False(typeof(C).IsNestedFamily);
            Assert.False(typeof(E1).IsNestedFamily);
            Assert.False(typeof(G<,>).IsNestedFamily);
            Assert.True(typeof(ProtectedClass).IsNestedFamily);
            Assert.False(typeof(ProtectedInternalClass).IsNestedFamily);
        }

        [Test] // #2161
        public void IsNestedAssemblyWorks()
        {
            Assert.False(typeof(TypeSystemTests).IsNestedAssembly);
            Assert.False(typeof(CA1).IsNestedAssembly);
            Assert.False(typeof(CA2).IsNestedAssembly);
            Assert.False(typeof(I1).IsNestedAssembly);
            Assert.False(typeof(IG<>).IsNestedAssembly);
            Assert.False(typeof(CS1<>).IsNestedAssembly);
            Assert.False(typeof(CS2<,>).IsNestedAssembly);
            Assert.True(typeof(CS3).IsNestedAssembly);
            Assert.False(typeof(L1).IsNestedAssembly);
            Assert.False(typeof(C).IsNestedAssembly);
            Assert.False(typeof(E1).IsNestedAssembly);
            Assert.False(typeof(G<,>).IsNestedAssembly);
            Assert.False(typeof(ProtectedClass).IsNestedAssembly);
            Assert.False(typeof(ProtectedInternalClass).IsNestedAssembly);
        }

        [Test] // #2161
        public void IsNotPublicWorks()
        {
            Assert.True(typeof(Utilities.DecimalHelper).IsNotPublic);
            Assert.False(typeof(TypeSystemTests).IsNotPublic);
            Assert.False(typeof(CA1).IsNotPublic);
            Assert.False(typeof(CA2).IsNotPublic);
            Assert.False(typeof(I1).IsNotPublic);
            Assert.False(typeof(IG<>).IsNotPublic);
            Assert.False(typeof(CS1<>).IsNotPublic);
            Assert.False(typeof(CS2<,>).IsNotPublic);
            Assert.False(typeof(CS3).IsNotPublic);
            Assert.False(typeof(C).IsNotPublic);
            Assert.False(typeof(E1).IsNotPublic);
            Assert.False(typeof(G<,>).IsNotPublic);
        }

        [Test] // #2161
        public void IsSealedWorks()
        {
            Assert.False(typeof(G<,>).IsSealed);
            Assert.False(typeof(object).IsSealed);
            Assert.True(typeof(string).IsSealed);
            Assert.True(typeof(int).IsSealed);
            Assert.True(typeof(CS1<>).IsSealed);
            Assert.True(typeof(CS2<,>).IsSealed);
            Assert.True(typeof(CS3).IsSealed);
        }

        [Test] // #2161
        public void AttributesWorks()
        {
            Assert.AreEqual((int)(typeof(CA1).Attributes), 1048706);
            Assert.AreEqual((int)(typeof(CA2).Attributes), 1048706);
            Assert.AreEqual((int)(typeof(TypeSystemTests).Attributes), 1048577);
            Assert.AreEqual((int)(typeof(B).Attributes), 1048578);
            Assert.AreEqual((int)(typeof(I1).Attributes), 162);
            Assert.AreEqual((int)(typeof(IG<>).Attributes), 162);
            Assert.AreEqual((int)(typeof(CS1<>).Attributes), 1048834);
            Assert.AreEqual((int)(typeof(CS2<,>).Attributes), 1048835);
            Assert.AreEqual((int)(typeof(CS3).Attributes), 1048837);
            Assert.AreEqual((int)(typeof(E1).Attributes), 258);
        }

        [Test] // #2161
        public static void ContainsGenericParametersWorks()
        {
            Assert.False(typeof(CA2).ContainsGenericParameters);
            Assert.False(typeof(CA2).ContainsGenericParameters);
            Assert.False(typeof(B).ContainsGenericParameters);
            Assert.True(typeof(BX<>).ContainsGenericParameters);
            Assert.False(typeof(I4).ContainsGenericParameters);
            Assert.True(typeof(IG<>).ContainsGenericParameters);
            Assert.True(typeof(CS1<>).ContainsGenericParameters);
            Assert.False(typeof(E1).ContainsGenericParameters);
            Assert.True(typeof(G<,>).ContainsGenericParameters);
            Assert.True(typeof(G2<,>).ContainsGenericParameters);
            Assert.True(typeof(G3<,>).ContainsGenericParameters);
            Assert.True(typeof(G4<>).ContainsGenericParameters);
            Assert.False(typeof(G5).ContainsGenericParameters);
        }

        [Test] // #2161
        public static void DeclaringTypeWorks()
        {
            Assert.AreEqual(typeof(L1).DeclaringType.Name, "TypeSystemTests");
            Assert.AreEqual(typeof(L1).GetMethod("M").GetGenericArguments()[0].DeclaringType.Name, "L1");
            Assert.AreEqual(typeof(L1).GetProperty("P").DeclaringType.Name, "L1");

            Assert.AreEqual(typeof(L1.L2).DeclaringType.Name, "L1");
            Assert.AreEqual(typeof(L1.L2).GetMethod("M").GetGenericArguments()[0].DeclaringType.Name, "L2");
            Assert.AreEqual(typeof(L1.L2).GetProperty("P").DeclaringType.Name, "L2");

            Assert.AreEqual(typeof(L32).DeclaringType.Name, "TypeSystemTests");
            Assert.AreEqual(typeof(L32).GetProperty("P1").DeclaringType.Name, "L30");
            Assert.AreEqual(typeof(L32).GetMethod("M1").DeclaringType.Name, "L32");
            Assert.AreEqual(typeof(L32).GetMethod("M4").GetGenericArguments()[0].DeclaringType.Name, "L32");
            Assert.AreEqual(typeof(L32).GetMethod("M5").GetGenericArguments()[0].DeclaringType.Name, "L32");

            Assert.AreEqual(typeof(L31<>).DeclaringType.Name, "TypeSystemTests");
            Assert.AreEqual(typeof(L31<string>).DeclaringType.Name, "TypeSystemTests");
            Assert.AreEqual(typeof(L31<int>).GetProperty("P1").DeclaringType.Name, "L30");
            Assert.AreEqual(typeof(L31<>).GetProperty("P1").DeclaringType.Name, "L30");
            Assert.AreEqual(typeof(L31<int>).GetGenericArguments()[0].DeclaringType, null);
            Assert.AreEqual(typeof(L31<>).GetMethod("M1").DeclaringType.Name, "L30");
            Assert.AreEqual(typeof(L31<object>).GetMethod("M1").DeclaringType.Name, "L30");
            Assert.AreEqual(typeof(L31<>).GetMethod("M2").DeclaringType.Name, "L31`1");
            Assert.AreEqual(typeof(L31<int>).GetMethod("M2").DeclaringType.Name, "L31`1");
        }

        [Test(ExpectedCount = 58)] // #2161
        public static void IsGenericParameterWorks()
        {
            AssertIsGenericParameter("1", typeof(CA2));
            AssertIsGenericParameter("2", typeof(B));
            AssertIsGenericParameter("3", typeof(BX<int>), false);
            AssertIsGenericParameter("4", typeof(BX<>), true);
            AssertIsGenericParameter("5", typeof(I4));
            AssertIsGenericParameter("6", typeof(IG<int>), false);
            AssertIsGenericParameter("7", typeof(IG<>), true);
            AssertIsGenericParameter("8", typeof(CS1<int>), false);
            AssertIsGenericParameter("9", typeof(CS1<>), true);
            AssertIsGenericParameter("10", typeof(E1));
            AssertIsGenericParameter("11", typeof(G<string, int>), false, false);
            AssertIsGenericParameter("12", typeof(G<,>), true, true);
            AssertIsGenericParameter("13", typeof(G2<string, object>), false, false);
            AssertIsGenericParameter("14", typeof(G2<,>), true, true);
            AssertIsGenericParameter("15", typeof(G3<string, object>), false, false);
            AssertIsGenericParameter("16", typeof(G3<,>), true, true);
            AssertIsGenericParameter("17", typeof(G4<object>), false);
            AssertIsGenericParameter("18", typeof(G4<>), true);
            AssertIsGenericParameter("19", typeof(G5));
        }

        private static void AssertIsGenericParameter(string number, Type t, params bool[] expected)
        {
            Assert.False(t.IsGenericParameter, number + ": Parameter");

            var ta = t.GetGenericArguments();
            Assert.AreEqual(ta.Length, expected.Length, number + ": Length");

            if (expected.Length == 0)
            {
                return;
            }

            var actualLength = ta.Length;

            for (int i = 0; i < expected.Length; i++)
            {
                var actual = i >= actualLength ? false : ta[i].IsGenericParameter;
                Assert.AreEqual(actual, expected[i], number + "." + i + ": Result");
            }
        }

        [Test] // #2161
        public void GetEnumNamesWorks()
        {
            Assert.AreEqual(typeof(E0).GetEnumNames(), new[] { "V3", "V2", "V1" });
            Assert.AreEqual(typeof(E1).GetEnumNames(), new[] { "V1", "V2", "V3" });
            Assert.AreEqual(typeof(E2).GetEnumNames(), new[] { "B1", "B2", "B3" });

            Assert.Throws<ArgumentException>(() => { typeof(I1).GetEnumNames(); });
            Assert.Throws<ArgumentException>(() => { typeof(CA1).GetEnumNames(); });
            Assert.Throws<ArgumentException>(() => { typeof(C).GetEnumNames(); });
        }

        [Test] // #2161
        public void GetEnumNameWorks()
        {
            Assert.AreEqual(typeof(E0).GetEnumName(0), "V3");
            Assert.AreEqual(typeof(E0).GetEnumName(1), "V2");
            Assert.AreEqual(typeof(E0).GetEnumName(2), "V1");
            Assert.AreEqual(typeof(E0).GetEnumName(3), null);
            Assert.AreEqual(typeof(E0).GetEnumName(E0.V1), "V1");
            Assert.AreEqual(typeof(E0).GetEnumName(E0.V2), "V2");
            Assert.AreEqual(typeof(E0).GetEnumName(E0.V3), "V3");
            Assert.Throws<ArgumentNullException>(() => { typeof(E0).GetEnumName(null); });
            Assert.Throws<ArgumentException>(() => { typeof(E0).GetEnumName("V1"); });

            Assert.AreEqual(typeof(E1).GetEnumName(0), null);
            Assert.AreEqual(typeof(E1).GetEnumName(1), "V1");
            Assert.AreEqual(typeof(E1).GetEnumName(2), "V2");
            Assert.AreEqual(typeof(E1).GetEnumName(3), "V3");
            Assert.AreEqual(typeof(E1).GetEnumName(E1.V1), "V1");
            Assert.AreEqual(typeof(E1).GetEnumName(E1.V2), "V2");
            Assert.AreEqual(typeof(E1).GetEnumName(E1.V3), "V3");
            Assert.Throws<ArgumentNullException>(() => { typeof(E1).GetEnumName(null); });
            Assert.Throws<ArgumentException>(() => { typeof(E1).GetEnumName("V1"); });

            Assert.AreEqual(typeof(E2).GetEnumName(0), null);
            Assert.AreEqual(typeof(E2).GetEnumName(1), "B1");
            Assert.AreEqual(typeof(E2).GetEnumName(2), "B2");
            Assert.AreEqual(typeof(E2).GetEnumName(3), "B3");
            Assert.AreEqual(typeof(E2).GetEnumName(E2.B1), "B1");
            Assert.AreEqual(typeof(E2).GetEnumName(E2.B2), "B2");
            Assert.AreEqual(typeof(E2).GetEnumName(E2.B3), "B3");
            Assert.Throws<ArgumentNullException>(() => { typeof(E2).GetEnumName(null); });
            Assert.Throws<ArgumentException>(() => { typeof(E2).GetEnumName("B1"); });
        }

        [Test] // #2161
        public void GetEnumValuesWorks()
        {
            Assert.AreEqual(typeof(E0).GetEnumValues(), new[] { E0.V3, E0.V2, E0.V1 });
            Assert.AreEqual(typeof(E1).GetEnumValues(), new[] { E1.V1, E1.V2, E1.V3 });
            Assert.AreEqual(typeof(E2).GetEnumValues(), new[] { E2.B1, E2.B2, E2.B3 });

            Assert.Throws<ArgumentException>(() => { typeof(I1).GetEnumValues(); });
            Assert.Throws<ArgumentException>(() => { typeof(CA1).GetEnumValues(); });
            Assert.Throws<ArgumentException>(() => { typeof(C).GetEnumValues(); });
        }

        [Test] // #2161
        public void GetEnumUnderlyingTypeWorks()
        {
            Assert.AreEqual(typeof(E0).GetEnumUnderlyingType(), typeof(int));
            Assert.AreEqual(typeof(E1).GetEnumUnderlyingType(), typeof(int));
            Assert.AreEqual(typeof(E2).GetEnumUnderlyingType(), typeof(int));
            Assert.AreEqual(typeof(E3).GetEnumUnderlyingType(), typeof(long));

            Assert.Throws<ArgumentException>(() => { typeof(I1).GetEnumUnderlyingType(); });
            Assert.Throws<ArgumentException>(() => { typeof(CA1).GetEnumUnderlyingType(); });
            Assert.Throws<ArgumentException>(() => { typeof(C).GetEnumUnderlyingType(); });
        }

        [Test]
        public void IsGenericTypeDefinitionWorksAsExpected()
        {
            Assert.True(typeof(G<,>).IsGenericTypeDefinition);
            Assert.False(typeof(G<int, string>).IsGenericTypeDefinition);
            Assert.False(typeof(C).IsGenericTypeDefinition);
            Assert.True(typeof(IG<>).IsGenericTypeDefinition);
            Assert.False(typeof(IG<int>).IsGenericTypeDefinition);
            Assert.False(typeof(I2).IsGenericTypeDefinition);
            Assert.False(typeof(E1).IsGenericTypeDefinition);
        }

        [Test]
        public void GenericParameterCountReturnsZeroForConstructedTypesAndNonZeroForOpenOnes()
        {
            Assert.AreEqual(2, typeof(G<,>).GenericParameterCount);
            Assert.AreEqual(0, typeof(G<int, string>).GenericParameterCount);
            Assert.AreEqual(0, typeof(C).GenericParameterCount);
            Assert.AreEqual(1, typeof(IG<>).GenericParameterCount);
            Assert.AreEqual(0, typeof(IG<int>).GenericParameterCount);
            Assert.AreEqual(0, typeof(I2).GenericParameterCount);
            Assert.AreEqual(0, typeof(E1).GenericParameterCount);
        }

        [Test]
        public void GetGenericArgumentsReturnsTheCorrectTypesForConstructedTypesOtherwiseNull()
        {
            Assert.AreEqual(typeof(G<,>).GetGenericArguments().Length, 2);
            Assert.AreEqual(new[] { typeof(int), typeof(string) }, typeof(G<int, string>).GetGenericArguments());
            Assert.AreEqual(typeof(C).GetGenericArguments().Length, 0);
            Assert.AreEqual(typeof(IG<>).GetGenericArguments().Length, 1);
            Assert.AreEqual(new[] { typeof(string) }, typeof(IG<string>).GetGenericArguments());
            Assert.AreEqual(typeof(I2).GetGenericArguments().Length, 0);
            Assert.AreEqual(typeof(E1).GetGenericArguments().Length, 0);
        }

        [Test]
        public void GetGenericTypeDefinitionReturnsTheGenericTypeDefinitionForConstructedTypeOtherwiseNull()
        {
            Assert.AreEqual(typeof(G<,>), typeof(G<,>).GetGenericTypeDefinition());
            Assert.AreEqual(typeof(G<,>), typeof(G<int, string>).GetGenericTypeDefinition());
            Assert.Throws<InvalidOperationException>(() => typeof(C).GetGenericTypeDefinition());
            Assert.AreEqual(typeof(IG<>), typeof(IG<>).GetGenericTypeDefinition());
            Assert.AreEqual(typeof(IG<>), typeof(IG<string>).GetGenericTypeDefinition());
            Assert.Throws<InvalidOperationException>(() => typeof(I2).GetGenericTypeDefinition());
            Assert.Throws<InvalidOperationException>(() => typeof(E1).GetGenericTypeDefinition());
        }

        private class IsAssignableFromTypes
        {
            public class C1
            {
            }

            public class C2<T>
            {
            }

            public interface I1
            {
            }

            public interface I2<T1>
            {
            }

            public interface I3 : I1
            {
            }

            public interface I4
            {
            }

            public interface I5<T1> : I2<T1>
            {
            }

            public interface I6<out T>
            {
            }

            public interface I7<in T>
            {
            }

            public interface I8<out T1, in T2> : I6<T1>, I7<T2>
            {
            }

            public interface I9<T1, out T2>
            {
            }

            public interface I10<out T1, in T2> : I8<T1, T2>
            {
            }

            public class D1 : C1, I1
            {
            }

            public class D2<T> : C2<T>, I2<T>, I1
            {
            }

            public class D3 : C2<int>, I2<string>
            {
            }

            public class D4 : I3, I4
            {
            }

            public class X1 : I1
            {
            }

            public class X2 : X1
            {
            }

            public class Y1<T> : I6<T>
            {
            }

            public class Y1X1 : Y1<X1>
            {
            }

            public class Y1X2 : Y1<X2>
            {
            }

            public class Y2<T> : I7<T>
            {
            }

            public class Y2X1 : Y2<X1>
            {
            }

            public class Y2X2 : Y2<X2>
            {
            }

            public class Y3<T1, T2> : I8<T1, T2>
            {
            }

            public class Y3X1X1 : Y3<X1, X1>
            {
            }

            public class Y3X1X2 : Y3<X1, X2>
            {
            }

            public class Y3X2X1 : Y3<X2, X1>
            {
            }

            public class Y3X2X2 : Y3<X2, X2>
            {
            }

            public class Y4<T1, T2> : I9<T1, T2>
            {
            }

            public class Y5<T1, T2> : I6<I8<T1, T2>>
            {
            }

            public class Y6<T1, T2> : I7<I8<T1, T2>>
            {
            }
        }

        [Test]
        public void IsAssignableFromWorks()
        {
            Assert.True(typeof(IsAssignableFromTypes.C1).IsAssignableFrom(typeof(IsAssignableFromTypes.C1)), "#1");
            Assert.False(typeof(IsAssignableFromTypes.C1).IsAssignableFrom(typeof(object)), "#2");
            Assert.True(typeof(object).IsAssignableFrom(typeof(IsAssignableFromTypes.C1)), "#3");
            Assert.False(typeof(IsAssignableFromTypes.I1).IsAssignableFrom(typeof(object)), "#4");
            Assert.True(typeof(object).IsAssignableFrom(typeof(IsAssignableFromTypes.I1)), "#5");
            Assert.False(typeof(IsAssignableFromTypes.I3).IsAssignableFrom(typeof(IsAssignableFromTypes.I1)), "#6");
            Assert.True(typeof(IsAssignableFromTypes.I1).IsAssignableFrom(typeof(IsAssignableFromTypes.I3)), "#7");
            Assert.False(typeof(IsAssignableFromTypes.D1).IsAssignableFrom(typeof(IsAssignableFromTypes.C1)), "#8");
            Assert.True(typeof(IsAssignableFromTypes.C1).IsAssignableFrom(typeof(IsAssignableFromTypes.D1)), "#9");
            Assert.True(typeof(IsAssignableFromTypes.I1).IsAssignableFrom(typeof(IsAssignableFromTypes.D1)), "#10");
            Assert.True(typeof(IsAssignableFromTypes.C2<int>).IsAssignableFrom(typeof(IsAssignableFromTypes.D2<int>)), "#11");
            Assert.False(typeof(IsAssignableFromTypes.C2<string>).IsAssignableFrom(typeof(IsAssignableFromTypes.D2<int>)), "#12");
            Assert.True(typeof(IsAssignableFromTypes.I2<int>).IsAssignableFrom(typeof(IsAssignableFromTypes.D2<int>)), "#13");
            Assert.False(typeof(IsAssignableFromTypes.I2<string>).IsAssignableFrom(typeof(IsAssignableFromTypes.D2<int>)), "#14");
            Assert.True(typeof(IsAssignableFromTypes.I1).IsAssignableFrom(typeof(IsAssignableFromTypes.D2<int>)), "#15");
            Assert.False(typeof(IsAssignableFromTypes.C2<string>).IsAssignableFrom(typeof(IsAssignableFromTypes.D3)), "#16");
            Assert.True(typeof(IsAssignableFromTypes.C2<int>).IsAssignableFrom(typeof(IsAssignableFromTypes.D3)), "#17");
            Assert.False(typeof(IsAssignableFromTypes.I2<int>).IsAssignableFrom(typeof(IsAssignableFromTypes.D3)), "#18");
            Assert.True(typeof(IsAssignableFromTypes.I2<string>).IsAssignableFrom(typeof(IsAssignableFromTypes.D3)), "#19");
            Assert.False(typeof(IsAssignableFromTypes.I2<int>).IsAssignableFrom(typeof(IsAssignableFromTypes.I5<string>)), "#20");
            Assert.True(typeof(IsAssignableFromTypes.I2<int>).IsAssignableFrom(typeof(IsAssignableFromTypes.I5<int>)), "#21");
            Assert.False(typeof(IsAssignableFromTypes.I5<int>).IsAssignableFrom(typeof(IsAssignableFromTypes.I2<int>)), "#22");
            Assert.True(typeof(IsAssignableFromTypes.I1).IsAssignableFrom(typeof(IsAssignableFromTypes.D4)), "#23");
            Assert.True(typeof(IsAssignableFromTypes.I3).IsAssignableFrom(typeof(IsAssignableFromTypes.D4)), "#24");
            Assert.True(typeof(IsAssignableFromTypes.I4).IsAssignableFrom(typeof(IsAssignableFromTypes.D4)), "#25");
            Assert.True(typeof(IsAssignableFromTypes.I1).IsAssignableFrom(typeof(IsAssignableFromTypes.X2)), "#26");
            Assert.False(typeof(IsAssignableFromTypes.I2<>).IsAssignableFrom(typeof(IsAssignableFromTypes.I5<>)), "#27");
            Assert.False(typeof(IsAssignableFromTypes.C2<>).IsAssignableFrom(typeof(IsAssignableFromTypes.D2<>)), "#28");
            Assert.False(typeof(IsAssignableFromTypes.C2<>).IsAssignableFrom(typeof(IsAssignableFromTypes.D3)), "#29");
            Assert.False(typeof(E1).IsAssignableFrom(typeof(E2)), "#30");
            Assert.False(typeof(int).IsAssignableFrom(typeof(E1)), "#31");
            Assert.True(typeof(object).IsAssignableFrom(typeof(E1)), "#32");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X1>)), "#33");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X1>)), "#34");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X1>)), "#35");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X2>)), "#36");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X2>)), "#37");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y1<IsAssignableFromTypes.X1>)), "#38");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y1<IsAssignableFromTypes.X1>)), "#39");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y1X1)), "#40");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y1<IsAssignableFromTypes.X1>)), "#41");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y1X1)), "#42");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y1<IsAssignableFromTypes.X2>)), "#43");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y1X2)), "#44");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y1<IsAssignableFromTypes.X2>)), "#45");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y1X2)), "#46");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X1>)), "#47");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X1>)), "#48");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X1>)), "#49");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X2>)), "#50");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X2>)), "#51");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y2<IsAssignableFromTypes.X1>)), "#52");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y2<IsAssignableFromTypes.X1>)), "#53");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y2X1)), "#54");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y2<IsAssignableFromTypes.X1>)), "#55");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y2X1)), "#56");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y2<IsAssignableFromTypes.X2>)), "#57");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y2X2)), "#58");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y2<IsAssignableFromTypes.X2>)), "#59");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y2X2)), "#60");
            Assert.False(typeof(IsAssignableFromTypes.I1).IsAssignableFrom(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#61");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#62");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>)), "#63");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>)), "#64");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#65");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#66");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>)), "#67");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>)), "#68");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#69");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#70");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>)), "#71");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>)), "#72");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#73");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#74");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>)), "#75");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>)), "#76");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#77");
            Assert.False(typeof(IsAssignableFromTypes.I1).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#78");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#79");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3X1X1)), "#80");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>)), "#81");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3X1X2)), "#82");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>)), "#83");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3X2X1)), "#84");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#85");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3X2X2)), "#86");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#87");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3X1X1)), "#88");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>)), "#89");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3X1X2)), "#90");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>)), "#91");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3X2X1)), "#92");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#93");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3X2X2)), "#94");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#95");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3X1X1)), "#96");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>)), "#97");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3X1X2)), "#98");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>)), "#99");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3X2X1)), "#100");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#101");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3X2X2)), "#102");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#103");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3X1X1)), "#104");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>)), "#105");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3X1X2)), "#106");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>)), "#107");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3X2X1)), "#108");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#109");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y3X2X2)), "#110");
            Assert.True(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X1>)), "#111");
            Assert.False(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X1>)), "#112");
            Assert.False(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X1>)), "#113");
            Assert.True(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X1>)), "#114");
            Assert.False(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X1>)), "#115");
            Assert.False(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X1>)), "#116");
            Assert.False(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X1>)), "#117");
            Assert.False(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X1>)), "#118");
            Assert.True(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X2>)), "#119");
            Assert.False(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X2>)), "#120");
            Assert.False(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X2>)), "#121");
            Assert.True(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X2>)), "#122");
            Assert.True(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X2>)), "#123");
            Assert.False(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X2>)), "#124");
            Assert.False(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X2>)), "#125");
            Assert.True(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X2>)), "#126");
            Assert.True(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y4<string, IsAssignableFromTypes.X1>)), "#127");
            Assert.False(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y4<string, IsAssignableFromTypes.X1>)), "#128");
            Assert.False(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y4<object, IsAssignableFromTypes.X1>)), "#129");
            Assert.True(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y4<object, IsAssignableFromTypes.X1>)), "#130");
            Assert.False(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y4<string, IsAssignableFromTypes.X1>)), "#131");
            Assert.False(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y4<string, IsAssignableFromTypes.X1>)), "#132");
            Assert.False(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y4<object, IsAssignableFromTypes.X1>)), "#133");
            Assert.False(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y4<object, IsAssignableFromTypes.X1>)), "#134");
            Assert.True(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y4<string, IsAssignableFromTypes.X2>)), "#135");
            Assert.False(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y4<string, IsAssignableFromTypes.X2>)), "#136");
            Assert.False(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y4<object, IsAssignableFromTypes.X2>)), "#137");
            Assert.True(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X1>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y4<object, IsAssignableFromTypes.X2>)), "#138");
            Assert.True(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y4<string, IsAssignableFromTypes.X2>)), "#139");
            Assert.False(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y4<string, IsAssignableFromTypes.X2>)), "#140");
            Assert.False(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y4<object, IsAssignableFromTypes.X2>)), "#141");
            Assert.True(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X2>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y4<object, IsAssignableFromTypes.X2>)), "#142");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I6<IsAssignableFromTypes.X1>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y5<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#143");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I7<IsAssignableFromTypes.X1>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y5<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#144");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I6<IsAssignableFromTypes.X2>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y5<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#145");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I7<IsAssignableFromTypes.X2>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y5<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#146");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y5<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#147");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y5<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#148");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y5<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#149");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y5<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#150");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I10<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y5<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#151");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I10<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y5<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#152");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I10<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y5<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#153");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I10<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y5<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#154");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I6<IsAssignableFromTypes.X1>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y5<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#155");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I7<IsAssignableFromTypes.X1>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y5<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#156");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I6<IsAssignableFromTypes.X2>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y5<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#157");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I7<IsAssignableFromTypes.X2>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y5<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#158");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y5<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#159");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y5<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#160");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y5<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#161");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y5<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#162");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I10<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y5<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#163");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I10<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y5<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#164");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I10<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y5<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#165");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I10<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y5<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#166");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I6<IsAssignableFromTypes.X1>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y6<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#167");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I7<IsAssignableFromTypes.X1>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y6<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#168");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I6<IsAssignableFromTypes.X2>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y6<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#169");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I7<IsAssignableFromTypes.X2>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y6<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#170");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y6<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#171");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y6<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#172");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y6<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#173");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y6<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#174");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I10<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y6<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#175");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I10<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y6<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#176");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I10<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y6<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#177");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I10<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y6<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>)), "#178");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I6<IsAssignableFromTypes.X1>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y6<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#179");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I7<IsAssignableFromTypes.X1>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y6<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#180");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I6<IsAssignableFromTypes.X2>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y6<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#181");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I7<IsAssignableFromTypes.X2>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y6<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#182");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y6<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#183");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y6<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#184");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y6<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#185");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y6<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#186");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I10<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y6<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#187");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I10<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y6<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#188");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I10<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y6<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#189");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I10<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>>).IsAssignableFrom(typeof(IsAssignableFromTypes.Y6<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>)), "#190");
        }

        private class IsSubclassOfTypes
        {
            public class C1
            {
            }

            public class C2<T>
            {
            }

            public class D1 : C1
            {
            }

            public class D2<T> : C2<T>
            {
            }

            public class D3 : C2<int>
            {
            }
        }

        [Test]
        public void IsSubclassOfWorks()
        {
            Assert.False(typeof(IsSubclassOfTypes.C1).IsSubclassOf(typeof(IsSubclassOfTypes.C1)), "#1");
            Assert.True(typeof(IsSubclassOfTypes.C1).IsSubclassOf(typeof(object)), "#2");
            Assert.False(typeof(object).IsSubclassOf(typeof(IsSubclassOfTypes.C1)), "#3");
            Assert.True(typeof(IsSubclassOfTypes.D1).IsSubclassOf(typeof(IsSubclassOfTypes.C1)), "#4");
            Assert.False(typeof(IsSubclassOfTypes.C1).IsSubclassOf(typeof(IsSubclassOfTypes.D1)), "#5");
            Assert.True(typeof(IsSubclassOfTypes.D1).IsSubclassOf(typeof(object)), "#6");
            Assert.True(typeof(IsSubclassOfTypes.D2<int>).IsSubclassOf(typeof(IsSubclassOfTypes.C2<int>)), "#7");
            Assert.False(typeof(IsSubclassOfTypes.D2<string>).IsSubclassOf(typeof(IsSubclassOfTypes.C2<int>)), "#8");
            Assert.False(typeof(IsSubclassOfTypes.D3).IsSubclassOf(typeof(IsSubclassOfTypes.C2<string>)), "#9");
            Assert.True(typeof(IsSubclassOfTypes.D3).IsSubclassOf(typeof(IsSubclassOfTypes.C2<int>)), "#10");
            Assert.False(typeof(IsSubclassOfTypes.D2<>).IsSubclassOf(typeof(IsSubclassOfTypes.C2<>)), "#11");
            Assert.False(typeof(IsSubclassOfTypes.D3).IsSubclassOf(typeof(IsSubclassOfTypes.C2<>)), "#12");
        }

        [Test]
        public void IsClassWorks()
        {
            Assert.False(typeof(E1).IsClass);
            Assert.False(typeof(E2).IsClass);
            Assert.True(typeof(C).IsClass);
            Assert.True(typeof(G<,>).IsClass);
            Assert.True(typeof(G<int, string>).IsClass);
            Assert.False(typeof(I1).IsClass);
            Assert.False(typeof(IG<>).IsClass);
            Assert.False(typeof(IG<int>).IsClass);
        }

        [Test]
        public void IsEnumWorks()
        {
            Assert.True(typeof(E1).IsEnum);
            Assert.True(typeof(E2).IsEnum);
            Assert.False(typeof(C).IsEnum);
            Assert.False(typeof(G<,>).IsEnum);
            Assert.False(typeof(G<int, string>).IsEnum);
            Assert.False(typeof(I1).IsEnum);
            Assert.False(typeof(IG<>).IsEnum);
            Assert.False(typeof(IG<int>).IsEnum);
        }

        [Test]
        public void IsArrayWorks()
        {
            var array = new int[5];
            Assert.True(array.GetType().IsArray);
            Assert.True(typeof(object[]).IsArray);
            Assert.True(typeof(int[]).IsArray);
            Assert.False(typeof(C).IsArray);
            //TODO Assert.False(typeof(List<int>).IsArray);
            //TODO Assert.False(typeof(Array).IsArray);
        }

        [Test]
        public void IsFlagsWorks()
        {
            Assert.False(typeof(E1).IsFlags);
            Assert.True(typeof(E2).IsFlags);
            Assert.False(typeof(C).IsFlags);
            Assert.False(typeof(G<,>).IsFlags);
            Assert.False(typeof(G<int, string>).IsFlags);
            Assert.False(typeof(I1).IsFlags);
            Assert.False(typeof(IG<>).IsFlags);
            Assert.False(typeof(IG<int>).IsFlags);
        }

        [Test]
        public void IsInterfaceWorks()
        {
            Assert.False(typeof(E1).IsInterface);
            Assert.False(typeof(E2).IsInterface);
            Assert.False(typeof(C).IsInterface);
            Assert.False(typeof(G<,>).IsInterface);
            Assert.False(typeof(G<int, string>).IsInterface);
            Assert.True(typeof(I1).IsInterface);
            Assert.True(typeof(IG<>).IsInterface);
            Assert.True(typeof(IG<int>).IsInterface);
        }

        [Test]
        public void IsInstanceOfTypeWorksForReferenceTypes()
        {
            Assert.False(Type.IsInstanceOfType(new object(), typeof(IsAssignableFromTypes.C1)), "#1");
            Assert.True(Type.IsInstanceOfType(new IsAssignableFromTypes.C1(), typeof(object)), "#2");
            Assert.False(Type.IsInstanceOfType(new object(), typeof(IsAssignableFromTypes.I1)), "#3");
            Assert.False(Type.IsInstanceOfType(new IsAssignableFromTypes.C1(), typeof(IsAssignableFromTypes.D1)), "#4");
            Assert.True(Type.IsInstanceOfType(new IsAssignableFromTypes.D1(), typeof(IsAssignableFromTypes.C1)), "#5");
            Assert.True(Type.IsInstanceOfType(new IsAssignableFromTypes.D1(), typeof(IsAssignableFromTypes.I1)), "#6");
            Assert.True(Type.IsInstanceOfType(new IsAssignableFromTypes.D2<int>(), typeof(IsAssignableFromTypes.C2<int>)), "#7");
            Assert.False(Type.IsInstanceOfType(new IsAssignableFromTypes.D2<int>(), typeof(IsAssignableFromTypes.C2<string>)), "#8");
            Assert.True(Type.IsInstanceOfType(new IsAssignableFromTypes.D2<int>(), typeof(IsAssignableFromTypes.I2<int>)), "#9");
            Assert.False(Type.IsInstanceOfType(new IsAssignableFromTypes.D2<int>(), typeof(IsAssignableFromTypes.I2<string>)), "#0");
            Assert.True(Type.IsInstanceOfType(new IsAssignableFromTypes.D2<int>(), typeof(IsAssignableFromTypes.I1)), "#11");
            Assert.False(Type.IsInstanceOfType(new IsAssignableFromTypes.D3(), typeof(IsAssignableFromTypes.C2<string>)), "#12");
            Assert.True(Type.IsInstanceOfType(new IsAssignableFromTypes.D3(), typeof(IsAssignableFromTypes.C2<int>)), "#13");
            Assert.False(Type.IsInstanceOfType(new IsAssignableFromTypes.D3(), typeof(IsAssignableFromTypes.I2<int>)), "#14");
            Assert.True(Type.IsInstanceOfType(new IsAssignableFromTypes.D3(), typeof(IsAssignableFromTypes.I2<string>)), "#15");
            Assert.True(Type.IsInstanceOfType(new IsAssignableFromTypes.D4(), typeof(IsAssignableFromTypes.I1)), "#16");
            Assert.True(Type.IsInstanceOfType(new IsAssignableFromTypes.D4(), typeof(IsAssignableFromTypes.I3)), "#17");
            Assert.True(Type.IsInstanceOfType(new IsAssignableFromTypes.D4(), typeof(IsAssignableFromTypes.I4)), "#18");
            Assert.True(Type.IsInstanceOfType(new IsAssignableFromTypes.X2(), typeof(IsAssignableFromTypes.I1)), "#19");
            Assert.False(Type.IsInstanceOfType(new IsAssignableFromTypes.D3(), typeof(IsAssignableFromTypes.C2<>)), "#10");
            Assert.False(Type.IsInstanceOfType(new E2(), typeof(E1)), "#21");
            Assert.True(Type.IsInstanceOfType(new E1(), typeof(int)), "#22");
            Assert.True(Type.IsInstanceOfType(new E1(), typeof(object)), "#23");
            Assert.False(Type.IsInstanceOfType(null, typeof(object)), "#24");

            Assert.False(typeof(IsAssignableFromTypes.C1).IsInstanceOfType(new object()), "#25");
            Assert.True(typeof(object).IsInstanceOfType(new IsAssignableFromTypes.C1()), "#26");
            Assert.False(typeof(IsAssignableFromTypes.I1).IsInstanceOfType(new object()), "#27");
            Assert.False(typeof(IsAssignableFromTypes.D1).IsInstanceOfType(new IsAssignableFromTypes.C1()), "#28");
            Assert.True(typeof(IsAssignableFromTypes.C1).IsInstanceOfType(new IsAssignableFromTypes.D1()), "#29");
            Assert.True(typeof(IsAssignableFromTypes.I1).IsInstanceOfType(new IsAssignableFromTypes.D1()), "#30");
            Assert.True(typeof(IsAssignableFromTypes.C2<int>).IsInstanceOfType(new IsAssignableFromTypes.D2<int>()), "#31");
            Assert.False(typeof(IsAssignableFromTypes.C2<string>).IsInstanceOfType(new IsAssignableFromTypes.D2<int>()), "#32");
            Assert.True(typeof(IsAssignableFromTypes.I2<int>).IsInstanceOfType(new IsAssignableFromTypes.D2<int>()), "#33");
            Assert.False(typeof(IsAssignableFromTypes.I2<string>).IsInstanceOfType(new IsAssignableFromTypes.D2<int>()), "#34");
            Assert.True(typeof(IsAssignableFromTypes.I1).IsInstanceOfType(new IsAssignableFromTypes.D2<int>()), "#35");
            Assert.False(typeof(IsAssignableFromTypes.C2<string>).IsInstanceOfType(new IsAssignableFromTypes.D3()), "#36");
            Assert.True(typeof(IsAssignableFromTypes.C2<int>).IsInstanceOfType(new IsAssignableFromTypes.D3()), "#37");
            Assert.False(typeof(IsAssignableFromTypes.I2<int>).IsInstanceOfType(new IsAssignableFromTypes.D3()), "#38");
            Assert.True(typeof(IsAssignableFromTypes.I2<string>).IsInstanceOfType(new IsAssignableFromTypes.D3()), "#39");
            Assert.True(typeof(IsAssignableFromTypes.I1).IsInstanceOfType(new IsAssignableFromTypes.D4()), "#40");
            Assert.True(typeof(IsAssignableFromTypes.I3).IsInstanceOfType(new IsAssignableFromTypes.D4()), "#41");
            Assert.True(typeof(IsAssignableFromTypes.I4).IsInstanceOfType(new IsAssignableFromTypes.D4()), "#42");
            Assert.True(typeof(IsAssignableFromTypes.I1).IsInstanceOfType(new IsAssignableFromTypes.X2()), "#43");
            Assert.False(typeof(IsAssignableFromTypes.C2<>).IsInstanceOfType(new IsAssignableFromTypes.D3()), "#44");
            Assert.False(typeof(E1).IsInstanceOfType(new E2()), "#45");
            Assert.True(typeof(int).IsInstanceOfType(new E1()), "#46");
            Assert.True(typeof(object).IsInstanceOfType(new E1()), "#47");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y1<IsAssignableFromTypes.X1>()), "#48");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y1<IsAssignableFromTypes.X1>()), "#49");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y1X1()), "#50");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y1<IsAssignableFromTypes.X1>()), "#51");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y1X1()), "#52");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y1<IsAssignableFromTypes.X2>()), "#53");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y1X2()), "#54");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y1<IsAssignableFromTypes.X2>()), "#55");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y1X2()), "#56");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y2<IsAssignableFromTypes.X1>()), "#57");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y2<IsAssignableFromTypes.X1>()), "#58");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y2X1()), "#59");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y2<IsAssignableFromTypes.X1>()), "#60");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y2X1()), "#61");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y2<IsAssignableFromTypes.X2>()), "#62");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y2X2()), "#63");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y2<IsAssignableFromTypes.X2>()), "#64");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y2X2()), "#65");
            Assert.False(typeof(IsAssignableFromTypes.I1).IsInstanceOfType(new IsAssignableFromTypes.Y3<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#66");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y3<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#67");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y3X1X1()), "#68");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y3<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>()), "#69");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y3X1X2()), "#70");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y3<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>()), "#71");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y3X2X1()), "#72");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y3<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#73");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y3X2X2()), "#74");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y3<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#75");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y3X1X1()), "#76");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y3<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>()), "#77");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y3X1X2()), "#78");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y3<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>()), "#79");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y3X2X1()), "#80");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y3<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#81");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y3X2X2()), "#82");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y3<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#83");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y3X1X1()), "#84");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y3<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>()), "#85");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y3X1X2()), "#86");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y3<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>()), "#87");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y3X2X1()), "#88");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y3<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#89");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y3X2X2()), "#90");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y3<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#91");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y3X1X1()), "#92");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y3<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>()), "#93");
            Assert.False(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y3X1X2()), "#94");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y3<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>()), "#95");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y3X2X1()), "#96");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y3<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#97");
            Assert.True(typeof(IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y3X2X2()), "#98");
            Assert.True(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y4<string, IsAssignableFromTypes.X1>()), "#99");
            Assert.False(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y4<string, IsAssignableFromTypes.X1>()), "#100");
            Assert.False(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y4<object, IsAssignableFromTypes.X1>()), "#101");
            Assert.True(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y4<object, IsAssignableFromTypes.X1>()), "#102");
            Assert.False(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y4<string, IsAssignableFromTypes.X1>()), "#103");
            Assert.False(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y4<string, IsAssignableFromTypes.X1>()), "#104");
            Assert.False(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y4<object, IsAssignableFromTypes.X1>()), "#105");
            Assert.False(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y4<object, IsAssignableFromTypes.X1>()), "#106");
            Assert.True(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y4<string, IsAssignableFromTypes.X2>()), "#107");
            Assert.False(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y4<string, IsAssignableFromTypes.X2>()), "#108");
            Assert.False(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y4<object, IsAssignableFromTypes.X2>()), "#109");
            Assert.True(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X1>).IsInstanceOfType(new IsAssignableFromTypes.Y4<object, IsAssignableFromTypes.X2>()), "#110");
            Assert.True(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y4<string, IsAssignableFromTypes.X2>()), "#111");
            Assert.False(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y4<string, IsAssignableFromTypes.X2>()), "#112");
            Assert.False(typeof(IsAssignableFromTypes.I9<string, IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y4<object, IsAssignableFromTypes.X2>()), "#113");
            Assert.True(typeof(IsAssignableFromTypes.I9<object, IsAssignableFromTypes.X2>).IsInstanceOfType(new IsAssignableFromTypes.Y4<object, IsAssignableFromTypes.X2>()), "#114");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I6<IsAssignableFromTypes.X1>>).IsInstanceOfType(new IsAssignableFromTypes.Y5<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#115");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I7<IsAssignableFromTypes.X1>>).IsInstanceOfType(new IsAssignableFromTypes.Y5<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#116");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I6<IsAssignableFromTypes.X2>>).IsInstanceOfType(new IsAssignableFromTypes.Y5<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#117");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I7<IsAssignableFromTypes.X2>>).IsInstanceOfType(new IsAssignableFromTypes.Y5<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#118");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>>).IsInstanceOfType(new IsAssignableFromTypes.Y5<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#119");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>>).IsInstanceOfType(new IsAssignableFromTypes.Y5<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#120");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>>).IsInstanceOfType(new IsAssignableFromTypes.Y5<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#121");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>>).IsInstanceOfType(new IsAssignableFromTypes.Y5<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#122");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I10<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>>).IsInstanceOfType(new IsAssignableFromTypes.Y5<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#123");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I10<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>>).IsInstanceOfType(new IsAssignableFromTypes.Y5<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#124");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I10<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>>).IsInstanceOfType(new IsAssignableFromTypes.Y5<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#125");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I10<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>>).IsInstanceOfType(new IsAssignableFromTypes.Y5<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#126");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I6<IsAssignableFromTypes.X1>>).IsInstanceOfType(new IsAssignableFromTypes.Y5<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#127");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I7<IsAssignableFromTypes.X1>>).IsInstanceOfType(new IsAssignableFromTypes.Y5<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#128");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I6<IsAssignableFromTypes.X2>>).IsInstanceOfType(new IsAssignableFromTypes.Y5<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#129");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I7<IsAssignableFromTypes.X2>>).IsInstanceOfType(new IsAssignableFromTypes.Y5<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#130");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>>).IsInstanceOfType(new IsAssignableFromTypes.Y5<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#131");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>>).IsInstanceOfType(new IsAssignableFromTypes.Y5<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#132");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>>).IsInstanceOfType(new IsAssignableFromTypes.Y5<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#133");
            Assert.True(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>>).IsInstanceOfType(new IsAssignableFromTypes.Y5<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#134");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I10<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>>).IsInstanceOfType(new IsAssignableFromTypes.Y5<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#135");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I10<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>>).IsInstanceOfType(new IsAssignableFromTypes.Y5<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#136");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I10<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>>).IsInstanceOfType(new IsAssignableFromTypes.Y5<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#137");
            Assert.False(typeof(IsAssignableFromTypes.I6<IsAssignableFromTypes.I10<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>>).IsInstanceOfType(new IsAssignableFromTypes.Y5<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#138");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I6<IsAssignableFromTypes.X1>>).IsInstanceOfType(new IsAssignableFromTypes.Y6<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#139");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I7<IsAssignableFromTypes.X1>>).IsInstanceOfType(new IsAssignableFromTypes.Y6<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#140");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I6<IsAssignableFromTypes.X2>>).IsInstanceOfType(new IsAssignableFromTypes.Y6<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#141");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I7<IsAssignableFromTypes.X2>>).IsInstanceOfType(new IsAssignableFromTypes.Y6<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#142");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>>).IsInstanceOfType(new IsAssignableFromTypes.Y6<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#143");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>>).IsInstanceOfType(new IsAssignableFromTypes.Y6<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#144");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>>).IsInstanceOfType(new IsAssignableFromTypes.Y6<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#145");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>>).IsInstanceOfType(new IsAssignableFromTypes.Y6<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#146");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I10<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>>).IsInstanceOfType(new IsAssignableFromTypes.Y6<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#147");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I10<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>>).IsInstanceOfType(new IsAssignableFromTypes.Y6<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#148");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I10<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>>).IsInstanceOfType(new IsAssignableFromTypes.Y6<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#149");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I10<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>>).IsInstanceOfType(new IsAssignableFromTypes.Y6<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>()), "#150");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I6<IsAssignableFromTypes.X1>>).IsInstanceOfType(new IsAssignableFromTypes.Y6<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#151");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I7<IsAssignableFromTypes.X1>>).IsInstanceOfType(new IsAssignableFromTypes.Y6<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#152");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I6<IsAssignableFromTypes.X2>>).IsInstanceOfType(new IsAssignableFromTypes.Y6<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#153");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I7<IsAssignableFromTypes.X2>>).IsInstanceOfType(new IsAssignableFromTypes.Y6<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#154");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>>).IsInstanceOfType(new IsAssignableFromTypes.Y6<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#155");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I8<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>>).IsInstanceOfType(new IsAssignableFromTypes.Y6<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#156");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>>).IsInstanceOfType(new IsAssignableFromTypes.Y6<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#157");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I8<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>>).IsInstanceOfType(new IsAssignableFromTypes.Y6<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#158");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I10<IsAssignableFromTypes.X1, IsAssignableFromTypes.X1>>).IsInstanceOfType(new IsAssignableFromTypes.Y6<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#159");
            Assert.False(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I10<IsAssignableFromTypes.X1, IsAssignableFromTypes.X2>>).IsInstanceOfType(new IsAssignableFromTypes.Y6<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#160");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I10<IsAssignableFromTypes.X2, IsAssignableFromTypes.X1>>).IsInstanceOfType(new IsAssignableFromTypes.Y6<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#161");
            Assert.True(typeof(IsAssignableFromTypes.I7<IsAssignableFromTypes.I10<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>>).IsInstanceOfType(new IsAssignableFromTypes.Y6<IsAssignableFromTypes.X2, IsAssignableFromTypes.X2>()), "#162");
            Assert.False(typeof(object).IsInstanceOfType(null), "#163");
        }

        public class BaseUnnamedConstructorWithoutArgumentsTypes
        {
            public class B
            {
                public string messageB;

                public B()
                {
                    messageB = "X";
                }
            }

            public class D : B
            {
                public string messageD;

                public D()
                {
                    messageD = "Y";
                }
            }
        }

        [Test]
        public void InvokingBaseUnnamedConstructorWithoutArgumentsWorks()
        {
            var d = new BaseUnnamedConstructorWithoutArgumentsTypes.D();
            Assert.AreEqual("X|Y", d.messageB + "|" + d.messageD);
        }

        public class BaseUnnamedConstructorWithArgumentsTypes
        {
            public class B
            {
                public string messageB;

                public B(int x, int y)
                {
                    messageB = x + " " + y;
                }
            }

            public class D : B
            {
                public string messageD;

                public D(int x, int y) : base(x + 1, y + 1)
                {
                    messageD = x + " " + y;
                }
            }
        }

        [Test]
        public void InvokingBaseUnnamedConstructorWithArgumentsWorks()
        {
            var d = new BaseUnnamedConstructorWithArgumentsTypes.D(5, 8);
            Assert.AreEqual("6 9|5 8", d.messageB + "|" + d.messageD);
        }

        public class BaseNamedConstructorWithoutArgumentsTypes
        {
            public class B
            {
                public string messageB;

                public B()
                {
                    messageB = "X";
                }
            }

            public class D : B
            {
                public string messageD;

                public D()
                {
                    messageD = "Y";
                }
            }
        }

        [Test]
        public void InvokingBaseNamedConstructorWithoutArgumentsWorks()
        {
            var d = new BaseNamedConstructorWithoutArgumentsTypes.D();
            Assert.AreEqual("X|Y", d.messageB + "|" + d.messageD);
        }

        public class BaseNamedConstructorWithArgumentsTypes
        {
            public class B
            {
                public string messageB;

                public B(int x, int y)
                {
                    messageB = x + " " + y;
                }
            }

            public class D : B
            {
                public string messageD;

                public D(int x, int y) : base(x + 1, y + 1)
                {
                    messageD = x + " " + y;
                }
            }
        }

        [Test]
        public void InvokingBaseNamedConstructorWithArgumentsWorks()
        {
            var d = new BaseNamedConstructorWithArgumentsTypes.D(5, 8);
            Assert.AreEqual("6 9|5 8", d.messageB + "|" + d.messageD);
        }

        public class ConstructingInstanceWithNamedConstructorTypes
        {
            public class D
            {
                public virtual string GetMessage()
                {
                    return "The message " + f;
                }

                private string f;

                public D()
                {
                    f = "from ctor";
                }
            }

            public class E : D
            {
                public override string GetMessage()
                {
                    return base.GetMessage() + g;
                }

                private string g;

                public E()
                {
                    g = " and derived ctor";
                }
            }
        }

        [Test]
        public void ConstructingInstanceWithNamedConstructorWorks()
        {
            var d = new ConstructingInstanceWithNamedConstructorTypes.D();
            Assert.AreEqual(typeof(ConstructingInstanceWithNamedConstructorTypes.D), d.GetType());
            Assert.True((object)d is ConstructingInstanceWithNamedConstructorTypes.D);
            Assert.AreEqual("The message from ctor", d.GetMessage());
        }

        [Test]
        public void ConstructingInstanceWithNamedConstructorWorks2()
        {
            var d = new ConstructingInstanceWithNamedConstructorTypes.E();
            var t = d.GetType();
            Assert.AreEqual(typeof(ConstructingInstanceWithNamedConstructorTypes.E), t, "#1");
            Assert.AreEqual(typeof(ConstructingInstanceWithNamedConstructorTypes.D), t.BaseType, "#2");
            Assert.True((object)d is ConstructingInstanceWithNamedConstructorTypes.E, "#3");
            Assert.True((object)d is ConstructingInstanceWithNamedConstructorTypes.D, "#4");
            Assert.AreEqual("The message from ctor and derived ctor", d.GetMessage());
        }

        public class BaseMethodInvocationTypes
        {
            public class B
            {
                public virtual int F(int x, int y)
                {
                    return x - y;
                }

                public virtual int G<T>(int x, int y)
                {
                    return x - y;
                }
            }

            public class D : B
            {
                public override int F(int x, int y)
                {
                    return x + y;
                }

                public override int G<T>(int x, int y)
                {
                    return x + y;
                }

                public int DoIt(int x, int y)
                {
                    return base.F(x, y);
                }

                public int DoItGeneric(int x, int y)
                {
                    return base.G<string>(x, y);
                }
            }
        }

        [Test]
        public void InvokingBaseMethodWorks()
        {
            Assert.AreEqual(2, new BaseMethodInvocationTypes.D().DoIt(5, 3));
        }

        [Test]
        public void InvokingGenericBaseMethodWorks()
        {
            Assert.AreEqual(2, new BaseMethodInvocationTypes.D().DoItGeneric(5, 3));
        }

        public class MethodGroupConversionTypes
        {
            public class C
            {
                private int m;

                public int F(int x, int y)
                {
                    return x + y + m;
                }

                public string G<T>(int x, int y)
                {
                    return x + y + m + typeof(T).Name;
                }

                public C(int m)
                {
                    this.m = m;
                }

                public Func<int, int, int> GetF()
                {
                    return F;
                }

                public Func<int, int, string> GetG()
                {
                    return G<string>;
                }
            }

            public class B
            {
                public int m;

                public virtual int F(int x, int y)
                {
                    return x + y + m;
                }

                public virtual string G<T>(int x, int y)
                {
                    return x + y + m + typeof(T).Name;
                }

                public B(int m)
                {
                    this.m = m;
                }
            }

            public class D : B
            {
                public override int F(int x, int y)
                {
                    return x - y - m;
                }

                public override string G<T>(int x, int y)
                {
                    return x - y - m + typeof(T).Name;
                }

                public Func<int, int, int> GetF()
                {
                    return base.F;
                }

                public Func<int, int, string> GetG()
                {
                    return base.G<string>;
                }

                public D(int m) : base(m)
                {
                }
            }
        }

        [Test]
        public void MethodGroupConversionWorks()
        {
            var f = new MethodGroupConversionTypes.C(4).GetF();
            Assert.AreEqual(12, f(5, 3));
        }

        [Test]
        public void MethodGroupConversionOnGenericMethodWorks()
        {
            var f = new MethodGroupConversionTypes.C(4).GetG();
            Assert.AreEqual("12String", f(5, 3));
        }

        [Test]
        public void MethodGroupConversionOnBaseMethodWorks()
        {
            var f = new MethodGroupConversionTypes.D(4).GetF();
            Assert.AreEqual(12, f(3, 5));
        }

        [Test]
        public void MethodGroupConversionOnGenericBaseMethodWorks()
        {
            var g = new MethodGroupConversionTypes.C(4).GetG();
            Assert.AreEqual("12String", g(5, 3));
        }

        [Test]
        public void ImportedInterfaceAppearsAsObjectWhenUsedAsGenericArgument()
        {
            Assert.AreEqual(typeof(BX<object>), typeof(BX<IImported>));
        }

        [Test]
        public void FalseIsFunctionShouldReturnFalse()
        {
            Assert.False((object)false is Delegate);
        }

        [Test]
        public void CastingUndefinedToOtherTypeShouldReturnUndefined()
        {
            Assert.AreEqual("undefined", Script.TypeOf((C)Script.Undefined));
        }

        [Test]
        public void NonSerializableTypeCanInheritFromSerializableType()
        {
            var d = new DS(42);
            Assert.AreEqual(42, d.X, "d.X");
            Assert.AreEqual(42, d.GetX(), "d.GetX");
        }

        [Test]
        public void InheritingFromRecordWorks()
        {
            var c = new CS2() { X = 42 };
            Assert.AreEqual(42, c.X);
        }

        [Test]
        public void InstanceOfWorksForSerializableTypesWithCustomTypeCheckCode()
        {
            object o1 = new { x = 1 };
            object o2 = new { x = 1, y = 2 };
            Assert.False(typeof(DS2).IsInstanceOfType(o1), "o1 should not be of type");
            //Assert.True (typeof(DS2).IsInstanceOfType(o2), "o2 should be of type");
        }

        [Test]
        public void StaticGetTypeMethodWorks()
        {
            Assert.AreEqual(typeof(TypeSystemTests), Type.GetType("Bridge.ClientTest.Reflection.TypeSystemTests"), "#1");
            Assert.AreEqual(typeof(TypeSystemTests), Type.GetType("Bridge.ClientTest.Reflection.TypeSystemTests, Bridge.ClientTest"), "#2");
            Assert.AreEqual(null, Type.GetType("Bridge.ClientTest.Reflection.TypeSystemTests, mscorlib"), "#3");
            Assert.AreEqual(typeof(Dictionary<,>), Type.GetType("System.Collections.Generic.Dictionary$2, mscorlib"), "#4");
            Assert.AreEqual(null, Type.GetType("System.Collections.Generic.Dictionary$2, NotLoaded.Assembly"), "#5");
        }

        [Test]
        public void StaticGetTypeMethodWithGenericsWorks()
        {
            Assert.AreEqual(typeof(Dictionary<string, TypeSystemTests>), Type.GetType("System.Collections.Generic.Dictionary$2[[System.String, mscorlib],[Bridge.ClientTest.Reflection.TypeSystemTests, Bridge.ClientTest]]"), "#1");
            Assert.AreEqual(typeof(Dictionary<TypeSystemTests, string>), Type.GetType("System.Collections.Generic.Dictionary$2[[Bridge.ClientTest.Reflection.TypeSystemTests, Bridge.ClientTest],[System.String, mscorlib]]"), "#2");
            Assert.AreEqual(typeof(Dictionary<int, TypeSystemTests>), Type.GetType("System.Collections.Generic.Dictionary$2[[System.Int32, mscorlib],[Bridge.ClientTest.Reflection.TypeSystemTests, Bridge.ClientTest]]"), "#3");
            Assert.AreEqual(typeof(Dictionary<string, TypeSystemTests>), Type.GetType("System.Collections.Generic.Dictionary$2[[System.String, mscorlib],[Bridge.ClientTest.Reflection.TypeSystemTests, Bridge.ClientTest]], mscorlib"), "#4");
            Assert.AreEqual(typeof(Dictionary<TypeSystemTests, string>), Type.GetType("System.Collections.Generic.Dictionary$2[[Bridge.ClientTest.Reflection.TypeSystemTests, Bridge.ClientTest],[System.String, mscorlib]], mscorlib"), "#5");
            Assert.AreEqual(typeof(Dictionary<TypeSystemTests, TypeSystemTests>), Type.GetType("System.Collections.Generic.Dictionary$2[[Bridge.ClientTest.Reflection.TypeSystemTests, Bridge.ClientTest],[Bridge.ClientTest.Reflection.TypeSystemTests, Bridge.ClientTest]], mscorlib"), "#6");
            Assert.AreEqual(typeof(Dictionary<string, Dictionary<Dictionary<int, DateTime>, Dictionary<int, double>>>), Type.GetType("System.Collections.Generic.Dictionary$2[[System.String, mscorlib],[System.Collections.Generic.Dictionary$2[[System.Collections.Generic.Dictionary$2[[System.Int32, mscorlib],[System.DateTime, mscorlib]], mscorlib],[System.Collections.Generic.Dictionary$2[[System.Int32, mscorlib],[System.Double]], mscorlib]], mscorlib]], mscorlib"), "#7");
        }

        [Enum(Emit.StringName)]
        public enum NamedValuesEnum
        {
            FirstValue,
            SecondValue,
        }

        [Enum(Emit.StringName)]
        public enum ImportedNamedValuesEnum
        {
            FirstValue,
            SecondValue,
        }

        private bool DoesItThrow(Action a)
        {
            try
            {
                a();
                return false;
            }
            catch (Exception)
            {
                return true;
            }
        }

        private bool IsOfType<T>(object o)
        {
            return o is T;
        }

        private T GetDefault<T>()
        {
            return default(T);
        }

        [Test]
        public void CastingToNamedValuesEnumCastsToString()
        {
            Assert.True((object)NamedValuesEnum.FirstValue is NamedValuesEnum, "#1");
            Assert.True((object)"firstValue" is NamedValuesEnum, "#2");
            Assert.False((object)(int)0 is NamedValuesEnum, "#3");
#pragma warning disable 219
            Assert.False(DoesItThrow(() => { var x = (NamedValuesEnum)(object)"firstValue"; }), "#4");
            Assert.True(DoesItThrow(() => { var x = (NamedValuesEnum)(object)0; }), "#5");
#pragma warning restore 219

            Assert.NotNull((object)NamedValuesEnum.FirstValue as NamedValuesEnum?, "#6");
            Assert.NotNull((object)"firstValue" as NamedValuesEnum?, "#7");
            Assert.Null((object)(int)0 as NamedValuesEnum?, "#8");

            Assert.True(IsOfType<NamedValuesEnum>((object)NamedValuesEnum.FirstValue), "#9");
            Assert.True(IsOfType<NamedValuesEnum>("firstValue"), "#10");
            Assert.False(IsOfType<NamedValuesEnum>(0), "#11");
        }

        [Test]
        public void CastingToImportedNamedValuesEnumCastsToString()
        {
            Assert.True((object)ImportedNamedValuesEnum.FirstValue is ImportedNamedValuesEnum, "#1");
            Assert.True((object)"firstValue" is ImportedNamedValuesEnum, "#2");
            Assert.False((object)(int)0 is ImportedNamedValuesEnum, "#3");
#pragma warning disable 219
            Assert.False(DoesItThrow(() => { var x = (ImportedNamedValuesEnum)(object)"firstValue"; }), "#4");
            Assert.True(DoesItThrow(() => { var x = (ImportedNamedValuesEnum)(object)0; }), "#5");
#pragma warning restore 219

            Assert.NotNull((object)ImportedNamedValuesEnum.FirstValue as ImportedNamedValuesEnum?, "#6");
            Assert.NotNull((object)"firstValue" as ImportedNamedValuesEnum?, "#7");
            Assert.Null((object)(int)0 as ImportedNamedValuesEnum?, "#8");
        }

        [Test]
        public void DefaultValueOfNamedValuesEnumIsNull()
        {
            Assert.Null(default(NamedValuesEnum), "#1");
            Assert.Null(GetDefault<NamedValuesEnum>(), "#2");
        }

        [Test]
        public void DefaultValueOfImportedNamedValuesEnumIsNull()
        {
            Assert.Null(default(ImportedNamedValuesEnum), "#1");
            Assert.Null(GetDefault<ImportedNamedValuesEnum>(), "#2");
        }
    }
}