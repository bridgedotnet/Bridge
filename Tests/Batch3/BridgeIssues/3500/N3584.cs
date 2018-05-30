using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The tests here ensures that the Insert, Add, Remove and RemoveAt
    /// array methods throw the NotSupported exception when performing the
    /// operation in either a readonly list or fixed-size array.
    /// </summary>
    [TestFixture(TestNameFormat = "#3584 - {0}")]
    public class Bridge3584
    {
        /// <summary>
        /// Tests IList.Insert() over fixed-length array and readonly List cast
        /// into IList.
        /// </summary>
        [Test]
        public static void TestInsert()
        {
            var arr = new int[] { 1, 2, 3 };
            var ilist = (IList)arr;
            Assert.Throws<NotSupportedException>(() => {
                ilist.Insert(0, 0);
            }, "Array cast into an IList denies Insert() operation.");

            var rolist = new List<int> { 1, 2, 3 }.AsReadOnly().As<IList>();
            Assert.Throws<NotSupportedException>(() => {
                rolist.Insert(0, 0);
            }, "Read-only List cast into IList denies Insert() operation.");
        }

        /// <summary>
        /// Tests IList.Add() over fixed-length array and readonly List cast
        /// into IList.
        /// </summary>
        [Test]
        public static void TestAdd()
        {
            var arr = new int[] { 1, 2, 3 };
            var ilist = (IList)arr;
            Assert.Throws<NotSupportedException>(() => {
                ilist.Add(0);
            }, "Array cast into an IList denies Add() operation.");

            var rolist = new List<int> { 1, 2, 3 }.AsReadOnly().As<IList>();
            Assert.Throws<NotSupportedException>(() => {
                rolist.Add(0);
            }, "Read-only List cast into IList denies Add() operation.");
        }

        /// <summary>
        /// Tests IList.remove() over fixed-length array and readonly List cast
        /// into IList.
        /// </summary>
        [Test]
        public static void TestRemove()
        {
            var arr = new int[] { 1, 2, 3 };
            var ilist = (IList)arr;
            Assert.Throws<NotSupportedException>(() => {
                ilist.Remove(0);
            }, "Array cast into an IList denies Remove() operation.");

            var rolist = new List<int> { 1, 2, 3 }.AsReadOnly().As<IList>();
            Assert.Throws<NotSupportedException>(() => {
                rolist.Remove(0);
            }, "Read-only List cast into IList denies Remove() operation.");
        }

        /// <summary>
        /// Tests IList.RemoveAt() over fixed-length array and readonly List
        /// cast into IList.
        /// </summary>
        [Test]
        public static void TestRemoveAt()
        {
            var arr = new int[] { 1, 2, 3 };
            var ilist = (IList)arr;
            Assert.Throws<NotSupportedException>(() => {
                ilist.RemoveAt(0);
            }, "Array cast into an IList denies RemoveAt() operation.");

            var rolist = new List<int> { 1, 2, 3 }.AsReadOnly().As<IList>();
            Assert.Throws<NotSupportedException>(() => {
                rolist.RemoveAt(0);
            }, "Read-only List cast into IList denies RemoveAt() operation.");
        }

        /// <summary>
        /// Tests IList.Clear() over fixed-length array and readonly List cast
        /// into IList.
        /// </summary>
        [Test]
        public static void TestClear()
        {
            var arr = new int[] { 1, 2, 3 };
            var ilist = (IList)arr;
            Assert.Throws<NotSupportedException>(() => {
                ilist.Clear();
            }, "Array cast into an IList denies Clear() operation.");

            var rolist = new List<int> { 1, 2, 3 }.AsReadOnly().As<IList>();
            Assert.Throws<NotSupportedException>(() => {
                rolist.Clear();
            }, "Read-only List cast into IList denies Clear() operation.");
        }
    }
}