using System;
using System.Globalization;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2337 - {0}")]
    public class Bridge2337
    {
        [Test]
        public static void TestFDateModifier()
        {
            var date = new DateTime(2017, 2, 6, 10, 42, 52, 0);
            Assert.AreEqual("2017-02-06 10:42:52", date.ToString("yyyy-MM-dd HH:mm:ss.FFFFFFF"));
            Assert.AreEqual("2017-02-06 10:42:52.000", date.ToString("yyyy-MM-dd HH:mm:ss.fffffff"));
            Assert.AreEqual("2017-02-06 10:42:52", date.ToString("yyyy-MM-dd HH:mm:ss.FFFFFF"));
            Assert.AreEqual("2017-02-06 10:42:52.000", date.ToString("yyyy-MM-dd HH:mm:ss.ffffff"));
            Assert.AreEqual("2017-02-06 10:42:52", date.ToString("yyyy-MM-dd HH:mm:ss.FFFFF"));
            Assert.AreEqual("2017-02-06 10:42:52.000", date.ToString("yyyy-MM-dd HH:mm:ss.fffff"));
            Assert.AreEqual("2017-02-06 10:42:52", date.ToString("yyyy-MM-dd HH:mm:ss.FFFF"));
            Assert.AreEqual("2017-02-06 10:42:52.000", date.ToString("yyyy-MM-dd HH:mm:ss.ffff"));
            Assert.AreEqual("2017-02-06 10:42:52", date.ToString("yyyy-MM-dd HH:mm:ss.FFF"));
            Assert.AreEqual("2017-02-06 10:42:52.000", date.ToString("yyyy-MM-dd HH:mm:ss.fff"));
            Assert.AreEqual("2017-02-06 10:42:52", date.ToString("yyyy-MM-dd HH:mm:ss.FF"));
            Assert.AreEqual("2017-02-06 10:42:52.00", date.ToString("yyyy-MM-dd HH:mm:ss.ff"));
            Assert.AreEqual("2017-02-06 10:42:52", date.ToString("yyyy-MM-dd HH:mm:ss.F"));
            Assert.AreEqual("2017-02-06 10:42:52.0", date.ToString("yyyy-MM-dd HH:mm:ss.f"));

            date = new DateTime(2017, 2, 6, 10, 42, 52, 1);
            Assert.AreEqual("2017-02-06 10:42:52.001", date.ToString("yyyy-MM-dd HH:mm:ss.FFFFFFF"));
            Assert.AreEqual("2017-02-06 10:42:52.001", date.ToString("yyyy-MM-dd HH:mm:ss.fffffff"));
            Assert.AreEqual("2017-02-06 10:42:52.001", date.ToString("yyyy-MM-dd HH:mm:ss.FFFFFF"));
            Assert.AreEqual("2017-02-06 10:42:52.001", date.ToString("yyyy-MM-dd HH:mm:ss.ffffff"));
            Assert.AreEqual("2017-02-06 10:42:52.001", date.ToString("yyyy-MM-dd HH:mm:ss.FFFFF"));
            Assert.AreEqual("2017-02-06 10:42:52.001", date.ToString("yyyy-MM-dd HH:mm:ss.fffff"));
            Assert.AreEqual("2017-02-06 10:42:52.001", date.ToString("yyyy-MM-dd HH:mm:ss.FFFF"));
            Assert.AreEqual("2017-02-06 10:42:52.001", date.ToString("yyyy-MM-dd HH:mm:ss.ffff"));
            Assert.AreEqual("2017-02-06 10:42:52.001", date.ToString("yyyy-MM-dd HH:mm:ss.FFF"));
            Assert.AreEqual("2017-02-06 10:42:52.001", date.ToString("yyyy-MM-dd HH:mm:ss.fff"));
            Assert.AreEqual("2017-02-06 10:42:52", date.ToString("yyyy-MM-dd HH:mm:ss.FF"));
            Assert.AreEqual("2017-02-06 10:42:52.00", date.ToString("yyyy-MM-dd HH:mm:ss.ff"));
            Assert.AreEqual("2017-02-06 10:42:52", date.ToString("yyyy-MM-dd HH:mm:ss.F"));
            Assert.AreEqual("2017-02-06 10:42:52.0", date.ToString("yyyy-MM-dd HH:mm:ss.f"));

            date = new DateTime(2017, 2, 6, 10, 42, 52, 10);
            Assert.AreEqual("2017-02-06 10:42:52.01", date.ToString("yyyy-MM-dd HH:mm:ss.FFFFFFF"));
            Assert.AreEqual("2017-02-06 10:42:52.010", date.ToString("yyyy-MM-dd HH:mm:ss.fffffff"));
            Assert.AreEqual("2017-02-06 10:42:52.01", date.ToString("yyyy-MM-dd HH:mm:ss.FFFFFF"));
            Assert.AreEqual("2017-02-06 10:42:52.010", date.ToString("yyyy-MM-dd HH:mm:ss.ffffff"));
            Assert.AreEqual("2017-02-06 10:42:52.01", date.ToString("yyyy-MM-dd HH:mm:ss.FFFFF"));
            Assert.AreEqual("2017-02-06 10:42:52.010", date.ToString("yyyy-MM-dd HH:mm:ss.fffff"));
            Assert.AreEqual("2017-02-06 10:42:52.01", date.ToString("yyyy-MM-dd HH:mm:ss.FFFF"));
            Assert.AreEqual("2017-02-06 10:42:52.010", date.ToString("yyyy-MM-dd HH:mm:ss.ffff"));
            Assert.AreEqual("2017-02-06 10:42:52.01", date.ToString("yyyy-MM-dd HH:mm:ss.FFF"));
            Assert.AreEqual("2017-02-06 10:42:52.010", date.ToString("yyyy-MM-dd HH:mm:ss.fff"));
            Assert.AreEqual("2017-02-06 10:42:52.01", date.ToString("yyyy-MM-dd HH:mm:ss.FF"));
            Assert.AreEqual("2017-02-06 10:42:52.01", date.ToString("yyyy-MM-dd HH:mm:ss.ff"));
            Assert.AreEqual("2017-02-06 10:42:52", date.ToString("yyyy-MM-dd HH:mm:ss.F"));
            Assert.AreEqual("2017-02-06 10:42:52.0", date.ToString("yyyy-MM-dd HH:mm:ss.f"));

            date = new DateTime(2017, 2, 6, 10, 42, 52, 100);
            Assert.AreEqual("2017-02-06 10:42:52.1", date.ToString("yyyy-MM-dd HH:mm:ss.FFFFFFF"));
            Assert.AreEqual("2017-02-06 10:42:52.100", date.ToString("yyyy-MM-dd HH:mm:ss.fffffff"));
            Assert.AreEqual("2017-02-06 10:42:52.1", date.ToString("yyyy-MM-dd HH:mm:ss.FFFFFF"));
            Assert.AreEqual("2017-02-06 10:42:52.100", date.ToString("yyyy-MM-dd HH:mm:ss.ffffff"));
            Assert.AreEqual("2017-02-06 10:42:52.1", date.ToString("yyyy-MM-dd HH:mm:ss.FFFFF"));
            Assert.AreEqual("2017-02-06 10:42:52.100", date.ToString("yyyy-MM-dd HH:mm:ss.fffff"));
            Assert.AreEqual("2017-02-06 10:42:52.1", date.ToString("yyyy-MM-dd HH:mm:ss.FFFF"));
            Assert.AreEqual("2017-02-06 10:42:52.100", date.ToString("yyyy-MM-dd HH:mm:ss.ffff"));
            Assert.AreEqual("2017-02-06 10:42:52.1", date.ToString("yyyy-MM-dd HH:mm:ss.FFF"));
            Assert.AreEqual("2017-02-06 10:42:52.100", date.ToString("yyyy-MM-dd HH:mm:ss.fff"));
            Assert.AreEqual("2017-02-06 10:42:52.1", date.ToString("yyyy-MM-dd HH:mm:ss.FF"));
            Assert.AreEqual("2017-02-06 10:42:52.10", date.ToString("yyyy-MM-dd HH:mm:ss.ff"));
            Assert.AreEqual("2017-02-06 10:42:52.1", date.ToString("yyyy-MM-dd HH:mm:ss.F"));
            Assert.AreEqual("2017-02-06 10:42:52.1", date.ToString("yyyy-MM-dd HH:mm:ss.f"));

            date = new DateTime(2017, 2, 6, 10, 42, 52, 999);
            Assert.AreEqual("2017-02-06 10:42:52.999", date.ToString("yyyy-MM-dd HH:mm:ss.FFFFFFF"));
            Assert.AreEqual("2017-02-06 10:42:52.999", date.ToString("yyyy-MM-dd HH:mm:ss.fffffff"));
            Assert.AreEqual("2017-02-06 10:42:52.999", date.ToString("yyyy-MM-dd HH:mm:ss.FFFFFF"));
            Assert.AreEqual("2017-02-06 10:42:52.999", date.ToString("yyyy-MM-dd HH:mm:ss.ffffff"));
            Assert.AreEqual("2017-02-06 10:42:52.999", date.ToString("yyyy-MM-dd HH:mm:ss.FFFFF"));
            Assert.AreEqual("2017-02-06 10:42:52.999", date.ToString("yyyy-MM-dd HH:mm:ss.fffff"));
            Assert.AreEqual("2017-02-06 10:42:52.999", date.ToString("yyyy-MM-dd HH:mm:ss.FFFF"));
            Assert.AreEqual("2017-02-06 10:42:52.999", date.ToString("yyyy-MM-dd HH:mm:ss.ffff"));
            Assert.AreEqual("2017-02-06 10:42:52.999", date.ToString("yyyy-MM-dd HH:mm:ss.FFF"));
            Assert.AreEqual("2017-02-06 10:42:52.999", date.ToString("yyyy-MM-dd HH:mm:ss.fff"));
            Assert.AreEqual("2017-02-06 10:42:52.99", date.ToString("yyyy-MM-dd HH:mm:ss.FF"));
            Assert.AreEqual("2017-02-06 10:42:52.99", date.ToString("yyyy-MM-dd HH:mm:ss.ff"));
            Assert.AreEqual("2017-02-06 10:42:52.9", date.ToString("yyyy-MM-dd HH:mm:ss.F"));
            Assert.AreEqual("2017-02-06 10:42:52.9", date.ToString("yyyy-MM-dd HH:mm:ss.f"));
        }
    }
}