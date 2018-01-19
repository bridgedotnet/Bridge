Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N2277.N2277", {
        $metadata : function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"DoSomething","t":8,"sn":"DoSomething","rt":System.Void},{"a":2,"n":"ExternalShouldNotAddStaticsSection","is":true,"t":8,"sn":"ExternalShouldNotAddStaticsSection","rt":System.Void},{"a":2,"n":"InitShouldNotAddStaticsSection","is":true,"t":8,"sn":"InitShouldNotAddStaticsSection","rt":System.Void}]}; },
        methods: {
            DoSomething: function () {

            }
        }
    });
});
