/* global Bridge */

"use strict";

Bridge.define('Bridge.ClientTest.ArrayTests', {
    typePropertiesAreCorrect: function () {
        var arr = [1, 2, 3];
        Bridge.Test.Assert.true$1(Bridge.is(arr, Array), "is Array should be true");
        Bridge.Test.Assert.true$1(Bridge.is(arr, Array), "is int[] should be true");
        Bridge.Test.Assert.true$1(Bridge.is(arr, Bridge.ICollection), "is ICollection should be true");
        Bridge.Test.Assert.true$1(Bridge.is(arr, Bridge.IEnumerable), "is IEnumerable should be true");
        Bridge.Test.Assert.true$1(Bridge.is(arr, Bridge.ICloneable), "is ICloneable should be true");
        Bridge.Test.Assert.true$1(Bridge.is(arr, Bridge.ICollection$1(Bridge.Int)), "is ICollection<int> should be true");
        Bridge.Test.Assert.true$1(Bridge.is(arr, Bridge.IEnumerable$1(Bridge.Int)), "is IEnumerable<int> should be true");
        Bridge.Test.Assert.true$1(Bridge.is(arr, Bridge.IList$1(Bridge.Int)), "is IList<int> should be true");
    },
    lengthWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Array.init(0, 0).length, 0);
        Bridge.Test.Assert.areEqual(["x"].length, 1);
        Bridge.Test.Assert.areEqual(["x", "y"].length, 2);
    },
    rankIsOne: function () {
        Bridge.Test.Assert.areEqual(Bridge.Array.getRank(Bridge.Array.init(0, 0)), 1);
    },
    getLengthWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Array.getLength(Bridge.Array.init(0, 0), 0), 0);
        Bridge.Test.Assert.areEqual(Bridge.Array.getLength(["x"], 0), 1);
        Bridge.Test.Assert.areEqual(Bridge.Array.getLength(["x", "y"], 0), 2);
    },
    getLowerBound: function () {
        Bridge.Test.Assert.areEqual(Bridge.Array.getLower(Bridge.Array.init(0, 0), 0), 0);
        Bridge.Test.Assert.areEqual(Bridge.Array.getLower(["x"], 0), 0);
        Bridge.Test.Assert.areEqual(Bridge.Array.getLower(["x", "y"], 0), 0);
    },
    getUpperBoundWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.Array.getLength(Bridge.Array.init(0, 0), 0) - 1), -1);
        Bridge.Test.Assert.areEqual((Bridge.Array.getLength(["x"], 0) - 1), 0);
        Bridge.Test.Assert.areEqual((Bridge.Array.getLength(["x", "y"], 0) - 1), 1);
    },
    gettingValueByIndexWorks: function () {
        Bridge.Test.Assert.areEqual(["x", "y"][0], "x");
        Bridge.Test.Assert.areEqual(["x", "y"][1], "y");
    },
    getValueWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Array.get(["x", "y"], 0), "x");
        Bridge.Test.Assert.areEqual(Bridge.Array.get(["x", "y"], 1), "y");
    },
    settingValueByIndexWorks: function () {
        var arr = Bridge.Array.init(2, null);
        arr[0] = "x";
        arr[1] = "y";
        Bridge.Test.Assert.areEqual(arr[0], "x");
        Bridge.Test.Assert.areEqual(arr[1], "y");
    },
    setValueWorks: function () {
        var arr = Bridge.Array.init(2, null);
        Bridge.Array.set(arr, "x", 0);
        Bridge.Array.set(arr, "y", 1);
        Bridge.Test.Assert.areEqual(arr[0], "x");
        Bridge.Test.Assert.areEqual(arr[1], "y");
    },
    foreachWorks: function () {
        var $t;
        var result = "";
        $t = Bridge.getEnumerator(["x", "y"]);
        while ($t.moveNext()) {
            var s = $t.getCurrent();
            result += s;
        }
        Bridge.Test.Assert.areEqual(result, "xy");
    }    ,
    cloneWorks: function () {
        var arr = ["x", "y"];
        var arr2 = (Bridge.Array.clone(arr));
        Bridge.Test.Assert.$false(arr === arr2);
        Bridge.Test.Assert.areEqual(arr, arr2);
    },
    concatWorks: function () {
        var arr = ["a", "b"];
        Bridge.Test.Assert.areEqual(arr.concat("c"), ["a", "b", "c"]);
        Bridge.Test.Assert.areEqual(arr.concat("c", "d"), ["a", "b", "c", "d"]);
        Bridge.Test.Assert.areEqual(arr, ["a", "b"]);
    },
    containsWorks: function () {
        var arr = ["x", "y"];
        Bridge.Test.Assert.$true(Bridge.Linq.Enumerable.from(arr).contains("x"));
        Bridge.Test.Assert.$false(Bridge.Linq.Enumerable.from(arr).contains("z"));
    },
    containsUsesEqualsMethod: function () {
        var arr = [new Bridge.ClientTest.ArrayTests.C(1), new Bridge.ClientTest.ArrayTests.C(2), new Bridge.ClientTest.ArrayTests.C(3)];
        Bridge.Test.Assert.$true(Bridge.Linq.Enumerable.from(arr).contains(new Bridge.ClientTest.ArrayTests.C(2)));
        Bridge.Test.Assert.$false(Bridge.Linq.Enumerable.from(arr).contains(new Bridge.ClientTest.ArrayTests.C(4)));
    },
    allWithArrayItemFilterCallbackWorks: function () {
        Bridge.Test.Assert.$true(Bridge.Linq.Enumerable.from([1, 2, 3]).all(function (x) {
            return x > 0;
        }));
        Bridge.Test.Assert.$false(Bridge.Linq.Enumerable.from([1, 2, 3]).all(function (x) {
            return x > 1;
        }));
    },
    sliceWithoutEndWorks: function () {
        Bridge.Test.Assert.areEqual(["a", "b", "c", "d"].slice(2), ["c", "d"]);
        Bridge.Test.Assert.areEqual(["a", "b", "c", "d"].slice(1, 3), ["b", "c"]);
    },
    foreachWithArrayItemCallbackWorks: function () {
        var result = "";
        Bridge.Linq.Enumerable.from(["a", "b", "c"]).forEach(function (s) {
            return result += s;
        });
        Bridge.Test.Assert.areEqual(result, "abc");
    },
    foreachWithArrayCallbackWorks: function () {
        var result = "";
        Bridge.Linq.Enumerable.from(["a", "b", "c"]).forEach(function (s, i) {
            return result += s + i;
        });
        Bridge.Test.Assert.areEqual(result, "a0b1c2");
    },
    indexOfWithoutStartIndexWorks: function () {
        Bridge.Test.Assert.areEqual(["a", "b", "c", "b"].indexOf("b"), 1);
    },
    indexOfWithoutStartIndexUsesEqualsMethod: function () {
        var arr = [new Bridge.ClientTest.ArrayTests.C(1), new Bridge.ClientTest.ArrayTests.C(2), new Bridge.ClientTest.ArrayTests.C(3)];
        Bridge.Test.Assert.areEqual(Bridge.Linq.Enumerable.from(arr).indexOf(new Bridge.ClientTest.ArrayTests.C(2)), 1);
        Bridge.Test.Assert.areEqual(Bridge.Linq.Enumerable.from(arr).indexOf(new Bridge.ClientTest.ArrayTests.C(4)), -1);
    },
    indexOfWithStartIndexWorks: function () {
        Bridge.Test.Assert.areEqual(["a", "b", "c", "b"].indexOf("b", 2), 3);
    },
    joinWithoutDelimiterWorks: function () {
        Bridge.Test.Assert.areEqual(["a", "b", "c", "b"].join(","), "a,b,c,b");

        Bridge.Test.Assert.areEqual(["a", "b", "c", "b"].join("|"), "a|b|c|b");
    },
    reverseWorks: function () {
        var arr = [1, 3, 4, 1, 3, 2];
        arr.reverse();
        Bridge.Test.Assert.areEqual(arr, [2, 3, 1, 4, 3, 1]);
    },
    anyWithArrayItemFilterCallbackWorks: function () {
        Bridge.Test.Assert.$true(Bridge.Linq.Enumerable.from([1, 2, 3, 4]).any(function (i) {
            return i > 1;
        }));
        Bridge.Test.Assert.$false(Bridge.Linq.Enumerable.from([1, 2, 3, 4]).any(function (i) {
            return i > 5;
        }));
    },
    sortWithDefaultCompareWorks: function () {
        var arr = [1, 6, 6, 4, 2];
        arr.sort();
        Bridge.Test.Assert.areEqual(arr, [1, 2, 4, 6, 6]);
    },
    foreachWhenCastToIListWorks: function () {
        var $t;
        var list = ["x", "y"];
        var result = "";
        $t = Bridge.getEnumerator(list);
        while ($t.moveNext()) {
            var s = $t.getCurrent();
            result += s;
        }
        Bridge.Test.Assert.areEqual(result, "xy");
    }    ,
    iCollectionCountWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.Test.Assert.areEqual(Bridge.Array.getCount(l), 3);
    },
    iCollectionAddWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.Array.add(l, "a");
        Bridge.Test.Assert.areEqual(l, ["x", "y", "z", "a"]);
    },
    iCollectionClearWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.Array.clear(l);
        Bridge.Test.Assert.areEqual(l, Bridge.Array.init(0, null));
    },
    iCollectionContainsWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.Test.Assert.$true(Bridge.Array.contains(l, "y"));
        Bridge.Test.Assert.$false(Bridge.Array.contains(l, "a"));
    },
    iCollectionContainsUsesEqualsMethod: function () {
        var l = [new Bridge.ClientTest.ArrayTests.C(1), new Bridge.ClientTest.ArrayTests.C(2), new Bridge.ClientTest.ArrayTests.C(3)];
        Bridge.Test.Assert.$true(Bridge.Array.contains(l, new Bridge.ClientTest.ArrayTests.C(2)));
        Bridge.Test.Assert.$false(Bridge.Array.contains(l, new Bridge.ClientTest.ArrayTests.C(4)));
    },
    iCollectionRemoveWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.Test.Assert.$true(Bridge.Array.remove(l, "y"));
        Bridge.Test.Assert.$false(Bridge.Array.remove(l, "a"));
        Bridge.Test.Assert.areEqual(l, ["x", "z"]);
    },
    iListIndexingWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.Test.Assert.areEqual(Bridge.Array.getItem(l, 1), "y");
        Bridge.Array.setItem(l, 1, "a");
        Bridge.Test.Assert.areEqual(l, ["x", "a", "z"]);
    },
    iListIndexOfWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.Test.Assert.areEqual(Bridge.Array.indexOf(l, "y"), 1);
        Bridge.Test.Assert.areEqual(Bridge.Array.indexOf(l, "a"), -1);
    },
    iListIndexOfUsesEqualsMethod: function () {
        var arr = [new Bridge.ClientTest.ArrayTests.C(1), new Bridge.ClientTest.ArrayTests.C(2), new Bridge.ClientTest.ArrayTests.C(3)];
        Bridge.Test.Assert.areEqual(Bridge.Linq.Enumerable.from(arr).indexOf(new Bridge.ClientTest.ArrayTests.C(2)), 1);
        Bridge.Test.Assert.areEqual(Bridge.Linq.Enumerable.from(arr).indexOf(new Bridge.ClientTest.ArrayTests.C(4)), -1);
    },
    iListInsertWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.Array.insert(l, 1, "a");
        Bridge.Test.Assert.areEqual(l, ["x", "a", "y", "z"]);
    },
    iListRemoveAtWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.Array.removeAt(l, 1);
        Bridge.Test.Assert.areEqual(l, ["x", "z"]);
    }
});

