using System;
using System.Collections.Generic;
using System.Linq;
using Bridge.Test;
using System.Threading.Tasks;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2088 - {0}")]
    public class Bridge2088
    {
        [Reflectable]
        class T
        {
            public int ShouldSeeThis { get; set; }
        }

        [Reflectable]
        [ObjectLiteral]
        class CompletelyUnrelatedClass
        {
            public int ShouldNotSeeThis { get; set; }
        }

        [Reflectable]
        [ObjectLiteral(ObjectCreateMode.Constructor)]
        class OL1
        {
            public int ShouldSeeThis1 { get; set; }
        }

        [Reflectable]
        [ObjectLiteral(ObjectCreateMode.Constructor)]
        class OL2 : OL1
        {
            public int ShouldSeeThis2 { get; set; }
        }

        [Test]
        public static void TestObjectLiteralReflection()
        {
            var ol = new CompletelyUnrelatedClass();
            var props = ol.GetType().GetProperties().Select(x => x.Name).ToArray();
            Assert.AreEqual(0, props.Length);

            var obj = new T();
            props = obj.GetType().GetProperties().Select(x => x.Name).ToArray();
            Assert.AreEqual(1, props.Length);
            Assert.AreEqual("ShouldSeeThis", props[0]);

            var ol1 = new OL1();
            props = ol1.GetType().GetProperties().Select(x => x.Name).ToArray();
            Assert.AreEqual(1, props.Length);
            Assert.AreEqual("ShouldSeeThis1", props[0]);

            var ol2 = new OL2 { ShouldSeeThis2 = 2 };
            props = ol2.GetType().GetProperties().Select(x => x.Name).ToArray();
            Assert.AreEqual(2, props.Length);
            Assert.AreEqual("ShouldSeeThis1", props[0]);
            Assert.AreEqual("ShouldSeeThis2", props[1]);

            Assert.AreEqual(2, ol2.GetType().GetProperty("ShouldSeeThis2").GetValue(ol2));
        }
    }
}