using Bridge.Test.NUnit;
using System;
using System.Reflection;

namespace Bridge.ClientTest.Batch1.Reflection
{
    [Category(Constants.MODULE_REFLECTION)]
    [TestFixture(TestNameFormat = "Reflection - Attribute {0}")]
    public class AttributeTests
    {
        private class A1 : Attribute
        {
            public int V
            {
                get;
                protected set;
            }

            public A1(int v)
            {
                this.V = v;
            }
        }

        [AttributeUsage(AttributeTargets.All, Inherited = false)]
        private class A2 : Attribute
        {
        }

        private class A3 : A1
        {
            public A3(int v) : base(v)
            {
                this.V = v;
            }
        }

        public sealed class A4 : Attribute
        {
            public A4(string id)
            {
                Id = id;
            }

            public string Id
            {
                get;
            }
        }

        private class C1
        {
            [A1(10), A2]
            public void KeepSomething([A1(100), A2] int i)
            {
            }

            [A1(1), A3(3)]
            public void DoSomething([A1(1000), A3(3000)] int i)
            {
            }
        }

        public enum E1
        {
            [A4("URL")]
            Url = 0,

            [A4("EMAIL")]
            Email = 1,
        }

        [Test]
        public void GetCustomAttributesForAssemblyWorks()
        {
            var asm = Assembly.GetExecutingAssembly();
            foreach (var a in new[]
                {
                    Attribute.GetCustomAttributes(asm),
                    Attribute.GetCustomAttributes(asm, true),
                    Attribute.GetCustomAttributes(asm, false)
                })
            {
                Assert.False(a.Some(x => x.GetType().Name == "A1Attribute"));
                var a2 = a.Filter(x => x is AssemblyAttributes.A2Attribute);
                Assert.AreEqual(a2.Length, 1);
                Assert.True(((AssemblyAttributes.A2Attribute)a2[0]).X == 64);
                Assert.True(((AssemblyAttributes.A2Attribute)a2[0]).P == 23);

                var a3 = a.Filter(x => x is AssemblyAttributes.A3Attribute);
                Assert.AreEqual(a3.Length, 1);
                Assert.True(((AssemblyAttributes.A3Attribute)a3[0]).X == 15);
                Assert.True(((AssemblyAttributes.A3Attribute)a3[0]).P == 45);
            }

            foreach (var a in new[]
                {
                    Attribute.GetCustomAttributes(asm, typeof(AssemblyAttributes.A2Attribute)),
                    Attribute.GetCustomAttributes(asm, typeof(AssemblyAttributes.A2Attribute), true),
                    Attribute.GetCustomAttributes(asm, typeof(AssemblyAttributes.A2Attribute), false)
                })
            {
                Assert.AreEqual(a.Length, 1);
                Assert.True(((AssemblyAttributes.A2Attribute)a[0]).X == 64);
                Assert.True(((AssemblyAttributes.A2Attribute)a[0]).P == 23);
            }

            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes((Assembly)null); });
            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes((Assembly)null, true); });
            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes((Assembly)null, false); });
            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes((Assembly)null, null); });
            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes((Assembly)null, null, false); });
            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes((Assembly)null, null, true); });
            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes(asm, null); });
            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes(asm, null, false); });
            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes(asm, null, true); });
        }

        [Test]
        public void GetCustomAttributesForMemberInfoWorks()
        {
            var member1 = new C1().GetType().GetMember("DoSomething")[0];

            var attributes1 = Attribute.GetCustomAttributes(member1);

            A1 a1 = null;
            A3 a3 = null;

            Assert.AreEqual(attributes1.Length, 2);
            a1 = attributes1[0] as A1;
            a3 = attributes1[1] as A3;
            Assert.NotNull(a1);
            Assert.NotNull(a3);
            Assert.AreEqual(1, a1.V);
            Assert.AreEqual(3, a3.V);

            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes((MemberInfo)null); });
        }

        [Test]
        public void GetCustomAttributesForMemberInfoInheritTrueWorks()
        {
            var member1 = new C1().GetType().GetMember("DoSomething")[0];

            var attributes1 = Attribute.GetCustomAttributes(member1, true);

            A1 a1 = null;
            A3 a3 = null;

            Assert.AreEqual(attributes1.Length, 2);
            a1 = attributes1[0] as A1;
            a3 = attributes1[1] as A3;
            Assert.NotNull(a1);
            Assert.NotNull(a3);
            Assert.AreEqual(1, a1.V);
            Assert.AreEqual(3, a3.V);

            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes((MemberInfo)null, true); });
        }

        [Test]
        public void GetCustomAttributesForMemberInfoInheritFalseWorks()
        {
            var member1 = new C1().GetType().GetMember("DoSomething")[0];

            var attributes1 = Attribute.GetCustomAttributes(member1, false);

            A1 a1 = null;
            A3 a3 = null;

            Assert.AreEqual(attributes1.Length, 2);
            a1 = attributes1[0] as A1;
            a3 = attributes1[1] as A3;
            Assert.NotNull(a1);
            Assert.NotNull(a3);
            Assert.AreEqual(1, a1.V);
            Assert.AreEqual(3, a3.V);

            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes((MemberInfo)null, false); });
        }

        [Test]
        public void GetCustomAttributesForMemberInfoTypeWorks()
        {
            var member1 = new C1().GetType().GetMember("KeepSomething")[0];

            var attributes1 = Attribute.GetCustomAttributes(member1, typeof(A1));

            A1 a1 = null;

            Assert.AreEqual(attributes1.Length, 1);
            a1 = attributes1[0] as A1;
            Assert.NotNull(a1);
            Assert.AreEqual(10, a1.V);

            var attributes2 = Attribute.GetCustomAttributes(member1, typeof(A2));

            A2 a2 = null;

            Assert.AreEqual(attributes2.Length, 1);
            a2 = attributes2[0] as A2;
            Assert.NotNull(a2);

            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes((MemberInfo)null, null); });
            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes(member1, null); });
        }

        [Test]
        public void GetCustomAttributesForMemberInfoTypeInheritFalseWorks()
        {
            var member1 = new C1().GetType().GetMember("DoSomething")[0];

            var attributes1 = Attribute.GetCustomAttributes(member1, typeof(A1), false);

            A1 a1 = null;
            A3 a3 = null;

            Assert.AreEqual(attributes1.Length, 2);
            a1 = attributes1[0] as A1;
            a3 = attributes1[1] as A3;
            Assert.NotNull(a1);
            Assert.NotNull(a3);
            Assert.AreEqual(1, a1.V);
            Assert.AreEqual(3, a3.V);

            var attributes2 = Attribute.GetCustomAttributes(member1, typeof(A3), false);

            a3 = null;

            Assert.AreEqual(attributes2.Length, 1);
            a3 = attributes2[0] as A3;
            Assert.NotNull(a3);
            Assert.AreEqual(3, a3.V);

            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes((MemberInfo)null, null, false); });
            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes(member1, null, false); });
        }

        [Test]
        public void GetCustomAttributesForMemberInfoTypeInheritTrueWorks()
        {
            var member1 = new C1().GetType().GetMember("DoSomething")[0];

            var attributes1 = Attribute.GetCustomAttributes(member1, typeof(A1), true);

            A1 a1 = null;
            A3 a3 = null;

            Assert.AreEqual(attributes1.Length, 2);
            a1 = attributes1[0] as A1;
            a3 = attributes1[1] as A3;
            Assert.NotNull(a1);
            Assert.NotNull(a3);
            Assert.AreEqual(1, a1.V);
            Assert.AreEqual(3, a3.V);

            var attributes2 = Attribute.GetCustomAttributes(member1, typeof(A3), true);

            a3 = null;

            Assert.AreEqual(attributes2.Length, 1);
            a3 = attributes2[0] as A3;
            Assert.NotNull(a3);
            Assert.AreEqual(3, a3.V);

            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes((MemberInfo)null, null, true); });
            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes(member1, null, true); });
        }

        [Test]
        public void GetCustomAttributesForParameterInfoWorks()
        {
            var t = typeof(C1);
            var m = t.GetMethod("DoSomething");
            var parameter1 = m.GetParameters()[0];

            var attributes1 = Attribute.GetCustomAttributes(parameter1);

            A1 a1 = null;
            A3 a3 = null;

            Assert.AreEqual(attributes1.Length, 2);
            a1 = attributes1[0] as A1;
            a3 = attributes1[1] as A3;
            Assert.NotNull(a1);
            Assert.NotNull(a3);
            Assert.AreEqual(1000, a1.V);
            Assert.AreEqual(3000, a3.V);

            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes((ParameterInfo)null); });
        }

        [Test]
        public void GetCustomAttributesForParameterInfoInheritTrueWorks()
        {
            var parameter1 = new C1().GetType().GetMethod("DoSomething").GetParameters()[0];

            var attributes1 = Attribute.GetCustomAttributes(parameter1, true);

            A1 a1 = null;
            A3 a3 = null;

            Assert.AreEqual(attributes1.Length, 2);
            a1 = attributes1[0] as A1;
            a3 = attributes1[1] as A3;
            Assert.NotNull(a1);
            Assert.NotNull(a3);
            Assert.AreEqual(1000, a1.V);
            Assert.AreEqual(3000, a3.V);

            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes((ParameterInfo)null, true); });
        }

        [Test]
        public void GetCustomAttributesForParameterInfoInheritFalseWorks()
        {
            var parameter1 = new C1().GetType().GetMethod("DoSomething").GetParameters()[0];

            var attributes1 = Attribute.GetCustomAttributes(parameter1, false);

            A1 a1 = null;
            A3 a3 = null;

            Assert.AreEqual(attributes1.Length, 2);
            a1 = attributes1[0] as A1;
            a3 = attributes1[1] as A3;
            Assert.NotNull(a1);
            Assert.NotNull(a3);
            Assert.AreEqual(1000, a1.V);
            Assert.AreEqual(3000, a3.V);

            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes((ParameterInfo)null, false); });
        }

        [Test]
        public void GetCustomAttributesForParameterInfoTypeWorks()
        {
            var parameter1 = new C1().GetType().GetMethod("KeepSomething").GetParameters()[0];

            var attributes1 = Attribute.GetCustomAttributes(parameter1, typeof(A1));

            A1 a1 = null;

            Assert.AreEqual(attributes1.Length, 1);
            a1 = attributes1[0] as A1;
            Assert.NotNull(a1);
            Assert.AreEqual(100, a1.V);

            var attributes2 = Attribute.GetCustomAttributes(parameter1, typeof(A2));

            A2 a2 = null;

            Assert.AreEqual(attributes2.Length, 1);
            a2 = attributes2[0] as A2;
            Assert.NotNull(a2);

            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes((ParameterInfo)null, null); });
            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes(parameter1, null); });
        }

        [Test]
        public void GetCustomAttributesForParameterInfoTypeInheritFalseWorks()
        {
            var parameter1 = new C1().GetType().GetMethod("DoSomething").GetParameters()[0];

            var attributes1 = Attribute.GetCustomAttributes(parameter1, typeof(A1), false);

            A1 a1 = null;
            A3 a3 = null;

            Assert.AreEqual(attributes1.Length, 2);
            a1 = attributes1[0] as A1;
            a3 = attributes1[1] as A3;
            Assert.NotNull(a1);
            Assert.NotNull(a3);
            Assert.AreEqual(1000, a1.V);
            Assert.AreEqual(3000, a3.V);

            var attributes2 = Attribute.GetCustomAttributes(parameter1, typeof(A3), false);

            a3 = null;

            Assert.AreEqual(attributes2.Length, 1);
            a3 = attributes2[0] as A3;
            Assert.NotNull(a3);
            Assert.AreEqual(3000, a3.V);

            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes((ParameterInfo)null, null, false); });
            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes(parameter1, null, false); });
        }

        [Test]
        public void GetCustomAttributesForParameterInfoTypeInheritTrueWorks()
        {
            var parameter1 = new C1().GetType().GetMethod("DoSomething").GetParameters()[0];

            var attributes1 = Attribute.GetCustomAttributes(parameter1, typeof(A1), true);

            A1 a1 = null;
            A3 a3 = null;

            Assert.AreEqual(attributes1.Length, 2);
            a1 = attributes1[0] as A1;
            a3 = attributes1[1] as A3;
            Assert.NotNull(a1);
            Assert.NotNull(a3);
            Assert.AreEqual(1000, a1.V);
            Assert.AreEqual(3000, a3.V);

            var attributes2 = Attribute.GetCustomAttributes(parameter1, typeof(A3), true);

            a3 = null;

            Assert.AreEqual(attributes2.Length, 1);
            a3 = attributes2[0] as A3;
            Assert.NotNull(a3);
            Assert.AreEqual(3000, a3.V);

            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes((ParameterInfo)null, null, true); });
            Assert.Throws<ArgumentNullException>(() => { Attribute.GetCustomAttributes(parameter1, null, true); });
        }

        [Test]
        public void GetCustomAttributesForEnumMember()
        {
            Assert.True(IsEnum(E1.Url));
            Assert.True(IsEnum(E1.Email));

            Assert.True(E1.Url.GetType().IsEnum);
            Assert.True(E1.Email.GetType().IsEnum);
        }

        public static bool IsEnum(Enum e)
        {
            return e.GetType().IsEnum;
        }
    }
}