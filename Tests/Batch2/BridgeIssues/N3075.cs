using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch2.BridgeIssues
{
    // Bridge[#3075]
    // reproduciable if source map generation is enabled
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3075 - " + Constants.BATCH_NAME + " {0}")]
    public class N3075
    {
        [Enum(Emit.StringNamePreserveCase)]
        public enum SomeType
        {
            Apple
        }

        [Template("{0:raw}")]
        public extern static int Test(SomeType elementType);

        [Test]
        public void TestRawModifier()
        {
            var Apple = 1;
            Assert.AreEqual(Apple, Test(SomeType.Apple));
        }
    }
}