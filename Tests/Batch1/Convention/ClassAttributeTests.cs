using Bridge.Test.NUnit;
using System;
using Bridge;
using Bridge.Html5;

namespace Bridge.ClientTest.ConventionTests.Class
{
    [Convention(Notation = Notation.CamelCase)]
    public class Class1
    {
        public int Field1;

        [Convention(Notation = Notation.None)]
        public int Field2;
    }

    [Convention(Target = ConventionTarget.Member, Notation = Notation.LowerCase)]
    public class Class2
    {
        public int FIELD1;

        public void METHOD1()
        {
        }

        public int PROP1
        {
            get; set;
        }
    }

    [Convention(Target = ConventionTarget.Member, Notation = Notation.UpperCase)]
    [ObjectLiteral]
    public class Class3
    {
        public int field1;

        public int prop1
        {
            get; set;
        }
    }

    [Convention(Target = ConventionTarget.Member, Notation = Notation.LowerCase)]
    public interface I1
    {
        void Method1();

        [Convention(Notation = Notation.UpperCase)]
        void Method2();
    }

    public class Class4 : I1
    {
        public void Method1()
        {
        }

        public void Method2()
        {
        }
    }

    [Convention(Target = ConventionTarget.Member, Notation = Notation.LowerCase)]
    public class Class5
    {
        public class Class5_1
        {
            public int FIELD1;
        }
    }

    [Convention(Notation = Notation.UpperCase)]
    public class Class6
    {
        public int field1;
    }

    public class Class61 : Class6
    {
        public int field2;
    }

    public class Class7
    {
        [Convention(Notation = Notation.UpperCase)]
        public virtual int method1()
        {
            return 1;
        }
    }

    public class Class71 : Class7
    {
        public override int method1()
        {
            return 2;
        }
    }

    [Convention(Notation = Notation.UpperCase)]
    public class Class8
    {
        public int field1;

        [Convention(Notation = Notation.LowerCase)]
        public int Field2;

        public class NestedClass81
        {
            public int field1;

            [Convention(Notation = Notation.LowerCase)]
            public int Field2;
        }

        [Convention(Notation = Notation.LowerCase)]
        public class NestedClass82
        {
            public int Field1;

            [Convention(Notation = Notation.UpperCase)]
            public int Field2;
        }
    }

    [Convention(Notation.UpperCase, ConventionTarget.Class)]
    [Convention(Notation.LowerCase, ConventionTarget.External)]
    public class Class9
    {
        [External]
        public int ExternalProp91
        {
            get; set;
        }
    }

    [Convention(Target = ConventionTarget.Class, Notation = Notation.UpperCase)]
    [Convention(Target = ConventionTarget.Member, Notation = Notation.LowerCase)]
    [Convention(Target = ConventionTarget.Enum, Notation = Notation.CamelCase)]
    public enum Enum1
    {
        EnumMember1,
        enumMember2,
        ENUMMEMBER3,
        [Convention(Notation.PascalCase)]
        enumMember4,
    }

    [Convention(Member = ConventionMember.EnumItem, Notation = Notation.LowerCase)]
    public enum Enum2
    {
        EnumMember1,
        [Convention(Notation.PascalCase)]
        enumMember2,
    }

    [Convention(Notation = Notation.LowerCase, Member = ConventionMember.Const)]
    public class Class10
    {
        public const int CONST_10 = 10;

        [Convention(Notation.UpperCase)]
        public const int const_11 = 11;
    }

    [Convention(Notation = Notation.LowerCase, Member = ConventionMember.Event)]
    public class Class11
    {
        public event EventHandler<int> Event1;

        public void FireEvent1(int n)
        {
            Event1(this, n);
        }

        [Convention(Notation.UpperCase)]
        public event EventHandler<int> Event2;

        public void FireEvent2(int n)
        {
            Event2(this, n);
        }
    }

    [Convention(Accessibility = ConventionAccessibility.Internal, Notation = Notation.LowerCase)]
    [Convention(Accessibility = ConventionAccessibility.Private, Notation = Notation.CamelCase)]
    [Convention(Accessibility = ConventionAccessibility.Protected, Notation = Notation.UpperCase)]
    [Convention(Accessibility = ConventionAccessibility.ProtectedInternal, Notation = Notation.PascalCase)]
    [Convention(Accessibility = ConventionAccessibility.Public, Notation = Notation.LowerCase)]
    class Class12
    {
        internal int InternalProp
        {
            get; set;
        }

        private int PrivateProp
        {
            get; set;
        }

        public void SetPrivateProp(int i)
        {
            this.PrivateProp = i;
        }

        public int GetPrivateProp()
        {
            return this.PrivateProp;
        }

