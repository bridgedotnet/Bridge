(function (globals) {
    "use strict";

    Bridge.define('Bridge.ClientTest.Batch2.BridgeIssues.Bridge1385', {
        statics: {
            testIsTypedArrayForByte: function () {
                var value = new Uint8Array(3);
                Bridge.Test.Assert.true(Bridge.is(value, Array));
            }
        }
    });
    
    Bridge.define('Bridge.ClientTest.Batch2.BridgeIssues.N1122', {
        statics: {
            testClippingInJavaScriptOverflowMode: function () {
                var x = System.Double.max;
    
                var y1 = Math.floor(x / 0.2);
                Bridge.Test.Assert.areEqual$1(Number.POSITIVE_INFINITY, y1, "int");
    
                var y2 = Math.floor(x / 0.2);
                Bridge.Test.Assert.areEqual$1(Number.POSITIVE_INFINITY, y2, "uint");
    
                var z1 = Math.floor(x / 0.2);
                Bridge.Test.Assert.areEqual$1(Number.POSITIVE_INFINITY, z1, "long");
    
                var z2 = Math.floor(x / 0.2);
                Bridge.Test.Assert.areEqual$1(Number.POSITIVE_INFINITY, z2, "ulong");
            },
            testIntegerDivisionInJavaScriptOverflowMode: function () {
                var x = 1.1;
    
                var y1 = (1 / x);
                Bridge.Test.Assert.areEqual$1("0.9090909090909091", y1.toString(), "int");
    
                var y2 = (1 / x);
                Bridge.Test.Assert.areEqual$1("0.9090909090909091", y2.toString(), "uint");
    
                var z1 = (1 / x);
                Bridge.Test.Assert.areEqual$1("0.9090909090909091", z1.toString(), "long");
    
                var z2 = (1 / x);
                Bridge.Test.Assert.areEqual$1("0.9090909090909091", z2.toString(), "ulong");
            }
        }
    });
    
    Bridge.define('Bridge.ClientTest.Batch2.BridgeIssues.N1204', {
        statics: {
            testStrictNullChecksOptionForNulls: function () {
                var temp = { };
                var temp1 = temp;
                var temp2 = { };
                var l = System.Int64(5);
                var ol = System.Int64(5);
                var oi = 5;
                var varNull = null;
                var varUndefined = temp["this-prop-undefined"];
    
                Bridge.Test.Assert.false$1(varNull === varUndefined, "varNull == varUndefined");
                Bridge.Test.Assert.true$1(varNull === null, "varNull == null");
                Bridge.Test.Assert.false$1(varUndefined === null, "varUndefined == null");
                Bridge.Test.Assert.true$1(undefined === varUndefined, "Script.Undefined == varUndefined");
                Bridge.Test.Assert.true$1(temp === temp1, "temp == temp1");
                Bridge.Test.Assert.false$1(temp === temp2, "temp == temp2");
                Bridge.Test.Assert.true$1(l.equals(System.Int64(5)), "l == 5");
                Bridge.Test.Assert.false$1(ol === oi, "ol == oi");
    
                Bridge.Test.Assert.false$1(varUndefined === varNull, "varUndefined == varNull");
                Bridge.Test.Assert.true$1(null === varNull, "null == varNull");
                Bridge.Test.Assert.false$1(null === varUndefined, "null == varUndefined");
                Bridge.Test.Assert.true$1(varUndefined === undefined, "varUndefined == Script.Undefined");
                Bridge.Test.Assert.true$1(temp1 === temp, "temp1 == temp");
                Bridge.Test.Assert.false$1(temp2 === temp, "temp2 == temp");
                Bridge.Test.Assert.true$1(System.Int64(5).equals(l), "5 == l");
                Bridge.Test.Assert.false$1(oi === ol, "oi == ol");
            }
        }
    });
    
    Bridge.define('Bridge.ClientTest.Batch2.BridgeIssues.N772', {
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
                var stringArray = System.Array.init(9, null);
                var decimalArray = System.Array.init(10, System.Decimal(0.0));
    
                byteArray[0] = 1;
                sbyteArray[0] = 2;
                shortArray[0] = 3;
                ushortArray[0] = 4;
                intArray[0] = 5;
                uintArray[0] = 6;
                floatArray[0] = 7;
                doubleArray[0] = 8;
    
                stringArray[0] = "9";
                decimalArray[0] = System.Decimal(10.0);
    
                Bridge.Test.Assert.areEqual$1(1, byteArray[0], "get byteArray[0]");
                Bridge.Test.Assert.areEqual$1(2, sbyteArray[0], "get sbyteArray[0]");
                Bridge.Test.Assert.areEqual$1(3, shortArray[0], "get shortArray[0]");
                Bridge.Test.Assert.areEqual$1(4, ushortArray[0], "get ushortArray[0]");
                Bridge.Test.Assert.areEqual$1(5, intArray[0], "get intArray[0]");
                Bridge.Test.Assert.areEqual$1(6, uintArray[0], "get uintArray[0]");
                Bridge.Test.Assert.areEqual$1(7, floatArray[0], "get floatArray[0]");
                Bridge.Test.Assert.areEqual$1(8, doubleArray[0], "get doubleArray[0]");
    
                Bridge.Test.Assert.areEqual$1("9", stringArray[0], "get stringArray[0]");
                Bridge.Test.Assert.areEqual$1(System.Decimal(10.0), decimalArray[0], "get decimalArray[0]");
            }
        },
        typePropertiesAreCorrect: function () {
            var arr = [1, 2, 3];
            Bridge.Test.Assert.true$1(Bridge.is(arr, Array), "is Array should be true");
            Bridge.Test.Assert.true$1(Bridge.is(arr, Array), "is int[] should be true");
            Bridge.Test.Assert.true$1(Bridge.is(arr, System.Collections.ICollection), "is ICollection should be true");
            Bridge.Test.Assert.true$1(Bridge.is(arr, System.Collections.IEnumerable), "is IEnumerable should be true");
            Bridge.Test.Assert.true$1(Bridge.is(arr, System.ICloneable), "is ICloneable should be true");
            Bridge.Test.Assert.true$1(Bridge.is(arr, System.Collections.Generic.ICollection$1(System.Int32)), "is ICollection<int> should be true");
            Bridge.Test.Assert.true$1(Bridge.is(arr, System.Collections.Generic.IEnumerable$1(System.Int32)), "is IEnumerable<int> should be true");
            Bridge.Test.Assert.true$1(Bridge.is(arr, System.Collections.Generic.IList$1(System.Int32)), "is IList<int> should be true");
        },
        lengthWorks: function () {
            Bridge.Test.Assert.areEqual(0, new Int32Array(0).length);
            Bridge.Test.Assert.areEqual(1, ["x"].length);
            Bridge.Test.Assert.areEqual(2, ["x", "y"].length);
        },
        rankIsOne: function () {
            Bridge.Test.Assert.areEqual(1, System.Array.getRank(new Int32Array(0)));
        },
        getLengthWorks: function () {
            Bridge.Test.Assert.areEqual(0, System.Array.getLength(new Int32Array(0), 0));
            Bridge.Test.Assert.areEqual(1, System.Array.getLength(["x"], 0));
            Bridge.Test.Assert.areEqual(2, System.Array.getLength(["x", "y"], 0));
        },
        getLowerBound: function () {
            Bridge.Test.Assert.areEqual(0, System.Array.getLower(new Int32Array(0), 0));
            Bridge.Test.Assert.areEqual(0, System.Array.getLower(["x"], 0));
            Bridge.Test.Assert.areEqual(0, System.Array.getLower(["x", "y"], 0));
        },
        getUpperBoundWorks: function () {
            Bridge.Test.Assert.areEqual(-1, (System.Array.getLength(new Int32Array(0), 0) - 1));
            Bridge.Test.Assert.areEqual(0, (System.Array.getLength(["x"], 0) - 1));
            Bridge.Test.Assert.areEqual(1, (System.Array.getLength(["x", "y"], 0) - 1));
        },
        gettingValueByIndexWorks: function () {
            Bridge.Test.Assert.areEqual("x", ["x", "y"][0]);
            Bridge.Test.Assert.areEqual("y", ["x", "y"][1]);
        },
        getValueWorks: function () {
            Bridge.Test.Assert.areEqual("x", System.Array.get(["x", "y"], 0));
            Bridge.Test.Assert.areEqual("y", System.Array.get(["x", "y"], 1));
        },
        settingValueByIndexWorks: function () {
            var arr = System.Array.init(2, null);
            arr[0] = "x";
            arr[1] = "y";
            Bridge.Test.Assert.areEqual("x", arr[0]);
            Bridge.Test.Assert.areEqual("y", arr[1]);
        },
        setValueWorks: function () {
            var arr = System.Array.init(2, null);
            System.Array.set(arr, "x", 0);
            System.Array.set(arr, "y", 1);
            Bridge.Test.Assert.areEqual("x", arr[0]);
            Bridge.Test.Assert.areEqual("y", arr[1]);
        },
        foreachWorks: function () {
            var $t;
            var result = "";
            $t = Bridge.getEnumerator(["x", "y"]);
            while ($t.moveNext()) {
                var s = $t.getCurrent();
                result += s;
            }
            Bridge.Test.Assert.areEqual("xy", result);
        },
        cloneWorks: function () {
            var arr = ["x", "y"];
            var arr2 = System.Array.clone(arr);
            Bridge.Test.Assert.false(arr === arr2);
            Bridge.Test.Assert.areDeepEqual(arr2, arr);
        },
        concatWorks: function () {
            var arr = ["a", "b"];
            Bridge.Test.Assert.areDeepEqual(["a", "b", "c"], arr.concat("c"));
            Bridge.Test.Assert.areDeepEqual(["a", "b", "c", "d"], arr.concat("c", "d"));
            Bridge.Test.Assert.areDeepEqual(["a", "b"], arr);
        },
        containsWorks: function () {
            var arr = ["x", "y"];
            Bridge.Test.Assert.true(System.Linq.Enumerable.from(arr).contains("x"));
            Bridge.Test.Assert.false(System.Linq.Enumerable.from(arr).contains("z"));
        },
        containsUsesEqualsMethod: function () {
            var arr = [new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(1), new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(2), new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(3)];
            Bridge.Test.Assert.true(System.Linq.Enumerable.from(arr).contains(new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(2)));
            Bridge.Test.Assert.false(System.Linq.Enumerable.from(arr).contains(new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(4)));
        },
        allWithArrayItemFilterCallbackWorks: function () {
            Bridge.Test.Assert.true(System.Linq.Enumerable.from([1, 2, 3]).all($_.Bridge.ClientTest.Batch2.BridgeIssues.N772.f1));
            Bridge.Test.Assert.false(System.Linq.Enumerable.from([1, 2, 3]).all($_.Bridge.ClientTest.Batch2.BridgeIssues.N772.f2));
        },
        sliceWithoutEndWorks: function () {
            Bridge.Test.Assert.areDeepEqual(["c", "d"], ["a", "b", "c", "d"].slice(2));
            Bridge.Test.Assert.areDeepEqual(["b", "c"], ["a", "b", "c", "d"].slice(1, 3));
        },
        foreachWithArrayItemCallbackWorks: function () {
            var result = "";
            Bridge.Linq.Enumerable.from(["a", "b", "c"]).forEach(function (s) {
                result += s;
            });
            Bridge.Test.Assert.areEqual("abc", result);
        },
        foreachWithArrayCallbackWorks: function () {
            var result = "";
            Bridge.Linq.Enumerable.from(["a", "b", "c"]).forEach(function (s, i) {
                result += s + i;
            });
            Bridge.Test.Assert.areEqual("a0b1c2", result);
        },
        indexOfWithoutStartIndexWorks: function () {
            Bridge.Test.Assert.areEqual(1, ["a", "b", "c", "b"].indexOf("b"));
        },
        indexOfWithoutStartIndexUsesEqualsMethod: function () {
            var arr = [new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(1), new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(2), new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(3)];
            Bridge.Test.Assert.areEqual(1, Bridge.Linq.Enumerable.from(arr).indexOf(new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(2)));
            Bridge.Test.Assert.areEqual(-1, Bridge.Linq.Enumerable.from(arr).indexOf(new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(4)));
        },
        indexOfWithStartIndexWorks: function () {
            Bridge.Test.Assert.areEqual(3, ["a", "b", "c", "b"].indexOf("b", 2));
        },
        joinWithoutDelimiterWorks: function () {
            Bridge.Test.Assert.areEqual("a,b,c,b", ["a", "b", "c", "b"].join(","));
    
            Bridge.Test.Assert.areEqual("a|b|c|b", ["a", "b", "c", "b"].join("|"));
        },
        reverseWorks: function () {
            var arr = [1, 3, 4, 1, 3, 2];
            arr.reverse();
            Bridge.Test.Assert.areDeepEqual([2, 3, 1, 4, 3, 1], arr);
        },
        anyWithArrayItemFilterCallbackWorks: function () {
            Bridge.Test.Assert.true(System.Linq.Enumerable.from([1, 2, 3, 4]).any($_.Bridge.ClientTest.Batch2.BridgeIssues.N772.f3));
            Bridge.Test.Assert.false(System.Linq.Enumerable.from([1, 2, 3, 4]).any($_.Bridge.ClientTest.Batch2.BridgeIssues.N772.f4));
        },
        binarySearch1Works: function () {
            var arr = [1, 2, 3, 3, 4, 5];
    
            Bridge.Test.Assert.areEqual(2, System.Array.binarySearch(arr, 0, arr.length, 3));
            Bridge.Test.Assert.true(System.Array.binarySearch(arr, 0, arr.length, 6) < 0);
        },
        binarySearch2Works: function () {
            var arr = [1, 2, 3, 3, 4, 5];
    
            Bridge.Test.Assert.areEqual(3, System.Array.binarySearch(arr, 3, 2, 3));
            Bridge.Test.Assert.true(System.Array.binarySearch(arr, 2, 2, 4) < 0);
        },
        binarySearch3Works: function () {
            var arr = [1, 2, 3, 3, 4, 5];
    
            Bridge.Test.Assert.areEqual(2, System.Array.binarySearch(arr, 0, arr.length, 3, new Bridge.ClientTest.Batch2.BridgeIssues.N772.TestReverseComparer()));
            Bridge.Test.Assert.areEqual(-1, System.Array.binarySearch(arr, 0, arr.length, 6, new Bridge.ClientTest.Batch2.BridgeIssues.N772.TestReverseComparer()));
        },
        binarySearch4Works: function () {
            var arr = [1, 2, 3, 3, 4, 5];
    
            Bridge.Test.Assert.areEqual(3, System.Array.binarySearch(arr, 3, 2, 3, new Bridge.ClientTest.Batch2.BridgeIssues.N772.TestReverseComparer()));
            Bridge.Test.Assert.true(System.Array.binarySearch(arr, 3, 2, 4, new Bridge.ClientTest.Batch2.BridgeIssues.N772.TestReverseComparer()) < 0);
        },
        binarySearchExceptionsWorks: function () {
            var arr1 = null;
            var arr2 = [1, 2, 3, 3, 4, 5];
    
            Bridge.Test.Assert.throws(function () {
                System.Array.binarySearch(arr1, 0, arr1.length, 1);
            });
            Bridge.Test.Assert.throws(function () {
                System.Array.binarySearch(arr2, -1, 1, 1);
            });
            Bridge.Test.Assert.throws(function () {
                System.Array.binarySearch(arr2, 1, 6, 1);
            });
        },
        sortWithDefaultCompareWorks: function () {
            var arr = [1, 6, 6, 4, 2];
            arr.sort();
            Bridge.Test.Assert.areDeepEqual([1, 2, 4, 6, 6], arr);
        },
        sort1Works: function () {
            var arr = [1, 6, 6, 4, 2];
            System.Array.sort(arr);
            Bridge.Test.Assert.areDeepEqual([1, 2, 4, 6, 6], arr);
        },
        sort2Works: function () {
            var arr = [1, 6, 6, 4, 2];
            System.Array.sort(arr, 2, 3);
            Bridge.Test.Assert.areDeepEqual([1, 6, 2, 4, 6], arr);
        },
        sort3Works: function () {
            var arr = [1, 2, 6, 3, 6, 7];
            System.Array.sort(arr, 2, 3, new Bridge.ClientTest.Batch2.BridgeIssues.N772.TestReverseComparer());
            Bridge.Test.Assert.areDeepEqual([1, 2, 6, 6, 3, 7], arr);
        },
        sort4Works: function () {
            var arr = [1, 6, 6, 4, 2];
            System.Array.sort(arr, new Bridge.ClientTest.Batch2.BridgeIssues.N772.TestReverseComparer());
            Bridge.Test.Assert.areDeepEqual([6, 6, 4, 2, 1], arr);
        },
        sortExceptionsWorks: function () {
            var arr1 = null;
    
            Bridge.Test.Assert.throws(function () {
                System.Array.sort(arr1);
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
            Bridge.Test.Assert.areEqual("xy", result);
        },
        iCollectionCountWorks: function () {
            var l = ["x", "y", "z"];
            Bridge.Test.Assert.areEqual(3, System.Array.getCount(l, String));
        },
        iCollectionAddWorks: function () {
            var l = ["x", "y", "z"];
            System.Array.add(l, "a", String);
            Bridge.Test.Assert.areDeepEqual(["x", "y", "z", "a"], l);
        },
        iCollectionClearWorks: function () {
            var l = ["x", "y", "z"];
            System.Array.clear(l, String);
            Bridge.Test.Assert.areDeepEqual(System.Array.init(3, null), l);
            Bridge.Test.Assert.areDeepEqual(null, System.Array.getItem(l, 0, String));
            Bridge.Test.Assert.areDeepEqual(null, System.Array.getItem(l, 1, String));
            Bridge.Test.Assert.areDeepEqual(null, System.Array.getItem(l, 2, String));
        },
        iCollectionContainsWorks: function () {
            var l = ["x", "y", "z"];
            Bridge.Test.Assert.true(System.Array.contains(l, "y", String));
            Bridge.Test.Assert.false(System.Array.contains(l, "a", String));
        },
        iCollectionContainsUsesEqualsMethod: function () {
            var l = [new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(1), new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(2), new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(3)];
            Bridge.Test.Assert.true(System.Array.contains(l, new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(2), Bridge.ClientTest.Batch2.BridgeIssues.N772.C));
            Bridge.Test.Assert.false(System.Array.contains(l, new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(4), Bridge.ClientTest.Batch2.BridgeIssues.N772.C));
        },
        iCollectionRemoveWorks: function () {
            var l = ["x", "y", "z"];
            Bridge.Test.Assert.true(System.Array.remove(l, "y", String));
            Bridge.Test.Assert.false(System.Array.remove(l, "a", String));
            Bridge.Test.Assert.areDeepEqual(["x", "z"], l);
        },
        iListIndexingWorks: function () {
            var l = ["x", "y", "z"];
            Bridge.Test.Assert.areEqual("y", System.Array.getItem(l, 1, String));
            System.Array.setItem(l, 1, "a", String);
            Bridge.Test.Assert.areDeepEqual(["x", "a", "z"], l);
        },
        iListIndexOfWorks: function () {
            var l = ["x", "y", "z"];
            Bridge.Test.Assert.areEqual(1, System.Array.indexOf(l, "y", 0, null, String));
            Bridge.Test.Assert.areEqual(-1, System.Array.indexOf(l, "a", 0, null, String));
        },
        iListIndexOfUsesEqualsMethod: function () {
            var arr = [new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(1), new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(2), new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(3)];
            Bridge.Test.Assert.areEqual(1, Bridge.Linq.Enumerable.from(arr).indexOf(new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(2)));
            Bridge.Test.Assert.areEqual(-1, Bridge.Linq.Enumerable.from(arr).indexOf(new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(4)));
        },
        iListInsertWorks: function () {
            var l = ["x", "y", "z"];
            System.Array.insert(l, 1, "a", String);
            Bridge.Test.Assert.areDeepEqual(["x", "a", "y", "z"], l);
        },
        iListRemoveAtWorks: function () {
            var l = ["x", "y", "z"];
            System.Array.removeAt(l, 1, String);
            Bridge.Test.Assert.areDeepEqual(["x", "z"], l);
        },
        issueSpecific: function () {
            var l = ["x", "y", "z"];
            System.Array.removeAt(l, 1, String);
            Bridge.Test.Assert.areDeepEqual(["x", "z"], l);
        }
    });
    
    var $_ = {};
    
    Bridge.ns("Bridge.ClientTest.Batch2.BridgeIssues.N772", $_);
    
    Bridge.apply($_.Bridge.ClientTest.Batch2.BridgeIssues.N772, {
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
    
    Bridge.define('Bridge.ClientTest.Batch2.BridgeIssues.N772.C', {
        i: 0,
        constructor: function (i) {
            this.i = i;
        },
        equals: function (o) {
            return Bridge.is(o, Bridge.ClientTest.Batch2.BridgeIssues.N772.C) && this.i === Bridge.cast(o, Bridge.ClientTest.Batch2.BridgeIssues.N772.C).i;
        },
        getHashCode: function () {
            return this.i;
        }
    });
    
    Bridge.define('Bridge.ClientTest.Batch2.BridgeIssues.N772.TestReverseComparer', {
        inherits: [System.Collections.Generic.IComparer$1(System.Int32)],
        config: {
            alias: [
            "compare", "System$Collections$Generic$IComparer$1$System$Int32$compare"
            ]
        },
        compare: function (x, y) {
            return x === y ? 0 : (x > y ? -1 : 1);
        }
    });
    
    Bridge.define('Bridge.ClientTest.Batch2.CheckedUncheckedTests', {
        statics: {
            assertEqual: function (expected, actual, message) {
                if (message === void 0) { message = null; }
                Bridge.Test.Assert.areEqual$1(expected.toString(), actual.toString(), message);
            },
            bypass: function (o) {
                return o;
            }
        }
    });
    
    Bridge.define('Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests', {
        statics: {
            testInt32: function () {
                var max = 2147483647;
    
                var max1 = max;
                var max2 = max;
                var max3 = max;
                var max4 = max;
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = Bridge.Int.check(max + 1, System.Int32);
                }, "Through identifier +");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = Bridge.identity(max2, (max2 = Bridge.Int.check(max2 + 1, System.Int32)));
                }, "Through identifier post++");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = ((max3 = Bridge.Int.check(max3 + 1, System.Int32)));
                }, "Through identifier ++pre");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = Bridge.Int.check(2 * max, System.Int32);
                }, "Through identifier *");
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.Int.check(max + 1, System.Int32));
                }, "Through parameter +");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.identity(max3, (max3 = Bridge.Int.check(max3 + 1, System.Int32))));
                }, "Through parameter post++");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((max4 = Bridge.Int.check(max4 + 1, System.Int32))));
                }, "Through parameter ++pre");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.Int.check(2 * max, System.Int32));
                }, "Through parameter *");
    
                var min = -2147483648;
    
                var min1 = min;
                var min2 = min;
                var min3 = min;
                var min4 = min;
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = Bridge.Int.check(min - 1, System.Int32);
                }, "Through identifier -");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = Bridge.identity(min1, (min1 = Bridge.Int.check(min1 - 1, System.Int32)));
                }, "Through identifier post--");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = ((min2 = Bridge.Int.check(min2 - 1, System.Int32)));
                }, "Through identifier pre--");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = Bridge.Int.check(-min, System.Int32);
                }, "Through identifier unary -");
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.Int.check(min - 1, System.Int32));
                }, "Through parameter -");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.identity(min3, (min3 = Bridge.Int.check(min3 - 1, System.Int32))));
                }, "Through parameter post--");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((min4 = Bridge.Int.check(min4 - 1, System.Int32))));
                }, "Through parameter --pre");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.Int.check(-min, System.Int32));
                }, "Through parameter unary -");
            },
            testUInt32: function () {
                var max = 4294967295;
    
                var max1 = max;
                var max2 = max;
                var max3 = max;
                var max4 = max;
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = Bridge.Int.check(max + 1, System.UInt32);
                }, "Through identifier +");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = Bridge.identity(max1, (max1 = Bridge.Int.check(max1 + 1, System.UInt32)));
                }, "Through identifier post++");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = ((max2 = Bridge.Int.check(max2 + 1, System.UInt32)));
                }, "Through identifier ++pre");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = Bridge.Int.check(2 * max, System.UInt32);
                }, "Through identifier *");
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.Int.check(max + 1, System.UInt32));
                }, "Through parameter +");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.identity(max3, (max3 = Bridge.Int.check(max3 + 1, System.UInt32))));
                }, "Through parameter post++");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((max4 = Bridge.Int.check(max4 + 1, System.UInt32))));
                }, "Through parameter ++pre");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.Int.check(2 * max, System.UInt32));
                }, "Through parameter *");
    
                var min = 0;
    
                var min1 = min;
                var min2 = min;
                var min3 = min;
                var min4 = min;
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = Bridge.Int.check(min - 1, System.UInt32);
                }, "Through identifier -");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = Bridge.identity(min1, (min1 = Bridge.Int.check(min1 - 1, System.UInt32)));
                }, "Through identifier post--");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = ((min2 = Bridge.Int.check(min2 - 1, System.UInt32)));
                }, "Through identifier pre--");
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.Int.check(min - 1, System.UInt32));
                }, "Through parameter -");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.identity(min3, (min3 = Bridge.Int.check(min3 - 1, System.UInt32))));
                }, "Through parameter post--");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((min4 = Bridge.Int.check(min4 - 1, System.UInt32))));
                }, "Through parameter --pre");
            },
            testLong: function () {
                var max = System.Int64.MaxValue;
    
                var max1 = max;
                var max2 = max;
                var max3 = max;
                var max4 = max;
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = max.add(System.Int64(1), 1);
                }, "Through identifier +");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var $t;
                    var r = ($t = max1, max1 = max1.inc(1), $t);
                }, "Through identifier post++");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = (max2 = max2.inc(1));
                }, "Through identifier ++pre");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = System.Int64(2).mul(max, 1);
                }, "Through identifier *");
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(max.add(System.Int64(1), 1));
                }, "Through parameter +");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var $t;
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(($t = max3, max3 = max3.inc(1), $t));
                }, "Through parameter post++");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass((max4 = max4.inc(1)));
                }, "Through parameter ++pre");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(System.Int64(2).mul(max, 1));
                }, "Through parameter *");
    
                var min = System.Int64.MinValue;
    
                var min1 = min;
                var min2 = min;
                var min3 = min;
                var min4 = min;
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = min.sub(System.Int64(1), 1);
                }, "Through identifier -");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var $t;
                    var r = ($t = min1, min1 = min1.dec(1), $t);
                }, "Through identifier post--");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = (min2 = min2.dec(1));
                }, "Through identifier pre--");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = min.neg(1);
                }, "Through identifier unary -");
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(min.sub(System.Int64(1), 1));
                }, "Through parameter -");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var $t;
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(($t = min3, min3 = min3.dec(1), $t));
                }, "Through parameter post--");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass((min4 = min4.dec(1)));
                }, "Through parameter --pre");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(min.neg(1));
                }, "Through parameter unary -");
            },
            testULong: function () {
                var max = System.UInt64.MaxValue;
    
                var max1 = max;
                var max2 = max;
                var max3 = max;
                var max4 = max;
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = max.add(System.UInt64(1), 1);
                }, "Through identifier +");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var $t;
                    var r = ($t = max1, max1 = max1.inc(1), $t);
                }, "Through identifier post++");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = (max2 = max2.inc(1));
                }, "Through identifier ++pre");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = System.UInt64(2).mul(max, 1);
                }, "Through identifier *");
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(max.add(System.UInt64(1), 1));
                }, "Through parameter +");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var $t;
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(($t = max3, max3 = max3.inc(1), $t));
                }, "Through parameter post++");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass((max4 = max4.inc(1)));
                }, "Through parameter ++pre");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(System.UInt64(2).mul(max, 1));
                }, "Through parameter *");
    
                var min = System.UInt64.MinValue;
    
                var min1 = min;
                var min2 = min;
                var min3 = min;
                var min4 = min;
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = min.sub(System.UInt64(1), 1);
                }, "Through identifier -");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var $t;
                    var r = ($t = min1, min1 = min1.dec(1), $t);
                }, "Through identifier post--");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = (min2 = min2.dec(1));
                }, "Through identifier pre--");
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(min.sub(System.UInt64(1), 1));
                }, "Through parameter -");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var $t;
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(($t = min3, min3 = min3.dec(1), $t));
                }, "Through parameter post--");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass((min4 = min4.dec(1)));
                }, "Through parameter --pre");
            }
        }
    });
    
    Bridge.define('Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests', {
        statics: {
            testInt32: function () {
                var max = 2147483647;
    
                var max1 = max;
                var max2 = max;
                var max3 = max;
                var max4 = max;
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = Bridge.Int.check(max + 1, System.Int32);
                }, "Through identifier +");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = Bridge.identity(max2, (max2 = Bridge.Int.check(max2 + 1, System.Int32)));
                }, "Through identifier post++");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = ((max3 = Bridge.Int.check(max3 + 1, System.Int32)));
                }, "Through identifier ++pre");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = Bridge.Int.check(2 * max, System.Int32);
                }, "Through identifier *");
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.Int.check(max + 1, System.Int32));
                }, "Through parameter +");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.identity(max3, (max3 = Bridge.Int.check(max3 + 1, System.Int32))));
                }, "Through parameter post++");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((max4 = Bridge.Int.check(max4 + 1, System.Int32))));
                }, "Through parameter ++pre");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.Int.check(2 * max, System.Int32));
                }, "Through parameter *");
    
                var min = -2147483648;
    
                var min1 = min;
                var min2 = min;
                var min3 = min;
                var min4 = min;
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = Bridge.Int.check(min - 1, System.Int32);
                }, "Through identifier -");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = Bridge.identity(min1, (min1 = Bridge.Int.check(min1 - 1, System.Int32)));
                }, "Through identifier post--");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = ((min2 = Bridge.Int.check(min2 - 1, System.Int32)));
                }, "Through identifier pre--");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = Bridge.Int.check(-min, System.Int32);
                }, "Through identifier unary -");
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.Int.check(min - 1, System.Int32));
                }, "Through parameter -");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.identity(min3, (min3 = Bridge.Int.check(min3 - 1, System.Int32))));
                }, "Through parameter post--");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((min4 = Bridge.Int.check(min4 - 1, System.Int32))));
                }, "Through parameter --pre");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.Int.check(-min, System.Int32));
                }, "Through parameter unary -");
            },
            testUInt32: function () {
                var max = 4294967295;
    
                var max1 = max;
                var max2 = max;
                var max3 = max;
                var max4 = max;
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = Bridge.Int.check(max + 1, System.UInt32);
                }, "Through identifier +");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = Bridge.identity(max1, (max1 = Bridge.Int.check(max1 + 1, System.UInt32)));
                }, "Through identifier post++");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = ((max2 = Bridge.Int.check(max2 + 1, System.UInt32)));
                }, "Through identifier ++pre");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = Bridge.Int.check(2 * max, System.UInt32);
                }, "Through identifier *");
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.Int.check(max + 1, System.UInt32));
                }, "Through parameter +");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.identity(max3, (max3 = Bridge.Int.check(max3 + 1, System.UInt32))));
                }, "Through parameter post++");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((max4 = Bridge.Int.check(max4 + 1, System.UInt32))));
                }, "Through parameter ++pre");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.Int.check(2 * max, System.UInt32));
                }, "Through parameter *");
    
                var min = 0;
    
                var min1 = min;
                var min2 = min;
                var min3 = min;
                var min4 = min;
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = Bridge.Int.check(min - 1, System.UInt32);
                }, "Through identifier -");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = Bridge.identity(min1, (min1 = Bridge.Int.check(min1 - 1, System.UInt32)));
                }, "Through identifier post--");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = ((min2 = Bridge.Int.check(min2 - 1, System.UInt32)));
                }, "Through identifier pre--");
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.Int.check(min - 1, System.UInt32));
                }, "Through parameter -");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.identity(min3, (min3 = Bridge.Int.check(min3 - 1, System.UInt32))));
                }, "Through parameter post--");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((min4 = Bridge.Int.check(min4 - 1, System.UInt32))));
                }, "Through parameter --pre");
            },
            testLong: function () {
                var max = System.Int64.MaxValue;
    
                var max1 = max;
                var max2 = max;
                var max3 = max;
                var max4 = max;
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = max.add(System.Int64(1), 1);
                }, "Through identifier +");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var $t;
                    var r = ($t = max1, max1 = max1.inc(1), $t);
                }, "Through identifier post++");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = (max2 = max2.inc(1));
                }, "Through identifier ++pre");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = System.Int64(2).mul(max, 1);
                }, "Through identifier *");
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(max.add(System.Int64(1), 1));
                }, "Through parameter +");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var $t;
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(($t = max3, max3 = max3.inc(1), $t));
                }, "Through parameter post++");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass((max4 = max4.inc(1)));
                }, "Through parameter ++pre");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(System.Int64(2).mul(max, 1));
                }, "Through parameter *");
    
                var min = System.Int64.MinValue;
    
                var min1 = min;
                var min2 = min;
                var min3 = min;
                var min4 = min;
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = min.sub(System.Int64(1), 1);
                }, "Through identifier -");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var $t;
                    var r = ($t = min1, min1 = min1.dec(1), $t);
                }, "Through identifier post--");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = (min2 = min2.dec(1));
                }, "Through identifier pre--");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = min.neg(1);
                }, "Through identifier unary -");
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(min.sub(System.Int64(1), 1));
                }, "Through parameter -");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var $t;
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(($t = min3, min3 = min3.dec(1), $t));
                }, "Through parameter post--");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass((min4 = min4.dec(1)));
                }, "Through parameter --pre");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(min.neg(1));
                }, "Through parameter unary -");
            },
            testULong: function () {
                var max = System.UInt64.MaxValue;
    
                var max1 = max;
                var max2 = max;
                var max3 = max;
                var max4 = max;
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = max.add(System.UInt64(1), 1);
                }, "Through identifier +");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var $t;
                    var r = ($t = max1, max1 = max1.inc(1), $t);
                }, "Through identifier post++");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = (max2 = max2.inc(1));
                }, "Through identifier ++pre");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = System.UInt64(2).mul(max, 1);
                }, "Through identifier *");
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(max.add(System.UInt64(1), 1));
                }, "Through parameter +");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var $t;
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(($t = max3, max3 = max3.inc(1), $t));
                }, "Through parameter post++");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass((max4 = max4.inc(1)));
                }, "Through parameter ++pre");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(System.UInt64(2).mul(max, 1));
                }, "Through parameter *");
    
                var min = System.UInt64.MinValue;
    
                var min1 = min;
                var min2 = min;
                var min3 = min;
                var min4 = min;
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = min.sub(System.UInt64(1), 1);
                }, "Through identifier -");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var $t;
                    var r = ($t = min1, min1 = min1.dec(1), $t);
                }, "Through identifier post--");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var r = (min2 = min2.dec(1));
                }, "Through identifier pre--");
    
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(min.sub(System.UInt64(1), 1));
                }, "Through parameter -");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    var $t;
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(($t = min3, min3 = min3.dec(1), $t));
                }, "Through parameter post--");
                Bridge.Test.Assert.throws$7(System.OverflowException, function () {
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass((min4 = min4.dec(1)));
                }, "Through parameter --pre");
            }
        }
    });
    
    Bridge.define('Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests', {
        statics: {
            testInt32: function () {
                var max = 2147483647;
    
                var max1 = max;
                var max2 = max;
                var max3 = max;
                var max4 = max;
    
                var rMax1 = (max + 1) | 0;
                var rMax2 = Bridge.identity(max1, (max1 = (max1 + 1) | 0));
                var rMax3 = ((max2 = (max2 + 1) | 0));
                var rMax4 = (2 * max) | 0;
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2147483648", rMax1, "Through identifier +");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("2147483647", rMax2, "Through identifier post++");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2147483648", rMax3, "Through identifier ++pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2", rMax4, "Through identifier *");
    
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((max + 1) | 0)), "Through parameter +");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.identity(max3, (max3 = (max3 + 1) | 0))), "Through parameter post++");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((max4 = (max4 + 1) | 0))), "Through parameter ++pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((2 * max) | 0)), "Through parameter *");
    
                var min = -2147483648;
    
                var min1 = min;
                var min2 = min;
                var min3 = min;
                var min4 = min;
    
                var rMin1 = (min - 1) | 0;
                var rMin2 = Bridge.identity(min1, (min1 = (min1 - 1) | 0));
                var rMin3 = ((min2 = (min2 - 1) | 0));
                var rMin4 = (-min) | 0;
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("2147483647", rMin1, "Through identifier -");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2147483648", rMin2, "Through identifier post--");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("2147483647", rMin3, "Through identifier --pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2147483648", rMin4, "Through identifier unary -");
    
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((min - 1) | 0)), "Through parameter -");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.identity(min3, (min3 = (min3 - 1) | 0))), "Through parameter post--");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((min4 = (min4 - 1) | 0))), "Through parameter --pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((-min) | 0)), "Through parameter unary -");
            },
            testUInt32: function () {
                var max = 4294967295;
    
                var max1 = max;
                var max2 = max;
                var max3 = max;
                var max4 = max;
    
                var rMax1 = (max + 1) >>> 0;
                var rMax2 = Bridge.identity(max1, (max1 = (max1 + 1) >>> 0));
                var rMax3 = ((max2 = (max2 + 1) >>> 0));
                var rMax4 = (2 * max) >>> 0;
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", rMax1, "Through identifier +");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("4294967295", rMax2, "Through identifier post++");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", rMax3, "Through identifier ++pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("4294967294", rMax4, "Through identifier *");
    
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((max + 1) >>> 0)), "Through parameter +");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.identity(max3, (max3 = (max3 + 1) >>> 0))), "Through parameter post++");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((max4 = (max4 + 1) >>> 0))), "Through parameter ++pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("4294967294", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((2 * max) >>> 0)), "Through parameter *");
    
                var min = 0;
    
                var min1 = min;
                var min2 = min;
                var min3 = min;
                var min4 = min;
    
                var rMin1 = (min - 1) >>> 0;
                var rMin2 = Bridge.identity(min1, (min1 = (min1 - 1) >>> 0));
                var rMin3 = ((min2 = (min2 - 1) >>> 0));
                var rMin4 = System.Int64(min).neg();
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("4294967295", rMin1, "Through identifier -");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", rMin2, "Through identifier post--");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("4294967295", rMin3, "Through identifier --pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", rMin4, "Through identifier unary -");
    
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((min - 1) >>> 0)), "Through parameter -");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.identity(min3, (min3 = (min3 - 1) >>> 0))), "Through parameter post--");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((min4 = (min4 - 1) >>> 0))), "Through parameter --pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(System.Int64(min).neg()), "Through parameter unary -");
            },
            testLong: function () {
                var $t;
                var max = System.Int64.MaxValue;
    
                var max1 = max;
                var max2 = max;
                var max3 = max;
                var max4 = max;
    
                var rMax1 = max.add(System.Int64(1));
                var rMax2 = ($t = max1, max1 = max1.inc(), $t);
                var rMax3 = (max2 = max2.inc());
                var rMax4 = System.Int64(2).mul(max);
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-9223372036854775808", rMax1, "Through identifier +");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("9223372036854775807", rMax2, "Through identifier post++");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-9223372036854775808", rMax3, "Through identifier ++pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2", rMax4, "Through identifier *");
    
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(max.add(System.Int64(1))), "Through parameter +");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(($t = max3, max3 = max3.inc(), $t)), "Through parameter post++");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass((max4 = max4.inc())), "Through parameter ++pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(System.Int64(2).mul(max)), "Through parameter *");
    
                var min = System.Int64.MinValue;
    
                var min1 = min;
                var min2 = min;
                var min3 = min;
                var min4 = min;
    
                var rMin1 = min.sub(System.Int64(1));
                var rMin2 = ($t = min1, min1 = min1.dec(), $t);
                var rMin3 = (min2 = min2.dec());
                var rMin4 = min.neg();
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("9223372036854775807", rMin1, "Through identifier -");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-9223372036854775808", rMin2, "Through identifier post--");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("9223372036854775807", rMin3, "Through identifier --pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-9223372036854775808", rMin4, "Through identifier unary -");
    
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(min.sub(System.Int64(1))), "Through parameter -");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(($t = min3, min3 = min3.dec(), $t)), "Through parameter post--");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass((min4 = min4.dec())), "Through parameter --pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(min.neg()), "Through parameter unary -");
            },
            testULong: function () {
                var $t;
                var max = System.UInt64.MaxValue;
    
                var max1 = max;
                var max2 = max;
                var max3 = max;
                var max4 = max;
    
                var rMax1 = max.add(System.UInt64(1));
                var rMax2 = ($t = max1, max1 = max1.inc(), $t);
                var rMax3 = (max2 = max2.inc());
                var rMax4 = System.UInt64(2).mul(max);
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", rMax1, "Through identifier +");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("18446744073709551615", rMax2, "Through identifier post++");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", rMax3, "Through identifier ++pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("18446744073709551614", rMax4, "Through identifier *");
    
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(max.add(System.UInt64(1))), "Through parameter +");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(($t = max3, max3 = max3.inc(), $t)), "Through parameter post++");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass((max4 = max4.inc())), "Through parameter ++pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("18446744073709551614", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(System.UInt64(2).mul(max)), "Through parameter *");
    
                var min = System.UInt64.MinValue;
    
                var min1 = min;
                var min2 = min;
                var min3 = min;
                var min4 = min;
    
                var rMin1 = min.sub(System.UInt64(1));
                var rMin2 = ($t = min1, min1 = min1.dec(), $t);
                var rMin3 = (min2 = min2.dec());
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("18446744073709551615", rMin1, "Through identifier -");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", rMin2, "Through identifier post--");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("18446744073709551615", rMin3, "Through identifier --pre");
    
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(min.sub(System.UInt64(1))), "Through parameter -");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(($t = min3, min3 = min3.dec(), $t)), "Through parameter post--");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass((min4 = min4.dec())), "Through parameter --pre");
            }
        }
    });
    
    Bridge.define('Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests', {
        statics: {
            testInt32: function () {
                var max = 2147483647;
    
                var max1 = max;
                var max2 = max;
                var max3 = max;
                var max4 = max;
    
                var rMax1 = (max + 1) | 0;
                var rMax2 = Bridge.identity(max1, (max1 = (max1 + 1) | 0));
                var rMax3 = ((max2 = (max2 + 1) | 0));
                var rMax4 = (2 * max) | 0;
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2147483648", rMax1, "Through identifier +");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("2147483647", rMax2, "Through identifier post++");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2147483648", rMax3, "Through identifier ++pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2", rMax4, "Through identifier *");
    
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((max + 1) | 0)), "Through parameter +");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.identity(max3, (max3 = (max3 + 1) | 0))), "Through parameter post++");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((max4 = (max4 + 1) | 0))), "Through parameter ++pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((2 * max) | 0)), "Through parameter *");
    
                var min = -2147483648;
    
                var min1 = min;
                var min2 = min;
                var min3 = min;
                var min4 = min;
    
                var rMin1 = (min - 1) | 0;
                var rMin2 = Bridge.identity(min1, (min1 = (min1 - 1) | 0));
                var rMin3 = ((min2 = (min2 - 1) | 0));
                var rMin4 = (-min) | 0;
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("2147483647", rMin1, "Through identifier -");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2147483648", rMin2, "Through identifier post--");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("2147483647", rMin3, "Through identifier --pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2147483648", rMin4, "Through identifier unary -");
    
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((min - 1) | 0)), "Through parameter -");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.identity(min3, (min3 = (min3 - 1) | 0))), "Through parameter post--");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((min4 = (min4 - 1) | 0))), "Through parameter --pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((-min) | 0)), "Through parameter unary -");
            },
            testUInt32: function () {
                var max = 4294967295;
    
                var max1 = max;
                var max2 = max;
                var max3 = max;
                var max4 = max;
    
                var rMax1 = (max + 1) >>> 0;
                var rMax2 = Bridge.identity(max1, (max1 = (max1 + 1) >>> 0));
                var rMax3 = ((max2 = (max2 + 1) >>> 0));
                var rMax4 = (2 * max) >>> 0;
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", rMax1, "Through identifier +");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("4294967295", rMax2, "Through identifier post++");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", rMax3, "Through identifier ++pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("4294967294", rMax4, "Through identifier *");
    
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((max + 1) >>> 0)), "Through parameter +");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.identity(max3, (max3 = (max3 + 1) >>> 0))), "Through parameter post++");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((max4 = (max4 + 1) >>> 0))), "Through parameter ++pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("4294967294", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((2 * max) >>> 0)), "Through parameter *");
    
                var min = 0;
    
                var min1 = min;
                var min2 = min;
                var min3 = min;
                var min4 = min;
    
                var rMin1 = (min - 1) >>> 0;
                var rMin2 = Bridge.identity(min1, (min1 = (min1 - 1) >>> 0));
                var rMin3 = ((min2 = (min2 - 1) >>> 0));
                var rMin4 = System.Int64(min).neg();
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("4294967295", rMin1, "Through identifier -");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", rMin2, "Through identifier post--");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("4294967295", rMin3, "Through identifier --pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", rMin4, "Through identifier unary -");
    
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((min - 1) >>> 0)), "Through parameter -");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.identity(min3, (min3 = (min3 - 1) >>> 0))), "Through parameter post--");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((min4 = (min4 - 1) >>> 0))), "Through parameter --pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(System.Int64(min).neg()), "Through parameter unary -");
            },
            testLong: function () {
                var $t;
                var max = System.Int64.MaxValue;
    
                var max1 = max;
                var max2 = max;
                var max3 = max;
                var max4 = max;
    
                var rMax1 = max.add(System.Int64(1));
                var rMax2 = ($t = max1, max1 = max1.inc(), $t);
                var rMax3 = (max2 = max2.inc());
                var rMax4 = System.Int64(2).mul(max);
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-9223372036854775808", rMax1, "Through identifier +");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("9223372036854775807", rMax2, "Through identifier post++");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-9223372036854775808", rMax3, "Through identifier ++pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2", rMax4, "Through identifier *");
    
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(max.add(System.Int64(1))), "Through parameter +");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(($t = max3, max3 = max3.inc(), $t)), "Through parameter post++");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass((max4 = max4.inc())), "Through parameter ++pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(System.Int64(2).mul(max)), "Through parameter *");
    
                var min = System.Int64.MinValue;
    
                var min1 = min;
                var min2 = min;
                var min3 = min;
                var min4 = min;
    
                var rMin1 = min.sub(System.Int64(1));
                var rMin2 = ($t = min1, min1 = min1.dec(), $t);
                var rMin3 = (min2 = min2.dec());
                var rMin4 = min.neg();
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("9223372036854775807", rMin1, "Through identifier -");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-9223372036854775808", rMin2, "Through identifier post--");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("9223372036854775807", rMin3, "Through identifier --pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-9223372036854775808", rMin4, "Through identifier unary -");
    
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(min.sub(System.Int64(1))), "Through parameter -");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(($t = min3, min3 = min3.dec(), $t)), "Through parameter post--");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass((min4 = min4.dec())), "Through parameter --pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(min.neg()), "Through parameter unary -");
            },
            testULong: function () {
                var $t;
                var max = System.UInt64.MaxValue;
    
                var max1 = max;
                var max2 = max;
                var max3 = max;
                var max4 = max;
    
                var rMax1 = max.add(System.UInt64(1));
                var rMax2 = ($t = max1, max1 = max1.inc(), $t);
                var rMax3 = (max2 = max2.inc());
                var rMax4 = System.UInt64(2).mul(max);
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", rMax1, "Through identifier +");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("18446744073709551615", rMax2, "Through identifier post++");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", rMax3, "Through identifier ++pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("18446744073709551614", rMax4, "Through identifier *");
    
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(max.add(System.UInt64(1))), "Through parameter +");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(($t = max3, max3 = max3.inc(), $t)), "Through parameter post++");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass((max4 = max4.inc())), "Through parameter ++pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("18446744073709551614", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(System.UInt64(2).mul(max)), "Through parameter *");
    
                var min = System.UInt64.MinValue;
    
                var min1 = min;
                var min2 = min;
                var min3 = min;
                var min4 = min;
    
                var rMin1 = min.sub(System.UInt64(1));
                var rMin2 = ($t = min1, min1 = min1.dec(), $t);
                var rMin3 = (min2 = min2.dec());
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("18446744073709551615", rMin1, "Through identifier -");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", rMin2, "Through identifier post--");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("18446744073709551615", rMin3, "Through identifier --pre");
    
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(min.sub(System.UInt64(1))), "Through parameter -");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(($t = min3, min3 = min3.dec(), $t)), "Through parameter post--");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass((min4 = min4.dec())), "Through parameter --pre");
            }
        }
    });
    
    Bridge.define('Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests', {
        statics: {
            testInt32: function () {
                var max = 2147483647;
    
                var max1 = max;
                var max2 = max;
                var max3 = max;
                var max4 = max;
    
                var rMax1 = max + 1;
                var rMax2 = Bridge.identity(max1, (max1 = max1 + 1));
                var rMax3 = ((max2 = max2 + 1));
                var rMax4 = 2 * max;
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("2147483648", rMax1, "Through identifier +");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("2147483647", rMax2, "Through identifier post++");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("2147483648", rMax3, "Through identifier ++pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("4294967294", rMax4, "Through identifier *");
    
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(max + 1), "Through parameter +");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.identity(max3, (max3 = max3 + 1))), "Through parameter post++");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((max4 = max4 + 1))), "Through parameter ++pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("4294967294", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(2 * max), "Through parameter *");
    
                var min = -2147483648;
    
                var min1 = min;
                var min2 = min;
                var min3 = min;
                var min4 = min;
    
                var rMin1 = min - 1;
                var rMin2 = Bridge.identity(min1, (min1 = min1 - 1));
                var rMin3 = ((min2 = min2 - 1));
                var rMin4 = -min;
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2147483649", rMin1, "Through identifier -");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2147483648", rMin2, "Through identifier post--");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2147483649", rMin3, "Through identifier --pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("2147483648", rMin4, "Through identifier unary -");
    
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2147483649", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(min - 1), "Through parameter -");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.identity(min3, (min3 = min3 - 1))), "Through parameter post--");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2147483649", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((min4 = min4 - 1))), "Through parameter --pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(-min), "Through parameter unary -");
            },
            testUInt32: function () {
                var max = 4294967295;
    
                var max1 = max;
                var max2 = max;
                var max3 = max;
                var max4 = max;
    
                var rMax1 = max + 1;
                var rMax2 = Bridge.identity(max1, (max1 = max1 + 1));
                var rMax3 = ((max2 = max2 + 1));
                var rMax4 = 2 * max;
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("4294967296", rMax1, "Through identifier +");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("4294967295", rMax2, "Through identifier post++");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("4294967296", rMax3, "Through identifier ++pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("8589934590", rMax4, "Through identifier *");
    
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("4294967296", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(max + 1), "Through parameter +");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.identity(max3, (max3 = max3 + 1))), "Through parameter post++");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("4294967296", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((max4 = max4 + 1))), "Through parameter ++pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("8589934590", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(2 * max), "Through parameter *");
    
                var min = 0;
    
                var min1 = min;
                var min2 = min;
                var min3 = min;
                var min4 = min;
    
                var rMin1 = min - 1;
                var rMin2 = Bridge.identity(min1, (min1 = min1 - 1));
                var rMin3 = ((min2 = min2 - 1));
                var rMin4 = System.Int64(min).neg();
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-1", rMin1, "Through identifier -");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", rMin2, "Through identifier post--");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-1", rMin3, "Through identifier --pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", rMin4, "Through identifier unary -");
    
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-1", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(min - 1), "Through parameter -");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(Bridge.identity(min3, (min3 = min3 - 1))), "Through parameter post--");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-1", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(((min4 = min4 - 1))), "Through parameter --pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(System.Int64(min).neg()), "Through parameter unary -");
            },
            testLong: function () {
                var $t;
                var max = System.Int64.MaxValue;
    
                var max1 = max;
                var max2 = max;
                var max3 = max;
                var max4 = max;
    
                var rMax1 = max.add(System.Int64(1));
                var rMax2 = ($t = max1, max1 = max1.inc(), $t);
                var rMax3 = (max2 = max2.inc());
                var rMax4 = System.Int64(2).mul(max);
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-9223372036854775808", rMax1, "Through identifier +");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("9223372036854775807", rMax2, "Through identifier post++");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-9223372036854775808", rMax3, "Through identifier ++pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2", rMax4, "Through identifier *");
    
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(max.add(System.Int64(1))), "Through parameter +");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(($t = max3, max3 = max3.inc(), $t)), "Through parameter post++");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass((max4 = max4.inc())), "Through parameter ++pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-2", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(System.Int64(2).mul(max)), "Through parameter *");
    
                var min = System.Int64.MinValue;
    
                var min1 = min;
                var min2 = min;
                var min3 = min;
                var min4 = min;
    
                var rMin1 = min.sub(System.Int64(1));
                var rMin2 = ($t = min1, min1 = min1.dec(), $t);
                var rMin3 = (min2 = min2.dec());
                var rMin4 = min.neg();
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("9223372036854775807", rMin1, "Through identifier -");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-9223372036854775808", rMin2, "Through identifier post--");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("9223372036854775807", rMin3, "Through identifier --pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-9223372036854775808", rMin4, "Through identifier unary -");
    
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(min.sub(System.Int64(1))), "Through parameter -");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(($t = min3, min3 = min3.dec(), $t)), "Through parameter post--");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass((min4 = min4.dec())), "Through parameter --pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(min.neg()), "Through parameter unary -");
            },
            testULong: function () {
                var $t;
                var max = System.UInt64.MaxValue;
    
                var max1 = max;
                var max2 = max;
                var max3 = max;
                var max4 = max;
    
                var rMax1 = max.add(System.UInt64(1));
                var rMax2 = ($t = max1, max1 = max1.inc(), $t);
                var rMax3 = (max2 = max2.inc());
                var rMax4 = System.UInt64(2).mul(max);
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", rMax1, "Through identifier +");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("18446744073709551615", rMax2, "Through identifier post++");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", rMax3, "Through identifier ++pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("18446744073709551614", rMax4, "Through identifier *");
    
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(max.add(System.UInt64(1))), "Through parameter +");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(($t = max3, max3 = max3.inc(), $t)), "Through parameter post++");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass((max4 = max4.inc())), "Through parameter ++pre");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("18446744073709551614", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(System.UInt64(2).mul(max)), "Through parameter *");
    
                var min = System.UInt64.MinValue;
    
                var min1 = min;
                var min2 = min;
                var min3 = min;
                var min4 = min;
    
                var rMin1 = min.sub(System.UInt64(1));
                var rMin2 = ($t = min1, min1 = min1.dec(), $t);
                var rMin3 = (min2 = min2.dec());
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("18446744073709551615", rMin1, "Through identifier -");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", rMin2, "Through identifier post--");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("18446744073709551615", rMin3, "Through identifier --pre");
    
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(min.sub(System.UInt64(1))), "Through parameter -");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass(($t = min3, min3 = min3.dec(), $t)), "Through parameter post--");
                Bridge.ClientTest.Batch2.CheckedUncheckedTests.assertEqual("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.bypass((min4 = min4.dec())), "Through parameter --pre");
            }
        }
    });
    
    Bridge.define('Bridge.ClientTest.Batch2.Constants', {
        statics: {
            BATCH_NAME: "Batch2",
            MODULE_ISSUES: "Issues",
            MODULE_CHECKED_UNCKECKED: "Checked/Unckecked"
        }
    });
    
    Bridge.init();
})(this);
