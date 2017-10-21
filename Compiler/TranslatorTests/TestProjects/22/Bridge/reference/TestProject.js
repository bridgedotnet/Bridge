/**
 * @compiler Bridge.NET 16.4.0
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
            $scope: m2
        });

        Bridge.define("m2.TestProject1.Root2.A", {
            $scope: m2
        });
        return m2;
    });

});
