using Bridge;
using Bridge.Html5;
using Bridge.Test;

using Bridge.ClientTest.Utilities;

using System;
using System.Linq;
using System.Collections.Generic;

namespace Bridge.ClientTest.BridgeIssues
{
    /// <summary>
    /// This test will check whether TypedArray types are emitted to JavaScript
    /// the right way. [#548]
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#548 - {0}")]
    public class Bridge548
    {
        [Test(ExpectedCount = 18)]
        public static void TestUseCase()
        {
            var isSpecialTypeName = BrowserHelper.IsPhantomJs();

            var v1 = new Float32Array(1);
            var thisType = "Float32Array";
            Assert.True(v1 != null, thisType + " created");
            var thisName = isSpecialTypeName ? "Object" : thisType;
            Assert.AreEqual(v1.GetClassName(), thisName, thisType + " class name");

            var v2 = new Float64Array(1);
            thisType = "Float64Array";
            Assert.True(v2 != null, thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            Assert.AreEqual(v2.GetClassName(), thisName, thisType + " class name");

            var v3 = new Int16Array(1);
            thisType = "Int16Array";
            Assert.True(v3 != null, thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            Assert.AreEqual(v3.GetClassName(), thisName, thisType + " class name");

            var v4 = new Int32Array(1);
            thisType = "Int32Array";
            Assert.True(v4 != null, thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            Assert.AreEqual(v4.GetClassName(), thisName, thisType + " class name");

            var v5 = new Int8Array(1);
            thisType = "Int8Array";
            Assert.True(v5 != null, thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            Assert.AreEqual(v5.GetClassName(), thisName, thisType + " class name");

            var v6 = new Uint16Array(1);
            thisType = "Uint16Array";
            Assert.True(v6 != null, thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            Assert.AreEqual(v6.GetClassName(), thisName, thisType + " class name");

            var v7 = new Uint32Array(1);
            thisType = "Uint32Array";
            Assert.True(v7 != null, thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            Assert.AreEqual(v7.GetClassName(), thisName, thisType + " class name");

            var v8 = new Uint8Array(1);
            thisType = "Uint8Array";
            Assert.True(v8 != null, thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            Assert.AreEqual(v8.GetClassName(), thisName, thisType + " class name");

            var v9 = new Uint8ClampedArray(1);
            thisType = "Uint8ClampedArray";
            Assert.True(v9 != null, thisType + " created");
            thisName = isSpecialTypeName ? "Object" : thisType;
            Assert.AreEqual(v9.GetClassName(), thisName, thisType + " class name");
        }
    }
}
