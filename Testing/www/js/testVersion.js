/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.TestVersion', {
    statics: {
        testConstructors: function (assert) {
            assert.expect(42);

            var v1 = new Bridge.Version("constructor");

            assert.ok(Bridge.Version.op_Inequality(v1, null), "v1 created");
            assert.equal(v1.getMajor(), 0, "v1.Major 0");
            assert.equal(v1.getMinor(), 0, "v1.Minor 0");
            assert.equal(v1.getBuild(), -1, "v1.Build -1");
            assert.equal(v1.getRevision(), -1, "v1.Revision -1");
            assert.equal(v1.getMajorRevision(), -1, "v1.MajorRevision -1");
            assert.equal(v1.getMinorRevision(), -1, "v1.MinorRevision -1");

            var v2 = new Bridge.Version("constructor$4", "2.4.1128.2");
            assert.ok(Bridge.Version.op_Inequality(v2, null), "v2 created");
            assert.equal(v2.getMajor(), 2, "v2.Major 2");
            assert.equal(v2.getMinor(), 4, "v2.Minor 4");
            assert.equal(v2.getBuild(), 1128, "v2.Build 1128");
            assert.equal(v2.getRevision(), 2, "v2.Revision 2");
            assert.equal(v2.getMajorRevision(), 0, "v2.MajorRevision 0");
            assert.equal(v2.getMinorRevision(), 2, "v2.MinorRevision 2");

            var v3 = new Bridge.Version("constructor$4", "2.4.1128.65537");
            assert.ok(Bridge.Version.op_Inequality(v3, null), "v3 created");
            assert.equal(v3.getMajor(), 2, "v3.Major 2");
            assert.equal(v3.getMinor(), 4, "v3.Minor 4");
            assert.equal(v3.getBuild(), 1128, "v3.Build 1128");
            assert.equal(v3.getRevision(), 65537, "v3.Revision 65537");
            assert.equal(v3.getMajorRevision(), 1, "v3.MajorRevision 1");
            assert.equal(v3.getMinorRevision(), 1, "v3.MinorRevision 1");

            var v4 = new Bridge.Version("constructor$1", 20, 10);
            assert.ok(Bridge.Version.op_Inequality(v4, null), "v4 created");
            assert.equal(v4.getMajor(), 20, "v4.Major 20");
            assert.equal(v4.getMinor(), 10, "v4.Minor 10");
            assert.equal(v4.getBuild(), -1, "v4.Build -1");
            assert.equal(v4.getRevision(), -1, "v4.Revision -1");
            assert.equal(v4.getMajorRevision(), -1, "v4.MajorRevision -1");
            assert.equal(v4.getMinorRevision(), -1, "v4.MinorRevision -1");

            var v5 = new Bridge.Version("constructor$2", 200, 100, 300);
            assert.ok(Bridge.Version.op_Inequality(v5, null), "v5 created");
            assert.equal(v5.getMajor(), 200, "v5.Major 200");
            assert.equal(v5.getMinor(), 100, "v5.Minor 100");
            assert.equal(v5.getBuild(), 300, "v5.Build 300");
            assert.equal(v5.getRevision(), -1, "v5.Revision -1");
            assert.equal(v5.getMajorRevision(), -1, "v5.MajorRevision -1");
            assert.equal(v5.getMinorRevision(), -1, "v5.MinorRevision -1");

            var v6 = new Bridge.Version("constructor$3", 2000, 1000, 3000, 22613920);
            assert.ok(Bridge.Version.op_Inequality(v6, null), "v6 created");
            assert.equal(v6.getMajor(), 2000, "v6.Major 2000");
            assert.equal(v6.getMinor(), 1000, "v6.Minor 1000");
            assert.equal(v6.getBuild(), 3000, "v6.Build 3000");
            assert.equal(v6.getRevision(), 22613920, "v6.Revision (345 << 16) + 4000 = 22613920");
            assert.equal(v6.getMajorRevision(), 345, "v6.MajorRevision 345");
            assert.equal(v6.getMinorRevision(), 4000, "v6.MinorRevision 4");
        },
        testCloneCompare: function (assert) {
            assert.expect(13);

            var v1 = new Bridge.Version("constructor$3", 1, 2, 3, 262149);

            var o = v1.clone();
            assert.ok(o !== null, "v1 Cloned");

            var v2 = Bridge.as(o, Bridge.Version);
            assert.ok(Bridge.Version.op_Inequality(v2, null), "v1 Cloned as Version");

            assert.equal(v2.getMajor(), 1, "v2.Major 1");
            assert.equal(v2.getMinor(), 2, "v2.Minor 2");
            assert.equal(v2.getBuild(), 3, "v2.Build 3");
            assert.equal(v2.getRevision(), 262149, "v2.Revision  (4 << 16) + 5 = 262149");
            assert.equal(v2.getMajorRevision(), 4, "v2.MajorRevision 4");
            assert.equal(v2.getMinorRevision(), 5, "v2.MinorRevision 5");

            var v3 = new Bridge.Version("constructor$3", 1, 2, 2, 262149);
            assert.equal(v1.compareTo(v3), 1, "v1.CompareTo(v3)");

            var v4 = new Bridge.Version("constructor$3", 1, 3, 3, 262149);
            assert.equal(v1.compareTo(v4), -1, "v1.CompareTo(v4)");

            assert.equal(v1.compareTo$1(o), 0, "v1.CompareTo(o)");
            assert.equal(v1.compareTo(v2), 0, "v1.CompareTo(v2)");
            assert.notEqual(v1.compareTo(null), 0, "v1.CompareTo(null)");
        },
        testEqualsGetHashCode: function (assert) {
            assert.expect(9);

            var v1 = new Bridge.Version("constructor$3", 100, 200, 300, 26214900);
            var v2 = new Bridge.Version("constructor$3", 100, 200, 300, 26214900);
            var v3 = new Bridge.Version("constructor$3", 101, 200, 300, 26214900);
            var o = { };
            var o2 = v2;

            assert.ok(v1.equals(v2), "v1.Equals(v2)");
            assert.notOk(v1.equals(v3), "v1.Equals(v3)");
            assert.notOk(v1.equals$1(o), "v1.Equals(o)");
            assert.notOk(v1.equals(null), "v1.Equals(null)");
            assert.notOk(v1.equals$1(100), "v1.Equals(100)");
            assert.ok(v1.equals$1(o2), "v1.Equals(o2)");

            assert.equal(v1.getHashCode(), 1283637748, "v1.GetHashCode()");
            assert.equal(v2.getHashCode(), 1283637748, "v2.GetHashCode()");
            assert.equal(v3.getHashCode(), 1552073204, "v3.GetHashCode()");
        },
        testToString: function (assert) {
            assert.expect(10);

            var v1 = new Bridge.Version("constructor$4", "2.4.1128.65537");
            var v2 = new Bridge.Version("constructor$3", 100, 200, 300, 26214900);
            var v3 = new Bridge.Version("constructor$2", 100, 200, 300);
            var v4 = new Bridge.Version("constructor$1", 100, 200);
            var v5 = new Bridge.Version("constructor");

            assert.equal(v1.toString(), "2.4.1128.65537", "c1.ToString()");
            assert.equal(v2.toString(), "100.200.300.26214900", "c2.ToString()");
            assert.equal(v3.toString(), "100.200.300", "c3.ToString()");
            assert.equal(v4.toString(), "100.200", "c4.ToString()");
            assert.equal(v5.toString(), "0.0", "c5.ToString()");

            assert.equal(v1.toString$1(1), "2", "c1.ToString(1)");
            assert.equal(v1.toString$1(2), "2.4", "c1.ToString(2)");
            assert.equal(v1.toString$1(3), "2.4.1128", "c1.ToString(3)");
            assert.equal(v1.toString$1(4), "2.4.1128.65537", "c1.ToString(4)");
            assert.throws(function () {
                v1.toString$1(5);
            }, "c1.ToString(5)");
        },
        testParse: function (assert) {
            assert.expect(6);

            var s1 = "105.1.1128.65547";
            var v1 = new Bridge.Version("constructor$4", s1);

            assert.equal(Bridge.Version.parse(s1).toString(), v1.toString(), "Version.Parse(s1)");

            var s2 = "105.1";
            var v2 = new Bridge.Version("constructor$4", s2);

            assert.equal(Bridge.Version.parse(s2).toString(), v2.toString(), "Version.Parse(s2)");

            assert.throws(function () {
                Bridge.Version.parse("12,123.23.12");
            }, "Version.Parse(\"12,123.23.12\")");

            var vp1 = { };
            var b1 = Bridge.Version.tryParse("12,123.23.12", vp1);
            assert.equal(b1, false, "b1");

            var vp2 = { };
            var b2 = Bridge.Version.tryParse("12.3.2.1", vp2);
            assert.equal(b2, true, "b2");
            assert.equal(vp2.v.toString(), "12.3.2.1", "vp2.ToString()");
        },
        testOperators: function (assert) {
            assert.expect(30);

            var v1 = new Bridge.Version("constructor$3", 1, 2, 3, 262149);
            var v2 = new Bridge.Version("constructor$3", 1, 2, 3, 262149);
            var v3 = new Bridge.Version("constructor$3", 1, 3, 3, 262149);

            assert.ok(Bridge.Version.op_Equality(v1, v2), "v1 == v2");
            assert.notOk(Bridge.Version.op_Inequality(v1, v2), "v1 != v2");
            assert.notOk(Bridge.Version.op_GreaterThan(v1, v2), "v1 > v2");
            assert.ok(Bridge.Version.op_GreaterThanOrEqual(v1, v2), "v1 >= v2");
            assert.notOk(Bridge.Version.op_LessThan(v1, v2), "v1 < v2");
            assert.ok(Bridge.Version.op_LessThanOrEqual(v1, v2), "v1 <= v2");

            assert.notOk(Bridge.Version.op_Equality(v1, v3), "v1 == v3");
            assert.ok(Bridge.Version.op_Inequality(v1, v3), "v1 != v3");
            assert.notOk(Bridge.Version.op_GreaterThan(v1, v3), "v1 > v3");
            assert.notOk(Bridge.Version.op_GreaterThanOrEqual(v1, v3), "v1 >= v3");
            assert.ok(Bridge.Version.op_LessThan(v1, v3), "v1 < v3");
            assert.ok(Bridge.Version.op_LessThanOrEqual(v1, v3), "v1 <= v3");

            assert.notOk(Bridge.Version.op_Equality(v1, null), "v1 == null");
            assert.ok(Bridge.Version.op_Inequality(v1, null), "v1 != null");
            assert.ok(Bridge.Version.op_GreaterThan(v1, null), "v1 > null");
            assert.ok(Bridge.Version.op_GreaterThanOrEqual(v1, null), "v1 >= null");
            assert.notOk(Bridge.Version.op_LessThan(v1, null), "v1 < null");
            assert.notOk(Bridge.Version.op_LessThanOrEqual(v1, null), "v1 <= null");

            assert.notOk(Bridge.Version.op_Equality(null, v3), "null == v3");
            assert.ok(Bridge.Version.op_Inequality(null, v3), "null != v3");
            assert.notOk(Bridge.Version.op_GreaterThan(null, v3), "null > v3");
            assert.notOk(Bridge.Version.op_GreaterThanOrEqual(null, v3), "null >= v3");
            assert.ok(Bridge.Version.op_LessThan(null, v3), "null < v3");
            assert.ok(Bridge.Version.op_LessThanOrEqual(null, v3), "null <= v3");

            var v4 = null;
            var v5 = null;

            assert.ok(Bridge.Version.op_Equality(v4, v5), "v4 == v5");
            assert.notOk(Bridge.Version.op_Inequality(v4, v5), "v4 != v5");
            assert.notOk(Bridge.Version.op_GreaterThan(v4, v5), "v4 > v5");
            assert.notOk(Bridge.Version.op_GreaterThanOrEqual(v4, v5), "v4 >= v5");
            assert.notOk(Bridge.Version.op_LessThan(v4, v5), "v4 < v5");
            assert.notOk(Bridge.Version.op_LessThanOrEqual(v4, v5), "v4 <= v5");
        },
        testIssue499: function (assert) {
            assert.expect(1);

            var v1 = new Bridge.Version("constructor");
            assert.equal(Bridge.getTypeName(v1), "Bridge.Version", "#499 Version type name");
        }
    }
});



Bridge.init();