Bridge.define('Bridge.ClientTest.ArrayTests.C', {
    i: 0,
    constructor: function (i) {
        this.i = i;
    },
    equals: function (o) {
        return Bridge.is(o, Bridge.ClientTest.ArrayTests.C) && this.i === (Bridge.cast(o, Bridge.ClientTest.ArrayTests.C)).i;
    },
    getHashCode: function () {
        return this.i;
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.ComparerTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.Comparer$1(Object)), "Bridge.Comparer$1$Object", "GetClassName()");

        var comparer = new Bridge.Comparer$1(Object)(Bridge.Comparer$1.$default.fn);
        Bridge.Test.Assert.true$1(true, "is Comparer<object> should be true");
        Bridge.Test.Assert.true$1(Bridge.is(comparer, Bridge.IComparer$1(Object)), "is IComparer<object> should be true");

        var comparer1 = new Bridge.Comparer$1(Bridge.Int)(Bridge.Comparer$1.$default.fn);
        Bridge.Test.Assert.true$1(true, "is Comparer<int> should be true");
        Bridge.Test.Assert.true$1(Bridge.is(comparer1, Bridge.IComparer$1(Bridge.Int)), "is IComparer<int> should be true");
    },
    defaultComparerCanOrderNumbers: function () {
        Bridge.Test.Assert.areEqual$1(new Bridge.Comparer$1(Bridge.Int)(Bridge.Comparer$1.$default.fn).compare(3, 8), -1, "Compare(3, 8) should be -1");
        Bridge.Test.Assert.areEqual$1(new Bridge.Comparer$1(Bridge.Int)(Bridge.Comparer$1.$default.fn).compare(3, 3), 0, "Compare(3, 3) should be 0");
        Bridge.Test.Assert.areEqual$1(new Bridge.Comparer$1(Bridge.Int)(Bridge.Comparer$1.$default.fn).compare(8, 3), 1, "Compare(8, 3) should be 1");
    },
    defaultComparerCanOrderNullValues: function () {
        Bridge.Test.Assert.areEqual$1(new Bridge.Comparer$1(Bridge.Int)(Bridge.Comparer$1.$default.fn).compare(0, null), 1, "Compare(0, null) should be 1");
        Bridge.Test.Assert.areEqual$1(new Bridge.Comparer$1(Bridge.Int)(Bridge.Comparer$1.$default.fn).compare(null, 0), -1, "Compare(null, 0) should be -1");
        Bridge.Test.Assert.areEqual$1(new Bridge.Comparer$1(Bridge.Int)(Bridge.Comparer$1.$default.fn).compare(null, null), 0, "Compare(null, null) should be 0");
    },
    defaultComparerUsesCompareMethodIfClassImplementsIComparable: function () {
        Bridge.Test.Assert.areEqual$1(new Bridge.Comparer$1(Bridge.ClientTest.Collections.Generic.ComparerTests.C)(Bridge.Comparer$1.$default.fn).compare(new Bridge.ClientTest.Collections.Generic.ComparerTests.C(3), new Bridge.ClientTest.Collections.Generic.ComparerTests.C(8)), -1, "Compare(3, 8) should be -1");
        Bridge.Test.Assert.areEqual$1(new Bridge.Comparer$1(Bridge.ClientTest.Collections.Generic.ComparerTests.C)(Bridge.Comparer$1.$default.fn).compare(new Bridge.ClientTest.Collections.Generic.ComparerTests.C(3), new Bridge.ClientTest.Collections.Generic.ComparerTests.C(3)), 0, "Compare(3, 3) should be 0");
        Bridge.Test.Assert.areEqual$1(new Bridge.Comparer$1(Bridge.ClientTest.Collections.Generic.ComparerTests.C)(Bridge.Comparer$1.$default.fn).compare(new Bridge.ClientTest.Collections.Generic.ComparerTests.C(8), new Bridge.ClientTest.Collections.Generic.ComparerTests.C(3)), 1, "Compare(8, 3) should be 1");
    },
    createWorks: function () {
        var comparer = new Bridge.Comparer$1(Bridge.Int)(function (x, y) {
            Bridge.Test.Assert.areEqual$1(x, 8, "x should be 8");
            Bridge.Test.Assert.areEqual$1(y, 3, "y should be 3");
            return 42;
        });
        Bridge.Test.Assert.areEqual$1(comparer.compare(8, 3), 42, "The result should be 42");
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.ComparerTests.C', {
    inherits: function () { return [Bridge.IComparable$1(Bridge.ClientTest.Collections.Generic.ComparerTests.C)]; },
    value: 0,
    constructor: function (value) {
        this.value = value;
    },
    compareTo: function (other) {
        return Bridge.compare(this.value, other.value);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.EqualityComparerTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.EqualityComparer$1(Object)), "Bridge.EqualityComparer$1$Object", "FullName should be correct");
        var dict = new Bridge.EqualityComparer$1(Object)();
        Bridge.Test.Assert.true$1(Bridge.is(dict, Bridge.EqualityComparer$1(Object)), "is EqualityComparer<object> should be true");
        Bridge.Test.Assert.true$1(Bridge.is(dict, Bridge.IEqualityComparer$1(Object)), "is IEqualityComparer<object> should be true");
    },
    defaultComparerCanGetHashCodeOfNumber: function () {
        Bridge.Test.Assert.areEqual(new Bridge.EqualityComparer$1(Object)().getHashCode(12345, true), Bridge.getHashCode(12345));
    },
    defaultComparerReturnsZeroAsHashCodeForNullAndUndefined: function () {
        Bridge.Test.Assert.areEqual(new Bridge.EqualityComparer$1(Object)().getHashCode(null, true), 0);
        Bridge.Test.Assert.areEqual(new Bridge.EqualityComparer$1(Object)().getHashCode(undefined, true), 0);
    },
    defaultComparerCanDetermineEquality: function () {
        var o1 = { }, o2 = { };

        Bridge.Test.Assert.true$1(new Bridge.EqualityComparer$1(Object)().equals(null, null), "null, null");
        Bridge.Test.Assert.false$1(new Bridge.EqualityComparer$1(Object)().equals(null, o1), "null, o1");
        Bridge.Test.Assert.false$1(new Bridge.EqualityComparer$1(Object)().equals(o1, null), "o1, null");
        Bridge.Test.Assert.true$1(new Bridge.EqualityComparer$1(Object)().equals(o1, o1), "o1, o1");
        Bridge.Test.Assert.false$1(new Bridge.EqualityComparer$1(Object)().equals(o1, o2), "o1, o2");
    },
    defaultComparerInvokesOverriddenGetHashCode: function () {
        Bridge.Test.Assert.areEqual(new Bridge.EqualityComparer$1(Object)().getHashCode(Bridge.merge(new Bridge.ClientTest.Collections.Generic.EqualityComparerTests.MyClass(), {
            hashCode: 42158
        } ), true), 42158);
    },
    defaultComparerInvokesOverriddenEquals: function () {
        var c = new Bridge.ClientTest.Collections.Generic.EqualityComparerTests.MyClass();
        var other = new Bridge.ClientTest.Collections.Generic.EqualityComparerTests.MyClass();
        c.shouldEqual = false;
        Bridge.Test.Assert.$false(new Bridge.EqualityComparer$1(Object)().equals(c, other));
        Bridge.Test.Assert.areStrictEqual(c.other, other);

        c.shouldEqual = true;
        c.other = null;
        Bridge.Test.Assert.$true(new Bridge.EqualityComparer$1(Object)().equals(c, other));
        Bridge.Test.Assert.areStrictEqual(c.other, other);

        c.shouldEqual = true;
        c.other = other;
        Bridge.Test.Assert.$false(new Bridge.EqualityComparer$1(Object)().equals(c, null)); // We should not invoke our own equals so its return value does not matter.
        Bridge.Test.Assert.areEqual(c.other, other); // We should not invoke our own equals so the 'other' member should not be set.
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.EqualityComparerTests.MyClass', {
    hashCode: 0,
    other: null,
    shouldEqual: false,
    getHashCode: function () {
        return this.hashCode;
    },
    equals: function (o) {
        this.other = o;
        return this.shouldEqual;
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.GenericDictionaryTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.Dictionary$2(Bridge.Int,String)), "Bridge.Dictionary$2$Bridge.Int$String", "FullName should be correct");
        var dict = new Bridge.Dictionary$2(Bridge.Int,String)();
        Bridge.Test.Assert.true$1(Bridge.is(dict, Bridge.Dictionary$2(Bridge.Int,String)), "is Dictionary<int,string> should be true");
        Bridge.Test.Assert.true$1(Bridge.is(dict, Bridge.IDictionary$2(Bridge.Int,String)), "is IDictionary<int,string> should be true");
        Bridge.Test.Assert.true$1(Bridge.is(dict, Bridge.IEnumerable$1(Bridge.KeyValuePair$2(Bridge.Int,String))), "is IEnumerable<KeyValuePair<int,string>> should be true");
    },
    defaultConstructorWorks: function () {
        var d = new Bridge.Dictionary$2(Bridge.Int,String)();
        Bridge.Test.Assert.areEqual$1(d.getCount(), 0, "Count is 0");
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(d.getEnumerator()), "Bridge.CustomEnumerator", "Enumerator should be Bridge.CustomEnumerator");
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(d.getComparer()), "Bridge.EqualityComparer$1$Object", "Comparer should be Bridge.EqualityComparer$1$Object");
    },
    capacityConstructorWorks: function () {
        var d = new Bridge.Dictionary$2(Bridge.Int, String)();
        Bridge.Test.Assert.areEqual(d.getCount(), 0);
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(d.getEnumerator()), "Bridge.CustomEnumerator", "Enumerator should be Bridge.CustomEnumerator");
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(d.getComparer()), "Bridge.EqualityComparer$1$Object", "Comparer should be Bridge.EqualityComparer$1$Object");
    },
    capacityAndEqualityComparerWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.GenericDictionaryTests.TestEqualityComparer();
        var d = new Bridge.Dictionary$2(String, String)(null, c);
        Bridge.Test.Assert.areEqual(d.getCount(), 0);
        Bridge.Test.Assert.areStrictEqual(d.getComparer(), c);
    },
    equalityComparerOnlyConstructorWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.GenericDictionaryTests.TestEqualityComparer();
        var d = new Bridge.Dictionary$2(String, Bridge.Int)(null, c);
        Bridge.Test.Assert.areEqual(d.getCount(), 0);
        Bridge.Test.Assert.areStrictEqual(d.getComparer(), c);
    },
    countWorks: function () {
        var d = new Bridge.Dictionary$2(Bridge.Int,String)();
        Bridge.Test.Assert.areEqual(d.getCount(), 0);
        d.add(1, "1");
        Bridge.Test.Assert.areEqual(d.getCount(), 1);
        d.add(2, "2");
        Bridge.Test.Assert.areEqual(d.getCount(), 2);
    },
    keysWorks: function () {
        var $t;
        var d = Bridge.merge(new Bridge.Dictionary$2(String,String)(), [
            ["1", "a"], 
            ["2", "b"]
        ] );
        var keys = d.getKeys();
        Bridge.Test.Assert.$true(Bridge.is(keys, Bridge.IEnumerable$1(String)));
        Bridge.Test.Assert.$true(Bridge.is(keys, Bridge.ICollection$1(String)));
        Bridge.Test.Assert.areEqual(Bridge.Array.getCount(keys), 2);
        Bridge.Test.Assert.$true(Bridge.Array.contains(keys, "1"));
        Bridge.Test.Assert.$true(Bridge.Array.contains(keys, "2"));
        Bridge.Test.Assert.$false(Bridge.Array.contains(keys, "a"));

        var count = 0;
        $t = Bridge.getEnumerator(d.getKeys());
        while ($t.moveNext()) {
            var key = $t.getCurrent();
            if (key !== "1" && key !== "2") {
                Bridge.Test.Assert.fail$1("Unexpected key " + key);
            }
            count++;
        }
        Bridge.Test.Assert.areEqual(count, 2);
    }    ,
    valuesWorks: function () {
        var $t;
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"], 
            [2, "b"]
        ] );
        var values = d.getValues();
        Bridge.Test.Assert.$true(Bridge.is(values, Bridge.IEnumerable$1(String)));
        Bridge.Test.Assert.$true(Bridge.is(values, Bridge.ICollection$1(String)));
        Bridge.Test.Assert.areEqual(Bridge.Array.getCount(values), 2);
        Bridge.Test.Assert.$true(Bridge.Array.contains(values, "a"));
        Bridge.Test.Assert.$true(Bridge.Array.contains(values, "b"));
        Bridge.Test.Assert.$false(Bridge.Array.contains(values, "1"));

        var count = 0;
        $t = Bridge.getEnumerator(d.getValues());
        while ($t.moveNext()) {
            var value = $t.getCurrent();
            if (value !== "a" && value !== "b") {
                Bridge.Test.Assert.fail$1("Unexpected key " + value);
            }
            count++;
        }
        Bridge.Test.Assert.areEqual(count, 2);
    }    ,
    indexerGetterWorksForExistingItems: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"], 
            [2, "b"]
        ] );
        Bridge.Test.Assert.areEqual(d.get(1), "a");
    },
    indexerSetterWorks: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"], 
            [2, "b"]
        ] );
        d.set(2, "c");
        d.set(3, "d");
        Bridge.Test.Assert.areEqual(3, d.getCount());
        Bridge.Test.Assert.areEqual(d.get(1), "a");
        Bridge.Test.Assert.areEqual(d.get(2), "c");
        Bridge.Test.Assert.areEqual(d.get(3), "d");
    },
    indexerGetterThrowsForNonExistingItems: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"], 
            [2, "b"]
        ] );
        try {
            var x = d.get(10);
            Bridge.Test.Assert.$true(false);
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            if (Bridge.is($e, Bridge.KeyNotFoundException)) {
            }
            else {
                throw $e;
            }
        }
    },
    addWorks: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"], 
            [2, "b"]
        ] );
        d.add(3, "c");
        Bridge.Test.Assert.areEqual(3, d.getCount());
        Bridge.Test.Assert.areEqual(d.get(1), "a");
        Bridge.Test.Assert.areEqual(d.get(2), "b");
        Bridge.Test.Assert.areEqual(d.get(3), "c");
    },
    addThrowsIfItemAlreadyExists: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"], 
            [2, "b"]
        ] );
        try {
            d.add(2, "b");
            Bridge.Test.Assert.$true(false);
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            if (Bridge.is($e, Bridge.ArgumentException)) {
            }
            else {
                throw $e;
            }
        }
    },
    clearWorks: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"], 
            [2, "b"]
        ] );
        d.clear();
        Bridge.Test.Assert.areEqual(d.getCount(), 0);
    },
    containsKeyWorks: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"], 
            [2, "b"]
        ] );
        Bridge.Test.Assert.$true(d.containsKey(1));
        Bridge.Test.Assert.$false(d.containsKey(3));
    },
    enumeratingWorks: function () {
        var $t;
        var d = Bridge.merge(new Bridge.Dictionary$2(String,String)(), [
            ["1", "a"], 
            ["2", "b"]
        ] );
        var count = 0;
        $t = Bridge.getEnumerator(d);
        while ($t.moveNext()) {
            var kvp = $t.getCurrent();
            if (kvp.key === "1") {
                Bridge.Test.Assert.areEqual(kvp.value, "a");
            }
            else 
                if (kvp.key === "2") {
                    Bridge.Test.Assert.areEqual(kvp.value, "b");
                }
                else  {
                    Bridge.Test.Assert.fail$1("Invalid key " + kvp.key);
                }
            count++;
        }
        Bridge.Test.Assert.areEqual(count, 2);
    }    ,
    removeWorks: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"], 
            [2, "b"]
        ] );
        Bridge.Test.Assert.areStrictEqual(d.remove(2), true);
        Bridge.Test.Assert.areStrictEqual(d.remove(3), false);
        Bridge.Test.Assert.areEqual(d.getCount(), 1);
        Bridge.Test.Assert.areEqual(d.get(1), "a");
    },
    tryGetValueWithIntKeysWorks: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(String,Bridge.Int)(), [
            ["a", 1], 
            ["b", 2]
        ] );
        var i = { };

        Bridge.Test.Assert.$true(d.tryGetValue("a", i));
        Bridge.Test.Assert.areEqual(i.v, 1);
        Bridge.Test.Assert.$false(d.tryGetValue("c", i));
        Bridge.Test.Assert.areEqual(i.v, 0);
    },
    tryGetValueWithObjectKeysWorks: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(String,Object)(), [
            ["a", 1], 
            ["b", "X"]
        ] );
        var o = { };

        Bridge.Test.Assert.$true(d.tryGetValue("a", o));
        Bridge.Test.Assert.areEqual(o.v, 1);
        Bridge.Test.Assert.$false(d.tryGetValue("c", o));
        Bridge.Test.Assert.areStrictEqual(o.v, null);
    },
    canUseCustomComparer: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(String, Bridge.Int)(null, new Bridge.ClientTest.Collections.Generic.GenericDictionaryTests.TestEqualityComparer()), [
            ["a", 1], 
            ["b", 2]
        ] );
        d.set("a2", 100);
        Bridge.Test.Assert.areEqual(d.get("a3"), 100);
        Bridge.Test.Assert.areEqual(d.getCount(), 2);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.GenericDictionaryTests.TestEqualityComparer', {
    inherits: [Bridge.EqualityComparer$1(String)],
    equals: function (x, y) {
        return x.charCodeAt(0) === y.charCodeAt(0);
    },
    getHashCode: function (obj) {
        return obj.charCodeAt(0);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.ICollectionTests', {
    arrayImplementsICollection: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.Array.init(1, 0), Bridge.ICollection$1(Bridge.Int)));
    },
    customClassThatShouldImplementICollectionDoesSo: function () {
        Bridge.Test.Assert.$true(Bridge.is(new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(Bridge.Array.init(0, null)), Bridge.ICollection$1(String)));
    },
    arrayCastToICollectionCountWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Array.getCount((Bridge.cast(["x", "y", "z"], Bridge.ICollection$1(String)))), 3);
    },
    classImplementingICollectionCountWorks: function () {
        Bridge.Test.Assert.areEqual(new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]).getCount(), 2);
    },
    classImplementingICollectionCastToICollectionCountWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Array.getCount((Bridge.cast(new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y", "z"]), Bridge.ICollection$1(String)))), 3);
    },
    classImplementingICollectionAddWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]);
        c.add("z");
        Bridge.Test.Assert.areEqual(c.getCount(), 3);
        Bridge.Test.Assert.$true(c.contains("z"));
    },
    classImplementingICollectionCastToICollectionAddWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]);
        Bridge.Array.add(c, "z");
        Bridge.Test.Assert.areEqual(Bridge.Array.getCount(c), 3);
        Bridge.Test.Assert.$true(Bridge.Array.contains(c, "z"));
    },
    classImplementingICollectionClearWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]);
        c.clear();
        Bridge.Test.Assert.areEqual(c.getCount(), 0);
    },
    classImplementingICollectionCastToICollectionClearWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]);
        Bridge.Array.clear(c);
        Bridge.Test.Assert.areEqual(Bridge.Array.getCount(c), 0);
    },
    arrayCastToICollectionContainsWorks: function () {
        var arr = [new Bridge.ClientTest.Collections.Generic.ICollectionTests.C(1), new Bridge.ClientTest.Collections.Generic.ICollectionTests.C(2), new Bridge.ClientTest.Collections.Generic.ICollectionTests.C(3)];
        Bridge.Test.Assert.$true(Bridge.Array.contains(arr, new Bridge.ClientTest.Collections.Generic.ICollectionTests.C(2)));
        Bridge.Test.Assert.$false(Bridge.Array.contains(arr, new Bridge.ClientTest.Collections.Generic.ICollectionTests.C(4)));
    },
    classImplementingICollectionContainsWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]);
        Bridge.Test.Assert.$true(c.contains("x"));
        Bridge.Test.Assert.$false(c.contains("z"));
    },
    classImplementingICollectionCastToICollectionContainsWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]);
        Bridge.Test.Assert.$true(Bridge.Array.contains(c, "x"));
        Bridge.Test.Assert.$false(Bridge.Array.contains(c, "z"));
    },
    classImplementingICollectionRemoveWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]);
        c.remove("x");
        Bridge.Test.Assert.areEqual(c.getCount(), 1);
        c.remove("y");
        Bridge.Test.Assert.areEqual(c.getCount(), 0);
    },
    classImplementingICollectionCastToICollectionRemoveWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]);
        Bridge.Array.remove(c, "x");
        Bridge.Test.Assert.areEqual(Bridge.Array.getCount(c), 1);
        Bridge.Array.remove(c, "y");
        Bridge.Test.Assert.areEqual(Bridge.Array.getCount(c), 0);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.ICollectionTests.C', {
    _i: 0,
    constructor: function (i) {
        this._i = i;
    },
    equals: function (o) {
        return Bridge.is(o, Bridge.ClientTest.Collections.Generic.ICollectionTests.C) && this._i === (Bridge.cast(o, Bridge.ClientTest.Collections.Generic.ICollectionTests.C))._i;
    },
    getHashCode: function () {
        return this._i;
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection', {
    inherits: [Bridge.ICollection$1(String)],
    config: {
        properties: {
            Items: null
        }
    },
    constructor: function (items) {
        this.setItems(new Bridge.List$1(String)(items));
    },
    getCount: function () {
        return this.getItems().getCount();
    },
    getEnumerator: function () {
        return this.getEnumerator$1();
    },
    getEnumerator$1: function () {
        return this.getItems().getEnumerator();
    },
    add: function (item) {
        this.getItems().add(item);
    },
    clear: function () {
        this.getItems().clear();
    },
    contains: function (item) {
        return this.getItems().contains(item);
    },
    remove: function (item) {
        return this.getItems().remove(item);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.IDictionaryTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.IDictionary$2(Object,Object)), "Bridge.IDictionary$2$Object$Object", "FullName should be correct");
    },
    classImplementsInterfaces: function () {
        Bridge.Test.Assert.$true(Bridge.is(new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor"), Bridge.IDictionary$2(Bridge.Int,String)));
    },
    countWorks: function () {
        var d = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor");
        Bridge.Test.Assert.areEqual(d.getCount(), 0);

        var d2 = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor$1", Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [3, "c"]
        ] ));
        Bridge.Test.Assert.areEqual(d2.getCount(), 1);

        var d3 = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor");
        Bridge.Test.Assert.areEqual(d3.getCount(), 0);
    },
    keysWorks: function () {
        var $t;
        var actualKeys = [3, 6, 9];
        var d = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor$1", Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [3, "b"], 
            [6, "z"], 
            [9, "x"]
        ] ));
        var keys = d.getKeys();
        Bridge.Test.Assert.true$1(Bridge.is(keys, Bridge.IEnumerable$1(Bridge.Int)), "IEnumerable<int>");
        Bridge.Test.Assert.true$1(true, "ICollection<int>");

        var i = 0;
        $t = Bridge.getEnumerator(keys);
        while ($t.moveNext()) {
            var key = $t.getCurrent();
            Bridge.Test.Assert.areEqual(key, actualKeys[i]);
            i++;
        }
        Bridge.Test.Assert.areEqual(i, actualKeys.length);
    }    ,
    getItemWorks: function () {
        var d = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor$1", Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [3, "b"], 
            [6, "z"], 
            [9, "x"]
        ] ));

        var di2 = Bridge.cast(d, Bridge.IDictionary$2(Bridge.Int,String));

        Bridge.Test.Assert.areEqual(d.getItem(9), "x");
        Bridge.Test.Assert.areEqual(di2.getItem(6), "z");

        try {
            var x = d.getItem(1);
            Bridge.Test.Assert.fail$1("Should throw");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
        }

        try {
            var x1 = di2.getItem(1);
            Bridge.Test.Assert.fail$1("Should throw");
        }
        catch ($e1) {
            $e1 = Bridge.Exception.create($e1);
        }
    },
    valuesWorks: function () {
        var $t;
        var actualValues = ["b", "z", "x"];
        var d2 = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor$1", Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [3, "b"], 
            [6, "z"], 
            [9, "x"]
        ] ));
        var values = d2.getValues();
        Bridge.Test.Assert.$true(Bridge.is(values, Bridge.IEnumerable$1(String)));

        var i = 0;

        $t = Bridge.getEnumerator(values);
        while ($t.moveNext()) {
            var val = $t.getCurrent();
            Bridge.Test.Assert.areEqual(val, actualValues[i]);
            i++;
        }
        Bridge.Test.Assert.areEqual(i, actualValues.length);
    }    ,
    containsKeyWorks: function () {
        var d = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor$1", Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [3, "b"], 
            [6, "z"], 
            [9, "x"]
        ] ));
        var di2 = Bridge.cast(d, Bridge.IDictionary$2(Bridge.Int,String));

        Bridge.Test.Assert.$true(d.containsKey(9));
        Bridge.Test.Assert.$true(di2.containsKey(3));

        Bridge.Test.Assert.$false(d.containsKey(923));
        Bridge.Test.Assert.$false(di2.containsKey(353));
    },
    tryGetValueWorks: function () {
        var d = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor$1", Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [3, "b"], 
            [6, "z"], 
            [9, "x"]
        ] ));
        var di2 = Bridge.cast(d, Bridge.IDictionary$2(Bridge.Int,String));

        var outVal = { };

        Bridge.Test.Assert.$true(d.tryGetValue(9, outVal));
        Bridge.Test.Assert.areEqual(outVal.v, "x");

        Bridge.Test.Assert.$true(di2.tryGetValue(3, outVal));
        Bridge.Test.Assert.areEqual(outVal.v, "b");

        outVal.v = "!!!";
        Bridge.Test.Assert.$false(d.tryGetValue(923, outVal));
        Bridge.Test.Assert.areEqual(outVal.v, null);

        outVal.v = "!!!";
        Bridge.Test.Assert.$false(di2.tryGetValue(353, outVal));
        Bridge.Test.Assert.areEqual(outVal.v, null);
    },
    addWorks: function () {
        var d = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor");
        var di = Bridge.cast(d, Bridge.IDictionary$2(Bridge.Int,String));

        d.add(5, "aa");
        Bridge.Test.Assert.areEqual(d.getItem(5), "aa");
        Bridge.Test.Assert.areEqual(d.getCount(), 1);

        di.add(3, "bb");
        // TODO Bug
        // Assert.AreEqual(di[3], "bb");
        var s = { };
        di.tryGetValue(3, s);
        Bridge.Test.Assert.areEqual(s.v, "bb");
        Bridge.Test.Assert.areEqual(di.getCount(), 2);

        try {
            d.add(5, "zz");
            Bridge.Test.Assert.fail$1("Should throw");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
        }
    },
    clearWorks: function () {
        var d = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor$1", Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [3, "b"], 
            [6, "z"], 
            [9, "x"]
        ] ));

        Bridge.Test.Assert.areEqual(d.getCount(), 3);
        d.clear();
        Bridge.Test.Assert.areEqual(d.getCount(), 0);
    },
    removeWorks: function () {
        var d = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor$1", Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [3, "b"], 
            [6, "z"], 
            [9, "x"], 
            [13, "y"]
        ] ));
        var di = Bridge.cast(d, Bridge.IDictionary$2(Bridge.Int,String));

        Bridge.Test.Assert.areStrictEqual(d.remove(6), true);
        Bridge.Test.Assert.areEqual(d.getCount(), 3);
        Bridge.Test.Assert.$false(d.containsKey(6));

        Bridge.Test.Assert.areStrictEqual(di.remove(3), true);
        Bridge.Test.Assert.areEqual(di.getCount(), 2);
        Bridge.Test.Assert.$false(di.containsKey(3));

        Bridge.Test.Assert.$true(di.containsKey(13));
    },
    setItemWorks: function () {
        var d = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor$1", Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [3, "b"], 
            [6, "z"], 
            [9, "x"], 
            [13, "y"]
        ] ));
        var di = Bridge.cast(d, Bridge.IDictionary$2(Bridge.Int,String));

        d.setItem(3, "check");
        Bridge.Test.Assert.areEqual(d.getItem(3), "check");
        Bridge.Test.Assert.$false(d.containsKey(10));

        di.setItem(10, "stuff");
        Bridge.Test.Assert.areEqual(di.getItem(10), "stuff");
        Bridge.Test.Assert.$true(di.containsKey(10));
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary', {
    inherits: [Bridge.IDictionary$2(Bridge.Int,String)],
    _backingDictionary: null,
    constructor: function () {
        this.constructor$1(new Bridge.Dictionary$2(Bridge.Int,String)());

    },
    constructor$1: function (initialValues) {
        this._backingDictionary = initialValues;
    },
    getItem: function (key) {
        return this._backingDictionary.get(key);
    },
    setItem: function (key, value) {
        this._backingDictionary.set(key, value);
    },
    getKeys: function () {
        return this._backingDictionary.getKeys();
    },
    getValues: function () {
        return this._backingDictionary.getValues();
    },
    getCount: function () {
        return this._backingDictionary.getCount();
    },
    getEnumerator: function () {
        return this.getEnumerator$1();
    },
    getEnumerator$1: function () {
        return this._backingDictionary.getEnumerator();
    },
    add: function (key, value) {
        this._backingDictionary.add(key, value);
    },
    remove: function (key) {
        return this._backingDictionary.remove(key);
    },
    containsKey: function (key) {
        return this._backingDictionary.containsKey(key);
    },
    tryGetValue: function (key, value) {
        return this._backingDictionary.tryGetValue(key, value);
    },
    clear: function () {
        this._backingDictionary.clear();
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.IEnumerableTests', {
    arrayImplementsIEnumerable: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.Array.init(1, 0), Bridge.IEnumerable$1(Bridge.Int)));
    },
    customClassThatShouldImplementIEnumerableDoesSo: function () {
        Bridge.Test.Assert.$true(Bridge.is(new Bridge.ClientTest.Collections.Generic.IEnumerableTests.MyEnumerable(), Bridge.IEnumerable$1(String)));
    },
    arrayGetEnumeratorMethodWorks: function () {
        var e = Bridge.getEnumerator(["x", "y", "z"]);
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent(), "x");
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent(), "y");
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent(), "z");
        Bridge.Test.Assert.$false(e.moveNext());
    },
    arrayCastToIEnumerableCanBeEnumerated: function () {
        var enm = ["x", "y", "z"];
        var e = Bridge.getEnumerator(enm, "$1");
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent$1(), "x");
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent$1(), "y");
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent$1(), "z");
        Bridge.Test.Assert.$false(e.moveNext());
    },
    classImplementingIEnumerableCanBeEnumerated: function () {
        var enm = new Bridge.ClientTest.Collections.Generic.IEnumerableTests.MyEnumerable();
        var e = enm.getEnumerator$1();
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent$1(), "x");
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent$1(), "y");
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent$1(), "z");
        Bridge.Test.Assert.$false(e.moveNext());
    },
    classImplementingIEnumerableCastToIEnumerableCanBeEnumerated: function () {
        var enm = new Bridge.ClientTest.Collections.Generic.IEnumerableTests.MyEnumerable();
        var e = Bridge.getEnumerator(enm, "$1");
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent$1(), "x");
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent$1(), "y");
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent$1(), "z");
        Bridge.Test.Assert.$false(e.moveNext());
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.IEnumerableTests.MyEnumerable', {
    inherits: [Bridge.IEnumerable$1(String)],
    getEnumerator$1: function () {
        var $yield = [];
        $yield.push("x");
        $yield.push("y");
        $yield.push("z");
        return Bridge.Array.toEnumerator($yield);
    },
    getEnumerator: function () {
        return this.getEnumerator$1();
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.IListTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.IList$1(Object)), "Bridge.IList$1$Object", "FullName should be correct");

        var iList = new Bridge.List$1(Object)();

        Bridge.Test.Assert.true$1(Bridge.is(iList, Bridge.IEnumerable$1(Object)), "Interfaces should contain IEnumerable");
        Bridge.Test.Assert.true$1(Bridge.is(iList, Bridge.ICollection$1(Object)), "Interfaces should contain ICollection");
    },
    arrayImplementsIList: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.Array.init(1, 0), Bridge.IList$1(Bridge.Int)));
    },
    customClassThatShouldImplementIListDoesSo: function () {
        Bridge.Test.Assert.$true(Bridge.is(new Bridge.ClientTest.Collections.Generic.IListTests.MyList(Bridge.Array.init(0, null)), Bridge.IList$1(String)));
    },
    arrayCastToIListGetItemWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.Test.Assert.areEqual(Bridge.Array.getItem(l, 1), "y");
    },
    classImplementingIListGetItemWorks: function () {
        var l = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y", "z"]);
        Bridge.Test.Assert.areEqual(l.getItem(1), "y");
    },
    classImplementingIListCastToIListGetItemWorks: function () {
        var l = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y", "z"]);
        Bridge.Test.Assert.areEqual(Bridge.Array.getItem(l, 1), "y");
    },
    arrayCastToIListSetItemWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.Array.setItem(l, 1, "a");
        Bridge.Test.Assert.areEqual(Bridge.Array.getItem(l, 1), "a");
    },
    classImplementingIListSetItemWorks: function () {
        var l = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y", "z"]);
        l.setItem(1, "a");
        Bridge.Test.Assert.areEqual(l.getItem(1), "a");
    },
    classImplementingIListCastToIListSetItemWorks: function () {
        var l = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y", "z"]);
        Bridge.Array.setItem(l, 1, "a");
        Bridge.Test.Assert.areEqual(Bridge.Array.getItem(l, 1), "a");
    },
    arrayCastToIListIndexOfWorks: function () {
        var arr = [new Bridge.ClientTest.Collections.Generic.IListTests.C(1), new Bridge.ClientTest.Collections.Generic.IListTests.C(2), new Bridge.ClientTest.Collections.Generic.IListTests.C(3)];
        Bridge.Test.Assert.areEqual(Bridge.Array.indexOf(arr, new Bridge.ClientTest.Collections.Generic.IListTests.C(2)), 1);
        Bridge.Test.Assert.areEqual(Bridge.Array.indexOf(arr, new Bridge.ClientTest.Collections.Generic.IListTests.C(4)), -1);
    },
    classImplementingIListIndexOfWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y"]);
        Bridge.Test.Assert.areEqual(c.indexOf("y"), 1);
        Bridge.Test.Assert.areEqual(c.indexOf("z"), -1);
    },
    classImplementingIListCastToIListIndexOfWorks: function () {
        var l = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y"]);
        Bridge.Test.Assert.areEqual(Bridge.Array.indexOf(l, "y"), 1);
        Bridge.Test.Assert.areEqual(Bridge.Array.indexOf(l, "z"), -1);
    },
    classImplementingIListInsertWorks: function () {
        var l = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y"]);
        l.insert(1, "z");
        Bridge.Test.Assert.areEqual(l.getItems().toArray(), ["x", "z", "y"]);
    },
    classImplementingIListCastToIListInsertWorks: function () {
        var l = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y"]);
        Bridge.Array.insert(l, 1, "z");
        Bridge.Test.Assert.areEqual((Bridge.cast(l, Bridge.ClientTest.Collections.Generic.IListTests.MyList)).getItems().toArray(), ["x", "z", "y"]);
    },
    classImplementingIListRemoveAtWorks: function () {
        var l = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y", "z"]);
        l.removeAt(1);
        Bridge.Test.Assert.areEqual(l.getItems().toArray(), ["x", "z"]);
    },
    classImplementingIListCastToIListRemoveAtWorks: function () {
        var l = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y", "z"]);
        Bridge.Array.removeAt(l, 1);
        Bridge.Test.Assert.areEqual((Bridge.cast(l, Bridge.ClientTest.Collections.Generic.IListTests.MyList)).getItems().toArray(), ["x", "z"]);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.IListTests.C', {
    _i: 0,
    constructor: function (i) {
        this._i = i;
    },
    equals: function (o) {
        return Bridge.is(o, Bridge.ClientTest.Collections.Generic.IListTests.C) && this._i === (Bridge.cast(o, Bridge.ClientTest.Collections.Generic.IListTests.C))._i;
    },
    getHashCode: function () {
        return this._i;
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.IListTests.MyList', {
    inherits: [Bridge.IList$1(String)],
    config: {
        properties: {
            Items: null
        }
    },
    constructor: function (items) {
        this.setItems(new Bridge.List$1(String)(items));
    },
    getCount: function () {
        return this.getItems().getCount();
    },
    getItem: function (index) {
        return this.getItems().getItem(index);
    },
    setItem: function (index, value) {
        this.getItems().setItem(index, value);
    },
    getEnumerator: function () {
        return this.getEnumerator$1();
    },
    getEnumerator$1: function () {
        return this.getItems().getEnumerator();
    },
    add: function (item) {
        this.getItems().add(item);
    },
    clear: function () {
        this.getItems().clear();
    },
    contains: function (item) {
        return this.getItems().contains(item);
    },
    remove: function (item) {
        return this.getItems().remove(item);
    },
    indexOf: function (item) {
        return this.getItems().indexOf(item);
    },
    insert: function (index, item) {
        this.getItems().insert(index, item);
    },
    removeAt: function (index) {
        this.getItems().removeAt(index);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.IteratorBlockTests', {
    assertEqual: function (actual, expected, message) {
        if (message === void 0) { message = null; }
        Bridge.Test.Assert.areEqual$1(Bridge.String.replaceAll(actual, "\r\n", "\n"), Bridge.String.replaceAll(expected, "\r\n", "\n"), message);
    },
    typeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable: function () {
        var enm = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(new Bridge.Text.StringBuilder()).getEnumerator(0);
        Bridge.Test.Assert.$true(Bridge.is(enm, Bridge.IEnumerator));
    },
    enumeratingIEnumeratorIteratorToEndWorks: function () {
        //TODO expected for v1: yield iterator works with no state machine
        var sb = new Bridge.Text.StringBuilder();
        var enm = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(sb).getEnumerator(2);

        while (enm.moveNext()) {
            sb.appendLine("got " + enm.getCurrent$1());
        }

        this.assertEqual(sb.toString(), "yielding 0\r\nyielding 1\r\nyielding -1\r\nin finally\r\ngot 0\r\ngot 1\r\ngot -1\r\n");
    },
    prematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks: function () {
        //TODO expected for v1: yield iterator works with no state machine

        var sb = new Bridge.Text.StringBuilder();
        var enm = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(sb).getEnumerator(5);

        for (var i = 0; i < 2; i++) {
            enm.moveNext();
            sb.appendLine("got " + enm.getCurrent$1());
        }
        enm.dispose();

        this.assertEqual(sb.toString(), "yielding 0\r\nyielding 1\r\nyielding 2\r\nyielding 3\r\nyielding 4\r\nyielding -1\r\nin finally\r\ngot 0\r\ngot 1\r\n");
    },
    exceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks: function () {
        //TODO expected for v1: yield iterator works with no state machine

        var sb = new Bridge.Text.StringBuilder();

        try {
            var enm = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(sb).getEnumeratorThrows();
            for (var i = 0; i < 100; i++) {
                enm.moveNext();
                sb.appendLine("got " + enm.getCurrent$1());
            }
            Bridge.Test.Assert.fail$1("Should have thrown an exception in the loop");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            sb.appendLine("caught exception");
        }

        this.assertEqual(sb.toString(), "yielding 1\r\nyielding 2\r\nthrowing\r\nin finally\r\ncaught exception\r\n");
    },
    typeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface: function () {
        var enm = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(new Bridge.Text.StringBuilder()).getEnumerable(0);
        Bridge.Test.Assert.$true(Bridge.is(enm, Bridge.IEnumerable));
    },
    enumeratingIEnumerableIteratorToEndWorks: function () {
        var $t, $t1;
        //TODO expected for v1: yield iterator works with no state machine

        var sb = new Bridge.Text.StringBuilder();
        var enm = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(sb).getEnumerable(2);

        $t = Bridge.getEnumerator(enm);
        while ($t.moveNext()) {
            var i = $t.getCurrent();
            sb.appendLine("got " + i);
        }
        sb.appendLine("-");
        $t1 = Bridge.getEnumerator(enm);
        while ($t1.moveNext()) {
            var i1 = $t1.getCurrent();
            sb.appendLine("got " + i1);
        }

        this.assertEqual(sb.toString(), "yielding 0\r\nyielding 1\r\nyielding -1\r\nin finally\r\ngot 0\r\ngot 1\r\ngot -1\r\n-\r\ngot 0\r\ngot 1\r\ngot -1\r\n");
    }    ,
    prematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks: function () {
        var $t;
        //TODO expected for v1: yield iterator works with no state machine

        var sb = new Bridge.Text.StringBuilder();
        var n = 0;
        $t = Bridge.getEnumerator(new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(sb).getEnumerable(5));
        while ($t.moveNext()) {
            var i = $t.getCurrent();
            sb.appendLine("got " + i);
            if (++n === 2)
                break;
        }

        this.assertEqual(sb.toString(), "yielding 0\r\nyielding 1\r\nyielding 2\r\nyielding 3\r\nyielding 4\r\nyielding -1\r\nin finally\r\ngot 0\r\ngot 1\r\n");
    }    ,
    exceptionInIEnumerableIteratorBodyExecutesFinallyBlocks: function () {
        //TODO expected for v1: yield iterator works with no state machine

        var sb = new Bridge.Text.StringBuilder();

        try {
            var enumerable = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(sb).getEnumerableThrows(5);

            var enumerator = Bridge.getEnumerator(enumerable, "$1");
            for (var i = 0; i < 100; i++) {
                enumerator.moveNext();
                sb.appendLine("got " + enumerator.getCurrent$1());
            }
            Bridge.Test.Assert.fail$1("Should have thrown");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            sb.appendLine("caught exception");
        }

        this.assertEqual(sb.toString(), "yielding 1\r\nyielding 2\r\nthrowing\r\nin finally\r\ncaught exception\r\n");
    },
    enumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters: function () {
        var $t, $t1;
        var sb = new Bridge.Text.StringBuilder();

        var enm = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(sb).getEnumerableMutateParameter(3);
        $t = Bridge.getEnumerator(enm);
        while ($t.moveNext()) {
            var i = $t.getCurrent();
            sb.appendLine(i.toString());
        }
        $t1 = Bridge.getEnumerator(enm);
        while ($t1.moveNext()) {
            var i1 = $t1.getCurrent();
            sb.appendLine(i1.toString());
        }

        this.assertEqual(sb.toString(), "3\r\n2\r\n1\r\n3\r\n2\r\n1\r\n");
    }    ,
    differentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals: function () {
        var sb = new Bridge.Text.StringBuilder();

        var enumerable = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(sb).getEnumerableSimple(3);
        var enm1 = Bridge.getEnumerator(enumerable, "$1");
        var enm2 = Bridge.getEnumerator(enumerable, "$1");

        while (enm1.moveNext()) {
            enm2.moveNext();
            sb.appendLine(enm1.getCurrent$1().toString());
            sb.appendLine(enm2.getCurrent$1().toString());
        }

        this.assertEqual(sb.toString(), "0\r\n0\r\n1\r\n1\r\n2\r\n2\r\n-1\r\n-1\r\n");
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C', {
    _sb: null,
    constructor: function (sb) {
        this._sb = sb;
    },
    getEnumerator: function (n) {
        var $yield = [];
        try {
            for (var i = 0; i < n; i++) {
                this._sb.appendLine("yielding " + i);
                $yield.push(i);
            }
            this._sb.appendLine("yielding -1");
            $yield.push(-1);
        }
        finally {
            this._sb.appendLine("in finally");
        }
        return Bridge.Array.toEnumerator($yield);
    },
    getEnumeratorThrows: function () {
        var $yield = [];
        try {
            this._sb.appendLine("yielding 1");
            $yield.push(1);
            this._sb.appendLine("yielding 2");
            $yield.push(2);
            this._sb.appendLine("throwing");
            throw new Bridge.Exception("test");
            this._sb.appendLine("yielding 3");
            $yield.push(3);
        }
        finally {
            this._sb.appendLine("in finally");
        }
        return Bridge.Array.toEnumerator($yield);
    },
    getEnumerable: function (n) {
        var $yield = [];
        try {
            for (var i = 0; i < n; i++) {
                this._sb.appendLine("yielding " + i);
                $yield.push(i);
            }
            this._sb.appendLine("yielding -1");
            $yield.push(-1);
        }
        finally {
            this._sb.appendLine("in finally");
        }
        n = 0; // Just to verify that the value of 'n' is not reused in the next call
        return Bridge.Array.toEnumerable($yield);
    },
    getEnumerableThrows: function (n) {
        var $yield = [];
        try {
            this._sb.appendLine("yielding 1");
            $yield.push(1);
            this._sb.appendLine("yielding 2");
            $yield.push(2);
            this._sb.appendLine("throwing");
            throw new Bridge.Exception("test");
            this._sb.appendLine("yielding 3");
            $yield.push(3);
        }
        finally {
            this._sb.appendLine("in finally");
        }
        return Bridge.Array.toEnumerable($yield);
    },
    getEnumerableMutateParameter: function (n) {
        var $yield = [];
        for (; n > 0; n--) {
            $yield.push(n);
        }
        return Bridge.Array.toEnumerable($yield);
    },
    getEnumerableSimple: function (n) {
        var $yield = [];
        for (var i = 0; i < n; i++) {
            $yield.push(i);
        }
        $yield.push(-1);
        return Bridge.Array.toEnumerable($yield);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.ListTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.List$1(Bridge.Int)), "Bridge.List$1$Bridge.Int", "GetClassName()");
        var list = new Bridge.List$1(Bridge.Int)();
        Bridge.Test.Assert.true$1(Bridge.is(list, Bridge.List$1(Bridge.Int)), "is int[] should be true");
        Bridge.Test.Assert.true$1(Bridge.is(list, Bridge.IList$1(Bridge.Int)), "is IList<int> should be true");
        Bridge.Test.Assert.true$1(Bridge.is(list, Bridge.ICollection$1(Bridge.Int)), "is ICollection<int> should be true");
        Bridge.Test.Assert.true$1(Bridge.is(list, Bridge.IEnumerable$1(Bridge.Int)), "is IEnumerable<int> should be true");
    },
    defaultConstructorWorks: function () {
        var l = new Bridge.List$1(Bridge.Int)();
        Bridge.Test.Assert.areEqual(l.getCount(), 0);
    },
    constructorWithCapacityWorks: function () {
        var l = new Bridge.List$1(Bridge.Int)(12);
        Bridge.Test.Assert.areEqual(l.getCount(), 0);
    },
    constructingFromArrayWorks: function () {
        var arr = [1, 4, 7, 8];
        var l = new Bridge.List$1(Bridge.Int)(arr);
        Bridge.Test.Assert.$false(l === arr);
        Bridge.Test.Assert.areEqual(l.toArray(), arr);
    },
    constructingFromListWorks: function () {
        var arr = new Bridge.List$1(Bridge.Int)([1, 4, 7, 8]);
        var l = new Bridge.List$1(Bridge.Int)(arr);
        Bridge.Test.Assert.$false(l === arr);
        Bridge.Test.Assert.areEqual(l, arr);
    },
    constructingFromIEnumerableWorks: function () {
        var enm = Bridge.cast(new Bridge.List$1(Bridge.Int)([1, 4, 7, 8]), Bridge.IEnumerable$1(Bridge.Int));
        var l = new Bridge.List$1(Bridge.Int)(enm);
        Bridge.Test.Assert.$false(l === enm);
        Bridge.Test.Assert.areEqual(l.toArray(), [1, 4, 7, 8]);
    },
    countWorks: function () {
        Bridge.Test.Assert.areEqual(new Bridge.List$1(String)().getCount(), 0);
        Bridge.Test.Assert.areEqual(Bridge.merge(new Bridge.List$1(String)(), [
            ["x"]
        ] ).getCount(), 1);
        Bridge.Test.Assert.areEqual(Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"]
        ] ).getCount(), 2);
    },
    indexingWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"]
        ] ).getItem(0), "x");
        Bridge.Test.Assert.areEqual(Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"]
        ] ).getItem(1), "y");
    },
    foreachWorks: function () {
        var $t;
        var result = "";
        $t = Bridge.getEnumerator(Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"]
        ] ));
        while ($t.moveNext()) {
            var s = $t.getCurrent();
            result += s;
        }
        Bridge.Test.Assert.areEqual(result, "xy");
    }    ,
    getEnumeratorWorks: function () {
        var e = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"]
        ] ).getEnumerator();
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent$1(), "x");
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent$1(), "y");
        Bridge.Test.Assert.$false(e.moveNext());
    },
    addWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"]
        ] );
        l.add("a");
        Bridge.Test.Assert.areEqual(l.toArray(), ["x", "y", "a"]);
    },
    addRangeWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"]
        ] );
        l.addRange(["a", "b", "c"]);
        Bridge.Test.Assert.areEqual(l.toArray(), ["x", "y", "a", "b", "c"]);
    },
    clearWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"]
        ] );
        l.clear();
        Bridge.Test.Assert.areEqual(0, l.getCount());
    },
    containsWorks: function () {
        var list = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"]
        ] );
        Bridge.Test.Assert.$true(list.contains("x"));
        Bridge.Test.Assert.$false(list.contains("z"));
    },
    containsUsesEqualsMethod: function () {
        var l = Bridge.merge(new Bridge.List$1(Bridge.ClientTest.Collections.Generic.ListTests.C)(), [
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(1)], 
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(2)], 
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(3)]
        ] );
        Bridge.Test.Assert.$true(l.contains(new Bridge.ClientTest.Collections.Generic.ListTests.C(2)));
        Bridge.Test.Assert.$false(l.contains(new Bridge.ClientTest.Collections.Generic.ListTests.C(4)));
    },
    sliceWithoutEndWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.merge(new Bridge.List$1(String)(), [
            ["a"], 
            ["b"], 
            ["c"], 
            ["d"]
        ] ).slice(2).toArray(), ["c", "d"]);
    },
    sliceWithEndWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.merge(new Bridge.List$1(String)(), [
            ["a"], 
            ["b"], 
            ["c"], 
            ["d"]
        ] ).slice(1, 3).toArray(), ["b", "c"]);
    },
    foreachWithListItemCallbackWorks: function () {
        var result = "";
        Bridge.Linq.Enumerable.from(Bridge.merge(new Bridge.List$1(String)(), [
            ["a"], 
            ["b"], 
            ["c"]
        ] )).forEach(function (s) {
            return result += s;
        });
        Bridge.Test.Assert.areEqual(result, "abc");
    },
    foreachWithListCallbackWorks: function () {
        var result = "";
        Bridge.Linq.Enumerable.from(Bridge.merge(new Bridge.List$1(String)(), [
            ["a"], 
            ["b"], 
            ["c"]
        ] )).forEach(function (s, i) {
            return result += s + i;
        });
        Bridge.Test.Assert.areEqual(result, "a0b1c2");
    },
    indexOfWithoutStartIndexWorks: function () {
        Bridge.Test.Assert.areEqual(["a", "b", "c", "b"].indexOf("b"), 1);
    },
    indexOfWithoutStartIndexUsesEqualsMethod: function () {
        var l = Bridge.merge(new Bridge.List$1(Bridge.ClientTest.Collections.Generic.ListTests.C)(), [
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(1)], 
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(2)], 
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(3)]
        ] );
        Bridge.Test.Assert.areEqual(l.indexOf(new Bridge.ClientTest.Collections.Generic.ListTests.C(2)), 1);
        Bridge.Test.Assert.areEqual(l.indexOf(new Bridge.ClientTest.Collections.Generic.ListTests.C(4)), -1);
    },
    indexOfWithStartIndexWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.merge(new Bridge.List$1(String)(), [
            ["a"], 
            ["b"], 
            ["c"], 
            ["b"]
        ] ).indexOf("b", 2), 3);
    },
    indexOfWithStartIndexUsesEqualsMethod: function () {
        Bridge.Test.Assert.areEqual(Bridge.merge(new Bridge.List$1(Bridge.ClientTest.Collections.Generic.ListTests.C)(), [
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(1)], 
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(2)], 
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(3)], 
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(2)]
        ] ).indexOf(new Bridge.ClientTest.Collections.Generic.ListTests.C(2), 2), 3);
    },
    insertWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"]
        ] );
        l.insert(1, "a");
        Bridge.Test.Assert.areEqual(l.toArray(), ["x", "a", "y"]);
    },
    insertRangeWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"]
        ] );

        l.insertRange(1, ["a", "b"]);
        Bridge.Test.Assert.areEqual(l.toArray(), ["x", "a", "b", "y"]);

        l.insertRange(0, ["q", "q"]);
        Bridge.Test.Assert.areEqual(l.toArray(), ["q", "q", "x", "a", "b", "y"]);
    },
    joinWithoutDelimiterWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.merge(new Bridge.List$1(String)(), [
            ["a"], 
            ["b"], 
            ["c"], 
            ["b"]
        ] ).join(), "a,b,c,b");
    },
    joinWithDelimiterWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.merge(new Bridge.List$1(String)(), [
            ["a"], 
            ["b"], 
            ["c"], 
            ["b"]
        ] ).join("|"), "a|b|c|b");
    },
    removeWorks: function () {
        var list = Bridge.merge(new Bridge.List$1(String)(), [
            ["a"], 
            ["b"], 
            ["c"], 
            ["a"]
        ] );
        Bridge.Test.Assert.$true(list.remove("a"));
        Bridge.Test.Assert.areEqual(list.toArray(), ["b", "c", "a"]);
    },
    removeReturnsFalseIfTheElementWasNotFound: function () {
        var list = Bridge.merge(new Bridge.List$1(String)(), [
            ["a"], 
            ["b"], 
            ["c"], 
            ["a"]
        ] );
        Bridge.Test.Assert.$false(list.remove("d"));
        Bridge.Test.Assert.areEqual(list.toArray(), ["a", "b", "c", "a"]);
    },
    removeCanRemoveNullItem: function () {
        var list = Bridge.merge(new Bridge.List$1(String)(), [
            ["a"], 
            [null], 
            ["c"], 
            [null]
        ] );
        Bridge.Test.Assert.$true(list.remove(null));
        Bridge.Test.Assert.areEqual(list.toArray(), ["a", "c", null]);
    },
    removeUsesEqualsMethod: function () {
        var list = Bridge.merge(new Bridge.List$1(Bridge.ClientTest.Collections.Generic.ListTests.C)(), [
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(1)], 
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(2)], 
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(3)]
        ] );
        list.remove(new Bridge.ClientTest.Collections.Generic.ListTests.C(2));
        Bridge.Test.Assert.areEqual(list.getCount(), 2);
        Bridge.Test.Assert.areEqual(list.getItem(0).i, 1);
        Bridge.Test.Assert.areEqual(list.getItem(1).i, 3);
    },
    removeAtWorks: function () {
        var list = Bridge.merge(new Bridge.List$1(String)(), [
            ["a"], 
            ["b"], 
            ["c"], 
            ["a"]
        ] );
        list.removeAt(1);
        Bridge.Test.Assert.areEqual(list.toArray(), ["a", "c", "a"]);
    },
    removeRangeWorks: function () {
        var list = Bridge.merge(new Bridge.List$1(String)(), [
            ["a"], 
            ["b"], 
            ["c"], 
            ["d"]
        ] );
        list.removeRange(1, 2);
        Bridge.Test.Assert.areEqual(list.toArray(), ["a", "d"]);
    },
    reverseWorks: function () {
        var list = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
            [1], 
            [3], 
            [4], 
            [1], 
            [3], 
            [2]
        ] );
        list.reverse();
        Bridge.Test.Assert.areEqual(list.toArray(), [2, 3, 1, 4, 3, 1]);
    },
    sortWithDefaultCompareWorks: function () {
        var list = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
            [1], 
            [6], 
            [6], 
            [4], 
            [2]
        ] );
        list.sort();
        Bridge.Test.Assert.areEqual(list.toArray(), [1, 2, 4, 6, 6]);
    },
    sortWithCompareCallbackWorks: function () {
        var list = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
            [1], 
            [6], 
            [6], 
            [4], 
            [2]
        ] );
        list.sort(function (x, y) {
            return y - x;
        });
        Bridge.Test.Assert.areEqual(list.toArray(), [6, 6, 4, 2, 1]);
    },
    sortWithIComparerWorks: function () {
        var list = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
            [1], 
            [6], 
            [6], 
            [4], 
            [2]
        ] );
        list.sort(Bridge.fn.bind(new Bridge.ClientTest.Collections.Generic.ListTests.TestReverseComparer(), new Bridge.ClientTest.Collections.Generic.ListTests.TestReverseComparer().compare));
        Bridge.Test.Assert.areEqual(list.toArray(), [6, 6, 4, 2, 1]);
    },
    foreachWhenCastToIEnumerableWorks: function () {
        var $t;
        var list = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"]
        ] );
        var result = "";
        $t = Bridge.getEnumerator(list);
        while ($t.moveNext()) {
            var s = $t.getCurrent();
            result += s;
        }
        Bridge.Test.Assert.areEqual(result, "xy");
    }    ,
    iEnumerableGetEnumeratorWorks: function () {
        var l = Bridge.cast(Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"]
        ] ), Bridge.IEnumerable$1(String));
        var e = Bridge.getEnumerator(l, "$1");
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent$1(), "x");
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent$1(), "y");
        Bridge.Test.Assert.$false(e.moveNext());
    },
    iCollectionCountWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"], 
            ["z"]
        ] );
        Bridge.Test.Assert.areEqual(Bridge.Array.getCount(l), 3);
    },
    iCollectionAddWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"], 
            ["z"]
        ] );
        Bridge.Array.add(l, "a");
        Bridge.Test.Assert.areEqual((Bridge.cast(l, Bridge.List$1(String))).toArray(), ["x", "y", "z", "a"]);
    },
    iCollectionClearWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"], 
            ["z"]
        ] );
        Bridge.Array.clear(l);
        Bridge.Test.Assert.areEqual((Bridge.cast(l, Bridge.List$1(String))).toArray(), Bridge.Array.init(0, null));
    },
    iCollectionContainsWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"], 
            ["z"]
        ] );
        Bridge.Test.Assert.$true(Bridge.Array.contains(l, "y"));
        Bridge.Test.Assert.$false(Bridge.Array.contains(l, "a"));
    },
    iCollectionContainsUsesEqualsMethod: function () {
        var l = Bridge.merge(new Bridge.List$1(Bridge.ClientTest.Collections.Generic.ListTests.C)(), [
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(1)], 
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(2)], 
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(3)]
        ] );
        Bridge.Test.Assert.$true(Bridge.Array.contains(l, new Bridge.ClientTest.Collections.Generic.ListTests.C(2)));
        Bridge.Test.Assert.$false(Bridge.Array.contains(l, new Bridge.ClientTest.Collections.Generic.ListTests.C(4)));
    },
    iCollectionRemoveWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"], 
            ["z"]
        ] );
        Bridge.Test.Assert.$true(Bridge.Array.remove(l, "y"));
        Bridge.Test.Assert.$false(Bridge.Array.remove(l, "a"));

        var ll = Bridge.as(l, Bridge.List$1(String));
        Bridge.Test.Assert.areEqual(ll.toArray(), ["x", "z"]);
    },
    iCollectionRemoveCanRemoveNullItem: function () {
        var list = Bridge.merge(new Bridge.List$1(String)(), [
            ["a"], 
            [null], 
            ["c"], 
            [null]
        ] );
        Bridge.Test.Assert.$true(Bridge.Array.remove(list, null));
        Bridge.Test.Assert.areEqual((Bridge.cast(list, Bridge.List$1(String))).toArray(), ["a", "c", null]);
    },
    iCollectionRemoveUsesEqualsMethod: function () {
        var list = Bridge.merge(new Bridge.List$1(Bridge.ClientTest.Collections.Generic.ListTests.C)(), [
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(1)], 
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(2)], 
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(3)]
        ] );
        Bridge.Array.remove(list, new Bridge.ClientTest.Collections.Generic.ListTests.C(2));
        Bridge.Test.Assert.areEqual(Bridge.Array.getCount(list), 2);
        Bridge.Test.Assert.areEqual(Bridge.Array.getItem(list, 0).i, 1);
        Bridge.Test.Assert.areEqual(Bridge.Array.getItem(list, 1).i, 3);
    },
    iListIndexingWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"], 
            ["z"]
        ] );
        Bridge.Test.Assert.areEqual(Bridge.Array.getItem(l, 1), "y");
        Bridge.Array.setItem(l, 1, "a");
        Bridge.Test.Assert.areEqual((Bridge.cast(l, Bridge.List$1(String))).toArray(), ["x", "a", "z"]);
    },
    iListIndexOfWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"], 
            ["z"]
        ] );
        Bridge.Test.Assert.areEqual(Bridge.Array.indexOf(l, "y"), 1);
        Bridge.Test.Assert.areEqual(Bridge.Array.indexOf(l, "a"), -1);
    },
    iListIndexOfUsesEqualsMethod: function () {
        var l = Bridge.merge(new Bridge.List$1(Bridge.ClientTest.Collections.Generic.ListTests.C)(), [
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(1)], 
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(2)], 
            [new Bridge.ClientTest.Collections.Generic.ListTests.C(3)]
        ] );
        Bridge.Test.Assert.areEqual(Bridge.Array.indexOf(l, new Bridge.ClientTest.Collections.Generic.ListTests.C(2)), 1);
        Bridge.Test.Assert.areEqual(Bridge.Array.indexOf(l, new Bridge.ClientTest.Collections.Generic.ListTests.C(4)), -1);
    },
    iListInsertWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"], 
            ["z"]
        ] );
        Bridge.Array.insert(l, 1, "a");
        Bridge.Test.Assert.areEqual((Bridge.cast(l, Bridge.List$1(String))).toArray(), ["x", "a", "y", "z"]);
    },
    iListRemoveAtWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"], 
            ["z"]
        ] );
        Bridge.Array.removeAt(l, 1);
        Bridge.Test.Assert.areEqual((Bridge.cast(l, Bridge.List$1(String))).toArray(), ["x", "z"]);
    },
    toArrayWorks: function () {
        var l = new Bridge.List$1(String)();
        l.add("a");
        l.add("b");
        var actual = l.toArray();
        Bridge.Test.Assert.$false(l === actual);
        Bridge.Test.Assert.$true(Bridge.is(actual, Array));
        Bridge.Test.Assert.areEqual(actual, ["a", "b"]);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.ListTests.C', {
    i: 0,
    constructor: function (i) {
        this.i = i;
    },
    equals: function (o) {
        return Bridge.is(o, Bridge.ClientTest.Collections.Generic.ListTests.C) && this.i === (Bridge.cast(o, Bridge.ClientTest.Collections.Generic.ListTests.C)).i;
    },
    getHashCode: function () {
        return this.i;
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.ListTests.TestReverseComparer', {
    inherits: [Bridge.IComparer$1(Bridge.Int)],
    compare: function (x, y) {
        Bridge.Test.Assert.$true(true);
        return x === y ? 0 : (x > y ? -1 : 1);
    }
});

