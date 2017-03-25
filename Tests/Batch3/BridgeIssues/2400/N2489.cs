using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2489 - {0}")]
    public class Bridge2489
    {
        [Reflectable(Inherits = false)]
        public class Bar : BaseClass
        {
            public readonly int Field01 = 1;
        }

        public class Bar2 : Bar
        {
            public readonly int Field02 = 1;
        }

        [Reflectable(Inherits = true)]
        public class BaseClass
        {
        }

        [Template("Bridge.getMetadata({t})")]
        public static extern object GetMetadata(Type t);

        [Test]
        public static void TestReflectableInherits()
        {
            Assert.NotNull(GetMetadata(typeof(BaseClass)));
            Assert.NotNull(GetMetadata(typeof(Bar)));
            Assert.Null(GetMetadata(typeof(Bar2)));
        }
    }
}