        protected int ProtectedProp
        {
            get; set;
        }

        public void SetProtectedProp(int i)
        {
            this.ProtectedProp = i;
        }

        public int GetProtectedProp()
        {
            return this.ProtectedProp;
        }

        protected internal int protectedInternalProp
        {
            get; set;
        }

        public void SetProtectedInternalProp(int i)
        {
            this.protectedInternalProp = i;
        }

        public int GetProtectedInternalProp()
        {
            return this.protectedInternalProp;
        }

        public int PublicProp
        {
            get; set;
        }

        [Convention(Notation = Notation.UpperCase)]
        internal int InternalPropOv
        {
            get; set;
        }

        [Convention(Notation = Notation.LowerCase)]
        private int PrivatePropOv
        {
            get; set;
        }

        public void SetPrivatePropOv(int i)
        {
            this.PrivatePropOv = i;
        }

        public int GetPrivatePropOv()
        {
            return this.PrivatePropOv;
        }

        [Convention(Notation = Notation.LowerCase)]
        protected int ProtectedPropOv
        {
            get; set;
        }

        public void SetProtectedPropOv(int i)
        {
            this.ProtectedPropOv = i;
        }

        public int GetProtectedPropOv()
        {
            return this.ProtectedPropOv;
        }

        [Convention(Notation = Notation.UpperCase)]
        protected internal int protectedInternalPropOv
        {
            get; set;
        }

        public void SetProtectedInternalPropOv(int i)
        {
            this.protectedInternalPropOv = i;
        }

        public int GetProtectedInternalPropOv()
        {
            return this.protectedInternalPropOv;
        }

        [Convention(Notation = Notation.UpperCase)]
        public int PublicPropOv
        {
            get; set;
        }
    }

    [Convention(Notation.UpperCase, ConventionTarget.Class)]
    [Convention(Notation.LowerCase, ConventionTarget.Anonymous)]
    public class Class13
    {
        public object GetObject(int i, int j, out int sum)
        {
            var a = new
            {
                MEMBER1 = i,
                MembeR2 = j
            };

            // Check getters work
            sum = a.MEMBER1 + a.MembeR2;

            return a;
        }
    }

    // Uncomment when ConventionTarget.Delegate implemented
    //[Convention(Notation.UpperCase, ConventionTarget.Class)]
    //[Convention(Notation.PascalCase, ConventionTarget.Delegate)]
    //public class Class14
    //{
    //    public delegate int delegate91();

    //    public delegate91 delegateProp91
    //    {
    //        get; set;
    //    }
    //}

    [Category(Constants.MODULE_CONVENTION)]
    [TestFixture(TestNameFormat = "Convention.ClassAttribute - {0}")]
    public class ClassAttributeTests
    {
        [Test]
        public static void AllTest()
        {
            var c1 = new Class1();
            Assert.AreEqual("Bridge.ClientTest.ConventionTests.Class.class1", typeof(Class1).FullName);
            Assert.AreEqual("Bridge.ClientTest.ConventionTests.Class.class1", c1.GetType().FullName);
            Assert.NotNull(Global.ToDynamic().Bridge.ClientTest.ConventionTests.Class.class1);
            Assert.NotNull(c1["field1"]);
            Assert.NotNull(c1["Field2"]);
            Assert.Null(c1["Field1"]);
            Assert.Null(c1["field2"]);
        }

        [Test]
        public static void MembersTest()
        {
            var c2 = new Class2();
            Assert.AreEqual("Bridge.ClientTest.ConventionTests.Class.Class2", typeof(Class2).FullName);
            Assert.AreEqual("Bridge.ClientTest.ConventionTests.Class.Class2", c2.GetType().FullName);
            Assert.NotNull(Global.ToDynamic().Bridge.ClientTest.ConventionTests.Class.Class2);
            Assert.NotNull(c2["field1"]);
            Assert.NotNull(c2["method1"]);
            Assert.NotNull(c2["prop1"]);
            Assert.Null(c2["FIELD1"]);
            Assert.Null(c2["METHOD1"]);
            Assert.Null(c2["PROP1"]);
        }

        [Test]
        public static void ObjectLiteralTest()
        {
            var c3 = new Class3 { field1 = 1, prop1 = 2 };
            Assert.AreEqual(1, c3["FIELD1"]);
            Assert.AreEqual(2, c3["PROP1"]);
        }

        [Test]
        public static void InterfaceMemberTest()
        {
            var c4 = new Class4();
            Assert.AreEqual("function", Script.TypeOf(c4["method1"]));
            Assert.AreEqual("function", Script.TypeOf(c4["METHOD2"]));
        }