Bridge.define('Bridge.ClientTest.Constants', {
    statics: {
        PREFIX_SYSTEM_CLASSES: "Simple types",
        PREFIX_SYSTEM_INTERFACES: "System interface",
        PREFIX_COLLECTIONS: "Collections",
        PREFIX_UTILITIES: "Utilities",
        PREFIX_EXCEPTIONS: "Exceptions",
        MODULE_DATETIME: "Date and time",
        MODULE_NULLABLE: "Nullable",
        MODULE_STRING: "String",
        MODULE_REGEX: "Regex",
        MODULE_ENUM: "Enum",
        MODULE_MATH: "Math",
        MODULE_DECIMAL_MATH: "Decimal Math",
        MODULE_COMPARER: "Comparer",
        MODULE_EQUALITYCOMPARER: "EqualityComparer",
        MODULE_NUMBERFORMATINFO: "NumberFormatInfo",
        MODULE_CULTUREINFO: "СultureInfo",
        MODULE_PROPERTYACCESSOR: "Property accessor",
        IGNORE_DATE: null,
        config: {
            init: function () {
                this.MODULE_DECIMAL = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_DOUBLE = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_INT16 = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_INT64 = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_SBYTE = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_FLOAT = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_UINT64 = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_UINT32 = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_OBJECT = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_CHAR = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_INT32 = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_UINT16 = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_BYTE = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_TUPLE = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_ICOLLECTION = Bridge.ClientTest.Constants.PREFIX_COLLECTIONS;
                this.MODULE_IDICTIONARY = Bridge.ClientTest.Constants.PREFIX_COLLECTIONS;
                this.MODULE_LIST = Bridge.ClientTest.Constants.PREFIX_COLLECTIONS;
                this.MODULE_ILIST = Bridge.ClientTest.Constants.PREFIX_COLLECTIONS;
                this.MODULE_ITERATORBLOCK = Bridge.ClientTest.Constants.PREFIX_COLLECTIONS;
                this.MODULE_ARRAY = Bridge.ClientTest.Constants.PREFIX_COLLECTIONS;
                this.MODULE_IENUMERABLE = Bridge.ClientTest.Constants.PREFIX_COLLECTIONS;
                this.MODULE_GENERICDICTIONARY = Bridge.ClientTest.Constants.PREFIX_COLLECTIONS;
                this.MODULE_ICOMPARABLE = Bridge.ClientTest.Constants.PREFIX_SYSTEM_INTERFACES;
                this.MODULE_IEQUATABLE = Bridge.ClientTest.Constants.PREFIX_SYSTEM_INTERFACES;
                this.MODULE_RUNTIMEHELPERS = Bridge.ClientTest.Constants.PREFIX_UTILITIES;
                this.MODULE_ENVIRONMENT = Bridge.ClientTest.Constants.PREFIX_UTILITIES;
                this.MODULE_NOTSUPPORTEDEXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
                this.MODULE_KEYNOTFOUNDEXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
                this.MODULE_EXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
                this.MODULE_ARGUMENTNULLEXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
                this.MODULE_DIVIDEBYZEROEXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
                this.MODULE_NOTIMPLEMENTEDEXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
                this.MODULE_OVERFLOWEXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
                this.MODULE_ARITHMETICEXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
                this.MODULE_FORMATEXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
                this.MODULE_INVALIDOPERATIONEXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
                this.MODULE_INVALIDCASTEXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
                this.MODULE_ARGUMENTEXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
                this.MODULE_NULLREFERENCEEXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
                this.MODULE_ARGUMENTOUTOFRANGEEXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
            }
        }
    }
});

Bridge.define('Bridge.ClientTest.CultureInfoTests', {
    typePropertiesAreCorrect: function () {
        var culture = Bridge.CultureInfo.invariantCulture;
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.CultureInfo), "Bridge.CultureInfo");
        Bridge.Test.Assert.$true(true);
    },
    getFormatWorks: function () {
        var culture = Bridge.CultureInfo.invariantCulture;
        Bridge.Test.Assert.areEqual(culture.getFormat(Bridge.Int), null);
        Bridge.Test.Assert.areEqual(culture.getFormat(Bridge.NumberFormatInfo), culture.numberFormat);
        Bridge.Test.Assert.areEqual(culture.getFormat(Bridge.DateTimeFormatInfo), culture.dateTimeFormat);
    },
    invariantWorks: function () {
        var culture = Bridge.CultureInfo.invariantCulture;
        Bridge.Test.Assert.areEqual(culture.name, "iv");
        Bridge.Test.Assert.areEqual(culture.dateTimeFormat, Bridge.DateTimeFormatInfo.invariantInfo);
        Bridge.Test.Assert.areEqual(culture.numberFormat, Bridge.NumberFormatInfo.invariantInfo);
    }
});

Bridge.define('Bridge.ClientTest.DateTimeFormatInfoTests', {
    typePropertiesAreCorrect: function () {
        var format = Bridge.DateTimeFormatInfo.invariantInfo;
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.DateTimeFormatInfo), "Bridge.DateTimeFormatInfo");
        Bridge.Test.Assert.$true(true);
    },
    getFormatWorks: function () {
        var format = Bridge.DateTimeFormatInfo.invariantInfo;
        Bridge.Test.Assert.areEqual(format.getFormat(Bridge.Int), null);
        Bridge.Test.Assert.areEqual(format.getFormat(Bridge.DateTimeFormatInfo), format);
    },
    invariantWorks: function () {
        var format = Bridge.DateTimeFormatInfo.invariantInfo;
        Bridge.Test.Assert.areEqual(format.amDesignator, "AM");
        Bridge.Test.Assert.areEqual(format.pmDesignator, "PM");

        Bridge.Test.Assert.areEqual(format.dateSeparator, "/");
        Bridge.Test.Assert.areEqual(format.timeSeparator, ":");

        Bridge.Test.Assert.areEqual(format.sortableDateTimePattern, "yyyy'-'MM'-'dd'T'HH':'mm':'ss");

        Bridge.Test.Assert.areEqual(format.longDatePattern, "dddd, MMMM dd, yyyy");
        Bridge.Test.Assert.areEqual(format.shortDatePattern, "M/d/yyyy");

        Bridge.Test.Assert.areEqual(format.longTimePattern, "h:mm:ss tt");
        Bridge.Test.Assert.areEqual(format.shortTimePattern, "h:mm tt");

        Bridge.Test.Assert.areEqual(format.firstDayOfWeek, 0);
        Bridge.Test.Assert.areEqual(format.dayNames, ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);

        Bridge.Test.Assert.areEqual(format.monthNames, ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""]);
    }
});

Bridge.define('Bridge.ClientTest.DecimalMathTests', {
    statics: {
        useLogging: false,
        jSMode: true,
        NoDotNetDiff: false,
        HasDotNetDiff: true,
        config: {
            init: function () {
                this.maxValue = Bridge.Decimal.MaxValue;
                this.minValue = Bridge.Decimal.MinValue;
                this.inputAdd = Bridge.Array.create(null, [[Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(47.0), Bridge.Decimal(47.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(-47.0), Bridge.Decimal(-47.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(-47.0), Bridge.Decimal(-47.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(47.0), Bridge.Decimal(47.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("443534569034876.33478923476"), Bridge.Decimal(47.0), Bridge.Decimal("443534569034923.33478923476")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("443534569034876.12345678901235"), Bridge.Decimal(47.000000000001), Bridge.Decimal("443534569034923.12345678901335")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("443534569034876.12345678901235"), Bridge.Decimal("9436905724146.297872340425532"), Bridge.Decimal("452971474759022.42132912943788")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("4435345690348766678656790453"), Bridge.Decimal(17.0), Bridge.Decimal("4435345690348766678656790470")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(17.2345324), Bridge.Decimal("4435345690348766678656790453"), Bridge.Decimal("4435345690348766678656790470.2")], [Bridge.ClientTest.DecimalMathTests.HasDotNetDiff, "0.00000000000005", Bridge.Decimal("-943456769034871.4234"), Bridge.Decimal("47.00000000003455"), Bridge.Decimal("-943456769034824.4233999999654")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("6999545690348766678656790453"), Bridge.Decimal(-13.0), Bridge.Decimal("6999545690348766678656790440")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(11.0), Bridge.Decimal("-6435345690348766678656790453"), Bridge.Decimal("-6435345690348766678656790442")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.ClientTest.DecimalMathTests.maxValue, Bridge.ClientTest.DecimalMathTests.minValue, Bridge.Decimal(0.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal.MinusOne, Bridge.ClientTest.DecimalMathTests.maxValue, Bridge.Decimal("79228162514264337593543950334")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.ClientTest.DecimalMathTests.maxValue, Bridge.Decimal.MinusOne, Bridge.Decimal("79228162514264337593543950334")]], 15, 5);
                this.inputSubtract = Bridge.Array.create(null, [[Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(47.0), Bridge.Decimal(-47.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(-47.0), Bridge.Decimal(47.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(-47.0), Bridge.Decimal(47.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(47.0), Bridge.Decimal(-47.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("443534569034876.33478923476"), Bridge.Decimal(47.0), Bridge.Decimal("443534569034829.33478923476")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("443534569034876.12345678901235"), Bridge.Decimal(47.000000000001), Bridge.Decimal("443534569034829.12345678901135")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("443534569034876.12345678901235"), Bridge.Decimal("9436905724146.297872340425532"), Bridge.Decimal("434097663310729.82558444858682")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("4435345690348766678656790453"), Bridge.Decimal(17.0), Bridge.Decimal("4435345690348766678656790436")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(17.2345324), Bridge.Decimal("4435345690348766678656790453"), Bridge.Decimal("-4435345690348766678656790435.8")], [Bridge.ClientTest.DecimalMathTests.HasDotNetDiff, Bridge.Decimal("-5E-14"), Bridge.Decimal("-943456769034871.4234"), Bridge.Decimal("47.00000000003455"), Bridge.Decimal("-943456769034918.4234000000346")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("6999545690348766678656790453"), Bridge.Decimal(-13.0), Bridge.Decimal("6999545690348766678656790466")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(11.0), Bridge.Decimal("-6435345690348766678656790453"), Bridge.Decimal("6435345690348766678656790464")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.ClientTest.DecimalMathTests.maxValue, Bridge.ClientTest.DecimalMathTests.maxValue, Bridge.Decimal(0.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal.MinusOne, Bridge.ClientTest.DecimalMathTests.minValue, Bridge.Decimal("79228162514264337593543950334")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.ClientTest.DecimalMathTests.maxValue, Bridge.Decimal.One, Bridge.Decimal("79228162514264337593543950334")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.ClientTest.DecimalMathTests.minValue, Bridge.Decimal.MinusOne, Bridge.Decimal("-79228162514264337593543950334")]], 16, 5);
                this.inputMultiply = Bridge.Array.create(null, [[Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(47.0), Bridge.Decimal(0.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(-47.0), Bridge.Decimal(0.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(-47.0), Bridge.Decimal(0.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(47.0), Bridge.Decimal(0.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(0.0), Bridge.Decimal(0.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("443534569034876.33478923476"), Bridge.Decimal(0.47), Bridge.Decimal("208461247446391.8773509403372")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("43534569034876.12345678901235"), Bridge.Decimal(47.000000000001), Bridge.Decimal("2046124744639221.3370381184566")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("44.353456903487612345678901235"), Bridge.Decimal("9436905724146.297872340425532"), Bridge.Decimal("418559391338198.38088395328596")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("4435345690348766678656790453"), Bridge.Decimal(0.17), Bridge.Decimal("754008767359290335371654377.01")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(17.2345324), Bridge.Decimal("443534569034876667865679045.37"), Bridge.Decimal("7644110900551618662335084355.4")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("-943456769034871.4234"), Bridge.Decimal("0.4700000000003455"), Bridge.Decimal("-443424681446715.53331170154808")], [Bridge.ClientTest.DecimalMathTests.HasDotNetDiff, Bridge.Decimal(-0.01), Bridge.Decimal("6999545690348766678656790453"), Bridge.Decimal(-0.13), Bridge.Decimal("-909940939745339668225382758.9")], [Bridge.ClientTest.DecimalMathTests.HasDotNetDiff, Bridge.Decimal(0.0001), Bridge.Decimal(0.11), Bridge.Decimal("-64353456903487666786567904.535"), Bridge.Decimal("-7078880259383643346522469.4988")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.ClientTest.DecimalMathTests.maxValue, Bridge.Decimal.MinusOne, Bridge.ClientTest.DecimalMathTests.minValue], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal.MinusOne, Bridge.ClientTest.DecimalMathTests.minValue, Bridge.ClientTest.DecimalMathTests.maxValue], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.ClientTest.DecimalMathTests.maxValue, Bridge.Decimal.One, Bridge.ClientTest.DecimalMathTests.maxValue], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.ClientTest.DecimalMathTests.minValue, Bridge.Decimal.MinusOne, Bridge.ClientTest.DecimalMathTests.maxValue]], 17, 5);
                this.inputDivide = Bridge.Array.create(null, [[Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(47.0), Bridge.Decimal(0.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(-47.0), Bridge.Decimal(0.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(-47.0), Bridge.Decimal(0.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(47.0), Bridge.Decimal(0.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal.One, Bridge.Decimal(2.0), Bridge.Decimal(0.5)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(3.0), Bridge.Decimal(4.0), Bridge.Decimal(0.75)], [Bridge.ClientTest.DecimalMathTests.HasDotNetDiff, "-0.00000000000000000000000000003", Bridge.Decimal(5.0), Bridge.Decimal(6.0), Bridge.Decimal("0.8333333333333333333333333333")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(7.0), Bridge.Decimal(8.0), Bridge.Decimal(0.875)], [Bridge.ClientTest.DecimalMathTests.HasDotNetDiff, "-0.0000000000000005", Bridge.Decimal("443534569034876.33478923476"), Bridge.Decimal(47.0), Bridge.Decimal("9436905724146.304995515633191")], [Bridge.ClientTest.DecimalMathTests.HasDotNetDiff, "0.0000000000000002", Bridge.Decimal("443534569034876.12345678901235"), Bridge.Decimal(47.000000000001), Bridge.Decimal("9436905724146.099713852443963")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("443534569034876.12345678901235"), Bridge.Decimal("9436905724146.297872340425532"), Bridge.Decimal("47.000000000000013082337857467")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("4435345690348766678656790453"), Bridge.Decimal(17.0), Bridge.Decimal("260902687667574510509222967.82")], [Bridge.ClientTest.DecimalMathTests.HasDotNetDiff, "0.0000000000000000000000000000142752779107986686908967873", Bridge.Decimal(17.2345324), Bridge.Decimal("4435345690348766678656790453"), Bridge.Decimal("3.9000000000000004E-27")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("-943456769034871.4234"), Bridge.Decimal("47.00000000003455"), Bridge.Decimal("-20073548277322.933666106776439")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("6999545690348766678656790453"), Bridge.Decimal(-13.0), Bridge.Decimal("-538426591565289744512060804.08")], [Bridge.ClientTest.DecimalMathTests.HasDotNetDiff, "0.0000000000000000000000000000093098847039324132480985641", Bridge.Decimal(11.0), Bridge.Decimal("-6435345690348766678656790453"), Bridge.Decimal("-1.7000000000000002E-27")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.ClientTest.DecimalMathTests.maxValue, Bridge.ClientTest.DecimalMathTests.minValue, Bridge.Decimal.MinusOne], [Bridge.ClientTest.DecimalMathTests.HasDotNetDiff, "-0.000000000000000000000000000012621774483536188886587657045", Bridge.Decimal.MinusOne, Bridge.ClientTest.DecimalMathTests.minValue, Bridge.Decimal(0.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.ClientTest.DecimalMathTests.maxValue, Bridge.Decimal.MinusOne, Bridge.ClientTest.DecimalMathTests.minValue], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.ClientTest.DecimalMathTests.minValue, Bridge.Decimal.MinusOne, Bridge.ClientTest.DecimalMathTests.maxValue]], 20, 5);
                this.inputRemainder = Bridge.Array.create(null, [[Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(47.0), Bridge.Decimal(0.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(-47.0), Bridge.Decimal(0.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(-47.0), Bridge.Decimal(0.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(47.0), Bridge.Decimal(0.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("443534569034876.33478923476"), Bridge.Decimal(47.0), Bridge.Decimal(14.33478923476)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("443534569034876.12345678901235"), Bridge.Decimal(47.000000000001), Bridge.Decimal(4.68655106486635)], [Bridge.ClientTest.DecimalMathTests.HasDotNetDiff, Bridge.Decimal("4E-15"), Bridge.Decimal("443534569034876.12345678901235"), Bridge.Decimal("9436905724146.297872340425532"), Bridge.Decimal(0.12345678901235)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("4435345690348766678656790453"), Bridge.Decimal(17.0), Bridge.Decimal(14.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(17.2345324), Bridge.Decimal("4435345690348766678656790453"), Bridge.Decimal(17.2345324)], [Bridge.ClientTest.DecimalMathTests.HasDotNetDiff, Bridge.Decimal("1E-13"), Bridge.Decimal("-943456769034871.4234"), Bridge.Decimal("47.00000000003455"), Bridge.Decimal(-43.8823070185248)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("6999545690348766678656790453"), Bridge.Decimal(-13.0), Bridge.Decimal.One], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(11.0), Bridge.Decimal("-6435345690348766678656790453"), Bridge.Decimal(11.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.ClientTest.DecimalMathTests.maxValue, Bridge.ClientTest.DecimalMathTests.maxValue, Bridge.Decimal(0.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal.MinusOne, Bridge.ClientTest.DecimalMathTests.minValue, Bridge.Decimal.MinusOne], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.ClientTest.DecimalMathTests.maxValue, Bridge.Decimal.One, Bridge.Decimal(0.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.ClientTest.DecimalMathTests.minValue, Bridge.Decimal.MinusOne, Bridge.Decimal(0.0)]], 16, 5);
            }
        },
        testSubtractOperator: function () {
            Bridge.ClientTest.DecimalMathTests.runOperationSet$1(Bridge.ClientTest.DecimalMathTests.inputSubtract, "SubtractOperator", function (a, b) {
                return a.sub(b);
            });
        },
        testRemainderOperator: function () {
            Bridge.ClientTest.DecimalMathTests.runOperationSet$1(Bridge.ClientTest.DecimalMathTests.inputRemainder, "RemainderOperator", function (a, b) {
                return a.mod(b);
            });
        },
        testMultiplyOperator: function () {
            Bridge.ClientTest.DecimalMathTests.runOperationSet$1(Bridge.ClientTest.DecimalMathTests.inputMultiply, "MultiplyOperator", function (a, b) {
                return a.mul(b);
            });
        },
        testDivideOperator: function () {
            Bridge.ClientTest.DecimalMathTests.runOperationSet$1(Bridge.ClientTest.DecimalMathTests.inputDivide, "DivideOperator", function (a, b) {
                return a.div(b);
            });
        },
        testAddOperator: function () {
            Bridge.ClientTest.DecimalMathTests.runOperationSet$1(Bridge.ClientTest.DecimalMathTests.inputAdd, "AddOperator", function (a, b) {
                return a.add(b);
            });
        },
        testAddMethod: function () {
            Bridge.ClientTest.DecimalMathTests.runOperationSet$1(Bridge.ClientTest.DecimalMathTests.inputAdd, "AddMethod", function (a, b) {
                return a.add(b);
            });
        },
        testDivideMethod: function () {
            Bridge.ClientTest.DecimalMathTests.runOperationSet$1(Bridge.ClientTest.DecimalMathTests.inputDivide, "DivideMethod", function (a, b) {
                return a.div(b);
            });
        },
        testMultiplyMethod: function () {
            Bridge.ClientTest.DecimalMathTests.runOperationSet$1(Bridge.ClientTest.DecimalMathTests.inputMultiply, "MiltiplyMethod", function (a, b) {
                return a.mul(b);
            });
        },
        testRemainderMethod: function () {
            Bridge.ClientTest.DecimalMathTests.runOperationSet$1(Bridge.ClientTest.DecimalMathTests.inputRemainder, "RemainderMethod", function (a, b) {
                return a.mod(b);
            });
        },
        testSubtractMethod: function () {
            Bridge.ClientTest.DecimalMathTests.runOperationSet$1(Bridge.ClientTest.DecimalMathTests.inputSubtract, "SubtractMethod", function (a, b) {
                return a.sub(b);
            });
        },
        testCeilingMethod: function () {
            var input = Bridge.Array.create(null, [[Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(0.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("-443534569034876.12345678901235"), Bridge.Decimal(-443534569034876.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("-443534569034876.82345678901235"), Bridge.Decimal(-443534569034876.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("443534569034876.12345678901235"), Bridge.Decimal(443534569034877.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("443534569034876.62345678901235"), Bridge.Decimal(443534569034877.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("443534569034876.49999999999999"), Bridge.Decimal(443534569034877.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("443534569034876.50000000000001"), Bridge.Decimal(443534569034877.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("443534569034876.99999999999999"), Bridge.Decimal(443534569034877.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("4435345690348766678656790453"), Bridge.Decimal("4435345690348766678656790453")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(17.9345324), Bridge.Decimal(18.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("-0.9434567690348714234"), Bridge.Decimal(0.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("6999545690348766678656790453"), Bridge.Decimal("6999545690348766678656790453")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.ClientTest.DecimalMathTests.maxValue, Bridge.ClientTest.DecimalMathTests.maxValue], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal.MinusOne, Bridge.Decimal.MinusOne], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.ClientTest.DecimalMathTests.minValue, Bridge.ClientTest.DecimalMathTests.minValue]], 15, 4);

            Bridge.ClientTest.DecimalMathTests.runOperationSet(input, "CeilingMethod", function (a) {
                return a.ceil();
            });
        },
        testFloorMethod: function () {
            var input = Bridge.Array.create(null, [[Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(0.0), Bridge.Decimal(0.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("-443534569034876.12345678901235"), Bridge.Decimal(-443534569034877.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("-443534569034876.82345678901235"), Bridge.Decimal(-443534569034877.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("443534569034876.12345678901235"), Bridge.Decimal(443534569034876.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("443534569034876.62345678901235"), Bridge.Decimal(443534569034876.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("443534569034876.49999999999999"), Bridge.Decimal(443534569034876.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("443534569034876.50000000000001"), Bridge.Decimal(443534569034876.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("443534569034876.99999999999999"), Bridge.Decimal(443534569034876.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("4435345690348766678656790453"), Bridge.Decimal("4435345690348766678656790453")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal(17.9345324), Bridge.Decimal(17.0)], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("-0.9434567690348714234"), Bridge.Decimal.MinusOne], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal("6999545690348766678656790453"), Bridge.Decimal("6999545690348766678656790453")], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.ClientTest.DecimalMathTests.maxValue, Bridge.ClientTest.DecimalMathTests.maxValue], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.Decimal.MinusOne, Bridge.Decimal.MinusOne], [Bridge.ClientTest.DecimalMathTests.NoDotNetDiff, null, Bridge.ClientTest.DecimalMathTests.minValue, Bridge.ClientTest.DecimalMathTests.minValue]], 15, 4);

            Bridge.ClientTest.DecimalMathTests.runOperationSet(input, "FloorMethod", function (a) {
                return a.floor();
            });
        },
        runOperationSet$1: function (input, name, operation) {
            var logger = new Bridge.ClientTest.DecimalMathTests.Logger();
            logger.onLogBegin(name);

            for (var i = Bridge.Array.getLower(input, 0); i <= (Bridge.Array.getLength(input, 0) - 1); i++) {
                var lowerBound = Bridge.Array.getLower(input, 1);
                var dotNetDiff = Bridge.ClientTest.DecimalMathTests.parseDotNetDiff(input, i, lowerBound);

                var a = input.get([i, lowerBound + 2]);
                var b = input.get([i, lowerBound + 3]);
                var expected = input.get([i, lowerBound + 4]);
                var result = Bridge.ClientTest.DecimalMathTests.runOperation(Bridge.cast(a, Bridge.Decimal), Bridge.cast(b, Bridge.Decimal), operation);

                logger.onLog([dotNetDiff, a, b, result]);

                var diff = Bridge.ClientTest.DecimalMathTests.getDifference(expected, result);
                var diffReport = Bridge.ClientTest.DecimalMathTests.getDifferenceReport(diff);

                Bridge.ClientTest.DecimalMathTests.assertDecimal(dotNetDiff, expected, result, diffReport, Bridge.String.format("{0} for row {1} with operand {2} and {3} .NetDiff {4}{5}", name, i, a, b, dotNetDiff, diffReport));
            }

            logger.onLogEnd();
        },
        runOperationSet: function (input, name, operation) {
            var logger = new Bridge.ClientTest.DecimalMathTests.Logger();
            logger.onLogBegin(name);

            for (var i = Bridge.Array.getLower(input, 0); i <= (Bridge.Array.getLength(input, 0) - 1); i++) {
                var lowerBound = Bridge.Array.getLower(input, 1);
                var dotNetDiff = Bridge.ClientTest.DecimalMathTests.parseDotNetDiff(input, i, lowerBound);
                var a = input.get([i, lowerBound + 2]);
                var expected = input.get([i, lowerBound + 3]);
                var result = Bridge.ClientTest.DecimalMathTests.runOperation$1(Bridge.cast(a, Bridge.Decimal), operation);

                logger.onLog([dotNetDiff, a, result]);

                var diff = Bridge.ClientTest.DecimalMathTests.getDifference(expected, result);
                var diffReport = Bridge.ClientTest.DecimalMathTests.getDifferenceReport(diff);

                Bridge.ClientTest.DecimalMathTests.assertDecimal(dotNetDiff, expected, result, diffReport, Bridge.String.format("{0} for row {1} with operand {2} .NetDiff {3}{4}", name, i, a, dotNetDiff, diffReport));
            }

            logger.onLogEnd();
        },
        parseDotNetDiff: function (input, i, lowerBound) {
            var o = input.get([i, lowerBound + 1]);
            if (o === null)
                return null;

            if (Bridge.is(o, String))
                return Bridge.Decimal(o.toString());

            var dotNetDiff = Bridge.cast(input.get([i, lowerBound + 1]), Bridge.Decimal, true);
            return dotNetDiff;
        },
        assertDecimal: function (dotNetDiff, expected, result, differenceReport, message) {
            if (Bridge.ClientTest.DecimalMathTests.jSMode) {
                Bridge.ClientTest.DecimalMathTests.assertIsDecimalAndEqualTo(result, Bridge.cast(expected, Bridge.Decimal).sub((Bridge.Nullable.hasValue(dotNetDiff) ? Bridge.Nullable.getValue(dotNetDiff) : Bridge.Decimal(0.0))), message);
            }
            else  {
                Bridge.ClientTest.DecimalMathTests.assertIsDecimalAndEqualTo(result, expected, message);
            }
        },
        assertIsDecimalAndEqualTo: function (actual, expected, message) {
            Bridge.Test.Assert.true$1(Bridge.is(actual, Bridge.Decimal), "isDecimal " + message);
            Bridge.Test.Assert.areStrictEqual$1(actual.toString(), expected.toString(), "StrictEqual " + message);
        },
        getDifferenceReport: function (difference) {
            var differenceReport = difference.ne(Bridge.Decimal(0.0)) ? "; result diff is " + difference.toString() : "";
            return differenceReport;
        },
        getDifference: function (expected, result) {
            var difference;
            if ((Bridge.is(result, Bridge.Decimal) || Bridge.is(result, Bridge.Int)) && (Bridge.is(expected, Bridge.Decimal) || Bridge.is(expected, Bridge.Int))) {
                difference  = Bridge.cast(expected, Bridge.Decimal).sub(Bridge.cast(result, Bridge.Decimal));
            }
            else  {
                difference  = Bridge.Decimal(0.0);
            }

            return difference;
        },
        runOperation: function (a, b, operation) {
            return operation(a, b);
        },
        runOperation$1: function (a, operation) {
            return operation(a);
        }
    }
});

Bridge.define('Bridge.ClientTest.DecimalMathTests.Logger', {
    statics: {
        convertParameters: function (parameters) {
            var result = Bridge.Array.init(parameters.length + 1, null);

            for (var i = 0; i < parameters.length; i++) {
                if (i === 0) {
                    var d = Bridge.cast(parameters[0], Bridge.Decimal, true);
                    result[0] = Bridge.Nullable.hasValue(d) ? "HasDotNetDiff" : "NoDotNetDiff";
                    result[1] = Bridge.Nullable.hasValue(d) ? d.toString() + "m" : "null";

                    continue;
                }

                var o = parameters[i];
                var j = i + 1;
                if (Bridge.is(o, Bridge.Decimal)) {
                    var d1 = Bridge.cast(o, Bridge.Decimal);
                    if (d1.equals(Bridge.ClientTest.DecimalMathTests.maxValue))
                        result[j] = "DecimalMathTests.MaxValue";
                    else 
                        if (d1.equals(Bridge.ClientTest.DecimalMathTests.minValue))
                            result[j] = "DecimalMathTests.MinValue";
                        else 
                            if (d1.equals(Bridge.Decimal.MinusOne))
                                result[j] = "decimal.MinusOne";
                            else 
                                if (d1.equals(Bridge.Decimal.One))
                                    result[j] = "decimal.One";
                                else 
                                    result[j] = d1.toString() + "m";
                }
                else  {
                    result[j] = o;
                }
            }

            return result;
        }
    },
    config: {
        properties: {
            Text: null
        }
    },
    constructor: function () {
        if (Bridge.ClientTest.DecimalMathTests.useLogging)
            this.setText(new Bridge.Text.StringBuilder());
    },
    onLogBegin: function (name) {
        if (!Bridge.ClientTest.DecimalMathTests.useLogging)
            return;

        this.getText().appendLine("//------------------------------" + name + "------------------------------");
        this.getText().appendLine("object[,] input = new object[,]");
        this.getText().append("{");
    },
    onLog: function (parameters) {
        if (!Bridge.ClientTest.DecimalMathTests.useLogging)
            return;

        var sb = new Bridge.Text.StringBuilder("{{");
        for (var i = 0; i < parameters.length + 1; i++) {
            sb.append(" {");
            sb.append(i);
            sb.append("},");
        }
        sb.remove(sb.getLength() - 1, 1);
        sb.append(" }},");

        var format = sb.toString();

        this.getText().appendLine();
        //Fix
        //this.Text.AppendFormat(format, ConvertParameters(parameters));
        var convertedParams = Bridge.ClientTest.DecimalMathTests.Logger.convertParameters(parameters);
        if (convertedParams.length === 4)
            this.getText().appendFormat(format, convertedParams[0], convertedParams[1], convertedParams[2], convertedParams[3]);
        if (convertedParams.length === 5)
            this.getText().appendFormat(format, convertedParams[0], convertedParams[1], convertedParams[2], convertedParams[3], convertedParams[4]);
    },
    onLogEnd: function () {
        if (!Bridge.ClientTest.DecimalMathTests.useLogging)
            return;

        var sb = this.getText();

        sb.remove(sb.getLength() - 1, 1);
        sb.appendLine();
        sb.append("};");

        console.log(sb.toString());
    }
});

Bridge.define('Bridge.ClientTest.EnvironmentTests', {
    newLineIsAStringContainingOnlyTheNewLineChar: function () {
        Bridge.Test.Assert.areEqual('\n', "\n");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.ArgumentExceptionTests', {
    statics: {
        DefaultMessage: "Value does not fall within the expected range."
    },
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.ArgumentException), "Bridge.ArgumentException", "Name");
        var d = new Bridge.ArgumentException();
        Bridge.Test.Assert.$true(Bridge.is(d, Bridge.ArgumentException));
        Bridge.Test.Assert.$true(Bridge.is(d, Bridge.Exception));
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.ArgumentException();
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.ArgumentException), "is ArgumentException");
        Bridge.Test.Assert.areEqual$1(ex.getParamName(), undefined, "ParamName");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), Bridge.ClientTest.Exceptions.ArgumentExceptionTests.DefaultMessage);
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.ArgumentException("The message");
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.ArgumentException), "is ArgumentException");
        Bridge.Test.Assert.areEqual$1(ex.getParamName(), undefined, "ParamName");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.ArgumentException("The message", null, inner);
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.ArgumentException), "is ArgumentException");
        Bridge.Test.Assert.areEqual$1(ex.getParamName(), null, "ParamName");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndParamNameWorks: function () {
        var ex = new Bridge.ArgumentException("The message", "someParam");
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.ArgumentException), "is ArgumentException");
        Bridge.Test.Assert.areEqual$1(ex.getParamName(), "someParam", "ParamName");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndParamNameAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.ArgumentException("The message", "someParam", inner);
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.ArgumentException), "is ArgumentException");
        Bridge.Test.Assert.areEqual$1(ex.getParamName(), "someParam", "ParamName");
        Bridge.Test.Assert.true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.ArgumentNullExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.ArgumentNullException), "Bridge.ArgumentNullException", "Name");
        var d = new Bridge.ArgumentNullException();
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.ArgumentNullException), "is ArgumentNullException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.ArgumentException), "is ArgumentException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.Exception), "is Exception");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.ArgumentNullException();
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.ArgumentNullException), "is ArgumentNullException");
        Bridge.Test.Assert.areEqual$1(ex.getParamName(), undefined, "ParamName");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "Value cannot be null.");
    },
    constructorWithParamNameWorks: function () {
        var ex = new Bridge.ArgumentNullException("someParam");
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.ArgumentNullException), "is ArgumentNullException");
        Bridge.Test.Assert.areEqual$1(ex.getParamName(), "someParam", "ParamName");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "Value cannot be null.\nParameter name: someParam");
    },
    constructorWithParamNameAndMessageWorks: function () {
        var ex = new Bridge.ArgumentNullException("someParam", "The message");
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.ArgumentNullException), "is ArgumentNullException");
        Bridge.Test.Assert.areEqual$1(ex.getParamName(), "someParam", "ParamName");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.ArgumentNullException(null, "The message", inner);
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.ArgumentNullException), "is ArgumentException");
        Bridge.Test.Assert.areEqual$1(ex.getParamName(), null, "ParamName");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.ArgumentOutOfRangeException), "Bridge.ArgumentOutOfRangeException", "Name");
        var d = new Bridge.ArgumentOutOfRangeException();
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.ArgumentOutOfRangeException), "is ArgumentOutOfRangeException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.ArgumentException), "is ArgumentException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.Exception), "is Exception");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.ArgumentOutOfRangeException();
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.ArgumentOutOfRangeException), "is ArgumentOutOfRangeException");
        Bridge.Test.Assert.areEqual$1(ex.getParamName(), undefined, "ParamName");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual$1(ex.getActualValue(), undefined, "ActualValue");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "Value is out of range.");
    },
    constructorWithParamNameWorks: function () {
        var ex = new Bridge.ArgumentOutOfRangeException("someParam");
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.ArgumentOutOfRangeException), "is ArgumentOutOfRangeException");
        Bridge.Test.Assert.areEqual$1(ex.getParamName(), "someParam", "ParamName");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual$1(ex.getActualValue(), undefined, "ActualValue");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "Value is out of range.\nParameter name: someParam");
    },
    constructorWithParamNameAndMessageWorks: function () {
        var ex = new Bridge.ArgumentOutOfRangeException("someParam", "The message");
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.ArgumentOutOfRangeException), "is ArgumentOutOfRangeException");
        Bridge.Test.Assert.areEqual$1(ex.getParamName(), "someParam", "ParamName");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual$1(ex.getActualValue(), undefined, "ActualValue");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.ArgumentOutOfRangeException(null, "The message", inner);
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.ArgumentOutOfRangeException), "is ArgumentOutOfRangeException");
        Bridge.Test.Assert.null$1(ex.getParamName(), "ParamName");
        Bridge.Test.Assert.true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.Test.Assert.areEqual$1(ex.getActualValue(), undefined, "ActualValue");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithParamNameAndActualValueAndMessageWorks: function () {
        var ex = new Bridge.ArgumentOutOfRangeException("someParam", "The message", null, 42);
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.ArgumentOutOfRangeException), "is ArgumentOutOfRangeException");
        Bridge.Test.Assert.areEqual$1(ex.getParamName(), "someParam", "ParamName");
        Bridge.Test.Assert.null$1(ex.getInnerException(), "InnerException");
        Bridge.Test.Assert.areEqual$1(ex.getActualValue(), 42, "ActualValue");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    rangeErrorIsConvertedToArgumentOutOfRangeException: function () {
        var size = -1;
        try {
            var arr = Bridge.Array.init(size, 0);
            Bridge.Test.Assert.fail$1("Should throw");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            var ex;
            if (Bridge.is($e, Bridge.ArgumentOutOfRangeException)) {
                ex = $e;
                var inner = ex.getInnerException();
                Bridge.Test.Assert.notNull$1(inner, "Inner Exception");
            }
            else {
                ex = $e;
                Bridge.Test.Assert.fail$1("Expected ArgumentOutOfRangeException, got " + Bridge.getType(ex));
            }
        }
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.ArithmeticExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.ArithmeticException), "Bridge.ArithmeticException", "Name");
        var d = new Bridge.ArithmeticException();
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.ArithmeticException), "is DivideByZeroException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.Exception), "is Exception");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.ArithmeticException();
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.ArithmeticException), "is ArithmeticException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "Overflow or underflow in the arithmetic operation.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.ArithmeticException("The message");
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.ArithmeticException), "is OverflowException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.ArithmeticException("The message", inner);
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.ArithmeticException), "is OverflowException");
        Bridge.Test.Assert.true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.DivideByZeroExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.DivideByZeroException), "Bridge.DivideByZeroException", "Name");
        var d = new Bridge.DivideByZeroException();
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.DivideByZeroException), "is DivideByZeroException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.Exception), "is Exception");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.DivideByZeroException();
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.DivideByZeroException), "is DivideByZeroException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "Division by 0.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.DivideByZeroException("The message");
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.DivideByZeroException), "is DivideByZeroException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.DivideByZeroException("The message", inner);
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.DivideByZeroException), "is DivideByZeroException");
        Bridge.Test.Assert.true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.ExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.Exception), "Bridge.Exception", "Name");
        var d = new Bridge.Exception();
        Bridge.Test.Assert.$true(Bridge.is(d, Bridge.Exception));
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.Exception();
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.Exception), "is Exception");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), undefined);
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.Exception("The message");
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.Exception), "is Exception");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.Exception("The message", inner);
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.Exception), "is Exception");
        Bridge.Test.Assert.true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    messagePropertyCanBeOverridden: function () {
        var ex = Bridge.cast(new Bridge.ClientTest.Exceptions.ExceptionTests.MyException("Test message", null), Bridge.Exception);
        Bridge.Test.Assert.areEqual(ex.getMessage(), "Test message");
    },
    innerExceptionPropertyCanBeOverridden: function () {
        var inner = new Bridge.Exception("a");
        var ex = Bridge.cast(new Bridge.ClientTest.Exceptions.ExceptionTests.MyException("Test message", inner), Bridge.Exception);
        Bridge.Test.Assert.$true(ex.getInnerException() === inner);
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.ExceptionTests.MyException', {
    inherits: [Bridge.Exception],
    _message: null,
    _innerException: null,
    constructor: function (message, innerException) {
        Bridge.Exception.prototype.$constructor.call(this);

        this._message = message;
        this._innerException = innerException;
    },
    getMessage: function () {
        return this._message;
    },
    getInnerException: function () {
        return this._innerException;
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.FormatExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.FormatException), "Bridge.FormatException", "Name");
        var d = new Bridge.FormatException();
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.FormatException), "is FormatException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.Exception), "is Exception");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.FormatException();
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.FormatException), "is FormatException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "Invalid format.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.FormatException("The message");
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.FormatException), "is FormatException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.FormatException("The message", inner);
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.FormatException), "is FormatException");
        Bridge.Test.Assert.true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.InvalidCastExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.InvalidCastException), "Bridge.InvalidCastException", "Name");
        var d = new Bridge.InvalidCastException();
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.InvalidCastException), "is InvalidCastException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.Exception), "is Exception");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.InvalidCastException();
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.InvalidCastException), "is InvalidCastException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The cast is not valid.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.InvalidCastException("The message");
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.InvalidCastException), "is InvalidCastException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.InvalidCastException("The message", inner);
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.InvalidCastException), "is InvalidCastException");
        Bridge.Test.Assert.true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.InvalidOperationExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.InvalidOperationException), "Bridge.InvalidOperationException", "Name");
        var d = new Bridge.InvalidOperationException();
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.InvalidOperationException), "is InvalidOperationException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.Exception), "is Exception");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.InvalidOperationException();
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.InvalidOperationException), "is InvalidOperationException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "Operation is not valid due to the current state of the object.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.InvalidOperationException("The message");
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.InvalidOperationException), "is InvalidOperationException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.InvalidOperationException("The message", inner);
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.InvalidOperationException), "is InvalidOperationException");
        Bridge.Test.Assert.true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.KeyNotFoundExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.KeyNotFoundException), "Bridge.KeyNotFoundException", "Name");
        var d = new Bridge.KeyNotFoundException();
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.KeyNotFoundException), "is KeyNotFoundException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.Exception), "is Exception");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.KeyNotFoundException();
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.KeyNotFoundException), "is KeyNotFoundException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "Key not found.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.KeyNotFoundException("The message");
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.KeyNotFoundException), "is KeyNotFoundException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.KeyNotFoundException("The message", inner);
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.KeyNotFoundException), "is KeyNotFoundException");
        Bridge.Test.Assert.true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.NotImplementedExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.NotImplementedException), "Bridge.NotImplementedException", "Name");
        var d = new Bridge.NotImplementedException();
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.NotImplementedException), "is NotImplementedException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.Exception), "is Exception");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.NotImplementedException();
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.NotImplementedException), "is NotImplementedException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The method or operation is not implemented.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.NotImplementedException("The message");
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.NotImplementedException), "is NotImplementedException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.NotImplementedException("The message", inner);
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.NotImplementedException), "is NotImplementedException");
        Bridge.Test.Assert.true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.NotSupportedExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.NotSupportedException), "Bridge.NotSupportedException", "Name");
        var d = new Bridge.NotSupportedException();
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.NotSupportedException), "is NotSupportedException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.Exception), "is Exception");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.NotSupportedException();
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.NotSupportedException), "is NotSupportedException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "Specified method is not supported.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.NotSupportedException("The message");
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.NotSupportedException), "is NotSupportedException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.NotSupportedException("The message", inner);
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.NotSupportedException), "is NotSupportedException");
        Bridge.Test.Assert.true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.NullReferenceExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.NullReferenceException), "Bridge.NullReferenceException", "Name");
        var d = new Bridge.NullReferenceException();
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.NullReferenceException), "is NullReferenceException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.Exception), "is Exception");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.NullReferenceException();
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.NullReferenceException), "is NullReferenceException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "Object is null.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.NullReferenceException("The message");
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.NullReferenceException), "is NullReferenceException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.NullReferenceException("The message", inner);
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.NullReferenceException), "is NullReferenceException");
        Bridge.Test.Assert.true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    accessingAFieldOnANullObjectCausesANullReferenceException: function () {
        try {
            var d = null;
            var x = d.someField;
            Bridge.Test.Assert.fail$1("A NullReferenceException should have been thrown");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            var ex;
            if (Bridge.is($e, Bridge.NullReferenceException)) {
                ex = $e;
                var inner = ex.getInnerException();
                Bridge.Test.Assert.notNull$1(inner, "Inner Exception");
            }
            else {
                ex = $e;
                Bridge.Test.Assert.fail$1("Expected NullReferenceException, got type " + Bridge.getType(ex));
            }
        }
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.OverflowExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.OverflowException), "Bridge.OverflowException", "Name");
        var d = new Bridge.OverflowException();
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.OverflowException), "is OverflowException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.Exception), "is Exception");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.OverflowException();
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.OverflowException), "is OverflowException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "Arithmetic operation resulted in an overflow.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.OverflowException("The message");
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.OverflowException), "is OverflowException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.OverflowException("The message", inner);
        Bridge.Test.Assert.true$1(Bridge.is(ex, Bridge.OverflowException), "is OverflowException");
        Bridge.Test.Assert.true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.ExceptionTests', {
    throwingAndCatchingExceptionsWorks: function () {
        try {
            throw new Bridge.ClientTest.ExceptionTests.E2("The message");
            Bridge.Test.Assert.fail$1("Should not get to statement after throw");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            var e;
            if (Bridge.is($e, Bridge.ClientTest.ExceptionTests.E2)) {
                e = $e;
                Bridge.Test.Assert.areEqual(e.getMessage(), "The message");
                return;
            }
            else {
                throw $e;
            }
        }
        Bridge.Test.Assert.fail$1("Should not get to statement after catch");
    },
    exceptionOfWrongTypeIsNotCaught: function () {
        try {
            throw new Bridge.ClientTest.ExceptionTests.E1("The message");
            Bridge.Test.Assert.fail$1("Should not get to statement after throw");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            var e;
            if (Bridge.is($e, Bridge.ClientTest.ExceptionTests.E2)) {
                Bridge.Test.Assert.fail$1("Should not catch E2");
            }
            else if (Bridge.is($e, Bridge.ClientTest.ExceptionTests.E1)) {
                e = $e;
                Bridge.Test.Assert.areEqual(e.getMessage(), "The message");
                return;
            }
            else {
                throw $e;
            }
        }
        Bridge.Test.Assert.fail$1("Should not get to statement after catch");
    },
    canCatchExceptionAsBaseType: function () {
        try {
            throw new Bridge.ClientTest.ExceptionTests.E2("The message");
            Bridge.Test.Assert.fail$1("Should not get to statement after throw");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            var e;
            if (Bridge.is($e, Bridge.ClientTest.ExceptionTests.E1)) {
                e = $e;
                Bridge.Test.Assert.areEqual(e.getMessage(), "The message");
                return;
            }
            else {
                throw $e;
            }
        }
        Bridge.Test.Assert.fail$1("Should not get to statement after catch");
    },
    canCatchStringAsException: function () {
        try {
            (function() {{ throw 'The message'; }})();
            Bridge.Test.Assert.fail$1("Should not get to statement after throw");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            var e;
            if (Bridge.is($e, Bridge.ClientTest.ExceptionTests.E1)) {
                Bridge.Test.Assert.fail$1("Should not catch E1");
            }
            else {
                e = $e;
                Bridge.Test.Assert.areEqual(e.getMessage(), "The message");
                return;
            }
        }
        Bridge.Test.Assert.fail$1("Should not get to statement after catch");
    },
    canCatchStringAsCatchAll: function () {
        try {
            (function() {{ throw 'The message'; }})();
            Bridge.Test.Assert.fail$1("Should not get to statement after throw");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            if (Bridge.is($e, Bridge.ClientTest.ExceptionTests.E1)) {
                Bridge.Test.Assert.fail$1("Should not catch E1");
            }
            else {
                return;
            }
        }
        Bridge.Test.Assert.fail$1("Should not get to statement after catch");
    }
});

