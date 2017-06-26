/**
 * Bridge Test library - a common classes shared across all test Batches
 * @version 1.2.3.4
 * @compiler Bridge.NET 16.0.0-beta3
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
