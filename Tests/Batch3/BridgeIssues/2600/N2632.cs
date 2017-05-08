using System;
using System.Text.RegularExpressions;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2632 - {0}")]
    public class Bridge2632
    {
        [Test]
        public static void TestTemplateIdentifier()
        {
            var x = new Derived();
            x.Test();
        }
    }

    public class Base
    {
        public virtual extern int Id
        {
            [Template("somethingElse()")]
            get;
        }

        private int somethingElse()
        {
            return 1;
        }

        private int somethingElse2()
        {
            return 2;
        }

        private int somethingElse3()
        {
            return 3;
        }

        private int somethingElse4()
        {
            return 4;
        }

        [Template("somethingElse3()")]
        public int Method1()
        {
            return 3;
        }

        [Template("somethingElse4()")]
        public virtual int Method2()
        {
            return 4;
        }
    }

    public class Derived : Base
    {
        public void Test()
        {
            Assert.AreEqual(2, Id);
            Assert.AreEqual(2, this.Id);
            Assert.AreEqual(1, base.Id);

            Assert.AreEqual(3, Method1());
            Assert.AreEqual(3, this.Method1());
            Assert.AreEqual(3, base.Method1());

            Assert.AreEqual(41, Method2());
            Assert.AreEqual(41, this.Method2());
            Assert.AreEqual(4, base.Method2());
        }

        public override extern int Id
        {
            [Template("somethingElse2()")]
            get;
        }

        [Template("somethingElse4_1()")]
        public override extern int Method2();

        private int somethingElse2()
        {
            return 2;
        }

        private int somethingElse4_1()
        {
            return 41;
        }
    }
}