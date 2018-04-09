    Bridge.define("System.Diagnostics.Debug.DebugAssertException", {
        inherits: [System.Exception],
        $kind: "nested class",
        ctors: {
            ctor: function (message, detailMessage, stackTrace) {
                this.$initialize();
                System.Exception.ctor.call(this, (message || "") + ("\n" || "") + (detailMessage || "") + ("\n" || "") + (stackTrace || ""));
            }
        }
    });
