Bridge.assembly({
        name: "Bridge.ClientTestHelper",
        version: "1.2.3.4",
        compiler: "15.2.0"
    },
    function ($asm, globals) {
        "use strict";

        Bridge.define("Bridge.ClientTestHelper.Internal.ClassLibraryTest", {
            statics: {
                test: function (item) {
                    item.Bridge$ClientTestHelper$Internal$IWriteableItem$setValue(2);
                }
            }
        });

        Bridge.define("Bridge.ClientTestHelper.Internal.IItem", {
            $kind: "interface"
        });

        Bridge.define("Bridge.ClientTestHelper.Internal.N1193", {
            statics: {
                getClientTestHelperAssemblyVersion: function () {
                    return "1.2.3.4";
                }
            }
        });

        Bridge.define("Bridge.ClientTestHelper.Internal.IWriteableItem", {
            inherits: [Bridge.ClientTestHelper.Internal.IItem],
            $kind: "interface"
        });
    }
);
