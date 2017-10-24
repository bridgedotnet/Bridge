/**
 * Bridge Test library - a common classes shared across all test Batches
 * @version 1.2.3.4
 * @compiler Bridge.NET 16.4.2
 */
Bridge.assembly("Bridge.ClientTestHelper", function ($asm, globals) {
    "use strict";

    Bridge.define("Bridge.ClientTestHelper.ClassLibraryTest", {
        statics: {
            methods: {
                Test: function (item) {
                    item.Bridge$ClientTestHelper$IWriteableItem$SetValue(Bridge.box(2, System.Int32));
                }
            }
        }
    });

    Bridge.define("Bridge.ClientTestHelper.CommonHelper", {
        statics: {
            methods: {
                Safe: function (a, failMessage) {
                    if (failMessage === void 0) { failMessage = null; }
                    try {
                        a();
                    }
                    catch (ex) {
                        ex = System.Exception.create(ex);
                        Bridge.Test.NUnit.Assert.Fail((failMessage || "") + (ex.toString() || ""));
                    }
                }
            }
        }
    });

    Bridge.define("Bridge.ClientTestHelper.DateHelper", {
        statics: {
            methods: {
                AssertDate$1: function (dt, kind, ticks, year, month, day, hour, minute, second, ms, message) {
                    if (year === void 0) { year = null; }
                    if (month === void 0) { month = null; }
                    if (day === void 0) { day = null; }
                    if (hour === void 0) { hour = null; }
                    if (minute === void 0) { minute = null; }
                    if (second === void 0) { second = null; }
                    if (ms === void 0) { ms = null; }
                    if (message === void 0) { message = null; }
                    Bridge.Test.NUnit.Assert.AreEqual(kind, System.DateTime.getKind(dt), (message || "") + "Kind");
                    Bridge.Test.NUnit.Assert.AreEqual(ticks.toString(), System.DateTime.getTicks(dt).toString(), (message || "") + "Ticks");

                    if (System.Nullable.hasValue(year)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(year), System.DateTime.getYear(dt), (message || "") + "Year");
                    }

                    if (System.Nullable.hasValue(month)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(month), System.DateTime.getMonth(dt), (message || "") + "Month");
                    }

                    if (System.Nullable.hasValue(day)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(day), System.DateTime.getDay(dt), (message || "") + "Day");
                    }

                    if (System.Nullable.hasValue(hour)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(hour), System.DateTime.getHour(dt), (message || "") + "Hour");
                    }

                    if (System.Nullable.hasValue(minute)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(minute), System.DateTime.getMinute(dt), (message || "") + "Minute");
                    }

                    if (System.Nullable.hasValue(second)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(second), System.DateTime.getSecond(dt), (message || "") + "Second");
                    }

                    if (System.Nullable.hasValue(ms)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(ms), System.DateTime.getMillisecond(dt), (message || "") + "Millisecond");
                    }
                },
                AssertDate: function (expected, actual, message) {
                    if (message === void 0) { message = null; }
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getKind(expected), System.DateTime.getKind(actual), (message || "") + "Kind");
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getTicks(expected).toString(), System.DateTime.getTicks(actual).toString(), (message || "") + "Ticks");

                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getYear(expected), System.DateTime.getYear(actual), (message || "") + "Year");
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getMonth(expected), System.DateTime.getMonth(actual), (message || "") + "Month");
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getDay(expected), System.DateTime.getDay(actual), (message || "") + "Day");
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getHour(expected), System.DateTime.getHour(actual), (message || "") + "Hour");
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getMinute(expected), System.DateTime.getMinute(actual), (message || "") + "Minute");
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getSecond(expected), System.DateTime.getSecond(actual), (message || "") + "Second");
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getMillisecond(expected), System.DateTime.getMillisecond(actual), (message || "") + "Millisecond");
                },
                GetOffsetString: function (adjustment) {
                    if (adjustment === void 0) { adjustment = 0; }
                    var minutes = (Bridge.ClientTestHelper.DateHelper.GetOffsetMinutes() + adjustment) | 0;

                    var b = minutes < 0 ? "+" : "-";
                    minutes = Math.abs(minutes);

                    var offset = minutes !== 0 ? ((b || "") + (System.Int32.format((((Bridge.Int.div(minutes, 60)) | 0)), "00") || "") + ":" + (System.Int32.format((minutes % 60), "00") || "")) : "Z";

                    return offset;
                },
                GetOffsetMinutes: function () {
                    var d = System.DateTime.getDefaultValue();

                    return d.getTimezoneOffset();
                }
            }
        }
    });

    Bridge.define("Bridge.ClientTestHelper.HtmlHelper", {
        statics: {
            fields: {
                TEST_FIXTURE_ELEMENT: null
            },
            props: {
                FixtureElement: {
                    get: function () {
                        return document.getElementById(Bridge.ClientTestHelper.HtmlHelper.TEST_FIXTURE_ELEMENT);
                    }
                }
            },
            ctors: {
                init: function () {
                    this.TEST_FIXTURE_ELEMENT = "qunit-fixture";
                }
            }
        }
    });

    Bridge.define("Bridge.ClientTestHelper.IItem", {
        $kind: "interface"
    });

    Bridge.define("Bridge.ClientTestHelper.N1193", {
        statics: {
            props: {
                ClientTestHelperAssemblyVersion: {
                    get: function () {
                        return "1.2.3.4";
                    }
                }
            }
        }
    });

    Bridge.define("Bridge.ClientTestHelper.N2190", {
        statics: {
            methods: {
                Greeting: function () {
                    return "Hi";
                }
            }
        }
    });

    Bridge.define("Bridge.ClientTestHelper.NumberHelper", {
        statics: {
            methods: {
                AssertNumberByRepresentation: function (expected, actual, message) {
                    if (message === void 0) { message = null; }
                    var a = actual != null ? actual.toString() : "[null]";
                    var e = expected != null ? expected.toString() : "[null]";

                    Bridge.Test.NUnit.Assert.AreEqual(e, a, (message || "") + " representation");
                },
                AssertNumber: function (expected, actual, message) {
                    if (message === void 0) { message = null; }
                    Bridge.Test.NUnit.Assert.AreEqual(Bridge.Reflection.getTypeName(Bridge.getType(expected)), Bridge.Reflection.getTypeName(Bridge.getType(actual)), (message || "") + " type");
                    Bridge.Test.NUnit.Assert.AreEqual(expected.toString(), actual.toString(), (message || "") + " representation");
                },
                AssertNumberWithEpsilon1: function (T, expected, actual, message) {
                    var useEpsilon = Bridge.referenceEquals(T, System.Double) || Bridge.referenceEquals(T, System.Single);

                    if (useEpsilon) {
                        var epsilon = 0.1;

                        if (Bridge.referenceEquals(T, System.Double)) {
                            var diff = expected - actual;

                            if (diff < 0) {
                                diff = -diff;
                            }

                            if (diff < epsilon) {
                                Bridge.Test.NUnit.Assert.True(true, System.String.concat(System.String.concat(message, expected) + " vs ", actual));
                            } else {
                                Bridge.Test.NUnit.Assert.AreEqual(expected.toString(), actual.toString(), (message || "") + "Counted with epsilon: " + System.Double.format(epsilon));
                            }
                        } else {
                            var diff1 = expected - actual;

                            if (diff1 < 0) {
                                diff1 = -diff1;
                            }

                            if (diff1 < epsilon) {
                                Bridge.Test.NUnit.Assert.True(true, System.String.concat(System.String.concat(message, expected) + " vs ", actual));
                            } else {
                                Bridge.Test.NUnit.Assert.AreEqual(expected.toString(), actual.toString(), (message || "") + "Counted with epsilon: " + System.Double.format(epsilon));
                            }
                        }
                    } else {
                        Bridge.Test.NUnit.Assert.AreEqual(expected.toString(), actual.toString(), message);
                    }
                },
                AssertDouble$1: function (expected, actual, message) {
                    if (message === void 0) { message = null; }
                    Bridge.Test.NUnit.Assert.AreEqual("Double", Bridge.Reflection.getTypeName(System.Double), (message || "") + " type");
                    Bridge.Test.NUnit.Assert.AreEqual(expected.toString(), System.Double.format(actual), (message || "") + " representation");
                },
                AssertDouble: function (expected, actual, message) {
                    if (message === void 0) { message = null; }
                    Bridge.Test.NUnit.Assert.AreEqual("Double", Bridge.Reflection.getTypeName(System.Double), (message || "") + " type");
                    Bridge.Test.NUnit.Assert.AreEqual(expected.toString(), System.Double.format(actual), (message || "") + " representation");
                },
                AssertDoubleWithEpsilon8: function (expected, actual) {
                    var se = System.Double.format(expected);
                    var sa = System.Double.format(actual);

                    if (Bridge.referenceEquals(sa, se)) {
                        Bridge.Test.NUnit.Assert.True(true, "Actual:" + System.Double.format(actual) + " vs Expected:" + System.Double.format(expected));
                        return;
                    }

                    var diff = actual - expected;
                    if (diff < 0) {
                        diff = -diff;
                    }

                    Bridge.Test.NUnit.Assert.True(diff < 1E-08, "Expected " + System.Double.format(expected) + " but was " + System.Double.format(actual));
                },
                AssertDoubleTryParse: function (r, expected, s, message) {
                    var actual = { };
                    var b = System.Double.tryParse(s, null, actual);

                    Bridge.Test.NUnit.Assert.AreEqual(r, b, (message || "") + " result");
                    Bridge.Test.NUnit.Assert.AreEqual("Double", Bridge.Reflection.getTypeName(System.Double), (message || "") + " type");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Double.format(expected), System.Double.format(actual.v), (message || "") + " representation");
                },
                AssertFloat: function (expected, actual, message) {
                    if (message === void 0) { message = null; }
                    Bridge.Test.NUnit.Assert.AreEqual("Single", Bridge.Reflection.getTypeName(System.Single), (message || "") + " type");
                    Bridge.Test.NUnit.Assert.AreEqual(expected.toString(), System.Single.format(actual), (message || "") + " representation");
                },
                AssertDecimal$1: function (expected, actual, message) {
                    if (message === void 0) { message = null; }
                    Bridge.Test.NUnit.Assert.AreEqual("Decimal", Bridge.Reflection.getTypeName(Bridge.getType(actual)), (message || "") + " type");
                    Bridge.Test.NUnit.Assert.AreEqual(expected.toString(), actual.toString(), (message || "") + " representation");
                },
                AssertDecimal$2: function (expected, actual, message) {
                    if (message === void 0) { message = null; }
                    Bridge.Test.NUnit.Assert.AreEqual("Decimal", Bridge.Reflection.getTypeName(System.Decimal), (message || "") + " type");
                    Bridge.Test.NUnit.Assert.AreEqual(expected.toString(), actual.toString(), (message || "") + " representation");
                },
                AssertDecimal: function (expected, actual, message) {
                    if (message === void 0) { message = null; }
                    Bridge.Test.NUnit.Assert.AreEqual("Decimal", Bridge.Reflection.getTypeName(System.Decimal), (message || "") + " type");
                    Bridge.Test.NUnit.Assert.AreEqual(System.Double.format(expected), actual.toString(), (message || "") + " representation");
                },
                AssertLong: function (expected, actual, message) {
                    if (message === void 0) { message = ""; }
                    Bridge.Test.NUnit.Assert.AreEqual("System.Int64", Bridge.Reflection.getTypeFullName(Bridge.getType(actual)), (message || "") + " type");
                    Bridge.Test.NUnit.Assert.AreEqual(expected.toString(), actual.toString(), message);
                },
                AssertULong: function (expected, actual, message) {
                    if (message === void 0) { message = ""; }
                    Bridge.Test.NUnit.Assert.AreEqual("System.UInt64", Bridge.Reflection.getTypeFullName(Bridge.getType(actual)), (message || "") + " type");
                    Bridge.Test.NUnit.Assert.AreEqual(expected.toString(), actual.toString(), message);
                }
            }
        }
    });

    Bridge.define("Bridge.ClientTestHelper.StringHelper", {
        statics: {
            methods: {
                CombineLines: function (lines) {
                    if (lines === void 0) { lines = []; }
                    if (lines == null) {
                        return null;
                    }

                    var s = "";

                    for (var i = 0; i < lines.length; i = (i + 1) | 0) {
                        if (i !== 0) {
                            s = (s || "") + ("\n" || "");
                        }

                        s = (s || "") + (lines[System.Array.index(i, lines)] || "");
                    }

                    return s;
                },
                CombineLinesNL: function (lines) {
                    if (lines === void 0) { lines = []; }
                    var s = Bridge.ClientTestHelper.StringHelper.CombineLines(lines);

                    if (s == null) {
                        return null;
                    }

                    return (s || "") + ("\n" || "");
                }
            }
        }
    });

    Bridge.define("Bridge.ClientTestHelper.IWriteableItem", {
        inherits: [Bridge.ClientTestHelper.IItem],
        $kind: "interface"
    });
});
