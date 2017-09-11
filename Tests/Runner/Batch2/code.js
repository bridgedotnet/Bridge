/**
 * Bridge Test library - special tests with custom config options like useTypedArrays
 * @version 16.3.0
 * @author Object.NET, Inc.
 * @copyright Copyright 2008-2017 Object.NET, Inc.
 * @compiler Bridge.NET 16.3.0
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

    Bridge.define("Bridge.ClientTest.Batch2.BridgeIssues.N3075", {
        methods: {
            TestRawModifier: function () {
                var Apple = 1;
                Bridge.Test.NUnit.Assert.AreEqual(Apple, Apple);
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch2.BridgeIssues.N3075.SomeType", {
        $kind: "enum",
        statics: {
            fields: {
                Apple: "Apple"
            }
        },
        $utype: System.String
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJjb2RlLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJCcmlkZ2VJc3N1ZXMvTjEzODUuY3MiLCJCcmlkZ2VJc3N1ZXMvTjE0OTkuY3MiLCJCcmlkZ2VJc3N1ZXMvTjExMjIuY3MiLCJCcmlkZ2VJc3N1ZXMvTjEyMDQuY3MiLCJCcmlkZ2VJc3N1ZXMvTjMwNzUuY3MiLCJCcmlkZ2VJc3N1ZXMvTjc3Mi5jcyIsIkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5jcyJdLAogICJuYW1lcyI6IFsiIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7b0JBV1lBLFlBQWVBO29CQUNmQSw4QkFBWUE7Ozs7Ozs7Ozs7Z0JDRFpBO2dCQUNBQSxVQUFpQkE7Z0JBQ2pCQTtnQkFDQUE7Z0JBQ0FBLFNBQVlBOztnQkFFWkEsMkNBQXlCQSwyQ0FBT0E7Z0JBQ2hDQSw0Q0FBMEJBLDZDQUFNQTtnQkFDaENBLDRDQUEwQkE7Z0JBQzFCQSxnREFBOEJBLDZDQUFNQTtnQkFDcENBLGdEQUE4QkE7O2dCQUU5QkE7Z0JBQ0FBO2dCQUNBQSxTQUFZQTs7Z0JBRVpBLDRDQUEwQkEsZ0NBQU1BO2dCQUNoQ0EsNENBQTBCQSw2Q0FBTUE7Z0JBQ2hDQSw0Q0FBMEJBO2dCQUUxQkEsNENBQTBCQTtnQkFFMUJBLGdEQUE4QkEsZ0NBQU1BO2dCQUNwQ0EsZ0RBQThCQSxnREFBTUE7Z0JBQ3BDQSxnREFBOEJBO2dCQUM5QkEsZ0RBQThCQTs7Z0JBRTlCQTtnQkFDQUE7Z0JBQ0FBLFNBQVVBOztnQkFFVkEsMkNBQXlCQSxtQ0FBTUE7Z0JBQy9CQSwyQ0FBeUJBLGlJQUFNQTtnQkFDL0JBLDJDQUF5QkE7Z0JBQ3pCQSwyQ0FBeUJBLG1DQUFNQTtnQkFDL0JBLGdEQUE4QkEsaUlBQU1BO2dCQUNwQ0EsMkNBQXlCQTtnQkFDekJBLDJDQUF5QkEscUNBQVFBOzs7Ozs7Ozs7b0JDbENqQ0EsUUFBUUE7O29CQUVSQSxTQUFTQSxBQUFLQSxXQUFXQTtvQkFDekJBLGtDQUFn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c0RBQXNEQSxBQUFDQTs7OztvQkFNMUlBLFVBQVVBOztvQkFFVkEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7O29CQUVYQSxZQUFZQTtvQkFDWkEsWUFBWUE7b0JBQ1pBLFlBQVlBLENBQUVBO29CQUNkQSxZQUFZQSxxQkFBSUE7b0JBQ2hCQSxnRUFBZ0VBO29CQUNoRUEsbUZBQW1GQTtvQkFDbkZBLGdFQUFnRUE7b0JBQ2hFQSxtRkFBbUZBOztvQkFFbkZBLGdFQUFnRUEsc0RBQXNEQTtvQkFDdEhBLG1GQUFtRkEsc0RBQXNEQTtvQkFDeklBLGdFQUFnRUEsc0RBQXNEQSxDQUFFQTtvQkFDeEhBLG1GQUFtRkEsc0RBQXNEQSxxQkFBSUE7O29CQUU3SUEsVUFBVUE7O29CQUVWQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBO29CQUNYQSxXQUFXQTs7b0JBRVhBLFlBQVlBO29CQUNaQSxZQUFZQTtvQkFDWkEsWUFBWUEsQ0FBRUE7b0JBQ2RBLG1GQUFtRkE7b0JBQ25GQSxnRUFBZ0VBO29CQUNoRUEsbUZBQW1GQTs7b0JBRW5GQSxtRkFBbUZBLHNEQUFzREE7b0JBQ3pJQSxnRUFBZ0VBLHNEQUFzREE7b0JBQ3RIQSxtRkFBbUZBLHNEQUFzREEsQ0FBRUEiLAogICJzb3VyY2VzQ29udGVudCI6IFsidXNpbmcgQnJpZGdlLlRlc3QuTlVuaXQ7XG5cbm5hbWVzcGFjZSBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQnJpZGdlSXNzdWVzXG57XG4gICAgW0NhdGVnb3J5KENvbnN0YW50cy5NT0RVTEVfSVNTVUVTKV1cbiAgICBbVGVzdEZpeHR1cmUoVGVzdE5hbWVGb3JtYXQgPSBcIiMxMzg1IC0gXCIgKyBDb25zdGFudHMuQkFUQ0hfTkFNRSArIFwiIHswfVwiKV1cbiAgICBwdWJsaWMgY2xhc3MgQnJpZGdlMTM4NVxuICAgIHtcbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0SXNUeXBlZEFycmF5Rm9yQnl0ZSgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9iamVjdCB2YWx1ZSA9IG5ldyBieXRlWzNdO1xuICAgICAgICAgICAgQXNzZXJ0LlRydWUodmFsdWUgaXMgYnl0ZVtdKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJ1c2luZyBCcmlkZ2UuVGVzdC5OVW5pdDtcblxubmFtZXNwYWNlIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5CcmlkZ2VJc3N1ZXNcbntcbiAgICBbQ2F0ZWdvcnkoQ29uc3RhbnRzLk1PRFVMRV9JU1NVRVMpXVxuICAgIFtUZXN0Rml4dHVyZShUZXN0TmFtZUZvcm1hdCA9IFwiIzE0OTkgLSBcIiArIENvbnN0YW50cy5CQVRDSF9OQU1FICsgXCIgezB9XCIpXVxuICAgIHB1YmxpYyBjbGFzcyBCcmlkZ2UxNDk5XG4gICAge1xuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgVGVzdE9iamVjdFN0cmluZ0NvYWxlc2NlV29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICBvYmplY3QgZGVmID0gMTtcbiAgICAgICAgICAgIEJyaWRnZTE0OTkgYXBwID0gbnVsbDtcbiAgICAgICAgICAgIG9iamVjdCBvMSA9IFwiXCI7XG4gICAgICAgICAgICBvYmplY3QgbzIgPSBcInRlc3RcIjtcbiAgICAgICAgICAgIG9iamVjdCBvMyA9IG51bGw7XG5cbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbCgxLCBhcHAgPz8gZGVmKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbChcIlwiLCBvMSA/PyBvMik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoXCJcIiwgbzEgPz8gXCJ0ZXN0XCIpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKFwidGVzdFwiLCBvMyA/PyBvMik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoXCJ0ZXN0XCIsIG8zID8/IFwidGVzdFwiKTtcblxuICAgICAgICAgICAgc3RyaW5nIHMxID0gXCJcIjtcbiAgICAgICAgICAgIHN0cmluZyBzMiA9IFwidGVzdFwiO1xuICAgICAgICAgICAgc3RyaW5nIHMzID0gbnVsbDtcblxuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKFwiXCIsIHMxID8/IHMyKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbChcIlwiLCBzMSA/PyBvMik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoXCJcIiwgczEgPz8gXCJ0ZXN0XCIpO1xuI3ByYWdtYSB3YXJuaW5nIGRpc2FibGUgMTYyXG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoXCJcIiwgXCJcIiA/PyBcInRlc3RcIik7XG4jcHJhZ21hIHdhcm5pbmcgcmVzdG9yZSAxNjJcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbChcInRlc3RcIiwgczMgPz8gczIpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKFwidGVzdFwiLCBzMyA/PyBvMik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoXCJ0ZXN0XCIsIHMzID8/IFwidGVzdFwiKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbChcInRlc3RcIiwgbnVsbCA/PyBcInRlc3RcIik7XG5cbiAgICAgICAgICAgIGludD8gaTEgPSAwO1xuICAgICAgICAgICAgaW50PyBpMiA9IDE7XG4gICAgICAgICAgICBpbnQ/IGkzID0gbnVsbDtcblxuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKDAsIGkxID8/IGkyKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbCgwLCBpMSA/PyBvMik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoMCwgaTEgPz8gMSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoMSwgaTMgPz8gaTIpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKFwidGVzdFwiLCBpMyA/PyBvMik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoMSwgaTMgPz8gMSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoMSwgbnVsbCA/PyBpMik7XG4gICAgICAgIH1cbiAgICB9XG59IiwidXNpbmcgQnJpZGdlLlRlc3QuTlVuaXQ7XG5cbnVzaW5nIFN5c3RlbTtcblxubmFtZXNwYWNlIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5CcmlkZ2VJc3N1ZXNcbntcbiAgICAvLyBCcmlkZ2VbIzExMjJdXG4gICAgW0NhdGVnb3J5KENvbnN0YW50cy5NT0RVTEVfSVNTVUVTKV1cbiAgICBbVGVzdEZpeHR1cmUoVGVzdE5hbWVGb3JtYXQgPSBcIiMxMTIyIC0gXCIgKyBDb25zdGFudHMuQkFUQ0hfTkFNRSArIFwiIHswfVwiKV1cbiAgICBwdWJsaWMgY2xhc3MgTjExMjJcbiAgICB7XG4gICAgICAgIFtUZXN0KEV4cGVjdGVkQ291bnQgPSA0KV1cbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RDbGlwcGluZ0luSmF2YVNjcmlwdE92ZXJmbG93TW9kZSgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciB4ID0gZG91YmxlLk1heFZhbHVlO1xuXG4gICAgICAgICAgICB2YXIgeTEgPSAoaW50KU1hdGguRmxvb3IoeCAvIDAuMik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoRG91YmxlLlBvc2l0aXZlSW5maW5pdHksIHkxLCBcImludFwiKTtcblxuICAgICAgICAgICAgdmFyIHkyID0gKHVpbnQpTWF0aC5GbG9vcih4IC8gMC4yKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChEb3VibGUuUG9zaXRpdmVJbmZpbml0eSwgeTIsIFwidWludFwiKTtcblxuICAgICAgICAgICAgdmFyIHoxID0gKGxvbmcpTWF0aC5GbG9vcih4IC8gMC4yKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChEb3VibGUuUG9zaXRpdmVJbmZpbml0eSwgejEsIFwibG9uZ1wiKTtcblxuICAgICAgICAgICAgdmFyIHoyID0gKHVsb25nKU1hdGguRmxvb3IoeCAvIDAuMik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoRG91YmxlLlBvc2l0aXZlSW5maW5pdHksIHoyLCBcInVsb25nXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3QoRXhwZWN0ZWRDb3VudCA9IDQpXVxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdEludGVnZXJEaXZpc2lvbkluSmF2YVNjcmlwdE92ZXJmbG93TW9kZSgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciB4ID0gMS4xO1xuXG4gICAgICAgICAgICBpbnQgeTEgPSAoaW50KSgxIC8geCk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCIwLjkwOTA5MDkwOTA5MDkwOTFcIiwgeTEuVG9TdHJpbmcoKSwgXCJpbnRcIik7XG5cbiAgICAgICAgICAgIHVpbnQgeTIgPSAodWludCkoMSAvIHgpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwiMC45MDkwOTA5MDkwOTA5MDkxXCIsIHkyLlRvU3RyaW5nKCksIFwidWludFwiKTtcblxuICAgICAgICAgICAgbG9uZyB6MSA9IChsb25nKSgxIC8geCk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCIwLjkwOTA5MDkwOTA5MDkwOTFcIiwgejEuVG9TdHJpbmcoKSwgXCJsb25nXCIpO1xuXG4gICAgICAgICAgICB1bG9uZyB6MiA9ICh1bG9uZykoMSAvIHgpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwiMC45MDkwOTA5MDkwOTA5MDkxXCIsIHoyLlRvU3RyaW5nKCksIFwidWxvbmdcIik7XG4gICAgICAgIH1cbiAgICB9XG59IiwidXNpbmcgQnJpZGdlLlRlc3QuTlVuaXQ7XG5cbm5hbWVzcGFjZSBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQnJpZGdlSXNzdWVzXG57XG4gICAgLy8gQnJpZGdlWyMxMjA0XVxuICAgIFtDYXRlZ29yeShDb25zdGFudHMuTU9EVUxFX0lTU1VFUyldXG4gICAgW1Rlc3RGaXh0dXJlKFRlc3ROYW1lRm9ybWF0ID0gXCIjMTIwNCAtIFwiICsgQ29uc3RhbnRzLkJBVENIX05BTUUgKyBcIiB7MH1cIildXG4gICAgcHVibGljIGNsYXNzIE4xMjA0XG4gICAge1xuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RTdHJpY3ROdWxsQ2hlY2tzT3B0aW9uRm9yTnVsbHMoKVxuICAgICAgICB7XG4gICAgICAgICAgICBvYmplY3QgdGVtcCA9IG5ldyBvYmplY3QoKTtcbiAgICAgICAgICAgIG9iamVjdCB0ZW1wMSA9IHRlbXA7XG4gICAgICAgICAgICBvYmplY3QgdGVtcDIgPSBuZXcgb2JqZWN0KCk7XG4gICAgICAgICAgICBsb25nIGwgPSA1TDtcbiAgICAgICAgICAgIG9iamVjdCBvbCA9IDVMO1xuICAgICAgICAgICAgb2JqZWN0IG9pID0gNTtcbiAgICAgICAgICAgIG9iamVjdCB2YXJOdWxsID0gbnVsbDtcbiAgICAgICAgICAgIG9iamVjdCB2YXJVbmRlZmluZWQgPSB0ZW1wW1widGhpcy1wcm9wLXVuZGVmaW5lZFwiXTtcblxuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKHZhck51bGwgPT0gdmFyVW5kZWZpbmVkLCBcInZhck51bGwgPT0gdmFyVW5kZWZpbmVkXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LlRydWUodmFyTnVsbCA9PSBudWxsLCBcInZhck51bGwgPT0gbnVsbFwiKTtcbiAgICAgICAgICAgIEFzc2VydC5GYWxzZSh2YXJVbmRlZmluZWQgPT0gbnVsbCwgXCJ2YXJVbmRlZmluZWQgPT0gbnVsbFwiKTtcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKFNjcmlwdC5VbmRlZmluZWQgPT0gdmFyVW5kZWZpbmVkLCBcIlNjcmlwdC5VbmRlZmluZWQgPT0gdmFyVW5kZWZpbmVkXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LlRydWUodGVtcCA9PSB0ZW1wMSwgXCJ0ZW1wID09IHRlbXAxXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKHRlbXAgPT0gdGVtcDIsIFwidGVtcCA9PSB0ZW1wMlwiKTtcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKGwgPT0gNSwgXCJsID09IDVcIik7XG4gICAgICAgICAgICBBc3NlcnQuRmFsc2Uob2wgPT0gb2ksIFwib2wgPT0gb2lcIik7XG5cbiAgICAgICAgICAgIEFzc2VydC5GYWxzZSh2YXJVbmRlZmluZWQgPT0gdmFyTnVsbCwgXCJ2YXJVbmRlZmluZWQgPT0gdmFyTnVsbFwiKTtcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKG51bGwgPT0gdmFyTnVsbCwgXCJudWxsID09IHZhck51bGxcIik7XG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UobnVsbCA9PSB2YXJVbmRlZmluZWQsIFwibnVsbCA9PSB2YXJVbmRlZmluZWRcIik7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZSh2YXJVbmRlZmluZWQgPT0gU2NyaXB0LlVuZGVmaW5lZCwgXCJ2YXJVbmRlZmluZWQgPT0gU2NyaXB0LlVuZGVmaW5lZFwiKTtcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKHRlbXAxID09IHRlbXAsIFwidGVtcDEgPT0gdGVtcFwiKTtcbiAgICAgICAgICAgIEFzc2VydC5GYWxzZSh0ZW1wMiA9PSB0ZW1wLCBcInRlbXAyID09IHRlbXBcIik7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZSg1ID09IGwsIFwiNSA9PSBsXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKG9pID09IG9sLCBcIm9pID09IG9sXCIpO1xuICAgICAgICB9XG4gICAgfVxufSIsInVzaW5nIEJyaWRnZS5UZXN0Lk5Vbml0O1xudXNpbmcgU3lzdGVtO1xudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zO1xudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XG51c2luZyBTeXN0ZW0uTGlucTtcblxubmFtZXNwYWNlIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5CcmlkZ2VJc3N1ZXNcbntcbiAgICAvLyBCcmlkZ2VbIzMwNzVdXG4gICAgLy8gcmVwcm9kdWNpYWJsZSBpZiBzb3VyY2UgbWFwIGdlbmVyYXRpb24gaXMgZW5hYmxlZFxuICAgIFtDYXRlZ29yeShDb25zdGFudHMuTU9EVUxFX0lTU1VFUyldXG4gICAgW1Rlc3RGaXh0dXJlKFRlc3ROYW1lRm9ybWF0ID0gXCIjMzA3NSAtIFwiICsgQ29uc3RhbnRzLkJBVENIX05BTUUgKyBcIiB7MH1cIildXG4gICAgcHVibGljIGNsYXNzIE4zMDc1XG4gICAge1xuICAgICAgICBbRW51bShFbWl0LlN0cmluZ05hbWVQcmVzZXJ2ZUNhc2UpXVxuICAgICAgICBwdWJsaWMgZW51bSBTb21lVHlwZVxuICAgICAgICB7XG4gICAgICAgICAgICBBcHBsZVxuICAgICAgICB9XG5cbiAgICAgICAgW1RlbXBsYXRlKFwiezA6cmF3fVwiKV1cbiAgICAgICAgcHVibGljIGV4dGVybiBzdGF0aWMgaW50IFRlc3QoU29tZVR5cGUgZWxlbWVudFR5cGUpO1xuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBUZXN0UmF3TW9kaWZpZXIoKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgQXBwbGUgPSAxO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKEFwcGxlLCBUZXN0KFNvbWVUeXBlLkFwcGxlKSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwidXNpbmcgQnJpZGdlLlRlc3QuTlVuaXQ7XG51c2luZyBTeXN0ZW07XG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnM7XG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcbnVzaW5nIFN5c3RlbS5MaW5xO1xuXG5uYW1lc3BhY2UgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkJyaWRnZUlzc3Vlc1xue1xuICAgIC8vIEJyaWRnZVsjNzcyXVxuICAgIC8vIFwidXNlVHlwZWRBcnJheVwiIGJyaWRnZS5qc29uIG9wdGlvbiBpcyB0cnVlIGluIHRoaXMgcHJvamVjdFxuICAgIFtDYXRlZ29yeShDb25zdGFudHMuTU9EVUxFX0lTU1VFUyldXG4gICAgW1Rlc3RGaXh0dXJlKFRlc3ROYW1lRm9ybWF0ID0gXCIjNzcyIC0gXCIgKyBDb25zdGFudHMuQkFUQ0hfTkFNRSArIFwiIHswfVwiKV1cbiAgICBwdWJsaWMgY2xhc3MgTjc3MlxuICAgIHtcbiAgICAgICAgcHJpdmF0ZSBjbGFzcyBDXG4gICAgICAgIHtcbiAgICAgICAgICAgIHB1YmxpYyByZWFkb25seSBpbnQgaTtcblxuICAgICAgICAgICAgcHVibGljIEMoaW50IGkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5pID0gaTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHVibGljIG92ZXJyaWRlIGJvb2wgRXF1YWxzKG9iamVjdCBvKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBvIGlzIEMgJiYgaSA9PSAoKEMpbykuaTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHVibGljIG92ZXJyaWRlIGludCBHZXRIYXNoQ29kZSgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgVHlwZVByb3BlcnRpZXNBcmVDb3JyZWN0KClcbiAgICAgICAge1xuICAgICAgICAgICAgb2JqZWN0IGFyciA9IG5ld1tdIHsgMSwgMiwgMyB9O1xuICAgICAgICAgICAgQXNzZXJ0LlRydWUoYXJyIGlzIEFycmF5LCBcImlzIEFycmF5IHNob3VsZCBiZSB0cnVlXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LlRydWUoYXJyIGlzIGludFtdLCBcImlzIGludFtdIHNob3VsZCBiZSB0cnVlXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LlRydWUoYXJyIGlzIElDb2xsZWN0aW9uLCBcImlzIElDb2xsZWN0aW9uIHNob3VsZCBiZSB0cnVlXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LlRydWUoYXJyIGlzIElFbnVtZXJhYmxlLCBcImlzIElFbnVtZXJhYmxlIHNob3VsZCBiZSB0cnVlXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LlRydWUoYXJyIGlzIElDbG9uZWFibGUsIFwiaXMgSUNsb25lYWJsZSBzaG91bGQgYmUgdHJ1ZVwiKTtcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKGFyciBpcyBJQ29sbGVjdGlvbjxpbnQ+LCBcImlzIElDb2xsZWN0aW9uPGludD4gc2hvdWxkIGJlIHRydWVcIik7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShhcnIgaXMgSUVudW1lcmFibGU8aW50PiwgXCJpcyBJRW51bWVyYWJsZTxpbnQ+IHNob3VsZCBiZSB0cnVlXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LlRydWUoYXJyIGlzIElMaXN0PGludD4sIFwiaXMgSUxpc3Q8aW50PiBzaG91bGQgYmUgdHJ1ZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBMZW5ndGhXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgwLCBuZXcgaW50WzBdLkxlbmd0aCk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMSwgbmV3W10geyBcInhcIiB9Lkxlbmd0aCk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMiwgbmV3W10geyBcInhcIiwgXCJ5XCIgfS5MZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIFJhbmtJc09uZSgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgxLCBuZXcgaW50WzBdLlJhbmspO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIEdldExlbmd0aFdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDAsIG5ldyBpbnRbMF0uR2V0TGVuZ3RoKDApKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgxLCBuZXdbXSB7IFwieFwiIH0uR2V0TGVuZ3RoKDApKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgyLCBuZXdbXSB7IFwieFwiLCBcInlcIiB9LkdldExlbmd0aCgwKSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgR2V0TG93ZXJCb3VuZCgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgwLCBuZXcgaW50WzBdLkdldExvd2VyQm91bmQoMCkpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDAsIG5ld1tdIHsgXCJ4XCIgfS5HZXRMb3dlckJvdW5kKDApKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgwLCBuZXdbXSB7IFwieFwiLCBcInlcIiB9LkdldExvd2VyQm91bmQoMCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIEdldFVwcGVyQm91bmRXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgtMSwgbmV3IGludFswXS5HZXRVcHBlckJvdW5kKDApKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgwLCBuZXdbXSB7IFwieFwiIH0uR2V0VXBwZXJCb3VuZCgwKSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMSwgbmV3W10geyBcInhcIiwgXCJ5XCIgfS5HZXRVcHBlckJvdW5kKDApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBHZXR0aW5nVmFsdWVCeUluZGV4V29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJ4XCIsIG5ld1tdIHsgXCJ4XCIsIFwieVwiIH1bMF0pO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwieVwiLCBuZXdbXSB7IFwieFwiLCBcInlcIiB9WzFdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBHZXRWYWx1ZVdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwieFwiLCBuZXdbXSB7IFwieFwiLCBcInlcIiB9LkdldFZhbHVlKDApKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcInlcIiwgbmV3W10geyBcInhcIiwgXCJ5XCIgfS5HZXRWYWx1ZSgxKSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgU2V0dGluZ1ZhbHVlQnlJbmRleFdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGFyciA9IG5ldyBzdHJpbmdbMl07XG4gICAgICAgICAgICBhcnJbMF0gPSBcInhcIjtcbiAgICAgICAgICAgIGFyclsxXSA9IFwieVwiO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwieFwiLCBhcnJbMF0pO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwieVwiLCBhcnJbMV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIFNldFZhbHVlV29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3IHN0cmluZ1syXTtcbiAgICAgICAgICAgIGFyci5TZXRWYWx1ZShcInhcIiwgMCk7XG4gICAgICAgICAgICBhcnIuU2V0VmFsdWUoXCJ5XCIsIDEpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwieFwiLCBhcnJbMF0pO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwieVwiLCBhcnJbMV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIEZvcmVhY2hXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN0cmluZyByZXN1bHQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yZWFjaCAodmFyIHMgaW4gbmV3W10geyBcInhcIiwgXCJ5XCIgfSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcInh5XCIsIHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgQ2xvbmVXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IFwieFwiLCBcInlcIiB9O1xuICAgICAgICAgICAgdmFyIGFycjIgPSBhcnIuQ2xvbmUoKTtcbiAgICAgICAgICAgIEFzc2VydC5GYWxzZShhcnIgPT0gYXJyMik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoYXJyMiwgYXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBDb25jYXRXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IFwiYVwiLCBcImJcIiB9O1xuICAgICAgICAgICAgQXNzZXJ0LkFyZURlZXBFcXVhbChuZXdbXSB7IFwiYVwiLCBcImJcIiwgXCJjXCIgfSwgYXJyLkNvbmNhdChcImNcIikpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZURlZXBFcXVhbChuZXdbXSB7IFwiYVwiLCBcImJcIiwgXCJjXCIsIFwiZFwiIH0sIGFyci5Db25jYXQoXCJjXCIsIFwiZFwiKSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRGVlcEVxdWFsKG5ld1tdIHsgXCJhXCIsIFwiYlwiIH0sIGFycik7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgQ29udGFpbnNXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IFwieFwiLCBcInlcIiB9O1xuICAgICAgICAgICAgQXNzZXJ0LlRydWUoU3lzdGVtLkFycmF5RXh0ZW5zaW9ucy5Db250YWluczxzdHJpbmc+KGFycixcInhcIikpO1xuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKFN5c3RlbS5BcnJheUV4dGVuc2lvbnMuQ29udGFpbnM8c3RyaW5nPihhcnIsXCJ6XCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBDb250YWluc1VzZXNFcXVhbHNNZXRob2QoKVxuICAgICAgICB7XG4gICAgICAgICAgICBDW10gYXJyID0gbmV3W10geyBuZXcgQygxKSwgbmV3IEMoMiksIG5ldyBDKDMpIH07XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShTeXN0ZW0uQXJyYXlFeHRlbnNpb25zLkNvbnRhaW5zPGdsb2JhbDo6QnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkJyaWRnZUlzc3Vlcy5ONzcyLkM+KGFycixuZXcgQygyKSkpO1xuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKFN5c3RlbS5BcnJheUV4dGVuc2lvbnMuQ29udGFpbnM8Z2xvYmFsOjpCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQnJpZGdlSXNzdWVzLk43NzIuQz4oYXJyLG5ldyBDKDQpKSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgQWxsV2l0aEFycmF5SXRlbUZpbHRlckNhbGxiYWNrV29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLkFsbDxpbnQ+KG5ld1tdIHsgMSwgMiwgMyB9LChnbG9iYWw6OlN5c3RlbS5GdW5jPGludCwgYm9vbD4pKHggPT4geCA+IDApKSk7XG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UoU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5BbGw8aW50PihuZXdbXSB7IDEsIDIsIDMgfSwoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxpbnQsIGJvb2w+KSh4ID0+IHggPiAxKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIFNsaWNlV2l0aG91dEVuZFdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgQXNzZXJ0LkFyZURlZXBFcXVhbChuZXdbXSB7IFwiY1wiLCBcImRcIiB9LCBuZXdbXSB7IFwiYVwiLCBcImJcIiwgXCJjXCIsIFwiZFwiIH0uU2xpY2UoMikpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZURlZXBFcXVhbChuZXdbXSB7IFwiYlwiLCBcImNcIiB9LCBuZXdbXSB7IFwiYVwiLCBcImJcIiwgXCJjXCIsIFwiZFwiIH0uU2xpY2UoMSwgMykpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIEZvcmVhY2hXaXRoQXJyYXlJdGVtQ2FsbGJhY2tXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN0cmluZyByZXN1bHQgPSBcIlwiO1xuU3lzdGVtLkFycmF5RXh0ZW5zaW9ucy5Gb3JFYWNoPHN0cmluZz4oICAgICAgICAgICAgbmV3W10geyBcImFcIiwgXCJiXCIsIFwiY1wiIH0sKGdsb2JhbDo6U3lzdGVtLkFjdGlvbjxzdHJpbmc+KShzID0+IHJlc3VsdCArPSBzKSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJhYmNcIiwgcmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBJbmRleE9mV2l0aG91dFN0YXJ0SW5kZXhXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgxLCBuZXdbXSB7IFwiYVwiLCBcImJcIiwgXCJjXCIsIFwiYlwiIH0uSW5kZXhPZihcImJcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIEluZGV4T2ZXaXRob3V0U3RhcnRJbmRleFVzZXNFcXVhbHNNZXRob2QoKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyBuZXcgQygxKSwgbmV3IEMoMiksIG5ldyBDKDMpIH07XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMSwgQXJyYXkuSW5kZXhPZjxnbG9iYWw6OkJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5CcmlkZ2VJc3N1ZXMuTjc3Mi5DPihhcnIsIG5ldyBDKDIpKSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoLTEsIEFycmF5LkluZGV4T2Y8Z2xvYmFsOjpCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQnJpZGdlSXNzdWVzLk43NzIuQz4oYXJyLCBuZXcgQyg0KSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIEluZGV4T2ZXaXRoU3RhcnRJbmRleFdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDMsIG5ld1tdIHsgXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJiXCIgfS5JbmRleE9mKFwiYlwiLCAyKSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgSm9pbldpdGhvdXREZWxpbWl0ZXJXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcImEsYixjLGJcIiwgbmV3W10geyBcImFcIiwgXCJiXCIsIFwiY1wiLCBcImJcIiB9LkpvaW4oXCIsXCIpKTtcblxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwiYXxifGN8YlwiLCBuZXdbXSB7IFwiYVwiLCBcImJcIiwgXCJjXCIsIFwiYlwiIH0uSm9pbihcInxcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIFJldmVyc2VXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IDEsIDMsIDQsIDEsIDMsIDIgfTtcbiAgICAgICAgICAgIGFyci5SZXZlcnNlKCk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwobmV3W10geyAyLCAzLCAxLCA0LCAzLCAxIH0sIGFycik7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgQW55V2l0aEFycmF5SXRlbUZpbHRlckNhbGxiYWNrV29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLkFueTxpbnQ+KG5ld1tdIHsgMSwgMiwgMywgNCB9LChnbG9iYWw6OlN5c3RlbS5GdW5jPGludCwgYm9vbD4pKGkgPT4gaSA+IDEpKSk7XG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UoU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5Bbnk8aW50PihuZXdbXSB7IDEsIDIsIDMsIDQgfSwoZ2xvYmFsOjpTeXN0ZW0uRnVuYzxpbnQsIGJvb2w+KShpID0+IGkgPiA1KSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIEJpbmFyeVNlYXJjaDFXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IDEsIDIsIDMsIDMsIDQsIDUgfTtcblxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDIsIEFycmF5LkJpbmFyeVNlYXJjaDxpbnQ+KGFyciwgMykpO1xuICAgICAgICAgICAgQXNzZXJ0LlRydWUoQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyLCA2KSA8IDApO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIEJpbmFyeVNlYXJjaDJXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IDEsIDIsIDMsIDMsIDQsIDUgfTtcblxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDMsIEFycmF5LkJpbmFyeVNlYXJjaDxpbnQ+KGFyciwgMywgMiwgMykpO1xuICAgICAgICAgICAgQXNzZXJ0LlRydWUoQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyLCAyLCAyLCA0KSA8IDApO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBjbGFzcyBUZXN0UmV2ZXJzZUNvbXBhcmVyIDogSUNvbXBhcmVyPGludD5cbiAgICAgICAge1xuICAgICAgICAgICAgcHVibGljIGludCBDb21wYXJlKGludCB4LCBpbnQgeSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geCA9PSB5ID8gMCA6ICh4ID4geSA/IC0xIDogMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgQmluYXJ5U2VhcmNoM1dvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgMSwgMiwgMywgMywgNCwgNSB9O1xuXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMiwgQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyLCAzLCBuZXcgVGVzdFJldmVyc2VDb21wYXJlcigpKSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoLTEsIEFycmF5LkJpbmFyeVNlYXJjaDxpbnQ+KGFyciwgNiwgbmV3IFRlc3RSZXZlcnNlQ29tcGFyZXIoKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIEJpbmFyeVNlYXJjaDRXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IDEsIDIsIDMsIDMsIDQsIDUgfTtcblxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDMsIEFycmF5LkJpbmFyeVNlYXJjaDxpbnQ+KGFyciwgMywgMiwgMywgbmV3IFRlc3RSZXZlcnNlQ29tcGFyZXIoKSkpO1xuICAgICAgICAgICAgQXNzZXJ0LlRydWUoQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyLCAzLCAyLCA0LCBuZXcgVGVzdFJldmVyc2VDb21wYXJlcigpKSA8IDApO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIEJpbmFyeVNlYXJjaEV4Y2VwdGlvbnNXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGludFtdIGFycjEgPSBudWxsO1xuICAgICAgICAgICAgdmFyIGFycjIgPSBuZXdbXSB7IDEsIDIsIDMsIDMsIDQsIDUgfTtcblxuICAgICAgICAgICAgQXNzZXJ0LlRocm93cygoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEFycmF5LkJpbmFyeVNlYXJjaDxpbnQ+KGFycjEsIDEpOyB9KSk7XG4gICAgICAgICAgICBBc3NlcnQuVGhyb3dzKChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyMiwgLTEsIDEsIDEpOyB9KSk7XG4gICAgICAgICAgICBBc3NlcnQuVGhyb3dzKChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyMiwgMSwgNiwgMSk7IH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBTb3J0V2l0aERlZmF1bHRDb21wYXJlV29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyAxLCA2LCA2LCA0LCAyIH07XG4gICAgICAgICAgICBhcnIuSnNTb3J0KCk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwobmV3W10geyAxLCAyLCA0LCA2LCA2IH0sIGFycik7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgU29ydDFXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IDEsIDYsIDYsIDQsIDIgfTtcbiAgICAgICAgICAgIEFycmF5LlNvcnQ8aW50PihhcnIpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKG5ld1tdIHsgMSwgMiwgNCwgNiwgNiB9LCBhcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIFNvcnQyV29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyAxLCA2LCA2LCA0LCAyIH07XG4gICAgICAgICAgICBBcnJheS5Tb3J0PGludD4oYXJyLCAyLCAzKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChuZXdbXSB7IDEsIDYsIDIsIDQsIDYgfSwgYXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBTb3J0M1dvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgMSwgMiwgNiwgMywgNiwgNyB9O1xuICAgICAgICAgICAgQXJyYXkuU29ydDxpbnQ+KGFyciwgMiwgMywgbmV3IFRlc3RSZXZlcnNlQ29tcGFyZXIoKSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwobmV3W10geyAxLCAyLCA2LCA2LCAzLCA3IH0sIGFycik7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgU29ydDRXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IDEsIDYsIDYsIDQsIDIgfTtcbiAgICAgICAgICAgIEFycmF5LlNvcnQ8aW50PihhcnIsIG5ldyBUZXN0UmV2ZXJzZUNvbXBhcmVyKCkpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKG5ld1tdIHsgNiwgNiwgNCwgMiwgMSB9LCBhcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIFNvcnRFeGNlcHRpb25zV29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICBpbnRbXSBhcnIxID0gbnVsbDtcblxuICAgICAgICAgICAgQXNzZXJ0LlRocm93cygoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEFycmF5LlNvcnQ8aW50PihhcnIxKTsgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIEZvcmVhY2hXaGVuQ2FzdFRvSUxpc3RXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIElMaXN0PHN0cmluZz4gbGlzdCA9IG5ld1tdIHsgXCJ4XCIsIFwieVwiIH07XG4gICAgICAgICAgICBzdHJpbmcgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgICAgIGZvcmVhY2ggKHZhciBzIGluIGxpc3QpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJ4eVwiLCByZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIElDb2xsZWN0aW9uQ291bnRXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIElMaXN0PHN0cmluZz4gbCA9IG5ld1tdIHsgXCJ4XCIsIFwieVwiLCBcInpcIiB9O1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDMsIGwuQ291bnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIElDb2xsZWN0aW9uQWRkV29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICBJTGlzdDxzdHJpbmc+IGwgPSBuZXdbXSB7IFwieFwiLCBcInlcIiwgXCJ6XCIgfTtcbiAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8Tm90U3VwcG9ydGVkRXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IGwuQWRkKFwiYVwiKTsgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIElDb2xsZWN0aW9uQ2xlYXJXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIElMaXN0PHN0cmluZz4gbCA9IG5ld1tdIHsgXCJ4XCIsIFwieVwiLCBcInpcIiB9O1xuICAgICAgICAgICAgQXNzZXJ0LlRocm93czxOb3RTdXBwb3J0ZWRFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgbC5DbGVhcigpOyB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgSUNvbGxlY3Rpb25Db250YWluc1dvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgSUxpc3Q8c3RyaW5nPiBsID0gbmV3W10geyBcInhcIiwgXCJ5XCIsIFwielwiIH07XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShsLkNvbnRhaW5zKFwieVwiKSk7XG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UobC5Db250YWlucyhcImFcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIElDb2xsZWN0aW9uQ29udGFpbnNVc2VzRXF1YWxzTWV0aG9kKClcbiAgICAgICAge1xuICAgICAgICAgICAgSUxpc3Q8Qz4gbCA9IG5ld1tdIHsgbmV3IEMoMSksIG5ldyBDKDIpLCBuZXcgQygzKSB9O1xuICAgICAgICAgICAgQXNzZXJ0LlRydWUobC5Db250YWlucyhuZXcgQygyKSkpO1xuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKGwuQ29udGFpbnMobmV3IEMoNCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBJQ29sbGVjdGlvblJlbW92ZVdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgSUxpc3Q8c3RyaW5nPiBsID0gbmV3W10geyBcInhcIiwgXCJ5XCIsIFwielwiIH07XG4gICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE5vdFN1cHBvcnRlZEV4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBsLlJlbW92ZShcInlcIik7IH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBJTGlzdEluZGV4aW5nV29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICBJTGlzdDxzdHJpbmc+IGwgPSBuZXdbXSB7IFwieFwiLCBcInlcIiwgXCJ6XCIgfTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcInlcIiwgbFsxXSk7XG4gICAgICAgICAgICBsWzFdID0gXCJhXCI7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwobmV3W10geyBcInhcIiwgXCJhXCIsIFwielwiIH0sIFN5c3RlbS5MaW5xLkVudW1lcmFibGUuVG9BcnJheTxzdHJpbmc+KGwpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBJTGlzdEluZGV4T2ZXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIElMaXN0PHN0cmluZz4gbCA9IG5ld1tdIHsgXCJ4XCIsIFwieVwiLCBcInpcIiB9O1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDEsIGwuSW5kZXhPZihcInlcIikpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKC0xLCBsLkluZGV4T2YoXCJhXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBJTGlzdEluZGV4T2ZVc2VzRXF1YWxzTWV0aG9kKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgbmV3IEMoMSksIG5ldyBDKDIpLCBuZXcgQygzKSB9O1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDEsIEFycmF5LkluZGV4T2Y8Z2xvYmFsOjpCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQnJpZGdlSXNzdWVzLk43NzIuQz4oYXJyLCBuZXcgQygyKSkpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKC0xLCBBcnJheS5JbmRleE9mPGdsb2JhbDo6QnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkJyaWRnZUlzc3Vlcy5ONzcyLkM+KGFyciwgbmV3IEMoNCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBJTGlzdEluc2VydFdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgSUxpc3Q8c3RyaW5nPiBsID0gbmV3W10geyBcInhcIiwgXCJ5XCIsIFwielwiIH07XG4gICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE5vdFN1cHBvcnRlZEV4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBsLkluc2VydCgxLCBcImFcIik7IH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBJTGlzdFJlbW92ZUF0V29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICBJTGlzdDxzdHJpbmc+IGwgPSBuZXdbXSB7IFwieFwiLCBcInlcIiwgXCJ6XCIgfTtcbiAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8Tm90U3VwcG9ydGVkRXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IGwuUmVtb3ZlQXQoMSk7IH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0KEV4cGVjdGVkQ291bnQgPSAxMCldXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0VXNlQ2FzZSgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vVGhlc2UgYXJyYXlzIGRlcGVuZCBvbiBcInVzZVR5cGVkQXJyYXlcIiBicmlkZ2UuanNvbiBvcHRpb25cbiAgICAgICAgICAgIHZhciBieXRlQXJyYXkgPSBuZXcgYnl0ZVsxXTtcbiAgICAgICAgICAgIHZhciBzYnl0ZUFycmF5ID0gbmV3IHNieXRlWzJdO1xuICAgICAgICAgICAgdmFyIHNob3J0QXJyYXkgPSBuZXcgc2hvcnRbM107XG4gICAgICAgICAgICB2YXIgdXNob3J0QXJyYXkgPSBuZXcgdXNob3J0WzRdO1xuICAgICAgICAgICAgdmFyIGludEFycmF5ID0gbmV3IGludFs1XTtcbiAgICAgICAgICAgIHZhciB1aW50QXJyYXkgPSBuZXcgdWludFs2XTtcbiAgICAgICAgICAgIHZhciBmbG9hdEFycmF5ID0gbmV3IGZsb2F0WzddO1xuICAgICAgICAgICAgdmFyIGRvdWJsZUFycmF5ID0gbmV3IGRvdWJsZVs4XTtcblxuICAgICAgICAgICAgLy9UaGVzZSBhcnJheXMgZG8gbm90IGRlcGVuZCBvbiBcInVzZVR5cGVkQXJyYXlcIiBicmlkZ2UuanNvbiBvcHRpb25cbiAgICAgICAgICAgIHZhciBzdHJpbmdBcnJheSA9IG5ldyBzdHJpbmdbOV07XG4gICAgICAgICAgICB2YXIgZGVjaW1hbEFycmF5ID0gbmV3IGRlY2ltYWxbMTBdO1xuXG4gICAgICAgICAgICBieXRlQXJyYXlbMF0gPSAxO1xuICAgICAgICAgICAgc2J5dGVBcnJheVswXSA9IDI7XG4gICAgICAgICAgICBzaG9ydEFycmF5WzBdID0gMztcbiAgICAgICAgICAgIHVzaG9ydEFycmF5WzBdID0gNDtcbiAgICAgICAgICAgIGludEFycmF5WzBdID0gNTtcbiAgICAgICAgICAgIHVpbnRBcnJheVswXSA9IDY7XG4gICAgICAgICAgICBmbG9hdEFycmF5WzBdID0gNztcbiAgICAgICAgICAgIGRvdWJsZUFycmF5WzBdID0gODtcblxuICAgICAgICAgICAgc3RyaW5nQXJyYXlbMF0gPSBcIjlcIjtcbiAgICAgICAgICAgIGRlY2ltYWxBcnJheVswXSA9IDEwbTtcblxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDEsIGJ5dGVBcnJheVswXSwgXCJnZXQgYnl0ZUFycmF5WzBdXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDIsIHNieXRlQXJyYXlbMF0sIFwiZ2V0IHNieXRlQXJyYXlbMF1cIik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMywgc2hvcnRBcnJheVswXSwgXCJnZXQgc2hvcnRBcnJheVswXVwiKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCg0LCB1c2hvcnRBcnJheVswXSwgXCJnZXQgdXNob3J0QXJyYXlbMF1cIik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoNSwgaW50QXJyYXlbMF0sIFwiZ2V0IGludEFycmF5WzBdXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDYsIHVpbnRBcnJheVswXSwgXCJnZXQgdWludEFycmF5WzBdXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDcsIGZsb2F0QXJyYXlbMF0sIFwiZ2V0IGZsb2F0QXJyYXlbMF1cIik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoOCwgZG91YmxlQXJyYXlbMF0sIFwiZ2V0IGRvdWJsZUFycmF5WzBdXCIpO1xuXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCI5XCIsIHN0cmluZ0FycmF5WzBdLCBcImdldCBzdHJpbmdBcnJheVswXVwiKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgxMG0sIGRlY2ltYWxBcnJheVswXSwgXCJnZXQgZGVjaW1hbEFycmF5WzBdXCIpO1xuICAgICAgICB9XG4gICAgfVxufSIsInVzaW5nIEJyaWRnZS5UZXN0Lk5Vbml0O1xuXG51c2luZyBTeXN0ZW07XG5cbm5hbWVzcGFjZSBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDJcbntcbiAgICAvLyBCcmlkZ2VbIzEwOTJdXG4gICAgLy8gXCJvdmVyZmxvd01vZGVcIjogIFwiSmF2YXNjcmlwdFwiIGJyaWRnZS5qc29uIG9wdGlvblxuICAgIHB1YmxpYyBjbGFzcyBDaGVja2VkVW5jaGVja2VkVGVzdHNcbiAgICB7XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBBc3NlcnRFcXVhbChvYmplY3QgZXhwZWN0ZWQsIG9iamVjdCBhY3R1YWwsIHN0cmluZyBtZXNzYWdlID0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKGV4cGVjdGVkLlRvU3RyaW5nKCksIGFjdHVhbC5Ub1N0cmluZygpLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgc3RhdGljIG9iamVjdCBCeXBhc3Mob2JqZWN0IG8pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICB9XG5cbiAgICAgICAgW0NhdGVnb3J5KENvbnN0YW50cy5NT0RVTEVfQ0hFQ0tFRF9VTkNLRUNLRUQpXVxuICAgICAgICBbVGVzdEZpeHR1cmUoVGVzdE5hbWVGb3JtYXQgPSBcIkNoZWNrZWQgLSBcIiArIENvbnN0YW50cy5CQVRDSF9OQU1FICsgXCIgezB9XCIpXVxuICAgICAgICBwdWJsaWMgY2xhc3MgQ2hlY2tlZFRlc3RzXG4gICAgICAgIHtcbiAgICAgICAgICAgIFtUZXN0XVxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RJbnQzMigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IEludDMyLk1heFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xuXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXggKyAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heDIrKzsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9ICsrbWF4MzsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gMiAqIG1heDsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXggKyAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoKyttYXg0KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoMiAqIG1heCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IEludDMyLk1pblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xuXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4gLSAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbjEtLTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IC0tbWluMjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHByZS0tXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gLW1pbjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4gLSAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLS1taW40KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLW1pbik7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbVGVzdF1cbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0VUludDMyKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gVUludDMyLk1heFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xuXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXggKyAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heDErKzsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9ICsrbWF4MjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gMiAqIG1heDsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXggKyAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoKyttYXg0KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoMiAqIG1heCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IFVJbnQzMi5NaW5WYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcblxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWluIC0gMTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4xLS07IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtLW1pbjI7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwcmUtLVwiKTtcblxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtUZXN0XVxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RMb25nKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gbG9uZy5NYXhWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcblxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4ICsgMTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXgxKys7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSArK21heDI7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IDIgKiBtYXg7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4MysrKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKCsrbWF4NCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBsb25nLk1pblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xuXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4gLSAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbjEtLTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IC0tbWluMjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHByZS0tXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gLW1pbjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4gLSAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLS1taW40KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLW1pbik7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbVGVzdF1cbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0VUxvbmcoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoZWNrZWRcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSB1bG9uZy5NYXhWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcblxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4ICsgMTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXgxKys7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSArK21heDI7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IDIgKiBtYXg7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4MysrKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKCsrbWF4NCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSB1bG9uZy5NaW5WYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcblxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWluIC0gMTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4xLS07IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtLW1pbjI7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwcmUtLVwiKTtcblxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBbQ2F0ZWdvcnkoQ29uc3RhbnRzLk1PRFVMRV9DSEVDS0VEX1VOQ0tFQ0tFRCldXG4gICAgICAgIFtUZXN0Rml4dHVyZShUZXN0TmFtZUZvcm1hdCA9IFwiQ2hlY2tlZEluc2lkZVVuY2hlY2tlZCAtIFwiICsgQ29uc3RhbnRzLkJBVENIX05BTUUgKyBcIiB7MH1cIildXG4gICAgICAgIHB1YmxpYyBjbGFzcyBDaGVja2VkSW5zaWRlVW5jaGVja2VkVGVzdHNcbiAgICAgICAge1xuICAgICAgICAgICAgW1Rlc3RdXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdEludDMyKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1bmNoZWNrZWRcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IEludDMyLk1heFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heCArIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heDIrKzsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSArK21heDM7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAyICogbWF4OyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXggKyAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4MysrKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoMiAqIG1heCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBJbnQzMi5NaW5WYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4gLSAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4xLS07IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gLS1taW4yOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcHJlLS1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gLW1pbjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluIC0gMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLS1taW40KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC1taW4pOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbVGVzdF1cbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0VUludDMyKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1bmNoZWNrZWRcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IFVJbnQzMi5NYXhWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXggKyAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXgxKys7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gKyttYXgyOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gMiAqIG1heDsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heDMrKyk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoKyttYXg0KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gVUludDMyLk1pblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbiAtIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbjEtLTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtLW1pbjI7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwcmUtLVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4gLSAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluMy0tKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW1Rlc3RdXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdExvbmcoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVuY2hlY2tlZFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gbG9uZy5NYXhWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXggKyAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXgxKys7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gKyttYXgyOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gMiAqIG1heDsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heDMrKyk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoKyttYXg0KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gbG9uZy5NaW5WYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4gLSAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4xLS07IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gLS1taW4yOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcHJlLS1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gLW1pbjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluIC0gMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLS1taW40KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC1taW4pOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbVGVzdF1cbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0VUxvbmcoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVuY2hlY2tlZFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gdWxvbmcuTWF4VmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4ICsgMTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4MSsrOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9ICsrbWF4MjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IDIgKiBtYXg7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKCsrbWF4NCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygyICogbWF4KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IHVsb25nLk1pblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbiAtIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbjEtLTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtLW1pbjI7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwcmUtLVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4gLSAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluMy0tKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFtDYXRlZ29yeShDb25zdGFudHMuTU9EVUxFX0NIRUNLRURfVU5DS0VDS0VEKV1cbiAgICAgICAgW1Rlc3RGaXh0dXJlKFRlc3ROYW1lRm9ybWF0ID0gXCJVbmNoZWNrZWQgLSBcIiArIENvbnN0YW50cy5CQVRDSF9OQU1FICsgXCIgezB9XCIpXVxuICAgICAgICBwdWJsaWMgY2xhc3MgVW5jaGVja2VkVGVzdHNcbiAgICAgICAge1xuICAgICAgICAgICAgW1Rlc3RdXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdEludDMyKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1bmNoZWNrZWRcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSBJbnQzMi5NYXhWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDEgPSBtYXggKyAxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDIgPSBtYXgxKys7XG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXg0ID0gMiAqIG1heDtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ4XCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMjE0NzQ4MzY0N1wiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDhcIiwgck1heDMsIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTJcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ3XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heDMrKyksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoKyttYXg0KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IEludDMyLk1pblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluMSA9IG1pbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluMiA9IG1pbjEtLTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4zID0gLS1taW4yO1xuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjQgPSAtbWluO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMjE0NzQ4MzY0N1wiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ4XCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ3XCIsIHJNaW4zLCBcIlRocm91Z2ggaWRlbnRpZmllciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ4XCIsIHJNaW40LCBcIlRocm91Z2ggaWRlbnRpZmllciB1bmFyeSAtXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ3XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjIxNDc0ODM2NDdcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLS1taW40KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC1taW4pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbVGVzdF1cbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0VUludDMyKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1bmNoZWNrZWRcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSBVSW50MzIuTWF4VmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgxID0gbWF4ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgyID0gbWF4MSsrO1xuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4NCA9IDIgKiBtYXg7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NVwiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCByTWF4MywgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk0XCIsIHJNYXg0LCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk1XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heDMrKyksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygyICogbWF4KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBVSW50MzIuTWluVmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4xID0gbWluIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4yID0gbWluMS0tO1xuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluNCA9IC1taW47XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk1XCIsIHJNaW4xLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCByTWluMiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NVwiLCByTWluMywgXCJUaHJvdWdoIGlkZW50aWZpZXIgLS1wcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNaW40LCBcIlRocm91Z2ggaWRlbnRpZmllciB1bmFyeSAtXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk1XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NVwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtbWluKSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW1Rlc3RdXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdExvbmcoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVuY2hlY2tlZFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IGxvbmcuTWF4VmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgxID0gbWF4ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgyID0gbWF4MSsrO1xuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4NCA9IDIgKiBtYXg7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCByTWF4MSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgck1heDIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIHJNYXgzLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yXCIsIHJNYXg0LCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXggKyAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKCsrbWF4NCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMlwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygyICogbWF4KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBsb25nLk1pblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluMSA9IG1pbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluMiA9IG1pbjEtLTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4zID0gLS1taW4yO1xuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjQgPSAtbWluO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIHJNaW4zLCBcIlRocm91Z2ggaWRlbnRpZmllciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIHJNaW40LCBcIlRocm91Z2ggaWRlbnRpZmllciB1bmFyeSAtXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLS1taW40KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC1taW4pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbVGVzdF1cbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0VUxvbmcoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVuY2hlY2tlZFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IHVsb25nLk1heFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4MSA9IG1heCArIDE7XG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgzID0gKyttYXgyO1xuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDQgPSAyICogbWF4O1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCByTWF4MSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIHJNYXgyLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNYXgzLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE0XCIsIHJNYXg0LCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoKyttYXg0KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE0XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IHVsb25nLk1pblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluMSA9IG1pbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluMiA9IG1pbjEtLTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4zID0gLS1taW4yO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgck1pbjEsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCByTWluMywgXCJUaHJvdWdoIGlkZW50aWZpZXIgLS1wcmVcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLS1taW40KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBbQ2F0ZWdvcnkoQ29uc3RhbnRzLk1PRFVMRV9DSEVDS0VEX1VOQ0tFQ0tFRCldXG4gICAgICAgIFtUZXN0Rml4dHVyZShUZXN0TmFtZUZvcm1hdCA9IFwiVW5jaGVja2VkSW5zaWRlQ2hlY2tlZCAtIFwiICsgQ29uc3RhbnRzLkJBVENIX05BTUUgKyBcIiB7MH1cIildXG4gICAgICAgIHB1YmxpYyBjbGFzcyBVbmNoZWNrZWRJbnNpZGVDaGVja2VkVGVzdHNcbiAgICAgICAge1xuICAgICAgICAgICAgW1Rlc3RdXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdEludDMyKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB1bmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IEludDMyLk1heFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgxID0gbWF4ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4NCA9IDIgKiBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDhcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMjE0NzQ4MzY0N1wiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ4XCIsIHJNYXgzLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMlwiLCByTWF4NCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMjE0NzQ4MzY0N1wiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBJbnQzMi5NaW5WYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluMSA9IG1pbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjQgPSAtbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjIxNDc0ODM2NDdcIiwgck1pbjEsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDhcIiwgck1pbjIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ3XCIsIHJNaW4zLCBcIlRocm91Z2ggaWRlbnRpZmllciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OFwiLCByTWluNCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgdW5hcnkgLVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjIxNDc0ODM2NDdcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluIC0gMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ3XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC0tbWluNCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLW1pbiksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgdW5hcnkgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW1Rlc3RdXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdFVJbnQzMigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdW5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSBVSW50MzIuTWF4VmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDEgPSBtYXggKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgyID0gbWF4MSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgzID0gKyttYXgyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXg0ID0gMiAqIG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTVcIiwgck1heDIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNYXgzLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk0XCIsIHJNYXg0LCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXggKyAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTVcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4MysrKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTRcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoMiAqIG1heCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IFVJbnQzMi5NaW5WYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluMSA9IG1pbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjQgPSAtbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTVcIiwgck1pbjEsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCByTWluMiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTVcIiwgck1pbjMsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjBcIiwgck1pbjQsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk1XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk1XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC0tbWluNCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtbWluKSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbVGVzdF1cbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0TG9uZygpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdW5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSBsb25nLk1heFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgxID0gbWF4ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4NCA9IDIgKiBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIHJNYXgzLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMlwiLCByTWF4NCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBsb25nLk1pblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4xID0gbWluIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluMiA9IG1pbjEtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluMyA9IC0tbWluMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluNCA9IC1taW47XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCByTWluMiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgck1pbjMsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIHJNaW40LCBcIlRocm91Z2ggaWRlbnRpZmllciB1bmFyeSAtXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4gLSAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLS1taW40KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtbWluKSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbVGVzdF1cbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0VUxvbmcoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoZWNrZWRcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHVuY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gdWxvbmcuTWF4VmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDEgPSBtYXggKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgyID0gbWF4MSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgzID0gKyttYXgyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXg0ID0gMiAqIG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIHJNYXgyLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCByTWF4MywgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTRcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4MysrKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE0XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSB1bG9uZy5NaW5WYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluMSA9IG1pbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgck1pbjEsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCByTWluMiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIHJNaW4zLCBcIlRocm91Z2ggaWRlbnRpZmllciAtLXByZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgW0NhdGVnb3J5KENvbnN0YW50cy5NT0RVTEVfQ0hFQ0tFRF9VTkNLRUNLRUQpXVxuICAgICAgICBbVGVzdEZpeHR1cmUoVGVzdE5hbWVGb3JtYXQgPSBcIldpdGhOb1VuY2hlY2tlZEtleXdvcmQgLSBcIiArIENvbnN0YW50cy5CQVRDSF9OQU1FICsgXCIgezB9XCIpXVxuICAgICAgICBwdWJsaWMgY2xhc3MgV2l0aE5vVW5jaGVja2VkS2V5d29yZFRlc3RzXG4gICAgICAgIHtcbiAgICAgICAgICAgIFtUZXN0XVxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RJbnQzMigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIG1heCA9IEludDMyLk1heFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XG4gICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XG4gICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XG4gICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XG5cbiAgICAgICAgICAgICAgICB2YXIgck1heDEgPSBtYXggKyAxO1xuICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcbiAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XG4gICAgICAgICAgICAgICAgdmFyIHJNYXg0ID0gMiAqIG1heDtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMjE0NzQ4MzY0OFwiLCByTWF4MSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMjE0NzQ4MzY0N1wiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ4XCIsIHJNYXgzLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NFwiLCByTWF4NCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIyMTQ3NDgzNjQ4XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjIxNDc0ODM2NDdcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4MysrKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjIxNDc0ODM2NDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoKyttYXg0KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygyICogbWF4KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG1pbiA9IEludDMyLk1pblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XG4gICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XG4gICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XG4gICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XG5cbiAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xuICAgICAgICAgICAgICAgIHZhciByTWluMiA9IG1pbjEtLTtcbiAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XG4gICAgICAgICAgICAgICAgdmFyIHJNaW40ID0gLW1pbjtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDlcIiwgck1pbjEsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ4XCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0yMTQ3NDgzNjQ5XCIsIHJNaW4zLCBcIlRocm91Z2ggaWRlbnRpZmllciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMjE0NzQ4MzY0OFwiLCByTWluNCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgdW5hcnkgLVwiKTtcblxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OVwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4gLSAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMjE0NzQ4MzY0OFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4zLS0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTIxNDc0ODM2NDlcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLS1taW40KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMjE0NzQ4MzY0OFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtbWluKSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbVGVzdF1cbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0VUludDMyKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF4ID0gVUludDMyLk1heFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XG4gICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XG4gICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XG4gICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XG5cbiAgICAgICAgICAgICAgICB2YXIgck1heDEgPSBtYXggKyAxO1xuICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcbiAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XG4gICAgICAgICAgICAgICAgdmFyIHJNYXg0ID0gMiAqIG1heDtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NlwiLCByTWF4MSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiNDI5NDk2NzI5NVwiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk2XCIsIHJNYXgzLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiODU4OTkzNDU5MFwiLCByTWF4NCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI0Mjk0OTY3Mjk2XCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1heCArIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTVcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4MysrKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjQyOTQ5NjcyOTZcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoKyttYXg0KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiODU4OTkzNDU5MFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygyICogbWF4KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG1pbiA9IFVJbnQzMi5NaW5WYWx1ZTtcblxuICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xuICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xuICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xuICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xuXG4gICAgICAgICAgICAgICAgdmFyIHJNaW4xID0gbWluIC0gMTtcbiAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XG4gICAgICAgICAgICAgICAgdmFyIHJNaW4zID0gLS1taW4yO1xuICAgICAgICAgICAgICAgIHZhciByTWluNCA9IC1taW47XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0xXCIsIHJNaW4xLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi0xXCIsIHJNaW4zLCBcIlRocm91Z2ggaWRlbnRpZmllciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCByTWluNCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgdW5hcnkgLVwiKTtcblxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMVwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4gLSAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCItMVwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKC1taW4pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtUZXN0XVxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RMb25nKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF4ID0gbG9uZy5NYXhWYWx1ZTtcblxuICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xuICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xuICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xuICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xuXG4gICAgICAgICAgICAgICAgdmFyIHJNYXgxID0gbWF4ICsgMTtcbiAgICAgICAgICAgICAgICB2YXIgck1heDIgPSBtYXgxKys7XG4gICAgICAgICAgICAgICAgdmFyIHJNYXgzID0gKyttYXgyO1xuICAgICAgICAgICAgICAgIHZhciByTWF4NCA9IDIgKiBtYXg7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIHJNYXgyLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIHJNYXgzLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTJcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XG5cbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWF4ICsgMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoKyttYXg0KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTJcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoMiAqIG1heCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgIHZhciBtaW4gPSBsb25nLk1pblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XG4gICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XG4gICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XG4gICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XG5cbiAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xuICAgICAgICAgICAgICAgIHZhciByTWluMiA9IG1pbjEtLTtcbiAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XG4gICAgICAgICAgICAgICAgdmFyIHJNaW40ID0gLW1pbjtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1pbjIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCByTWluMywgXCJUaHJvdWdoIGlkZW50aWZpZXIgLS1wcmVcIik7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIHJNaW40LCBcIlRocm91Z2ggaWRlbnRpZmllciB1bmFyeSAtXCIpO1xuXG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluIC0gMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MobWluMy0tKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLS1taW40KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5CeXBhc3MoLW1pbiksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgdW5hcnkgLVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW1Rlc3RdXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdFVMb25nKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF4ID0gdWxvbmcuTWF4VmFsdWU7XG5cbiAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcbiAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcbiAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcbiAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcblxuICAgICAgICAgICAgICAgIHZhciByTWF4MSA9IG1heCArIDE7XG4gICAgICAgICAgICAgICAgdmFyIHJNYXgyID0gbWF4MSsrO1xuICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcbiAgICAgICAgICAgICAgICB2YXIgck1heDQgPSAyICogbWF4O1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNYXgzLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTRcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XG5cbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXggKyAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkFzc2VydEVxdWFsKFwiMFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIxODQ0Njc0NDA3MzcwOTU1MTYxNFwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygyICogbWF4KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG1pbiA9IHVsb25nLk1pblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XG4gICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XG4gICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XG4gICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XG5cbiAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xuICAgICAgICAgICAgICAgIHZhciByTWluMiA9IG1pbjEtLTtcbiAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIHJNaW4xLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5Bc3NlcnRFcXVhbChcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIHJNaW4zLCBcIlRocm91Z2ggaWRlbnRpZmllciAtLXByZVwiKTtcblxuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcyhtaW4gLSAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIwXCIsIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQnlwYXNzKG1pbjMtLSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5DaGVja2VkVW5jaGVja2VkVGVzdHMuQXNzZXJ0RXF1YWwoXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQ2hlY2tlZFVuY2hlY2tlZFRlc3RzLkJ5cGFzcygtLW1pbjQpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdCn0K
