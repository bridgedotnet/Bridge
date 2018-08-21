/**
 * Bridge Test library - special tests with custom config options like useTypedArrays
 * @version 17.2.0
 * @author Object.NET, Inc.
 * @copyright Copyright 2008-2018 Object.NET, Inc.
 * @compiler Bridge.NET 17.2.0
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
                    Bridge.Test.NUnit.Assert.AreEqual("0.9090909090909091", Bridge.toString(y1), "int");

                    var y2 = 1 / x;
                    Bridge.Test.NUnit.Assert.AreEqual("0.9090909090909091", Bridge.toString(y2), "uint");

                    var z1 = 1 / x;
                    Bridge.Test.NUnit.Assert.AreEqual("0.9090909090909091", Bridge.toString(z1), "long");

                    var z2 = 1 / x;
                    Bridge.Test.NUnit.Assert.AreEqual("0.9090909090909091", Bridge.toString(z2), "ulong");
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
        $kind: "nested enum",
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
                        result = (result || "") + (s || "");
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                Bridge.Test.NUnit.Assert.AreEqual("xy", result);
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
                        result = (result || "") + (s || "");
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
                        result = (result || "") + (s || "");
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                Bridge.Test.NUnit.Assert.AreEqual("xy", result);
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
                Bridge.Test.NUnit.Assert.AreEqual(System.Array.init(["x", "a", "z"], System.String), System.Linq.Enumerable.from(l).ToArray());
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
        $kind: "nested class",
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
        $kind: "nested class",
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
                Bypass: function (o) {
                    return o;
                }
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch2.CheckedUncheckedTests.CheckedInsideUncheckedTests", {
        $kind: "nested class",
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
        $kind: "nested class",
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
        $kind: "nested class",
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
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.box(rMax1, System.Int32), "Through identifier +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.box(rMax2, System.Int32), "Through identifier post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.box(rMax3, System.Int32), "Through identifier ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2", Bridge.box(rMax4, System.Int32), "Through identifier *");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max + 1) | 0), System.Int32)), "Through parameter +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, (max3 = (max3 + 1) | 0)), System.Int32)), "Through parameter post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = (max4 + 1) | 0)), System.Int32)), "Through parameter ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.mul(2, max), System.Int32)), "Through parameter *");

                    var min = -2147483648;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = (min - 1) | 0;
                    var rMin2 = Bridge.identity(min1, (min1 = (min1 - 1) | 0));
                    var rMin3 = ((min2 = (min2 - 1) | 0));
                    var rMin4 = (-min) | 0;
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.box(rMin1, System.Int32), "Through identifier -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.box(rMin2, System.Int32), "Through identifier post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.box(rMin3, System.Int32), "Through identifier --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.box(rMin4, System.Int32), "Through identifier unary -");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min - 1) | 0), System.Int32)), "Through parameter -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(min3, (min3 = (min3 - 1) | 0)), System.Int32)), "Through parameter post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min4 = (min4 - 1) | 0)), System.Int32)), "Through parameter --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((-min) | 0), System.Int32)), "Through parameter unary -");
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
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.box(rMax1, System.UInt32), "Through identifier +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.box(rMax2, System.UInt32), "Through identifier post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.box(rMax3, System.UInt32), "Through identifier ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967294", Bridge.box(rMax4, System.UInt32), "Through identifier *");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max + 1) >>> 0), System.UInt32)), "Through parameter +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, (max3 = (max3 + 1) >>> 0)), System.UInt32)), "Through parameter post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = (max4 + 1) >>> 0)), System.UInt32)), "Through parameter ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967294", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.umul(2, max), System.UInt32)), "Through parameter *");

                    var min = 0;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = (min - 1) >>> 0;
                    var rMin2 = Bridge.identity(min1, (min1 = (min1 - 1) >>> 0));
                    var rMin3 = ((min2 = (min2 - 1) >>> 0));
                    var rMin4 = System.Int64(min).neg();
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.box(rMin1, System.UInt32), "Through identifier -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.box(rMin2, System.UInt32), "Through identifier post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.box(rMin3, System.UInt32), "Through identifier --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", rMin4, "Through identifier unary -");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min - 1) >>> 0), System.UInt32)), "Through parameter -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(min3, (min3 = (min3 - 1) >>> 0)), System.UInt32)), "Through parameter post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min4 = (min4 - 1) >>> 0)), System.UInt32)), "Through parameter --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.Int64(min).neg()), "Through parameter unary -");
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
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMax1, "Through identifier +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMax2, "Through identifier post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMax3, "Through identifier ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2", rMax4, "Through identifier *");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(max.add(System.Int64(1))), "Through parameter +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = max3, max3 = max3.inc(), $t)), "Through parameter post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((max4 = max4.inc())), "Through parameter ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.Int64(2).mul(max)), "Through parameter *");

                    var min = System.Int64.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min.sub(System.Int64(1));
                    var rMin2 = ($t = min1, min1 = min1.dec(), $t);
                    var rMin3 = (min2 = min2.dec());
                    var rMin4 = min.neg();
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMin1, "Through identifier -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMin2, "Through identifier post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMin3, "Through identifier --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMin4, "Through identifier unary -");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.sub(System.Int64(1))), "Through parameter -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = min3, min3 = min3.dec(), $t)), "Through parameter post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((min4 = min4.dec())), "Through parameter --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.neg()), "Through parameter unary -");
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
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", rMax1, "Through identifier +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMax2, "Through identifier post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", rMax3, "Through identifier ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551614", rMax4, "Through identifier *");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(max.add(System.UInt64(1))), "Through parameter +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = max3, max3 = max3.inc(), $t)), "Through parameter post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((max4 = max4.inc())), "Through parameter ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551614", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.UInt64(2).mul(max)), "Through parameter *");

                    var min = System.UInt64.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min.sub(System.UInt64(1));
                    var rMin2 = ($t = min1, min1 = min1.dec(), $t);
                    var rMin3 = (min2 = min2.dec());
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMin1, "Through identifier -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", rMin2, "Through identifier post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMin3, "Through identifier --pre");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.sub(System.UInt64(1))), "Through parameter -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = min3, min3 = min3.dec(), $t)), "Through parameter post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((min4 = min4.dec())), "Through parameter --pre");
                }
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch2.CheckedUncheckedTests.UncheckedTests", {
        $kind: "nested class",
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
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.box(rMax1, System.Int32), "Through identifier +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.box(rMax2, System.Int32), "Through identifier post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.box(rMax3, System.Int32), "Through identifier ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2", Bridge.box(rMax4, System.Int32), "Through identifier *");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max + 1) | 0), System.Int32)), "Through parameter +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, (max3 = (max3 + 1) | 0)), System.Int32)), "Through parameter post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = (max4 + 1) | 0)), System.Int32)), "Through parameter ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.mul(2, max), System.Int32)), "Through parameter *");

                    var min = -2147483648;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = (min - 1) | 0;
                    var rMin2 = Bridge.identity(min1, (min1 = (min1 - 1) | 0));
                    var rMin3 = ((min2 = (min2 - 1) | 0));
                    var rMin4 = (-min) | 0;
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.box(rMin1, System.Int32), "Through identifier -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.box(rMin2, System.Int32), "Through identifier post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.box(rMin3, System.Int32), "Through identifier --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.box(rMin4, System.Int32), "Through identifier unary -");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min - 1) | 0), System.Int32)), "Through parameter -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(min3, (min3 = (min3 - 1) | 0)), System.Int32)), "Through parameter post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min4 = (min4 - 1) | 0)), System.Int32)), "Through parameter --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((-min) | 0), System.Int32)), "Through parameter unary -");
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
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.box(rMax1, System.UInt32), "Through identifier +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.box(rMax2, System.UInt32), "Through identifier post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.box(rMax3, System.UInt32), "Through identifier ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967294", Bridge.box(rMax4, System.UInt32), "Through identifier *");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max + 1) >>> 0), System.UInt32)), "Through parameter +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, (max3 = (max3 + 1) >>> 0)), System.UInt32)), "Through parameter post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = (max4 + 1) >>> 0)), System.UInt32)), "Through parameter ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967294", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.Int.umul(2, max), System.UInt32)), "Through parameter *");

                    var min = 0;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = (min - 1) >>> 0;
                    var rMin2 = Bridge.identity(min1, (min1 = (min1 - 1) >>> 0));
                    var rMin3 = ((min2 = (min2 - 1) >>> 0));
                    var rMin4 = System.Int64(min).neg();
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.box(rMin1, System.UInt32), "Through identifier -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.box(rMin2, System.UInt32), "Through identifier post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.box(rMin3, System.UInt32), "Through identifier --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", rMin4, "Through identifier unary -");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min - 1) >>> 0), System.UInt32)), "Through parameter -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(min3, (min3 = (min3 - 1) >>> 0)), System.UInt32)), "Through parameter post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min4 = (min4 - 1) >>> 0)), System.UInt32)), "Through parameter --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.Int64(min).neg()), "Through parameter unary -");
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
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMax1, "Through identifier +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMax2, "Through identifier post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMax3, "Through identifier ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2", rMax4, "Through identifier *");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(max.add(System.Int64(1))), "Through parameter +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = max3, max3 = max3.inc(), $t)), "Through parameter post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((max4 = max4.inc())), "Through parameter ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.Int64(2).mul(max)), "Through parameter *");

                    var min = System.Int64.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min.sub(System.Int64(1));
                    var rMin2 = ($t = min1, min1 = min1.dec(), $t);
                    var rMin3 = (min2 = min2.dec());
                    var rMin4 = min.neg();
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMin1, "Through identifier -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMin2, "Through identifier post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMin3, "Through identifier --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMin4, "Through identifier unary -");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.sub(System.Int64(1))), "Through parameter -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = min3, min3 = min3.dec(), $t)), "Through parameter post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((min4 = min4.dec())), "Through parameter --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.neg()), "Through parameter unary -");
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
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", rMax1, "Through identifier +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMax2, "Through identifier post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", rMax3, "Through identifier ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551614", rMax4, "Through identifier *");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(max.add(System.UInt64(1))), "Through parameter +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = max3, max3 = max3.inc(), $t)), "Through parameter post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((max4 = max4.inc())), "Through parameter ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551614", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.UInt64(2).mul(max)), "Through parameter *");

                    var min = System.UInt64.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min.sub(System.UInt64(1));
                    var rMin2 = ($t = min1, min1 = min1.dec(), $t);
                    var rMin3 = (min2 = min2.dec());
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMin1, "Through identifier -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", rMin2, "Through identifier post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMin3, "Through identifier --pre");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.sub(System.UInt64(1))), "Through parameter -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = min3, min3 = min3.dec(), $t)), "Through parameter post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((min4 = min4.dec())), "Through parameter --pre");
                }
            }
        }
    });

    Bridge.define("Bridge.ClientTest.Batch2.CheckedUncheckedTests.WithNoUncheckedKeywordTests", {
        $kind: "nested class",
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
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483648", Bridge.box(rMax1, System.Int32), "Through identifier +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.box(rMax2, System.Int32), "Through identifier post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483648", Bridge.box(rMax3, System.Int32), "Through identifier ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967294", Bridge.box(rMax4, System.Int32), "Through identifier *");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(max + 1, System.Int32)), "Through parameter +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483647", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, (max3 = max3 + 1)), System.Int32)), "Through parameter post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = max4 + 1)), System.Int32)), "Through parameter ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967294", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(2 * max, System.Int32)), "Through parameter *");

                    var min = -2147483648;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min - 1;
                    var rMin2 = Bridge.identity(min1, (min1 = min1 - 1));
                    var rMin3 = ((min2 = min2 - 1));
                    var rMin4 = -min;
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483649", Bridge.box(rMin1, System.Int32), "Through identifier -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.box(rMin2, System.Int32), "Through identifier post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483649", Bridge.box(rMin3, System.Int32), "Through identifier --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483648", Bridge.box(rMin4, System.Int32), "Through identifier unary -");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483649", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(min - 1, System.Int32)), "Through parameter -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(min3, (min3 = min3 - 1)), System.Int32)), "Through parameter post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2147483649", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min4 = min4 - 1)), System.Int32)), "Through parameter --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("2147483648", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(-min, System.Int32)), "Through parameter unary -");
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
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967296", Bridge.box(rMax1, System.UInt32), "Through identifier +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.box(rMax2, System.UInt32), "Through identifier post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967296", Bridge.box(rMax3, System.UInt32), "Through identifier ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("8589934590", Bridge.box(rMax4, System.UInt32), "Through identifier *");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967296", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(max + 1, System.UInt32)), "Through parameter +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967295", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(max3, (max3 = max3 + 1)), System.UInt32)), "Through parameter post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("4294967296", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((max4 = max4 + 1)), System.UInt32)), "Through parameter ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("8589934590", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(2 * max, System.UInt32)), "Through parameter *");

                    var min = 0;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min - 1;
                    var rMin2 = Bridge.identity(min1, (min1 = min1 - 1));
                    var rMin3 = ((min2 = min2 - 1));
                    var rMin4 = System.Int64(min).neg();
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-1", Bridge.box(rMin1, System.UInt32), "Through identifier -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.box(rMin2, System.UInt32), "Through identifier post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-1", Bridge.box(rMin3, System.UInt32), "Through identifier --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", rMin4, "Through identifier unary -");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-1", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(min - 1, System.UInt32)), "Through parameter -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(Bridge.identity(min3, (min3 = min3 - 1)), System.UInt32)), "Through parameter post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-1", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(Bridge.box(((min4 = min4 - 1)), System.UInt32)), "Through parameter --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.Int64(min).neg()), "Through parameter unary -");
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
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMax1, "Through identifier +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMax2, "Through identifier post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMax3, "Through identifier ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2", rMax4, "Through identifier *");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(max.add(System.Int64(1))), "Through parameter +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = max3, max3 = max3.inc(), $t)), "Through parameter post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((max4 = max4.inc())), "Through parameter ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-2", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.Int64(2).mul(max)), "Through parameter *");

                    var min = System.Int64.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min.sub(System.Int64(1));
                    var rMin2 = ($t = min1, min1 = min1.dec(), $t);
                    var rMin3 = (min2 = min2.dec());
                    var rMin4 = min.neg();
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMin1, "Through identifier -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMin2, "Through identifier post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMin3, "Through identifier --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMin4, "Through identifier unary -");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.sub(System.Int64(1))), "Through parameter -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = min3, min3 = min3.dec(), $t)), "Through parameter post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((min4 = min4.dec())), "Through parameter --pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.neg()), "Through parameter unary -");
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
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", rMax1, "Through identifier +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMax2, "Through identifier post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", rMax3, "Through identifier ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551614", rMax4, "Through identifier *");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(max.add(System.UInt64(1))), "Through parameter +");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = max3, max3 = max3.inc(), $t)), "Through parameter post++");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((max4 = max4.inc())), "Through parameter ++pre");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551614", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(System.UInt64(2).mul(max)), "Through parameter *");

                    var min = System.UInt64.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min.sub(System.UInt64(1));
                    var rMin2 = ($t = min1, min1 = min1.dec(), $t);
                    var rMin3 = (min2 = min2.dec());
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMin1, "Through identifier -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", rMin2, "Through identifier post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMin3, "Through identifier --pre");

                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(min.sub(System.UInt64(1))), "Through parameter -");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("0", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass(($t = min3, min3 = min3.dec(), $t)), "Through parameter post--");
                    Bridge.ClientTestHelper.NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bridge.ClientTest.Batch2.CheckedUncheckedTests.Bypass((min4 = min4.dec())), "Through parameter --pre");
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJjb2RlLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJCcmlkZ2VJc3N1ZXMvTjEzODUuY3MiLCJCcmlkZ2VJc3N1ZXMvTjE0OTkuY3MiLCJCcmlkZ2VJc3N1ZXMvTjExMjIuY3MiLCJCcmlkZ2VJc3N1ZXMvTjEyMDQuY3MiLCJCcmlkZ2VJc3N1ZXMvTjMwNzUuY3MiLCJCcmlkZ2VJc3N1ZXMvTjc3Mi5jcyIsIkNoZWNrZWRVbmNoZWNrZWRUZXN0cy5jcyJdLAogICJuYW1lcyI6IFsiIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7b0JBV1lBLFlBQWVBO29CQUNmQSw4QkFBWUE7Ozs7Ozs7Ozs7Z0JDRFpBO2dCQUNBQSxVQUFpQkE7Z0JBQ2pCQTtnQkFDQUE7Z0JBQ0FBLFNBQVlBOztnQkFFWkEsMkNBQXlCQSwyQ0FBT0E7Z0JBQ2hDQSw0Q0FBMEJBLDZDQUFNQTtnQkFDaENBLDRDQUEwQkE7Z0JBQzFCQSxnREFBOEJBLDZDQUFNQTtnQkFDcENBLGdEQUE4QkE7O2dCQUU5QkE7Z0JBQ0FBO2dCQUNBQSxTQUFZQTs7Z0JBRVpBLDRDQUEwQkEsZ0NBQU1BO2dCQUNoQ0EsNENBQTBCQSw2Q0FBTUE7Z0JBQ2hDQSw0Q0FBMEJBO2dCQUUxQkEsNENBQTBCQTtnQkFFMUJBLGdEQUE4QkEsZ0NBQU1BO2dCQUNwQ0EsZ0RBQThCQSxnREFBTUE7Z0JBQ3BDQSxnREFBOEJBO2dCQUM5QkEsZ0RBQThCQTs7Z0JBRTlCQTtnQkFDQUE7Z0JBQ0FBLFNBQVVBOztnQkFFVkEsMkNBQXlCQSxtQ0FBTUE7Z0JBQy9CQSwyQ0FBeUJBLGlJQUFNQTtnQkFDL0JBLDJDQUF5QkE7Z0JBQ3pCQSwyQ0FBeUJBLG1DQUFNQTtnQkFDL0JBLGdEQUE4QkEsaUlBQU1BO2dCQUNwQ0EsMkNBQXlCQTtnQkFDekJBLDJDQUF5QkEscUNBQVFBOzs7Ozs7Ozs7b0JDbENqQ0EsUUFBUUE7O29CQUVSQSxTQUFTQSxBQUFLQSxXQUFXQTtvQkFDekJBLGtDQUFn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QUErQ0E7b0JBQy9DQSwwRkFBa0VBOztvQkFFbEVBLHVFQUErQ0Esc0RBQU9BO29CQUN0REEsMEZBQWtFQSxzREFBT0E7b0JBQ3pFQSx1RUFBK0NBLHNEQUFPQSxDQUFFQTtvQkFDeERBLDBGQUFrRUEsc0RBQU9BLHFCQUFJQTs7b0JBRTdFQSxVQUFVQTs7b0JBRVZBLFdBQVdBO29CQUNYQSxXQUFXQTtvQkFDWEEsV0FBV0E7b0JBQ1hBLFdBQVdBOztvQkFFWEEsWUFBWUE7b0JBQ1pBLFlBQVlBO29CQUNaQSxZQUFZQSxDQUFFQTtvQkFDZEEsMEZBQWtFQTtvQkFDbEVBLHVFQUErQ0E7b0JBQy9DQSwwRkFBa0VBOztvQkFFbEVBLDBGQUFrRUEsc0RBQU9BO29CQUN6RUEsdUVBQStDQSxzREFBT0E7b0JBQ3REQSwwRkFBa0VBLHNEQUFPQSxDQUFFQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJ1c2luZyBCcmlkZ2UuVGVzdC5OVW5pdDtcblxubmFtZXNwYWNlIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5CcmlkZ2VJc3N1ZXNcbntcbiAgICBbQ2F0ZWdvcnkoQ29uc3RhbnRzLk1PRFVMRV9JU1NVRVMpXVxuICAgIFtUZXN0Rml4dHVyZShUZXN0TmFtZUZvcm1hdCA9IFwiIzEzODUgLSBcIiArIENvbnN0YW50cy5CQVRDSF9OQU1FICsgXCIgezB9XCIpXVxuICAgIHB1YmxpYyBjbGFzcyBCcmlkZ2UxMzg1XG4gICAge1xuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RJc1R5cGVkQXJyYXlGb3JCeXRlKClcbiAgICAgICAge1xuICAgICAgICAgICAgb2JqZWN0IHZhbHVlID0gbmV3IGJ5dGVbM107XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZSh2YWx1ZSBpcyBieXRlW10pO1xuICAgICAgICB9XG4gICAgfVxufSIsInVzaW5nIEJyaWRnZS5UZXN0Lk5Vbml0O1xuXG5uYW1lc3BhY2UgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkJyaWRnZUlzc3Vlc1xue1xuICAgIFtDYXRlZ29yeShDb25zdGFudHMuTU9EVUxFX0lTU1VFUyldXG4gICAgW1Rlc3RGaXh0dXJlKFRlc3ROYW1lRm9ybWF0ID0gXCIjMTQ5OSAtIFwiICsgQ29uc3RhbnRzLkJBVENIX05BTUUgKyBcIiB7MH1cIildXG4gICAgcHVibGljIGNsYXNzIEJyaWRnZTE0OTlcbiAgICB7XG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBUZXN0T2JqZWN0U3RyaW5nQ29hbGVzY2VXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9iamVjdCBkZWYgPSAxO1xuICAgICAgICAgICAgQnJpZGdlMTQ5OSBhcHAgPSBudWxsO1xuICAgICAgICAgICAgb2JqZWN0IG8xID0gXCJcIjtcbiAgICAgICAgICAgIG9iamVjdCBvMiA9IFwidGVzdFwiO1xuICAgICAgICAgICAgb2JqZWN0IG8zID0gbnVsbDtcblxuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKDEsIGFwcCA/PyBkZWYpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKFwiXCIsIG8xID8/IG8yKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbChcIlwiLCBvMSA/PyBcInRlc3RcIik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoXCJ0ZXN0XCIsIG8zID8/IG8yKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbChcInRlc3RcIiwgbzMgPz8gXCJ0ZXN0XCIpO1xuXG4gICAgICAgICAgICBzdHJpbmcgczEgPSBcIlwiO1xuICAgICAgICAgICAgc3RyaW5nIHMyID0gXCJ0ZXN0XCI7XG4gICAgICAgICAgICBzdHJpbmcgczMgPSBudWxsO1xuXG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoXCJcIiwgczEgPz8gczIpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKFwiXCIsIHMxID8/IG8yKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbChcIlwiLCBzMSA/PyBcInRlc3RcIik7XG4jcHJhZ21hIHdhcm5pbmcgZGlzYWJsZSAxNjJcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbChcIlwiLCBcIlwiID8/IFwidGVzdFwiKTtcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDE2MlxuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKFwidGVzdFwiLCBzMyA/PyBzMik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoXCJ0ZXN0XCIsIHMzID8/IG8yKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbChcInRlc3RcIiwgczMgPz8gXCJ0ZXN0XCIpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKFwidGVzdFwiLCBudWxsID8/IFwidGVzdFwiKTtcblxuICAgICAgICAgICAgaW50PyBpMSA9IDA7XG4gICAgICAgICAgICBpbnQ/IGkyID0gMTtcbiAgICAgICAgICAgIGludD8gaTMgPSBudWxsO1xuXG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoMCwgaTEgPz8gaTIpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZVN0cmljdEVxdWFsKDAsIGkxID8/IG8yKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbCgwLCBpMSA/PyAxKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbCgxLCBpMyA/PyBpMik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlU3RyaWN0RXF1YWwoXCJ0ZXN0XCIsIGkzID8/IG8yKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbCgxLCBpMyA/PyAxKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVTdHJpY3RFcXVhbCgxLCBudWxsID8/IGkyKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJ1c2luZyBCcmlkZ2UuVGVzdC5OVW5pdDtcblxudXNpbmcgU3lzdGVtO1xuXG5uYW1lc3BhY2UgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkJyaWRnZUlzc3Vlc1xue1xuICAgIC8vIEJyaWRnZVsjMTEyMl1cbiAgICBbQ2F0ZWdvcnkoQ29uc3RhbnRzLk1PRFVMRV9JU1NVRVMpXVxuICAgIFtUZXN0Rml4dHVyZShUZXN0TmFtZUZvcm1hdCA9IFwiIzExMjIgLSBcIiArIENvbnN0YW50cy5CQVRDSF9OQU1FICsgXCIgezB9XCIpXVxuICAgIHB1YmxpYyBjbGFzcyBOMTEyMlxuICAgIHtcbiAgICAgICAgW1Rlc3QoRXhwZWN0ZWRDb3VudCA9IDQpXVxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdENsaXBwaW5nSW5KYXZhU2NyaXB0T3ZlcmZsb3dNb2RlKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHggPSBkb3VibGUuTWF4VmFsdWU7XG5cbiAgICAgICAgICAgIHZhciB5MSA9IChpbnQpTWF0aC5GbG9vcih4IC8gMC4yKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChEb3VibGUuUG9zaXRpdmVJbmZpbml0eSwgeTEsIFwiaW50XCIpO1xuXG4gICAgICAgICAgICB2YXIgeTIgPSAodWludClNYXRoLkZsb29yKHggLyAwLjIpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKERvdWJsZS5Qb3NpdGl2ZUluZmluaXR5LCB5MiwgXCJ1aW50XCIpO1xuXG4gICAgICAgICAgICB2YXIgejEgPSAobG9uZylNYXRoLkZsb29yKHggLyAwLjIpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKERvdWJsZS5Qb3NpdGl2ZUluZmluaXR5LCB6MSwgXCJsb25nXCIpO1xuXG4gICAgICAgICAgICB2YXIgejIgPSAodWxvbmcpTWF0aC5GbG9vcih4IC8gMC4yKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChEb3VibGUuUG9zaXRpdmVJbmZpbml0eSwgejIsIFwidWxvbmdcIik7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdChFeHBlY3RlZENvdW50ID0gNCldXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0SW50ZWdlckRpdmlzaW9uSW5KYXZhU2NyaXB0T3ZlcmZsb3dNb2RlKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHggPSAxLjE7XG5cbiAgICAgICAgICAgIGludCB5MSA9IChpbnQpKDEgLyB4KTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcIjAuOTA5MDkwOTA5MDkwOTA5MVwiLCB5MS5Ub1N0cmluZygpLCBcImludFwiKTtcblxuICAgICAgICAgICAgdWludCB5MiA9ICh1aW50KSgxIC8geCk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCIwLjkwOTA5MDkwOTA5MDkwOTFcIiwgeTIuVG9TdHJpbmcoKSwgXCJ1aW50XCIpO1xuXG4gICAgICAgICAgICBsb25nIHoxID0gKGxvbmcpKDEgLyB4KTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcIjAuOTA5MDkwOTA5MDkwOTA5MVwiLCB6MS5Ub1N0cmluZygpLCBcImxvbmdcIik7XG5cbiAgICAgICAgICAgIHVsb25nIHoyID0gKHVsb25nKSgxIC8geCk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCIwLjkwOTA5MDkwOTA5MDkwOTFcIiwgejIuVG9TdHJpbmcoKSwgXCJ1bG9uZ1wiKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJ1c2luZyBCcmlkZ2UuVGVzdC5OVW5pdDtcblxubmFtZXNwYWNlIEJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5CcmlkZ2VJc3N1ZXNcbntcbiAgICAvLyBCcmlkZ2VbIzEyMDRdXG4gICAgW0NhdGVnb3J5KENvbnN0YW50cy5NT0RVTEVfSVNTVUVTKV1cbiAgICBbVGVzdEZpeHR1cmUoVGVzdE5hbWVGb3JtYXQgPSBcIiMxMjA0IC0gXCIgKyBDb25zdGFudHMuQkFUQ0hfTkFNRSArIFwiIHswfVwiKV1cbiAgICBwdWJsaWMgY2xhc3MgTjEyMDRcbiAgICB7XG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdFN0cmljdE51bGxDaGVja3NPcHRpb25Gb3JOdWxscygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9iamVjdCB0ZW1wID0gbmV3IG9iamVjdCgpO1xuICAgICAgICAgICAgb2JqZWN0IHRlbXAxID0gdGVtcDtcbiAgICAgICAgICAgIG9iamVjdCB0ZW1wMiA9IG5ldyBvYmplY3QoKTtcbiAgICAgICAgICAgIGxvbmcgbCA9IDVMO1xuICAgICAgICAgICAgb2JqZWN0IG9sID0gNUw7XG4gICAgICAgICAgICBvYmplY3Qgb2kgPSA1O1xuICAgICAgICAgICAgb2JqZWN0IHZhck51bGwgPSBudWxsO1xuICAgICAgICAgICAgb2JqZWN0IHZhclVuZGVmaW5lZCA9IHRlbXBbXCJ0aGlzLXByb3AtdW5kZWZpbmVkXCJdO1xuXG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UodmFyTnVsbCA9PSB2YXJVbmRlZmluZWQsIFwidmFyTnVsbCA9PSB2YXJVbmRlZmluZWRcIik7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZSh2YXJOdWxsID09IG51bGwsIFwidmFyTnVsbCA9PSBudWxsXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKHZhclVuZGVmaW5lZCA9PSBudWxsLCBcInZhclVuZGVmaW5lZCA9PSBudWxsXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LlRydWUoU2NyaXB0LlVuZGVmaW5lZCA9PSB2YXJVbmRlZmluZWQsIFwiU2NyaXB0LlVuZGVmaW5lZCA9PSB2YXJVbmRlZmluZWRcIik7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZSh0ZW1wID09IHRlbXAxLCBcInRlbXAgPT0gdGVtcDFcIik7XG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UodGVtcCA9PSB0ZW1wMiwgXCJ0ZW1wID09IHRlbXAyXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LlRydWUobCA9PSA1LCBcImwgPT0gNVwiKTtcbiAgICAgICAgICAgIEFzc2VydC5GYWxzZShvbCA9PSBvaSwgXCJvbCA9PSBvaVwiKTtcblxuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKHZhclVuZGVmaW5lZCA9PSB2YXJOdWxsLCBcInZhclVuZGVmaW5lZCA9PSB2YXJOdWxsXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LlRydWUobnVsbCA9PSB2YXJOdWxsLCBcIm51bGwgPT0gdmFyTnVsbFwiKTtcbiAgICAgICAgICAgIEFzc2VydC5GYWxzZShudWxsID09IHZhclVuZGVmaW5lZCwgXCJudWxsID09IHZhclVuZGVmaW5lZFwiKTtcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKHZhclVuZGVmaW5lZCA9PSBTY3JpcHQuVW5kZWZpbmVkLCBcInZhclVuZGVmaW5lZCA9PSBTY3JpcHQuVW5kZWZpbmVkXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LlRydWUodGVtcDEgPT0gdGVtcCwgXCJ0ZW1wMSA9PSB0ZW1wXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKHRlbXAyID09IHRlbXAsIFwidGVtcDIgPT0gdGVtcFwiKTtcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKDUgPT0gbCwgXCI1ID09IGxcIik7XG4gICAgICAgICAgICBBc3NlcnQuRmFsc2Uob2kgPT0gb2wsIFwib2kgPT0gb2xcIik7XG4gICAgICAgIH1cbiAgICB9XG59IiwidXNpbmcgQnJpZGdlLlRlc3QuTlVuaXQ7XG51c2luZyBTeXN0ZW07XG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnM7XG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcbnVzaW5nIFN5c3RlbS5MaW5xO1xuXG5uYW1lc3BhY2UgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkJyaWRnZUlzc3Vlc1xue1xuICAgIC8vIEJyaWRnZVsjMzA3NV1cbiAgICAvLyByZXByb2R1Y2lhYmxlIGlmIHNvdXJjZSBtYXAgZ2VuZXJhdGlvbiBpcyBlbmFibGVkXG4gICAgW0NhdGVnb3J5KENvbnN0YW50cy5NT0RVTEVfSVNTVUVTKV1cbiAgICBbVGVzdEZpeHR1cmUoVGVzdE5hbWVGb3JtYXQgPSBcIiMzMDc1IC0gXCIgKyBDb25zdGFudHMuQkFUQ0hfTkFNRSArIFwiIHswfVwiKV1cbiAgICBwdWJsaWMgY2xhc3MgTjMwNzVcbiAgICB7XG4gICAgICAgIFtFbnVtKEVtaXQuU3RyaW5nTmFtZVByZXNlcnZlQ2FzZSldXG4gICAgICAgIHB1YmxpYyBlbnVtIFNvbWVUeXBlXG4gICAgICAgIHtcbiAgICAgICAgICAgIEFwcGxlXG4gICAgICAgIH1cblxuICAgICAgICBbVGVtcGxhdGUoXCJ7MDpyYXd9XCIpXVxuICAgICAgICBwdWJsaWMgZXh0ZXJuIHN0YXRpYyBpbnQgVGVzdChTb21lVHlwZSBlbGVtZW50VHlwZSk7XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIFRlc3RSYXdNb2RpZmllcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBBcHBsZSA9IDE7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoQXBwbGUsIFRlc3QoU29tZVR5cGUuQXBwbGUpKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJ1c2luZyBCcmlkZ2UuVGVzdC5OVW5pdDtcbnVzaW5nIFN5c3RlbTtcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucztcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xudXNpbmcgU3lzdGVtLkxpbnE7XG5cbm5hbWVzcGFjZSBCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQnJpZGdlSXNzdWVzXG57XG4gICAgLy8gQnJpZGdlWyM3NzJdXG4gICAgLy8gXCJ1c2VUeXBlZEFycmF5XCIgYnJpZGdlLmpzb24gb3B0aW9uIGlzIHRydWUgaW4gdGhpcyBwcm9qZWN0XG4gICAgW0NhdGVnb3J5KENvbnN0YW50cy5NT0RVTEVfSVNTVUVTKV1cbiAgICBbVGVzdEZpeHR1cmUoVGVzdE5hbWVGb3JtYXQgPSBcIiM3NzIgLSBcIiArIENvbnN0YW50cy5CQVRDSF9OQU1FICsgXCIgezB9XCIpXVxuICAgIHB1YmxpYyBjbGFzcyBONzcyXG4gICAge1xuICAgICAgICBwcml2YXRlIGNsYXNzIENcbiAgICAgICAge1xuICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IGludCBpO1xuXG4gICAgICAgICAgICBwdWJsaWMgQyhpbnQgaSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmkgPSBpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgYm9vbCBFcXVhbHMob2JqZWN0IG8pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG8gaXMgQyAmJiBpID09ICgoQylvKS5pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgaW50IEdldEhhc2hDb2RlKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBUeXBlUHJvcGVydGllc0FyZUNvcnJlY3QoKVxuICAgICAgICB7XG4gICAgICAgICAgICBvYmplY3QgYXJyID0gbmV3W10geyAxLCAyLCAzIH07XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShhcnIgaXMgQXJyYXksIFwiaXMgQXJyYXkgc2hvdWxkIGJlIHRydWVcIik7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShhcnIgaXMgaW50W10sIFwiaXMgaW50W10gc2hvdWxkIGJlIHRydWVcIik7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShhcnIgaXMgSUNvbGxlY3Rpb24sIFwiaXMgSUNvbGxlY3Rpb24gc2hvdWxkIGJlIHRydWVcIik7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShhcnIgaXMgSUVudW1lcmFibGUsIFwiaXMgSUVudW1lcmFibGUgc2hvdWxkIGJlIHRydWVcIik7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShhcnIgaXMgSUNsb25lYWJsZSwgXCJpcyBJQ2xvbmVhYmxlIHNob3VsZCBiZSB0cnVlXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LlRydWUoYXJyIGlzIElDb2xsZWN0aW9uPGludD4sIFwiaXMgSUNvbGxlY3Rpb248aW50PiBzaG91bGQgYmUgdHJ1ZVwiKTtcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKGFyciBpcyBJRW51bWVyYWJsZTxpbnQ+LCBcImlzIElFbnVtZXJhYmxlPGludD4gc2hvdWxkIGJlIHRydWVcIik7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShhcnIgaXMgSUxpc3Q8aW50PiwgXCJpcyBJTGlzdDxpbnQ+IHNob3VsZCBiZSB0cnVlXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIExlbmd0aFdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDAsIG5ldyBpbnRbMF0uTGVuZ3RoKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgxLCBuZXdbXSB7IFwieFwiIH0uTGVuZ3RoKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgyLCBuZXdbXSB7IFwieFwiLCBcInlcIiB9Lkxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgUmFua0lzT25lKClcbiAgICAgICAge1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDEsIG5ldyBpbnRbMF0uUmFuayk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgR2V0TGVuZ3RoV29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMCwgbmV3IGludFswXS5HZXRMZW5ndGgoMCkpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDEsIG5ld1tdIHsgXCJ4XCIgfS5HZXRMZW5ndGgoMCkpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDIsIG5ld1tdIHsgXCJ4XCIsIFwieVwiIH0uR2V0TGVuZ3RoKDApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBHZXRMb3dlckJvdW5kKClcbiAgICAgICAge1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDAsIG5ldyBpbnRbMF0uR2V0TG93ZXJCb3VuZCgwKSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMCwgbmV3W10geyBcInhcIiB9LkdldExvd2VyQm91bmQoMCkpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDAsIG5ld1tdIHsgXCJ4XCIsIFwieVwiIH0uR2V0TG93ZXJCb3VuZCgwKSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgR2V0VXBwZXJCb3VuZFdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKC0xLCBuZXcgaW50WzBdLkdldFVwcGVyQm91bmQoMCkpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDAsIG5ld1tdIHsgXCJ4XCIgfS5HZXRVcHBlckJvdW5kKDApKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgxLCBuZXdbXSB7IFwieFwiLCBcInlcIiB9LkdldFVwcGVyQm91bmQoMCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIEdldHRpbmdWYWx1ZUJ5SW5kZXhXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcInhcIiwgbmV3W10geyBcInhcIiwgXCJ5XCIgfVswXSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJ5XCIsIG5ld1tdIHsgXCJ4XCIsIFwieVwiIH1bMV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIEdldFZhbHVlV29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJ4XCIsIG5ld1tdIHsgXCJ4XCIsIFwieVwiIH0uR2V0VmFsdWUoMCkpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwieVwiLCBuZXdbXSB7IFwieFwiLCBcInlcIiB9LkdldFZhbHVlKDEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBTZXR0aW5nVmFsdWVCeUluZGV4V29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3IHN0cmluZ1syXTtcbiAgICAgICAgICAgIGFyclswXSA9IFwieFwiO1xuICAgICAgICAgICAgYXJyWzFdID0gXCJ5XCI7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJ4XCIsIGFyclswXSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJ5XCIsIGFyclsxXSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgU2V0VmFsdWVXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXcgc3RyaW5nWzJdO1xuICAgICAgICAgICAgYXJyLlNldFZhbHVlKFwieFwiLCAwKTtcbiAgICAgICAgICAgIGFyci5TZXRWYWx1ZShcInlcIiwgMSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJ4XCIsIGFyclswXSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJ5XCIsIGFyclsxXSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgRm9yZWFjaFdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgc3RyaW5nIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgICAgICBmb3JlYWNoICh2YXIgcyBpbiBuZXdbXSB7IFwieFwiLCBcInlcIiB9KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwieHlcIiwgcmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBDbG9uZVdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgXCJ4XCIsIFwieVwiIH07XG4gICAgICAgICAgICB2YXIgYXJyMiA9IGFyci5DbG9uZSgpO1xuICAgICAgICAgICAgQXNzZXJ0LkZhbHNlKGFyciA9PSBhcnIyKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChhcnIyLCBhcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIENvbmNhdFdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgXCJhXCIsIFwiYlwiIH07XG4gICAgICAgICAgICBBc3NlcnQuQXJlRGVlcEVxdWFsKG5ld1tdIHsgXCJhXCIsIFwiYlwiLCBcImNcIiB9LCBhcnIuQ29uY2F0KFwiY1wiKSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRGVlcEVxdWFsKG5ld1tdIHsgXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJkXCIgfSwgYXJyLkNvbmNhdChcImNcIiwgXCJkXCIpKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVEZWVwRXF1YWwobmV3W10geyBcImFcIiwgXCJiXCIgfSwgYXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBDb250YWluc1dvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgXCJ4XCIsIFwieVwiIH07XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShTeXN0ZW0uQXJyYXlFeHRlbnNpb25zLkNvbnRhaW5zPHN0cmluZz4oYXJyLFwieFwiKSk7XG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UoU3lzdGVtLkFycmF5RXh0ZW5zaW9ucy5Db250YWluczxzdHJpbmc+KGFycixcInpcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIENvbnRhaW5zVXNlc0VxdWFsc01ldGhvZCgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIENbXSBhcnIgPSBuZXdbXSB7IG5ldyBDKDEpLCBuZXcgQygyKSwgbmV3IEMoMykgfTtcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKFN5c3RlbS5BcnJheUV4dGVuc2lvbnMuQ29udGFpbnM8Z2xvYmFsOjpCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQnJpZGdlSXNzdWVzLk43NzIuQz4oYXJyLG5ldyBDKDIpKSk7XG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UoU3lzdGVtLkFycmF5RXh0ZW5zaW9ucy5Db250YWluczxnbG9iYWw6OkJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5CcmlkZ2VJc3N1ZXMuTjc3Mi5DPihhcnIsbmV3IEMoNCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBBbGxXaXRoQXJyYXlJdGVtRmlsdGVyQ2FsbGJhY2tXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKFN5c3RlbS5MaW5xLkVudW1lcmFibGUuQWxsPGludD4obmV3W10geyAxLCAyLCAzIH0sKGdsb2JhbDo6U3lzdGVtLkZ1bmM8aW50LCBib29sPikoeCA9PiB4ID4gMCkpKTtcbiAgICAgICAgICAgIEFzc2VydC5GYWxzZShTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLkFsbDxpbnQ+KG5ld1tdIHsgMSwgMiwgMyB9LChnbG9iYWw6OlN5c3RlbS5GdW5jPGludCwgYm9vbD4pKHggPT4geCA+IDEpKSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgU2xpY2VXaXRob3V0RW5kV29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRGVlcEVxdWFsKG5ld1tdIHsgXCJjXCIsIFwiZFwiIH0sIG5ld1tdIHsgXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJkXCIgfS5TbGljZSgyKSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRGVlcEVxdWFsKG5ld1tdIHsgXCJiXCIsIFwiY1wiIH0sIG5ld1tdIHsgXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJkXCIgfS5TbGljZSgxLCAzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgRm9yZWFjaFdpdGhBcnJheUl0ZW1DYWxsYmFja1dvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgc3RyaW5nIHJlc3VsdCA9IFwiXCI7XG5TeXN0ZW0uQXJyYXlFeHRlbnNpb25zLkZvckVhY2g8c3RyaW5nPiggICAgICAgICAgICBuZXdbXSB7IFwiYVwiLCBcImJcIiwgXCJjXCIgfSwoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uPHN0cmluZz4pKHMgPT4gcmVzdWx0ICs9IHMpKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcImFiY1wiLCByZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIEluZGV4T2ZXaXRob3V0U3RhcnRJbmRleFdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDEsIG5ld1tdIHsgXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJiXCIgfS5JbmRleE9mKFwiYlwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgSW5kZXhPZldpdGhvdXRTdGFydEluZGV4VXNlc0VxdWFsc01ldGhvZCgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IG5ldyBDKDEpLCBuZXcgQygyKSwgbmV3IEMoMykgfTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgxLCBBcnJheS5JbmRleE9mPGdsb2JhbDo6QnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyLkJyaWRnZUlzc3Vlcy5ONzcyLkM+KGFyciwgbmV3IEMoMikpKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgtMSwgQXJyYXkuSW5kZXhPZjxnbG9iYWw6OkJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5CcmlkZ2VJc3N1ZXMuTjc3Mi5DPihhcnIsIG5ldyBDKDQpKSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgSW5kZXhPZldpdGhTdGFydEluZGV4V29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMywgbmV3W10geyBcImFcIiwgXCJiXCIsIFwiY1wiLCBcImJcIiB9LkluZGV4T2YoXCJiXCIsIDIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBKb2luV2l0aG91dERlbGltaXRlcldvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwiYSxiLGMsYlwiLCBuZXdbXSB7IFwiYVwiLCBcImJcIiwgXCJjXCIsIFwiYlwiIH0uSm9pbihcIixcIikpO1xuXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoXCJhfGJ8Y3xiXCIsIG5ld1tdIHsgXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJiXCIgfS5Kb2luKFwifFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgUmV2ZXJzZVdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgMSwgMywgNCwgMSwgMywgMiB9O1xuICAgICAgICAgICAgYXJyLlJldmVyc2UoKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChuZXdbXSB7IDIsIDMsIDEsIDQsIDMsIDEgfSwgYXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBBbnlXaXRoQXJyYXlJdGVtRmlsdGVyQ2FsbGJhY2tXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKFN5c3RlbS5MaW5xLkVudW1lcmFibGUuQW55PGludD4obmV3W10geyAxLCAyLCAzLCA0IH0sKGdsb2JhbDo6U3lzdGVtLkZ1bmM8aW50LCBib29sPikoaSA9PiBpID4gMSkpKTtcbiAgICAgICAgICAgIEFzc2VydC5GYWxzZShTeXN0ZW0uTGlucS5FbnVtZXJhYmxlLkFueTxpbnQ+KG5ld1tdIHsgMSwgMiwgMywgNCB9LChnbG9iYWw6OlN5c3RlbS5GdW5jPGludCwgYm9vbD4pKGkgPT4gaSA+IDUpKSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgQmluYXJ5U2VhcmNoMVdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgMSwgMiwgMywgMywgNCwgNSB9O1xuXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMiwgQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyLCAzKSk7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShBcnJheS5CaW5hcnlTZWFyY2g8aW50PihhcnIsIDYpIDwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgQmluYXJ5U2VhcmNoMldvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgMSwgMiwgMywgMywgNCwgNSB9O1xuXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMywgQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyLCAzLCAyLCAzKSk7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShBcnJheS5CaW5hcnlTZWFyY2g8aW50PihhcnIsIDIsIDIsIDQpIDwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIGNsYXNzIFRlc3RSZXZlcnNlQ29tcGFyZXIgOiBJQ29tcGFyZXI8aW50PlxuICAgICAgICB7XG4gICAgICAgICAgICBwdWJsaWMgaW50IENvbXBhcmUoaW50IHgsIGludCB5KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB4ID09IHkgPyAwIDogKHggPiB5ID8gLTEgOiAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBCaW5hcnlTZWFyY2gzV29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyAxLCAyLCAzLCAzLCA0LCA1IH07XG5cbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgyLCBBcnJheS5CaW5hcnlTZWFyY2g8aW50PihhcnIsIDMsIG5ldyBUZXN0UmV2ZXJzZUNvbXBhcmVyKCkpKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgtMSwgQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyLCA2LCBuZXcgVGVzdFJldmVyc2VDb21wYXJlcigpKSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgQmluYXJ5U2VhcmNoNFdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgMSwgMiwgMywgMywgNCwgNSB9O1xuXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMywgQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyLCAzLCAyLCAzLCBuZXcgVGVzdFJldmVyc2VDb21wYXJlcigpKSk7XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShBcnJheS5CaW5hcnlTZWFyY2g8aW50PihhcnIsIDMsIDIsIDQsIG5ldyBUZXN0UmV2ZXJzZUNvbXBhcmVyKCkpIDwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgQmluYXJ5U2VhcmNoRXhjZXB0aW9uc1dvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgaW50W10gYXJyMSA9IG51bGw7XG4gICAgICAgICAgICB2YXIgYXJyMiA9IG5ld1tdIHsgMSwgMiwgMywgMywgNCwgNSB9O1xuXG4gICAgICAgICAgICBBc3NlcnQuVGhyb3dzKChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQXJyYXkuQmluYXJ5U2VhcmNoPGludD4oYXJyMSwgMSk7IH0pKTtcbiAgICAgICAgICAgIEFzc2VydC5UaHJvd3MoKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBBcnJheS5CaW5hcnlTZWFyY2g8aW50PihhcnIyLCAtMSwgMSwgMSk7IH0pKTtcbiAgICAgICAgICAgIEFzc2VydC5UaHJvd3MoKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBBcnJheS5CaW5hcnlTZWFyY2g8aW50PihhcnIyLCAxLCA2LCAxKTsgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIFNvcnRXaXRoRGVmYXVsdENvbXBhcmVXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IDEsIDYsIDYsIDQsIDIgfTtcbiAgICAgICAgICAgIGFyci5Kc1NvcnQoKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChuZXdbXSB7IDEsIDIsIDQsIDYsIDYgfSwgYXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBTb3J0MVdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgMSwgNiwgNiwgNCwgMiB9O1xuICAgICAgICAgICAgQXJyYXkuU29ydDxpbnQ+KGFycik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwobmV3W10geyAxLCAyLCA0LCA2LCA2IH0sIGFycik7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgU29ydDJXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBhcnIgPSBuZXdbXSB7IDEsIDYsIDYsIDQsIDIgfTtcbiAgICAgICAgICAgIEFycmF5LlNvcnQ8aW50PihhcnIsIDIsIDMpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKG5ld1tdIHsgMSwgNiwgMiwgNCwgNiB9LCBhcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIFNvcnQzV29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyAxLCAyLCA2LCAzLCA2LCA3IH07XG4gICAgICAgICAgICBBcnJheS5Tb3J0PGludD4oYXJyLCAyLCAzLCBuZXcgVGVzdFJldmVyc2VDb21wYXJlcigpKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChuZXdbXSB7IDEsIDIsIDYsIDYsIDMsIDcgfSwgYXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBTb3J0NFdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGFyciA9IG5ld1tdIHsgMSwgNiwgNiwgNCwgMiB9O1xuICAgICAgICAgICAgQXJyYXkuU29ydDxpbnQ+KGFyciwgbmV3IFRlc3RSZXZlcnNlQ29tcGFyZXIoKSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwobmV3W10geyA2LCA2LCA0LCAyLCAxIH0sIGFycik7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgU29ydEV4Y2VwdGlvbnNXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGludFtdIGFycjEgPSBudWxsO1xuXG4gICAgICAgICAgICBBc3NlcnQuVGhyb3dzKChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQXJyYXkuU29ydDxpbnQ+KGFycjEpOyB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgRm9yZWFjaFdoZW5DYXN0VG9JTGlzdFdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgSUxpc3Q8c3RyaW5nPiBsaXN0ID0gbmV3W10geyBcInhcIiwgXCJ5XCIgfTtcbiAgICAgICAgICAgIHN0cmluZyByZXN1bHQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yZWFjaCAodmFyIHMgaW4gbGlzdClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcInh5XCIsIHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgSUNvbGxlY3Rpb25Db3VudFdvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgSUxpc3Q8c3RyaW5nPiBsID0gbmV3W10geyBcInhcIiwgXCJ5XCIsIFwielwiIH07XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMywgbC5Db3VudCk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgSUNvbGxlY3Rpb25BZGRXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIElMaXN0PHN0cmluZz4gbCA9IG5ld1tdIHsgXCJ4XCIsIFwieVwiLCBcInpcIiB9O1xuICAgICAgICAgICAgQXNzZXJ0LlRocm93czxOb3RTdXBwb3J0ZWRFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgbC5BZGQoXCJhXCIpOyB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgSUNvbGxlY3Rpb25DbGVhcldvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgSUxpc3Q8c3RyaW5nPiBsID0gbmV3W10geyBcInhcIiwgXCJ5XCIsIFwielwiIH07XG4gICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE5vdFN1cHBvcnRlZEV4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBsLkNsZWFyKCk7IH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtUZXN0XVxuICAgICAgICBwdWJsaWMgdm9pZCBJQ29sbGVjdGlvbkNvbnRhaW5zV29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICBJTGlzdDxzdHJpbmc+IGwgPSBuZXdbXSB7IFwieFwiLCBcInlcIiwgXCJ6XCIgfTtcbiAgICAgICAgICAgIEFzc2VydC5UcnVlKGwuQ29udGFpbnMoXCJ5XCIpKTtcbiAgICAgICAgICAgIEFzc2VydC5GYWxzZShsLkNvbnRhaW5zKFwiYVwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBbVGVzdF1cbiAgICAgICAgcHVibGljIHZvaWQgSUNvbGxlY3Rpb25Db250YWluc1VzZXNFcXVhbHNNZXRob2QoKVxuICAgICAgICB7XG4gICAgICAgICAgICBJTGlzdDxDPiBsID0gbmV3W10geyBuZXcgQygxKSwgbmV3IEMoMiksIG5ldyBDKDMpIH07XG4gICAgICAgICAgICBBc3NlcnQuVHJ1ZShsLkNvbnRhaW5zKG5ldyBDKDIpKSk7XG4gICAgICAgICAgICBBc3NlcnQuRmFsc2UobC5Db250YWlucyhuZXcgQyg0KSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIElDb2xsZWN0aW9uUmVtb3ZlV29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICBJTGlzdDxzdHJpbmc+IGwgPSBuZXdbXSB7IFwieFwiLCBcInlcIiwgXCJ6XCIgfTtcbiAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8Tm90U3VwcG9ydGVkRXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IGwuUmVtb3ZlKFwieVwiKTsgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIElMaXN0SW5kZXhpbmdXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIElMaXN0PHN0cmluZz4gbCA9IG5ld1tdIHsgXCJ4XCIsIFwieVwiLCBcInpcIiB9O1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKFwieVwiLCBsWzFdKTtcbiAgICAgICAgICAgIGxbMV0gPSBcImFcIjtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChuZXdbXSB7IFwieFwiLCBcImFcIiwgXCJ6XCIgfSwgU3lzdGVtLkxpbnEuRW51bWVyYWJsZS5Ub0FycmF5PHN0cmluZz4obCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIElMaXN0SW5kZXhPZldvcmtzKClcbiAgICAgICAge1xuICAgICAgICAgICAgSUxpc3Q8c3RyaW5nPiBsID0gbmV3W10geyBcInhcIiwgXCJ5XCIsIFwielwiIH07XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMSwgbC5JbmRleE9mKFwieVwiKSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoLTEsIGwuSW5kZXhPZihcImFcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIElMaXN0SW5kZXhPZlVzZXNFcXVhbHNNZXRob2QoKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgYXJyID0gbmV3W10geyBuZXcgQygxKSwgbmV3IEMoMiksIG5ldyBDKDMpIH07XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMSwgQXJyYXkuSW5kZXhPZjxnbG9iYWw6OkJyaWRnZS5DbGllbnRUZXN0LkJhdGNoMi5CcmlkZ2VJc3N1ZXMuTjc3Mi5DPihhcnIsIG5ldyBDKDIpKSk7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoLTEsIEFycmF5LkluZGV4T2Y8Z2xvYmFsOjpCcmlkZ2UuQ2xpZW50VGVzdC5CYXRjaDIuQnJpZGdlSXNzdWVzLk43NzIuQz4oYXJyLCBuZXcgQyg0KSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIElMaXN0SW5zZXJ0V29ya3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICBJTGlzdDxzdHJpbmc+IGwgPSBuZXdbXSB7IFwieFwiLCBcInlcIiwgXCJ6XCIgfTtcbiAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8Tm90U3VwcG9ydGVkRXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IGwuSW5zZXJ0KDEsIFwiYVwiKTsgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3RdXG4gICAgICAgIHB1YmxpYyB2b2lkIElMaXN0UmVtb3ZlQXRXb3JrcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIElMaXN0PHN0cmluZz4gbCA9IG5ld1tdIHsgXCJ4XCIsIFwieVwiLCBcInpcIiB9O1xuICAgICAgICAgICAgQXNzZXJ0LlRocm93czxOb3RTdXBwb3J0ZWRFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgbC5SZW1vdmVBdCgxKTsgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgW1Rlc3QoRXhwZWN0ZWRDb3VudCA9IDEwKV1cbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RVc2VDYXNlKClcbiAgICAgICAge1xuICAgICAgICAgICAgLy9UaGVzZSBhcnJheXMgZGVwZW5kIG9uIFwidXNlVHlwZWRBcnJheVwiIGJyaWRnZS5qc29uIG9wdGlvblxuICAgICAgICAgICAgdmFyIGJ5dGVBcnJheSA9IG5ldyBieXRlWzFdO1xuICAgICAgICAgICAgdmFyIHNieXRlQXJyYXkgPSBuZXcgc2J5dGVbMl07XG4gICAgICAgICAgICB2YXIgc2hvcnRBcnJheSA9IG5ldyBzaG9ydFszXTtcbiAgICAgICAgICAgIHZhciB1c2hvcnRBcnJheSA9IG5ldyB1c2hvcnRbNF07XG4gICAgICAgICAgICB2YXIgaW50QXJyYXkgPSBuZXcgaW50WzVdO1xuICAgICAgICAgICAgdmFyIHVpbnRBcnJheSA9IG5ldyB1aW50WzZdO1xuICAgICAgICAgICAgdmFyIGZsb2F0QXJyYXkgPSBuZXcgZmxvYXRbN107XG4gICAgICAgICAgICB2YXIgZG91YmxlQXJyYXkgPSBuZXcgZG91YmxlWzhdO1xuXG4gICAgICAgICAgICAvL1RoZXNlIGFycmF5cyBkbyBub3QgZGVwZW5kIG9uIFwidXNlVHlwZWRBcnJheVwiIGJyaWRnZS5qc29uIG9wdGlvblxuICAgICAgICAgICAgdmFyIHN0cmluZ0FycmF5ID0gbmV3IHN0cmluZ1s5XTtcbiAgICAgICAgICAgIHZhciBkZWNpbWFsQXJyYXkgPSBuZXcgZGVjaW1hbFsxMF07XG5cbiAgICAgICAgICAgIGJ5dGVBcnJheVswXSA9IDE7XG4gICAgICAgICAgICBzYnl0ZUFycmF5WzBdID0gMjtcbiAgICAgICAgICAgIHNob3J0QXJyYXlbMF0gPSAzO1xuICAgICAgICAgICAgdXNob3J0QXJyYXlbMF0gPSA0O1xuICAgICAgICAgICAgaW50QXJyYXlbMF0gPSA1O1xuICAgICAgICAgICAgdWludEFycmF5WzBdID0gNjtcbiAgICAgICAgICAgIGZsb2F0QXJyYXlbMF0gPSA3O1xuICAgICAgICAgICAgZG91YmxlQXJyYXlbMF0gPSA4O1xuXG4gICAgICAgICAgICBzdHJpbmdBcnJheVswXSA9IFwiOVwiO1xuICAgICAgICAgICAgZGVjaW1hbEFycmF5WzBdID0gMTBtO1xuXG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMSwgYnl0ZUFycmF5WzBdLCBcImdldCBieXRlQXJyYXlbMF1cIik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoMiwgc2J5dGVBcnJheVswXSwgXCJnZXQgc2J5dGVBcnJheVswXVwiKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCgzLCBzaG9ydEFycmF5WzBdLCBcImdldCBzaG9ydEFycmF5WzBdXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDQsIHVzaG9ydEFycmF5WzBdLCBcImdldCB1c2hvcnRBcnJheVswXVwiKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCg1LCBpbnRBcnJheVswXSwgXCJnZXQgaW50QXJyYXlbMF1cIik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoNiwgdWludEFycmF5WzBdLCBcImdldCB1aW50QXJyYXlbMF1cIik7XG4gICAgICAgICAgICBBc3NlcnQuQXJlRXF1YWwoNywgZmxvYXRBcnJheVswXSwgXCJnZXQgZmxvYXRBcnJheVswXVwiKTtcbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbCg4LCBkb3VibGVBcnJheVswXSwgXCJnZXQgZG91YmxlQXJyYXlbMF1cIik7XG5cbiAgICAgICAgICAgIEFzc2VydC5BcmVFcXVhbChcIjlcIiwgc3RyaW5nQXJyYXlbMF0sIFwiZ2V0IHN0cmluZ0FycmF5WzBdXCIpO1xuICAgICAgICAgICAgQXNzZXJ0LkFyZUVxdWFsKDEwbSwgZGVjaW1hbEFycmF5WzBdLCBcImdldCBkZWNpbWFsQXJyYXlbMF1cIik7XG4gICAgICAgIH1cbiAgICB9XG59IiwidXNpbmcgQnJpZGdlLlRlc3QuTlVuaXQ7XG51c2luZyBCcmlkZ2UuQ2xpZW50VGVzdEhlbHBlcjtcblxudXNpbmcgU3lzdGVtO1xuXG5uYW1lc3BhY2UgQnJpZGdlLkNsaWVudFRlc3QuQmF0Y2gyXG57XG4gICAgLy8gQnJpZGdlWyMxMDkyXVxuICAgIC8vIFwib3ZlcmZsb3dNb2RlXCI6ICBcIkphdmFzY3JpcHRcIiBicmlkZ2UuanNvbiBvcHRpb25cbiAgICBwdWJsaWMgY2xhc3MgQ2hlY2tlZFVuY2hlY2tlZFRlc3RzXG4gICAge1xuICAgICAgICBwcml2YXRlIHN0YXRpYyBvYmplY3QgQnlwYXNzKG9iamVjdCBvKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfVxuXG4gICAgICAgIFtDYXRlZ29yeShDb25zdGFudHMuTU9EVUxFX0NIRUNLRURfVU5DS0VDS0VEKV1cbiAgICAgICAgW1Rlc3RGaXh0dXJlKFRlc3ROYW1lRm9ybWF0ID0gXCJDaGVja2VkIC0gXCIgKyBDb25zdGFudHMuQkFUQ0hfTkFNRSArIFwiIHswfVwiKV1cbiAgICAgICAgcHVibGljIGNsYXNzIENoZWNrZWRUZXN0c1xuICAgICAgICB7XG4gICAgICAgICAgICBbVGVzdF1cbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0SW50MzIoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoZWNrZWRcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSBJbnQzMi5NYXhWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcblxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4ICsgMTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXgyKys7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSArK21heDM7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IDIgKiBtYXg7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnlwYXNzKG1heCArIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcyhtYXgzKyspOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnlwYXNzKCsrbWF4NCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcygyICogbWF4KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gSW50MzIuTWluVmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XG5cbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbiAtIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWluMS0tOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gLS1taW4yOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcHJlLS1cIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtbWluOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgdW5hcnkgLVwiKTtcblxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcyhtaW4gLSAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCeXBhc3MobWluMy0tKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcygtLW1pbjQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCeXBhc3MoLW1pbik7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbVGVzdF1cbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0VUludDMyKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gVUludDMyLk1heFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xuXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXggKyAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heDErKzsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9ICsrbWF4MjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gMiAqIG1heDsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCeXBhc3MobWF4ICsgMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnlwYXNzKG1heDMrKyk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCeXBhc3MoKyttYXg0KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnlwYXNzKDIgKiBtYXgpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBVSW50MzIuTWluVmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XG5cbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbiAtIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWluMS0tOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gLS1taW4yOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcHJlLS1cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCeXBhc3MobWluIC0gMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnlwYXNzKG1pbjMtLSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCeXBhc3MoLS1taW40KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbVGVzdF1cbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0TG9uZygpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IGxvbmcuTWF4VmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XG5cbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1heCArIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4MSsrOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gKyttYXgyOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAyICogbWF4OyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcyhtYXggKyAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCeXBhc3MobWF4MysrKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcygrK21heDQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCeXBhc3MoMiAqIG1heCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IGxvbmcuTWluVmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XG5cbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbiAtIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWluMS0tOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gLS1taW4yOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcHJlLS1cIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtbWluOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgdW5hcnkgLVwiKTtcblxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcyhtaW4gLSAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCeXBhc3MobWluMy0tKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcygtLW1pbjQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCeXBhc3MoLW1pbik7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbVGVzdF1cbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0VUxvbmcoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoZWNrZWRcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSB1bG9uZy5NYXhWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcblxuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4ICsgMTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXgxKys7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSArK21heDI7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IDIgKiBtYXg7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnlwYXNzKG1heCArIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcyhtYXgzKyspOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnlwYXNzKCsrbWF4NCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcygyICogbWF4KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gdWxvbmcuTWluVmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XG5cbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbiAtIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWluMS0tOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gLS1taW4yOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcHJlLS1cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCeXBhc3MobWluIC0gMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnlwYXNzKG1pbjMtLSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCeXBhc3MoLS1taW40KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgW0NhdGVnb3J5KENvbnN0YW50cy5NT0RVTEVfQ0hFQ0tFRF9VTkNLRUNLRUQpXVxuICAgICAgICBbVGVzdEZpeHR1cmUoVGVzdE5hbWVGb3JtYXQgPSBcIkNoZWNrZWRJbnNpZGVVbmNoZWNrZWQgLSBcIiArIENvbnN0YW50cy5CQVRDSF9OQU1FICsgXCIgezB9XCIpXVxuICAgICAgICBwdWJsaWMgY2xhc3MgQ2hlY2tlZEluc2lkZVVuY2hlY2tlZFRlc3RzXG4gICAgICAgIHtcbiAgICAgICAgICAgIFtUZXN0XVxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RJbnQzMigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdW5jaGVja2VkXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjaGVja2VkXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSBJbnQzMi5NYXhWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXggKyAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXgyKys7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gKyttYXgzOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gMiAqIG1heDsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnlwYXNzKG1heCArIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCeXBhc3MobWF4MysrKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCeXBhc3MoKyttYXg0KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcygyICogbWF4KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IEludDMyLk1pblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbiAtIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbjEtLTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtLW1pbjI7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwcmUtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtbWluOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgdW5hcnkgLVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCeXBhc3MobWluIC0gMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcyhtaW4zLS0pOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcygtLW1pbjQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnlwYXNzKC1taW4pOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbVGVzdF1cbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0VUludDMyKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1bmNoZWNrZWRcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IFVJbnQzMi5NYXhWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXggKyAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtYXgxKys7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gKyttYXgyOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gMiAqIG1heDsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnlwYXNzKG1heCArIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCeXBhc3MobWF4MysrKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCeXBhc3MoKyttYXg0KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcygyICogbWF4KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IFVJbnQzMi5NaW5WYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4gLSAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4xLS07IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gLS1taW4yOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcHJlLS1cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnlwYXNzKG1pbiAtIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCeXBhc3MobWluMy0tKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCeXBhc3MoLS1taW40KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtUZXN0XVxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RMb25nKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1bmNoZWNrZWRcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IGxvbmcuTWF4VmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4ICsgMTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4MSsrOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9ICsrbWF4MjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IDIgKiBtYXg7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcyhtYXggKyAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnlwYXNzKG1heDMrKyk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnlwYXNzKCsrbWF4NCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCeXBhc3MoMiAqIG1heCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBsb25nLk1pblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbiAtIDE7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IG1pbjEtLTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtLW1pbjI7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwcmUtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSAtbWluOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgdW5hcnkgLVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCeXBhc3MobWluIC0gMSk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcyhtaW4zLS0pOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcygtLW1pbjQpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnlwYXNzKC1taW4pOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbVGVzdF1cbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0VUxvbmcoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVuY2hlY2tlZFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gdWxvbmcuTWF4VmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4ICsgMTsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gbWF4MSsrOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9ICsrbWF4MjsgfSksIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyB2YXIgciA9IDIgKiBtYXg7IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IEJ5cGFzcyhtYXggKyAxKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnlwYXNzKG1heDMrKyk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnlwYXNzKCsrbWF4NCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCeXBhc3MoMiAqIG1heCk7IH0pLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSB1bG9uZy5NaW5WYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4gLSAxOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgdmFyIHIgPSBtaW4xLS07IH0pLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBc3NlcnQuVGhyb3dzPE92ZXJmbG93RXhjZXB0aW9uPigoZ2xvYmFsOjpTeXN0ZW0uQWN0aW9uKSgoKSA9PiB7IHZhciByID0gLS1taW4yOyB9KSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcHJlLS1cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2VydC5UaHJvd3M8T3ZlcmZsb3dFeGNlcHRpb24+KChnbG9iYWw6OlN5c3RlbS5BY3Rpb24pKCgpID0+IHsgQnlwYXNzKG1pbiAtIDEpOyB9KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCeXBhc3MobWluMy0tKTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXJ0LlRocm93czxPdmVyZmxvd0V4Y2VwdGlvbj4oKGdsb2JhbDo6U3lzdGVtLkFjdGlvbikoKCkgPT4geyBCeXBhc3MoLS1taW40KTsgfSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBbQ2F0ZWdvcnkoQ29uc3RhbnRzLk1PRFVMRV9DSEVDS0VEX1VOQ0tFQ0tFRCldXG4gICAgICAgIFtUZXN0Rml4dHVyZShUZXN0TmFtZUZvcm1hdCA9IFwiVW5jaGVja2VkIC0gXCIgKyBDb25zdGFudHMuQkFUQ0hfTkFNRSArIFwiIHswfVwiKV1cbiAgICAgICAgcHVibGljIGNsYXNzIFVuY2hlY2tlZFRlc3RzXG4gICAgICAgIHtcbiAgICAgICAgICAgIFtUZXN0XVxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RJbnQzMigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdW5jaGVja2VkXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gSW50MzIuTWF4VmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgxID0gbWF4ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgyID0gbWF4MSsrO1xuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4NCA9IDIgKiBtYXg7XG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTIxNDc0ODM2NDhcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMjE0NzQ4MzY0N1wiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yMTQ3NDgzNjQ4XCIsIHJNYXgzLCBcIlRocm91Z2ggaWRlbnRpZmllciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItMlwiLCByTWF4NCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yMTQ3NDgzNjQ4XCIsIEJ5cGFzcyhtYXggKyAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjIxNDc0ODM2NDdcIiwgQnlwYXNzKG1heDMrKyksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yMTQ3NDgzNjQ4XCIsIEJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yXCIsIEJ5cGFzcygyICogbWF4KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBJbnQzMi5NaW5WYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluMyA9IC0tbWluMjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW40ID0gLW1pbjtcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIyMTQ3NDgzNjQ3XCIsIHJNaW4xLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yMTQ3NDgzNjQ4XCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMjE0NzQ4MzY0N1wiLCByTWluMywgXCJUaHJvdWdoIGlkZW50aWZpZXIgLS1wcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTIxNDc0ODM2NDhcIiwgck1pbjQsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIyMTQ3NDgzNjQ3XCIsIEJ5cGFzcyhtaW4gLSAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yMTQ3NDgzNjQ4XCIsIEJ5cGFzcyhtaW4zLS0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIyMTQ3NDgzNjQ3XCIsIEJ5cGFzcygtLW1pbjQpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yMTQ3NDgzNjQ4XCIsIEJ5cGFzcygtbWluKSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW1Rlc3RdXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdFVJbnQzMigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdW5jaGVja2VkXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gVUludDMyLk1heFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4MSA9IG1heCArIDE7XG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgzID0gKyttYXgyO1xuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDQgPSAyICogbWF4O1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjBcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiNDI5NDk2NzI5NVwiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjBcIiwgck1heDMsIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjQyOTQ5NjcyOTRcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIwXCIsIEJ5cGFzcyhtYXggKyAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjQyOTQ5NjcyOTVcIiwgQnlwYXNzKG1heDMrKyksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjBcIiwgQnlwYXNzKCsrbWF4NCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiNDI5NDk2NzI5NFwiLCBCeXBhc3MoMiAqIG1heCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gVUludDMyLk1pblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjMgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluMSA9IG1pbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluMiA9IG1pbjEtLTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4zID0gLS1taW4yO1xuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjQgPSAtbWluO1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjQyOTQ5NjcyOTVcIiwgck1pbjEsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMFwiLCByTWluMiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjQyOTQ5NjcyOTVcIiwgck1pbjMsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjBcIiwgck1pbjQsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI0Mjk0OTY3Mjk1XCIsIEJ5cGFzcyhtaW4gLSAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjBcIiwgQnlwYXNzKG1pbjMtLSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjQyOTQ5NjcyOTVcIiwgQnlwYXNzKC0tbWluNCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMFwiLCBCeXBhc3MoLW1pbiksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgdW5hcnkgLVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtUZXN0XVxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RMb25nKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1bmNoZWNrZWRcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSBsb25nLk1heFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4MSA9IG1heCArIDE7XG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgzID0gKyttYXgyO1xuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDQgPSAyICogbWF4O1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgck1heDIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCByTWF4MywgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTJcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCBCeXBhc3MobWF4ICsgMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIEJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCBCeXBhc3MoKyttYXg0KSwgXCJUaHJvdWdoIHBhcmFtZXRlciArK3ByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItMlwiLCBCeXBhc3MoMiAqIG1heCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gbG9uZy5NaW5WYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluMyA9IC0tbWluMjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW40ID0gLW1pbjtcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIHJNaW4xLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCByTWluMywgXCJUaHJvdWdoIGlkZW50aWZpZXIgLS1wcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1pbjQsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIEJ5cGFzcyhtaW4gLSAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIEJ5cGFzcyhtaW4zLS0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIEJ5cGFzcygtLW1pbjQpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIEJ5cGFzcygtbWluKSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW1Rlc3RdXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdFVMb25nKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1bmNoZWNrZWRcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSB1bG9uZy5NYXhWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDEgPSBtYXggKyAxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgck1heDIgPSBtYXgxKys7XG4gICAgICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXg0ID0gMiAqIG1heDtcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIwXCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIHJNYXgyLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMFwiLCByTWF4MywgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTRcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIwXCIsIEJ5cGFzcyhtYXggKyAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIEJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIwXCIsIEJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjE4NDQ2NzQ0MDczNzA5NTUxNjE0XCIsIEJ5cGFzcygyICogbWF4KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSB1bG9uZy5NaW5WYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XG4gICAgICAgICAgICAgICAgICAgIHZhciByTWluMyA9IC0tbWluMjtcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIwXCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgck1pbjMsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC0tcHJlXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMFwiLCBCeXBhc3MobWluMy0tKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgQnlwYXNzKC0tbWluNCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgW0NhdGVnb3J5KENvbnN0YW50cy5NT0RVTEVfQ0hFQ0tFRF9VTkNLRUNLRUQpXVxuICAgICAgICBbVGVzdEZpeHR1cmUoVGVzdE5hbWVGb3JtYXQgPSBcIlVuY2hlY2tlZEluc2lkZUNoZWNrZWQgLSBcIiArIENvbnN0YW50cy5CQVRDSF9OQU1FICsgXCIgezB9XCIpXVxuICAgICAgICBwdWJsaWMgY2xhc3MgVW5jaGVja2VkSW5zaWRlQ2hlY2tlZFRlc3RzXG4gICAgICAgIHtcbiAgICAgICAgICAgIFtUZXN0XVxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RJbnQzMigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdW5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSBJbnQzMi5NYXhWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4MSA9IG1heCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDIgPSBtYXgxKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDQgPSAyICogbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItMjE0NzQ4MzY0OFwiLCByTWF4MSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMjE0NzQ4MzY0N1wiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItMjE0NzQ4MzY0OFwiLCByTWF4MywgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yXCIsIHJNYXg0LCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yMTQ3NDgzNjQ4XCIsIEJ5cGFzcyhtYXggKyAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIyMTQ3NDgzNjQ3XCIsIEJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTIxNDc0ODM2NDhcIiwgQnlwYXNzKCsrbWF4NCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yXCIsIEJ5cGFzcygyICogbWF4KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gSW50MzIuTWluVmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4yID0gbWluMS0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4zID0gLS1taW4yO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW40ID0gLW1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMjE0NzQ4MzY0N1wiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTIxNDc0ODM2NDhcIiwgck1pbjIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMjE0NzQ4MzY0N1wiLCByTWluMywgXCJUaHJvdWdoIGlkZW50aWZpZXIgLS1wcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yMTQ3NDgzNjQ4XCIsIHJNaW40LCBcIlRocm91Z2ggaWRlbnRpZmllciB1bmFyeSAtXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjIxNDc0ODM2NDdcIiwgQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yMTQ3NDgzNjQ4XCIsIEJ5cGFzcyhtaW4zLS0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMjE0NzQ4MzY0N1wiLCBCeXBhc3MoLS1taW40KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTIxNDc0ODM2NDhcIiwgQnlwYXNzKC1taW4pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtUZXN0XVxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RVSW50MzIoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoZWNrZWRcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHVuY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gVUludDMyLk1heFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgxID0gbWF4ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4NCA9IDIgKiBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjBcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjQyOTQ5NjcyOTVcIiwgck1heDIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMFwiLCByTWF4MywgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjQyOTQ5NjcyOTRcIiwgck1heDQsIFwiVGhyb3VnaCBpZGVudGlmaWVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMFwiLCBCeXBhc3MobWF4ICsgMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiNDI5NDk2NzI5NVwiLCBCeXBhc3MobWF4MysrKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjBcIiwgQnlwYXNzKCsrbWF4NCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjQyOTQ5NjcyOTRcIiwgQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBVSW50MzIuTWluVmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4yID0gbWluMS0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4zID0gLS1taW4yO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW40ID0gLW1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiNDI5NDk2NzI5NVwiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMFwiLCByTWluMiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI0Mjk0OTY3Mjk1XCIsIHJNaW4zLCBcIlRocm91Z2ggaWRlbnRpZmllciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMFwiLCByTWluNCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgdW5hcnkgLVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI0Mjk0OTY3Mjk1XCIsIEJ5cGFzcyhtaW4gLSAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIwXCIsIEJ5cGFzcyhtaW4zLS0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiNDI5NDk2NzI5NVwiLCBCeXBhc3MoLS1taW40KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMFwiLCBCeXBhc3MoLW1pbiksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgdW5hcnkgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW1Rlc3RdXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdExvbmcoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoZWNrZWRcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHVuY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gbG9uZy5NYXhWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4MSA9IG1heCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDIgPSBtYXgxKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1heDQgPSAyICogbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCByTWF4MSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCByTWF4MywgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yXCIsIHJNYXg0LCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIEJ5cGFzcyhtYXggKyAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIEJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnlwYXNzKCsrbWF4NCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yXCIsIEJ5cGFzcygyICogbWF4KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gbG9uZy5NaW5WYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjEgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjQgPSBtaW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWluMSA9IG1pbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjMgPSAtLW1pbjI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjQgPSAtbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIHJNaW4xLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCByTWluMiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIHJNaW4zLCBcIlRocm91Z2ggaWRlbnRpZmllciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1pbjQsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiOTIyMzM3MjAzNjg1NDc3NTgwN1wiLCBCeXBhc3MobWluIC0gMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnlwYXNzKG1pbjMtLSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIEJ5cGFzcygtLW1pbjQpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCBCeXBhc3MoLW1pbiksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgdW5hcnkgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW1Rlc3RdXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdFVMb25nKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB1bmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IHVsb25nLk1heFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNYXgxID0gbWF4ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByTWF4NCA9IDIgKiBtYXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjBcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIHJNYXgyLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjBcIiwgck1heDMsIFwiVGhyb3VnaCBpZGVudGlmaWVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIxODQ0Njc0NDA3MzcwOTU1MTYxNFwiLCByTWF4NCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIwXCIsIEJ5cGFzcyhtYXggKyAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCBCeXBhc3MobWF4MysrKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjBcIiwgQnlwYXNzKCsrbWF4NCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjE4NDQ2NzQ0MDczNzA5NTUxNjE0XCIsIEJ5cGFzcygyICogbWF4KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gdWxvbmcuTWluVmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbjIgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgck1pbjEgPSBtaW4gLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4yID0gbWluMS0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJNaW4zID0gLS1taW4yO1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMFwiLCByTWluMiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCByTWluMywgXCJUaHJvdWdoIGlkZW50aWZpZXIgLS1wcmVcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjBcIiwgQnlwYXNzKG1pbjMtLSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCBCeXBhc3MoLS1taW40KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFtDYXRlZ29yeShDb25zdGFudHMuTU9EVUxFX0NIRUNLRURfVU5DS0VDS0VEKV1cbiAgICAgICAgW1Rlc3RGaXh0dXJlKFRlc3ROYW1lRm9ybWF0ID0gXCJXaXRoTm9VbmNoZWNrZWRLZXl3b3JkIC0gXCIgKyBDb25zdGFudHMuQkFUQ0hfTkFNRSArIFwiIHswfVwiKV1cbiAgICAgICAgcHVibGljIGNsYXNzIFdpdGhOb1VuY2hlY2tlZEtleXdvcmRUZXN0c1xuICAgICAgICB7XG4gICAgICAgICAgICBbVGVzdF1cbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0SW50MzIoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBtYXggPSBJbnQzMi5NYXhWYWx1ZTtcblxuICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xuICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xuICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xuICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xuXG4gICAgICAgICAgICAgICAgdmFyIHJNYXgxID0gbWF4ICsgMTtcbiAgICAgICAgICAgICAgICB2YXIgck1heDIgPSBtYXgxKys7XG4gICAgICAgICAgICAgICAgdmFyIHJNYXgzID0gKyttYXgyO1xuICAgICAgICAgICAgICAgIHZhciByTWF4NCA9IDIgKiBtYXg7XG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIyMTQ3NDgzNjQ4XCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMjE0NzQ4MzY0N1wiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMjE0NzQ4MzY0OFwiLCByTWF4MywgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI0Mjk0OTY3Mjk0XCIsIHJNYXg0LCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIyMTQ3NDgzNjQ4XCIsIEJ5cGFzcyhtYXggKyAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMjE0NzQ4MzY0N1wiLCBCeXBhc3MobWF4MysrKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIyMTQ3NDgzNjQ4XCIsIEJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiNDI5NDk2NzI5NFwiLCBCeXBhc3MoMiAqIG1heCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgIHZhciBtaW4gPSBJbnQzMi5NaW5WYWx1ZTtcblxuICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xuICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xuICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xuICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xuXG4gICAgICAgICAgICAgICAgdmFyIHJNaW4xID0gbWluIC0gMTtcbiAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XG4gICAgICAgICAgICAgICAgdmFyIHJNaW4zID0gLS1taW4yO1xuICAgICAgICAgICAgICAgIHZhciByTWluNCA9IC1taW47XG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItMjE0NzQ4MzY0OVwiLCByTWluMSwgXCJUaHJvdWdoIGlkZW50aWZpZXIgLVwiKTtcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yMTQ3NDgzNjQ4XCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItMjE0NzQ4MzY0OVwiLCByTWluMywgXCJUaHJvdWdoIGlkZW50aWZpZXIgLS1wcmVcIik7XG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIyMTQ3NDgzNjQ4XCIsIHJNaW40LCBcIlRocm91Z2ggaWRlbnRpZmllciB1bmFyeSAtXCIpO1xuXG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItMjE0NzQ4MzY0OVwiLCBCeXBhc3MobWluIC0gMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yMTQ3NDgzNjQ4XCIsIEJ5cGFzcyhtaW4zLS0pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi0yMTQ3NDgzNjQ5XCIsIEJ5cGFzcygtLW1pbjQpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMjE0NzQ4MzY0OFwiLCBCeXBhc3MoLW1pbiksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgdW5hcnkgLVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW1Rlc3RdXG4gICAgICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgVGVzdFVJbnQzMigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIG1heCA9IFVJbnQzMi5NYXhWYWx1ZTtcblxuICAgICAgICAgICAgICAgIHZhciBtYXgxID0gbWF4O1xuICAgICAgICAgICAgICAgIHZhciBtYXgyID0gbWF4O1xuICAgICAgICAgICAgICAgIHZhciBtYXgzID0gbWF4O1xuICAgICAgICAgICAgICAgIHZhciBtYXg0ID0gbWF4O1xuXG4gICAgICAgICAgICAgICAgdmFyIHJNYXgxID0gbWF4ICsgMTtcbiAgICAgICAgICAgICAgICB2YXIgck1heDIgPSBtYXgxKys7XG4gICAgICAgICAgICAgICAgdmFyIHJNYXgzID0gKyttYXgyO1xuICAgICAgICAgICAgICAgIHZhciByTWF4NCA9IDIgKiBtYXg7XG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI0Mjk0OTY3Mjk2XCIsIHJNYXgxLCBcIlRocm91Z2ggaWRlbnRpZmllciArXCIpO1xuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiNDI5NDk2NzI5NVwiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiNDI5NDk2NzI5NlwiLCByTWF4MywgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI4NTg5OTM0NTkwXCIsIHJNYXg0LCBcIlRocm91Z2ggaWRlbnRpZmllciAqXCIpO1xuXG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI0Mjk0OTY3Mjk2XCIsIEJ5cGFzcyhtYXggKyAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciArXCIpO1xuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiNDI5NDk2NzI5NVwiLCBCeXBhc3MobWF4MysrKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI0Mjk0OTY3Mjk2XCIsIEJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiODU4OTkzNDU5MFwiLCBCeXBhc3MoMiAqIG1heCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgIHZhciBtaW4gPSBVSW50MzIuTWluVmFsdWU7XG5cbiAgICAgICAgICAgICAgICB2YXIgbWluMSA9IG1pbjtcbiAgICAgICAgICAgICAgICB2YXIgbWluMiA9IG1pbjtcbiAgICAgICAgICAgICAgICB2YXIgbWluMyA9IG1pbjtcbiAgICAgICAgICAgICAgICB2YXIgbWluNCA9IG1pbjtcblxuICAgICAgICAgICAgICAgIHZhciByTWluMSA9IG1pbiAtIDE7XG4gICAgICAgICAgICAgICAgdmFyIHJNaW4yID0gbWluMS0tO1xuICAgICAgICAgICAgICAgIHZhciByTWluMyA9IC0tbWluMjtcbiAgICAgICAgICAgICAgICB2YXIgck1pbjQgPSAtbWluO1xuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTFcIiwgck1pbjEsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIwXCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItMVwiLCByTWluMywgXCJUaHJvdWdoIGlkZW50aWZpZXIgLS1wcmVcIik7XG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIwXCIsIHJNaW40LCBcIlRocm91Z2ggaWRlbnRpZmllciB1bmFyeSAtXCIpO1xuXG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItMVwiLCBCeXBhc3MobWluIC0gMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLVwiKTtcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjBcIiwgQnlwYXNzKG1pbjMtLSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgcG9zdC0tXCIpO1xuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTFcIiwgQnlwYXNzKC0tbWluNCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgLS1wcmVcIik7XG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIwXCIsIEJ5cGFzcygtbWluKSwgXCJUaHJvdWdoIHBhcmFtZXRlciB1bmFyeSAtXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbVGVzdF1cbiAgICAgICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBUZXN0TG9uZygpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIG1heCA9IGxvbmcuTWF4VmFsdWU7XG5cbiAgICAgICAgICAgICAgICB2YXIgbWF4MSA9IG1heDtcbiAgICAgICAgICAgICAgICB2YXIgbWF4MiA9IG1heDtcbiAgICAgICAgICAgICAgICB2YXIgbWF4MyA9IG1heDtcbiAgICAgICAgICAgICAgICB2YXIgbWF4NCA9IG1heDtcblxuICAgICAgICAgICAgICAgIHZhciByTWF4MSA9IG1heCArIDE7XG4gICAgICAgICAgICAgICAgdmFyIHJNYXgyID0gbWF4MSsrO1xuICAgICAgICAgICAgICAgIHZhciByTWF4MyA9ICsrbWF4MjtcbiAgICAgICAgICAgICAgICB2YXIgck1heDQgPSAyICogbWF4O1xuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIHJNYXgyLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0KytcIik7XG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCByTWF4MywgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItMlwiLCByTWF4NCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnlwYXNzKG1heCArIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyICtcIik7XG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIEJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIi05MjIzMzcyMDM2ODU0Nzc1ODA4XCIsIEJ5cGFzcygrK21heDQpLCBcIlRocm91Z2ggcGFyYW1ldGVyICsrcHJlXCIpO1xuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTJcIiwgQnlwYXNzKDIgKiBtYXgpLCBcIlRocm91Z2ggcGFyYW1ldGVyICpcIik7XG5cbiAgICAgICAgICAgICAgICB2YXIgbWluID0gbG9uZy5NaW5WYWx1ZTtcblxuICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xuICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xuICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xuICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xuXG4gICAgICAgICAgICAgICAgdmFyIHJNaW4xID0gbWluIC0gMTtcbiAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XG4gICAgICAgICAgICAgICAgdmFyIHJNaW4zID0gLS1taW4yO1xuICAgICAgICAgICAgICAgIHZhciByTWluNCA9IC1taW47XG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIHJNaW4xLCBcIlRocm91Z2ggaWRlbnRpZmllciAtXCIpO1xuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1pbjIsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHBvc3QtLVwiKTtcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgck1pbjMsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgck1pbjQsIFwiVGhyb3VnaCBpZGVudGlmaWVyIHVuYXJ5IC1cIik7XG5cbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjkyMjMzNzIwMzY4NTQ3NzU4MDdcIiwgQnlwYXNzKG1pbiAtIDEpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC1cIik7XG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCItOTIyMzM3MjAzNjg1NDc3NTgwOFwiLCBCeXBhc3MobWluMy0tKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCI5MjIzMzcyMDM2ODU0Nzc1ODA3XCIsIEJ5cGFzcygtLW1pbjQpLCBcIlRocm91Z2ggcGFyYW1ldGVyIC0tcHJlXCIpO1xuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiLTkyMjMzNzIwMzY4NTQ3NzU4MDhcIiwgQnlwYXNzKC1taW4pLCBcIlRocm91Z2ggcGFyYW1ldGVyIHVuYXJ5IC1cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtUZXN0XVxuICAgICAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFRlc3RVTG9uZygpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIG1heCA9IHVsb25nLk1heFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgdmFyIG1heDEgPSBtYXg7XG4gICAgICAgICAgICAgICAgdmFyIG1heDIgPSBtYXg7XG4gICAgICAgICAgICAgICAgdmFyIG1heDMgPSBtYXg7XG4gICAgICAgICAgICAgICAgdmFyIG1heDQgPSBtYXg7XG5cbiAgICAgICAgICAgICAgICB2YXIgck1heDEgPSBtYXggKyAxO1xuICAgICAgICAgICAgICAgIHZhciByTWF4MiA9IG1heDErKztcbiAgICAgICAgICAgICAgICB2YXIgck1heDMgPSArK21heDI7XG4gICAgICAgICAgICAgICAgdmFyIHJNYXg0ID0gMiAqIG1heDtcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjBcIiwgck1heDEsIFwiVGhyb3VnaCBpZGVudGlmaWVyICtcIik7XG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCByTWF4MiwgXCJUaHJvdWdoIGlkZW50aWZpZXIgcG9zdCsrXCIpO1xuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMFwiLCByTWF4MywgXCJUaHJvdWdoIGlkZW50aWZpZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIxODQ0Njc0NDA3MzcwOTU1MTYxNFwiLCByTWF4NCwgXCJUaHJvdWdoIGlkZW50aWZpZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMFwiLCBCeXBhc3MobWF4ICsgMSksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgK1wiKTtcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIEJ5cGFzcyhtYXgzKyspLCBcIlRocm91Z2ggcGFyYW1ldGVyIHBvc3QrK1wiKTtcbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjBcIiwgQnlwYXNzKCsrbWF4NCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKytwcmVcIik7XG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIxODQ0Njc0NDA3MzcwOTU1MTYxNFwiLCBCeXBhc3MoMiAqIG1heCksIFwiVGhyb3VnaCBwYXJhbWV0ZXIgKlwiKTtcblxuICAgICAgICAgICAgICAgIHZhciBtaW4gPSB1bG9uZy5NaW5WYWx1ZTtcblxuICAgICAgICAgICAgICAgIHZhciBtaW4xID0gbWluO1xuICAgICAgICAgICAgICAgIHZhciBtaW4yID0gbWluO1xuICAgICAgICAgICAgICAgIHZhciBtaW4zID0gbWluO1xuICAgICAgICAgICAgICAgIHZhciBtaW40ID0gbWluO1xuXG4gICAgICAgICAgICAgICAgdmFyIHJNaW4xID0gbWluIC0gMTtcbiAgICAgICAgICAgICAgICB2YXIgck1pbjIgPSBtaW4xLS07XG4gICAgICAgICAgICAgICAgdmFyIHJNaW4zID0gLS1taW4yO1xuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMTg0NDY3NDQwNzM3MDk1NTE2MTVcIiwgck1pbjEsIFwiVGhyb3VnaCBpZGVudGlmaWVyIC1cIik7XG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIwXCIsIHJNaW4yLCBcIlRocm91Z2ggaWRlbnRpZmllciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCByTWluMywgXCJUaHJvdWdoIGlkZW50aWZpZXIgLS1wcmVcIik7XG5cbiAgICAgICAgICAgICAgICBOdW1iZXJIZWxwZXIuQXNzZXJ0TnVtYmVyQnlSZXByZXNlbnRhdGlvbihcIjE4NDQ2NzQ0MDczNzA5NTUxNjE1XCIsIEJ5cGFzcyhtaW4gLSAxKSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtXCIpO1xuICAgICAgICAgICAgICAgIE51bWJlckhlbHBlci5Bc3NlcnROdW1iZXJCeVJlcHJlc2VudGF0aW9uKFwiMFwiLCBCeXBhc3MobWluMy0tKSwgXCJUaHJvdWdoIHBhcmFtZXRlciBwb3N0LS1cIik7XG4gICAgICAgICAgICAgICAgTnVtYmVySGVscGVyLkFzc2VydE51bWJlckJ5UmVwcmVzZW50YXRpb24oXCIxODQ0Njc0NDA3MzcwOTU1MTYxNVwiLCBCeXBhc3MoLS1taW40KSwgXCJUaHJvdWdoIHBhcmFtZXRlciAtLXByZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXQp9Cg==
