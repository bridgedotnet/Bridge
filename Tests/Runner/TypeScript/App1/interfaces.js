Bridge.assembly("TypeScriptTest", function ($asm, globals) {
    "use strict";

    Bridge.define("Interfaces.Interface1", {
        $kind: "interface"
    });

    Bridge.define("Interfaces.Interface4", {
        $kind: "interface"
    });

    Bridge.define("Interfaces.Interface6", {
        $kind: "interface"
    });

    Bridge.define("Interfaces.Interface61", {
        $kind: "interface"
    });

    Bridge.define("Interfaces.Interface62", {
        $kind: "interface"
    });

    Bridge.define("Interfaces.Class1", {
        inherits: [Interfaces.Interface1],
        fields: {
            Field: 0,
            property: 0
        },
        props: {
            Property: {
                get: function () {
                    return this.property;
                },
                set: function (value) {
                    this.property = value;
                }
            }
        },
        alias: ["Property", "Interfaces$Interface1$Property"],
        ctors: {
            init: function () {
                this.Field = 200;
                this.property = 100;
            }
        }
    });

    Bridge.define("Interfaces.Interface2", {
        inherits: [Interfaces.Interface1],
        $kind: "interface"
    });

    Bridge.define("Interfaces.Class4", {
        inherits: [Interfaces.Interface4],
        alias: [
            "Method6", "Interfaces$Interface4$Method6",
            "Method7", "Interfaces$Interface4$Method7",
            "Method8", "Interfaces$Interface4$Method8",
            "Method9", "Interfaces$Interface4$Method9",
            "Method10", "Interfaces$Interface4$Method10"
        ],
        methods: {
            Method6: function (b) {
                b.v = true;
            },
            Method7: function (i, b) {
                b.v = true;
            },
            Method8: function (s) {
                s.v = System.String.concat(s.v, "Method8");
            },
            Method9: function (i, s) {
                s.v = System.String.concat(s.v, i);
            },
            Method10: function (i, b, s) {
                b.v = true;
                s.v = System.String.concat(s.v, i);
            }
        }
    });

    Bridge.define("Interfaces.Class6", {
        inherits: [Interfaces.Interface6],
        props: {
            Property: 0,
            MethodProperty: 0
        },
        alias: [
            "Property", "Interfaces$Interface6$Property",
            "GetProperty", "Interfaces$Interface6$GetProperty",
            "SetProperty$1", "Interfaces$Interface6$SetProperty$1",
            "SetProperty", "Interfaces$Interface6$SetProperty"
        ],
        methods: {
            GetProperty: function () {
                return this.MethodProperty;
            },
            SetProperty$1: function (s) {
                this.MethodProperty = s.length;
            },
            SetProperty: function (i) {
                this.MethodProperty = i;
            }
        }
    });

    Bridge.define("Interfaces.Class2", {
        inherits: [Interfaces.Class1,Interfaces.Interface2],
        alias: [
            "Method1", "Interfaces$Interface2$Method1",
            "Method2", "Interfaces$Interface2$Method2",
            "Method3", "Interfaces$Interface2$Method3",
            "Method4", "Interfaces$Interface2$Method4"
        ],
        methods: {
            Method1: function () {
                this.Field = 1;
                this.Property = 2;
            },
            Method2: function (s) {
                this.Field = s.length;
            },
            Method3: function () {
                return this.Field;
            },
            Method4: function (i) {
                this.Field = i.Interfaces$Interface1$Property;

                return true;
            }
        }
    });

    Bridge.define("Interfaces.Interface3", {
        inherits: [Interfaces.Interface2],
        $kind: "interface"
    });

    Bridge.define("Interfaces.Class3", {
        inherits: [Interfaces.Class2,Interfaces.Interface3],
        alias: ["Method5", "Interfaces$Interface3$Method5"],
        methods: {
            Method5: function (i) {
                return i;
            }
        }
    });
});
