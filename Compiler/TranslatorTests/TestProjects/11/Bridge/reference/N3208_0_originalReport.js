Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    define("N3208_originalReport_module", function () {
        var N3208_originalReport_module = { };
        Bridge.define("N3208_0_originalReport.Program", {
            $scope: N3208_originalReport_module,
            main: function Main () {
                var msg = "Hello, World!";

                System.Console.WriteLine(msg);
            },
            statics: {
                methods: {
                    $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":System.Void}]}; }
                }
            }
        });
        return N3208_originalReport_module;
    });

});
