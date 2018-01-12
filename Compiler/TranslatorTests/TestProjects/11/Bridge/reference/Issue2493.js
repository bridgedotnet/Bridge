Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Issue2493.Operation3", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Add","t":8,"pi":[{"n":"a","pt":System.Int32,"ps":0},{"n":"b","pt":System.Int32,"ps":1}],"sn":"Add","rt":System.Int32,"p":[System.Int32,System.Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; },
        methods: {
            Add: function (a, b) {
                return ((a + b) | 0);
            }
        }
    });
});