Bridge.define('Bridge.ClientTest.ExceptionTests.E1', {
    inherits: [Bridge.Exception],
    constructor: function (message) {
        Bridge.Exception.prototype.$constructor.call(this, message);

    }
});

Bridge.define('Bridge.ClientTest.ExceptionTests.E2', {
    inherits: [Bridge.ClientTest.ExceptionTests.E1],
    constructor: function (message) {
        Bridge.ClientTest.ExceptionTests.E1.prototype.$constructor.call(this, message);

    }
});

Bridge.define('Bridge.ClientTest.Globals', {
    statics: {
        setTimeout: function (action, milliseconds) {
            return 0;
        }
    }
});

Bridge.define('Bridge.ClientTest.IComparableTests', {
    callingMethodThroughIComparableInterfaceInvokesImplementingMethod: function () {
        var a = new Bridge.ClientTest.IComparableTests.MyComparable(), b = new Bridge.ClientTest.IComparableTests.MyComparable();
        a.result = 534;
        Bridge.Test.Assert.areEqual(Bridge.compare((Bridge.cast(a, Bridge.IComparable$1(Bridge.ClientTest.IComparableTests.MyComparable))), b), 534);
        Bridge.Test.Assert.areStrictEqual(a.other, b);

        a.result = -42;
        Bridge.Test.Assert.areEqual(Bridge.compare((Bridge.cast(a, Bridge.IComparable$1(Bridge.ClientTest.IComparableTests.MyComparable))), null), -42);
        Bridge.Test.Assert.areStrictEqual(a.other, null);

        a.result = -534;
        Bridge.Test.Assert.areEqual(a.compareTo(b), -534);
        Bridge.Test.Assert.areStrictEqual(a.other, b);

        a.result = 42;
        Bridge.Test.Assert.areEqual(a.compareTo(null), 42);
        Bridge.Test.Assert.areStrictEqual(a.other, null);
    }
});

Bridge.define('Bridge.ClientTest.IComparableTests.MyComparable', {
    inherits: function () { return [Bridge.IComparable$1(Bridge.ClientTest.IComparableTests.MyComparable)]; },
    result: 0,
    other: null,
    compareTo: function (other) {
        this.other = other;
        return this.result;
    }
});

Bridge.define('Bridge.ClientTest.IEquatableTests', {
    callingMethodThroughIComparableInterfaceInvokesImplementingMethod: function () {
        var a = new Bridge.ClientTest.IEquatableTests.MyEquatable(), b = new Bridge.ClientTest.IEquatableTests.MyEquatable();
        a.result = true;
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(a, Bridge.IEquatable$1(Bridge.ClientTest.IEquatableTests.MyEquatable))), b));
        Bridge.Test.Assert.areStrictEqual(a.other, b);
        a.result = false;
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(a, Bridge.IEquatable$1(Bridge.ClientTest.IEquatableTests.MyEquatable))), b));

        a.result = true;
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(a, Bridge.IEquatable$1(Bridge.ClientTest.IEquatableTests.MyEquatable))), null));
        Bridge.Test.Assert.areStrictEqual(a.other, null);
        a.result = false;
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(a, Bridge.IEquatable$1(Bridge.ClientTest.IEquatableTests.MyEquatable))), null));

        a.result = true;
        Bridge.Test.Assert.$true(a.equals(b));
        Bridge.Test.Assert.areStrictEqual(a.other, b);
        a.result = false;
        Bridge.Test.Assert.$false(a.equals(b));

        a.result = true;
        Bridge.Test.Assert.$true(a.equals(null));
        Bridge.Test.Assert.areStrictEqual(a.other, null);
        a.result = false;
        Bridge.Test.Assert.$false(a.equals(null));
    }
});

Bridge.define('Bridge.ClientTest.IEquatableTests.MyEquatable', {
    inherits: function () { return [Bridge.IEquatable$1(Bridge.ClientTest.IEquatableTests.MyEquatable)]; },
    result: false,
    other: null,
    equals: function (other) {
        this.other = other;
        return this.result;
    }
});

Bridge.define('Bridge.ClientTest.MathTests', {
    assertAlmostEqual: function (d1, d2) {
        var diff = d2 - d1;
        if (diff < 0)
            diff = -diff;
        Bridge.Test.Assert.$true(diff < 1E-08);
    },
    assertIsDecimalAndEqualTo: function (v, d) {
        Bridge.Test.Assert.areStrictEqual(Bridge.is(v, Bridge.Decimal), true);
        Bridge.Test.Assert.areStrictEqual(v.toString(), d.toString());
    },
    constantsWork: function () {
        this.assertAlmostEqual(Math.E, 2.7182818284590451);
        this.assertAlmostEqual(Math.LN2, 0.69314718055994529);
        this.assertAlmostEqual(Math.LN10, 2.3025850929940459);
        this.assertAlmostEqual(Math.LOG2E, 1.4426950408889634);
        this.assertAlmostEqual(Math.LOG10E, 0.43429448190325182);
        this.assertAlmostEqual(Math.PI, 3.1415926535897931);
        this.assertAlmostEqual(Math.SQRT1_2, 0.70710678118654757);
        this.assertAlmostEqual(Math.SQRT2, 1.4142135623730951);
    },
    absOfDoubleWorks: function () {
        Bridge.Test.Assert.areEqual(Math.abs(-12.5), 12.5);
    },
    absOfIntWorks: function () {
        Bridge.Test.Assert.areEqual(Math.abs(-12), 12);
    },
    absOfLongWorks: function () {
        Bridge.Test.Assert.areEqual(Math.abs(-12), 12);
    },
    absOfSbyteWorks: function () {
        Bridge.Test.Assert.areEqual(Math.abs(Bridge.cast(-15, Bridge.Int)), Bridge.cast(15, Bridge.Int));
    },
    absOfShortWorks: function () {
        Bridge.Test.Assert.areEqual(Math.abs(Bridge.cast(-15, Bridge.Int)), Bridge.cast(15, Bridge.Int));
    },
    absOfFloatWorks: function () {
        Bridge.Test.Assert.areEqual(Math.abs(-17.5), 17.5);
    },
    absOfDecimalWorks: function () {
        // TODO Math.Abs(decimal)
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(-10.0).abs(), 10.0);
    },
    acosWorks: function () {
        this.assertAlmostEqual(Math.acos(0.5), 1.0471975511965979);
    },
    asinWorks: function () {
        this.assertAlmostEqual(Math.asin(0.5), 0.52359877559829893);
    },
    atanWorks: function () {
        this.assertAlmostEqual(Math.atan(0.5), 0.46364760900080609);
    },
    atan2Works: function () {
        this.assertAlmostEqual(Math.atan2(1, 2), 0.46364760900080609);
    },
    cosWorks: function () {
        this.assertAlmostEqual(Math.cos(0.5), 0.87758256189037276);
    },
    expWorks: function () {
        this.assertAlmostEqual(Math.exp(0.5), 1.6487212707001282);
    },
    floorOfDoubleWorks: function () {
        Bridge.Test.Assert.areEqual(Math.floor(3.6), 3.0);
        Bridge.Test.Assert.areEqual(Math.floor(-3.6), -4.0);
    },
    floorOfDecimalWorks: function () {
        // TODO Math.Floor(decimal)
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(3.6).floor(), 3.0);
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(-3.6).floor(), -4.0);
    },
    logWorks: function () {
        this.assertAlmostEqual(Math.log(0.5), -0.69314718055994529);
    },
    maxOfByteWorks: function () {
        Bridge.Test.Assert.areEqual(Math.max(Bridge.cast(1, Bridge.Int), Bridge.cast(3, Bridge.Int)), 3.0);
        Bridge.Test.Assert.areEqual(Math.max(Bridge.cast(5, Bridge.Int), Bridge.cast(3, Bridge.Int)), 5.0);
    },
    maxOfDecimalWorks: function () {
        // TODO Max(decimal)
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.max(Bridge.Decimal(-14.5), Bridge.Decimal(3.0)), 3.0);
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.max(Bridge.Decimal(5.4), Bridge.Decimal(3.0)), 5.4);
    },
    maxOfDoubleWorks: function () {
        Bridge.Test.Assert.areEqual(Math.max(1.0, 3.0), 3.0);
        Bridge.Test.Assert.areEqual(Math.max(4.0, 3.0), 4.0);
    },
    maxOfShortWorks: function () {
        Bridge.Test.Assert.areEqual(Math.max(Bridge.cast(1, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(3, Bridge.Int));
        Bridge.Test.Assert.areEqual(Math.max(Bridge.cast(4, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(4, Bridge.Int));
    },
    maxOfIntWorks: function () {
        Bridge.Test.Assert.areEqual(Math.max(1, 3), 3);
        Bridge.Test.Assert.areEqual(Math.max(4, 3), 4);
    },
    maxOfLongWorks: function () {
        Bridge.Test.Assert.areEqual(Math.max(1, 3), 3);
        Bridge.Test.Assert.areEqual(Math.max(4, 3), 4);
    },
    maxOfSByteWorks: function () {
        Bridge.Test.Assert.areEqual(Math.max(Bridge.cast(-1, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(3, Bridge.Int));
        Bridge.Test.Assert.areEqual(Math.max(Bridge.cast(5, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(5, Bridge.Int));
    },
    maxOfFloatWorks: function () {
        Bridge.Test.Assert.areEqual(Math.max(-14.5, 3.0), 3.0);
        Bridge.Test.Assert.areEqual(Math.max(5.4, 3.0), 5.4);
    },
    maxOfUShortWorks: function () {
        Bridge.Test.Assert.areEqual(Math.max(Bridge.cast(1, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(3, Bridge.Int));
        Bridge.Test.Assert.areEqual(Math.max(Bridge.cast(5, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(5, Bridge.Int));
    },
    maxOfUIntWorks: function () {
        Bridge.Test.Assert.areEqual(Math.max(Bridge.cast(1, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(3, Bridge.Int));
        Bridge.Test.Assert.areEqual(Math.max(Bridge.cast(5, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(5, Bridge.Int));
    },
    maxOfULongWorks: function () {
        Bridge.Test.Assert.areEqual(Math.max(Bridge.cast(100, Bridge.Int), Bridge.cast(300, Bridge.Int)), Bridge.cast(300, Bridge.Int));
        Bridge.Test.Assert.areEqual(Math.max(Bridge.cast(500, Bridge.Int), Bridge.cast(300, Bridge.Int)), Bridge.cast(500, Bridge.Int));
    },
    minOfByteWorks: function () {
        Bridge.Test.Assert.areEqual(Math.min(Bridge.cast(1, Bridge.Int), Bridge.cast(3, Bridge.Int)), 1.0);
        Bridge.Test.Assert.areEqual(Math.min(Bridge.cast(5, Bridge.Int), Bridge.cast(3, Bridge.Int)), 3.0);
    },
    minOfDecimalWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.min(Bridge.Decimal(-14.5), Bridge.Decimal(3.0)), -14.5);
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.min(Bridge.Decimal(5.4), Bridge.Decimal(3.0)), 3.0);
    },
    minOfDoubleWorks: function () {
        Bridge.Test.Assert.areEqual(Math.min(1.0, 3.0), 1.0);
        Bridge.Test.Assert.areEqual(Math.min(4.0, 3.0), 3.0);
    },
    minOfShortWorks: function () {
        Bridge.Test.Assert.areEqual(Math.min(Bridge.cast(1, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(1, Bridge.Int));
        Bridge.Test.Assert.areEqual(Math.min(Bridge.cast(4, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(3, Bridge.Int));
    },
    minOfIntWorks: function () {
        Bridge.Test.Assert.areEqual(Math.min(1, 3), 1);
        Bridge.Test.Assert.areEqual(Math.min(4, 3), 3);
    },
    minOfLongWorks: function () {
        Bridge.Test.Assert.areEqual(Math.min(1, 3), 1);
        Bridge.Test.Assert.areEqual(Math.min(4, 3), 3);
    },
    minOfSByteWorks: function () {
        Bridge.Test.Assert.areEqual(Math.min(Bridge.cast(-1, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(-1, Bridge.Int));
        Bridge.Test.Assert.areEqual(Math.min(Bridge.cast(5, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(3, Bridge.Int));
    },
    minOfFloatWorks: function () {
        Bridge.Test.Assert.areEqual(Math.min(-14.5, 3.0), -14.5);
        Bridge.Test.Assert.areEqual(Math.min(5.4, 3.0), 3.0);
    },
    minOfUShortWorks: function () {
        Bridge.Test.Assert.areEqual(Math.min(Bridge.cast(1, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(1, Bridge.Int));
        Bridge.Test.Assert.areEqual(Math.min(Bridge.cast(5, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(3, Bridge.Int));
    },
    minOfUIntWorks: function () {
        Bridge.Test.Assert.areEqual(Math.min(Bridge.cast(1, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(1, Bridge.Int));
        Bridge.Test.Assert.areEqual(Math.min(Bridge.cast(5, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(3, Bridge.Int));
    },
    minOfULongWorks: function () {
        Bridge.Test.Assert.areEqual(Math.min(Bridge.cast(100, Bridge.Int), Bridge.cast(300, Bridge.Int)), Bridge.cast(100, Bridge.Int));
        Bridge.Test.Assert.areEqual(Math.min(Bridge.cast(500, Bridge.Int), Bridge.cast(300, Bridge.Int)), Bridge.cast(300, Bridge.Int));
    },
    powWorks: function () {
        this.assertAlmostEqual(Math.pow(3, 0.5), 1.7320508075688772);
    },
    randomWorks: function () {
        for (var i = 0; i < 5; i++) {
            var d = Math.random();
            Bridge.Test.Assert.$true(d >= 0);
            Bridge.Test.Assert.$true(d < 1);
        }
    },
    roundOfDoubleWorks: function () {
        Bridge.Test.Assert.areEqual(Math.round(3.432), 3.0);
        Bridge.Test.Assert.areEqual(Math.round(3.6), 4.0);
        Bridge.Test.Assert.areEqual(Math.round(3.5), 4.0);
        Bridge.Test.Assert.areEqual(Math.round(4.5), 5.0);
        Bridge.Test.Assert.areEqual(Math.round(-3.5), -3.0);
        Bridge.Test.Assert.areEqual(Math.round(-4.5), -4.0);
    },
    sinWorks: function () {
        this.assertAlmostEqual(Math.sin(0.5), 0.479425538604203);
    },
    sqrtWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(3.0).sqrt(), "1.7320508075688772935274463415");
    },
    tanWorks: function () {
        this.assertAlmostEqual(Math.tan(0.5), 0.54630248984379048);
    }
});

Bridge.define('Bridge.ClientTest.MultidimArrayTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Array), "Array", "FullName should be Array");
        var arr = Bridge.Array.create(0, null, 1, 1);
        Bridge.Test.Assert.true$1(Bridge.is(arr, Array), "is Array should be true");
        Bridge.Test.Assert.true$1(Bridge.is(arr, Array), "is int[,] should be true");
    },
    lengthWorks: function () {
        var arr = Bridge.Array.create(0, null, 3, 2);
        Bridge.Test.Assert.areEqual(6, arr.length);
    },
    getValueWorksForUninitializedElement: function () {
        var arr = Bridge.Array.create(0, null, 2, 2);
        Bridge.Test.Assert.areStrictEqual(Bridge.Array.get(arr, 0, 0), 0);
    },
    getValueByIndexWorksForUninitializedElement: function () {
        var arr = Bridge.Array.create(0, null, 2, 2);
        Bridge.Test.Assert.areStrictEqual(arr.get([0, 0]), 0);
    },
    settingValueByIndexWorks: function () {
        var arr = Bridge.Array.create(null, null, 3, 2);
        arr.set([0, 0], "a");
        arr.set([0, 1], "b");
        arr.set([1, 0], "c");
        arr.set([1, 1], "d");
        arr.set([2, 0], "e");
        arr.set([2, 1], "f");
        Bridge.Test.Assert.areEqual(arr.get([0, 0]), "a");
        Bridge.Test.Assert.areEqual(arr.get([0, 1]), "b");
        Bridge.Test.Assert.areEqual(arr.get([1, 0]), "c");
        Bridge.Test.Assert.areEqual(arr.get([1, 1]), "d");
        Bridge.Test.Assert.areEqual(arr.get([2, 0]), "e");
        Bridge.Test.Assert.areEqual(arr.get([2, 1]), "f");
    },
    setValueWorks: function () {
        var arr = Bridge.Array.create(null, null, 3, 2);
        Bridge.Array.set(arr, "a", 0, 0);
        Bridge.Array.set(arr, "b", 0, 1);
        Bridge.Array.set(arr, "c", 1, 0);
        Bridge.Array.set(arr, "d", 1, 1);
        Bridge.Array.set(arr, "e", 2, 0);
        Bridge.Array.set(arr, "f", 2, 1);
        Bridge.Test.Assert.areEqual(arr.get([0, 0]), "a");
        Bridge.Test.Assert.areEqual(arr.get([0, 1]), "b");
        Bridge.Test.Assert.areEqual(arr.get([1, 0]), "c");
        Bridge.Test.Assert.areEqual(arr.get([1, 1]), "d");
        Bridge.Test.Assert.areEqual(arr.get([2, 0]), "e");
        Bridge.Test.Assert.areEqual(arr.get([2, 1]), "f");
    },
    setUpArray: function (values) {
        var arr = Bridge.Array.create(0, null, values.length, 2);

        for (var i = 0; i < values.length; i++) {
            var v = Bridge.as(values[i], Array);
            Bridge.Array.set(arr, v[0], i, 0);
            Bridge.Array.set(arr, v[1], i, 1);
        }

        return arr;
    },
    getValueWorks: function () {
        var arr = this.setUpArray([[1, 2], [3, 4], [5, 6]]);
        Bridge.Test.Assert.areEqual(Bridge.Array.get(arr, 0, 0), 1);
        Bridge.Test.Assert.areEqual(Bridge.Array.get(arr, 0, 1), 2);
        Bridge.Test.Assert.areEqual(Bridge.Array.get(arr, 1, 0), 3);
        Bridge.Test.Assert.areEqual(Bridge.Array.get(arr, 1, 1), 4);
        Bridge.Test.Assert.areEqual(Bridge.Array.get(arr, 2, 0), 5);
        Bridge.Test.Assert.areEqual(Bridge.Array.get(arr, 2, 1), 6);
    },
    gettingValueByIndexWorks: function () {
        var arr = this.setUpArray([[1, 2], [3, 4], [5, 6]]);
        Bridge.Test.Assert.areEqual(arr.get([0, 0]), 1);
        Bridge.Test.Assert.areEqual(arr.get([0, 1]), 2);
        Bridge.Test.Assert.areEqual(arr.get([1, 0]), 3);
        Bridge.Test.Assert.areEqual(arr.get([1, 1]), 4);
        Bridge.Test.Assert.areEqual(arr.get([2, 0]), 5);
        Bridge.Test.Assert.areEqual(arr.get([2, 1]), 6);
    },
    rankWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Array.getRank(Bridge.Array.create(0, null, 0, 0)), 2);
        Bridge.Test.Assert.areEqual(Bridge.Array.getRank(Bridge.Array.create(0, null, 0, 0, 0)), 3);
    },
    getValueWithIndexOutOfRangeThrowsAnException: function () {
        var arr = Bridge.Array.create(0, null, 2, 3, 4);
        var i = arr.get([1, 2, 3]);
        Bridge.Test.Assert.$throws(function () {
            return i = arr.get([2, 2, 1]);
        });
        Bridge.Test.Assert.$throws(function () {
            return i = arr.get([1, 3, 1]);
        });
        Bridge.Test.Assert.$throws(function () {
            return i = arr.get([1, 2, 4]);
        });
        Bridge.Test.Assert.$throws(function () {
            return i = arr.get([-1, 0, 0]);
        });
        Bridge.Test.Assert.$throws(function () {
            return i = arr.get([0, -1, 0]);
        });
        Bridge.Test.Assert.$throws(function () {
            return i = arr.get([0, 0, -1]);
        });
    },
    setValueWithIndexOutOfRangeThrowsAnException: function () {
        var arr = Bridge.Array.create(0, null, 2, 3, 4);
        arr.set([1, 2, 3], 0);
        Bridge.Test.Assert.$throws(function () {
            return arr.set([2, 2, 1], 0);
        });
        Bridge.Test.Assert.$throws(function () {
            return arr.set([1, 3, 1], 0);
        });
        Bridge.Test.Assert.$throws(function () {
            return arr.set([1, 2, 4], 0);
        });
        Bridge.Test.Assert.$throws(function () {
            return arr.set([-1, 0, 0], 0);
        });
        Bridge.Test.Assert.$throws(function () {
            return arr.set([0, -1, 0], 0);
        });
        Bridge.Test.Assert.$throws(function () {
            return arr.set([0, 0, -1], 0);
        });
    }
});

Bridge.define('Bridge.ClientTest.NullableTests', {
    isOfType: function (T) {
        return Bridge.fn.bind(this, function (value) {
            return Bridge.is(value, T);
        });
    },
    typePropertiesAreCorrect: function () {
        var a = 3, b = null;
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Boolean), "Boolean", "Open FullName");
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.Int), "Bridge.Int", "Instantiated FullName");
        Bridge.Test.Assert.true$1(Bridge.is(a, Bridge.Int), "is int? #1");
        Bridge.Test.Assert.false$1(Bridge.is(b, Bridge.Int), "is int? #2");

        Bridge.Test.Assert.true$1(this.isOfType(Bridge.Int)(3), "IsOfType #1");
        Bridge.Test.Assert.false$1(this.isOfType(Bridge.Int)(3.14), "IsOfType #2");
        Bridge.Test.Assert.true$1(this.isOfType(Bridge.TimeSpan)(new Bridge.TimeSpan(1)), "IsOfType #3");
        Bridge.Test.Assert.false$1(this.isOfType(Bridge.TimeSpan)(3.14), "IsOfType #4");
    },
    convertingToNullableWorks: function () {
        var i = 3;
        var i1 = i;
        var i2 = i;
        Bridge.Test.Assert.areEqual(i1, 3);
        Bridge.Test.Assert.areEqual(i2, 3);
    },
    hasValueWorks: function () {
        var a = 3, b = null;
        Bridge.Test.Assert.$true(Bridge.Nullable.hasValue(a));
        Bridge.Test.Assert.$false(Bridge.Nullable.hasValue(b));
    },
    boxingWorks: function () {
        var a = 3, b = null;
        Bridge.Test.Assert.$true(a !== null);
        Bridge.Test.Assert.$false(b !== null);
    },
    unboxingWorks: function () {
        var a = 3, b = null;
        Bridge.Test.Assert.areEqual(Bridge.Nullable.getValue(a), 3);
        try {
            var x = Bridge.Nullable.getValue(b);
            Bridge.Test.Assert.fail$1("Unboxing null should have thrown an exception");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            if (Bridge.is($e, Bridge.InvalidOperationException)) {
            }
            else {
                throw $e;
            }
        }
    },
    valueWorks: function () {
        var a = 3, b = null;
        Bridge.Test.Assert.areEqual(Bridge.Nullable.getValue(a), 3);
        try {
            var x = Bridge.Nullable.getValue(b);
            Bridge.Test.Assert.fail$1("null.Value should have thrown an exception");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            if (Bridge.is($e, Bridge.InvalidOperationException)) {
            }
            else {
                throw $e;
            }
        }
    },
    unboxingValueOfWrongTypeThrowsAnException: function () {
        Bridge.Test.Assert.$throws(function () {
            var o = "x";
            var x = Bridge.cast(o, Bridge.Int);
        });
    },
    getValueOrDefaultWithArgWorks: function () {
        var a = 3, b = null;
        Bridge.Test.Assert.areEqual(Bridge.Nullable.getValueOrDefault(a, 1), 3);
        Bridge.Test.Assert.areEqual(Bridge.Nullable.getValueOrDefault(b, 1), 1);
    },
    liftedEqualityWorks: function () {
        var a = 1, b = 1, c = 2, d = null, e = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.eq(a, b), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.eq(a, c), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.eq(a, d), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.eq(d, e), true);
    },
    liftedInequalityWorks: function () {
        var a = 1, b = 1, c = 2, d = null, e = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.neq(a, b), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.neq(a, c), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.neq(a, d), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.neq(d, e), false);
    },
    liftedLessThanWorks: function () {
        var a = 1, b = 1, c = 2, d = null, e = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.lt(a, b), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.lt(a, c), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.lt(a, d), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.lt(d, e), false);
    },
    liftedGreaterThanWorks: function () {
        var a = 1, b = 1, c = 2, d = null, e = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.gt(a, b), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.gt(c, a), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.gt(a, d), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.gt(d, e), false);
    },
    liftedLessThanOrEqualWorks: function () {
        var a = 1, b = 1, c = 2, d = null, e = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.lte(a, b), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.lte(c, a), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.lte(a, d), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.lte(d, e), false);
    },
    liftedGreaterThanOrEqualWorks: function () {
        var a = 1, b = 1, c = 2, d = null, e = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.gte(a, b), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.gte(a, c), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.gte(a, d), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.gte(d, e), false);
    },
    liftedSubtractionWorks: function () {
        var a = 2, b = 3, c = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.sub(a, b), -1);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.sub(a, c), null);
    },
    liftedAdditionWorks: function () {
        var a = 2, b = 3, c = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.add(a, b), 5);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.add(a, c), null);
    },
    liftedModWorks: function () {
        var a = 14, b = 3, c = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.mod(a, b), 2);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.mod(a, c), null);
    },
    liftedFloatingPointDivisionWorks: function () {
        var a = 15, b = 3, c = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.div(a, b), 5);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.div(a, c), null);
    },
    liftedIntegerDivisionWorks: function () {
        var a = 16, b = 3, c = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Int.div(a, b), 5);
        Bridge.Test.Assert.areStrictEqual(Bridge.Int.div(a, c), null);
    },
    liftedMultiplicationWorks: function () {
        var a = 2, b = 3, c = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.mul(a, b), 6);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.mul(a, c), null);
    },
    liftedBitwiseAndWorks: function () {
        var a = 6, b = 3, c = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.band(a, b), 2);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.band(a, c), null);
    },
    liftedBitwiseOrWorks: function () {
        var a = 6, b = 3, c = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.bor(a, b), 7);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.bor(a, c), null);
    },
    liftedBitwiseXorWorks: function () {
        var a = 6, b = 3, c = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.xor(a, b), 5);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.xor(a, c), null);
    },
    liftedLeftShiftWorks: function () {
        var a = 6, b = 3, c = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.sl(a, b), 48);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.sl(a, c), null);
    },
    liftedSignedRightShiftWorks: function () {
        var a = 48, b = 3, c = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.sr(a, b), 6);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.sr(a, c), null);
    },
    liftedUnsignedRightShiftWorks: function () {
        var a = -48, b = 3, c = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.sr(a, b), -6);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.sr(a, c), null);
    },
    liftedBooleanAndWorks: function () {
        var a = true, b = true, c = false, d = false, e = null, f = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.and(a, b), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.and(a, c), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.and(a, e), null);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.and(c, a), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.and(c, d), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.and(c, e), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.and(e, a), null);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.and(e, c), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.and(e, f), null);
    },
    liftedBooleanOrWorks: function () {
        var a = true, b = true, c = false, d = false, e = null, f = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.or(a, b), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.or(a, c), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.or(a, e), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.or(c, a), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.or(c, d), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.or(c, e), null);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.or(e, a), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.or(e, c), null);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.or(e, f), null);
    },
    liftedBooleanNotWorks: function () {
        var a = true, b = false, c = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.not(a), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.not(b), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.not(c), null);
    },
    liftedNegationWorks: function () {
        var a = 3, b = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.neg(a), -3);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.neg(b), null);
    },
    liftedUnaryPlusWorks: function () {
        var a = 3, b = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.pos(a), 3);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.pos(b), null);
    },
    liftedOnesComplementWorks: function () {
        var a = 3, b = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.bnot(a), -4);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.bnot(b), null);
    },
    coalesceWorks: function () {
        var v1 = null, v2 = 1, v3 = 0, v4 = 2;
        var s1 = null, s2 = "x";
        Bridge.Test.Assert.areStrictEqual(Bridge.coalesce(v1, v1), null);
        Bridge.Test.Assert.areStrictEqual(Bridge.coalesce(v1, v2), 1);
        Bridge.Test.Assert.areStrictEqual(Bridge.coalesce(v3, v4), 0);
        Bridge.Test.Assert.areStrictEqual(Bridge.coalesce(s1, s1), null);
        Bridge.Test.Assert.areStrictEqual(Bridge.coalesce(s1, s2), "x");
    }
});

