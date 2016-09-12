Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define('Test.BridgeIssues.N1461.CreateAnonymous', {
        create: function () {
            // The anonymous type name should be  like `$_.$AnonymousType$1` not containig Bridge like `Bridge.$AnonymousType$1`
            var o1 = new $_.$AnonymousType$1(1);
        }
    });

    var $_ = {};

    Bridge.define("$AnonymousType$1", $_, {
        $kind: "anonymous",
        ctor: function (a) {
            this.a = a;
        },
        getA : function () {
            return this.a;
        },
        equals: function (o) {
            if (!Bridge.is(o, $_.$AnonymousType$1)) {
                return false;
            }
            return Bridge.equals(this.a, o.a);
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 6320272310;
            hash = hash * 23 + (this.a == null ? 0 : Bridge.getHashCode(this.a));
            return hash;
        },
        toJSON: function () {
            return {
                a : this.a
            };
        }
    });

});
