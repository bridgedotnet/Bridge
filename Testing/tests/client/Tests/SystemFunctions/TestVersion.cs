using Bridge.QUnit;

using System;

namespace ClientTestLibrary
{
    internal class TestVersion
    {
        public static void TestConstructors(Assert assert)
        {
            assert.Expect(42);

            var v1 = new Version();

            assert.Ok(v1 != null, "v1 created");
            assert.Equal(v1.Major, 0, "v1.Major 0");
            assert.Equal(v1.Minor, 0, "v1.Minor 0");
            assert.Equal(v1.Build, -1, "v1.Build -1");
            assert.Equal(v1.Revision, -1, "v1.Revision -1");
            assert.Equal(v1.MajorRevision, -1, "v1.MajorRevision -1");
            assert.Equal(v1.MinorRevision, -1, "v1.MinorRevision -1");

            var v2 = new Version("2.4.1128.2");
            assert.Ok(v2 != null, "v2 created");
            assert.Equal(v2.Major, 2, "v2.Major 2");
            assert.Equal(v2.Minor, 4, "v2.Minor 4");
            assert.Equal(v2.Build, 1128, "v2.Build 1128");
            assert.Equal(v2.Revision, 2, "v2.Revision 2");
            assert.Equal(v2.MajorRevision, 0, "v2.MajorRevision 0");
            assert.Equal(v2.MinorRevision, 2, "v2.MinorRevision 2");

            var v3 = new Version("2.4.1128.65537");
            assert.Ok(v3 != null, "v3 created");
            assert.Equal(v3.Major, 2, "v3.Major 2");
            assert.Equal(v3.Minor, 4, "v3.Minor 4");
            assert.Equal(v3.Build, 1128, "v3.Build 1128");
            assert.Equal(v3.Revision, 65537, "v3.Revision 65537");
            assert.Equal(v3.MajorRevision, 1, "v3.MajorRevision 1");
            assert.Equal(v3.MinorRevision, 1, "v3.MinorRevision 1");

            var v4 = new Version(20, 10);
            assert.Ok(v4 != null, "v4 created");
            assert.Equal(v4.Major, 20, "v4.Major 20");
            assert.Equal(v4.Minor, 10, "v4.Minor 10");
            assert.Equal(v4.Build, -1, "v4.Build -1");
            assert.Equal(v4.Revision, -1, "v4.Revision -1");
            assert.Equal(v4.MajorRevision, -1, "v4.MajorRevision -1");
            assert.Equal(v4.MinorRevision, -1, "v4.MinorRevision -1");

            var v5 = new Version(200, 100, 300);
            assert.Ok(v5 != null, "v5 created");
            assert.Equal(v5.Major, 200, "v5.Major 200");
            assert.Equal(v5.Minor, 100, "v5.Minor 100");
            assert.Equal(v5.Build, 300, "v5.Build 300");
            assert.Equal(v5.Revision, -1, "v5.Revision -1");
            assert.Equal(v5.MajorRevision, -1, "v5.MajorRevision -1");
            assert.Equal(v5.MinorRevision, -1, "v5.MinorRevision -1");

            var v6 = new Version(2000, 1000, 3000, (345 << 16) + 4000);
            assert.Ok(v6 != null, "v6 created");
            assert.Equal(v6.Major, 2000, "v6.Major 2000");
            assert.Equal(v6.Minor, 1000, "v6.Minor 1000");
            assert.Equal(v6.Build, 3000, "v6.Build 3000");
            assert.Equal(v6.Revision, 22613920, "v6.Revision (345 << 16) + 4000 = 22613920");
            assert.Equal(v6.MajorRevision, 345, "v6.MajorRevision 345");
            assert.Equal(v6.MinorRevision, 4000, "v6.MinorRevision 4");
        }

        public static void TestCloneCompare(Assert assert)
        {
            assert.Expect(13);

            var v1 = new Version(1, 2, 3, (4 << 16) + 5);

            var o = v1.Clone();
            assert.Ok(o != null, "v1 Cloned");

            var v2 = o as Version;
            assert.Ok(v2 != null, "v1 Cloned as Version");

            assert.Equal(v2.Major, 1, "v2.Major 1");
            assert.Equal(v2.Minor, 2, "v2.Minor 2");
            assert.Equal(v2.Build, 3, "v2.Build 3");
            assert.Equal(v2.Revision, 262149, "v2.Revision  (4 << 16) + 5 = 262149");
            assert.Equal(v2.MajorRevision, 4, "v2.MajorRevision 4");
            assert.Equal(v2.MinorRevision, 5, "v2.MinorRevision 5");

            var v3 = new Version(1, 2, 2, (4 << 16) + 5);
            assert.Equal(v1.CompareTo(v3), 1, "v1.CompareTo(v3)");

            var v4 = new Version(1, 3, 3, (4 << 16) + 5);
            assert.Equal(v1.CompareTo(v4), -1, "v1.CompareTo(v4)");

            assert.Equal(v1.CompareTo(o), 0, "v1.CompareTo(o)");
            assert.Equal(v1.CompareTo(v2), 0, "v1.CompareTo(v2)");
            assert.NotEqual(v1.CompareTo(null), 0, "v1.CompareTo(null)");
        }

