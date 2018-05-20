using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3584 - {0}")]
    public class Bridge3584
    {
        [Test]
        public static void TestInsert()
        {
            var arr = new int[] { 1, 2, 3 };
            var ilist = (IList)arr;
            Assert.Throws<NotSupportedException>(() => {
                ilist.Insert(0, 0);
            });
        }

        [Test]
        public static void TestAdd()
        {
            var arr = new int[] { 1, 2, 3 };
            var ilist = (IList)arr;
            Assert.Throws<NotSupportedException>(() => {
                ilist.Add(0);
            });
        }

        [Test]
        public static void TestRemove()
        {
            var arr = new int[] { 1, 2, 3 };
            var ilist = (IList)arr;
            Assert.Throws<NotSupportedException>(() => {
                ilist.Remove(0);
            });
        }

        [Test]
        public static void TestRemoveAt()
        {
            var arr = new int[] { 1, 2, 3 };
            var ilist = (IList)arr;
            Assert.Throws<NotSupportedException>(() => {
                ilist.RemoveAt(0);
            });
        }

        [Test]
        public static void TestClear()
        {
            var arr = new int[] { 1, 2, 3 };
            var ilist = (IList)arr;
            Assert.Throws<NotSupportedException>(() => {
                ilist.Clear();
            });
        }
    }
}