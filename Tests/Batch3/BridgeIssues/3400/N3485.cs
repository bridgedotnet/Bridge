using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3485 - {0}")]
    public class Bridge3485
    {
        /// <summary>
        /// The test here consists in ensuring that the 'virtual' keyword
        /// affect classes marked with the 'External' attribute.
        /// </summary>
        [External]
        [Name("Bridge3485_A")]
        public class A
        {
            public string V1 { get; }
            public virtual string V2 { get; }
        }

        public class B : A
        {
            public string GetV1() => base.V1;
            public string GetV2() => base.V2;
        }

        [Init(InitPosition.Top)]
        public static void Init()
        {
            /*@
    var Bridge3485_A = (function () {
        function A() {
            this.V1 = "value1";
            this.V2 = "value2";
        }
        return A;
    }());
            */
        }

        /// <summary>
        /// The tests consists in just instantiating a class, which inherits
        /// from an external-marked class, and references a property that's
        /// declared in the base class after the 'virtual' keyword, thus that
        /// should have been inherited by the class instance.
        /// </summary>
        [Test]
        public static void TestExternalVirtualProperty()
        {
            var v1 = new B().GetV1();
            var v2 = new B().GetV2();

            Assert.AreEqual("value1", v1, "Non-virtual inherited property reference works.");
            Assert.AreEqual("value2", v2, "Virtual inherited property reference works.");
        }
    }
}