Bridge.assembly("TypeScriptTest", function ($asm, globals) {
    "use strict";

    Bridge.definei("TypeScript.Issues.N2029Interface$1", function (T) { return {
        $kind: "interface"
    }; });

    Bridge.define("TypeScript.Issues.N2030Attribute", {
        inherits: [System.Attribute],
        _isUnspecified: false,
        ctor: function (IsUnspecified) {
            this.$initialize();
            System.Attribute.ctor.call(this);
            this._isUnspecified = IsUnspecified;
        },
        getIsUnspecified: function () {
            return this._isUnspecified;
        }
    });

    Bridge.define("TypeScript.Issues.N2029", {
        inherits: [TypeScript.Issues.N2029Interface$1(System.Int32)],
        config: {
            properties: {
                Value1: 0
            },
            alias: [
            "getValue1", "TypeScript$Issues$N2029Interface$1$System$Int32$getValue1",
            "setValue1", "TypeScript$Issues$N2029Interface$1$System$Int32$setValue1"
            ]
        }
    });
});
