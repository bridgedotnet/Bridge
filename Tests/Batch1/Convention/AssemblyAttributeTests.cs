using Bridge.Test.NUnit;
using System;
using Bridge;
using Bridge.Html5;

[assembly: Convention(Filter = "Bridge.ClientTest.ConventionTests.Assembly.Holder1.*", Target = ConventionTarget.Class, Notation = Notation.UpperCase)]
[assembly: Convention(Filter = "Bridge.ClientTest.ConventionTests.Assembly.Holder1.*", Target = ConventionTarget.Member, Notation = Notation.LowerCase)]

[assembly: Convention(Filter = "Bridge.ClientTest.ConventionTests.Assembly.Holder2.*", Target = ConventionTarget.Member, Accessibility = ConventionAccessibility.Public, Notation = Notation.None)]
[assembly: Convention(Filter = "Bridge.ClientTest.ConventionTests.Assembly.Holder2.*", Target = ConventionTarget.Member, Accessibility = ConventionAccessibility.Protected, Notation = Notation.UpperCase)]
[assembly: Convention(Filter = "Bridge.ClientTest.ConventionTests.Assembly.Holder2.*", Target = ConventionTarget.Member, Accessibility = ConventionAccessibility.Private, Notation = Notation.LowerCase)]
[assembly: Convention(Filter = "Bridge.ClientTest.ConventionTests.Assembly.Holder2.*", Target = ConventionTarget.Member, Accessibility = ConventionAccessibility.ProtectedInternal, Notation = Notation.CamelCase)]

namespace Bridge.ClientTest.ConventionTests.Assembly
{
    public class Holder1
    {
        public class Class1
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

        [Convention(Target = ConventionTarget.Class, Notation = Notation.LowerCase)]
        [Convention(Target = ConventionTarget.Member, Notation = Notation.UpperCase)]
        public class Class2
        {
            public int field1;

            public void method1()
            {
            }

            public int prop1
            {
                get; set;
            }
        }

        public class Class3
        {
            [Convention(Notation = Notation.UpperCase)]
            public int field1;

            [Convention(Notation = Notation.UpperCase)]
            public void method1()
            {
            }

            [Convention(Notation = Notation.UpperCase)]
            public int prop1
            {
                get; set;
            }
        }
    }

    public class Holder2
    {
        public class Class2
        {
            public int int_FIELD1;
            protected int int_FIELD2;
#pragma warning disable 169
            private int int_FIELD3;
#pragma warning restore 169
            protected internal int Int_FIELD4;
        }
    }

    [Category(Constants.MODULE_CONVENTION)]
    [TestFixture(TestNameFormat = "Convention.AssemblyAttribute - {0}")]
    public class AssemblyAttributeTests
    {
        [Test]
        public static void NotationTypeTest()
        {
            var c1 = new Holder1.Class1();
            Assert.AreEqual("Bridge.ClientTest.ConventionTests.Assembly.Holder1+CLASS1", typeof(Holder1.Class1).FullName);
            Assert.AreEqual("Bridge.ClientTest.ConventionTests.Assembly.Holder1+CLASS1", c1.GetType().FullName);
            Assert.NotNull(Global.ToDynamic().Bridge.ClientTest.ConventionTests.Assembly.Holder1.CLASS1);
            Assert.NotNull(c1["field1"]);
            Assert.NotNull(c1["method1"]);
            Assert.NotNull(c1["prop1"]);
            Assert.Null(c1["FIELD1"]);
            Assert.Null(c1["METHOD1"]);
            Assert.Null(c1["PROP1"]);
        }

        [Test]
        public static void NotationTypeClassOverrideTest()
        {
            var c2 = new Holder1.Class2();
            Assert.AreEqual("Bridge.ClientTest.ConventionTests.Assembly.Holder1+class2", typeof(Holder1.Class2).FullName);
            Assert.AreEqual("Bridge.ClientTest.ConventionTests.Assembly.Holder1+class2", c2.GetType().FullName);
            Assert.NotNull(Global.ToDynamic().Bridge.ClientTest.ConventionTests.Assembly.Holder1.class2);
            Assert.Null(c2["field1"]);
            Assert.Null(c2["method1"]);
            Assert.Null(c2["prop1"]);
            Assert.NotNull(c2["FIELD1"]);
            Assert.NotNull(c2["METHOD1"]);
            Assert.NotNull(c2["PROP1"]);
        }

        [Test]
        public static void NotationTypeMemberOverrideTest()
        {
            var c3 = new Holder1.Class3();
            Assert.Null(c3["field1"]);
            Assert.Null(c3["method1"]);
            Assert.Null(c3["prop1"]);
            Assert.NotNull(c3["FIELD1"]);
            Assert.NotNull(c3["METHOD1"]);
            Assert.NotNull(c3["PROP1"]);
        }

        [Test]
        public static void NotationAccessibilityTest()
        {
            var c2 = new Holder2.Class2();

            Assert.NotNull(c2["int_FIELD1"]);
            Assert.NotNull(c2["INT_FIELD2"]);
            Assert.NotNull(c2["int_field3"]);
            Assert.NotNull(c2["int_FIELD4"]);
        }
    }
}