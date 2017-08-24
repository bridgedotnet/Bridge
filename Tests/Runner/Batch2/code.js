/**
 * Bridge Test library - special tests with custom config options like useTypedArrays
 * @version 16.2.0
 * @author Object.NET, Inc.
 * @copyright Copyright 2008-2017 Object.NET, Inc.
 * @compiler Bridge.NET 16.2.0
 */
Bridge.assembly("Bridge.ClientTest.Batch2", function ($asm, globals) {
    "use strict";

    Bridge.define("Bridge.ClientTest.Batch2.BridgeIssues.Bridge1385", {
        statics: {
            methods: {
                TestIsTypedArrayForByte: function () {
                    var value = System.Array.init(new Uint8Array(3), System.Byte);
                    Bridge.Test.NUnit.Assert.True(Bridge.is(value, System.Array.type(System.Byte)));
                }
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch2.BridgeIssues.Bridge1499", {
        methods: {
            TestObjectStringCoalesceWorks: function () {
                var $t, $t1, $t2, $t3, $t4, $t5, $t6, $t7, $t8, $t9, $t10, $t11, $t12, $t13, $t14, $t15, $t16, $t17, $t18, $t19;
                var def = Bridge.box(1, System.Int32);
                var app = null;
                var o1 = "";
                var o2 = "test";
                var o3 = null;

                Bridge.Test.NUnit.Assert.AreStrictEqual(1, Bridge.unbox(($t = app, $t !== null ? $t : def)));
                Bridge.Test.NUnit.Assert.AreStrictEqual("", Bridge.unbox(($t1 = o1, $t1 !== null ? $t1 : o2)));
                Bridge.Test.NUnit.Assert.AreStrictEqual("", Bridge.unbox(($t2 = o1, $t2 !== null ? $t2 : "test")));
                Bridge.Test.NUnit.Assert.AreStrictEqual("test", Bridge.unbox(($t3 = o3, $t3 !== null ? $t3 : o2)));
                Bridge.Test.NUnit.Assert.AreStrictEqual("test", Bridge.unbox(($t4 = o3, $t4 !== null ? $t4 : "test")));

                var s1 = "";
                var s2 = "test";
                var s3 = null;

                Bridge.Test.NUnit.Assert.AreStrictEqual("", ($t5 = s1, $t5 !== null ? $t5 : s2));
                Bridge.Test.NUnit.Assert.AreStrictEqual("", Bridge.unbox(($t6 = s1, $t6 !== null ? $t6 : o2)));
                Bridge.Test.NUnit.Assert.AreStrictEqual("", ($t7 = s1, $t7 !== null ? $t7 : "test"));
                Bridge.Test.NUnit.Assert.AreStrictEqual("", ($t8 = "", $t8 !== null ? $t8 : "test"));
                Bridge.Test.NUnit.Assert.AreStrictEqual("test", ($t9 = s3, $t9 !== null ? $t9 : s2));
                Bridge.Test.NUnit.Assert.AreStrictEqual("test", Bridge.unbox(($t10 = s3, $t10 !== null ? $t10 : o2)));
                Bridge.Test.NUnit.Assert.AreStrictEqual("test", ($t11 = s3, $t11 !== null ? $t11 : "test"));
                Bridge.Test.NUnit.Assert.AreStrictEqual("test", ($t12 = null, $t12 !== null ? $t12 : "test"));

                var i1 = 0;
                var i2 = 1;
                var i3 = null;

                Bridge.Test.NUnit.Assert.AreStrictEqual(0, ($t13 = i1, $t13 !== null ? $t13 : i2));
                Bridge.Test.NUnit.Assert.AreStrictEqual(0, Bridge.unbox(($t14 = i1, $t14 !== null ? Bridge.box($t14, System.Int32, System.Nullable.toString, System.Nullable.getHashCode) : o2)));
                Bridge.Test.NUnit.Assert.AreStrictEqual(0, ($t15 = i1, $t15 !== null ? $t15 : 1));
                Bridge.Test.NUnit.Assert.AreStrictEqual(1, ($t16 = i3, $t16 !== null ? $t16 : i2));
                Bridge.Test.NUnit.Assert.AreStrictEqual("test", Bridge.unbox(($t17 = i3, $t17 !== null ? Bridge.box($t17, System.Int32, System.Nullable.toString, System.Nullable.getHashCode) : o2)));
                Bridge.Test.NUnit.Assert.AreStrictEqual(1, ($t18 = i3, $t18 !== null ? $t18 : 1));
                Bridge.Test.NUnit.Assert.AreStrictEqual(1, ($t19 = null, $t19 !== null ? $t19 : i2));
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch2.BridgeIssues.N1122", {
        statics: {
            methods: {
                TestClippingInJavaScriptOverflowMode: function () {
                    var x = System.Double.max;

                    var y1 = Math.floor(x / 0.2);
                    Bridge.Test.NUnit.Assert.AreEqual(Number.POSITIVE_INFINITY, y1, "int");

                    var y2 = Math.floor(x / 0.2);
                    Bridge.Test.NUnit.Assert.AreEqual(Number.POSITIVE_INFINITY, y2, "uint");

                    var z1 = Math.floor(x / 0.2);
                    Bridge.Test.NUnit.Assert.AreEqual(Number.POSITIVE_INFINITY, z1, "long");

                    var z2 = Math.floor(x / 0.2);
                    Bridge.Test.NUnit.Assert.AreEqual(Number.POSITIVE_INFINITY, z2, "ulong");
                },
                TestIntegerDivisionInJavaScriptOverflowMode: function () {
                    var x = 1.1;

                    var y1 = 1 / x;
                    Bridge.Test.NUnit.Assert.AreEqual("0.9090909090909091", y1.toString(), "int");

                    var y2 = 1 / x;
                    Bridge.Test.NUnit.Assert.AreEqual("0.9090909090909091", y2.toString(), "uint");

                    var z1 = 1 / x;
                    Bridge.Test.NUnit.Assert.AreEqual("0.9090909090909091", z1.toString(), "long");

                    var z2 = 1 / x;
                    Bridge.Test.NUnit.Assert.AreEqual("0.9090909090909091", z2.toString(), "ulong");
                }
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch2.BridgeIssues.N1204", {
        statics: {
            methods: {
                TestStrictNullChecksOptionForNulls: function () {
                    var temp = { };
                    var temp1 = temp;
                    var temp2 = { };
                    var l = System.Int64(5);
                    var ol = System.Int64(5);
                    var oi = Bridge.box(5, System.Int32);
                    var varNull = null;
                    var varUndefined = temp["this-prop-undefined"];

                    Bridge.Test.NUnit.Assert.False(varNull === varUndefined, "varNull == varUndefined");
                    Bridge.Test.NUnit.Assert.True(varNull === null, "varNull == null");
                    Bridge.Test.NUnit.Assert.False(varUndefined === null, "varUndefined == null");
                    Bridge.Test.NUnit.Assert.True(undefined === varUndefined, "Script.Undefined == varUndefined");
                    Bridge.Test.NUnit.Assert.True(temp === temp1, "temp == temp1");
                    Bridge.Test.NUnit.Assert.False(temp === temp2, "temp == temp2");
                    Bridge.Test.NUnit.Assert.True(l.equals(System.Int64(5)), "l == 5");
                    Bridge.Test.NUnit.Assert.False(ol === oi, "ol == oi");

                    Bridge.Test.NUnit.Assert.False(varUndefined === varNull, "varUndefined == varNull");
                    Bridge.Test.NUnit.Assert.True(null === varNull, "null == varNull");
                    Bridge.Test.NUnit.Assert.False(null === varUndefined, "null == varUndefined");
                    Bridge.Test.NUnit.Assert.True(varUndefined === undefined, "varUndefined == Script.Undefined");
                    Bridge.Test.NUnit.Assert.True(temp1 === temp, "temp1 == temp");
                    Bridge.Test.NUnit.Assert.False(temp2 === temp, "temp2 == temp");
                    Bridge.Test.NUnit.Assert.True(System.Int64(5).equals(l), "5 == l");
                    Bridge.Test.NUnit.Assert.False(oi === ol, "oi == ol");
                }
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch2.BridgeIssues.N772", {
        statics: {
            methods: {
                TestUseCase: function () {
                    //These arrays depend on "useTypedArray" bridge.json option
                    var byteArray = System.Array.init(new Uint8Array(1), System.Byte);
                    var sbyteArray = System.Array.init(new Int8Array(2), System.SByte);
                    var shortArray = System.Array.init(new Int16Array(3), System.Int16);
                    var ushortArray = System.Array.init(new Uint16Array(4), System.UInt16);
                    var intArray = System.Array.init(new Int32Array(5), System.Int32);
                    var uintArray = System.Array.init(new Uint32Array(6), System.UInt32);
                    var floatArray = System.Array.init(new Float32Array(7), System.Single);
                    var doubleArray = System.Array.init(new Float64Array(8), System.Double);

                    //These arrays do not depend on "useTypedArray" bridge.json option
                    var stringArray = System.Array.init(9, null, System.String);
                    var decimalArray = System.Array.init(10, System.Decimal(0.0), System.Decimal);

                    byteArray[System.Array.index(0, byteArray)] = 1;
                    sbyteArray[System.Array.index(0, sbyteArray)] = 2;
                    shortArray[System.Array.index(0, shortArray)] = 3;
                    ushortArray[System.Array.index(0, ushortArray)] = 4;
                    intArray[System.Array.index(0, intArray)] = 5;
                    uintArray[System.Array.index(0, uintArray)] = 6;
                    floatArray[System.Array.index(0, floatArray)] = 7;
                    doubleArray[System.Array.index(0, doubleArray)] = 8;

                    stringArray[System.Array.index(0, stringArray)] = "9";
                    decimalArray[System.Array.index(0, decimalArray)] = System.Decimal(10.0);

                    Bridge.Test.NUnit.Assert.AreEqual(1, byteArray[System.Array.index(0, byteArray)], "get byteArray[0]");
                    Bridge.Test.NUnit.Assert.AreEqual(2, sbyteArray[System.Array.index(0, sbyteArray)], "get sbyteArray[0]");
                    Bridge.Test.NUnit.Assert.AreEqual(3, shortArray[System.Array.index(0, shortArray)], "get shortArray[0]");
                    Bridge.Test.NUnit.Assert.AreEqual(4, ushortArray[System.Array.index(0, ushortArray)], "get ushortArray[0]");
                    Bridge.Test.NUnit.Assert.AreEqual(5, intArray[System.Array.index(0, intArray)], "get intArray[0]");
                    Bridge.Test.NUnit.Assert.AreEqual(6, uintArray[System.Array.index(0, uintArray)], "get uintArray[0]");
                    Bridge.Test.NUnit.Assert.AreEqual(7, floatArray[System.Array.index(0, floatArray)], "get floatArray[0]");
                    Bridge.Test.NUnit.Assert.AreEqual(8, doubleArray[System.Array.index(0, doubleArray)], "get doubleArray[0]");

                    Bridge.Test.NUnit.Assert.AreEqual("9", stringArray[System.Array.index(0, stringArray)], "get stringArray[0]");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Decimal(10.0), decimalArray[System.Array.index(0, decimalArray)], "get decimalArray[0]");
                }
            }
        },
        methods: {
            TypePropertiesAreCorrect: function () {
                var arr = System.Array.init([1, 2, 3], System.Int32);
                Bridge.Test.NUnit.Assert.True(Bridge.is(arr, Array), "is Array should be true");
                Bridge.Test.NUnit.Assert.True(Bridge.is(arr, System.Array.type(System.Int32)), "is int[] should be true");
                Bridge.Test.NUnit.Assert.True(Bridge.is(arr, System.Collections.ICollection), "is ICollection should be true");
                Bridge.Test.NUnit.Assert.True(Bridge.is(arr, System.Collections.IEnumerable), "is IEnumerable should be true");
                Bridge.Test.NUnit.Assert.True(Bridge.is(arr, System.ICloneable), "is ICloneable should be true");
                Bridge.Test.NUnit.Assert.True(Bridge.is(arr, System.Collections.Generic.ICollection$1(System.Int32)), "is ICollection<int> should be true");
                Bridge.Test.NUnit.Assert.True(Bridge.is(arr, System.Collections.Generic.IEnumerable$1(System.Int32)), "is IEnumerable<int> should be true");
                Bridge.Test.NUnit.Assert.True(Bridge.is(arr, System.Collections.Generic.IList$1(System.Int32)), "is IList<int> should be true");
            },
            LengthWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual(0, System.Array.init(new Int32Array(0), System.Int32).length);
                Bridge.Test.NUnit.Assert.AreEqual(1, System.Array.init(["x"], System.String).length);
                Bridge.Test.NUnit.Assert.AreEqual(2, System.Array.init(["x", "y"], System.String).length);
            },
            RankIsOne: function () {
                Bridge.Test.NUnit.Assert.AreEqual(1, System.Array.getRank(System.Array.init(new Int32Array(0), System.Int32)));
            },
            GetLengthWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual(0, System.Array.getLength(System.Array.init(new Int32Array(0), System.Int32), 0));
                Bridge.Test.NUnit.Assert.AreEqual(1, System.Array.getLength(System.Array.init(["x"], System.String), 0));
                Bridge.Test.NUnit.Assert.AreEqual(2, System.Array.getLength(System.Array.init(["x", "y"], System.String), 0));
            },
            GetLowerBound: function () {
                Bridge.Test.NUnit.Assert.AreEqual(0, System.Array.getLower(System.Array.init(new Int32Array(0), System.Int32), 0));
                Bridge.Test.NUnit.Assert.AreEqual(0, System.Array.getLower(System.Array.init(["x"], System.String), 0));
                Bridge.Test.NUnit.Assert.AreEqual(0, System.Array.getLower(System.Array.init(["x", "y"], System.String), 0));
            },
            GetUpperBoundWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual(-1, (System.Array.getLength(System.Array.init(new Int32Array(0), System.Int32), 0) - 1));
                Bridge.Test.NUnit.Assert.AreEqual(0, (System.Array.getLength(System.Array.init(["x"], System.String), 0) - 1));
                Bridge.Test.NUnit.Assert.AreEqual(1, (System.Array.getLength(System.Array.init(["x", "y"], System.String), 0) - 1));
            },
            GettingValueByIndexWorks: function () {
                var $t, $t1;
                Bridge.Test.NUnit.Assert.AreEqual("x", ($t = System.Array.init(["x", "y"], System.String))[System.Array.index(0, $t)]);
                Bridge.Test.NUnit.Assert.AreEqual("y", ($t1 = System.Array.init(["x", "y"], System.String))[System.Array.index(1, $t1)]);
            },
            GetValueWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual("x", Bridge.unbox(System.Array.get(System.Array.init(["x", "y"], System.String), 0)));
                Bridge.Test.NUnit.Assert.AreEqual("y", Bridge.unbox(System.Array.get(System.Array.init(["x", "y"], System.String), 1)));
            },
            SettingValueByIndexWorks: function () {
                var arr = System.Array.init(2, null, System.String);
                arr[System.Array.index(0, arr)] = "x";
                arr[System.Array.index(1, arr)] = "y";
                Bridge.Test.NUnit.Assert.AreEqual("x", arr[System.Array.index(0, arr)]);
                Bridge.Test.NUnit.Assert.AreEqual("y", arr[System.Array.index(1, arr)]);
            },
            SetValueWorks: function () {
                var arr = System.Array.init(2, null, System.String);
                System.Array.set(arr, "x", 0);
                System.Array.set(arr, "y", 1);
                Bridge.Test.NUnit.Assert.AreEqual("x", arr[System.Array.index(0, arr)]);
                Bridge.Test.NUnit.Assert.AreEqual("y", arr[System.Array.index(1, arr)]);
            },
            ForeachWorks: function () {
                var $t;
                var result = "";
                $t = Bridge.getEnumerator(System.Array.init(["x", "y"], System.String));
                try {
                    while ($t.moveNext()) {
                        var s = $t.Current;
                        result = System.String.concat(result, s);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$dispose();
                    }
                }Bridge.Test.NUnit.Assert.AreEqual("xy", result);
            },
            CloneWorks: function () {
                var arr = System.Array.init(["x", "y"], System.String);
                var arr2 = System.Array.clone(arr);
                Bridge.Test.NUnit.Assert.False(arr === arr2);
                Bridge.Test.NUnit.Assert.AreEqual(Bridge.unbox(arr2), arr);
            },
            ConcatWorks: function () {
                var arr = System.Array.init(["a", "b"], System.String);
                Bridge.Test.NUnit.Assert.AreDeepEqual(System.Array.init(["a", "b", "c"], System.String), arr.concat("c"));
                Bridge.Test.NUnit.Assert.AreDeepEqual(System.Array.init(["a", "b", "c", "d"], System.String), arr.concat("c", "d"));
                Bridge.Test.NUnit.Assert.AreDeepEqual(System.Array.init(["a", "b"], System.String), arr);
            },
            ContainsWorks: function () {
                var arr = System.Array.init(["x", "y"], System.String);
                Bridge.Test.NUnit.Assert.True(System.Array.contains(arr, "x", System.String));
                Bridge.Test.NUnit.Assert.False(System.Array.contains(arr, "z", System.String));
            },
            ContainsUsesEqualsMethod: function () {
                var arr = System.Array.init([new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(1), new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(2), new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(3)], Bridge.ClientTest.Batch2.BridgeIssues.N772.C);
                Bridge.Test.NUnit.Assert.True(System.Array.contains(arr, new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(2), Bridge.ClientTest.Batch2.BridgeIssues.N772.C));
                Bridge.Test.NUnit.Assert.False(System.Array.contains(arr, new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(4), Bridge.ClientTest.Batch2.BridgeIssues.N772.C));
            },
            AllWithArrayItemFilterCallbackWorks: function () {
                Bridge.Test.NUnit.Assert.True(System.Linq.Enumerable.from(System.Array.init([1, 2, 3], System.Int32)).all($asm.$.Bridge.ClientTest.Batch2.BridgeIssues.N772.f1));
                Bridge.Test.NUnit.Assert.False(System.Linq.Enumerable.from(System.Array.init([1, 2, 3], System.Int32)).all($asm.$.Bridge.ClientTest.Batch2.BridgeIssues.N772.f2));
            },
            SliceWithoutEndWorks: function () {
                Bridge.Test.NUnit.Assert.AreDeepEqual(System.Array.init(["c", "d"], System.String), System.Array.init(["a", "b", "c", "d"], System.String).slice(2));
                Bridge.Test.NUnit.Assert.AreDeepEqual(System.Array.init(["b", "c"], System.String), System.Array.init(["a", "b", "c", "d"], System.String).slice(1, 3));
            },
            ForeachWithArrayItemCallbackWorks: function () {
                var result = "";
                System.Array.init(["a", "b", "c"], System.String).forEach(function (s) {
                        result = System.String.concat(result, s);
                    });
                Bridge.Test.NUnit.Assert.AreEqual("abc", result);
            },
            IndexOfWithoutStartIndexWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual(1, System.Array.init(["a", "b", "c", "b"], System.String).indexOf("b"));
            },
            IndexOfWithoutStartIndexUsesEqualsMethod: function () {
                var arr = System.Array.init([new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(1), new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(2), new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(3)], Bridge.ClientTest.Batch2.BridgeIssues.N772.C);
                Bridge.Test.NUnit.Assert.AreEqual(1, System.Array.indexOfT(arr, new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(2)));
                Bridge.Test.NUnit.Assert.AreEqual(-1, System.Array.indexOfT(arr, new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(4)));
            },
            IndexOfWithStartIndexWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual(3, System.Array.init(["a", "b", "c", "b"], System.String).indexOf("b", 2));
            },
            JoinWithoutDelimiterWorks: function () {
                Bridge.Test.NUnit.Assert.AreEqual("a,b,c,b", System.Array.init(["a", "b", "c", "b"], System.String).join(","));

                Bridge.Test.NUnit.Assert.AreEqual("a|b|c|b", System.Array.init(["a", "b", "c", "b"], System.String).join("|"));
            },
            ReverseWorks: function () {
                var arr = System.Array.init([1, 3, 4, 1, 3, 2], System.Int32);
                arr.reverse();
                Bridge.Test.NUnit.Assert.AreEqual(System.Array.init([2, 3, 1, 4, 3, 1], System.Int32), arr);
            },
            AnyWithArrayItemFilterCallbackWorks: function () {
                Bridge.Test.NUnit.Assert.True(System.Linq.Enumerable.from(System.Array.init([1, 2, 3, 4], System.Int32)).any($asm.$.Bridge.ClientTest.Batch2.BridgeIssues.N772.f3));
                Bridge.Test.NUnit.Assert.False(System.Linq.Enumerable.from(System.Array.init([1, 2, 3, 4], System.Int32)).any($asm.$.Bridge.ClientTest.Batch2.BridgeIssues.N772.f4));
            },
            BinarySearch1Works: function () {
                var arr = System.Array.init([1, 2, 3, 3, 4, 5], System.Int32);

                Bridge.Test.NUnit.Assert.AreEqual(2, System.Array.binarySearch(arr, 0, arr.length, 3));
                Bridge.Test.NUnit.Assert.True(System.Array.binarySearch(arr, 0, arr.length, 6) < 0);
            },
            BinarySearch2Works: function () {
                var arr = System.Array.init([1, 2, 3, 3, 4, 5], System.Int32);

                Bridge.Test.NUnit.Assert.AreEqual(3, System.Array.binarySearch(arr, 3, 2, 3));
                Bridge.Test.NUnit.Assert.True(System.Array.binarySearch(arr, 2, 2, 4) < 0);
            },
            BinarySearch3Works: function () {
                var arr = System.Array.init([1, 2, 3, 3, 4, 5], System.Int32);

                Bridge.Test.NUnit.Assert.AreEqual(2, System.Array.binarySearch(arr, 0, arr.length, 3, new Bridge.ClientTest.Batch2.BridgeIssues.N772.TestReverseComparer()));
                Bridge.Test.NUnit.Assert.AreEqual(-1, System.Array.binarySearch(arr, 0, arr.length, 6, new Bridge.ClientTest.Batch2.BridgeIssues.N772.TestReverseComparer()));
            },
            BinarySearch4Works: function () {
                var arr = System.Array.init([1, 2, 3, 3, 4, 5], System.Int32);

                Bridge.Test.NUnit.Assert.AreEqual(3, System.Array.binarySearch(arr, 3, 2, 3, new Bridge.ClientTest.Batch2.BridgeIssues.N772.TestReverseComparer()));
                Bridge.Test.NUnit.Assert.True(System.Array.binarySearch(arr, 3, 2, 4, new Bridge.ClientTest.Batch2.BridgeIssues.N772.TestReverseComparer()) < 0);
            },
            BinarySearchExceptionsWorks: function () {
                var arr1 = null;
                var arr2 = System.Array.init([1, 2, 3, 3, 4, 5], System.Int32);

                Bridge.Test.NUnit.Assert.Throws$1(function () {
                    System.Array.binarySearch(arr1, 0, arr1.length, 1);
                });
                Bridge.Test.NUnit.Assert.Throws$1(function () {
                    System.Array.binarySearch(arr2, -1, 1, 1);
                });
                Bridge.Test.NUnit.Assert.Throws$1(function () {
                    System.Array.binarySearch(arr2, 1, 6, 1);
                });
            },
            SortWithDefaultCompareWorks: function () {
                var arr = System.Array.init([1, 6, 6, 4, 2], System.Int32);
                arr.sort();
                Bridge.Test.NUnit.Assert.AreEqual(System.Array.init([1, 2, 4, 6, 6], System.Int32), arr);
            },
            Sort1Works: function () {
                var arr = System.Array.init([1, 6, 6, 4, 2], System.Int32);
                System.Array.sort(arr);
                Bridge.Test.NUnit.Assert.AreEqual(System.Array.init([1, 2, 4, 6, 6], System.Int32), arr);
            },
            Sort2Works: function () {
                var arr = System.Array.init([1, 6, 6, 4, 2], System.Int32);
                System.Array.sort(arr, 2, 3);
                Bridge.Test.NUnit.Assert.AreEqual(System.Array.init([1, 6, 2, 4, 6], System.Int32), arr);
            },
            Sort3Works: function () {
                var arr = System.Array.init([1, 2, 6, 3, 6, 7], System.Int32);
                System.Array.sort(arr, 2, 3, new Bridge.ClientTest.Batch2.BridgeIssues.N772.TestReverseComparer());
                Bridge.Test.NUnit.Assert.AreEqual(System.Array.init([1, 2, 6, 6, 3, 7], System.Int32), arr);
            },
            Sort4Works: function () {
                var arr = System.Array.init([1, 6, 6, 4, 2], System.Int32);
                System.Array.sort(arr, new Bridge.ClientTest.Batch2.BridgeIssues.N772.TestReverseComparer());
                Bridge.Test.NUnit.Assert.AreEqual(System.Array.init([6, 6, 4, 2, 1], System.Int32), arr);
            },
            SortExceptionsWorks: function () {
                var arr1 = null;

                Bridge.Test.NUnit.Assert.Throws$1(function () {
                    System.Array.sort(arr1);
                });
            },
            ForeachWhenCastToIListWorks: function () {
                var $t;
                var list = System.Array.init(["x", "y"], System.String);
                var result = "";
                $t = Bridge.getEnumerator(list, System.String);
                try {
                    while ($t.moveNext()) {
                        var s = $t.Current;
                        result = System.String.concat(result, s);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$dispose();
                    }
                }Bridge.Test.NUnit.Assert.AreEqual("xy", result);
            },
            ICollectionCountWorks: function () {
                var l = System.Array.init(["x", "y", "z"], System.String);
                Bridge.Test.NUnit.Assert.AreEqual(3, System.Array.getCount(l, System.String));
            },
            ICollectionAddWorks: function () {
                var l = System.Array.init(["x", "y", "z"], System.String);
                Bridge.Test.NUnit.Assert.Throws$2(System.NotSupportedException, function () {
                    System.Array.add(l, "a", System.String);
                });
            },
            ICollectionClearWorks: function () {
                var l = System.Array.init(["x", "y", "z"], System.String);
                Bridge.Test.NUnit.Assert.Throws$2(System.NotSupportedException, function () {
                    System.Array.clear(l, System.String);
                });
            },
            ICollectionContainsWorks: function () {
                var l = System.Array.init(["x", "y", "z"], System.String);
                Bridge.Test.NUnit.Assert.True(System.Array.contains(l, "y", System.String));
                Bridge.Test.NUnit.Assert.False(System.Array.contains(l, "a", System.String));
            },
            ICollectionContainsUsesEqualsMethod: function () {
                var l = System.Array.init([new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(1), new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(2), new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(3)], Bridge.ClientTest.Batch2.BridgeIssues.N772.C);
                Bridge.Test.NUnit.Assert.True(System.Array.contains(l, new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(2), Bridge.ClientTest.Batch2.BridgeIssues.N772.C));
                Bridge.Test.NUnit.Assert.False(System.Array.contains(l, new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(4), Bridge.ClientTest.Batch2.BridgeIssues.N772.C));
            },
            ICollectionRemoveWorks: function () {
                var l = System.Array.init(["x", "y", "z"], System.String);
                Bridge.Test.NUnit.Assert.Throws$2(System.NotSupportedException, function () {
                    System.Array.remove(l, "y", System.String);
                });
            },
            IListIndexingWorks: function () {
                var l = System.Array.init(["x", "y", "z"], System.String);
                Bridge.Test.NUnit.Assert.AreEqual("y", System.Array.getItem(l, 1, System.String));
                System.Array.setItem(l, 1, "a", System.String);
                Bridge.Test.NUnit.Assert.AreEqual(System.Array.init(["x", "a", "z"], System.String), System.Linq.Enumerable.from(l).toArray());
            },
            IListIndexOfWorks: function () {
                var l = System.Array.init(["x", "y", "z"], System.String);
                Bridge.Test.NUnit.Assert.AreEqual(1, System.Array.indexOf(l, "y", 0, null, System.String));
                Bridge.Test.NUnit.Assert.AreEqual(-1, System.Array.indexOf(l, "a", 0, null, System.String));
            },
            IListIndexOfUsesEqualsMethod: function () {
                var arr = System.Array.init([new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(1), new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(2), new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(3)], Bridge.ClientTest.Batch2.BridgeIssues.N772.C);
                Bridge.Test.NUnit.Assert.AreEqual(1, System.Array.indexOfT(arr, new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(2)));
                Bridge.Test.NUnit.Assert.AreEqual(-1, System.Array.indexOfT(arr, new Bridge.ClientTest.Batch2.BridgeIssues.N772.C(4)));
            },
            IListInsertWorks: function () {
                var l = System.Array.init(["x", "y", "z"], System.String);
                Bridge.Test.NUnit.Assert.Throws$2(System.NotSupportedException, function () {
                    System.Array.insert(l, 1, "a", System.String);
                });
            },
            IListRemoveAtWorks: function () {
                var l = System.Array.init(["x", "y", "z"], System.String);
                Bridge.Test.NUnit.Assert.Throws$2(System.NotSupportedException, function () {
                    System.Array.removeAt(l, 1, System.String);
                });
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch2.BridgeIssues.N772", $asm.$);

    Bridge.apply($asm.$.Bridge.ClientTest.Batch2.BridgeIssues.N772, {
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

    Bridge.define("Bridge.ClientTest.Batch2.BridgeIssues.N772.C", {
        fields: {
            i: 0
        },
        ctors: {
            ctor: function (i) {
                this.$initialize();
                this.i = i;
            }
        },
        methods: {
            equals: function (o) {
                return Bridge.is(o, Bridge.ClientTest.Batch2.BridgeIssues.N772.C) && this.i === Bridge.cast(o, Bridge.ClientTest.Batch2.BridgeIssues.N772.C).i;
            },
            getHashCode: function () {
                return this.i;
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch2.BridgeIssues.N772.TestReverseComparer", {
        inherits: [System.Collections.Generic.IComparer$1(System.Int32)],
        alias: ["compare", ["System$Collections$Generic$IComparer$1$System$Int32$compare", "System$Collections$Generic$IComparer$1$compare"]],
        methods: {
            compare: function (x, y) {
                return x === y ? 0 : (x > y ? -1 : 1);
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch2.CheckedUncheckedTests", {
        statics: {
            methods: {
                AssertEqual: function (expected, actual, message) {
                    if (message === void 0) { message = null; }
                    Bridge.Test.NUnit.Assert.AreEqual(expected.toString(), actual.toString(), message);
                },
                Bypass: function (o) {
                    return o;
                }
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests", {
        statics: {
            methods: {
                TestInt32: function () {
                    var max = 2147483647;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.check(max + 1, System.Int32);
                    }, "Through identifier +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.identity(max2, (max2 = Bridge.Int.check(max2 + 1, System.Int32)));
                    }, "Through identifier post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = ((max3 = Bridge.Int.check(max3 + 1, System.Int32)));
                    }, "Through identifier ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.mul(2, max, 1);
                    }, "Through identifier *");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.check(max + 1, System.Int32), System.Int32));
                    }, "Through parameter +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, (max3 = Bridge.Int.check(max3 + 1, System.Int32))), System.Int32));
                    }, "Through parameter post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = Bridge.Int.check(max4 + 1, System.Int32))), System.Int32));
                    }, "Through parameter ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.mul(2, max, 1), System.Int32));
                    }, "Through parameter *");

                    var min = -2147483648;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.check(min - 1, System.Int32);
                    }, "Through identifier -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.identity(min1, (min1 = Bridge.Int.check(min1 - 1, System.Int32)));
                    }, "Through identifier post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = ((min2 = Bridge.Int.check(min2 - 1, System.Int32)));
                    }, "Through identifier pre--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.check(-min, System.Int32);
                    }, "Through identifier unary -");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.check(min - 1, System.Int32), System.Int32));
                    }, "Through parameter -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(min3, (min3 = Bridge.Int.check(min3 - 1, System.Int32))), System.Int32));
                    }, "Through parameter post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min4 = Bridge.Int.check(min4 - 1, System.Int32))), System.Int32));
                    }, "Through parameter --pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.check(-min, System.Int32), System.Int32));
                    }, "Through parameter unary -");
                },
                TestUInt32: function () {
                    var max = 4294967295;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.check(max + 1, System.UInt32);
                    }, "Through identifier +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.identity(max1, (max1 = Bridge.Int.check(max1 + 1, System.UInt32)));
                    }, "Through identifier post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = ((max2 = Bridge.Int.check(max2 + 1, System.UInt32)));
                    }, "Through identifier ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.umul(2, max, 1);
                    }, "Through identifier *");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.check(max + 1, System.UInt32), System.UInt32));
                    }, "Through parameter +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, (max3 = Bridge.Int.check(max3 + 1, System.UInt32))), System.UInt32));
                    }, "Through parameter post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = Bridge.Int.check(max4 + 1, System.UInt32))), System.UInt32));
                    }, "Through parameter ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.umul(2, max, 1), System.UInt32));
                    }, "Through parameter *");

                    var min = 0;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.check(min - 1, System.UInt32);
                    }, "Through identifier -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.identity(min1, (min1 = Bridge.Int.check(min1 - 1, System.UInt32)));
                    }, "Through identifier post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = ((min2 = Bridge.Int.check(min2 - 1, System.UInt32)));
                    }, "Through identifier pre--");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.check(min - 1, System.UInt32), System.UInt32));
                    }, "Through parameter -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(min3, (min3 = Bridge.Int.check(min3 - 1, System.UInt32))), System.UInt32));
                    }, "Through parameter post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min4 = Bridge.Int.check(min4 - 1, System.UInt32))), System.UInt32));
                    }, "Through parameter --pre");
                },
                TestLong: function () {
                    var max = System.Int64.MaxValue;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = max.add(System.Int64(1), 1);
                    }, "Through identifier +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        var r = ($t = max1, max1 = max1.inc(1), $t);
                    }, "Through identifier post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = (max2 = max2.inc(1));
                    }, "Through identifier ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = System.Int64(2).mul(max, 1);
                    }, "Through identifier *");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(max.add(System.Int64(1), 1));
                    }, "Through parameter +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = max3, max3 = max3.inc(1), $t));
                    }, "Through parameter post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((max4 = max4.inc(1)));
                    }, "Through parameter ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.Int64(2).mul(max, 1));
                    }, "Through parameter *");

                    var min = System.Int64.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = min.sub(System.Int64(1), 1);
                    }, "Through identifier -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        var r = ($t = min1, min1 = min1.dec(1), $t);
                    }, "Through identifier post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = (min2 = min2.dec(1));
                    }, "Through identifier pre--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = min.neg(1);
                    }, "Through identifier unary -");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.sub(System.Int64(1), 1));
                    }, "Through parameter -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = min3, min3 = min3.dec(1), $t));
                    }, "Through parameter post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((min4 = min4.dec(1)));
                    }, "Through parameter --pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.neg(1));
                    }, "Through parameter unary -");
                },
                TestULong: function () {
                    var max = System.UInt64.MaxValue;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = max.add(System.UInt64(1), 1);
                    }, "Through identifier +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        var r = ($t = max1, max1 = max1.inc(1), $t);
                    }, "Through identifier post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = (max2 = max2.inc(1));
                    }, "Through identifier ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = System.UInt64(2).mul(max, 1);
                    }, "Through identifier *");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(max.add(System.UInt64(1), 1));
                    }, "Through parameter +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = max3, max3 = max3.inc(1), $t));
                    }, "Through parameter post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((max4 = max4.inc(1)));
                    }, "Through parameter ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.UInt64(2).mul(max, 1));
                    }, "Through parameter *");

                    var min = System.UInt64.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = min.sub(System.UInt64(1), 1);
                    }, "Through identifier -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        var r = ($t = min1, min1 = min1.dec(1), $t);
                    }, "Through identifier post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = (min2 = min2.dec(1));
                    }, "Through identifier pre--");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.sub(System.UInt64(1), 1));
                    }, "Through parameter -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = min3, min3 = min3.dec(1), $t));
                    }, "Through parameter post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((min4 = min4.dec(1)));
                    }, "Through parameter --pre");
                }
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedTests", {
        statics: {
            methods: {
                TestInt32: function () {
                    var max = 2147483647;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.check(max + 1, System.Int32);
                    }, "Through identifier +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.identity(max2, (max2 = Bridge.Int.check(max2 + 1, System.Int32)));
                    }, "Through identifier post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = ((max3 = Bridge.Int.check(max3 + 1, System.Int32)));
                    }, "Through identifier ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.mul(2, max, 1);
                    }, "Through identifier *");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.check(max + 1, System.Int32), System.Int32));
                    }, "Through parameter +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, (max3 = Bridge.Int.check(max3 + 1, System.Int32))), System.Int32));
                    }, "Through parameter post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = Bridge.Int.check(max4 + 1, System.Int32))), System.Int32));
                    }, "Through parameter ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.mul(2, max, 1), System.Int32));
                    }, "Through parameter *");

                    var min = -2147483648;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.check(min - 1, System.Int32);
                    }, "Through identifier -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.identity(min1, (min1 = Bridge.Int.check(min1 - 1, System.Int32)));
                    }, "Through identifier post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = ((min2 = Bridge.Int.check(min2 - 1, System.Int32)));
                    }, "Through identifier pre--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.check(-min, System.Int32);
                    }, "Through identifier unary -");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.check(min - 1, System.Int32), System.Int32));
                    }, "Through parameter -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(min3, (min3 = Bridge.Int.check(min3 - 1, System.Int32))), System.Int32));
                    }, "Through parameter post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min4 = Bridge.Int.check(min4 - 1, System.Int32))), System.Int32));
                    }, "Through parameter --pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.check(-min, System.Int32), System.Int32));
                    }, "Through parameter unary -");
                },
                TestUInt32: function () {
                    var max = 4294967295;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.check(max + 1, System.UInt32);
                    }, "Through identifier +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.identity(max1, (max1 = Bridge.Int.check(max1 + 1, System.UInt32)));
                    }, "Through identifier post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = ((max2 = Bridge.Int.check(max2 + 1, System.UInt32)));
                    }, "Through identifier ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.umul(2, max, 1);
                    }, "Through identifier *");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.check(max + 1, System.UInt32), System.UInt32));
                    }, "Through parameter +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, (max3 = Bridge.Int.check(max3 + 1, System.UInt32))), System.UInt32));
                    }, "Through parameter post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = Bridge.Int.check(max4 + 1, System.UInt32))), System.UInt32));
                    }, "Through parameter ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.umul(2, max, 1), System.UInt32));
                    }, "Through parameter *");

                    var min = 0;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.Int.check(min - 1, System.UInt32);
                    }, "Through identifier -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = Bridge.identity(min1, (min1 = Bridge.Int.check(min1 - 1, System.UInt32)));
                    }, "Through identifier post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = ((min2 = Bridge.Int.check(min2 - 1, System.UInt32)));
                    }, "Through identifier pre--");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.check(min - 1, System.UInt32), System.UInt32));
                    }, "Through parameter -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(min3, (min3 = Bridge.Int.check(min3 - 1, System.UInt32))), System.UInt32));
                    }, "Through parameter post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min4 = Bridge.Int.check(min4 - 1, System.UInt32))), System.UInt32));
                    }, "Through parameter --pre");
                },
                TestLong: function () {
                    var max = System.Int64.MaxValue;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = max.add(System.Int64(1), 1);
                    }, "Through identifier +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        var r = ($t = max1, max1 = max1.inc(1), $t);
                    }, "Through identifier post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = (max2 = max2.inc(1));
                    }, "Through identifier ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = System.Int64(2).mul(max, 1);
                    }, "Through identifier *");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(max.add(System.Int64(1), 1));
                    }, "Through parameter +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = max3, max3 = max3.inc(1), $t));
                    }, "Through parameter post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((max4 = max4.inc(1)));
                    }, "Through parameter ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.Int64(2).mul(max, 1));
                    }, "Through parameter *");

                    var min = System.Int64.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = min.sub(System.Int64(1), 1);
                    }, "Through identifier -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        var r = ($t = min1, min1 = min1.dec(1), $t);
                    }, "Through identifier post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = (min2 = min2.dec(1));
                    }, "Through identifier pre--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = min.neg(1);
                    }, "Through identifier unary -");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.sub(System.Int64(1), 1));
                    }, "Through parameter -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = min3, min3 = min3.dec(1), $t));
                    }, "Through parameter post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((min4 = min4.dec(1)));
                    }, "Through parameter --pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.neg(1));
                    }, "Through parameter unary -");
                },
                TestULong: function () {
                    var max = System.UInt64.MaxValue;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = max.add(System.UInt64(1), 1);
                    }, "Through identifier +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        var r = ($t = max1, max1 = max1.inc(1), $t);
                    }, "Through identifier post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = (max2 = max2.inc(1));
                    }, "Through identifier ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = System.UInt64(2).mul(max, 1);
                    }, "Through identifier *");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(max.add(System.UInt64(1), 1));
                    }, "Through parameter +");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = max3, max3 = max3.inc(1), $t));
                    }, "Through parameter post++");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((max4 = max4.inc(1)));
                    }, "Through parameter ++pre");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.UInt64(2).mul(max, 1));
                    }, "Through parameter *");

                    var min = System.UInt64.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = min.sub(System.UInt64(1), 1);
                    }, "Through identifier -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        var r = ($t = min1, min1 = min1.dec(1), $t);
                    }, "Through identifier post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var r = (min2 = min2.dec(1));
                    }, "Through identifier pre--");

                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.sub(System.UInt64(1), 1));
                    }, "Through parameter -");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        var $t;
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = min3, min3 = min3.dec(1), $t));
                    }, "Through parameter post--");
                    Bridge.Test.NUnit.Assert.Throws$2(System.OverflowException, function () {
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((min4 = min4.dec(1)));
                    }, "Through parameter --pre");
                }
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedInsideCheckedTests", {
        statics: {
            methods: {
                TestInt32: function () {
                    var max = 2147483647;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    var rMax1 = (max + 1) | 0;
                    var rMax2 = Bridge.identity(max1, (max1 = (max1 + 1) | 0));
                    var rMax3 = ((max2 = (max2 + 1) | 0));
                    var rMax4 = Bridge.Int.mul(2, max);
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483648", Bridge.box(rMax1, System.Int32), "Through identifier +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("2147483647", Bridge.box(rMax2, System.Int32), "Through identifier post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483648", Bridge.box(rMax3, System.Int32), "Through identifier ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2", Bridge.box(rMax4, System.Int32), "Through identifier *");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max + 1) | 0), System.Int32)), "Through parameter +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, (max3 = (max3 + 1) | 0)), System.Int32)), "Through parameter post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = (max4 + 1) | 0)), System.Int32)), "Through parameter ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.mul(2, max), System.Int32)), "Through parameter *");

                    var min = -2147483648;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = (min - 1) | 0;
                    var rMin2 = Bridge.identity(min1, (min1 = (min1 - 1) | 0));
                    var rMin3 = ((min2 = (min2 - 1) | 0));
                    var rMin4 = (-min) | 0;
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("2147483647", Bridge.box(rMin1, System.Int32), "Through identifier -");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483648", Bridge.box(rMin2, System.Int32), "Through identifier post--");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("2147483647", Bridge.box(rMin3, System.Int32), "Through identifier --pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483648", Bridge.box(rMin4, System.Int32), "Through identifier unary -");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min - 1) | 0), System.Int32)), "Through parameter -");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(min3, (min3 = (min3 - 1) | 0)), System.Int32)), "Through parameter post--");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min4 = (min4 - 1) | 0)), System.Int32)), "Through parameter --pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((-min) | 0), System.Int32)), "Through parameter unary -");
                },
                TestUInt32: function () {
                    var max = 4294967295;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    var rMax1 = (max + 1) >>> 0;
                    var rMax2 = Bridge.identity(max1, (max1 = (max1 + 1) >>> 0));
                    var rMax3 = ((max2 = (max2 + 1) >>> 0));
                    var rMax4 = Bridge.Int.umul(2, max);
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.box(rMax1, System.UInt32), "Through identifier +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967295", Bridge.box(rMax2, System.UInt32), "Through identifier post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.box(rMax3, System.UInt32), "Through identifier ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967294", Bridge.box(rMax4, System.UInt32), "Through identifier *");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max + 1) >>> 0), System.UInt32)), "Through parameter +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, (max3 = (max3 + 1) >>> 0)), System.UInt32)), "Through parameter post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = (max4 + 1) >>> 0)), System.UInt32)), "Through parameter ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967294", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.umul(2, max), System.UInt32)), "Through parameter *");

                    var min = 0;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = (min - 1) >>> 0;
                    var rMin2 = Bridge.identity(min1, (min1 = (min1 - 1) >>> 0));
                    var rMin3 = ((min2 = (min2 - 1) >>> 0));
                    var rMin4 = System.Int64(min).neg();
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967295", Bridge.box(rMin1, System.UInt32), "Through identifier -");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.box(rMin2, System.UInt32), "Through identifier post--");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967295", Bridge.box(rMin3, System.UInt32), "Through identifier --pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", rMin4, "Through identifier unary -");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min - 1) >>> 0), System.UInt32)), "Through parameter -");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(min3, (min3 = (min3 - 1) >>> 0)), System.UInt32)), "Through parameter post--");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min4 = (min4 - 1) >>> 0)), System.UInt32)), "Through parameter --pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.Int64(min).neg()), "Through parameter unary -");
                },
                TestLong: function () {
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
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-9223372036854775808", rMax1, "Through identifier +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("9223372036854775807", rMax2, "Through identifier post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-9223372036854775808", rMax3, "Through identifier ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2", rMax4, "Through identifier *");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(max.add(System.Int64(1))), "Through parameter +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = max3, max3 = max3.inc(), $t)), "Through parameter post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((max4 = max4.inc())), "Through parameter ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.Int64(2).mul(max)), "Through parameter *");

                    var min = System.Int64.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min.sub(System.Int64(1));
                    var rMin2 = ($t = min1, min1 = min1.dec(), $t);
                    var rMin3 = (min2 = min2.dec());
                    var rMin4 = min.neg();
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("9223372036854775807", rMin1, "Through identifier -");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-9223372036854775808", rMin2, "Through identifier post--");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("9223372036854775807", rMin3, "Through identifier --pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-9223372036854775808", rMin4, "Through identifier unary -");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.sub(System.Int64(1))), "Through parameter -");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = min3, min3 = min3.dec(), $t)), "Through parameter post--");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((min4 = min4.dec())), "Through parameter --pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.neg()), "Through parameter unary -");
                },
                TestULong: function () {
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
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", rMax1, "Through identifier +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("18446744073709551615", rMax2, "Through identifier post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", rMax3, "Through identifier ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("18446744073709551614", rMax4, "Through identifier *");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(max.add(System.UInt64(1))), "Through parameter +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = max3, max3 = max3.inc(), $t)), "Through parameter post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((max4 = max4.inc())), "Through parameter ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("18446744073709551614", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.UInt64(2).mul(max)), "Through parameter *");

                    var min = System.UInt64.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min.sub(System.UInt64(1));
                    var rMin2 = ($t = min1, min1 = min1.dec(), $t);
                    var rMin3 = (min2 = min2.dec());
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("18446744073709551615", rMin1, "Through identifier -");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", rMin2, "Through identifier post--");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("18446744073709551615", rMin3, "Through identifier --pre");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.sub(System.UInt64(1))), "Through parameter -");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = min3, min3 = min3.dec(), $t)), "Through parameter post--");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((min4 = min4.dec())), "Through parameter --pre");
                }
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests", {
        statics: {
            methods: {
                TestInt32: function () {
                    var max = 2147483647;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    var rMax1 = (max + 1) | 0;
                    var rMax2 = Bridge.identity(max1, (max1 = (max1 + 1) | 0));
                    var rMax3 = ((max2 = (max2 + 1) | 0));
                    var rMax4 = Bridge.Int.mul(2, max);
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483648", Bridge.box(rMax1, System.Int32), "Through identifier +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("2147483647", Bridge.box(rMax2, System.Int32), "Through identifier post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483648", Bridge.box(rMax3, System.Int32), "Through identifier ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2", Bridge.box(rMax4, System.Int32), "Through identifier *");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max + 1) | 0), System.Int32)), "Through parameter +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, (max3 = (max3 + 1) | 0)), System.Int32)), "Through parameter post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = (max4 + 1) | 0)), System.Int32)), "Through parameter ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.mul(2, max), System.Int32)), "Through parameter *");

                    var min = -2147483648;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = (min - 1) | 0;
                    var rMin2 = Bridge.identity(min1, (min1 = (min1 - 1) | 0));
                    var rMin3 = ((min2 = (min2 - 1) | 0));
                    var rMin4 = (-min) | 0;
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("2147483647", Bridge.box(rMin1, System.Int32), "Through identifier -");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483648", Bridge.box(rMin2, System.Int32), "Through identifier post--");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("2147483647", Bridge.box(rMin3, System.Int32), "Through identifier --pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483648", Bridge.box(rMin4, System.Int32), "Through identifier unary -");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min - 1) | 0), System.Int32)), "Through parameter -");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(min3, (min3 = (min3 - 1) | 0)), System.Int32)), "Through parameter post--");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min4 = (min4 - 1) | 0)), System.Int32)), "Through parameter --pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((-min) | 0), System.Int32)), "Through parameter unary -");
                },
                TestUInt32: function () {
                    var max = 4294967295;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    var rMax1 = (max + 1) >>> 0;
                    var rMax2 = Bridge.identity(max1, (max1 = (max1 + 1) >>> 0));
                    var rMax3 = ((max2 = (max2 + 1) >>> 0));
                    var rMax4 = Bridge.Int.umul(2, max);
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.box(rMax1, System.UInt32), "Through identifier +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967295", Bridge.box(rMax2, System.UInt32), "Through identifier post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.box(rMax3, System.UInt32), "Through identifier ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967294", Bridge.box(rMax4, System.UInt32), "Through identifier *");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max + 1) >>> 0), System.UInt32)), "Through parameter +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, (max3 = (max3 + 1) >>> 0)), System.UInt32)), "Through parameter post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = (max4 + 1) >>> 0)), System.UInt32)), "Through parameter ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967294", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.umul(2, max), System.UInt32)), "Through parameter *");

                    var min = 0;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = (min - 1) >>> 0;
                    var rMin2 = Bridge.identity(min1, (min1 = (min1 - 1) >>> 0));
                    var rMin3 = ((min2 = (min2 - 1) >>> 0));
                    var rMin4 = System.Int64(min).neg();
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967295", Bridge.box(rMin1, System.UInt32), "Through identifier -");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.box(rMin2, System.UInt32), "Through identifier post--");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967295", Bridge.box(rMin3, System.UInt32), "Through identifier --pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", rMin4, "Through identifier unary -");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min - 1) >>> 0), System.UInt32)), "Through parameter -");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(min3, (min3 = (min3 - 1) >>> 0)), System.UInt32)), "Through parameter post--");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min4 = (min4 - 1) >>> 0)), System.UInt32)), "Through parameter --pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.Int64(min).neg()), "Through parameter unary -");
                },
                TestLong: function () {
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
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-9223372036854775808", rMax1, "Through identifier +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("9223372036854775807", rMax2, "Through identifier post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-9223372036854775808", rMax3, "Through identifier ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2", rMax4, "Through identifier *");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(max.add(System.Int64(1))), "Through parameter +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = max3, max3 = max3.inc(), $t)), "Through parameter post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((max4 = max4.inc())), "Through parameter ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.Int64(2).mul(max)), "Through parameter *");

                    var min = System.Int64.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min.sub(System.Int64(1));
                    var rMin2 = ($t = min1, min1 = min1.dec(), $t);
                    var rMin3 = (min2 = min2.dec());
                    var rMin4 = min.neg();
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("9223372036854775807", rMin1, "Through identifier -");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-9223372036854775808", rMin2, "Through identifier post--");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("9223372036854775807", rMin3, "Through identifier --pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-9223372036854775808", rMin4, "Through identifier unary -");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.sub(System.Int64(1))), "Through parameter -");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = min3, min3 = min3.dec(), $t)), "Through parameter post--");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((min4 = min4.dec())), "Through parameter --pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.neg()), "Through parameter unary -");
                },
                TestULong: function () {
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
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", rMax1, "Through identifier +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("18446744073709551615", rMax2, "Through identifier post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", rMax3, "Through identifier ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("18446744073709551614", rMax4, "Through identifier *");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(max.add(System.UInt64(1))), "Through parameter +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = max3, max3 = max3.inc(), $t)), "Through parameter post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((max4 = max4.inc())), "Through parameter ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("18446744073709551614", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.UInt64(2).mul(max)), "Through parameter *");

                    var min = System.UInt64.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min.sub(System.UInt64(1));
                    var rMin2 = ($t = min1, min1 = min1.dec(), $t);
                    var rMin3 = (min2 = min2.dec());
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("18446744073709551615", rMin1, "Through identifier -");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", rMin2, "Through identifier post--");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("18446744073709551615", rMin3, "Through identifier --pre");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.sub(System.UInt64(1))), "Through parameter -");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = min3, min3 = min3.dec(), $t)), "Through parameter post--");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((min4 = min4.dec())), "Through parameter --pre");
                }
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests", {
        statics: {
            methods: {
                TestInt32: function () {
                    var max = 2147483647;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    var rMax1 = max + 1;
                    var rMax2 = Bridge.identity(max1, (max1 = max1 + 1));
                    var rMax3 = ((max2 = max2 + 1));
                    var rMax4 = 2 * max;
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("2147483648", Bridge.box(rMax1, System.Int32), "Through identifier +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("2147483647", Bridge.box(rMax2, System.Int32), "Through identifier post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("2147483648", Bridge.box(rMax3, System.Int32), "Through identifier ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967294", Bridge.box(rMax4, System.Int32), "Through identifier *");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(max + 1, System.Int32)), "Through parameter +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, (max3 = max3 + 1)), System.Int32)), "Through parameter post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = max4 + 1)), System.Int32)), "Through parameter ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967294", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(2 * max, System.Int32)), "Through parameter *");

                    var min = -2147483648;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min - 1;
                    var rMin2 = Bridge.identity(min1, (min1 = min1 - 1));
                    var rMin3 = ((min2 = min2 - 1));
                    var rMin4 = -min;
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483649", Bridge.box(rMin1, System.Int32), "Through identifier -");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483648", Bridge.box(rMin2, System.Int32), "Through identifier post--");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483649", Bridge.box(rMin3, System.Int32), "Through identifier --pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("2147483648", Bridge.box(rMin4, System.Int32), "Through identifier unary -");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483649", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(min - 1, System.Int32)), "Through parameter -");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(min3, (min3 = min3 - 1)), System.Int32)), "Through parameter post--");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483649", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min4 = min4 - 1)), System.Int32)), "Through parameter --pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(-min, System.Int32)), "Through parameter unary -");
                },
                TestUInt32: function () {
                    var max = 4294967295;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    var rMax1 = max + 1;
                    var rMax2 = Bridge.identity(max1, (max1 = max1 + 1));
                    var rMax3 = ((max2 = max2 + 1));
                    var rMax4 = 2 * max;
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967296", Bridge.box(rMax1, System.UInt32), "Through identifier +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967295", Bridge.box(rMax2, System.UInt32), "Through identifier post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967296", Bridge.box(rMax3, System.UInt32), "Through identifier ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("8589934590", Bridge.box(rMax4, System.UInt32), "Through identifier *");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967296", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(max + 1, System.UInt32)), "Through parameter +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, (max3 = max3 + 1)), System.UInt32)), "Through parameter post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967296", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = max4 + 1)), System.UInt32)), "Through parameter ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("8589934590", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(2 * max, System.UInt32)), "Through parameter *");

                    var min = 0;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min - 1;
                    var rMin2 = Bridge.identity(min1, (min1 = min1 - 1));
                    var rMin3 = ((min2 = min2 - 1));
                    var rMin4 = System.Int64(min).neg();
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-1", Bridge.box(rMin1, System.UInt32), "Through identifier -");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.box(rMin2, System.UInt32), "Through identifier post--");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-1", Bridge.box(rMin3, System.UInt32), "Through identifier --pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", rMin4, "Through identifier unary -");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-1", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(min - 1, System.UInt32)), "Through parameter -");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(min3, (min3 = min3 - 1)), System.UInt32)), "Through parameter post--");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-1", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min4 = min4 - 1)), System.UInt32)), "Through parameter --pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.Int64(min).neg()), "Through parameter unary -");
                },
                TestLong: function () {
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
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-9223372036854775808", rMax1, "Through identifier +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("9223372036854775807", rMax2, "Through identifier post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-9223372036854775808", rMax3, "Through identifier ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2", rMax4, "Through identifier *");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(max.add(System.Int64(1))), "Through parameter +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = max3, max3 = max3.inc(), $t)), "Through parameter post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((max4 = max4.inc())), "Through parameter ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.Int64(2).mul(max)), "Through parameter *");

                    var min = System.Int64.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min.sub(System.Int64(1));
                    var rMin2 = ($t = min1, min1 = min1.dec(), $t);
                    var rMin3 = (min2 = min2.dec());
                    var rMin4 = min.neg();
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("9223372036854775807", rMin1, "Through identifier -");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-9223372036854775808", rMin2, "Through identifier post--");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("9223372036854775807", rMin3, "Through identifier --pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-9223372036854775808", rMin4, "Through identifier unary -");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.sub(System.Int64(1))), "Through parameter -");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = min3, min3 = min3.dec(), $t)), "Through parameter post--");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((min4 = min4.dec())), "Through parameter --pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.neg()), "Through parameter unary -");
                },
                TestULong: function () {
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
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", rMax1, "Through identifier +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("18446744073709551615", rMax2, "Through identifier post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", rMax3, "Through identifier ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("18446744073709551614", rMax4, "Through identifier *");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(max.add(System.UInt64(1))), "Through parameter +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = max3, max3 = max3.inc(), $t)), "Through parameter post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((max4 = max4.inc())), "Through parameter ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("18446744073709551614", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.UInt64(2).mul(max)), "Through parameter *");

                    var min = System.UInt64.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min.sub(System.UInt64(1));
                    var rMin2 = ($t = min1, min1 = min1.dec(), $t);
                    var rMin3 = (min2 = min2.dec());
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("18446744073709551615", rMin1, "Through identifier -");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", rMin2, "Through identifier post--");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("18446744073709551615", rMin3, "Through identifier --pre");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.sub(System.UInt64(1))), "Through parameter -");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = min3, min3 = min3.dec(), $t)), "Through parameter post--");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((min4 = min4.dec())), "Through parameter --pre");
                }
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch2.Constants", {
        statics: {
            fields: {
                BATCH_NAME: null,
                MODULE_ISSUES: null,
                MODULE_CHECKED_UNCKECKED: null
            },
            ctors: {
                init: function () {
                    this.BATCH_NAME = "Batch2";
                    this.MODULE_ISSUES = "Issues2";
                    this.MODULE_CHECKED_UNCKECKED = "Checked/Unckecked";
                }
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJjb2RlLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJCcmlkZ2VJc3N1ZXMvTjEzODUuY3MiLCJCcmlkZ2VJc3N1ZXMvTjE0OTkuY3MiLCJCcmlkZ2VJc3N1ZXMvTjExMjIuY3MiLCJCcmlkZ2VJc3N1ZXMvTjEyMDQuY3MiLCJCcmlkZ2VJc3N1ZXMvTjc3Mi5jcyIsIkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5jcyJdLAogICJuYW1lcyI6IFsiIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7b0JBV1lBLFlBQWVBO29CQUNmQSw4QkFBWUE7Ozs7Ozs7Ozs7Z0JDRFpBO2dCQUNBQSxVQUFpQkE7Z0JBQ2pCQTtnQkFDQUE7Z0JBQ0FBLFNBQVlBOztnQkFFWkEsMkNBQXlCQSwyQ0FBT0E7Z0JBQ2hDQSw0Q0FBMEJBLDZDQUFNQTtnQkFDaENBLDRDQUEwQkE7Z0JBQzFCQSxnREFBOEJBLDZDQUFNQTtnQkFDcENBLGdEQUE4QkE7O2dCQUU5QkE7Z0JBQ0FBO2dCQUNBQSxTQUFZQTs7Z0JBRVpBLDRDQUEwQkEsZ0NBQU1BO2dCQUNoQ0EsNENBQTBCQSw2Q0FBTUE7Z0JBQ2hDQSw0Q0FBMEJBO2dCQUUxQkEsNENBQTBCQTtnQkFFMUJBLGdEQUE4QkEsZ0NBQU1BO2dCQUNwQ0EsZ0RBQThCQSxnREFBTUE7Z0JBQ3BDQSxnREFBOEJBO2dCQUM5QkEsZ0RBQThCQTs7Z0JBRTlCQTtnQkFDQUE7Z0JBQ0FBLFNBQVVBOztnQkFFVkEsMkNBQXlCQSxtQ0FBTUE7Z0JBQy9CQSwyQ0FBeUJBLGlJQUFNQTtnQkFDL0JBLDJDQUF5QkE7Z0JBQ3pCQSwyQ0FBeUJBLG1DQUFNQTtnQkFDL0JBLGdEQUE4QkEsaUlBQU1BO2dCQUNwQ0EsMkNBQXlCQTtnQkFDekJBLDJDQUF5QkEscUNBQVFBOzs7Ozs7Ozs7b0JDbENqQ0EsUUFBUUE7O29CQUVSQSxTQUFTQSxBQUFLQSxXQUFXQTtvQkFDekJBLGtDQUFnQkEsMEJBQXlCQTs7b0JBRXpDQSxTQUFTQSxBQUFNQSxXQUFXQTtvQkFDMUJBLGtDQUFnQkEsMEJBQXlCQTs7b0JBRXpDQSxTQUFTQSxBQUFNQSxXQUFXQTtvQkFDMUJBLGtDQUFnQkEsMEJBQXlCQTs7b0JBRXpDQSxTQUFTQSxBQUFPQSxXQUFXQTtvQkFDM0JBLGtDQUFnQkEsMEJBQXlCQTs7O29CQU16Q0E7O29CQUVBQSxTQUFTQSxBQUFLQSxBQUFDQSxJQUFJQTtvQkFDbkJBLHdEQUFzQ0E7O29CQUV0Q0EsU0FBVUEsQUFBTUEsQUFBQ0EsSUFBSUE7b0JBQ3JCQSx3REFBc0NBOztvQkFFdENBLFNBQVVBLEFBQU1BLEFBQUNBLElBQUlBO29CQUNyQkEsd0RBQXNDQTs7b0JBRXRDQSxTQUFXQSxBQUFPQSxBQUFDQSxJQUFJQTtvQkFDdkJBLHdEQUFzQ0E7Ozs7Ozs7Ozs7b0JDaEN0Q0EsV0FBY0E7b0JBQ2RBLFlBQWVBO29CQUNmQSxZQUFlQTtvQkFDZkE7b0JBQ0FBO29CQUNBQTtvQkFDQUEsY0FBaUJBO29CQUNqQkEsbUJBQXNCQTs7b0JBRXRCQSwrQkFBYUEsWUFBV0E7b0JBQ3hCQSw4QkFBWUEsWUFBV0E7b0JBQ3ZCQSwrQkFBYUEsaUJBQWdCQTtvQkFDN0JBLDhCQUFZQSxjQUFvQkE7b0JBQ2hDQSw4QkFBWUEsU0FBUUE7b0JBQ3BCQSwrQkFBYUEsU0FBUUE7b0JBQ3JCQSw4QkFBWUE7b0JBQ1pBLCtCQUFhQSxPQUFNQTs7b0JBRW5CQSwrQkFBYUEsaUJBQWdCQTtvQkFDN0JBLDhCQUFZQSxTQUFRQTtvQkFDcEJBLCtCQUFhQSxTQUFRQTtvQkFDckJBLDhCQUFZQSxpQkFBZ0JBO29CQUM1QkEsOEJBQVlBLFVBQVNBO29CQUNyQkEsK0JBQWFBLFVBQVNBO29CQUN0QkEsOEJBQVlBLHVCQUFLQTtvQkFDakJBLCtCQUFhQSxPQUFNQTs7Ozs7Ozs7Ozs7b0JDMlluQkEsZ0JBQWdCQTtvQkFDaEJBLGlCQUFpQkE7b0JBQ2pCQSxpQkFBaUJBO29CQUNqQkEsa0JBQWtCQTtvQkFDbEJBLGVBQWVBO29CQUNmQSxnQkFBZ0JBO29CQUNoQkEsaUJBQWlCQTtvQkFDakJBLGtCQUFrQkE7OztvQkFHbEJBLGtCQUFrQkE7b0JBQ2xCQSxtQkFBbUJBOztvQkFFbkJBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTs7b0JBRUFBO29CQUNBQTs7b0JBRUFBLHFDQUFtQkE7b0JBQ25CQSxxQ0FBbUJBO29CQUNuQkEscUNBQW1CQTtvQkFDbkJBLHFDQUFtQkE7b0JBQ25CQSxxQ0FBbUJBO29CQUNuQkEscUNBQW1CQTtvQkFDbkJBLHFDQUFtQkE7b0JBQ25CQSxxQ0FBbUJBOztvQkFFbkJBLHVDQUFxQkE7b0JBQ3JCQSx3REFBcUJBOzs7Ozs7Z0JBOWFyQkEsVUFBYUE7Z0JBQ2JBLDhCQUFZQTtnQkFDWkEsOEJBQVlBO2dCQUNaQSw4QkFBWUE7Z0JBQ1pBLDhCQUFZQTtnQkFDWkEsOEJBQVlBO2dCQUNaQSw4QkFBWUE7Z0JBQ1pBLDhCQUFZQTtnQkFDWkEsOEJBQVlBOzs7Z0JBTVpBLHFDQUFtQkE7Z0JBQ25CQSxxQ0FBbUJBO2dCQUNuQkEscUNBQW1CQTs7O2dCQU1uQkEscUNBQW1CQTs7O2dCQU1uQkEscUNBQW1CQTtnQkFDbkJBLHFDQUFtQkE7Z0JBQ25CQSxxQ0FBbUJBOzs7Z0JBTW5CQSxxQ0FBbUJBO2dCQUNuQkEscUNBQW1CQTtnQkFDbkJBLHFDQUFtQkE7OztnQkFNbkJBLGtDQUFnQkEsSUFBSUE7Z0JBQ3BCQSxxQ0FBbUJBO2dCQUNuQkEscUNBQW1CQTs7OztnQkFNbkJBLHVDQUFxQkE7Z0JBQ3JCQSx1Q0FBcUJBOzs7Z0JBTXJCQSx1Q0FBcUJBO2dCQUNyQkEsdUNBQXFCQTs7O2dCQU1yQkEsVUFBVUE7Z0JBQ1ZBO2dCQUNBQTtnQkFDQUEsdUNBQXFCQTtnQkFDckJBLHVDQUFxQkE7OztnQkFNckJBLFVBQVVBO2dCQUNWQTtnQkFDQUE7Z0JBQ0FBLHVDQUFxQkE7Z0JBQ3JCQSx1Q0FBcUJBOzs7O2dCQU1yQkE7Z0JBQ0FBLDBCQUFrQkE7Ozs7d0JBRWRBLHNDQUFVQTs7Ozs7O2lCQUVkQSx3Q0FBc0JBOzs7Z0JBTXRCQSxVQUFVQTtnQkFDVkEsV0FBV0E7Z0JBQ1hBLCtCQUFhQSxRQUFPQTtnQkFDcEJBLGtDQUFnQkEsb0JBQU1BOzs7Z0JBTXRCQSxVQUFVQTtnQkFDVkEsc0NBQW9CQSxtREFBeUJBO2dCQUM3Q0Esc0NBQW9CQSx3REFBOEJBO2dCQUNsREEsc0NBQW9CQSw4Q0FBb0JBOzs7Z0JBTXhDQSxVQUFVQTtnQkFDVkEsOEJBQVlBLHNCQUF3Q0EsVUFBUkE7Z0JBQzVDQSwrQkFBYUEsc0JBQXdDQSxVQUFSQTs7O2dCQU03Q0EsVUFBVUEsbUJBQVFBLElBQUlBLGlEQUFNQSxJQUFJQSxpREFBTUEsSUFBSUE7Z0JBQzFDQSw4QkFBWUEsc0JBQXNGQSxLQUFJQSxJQUFJQSxpREFBOURBO2dCQUM1Q0EsK0JBQWFBLHNCQUFzRkEsS0FBSUEsSUFBSUEsaURBQTlEQTs7O2dCQU03Q0EsOEJBQVlBLDRCQUFnQ0EsZ0RBQWtCQSxBQUFpQ0E7Z0JBQy9GQSwrQkFBYUEsNEJBQWdDQSxnREFBa0JBLEFBQWlDQTs7O2dCQU1oR0Esc0NBQW9CQSw4Q0FBb0JBO2dCQUN4Q0Esc0NBQW9CQSw4Q0FBb0JBOzs7Z0JBTXhDQTtnQkFDWkEsQUFBbURBLDBEQUF3QkEsQUFBZ0NBO3dCQUFLQSxzQ0FBVUE7O2dCQUM5R0EseUNBQXVCQTs7O2dCQU12QkEscUNBQW1CQTs7O2dCQU1uQkEsVUFBVUEsbUJBQVFBLElBQUlBLGlEQUFNQSxJQUFJQSxpREFBTUEsSUFBSUE7Z0JBQzFDQSxxQ0FBbUJBLHNCQUFvRUEsS0FBS0EsSUFBSUE7Z0JBQ2hHQSxrQ0FBZ0JBLElBQUlBLHNCQUFvRUEsS0FBS0EsSUFBSUE7OztnQkFNakdBLHFDQUFtQkE7OztnQkFNbkJBLDZDQUEyQkE7O2dCQUUzQkEsNkNBQTJCQTs7O2dCQU0zQkEsVUFBVUE7Z0JBQ1ZBO2dCQUNBQSxrQ0FBZ0JBLHFEQUE0QkE7OztnQkFNNUNBLDhCQUFZQSw0QkFBZ0NBLG1EQUFxQkEsQUFBaUNBO2dCQUNsR0EsK0JBQWFBLDRCQUFnQ0EsbURBQXFCQSxBQUFpQ0E7OztnQkFNbkdBLFVBQVVBOztnQkFFVkEscUNBQW1CQSwwQkFBd0JBO2dCQUMzQ0EsOEJBQVlBLDBCQUF3QkE7OztnQkFNcENBLFVBQVVBOztnQkFFVkEscUNBQW1CQSwwQkFBd0JBO2dCQUMzQ0EsOEJBQVlBLDBCQUF3QkE7OztnQkFjcENBLFVBQVVBOztnQkFFVkEscUNBQW1CQSwwQkFBd0JBLHVCQUFRQSxJQUFJQTtnQkFDdkRBLGtDQUFnQkEsSUFBSUEsMEJBQXdCQSx1QkFBUUEsSUFBSUE7OztnQkFNeERBLFVBQVVBOztnQkFFVkEscUNBQW1CQSwwQkFBd0JBLGNBQWNBLElBQUlBO2dCQUM3REEsOEJBQVlBLDBCQUF3QkEsY0FBY0EsSUFBSUE7OztnQkFNdERBLFdBQWFBO2dCQUNiQSxXQUFXQTs7Z0JBRVhBLGtDQUFjQSxBQUF3QkE7b0JBQVFBLDBCQUF3QkE7O2dCQUN0RUEsa0NBQWNBLEFBQXdCQTtvQkFBUUEsMEJBQXdCQSxNQUFNQTs7Z0JBQzVFQSxrQ0FBY0EsQUFBd0JBO29CQUFRQSwwQkFBd0JBOzs7O2dCQU10RUEsVUFBVUE7Z0JBQ1ZBO2dCQUNBQSxrQ0FBZ0JBLGtEQUF5QkE7OztnQkFNekNBLFVBQVVBO2dCQUNWQSxrQkFBZ0JBO2dCQUNoQkEsa0NBQWdCQSxrREFBeUJBOzs7Z0JBTXpDQSxVQUFVQTtnQkFDVkEsa0JBQWdCQTtnQkFDaEJBLGtDQUFnQkEsa0RBQXlCQTs7O2dCQU16Q0EsVUFBVUE7Z0JBQ1ZBLGtCQUFnQkEsV0FBV0EsSUFBSUE7Z0JBQy9CQSxrQ0FBZ0JBLHFEQUE0QkE7OztnQkFNNUNBLFVBQVVBO2dCQUNWQSxrQkFBZ0JBLEtBQUtBLElBQUlBO2dCQUN6QkEsa0NBQWdCQSxrREFBeUJBOzs7Z0JBTXpDQSxXQUFhQTs7Z0JBRWJBLGtDQUFjQSxBQUF3QkE7b0JBQVFBLGtCQUFnQkE7Ozs7O2dCQU05REEsV0FBcUJBO2dCQUNyQkE7Z0JBQ0FBLEtBQWtCQTs7Ozt3QkFFZEEsc0NBQVVBOzs7Ozs7aUJBRWRBLHdDQUFzQkE7OztnQkFNdEJBLFFBQWtCQTtnQkFDbEJBLHFDQUFtQkE7OztnQkFNbkJBLFFBQWtCQTtnQkFDbEJBLGdFQUFxQ0EsQUFBd0JBO29CQUFRQTs7OztnQkFNckVBLFFBQWtCQTtnQkFDbEJBLGdFQUFxQ0EsQUFBd0JBO29CQUFRQTs7OztnQkFNckVBLFFBQWtCQTtnQkFDbEJBLDhCQUFZQTtnQkFDWkEsK0JBQWFBOzs7Z0JBTWJBLFFBQWFBLG1CQUFRQSxJQUFJQSxpREFBTUEsSUFBSUEsaURBQU1BLElBQUlBO2dCQUM3Q0EsOEJBQVlBLHlCQUFXQSxJQUFJQTtnQkFDM0JBLCtCQUFhQSx5QkFBV0EsSUFBSUE7OztnQkFNNUJBLFFBQWtCQTtnQkFDbEJBLGdFQUFxQ0EsQUFBd0JBO29CQUFRQTs7OztnQkFNckVBLFFBQWtCQTtnQkFDbEJBLHVDQUFxQkE7Z0JBQ3JCQTtnQkFDQUEsa0NBQWdCQSxtREFBeUJBLDRCQUF1Q0E7OztnQkFNaEZBLFFBQWtCQTtnQkFDbEJBLHFDQUFtQkE7Z0JBQ25CQSxrQ0FBZ0JBLElBQUlBOzs7Z0JBTXBCQSxVQUFVQSxtQkFBUUEsSUFBSUEsaURBQU1BLElBQUlBLGlEQUFNQSxJQUFJQTtnQkFDMUNBLHFDQUFtQkEsc0JBQW9FQSxLQUFLQSxJQUFJQTtnQkFDaEdBLGtDQUFnQkEsSUFBSUEsc0JBQW9FQSxLQUFLQSxJQUFJQTs7O2dCQU1qR0EsUUFBa0JBO2dCQUNsQkEsZ0VBQXFDQSxBQUF3QkE7b0JBQVFBOzs7O2dCQU1yRUEsUUFBa0JBO2dCQUNsQkEsZ0VBQXFDQSxBQUF3QkE7b0JBQVFBOzs7Ozs7Ozs7O21CQWpRK0JBOzs7bUJBQ0NBOzs7bUJBeURFQTs7O21CQUNDQTs7Ozs7Ozs7OzRCQWpOL0ZBOztnQkFFTEEsU0FBU0E7Ozs7OEJBR2VBO2dCQUV4QkEsT0FBT0EsOERBQVVBLFdBQUtBLEFBQUNBLFlBQUdBOzs7Z0JBSzFCQSxPQUFPQTs7Ozs7Ozs7OytCQTROUUEsR0FBT0E7Z0JBRXRCQSxPQUFPQSxNQUFLQSxRQUFRQSxDQUFDQSxJQUFJQSxJQUFJQTs7Ozs7Ozs7dUNDbFBOQSxVQUFpQkEsUUFBZUE7O29CQUUzREEsa0NBQWdCQSxxQkFBcUJBLG1CQUFtQkE7O2tDQUcvQkE7b0JBRXpCQSxPQUFPQTs7Ozs7Ozs7OztvQkFtTEtBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBUUE7O29CQUN6RUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHdCQUFRQTs7b0JBQ3pFQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBVUE7O29CQUMzRUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVFBLGtCQUFJQTs7O29CQUU3RUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHNEQUFzREE7O29CQUN2SEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLGlGQUFzREE7O29CQUN2SEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHNEQUF3REE7O29CQUN6SEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHNEQUFzREEsNkJBQUlBOzs7b0JBRTNIQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVFBOztvQkFDekVBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSx3QkFBUUE7O29CQUN6RUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVVBOztvQkFDM0VBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxRQUFRQSxrQkFBQ0E7OztvQkFFMUVBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBOztvQkFDdkhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxpRkFBc0RBOztvQkFDdkhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBd0RBOztvQkFDekhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBLDZCQUFDQTs7OztvQkFZeEhBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBUUE7O29CQUN6RUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHdCQUFRQTs7b0JBQ3pFQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBVUE7O29CQUMzRUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVFBLG1CQUFJQTs7O29CQUU3RUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHNEQUFzREE7O29CQUN2SEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLGlGQUFzREE7O29CQUN2SEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHNEQUF3REE7O29CQUN6SEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHNEQUFzREEsOEJBQUlBOzs7b0JBRTNIQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVFBOztvQkFDekVBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSx3QkFBUUE7O29CQUN6RUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVVBOzs7b0JBRTNFQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsc0RBQXNEQTs7b0JBQ3ZIQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsaUZBQXNEQTs7b0JBQ3ZIQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsc0RBQXdEQTs7OztvQkFZekhBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBUUE7O29CQUN6RUEsNERBQWlDQSxBQUF3QkE7O3dCQUFRQSxRQUFRQTs7b0JBQ3pFQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBUUEsQ0FBRUE7O29CQUMzRUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVFBLG9CQUFJQTs7O29CQUU3RUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHNEQUFzREE7O29CQUN2SEEsNERBQWlDQSxBQUF3QkE7O3dCQUFRQSxzREFBc0RBOztvQkFDdkhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBLENBQUVBOztvQkFDekhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBLG9CQUFJQTs7O29CQUUzSEEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxRQUFRQTs7b0JBQ3pFQSw0REFBaUNBLEFBQXdCQTs7d0JBQVFBLFFBQVFBOztvQkFDekVBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxRQUFRQSxDQUFFQTs7b0JBQzNFQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBUUEsQUFBQ0E7OztvQkFFMUVBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBOztvQkFDdkhBLDREQUFpQ0EsQUFBd0JBOzt3QkFBUUEsc0RBQXNEQTs7b0JBQ3ZIQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsc0RBQXNEQSxDQUFFQTs7b0JBQ3pIQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsc0RBQXNEQSxBQUFDQTs7OztvQkFZeEhBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBUUE7O29CQUN6RUEsNERBQWlDQSxBQUF3QkE7O3dCQUFRQSxRQUFRQTs7b0JBQ3pFQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBUUEsQ0FBRUE7O29CQUMzRUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVFBLHFCQUFJQTs7O29CQUU3RUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHNEQUFzREE7O29CQUN2SEEsNERBQWlDQSxBQUF3QkE7O3dCQUFRQSxzREFBc0RBOztvQkFDdkhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBLENBQUVBOztvQkFDekhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBLHFCQUFJQTs7O29CQUUzSEEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxRQUFRQTs7b0JBQ3pFQSw0REFBaUNBLEFBQXdCQTs7d0JBQVFBLFFBQVFBOztvQkFDekVBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxRQUFRQSxDQUFFQTs7O29CQUUzRUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHNEQUFzREE7O29CQUN2SEEsNERBQWlDQSxBQUF3QkE7O3dCQUFRQSxzREFBc0RBOztvQkFDdkhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBLENBQUVBOzs7Ozs7Ozs7OztvQkF2VTdIQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVFBOztvQkFDekVBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSx3QkFBUUE7O29CQUN6RUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVVBOztvQkFDM0VBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxRQUFRQSxrQkFBSUE7OztvQkFFN0VBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBOztvQkFDdkhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxpRkFBc0RBOztvQkFDdkhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBd0RBOztvQkFDekhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBLDZCQUFJQTs7O29CQUUzSEEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxRQUFRQTs7b0JBQ3pFQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsd0JBQVFBOztvQkFDekVBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxRQUFVQTs7b0JBQzNFQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBUUEsa0JBQUNBOzs7b0JBRTFFQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsc0RBQXNEQTs7b0JBQ3ZIQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsaUZBQXNEQTs7b0JBQ3ZIQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsc0RBQXdEQTs7b0JBQ3pIQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsc0RBQXNEQSw2QkFBQ0E7Ozs7b0JBU3hIQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVFBOztvQkFDekVBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSx3QkFBUUE7O29CQUN6RUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVVBOztvQkFDM0VBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxRQUFRQSxtQkFBSUE7OztvQkFFN0VBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBOztvQkFDdkhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxpRkFBc0RBOztvQkFDdkhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBd0RBOztvQkFDekhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBLDhCQUFJQTs7O29CQUUzSEEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxRQUFRQTs7b0JBQ3pFQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsd0JBQVFBOztvQkFDekVBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxRQUFVQTs7O29CQUUzRUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHNEQUFzREE7O29CQUN2SEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLGlGQUFzREE7O29CQUN2SEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHNEQUF3REE7Ozs7b0JBU3pIQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVFBOztvQkFDekVBLDREQUFpQ0EsQUFBd0JBOzt3QkFBUUEsUUFBUUE7O29CQUN6RUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVFBLENBQUVBOztvQkFDM0VBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxRQUFRQSxvQkFBSUE7OztvQkFFN0VBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBOztvQkFDdkhBLDREQUFpQ0EsQUFBd0JBOzt3QkFBUUEsc0RBQXNEQTs7b0JBQ3ZIQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsc0RBQXNEQSxDQUFFQTs7b0JBQ3pIQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsc0RBQXNEQSxvQkFBSUE7OztvQkFFM0hBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBUUE7O29CQUN6RUEsNERBQWlDQSxBQUF3QkE7O3dCQUFRQSxRQUFRQTs7b0JBQ3pFQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBUUEsQ0FBRUE7O29CQUMzRUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVFBLEFBQUNBOzs7b0JBRTFFQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsc0RBQXNEQTs7b0JBQ3ZIQSw0REFBaUNBLEFBQXdCQTs7d0JBQVFBLHNEQUFzREE7O29CQUN2SEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHNEQUFzREEsQ0FBRUE7O29CQUN6SEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHNEQUFzREEsQUFBQ0E7Ozs7b0JBU3hIQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVFBOztvQkFDekVBLDREQUFpQ0EsQUFBd0JBOzt3QkFBUUEsUUFBUUE7O29CQUN6RUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVFBLENBQUVBOztvQkFDM0VBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxRQUFRQSxxQkFBSUE7OztvQkFFN0VBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBOztvQkFDdkhBLDREQUFpQ0EsQUFBd0JBOzt3QkFBUUEsc0RBQXNEQTs7b0JBQ3ZIQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsc0RBQXNEQSxDQUFFQTs7b0JBQ3pIQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsc0RBQXNEQSxxQkFBSUE7OztvQkFFM0hBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBUUE7O29CQUN6RUEsNERBQWlDQSxBQUF3QkE7O3dCQUFRQSxRQUFRQTs7b0JBQ3pFQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBUUEsQ0FBRUE7OztvQkFFM0VBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBOztvQkFDdkhBLDREQUFpQ0EsQUFBd0JBOzt3QkFBUUEsc0RBQXNEQTs7b0JBQ3ZIQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsc0RBQXNEQSxDQUFFQTs7Ozs7Ozs7Ozs7b0JBdVlySEEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLFlBQVlBO29CQUNaQSw0QkFBWUE7b0JBQ1pBLFlBQWNBO29CQUNkQSxZQUFZQSxrQkFBSUE7b0JBQ2hCQSwwRUFBMEVBO29CQUMxRUEseUVBQXlFQTtvQkFDekVBLDBFQUEwRUE7b0JBQzFFQSxpRUFBaUVBOztvQkFFakVBLDBFQUEwRUEsc0RBQXNEQTtvQkFDaElBLHlFQUF5RUEsaUZBQXNEQTtvQkFDL0hBLDBFQUEwRUEsc0RBQXdEQTtvQkFDbElBLGlFQUFpRUEsc0RBQXNEQSw2QkFBSUE7O29CQUUzSEEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLFlBQVlBO29CQUNaQSw0QkFBWUE7b0JBQ1pBLFlBQWNBO29CQUNkQSxZQUFZQSxFQUFDQTtvQkFDYkEseUVBQXlFQTtvQkFDekVBLDBFQUEwRUE7b0JBQzFFQSx5RUFBeUVBO29CQUN6RUEsMEVBQTBFQTs7b0JBRTFFQSx5RUFBeUVBLHNEQUFzREE7b0JBQy9IQSwwRUFBMEVBLGlGQUFzREE7b0JBQ2hJQSx5RUFBeUVBLHNEQUF3REE7b0JBQ2pJQSwwRUFBMEVBLHNEQUFzREEsY0FBQ0E7OztvQkFZaklBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSxZQUFZQTtvQkFDWkEsNEJBQVlBO29CQUNaQSxZQUFjQTtvQkFDZEEsWUFBWUEsbUJBQUlBO29CQUNoQkEsZ0VBQWdFQTtvQkFDaEVBLHlFQUF5RUE7b0JBQ3pFQSxnRUFBZ0VBO29CQUNoRUEseUVBQXlFQTs7b0JBRXpFQSxnRUFBZ0VBLHNEQUFzREE7b0JBQ3RIQSx5RUFBeUVBLGlGQUFzREE7b0JBQy9IQSxnRUFBZ0VBLHNEQUF3REE7b0JBQ3hIQSx5RUFBeUVBLHNEQUFzREEsOEJBQUlBOztvQkFFbklBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSxZQUFZQTtvQkFDWkEsNEJBQVlBO29CQUNaQSxZQUFjQTtvQkFDZEEsWUFBWUEsQUFBQ0E7b0JBQ2JBLHlFQUF5RUE7b0JBQ3pFQSxnRUFBZ0VBO29CQUNoRUEseUVBQXlFQTtvQkFDekVBLGdFQUFnRUE7O29CQUVoRUEseUVBQXlFQSxzREFBc0RBO29CQUMvSEEsZ0VBQWdFQSxpRkFBc0RBO29CQUN0SEEseUVBQXlFQSxzREFBd0RBO29CQUNqSUEsZ0VBQWdFQSxzREFBc0RBLEFBQUNBOzs7O29CQVl2SEEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLFlBQVlBO29CQUNaQSxZQUFZQTtvQkFDWkEsWUFBWUEsQ0FBRUE7b0JBQ2RBLFlBQVlBLG9CQUFJQTtvQkFDaEJBLG1GQUFtRkE7b0JBQ25GQSxrRkFBa0ZBO29CQUNsRkEsbUZBQW1GQTtvQkFDbkZBLGlFQUFpRUE7O29CQUVqRUEsbUZBQW1GQSxzREFBc0RBO29CQUN6SUEsa0ZBQWtGQSxzREFBc0RBO29CQUN4SUEsbUZBQW1GQSxzREFBc0RBLENBQUVBO29CQUMzSUEsaUVBQWlFQSxzREFBc0RBLG9CQUFJQTs7b0JBRTNIQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsWUFBWUE7b0JBQ1pBLFlBQVlBO29CQUNaQSxZQUFZQSxDQUFFQTtvQkFDZEEsWUFBWUEsQUFBQ0E7b0JBQ2JBLGtGQUFrRkE7b0JBQ2xGQSxtRkFBbUZBO29CQUNuRkEsa0ZBQWtGQTtvQkFDbEZBLG1GQUFtRkE7O29CQUVuRkEsa0ZBQWtGQSxzREFBc0RBO29CQUN4SUEsbUZBQW1GQSxzREFBc0RBO29CQUN6SUEsa0ZBQWtGQSxzREFBc0RBLENBQUVBO29CQUMxSUEsbUZBQW1GQSxzREFBc0RBLEFBQUNBOzs7O29CQVkxSUEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLFlBQVlBO29CQUNaQSxZQUFZQTtvQkFDWkEsWUFBWUEsQ0FBRUE7b0JBQ2RBLFlBQVlBLHFCQUFJQTtvQkFDaEJBLGdFQUFnRUE7b0JBQ2hFQSxtRkFBbUZBO29CQUNuRkEsZ0VBQWdFQTtvQkFDaEVBLG1GQUFtRkE7O29CQUVuRkEsZ0VBQWdFQSxzREFBc0RBO29CQUN0SEEsbUZBQW1GQSxzREFBc0RBO29CQUN6SUEsZ0VBQWdFQSxzREFBc0RBLENBQUVBO29CQUN4SEEsbUZBQW1GQSxzREFBc0RBLHFCQUFJQTs7b0JBRTdJQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsWUFBWUE7b0JBQ1pBLFlBQVlBO29CQUNaQSxZQUFZQSxDQUFFQTtvQkFDZEEsbUZBQW1GQTtvQkFDbkZBLGdFQUFnRUE7b0JBQ2hFQSxtRkFBbUZBOztvQkFFbkZBLG1GQUFtRkEsc0RBQXNEQTtvQkFDeklBLGdFQUFnRUEsc0RBQXNEQTtvQkFDdEhBLG1GQUFtRkEsc0RBQXNEQSxDQUFFQTs7Ozs7Ozs7OztvQkF6WS9JQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsWUFBWUE7b0JBQ1pBLDRCQUFZQTtvQkFDWkEsWUFBY0E7b0JBQ2RBLFlBQVlBLGtCQUFJQTtvQkFDaEJBLDBFQUEwRUE7b0JBQzFFQSx5RUFBeUVBO29CQUN6RUEsMEVBQTBFQTtvQkFDMUVBLGlFQUFpRUE7O29CQUVqRUEsMEVBQTBFQSxzREFBc0RBO29CQUNoSUEseUVBQXlFQSxpRkFBc0RBO29CQUMvSEEsMEVBQTBFQSxzREFBd0RBO29CQUNsSUEsaUVBQWlFQSxzREFBc0RBLDZCQUFJQTs7b0JBRTNIQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsWUFBWUE7b0JBQ1pBLDRCQUFZQTtvQkFDWkEsWUFBY0E7b0JBQ2RBLFlBQVlBLEVBQUNBO29CQUNiQSx5RUFBeUVBO29CQUN6RUEsMEVBQTBFQTtvQkFDMUVBLHlFQUF5RUE7b0JBQ3pFQSwwRUFBMEVBOztvQkFFMUVBLHlFQUF5RUEsc0RBQXNEQTtvQkFDL0hBLDBFQUEwRUEsaUZBQXNEQTtvQkFDaElBLHlFQUF5RUEsc0RBQXdEQTtvQkFDaklBLDBFQUEwRUEsc0RBQXNEQSxjQUFDQTs7O29CQVNqSUEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLFlBQVlBO29CQUNaQSw0QkFBWUE7b0JBQ1pBLFlBQWNBO29CQUNkQSxZQUFZQSxtQkFBSUE7b0JBQ2hCQSxnRUFBZ0VBO29CQUNoRUEseUVBQXlFQTtvQkFDekVBLGdFQUFnRUE7b0JBQ2hFQSx5RUFBeUVBOztvQkFFekVBLGdFQUFnRUEsc0RBQXNEQTtvQkFDdEhBLHlFQUF5RUEsaUZBQXNEQTtvQkFDL0hBLGdFQUFnRUEsc0RBQXdEQTtvQkFDeEhBLHlFQUF5RUEsc0RBQXNEQSw4QkFBSUE7O29CQUVuSUEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLFlBQVlBO29CQUNaQSw0QkFBWUE7b0JBQ1pBLFlBQWNBO29CQUNkQSxZQUFZQSxBQUFDQTtvQkFDYkEseUVBQXlFQTtvQkFDekVBLGdFQUFnRUE7b0JBQ2hFQSx5RUFBeUVBO29CQUN6RUEsZ0VBQWdFQTs7b0JBRWhFQSx5RUFBeUVBLHNEQUFzREE7b0JBQy9IQSxnRUFBZ0VBLGlGQUFzREE7b0JBQ3RIQSx5RUFBeUVBLHNEQUF3REE7b0JBQ2pJQSxnRUFBZ0VBLHNEQUFzREEsQUFBQ0E7Ozs7b0JBU3ZIQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsWUFBWUE7b0JBQ1pBLFlBQVlBO29CQUNaQSxZQUFZQSxDQUFFQTtvQkFDZEEsWUFBWUEsb0JBQUlBO29CQUNoQkEsbUZBQW1GQTtvQkFDbkZBLGtGQUFrRkE7b0JBQ2xGQSxtRkFBbUZBO29CQUNuRkEsaUVBQWlFQTs7b0JBRWpFQSxtRkFBbUZBLHNEQUFzREE7b0JBQ3pJQSxrRkFBa0ZBLHNEQUFzREE7b0JBQ3hJQSxtRkFBbUZBLHNEQUFzREEsQ0FBRUE7b0JBQzNJQSxpRUFBaUVBLHNEQUFzREEsb0JBQUlBOztvQkFFM0hBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSxZQUFZQTtvQkFDWkEsWUFBWUE7b0JBQ1pBLFlBQVlBLENBQUVBO29CQUNkQSxZQUFZQSxBQUFDQTtvQkFDYkEsa0ZBQWtGQTtvQkFDbEZBLG1GQUFtRkE7b0JBQ25GQSxrRkFBa0ZBO29CQUNsRkEsbUZBQW1GQTs7b0JBRW5GQSxrRkFBa0ZBLHNEQUFzREE7b0JBQ3hJQSxtRkFBbUZBLHNEQUFzREE7b0JBQ3pJQSxrRkFBa0ZBLHNEQUFzREEsQ0FBRUE7b0JBQzFJQSxtRkFBbUZBLHNEQUFzREEsQUFBQ0E7Ozs7b0JBUzFJQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsWUFBWUE7b0JBQ1pBLFlBQVlBO29CQUNaQSxZQUFZQSxDQUFFQTtvQkFDZEEsWUFBWUEscUJBQUlBO29CQUNoQkEsZ0VBQWdFQTtvQkFDaEVBLG1GQUFtRkE7b0JBQ25GQSxnRUFBZ0VBO29CQUNoRUEsbUZBQW1GQTs7b0JBRW5GQSxnRUFBZ0VBLHNEQUFzREE7b0JBQ3RIQSxtRkFBbUZBLHNEQUFzREE7b0JBQ3pJQSxnRUFBZ0VBLHNEQUFzREEsQ0FBRUE7b0JBQ3hIQSxtRkFBbUZBLHNEQUFzREEscUJBQUlBOztvQkFFN0lBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSxZQUFZQTtvQkFDWkEsWUFBWUE7b0JBQ1pBLFlBQVlBLENBQUVBO29CQUNkQSxtRkFBbUZBO29CQUNuRkEsZ0VBQWdFQTtvQkFDaEVBLG1GQUFtRkE7O29CQUVuRkEsbUZBQW1GQSxzREFBc0RBO29CQUN6SUEsZ0VBQWdFQSxzREFBc0RBO29CQUN0SEEsbUZBQW1GQSxzREFBc0RBLENBQUVBOzs7Ozs7Ozs7O29CQThOL0lBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSxZQUFZQTtvQkFDWkEsNEJBQVlBO29CQUNaQSxZQUFjQTtvQkFDZEEsWUFBWUEsSUFBSUE7b0JBQ2hCQSx5RUFBeUVBO29CQUN6RUEseUVBQXlFQTtvQkFDekVBLHlFQUF5RUE7b0JBQ3pFQSx5RUFBeUVBOztvQkFFekVBLHlFQUF5RUEsc0RBQXNEQTtvQkFDL0hBLHlFQUF5RUEsaUZBQXNEQTtvQkFDL0hBLHlFQUF5RUEsc0RBQXdEQTtvQkFDaklBLHlFQUF5RUEsc0RBQXNEQSxlQUFJQTs7b0JBRW5JQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsWUFBWUE7b0JBQ1pBLDRCQUFZQTtvQkFDWkEsWUFBY0E7b0JBQ2RBLFlBQVlBLENBQUNBO29CQUNiQSwwRUFBMEVBO29CQUMxRUEsMEVBQTBFQTtvQkFDMUVBLDBFQUEwRUE7b0JBQzFFQSx5RUFBeUVBOztvQkFFekVBLDBFQUEwRUEsc0RBQXNEQTtvQkFDaElBLDBFQUEwRUEsaUZBQXNEQTtvQkFDaElBLDBFQUEwRUEsc0RBQXdEQTtvQkFDbElBLHlFQUF5RUEsc0RBQXNEQSxZQUFDQTs7O29CQU1oSUEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLFlBQVlBO29CQUNaQSw0QkFBWUE7b0JBQ1pBLFlBQWNBO29CQUNkQSxZQUFZQSxJQUFJQTtvQkFDaEJBLHlFQUF5RUE7b0JBQ3pFQSx5RUFBeUVBO29CQUN6RUEseUVBQXlFQTtvQkFDekVBLHlFQUF5RUE7O29CQUV6RUEseUVBQXlFQSxzREFBc0RBO29CQUMvSEEseUVBQXlFQSxpRkFBc0RBO29CQUMvSEEseUVBQXlFQSxzREFBd0RBO29CQUNqSUEseUVBQXlFQSxzREFBc0RBLGVBQUlBOztvQkFFbklBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSxZQUFZQTtvQkFDWkEsNEJBQVlBO29CQUNaQSxZQUFjQTtvQkFDZEEsWUFBWUEsQUFBQ0E7b0JBQ2JBLGlFQUFpRUE7b0JBQ2pFQSxnRUFBZ0VBO29CQUNoRUEsaUVBQWlFQTtvQkFDakVBLGdFQUFnRUE7O29CQUVoRUEsaUVBQWlFQSxzREFBc0RBO29CQUN2SEEsZ0VBQWdFQSxpRkFBc0RBO29CQUN0SEEsaUVBQWlFQSxzREFBd0RBO29CQUN6SEEsZ0VBQWdFQSxzREFBc0RBLEFBQUNBOzs7O29CQU12SEEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLFlBQVlBO29CQUNaQSxZQUFZQTtvQkFDWkEsWUFBWUEsQ0FBRUE7b0JBQ2RBLFlBQVlBLG9CQUFJQTtvQkFDaEJBLG1GQUFtRkE7b0JBQ25GQSxrRkFBa0ZBO29CQUNsRkEsbUZBQW1GQTtvQkFDbkZBLGlFQUFpRUE7O29CQUVqRUEsbUZBQW1GQSxzREFBc0RBO29CQUN6SUEsa0ZBQWtGQSxzREFBc0RBO29CQUN4SUEsbUZBQW1GQSxzREFBc0RBLENBQUVBO29CQUMzSUEsaUVBQWlFQSxzREFBc0RBLG9CQUFJQTs7b0JBRTNIQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsWUFBWUE7b0JBQ1pBLFlBQVlBO29CQUNaQSxZQUFZQSxDQUFFQTtvQkFDZEEsWUFBWUEsQUFBQ0E7b0JBQ2JBLGtGQUFrRkE7b0JBQ2xGQSxtRkFBbUZBO29CQUNuRkEsa0ZBQWtGQTtvQkFDbEZBLG1GQUFtRkE7O29CQUVuRkEsa0ZBQWtGQSxzREFBc0RBO29CQUN4SUEsbUZBQW1GQSxzREFBc0RBO29CQUN6SUEsa0ZBQWtGQSxzREFBc0RBLENBQUVBO29CQUMxSUEsbUZBQW1GQSxzREFBc0RBLEFBQUNBOzs7O29CQU0xSUEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLFlBQVlBO29CQUNaQSxZQUFZQTtvQkFDWkEsWUFBWUEsQ0FBRUE7b0JBQ2RBLFlBQVlBLHFCQUFJQTtvQkFDaEJBLGdFQUFnRUE7b0JBQ2hFQSxtRkFBbUZBO29CQUNuRkEsZ0VBQWdFQTtvQkFDaEVBLG1GQUFtRkE7O29CQUVuRkEsZ0VBQWdFQSxzREFBc0RBO29CQUN0SEEsbUZBQW1GQSxzREFBc0RBO29CQUN6SUEsZ0VBQWdFQSxzREFBc0RBLENBQUVBO29CQUN4SEEsbUZBQW1GQSxzREFBc0RBLHFCQUFJQTs7b0JBRTdJQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsWUFBWUE7b0JBQ1pBLFlBQVlBO29CQUNaQSxZQUFZQSxDQUFFQTtvQkFDZEEsbUZBQW1GQTtvQkFDbkZBLGdFQUFnRUE7b0JBQ2hFQSxtRkFBbUZBOztvQkFFbkZBLG1GQUFtRkEsc0RBQXNEQTtvQkFDeklBLGdFQUFnRUEsc0RBQXNEQTtvQkFDdEhBLG1GQUFtRkEsc0RBQXNEQSxDQUFFQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJ1c2luZyBCcmlkZ2UuVGVzdC5OVW5pdDtcclxuXHJcbm5hbWVzcGFjZSBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQnJpZGdlSXNzdWVzXHJcbntcclxuICAgIFtDYXRlZ29yeShDb25zdGFudHMuTU9EVUxFX0lTU1VFUyldXHJcbiAgICBbVGVzdEZpeHR1cmUoVGVzdE5hbWVGb3JtYXQgPSBcIiMxMzg1IC0gXCIgKyBDb25zdGFudHMuQkFUQ0hfTkFNRSArIFwiIHswfVwiKV1cclxuICAgIHB1YmxpYyBjbGFzcyBCcmlkZ2UxMzg1XHJcbiAgICB7XHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RJc1R5cGVkQXJyYXlGb3JCeXRlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9iamVjdCB2YWx1ZSA9IG5ldyBieXRlWzNdO1xyXG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZSh2YWx1ZSBpcyBieXRlW10pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsInVzaW5nIEJyaWRnZS5UZXN0Lk5Vbml0O1xyXG5cclxubmFtZXNwYWNlIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5CcmlkZ2VJc3N1ZXNcclxue1xyXG4gICAgW0NhdGVnb3J5KENvbnN0YW50cy5NT0RVTEVfSVNTVUVTKV1cclxuICAgIFtUZXN0Rml4dHVyZShUZXN0TmFtZUZvcm1hdCA9IFwiIzE0OTkgLSBcIiArIENvbnN0YW50cy5CQVRDSF9OQU1FICsgXCIgezB9XCIpXVxyXG4gICAgcHVibGljIGNsYXNzIEJyaWRnZTE0OTlcclxuICAgIHtcclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBUZXN0T2JqZWN0U3RyaW5nQ29hbGVzY2VXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvYmplY3QgZGVmID0gMTtcclxuICAgICAgICAgICAgQnJpZGdlMTQ5OSBhcHAgPSBudWxsO1xyXG4gICAgICAgICAgICBvYmplY3QgbzEgPSBcIlwiO1xyXG4gICAgICAgICAgICBvYmplY3QgbzIgPSBcInRlc3RcIjtcclxuICAgICAgICAgICAgb2JqZWN0IG8zID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbCgxLCBhcHAgPz8gZGVmKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKFwiXCIsIG8xID8/IG8yKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKFwiXCIsIG8xID8/IFwidGVzdFwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKFwidGVzdFwiLCBvMyA/PyBvMik7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbChcInRlc3RcIiwgbzMgPz8gXCJ0ZXN0XCIpO1xyXG5cclxuICAgICAgICAgICAgc3RyaW5nIHMxID0gXCJcIjtcclxuICAgICAgICAgICAgc3RyaW5nIHMyID0gXCJ0ZXN0XCI7XHJcbiAgICAgICAgICAgIHN0cmluZyBzMyA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoXCJcIiwgczEgPz8gczIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoXCJcIiwgczEgPz8gbzIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoXCJcIiwgczEgPz8gXCJ0ZXN0XCIpO1xyXG4jcHJhZ21hIHdhcm5pbmcgZGlzYWJsZSAxNjJcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKFwiXCIsIFwiXCIgPz8gXCJ0ZXN0XCIpO1xyXG4jcHJhZ21hIHdhcm5pbmcgcmVzdG9yZSAxNjJcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKFwidGVzdFwiLCBzMyA/PyBzMik7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbChcInRlc3RcIiwgczMgPz8gbzIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoXCJ0ZXN0XCIsIHMzID8/IFwidGVzdFwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKFwidGVzdFwiLCBudWxsID8/IFwidGVzdFwiKTtcclxuXHJcbiAgICAgICAgICAgIGludD8gaTEgPSAwO1xyXG4gICAgICAgICAgICBpbnQ/IGkyID0gMTtcclxuICAgICAgICAgICAgaW50PyBpMyA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoMCwgaTEgPz8gaTIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoMCwgaTEgPz8gbzIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoMCwgaTEgPz8gMSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbCgxLCBpMyA/PyBpMik7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbChcInRlc3RcIiwgaTMgPz8gbzIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoMSwgaTMgPz8gMSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbCgxLCBudWxsID8/IGkyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJ1c2luZyBCcmlkZ2UuVGVzdC5OVW5pdDtcclxuXHJcbnVzaW5nIFN5c3RlbTtcclxuXHJcbm5hbWVzcGFjZSBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQnJpZGdlSXNzdWVzXHJcbntcclxuICAgIC8vIEJyaWRnZVsjMTEyMl1cclxuICAgIFtDYXRlZ29yeShDb25zdGFudHMuTU9EVUxFX0lTU1VFUyldXHJcbiAgICBbVGVzdEZpeHR1cmUoVGVzdE5hbWVGb3JtYXQgPSBcIiMxMTIyIC0gXCIgKyBDb25zdGFudHMuQkFUQ0hfTkFNRSArIFwiIHswfVwiKV1cclxuICAgIHB1YmxpYyBjbGFzcyBOMTEyMlxyXG4gICAge1xyXG4gICAgICAgIFtUZXN0KEV4cGVjdGVkQ291bnQgPSA0KV1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdENsaXBwaW5nSW5KYXZhU2NyaXB0T3ZlcmZsb3dNb2RlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gZG91YmxlLk1heFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgdmFyIHkxID0gKGludClNYXRoLkZsb29yKHggLyAwLjIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoRG91YmxlLlBvc2l0aXZlSW5maW5pdHksIHkxLCBcImludFwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB5MiA9ICh1aW50KU1hdGguRmxvb3IoeCAvIDAuMik7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChEb3VibGUuUG9zaXRpdmVJbmZpbml0eSwgeTIsIFwidWludFwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB6MSA9IChsb25nKU1hdGguRmxvb3IoeCAvIDAuMik7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChEb3VibGUuUG9zaXRpdmVJbmZpbml0eSwgejEsIFwibG9uZ1wiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB6MiA9ICh1bG9uZylNYXRoLkZsb29yKHggLyAwLjIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoRG91YmxlLlBvc2l0aXZlSW5maW5pdHksIHoyLCBcInVsb25nXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3QoRXhwZWN0ZWRDb3VudCA9IDQpXVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0SW50ZWdlckRpdmlzaW9uSW5KYXZhU2NyaXB0T3ZlcmZsb3dNb2RlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gMS4xO1xyXG5cclxuICAgICAgICAgICAgaW50IHkxID0gKGludCkoMSAvIHgpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCIwLjkwOTA5MDkwOTA5MDkwOTFcIiwgeTEuVG9TdHJpbmcoKSwgXCJpbnRcIik7XHJcblxyXG4gICAgICAgICAgICB1aW50IHkyID0gKHVpbnQpKDEgLyB4KTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwiMC45MDkwOTA5MDkwOTA5MDkxXCIsIHkyLlRvU3RyaW5nKCksIFwidWludFwiKTtcclxuXHJcbiAgICAgICAgICAgIGxvbmcgejEgPSAobG9uZykoMSAvIHgpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCIwLjkwOTA5MDkwOTA5MDkwOTFcIiwgejEuVG9TdHJpbmcoKSwgXCJsb25nXCIpO1xyXG5cclxuICAgICAgICAgICAgdWxvbmcgejIgPSAodWxvbmcpKDEgLyB4KTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwiMC45MDkwOTA5MDkwOTA5MDkxXCIsIHoyLlRvU3RyaW5nKCksIFwidWxvbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwidXNpbmcgQnJpZGdlLlRlc3QuTlVuaXQ7XHJcblxyXG5uYW1lc3BhY2UgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkJyaWRnZUlzc3Vlc1xyXG57XHJcbiAgICAvLyBCcmlkZ2VbIzEyMDRdXHJcbiAgICBbQ2F0ZWdvcnkoQ29uc3RhbnRzLk1PRFVMRV9JU1NVRVMpXVxyXG4gICAgW1Rlc3RGaXh0dXJlKFRlc3ROYW1lRm9ybWF0ID0gXCIjMTIwNCAtIFwiICsgQ29uc3RhbnRzLkJBVENIX05BTUUgKyBcIiB7MH1cIildXHJcbiAgICBwdWJsaWMgY2xhc3MgTjEyMDRcclxuICAgIHtcclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdFN0cmljdE51bGxDaGVja3NPcHRpb25Gb3JOdWxscygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvYmplY3QgdGVtcCA9IG5ldyBvYmplY3QoKTtcclxuICAgICAgICAgICAgb2JqZWN0IHRlbXAxID0gdGVtcDtcclxuICAgICAgICAgICAgb2JqZWN0IHRlbXAyID0gbmV3IG9iamVjdCgpO1xyXG4gICAgICAgICAgICBsb25nIGwgPSA1TDtcclxuICAgICAgICAgICAgb2JqZWN0IG9sID0gNUw7XHJcbiAgICAgICAgICAgIG9iamVjdCBvaSA9IDU7XHJcbiAgICAgICAgICAgIG9iamVjdCB2YXJOdWxsID0gbnVsbDtcclxuICAgICAgICAgICAgb2JqZWN0IHZhclVuZGVmaW5lZCA9IHRlbXBbXCJ0aGlzLXByb3AtdW5kZWZpbmVkXCJdO1xyXG5cclxuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKHZhck51bGwgPT0gdmFyVW5kZWZpbmVkLCBcInZhck51bGwgPT0gdmFyVW5kZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZSh2YXJOdWxsID09IG51bGwsIFwidmFyTnVsbCA9PSBudWxsXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UodmFyVW5kZWZpbmVkID09IG51bGwsIFwidmFyVW5kZWZpbmVkID09IG51bGxcIik7XHJcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKFNjcmlwdC5VbmRlZmluZWQgPT0gdmFyVW5kZWZpbmVkLCBcIlNjcmlwdC5VbmRlZmluZWQgPT0gdmFyVW5kZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZSh0ZW1wID09IHRlbXAxLCBcInRlbXAgPT0gdGVtcDFcIik7XHJcbiAgICAgICAgICAgIEFzc2VydC5GYWxzZSh0ZW1wID09IHRlbXAyLCBcInRlbXAgPT0gdGVtcDJcIik7XHJcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKGwgPT0gNSwgXCJsID09IDVcIik7XHJcbiAgICAgICAgICAgIEFzc2VydC5GYWxzZShvbCA9PSBvaSwgXCJvbCA9PSBvaVwiKTtcclxuXHJcbiAgICAgICAgICAgIEFzc2VydC5GYWxzZSh2YXJVbmRlZmluZWQgPT0gdmFyTnVsbCwgXCJ2YXJVbmRlZmluZWQgPT0gdmFyTnVsbFwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUobnVsbCA9PSB2YXJOdWxsLCBcIm51bGwgPT0gdmFyTnVsbFwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKG51bGwgPT0gdmFyVW5kZWZpbmVkLCBcIm51bGwgPT0gdmFyVW5kZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZSh2YXJVbmRlZmluZWQgPT0gU2NyaXB0LlVuZGVmaW5lZCwgXCJ2YXJVbmRlZmluZWQgPT0gU2NyaXB0LlVuZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUodGVtcDEgPT0gdGVtcCwgXCJ0ZW1wMSA9PSB0ZW1wXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UodGVtcDIgPT0gdGVtcCwgXCJ0ZW1wMiA9PSB0ZW1wXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZSg1ID09IGwsIFwiNSA9PSBsXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuRmFsc2Uob2kgPT0gb2wsIFwib2kgPT0gb2xcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwidXNpbmcgQnJpZGdlLlRlc3QuTlVuaXQ7XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcblxyXG5uYW1lc3BhY2UgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkJyaWRnZUlzc3Vlc1xyXG57XHJcbiAgICAvLyBCcmlkZ2VbIzc3Ml1cclxuICAgIC8vIFwidXNlVHlwZWRBcnJheVwiIGJyaWRnZS5qc29uIG9wdGlvbiBpcyB0cnVlIGluIHRoaXMgcHJvamVjdFxyXG4gICAgW0NhdGVnb3J5KENvbnN0YW50cy5NT0RVTEVfSVNTVUVTKV1cclxuICAgIFtUZXN0Rml4dHVyZShUZXN0TmFtZUZvcm1hdCA9IFwiIzc3MiAtIFwiICsgQ29uc3RhbnRzLkJBVENIX05BTUUgKyBcIiB7MH1cIildXHJcbiAgICBwdWJsaWMgY2xhc3MgTjc3MlxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgY2xhc3MgQ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IGludCBpO1xyXG5cclxuICAgICAgICAgICAgcHVibGljIEMoaW50IGkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaSA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHB1YmxpYyBvdmVycmlkZSBib29sIEVxdWFscyhvYmplY3QgbylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG8gaXMgQyAmJiBpID09ICgoQylvKS5pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgaW50IEdldEhhc2hDb2RlKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFR5cGVQcm9wZXJ0aWVzQXJlQ29ycmVjdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvYmplY3QgYXJyID0gbmV3W10geyAxLCAyLCAzIH07XHJcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKGFyciBpcyBBcnJheSwgXCJpcyBBcnJheSBzaG91bGQgYmUgdHJ1ZVwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUoYXJyIGlzIGludFtdLCBcImlzIGludFtdIHNob3VsZCBiZSB0cnVlXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShhcnIgaXMgSUNvbGxlY3Rpb24sIFwiaXMgSUNvbGxlY3Rpb24gc2hvdWxkIGJlIHRydWVcIik7XHJcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKGFyciBpcyBJRW51bWVyYWJsZSwgXCJpcyBJRW51bWVyYWJsZSBzaG91bGQgYmUgdHJ1ZVwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUoYXJyIGlzIElDbG9uZWFibGUsIFwiaXMgSUNsb25lYWJsZSBzaG91bGQgYmUgdHJ1ZVwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUoYXJyIGlzIElDb2xsZWN0aW9uPGludD4sIFwiaXMgSUNvbGxlY3Rpb248aW50PiBzaG91bGQgYmUgdHJ1ZVwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUoYXJyIGlzIElFbnVtZXJhYmxlPGludD4sIFwiaXMgSUVudW1lcmFibGU8aW50PiBzaG91bGQgYmUgdHJ1ZVwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUoYXJyIGlzIElMaXN0PGludD4sIFwiaXMgSUxpc3Q8aW50PiBzaG91bGQgYmUgdHJ1ZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIExlbmd0aFdvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgwLCBuZXcgaW50WzBdLkxlbmd0aCk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgxLCBuZXdbXSB7IFwieFwiIH0uTGVuZ3RoKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDIsIG5ld1tdIHsgXCJ4XCIsIFwieVwiIH0uTGVuZ3RoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFJhbmtJc09uZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMSwgbmV3IGludFswXS5SYW5rKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEdldExlbmd0aFdvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgwLCBuZXcgaW50WzBdLkdldExlbmd0aCgwKSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgxLCBuZXdbXSB7IFwieFwiIH0uR2V0TGVuZ3RoKDApKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDIsIG5ld1tdIHsgXCJ4XCIsIFwieVwiIH0uR2V0TGVuZ3RoKDApKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEdldExvd2VyQm91bmQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDAsIG5ldyBpbnRbMF0uR2V0TG93ZXJCb3VuZCgwKSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgwLCBuZXdbXSB7IFwieFwiIH0uR2V0TG93ZXJCb3VuZCgwKSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgwLCBuZXdbXSB7IFwieFwiLCBcInlcIiB9LkdldExvd2VyQm91bmQoMCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgR2V0VXBwZXJCb3VuZFdvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgtMSwgbmV3IGludFswXS5HZXRVcHBlckJvdW5kKDApKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDAsIG5ld1tdIHsgXCJ4XCIgfS5HZXRVcHBlckJvdW5kKDApKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDEsIG5ld1tdIHsgXCJ4XCIsIFwieVwiIH0uR2V0VXBwZXJCb3VuZCgwKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBHZXR0aW5nVmFsdWVCeUluZGV4V29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwieFwiLCBuZXdbXSB7IFwieFwiLCBcInlcIiB9WzBdKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwieVwiLCBuZXdbXSB7IFwieFwiLCBcInlcIiB9WzFdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEdldFZhbHVlV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwieFwiLCBuZXdbXSB7IFwieFwiLCBcInlcIiB9LkdldFZhbHVlKDApKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwieVwiLCBuZXdbXSB7IFwieFwiLCBcInlcIiB9LkdldFZhbHVlKDEpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNldHRpbmdWYWx1ZUJ5SW5kZXhXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3IHN0cmluZ1syXTtcclxuICAgICAgICAgICAgYXJyWzBdID0gXCJ4XCI7XHJcbiAgICAgICAgICAgIGFyclsxXSA9IFwieVwiO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJ4XCIsIGFyclswXSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcInlcIiwgYXJyWzFdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNldFZhbHVlV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGFyciA9IG5ldyBzdHJpbmdbMl07XHJcbiAgICAgICAgICAgIGFyci5TZXRWYWx1ZShcInhcIiwgMCk7XHJcbiAgICAgICAgICAgIGFyci5TZXRWYWx1ZShcInlcIiwgMSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcInhcIiwgYXJyWzBdKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwieVwiLCBhcnJbMV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgRm9yZWFjaFdvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZyByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3JlYWNoICh2YXIgcyBpbiBuZXdbXSB7IFwieFwiLCBcInlcIiB9KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJ4eVwiLCByZXN1bHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ2xvbmVXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyBcInhcIiwgXCJ5XCIgfTtcclxuICAgICAgICAgICAgdmFyIGFycjIgPSBhcnIuQ2xvbmUoKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKGFyciA9PSBhcnIyKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKGFycjIsIGFycik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBDb25jYXRXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyBcImFcIiwgXCJiXCIgfTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZURlZXBFcXVhbChuZXdbXSB7IFwiYVwiLCBcImJcIiwgXCJjXCIgfSwgYXJyLkNvbmNhdChcImNcIikpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRGVlcEVxdWFsKG5ld1tdIHsgXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJkXCIgfSwgYXJyLkNvbmNhdChcImNcIiwgXCJkXCIpKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZURlZXBFcXVhbChuZXdbXSB7IFwiYVwiLCBcImJcIiB9LCBhcnIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ29udGFpbnNXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyBcInhcIiwgXCJ5XCIgfTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUoU3lzdGVtLkFycmF5RXh0ZW5zaW9ucy5Db250YWluczxzdHJpbmc+KGFycixcInhcIikpO1xyXG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UoU3lzdGVtLkFycmF5RXh0ZW5zaW9ucy5Db250YWluczxzdHJpbmc+KGFycixcInpcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ29udGFpbnNVc2VzRXF1YWxzTWV0aG9kKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENbXSBhcnIgPSBuZXdbXSB7IG5ldyBDKDEpLCBuZXcgQygyKSwgbmV3IEMoMykgfTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUoU3lzdGVtLkFycmF5RXh0ZW5zaW9ucy5Db250YWluczxnbG9iYWw6OkJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5CcmlkZ2VJc3N1ZXMuTjc3Mi5DPihhcnIsbmV3IEMoMikpKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKFN5c3RlbS5BcnJheUV4dGVuc2lvbnMuQ29udGFpbnM8Z2xvYmFsOjpCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQnJpZGdlSXNzdWVzLk43NzIuQz4oYXJyLG5ldyBDKDQpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBBbGxXaXRoQXJyYXlJdGVtRmlsdGVyQ2FsbGJhY2tXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLkFsbDxpbnQ+KG5ld1tdIHsgMSwgMiwgMyB9LChnbG9iYWw6OlN5c3RlbS5GdW5jPGludCwgYm9vbD4pKHggPT4geCA+IDApKSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5GYWxzZShTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLkFsbDxpbnQ+KG5ld1tdIHsgMSwgMiwgMyB9LChnbG9iYWw6OlN5c3RlbS5GdW5jPGludCwgYm9vbD4pKHggPT4geCA+IDEpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBTbGljZVdpdGhvdXRFbmRXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRGVlcEVxdWFsKG5ld1tdIHsgXCJjXCIsIFwiZFwiIH0sIG5ld1tdIHsgXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJkXCIgfS5TbGljZSgyKSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVEZWVwRXF1YWwobmV3W10geyBcImJcIiwgXCJjXCIgfSwgbmV3W10geyBcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiB9LlNsaWNlKDEsIDMpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEZvcmVhY2hXaXRoQXJyYXlJdGVtQ2FsbGJhY2tXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmcgcmVzdWx0ID0gXCJcIjtcclxuU3lzdGVtLkFycmF5RXh0ZW5zaW9ucy5Gb3JFYWNoPHN0cmluZz4oICAgICAgICAgICAgbmV3W10geyBcImFcIiwgXCJiXCIsIFwiY1wiIH0sKGdsb2JhbDo6U3lzdGVtLkFjdGlvbjxzdHJpbmc+KShzID0+IHJlc3VsdCArPSBzKSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcImFiY1wiLCByZXN1bHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgSW5kZXhPZldpdGhvdXRTdGFydEluZGV4V29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDEsIG5ld1tdIHsgXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJiXCIgfS5JbmRleE9mKFwiYlwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBJbmRleE9mV2l0aG91dFN0YXJ0SW5kZXhVc2VzRXF1YWxzTWV0aG9kKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IG5ldyBDKDEpLCBuZXcgQygyKSwgbmV3IEMoMykgfTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDEsIEFycmF5LkluZGV4T2Y8Z2xvYmFsOjpCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQnJpZGdlSXNzdWVzLk43NzIuQz4oYXJyLCBuZXcgQygyKSkpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoLTEsIEFycmF5LkluZGV4T2Y8Z2xvYmFsOjpCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQnJpZGdlSXNzdWVzLk43NzIuQz4oYXJyLCBuZXcgQyg0KSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgSW5kZXhPZldpdGhTdGFydEluZGV4V29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDMsIG5ld1tdIHsgXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJiXCIgfS5JbmRleE9mKFwiYlwiLCAyKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBKb2luV2l0aG91dERlbGltaXRlcldvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcImEsYixjLGJcIiwgbmV3W10geyBcImFcIiwgXCJiXCIsIFwiY1wiLCBcImJcIiB9LkpvaW4oXCIsXCIpKTtcclxuXHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcImF8YnxjfGJcIiwgbmV3W10geyBcImFcIiwgXCJiXCIsIFwiY1wiLCBcImJcIiB9LkpvaW4oXCJ8XCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFJldmVyc2VXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyAxLCAzLCA0LCAxLCAzLCAyIH07XHJcbiAgICAgICAgICAgIGFyci5SZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChuZXdbXSB7IDIsIDMsIDEsIDQsIDMsIDEgfSwgYXJyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFueVdpdGhBcnJheUl0ZW1GaWx0ZXJDYWxsYmFja1dvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKFN5c3RlbS5MaW5xLkVudW1lcmFibGUuQW55PGludD4obmV3W10geyAxLCAyLCAzLCA0IH0sKGdsb2JhbDo6U3lzdGVtLkZ1bmM8aW50LCBib29sPikoaSA9PiBpID4gMSkpKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKFN5c3RlbS5MaW5xLkVudW1lcmFibGUuQW55PGludD4obmV3W10geyAxLCAyLCAzLCA0IH0sKGdsb2JhbDo6U3lzdGVtLkZ1bmM8aW50LCBib29sPikoaSA9PiBpID4gNSkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEJpbmFyeVNlYXJjaDFXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyAxLCAyLCAzLCAzLCA0LCA1IH07XHJcblxyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMiwgQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyLCAzKSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKEFycmF5LkJpbmFyeVNlYXJjaDxpbnQ+KGFyciwgNikgPCAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEJpbmFyeVNlYXJjaDJXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyAxLCAyLCAzLCAzLCA0LCA1IH07XHJcblxyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMywgQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyLCAzLCAyLCAzKSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKEFycmF5LkJpbmFyeVNlYXJjaDxpbnQ+KGFyciwgMiwgMiwgNCkgPCAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgY2xhc3MgVGVzdFJldmVyc2VDb21wYXJlciA6IElDb21wYXJlcjxpbnQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwdWJsaWMgaW50IENvbXBhcmUoaW50IHgsIGludCB5KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geCA9PSB5ID8gMCA6ICh4ID4geSA/IC0xIDogMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEJpbmFyeVNlYXJjaDNXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyAxLCAyLCAzLCAzLCA0LCA1IH07XHJcblxyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMiwgQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyLCAzLCBuZXcgVGVzdFJldmVyc2VDb21wYXJlcigpKSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgtMSwgQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyLCA2LCBuZXcgVGVzdFJldmVyc2VDb21wYXJlcigpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBCaW5hcnlTZWFyY2g0V29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgMSwgMiwgMywgMywgNCwgNSB9O1xyXG5cclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDMsIEFycmF5LkJpbmFyeVNlYXJjaDxpbnQ+KGFyciwgMywgMiwgMywgbmV3IFRlc3RSZXZlcnNlQ29tcGFyZXIoKSkpO1xyXG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShBcnJheS5CaW5hcnlTZWFyY2g8aW50PihhcnIsIDMsIDIsIDQsIG5ldyBUZXN0UmV2ZXJzZUNvbXBhcmVyKCkpIDwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBCaW5hcnlTZWFyY2hFeGNlcHRpb25zV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW50W10gYXJyMSA9IG51bGw7XHJcbiAgICAgICAgICAgIHZhciBhcnIyID0gbmV3W10geyAxLCAyLCAzLCAzLCA0LCA1IH07XHJcblxyXG4gICAgICAgICAgICBBc3NlcnQuVGhyb3dzKChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyMSwgMSk7IH0pKTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRocm93cygoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEFycmF5LkJpbmFyeVNlYXJjaDxpbnQ+KGFycjIsIC0xLCAxLCAxKTsgfSkpO1xyXG4gICAgICAgICAgICBBc3NlcnQuVGhyb3dzKChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyMiwgMSwgNiwgMSk7IH0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNvcnRXaXRoRGVmYXVsdENvbXBhcmVXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyAxLCA2LCA2LCA0LCAyIH07XHJcbiAgICAgICAgICAgIGFyci5Kc1NvcnQoKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKG5ld1tdIHsgMSwgMiwgNCwgNiwgNiB9LCBhcnIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgU29ydDFXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyAxLCA2LCA2LCA0LCAyIH07XHJcbiAgICAgICAgICAgIEFycmF5LlNvcnQ8aW50PihhcnIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwobmV3W10geyAxLCAyLCA0LCA2LCA2IH0sIGFycik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBTb3J0MldvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IDEsIDYsIDYsIDQsIDIgfTtcclxuICAgICAgICAgICAgQXJyYXkuU29ydDxpbnQ+KGFyciwgMiwgMyk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChuZXdbXSB7IDEsIDYsIDIsIDQsIDYgfSwgYXJyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNvcnQzV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgMSwgMiwgNiwgMywgNiwgNyB9O1xyXG4gICAgICAgICAgICBBcnJheS5Tb3J0PGludD4oYXJyLCAyLCAzLCBuZXcgVGVzdFJldmVyc2VDb21wYXJlcigpKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKG5ld1tdIHsgMSwgMiwgNiwgNiwgMywgNyB9LCBhcnIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgU29ydDRXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyAxLCA2LCA2LCA0LCAyIH07XHJcbiAgICAgICAgICAgIEFycmF5LlNvcnQ8aW50PihhcnIsIG5ldyBUZXN0UmV2ZXJzZUNvbXBhcmVyKCkpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwobmV3W10geyA2LCA2LCA0LCAyLCAxIH0sIGFycik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBTb3J0RXhjZXB0aW9uc1dvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGludFtdIGFycjEgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgQXNzZXJ0LlRocm93cygoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEFycmF5LlNvcnQ8aW50PihhcnIxKTsgfSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgRm9yZWFjaFdoZW5DYXN0VG9JTGlzdFdvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIElMaXN0PHN0cmluZz4gbGlzdCA9IG5ld1tdIHsgXCJ4XCIsIFwieVwiIH07XHJcbiAgICAgICAgICAgIHN0cmluZyByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3JlYWNoICh2YXIgcyBpbiBsaXN0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJ4eVwiLCByZXN1bHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgSUNvbGxlY3Rpb25Db3VudFdvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIElMaXN0PHN0cmluZz4gbCA9IG5ld1tdIHsgXCJ4XCIsIFwieVwiLCBcInpcIiB9O1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMywgbC5Db3VudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBJQ29sbGVjdGlvbkFkZFdvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIElMaXN0PHN0cmluZz4gbCA9IG5ld1tdIHsgXCJ4XCIsIFwieVwiLCBcInpcIiB9O1xyXG4gICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE5vdFN1cHBvcnRlZEV4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBsLkFkZChcImFcIik7IH0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIElDb2xsZWN0aW9uQ2xlYXJXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJTGlzdDxzdHJpbmc+IGwgPSBuZXdbXSB7IFwieFwiLCBcInlcIiwgXCJ6XCIgfTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRocm93czxOb3RTdXBwb3J0ZWRFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgbC5DbGVhcigpOyB9KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBJQ29sbGVjdGlvbkNvbnRhaW5zV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSUxpc3Q8c3RyaW5nPiBsID0gbmV3W10geyBcInhcIiwgXCJ5XCIsIFwielwiIH07XHJcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKGwuQ29udGFpbnMoXCJ5XCIpKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKGwuQ29udGFpbnMoXCJhXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIElDb2xsZWN0aW9uQ29udGFpbnNVc2VzRXF1YWxzTWV0aG9kKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIElMaXN0PEM+IGwgPSBuZXdbXSB7IG5ldyBDKDEpLCBuZXcgQygyKSwgbmV3IEMoMykgfTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUobC5Db250YWlucyhuZXcgQygyKSkpO1xyXG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UobC5Db250YWlucyhuZXcgQyg0KSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgSUNvbGxlY3Rpb25SZW1vdmVXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJTGlzdDxzdHJpbmc+IGwgPSBuZXdbXSB7IFwieFwiLCBcInlcIiwgXCJ6XCIgfTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRocm93czxOb3RTdXBwb3J0ZWRFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgbC5SZW1vdmUoXCJ5XCIpOyB9KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBJTGlzdEluZGV4aW5nV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSUxpc3Q8c3RyaW5nPiBsID0gbmV3W10geyBcInhcIiwgXCJ5XCIsIFwielwiIH07XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcInlcIiwgbFsxXSk7XHJcbiAgICAgICAgICAgIGxbMV0gPSBcImFcIjtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKG5ld1tdIHsgXCJ4XCIsIFwiYVwiLCBcInpcIiB9LCBTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLlRvQXJyYXk8c3RyaW5nPihsKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBJTGlzdEluZGV4T2ZXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJTGlzdDxzdHJpbmc+IGwgPSBuZXdbXSB7IFwieFwiLCBcInlcIiwgXCJ6XCIgfTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDEsIGwuSW5kZXhPZihcInlcIikpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoLTEsIGwuSW5kZXhPZihcImFcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgSUxpc3RJbmRleE9mVXNlc0VxdWFsc01ldGhvZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyBuZXcgQygxKSwgbmV3IEMoMiksIG5ldyBDKDMpIH07XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgxLCBBcnJheS5JbmRleE9mPGdsb2JhbDo6QnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkJyaWRnZUlzc3Vlcy5ONzcyLkM+KGFyciwgbmV3IEMoMikpKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKC0xLCBBcnJheS5JbmRleE9mPGdsb2JhbDo6QnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkJyaWRnZUlzc3Vlcy5ONzcyLkM+KGFyciwgbmV3IEMoNCkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIElMaXN0SW5zZXJ0V29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSUxpc3Q8c3RyaW5nPiBsID0gbmV3W10geyBcInhcIiwgXCJ5XCIsIFwielwiIH07XHJcbiAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8Tm90U3VwcG9ydGVkRXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IGwuSW5zZXJ0KDEsIFwiYVwiKTsgfSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgSUxpc3RSZW1vdmVBdFdvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIElMaXN0PHN0cmluZz4gbCA9IG5ld1tdIHsgXCJ4XCIsIFwieVwiLCBcInpcIiB9O1xyXG4gICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE5vdFN1cHBvcnRlZEV4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBsLlJlbW92ZUF0KDEpOyB9KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdChFeHBlY3RlZENvdW50ID0gMTApXVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0VXNlQ2FzZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL1RoZXNlIGFycmF5cyBkZXBlbmQgb24gXCJ1c2VUeXBlZEFycmF5XCIgYnJpZGdlLmpzb24gb3B0aW9uXHJcbiAgICAgICAgICAgIHZhciBieXRlQXJyYXkgPSBuZXcgYnl0ZVsxXTtcclxuICAgICAgICAgICAgdmFyIHNieXRlQXJyYXkgPSBuZXcgc2J5dGVbMl07XHJcbiAgICAgICAgICAgIHZhciBzaG9ydEFycmF5ID0gbmV3IHNob3J0WzNdO1xyXG4gICAgICAgICAgICB2YXIgdXNob3J0QXJyYXkgPSBuZXcgdXNob3J0WzRdO1xyXG4gICAgICAgICAgICB2YXIgaW50QXJyYXkgPSBuZXcgaW50WzVdO1xyXG4gICAgICAgICAgICB2YXIgdWludEFycmF5ID0gbmV3IHVpbnRbNl07XHJcbiAgICAgICAgICAgIHZhciBmbG9hdEFycmF5ID0gbmV3IGZsb2F0WzddO1xyXG4gICAgICAgICAgICB2YXIgZG91YmxlQXJyYXkgPSBuZXcgZG91YmxlWzhdO1xyXG5cclxuICAgICAgICAgICAgLy9UaGVzZSBhcnJheXMgZG8gbm90IGRlcGVuZCBvbiBcInVzZVR5cGVkQXJyYXlcIiBicmlkZ2UuanNvbiBvcHRpb25cclxuICAgICAgICAgICAgdmFyIHN0cmluZ0FycmF5ID0gbmV3IHN0cmluZ1s5XTtcclxuICAgICAgICAgICAgdmFyIGRlY2ltYWxBcnJheSA9IG5ldyBkZWNpbWFsWzEwXTtcclxuXHJcbiAgICAgICAgICAgIGJ5dGVBcnJheVswXSA9IDE7XHJcbiAgICAgICAgICAgIHNieXRlQXJyYXlbMF0gPSAyO1xyXG4gICAgICAgICAgICBzaG9ydEFycmF5WzBdID0gMztcclxuICAgICAgICAgICAgdXNob3J0QXJyYXlbMF0gPSA0O1xyXG4gICAgICAgICAgICBpbnRBcnJheVswXSA9IDU7XHJcbiAgICAgICAgICAgIHVpbnRBcnJheVswXSA9IDY7XHJcbiAgICAgICAgICAgIGZsb2F0QXJyYXlbMF0gPSA3O1xyXG4gICAgICAgICAgICBkb3VibGVBcnJheVswXSA9IDg7XHJcblxyXG4gICAgICAgICAgICBzdHJpbmdBcnJheVswXSA9IFwiOVwiO1xyXG4gICAgICAgICAgICBkZWNpbWFsQXJyYXlbMF0gPSAxMG07XHJcblxyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMSwgYnl0ZUFycmF5WzBdLCBcImdldCBieXRlQXJyYXlbMF1cIik7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgyLCBzYnl0ZUFycmF5WzBdLCBcImdldCBzYnl0ZUFycmF5WzBdXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMywgc2hvcnRBcnJheVswXSwgXCJnZXQgc2hvcnRBcnJheVswXVwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDQsIHVzaG9ydEFycmF5WzBdLCBcImdldCB1c2hvcnRBcnJheVswXVwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDUsIGludEFycmF5WzBdLCBcImdldCBpbnRBcnJheVswXVwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDYsIHVpbnRBcnJheVswXSwgXCJnZXQgdWludEFycmF5WzBdXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoNywgZmxvYXRBcnJheVswXSwgXCJnZXQgZmxvYXRBcnJheVswXVwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDgsIGRvdWJsZUFycmF5WzBdLCBcImdldCBkb3VibGVBcnJheVswXVwiKTtcclxuXHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcIjlcIiwgc3RyaW5nQXJyYXlbMF0sIFwiZ2V0IHN0cmluZ0FycmF5WzBdXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMTBtLCBkZWNpbWFsQXJyYXlbMF0sIFwiZ2V0IGRlY2ltYWxBcnJheVswXVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJ1c2luZyBCcmlkZ2UuVGVzdC5OVW5pdDtcclxuXHJcbnVzaW5nIFN5c3RlbTtcclxuXHJcbm5hbWVzcGFjZSBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDJcclxue1xyXG4gICAgLy8gQnJpZGdlWyMxMDkyXVxyXG4gICAgLy8gXCJvdmVyZmxvd01vZGVcIjogIFwiSmF2YXNjcmlwdFwiIGJyaWRnZS5qc29uIG9wdGlvblxyXG4gICAgcHVibGljIGNsYXNzIENoZWNrZWRVbmNoZWNrZWRUZXN0c1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBBc3NlcnRFcXVhbChvYmplY3QgZXhwZWN0ZWQsIG9iamVjdCBhY3R1YWwsIHN0cmluZyBtZXNzYWdlID0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChleHBlY3RlZC5Ub1N0cmluZygpLCBhY3R1YWwuVG9TdHJpbmcoKSwgbWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBvYmplY3QgQnlwYXNzKG9iamVjdCBvKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbQ2F0ZWdvcnkoQ29uc3RhbnRzLk1PRFVMRV9DSEVDS0VEX1VOQ0tFQ0tFRCldXHJcbiAgICAgICAgW1Rlc3RGaXh0dXJlKFRlc3ROYW1lRm9ybWF0ID0gXCJDaGVja2VkIC0gXCIgKyBDb25zdGFudHMuQkFUQ0hfTkFNRSArIFwiIHswfVwiKV1cclxuICAgICAgICBwdWJsaWMgY2xhc3MgQ2hlY2tlZFRlc3RzXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBbVGVzdF1cclxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RJbnQzMigpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gSW50MzIuTWF4VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4ICsgMTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heDIrKzsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gKyttYXgzOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IDIgKiBtYXg7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4MysrKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoKyttYXg0KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygyICogbWF4KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IEludDMyLk1pblZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbiAtIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4xLS07IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IC0tbWluMjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHByZS0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtbWluOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgdW5hcnkgLVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4gLSAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC0tbWluNCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLW1pbik7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFtUZXN0XVxyXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdFVJbnQzMigpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gVUludDMyLk1heFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heCArIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXgxKys7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9ICsrbWF4MjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAyICogbWF4OyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXggKyAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heDMrKyk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKCsrbWF4NCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoMiAqIG1heCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBVSW50MzIuTWluVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWluIC0gMTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbjEtLTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gLS1taW4yOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcHJlLS1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluIC0gMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0TG9uZygpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gbG9uZy5NYXhWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXggKyAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4MSsrOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSArK21heDI7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gMiAqIG1heDsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gbG9uZy5NaW5WYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4gLSAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWluMS0tOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtLW1pbjI7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwcmUtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gLW1pbjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluIC0gMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC1taW4pOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBbVGVzdF1cclxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RVTG9uZygpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gdWxvbmcuTWF4VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4ICsgMTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heDErKzsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gKyttYXgyOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IDIgKiBtYXg7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4MysrKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoKyttYXg0KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygyICogbWF4KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IHVsb25nLk1pblZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbiAtIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4xLS07IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IC0tbWluMjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHByZS0tXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluMy0tKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLS1taW40KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtDYXRlZ29yeShDb25zdGFudHMuTU9EVUxFX0NIRUNLRURfVU5DS0VDS0VEKV1cclxuICAgICAgICBbVGVzdEZpeHR1cmUoVGVzdE5hbWVGb3JtYXQgPSBcIkNoZWNrZWRJbnNpZGVVbmNoZWNrZWQgLSBcIiArIENvbnN0YW50cy5CQVRDSF9OQU1FICsgXCIgezB9XCIpXVxyXG4gICAgICAgIHB1YmxpYyBjbGFzcyBDaGVja2VkSW5zaWRlVW5jaGVja2VkVGVzdHNcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFtUZXN0XVxyXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdEludDMyKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdW5jaGVja2VkXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IEludDMyLk1heFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4ICsgMTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXgyKys7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSArK21heDM7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IDIgKiBtYXg7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXggKyAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoKyttYXg0KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoMiAqIG1heCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gSW50MzIuTWluVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4gLSAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbjEtLTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IC0tbWluMjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHByZS0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gLW1pbjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtbWluKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgdW5hcnkgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFtUZXN0XVxyXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdFVJbnQzMigpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVuY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSBVSW50MzIuTWF4VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXggKyAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heDErKzsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9ICsrbWF4MjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gMiAqIG1heDsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heDMrKyk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygyICogbWF4KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBVSW50MzIuTWluVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4gLSAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbjEtLTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IC0tbWluMjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHByZS0tXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4gLSAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLS1taW40KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBbVGVzdF1cclxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RMb25nKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdW5jaGVja2VkXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IGxvbmcuTWF4VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXggKyAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heDErKzsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9ICsrbWF4MjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gMiAqIG1heDsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heDMrKyk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygyICogbWF4KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBsb25nLk1pblZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWluIC0gMTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4xLS07IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtLW1pbjI7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwcmUtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IC1taW47IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciB1bmFyeSAtXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4gLSAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLS1taW40KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLW1pbik7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBbVGVzdF1cclxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RVTG9uZygpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVuY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSB1bG9uZy5NYXhWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heCArIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4MSsrOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gKyttYXgyOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAyICogbWF4OyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4MysrKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKCsrbWF4NCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IHVsb25nLk1pblZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWluIC0gMTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4xLS07IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtLW1pbjI7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwcmUtLVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluIC0gMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluMy0tKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC0tbWluNCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW0NhdGVnb3J5KENvbnN0YW50cy5NT0RVTEVfQ0hFQ0tFRF9VTkNLRUNLRUQpXVxyXG4gICAgICAgIFtUZXN0Rml4dHVyZShUZXN0TmFtZUZvcm1hdCA9IFwiVW5jaGVja2VkIC0gXCIgKyBDb25zdGFudHMuQkFUQ0hfTkFNRSArIFwiIHswfVwiKV1cclxuICAgICAgICBwdWJsaWMgY2xhc3MgVW5jaGVja2VkVGVzdHNcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFtUZXN0XVxyXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdEludDMyKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdW5jaGVja2VkXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IEludDMyLk1heFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgxID0gbWF4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDIgPSBtYXgxKys7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgzID0gKyttYXgyO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4NCA9IDIgKiBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ4XCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ3XCIsIHJNYXgyLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ4XCIsIHJNYXgzLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTJcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXggKyAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ3XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heDMrKyksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMlwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygyICogbWF4KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gSW50MzIuTWluVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluMiA9IG1pbjEtLTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW40ID0gLW1pbjtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMjE0NzQ4MzY0N1wiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDhcIiwgck1pbjIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMjE0NzQ4MzY0N1wiLCByTWluMywgXCJUaHJvdWdoIGlkZW50aWZpZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ4XCIsIHJNaW40LCBcIlRocm91Z2ggaWRlbnRpZmllciB1bmFyeSAtXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMjE0NzQ4MzY0N1wiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4gLSAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMjE0NzQ4MzY0N1wiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtbWluKSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBbVGVzdF1cclxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RVSW50MzIoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1bmNoZWNrZWRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gVUludDMyLk1heFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgxID0gbWF4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDIgPSBtYXgxKys7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgzID0gKyttYXgyO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4NCA9IDIgKiBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTVcIiwgck1heDIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCByTWF4MywgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTRcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTVcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4MysrKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoKyttYXg0KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygyICogbWF4KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gVUludDMyLk1pblZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4xID0gbWluIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4zID0gLS1taW4yO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluNCA9IC1taW47XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTVcIiwgck1pbjEsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgck1pbjIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NVwiLCByTWluMywgXCJUaHJvdWdoIGlkZW50aWZpZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgck1pbjQsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk1XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluMy0tKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTVcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLS1taW40KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtbWluKSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBbVGVzdF1cclxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RMb25nKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdW5jaGVja2VkXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IGxvbmcuTWF4VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDEgPSBtYXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXg0ID0gMiAqIG1heDtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgck1heDIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1heDMsIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMlwiLCByTWF4NCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4MysrKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKCsrbWF4NCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBsb25nLk1pblZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4xID0gbWluIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4zID0gLS1taW4yO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluNCA9IC1taW47XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgck1pbjEsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgck1pbjMsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC0tcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCByTWluNCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgdW5hcnkgLVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluIC0gMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluMy0tKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLS1taW40KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLW1pbiksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgdW5hcnkgLVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0VUxvbmcoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1bmNoZWNrZWRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gdWxvbmcuTWF4VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDEgPSBtYXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXg0ID0gMiAqIG1heDtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCByTWF4MSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgck1heDIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCByTWF4MywgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE0XCIsIHJNYXg0LCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXggKyAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIxODQ0Njc0NDA3MzcwOTU1MTYxNFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygyICogbWF4KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gdWxvbmcuTWluVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluMiA9IG1pbjEtLTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIHJNaW4xLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIHJNaW4zLCBcIlRocm91Z2ggaWRlbnRpZmllciAtLXByZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluMy0tKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC0tbWluNCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtDYXRlZ29yeShDb25zdGFudHMuTU9EVUxFX0NIRUNLRURfVU5DS0VDS0VEKV1cclxuICAgICAgICBbVGVzdEZpeHR1cmUoVGVzdE5hbWVGb3JtYXQgPSBcIlVuY2hlY2tlZEluc2lkZUNoZWNrZWQgLSBcIiArIENvbnN0YW50cy5CQVRDSF9OQU1FICsgXCIgezB9XCIpXVxyXG4gICAgICAgIHB1YmxpYyBjbGFzcyBVbmNoZWNrZWRJbnNpZGVDaGVja2VkVGVzdHNcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFtUZXN0XVxyXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdEludDMyKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IEludDMyLk1heFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDEgPSBtYXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDIgPSBtYXgxKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXg0ID0gMiAqIG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ4XCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMjE0NzQ4MzY0N1wiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDhcIiwgck1heDMsIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTJcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjIxNDc0ODM2NDdcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4MysrKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTJcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoMiAqIG1heCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBJbnQzMi5NaW5WYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4xID0gbWluIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4yID0gbWluMS0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluNCA9IC1taW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ3XCIsIHJNaW4xLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDhcIiwgck1pbjIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjIxNDc0ODM2NDdcIiwgck1pbjMsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC0tcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDhcIiwgck1pbjQsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMjE0NzQ4MzY0N1wiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4gLSAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluMy0tKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ3XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC0tbWluNCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtbWluKSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0VUludDMyKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IFVJbnQzMi5NYXhWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgxID0gbWF4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgyID0gbWF4MSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4NCA9IDIgKiBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NVwiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCByTWF4MywgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk0XCIsIHJNYXg0LCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTVcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4MysrKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKCsrbWF4NCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk0XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gVUludDMyLk1pblZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluMyA9IC0tbWluMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW40ID0gLW1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTVcIiwgck1pbjEsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk1XCIsIHJNaW4zLCBcIlRocm91Z2ggaWRlbnRpZmllciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgck1pbjQsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NVwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4gLSAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTVcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLS1taW40KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLW1pbiksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgdW5hcnkgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFtUZXN0XVxyXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdExvbmcoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5jaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gbG9uZy5NYXhWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgxID0gbWF4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgyID0gbWF4MSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4NCA9IDIgKiBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCByTWF4MSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgck1heDIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIHJNYXgzLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yXCIsIHJNYXg0LCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heDMrKyksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoKyttYXg0KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gbG9uZy5NaW5WYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4xID0gbWluIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4yID0gbWluMS0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluNCA9IC1taW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIHJNaW4xLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1pbjIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgck1pbjMsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC0tcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1pbjQsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4gLSAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluMy0tKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC0tbWluNCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtbWluKSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0VUxvbmcoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5jaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gdWxvbmcuTWF4VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4MSA9IG1heCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgzID0gKyttYXgyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDQgPSAyICogbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCByTWF4MSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIHJNYXgyLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNYXgzLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE0XCIsIHJNYXg0LCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heDMrKyksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTRcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoMiAqIG1heCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSB1bG9uZy5NaW5WYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4xID0gbWluIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4yID0gbWluMS0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgck1pbjIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIHJNaW4zLCBcIlRocm91Z2ggaWRlbnRpZmllciAtLXByZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4gLSAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC0tbWluNCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbQ2F0ZWdvcnkoQ29uc3RhbnRzLk1PRFVMRV9DSEVDS0VEX1VOQ0tFQ0tFRCldXHJcbiAgICAgICAgW1Rlc3RGaXh0dXJlKFRlc3ROYW1lRm9ybWF0ID0gXCJXaXRoTm9VbmNoZWNrZWRLZXl3b3JkIC0gXCIgKyBDb25zdGFudHMuQkFUQ0hfTkFNRSArIFwiIHswfVwiKV1cclxuICAgICAgICBwdWJsaWMgY2xhc3MgV2l0aE5vVW5jaGVja2VkS2V5d29yZFRlc3RzXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBbVGVzdF1cclxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RJbnQzMigpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYXggPSBJbnQzMi5NYXhWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcclxuICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgck1heDEgPSBtYXggKyAxO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJNYXgyID0gbWF4MSsrO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJNYXgzID0gKyttYXgyO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJNYXg0ID0gMiAqIG1heDtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ4XCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjIxNDc0ODM2NDdcIiwgck1heDIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ4XCIsIHJNYXgzLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk0XCIsIHJNYXg0LCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMjE0NzQ4MzY0N1wiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKCsrbWF4NCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygyICogbWF4KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtaW4gPSBJbnQzMi5NaW5WYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcclxuICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XHJcbiAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJNaW4yID0gbWluMS0tO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJNaW4zID0gLS1taW4yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJNaW40ID0gLW1pbjtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OVwiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OFwiLCByTWluMiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ5XCIsIHJNaW4zLCBcIlRocm91Z2ggaWRlbnRpZmllciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ4XCIsIHJNaW40LCBcIlRocm91Z2ggaWRlbnRpZmllciB1bmFyeSAtXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OVwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4gLSAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ5XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC0tbWluNCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMjE0NzQ4MzY0OFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtbWluKSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBbVGVzdF1cclxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RVSW50MzIoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF4ID0gVUludDMyLk1heFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcclxuICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByTWF4MSA9IG1heCArIDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgck1heDIgPSBtYXgxKys7XHJcbiAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XHJcbiAgICAgICAgICAgICAgICB2YXIgck1heDQgPSAyICogbWF4O1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTZcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NVwiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTZcIiwgck1heDMsIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjg1ODk5MzQ1OTBcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTZcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk1XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heDMrKyksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTZcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoKyttYXg0KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI4NTg5OTM0NTkwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1pbiA9IFVJbnQzMi5NaW5WYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcclxuICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XHJcbiAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJNaW4yID0gbWluMS0tO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJNaW4zID0gLS1taW4yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJNaW40ID0gLW1pbjtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMVwiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTFcIiwgck1pbjMsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC0tcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgck1pbjQsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0xXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMVwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLW1pbiksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgdW5hcnkgLVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0TG9uZygpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYXggPSBsb25nLk1heFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcclxuICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByTWF4MSA9IG1heCArIDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgck1heDIgPSBtYXgxKys7XHJcbiAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XHJcbiAgICAgICAgICAgICAgICB2YXIgck1heDQgPSAyICogbWF4O1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgck1heDIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCByTWF4MywgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTJcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1pbiA9IGxvbmcuTWluVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XHJcbiAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcclxuICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJNaW4xID0gbWluIC0gMTtcclxuICAgICAgICAgICAgICAgIHZhciByTWluMiA9IG1pbjEtLTtcclxuICAgICAgICAgICAgICAgIHZhciByTWluMyA9IC0tbWluMjtcclxuICAgICAgICAgICAgICAgIHZhciByTWluNCA9IC1taW47XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCByTWluMiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgck1pbjMsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC0tcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIHJNaW40LCBcIlRocm91Z2ggaWRlbnRpZmllciB1bmFyeSAtXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluMy0tKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC1taW4pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFtUZXN0XVxyXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdFVMb25nKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1heCA9IHVsb25nLk1heFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcclxuICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByTWF4MSA9IG1heCArIDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgck1heDIgPSBtYXgxKys7XHJcbiAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XHJcbiAgICAgICAgICAgICAgICB2YXIgck1heDQgPSAyICogbWF4O1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgck1heDIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNYXgzLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIxODQ0Njc0NDA3MzcwOTU1MTYxNFwiLCByTWF4NCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXggKyAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heDMrKyksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoKyttYXg0KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIxODQ0Njc0NDA3MzcwOTU1MTYxNFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygyICogbWF4KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtaW4gPSB1bG9uZy5NaW5WYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcclxuICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XHJcbiAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJNaW4yID0gbWluMS0tO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJNaW4zID0gLS1taW4yO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIHJNaW4xLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgck1pbjIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCByTWluMywgXCJUaHJvdWdoIGlkZW50aWZpZXIgLS1wcmVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0KfQo=
