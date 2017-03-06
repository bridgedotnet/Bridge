Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1461.CreateAnonymous", {
        create: function () {
            // The anonymous type name should be  like `$_.$AnonymousType$1` not containig Bridge like `Bridge.$AnonymousType$1`
            var o1 = new $asm.$AnonymousType$1(1);
        }
    });

    Bridge.define("$AnonymousType$1", $asm, {
        $kind: "anonymous",
        ctor: function (a) {
            this.a = a;
        },
        getA : function () {
            return this.a;
        },
        equals: function (o) {
            if (!Bridge.is(o, $asm.$AnonymousType$1)) {
                return false;
            }
            return Bridge.equals(this.a, o.a);
        },
        getHashCode: function () {
            var h = Bridge.addHash([7550196186, this.a]);
            return h;
        },
        toJSON: function () {
            return {
                a : this.a
            };
        },
        statics : {
            $metadata : function () { return {"m":[{"a":2,"n":"A","t":16,"rt":System.Int32,"g":{"a":2,"n":"get_A","t":8,"sn":"getA","rt":System.Int32}}]}; }
        }
    });
});
