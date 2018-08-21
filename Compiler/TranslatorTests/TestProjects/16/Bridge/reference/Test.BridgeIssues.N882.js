Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N882.Bridge882_Instance", {
        $metadata : function () { return {"nested":[Test.BridgeIssues.N882.Bridge882_Instance.Bridge882_A_Instance],"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"}]}; },
        ctors: {
            ctor: function () {
                var $t;
                this.$initialize();
                var a = System.Array.init([1, 2, 3], System.Int32);

                $t = Bridge.getEnumerator(a);
                try {
                    while ($t.moveNext()) {
                        var v = $t.Current;

                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N882.Bridge882_Instance.Bridge882_A_Instance", {
        $kind: "nested class",
        $metadata : function () { return {"td":Test.BridgeIssues.N882.Bridge882_Instance,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"}]}; },
        ctors: {
            ctor: function () {
                var $t;
                this.$initialize();
                var a = System.Array.init([5, 6, 7], System.Int32);

                $t = Bridge.getEnumerator(a);
                try {
                    while ($t.moveNext()) {
                        var v = $t.Current;

                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N882.Bridge882_Static", {
        $metadata : function () { return {"nested":[Test.BridgeIssues.N882.Bridge882_Static.Bridge882_A_Static],"att":1,"a":2,"m":[{"n":".cctor","t":1,"sn":"ctor","sm":true},{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; },
        statics: {
            ctors: {
                ctor: function () {
                    var $t;
                    var a = System.Array.init([1, 2, 3], System.Int32);

                    $t = Bridge.getEnumerator(a);
                    try {
                        while ($t.moveNext()) {
                            var v = $t.Current;

                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N882.Bridge882_Static.Bridge882_A_Static", {
        $kind: "nested class",
        $metadata : function () { return {"td":Test.BridgeIssues.N882.Bridge882_Static,"att":2,"a":2,"m":[{"n":".cctor","t":1,"sn":"ctor","sm":true},{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; },
        statics: {
            ctors: {
                ctor: function () {
                    var $t;
                    var a = System.Array.init([5, 6, 7], System.Int32);

                    $t = Bridge.getEnumerator(a);
                    try {
                        while ($t.moveNext()) {
                            var v = $t.Current;

                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
            }
        }
    });
});
