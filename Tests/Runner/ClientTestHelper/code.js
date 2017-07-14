/**
 * Bridge Test library - a common classes shared across all test Batches
 * @version 1.2.3.4
 * @compiler Bridge.NET 16.0.0-beta5
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

    Bridge.define("Bridge.ClientTestHelper.DateHelper", {
        statics: {
            methods: {
                AssertDate$1: function (dt, kind, ticks, year, month, day, hour, minute, second, ms) {
                    if (year === void 0) { year = null; }
                    if (month === void 0) { month = null; }
                    if (day === void 0) { day = null; }
                    if (hour === void 0) { hour = null; }
                    if (minute === void 0) { minute = null; }
                    if (second === void 0) { second = null; }
                    if (ms === void 0) { ms = null; }
                    Bridge.Test.NUnit.Assert.AreEqual(kind, System.DateTime.getKind(dt), "Kind");
                    Bridge.Test.NUnit.Assert.AreEqual(ticks.toString(), System.DateTime.getTicks(dt).toString(), "Ticks");

                    if (System.Nullable.hasValue(year)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(year), System.DateTime.getYear(dt), "Year");
                    }

                    if (System.Nullable.hasValue(month)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(month), System.DateTime.getMonth(dt), "Month");
                    }

                    if (System.Nullable.hasValue(day)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(day), System.DateTime.getDay(dt), "Day");
                    }

                    if (System.Nullable.hasValue(hour)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(hour), System.DateTime.getHour(dt), "Hour");
                    }

                    if (System.Nullable.hasValue(minute)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(minute), System.DateTime.getMinute(dt), "Minute");
                    }

                    if (System.Nullable.hasValue(second)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(second), System.DateTime.getSecond(dt), "Second");
                    }

                    if (System.Nullable.hasValue(ms)) {
                        Bridge.Test.NUnit.Assert.AreEqual(System.Nullable.getValue(ms), System.DateTime.getMillisecond(dt), "Millisecond");
                    }
                },
                AssertDate: function (expected, actual) {
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getKind(expected), System.DateTime.getKind(actual), "Kind");
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getTicks(expected).toString(), System.DateTime.getTicks(actual).toString(), "Ticks");

                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getYear(expected), System.DateTime.getYear(actual), "Year");
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getMonth(expected), System.DateTime.getMonth(actual), "Month");
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getDay(expected), System.DateTime.getDay(actual), "Day");
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getHour(expected), System.DateTime.getHour(actual), "Hour");
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getMinute(expected), System.DateTime.getMinute(actual), "Minute");
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getSecond(expected), System.DateTime.getSecond(actual), "Second");
                    Bridge.Test.NUnit.Assert.AreEqual(System.DateTime.getMillisecond(expected), System.DateTime.getMillisecond(actual), "Millisecond");
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
