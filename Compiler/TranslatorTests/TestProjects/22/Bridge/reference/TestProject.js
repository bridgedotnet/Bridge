/**
 * @compiler Bridge.NET 16.5.0
 */
Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    require(["m2"], function (m2) {
        Bridge.define("TestProject1.Program", {
            main: function Main () {
                var a = new A();
                var a2 = new m2.TestProject1.Root2.A();
            },
            props: {
                Prop: null,
                Prop2: null
            }
        });
    
        Bridge.apply(Bridge.global, {
    
        });
    
        Bridge.define("A");
        Bridge.init();
    });

    define("m2", function () {
        var m2 = { };
        Bridge.define("TestProject1.Root2", {
            $scope: m2,
            statics: {
                methods: {
                    $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }
                }
            }
        });

        Bridge.define("TestProject1.Root2.A", {
            $scope: m2,
            statics: {
                methods: {
                    $metadata : function () { return {"td":m2.TestProject1.Root2,"att":1048578,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }
                }
            }
        });
        return m2;
    });

});