Bridge.define('Bridge.ClientTest.NumberFormatInfoTests', {
    typePropertiesAreCorrect: function () {
        var format = Bridge.NumberFormatInfo.invariantInfo;
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.NumberFormatInfo), "Bridge.NumberFormatInfo");
        Bridge.Test.Assert.$true(true);
    },
    getFormatWorks: function () {
        var format = Bridge.NumberFormatInfo.invariantInfo;
        Bridge.Test.Assert.areEqual(format.getFormat(Bridge.Int), null);
        Bridge.Test.Assert.areEqual(format.getFormat(Bridge.NumberFormatInfo), format);
    },
    invariantWorks: function () {
        var format = Bridge.NumberFormatInfo.invariantInfo;
        Bridge.Test.Assert.areEqual(format.nanSymbol, "NaN");
        Bridge.Test.Assert.areEqual(format.negativeSign, "-");
        Bridge.Test.Assert.areEqual(format.positiveSign, "+");
        Bridge.Test.Assert.areEqual(format.negativeInfinitySymbol, "-Infinity");
        Bridge.Test.Assert.areEqual(format.positiveInfinitySymbol, "Infinity");

        Bridge.Test.Assert.areEqual(format.percentSymbol, "%");
        Bridge.Test.Assert.areEqual(format.percentGroupSizes, [3]);
        Bridge.Test.Assert.areEqual(format.percentDecimalDigits, 2);
        Bridge.Test.Assert.areEqual(format.percentDecimalSeparator, ".");
        Bridge.Test.Assert.areEqual(format.percentGroupSeparator, ",");
        Bridge.Test.Assert.areEqual(format.percentPositivePattern, 0);
        Bridge.Test.Assert.areEqual(format.percentNegativePattern, 0);

        Bridge.Test.Assert.areEqual(format.currencySymbol, "¤");
        Bridge.Test.Assert.areEqual(format.currencyGroupSizes, [3]);
        Bridge.Test.Assert.areEqual(format.currencyDecimalDigits, 2);
        Bridge.Test.Assert.areEqual(format.currencyDecimalSeparator, ".");
        Bridge.Test.Assert.areEqual(format.currencyGroupSeparator, ",");
        Bridge.Test.Assert.areEqual(format.currencyNegativePattern, 0);
        Bridge.Test.Assert.areEqual(format.currencyPositivePattern, 0);

        Bridge.Test.Assert.areEqual(format.numberGroupSizes, [3]);
        Bridge.Test.Assert.areEqual(format.numberDecimalDigits, 2);
        Bridge.Test.Assert.areEqual(format.numberDecimalSeparator, ".");
        Bridge.Test.Assert.areEqual(format.numberGroupSeparator, ",");
    }
});

Bridge.define('Bridge.ClientTest.PropertyAccessorTests', {
    accessorsCanBeInvokedInstance: function () {
        var c = new Bridge.ClientTest.PropertyAccessorTests.C1();

        c.setP1(42);
        Bridge.Test.Assert.areEqual$1(c.f1, 41, "F1 value");

        c.f1 = 15;
        Bridge.Test.Assert.areEqual$1(c.getP1(), 16, "P1 value");

        c.f2 = 17;
        Bridge.Test.Assert.areEqual$1(c.getP2(), 18, "P2 value");

        c.setP3(12);
        Bridge.Test.Assert.areEqual$1(c.f3, 11, "F3 value");
    },
    accessorsCanBeInvokedStatic: function () {
        Bridge.ClientTest.PropertyAccessorTests.C1.setPS1(42);
        Bridge.Test.Assert.areEqual$1(Bridge.ClientTest.PropertyAccessorTests.C1.fS1, 41, "FS1 value");

        Bridge.ClientTest.PropertyAccessorTests.C1.fS1 = 15;
        Bridge.Test.Assert.areEqual$1(Bridge.ClientTest.PropertyAccessorTests.C1.getPS1(), 16, "PS1 value");

        Bridge.ClientTest.PropertyAccessorTests.C1.fS2 = 17;
        Bridge.Test.Assert.areEqual$1(Bridge.ClientTest.PropertyAccessorTests.C1.getPS2(), 18, "PS2 value");

        Bridge.ClientTest.PropertyAccessorTests.C1.setPS3(12);
        Bridge.Test.Assert.areEqual$1(Bridge.ClientTest.PropertyAccessorTests.C1.fS3, 11, "FS3 value");
    },
    accessorsCanBeInvokedGeneric: function () {
        var c = new Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int)();

        c.setP1(42);
        Bridge.Test.Assert.areEqual$1(c.f1, 41, "F1 value");

        c.f1 = 15;
        Bridge.Test.Assert.areEqual$1(c.getP1(), 16, "P1 value");

        c.f2 = 17;
        Bridge.Test.Assert.areEqual$1(c.getP2(), 18, "P2 value");

        c.setP3(12);
        Bridge.Test.Assert.areEqual$1(c.f3, 11, "F3 value");
    },
    accessorsCanBeInvokedGenericStatic: function () {
        Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int).setPS1(42);
        Bridge.Test.Assert.areEqual$1(Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int).fS1, 41, "FS1 value");

        Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int).fS1 = 15;
        Bridge.Test.Assert.areEqual$1(Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int).getPS1(), 16, "PS1 value");

        Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int).fS2 = 17;
        Bridge.Test.Assert.areEqual$1(Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int).getPS2(), 18, "PS2 value");

        Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int).setPS3(12);
        Bridge.Test.Assert.areEqual$1(Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int).fS3, 11, "FS3 value");
    },
    baseAccessorsCanBeInvoked: function () {
        var d = new Bridge.ClientTest.PropertyAccessorTests.D3();

        d.setP1(42);
        Bridge.Test.Assert.areEqual$1(d.f1, 41, "F1 value");

        d.f1 = 15;
        Bridge.Test.Assert.areEqual$1(d.getP1(), 16, "P1 value");

        d.f2 = 17;
        Bridge.Test.Assert.areEqual$1(d.getP2(), 18, "P2 value");

        d.setP3(12);
        Bridge.Test.Assert.areEqual$1(d.f3, 11, "F3 value");
    },
    baseAccessorsCanBeInvokedGeneric: function () {
        var d = new Bridge.ClientTest.PropertyAccessorTests.D4$1(Bridge.Int)();

        d.setP1(42);
        Bridge.Test.Assert.areEqual$1(d.f1, 41, "F1 value");

        d.f1 = 15;
        Bridge.Test.Assert.areEqual$1(d.getP1(), 16, "P1 value");

        d.f2 = 17;
        Bridge.Test.Assert.areEqual$1(d.getP2(), 18, "P2 value");

        d.setP3(12);
        Bridge.Test.Assert.areEqual$1(d.f3, 11, "F3 value");
    }
});

Bridge.define('Bridge.ClientTest.PropertyAccessorTests.B3', {
    f1: 0,
    f2: 0,
    f3: 0,
    getP1: function () {
        return this.f1;
    },
    setP1: function (value) {
        this.f1 = value;
    },
    getP2: function () {
        return this.f2;
    },
    setP3: function (value) {
        this.f3 = value;
    }
});

Bridge.define('Bridge.ClientTest.PropertyAccessorTests.D3', {
    inherits: [Bridge.ClientTest.PropertyAccessorTests.B3],
    getP1: function () {
        return Bridge.ClientTest.PropertyAccessorTests.B3.prototype.getP1.call(this) + 1;
    },
    setP1: function (value) {
        Bridge.ClientTest.PropertyAccessorTests.B3.prototype.setP1.call(this, value - 1);
    },
    getP2: function () {
        return Bridge.ClientTest.PropertyAccessorTests.B3.prototype.getP2.call(this) + 1;
    },
    setP3: function (value) {
        Bridge.ClientTest.PropertyAccessorTests.B3.prototype.setP3.call(this, value - 1);
    }
});

Bridge.define('Bridge.ClientTest.PropertyAccessorTests.B4$1', function (T) { return {
    f1: null,
    f2: null,
    f3: null,
    getP1: function () {
        return this.f1;
    },
    setP1: function (value) {
        this.f1 = value;
    },
    getP2: function () {
        return this.f2;
    },
    setP3: function (value) {
        this.f3 = value;
    }
}; });

Bridge.define('Bridge.ClientTest.PropertyAccessorTests.D4$1', function (T) { return {
    inherits: [Bridge.ClientTest.PropertyAccessorTests.B4$1(T)],
    getP1: function () {
        return Bridge.ClientTest.PropertyAccessorTests.B4$1(T).prototype.getP1.call(this) + 1;
    },
    setP1: function (value) {
        Bridge.ClientTest.PropertyAccessorTests.B4$1(T).prototype.setP1.call(this, value - 1);
    },
    getP2: function () {
        return Bridge.ClientTest.PropertyAccessorTests.B4$1(T).prototype.getP2.call(this) + 1;
    },
    setP3: function (value) {
        Bridge.ClientTest.PropertyAccessorTests.B4$1(T).prototype.setP3.call(this, value - 1);
    }
}; });

Bridge.define('Bridge.ClientTest.PropertyAccessorTests.C1', {
    statics: {
        fS1: 0,
        fS2: 0,
        fS3: 0,
        getPS1: function () {
            return Bridge.ClientTest.PropertyAccessorTests.C1.fS1 + 1;
        },
        setPS1: function (value) {
            Bridge.ClientTest.PropertyAccessorTests.C1.fS1 = value - 1;
        },
        getPS2: function () {
            return Bridge.ClientTest.PropertyAccessorTests.C1.fS2 + 1;
        },
        setPS3: function (value) {
            Bridge.ClientTest.PropertyAccessorTests.C1.fS3 = value - 1;
        }
    },
    f1: 0,
    f2: 0,
    f3: 0,
    getP1: function () {
        return this.f1 + 1;
    },
    setP1: function (value) {
        this.f1 = value - 1;
    },
    getP2: function () {
        return this.f2 + 1;
    },
    setP3: function (value) {
        this.f3 = value - 1;
    }
});

Bridge.define('Bridge.ClientTest.PropertyAccessorTests.C2$1', function (T) { return {
    statics: {
        fS1: null,
        fS2: null,
        fS3: null,
        getPS1: function () {
            return Bridge.ClientTest.PropertyAccessorTests.C2$1(T).fS1 + 1;
        },
        setPS1: function (value) {
            Bridge.ClientTest.PropertyAccessorTests.C2$1(T).fS1 = value - 1;
        },
        getPS2: function () {
            return Bridge.ClientTest.PropertyAccessorTests.C2$1(T).fS2 + 1;
        },
        setPS3: function (value) {
            Bridge.ClientTest.PropertyAccessorTests.C2$1(T).fS3 = value - 1;
        }
    },
    f1: null,
    f2: null,
    f3: null,
    getP1: function () {
        return this.f1 + 1;
    },
    setP1: function (value) {
        this.f1 = value - 1;
    },
    getP2: function () {
        return this.f2 + 1;
    },
    setP3: function (value) {
        this.f3 = value - 1;
    }
}; });

