using Bridge.Test.NUnit;
using System;
using Bridge;
using Bridge.Html5;

namespace Bridge.ClientTest.ConventionTests.Class
{
    [Convention(Notation = Notation.LowerCamelCase)]
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

    public class Class61: Class6
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
            var c3 = new Class3 {field1 = 1, prop1 = 2};
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
    }
}