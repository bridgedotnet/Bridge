/**
 * Bridge Test library - a common classes shared across all test Batches
 * @version 1.2.3.4
 * @compiler Bridge.NET 16.0.0
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
                        Bridge.Test.NUnit.Assert.Fail(System.String.concat(failMessage, ex.toString()));
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
                    Bridge.Test.NUnit.Assert.AreEqual(kind, System.DateTime.getKind(dt), System.String.concat(message, "Kind"));
                    Bridge.Test.NUnit.Assert.AreEqual(ticks.toString(), System.DateTime.getTicks(dt).toString(), System.String.concat(message, "Ticks"));

                    if (System.Nullable.hasValue(year)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(year), System.DateTime.getYear(dt), System.String.concat(message, "Year"));
                    }

                    if (System.Nullable.hasValue(month)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(month), System.DateTime.getMonth(dt), System.String.concat(message, "Month"));
                    }

                    if (System.Nullable.hasValue(day)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(day), System.DateTime.getDay(dt), System.String.concat(message, "Day"));
                    }

                    if (System.Nullable.hasValue(hour)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(hour), System.DateTime.getHour(dt), System.String.concat(message, "Hour"));
                    }

                    if (System.Nullable.hasValue(minute)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(minute), System.DateTime.getMinute(dt), System.String.concat(message, "Minute"));
                    }

                    if (System.Nullable.hasValue(second)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(second), System.DateTime.getSecond(dt), System.String.concat(message, "Second"));
                    }

                    if (System.Nullable.hasValue(ms)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(ms), System.DateTime.getMillisecond(dt), System.String.concat(message, "Millisecond"));
                    }
                },
                AssertDate: function (expected, actual, message) {
                    if (message === void 0) { message = null; }
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getKind(expected), System.DateTime.getKind(actual), System.String.concat(message, "Kind"));
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getTicks(expected).toString(), System.DateTime.getTicks(actual).toString(), System.String.concat(message, "Ticks"));

                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getYear(expected), System.DateTime.getYear(actual), System.String.concat(message, "Year"));
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getMonth(expected), System.DateTime.getMonth(actual), System.String.concat(message, "Month"));
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getDay(expected), System.DateTime.getDay(actual), System.String.concat(message, "Day"));
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getHour(expected), System.DateTime.getHour(actual), System.String.concat(message, "Hour"));
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getMinute(expected), System.DateTime.getMinute(actual), System.String.concat(message, "Minute"));
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getSecond(expected), System.DateTime.getSecond(actual), System.String.concat(message, "Second"));
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getMillisecond(expected), System.DateTime.getMillisecond(actual), System.String.concat(message, "Millisecond"));
                },
                GetOffsetString: function (adjustment) {
                    if (adjustment === void 0) { adjustment = 0; }
                    var minutes = (Bridge.ClientTestHelper.DateHelper.GetOffsetMinutes() + adjustment) | 0;

                    var b = minutes < 0 ? "+" : "-";
                    minutes = Math.abs(minutes);

                    var offset = minutes !== 0 ? (System.String.concat(b, System.Int32.format((((Bridge.Int.div(minutes, 60)) | 0)), "00"), ":", System.Int32.format((minutes % 60), "00"))) : "Z";

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
                            s = System.String.concat(s, '\n');
                        }

                        s = System.String.concat(s, lines[System.Array.index(i, lines)]);
                    }

                    return s;
                },
                CombineLinesNL: function (lines) {
                    if (lines === void 0) { lines = []; }
                    var s = Bridge.ClientTestHelper.StringHelper.CombineLines(lines);

                    if (s == null) {
                        return null;
                    }

                    return System.String.concat(s, '\n');
                }
            }
        }
    });

    Bridge.define("Bridge.ClientTestHelper.IWriteableItem", {
        inherits: [Bridge.ClientTestHelper.IItem],
        $kind: "interface"
    });
});
