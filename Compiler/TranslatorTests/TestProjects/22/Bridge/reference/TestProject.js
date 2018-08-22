/**
 * @compiler Bridge.NET 17.3.0
 */
Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    require(["m2"], function (m2) {
        Bridge.define("TestProject1.Program", {
            $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":System.Void},{"a":2,"n":"Prop","t":16,"rt":A,"g":{"a":2,"n":"get_Prop","t":8,"rt":A,"fg":"Prop"},"s":{"a":2,"n":"set_Prop","t":8,"p":[A],"rt":System.Void,"fs":"Prop"},"fn":"Prop"},{"a":2,"n":"Prop2","t":16,"rt":m2.TestProject1.Root2.A,"g":{"a":2,"n":"get_Prop2","t":8,"rt":m2.TestProject1.Root2.A,"fg":"Prop2"},"s":{"a":2,"n":"set_Prop2","t":8,"p":[m2.TestProject1.Root2.A],"rt":System.Void,"fs":"Prop2"},"fn":"Prop2"}]}; },
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
    
        Bridge.define("A", {
            $kind: "nested class",
            $metadata : function () { return {"td":Bridge.global,"att":1048578,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }
        });
        Bridge.init();
    });

    define("m2", function () {
        var m2 = { };
        Bridge.define("TestProject1.Root2", {
            $metadata : function () { return {"nested":[m2.TestProject1.Root2.A],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; },
            $scope: m2
        });

        Bridge.define("TestProject1.Root2.A", {
            $kind: "nested class",
            $metadata : function () { return {"td":m2.TestProject1.Root2,"att":1048578,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; },
            $scope: m2
        });
        return m2;
    });

});
