using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The tests here consists in checking exception message thrown when tryig
    /// to insert/append elements to readonly and fixed-size arrays.
    /// </summary>
    [TestFixture(TestNameFormat = "#3585 - {0}")]
    public class Bridge3585
    {
        /// <summary>
        /// Make a fixed-length array and a readonly list then try to add
        /// elements to them, checking for not only the expected exception
        /// type, but also the exception very message.
        /// </summary>
        [Test]
        public static void TestInsert()
        {
            var arr = new int[] { 1, 2, 3 };
            var ilist = (IList)arr;

            // Here we don't just use 'Assert.Throws' because we care not only
            // for the type of the thrown exception, but also its descriptive
            // message.
            try
            {
                ilist.Insert(0, 0);
                Assert.Fail("No Exception thrown while trying to add element to fixed-size array.");
            }
            catch (Exception ex)
            {
                Assert.AreEqual(typeof(System.NotSupportedException), ex.GetType(), "Type of exception is \"NotSupported\"");
                Assert.AreEqual("Collection was of a fixed size.", ex.Message, "Expected exception message is thrown.");
            }

            var list = new List<int> { 1, 2, 3 };
            var roList = list.AsReadOnly();
            var ilist2 = (IList)roList;

            try
            {
                ilist2.Insert(0, 0);
                Assert.Fail("No Exception thrown while trying to add element to read-only collection.");
            }
            catch (Exception ex)
            {
                Assert.AreEqual(typeof(System.NotSupportedException), ex.GetType(), "Type of exception is \"NotSupported\"");
                Assert.AreEqual("Collection is read-only.", ex.Message, "Expected exception message is thrown.");
            }
        }
    }
}