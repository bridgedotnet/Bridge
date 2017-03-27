using System;
using System.Reflection;
using System.Collections.Generic;
using System.Threading.Tasks;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2489 - {0}")]
    public class Bridge2489
    {
        [Reflectable(Inherits = true)]
        public class BaseClass
        {
            public readonly int Field = 1;
        }

        public class Bar : BaseClass
        {
            public readonly int Field00 = 2;
        }

        [Reflectable(Inherits = false)]
        public class Bar1 : Bar
        {
            public readonly int Field01 = 3;
        }

        public class Bar2 : Bar1
        {
            public readonly int Field02 = 4;
        }

        [Test]
        public static void TestReflectableInherits()
        {
            Assert.AreEqual(MemberTypes.Field, typeof(BaseClass).GetField("Field").MemberType, "Should have Field in metadata as type has its own [Reflectable]");
            Assert.AreEqual(MemberTypes.Field, typeof(Bar).GetField("Field00").MemberType, "Should have Field in metadata as base type has [Reflectable] with Inherits = true");
            Assert.AreEqual(MemberTypes.Field, typeof(Bar1).GetField("Field01").MemberType, "Should have Field in metadata as type has its own [Reflectable]");

            Assert.AreEqual(null, typeof(Bar2).GetField("Field02"), "Should NOT have Field in metadata as base type has [Reflectable] with Inherits = false");
        }
    }
}