Bridge.define('Bridge.ClientTest.SimpleTypes.BooleanTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.$true(Bridge.is(true, Boolean));
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Boolean), "Boolean");
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIsFalse: function () {
        Bridge.Test.Assert.areEqual(this.getDefaultValue(Boolean)(), false);
    },
    creatingInstanceReturnsFalse: function () {
        Bridge.Test.Assert.areEqual(new Boolean(), false);
    },
    defaultConstructorReturnsFalse: function () {
        Bridge.Test.Assert.areEqual(new Boolean(), false);
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode(true), Bridge.getHashCode(true));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode(false), Bridge.getHashCode(false));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode(false), Bridge.getHashCode(true));
    },
    objectEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals(true, true));
        Bridge.Test.Assert.$false(Bridge.equals(true, false));
        Bridge.Test.Assert.$false(Bridge.equals(false, true));
        Bridge.Test.Assert.$true(Bridge.equals(false, false));
    },
    boolEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals(true, true));
        Bridge.Test.Assert.$false(Bridge.equals(true, false));
        Bridge.Test.Assert.$false(Bridge.equals(false, true));
        Bridge.Test.Assert.$true(Bridge.equals(false, false));
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.ByteTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(0, Bridge.Int), Bridge.Int));
        Bridge.Test.Assert.$false(Bridge.is(0.5, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(-1, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(256, Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");
        var b = Bridge.cast(0, Bridge.Int);
        Bridge.Test.Assert.$true(Bridge.is(b, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(b, Bridge.IComparable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(b, Bridge.IEquatable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(b, Bridge.IFormattable));
    },
    castsWork: function () {
        var i1 = -1, i2 = 0, i3 = 234, i4 = 255, i5 = 256;
        var ni1 = -1, ni2 = 0, ni3 = 234, ni4 = 255, ni5 = 256, ni6 = null;

        // TODO unchecked
        {
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i1, Bridge.Int), -1, "-1 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i2, Bridge.Int), 0, "0 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 234, "234 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 255, "255 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i5, Bridge.Int), 256, "256 unchecked");

            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni1, Bridge.Int, true), -1, "nullable -1 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni2, Bridge.Int, true), 0, "nullable 0 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni3, Bridge.Int, true), 234, "nullable 234 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni4, Bridge.Int, true), 255, "nullable 255 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni5, Bridge.Int, true), 256, "nullable 256 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni6, Bridge.Int, true), null, "null unchecked");
        }

        //checked
        {
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i2, Bridge.Int), 0, "0 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 234, "234 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 255, "256 checked");

            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni2, Bridge.Int, true), 0, "nullable 0 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni3, Bridge.Int, true), 234, "nullable 234 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni4, Bridge.Int, true), 255, "nullable 255 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni6, Bridge.Int, true), null, "null checked");
        }
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.Test.Assert.areStrictEqual(this.getDefaultValue(Bridge.Int)(), 0);
    },
    defaultConstructorReturnsZero: function () {
        Bridge.Test.Assert.areStrictEqual(Number(), 0);
    },
    creatingInstanceReturnsZero: function () {
        Bridge.Test.Assert.areEqual(new Bridge.Int(), 0);
    },
    constantsWork: function () {
        Bridge.Test.Assert.areEqual(0, 0);
        Bridge.Test.Assert.areEqual(255, 255);
    },
    formatWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(18, Bridge.Int)), "x"), "12");
    },
    iFormattableToStringWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(18, Bridge.Int)), "x"), "12");
    },
    tryParseWorks: function () {
        var numberResult = { };
        var result = Bridge.Int.tryParseInt("234", numberResult, 0, 255);
        Bridge.Test.Assert.$true(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 234);

        result = Bridge.Int.tryParseInt("", numberResult, 0, 255);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt(null, numberResult, 0, 255);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("notanumber", numberResult, 0, 255);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("54768", numberResult, 0, 255);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 54768);

        result = Bridge.Int.tryParseInt("-1", numberResult, 0, 255);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, -1);

        result = Bridge.Int.tryParseInt("2.5", numberResult, 0, 255);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);
    },
    parseWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.parseInt("234", 0, 255), 234);
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("", 0, 255);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt(null, 0, 255);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("notanumber", 0, 255);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("54768", 0, 255);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("-1", 0, 255);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("2.5", 0, 255);
        });
    },
    toStringWithoutRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(), "123");
    },
    toStringWithRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(10), "123");
        Bridge.Test.Assert.areEqual((Bridge.cast(18, Bridge.Int)).toString(16), "12");
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(0, Bridge.Int))));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(1, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
    },
    equalsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(1, Bridge.Int)));

        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)) < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.CharTests', {
    typePropertiesAreInt32: function () {
        Bridge.Test.Assert.$true(Bridge.is(0, Bridge.Int));
        Bridge.Test.Assert.$false(Bridge.is(0.5, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(-1, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(65536, Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");
    },
    castsWork: function () {
        var i1 = -1, i2 = 0, i3 = 234, i4 = 65535, i5 = 65536;
        var ni1 = -1, ni2 = 0, ni3 = 234, ni4 = 65535, ni5 = 65536, ni6 = null;

        //unchecked
        {
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.cast(i1, Bridge.Int), Bridge.Int), -1, "-1 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.cast(i2, Bridge.Int), Bridge.Int), 0, "0 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.cast(i3, Bridge.Int), Bridge.Int), 234, "234 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.cast(i4, Bridge.Int), Bridge.Int), 65535, "65535 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.cast(i5, Bridge.Int), Bridge.Int), 65536, "65536 unchecked");

            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.cast(ni1, Bridge.Int, true), Bridge.Int, true), -1, "nullable -1 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.cast(ni2, Bridge.Int, true), Bridge.Int, true), 0, "nullable 0 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.cast(ni3, Bridge.Int, true), Bridge.Int, true), 234, "nullable 234 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.cast(ni4, Bridge.Int, true), Bridge.Int, true), 65535, "nullable 65535 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.cast(ni5, Bridge.Int, true), Bridge.Int, true), 65536, "nullable 65536 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.cast(ni6, Bridge.Int, true), Bridge.Int, true), null, "null unchecked");
        }

        //checked
        {
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.cast(i2, Bridge.Int), Bridge.Int, true), 0, "0 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.cast(i3, Bridge.Int), Bridge.Int, true), 234, "234 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.cast(i4, Bridge.Int), Bridge.Int, true), 65535, "65535 checked");

            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.cast(ni2, Bridge.Int, true), Bridge.Int, true), 0, "nullable 0 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.cast(ni3, Bridge.Int, true), Bridge.Int, true), 234, "nullable 234 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.cast(ni4, Bridge.Int, true), Bridge.Int, true), 65535, "nullable 65535 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.cast(ni6, Bridge.Int, true), Bridge.Int, true), null, "null checked");
        }
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.cast(this.getDefaultValue(Bridge.Int)(), Bridge.Int), 0);
    },
    defaultConstructorReturnsZero: function () {
        Bridge.Test.Assert.areStrictEqual(Bridge.cast(Number(), Bridge.Int), 0);
    },
    creatingInstanceReturnsZero: function () {
        Bridge.Test.Assert.areStrictEqual(new Bridge.Int(), 0);
    },
    constantsWork: function () {
        Bridge.Test.Assert.areEqual(Bridge.cast(0, Bridge.Int), 0);
        Bridge.Test.Assert.areEqual(Bridge.cast(65535, Bridge.Int), 65535);
    },
    charComparisonWorks: function () {
        var a = 97, a2 = 97, b = 98;
        Bridge.Test.Assert.$true(a === a2);
        Bridge.Test.Assert.$false(a === b);
        Bridge.Test.Assert.$false(a !== a2);
        Bridge.Test.Assert.$true(a !== b);
        Bridge.Test.Assert.$false(a < a2);
        Bridge.Test.Assert.$true(a < b);
    },
    parseWorks: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.Char.charCodeAt("a", 0), 97, "Parse 1");
        Bridge.Test.Assert.throws$5(function () {
            return Bridge.Char.charCodeAt(null, 0);
        }, "Parse 2");
        Bridge.Test.Assert.throws$5(function () {
            return Bridge.Char.charCodeAt("", 0);
        }, "Parse 3");
        Bridge.Test.Assert.throws$5(function () {
            return Bridge.Char.charCodeAt("ab", 0);
        }, "Parse 4");
    },
    formatWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format(35, "x4"), "0023");
    },
    iFormattableToStringWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format(35, "x4"), "0023");
    },
    toStringWorks: function () {
        Bridge.Test.Assert.areEqual(String.fromCharCode(65), "A");
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode(48), Bridge.getHashCode(48));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode(49), Bridge.getHashCode(49));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode(48), Bridge.getHashCode(49));
    },
    equalsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals(48, Bridge.cast(48, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equals(49, Bridge.cast(48, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equals(48, Bridge.cast(49, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equals(49, Bridge.cast(49, Bridge.Int)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equalsT(48, 48));
        Bridge.Test.Assert.$false(Bridge.equalsT(49, 48));
        Bridge.Test.Assert.$false(Bridge.equalsT(48, 49));
        Bridge.Test.Assert.$true(Bridge.equalsT(49, 49));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare(49, 48) > 0);
        Bridge.Test.Assert.$true(Bridge.compare(48, 49) < 0);
        Bridge.Test.Assert.$true(Bridge.compare(48, 48) === 0);
        Bridge.Test.Assert.$true(Bridge.compare(49, 49) === 0);
    },
    isLowerWorks: function () {
        Bridge.Test.Assert.true$1(Bridge.isLower(97), "#1");
        Bridge.Test.Assert.false$1(Bridge.isLower(65), "#2");
        Bridge.Test.Assert.false$1(Bridge.isLower(51), "#3");
    },
    isUpperWorks: function () {
        Bridge.Test.Assert.true$1(Bridge.isUpper(65), "#1");
        Bridge.Test.Assert.false$1(Bridge.isUpper(97), "#2");
        Bridge.Test.Assert.false$1(Bridge.isUpper(51), "#3");
    },
    toLowerWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.cast(String.fromCharCode(65).toLowerCase().charCodeAt(0), Bridge.Int), Bridge.cast(97, Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.cast(String.fromCharCode(97).toLowerCase().charCodeAt(0), Bridge.Int), Bridge.cast(97, Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.cast(String.fromCharCode(51).toLowerCase().charCodeAt(0), Bridge.Int), Bridge.cast(51, Bridge.Int));
    },
    toUpperWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.cast(String.fromCharCode(65).toUpperCase().charCodeAt(0), Bridge.Int), Bridge.cast(65, Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.cast(String.fromCharCode(97).toUpperCase().charCodeAt(0), Bridge.Int), Bridge.cast(65, Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.cast(String.fromCharCode(51).toUpperCase().charCodeAt(0), Bridge.Int), Bridge.cast(51, Bridge.Int));
    },
    isDigitWorks: function () {
        Bridge.Test.Assert.true$1(Bridge.Char.isDigit(48), "#1");
        Bridge.Test.Assert.false$1(Bridge.Char.isDigit(46), "#2");
        Bridge.Test.Assert.false$1(Bridge.Char.isDigit(65), "#3");
    },
    isWhiteSpaceWorks: function () {
        Bridge.Test.Assert.true$1(Bridge.Char.isWhiteSpace(String.fromCharCode(32)), "#1");
        Bridge.Test.Assert.true$1(Bridge.Char.isWhiteSpace(String.fromCharCode(10)), "#2");
        Bridge.Test.Assert.false$1(Bridge.Char.isWhiteSpace(String.fromCharCode(65)), "#3");
    },
    isDigitWithStringAndIndexWorks: function () {
        Bridge.Test.Assert.true$1(Bridge.Char.isDigit("abc0def".charCodeAt(3)), "#1");
        Bridge.Test.Assert.true$1(Bridge.Char.isDigit("1".charCodeAt(0)), "#2");
        Bridge.Test.Assert.true$1(Bridge.Char.isDigit("abcdef5".charCodeAt(6)), "#3");
        Bridge.Test.Assert.true$1(Bridge.Char.isDigit("9abcdef".charCodeAt(0)), "#4");
        Bridge.Test.Assert.false$1(Bridge.Char.isDigit(".012345".charCodeAt(0)), "#5");
        Bridge.Test.Assert.false$1(Bridge.Char.isDigit("012345.".charCodeAt(6)), "#6");
        Bridge.Test.Assert.false$1(Bridge.Char.isDigit("012.345".charCodeAt(3)), "#7");
    },
    isWhiteSpaceWithStringAndIndexWorks: function () {
        Bridge.Test.Assert.true$1(Bridge.Char.isWhiteSpace("abc def".charAt(3)), "#1");
        Bridge.Test.Assert.true$1(Bridge.Char.isWhiteSpace("\t".charAt(0)), "#2");
        Bridge.Test.Assert.true$1(Bridge.Char.isWhiteSpace("abcdef\r".charAt(6)), "#3");
        Bridge.Test.Assert.true$1(Bridge.Char.isWhiteSpace("\nabcdef".charAt(0)), "#4");
        Bridge.Test.Assert.false$1(Bridge.Char.isWhiteSpace(".\r\n     ".charAt(0)), "#5");
        Bridge.Test.Assert.false$1(Bridge.Char.isWhiteSpace("\r\n    .".charAt(6)), "#6");
        Bridge.Test.Assert.false$1(Bridge.Char.isWhiteSpace("\r  .\n  ".charAt(3)), "#7");
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.DecimalTests', {
    assertIsDecimalAndEqualTo: function (v, d, message) {
        if (message === void 0) { message = null; }
        Bridge.Test.Assert.areStrictEqual$1(Bridge.is(v, Bridge.Decimal), true, message);
        Bridge.Test.Assert.areStrictEqual$1(v.toString(), d.toString(), message);
    },
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.Decimal.lift(0.5), Bridge.Decimal));
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.Decimal), "Bridge.Decimal");
        var d = Bridge.Decimal.lift(0);
        Bridge.Test.Assert.$true(Bridge.is(d, Bridge.Decimal));
        Bridge.Test.Assert.$true(Bridge.is(d, Bridge.IFormattable));
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        this.assertIsDecimalAndEqualTo(this.getDefaultValue(Bridge.Decimal)(), 0);
    },
    creatingInstanceReturnsZero: function () {
        this.assertIsDecimalAndEqualTo(new Bridge.Decimal(), 0);
    },
    constantsWork: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.One, 1);
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.Zero, 0);
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.MinusOne, -1);
    },
    defaultConstructorReturnsZero: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(), 0);
    },
    convertingConstructorsWork: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(0.5), 0.5);
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(Bridge.cast(1.5, Number)), 1.5);
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(2), 2);
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(Bridge.cast(3, Bridge.Int)), 3);
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(Bridge.cast(4, Bridge.Int)), 4);
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(Bridge.cast(5, Bridge.Int)), 5);
    },
    formatWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format(Bridge.Decimal(291.0).toFloat(), "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format(Bridge.Decimal(291.0).toFloat(), "x"), "123");
    },
    toStringWithoutRadixWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Decimal(123.0).toString(), "123");
    },
    addWithStringWorks: function () {
        var d1 = Bridge.Decimal(1.0);
        var s1 = d1 + "#";

        Bridge.Test.Assert.areEqual$1(s1, "1#", "decimal?");

        var d2 = Bridge.Decimal(2.0);
        var s2 = d2 + "!";

        Bridge.Test.Assert.areEqual$1(s2, "2!", "decimal");
    },
    conversionsToDecimalWork: function () {
        var x = 0;
        Bridge.Test.Assert.areEqual(Bridge.Decimal.lift(Bridge.cast((x + 1), Bridge.Int)), Bridge.Decimal(1.0));
        Bridge.Test.Assert.areEqual(Bridge.Decimal.lift(Bridge.cast((x + 2), Bridge.Int)), Bridge.Decimal(2.0));
        Bridge.Test.Assert.areEqual(Bridge.Decimal.lift(Bridge.cast((x + 3), Bridge.Int)), Bridge.Decimal(3.0));
        Bridge.Test.Assert.areEqual(Bridge.Decimal.lift(Bridge.cast((x + 4), Bridge.Int)), Bridge.Decimal(4.0));
        Bridge.Test.Assert.areEqual(Bridge.Decimal.lift(Bridge.cast((x + 5), Bridge.Int)), Bridge.Decimal(5.0));
        Bridge.Test.Assert.areEqual(Bridge.Decimal.lift((x + 6)), Bridge.Decimal(6.0));
        Bridge.Test.Assert.areEqual(Bridge.Decimal.lift(Bridge.cast((x + 7), Bridge.Int)), Bridge.Decimal(7.0));
        Bridge.Test.Assert.areEqual(Bridge.Decimal.lift(Bridge.cast((x + 8), Bridge.Int)), Bridge.Decimal(8.0));
        Bridge.Test.Assert.areEqual(Bridge.Decimal.lift(Bridge.cast((x + 9), Bridge.Int)), Bridge.Decimal(9.0));
        Bridge.Test.Assert.areEqual(Bridge.Decimal.lift(Bridge.cast((x + 10.5), Number)), Bridge.Decimal(10.5));
        Bridge.Test.Assert.areEqual(Bridge.Decimal.lift((x + 11.5)), Bridge.Decimal(11.5));
    },
    conversionsFromDecimalWork: function () {
        var x = 0;
        Bridge.Test.Assert.areEqual(Bridge.Decimal.toInt(Bridge.Decimal.lift((x + 1))), 1);
        Bridge.Test.Assert.areEqual(Bridge.Decimal.toInt(Bridge.Decimal.lift((x + 2))), 2);
        Bridge.Test.Assert.areEqual(Bridge.Decimal.toInt(Bridge.Decimal.lift((x + 3))), 3);
        Bridge.Test.Assert.areEqual(Bridge.Decimal.toInt(Bridge.Decimal.lift((x + 4))), 4);
        Bridge.Test.Assert.areEqual(Bridge.cast(Bridge.Decimal.toInt(Bridge.Decimal.lift((x + 5))), Bridge.Int), 5);
        Bridge.Test.Assert.areEqual(Bridge.Decimal.toInt(Bridge.Decimal.lift((x + 6))), 6);
        Bridge.Test.Assert.areEqual(Bridge.Decimal.toInt(Bridge.Decimal.lift((x + 7))), 7);
        Bridge.Test.Assert.areEqual(Bridge.Decimal.toInt(Bridge.Decimal.lift((x + 8))), 8);
        Bridge.Test.Assert.areEqual(Bridge.Decimal.toInt(Bridge.Decimal.lift((x + 9))), 9);
        Bridge.Test.Assert.areEqual(Bridge.Decimal.toFloat(Bridge.Decimal.lift((x + 10.5))), 10.5);
        Bridge.Test.Assert.areEqual(Bridge.Decimal.toFloat(Bridge.Decimal.lift((x + 11.5))), 11.5);
    },
    operatorsWork: function () {
        var $t;
        var x = Bridge.Decimal(3);
        this.assertIsDecimalAndEqualTo(x.clone(), 3);
        this.assertIsDecimalAndEqualTo(x.neg(), -3);
        this.assertIsDecimalAndEqualTo(x.add(Bridge.Decimal(4.0)), 7);
        this.assertIsDecimalAndEqualTo(x.sub(Bridge.Decimal(2.0)), 1);
        this.assertIsDecimalAndEqualTo(($t = x, x = x.add(1), $t), 3);
        this.assertIsDecimalAndEqualTo((x = x.add(1)), 5);
        this.assertIsDecimalAndEqualTo(($t = x, x = x.sub(1), $t), 5);
        this.assertIsDecimalAndEqualTo((x = x.sub(1)), 3);
        this.assertIsDecimalAndEqualTo(x.mul(Bridge.Decimal(3.0)), 9);
        this.assertIsDecimalAndEqualTo(x.div(Bridge.Decimal(2.0)), 1.5);
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(14.0).mod(x), 2);
        Bridge.Test.Assert.$true(x.equalsT(Bridge.Decimal(3.0)));
        Bridge.Test.Assert.$false(x.equalsT(Bridge.Decimal(4.0)));
        Bridge.Test.Assert.$false(x.ne(Bridge.Decimal(3.0)));
        Bridge.Test.Assert.$true(x.ne(Bridge.Decimal(4.0)));
        Bridge.Test.Assert.$true(x.gt(Bridge.Decimal(1.0)));
        Bridge.Test.Assert.$false(x.gt(Bridge.Decimal(3.0)));
        Bridge.Test.Assert.$true(x.gte(Bridge.Decimal(3.0)));
        Bridge.Test.Assert.$false(x.gte(Bridge.Decimal(4.0)));
        Bridge.Test.Assert.$true(x.lt(Bridge.Decimal(4.0)));
        Bridge.Test.Assert.$false(x.lt(Bridge.Decimal(3.0)));
        Bridge.Test.Assert.$true(x.lte(Bridge.Decimal(3.0)));
        Bridge.Test.Assert.$false(x.lte(Bridge.Decimal(2.0)));
    }    ,
    addWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Decimal(3.0).add(Bridge.Decimal(4.0)), Bridge.Decimal(7.0));
    },
    ceilingWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(3.4).ceil(), 4);
    },
    divideWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(3.0).div(Bridge.Decimal(4.0)), 0.75);
    },
    floorWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(3.2).floor(), 3);
    },
    remainderWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(14.0).mod(Bridge.Decimal(3.0)), 2);
    },
    multiplyWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(3.0).mul(Bridge.Decimal(2.0)), 6);
    },
    negateWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(0).sub(Bridge.Decimal(3.0)), -3);
    },
    roundWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 6), 3);
    },
    roundWithModeWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 0), 4, "Up 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 0), 4, "Up 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 0), 4, "Up 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 0), -4, "Up -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 0), -4, "Up -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 0), -4, "Up -3.8m");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 1), 3, "Down 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 1), 3, "Down 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 1), 3, "Down 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 1), -3, "Down -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 1), -3, "Down -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 1), -3, "Down -3.8m");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 2), 4, "InfinityPos 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 2), 4, "InfinityPos 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 2), 4, "InfinityPos 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 2), -3, "InfinityPos -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 2), -3, "InfinityPos -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 2), -3, "InfinityPos -3.8m");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 3), 3, "InfinityNeg 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 3), 3, "InfinityNeg 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 3), 3, "InfinityNeg 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 3), -4, "InfinityNeg -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 3), -4, "InfinityNeg -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 3), -4, "InfinityNeg -3.8m");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 5), 4, "TowardsZero 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 5), 3, "TowardsZero 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 5), 3, "TowardsZero 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 5), -3, "TowardsZero -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 5), -3, "TowardsZero -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 5), -4, "TowardsZero -3.8m");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 4), 4, "AwayFromZero 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 4), 4, "AwayFromZero 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 4), 3, "AwayFromZero 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 4), -3, "AwayFromZero -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 4), -4, "AwayFromZero -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 4), -4, "AwayFromZero -3.8m");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 7), 4, "Ceil 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 7), 4, "Ceil 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 7), 3, "Ceil 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 7), -3, "Ceil -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 7), -3, "Ceil -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 7), -4, "Ceil -3.8m");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 8), 4, "Floor 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 8), 3, "Floor 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 8), 3, "Floor 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 8), -3, "Floor -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 8), -4, "Floor -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 8), -4, "Floor -3.8m");

        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.8), 6), 4, "ToEven 3.8m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.5), 6), 4, "ToEven 3.5m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(3.2), 6), 3, "ToEven 3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.2), 6), -3, "ToEven -3.2m");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.5), 6), -4, "ToEven -3.5");
        this.assertIsDecimalAndEqualTo(Bridge.Decimal.round(Bridge.Decimal(-3.8), 6), -4, "ToEven -3.8m");
    },
    subtractWorks: function () {
        this.assertIsDecimalAndEqualTo(Bridge.Decimal(7.0).sub(Bridge.Decimal(3.0)), 4);
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.Decimal.lift(0))), Bridge.getHashCode((Bridge.Decimal.lift(0))));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.Decimal.lift(1))), Bridge.getHashCode((Bridge.Decimal.lift(1))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.Decimal.lift(0))), Bridge.getHashCode((Bridge.Decimal.lift(1))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.Decimal.lift(0))), Bridge.getHashCode((Bridge.Decimal.lift(0.5))));
    },
    objectEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.Decimal.lift(0)), Bridge.Decimal.lift(0)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.Decimal.lift(1)), Bridge.Decimal.lift(0)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.Decimal.lift(0)), Bridge.Decimal.lift(0.5)));
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.Decimal.lift(1)), Bridge.Decimal.lift(1)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.Decimal.lift(0)), Bridge.Decimal.MaxValue));
    },
    decimalEqualsWorks: function () {
        Bridge.Test.Assert.$true((Bridge.Decimal.lift(0)).equals(Bridge.Decimal.lift(0)));
        Bridge.Test.Assert.$false((Bridge.Decimal.lift(1)).equals(Bridge.Decimal.lift(0)));
        Bridge.Test.Assert.$false((Bridge.Decimal.lift(0)).equals(Bridge.Decimal.lift(0.5)));
        Bridge.Test.Assert.$true((Bridge.Decimal.lift(1)).equals(Bridge.Decimal.lift(1)));
        Bridge.Test.Assert.$false((Bridge.Decimal.lift(0)).equals(Bridge.Decimal.MaxValue));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true((Bridge.Decimal.lift(0)).compareTo(Bridge.Decimal.lift(0)) === 0);
        Bridge.Test.Assert.$true((Bridge.Decimal.lift(1)).compareTo(Bridge.Decimal.lift(0)) > 0);
        Bridge.Test.Assert.$true((Bridge.Decimal.lift(0)).compareTo(Bridge.Decimal.lift(0.5)) < 0);
        Bridge.Test.Assert.$true((Bridge.Decimal.lift(1)).compareTo(Bridge.Decimal.lift(1)) === 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.Decimal.lift(0)), Bridge.IComparable$1(Bridge.Decimal))), Bridge.Decimal.lift(0)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.Decimal.lift(1)), Bridge.IComparable$1(Bridge.Decimal))), Bridge.Decimal.lift(0)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.Decimal.lift(0)), Bridge.IComparable$1(Bridge.Decimal))), Bridge.Decimal.lift(0.5)) < 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.Decimal.lift(1)), Bridge.IComparable$1(Bridge.Decimal))), Bridge.Decimal.lift(1)) === 0);
    },
    fullCoalesceWorks: function () {
        var a = Bridge.Decimal(1.0);
        var b = a.equalsT(Bridge.Decimal(1.0)) ? Bridge.Decimal(2.0) : Bridge.Decimal(3.0);

        this.assertIsDecimalAndEqualTo(b, 2);
    },
    shortCoalesceWorks: function () {
        var c = Bridge.Decimal(1.0);
        var d = Bridge.coalesce(c, Bridge.Decimal(2.0));

        this.assertIsDecimalAndEqualTo(d, 1);

        var e = Bridge.Decimal(3);
        var f = Bridge.coalesce(e, Bridge.Decimal(0));

        this.assertIsDecimalAndEqualTo(f, 3);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.DoubleTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.$true(Bridge.is(0.5, Number));
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Number), "Number");
        var d = Bridge.cast(0, Number);
        Bridge.Test.Assert.$true(Bridge.is(d, Number));
        Bridge.Test.Assert.$true(Bridge.is(d, Bridge.IFormattable));
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.Test.Assert.areStrictEqual(this.getDefaultValue(Number)(), 0);
    },
    creatingInstanceReturnsZero: function () {
        Bridge.Test.Assert.areStrictEqual(new Number(), 0);
    },
    constantsWork: function () {
        var zero = 0;
        Bridge.Test.Assert.true$1(Number.MAX_VALUE > Bridge.cast(1.7E+308, Number), "MaxValue should be correct");
        Bridge.Test.Assert.areEqual$1(4.94065645841247E-324, 4.94065645841247E-324, "MinValue should be correct");
        Bridge.Test.Assert.true$1(isNaN(Number.NaN), "NaN should be correct");
        Bridge.Test.Assert.areStrictEqual$1(Number.POSITIVE_INFINITY, 1 / zero, "PositiveInfinity should be correct");
        Bridge.Test.Assert.areStrictEqual$1(Number.NEGATIVE_INFINITY, -1 / zero, "NegativeInfinity should be correct");
    },
    defaultConstructorReturnsZero: function () {
        Bridge.Test.Assert.areStrictEqual(Number(), 0);
    },
    formatWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((291.0), "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format(291.0, "x"), "123");
    },
    toStringWorks: function () {
        Bridge.Test.Assert.areEqual((123.0).toString(), "123");
    },
    toExponentialWorks: function () {
        Bridge.Test.Assert.areEqual((123.0).toExponential(), "1.23e+2");
    },
    toExponentialWithFractionalDigitsWorks: function () {
        Bridge.Test.Assert.areEqual((123.0).toExponential(1), "1.2e+2");
    },
    toFixed: function () {
        Bridge.Test.Assert.areEqual((123.0).toFixed(), "123");
    },
    toFixedWithFractionalDigitsWorks: function () {
        Bridge.Test.Assert.areEqual((123.0).toFixed(1), "123.0");
    },
    toPrecisionWorks: function () {
        Bridge.Test.Assert.areEqual((12345.0).toPrecision(), "12345");
    },
    toPrecisionWithPrecisionWorks: function () {
        Bridge.Test.Assert.areEqual((12345.0).toPrecision(2), "1.2e+4");
    },
    isPositiveInfinityWorks: function () {
        var inf = "Infinity";
        Bridge.Test.Assert.false$1((-inf === Number.POSITIVE_INFINITY), "-inf");
        Bridge.Test.Assert.false$1((0.0 === Number.POSITIVE_INFINITY), "0.0");
        Bridge.Test.Assert.false$1((Number.NaN === Number.POSITIVE_INFINITY), "Double.NaN");
    },
    isNegativeInfinityWorks: function () {
        var inf = "Infinity";
        Bridge.Test.Assert.$false((inf === Number.NEGATIVE_INFINITY));
        Bridge.Test.Assert.$true((-inf === Number.NEGATIVE_INFINITY));
        Bridge.Test.Assert.$false((0.0 === Number.NEGATIVE_INFINITY));
        Bridge.Test.Assert.$false((Number.NaN === Number.NEGATIVE_INFINITY));
    },
    isInfinityWorks: function () {
        var inf = "Infinity";
        Bridge.Test.Assert.$true((Math.abs(inf) === Number.POSITIVE_INFINITY));
        Bridge.Test.Assert.$true((Math.abs(-inf) === Number.POSITIVE_INFINITY));
        Bridge.Test.Assert.$false((Math.abs(0.0) === Number.POSITIVE_INFINITY));
        Bridge.Test.Assert.$false((Math.abs(Number.NaN) === Number.POSITIVE_INFINITY));
    },
    isFiniteWorks: function () {
        var zero = 0, one = 1;
        Bridge.Test.Assert.$true(isFinite(one));
        Bridge.Test.Assert.$false(isFinite(one / zero));
        Bridge.Test.Assert.$false(isFinite(zero / zero));
    },
    isNaNWorks: function () {
        var zero = 0, one = 1;
        Bridge.Test.Assert.$false(isNaN(one));
        Bridge.Test.Assert.$false(isNaN(one / zero));
        Bridge.Test.Assert.$true(isNaN(zero / zero));
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(0, Number))), Bridge.getHashCode((Bridge.cast(0, Number))));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(1, Number))), Bridge.getHashCode((Bridge.cast(1, Number))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.cast(0, Number))), Bridge.getHashCode((Bridge.cast(1, Number))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.cast(0, Number))), Bridge.getHashCode((0.5)));
    },
    objectEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(0, Number)), Bridge.cast(0, Number)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(1, Number)), Bridge.cast(0, Number)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(0, Number)), 0.5));
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(1, Number)), Bridge.cast(1, Number)));
    },
    doubleEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(0, Number)), Bridge.cast(0, Number)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(1, Number)), Bridge.cast(0, Number)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(0, Number)), 0.5));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(1, Number)), Bridge.cast(1, Number)));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Number)), Bridge.cast(0, Number)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(1, Number)), Bridge.cast(0, Number)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Number)), 0.5) < 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(1, Number)), Bridge.cast(1, Number)) === 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Number)), Bridge.IComparable$1(Number))), Bridge.cast(0, Number)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Number)), Bridge.IComparable$1(Number))), Bridge.cast(0, Number)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Number)), Bridge.IComparable$1(Number))), 0.5) < 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Number)), Bridge.IComparable$1(Number))), Bridge.cast(1, Number)) === 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.EnumTests', {
    typePropertiesAreCorrect: function () {
        //Assert.AreEqual(typeof(Enum).GetClassName(), "Bridge.Enum");
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum), "Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum");
        Bridge.Test.Assert.$true(Bridge.hasValue(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum.firstValue));
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueOfEnumClassIsNull: function () {
        Bridge.Test.Assert.areStrictEqual(this.getDefaultValue(System.Enum)(), null);
    },
    defaultValueOfEnumTypeIsZero: function () {
        Bridge.Test.Assert.areStrictEqual(this.getDefaultValue(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum)(), 0);
    },
    defaultConstructorOfEnumTypeReturnsZero: function () {
        Bridge.Test.Assert.areStrictEqual(new Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum().valueOf(), 0);
    },
    firstValueOfEnumIsZero: function () {
        Bridge.Test.Assert.areStrictEqual(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum.firstValue, 0);
    },
    creatingInstanceOfEnumTypeReturnsZero: function () {
        Bridge.Test.Assert.areStrictEqual(new Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum(), 0);
    },
    defaultExpressionWithEnumReturnsZero: function () {
        Bridge.Test.Assert.areStrictEqual(Bridge.getDefaultValue(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum), 0);
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum.firstValue), Bridge.getHashCode(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum.firstValue));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum.firstValue), Bridge.getHashCode(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum.secondValue));
    },
    equalsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum.firstValue, Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum.firstValue));
        Bridge.Test.Assert.$false(Bridge.equals(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum.firstValue, Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum.secondValue));
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.EnumTests.FlagsEnum', {
    statics: {
        none: 0,
        firstValue: 1,
        secondValue: 2,
        thirdValue: 4
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum', {
    statics: {
        firstValue: 0,
        secondValue: 1,
        thirdValue: 2
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.Int16Tests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(0, Bridge.Int), Bridge.Int));
        Bridge.Test.Assert.$false(Bridge.is(0.5, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(-32769, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(32768, Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");

        var s = Bridge.cast(0, Bridge.Int);
        Bridge.Test.Assert.$true(Bridge.is(s, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(s, Bridge.IComparable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(s, Bridge.IEquatable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(s, Bridge.IFormattable));

    },
    castsWork: function () {
        var i1 = -32769, i2 = -32768, i3 = 5754, i4 = 32767, i5 = 32768;
        var ni1 = -32769, ni2 = -32768, ni3 = 5754, ni4 = 32767, ni5 = 32768, ni6 = null;

        // TODO unchecked
        {
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i1, Bridge.Int), -32769, "-32769 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i2, Bridge.Int), -32768, "-32768 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 5754, "5754 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 32767, "32767 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i5, Bridge.Int), 32768, "32768 unchecked");

            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni1, Bridge.Int, true), -32769, "nullable -32769 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni2, Bridge.Int, true), -32768, "nullable -32768 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni3, Bridge.Int, true), 5754, "nullable 5754 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni4, Bridge.Int, true), 32767, "nullable 32767 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni5, Bridge.Int, true), 32768, "nullable 32768 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni6, Bridge.Int, true), null, "null unchecked");
        }

        //checked
        {
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i2, Bridge.Int), -32768, "-32768 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 5754, "5754 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 32767, "32767 checked");

            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni2, Bridge.Int, true), -32768, "nullable -32768 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni3, Bridge.Int, true), 5754, "nullable 5754 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni4, Bridge.Int, true), 32767, "nullable 32767 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni6, Bridge.Int, true), null, "null checked");
        }
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.Test.Assert.areStrictEqual(this.getDefaultValue(Bridge.Int)(), 0);
    },
    defaultConstructorReturnsZero: function () {
        Bridge.Test.Assert.areStrictEqual(Number(), 0);
    },
    creatingInstanceReturnsZero: function () {
        Bridge.Test.Assert.areStrictEqual(new Bridge.Int(), 0);
    },
    constantsWork: function () {
        Bridge.Test.Assert.areEqual(-32768, -32768);
        Bridge.Test.Assert.areEqual(32767, 32767);
    },
    formatWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(291, Bridge.Int)), "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(291, Bridge.Int)), "x"), "123");
    },
    tryParseWorks: function () {
        var numberResult = { };
        var result = Bridge.Int.tryParseInt("234", numberResult, -32768, 32767);
        Bridge.Test.Assert.$true(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 234);

        result = Bridge.Int.tryParseInt("", numberResult, -32768, 32767);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt(null, numberResult, -32768, 32767);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("notanumber", numberResult, -32768, 32767);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("54768", numberResult, -32768, 32767);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 54768);

        result = Bridge.Int.tryParseInt("-55678", numberResult, -32768, 32767);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, -55678);

        result = Bridge.Int.tryParseInt("2.5", numberResult, -32768, 32767);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);
    },
    parseWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.parseInt("234", -32768, 32767), 234);
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("", -32768, 32767);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt(null, -32768, 32767);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("notanumber", -32768, 32767);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("54768", -32768, 32767);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("-55678", -32768, 32767);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("2.5", -32768, 32767);
        });
    },
    toStringWithoutRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(), "123");
    },
    toStringWithRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(10), "123");
        Bridge.Test.Assert.areEqual((Bridge.cast(291, Bridge.Int)).toString(16), "123");
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(0, Bridge.Int))));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(1, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
    },
    equalsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(1, Bridge.Int)));

        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)) < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.Int32Tests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.$true(Bridge.is(0, Bridge.Int));
        Bridge.Test.Assert.$false(Bridge.is(0.5, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(-2147483649, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(2147483648, Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");

        var i = 0;
        Bridge.Test.Assert.$true(Bridge.is(i, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(i, Bridge.IComparable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(i, Bridge.IEquatable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(i, Bridge.IFormattable));
    },
    castsWork: function () {
        var i1 = -2147483649, i2 = -2147483648, i3 = 5754, i4 = 2147483647, i5 = 2147483648;
        var ni1 = -2147483649, ni2 = -2147483648, ni3 = 5754, ni4 = 2147483647, ni5 = 2147483648, ni6 = null;

        //unchecked
        {
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.Nullable.getValue(i1), Bridge.Int), -2147483649, "-2147483649 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.Nullable.getValue(i2), Bridge.Int), -2147483648, "-2147483648 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.Nullable.getValue(i3), Bridge.Int), 5754, "5754 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.Nullable.getValue(i4), Bridge.Int), 2147483647, "2147483647 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.Nullable.getValue(i5), Bridge.Int), 2147483648, "2147483648 unchecked");

            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni1, Bridge.Int, true), -2147483649, "nullable -2147483649 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni2, Bridge.Int, true), -2147483648, "nullable -2147483648 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni3, Bridge.Int, true), 5754, "nullable 5754 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni4, Bridge.Int, true), 2147483647, "nullable 2147483647 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni5, Bridge.Int, true), 2147483648, "nullable 2147483648 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni6, Bridge.Int, true), null, "null unchecked");
        }

        //checked
        {
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.Nullable.getValue(i2), Bridge.Int), -2147483648, "-2147483648 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.Nullable.getValue(i3), Bridge.Int), 5754, "5754 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.Nullable.getValue(i4), Bridge.Int), 2147483647, "2147483647 checked");

            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni2, Bridge.Int, true), -2147483648, "nullable -2147483648 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni3, Bridge.Int, true), 5754, "nullable 5754 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni4, Bridge.Int, true), 2147483647, "nullable 2147483647 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni6, Bridge.Int, true), null, "null checked");
        }
    },
    typeIsWorksForInt32: function () {
        Bridge.Test.Assert.$false(Bridge.is(null, Bridge.Int));
        Bridge.Test.Assert.$false(Bridge.is(1.5, Bridge.Int));
        Bridge.Test.Assert.$false(Bridge.is({ }, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(1, Bridge.Int));
    },
    typeAsWorksForInt32: function () {
        Bridge.Test.Assert.$false(Bridge.Nullable.neq((Bridge.as(null, Bridge.Int, true)), null));
        Bridge.Test.Assert.$false(Bridge.Nullable.neq((Bridge.as({ }, Bridge.Int, true)), null));
        Bridge.Test.Assert.$false(Bridge.Nullable.neq((Bridge.as(1.5, Bridge.Int, true)), null));
        Bridge.Test.Assert.$true(Bridge.Nullable.neq((Bridge.as(1, Bridge.Int, true)), null));
    },
    unboxingWorksForInt32: function () {
        var _null = null;
        var o = { };
        var d = 1.5;
        var i = 1;
        Bridge.Test.Assert.areEqual(Bridge.cast(_null, Bridge.Int, true), null);
        Bridge.Test.Assert.throws$5(function () {
            var _ = Bridge.cast(o, Bridge.Int, true);
        }, "Cannot cast object to int?");
        Bridge.Test.Assert.throws$5(function () {
            var _ = Bridge.cast(d, Bridge.Int, true);
        }, "Cannot cast decimal to int?");
        Bridge.Test.Assert.areEqual(Bridge.cast(i, Bridge.Int, true), 1);
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.Test.Assert.areStrictEqual(this.getDefaultValue(Bridge.Int)(), 0);
    },
    defaultConstructorReturnsZero: function () {
        Bridge.Test.Assert.areStrictEqual(Number(), 0);
    },
    creatingInstanceReturnsZero: function () {
        Bridge.Test.Assert.areStrictEqual(new Bridge.Int(), 0);
    },
    constantsWork: function () {
        Bridge.Test.Assert.areEqual(-2147483648, -2147483648);
        Bridge.Test.Assert.areEqual(2147483647, 2147483647);
    },
    formatWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((291), "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((291), "x"), "123");
    },
    tryParseWorks: function () {
        var numberResult = { };
        var result = Bridge.Int.tryParseInt("57574", numberResult, -2147483648, 2147483647);
        Bridge.Test.Assert.$true(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 57574);

        result = Bridge.Int.tryParseInt("-14", numberResult, -2147483648, 2147483647);
        Bridge.Test.Assert.$true(result);
        Bridge.Test.Assert.areEqual(numberResult.v, -14);

        result = Bridge.Int.tryParseInt("", numberResult, -2147483648, 2147483647);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt(null, numberResult, -2147483648, 2147483647);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("notanumber", numberResult, -2147483648, 2147483647);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("2.5", numberResult, -2147483648, 2147483647);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);
    },
    parseWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.parseInt("57574", -2147483648, 2147483647), 57574);
        Bridge.Test.Assert.areEqual(Bridge.Int.parseInt("-14", -2147483648, 2147483647), -14);

        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("", -2147483648, 2147483647);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt(null, -2147483648, 2147483647);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("notanumber", -2147483648, 2147483647);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("2147483648", -2147483648, 2147483647);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("-2147483649", -2147483648, 2147483647);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("2.5", -2147483648, 2147483647);
        });
    },
    toStringWithoutRadixWorks: function () {
        Bridge.Test.Assert.areEqual((123).toString(), "123");
    },
    toStringWithRadixWorks: function () {
        Bridge.Test.Assert.areEqual((123).toString(10), "123");
        Bridge.Test.Assert.areEqual((291).toString(16), "123");
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((0)), Bridge.getHashCode((0)));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((1)), Bridge.getHashCode((1)));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((0)), Bridge.getHashCode((1)));
    },
    equalsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals((0), 0));
        Bridge.Test.Assert.$false(Bridge.equals((1), 0));
        Bridge.Test.Assert.$false(Bridge.equals((0), 1));
        Bridge.Test.Assert.$true(Bridge.equals((1), 1));
    },
    iEquatableEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equalsT((0), 0));
        Bridge.Test.Assert.$false(Bridge.equalsT((1), 0));
        Bridge.Test.Assert.$false(Bridge.equalsT((0), 1));
        Bridge.Test.Assert.$true(Bridge.equalsT((1), 1));

        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((0), Bridge.IEquatable$1(Bridge.Int))), 0));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((1), Bridge.IEquatable$1(Bridge.Int))), 0));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((0), Bridge.IEquatable$1(Bridge.Int))), 1));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((1), Bridge.IEquatable$1(Bridge.Int))), 1));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((0), 0) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((1), 0) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((0), 1) < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((0), Bridge.IComparable$1(Bridge.Int))), 0) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((1), Bridge.IComparable$1(Bridge.Int))), 0) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((0), Bridge.IComparable$1(Bridge.Int))), 1) < 0);
    },
    integerDivisionWorks: function () {
        var a = 17, b = 4, c = 0;
        Bridge.Test.Assert.areEqual(Bridge.Int.div(a, b), 4);
        Bridge.Test.Assert.areEqual(Bridge.Int.div(-a, b), -4);
        Bridge.Test.Assert.areEqual(Bridge.Int.div(a, -b), -4);
        Bridge.Test.Assert.areEqual(Bridge.Int.div(-a, -b), 4);
        Bridge.Test.Assert.$throws(function () {
            var x = Bridge.Int.div(a, c);
        });
    },
    integerModuloWorks: function () {
        var a = 17, b = 4, c = 0;
        Bridge.Test.Assert.areEqual(a % b, 1);
        Bridge.Test.Assert.areEqual(-a % b, -1);
        Bridge.Test.Assert.areEqual(a % -b, 1);
        Bridge.Test.Assert.areEqual(-a % -b, -1);
        //Assert.Throws(() => { var x = a % c; });
    },
    integerDivisionByZeroThrowsDivideByZeroException: function () {
        var a = 17, b = 0;
        Bridge.Test.Assert.$throws(function () {
            var x = Bridge.Int.div(a, b);
        });
    },
    doublesAreTruncatedWhenConvertedToIntegers: function () {
        var d1 = 4.5;
        var d2 = null;
        var d3 = 8.5;
        Bridge.Test.Assert.areEqual(Bridge.Int.trunc(d1), 4);
        Bridge.Test.Assert.areEqual(Bridge.Int.trunc(-d1), -4);
        Bridge.Test.Assert.areEqual(Bridge.Int.trunc(d2), null);
        Bridge.Test.Assert.areEqual(Bridge.Int.trunc(Bridge.Nullable.getValue(d3)), 8);
        Bridge.Test.Assert.areEqual(Bridge.Int.trunc(Bridge.Nullable.getValue(Bridge.Nullable.neg(d3))), -8);
        Bridge.Test.Assert.areEqual(Bridge.Int.trunc(d3), 8);
        Bridge.Test.Assert.areEqual(Bridge.Int.trunc(Bridge.Nullable.neg(d3)), -8);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.Int64Tests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(0, Bridge.Int), Bridge.Int));
        Bridge.Test.Assert.$false(Bridge.is(0.5, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(1E+100, Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");

        var l = Bridge.cast(0, Bridge.Int);
        Bridge.Test.Assert.$true(Bridge.is(l, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(l, Bridge.IComparable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(l, Bridge.IEquatable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(l, Bridge.IFormattable));
    },
    castsWork: function () {
        var i3 = 5754, i4 = 9223372036854775000, i5 = 16223372036854776000;
        var ni3 = 5754, ni4 = 9223372036854775000, ni5 = 16223372036854776000, ni6 = null;

        // TODO unchecked
        {
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 5754, "5754 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 9223372036854775000, "9223372036854775000 unchecked");
            Bridge.Test.Assert.false$1(Bridge.cast(i5, Bridge.Int) < 0, "16223372036854776000 unchecked");

            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni3, Bridge.Int, true), 5754, "nullable 5754 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni4, Bridge.Int, true), 9223372036854775000, "nullable 9223372036854775000 unchecked");
            Bridge.Test.Assert.false$1(Bridge.Nullable.lt(Bridge.cast(ni5, Bridge.Int, true), 0), "nullable 16223372036854776000 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni6, Bridge.Int, true), null, "null unchecked");
        }

        //checked
        {
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 5754, "5754 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 9223372036854775000, "9223372036854775000 checked");

            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni3, Bridge.Int, true), 5754, "nullable 5754 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni4, Bridge.Int, true), 9223372036854775000, "nullable 9223372036854775000 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni6, Bridge.Int, true), null, "null checked");
        }
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.Test.Assert.areStrictEqual(this.getDefaultValue(Bridge.Int)(), 0);
    },
    defaultConstructorReturnsZero: function () {
        Bridge.Test.Assert.areStrictEqual(Number(), 0);
    },
    creatingInstanceReturnsZero: function () {
        Bridge.Test.Assert.areStrictEqual(new Bridge.Int(), 0);
    },
    formatWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(291, Bridge.Int)), "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(291, Bridge.Int)), "x"), "123");
    },
    tryParseWorks: function () {
        var numberResult = { };
        var result = Bridge.Int.tryParseInt("57574", numberResult, -9007199254740991, 9007199254740991);
        Bridge.Test.Assert.$true(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 57574);

        result = Bridge.Int.tryParseInt("-14", numberResult, -9007199254740991, 9007199254740991);
        Bridge.Test.Assert.$true(result);
        Bridge.Test.Assert.areEqual(numberResult.v, -14);

        result = Bridge.Int.tryParseInt("", numberResult, -9007199254740991, 9007199254740991);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt(null, numberResult, -9007199254740991, 9007199254740991);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("notanumber", numberResult, -9007199254740991, 9007199254740991);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("2.5", numberResult, -9007199254740991, 9007199254740991);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("-10000000000000000000", numberResult, -9007199254740991, 9007199254740991);
        Bridge.Test.Assert.$false(result);
        //Assert.AreEqual(numberResult, 0);

        result = Bridge.Int.tryParseInt("10000000000000000000", numberResult, -9007199254740991, 9007199254740991);
        Bridge.Test.Assert.$false(result);
        //Assert.AreEqual(numberResult, 0);
    },
    parseWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.parseInt("13453634535", -9007199254740991, 9007199254740991), 13453634535);
        Bridge.Test.Assert.areEqual(Bridge.Int.parseInt("-234253069384953", -9007199254740991, 9007199254740991), -234253069384953);
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("", -9007199254740991, 9007199254740991);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt(null, -9007199254740991, 9007199254740991);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("notanumber", -9007199254740991, 9007199254740991);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("2.5", -9007199254740991, 9007199254740991);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("-10000000000000000000", -9007199254740991, 9007199254740991);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("10000000000000000000", -9007199254740991, 9007199254740991);
        });
    },
    castingOfLargeDoublesToInt64Works: function () {
        var d1 = 5000000000.5, d2 = -d1;
        Bridge.Test.Assert.areEqual$1(Bridge.Int.trunc(d1), 5000000000, "Positive");
        Bridge.Test.Assert.areEqual$1(Bridge.Int.trunc(d2), -5000000000, "Negative");
    },
    divisionOfLargeInt64Works: function () {
        var v1 = 50000000000, v2 = -v1, v3 = 3;
        Bridge.Test.Assert.areEqual$1(Bridge.Int.div(v1, v3), 16666666666, "Positive");
        Bridge.Test.Assert.areEqual$1(Bridge.Int.div(v2, v3), -16666666666, "Negative");
    },
    toStringWithoutRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(), "123");
    },
    toStringWithRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(10), "123");
        Bridge.Test.Assert.areEqual((Bridge.cast(291, Bridge.Int)).toString(16), "123");
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(0, Bridge.Int))));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(1, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
        Bridge.Test.Assert.$true(Bridge.cast(Bridge.getHashCode(4294967296), Bridge.Int) <= 4294967295);
    },
    equalsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(1, Bridge.Int)));

        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)) < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.JsDateTimeTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Date), "Date");
        var o = new Date();
        Bridge.Test.Assert.true$1(Bridge.is(o, Date), "o is DateTime");
    },
    defaultConstructorReturnsTodaysDate: function () {
        var dt = new Date();
        Bridge.Test.Assert.$true(dt.getFullYear() > 2011);
    },
    creatingInstanceReturnsTodaysDate: function () {
        Bridge.Test.Assert.$true(new Date().getFullYear() > 2011);
    },
    millisecondSinceEpochConstructorWorks: function () {
        var dt = new Date(43200000000);
        Bridge.Test.Assert.areEqual(dt.getFullYear(), 1971);
    },
    stringConstructorWorks: function () {
        var dt = new Date("Aug 12, 2012");
        Bridge.Test.Assert.areEqual(dt.getFullYear(), 2012);
        Bridge.Test.Assert.areEqual(dt.getMonth() + 1, 8);
        Bridge.Test.Assert.areEqual(dt.getDate(), 12);
    },
    yMDConstructorWorks: function () {
        var dt = new Date(2011, 7 - 1, 12);
        Bridge.Test.Assert.areEqual(dt.getFullYear(), 2011);
        Bridge.Test.Assert.areEqual(dt.getMonth() + 1, 7);
        Bridge.Test.Assert.areEqual(dt.getDate(), 12);
    },
    yMDHConstructorWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13);
        Bridge.Test.Assert.areEqual(dt.getFullYear(), 2011);
        Bridge.Test.Assert.areEqual(dt.getMonth() + 1, 7);
        Bridge.Test.Assert.areEqual(dt.getDate(), 12);
        Bridge.Test.Assert.areEqual(dt.getHours(), 13);
    },
    yMDHNConstructorWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42);
        Bridge.Test.Assert.areEqual(dt.getFullYear(), 2011);
        Bridge.Test.Assert.areEqual(dt.getMonth() + 1, 7);
        Bridge.Test.Assert.areEqual(dt.getDate(), 12);
        Bridge.Test.Assert.areEqual(dt.getHours(), 13);
        Bridge.Test.Assert.areEqual(dt.getMinutes(), 42);
    },
    yMDHNSConstructorWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56);
        Bridge.Test.Assert.areEqual(dt.getFullYear(), 2011);
        Bridge.Test.Assert.areEqual(dt.getMonth() + 1, 7);
        Bridge.Test.Assert.areEqual(dt.getDate(), 12);
        Bridge.Test.Assert.areEqual(dt.getHours(), 13);
        Bridge.Test.Assert.areEqual(dt.getMinutes(), 42);
        Bridge.Test.Assert.areEqual(dt.getSeconds(), 56);
    },
    yMDHNSUConstructorWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.Test.Assert.areEqual(dt.getFullYear(), 2011);
        Bridge.Test.Assert.areEqual(dt.getMonth() + 1, 7);
        Bridge.Test.Assert.areEqual(dt.getDate(), 12);
        Bridge.Test.Assert.areEqual(dt.getHours(), 13);
        Bridge.Test.Assert.areEqual(dt.getMinutes(), 42);
        Bridge.Test.Assert.areEqual(dt.getSeconds(), 56);
        Bridge.Test.Assert.areEqual(dt.getMilliseconds(), 345);
    },
    nowWorks: function () {
        var dt = new Date();
        Bridge.Test.Assert.$true(dt.getFullYear() > 2011);
    },
    uTCNowWorks: function () {
        var UTC = Bridge.Date.utcNow();
        var local = new Date();
        Bridge.Test.Assert.$true(Math.abs((new Bridge.TimeSpan((new Date(local.getUTCFullYear(), local.getUTCMonth() + 1 - 1, local.getUTCDate(), local.getUTCHours(), local.getUTCMinutes(), local.getUTCSeconds(), local.getUTCMilliseconds()) - UTC) * 10000)).getTotalMinutes()) < 1000);
    },
    toUniversalWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        var UTC = Bridge.Date.toUTC(dt);
        Bridge.Test.Assert.areEqual(dt.getUTCFullYear(), UTC.getFullYear());
        Bridge.Test.Assert.areEqual(dt.getUTCMonth() + 1, UTC.getMonth() + 1);
        Bridge.Test.Assert.areEqual(dt.getUTCDate(), UTC.getDate());
        Bridge.Test.Assert.areEqual(dt.getUTCHours(), UTC.getHours());
        Bridge.Test.Assert.areEqual(dt.getUTCMinutes(), UTC.getMinutes());
        Bridge.Test.Assert.areEqual(dt.getUTCSeconds(), UTC.getSeconds());
        Bridge.Test.Assert.areEqual(dt.getUTCMilliseconds(), UTC.getMilliseconds());
    },
    toLocalWorks: function () {
        var UTC = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        var dt = Bridge.Date.toLocal(UTC);
        Bridge.Test.Assert.areEqual(dt.getUTCFullYear(), UTC.getFullYear());
        Bridge.Test.Assert.areEqual(dt.getUTCMonth() + 1, UTC.getMonth() + 1);
        Bridge.Test.Assert.areEqual(dt.getUTCDate(), UTC.getDate());
        Bridge.Test.Assert.areEqual(dt.getUTCHours(), UTC.getHours());
        Bridge.Test.Assert.areEqual(dt.getUTCMinutes(), UTC.getMinutes());
        Bridge.Test.Assert.areEqual(dt.getUTCSeconds(), UTC.getSeconds());
        Bridge.Test.Assert.areEqual(dt.getUTCMilliseconds(), UTC.getMilliseconds());
    },
    todayWorks: function () {
        var dt = Bridge.Date.today();
        Bridge.Test.Assert.$true(dt.getFullYear() > 2011);
        Bridge.Test.Assert.areEqual(dt.getHours(), 0);
        Bridge.Test.Assert.areEqual(dt.getMinutes(), 0);
        Bridge.Test.Assert.areEqual(dt.getSeconds(), 0);
        Bridge.Test.Assert.areEqual(dt.getMilliseconds(), 0);
    },
    formatWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13);
        Bridge.Test.Assert.areEqual(Bridge.Date.format(dt, "yyyy-MM-dd"), "2011-07-12");
    },
    localeFormatWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13);
        Bridge.Test.Assert.areEqual(Bridge.Date.format(dt, "yyyy-MM-dd"), "2011-07-12");
    },
    getFullYearWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.Test.Assert.areEqual(dt.getFullYear(), 2011);
    },
    getMonthWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.Test.Assert.areEqual(dt.getMonth() + 1, 7);
    },
    getDateWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.Test.Assert.areEqual(dt.getDate(), 12);
    },
    getHoursWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.Test.Assert.areEqual(dt.getHours(), 13);
    },
    getMinutesWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.Test.Assert.areEqual(dt.getMinutes(), 42);
    },
    getSecondsWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.Test.Assert.areEqual(dt.getSeconds(), 56);
    },
    getMillisecondsWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.Test.Assert.areEqual(dt.getMilliseconds(), 345);
    },
    getDayWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.Test.Assert.areEqual(dt.getDay(), 2);
    },
    getTimeWorks: function () {
        var dt = new Date(Date.UTC(1970, 1 - 1, 2));
        Bridge.Test.Assert.areEqual(dt.getTime(), 86400000);
    },
    valueOfWorks: function () {
        var dt = new Date(Date.UTC(1970, 1 - 1, 2));
        Bridge.Test.Assert.areEqual(dt.valueOf(), 86400000);
    },
    getTimezoneOffsetWorks: function () {
        var dt = new Date(0);
        Bridge.Test.Assert.areEqual(dt.getTimezoneOffset(), Bridge.Int.div(Bridge.cast((new Date(1970, 1 - 1, 1).valueOf()), Bridge.Int), 60000));
    },
    getUTCFullYearWorks: function () {
        var dt = new Date(Date.UTC(2011, 7 - 1, 12, 13, 42, 56, 345));
        Bridge.Test.Assert.areEqual(dt.getUTCFullYear(), 2011);
    },
    getUtcMonthWorks: function () {
        var dt = new Date(Date.UTC(2011, 7 - 1, 12, 13, 42, 56, 345));
        Bridge.Test.Assert.areEqual(dt.getUTCMonth() + 1, 7);
    },
    getUTCDateWorks: function () {
        var dt = new Date(Date.UTC(2011, 7 - 1, 12, 13, 42, 56, 345));
        Bridge.Test.Assert.areEqual(dt.getUTCDate(), 12);
    },
    getUTCHoursWorks: function () {
        var dt = new Date(Date.UTC(2011, 7 - 1, 12, 13, 42, 56, 345));
        Bridge.Test.Assert.areEqual(dt.getUTCHours(), 13);
    },
    getUTCMinutesWorks: function () {
        var dt = new Date(Date.UTC(2011, 7 - 1, 12, 13, 42, 56, 345));
        Bridge.Test.Assert.areEqual(dt.getUTCMinutes(), 42);
    },
    getUTCSecondsWorks: function () {
        var dt = new Date(Date.UTC(2011, 7 - 1, 12, 13, 42, 56, 345));
        Bridge.Test.Assert.areEqual(dt.getUTCSeconds(), 56);
    },
    getUTCMillisecondsWorks: function () {
        var dt = new Date(Date.UTC(2011, 7 - 1, 12, 13, 42, 56, 345));
        Bridge.Test.Assert.areEqual(dt.getUTCMilliseconds(), 345);
    },
    getUTCDayWorks: function () {
        var dt = new Date(Date.UTC(2011, 7 - 1, 12, 13, 42, 56, 345));
        Bridge.Test.Assert.areEqual(dt.getUTCDay(), 2);
    },
    parseWorks: function () {
        var dt = Bridge.Date.parse("Aug 12, 2012");
        Bridge.Test.Assert.areEqual(dt.getFullYear(), 2012);
        Bridge.Test.Assert.areEqual(dt.getMonth() + 1, 8);
        Bridge.Test.Assert.areEqual(dt.getDate(), 12);
    },
    parseExactWorks: function () {
        var dt = Bridge.Date.parseExact("2012-12-08", "yyyy-dd-MM");
        Bridge.Test.Assert.areEqual(dt.getFullYear(), 2012);
        Bridge.Test.Assert.areEqual(dt.getMonth() + 1, 8);
        Bridge.Test.Assert.areEqual(dt.getDate(), 12);
    },
    parseExactWithCultureWorks: function () {
        var dt = Bridge.Date.parseExact("2012-12-08", "yyyy-dd-MM", Bridge.CultureInfo.invariantCulture);
        Bridge.Test.Assert.areEqual(dt.getFullYear(), 2012);
        Bridge.Test.Assert.areEqual(dt.getMonth() + 1, 8);
        Bridge.Test.Assert.areEqual(dt.getDate(), 12);
    },
    parseExactUTCWorks: function () {
        //var dt = DateTime.ParseExactUTC("2012-12-08", "yyyy-dd-MM");
        var dt = Bridge.Date.parseExact("2012-12-08", "yyyy-dd-MM", null, true);
        Bridge.Test.Assert.areEqual(dt.getUTCFullYear(), 2012);
        Bridge.Test.Assert.areEqual(dt.getUTCMonth() + 1, 8);
        Bridge.Test.Assert.areEqual(dt.getUTCDate(), 12);
    },
    parseExactUTCWithCultureWorks: function () {
        var dt = Bridge.Date.parseExact("2012-12-08", "yyyy-dd-MM", Bridge.CultureInfo.invariantCulture, true);
        //var dt = DateTime.ParseExact("2012-12-08", "yyyy-dd-MM", CultureInfo.InvariantCulture);
        Bridge.Test.Assert.areEqual(dt.getUTCFullYear(), 2012);
        Bridge.Test.Assert.areEqual(dt.getUTCMonth() + 1, 8);
        Bridge.Test.Assert.areEqual(dt.getUTCDate(), 12);
    },
    toDateStringWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42);
        var s = dt.toDateString();
        Bridge.Test.Assert.$true(Bridge.String.indexOf(s, "2011") >= 0 && Bridge.String.indexOf(s, "42") < 0);
    },
    toTimeStringWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42);
        var s = dt.toTimeString();
        Bridge.Test.Assert.$true(Bridge.String.indexOf(s, "2011") < 0 && Bridge.String.indexOf(s, "42") >= 0);
    },
    toUTCStringWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42);
        var s = dt.toUTCString();
        Bridge.Test.Assert.$true(Bridge.String.indexOf(s, "2011") >= 0 && Bridge.String.indexOf(s, "42") >= 0);
    },
    toLocaleDateStringWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42);
        var s = dt.toLocaleDateString();
        Bridge.Test.Assert.$true(Bridge.String.indexOf(s, "2011") >= 0 && Bridge.String.indexOf(s, "42") < 0);
    },
    toLocaleTimeStringWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42);
        var s = dt.toLocaleTimeString();
        Bridge.Test.Assert.$true(Bridge.String.indexOf(s, "2011") < 0 && Bridge.String.indexOf(s, "42") >= 0);
    },
    assertDateUTC: function (dt, year, month, day, hours, minutes, seconds, milliseconds) {
        Bridge.Test.Assert.areEqual(dt.getUTCFullYear(), year);
        Bridge.Test.Assert.areEqual(dt.getUTCMonth() + 1, month);
        Bridge.Test.Assert.areEqual(dt.getUTCDate(), day);
        Bridge.Test.Assert.areEqual(dt.getUTCHours(), hours);
        Bridge.Test.Assert.areEqual(dt.getUTCMinutes(), minutes);
        Bridge.Test.Assert.areEqual(dt.getUTCSeconds(), seconds);
        Bridge.Test.Assert.areEqual(dt.getUTCMilliseconds(), milliseconds);
    },
    subtractingDatesWorks: function () {
        var ts = new Bridge.TimeSpan((new Date(2011, 7 - 1, 12) - new Date(2011, 7 - 1, 11)) * 10000);
        Bridge.Test.Assert.areEqual(ts.getTotalMilliseconds(), 86400000);
    },
    subtractMethodReturningTimeSpanWorks: function () {
        Bridge.Test.Assert.areEqual(new Bridge.TimeSpan((new Date(2011, 6 - 1, 12) - new Date(2011, 6 - 1, 11)) * 10000), new Bridge.TimeSpan(1, 0, 0, 0));
        Bridge.Test.Assert.areEqual(new Bridge.TimeSpan((new Date(2011, 6 - 1, 12, 15, 0, 0) - new Date(2011, 6 - 1, 11, 13, 0, 0)) * 10000), new Bridge.TimeSpan(1, 2, 0, 0));
    },
    dateEqualityWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals(new Date(2011, 7 - 1, 12), new Date(2011, 7 - 1, 12)));
        Bridge.Test.Assert.$false(Bridge.equals(new Date(2011, 7 - 1, 12), new Date(2011, 7 - 1, 13)));
        Bridge.Test.Assert.areStrictEqual(Bridge.equals(new Date(2011, 7 - 1, 12), null), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.equals(null, new Date(2011, 7 - 1, 12)), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.equals(null, null), true);
    },
    dateInequalityWorks: function () {
        Bridge.Test.Assert.$false(!Bridge.equals(new Date(2011, 7 - 1, 12), new Date(2011, 7 - 1, 12)));
        Bridge.Test.Assert.$true(!Bridge.equals(new Date(2011, 7 - 1, 12), new Date(2011, 7 - 1, 13)));
        Bridge.Test.Assert.areStrictEqual(!Bridge.equals(new Date(2011, 7 - 1, 12), null), true);
        Bridge.Test.Assert.areStrictEqual(!Bridge.equals(null, new Date(2011, 7 - 1, 12)), true);
        Bridge.Test.Assert.areStrictEqual(!Bridge.equals(null, null), false);
    },
    dateLessThanWorks: function () {
        Bridge.Test.Assert.$true(new Date(2011, 7 - 1, 11) < new Date(2011, 7 - 1, 12));
        Bridge.Test.Assert.$false(new Date(2011, 7 - 1, 12) < new Date(2011, 7 - 1, 12));
        Bridge.Test.Assert.$false(new Date(2011, 7 - 1, 13) < new Date(2011, 7 - 1, 12));
    },
    dateLessEqualWorks: function () {
        Bridge.Test.Assert.$true(new Date(2011, 7 - 1, 11) <= new Date(2011, 7 - 1, 12));
        Bridge.Test.Assert.$true(new Date(2011, 7 - 1, 12) <= new Date(2011, 7 - 1, 12));
        Bridge.Test.Assert.$false(new Date(2011, 7 - 1, 13) <= new Date(2011, 7 - 1, 12));
    },
    dateGreaterThanWorks: function () {
        Bridge.Test.Assert.$false(new Date(2011, 7 - 1, 11) > new Date(2011, 7 - 1, 12));
        Bridge.Test.Assert.$false(new Date(2011, 7 - 1, 12) > new Date(2011, 7 - 1, 12));
        Bridge.Test.Assert.$true(new Date(2011, 7 - 1, 13) > new Date(2011, 7 - 1, 12));
    },
    dateGreaterEqualWorks: function () {
        Bridge.Test.Assert.$false(new Date(2011, 7 - 1, 11) >= new Date(2011, 7 - 1, 12));
        Bridge.Test.Assert.$true(new Date(2011, 7 - 1, 12) >= new Date(2011, 7 - 1, 12));
        Bridge.Test.Assert.$true(new Date(2011, 7 - 1, 13) >= new Date(2011, 7 - 1, 12));
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode(new Date(0)), Bridge.getHashCode(new Date(0)));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode(new Date(1)), Bridge.getHashCode(new Date(1)));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode(new Date(0)), Bridge.getHashCode(new Date(1)));
        Bridge.Test.Assert.$true(Bridge.cast(Bridge.getHashCode(new Date(3000, 1 - 1, 1)), Bridge.Int) < 4294967295);
    },
    equalsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals(new Date(0), new Date(0)));
        Bridge.Test.Assert.$false(Bridge.equals(new Date(1), new Date(0)));
        Bridge.Test.Assert.$false(Bridge.equals(new Date(0), new Date(1)));
        Bridge.Test.Assert.$true(Bridge.equals(new Date(1), new Date(1)));
    },
    dateTimeEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equalsT(new Date(0), new Date(0)));
        Bridge.Test.Assert.$false(Bridge.equalsT(new Date(1), new Date(0)));
        Bridge.Test.Assert.$false(Bridge.equalsT(new Date(0), new Date(1)));
        Bridge.Test.Assert.$true(Bridge.equalsT(new Date(1), new Date(1)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(new Date(0), Bridge.IEquatable$1(Date))), new Date(0)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(new Date(1), Bridge.IEquatable$1(Date))), new Date(0)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(new Date(0), Bridge.IEquatable$1(Date))), new Date(1)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(new Date(1), Bridge.IEquatable$1(Date))), new Date(1)));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare(new Date(0), new Date(0)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare(new Date(1), new Date(0)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare(new Date(0), new Date(1)) < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(new Date(0), Bridge.IComparable$1(Date))), new Date(0)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(new Date(1), Bridge.IComparable$1(Date))), new Date(0)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(new Date(0), Bridge.IComparable$1(Date))), new Date(1)) < 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.ObjectTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.$true(true);
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Object), "Object");
    },
    canGetHashCodeForObject: function () {
        var o = { };
        var c = Bridge.getHashCode(o);
        Bridge.Test.Assert.$true(Bridge.is(c, Bridge.Int));
    },
    repeatedCallsToGetHashCodeReturnsSameValue: function () {
        var o = { };
        Bridge.Test.Assert.areEqual(Bridge.getHashCode(o), Bridge.getHashCode(o));
    },
    objectIsEqualToItself: function () {
        var o = { };
        Bridge.Test.Assert.$true(Bridge.equals(o, o));
    },
    objectIsNotEqualToOtherObject: function () {
        Bridge.Test.Assert.$false(Bridge.equals({ }, { }));
    },
    staticEqualsWorks: function () {
        var o1 = { }, o2 = { };
        Bridge.Test.Assert.$true(Bridge.equals(null, null));
        Bridge.Test.Assert.$false(Bridge.equals(null, o1));
        Bridge.Test.Assert.$false(Bridge.equals(o1, null));
        Bridge.Test.Assert.$true(Bridge.equals(o1, o1));
        Bridge.Test.Assert.$false(Bridge.equals(o1, o2));
    },
    referenceEqualsWorks: function () {
        var o1 = { }, o2 = { }, n = null;
        Bridge.Test.Assert.true$1(n === n, "n, n");
        Bridge.Test.Assert.false$1(n === undefined, "n, Script.Undefined");
        Bridge.Test.Assert.false$1(o1 === o2, "o1, o2");
        Bridge.Test.Assert.false$1(o1 === n, "o1, n");
        Bridge.Test.Assert.false$1(o1 === undefined, "o1, Script.Undefined");
        Bridge.Test.Assert.true$1(o1 === o1, "o1, o1");
    },
    toStringOverride: function () {
        var c1 = new Bridge.ClientTest.SimpleTypes.ObjectTests.C1(), c2 = new Bridge.ClientTest.SimpleTypes.ObjectTests.C2();
        Bridge.Test.Assert.areEqual$1(c1.toString(), "test", "#1");
        Bridge.Test.Assert.areEqual$1(c2.toString(), "test", "#1");
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.ObjectTests.C1', {
    toString: function () {
        return "test";
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.ObjectTests.C2', {
    inherits: [Bridge.ClientTest.SimpleTypes.ObjectTests.C1]
});

