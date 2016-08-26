
var SomeExternalNamespace = {
    SomeNonBridgeClass: function () {
    }
};
SomeExternalNamespace.SomeNonBridgeClass.prototype.foo = function(){return 1;};


Bridge.initAssembly("Bridge.ClientTest.Batch3", function ($asm, globals) {
    "use strict";

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge069', {
        statics: {
            thisKeywordInStructConstructorWorks: function () {
                var p = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge069.Point69.$constructor1(10);
                Bridge.Test.Assert.areEqual(10, p.y);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge069.Point69', {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge069.Point69(); }
        },
        x: 0,
        y: 0,
        $constructor1: function (y1) {
            this.$initialize();
            (new Bridge.ClientTest.Batch3.BridgeIssues.Bridge069.Point69.$constructor()).$clone(this);
            this.y = y1;
        },
        constructor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 1643959563;
            hash = hash * 23 + (this.x == null ? 0 : Bridge.getHashCode(this.x));
            hash = hash * 23 + (this.y == null ? 0 : Bridge.getHashCode(this.y));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge069.Point69)) {
                return false;
            }
            return Bridge.equals(this.x, o.x) && Bridge.equals(this.y, o.y);
        },
        $clone: function (to) {
            var s = to || new Bridge.ClientTest.Batch3.BridgeIssues.Bridge069.Point69();
            s.x = this.x;
            s.y = this.y;
            return s;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1000', {
        statics: {
            testStaticViaChild: function () {
                Bridge.Test.Assert.areEqual("Test", Bridge.ClientTest.Batch3.BridgeIssues.Bridge1000.TestFixture$1(Object).run());
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1000.TestFixture$1', function (T) { return {
        statics: {
            run: function () {
                return "Test";
            }
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001', {
        statics: {
            testDefaultValues: function () {
                Bridge.Test.Assert.areEqual(2, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001.Control.test);
                Bridge.Test.Assert.areEqual(2, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001.Globals.myVar);
                Bridge.Test.Assert.areEqual(0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001.Globals.myVar1);
                Bridge.Test.Assert.areEqual(0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001.Globals.myVar2);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001.Control', {
        statics: {
            test: 0,
            config: {
                init: function () {
                    this.test = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001.Globals.myVar;
                }
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001.Globals', {
        statics: {
            myVar: 2,
            myVar1: 0,
            myVar2: 0,
            myTextBox: null,
            config: {
                init: function () {
                    this.myVar1 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001.Control.test;
                    this.myVar2 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001.Globals.myVar1;
                }
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1003', {
        statics: {
            testGenericLambdasToLifting: function () {
                var test = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1003$1(System.Int32))();

                var scope = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1003$1;
                Bridge.Test.Assert.null(scope);
                Bridge.Test.Assert.areEqual(test.test1([1, 2, 3]), [1, 2, 3]);
                Bridge.Test.Assert.areEqual(test.test2(String, ["1", "2", "3"]), ["1", "2", "3"]);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1003$1', function (T) { return {
        test1: function (list) {
            return System.Linq.Enumerable.from(list).select(function (item) {
                return Bridge.cast(item, T);
            }).toArray();
        },
        test2: function (T1, list) {
            return System.Linq.Enumerable.from(list).select(function (item) {
                return Bridge.cast(item, T1);
            }).toArray();
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012', {
        statics: {
            DELTA: 3,
            testSleepZero: function () {
                var delay = 0;
                var maxDelay = 100;

                var stopwatch = new System.Diagnostics.Stopwatch();
                stopwatch.start();

                Bridge.sleep(delay);

                stopwatch.stop();

                Bridge.Test.Assert.true$1(stopwatch.milliseconds().gte(System.Int64(delay - Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012.DELTA)), System.String.concat(System.String.concat(System.String.concat(">= ", delay), ", elapsed "), stopwatch.milliseconds()));
                Bridge.Test.Assert.true$1(stopwatch.milliseconds().lt(System.Int64(maxDelay)), System.String.concat(System.String.concat(System.String.concat("< ", maxDelay), ", elapsed "), stopwatch.milliseconds()));
            },
            testSleepInt: function () {
                var delay = 100;
                var maxDelay = 200;

                var stopwatch = new System.Diagnostics.Stopwatch();
                stopwatch.start();

                Bridge.sleep(delay);

                stopwatch.stop();

                Bridge.Test.Assert.true$1(stopwatch.milliseconds().gte(System.Int64(delay - Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012.DELTA)), System.String.concat(System.String.concat(System.String.concat(">= ", delay), ", elapsed "), stopwatch.milliseconds()));
                Bridge.Test.Assert.true$1(stopwatch.milliseconds().lt(System.Int64(maxDelay)), System.String.concat(System.String.concat(System.String.concat("< ", maxDelay), ", elapsed "), stopwatch.milliseconds()));
            },
            testSleepTimeSpan: function () {
                var delay = 100;
                var maxDelay = 200;

                var stopwatch = new System.Diagnostics.Stopwatch();
                stopwatch.start();

                Bridge.sleep(null, System.TimeSpan.fromMilliseconds(delay));

                stopwatch.stop();

                Bridge.Test.Assert.true$1(stopwatch.milliseconds().gte(System.Int64(delay - Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012.DELTA)), System.String.concat(System.String.concat(System.String.concat(">= ", delay), ", elapsed "), stopwatch.milliseconds()));
                Bridge.Test.Assert.true$1(stopwatch.milliseconds().lt(System.Int64(maxDelay)), System.String.concat(System.String.concat(System.String.concat("< ", maxDelay), ", elapsed "), stopwatch.milliseconds()));
            },
            testSleepThrows: function () {
                Bridge.Test.Assert.throws$7(System.ArgumentOutOfRangeException, $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012.f1, "-2");
                Bridge.Test.Assert.throws$7(System.ArgumentOutOfRangeException, $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012.f2, "FromMilliseconds(-2)");
                Bridge.Test.Assert.throws$7(System.ArgumentOutOfRangeException, $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012.f3, "(long)int.MaxValue + 1");
            }
        }
    });

    var $_ = {};

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012, {
        f1: function () {
            Bridge.sleep(-2);
        },
        f2: function () {
            Bridge.sleep(null, System.TimeSpan.fromMilliseconds(-2));
        },
        f3: function () {
            Bridge.sleep(null, System.TimeSpan.fromMilliseconds(System.Int64([-2147483648,0])));
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020', {
        statics: {
            testFlagEnumWithReference: function () {
                Bridge.Test.Assert.areEqual(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020.TestEnum.FlagAlias, 1);
            },
            testEnumWithReference: function () {
                Bridge.Test.Assert.areEqual(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020.CommonEnum.FlagAlias, 2);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020.CommonEnum', {
        $kind: "enum",
        statics: {
            None: 0,
            Flag: 2,
            FlagAlias: 2
        },
        $utype: System.UInt32
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020.TestEnum', {
        $kind: "enum",
        statics: {
            None: 0,
            Flag: 1,
            FlagAlias: 1
        },
        $flags: true,
        $utype: System.UInt32
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1024', {
        statics: {
            testConstructorOptionalParameter: function () {
                var obj = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1024.ClassB();
                Bridge.Test.Assert.areEqual("classB", obj.getFieldA());
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1024.ClassC', {
        a: null,
        constructor: function (b) {
            this.$initialize();
            this.a = b;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025', {
        statics: {
            testC1: function () {
                var c1 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C1();
                var i1 = c1;
                var i2 = c1;

                Bridge.Test.Assert.true(Bridge.equalsT(i1, 5, System.Int32));
                Bridge.Test.Assert.areEqual(5, c1.intField);

                Bridge.Test.Assert.false(Bridge.equalsT(i2, "6", String));
                Bridge.Test.Assert.areEqual("6", c1.strField);
            },
            testC2: function () {
                var c2 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C2();
                var i1 = c2;
                var i2 = c2;

                i1.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I1$setProp1(10);
                Bridge.Test.Assert.areEqual(9, i1.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I1$getProp1());

                i2.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I2$setProp1(10);
                Bridge.Test.Assert.areEqual(11, i2.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I2$getProp1());
            },
            testC3: function () {
                var c3 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C3();
                var i1 = c3;
                var i2 = c3;

                i1.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I1$setProp1(10);
                Bridge.Test.Assert.areEqual(10, i1.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I1$getProp1());
                Bridge.Test.Assert.areEqual(10, i2.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I2$getProp1());
                Bridge.Test.Assert.areEqual(10, c3.getProp1());

                i2.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I2$setProp1(11);
                Bridge.Test.Assert.areEqual(11, i1.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I1$getProp1());
                Bridge.Test.Assert.areEqual(11, i2.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I2$getProp1());
                Bridge.Test.Assert.areEqual(11, c3.getProp1());

                c3.setProp1(12);
                Bridge.Test.Assert.areEqual(12, i1.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I1$getProp1());
                Bridge.Test.Assert.areEqual(12, i2.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I2$getProp1());
                Bridge.Test.Assert.areEqual(12, c3.getProp1());
            },
            testI3: function () {
                var i;

                var a = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C4();
                i = a;
                Bridge.Test.Assert.areEqual("C4", a.foo());
                Bridge.Test.Assert.areEqual("C4", i.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I3$foo());

                var b = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C5();
                i = b;
                Bridge.Test.Assert.areEqual("C4", b.foo());
                Bridge.Test.Assert.areEqual("C5", i.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I3$foo());
            },
            testI4: function () {
                var a = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C7();
                var i = a;
                Bridge.Test.Assert.areEqual("C7", a.foo$1());
                Bridge.Test.Assert.areEqual("C7", i.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I4$foo());
                Bridge.Test.Assert.areEqual("C6", Bridge.cast(a, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C6).foo());
            },
            testI5: function () {
                var a = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C8();
                var i1 = a;
                var i2 = a;

                Bridge.Test.Assert.areEqual(1, i1.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I5$1$System$Int32$foo());
                Bridge.Test.Assert.areEqual("test", i2.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I5$1$String$foo());
            },
            testI6: function () {
                var a = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C9$2(System.Int32,String))();
                var i1 = a;
                var i2 = a;

                i1.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I5$1$System$Int32$foo();
                Bridge.Test.Assert.areEqual("I5", a.flag);

                i2.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I6$1$String$foo();
                Bridge.Test.Assert.areEqual("I6", a.flag);
            },
            testI7: function () {
                var a = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C10();
                var i = a;
                Bridge.Test.Assert.areEqual(1, i.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I7$3$System$Int32$String$Boolean$foo());

                var a1 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C11$3(System.Int32,String,Boolean))();
                i = a1;
                Bridge.Test.Assert.areEqual(1, i.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I7$3$System$Int32$String$Boolean$foo());

                var a2 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C12$3(System.Int32,String,Boolean))();
                var i2 = a2;
                Bridge.Test.Assert.areEqual(1, i2.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I7$3$Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I5$1$System$Int32$Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I5$1$String$Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I5$1$Boolean$foo());

                var a3 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C13$3(System.Int32,String,Boolean))();
                var i3 = a3;
                Bridge.Test.Assert.areEqual(1, i3.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I7$3$Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I5$1$Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I5$1$System$Int32$Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I5$1$Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I5$1$String$Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I5$1$Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I5$1$Boolean$foo());
            },
            testI8: function () {
                var c15 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C15();
                var i8 = c15;
                var i9 = c15;

                Bridge.Test.Assert.areEqual(11, i8.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I8$getItem(11));
                i8.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I8$setItem(0, 15);
                Bridge.Test.Assert.areEqual(15, c15.tmp);
                Bridge.Test.Assert.areEqual(2, i8.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I8$getProp1());
                i8.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I8$setProp2("test");
                Bridge.Test.Assert.areEqual("test", i8.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I8$getProp2());
                var i = 0;
                i8.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I8$addEvent1(function () {
                    i = 9;
                });
                i8.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I8$invoke();
                Bridge.Test.Assert.areEqual(9, i);

                i = 0;
                i9.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I9$1$System$Int32$invoke$1();
                Bridge.Test.Assert.areEqual(9, i);
            },
            testI10: function () {
                var c17 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C17();
                var c16 = c17;
                var i10 = c17;

                c17.foo$1();
                Bridge.Test.Assert.areEqual("C17", c17.log);
                c17.log = null;

                c16.foo();
                Bridge.Test.Assert.areEqual("C16", c17.log);
                c17.log = null;

                i10.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I10$foo();
                Bridge.Test.Assert.areEqual("C16", c17.log);
            },
            testI10_1: function () {
                var c19 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C19();
                var c18 = c19;
                var i10 = c19;

                c19.foo$1();
                Bridge.Test.Assert.areEqual("C19", c19.log);
                c19.log = null;

                c18.foo();
                Bridge.Test.Assert.areEqual("C18", c19.log);
                c19.log = null;

                i10.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I10$foo();
                Bridge.Test.Assert.areEqual("C19", c19.log);
            },
            testI10_2: function () {
                var c21 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C21();
                var c20 = c21;
                var i10 = c21;

                c21.foo();
                Bridge.Test.Assert.areEqual("C21", c21.log);
                c21.log = null;

                c20.foo();
                Bridge.Test.Assert.areEqual("C21", c21.log);
                c21.log = null;

                i10.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I10$foo();
                Bridge.Test.Assert.areEqual("C21", c21.log);

                var c24 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C24();
                i10 = c24;

                i10.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I10$foo();
                Bridge.Test.Assert.areEqual("C22", c24.log);
            },
            getI11: function () {
                var externalInstance = { get: $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.f1, set: $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.f2, getProp1: $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.f3, getProp2: $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.f4, setProp2: $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.f2, addEvent1: $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.f2, foo: $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.f5 };

                return externalInstance;
            },
            testI11: function () {
                var i11 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.getI11();

                Bridge.Test.Assert.areEqual(1, i11[Bridge.geti(i11, "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I11$get", "get")](""));
                i11[Bridge.geti(i11, "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I11$set", "set")](i11[1], 1);
                i11[1] = "";
                Bridge.Test.Assert.areEqual(2, i11[Bridge.geti(i11, "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I11$getProp1", "getProp1")]());
                Bridge.Test.Assert.areEqual("test", i11[Bridge.geti(i11, "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I11$getProp2", "getProp2")]());
                i11[Bridge.geti(i11, "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I11$setProp2", "setProp2")]("");
                i11[Bridge.geti(i11, "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I11$foo", "foo")]();
                i11[Bridge.geti(i11, "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I11$addEvent1", "addEvent1")]($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.f5);
            },
            testI11_1: function () {
                var $t, $t1, $t2, $t3, $t4, $t5, $t6;
                Bridge.Test.Assert.areEqual(1, ($t = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.getI11(), $t[Bridge.geti($t, "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I11$get", "get")])(""));
                ($t1 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.getI11(), $t1[Bridge.geti($t1, "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I11$set", "set")])(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.getI11()[1], 1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.getI11()[1] = "";
                Bridge.Test.Assert.areEqual(2, ($t2 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.getI11(), $t2[Bridge.geti($t2, "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I11$getProp1", "getProp1")])());
                Bridge.Test.Assert.areEqual("test", ($t3 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.getI11(), $t3[Bridge.geti($t3, "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I11$getProp2", "getProp2")])());
                ($t4 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.getI11(), $t4[Bridge.geti($t4, "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I11$setProp2", "setProp2")])("");
                ($t5 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.getI11(), $t5[Bridge.geti($t5, "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I11$foo", "foo")])();
                ($t6 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.getI11(), $t6[Bridge.geti($t6, "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I11$addEvent1", "addEvent1")])($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.f5);
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025, {
        f1: function () {
            return 1;
        },
        f2: function (s) {
        },
        f3: function () {
            return 2;
        },
        f4: function () {
            return "test";
        },
        f5: function () {
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C1', {
        inherits: [System.IEquatable$1(System.Int32),System.IEquatable$1(String)],
        intField: 0,
        strField: null,
        config: {
            alias: [
            "equalsT$1", "System$IEquatable$1$System$Int32$equalsT",
            "equalsT", "System$IEquatable$1$String$equalsT"
            ]
        },
        equalsT$1: function (other) {
            this.intField = other;
            return true;
        },
        equalsT: function (other) {
            this.strField = other;
            return false;
        }
    });

    Bridge.definei('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I7$3', function (T1, T2, T3) { return {
        $kind: "interface"
    }; });

    Bridge.definei('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I5$1', function (T) { return {
        $kind: "interface"
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I8', {
        $kind: "interface"
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I10', {
        $kind: "interface"
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C18', {
        log: null,
        foo: function () {
            this.log = "C18";
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I2', {
        $kind: "interface"
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I1', {
        $kind: "interface"
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C22', {
        log: null,
        foo: function () {
            this.log = "C22";
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I3', {
        $kind: "interface"
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C6', {
        foo: function () {
            return "C6";
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I4', {
        $kind: "interface"
    });

    Bridge.definei('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I6$1', function (T) { return {
        $kind: "interface"
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1026', {
        statics: {
            testReservedWordIfRefOut: function () {
                var $function = { };
                var i = { v : 1 };
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1026.testFunction(i, $function);
                Bridge.Test.Assert.areEqual(2, i.v);
                Bridge.Test.Assert.areEqual("1", $function.v);

                var res = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1026.function($function.v);
                Bridge.Test.Assert.areEqual("11", res);
            },
            testFunction: function (i, $function) {
                $function.v = i.v.toString();
                i.v = (i.v + 1) | 0;
            },
            function: function ($function) {
                return System.String.concat($function, "1");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1027', {
        statics: {
            testNonBridgeInherits: function () {
                var obj = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1027.MyClass(11);
                Bridge.Test.Assert.areEqual(11, obj.number);
                Bridge.Test.Assert.areEqual(2, obj.foo());
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1027.MyClass', {
        inherits: [SomeExternalNamespace.SomeNonBridgeClass],
        number: 0,
        constructor: function (n) {
            this.$initialize();
            this.number = n;
        },
        foo: function () {
            var r = SomeExternalNamespace.SomeNonBridgeClass.prototype.foo.call(this);

            return ((r + 1) | 0);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1029', {
        statics: {
            testNullableMethods: function () {
                var a = 1;
                var b = 1;
                Bridge.Test.Assert.true(System.Nullable.equals(a, b, function ($t, other) { return $t === other; }));
                Bridge.Test.Assert.areEqual("1", System.Nullable.toString(a));
                Bridge.Test.Assert.areEqual(1, System.Nullable.getHashCode(a));
                a = null;
                Bridge.Test.Assert.false(System.Nullable.equals(a, b, function ($t, other) { return $t === other; }));
                Bridge.Test.Assert.areEqual("", System.Nullable.toString(a));
                Bridge.Test.Assert.areEqual(0, System.Nullable.getHashCode(a));
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1039', {
        statics: {
            testMoreThanDecimalDigitsFromTotalHours: function () {
                var a = new Date(2015, 1 - 1, 1, 9);
                var b = new Date(2015, 1 - 1, 1, 12, 52);

                var value = System.Decimal(((Bridge.Date.subdd(b, a)).getTotalHours()), null, System.Double);

                Bridge.Test.Assert.areEqual("3.86666666666667", Bridge.Int.format(value, 'G'));
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041');

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal', {
        statics: {
            config: {
                properties: {
                    Prop1: System.Decimal(0.0)
                }
            },
            testPropertyOps: function () {
                var $t, $t1, $t2;
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.setProp1(System.Decimal(5.0));

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.setProp1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.getProp1().div(System.Decimal(2)));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(2.5), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.getProp1());

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.setProp1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.getProp1().add(System.Decimal(2)));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(4.5), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.getProp1());

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.setProp1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.getProp1().inc());
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(5.5), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.getProp1());

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.setProp1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.getProp1().inc());
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(6.5), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.getProp1());

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(3.25), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.method(($t = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.getProp1().div(System.Decimal(2)), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.setProp1($t), $t)));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(3.25), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.getProp1());

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(4.25), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.method(($t1 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.getProp1().add(System.Decimal(1)), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.setProp1($t1), $t1)));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(4.25), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.getProp1());

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(4.25), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.method(($t2 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.getProp1(), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.setProp1($t2.inc()), $t2)));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(5.25), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.getProp1());

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(6.25), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.method(($t2 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.getProp1(), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.setProp1($t2.inc()), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.getProp1())));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(6.25), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.getProp1());
            },
            testIndexerOps: function () {
                var $t, $t1, $t2;
                var app = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal();
                app.setItem(0, System.Decimal(5.0));

                app.setItem(0, app.getItem(0).div(System.Decimal(2)));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(2.5), app.getItem(0));

                app.setItem(0, app.getItem(0).add(System.Decimal(2)));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(4.5), app.getItem(0));

                app.setItem(0, app.getItem(0).inc());
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(5.5), app.getItem(0));

                app.setItem(0, app.getItem(0).inc());
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(6.5), app.getItem(0));

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(3.25), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.method(($t = app.getItem(0).div(System.Decimal(2)), app.setItem(0, $t), $t)));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(3.25), app.getItem(0));

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(4.25), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.method(($t1 = app.getItem(0).add(System.Decimal(1)), app.setItem(0, $t1), $t1)));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(4.25), app.getItem(0));

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(4.25), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.method(($t2 = app.getItem(0), app.setItem(0, $t2.inc()), $t2)));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(5.25), app.getItem(0));

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(6.25), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.method(($t2 = app.getItem(0), app.setItem(0, $t2.inc()), app.getItem(0))));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(6.25), app.getItem(0));
            },
            testDictOps: function () {
                var $t, $t1, $t2;
                var dict = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.f1(new (System.Collections.Generic.Dictionary$2(System.Int32,System.Decimal))());

                dict.set(0, dict.get(0).div(System.Decimal(2)));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(2.5), dict.get(0));

                dict.set(0, dict.get(0).add(System.Decimal(2)));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(4.5), dict.get(0));

                dict.set(0, dict.get(0).inc());
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(5.5), dict.get(0));

                dict.set(0, dict.get(0).inc());
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(6.5), dict.get(0));

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(3.25), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.method(($t = dict.get(0).div(System.Decimal(2)), dict.set(0, $t), $t)));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(3.25), dict.get(0));

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(4.25), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.method(($t1 = dict.get(0).add(System.Decimal(1)), dict.set(0, $t1), $t1)));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(4.25), dict.get(0));

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(4.25), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.method(($t2 = dict.get(0), dict.set(0, $t2.inc()), $t2)));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(5.25), dict.get(0));

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(6.25), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.method(($t2 = dict.get(0), dict.set(0, $t2.inc()), dict.get(0))));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(6.25), dict.get(0));
            },
            testVariableOps: function () {
                var $t;
                var i1 = System.Decimal(5);

                i1 = i1.div(System.Decimal(2));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(2.5), i1);

                i1 = i1.add(System.Decimal(2));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(4.5), i1);

                i1 = i1.inc();
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(5.5), i1);

                i1 = i1.inc();
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(6.5), i1);

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(3.25), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.method((i1 = i1.div(System.Decimal(2)))));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(3.25), i1);

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(4.25), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.method((i1 = i1.add(System.Decimal(1)))));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(4.25), i1);

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(4.25), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.method(($t = i1, i1 = i1.inc(), $t)));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(5.25), i1);

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(6.25), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.method((i1 = i1.inc())));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.assertIsDecimalAndEqualTo(System.Decimal(6.25), i1);
            },
            method: function (i) {
                return i;
            },
            assertIsDecimalAndEqualTo: function (expected, actual, message) {
                if (message === void 0) { message = null; }
                Bridge.Test.Assert.true$1(Bridge.is(expected, System.Decimal), message);
                Bridge.Test.Assert.areStrictEqual$1(expected.toString(), actual.toString(), message);
            }
        },
        dict: null,
        config: {
            init: function () {
                this.dict = new (System.Collections.Generic.Dictionary$2(System.Int32,System.Decimal))();
            }
        },
        getItem: function (i) {
            return this.dict.get(i);
        },
        setItem: function (i, value) {
            this.dict.set(i, value);
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal, {
        f1: function (_o15) {
            _o15.add(0, System.Decimal(5.0));
            return _o15;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer', {
        statics: {
            config: {
                properties: {
                    Prop1: 0
                }
            },
            testPropertyOps: function () {
                var $t, $t1, $t2, $t3;
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.setProp1(5);

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.setProp1((Bridge.Int.div(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.getProp1(), 2)) | 0);
                Bridge.Test.Assert.areEqual(2, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.getProp1());

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.setProp1((Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.getProp1() + 2) | 0);
                Bridge.Test.Assert.areEqual(4, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.getProp1());

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.setProp1((Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.getProp1() + 1) | 0);
                Bridge.Test.Assert.areEqual(5, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.getProp1());

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.setProp1((Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.getProp1() + 1) | 0);
                Bridge.Test.Assert.areEqual(6, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.getProp1());

                Bridge.Test.Assert.areEqual(3, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.method(($t = (Bridge.Int.div(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.getProp1(), 2)) | 0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.setProp1($t), $t)));
                Bridge.Test.Assert.areEqual(3, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.getProp1());

                Bridge.Test.Assert.areEqual(4, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.method(($t1 = (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.getProp1() + 1) | 0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.setProp1($t1), $t1)));
                Bridge.Test.Assert.areEqual(4, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.getProp1());

                Bridge.Test.Assert.areEqual(4, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.method(Bridge.identity(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.getProp1(), ($t2 = (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.getProp1() + 1) | 0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.setProp1($t2), $t2))));
                Bridge.Test.Assert.areEqual(5, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.getProp1());

                Bridge.Test.Assert.areEqual(6, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.method((($t3 = (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.getProp1() + 1) | 0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.setProp1($t3), $t3))));
                Bridge.Test.Assert.areEqual(6, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.getProp1());
            },
            testIndexerOps: function () {
                var $t, $t1, $t2, $t3;
                var app = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer();
                app.setItem(0, 5);

                app.setItem(0, (Bridge.Int.div(app.getItem(0), 2)) | 0);
                Bridge.Test.Assert.areEqual(2, app.getItem(0));

                app.setItem(0, (app.getItem(0) + 2) | 0);
                Bridge.Test.Assert.areEqual(4, app.getItem(0));

                app.setItem(0, (app.getItem(0) + 1) | 0);
                Bridge.Test.Assert.areEqual(5, app.getItem(0));

                app.setItem(0, (app.getItem(0) + 1) | 0);
                Bridge.Test.Assert.areEqual(6, app.getItem(0));

                Bridge.Test.Assert.areEqual(3, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.method(($t = (Bridge.Int.div(app.getItem(0), 2)) | 0, app.setItem(0, $t), $t)));
                Bridge.Test.Assert.areEqual(3, app.getItem(0));

                Bridge.Test.Assert.areEqual(4, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.method(($t1 = (app.getItem(0) + 1) | 0, app.setItem(0, $t1), $t1)));
                Bridge.Test.Assert.areEqual(4, app.getItem(0));

                Bridge.Test.Assert.areEqual(4, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.method(Bridge.identity(app.getItem(0), ($t2 = (app.getItem(0) + 1) | 0, app.setItem(0, $t2), $t2))));
                Bridge.Test.Assert.areEqual(5, app.getItem(0));

                Bridge.Test.Assert.areEqual(6, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.method((($t3 = (app.getItem(0) + 1) | 0, app.setItem(0, $t3), $t3))));
                Bridge.Test.Assert.areEqual(6, app.getItem(0));
            },
            testDictOps: function () {
                var $t, $t1, $t2, $t3;
                var dict = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.f1(new (System.Collections.Generic.Dictionary$2(System.Int32,System.Int32))());

                dict.set(0, (Bridge.Int.div(dict.get(0), 2)) | 0);
                Bridge.Test.Assert.areEqual(2, dict.get(0));

                dict.set(0, (dict.get(0) + 2) | 0);
                Bridge.Test.Assert.areEqual(4, dict.get(0));

                dict.set(0, (dict.get(0) + 1) | 0);
                Bridge.Test.Assert.areEqual(5, dict.get(0));

                dict.set(0, (dict.get(0) + 1) | 0);
                Bridge.Test.Assert.areEqual(6, dict.get(0));

                Bridge.Test.Assert.areEqual(3, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.method(($t = (Bridge.Int.div(dict.get(0), 2)) | 0, dict.set(0, $t), $t)));
                Bridge.Test.Assert.areEqual(3, dict.get(0));

                Bridge.Test.Assert.areEqual(4, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.method(($t1 = (dict.get(0) + 1) | 0, dict.set(0, $t1), $t1)));
                Bridge.Test.Assert.areEqual(4, dict.get(0));

                Bridge.Test.Assert.areEqual(4, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.method(Bridge.identity(dict.get(0), ($t2 = (dict.get(0) + 1) | 0, dict.set(0, $t2), $t2))));
                Bridge.Test.Assert.areEqual(5, dict.get(0));

                Bridge.Test.Assert.areEqual(6, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.method((($t3 = (dict.get(0) + 1) | 0, dict.set(0, $t3), $t3))));
                Bridge.Test.Assert.areEqual(6, dict.get(0));
            },
            testVariableOps: function () {
                var i1 = 5;

                i1 = (Bridge.Int.div(i1, 2)) | 0;
                Bridge.Test.Assert.areEqual(2, i1);

                i1 = (i1 + 2) | 0;
                Bridge.Test.Assert.areEqual(4, i1);

                i1 = (i1 + 1) | 0;
                Bridge.Test.Assert.areEqual(5, i1);

                i1 = (i1 + 1) | 0;
                Bridge.Test.Assert.areEqual(6, i1);

                Bridge.Test.Assert.areEqual(3, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.method((i1 = (Bridge.Int.div(i1, 2)) | 0)));
                Bridge.Test.Assert.areEqual(3, i1);

                Bridge.Test.Assert.areEqual(4, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.method((i1 = (i1 + 1) | 0)));
                Bridge.Test.Assert.areEqual(4, i1);

                Bridge.Test.Assert.areEqual(4, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.method(Bridge.identity(i1, (i1 = (i1 + 1) | 0))));
                Bridge.Test.Assert.areEqual(5, i1);

                Bridge.Test.Assert.areEqual(6, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.method(((i1 = (i1 + 1) | 0))));
                Bridge.Test.Assert.areEqual(6, i1);
            },
            method: function (i) {
                return i;
            }
        },
        dict: null,
        config: {
            init: function () {
                this.dict = new (System.Collections.Generic.Dictionary$2(System.Int32,System.Int32))();
            }
        },
        getItem: function (i) {
            return this.dict.get(i);
        },
        setItem: function (i, value) {
            this.dict.set(i, value);
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer, {
        f1: function (_o14) {
            _o14.add(0, 5);
            return _o14;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1051', {
        statics: {
            testInlinePopertyWithValue: function () {
                var Foo = function(){this.currentBar = false; this.setBar = function(value){this.currentBar = value;};};

                var foo = new Foo();
                foo.setBar(true);
                var baz = foo.currentBar;
                Bridge.Test.Assert.areEqual(true, baz);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1053', {
        statics: {
            testFieldPropertyWithInterface: function () {
                var Foo = function(){this.bar = null;};
                var foo = new Foo();
                var car = foo;
                foo.bar = "1";
                Bridge.Test.Assert.areEqual("1", foo.bar);
                Bridge.Test.Assert.areEqual("1", foo.bar);
                Bridge.Test.Assert.areEqual("1", car.bar);
                Bridge.Test.Assert.areEqual("1", car.bar);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058', {
        statics: {
            testNameTrue: function () {
                Bridge.Test.Assert.areEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058.overlayType", Bridge.getTypeName(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058.overlayType));
                Bridge.Test.Assert.areEqual("$Bridge1058.Bridge1058.class1", Bridge.getTypeName($Bridge1058.Bridge1058.class1));
                Bridge.Test.Assert.areEqual("Bridge1058.class2", Bridge.getTypeName(Bridge1058.class2));
            },
            testNameFales: function () {
                Bridge.Test.Assert.areEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058.OverlayType_B", Bridge.getTypeName(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058.OverlayType_B));
                Bridge.Test.Assert.areEqual("$Bridge1058.Bridge1058.Class1_B", Bridge.getTypeName($Bridge1058.Bridge1058.Class1_B));
                Bridge.Test.Assert.areEqual("Bridge1058.Class2_B", Bridge.getTypeName(Bridge1058.Class2_B));
            }
        }
    });

    Bridge.define('$Bridge1058.Bridge1058.class1');

    Bridge.define('$Bridge1058.Bridge1058.Class1_B');

    Bridge.define('Bridge1058.class2');

    Bridge.define('Bridge1058.Class2_B');

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058.overlayType', {
        $kind: "enum",
        statics: {
            CIRCLE: 0,
            MARKER: 1
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058.OverlayType_B', {
        $kind: "enum",
        statics: {
            CIRCLE: 0,
            MARKER: 1
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059', {
        statics: {
            testEnumNameModes: function () {
                var t1 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059.OverlayType1;
                Bridge.Test.Assert.areEqual(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059.OverlayType1.cIRCLE, t1.cIRCLE);
                Bridge.Test.Assert.areEqual(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059.OverlayType1.marker, t1.marker);

                var t2 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059.OverlayType2;
                Bridge.Test.Assert.areEqual(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059.OverlayType2.CIRCLE, t2.CIRCLE);
                Bridge.Test.Assert.areEqual(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059.OverlayType2.marker, t2.marker);

                var t3 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059.OverlayType3;
                Bridge.Test.Assert.areEqual(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059.OverlayType3.circle, t3.circle);
                Bridge.Test.Assert.areEqual(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059.OverlayType3.marker, t3.marker);

                var t4 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059.OverlayType4;
                Bridge.Test.Assert.areEqual(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059.OverlayType4.CIRCLE, t4.CIRCLE);
                Bridge.Test.Assert.areEqual(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059.OverlayType4.MARKER, t4.MARKER);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059.OverlayType1', {
        $kind: "enum",
        statics: {
            cIRCLE: 1,
            marker: 2
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059.OverlayType2', {
        $kind: "enum",
        statics: {
            CIRCLE: 1,
            marker: 2
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059.OverlayType3', {
        $kind: "enum",
        statics: {
            circle: 1,
            marker: 2
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059.OverlayType4', {
        $kind: "enum",
        statics: {
            CIRCLE: 1,
            MARKER: 2
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1061', {
        statics: {
            testIsDigitFromLinq: function () {
                Bridge.Test.Assert.true(System.Char.isDigit(49));
                Bridge.Test.Assert.true(System.Linq.Enumerable.from("1").any($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1061.f1));

                var s = "s1*";
                Bridge.Test.Assert.areEqual$1(1, System.Linq.Enumerable.from(s).count($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1061.f1), "String IsDigit");
                Bridge.Test.Assert.areEqual$1(1, System.Linq.Enumerable.from(s).count($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1061.f2), "String IsLetter");
                Bridge.Test.Assert.areEqual$1(2, System.Linq.Enumerable.from(s).count($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1061.f3), "String IsLetterOrDigit");
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1061", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1061, {
        f1: function (c) {
            return System.Char.isDigit(c);
        },
        f2: function (c) {
            return System.Char.isLetter(c);
        },
        f3: function (c) {
            return (System.Char.isDigit(c) || System.Char.isLetter(c));
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1065', {
        statics: {
            testDecimalLongWithDictionary: function () {
                var decimalDict = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1065.f1(new (System.Collections.Generic.Dictionary$2(System.Int64,System.Decimal))());
                Bridge.Test.Assert.areEqual("System.Decimal", Bridge.getTypeName(decimalDict.get(System.Int64(0))));
                Bridge.Test.Assert.areEqual("5", Bridge.Int.format(decimalDict.get(System.Int64(0)), 'G'));
                decimalDict.set(System.Int64(0), System.Decimal(1));
                Bridge.Test.Assert.areEqual("System.Decimal", Bridge.getTypeName(decimalDict.get(System.Int64(0))));
                Bridge.Test.Assert.areEqual("1", Bridge.Int.format(decimalDict.get(System.Int64(0)), 'G'));
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1065", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1065, {
        f1: function (_o16) {
            _o16.add(System.Int64(0), System.Decimal(5));
            return _o16;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1066', {
        statics: {
            testInlinePopertyWithValue: function () {
                var dict = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1066.MyDictionary();
                Bridge.Test.Assert.notNull(dict.getAccessor);
                Bridge.Test.Assert.notNull(dict.setAccessor);
                Bridge.Test.Assert.areEqual(1, dict.getAccessor(0));
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1066.MyDictionary', {
        inherits: [System.Collections.Generic.Dictionary$2(System.Int32,System.Int32)],
        getAccessor: function (key) {
            return 1;
        },
        setAccessor: function (key, value) {
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1067', {
        statics: {
            testInlinePopertyWithValue: function () {
                var dict1 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1067.MyDictionary1();
                var dict2 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1067.MyDictionary2();
                Bridge.Test.Assert.null(dict1.getAccessor);
                Bridge.Test.Assert.null(dict1.setAccessor);
                Bridge.Test.Assert.null(dict2.getAccessor);
                Bridge.Test.Assert.null(dict2.setAccessor);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1067.MyDictionary1', {
        inherits: [System.Collections.Generic.Dictionary$2(System.Int32,System.Int32)],

    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1067.MyDictionary2', {
        inherits: [System.Collections.Generic.Dictionary$2(System.Int32,System.Int32)],

    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071', {
        statics: {
            testParamsForCtor: function () {
                var b = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071.B();
                var test = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071.A$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071.C))(b);
                var test2 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071.A$2(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071.C,Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071.D))(b);

                Bridge.Test.Assert.areEqual(1, test._argumentTypes.length);
                Bridge.Test.Assert.areEqual(2, test2._argumentTypes.length);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071.A', {
        _b: null,
        _argumentTypes: null,
        constructor: function (b, argumentTypes) {
            if (argumentTypes === void 0) { argumentTypes = []; }

            this.$initialize();
            this._b = b;
            this._argumentTypes = argumentTypes;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071.B');

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071.C');

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071.D');

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1072', {
        statics: {
            testNameForProperty: function () {
                var c = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1072.Class1();

                Bridge.Test.Assert.notNull(c.getAccessor);
                Bridge.Test.Assert.notNull(c.setAccessor);

                c.setAccessor(7);
                Bridge.Test.Assert.areEqual(7, c.getAccessor());
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1072.Class1', {
        data: 0,
        getAccessor: function () {
            return this.data;
        },
        setAccessor: function (value) {
            this.data = value;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1076', {
        statics: {
            testInlineConstantAsMemberReference: function () {
                Bridge.Test.Assert.areEqual("SomeV", "SomeV");
            },
            testInlineBridgeNumericConstantsAsMemberReference: function () {
                var s;

                s = Bridge.Int.format(System.Decimal.MaxValue, 'G');
                s = System.Single.format(3.40282347E+38, 'G');
                s = System.Double.format(System.Double.max, 'G');
                s = String.fromCharCode(65535);

                s = Bridge.Int.format(System.Decimal.MinValue, 'G');
                s = System.Single.format(-3.40282347E+38, 'G');
                s = System.Single.format(1.401298E-45, 'G');
                s = System.Double.format(System.Double.min, 'G');
                s = System.Double.format(4.94065645841247E-324, 'G');
                s = String.fromCharCode(0);

                s = (255).toString();
                s = (65535).toString();
                s = (4294967295).toString();
                s = System.UInt64.MaxValue.toString();
                s = (127).toString();
                s = (32767).toString();
                s = (2147483647).toString();
                s = System.Int64.MaxValue.toString();

                s = (0).toString();
                s = (0).toString();
                s = (0).toString();
                s = System.UInt64.MinValue.toString();
                s = (-128).toString();
                s = (-32768).toString();
                s = (-2147483648).toString();
                s = System.Int64.MinValue.toString();

                Bridge.Test.Assert.areEqual("-9223372036854775808", s);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1083', {
        statics: {
            testExternalEnum: function () {
                // simulate declaration of external enum
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1083.Foo = {};
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1083.Foo.OK = 'OK';
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1083.Foo.FAIL = 'FAIL';

                var status = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1083.Foo.OK;

                Bridge.Test.Assert.areEqual("OK", System.Enum.toString(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1083.Foo, status));
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1085', {
        statics: {
            testInlineArrayExpand: function () {
                var part1 = ["Hello", "World"];
                var part2 = ["Part", "Two"];
                var merged = [];
                merged.push("Lets", "Beginn");
                merged.push.apply(merged,part1);
                merged.push.apply(merged,part2);

                Bridge.Test.Assert.areEqual(["Lets", "Beginn", "Hello", "World", "Part", "Two"], merged);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1096', {
        statics: {
            testClippingIssues: function () {
                var v = 1;
                var result = ((v >>> 0) * 8) >>> 0;
                Bridge.Test.Assert.areEqual(8, result);

                var a = 1, b = 4;
                var res = (Bridge.Int.clip32(Math.ceil(a / 1.0)) * b) | 0;
                Bridge.Test.Assert.areEqual(4, res);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1098', {
        statics: {
            testInlineConstantAsMemberReference: function () {
                var max = 2147483647;
                Bridge.Test.Assert.areEqual(2147483647, max);
                var r = (max + 1) | 0;
                Bridge.Test.Assert.areEqual(-2147483648, r);

                var max1 = -2147483648;
                Bridge.Test.Assert.areEqual(-2147483648, max1);
                var r1 = (max1 - 1) | 0;
                Bridge.Test.Assert.areEqual(2147483647, r1);

                var max2 = 2147483647;
                Bridge.Test.Assert.areEqual(2147483647, max2);
                var r2 = Bridge.Int.check(max2 - 1, System.Int32);
                Bridge.Test.Assert.areEqual(2147483646, r2);

                var max3 = -2147483648;
                Bridge.Test.Assert.areEqual(-2147483648, max3);
                var r3 = Bridge.Int.check(max3 + 1, System.Int32);
                Bridge.Test.Assert.areEqual(-2147483647, r3);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1103', {
        statics: {
            testPropertyOps: function () {
                var res = "";
                if (true) {
                    var scope = { };
                    if (System.Decimal.tryParse("1.0", null, scope) && scope.v.equalsT(System.Decimal(1))) {
                        res = System.String.concat(res, "first OK ");
                    }
                }

                if (true) {
                    var scope1 = { };
                    if (System.Decimal.tryParse("2.0", null, scope1) && scope1.v.equalsT(System.Decimal(2))) {
                        res = System.String.concat(res, "second OK ");
                    }
                }

                Bridge.Test.Assert.areEqual("first OK second OK ", res);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105', {
        statics: {
            testStaticInitForNestedClasses: function () {
                Bridge.Test.Assert.areEqual("test", Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105.Foo.items.getItem(0).value);
                Bridge.Test.Assert.areEqual("Value1", Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105.Foo1.defaultItem);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105.Foo', {
        statics: {
            items: null,
            config: {
                init: function () {
                    this.items = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105.Foo.f1(new (System.Collections.Generic.List$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105.Foo.Item))());
                }
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105.Foo", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105.Foo, {
        f1: function (_o17) {
            _o17.add(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105.Foo.Item("test"));
            return _o17;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105.Foo.Item', {
        value: null,
        constructor: function (value) {
            this.$initialize();
            this.value = value;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105.Foo1', {
        statics: {
            defaultItem: null,
            config: {
                init: function () {
                    this.defaultItem = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105.Foo1.Item.value;
                }
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105.Foo1.Item', {
        statics: {
            value: "Value1"
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1109', {
        statics: {
            testTemplateOnProperty: function () {
                var gamedata1 = 1;
                Bridge.Test.Assert.areEqual(1, gamedata1);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110', {
        statics: {
            testOverflowForConditionInParenthesized: function () {
                var v = System.Int64(1);
                v = System.Int64((v.gt(System.Int64(1)) ? 1 : 0));
                var res = v.equals(System.Int64(1));
                Bridge.Test.Assert.false(res);
            },
            testOverflowForIndexer: function () {
                var data = [1];
                var v = System.Int64(data[0]);
                v = System.Int64((v.gt(System.Int64(1)) ? 1 : 0));
                var res = v.equals(System.Int64(1));
                Bridge.Test.Assert.false(res);
            },
            testOverflowForBitwise: function () {
                var v2 = 4294967295;
                var shifted = (v2 << 31) >>> 0;
                var res2 = shifted === 2147483648;
                Bridge.Test.Assert.true(res2);

                var v3 = 4294967295;
                var shifted3 = (v3 << 31) >>> 0;
                var res3 = shifted === 2147483648;
                Bridge.Test.Assert.true(res3);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1120', {
        statics: {
            testEnumDoesNotGenerateValuesAsPowerOfTwo: function () {
                Bridge.Test.Assert.areEqual$1(-10, -10, "-10");
                Bridge.Test.Assert.areEqual$1(-9, -9, "-9");
                Bridge.Test.Assert.areEqual$1(-8, -8, "-8");
                Bridge.Test.Assert.areEqual$1(1, 1, "1");
                Bridge.Test.Assert.areEqual$1(-9, -9, "-9");
                Bridge.Test.Assert.areEqual$1(0, 0, "0");
                Bridge.Test.Assert.areEqual$1(1, 1, "1");
            },
            testFlagEnumDoesNotGenerateValuesAsPowerOfTwo: function () {
                Bridge.Test.Assert.areEqual$1(0, 0, "0");
                Bridge.Test.Assert.areEqual$1(7, 7, "7");
                Bridge.Test.Assert.areEqual$1(8, 8, "8");
                Bridge.Test.Assert.areEqual$1(9, 9, "9");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1120.Baz', {
        $kind: "enum",
        statics: {
            a: 0,
            b: 7,
            c: 8,
            d: 9
        },
        $flags: true
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1120.Test', {
        $kind: "enum",
        statics: {
            M1: -10,
            M2: -9,
            M3: -8,
            M4: 1,
            M5: -9,
            M6: 0,
            M7: 1
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128', {
        statics: {
            testNestedClassesWithInterface: function () {
                var res = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.Foo.items[0].value;
                Bridge.Test.Assert.areEqual("test", res);

                res = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.Foo1.items[0].value;
                Bridge.Test.Assert.areEqual("abc", res);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.Foo', {
        statics: {
            constructor: function () {
                System.Array.sort(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.Foo.items);
            },
            items: null,
            config: {
                init: function () {
                    this.items = [new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.Foo.Item.$constructor1("test")];
                }
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.Foo.Item', {
        inherits: function () { return [System.IComparable$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.Foo.Item)]; },
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.Foo.Item(); }
        },
        value: null,
        config: {
            alias: [
            "compareTo", "System$IComparable$1$Bridge$ClientTest$Batch3$BridgeIssues$Bridge1128$Foo$Item$compareTo"
            ]
        },
        $constructor1: function (value) {
            this.$initialize();
            this.value = value;
        },
        constructor: function () {
            this.$initialize();
        },
        compareTo: function (other) {
            return System.String.compare(this.value, other.value);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + -1126420587;
            hash = hash * 23 + (this.value == null ? 0 : Bridge.getHashCode(this.value));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.Foo.Item)) {
                return false;
            }
            return Bridge.equals(this.value, o.value);
        },
        $clone: function (to) {
            var s = to || new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.Foo.Item();
            s.value = this.value;
            return s;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.Foo1', {
        statics: {
            constructor: function () {
                System.Array.sort(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.Foo1.items, new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.Foo1.Comparer()); // throws
            },
            items: null,
            config: {
                init: function () {
                    this.items = [new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.Foo1.Item.$constructor1("test"), new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.Foo1.Item.$constructor1("xyz"), new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.Foo1.Item.$constructor1("abc")];
                }
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.Foo1.Item', {
        inherits: function () { return [System.IComparable$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.Foo1.Item)]; },
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.Foo1.Item(); }
        },
        value: null,
        config: {
            alias: [
            "compareTo", "System$IComparable$1$Bridge$ClientTest$Batch3$BridgeIssues$Bridge1128$Foo1$Item$compareTo"
            ]
        },
        $constructor1: function (value) {
            this.$initialize();
            this.value = value;
        },
        constructor: function () {
            this.$initialize();
        },
        compareTo: function (other) {
            return System.String.compare(this.value, other.value);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + -1126420587;
            hash = hash * 23 + (this.value == null ? 0 : Bridge.getHashCode(this.value));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.Foo1.Item)) {
                return false;
            }
            return Bridge.equals(this.value, o.value);
        },
        $clone: function (to) {
            var s = to || new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.Foo1.Item();
            s.value = this.value;
            return s;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1130', {
        statics: {
            testUlongDivision: function () {
                var a = System.UInt64(System.Int64([0,8]));
                var b = System.UInt64(2656901066);
                var x = a.div(b);
                var y = System.UInt64(3850086465);
                var z = System.UInt64(2476925576);
                var res = (x.mul(y)).gt((z.shl(32)));

                Bridge.Test.Assert.false(res);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1134', {
        statics: {
            testJsonArrayParse: function () {
                var o = Bridge.merge(new Array(), JSON.parse("[1]"));
                Bridge.Test.Assert.true(o != null);
                Bridge.Test.Assert.areEqual(1, o.length);
                Bridge.Test.Assert.areEqual(1, o[0]);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1140', {
        statics: {
            testDefaultNullable: function () {
                var d = null;
                var m = null;
                var l = null;
                var c = null;

                Bridge.Test.Assert.areEqual$1(null, d, "double?");
                Bridge.Test.Assert.areEqual$1(null, m, "decimal?");
                Bridge.Test.Assert.areEqual$1(null, l, "long?");
                Bridge.Test.Assert.areEqual$1(null, c, "char?");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1141', {
        statics: {
            testLongDivisionInfiniteLoopFixed: function () {
                var m = System.UInt64.MaxValue;
                var m1 = System.UInt64([-2,-1]);
                var res1 = m.div(m1);

                Bridge.Test.Assert.areEqual$1("1", res1.toString(), "https://github.com/dcodeIO/long.js/issues/31");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1144', {
        statics: {
            testStringFormat: function () {
                var z = System.Decimal(-1.122);
                Bridge.Test.Assert.areEqual("-1.12", Bridge.Int.format(z, "##.##"));
                Bridge.Test.Assert.areEqual("-1.12", Bridge.Int.format(z, "##.00"));
                Bridge.Test.Assert.areEqual("-01.12", Bridge.Int.format(z, "00.##"));

                var x = System.Decimal(0.0);
                Bridge.Test.Assert.areEqual("0", Bridge.Int.format(x, "#0"));
                Bridge.Test.Assert.areEqual("", Bridge.Int.format(x, "##"));
                Bridge.Test.Assert.areEqual("", Bridge.Int.format(x, "##.##"));
                Bridge.Test.Assert.areEqual(".0", Bridge.Int.format(x, "##.0#"));
                Bridge.Test.Assert.areEqual(".00", Bridge.Int.format(x, "##.#0"));
                Bridge.Test.Assert.areEqual(".00", Bridge.Int.format(x, "##.00"));

                var y = System.Decimal(0.2);
                Bridge.Test.Assert.areEqual("", Bridge.Int.format(y, "##"));
                Bridge.Test.Assert.areEqual(".2", Bridge.Int.format(y, "##.##"));
                Bridge.Test.Assert.areEqual(".2", Bridge.Int.format(y, "##.0#"));
                Bridge.Test.Assert.areEqual(".20", Bridge.Int.format(y, "##.#0"));
                Bridge.Test.Assert.areEqual(".20", Bridge.Int.format(y, "##.00"));

                var d = System.Decimal(2.0);
                Bridge.Test.Assert.areEqual("2", Bridge.Int.format(d, "."));
                Bridge.Test.Assert.areEqual("2", Bridge.Int.format(d, ".#"));
                Bridge.Test.Assert.areEqual("2", Bridge.Int.format(d, ".##"));
                Bridge.Test.Assert.areEqual("%200", Bridge.Int.format(d, "%.##"));
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1146', {
        statics: {
            testLongIssues: function () {
                Bridge.Test.Assert.true$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1146.intUintEquality(0, 0), "int == uint uses .Equals() between long: System.Int64(a).equals(System.Int64(b))");
                Bridge.Test.Assert.true$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1146.precedence(), "Correct order for `a += b >> 1` -> `(a + (b >>> 1))`");
            },
            intUintEquality: function (a, b) {
                return System.Int64(a).equals(System.Int64(b));
            },
            precedence: function () {
                var a = 1;
                var b = 2;
                a = (a + (b >>> 1)) >>> 0;
                return a === 2;
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1149', {
        statics: {
            bar_str: null,
            testBitwiseOrAnd: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1149.bar_str = "";
                var foo = true;
                foo = !!(foo | Bridge.ClientTest.Batch3.BridgeIssues.Bridge1149.bar());
                foo = !!(foo | Bridge.ClientTest.Batch3.BridgeIssues.Bridge1149.bar());

                Bridge.Test.Assert.areEqual("barbar", Bridge.ClientTest.Batch3.BridgeIssues.Bridge1149.bar_str);
            },
            bar: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1149.bar_str = System.String.concat(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1149.bar_str, "bar");
                return false;
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1160', {
        statics: {
            testBitwiseOrAnd: function () {
                var x = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1160A();

                var processor = x.getProcessor();
                Bridge.Test.Assert.areEqual("Hello", processor("Hello"));
                Bridge.Test.Assert.areEqual("Hello", x.getProcessor()("Hello"));
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1160A', {
        getProcessor: function () {
            return $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1160A.f1;
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1160A", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1160A, {
        f1: function (message) {
            return message;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170', {
        statics: {
            testAsyncUsing: function () {
                var $step = 0,
                    $task1, 
                    $task2, 
                    $task3, 
                    $jumpFromFinally, 
                    $returnValue, 
                    done, 
                    parent, 
                    parent2, 
                    _bridgeTmp_1, 
                    $async_e, 
                    c1, 
                    $async_e1, 
                    c11, 
                    c2, 
                    $async_e2, 
                    $async_e3, 
                    $async_e4, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3,4,5,6,7,8,9,10,11,12,14,15], $step);
                                switch ($step) {
                                    case 0: {
                                        done = Bridge.Test.Assert.async();
                                        parent = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170();
                                        parent2 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170();

                                        _bridgeTmp_1 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170.Class1.$constructor1(parent);
                                        $step = 1;
                                        continue;
                                    }
                                    case 1: {
                                        $task1 = System.Threading.Tasks.Task.delay(1);
                                        $step = 2;
                                        $task1.continueWith($asyncBody, true);
                                        return;
                                    }
                                    case 2: {
                                        $task1.getAwaitedResult();
                                        Bridge.Test.Assert.false(parent.isDisposed);
                                        $step = 3;
                                        continue;
                                    }
                                    case 3: {
                                        if (Bridge.hasValue(_bridgeTmp_1)) _bridgeTmp_1.dispose();

                                        if ($jumpFromFinally > -1) {
                                            $step = $jumpFromFinally;
                                            $jumpFromFinally = null;
                                        } else if ($async_e) {
                                            throw $async_e;
                                            return;
                                        } else if (Bridge.isDefined($returnValue)) {
                                            $tcs.setResult($returnValue);
                                            return;
                                        }
                                        $step = 4;
                                        continue;
                                    }
                                    case 4: {
                                    
                                        Bridge.Test.Assert.true(parent.isDisposed);

                                        parent.isDisposed = false;
                                        c1 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170.Class1.$constructor1(parent);
                                        $step = 5;
                                        continue;
                                    }
                                    case 5: {
                                        $task2 = System.Threading.Tasks.Task.delay(1);
                                        $step = 6;
                                        $task2.continueWith($asyncBody, true);
                                        return;
                                    }
                                    case 6: {
                                        $task2.getAwaitedResult();
                                        Bridge.Test.Assert.false(c1.isDisposed);
                                        Bridge.Test.Assert.false(parent.isDisposed);
                                        $step = 7;
                                        continue;
                                    }
                                    case 7: {
                                        if (Bridge.hasValue(c1)) c1.dispose();

                                        if ($jumpFromFinally > -1) {
                                            $step = $jumpFromFinally;
                                            $jumpFromFinally = null;
                                        } else if ($async_e) {
                                            throw $async_e;
                                            return;
                                        } else if (Bridge.isDefined($returnValue)) {
                                            $tcs.setResult($returnValue);
                                            return;
                                        }
                                        $step = 8;
                                        continue;
                                    }
                                    case 8: {
                                    
                                        Bridge.Test.Assert.true(parent.isDisposed);

                                        parent.isDisposed = false;
                                        c11 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170.Class1.$constructor1(parent);
                                        $step = 9;
                                        continue;
                                    }
                                    case 9: {
                                        c2 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170.Class1.$constructor1(parent2);
                                        $step = 10;
                                        continue;
                                    }
                                    case 10: {
                                        $task3 = System.Threading.Tasks.Task.delay(1);
                                        $step = 11;
                                        $task3.continueWith($asyncBody, true);
                                        return;
                                    }
                                    case 11: {
                                        $task3.getAwaitedResult();
                                        Bridge.Test.Assert.false(c11.isDisposed);
                                        Bridge.Test.Assert.false(c2.isDisposed);
                                        $step = 12;
                                        continue;
                                    }
                                    case 12: {
                                        if (Bridge.hasValue(c2)) c2.dispose();

                                        if ($jumpFromFinally > -1) {
                                            $step = 14;
                                            continue;
                                        } else if ($async_e) {
                                            throw $async_e;
                                            return;
                                        } else if (Bridge.isDefined($returnValue)) {
                                            $step = 14;
                                            continue;
                                        }
                                        $step = 13;
                                        continue;
                                    }

                                    case 14: {
                                        if (Bridge.hasValue(c1)) c1.dispose();

                                        if ($jumpFromFinally > -1) {
                                            $step = $jumpFromFinally;
                                            $jumpFromFinally = null;
                                        } else if ($async_e) {
                                            throw $async_e;
                                            return;
                                        } else if (Bridge.isDefined($returnValue)) {
                                            $tcs.setResult($returnValue);
                                            return;
                                        }
                                        $step = 15;
                                        continue;
                                    }
                                    case 15: {
                                    
                                        Bridge.Test.Assert.true(parent.isDisposed);
                                        Bridge.Test.Assert.true(parent2.isDisposed);

                                        done();
                                        return;
                                    }
                                    default: {
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            if ($step >= 1 && $step <= 2){

                                $step = 3;
                                $asyncBody();
                                return;
                            }
                            if ($step >= 5 && $step <= 6){

                                $step = 7;
                                $asyncBody();
                                return;
                            }
                            if ($step >= 10 && $step <= 11){

                                $step = 12;
                                $asyncBody();
                                return;
                            }
                            if ($step >= 9 && $step <= 13){

                                $step = 14;
                                $asyncBody();
                                return;
                            }
                            throw $async_e;
                        }
                    }, arguments);

                $asyncBody();
            },
            testAsyncUsingWithException: function () {
                var $step = 0,
                    $task1, 
                    $jumpFromFinally, 
                    $returnValue, 
                    done, 
                    parent, 
                    _bridgeTmp_2, 
                    $async_e, 
                    e, 
                    $async_e1, 
                    $async_e2, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3,4,5,6,7], $step);
                                switch ($step) {
                                    case 0: {
                                        done = Bridge.Test.Assert.async();
                                        parent = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170();
                                        $step = 1;
                                        continue;
                                    }
                                    case 1: {
                                        _bridgeTmp_2 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170.Class1.$constructor1(parent);
                                        $step = 2;
                                        continue;
                                    }
                                    case 2: {
                                        $task1 = System.Threading.Tasks.Task.delay(1);
                                        $step = 3;
                                        $task1.continueWith($asyncBody, true);
                                        return;
                                    }
                                    case 3: {
                                        $task1.getAwaitedResult();
                                        throw new System.InvalidOperationException("Bridge1170 test");
                                        $step = 4;
                                        continue;
                                    }
                                    case 4: {
                                        if (Bridge.hasValue(_bridgeTmp_2)) _bridgeTmp_2.dispose();

                                        if ($jumpFromFinally > -1) {
                                            $step = $jumpFromFinally;
                                            $jumpFromFinally = null;
                                        } else if ($async_e) {
                                            throw $async_e;
                                            return;
                                        } else if (Bridge.isDefined($returnValue)) {
                                            $tcs.setResult($returnValue);
                                            return;
                                        }
                                        $step = 5;
                                        continue;
                                    }
                                    case 5: {
                                        $step = 7;
                                        continue;
                                    }
                                    case 6: {
                                        Bridge.Test.Assert.areEqual("Bridge1170 test", e.getMessage());
                                        $async_e = null;
                                        $step = 7;
                                        continue;
                                    }
                                    case 7: {
                                    
                                        Bridge.Test.Assert.true(parent.isDisposed);

                                        done();
                                        return;
                                    }
                                    default: {
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            if ($step >= 2 && $step <= 3){

                                $step = 4;
                                $asyncBody();
                                return;
                            }
                            if ( $step >= 1 && $step <= 5 ){
                                if (Bridge.is($async_e, System.InvalidOperationException)) {
                                    e = $async_e;
                                    $step = 6;
                                    $asyncBody();
                                    return;
                                }
                            }
                            throw $async_e;
                        }
                    }, arguments);

                $asyncBody();
            }
        },
        isDisposed: false
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170.Class1', {
        inherits: [System.IDisposable],
        isDisposed: false,
        parent: null,
        config: {
            alias: [
            "dispose", "System$IDisposable$dispose"
            ]
        },
        constructor: function () {
            this.$initialize();
        },
        $constructor1: function (parent) {
            this.$initialize();
            this.parent = parent;
        },
        dispose: function () {
            if (this.parent != null) {
                this.parent.isDisposed = true;
            }
            this.isDisposed = true;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1171', {
        statics: {
            testLinqEnumerableInList: function () {
                var $t;
                var result = System.Array.init(2, null);
                result[0] = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1171.ObjectA(), {
                    setFieldA: null
                } );
                result[1] = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1171.ObjectA(), {
                    setFieldA: 2
                } );

                var query = System.Linq.Enumerable.from(result).where($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1171.f1).groupBy($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1171.f2);
                Bridge.Test.Assert.areEqual(1, query.count());

                $t = Bridge.getEnumerator(query);
                while ($t.moveNext()) {
                    var key = $t.getCurrent();
                    Bridge.Test.Assert.areEqual(1, new (System.Collections.Generic.List$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1171.ObjectA))(key).getCount());
                }
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1171", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1171, {
        f1: function (x) {
            return System.Nullable.hasValue(x.getFieldA());
        },
        f2: function (x) {
            return System.Nullable.getValueOrDefault(x.getFieldA(), 0);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1171.ObjectA', {
        config: {
            properties: {
                FieldA: null
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1175', {
        statics: {
            testNullComparing: function () {
                var temp = {  };
                var varNull = null;
                var varUndefined = temp["this-prop-undefined"];

                Bridge.Test.Assert.true$1(Bridge.referenceEquals(varNull, varUndefined), "varNull == varUndefined");
                Bridge.Test.Assert.true$1(varNull == null, "varNull == null");
                Bridge.Test.Assert.true$1(varUndefined == null, "varUndefined == null");
                Bridge.Test.Assert.true$1(Bridge.referenceEquals(undefined, varUndefined), "Script.Undefined == varUndefined");

                Bridge.Test.Assert.true$1(Bridge.referenceEquals(varUndefined, varNull), "varUndefined == varNull");
                Bridge.Test.Assert.true$1(null == varNull, "null == varNull");
                Bridge.Test.Assert.true$1(null == varUndefined, "null == varUndefined");
                Bridge.Test.Assert.true$1(Bridge.referenceEquals(varUndefined, undefined), "varUndefined == Script.Undefined");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1176', {
        statics: {
            testFunctionLifting: function () {
                var scope = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1176;
                Bridge.Test.Assert.null$1(scope, "scope should not exists");

                var items = [new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1176.Item$1(System.Int32))(), new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1176.Item$1(System.Int32))()];
                var values = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1176.getItemValues(System.Int32, items);
                Bridge.Test.Assert.areEqual("Item, Item", values.join(", "));
            },
            getItemValues: function (TValue, items) {
                return System.Linq.Enumerable.from(items).select(function (item) {
                    return Bridge.ClientTest.Batch3.BridgeIssues.Bridge1176.Item$1(TValue).op_Implicit(item);
                }).toArray();
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1176.Item$1', function (TValue) { return {
        statics: {
            op_Implicit: function (item) {
                return "Item";
            }
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1177', {
        statics: {
            testImplicitCast: function () {
                var item = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1177.Item("Test1");
                var s = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1177.Item.op_Implicit(item);
                Bridge.Test.Assert.areEqual("Test1", s);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1177.Item', {
        statics: {
            op_Implicit: function (item) {
                return item.value;
            }
        },
        value: null,
        constructor: function (value) {
            this.$initialize();
            this.value = value;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1180', {
        statics: {
            testStructClone: function () {
                var list = new (System.Collections.Generic.List$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1180.Vector2))();
                list.add(Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1180.Vector2(), {
                    x: 0.0,
                    y: 1.0
                } ));

                var vec = list.getItem(0).$clone();
                vec.x = 5.0;

                Bridge.Test.Assert.areEqual(0, list.getItem(0).x);
                Bridge.Test.Assert.areEqual(5, vec.x);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1180.Vector2', {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1180.Vector2(); }
        },
        x: 0,
        y: 0,
        constructor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 1335531435;
            hash = hash * 23 + (this.x == null ? 0 : Bridge.getHashCode(this.x));
            hash = hash * 23 + (this.y == null ? 0 : Bridge.getHashCode(this.y));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1180.Vector2)) {
                return false;
            }
            return Bridge.equals(this.x, o.x) && Bridge.equals(this.y, o.y);
        },
        $clone: function (to) {
            var s = to || new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1180.Vector2();
            s.x = this.x;
            s.y = this.y;
            return s;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1184', {
        statics: {
            testGetTypeForNumberTypes: function () {
                var b = 1;
                Bridge.Test.Assert.areEqual(System.Byte, System.Byte);

                var sb = 1;
                Bridge.Test.Assert.areEqual(System.SByte, System.SByte);

                var s = 1;
                Bridge.Test.Assert.areEqual(System.Int16, System.Int16);

                var us = 1;
                Bridge.Test.Assert.areEqual(System.UInt16, System.UInt16);

                var i = 1;
                Bridge.Test.Assert.areEqual(System.Int32, System.Int32);

                var ui = 1;
                Bridge.Test.Assert.areEqual(System.UInt32, System.UInt32);

                var d = 1.1;
                Bridge.Test.Assert.areEqual(System.Double, System.Double);

                var f = 1.1;
                Bridge.Test.Assert.areEqual(System.Single, System.Single);

                var o = b;
                Bridge.Test.Assert.areEqual(System.Int32, Bridge.getType(o));

                o = f;
                Bridge.Test.Assert.areEqual(System.Double, Bridge.getType(o));
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1186', {
        statics: {
            testLambdasInField: function () {
                var c = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1186();
                Bridge.Test.Assert.areEqual(1, c.list.getItem(0)(1));
                Bridge.Test.Assert.areEqual(3, c.list.getItem(1)(2));
            }
        },
        list: null,
        config: {
            init: function () {
                this.list = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1186.f3(new (System.Collections.Generic.List$1(Function))());
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1186", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1186, {
        f1: function (value) {
            return value;
        },
        f2: function (value) {
            return ((value + 1) | 0);
        },
        f3: function (_o18) {
            _o18.add($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1186.f1);
            _o18.add($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1186.f2);
            return _o18;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1189', {
        statics: {
            testTaskNumber: function () {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $task2, 
                    $taskResult2, 
                    $jumpFromFinally, 
                    done, 
                    resultLong, 
                    resultDecimal, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1,2], $step);
                            switch ($step) {
                                case 0: {
                                    done = Bridge.Test.Assert.async();
                                    $task1 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1189.fooLong();
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    resultLong = $taskResult1;
                                    Bridge.Test.Assert.true$1(System.Int64(-5).equals(resultLong), "Task<long>");

                                    $task2 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1189.fooDecimal();
                                    $step = 2;
                                    $task2.continueWith($asyncBody, true);
                                    return;
                                }
                                case 2: {
                                    $taskResult2 = $task2.getAwaitedResult();
                                    resultDecimal = $taskResult2;
                                    Bridge.Test.Assert.true$1(System.Decimal(-7).equalsT(resultDecimal), "Task<decimal>");

                                    done();
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            },
            fooLong: function () {
                var $step = 0,
                    $task1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        $task1 = System.Threading.Tasks.Task.delay(1);
                                        $step = 1;
                                        $task1.continueWith($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $task1.getAwaitedResult();
                                        $tcs.setResult(System.Int64(-5));
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            fooDecimal: function () {
                var $step = 0,
                    $task1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        $task1 = System.Threading.Tasks.Task.delay(1);
                                        $step = 1;
                                        $task1.continueWith($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $task1.getAwaitedResult();
                                        $tcs.setResult(System.Decimal(-7));
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1197', {
        statics: {
            testGetHashCodeOnDictionary: function () {
                var $t;
                var dict = new (System.Collections.Generic.Dictionary$2(System.Int32,String))();

                // Calling GetHashCode() breaks the dictionary.
                var hash = Bridge.getHashCode(dict);

                // Count is still 0.
                Bridge.Test.Assert.areEqual(0, dict.getCount());

                $t = Bridge.getEnumerator(dict);
                while ($t.moveNext()) {
                    var item = $t.getCurrent();
                    Bridge.Test.Assert.fail$1("Dictionary should be empty");
                }
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1199', {
        statics: {
            testEventNameCase: function () {
                var wrong = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1199.NotWorking$1(System.Int32))();
                wrong.IsNotWorking = Bridge.fn.combine(wrong.IsNotWorking, $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1199.f1);
                Bridge.Test.Assert.areEqual("somevalue", wrong.validate());
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1199", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1199, {
        f1: function () {
            return "somevalue";
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1199.NotWorking$1', function (T) { return {
        config: {
            events: {
                IsNotWorking: null
            }
        },
        validate: function () {
            return Bridge.staticEquals(this.IsNotWorking, null) ? "no subscribers" : this.IsNotWorking();
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202', {
        statics: {
            decimalField: System.Decimal(0.0),
            intField: 0,
            array: null,
            outMethod$1: function (value) {
                value.v = 3;
            },
            outMethod: function (value) {
                value.v = System.Decimal(7);
            },
            refMethod$1: function (value) {
                value.v = (value.v + 1) | 0;
            },
            refMethod: function (value) {
                value.v = value.v.inc();
            },
            testRefOutStaticIntField: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.intField = 0;

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.outMethod$1(Bridge.ref(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202, "intField"));
                Bridge.Test.Assert.areEqual(3, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.intField);

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.refMethod$1(Bridge.ref(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202, "intField"));
                Bridge.Test.Assert.areEqual(4, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.intField);
            },
            testRefOutLocal1DIntArray: function () {
                var localArr = [0, 0];

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.outMethod$1(Bridge.ref(localArr, 0));
                Bridge.Test.Assert.areEqual(3, localArr[0]);

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.refMethod$1(Bridge.ref(localArr, 0));
                Bridge.Test.Assert.areEqual(4, localArr[0]);

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.outMethod$1(Bridge.ref(localArr, localArr[1]));
                Bridge.Test.Assert.areEqual(3, localArr[localArr[1]]);

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.refMethod$1(Bridge.ref(localArr, localArr[1]));
                Bridge.Test.Assert.areEqual(4, localArr[localArr[1]]);
            },
            testRefOutStatic1DIntArray: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.array = [0, 0];

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.outMethod$1(Bridge.ref(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.array, 0));
                Bridge.Test.Assert.areEqual(3, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.array[0]);

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.refMethod$1(Bridge.ref(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.array, 0));
                Bridge.Test.Assert.areEqual(4, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.array[0]);

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.outMethod$1(Bridge.ref(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.array, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.array[1]));
                Bridge.Test.Assert.areEqual(3, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.array[Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.array[1]]);

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.refMethod$1(Bridge.ref(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.array, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.array[1]));
                Bridge.Test.Assert.areEqual(4, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.array[Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.array[1]]);
            },
            testRefOutLocal2DIntArray: function () {
                var array2D = System.Array.create(0, [[0, 0]], 1, 2);

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.outMethod$1(Bridge.ref(array2D, [0, 0]));
                Bridge.Test.Assert.areEqual(3, array2D.get([0, 0]));

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.refMethod$1(Bridge.ref(array2D, [0, 0]));
                Bridge.Test.Assert.areEqual(4, array2D.get([0, 0]));

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.outMethod$1(Bridge.ref(array2D, [array2D.get([0, 1]), array2D.get([0, 1])]));
                Bridge.Test.Assert.areEqual(3, array2D.get([array2D.get([0, 1]), array2D.get([0, 1])]));

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.refMethod$1(Bridge.ref(array2D, [array2D.get([0, 1]), array2D.get([0, 1])]));
                Bridge.Test.Assert.areEqual(4, array2D.get([array2D.get([0, 1]), array2D.get([0, 1])]));
            },
            testRefOutStaticDecimalField: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.decimalField = System.Decimal(0);

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.outMethod(Bridge.ref(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202, "decimalField"));
                Bridge.Test.Assert.areEqual("7", Bridge.Int.format(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.decimalField, 'G'));

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.refMethod(Bridge.ref(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202, "decimalField"));
                Bridge.Test.Assert.areEqual("8", Bridge.Int.format(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.decimalField, 'G'));
            },
            testRefOutLocal1DDecimalArray: function () {
                var localArr = [System.Decimal(0), System.Decimal(0)];

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.outMethod(Bridge.ref(localArr, 0));
                Bridge.Test.Assert.areEqual("7", Bridge.Int.format(localArr[0], 'G'));

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.refMethod(Bridge.ref(localArr, 0));
                Bridge.Test.Assert.areEqual("8", Bridge.Int.format(localArr[0], 'G'));
            },
            testRefOutLocal2DDecimalArray: function () {
                var array2D = System.Array.create(System.Decimal(0.0), [[System.Decimal(0), System.Decimal(0)]], 1, 2);

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.outMethod(Bridge.ref(array2D, [0, 0]));
                Bridge.Test.Assert.areEqual("7", Bridge.Int.format(array2D.get([0, 0]), 'G'));

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.refMethod(Bridge.ref(array2D, [0, 0]));
                Bridge.Test.Assert.areEqual("8", Bridge.Int.format(array2D.get([0, 0]), 'G'));
            },
            testInlineOutStaticIntField: function () {
                var s = "1";
                var i = { };
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.intField = 0;

                Bridge.Test.Assert.true(System.Int32.tryParse(s, i));
                Bridge.Test.Assert.areEqual(1, i.v);

                Bridge.Test.Assert.true(System.Int32.tryParse(s, Bridge.ref(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202, "intField")));
                Bridge.Test.Assert.areEqual(1, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.intField);
            },
            testInlineOutStatic1DIntArray: function () {
                var s = "1";
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.array = [0, 0];

                Bridge.Test.Assert.true(System.Int32.tryParse(s, Bridge.ref(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.array, 0)));
                Bridge.Test.Assert.areEqual(1, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.array[0]);

                Bridge.Test.Assert.true(System.Int32.tryParse(s, Bridge.ref(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.array, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.array[1])));
                Bridge.Test.Assert.areEqual(1, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.array[Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.array[1]]);
            },
            testInlineOutLocal2DIntArray: function () {
                var s = "1";
                var array2D = System.Array.create(0, [[0, 0]], 1, 2);

                Bridge.Test.Assert.true(System.Int32.tryParse(s, Bridge.ref(array2D, [0, 0])));
                Bridge.Test.Assert.areEqual(1, array2D.get([0, 0]));

                Bridge.Test.Assert.true(System.Int32.tryParse(s, Bridge.ref(array2D, [array2D.get([0, 1]), array2D.get([0, 1])])));
                Bridge.Test.Assert.areEqual(1, array2D.get([array2D.get([0, 1]), array2D.get([0, 1])]));
            }
        }
    });

    (function(){
        var Bridge1203_a2 = function () {
        };
    })();

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1203', {
        statics: {
            initMethod1: function () {
                var Bridge1203_a1 = function () {
                };
            },
            testLiftedFunctionsInsideInitMethod: function () {
                var scope = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1203;
                Bridge.Test.Assert.null$1(scope, "scope should not exists");
            }
        }
    });

    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1203.initMethod1();

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1206', {
        statics: {
            testDocumentURLProperty: function () {
                var raw = document.URL;
                var actual = document.URL;

                Bridge.Test.Assert.areEqual(raw, actual);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217', {
        statics: {
            testTypeInferenceWithNamedArguments: function () {
                var r1 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217.getNavigatorToTest1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217.DemoNavigator, "", "", $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217.f1);
                Bridge.Test.Assert.areEqual(Bridge.Reflection.getTypeFullName(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217.DemoNavigator), r1);

                var r2 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217.getNavigatorToTest1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217.DemoNavigator, "", "", $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217.f1);
                Bridge.Test.Assert.areEqual(Bridge.Reflection.getTypeFullName(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217.DemoNavigator), r2);

                var r3 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217.getNavigatorToTest2(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217.DemoNavigator, "", "", null);
                Bridge.Test.Assert.areEqual(Bridge.Reflection.getTypeFullName(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217.DemoNavigator), r3);

                var r4 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217.getNavigatorToTest2(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217.DemoNavigator, "", "", null);
                Bridge.Test.Assert.areEqual(Bridge.Reflection.getTypeFullName(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217.DemoNavigator), r4);
            },
            getNavigatorToTest1: function (TNavigator, initialUrl, assert, navigatorGenerator) {
                return Bridge.Reflection.getTypeFullName(TNavigator);
            },
            getNavigatorToTest2: function (TNavigator, initialUrl, assert, navigatorGenerator) {
                return Bridge.Reflection.getTypeFullName(TNavigator);
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217, {
        f1: function () {
            return null;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217.Navigator');

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1219', {
        statics: {
            testLongJSON: function () {
                var x1 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1219.TestClass1();
                x1.setLongProperty(System.Int64(100));
                Bridge.Test.Assert.areEqual("{\"LongProperty\":100}", System.String.replaceAll(JSON.stringify(x1), " ", ""));

                var x2 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1219.TestClass2();
                x2.setULongProperty(System.UInt64(200));
                Bridge.Test.Assert.areEqual("{\"ULongProperty\":200}", System.String.replaceAll(JSON.stringify(x2), " ", ""));

                var x3 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1219.TestClass3();
                x3.setDecimalProperty(System.Decimal(300));
                Bridge.Test.Assert.areEqual("{\"DecimalProperty\":300}", System.String.replaceAll(JSON.stringify(x3), " ", ""));
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1219.TestClass1', {
        config: {
            properties: {
                LongProperty: System.Int64(0)
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1219.TestClass2', {
        config: {
            properties: {
                ULongProperty: System.UInt64(0)
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1219.TestClass3', {
        config: {
            properties: {
                DecimalProperty: System.Decimal(0.0)
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge122', {
        statics: {
            nx: 1,
            breaker: null,
            config: {
                init: function () {
                    this.breaker = System.Array.create(0, [[1, 2], [3, 4]], 2, 2);
                }
            },
            test2DArrayConstruction: function () {
                var x = 0;
                var y = 1;

                var retval = (x >= 0 && x < Bridge.ClientTest.Batch3.BridgeIssues.Bridge122.nx && Bridge.ClientTest.Batch3.BridgeIssues.Bridge122.breaker.length > ((((((x + 1) | 0)) * Bridge.ClientTest.Batch3.BridgeIssues.Bridge122.nx) | 0))) ? Bridge.ClientTest.Batch3.BridgeIssues.Bridge122.breaker.get([x, y]) : 0;

                Bridge.Test.Assert.areEqual(2, retval);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1220', {
        statics: {
            testConstInGenericClass: function () {
                Bridge.Test.Assert.areEqual(1, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1220.Class1$1(System.Int32).Const1);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1220.Class1$1', function (T) { return {
        statics: {
            Const1: 1
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226', {
        statics: {
            DELTA: 1E-15,
            assertValue: function (expected, actual, delta, message) {
                var $t;
                if (delta === void 0) { delta = 1E-15; }
                if (message === void 0) { message = null; }
                var e = System.Double.format(expected, 'G');
                var a = System.Double.format(actual, 'G');

                if (!isFinite(expected) || !isFinite(actual)) {
                    Bridge.Test.Assert.areEqual$1(e, a, message);
                    return;
                }

                var diff = expected - actual;
                if (diff > delta || diff < -delta) {
                    Bridge.Test.Assert.areEqual$1(e, a, message);
                } else {
                    var m = ($t = message, $t != null ? $t : System.String.concat(" ", (diff !== 0 ? System.String.concat(System.String.concat(System.String.concat(System.String.concat(System.String.concat("Diff: ", System.Double.format(diff, 'G')), "; Expected: "), e), "; Actual: "), a) : "")));
                    Bridge.Test.Assert.true$1(true, m);
                }
            },
            testSinh: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(-3.626860407847019, Bridge.Math.sinh(-2));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(-1.1752011936438014, Bridge.Math.sinh(-1));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(-0.52109530549374738, Bridge.Math.sinh(-0.5));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(0, Bridge.Math.sinh(0));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(0.52109530549374738, Bridge.Math.sinh(0.5));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(1.1752011936438014, Bridge.Math.sinh(1));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(3.626860407847019, Bridge.Math.sinh(2));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(Number.NaN, Bridge.Math.sinh(Number.NaN));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(Number.NEGATIVE_INFINITY, Bridge.Math.sinh(Number.NEGATIVE_INFINITY));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(Number.POSITIVE_INFINITY, Bridge.Math.sinh(Number.POSITIVE_INFINITY));
            },
            testCosh: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(3.7621956910836309, Bridge.Math.cosh(-2));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(1.5430806348152439, Bridge.Math.cosh(-1));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(1.12762596520638, Bridge.Math.cosh(-0.5));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(1, Bridge.Math.cosh(0));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(1.12762596520638, Bridge.Math.cosh(0.5));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(1.5430806348152439, Bridge.Math.cosh(1));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(3.7621956910836309, Bridge.Math.cosh(2));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(Number.NaN, Bridge.Math.cosh(Number.NaN));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(Number.POSITIVE_INFINITY, Bridge.Math.cosh(Number.NEGATIVE_INFINITY));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(Number.POSITIVE_INFINITY, Bridge.Math.cosh(Number.POSITIVE_INFINITY));
            },
            testTanh: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(-0.964027580075817, Bridge.Math.tanh(-2));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(-0.761594155955765, Bridge.Math.tanh(-1));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(-0.46211715726001, Bridge.Math.tanh(-0.5));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(0, Bridge.Math.tanh(0));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(0.46211715726001, Bridge.Math.tanh(0.5));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(0.761594155955765, Bridge.Math.tanh(1));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(0.964027580075817, Bridge.Math.tanh(2));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(Number.NaN, Bridge.Math.tanh(Number.NaN));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(-1, Bridge.Math.tanh(Number.NEGATIVE_INFINITY));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.assertValue(1, Bridge.Math.tanh(Number.POSITIVE_INFINITY));
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1231', {
        statics: {
            testAutoGeneratedStructMethodName: function () {
                var struct1 = new (Demo.Bridge1231.Class1$1.MyStruct(String)).$constructor1(1);
                var struct2 = struct1.$clone();
                struct2.field = 2;

                Bridge.Test.Assert.areEqual(1, struct1.field);
                Bridge.Test.Assert.areEqual(2, struct2.field);
            }
        }
    });

    Bridge.define('Demo.Bridge1231.Class1$1', function (T) { return {

    }; });

    Bridge.definei('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1231.I1$1', function (T) { return {
        $kind: "interface"
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232', {
        statics: {
            testParamsInThisCtorInit: function () {
                var t1 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232.ClassA.$constructor1(["a", "b"]);
                Bridge.Test.Assert.areEqual$1(2, t1.getA().length, "Length ab");
                Bridge.Test.Assert.areEqual$1("a", t1.getA()[0], "First ab");
                Bridge.Test.Assert.areEqual$1("b", t1.getA()[1], "Second ab");
                Bridge.Test.Assert.areEqual$1(1, t1.getNumber(), "Number ab");

                var t2 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232.ClassA.$constructor1(["a", "b", "c"]);
                Bridge.Test.Assert.areEqual$1(3, t2.getA().length, "Length abc");
                Bridge.Test.Assert.areEqual$1("a", t2.getA()[0], "First abc");
                Bridge.Test.Assert.areEqual$1("b", t2.getA()[1], "Second abc");
                Bridge.Test.Assert.areEqual$1("c", t2.getA()[2], "Third abc");
                Bridge.Test.Assert.areEqual$1(1, t2.getNumber(), "Number abc");

                var t3 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232.ClassA.$constructor(3, ["a", "b", "c", "d"]);
                Bridge.Test.Assert.areEqual$1(4, t3.getA().length, "Length abcd");
                Bridge.Test.Assert.areEqual$1("a", t3.getA()[0], "First abcd");
                Bridge.Test.Assert.areEqual$1("b", t3.getA()[1], "Second abcd");
                Bridge.Test.Assert.areEqual$1("c", t3.getA()[2], "Third abcd");
                Bridge.Test.Assert.areEqual$1("d", t3.getA()[3], "Forth abcd");
                Bridge.Test.Assert.areEqual$1(3, t3.getNumber(), "Number abcd");
            },
            testExtendedParamsInThisCtorInit: function () {
                var t1 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232.ClassB.$constructor1("a", ["b"]);
                Bridge.Test.Assert.areEqual$1(1, t1.getA().length, "Length ab");
                Bridge.Test.Assert.areEqual$1("b", t1.getA()[0], "First ab");
                Bridge.Test.Assert.areEqual$1("a", t1.getS(), "S ab");
                Bridge.Test.Assert.areEqual$1(1, t1.getNumber(), "Number ab");

                var t2 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232.ClassB.$constructor2(["a", "b", "c"]);
                Bridge.Test.Assert.areEqual$1(3, t2.getA().length, "Length abc");
                Bridge.Test.Assert.areEqual$1("a", t2.getA()[0], "First abc");
                Bridge.Test.Assert.areEqual$1("b", t2.getA()[1], "Second abc");
                Bridge.Test.Assert.areEqual$1("c", t2.getA()[2], "Third abc");
                Bridge.Test.Assert.areEqual$1(null, t2.getS(), "S abc");
                Bridge.Test.Assert.areEqual$1(1, t2.getNumber(), "Number abc");

                var t3 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232.ClassB.$constructor1("e", ["a", "b", "c", "d"]);
                Bridge.Test.Assert.areEqual$1(4, t3.getA().length, "Length abcd");
                Bridge.Test.Assert.areEqual$1("a", t3.getA()[0], "First abcd");
                Bridge.Test.Assert.areEqual$1("b", t3.getA()[1], "Second abcd");
                Bridge.Test.Assert.areEqual$1("c", t3.getA()[2], "Third abcd");
                Bridge.Test.Assert.areEqual$1("d", t3.getA()[3], "Forth abcd");
                Bridge.Test.Assert.areEqual$1("e", t3.getS(), "S abcd");
                Bridge.Test.Assert.areEqual$1(1, t3.getNumber(), "Number abcd");

                var t4 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232.ClassB.$constructor(7, ["a", "b", "c", "d", "e"]);
                Bridge.Test.Assert.areEqual$1(5, t4.getA().length, "Length abcde");
                Bridge.Test.Assert.areEqual$1("a", t4.getA()[0], "First abcde");
                Bridge.Test.Assert.areEqual$1("b", t4.getA()[1], "Second abcde");
                Bridge.Test.Assert.areEqual$1("c", t4.getA()[2], "Third abcde");
                Bridge.Test.Assert.areEqual$1("d", t4.getA()[3], "Forth abcde");
                Bridge.Test.Assert.areEqual$1("e", t4.getA()[4], "Fifth abcde");
                Bridge.Test.Assert.areEqual$1(null, t4.getS(), "S abcde");
                Bridge.Test.Assert.areEqual$1(7, t4.getNumber(), "Number abcde");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232.ClassA', {
        config: {
            properties: {
                A: null,
                Number: 0
            }
        },
        constructor: function (a, str) {
            if (str === void 0) { str = []; }

            this.$initialize();
            this.setA(str);
            this.setNumber(a);
        },
        $constructor1: function (str) {
            if (str === void 0) { str = []; }

            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232.ClassA.$constructor.call(this, 1, str);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232.ClassB', {
        config: {
            properties: {
                A: null,
                S: null,
                Number: 0
            }
        },
        constructor: function (a, str) {
            if (str === void 0) { str = []; }

            this.$initialize();
            this.setA(str);
            this.setNumber(a);
        },
        $constructor2: function (str) {
            if (str === void 0) { str = []; }

            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232.ClassB.$constructor.call(this, 1, str);
        },
        $constructor1: function (s, str) {
            if (str === void 0) { str = []; }

            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232.ClassB.$constructor2.call(this, str);
            this.setS(s);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1241', {
        statics: {
            testMarkElement: function () {
                var root = document.getElementById("qunit-fixture");

                var markElement1 = document.createElement('mark');
                Bridge.Test.Assert.notNull$1(markElement1, "MarkElement created");
                Bridge.Test.Assert.areEqual(markElement1.tagName, "MARK");

                var p = document.createElement('p');
                root.appendChild(p);

                markElement1.id = "markElement1";
                p.appendChild(markElement1);
                markElement1.innerHTML = "I'm highlighted";

                var m1 = document.getElementById("markElement1");
                Bridge.Test.Assert.areEqual$1("I'm highlighted", m1.innerHTML, "m1.InnerHTML");

                var markElement2 = document.createElement('mark');
                markElement2.id = "markElement2";
                p.appendChild(markElement2);
                markElement2.innerHTML = "Me too";

                var m2 = document.getElementById("markElement2");
                Bridge.Test.Assert.areEqual$1("Me too", m2.innerHTML, "m2.InnerHTML");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1249', {
        statics: {
            testEnumOverflow: function () {
                var $t;
                var v1 = 255;
                var v2 = 255;
                Bridge.Test.Assert.areEqual(0, ((v1 = (v1 + 1) & 255)));
                Bridge.Test.Assert.areEqual("a", ($t=(((v2 = (v2 + 1) & 255))), System.Enum.toString(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1249.b, $t)));
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1249.b', {
        $kind: "enum",
        statics: {
            a: 0,
            b: 1
        },
        $utype: System.Byte
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1253', {
        statics: {
            testDefaultEnumMode: function () {
                var numbers = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1253.Numbers;
                Bridge.Test.Assert.areEqual(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1253.Numbers.ONE, numbers.ONE);
                Bridge.Test.Assert.areEqual(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1253.Numbers.TWO, numbers.TWO);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1253.Numbers', {
        $kind: "enum",
        statics: {
            ONE: 1,
            TWO: 2
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256', {
        statics: {
            reservedWords: null,
            boolean: true,
            is: true,
            config: {
                init: function () {
                    this.reservedWords = ["abstract", "arguments", "as", "boolean", "break", "byte", "case", "catch", "char", "class", "continue", "const", "debugger", "default", "delete", "do", "double", "else", "enum", "eval", "export", "extends", "false", "final", "finally", "float", "for", "function", "goto", "if", "implements", "import", "in", "instanceof", "int", "interface", "let", "long", "namespace", "native", "new", "null", "package", "private", "protected", "public", "return", "short", "static", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "true", "try", "typeof", "use", "var", "void", "volatile", "window", "while", "with", "yield"];
                }
            },
            isReservedWord: function (word) {
                {
                    return System.Linq.Enumerable.from(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256.reservedWords).contains(word);
                }
            },
            testFields: function (o) {
                var $t;
                if (o == null) {
                    Bridge.Test.Assert.fail$1("Object cannot be null");
                    return;
                }

                $t = Bridge.getEnumerator(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256.reservedWords);
                while ($t.moveNext()) {
                    var name = $t.getCurrent();
                    Bridge.Test.Assert.areEqual$1(true, o[name], System.String.concat("Expected true for property ", name));
                }
            },
            testMethods: function (o) {
                var $t;
                if (o == null) {
                    Bridge.Test.Assert.fail$1("Object cannot be null");
                    return;
                }

                $t = Bridge.getEnumerator(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256.reservedWords);
                while ($t.moveNext()) {
                    var name = $t.getCurrent();
                    Bridge.Test.Assert.notNull$1(o[name], System.String.concat(System.String.concat("Member ", name), " exists"));
                }
            },
            let: function () {
                return 5;
            },
            testCaseBooleanIsLet: function () {
                var $let = 1;
                $let = 2;
                var scope = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256;

                Bridge.Test.Assert.true(scope.boolean);
                Bridge.Test.Assert.true(scope.is);
                Bridge.Test.Assert.true(scope.let);
                Bridge.Test.Assert.true(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256.boolean);
                Bridge.Test.Assert.true(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256.is);
                Bridge.Test.Assert.areEqual(2, $let);
                Bridge.Test.Assert.areEqual(5, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256.let());
            },
            testReservedFields: function () {
                var a = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256.ReservedFields();

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256.testFields(a);
            },
            testReservedMethods: function () {
                var a = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256.ReservedMethods();

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256.testMethods(a);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256.ReservedFields', {
        abstract: true,
        arguments: true,
        as: true,
        boolean: true,
        break: true,
        byte: true,
        case: true,
        catch: true,
        char: true,
        class: true,
        continue: true,
        const: true,
        debugger: true,
        default: true,
        delete: true,
        do: true,
        double: true,
        else: true,
        enum: true,
        eval: true,
        export: true,
        extends: true,
        false: true,
        final: true,
        finally: true,
        float: true,
        for: true,
        function: true,
        goto: true,
        if: true,
        implements: true,
        import: true,
        in: true,
        instanceof: true,
        int: true,
        interface: true,
        let: true,
        long: true,
        namespace: true,
        native: true,
        new: true,
        null: true,
        package: true,
        private: true,
        protected: true,
        public: true,
        return: true,
        short: true,
        static: true,
        super: true,
        switch: true,
        synchronized: true,
        this: true,
        throw: true,
        throws: true,
        transient: true,
        true: true,
        try: true,
        typeof: true,
        use: true,
        var: true,
        void: true,
        volatile: true,
        window: true,
        while: true,
        with: true,
        yield: true
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256.ReservedMethods', {
        abstract: function () {
            return 1;
        },
        arguments: function () {
            return 2;
        },
        as: function () {
            return 3;
        },
        boolean: function () {
            return 4;
        },
        break: function () {
            return 5;
        },
        byte: function () {
            return 6;
        },
        case: function () {
            return 7;
        },
        catch: function () {
            return 8;
        },
        char: function () {
            return 9;
        },
        class: function () {
            return 10;
        },
        continue: function () {
            return 11;
        },
        const: function () {
            return 12;
        },
        constructor$1: function () {
            return 13;
        },
        debugger: function () {
            return 14;
        },
        default: function () {
            return 15;
        },
        delete: function () {
            return 16;
        },
        do: function () {
            return 17;
        },
        double: function () {
            return 18;
        },
        else: function () {
            return 19;
        },
        enum: function () {
            return 20;
        },
        eval: function () {
            return 21;
        },
        export: function () {
            return 22;
        },
        extends: function () {
            return 23;
        },
        false: function () {
            return 24;
        },
        final: function () {
            return 25;
        },
        finally: function () {
            return 26;
        },
        float: function () {
            return 27;
        },
        for: function () {
            return 28;
        },
        function: function () {
            return 29;
        },
        goto: function () {
            return 30;
        },
        if: function () {
            return 31;
        },
        implements: function () {
            return 32;
        },
        import: function () {
            return 33;
        },
        in: function () {
            return 34;
        },
        instanceof: function () {
            return 35;
        },
        int: function () {
            return 36;
        },
        interface: function () {
            return 37;
        },
        let: function () {
            return 38;
        },
        long: function () {
            return 39;
        },
        namespace: function () {
            return 40;
        },
        native: function () {
            return 41;
        },
        new: function () {
            return 42;
        },
        null: function () {
            return 43;
        },
        package: function () {
            return 44;
        },
        private: function () {
            return 45;
        },
        protected: function () {
            return 46;
        },
        public: function () {
            return 47;
        },
        return: function () {
            return 48;
        },
        short: function () {
            return 49;
        },
        static: function () {
            return 50;
        },
        super: function () {
            return 51;
        },
        switch: function () {
            return 52;
        },
        synchronized: function () {
            return 53;
        },
        this: function () {
            return 54;
        },
        throw: function () {
            return 55;
        },
        throws: function () {
            return 56;
        },
        transient: function () {
            return 57;
        },
        true: function () {
            return 58;
        },
        try: function () {
            return 59;
        },
        typeof: function () {
            return 60;
        },
        use: function () {
            return 61;
        },
        var: function () {
            return 62;
        },
        void: function () {
            return 63;
        },
        volatile: function () {
            return 64;
        },
        window: function () {
            return 65;
        },
        while: function () {
            return 65;
        },
        with: function () {
            return 66;
        },
        yield: function () {
            return 67;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260', {
        statics: {
            testStringTrim: function () {
                var s1 = "[Click me]";
                Bridge.Test.Assert.areEqual("Click me", System.String.trim(s1, [91, 93]));

                var s2 = "^Click me^";
                Bridge.Test.Assert.areEqual("Click me", System.String.trim(s2, [94]));

                var s3 = "\\Click me\\";
                Bridge.Test.Assert.areEqual("Click me", System.String.trim(s3, [92]));
            },
            testStringTrimStart: function () {
                var s1 = "[Click me]";
                Bridge.Test.Assert.areEqual("Click me]", System.String.trimStart(s1, [91, 93]));

                var s2 = "^Click me^";
                Bridge.Test.Assert.areEqual("Click me^", System.String.trimStart(s2, [94]));

                var s3 = "\\Click me\\";
                Bridge.Test.Assert.areEqual("Click me\\", System.String.trimStart(s3, [92]));
            },
            testStringTrimEnd: function () {
                var s1 = "[Click me]";
                Bridge.Test.Assert.areEqual("[Click me", System.String.trimEnd(s1, [91, 93]));

                var s2 = "^Click me^";
                Bridge.Test.Assert.areEqual("^Click me", System.String.trimEnd(s2, [94]));

                var s3 = "\\Click me\\";
                Bridge.Test.Assert.areEqual("\\Click me", System.String.trimEnd(s3, [92]));
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1264', {
        statics: {
            testDefaultGetHashCodeIsRepeatable: function () {
                var foo = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1264.Foo();
                var h1 = Bridge.getHashCode(foo);
                var h2 = Bridge.getHashCode(foo);

                Bridge.Test.Assert.areEqual(h1, h2);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1264.Bar');

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1264.Foo', {
        _bck: null,
        config: {
            init: function () {
                this._bck = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1264.Bar();
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1266', {
        statics: {
            testArrayToEnumerable: function () {
                var $t;
                var arr = [1, 2, 3];
                var x = System.Array.toEnumerable(System.Linq.Enumerable.from(arr).toArray());
                var index = 0;
                $t = Bridge.getEnumerator(x);
                while ($t.moveNext()) {
                    var i = $t.getCurrent();
                    Bridge.Test.Assert.areEqual(arr[Bridge.identity(index, (index = (index + 1) | 0))], i);
                }
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296', {
        statics: {
            test: function (value) {
                return value;
            },
            testAnyNonExternal: function (value) {
                return value;
            },
            testImplicitOperator: function () {
                var id = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.MessageId.op_Explicit(12);
                Bridge.Test.Assert.areEqual(12, id.getValue());

                var returnedId = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.test(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.MessageId.op_Implicit(id));
                Bridge.Test.Assert.areEqual(12, returnedId);
            },
            testIgnoreCast: function () {
                var id = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.MessageId.op_Explicit(12);
                var returnedId = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.testAnyNonExternal(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.MessageId.op_Implicit(id));
                Bridge.Test.Assert.areEqual(12, returnedId);
            },
            testExternalImplicit: function () {
                var idAsBlah = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.BlahId.op_Implicit(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.MessageStructId.op_Implicit((new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.MessageStructId())));
                Bridge.Test.Assert.areEqual(123, idAsBlah.getValue());

                var idAsIgnoreCastBlah = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.MessageStructId.op_Implicit((new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.MessageStructId()));
                Bridge.Test.Assert.areEqual(123, idAsIgnoreCastBlah);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.AnyNonExternal$2', {
        statics: {
            op_Implicit: function (t) {
                throw new System.InvalidCastException();
            },
            op_Implicit$1: function (t) {
                throw new System.InvalidCastException();
            },
            op_Explicit: function (value) {
                throw new System.InvalidCastException();
            },
            op_Explicit$1: function (value) {
                throw new System.InvalidCastException();
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.BlahId', {
        statics: {
            op_Implicit: function (value) {
                return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.BlahId(value);
            }
        },
        config: {
            properties: {
                Value: 0
            }
        },
        constructor: function (value) {
            this.$initialize();
            this.setValue(value);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.MessageId', {
        $kind: "struct",
        statics: {
            op_Explicit: function (value) {
                return Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.MessageId(), {
                    setValue: value
                } );
            },
            op_Implicit: function (id) {
                return id.getValue();
            },
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.MessageId(); }
        },
        config: {
            properties: {
                Value: 0
            }
        },
        constructor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + -1223576436;
            hash = hash * 23 + (this.Value == null ? 0 : Bridge.getHashCode(this.Value));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.MessageId)) {
                return false;
            }
            return Bridge.equals(this.Value, o.Value);
        },
        $clone: function (to) {
            var s = to || new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.MessageId();
            s.Value = this.Value;
            return s;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.MessageStructId', {
        $kind: "struct",
        statics: {
            op_Implicit: function (id) {
                return 123;
            },
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.MessageStructId(); }
        },
        $clone: function (to) { return this; }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1298', {
        statics: {
            testLongSwitch: function () {
                var $t;
                var a = [System.Int64(1), System.Int64(2), System.Int64.MaxValue];
                $t = Bridge.getEnumerator(a);
                while ($t.moveNext()) {
                    var v = $t.getCurrent();
                    switch (v.toString()) {
                        case "1": 
                            {
                                Bridge.Test.Assert.true(v.equals(System.Int64(1)));
                                break;
                            }
                        case "2": 
                            {
                                Bridge.Test.Assert.true(v.equals(System.Int64(2)));
                                break;
                            }
                        case System.Int64.MaxValue.toString(): 
                            {
                                Bridge.Test.Assert.true(v.equals(System.Int64.MaxValue));
                                break;
                            }
                        default: 
                            {
                                Bridge.Test.Assert.fail();
                                break;
                            }
                    }
                }
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304', {
        statics: {
            output: null,
            clearOutput: function () {
                System.Console.output = "";
            },
            resetOutput: function () {
                System.Console.output = null;
            },
            testWriteFormatString: function () {
                System.Console.log(System.String.format("{0}", 1));
                Bridge.Test.Assert.areEqual("1", System.Console.output);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304.clearOutput();

                System.Console.log(System.String.format("{0} {1}", 1, 2));
                Bridge.Test.Assert.areEqual("1 2", System.Console.output);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304.clearOutput();

                System.Console.log(System.String.format("{0} {1} {2}", 1, 2, 3));
                Bridge.Test.Assert.areEqual("1 2 3", System.Console.output);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304.clearOutput();

                System.Console.log(System.String.format("{0} {1} {2} {3}", 1, 2, 3, 4));
                Bridge.Test.Assert.areEqual("1 2 3 4", System.Console.output);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304.clearOutput();

                System.Console.log(System.String.format("{0} {1} {2} {3} {4}", 1, 2, 3, 4, "5"));
                Bridge.Test.Assert.areEqual("1 2 3 4 5", System.Console.output);
            },
            testWriteLineFormatString: function () {
                System.Console.log(System.String.format("{0}", 1));
                Bridge.Test.Assert.areEqual("1", System.Console.output);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304.clearOutput();

                System.Console.log(System.String.format("{0} {1}", 1, 2));
                Bridge.Test.Assert.areEqual("1 2", System.Console.output);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304.clearOutput();

                System.Console.log(System.String.format("{0} {1} {2}", 1, 2, 3));
                Bridge.Test.Assert.areEqual("1 2 3", System.Console.output);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304.clearOutput();

                System.Console.log(System.String.format("{0} {1} {2} {3}", 1, 2, 3, 4));
                Bridge.Test.Assert.areEqual("1 2 3 4", System.Console.output);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304.clearOutput();

                System.Console.log(System.String.format("{0} {1} {2} {3} {4}", 1, 2, 3, 4, "5"));
                Bridge.Test.Assert.areEqual("1 2 3 4 5", System.Console.output);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305', {
        statics: {
            currentInt: 0,
            currentDataClass: null,
            currentDataStruct: null,
            testAsyncIntReturnWithAssigmentFromResult: function () {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    done, 
                    result, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    done = Bridge.Test.Assert.async();

                                    $task1 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.testIntResult();
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    result = $taskResult1;
                                    Bridge.Test.Assert.areEqual(10, result);
                                    Bridge.Test.Assert.areEqual(10, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.currentInt);

                                    done();
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            },
            testAsyncDataClassReturnWithAssigmentFromResult: function () {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    done, 
                    result, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    done = Bridge.Test.Assert.async();

                                    $task1 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.testClassResult();
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    result = $taskResult1;
                                    Bridge.Test.Assert.notNull(result);
                                    Bridge.Test.Assert.areEqual(11, result.getValue());
                                    Bridge.Test.Assert.notNull(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.currentDataClass);
                                    Bridge.Test.Assert.areEqual(11, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.currentDataClass.getValue());

                                    done();
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            },
            testAsyncDataStructReturnWithAssigmentFromResult: function () {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    done, 
                    result, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    done = Bridge.Test.Assert.async();

                                    $task1 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.testStructResult();
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    result = $taskResult1;
                                    Bridge.Test.Assert.notNull(result);
                                    Bridge.Test.Assert.areEqual(12, result.getValue());
                                    Bridge.Test.Assert.notNull(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.currentDataStruct);
                                    Bridge.Test.Assert.areEqual(12, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.currentDataStruct.getValue());

                                    done();
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            },
            testIntResult: function () {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    $t, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        $task1 = System.Threading.Tasks.Task.fromResult(10);
                                        $step = 1;
                                        $task1.continueWith($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        $tcs.setResult(($t = $taskResult1, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.currentInt = $t, $t));
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            testClassResult: function () {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    $t, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        $task1 = System.Threading.Tasks.Task.fromResult(Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.DataClass(), {
                                            setValue: 11
                                        } ));
                                        $step = 1;
                                        $task1.continueWith($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        $tcs.setResult(($t = $taskResult1, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.currentDataClass = $t, $t));
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            testStructResult: function () {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    $t, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        $task1 = System.Threading.Tasks.Task.fromResult(Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.DataStruct(), {
                                            setValue: 12
                                        } ));
                                        $step = 1;
                                        $task1.continueWith($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        $tcs.setResult(($t = $taskResult1, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.currentDataStruct = $t, $t));
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.DataClass', {
        config: {
            properties: {
                Value: 0
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.DataStruct', {
        config: {
            properties: {
                Value: 0
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1311', {
        statics: {
            testEnumNumberParsing: function () {
                var ec = System.Enum.parse(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1311.SimpleEnum, "C");
                Bridge.Test.Assert.areEqual$1(4, ec, "C");

                var e3 = System.Enum.parse(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1311.SimpleEnum, "3");
                Bridge.Test.Assert.areEqual$1(3, e3, "3");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1311.SimpleEnum', {
        $kind: "enum",
        statics: {
            A: 0,
            B: 3,
            C: 4,
            D: 10
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313', {
        statics: {
            testInterfaceDefaultParameter: function () {
                var value = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313.Class();
                Bridge.Test.Assert.areEqual(1, value.Bridge$ClientTest$Batch3$BridgeIssues$Bridge1313$IInterface$function(1));
            },
            testClassNotDefaultParameter: function () {
                var value = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313.Class();
                Bridge.Test.Assert.areEqual(2, value.function(2));
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313.IInterface', {
        $kind: "interface"
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316', {
        statics: {
            testUseCase: function () {
                var v = 0;
                var s = System.String.concat(v, "");

                Bridge.Test.Assert.areEqual("0", s);
            },
            testStringConcatObject: function () {
                var o1 = 3;
                var s1 = [o1].join('');

                Bridge.Test.Assert.areEqual("3", s1);

                var o2 = null;
                var s2 = [o2].join('');

                Bridge.Test.Assert.areEqual("", s2);
            },
            testStringConcatEnumerableString: function () {
                var e1 = ["1", "2"];
                var s1 = Bridge.toArray(e1).join('');

                Bridge.Test.Assert.areEqual$1("12", s1, "All not null");

                var e2 = ["3", null, "4"];
                var s2 = Bridge.toArray(e2).join('');

                Bridge.Test.Assert.areEqual$1("34", s2, "One is null");

                var e3 = [];
                var s3 = Bridge.toArray(e3).join('');

                Bridge.Test.Assert.areEqual$1("", s3, "Empty");
            },
            testStringConcatEnumerableGeneric: function () {
                var e1 = [1, "2"];
                var s1 = Bridge.toArray(e1).join('');

                Bridge.Test.Assert.areEqual$1("12", s1, "All not null");

                var e2 = ["3", null, 4];
                var s2 = Bridge.toArray(e2).join('');

                Bridge.Test.Assert.areEqual$1("34", s2, "One is null");

                var e3 = [];
                var s3 = Bridge.toArray(e3).join('');

                Bridge.Test.Assert.areEqual$1("", s3, "Empty");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328', {
        statics: {
            testOptionalParamsForClasses: function () {
                var l1 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.ClassLink("url", "test", "some");
                Bridge.Test.Assert.areEqual("some", l1.name);

                var l2 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.ClassLink2("url2", "test2", void 0);
                Bridge.Test.Assert.notNull(l2.name);

                var l3 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.ClassLink3("url3", "test3", void 0);
                Bridge.Test.Assert.areEqual("url3", l3.getUrl());
                Bridge.Test.Assert.areEqual("test3", l3.getText());
                Bridge.Test.Assert.notNull(l3.name.$clone());
                Bridge.Test.Assert.areEqual(0, l3.name.getValue());
            },
            testOptionalParamsForStructs: function () {
                var l1 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.StructLink.$constructor1("url", "test", "some");
                Bridge.Test.Assert.areEqual("some", l1.name);

                var l2 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.StructLink2.$constructor1("url2", "test2", void 0);
                Bridge.Test.Assert.notNull(l2.name);

                var l3 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.StructLink3.$constructor1("url3", "test3", void 0);
                Bridge.Test.Assert.areEqual("url3", l3.getUrl());
                Bridge.Test.Assert.areEqual("test3", l3.getText());
                Bridge.Test.Assert.notNull(l3.name.$clone());
                Bridge.Test.Assert.areEqual(0, l3.name.getValue());
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.ClassLink', {
        name: null,
        constructor: function (url, text, name) {
            if (name === void 0) { name = "some"; }

            this.$initialize();
            this.name = name;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.ClassLink2', {
        config: {
            init: function () {
                this.name = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.Optional2$1(String))();
            }
        },
        constructor: function (url, text, name) {
            if (name === void 0) { name = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.Optional2$1(String))(); }

            this.$initialize();
            this.name = name;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.ClassLink3', {
        config: {
            properties: {
                Url: null,
                Text: null
            },
            init: function () {
                this.name = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.Optional3$1(System.Int32))();
            }
        },
        constructor: function (url, text, name) {
            if (name === void 0) { name = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.Optional3$1(System.Int32))(); }

            this.$initialize();
            this.name = name.$clone();
            this.setUrl(url);
            this.setText(text);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.Optional2$1', function (T) { return {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.Optional2$1(T))(); }
        },
        $clone: function (to) { return this; }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.Optional3$1', function (T) { return {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.Optional3$1(T))(); }
        },
        config: {
            properties: {
                Value: Bridge.getDefaultValue(T)
            }
        },
        $constructor1: function (v) {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.Optional3$1(T).$constructor.call(this);
            this.setValue(v);
        },
        constructor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + -1469106983;
            hash = hash * 23 + (this.Value == null ? 0 : Bridge.getHashCode(this.Value));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.Optional3$1(T))) {
                return false;
            }
            return Bridge.equals(this.Value, o.Value);
        },
        $clone: function (to) {
            var s = to || new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.Optional3$1(T))();
            s.Value = this.Value;
            return s;
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.StructLink', {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.StructLink(); }
        },
        name: null,
        $constructor1: function (url, text, name) {
            if (name === void 0) { name = "some"; }

            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.StructLink.$constructor.call(this);
            this.name = name;
        },
        constructor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 1552938783;
            hash = hash * 23 + (this.name == null ? 0 : Bridge.getHashCode(this.name));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.StructLink)) {
                return false;
            }
            return Bridge.equals(this.name, o.name);
        },
        $clone: function (to) {
            var s = to || new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.StructLink();
            s.name = this.name;
            return s;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.StructLink2', {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.StructLink2(); }
        },
        config: {
            init: function () {
                this.name = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.Optional2$1(String))();
            }
        },
        $constructor1: function (url, text, name) {
            if (name === void 0) { name = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.Optional2$1(String))(); }

            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.StructLink2.$constructor.call(this);
            this.name = name;
        },
        constructor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 344944561;
            hash = hash * 23 + (this.name == null ? 0 : Bridge.getHashCode(this.name));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.StructLink2)) {
                return false;
            }
            return Bridge.equals(this.name, o.name);
        },
        $clone: function (to) {
            var s = to || new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.StructLink2();
            s.name = this.name;
            return s;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.StructLink3', {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.StructLink3(); }
        },
        config: {
            properties: {
                Url: null,
                Text: null
            },
            init: function () {
                this.name = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.Optional3$1(System.Int32))();
            }
        },
        $constructor1: function (url, text, name) {
            if (name === void 0) { name = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.Optional3$1(System.Int32))(); }

            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.StructLink3.$constructor.call(this);
            this.name = name.$clone();
            this.setUrl(url);
            this.setText(text);
        },
        constructor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 344944560;
            hash = hash * 23 + (this.name == null ? 0 : Bridge.getHashCode(this.name));
            hash = hash * 23 + (this.Url == null ? 0 : Bridge.getHashCode(this.Url));
            hash = hash * 23 + (this.Text == null ? 0 : Bridge.getHashCode(this.Text));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.StructLink3)) {
                return false;
            }
            return Bridge.equals(this.name, o.name) && Bridge.equals(this.Url, o.Url) && Bridge.equals(this.Text, o.Text);
        },
        $clone: function (to) {
            var s = to || new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.StructLink3();
            s.name = this.name;
            s.Url = this.Url;
            s.Text = this.Text;
            return s;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339', {
        statics: {
            testAccessingConstantsFromDerivedClass: function () {
                var s = "ing";

                Bridge.Test.Assert.areEqual("String", System.String.concat(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339.FooBase.Bar, s));
                Bridge.Test.Assert.areEqual("String", System.String.concat(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339.FooBase.Bar, s));
                Bridge.Test.Assert.areEqual("String", System.String.concat(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339.FooBase.Bar, s));

                Bridge.Test.Assert.areEqual("Doing", System.String.concat(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339.Foo3.Bar, s));
                Bridge.Test.Assert.areEqual("Doing", System.String.concat(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339.Foo3.Bar, s));
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339.FooBase', {
        statics: {
            Bar: "Str"
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340', {
        statics: {
            testStructGenericMembersDefaultValue: function () {
                var o = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Int32)).$constructor();

                Bridge.Test.Assert.areEqual$1(0, o.getValue1(), "int 1");
                Bridge.Test.Assert.areEqual$1(0, o.value2, "int 2");

                var o1 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Decimal)).$constructor();

                Bridge.Test.Assert.areEqual$1(System.Decimal(0.0), o1.getValue1(), "decimal 1");
                Bridge.Test.Assert.areEqual$1(System.Decimal(0.0), o1.value2, "decimal 2");

                var o2 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Int64)).$constructor();

                Bridge.Test.Assert.areEqual$1(System.Int64(0), o2.getValue1(), "long 1");
                Bridge.Test.Assert.areEqual$1(System.Int64(0), o2.value2, "long 2");

                var o3 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(Boolean)).$constructor();

                Bridge.Test.Assert.areEqual$1(false, o3.getValue1(), "bool 1");
                Bridge.Test.Assert.areEqual$1(false, o3.value2, "bool 2");

                var o4 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(String)).$constructor();

                Bridge.Test.Assert.null$1(o4.getValue1(), "string 1");
                Bridge.Test.Assert.null$1(o4.value2, "string 2");

                var o5 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Int32))).$constructor();

                Bridge.Test.Assert.notNull$1(o5.getValue1().$clone(), "Data<int> 1");
                Bridge.Test.Assert.areEqual$1(0, o5.getValue1().getValue1(), "Data<int>.Value1 1");
                Bridge.Test.Assert.areEqual$1(0, o5.getValue1().value2, "Data<int>.Value1 2");
                Bridge.Test.Assert.notNull$1(o5.value2.$clone(), "Data<int> 2");
                Bridge.Test.Assert.areEqual$1(0, o5.value2.getValue1(), "Data<int>.Value2 1");
                Bridge.Test.Assert.areEqual$1(0, o5.value2.value2, "Data<int>.Value2 2");

                var o6 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass$1(System.Int32))).$constructor();

                Bridge.Test.Assert.null$1(o6.getValue1(), "DataClass<int> 1");
                Bridge.Test.Assert.null$1(o6.value2, "DataClass<int> 2");
            },
            testStructTwoGenericMembersDefaultValue: function () {
                var o = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$2(System.Int32,System.Decimal))();

                Bridge.Test.Assert.areEqual$1(0, o.getValue1(), "int 1");
                Bridge.Test.Assert.areEqual$1(System.Decimal(0.0), o.value2, "decimal 2");

                var o1 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$2(System.Int64,Boolean))();

                Bridge.Test.Assert.areEqual$1(System.Int64(0), o1.getValue1(), "long 1");
                Bridge.Test.Assert.areEqual$1(false, o1.value2, "bool 2");

                var o2 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$2(System.Double,String))();

                Bridge.Test.Assert.areEqual$1(0, o2.getValue1(), "double 1");
                Bridge.Test.Assert.null$1(o2.value2, "string 2");
            },
            testClassGenericMembersDefaultValue: function () {
                var o = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass$1(System.Int32))();

                Bridge.Test.Assert.areEqual$1(0, o.getValue1(), "int 1");
                Bridge.Test.Assert.areEqual$1(0, o.value2, "int 2");

                var o1 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass$1(System.Decimal))();

                Bridge.Test.Assert.areEqual$1(System.Decimal(0.0), o1.getValue1(), "decimal 1");
                Bridge.Test.Assert.areEqual$1(System.Decimal(0.0), o1.value2, "decimal 2");

                var o2 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass$1(System.Int64))();

                Bridge.Test.Assert.areEqual$1(System.Int64(0), o2.getValue1(), "long 1");
                Bridge.Test.Assert.areEqual$1(System.Int64(0), o2.value2, "long 2");

                var o3 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass$1(Boolean))();

                Bridge.Test.Assert.areEqual$1(false, o3.getValue1(), "bool 1");
                Bridge.Test.Assert.areEqual$1(false, o3.value2, "bool 2");

                var o4 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass$1(String))();

                Bridge.Test.Assert.null$1(o4.getValue1(), "string 1");
                Bridge.Test.Assert.null$1(o4.value2, "string 2");

                var o5 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Int32)))();

                Bridge.Test.Assert.notNull$1(o5.getValue1().$clone(), "Data<int> 1");
                Bridge.Test.Assert.areEqual$1(0, o5.getValue1().getValue1(), "Data<int>.Value1 1");
                Bridge.Test.Assert.areEqual$1(0, o5.getValue1().value2, "Data<int>.Value1 2");
                Bridge.Test.Assert.notNull$1(o5.value2.$clone(), "Data<int> 2");
                Bridge.Test.Assert.areEqual$1(0, o5.value2.getValue1(), "Data<int>.Value2 1");
                Bridge.Test.Assert.areEqual$1(0, o5.value2.value2, "Data<int>.Value2 2");

                var o6 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass$1(System.Int32)))();

                Bridge.Test.Assert.null$1(o6.getValue1(), "DataClass<int> 1");
                Bridge.Test.Assert.null$1(o6.value2, "DataClass<int> 2");
            },
            testClassTwoGenericMembersDefaultValue: function () {
                var o = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass$2(System.Int32,System.Decimal))();

                Bridge.Test.Assert.areEqual$1(0, o.getValue1(), "int 1");
                Bridge.Test.Assert.areEqual$1(System.Decimal(0.0), o.value2, "decimal 2");

                var o1 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass$2(System.Int64,Boolean))();

                Bridge.Test.Assert.areEqual$1(System.Int64(0), o1.getValue1(), "long 1");
                Bridge.Test.Assert.areEqual$1(false, o1.value2, "bool 2");

                var o2 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass$2(System.Double,String))();

                Bridge.Test.Assert.areEqual$1(0, o2.getValue1(), "double 1");
                Bridge.Test.Assert.null$1(o2.value2, "string 2");
            },
            testClass1TwoGenericInheritedMembersDefaultValue: function () {
                var o = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass1$2(System.Int32,System.Decimal))();

                Bridge.Test.Assert.areEqual$1(0, o.getValue1(), "int 1");
                Bridge.Test.Assert.areEqual$1(System.Decimal(0.0), o.value2, "decimal 2");

                var o1 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass1$2(System.Int64,Boolean))();

                Bridge.Test.Assert.areEqual$1(System.Int64(0), o1.getValue1(), "long 1");
                Bridge.Test.Assert.areEqual$1(false, o1.value2, "bool 2");

                var o2 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass1$2(System.Double,String))();

                Bridge.Test.Assert.areEqual$1(0, o2.getValue1(), "double 1");
                Bridge.Test.Assert.null$1(o2.value2, "string 2");
            },
            testClass2TwoGenericInheritedMembersDefaultValue: function () {
                var o = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass2$2(System.Decimal,Boolean))();

                Bridge.Test.Assert.areEqual$1(0, o.getValue1(), "int 1");
                Bridge.Test.Assert.null$1(o.value2, "string 2");
            },
            testClass3TwoGenericInheritedMembersDefaultValue: function () {
                var o = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass3$2(System.Int64,System.Decimal))();

                Bridge.Test.Assert.areEqual$1(0, o.getValue1(), "int 1");
                Bridge.Test.Assert.null$1(o.value2, "string 2");
                Bridge.Test.Assert.areEqual$1(System.Int64(0), o.getValue3(), "long 1");
                Bridge.Test.Assert.areEqual$1(System.Decimal(0.0), o.value4, "decimal 4");
            },
            testStructStaticIntArray: function () {
                Bridge.Test.Assert.areEqual(0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Int32).array[0]);
                Bridge.Test.Assert.areEqual(0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Int32).array[1]);
                Bridge.Test.Assert.areEqual(0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Int32).array[2]);

                Bridge.Test.Assert.notNull(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Int32)).array[0].$clone());
                Bridge.Test.Assert.notNull(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Int32)).array[1].$clone());
                Bridge.Test.Assert.notNull(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Int32)).array[2].$clone());

                var o = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Int32)).$constructor();
                Bridge.Test.Assert.areEqual(0, o.returnArray()[0]);
                Bridge.Test.Assert.areEqual(0, o.returnArray()[1]);
                Bridge.Test.Assert.areEqual(0, o.returnArray()[2]);

                var o1 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Int32))).$constructor();
                Bridge.Test.Assert.notNull(o1.returnArray()[0].$clone());
                Bridge.Test.Assert.notNull(o1.returnArray()[1].$clone());
                Bridge.Test.Assert.notNull(o1.returnArray()[2].$clone());
            },
            testStructStaticLongArray: function () {
                Bridge.Test.Assert.areEqual(System.Int64(0), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Int64).array[0]);
                Bridge.Test.Assert.areEqual(System.Int64(0), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Int64).array[1]);
                Bridge.Test.Assert.areEqual(System.Int64(0), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Int64).array[2]);

                Bridge.Test.Assert.notNull(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Int64)).array[0].$clone());
                Bridge.Test.Assert.notNull(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Int64)).array[1].$clone());
                Bridge.Test.Assert.notNull(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Int64)).array[2].$clone());

                var o = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Int64)).$constructor();
                Bridge.Test.Assert.areEqual(System.Int64(0), o.returnArray()[0]);
                Bridge.Test.Assert.areEqual(System.Int64(0), o.returnArray()[1]);
                Bridge.Test.Assert.areEqual(System.Int64(0), o.returnArray()[2]);

                var o1 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Int64))).$constructor();
                Bridge.Test.Assert.notNull(o1.returnArray()[0].$clone());
                Bridge.Test.Assert.notNull(o1.returnArray()[1].$clone());
                Bridge.Test.Assert.notNull(o1.returnArray()[2].$clone());
            },
            testStructStaticStringArray: function () {
                Bridge.Test.Assert.null(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(String).array[0]);
                Bridge.Test.Assert.null(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(String).array[1]);
                Bridge.Test.Assert.null(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(String).array[2]);

                Bridge.Test.Assert.notNull(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(String)).array[0].$clone());
                Bridge.Test.Assert.notNull(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(String)).array[1].$clone());
                Bridge.Test.Assert.notNull(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(String)).array[2].$clone());

                var o = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(String)).$constructor();
                Bridge.Test.Assert.null(o.returnArray()[0]);
                Bridge.Test.Assert.null(o.returnArray()[1]);
                Bridge.Test.Assert.null(o.returnArray()[2]);

                var o1 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(String))).$constructor();
                Bridge.Test.Assert.notNull(o1.returnArray()[0].$clone());
                Bridge.Test.Assert.notNull(o1.returnArray()[1].$clone());
                Bridge.Test.Assert.notNull(o1.returnArray()[2].$clone());
            },
            testStaticClassGenericMembersDefaultValue: function () {
                Bridge.Test.Assert.areEqual$1(0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$1(System.Int32).getValue1(), "int 1");
                Bridge.Test.Assert.areEqual$1(0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$1(System.Int32).value2, "int 2");

                Bridge.Test.Assert.areEqual$1(System.Decimal(0.0), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$1(System.Decimal).getValue1(), "decimal 1");
                Bridge.Test.Assert.areEqual$1(System.Decimal(0.0), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$1(System.Decimal).value2, "decimal 2");

                Bridge.Test.Assert.areEqual$1(System.Int64(0), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$1(System.Int64).getValue1(), "long 1");
                Bridge.Test.Assert.areEqual$1(System.Int64(0), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$1(System.Int64).value2, "long 2");

                Bridge.Test.Assert.areEqual$1(false, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$1(Boolean).getValue1(), "bool 1");
                Bridge.Test.Assert.areEqual$1(false, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$1(Boolean).value2, "bool 2");

                Bridge.Test.Assert.null$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$1(String).getValue1(), "string 1");
                Bridge.Test.Assert.null$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$1(String).value2, "string 2");

                Bridge.Test.Assert.notNull$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Int32)).getValue1().$clone(), "Data<int> 1");
                Bridge.Test.Assert.areEqual$1(0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Int32)).getValue1().getValue1(), "Data<int>.Value1 1");
                Bridge.Test.Assert.areEqual$1(0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Int32)).getValue1().value2, "Data<int>.Value1 2");
                Bridge.Test.Assert.notNull$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Int32)).value2.$clone(), "Data<int> 2");
                Bridge.Test.Assert.areEqual$1(0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Int32)).value2.getValue1(), "Data<int>.Value2 1");
                Bridge.Test.Assert.areEqual$1(0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(System.Int32)).value2.value2, "Data<int>.Value2 2");

                Bridge.Test.Assert.null$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass$1(System.Int32)).getValue1(), "DataClass<int> 1");
                Bridge.Test.Assert.null$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass$1(System.Int32)).value2, "DataClass<int> 2");
            },
            testStaticClassTwoGenericMembersDefaultValue: function () {
                Bridge.Test.Assert.areEqual$1(0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$2(System.Int32,System.Decimal).getValue1(), "int 1");
                Bridge.Test.Assert.areEqual$1(System.Decimal(0.0), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$2(System.Int32,System.Decimal).value2, "decimal 2");

                Bridge.Test.Assert.areEqual$1(System.Int64(0), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$2(System.Int64,Boolean).getValue1(), "long 1");
                Bridge.Test.Assert.areEqual$1(false, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$2(System.Int64,Boolean).value2, "bool 2");

                Bridge.Test.Assert.areEqual$1(0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$2(System.Double,String).getValue1(), "double 1");
                Bridge.Test.Assert.null$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$2(System.Double,String).value2, "string 2");
            },
            testStaticClass1TwoGenericInheritedMembersDefaultValue: function () {
                Bridge.Test.Assert.areEqual$1(0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$2(System.Int32,System.Decimal).getValue1(), "int 1");
                Bridge.Test.Assert.areEqual$1(System.Decimal(0.0), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$2(System.Int32,System.Decimal).value2, "decimal 2");

                Bridge.Test.Assert.areEqual$1(System.Int64(0), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$2(System.Int64,Boolean).getValue1(), "long 1");
                Bridge.Test.Assert.areEqual$1(false, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$2(System.Int64,Boolean).value2, "bool 2");

                Bridge.Test.Assert.areEqual$1(0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$2(System.Double,String).getValue1(), "double 1");
                Bridge.Test.Assert.null$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$2(System.Double,String).value2, "string 2");
            },
            testStaticClass2TwoGenericInheritedMembersDefaultValue: function () {
                Bridge.Test.Assert.areEqual$1(0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$2(System.Int32,String).getValue1(), "int 1");
                Bridge.Test.Assert.null$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$2(System.Int32,String).value2, "string 2");
            },
            testStaticClass3TwoGenericInheritedMembersDefaultValue: function () {
                Bridge.Test.Assert.areEqual$1(0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$2(System.Int32,String).getValue1(), "int 1");
                Bridge.Test.Assert.null$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$2(System.Int32,String).value2, "string 2");
                Bridge.Test.Assert.areEqual$1(System.Int64(0), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass3$2(System.Int64,System.Decimal).getValue3(), "long 1");
                Bridge.Test.Assert.areEqual$1(System.Decimal(0.0), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass3$2(System.Int64,System.Decimal).value4, "decimal 4");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1', function (T) { return {
        $kind: "struct",
        statics: {
            array: null,
            config: {
                init: function () {
                    this.array = System.Array.init(3, function (){
        return Bridge.getDefaultValue(T);
    });
                }
            },
            getDefaultValue: function () { return new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(T))(); }
        },
        value2: Bridge.getDefaultValue(T),
        config: {
            properties: {
                Value1: Bridge.getDefaultValue(T)
            }
        },
        $constructor1: function (v1, v2) {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(T).$constructor.call(this);
            this.setValue1(v1);
            this.value2 = v2;
        },
        constructor: function () {
            this.$initialize();
        },
        returnArray: function () {
            return System.Array.init(3, function (){
                return Bridge.getDefaultValue(T);
            });
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 2620942;
            hash = hash * 23 + (this.value2 == null ? 0 : Bridge.getHashCode(this.value2));
            hash = hash * 23 + (this.Value1 == null ? 0 : Bridge.getHashCode(this.Value1));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(T))) {
                return false;
            }
            return Bridge.equals(this.value2, o.value2) && Bridge.equals(this.Value1, o.Value1);
        },
        $clone: function (to) {
            var s = to || new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$1(T))();
            s.value2 = this.value2;
            s.Value1 = this.Value1;
            return s;
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$2', function (T, K) { return {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$2(T,K))(); }
        },
        value2: Bridge.getDefaultValue(K),
        config: {
            properties: {
                Value1: Bridge.getDefaultValue(T)
            }
        },
        constructor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 2620942;
            hash = hash * 23 + (this.value2 == null ? 0 : Bridge.getHashCode(this.value2));
            hash = hash * 23 + (this.Value1 == null ? 0 : Bridge.getHashCode(this.Value1));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$2(T,K))) {
                return false;
            }
            return Bridge.equals(this.value2, o.value2) && Bridge.equals(this.Value1, o.Value1);
        },
        $clone: function (to) {
            var s = to || new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.Data$2(T,K))();
            s.value2 = this.value2;
            s.Value1 = this.Value1;
            return s;
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass$1', function (T) { return {
        value2: Bridge.getDefaultValue(T),
        config: {
            properties: {
                Value1: Bridge.getDefaultValue(T)
            }
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass$2', function (T, K) { return {
        value2: Bridge.getDefaultValue(K),
        config: {
            properties: {
                Value1: Bridge.getDefaultValue(T)
            }
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$1', function (T) { return {
        statics: {
            value2: Bridge.getDefaultValue(T),
            config: {
                properties: {
                    Value1: Bridge.getDefaultValue(T)
                }
            }
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$2', function (T, K) { return {
        statics: {
            value2: Bridge.getDefaultValue(K),
            config: {
                properties: {
                    Value1: Bridge.getDefaultValue(T)
                }
            }
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341', {
        statics: {
            testPlainObject: function () {
                var o1 = { a: 1 };
                Bridge.Test.Assert.notNull$1(o1, "o1 not null");
                Bridge.Test.Assert.areEqual$1(1, o1.a, "o1.A == 1");

                Bridge.Test.Assert.null$1(o1.getHashCode, "o1 has no getHashCode");
                Bridge.Test.Assert.null$1(o1.toJSON, "o1 has no toJSON");
                Bridge.Test.Assert.null$1(o1.$constructor, "o1 has no $constructor");
                Bridge.Test.Assert.null$1(o1.equals, "o1 has no equals");
                Bridge.Test.Assert.notNull$1(o1.a, "o1 has a");

                var o2 = { a: 1, b: "2" };
                Bridge.Test.Assert.notNull$1(o2, "o2 not null");
                Bridge.Test.Assert.areEqual$1(1, o2.a, "o2.A == 1");
                Bridge.Test.Assert.areEqual$1("2", o2.b, "o2.B == \"2\"");

                var o3 = { a: 1, b: Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA(), {
                    setValue1: 1
                } ) };
                Bridge.Test.Assert.notNull$1(o3, "o3 not null");
                Bridge.Test.Assert.areEqual$1(1, o3.a, "o3.A == 1");
                Bridge.Test.Assert.notNull$1(o3.b.$clone(), "o3.B not null");
                Bridge.Test.Assert.areEqual$1(1, o3.b.getValue1(), "o3.B.Value1 == 1");

                var o4 = { a: 1, b: Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA(), {
                    setValue1: 1
                } ) };
                Bridge.Test.Assert.notNull$1(o4, "o4 not null");
                Bridge.Test.Assert.areEqual$1(1, o4.a, "o4.A == 1");
                Bridge.Test.Assert.notNull$1(o4.b.$clone(), "o4.B not null");
                Bridge.Test.Assert.areEqual$1(1, o4.b.getValue1(), "o4.B.Value1 == 1");

                var o5 = { a: 1, b: Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeClassB(), {
                    setValue1: 1,
                    setValue2: Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA(), {
                        setValue1: 1
                    } )
                } ) };
                Bridge.Test.Assert.notNull$1(o5, "o5 not null");
                Bridge.Test.Assert.areEqual$1(1, o5.a, "o5.A == 1");
                Bridge.Test.Assert.notNull$1(o5.b, "o5.B not null");
                Bridge.Test.Assert.areEqual$1(1, o5.b.getValue1(), "o5.B.Value1 == 1");
                Bridge.Test.Assert.notNull$1(o5.b.getValue2().$clone(), "o5.B.Value2 not null");
                Bridge.Test.Assert.areEqual$1(1, o5.b.getValue2().getValue1(), "o5.B.Value2.Value1 == 1");

                Bridge.Test.Assert.null$1(o5.getHashCode, "o5 has no getHashCode");
                Bridge.Test.Assert.null$1(o5.toJSON, "o5 has no toJSON");
                Bridge.Test.Assert.null$1(o5.$constructor, "o5 has no $constructor");
                Bridge.Test.Assert.null$1(o5.equals, "o5 has no equals");
                Bridge.Test.Assert.notNull$1(o5.a, "o5 has a");
                Bridge.Test.Assert.notNull$1(o5.b, "o5 has b");
                Bridge.Test.Assert.notNull$1(o5.b.getValue1, "o5.B has getValue1");
            },
            testAnonymousTypeCreation: function () {
                var o1 = new $_.$AnonymousType$1(1);
                Bridge.Test.Assert.notNull$1(o1, "o1 not null");
                Bridge.Test.Assert.areEqual$1(1, o1.a, "o1.A == 1");

                Bridge.Test.Assert.notNull$1(o1.getHashCode, "o1 has getHashCode");
                Bridge.Test.Assert.notNull$1(o1.toJSON, "o1 has toJSON");
                Bridge.Test.Assert.notNull$1(o1.$constructor, "o1 has $constructor");
                Bridge.Test.Assert.notNull$1(o1.equals, "o1 has equals");
                Bridge.Test.Assert.notNull$1(o1.getA, "o1 has getA");

                var o2 = new $_.$AnonymousType$2(1, "2");
                Bridge.Test.Assert.notNull$1(o2, "o2 not null");
                Bridge.Test.Assert.areEqual$1(1, o2.a, "o2.A == 1");
                Bridge.Test.Assert.areEqual$1("2", o2.b, "o2.B == \"2\"");

                var o3 = new $_.$AnonymousType$3(1, Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA(), {
                    setValue1: 1
                } ));
                Bridge.Test.Assert.notNull$1(o3, "o3 not null");
                Bridge.Test.Assert.areEqual$1(1, o3.a, "o3.A == 1");
                Bridge.Test.Assert.notNull$1(o3.b.$clone(), "o3.B not null");
                Bridge.Test.Assert.areEqual$1(1, o3.b.getValue1(), "o3.B.Value1 == 1");

                var o4 = new $_.$AnonymousType$3(1, Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA(), {
                    setValue1: 1
                } ));
                Bridge.Test.Assert.notNull$1(o4, "o4 not null");
                Bridge.Test.Assert.areEqual$1(1, o4.a, "o4.A == 1");
                Bridge.Test.Assert.notNull$1(o4.b.$clone(), "o4.B not null");
                Bridge.Test.Assert.areEqual$1(1, o4.b.getValue1(), "o4.B.Value1 == 1");

                var o5 = new $_.$AnonymousType$4(1, Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeClassB(), {
                    setValue1: 1,
                    setValue2: Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA(), {
                        setValue1: 1
                    } )
                } ));
                Bridge.Test.Assert.notNull$1(o5, "o5 not null");
                Bridge.Test.Assert.areEqual$1(1, o5.a, "o5.A == 1");
                Bridge.Test.Assert.notNull$1(o5.b, "o5.B not null");
                Bridge.Test.Assert.areEqual$1(1, o5.b.getValue1(), "o5.B.Value1 == 1");
                Bridge.Test.Assert.notNull$1(o5.b.getValue2().$clone(), "o5.B.Value2 not null");
                Bridge.Test.Assert.areEqual$1(1, o5.b.getValue2().getValue1(), "o5.B.Value2.Value1 == 1");

                Bridge.Test.Assert.notNull$1(o5.getHashCode, "o5 has getHashCode");
                Bridge.Test.Assert.notNull$1(o5.toJSON, "o5 has toJSON");
                Bridge.Test.Assert.notNull$1(o5.$constructor, "o5 has $constructor");
                Bridge.Test.Assert.notNull$1(o5.equals, "o5 has equals");
                Bridge.Test.Assert.notNull$1(o5.getA, "o5 has getA");
                Bridge.Test.Assert.notNull$1(o5.getB, "o5 has getB");
                Bridge.Test.Assert.notNull$1(o5.b.getValue1, "o5.B has getValue1");
            },
            testDiffStructHashCode: function () {
                var s = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA(), {
                    setValue1: 10
                } );
                var s1 = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA1(), {
                    setValue1: 10
                } );

                Bridge.Test.Assert.areNotEqual$1(Bridge.getHashCode(s), Bridge.getHashCode(s1), "Structs of diff types with same fields and values should give diff hash codes");

                var s2 = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA2(), {
                    setValue2: 10
                } );

                Bridge.Test.Assert.areNotEqual$1(Bridge.getHashCode(s), Bridge.getHashCode(s2), "Structs of diff types with same values should give diff hash codes");
            },
            testDiffAnonymousTypesHashCode: function () {
                var s = new $_.$AnonymousType$5(10);
                var s1 = new $_.$AnonymousType$6(10);

                Bridge.Test.Assert.areNotEqual$1(Bridge.getHashCode(s), Bridge.getHashCode(s1), "Same field values should give diff hash codes");
            },
            test: function (values) {
                var o1 = values[0];
                var o2 = values[1];
                var o3 = values[2];
                var o4 = values[3];
                var o5 = values[4];
                var o6 = values[5];

                Bridge.Test.Assert.areEqual$1(Bridge.getHashCode(o1), Bridge.getHashCode(o2), "GetHashCode o1 == o2");
                Bridge.Test.Assert.areNotEqual$1(Bridge.getHashCode(o1), Bridge.getHashCode(o3), "GetHashCode o1 != o3");
                Bridge.Test.Assert.areNotEqual$1(Bridge.getHashCode(o1), Bridge.getHashCode(o4), "GetHashCode o1 != o4");
                Bridge.Test.Assert.areEqual$1(Bridge.getHashCode(o1), Bridge.getHashCode(o5), "GetHashCode o1 == o5");
                Bridge.Test.Assert.areNotEqual$1(Bridge.getHashCode(o1), Bridge.getHashCode(o6), "GetHashCode o1 != o6");

                Bridge.Test.Assert.true$1(Bridge.equals(o1, o2), "Equals o1 == o2");
                Bridge.Test.Assert.false$1(Bridge.equals(o1, o3), "Equals o1 != o3");
                Bridge.Test.Assert.false$1(Bridge.equals(o1, o4), "Equals o1 != o4");
                Bridge.Test.Assert.true$1(Bridge.equals(o1, o5), "Equals o1 == o5");
                Bridge.Test.Assert.false$1(Bridge.equals(o1, o6), "Equals o1 != o6");

                Bridge.Test.Assert.true$1(Bridge.equals(o2, o1), "Equals o2 == o1");
                Bridge.Test.Assert.false$1(Bridge.equals(o3, o1), "Equals o3 != o1");
                Bridge.Test.Assert.false$1(Bridge.equals(o4, o1), "Equals o4 != o1");
                Bridge.Test.Assert.true$1(Bridge.equals(o5, o1), "Equals o5 == o1");
                Bridge.Test.Assert.false$1(Bridge.equals(o6, o1), "Equals o6 != o1");
            },
            test1AnonymousType: function () {
                var o1 = new $_.$AnonymousType$1(1);
                var o2 = new $_.$AnonymousType$1(1);
                var o3 = new $_.$AnonymousType$1(2);
                var o4 = new $_.$AnonymousType$7(1);
                var o5 = o1;
                var o6 = o3;

                var values = [o1, o2, o3, o4, o5, o6];

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.test(values);
            },
            test2AnonymousType: function () {
                var o1 = new $_.$AnonymousType$2(1, "2");
                var o2 = new $_.$AnonymousType$2(1, "2");
                var o3 = new $_.$AnonymousType$2(1, "3");
                var o4 = new $_.$AnonymousType$8(1, "2");
                var o5 = o1;
                var o6 = o3;

                var values = [o1, o2, o3, o4, o5, o6];

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.test(values);
            },
            test3AnonymousType: function () {
                var o1 = new $_.$AnonymousType$9(1, Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeClassA(), {
                    setValue1: 1
                } ));
                var o2 = o1;
                var o3 = new $_.$AnonymousType$9(1, Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeClassA(), {
                    setValue1: 1
                } ));
                var o4 = new $_.$AnonymousType$10(1, Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeClassA(), {
                    setValue1: 1
                } ));
                var o5 = o1;
                var o6 = o3;

                var values = [o1, o2, o3, o4, o5, o6];

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.test(values);
            },
            test4AnonymousType: function () {
                var o1 = new $_.$AnonymousType$3(1, Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA(), {
                    setValue1: 1
                } ));
                var o2 = new $_.$AnonymousType$3(1, Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA(), {
                    setValue1: 1
                } ));
                var o3 = new $_.$AnonymousType$3(1, Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA(), {
                    setValue1: 2
                } ));
                var o4 = new $_.$AnonymousType$11(1, Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA(), {
                    setValue1: 1
                } ));
                var o5 = o1;
                var o6 = o3;

                var values = [o1, o2, o3, o4, o5, o6];

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.test(values);
            },
            test5AnonymousType: function () {
                var o1 = new $_.$AnonymousType$4(1, Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeClassB(), {
                    setValue1: 1,
                    setValue2: Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA(), {
                        setValue1: 1
                    } )
                } ));
                var o2 = o1;
                var o3 = new $_.$AnonymousType$4(1, Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeClassB(), {
                    setValue1: 1,
                    setValue2: Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA(), {
                        setValue1: 1
                    } )
                } ));
                var o4 = new $_.$AnonymousType$12(1, Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeClassB(), {
                    setValue1: 1,
                    setValue2: Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA(), {
                        setValue1: 1
                    } )
                } ));
                var o5 = o1;
                var o6 = o3;

                var values = [o1, o2, o3, o4, o5, o6];

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.test(values);
            }
        }
    });

    Bridge.define("$AnonymousType$1", $_, {
        $kind: "anonymous",
        constructor: function (a) {
            this.a = a;
        },
        getA : function () {
            return this.a;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$1)) {
                return false;
            }
            return Bridge.equals(this.a, o.a);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 1276122535;
            hash = hash * 23 + (this.a == null ? 0 : Bridge.getHashCode(this.a));
            return hash;
        },
        toJSON: function () {
            return {
                a : this.a
            };
        }
    });

    Bridge.define("$AnonymousType$2", $_, {
        $kind: "anonymous",
        constructor: function (a, b) {
            this.a = a;
            this.b = b;
        },
        getA : function () {
            return this.a;
        },
        getB : function () {
            return this.b;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$2)) {
                return false;
            }
            return Bridge.equals(this.a, o.a) && Bridge.equals(this.b, o.b);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 1276122536;
            hash = hash * 23 + (this.a == null ? 0 : Bridge.getHashCode(this.a));
            hash = hash * 23 + (this.b == null ? 0 : Bridge.getHashCode(this.b));
            return hash;
        },
        toJSON: function () {
            return {
                a : this.a,
                b : this.b
            };
        }
    });

    Bridge.define("$AnonymousType$3", $_, {
        $kind: "anonymous",
        constructor: function (a, b) {
            this.a = a;
            this.b = b;
        },
        getA : function () {
            return this.a;
        },
        getB : function () {
            return this.b;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$3)) {
                return false;
            }
            return Bridge.equals(this.a, o.a) && Bridge.equals(this.b, o.b);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 1276122537;
            hash = hash * 23 + (this.a == null ? 0 : Bridge.getHashCode(this.a));
            hash = hash * 23 + (this.b == null ? 0 : Bridge.getHashCode(this.b));
            return hash;
        },
        toJSON: function () {
            return {
                a : this.a,
                b : this.b
            };
        }
    });

    Bridge.define("$AnonymousType$4", $_, {
        $kind: "anonymous",
        constructor: function (a, b) {
            this.a = a;
            this.b = b;
        },
        getA : function () {
            return this.a;
        },
        getB : function () {
            return this.b;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$4)) {
                return false;
            }
            return Bridge.equals(this.a, o.a) && Bridge.equals(this.b, o.b);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 1276122538;
            hash = hash * 23 + (this.a == null ? 0 : Bridge.getHashCode(this.a));
            hash = hash * 23 + (this.b == null ? 0 : Bridge.getHashCode(this.b));
            return hash;
        },
        toJSON: function () {
            return {
                a : this.a,
                b : this.b
            };
        }
    });

    Bridge.define("$AnonymousType$5", $_, {
        $kind: "anonymous",
        constructor: function (value1) {
            this.value1 = value1;
        },
        getValue1 : function () {
            return this.value1;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$5)) {
                return false;
            }
            return Bridge.equals(this.value1, o.value1);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 1276122539;
            hash = hash * 23 + (this.value1 == null ? 0 : Bridge.getHashCode(this.value1));
            return hash;
        },
        toJSON: function () {
            return {
                value1 : this.value1
            };
        }
    });

    Bridge.define("$AnonymousType$6", $_, {
        $kind: "anonymous",
        constructor: function (value2) {
            this.value2 = value2;
        },
        getValue2 : function () {
            return this.value2;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$6)) {
                return false;
            }
            return Bridge.equals(this.value2, o.value2);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 1276122540;
            hash = hash * 23 + (this.value2 == null ? 0 : Bridge.getHashCode(this.value2));
            return hash;
        },
        toJSON: function () {
            return {
                value2 : this.value2
            };
        }
    });

    Bridge.define("$AnonymousType$7", $_, {
        $kind: "anonymous",
        constructor: function (b) {
            this.b = b;
        },
        getB : function () {
            return this.b;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$7)) {
                return false;
            }
            return Bridge.equals(this.b, o.b);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 1276122541;
            hash = hash * 23 + (this.b == null ? 0 : Bridge.getHashCode(this.b));
            return hash;
        },
        toJSON: function () {
            return {
                b : this.b
            };
        }
    });

    Bridge.define("$AnonymousType$8", $_, {
        $kind: "anonymous",
        constructor: function (b, c) {
            this.b = b;
            this.c = c;
        },
        getB : function () {
            return this.b;
        },
        getC : function () {
            return this.c;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$8)) {
                return false;
            }
            return Bridge.equals(this.b, o.b) && Bridge.equals(this.c, o.c);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 1276122526;
            hash = hash * 23 + (this.b == null ? 0 : Bridge.getHashCode(this.b));
            hash = hash * 23 + (this.c == null ? 0 : Bridge.getHashCode(this.c));
            return hash;
        },
        toJSON: function () {
            return {
                b : this.b,
                c : this.c
            };
        }
    });

    Bridge.define("$AnonymousType$9", $_, {
        $kind: "anonymous",
        constructor: function (a, b) {
            this.a = a;
            this.b = b;
        },
        getA : function () {
            return this.a;
        },
        getB : function () {
            return this.b;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$9)) {
                return false;
            }
            return Bridge.equals(this.a, o.a) && Bridge.equals(this.b, o.b);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 1276122527;
            hash = hash * 23 + (this.a == null ? 0 : Bridge.getHashCode(this.a));
            hash = hash * 23 + (this.b == null ? 0 : Bridge.getHashCode(this.b));
            return hash;
        },
        toJSON: function () {
            return {
                a : this.a,
                b : this.b
            };
        }
    });

    Bridge.define("$AnonymousType$10", $_, {
        $kind: "anonymous",
        constructor: function (b, c) {
            this.b = b;
            this.c = c;
        },
        getB : function () {
            return this.b;
        },
        getC : function () {
            return this.c;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$10)) {
                return false;
            }
            return Bridge.equals(this.b, o.b) && Bridge.equals(this.c, o.c);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 784520983;
            hash = hash * 23 + (this.b == null ? 0 : Bridge.getHashCode(this.b));
            hash = hash * 23 + (this.c == null ? 0 : Bridge.getHashCode(this.c));
            return hash;
        },
        toJSON: function () {
            return {
                b : this.b,
                c : this.c
            };
        }
    });

    Bridge.define("$AnonymousType$11", $_, {
        $kind: "anonymous",
        constructor: function (b, a) {
            this.b = b;
            this.a = a;
        },
        getB : function () {
            return this.b;
        },
        getA : function () {
            return this.a;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$11)) {
                return false;
            }
            return Bridge.equals(this.b, o.b) && Bridge.equals(this.a, o.a);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + -1944362372;
            hash = hash * 23 + (this.b == null ? 0 : Bridge.getHashCode(this.b));
            hash = hash * 23 + (this.a == null ? 0 : Bridge.getHashCode(this.a));
            return hash;
        },
        toJSON: function () {
            return {
                b : this.b,
                a : this.a
            };
        }
    });

    Bridge.define("$AnonymousType$12", $_, {
        $kind: "anonymous",
        constructor: function (b, c) {
            this.b = b;
            this.c = c;
        },
        getB : function () {
            return this.b;
        },
        getC : function () {
            return this.c;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$12)) {
                return false;
            }
            return Bridge.equals(this.b, o.b) && Bridge.equals(this.c, o.c);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 1947320397;
            hash = hash * 23 + (this.b == null ? 0 : Bridge.getHashCode(this.b));
            hash = hash * 23 + (this.c == null ? 0 : Bridge.getHashCode(this.c));
            return hash;
        },
        toJSON: function () {
            return {
                b : this.b,
                c : this.c
            };
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeClassA', {
        config: {
            properties: {
                Value1: 0
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeClassB', {
        config: {
            properties: {
                Value1: 0,
                Value2: null
            },
            init: function () {
                this.Value2 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA();
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA', {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA(); }
        },
        config: {
            properties: {
                Value1: 0
            }
        },
        constructor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 593585434;
            hash = hash * 23 + (this.Value1 == null ? 0 : Bridge.getHashCode(this.Value1));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA)) {
                return false;
            }
            return Bridge.equals(this.Value1, o.Value1);
        },
        $clone: function (to) {
            var s = to || new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA();
            s.Value1 = this.Value1;
            return s;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA1', {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA1(); }
        },
        config: {
            properties: {
                Value1: 0
            }
        },
        constructor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + -776575217;
            hash = hash * 23 + (this.Value1 == null ? 0 : Bridge.getHashCode(this.Value1));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA1)) {
                return false;
            }
            return Bridge.equals(this.Value1, o.Value1);
        },
        $clone: function (to) {
            var s = to || new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA1();
            s.Value1 = this.Value1;
            return s;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA2', {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA2(); }
        },
        config: {
            properties: {
                Value2: 0
            }
        },
        constructor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + -1179859744;
            hash = hash * 23 + (this.Value2 == null ? 0 : Bridge.getHashCode(this.Value2));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA2)) {
                return false;
            }
            return Bridge.equals(this.Value2, o.Value2);
        },
        $clone: function (to) {
            var s = to || new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.SomeStructA2();
            s.Value2 = this.Value2;
            return s;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343', {
        statics: {
            testDoubleTemplate: function () {
                var s1 = System.String.format("{0} {1}", 1, 2);
                var s2 = Bridge.getHashCode(System.String.format("{0} {1}", 1, 2));

                Bridge.Test.Assert.areEqual(Bridge.getHashCode(s1), s2);
            },
            testInlineInGetHashCode: function () {
                var s1 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343.M().getHashCode();
                var s2 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343.M().getHashCode();

                Bridge.Test.Assert.areEqual(s1, s2);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343.M', {
        getHashCode: function () {
            return Bridge.getHashCode(System.String.format("{0} {1}", 1, 2));
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1344', {
        statics: {
            testLocalVariableWithNameProto: function () {
                var $__proto__ = "1";
                var r = $__proto__;

                Bridge.Test.Assert.areEqual$1("1", $__proto__, "$__proto__");
                Bridge.Test.Assert.areEqual$1("1", r, "r");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1348', {
        statics: {
            testVoidTypeOf: function () {
                var value = Object;
                Bridge.Test.Assert.areEqual("Function", Bridge.Reflection.getTypeFullName(Bridge.getType(value)));
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1355', {
        statics: {
            testLocalVariableWithNameWindow: function () {
                var $window = "1";
                var r = $window;

                Bridge.Test.Assert.areEqual$1("1", $window, "window");
                Bridge.Test.Assert.areEqual$1("1", r, "r");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374', {
        statics: {
            config: {
                properties: {
                    Value: 0
                }
            },
            staticIntConverter: function (i) {
                return (((Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.getValue() + i) | 0)).toString();
            },
            testConvertAllForIntListStaticMethod: function () {
                var l = [1, 2, 3];

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.setValue(100);

                Bridge.Test.Assert.areDeepEqual(["101", "102", "103"], System.Array.convertAll(l, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.staticIntConverter));
            },
            testConvertAllForIntListInstanceMethod: function () {
                var l = [1, 2, 3];

                var t = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.ScopeContainer(), {
                    setValue: 10
                } );

                Bridge.Test.Assert.areDeepEqual(["11", "12", "13"], System.Array.convertAll(l, Bridge.fn.bind(t, t.instanceIntConverter)));
            },
            testConvertAllForIntListLambda: function () {
                var l = [1, 2, 3];

                Bridge.Test.Assert.areDeepEqual(["1", "2", "3"], System.Array.convertAll(l, $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.f1));
            },
            testConvertAllForNullConverter: function () {
                var l = [1, 2, 3];

                var converter = null;

                Bridge.Test.Assert.throws$7(System.ArgumentNullException, function () {
                    System.Array.convertAll(l, converter);
                }, "Null converter throws exception");
            },
            testConvertAllForNullArray: function () {
                var l = null;

                Bridge.Test.Assert.throws$7(System.ArgumentNullException, function () {
                    System.Array.convertAll(l, $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.f2);
                }, "Null array throws exception");
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374, {
        f1: function (x) {
            return x.toString();
        },
        f2: function (x) {
            return x;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.ScopeContainer', {
        config: {
            properties: {
                Value: 0
            }
        },
        instanceIntConverter: function (i) {
            return (((this.getValue() + i) | 0)).toString();
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378', {
        statics: {
            config: {
                properties: {
                    x: 0
                }
            },
            testAssigmentWithMinusOperator: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.setx(1);

                var a = 4;
                var b = 2;
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.setx(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.getx()-(a - b));

                Bridge.Test.Assert.areEqual(-1, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.getx());
            },
            testAssigmentWithPlusOperator: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.setx(1);

                var a = 4;
                var b = 2;
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.setx(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.getx()+(a + b));

                Bridge.Test.Assert.areEqual(7, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.getx());
            },
            testAssigmentWithOverloadMinusOperator: function () {
                var $int = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.IntWrapper(1);
                $int = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.IntWrapper.op_Subtraction($int, ($int = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.IntWrapper.op_Subtraction($int, new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.IntWrapper(7))));
                Bridge.Test.Assert.areEqual(7, $int.toInt());
            },
            testAssigmentWithOverloadPlusOperator: function () {
                var $int = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.IntWrapper(3);
                $int = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.IntWrapper.op_Addition($int, ($int = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.IntWrapper.op_Addition($int, new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.IntWrapper(1))));
                Bridge.Test.Assert.areEqual(7, $int.toInt());
            },
            testAssigmentWithConditionalPlusOperator: function () {
                var tabSize = 4;
                var tabLength1 = 0;
                var text = "        There is two tabs.";

                for (var i = 0; i < text.length; i = (i + 1) | 0) {
                    tabLength1 = (tabLength1 + ((text.charCodeAt(i) === 9) ? tabSize : 1)) | 0;
                }

                Bridge.Test.Assert.areEqual(26, tabLength1);
            },
            testAssigmentWithConditionalMinusOperator: function () {
                var tabSize = 5;
                var tabLength1 = 1;
                var text = "        There is two tabs.";

                for (var i = 0; i < text.length; i = (i + 1) | 0) {
                    tabLength1 = (tabLength1 - ((text.charCodeAt(i) === 9) ? tabSize : 1)) | 0;
                }

                Bridge.Test.Assert.areEqual(-25, tabLength1);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.IntWrapper', {
        statics: {
            op_Addition: function (a, b) {
                return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.IntWrapper(((a.value + b.value) | 0));
            },
            op_Subtraction: function (a, b) {
                return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.IntWrapper(((a.value - b.value) | 0));
            }
        },
        value: 0,
        constructor: function (value) {
            this.$initialize();
            this.value = value;
        },
        toInt: function () {
            return this.value;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1379', {
        statics: {
            assertNaN: function (value) {
                Bridge.Test.Assert.areEqual("System.Double", Bridge.Reflection.getTypeFullName(Bridge.getType(value)));
            },
            testNanFiniteType: function () {
                var value1 = NaN;
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1379.assertNaN(value1);

                var value2 = Infinity;
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1379.assertNaN(value2);

                var value3 = -Infinity;
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1379.assertNaN(value3);

                var value4 = NaN;
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1379.assertNaN(value4);

                var value5 = Infinity;
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1379.assertNaN(value5);

                var value6 = -Infinity;
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1379.assertNaN(value6);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1385', {
        statics: {
            testIsTypedArray: function () {
                var value = new Uint8Array(3);
                Bridge.Test.Assert.true(Bridge.is(value, Array));
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1389', {
        statics: {
            testParamsIndexer: function () {
                var app = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1389();
                var list = app.getItem(["1", "2", "3", "4", "5"]);

                Bridge.Test.Assert.notNull(list);
                Bridge.Test.Assert.areEqual(5, System.Linq.Enumerable.from(list).count());
                Bridge.Test.Assert.areEqual("1", System.Linq.Enumerable.from(list).first());
                Bridge.Test.Assert.areEqual("5", System.Linq.Enumerable.from(list).last());
            }
        },
        getItem: function (keys) {
            return keys;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391', {
        statics: {
            builder: null,
            getBuilder: function () {
                var $t;
                return Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391.builder || (($t = new System.Text.StringBuilder(), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391.builder = $t, $t));
            },
            testStaticCtorOrder: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391.getBuilder().clear();

                // Now, types with no Ready/Autorun methods intialized on-demand (when first time accessing the type)
                var f = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391.Foo();
                var b = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391.Bar();
                Bridge.Test.Assert.areEqual("FooBar", Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391.builder.toString());
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391.Bar', {
        statics: {
            i: 0,
            config: {
                init: function () {
                    this.i = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391.Bar.init();
                }
            },
            init: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391.getBuilder().append("Bar");
                return 0;
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391.Foo', {
        statics: {
            constructor: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391.getBuilder().append("Foo");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391Ready', {
        statics: {
            testStaticCtorOrderForClassHavingReady: function () {
                // Now, types with no Ready/Autorun methods intialized on-demand (when first time accessing the type)
                // However, classes with [Ready] initializes on Ready
                var r = Bridge.$N1391Result;
                Bridge.Test.Assert.areEqual$1("FooReadyBarReady", r, "Bridge.$N1391Result");
                Bridge.Test.Assert.areEqual$1("FooReadyBarReady", Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391ToRunInitializationOnReady.getBuilder().toString(), "Current builder's state");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391ToRunInitializationOnReady', {
        statics: {
            builder: null,
            config: {
                init: function () {
                    Bridge.ready(this.runMe);
                }
            },
            getBuilder: function () {
                var $t;
                return Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391ToRunInitializationOnReady.builder || (($t = new System.Text.StringBuilder(), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391ToRunInitializationOnReady.builder = $t, $t));
            },
            runMe: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391ToRunInitializationOnReady.getBuilder().clear();

                // Now, types with no Ready/Autorun methods intialized on-demand (when first time accessing the type)
                // However, classes with [Ready] initializes on Ready
                var f = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391ToRunInitializationOnReady.FooReady();
                var b = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391ToRunInitializationOnReady.BarReady();

                var r = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391ToRunInitializationOnReady.getBuilder().toString();
    Bridge.$N1391Result =             r;
            }
        },
        $entryPoint: true
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391ToRunInitializationOnReady.BarReady', {
        statics: {
            i: 0,
            config: {
                init: function () {
                    this.i = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391ToRunInitializationOnReady.BarReady.initReady();
                }
            },
            initReady: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391ToRunInitializationOnReady.getBuilder().append("BarReady");
                return 0;
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391ToRunInitializationOnReady.FooReady', {
        statics: {
            constructor: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391ToRunInitializationOnReady.getBuilder().append("FooReady");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1402', {
        statics: {
            testLongClipping: function () {
                var value = System.Int64.MaxValue;
                Bridge.Test.Assert.areEqual(255, System.Int64.clipu8(value.shr(2)));
                Bridge.Test.Assert.areEqual(-1, System.Int64.clip8(value.shr(2)));
                Bridge.Test.Assert.areEqual(-1, System.Int64.clip16(value.shr(2)));
                Bridge.Test.Assert.areEqual(65535, System.Int64.clipu16(value.shr(2)));
                Bridge.Test.Assert.areEqual(-1, System.Int64.clip32(value.shr(2)));
                Bridge.Test.Assert.areEqual(4294967295, System.Int64.clipu32(value.shr(2)));
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410', {
        statics: {
            setX: function (value) {
            },
            getProp1: function () {
                return 5;
            },
            setProp1: function (value) {
            },
            method1: function () {
                return (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410.setX(5.0), 5.0);
            },
            method2: function (i) {
                return i;
            },
            testSetterOnly: function () {
                Bridge.Test.Assert.areEqual(5, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410.method1());
            },
            testIndexer: function () {
                var $t, $t1;
                var app = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410();
                Bridge.Test.Assert.areEqual(2, (app.setItem(0, 2), 2));
                Bridge.Test.Assert.areEqual(2, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410.method2(($t = (Bridge.Int.div(app.getItem(0), 2)) | 0, app.setItem(0, $t), $t)));
                Bridge.Test.Assert.areEqual(6, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410.method2(($t1 = (app.getItem(0) + 1) | 0, app.setItem(0, $t1), $t1)));
            },
            testAssigmentWithOp: function () {
                var $t, $t1;
                var result = "test_";
                var itm = "item";
                var handler = function () {
                    return (result = System.String.concat(result, itm));
                };

                var str = handler();
                Bridge.Test.Assert.areEqual(str, result);
                Bridge.Test.Assert.areEqual("test_item", str);

                Bridge.Test.Assert.areEqual(2, (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410.setProp1(2), 2));
                Bridge.Test.Assert.areEqual(2, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410.method2(($t = (Bridge.Int.div(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410.getProp1(), 2)) | 0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410.setProp1($t), $t)));
                Bridge.Test.Assert.areEqual(6, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410.method2(($t1 = (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410.getProp1() + 1) | 0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410.setProp1($t1), $t1)));
            }
        },
        getItem: function (v) {
            return 5;
        },
        setItem: function (v, value) {
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411', {
        statics: {
            testTemplateCtorThing: function () {
                var c1 = 'test_string';
                Bridge.Test.Assert.areEqual("test_string", c1);

                var c2 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411.Thing.$constructor(1);
                Bridge.Test.Assert.true(Bridge.hasValue(c2));
            },
            testTemplateCtorDoodad: function () {
                var c1 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411.Doodad.$constructor();
                Bridge.Test.Assert.true(Bridge.hasValue(c1));
                Bridge.Test.Assert.areDeepEqual(3, c1.getData());

                var c2 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411.Doodad.$constructor1(1);
                Bridge.Test.Assert.true(Bridge.hasValue(c2));
                Bridge.Test.Assert.areDeepEqual(4, c2.getData());
            },
            testTemplateCtorGizmo: function () {
                var c1 = 'test_gizmo5';
                Bridge.Test.Assert.areEqual("test_gizmo5", c1);

                var c2 = 'test_gizmo6';
                Bridge.Test.Assert.areEqual("test_gizmo6", c2);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411.Thing', {
        config: {
            properties: {
                Data: 0
            }
        },
        constructor: function (x) {
            this.$initialize();
            // 2
            this.setData(2);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411.Gizmo', {
        config: {
            properties: {
                Data: 0
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1428', {
        statics: {
            testEqOperatorWithNull: function () {
                var c = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1428();

                var test = new (System.Collections.Generic.List$1(Function))();
                test.add(Bridge.fn.bind(c, c.method1));

                Bridge.Test.Assert.areEqual(1, test.getCount());
                test.remove(Bridge.fn.bind(c, c.method1));
                Bridge.Test.Assert.areEqual(0, test.getCount());

                var l1 = Bridge.fn.bind(c, c.method1);
                var l2 = Bridge.fn.bind(c, c.method1);

                Bridge.Test.Assert.true(Bridge.staticEquals(l1, l2));

                l1 = Bridge.fn.bind(c, c.method1);
                l2 = Bridge.fn.bind(c, c.method2);

                Bridge.Test.Assert.false(Bridge.staticEquals(l1, l2));
            }
        },
        method1: function () {
        },
        method2: function () {
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1429', {
        statics: {
            testEqOperatorWithNull: function () {
                Bridge.Test.Assert.true$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1429.op_Equality(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1429(), null), "new Bridge1429() == null");

                var a = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1429();
                var b = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1429();
                var aa = a;

                Bridge.Test.Assert.true$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1429.op_Equality(a, b), "a == b");
                Bridge.Test.Assert.true$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1429.op_Inequality(a, aa), "a != aa");

                var c = null;
                var d = null;

                Bridge.Test.Assert.true$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1429.op_Inequality(c, d), "c != d");
            },
            op_Equality: function (a, b) {
                return true;
            },
            op_Inequality: function (a, b) {
                return true;
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1438', {
        statics: {
            testJSONParse: function () {
                var serialized = JSON.stringify(Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1438.Foo(), {
                    setValue: 100
                } ));

                Bridge.Test.Assert.notNull$1(serialized, " serialized should not be null");

                var result = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1438.Foo(), JSON.parse(serialized));

                Bridge.Test.Assert.notNull$1(result, " result should not be null");
                Bridge.Test.Assert.areEqual$1("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1438.Foo", Bridge.getTypeName(result), "Check result type name");
                Bridge.Test.Assert.areEqual$1(100, result.getValue(), "result.Value = 100");
            },
            testJSONParseAsArray: function () {
                var serialized = JSON.stringify([Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1438.Foo(), {
                    setValue: 101
                } )]);

                Bridge.Test.Assert.notNull$1(serialized, " serialized should not be null");

                var result = Bridge.merge(new Array(), JSON.parse(serialized), null, function(){return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1438.Foo();});

                Bridge.Test.Assert.notNull$1(result, " result should not be null");
                Bridge.Test.Assert.areEqual$1("Array", Bridge.getTypeName(result), "Check result type name");
                Bridge.Test.Assert.areEqual$1(1, result.length, "Check result length");
                Bridge.Test.Assert.notNull$1(result[0], " result[0] should not be null");
                Bridge.Test.Assert.areEqual$1("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1438.Foo", Bridge.getTypeName(result[0]), "Check result[0] type name");
                Bridge.Test.Assert.areEqual$1(101, result[0].getValue(), "result[0].Value = 101");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1438.Foo', {
        config: {
            properties: {
                Value: 0
            }
        },
        someMethod: function () {
            return System.String.concat(System.String.concat(System.String.concat("I'm ", Bridge.Reflection.getTypeFullName(Bridge.getType(this))), " and my value is "), this.getValue());
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448', {
        statics: {
            testPlainForNonAnonymous: function () {
                var a = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448.A(), {
                    data: 5
                } );

                var plainee = Bridge.toPlain(a);

                Bridge.Test.Assert.notNull$1(plainee, "plainee not null");
                Bridge.Test.Assert.notNull$1(plainee.data, "plainee has data");
                Bridge.Test.Assert.areEqual$1(5, plainee.data, "plainee.Data == 5");
                Bridge.Test.Assert.null$1(plainee.getHashCode, "plainee has no getHashCode");
                Bridge.Test.Assert.null$1(plainee.toJSON, "plainee has no toJSON");
                Bridge.Test.Assert.null$1(plainee.$constructor, "plainee has no $constructor");
                Bridge.Test.Assert.null$1(plainee.equals, "plainee has no equals");
            },
            testObjectLiteralProperty: function () {
                var a = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448.A(), {
                    data: 5
                } );

                var l = { v: { data: 5 } };

                var plainee = l.v;

                Bridge.Test.Assert.notNull$1(plainee, "plainee not null");
                Bridge.Test.Assert.notNull$1(plainee.data, "plainee has data");
                Bridge.Test.Assert.areEqual$1(5, plainee.data, "plainee.Data == 5");
                Bridge.Test.Assert.null$1(plainee.getHashCode, "plainee has no getHashCode");
                Bridge.Test.Assert.null$1(plainee.toJSON, "plainee has no toJSON");
                Bridge.Test.Assert.null$1(plainee.$constructor, "plainee has no $constructor");
                Bridge.Test.Assert.null$1(plainee.equals, "plainee has no equals");
            },
            testToObjectLiteralAlias: function () {
                var o1 = { a: 1 };
                Bridge.Test.Assert.notNull$1(o1, "o1 not null");
                Bridge.Test.Assert.areEqual$1(1, o1.a, "o1.A == 1");

                Bridge.Test.Assert.null$1(o1.getHashCode, "o1 has no getHashCode");
                Bridge.Test.Assert.null$1(o1.toJSON, "o1 has no toJSON");
                Bridge.Test.Assert.null$1(o1.$constructor, "o1 has no $constructor");
                Bridge.Test.Assert.null$1(o1.equals, "o1 has no equals");
                Bridge.Test.Assert.notNull$1(o1.a, "o1 has a");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448.A', {
        data: 0,
        doSomething: function () {
            return this.data;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448.Plainer');

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1459', {
        statics: {
            testHtmlElements: function () {
                var root = document.getElementById("qunit-fixture");

                var button = document.createElement('button');
                root.appendChild(button);

                Bridge.Test.Assert.notNull$1(button, "HTMLButtonElement created");

                var n = Bridge.as(button, Node);
                Bridge.Test.Assert.notNull$1(n, "Node");

                var el = Bridge.as(n, Element);
                Bridge.Test.Assert.notNull$1(el, "Element");

                var he = Bridge.as(el, HTMLElement);
                Bridge.Test.Assert.notNull$1(el, "HTMLElement");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1467', {
        statics: {
            testForeachTypeChecking: function () {
                var $t, $t1, $t2, $t3;
                Bridge.Test.Assert.throws$7(System.InvalidCastException, function () {
                    var $t;
                    $t = Bridge.getEnumerator(Bridge.cast(["h"], System.Collections.IEnumerable));
                    while ($t.moveNext()) {
                        var z = Bridge.cast($t.getCurrent(), System.Int32);
                        System.Console.log(z);
                    }
                }, "(IEnumerable)new[] { \"h\" } foreach int");

                Bridge.Test.Assert.throws$7(System.InvalidCastException, function () {
                    var $t;
                    $t = Bridge.getEnumerator(Bridge.cast(["g"], System.Collections.IEnumerable));
                    while ($t.moveNext()) {
                        var y = Bridge.cast($t.getCurrent(), System.Char);
                        System.Console.log(String.fromCharCode(y));
                    }
                }, "(IEnumerable)new[] { \"g\" } foreach char");

                $t = Bridge.getEnumerator(Bridge.cast(["k"], System.Collections.IEnumerable));
                while ($t.moveNext()) {
                    var z1 = Bridge.cast($t.getCurrent(), String);
                    Bridge.Test.Assert.areEqual$1("k", z1, "string z1 in (IEnumerable)new[] { \"k\" } foreach string");
                }

                $t1 = Bridge.getEnumerator(Bridge.cast(["j"], System.Collections.IEnumerable));
                while ($t1.moveNext()) {
                    var z2 = $t1.getCurrent();
                    Bridge.Test.Assert.areEqual$1("j", z2, "string z2 in (IEnumerable)new[] { \"j\" } foreach var");
                }

                $t2 = Bridge.getEnumerator(Bridge.cast([Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1467.SomeClass1(), {
                    setValue: 1
                } )], System.Collections.IEnumerable));
                while ($t2.moveNext()) {
                    var c = Bridge.cast($t2.getCurrent(), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1467.SomeClass1);
                    Bridge.Test.Assert.areEqual$1(1, c.getValue(), "(IEnumerable)new[] { new SomeClass1 { Value = 1} } foreach SomeClass1");
                }

                $t3 = Bridge.getEnumerator(Bridge.cast([Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1467.SomeClass2(), {
                    setValue: 2
                } )], System.Collections.IEnumerable));
                while ($t3.moveNext()) {
                    var d = Bridge.cast($t3.getCurrent(), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1467.SomeClass1);
                    Bridge.Test.Assert.areEqual$1(2, d.getValue(), "(IEnumerable)new[] { new SomeClass2 { Value = 1} } foreach SomeClass1");
                }

                Bridge.Test.Assert.throws$7(System.InvalidCastException, function () {
                    var $t4;
                    $t4 = Bridge.getEnumerator(Bridge.cast([Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1467.AnotherClass(), {
                        setValue: 3
                    } )], System.Collections.IEnumerable));
                    while ($t4.moveNext()) {
                        var d1 = Bridge.cast($t4.getCurrent(), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1467.SomeClass1);
                        System.Console.log(d1);
                    }
                }, "(IEnumerable)new[] { new AnotherClass { Value = 3 } } foreach SomeClass1");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1467.AnotherClass', {
        config: {
            properties: {
                Value: 0
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1467.SomeClass1', {
        config: {
            properties: {
                Value: 0
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1472', {
        statics: {
            time: true,
            getArray: function () {
                var $t;
                return (($t = !Bridge.ClientTest.Batch3.BridgeIssues.Bridge1472.time, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1472.time = $t, $t)) ? [1, 2, 3, 4] : [1, 2, 3];
            }
        },
        testMultiplyThisInTemplate: function () {
            var $t;
            var v = System.Array.init(4, 0);
            ($t=Bridge.ClientTest.Batch3.BridgeIssues.Bridge1472.getArray(), System.Array.copy($t, 0, v, 0, $t.length));
            Bridge.Test.Assert.areEqual(0, v[3]);
        },
        testSimpleMultipleKeyTemplate: function () {
            var sa = ["Hello", "There"];
            var sa2 = System.Array.init(2, null);
            System.Array.copy(sa, 0, sa2, 0, sa.length);
            Bridge.Test.Assert.areEqual(sa.length, sa2.length);
            Bridge.Test.Assert.areEqual(sa[0], sa2[0]);
            Bridge.Test.Assert.areEqual(sa[1], sa2[1]);

            var ia1;
            var dst;
            ia1 = [1, 2, 3, 4];
            dst = System.Array.init(4, 0);
            System.Array.copy(ia1, 0, dst, 0, ia1.length);
            Bridge.Test.Assert.areEqual(ia1.length, dst.length);
            Bridge.Test.Assert.areEqual(ia1[0], dst[0]);
            Bridge.Test.Assert.areEqual(ia1[3], dst[3]);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1476', {
        testEscapedBrackets: function () {
            var r = new System.Text.RegularExpressions.Regex.$constructor("(?<leftSet>(\\[|\\())(?<left>[^,]+)?,(?<right>[^\\]\\)]+)?(?<rightSet>(\\]|\\)))");
            var m = r.match("[0,1)]");

            Bridge.Test.Assert.areEqual(true, m.getSuccess());
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1480', {
        testOverloadUnaryOperator: function () {
            var $int = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1480.IntWrapper(3);
            $int = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1480.IntWrapper.op_Increment($int);
            Bridge.Test.Assert.areEqual$1(4, $int.toInt(), "4");
            Bridge.Test.Assert.areEqual$1(5, ((($int = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1480.IntWrapper.op_Increment($int)))).toInt(), "++4");
            Bridge.Test.Assert.areEqual$1(5, (Bridge.identity($int, ($int = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1480.IntWrapper.op_Increment($int)))).toInt(), "5++");
            Bridge.Test.Assert.areEqual$1(6, ($int).toInt(), "6");
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1480.IntWrapper', {
        statics: {
            op_Increment: function (a) {
                return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1480.IntWrapper(((a.value + 1) | 0));
            }
        },
        value: 0,
        constructor: function (value) {
            this.$initialize();
            this.value = value;
        },
        toInt: function () {
            return this.value;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1485', {
        testConstructorName: function () {
            var t1 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1485.TestName.$constructor();

            Bridge.Test.Assert.areEqual(-1, t1.constructor$1());
            Bridge.Test.Assert.areEqual("Init s", t1.initialize$1("Init s"));
            Bridge.Test.Assert.areEqual(7, t1.initialize(7));

            var t2 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1485.TestName.$constructor1(5);

            Bridge.Test.Assert.areEqual(5, t2.constructor$1());
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1485.TestName', {
        config: {
            properties: {
                Data: 0
            }
        },
        constructor: function () {
            this.$initialize();
            this.setData(-1);
        },
        $constructor1: function (i) {
            this.$initialize();
            this.setData(i);
        },
        constructor$1: function () {
            return this.getData();
        },
        initialize$1: function (s) {
            return s;
        },
        initialize: function (i) {
            return i;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486', {
        statics: {
            x: System.Int64(15),
            y: System.UInt64(27)
        },
        testStaticLongInitialization: function () {
            Bridge.Test.Assert.areEqual$1("Int64", Bridge.Reflection.getTypeName(System.Int64), "long type");

            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486.x = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486.x.inc();
            Bridge.Test.Assert.true$1(System.Int64(16).equals(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486.x), "16");
        },
        testLocalLongInitialization: function () {
            var x = System.Int64(100);
            Bridge.Test.Assert.areEqual$1("Int64", Bridge.Reflection.getTypeName(System.Int64), "long type");

            x = x.inc();
            Bridge.Test.Assert.true$1(System.Int64(101).equals(x), "101");
        },
        testStaticUlongInitialization: function () {
            Bridge.Test.Assert.areEqual$1("UInt64", Bridge.Reflection.getTypeName(System.UInt64), "ulong type");

            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486.y = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486.y.inc();
            Bridge.Test.Assert.true$1(System.UInt64(28).equals(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486.y), "28");
        },
        testLocalUlongInitialization: function () {
            var x = System.UInt64(250);
            Bridge.Test.Assert.areEqual$1("UInt64", Bridge.Reflection.getTypeName(System.UInt64), "ulong type");

            x = x.inc();
            Bridge.Test.Assert.true$1(System.UInt64(251).equals(x), "251");
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1489', {
        testLongEnum: function () {
            var $t, $t1;
            var $enum = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1489.Enum.A;
            Bridge.Test.Assert.areEqual("B", ($t=($enum.add(System.Int64(1))), System.Enum.toString(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1489.Enum, $t)));
            Bridge.Test.Assert.areEqual("B", ($t1=((($enum = $enum.add(System.Int64(1))))), System.Enum.toString(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1489.Enum, $t1)));
        },
        testIntEnum: function () {
            var $t, $t1;
            var $enum = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1489.IntEnum.C;
            Bridge.Test.Assert.areEqual("D", ($t=((($enum + 1) | 0)), System.Enum.toString(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1489.IntEnum, $t)));
            Bridge.Test.Assert.areEqual("D", ($t1=((($enum = ($enum + 1) | 0))), System.Enum.toString(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1489.IntEnum, $t1)));
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1489.Enum', {
        $kind: "enum",
        statics: {
            A: System.Int64(1),
            B: System.Int64(2)
        },
        $utype: System.Int64
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1489.IntEnum', {
        $kind: "enum",
        statics: {
            C: 3,
            D: 4
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1490', {
        testEnumLong: function () {
            var a = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1490.Enum.A;
            Bridge.Test.Assert.true(a.equals(System.Int64(0)));

            var b = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1490.Enum2.A;
            Bridge.Test.Assert.true(b.equals(System.Int64(0)));
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1490.Enum', {
        $kind: "enum",
        statics: {
            A: System.Int64(0)
        },
        $utype: System.Int64
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1490.Enum2', {
        $kind: "enum",
        statics: {
            A: System.Int64(0)
        },
        $utype: System.Int64
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1492', {
        testEnumLong: function () {
            var $enum = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1492.Enum.A;

            Bridge.Test.Assert.true$1($enum.equals(System.Int64(0)), "0");
            Bridge.Test.Assert.true$1($enum.equals(System.Int64(0)), "0L");
            Bridge.Test.Assert.true$1($enum.equals(System.Int64(0)), "0u");
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1492.Enum', {
        $kind: "enum",
        statics: {
            A: System.Int64(0)
        },
        $utype: System.Int64
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1493', {
        testEnumLong: function () {
            var $enum = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1493.Enum.A;
            Bridge.Test.Assert.true$1(System.UInt64(0).equals(System.Int64.clipu64($enum)), "ulong");
            Bridge.Test.Assert.true$1(0 === System.Int64.clipu32($enum), "uint");
            Bridge.Test.Assert.true$1(0 === System.Int64.clip32($enum), "int");
            Bridge.Test.Assert.true$1(0 === System.Int64.clip16($enum), "short");
            Bridge.Test.Assert.true$1(0 === System.Int64.clipu16($enum), "ushort");
            Bridge.Test.Assert.true$1(0 === System.Int64.clipu8($enum), "byte");
            Bridge.Test.Assert.true$1(0 === System.Int64.clip8($enum), "sbyte");
            Bridge.Test.Assert.true$1(0 === System.Int64.toNumber($enum), "float");
            Bridge.Test.Assert.true$1(0 === System.Int64.toNumber($enum), "double");
            Bridge.Test.Assert.true$1(System.Decimal(0).equalsT(System.Decimal($enum, null, System.Int64)), "decimal");
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1493.Enum', {
        $kind: "enum",
        statics: {
            A: System.Int64(0)
        },
        $utype: System.Int64
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1499', {
        testObjectStringCoalesceWorks: function () {
            var $t, $t1, $t2, $t3, $t4, $t5, $t6, $t7, $t8, $t9, $t10, $t11, $t12, $t13, $t14, $t15, $t16;
            var def = 1;
            var app = null;
            var o1 = "";
            var o2 = "test";
            var o3 = null;

            Bridge.Test.Assert.areStrictEqual(1, app || def);
            Bridge.Test.Assert.areStrictEqual("", ($t = o1, $t != null ? $t : o2));
            Bridge.Test.Assert.areStrictEqual("", ($t1 = o1, $t1 != null ? $t1 : "test"));
            Bridge.Test.Assert.areStrictEqual("test", ($t2 = o3, $t2 != null ? $t2 : o2));
            Bridge.Test.Assert.areStrictEqual("test", ($t3 = o3, $t3 != null ? $t3 : "test"));

            var s1 = "";
            var s2 = "test";
            var s3 = null;

            Bridge.Test.Assert.areStrictEqual("", ($t4 = s1, $t4 != null ? $t4 : s2));
            Bridge.Test.Assert.areStrictEqual("", ($t5 = s1, $t5 != null ? $t5 : o2));
            Bridge.Test.Assert.areStrictEqual("", ($t6 = s1, $t6 != null ? $t6 : "test"));
            Bridge.Test.Assert.areStrictEqual("", ($t7 = "", $t7 != null ? $t7 : "test"));
            Bridge.Test.Assert.areStrictEqual("test", ($t8 = s3, $t8 != null ? $t8 : s2));
            Bridge.Test.Assert.areStrictEqual("test", ($t9 = s3, $t9 != null ? $t9 : o2));
            Bridge.Test.Assert.areStrictEqual("test", ($t10 = s3, $t10 != null ? $t10 : "test"));
            Bridge.Test.Assert.areStrictEqual("test", null || "test");

            var i1 = 0;
            var i2 = 1;
            var i3 = null;

            Bridge.Test.Assert.areStrictEqual(0, ($t11 = i1, $t11 != null ? $t11 : i2));
            Bridge.Test.Assert.areStrictEqual(0, ($t12 = i1, $t12 != null ? $t12 : o2));
            Bridge.Test.Assert.areStrictEqual(0, ($t13 = i1, $t13 != null ? $t13 : 1));
            Bridge.Test.Assert.areStrictEqual(1, ($t14 = i3, $t14 != null ? $t14 : i2));
            Bridge.Test.Assert.areStrictEqual("test", ($t15 = i3, $t15 != null ? $t15 : o2));
            Bridge.Test.Assert.areStrictEqual(1, ($t16 = i3, $t16 != null ? $t16 : 1));
            Bridge.Test.Assert.areStrictEqual(1, null || i2);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1501', {
        testPropertyChangedEventArgs: function () {
            var ea1 = new System.ComponentModel.PropertyChangedEventArgs("prop1");
            Bridge.Test.Assert.areEqual$1("prop1", ea1.propertyName, "prop1 PropertyName");
            Bridge.Test.Assert.null$1(ea1.oldValue, "prop1 OldValue");
            Bridge.Test.Assert.null$1(ea1.newValue, "prop1 NewValue");

            var ea2 = new System.ComponentModel.PropertyChangedEventArgs("prop2", 77);
            Bridge.Test.Assert.areEqual$1("prop2", ea2.propertyName, "prop2 PropertyName");
            Bridge.Test.Assert.null$1(ea2.oldValue, "prop2 OldValue");
            Bridge.Test.Assert.areEqual$1(77, ea2.newValue, "prop2 NewValue");

            var ea3 = new System.ComponentModel.PropertyChangedEventArgs("prop3", 120, 270);
            Bridge.Test.Assert.areEqual$1("prop3", ea3.propertyName, "prop3 PropertyName");
            Bridge.Test.Assert.areEqual$1(270, ea3.oldValue, "prop3 OldValue");
            Bridge.Test.Assert.areEqual$1(120, ea3.newValue, "prop3 NewValue");
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1510', {
        statics: {
            function: function (wrap) {
                return wrap.v;
            },
            function2: function (wrap) {
                return wrap.v;
            },
            function3: function (wrap) {
                return wrap.v;
            },
            function4: function (wrap) {
                return wrap.v;
            }
        },
        testPropertyChangedEventArgs: function () {
            var a = 3;
            Bridge.Test.Assert.true(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1510.function(Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1510.IntWrap(), {v:((a * 1000) | 0)})) === 3000);
            Bridge.Test.Assert.true(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1510.function2(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1510.IntWrap2.op_Implicit(((a * 1000) | 0))) === 3000);
            Bridge.Test.Assert.true(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1510.function3(Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1510.IntWrap3(), {v:System.Int64(a * 1000)})).equals(System.Int64(3000)));
            Bridge.Test.Assert.true(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1510.function4(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1510.IntWrap4.op_Implicit(System.Int64(((a * 1000) | 0)))).equals(System.Int64(3000)));
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1510.IntWrap', {
        v: 0,
        constructor: function (value) {
            this.$initialize();
            this.v = value;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1510.IntWrap2', {
        statics: {
            op_Implicit: function (v) {
                return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1510.IntWrap2(v);
            }
        },
        v: 0,
        constructor: function (value) {
            this.$initialize();
            this.v = value;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1510.IntWrap3', {
        v: System.Int64(0),
        constructor: function (value) {
            this.$initialize();
            this.v = value;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1510.IntWrap4', {
        statics: {
            op_Implicit: function (v) {
                return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1510.IntWrap4(v);
            }
        },
        v: System.Int64(0),
        constructor: function (value) {
            this.$initialize();
            this.v = value;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1512', {
        statics: {
            methodParams: function ($arguments) {
                if ($arguments === void 0) { $arguments = []; }
                Bridge.Test.Assert.areEqual$1(0, $arguments.length, "params");
            },
            methodDefault: function ($arguments) {
                if ($arguments === void 0) { $arguments = "3"; }
                Bridge.Test.Assert.areEqual$1("3", $arguments, "default");
            }
        },
        testParametersReservedNames: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1512.methodParams();
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1512.methodDefault();
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1517', {
        testEqualTuples: function () {
            var a1 = { item1: 1 };
            var b1 = { item1: 1 };
            Bridge.Test.Assert.true$1(Bridge.objectEquals(a1, b1), "1 equals");
            Bridge.Test.Assert.true$1(Bridge.getHashCode(a1, false, true) === Bridge.getHashCode(b1, false, true), "1 ==");
            Bridge.Test.Assert.false$1(Bridge.getHashCode(a1, false, true) !== Bridge.getHashCode(b1, false, true), "1 !=");

            var a2 = { item1: 1, item2: 2 };
            var b2 = { item1: 1, item2: 2 };
            Bridge.Test.Assert.true$1(Bridge.objectEquals(a2, b2), "2 equals");
            Bridge.Test.Assert.true$1(Bridge.getHashCode(a2, false, true) === Bridge.getHashCode(b2, false, true), "2 ==");
            Bridge.Test.Assert.false$1(Bridge.getHashCode(a2, false, true) !== Bridge.getHashCode(b2, false, true), "2 !=");
        },
        testInequalTuples: function () {
            var a1 = { item1: 3 };
            var b1 = { item1: 4 };
            Bridge.Test.Assert.false$1(Bridge.objectEquals(a1, b1), "1 equals");
            Bridge.Test.Assert.false$1(Bridge.getHashCode(a1, false, true) === Bridge.getHashCode(b1, false, true), "1 ==");
            Bridge.Test.Assert.true$1(Bridge.getHashCode(a1, false, true) !== Bridge.getHashCode(b1, false, true), "1 !=");

            var a2 = { item1: 1, item2: 7 };
            var b2 = { item1: 1, item2: 8 };
            Bridge.Test.Assert.false$1(Bridge.objectEquals(a2, b2), "2 equals");
            Bridge.Test.Assert.false$1(Bridge.getHashCode(a2, false, true) === Bridge.getHashCode(b2, false, true), "2 ==");
            Bridge.Test.Assert.true$1(Bridge.getHashCode(a2, false, true) !== Bridge.getHashCode(b2, false, true), "2 !=");
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1518', {
        testDefaultConstructorForTypeParameter: function () {
            var x = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1518.TestClass$1(System.Decimal))();
            var y = 0;
            Bridge.Test.Assert.true$1(x.value.equalsT(System.Decimal(y)), "decimal");

            var g = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1518.TestClass$1(System.Guid))();
            Bridge.Test.Assert.true$1(g.value === System.Guid.empty, "Guid");

            var l = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1518.TestClass$1(System.Int64))();
            var z = 0;
            Bridge.Test.Assert.true$1(l.value.equals(System.Int64(z)), "long");
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1518.TestClass$1', function (T) { return {
        value: null,
        config: {
            init: function () {
                this.value = Bridge.createInstance(T);
            }
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1519', {
        testRefOutLocalVars: function () {
            var $t;
            var $boolean = true;
            var dic = new (System.Collections.Generic.Dictionary$2(System.Int32,System.Int32))();
            dic.add(1, 1);
            dic.add(2, 2);

            if ($boolean) {
                var sameVal = { };
                if (dic.tryGetValue(1, sameVal)) {
                    Bridge.Test.Assert.areEqual$1(1, sameVal.v, "Inside if scope");
                }
            }

            var i = 0;
            $t = Bridge.getEnumerator(dic.getValues());
            while ($t.moveNext()) {
                var sameVal1 = $t.getCurrent();
                Bridge.Test.Assert.areEqual$1(((i = (i + 1) | 0)), sameVal1, "Inside foreach scope");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1520', {
        statics: {
            x: System.Decimal(30)
        },
        testStaticDecimalInitialization: function () {
            Bridge.Test.Assert.areEqual$1("Decimal", Bridge.Reflection.getTypeName(System.Decimal), "decimal type");

            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1520.x = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1520.x.inc();
            Bridge.Test.Assert.true$1(System.Decimal(31).equalsT(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1520.x), "31");
        },
        testLocalDecimalInitialization: function () {
            var x = System.Decimal(100);
            Bridge.Test.Assert.areEqual$1("Decimal", Bridge.Reflection.getTypeName(System.Decimal), "decimal type");

            x = x.inc();
            Bridge.Test.Assert.true$1(System.Decimal(101).equalsT(x), "101");
        },
        testUseCase: function () {
            var newVal = System.Decimal(12);
            var item = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1520.CustomList();
            item.value = item.value.add(newVal);

            Bridge.Test.Assert.areEqual$1("Decimal", Bridge.Reflection.getTypeName(System.Decimal), "decimal type");
            Bridge.Test.Assert.true$1(System.Decimal(19).equalsT(item.value), "19");
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1520.CustomList', {
        ranges: null,
        value: System.Decimal(7),
        config: {
            init: function () {
                this.ranges = new (System.Collections.Generic.List$1(System.Int32))();
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1521', {
        testDecimalTrueInConditionalBlock: function () {
            var decimalValue1 = System.Decimal(5.0);
            var decimalValue2 = System.Decimal(10.0);
            var assign = true;
            var test1 = assign ? System.Decimal(0) : decimalValue1;
            var test2 = System.Decimal(!assign ? 0 : 1);
            var test3 = !assign ? System.Decimal(0) : decimalValue1;
            var test4 = assign ? decimalValue2 : decimalValue1;

            Bridge.Test.Assert.true(test1.equalsT(System.Decimal(0)));
            Bridge.Test.Assert.true(test2.equalsT(System.Decimal(1)));
            Bridge.Test.Assert.true(test3.equalsT(System.Decimal(5)));
            Bridge.Test.Assert.true(test4.equalsT(System.Decimal(10)));
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1522', {
        testAssignIntToDecimal: function () {
            var x = System.Decimal(2.0);
            x = System.Decimal(System.Decimal.toInt((x.mul(System.Decimal(60))), System.Int32));
            Bridge.Test.Assert.true(x.gt(System.Decimal(2.0)));
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1523', {
        testAssignDecimalToInt: function () {
            var x = 0;
            var y = System.Decimal(2);
            x = (x + System.Decimal.toInt((System.Nullable.getValue(y).mul(System.Decimal(60.0))), System.Int32)) | 0;
            Bridge.Test.Assert.areEqual(120, x);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1524', {
        testDecimalWithIntOps: function () {
            var x = System.Decimal(3.0);
            var y = 2;
            var z = 1;
            Bridge.Test.Assert.false(System.Decimal(((y - z) | 0)).gt(x));
            var a = System.Decimal((y - z) | 0);
            Bridge.Test.Assert.false(a.gt(System.Decimal(2)));

            var x1 = 1;
            var y1 = System.Nullable.hasValue(x1) ? System.Decimal(((-System.Nullable.getValue(x1)) | 0)) : System.Decimal(0.0);
            Bridge.Test.Assert.false(y1.gt(System.Decimal(1)));
            y1 = System.Nullable.hasValue(x1) ? System.Decimal(((-1 * (System.Nullable.getValue(x1))) | 0)) : System.Decimal(0.0);
            Bridge.Test.Assert.false(y1.gt(System.Decimal(1)));
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1526', {
        statics: {
            getStaticProperty1: function () {
                var levelKey = { };
                System.Int32.tryParse("", levelKey);

                return levelKey.v;
            },
            getStaticProperty2: function () {
                var levelKey = { v : 1 };
                System.Int32.tryParse("", levelKey);

                return levelKey.v;
            },
            testOutInClassMembers: function () {
                Bridge.Test.Assert.areEqual$1(0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1526.staticMethod(), "StaticMethod");
                Bridge.Test.Assert.areEqual$1(0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1526.getStaticProperty1(), "StaticProperty1");
                Bridge.Test.Assert.areEqual$1(0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1526.getStaticProperty2(), "StaticProperty2");
            },
            staticMethod: function () {
                var levelKey = { };
                System.Int32.tryParse("", levelKey);

                return levelKey.v;
            }
        },
        getProperty1: function () {
            var i = { v : 1 };
            this.refMethod(i);

            return i.v;
        },
        getProperty2: function () {
            var i = { v : 2 };
            this.refMethod(i);

            return i.v;
        },
        getItem: function (index) {
            var i = { v : 4 };
            this.refMethod(i);

            return i.v;
        },
        testRefInClassMembers: function () {
            Bridge.Test.Assert.areEqual$1(1, this.getProperty1(), "Property1");
            Bridge.Test.Assert.areEqual$1(2, this.getProperty2(), "Property2");
            Bridge.Test.Assert.areEqual$1(3, this.method(), "Method");
            Bridge.Test.Assert.areEqual$1(4, this.getItem(0), "Indexer");
        },
        method: function () {
            var i = { v : 3 };
            this.refMethod(i);

            return i.v;
            ;
        },
        refMethod: function (i) {
            return i.v;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1527', {
        statics: {
            hello: "test",
            SomeLiteral: "this.hello",
            getValue: function () {
                return 1 + this.hello + 2;
            }
        },
        testScriptAttributeWithReference: function () {
            var h = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1527.hello;
            Bridge.Test.Assert.areEqual("1test2", Bridge.ClientTest.Batch3.BridgeIssues.Bridge1527.getValue());
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1533', {
        testStringNullConcationation: function () {
            var s = null;
            var s1 = "b";
            Bridge.Test.Assert.areEqual$1("b", System.String.concat(s, "b"), "s + \"b\"");

            s1 = System.String.concat(s1, s);
            Bridge.Test.Assert.areEqual$1("b", s1, "s1 += s");

            s = System.String.concat(s, String.fromCharCode(98));
            Bridge.Test.Assert.areEqual$1("b", s, "s += 'b'");

            Bridge.Test.Assert.areEqual$1("b2", System.String.concat(s, "2"), "s + \"2\"");
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1535', {
        testAsyncLambdaAssignmentExpression: function () {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                done, 
                foo, 
                bar, 
                baz, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    for (;;) {
                        $step = System.Array.min([0,1], $step);
                        switch ($step) {
                            case 0: {
                                done = Bridge.Test.Assert.async();

                                foo = null; /// Async method lacks 'await' operators and will run synchronously
                                bar = function () {
                                    var $step = 0,
                                        $jumpFromFinally, 
                                        $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                                        $returnValue, 
                                        $async_e, 
                                        $asyncBody = Bridge.fn.bind(this, function () {
                                            try {
                                                for (;;) {
                                                    $step = System.Array.min([0], $step);
                                                    switch ($step) {
                                                        case 0: {
                                                            $tcs.setResult((foo = 1));
                                                            return;
                                                        }
                                                        default: {
                                                            $tcs.setResult(null);
                                                            return;
                                                        }
                                                    }
                                                }
                                            } catch($async_e1) {
                                                $async_e = System.Exception.create($async_e1);
                                                $tcs.setException($async_e);
                                            }
                                        }, arguments);

                                    $asyncBody();
                                    return $tcs.task;
                                }; /// Async method lacks 'await' operators and will run synchronously
                                $task1 = bar();
                                $step = 1;
                                $task1.continueWith($asyncBody, true);
                                return;
                            }
                            case 1: {
                                $taskResult1 = $task1.getAwaitedResult();
                                baz = $taskResult1;
                                Bridge.Test.Assert.areEqual(1, foo);
                                Bridge.Test.Assert.areEqual(1, baz);

                                done();
                                return;
                            }
                            default: {
                                return;
                            }
                        }
                    }
                }, arguments);

            $asyncBody();
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1536', {
        statics: {
            config: {
                events: {
                    test: null
                },
                properties: {
                    test1$1: 0
                }
            },
            test$1: function () {
                return "method";
            },
            test1: function () {
                return 1;
            }
        },
        testEventNameConflict: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1536.addtest($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1536.f1);

            Bridge.Test.Assert.areEqual("method", Bridge.ClientTest.Batch3.BridgeIssues.Bridge1536.test$1());
            Bridge.Test.Assert.areEqual("event", Bridge.ClientTest.Batch3.BridgeIssues.Bridge1536.test());
        },
        testPropertyNameConflict: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1536.settest1$1(2);

            Bridge.Test.Assert.areEqual(1, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1536.test1());
            Bridge.Test.Assert.areEqual(2, Bridge.ClientTest.Batch3.BridgeIssues.Bridge1536.gettest1$1());
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1536", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1536, {
        f1: function () {
            return "event";
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1538', {
        getItem: function (index) {
            var i = { v : 4 };
            this.outMethod(i);

            return i.v;
        },
        testOutParameterInIndexer: function () {
            Bridge.Test.Assert.areEqual$1(7, this.getItem(0), "Indexer");
        },
        outMethod: function (i) {
            i.v = 7;
            return i.v;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1599', {
        testCustomIEnumerableForStringJoin: function () {
            var intValues = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1599.MyEnumerable$1(System.Int32))([1, 5, 6]);
            Bridge.Test.Assert.areEqual("1, 5, 6", Bridge.toArray(intValues).join(", "));
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1599.MyEnumerable$1', function (T) { return {
        inherits: [System.Collections.Generic.IEnumerable$1(T)],
        _items: null,
        config: {
            alias: [
            "getEnumerator", "System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$getEnumerator"
            ]
        },
        constructor: function (items) {
            this.$initialize();
            this._items = items;
        },
        System$Collections$IEnumerable$getEnumerator: function () {
            return null;
        },
        getEnumerator: function () {
            return Bridge.cast(System.Linq.Enumerable.from(this._items).toList(T).getEnumerator(), System.Collections.Generic.IEnumerator$1(T));
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1641', {
        statics: {
            _Foo: null,
            config: {
                init: function () {
                    this._Foo = new (System.Collections.Generic.Dictionary$2(System.UInt32,System.UInt32))();
                }
            },
            test: function () {
                var $step = 0,
                    $task1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    bar, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        $task1 = System.Threading.Tasks.Task.delay(1);
                                        $step = 1;
                                        $task1.continueWith($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $task1.getAwaitedResult();
                                        bar = { };
                                        Bridge.ClientTest.Batch3.BridgeIssues.Bridge1641._Foo.tryGetValue(1, bar);

                                        $tcs.setResult(bar.v);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            }
        },
        testOutInAsync: function () {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                done, 
                result, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    for (;;) {
                        $step = System.Array.min([0,1], $step);
                        switch ($step) {
                            case 0: {
                                done = Bridge.Test.Assert.async();
                                $task1 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1641.test();
                                $step = 1;
                                $task1.continueWith($asyncBody, true);
                                return;
                            }
                            case 1: {
                                $taskResult1 = $task1.getAwaitedResult();
                                result = $taskResult1;
                                Bridge.Test.Assert.areEqual(0, result);
                                done();
                                return;
                            }
                            default: {
                                return;
                            }
                        }
                    }
                }, arguments);

            $asyncBody();
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1653', {
        testLiftedFunctionsWithGenericInvocation: function () {
            var scope = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1653.Table$2;
            Bridge.Test.Assert.notNull$1(scope.f1, "scope.f1 should exists");
            Bridge.Test.Assert.null$1(scope.f2, "scope.f2 should be null");
            Bridge.Test.Assert.areEqual$1(scope.f1(1), "1_v4", "scope.f1(1) should be 1_v4");
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1653.Table$2', function (U, V) { return {
        test: function () {
            var values = [Bridge.getDefaultValue(U)];

            var v1 = System.Linq.Enumerable.from(values).select(function (value) {
                return System.String.concat(System.String.concat(value, " "), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1653_Extensions.getSomething(U, value));
            });
            var v2 = System.Linq.Enumerable.from(values).select(function (value) {
                return System.String.concat(System.String.concat(value, " "), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1653_Extensions.getSomething(U, value));
            });
            var v3 = System.Linq.Enumerable.from(values).select(function (value) {
                return System.String.concat(System.String.concat(value, " "), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1653_Extensions.getSomething1(U, value));
            });
            var v4 = System.Linq.Enumerable.from(values).select($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1653.Table$2.f1);
        }
    }; });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1653.Table$2", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1653.Table$2, {
        f1: function (value) {
            return System.String.concat(System.String.concat(value, "_"), Bridge.ClientTest.Batch3.BridgeIssues.Bridge1653_Extensions.getSomething1(String, "v4"));
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1653_Extensions', {
        statics: {
            getSomething1: function (T, value) {
                return value.toString();
            },
            getSomething: function (T, value) {
                return value.toString();
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1684', {
        testStaticInitializationForGenericClass: function () {
            var setOfMessageEditState2 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1684.Set$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1684.MessageEditState2).getEmpty().add(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1684.MessageEditState2());
            Bridge.Test.Assert.areEqual(1, setOfMessageEditState2.getCount());

            var setOfMessageEditState = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1684.Set$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1684.MessageEditState).getEmpty().add(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1684.MessageEditState());
            Bridge.Test.Assert.areEqual(1, setOfMessageEditState.getCount());
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1684.MessageEditState');

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1684.MessageEditState2');

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1684.Set$1', function (T) { return {
        statics: {
            _empty: null,
            config: {
                init: function () {
                    this._empty = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1684.Set$1(T))();
                }
            },
            getEmpty: function () {
                return Bridge.ClientTest.Batch3.BridgeIssues.Bridge1684.Set$1(T)._empty;
            }
        },
        constructor: function () {
            this.$initialize();
        },
        getCount: function () {
            return 1;
        },
        add: function (value) {
            return this;
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1684.PureComponent$1', function (T) { return {

    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge169', {
        statics: {
            number: 0,
            m1: function () {
                ($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge169.f1)();
            },
            m2: function () {
                ($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge169.f2)();
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge169", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge169, {
        f1: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge169.number = 1;
        },
        f2: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge169.number = 2;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1698', {
        testReflectionForNativeTypes: function () {
            var t = Bridge.Reflection.getMembers(console, 8, 284, "WriteLine", [String]);

            Bridge.Test.Assert.notNull$1(t, "Not null");
            Bridge.Test.Assert.true$1((t.accessibility === 2), "IsPublic");
            Bridge.Test.Assert.false$1((t.accessibility === 1), "IsPrivate");
            Bridge.Test.Assert.false$1((t.type === 1), "IsConstructor");
            Bridge.Test.Assert.true$1((t.isStatic || false), "IsStatic");
            Bridge.Test.Assert.areEqual$1("WriteLine", t.name, "Name");
            Bridge.Test.Assert.notNull$1(t.returnType, "ReturnType not null");
            Bridge.Test.Assert.areEqual$1("Object", Bridge.Reflection.getTypeName(t.returnType), "ReturnType");

            var parameters = (t.paramsInfo || []);
            Bridge.Test.Assert.notNull$1(parameters, "parameters not null");
            Bridge.Test.Assert.areEqual$1(1, parameters.length, "parameters length");
            Bridge.Test.Assert.areEqual$1("value", parameters[0].name, "parameters[0] Name");
            Bridge.Test.Assert.false$1((parameters[0].isOut || false), "parameters[0] IsOut");
            Bridge.Test.Assert.false$1((parameters[0].isOptional || false), "parameters[0] IsOptional");

            try {
                Bridge.Reflection.midel(t, null).apply(null, ["Hello"]);
                Bridge.Test.Assert.true$1(true, "Method executed");
            }
            catch (ex) {
                ex = System.Exception.create(ex);
                Bridge.Test.Assert.fail$1(ex.toString());
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1700', {
        testULongAsIndex: function () {
            var array = System.Array.create(0, null, 2, 2);
            var n = 1;
            array.set([System.Int64.toNumber(System.Int64(n).mod(System.Int64(1))), System.Int64.toNumber(System.Int64(n).div(System.Int64(1)))], 7);
            n = 4;
            array.set([System.Int64.toNumber(System.Int64(n).mod(System.Int64(3))), System.Int64.toNumber(System.Int64(n).div(System.Int64(4)))], 8);

            Bridge.Test.Assert.areEqual(7, array.get([0, 1]));
            Bridge.Test.Assert.areEqual(8, array.get([1, 1]));
        },
        testLongAsIndex: function () {
            var array = System.Array.create(0, null, 2, 2);
            var n = 1;
            array.set([System.Int64.toNumber(System.Int64(n).mod(System.Int64(1))), System.Int64.toNumber(System.Int64(n).div(System.Int64(1)))], 3);
            n = 4;
            array.set([System.Int64.toNumber(System.Int64(n).mod(System.Int64(3))), System.Int64.toNumber(System.Int64(n).div(System.Int64(4)))], 5);

            Bridge.Test.Assert.areEqual(3, array.get([0, 1]));
            Bridge.Test.Assert.areEqual(5, array.get([1, 1]));
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1702', {
        testFieldWithItemName: function () {
            var $t;
            var set = Bridge.ClientTest.Batch3.BridgeIssues.Bridge1702.Set$1(System.Int32).getEmpty();
            set = set.insert(3);
            set = set.insert(2);
            set = set.insert(1);

            var idx = 0;
            $t = Bridge.getEnumerator(set);
            while ($t.moveNext()) {
                var i = $t.getCurrent();
                Bridge.Test.Assert.areEqual(((idx = (idx + 1) | 0)), i);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1702.Set$1', function (T) { return {
        inherits: [System.Collections.Generic.IEnumerable$1(T)],
        statics: {
            _empty: null,
            config: {
                init: function () {
                    this._empty = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1702.Set$1(T))(null);
                }
            },
            getEmpty: function () {
                return Bridge.ClientTest.Batch3.BridgeIssues.Bridge1702.Set$1(T)._empty;
            }
        },
        _headIfAny: null,
        config: {
            alias: [
            "getEnumerator", "System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$getEnumerator"
            ]
        },
        constructor: function (headIfAny) {
            this.$initialize();
            this._headIfAny = headIfAny;
        },
        insert: function (item) {
            if (item == null) {
                throw new System.ArgumentNullException("item");
            }

            if (this._headIfAny == null) {
                return new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1702.Set$1(T))(Bridge.merge(new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1702.Set$1.Node(T))(), {
                    count: 1,
                    item: item,
                    nextIfAny: null
                } ));
            }

            return new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1702.Set$1(T))(Bridge.merge(new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge1702.Set$1.Node(T))(), {
                count: ((this._headIfAny.count + 1) | 0),
                item: item,
                nextIfAny: this._headIfAny
            } ));
        },
        getEnumerator: function () {
            var $yield = [];
            var node = this._headIfAny;
            while (node != null) {
                $yield.push(node.item);
                node = node.nextIfAny;
            }
            return System.Array.toEnumerator($yield, T);
        },
        System$Collections$IEnumerable$getEnumerator: function () {
            return this.getEnumerator();
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1702.Set$1.Node', function (T) { return {
        count: 0,
        item: Bridge.getDefaultValue(T),
        nextIfAny: null
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1704', {
        testBaseMethodWithOptionalParams: function () {
            var d = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1704.Derived();
            Bridge.Test.Assert.areEqual(1, d.show());
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1704.Base', {
        show: function (i) {
            if (i === void 0) { i = 1; }
            return i;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1709', {
        makeArguments: function (T, args) {
            if (args === void 0) { args = []; }
            return args.length;
        },
        testGenericMethodWithoutTypeArgument: function () {
            var callback = null;
            var $arguments = this.makeArguments(Object, [null, callback]);
            Bridge.Test.Assert.areEqual(2, $arguments);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712', {
        statics: {
            config: {
                properties: {
                    Buffer: null
                }
            }
        },
        testCollectionAddWithExtensionMethod: function () {
            var $t;
            var collection2 = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712.f1(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712.Collection());

            var i = 4;
            $t = Bridge.getEnumerator(collection2);
            while ($t.moveNext()) {
                var item = Bridge.cast($t.getCurrent(), System.Int32);
                Bridge.Test.Assert.areEqual(Bridge.identity(i, (i = (i + 1) | 0)), item);
            }
        },
        testCollectionWithAdd_BeforeCS6: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712.setBuffer("");
            var collection = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712.f2(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712.MSDNCollectionWithAdd());

            Bridge.Test.Assert.areEqual("123", Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712.getBuffer());
        },
        testCollectionWithAdd_CS6: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712.setBuffer("");
            var collection = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712.f3(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712.MSDNCollectionWithoutAdd());

            Bridge.Test.Assert.areEqual("456", Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712.getBuffer());
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712, {
        f1: function (_o20) {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712Extensions.add(_o20, 4);
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712Extensions.add(_o20, 5);
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712Extensions.add(_o20, 6);
            return _o20;
        },
        f2: function (_o21) {
            _o21.add(System.Int32, 1);
            _o21.add(System.Int32, 2);
            _o21.add(System.Int32, 3);
            return _o21;
        },
        f3: function (_o22) {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712MSDNExtensions.add(System.Int32, _o22, 4);
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712MSDNExtensions.add(System.Int32, _o22, 5);
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712MSDNExtensions.add(System.Int32, _o22, 6);
            return _o22;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712.Collection', {
        inherits: [System.Collections.IEnumerable],
        list: null,
        config: {
            alias: [
            "getEnumerator", "System$Collections$IEnumerable$getEnumerator"
            ],
            init: function () {
                this.list = new (System.Collections.Generic.List$1(System.Int32))();
            }
        },
        getEnumerator: function () {
            return this.list.getEnumerator();
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712.MSDNCollectionWithAdd', {
        inherits: [System.Collections.IEnumerable],
        config: {
            alias: [
            "getEnumerator", "System$Collections$IEnumerable$getEnumerator"
            ]
        },
        add: function (T, item) {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712.setBuffer(System.String.concat(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712.getBuffer(), item));
        },
        getEnumerator: function () {
            throw new System.InvalidOperationException();
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712.MSDNCollectionWithoutAdd', {
        inherits: [System.Collections.IEnumerable],
        config: {
            alias: [
            "getEnumerator", "System$Collections$IEnumerable$getEnumerator"
            ]
        },
        getEnumerator: function () {
            throw new System.NotImplementedException();
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712Extensions', {
        statics: {
            add: function (collection, item) {
                collection.list.add(item);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712MSDNExtensions', {
        statics: {
            add: function (T, collection, item) {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712.setBuffer(System.String.concat(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712.getBuffer(), item));
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713', {
        overloaded$1: function (action) {
            return 1;
        },
        overloaded: function ($function) {
            return 2;
        },
        doSomething1: function (i) {
            return 0;
        },
        doSomething2: function () {
            return 0;
        },
        testOverloadResolution: function () {
            Bridge.Test.Assert.areEqual(1, this.overloaded$1(Bridge.fn.bind(this, this.doSomething1)));
            Bridge.Test.Assert.areEqual(2, this.overloaded(Bridge.fn.bind(this, this.doSomething2)));
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN', {
        statics: {
            buffer: null,
            overloaded: function (action) {
                Bridge.Test.Assert.fail$1("overload with action called");
            },
            overloaded$1: function ($function) {
                Bridge.Test.Assert.true$1(true, "overload with Func<int> called");
            },
            doSomething: function () {
                Bridge.Test.Assert.fail$1("DoSomething should not be called");
                return 0;
            },
            foo$2: function (func) {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.buffer = System.String.concat(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.buffer, "Func<long>");
            },
            foo$4: function (func) {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.buffer = System.String.concat(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.buffer, "Func<ulong>");
            },
            foo$1: function (func) {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.buffer = System.String.concat(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.buffer, "Func<int>");
            },
            foo: function (func) {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.buffer = System.String.concat(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.buffer, "Func<decimal>");
            },
            foo$3: function (func) {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.buffer = System.String.concat(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.buffer, "Func<string>");
            },
            testOverloadResolutionMSDN2: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.buffer = "";
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.foo$2($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.f2);
                Bridge.Test.Assert.areEqual$1("Func<long>", Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.buffer, "Should call Func<long>");

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.buffer = "";
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.foo$2($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.f4);
                Bridge.Test.Assert.areEqual$1("Func<long>", Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.buffer, "Should call Func<long>");

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.buffer = "";
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.foo$4($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.f6);
                Bridge.Test.Assert.areEqual$1("Func<ulong>", Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.buffer, "Should call Func<ulong>");

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.buffer = "";
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.foo$1($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.f8);
                Bridge.Test.Assert.areEqual$1("Func<int>", Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.buffer, "Should call Func<int>");

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.buffer = "";
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.foo($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.f10);
                Bridge.Test.Assert.areEqual$1("Func<decimal>", Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.buffer, "Should call Func<decimal>");

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.buffer = "";
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.foo$3($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.f12);
                Bridge.Test.Assert.areEqual$1("Func<string>", Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.buffer, "Should call Func<string>");
            }
        },
        testOverloadResolutionMSDN1: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.overloaded$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.doSomething);
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN, {
        f1: function () {
            return System.Int64(9);
        },
        f2: function () {
            return $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.f1;
        },
        f3: function () {
            return System.Int64(5);
        },
        f4: function () {
            return $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.f3;
        },
        f5: function () {
            return System.UInt64(3);
        },
        f6: function () {
            return $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.f5;
        },
        f7: function () {
            return 7;
        },
        f8: function () {
            return $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.f7;
        },
        f9: function () {
            return System.Decimal(11.0);
        },
        f10: function () {
            return $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.f9;
        },
        f11: function () {
            return "15";
        },
        f12: function () {
            return $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.f11;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1715', {
        testCollectionInitializerWithAdd: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1715.MyList.buffer = "";

            var list = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1715.f1(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge1715.MyList());

            Bridge.Test.Assert.areEqual("Add(1);Add(2, 3);", Bridge.ClientTest.Batch3.BridgeIssues.Bridge1715.MyList.buffer);
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1715", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1715, {
        f1: function (_o19) {
            _o19.add(1);
            _o19.add$1(2, 3);
            return _o19;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1715.MyList', {
        inherits: [System.Collections.IEnumerable],
        statics: {
            buffer: null
        },
        config: {
            alias: [
            "getEnumerator", "System$Collections$IEnumerable$getEnumerator"
            ]
        },
        constructor: function () {
            this.$initialize();
        },
        add: function (i) {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1715.MyList.buffer = System.String.concat(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1715.MyList.buffer, (System.String.concat(System.String.concat("Add(", i), ");")));
        },
        add$1: function (i, j) {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1715.MyList.buffer = System.String.concat(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1715.MyList.buffer, (System.String.concat(System.String.concat(System.String.concat(System.String.concat("Add(", i), ", "), j), ");")));
        },
        getEnumerator: function () {
            throw new System.Exception();
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge240A', {
        config: {
            properties: {
                Data: 0
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge266A', {
        statics: {
            test: function () {
                // Nothing gets written for Class1 in the output JavaScript due to the "new object()" argument.
                // If null is used instead (as commented-out) then it works as expected.
                // No compile error.
                return Bridge.ClientTest.Batch3.BridgeIssues.Bridge266B.test("test", {  });
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge266B', {
        statics: {
            test: function (arg1, arg2) {
                return arg2;
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge272', {
        statics: {
            test: function (i) {
                return i;
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge272.MyEnum', {
        $kind: "enum",
        statics: {
            Abc: 1,
            Def: 2,
            Ghi: 3
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge277', {
        $kind: "enum",
        statics: {
            Int: 0
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge294', {
        name: null,
        constructor: function (name) {
            this.$initialize();
            this.name = name;
        },
        getName: function () {
            return this.name;
        },
        getNameThroughGeneric: function (T) {
            return this.name;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.IBridge304', {
        $kind: "interface"
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge305', {
        inherits: [System.Collections.Generic.IEnumerable$1(String)],
        config: {
            properties: {
                Items: null
            },
            alias: [
            "getEnumerator", "System$Collections$Generic$IEnumerable$1$String$getEnumerator"
            ]
        },
        constructor: function (items) {
            this.$initialize();
            this.setItems(new (System.Collections.Generic.List$1(String))(items));
        },
        System$Collections$IEnumerable$getEnumerator: function () {
            return this.getEnumerator();
        },
        getEnumerator: function () {
            return this.getItems().getEnumerator();
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge306A.Props', {
        name: null,
        toString: function () {
            return this.name;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge306Component$1', function (TProps) { return {
        statics: {
            new: function (TComponent, props) {
                return System.String.concat(System.String.concat(Bridge.getTypeName(props), ":"), props);
            }
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge306B.Props', {
        name: null,
        toString: function () {
            return this.name;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge341A', {
        config: {
            properties: {
                Str: null
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge341B', {
        inherits: function () { return [System.IEquatable$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge341B)]; },
        config: {
            properties: {
                Str: null
            },
            alias: [
            "equalsT", "System$IEquatable$1$Bridge$ClientTest$Batch3$BridgeIssues$Bridge341B$equalsT"
            ]
        },
        equalsT: function (other) {
            if (other == null) {
                return false;
            }
            return Bridge.referenceEquals(this.getStr(), other.getStr());
        },
        getHashCode: function () {
            return Bridge.getHashCode(this.getStr());
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge342', {
        inherits: [System.Collections.Generic.IDictionary$2(System.Int32,String)],
        _backingDictionary: null,
        config: {
            alias: [
            "getEnumerator", "System$Collections$Generic$IEnumerable$1$System$Collections$Generic$KeyValuePair$2$System$Int32$String$getEnumerator",
            "getItem", "System$Collections$Generic$IDictionary$2$System$Int32$String$getItem",
            "setItem", "System$Collections$Generic$IDictionary$2$System$Int32$String$setItem",
            "getKeys", "System$Collections$Generic$IDictionary$2$System$Int32$String$getKeys",
            "getValues", "System$Collections$Generic$IDictionary$2$System$Int32$String$getValues",
            "getCount", "System$Collections$Generic$IDictionary$2$System$Int32$String$getCount",
            "add", "System$Collections$Generic$IDictionary$2$System$Int32$String$add",
            "remove", "System$Collections$Generic$IDictionary$2$System$Int32$String$remove",
            "containsKey", "System$Collections$Generic$IDictionary$2$System$Int32$String$containsKey",
            "tryGetValue", "System$Collections$Generic$IDictionary$2$System$Int32$String$tryGetValue"
            ]
        },
        constructor: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge342.$constructor1.call(this, new (System.Collections.Generic.Dictionary$2(System.Int32,String))());
        },
        $constructor1: function (initialValues) {
            this.$initialize();
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
        System$Collections$IEnumerable$getEnumerator: function () {
            return this.getEnumerator();
        },
        getEnumerator: function () {
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

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge381', {
        statics: {
            testUseCase: function () {
                var s1 = ["a", "b"].join(",");
                Bridge.Test.Assert.areEqual$1("a,b", s1, "Join1");

                var animals = new (System.Collections.Generic.List$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge381.Animal))();
                animals.add(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge381.Animal("Squirrel", "Rodent"));
                animals.add(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge381.Animal("Gray Wolf", "Carnivora"));
                animals.add(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge381.Animal("Capybara", "Rodent"));

                var s2 = Bridge.toArray(animals).join(" ");
                Bridge.Test.Assert.areEqual$1("Squirrel Gray Wolf Capybara", s2, "Join2");

                var values = [null, "Cobb", 4189, 11434, 0.366];
                var s31 = values.join("|");
                Bridge.Test.Assert.areEqual$1("|Cobb|4189|11434|0.366", s31, "Join31");

                values[0] = "";
                var s32 = values.join("|");
                Bridge.Test.Assert.areEqual$1("|Cobb|4189|11434|0.366", s32, "Join32");

                var sArr = System.Array.init(10, null);
                for (var i = 0; i < 10; i = (i + 1) | 0) {
                    sArr[i] = System.String.format("{0,-3}", ((i * 5) | 0));
                }

                var s4 = sArr.join(":");
                Bridge.Test.Assert.areEqual$1("0  :5  :10 :15 :20 :25 :30 :35 :40 :45 ", s4, "Join4");

                var val = ["apple", "orange", "grape", "pear"];
                var s5 = val.slice(1, 1 + 2).join(", ");
                Bridge.Test.Assert.areEqual$1("orange, grape", s5, "Join5");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge381.Animal', {
        kind: null,
        order: null,
        constructor: function (kind, order) {
            this.$initialize();
            this.kind = kind;
            this.order = order;
        },
        toString: function () {
            return this.kind;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge383', {
        statics: {
            doSomething: function (person) {
                return person.getName();
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge395', {
        config: {
            properties: {
                Id: null,
                data: 0
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge407', {
        $kind: "struct",
        statics: {
            op_Addition: function (x, y) {
                return Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge407(), {
                    setA: ((x.getA() + y.getA()) | 0)
                } );
            },
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge407(); }
        },
        config: {
            properties: {
                A: 0
            }
        },
        constructor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 1091152776;
            hash = hash * 23 + (this.A == null ? 0 : Bridge.getHashCode(this.A));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge407)) {
                return false;
            }
            return Bridge.equals(this.A, o.A);
        },
        $clone: function (to) {
            var s = to || new Bridge.ClientTest.Batch3.BridgeIssues.Bridge407();
            s.A = this.A;
            return s;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge418', {
        config: {
            properties: {
                Delegate: null
            }
        },
        callDelegate: function (data) {
            return this.getDelegate()(data);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge422', {
        $kind: "enum",
        statics: {
            first: 0,
            next: 100,
            afterNext: 101
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge436First', {
        toObject: function () {
            return "1";
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge439', {
        config: {
            events: {
                _dispatcher: null
            }
        },
        register: function (callback) {
            this.add_dispatcher(callback);
        },
        callDispatcher: function (s) {
            this._dispatcher(s);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge447', {
        statics: {
            Five: 5,
            Another: "Another",
            Ten: System.Decimal(10.0),
            checkInlineExpression: function () {
                Bridge.Test.Assert.areEqual$1("AnotherSome", "AnotherSome", "AnotherSome");
                Bridge.Test.Assert.areEqual$1(20, 20, "20");
                Bridge.Test.Assert.areEqual$1(System.Decimal(10.5), System.Decimal(10.5), "10.5m");
            },
            checkInlineCalls: function () {
                Bridge.Test.Assert.areEqual$1("AnotherSome", Bridge.ClientTest.Batch3.BridgeIssues.Bridge447.getSum$2(Bridge.ClientTest.Batch3.BridgeIssues.Bridge447.Another, "Some"), "AnotherSome");
                Bridge.Test.Assert.areEqual$1(20, Bridge.ClientTest.Batch3.BridgeIssues.Bridge447.getSum$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge447.Five, 15), "20");
                Bridge.Test.Assert.areEqual$1(System.Decimal(10.5), Bridge.ClientTest.Batch3.BridgeIssues.Bridge447.getSum(Bridge.ClientTest.Batch3.BridgeIssues.Bridge447.Ten, System.Decimal(0.5)), "10.5m");
            },
            getSum$1: function (a, b) {
                return ((a + b) | 0);
            },
            getSum$2: function (a, b) {
                return System.String.concat(a, b);
            },
            getSum: function (a, b) {
                return a.add(b);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge467', {
        config: {
            properties: {
                MyProperty: 0
            }
        },
        equals: function (obj) {
            var other = Bridge.as(obj, Bridge.ClientTest.Batch3.BridgeIssues.Bridge467);
            if (other == null) {
                return false;
            }

            if (this.getMyProperty() < 0 || other.getMyProperty() < 0) {
                return Bridge.referenceEquals(this, other);
            }

            return this.getMyProperty() === other.getMyProperty();
        },
        getHashCode: function () {
            return this.getMyProperty() < 0 ? Bridge.getHashCode(this) : Bridge.getHashCode(this.getMyProperty());
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge470', {
        inherits: function () { return [System.Collections.Generic.IEqualityComparer$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge470)]; },
        statics: {
            isOdd: function (value) {
                return value % 2 !== 0;
            }
        },
        config: {
            properties: {
                Data: 0
            },
            alias: [
            "equals2", "System$Collections$Generic$IEqualityComparer$1$Bridge$ClientTest$Batch3$BridgeIssues$Bridge470$equals2",
            "getHashCode2", "System$Collections$Generic$IEqualityComparer$1$Bridge$ClientTest$Batch3$BridgeIssues$Bridge470$getHashCode2"
            ]
        },
        equals2: function (x, y) {
            return x.getData() === y.getData();
        },
        getHashCode2: function (obj) {
            return Bridge.getHashCode(obj.getData());
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge472', {
        statics: {
            test: function () {
                var magic1 = new (System.Collections.Generic.List$1(String))();
                magic1.insert(magic1.getCount(), "first");
                magic1.insert(magic1.getCount(), "second");

                Bridge.Test.Assert.areEqual$1("first", magic1.getItem(0), "magic1[0]");
                Bridge.Test.Assert.areEqual$1("second", magic1.getItem(1), "magic1[1]");

                var magic2 = new (System.Collections.Generic.List$1(String))();
                magic2.insertRange(magic2.getCount(), ["first", "second"]);
                magic2.insertRange(magic2.getCount(), ["third", "fourth"]);

                Bridge.Test.Assert.areEqual$1("first", magic2.getItem(0), "magic1[0]");
                Bridge.Test.Assert.areEqual$1("second", magic2.getItem(1), "magic1[1]");
                Bridge.Test.Assert.areEqual$1("third", magic2.getItem(2), "magic1[2]");
                Bridge.Test.Assert.areEqual$1("fourth", magic2.getItem(3), "magic1[3]");

                Bridge.Test.Assert.throws$5($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge472.f1, "Insert at length + 1");

                Bridge.Test.Assert.throws$5($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge472.f2, "Insert at -1");

                Bridge.Test.Assert.throws$5($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge472.f3, "InsertRange at length + 1");

                Bridge.Test.Assert.throws$5($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge472.f4, "InsertRange at -1");
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge472", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge472, {
        f1: function () {
            var magic = new (System.Collections.Generic.List$1(String))();
            magic.insert(1, "first");
        },
        f2: function () {
            var magic = new (System.Collections.Generic.List$1(String))();
            magic.insert(-1, "first");
        },
        f3: function () {
            var magic = new (System.Collections.Generic.List$1(String))();
            magic.insertRange(1, ["first", "second"]);
        },
        f4: function () {
            var magic = new (System.Collections.Generic.List$1(String))();
            magic.insertRange(-1, ["first", "second"]);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge479', {
        statics: {
            testUseCase: function () {
                var pair = new (System.Collections.Generic.KeyValuePair$2(System.Int32,String))(1, "value");
                Bridge.Test.Assert.areEqual$1(1, pair.key, "Bridge479 Key");
                Bridge.Test.Assert.areEqual$1("value", pair.value, "Bridge479 Value");
                Bridge.Test.Assert.areEqual$1("[1, value]", pair.toString(), "Bridge479 ToString");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge485', {
        statics: {
            testUseCase: function () {
                var list = System.Linq.Enumerable.from([new $_.$AnonymousType$13("", "")]).skip(1).toList(Object);
                list.add(new $_.$AnonymousType$13("Ruth", "Babe"));
                list.add(new $_.$AnonymousType$13("Johnson", "Walter"));
                list.add(new $_.$AnonymousType$13("Cobb", "Ty"));
                list.add(new $_.$AnonymousType$13("Schmidt", "Mike"));

                var query = System.Linq.Enumerable.from(list).where($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge485.f1).select($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge485.f2);

                var s = JSON.stringify(query.toList(Object));

                Bridge.Test.Assert.areEqual$1("{\"items\":[{\"lastName\":\"Ruth\",\"firstName\":\"Babe\"},{\"lastName\":\"Cobb\",\"firstName\":\"Ty\"}]}", s, "#485");
            }
        }
    });

    Bridge.define("$AnonymousType$13", $_, {
        $kind: "anonymous",
        constructor: function (lastName, firstName) {
            this.lastName = lastName;
            this.firstName = firstName;
        },
        getLastName : function () {
            return this.lastName;
        },
        getFirstName : function () {
            return this.firstName;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$13)) {
                return false;
            }
            return Bridge.equals(this.lastName, o.lastName) && Bridge.equals(this.firstName, o.firstName);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + -781562958;
            hash = hash * 23 + (this.lastName == null ? 0 : Bridge.getHashCode(this.lastName));
            hash = hash * 23 + (this.firstName == null ? 0 : Bridge.getHashCode(this.firstName));
            return hash;
        },
        toJSON: function () {
            return {
                lastName : this.lastName,
                firstName : this.firstName
            };
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge485", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge485, {
        f1: function (p) {
            return p.lastName.length === 4;
        },
        f2: function (p) {
            return new $_.$AnonymousType$13(p.lastName, p.firstName);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge495', {
        statics: {
            testUseCase: function () {
                var root = document.getElementById("qunit-fixture");

                var button1 = document.createElement('button');
                button1.innerHTML = "Button 1";
                button1.id = "button1";
                button1.style.color = "green";

                root.appendChild(button1);

                var b1 = document.getElementById("button1");
                Bridge.Test.Assert.areEqual$1("green", b1.style.color, "b1.Style.Color green");

                var button2 = document.createElement('button');
                button2.innerHTML = "Button 2";
                button2.id = "button2";
                button2.style.backgroundColor = "yellow";

                root.appendChild(button2);

                var b2 = document.getElementById("button2");
                Bridge.Test.Assert.areEqual$1("yellow", b2.style.backgroundColor, "b2.Style.BackgroundColor HTMLColor.Yellow");

                var hexColor = "#FFEEAA";
                var divElement1 = document.createElement('div');
                divElement1.innerHTML = "Div 1";
                divElement1.id = "div1";
                divElement1.style.color = hexColor;

                root.appendChild(divElement1);

                var div1 = document.getElementById("div1");
                Bridge.Test.Assert.areEqual$1("rgb(255, 238, 170)", div1.style.color, System.String.concat("div1.Style.Color ", hexColor));
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge501', {
        statics: {
            testUseCase: function () {
                var list = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge501.f1(new (System.Collections.Generic.List$1(System.Int32))());
                var z = JSON.stringify(list); // this is ok
                Bridge.Test.Assert.areEqual$1("{\"items\":[7]}", z, "List<int>");

                var b = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge501.f2(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge501B());
                var y = JSON.stringify(b); // wrong, missing items
                Bridge.Test.Assert.areEqual$1("{\"items\":[1,2]}", y, "Bridge501B");

                var a = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge501.f3(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge501A()); // sine items is defined as member, push fails
                var x = JSON.stringify(a);
                Bridge.Test.Assert.areEqual$1("{\"items\":[7]}", x, "Bridge501A");

                var c = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge501A(), JSON.parse(x));
                Bridge.Test.Assert.areEqual$1("12", c.items$1, "Bridge501A Parse c.Items");
                Bridge.Test.Assert.areEqual$1(7, c.getItem(0), "Bridge501A Parse c[0]");
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge501", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge501, {
        f1: function (_o1) {
            _o1.add(7);
            return _o1;
        },
        f2: function (_o2) {
            _o2.add(1);
            _o2.add(2);
            return _o2;
        },
        f3: function (_o3) {
            _o3.add(7);
            return _o3;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge501A', {
        inherits: [System.Collections.Generic.List$1(System.Int32)],
        items$1: "12"
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge501B', {
        inherits: [System.Collections.Generic.List$1(System.Int32)]
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge502', {
        statics: {
            testUseCase: function () {
                var $t, $t1, $t2, $t3;
                var numbers = [1, 2, 3];

                var sum = 0;

                $t = Bridge.getEnumerator(numbers);
                while ($t.moveNext()) {
                    var a = $t.getCurrent();
                    sum = (sum + a) | 0;
                }

                $t1 = Bridge.getEnumerator(numbers);
                while ($t1.moveNext()) {
                    var a1 = $t1.getCurrent();
                    sum = (sum + a1) | 0;
                }

                $t2 = Bridge.getEnumerator(numbers);
                while ($t2.moveNext()) {
                    var a2 = $t2.getCurrent();
                    sum = (sum + a2) | 0;
                }

                $t3 = Bridge.getEnumerator(numbers);
                while ($t3.moveNext()) {
                    var a3 = $t3.getCurrent();
                    sum = (sum + a3) | 0;
                }

                Bridge.Test.Assert.areEqual$1(24, sum, "Bridge502 sum");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge503', {
        statics: {
            testUseCase: function () {
                var a = ["a", "b", "c"];
                var list = new (System.Collections.Generic.List$1(String))(a);

                list.addRange(a);

                Bridge.Test.Assert.areEqual$1(3, a.length, "Bridge503: array.Length is correct");
                Bridge.Test.Assert.areEqual$1(6, list.getCount(), "Bridge503: list.Count is correct");

                list.clear();

                Bridge.Test.Assert.areEqual$1(3, a.length, "Bridge503: array.Length is correct");
                Bridge.Test.Assert.areEqual$1(0, list.getCount(), "Bridge503: list.Count is correct");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge508', {
        statics: {
            count: 0,
            config: {
                properties: {
                    QUnitAsyncDone: null
                }
            },
            testUseCase: function () {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    result, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge508.setQUnitAsyncDone(Bridge.Test.Assert.async());

                                    $task1 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge508.doSomethingAsync();
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    result = $taskResult1;

                                    Bridge.Test.Assert.areEqual$1("A(0)A(1)B(0)B(1)B(2)", result, "#508 DoSomethingAsync");

                                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge508.getQUnitAsyncDone()();
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            },
            doSomethingAsync: function () {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $task2, 
                    $taskResult2, 
                    $task3, 
                    $taskResult3, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    result, 
                    i, 
                    np, 
                    np1, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3,4,5,6,7,8,9,10,11], $step);
                                switch ($step) {
                                    case 0: {
                                        result = "";

                                        i = 0;
                                        $task1 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge508.initPage();
                                        $step = 1;
                                        $task1.continueWith($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        np = $taskResult1;
                                        $step = 2;
                                        continue;
                                    }
                                    case 2: {
                                        if ( np != null ) {
                                            $step = 3;
                                            continue;
                                        }
                                        $step = 6;
                                        continue;
                                    }
                                    case 3: {
                                        result = System.String.concat(result, (System.String.format("A({0})", Bridge.identity(i, (i = (i + 1) | 0)))));
                                    }
                                    case 4: {
                                        $task2 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge508.nextPage();
                                        $step = 5;
                                        $task2.continueWith($asyncBody);
                                        return;
                                    }
                                    case 5: {
                                        $taskResult2 = $task2.getAwaitedResult();
                                        np = $taskResult2;
                                        $step = 2;
                                        continue;
                                    }
                                    case 6: {
                                    
                                        Bridge.ClientTest.Batch3.BridgeIssues.Bridge508.count = 0;
                                        i = 0;
                                        $task3 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge508.initPage();
                                        $step = 7;
                                        $task3.continueWith($asyncBody);
                                        return;
                                    }
                                    case 7: {
                                        $taskResult3 = $task3.getAwaitedResult();
                                        np1 = $taskResult3;
                                        $step = 8;
                                        continue;
                                    }
                                    case 8: {
                                        if ( np1 != null ) {
                                            $step = 9;
                                            continue;
                                        }
                                        $step = 11;
                                        continue;
                                    }
                                    case 9: {
                                        result = System.String.concat(result, (System.String.format("B({0})", Bridge.identity(i, (i = (i + 1) | 0)))));
                                    }
                                    case 10: {
                                        np1 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge508.nextPage1();
                                        $step = 8;
                                        continue;
                                    }
                                    case 11: {
                                    
                                        $tcs.setResult(result);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            initPage: function () {
                var $step = 0,
                    $task1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        $task1 = System.Threading.Tasks.Task.delay(0);
                                        $step = 1;
                                        $task1.continueWith($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $task1.getAwaitedResult();
                                        Bridge.ClientTest.Batch3.BridgeIssues.Bridge508.count = (Bridge.ClientTest.Batch3.BridgeIssues.Bridge508.count + 1) | 0;
                                        $tcs.setResult(Bridge.ClientTest.Batch3.BridgeIssues.Bridge508.count < 2 ? new $_.$AnonymousType$14() : null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            nextPage: function () {
                var $step = 0,
                    $task1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        $task1 = System.Threading.Tasks.Task.delay(0);
                                        $step = 1;
                                        $task1.continueWith($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $task1.getAwaitedResult();
                                        Bridge.ClientTest.Batch3.BridgeIssues.Bridge508.count = (Bridge.ClientTest.Batch3.BridgeIssues.Bridge508.count + 1) | 0;
                                        $tcs.setResult(Bridge.ClientTest.Batch3.BridgeIssues.Bridge508.count < 3 ? new $_.$AnonymousType$14() : null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            nextPage1: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge508.count = (Bridge.ClientTest.Batch3.BridgeIssues.Bridge508.count + 1) | 0;
                return Bridge.ClientTest.Batch3.BridgeIssues.Bridge508.count < 4 ? new $_.$AnonymousType$14() : null;
            }
        }
    });

    Bridge.define("$AnonymousType$14", $_, {
        $kind: "anonymous",
        constructor: function () {
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$14)) {
                return false;
            }
            return ;
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + -1184847485;
            return hash;
        },
        toJSON: function () {
            return {

            };
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge514', {
        statics: {
            testUseCase: function () {
                var d1 = 5.43;
                Bridge.Test.Assert.areEqual$1(1, Bridge.Int.sign(d1), "Bridge514 Sign(double 5.43)");

                var d2 = -7.1;
                Bridge.Test.Assert.areEqual$1(-1, Bridge.Int.sign(d2), "Bridge514 Sign(double -7.1)");
            },
            testRelated: function () {
                var d1 = System.Decimal(5.43);
                Bridge.Test.Assert.areEqual$1(1, d1.sign(), "Bridge514 Sign(decimal 5.43)");

                var d2 = System.Decimal(-7.1);
                Bridge.Test.Assert.areEqual$1(-1, d2.sign(), "Bridge514 Sign(decimal -7.1)");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge520', {
        statics: {
            testUseCase: function () {
                var s = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge520.Source();
                s.fire();

                Bridge.Test.Assert.areEqual$1(1, s.getCounter(), "Bridge520 Counter");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge520.Source', {
        config: {
            events: {
                Fired: null
            },
            properties: {
                Counter: 0
            }
        },
        fire: function () {
            var getEvt = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge520.Source.f1;
            var evt = getEvt(this);

            evt = Bridge.fn.combine(evt, Bridge.fn.bind(this, $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge520.Source.f2));

            evt(this, new Object());
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge520.Source", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge520.Source, {
        f1: function (s) {
            return s.Fired;
        },
        f2: function (sender, args) {
            this.setCounter((this.getCounter() + 1) | 0);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge522', {
        statics: {
            testUseCase1: function () {
                var dc1 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge522.DerivedClass1();
                dc1.addValue(5);

                Bridge.Test.Assert.areEqual$1(1, dc1.getValues().getCount(), "Bridge522 dc1.Count = 1");

                var dc2 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge522.DerivedClass1();
                Bridge.Test.Assert.areEqual$1(0, dc2.getValues().getCount(), "Bridge522 dc2.Count = 0");
            },
            testUseCase2: function () {
                var dc1 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge522.DerivedClass2();
                dc1.addValue(5);

                Bridge.Test.Assert.areEqual$1(1, dc1.getValues().getCount(), "Bridge522 dc1.Count = 1");

                var dc2 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge522.DerivedClass2();
                Bridge.Test.Assert.areEqual$1(0, dc2.getValues().getCount(), "Bridge522 dc2.Count = 0");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge522.BaseClass', {
        values: null,
        config: {
            init: function () {
                this.values = new (System.Collections.Generic.List$1(System.Int32))();
            }
        },
        addValue: function (a) {
            this.values.add(a);
        },
        getValues: function () {
            return this.values;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge532', {
        statics: {
            testUseCase: function () {
                var list = new (System.Collections.Generic.List$1(System.Int32))([1, 2, 3, 4, 5, 6, 7, 8, 9]);

                Bridge.Test.Assert.areDeepEqual$1([1, 2], list.getRange(0, 2).toArray(), "Bridge532 (0, 2)");
                Bridge.Test.Assert.areDeepEqual$1([2, 3], list.getRange(1, 2).toArray(), "Bridge532 (1, 2)");
                Bridge.Test.Assert.areDeepEqual$1([7, 8, 9], list.getRange(6, 3).toArray(), "Bridge532 (6, 3)");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge537', {
        statics: {
            testUseCase: function () {
                Bridge.Test.Assert.areEqual$1(2, Bridge.ClientTest.Batch3.BridgeIssues.Bridge537B.testB1(), "Bridge537 TestB1");

                Bridge.Test.Assert.areEqual$1(1, Bridge.ClientTest.Batch3.BridgeIssues.Bridge537B.testB2(), "Bridge537 TestB2");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge537A', {
        id: 0
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge538', {
        statics: {
            testUseCase: function () {
                var srcString = "123";
                var destString = "4";

                destString = System.String.concat(destString, String.fromCharCode(srcString.charCodeAt(2)));

                Bridge.Test.Assert.areEqual$1("43", destString, "Bridge538 '43'");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge544', {
        statics: {
            testUseCase: function () {
                var o = Bridge.merge(new Boolean(), JSON.parse("true"));
                Bridge.Test.Assert.areEqual$1(true, o, "Bridge544 bool");
            },
            testRelated: function () {
                var i = Bridge.merge(new System.Int32(), JSON.parse("25"));
                Bridge.Test.Assert.areEqual$1(25, i, "Bridge544 int");

                var dbl = Bridge.merge(new System.Double(), JSON.parse("26.1"));
                Bridge.Test.Assert.areEqual$1(26.1, dbl, "Bridge544 double");

                var d = Bridge.merge(new System.Decimal(), JSON.parse("27.2"));
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(d, 27.2, "Bridge544 decimal");

                var s = Bridge.merge(new String(), JSON.parse("\"Some string\""));
                Bridge.Test.Assert.areEqual$1("Some string", s, "Bridge544 string");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge546', {
        statics: {
            testUseCase: function () {
                var date = new Date(2015, 1 - 1, 1, 0, 0, 0, 0);

                var i = 1;
                var d = new Date(date.valueOf() + Math.round((((10 + ((20 * i) | 0)) | 0)) * 6e4));

                Bridge.Test.Assert.areEqual$1(30, d.getMinutes(), "Bridge546 30 minutes");
            },
            testRelated: function () {
                var date = new Date(2015, 1 - 1, 1, 0, 0, 0, 0);
                var span1 = new System.TimeSpan(0, 15, 0);
                var span2 = new System.TimeSpan(0, 7, 0);
                var i = 1;

                var d1 = Bridge.Date.subdt(Bridge.Date.subdt(date, span1), span2);
                Bridge.Test.Assert.areEqual$1(38, d1.getMinutes(), "Bridge546 d1");

                var d2 = Bridge.Date.adddt(Bridge.Date.adddt(date, span1), span2);
                Bridge.Test.Assert.areEqual$1(22, d2.getMinutes(), "Bridge546 d2");

                var d3 = new Date(date.valueOf() + Math.round((((10 + ((20 * i) | 0)) | 0)) * 864e5));
                Bridge.Test.Assert.areEqual$1(31, d3.getDate(), "Bridge546 d3");

                var d4 = new Date(date.valueOf() + Math.round((((10 + ((20 * i) | 0)) | 0)) * 36e5));
                Bridge.Test.Assert.areEqual$1(6, d4.getHours(), "Bridge546 d4");

                var d5 = new Date(date.valueOf() + Math.round((((12 + ((20 * i) | 0)) | 0)) * 1e3));
                Bridge.Test.Assert.areEqual$1(32, d5.getSeconds(), "Bridge546 d5");
            }
        }
    });

    /** @namespace Bridge.ClientTest.Batch3.BridgeIssues */

    /**
     * This test will check whether TypedArray types are emitted to JavaScript
     the right way. [#548]
     *
     * @public
     * @class Bridge.ClientTest.Batch3.BridgeIssues.Bridge548
     */
    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge548', {
        statics: {
            testUseCase: function () {
                var isSpecialTypeName = Bridge.ClientTest.Batch3.Utilities.BrowserHelper.isPhantomJs();

                var v1 = new Float32Array(1);
                var thisType = "Float32Array";
                Bridge.Test.Assert.true$1(v1 != null, System.String.concat(thisType, " created"));
                var thisName = isSpecialTypeName ? "Object" : thisType;
                Bridge.Test.Assert.areEqual$1(thisName, Bridge.getTypeName(v1), System.String.concat(thisType, " class name"));

                var v2 = new Float64Array(1);
                thisType = "Float64Array";
                Bridge.Test.Assert.true$1(v2 != null, System.String.concat(thisType, " created"));
                thisName = isSpecialTypeName ? "Object" : thisType;
                Bridge.Test.Assert.areEqual$1(thisName, Bridge.getTypeName(v2), System.String.concat(thisType, " class name"));

                var v3 = new Int16Array(1);
                thisType = "Int16Array";
                Bridge.Test.Assert.true$1(v3 != null, System.String.concat(thisType, " created"));
                thisName = isSpecialTypeName ? "Object" : thisType;
                Bridge.Test.Assert.areEqual$1(thisName, Bridge.getTypeName(v3), System.String.concat(thisType, " class name"));

                var v4 = new Int32Array(1);
                thisType = "Int32Array";
                Bridge.Test.Assert.true$1(v4 != null, System.String.concat(thisType, " created"));
                thisName = isSpecialTypeName ? "Object" : thisType;
                Bridge.Test.Assert.areEqual$1(thisName, Bridge.getTypeName(v4), System.String.concat(thisType, " class name"));

                var v5 = new Int8Array(1);
                thisType = "Int8Array";
                Bridge.Test.Assert.true$1(v5 != null, System.String.concat(thisType, " created"));
                thisName = isSpecialTypeName ? "Object" : thisType;
                Bridge.Test.Assert.areEqual$1(thisName, Bridge.getTypeName(v5), System.String.concat(thisType, " class name"));

                var v6 = new Uint16Array(1);
                thisType = "Uint16Array";
                Bridge.Test.Assert.true$1(v6 != null, System.String.concat(thisType, " created"));
                thisName = isSpecialTypeName ? "Object" : thisType;
                Bridge.Test.Assert.areEqual$1(thisName, Bridge.getTypeName(v6), System.String.concat(thisType, " class name"));

                var v7 = new Uint32Array(1);
                thisType = "Uint32Array";
                Bridge.Test.Assert.true$1(v7 != null, System.String.concat(thisType, " created"));
                thisName = isSpecialTypeName ? "Object" : thisType;
                Bridge.Test.Assert.areEqual$1(thisName, Bridge.getTypeName(v7), System.String.concat(thisType, " class name"));

                var v8 = new Uint8Array(1);
                thisType = "Uint8Array";
                Bridge.Test.Assert.true$1(v8 != null, System.String.concat(thisType, " created"));
                thisName = isSpecialTypeName ? "Object" : thisType;
                Bridge.Test.Assert.areEqual$1(thisName, Bridge.getTypeName(v8), System.String.concat(thisType, " class name"));

                var v9 = new Uint8ClampedArray(1);
                thisType = "Uint8ClampedArray";
                Bridge.Test.Assert.true$1(v9 != null, System.String.concat(thisType, " created"));
                thisName = isSpecialTypeName ? "Object" : thisType;
                Bridge.Test.Assert.areEqual$1(thisName, Bridge.getTypeName(v9), System.String.concat(thisType, " class name"));
            }
        }
    });

    /**
     * This test will check whether TypedArray types correctly inherit from
     the prototype common methods and fields. [#549]
     *
     * @public
     * @class Bridge.ClientTest.Batch3.BridgeIssues.Bridge549
     */
    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge549', {
        statics: {
            testUseCase: function () {
                var isToStringToTypeNameLogic = !Bridge.ClientTest.Batch3.Utilities.BrowserHelper.isChrome();

                var v1 = new Float32Array(10);
                Bridge.Test.Assert.true$1(v1 != null, "Float32Array created");

                v1[1] = 11;
                v1[5] = 5;
                v1[9] = 99;
                Bridge.Test.Assert.areEqual$1(11, v1[1], "Float32Array indexier works 1");
                Bridge.Test.Assert.areEqual$1(99, v1[9], "Float32Array indexier works 9");

                // Check just a select number of references inside the Prototype inheritance.
                Bridge.Test.Assert.true$1(v1.buffer != null, "Float32Array Buffer");
                Bridge.Test.Assert.areEqual$1(40, v1.byteLength, "Float32Array ByteLength");
                Bridge.Test.Assert.areEqual$1(0, v1.byteOffset, "Float32Array ByteOffset");
                Bridge.Test.Assert.areEqual$1(10, v1.length, "Float32Array Length");

                /* 
                 * Commented out. Reason: Only Firefox implements them.
                 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array
                var mA = v1.Join();
                v1.Reverse();
                var mB = v1.Slice();
                var mC = v1.Sort();
                 */

                var expectedToStringFloat32Array1 = isToStringToTypeNameLogic ? "[object Float32Array]" : "0,11,0,0,0,5,0,0,0,99";
                Bridge.Test.Assert.areEqual$1(expectedToStringFloat32Array1, v1.toLocaleString(), "Float32Array ToLocaleString");
                Bridge.Test.Assert.areEqual$1(expectedToStringFloat32Array1, v1.toString(), "Float32Array ToString");

                // Some browsers do not support SubArray() with no parameters.
                // At least 'begin' must be provided.
                var subArray11 = v1.subarray(1);
                var expectedToStringFloat32Array2 = isToStringToTypeNameLogic ? "[object Float32Array]" : "11,0,0,0,5,0,0,0,99";
                Bridge.Test.Assert.true$1(subArray11 != null, "Float32Array SubArray1");
                Bridge.Test.Assert.areEqual$1(9, subArray11.length, "Float32Array SubArray1 Length");
                Bridge.Test.Assert.areEqual$1(expectedToStringFloat32Array2, subArray11.toString(), "Float32Array SubArray1 ToString");
                Bridge.Test.Assert.areEqual$1(4, subArray11.byteOffset, "Float32Array SubArray1 ByteOffset");

                var subArray12 = subArray11.subarray(2, 6);
                var expectedToStringFloat32Array3 = isToStringToTypeNameLogic ? "[object Float32Array]" : "0,0,5,0";
                Bridge.Test.Assert.true$1(subArray12 != null, "Float32Array SubArray2");
                Bridge.Test.Assert.areEqual$1(4, subArray12.length, "Float32Array SubArray2 Length");
                Bridge.Test.Assert.areEqual$1(expectedToStringFloat32Array3, subArray12.toString(), "Float32Array SubArray2 ToString");
                Bridge.Test.Assert.areEqual$1(12, subArray12.byteOffset, "Float32Array SubArray2 ByteOffset");

                var v2 = new Float64Array(10);
                Bridge.Test.Assert.true$1(v2 != null, "Float64Array created");

                v2[1] = 11;
                v2[5] = 5;
                v2[9] = 99;
                Bridge.Test.Assert.areEqual$1(11, v2[1], "Float64Array indexier works 1");
                Bridge.Test.Assert.areEqual$1(99, v2[9], "Float64Array indexier works 9");

                Bridge.Test.Assert.true$1(v2.buffer != null, "Float64Array Buffer");
                Bridge.Test.Assert.areEqual$1(80, v2.byteLength, "Float64Array ByteLength");
                Bridge.Test.Assert.areEqual$1(0, v2.byteOffset, "Float64Array ByteOffset");
                Bridge.Test.Assert.areEqual$1(10, v2.length, "Float64Array Length");

                var expectedToStringFloat64Array1 = isToStringToTypeNameLogic ? "[object Float64Array]" : "0,11,0,0,0,5,0,0,0,99";
                Bridge.Test.Assert.areEqual$1(expectedToStringFloat64Array1, v2.toLocaleString(), "Float64Array ToLocaleString");
                Bridge.Test.Assert.areEqual$1(expectedToStringFloat64Array1, v2.toString(), "Float64Array ToString");

                var subArray21 = v2.subarray(1);
                var expectedToStringFloat64Array2 = isToStringToTypeNameLogic ? "[object Float64Array]" : "11,0,0,0,5,0,0,0,99";
                Bridge.Test.Assert.true$1(subArray21 != null, "Float64Array SubArray1");
                Bridge.Test.Assert.areEqual$1(9, subArray21.length, "Float64Array SubArray1 Length");
                Bridge.Test.Assert.areEqual$1(expectedToStringFloat64Array2, subArray21.toString(), "Float64Array SubArray1 ToString");
                Bridge.Test.Assert.areEqual$1(8, subArray21.byteOffset, "Float64Array SubArray1 ByteOffset");

                var subArray22 = subArray21.subarray(2, 6);
                var expectedToStringFloat64Array3 = isToStringToTypeNameLogic ? "[object Float64Array]" : "0,0,5,0";
                Bridge.Test.Assert.true$1(subArray22 != null, "Float64Array SubArray2");
                Bridge.Test.Assert.areEqual$1(4, subArray22.length, "Float64Array SubArray2 Length");
                Bridge.Test.Assert.areEqual$1(expectedToStringFloat64Array3, subArray22.toString(), "Float64Array SubArray2 ToString");
                Bridge.Test.Assert.areEqual$1(24, subArray22.byteOffset, "Float64Array SubArray2 ByteOffset");

                var v3 = new Int16Array(10);
                Bridge.Test.Assert.true$1(v3 != null, "Int16Array created");

                v3[1] = 11;
                v3[5] = 5;
                v3[9] = 99;
                Bridge.Test.Assert.areEqual$1(11, v3[1], "Int16Array indexier works 1");
                Bridge.Test.Assert.areEqual$1(99, v3[9], "Int16Array indexier works 9");

                Bridge.Test.Assert.true$1(v3.buffer != null, "Int16Array Buffer");
                Bridge.Test.Assert.areEqual$1(20, v3.byteLength, "Int16Array ByteLength");
                Bridge.Test.Assert.areEqual$1(0, v3.byteOffset, "Int16Array ByteOffset");
                Bridge.Test.Assert.areEqual$1(10, v3.length, "Int16Array Length");

                var expectedToStringInt16Array1 = isToStringToTypeNameLogic ? "[object Int16Array]" : "0,11,0,0,0,5,0,0,0,99";
                Bridge.Test.Assert.areEqual$1(expectedToStringInt16Array1, v3.toLocaleString(), "Int16Array ToLocaleString");
                Bridge.Test.Assert.areEqual$1(expectedToStringInt16Array1, v3.toString(), "Int16Array ToString");

                var subArray31 = v3.subarray(1);
                var expectedToStringInt16Array2 = isToStringToTypeNameLogic ? "[object Int16Array]" : "11,0,0,0,5,0,0,0,99";
                Bridge.Test.Assert.true$1(subArray31 != null, "Int16Array SubArray1");
                Bridge.Test.Assert.areEqual$1(9, subArray31.length, "Int16Array SubArray1 Length");
                Bridge.Test.Assert.areEqual$1(expectedToStringInt16Array2, subArray31.toString(), "Int16Array SubArray1 ToString");
                Bridge.Test.Assert.areEqual$1(2, subArray31.byteOffset, "Int16Array SubArray1 ByteOffset");

                var subArray32 = subArray31.subarray(2, 6);
                var expectedToStringInt16Array3 = isToStringToTypeNameLogic ? "[object Int16Array]" : "0,0,5,0";
                Bridge.Test.Assert.true$1(subArray32 != null, "Int16Array SubArray2");
                Bridge.Test.Assert.areEqual$1(4, subArray32.length, "Int16Array SubArray2 Length");
                Bridge.Test.Assert.areEqual$1(expectedToStringInt16Array3, subArray32.toString(), "Int16Array SubArray2 ToString");
                Bridge.Test.Assert.areEqual$1(6, subArray32.byteOffset, "Int16Array SubArray2 ByteOffset");

                var v4 = new Int32Array(10);
                Bridge.Test.Assert.true$1(v4 != null, "Int32Array created");

                v4[1] = 11;
                v4[5] = 5;
                v4[9] = 99;
                Bridge.Test.Assert.areEqual$1(11, v4[1], "Int32Array indexier works 1");
                Bridge.Test.Assert.areEqual$1(99, v4[9], "Int32Array indexier works 9");

                Bridge.Test.Assert.true$1(v4.buffer != null, "Int32Array Buffer");
                Bridge.Test.Assert.areEqual$1(40, v4.byteLength, "Int32Array ByteLength");
                Bridge.Test.Assert.areEqual$1(0, v4.byteOffset, "Int32Array ByteOffset");
                Bridge.Test.Assert.areEqual$1(10, v4.length, "Int32Array Length");

                var expectedToStringInt32Array1 = isToStringToTypeNameLogic ? "[object Int32Array]" : "0,11,0,0,0,5,0,0,0,99";
                Bridge.Test.Assert.areEqual$1(expectedToStringInt32Array1, v4.toLocaleString(), "Int32Array ToLocaleString");
                Bridge.Test.Assert.areEqual$1(expectedToStringInt32Array1, v4.toString(), "Int32Array ToString");

                var subArray41 = v4.subarray(1);
                var expectedToStringInt32Array2 = isToStringToTypeNameLogic ? "[object Int32Array]" : "11,0,0,0,5,0,0,0,99";
                Bridge.Test.Assert.true$1(subArray41 != null, "Int32Array SubArray1");
                Bridge.Test.Assert.areEqual$1(9, subArray41.length, "Int32Array SubArray1 Length");
                Bridge.Test.Assert.areEqual$1(expectedToStringInt32Array2, subArray41.toString(), "Int32Array SubArray1 ToString");
                Bridge.Test.Assert.areEqual$1(4, subArray41.byteOffset, "Int32Array SubArray1 ByteOffset");

                var subArray42 = subArray41.subarray(2, 6);
                var expectedToStringInt32Array3 = isToStringToTypeNameLogic ? "[object Int32Array]" : "0,0,5,0";
                Bridge.Test.Assert.true$1(subArray42 != null, "Int32Array SubArray2");
                Bridge.Test.Assert.areEqual$1(4, subArray42.length, "Int32Array SubArray2 Length");
                Bridge.Test.Assert.areEqual$1(expectedToStringInt32Array3, subArray42.toString(), "Int32Array SubArray2 ToString");
                Bridge.Test.Assert.areEqual$1(12, subArray42.byteOffset, "Int32Array SubArray2 ByteOffset");

                var v5 = new Int8Array(10);
                Bridge.Test.Assert.true$1(v5 != null, "Int8Array created");

                v5[1] = 11;
                v5[5] = 5;
                v5[9] = 99;
                Bridge.Test.Assert.areEqual$1(11, v5[1], "Int8Array indexier works 1");
                Bridge.Test.Assert.areEqual$1(99, v5[9], "Int8Array indexier works 9");

                Bridge.Test.Assert.true$1(v5.buffer != null, "Int8Array Buffer");
                Bridge.Test.Assert.areEqual$1(10, v5.byteLength, "Int8Array ByteLength");
                Bridge.Test.Assert.areEqual$1(0, v5.byteOffset, "Int8Array ByteOffset");
                Bridge.Test.Assert.areEqual$1(10, v5.length, "Int8Array Length");

                var expectedToStringInt8Array1 = isToStringToTypeNameLogic ? "[object Int8Array]" : "0,11,0,0,0,5,0,0,0,99";
                Bridge.Test.Assert.areEqual$1(expectedToStringInt8Array1, v5.toLocaleString(), "Int8Array ToLocaleString");
                Bridge.Test.Assert.areEqual$1(expectedToStringInt8Array1, v5.toString(), "Int8Array ToString");

                var subArray51 = v5.subarray(1);
                var expectedToStringInt8Array2 = isToStringToTypeNameLogic ? "[object Int8Array]" : "11,0,0,0,5,0,0,0,99";
                Bridge.Test.Assert.true$1(subArray51 != null, "Int8Array SubArray1");
                Bridge.Test.Assert.areEqual$1(9, subArray51.length, "Int8Array SubArray1 Length");
                Bridge.Test.Assert.areEqual$1(expectedToStringInt8Array2, subArray51.toString(), "Int8Array SubArray1 ToString");
                Bridge.Test.Assert.areEqual$1(1, subArray51.byteOffset, "Int8Array SubArray1 ByteOffset");

                var subArray52 = subArray51.subarray(2, 6);
                var expectedToStringInt8Array3 = isToStringToTypeNameLogic ? "[object Int8Array]" : "0,0,5,0";
                Bridge.Test.Assert.true$1(subArray52 != null, "Int8Array SubArray2");
                Bridge.Test.Assert.areEqual$1(4, subArray52.length, "Int8Array SubArray2 Length");
                Bridge.Test.Assert.areEqual$1(expectedToStringInt8Array3, subArray52.toString(), "Int8Array SubArray2 ToString");
                Bridge.Test.Assert.areEqual$1(3, subArray52.byteOffset, "Int8Array SubArray2 ByteOffset");

                var v6 = new Uint16Array(10);
                Bridge.Test.Assert.true$1(v6 != null, "Uint16Array created");

                v6[1] = 11;
                v6[5] = 5;
                v6[9] = 99;
                Bridge.Test.Assert.areEqual$1(11, v6[1], "Uint16Array indexier works 1");
                Bridge.Test.Assert.areEqual$1(99, v6[9], "Uint16Array indexier works 9");

                Bridge.Test.Assert.true$1(v6.buffer != null, "Uint16Array Buffer");
                Bridge.Test.Assert.areEqual$1(20, v6.byteLength, "Uint16Array ByteLength");
                Bridge.Test.Assert.areEqual$1(0, v6.byteOffset, "Uint16Array ByteOffset");
                Bridge.Test.Assert.areEqual$1(10, v6.length, "Uint16Array Length");

                var expectedToStringUint16Array1 = isToStringToTypeNameLogic ? "[object Uint16Array]" : "0,11,0,0,0,5,0,0,0,99";
                Bridge.Test.Assert.areEqual$1(expectedToStringUint16Array1, v6.toLocaleString(), "Uint16Array ToLocaleString");
                Bridge.Test.Assert.areEqual$1(expectedToStringUint16Array1, v6.toString(), "Uint16Array ToString");

                var subArray61 = v6.subarray(1);
                var expectedToStringUint16Array2 = isToStringToTypeNameLogic ? "[object Uint16Array]" : "11,0,0,0,5,0,0,0,99";
                Bridge.Test.Assert.true$1(subArray61 != null, "Uint16Array SubArray1");
                Bridge.Test.Assert.areEqual$1(9, subArray61.length, "Uint16Array SubArray1 Length");
                Bridge.Test.Assert.areEqual$1(expectedToStringUint16Array2, subArray61.toString(), "Uint16Array SubArray1 ToString");
                Bridge.Test.Assert.areEqual$1(2, subArray61.byteOffset, "Uint16Array SubArray1 ByteOffset");

                var subArray62 = subArray61.subarray(2, 6);
                var expectedToStringUint16Array3 = isToStringToTypeNameLogic ? "[object Uint16Array]" : "0,0,5,0";
                Bridge.Test.Assert.true$1(subArray62 != null, "Uint16Array SubArray2");
                Bridge.Test.Assert.areEqual$1(4, subArray62.length, "Uint16Array SubArray2 Length");
                Bridge.Test.Assert.areEqual$1(expectedToStringUint16Array3, subArray62.toString(), "Uint16Array SubArray2 ToString");
                Bridge.Test.Assert.areEqual$1(6, subArray62.byteOffset, "Uint16Array SubArray2 ByteOffset");

                var v7 = new Uint32Array(10);
                Bridge.Test.Assert.true$1(v7 != null, "Uint32Array created");

                v7[1] = 11;
                v7[5] = 5;
                v7[9] = 99;
                Bridge.Test.Assert.areEqual$1(11, v7[1], "Uint32Array indexier works 1");
                Bridge.Test.Assert.areEqual$1(99, v7[9], "Uint32Array indexier works 9");

                Bridge.Test.Assert.true$1(v7.buffer != null, "Uint32Array Buffer");
                Bridge.Test.Assert.areEqual$1(40, v7.byteLength, "Uint32Array ByteLength");
                Bridge.Test.Assert.areEqual$1(0, v7.byteOffset, "Uint32Array ByteOffset");
                Bridge.Test.Assert.areEqual$1(10, v7.length, "Uint32Array Length");

                var expectedToStringUint32Array1 = isToStringToTypeNameLogic ? "[object Uint32Array]" : "0,11,0,0,0,5,0,0,0,99";
                Bridge.Test.Assert.areEqual$1(expectedToStringUint32Array1, v7.toLocaleString(), "Uint32Array ToLocaleString");
                Bridge.Test.Assert.areEqual$1(expectedToStringUint32Array1, v7.toString(), "Uint32Array ToString");

                var subArray71 = v7.subarray(1);
                var expectedToStringUint32Array2 = isToStringToTypeNameLogic ? "[object Uint32Array]" : "11,0,0,0,5,0,0,0,99";
                Bridge.Test.Assert.true$1(subArray71 != null, "Uint32Array SubArray1");
                Bridge.Test.Assert.areEqual$1(9, subArray71.length, "Uint32Array SubArray1 Length");
                Bridge.Test.Assert.areEqual$1(expectedToStringUint32Array2, subArray71.toString(), "Uint32Array SubArray1 ToString");
                Bridge.Test.Assert.areEqual$1(4, subArray71.byteOffset, "Uint32Array SubArray1 ByteOffset");

                var subArray72 = subArray71.subarray(2, 6);
                var expectedToStringUint32Array3 = isToStringToTypeNameLogic ? "[object Uint32Array]" : "0,0,5,0";
                Bridge.Test.Assert.true$1(subArray72 != null, "Uint32Array SubArray2");
                Bridge.Test.Assert.areEqual$1(4, subArray72.length, "Uint32Array SubArray2 Length");
                Bridge.Test.Assert.areEqual$1(expectedToStringUint32Array3, subArray72.toString(), "Uint32Array SubArray2 ToString");
                Bridge.Test.Assert.areEqual$1(12, subArray72.byteOffset, "Uint32Array SubArray2 ByteOffset");

                var v8 = new Uint8Array(10);
                Bridge.Test.Assert.true$1(v8 != null, "Uint8Array created");

                v8[1] = 11;
                v8[5] = 5;
                v8[9] = 99;
                Bridge.Test.Assert.areEqual$1(11, v8[1], "Uint8Array indexier works 1");
                Bridge.Test.Assert.areEqual$1(99, v8[9], "Uint8Array indexier works 9");

                Bridge.Test.Assert.true$1(v8.buffer != null, "Uint8Array Buffer");
                Bridge.Test.Assert.areEqual$1(10, v8.byteLength, "Uint8Array ByteLength");
                Bridge.Test.Assert.areEqual$1(0, v8.byteOffset, "Uint8Array ByteOffset");
                Bridge.Test.Assert.areEqual$1(10, v8.length, "Uint8Array Length");

                var expectedToStringUint8Array1 = isToStringToTypeNameLogic ? "[object Uint8Array]" : "0,11,0,0,0,5,0,0,0,99";
                Bridge.Test.Assert.areEqual$1(expectedToStringUint8Array1, v8.toLocaleString(), "Uint8Array ToLocaleString");
                Bridge.Test.Assert.areEqual$1(expectedToStringUint8Array1, v8.toString(), "Uint8Array ToString");

                var subArray81 = v8.subarray(1);
                var expectedToStringUint8Array2 = isToStringToTypeNameLogic ? "[object Uint8Array]" : "11,0,0,0,5,0,0,0,99";
                Bridge.Test.Assert.true$1(subArray81 != null, "Uint8Array SubArray1");
                Bridge.Test.Assert.areEqual$1(9, subArray81.length, "Uint8Array SubArray1 Length");
                Bridge.Test.Assert.areEqual$1(expectedToStringUint8Array2, subArray81.toString(), "Uint8Array SubArray1 ToString");
                Bridge.Test.Assert.areEqual$1(1, subArray81.byteOffset, "Uint8Array SubArray1 ByteOffset");

                var subArray82 = subArray81.subarray(2, 6);
                var expectedToStringUint8Array3 = isToStringToTypeNameLogic ? "[object Uint8Array]" : "0,0,5,0";
                Bridge.Test.Assert.true$1(subArray82 != null, "Uint8Array SubArray2");
                Bridge.Test.Assert.areEqual$1(4, subArray82.length, "Uint8Array SubArray2 Length");
                Bridge.Test.Assert.areEqual$1(expectedToStringUint8Array3, subArray82.toString(), "Uint8Array SubArray2 ToString");
                Bridge.Test.Assert.areEqual$1(3, subArray82.byteOffset, "Uint8Array SubArray2 ByteOffset");

                var v9 = new Uint8ClampedArray(10);
                Bridge.Test.Assert.true$1(v9 != null, "Uint8ClampedArray created");

                v9[1] = 11;
                v9[5] = 5;
                v9[9] = 99;
                Bridge.Test.Assert.areEqual$1(11, v9[1], "Uint8ClampedArray indexier works 1");
                Bridge.Test.Assert.areEqual$1(99, v9[9], "Uint8ClampedArray indexier works 9");

                Bridge.Test.Assert.true$1(v9.buffer != null, "Uint8ClampedArray Buffer");
                Bridge.Test.Assert.areEqual$1(10, v9.byteLength, "Uint8ClampedArray ByteLength");
                Bridge.Test.Assert.areEqual$1(0, v9.byteOffset, "Uint8ClampedArray ByteOffset");
                Bridge.Test.Assert.areEqual$1(10, v9.length, "Uint8ClampedArray Length");

                var expectedToStringUint8ClampedArray1 = isToStringToTypeNameLogic ? "[object Uint8ClampedArray]" : "0,11,0,0,0,5,0,0,0,99";
                Bridge.Test.Assert.areEqual$1(expectedToStringUint8ClampedArray1, v9.toLocaleString(), "Uint8ClampedArray ToLocaleString");
                Bridge.Test.Assert.areEqual$1(expectedToStringUint8ClampedArray1, v9.toString(), "Uint8ClampedArray ToString");

                var subArray91 = v9.subarray(1);
                var expectedToStringUint8ClampedArray2 = isToStringToTypeNameLogic ? "[object Uint8ClampedArray]" : "11,0,0,0,5,0,0,0,99";
                Bridge.Test.Assert.true$1(subArray91 != null, "Uint8ClampedArray SubArray1");
                Bridge.Test.Assert.areEqual$1(9, subArray91.length, "Uint8ClampedArray SubArray1 Length");
                Bridge.Test.Assert.areEqual$1(expectedToStringUint8ClampedArray2, subArray91.toString(), "Uint8ClampedArray SubArray1 ToString");
                Bridge.Test.Assert.areEqual$1(1, subArray91.byteOffset, "Uint8ClampedArray SubArray1 ByteOffset");

                var subArray92 = subArray91.subarray(2, 6);
                var expectedToStringUint8ClampedArray3 = isToStringToTypeNameLogic ? "[object Uint8ClampedArray]" : "0,0,5,0";
                Bridge.Test.Assert.true$1(subArray92 != null, "Uint8ClampedArray SubArray2");
                Bridge.Test.Assert.areEqual$1(4, subArray92.length, "Uint8ClampedArray SubArray2 Length");
                Bridge.Test.Assert.areEqual$1(expectedToStringUint8ClampedArray3, subArray92.toString(), "Uint8ClampedArray SubArray2 ToString");
                Bridge.Test.Assert.areEqual$1(3, subArray92.byteOffset, "Uint8ClampedArray SubArray2 ByteOffset");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge550', {
        statics: {
            testMethod: function (array, name) {
                Bridge.Test.Assert.true$1(array != null, System.String.format("ArrayBufferView is an alias of {0}", name));
            },
            testUseCase: function () {
                var array1 = new Int8Array(1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge550.testMethod(array1, "Int8Array");

                var array2 = new Uint8Array(1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge550.testMethod(array2, "Uint8Array");

                var array3 = new Uint8ClampedArray(1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge550.testMethod(array3, "Uint8ClampedArray");

                var array4 = new Int16Array(1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge550.testMethod(array4, "Int16Array");

                var array5 = new Uint16Array(1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge550.testMethod(array5, "Uint16Array");

                var array6 = new Int32Array(1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge550.testMethod(array6, "Int32Array");

                var array7 = new Uint32Array(1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge550.testMethod(array7, "Uint32Array");

                var array8 = new Float32Array(1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge550.testMethod(array8, "Float32Array");

                var array9 = new Float64Array(1);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge550.testMethod(array9, "Float64Array");

                var array10 = new DataView(array9.buffer);
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge550.testMethod(array10, "DataView");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge554', {
        statics: {
            testUseCase: function () {
                var s = "0123456789";

                Bridge.Test.Assert.areEqual$1("01234", System.String.remove(s, 5), "Remove(5)");
                Bridge.Test.Assert.areEqual$1("012345678", System.String.remove(s, 9), "Remove(9)");
                Bridge.Test.Assert.areEqual$1("03456789", System.String.remove(s, 1, 2), "Remove(1, 2)");
                Bridge.Test.Assert.areEqual$1("0", System.String.remove(s, 1, 9), "Remove(1, 9)");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge555', {
        statics: {
            testUseCase: function () {
                var s = "0123456789";

                Bridge.Test.Assert.areEqual$1("0123456789", s.substring(-1), "JsSubstring(-1)");
                Bridge.Test.Assert.areEqual$1("56789", s.substring(5), "JsSubstring(5)");
                Bridge.Test.Assert.areEqual$1("", s.substring(10), "JsSubstring(10)");
                Bridge.Test.Assert.areEqual$1("1", s.substring(1, 2), "JsSubstring(1, 2)");
                Bridge.Test.Assert.areEqual$1("123456789", s.substring(1, 10), "JsSubstring(1, 10)");

                Bridge.Test.Assert.areEqual$1("9", s.substr(-1), "Substring(-1)");
                Bridge.Test.Assert.areEqual$1("56789", s.substr(5), "Substring(5)");
                Bridge.Test.Assert.areEqual$1("", s.substr(10), "Substring(10)");
                Bridge.Test.Assert.areEqual$1("12", s.substr(1, 2), "Substring(1, 2)");
                Bridge.Test.Assert.areEqual$1("123456789", s.substr(1, 10), "Substring(1, 10)");

                Bridge.Test.Assert.areEqual$1("9", s.substr(-1), "Substr(-1)");
                Bridge.Test.Assert.areEqual$1("56789", s.substr(5), "Substr(5)");
                Bridge.Test.Assert.areEqual$1("", s.substr(10), "Substr(10)");
                Bridge.Test.Assert.areEqual$1("12", s.substr(1, 2), "Substr(1, 2)");
                Bridge.Test.Assert.areEqual$1("123456789", s.substr(1, 10), "Substr(1, 10)");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge558', {
        statics: {
            testUseCase: function () {
                var a = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge558A();
                var b = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge558B();

                Bridge.Test.Assert.areEqual$1(1, a.zz(1), "Bridge558 a.zz int");
                Bridge.Test.Assert.areEqual$1(2, a.zz$1(""), "Bridge558 a.zz string");

                Bridge.Test.Assert.areEqual$1(1, b.zz(1), "Bridge558 b.zz int");
                Bridge.Test.Assert.areEqual$1(2, b.zz$1(""), "Bridge558 b.zz string");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge558A', {
        zz: function (a) {
            return 1;
        },
        zz$1: function (a) {
            return 2;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge559', {
        statics: {
            testUseCase1: function () {
                var b = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge559B1.$constructor1(1);

                Bridge.Test.Assert.areEqual$1(" -> Bridge559A1 -> Bridge559A1$1 -> Bridge559B1$1", b.result, "Bridge559 TestUseCase1");
            },
            testUseCase2: function () {
                var b = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge559B2.$constructor1(1);

                Bridge.Test.Assert.areEqual$1(" ClassA ClassA$1 ClassB$1", b.result, "Bridge559 TestUseCase2");
            },
            testUseCase3: function () {
                var a = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge559A3.$constructor(1);
                var b = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge559A3.$constructor(2);

                var r = System.String.concat(System.String.concat(a.getData(), "|"), b.getData());
                Bridge.Test.Assert.areEqual$1("1|2", r, "Bridge559 TestUseCase3");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge559A1', {
        result: "",
        constructor: function () {
            this.$initialize();
            this.result = System.String.concat(this.result, " -> Bridge559A1");
        },
        $constructor1: function (a) {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge559A1.$constructor.call(this);
            this.result = System.String.concat(this.result, " -> Bridge559A1$1");
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge559A2', {
        result: "",
        constructor: function () {
            this.$initialize();
            this.result = System.String.concat(this.result, " ClassA");
        },
        $constructor1: function (a) {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge559A2.$constructor.call(this);
            this.result = System.String.concat(this.result, " ClassA$1");
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge559A3', {
        config: {
            properties: {
                Data: null
            }
        },
        $constructor1: function (value) {
            this.$initialize();
            this.setData(value);
        },
        constructor: function (value) {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge559A3.$constructor1.call(this, value.toString());
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge563', {
        statics: {
            tesForeach: function () {
                var $t, $t1, $t2, $t3;
                var keys = ["1", "2", "3"];
                var handlers = System.Array.init(3, null);
                var i = 0;
                var result = "";

                $t = Bridge.getEnumerator(keys);
                while ($t.moveNext()) {
                    (function () {
                        var itm = $t.getCurrent();
                        handlers[((i++) | 0)] = function () {
                            result += itm;
                        };
                    }).call(this);
                }

                $t1 = Bridge.getEnumerator(handlers);
                while ($t1.moveNext()) {
                    var handler = $t1.getCurrent();
                    handler();
                }

                Bridge.Test.Assert.areEqual$1("123", result, "Bridge563 No block foreach loop");

                i = 0;
                result = "";

                $t2 = Bridge.getEnumerator(keys);
                while ($t2.moveNext()) {
                    (function () {
                        var itm1 = $t2.getCurrent();
                        handlers[((i++) | 0)] = function () {
                            result += itm1;
                        };
                    }).call(this);
                }

                $t3 = Bridge.getEnumerator(handlers);
                while ($t3.moveNext()) {
                    var handler1 = $t3.getCurrent();
                    handler1();
                }

                Bridge.Test.Assert.areEqual$1("123", result, "Bridge563 block foreach loop");
            },
            tesFor: function () {
                var $t;
                var keys = ["1", "2", "3"];
                var handlers = System.Array.init(3, null);
                var i = 0;
                var result = "";

                for (var j = 0; j < keys.length; ((j++) | 0)) {
                    (function () {
                        var itm = keys[j];
                        handlers[((i++) | 0)] = function () {
                            result += itm;
                        };
                    }).call(this);
                }

                $t = Bridge.getEnumerator(handlers);
                while ($t.moveNext()) {
                    var handler = $t.getCurrent();
                    handler();
                }

                Bridge.Test.Assert.areEqual$1("123", result, "Bridge563 For loop");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge566', {
        statics: {
            testUseCase: function () {
                var ted = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge566B();
                Bridge.Test.Assert.areEqual$1("Ted", ted.getData(), "#566 Ted");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge566A', {
        config: {
            properties: {
                Data: null
            }
        },
        constructor: function () {
            this.$initialize();
            this.setData(this.getName());
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge572', {
        statics: {
            testUseCase: function () {
                var d1 = new (System.Collections.Generic.Dictionary$2(System.Int32,String))();

                var d = Bridge.as(d1, System.Collections.Generic.IDictionary$2(System.Int32,String));

                d.System$Collections$Generic$IDictionary$2$System$Int32$String$add(1, "One");
                d.System$Collections$Generic$IDictionary$2$System$Int32$String$add(2, "Two");

                Bridge.Test.Assert.areEqual$1("One", d.System$Collections$Generic$IDictionary$2$System$Int32$String$getItem(1), "#572 getItem One");
                Bridge.Test.Assert.areEqual$1("Two", d.System$Collections$Generic$IDictionary$2$System$Int32$String$getItem(2), "#572 getItem Two");

                d.System$Collections$Generic$IDictionary$2$System$Int32$String$setItem(1, "New one");
                d.System$Collections$Generic$IDictionary$2$System$Int32$String$setItem(2, "New two");

                Bridge.Test.Assert.areEqual$1("New one", d.System$Collections$Generic$IDictionary$2$System$Int32$String$getItem(1), "#572 setItem New one");
                Bridge.Test.Assert.areEqual$1("New two", d.System$Collections$Generic$IDictionary$2$System$Int32$String$getItem(2), "#572 setItem New two");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge577', {
        statics: {
            someMethodA: function (j) {
                return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge577.Bridge577UnitA();
            },
            someMethodB: function (j) {
                var v = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge577.Bridge577UnitB();
                v.setNumber(j);

                return v.$clone();
            },
            testUseCase: function () {
                var a = Bridge.ClientTest.Batch3.BridgeIssues.Bridge577.someMethodA(1);
                Bridge.Test.Assert.notNull$1(a, "#577 Bridge577UnitA created");

                var b = Bridge.ClientTest.Batch3.BridgeIssues.Bridge577.someMethodB(7).$clone();
                Bridge.Test.Assert.areEqual$1(7, b.getNumber(), "#577 Bridge577UnitB created");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge577.Bridge577UnitA', {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge577.Bridge577UnitA(); }
        },
        $clone: function (to) { return this; }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge577.Bridge577UnitB', {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge577.Bridge577UnitB(); }
        },
        config: {
            properties: {
                Number: 0
            }
        },
        constructor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 1430308972;
            hash = hash * 23 + (this.Number == null ? 0 : Bridge.getHashCode(this.Number));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge577.Bridge577UnitB)) {
                return false;
            }
            return Bridge.equals(this.Number, o.Number);
        },
        $clone: function (to) {
            var s = to || new Bridge.ClientTest.Batch3.BridgeIssues.Bridge577.Bridge577UnitB();
            s.Number = this.Number;
            return s;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge578', {
        statics: {
            testUseCase: function () {
                var s = "ab|abc&ab&abc|de&ef&";

                var r = System.String.split(s, [124, 38].map(function(i) {{ return String.fromCharCode(i); }}));
                var expected = ["ab", "abc", "ab", "abc", "de", "ef", ""];

                Bridge.Test.Assert.areDeepEqual$1(expected, r, "#578 Split(params char[] separator)");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge580', {
        statics: {
            testUseCase: function () {
                var arrs = ["s1", "s2"];

                var intIndex;

                var dst = System.Array.init(2, null);
                intIndex = 0;
                System.Array.copy(arrs, 0, dst, intIndex, arrs.length);

                Bridge.Test.Assert.areEqual$1(2, dst.length, "Bridge580 Length Int");
                Bridge.Test.Assert.areEqual$1(arrs[0], dst[0], "Bridge580 0 Int");
                Bridge.Test.Assert.areEqual$1(arrs[1], dst[1], "Bridge580 1 Int");

                dst = System.Array.init(3, null);
                intIndex = 1;
                System.Array.copy(arrs, 0, dst, intIndex, arrs.length);

                Bridge.Test.Assert.areEqual$1(3, dst.length, "Bridge580 Length 3 Int");
                Bridge.Test.Assert.areEqual$1(arrs[1], dst[2], "Bridge580 1_1 Int");

                var longIndex;

                dst = System.Array.init(2, null);
                longIndex = System.Int64(0);
                System.Array.copy(arrs, 0, dst, longIndex.toNumber(), arrs.length);

                Bridge.Test.Assert.areEqual$1(2, dst.length, "Bridge580 Length Long");
                Bridge.Test.Assert.areEqual$1(arrs[0], dst[0], "Bridge580 0 Long");
                Bridge.Test.Assert.areEqual$1(arrs[1], dst[1], "Bridge580 1 Long");

                dst = System.Array.init(3, null);
                longIndex = System.Int64(1);
                System.Array.copy(arrs, 0, dst, longIndex.toNumber(), arrs.length);

                Bridge.Test.Assert.areEqual$1(3, dst.length, "Bridge580 Length 1 Long");
                Bridge.Test.Assert.areEqual$1(arrs[1], dst[2], "Bridge580 1_1 Long");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge582', {
        statics: {
            testAddTimeSpan: function () {
                var today = new Date(2006, 1 - 1, 1);
                var duration = new System.TimeSpan(36, 0, 0, 0);
                var answer = new Date((today).getTime() + ((duration).ticks.div(10000).toNumber()));

                Bridge.Test.Assert.areEqual$1(2006, answer.getFullYear(), "Bridge582 TestAddTimeSpan Year");
                Bridge.Test.Assert.areEqual$1(2, (answer.getMonth() + 1), "Bridge582 TestAddTimeSpan Month");
                Bridge.Test.Assert.areEqual$1(6, answer.getDate(), "Bridge582 TestAddTimeSpan Day");
                Bridge.Test.Assert.areEqual$1(0, answer.getHours(), "Bridge582 TestAddTimeSpan Hours");
                Bridge.Test.Assert.areEqual$1(0, answer.getMinutes(), "Bridge582 TestAddTimeSpan Minutes");
                Bridge.Test.Assert.areEqual$1(0, answer.getSeconds(), "Bridge582 TestAddTimeSpan Seconds");
            },
            testAddTicks: function () {
                var dt = new Date(2001, 1 - 1, 1);
                dt = new Date(System.Int64((dt).getTime()).add((System.Int64(20000000)).div(10000)).toNumber());

                Bridge.Test.Assert.areEqual$1(2001, dt.getFullYear(), "Bridge582 TestAddTicks Year");
                Bridge.Test.Assert.areEqual$1(1, (dt.getMonth() + 1), "Bridge582 TestAddTicks Month");
                Bridge.Test.Assert.areEqual$1(1, dt.getDate(), "Bridge582 TestAddTicks Day");
                Bridge.Test.Assert.areEqual$1(0, dt.getHours(), "Bridge582 TestAddTicks Hour");
                Bridge.Test.Assert.areEqual$1(0, dt.getMinutes(), "Bridge582 TestAddTicks Minute");
                Bridge.Test.Assert.areEqual$1(2, dt.getSeconds(), "Bridge582 TestAddTicks Second");
            },
            testTicks: function () {
                var centuryBegin = new Date(2001, 1 - 1, 1);
                var currentDate = new Date(2007, 12 - 1, 14, 15, 23);
                var elapsedTicks = System.Int64((currentDate).getTime()).mul(10000).sub(System.Int64((centuryBegin).getTime()).mul(10000));
                var elapsedSpan = new System.TimeSpan(elapsedTicks);

                Bridge.Test.Assert.areEqual$1(System.Int64([1836507648,510687]), elapsedTicks, "Bridge582 TestTicks ticks");
                Bridge.Test.Assert.areEqual$1(219338580, elapsedSpan.getTotalSeconds(), "Bridge582 TestTicks seconds");
                Bridge.Test.Assert.areEqual$1(3655643, elapsedSpan.getTotalMinutes(), "Bridge582 TestTicks minutes");
                Bridge.Test.Assert.areEqual$1(2538, elapsedSpan.getDays(), "Bridge582 TestTicks days");
                Bridge.Test.Assert.areEqual$1(15, elapsedSpan.getHours(), "Bridge582 TestTicks hours");
                Bridge.Test.Assert.areEqual$1(23, elapsedSpan.getMinutes(), "Bridge582 TestTicks minutes");
                Bridge.Test.Assert.areEqual$1(0, elapsedSpan.getSeconds(), "Bridge582 TestTicks minutes");
            },
            testSubtractTimeSpan: function () {
                var date1 = new Date(1996, 6 - 1, 3, 22, 15, 0);
                var date2 = new Date(1996, 12 - 1, 6, 13, 2, 0);
                var date3 = new Date(1996, 10 - 1, 12, 8, 42, 0);

                var diff1 = Bridge.Date.subdd(date2, date1);
                Bridge.Test.Assert.true$1(diff1.equalsT(new System.TimeSpan(185, 14, 47, 0)), "Bridge582 TestSubtractTimeSpan diff1");

                var date4 = new Date(date3 - new Date((diff1).ticks.div(10000).toNumber()));
                Bridge.Test.Assert.true$1(Bridge.equalsT(date4, new Date(1996, 4 - 1, 9, 17, 55, 0)), "Bridge582 TestSubtractTimeSpan date4");

                var diff2 = Bridge.Date.subdd(date2, date3);
                Bridge.Test.Assert.true$1(diff2.equalsT(new System.TimeSpan(55, 4, 20, 0)), "Bridge582 TestSubtractTimeSpan diff2");

                var date5 = Bridge.Date.subdt(date1, diff2);
                Bridge.Test.Assert.true$1(Bridge.equalsT(date5, new Date(1996, 4 - 1, 9, 17, 55, 0)), "Bridge582 TestSubtractTimeSpan date5");
            },
            testTimeOfDay: function () {
                var date = new Date(2013, 9 - 1, 14, 9, 28, 0);
                Bridge.Test.Assert.true$1(Bridge.equalsT(new Date(date.getFullYear(), date.getMonth(), date.getDate()), new Date(2013, 9 - 1, 14)), "Bridge582 TestTimeOfDay Date 2013, 9, 14, 9, 28, 0");
                Bridge.Test.Assert.true$1(Bridge.Date.timeOfDay(date).equalsT(new System.TimeSpan(9, 28, 0)), "Bridge582 TestTimeOfDay TimeOfDay 2013, 9, 14, 9, 28, 0");

                date = new Date(2011, 5 - 1, 28, 10, 35, 0);
                Bridge.Test.Assert.true$1(Bridge.equalsT(new Date(date.getFullYear(), date.getMonth(), date.getDate()), new Date(2011, 5 - 1, 28)), "Bridge582 TestTimeOfDay Date 2011, 5, 28, 10, 35, 0");
                Bridge.Test.Assert.true$1(Bridge.Date.timeOfDay(date).equalsT(new System.TimeSpan(10, 35, 0)), "Bridge582 TestTimeOfDay TimeOfDay 2011, 5, 28, 10, 35, 0");

                date = new Date(1979, 12 - 1, 25, 14, 30, 0);
                Bridge.Test.Assert.true$1(Bridge.equalsT(new Date(date.getFullYear(), date.getMonth(), date.getDate()), new Date(1979, 12 - 1, 25)), "Bridge582 TestTimeOfDay Date 1979, 12, 25, 14, 30, 0");
                Bridge.Test.Assert.true$1(Bridge.Date.timeOfDay(date).equalsT(new System.TimeSpan(14, 30, 0)), "Bridge582 TestTimeOfDay TimeOfDay 1979, 12, 25, 14, 30, 0");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge583', {
        statics: {
            testUseCase: function () {
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo(System.Decimal.toDecimalPlaces(System.Decimal(1.45), 1, 6), System.Decimal(1.4), "Bridge583 1");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo(System.Decimal.toDecimalPlaces(System.Decimal(1.55), 1, 6), System.Decimal(1.6), "Bridge583 2");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 4, 6), System.Decimal(123.4568), "Bridge583 3");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 6, 6), System.Decimal(123.456789), "Bridge583 4");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 8, 6), System.Decimal(123.456789), "Bridge583 5");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo(System.Decimal.toDecimalPlaces(System.Decimal(-123.456), 0, 6), System.Decimal(-123.0), "Bridge583 6");

                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(1.45), 1, 0), 1.5, "Bridge583 Up 1");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(1.55), 1, 0), 1.6, "Bridge583 Up 2");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 4, 0), 123.4568, "Bridge583 Up 3");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 6, 0), 123.456789, "Bridge583 Up 4");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 8, 0), 123.456789, "Bridge583 Up 5");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(-123.456), 0, 0), -124.0, "Bridge583 Up 6");

                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(1.45), 1, 4), 1.5, "Bridge583 AwayFromZero 1");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(1.55), 1, 4), 1.6, "Bridge583 AwayFromZero 2");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 4, 4), 123.4568, "Bridge583 AwayFromZero 3");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 6, 4), 123.456789, "Bridge583 AwayFromZero 4");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 8, 4), 123.456789, "Bridge583 AwayFromZero 5");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(-123.456), 0, 4), -123.0, "Bridge583 AwayFromZero 6");

                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(1.45), 1, 1), 1.4, "Bridge583 Down 1");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(1.55), 1, 1), 1.5, "Bridge583 Down 2");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 4, 1), 123.4567, "Bridge583 Down 3");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 6, 1), 123.456789, "Bridge583 Down 4");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 8, 1), 123.456789, "Bridge583 Down 5");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(-123.456), 0, 1), -123.0, "Bridge583 Down 6");

                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(1.45), 1, 2), 1.5, "Bridge583 InfinityPos 1");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(1.55), 1, 2), 1.6, "Bridge583 InfinityPos 2");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 4, 2), 123.4568, "Bridge583 InfinityPos 3");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 6, 2), 123.456789, "Bridge583 InfinityPos 4");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 8, 2), 123.456789, "Bridge583 InfinityPos 5");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(-123.456), 0, 2), -123.0, "Bridge583 InfinityPos 6");

                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(1.45), 1, 3), 1.4, "Bridge583 InfinityNeg 1");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(1.55), 1, 3), 1.5, "Bridge583 InfinityNeg 2");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 4, 3), 123.4567, "Bridge583 InfinityNeg 3");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 6, 3), 123.456789, "Bridge583 InfinityNeg 4");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 8, 3), 123.456789, "Bridge583 InfinityNeg 5");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(-123.456), 0, 3), -124.0, "Bridge583 InfinityNeg 6");

                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(1.45), 1, 5), 1.4, "Bridge583 TowardsZero 1");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(1.55), 1, 5), 1.5, "Bridge583 TowardsZero 2");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 4, 5), 123.4568, "Bridge583 TowardsZero 3");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 6, 5), 123.456789, "Bridge583 TowardsZero 4");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 8, 5), 123.456789, "Bridge583 TowardsZero 5");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(-123.456), 0, 5), -123.0, "Bridge583 TowardsZero 6");

                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(1.45), 1, 6), 1.4, "Bridge583 ToEven 1");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(1.55), 1, 6), 1.6, "Bridge583 ToEven 2");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 4, 6), 123.4568, "Bridge583 ToEven 3");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 6, 6), 123.456789, "Bridge583 ToEven 4");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 8, 6), 123.456789, "Bridge583 ToEven 5");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(-123.456), 0, 6), -123.0, "Bridge583 ToEven 6");

                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(1.45), 1, 7), 1.5, "Bridge583 Ceil 1");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(1.55), 1, 7), 1.6, "Bridge583 Ceil 2");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 4, 7), 123.4568, "Bridge583 Ceil 3");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 6, 7), 123.456789, "Bridge583 Ceil 4");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 8, 7), 123.456789, "Bridge583 Ceil 5");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(-123.456), 0, 7), -123.0, "Bridge583 Ceil 6");

                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(1.45), 1, 8), 1.4, "Bridge583 Floor 1");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(1.55), 1, 8), 1.5, "Bridge583 Floor 2");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 4, 8), 123.4568, "Bridge583 Floor 3");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 6, 8), 123.456789, "Bridge583 Floor 4");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(123.456789), 8, 8), 123.456789, "Bridge583 Floor 5");
                Bridge.ClientTest.Batch3.Utilities.DecimalHelper.assertIsDecimalAndEqualTo$1(System.Decimal.toDecimalPlaces(System.Decimal(-123.456), 0, 8), -123.0, "Bridge583 Floor 6");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge586', {
        statics: {
            testUseCase: function () {
                Bridge.Test.Assert.throws$5($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge586.f1, "a.SomeDataStatic is external");
                Bridge.Test.Assert.throws$5($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge586.f2, "a.DoSomethingStatic() is external");

                Bridge.Test.Assert.throws$5($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge586.f3, "b.SomeDataStatic is external");
                Bridge.Test.Assert.throws$5($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge586.f4, "b.DoSomethingStatic() is external");
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge586", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge586, {
        f1: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge586A.setSomeDataStatic(System.Decimal(4));
        },
        f2: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge586A.doSomethingStatic();
        },
        f3: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge586B.setSomeDataStatic(System.Decimal(4));
        },
        f4: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge586B.doSomethingStatic();
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge586A', {
        statics: {

        },

    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge588', {
        statics: {
            testUseCase1: function () {
                Bridge.Test.Assert.areEqual$1(3, Bridge.ClientTest.Batch3.BridgeIssues.Bridge588A.valeur3, "Bridge588 TestUseCase");
                Bridge.Test.Assert.areEqual$1("default", Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C.C1.getDefault().getValue().getName(), "Bridge588_2 TestUseCase");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge588A', {
        statics: {
            valeur3: 0,
            config: {
                init: function () {
                    this.valeur3 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge588A.add(Bridge.ClientTest.Batch3.BridgeIssues.Bridge588B.Valeur2, 1);
                }
            },
            add: function (a, b) {
                return ((a + b) | 0);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge588B', {
        statics: {
            Valeur1: 1,
            Valeur2: 2
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C', {
        statics: {
            testUseCase2: function () {
                var c2 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C.C2("C2 value");
                Bridge.Test.Assert.true$1(c2 != null, "Bridge588 C2");
                Bridge.Test.Assert.areEqual$1("C2 value", c2.getName(), "Bridge588 C2.Name");

                var c1 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C.C1(c2);
                Bridge.Test.Assert.true$1(c1 != null, "Bridge588 C1");
                Bridge.Test.Assert.areEqual$1("C2 value", c1.getValue().getName(), "Bridge588 C1.Value.Name");

                Bridge.Test.Assert.true$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C.C1.getDefault() != null, "Bridge588 C1.Default");
                Bridge.Test.Assert.true$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C.C1.getDefault().getValue() != null, "Bridge588 C1.Default.Value");
                Bridge.Test.Assert.areEqual$1("default", Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C.C1.getDefault().getValue().getName(), "Bridge588 C1.Default.Value.Name");
                Bridge.Test.Assert.true$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C.C2.getDefault() != null, "Bridge588 C2.Default");
                Bridge.Test.Assert.true$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C.C2.getDefault().getName() != null, "Bridge588 C2.Default.Name");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C.C1', {
        statics: {
            _default: null,
            config: {
                init: function () {
                    this._default = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C.C1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C.C2.getDefault());
                }
            },
            getDefault: function () {
                return Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C.C1._default;
            }
        },
        config: {
            properties: {
                Value: null
            }
        },
        constructor: function (value) {
            this.$initialize();
            this.setValue(value);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C.C2', {
        statics: {
            _default: null,
            config: {
                init: function () {
                    this._default = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C.C2("default");
                }
            },
            getDefault: function () {
                return Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C.C2._default;
            }
        },
        config: {
            properties: {
                Name: null
            }
        },
        constructor: function (name) {
            this.$initialize();
            this.setName(name);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge592', {
        statics: {
            testUseCase: function () {
                var i8_1 = -2;
                var i8_2 = Bridge.Int.sxb(((i8_1 >> 4)) & 255);
                var u8_1 = 254;
                var u8_2 = ((u8_1 >> 4)) & 255;

                var i16_1 = -2;
                var i16_2 = Bridge.Int.sxs(((i16_1 >> 8)) & 65535);
                var u16_1 = 65534;
                var u16_2 = ((u16_1 >> 8)) & 65535;

                var i32_1 = -2;
                var i32_2 = i32_1 >> 16;
                var u32_1 = 4294967294;
                var u32_2 = u32_1 >>> 16;

                Bridge.Test.Assert.areEqual$1(-1, i8_2, "Bridge592 i8_2");
                Bridge.Test.Assert.areEqual$1(15, u8_2, "Bridge592 u8_2");
                Bridge.Test.Assert.areEqual$1(-1, i16_2, "Bridge592 i16_2");
                Bridge.Test.Assert.areEqual$1(255, u16_2, "Bridge592 u16_2");
                Bridge.Test.Assert.areEqual$1(-1, i32_2, "Bridge592 i32_2");
                Bridge.Test.Assert.areEqual$1(65535, u32_2, "Bridge592 u32_2");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge595', {
        statics: {
            testUseCase: function () {
                var buffer = new System.Text.StringBuilder();
                var a = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge595A(buffer);
                a.render();
                Bridge.Test.Assert.areEqual$1("Render0Render1", buffer.toString(), "Bridge595 A");

                buffer.clear();
                var b = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge595B(buffer);
                b.render();
                Bridge.Test.Assert.areEqual$1("Render0Render1", buffer.toString(), "Bridge595 B");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge595A', {
        buffer: null,
        constructor: function (buffer) {
            this.$initialize();
            this.buffer = buffer;
        },
        render: function () {
            this.buffer.append("Render0");
            this.render$1(new Date());
        },
        render$1: function (when) {
            this.buffer.append("Render1");
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge595B', {
        statics: {
            render: function (buffer) {
                buffer.append("Render1");
            }
        },
        buffer: null,
        constructor: function (buffer) {
            this.$initialize();
            this.buffer = buffer;
        },
        render: function () {
            this.buffer.append("Render0");
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge595B.render(this.buffer);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge597', {
        statics: {
            testUseCase: function () {
                var inst = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge597A();
                Bridge.Test.Assert.areEqual$1("0:a", inst.get(), "Bridge597 Without instance member access");
                Bridge.Test.Assert.areEqual$1("HI!:0:a", inst.getWithMember(), "Bridge597 With instance member access");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge597A', {
        _something: "HI!",
        get: function () {
            var items = ["a"];
            var mappedItemsWithoutInstanceMemberAccess = System.Linq.Enumerable.from(items).select($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge597A.f1).toArray();
            return mappedItemsWithoutInstanceMemberAccess[0];
        },
        getWithMember: function () {
            var items = ["a"];
            var mappedItemsWithInstanceMemberAccess = System.Linq.Enumerable.from(items).select(Bridge.fn.bind(this, $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge597A.f2)).toArray();
            return mappedItemsWithInstanceMemberAccess[0];
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge597A", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge597A, {
        f1: function (value, index) {
            return System.String.concat(System.String.concat(index, ":"), value);
        },
        f2: function (value, index) {
            return System.String.concat(System.String.concat(System.String.concat(System.String.concat(this._something, ":"), index), ":"), value);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge603', {
        statics: {
            testUseCase: function () {
                var c = Bridge.ClientTest.Batch3.BridgeIssues.Bridge603A.op_Implicit(null);
                Bridge.Test.Assert.areEqual$1("[Null]", c.value, "Bridge603A TestUseCase Null");

                c = Bridge.ClientTest.Batch3.BridgeIssues.Bridge603A.op_Implicit("Test");
                Bridge.Test.Assert.areEqual$1("Test", c.value, "Bridge603A TestUseCase String");
            },
            testRelated: function () {
                var b = Bridge.ClientTest.Batch3.BridgeIssues.Bridge603B.op_Implicit$1(12345);
                Bridge.Test.Assert.areEqual$1(12345, b.intValue, "Bridge603B TestRelated Int");

                var c = Bridge.ClientTest.Batch3.BridgeIssues.Bridge603B.op_Implicit$2(null);
                Bridge.Test.Assert.areEqual$1("[Null]", c.value, "Bridge603B TestRelated String Null");

                c = Bridge.ClientTest.Batch3.BridgeIssues.Bridge603B.op_Implicit$2("Test");
                Bridge.Test.Assert.areEqual$1("Test", c.value, "Bridge603B TestRelated String");

                var d = Bridge.ClientTest.Batch3.BridgeIssues.Bridge603B.op_Implicit(null);
                Bridge.Test.Assert.areEqual$1("[Null]", d.value, "Bridge603B TestRelated Bridge603Class Null");

                d = Bridge.ClientTest.Batch3.BridgeIssues.Bridge603B.op_Implicit(Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge603Class(), {
                    setData: "Test 603B"
                } ));
                Bridge.Test.Assert.areEqual$1("Test 603B", d.value, "Bridge603B TestRelated Bridge603Class");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge603A', {
        $kind: "struct",
        statics: {
            op_Implicit: function (value) {
                var $t;
                value = ($t = value, $t != null ? $t : "[Null]");
                return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge603A.$constructor1(value);
            },
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge603A(); }
        },
        value: null,
        $constructor1: function (value) {
            this.$initialize();
            this.value = value;
        },
        constructor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + -701022801;
            hash = hash * 23 + (this.value == null ? 0 : Bridge.getHashCode(this.value));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge603A)) {
                return false;
            }
            return Bridge.equals(this.value, o.value);
        },
        $clone: function (to) {
            var s = to || new Bridge.ClientTest.Batch3.BridgeIssues.Bridge603A();
            s.value = this.value;
            return s;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge603B', {
        $kind: "struct",
        statics: {
            op_Implicit$2: function (value) {
                var $t;
                value = ($t = value, $t != null ? $t : "[Null]");
                return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge603B.$constructor3(value);
            },
            op_Implicit$1: function (value) {
                return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge603B.$constructor2(value);
            },
            op_Implicit: function (value) {
                value = value || Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge603Class(), {
                    setData: "[Null]"
                } );
                return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge603B.$constructor1(value);
            },
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge603B(); }
        },
        value: null,
        intValue: 0,
        $constructor3: function (value) {
            this.$initialize();
            this.value = value;
            this.intValue = 0;
        },
        $constructor2: function (value) {
            this.$initialize();
            this.value = null;
            this.intValue = value;
        },
        $constructor1: function (value) {
            this.$initialize();
            this.value = value.getData().toString();
            this.intValue = 0;
        },
        constructor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + -1104307328;
            hash = hash * 23 + (this.value == null ? 0 : Bridge.getHashCode(this.value));
            hash = hash * 23 + (this.intValue == null ? 0 : Bridge.getHashCode(this.intValue));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge603B)) {
                return false;
            }
            return Bridge.equals(this.value, o.value) && Bridge.equals(this.intValue, o.intValue);
        },
        $clone: function (to) {
            var s = to || new Bridge.ClientTest.Batch3.BridgeIssues.Bridge603B();
            s.value = this.value;
            s.intValue = this.intValue;
            return s;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge603Class', {
        config: {
            properties: {
                Data: null
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge606', {
        statics: {
            testUseCase: function () {
                var c = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge606C();
                c.example1("b", "a");
                Bridge.Test.Assert.areEqual$1("b", c.getX(), "Bridge606 C X");
                Bridge.Test.Assert.areEqual$1("a", c.getY(), "Bridge606 C Y");

                var b = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge606B("b", "a");
                Bridge.Test.Assert.areEqual$1("b", b.getX(), "Bridge606 B X");
                Bridge.Test.Assert.areEqual$1("a", b.getY(), "Bridge606 B Y");

                var s = Bridge.ClientTest.Batch3.BridgeIssues.Bridge606A.example2("123", "b", "a");
                Bridge.Test.Assert.areEqual$1("123 - b - a", s, "Bridge606 123");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge606A', {
        statics: {
            example2: function (source, x, y) {
                return System.String.concat(System.String.concat(System.String.concat(System.String.concat(source, " - "), x), " - "), y);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge606B', {
        config: {
            properties: {
                X: null,
                Y: null
            }
        },
        constructor: function (x, y) {
            this.$initialize();
            this.setX(x);
            this.setY(y);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge606C', {
        config: {
            properties: {
                X: null,
                Y: null
            }
        },
        example1: function (x, y) {
            this.setX(x);
            this.setY(y);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge607', {
        statics: {
            testUseCase: function () {
                var c = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge607A$1(String))();
                var c1 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge607B();

                Bridge.Test.Assert.true$1(c.equalsT(c), "Bridge607A c");
                Bridge.Test.Assert.false$1(c.equalsT(null), "Bridge607A null");

                Bridge.Test.Assert.true$1(c1.equalsT(c1), "Bridge607B c");
                Bridge.Test.Assert.false$1(c1.equalsT(null), "Bridge607B null");

                Bridge.Test.Assert.false$1(Bridge.equals(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge607C(), null), "Bridge607C null");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge607A$1', function (T) { return {
        inherits: function () { return [System.IEquatable$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge607A$1(T))]; },
        config: {
            alias: [
            "equalsT", "System$IEquatable$1$Bridge$ClientTest$Batch3$BridgeIssues$Bridge607A$1$" + Bridge.getTypeAlias(T) + "$equalsT"
            ]
        },
        equalsT: function (obj) {
            return Bridge.referenceEquals(this, obj);
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge607B', {
        inherits: function () { return [System.IEquatable$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge607B)]; },
        config: {
            alias: [
            "equalsT", "System$IEquatable$1$Bridge$ClientTest$Batch3$BridgeIssues$Bridge607B$equalsT"
            ]
        },
        equalsT: function (other) {
            return Bridge.referenceEquals(this, other);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge607C', {
        inherits: function () { return [System.IEquatable$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge607C)]; },
        System$IEquatable$1$Bridge$ClientTest$Batch3$BridgeIssues$Bridge607C$equalsT: function (other) {
            return Bridge.equals(this, other);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge608', {
        statics: {
            testUseCase: function () {
                var s = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge608A.$constructor1("test");
                var o = "test";
                Bridge.Test.Assert.true$1(s.equals(o), "Bridge608 Object");
                Bridge.Test.Assert.true$1(s.equals$1("test"), "Bridge608 String");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge608A', {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge608A(); }
        },
        field: null,
        $constructor1: function (field) {
            this.$initialize();
            this.field = field;
        },
        constructor: function () {
            this.$initialize();
        },
        equals: function (obj) {
            return this.equals$1(obj.toString());
        },
        equals$1: function (other) {
            return Bridge.referenceEquals(other, this.field);
        },
        getHashCode: function () {
            return Bridge.getHashCode(this.field);
        },
        $clone: function (to) { return this; }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge615', {
        statics: {
            testUseCase: function () {
                var i = 0;
                var o = null;

                Bridge.Test.Assert.areEqual$1("object", Bridge.ClientTest.Batch3.BridgeIssues.Bridge615A.method1$1(o), "Bridge615 object");
                Bridge.Test.Assert.areEqual$1("int", Bridge.ClientTest.Batch3.BridgeIssues.Bridge615A.method1(i), "Bridge615 int");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge615A', {
        statics: {
            method1$1: function (o) {
                return "object";
            },
            method1: function (i) {
                return "int";
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge623', {
        statics: {
            testUseCase: function () {
                var func1 = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge623.f1;

                var point1 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge623A(1, func1);
                var point2 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge623A(2, func1);

                Bridge.Test.Assert.areEqual$1(1, point1.call(), "Bridge623A point1 func1");
                Bridge.Test.Assert.areEqual$1(2, point2.call(), "Bridge623A point2 func1");

                var point3 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge623B1(3, func1);
                var point4 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge623B1(4, func1);

                Bridge.Test.Assert.areEqual$1(3, point3.call(), "Bridge623B1 point3 func1");
                Bridge.Test.Assert.areEqual$1(4, point4.call(), "Bridge623B1 point4 func1");

                var func2 = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge623.f2;

                var point5 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge623B1(5, func2);
                var point6 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge623B1(6, func2);

                Bridge.Test.Assert.areEqual$1(10, point5.call(), "Bridge623B1 point5 func2");
                Bridge.Test.Assert.areEqual$1(12, point6.call(), "Bridge623B1 point6 func2");

                var func3 = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge623.f2;

                var point7 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge623B2(7, func3);
                var point8 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge623B2(8, func3);

                Bridge.Test.Assert.areEqual$1(1021, point7.call(), "Bridge623B2 point7 func3");
                Bridge.Test.Assert.areEqual$1(1024, point8.call(), "Bridge623B2 point8 func3");
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge623", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge623, {
        f1: function () {
            return (Bridge.caller[0] || this).foo;
        },
        f2: function () {
            return (Bridge.caller[0] || this).getFoo();
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge623A', {
        foo: 0,
        func: null,
        constructor: function (foo, func) {
            this.$initialize();
            this.foo = foo;
            this.func = func;
        },
        call: function () {
            return this.func();
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge625', {
        statics: {
            testUseCase: function () {
                var list = [1, 2, 3];

                var d1 = System.Linq.Enumerable.from(list).toDictionary($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge625.f1, null, System.Int32, System.Int32);
                Bridge.Test.Assert.true$1(Bridge.hasValue(d1), "Bridge625 d1");

                var d2 = System.Linq.Enumerable.from(list).toDictionary($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge625.f1, null, System.Int32, System.Int32, new Bridge.ClientTest.Batch3.BridgeIssues.Bridge625A());
                Bridge.Test.Assert.true$1(Bridge.hasValue(d2), "Bridge625 d2");

                var d3 = System.Linq.Enumerable.from(list).toDictionary($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge625.f1, $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge625.f2, System.Int32, System.Int32);
                Bridge.Test.Assert.true$1(Bridge.hasValue(d3), "Bridge625 d3");

                var d4 = System.Linq.Enumerable.from(list).toDictionary($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge625.f1, $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge625.f2, System.Int32, System.Int32, new Bridge.ClientTest.Batch3.BridgeIssues.Bridge625A());
                Bridge.Test.Assert.true$1(Bridge.hasValue(d4), "Bridge625 d4");

                var content = new (System.Collections.Generic.Dictionary$2(Date,Array))();
                var dict1 = System.Linq.Enumerable.from(content).where($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge625.f3).toDictionary($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge625.f4, $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge625.f5, Date, Array);
                Bridge.Test.Assert.areEqual(0, dict1.getCount());
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge625", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge625, {
        f1: function (x) {
            return x;
        },
        f2: function (y) {
            return y;
        },
        f3: function (x) {
            return true;
        },
        f4: function (element) {
            return element.key;
        },
        f5: function (element) {
            return element.value;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge625A', {
        inherits: [System.Collections.Generic.IEqualityComparer$1(System.Int32)],
        config: {
            alias: [
            "equals2", "System$Collections$Generic$IEqualityComparer$1$System$Int32$equals2",
            "getHashCode2", "System$Collections$Generic$IEqualityComparer$1$System$Int32$getHashCode2"
            ]
        },
        equals2: function (x, y) {
            return x === y;
        },
        getHashCode2: function (obj) {
            return Bridge.getHashCode(obj);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge634', {
        statics: {
            testUseCase2: function () {
                var a = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1(String))();
                var a1 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1.Nested(String))();
                var a2 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1.Nested$1(String,System.Int32))();
                var a3 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1.Nested.SubNested(String))();
                var a4 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1.Nested.SubNested$1(String,System.Int32))();
                var a5 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1.Nested$1.SubNested(String,System.Int32))();
                var a6 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1.Nested$1.SubNested$1(String,System.Int32,System.Int32))();

                Bridge.Test.Assert.areEqual$1("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1[[String]]", Bridge.getTypeName(a), "Bridge634 A a");
                Bridge.Test.Assert.areEqual$1("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1.Nested[[String]]", Bridge.getTypeName(a1), "Bridge634 A a1");
                Bridge.Test.Assert.areEqual$1("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1.Nested$1[[String],[System.Int32, mscorlib]]", Bridge.getTypeName(a2), "Bridge634 A a2");
                Bridge.Test.Assert.areEqual$1("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1.Nested.SubNested[[String]]", Bridge.getTypeName(a3), "Bridge634 A a3");
                Bridge.Test.Assert.areEqual$1("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1.Nested.SubNested$1[[String],[System.Int32, mscorlib]]", Bridge.getTypeName(a4), "Bridge634 A a4");
                Bridge.Test.Assert.areEqual$1("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1.Nested$1.SubNested[[String],[System.Int32, mscorlib]]", Bridge.getTypeName(a5), "Bridge634 A a5");
                Bridge.Test.Assert.areEqual$1("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1.Nested$1.SubNested$1[[String],[System.Int32, mscorlib],[System.Int32, mscorlib]]", Bridge.getTypeName(a6), "Bridge634 A a6");

                var b = new (ClientTestLibraryCustom.Bridge634B$1(String))();
                var b1 = new (ClientTestLibraryCustom.Bridge634B$1.Nested(String))();
                var b2 = new (ClientTestLibraryCustom.Bridge634B$1.Nested$1(String,System.Int32))();
                var b3 = new (ClientTestLibraryCustom.Bridge634B$1.Nested.SubNested(String))();
                var b4 = new (ClientTestLibraryCustom.Bridge634B$1.Nested.SubNested$1(String,System.Int32))();
                var b5 = new (ClientTestLibraryCustom.Bridge634B$1.Nested$1.SubNested(String,System.Int32))();
                var b6 = new (ClientTestLibraryCustom.Bridge634B$1.Nested$1.SubNested$1(String,System.Int32,System.Int32))();

                Bridge.Test.Assert.areEqual$1("ClientTestLibraryCustom.Bridge634B$1[[String]]", Bridge.getTypeName(b), "Bridge634 B b");
                Bridge.Test.Assert.areEqual$1("ClientTestLibraryCustom.Bridge634B$1.Nested[[String]]", Bridge.getTypeName(b1), "Bridge634 B b1");
                Bridge.Test.Assert.areEqual$1("ClientTestLibraryCustom.Bridge634B$1.Nested$1[[String],[System.Int32, mscorlib]]", Bridge.getTypeName(b2), "Bridge634 B b2");
                Bridge.Test.Assert.areEqual$1("ClientTestLibraryCustom.Bridge634B$1.Nested.SubNested[[String]]", Bridge.getTypeName(b3), "Bridge634 B b3");
                Bridge.Test.Assert.areEqual$1("ClientTestLibraryCustom.Bridge634B$1.Nested.SubNested$1[[String],[System.Int32, mscorlib]]", Bridge.getTypeName(b4), "Bridge634 B b4");
                Bridge.Test.Assert.areEqual$1("ClientTestLibraryCustom.Bridge634B$1.Nested$1.SubNested[[String],[System.Int32, mscorlib]]", Bridge.getTypeName(b5), "Bridge634 B b5");
                Bridge.Test.Assert.areEqual$1("ClientTestLibraryCustom.Bridge634B$1.Nested$1.SubNested$1[[String],[System.Int32, mscorlib],[System.Int32, mscorlib]]", Bridge.getTypeName(b6), "Bridge634 B b6");

                var c = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C();
                var c1 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C.Nested();
                var c2 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C.Nested$1(System.Int32))();
                var c3 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C.Nested.SubNested();
                var c4 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C.Nested.SubNested$1(System.Int32))();
                var c5 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C.Nested$1.SubNested(System.Int32))();
                var c6 = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C.Nested$1.SubNested$1(System.Int32,System.Int32))();

                Bridge.Test.Assert.areEqual$1("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C", Bridge.getTypeName(c), "Bridge634 C c");
                Bridge.Test.Assert.areEqual$1("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C.Nested", Bridge.getTypeName(c1), "Bridge634 C c1");
                Bridge.Test.Assert.areEqual$1("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C.Nested$1[[System.Int32, mscorlib]]", Bridge.getTypeName(c2), "Bridge634 C c2");
                Bridge.Test.Assert.areEqual$1("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C.Nested.SubNested", Bridge.getTypeName(c3), "Bridge634 C c3");
                Bridge.Test.Assert.areEqual$1("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C.Nested.SubNested$1[[System.Int32, mscorlib]]", Bridge.getTypeName(c4), "Bridge634 C c4");
                Bridge.Test.Assert.areEqual$1("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C.Nested$1.SubNested[[System.Int32, mscorlib]]", Bridge.getTypeName(c5), "Bridge634 C c5");
                Bridge.Test.Assert.areEqual$1("Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C.Nested$1.SubNested$1[[System.Int32, mscorlib],[System.Int32, mscorlib]]", Bridge.getTypeName(c6), "Bridge634 C c6");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1', function (T) { return {

    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1.Nested', function (T) { return {

    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1.Nested.SubNested', function (T) { return {

    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1.Nested.SubNested$1', function (T, T1) { return {

    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1.Nested$1', function (T, T1) { return {

    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1.Nested$1.SubNested', function (T, T1) { return {

    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge634A$1.Nested$1.SubNested$1', function (T, T1, T2) { return {

    }; });

    Bridge.define('ClientTestLibraryCustom.Bridge634B$1', function (T) { return {

    }; });

    Bridge.define('ClientTestLibraryCustom.Bridge634B$1.Nested', function (T) { return {

    }; });

    Bridge.define('ClientTestLibraryCustom.Bridge634B$1.Nested.SubNested', function (T) { return {

    }; });

    Bridge.define('ClientTestLibraryCustom.Bridge634B$1.Nested.SubNested$1', function (T, T1) { return {

    }; });

    Bridge.define('ClientTestLibraryCustom.Bridge634B$1.Nested$1', function (T, T1) { return {

    }; });

    Bridge.define('ClientTestLibraryCustom.Bridge634B$1.Nested$1.SubNested', function (T, T1) { return {

    }; });

    Bridge.define('ClientTestLibraryCustom.Bridge634B$1.Nested$1.SubNested$1', function (T, T1, T2) { return {

    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C');

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C.Nested');

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C.Nested.SubNested');

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C.Nested.SubNested$1', function (T1) { return {

    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C.Nested$1', function (T1) { return {

    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C.Nested$1.SubNested', function (T1) { return {

    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge634C.Nested$1.SubNested$1', function (T1, T2) { return {

    }; });

    Bridge.define('Bridge634D');

    Bridge.define('Bridge634D.Nested');

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge635', {
        statics: {
            testUseCase: function () {
                var a = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge635A();
                var b = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge635B();

                Bridge.Test.Assert.areEqual$1("function", typeof a.internalFunc1, "Bridge635 A.internalFunc1");
                Bridge.Test.Assert.areEqual$1("A.Test1", a["internalFunc1"](), "Bridge635 A.internalFunc1 Invoke");

                Bridge.Test.Assert.areEqual$1("function", typeof b.internalFunc1, "Bridge635 B.internalFunc1");
                Bridge.Test.Assert.areEqual$1("B.Test1", b["internalFunc1"](), "Bridge635 B.internalFunc1 Invoke");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge635A', {
        internalFunc1: function () {
            return "A.Test1";
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge637', {
        statics: {
            testUseCase: function () {
                var Operator = 0;
                Bridge.Test.Assert.areEqual(Bridge.ClientTest.Batch3.BridgeIssues.Bridge637.Operator.Add, Operator);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge637.Operator', {
        $kind: "enum",
        statics: {
            Add: 0
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge647', {
        statics: {
            testUseCase: function () {
                var a = { bar: 1 };
                Bridge.Test.Assert.areEqual$1(1, a.bar, "Bridge647 A");

                var b = { bar: 1, bar1: 12 };
                Bridge.Test.Assert.areEqual$1(1, b.bar, "Bridge647 B bar");
                Bridge.Test.Assert.areEqual$1(12, b.bar1, "Bridge647 B bar1");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge648', {
        statics: {
            testUseCase: function () {
                var wrappedString = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge648A("test");
                var stringArray = System.Array.init(0, null);
                stringArray.push(Bridge.ClientTest.Batch3.BridgeIssues.Bridge648A.op_Implicit(wrappedString));

                Bridge.Test.Assert.areEqual("test", stringArray[0]);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge648A', {
        statics: {
            op_Implicit: function (value) {
                return value.getValue();
            }
        },
        config: {
            properties: {
                Value: null
            }
        },
        constructor: function (value) {
            this.$initialize();
            this.setValue(value);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge652', {
        statics: {
            log: null,
            testUseCase: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge652.log = null;
                var c = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge652.Bridge652A1();
                Bridge.Test.Assert.areNotEqual$1(null, c.bar, "Bridge652A1 Bar NotNull");
                Bridge.Test.Assert.areEqual$1("Bridge652B1", Bridge.ClientTest.Batch3.BridgeIssues.Bridge652.log, "Bridge652A1 log");

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge652.log = null;
                var d = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge652.Bridge652A2();
                Bridge.Test.Assert.areNotEqual$1(null, d.bar, "Bridge652A2 Bar NotNull");
                Bridge.Test.Assert.areEqual$1("Bridge652B2", Bridge.ClientTest.Batch3.BridgeIssues.Bridge652.log, "Bridge652A2 log");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge652.Bridge652B1', {
        constructor: function () {
            this.$initialize();
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge652.log = "Bridge652B1";
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge652.Bridge652C$1', function (T) { return {
        bar: Bridge.getDefaultValue(T),
        constructor: function () {
            this.$initialize();
            this.bar = Bridge.createInstance(T);
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge652.Bridge652B2', {
        inherits: [System.IComparable],
        config: {
            alias: [
            "compareTo", "System$IComparable$compareTo"
            ]
        },
        constructor: function () {
            this.$initialize();
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge652.log = "Bridge652B2";
        },
        compareTo: function (obj) {
            return 0;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge652.Bridge652D$1', function (T) { return {
        bar: Bridge.getDefaultValue(T),
        constructor: function () {
            this.$initialize();
            this.bar = Bridge.createInstance(T);
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge655', {
        statics: {
            testUseCase: function () {
                var item11 = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge655.f1;
                Bridge.Test.Assert.areEqual$1(false, Bridge.ClientTest.Batch3.BridgeIssues.Bridge655A.isNullOrUndefined(item11), "Bridge655 IsNullOrUndefined11");
                Bridge.Test.Assert.areEqual$1(11, item11(), "Bridge655 item11");

                var item12 = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge655.f2;
                Bridge.Test.Assert.areEqual$1(false, Bridge.ClientTest.Batch3.BridgeIssues.Bridge655A.isNullOrUndefined(item12), "Bridge655 IsNullOrUndefined12");
                Bridge.Test.Assert.areEqual$1(12, item12(12), "Bridge655 item12");

                var item21 = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge655.f3;
                Bridge.Test.Assert.areEqual$1(false, Bridge.ClientTest.Batch3.BridgeIssues.Bridge655A.isNullOrUndefined$1(item21, 21), "Bridge655 IsNullOrUndefined21 false");
                Bridge.Test.Assert.areEqual$1(true, Bridge.ClientTest.Batch3.BridgeIssues.Bridge655A.isNullOrUndefined$1(item21, 0), "Bridge655 IsNullOrUndefined21 true");
                Bridge.Test.Assert.areEqual$1(21, item21(), "Bridge655 item21");

                var item22 = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge655.f4;
                Bridge.Test.Assert.areEqual$1("false", Bridge.ClientTest.Batch3.BridgeIssues.Bridge655A.isNullOrUndefined$2(item22, "22"), "Bridge655 IsNullOrUndefined22 false");
                Bridge.Test.Assert.areEqual$1("true", Bridge.ClientTest.Batch3.BridgeIssues.Bridge655A.isNullOrUndefined$2(item22, ""), "Bridge655 IsNullOrUndefined22 true");
                Bridge.Test.Assert.areEqual$1(22, item22(19, "two"), "Bridge655 item22");

                var item32 = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge655.f5;
                Bridge.Test.Assert.areEqual$1("false", Bridge.ClientTest.Batch3.BridgeIssues.Bridge655A.isNullOrUndefined$2(item32, "32"), "Bridge655 IsNullOrUndefined32 false");
                Bridge.Test.Assert.areEqual$1("true", Bridge.ClientTest.Batch3.BridgeIssues.Bridge655A.isNullOrUndefined$2(item32, ""), "Bridge655 IsNullOrUndefined32 true");
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge655", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge655, {
        f1: function () {
            return 11;
        },
        f2: function (i) {
            return i;
        },
        f3: function () {
            return 21;
        },
        f4: function (i, s) {
            return ((i + s.length) | 0);
        },
        f5: function (i, s) {
            var b = i === s.length;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge655A', {
        statics: {
            isNullOrUndefined: function (subject) {
                return Bridge.referenceEquals(subject, undefined) || subject == null;
            },
            isNullOrUndefined$1: function (subject, i) {
                return Bridge.referenceEquals(subject, undefined) || subject == null || i === 0;
            },
            isNullOrUndefined$2: function (subject, s) {
                if (Bridge.referenceEquals(subject, undefined) || subject == null || System.String.isNullOrEmpty(s)) {
                    return "true";
                }

                return "false";
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge658', {
        statics: {
            testUseCase: function () {
                var d = new Bridge634D();
                var d1 = new Bridge634D.Nested();

                Bridge.Test.Assert.areEqual$1("Bridge634D", Bridge.getTypeName(d), "Bridge634 D d");
                Bridge.Test.Assert.areEqual$1("Bridge634D.Nested", Bridge.getTypeName(d1), "Bridge634 D d1");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge660', {
        statics: {
            testUseCase: function () {
                Bridge.Test.Assert.areEqual$1("Message", Bridge.ClientTest.Batch3.BridgeIssues.Bridge660MessageStore._initialEditState.getContent().getText(), "Bridge660 Initialize static members before first access to the class");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge660MessageEditState', {
        config: {
            properties: {
                Content: null
            }
        },
        constructor: function (content) {
            this.$initialize();
            this.setContent(content);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge660MessageStore', {
        statics: {
            _initialEditState: null,
            config: {
                init: function () {
                    this._initialEditState = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge660MessageEditState(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge660TextInputState.$constructor("Message"));
                }
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge660Optional$1', function (T) { return {
        $kind: "struct",
        statics: {
            config: {
                init: function () {
                    this._missing = new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge660Optional$1(T)).$constructor2(Bridge.getDefaultValue(T), false);
                }
            },
            getMissing: function () {
                return Bridge.ClientTest.Batch3.BridgeIssues.Bridge660Optional$1(T)._missing.$clone();
            },
            getDefaultValue: function () { return new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge660Optional$1(T))(); }
        },
        value: Bridge.getDefaultValue(T),
        isDefined: false,
        $constructor1: function (value) {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge660Optional$1(T).$constructor2.call(this, value, value != null);
        },
        $constructor2: function (value, isDefined) {
            this.$initialize();
            this.isDefined = (value != null);
            this.value = value;
        },
        constructor: function () {
            this.$initialize();
        },
        getIsDefined: function () {
            return this.isDefined;
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 390689245;
            hash = hash * 23 + (this.value == null ? 0 : Bridge.getHashCode(this.value));
            hash = hash * 23 + (this.isDefined == null ? 0 : Bridge.getHashCode(this.isDefined));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge660Optional$1(T))) {
                return false;
            }
            return Bridge.equals(this.value, o.value) && Bridge.equals(this.isDefined, o.isDefined);
        },
        $clone: function (to) {
            var s = to || new (Bridge.ClientTest.Batch3.BridgeIssues.Bridge660Optional$1(T))();
            s.value = this.value;
            s.isDefined = this.isDefined;
            return s;
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge660TextInputState', {
        config: {
            properties: {
                Text: null
            }
        },
        constructor: function (text) {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge660TextInputState.$constructor1.call(this, text, Bridge.ClientTest.Batch3.BridgeIssues.Bridge660Optional$1(String).getMissing());
        },
        $constructor1: function (text, validationError) {
            this.$initialize();
            this.setText(text);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge661', {
        statics: {
            example1: function (exampleInput) {
                if (exampleInput === void 0) { exampleInput = 0; }
                return exampleInput === 0;
            },
            example2: function (exampleInput) {
                if (exampleInput === void 0) { exampleInput = 49; }
                return exampleInput === 49;
            },
            testUseCase: function () {
                Bridge.Test.Assert.areEqual$1(true, Bridge.ClientTest.Batch3.BridgeIssues.Bridge661.example1(), "Bridge661 Example1 true default");
                Bridge.Test.Assert.areEqual$1(true, Bridge.ClientTest.Batch3.BridgeIssues.Bridge661.example1(0), "Bridge661 Example1 true");
                Bridge.Test.Assert.areEqual$1(false, Bridge.ClientTest.Batch3.BridgeIssues.Bridge661.example1(65), "Bridge661 Example1 false");

                Bridge.Test.Assert.areEqual$1(true, Bridge.ClientTest.Batch3.BridgeIssues.Bridge661.example2(), "Bridge661 Example2 true default");
                Bridge.Test.Assert.areEqual$1(true, Bridge.ClientTest.Batch3.BridgeIssues.Bridge661.example2(49), "Bridge661 Example2 true");
                Bridge.Test.Assert.areEqual$1(false, Bridge.ClientTest.Batch3.BridgeIssues.Bridge661.example2(0), "Bridge661 Example2 false");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge664', {
        statics: {
            testUseCase: function () {
                var f = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge664.f1;
                // if cast will be emitted then exception will be thrown because Bridge664A is not emitted
                Bridge.Test.Assert.areEqual$1("test", f("test"), "Bridge664");

                Bridge.Test.Assert.throws$5($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge664.f2, "Bridge664 Should throw exception");
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge664", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge664, {
        f1: function (s) {
            return s;
        },
        f2: function () {
            var b = { };
            var s = Bridge.cast(b, Bridge.ClientTest.Batch3.BridgeIssues.Bridge664B);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge666', {
        statics: {
            testUseCase: function () {
                Bridge.Test.Assert.areEqual$1(360, Bridge.ClientTest.Batch3.BridgeIssues.Bridge666.getSum(), "Bridge666 GetSum 360");
            },
            getSum: function () {
                var $t;
                var sum = 0;
                var numbers = [1, 2, 3];

                $t = Bridge.getEnumerator(numbers);
                while ($t.moveNext()) {
                    (function () {
                        var n = $t.getCurrent();
                        var func = function (i) {
                            var $t1;
                            var bigNumbers = [10, 20, 30];
                            $t1 = Bridge.getEnumerator(bigNumbers);
                            while ($t1.moveNext()) {
                                var bn = $t1.getCurrent();
                                sum = (sum + ((i * bn) | 0)) | 0;
                            }
                        };

                        func(n);
                    }).call(this);
                }

                return sum;
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge671', {
        statics: {
            testUseCase: function () {
                Bridge.Test.Assert.areEqual(1, new Bridge.ClientTest.Batch3.BridgeIssues.Bridge671().invoke());
            }
        },
        one: 1,
        getOne: function () {
            return this.one;
        },
        invoke: function () {
            var b = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge671A(Bridge.fn.bind(this, this.getOne));
            return b.invoke();
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge671A', {
        func: null,
        constructor: function (func) {
            this.$initialize();
            this.func = func;
        },
        invoke: function () {
            return this.func();
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge674', {
        statics: {
            testUndefinedToReferenceType: function () {
                // Undefined is considerd as null by default
                // In .Net the code below produces null and does not fail. Changing the test to reflect this
                var o = undefined;

                Bridge.Test.Assert.areEqual$1(undefined, Bridge.cast(o, String), "Cast 'undefined' to string results in undefined");
                Bridge.Test.Assert.areEqual$1(undefined, Bridge.cast(o, Array), "Cast 'undefined' to int[] results in undefined");
            },
            testUndefinedToValueType: function () {
                var o = undefined;
                Bridge.Test.Assert.throws$5(function () {
                    var i = System.Nullable.getValue(Bridge.cast(o, System.Int32));
                }, "Unable to cast 'undefined' to type int");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge675', {
        statics: {
            testUseCase: function () {
                var me = Bridge.global.Bridge.ClientTest.Batch3.BridgeIssues.Bridge675;
                me.id = "str1";
                me.i1 = 1;
                me.i2 = 2;

                Bridge.Test.Assert.areEqual$1("str1", me.dynMethod(me.id), "Bridge675 DynMethod");
                Bridge.Test.Assert.areEqual$1("str1", Bridge.ClientTest.Batch3.BridgeIssues.Bridge675.method1$1(me.id), "Bridge675 Method1 id");
                Bridge.Test.Assert.areEqual$1(3, Bridge.ClientTest.Batch3.BridgeIssues.Bridge675.method1(me.i1, me.i2), "Bridge675 Method1 i1 i2");
            },
            dynMethod: function (s) {
                return s;
            },
            method1$1: function (s) {
                return s;
            },
            method1: function (i1, i2) {
                return ((i1 + i2) | 0);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge687', {
        statics: {
            testUseCase: function () {
                var c = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge687A(null);
                var case1 = false;
                if (c == null) {
                    case1 = true;
                }
                Bridge.Test.Assert.areEqual$1(false, case1, "Bridge687 case1");

                c = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge687A("test");
                var case2 = false;
                if (Bridge.referenceEquals(Bridge.ClientTest.Batch3.BridgeIssues.Bridge687A.op_Implicit(c), "test")) {
                    case2 = true;
                }
                Bridge.Test.Assert.areEqual$1(true, case2, "Bridge687 case2");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge687A', {
        statics: {
            op_Implicit: function (value) {
                return value.getValue();
            }
        },
        config: {
            properties: {
                Value: null
            }
        },
        constructor: function (value) {
            this.$initialize();
            this.setValue(value);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge689', {
        statics: {
            testUseCase: function () {
                var fn1 = function (value) { return parseInt(value); };
                Bridge.Test.Assert.areEqual$1(5, fn1("5"), "Bridge689 should equals 5");

                var fn2 = function (value) { return parseInt(value); };
                Bridge.Test.Assert.areEqual$1(6, fn2("6"), "Bridge689 should equals 6");

                //object a = 7;
                //Func<object, bool> fn3 = a.BridgeEquals;
                //Assert.AreEqual(fn3("7"), 7, "Bridge689 should equals 7");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge690', {
        statics: {
            testUseCaseForInstance: function () {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    done, 
                    c, 
                    r, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    done = Bridge.Test.Assert.async();
                                    c = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge690A();
                                    $task1 = c.start();
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    r = $taskResult1;

                                    Bridge.Test.Assert.areEqual$1(8, r, "Bridge690 TestUseCaseForInstance");
                                    done();
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            },
            testUseCaseForStatic: function () {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    done, 
                    r, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    done = Bridge.Test.Assert.async();
                                    $task1 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge690B.start();
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    r = $taskResult1;

                                    Bridge.Test.Assert.areEqual$1(59, r, "Bridge690 TestUseCaseForStatic");
                                    done();
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge690A', {
        i3: 3,
        asyncSum: function (i1, i2) {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                $returnValue, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    $task1 = System.Threading.Tasks.Task.delay(100);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getAwaitedResult();
                                    $tcs.setResult(((((i1 + i2) | 0) + this.i3) | 0));
                                    return;
                                }
                                default: {
                                    $tcs.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);

            $asyncBody();
            return $tcs.task;
        },
        start: function () {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                $returnValue, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    $task1 = this.asyncSum(2, 3);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    $tcs.setResult($taskResult1);
                                    return;
                                }
                                default: {
                                    $tcs.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);

            $asyncBody();
            return $tcs.task;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge690B', {
        statics: {
            i3: 17,
            asyncSum: function (i1, i2) {
                var $step = 0,
                    $task1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        $task1 = System.Threading.Tasks.Task.delay(100);
                                        $step = 1;
                                        $task1.continueWith($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $task1.getAwaitedResult();
                                        $tcs.setResult(((((i1 + i2) | 0) + Bridge.ClientTest.Batch3.BridgeIssues.Bridge690B.i3) | 0));
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            start: function () {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        $task1 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge690B.asyncSum(19, 23);
                                        $step = 1;
                                        $task1.continueWith($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        $tcs.setResult($taskResult1);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge691', {
        statics: {
            testUseCase: function () {
                var pos = 0;
                var lines = ["", "", "str"];
                while (pos < lines.length) {
                    while (pos < lines.length && lines[pos].length === 0) {
                        pos = (pos + 1) | 0;
                    }

                    if (!(pos < lines.length)) {
                        break;
                    }

                    var a = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge691.f1;

                    if (pos > 0) {
                        break;
                    }
                }

                Bridge.Test.Assert.areEqual$1(2, pos, "Bridge691");
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge691", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge691, {
        f1: function (p) {
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge692', {
        statics: {
            testUseCase: function () {
                var a = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.A();
                Bridge.Test.Assert.areEqual$1(a, a, "Bridge692 A");

                var b1 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.B1.$constructor();
                Bridge.Test.Assert.areEqual$1(b1, b1, "Bridge692 B1");

                var b2 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.B1.$constructor();
                Bridge.Test.Assert.areEqual$1(b2, b2, "Bridge692 B2");

                var b3 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.B3();
                Bridge.Test.Assert.areEqual$1(b3, b3, "Bridge692 B3");

                var c1 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.C1.$constructor();
                Bridge.Test.Assert.areNotStrictEqual$1(c1.$clone(), c1.$clone(), "Bridge692 C1");

                var c2 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.C2.$constructor();
                Bridge.Test.Assert.areNotStrictEqual$1(c2.$clone(), c2.$clone(), "Bridge692 C2");

                var c3 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.C3();
                Bridge.Test.Assert.areNotStrictEqual$1(c3.$clone(), c3.$clone(), "Bridge692 C3");

                var c3_1 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.C3();
                Bridge.Test.Assert.areNotStrictEqual$1(System.Nullable.lift1("$clone", c3_1), System.Nullable.lift1("$clone", c3_1), "Bridge692 C3_1");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.A', {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.A(); }
        },
        $clone: function (to) { return this; }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.B1', {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.B1(); }
        },
        field1: 0,
        $constructor1: function (f) {
            this.$initialize();
            this.field1 = f;
        },
        constructor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + -1467239093;
            hash = hash * 23 + (this.field1 == null ? 0 : Bridge.getHashCode(this.field1));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.B1)) {
                return false;
            }
            return Bridge.equals(this.field1, o.field1);
        },
        $clone: function (to) { return this; }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.B2', {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.B2(); }
        },
        field1: 0,
        $constructor1: function (f) {
            this.$initialize();
            this.field1 = f;
        },
        constructor: function () {
            this.$initialize();
        },
        getProp1: function () {
            return this.field1;
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + -1063954566;
            hash = hash * 23 + (this.field1 == null ? 0 : Bridge.getHashCode(this.field1));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.B2)) {
                return false;
            }
            return Bridge.equals(this.field1, o.field1);
        },
        $clone: function (to) { return this; }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.B3', {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.B3(); }
        },
        constructor: function () {
            this.$initialize();
        },
        getProp1: function () {
            return 0;
        },
        $clone: function (to) { return this; }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.C1', {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.C1(); }
        },
        field1: 0,
        $constructor1: function (i) {
            this.$initialize();
            this.field1 = i;
        },
        constructor: function () {
            this.$initialize();
        },
        getProp1: function () {
            return this.field1;
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + -1467239094;
            hash = hash * 23 + (this.field1 == null ? 0 : Bridge.getHashCode(this.field1));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.C1)) {
                return false;
            }
            return Bridge.equals(this.field1, o.field1);
        },
        $clone: function (to) {
            var s = to || new Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.C1();
            s.field1 = this.field1;
            return s;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.C2', {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.C2(); }
        },
        field1: 0,
        $constructor1: function (i) {
            this.$initialize();
            this.field1 = i;
        },
        constructor: function () {
            this.$initialize();
        },
        getProp1: function () {
            return this.field1;
        },
        setProp1: function (value) {
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + -1063954567;
            hash = hash * 23 + (this.field1 == null ? 0 : Bridge.getHashCode(this.field1));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.C2)) {
                return false;
            }
            return Bridge.equals(this.field1, o.field1);
        },
        $clone: function (to) {
            var s = to || new Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.C2();
            s.field1 = this.field1;
            return s;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.C3', {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.C3(); }
        },
        config: {
            properties: {
                Prop1: 0
            }
        },
        constructor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 1664928788;
            hash = hash * 23 + (this.Prop1 == null ? 0 : Bridge.getHashCode(this.Prop1));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.C3)) {
                return false;
            }
            return Bridge.equals(this.Prop1, o.Prop1);
        },
        $clone: function (to) {
            var s = to || new Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.C3();
            s.Prop1 = this.Prop1;
            return s;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge693', {
        statics: {
            testUseCase: function () {
                var c = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge693B();
                Bridge.Test.Assert.areNotEqual$1(null, c, "Bridge693 not null");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge693A$1', function (T) { return {
        constructor: function (props) {
            this.$initialize();
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.IBridge693D', {
        $kind: "interface"
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge694', {
        statics: {
            testUseCase: function () {
                var fruits = System.Array.init(3, null);
                fruits[0] = "mango";
                fruits[1] = "apple";
                fruits[2] = "lemon";

                var list = System.Linq.Enumerable.from(fruits).select(function(x) { return Bridge.cast(x, String); }).orderBy($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge694.f1).select($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge694.f1).toList(String);
                Bridge.Test.Assert.areEqual$1("apple", list.getItem(0), "Bridge694 apple");
                Bridge.Test.Assert.areEqual$1("lemon", list.getItem(1), "Bridge694 lemon");
                Bridge.Test.Assert.areEqual$1("mango", list.getItem(2), "Bridge694 mango");
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge694", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge694, {
        f1: function (fruit) {
            return fruit;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge696', {
        statics: {
            testUseCase: function () {
                var namedCallbacks = new (System.Collections.Generic.Dictionary$2(String,Function))();
                namedCallbacks.add("Shout", $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge696.f1);
                namedCallbacks.add("Whisper", $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge696.f1);

                Bridge.Test.Assert.areEqual$1(6, namedCallbacks.get("Shout")("HELLO!"), "Bridge696 HELLO!");
                Bridge.Test.Assert.areEqual$1(5, namedCallbacks.get("Whisper")("HELLO"), "Bridge696 HELLO");
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge696", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge696, {
        f1: function (message) {
            return message.length;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge699', {
        statics: {
            testUseCase: function () {
                var blob1 = new Blob(["blobData1"], { type: "text/richtext", endings: "transparent" });

                Bridge.Test.Assert.areNotEqual$1(null, blob1, "blob1 is not null");
                Bridge.Test.Assert.areEqual$1(9, blob1.size, "blob1.Size equals 9");
                Bridge.Test.Assert.areEqual$1("text/richtext", blob1.type, "blob1.Type equals 'text/richtext'");

                var blob2 = new Blob(["data2"]);
                Bridge.Test.Assert.areNotEqual$1(null, blob2, "blob2 is not null");
                Bridge.Test.Assert.areEqual$1(5, blob2.size, "blob2.Size equals 5");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge706', {
        statics: {
            value: 7,
            testFieldPropertyWithInitializer: function () {
                Bridge.Test.Assert.areEqual(7, Bridge.ClientTest.Batch3.BridgeIssues.Bridge706.value);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge708', {
        statics: {
            testUseCase: function () {
                Bridge.Test.Assert.areEqual$1(12, Bridge.ClientTest.Batch3.BridgeIssues.Bridge708.testIssue(), "Bridge708 TestIssue");
            },
            testIssue: function () {
                var sum = 0;
                var f = function () {
                    var $t;
                    $t = Bridge.getEnumerator([1, 2, 3]);
                    while ($t.moveNext()) {
                        (function () {
                            var n = $t.getCurrent();
                            var g = function (i) {
                                sum = (sum + i) | 0;
                            };
                            g(n);
                        }).call(this);
                    }
                    var h = function () {
                        sum = (sum * 2) | 0;
                    };
                    h();
                };

                f();

                return sum;
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge721', {
        statics: {
            testUseCase: function () {
                var testList = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge721.f1(new (System.Collections.Generic.List$1(System.Int32))());
                Bridge.Test.Assert.areEqual$1("ThirdLoop", Bridge.ClientTest.Batch3.BridgeIssues.Bridge721.check(testList), "Bridge721 ThirdLoop");

                testList = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge721.f2(new (System.Collections.Generic.List$1(System.Int32))());
                Bridge.Test.Assert.areEqual$1("SecondLoop", Bridge.ClientTest.Batch3.BridgeIssues.Bridge721.check(testList), "Bridge721 SecondLoop");

                testList = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge721.f3(new (System.Collections.Generic.List$1(System.Int32))());
                Bridge.Test.Assert.areEqual$1("FirstLoop", Bridge.ClientTest.Batch3.BridgeIssues.Bridge721.check(testList), "Bridge721 FirstLoop");

                testList = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge721.f4(new (System.Collections.Generic.List$1(System.Int32))());
                Bridge.Test.Assert.areEqual$1("NoLoops", Bridge.ClientTest.Batch3.BridgeIssues.Bridge721.check(testList), "Bridge721 NoLoops");
            },
            check: function (testList) {
                var $t, $t1, $t2;
                var i = 0;
                while (i < 20) {
                    $t = (function () {
                        while (i < 10) {
                            $t1 = (function () {
                                while (i < 5) {
                                    $t2 = (function () {
                                        if (System.Linq.Enumerable.from(testList).any(function (x) {
                                            return x === i;
                                        })) {
                                            return {jump: 3, v: "ThirdLoop"};
                                        }
                                        i = (i + 1) | 0;
                                    }).call(this) || {};
                                    if($t2.jump == 3) return {jump: 3, v: $t2.v};
                                }

                                if (System.Linq.Enumerable.from(testList).any(function (x) {
                                    return x === i;
                                })) {
                                    return {jump: 3, v: "SecondLoop"};
                                }
                                i = (i + 1) | 0;
                            }).call(this) || {};
                            if($t1.jump == 3) return {jump: 3, v: $t1.v};
                        }

                        if (System.Linq.Enumerable.from(testList).any(function (x) {
                            return x === i;
                        })) {
                            return {jump: 3, v: "FirstLoop"};
                        }
                        i = (i + 1) | 0;
                    }).call(this) || {};
                    if($t.jump == 3) return $t.v;
                }

                return "NoLoops";
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge721", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge721, {
        f1: function (_o4) {
            _o4.add(3);
            return _o4;
        },
        f2: function (_o5) {
            _o5.add(5);
            return _o5;
        },
        f3: function (_o6) {
            _o6.add(15);
            return _o6;
        },
        f4: function (_o7) {
            _o7.add(25);
            return _o7;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge722', {
        statics: {
            m1: function (i) {
                return i;
            },
            testUseCase: function () {
                var $t;
                var c1 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge722();
                var asset1 = 1;
                asset1 = (c1.setItem("path", 2), 2);

                Bridge.Test.Assert.areEqual$1(2, asset1, "Bridge722 asset1");
                Bridge.Test.Assert.areEqual$1(3, Bridge.ClientTest.Batch3.BridgeIssues.Bridge722.m1((c1.setItem("path", 3), 3)), "Bridge722 M1 3");
                Bridge.Test.Assert.areEqual$1(4, Bridge.ClientTest.Batch3.BridgeIssues.Bridge722.m1((asset1 = (c1.setItem("path", 4), 4))), "Bridge722 M1 4");

                var c2 = new $_.$AnonymousType$14();
                var asset2 = (c2.path = 5, 5);
                Bridge.Test.Assert.areEqual$1(5, asset2, "Bridge722 asset2");
                Bridge.Test.Assert.areEqual$1(5, c2.path, "Bridge722 c2");

                var c3 = new (System.Collections.Generic.Dictionary$2(String,System.Int32))();
                var asset3 = (c3.set("path", 6), 6);
                Bridge.Test.Assert.areEqual$1(6, asset3, "Bridge722 asset3");
                Bridge.Test.Assert.areEqual$1(6, c3.get("path"), "Bridge722 c3");

                var data4 = [System.Decimal(1.0), System.Decimal(2.0), System.Decimal(3.0), System.Decimal(4.0), System.Decimal(7.0)];
                var c4 = new (System.Collections.Generic.Dictionary$2(String,System.Decimal))();
                var asset4 = ($t = System.Linq.Enumerable.from(data4).select($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge722.f1).last(), c4.set("path", $t), $t);
                Bridge.Test.Assert.areDeepEqual$1(System.Decimal(7.0), asset4, "Bridge722 asset4");
                Bridge.Test.Assert.areDeepEqual$1(System.Decimal(7.0), c4.get("path"), "Bridge722 c4");
            }
        },
        lastItem: 0,
        getItem: function (item) {
            return this.lastItem;
        },
        setItem: function (item, value) {
            this.lastItem = value;
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge722", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge722, {
        f1: function (x) {
            return x;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge726', {
        statics: {
            testUseCase: function () {
                var $t;
                var b = true;
                var t = [1, 2, 3];

                var sum = 0;
                if (b) {
                    $t = Bridge.getEnumerator(t);
                    while ($t.moveNext()) {
                        var i = $t.getCurrent();
                        sum = (sum + i) | 0;
                    }
                }

                Bridge.Test.Assert.areEqual$1(6, sum, "Bridge726");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge732', {
        statics: {
            testUseCase: function () {
                var decimalValue = System.Decimal(5.0);
                var assign = false;
                var test = assign ? decimalValue : System.Decimal(2);
                var test2 = test.mul(decimalValue);

                Bridge.Test.Assert.true$1(test2.equalsT(System.Decimal(10)), "Bridge732");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge733', {
        statics: {
            config: {
                properties: {
                    DateA: null
                },
                init: function () {
                    this.dateb = new Date(-864e13);
                    this.DateA = new Date(-864e13);
                }
            },
            testUseCase: function () {
                Bridge.Test.Assert.true$1(Bridge.equals(Bridge.ClientTest.Batch3.BridgeIssues.Bridge733.getDateA(), new Date(-864e13)), "Bridge733 DateA");
                Bridge.Test.Assert.true$1(Bridge.equals(Bridge.ClientTest.Batch3.BridgeIssues.Bridge733.dateb, new Date(-864e13)), "Bridge733 dateb");

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge733.dateb = new Date(); // to prevent warning that dateb is never assigned
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge743', {
        statics: {
            testInlineMethodsAsReference: function () {
                var aaa = 7;
                var fn1 = function (b) { return Bridge.equals(aaa, b); };
                Bridge.Test.Assert.true(fn1(7));

                fn1 = function (b) { return Bridge.equals(aaa, b); };
                Bridge.Test.Assert.true(fn1(7));

                var fn2 = function (a, b) { return Bridge.equals(a, b); };
                Bridge.Test.Assert.true(fn2(aaa, 7));

                fn2 = function (a, b) { return Bridge.equals(a, b); };
                Bridge.Test.Assert.true(fn2(aaa, 7));

                var list = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge743.f1(new (System.Collections.Generic.List$1(String))());
                var converted = Bridge.ClientTest.Batch3.BridgeIssues.Bridge743ObjectExtention.convertAllItems(String, System.Int32, list, function (s) { return System.Int32.parse(s); });
                Bridge.Test.Assert.areEqual(converted.getItem(0), 1);
                Bridge.Test.Assert.areEqual(converted.getItem(1), 2);
                Bridge.Test.Assert.areEqual(converted.getItem(2), 3);

                Bridge.Test.Assert.throws$1($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge743.f3, $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge743.f4);

                var action1 = function (str1, str2) { return str1 + ' ' + str2; };
                Bridge.Test.Assert.areEqual(action1("Hello", "world!"), "Hello world!");
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge743", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge743, {
        f1: function (_o8) {
            _o8.add("1");
            _o8.add("2");
            _o8.add("3");
            return _o8;
        },
        f2: function (_o9) {
            _o9.add("2147483648");
            return _o9;
        },
        f3: function () {
            var list1 = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge743.f2(new (System.Collections.Generic.List$1(String))());
            var converted1 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge743ObjectExtention.convertAllItems(String, System.Int32, list1, function (s) { return System.Int32.parse(s); });
        },
        f4: function (e) {
            return Bridge.is(e, System.OverflowException);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge743ObjectExtention', {
        statics: {
            convertAllItems: function (T, T2, value, $function) {
                var $t;
                var result = new (System.Collections.Generic.List$1(T2))();
                $t = Bridge.getEnumerator(value);
                while ($t.moveNext()) {
                    var item = $t.getCurrent();
                    result.add($function(item));
                }
                return result;
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge751', {
        statics: {
            testUseCase: function () {
                for (var i = 0; i < 5; i = (i + 1) | 0) {
                    var el = i;
                }

                var values = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge751.f1(new (System.Collections.Generic.List$1(System.Int32))());
                var v1 = System.Linq.Enumerable.from(values).count($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge751.f2);

                Bridge.Test.Assert.areEqual$1(1, v1, "Bridge751");
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge751", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge751, {
        f1: function (_o10) {
            _o10.add(1);
            _o10.add(2);
            return _o10;
        },
        f2: function (el1) {
            return el1 === 1;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge758', {
        statics: {
            testUseCase: function () {
                var list = new (System.Collections.Generic.List$1(Date))();
                list.add(new Date(2015, 1 - 1, 2));
                list.add(new Date(2015, 1 - 1, 1));
                list.add(new Date(2015, 1 - 1, 3));

                list.sort();
                Bridge.Test.Assert.true$1(Bridge.equals(list.getItem(0), new Date(2015, 1 - 1, 1)), "Bridge758 2015/1/1");
                Bridge.Test.Assert.true$1(Bridge.equals(list.getItem(1), new Date(2015, 1 - 1, 2)), "Bridge758 2015/1/2");
                Bridge.Test.Assert.true$1(Bridge.equals(list.getItem(2), new Date(2015, 1 - 1, 3)), "Bridge758 2015/1/3");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge760', {
        statics: {
            testUseCase: function () {
                var $t;
                var a = null;
                var b = 10;

                var c = ($t = b, $t != null ? $t : Bridge.ClientTest.Batch3.BridgeIssues.Bridge760.doSomething(a));
                Bridge.Test.Assert.areEqual$1(10, c, "Bridge760");
            },
            doSomething: function (test) {
                return System.Nullable.getValue(test);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge762', {
        statics: {
            testUseCase: function () {
                var test1 = null;
                var test2 = null;
                var test3 = null;

                var value1 = System.Nullable.getValueOrDefault(test1, 0);
                var value2 = System.Nullable.getValueOrDefault(test2, new Bridge.ClientTest.Batch3.BridgeIssues.Bridge762A());
                var value3 = System.Nullable.getValueOrDefault(test3, new Bridge.ClientTest.Batch3.BridgeIssues.Bridge762B()).$clone();

                Bridge.Test.Assert.areEqual$1(0, value1, "Bridge762 int");
                Bridge.Test.Assert.areNotEqual$1(null, value2, "Bridge762A struct");
                Bridge.Test.Assert.areNotEqual$1(null, value3.$clone(), "Bridge762B struct");
                Bridge.Test.Assert.areEqual$1(0, value3.getData(), "Bridge762B.Data struct");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge762A', {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge762A(); }
        },
        $clone: function (to) { return this; }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge762B', {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge762B(); }
        },
        config: {
            properties: {
                Data: 0
            }
        },
        constructor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + -1386632298;
            hash = hash * 23 + (this.Data == null ? 0 : Bridge.getHashCode(this.Data));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge762B)) {
                return false;
            }
            return Bridge.equals(this.Data, o.Data);
        },
        $clone: function (to) {
            var s = to || new Bridge.ClientTest.Batch3.BridgeIssues.Bridge762B();
            s.Data = this.Data;
            return s;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge772', {
        statics: {
            testUseCase: function () {
                //These arrays depend on "useTypedArray" bridge.json option
                var byteArray = System.Array.init(1, 0);
                var sbyteArray = System.Array.init(2, 0);
                var shortArray = System.Array.init(3, 0);
                var ushortArray = System.Array.init(4, 0);
                var intArray = System.Array.init(5, 0);
                var uintArray = System.Array.init(6, 0);
                var floatArray = System.Array.init(7, 0);
                var doubleArray = System.Array.init(8, 0);

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
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge777', {
        statics: {
            config: {
                properties: {
                    SomeProperty: null,
                    P1: null,
                    P2: null
                }
            },
            method: function (o) {
                return null;
            },
            testUseCase: function () {
                var $t;
                var o = new $_.$AnonymousType$14();
                o;
                {
                    var i = 555;
                    Bridge.Test.Assert.areEqual$1(555, i, "Bridge777 i");
                }

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge777.method((Bridge.ClientTest.Batch3.BridgeIssues.Bridge777.setSomeProperty(o), o));
                {
                    Bridge.Test.Assert.notNull$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge777.getSomeProperty(), "Bridge777 SomeProperty");
                }

                ($t = (Bridge.ClientTest.Batch3.BridgeIssues.Bridge777.setP2(o), o), Bridge.ClientTest.Batch3.BridgeIssues.Bridge777.setP1($t), $t);
                {
                    Bridge.Test.Assert.notNull$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge777.getP1(), "Bridge777 P1");
                    Bridge.Test.Assert.notNull$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge777.getP2(), "Bridge777 P2");
                }
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge782', {
        statics: {
            testUseCase: function () {
                var o = new $_.$AnonymousType$14();
                Bridge.Test.Assert.true$1(o.__foo == null, "Bridge782");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge785', {
        statics: {
            testUseCase: function () {
                {
                    var i = 1;
                    var j = i;
                    Bridge.Test.Assert.areEqual$1(1, j, "Bridge785 by name");
                }
                {
                    var i1 = 2;
                    var j1 = i1;
                    Bridge.Test.Assert.areEqual$1(2, j1, "Bridge785 by index");
                }
                {
                    var i2 = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge785.DataClass(), {
                        setValue: 3
                    } );
                    var j2 = i2.getValue();
                    Bridge.Test.Assert.areEqual$1(3, j2, "Bridge785 by index for DataClass property");
                }
                {
                    var i3 = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge785.DataClass(), {
                        setValue: 4
                    } );
                    var j3 = i3;
                    Bridge.Test.Assert.areEqual$1(i3, j3, "Bridge785 by index for DataClass");
                }
                {
                    var i4 = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge785.DataClass(), {
                        setValue: 5
                    } );
                    var j4 = i4.getSomething(55).getValue();
                    Bridge.Test.Assert.areEqual$1(55, j4, "Bridge785 by index for DataClass method");
                }
                {
                    var i5 = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge785.DataStruct(), {
                        setValue: 6
                    } );
                    var j5 = i5.getValue();
                    Bridge.Test.Assert.areEqual$1(6, j5, "Bridge785 by index for DataStruct property");
                }
                {
                    var i6 = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge785.DataStruct(), {
                        setValue: 7
                    } );
                    var j6 = i6.getSomething(77).getValue();
                    Bridge.Test.Assert.areEqual$1(77, j6, "Bridge785 by index for DataStruct method");
                }
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge785.DataClass', {
        config: {
            properties: {
                Value: 0
            }
        },
        getSomething: function (i) {
            return Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge785.DataClass(), {
                setValue: i
            } );
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge785.DataStruct', {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge785.DataStruct(); }
        },
        config: {
            properties: {
                Value: 0
            }
        },
        constructor: function () {
            this.$initialize();
        },
        getSomething: function (i) {
            return Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge785.DataStruct(), {
                setValue: i
            } );
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + -847529689;
            hash = hash * 23 + (this.Value == null ? 0 : Bridge.getHashCode(this.Value));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge785.DataStruct)) {
                return false;
            }
            return Bridge.equals(this.Value, o.Value);
        },
        $clone: function (to) {
            var s = to || new Bridge.ClientTest.Batch3.BridgeIssues.Bridge785.DataStruct();
            s.Value = this.Value;
            return s;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge786', {
        statics: {
            testUseCase: function () {
                Bridge.Test.Assert.areEqual$1("true", Bridge.ClientTest.Batch3.BridgeIssues.Bridge786.get(true), "Bridge786 true");
                Bridge.Test.Assert.areEqual$1("false", Bridge.ClientTest.Batch3.BridgeIssues.Bridge786.get(false), "Bridge786 false");
            },
            get: function ($throws) {
                return $throws ? "true" : "false";
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge788', {
        statics: {
            testUseCase: function () {
                Bridge.Test.Assert.true(Bridge.Validation.url("http://127.0.0.1"));
                Bridge.Test.Assert.false(Bridge.Validation.url("http://127.0.1"));
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge789', {
        statics: {
            testUseCase: function () {
                Bridge.Test.Assert.areNotEqual(null, Bridge.ClientTest.Batch3.BridgeIssues.Bridge789.method1());
                Bridge.Test.Assert.areNotEqual(null, Bridge.ClientTest.Batch3.BridgeIssues.Bridge789.method2().$clone());
                Bridge.Test.Assert.areEqual(0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge789.method2().field1);
            },
            method1: function (dt) {
                if (dt === void 0) { dt = new Date(-864e13); }
                return dt;
            },
            method2: function (s) {
                if (s === void 0) { s = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge789A(); }
                return s.$clone();
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge789A', {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge789A(); }
        },
        field1: 0,
        constructor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 428277234;
            hash = hash * 23 + (this.field1 == null ? 0 : Bridge.getHashCode(this.field1));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge789A)) {
                return false;
            }
            return Bridge.equals(this.field1, o.field1);
        },
        $clone: function (to) {
            var s = to || new Bridge.ClientTest.Batch3.BridgeIssues.Bridge789A();
            s.field1 = this.field1;
            return s;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge793', {
        statics: {
            testUseCase: function () {
                var js = new (System.Collections.Generic.List$1(String))();
                js.add("1");
                var test = new (System.Collections.ObjectModel.ReadOnlyCollection$1(String))(js);

                Bridge.Test.Assert.areEqual$1(1, test.getCount(), "Bridge793 Count");
                Bridge.Test.Assert.areEqual$1("1", test.get(0), "Bridge793 [0]");

                var ilist = Bridge.cast(test, System.Collections.Generic.IList$1(String));

                Bridge.Test.Assert.throws$5(function () {
                    System.Array.setItem(ilist, 0, "0", String);
                }, "Bridge793 Setter should throw an exception");
                Bridge.Test.Assert.throws$5(function () {
                    System.Array.add(ilist, "1", String);
                }, "Bridge793 Add should throw an exception");
                Bridge.Test.Assert.throws$5(function () {
                    System.Array.removeAt(ilist, 0, String);
                }, "Bridge793 RemoveAt should throw an exception");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge795', {
        statics: {
            testUseCase: function () {
                var wrappedValue = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge795A.$constructor1(1);
                var wrappedValueIsNull = (System.Nullable.lifteq(Bridge.ClientTest.Batch3.BridgeIssues.Bridge795A.op_Equality, wrappedValue, null));

                Bridge.Test.Assert.areEqual$1(false, wrappedValueIsNull, "Bridge795");
            },
            testRelated: function () {
                var v1 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge795B.$constructor1(1);
                var v2 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge795B.$constructor1(2);
                var v3 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge795B.$constructor1(1);

                Bridge.Test.Assert.areEqual$1(false, Bridge.ClientTest.Batch3.BridgeIssues.Bridge795B.op_Equality(v1, v2), "Bridge795 lift == 12");
                Bridge.Test.Assert.areEqual$1(true, Bridge.ClientTest.Batch3.BridgeIssues.Bridge795B.op_Equality(v1, v3), "Bridge795 lift == 13");
                Bridge.Test.Assert.areEqual$1(true, Bridge.ClientTest.Batch3.BridgeIssues.Bridge795B.op_Inequality(v1, v2), "Bridge795 lift != 12");
                Bridge.Test.Assert.areEqual$1(false, Bridge.ClientTest.Batch3.BridgeIssues.Bridge795B.op_Inequality(v1, v3), "Bridge795 lift != 13");
                Bridge.Test.Assert.areEqual$1(false, Bridge.ClientTest.Batch3.BridgeIssues.Bridge795B.op_GreaterThanOrEqual(v1, v2), "Bridge795 lift >= 12");
                Bridge.Test.Assert.areEqual$1(true, Bridge.ClientTest.Batch3.BridgeIssues.Bridge795B.op_GreaterThanOrEqual(v2, v1), "Bridge795 lift >= 21");
                Bridge.Test.Assert.areEqual$1(true, Bridge.ClientTest.Batch3.BridgeIssues.Bridge795B.op_GreaterThanOrEqual(v1, v3), "Bridge795 lift >= 13");
                Bridge.Test.Assert.areEqual$1(false, Bridge.ClientTest.Batch3.BridgeIssues.Bridge795B.op_GreaterThan(v1, v2), "Bridge795 lift > 12");
                Bridge.Test.Assert.areEqual$1(true, Bridge.ClientTest.Batch3.BridgeIssues.Bridge795B.op_GreaterThan(v2, v1), "Bridge795 lift > 21");
                Bridge.Test.Assert.areEqual$1(false, Bridge.ClientTest.Batch3.BridgeIssues.Bridge795B.op_GreaterThan(v1, v3), "Bridge795 lift > 13");
                Bridge.Test.Assert.areEqual$1(true, Bridge.ClientTest.Batch3.BridgeIssues.Bridge795B.op_LessThanOrEqual(v1, v2), "Bridge795 lift <= 12");
                Bridge.Test.Assert.areEqual$1(false, Bridge.ClientTest.Batch3.BridgeIssues.Bridge795B.op_LessThanOrEqual(v2, v1), "Bridge795 lift <= 21");
                Bridge.Test.Assert.areEqual$1(true, Bridge.ClientTest.Batch3.BridgeIssues.Bridge795B.op_LessThanOrEqual(v1, v3), "Bridge795 lift <= 13");
                Bridge.Test.Assert.areEqual$1(true, Bridge.ClientTest.Batch3.BridgeIssues.Bridge795B.op_LessThan(v1, v2), "Bridge795 lift < 12");
                Bridge.Test.Assert.areEqual$1(false, Bridge.ClientTest.Batch3.BridgeIssues.Bridge795B.op_LessThan(v2, v1), "Bridge795 lift < 21");
                Bridge.Test.Assert.areEqual$1(false, Bridge.ClientTest.Batch3.BridgeIssues.Bridge795B.op_LessThan(v1, v3), "Bridge795 lift < 13");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge795A', {
        $kind: "struct",
        statics: {
            op_Equality: function (x, y) {
                return x.equals(y.$clone());
            },
            op_Inequality: function (x, y) {
                return !(Bridge.ClientTest.Batch3.BridgeIssues.Bridge795A.op_Equality(x, y));
            },
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge795A(); }
        },
        config: {
            properties: {
                Value: 0
            }
        },
        $constructor1: function (value) {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge795A.$constructor.call(this);
            this.setValue(value);
        },
        constructor: function () {
            this.$initialize();
        },
        equals: function (o) {
            if (!(Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge795A))) {
                return false;
            }
            return System.Nullable.getValue(Bridge.cast(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge795A)).getValue() === this.getValue();
        },
        getHashCode: function () {
            return this.getValue();
        },
        $clone: function (to) {
            var s = to || new Bridge.ClientTest.Batch3.BridgeIssues.Bridge795A();
            s.Value = this.Value;
            return s;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge795B', {
        $kind: "struct",
        statics: {
            op_Equality: function (x, y) {
                return x.getValue() === y.getValue();
            },
            op_Inequality: function (x, y) {
                return !(Bridge.ClientTest.Batch3.BridgeIssues.Bridge795B.op_Equality(x, y));
            },
            op_GreaterThanOrEqual: function (x, y) {
                return x.getValue() >= y.getValue();
            },
            op_GreaterThan: function (x, y) {
                return x.getValue() > y.getValue();
            },
            op_LessThanOrEqual: function (x, y) {
                return x.getValue() <= y.getValue();
            },
            op_LessThan: function (x, y) {
                return x.getValue() < y.getValue();
            },
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge795B(); }
        },
        config: {
            properties: {
                Value: 0
            }
        },
        $constructor1: function (value) {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge795B.$constructor.call(this);
            this.setValue(value);
        },
        constructor: function () {
            this.$initialize();
        },
        equals: function (o) {
            if (!(Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge795B))) {
                return false;
            }

            return System.Nullable.getValue(Bridge.cast(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge795B)).getValue() === this.getValue();
        },
        getHashCode: function () {
            return this.getValue();
        },
        $clone: function (to) {
            var s = to || new Bridge.ClientTest.Batch3.BridgeIssues.Bridge795B();
            s.Value = this.Value;
            return s;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge796', {
        statics: {
            testUseCase: function () {
                var b = { v : true };

                Bridge.Test.Assert.true$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge796.method1(true), "Bridge796 Method1");
                Bridge.Test.Assert.true$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge796.method1_1(true), "Bridge796 Method1_1");
                Bridge.Test.Assert.true$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge796.method2(true), "Bridge796 Method2");
                Bridge.Test.Assert.false$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge796.method3(b), "Bridge796 Method3");
                Bridge.Test.Assert.false$1(b.v, "Bridge796 Method3 b");
            },
            method1: function ($num) {
                return $num;
            },
            method1_1: function ($throws) {
                return $throws;
            },
            method2: function ($throws) {
                return $throws;
            },
            method3: function ($throws) {
                $throws.v = false;
                return $throws.v;
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge815', {
        statics: {
            testUseCase: function () {
                var a = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge815.A();

                a.method();
                Bridge.Test.Assert.areEqual$1(null, System.Nullable.lift1("$clone", a.getProperty()), "Bridge815 null");

                a.method(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge815.B.$constructor1(1));
                Bridge.Test.Assert.true$1(System.Nullable.hasValue(a.getProperty()), "Bridge815 Property.HasValue");
                Bridge.Test.Assert.areEqual$1(1, System.Nullable.getValue(a.getProperty()).field, "Bridge815 Property.Value.field == 1");

                a.method2();
                Bridge.Test.Assert.true$1(System.Nullable.hasValue(a.getProperty()), "Bridge815 Method2 Property.HasValue");
                Bridge.Test.Assert.areEqual$1(0, System.Nullable.getValue(a.getProperty()).field, "Bridge815 Method2 Property.Value.field == 0");

                a.method2(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge815.B.$constructor1(2));
                Bridge.Test.Assert.true$1(System.Nullable.hasValue(a.getProperty()), "Bridge815 Method2 Property.HasValue 2");
                Bridge.Test.Assert.areEqual$1(2, System.Nullable.getValue(a.getProperty()).field, "Bridge815 Method2 Property.Value.field == 2");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge815.A', {
        config: {
            properties: {
                Property: null
            }
        },
        method: function (param) {
            if (param === void 0) { param = null; }
            this.setProperty(System.Nullable.lift1("$clone", param));
        },
        method2: function (param) {
            if (param === void 0) { param = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge815.B(); }
            this.setProperty(param.$clone());
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge815.B', {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge815.B(); }
        },
        field: 0,
        $constructor1: function (i) {
            this.$initialize();
            this.field = i;
        },
        constructor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 372029408;
            hash = hash * 23 + (this.field == null ? 0 : Bridge.getHashCode(this.field));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Bridge.ClientTest.Batch3.BridgeIssues.Bridge815.B)) {
                return false;
            }
            return Bridge.equals(this.field, o.field);
        },
        $clone: function (to) {
            var s = to || new Bridge.ClientTest.Batch3.BridgeIssues.Bridge815.B();
            s.field = this.field;
            return s;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge816', {
        statics: {
            testUseCase: function () {
                var textArea = document.createElement('textarea');
                textArea.id = "textArea1";
                textArea.value = "Test";

                var root = document.getElementById("qunit-fixture");
                root.appendChild(textArea);

                var ta = document.getElementById("textArea1");
                Bridge.Test.Assert.areEqual$1("Test", ta.value, "Bridge816 textArea1.value");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge817', {
        statics: {
            testUseCase: function () {
                Bridge.Test.Assert.true$1((System.Char.isDigit(65) || System.Char.isLetter(65)), "Bridge817 IsLetterOrDigit");
                Bridge.Test.Assert.true$1((System.Char.isDigit("A".charCodeAt(0)) || System.Char.isLetter("A".charCodeAt(0))), "Bridge817 IsLetterOrDigit string");

                Bridge.Test.Assert.false$1(!(System.Char.isDigit(65) || System.Char.isLetter(65)), "Bridge817 IsLetterOrDigit !");
                Bridge.Test.Assert.false$1(!(System.Char.isDigit("A".charCodeAt(0)) || System.Char.isLetter("A".charCodeAt(0))), "Bridge817 IsLetterOrDigit string !");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge818', {
        statics: {
            testUseCase: function () {
                var z = 0;
                for (; ; ) {
                    z = (z + 1) | 0;
                    if (z === 10) {
                        break;
                    }
                }
                Bridge.Test.Assert.areEqual$1(10, z, "Bridge818 z");

                var i;
                var j;
                for (i = 0, j = 1; i < 10; i = (i + 1) | 0, j = (j + 1) | 0) {
                }
                Bridge.Test.Assert.areEqual$1(10, i, "Bridge818 i");
                Bridge.Test.Assert.areEqual$1(11, j, "Bridge818 j");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge821', {
        statics: {
            testUseCase: function () {
                var defaultCulture = System.Globalization.CultureInfo.getCurrentCulture();

                try {
                    var d = System.Decimal("443534569034876.12345678901235");
                    Bridge.Test.Assert.areEqual("443534569034876.12345678901235", Bridge.Int.format(d, 'G'));
                    Bridge.Test.Assert.areEqual("443534569034876,12345678901235", Bridge.Int.format(d, 'G', System.Globalization.CultureInfo.getCultureInfo("ru-RU")));
                    System.Globalization.CultureInfo.setCurrentCulture(System.Globalization.CultureInfo.getCultureInfo("ru-RU"));
                    Bridge.Test.Assert.areEqual("443534569034876,12345678901235", Bridge.Int.format(d, 'G'));

                    System.Globalization.CultureInfo.setCurrentCulture(defaultCulture);

                    var d1 = 1.25;
                    Bridge.Test.Assert.areEqual("1.25", System.Double.format(d1, 'G'));
                    Bridge.Test.Assert.areEqual("1,25", System.Double.format(d1, 'G', System.Globalization.CultureInfo.getCultureInfo("ru-RU")));
                    System.Globalization.CultureInfo.setCurrentCulture(System.Globalization.CultureInfo.getCultureInfo("ru-RU"));
                    Bridge.Test.Assert.areEqual("1,25", System.Double.format(d1, 'G'));

                    System.Globalization.CultureInfo.setCurrentCulture(defaultCulture);

                    var f = 1.25;
                    Bridge.Test.Assert.areEqual("1.25", System.Single.format(f, 'G'));
                    Bridge.Test.Assert.areEqual("1,25", System.Single.format(f, 'G', System.Globalization.CultureInfo.getCultureInfo("ru-RU")));
                    System.Globalization.CultureInfo.setCurrentCulture(System.Globalization.CultureInfo.getCultureInfo("ru-RU"));
                    Bridge.Test.Assert.areEqual("1,25", System.Single.format(f, 'G'));
                }
                finally {
                    System.Globalization.CultureInfo.setCurrentCulture(defaultCulture);
                }
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge823', {
        statics: {
            getTicksReturnsCorrectValue: function () {
                var val = System.Int64([1817194880,220]);
                var result = System.Int64([-57829376,2204230]);

                var ticks = System.Int64((new Date(val.toNumber())).getTime()).mul(10000);
                var ticksPlusOne = System.Int64((new Date(val.toNumber())).getTime()).mul(10000).add(System.Int64(1));
                var ticksString = System.Int64((new Date(val.toNumber())).getTime()).mul(10000).toString();

                Bridge.Test.Assert.areDeepEqual$1(result, ticks, "Ticks returning correct int value");
                Bridge.Test.Assert.areDeepEqual$1(result.add(System.Int64(1)), ticksPlusOne, "Adding to a Tick value is correct");
                Bridge.Test.Assert.areDeepEqual$1(result.toString(), ticksString, "Ticks returning correct value if .ToString() called on int");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge826', {
        statics: {
            echoDecimal: function (d) {
                if (d === void 0) { d = System.Decimal(42.0); }
                return d;
            },
            testUseCase: function () {
                var d = null;
                Bridge.Test.Assert.true$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge826.echoDecimal(Bridge.ClientTest.Batch3.BridgeIssues.Bridge826A.op_Implicit$1(d)).equalsT(System.Decimal(0)), "Bridge826 decimal 0");

                d = Bridge.ClientTest.Batch3.BridgeIssues.Bridge826A.op_Implicit(System.Decimal(1));
                Bridge.Test.Assert.true$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge826.echoDecimal(Bridge.ClientTest.Batch3.BridgeIssues.Bridge826A.op_Implicit$1(d)).equalsT(System.Decimal(1)), "Bridge826 decimal 1");

                var i = null;
                Bridge.Test.Assert.true$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge826.echoDecimal(System.Decimal(Bridge.ClientTest.Batch3.BridgeIssues.Bridge826B.op_Implicit$1(i))).equalsT(System.Decimal(0)), "Bridge826 int 0");

                i = Bridge.ClientTest.Batch3.BridgeIssues.Bridge826B.op_Implicit(1);
                Bridge.Test.Assert.true$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge826.echoDecimal(System.Decimal(Bridge.ClientTest.Batch3.BridgeIssues.Bridge826B.op_Implicit$1(i))).equalsT(System.Decimal(1)), "Bridge826 int 1");

                Bridge.Test.Assert.true$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge826.echoDecimal().equalsT(System.Decimal(42)), "Bridge826 42");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge826A', {
        statics: {
            op_Implicit: function (val) {
                return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge826A(val);
            },
            op_Implicit$1: function (val) {
                return val != null ? val._val : System.Decimal(0);
            }
        },
        _val: System.Decimal(0.0),
        constructor: function (val) {
            this.$initialize();
            this._val = val;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge826B', {
        statics: {
            op_Implicit: function (val) {
                return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge826B(val);
            },
            op_Implicit$1: function (val) {
                return val != null ? val._val : 0;
            }
        },
        _val: 0,
        constructor: function (val) {
            this.$initialize();
            this._val = val;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge830', {
        statics: {
            testMethod: function (method, throwException) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    task, 
                    exception, 
                    $async_e, 
                    $async_e1, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3,4], $step);
                                switch ($step) {
                                    case 0: {
                                        if (method == null) {
                                            throw new System.ArgumentNullException("method");
                                        }
                                        $step = 1;
                                        continue;
                                    }
                                    case 1: {
                                        task = System.Threading.Tasks.Task.fromResult(new System.Exception("Success"));
                                        if (throwException) {
                                            throw new System.Exception("test");
                                        }

                                        $task1 = task;
                                        $step = 2;
                                        $task1.continueWith($asyncBody);
                                        return;
                                    }
                                    case 2: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        $tcs.setResult($taskResult1);
                                        return;
                                    }
                                    case 3: {
                                        $tcs.setResult(new System.Exception(System.String.concat("Fail: ", exception.getMessage())));
                                        return;
                                        $async_e = null;
                                        $step = 4;
                                        continue;
                                    }
                                    case 4: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            if ( $step >= 1 && $step <= 2 ){
                                exception = $async_e;
                                $step = 3;
                                $asyncBody();
                                return;
                            }
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            testUseCase: function () {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $task2, 
                    $taskResult2, 
                    $jumpFromFinally, 
                    done, 
                    res, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1,2], $step);
                            switch ($step) {
                                case 0: {
                                    done = Bridge.Test.Assert.async();

                                    $task1 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge830.testMethod("", false);
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    res = $taskResult1;
                                    Bridge.Test.Assert.areEqual("Success", res.getMessage());

                                    $task2 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge830.testMethod("", true);
                                    $step = 2;
                                    $task2.continueWith($asyncBody, true);
                                    return;
                                }
                                case 2: {
                                    $taskResult2 = $task2.getAwaitedResult();
                                    res = $taskResult2;
                                    Bridge.Test.Assert.areEqual("Fail: test", res.getMessage());

                                    done();
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge835', {
        statics: {
            testUseCase: function () {
                var arr = System.Array.create(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge835.Dot(), null, 10, 10);
                Bridge.Test.Assert.areNotEqual$1(null, arr, "Bridge835");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge835.Dot', {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new Bridge.ClientTest.Batch3.BridgeIssues.Bridge835.Dot(); }
        },
        $clone: function (to) { return this; }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge841', {
        statics: {
            testUseCase: function () {
                var $t;
                var testListA = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge841.f1(new (System.Collections.Generic.List$1(System.Int32))());

                var result = 0;
                $t = Bridge.getEnumerator(testListA);
                while ($t.moveNext()) {
                    var item = $t.getCurrent();
                    var fn = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge841.f2;

                    switch (item) {
                        case 1: 
                            result = (result + 1) | 0;
                            break;
                        case 2: 
                            result = (result + 2) | 0;
                            break;
                    }
                }

                Bridge.Test.Assert.areEqual$1(3, result, "Bridge841");
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge841", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge841, {
        f1: function (_o11) {
            _o11.add(1);
            _o11.add(2);
            return _o11;
        },
        f2: function () {
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge844', {
        statics: {
            nullableAndSimpleDateTimeToStringEquals: function () {
                var dt1 = new Date();
                var dt2 = dt1;

                Bridge.Test.Assert.areEqual$1(System.Nullable.toString(dt2, function ($t) { return Bridge.Date.format($t); }), Bridge.Date.format(dt1), "Bridge844");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge849', {
        statics: {
            testUseCase: function () {
                Bridge.Test.Assert.areEqual$1(true, Bridge.ClientTest.Batch3.BridgeIssues.Bridge849A.setToBlah(""), "Bridge849 true");
                Bridge.Test.Assert.areEqual$1(false, Bridge.ClientTest.Batch3.BridgeIssues.Bridge849A.setToBlah("", false), "Bridge849 false");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge849A', {
        statics: {
            setToBlah: function (value, blah) {
                if (blah === void 0) { blah = true; }
                return blah;
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge857', {
        statics: {
            testUseCase: function () {
                Bridge.Test.Assert.true$1(true, "Bridge857 Bridge857A");
                Bridge.Test.Assert.true$1(true, "Bridge857 Bridge857B");
                Bridge.Test.Assert.areEqual$1(4294967295, Bridge.ClientTest.Batch3.BridgeIssues.Bridge857C.All, "Bridge857 Bridge857C All");
                Bridge.Test.Assert.areEqual$1(0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge857C.All1, "Bridge857 Bridge857C All1");
                Bridge.Test.Assert.areEqual$1(1, Bridge.ClientTest.Batch3.BridgeIssues.Bridge857C.All2, "Bridge857 Bridge857C All2");
                Bridge.Test.Assert.true$1(true, "Bridge857 Bridge857D All");
                Bridge.Test.Assert.true$1(true, "Bridge857 Bridge857D All1");
                Bridge.Test.Assert.true$1(true, "Bridge857 Bridge857D All2");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge857A', {
        $kind: "enum",
        statics: {
            All: System.UInt64(4294967295)
        },
        $utype: System.UInt64
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge857B', {
        $kind: "enum",
        statics: {
            All: System.Int64([-1,0])
        },
        $utype: System.Int64
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge857C', {
        $kind: "enum",
        statics: {
            All1: 0,
            All2: 1,
            All: 4294967295
        },
        $utype: System.UInt32
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge857D', {
        $kind: "enum",
        statics: {
            All1: System.UInt64(0),
            All2: System.UInt64(1),
            All: System.UInt64(4294967295)
        },
        $flags: true,
        $utype: System.UInt64
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge861', {
        statics: {
            testUseCase: function () {
                var testA = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge861A(), {
                    setMyId: 1
                } );

                testA.setDelegates(Bridge.fn.combine(testA.getDelegates(), $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge861.f1));

                var testB = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge861A(), {
                    setMyId: 2,
                    setDelegates: testA.getDelegates()
                } );

                testB.setDelegates(Bridge.fn.combine(testB.getDelegates(), $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge861.f2));
                testB.invokeDelegates();

                Bridge.Test.Assert.areEqual(0, testB.getMyId());
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge861", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge861, {
        f1: function (data) {
            var $t;
            Bridge.identity(data.getMyId(), ($t = (data.getMyId() + 1) | 0, data.setMyId($t), $t));
        },
        f2: function (data) {
            data.setMyId(0);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge861A', {
        config: {
            properties: {
                MyId: 0,
                Delegates: null
            }
        },
        invokeDelegates: function () {
            if (!Bridge.staticEquals(this.getDelegates(), null)) {
                this.getDelegates()(this);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge863', {
        statics: {
            testUseCase: function () {
                var test = false;
                test = !!(test | true);
                Bridge.Test.Assert.areStrictEqual(true, test);

                test = false;
                test = !!(test & true);
                Bridge.Test.Assert.areStrictEqual(false, test);

                var test1 = false;
                test1 = System.Nullable.or(test1, true);
                Bridge.Test.Assert.areStrictEqual(true, test1);

                test1 = false;
                test1 = System.Nullable.and(test1, true);
                Bridge.Test.Assert.areStrictEqual(false, test1);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge874', {
        statics: {
            testUseCase: function () {
                var myValue = 1;

                switch (myValue) {
                    case 0: 
                    
                        myValue = 2;
                    
                        break;
                    case 1: 
                    
                        myValue = 3;
                    
                        break;
                }

                Bridge.Test.Assert.areEqual(3, myValue);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge881', {
        statics: {
            testUseCase: function () {
                var i = Bridge.ClientTest.Batch3.BridgeIssues.Bridge881A.$Name;
                Bridge.Test.Assert.areEqual(Bridge.ClientTest.Batch3.BridgeIssues.Bridge881A.$Name, i);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge881A', {
        $kind: "enum",
        statics: {
            $Name: 0
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge882', {
        statics: {
            testUseCase: function () {
                Bridge.Test.Assert.areEqual$1(6, Bridge.ClientTest.Batch3.BridgeIssues.Bridge882_Static.getSum(), "Bridge882_Static.Sum");
                Bridge.Test.Assert.areEqual$1(18, Bridge.ClientTest.Batch3.BridgeIssues.Bridge882_Static.Bridge882_A_Static.getSum(), "Bridge882_A_Static.Sum");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge882_Static', {
        statics: {
            constructor: function () {
                var $t;
                var a = [1, 2, 3];

                var s = 0;
                $t = Bridge.getEnumerator(a);
                while ($t.moveNext()) {
                    var v = $t.getCurrent();
                    s = (s + v) | 0;
                }

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge882_Static.setSum(s);
        },
        config: {
            properties: {
                Sum: 0
            }
        }
    }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge882_Static.Bridge882_A_Static', {
        statics: {
            constructor: function () {
                var $t;
                var a = [5, 6, 7];

                var s = 0;
                $t = Bridge.getEnumerator(a);
                while ($t.moveNext()) {
                    var v = $t.getCurrent();
                    s = (s + v) | 0;
                }

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge882_Static.Bridge882_A_Static.setSum(s);
        },
        config: {
            properties: {
                Sum: 0
            }
        }
    }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge883', {
        statics: {
            testUseCase: function () {
                Bridge.Test.Assert.notNull$1(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge883_1(), "Bridge883_1 created");
                Bridge.Test.Assert.areEqual$1(1, Bridge.ClientTest.Batch3.BridgeIssues.Bridge883_3.main1(), "Bridge883_3.Main1");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge883_IInterface', {
        $kind: "interface"
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge883_3', {
        statics: {
            main1: function () {
                var f = Bridge.ClientTest.Batch3.BridgeIssues.Bridge883_4.field1;
                return f;
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge889', {
        statics: {
            count: function (arr) {
                if (arr === void 0) { arr = []; }
                return arr.length;
            },
            testUseCase: function () {
                Bridge.Test.Assert.areEqual(0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge889.count());
            },
            makeEnumerable: function (T, arr) {
                var $t;
                if (arr === void 0) { arr = []; }
                var $yield = [];
                $t = Bridge.getEnumerator(arr);
                while ($t.moveNext()) {
                    var x = $t.getCurrent();
                    $yield.push(x);
                }
                return System.Array.toEnumerable($yield);
            },
            testMakeEnumerable: function () {
                Bridge.Test.Assert.areEqual$1(0, System.Linq.Enumerable.from(Bridge.ClientTest.Batch3.BridgeIssues.Bridge889.makeEnumerable(Object)).count(), "MakeEnumerable object 0");
                Bridge.Test.Assert.areEqual$1(2, System.Linq.Enumerable.from(Bridge.ClientTest.Batch3.BridgeIssues.Bridge889.makeEnumerable(Object, [1, 2.0])).count(), "MakeEnumerable object 2");

                Bridge.Test.Assert.areEqual$1(0, System.Linq.Enumerable.from(Bridge.ClientTest.Batch3.BridgeIssues.Bridge889.makeEnumerable(String)).count(), "MakeEnumerable string 0");
                Bridge.Test.Assert.areEqual$1(3, System.Linq.Enumerable.from(Bridge.ClientTest.Batch3.BridgeIssues.Bridge889.makeEnumerable(String, ["a", "b", "c"])).count(), "MakeEnumerable string 3");

                Bridge.Test.Assert.areEqual$1(0, System.Linq.Enumerable.from(Bridge.ClientTest.Batch3.BridgeIssues.Bridge889.makeEnumerable(System.Collections.Generic.IEnumerable$1(Object))).count(), "MakeEnumerable IEnumerable<object> 0");
                Bridge.Test.Assert.areEqual$1(1, System.Linq.Enumerable.from(Bridge.ClientTest.Batch3.BridgeIssues.Bridge889.makeEnumerable(System.Collections.Generic.IEnumerable$1(Object), [[1, 2]])).count(), "MakeEnumerable IEnumerable<object> 1");

                Bridge.Test.Assert.areEqual$1(0, System.Linq.Enumerable.from(Bridge.ClientTest.Batch3.BridgeIssues.Bridge889.makeEnumerable(System.Collections.Generic.List$1(System.Collections.Generic.List$1(Object)))).count(), "MakeEnumerable List<List<object>> 0");
                Bridge.Test.Assert.areEqual$1(2, System.Linq.Enumerable.from(Bridge.ClientTest.Batch3.BridgeIssues.Bridge889.makeEnumerable(System.Collections.Generic.List$1(System.Collections.Generic.List$1(System.Int32)), [new (System.Collections.Generic.List$1(System.Collections.Generic.List$1(System.Int32)))(), new (System.Collections.Generic.List$1(System.Collections.Generic.List$1(System.Int32)))()])).count(), "MakeEnumerable List<List<object>> 2");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge892', {
        statics: {
            test: function (format, p) {
                if (p === void 0) { p = []; }
                var message = System.String.format.apply(System.String, [format].concat(p));
                return message;
            },
            testUseCase: function () {
                Bridge.Test.Assert.areEqual("Test One Two", Bridge.ClientTest.Batch3.BridgeIssues.Bridge892.test("Test {0} {1}", ["One", "Two"]));
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge893', {
        statics: {
            enumToStringWorks: function () {
                var $t, $t1;
                Bridge.Test.Assert.areEqual("TestA1", ($t=Bridge.ClientTest.Batch3.BridgeIssues.Bridge893A.TestA1, System.Enum.toString(Bridge.ClientTest.Batch3.BridgeIssues.Bridge893A, $t)));

                var a = 100;
                Bridge.Test.Assert.areEqual("100", System.Enum.toString(Bridge.ClientTest.Batch3.BridgeIssues.Bridge893A, a));

                Bridge.Test.Assert.areEqual("TestB3", ($t1=Bridge.ClientTest.Batch3.BridgeIssues.Bridge893B.TestB3, System.Enum.toString(Bridge.ClientTest.Batch3.BridgeIssues.Bridge893B, $t1)));

                var t = 3;
                Bridge.Test.Assert.areEqual("TestB1, TestB2", System.Enum.toString(Bridge.ClientTest.Batch3.BridgeIssues.Bridge893B, t));

                var t1 = 6;
                Bridge.Test.Assert.areEqual("TestB2, TestB3", System.Enum.toString(Bridge.ClientTest.Batch3.BridgeIssues.Bridge893B, t1));
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge893A', {
        $kind: "enum",
        statics: {
            TestA1: 0,
            TestA2: 1
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge893B', {
        $kind: "enum",
        statics: {
            TestB1: 1,
            TestB2: 2,
            TestB3: 4
        },
        $flags: true
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge898', {
        statics: {
            testDecimalConversion: function () {
                var check = true;
                var test = System.Decimal(check ? 1 : 2);

                Bridge.Test.Assert.true$1(test.equalsT(System.Decimal(1)), "One True");
                Bridge.Test.Assert.areEqual$1("System.Decimal", Bridge.getTypeName(test), "Is decimal");
            },
            testDoubleConversion: function () {
                var check = true;
                var test = check ? 1 : 2;

                Bridge.Test.Assert.true$1(test === 1, "One True");
                Bridge.Test.Assert.areEqual$1("Number", Bridge.getTypeName(test), "Is number");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge905', {
        statics: {
            dayOfWeekFixed: function () {
                var $t;
                var dictionary = new (System.Collections.Generic.Dictionary$2(System.DayOfWeek,System.Int32))();
                dictionary.add(0, 1);

                Bridge.Test.Assert.areEqual$1(1, dictionary.get(0), "1");
                Bridge.Test.Assert.areEqual$1("Saturday", ($t=(6), System.Enum.toString(System.DayOfWeek, $t)), "Saturday");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge906', {
        statics: {
            myfunc: function () {
                var $step = 0,
                    $task1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        $task1 = System.Threading.Tasks.Task.delay(1);
                                        $step = 1;
                                        $task1.continueWith($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $task1.getAwaitedResult();
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            testIfAsyncMethod: function () {
                var $step = 0,
                    $task1, 
                    $task2, 
                    $jumpFromFinally, 
                    asyncComplete, 
                    myvar, 
                    sum, 
                    $t, 
                    d, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1,2], $step);
                            switch ($step) {
                                case 0: {
                                    asyncComplete = Bridge.Test.Assert.async();

                                    myvar = [new $_.$AnonymousType$15(1), new $_.$AnonymousType$15(2)];
                                    sum = 0;
                                    $task1 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge906.myfunc();
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $task1.getAwaitedResult();
                                
                                    $t = Bridge.getEnumerator(myvar);
                                    while ($t.moveNext()) {
                                        d = $t.getCurrent();
                                        if (d.value > 0) {
                                            sum = (sum + d.value) | 0;
                                        }
                                    }

                                    $task2 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge906.myfunc();
                                    $step = 2;
                                    $task2.continueWith($asyncBody, true);
                                    return;
                                }
                                case 2: {
                                    $task2.getAwaitedResult();
                                
                                    Bridge.Test.Assert.areEqual(3, sum);

                                    asyncComplete();
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            },
            testIfElseAsyncMethod: function () {
                var $step = 0,
                    $task1, 
                    $task2, 
                    $jumpFromFinally, 
                    asyncComplete, 
                    myvar, 
                    sum, 
                    $t, 
                    d, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1,2], $step);
                            switch ($step) {
                                case 0: {
                                    asyncComplete = Bridge.Test.Assert.async();

                                    myvar = [new $_.$AnonymousType$15(-3), new $_.$AnonymousType$15(2)];
                                    sum = 0;
                                    $task1 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge906.myfunc();
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $task1.getAwaitedResult();
                                
                                    $t = Bridge.getEnumerator(myvar);
                                    while ($t.moveNext()) {
                                        d = $t.getCurrent();
                                        if (d.value > 0) {
                                            sum = (sum + d.value) | 0;
                                        } else {
                                            sum = (sum - d.value) | 0;
                                        }
                                    }

                                    $task2 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge906.myfunc();
                                    $step = 2;
                                    $task2.continueWith($asyncBody, true);
                                    return;
                                }
                                case 2: {
                                    $task2.getAwaitedResult();
                                
                                    Bridge.Test.Assert.areEqual(5, sum);

                                    asyncComplete();
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            }
        }
    });

    Bridge.define("$AnonymousType$15", $_, {
        $kind: "anonymous",
        constructor: function (value) {
            this.value = value;
        },
        getValue : function () {
            return this.value;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$15)) {
                return false;
            }
            return Bridge.equals(this.value, o.value);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 381236456;
            hash = hash * 23 + (this.value == null ? 0 : Bridge.getHashCode(this.value));
            return hash;
        },
        toJSON: function () {
            return {
                value : this.value
            };
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge907', {
        statics: {
            testStringSpitWithNullParameterFixed: function () {
                var s = "Hello World!";
                var res = System.String.split(s, null, null, 1);

                Bridge.Test.Assert.areEqual$1(2, res.length, "Bridge907 instance Length");
                Bridge.Test.Assert.areEqual$1("Hello", res[0], "Bridge907 instance [0]");
                Bridge.Test.Assert.areEqual$1("World!", res[1], "Bridge907 instance [1]");

                var s1 = "Hi Man!";
                var res1 = System.String.split(s1, null, null, 1);

                Bridge.Test.Assert.areEqual$1(2, res1.length, "Bridge907 static Length");
                Bridge.Test.Assert.areEqual$1("Hi", res1[0], "Bridge907 static [0]");
                Bridge.Test.Assert.areEqual$1("Man!", res1[1], "Bridge907 static [1]");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge912', {
        statics: {
            myfunc: function () {
                var $step = 0,
                    $task1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        $task1 = System.Threading.Tasks.Task.delay(1);
                                        $step = 1;
                                        $task1.continueWith($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $task1.getAwaitedResult();
                                        $tcs.setResult(1);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            testAsyncMethodInBlock: function () {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    asyncComplete, 
                    result, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    asyncComplete = Bridge.Test.Assert.async();
                                    result = 0;
                                    $task1 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge912.myfunc();
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    result = $taskResult1;

                                    Bridge.Test.Assert.areEqual(1, result);

                                    asyncComplete();
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge913', {
        statics: {
            testNullableDateTimeGreaterThanWorks: function () {
                var a = new Date();
                var b = null;

                Bridge.Test.Assert.false$1(Bridge.Date.gt(a, b), "Bridge913 gt");
                Bridge.Test.Assert.false$1(Bridge.Date.lt(a, b), "Bridge913 lt");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge918', {
        statics: {
            testDynamicAsyncResult: function () {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    asyncComplete, 
                    a, 
                    result, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    asyncComplete = Bridge.Test.Assert.async();
                                    a = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge918();
                                    $task1 = a.test();
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    result = Bridge.cast($taskResult1, System.Int32);

                                    Bridge.Test.Assert.areEqual(1, result);

                                    asyncComplete();
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            }
        },
        test: function () {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                $returnValue, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    $task1 = System.Threading.Tasks.Task.delay(1);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getAwaitedResult();
                                    $tcs.setResult(1);
                                    return;
                                }
                                default: {
                                    $tcs.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);

            $asyncBody();
            return $tcs.task;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge922', {
        statics: {
            testLinqDecimal: function () {
                var a = [System.Decimal(1.0), System.Decimal(2.0), System.Decimal(3.0)];

                Bridge.Test.Assert.true(System.Linq.Enumerable.from(a).average().equalsT(System.Decimal(2)));
                Bridge.Test.Assert.true(System.Linq.Enumerable.from(a).sum().equalsT(System.Decimal(6)));
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge928', {
        statics: {
            testAsyncMethod: function () {
                var $step = 0,
                    $task1, 
                    $jumpFromFinally, 
                    $returnValue, 
                    done, 
                    result, 
                    $async_e, 
                    $e1, 
                    $async_e1, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3,4], $step);
                                switch ($step) {
                                    case 0: {
                                        done = Bridge.Test.Assert.async();
                                        result = false;
                                        $step = 1;
                                        continue;
                                    }
                                    case 1: {
                                        $task1 = System.Threading.Tasks.Task.delay(1);
                                        $step = 2;
                                        $task1.continueWith($asyncBody, true);
                                        return;
                                    }
                                    case 2: {
                                        $task1.getAwaitedResult();
                                        $step = 3;
                                        continue;
                                    }
                                    case 3: {
                                        try {
                                            throw new System.Exception("test");
                                        }
                                        catch ($e1) {
                                            $e1 = System.Exception.create($e1);
                                        }

                                        result = true;

                                        if ($jumpFromFinally > -1) {
                                            $step = $jumpFromFinally;
                                            $jumpFromFinally = null;
                                        } else if ($async_e) {
                                            throw $async_e;
                                            return;
                                        } else if (Bridge.isDefined($returnValue)) {
                                            $tcs.setResult($returnValue);
                                            return;
                                        }
                                        $step = 4;
                                        continue;
                                    }
                                    case 4: {
                                    
                                        Bridge.Test.Assert.true(result);

                                        done();
                                        return;
                                    }
                                    default: {
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            if ($step >= 1 && $step <= 2){

                                $step = 3;
                                $asyncBody();
                                return;
                            }
                            throw $async_e;
                        }
                    }, arguments);

                $asyncBody();
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge929', {
        statics: {
            testAsyncException: function () {
                var $step = 0,
                    $task1, 
                    $jumpFromFinally, 
                    $returnValue, 
                    done, 
                    e, 
                    $async_e, 
                    $async_e1, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3,4], $step);
                                switch ($step) {
                                    case 0: {
                                        done = Bridge.Test.Assert.async();
                                        $step = 1;
                                        continue;
                                    }
                                    case 1: {
                                        $task1 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge929.test();
                                        $step = 2;
                                        $task1.continueWith($asyncBody, true);
                                        return;
                                    }
                                    case 2: {
                                        $task1.getAwaitedResult();
                                        Bridge.Test.Assert.fail$1("Exception should be rethrowed in catch block");
                                        $step = 4;
                                        continue;
                                    }
                                    case 3: {
                                        Bridge.Test.Assert.areEqual("test", e.getMessage());
                                        $async_e = null;
                                        $step = 4;
                                        continue;
                                    }
                                    case 4: {
                                    
                                        done();
                                        return;
                                    }
                                    default: {
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            if ( $step >= 1 && $step <= 2 ){
                                e = $async_e;
                                $step = 3;
                                $asyncBody();
                                return;
                            }
                            throw $async_e;
                        }
                    }, arguments);

                $asyncBody();
            },
            test: function () {
                var $step = 0,
                    $task1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    $e1, 
                    $async_e, 
                    $async_e1, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([1,2,3,4], $step);
                                switch ($step) {

                                    case 1: {
                                        $task1 = System.Threading.Tasks.Task.delay(1);
                                        $step = 2;
                                        $task1.continueWith($asyncBody);
                                        return;
                                    }
                                    case 2: {
                                        $task1.getAwaitedResult();
                                        throw new System.Exception("test");
                                        $step = 4;
                                        continue;
                                    }
                                    case 3: {
                                        try {
                                            throw new System.Exception("catch");
                                        }
                                        catch ($e1) {
                                            $e1 = System.Exception.create($e1);
                                        }
                                        throw $async_e;
                                        $async_e = null;
                                        $step = 4;
                                        continue;
                                    }
                                    case 4: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            if ( $step >= 1 && $step <= 2 ){
                                $step = 3;
                                $asyncBody();
                                return;
                            }
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge930', {
        statics: {
            test: function () {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        $task1 = System.Threading.Tasks.Task.fromResult(1);
                                        $step = 1;
                                        $task1.continueWith($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        throw new System.Exception("test");
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            test1: function () {
                var $step = 0,
                    $task1, 
                    $task2, 
                    $task3, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    res, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3,4,5], $step);
                                switch ($step) {
                                    case 0: {
                                        res = true;
                                        $task1 = System.Threading.Tasks.Task.delay(1);
                                        $step = 1;
                                        $task1.continueWith($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $task1.getAwaitedResult();
                                    
                                        if (res) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                    }
                                    case 2: {
                                        $task2 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge930.test();
                                        $step = 3;
                                        $task2.continueWith($asyncBody);
                                        return;
                                    }
                                    case 3: {
                                        $task2.getAwaitedResult();
                                        $step = 4;
                                        continue;
                                    }
                                    case 4: {
                                    
                                        $task3 = System.Threading.Tasks.Task.delay(1);
                                        $step = 5;
                                        $task3.continueWith($asyncBody);
                                        return;
                                    }
                                    case 5: {
                                        $task3.getAwaitedResult();
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            testAsyncException: function () {
                var $step = 0,
                    $task1, 
                    $jumpFromFinally, 
                    $returnValue, 
                    done, 
                    e, 
                    $async_e, 
                    $async_e1, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3,4], $step);
                                switch ($step) {
                                    case 0: {
                                        done = Bridge.Test.Assert.async();
                                        $step = 1;
                                        continue;
                                    }
                                    case 1: {
                                        $task1 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge930.test1();
                                        $step = 2;
                                        $task1.continueWith($asyncBody, true);
                                        return;
                                    }
                                    case 2: {
                                        $task1.getAwaitedResult();
                                        Bridge.Test.Assert.fail$1("await should throw an exception");
                                        $step = 4;
                                        continue;
                                    }
                                    case 3: {
                                        Bridge.Test.Assert.areEqual("test", e.getMessage());
                                        $async_e = null;
                                        $step = 4;
                                        continue;
                                    }
                                    case 4: {
                                    
                                        done();
                                        return;
                                    }
                                    default: {
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            if ( $step >= 1 && $step <= 2 ){
                                e = $async_e;
                                $step = 3;
                                $asyncBody();
                                return;
                            }
                            throw $async_e;
                        }
                    }, arguments);

                $asyncBody();
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge933', {
        statics: {
            isRunning: false,
            testBooleanInIfStatement: function () {
                if (Bridge.ClientTest.Batch3.BridgeIssues.Bridge933.isRunning) {
                    Bridge.Test.Assert.fail$1("IsRunning must be false");
                }

                Bridge.Test.Assert.false(Bridge.ClientTest.Batch3.BridgeIssues.Bridge933.isRunning);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge952', {
        statics: {
            testDoubleMinValue: function () {
                Bridge.Test.Assert.areEqual$1(-1.7976931348623157E+308, System.Double.min, "Compare value");
                Bridge.Test.Assert.areEqual$1("-1.79769313486232E+308", System.Double.format(System.Double.min, 'G'), "Compare by ToString()");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge968', {
        statics: {
            testDecimalDoesNotParseIncorrectValue: function () {
                var d = { };
                var b = System.Decimal.tryParse("123e", null, d);

                Bridge.Test.Assert.false(b);
            },
            testDecimalParsesCorrectValues: function () {
                var d1 = System.Decimal("123e1");
                Bridge.Test.Assert.areEqual$1(System.Decimal(1230.0), d1, "123e1");

                var d2 = System.Decimal("123e+1");
                Bridge.Test.Assert.areEqual$1(System.Decimal(1230.0), d2, "123e+1");

                var d3 = System.Decimal("123e-1");
                Bridge.Test.Assert.areEqual$1(System.Decimal(12.3), d3, "123e-1");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge975', {
        statics: {
            testCastToLongWorksForBigNumberInIE: function () {
                var i = System.Int64([-1,2097151]);

                Bridge.Test.Assert.areEqual("9007199254740991", i.toString());
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge989', {
        statics: {
            dateTimeToISOStringWorks: function () {
                var d1 = new Date(2011, 10 - 1, 5, 14, 48);
                var d2 = Bridge.Date.toUTC(d1);

                // This is required to change d1 to UTC without changing time
                d1 = new Date(d1.getFullYear(), d1.getMonth() + (((d1.getMonth() + 1) - (d2.getMonth() + 1)) | 0), d1.getDate(), d1.getHours(), d1.getMinutes(), d1.getSeconds(), d1.getMilliseconds());
                d1 = new Date(d1.valueOf() + Math.round((((d1.getDate() - d2.getDate()) | 0)) * 864e5));
                d1 = new Date(d1.valueOf() + Math.round((((d1.getHours() - d2.getHours()) | 0)) * 36e5));
                d1 = new Date(d1.valueOf() + Math.round((((d1.getMinutes() - d2.getMinutes()) | 0)) * 6e4));

                Bridge.Test.Assert.areEqual("2011-10-05T14:48:00.000Z", d1.toISOString());
            },
            dateToISOStringWorks: function () {
                var d1 = new Date("05 October 2011 14:48 UTC");

                Bridge.Test.Assert.areEqual("2011-10-05T14:48:00.000Z", d1.toISOString());
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge991', {
        statics: {
            config: {
                properties: {
                    Prop: 0
                }
            },
            testMultiplyAssignment: function () {
                var dict = new (System.Collections.Generic.Dictionary$2(System.Int32,System.Int32))();
                var i = 0;

                dict.set(0, (i = 1));
                Bridge.Test.Assert.areEqual(dict.get(0), 1);
                Bridge.Test.Assert.areEqual(i, 1);

                i = (dict.set(0, 2), 2);
                Bridge.Test.Assert.areEqual(dict.get(0), 2);
                Bridge.Test.Assert.areEqual(i, 2);

                dict.set(0, (Bridge.ClientTest.Batch3.BridgeIssues.Bridge991.setProp(3), 3));
                Bridge.Test.Assert.areEqual(dict.get(0), 3);
                Bridge.Test.Assert.areEqual(Bridge.ClientTest.Batch3.BridgeIssues.Bridge991.getProp(), 3);

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge991.setProp((dict.set(0, 4), 4));
                Bridge.Test.Assert.areEqual(dict.get(0), 4);
                Bridge.Test.Assert.areEqual(Bridge.ClientTest.Batch3.BridgeIssues.Bridge991.getProp(), 4);

                dict.set(0, (Bridge.ClientTest.Batch3.BridgeIssues.Bridge991.setProp(5), 5));
                Bridge.Test.Assert.areEqual(dict.get(0), 5);
                Bridge.Test.Assert.areEqual(Bridge.ClientTest.Batch3.BridgeIssues.Bridge991.getProp(), 5);

                Bridge.ClientTest.Batch3.BridgeIssues.Bridge991.setProp((dict.set(0, 6), 6));
                Bridge.Test.Assert.areEqual(dict.get(0), 6);
                Bridge.Test.Assert.areEqual(Bridge.ClientTest.Batch3.BridgeIssues.Bridge991.getProp(), 6);

                dict.set(0, (dict.set(1, 7), 7));
                Bridge.Test.Assert.areEqual(dict.get(0), 7);
                Bridge.Test.Assert.areEqual(dict.get(1), 7);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge997', {
        statics: {
            testConvertAllForIntList: function () {
                var l = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge997.f1(new (System.Collections.Generic.List$1(System.Int32))());

                Bridge.Test.Assert.areDeepEqual(["1", "2", "3"], l.convertAll(String, $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge997.f2).toArray());
            },
            testConvertAllForNullConverter: function () {
                var l = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge997.f3(new (System.Collections.Generic.List$1(System.Int32))());

                var converter = null;

                Bridge.Test.Assert.throws$5(function () {
                    l.convertAll(String, converter);
                }, "Null converter throws exception");
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge997", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge997, {
        f1: function (_o12) {
            _o12.add(1);
            _o12.add(2);
            _o12.add(3);
            return _o12;
        },
        f2: function (x) {
            return x.toString();
        },
        f3: function (_o13) {
            _o13.add(1);
            _o13.add(2);
            _o13.add(3);
            return _o13;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge999', {
        statics: {
            testNestedLambdasToLifting: function () {
                var offset = 1;
                var f1 = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge999.f2;

                var f2 = function () {
                    return Bridge.toArray(System.Linq.Enumerable.from([4, 5, 6]).select(function (value) {
                        return ((value + offset) | 0);
                    })).join(", ");
                };

                var f3 = function () {
                    var f4 = function () {
                        return Bridge.toArray(System.Linq.Enumerable.from([7, 8, 9]).select(function (value) {
                            return ((value + offset) | 0);
                        })).join(", ");
                    };

                    return f4();
                };

                var f5 = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge999.f3;

                var scope = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge999;

                Bridge.Test.Assert.notNull$1(scope.f1, "scope.f1 should exists");
                Bridge.Test.Assert.notNull$1(scope.f2, "scope.f2 should exists");
                Bridge.Test.Assert.notNull$1(scope.f3, "scope.f3 should exists");
                Bridge.Test.Assert.null$1(scope.f4, "scope.f4 should be null");
                Bridge.Test.Assert.null$1(scope.f5, "scope.f5 should be null");
                Bridge.Test.Assert.areEqual$1(scope.f1(1), 1, "scope.f1(1) should be 1");
                Bridge.Test.Assert.areEqual$1(scope.f2(), "1, 2, 3", "scope.f2() should be 1, 2, 3");
                Bridge.Test.Assert.areEqual$1(scope.f3(), "6, 7, 8", "scope.f3() should be 6, 7, 8");
                Bridge.Test.Assert.areEqual$1(f1(), "1, 2, 3", "f1() should be 1, 2, 3");
                Bridge.Test.Assert.areEqual$1(f2(), "5, 6, 7", "f2() should be 5, 6, 7");
                Bridge.Test.Assert.areEqual$1(f3(), "8, 9, 10", "f3() should be 8, 9, 10");
                Bridge.Test.Assert.areEqual$1(f5(), "6, 7, 8", "f5() should be 6, 7, 8");
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge999", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge999, {
        f1: function (value) {
            return value;
        },
        f2: function () {
            return Bridge.toArray(System.Linq.Enumerable.from([1, 2, 3]).select($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge999.f1)).join(", ");
        },
        f3: function () {
            var offset2 = 2;
            return Bridge.toArray(System.Linq.Enumerable.from([4, 5, 6]).select(function (value) {
                return ((value + offset2) | 0);
            })).join(", ");
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge999_1', {
        statics: {
            testNestedLambdasToLiftingInForeach: function () {
                var one = System.Linq.Enumerable.from(new (System.Collections.Generic.List$1(System.Int32))([1])).select($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge999_1.f1);

                var sum = 0;

                one.forEach(function (el) {
                    var list = System.Linq.Enumerable.from(new (System.Collections.Generic.List$1(System.Int32))([3, 5])).select($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge999_1.f1);

                    list.forEach(function (el2) {
                        sum = (sum + el2) | 0;
                    });
                });

                Bridge.Test.Assert.areEqual(8, sum);

                var scope = $_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge999_1;

                Bridge.Test.Assert.notNull$1(scope.f1, "scope.f1 should exists");
                Bridge.Test.Assert.null$1(scope.f2, "scope.f2 should be null");
                Bridge.Test.Assert.null$1(scope.f3, "scope.f3 should be null");
                Bridge.Test.Assert.areEqual$1(scope.f1(1), 1, "scope.f1(1) should be 1");
            }
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.Bridge999_1", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.Bridge999_1, {
        f1: function (x) {
            return x;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.N1122', {
        statics: {
            assertNumber: function (expected, actual, message) {
                if (message === void 0) { message = null; }
                var a = actual != null ? actual.toString() : "null";
                var e = expected != null ? expected.toString() : "null";

                Bridge.Test.Assert.areEqual$1(e, a, message);
            },
            testClippingInDefaultOverflowMode: function () {
                var x = System.Double.max;

                var y1 = Bridge.Int.clip32(Math.floor(x / 0.2));
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(-2147483648, y1, "int");

                var y2 = Bridge.Int.clipu32(Math.floor(x / 0.2));
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(0, y2, "uint");

                var z1 = Bridge.Int.clip64(Math.floor(x / 0.2));
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(System.Int64.MinValue, z1, "long");

                var z2 = Bridge.Int.clipu64(Math.floor(x / 0.2));
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(System.UInt64.MinValue, z2, "ulong");
            },
            testIntegerDivisionInDefaultMode: function () {
                var x = 1.1;

                var y1 = Bridge.Int.clip32(1 / x);
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(0, y1, "int");

                var y2 = Bridge.Int.clipu32(1 / x);
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(0, y2, "uint");

                var z1 = Bridge.Int.clip64(1 / x);
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(System.Int64(0), z1, "long");

                var z2 = Bridge.Int.clipu64(1 / x);
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(System.UInt64(0), z2, "ulong");
            },
            testInfinityCastDefaultOverflowMode: function () {
                var pi = Number.POSITIVE_INFINITY;

                var y1 = Bridge.Int.clipu8(pi);
                var y2 = Bridge.Int.clip8(pi);
                var y3 = Bridge.Int.clip16(pi);
                var y4 = Bridge.Int.clipu16(pi);
                var y5 = Bridge.Int.clip32(pi);
                var y6 = Bridge.Int.clipu32(pi);
                var y7 = Bridge.Int.clip64(pi);
                var y8 = Bridge.Int.clipu64(pi);

                // https://msdn.microsoft.com/en-us/library/aa691289(v=vs.71).aspx
                // If the value of the operand is NaN or infinite, the result of the conversion is an unspecified value of the destination type.
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(0, y1, "PositiveInfinity -> byte");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(-128, y2, "PositiveInfinity -> sbyte");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(-32768, y3, "PositiveInfinity -> short");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(0, y4, "PositiveInfinity -> ushort");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(-2147483648, y5, "PositiveInfinity -> int");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(0, y6, "PositiveInfinity -> uint");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(System.Int64.MinValue, y7, "PositiveInfinity -> long");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(System.UInt64.MinValue, y8, "PositiveInfinity -> ulong");

                var ni = Number.NEGATIVE_INFINITY;

                var z1 = Bridge.Int.clipu8(ni);
                var z2 = Bridge.Int.clip8(ni);
                var z3 = Bridge.Int.clip16(ni);
                var z4 = Bridge.Int.clipu16(ni);
                var z5 = Bridge.Int.clip32(ni);
                var z6 = Bridge.Int.clipu32(ni);
                var z7 = Bridge.Int.clip64(ni);
                var z8 = Bridge.Int.clipu64(ni);

                // https://msdn.microsoft.com/en-us/library/aa691289(v=vs.71).aspx
                // If the value of the operand is NaN or infinite, the result of the conversion is an unspecified value of the destination type.
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(0, z1, "NegativeInfinity -> byte");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(-128, z2, "NegativeInfinity -> sbyte");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(-32768, z3, "NegativeInfinity -> short");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(0, z4, "NegativeInfinity -> ushort");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(-2147483648, z5, "NegativeInfinity -> int");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(0, z6, "NegativeInfinity -> uint");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(System.Int64.MinValue, z7, "NegativeInfinity -> long");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(System.UInt64.MinValue, z8, "NegativeInfinity -> ulong");
            },
            testInfinityCastWithNullable1DefaultOverflowMode: function () {
                var pi = Number.POSITIVE_INFINITY;

                var y1 = Bridge.Int.clipu8(pi);
                var y2 = Bridge.Int.clip8(pi);
                var y3 = Bridge.Int.clip16(pi);
                var y4 = Bridge.Int.clipu16(pi);
                var y5 = Bridge.Int.clip32(pi);
                var y6 = Bridge.Int.clipu32(pi);
                var y7 = Bridge.Int.clip64(pi);
                var y8 = Bridge.Int.clipu64(pi);

                // https://msdn.microsoft.com/en-us/library/aa691289(v=vs.71).aspx
                // If the value of the operand is NaN or infinite, the result of the conversion is an unspecified value of the destination type.
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(0, y1, "PositiveInfinity -> byte");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(-128, y2, "PositiveInfinity -> sbyte");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(-32768, y3, "PositiveInfinity -> short");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(0, y4, "PositiveInfinity -> ushort");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(-2147483648, y5, "PositiveInfinity -> int");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(0, y6, "PositiveInfinity -> uint");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(System.Int64.MinValue, y7, "PositiveInfinity -> long");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(System.UInt64.MinValue, y8, "PositiveInfinity -> ulong");

                var ni = Number.NEGATIVE_INFINITY;

                var z1 = Bridge.Int.clipu8(ni);
                var z2 = Bridge.Int.clip8(ni);
                var z3 = Bridge.Int.clip16(ni);
                var z4 = Bridge.Int.clipu16(ni);
                var z5 = Bridge.Int.clip32(ni);
                var z6 = Bridge.Int.clipu32(ni);
                var z7 = Bridge.Int.clip64(ni);
                var z8 = Bridge.Int.clipu64(ni);

                // https://msdn.microsoft.com/en-us/library/aa691289(v=vs.71).aspx
                // If the value of the operand is NaN or infinite, the result of the conversion is an unspecified value of the destination type.
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(0, z1, "NegativeInfinity -> byte");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(-128, z2, "NegativeInfinity -> sbyte");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(-32768, z3, "NegativeInfinity -> short");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(0, z4, "NegativeInfinity -> ushort");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(-2147483648, z5, "NegativeInfinity -> int");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(0, z6, "NegativeInfinity -> uint");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(System.Int64.MinValue, z7, "NegativeInfinity -> long");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(System.UInt64.MinValue, z8, "NegativeInfinity -> ulong");
            },
            testInfinityCastWithNullable2DefaultOverflowMode: function () {
                var pi = Number.POSITIVE_INFINITY;

                var y1 = Bridge.Int.clipu8(pi);
                var y2 = Bridge.Int.clip8(pi);
                var y3 = Bridge.Int.clip16(pi);
                var y4 = Bridge.Int.clipu16(pi);
                var y5 = Bridge.Int.clip32(pi);
                var y6 = Bridge.Int.clipu32(pi);
                var y7 = Bridge.Int.clip64(pi);
                var y8 = Bridge.Int.clipu64(pi);

                // https://msdn.microsoft.com/en-us/library/aa691289(v=vs.71).aspx
                // If the value of the operand is NaN or infinite, the result of the conversion is an unspecified value of the destination type.
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(0, System.Nullable.getValue(y1), "PositiveInfinity -> byte");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(-128, System.Nullable.getValue(y2), "PositiveInfinity -> sbyte");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(-32768, System.Nullable.getValue(y3), "PositiveInfinity -> short");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(0, System.Nullable.getValue(y4), "PositiveInfinity -> ushort");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(-2147483648, System.Nullable.getValue(y5), "PositiveInfinity -> int");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(0, System.Nullable.getValue(y6), "PositiveInfinity -> uint");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(System.Int64.MinValue, System.Nullable.getValue(y7), "PositiveInfinity -> long");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(System.UInt64.MinValue, System.Nullable.getValue(y8), "PositiveInfinity -> ulong");

                var ni = Number.NEGATIVE_INFINITY;

                var z1 = Bridge.Int.clipu8(ni);
                var z2 = Bridge.Int.clip8(ni);
                var z3 = Bridge.Int.clip16(ni);
                var z4 = Bridge.Int.clipu16(ni);
                var z5 = Bridge.Int.clip32(ni);
                var z6 = Bridge.Int.clipu32(ni);
                var z7 = Bridge.Int.clip64(ni);
                var z8 = Bridge.Int.clipu64(ni);

                // https://msdn.microsoft.com/en-us/library/aa691289(v=vs.71).aspx
                // If the value of the operand is NaN or infinite, the result of the conversion is an unspecified value of the destination type.
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(0, System.Nullable.getValue(z1), "NegativeInfinity -> byte");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(-128, System.Nullable.getValue(z2), "NegativeInfinity -> sbyte");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(-32768, System.Nullable.getValue(z3), "NegativeInfinity -> short");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(0, System.Nullable.getValue(z4), "NegativeInfinity -> ushort");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(-2147483648, System.Nullable.getValue(z5), "NegativeInfinity -> int");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(0, System.Nullable.getValue(z6), "NegativeInfinity -> uint");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(System.Int64.MinValue, System.Nullable.getValue(z7), "NegativeInfinity -> long");
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.assertNumber(System.UInt64.MinValue, System.Nullable.getValue(z8), "NegativeInfinity -> ulong");
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Person383', {
        config: {
            properties: {
                Name: null
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues', {
        statics: {
            n169: function () {
                // TEST
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge169.m1();
                Bridge.Test.Assert.areEqual$1(1, Bridge.ClientTest.Batch3.BridgeIssues.Bridge169.number, "M1()");

                // TEST
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge169.m2();
                Bridge.Test.Assert.areEqual$1(2, Bridge.ClientTest.Batch3.BridgeIssues.Bridge169.number, "M2()");
            },
            n240: function () {
                // TEST
                var b = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge240B();
                Bridge.Test.Assert.true$1(b != null, "Instance of B created");
                Bridge.Test.Assert.areEqual$1("B", b.getString(), "b.GetString() = 'B'");
                Bridge.Test.Assert.areEqual$1(1, b.getData(), "b.Data = 1");
            },
            n264: function () {
                // TEST
                var oldHash = Bridge.global.location.hash;
                Bridge.global.location.hash = "#new-hash";
                Bridge.Test.Assert.areEqual$1("#new-hash", Bridge.global.location.hash, "Setting Location.Hash works");
                Bridge.global.location.hash = oldHash; // to clean up the url
            },
            n266: function () {
                // TEST
                Bridge.Test.Assert.true$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge266A.test() != null, "new object() call transpiled");
            },
            n272: function () {
                // TEST
                Bridge.Test.Assert.areEqual$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge272.MyEnum.Abc, Bridge.ClientTest.Batch3.BridgeIssues.Bridge272.test(1), "Casted MyEnum.Abc");
                Bridge.Test.Assert.areEqual$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge272.MyEnum.Ghi, Bridge.ClientTest.Batch3.BridgeIssues.Bridge272.test(3), "Casted MyEnum.Ghi");
                Bridge.Test.Assert.areEqual$1(4, Bridge.ClientTest.Batch3.BridgeIssues.Bridge272.test(4), "Casted MyEnum.Abc");
            },
            n273: function () {
                // TEST
                var items = $_.Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.f1(new (System.Collections.Generic.List$1(System.Int32))());

                var r = items.slice(-1).toArray();
                Bridge.Test.Assert.areEqual$1([4], r, "Slices start = -1");

                r = items.slice(1).toArray();
                Bridge.Test.Assert.areEqual$1([1, 2, 3, 4], r, "Slices start = 1");

                r = items.slice(-3, 4).toArray();
                Bridge.Test.Assert.areEqual$1([2, 3], r, "Slices start = -3, end = 3");

                r = items.slice(1, 3).toArray();
                Bridge.Test.Assert.areEqual$1([1, 2], r, "Slices start = 1, end = 2");
            },
            n277: function () {
                Bridge.Test.Assert.areEqual$1(0, Bridge.ClientTest.Batch3.BridgeIssues.Bridge277.Int, "Enum member with reserved name initialized");
            },
            n294: function () {
                var c = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge294("Vlad");

                Bridge.Test.Assert.areEqual$1("Vlad", c.getName(), "Class method works");
                Bridge.Test.Assert.areEqual$1("Vlad", c.getNameThroughGeneric(System.Int32), "Generic class method works");
            },
            n304: function () {
                var c = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge304();
                var i = c;

                i.Bridge$ClientTest$Batch3$BridgeIssues$IBridge304$f("1");
                Bridge.Test.Assert.areEqual$1("1", c.getX(), "Interface method works");

                c.f$1();
                Bridge.Test.Assert.areEqual$1("void F()", c.getX(), "Class method works");
            },
            n305: function () {
                var $t;
                var c = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge305(["1", "2", "3"]);

                var result = "";
                $t = Bridge.getEnumerator(c);
                while ($t.moveNext()) {
                    var item = $t.getCurrent();
                    result = System.String.concat(result, item);
                }

                Bridge.Test.Assert.areEqual$1("123", result, "IEnumerator works");
            },
            n306: function () {
                var b = Bridge.ClientTest.Batch3.BridgeIssues.Bridge306B.new(Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge306B.Props(), {
                    name: "B"
                } ));
                Bridge.Test.Assert.areEqual$1("Bridge.ClientTest.Batch3.BridgeIssues.Bridge306B.Props:B", b, "Bridge306B.New() works");

                var a = Bridge.ClientTest.Batch3.BridgeIssues.Bridge306A.new(Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge306A.Props(), {
                    name: "A"
                } ));
                Bridge.Test.Assert.areEqual$1("Bridge.ClientTest.Batch3.BridgeIssues.Bridge306A.Props:A", a, "Bridge306A.New() works");
            },
            n329: function () {
                var d1 = { };
                var b1 = Bridge.Date.tryParse("2001-01-01", null, d1, true);
                Bridge.Test.Assert.true$1(b1, "TryParse parsed '2001 - 01 - 01'");
                Bridge.Test.Assert.areEqual$1(2001, d1.v.getUTCFullYear(), "TryParse works Year");
                Bridge.Test.Assert.areEqual$1(1, (d1.v.getUTCMonth() + 1), "TryParse works Month");
                Bridge.Test.Assert.areEqual$1(1, d1.v.getUTCDay(), "TryParse works Day");

                var d2 = Bridge.Date.parse("2001-01-01", null, true);
                Bridge.Test.Assert.areEqual$1(Bridge.Date.format(d1.v), Bridge.Date.format(d2), "TryParse And Parse give the same result");
            },
            n335: function () {
                var l = new (System.Collections.Generic.List$1(String))(["1", "2", "3", "1"]);
                Bridge.Test.Assert.areEqual$1(3, l.indexOf("1", 2), "IndexOf with startIndex used");
            },
            n336: function () {
                var l = new (System.Collections.Generic.List$1(String))(["4"]);

                l.insertRange(0, ["1", "2"]);
                Bridge.Test.Assert.areEqual$1(["1", "2", "4"], l.toArray(), "InsertRange works (1)");

                l.insertRange(2, ["3"]);
                Bridge.Test.Assert.areEqual$1(["1", "2", "3", "4"], l.toArray(), "InsertRange works (2)");
            },
            n337: function () {
                var l = new (System.Collections.Generic.List$1(String))(["1", "2"]);

                var b = l.remove("7");
                Bridge.Test.Assert.false$1(b, "Remove() not existing element returns false");
                Bridge.Test.Assert.areEqual$1(["1", "2"], l.toArray(), "Remove() not existing does not change the List");

                b = l.remove("2");
                Bridge.Test.Assert.true$1(b, "Remove() existing element returns true");
                Bridge.Test.Assert.areEqual$1(["1"], l.toArray(), "Remove() not existing changes the List");
            },
            n338: function () {
                var l = new (System.Collections.Generic.List$1(String))(1000);

                var b = Bridge.is(l, System.Collections.Generic.IList$1(String));

                Bridge.Test.Assert.true$1(b, "List<T> declares it implemets IList<T>");
            },
            n339: function () {
                var c = new (System.Collections.Generic.Comparer$1(System.Int32))(System.Collections.Generic.Comparer$1.$default.fn);

                Bridge.Test.Assert.true$1(c != null, "Comparer<int>.Default works");
                Bridge.Test.Assert.true$1(Bridge.is(c, System.Collections.Generic.IComparer$1(System.Int32)), "Comparer<T> declares it implemets IComparer<T>");
            },
            n340: function () {
                var c = new (System.Collections.Generic.EqualityComparer$1(System.Int32))();

                Bridge.Test.Assert.true$1(c != null, "EqualityComparer<int>.Default works");
                Bridge.Test.Assert.true$1(c.equals2(10, 10), "EqualityComparer<int>.Default.Equals(10, 10) works");
                Bridge.Test.Assert.false$1(c.equals2(10, 11), "EqualityComparer<int>.Default.Equals(10, 11) works");

                var s = new (System.Collections.Generic.EqualityComparer$1(String))();
                Bridge.Test.Assert.true$1(s != null, "EqualityComparer<string>.Default works");
                Bridge.Test.Assert.true$1(s.equals2("a", "a"), "EqualityComparer<string>.Default.Equals(\"a\", \"a\") works");
                Bridge.Test.Assert.false$1(s.equals2("a", "b"), "EqualityComparer<string>.Default.Equals(\"a\", \"b\") works");
            },
            n341: function () {
                var o11 = {  };
                var o12 = {  };
                var b1 = new (System.Collections.Generic.EqualityComparer$1(Object))().equals2(o11, o12);
                Bridge.Test.Assert.false$1(b1, "EqualityComparer<object>.Default.Equals(o11, o12) works");

                var o21 = new $_.$AnonymousType$16(7);
                var o22 = new $_.$AnonymousType$16(7);
                var b2 = new (System.Collections.Generic.EqualityComparer$1(Object))().equals2(o21, o22);
                Bridge.Test.Assert.true$1(b2, "EqualityComparer<object>.Default.Equals(o21, o22) works");

                var o31 = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge341A(), {
                    setStr: "String"
                } );
                var o32 = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge341A(), {
                    setStr: "String"
                } );
                var b3 = new (System.Collections.Generic.EqualityComparer$1(Object))().equals2(o31, o32);
                Bridge.Test.Assert.false$1(b3, "EqualityComparer<object>.Default.Equals(o31, o32) works");

                var o41 = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge341B(), {
                    setStr: "String"
                } );
                var o42 = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge341B(), {
                    setStr: "String"
                } );
                var b4 = new (System.Collections.Generic.EqualityComparer$1(Object))().equals2(o41, o42);
                Bridge.Test.Assert.true$1(b4, "EqualityComparer<object>.Default.Equals(o41, o42) works");
            },
            n342: function () {
                var dictionary = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge342.$constructor1($_.Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.f2(new (System.Collections.Generic.Dictionary$2(System.Int32,String))()));

                var interfacedDictionary = Bridge.cast(dictionary, System.Collections.Generic.IDictionary$2(System.Int32,String));

                Bridge.Test.Assert.areEqual$1("z", interfacedDictionary.System$Collections$Generic$IDictionary$2$System$Int32$String$getItem(6), "IDictionary getter works");
                Bridge.Test.Assert.throws$5(function () {
                    var r = interfacedDictionary.System$Collections$Generic$IDictionary$2$System$Int32$String$getItem(1);
                }, "IDictionary getter throws exception when incorrect key used");
            },
            n349: function () {
                var date = { };
                var culture = new System.Globalization.CultureInfo("ru-RU");

                Bridge.Test.Assert.true$1(culture != null, "Created CultureInfo(\"ru-RU\")");

                var parsed = Bridge.Date.tryParse("22.08.2015", culture, date);
                Bridge.Test.Assert.true$1(parsed, "Parsed \"22.08.2015\"");
                Bridge.Test.Assert.areEqual$1(2015, date.v.getFullYear(), "TryParse works Year");
                Bridge.Test.Assert.areEqual$1(8, (date.v.getMonth() + 1), "TryParse works Month");
                Bridge.Test.Assert.areEqual$1(22, date.v.getDate(), "TryParse works Day");
            },
            n377: function () {
                var objectLiteralInstance = { field1: "field1 value", field3: 7 };

                Bridge.Test.Assert.areEqual$1(true, objectLiteralInstance.hasOwnProperty("field1"), "ObjectLiteral's field with an explicit value is emitted");
                Bridge.Test.Assert.areEqual$1("field1 value", objectLiteralInstance.field1, "ObjectLiteral's field with an explicit value is emitted correctly");

                Bridge.Test.Assert.areEqual$1(true, objectLiteralInstance.hasOwnProperty("field3"), "ObjectLiteral's field with an explicit value is emitted");
                Bridge.Test.Assert.areEqual$1(7, objectLiteralInstance.field3, "ObjectLiteral's field with an explicit value is emitted correctly");

                Bridge.Test.Assert.areEqual$1(false, objectLiteralInstance.hasOwnProperty("field2"), "ObjectLiteral's field without an explicit value is not emitted");
                Bridge.Test.Assert.areEqual$1(false, objectLiteralInstance.hasOwnProperty("field4"), "ObjectLiteral's field without an explicit value is not emitted");
            },
            n383: function () {
                var person1 = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Person383(), {
                    setName: "Johnny"
                } );
                var msg1 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge383.doSomething(person1);

                Bridge.Test.Assert.areEqual$1("Johnny", msg1, "Instance extention Johnny");

                var person2 = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Person383(), {
                    setName: "Madison"
                } );
                var msg2 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge383.doSomething(person2);

                Bridge.Test.Assert.areEqual$1("Madison", msg2, "Static extention Madison");
            },
            n393: function () {
                var a = "testa";
                var b = "testa";

                var result = System.String.equals(a, b, 3);

                Bridge.Test.Assert.true$1(result, "testa testa StringComparison.InvariantCultureIgnoreCase");

                var a1 = "testa";
                var b1 = "testb";

                var result1 = System.String.equals(a1, b1, 3);

                Bridge.Test.Assert.false$1(result1, "testa testb StringComparison.InvariantCultureIgnoreCase");
            },
            n395: function () {
                var $t;
                var _dictOfTests = new (System.Collections.Generic.Dictionary$2(String,Bridge.ClientTest.Batch3.BridgeIssues.Bridge395))();

                var tests = [Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge395(), {
                    setId: "a"
                } ), Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge395(), {
                    setId: "b"
                } )];

                $t = Bridge.getEnumerator(tests);
                while ($t.moveNext()) {
                    var item = $t.getCurrent();
                    if (!_dictOfTests.containsKey(item.getId())) {
                        _dictOfTests.set(item.getId(), item);
                    }
                }

                Bridge.Test.Assert.areEqual$1(2, _dictOfTests.getCount(), "All items added");
                Bridge.Test.Assert.areEqual$1("a", _dictOfTests.get("a").getId(), "First element is a");
                Bridge.Test.Assert.areEqual$1("b", _dictOfTests.get("b").getId(), "Second element is b");
            },
            n406: function () {
                var TESTA = "TESTA";
                var TESTB = "TESTB";
                var TESTC = "TESTC";
                var TESTD = "TESTD";
                var TESTE = "TESTE";
                var TESTF = "TESTF";
                var TESTG = "TESTG";

                var test = TESTD;
                var result = null;
                switch (test) {
                    case TESTA: 
                        result = TESTA;
                        break;
                    case TESTB: 
                        result = TESTB;
                        break;
                    case TESTC: 
                        result = TESTC;
                        break;
                    case TESTD: 
                        result = TESTD;
                        break;
                    case TESTE: 
                        result = TESTE;
                        break;
                    case TESTF: 
                        result = TESTF;
                        break;
                    case TESTG: 
                        result = TESTG;
                        break;
                }

                Bridge.Test.Assert.areEqual$1("TESTD", result, "TESTD");
            },
            n407: function () {
                var vec = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge407(), {
                    setA: 1
                } );
                vec = Bridge.ClientTest.Batch3.BridgeIssues.Bridge407.op_Addition(vec.$clone(), Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge407(), {
                    setA: 2
                } ));

                Bridge.Test.Assert.areEqual$1(3, vec.getA(), "Vec.A = 3");

                var a = 2;
                a = (a + 5) | 0;
                Bridge.Test.Assert.areEqual$1(7, a, "a = 7");
            },
            n409: function () {
                var a = System.Decimal.round(System.Decimal(3.5), 6);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(a, "4", "Math.Round(3.5M)");

                var b = System.Decimal.round(System.Decimal(4.5), 6);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(b, "4", "Math.Round(4.5M)");
            },
            ensureNumber: function (actual, expected, message) {
                Bridge.Test.Assert.areEqual$1(expected, actual.toString(), message);
            },
            assertAlmostEqual: function (actual, expected, message) {
                var diff = expected - actual;
                if (diff < 0) {
                    diff = -diff;
                }

                Bridge.Test.Assert.true$1(diff < 1E-08, System.String.concat(System.String.concat(System.String.concat(System.String.concat(message, "actual: "), System.Double.format(actual, 'G')), "expeted:"), System.Double.format(expected, 'G')));
            },
            n410: function () {
                // Decimal consts
                var DecimalZero = System.Decimal.Zero;
                var DecimalOne = System.Decimal.One;
                var DecimalMinusOne = System.Decimal.MinusOne;
                var DecimalMaxValue = System.Decimal.MaxValue;
                var DecimalMinValue = System.Decimal.MinValue;

                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(DecimalZero, "0", "DecimalZero");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(DecimalOne, "1", "DecimalOne");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(DecimalMinusOne, "-1", "DecimalMinusOne");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(DecimalMaxValue, "7.9228162514264337593543950335e+28", "DecimalMaxValue");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(DecimalMinValue, "-7.9228162514264337593543950335e+28", "DecimalMinValue");

                // Decimal consts in expressions
                var dz = System.Decimal(0.0);
                DecimalZero = System.Decimal.Zero.add(dz);
                DecimalOne = System.Decimal.One.add(dz);
                ;
                DecimalMinusOne = System.Decimal.MinusOne.add(dz);
                ;
                DecimalMaxValue = System.Decimal.MaxValue.add(dz);
                ;
                DecimalMinValue = System.Decimal.MinValue.add(dz);
                ;

                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(DecimalZero, "0", "DecimalZeroin expression");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(DecimalOne, "1", "DecimalOnein expression");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(DecimalMinusOne, "-1", "DecimalMinusOnein expression");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(DecimalMaxValue, "7.9228162514264337593543950335e+28", "DecimalMaxValuein expression");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(DecimalMinValue, "-7.9228162514264337593543950335e+28", "DecimalMinValuein expression");

                var numberPositiveInfinity = Number.POSITIVE_INFINITY;
                var numberNegativeInfinity = Number.NEGATIVE_INFINITY;
                var numberNaN = NaN;

                // Double consts
                var DoubleMaxValue = System.Double.max;
                var DoubleMinValue = System.Double.min;
                var DoubleEpsilon = 4.94065645841247E-324;
                var DoubleNegativeInfinity = Number.NEGATIVE_INFINITY;
                var DoublePositiveInfinity = Number.POSITIVE_INFINITY;
                var DoubleNaN = Number.NaN;

                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(DoubleMaxValue, "1.7976931348623157e+308", "DoubleMaxValue");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(DoubleMinValue, "-1.7976931348623157e+308", "DoubleMinValue");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(DoubleEpsilon, "5e-324", "DoubleEpsilon");
                Bridge.Test.Assert.areEqual$1(numberNegativeInfinity, DoubleNegativeInfinity, "DoubleNegativeInfinity");
                Bridge.Test.Assert.areEqual$1(numberPositiveInfinity, DoublePositiveInfinity, "DoublePositiveInfinity");
                Bridge.Test.Assert.areEqual$1(numberNaN, DoubleNaN, "DoubleNaN");

                // Double consts in expressions
                var dblz = 0.0;
                DoubleMaxValue = System.Double.max + dblz;
                DoubleMinValue = System.Double.min + dblz;
                DoubleEpsilon = 4.94065645841247E-324 + dblz;
                DoubleNegativeInfinity = Number.NEGATIVE_INFINITY + dblz;
                DoublePositiveInfinity = Number.POSITIVE_INFINITY + dblz;
                DoubleNaN = Number.NaN + dblz;

                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(DoubleMaxValue, "1.7976931348623157e+308", "DoubleMaxValuein expression");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(DoubleMinValue, "-1.7976931348623157e+308", "DoubleMinValuein expression");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(DoubleEpsilon, "5e-324", "DoubleEpsilonin expression");
                Bridge.Test.Assert.areEqual$1(numberNegativeInfinity, DoubleNegativeInfinity, "DoubleNegativeInfinityin expression");
                Bridge.Test.Assert.areEqual$1(numberPositiveInfinity, DoublePositiveInfinity, "DoublePositiveInfinityin expression");
                Bridge.Test.Assert.areEqual$1(numberNaN, DoubleNaN, "DoubleNaNin expression");

                // Math consts
                var MathE = Math.E;
                var MathLN10 = Math.LN10;
                var MathLN2 = Math.LN2;
                var MathLOG2E = Math.LOG2E;
                var MathLOG10E = Math.LOG10E;
                var MathPI = Math.PI;
                var MathSQRT1_2 = Math.SQRT1_2;
                var MathSQRT2 = Math.SQRT2;

                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(MathE, "2.718281828459045", "MathE");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(MathLN10, "2.302585092994046", "MathLN10");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(MathLN2, "0.6931471805599453", "MathLN2");
                //IE has Math.LOG2E defined as 1.4426950408889633 instead of standard 1.4426950408889634
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.assertAlmostEqual(MathLOG2E, 1.4426950408889634, "MathLOG2E");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(MathLOG10E, "0.4342944819032518", "MathLOG10E");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(MathPI, "3.141592653589793", "MathPI");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(MathSQRT1_2, "0.7071067811865476", "MathSQRT1_2");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(MathSQRT2, "1.4142135623730951", "MathSQRT2");

                // Math consts in expression
                MathE = Math.E + 0;
                MathLN10 = Math.LN10 + 0;
                MathLN2 = Math.LN2 + 0;
                MathLOG2E = Math.LOG2E + 0;
                MathLOG10E = Math.LOG10E + 0;
                MathPI = Math.PI + 0;
                MathSQRT1_2 = Math.SQRT1_2 + 0;
                MathSQRT2 = Math.SQRT2 + 0;

                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(MathE, "2.718281828459045", "MathEin expression");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(MathLN10, "2.302585092994046", "MathLN10in expression");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(MathLN2, "0.6931471805599453", "MathLN2in expression");
                //IE has Math.LOG2E defined as 1.4426950408889633 instead of standard 1.4426950408889634
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.assertAlmostEqual(MathLOG2E, 1.4426950408889634, "MathLOG2Ein expression");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(MathLOG10E, "0.4342944819032518", "MathLOG10Ein expression");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(MathPI, "3.141592653589793", "MathPIin expression");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(MathSQRT1_2, "0.7071067811865476", "MathSQRT1_2in expression");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(MathSQRT2, "1.4142135623730951", "MathSQRT2in expression");

                // Single consts
                var SingleMaxValue = 3.40282347E+38;
                var SingleMinValue = -3.40282347E+38;
                var SingleEpsilon = 1.401298E-45;
                var SingleNaN = Number.NaN;
                var SingleNegativeInfinity = Number.NEGATIVE_INFINITY;
                var SinglePositiveInfinity = Number.POSITIVE_INFINITY;

                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(SingleMaxValue, "3.40282347e+38", "SingleMaxValue");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(SingleMinValue, "-3.40282347e+38", "SingleMinValue");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(SingleEpsilon, "1.401298e-45", "SingleEpsilon");
                Bridge.Test.Assert.areEqual$1(numberNaN, SingleNaN, "SingleNaN");
                Bridge.Test.Assert.areEqual$1(numberNegativeInfinity, SingleNegativeInfinity, "SingleNegativeInfinity");
                Bridge.Test.Assert.areEqual$1(numberPositiveInfinity, SinglePositiveInfinity, "SinglePositiveInfinity");

                // Single consts in expression
                var fz = 0;
                SingleMaxValue = 3.40282347E+38 + fz;
                SingleMinValue = -3.40282347E+38 + fz;
                SingleEpsilon = 1.401298E-45 + fz;
                SingleNaN = Number.NaN + fz;
                SingleNegativeInfinity = Number.NEGATIVE_INFINITY + fz;
                SinglePositiveInfinity = Number.POSITIVE_INFINITY + fz;

                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(SingleMaxValue, "3.40282347e+38", "SingleMaxValuein expression");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(SingleMinValue, "-3.40282347e+38", "SingleMinValuein expression");
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(SingleEpsilon, "1.401298e-45", "SingleEpsilonin expression");
                Bridge.Test.Assert.areEqual$1(numberNaN, SingleNaN, "SingleNaNin expression");
                Bridge.Test.Assert.areEqual$1(numberNegativeInfinity, SingleNegativeInfinity, "SingleNegativeInfinityin expression");
                Bridge.Test.Assert.areEqual$1(numberPositiveInfinity, SinglePositiveInfinity, "SinglePositiveInfinityin expression");
            },
            n418: function () {
                var t = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge418();
                t.setDelegate(Bridge.fn.combine(t.getDelegate(), $_.Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.f3));
                var r = t.callDelegate(10);

                Bridge.Test.Assert.areEqual$1(20, r, "Delegate added and called var r = t.CallDelegate(10);");
            },
            n422: function () {
                var v0 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge422.first;
                var v100 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge422.next;
                var v101 = Bridge.ClientTest.Batch3.BridgeIssues.Bridge422.afterNext;

                Bridge.Test.Assert.areEqual$1(0, v0, "Bridge422.first");
                Bridge.Test.Assert.areEqual$1(100, v100, "Bridge422.next");
                Bridge.Test.Assert.areEqual$1(101, v101, "Bridge422.afterNext");
            },
            n428: function () {
                var number2 = System.Decimal(11.37);
                var sum = System.String.concat("0.13 + ", Bridge.Int.format(number2, 'G'));

                Bridge.Test.Assert.areEqual$1("0.13 + 11.37", sum, "0.13 + 11.37");
            },
            n435: function () {
                var i = 0;
                Bridge.Test.Assert.areEqual$1("0.000000E+000", System.Int32.format(i, "E"), "i.Format(\"E\")");
                Bridge.Test.Assert.areEqual$1("a", System.Int32.format(i, "a"), "Test custom formatting in \"use strict\" mode");
            },
            n436: function () {
                var b1 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge436First();
                Bridge.Test.Assert.areEqual$1("1", b1.toObject(), "Bridge436First.ToObject()");

                var b2 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge436Second();
                Bridge.Test.Assert.areEqual$1("12", b2.toObject(), "Bridge436Second.ToObject()");

                var b3 = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge436Third();
                Bridge.Test.Assert.areEqual$1("123", b3.toObject(), "Bridge436Third.ToObject()");
            },
            n438: function () {
                var magic = $_.Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.f4(new (System.Collections.Generic.List$1(System.Int32))());
                var epic = magic.getRange(0, 3);
                Bridge.Test.Assert.areEqual$1("System.Collections.Generic.List$1[[System.Int32, mscorlib]]", Bridge.getTypeName(Bridge.getType(epic)), "epic.GetType().GetClassName()");
            },
            n439: function () {
                var b = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge439();
                var accumulator = "";
                b.register(function (s) {
                    accumulator = System.String.concat(accumulator, s);
                });

                b.callDispatcher("1");
                Bridge.Test.Assert.areEqual$1("1", accumulator, "accumulator 1");

                b.callDispatcher("2");
                Bridge.Test.Assert.areEqual$1("12", accumulator, "accumulator 12");
            },
            n442: function () {
                var a = System.Decimal(3.5);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(a.round(), "4", "a.Round(3.5M)");

                var b = System.Decimal(4.5);
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.ensureNumber(b.round(), "4", "b.Round(4.5M)");
            },
            n460: function () {
                var number;

                number = -12345.6789;
                Bridge.Test.Assert.areEqual$1("-12345.6789", System.Double.format(number, "G", System.Globalization.CultureInfo.invariantCulture), "ToString(\"G\") for negative numbers in InvariantCulture");
            },
            n467: function () {
                var a = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge467(), {
                    setMyProperty: -1
                } );

                var b = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge467(), {
                    setMyProperty: -1
                } );

                Bridge.Test.Assert.areNotEqual$1(b.getHashCode(), a.getHashCode(), "Call to base.GetHashCode() causes compilation to fail");
            },
            n469: function () {
                var $t;
                var testList = new (System.Collections.Generic.List$1(System.Int32))();
                testList.add(5);

                var count = 0;

                for (var i = 0; i < 10; i = (i + 1) | 0) {
                    $t = (function () {
                        if (!System.Linq.Enumerable.from(testList).any(function (x) {
                            return x === i;
                        })) {
                            return {jump:1};
                        }

                        count = (count + 1) | 0;
                    }).call(this) || {};
                    if($t.jump == 1) continue;
                }

                Bridge.Test.Assert.areEqual$1(1, count, "\"continue\" generated correctly");
            },
            n470: function () {
                var a = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge470(), {
                    setData: 1
                } );
                var b = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge470(), {
                    setData: 2
                } );
                var c = Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge470(), {
                    setData: 3
                } );

                Bridge.Test.Assert.areEqual$1(false, Bridge.equals(a, b), "a.Equals(b)");
                Bridge.Test.Assert.areNotEqual$1(true, Bridge.equals(a, Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge470(), {
                    setData: 1
                } )), "a.Equals(new Bridge470 { Data = 1 })");
                Bridge.Test.Assert.areEqual$1(false, Bridge.equals(a, null), "a.Equals(null)");

                Bridge.Test.Assert.areEqual$1(true, a.equals2(b, b), "a.Equals(b, b)");
                Bridge.Test.Assert.areEqual$1(true, a.equals2(a, Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge470(), {
                    setData: 1
                } )), "a.Equals(a, new Bridge470 { Data = 1 })");
                Bridge.Test.Assert.areEqual$1(false, a.equals2(a, Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge470(), {
                    setData: 2
                } )), "a.Equals(a, new Bridge470 { Data = 2 })");
                Bridge.Test.Assert.areEqual$1(true, a.equals2(Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge470(), {
                    setData: 5
                } ), Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge470(), {
                    setData: 5
                } )), "new Bridge470 { Data = 5 }, new Bridge470 { Data = 5 }");

                Bridge.Test.Assert.areNotEqual$1(1, Bridge.getHashCode(a), "a.GetHashCode()");
                Bridge.Test.Assert.areNotEqual$1(3, Bridge.getHashCode(c), "c.GetHashCode()");

                Bridge.Test.Assert.areEqual$1(2, a.getHashCode2(b), "a.GetHashCode(b)");
                Bridge.Test.Assert.areEqual$1(3, c.getHashCode2(c), "c.GetHashCode(c)");

                var test1 = new (System.Collections.Generic.List$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge470))();
                test1.add(a);
                test1.add(b);
                test1.add(c);

                var comparer = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge470();

                // EqualityComparer's methods do not handle null values intentionally
                Bridge.Test.Assert.areEqual$1(true, System.Linq.Enumerable.from(test1).contains(a, comparer), "test1 Contains a");
                Bridge.Test.Assert.areEqual$1(true, System.Linq.Enumerable.from(test1).contains(b, comparer), "test1 Contains b");
                Bridge.Test.Assert.areEqual$1(true, System.Linq.Enumerable.from(test1).contains(c, comparer), "test1 Contains c");
                Bridge.Test.Assert.areEqual$1(false, System.Linq.Enumerable.from(test1).contains(Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge470(), {
                    setData: 4
                } ), comparer), "test1 Contains 4");
                Bridge.Test.Assert.areEqual$1(false, System.Linq.Enumerable.from(test1).contains(Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge470(), {
                    setData: 5
                } ), comparer), "test1 Contains 5");
            },
            n499: function () {
                var v1 = new System.Version.$constructor();
                Bridge.Test.Assert.areEqual$1("System.Version", Bridge.getTypeName(v1), "#499 Version type name");
            }
        }
    });

    Bridge.define("$AnonymousType$16", $_, {
        $kind: "anonymous",
        constructor: function (i) {
            this.i = i;
        },
        geti : function () {
            return this.i;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$16)) {
                return false;
            }
            return Bridge.equals(this.i, o.i);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + -22048071;
            hash = hash * 23 + (this.i == null ? 0 : Bridge.getHashCode(this.i));
            return hash;
        },
        toJSON: function () {
            return {
                i : this.i
            };
        }
    });

    Bridge.ns("Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues", $_);

    Bridge.apply($_.Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues, {
        f1: function (_o23) {
            _o23.add(0);
            _o23.add(1);
            _o23.add(2);
            _o23.add(3);
            _o23.add(4);
            return _o23;
        },
        f2: function (_o24) {
            _o24.add(3, "b");
            _o24.add(6, "z");
            _o24.add(9, "x");
            return _o24;
        },
        f3: function (i) {
            return ((i * 2) | 0);
        },
        f4: function (_o25) {
            _o25.add(0);
            _o25.add(1);
            _o25.add(2);
            _o25.add(3);
            _o25.add(4);
            return _o25;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.Constants', {
        statics: {
            MODULE_ISSUES: "Issues3",
            IGNORE_DATE: null
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.Utilities.BrowserHelper', {
        statics: {
            isPhantomJs: function () {
                return System.String.contains(navigator.userAgent,"PhantomJS");
            },
            isFirefox: function () {
                return System.String.contains(navigator.userAgent,"Firefox");
            },
            isChrome: function () {
                return System.String.contains(navigator.userAgent,"Chrome");
            },
            getBrowserInfo: function () {
                var userAgent = navigator.userAgent;
                var appVersion = navigator.appVersion;
                var product = navigator.product;
                var appName = navigator.appName;
                var appCodeName = navigator.appCodeName;

                return System.String.format("userAgent:{0} appVersion:{1} product:{2} appName:{3} appCodeName:{4}", userAgent, appVersion, product, appName, appCodeName);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.Utilities.DecimalHelper', {
        statics: {
            assertIsDecimalAndEqualTo$1: function (v, d, message) {
                if (message === void 0) { message = null; }
                Bridge.Test.Assert.areStrictEqual$1(true, Bridge.is(v, System.Decimal), message);
                Bridge.Test.Assert.areStrictEqual$1(System.Double.format(d, 'G'), v.toString(), message);
            },
            assertIsDecimalAndEqualTo: function (v, d, message) {
                if (message === void 0) { message = null; }
                Bridge.Test.Assert.areStrictEqual$1(true, Bridge.is(v, System.Decimal), message);
                Bridge.Test.Assert.areStrictEqual$1(Bridge.Int.format(d, 'G'), v.toString(), message);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1000.ObjectTestFixture', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1000.TestFixture$1(Object)]
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001.Button', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001.Control]
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001.TextBox', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001.Control]
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1024.ClassB', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1024.ClassC],
        constructor: function (p) {
            if (p === void 0) { p = "classB"; }

            this.$initialize();
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1024.ClassC.$constructor.call(this, p);
        },
        getFieldA: function () {
            return this.a;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C10', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I7$3(System.Int32,String,Boolean)],
        config: {
            alias: [
            "foo", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I7$3$System$Int32$String$Boolean$foo"
            ]
        },
        foo: function () {
            return 1;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C11$3', function (T1, T2, T3) { return {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I7$3(T1,T2,T3)],
        config: {
            alias: [
            "foo", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I7$3$" + Bridge.getTypeAlias(T1) + "$" + Bridge.getTypeAlias(T2) + "$" + Bridge.getTypeAlias(T3) + "$foo"
            ]
        },
        foo: function () {
            return 1;
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C12$3', function (T1, T2, T3) { return {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I7$3(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I5$1(T1),Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I5$1(T2),Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I5$1(T3))],
        config: {
            alias: [
            "foo", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I7$3$Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I5$1$" + Bridge.getTypeAlias(T1) + "$Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I5$1$" + Bridge.getTypeAlias(T2) + "$Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I5$1$" + Bridge.getTypeAlias(T3) + "$foo"
            ]
        },
        foo: function () {
            return 1;
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C13$3', function (T1, T2, T3) { return {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I7$3(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I5$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I5$1(T1)),Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I5$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I5$1(T2)),Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I5$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I5$1(T3)))],
        config: {
            alias: [
            "foo", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I7$3$Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I5$1$Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I5$1$" + Bridge.getTypeAlias(T1) + "$Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I5$1$Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I5$1$" + Bridge.getTypeAlias(T2) + "$Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I5$1$Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I5$1$" + Bridge.getTypeAlias(T3) + "$foo"
            ]
        },
        foo: function () {
            return 1;
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C14', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I8],
        tmp: 0,
        config: {
            events: {
                Event1: null
            },
            properties: {
                Prop2: null
            },
            alias: [
            "getItem", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I8$getItem",
            "setItem", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I8$setItem",
            "getProp1", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I8$getProp1",
            "getProp2", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I8$getProp2",
            "setProp2", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I8$setProp2",
            "addEvent1", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I8$addEvent1",
            "removeEvent1", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I8$removeEvent1",
            "invoke", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I8$invoke"
            ]
        },
        getItem: function (index) {
            return index;
        },
        setItem: function (index, value) {
            this.tmp = value;
        },
        getProp1: function () {
            return 2;
        },
        invoke: function () {
            this.Event1();
        }
    });

    Bridge.definei('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I9$1', function (T) { return {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I8],
        $kind: "interface"
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C16', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I10],
        log: null,
        config: {
            alias: [
            "foo", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I10$foo"
            ]
        },
        foo: function () {
            this.log = "C16";
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C19', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C18,Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I10],
        config: {
            alias: [
            "foo$1", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I10$foo"
            ]
        },
        foo$1: function () {
            this.log = "C19";
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C2', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I1,Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I2],
        i1: 0,
        i2: 0,
        Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I1$getProp1: function () {
            return this.i1;
        },
        Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I1$setProp1: function (value) {
            this.i1 = (value - 1) | 0;
        },
        Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I2$getProp1: function () {
            return this.i2;
        },
        Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I2$setProp1: function (value) {
            this.i2 = (value + 1) | 0;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C20', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I10],
        log: null,
        config: {
            alias: [
            "foo", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I10$foo"
            ]
        },
        foo: function () {
            this.log = "C20";
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C23', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C22]
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C3', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I1,Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I2],
        config: {
            properties: {
                Prop1: 0
            },
            alias: [
            "getProp1", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I2$getProp1",
            "setProp1", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I2$setProp1",
            "getProp1", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I1$getProp1",
            "setProp1", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I1$setProp1"
            ]
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C4', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I3],
        config: {
            alias: [
            "foo", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I3$foo"
            ]
        },
        foo: function () {
            return "C4";
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C7', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C6,Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I4],
        config: {
            alias: [
            "foo$1", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I4$foo"
            ]
        },
        foo$1: function () {
            return "C7";
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C8', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I5$1(System.Int32),Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I5$1(String)],
        Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I5$1$System$Int32$foo: function () {
            return 1;
        },
        Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I5$1$String$foo: function () {
            return "test";
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C9$2', function (T1, T2) { return {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I5$1(T1),Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I6$1(T2)],
        flag: null,
        config: {
            alias: [
            "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I5$1$T1$foo", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I5$1$" + Bridge.getTypeAlias(T1) + "$foo",
            "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I6$1$T2$foo", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I6$1$" + Bridge.getTypeAlias(T2) + "$foo"
            ]
        },
        Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I5$1$T1$foo: function () {
            this.flag = "I5";
            return Bridge.getDefaultValue(T1);
        },
        Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I6$1$T2$foo: function () {
            this.flag = "I6";
            return Bridge.getDefaultValue(T2);
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071.A$1', function (T) { return {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071.A],
        constructor: function (b) {
            this.$initialize();
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071.A.$constructor.call(this, b, [T]);
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071.A$2', function (T, T2) { return {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071.A],
        constructor: function (b) {
            this.$initialize();
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071.A.$constructor.call(this, b, [T, T2]);
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.Foo1.Comparer', {
        inherits: [System.Collections.Generic.IComparer$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.Foo1.Item)],
        config: {
            alias: [
            "compare", "System$Collections$Generic$IComparer$1$Bridge$ClientTest$Batch3$BridgeIssues$Bridge1128$Foo1$Item$compare"
            ]
        },
        compare: function (x, y) {
            return System.String.compare(x.value, y.value);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217.DemoNavigator', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217.Navigator]
    });

    Bridge.define('Demo.Bridge1231.Class1$1.MyStruct', function (T) { return {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1231.I1$1(T)],
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new (Demo.Bridge1231.Class1$1.MyStruct(T))(); }
        },
        field: 0,
        $constructor1: function (field) {
            this.$initialize();
            this.field = field;
        },
        constructor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 1473705463;
            hash = hash * 23 + (this.field == null ? 0 : Bridge.getHashCode(this.field));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Demo.Bridge1231.Class1$1.MyStruct(T))) {
                return false;
            }
            return Bridge.equals(this.field, o.field);
        },
        $clone: function (to) {
            var s = to || new (Demo.Bridge1231.Class1$1.MyStruct(T))();
            s.field = this.field;
            return s;
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313.Class', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313.IInterface],
        config: {
            alias: [
            "function", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1313$IInterface$function"
            ]
        },
        function: function (v) {
            return v;
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339.Foo1', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339.FooBase]
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass1$2', function (T, K) { return {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass$2(T,K)]
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass1$2', function (T, K) { return {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass$2(T,K)]
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411.Doodad', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411.Thing],
        constructor: function () {
            this.$initialize();
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411.Thing.$constructor.call(this);
            // 3
            this.setData(3);
        },
        $constructor1: function (x) {
            this.$initialize();
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411.Thing.$constructor.call(this, x);
            // 4
            this.setData(4);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1467.SomeClass2', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1467.SomeClass1]
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1684.MessageTable', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1684.PureComponent$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1684.Set$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1684.MessageEditState))]
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1704.Derived', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1704.Base],
        show: function (i) {
            if (i === void 0) { i = 1; }
            return Bridge.ClientTest.Batch3.BridgeIssues.Bridge1704.Base.prototype.show.call(this);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge240B', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge240A],
        getString: function () {
            this.setData((this.getData() + 1) | 0);
            return "B";
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge304', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.IBridge304],
        config: {
            properties: {
                X: null
            },
            alias: [
            "f", "Bridge$ClientTest$Batch3$BridgeIssues$IBridge304$f"
            ]
        },
        f: function (x) {
            this.setX(x);
        },
        f$1: function () {
            this.setX("void F()");
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge306A', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge306Component$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge306A.Props)],
        statics: {
            new: function (props) {
                return Bridge.ClientTest.Batch3.BridgeIssues.Bridge306Component$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge306A.Props).new(Bridge.ClientTest.Batch3.BridgeIssues.Bridge306A, props);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge306B', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge306Component$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge306B.Props)],
        statics: {
            new: function (props) {
                return Bridge.ClientTest.Batch3.BridgeIssues.Bridge306Component$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge306B.Props).new(Bridge.ClientTest.Batch3.BridgeIssues.Bridge306B, props);
            }
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge436Second', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge436First],
        toObject: function () {
            return System.String.concat(Bridge.ClientTest.Batch3.BridgeIssues.Bridge436First.prototype.toObject.call(this), "2");
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge522.DerivedClass1', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge522.BaseClass],
        constructor: function () {
            this.$initialize();
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge522.BaseClass.$constructor.call(this);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge522.DerivedClass2', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge522.BaseClass],
        config: {
            properties: {
                B: 0
            }
        },
        constructor: function () {
            this.$initialize();
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge522.BaseClass.$constructor.call(this);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge537B', {
        inherits: [System.Collections.Generic.IEnumerable$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge537A)],
        statics: {
            testB2: function () {
                var l = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge537B();

                l.add(Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge537A(), {
                    id: 103
                } ));

                return Bridge.ClientTest.Batch3.BridgeIssues.Bridge537B.getCount(l);
            },
            getCount: function (l) {
                return l.list.getCount();
            },
            testB1: function () {
                var l = new Bridge.ClientTest.Batch3.BridgeIssues.Bridge537B();

                l.add(Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge537A(), {
                    id: 101
                } ));
                l.add(Bridge.merge(new Bridge.ClientTest.Batch3.BridgeIssues.Bridge537A(), {
                    id: 102
                } ));

                return l.getCount();
            }
        },
        list: null,
        config: {
            alias: [
            "getEnumerator", "System$Collections$Generic$IEnumerable$1$Bridge$ClientTest$Batch3$BridgeIssues$Bridge537A$getEnumerator"
            ]
        },
        constructor: function () {
            this.$initialize();
            this.list = new (System.Collections.Generic.List$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge537A))();
        },
        getCount: function () {
            return this.list.getCount();
        },
        add: function (value) {
            this.list.add(value);
        },
        getEnumerator: function () {
            return this.list.getEnumerator();
        },
        System$Collections$IEnumerable$getEnumerator: function () {
            return this.list.getEnumerator();
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge558B', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge558A],
        zz: function (a) {
            return Bridge.ClientTest.Batch3.BridgeIssues.Bridge558A.prototype.zz.call(this, a);
        },
        zz$1: function (a) {
            return Bridge.ClientTest.Batch3.BridgeIssues.Bridge558A.prototype.zz$1.call(this, a);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge559B1', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge559A1],
        constructor: function () {
            this.$initialize();
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge559A1.$constructor.call(this);
            this.result = System.String.concat(this.result, " -> Bridge559B1 -- unexpected!");
        },
        $constructor1: function (a) {
            this.$initialize();
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge559A1.$constructor1.call(this, a);
            this.result = System.String.concat(this.result, " -> Bridge559B1$1");
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge559B2', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge559A2],
        constructor: function () {
            this.$initialize();
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge559A2.$constructor.call(this);
            this.result = System.String.concat(this.result, " ClassB -- unexpected!");
        },
        $constructor1: function (a) {
            this.$initialize();
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge559A2.$constructor1.call(this, a);
            this.result = System.String.concat(this.result, " ClassB$1");
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge566B', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge566A],
        getName: function () {
            return "Ted";
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge623B1', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge623A],
        constructor: function (foo, func) {
            this.$initialize();
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge623A.$constructor.call(this, foo, func);
        },
        getFoo: function () {
            return ((2 * this.foo) | 0);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge635B', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge635A],
        internalFunc1: function () {
            return "B.Test1";
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge652.Bridge652A1', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge652.Bridge652C$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge652.Bridge652B1)]
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge652.Bridge652A2', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge652.Bridge652D$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge652.Bridge652B2)]
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge693B.Bridge693C', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.IBridge693D]
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge883_2', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge883_IInterface]
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge883_4', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge883_3],
        statics: {
            field1: 1
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C15', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C14,Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I9$1(System.Int32)],
        config: {
            alias: [
            "invoke", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I9$1$System$Int32$invoke$1"
            ]
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C17', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C16],
        foo$1: function () {
            this.log = "C17";
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C21', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C20],
        config: {
            alias: [
            "foo", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I10$foo"
            ]
        },
        foo: function () {
            this.log = "C21";
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C24', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C23,Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I10],
        config: {
            alias: [
            "foo", "Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I10$foo"
            ]
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C5', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.C4,Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.I3],
        Bridge$ClientTest$Batch3$BridgeIssues$Bridge1025$I3$foo: function () {
            return "C5";
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339.Foo2', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339.Foo1]
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass2$2', function (T, K) { return {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass1$2(System.Int32,String)]
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass2$2', function (T, K) { return {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass1$2(System.Int32,String)]
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge436Third', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge436Second],
        toObject: function () {
            return System.String.concat(Bridge.ClientTest.Batch3.BridgeIssues.Bridge436Second.prototype.toObject.call(this), "3");
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge623B2', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge623B1],
        constructor: function (foo, func) {
            this.$initialize();
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge623B1.$constructor.call(this, foo, func);
        },
        getFoo: function () {
            return ((3 * this.foo) | 0);
        },
        call: function () {
            return ((this.func() + 1000) | 0);
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge693B', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge693A$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge693B.Bridge693C)],
        constructor: function () {
            this.$initialize();
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge693A$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge693B.Bridge693C).$constructor.call(this, new Bridge.ClientTest.Batch3.BridgeIssues.Bridge693B.Bridge693C());
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge883_1', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge883_2]
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339.Foo3', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339.Foo2],
        statics: {
            Bar: "Do"
        }
    });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass3$2', function (T, K) { return {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.DataClass2$2(System.Int32,String)],
        value4: Bridge.getDefaultValue(K),
        config: {
            properties: {
                Value3: Bridge.getDefaultValue(T)
            }
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass3$2', function (T, K) { return {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.StaticDataClass2$2(System.Int32,String)],
        statics: {
            value4: Bridge.getDefaultValue(K),
            config: {
                properties: {
                    Value3: Bridge.getDefaultValue(T)
                }
            }
        }
    }; });

    Bridge.define('Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339.Foo4', {
        inherits: [Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339.Foo3]
    });

    Bridge.setMetadata(console, function () { return {"members":[{"accessibility":2,"name":".ctor","type":1,"sname":"$constructor"},{"accessibility":2,"name":"Clear","isStatic":true,"type":8,"sname":"clear","returnType":Object},{"accessibility":2,"name":"Read","isStatic":true,"type":8,"tpcount":0,"def":function () { return prompt(); },"returnType":String},{"accessibility":2,"name":"ReadLine","isStatic":true,"type":8,"tpcount":0,"def":function () { return prompt(); },"returnType":String},{"accessibility":2,"name":"ReadLine","isStatic":true,"type":8,"paramsInfo":[{"name":"text","parameterType":String,"position":0}],"tpcount":0,"def":function (text) { return prompt(text); },"returnType":String,"params":[String]},{"accessibility":2,"name":"ReadLine","isStatic":true,"type":8,"paramsInfo":[{"name":"text","parameterType":String,"position":0},{"name":"value","parameterType":String,"position":1}],"tpcount":0,"def":function (text, value) { return prompt(text, value); },"returnType":String,"params":[String,String]},{"accessibility":2,"name":"Write","isStatic":true,"type":8,"paramsInfo":[{"name":"value","parameterType":Boolean,"position":0}],"tpcount":0,"def":function (value) { return System.Console.log(value); },"returnType":Object,"params":[Boolean]},{"accessibility":2,"name":"Write","isStatic":true,"type":8,"paramsInfo":[{"name":"value","parameterType":System.Char,"position":0}],"tpcount":0,"def":function (value) { return System.Console.log(String.fromCharCode(value)); },"returnType":Object,"params":[System.Char]},{"accessibility":2,"name":"Write","isStatic":true,"type":8,"paramsInfo":[{"name":"buffer","parameterType":Array,"position":0}],"sname":"write","returnType":Object,"params":[Array]},{"accessibility":2,"name":"Write","isStatic":true,"type":8,"paramsInfo":[{"name":"value","parameterType":System.Decimal,"position":0}],"tpcount":0,"def":function (value) { return System.Console.log(value.toString()); },"returnType":Object,"params":[System.Decimal]},{"accessibility":2,"name":"Write","isStatic":true,"type":8,"paramsInfo":[{"name":"value","parameterType":System.Double,"position":0}],"tpcount":0,"def":function (value) { return System.Console.log(value); },"returnType":Object,"params":[System.Double]},{"accessibility":2,"name":"Write","isStatic":true,"type":8,"paramsInfo":[{"name":"value","parameterType":System.Int32,"position":0}],"tpcount":0,"def":function (value) { return System.Console.log(value); },"returnType":Object,"params":[System.Int32]},{"accessibility":2,"name":"Write","isStatic":true,"type":8,"paramsInfo":[{"name":"value","parameterType":System.Int64,"position":0}],"tpcount":0,"def":function (value) { return System.Console.log(value.toString()); },"returnType":Object,"params":[System.Int64]},{"accessibility":2,"name":"Write","isStatic":true,"type":8,"paramsInfo":[{"name":"value","parameterType":Object,"position":0}],"tpcount":0,"def":function (value) { return System.Console.log(value); },"returnType":Object,"params":[Object]},{"accessibility":2,"name":"Write","isStatic":true,"type":8,"paramsInfo":[{"name":"value","parameterType":System.Single,"position":0}],"tpcount":0,"def":function (value) { return System.Console.log(value); },"returnType":Object,"params":[System.Single]},{"accessibility":2,"name":"Write","isStatic":true,"type":8,"paramsInfo":[{"name":"value","parameterType":String,"position":0}],"tpcount":0,"def":function (value) { return System.Console.log(value); },"returnType":Object,"params":[String]},{"accessibility":2,"name":"Write","isStatic":true,"type":8,"paramsInfo":[{"name":"value","parameterType":System.UInt32,"position":0}],"tpcount":0,"def":function (value) { return System.Console.log(value); },"returnType":Object,"params":[System.UInt32]},{"accessibility":2,"name":"Write","isStatic":true,"type":8,"paramsInfo":[{"name":"value","parameterType":System.UInt64,"position":0}],"tpcount":0,"def":function (value) { return System.Console.log(value.toString()); },"returnType":Object,"params":[System.UInt64]},{"accessibility":2,"name":"Write","isStatic":true,"type":8,"paramsInfo":[{"name":"format","parameterType":String,"position":0},{"name":"arg0","parameterType":Object,"position":1}],"tpcount":0,"def":function (format, arg0) { return System.Console.log(System.String.format(format, arg0)); },"returnType":Object,"params":[String,Object]},{"accessibility":2,"name":"Write","isStatic":true,"type":8,"paramsInfo":[{"name":"format","parameterType":String,"position":0},{"name":"arg","isParams":true,"parameterType":Array,"position":1}],"tpcount":0,"def":function (format, arg) { return System.Console.log(System.String.format(format, arg)); },"returnType":Object,"params":[String,Array]},{"accessibility":2,"name":"Write","isStatic":true,"type":8,"paramsInfo":[{"name":"format","parameterType":String,"position":0},{"name":"arg0","parameterType":Object,"position":1},{"name":"arg1","parameterType":Object,"position":2}],"tpcount":0,"def":function (format, arg0, arg1) { return System.Console.log(System.String.format(format, arg0, arg1)); },"returnType":Object,"params":[String,Object,Object]},{"accessibility":2,"name":"Write","isStatic":true,"type":8,"paramsInfo":[{"name":"format","parameterType":String,"position":0},{"name":"arg0","parameterType":Object,"position":1},{"name":"arg1","parameterType":Object,"position":2},{"name":"arg2","parameterType":Object,"position":3}],"tpcount":0,"def":function (format, arg0, arg1, arg2) { return System.Console.log(System.String.format(format, arg0, arg1, arg2)); },"returnType":Object,"params":[String,Object,Object,Object]},{"accessibility":2,"name":"Write","isStatic":true,"type":8,"paramsInfo":[{"name":"format","parameterType":String,"position":0},{"name":"arg0","parameterType":Object,"position":1},{"name":"arg1","parameterType":Object,"position":2},{"name":"arg2","parameterType":Object,"position":3},{"name":"arg3","parameterType":Object,"position":4}],"tpcount":0,"def":function (format, arg0, arg1, arg2, arg3) { return System.Console.log(System.String.format(format, arg0, arg1, arg2, arg3)); },"returnType":Object,"params":[String,Object,Object,Object,Object]},{"accessibility":2,"name":"WriteLine","isStatic":true,"type":8,"tpcount":0,"def":function () { return System.Console.log(); },"returnType":Object},{"accessibility":2,"name":"WriteLine","isStatic":true,"type":8,"paramsInfo":[{"name":"value","parameterType":Boolean,"position":0}],"tpcount":0,"def":function (value) { return System.Console.log(value); },"returnType":Object,"params":[Boolean]},{"accessibility":2,"name":"WriteLine","isStatic":true,"type":8,"paramsInfo":[{"name":"value","parameterType":System.Char,"position":0}],"tpcount":0,"def":function (value) { return System.Console.log(String.fromCharCode(value)); },"returnType":Object,"params":[System.Char]},{"accessibility":2,"name":"WriteLine","isStatic":true,"type":8,"paramsInfo":[{"name":"buffer","parameterType":Array,"position":0}],"sname":"writeLine","returnType":Object,"params":[Array]},{"accessibility":2,"name":"WriteLine","isStatic":true,"type":8,"paramsInfo":[{"name":"value","parameterType":System.Decimal,"position":0}],"tpcount":0,"def":function (value) { return System.Console.log(value.toString()); },"returnType":Object,"params":[System.Decimal]},{"accessibility":2,"name":"WriteLine","isStatic":true,"type":8,"paramsInfo":[{"name":"value","parameterType":System.Double,"position":0}],"tpcount":0,"def":function (value) { return System.Console.log(System.Double.format(value)); },"returnType":Object,"params":[System.Double]},{"accessibility":2,"name":"WriteLine","isStatic":true,"type":8,"paramsInfo":[{"name":"value","parameterType":System.Enum,"position":0}],"tpcount":0,"def":function (value) { return System.Console.log(System.Enum.toString(Bridge.getType(value), value)); },"returnType":Object,"params":[System.Enum]},{"accessibility":2,"name":"WriteLine","isStatic":true,"type":8,"paramsInfo":[{"name":"value","parameterType":System.Int32,"position":0}],"tpcount":0,"def":function (value) { return System.Console.log(value); },"returnType":Object,"params":[System.Int32]},{"accessibility":2,"name":"WriteLine","isStatic":true,"type":8,"paramsInfo":[{"name":"value","parameterType":System.Int64,"position":0}],"tpcount":0,"def":function (value) { return System.Console.log(value.toString()); },"returnType":Object,"params":[System.Int64]},{"accessibility":2,"name":"WriteLine","isStatic":true,"type":8,"paramsInfo":[{"name":"value","parameterType":System.Decimal,"position":0}],"tpcount":0,"def":function (value) { return System.Console.log(value && value.toString()); },"returnType":Object,"params":[System.Decimal]},{"accessibility":2,"name":"WriteLine","isStatic":true,"type":8,"paramsInfo":[{"name":"value","parameterType":System.Int64,"position":0}],"tpcount":0,"def":function (value) { return System.Console.log(value && value.toString()); },"returnType":Object,"params":[System.Int64]},{"accessibility":2,"name":"WriteLine","isStatic":true,"type":8,"paramsInfo":[{"name":"value","parameterType":System.UInt64,"position":0}],"tpcount":0,"def":function (value) { return System.Console.log(value && value.toString()); },"returnType":Object,"params":[System.UInt64]},{"accessibility":2,"name":"WriteLine","isStatic":true,"type":8,"paramsInfo":[{"name":"value","parameterType":Object,"position":0}],"tpcount":0,"def":function (value) { return System.Console.log(value); },"returnType":Object,"params":[Object]},{"accessibility":2,"name":"WriteLine","isStatic":true,"type":8,"paramsInfo":[{"name":"value","parameterType":System.Single,"position":0}],"tpcount":0,"def":function (value) { return System.Console.log(System.Single.format(value)); },"returnType":Object,"params":[System.Single]},{"accessibility":2,"name":"WriteLine","isStatic":true,"type":8,"paramsInfo":[{"name":"value","parameterType":String,"position":0}],"tpcount":0,"def":function (value) { return System.Console.log(value); },"returnType":Object,"params":[String]},{"accessibility":2,"name":"WriteLine","isStatic":true,"type":8,"paramsInfo":[{"name":"value","parameterType":System.UInt32,"position":0}],"tpcount":0,"def":function (value) { return System.Console.log(value); },"returnType":Object,"params":[System.UInt32]},{"accessibility":2,"name":"WriteLine","isStatic":true,"type":8,"paramsInfo":[{"name":"value","parameterType":System.UInt64,"position":0}],"tpcount":0,"def":function (value) { return System.Console.log(value.toString()); },"returnType":Object,"params":[System.UInt64]},{"accessibility":2,"name":"WriteLine","isStatic":true,"type":8,"paramsInfo":[{"name":"format","parameterType":String,"position":0},{"name":"arg0","parameterType":Object,"position":1}],"tpcount":0,"def":function (format, arg0) { return System.Console.log(System.String.format(format, arg0)); },"returnType":Object,"params":[String,Object]},{"accessibility":2,"name":"WriteLine","isStatic":true,"type":8,"paramsInfo":[{"name":"format","parameterType":String,"position":0},{"name":"arg","isParams":true,"parameterType":Array,"position":1}],"tpcount":0,"def":function (format, arg) { return System.Console.log(System.String.format(format, arg)); },"returnType":Object,"params":[String,Array]},{"accessibility":2,"name":"WriteLine","isStatic":true,"type":8,"paramsInfo":[{"name":"format","parameterType":String,"position":0},{"name":"arg0","parameterType":Object,"position":1},{"name":"arg1","parameterType":Object,"position":2}],"tpcount":0,"def":function (format, arg0, arg1) { return System.Console.log(System.String.format(format, arg0, arg1)); },"returnType":Object,"params":[String,Object,Object]},{"accessibility":2,"name":"WriteLine","isStatic":true,"type":8,"paramsInfo":[{"name":"format","parameterType":String,"position":0},{"name":"arg0","parameterType":Object,"position":1},{"name":"arg1","parameterType":Object,"position":2},{"name":"arg2","parameterType":Object,"position":3}],"tpcount":0,"def":function (format, arg0, arg1, arg2) { return System.Console.log(System.String.format(format, arg0, arg1, arg2)); },"returnType":Object,"params":[String,Object,Object,Object]},{"accessibility":2,"name":"WriteLine","isStatic":true,"type":8,"paramsInfo":[{"name":"format","parameterType":String,"position":0},{"name":"arg0","parameterType":Object,"position":1},{"name":"arg1","parameterType":Object,"position":2},{"name":"arg2","parameterType":Object,"position":3},{"name":"arg3","parameterType":Object,"position":4}],"tpcount":0,"def":function (format, arg0, arg1, arg2, arg3) { return System.Console.log(System.String.format(format, arg0, arg1, arg2, arg3)); },"returnType":Object,"params":[String,Object,Object,Object,Object]}]}; });

    Bridge.init();
});
