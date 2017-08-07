/**
 * Bridge Test library - special tests with custom config options like useTypedArrays
 * @version 16.0.1
 * @author Object.NET, Inc.
 * @copyright Copyright 2008-2017 Object.NET, Inc.
 * @compiler Bridge.NET 16.0.1
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJjb2RlLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJCcmlkZ2VJc3N1ZXMvTjEzODUuY3MiLCJCcmlkZ2VJc3N1ZXMvTjE0OTkuY3MiLCJCcmlkZ2VJc3N1ZXMvTjExMjIuY3MiLCJCcmlkZ2VJc3N1ZXMvTjEyMDQuY3MiLCJCcmlkZ2VJc3N1ZXMvTjc3Mi5jcyIsIkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5jcyJdLAogICJuYW1lcyI6IFsiIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7b0JBV1lBLFlBQWVBO29CQUNmQSw4QkFBWUE7Ozs7Ozs7Ozs7Z0JDRFpBO2dCQUNBQSxVQUFpQkE7Z0JBQ2pCQTtnQkFDQUE7Z0JBQ0FBLFNBQVlBOztnQkFFWkEsMkNBQXlCQSwyQ0FBT0E7Z0JBQ2hDQSw0Q0FBMEJBLDZDQUFNQTtnQkFDaENBLDRDQUEwQkE7Z0JBQzFCQSxnREFBOEJBLDZDQUFNQTtnQkFDcENBLGdEQUE4QkE7O2dCQUU5QkE7Z0JBQ0FBO2dCQUNBQSxTQUFZQTs7Z0JBRVpBLDRDQUEwQkEsZ0NBQU1BO2dCQUNoQ0EsNENBQTBCQSw2Q0FBTUE7Z0JBQ2hDQSw0Q0FBMEJBO2dCQUUxQkEsNENBQTBCQTtnQkFFMUJBLGdEQUE4QkEsZ0NBQU1BO2dCQUNwQ0EsZ0RBQThCQSxnREFBTUE7Z0JBQ3BDQSxnREFBOEJBO2dCQUM5QkEsZ0RBQThCQTs7Z0JBRTlCQTtnQkFDQUE7Z0JBQ0FBLFNBQVVBOztnQkFFVkEsMkNBQXlCQSxtQ0FBTUE7Z0JBQy9CQSwyQ0FBeUJBLGlJQUFNQTtnQkFDL0JBLDJDQUF5QkE7Z0JBQ3pCQSwyQ0FBeUJBLG1DQUFNQTtnQkFDL0JBLGdEQUE4QkEsaUlBQU1BO2dCQUNwQ0EsMkNBQXlCQTtnQkFDekJBLDJDQUF5QkEscUNBQVFBOzs7Ozs7Ozs7b0JDbENqQ0EsUUFBUUE7O29CQUVSQSxTQUFTQSxBQUFLQSxXQUFXQTtvQkFDekJBLGtDQUFnQkEsMEJBQXlCQTs7b0JBRXpDQSxTQUFTQSxBQUFNQSxXQUFXQTtvQkFDMUJBLGtDQUFnQkEsMEJBQXlCQTs7b0JBRXpDQSxTQUFTQSxBQUFNQSxXQUFXQTtvQkFDMUJBLGtDQUFnQkEsMEJBQXlCQTs7b0JBRXpDQSxTQUFTQSxBQUFPQSxXQUFXQTtvQkFDM0JBLGtDQUFnQkEsMEJBQXlCQTs7O29CQU16Q0E7O29CQUVBQSxTQUFTQSxBQUFLQSxBQUFDQSxJQUFJQTtvQkFDbkJBLHdEQUFzQ0E7O29CQUV0Q0EsU0FBVUEsQUFBTUEsQUFBQ0EsSUFBSUE7b0JBQ3JCQSx3REFBc0NBOztvQkFFdENBLFNBQVVBLEFBQU1BLEFBQUNBLElBQUlBO29CQUNyQkEsd0RBQXNDQTs7b0JBRXRDQSxTQUFXQSxBQUFPQSxBQUFDQSxJQUFJQTtvQkFDdkJBLHdEQUFzQ0E7Ozs7Ozs7Ozs7b0JDaEN0Q0EsV0FBY0E7b0JBQ2RBLFlBQWVBO29CQUNmQSxZQUFlQTtvQkFDZkE7b0JBQ0FBO29CQUNBQTtvQkFDQUEsY0FBaUJBO29CQUNqQkEsbUJBQXNCQTs7b0JBRXRCQSwrQkFBYUEsWUFBV0E7b0JBQ3hCQSw4QkFBWUEsWUFBV0E7b0JBQ3ZCQSwrQkFBYUEsaUJBQWdCQTtvQkFDN0JBLDhCQUFZQSxjQUFvQkE7b0JBQ2hDQSw4QkFBWUEsU0FBUUE7b0JBQ3BCQSwrQkFBYUEsU0FBUUE7b0JBQ3JCQSw4QkFBWUE7b0JBQ1pBLCtCQUFhQSxPQUFNQTs7b0JBRW5CQSwrQkFBYUEsaUJBQWdCQTtvQkFDN0JBLDhCQUFZQSxTQUFRQTtvQkFDcEJBLCtCQUFhQSxTQUFRQTtvQkFDckJBLDhCQUFZQSxpQkFBZ0JBO29CQUM1QkEsOEJBQVlBLFVBQVNBO29CQUNyQkEsK0JBQWFBLFVBQVNBO29CQUN0QkEsOEJBQVlBLHVCQUFLQTtvQkFDakJBLCtCQUFhQSxPQUFNQTs7Ozs7Ozs7Ozs7b0JDMlluQkEsZ0JBQWdCQTtvQkFDaEJBLGlCQUFpQkE7b0JBQ2pCQSxpQkFBaUJBO29CQUNqQkEsa0JBQWtCQTtvQkFDbEJBLGVBQWVBO29CQUNmQSxnQkFBZ0JBO29CQUNoQkEsaUJBQWlCQTtvQkFDakJBLGtCQUFrQkE7OztvQkFHbEJBLGtCQUFrQkE7b0JBQ2xCQSxtQkFBbUJBOztvQkFFbkJBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTs7b0JBRUFBO29CQUNBQTs7b0JBRUFBLHFDQUFtQkE7b0JBQ25CQSxxQ0FBbUJBO29CQUNuQkEscUNBQW1CQTtvQkFDbkJBLHFDQUFtQkE7b0JBQ25CQSxxQ0FBbUJBO29CQUNuQkEscUNBQW1CQTtvQkFDbkJBLHFDQUFtQkE7b0JBQ25CQSxxQ0FBbUJBOztvQkFFbkJBLHVDQUFxQkE7b0JBQ3JCQSx3REFBcUJBOzs7Ozs7Z0JBOWFyQkEsVUFBYUE7Z0JBQ2JBLDhCQUFZQTtnQkFDWkEsOEJBQVlBO2dCQUNaQSw4QkFBWUE7Z0JBQ1pBLDhCQUFZQTtnQkFDWkEsOEJBQVlBO2dCQUNaQSw4QkFBWUE7Z0JBQ1pBLDhCQUFZQTtnQkFDWkEsOEJBQVlBOzs7Z0JBTVpBLHFDQUFtQkE7Z0JBQ25CQSxxQ0FBbUJBO2dCQUNuQkEscUNBQW1CQTs7O2dCQU1uQkEscUNBQW1CQTs7O2dCQU1uQkEscUNBQW1CQTtnQkFDbkJBLHFDQUFtQkE7Z0JBQ25CQSxxQ0FBbUJBOzs7Z0JBTW5CQSxxQ0FBbUJBO2dCQUNuQkEscUNBQW1CQTtnQkFDbkJBLHFDQUFtQkE7OztnQkFNbkJBLGtDQUFnQkEsSUFBSUE7Z0JBQ3BCQSxxQ0FBbUJBO2dCQUNuQkEscUNBQW1CQTs7OztnQkFNbkJBLHVDQUFxQkE7Z0JBQ3JCQSx1Q0FBcUJBOzs7Z0JBTXJCQSx1Q0FBcUJBO2dCQUNyQkEsdUNBQXFCQTs7O2dCQU1yQkEsVUFBVUE7Z0JBQ1ZBO2dCQUNBQTtnQkFDQUEsdUNBQXFCQTtnQkFDckJBLHVDQUFxQkE7OztnQkFNckJBLFVBQVVBO2dCQUNWQTtnQkFDQUE7Z0JBQ0FBLHVDQUFxQkE7Z0JBQ3JCQSx1Q0FBcUJBOzs7O2dCQU1yQkE7Z0JBQ0FBLDBCQUFrQkE7Ozs7d0JBRWRBLHNDQUFVQTs7Ozs7O2lCQUVkQSx3Q0FBc0JBOzs7Z0JBTXRCQSxVQUFVQTtnQkFDVkEsV0FBV0E7Z0JBQ1hBLCtCQUFhQSxRQUFPQTtnQkFDcEJBLGtDQUFnQkEsb0JBQU1BOzs7Z0JBTXRCQSxVQUFVQTtnQkFDVkEsc0NBQW9CQSxtREFBeUJBO2dCQUM3Q0Esc0NBQW9CQSx3REFBOEJBO2dCQUNsREEsc0NBQW9CQSw4Q0FBb0JBOzs7Z0JBTXhDQSxVQUFVQTtnQkFDVkEsOEJBQVlBLHNCQUF3Q0EsVUFBUkE7Z0JBQzVDQSwrQkFBYUEsc0JBQXdDQSxVQUFSQTs7O2dCQU03Q0EsVUFBVUEsbUJBQVFBLElBQUlBLGlEQUFNQSxJQUFJQSxpREFBTUEsSUFBSUE7Z0JBQzFDQSw4QkFBWUEsc0JBQXNGQSxLQUFJQSxJQUFJQSxpREFBOURBO2dCQUM1Q0EsK0JBQWFBLHNCQUFzRkEsS0FBSUEsSUFBSUEsaURBQTlEQTs7O2dCQU03Q0EsOEJBQVlBLDRCQUFnQ0EsZ0RBQWtCQSxBQUFpQ0E7Z0JBQy9GQSwrQkFBYUEsNEJBQWdDQSxnREFBa0JBLEFBQWlDQTs7O2dCQU1oR0Esc0NBQW9CQSw4Q0FBb0JBO2dCQUN4Q0Esc0NBQW9CQSw4Q0FBb0JBOzs7Z0JBTXhDQTtnQkFDWkEsQUFBbURBLDBEQUF3QkEsQUFBZ0NBO3dCQUFLQSxzQ0FBVUE7O2dCQUM5R0EseUNBQXVCQTs7O2dCQU12QkEscUNBQW1CQTs7O2dCQU1uQkEsVUFBVUEsbUJBQVFBLElBQUlBLGlEQUFNQSxJQUFJQSxpREFBTUEsSUFBSUE7Z0JBQzFDQSxxQ0FBbUJBLHNCQUFvRUEsS0FBS0EsSUFBSUE7Z0JBQ2hHQSxrQ0FBZ0JBLElBQUlBLHNCQUFvRUEsS0FBS0EsSUFBSUE7OztnQkFNakdBLHFDQUFtQkE7OztnQkFNbkJBLDZDQUEyQkE7O2dCQUUzQkEsNkNBQTJCQTs7O2dCQU0zQkEsVUFBVUE7Z0JBQ1ZBO2dCQUNBQSxrQ0FBZ0JBLHFEQUE0QkE7OztnQkFNNUNBLDhCQUFZQSw0QkFBZ0NBLG1EQUFxQkEsQUFBaUNBO2dCQUNsR0EsK0JBQWFBLDRCQUFnQ0EsbURBQXFCQSxBQUFpQ0E7OztnQkFNbkdBLFVBQVVBOztnQkFFVkEscUNBQW1CQSwwQkFBd0JBO2dCQUMzQ0EsOEJBQVlBLDBCQUF3QkE7OztnQkFNcENBLFVBQVVBOztnQkFFVkEscUNBQW1CQSwwQkFBd0JBO2dCQUMzQ0EsOEJBQVlBLDBCQUF3QkE7OztnQkFjcENBLFVBQVVBOztnQkFFVkEscUNBQW1CQSwwQkFBd0JBLHVCQUFRQSxJQUFJQTtnQkFDdkRBLGtDQUFnQkEsSUFBSUEsMEJBQXdCQSx1QkFBUUEsSUFBSUE7OztnQkFNeERBLFVBQVVBOztnQkFFVkEscUNBQW1CQSwwQkFBd0JBLGNBQWNBLElBQUlBO2dCQUM3REEsOEJBQVlBLDBCQUF3QkEsY0FBY0EsSUFBSUE7OztnQkFNdERBLFdBQWFBO2dCQUNiQSxXQUFXQTs7Z0JBRVhBLGtDQUFjQSxBQUF3QkE7b0JBQVFBLDBCQUF3QkE7O2dCQUN0RUEsa0NBQWNBLEFBQXdCQTtvQkFBUUEsMEJBQXdCQSxNQUFNQTs7Z0JBQzVFQSxrQ0FBY0EsQUFBd0JBO29CQUFRQSwwQkFBd0JBOzs7O2dCQU10RUEsVUFBVUE7Z0JBQ1ZBO2dCQUNBQSxrQ0FBZ0JBLGtEQUF5QkE7OztnQkFNekNBLFVBQVVBO2dCQUNWQSxrQkFBZ0JBO2dCQUNoQkEsa0NBQWdCQSxrREFBeUJBOzs7Z0JBTXpDQSxVQUFVQTtnQkFDVkEsa0JBQWdCQTtnQkFDaEJBLGtDQUFnQkEsa0RBQXlCQTs7O2dCQU16Q0EsVUFBVUE7Z0JBQ1ZBLGtCQUFnQkEsV0FBV0EsSUFBSUE7Z0JBQy9CQSxrQ0FBZ0JBLHFEQUE0QkE7OztnQkFNNUNBLFVBQVVBO2dCQUNWQSxrQkFBZ0JBLEtBQUtBLElBQUlBO2dCQUN6QkEsa0NBQWdCQSxrREFBeUJBOzs7Z0JBTXpDQSxXQUFhQTs7Z0JBRWJBLGtDQUFjQSxBQUF3QkE7b0JBQVFBLGtCQUFnQkE7Ozs7O2dCQU05REEsV0FBcUJBO2dCQUNyQkE7Z0JBQ0FBLEtBQWtCQTs7Ozt3QkFFZEEsc0NBQVVBOzs7Ozs7aUJBRWRBLHdDQUFzQkE7OztnQkFNdEJBLFFBQWtCQTtnQkFDbEJBLHFDQUFtQkE7OztnQkFNbkJBLFFBQWtCQTtnQkFDbEJBLGdFQUFxQ0EsQUFBd0JBO29CQUFRQTs7OztnQkFNckVBLFFBQWtCQTtnQkFDbEJBLGdFQUFxQ0EsQUFBd0JBO29CQUFRQTs7OztnQkFNckVBLFFBQWtCQTtnQkFDbEJBLDhCQUFZQTtnQkFDWkEsK0JBQWFBOzs7Z0JBTWJBLFFBQWFBLG1CQUFRQSxJQUFJQSxpREFBTUEsSUFBSUEsaURBQU1BLElBQUlBO2dCQUM3Q0EsOEJBQVlBLHlCQUFXQSxJQUFJQTtnQkFDM0JBLCtCQUFhQSx5QkFBV0EsSUFBSUE7OztnQkFNNUJBLFFBQWtCQTtnQkFDbEJBLGdFQUFxQ0EsQUFBd0JBO29CQUFRQTs7OztnQkFNckVBLFFBQWtCQTtnQkFDbEJBLHVDQUFxQkE7Z0JBQ3JCQTtnQkFDQUEsa0NBQWdCQSxtREFBeUJBLDRCQUF1Q0E7OztnQkFNaEZBLFFBQWtCQTtnQkFDbEJBLHFDQUFtQkE7Z0JBQ25CQSxrQ0FBZ0JBLElBQUlBOzs7Z0JBTXBCQSxVQUFVQSxtQkFBUUEsSUFBSUEsaURBQU1BLElBQUlBLGlEQUFNQSxJQUFJQTtnQkFDMUNBLHFDQUFtQkEsc0JBQW9FQSxLQUFLQSxJQUFJQTtnQkFDaEdBLGtDQUFnQkEsSUFBSUEsc0JBQW9FQSxLQUFLQSxJQUFJQTs7O2dCQU1qR0EsUUFBa0JBO2dCQUNsQkEsZ0VBQXFDQSxBQUF3QkE7b0JBQVFBOzs7O2dCQU1yRUEsUUFBa0JBO2dCQUNsQkEsZ0VBQXFDQSxBQUF3QkE7b0JBQVFBOzs7Ozs7Ozs7O21CQWpRK0JBOzs7bUJBQ0NBOzs7bUJBeURFQTs7O21CQUNDQTs7Ozs7Ozs7OzRCQWpOL0ZBOztnQkFFTEEsU0FBU0E7Ozs7OEJBR2VBO2dCQUV4QkEsT0FBT0EsOERBQVVBLFdBQUtBLEFBQUNBLFlBQUdBOzs7Z0JBSzFCQSxPQUFPQTs7Ozs7Ozs7OytCQTROUUEsR0FBT0E7Z0JBRXRCQSxPQUFPQSxNQUFLQSxRQUFRQSxDQUFDQSxJQUFJQSxJQUFJQTs7Ozs7Ozs7dUNDbFBOQSxVQUFpQkEsUUFBZUE7O29CQUUzREEsa0NBQWdCQSxxQkFBcUJBLG1CQUFtQkE7O2tDQUcvQkE7b0JBRXpCQSxPQUFPQTs7Ozs7Ozs7OztvQkFtTEtBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBUUE7O29CQUN6RUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHdCQUFRQTs7b0JBQ3pFQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBVUE7O29CQUMzRUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVFBLHFCQUFJQTs7O29CQUU3RUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHNEQUFzREE7O29CQUN2SEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLGlGQUFzREE7O29CQUN2SEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHNEQUF3REE7O29CQUN6SEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHNEQUFzREEsZ0NBQUlBOzs7b0JBRTNIQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVFBOztvQkFDekVBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSx3QkFBUUE7O29CQUN6RUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVVBOztvQkFDM0VBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxRQUFRQSxrQkFBQ0E7OztvQkFFMUVBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBOztvQkFDdkhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxpRkFBc0RBOztvQkFDdkhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBd0RBOztvQkFDekhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBLDZCQUFDQTs7OztvQkFZeEhBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBUUE7O29CQUN6RUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHdCQUFRQTs7b0JBQ3pFQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBVUE7O29CQUMzRUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVFBLHFCQUFJQTs7O29CQUU3RUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHNEQUFzREE7O29CQUN2SEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLGlGQUFzREE7O29CQUN2SEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHNEQUF3REE7O29CQUN6SEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHNEQUFzREEsZ0NBQUlBOzs7b0JBRTNIQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVFBOztvQkFDekVBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSx3QkFBUUE7O29CQUN6RUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVVBOzs7b0JBRTNFQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsc0RBQXNEQTs7b0JBQ3ZIQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsaUZBQXNEQTs7b0JBQ3ZIQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsc0RBQXdEQTs7OztvQkFZekhBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBUUE7O29CQUN6RUEsNERBQWlDQSxBQUF3QkE7O3dCQUFRQSxRQUFRQTs7b0JBQ3pFQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBUUEsQ0FBRUE7O29CQUMzRUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVFBLG9CQUFJQTs7O29CQUU3RUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHNEQUFzREE7O29CQUN2SEEsNERBQWlDQSxBQUF3QkE7O3dCQUFRQSxzREFBc0RBOztvQkFDdkhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBLENBQUVBOztvQkFDekhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBLG9CQUFJQTs7O29CQUUzSEEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxRQUFRQTs7b0JBQ3pFQSw0REFBaUNBLEFBQXdCQTs7d0JBQVFBLFFBQVFBOztvQkFDekVBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxRQUFRQSxDQUFFQTs7b0JBQzNFQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBUUEsQUFBQ0E7OztvQkFFMUVBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBOztvQkFDdkhBLDREQUFpQ0EsQUFBd0JBOzt3QkFBUUEsc0RBQXNEQTs7b0JBQ3ZIQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsc0RBQXNEQSxDQUFFQTs7b0JBQ3pIQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsc0RBQXNEQSxBQUFDQTs7OztvQkFZeEhBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBUUE7O29CQUN6RUEsNERBQWlDQSxBQUF3QkE7O3dCQUFRQSxRQUFRQTs7b0JBQ3pFQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBUUEsQ0FBRUE7O29CQUMzRUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVFBLHFCQUFJQTs7O29CQUU3RUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHNEQUFzREE7O29CQUN2SEEsNERBQWlDQSxBQUF3QkE7O3dCQUFRQSxzREFBc0RBOztvQkFDdkhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBLENBQUVBOztvQkFDekhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBLHFCQUFJQTs7O29CQUUzSEEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxRQUFRQTs7b0JBQ3pFQSw0REFBaUNBLEFBQXdCQTs7d0JBQVFBLFFBQVFBOztvQkFDekVBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxRQUFRQSxDQUFFQTs7O29CQUUzRUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHNEQUFzREE7O29CQUN2SEEsNERBQWlDQSxBQUF3QkE7O3dCQUFRQSxzREFBc0RBOztvQkFDdkhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBLENBQUVBOzs7Ozs7Ozs7OztvQkF2VTdIQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVFBOztvQkFDekVBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSx3QkFBUUE7O29CQUN6RUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVVBOztvQkFDM0VBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxRQUFRQSxxQkFBSUE7OztvQkFFN0VBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBOztvQkFDdkhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxpRkFBc0RBOztvQkFDdkhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBd0RBOztvQkFDekhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBLGdDQUFJQTs7O29CQUUzSEEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxRQUFRQTs7b0JBQ3pFQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsd0JBQVFBOztvQkFDekVBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxRQUFVQTs7b0JBQzNFQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBUUEsa0JBQUNBOzs7b0JBRTFFQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsc0RBQXNEQTs7b0JBQ3ZIQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsaUZBQXNEQTs7b0JBQ3ZIQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsc0RBQXdEQTs7b0JBQ3pIQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsc0RBQXNEQSw2QkFBQ0E7Ozs7b0JBU3hIQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVFBOztvQkFDekVBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSx3QkFBUUE7O29CQUN6RUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVVBOztvQkFDM0VBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxRQUFRQSxxQkFBSUE7OztvQkFFN0VBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBOztvQkFDdkhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxpRkFBc0RBOztvQkFDdkhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBd0RBOztvQkFDekhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBLGdDQUFJQTs7O29CQUUzSEEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxRQUFRQTs7b0JBQ3pFQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsd0JBQVFBOztvQkFDekVBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxRQUFVQTs7O29CQUUzRUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHNEQUFzREE7O29CQUN2SEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLGlGQUFzREE7O29CQUN2SEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHNEQUF3REE7Ozs7b0JBU3pIQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVFBOztvQkFDekVBLDREQUFpQ0EsQUFBd0JBOzt3QkFBUUEsUUFBUUE7O29CQUN6RUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVFBLENBQUVBOztvQkFDM0VBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxRQUFRQSxvQkFBSUE7OztvQkFFN0VBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBOztvQkFDdkhBLDREQUFpQ0EsQUFBd0JBOzt3QkFBUUEsc0RBQXNEQTs7b0JBQ3ZIQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsc0RBQXNEQSxDQUFFQTs7b0JBQ3pIQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsc0RBQXNEQSxvQkFBSUE7OztvQkFFM0hBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBUUE7O29CQUN6RUEsNERBQWlDQSxBQUF3QkE7O3dCQUFRQSxRQUFRQTs7b0JBQ3pFQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBUUEsQ0FBRUE7O29CQUMzRUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVFBLEFBQUNBOzs7b0JBRTFFQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsc0RBQXNEQTs7b0JBQ3ZIQSw0REFBaUNBLEFBQXdCQTs7d0JBQVFBLHNEQUFzREE7O29CQUN2SEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHNEQUFzREEsQ0FBRUE7O29CQUN6SEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLHNEQUFzREEsQUFBQ0E7Ozs7b0JBU3hIQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVFBOztvQkFDekVBLDREQUFpQ0EsQUFBd0JBOzt3QkFBUUEsUUFBUUE7O29CQUN6RUEsNERBQWlDQSxBQUF3QkE7d0JBQVFBLFFBQVFBLENBQUVBOztvQkFDM0VBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxRQUFRQSxxQkFBSUE7OztvQkFFN0VBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBOztvQkFDdkhBLDREQUFpQ0EsQUFBd0JBOzt3QkFBUUEsc0RBQXNEQTs7b0JBQ3ZIQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsc0RBQXNEQSxDQUFFQTs7b0JBQ3pIQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsc0RBQXNEQSxxQkFBSUE7OztvQkFFM0hBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBUUE7O29CQUN6RUEsNERBQWlDQSxBQUF3QkE7O3dCQUFRQSxRQUFRQTs7b0JBQ3pFQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsUUFBUUEsQ0FBRUE7OztvQkFFM0VBLDREQUFpQ0EsQUFBd0JBO3dCQUFRQSxzREFBc0RBOztvQkFDdkhBLDREQUFpQ0EsQUFBd0JBOzt3QkFBUUEsc0RBQXNEQTs7b0JBQ3ZIQSw0REFBaUNBLEFBQXdCQTt3QkFBUUEsc0RBQXNEQSxDQUFFQTs7Ozs7Ozs7Ozs7b0JBdVlySEEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLFlBQVlBO29CQUNaQSw0QkFBWUE7b0JBQ1pBLFlBQWNBO29CQUNkQSxZQUFZQSxLQUFJQTtvQkFDaEJBLDBFQUEwRUE7b0JBQzFFQSx5RUFBeUVBO29CQUN6RUEsMEVBQTBFQTtvQkFDMUVBLGlFQUFpRUE7O29CQUVqRUEsMEVBQTBFQSxzREFBc0RBO29CQUNoSUEseUVBQXlFQSxpRkFBc0RBO29CQUMvSEEsMEVBQTBFQSxzREFBd0RBO29CQUNsSUEsaUVBQWlFQSxzREFBc0RBLGlCQUFJQTs7b0JBRTNIQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsWUFBWUE7b0JBQ1pBLDRCQUFZQTtvQkFDWkEsWUFBY0E7b0JBQ2RBLFlBQVlBLEVBQUNBO29CQUNiQSx5RUFBeUVBO29CQUN6RUEsMEVBQTBFQTtvQkFDMUVBLHlFQUF5RUE7b0JBQ3pFQSwwRUFBMEVBOztvQkFFMUVBLHlFQUF5RUEsc0RBQXNEQTtvQkFDL0hBLDBFQUEwRUEsaUZBQXNEQTtvQkFDaElBLHlFQUF5RUEsc0RBQXdEQTtvQkFDaklBLDBFQUEwRUEsc0RBQXNEQSxjQUFDQTs7O29CQVlqSUEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLFlBQVlBO29CQUNaQSw0QkFBWUE7b0JBQ1pBLFlBQWNBO29CQUNkQSxZQUFZQSxLQUFJQTtvQkFDaEJBLGdFQUFnRUE7b0JBQ2hFQSx5RUFBeUVBO29CQUN6RUEsZ0VBQWdFQTtvQkFDaEVBLHlFQUF5RUE7O29CQUV6RUEsZ0VBQWdFQSxzREFBc0RBO29CQUN0SEEseUVBQXlFQSxpRkFBc0RBO29CQUMvSEEsZ0VBQWdFQSxzREFBd0RBO29CQUN4SEEseUVBQXlFQSxzREFBc0RBLGlCQUFJQTs7b0JBRW5JQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsWUFBWUE7b0JBQ1pBLDRCQUFZQTtvQkFDWkEsWUFBY0E7b0JBQ2RBLFlBQVlBLEFBQUNBO29CQUNiQSx5RUFBeUVBO29CQUN6RUEsZ0VBQWdFQTtvQkFDaEVBLHlFQUF5RUE7b0JBQ3pFQSxnRUFBZ0VBOztvQkFFaEVBLHlFQUF5RUEsc0RBQXNEQTtvQkFDL0hBLGdFQUFnRUEsaUZBQXNEQTtvQkFDdEhBLHlFQUF5RUEsc0RBQXdEQTtvQkFDaklBLGdFQUFnRUEsc0RBQXNEQSxBQUFDQTs7OztvQkFZdkhBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSxZQUFZQTtvQkFDWkEsWUFBWUE7b0JBQ1pBLFlBQVlBLENBQUVBO29CQUNkQSxZQUFZQSxvQkFBSUE7b0JBQ2hCQSxtRkFBbUZBO29CQUNuRkEsa0ZBQWtGQTtvQkFDbEZBLG1GQUFtRkE7b0JBQ25GQSxpRUFBaUVBOztvQkFFakVBLG1GQUFtRkEsc0RBQXNEQTtvQkFDeklBLGtGQUFrRkEsc0RBQXNEQTtvQkFDeElBLG1GQUFtRkEsc0RBQXNEQSxDQUFFQTtvQkFDM0lBLGlFQUFpRUEsc0RBQXNEQSxvQkFBSUE7O29CQUUzSEEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLFlBQVlBO29CQUNaQSxZQUFZQTtvQkFDWkEsWUFBWUEsQ0FBRUE7b0JBQ2RBLFlBQVlBLEFBQUNBO29CQUNiQSxrRkFBa0ZBO29CQUNsRkEsbUZBQW1GQTtvQkFDbkZBLGtGQUFrRkE7b0JBQ2xGQSxtRkFBbUZBOztvQkFFbkZBLGtGQUFrRkEsc0RBQXNEQTtvQkFDeElBLG1GQUFtRkEsc0RBQXNEQTtvQkFDeklBLGtGQUFrRkEsc0RBQXNEQSxDQUFFQTtvQkFDMUlBLG1GQUFtRkEsc0RBQXNEQSxBQUFDQTs7OztvQkFZMUlBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSxZQUFZQTtvQkFDWkEsWUFBWUE7b0JBQ1pBLFlBQVlBLENBQUVBO29CQUNkQSxZQUFZQSxxQkFBSUE7b0JBQ2hCQSxnRUFBZ0VBO29CQUNoRUEsbUZBQW1GQTtvQkFDbkZBLGdFQUFnRUE7b0JBQ2hFQSxtRkFBbUZBOztvQkFFbkZBLGdFQUFnRUEsc0RBQXNEQTtvQkFDdEhBLG1GQUFtRkEsc0RBQXNEQTtvQkFDeklBLGdFQUFnRUEsc0RBQXNEQSxDQUFFQTtvQkFDeEhBLG1GQUFtRkEsc0RBQXNEQSxxQkFBSUE7O29CQUU3SUEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLFlBQVlBO29CQUNaQSxZQUFZQTtvQkFDWkEsWUFBWUEsQ0FBRUE7b0JBQ2RBLG1GQUFtRkE7b0JBQ25GQSxnRUFBZ0VBO29CQUNoRUEsbUZBQW1GQTs7b0JBRW5GQSxtRkFBbUZBLHNEQUFzREE7b0JBQ3pJQSxnRUFBZ0VBLHNEQUFzREE7b0JBQ3RIQSxtRkFBbUZBLHNEQUFzREEsQ0FBRUE7Ozs7Ozs7Ozs7b0JBelkvSUEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLFlBQVlBO29CQUNaQSw0QkFBWUE7b0JBQ1pBLFlBQWNBO29CQUNkQSxZQUFZQSxLQUFJQTtvQkFDaEJBLDBFQUEwRUE7b0JBQzFFQSx5RUFBeUVBO29CQUN6RUEsMEVBQTBFQTtvQkFDMUVBLGlFQUFpRUE7O29CQUVqRUEsMEVBQTBFQSxzREFBc0RBO29CQUNoSUEseUVBQXlFQSxpRkFBc0RBO29CQUMvSEEsMEVBQTBFQSxzREFBd0RBO29CQUNsSUEsaUVBQWlFQSxzREFBc0RBLGlCQUFJQTs7b0JBRTNIQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsWUFBWUE7b0JBQ1pBLDRCQUFZQTtvQkFDWkEsWUFBY0E7b0JBQ2RBLFlBQVlBLEVBQUNBO29CQUNiQSx5RUFBeUVBO29CQUN6RUEsMEVBQTBFQTtvQkFDMUVBLHlFQUF5RUE7b0JBQ3pFQSwwRUFBMEVBOztvQkFFMUVBLHlFQUF5RUEsc0RBQXNEQTtvQkFDL0hBLDBFQUEwRUEsaUZBQXNEQTtvQkFDaElBLHlFQUF5RUEsc0RBQXdEQTtvQkFDaklBLDBFQUEwRUEsc0RBQXNEQSxjQUFDQTs7O29CQVNqSUEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLFlBQVlBO29CQUNaQSw0QkFBWUE7b0JBQ1pBLFlBQWNBO29CQUNkQSxZQUFZQSxLQUFJQTtvQkFDaEJBLGdFQUFnRUE7b0JBQ2hFQSx5RUFBeUVBO29CQUN6RUEsZ0VBQWdFQTtvQkFDaEVBLHlFQUF5RUE7O29CQUV6RUEsZ0VBQWdFQSxzREFBc0RBO29CQUN0SEEseUVBQXlFQSxpRkFBc0RBO29CQUMvSEEsZ0VBQWdFQSxzREFBd0RBO29CQUN4SEEseUVBQXlFQSxzREFBc0RBLGlCQUFJQTs7b0JBRW5JQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsWUFBWUE7b0JBQ1pBLDRCQUFZQTtvQkFDWkEsWUFBY0E7b0JBQ2RBLFlBQVlBLEFBQUNBO29CQUNiQSx5RUFBeUVBO29CQUN6RUEsZ0VBQWdFQTtvQkFDaEVBLHlFQUF5RUE7b0JBQ3pFQSxnRUFBZ0VBOztvQkFFaEVBLHlFQUF5RUEsc0RBQXNEQTtvQkFDL0hBLGdFQUFnRUEsaUZBQXNEQTtvQkFDdEhBLHlFQUF5RUEsc0RBQXdEQTtvQkFDaklBLGdFQUFnRUEsc0RBQXNEQSxBQUFDQTs7OztvQkFTdkhBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSxZQUFZQTtvQkFDWkEsWUFBWUE7b0JBQ1pBLFlBQVlBLENBQUVBO29CQUNkQSxZQUFZQSxvQkFBSUE7b0JBQ2hCQSxtRkFBbUZBO29CQUNuRkEsa0ZBQWtGQTtvQkFDbEZBLG1GQUFtRkE7b0JBQ25GQSxpRUFBaUVBOztvQkFFakVBLG1GQUFtRkEsc0RBQXNEQTtvQkFDeklBLGtGQUFrRkEsc0RBQXNEQTtvQkFDeElBLG1GQUFtRkEsc0RBQXNEQSxDQUFFQTtvQkFDM0lBLGlFQUFpRUEsc0RBQXNEQSxvQkFBSUE7O29CQUUzSEEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLFlBQVlBO29CQUNaQSxZQUFZQTtvQkFDWkEsWUFBWUEsQ0FBRUE7b0JBQ2RBLFlBQVlBLEFBQUNBO29CQUNiQSxrRkFBa0ZBO29CQUNsRkEsbUZBQW1GQTtvQkFDbkZBLGtGQUFrRkE7b0JBQ2xGQSxtRkFBbUZBOztvQkFFbkZBLGtGQUFrRkEsc0RBQXNEQTtvQkFDeElBLG1GQUFtRkEsc0RBQXNEQTtvQkFDeklBLGtGQUFrRkEsc0RBQXNEQSxDQUFFQTtvQkFDMUlBLG1GQUFtRkEsc0RBQXNEQSxBQUFDQTs7OztvQkFTMUlBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSxZQUFZQTtvQkFDWkEsWUFBWUE7b0JBQ1pBLFlBQVlBLENBQUVBO29CQUNkQSxZQUFZQSxxQkFBSUE7b0JBQ2hCQSxnRUFBZ0VBO29CQUNoRUEsbUZBQW1GQTtvQkFDbkZBLGdFQUFnRUE7b0JBQ2hFQSxtRkFBbUZBOztvQkFFbkZBLGdFQUFnRUEsc0RBQXNEQTtvQkFDdEhBLG1GQUFtRkEsc0RBQXNEQTtvQkFDeklBLGdFQUFnRUEsc0RBQXNEQSxDQUFFQTtvQkFDeEhBLG1GQUFtRkEsc0RBQXNEQSxxQkFBSUE7O29CQUU3SUEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLFlBQVlBO29CQUNaQSxZQUFZQTtvQkFDWkEsWUFBWUEsQ0FBRUE7b0JBQ2RBLG1GQUFtRkE7b0JBQ25GQSxnRUFBZ0VBO29CQUNoRUEsbUZBQW1GQTs7b0JBRW5GQSxtRkFBbUZBLHNEQUFzREE7b0JBQ3pJQSxnRUFBZ0VBLHNEQUFzREE7b0JBQ3RIQSxtRkFBbUZBLHNEQUFzREEsQ0FBRUE7Ozs7Ozs7Ozs7b0JBOE4vSUEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLFlBQVlBO29CQUNaQSw0QkFBWUE7b0JBQ1pBLFlBQWNBO29CQUNkQSxZQUFZQSxJQUFJQTtvQkFDaEJBLHlFQUF5RUE7b0JBQ3pFQSx5RUFBeUVBO29CQUN6RUEseUVBQXlFQTtvQkFDekVBLHlFQUF5RUE7O29CQUV6RUEseUVBQXlFQSxzREFBc0RBO29CQUMvSEEseUVBQXlFQSxpRkFBc0RBO29CQUMvSEEseUVBQXlFQSxzREFBd0RBO29CQUNqSUEseUVBQXlFQSxzREFBc0RBLGVBQUlBOztvQkFFbklBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSxZQUFZQTtvQkFDWkEsNEJBQVlBO29CQUNaQSxZQUFjQTtvQkFDZEEsWUFBWUEsQ0FBQ0E7b0JBQ2JBLDBFQUEwRUE7b0JBQzFFQSwwRUFBMEVBO29CQUMxRUEsMEVBQTBFQTtvQkFDMUVBLHlFQUF5RUE7O29CQUV6RUEsMEVBQTBFQSxzREFBc0RBO29CQUNoSUEsMEVBQTBFQSxpRkFBc0RBO29CQUNoSUEsMEVBQTBFQSxzREFBd0RBO29CQUNsSUEseUVBQXlFQSxzREFBc0RBLFlBQUNBOzs7b0JBTWhJQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsWUFBWUE7b0JBQ1pBLDRCQUFZQTtvQkFDWkEsWUFBY0E7b0JBQ2RBLFlBQVlBLElBQUlBO29CQUNoQkEseUVBQXlFQTtvQkFDekVBLHlFQUF5RUE7b0JBQ3pFQSx5RUFBeUVBO29CQUN6RUEseUVBQXlFQTs7b0JBRXpFQSx5RUFBeUVBLHNEQUFzREE7b0JBQy9IQSx5RUFBeUVBLGlGQUFzREE7b0JBQy9IQSx5RUFBeUVBLHNEQUF3REE7b0JBQ2pJQSx5RUFBeUVBLHNEQUFzREEsZUFBSUE7O29CQUVuSUEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLFlBQVlBO29CQUNaQSw0QkFBWUE7b0JBQ1pBLFlBQWNBO29CQUNkQSxZQUFZQSxBQUFDQTtvQkFDYkEsaUVBQWlFQTtvQkFDakVBLGdFQUFnRUE7b0JBQ2hFQSxpRUFBaUVBO29CQUNqRUEsZ0VBQWdFQTs7b0JBRWhFQSxpRUFBaUVBLHNEQUFzREE7b0JBQ3ZIQSxnRUFBZ0VBLGlGQUFzREE7b0JBQ3RIQSxpRUFBaUVBLHNEQUF3REE7b0JBQ3pIQSxnRUFBZ0VBLHNEQUFzREEsQUFBQ0E7Ozs7b0JBTXZIQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsWUFBWUE7b0JBQ1pBLFlBQVlBO29CQUNaQSxZQUFZQSxDQUFFQTtvQkFDZEEsWUFBWUEsb0JBQUlBO29CQUNoQkEsbUZBQW1GQTtvQkFDbkZBLGtGQUFrRkE7b0JBQ2xGQSxtRkFBbUZBO29CQUNuRkEsaUVBQWlFQTs7b0JBRWpFQSxtRkFBbUZBLHNEQUFzREE7b0JBQ3pJQSxrRkFBa0ZBLHNEQUFzREE7b0JBQ3hJQSxtRkFBbUZBLHNEQUFzREEsQ0FBRUE7b0JBQzNJQSxpRUFBaUVBLHNEQUFzREEsb0JBQUlBOztvQkFFM0hBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSxZQUFZQTtvQkFDWkEsWUFBWUE7b0JBQ1pBLFlBQVlBLENBQUVBO29CQUNkQSxZQUFZQSxBQUFDQTtvQkFDYkEsa0ZBQWtGQTtvQkFDbEZBLG1GQUFtRkE7b0JBQ25GQSxrRkFBa0ZBO29CQUNsRkEsbUZBQW1GQTs7b0JBRW5GQSxrRkFBa0ZBLHNEQUFzREE7b0JBQ3hJQSxtRkFBbUZBLHNEQUFzREE7b0JBQ3pJQSxrRkFBa0ZBLHNEQUFzREEsQ0FBRUE7b0JBQzFJQSxtRkFBbUZBLHNEQUFzREEsQUFBQ0E7Ozs7b0JBTTFJQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsWUFBWUE7b0JBQ1pBLFlBQVlBO29CQUNaQSxZQUFZQSxDQUFFQTtvQkFDZEEsWUFBWUEscUJBQUlBO29CQUNoQkEsZ0VBQWdFQTtvQkFDaEVBLG1GQUFtRkE7b0JBQ25GQSxnRUFBZ0VBO29CQUNoRUEsbUZBQW1GQTs7b0JBRW5GQSxnRUFBZ0VBLHNEQUFzREE7b0JBQ3RIQSxtRkFBbUZBLHNEQUFzREE7b0JBQ3pJQSxnRUFBZ0VBLHNEQUFzREEsQ0FBRUE7b0JBQ3hIQSxtRkFBbUZBLHNEQUFzREEscUJBQUlBOztvQkFFN0lBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSxZQUFZQTtvQkFDWkEsWUFBWUE7b0JBQ1pBLFlBQVlBLENBQUVBO29CQUNkQSxtRkFBbUZBO29CQUNuRkEsZ0VBQWdFQTtvQkFDaEVBLG1GQUFtRkE7O29CQUVuRkEsbUZBQW1GQSxzREFBc0RBO29CQUN6SUEsZ0VBQWdFQSxzREFBc0RBO29CQUN0SEEsbUZBQW1GQSxzREFBc0RBLENBQUVBIiwKICAic291cmNlc0NvbnRlbnQiOiBbInVzaW5nIEJyaWRnZS5UZXN0Lk5Vbml0O1xyXG5cclxubmFtZXNwYWNlIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5CcmlkZ2VJc3N1ZXNcclxue1xyXG4gICAgW0NhdGVnb3J5KENvbnN0YW50cy5NT0RVTEVfSVNTVUVTKV1cclxuICAgIFtUZXN0Rml4dHVyZShUZXN0TmFtZUZvcm1hdCA9IFwiIzEzODUgLSBcIiArIENvbnN0YW50cy5CQVRDSF9OQU1FICsgXCIgezB9XCIpXVxyXG4gICAgcHVibGljIGNsYXNzIEJyaWRnZTEzODVcclxuICAgIHtcclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdElzVHlwZWRBcnJheUZvckJ5dGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb2JqZWN0IHZhbHVlID0gbmV3IGJ5dGVbM107XHJcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKHZhbHVlIGlzIGJ5dGVbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwidXNpbmcgQnJpZGdlLlRlc3QuTlVuaXQ7XHJcblxyXG5uYW1lc3BhY2UgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkJyaWRnZUlzc3Vlc1xyXG57XHJcbiAgICBbQ2F0ZWdvcnkoQ29uc3RhbnRzLk1PRFVMRV9JU1NVRVMpXVxyXG4gICAgW1Rlc3RGaXh0dXJlKFRlc3ROYW1lRm9ybWF0ID0gXCIjMTQ5OSAtIFwiICsgQ29uc3RhbnRzLkJBVENIX05BTUUgKyBcIiB7MH1cIildXHJcbiAgICBwdWJsaWMgY2xhc3MgQnJpZGdlMTQ5OVxyXG4gICAge1xyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFRlc3RPYmplY3RTdHJpbmdDb2FsZXNjZVdvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9iamVjdCBkZWYgPSAxO1xyXG4gICAgICAgICAgICBCcmlkZ2UxNDk5IGFwcCA9IG51bGw7XHJcbiAgICAgICAgICAgIG9iamVjdCBvMSA9IFwiXCI7XHJcbiAgICAgICAgICAgIG9iamVjdCBvMiA9IFwidGVzdFwiO1xyXG4gICAgICAgICAgICBvYmplY3QgbzMgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKDEsIGFwcCA/PyBkZWYpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoXCJcIiwgbzEgPz8gbzIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoXCJcIiwgbzEgPz8gXCJ0ZXN0XCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoXCJ0ZXN0XCIsIG8zID8/IG8yKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKFwidGVzdFwiLCBvMyA/PyBcInRlc3RcIik7XHJcblxyXG4gICAgICAgICAgICBzdHJpbmcgczEgPSBcIlwiO1xyXG4gICAgICAgICAgICBzdHJpbmcgczIgPSBcInRlc3RcIjtcclxuICAgICAgICAgICAgc3RyaW5nIHMzID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbChcIlwiLCBzMSA/PyBzMik7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbChcIlwiLCBzMSA/PyBvMik7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbChcIlwiLCBzMSA/PyBcInRlc3RcIik7XHJcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDE2MlxyXG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoXCJcIiwgXCJcIiA/PyBcInRlc3RcIik7XHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDE2MlxyXG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoXCJ0ZXN0XCIsIHMzID8/IHMyKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKFwidGVzdFwiLCBzMyA/PyBvMik7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbChcInRlc3RcIiwgczMgPz8gXCJ0ZXN0XCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoXCJ0ZXN0XCIsIG51bGwgPz8gXCJ0ZXN0XCIpO1xyXG5cclxuICAgICAgICAgICAgaW50PyBpMSA9IDA7XHJcbiAgICAgICAgICAgIGludD8gaTIgPSAxO1xyXG4gICAgICAgICAgICBpbnQ/IGkzID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbCgwLCBpMSA/PyBpMik7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbCgwLCBpMSA/PyBvMik7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbCgwLCBpMSA/PyAxKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKDEsIGkzID8/IGkyKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKFwidGVzdFwiLCBpMyA/PyBvMik7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbCgxLCBpMyA/PyAxKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKDEsIG51bGwgPz8gaTIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsInVzaW5nIEJyaWRnZS5UZXN0Lk5Vbml0O1xyXG5cclxudXNpbmcgU3lzdGVtO1xyXG5cclxubmFtZXNwYWNlIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5CcmlkZ2VJc3N1ZXNcclxue1xyXG4gICAgLy8gQnJpZGdlWyMxMTIyXVxyXG4gICAgW0NhdGVnb3J5KENvbnN0YW50cy5NT0RVTEVfSVNTVUVTKV1cclxuICAgIFtUZXN0Rml4dHVyZShUZXN0TmFtZUZvcm1hdCA9IFwiIzExMjIgLSBcIiArIENvbnN0YW50cy5CQVRDSF9OQU1FICsgXCIgezB9XCIpXVxyXG4gICAgcHVibGljIGNsYXNzIE4xMTIyXHJcbiAgICB7XHJcbiAgICAgICAgW1Rlc3QoRXhwZWN0ZWRDb3VudCA9IDQpXVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0Q2xpcHBpbmdJbkphdmFTY3JpcHRPdmVyZmxvd01vZGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHggPSBkb3VibGUuTWF4VmFsdWU7XHJcblxyXG4gICAgICAgICAgICB2YXIgeTEgPSAoaW50KU1hdGguRmxvb3IoeCAvIDAuMik7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChEb3VibGUuUG9zaXRpdmVJbmZpbml0eSwgeTEsIFwiaW50XCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHkyID0gKHVpbnQpTWF0aC5GbG9vcih4IC8gMC4yKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKERvdWJsZS5Qb3NpdGl2ZUluZmluaXR5LCB5MiwgXCJ1aW50XCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHoxID0gKGxvbmcpTWF0aC5GbG9vcih4IC8gMC4yKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKERvdWJsZS5Qb3NpdGl2ZUluZmluaXR5LCB6MSwgXCJsb25nXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHoyID0gKHVsb25nKU1hdGguRmxvb3IoeCAvIDAuMik7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChEb3VibGUuUG9zaXRpdmVJbmZpbml0eSwgejIsIFwidWxvbmdcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdChFeHBlY3RlZENvdW50ID0gNCldXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RJbnRlZ2VyRGl2aXNpb25JbkphdmFTY3JpcHRPdmVyZmxvd01vZGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHggPSAxLjE7XHJcblxyXG4gICAgICAgICAgICBpbnQgeTEgPSAoaW50KSgxIC8geCk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcIjAuOTA5MDkwOTA5MDkwOTA5MVwiLCB5MS5Ub1N0cmluZygpLCBcImludFwiKTtcclxuXHJcbiAgICAgICAgICAgIHVpbnQgeTIgPSAodWludCkoMSAvIHgpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCIwLjkwOTA5MDkwOTA5MDkwOTFcIiwgeTIuVG9TdHJpbmcoKSwgXCJ1aW50XCIpO1xyXG5cclxuICAgICAgICAgICAgbG9uZyB6MSA9IChsb25nKSgxIC8geCk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcIjAuOTA5MDkwOTA5MDkwOTA5MVwiLCB6MS5Ub1N0cmluZygpLCBcImxvbmdcIik7XHJcblxyXG4gICAgICAgICAgICB1bG9uZyB6MiA9ICh1bG9uZykoMSAvIHgpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCIwLjkwOTA5MDkwOTA5MDkwOTFcIiwgejIuVG9TdHJpbmcoKSwgXCJ1bG9uZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJ1c2luZyBCcmlkZ2UuVGVzdC5OVW5pdDtcclxuXHJcbm5hbWVzcGFjZSBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQnJpZGdlSXNzdWVzXHJcbntcclxuICAgIC8vIEJyaWRnZVsjMTIwNF1cclxuICAgIFtDYXRlZ29yeShDb25zdGFudHMuTU9EVUxFX0lTU1VFUyldXHJcbiAgICBbVGVzdEZpeHR1cmUoVGVzdE5hbWVGb3JtYXQgPSBcIiMxMjA0IC0gXCIgKyBDb25zdGFudHMuQkFUQ0hfTkFNRSArIFwiIHswfVwiKV1cclxuICAgIHB1YmxpYyBjbGFzcyBOMTIwNFxyXG4gICAge1xyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0U3RyaWN0TnVsbENoZWNrc09wdGlvbkZvck51bGxzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9iamVjdCB0ZW1wID0gbmV3IG9iamVjdCgpO1xyXG4gICAgICAgICAgICBvYmplY3QgdGVtcDEgPSB0ZW1wO1xyXG4gICAgICAgICAgICBvYmplY3QgdGVtcDIgPSBuZXcgb2JqZWN0KCk7XHJcbiAgICAgICAgICAgIGxvbmcgbCA9IDVMO1xyXG4gICAgICAgICAgICBvYmplY3Qgb2wgPSA1TDtcclxuICAgICAgICAgICAgb2JqZWN0IG9pID0gNTtcclxuICAgICAgICAgICAgb2JqZWN0IHZhck51bGwgPSBudWxsO1xyXG4gICAgICAgICAgICBvYmplY3QgdmFyVW5kZWZpbmVkID0gdGVtcFtcInRoaXMtcHJvcC11bmRlZmluZWRcIl07XHJcblxyXG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UodmFyTnVsbCA9PSB2YXJVbmRlZmluZWQsIFwidmFyTnVsbCA9PSB2YXJVbmRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKHZhck51bGwgPT0gbnVsbCwgXCJ2YXJOdWxsID09IG51bGxcIik7XHJcbiAgICAgICAgICAgIEFzc2VydC5GYWxzZSh2YXJVbmRlZmluZWQgPT0gbnVsbCwgXCJ2YXJVbmRlZmluZWQgPT0gbnVsbFwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUoU2NyaXB0LlVuZGVmaW5lZCA9PSB2YXJVbmRlZmluZWQsIFwiU2NyaXB0LlVuZGVmaW5lZCA9PSB2YXJVbmRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKHRlbXAgPT0gdGVtcDEsIFwidGVtcCA9PSB0ZW1wMVwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKHRlbXAgPT0gdGVtcDIsIFwidGVtcCA9PSB0ZW1wMlwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUobCA9PSA1LCBcImwgPT0gNVwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKG9sID09IG9pLCBcIm9sID09IG9pXCIpO1xyXG5cclxuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKHZhclVuZGVmaW5lZCA9PSB2YXJOdWxsLCBcInZhclVuZGVmaW5lZCA9PSB2YXJOdWxsXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShudWxsID09IHZhck51bGwsIFwibnVsbCA9PSB2YXJOdWxsXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UobnVsbCA9PSB2YXJVbmRlZmluZWQsIFwibnVsbCA9PSB2YXJVbmRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKHZhclVuZGVmaW5lZCA9PSBTY3JpcHQuVW5kZWZpbmVkLCBcInZhclVuZGVmaW5lZCA9PSBTY3JpcHQuVW5kZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZSh0ZW1wMSA9PSB0ZW1wLCBcInRlbXAxID09IHRlbXBcIik7XHJcbiAgICAgICAgICAgIEFzc2VydC5GYWxzZSh0ZW1wMiA9PSB0ZW1wLCBcInRlbXAyID09IHRlbXBcIik7XHJcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKDUgPT0gbCwgXCI1ID09IGxcIik7XHJcbiAgICAgICAgICAgIEFzc2VydC5GYWxzZShvaSA9PSBvbCwgXCJvaSA9PSBvbFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJ1c2luZyBCcmlkZ2UuVGVzdC5OVW5pdDtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnM7XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxuXHJcbm5hbWVzcGFjZSBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQnJpZGdlSXNzdWVzXHJcbntcclxuICAgIC8vIEJyaWRnZVsjNzcyXVxyXG4gICAgLy8gXCJ1c2VUeXBlZEFycmF5XCIgYnJpZGdlLmpzb24gb3B0aW9uIGlzIHRydWUgaW4gdGhpcyBwcm9qZWN0XHJcbiAgICBbQ2F0ZWdvcnkoQ29uc3RhbnRzLk1PRFVMRV9JU1NVRVMpXVxyXG4gICAgW1Rlc3RGaXh0dXJlKFRlc3ROYW1lRm9ybWF0ID0gXCIjNzcyIC0gXCIgKyBDb25zdGFudHMuQkFUQ0hfTkFNRSArIFwiIHswfVwiKV1cclxuICAgIHB1YmxpYyBjbGFzcyBONzcyXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBjbGFzcyBDXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgaW50IGk7XHJcblxyXG4gICAgICAgICAgICBwdWJsaWMgQyhpbnQgaSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pID0gaTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHVibGljIG92ZXJyaWRlIGJvb2wgRXF1YWxzKG9iamVjdCBvKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbyBpcyBDICYmIGkgPT0gKChDKW8pLmk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHB1YmxpYyBvdmVycmlkZSBpbnQgR2V0SGFzaENvZGUoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgVHlwZVByb3BlcnRpZXNBcmVDb3JyZWN0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9iamVjdCBhcnIgPSBuZXdbXSB7IDEsIDIsIDMgfTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUoYXJyIGlzIEFycmF5LCBcImlzIEFycmF5IHNob3VsZCBiZSB0cnVlXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShhcnIgaXMgaW50W10sIFwiaXMgaW50W10gc2hvdWxkIGJlIHRydWVcIik7XHJcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKGFyciBpcyBJQ29sbGVjdGlvbiwgXCJpcyBJQ29sbGVjdGlvbiBzaG91bGQgYmUgdHJ1ZVwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUoYXJyIGlzIElFbnVtZXJhYmxlLCBcImlzIElFbnVtZXJhYmxlIHNob3VsZCBiZSB0cnVlXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShhcnIgaXMgSUNsb25lYWJsZSwgXCJpcyBJQ2xvbmVhYmxlIHNob3VsZCBiZSB0cnVlXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShhcnIgaXMgSUNvbGxlY3Rpb248aW50PiwgXCJpcyBJQ29sbGVjdGlvbjxpbnQ+IHNob3VsZCBiZSB0cnVlXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShhcnIgaXMgSUVudW1lcmFibGU8aW50PiwgXCJpcyBJRW51bWVyYWJsZTxpbnQ+IHNob3VsZCBiZSB0cnVlXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShhcnIgaXMgSUxpc3Q8aW50PiwgXCJpcyBJTGlzdDxpbnQ+IHNob3VsZCBiZSB0cnVlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgTGVuZ3RoV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDAsIG5ldyBpbnRbMF0uTGVuZ3RoKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDEsIG5ld1tdIHsgXCJ4XCIgfS5MZW5ndGgpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMiwgbmV3W10geyBcInhcIiwgXCJ5XCIgfS5MZW5ndGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgUmFua0lzT25lKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgxLCBuZXcgaW50WzBdLlJhbmspO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgR2V0TGVuZ3RoV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDAsIG5ldyBpbnRbMF0uR2V0TGVuZ3RoKDApKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDEsIG5ld1tdIHsgXCJ4XCIgfS5HZXRMZW5ndGgoMCkpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMiwgbmV3W10geyBcInhcIiwgXCJ5XCIgfS5HZXRMZW5ndGgoMCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgR2V0TG93ZXJCb3VuZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMCwgbmV3IGludFswXS5HZXRMb3dlckJvdW5kKDApKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDAsIG5ld1tdIHsgXCJ4XCIgfS5HZXRMb3dlckJvdW5kKDApKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDAsIG5ld1tdIHsgXCJ4XCIsIFwieVwiIH0uR2V0TG93ZXJCb3VuZCgwKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBHZXRVcHBlckJvdW5kV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKC0xLCBuZXcgaW50WzBdLkdldFVwcGVyQm91bmQoMCkpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMCwgbmV3W10geyBcInhcIiB9LkdldFVwcGVyQm91bmQoMCkpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMSwgbmV3W10geyBcInhcIiwgXCJ5XCIgfS5HZXRVcHBlckJvdW5kKDApKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEdldHRpbmdWYWx1ZUJ5SW5kZXhXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJ4XCIsIG5ld1tdIHsgXCJ4XCIsIFwieVwiIH1bMF0pO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJ5XCIsIG5ld1tdIHsgXCJ4XCIsIFwieVwiIH1bMV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgR2V0VmFsdWVXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJ4XCIsIG5ld1tdIHsgXCJ4XCIsIFwieVwiIH0uR2V0VmFsdWUoMCkpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJ5XCIsIG5ld1tdIHsgXCJ4XCIsIFwieVwiIH0uR2V0VmFsdWUoMSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgU2V0dGluZ1ZhbHVlQnlJbmRleFdvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXcgc3RyaW5nWzJdO1xyXG4gICAgICAgICAgICBhcnJbMF0gPSBcInhcIjtcclxuICAgICAgICAgICAgYXJyWzFdID0gXCJ5XCI7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcInhcIiwgYXJyWzBdKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwieVwiLCBhcnJbMV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgU2V0VmFsdWVXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3IHN0cmluZ1syXTtcclxuICAgICAgICAgICAgYXJyLlNldFZhbHVlKFwieFwiLCAwKTtcclxuICAgICAgICAgICAgYXJyLlNldFZhbHVlKFwieVwiLCAxKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwieFwiLCBhcnJbMF0pO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJ5XCIsIGFyclsxXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBGb3JlYWNoV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKHZhciBzIGluIG5ld1tdIHsgXCJ4XCIsIFwieVwiIH0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcInh5XCIsIHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBDbG9uZVdvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IFwieFwiLCBcInlcIiB9O1xyXG4gICAgICAgICAgICB2YXIgYXJyMiA9IGFyci5DbG9uZSgpO1xyXG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UoYXJyID09IGFycjIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoYXJyMiwgYXJyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENvbmNhdFdvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IFwiYVwiLCBcImJcIiB9O1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRGVlcEVxdWFsKG5ld1tdIHsgXCJhXCIsIFwiYlwiLCBcImNcIiB9LCBhcnIuQ29uY2F0KFwiY1wiKSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVEZWVwRXF1YWwobmV3W10geyBcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiB9LCBhcnIuQ29uY2F0KFwiY1wiLCBcImRcIikpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRGVlcEVxdWFsKG5ld1tdIHsgXCJhXCIsIFwiYlwiIH0sIGFycik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBDb250YWluc1dvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IFwieFwiLCBcInlcIiB9O1xyXG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShTeXN0ZW0uQXJyYXlFeHRlbnNpb25zLkNvbnRhaW5zPHN0cmluZz4oYXJyLFwieFwiKSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5GYWxzZShTeXN0ZW0uQXJyYXlFeHRlbnNpb25zLkNvbnRhaW5zPHN0cmluZz4oYXJyLFwielwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBDb250YWluc1VzZXNFcXVhbHNNZXRob2QoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ1tdIGFyciA9IG5ld1tdIHsgbmV3IEMoMSksIG5ldyBDKDIpLCBuZXcgQygzKSB9O1xyXG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShTeXN0ZW0uQXJyYXlFeHRlbnNpb25zLkNvbnRhaW5zPGdsb2JhbDo6QnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkJyaWRnZUlzc3Vlcy5ONzcyLkM+KGFycixuZXcgQygyKSkpO1xyXG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UoU3lzdGVtLkFycmF5RXh0ZW5zaW9ucy5Db250YWluczxnbG9iYWw6OkJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5CcmlkZ2VJc3N1ZXMuTjc3Mi5DPihhcnIsbmV3IEMoNCkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFsbFdpdGhBcnJheUl0ZW1GaWx0ZXJDYWxsYmFja1dvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKFN5c3RlbS5MaW5xLkVudW1lcmFibGUuQWxsPGludD4obmV3W10geyAxLCAyLCAzIH0sKGdsb2JhbDo6U3lzdGVtLkZ1bmM8aW50LCBib29sPikoeCA9PiB4ID4gMCkpKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKFN5c3RlbS5MaW5xLkVudW1lcmFibGUuQWxsPGludD4obmV3W10geyAxLCAyLCAzIH0sKGdsb2JhbDo6U3lzdGVtLkZ1bmM8aW50LCBib29sPikoeCA9PiB4ID4gMSkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNsaWNlV2l0aG91dEVuZFdvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVEZWVwRXF1YWwobmV3W10geyBcImNcIiwgXCJkXCIgfSwgbmV3W10geyBcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiB9LlNsaWNlKDIpKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZURlZXBFcXVhbChuZXdbXSB7IFwiYlwiLCBcImNcIiB9LCBuZXdbXSB7IFwiYVwiLCBcImJcIiwgXCJjXCIsIFwiZFwiIH0uU2xpY2UoMSwgMykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgRm9yZWFjaFdpdGhBcnJheUl0ZW1DYWxsYmFja1dvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZyByZXN1bHQgPSBcIlwiO1xyXG5TeXN0ZW0uQXJyYXlFeHRlbnNpb25zLkZvckVhY2g8c3RyaW5nPiggICAgICAgICAgICBuZXdbXSB7IFwiYVwiLCBcImJcIiwgXCJjXCIgfSwoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uPHN0cmluZz4pKHMgPT4gcmVzdWx0ICs9IHMpKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwiYWJjXCIsIHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBJbmRleE9mV2l0aG91dFN0YXJ0SW5kZXhXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMSwgbmV3W10geyBcImFcIiwgXCJiXCIsIFwiY1wiLCBcImJcIiB9LkluZGV4T2YoXCJiXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEluZGV4T2ZXaXRob3V0U3RhcnRJbmRleFVzZXNFcXVhbHNNZXRob2QoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgbmV3IEMoMSksIG5ldyBDKDIpLCBuZXcgQygzKSB9O1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMSwgQXJyYXkuSW5kZXhPZjxnbG9iYWw6OkJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5CcmlkZ2VJc3N1ZXMuTjc3Mi5DPihhcnIsIG5ldyBDKDIpKSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgtMSwgQXJyYXkuSW5kZXhPZjxnbG9iYWw6OkJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5CcmlkZ2VJc3N1ZXMuTjc3Mi5DPihhcnIsIG5ldyBDKDQpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBJbmRleE9mV2l0aFN0YXJ0SW5kZXhXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMywgbmV3W10geyBcImFcIiwgXCJiXCIsIFwiY1wiLCBcImJcIiB9LkluZGV4T2YoXCJiXCIsIDIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEpvaW5XaXRob3V0RGVsaW1pdGVyV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwiYSxiLGMsYlwiLCBuZXdbXSB7IFwiYVwiLCBcImJcIiwgXCJjXCIsIFwiYlwiIH0uSm9pbihcIixcIikpO1xyXG5cclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwiYXxifGN8YlwiLCBuZXdbXSB7IFwiYVwiLCBcImJcIiwgXCJjXCIsIFwiYlwiIH0uSm9pbihcInxcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgUmV2ZXJzZVdvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IDEsIDMsIDQsIDEsIDMsIDIgfTtcclxuICAgICAgICAgICAgYXJyLlJldmVyc2UoKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKG5ld1tdIHsgMiwgMywgMSwgNCwgMywgMSB9LCBhcnIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgQW55V2l0aEFycmF5SXRlbUZpbHRlckNhbGxiYWNrV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUoU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5Bbnk8aW50PihuZXdbXSB7IDEsIDIsIDMsIDQgfSwoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxpbnQsIGJvb2w+KShpID0+IGkgPiAxKSkpO1xyXG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UoU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5Bbnk8aW50PihuZXdbXSB7IDEsIDIsIDMsIDQgfSwoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxpbnQsIGJvb2w+KShpID0+IGkgPiA1KSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgQmluYXJ5U2VhcmNoMVdvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IDEsIDIsIDMsIDMsIDQsIDUgfTtcclxuXHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgyLCBBcnJheS5CaW5hcnlTZWFyY2g8aW50PihhcnIsIDMpKTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUoQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyLCA2KSA8IDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgQmluYXJ5U2VhcmNoMldvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IDEsIDIsIDMsIDMsIDQsIDUgfTtcclxuXHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgzLCBBcnJheS5CaW5hcnlTZWFyY2g8aW50PihhcnIsIDMsIDIsIDMpKTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUoQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyLCAyLCAyLCA0KSA8IDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBjbGFzcyBUZXN0UmV2ZXJzZUNvbXBhcmVyIDogSUNvbXBhcmVyPGludD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHB1YmxpYyBpbnQgQ29tcGFyZShpbnQgeCwgaW50IHkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB4ID09IHkgPyAwIDogKHggPiB5ID8gLTEgOiAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgQmluYXJ5U2VhcmNoM1dvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IDEsIDIsIDMsIDMsIDQsIDUgfTtcclxuXHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgyLCBBcnJheS5CaW5hcnlTZWFyY2g8aW50PihhcnIsIDMsIG5ldyBUZXN0UmV2ZXJzZUNvbXBhcmVyKCkpKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKC0xLCBBcnJheS5CaW5hcnlTZWFyY2g8aW50PihhcnIsIDYsIG5ldyBUZXN0UmV2ZXJzZUNvbXBhcmVyKCkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEJpbmFyeVNlYXJjaDRXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyAxLCAyLCAzLCAzLCA0LCA1IH07XHJcblxyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMywgQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyLCAzLCAyLCAzLCBuZXcgVGVzdFJldmVyc2VDb21wYXJlcigpKSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKEFycmF5LkJpbmFyeVNlYXJjaDxpbnQ+KGFyciwgMywgMiwgNCwgbmV3IFRlc3RSZXZlcnNlQ29tcGFyZXIoKSkgPCAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEJpbmFyeVNlYXJjaEV4Y2VwdGlvbnNXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbnRbXSBhcnIxID0gbnVsbDtcclxuICAgICAgICAgICAgdmFyIGFycjIgPSBuZXdbXSB7IDEsIDIsIDMsIDMsIDQsIDUgfTtcclxuXHJcbiAgICAgICAgICAgIEFzc2VydC5UaHJvd3MoKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBBcnJheS5CaW5hcnlTZWFyY2g8aW50PihhcnIxLCAxKTsgfSkpO1xyXG4gICAgICAgICAgICBBc3NlcnQuVGhyb3dzKChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyMiwgLTEsIDEsIDEpOyB9KSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5UaHJvd3MoKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBBcnJheS5CaW5hcnlTZWFyY2g8aW50PihhcnIyLCAxLCA2LCAxKTsgfSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgU29ydFdpdGhEZWZhdWx0Q29tcGFyZVdvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IDEsIDYsIDYsIDQsIDIgfTtcclxuICAgICAgICAgICAgYXJyLkpzU29ydCgpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwobmV3W10geyAxLCAyLCA0LCA2LCA2IH0sIGFycik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBTb3J0MVdvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IDEsIDYsIDYsIDQsIDIgfTtcclxuICAgICAgICAgICAgQXJyYXkuU29ydDxpbnQ+KGFycik7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChuZXdbXSB7IDEsIDIsIDQsIDYsIDYgfSwgYXJyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNvcnQyV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgMSwgNiwgNiwgNCwgMiB9O1xyXG4gICAgICAgICAgICBBcnJheS5Tb3J0PGludD4oYXJyLCAyLCAzKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKG5ld1tdIHsgMSwgNiwgMiwgNCwgNiB9LCBhcnIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgU29ydDNXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyAxLCAyLCA2LCAzLCA2LCA3IH07XHJcbiAgICAgICAgICAgIEFycmF5LlNvcnQ8aW50PihhcnIsIDIsIDMsIG5ldyBUZXN0UmV2ZXJzZUNvbXBhcmVyKCkpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwobmV3W10geyAxLCAyLCA2LCA2LCAzLCA3IH0sIGFycik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBTb3J0NFdvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IDEsIDYsIDYsIDQsIDIgfTtcclxuICAgICAgICAgICAgQXJyYXkuU29ydDxpbnQ+KGFyciwgbmV3IFRlc3RSZXZlcnNlQ29tcGFyZXIoKSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChuZXdbXSB7IDYsIDYsIDQsIDIsIDEgfSwgYXJyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNvcnRFeGNlcHRpb25zV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW50W10gYXJyMSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBBc3NlcnQuVGhyb3dzKChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQXJyYXkuU29ydDxpbnQ+KGFycjEpOyB9KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBGb3JlYWNoV2hlbkNhc3RUb0lMaXN0V29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSUxpc3Q8c3RyaW5nPiBsaXN0ID0gbmV3W10geyBcInhcIiwgXCJ5XCIgfTtcclxuICAgICAgICAgICAgc3RyaW5nIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKHZhciBzIGluIGxpc3QpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcInh5XCIsIHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBJQ29sbGVjdGlvbkNvdW50V29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSUxpc3Q8c3RyaW5nPiBsID0gbmV3W10geyBcInhcIiwgXCJ5XCIsIFwielwiIH07XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgzLCBsLkNvdW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIElDb2xsZWN0aW9uQWRkV29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSUxpc3Q8c3RyaW5nPiBsID0gbmV3W10geyBcInhcIiwgXCJ5XCIsIFwielwiIH07XHJcbiAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8Tm90U3VwcG9ydGVkRXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IGwuQWRkKFwiYVwiKTsgfSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgSUNvbGxlY3Rpb25DbGVhcldvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIElMaXN0PHN0cmluZz4gbCA9IG5ld1tdIHsgXCJ4XCIsIFwieVwiLCBcInpcIiB9O1xyXG4gICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE5vdFN1cHBvcnRlZEV4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBsLkNsZWFyKCk7IH0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIElDb2xsZWN0aW9uQ29udGFpbnNXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJTGlzdDxzdHJpbmc+IGwgPSBuZXdbXSB7IFwieFwiLCBcInlcIiwgXCJ6XCIgfTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRydWUobC5Db250YWlucyhcInlcIikpO1xyXG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UobC5Db250YWlucyhcImFcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgSUNvbGxlY3Rpb25Db250YWluc1VzZXNFcXVhbHNNZXRob2QoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSUxpc3Q8Qz4gbCA9IG5ld1tdIHsgbmV3IEMoMSksIG5ldyBDKDIpLCBuZXcgQygzKSB9O1xyXG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShsLkNvbnRhaW5zKG5ldyBDKDIpKSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5GYWxzZShsLkNvbnRhaW5zKG5ldyBDKDQpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBJQ29sbGVjdGlvblJlbW92ZVdvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIElMaXN0PHN0cmluZz4gbCA9IG5ld1tdIHsgXCJ4XCIsIFwieVwiLCBcInpcIiB9O1xyXG4gICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE5vdFN1cHBvcnRlZEV4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBsLlJlbW92ZShcInlcIik7IH0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIElMaXN0SW5kZXhpbmdXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJTGlzdDxzdHJpbmc+IGwgPSBuZXdbXSB7IFwieFwiLCBcInlcIiwgXCJ6XCIgfTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwieVwiLCBsWzFdKTtcclxuICAgICAgICAgICAgbFsxXSA9IFwiYVwiO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwobmV3W10geyBcInhcIiwgXCJhXCIsIFwielwiIH0sIFN5c3RlbS5MaW5xLkVudW1lcmFibGUuVG9BcnJheTxzdHJpbmc+KGwpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0XVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIElMaXN0SW5kZXhPZldvcmtzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIElMaXN0PHN0cmluZz4gbCA9IG5ld1tdIHsgXCJ4XCIsIFwieVwiLCBcInpcIiB9O1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMSwgbC5JbmRleE9mKFwieVwiKSk7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgtMSwgbC5JbmRleE9mKFwiYVwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBJTGlzdEluZGV4T2ZVc2VzRXF1YWxzTWV0aG9kKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IG5ldyBDKDEpLCBuZXcgQygyKSwgbmV3IEMoMykgfTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDEsIEFycmF5LkluZGV4T2Y8Z2xvYmFsOjpCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQnJpZGdlSXNzdWVzLk43NzIuQz4oYXJyLCBuZXcgQygyKSkpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoLTEsIEFycmF5LkluZGV4T2Y8Z2xvYmFsOjpCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQnJpZGdlSXNzdWVzLk43NzIuQz4oYXJyLCBuZXcgQyg0KSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgcHVibGljIHZvaWQgSUxpc3RJbnNlcnRXb3JrcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJTGlzdDxzdHJpbmc+IGwgPSBuZXdbXSB7IFwieFwiLCBcInlcIiwgXCJ6XCIgfTtcclxuICAgICAgICAgICAgQXNzZXJ0LlRocm93czxOb3RTdXBwb3J0ZWRFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgbC5JbnNlcnQoMSwgXCJhXCIpOyB9KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdF1cclxuICAgICAgICBwdWJsaWMgdm9pZCBJTGlzdFJlbW92ZUF0V29ya3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSUxpc3Q8c3RyaW5nPiBsID0gbmV3W10geyBcInhcIiwgXCJ5XCIsIFwielwiIH07XHJcbiAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8Tm90U3VwcG9ydGVkRXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IGwuUmVtb3ZlQXQoMSk7IH0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0KEV4cGVjdGVkQ291bnQgPSAxMCldXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RVc2VDYXNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vVGhlc2UgYXJyYXlzIGRlcGVuZCBvbiBcInVzZVR5cGVkQXJyYXlcIiBicmlkZ2UuanNvbiBvcHRpb25cclxuICAgICAgICAgICAgdmFyIGJ5dGVBcnJheSA9IG5ldyBieXRlWzFdO1xyXG4gICAgICAgICAgICB2YXIgc2J5dGVBcnJheSA9IG5ldyBzYnl0ZVsyXTtcclxuICAgICAgICAgICAgdmFyIHNob3J0QXJyYXkgPSBuZXcgc2hvcnRbM107XHJcbiAgICAgICAgICAgIHZhciB1c2hvcnRBcnJheSA9IG5ldyB1c2hvcnRbNF07XHJcbiAgICAgICAgICAgIHZhciBpbnRBcnJheSA9IG5ldyBpbnRbNV07XHJcbiAgICAgICAgICAgIHZhciB1aW50QXJyYXkgPSBuZXcgdWludFs2XTtcclxuICAgICAgICAgICAgdmFyIGZsb2F0QXJyYXkgPSBuZXcgZmxvYXRbN107XHJcbiAgICAgICAgICAgIHZhciBkb3VibGVBcnJheSA9IG5ldyBkb3VibGVbOF07XHJcblxyXG4gICAgICAgICAgICAvL1RoZXNlIGFycmF5cyBkbyBub3QgZGVwZW5kIG9uIFwidXNlVHlwZWRBcnJheVwiIGJyaWRnZS5qc29uIG9wdGlvblxyXG4gICAgICAgICAgICB2YXIgc3RyaW5nQXJyYXkgPSBuZXcgc3RyaW5nWzldO1xyXG4gICAgICAgICAgICB2YXIgZGVjaW1hbEFycmF5ID0gbmV3IGRlY2ltYWxbMTBdO1xyXG5cclxuICAgICAgICAgICAgYnl0ZUFycmF5WzBdID0gMTtcclxuICAgICAgICAgICAgc2J5dGVBcnJheVswXSA9IDI7XHJcbiAgICAgICAgICAgIHNob3J0QXJyYXlbMF0gPSAzO1xyXG4gICAgICAgICAgICB1c2hvcnRBcnJheVswXSA9IDQ7XHJcbiAgICAgICAgICAgIGludEFycmF5WzBdID0gNTtcclxuICAgICAgICAgICAgdWludEFycmF5WzBdID0gNjtcclxuICAgICAgICAgICAgZmxvYXRBcnJheVswXSA9IDc7XHJcbiAgICAgICAgICAgIGRvdWJsZUFycmF5WzBdID0gODtcclxuXHJcbiAgICAgICAgICAgIHN0cmluZ0FycmF5WzBdID0gXCI5XCI7XHJcbiAgICAgICAgICAgIGRlY2ltYWxBcnJheVswXSA9IDEwbTtcclxuXHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgxLCBieXRlQXJyYXlbMF0sIFwiZ2V0IGJ5dGVBcnJheVswXVwiKTtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDIsIHNieXRlQXJyYXlbMF0sIFwiZ2V0IHNieXRlQXJyYXlbMF1cIik7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgzLCBzaG9ydEFycmF5WzBdLCBcImdldCBzaG9ydEFycmF5WzBdXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoNCwgdXNob3J0QXJyYXlbMF0sIFwiZ2V0IHVzaG9ydEFycmF5WzBdXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoNSwgaW50QXJyYXlbMF0sIFwiZ2V0IGludEFycmF5WzBdXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoNiwgdWludEFycmF5WzBdLCBcImdldCB1aW50QXJyYXlbMF1cIik7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCg3LCBmbG9hdEFycmF5WzBdLCBcImdldCBmbG9hdEFycmF5WzBdXCIpO1xyXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoOCwgZG91YmxlQXJyYXlbMF0sIFwiZ2V0IGRvdWJsZUFycmF5WzBdXCIpO1xyXG5cclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwiOVwiLCBzdHJpbmdBcnJheVswXSwgXCJnZXQgc3RyaW5nQXJyYXlbMF1cIik7XHJcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgxMG0sIGRlY2ltYWxBcnJheVswXSwgXCJnZXQgZGVjaW1hbEFycmF5WzBdXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsInVzaW5nIEJyaWRnZS5UZXN0Lk5Vbml0O1xyXG5cclxudXNpbmcgU3lzdGVtO1xyXG5cclxubmFtZXNwYWNlIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMlxyXG57XHJcbiAgICAvLyBCcmlkZ2VbIzEwOTJdXHJcbiAgICAvLyBcIm92ZXJmbG93TW9kZVwiOiAgXCJKYXZhc2NyaXB0XCIgYnJpZGdlLmpzb24gb3B0aW9uXHJcbiAgICBwdWJsaWMgY2xhc3MgQ2hlY2tlZFVuY2hlY2tlZFRlc3RzXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIEFzc2VydEVxdWFsKG9iamVjdCBleHBlY3RlZCwgb2JqZWN0IGFjdHVhbCwgc3RyaW5nIG1lc3NhZ2UgPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKGV4cGVjdGVkLlRvU3RyaW5nKCksIGFjdHVhbC5Ub1N0cmluZygpLCBtZXNzYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIG9iamVjdCBCeXBhc3Mob2JqZWN0IG8pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtDYXRlZ29yeShDb25zdGFudHMuTU9EVUxFX0NIRUNLRURfVU5DS0VDS0VEKV1cclxuICAgICAgICBbVGVzdEZpeHR1cmUoVGVzdE5hbWVGb3JtYXQgPSBcIkNoZWNrZWQgLSBcIiArIENvbnN0YW50cy5CQVRDSF9OQU1FICsgXCIgezB9XCIpXVxyXG4gICAgICAgIHB1YmxpYyBjbGFzcyBDaGVja2VkVGVzdHNcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFtUZXN0XVxyXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdEludDMyKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSBJbnQzMi5NYXhWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXggKyAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4MisrOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSArK21heDM7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gMiAqIG1heDsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gSW50MzIuTWluVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWluIC0gMTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbjEtLTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gLS1taW4yOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcHJlLS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IC1taW47IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciB1bmFyeSAtXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluMy0tKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLS1taW40KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtbWluKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgdW5hcnkgLVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0VUludDMyKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSBVSW50MzIuTWF4VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4ICsgMTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heDErKzsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gKyttYXgyOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IDIgKiBtYXg7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4MysrKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoKyttYXg0KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygyICogbWF4KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IFVJbnQzMi5NaW5WYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4gLSAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWluMS0tOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtLW1pbjI7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwcmUtLVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4gLSAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC0tbWluNCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBbVGVzdF1cclxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RMb25nKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSBsb25nLk1heFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heCArIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXgxKys7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9ICsrbWF4MjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAyICogbWF4OyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXggKyAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heDMrKyk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKCsrbWF4NCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoMiAqIG1heCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBsb25nLk1pblZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbiAtIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4xLS07IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IC0tbWluMjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHByZS0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtbWluOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgdW5hcnkgLVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4gLSAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC0tbWluNCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLW1pbik7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFtUZXN0XVxyXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdFVMb25nKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSB1bG9uZy5NYXhWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXggKyAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4MSsrOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSArK21heDI7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gMiAqIG1heDsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gdWxvbmcuTWluVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWluIC0gMTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbjEtLTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gLS1taW4yOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcHJlLS1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluIC0gMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW0NhdGVnb3J5KENvbnN0YW50cy5NT0RVTEVfQ0hFQ0tFRF9VTkNLRUNLRUQpXVxyXG4gICAgICAgIFtUZXN0Rml4dHVyZShUZXN0TmFtZUZvcm1hdCA9IFwiQ2hlY2tlZEluc2lkZVVuY2hlY2tlZCAtIFwiICsgQ29uc3RhbnRzLkJBVENIX05BTUUgKyBcIiB7MH1cIildXHJcbiAgICAgICAgcHVibGljIGNsYXNzIENoZWNrZWRJbnNpZGVVbmNoZWNrZWRUZXN0c1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0SW50MzIoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1bmNoZWNrZWRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gSW50MzIuTWF4VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXggKyAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heDIrKzsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9ICsrbWF4MzsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gMiAqIG1heDsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heDMrKyk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygyICogbWF4KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBJbnQzMi5NaW5WYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbiAtIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWluMS0tOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gLS1taW4yOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcHJlLS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtbWluOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgdW5hcnkgLVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluIC0gMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluMy0tKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC0tbWluNCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC1taW4pOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0VUludDMyKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdW5jaGVja2VkXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IFVJbnQzMi5NYXhWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heCArIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4MSsrOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gKyttYXgyOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAyICogbWF4OyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4MysrKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKCsrbWF4NCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IFVJbnQzMi5NaW5WYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbiAtIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWluMS0tOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gLS1taW4yOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcHJlLS1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFtUZXN0XVxyXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdExvbmcoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1bmNoZWNrZWRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gbG9uZy5NYXhWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heCArIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4MSsrOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gKyttYXgyOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAyICogbWF4OyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4MysrKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKCsrbWF4NCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IGxvbmcuTWluVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4gLSAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbjEtLTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IC0tbWluMjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHByZS0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gLW1pbjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtbWluKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgdW5hcnkgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFtUZXN0XVxyXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdFVMb25nKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdW5jaGVja2VkXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IHVsb25nLk1heFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4ICsgMTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXgxKys7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSArK21heDI7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IDIgKiBtYXg7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXggKyAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoKyttYXg0KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoMiAqIG1heCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gdWxvbmcuTWluVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4gLSAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbjEtLTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IC0tbWluMjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHByZS0tXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4gLSAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLS1taW40KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbQ2F0ZWdvcnkoQ29uc3RhbnRzLk1PRFVMRV9DSEVDS0VEX1VOQ0tFQ0tFRCldXHJcbiAgICAgICAgW1Rlc3RGaXh0dXJlKFRlc3ROYW1lRm9ybWF0ID0gXCJVbmNoZWNrZWQgLSBcIiArIENvbnN0YW50cy5CQVRDSF9OQU1FICsgXCIgezB9XCIpXVxyXG4gICAgICAgIHB1YmxpYyBjbGFzcyBVbmNoZWNrZWRUZXN0c1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0SW50MzIoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1bmNoZWNrZWRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gSW50MzIuTWF4VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDEgPSBtYXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXg0ID0gMiAqIG1heDtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDhcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjIxNDc0ODM2NDdcIiwgck1heDIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDhcIiwgck1heDMsIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMlwiLCByTWF4NCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjIxNDc0ODM2NDdcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4MysrKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKCsrbWF4NCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBJbnQzMi5NaW5WYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluMSA9IG1pbiAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4yID0gbWluMS0tO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluMyA9IC0tbWluMjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjQgPSAtbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ3XCIsIHJNaW4xLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OFwiLCByTWluMiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ3XCIsIHJNaW4zLCBcIlRocm91Z2ggaWRlbnRpZmllciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDhcIiwgck1pbjQsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ3XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ3XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC0tbWluNCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC1taW4pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFtUZXN0XVxyXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdFVJbnQzMigpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVuY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSBVSW50MzIuTWF4VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDEgPSBtYXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXg0ID0gMiAqIG1heDtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCByTWF4MSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NVwiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNYXgzLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NFwiLCByTWF4NCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NVwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk0XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBVSW50MzIuTWluVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluMiA9IG1pbjEtLTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW40ID0gLW1pbjtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NVwiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCByTWluMiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk1XCIsIHJNaW4zLCBcIlRocm91Z2ggaWRlbnRpZmllciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCByTWluNCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgdW5hcnkgLVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTVcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluIC0gMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NVwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC1taW4pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFtUZXN0XVxyXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdExvbmcoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1bmNoZWNrZWRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gbG9uZy5NYXhWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4MSA9IG1heCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgyID0gbWF4MSsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDQgPSAyICogbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCByTWF4MSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCByTWF4MywgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yXCIsIHJNYXg0LCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoKyttYXg0KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTJcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoMiAqIG1heCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IGxvbmcuTWluVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluMiA9IG1pbjEtLTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW40ID0gLW1pbjtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1pbjIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCByTWluMywgXCJUaHJvdWdoIGlkZW50aWZpZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIHJNaW40LCBcIlRocm91Z2ggaWRlbnRpZmllciB1bmFyeSAtXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4gLSAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtbWluKSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBbVGVzdF1cclxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RVTG9uZygpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVuY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSB1bG9uZy5NYXhWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4MSA9IG1heCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgyID0gbWF4MSsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDQgPSAyICogbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNYXgzLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTRcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heDMrKyksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKCsrbWF4NCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE0XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSB1bG9uZy5NaW5WYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluMSA9IG1pbiAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4yID0gbWluMS0tO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluMyA9IC0tbWluMjtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgck1pbjEsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgck1pbjIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgck1pbjMsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC0tcHJlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluIC0gMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLS1taW40KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW0NhdGVnb3J5KENvbnN0YW50cy5NT0RVTEVfQ0hFQ0tFRF9VTkNLRUNLRUQpXVxyXG4gICAgICAgIFtUZXN0Rml4dHVyZShUZXN0TmFtZUZvcm1hdCA9IFwiVW5jaGVja2VkSW5zaWRlQ2hlY2tlZCAtIFwiICsgQ29uc3RhbnRzLkJBVENIX05BTUUgKyBcIiB7MH1cIildXHJcbiAgICAgICAgcHVibGljIGNsYXNzIFVuY2hlY2tlZEluc2lkZUNoZWNrZWRUZXN0c1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0SW50MzIoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5jaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gSW50MzIuTWF4VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4MSA9IG1heCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgzID0gKyttYXgyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDQgPSAyICogbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDhcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ3XCIsIHJNYXgyLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OFwiLCByTWF4MywgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMlwiLCByTWF4NCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXggKyAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMjE0NzQ4MzY0N1wiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKCsrbWF4NCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMlwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygyICogbWF4KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IEludDMyLk1pblZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluMyA9IC0tbWluMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW40ID0gLW1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjIxNDc0ODM2NDdcIiwgck1pbjEsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OFwiLCByTWluMiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMjE0NzQ4MzY0N1wiLCByTWluMywgXCJUaHJvdWdoIGlkZW50aWZpZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OFwiLCByTWluNCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgdW5hcnkgLVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ3XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjIxNDc0ODM2NDdcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLS1taW40KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC1taW4pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBbVGVzdF1cclxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RVSW50MzIoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5jaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gVUludDMyLk1heFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDEgPSBtYXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDIgPSBtYXgxKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXg0ID0gMiAqIG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk1XCIsIHJNYXgyLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNYXgzLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTRcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXggKyAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NVwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoKyttYXg0KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTRcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoMiAqIG1heCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBVSW50MzIuTWluVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluMSA9IG1pbiAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluMiA9IG1pbjEtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4zID0gLS1taW4yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjQgPSAtbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NVwiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgck1pbjIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTVcIiwgck1pbjMsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC0tcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCByTWluNCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgdW5hcnkgLVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk1XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NVwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtbWluKSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0TG9uZygpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB1bmNoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSBsb25nLk1heFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDEgPSBtYXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDIgPSBtYXgxKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXg0ID0gMiAqIG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1heDMsIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTJcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4MysrKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTJcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoMiAqIG1heCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBsb25nLk1pblZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluMyA9IC0tbWluMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW40ID0gLW1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgck1pbjEsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCByTWluMiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCByTWluMywgXCJUaHJvdWdoIGlkZW50aWZpZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCByTWluNCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgdW5hcnkgLVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLS1taW40KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC1taW4pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBbVGVzdF1cclxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RVTG9uZygpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB1bmNoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSB1bG9uZy5NYXhWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgxID0gbWF4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgyID0gbWF4MSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4NCA9IDIgKiBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgck1heDIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgck1heDMsIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTRcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXggKyAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4MysrKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKCsrbWF4NCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIxODQ0Njc0NDA3MzcwOTU1MTYxNFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygyICogbWF4KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IHVsb25nLk1pblZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluMyA9IC0tbWluMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIHJNaW4xLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCByTWluMiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgck1pbjMsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC0tcHJlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLS1taW40KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtDYXRlZ29yeShDb25zdGFudHMuTU9EVUxFX0NIRUNLRURfVU5DS0VDS0VEKV1cclxuICAgICAgICBbVGVzdEZpeHR1cmUoVGVzdE5hbWVGb3JtYXQgPSBcIldpdGhOb1VuY2hlY2tlZEtleXdvcmQgLSBcIiArIENvbnN0YW50cy5CQVRDSF9OQU1FICsgXCIgezB9XCIpXVxyXG4gICAgICAgIHB1YmxpYyBjbGFzcyBXaXRoTm9VbmNoZWNrZWRLZXl3b3JkVGVzdHNcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFtUZXN0XVxyXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdEludDMyKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1heCA9IEludDMyLk1heFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcclxuICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByTWF4MSA9IG1heCArIDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgck1heDIgPSBtYXgxKys7XHJcbiAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XHJcbiAgICAgICAgICAgICAgICB2YXIgck1heDQgPSAyICogbWF4O1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjIxNDc0ODM2NDhcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMjE0NzQ4MzY0N1wiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjIxNDc0ODM2NDhcIiwgck1heDMsIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTRcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjIxNDc0ODM2NDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ3XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heDMrKyksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjIxNDc0ODM2NDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoKyttYXg0KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk0XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1pbiA9IEludDMyLk1pblZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XHJcbiAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcclxuICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByTWluMSA9IG1pbiAtIDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XHJcbiAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XHJcbiAgICAgICAgICAgICAgICB2YXIgck1pbjQgPSAtbWluO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ5XCIsIHJNaW4xLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ4XCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDlcIiwgck1pbjMsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC0tcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjIxNDc0ODM2NDhcIiwgck1pbjQsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ5XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluMy0tKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDlcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLS1taW40KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC1taW4pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFtUZXN0XVxyXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdFVJbnQzMigpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYXggPSBVSW50MzIuTWF4VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcclxuICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJNYXgxID0gbWF4ICsgMTtcclxuICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcclxuICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcclxuICAgICAgICAgICAgICAgIHZhciByTWF4NCA9IDIgKiBtYXg7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NlwiLCByTWF4MSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk1XCIsIHJNYXgyLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NlwiLCByTWF4MywgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiODU4OTkzNDU5MFwiLCByTWF4NCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NlwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXggKyAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTVcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4MysrKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NlwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjg1ODk5MzQ1OTBcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoMiAqIG1heCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWluID0gVUludDMyLk1pblZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XHJcbiAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcclxuICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByTWluMSA9IG1pbiAtIDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XHJcbiAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XHJcbiAgICAgICAgICAgICAgICB2YXIgck1pbjQgPSAtbWluO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0xXCIsIHJNaW4xLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgck1pbjIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMVwiLCByTWluMywgXCJUaHJvdWdoIGlkZW50aWZpZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCByTWluNCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgdW5hcnkgLVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTFcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluIC0gMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0xXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC0tbWluNCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtbWluKSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBbVGVzdF1cclxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RMb25nKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1heCA9IGxvbmcuTWF4VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcclxuICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJNYXgxID0gbWF4ICsgMTtcclxuICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcclxuICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcclxuICAgICAgICAgICAgICAgIHZhciByTWF4NCA9IDIgKiBtYXg7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIHJNYXgzLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMlwiLCByTWF4NCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heDMrKyksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKCsrbWF4NCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTJcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoMiAqIG1heCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWluID0gbG9uZy5NaW5WYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcclxuICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XHJcbiAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJNaW4yID0gbWluMS0tO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJNaW4zID0gLS1taW4yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJNaW40ID0gLW1pbjtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIHJNaW4xLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCByTWluMywgXCJUaHJvdWdoIGlkZW50aWZpZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1pbjQsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluIC0gMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC0tbWluNCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLW1pbiksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgdW5hcnkgLVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgW1Rlc3RdXHJcbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0VUxvbmcoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF4ID0gdWxvbmcuTWF4VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcclxuICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJNYXgxID0gbWF4ICsgMTtcclxuICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcclxuICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcclxuICAgICAgICAgICAgICAgIHZhciByTWF4NCA9IDIgKiBtYXg7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCByTWF4MSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgck1heDMsIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE0XCIsIHJNYXg0LCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4MysrKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE0XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1pbiA9IHVsb25nLk1pblZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XHJcbiAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcclxuICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByTWluMSA9IG1pbiAtIDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XHJcbiAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgck1pbjEsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCByTWluMiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIHJNaW4zLCBcIlRocm91Z2ggaWRlbnRpZmllciAtLXByZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluIC0gMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcclxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xyXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC0tbWluNCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXQp9Cg==
