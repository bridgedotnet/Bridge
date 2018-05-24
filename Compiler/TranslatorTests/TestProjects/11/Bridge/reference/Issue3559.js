Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    /** @namespace Issue3559 */

    /**
     * TypeScript reference for type parameters must be wrapped in lt and gt
     symbols, not parenthesis.
     *
     * @public
     * @class Issue3559.C$2
     */
    Bridge.define("Issue3559.C$2", function (S, T) { return {
        $metadata : function () { return {"nested":[Issue3559.C$2.R],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }
    }; });

    Bridge.define("Issue3559.C$2.R", function (S, T) { return {
        $kind: "nested struct",
        $metadata : function () { return {"td":Issue3559.C$2(S,T),"att":1048842,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"x","t":4,"rt":System.Int32,"sn":"x","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; },
        statics: {
            methods: {
                getDefaultValue: function () { return new (Issue3559.C$2.R(S,T))(); }
            }
        },
        fields: {
            x: 0
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([82, this.x]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Issue3559.C$2.R(S,T))) {
                    return false;
                }
                return Bridge.equals(this.x, o.x);
            },
            $clone: function (to) {
                var s = to || new (Issue3559.C$2.R(S,T))();
                s.x = this.x;
                return s;
            }
        }
    }; });
});
