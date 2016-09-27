using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1882 - {0}")]
    public class Bridge1882
    {
        public class MVCArray<T>
        {
            public MVCArray()
            {
            }
        }

        [External]
        [Name("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1882.MVCArray$1")]
        public class MVCArrayExternal<T>
        {
#pragma warning disable 824
            public extern MVCArrayExternal();
#pragma warning restore 824
        }

        public static MVCArray<int>[] GetArray()
        {
            return new MVCArray<int>[1];
        }

        public static MVCArrayExternal<long>[] GetArrayExternal()
        {
            return new MVCArrayExternal<long>[1];
        }

        public static List<MVCArray<int>> GetList()
        {
            return new List<MVCArray<int>>(GetArray());
        }

        public static List<MVCArrayExternal<long>> GetListExternal()
        {
            return new List<MVCArrayExternal<long>>(GetArrayExternal());
        }

        [Test]
        public void TestGenericClassCastForArray()
        {
            foreach (var i in GetArray())
            {
                Assert.True(true, "No cast for array of generic elements works");
            }

            foreach (MVCArray<int> i in GetArray())
            {
                Assert.True(true, "Cast for array of generic elements works");
            }

            foreach (var i in GetArrayExternal())
            {
                Assert.True(true, "No cast for array of external generic elements works");
            }

            foreach (MVCArrayExternal<long> i in GetArrayExternal())
            {
                Assert.True(true, "Cast for array of external generic elements works");
            }
        }

        [Test]
        public void TestGenericClassCastForList()
        {
            foreach (var i in GetList())
            {
                Assert.True(true, "No cast for List of generic elements works");
            }

            foreach (MVCArray<int> i in GetList())
            {
                Assert.True(true, "Cast for List of generic elements works");
            }

            foreach (var i in GetListExternal())
            {
                Assert.True(true, "No cast for List of external generic elements works");
            }

            foreach (MVCArrayExternal<long> i in GetListExternal())
            {
                Assert.True(true, "Cast for List of external generic elements works");
            }
        }
    }
}