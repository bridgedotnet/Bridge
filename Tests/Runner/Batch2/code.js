(function (globals) {
    "use strict";

    Bridge.define('Bridge.ClientTestOne.BridgeIssues.N772', {
        typePropertiesAreCorrect: function () {
            var arr = [1, 2, 3];
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(arr, Array), "is Array should be true");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(arr, Array), "is int[] should be true");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(arr, Bridge.ICollection), "is ICollection should be true");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(arr, Bridge.IEnumerable), "is IEnumerable should be true");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(arr, Bridge.ICloneable), "is ICloneable should be true");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(arr, Bridge.ICollection$1(Bridge.Int)), "is ICollection<int> should be true");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(arr, Bridge.IEnumerable$1(Bridge.Int)), "is IEnumerable<int> should be true");
            Bridge.get(Bridge.Test.Assert).true$1(Bridge.is(arr, Bridge.IList$1(Bridge.Int)), "is IList<int> should be true");
        },
        lengthWorks: function () {
            Bridge.get(Bridge.Test.Assert).areEqual(0, new Int32Array(0).length);
            Bridge.get(Bridge.Test.Assert).areEqual(1, ["x"].length);
            Bridge.get(Bridge.Test.Assert).areEqual(2, ["x", "y"].length);
        },
        rankIsOne: function () {
            Bridge.get(Bridge.Test.Assert).areEqual(1, Bridge.Array.getRank(new Int32Array(0)));
        },
        getLengthWorks: function () {
            Bridge.get(Bridge.Test.Assert).areEqual(0, Bridge.Array.getLength(new Int32Array(0), 0));
            Bridge.get(Bridge.Test.Assert).areEqual(1, Bridge.Array.getLength(["x"], 0));
            Bridge.get(Bridge.Test.Assert).areEqual(2, Bridge.Array.getLength(["x", "y"], 0));
        },
        getLowerBound: function () {
            Bridge.get(Bridge.Test.Assert).areEqual(0, Bridge.Array.getLower(new Int32Array(0), 0));
            Bridge.get(Bridge.Test.Assert).areEqual(0, Bridge.Array.getLower(["x"], 0));
            Bridge.get(Bridge.Test.Assert).areEqual(0, Bridge.Array.getLower(["x", "y"], 0));
        },
        getUpperBoundWorks: function () {
            Bridge.get(Bridge.Test.Assert).areEqual(-1, (Bridge.Array.getLength(new Int32Array(0), 0) - 1));
            Bridge.get(Bridge.Test.Assert).areEqual(0, (Bridge.Array.getLength(["x"], 0) - 1));
            Bridge.get(Bridge.Test.Assert).areEqual(1, (Bridge.Array.getLength(["x", "y"], 0) - 1));
        },
        gettingValueByIndexWorks: function () {
            Bridge.get(Bridge.Test.Assert).areEqual("x", ["x", "y"][0]);
            Bridge.get(Bridge.Test.Assert).areEqual("y", ["x", "y"][1]);
        },
        getValueWorks: function () {
            Bridge.get(Bridge.Test.Assert).areEqual("x", Bridge.Array.get(["x", "y"], 0));
            Bridge.get(Bridge.Test.Assert).areEqual("y", Bridge.Array.get(["x", "y"], 1));
        },
        settingValueByIndexWorks: function () {
            var arr = Bridge.Array.init(2, null);
            arr[0] = "x";
            arr[1] = "y";
            Bridge.get(Bridge.Test.Assert).areEqual("x", arr[0]);
            Bridge.get(Bridge.Test.Assert).areEqual("y", arr[1]);
        },
        setValueWorks: function () {
            var arr = Bridge.Array.init(2, null);
            Bridge.Array.set(arr, "x", 0);
            Bridge.Array.set(arr, "y", 1);
            Bridge.get(Bridge.Test.Assert).areEqual("x", arr[0]);
            Bridge.get(Bridge.Test.Assert).areEqual("y", arr[1]);
        },
        foreachWorks: function () {
            var $t;
            var result = "";
            $t = Bridge.getEnumerator(["x", "y"]);
            while ($t.moveNext()) {
                var s = $t.getCurrent();
                result += s;
            }
            Bridge.get(Bridge.Test.Assert).areEqual("xy", result);
        },
        cloneWorks: function () {
            var arr = ["x", "y"];
            var arr2 = (Bridge.Array.clone(arr));
            Bridge.get(Bridge.Test.Assert).$false(arr === arr2);
            Bridge.get(Bridge.Test.Assert).areDeepEqual(arr2, arr);
        },
        concatWorks: function () {
            var arr = ["a", "b"];
            Bridge.get(Bridge.Test.Assert).areDeepEqual(["a", "b", "c"], arr.concat("c"));
            Bridge.get(Bridge.Test.Assert).areDeepEqual(["a", "b", "c", "d"], arr.concat("c", "d"));
            Bridge.get(Bridge.Test.Assert).areDeepEqual(["a", "b"], arr);
        },
        containsWorks: function () {
            var arr = ["x", "y"];
            Bridge.get(Bridge.Test.Assert).$true(Bridge.Linq.Enumerable.from(arr).contains("x"));
            Bridge.get(Bridge.Test.Assert).$false(Bridge.Linq.Enumerable.from(arr).contains("z"));
        },
        containsUsesEqualsMethod: function () {
            var arr = [new Bridge.ClientTestOne.BridgeIssues.N772.C(1), new Bridge.ClientTestOne.BridgeIssues.N772.C(2), new Bridge.ClientTestOne.BridgeIssues.N772.C(3)];
            Bridge.get(Bridge.Test.Assert).$true(Bridge.Linq.Enumerable.from(arr).contains(new Bridge.ClientTestOne.BridgeIssues.N772.C(2)));
            Bridge.get(Bridge.Test.Assert).$false(Bridge.Linq.Enumerable.from(arr).contains(new Bridge.ClientTestOne.BridgeIssues.N772.C(4)));
        },
        allWithArrayItemFilterCallbackWorks: function () {
            Bridge.get(Bridge.Test.Assert).$true(Bridge.Linq.Enumerable.from([1, 2, 3]).all($_.Bridge.ClientTestOne.BridgeIssues.N772.f1));
            Bridge.get(Bridge.Test.Assert).$false(Bridge.Linq.Enumerable.from([1, 2, 3]).all($_.Bridge.ClientTestOne.BridgeIssues.N772.f2));
        },
        sliceWithoutEndWorks: function () {
            Bridge.get(Bridge.Test.Assert).areDeepEqual(["c", "d"], ["a", "b", "c", "d"].slice(2));
            Bridge.get(Bridge.Test.Assert).areDeepEqual(["b", "c"], ["a", "b", "c", "d"].slice(1, 3));
        },
        foreachWithArrayItemCallbackWorks: function () {
            var result = "";
            Bridge.Linq.Enumerable.from(["a", "b", "c"]).forEach(function (s) {
                result += s;
            });
            Bridge.get(Bridge.Test.Assert).areEqual("abc", result);
        },
        foreachWithArrayCallbackWorks: function () {
            var result = "";
            Bridge.Linq.Enumerable.from(["a", "b", "c"]).forEach(function (s, i) {
                result += s + i;
            });
            Bridge.get(Bridge.Test.Assert).areEqual("a0b1c2", result);
        },
        indexOfWithoutStartIndexWorks: function () {
            Bridge.get(Bridge.Test.Assert).areEqual(1, ["a", "b", "c", "b"].indexOf("b"));
        },
        indexOfWithoutStartIndexUsesEqualsMethod: function () {
            var arr = [new Bridge.ClientTestOne.BridgeIssues.N772.C(1), new Bridge.ClientTestOne.BridgeIssues.N772.C(2), new Bridge.ClientTestOne.BridgeIssues.N772.C(3)];
            Bridge.get(Bridge.Test.Assert).areEqual(1, Bridge.Linq.Enumerable.from(arr).indexOf(new Bridge.ClientTestOne.BridgeIssues.N772.C(2)));
            Bridge.get(Bridge.Test.Assert).areEqual(-1, Bridge.Linq.Enumerable.from(arr).indexOf(new Bridge.ClientTestOne.BridgeIssues.N772.C(4)));
        },
        indexOfWithStartIndexWorks: function () {
            Bridge.get(Bridge.Test.Assert).areEqual(3, ["a", "b", "c", "b"].indexOf("b", 2));
        },
        joinWithoutDelimiterWorks: function () {
            Bridge.get(Bridge.Test.Assert).areEqual("a,b,c,b", ["a", "b", "c", "b"].join(","));
    
            Bridge.get(Bridge.Test.Assert).areEqual("a|b|c|b", ["a", "b", "c", "b"].join("|"));
        },
        reverseWorks: function () {
            var arr = [1, 3, 4, 1, 3, 2];
            arr.reverse();
            Bridge.get(Bridge.Test.Assert).areDeepEqual([2, 3, 1, 4, 3, 1], arr);
        },
        anyWithArrayItemFilterCallbackWorks: function () {
            Bridge.get(Bridge.Test.Assert).$true(Bridge.Linq.Enumerable.from([1, 2, 3, 4]).any($_.Bridge.ClientTestOne.BridgeIssues.N772.f3));
            Bridge.get(Bridge.Test.Assert).$false(Bridge.Linq.Enumerable.from([1, 2, 3, 4]).any($_.Bridge.ClientTestOne.BridgeIssues.N772.f4));
        },
        binarySearch1Works: function () {
            var arr = [1, 2, 3, 3, 4, 5];
    
            Bridge.get(Bridge.Test.Assert).areEqual(2, Bridge.Array.binarySearch(arr, 0, arr.length, 3));
            Bridge.get(Bridge.Test.Assert).$true(Bridge.Array.binarySearch(arr, 0, arr.length, 6) < 0);
        },
        binarySearch2Works: function () {
            var arr = [1, 2, 3, 3, 4, 5];
    
            Bridge.get(Bridge.Test.Assert).areEqual(3, Bridge.Array.binarySearch(arr, 3, 2, 3));
            Bridge.get(Bridge.Test.Assert).$true(Bridge.Array.binarySearch(arr, 2, 2, 4) < 0);
        },
        binarySearch3Works: function () {
            var arr = [1, 2, 3, 3, 4, 5];
    
            Bridge.get(Bridge.Test.Assert).areEqual(2, Bridge.Array.binarySearch(arr, 0, arr.length, 3, new Bridge.ClientTestOne.BridgeIssues.N772.TestReverseComparer()));
            Bridge.get(Bridge.Test.Assert).areEqual(-1, Bridge.Array.binarySearch(arr, 0, arr.length, 6, new Bridge.ClientTestOne.BridgeIssues.N772.TestReverseComparer()));
        },
        binarySearch4Works: function () {
            var arr = [1, 2, 3, 3, 4, 5];
    
            Bridge.get(Bridge.Test.Assert).areEqual(3, Bridge.Array.binarySearch(arr, 3, 2, 3, new Bridge.ClientTestOne.BridgeIssues.N772.TestReverseComparer()));
            Bridge.get(Bridge.Test.Assert).$true(Bridge.Array.binarySearch(arr, 3, 2, 4, new Bridge.ClientTestOne.BridgeIssues.N772.TestReverseComparer()) < 0);
        },
        binarySearchExceptionsWorks: function () {
            var arr1 = null;
            var arr2 = [1, 2, 3, 3, 4, 5];
    
            Bridge.get(Bridge.Test.Assert).$throws(function () {
                Bridge.Array.binarySearch(arr1, 0, arr1.length, 1);
            });
            Bridge.get(Bridge.Test.Assert).$throws(function () {
                Bridge.Array.binarySearch(arr2, -1, 1, 1);
            });
            Bridge.get(Bridge.Test.Assert).$throws(function () {
                Bridge.Array.binarySearch(arr2, 1, 6, 1);
            });
        },
        sortWithDefaultCompareWorks: function () {
            var arr = [1, 6, 6, 4, 2];
            arr.sort();
            Bridge.get(Bridge.Test.Assert).areDeepEqual([1, 2, 4, 6, 6], arr);
        },
        sort1Works: function () {
            var arr = [1, 6, 6, 4, 2];
            Bridge.Array.sort(arr);
            Bridge.get(Bridge.Test.Assert).areDeepEqual([1, 2, 4, 6, 6], arr);
        },
        sort2Works: function () {
            var arr = [1, 6, 6, 4, 2];
            Bridge.Array.sort(arr, 2, 3);
            Bridge.get(Bridge.Test.Assert).areDeepEqual([1, 6, 2, 4, 6], arr);
        },
        sort3Works: function () {
            var arr = [1, 2, 6, 3, 6, 7];
            Bridge.Array.sort(arr, 2, 3, new Bridge.ClientTestOne.BridgeIssues.N772.TestReverseComparer());
            Bridge.get(Bridge.Test.Assert).areDeepEqual([1, 2, 6, 6, 3, 7], arr);
        },
        sort4Works: function () {
            var arr = [1, 6, 6, 4, 2];
            Bridge.Array.sort(arr, new Bridge.ClientTestOne.BridgeIssues.N772.TestReverseComparer());
            Bridge.get(Bridge.Test.Assert).areDeepEqual([6, 6, 4, 2, 1], arr);
        },
        sortExceptionsWorks: function () {
            var arr1 = null;
    
            Bridge.get(Bridge.Test.Assert).$throws(function () {
                Bridge.Array.sort(arr1);
            });
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
            Bridge.get(Bridge.Test.Assert).areEqual("xy", result);
        },
        iCollectionCountWorks: function () {
            var l = ["x", "y", "z"];
            Bridge.get(Bridge.Test.Assert).areEqual(3, Bridge.Array.getCount(l));
        },
        iCollectionAddWorks: function () {
            var l = ["x", "y", "z"];
            Bridge.Array.add(l, "a");
            Bridge.get(Bridge.Test.Assert).areDeepEqual(["x", "y", "z", "a"], l);
        },
        iCollectionClearWorks: function () {
            var l = ["x", "y", "z"];
            Bridge.Array.clear(l);
            Bridge.get(Bridge.Test.Assert).areDeepEqual(Bridge.Array.init(0, null), l);
        },
        iCollectionContainsWorks: function () {
            var l = ["x", "y", "z"];
            Bridge.get(Bridge.Test.Assert).$true(Bridge.Array.contains(l, "y"));
            Bridge.get(Bridge.Test.Assert).$false(Bridge.Array.contains(l, "a"));
        },
        iCollectionContainsUsesEqualsMethod: function () {
            var l = [new Bridge.ClientTestOne.BridgeIssues.N772.C(1), new Bridge.ClientTestOne.BridgeIssues.N772.C(2), new Bridge.ClientTestOne.BridgeIssues.N772.C(3)];
            Bridge.get(Bridge.Test.Assert).$true(Bridge.Array.contains(l, new Bridge.ClientTestOne.BridgeIssues.N772.C(2)));
            Bridge.get(Bridge.Test.Assert).$false(Bridge.Array.contains(l, new Bridge.ClientTestOne.BridgeIssues.N772.C(4)));
        },
        iCollectionRemoveWorks: function () {
            var l = ["x", "y", "z"];
            Bridge.get(Bridge.Test.Assert).$true(Bridge.Array.remove(l, "y"));
            Bridge.get(Bridge.Test.Assert).$false(Bridge.Array.remove(l, "a"));
            Bridge.get(Bridge.Test.Assert).areDeepEqual(["x", "z"], l);
        },
        iListIndexingWorks: function () {
            var l = ["x", "y", "z"];
            Bridge.get(Bridge.Test.Assert).areEqual("y", Bridge.Array.getItem(l, 1));
            Bridge.Array.setItem(l, 1, "a");
            Bridge.get(Bridge.Test.Assert).areDeepEqual(["x", "a", "z"], l);
        },
        iListIndexOfWorks: function () {
            var l = ["x", "y", "z"];
            Bridge.get(Bridge.Test.Assert).areEqual(1, Bridge.Array.indexOf(l, "y"));
            Bridge.get(Bridge.Test.Assert).areEqual(-1, Bridge.Array.indexOf(l, "a"));
        },
        iListIndexOfUsesEqualsMethod: function () {
            var arr = [new Bridge.ClientTestOne.BridgeIssues.N772.C(1), new Bridge.ClientTestOne.BridgeIssues.N772.C(2), new Bridge.ClientTestOne.BridgeIssues.N772.C(3)];
            Bridge.get(Bridge.Test.Assert).areEqual(1, Bridge.Linq.Enumerable.from(arr).indexOf(new Bridge.ClientTestOne.BridgeIssues.N772.C(2)));
            Bridge.get(Bridge.Test.Assert).areEqual(-1, Bridge.Linq.Enumerable.from(arr).indexOf(new Bridge.ClientTestOne.BridgeIssues.N772.C(4)));
        },
        iListInsertWorks: function () {
            var l = ["x", "y", "z"];
            Bridge.Array.insert(l, 1, "a");
            Bridge.get(Bridge.Test.Assert).areDeepEqual(["x", "a", "y", "z"], l);
        },
        iListRemoveAtWorks: function () {
            var l = ["x", "y", "z"];
            Bridge.Array.removeAt(l, 1);
            Bridge.get(Bridge.Test.Assert).areDeepEqual(["x", "z"], l);
        },
        issueSpecific: function () {
            var l = ["x", "y", "z"];
            Bridge.Array.removeAt(l, 1);
            Bridge.get(Bridge.Test.Assert).areDeepEqual(["x", "z"], l);
        },
        statics: {
            testUseCase: function () {
                //These arrays depend on "useTypedArray" bridge.json option
                var byteArray = new Uint8Array(1);
                var sbyteArray = new Int8Array(2);
                var shortArray = new Int16Array(3);
                var ushortArray = new Uint16Array(4);
                var intArray = new Int32Array(5);
                var uintArray = new Uint32Array(6);
                var floatArray = new Float32Array(7);
                var doubleArray = new Float64Array(8);
    
                //These arrays do not depend on "useTypedArray" bridge.json option
                var stringArray = Bridge.Array.init(9, null);
                var decimalArray = Bridge.Array.init(10, Bridge.Decimal(0.0));
    
                byteArray[0] = 1;
                sbyteArray[0] = 2;
                shortArray[0] = 3;
                ushortArray[0] = 4;
                intArray[0] = 5;
                uintArray[0] = 6;
                floatArray[0] = 7;
                doubleArray[0] = 8;
    
                stringArray[0] = "9";
                decimalArray[0]  = Bridge.Decimal(10.0);
    
                Bridge.get(Bridge.Test.Assert).areEqual$1(1, byteArray[0], "get byteArray[0]");
                Bridge.get(Bridge.Test.Assert).areEqual$1(2, sbyteArray[0], "get sbyteArray[0]");
                Bridge.get(Bridge.Test.Assert).areEqual$1(3, shortArray[0], "get shortArray[0]");
                Bridge.get(Bridge.Test.Assert).areEqual$1(4, ushortArray[0], "get ushortArray[0]");
                Bridge.get(Bridge.Test.Assert).areEqual$1(5, intArray[0], "get intArray[0]");
                Bridge.get(Bridge.Test.Assert).areEqual$1(6, uintArray[0], "get uintArray[0]");
                Bridge.get(Bridge.Test.Assert).areEqual$1(7, floatArray[0], "get floatArray[0]");
                Bridge.get(Bridge.Test.Assert).areEqual$1(8, doubleArray[0], "get doubleArray[0]");
    
                Bridge.get(Bridge.Test.Assert).areEqual$1("9", stringArray[0], "get stringArray[0]");
                Bridge.get(Bridge.Test.Assert).areEqual$1(Bridge.Decimal(10.0), decimalArray[0], "get decimalArray[0]");
            }
        }
    });
    
    var $_ = {};
    
    Bridge.ns("Bridge.ClientTestOne.BridgeIssues.N772", $_)
    
    Bridge.apply($_.Bridge.ClientTestOne.BridgeIssues.N772, {
        f1: function (x) {
            return x > 0;
        },
        f2: function (x) {
            return x > 1;
        },
        f3: function (i) {
            return i > 1;
        },
        f4: function (i) {
            return i > 5;
        }
    });
    
    Bridge.define('Bridge.ClientTestOne.BridgeIssues.N772.C', {
        i: 0,
        constructor: function (i) {
            this.i = i;
        },
        equals: function (o) {
            return Bridge.is(o, Bridge.ClientTestOne.BridgeIssues.N772.C) && this.i === (Bridge.cast(o, Bridge.ClientTestOne.BridgeIssues.N772.C)).i;
        },
        getHashCode: function () {
            return this.i;
        }
    });
    
    Bridge.define('Bridge.ClientTestOne.BridgeIssues.N772.TestReverseComparer', {
        inherits: [Bridge.IComparer$1(Bridge.Int)],
        compare: function (x, y) {
            return x === y ? 0 : (x > y ? -1 : 1);
        }
    });
    
    Bridge.init();
})(this);
