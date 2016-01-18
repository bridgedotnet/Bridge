using Bridge.Test;

using System;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_VERSION)]
    [TestFixture(TestNameFormat = "Version - {0}")]
    public class TestVersion
    {
        [Test(ExpectedCount = 42)]
        public static void TestConstructors()
        {
            var v1 = new Version();

            Assert.True(v1 != null, "v1 created");
            Assert.AreEqual(v1.Major, 0, "v1.Major 0");
            Assert.AreEqual(v1.Minor, 0, "v1.Minor 0");
            Assert.AreEqual(v1.Build, -1, "v1.Build -1");
            Assert.AreEqual(v1.Revision, -1, "v1.Revision -1");
            Assert.AreEqual(v1.MajorRevision, -1, "v1.MajorRevision -1");
            Assert.AreEqual(v1.MinorRevision, -1, "v1.MinorRevision -1");

            var v2 = new Version("2.4.1128.2");
            Assert.True(v2 != null, "v2 created");
            Assert.AreEqual(v2.Major, 2, "v2.Major 2");
            Assert.AreEqual(v2.Minor, 4, "v2.Minor 4");
            Assert.AreEqual(v2.Build, 1128, "v2.Build 1128");
            Assert.AreEqual(v2.Revision, 2, "v2.Revision 2");
            Assert.AreEqual(v2.MajorRevision, 0, "v2.MajorRevision 0");
            Assert.AreEqual(v2.MinorRevision, 2, "v2.MinorRevision 2");

            var v3 = new Version("2.4.1128.65537");
            Assert.True(v3 != null, "v3 created");
            Assert.AreEqual(v3.Major, 2, "v3.Major 2");
            Assert.AreEqual(v3.Minor, 4, "v3.Minor 4");
            Assert.AreEqual(v3.Build, 1128, "v3.Build 1128");
            Assert.AreEqual(v3.Revision, 65537, "v3.Revision 65537");
            Assert.AreEqual(v3.MajorRevision, 1, "v3.MajorRevision 1");
            Assert.AreEqual(v3.MinorRevision, 1, "v3.MinorRevision 1");

            var v4 = new Version(20, 10);
            Assert.True(v4 != null, "v4 created");
            Assert.AreEqual(v4.Major, 20, "v4.Major 20");
            Assert.AreEqual(v4.Minor, 10, "v4.Minor 10");
            Assert.AreEqual(v4.Build, -1, "v4.Build -1");
            Assert.AreEqual(v4.Revision, -1, "v4.Revision -1");
            Assert.AreEqual(v4.MajorRevision, -1, "v4.MajorRevision -1");
            Assert.AreEqual(v4.MinorRevision, -1, "v4.MinorRevision -1");

            var v5 = new Version(200, 100, 300);
            Assert.True(v5 != null, "v5 created");
            Assert.AreEqual(v5.Major, 200, "v5.Major 200");
            Assert.AreEqual(v5.Minor, 100, "v5.Minor 100");
            Assert.AreEqual(v5.Build, 300, "v5.Build 300");
            Assert.AreEqual(v5.Revision, -1, "v5.Revision -1");
            Assert.AreEqual(v5.MajorRevision, -1, "v5.MajorRevision -1");
            Assert.AreEqual(v5.MinorRevision, -1, "v5.MinorRevision -1");

            var v6 = new Version(2000, 1000, 3000, (345 << 16) + 4000);
            Assert.True(v6 != null, "v6 created");
            Assert.AreEqual(v6.Major, 2000, "v6.Major 2000");
            Assert.AreEqual(v6.Minor, 1000, "v6.Minor 1000");
            Assert.AreEqual(v6.Build, 3000, "v6.Build 3000");
            Assert.AreEqual(v6.Revision, 22613920, "v6.Revision (345 << 16) + 4000 = 22613920");
            Assert.AreEqual(v6.MajorRevision, 345, "v6.MajorRevision 345");
            Assert.AreEqual(v6.MinorRevision, 4000, "v6.MinorRevision 4");
        }

        [Test(ExpectedCount = 13)]
        public static void TestCloneCompare()
        {
            var v1 = new Version(1, 2, 3, (4 << 16) + 5);

            var o = v1.Clone();
            Assert.True(o != null, "v1 Cloned");

            var v2 = o as Version;
            Assert.True(v2 != null, "v1 Cloned as Version");

            Assert.AreEqual(v2.Major, 1, "v2.Major 1");
            Assert.AreEqual(v2.Minor, 2, "v2.Minor 2");
            Assert.AreEqual(v2.Build, 3, "v2.Build 3");
            Assert.AreEqual(v2.Revision, 262149, "v2.Revision  (4 << 16) + 5 = 262149");
            Assert.AreEqual(v2.MajorRevision, 4, "v2.MajorRevision 4");
            Assert.AreEqual(v2.MinorRevision, 5, "v2.MinorRevision 5");

            var v3 = new Version(1, 2, 2, (4 << 16) + 5);
            Assert.AreEqual(v1.CompareTo(v3), 1, "v1.CompareTo(v3)");

            var v4 = new Version(1, 3, 3, (4 << 16) + 5);
            Assert.AreEqual(v1.CompareTo(v4), -1, "v1.CompareTo(v4)");

            Assert.AreEqual(v1.CompareTo(o), 0, "v1.CompareTo(o)");
            Assert.AreEqual(v1.CompareTo(v2), 0, "v1.CompareTo(v2)");
            Assert.AreNotEqual(v1.CompareTo(null), 0, "v1.CompareTo(null)");
        }

        [Test(ExpectedCount = 9)]
        public static void TestEqualsGetHashCode()
        {
            var v1 = new Version(100, 200, 300, (400 << 16) + 500);
            var v2 = new Version(100, 200, 300, (400 << 16) + 500);
            var v3 = new Version(101, 200, 300, (400 << 16) + 500);
            var o = new object();
            object o2 = v2;

            Assert.True(v1.Equals(v2), "v1.Equals(v2)");
            Assert.False(v1.Equals(v3), "v1.Equals(v3)");
            Assert.False(v1.Equals(o), "v1.Equals(o)");
            Assert.False(v1.Equals(null), "v1.Equals(null)");
            Assert.False(v1.Equals(100), "v1.Equals(100)");
            Assert.True(v1.Equals(o2), "v1.Equals(o2)");

            Assert.AreEqual(v1.GetHashCode(), 1283637748, "v1.GetHashCode()");
            Assert.AreEqual(v2.GetHashCode(), 1283637748, "v2.GetHashCode()");
            Assert.AreEqual(v3.GetHashCode(), 1552073204, "v3.GetHashCode()");
        }

        [Test(ExpectedCount = 10)]
        public static void TestToString()
        {
            var v1 = new Version("2.4.1128.65537");
            var v2 = new Version(100, 200, 300, (400 << 16) + 500);
            var v3 = new Version(100, 200, 300);
            var v4 = new Version(100, 200);
            var v5 = new Version();

            Assert.AreEqual(v1.ToString(), "2.4.1128.65537", "c1.ToString()");
            Assert.AreEqual(v2.ToString(), "100.200.300.26214900", "c2.ToString()");
            Assert.AreEqual(v3.ToString(), "100.200.300", "c3.ToString()");
            Assert.AreEqual(v4.ToString(), "100.200", "c4.ToString()");
            Assert.AreEqual(v5.ToString(), "0.0", "c5.ToString()");

            Assert.AreEqual(v1.ToString(1), "2", "c1.ToString(1)");
            Assert.AreEqual(v1.ToString(2), "2.4", "c1.ToString(2)");
            Assert.AreEqual(v1.ToString(3), "2.4.1128", "c1.ToString(3)");
            Assert.AreEqual(v1.ToString(4), "2.4.1128.65537", "c1.ToString(4)");
            Assert.Throws(() =>
            {
                v1.ToString(5);
            }, "c1.ToString(5)");
        }

        [Test(ExpectedCount = 6)]
        public static void TestParse()
        {
            var s1 = "105.1.1128.65547";
            var v1 = new Version(s1);

            Assert.AreEqual(Version.Parse(s1).ToString(), v1.ToString(), "Version.Parse(s1)");

            var s2 = "105.1";
            var v2 = new Version(s2);

            Assert.AreEqual(Version.Parse(s2).ToString(), v2.ToString(), "Version.Parse(s2)");

            Assert.Throws(() =>
            {
                Version.Parse("12,123.23.12");
            }, "Version.Parse(\"12,123.23.12\")");

            Version vp1;
            var b1 = Version.TryParse("12,123.23.12", out vp1);
            Assert.AreEqual(b1, false, "b1");

            Version vp2;
            var b2 = Version.TryParse("12.3.2.1", out vp2);
            Assert.AreEqual(b2, true, "b2");
            Assert.AreEqual(vp2.ToString(), "12.3.2.1", "vp2.ToString()");
        }

        [Test(ExpectedCount = 30)]
        public static void TestOperators()
        {
            var v1 = new Version(1, 2, 3, (4 << 16) + 5);
            var v2 = new Version(1, 2, 3, (4 << 16) + 5);
            var v3 = new Version(1, 3, 3, (4 << 16) + 5);

            Assert.True(v1 == v2, "v1 == v2");
            Assert.False(v1 != v2, "v1 != v2");
            Assert.False(v1 > v2, "v1 > v2");
            Assert.True(v1 >= v2, "v1 >= v2");
            Assert.False(v1 < v2, "v1 < v2");
            Assert.True(v1 <= v2, "v1 <= v2");

            Assert.False(v1 == v3, "v1 == v3");
            Assert.True(v1 != v3, "v1 != v3");
            Assert.False(v1 > v3, "v1 > v3");
            Assert.False(v1 >= v3, "v1 >= v3");
            Assert.True(v1 < v3, "v1 < v3");
            Assert.True(v1 <= v3, "v1 <= v3");

            Assert.False(v1 == null, "v1 == null");
            Assert.True(v1 != null, "v1 != null");
            Assert.True(v1 > null, "v1 > null");
            Assert.True(v1 >= null, "v1 >= null");
            Assert.False(v1 < null, "v1 < null");
            Assert.False(v1 <= null, "v1 <= null");

            Assert.False(null == v3, "null == v3");
            Assert.True(null != v3, "null != v3");
            Assert.False(null > v3, "null > v3");
            Assert.False(null >= v3, "null >= v3");
            Assert.True(null < v3, "null < v3");
            Assert.True(null <= v3, "null <= v3");

            Version v4 = null;
            Version v5 = null;

            Assert.True(v4 == v5, "v4 == v5");
            Assert.False(v4 != v5, "v4 != v5");
            Assert.False(v4 > v5, "v4 > v5");
            Assert.False(v4 >= v5, "v4 >= v5");
            Assert.False(v4 < v5, "v4 < v5");
            Assert.False(v4 <= v5, "v4 <= v5");
        }
    }
}
