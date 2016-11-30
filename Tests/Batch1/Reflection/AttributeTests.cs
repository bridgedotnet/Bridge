using Bridge.Test;
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
        private class A2: Attribute
        {
        }

        private class A3 : A1
        {
            public A3(int v): base(v)
            {
                this.V = v;
            }
        }



        private class C1
        {
            [A1(10), A2]
            public int KeepSomething
            {
                get; set;
            }

            [A1(1), A3(3)]
            public void DoSomething()
            {
            }
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
        }
    }
}