using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2949 - {0}")]
    public class Bridge2949
    {
        [Test]
        public static void Test32bitMultiplication()
        {
            int a = int.MaxValue / 3;
            a *= a;
            Assert.AreEqual(-477218588, a);

            a = int.MaxValue / 3;
            a = a * a;
            Assert.AreEqual(-477218588, a);

            int? b = int.MaxValue / 3;
            b *= b;
            Assert.AreEqual(-477218588, b);

            b = int.MaxValue / 3;
            b = b * b;
            Assert.AreEqual(-477218588, b);

            uint c = uint.MaxValue / 3;
            c *= 2;
            Assert.AreEqual(2863311530, c);

            c = uint.MaxValue / 3;
            c = c * 2;
            Assert.AreEqual(2863311530, c);

            uint? d = uint.MaxValue / 3;
            d *= 2;
            Assert.AreEqual(2863311530, d);

            d = uint.MaxValue / 3;
            d = d * 2;
            Assert.AreEqual(2863311530, d);

            int i1 = int.MaxValue;
            uint i2 = uint.MaxValue;
            Assert.True(9223372030412324865 == i1 * i2);
        }
    }
}