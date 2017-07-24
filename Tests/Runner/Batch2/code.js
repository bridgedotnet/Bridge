/**
 * Bridge Test library - special tests with custom config options like useTypedArrays
 * @version 16.0.0-beta5
 * @author Object.NET, Inc.
 * @copyright Copyright 2008-2017 Object.NET, Inc.
 * @compiler Bridge.NET 16.0.0-beta5
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
                    var temp = {  };
                    var temp1 = temp;
                    var temp2 = {  };
                    var l = System.Int64(5);
                    var ol = System.Int64(5);
                    var oi = Bridge.box(5, System.Int32);
                    var varNull = null;
                    var varUndefined = temp[System.Array.index("this-prop-undefined", temp)];

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
                        var r = Bridge.Int.check(2 * max, System.Int32);
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
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.check(2 * max, System.Int32), System.Int32));
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
                        var r = Bridge.Int.check(2 * max, System.UInt32);
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
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.check(2 * max, System.UInt32), System.UInt32));
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
                        var r = Bridge.Int.check(2 * max, System.Int32);
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
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.check(2 * max, System.Int32), System.Int32));
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
                        var r = Bridge.Int.check(2 * max, System.UInt32);
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
                        Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.check(2 * max, System.UInt32), System.UInt32));
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
                    var rMax4 = (2 * max) | 0;
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483648", Bridge.box(rMax1, System.Int32), "Through identifier +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("2147483647", Bridge.box(rMax2, System.Int32), "Through identifier post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483648", Bridge.box(rMax3, System.Int32), "Through identifier ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2", Bridge.box(rMax4, System.Int32), "Through identifier *");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max + 1) | 0), System.Int32)), "Through parameter +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, (max3 = (max3 + 1) | 0)), System.Int32)), "Through parameter post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = (max4 + 1) | 0)), System.Int32)), "Through parameter ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((2 * max) | 0), System.Int32)), "Through parameter *");

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
                    var rMax4 = (2 * max) >>> 0;
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.box(rMax1, System.UInt32), "Through identifier +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967295", Bridge.box(rMax2, System.UInt32), "Through identifier post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.box(rMax3, System.UInt32), "Through identifier ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967294", Bridge.box(rMax4, System.UInt32), "Through identifier *");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max + 1) >>> 0), System.UInt32)), "Through parameter +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, (max3 = (max3 + 1) >>> 0)), System.UInt32)), "Through parameter post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = (max4 + 1) >>> 0)), System.UInt32)), "Through parameter ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967294", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((2 * max) >>> 0), System.UInt32)), "Through parameter *");

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
                    var rMax4 = (2 * max) | 0;
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483648", Bridge.box(rMax1, System.Int32), "Through identifier +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("2147483647", Bridge.box(rMax2, System.Int32), "Through identifier post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483648", Bridge.box(rMax3, System.Int32), "Through identifier ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2", Bridge.box(rMax4, System.Int32), "Through identifier *");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max + 1) | 0), System.Int32)), "Through parameter +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, (max3 = (max3 + 1) | 0)), System.Int32)), "Through parameter post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = (max4 + 1) | 0)), System.Int32)), "Through parameter ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("-2", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((2 * max) | 0), System.Int32)), "Through parameter *");

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
                    var rMax4 = (2 * max) >>> 0;
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.box(rMax1, System.UInt32), "Through identifier +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967295", Bridge.box(rMax2, System.UInt32), "Through identifier post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.box(rMax3, System.UInt32), "Through identifier ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967294", Bridge.box(rMax4, System.UInt32), "Through identifier *");

                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max + 1) >>> 0), System.UInt32)), "Through parameter +");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, (max3 = (max3 + 1) >>> 0)), System.UInt32)), "Through parameter post++");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = (max4 + 1) >>> 0)), System.UInt32)), "Through parameter ++pre");
                    Bridge.ClientTest.Batch2.CheckedUncheckedTests.AssertEqual("4294967294", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((2 * max) >>> 0), System.UInt32)), "Through parameter *");

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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJjb2RlLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJCcmlkZ2VJc3N1ZXMvTjEzODUuY3MiLCJCcmlkZ2VJc3N1ZXMvTjE0OTkuY3MiLCJCcmlkZ2VJc3N1ZXMvTjExMjIuY3MiLCJCcmlkZ2VJc3N1ZXMvTjEyMDQuY3MiLCJCcmlkZ2VJc3N1ZXMvTjc3Mi5jcyIsIkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5jcyJdLAogICJuYW1lcyI6IFsiIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7b0JBV1lBLFlBQWVBO29CQUNmQSw4QkFBWUE7Ozs7Ozs7Ozs7Z0JDRFpBO2dCQUNBQSxVQUFpQkE7Z0JBQ2pCQTtnQkFDQUE7Z0JBQ0FBLFNBQVlBOztnQkFFWkEsMkNBQXlCQSwyQ0FBT0E7Z0JBQ2hDQSw0Q0FBMEJBLDZDQUFNQTtnQkFDaENBLDRDQUEwQkE7Z0JBQzFCQSxnREFBOEJBLDZDQUFNQTtnQkFDcENBLGdEQUE4QkE7O2dCQUU5QkE7Z0JBQ0FBO2dCQUNBQSxTQUFZQTs7Z0JBRVpBLDRDQUEwQkEsZ0NBQU1BO2dCQUNoQ0EsNENBQTBCQSw2Q0FBTUE7Z0JBQ2hDQSw0Q0FBMEJBO2dCQUUxQkEsNENBQTBCQTtnQkFFMUJBLGdEQUE4QkEsZ0NBQU1BO2dCQUNwQ0EsZ0RBQThCQSxnREFBTUE7Z0JBQ3BDQSxnREFBOEJBO2dCQUM5QkEsZ0RBQThCQTs7Z0JBRTlCQTtnQkFDQUE7Z0JBQ0FBLFNBQVVBOztnQkFFVkEsMkNBQXlCQSxtQ0FBTUE7Z0JBQy9CQSwyQ0FBeUJBLGlJQUFNQTtnQkFDL0JBLDJDQUF5QkE7Z0JBQ3pCQSwyQ0FBeUJBLG1DQUFNQTtnQkFDL0JBLGdEQUE4QkEsaUlBQU1BO2dCQUNwQ0EsMkNBQXlCQTtnQkFDekJBLDJDQUF5QkEscUNBQVFBOzs7Ozs7Ozs7b0JDbENqQ0EsUUFBUUE7O29CQUVSQSxTQUFTQSxBQUFLQSxXQUFXQTtvQkFDekJBLGtDQUFnQkEsMEJBQXlCQTs7b0JBRXpDQSxTQUFT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Q1hBLFdBQVdBOztvQkFFWEEsWUFBWUE7b0JBQ1pBLFlBQVlBO29CQUNaQSxZQUFZQSxDQUFFQTtvQkFDZEEsWUFBWUEscUJBQUlBO29CQUNoQkEsZ0VBQWdFQTtvQkFDaEVBLG1GQUFtRkE7b0JBQ25GQSxnRUFBZ0VBO29CQUNoRUEsbUZBQW1GQTs7b0JBRW5GQSxnRUFBZ0VBLHNEQUFzREE7b0JBQ3RIQSxtRkFBbUZBLHNEQUFzREE7b0JBQ3pJQSxnRUFBZ0VBLHNEQUFzREEsQ0FBRUE7b0JBQ3hIQSxtRkFBbUZBLHNEQUFzREEscUJBQUlBOztvQkFFN0lBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSxZQUFZQTtvQkFDWkEsWUFBWUE7b0JBQ1pBLFlBQVlBLENBQUVBO29CQUNkQSxtRkFBbUZBO29CQUNuRkEsZ0VBQWdFQTtvQkFDaEVBLG1GQUFtRkE7O29CQUVuRkEsbUZBQW1GQSxzREFBc0RBO29CQUN6SUEsZ0VBQWdFQSxzREFBc0RBO29CQUN0SEEsbUZBQW1GQSxzREFBc0RBLENBQUVBIiwKICAic291cmNlc0NvbnRlbnQiOiBbInVzaW5nIEJyaWRnZS5UZXN0Lk5Vbml0O1xuXG5uYW1lc3BhY2UgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkJyaWRnZUlzc3Vlc1xue1xuICAgIFtDYXRlZ29yeShDb25zdGFudHMuTU9EVUxFX0lTU1VFUyldXG4gICAgW1Rlc3RGaXh0dXJlKFRlc3ROYW1lRm9ybWF0ID0gXCIjMTM4NSAtIFwiICsgQ29uc3RhbnRzLkJBVENIX05BTUUgKyBcIiB7MH1cIildXG4gICAgcHVibGljIGNsYXNzIEJyaWRnZTEzODVcbiAgICB7XG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdElzVHlwZWRBcnJheUZvckJ5dGUoKVxuICAgICAgICB7XG4gICAgICAgICAgICBvYmplY3QgdmFsdWUgPSBuZXcgYnl0ZVszXTtcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKHZhbHVlIGlzIGJ5dGVbXSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwidXNpbmcgQnJpZGdlLlRlc3QuTlVuaXQ7XG5cbm5hbWVzcGFjZSBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQnJpZGdlSXNzdWVzXG57XG4gICAgW0NhdGVnb3J5KENvbnN0YW50cy5NT0RVTEVfSVNTVUVTKV1cbiAgICBbVGVzdEZpeHR1cmUoVGVzdE5hbWVGb3JtYXQgPSBcIiMxNDk5IC0gXCIgKyBDb25zdGFudHMuQkFUQ0hfTkFNRSArIFwiIHswfVwiKV1cbiAgICBwdWJsaWMgY2xhc3MgQnJpZGdlMTQ5OVxuICAgIHtcbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIFRlc3RPYmplY3RTdHJpbmdDb2FsZXNjZVdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgb2JqZWN0IGRlZiA9IDE7XG4gICAgICAgICAgICBCcmlkZ2UxNDk5IGFwcCA9IG51bGw7XG4gICAgICAgICAgICBvYmplY3QgbzEgPSBcIlwiO1xuICAgICAgICAgICAgb2JqZWN0IG8yID0gXCJ0ZXN0XCI7XG4gICAgICAgICAgICBvYmplY3QgbzMgPSBudWxsO1xuXG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoMSwgYXBwID8/IGRlZik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoXCJcIiwgbzEgPz8gbzIpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKFwiXCIsIG8xID8/IFwidGVzdFwiKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbChcInRlc3RcIiwgbzMgPz8gbzIpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKFwidGVzdFwiLCBvMyA/PyBcInRlc3RcIik7XG5cbiAgICAgICAgICAgIHN0cmluZyBzMSA9IFwiXCI7XG4gICAgICAgICAgICBzdHJpbmcgczIgPSBcInRlc3RcIjtcbiAgICAgICAgICAgIHN0cmluZyBzMyA9IG51bGw7XG5cbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbChcIlwiLCBzMSA/PyBzMik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoXCJcIiwgczEgPz8gbzIpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKFwiXCIsIHMxID8/IFwidGVzdFwiKTtcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDE2MlxuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKFwiXCIsIFwiXCIgPz8gXCJ0ZXN0XCIpO1xuI3ByYWdtYSB3YXJuaW5nIHJlc3RvcmUgMTYyXG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoXCJ0ZXN0XCIsIHMzID8/IHMyKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbChcInRlc3RcIiwgczMgPz8gbzIpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKFwidGVzdFwiLCBzMyA/PyBcInRlc3RcIik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoXCJ0ZXN0XCIsIG51bGwgPz8gXCJ0ZXN0XCIpO1xuXG4gICAgICAgICAgICBpbnQ/IGkxID0gMDtcbiAgICAgICAgICAgIGludD8gaTIgPSAxO1xuICAgICAgICAgICAgaW50PyBpMyA9IG51bGw7XG5cbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbCgwLCBpMSA/PyBpMik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoMCwgaTEgPz8gbzIpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKDAsIGkxID8/IDEpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKDEsIGkzID8/IGkyKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbChcInRlc3RcIiwgaTMgPz8gbzIpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKDEsIGkzID8/IDEpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKDEsIG51bGwgPz8gaTIpO1xuICAgICAgICB9XG4gICAgfVxufSIsInVzaW5nIEJyaWRnZS5UZXN0Lk5Vbml0O1xuXG51c2luZyBTeXN0ZW07XG5cbm5hbWVzcGFjZSBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQnJpZGdlSXNzdWVzXG57XG4gICAgLy8gQnJpZGdlWyMxMTIyXVxuICAgIFtDYXRlZ29yeShDb25zdGFudHMuTU9EVUxFX0lTU1VFUyldXG4gICAgW1Rlc3RGaXh0dXJlKFRlc3ROYW1lRm9ybWF0ID0gXCIjMTEyMiAtIFwiICsgQ29uc3RhbnRzLkJBVENIX05BTUUgKyBcIiB7MH1cIildXG4gICAgcHVibGljIGNsYXNzIE4xMTIyXG4gICAge1xuICAgICAgICBbVGVzdChFeHBlY3RlZENvdW50ID0gNCldXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0Q2xpcHBpbmdJbkphdmFTY3JpcHRPdmVyZmxvd01vZGUoKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgeCA9IGRvdWJsZS5NYXhWYWx1ZTtcblxuICAgICAgICAgICAgdmFyIHkxID0gKGludClNYXRoLkZsb29yKHggLyAwLjIpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKERvdWJsZS5Qb3NpdGl2ZUluZmluaXR5LCB5MSwgXCJpbnRcIik7XG5cbiAgICAgICAgICAgIHZhciB5MiA9ICh1aW50KU1hdGguRmxvb3IoeCAvIDAuMik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoRG91YmxlLlBvc2l0aXZlSW5maW5pdHksIHkyLCBcInVpbnRcIik7XG5cbiAgICAgICAgICAgIHZhciB6MSA9IChsb25nKU1hdGguRmxvb3IoeCAvIDAuMik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoRG91YmxlLlBvc2l0aXZlSW5maW5pdHksIHoxLCBcImxvbmdcIik7XG5cbiAgICAgICAgICAgIHZhciB6MiA9ICh1bG9uZylNYXRoLkZsb29yKHggLyAwLjIpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKERvdWJsZS5Qb3NpdGl2ZUluZmluaXR5LCB6MiwgXCJ1bG9uZ1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0KEV4cGVjdGVkQ291bnQgPSA0KV1cbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RJbnRlZ2VyRGl2aXNpb25JbkphdmFTY3JpcHRPdmVyZmxvd01vZGUoKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgeCA9IDEuMTtcblxuICAgICAgICAgICAgaW50IHkxID0gKGludCkoMSAvIHgpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwiMC45MDkwOTA5MDkwOTA5MDkxXCIsIHkxLlRvU3RyaW5nKCksIFwiaW50XCIpO1xuXG4gICAgICAgICAgICB1aW50IHkyID0gKHVpbnQpKDEgLyB4KTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcIjAuOTA5MDkwOTA5MDkwOTA5MVwiLCB5Mi5Ub1N0cmluZygpLCBcInVpbnRcIik7XG5cbiAgICAgICAgICAgIGxvbmcgejEgPSAobG9uZykoMSAvIHgpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwiMC45MDkwOTA5MDkwOTA5MDkxXCIsIHoxLlRvU3RyaW5nKCksIFwibG9uZ1wiKTtcblxuICAgICAgICAgICAgdWxvbmcgejIgPSAodWxvbmcpKDEgLyB4KTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcIjAuOTA5MDkwOTA5MDkwOTA5MVwiLCB6Mi5Ub1N0cmluZygpLCBcInVsb25nXCIpO1xuICAgICAgICB9XG4gICAgfVxufSIsInVzaW5nIEJyaWRnZS5UZXN0Lk5Vbml0O1xuXG5uYW1lc3BhY2UgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkJyaWRnZUlzc3Vlc1xue1xuICAgIC8vIEJyaWRnZVsjMTIwNF1cbiAgICBbQ2F0ZWdvcnkoQ29uc3RhbnRzLk1PRFVMRV9JU1NVRVMpXVxuICAgIFtUZXN0Rml4dHVyZShUZXN0TmFtZUZvcm1hdCA9IFwiIzEyMDQgLSBcIiArIENvbnN0YW50cy5CQVRDSF9OQU1FICsgXCIgezB9XCIpXVxuICAgIHB1YmxpYyBjbGFzcyBOMTIwNFxuICAgIHtcbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0U3RyaWN0TnVsbENoZWNrc09wdGlvbkZvck51bGxzKClcbiAgICAgICAge1xuICAgICAgICAgICAgb2JqZWN0IHRlbXAgPSBuZXcgb2JqZWN0KCk7XG4gICAgICAgICAgICBvYmplY3QgdGVtcDEgPSB0ZW1wO1xuICAgICAgICAgICAgb2JqZWN0IHRlbXAyID0gbmV3IG9iamVjdCgpO1xuICAgICAgICAgICAgbG9uZyBsID0gNUw7XG4gICAgICAgICAgICBvYmplY3Qgb2wgPSA1TDtcbiAgICAgICAgICAgIG9iamVjdCBvaSA9IDU7XG4gICAgICAgICAgICBvYmplY3QgdmFyTnVsbCA9IG51bGw7XG4gICAgICAgICAgICBvYmplY3QgdmFyVW5kZWZpbmVkID0gdGVtcFtcInRoaXMtcHJvcC11bmRlZmluZWRcIl07XG5cbiAgICAgICAgICAgIEFzc2VydC5GYWxzZSh2YXJOdWxsID09IHZhclVuZGVmaW5lZCwgXCJ2YXJOdWxsID09IHZhclVuZGVmaW5lZFwiKTtcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKHZhck51bGwgPT0gbnVsbCwgXCJ2YXJOdWxsID09IG51bGxcIik7XG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UodmFyVW5kZWZpbmVkID09IG51bGwsIFwidmFyVW5kZWZpbmVkID09IG51bGxcIik7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShTY3JpcHQuVW5kZWZpbmVkID09IHZhclVuZGVmaW5lZCwgXCJTY3JpcHQuVW5kZWZpbmVkID09IHZhclVuZGVmaW5lZFwiKTtcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKHRlbXAgPT0gdGVtcDEsIFwidGVtcCA9PSB0ZW1wMVwiKTtcbiAgICAgICAgICAgIEFzc2VydC5GYWxzZSh0ZW1wID09IHRlbXAyLCBcInRlbXAgPT0gdGVtcDJcIik7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShsID09IDUsIFwibCA9PSA1XCIpO1xuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKG9sID09IG9pLCBcIm9sID09IG9pXCIpO1xuXG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UodmFyVW5kZWZpbmVkID09IHZhck51bGwsIFwidmFyVW5kZWZpbmVkID09IHZhck51bGxcIik7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShudWxsID09IHZhck51bGwsIFwibnVsbCA9PSB2YXJOdWxsXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKG51bGwgPT0gdmFyVW5kZWZpbmVkLCBcIm51bGwgPT0gdmFyVW5kZWZpbmVkXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LlRydWUodmFyVW5kZWZpbmVkID09IFNjcmlwdC5VbmRlZmluZWQsIFwidmFyVW5kZWZpbmVkID09IFNjcmlwdC5VbmRlZmluZWRcIik7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZSh0ZW1wMSA9PSB0ZW1wLCBcInRlbXAxID09IHRlbXBcIik7XG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UodGVtcDIgPT0gdGVtcCwgXCJ0ZW1wMiA9PSB0ZW1wXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LlRydWUoNSA9PSBsLCBcIjUgPT0gbFwiKTtcbiAgICAgICAgICAgIEFzc2VydC5GYWxzZShvaSA9PSBvbCwgXCJvaSA9PSBvbFwiKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJ1c2luZyBCcmlkZ2UuVGVzdC5OVW5pdDtcbnVzaW5nIFN5c3RlbTtcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucztcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xudXNpbmcgU3lzdGVtLkxpbnE7XG5cbm5hbWVzcGFjZSBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQnJpZGdlSXNzdWVzXG57XG4gICAgLy8gQnJpZGdlWyM3NzJdXG4gICAgLy8gXCJ1c2VUeXBlZEFycmF5XCIgYnJpZGdlLmpzb24gb3B0aW9uIGlzIHRydWUgaW4gdGhpcyBwcm9qZWN0XG4gICAgW0NhdGVnb3J5KENvbnN0YW50cy5NT0RVTEVfSVNTVUVTKV1cbiAgICBbVGVzdEZpeHR1cmUoVGVzdE5hbWVGb3JtYXQgPSBcIiM3NzIgLSBcIiArIENvbnN0YW50cy5CQVRDSF9OQU1FICsgXCIgezB9XCIpXVxuICAgIHB1YmxpYyBjbGFzcyBONzcyXG4gICAge1xuICAgICAgICBwcml2YXRlIGNsYXNzIENcbiAgICAgICAge1xuICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IGludCBpO1xuXG4gICAgICAgICAgICBwdWJsaWMgQyhpbnQgaSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmkgPSBpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgYm9vbCBFcXVhbHMob2JqZWN0IG8pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG8gaXMgQyAmJiBpID09ICgoQylvKS5pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgaW50IEdldEhhc2hDb2RlKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBUeXBlUHJvcGVydGllc0FyZUNvcnJlY3QoKVxuICAgICAgICB7XG4gICAgICAgICAgICBvYmplY3QgYXJyID0gbmV3W10geyAxLCAyLCAzIH07XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShhcnIgaXMgQXJyYXksIFwiaXMgQXJyYXkgc2hvdWxkIGJlIHRydWVcIik7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShhcnIgaXMgaW50W10sIFwiaXMgaW50W10gc2hvdWxkIGJlIHRydWVcIik7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShhcnIgaXMgSUNvbGxlY3Rpb24sIFwiaXMgSUNvbGxlY3Rpb24gc2hvdWxkIGJlIHRydWVcIik7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShhcnIgaXMgSUVudW1lcmFibGUsIFwiaXMgSUVudW1lcmFibGUgc2hvdWxkIGJlIHRydWVcIik7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShhcnIgaXMgSUNsb25lYWJsZSwgXCJpcyBJQ2xvbmVhYmxlIHNob3VsZCBiZSB0cnVlXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LlRydWUoYXJyIGlzIElDb2xsZWN0aW9uPGludD4sIFwiaXMgSUNvbGxlY3Rpb248aW50PiBzaG91bGQgYmUgdHJ1ZVwiKTtcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKGFyciBpcyBJRW51bWVyYWJsZTxpbnQ+LCBcImlzIElFbnVtZXJhYmxlPGludD4gc2hvdWxkIGJlIHRydWVcIik7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShhcnIgaXMgSUxpc3Q8aW50PiwgXCJpcyBJTGlzdDxpbnQ+IHNob3VsZCBiZSB0cnVlXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIExlbmd0aFdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDAsIG5ldyBpbnRbMF0uTGVuZ3RoKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgxLCBuZXdbXSB7IFwieFwiIH0uTGVuZ3RoKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgyLCBuZXdbXSB7IFwieFwiLCBcInlcIiB9Lkxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgUmFua0lzT25lKClcbiAgICAgICAge1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDEsIG5ldyBpbnRbMF0uUmFuayk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgR2V0TGVuZ3RoV29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMCwgbmV3IGludFswXS5HZXRMZW5ndGgoMCkpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDEsIG5ld1tdIHsgXCJ4XCIgfS5HZXRMZW5ndGgoMCkpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDIsIG5ld1tdIHsgXCJ4XCIsIFwieVwiIH0uR2V0TGVuZ3RoKDApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBHZXRMb3dlckJvdW5kKClcbiAgICAgICAge1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDAsIG5ldyBpbnRbMF0uR2V0TG93ZXJCb3VuZCgwKSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMCwgbmV3W10geyBcInhcIiB9LkdldExvd2VyQm91bmQoMCkpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDAsIG5ld1tdIHsgXCJ4XCIsIFwieVwiIH0uR2V0TG93ZXJCb3VuZCgwKSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgR2V0VXBwZXJCb3VuZFdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKC0xLCBuZXcgaW50WzBdLkdldFVwcGVyQm91bmQoMCkpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDAsIG5ld1tdIHsgXCJ4XCIgfS5HZXRVcHBlckJvdW5kKDApKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgxLCBuZXdbXSB7IFwieFwiLCBcInlcIiB9LkdldFVwcGVyQm91bmQoMCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIEdldHRpbmdWYWx1ZUJ5SW5kZXhXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcInhcIiwgbmV3W10geyBcInhcIiwgXCJ5XCIgfVswXSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJ5XCIsIG5ld1tdIHsgXCJ4XCIsIFwieVwiIH1bMV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIEdldFZhbHVlV29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJ4XCIsIG5ld1tdIHsgXCJ4XCIsIFwieVwiIH0uR2V0VmFsdWUoMCkpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwieVwiLCBuZXdbXSB7IFwieFwiLCBcInlcIiB9LkdldFZhbHVlKDEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBTZXR0aW5nVmFsdWVCeUluZGV4V29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3IHN0cmluZ1syXTtcbiAgICAgICAgICAgIGFyclswXSA9IFwieFwiO1xuICAgICAgICAgICAgYXJyWzFdID0gXCJ5XCI7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJ4XCIsIGFyclswXSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJ5XCIsIGFyclsxXSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgU2V0VmFsdWVXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXcgc3RyaW5nWzJdO1xuICAgICAgICAgICAgYXJyLlNldFZhbHVlKFwieFwiLCAwKTtcbiAgICAgICAgICAgIGFyci5TZXRWYWx1ZShcInlcIiwgMSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJ4XCIsIGFyclswXSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJ5XCIsIGFyclsxXSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgRm9yZWFjaFdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgc3RyaW5nIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgICAgICBmb3JlYWNoICh2YXIgcyBpbiBuZXdbXSB7IFwieFwiLCBcInlcIiB9KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwieHlcIiwgcmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBDbG9uZVdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgXCJ4XCIsIFwieVwiIH07XG4gICAgICAgICAgICB2YXIgYXJyMiA9IGFyci5DbG9uZSgpO1xuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKGFyciA9PSBhcnIyKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChhcnIyLCBhcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIENvbmNhdFdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgXCJhXCIsIFwiYlwiIH07XG4gICAgICAgICAgICBBc3NlcnQuQXJlRGVlcEVxdWFsKG5ld1tdIHsgXCJhXCIsIFwiYlwiLCBcImNcIiB9LCBhcnIuQ29uY2F0KFwiY1wiKSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRGVlcEVxdWFsKG5ld1tdIHsgXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJkXCIgfSwgYXJyLkNvbmNhdChcImNcIiwgXCJkXCIpKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVEZWVwRXF1YWwobmV3W10geyBcImFcIiwgXCJiXCIgfSwgYXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBDb250YWluc1dvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgXCJ4XCIsIFwieVwiIH07XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShTeXN0ZW0uQXJyYXlFeHRlbnNpb25zLkNvbnRhaW5zPHN0cmluZz4oYXJyLFwieFwiKSk7XG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UoU3lzdGVtLkFycmF5RXh0ZW5zaW9ucy5Db250YWluczxzdHJpbmc+KGFycixcInpcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIENvbnRhaW5zVXNlc0VxdWFsc01ldGhvZCgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIENbXSBhcnIgPSBuZXdbXSB7IG5ldyBDKDEpLCBuZXcgQygyKSwgbmV3IEMoMykgfTtcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKFN5c3RlbS5BcnJheUV4dGVuc2lvbnMuQ29udGFpbnM8Z2xvYmFsOjpCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQnJpZGdlSXNzdWVzLk43NzIuQz4oYXJyLG5ldyBDKDIpKSk7XG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UoU3lzdGVtLkFycmF5RXh0ZW5zaW9ucy5Db250YWluczxnbG9iYWw6OkJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5CcmlkZ2VJc3N1ZXMuTjc3Mi5DPihhcnIsbmV3IEMoNCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBBbGxXaXRoQXJyYXlJdGVtRmlsdGVyQ2FsbGJhY2tXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKFN5c3RlbS5MaW5xLkVudW1lcmFibGUuQWxsPGludD4obmV3W10geyAxLCAyLCAzIH0sKGdsb2JhbDo6U3lzdGVtLkZ1bmM8aW50LCBib29sPikoeCA9PiB4ID4gMCkpKTtcbiAgICAgICAgICAgIEFzc2VydC5GYWxzZShTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLkFsbDxpbnQ+KG5ld1tdIHsgMSwgMiwgMyB9LChnbG9iYWw6OlN5c3RlbS5GdW5jPGludCwgYm9vbD4pKHggPT4geCA+IDEpKSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgU2xpY2VXaXRob3V0RW5kV29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRGVlcEVxdWFsKG5ld1tdIHsgXCJjXCIsIFwiZFwiIH0sIG5ld1tdIHsgXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJkXCIgfS5TbGljZSgyKSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRGVlcEVxdWFsKG5ld1tdIHsgXCJiXCIsIFwiY1wiIH0sIG5ld1tdIHsgXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJkXCIgfS5TbGljZSgxLCAzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgRm9yZWFjaFdpdGhBcnJheUl0ZW1DYWxsYmFja1dvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgc3RyaW5nIHJlc3VsdCA9IFwiXCI7XG5TeXN0ZW0uQXJyYXlFeHRlbnNpb25zLkZvckVhY2g8c3RyaW5nPiggICAgICAgICAgICBuZXdbXSB7IFwiYVwiLCBcImJcIiwgXCJjXCIgfSwoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uPHN0cmluZz4pKHMgPT4gcmVzdWx0ICs9IHMpKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcImFiY1wiLCByZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIEluZGV4T2ZXaXRob3V0U3RhcnRJbmRleFdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDEsIG5ld1tdIHsgXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJiXCIgfS5JbmRleE9mKFwiYlwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgSW5kZXhPZldpdGhvdXRTdGFydEluZGV4VXNlc0VxdWFsc01ldGhvZCgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IG5ldyBDKDEpLCBuZXcgQygyKSwgbmV3IEMoMykgfTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgxLCBBcnJheS5JbmRleE9mPGdsb2JhbDo6QnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkJyaWRnZUlzc3Vlcy5ONzcyLkM+KGFyciwgbmV3IEMoMikpKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgtMSwgQXJyYXkuSW5kZXhPZjxnbG9iYWw6OkJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5CcmlkZ2VJc3N1ZXMuTjc3Mi5DPihhcnIsIG5ldyBDKDQpKSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgSW5kZXhPZldpdGhTdGFydEluZGV4V29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMywgbmV3W10geyBcImFcIiwgXCJiXCIsIFwiY1wiLCBcImJcIiB9LkluZGV4T2YoXCJiXCIsIDIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBKb2luV2l0aG91dERlbGltaXRlcldvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwiYSxiLGMsYlwiLCBuZXdbXSB7IFwiYVwiLCBcImJcIiwgXCJjXCIsIFwiYlwiIH0uSm9pbihcIixcIikpO1xuXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJhfGJ8Y3xiXCIsIG5ld1tdIHsgXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJiXCIgfS5Kb2luKFwifFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgUmV2ZXJzZVdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgMSwgMywgNCwgMSwgMywgMiB9O1xuICAgICAgICAgICAgYXJyLlJldmVyc2UoKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChuZXdbXSB7IDIsIDMsIDEsIDQsIDMsIDEgfSwgYXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBBbnlXaXRoQXJyYXlJdGVtRmlsdGVyQ2FsbGJhY2tXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKFN5c3RlbS5MaW5xLkVudW1lcmFibGUuQW55PGludD4obmV3W10geyAxLCAyLCAzLCA0IH0sKGdsb2JhbDo6U3lzdGVtLkZ1bmM8aW50LCBib29sPikoaSA9PiBpID4gMSkpKTtcbiAgICAgICAgICAgIEFzc2VydC5GYWxzZShTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLkFueTxpbnQ+KG5ld1tdIHsgMSwgMiwgMywgNCB9LChnbG9iYWw6OlN5c3RlbS5GdW5jPGludCwgYm9vbD4pKGkgPT4gaSA+IDUpKSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgQmluYXJ5U2VhcmNoMVdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgMSwgMiwgMywgMywgNCwgNSB9O1xuXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMiwgQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyLCAzKSk7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShBcnJheS5CaW5hcnlTZWFyY2g8aW50PihhcnIsIDYpIDwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgQmluYXJ5U2VhcmNoMldvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgMSwgMiwgMywgMywgNCwgNSB9O1xuXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMywgQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyLCAzLCAyLCAzKSk7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShBcnJheS5CaW5hcnlTZWFyY2g8aW50PihhcnIsIDIsIDIsIDQpIDwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIGNsYXNzIFRlc3RSZXZlcnNlQ29tcGFyZXIgOiBJQ29tcGFyZXI8aW50PlxuICAgICAgICB7XG4gICAgICAgICAgICBwdWJsaWMgaW50IENvbXBhcmUoaW50IHgsIGludCB5KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB4ID09IHkgPyAwIDogKHggPiB5ID8gLTEgOiAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBCaW5hcnlTZWFyY2gzV29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyAxLCAyLCAzLCAzLCA0LCA1IH07XG5cbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgyLCBBcnJheS5CaW5hcnlTZWFyY2g8aW50PihhcnIsIDMsIG5ldyBUZXN0UmV2ZXJzZUNvbXBhcmVyKCkpKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgtMSwgQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyLCA2LCBuZXcgVGVzdFJldmVyc2VDb21wYXJlcigpKSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgQmluYXJ5U2VhcmNoNFdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgMSwgMiwgMywgMywgNCwgNSB9O1xuXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMywgQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyLCAzLCAyLCAzLCBuZXcgVGVzdFJldmVyc2VDb21wYXJlcigpKSk7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShBcnJheS5CaW5hcnlTZWFyY2g8aW50PihhcnIsIDMsIDIsIDQsIG5ldyBUZXN0UmV2ZXJzZUNvbXBhcmVyKCkpIDwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgQmluYXJ5U2VhcmNoRXhjZXB0aW9uc1dvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgaW50W10gYXJyMSA9IG51bGw7XG4gICAgICAgICAgICB2YXIgYXJyMiA9IG5ld1tdIHsgMSwgMiwgMywgMywgNCwgNSB9O1xuXG4gICAgICAgICAgICBBc3NlcnQuVGhyb3dzKChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyMSwgMSk7IH0pKTtcbiAgICAgICAgICAgIEFzc2VydC5UaHJvd3MoKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBBcnJheS5CaW5hcnlTZWFyY2g8aW50PihhcnIyLCAtMSwgMSwgMSk7IH0pKTtcbiAgICAgICAgICAgIEFzc2VydC5UaHJvd3MoKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBBcnJheS5CaW5hcnlTZWFyY2g8aW50PihhcnIyLCAxLCA2LCAxKTsgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIFNvcnRXaXRoRGVmYXVsdENvbXBhcmVXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IDEsIDYsIDYsIDQsIDIgfTtcbiAgICAgICAgICAgIGFyci5Kc1NvcnQoKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChuZXdbXSB7IDEsIDIsIDQsIDYsIDYgfSwgYXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBTb3J0MVdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgMSwgNiwgNiwgNCwgMiB9O1xuICAgICAgICAgICAgQXJyYXkuU29ydDxpbnQ+KGFycik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwobmV3W10geyAxLCAyLCA0LCA2LCA2IH0sIGFycik7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgU29ydDJXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IDEsIDYsIDYsIDQsIDIgfTtcbiAgICAgICAgICAgIEFycmF5LlNvcnQ8aW50PihhcnIsIDIsIDMpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKG5ld1tdIHsgMSwgNiwgMiwgNCwgNiB9LCBhcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIFNvcnQzV29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyAxLCAyLCA2LCAzLCA2LCA3IH07XG4gICAgICAgICAgICBBcnJheS5Tb3J0PGludD4oYXJyLCAyLCAzLCBuZXcgVGVzdFJldmVyc2VDb21wYXJlcigpKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChuZXdbXSB7IDEsIDIsIDYsIDYsIDMsIDcgfSwgYXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBTb3J0NFdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgMSwgNiwgNiwgNCwgMiB9O1xuICAgICAgICAgICAgQXJyYXkuU29ydDxpbnQ+KGFyciwgbmV3IFRlc3RSZXZlcnNlQ29tcGFyZXIoKSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwobmV3W10geyA2LCA2LCA0LCAyLCAxIH0sIGFycik7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgU29ydEV4Y2VwdGlvbnNXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGludFtdIGFycjEgPSBudWxsO1xuXG4gICAgICAgICAgICBBc3NlcnQuVGhyb3dzKChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQXJyYXkuU29ydDxpbnQ+KGFycjEpOyB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgRm9yZWFjaFdoZW5DYXN0VG9JTGlzdFdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgSUxpc3Q8c3RyaW5nPiBsaXN0ID0gbmV3W10geyBcInhcIiwgXCJ5XCIgfTtcbiAgICAgICAgICAgIHN0cmluZyByZXN1bHQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yZWFjaCAodmFyIHMgaW4gbGlzdClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcInh5XCIsIHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgSUNvbGxlY3Rpb25Db3VudFdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgSUxpc3Q8c3RyaW5nPiBsID0gbmV3W10geyBcInhcIiwgXCJ5XCIsIFwielwiIH07XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMywgbC5Db3VudCk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgSUNvbGxlY3Rpb25BZGRXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIElMaXN0PHN0cmluZz4gbCA9IG5ld1tdIHsgXCJ4XCIsIFwieVwiLCBcInpcIiB9O1xuICAgICAgICAgICAgQXNzZXJ0LlRocm93czxOb3RTdXBwb3J0ZWRFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgbC5BZGQoXCJhXCIpOyB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgSUNvbGxlY3Rpb25DbGVhcldvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgSUxpc3Q8c3RyaW5nPiBsID0gbmV3W10geyBcInhcIiwgXCJ5XCIsIFwielwiIH07XG4gICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE5vdFN1cHBvcnRlZEV4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBsLkNsZWFyKCk7IH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBJQ29sbGVjdGlvbkNvbnRhaW5zV29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICBJTGlzdDxzdHJpbmc+IGwgPSBuZXdbXSB7IFwieFwiLCBcInlcIiwgXCJ6XCIgfTtcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKGwuQ29udGFpbnMoXCJ5XCIpKTtcbiAgICAgICAgICAgIEFzc2VydC5GYWxzZShsLkNvbnRhaW5zKFwiYVwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgSUNvbGxlY3Rpb25Db250YWluc1VzZXNFcXVhbHNNZXRob2QoKVxuICAgICAgICB7XG4gICAgICAgICAgICBJTGlzdDxDPiBsID0gbmV3W10geyBuZXcgQygxKSwgbmV3IEMoMiksIG5ldyBDKDMpIH07XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShsLkNvbnRhaW5zKG5ldyBDKDIpKSk7XG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UobC5Db250YWlucyhuZXcgQyg0KSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIElDb2xsZWN0aW9uUmVtb3ZlV29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICBJTGlzdDxzdHJpbmc+IGwgPSBuZXdbXSB7IFwieFwiLCBcInlcIiwgXCJ6XCIgfTtcbiAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8Tm90U3VwcG9ydGVkRXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IGwuUmVtb3ZlKFwieVwiKTsgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIElMaXN0SW5kZXhpbmdXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIElMaXN0PHN0cmluZz4gbCA9IG5ld1tdIHsgXCJ4XCIsIFwieVwiLCBcInpcIiB9O1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwieVwiLCBsWzFdKTtcbiAgICAgICAgICAgIGxbMV0gPSBcImFcIjtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChuZXdbXSB7IFwieFwiLCBcImFcIiwgXCJ6XCIgfSwgU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5Ub0FycmF5PHN0cmluZz4obCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIElMaXN0SW5kZXhPZldvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgSUxpc3Q8c3RyaW5nPiBsID0gbmV3W10geyBcInhcIiwgXCJ5XCIsIFwielwiIH07XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMSwgbC5JbmRleE9mKFwieVwiKSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoLTEsIGwuSW5kZXhPZihcImFcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIElMaXN0SW5kZXhPZlVzZXNFcXVhbHNNZXRob2QoKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyBuZXcgQygxKSwgbmV3IEMoMiksIG5ldyBDKDMpIH07XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMSwgQXJyYXkuSW5kZXhPZjxnbG9iYWw6OkJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5CcmlkZ2VJc3N1ZXMuTjc3Mi5DPihhcnIsIG5ldyBDKDIpKSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoLTEsIEFycmF5LkluZGV4T2Y8Z2xvYmFsOjpCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQnJpZGdlSXNzdWVzLk43NzIuQz4oYXJyLCBuZXcgQyg0KSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIElMaXN0SW5zZXJ0V29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICBJTGlzdDxzdHJpbmc+IGwgPSBuZXdbXSB7IFwieFwiLCBcInlcIiwgXCJ6XCIgfTtcbiAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8Tm90U3VwcG9ydGVkRXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IGwuSW5zZXJ0KDEsIFwiYVwiKTsgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIElMaXN0UmVtb3ZlQXRXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIElMaXN0PHN0cmluZz4gbCA9IG5ld1tdIHsgXCJ4XCIsIFwieVwiLCBcInpcIiB9O1xuICAgICAgICAgICAgQXNzZXJ0LlRocm93czxOb3RTdXBwb3J0ZWRFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgbC5SZW1vdmVBdCgxKTsgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3QoRXhwZWN0ZWRDb3VudCA9IDEwKV1cbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RVc2VDYXNlKClcbiAgICAgICAge1xuICAgICAgICAgICAgLy9UaGVzZSBhcnJheXMgZGVwZW5kIG9uIFwidXNlVHlwZWRBcnJheVwiIGJyaWRnZS5qc29uIG9wdGlvblxuICAgICAgICAgICAgdmFyIGJ5dGVBcnJheSA9IG5ldyBieXRlWzFdO1xuICAgICAgICAgICAgdmFyIHNieXRlQXJyYXkgPSBuZXcgc2J5dGVbMl07XG4gICAgICAgICAgICB2YXIgc2hvcnRBcnJheSA9IG5ldyBzaG9ydFszXTtcbiAgICAgICAgICAgIHZhciB1c2hvcnRBcnJheSA9IG5ldyB1c2hvcnRbNF07XG4gICAgICAgICAgICB2YXIgaW50QXJyYXkgPSBuZXcgaW50WzVdO1xuICAgICAgICAgICAgdmFyIHVpbnRBcnJheSA9IG5ldyB1aW50WzZdO1xuICAgICAgICAgICAgdmFyIGZsb2F0QXJyYXkgPSBuZXcgZmxvYXRbN107XG4gICAgICAgICAgICB2YXIgZG91YmxlQXJyYXkgPSBuZXcgZG91YmxlWzhdO1xuXG4gICAgICAgICAgICAvL1RoZXNlIGFycmF5cyBkbyBub3QgZGVwZW5kIG9uIFwidXNlVHlwZWRBcnJheVwiIGJyaWRnZS5qc29uIG9wdGlvblxuICAgICAgICAgICAgdmFyIHN0cmluZ0FycmF5ID0gbmV3IHN0cmluZ1s5XTtcbiAgICAgICAgICAgIHZhciBkZWNpbWFsQXJyYXkgPSBuZXcgZGVjaW1hbFsxMF07XG5cbiAgICAgICAgICAgIGJ5dGVBcnJheVswXSA9IDE7XG4gICAgICAgICAgICBzYnl0ZUFycmF5WzBdID0gMjtcbiAgICAgICAgICAgIHNob3J0QXJyYXlbMF0gPSAzO1xuICAgICAgICAgICAgdXNob3J0QXJyYXlbMF0gPSA0O1xuICAgICAgICAgICAgaW50QXJyYXlbMF0gPSA1O1xuICAgICAgICAgICAgdWludEFycmF5WzBdID0gNjtcbiAgICAgICAgICAgIGZsb2F0QXJyYXlbMF0gPSA3O1xuICAgICAgICAgICAgZG91YmxlQXJyYXlbMF0gPSA4O1xuXG4gICAgICAgICAgICBzdHJpbmdBcnJheVswXSA9IFwiOVwiO1xuICAgICAgICAgICAgZGVjaW1hbEFycmF5WzBdID0gMTBtO1xuXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMSwgYnl0ZUFycmF5WzBdLCBcImdldCBieXRlQXJyYXlbMF1cIik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMiwgc2J5dGVBcnJheVswXSwgXCJnZXQgc2J5dGVBcnJheVswXVwiKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgzLCBzaG9ydEFycmF5WzBdLCBcImdldCBzaG9ydEFycmF5WzBdXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDQsIHVzaG9ydEFycmF5WzBdLCBcImdldCB1c2hvcnRBcnJheVswXVwiKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCg1LCBpbnRBcnJheVswXSwgXCJnZXQgaW50QXJyYXlbMF1cIik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoNiwgdWludEFycmF5WzBdLCBcImdldCB1aW50QXJyYXlbMF1cIik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoNywgZmxvYXRBcnJheVswXSwgXCJnZXQgZmxvYXRBcnJheVswXVwiKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCg4LCBkb3VibGVBcnJheVswXSwgXCJnZXQgZG91YmxlQXJyYXlbMF1cIik7XG5cbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcIjlcIiwgc3RyaW5nQXJyYXlbMF0sIFwiZ2V0IHN0cmluZ0FycmF5WzBdXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDEwbSwgZGVjaW1hbEFycmF5WzBdLCBcImdldCBkZWNpbWFsQXJyYXlbMF1cIik7XG4gICAgICAgIH1cbiAgICB9XG59IiwidXNpbmcgQnJpZGdlLlRlc3QuTlVuaXQ7XG5cbnVzaW5nIFN5c3RlbTtcblxubmFtZXNwYWNlIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMlxue1xuICAgIC8vIEJyaWRnZVsjMTA5Ml1cbiAgICAvLyBcIm92ZXJmbG93TW9kZVwiOiAgXCJKYXZhc2NyaXB0XCIgYnJpZGdlLmpzb24gb3B0aW9uXG4gICAgcHVibGljIGNsYXNzIENoZWNrZWRVbmNoZWNrZWRUZXN0c1xuICAgIHtcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIEFzc2VydEVxdWFsKG9iamVjdCBleHBlY3RlZCwgb2JqZWN0IGFjdHVhbCwgc3RyaW5nIG1lc3NhZ2UgPSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoZXhwZWN0ZWQuVG9TdHJpbmcoKSwgYWN0dWFsLlRvU3RyaW5nKCksIG1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgb2JqZWN0IEJ5cGFzcyhvYmplY3QgbylcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH1cblxuICAgICAgICBbQ2F0ZWdvcnkoQ29uc3RhbnRzLk1PRFVMRV9DSEVDS0VEX1VOQ0tFQ0tFRCldXG4gICAgICAgIFtUZXN0Rml4dHVyZShUZXN0TmFtZUZvcm1hdCA9IFwiQ2hlY2tlZCAtIFwiICsgQ29uc3RhbnRzLkJBVENIX05BTUUgKyBcIiB7MH1cIildXG4gICAgICAgIHB1YmxpYyBjbGFzcyBDaGVja2VkVGVzdHNcbiAgICAgICAge1xuICAgICAgICAgICAgW1Rlc3RdXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdEludDMyKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gSW50MzIuTWF4VmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XG5cbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heCArIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4MisrOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gKyttYXgzOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAyICogbWF4OyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heDMrKyk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygyICogbWF4KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gSW50MzIuTWluVmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XG5cbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbiAtIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWluMS0tOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gLS1taW4yOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcHJlLS1cIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtbWluOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgdW5hcnkgLVwiKTtcblxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtbWluKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgdW5hcnkgLVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtUZXN0XVxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RVSW50MzIoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoZWNrZWRcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSBVSW50MzIuTWF4VmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XG5cbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heCArIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4MSsrOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gKyttYXgyOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAyICogbWF4OyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heDMrKyk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygyICogbWF4KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gVUludDMyLk1pblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xuXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4gLSAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbjEtLTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IC0tbWluMjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHByZS0tXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluIC0gMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluMy0tKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC0tbWluNCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW1Rlc3RdXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdExvbmcoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoZWNrZWRcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSBsb25nLk1heFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xuXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXggKyAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heDErKzsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9ICsrbWF4MjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gMiAqIG1heDsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXggKyAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoKyttYXg0KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoMiAqIG1heCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IGxvbmcuTWluVmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XG5cbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbiAtIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWluMS0tOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gLS1taW4yOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcHJlLS1cIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtbWluOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgdW5hcnkgLVwiKTtcblxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtbWluKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgdW5hcnkgLVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtUZXN0XVxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RVTG9uZygpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IHVsb25nLk1heFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xuXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXggKyAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heDErKzsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9ICsrbWF4MjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gMiAqIG1heDsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXggKyAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoKyttYXg0KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoMiAqIG1heCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IHVsb25nLk1pblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xuXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4gLSAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbjEtLTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IC0tbWluMjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHByZS0tXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluIC0gMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluMy0tKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC0tbWluNCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFtDYXRlZ29yeShDb25zdGFudHMuTU9EVUxFX0NIRUNLRURfVU5DS0VDS0VEKV1cbiAgICAgICAgW1Rlc3RGaXh0dXJlKFRlc3ROYW1lRm9ybWF0ID0gXCJDaGVja2VkSW5zaWRlVW5jaGVja2VkIC0gXCIgKyBDb25zdGFudHMuQkFUQ0hfTkFNRSArIFwiIHswfVwiKV1cbiAgICAgICAgcHVibGljIGNsYXNzIENoZWNrZWRJbnNpZGVVbmNoZWNrZWRUZXN0c1xuICAgICAgICB7XG4gICAgICAgICAgICBbVGVzdF1cbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0SW50MzIoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVuY2hlY2tlZFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gSW50MzIuTWF4VmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4ICsgMTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4MisrOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9ICsrbWF4MzsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IDIgKiBtYXg7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKCsrbWF4NCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygyICogbWF4KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IEludDMyLk1pblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbiAtIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbjEtLTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtLW1pbjI7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwcmUtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtbWluOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgdW5hcnkgLVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4gLSAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluMy0tKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLW1pbik7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtUZXN0XVxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RVSW50MzIoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVuY2hlY2tlZFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gVUludDMyLk1heFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heCArIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heDErKzsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSArK21heDI7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAyICogbWF4OyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXggKyAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4MysrKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoMiAqIG1heCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBVSW50MzIuTWluVmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWluIC0gMTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWluMS0tOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IC0tbWluMjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHByZS0tXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC0tbWluNCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbVGVzdF1cbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0TG9uZygpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdW5jaGVja2VkXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjaGVja2VkXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSBsb25nLk1heFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heCArIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heDErKzsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSArK21heDI7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAyICogbWF4OyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXggKyAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4MysrKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoMiAqIG1heCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBsb25nLk1pblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbiAtIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbjEtLTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtLW1pbjI7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwcmUtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtbWluOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgdW5hcnkgLVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4gLSAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluMy0tKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLW1pbik7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtUZXN0XVxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RVTG9uZygpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdW5jaGVja2VkXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjaGVja2VkXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSB1bG9uZy5NYXhWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXggKyAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXgxKys7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gKyttYXgyOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gMiAqIG1heDsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heDMrKyk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoKyttYXg0KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gdWxvbmcuTWluVmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWluIC0gMTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWluMS0tOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IC0tbWluMjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHByZS0tXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC0tbWluNCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgW0NhdGVnb3J5KENvbnN0YW50cy5NT0RVTEVfQ0hFQ0tFRF9VTkNLRUNLRUQpXVxuICAgICAgICBbVGVzdEZpeHR1cmUoVGVzdE5hbWVGb3JtYXQgPSBcIlVuY2hlY2tlZCAtIFwiICsgQ29uc3RhbnRzLkJBVENIX05BTUUgKyBcIiB7MH1cIildXG4gICAgICAgIHB1YmxpYyBjbGFzcyBVbmNoZWNrZWRUZXN0c1xuICAgICAgICB7XG4gICAgICAgICAgICBbVGVzdF1cbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0SW50MzIoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVuY2hlY2tlZFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IEludDMyLk1heFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4MSA9IG1heCArIDE7XG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgzID0gKyttYXgyO1xuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDQgPSAyICogbWF4O1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDhcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ3XCIsIHJNYXgyLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OFwiLCByTWF4MywgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMlwiLCByTWF4NCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjIxNDc0ODM2NDdcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4MysrKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTJcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoMiAqIG1heCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gSW50MzIuTWluVmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4xID0gbWluIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4yID0gbWluMS0tO1xuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluNCA9IC1taW47XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ3XCIsIHJNaW4xLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDhcIiwgck1pbjIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjIxNDc0ODM2NDdcIiwgck1pbjMsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDhcIiwgck1pbjQsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjIxNDc0ODM2NDdcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluIC0gMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMjE0NzQ4MzY0N1wiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLW1pbiksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgdW5hcnkgLVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtUZXN0XVxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RVSW50MzIoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVuY2hlY2tlZFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IFVJbnQzMi5NYXhWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDEgPSBtYXggKyAxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDIgPSBtYXgxKys7XG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXg0ID0gMiAqIG1heDtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk1XCIsIHJNYXgyLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNYXgzLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTRcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTVcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4MysrKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKCsrbWF4NCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk0XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IFVJbnQzMi5NaW5WYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluMyA9IC0tbWluMjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW40ID0gLW1pbjtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTVcIiwgck1pbjEsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk1XCIsIHJNaW4zLCBcIlRocm91Z2ggaWRlbnRpZmllciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgck1pbjQsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTVcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluIC0gMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluMy0tKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk1XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC0tbWluNCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC1taW4pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbVGVzdF1cbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0TG9uZygpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdW5jaGVja2VkXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gbG9uZy5NYXhWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDEgPSBtYXggKyAxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDIgPSBtYXgxKys7XG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXg0ID0gMiAqIG1heDtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1heDMsIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTJcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heDMrKyksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoKyttYXg0KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IGxvbmcuTWluVmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4xID0gbWluIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4yID0gbWluMS0tO1xuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluNCA9IC1taW47XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIHJNaW4xLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1pbjIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgck1pbjMsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1pbjQsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluIC0gMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLW1pbiksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgdW5hcnkgLVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtUZXN0XVxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RVTG9uZygpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdW5jaGVja2VkXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gdWxvbmcuTWF4VmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgxID0gbWF4ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgyID0gbWF4MSsrO1xuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4NCA9IDIgKiBtYXg7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgck1heDIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgck1heDMsIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTRcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heDMrKyksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTRcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoMiAqIG1heCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gdWxvbmcuTWluVmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4xID0gbWluIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4yID0gbWluMS0tO1xuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgck1pbjIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIHJNaW4zLCBcIlRocm91Z2ggaWRlbnRpZmllciAtLXByZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluIC0gMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluMy0tKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFtDYXRlZ29yeShDb25zdGFudHMuTU9EVUxFX0NIRUNLRURfVU5DS0VDS0VEKV1cbiAgICAgICAgW1Rlc3RGaXh0dXJlKFRlc3ROYW1lRm9ybWF0ID0gXCJVbmNoZWNrZWRJbnNpZGVDaGVja2VkIC0gXCIgKyBDb25zdGFudHMuQkFUQ0hfTkFNRSArIFwiIHswfVwiKV1cbiAgICAgICAgcHVibGljIGNsYXNzIFVuY2hlY2tlZEluc2lkZUNoZWNrZWRUZXN0c1xuICAgICAgICB7XG4gICAgICAgICAgICBbVGVzdF1cbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0SW50MzIoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoZWNrZWRcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHVuY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gSW50MzIuTWF4VmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDEgPSBtYXggKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgyID0gbWF4MSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgzID0gKyttYXgyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXg0ID0gMiAqIG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OFwiLCByTWF4MSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ3XCIsIHJNYXgyLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDhcIiwgck1heDMsIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yXCIsIHJNYXg0LCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ3XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heDMrKyksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKCsrbWF4NCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTJcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoMiAqIG1heCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IEludDMyLk1pblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4xID0gbWluIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluMiA9IG1pbjEtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluMyA9IC0tbWluMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluNCA9IC1taW47XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMjE0NzQ4MzY0N1wiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OFwiLCByTWluMiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjIxNDc0ODM2NDdcIiwgck1pbjMsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ4XCIsIHJNaW40LCBcIlRocm91Z2ggaWRlbnRpZmllciB1bmFyeSAtXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMjE0NzQ4MzY0N1wiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4gLSAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjIxNDc0ODM2NDdcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLS1taW40KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtbWluKSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbVGVzdF1cbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0VUludDMyKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB1bmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IFVJbnQzMi5NYXhWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4MSA9IG1heCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDIgPSBtYXgxKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDQgPSAyICogbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NVwiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgck1heDMsIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTRcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NVwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKCsrbWF4NCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygyICogbWF4KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gVUludDMyLk1pblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4xID0gbWluIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluMiA9IG1pbjEtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluMyA9IC0tbWluMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluNCA9IC1taW47XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NVwiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NVwiLCByTWluMywgXCJUaHJvdWdoIGlkZW50aWZpZXIgLS1wcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCByTWluNCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgdW5hcnkgLVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTVcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluIC0gMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTVcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLS1taW40KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC1taW4pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtUZXN0XVxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RMb25nKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB1bmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IGxvbmcuTWF4VmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDEgPSBtYXggKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgyID0gbWF4MSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgzID0gKyttYXgyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXg0ID0gMiAqIG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCByTWF4MSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIHJNYXgyLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1heDMsIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yXCIsIHJNYXg0LCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heDMrKyksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKCsrbWF4NCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTJcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoMiAqIG1heCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IGxvbmcuTWluVmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4yID0gbWluMS0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4zID0gLS1taW4yO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW40ID0gLW1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIHJNaW4xLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCByTWluMywgXCJUaHJvdWdoIGlkZW50aWZpZXIgLS1wcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1pbjQsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluMy0tKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC1taW4pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtUZXN0XVxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RVTG9uZygpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdW5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSB1bG9uZy5NYXhWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4MSA9IG1heCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDIgPSBtYXgxKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDQgPSAyICogbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgck1heDIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNYXgzLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIxODQ0Njc0NDA3MzcwOTU1MTYxNFwiLCByTWF4NCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKCsrbWF4NCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTRcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoMiAqIG1heCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IHVsb25nLk1pblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4xID0gbWluIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluMiA9IG1pbjEtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluMyA9IC0tbWluMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgck1pbjMsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC0tcHJlXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluIC0gMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC0tbWluNCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBbQ2F0ZWdvcnkoQ29uc3RhbnRzLk1PRFVMRV9DSEVDS0VEX1VOQ0tFQ0tFRCldXG4gICAgICAgIFtUZXN0Rml4dHVyZShUZXN0TmFtZUZvcm1hdCA9IFwiV2l0aE5vVW5jaGVja2VkS2V5d29yZCAtIFwiICsgQ29uc3RhbnRzLkJBVENIX05BTUUgKyBcIiB7MH1cIildXG4gICAgICAgIHB1YmxpYyBjbGFzcyBXaXRoTm9VbmNoZWNrZWRLZXl3b3JkVGVzdHNcbiAgICAgICAge1xuICAgICAgICAgICAgW1Rlc3RdXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdEludDMyKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF4ID0gSW50MzIuTWF4VmFsdWU7XG5cbiAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcbiAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcbiAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcbiAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcblxuICAgICAgICAgICAgICAgIHZhciByTWF4MSA9IG1heCArIDE7XG4gICAgICAgICAgICAgICAgdmFyIHJNYXgyID0gbWF4MSsrO1xuICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcbiAgICAgICAgICAgICAgICB2YXIgck1heDQgPSAyICogbWF4O1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ4XCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ3XCIsIHJNYXgyLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjIxNDc0ODM2NDhcIiwgck1heDMsIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk0XCIsIHJNYXg0LCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjIxNDc0ODM2NDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMjE0NzQ4MzY0N1wiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMjE0NzQ4MzY0OFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk0XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XG5cbiAgICAgICAgICAgICAgICB2YXIgbWluID0gSW50MzIuTWluVmFsdWU7XG5cbiAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcbiAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcbiAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcbiAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcblxuICAgICAgICAgICAgICAgIHZhciByTWluMSA9IG1pbiAtIDE7XG4gICAgICAgICAgICAgICAgdmFyIHJNaW4yID0gbWluMS0tO1xuICAgICAgICAgICAgICAgIHZhciByTWluMyA9IC0tbWluMjtcbiAgICAgICAgICAgICAgICB2YXIgck1pbjQgPSAtbWluO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OVwiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDhcIiwgck1pbjIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDlcIiwgck1pbjMsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ4XCIsIHJNaW40LCBcIlRocm91Z2ggaWRlbnRpZmllciB1bmFyeSAtXCIpO1xuXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ5XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OVwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC1taW4pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtUZXN0XVxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RVSW50MzIoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBtYXggPSBVSW50MzIuTWF4VmFsdWU7XG5cbiAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcbiAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcbiAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcbiAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcblxuICAgICAgICAgICAgICAgIHZhciByTWF4MSA9IG1heCArIDE7XG4gICAgICAgICAgICAgICAgdmFyIHJNYXgyID0gbWF4MSsrO1xuICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcbiAgICAgICAgICAgICAgICB2YXIgck1heDQgPSAyICogbWF4O1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk2XCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk1XCIsIHJNYXgyLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTZcIiwgck1heDMsIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI4NTg5OTM0NTkwXCIsIHJNYXg0LCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTZcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NVwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NlwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI4NTg5OTM0NTkwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XG5cbiAgICAgICAgICAgICAgICB2YXIgbWluID0gVUludDMyLk1pblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XG4gICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XG4gICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XG4gICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XG5cbiAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xuICAgICAgICAgICAgICAgIHZhciByTWluMiA9IG1pbjEtLTtcbiAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XG4gICAgICAgICAgICAgICAgdmFyIHJNaW40ID0gLW1pbjtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTFcIiwgck1pbjEsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgck1pbjIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTFcIiwgck1pbjMsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNaW40LCBcIlRocm91Z2ggaWRlbnRpZmllciB1bmFyeSAtXCIpO1xuXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0xXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluMy0tKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0xXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC0tbWluNCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLW1pbiksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgdW5hcnkgLVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW1Rlc3RdXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdExvbmcoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBtYXggPSBsb25nLk1heFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XG4gICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XG4gICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XG4gICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XG5cbiAgICAgICAgICAgICAgICB2YXIgck1heDEgPSBtYXggKyAxO1xuICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcbiAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XG4gICAgICAgICAgICAgICAgdmFyIHJNYXg0ID0gMiAqIG1heDtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgck1heDIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1heDMsIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMlwiLCByTWF4NCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXggKyAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heDMrKyksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMlwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygyICogbWF4KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG1pbiA9IGxvbmcuTWluVmFsdWU7XG5cbiAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcbiAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcbiAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcbiAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcblxuICAgICAgICAgICAgICAgIHZhciByTWluMSA9IG1pbiAtIDE7XG4gICAgICAgICAgICAgICAgdmFyIHJNaW4yID0gbWluMS0tO1xuICAgICAgICAgICAgICAgIHZhciByTWluMyA9IC0tbWluMjtcbiAgICAgICAgICAgICAgICB2YXIgck1pbjQgPSAtbWluO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIHJNaW4xLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCByTWluMiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIHJNaW4zLCBcIlRocm91Z2ggaWRlbnRpZmllciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1pbjQsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XG5cbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4gLSAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtbWluKSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbVGVzdF1cbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0VUxvbmcoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBtYXggPSB1bG9uZy5NYXhWYWx1ZTtcblxuICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xuICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xuICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xuICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xuXG4gICAgICAgICAgICAgICAgdmFyIHJNYXgxID0gbWF4ICsgMTtcbiAgICAgICAgICAgICAgICB2YXIgck1heDIgPSBtYXgxKys7XG4gICAgICAgICAgICAgICAgdmFyIHJNYXgzID0gKyttYXgyO1xuICAgICAgICAgICAgICAgIHZhciByTWF4NCA9IDIgKiBtYXg7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIHJNYXgyLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgck1heDMsIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIxODQ0Njc0NDA3MzcwOTU1MTYxNFwiLCByTWF4NCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heDMrKyksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKCsrbWF4NCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE0XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XG5cbiAgICAgICAgICAgICAgICB2YXIgbWluID0gdWxvbmcuTWluVmFsdWU7XG5cbiAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcbiAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcbiAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcbiAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcblxuICAgICAgICAgICAgICAgIHZhciByTWluMSA9IG1pbiAtIDE7XG4gICAgICAgICAgICAgICAgdmFyIHJNaW4yID0gbWluMS0tO1xuICAgICAgICAgICAgICAgIHZhciByTWluMyA9IC0tbWluMjtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgck1pbjEsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgck1pbjIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgck1pbjMsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC0tcHJlXCIpO1xuXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluMy0tKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC0tbWluNCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il0KfQo=
