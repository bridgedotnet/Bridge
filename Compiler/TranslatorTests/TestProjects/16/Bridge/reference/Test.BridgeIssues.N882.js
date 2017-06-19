Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N882.Bridge882_Instance", {
        ctors: {
            ctor: function () {
                this.$initialize();                var $t;

                var a = System.Array.init([1, 2, 3], System.Int32);

                $t = Bridge.getEnumerator(a);
                try {
                    while ($t.moveNext()) {
                        var v = $t.Current;

                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$dispose();
                    }
                }}
    }
    });

    Bridge.define("Test.BridgeIssues.N882.Bridge882_Instance.Bridge882_A_Instance", {
        ctors: {
            ctor: function () {
                this.$initialize();                var $t;

                var a = System.Array.init([5, 6, 7], System.Int32);

                $t = Bridge.getEnumerator(a);
                try {
                    while ($t.moveNext()) {
                        var v = $t.Current;

                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$dispose();
                    }
                }}
    }
    });

    Bridge.define("Test.BridgeIssues.N882.Bridge882_Static", {
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
                            $t.System$IDisposable$dispose();
                        }
                    }}
        }
    }
    });

    Bridge.define("Test.BridgeIssues.N882.Bridge882_Static.Bridge882_A_Static", {
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
                            $t.System$IDisposable$dispose();
                        }
                    }}
        }
    }
    });
});
