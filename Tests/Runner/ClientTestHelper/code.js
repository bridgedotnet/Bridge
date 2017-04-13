/**
 * Bridge Test library - a common classes shared across all test Batches
 * @version 1.2.3.4
 * @compiler Bridge.NET 16.0.0
 */
Bridge.assembly("Bridge.ClientTestHelper", function ($asm, globals) {
    "use strict";

    Bridge.define("Bridge.ClientTestHelper.ClassLibraryTest", {
        statics: {
            Test: function (item) {
                item.Bridge$ClientTestHelper$IWriteableItem$SetValue(Bridge.box(2, System.Int32));
            }
        }
    });

    Bridge.define("Bridge.ClientTestHelper.HtmlHelper", {
        statics: {
            TEST_FIXTURE_ELEMENT: "qunit-fixture",
            config: {
                properties: {
                    FixtureElement: {
                        get: function () {
                            return document.getElementById(Bridge.ClientTestHelper.HtmlHelper.TEST_FIXTURE_ELEMENT);
                        }
                    }
                }
            }
        }
    });

    Bridge.define("Bridge.ClientTestHelper.IItem", {
        $kind: "interface"
    });

    Bridge.define("Bridge.ClientTestHelper.N1193", {
        statics: {
            config: {
                properties: {
                    ClientTestHelperAssemblyVersion: {
                        get: function () {
                            return "1.2.3.4";
                        }
                    }
                }
            }
        }
    });

    Bridge.define("Bridge.ClientTestHelper.N2190", {
        statics: {
            Greeting: function () {
                return "Hi";
            }
        }
    });

    Bridge.define("Bridge.ClientTestHelper.IWriteableItem", {
        inherits: [Bridge.ClientTestHelper.IItem],
        $kind: "interface"
    });
});
