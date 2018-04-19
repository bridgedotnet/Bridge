Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    require(["N3208_TestModule"], function (N3208_TestModule) {
        Bridge.define("N3208_1_AndreyReview1.App", {
            $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":System.Void}]}; },
            main: function Main () {
                var welcomer = new N3208_TestModule.N3208_1_AndreyReview1.N3208_TestModuleScope.Welcomer();
                welcomer.Hello("world");
            }
        });
        Bridge.init();
    });

    (function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            define("N3208_TestModule", factory);
        } else if (typeof module === 'object' && module.exports) {
            module.exports = factory();
        } else {
            root.N3208_TestModule = factory();
        }
    }(this, function () {
        var N3208_TestModule = { };
        Bridge.define("N3208_1_AndreyReview1.N3208_TestModuleScope", {
            $metadata : function () { return {"nested":[N3208_TestModule.N3208_1_AndreyReview1.N3208_TestModuleScope.Welcomer],"att":1048961,"a":2,"s":true}; },
            $scope: N3208_TestModule
        });

        Bridge.define("N3208_1_AndreyReview1.N3208_TestModuleScope.Welcomer", {
            $kind: "nested class",
            $metadata : function () { return {"td":N3208_TestModule.N3208_1_AndreyReview1.N3208_TestModuleScope,"att":1048578,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Hello","t":8,"pi":[{"n":"name","pt":System.String,"ps":0}],"sn":"Hello","rt":System.Void,"p":[System.String]}]}; },
            $scope: N3208_TestModule,
            methods: {
                Hello: function (name) {
                    System.Console.WriteLine("Hello, " + (name || "") + "!");
                }
            }
        });
        return N3208_TestModule;
    }));

});