        [Test]
        public static void InnerClassMemberTest()
        {
            var c51 = new Class5.Class5_1();
            Assert.NotNull(c51["field1"]);
            Assert.Null(c51["FIELD1"]);
        }

        [Test]
        public static void ClassAttributeInheritanceTest()
        {
            var c6 = new Class6();
            var c61 = new Class61();
            Assert.AreEqual("Bridge.ClientTest.ConventionTests.Class.CLASS6", typeof(Class6).FullName);
            Assert.AreEqual("Bridge.ClientTest.ConventionTests.Class.CLASS61", typeof(Class61).FullName);
            Assert.NotNull(Global.ToDynamic().Bridge.ClientTest.ConventionTests.Class.CLASS6);
            Assert.NotNull(Global.ToDynamic().Bridge.ClientTest.ConventionTests.Class.CLASS61);

            Assert.NotNull(c6["FIELD1"]);
            Assert.NotNull(c61["FIELD2"]);
        }

        [Test]
        public static void OverrideMemberTest()
        {
            var c7 = new Class7();
            var c71 = new Class71();

            Assert.AreEqual(1, c7.method1());
            Assert.AreEqual("function", Script.TypeOf(c7["METHOD1"]));
            Assert.AreEqual(2, c71.method1());
            Assert.AreEqual("function", Script.TypeOf(c71["METHOD1"]));
        }

        [Test]
        public static void NestedClassTest()
        {
            var c8 = new Class8();
            var c81 = new Class8.NestedClass81();
            var c82 = new Class8.NestedClass82();

            Assert.AreEqual("Bridge.ClientTest.ConventionTests.Class.CLASS8", typeof(Class8).FullName);
            Assert.NotNull(c8["FIELD1"]);
            Assert.NotNull(c8["field2"]);

            Assert.AreEqual("Bridge.ClientTest.ConventionTests.Class.CLASS8+NESTEDCLASS81", typeof(Class8.NestedClass81).FullName);
            Assert.NotNull(c81["FIELD1"]);
            Assert.NotNull(c81["field2"]);

            Assert.AreEqual("Bridge.ClientTest.ConventionTests.Class.CLASS8+nestedclass82", typeof(Class8.NestedClass82).FullName);
            Assert.NotNull(c82["field1"]);
            Assert.NotNull(c82["FIELD2"]);
        }

        [Test]
        public static void AccessibilityTest()
        {
            var c = new Class12();

            Assert.NotNull(c.As<dynamic>().internalprop);
            Assert.NotNull(c.As<dynamic>().privateProp);
            Assert.NotNull(c.As<dynamic>().PROTECTEDPROP);
            Assert.NotNull(c.As<dynamic>().ProtectedInternalProp);
            Assert.NotNull(c.As<dynamic>().publicprop);

            Assert.NotNull(c.As<dynamic>().INTERNALPROPOV);
            Assert.NotNull(c.As<dynamic>().privatepropov);
            Assert.NotNull(c.As<dynamic>().protectedpropov);
            Assert.NotNull(c.As<dynamic>().PROTECTEDINTERNALPROPOV);
            Assert.NotNull(c.As<dynamic>().PUBLICPROPOV);

            c.InternalProp = 1;
            c.SetPrivateProp(2);
            c.SetProtectedProp(3);
            c.SetProtectedInternalProp(4);
            c.PublicProp = 5;

            Assert.AreEqual(1, c.As<dynamic>().internalprop);
            Assert.AreEqual(2, c.As<dynamic>().privateProp);
            Assert.AreEqual(3, c.As<dynamic>().PROTECTEDPROP);
            Assert.AreEqual(4, c.As<dynamic>().ProtectedInternalProp);
            Assert.AreEqual(5, c.As<dynamic>().publicprop);

            Assert.AreEqual(1, c.InternalProp);
            Assert.AreEqual(2, c.GetPrivateProp());
            Assert.AreEqual(3, c.GetProtectedProp());
            Assert.AreEqual(4, c.GetProtectedInternalProp());
            Assert.AreEqual(5, c.PublicProp);

            c.InternalPropOv = 6;
            c.SetPrivatePropOv(7);
            c.SetProtectedPropOv(8);
            c.SetProtectedInternalPropOv(9);
            c.PublicPropOv = 10;

            Assert.AreEqual(6, c.As<dynamic>().INTERNALPROPOV);
            Assert.AreEqual(7, c.As<dynamic>().privatepropov);
            Assert.AreEqual(8, c.As<dynamic>().protectedpropov);
            Assert.AreEqual(9, c.As<dynamic>().PROTECTEDINTERNALPROPOV);
            Assert.AreEqual(10, c.As<dynamic>().PUBLICPROPOV);

            Assert.AreEqual(6, c.InternalPropOv);
            Assert.AreEqual(7, c.GetPrivatePropOv());
            Assert.AreEqual(8, c.GetProtectedPropOv());
            Assert.AreEqual(9, c.GetProtectedInternalPropOv());
            Assert.AreEqual(10, c.PublicPropOv);
        }