        public static void TestEqualsGetHashCode(Assert assert)
        {
            assert.Expect(9);

            var v1 = new Version(100, 200, 300, (400 << 16) + 500);
            var v2 = new Version(100, 200, 300, (400 << 16) + 500);
            var v3 = new Version(101, 200, 300, (400 << 16) + 500);
            var o = new object();
            object o2 = v2;

            assert.Ok(v1.Equals(v2), "v1.Equals(v2)");
            assert.NotOk(v1.Equals(v3), "v1.Equals(v3)");
            assert.NotOk(v1.Equals(o), "v1.Equals(o)");
            assert.NotOk(v1.Equals(null), "v1.Equals(null)");
            assert.NotOk(v1.Equals(100), "v1.Equals(100)");
            assert.Ok(v1.Equals(o2), "v1.Equals(o2)");

            assert.Equal(v1.GetHashCode(), 1283637748, "v1.GetHashCode()");
            assert.Equal(v2.GetHashCode(), 1283637748, "v2.GetHashCode()");
            assert.Equal(v3.GetHashCode(), 1552073204, "v3.GetHashCode()");
        }

        public static void TestToString(Assert assert)
        {
            assert.Expect(10);

            var v1 = new Version("2.4.1128.65537");
            var v2 = new Version(100, 200, 300, (400 << 16) + 500);
            var v3 = new Version(100, 200, 300);
            var v4 = new Version(100, 200);
            var v5 = new Version();

            assert.Equal(v1.ToString(), "2.4.1128.65537", "c1.ToString()");
            assert.Equal(v2.ToString(), "100.200.300.26214900", "c2.ToString()");
            assert.Equal(v3.ToString(), "100.200.300", "c3.ToString()");
            assert.Equal(v4.ToString(), "100.200", "c4.ToString()");
            assert.Equal(v5.ToString(), "0.0", "c5.ToString()");

            assert.Equal(v1.ToString(1), "2", "c1.ToString(1)");
            assert.Equal(v1.ToString(2), "2.4", "c1.ToString(2)");
            assert.Equal(v1.ToString(3), "2.4.1128", "c1.ToString(3)");
            assert.Equal(v1.ToString(4), "2.4.1128.65537", "c1.ToString(4)");
            assert.Throws(() =>
            {
                v1.ToString(5);
            }, "c1.ToString(5)");
        }

        public static void TestParse(Assert assert)
        {
            assert.Expect(6);

            var s1 = "105.1.1128.65547";
            var v1 = new Version(s1);

            assert.Equal(Version.Parse(s1).ToString(), v1.ToString(), "Version.Parse(s1)");

            var s2 = "105.1";
            var v2 = new Version(s2);

            assert.Equal(Version.Parse(s2).ToString(), v2.ToString(), "Version.Parse(s2)");

            assert.Throws(() =>
            {
                Version.Parse("12,123.23.12");
            }, "Version.Parse(\"12,123.23.12\")");

            Version vp1;
            var b1 = Version.TryParse("12,123.23.12", out vp1);
            assert.Equal(b1, false, "b1");

            Version vp2;
            var b2 = Version.TryParse("12.3.2.1", out vp2);
            assert.Equal(b2, true, "b2");
            assert.Equal(vp2.ToString(), "12.3.2.1", "vp2.ToString()");
        }

        public static void TestOperators(Assert assert)
        {
            assert.Expect(30);

            var v1 = new Version(1, 2, 3, (4 << 16) + 5);
            var v2 = new Version(1, 2, 3, (4 << 16) + 5);
            var v3 = new Version(1, 3, 3, (4 << 16) + 5);

            assert.Ok(v1 == v2, "v1 == v2");
            assert.NotOk(v1 != v2, "v1 != v2");
            assert.NotOk(v1 > v2, "v1 > v2");
            assert.Ok(v1 >= v2, "v1 >= v2");
            assert.NotOk(v1 < v2, "v1 < v2");
            assert.Ok(v1 <= v2, "v1 <= v2");

            assert.NotOk(v1 == v3, "v1 == v3");
            assert.Ok(v1 != v3, "v1 != v3");
            assert.NotOk(v1 > v3, "v1 > v3");
            assert.NotOk(v1 >= v3, "v1 >= v3");
            assert.Ok(v1 < v3, "v1 < v3");
            assert.Ok(v1 <= v3, "v1 <= v3");

            assert.NotOk(v1 == null, "v1 == null");
            assert.Ok(v1 != null, "v1 != null");
            assert.Ok(v1 > null, "v1 > null");
            assert.Ok(v1 >= null, "v1 >= null");
            assert.NotOk(v1 < null, "v1 < null");
            assert.NotOk(v1 <= null, "v1 <= null");

            assert.NotOk(null == v3, "null == v3");
            assert.Ok(null != v3, "null != v3");
            assert.NotOk(null > v3, "null > v3");
            assert.NotOk(null >= v3, "null >= v3");
            assert.Ok(null < v3, "null < v3");
            assert.Ok(null <= v3, "null <= v3");

            Version v4 = null;
            Version v5 = null;

            assert.Ok(v4 == v5, "v4 == v5");
            assert.NotOk(v4 != v5, "v4 != v5");
            assert.NotOk(v4 > v5, "v4 > v5");
            assert.NotOk(v4 >= v5, "v4 >= v5");
            assert.NotOk(v4 < v5, "v4 < v5");
            assert.NotOk(v4 <= v5, "v4 <= v5");
        }

        public static void TestIssue499(Assert assert)
        {
            assert.Expect(1);

            var v1 = new Version();
            assert.Equal(v1.GetClassName(), "Bridge.Version", "#499 Version type name");
        }
    }
}