Bridge.define('Bridge.ClientTest.SimpleTypes.SByteTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(0, Bridge.Int), Bridge.Int));
        Bridge.Test.Assert.$false(Bridge.is(0.5, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(-129, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(128, Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");

        var b = Bridge.cast(0, Bridge.Int);
        Bridge.Test.Assert.$true(Bridge.is(b, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(b, Bridge.IFormattable));
    },
    castsWork: function () {
        var i1 = -129, i2 = -128, i3 = 80, i4 = 127, i5 = 128;
        var ni1 = -129, ni2 = -128, ni3 = 80, ni4 = 127, ni5 = 128, ni6 = null;

        // TODO unchecked
        {
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i1, Bridge.Int), -129, "-129 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i2, Bridge.Int), -128, "-128 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 80, "80 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 127, "127 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i5, Bridge.Int), 128, "128 unchecked");

            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni1, Bridge.Int, true), -129, "nullable -129 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni2, Bridge.Int, true), -128, "nullable -128 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni3, Bridge.Int, true), 80, "nullable 80 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni4, Bridge.Int, true), 127, "nullable 127 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni5, Bridge.Int, true), 128, "nullable 128 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni6, Bridge.Int, true), null, "null unchecked");
        }

        //checked
        {
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i2, Bridge.Int), -128, "-128 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 80, "80 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 127, "127 checked");

            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni2, Bridge.Int, true), -128, "nullable -128 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni3, Bridge.Int, true), 80, "nullable 80 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni4, Bridge.Int, true), 127, "nullable 127 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni6, Bridge.Int, true), null, "null checked");
        }
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.Test.Assert.areStrictEqual(this.getDefaultValue(Bridge.Int)(), 0);
    },
    defaultConstructorReturnsZero: function () {
        Bridge.Test.Assert.areStrictEqual(Number(), 0);
    },
    creatingInstanceReturnsZero: function () {
        Bridge.Test.Assert.areStrictEqual(new Bridge.Int(), 0);
    },
    constantsWork: function () {
        Bridge.Test.Assert.areEqual(-128, -128);
        Bridge.Test.Assert.areEqual(127, 127);
    },
    formatWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(18, Bridge.Int)), "x"), "12");
    },
    iFormattableToStringWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(18, Bridge.Int)), "x"), "12");
    },
    tryParseWorks: function () {
        var numberResult = { };
        var result = Bridge.Int.tryParseInt("124", numberResult, -128, 127);
        Bridge.Test.Assert.$true(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 124);

        result = Bridge.Int.tryParseInt("-123", numberResult, -128, 127);
        Bridge.Test.Assert.$true(result);
        Bridge.Test.Assert.areEqual(numberResult.v, -123);

        result = Bridge.Int.tryParseInt("", numberResult, -128, 127);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt(null, numberResult, -128, 127);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("notanumber", numberResult, -128, 127);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("54768", numberResult, -128, 127);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 54768);

        result = Bridge.Int.tryParseInt("2.5", numberResult, -128, 127);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);
    },
    parseWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.parseInt("124", -128, 127), 124);
        Bridge.Test.Assert.areEqual(Bridge.Int.parseInt("-123", -128, 127), -123);
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("", -128, 127);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt(null, -128, 127);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("notanumber", -128, 127);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("54768", -128, 127);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("2.5", -128, 127);
        });
    },
    toStringWithoutRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(), "123");
    },
    toStringWithRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(10), "123");
        Bridge.Test.Assert.areEqual((Bridge.cast(18, Bridge.Int)).toString(16), "12");
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(0, Bridge.Int))));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(1, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
    },
    equalsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(1, Bridge.Int)));

        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)) < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.SingleTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(0.5, Number), Number));
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Number), "Number");

        var f = Bridge.cast(0, Number);
        Bridge.Test.Assert.$true(Bridge.is(f, Number));
        Bridge.Test.Assert.$true(Bridge.is(f, Bridge.IFormattable));
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.Test.Assert.areStrictEqual(this.getDefaultValue(Number)(), 0);
    },
    creatingInstanceReturnsZero: function () {
        Bridge.Test.Assert.areStrictEqual(new Number(), 0);
    },
    constantsWork: function () {
        var zero = 0;
        Bridge.Test.Assert.true$1(Bridge.cast(-3.40282347E+38, Number) < -3.4E+38 && Bridge.cast(-3.40282347E+38, Number) > -3.5E+38, "MinValue should be correct");
        Bridge.Test.Assert.true$1(Bridge.cast(3.40282347E+38, Number) > 3.4E+38 && Bridge.cast(3.40282347E+38, Number) < 3.5E+38, "MaxValue should be correct");
        Bridge.Test.Assert.areEqual$1(1.401298E-45, 1.401298E-45, "Epsilon should be correct");
        Bridge.Test.Assert.true$1(isNaN(Number.NaN), "NaN should be correct");
        Bridge.Test.Assert.areStrictEqual$1(Number.POSITIVE_INFINITY, 1 / zero, "PositiveInfinity should be correct");
        Bridge.Test.Assert.areStrictEqual$1(Number.NEGATIVE_INFINITY, -1 / zero, "NegativeInfinity should be correct");
    },
    defaultConstructorReturnsZero: function () {
        Bridge.Test.Assert.areStrictEqual(Number(), 0);
    },
    formatWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(291.0, Number)), "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(291.0, Number)), "x"), "123");
    },
    toStringWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123.0, Number)).toString(), "123");
    },
    toExponentialWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123.0, Number)).toExponential(), "1.23e+2");
    },
    toExponentialWithFractionalDigitsWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123.0, Number)).toExponential(1), "1.2e+2");
    },
    toFixed: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123.0, Number)).toFixed(), "123");
    },
    toFixedWithFractionalDigitsWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123.0, Number)).toFixed(1), "123.0");
    },
    toPrecisionWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(12345.0, Number)).toPrecision(), "12345");
    },
    toPrecisionWithPrecisionWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(12345.0, Number)).toPrecision(2), "1.2e+4");
    },
    isPositiveInfinityWorks: function () {
        var inf = "Infinity";
        // TODO Bug
        //Assert.True (float.IsPositiveInfinity(inf));
        Bridge.Test.Assert.$false((-inf === Number.POSITIVE_INFINITY));
        Bridge.Test.Assert.$false((0.0 === Number.POSITIVE_INFINITY));
        Bridge.Test.Assert.$false((Number.NaN === Number.POSITIVE_INFINITY));
    },
    isNegativeInfinityWorks: function () {
        var inf = "Infinity";
        Bridge.Test.Assert.$false((inf === Number.NEGATIVE_INFINITY));
        Bridge.Test.Assert.$true((-inf === Number.NEGATIVE_INFINITY));
        Bridge.Test.Assert.$false((0.0 === Number.NEGATIVE_INFINITY));
        Bridge.Test.Assert.$false((Number.NaN === Number.NEGATIVE_INFINITY));
    },
    isInfinityWorks: function () {
        var inf = "Infinity";
        Bridge.Test.Assert.$true((Math.abs(inf) === Number.POSITIVE_INFINITY));
        Bridge.Test.Assert.$true((Math.abs(-inf) === Number.POSITIVE_INFINITY));
        Bridge.Test.Assert.$false((Math.abs(0.0) === Number.POSITIVE_INFINITY));
        Bridge.Test.Assert.$false((Math.abs(Number.NaN) === Number.POSITIVE_INFINITY));
    },
    isFiniteWorks: function () {
        var zero = 0, one = 1;
        Bridge.Test.Assert.$true(isFinite(one));
        Bridge.Test.Assert.$false(isFinite(one / zero));
        Bridge.Test.Assert.$false(isFinite(zero / zero));
    },
    isNaNWorks: function () {
        var zero = 0, one = 1;
        Bridge.Test.Assert.$false(isNaN(one));
        Bridge.Test.Assert.$false(isNaN(one / zero));
        Bridge.Test.Assert.$true(isNaN(zero / zero));
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(0, Number))), Bridge.getHashCode((Bridge.cast(0, Number))));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(1, Number))), Bridge.getHashCode((Bridge.cast(1, Number))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.cast(0, Number))), Bridge.getHashCode((Bridge.cast(1, Number))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.cast(0, Number))), Bridge.getHashCode((Bridge.cast(0.5, Number))));
    },
    equalsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(0, Number)), Bridge.cast(0, Number)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(1, Number)), Bridge.cast(0, Number)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(0, Number)), Bridge.cast(0.5, Number)));
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(1, Number)), Bridge.cast(1, Number)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(0, Number)), Bridge.cast(0, Number)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(1, Number)), Bridge.cast(0, Number)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(0, Number)), Bridge.cast(0.5, Number)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(1, Number)), Bridge.cast(1, Number)));

        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Number)), Bridge.IEquatable$1(Number))), Bridge.cast(0, Number)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Number)), Bridge.IEquatable$1(Number))), Bridge.cast(0, Number)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Number)), Bridge.IEquatable$1(Number))), Bridge.cast(0.5, Number)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Number)), Bridge.IEquatable$1(Number))), Bridge.cast(1, Number)));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Number)), Bridge.cast(0, Number)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(1, Number)), Bridge.cast(0, Number)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Number)), Bridge.cast(0.5, Number)) < 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(1, Number)), Bridge.cast(1, Number)) === 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Number)), Bridge.IComparable$1(Number))), Bridge.cast(0, Number)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Number)), Bridge.IComparable$1(Number))), Bridge.cast(0, Number)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Number)), Bridge.IComparable$1(Number))), Bridge.cast(0.5, Number)) < 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Number)), Bridge.IComparable$1(Number))), Bridge.cast(1, Number)) === 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.StringTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(String), "String");
        var s = "X";
        Bridge.Test.Assert.$true(Bridge.is(s, String));
    },
    stringInterfaces: function () {
        var s = "X";
        Bridge.Test.Assert.true$1(true, "string is object");
        Bridge.Test.Assert.$true(Bridge.is(s, Bridge.IComparable$1(String)));
        Bridge.Test.Assert.$true(Bridge.is(s, Bridge.IEquatable$1(String)));
    },
    defaultConstructorWorks: function () {
        Bridge.Test.Assert.areEqual(String(), "");
    },
    copyConstructorWorks: function () {
        Bridge.Test.Assert.areEqual(String("abcd"), "abcd");
    },
    charAndCountConstructorWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.fromCharCount(120, 5), "xxxxx");
    },
    charArrayConstructorWorks: function () {
        Bridge.Test.Assert.areEqual(String.fromCharCode.apply(null, [97, 98, 67]), "abC");
    },
    emptyFieldWorks: function () {
        Bridge.Test.Assert.areEqual("", "");
    },
    lengthPropertyWorks: function () {
        Bridge.Test.Assert.areEqual("abcd".length, 4);
    },
    charAtWorks: function () {
        Bridge.Test.Assert.areEqual("abcd".charAt(2), "c");
    },
    charCodeAtWorks: function () {
        Bridge.Test.Assert.areEqual("abcd".charCodeAt(2), Bridge.cast(99, Bridge.Int));
    },
    compareWorks: function () {
        Bridge.Test.Assert.$true(Bridge.String.compare("abcd", "abcd") === 0);
        Bridge.Test.Assert.$true(Bridge.String.compare("abcd", "abcb") > 0);
        Bridge.Test.Assert.$true(Bridge.String.compare("abcd", "abce") < 0);
    },
    compareWithIgnoreCaseArgWorks: function () {
        Bridge.Test.Assert.$true(Bridge.String.compare("abcd", "abcd", false) === 0);
        Bridge.Test.Assert.$true(Bridge.String.compare("abcd", "abcb", false) > 0);
        Bridge.Test.Assert.$true(Bridge.String.compare("abcd", "abce", false) < 0);
        Bridge.Test.Assert.$true(Bridge.String.compare("abcd", "ABCD", true) === 0);
        Bridge.Test.Assert.$true(Bridge.String.compare("abcd", "ABCB", true) > 0);
        Bridge.Test.Assert.$true(Bridge.String.compare("abcd", "ABCE", true) < 0);
    },
    concatWorks: function () {
        Bridge.Test.Assert.areEqual(["a", "b"].join(''), "ab");
        Bridge.Test.Assert.areEqual(["a", "b", "c"].join(''), "abc");
        Bridge.Test.Assert.areEqual(["a", "b", "c", "d"].join(''), "abcd");
        Bridge.Test.Assert.areEqual(["a", "b", "c", "d", "e"].toString().split(',').join(''), "abcde");
        Bridge.Test.Assert.areEqual(["a", "b", "c", "d", "e", "f"].toString().split(',').join(''), "abcdef");
        Bridge.Test.Assert.areEqual(["a", "b", "c", "d", "e", "f", "g"].toString().split(',').join(''), "abcdefg");
        Bridge.Test.Assert.areEqual(["a", "b", "c", "d", "e", "f", "g", "h"].toString().split(',').join(''), "abcdefgh");
        Bridge.Test.Assert.areEqual(["a", "b", "c", "d", "e", "f", "g", "h", "i"].toString().split(',').join(''), "abcdefghi");
    },
    concatWithObjectsWorks: function () {
        Bridge.Test.Assert.areEqual([1].toString().split(',').join(''), "1");
        Bridge.Test.Assert.areEqual([1, 2].join(''), "12");
        Bridge.Test.Assert.areEqual([1, 2, 3].join(''), "123");
        Bridge.Test.Assert.areEqual([1, 2, 3, 4].join(''), "1234");
        Bridge.Test.Assert.areEqual([1, 2, 3, 4, 5].toString().split(',').join(''), "12345");
        Bridge.Test.Assert.areEqual([1, 2, 3, 4, 5, 6].toString().split(',').join(''), "123456");
        Bridge.Test.Assert.areEqual([1, 2, 3, 4, 5, 6, 7].toString().split(',').join(''), "1234567");
        Bridge.Test.Assert.areEqual([1, 2, 3, 4, 5, 6, 7, 8].toString().split(',').join(''), "12345678");
        Bridge.Test.Assert.areEqual([1, 2, 3, 4, 5, 6, 7, 8, 9].toString().split(',').join(''), "123456789");
    },
    endsWithCharWorks: function () {
        Bridge.Test.Assert.$true(Bridge.String.endsWith("abcd", "d"));
        Bridge.Test.Assert.$false(Bridge.String.endsWith("abcd", "e"));
    },
    endsWithStringWorks: function () {
        Bridge.Test.Assert.$true(Bridge.String.endsWith("abcd", "d"));
        Bridge.Test.Assert.$false(Bridge.String.endsWith("abcd", "e"));
    },
    staticEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.String.equals("abcd", "abcd"));
        Bridge.Test.Assert.$false(Bridge.String.equals("abcd", "abce"));
        Bridge.Test.Assert.$false(Bridge.String.equals("abcd", "ABCD"));
        Bridge.Test.Assert.$true(Bridge.String.equals("abcd", "abcd"));
        Bridge.Test.Assert.$false(Bridge.String.equals("abcd", "abce"));
        Bridge.Test.Assert.$false(Bridge.String.equals("abcd", "ABCD"));
    },
    formatWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.format("x", null), "x");
        Bridge.Test.Assert.areEqual(Bridge.String.format("x{0}", "a"), "xa");
        Bridge.Test.Assert.areEqual(Bridge.String.format("x{0}{1}", "a", "b"), "xab");
        Bridge.Test.Assert.areEqual(Bridge.String.format("x{0}{1}{2}", "a", "b", "c"), "xabc");
        Bridge.Test.Assert.areEqual(Bridge.String.format("x{0}{1}{2}{3}", "a", "b", "c", "d"), "xabcd");

        var arr1 = ["a"];
        var arr2 = ["a", "b"];
        var arr3 = ["a", "b", "c"];
        var arr4 = ["a", "b", "c", "d"];
        Bridge.Test.Assert.areEqual(Bridge.String.format("x{0}", arr1), "xa");
        Bridge.Test.Assert.areEqual(Bridge.String.format("x{0}{1}", arr2[0], arr2[1]), "xab");
        Bridge.Test.Assert.areEqual(Bridge.String.format("x{0}{1}{2}", arr3[0], arr3[1], arr3[2]), "xabc");
        Bridge.Test.Assert.areEqual(Bridge.String.format("x{0}{1}{2}{3}", arr4[0], arr4[1], arr4[2], arr4[3]), "xabcd");
    },
    formatWorksExtended: function () {
        var arr2 = ["a", "b"];
        var arr3 = ["a", "b", "c"];
        var arr4 = ["a", "b", "c", "d"];

        Bridge.Test.Assert.areEqual(Bridge.String.format("x{0}{1}", arr2), "xab");
        Bridge.Test.Assert.areEqual(Bridge.String.format("x{0}{1}{2}", arr3), "xabc");
        Bridge.Test.Assert.areEqual(Bridge.String.format("x{0}{1}{2}{3}", arr4), "xabcd");
    },
    formatWorksWithIFormattable: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.format("{0:F2}", 3.1428571428571428), "3.14");
    },
    formatCanUseEscapedBraces: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.format("{{0}}", null), "{0}");
    },
    fromCharCodeWorks: function () {
        Bridge.Test.Assert.areEqual(String.fromCharCode(), "");
        Bridge.Test.Assert.areEqual(String.fromCharCode(97), "a");
        Bridge.Test.Assert.areEqual(String.fromCharCode(97, 98), "ab");
        Bridge.Test.Assert.areEqual(String.fromCharCode(97, 98, 99), "abc");
    },
    indexOfCharWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("abc", String.fromCharCode(98)), 1);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("abc", String.fromCharCode(100)), -1);
    },
    indexOfStringWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("abc", "bc"), 1);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("abc", "bd"), -1);
    },
    indexOfCharWithStartIndexWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("abcabc", String.fromCharCode(98), 3), 4);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("abcabc", String.fromCharCode(100), 3), -1);
    },
    indexOfCharWithStartIndexAndCountWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("xxxxxabcxxx", String.fromCharCode(99), 3, 8), 7);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("xxxxxabcxxx", String.fromCharCode(99), 3, 5), 7);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("xxxxxabcxxx", String.fromCharCode(99), 3, 4), -1);
    },
    indexOfStringWithStartIndexWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("abcabc", "bc", 3), 4);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("abcabc", "bd", 3), -1);
    },
    indexOfStringWithStartIndexAndCountWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("xxxxxabcxxx", "abc", 3, 8), 5);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("xxxxxabcxxx", "abc", 3, 5), 5);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("xxxxxabcxxx", "abc", 3, 4), -1);
    },
    indexOfAnyWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.indexOfAny("abcd", [98]), 1);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOfAny("abcd", [98, 120]), 1);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOfAny("abcd", [98, 120, 121]), 1);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOfAny("abcd", [120, 121]), -1);
    },
    indexOfAnyWithStartIndexWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.indexOfAny("abcdabcd", [98], 4), 5);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOfAny("abcdabcd", [98, 120], 4), 5);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOfAny("abcdabcd", [98, 120, 121], 4), 5);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOfAny("abcdabcd", [120, 121], 4), -1);
    },
    indexOfAnyWithStartIndexAndCountWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.indexOfAny("abcdabcd", [98], 4, 2), 5);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOfAny("abcdabcd", [98, 120], 4, 2), 5);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOfAny("abcdabcd", [98, 120, 121], 4, 2), 5);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOfAny("abcdabcd", [120, 121], 4, 2), -1);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOfAny("abcdabcd", [99], 4, 2), -1);
    },
    isNullOrEmptyWorks: function () {
        Bridge.Test.Assert.$true(Bridge.String.isNullOrEmpty(null));
        Bridge.Test.Assert.$true(Bridge.String.isNullOrEmpty(""));
        Bridge.Test.Assert.$false(Bridge.String.isNullOrEmpty(" "));
        Bridge.Test.Assert.$false(Bridge.String.isNullOrEmpty("0"));
    },
    lastIndexOfCharWorks: function () {
        Bridge.Test.Assert.areEqual("abc".lastIndexOf("b"), 1);
        Bridge.Test.Assert.areEqual("abc".lastIndexOf("d"), -1);
    },
    lastIndexOfStringWorks: function () {
        Bridge.Test.Assert.areEqual("abc".lastIndexOf("bc"), 1);
        Bridge.Test.Assert.areEqual("abc".lastIndexOf("bd"), -1);
    },
    lastIndexOfCharWithStartIndexWorks: function () {
        Bridge.Test.Assert.areEqual("abcabc".lastIndexOf("b", 3), 1);
        Bridge.Test.Assert.areEqual("abcabc".lastIndexOf("d", 3), -1);
    },
    lastIndexOfStringWithStartIndexWorks: function () {
        Bridge.Test.Assert.areEqual("abcabc".lastIndexOf("bc", 3), 1);
        Bridge.Test.Assert.areEqual("abcabc".lastIndexOf("bd", 3), -1);
    },
    localeCompareWorks: function () {
        Bridge.Test.Assert.$true("abcd".localeCompare("abcd") === 0);
        Bridge.Test.Assert.$true("abcd".localeCompare("abcb") > 0);
        Bridge.Test.Assert.$true("abcd".localeCompare("abce") < 0);
    },
    matchWorks: function () {
        var result = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".match(new RegExp("[A-E]", "gi"));
        Bridge.Test.Assert.areEqual(result, ["A", "B", "C", "D", "E", "a", "b", "c", "d", "e"]);
    },
    replaceWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.replaceAll("abcabcabc", "a", "x"), "xbcxbcxbc");
        Bridge.Test.Assert.areEqual(Bridge.String.replaceAll("abcabcabc", "ab", "x"), "xcxcxc");
    },
    replaceCharWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.replaceAll("abcabcabc", "a", "x"), "xbcxbcxbc");
    },
    replaceRegexWithReplaceTextWorks: function () {
        Bridge.Test.Assert.areEqual("abcabcabc".replace(new RegExp("a|b", "g"), "x"), "xxcxxcxxc");
    },
    replaceRegexWithReplaceCallbackWorks: function () {
        Bridge.Test.Assert.areEqual("abcabcabc".replace(new RegExp("a|b", "g"), function (s) {
            return s === "a" ? "x" : "y";
        }), "xycxycxyc");
    },
    searchWorks: function () {
        Bridge.Test.Assert.areEqual("abcabcabc".search(new RegExp("ca")), 2);
        Bridge.Test.Assert.areEqual("abcabcabc".search(new RegExp("x")), -1);
    },
    splitWithStringWorks: function () {
        Bridge.Test.Assert.areEqual("abcabcabc".split("b"), ["a", "ca", "ca", "c"]);
    },
    splitWithRegexWorks: function () {
        Bridge.Test.Assert.areEqual("abcaxcaxc".split(new RegExp("b|x", "g")), ["a", "ca", "ca", "c"]);
    },
    startsWithStringWorks: function () {
        Bridge.Test.Assert.$true(Bridge.String.startsWith("abc", "ab"));
        Bridge.Test.Assert.$false(Bridge.String.startsWith("abc", "bc"));
    },
    substrWorks: function () {
        Bridge.Test.Assert.areEqual("abcde".substr(2), "cde");
    },
    substrWithLengthWorks: function () {
        Bridge.Test.Assert.areEqual("abcde".substr(2, 2), "cd");
    },
    substringWorks: function () {
        Bridge.Test.Assert.areEqual("abcde".substring(2), "cde");
    },
    substringWithLengthWorks: function () {
        Bridge.Test.Assert.areEqual("abcde".substring(2, 4), "cd");
    },
    toLowerCaseWorks: function () {
        Bridge.Test.Assert.areEqual("ABcd".toLowerCase(), "abcd");
    },
    toUpperCaseWorks: function () {
        Bridge.Test.Assert.areEqual("ABcd".toUpperCase(), "ABCD");
    },
    toLowerWorks: function () {
        Bridge.Test.Assert.areEqual("ABcd".toLowerCase(), "abcd");
    },
    toUpperWorks: function () {
        Bridge.Test.Assert.areEqual("ABcd".toUpperCase(), "ABCD");
    },
    trimWorks: function () {
        Bridge.Test.Assert.areEqual("  abc  ".trim(), "abc");
    },
    stringEqualityWorks: function () {
        var s1 = "abc", s2 = null, s3 = null;
        Bridge.Test.Assert.$true(s1 === "abc");
        Bridge.Test.Assert.$false(s1 === "aBc");
        Bridge.Test.Assert.$false(s1 === s2);
        Bridge.Test.Assert.$true(s2 === s3);
    },
    stringInequalityWorks: function () {
        var s1 = "abc", s2 = null, s3 = null;
        Bridge.Test.Assert.$false(s1 !== "abc");
        Bridge.Test.Assert.$true(s1 !== "aBc");
        Bridge.Test.Assert.$true(s1 !== s2);
        Bridge.Test.Assert.$false(s2 !== s3);
    },
    stringIndexingWorks: function () {
        var s = "abcd";
        Bridge.Test.Assert.areEqual(Bridge.cast(s.charCodeAt(0), Bridge.Int), Bridge.cast(97, Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.cast(s.charCodeAt(1), Bridge.Int), Bridge.cast(98, Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.cast(s.charCodeAt(2), Bridge.Int), Bridge.cast(99, Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.cast(s.charCodeAt(3), Bridge.Int), Bridge.cast(100, Bridge.Int));
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode("a"), Bridge.getHashCode("a"));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode("b"), Bridge.getHashCode("b"));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode("a"), Bridge.getHashCode("b"));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode("a"), Bridge.getHashCode("ab"));
        Bridge.Test.Assert.$true(Bridge.cast(Bridge.getHashCode("abcdefghijklmnopq"), Bridge.Int) < 4294967295);
    },
    instanceEqualsWorks: function () {
        var r = "a";
        Bridge.Test.Assert.$true(Bridge.equals("a", r));
        Bridge.Test.Assert.$false(Bridge.equals("b", r));
        r = "b";
        Bridge.Test.Assert.$false(Bridge.equals("a", r));
        Bridge.Test.Assert.$true(Bridge.equals("b", r));
        r = "A";
        Bridge.Test.Assert.$false(Bridge.equals("a", r));
        r = "ab";
        Bridge.Test.Assert.$false(Bridge.equals("a", r));
    },
    stringEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.String.equals("a", "a"));
        Bridge.Test.Assert.$false(Bridge.String.equals("b", "a"));
        Bridge.Test.Assert.$false(Bridge.String.equals("a", "b"));
        Bridge.Test.Assert.$true(Bridge.String.equals("b", "b"));
        Bridge.Test.Assert.$false(Bridge.String.equals("a", "A"));
        Bridge.Test.Assert.$false(Bridge.String.equals("a", "ab"));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.String.compare("abcd", "abcd") === 0);
        Bridge.Test.Assert.$true(Bridge.String.compare("abcd", "abcD") !== 0);
        Bridge.Test.Assert.$true(Bridge.String.compare("abcd", "abcb") > 0);
        Bridge.Test.Assert.$true(Bridge.String.compare("abcd", "abce") < 0);
    },
    containsWorks: function () {
        var text = "Lorem ipsum dolor sit amet";
        Bridge.Test.Assert.$true(Bridge.String.contains(text,"Lorem"));
        Bridge.Test.Assert.$false(Bridge.String.contains(text,"lorem"));
        Bridge.Test.Assert.$true(Bridge.String.contains(text,text));
    },
    toCharArrayWorks: function () {
        var text = "Lorem sit dolor";
        Bridge.Test.Assert.areEqual(Bridge.String.toCharArray(text, 0, text.length), [76, 111, 114, 101, 109, 32, 115, 105, 116, 32, 100, 111, 108, 111, 114]);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.TimeSpanTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.TimeSpan), "Bridge.TimeSpan");
        var d = new Bridge.TimeSpan();
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.TimeSpan), "d is TimeSpan");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.IComparable$1(Bridge.TimeSpan)), "d is IComparable<TimeSpan>");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.IEquatable$1(Bridge.TimeSpan)), "d is IEquatable<TimeSpan>");
    },
    defaultConstructorWorks: function () {
        var time = new Bridge.TimeSpan();
        Bridge.Test.Assert.areEqual(time.getTicks(), 0);
    },
    defaultValueWorks: function () {
        var ts = Bridge.getDefaultValue(Bridge.TimeSpan);
        Bridge.Test.Assert.areEqual(ts.getTicks(), 0);
    },
    zeroWorks: function () {
        var ts = Bridge.TimeSpan.zero;
        Bridge.Test.Assert.areEqual(ts.getTicks(), 0);
    },
    creatingInstanceReturnsTimeSpanWithZeroValue: function () {
        var ts = new Bridge.TimeSpan();
        Bridge.Test.Assert.areEqual(ts.getTicks(), 0);
    },
    parameterConstructorsWorks: function () {
        var time = new Bridge.TimeSpan(34567);
        Bridge.Test.Assert.true$1(Bridge.is(time, Bridge.TimeSpan), "ticks type");
        Bridge.Test.Assert.areEqual$1(time.getTicks(), 34567, "ticks value");

        time = new Bridge.TimeSpan(10, 20, 5);
        Bridge.Test.Assert.true$1(Bridge.is(time, Bridge.TimeSpan), "h, m, s type");
        Bridge.Test.Assert.areEqual$1(time.getTicks(), 372050000000, "h, m, s value");

        time = new Bridge.TimeSpan(15, 10, 20, 5);
        Bridge.Test.Assert.true$1(Bridge.is(time, Bridge.TimeSpan), "d, h, m, s type");
        Bridge.Test.Assert.areEqual$1(time.getTicks(), 13332050000000, "d, h, m, s value");

        time = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        Bridge.Test.Assert.true$1(Bridge.is(time, Bridge.TimeSpan), "full type");
        Bridge.Test.Assert.areEqual$1(time.getTicks(), 13332050140000, "full value");
    },
    factoryMethodsWork: function () {
        var time = Bridge.TimeSpan.fromDays(3);
        Bridge.Test.Assert.true$1(Bridge.is(time, Bridge.TimeSpan), "FromDays type");
        Bridge.Test.Assert.areEqual$1(time.getTicks(), 2592000000000, "FromDays value");

        time = Bridge.TimeSpan.fromHours(3);
        Bridge.Test.Assert.true$1(Bridge.is(time, Bridge.TimeSpan), "FromHours type");
        Bridge.Test.Assert.areEqual$1(time.getTicks(), 108000000000, "FromHours value");

        time = Bridge.TimeSpan.fromMinutes(3);
        Bridge.Test.Assert.true$1(Bridge.is(time, Bridge.TimeSpan), "FromMinutes type");
        Bridge.Test.Assert.areEqual$1(time.getTicks(), 1800000000, "FromMinutes value");

        time = Bridge.TimeSpan.fromSeconds(3);
        Bridge.Test.Assert.true$1(Bridge.is(time, Bridge.TimeSpan), "FromSeconds type");
        Bridge.Test.Assert.areEqual$1(time.getTicks(), 30000000, "FromSeconds value");

        time = Bridge.TimeSpan.fromMilliseconds(3);
        Bridge.Test.Assert.true$1(Bridge.is(time, Bridge.TimeSpan), "FromMilliseconds type");
        Bridge.Test.Assert.areEqual$1(time.getTicks(), 30000, "FromMilliseconds value");

        time = Bridge.TimeSpan.fromTicks(3);
        Bridge.Test.Assert.true$1(Bridge.is(time, Bridge.TimeSpan), "FromTicks type");
        Bridge.Test.Assert.areEqual$1(time.getTicks(), 3, "FromTicks value");
    },
    propertiesWork: function () {
        var time = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        Bridge.Test.Assert.areEqual(time.getDays(), 15);
        Bridge.Test.Assert.areEqual(time.getHours(), 10);
        Bridge.Test.Assert.areEqual(time.getMinutes(), 20);
        Bridge.Test.Assert.areEqual(time.getSeconds(), 5);
        Bridge.Test.Assert.areEqual(time.getMilliseconds(), 14);
        this.assertAlmostEqual(time.getTotalDays(), 15.430613587962963);
        this.assertAlmostEqual(time.getTotalHours(), 370.33472611111108);
        this.assertAlmostEqual(time.getTotalMinutes(), 22220.083566666668);
        this.assertAlmostEqual(time.getTotalSeconds(), 1333205.014);
        this.assertAlmostEqual(time.getTotalMilliseconds(), 1333205014.0);
        Bridge.Test.Assert.areEqual(time.getTicks(), 13332050140000);
    },
    compareToWorks: function () {
        var time1 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time2 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time3 = new Bridge.TimeSpan(14, 10, 20, 5, 14);
        var time4 = new Bridge.TimeSpan(15, 11, 20, 5, 14);
        Bridge.Test.Assert.areEqual(0, time1.compareTo(time1));
        Bridge.Test.Assert.areEqual(0, time1.compareTo(time2));
        Bridge.Test.Assert.areEqual(1, time1.compareTo(time3));
        Bridge.Test.Assert.areEqual(-1, time1.compareTo(time4));
    },
    compareWorks: function () {
        var time1 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time2 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time3 = new Bridge.TimeSpan(14, 10, 20, 5, 14);
        var time4 = new Bridge.TimeSpan(15, 11, 20, 5, 14);
        Bridge.Test.Assert.areEqual(0, time1.compareTo(time1));
        Bridge.Test.Assert.areEqual(0, time1.compareTo(time2));
        Bridge.Test.Assert.areEqual(1, time1.compareTo(time3));
        Bridge.Test.Assert.areEqual(-1, time1.compareTo(time4));
    },
    staticEqualsWorks: function () {
        var time1 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time2 = new Bridge.TimeSpan(14, 10, 20, 5, 14);
        var time3 = new Bridge.TimeSpan(15, 10, 20, 5, 14);

        Bridge.Test.Assert.$false(time1.ticks === time2.ticks);
        Bridge.Test.Assert.$true(time1.ticks === time3.ticks);
    },
    equalsWorks: function () {
        var time1 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time2 = new Bridge.TimeSpan(14, 10, 20, 5, 14);
        var time3 = new Bridge.TimeSpan(15, 10, 20, 5, 14);

        Bridge.Test.Assert.$false(time1.equals(time2));
        Bridge.Test.Assert.$true(time1.equals(time3));
    },
    iEquatableEqualsWorks: function () {
        var time1 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time2 = new Bridge.TimeSpan(14, 10, 20, 5, 14);
        var time3 = new Bridge.TimeSpan(15, 10, 20, 5, 14);

        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(time1, Bridge.IEquatable$1(Bridge.TimeSpan))), time2));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(time1, Bridge.IEquatable$1(Bridge.TimeSpan))), time3));
    },
    toStringWorks: function () {
        var time1 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time2 = new Bridge.TimeSpan(14, 10, 20, 5, 2);
        var time3 = new Bridge.TimeSpan(15, 11, 20, 6, 14);
        var time4 = new Bridge.TimeSpan(1, 2, 3);
        Bridge.Test.Assert.areEqual(time1.toString(), "15.10:20:05.0140000");
        Bridge.Test.Assert.areEqual(time2.toString(), "14.10:20:05.0020000");
        Bridge.Test.Assert.areEqual(time3.toString(), "15.11:20:06.0140000");
        Bridge.Test.Assert.areEqual(time4.toString(), "01:02:03");
    },
    addWorks: function () {
        var time1 = new Bridge.TimeSpan(2, 3, 4, 5, 6);
        var time2 = new Bridge.TimeSpan(3, 4, 5, 6, 7);
        var actual = time1.add(time2);
        Bridge.Test.Assert.true$1(Bridge.is(actual, Bridge.TimeSpan), "Should be TimeSpan");
        Bridge.Test.Assert.areEqual$1(actual.getTotalMilliseconds(), 457751013, "TotalMilliseconds should be correct");
    },
    subtractWorks: function () {
        var time1 = new Bridge.TimeSpan(4, 3, 7, 2, 6);
        var time2 = new Bridge.TimeSpan(3, 4, 5, 6, 7);
        var actual = time1.subtract(time2);
        Bridge.Test.Assert.true$1(Bridge.is(actual, Bridge.TimeSpan), "Should be TimeSpan");
        Bridge.Test.Assert.areEqual$1(actual.getTotalMilliseconds(), 82915999, "TotalMilliseconds should be correct");
    },
    durationWorks: function () {
        var time1 = new Bridge.TimeSpan(-3, -2, -1, -5, -4);
        var time2 = new Bridge.TimeSpan(2, 1, 5, 4, 3);
        var actual1 = time1.duration();
        var actual2 = time2.duration();
        Bridge.Test.Assert.true$1(Bridge.is(time1, Bridge.TimeSpan), "Should be TimeSpan");
        Bridge.Test.Assert.areEqual$1(actual1.getTotalMilliseconds(), 266465004, "Negative should be negated");
        Bridge.Test.Assert.areEqual$1(actual2.getTotalMilliseconds(), 176704003, "Positive should be preserved");
    },
    negateWorks: function () {
        var time = new Bridge.TimeSpan(-3, 2, -1, 5, -4);
        var actual = time.negate();
        Bridge.Test.Assert.true$1(Bridge.is(actual, Bridge.TimeSpan), "Should be TimeSpan");
        Bridge.Test.Assert.areEqual$1(actual.getTotalMilliseconds(), 252055004, "Ticks should be correct");
    },
    assertAlmostEqual: function (d1, d2) {
        var diff = d2 - d1;
        if (diff < 0)
            diff = -diff;
        Bridge.Test.Assert.$true(diff < 1E-08);
    },
    comparisonOperatorsWork: function () {
        var time1 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time2 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time3 = new Bridge.TimeSpan(14, 10, 20, 5, 14);
        var time4 = new Bridge.TimeSpan(15, 11, 20, 5, 14);

        Bridge.Test.Assert.false$1(time1.ticks > time2.ticks, "> 1");
        Bridge.Test.Assert.true$1(time1.ticks > time3.ticks, "> 2");
        Bridge.Test.Assert.false$1(time1.ticks > time4.ticks, "> 3");

        Bridge.Test.Assert.true$1(time1.ticks >= time2.ticks, ">= 1");
        Bridge.Test.Assert.true$1(time1.ticks >= time3.ticks, ">= 2");
        Bridge.Test.Assert.false$1(time1.ticks >= time4.ticks, ">= 3");

        Bridge.Test.Assert.false$1(time1.ticks < time2.ticks, "< 1");
        Bridge.Test.Assert.false$1(time1.ticks < time3.ticks, "< 2");
        Bridge.Test.Assert.true$1(time1.ticks < time4.ticks, "< 3");

        Bridge.Test.Assert.true$1(time1.ticks <= time2.ticks, "<= 1");
        Bridge.Test.Assert.false$1(time1.ticks <= time3.ticks, "<= 2");
        Bridge.Test.Assert.true$1(time1.ticks <= time4.ticks, "<= 3");

        Bridge.Test.Assert.true$1(time1.ticks === time1.ticks, "== 1");
        Bridge.Test.Assert.true$1(time1.ticks === time2.ticks, "== 2");
        Bridge.Test.Assert.false$1(time1.ticks === time3.ticks, "== 3");
        Bridge.Test.Assert.false$1(time1.ticks === time4.ticks, "== 4");

        Bridge.Test.Assert.false$1(time1.ticks !== time1.ticks, "!= 1");
        Bridge.Test.Assert.false$1(time1.ticks !== time2.ticks, "!= 2");
        Bridge.Test.Assert.true$1(time1.ticks !== time3.ticks, "!= 3");
        Bridge.Test.Assert.true$1(time1.ticks !== time4.ticks, "!= 4");
    },
    additionOperatorWorks: function () {
        var time1 = new Bridge.TimeSpan(2, 3, 4, 5, 6);
        var time2 = new Bridge.TimeSpan(3, 4, 5, 6, 7);
        var actual = new Bridge.TimeSpan(time1.ticks + time2.ticks);
        Bridge.Test.Assert.true$1(Bridge.is(actual, Bridge.TimeSpan), "Should be TimeSpan");
        Bridge.Test.Assert.areEqual$1(actual.getTotalMilliseconds(), 457751013, "TotalMilliseconds should be correct");
    },
    subtractionOperatorWorks: function () {
        var time1 = new Bridge.TimeSpan(4, 3, 7, 2, 6);
        var time2 = new Bridge.TimeSpan(3, 4, 5, 6, 7);
        var actual = new Bridge.TimeSpan(time1.ticks - time2.ticks);
        Bridge.Test.Assert.true$1(Bridge.is(actual, Bridge.TimeSpan), "Should be TimeSpan");
        Bridge.Test.Assert.areEqual$1(actual.getTotalMilliseconds(), 82915999, "TotalMilliseconds should be correct");
    },
    unaryPlusWorks: function () {
        var time = new Bridge.TimeSpan(-3, 2, -1, 5, -4);
        var actual = new Bridge.TimeSpan(time.ticks);
        Bridge.Test.Assert.true$1(Bridge.is(actual, Bridge.TimeSpan), "Should be TimeSpan");
        Bridge.Test.Assert.areEqual$1(actual.getTotalMilliseconds(), -252055004, "Ticks should be correct");
    },
    unaryMinusWorks: function () {
        var time = new Bridge.TimeSpan(-3, 2, -1, 5, -4);
        var actual = new Bridge.TimeSpan(-time.ticks);
        Bridge.Test.Assert.true$1(Bridge.is(actual, Bridge.TimeSpan), "Should be TimeSpan");
        Bridge.Test.Assert.areEqual$1(actual.getTotalMilliseconds(), 252055004, "Ticks should be correct");
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.TupleTests', {
    tuple1Works: function () {
        for (var i = 0; i <= 1; i++) {
            var t = i === 0 ? { item1: "a" } : { item1: "a" };
            Bridge.Test.Assert.areStrictEqual(t.item1, "a");
        }
    },
    tuple2Works: function () {
        for (var i = 0; i <= 1; i++) {
            var t = i === 0 ? { item1: "a", item2: "b" } : { item1: "a", item2: "b" };
            Bridge.Test.Assert.areStrictEqual(t.item1, "a");
            Bridge.Test.Assert.areStrictEqual(t.item2, "b");
        }
    },
    tuple3Works: function () {
        for (var i = 0; i <= 1; i++) {
            var t = i === 0 ? { item1: "a", item2: "b", item3: "c" } : { item1: "a", item2: "b", item3: "c" };
            Bridge.Test.Assert.areStrictEqual(t.item1, "a");
            Bridge.Test.Assert.areStrictEqual(t.item2, "b");
            Bridge.Test.Assert.areStrictEqual(t.item3, "c");
        }
    },
    tuple4Works: function () {
        for (var i = 0; i <= 1; i++) {
            var t = i === 0 ? { item1: "a", item2: "b", item3: "c", item4: "d" } : { item1: "a", item2: "b", item3: "c", item4: "d" };
            Bridge.Test.Assert.areStrictEqual(t.item1, "a");
            Bridge.Test.Assert.areStrictEqual(t.item2, "b");
            Bridge.Test.Assert.areStrictEqual(t.item3, "c");
            Bridge.Test.Assert.areStrictEqual(t.item4, "d");
        }
    },
    tuple5Works: function () {
        for (var i = 0; i <= 1; i++) {
            var t = i === 0 ? { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e" } : { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e" };
            Bridge.Test.Assert.areStrictEqual(t.item1, "a");
            Bridge.Test.Assert.areStrictEqual(t.item2, "b");
            Bridge.Test.Assert.areStrictEqual(t.item3, "c");
            Bridge.Test.Assert.areStrictEqual(t.item4, "d");
            Bridge.Test.Assert.areStrictEqual(t.item5, "e");
        }
    },
    tuple6Works: function () {
        for (var i = 0; i <= 1; i++) {
            var t = i === 0 ? { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e", item6: "f" } : { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e", item6: "f" };
            Bridge.Test.Assert.areStrictEqual(t.item1, "a");
            Bridge.Test.Assert.areStrictEqual(t.item2, "b");
            Bridge.Test.Assert.areStrictEqual(t.item3, "c");
            Bridge.Test.Assert.areStrictEqual(t.item4, "d");
            Bridge.Test.Assert.areStrictEqual(t.item5, "e");
            Bridge.Test.Assert.areStrictEqual(t.item6, "f");
        }
    },
    tuple7Works: function () {
        for (var i = 0; i <= 1; i++) {
            var t = i === 0 ? { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e", item6: "f", item7: "g" } : { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e", item6: "f", item7: "g" };
            Bridge.Test.Assert.areStrictEqual(t.item1, "a");
            Bridge.Test.Assert.areStrictEqual(t.item2, "b");
            Bridge.Test.Assert.areStrictEqual(t.item3, "c");
            Bridge.Test.Assert.areStrictEqual(t.item4, "d");
            Bridge.Test.Assert.areStrictEqual(t.item5, "e");
            Bridge.Test.Assert.areStrictEqual(t.item6, "f");
            Bridge.Test.Assert.areStrictEqual(t.item7, "g");
        }
    },
    tuple8Works: function () {
        for (var i = 0; i <= 1; i++) {
            var t = i === 0 ? { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e", item6: "f", item7: "g", rest: "h" } : { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e", item6: "f", item7: "g", rest: "h" };
            Bridge.Test.Assert.areStrictEqual(t.item1, "a");
            Bridge.Test.Assert.areStrictEqual(t.item2, "b");
            Bridge.Test.Assert.areStrictEqual(t.item3, "c");
            Bridge.Test.Assert.areStrictEqual(t.item4, "d");
            Bridge.Test.Assert.areStrictEqual(t.item5, "e");
            Bridge.Test.Assert.areStrictEqual(t.item6, "f");
            Bridge.Test.Assert.areStrictEqual(t.item7, "g");
            Bridge.Test.Assert.areStrictEqual(t.rest, "h");
        }
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.UInt16Tests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(0, Bridge.Int), Bridge.Int));
        Bridge.Test.Assert.$false(Bridge.is(0.5, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(-1, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(65536, Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");

        var s = Bridge.cast(0, Bridge.Int);
        Bridge.Test.Assert.$true(Bridge.is(s, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(s, Bridge.IComparable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(s, Bridge.IEquatable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(s, Bridge.IFormattable));
    },
    castsWork: function () {
        var i1 = -1, i2 = 0, i3 = 234, i4 = 65535, i5 = 65536;
        var ni1 = -1, ni2 = 0, ni3 = 234, ni4 = 65535, ni5 = 65536, ni6 = null;

        // TODO unchecked
        {
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i1, Bridge.Int), -1, "-1 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i2, Bridge.Int), 0, "0 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 234, "234 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 65535, "65535 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i5, Bridge.Int), 65536, "65536 unchecked");

            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni1, Bridge.Int, true), -1, "nullable -1 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni2, Bridge.Int, true), 0, "nullable 0 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni3, Bridge.Int, true), 234, "nullable 234 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni4, Bridge.Int, true), 65535, "nullable 65535 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni5, Bridge.Int, true), 65536, "nullable 65536 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni6, Bridge.Int, true), null, "null unchecked");
        }

        //checked
        {
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i2, Bridge.Int), 0, "0 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 234, "234 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 65535, "65535 checked");

            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni2, Bridge.Int, true), 0, "nullable 0 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni3, Bridge.Int, true), 234, "nullable 234 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni4, Bridge.Int, true), 65535, "nullable 65535 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni6, Bridge.Int, true), null, "null checked");
        }
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.Test.Assert.areStrictEqual(this.getDefaultValue(Bridge.Int)(), 0);
    },
    defaultConstructorReturnsZero: function () {
        Bridge.Test.Assert.areStrictEqual(Number(), 0);
    },
    creatingInstanceReturnsZero: function () {
        Bridge.Test.Assert.areStrictEqual(new Bridge.Int(), 0);
    },
    constantsWork: function () {
        Bridge.Test.Assert.areEqual(0, 0);
        Bridge.Test.Assert.areEqual(65535, 65535);
    },
    formatWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(291, Bridge.Int)), "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(291, Bridge.Int)), "x"), "123");
    },
    tryParseWorks: function () {
        var numberResult = { };
        var result = Bridge.Int.tryParseInt("23445", numberResult, 0, 65535);
        Bridge.Test.Assert.$true(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 23445);

        result = Bridge.Int.tryParseInt("", numberResult, 0, 65535);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt(null, numberResult, 0, 65535);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("notanumber", numberResult, 0, 65535);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("32768", numberResult, 0, 65535);
        Bridge.Test.Assert.$true(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 32768);

        result = Bridge.Int.tryParseInt("-1", numberResult, 0, 65535);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, -1);

        result = Bridge.Int.tryParseInt("2.5", numberResult, 0, 65535);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);
    },
    parseWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.parseInt("23445", 0, 65535), 23445);
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("", 0, 65535);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt(null, 0, 65535);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("notanumber", 0, 65535);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("65536", 0, 65535);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("-1", 0, 65535);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("2.5", 0, 65535);
        });
    },
    toStringWithoutRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(), "123");
    },
    toStringWithRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(10), "123");
        Bridge.Test.Assert.areEqual((Bridge.cast(291, Bridge.Int)).toString(16), "123");
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(0, Bridge.Int))));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(1, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
    },
    equalsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(1, Bridge.Int)));

        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)) < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.UInt32Tests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.$true(Bridge.is(0, Bridge.Int));
        Bridge.Test.Assert.$false(Bridge.is(0.5, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(-1, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(4294967296, Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");
        var i = Bridge.cast(0, Bridge.Int);
        Bridge.Test.Assert.$true(Bridge.is(i, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(i, Bridge.IComparable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(i, Bridge.IEquatable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(i, Bridge.IFormattable));
    },
    castsWork: function () {
        var i1 = -1, i2 = 0, i3 = 234, i4 = 4294967295, i5 = 4294967296;
        var ni1 = -1, ni2 = 0, ni3 = 234, ni4 = 4294967295, ni5 = 4294967296, ni6 = null;

        // TODO unchecked
        {
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i1, Bridge.Int), -1, "-1 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i2, Bridge.Int), 0, "0 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 234, "234 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 4294967295, "4294967295 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i5, Bridge.Int), 4294967296, "4294967296 unchecked");

            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni1, Bridge.Int, true), -1, "nullable -1 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni2, Bridge.Int, true), 0, "nullable 0 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni3, Bridge.Int, true), 234, "nullable 234 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni4, Bridge.Int, true), 4294967295, "nullable 4294967295 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni5, Bridge.Int, true), 4294967296, "nullable 4294967296 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni6, Bridge.Int, true), null, "null unchecked");
        }

        //checked
        {
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i2, Bridge.Int), 0, "0 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 234, "234 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 4294967295, "4294967295 checked");

            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni2, Bridge.Int, true), 0, "nullable 0 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni3, Bridge.Int, true), 234, "nullable 234 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni4, Bridge.Int, true), 4294967295, "nullable 4294967295 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni6, Bridge.Int, true), null, "null checked");
        }
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.Test.Assert.areStrictEqual(this.getDefaultValue(Bridge.Int)(), 0);
    },
    defaultConstructorReturnsZero: function () {
        Bridge.Test.Assert.areStrictEqual(Number(), 0);
    },
    creatingInstanceReturnsZero: function () {
        Bridge.Test.Assert.areStrictEqual(new Bridge.Int(), 0);
    },
    constantsWork: function () {
        Bridge.Test.Assert.areEqual(0, 0);
        Bridge.Test.Assert.areEqual(4294967295, 4294967295);
    },
    formatWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(291, Bridge.Int)), "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(291, Bridge.Int)), "x"), "123");
    },
    tryParseWorks: function () {
        var numberResult = { };
        var result = Bridge.Int.tryParseInt("23445", numberResult, 0, 4294967295);
        Bridge.Test.Assert.$true(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 23445);

        result = Bridge.Int.tryParseInt("", numberResult, 0, 4294967295);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt(null, numberResult, 0, 4294967295);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("notanumber", numberResult, 0, 4294967295);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("-1", numberResult, 0, 4294967295);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, -1);

        result = Bridge.Int.tryParseInt("2.5", numberResult, 0, 4294967295);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);
    },
    parseWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.parseInt("23445", 0, 4294967295), 23445);
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("", 0, 4294967295);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt(null, 0, 4294967295);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("notanumber", 0, 4294967295);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("4294967296", 0, 4294967295);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("-1", 0, 4294967295);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("2.5", 0, 4294967295);
        });
    },
    toStringWithoutRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(), "123");
    },
    toStringWithRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(10), "123");
        Bridge.Test.Assert.areEqual((Bridge.cast(291, Bridge.Int)).toString(16), "123");
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(0, Bridge.Int))));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(1, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
    },
    equalsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(1, Bridge.Int)));

        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)) < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.UInt64Tests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(0, Bridge.Int), Bridge.Int));
        Bridge.Test.Assert.$false(Bridge.is(0.5, Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");
        var l = Bridge.cast(0, Bridge.Int);
        Bridge.Test.Assert.$true(Bridge.is(l, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(l, Bridge.IComparable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(l, Bridge.IEquatable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(l, Bridge.IFormattable));
    },
    castsWork: function () {
        var i2 = 0, i3 = 234, i4 = 9223372036854775000;
        var ni2 = 0, ni3 = 234, ni4 = 9223372036854775000, ni6 = null;

        // TODO unchecked
        {
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i2, Bridge.Int), 0, "0 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 234, "234 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 9223372036854775000, "9223372036854775000 unchecked");

            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni2, Bridge.Int, true), 0, "nullable 0 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni3, Bridge.Int, true), 234, "nullable 234 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni4, Bridge.Int, true), 9223372036854775000, "nullable 9223372036854775000 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni6, Bridge.Int, true), null, "null unchecked");
        }

        //checked
        {
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i2, Bridge.Int), 0, "0 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 234, "234 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 9223372036854775000, "9223372036854775000 checked");

            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni2, Bridge.Int, true), 0, "nullable 0 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni3, Bridge.Int, true), 234, "nullable 234 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni4, Bridge.Int, true), 9223372036854775000, "nullable 9223372036854775000 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(ni6, Bridge.Int, true), null, "null checked");
        }
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.Test.Assert.areStrictEqual(this.getDefaultValue(Bridge.Int)(), 0);
    },
    defaultConstructorReturnsZero: function () {
        Bridge.Test.Assert.areStrictEqual(Number(), 0);
    },
    creatingInstanceReturnsZero: function () {
        Bridge.Test.Assert.areStrictEqual(new Bridge.Int(), 0);
    },
    constantsWork: function () {
        Bridge.Test.Assert.areEqual(0, 0);
    },
    formatWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(291, Bridge.Int)), "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(291, Bridge.Int)), "x"), "123");
    },
    castingOfLargeValuesToUInt64Works: function () {
        var d1 = 5000000000.5, d2 = -d1;
        Bridge.Test.Assert.areEqual$1(Bridge.Int.trunc(d1), 5000000000, "Positive");
        Bridge.Test.Assert.false$1(Bridge.Int.trunc(d2) > 2147483647, "Negative");
    },
    divisionOfLargeUInt64Works: function () {
        var v1 = 50000000000, v2 = 3;
        Bridge.Test.Assert.areEqual(Bridge.Int.div(v1, v2), 16666666666);
    },
    tryParseWorks: function () {
        var numberResult = { };
        var result = Bridge.Int.tryParseInt("23445", numberResult, 0, 9007199254740991);
        Bridge.Test.Assert.$true(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 23445);

        result = Bridge.Int.tryParseInt("", numberResult, 0, 9007199254740991);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt(null, numberResult, 0, 9007199254740991);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("notanumber", numberResult, 0, 9007199254740991);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("-1", numberResult, 0, 9007199254740991);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, -1);

        result = Bridge.Int.tryParseInt("2.5", numberResult, 0, 9007199254740991);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("100000000000000000000", numberResult, 0, 9007199254740991);
        Bridge.Test.Assert.$false(result);
        //Assert.AreEqual(numberResult, 100000000000000000000);
    },
    parseWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.parseInt("23445", 0, 9007199254740991), 23445);
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("", 0, 9007199254740991);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt(null, 0, 9007199254740991);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("notanumber", 0, 9007199254740991);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("-1", 0, 9007199254740991);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("2.5", 0, 9007199254740991);
        });
        Bridge.Test.Assert.$throws(function () {
            return Bridge.Int.parseInt("100000000000000000000", 0, 9007199254740991);
        });
    },
    toStringWithoutRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(), "123");
    },
    toStringWithRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(10), "123");
        Bridge.Test.Assert.areEqual((Bridge.cast(291, Bridge.Int)).toString(16), "123");
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(0, Bridge.Int))));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(1, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
    },
    equalsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(1, Bridge.Int)));

        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)) < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    }
});

