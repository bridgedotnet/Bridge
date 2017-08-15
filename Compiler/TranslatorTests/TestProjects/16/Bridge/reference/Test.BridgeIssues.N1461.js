Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1461.CreateAnonymous", {
        methods: {
            Create: function () {
                // The anonymous type name should be  like `$_.$AnonymousType$1` not containig Bridge like `Bridge.$AnonymousType$1`
                var o1 = new $asm.$AnonymousType$1(1);
            }
        }
    });

    Bridge.define("$AnonymousType$1", $asm, {
        $kind: "anonymous",
        ctors: {
            ctor: function (a) {
                this.A = a;
            }
        },
        methods: {
            equals: function (o) {
                if (!Bridge.is(o, $asm.$AnonymousType$1)) {
                    return false;
                }
                return Bridge.equals(this.A, o.A);
            },
            getHashCode: function () {
                var h = Bridge.addHash([7550196186, this.A]);
                return h;
            },
            toJSON: function () {
                return {
                    A : this.A
                };
            }
        },
        statics : {
            methods: {
                $metadata : function () { return {"m":[{"a":2,"n":"A","t":16,"rt":System.Int32,"g":{"a":2,"n":"get_A","t":8,"rt":System.Int32,"fg":"A","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"A"}]}; }
            }
        }
    });
});
