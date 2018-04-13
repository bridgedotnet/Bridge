using System;
using Bridge.Test.NUnit;
using System.Collections.Generic;
using Bridge;
using ExternalNS3516;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The tests here consists in ensuring the ExternalCastRule emits code
    /// accordingly to its setting.
    /// </summary>
    [TestFixture(TestNameFormat = "#3516 - {0}")]
    public class Bridge3516
    {
        /// <summary>
        /// The test here sets it so no cast is made for classes marked with
        /// the 'external' attributes. So an invalid cast won't really be
        /// thrown when the code is run.
        /// </summary>
        [Test]
        [Rules(ExternalCast = ExternalCastRule.Plain)]
        public static void TestPlainExternalCastRule()
        {
            object obj = "test";

            // This won't throw an exception because the cast is not passed in.
            var el = (ExternalClass3516)obj;

            Assert.AreEqual("test", el, "Cast was suppressed for ExternalCastRule.Plain.");

            obj = new List<string>();
            Assert.Throws<InvalidCastException>(() => {
                // This should throw an exception as it is not marked as external at all.
                obj = (IEqualityComparer<string>)obj;
            }, "Cast emitted for non-external class even if ExternalCastRule is Plain.");
        }

        /// <summary>
        /// And here, we force-set it as managed, so that the cast, passed
        /// down to the client-side application, will be done, thus an
        /// exception thrown.
        /// </summary>
        [Test]
        [Rules(ExternalCast = ExternalCastRule.Managed)]
        public static void TestManagedExternalCastRule()
        {
            Assert.Throws<SystemException>(() => {
                object obj = "test";
                var el = (ExternalClass3516)obj;
            }, "Cast is emitted if ExternalCastRule is Managed.");
        }

        /// <summary>
        /// And here we ensure the default is Managed, so that the exception
        /// will effectively be thrown in an external class' invalid cast.
        /// </summary>
        [Test]
        public static void TestDefaultExternalCastRule()
        {
            Assert.Throws<SystemException>(() => {
                object obj = "test";
                var el = (ExternalClass3516)obj;
            }, "Cast is emitted if ExternalCastRule is not specified, meaning it is 'Managed'.");
        }
    }
}

namespace ExternalNS3516
{
    [External]
    public class ExternalClass3516
    {
    }
}