Bridge.define('Bridge.ClientTest.Text.RegularExpressions.RegexTests', {
    statics: {
        escapeWorks: function () {
            var escaped = Bridge.regexpEscape("[-/\\^$*+?.()|[]{}]");
            Bridge.Test.Assert.areEqual(escaped, "\\[\\-\\/\\\\\\^\\$\\*\\+\\?\\.\\(\\)\\|\\[\\]\\{\\}\\]");
        }
    },
    typePropertiesAreCorrect: function () {
        var re = new RegExp("");
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(RegExp), "RegExp");
        Bridge.Test.Assert.$true(true);
    },
    stringOnlyConstructorWorks: function () {
        var re = new RegExp("test123");
        Bridge.Test.Assert.areEqual(re.source, "test123");
        Bridge.Test.Assert.$false(re.global);
    },
    constructorWithFlagsWorks: function () {
        var re = new RegExp("test123", "g");
        Bridge.Test.Assert.areEqual(re.source, "test123");
        Bridge.Test.Assert.$true(re.global);
    },
    globalFlagWorks: function () {
        Bridge.Test.Assert.$false(new RegExp("x", "").global);
        Bridge.Test.Assert.$true(new RegExp("x", "g").global);
    },
    ignoreCaseFlagWorks: function () {
        Bridge.Test.Assert.$false(new RegExp("x", "").ignoreCase);
        Bridge.Test.Assert.$true(new RegExp("x", "i").ignoreCase);
    },
    multilineFlagWorks: function () {
        Bridge.Test.Assert.$false(new RegExp("x", "").multiline);
        Bridge.Test.Assert.$true(new RegExp("x", "m").multiline);
    },
    patternPropertyWorks: function () {
        Bridge.Test.Assert.areEqual(new RegExp("test123", "").source, "test123");
    },
    sourcePropertyWorks: function () {
        Bridge.Test.Assert.areEqual(new RegExp("test123", "").source, "test123");
    },
    execWorks: function () {
        var re = new RegExp("a|b", "g");
        var m = re.exec("xaybz");
        //Assert.AreEqual(m.Index, 1);
        Bridge.Test.Assert.areEqual(m.length, 1);
        Bridge.Test.Assert.areEqual(m[0], "a");
    },
    lastIndexWorks: function () {
        var re = new RegExp("a|b", "g");
        re.exec("xaybz");
        Bridge.Test.Assert.areEqual(re.lastIndex, 2);
    },
    testWorks: function () {
        Bridge.Test.Assert.$true(new RegExp("a|b").test("xaybz"));
        Bridge.Test.Assert.$false(new RegExp("c").test("xaybz"));
    }
});

Bridge.define('Bridge.ClientTest.Text.StringBuilderTests', {
    typePropertiesAreCorrect: function () {
        var sb = new Bridge.Text.StringBuilder();
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.Text.StringBuilder), "Bridge.Text.StringBuilder");
        Bridge.Test.Assert.$true(true);
    },
    defaultConstructorWorks: function () {
        var sb = new Bridge.Text.StringBuilder();
        Bridge.Test.Assert.areEqual$1(sb.toString(), "", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 0, "Length");
    },
    constructorWithCapacityWorks: function () {
        var sb = new Bridge.Text.StringBuilder("", 55);
        Bridge.Test.Assert.areEqual$1(sb.toString(), "", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 0, "Length");
    },
    initialTextConstructorWorks: function () {
        var sb = new Bridge.Text.StringBuilder("some text");
        Bridge.Test.Assert.areEqual$1(sb.toString(), "some text", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 9, "Length");
    },
    initialTextConstructorWithCapacityWorks: function () {
        var sb = new Bridge.Text.StringBuilder("some text", 55);
        Bridge.Test.Assert.areEqual$1(sb.toString(), "some text", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 9, "Length");
    },
    substringConstructorWorks: function () {
        var sb = new Bridge.Text.StringBuilder("some text", 5, 3);
        Bridge.Test.Assert.areEqual$1(sb.toString(), "tex", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 3, "Length");
    },
    appendBoolWorks: function () {
        var sb = new Bridge.Text.StringBuilder("|");
        Bridge.Test.Assert.$true(sb.append(true) === sb);
        Bridge.Test.Assert.areEqual$1(sb.toString(), "|true", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 5, "Length");
    },
    appendCharWorks: function () {
        var sb = new Bridge.Text.StringBuilder("|");
        Bridge.Test.Assert.$true(sb.append(String.fromCharCode(99)) === sb);
        Bridge.Test.Assert.areEqual$1(sb.toString(), "|c", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 2, "Length");
    },
    appendIntWorks: function () {
        var sb = new Bridge.Text.StringBuilder("|");
        Bridge.Test.Assert.$true(sb.append(123) === sb);
        Bridge.Test.Assert.areEqual$1(sb.toString(), "|123", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 4, "Length");
    },
    appendDoubleWorks: function () {
        var sb = new Bridge.Text.StringBuilder("|");
        Bridge.Test.Assert.$true(sb.append(123.0) === sb);
        Bridge.Test.Assert.areEqual$1(sb.toString(), "|123", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 4, "Length");
    },
    appendObjectWorks: function () {
        var sb = new Bridge.Text.StringBuilder("|");
        Bridge.Test.Assert.$true(sb.append(new Bridge.ClientTest.Text.StringBuilderTests.SomeClass()) === sb);
        Bridge.Test.Assert.areEqual$1(sb.toString(), "|some text", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 10, "Length");
    },
    appendStringWorks: function () {
        var sb = new Bridge.Text.StringBuilder("|");
        Bridge.Test.Assert.$true(sb.append("some text") === sb);
        Bridge.Test.Assert.areEqual$1(sb.toString(), "|some text", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 10, "Length");
    },
    appendLineWorks: function () {
        var sb = new Bridge.Text.StringBuilder("|");
        Bridge.Test.Assert.$true(sb.appendLine() === sb);
        Bridge.Test.Assert.areEqual$1(sb.toString(), "|\r\n", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 3, "Length");
    },
    appendLineStringWorks: function () {
        var sb = new Bridge.Text.StringBuilder("|");
        Bridge.Test.Assert.$true(sb.appendLine("some text") === sb);
        Bridge.Test.Assert.areEqual$1(sb.toString(), "|some text\r\n", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 12, "Length");
    },
    clearWorks: function () {
        var sb = new Bridge.Text.StringBuilder("some text");
        sb.clear();
        Bridge.Test.Assert.areEqual$1(sb.toString(), "", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 0, "Length");
    },
    toStringWorks: function () {
        // Yes, this is tested by every other test as well. Included for completeness only
        var sb = new Bridge.Text.StringBuilder("some text");
        Bridge.Test.Assert.areEqual(sb.toString(), "some text");
    },
    lengthPropertyWorks: function () {
        // Yes, this is tested by every other test as well. Included for completeness only
        var sb = new Bridge.Text.StringBuilder("some text");
        Bridge.Test.Assert.areEqual(sb.getLength(), 9);
    }
});

Bridge.define('Bridge.ClientTest.Text.StringBuilderTests.SomeClass', {
    toString: function () {
        return "some text";
    }
});