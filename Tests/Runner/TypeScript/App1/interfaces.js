/**
 * Bridge Test library for TypeScript.
 * @version 15.3.0
 * @author Object.NET, Inc.
 */
Bridge.assembly({
        name: "TypeScriptTest",
        version: "15.3.0",
        compiler: "15.3.0"
    },
    function ($asm, globals) {
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
            field: 200,
            property: 100,
            config: {
                alias: [
                "getProperty", "Interfaces$Interface1$getProperty",
                "setProperty", "Interfaces$Interface1$setProperty"
                ]
            },
            getProperty: function () {
                return this.property;
            },
            setProperty: function (value) {
                this.property = value;
            }
        });

        Bridge.define("Interfaces.Interface2", {
            inherits: [Interfaces.Interface1],
            $kind: "interface"
        });

        Bridge.define("Interfaces.Class4", {
            inherits: [Interfaces.Interface4],
            config: {
                alias: [
                "method6", "Interfaces$Interface4$method6",
                "method7", "Interfaces$Interface4$method7",
                "method8", "Interfaces$Interface4$method8",
                "method9", "Interfaces$Interface4$method9",
                "method10", "Interfaces$Interface4$method10"
                ]
            },
            method6: function (b) {
                b.v = true;
            },
            method7: function (i, b) {
                b.v = true;
            },
            method8: function (s) {
                s.v = System.String.concat(s.v, "Method8");
            },
            method9: function (i, s) {
                s.v = System.String.concat(s.v, i);
            },
            method10: function (i, b, s) {
                b.v = true;
                s.v = System.String.concat(s.v, i);
            }
        });

        Bridge.define("Interfaces.Class6", {
            inherits: [Interfaces.Interface6],
            config: {
                properties: {
                    Property: 0,
                    MethodProperty: 0
                },
                alias: [
                "getProperty", "Interfaces$Interface6$getProperty",
                "setProperty", "Interfaces$Interface6$setProperty",
                "getProperty$1", "Interfaces$Interface6$getProperty$1",
                "setProperty$2", "Interfaces$Interface6$setProperty$2",
                "setProperty$1", "Interfaces$Interface6$setProperty$1"
                ]
            },
            getProperty$1: function () {
                return this.getMethodProperty();
            },
            setProperty$2: function (s) {
                this.setMethodProperty(s.length);
            },
            setProperty$1: function (i) {
                this.setMethodProperty(i);
            }
        });

        Bridge.define("Interfaces.Class2", {
            inherits: [Interfaces.Class1,Interfaces.Interface2],
            config: {
                alias: [
                "method1", "Interfaces$Interface2$method1",
                "method2", "Interfaces$Interface2$method2",
                "method3", "Interfaces$Interface2$method3",
                "method4", "Interfaces$Interface2$method4"
                ]
            },
            method1: function () {
                this.field = 1;
                this.setProperty(2);
            },
            method2: function (s) {
                this.field = s.length;
            },
            method3: function () {
                return this.field;
            },
            method4: function (i) {
                this.field = i.Interfaces$Interface1$getProperty();

                return true;
            }
        });

        Bridge.define("Interfaces.Interface3", {
            inherits: [Interfaces.Interface2],
            $kind: "interface"
        });

        Bridge.define("Interfaces.Class3", {
            inherits: [Interfaces.Class2,Interfaces.Interface3],
            config: {
                alias: [
                "method5", "Interfaces$Interface3$method5"
                ]
            },
            method5: function (i) {
                return i;
            }
        });
    }
);