        [Test]
        public static void ConstMemberTest()
        {
            Assert.AreEqual(10, Class10.CONST_10);
            Assert.AreEqual(10, Global.ToDynamic().Bridge.ClientTest.ConventionTests.Class.Class10.const_10);

            Assert.AreEqual(11, Class10.const_11);
            Assert.AreEqual(11, Global.ToDynamic().Bridge.ClientTest.ConventionTests.Class.Class10.CONST_11);
        }

        [Test]
        public static void EventMemberTest()
        {
            var c = new Class11();

            int r1 = 0;
            c.Event1 += (object sender, int e) => { r1 = e; };

            Assert.AreEqual(0, r1);

            c.FireEvent1(5);

            Assert.NotNull(c.As<dynamic>().event1);
            Assert.AreEqual(5, r1);

            int r2 = 0;
            c.Event2 += (object sender, int e) => { r2 = e + 1; };

            Assert.AreEqual(0, r2);

            c.FireEvent2(6);

            Assert.NotNull(c.As<dynamic>().EVENT2);
            Assert.AreEqual(7, r2);
        }

        [Test]
        public static void EnumItemMemberTest()
        {
            Assert.AreEqual("Bridge.ClientTest.ConventionTests.Class.Enum2", typeof(Enum2).FullName);
            Assert.AreEqual("enummember1", Enum.ToString(typeof(Enum2), Enum2.EnumMember1));
            Assert.AreEqual("EnumMember2", Enum.ToString(typeof(Enum2), Enum2.enumMember2));

            Assert.NotNull(Global.ToDynamic().Bridge.ClientTest.ConventionTests.Class.Enum2);
            Assert.NotNull(Global.ToDynamic().Bridge.ClientTest.ConventionTests.Class.Enum2.enummember1);
            Assert.NotNull(Global.ToDynamic().Bridge.ClientTest.ConventionTests.Class.Enum2.EnumMember2);
        }

        [Test]
        public static void EnumTargetTest()
        {
            Assert.AreEqual("Bridge.ClientTest.ConventionTests.Class.enum1", typeof(Enum1).FullName);

            Assert.AreEqual("enummember1", Enum.ToString(typeof(Enum1), Enum1.EnumMember1));
            Assert.AreEqual("enummember2", Enum.ToString(typeof(Enum1), Enum1.enumMember2));
            Assert.AreEqual("enummember3", Enum.ToString(typeof(Enum1), Enum1.ENUMMEMBER3));
            Assert.AreEqual("EnumMember4", Enum.ToString(typeof(Enum1), Enum1.enumMember4));

            Assert.NotNull(Global.ToDynamic().Bridge.ClientTest.ConventionTests.Class.enum1);
            Assert.NotNull(Global.ToDynamic().Bridge.ClientTest.ConventionTests.Class.enum1.enummember1);
            Assert.NotNull(Global.ToDynamic().Bridge.ClientTest.ConventionTests.Class.enum1.enummember2);
            Assert.NotNull(Global.ToDynamic().Bridge.ClientTest.ConventionTests.Class.enum1.enummember3);
            Assert.NotNull(Global.ToDynamic().Bridge.ClientTest.ConventionTests.Class.enum1.EnumMember4);
        }

        [Test]
        public static void ExternalTargetTest()
        {
            var c9 = new Class9();

            Assert.Null(c9.As<dynamic>().externalprop91);
            c9.ExternalProp91 = 1;
            Assert.NotNull(c9.As<dynamic>().externalprop91);
        }

        /* Anonymous target can be applied on assembly level only
        [Test]
        public static void AnonymousTargetTest()
        {
            var c = new Class13();

            int sum;
            var a = c.GetObject(7, 8, out sum);

            Assert.NotNull(a);
            Assert.AreEqual(15, sum);
            Assert.AreEqual(7, c.As<dynamic>().member1);
            Assert.AreEqual(8, c.As<dynamic>().member2);
        }*/

        /* Uncomment when ConventionTarget.Delegate implemented
        [Test]
        public static void DelegateTargetTest()
        {
            var c = new Class14();

            Assert.Null(c.As<dynamic>().DelegateProp91);

            c.delegateProp91 = () => { return 1; };

            Assert.AreEqual(1, c.delegateProp91());
            Assert.NotNull(c.As<dynamic>().DelegateProp91);
        }*/
    }
}