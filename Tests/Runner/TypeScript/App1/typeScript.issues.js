Bridge.assembly("TypeScriptTest", function ($asm, globals) {
    "use strict";

    Bridge.define("TypeScript.Issues.N1060");

    Bridge.define("TypeScript.Issues.N1060.B$1", function (T) { return {
        getC: function () {
            return new (TypeScript.Issues.N1060.B$1.C(T))();
        }
    }; });

    Bridge.define("TypeScript.Issues.N1060.B$1.C", function (T) { return {

    }; });

    Bridge.define("TypeScript.Issues.N1640");

    Bridge.define("TypeScript.Issues.N1640.IGamePlay", {
        $kind: "interface"
    });

    Bridge.definei("TypeScript.Issues.N2029Interface$1", function (T) { return {
        $kind: "interface"
    }; });

    Bridge.define("TypeScript.Issues.N2030Attribute", {
        inherits: [System.Attribute],
        _isUnspecified: false,
        ctor: function (IsUnspecified) {
            this.$initialize();
            System.Attribute.ctor.call(this);
            this._isUnspecified = IsUnspecified;
        },
        getIsUnspecified: function () {
            return this._isUnspecified;
        }
    });

    Bridge.define("TypeScript.Issues.N2031DictionaryMap$2", function (T1, T2) { return {
        _forward: null,
        _reverse: null,
        config: {
            properties: {
                Forward: null,
                Reverse: null
            },
            init: function () {
                this._forward = new (System.Collections.Generic.Dictionary$2(T1,T2))();
                this._reverse = new (System.Collections.Generic.Dictionary$2(T2,T1))();
            }
        },
        ctor: function () {
            this.$initialize();
            this.setForward(new (TypeScript.Issues.N2031DictionaryMap$2.Indexer$2(T1,T2,T1,T2))(this._forward));
            this.setReverse(new (TypeScript.Issues.N2031DictionaryMap$2.Indexer$2(T1,T2,T2,T1))(this._reverse));
        },
        $ctor1: function (initialValues) {
            if (initialValues === void 0) { initialValues = []; }

            TypeScript.Issues.N2031DictionaryMap$2(T1,T2).ctor.call(this);
            var $t;
            $t = Bridge.getEnumerator(initialValues);
            try {
                while ($t.moveNext()) {
                    var value = $t.getCurrent();
                    this.add(value.key, value.value);
                }
            }finally {
                if (Bridge.is($t, System.IDisposable)) {
                    $t.System$IDisposable$dispose();
                }
            }},
    add: function (t1, t2) {
        this._forward.add(t1, t2);
        this._reverse.add(t2, t1);
    }
    }; });

    Bridge.define("TypeScript.Issues.N2031DictionaryMap$2.Indexer$2", function (T1, T2, T3, T4) { return {
        _dictionary: null,
        ctor: function (dictionary) {
            this.$initialize();
            this._dictionary = dictionary;
        },
        getItem: function (index) {
            return this._dictionary.get(index);
        },
        setItem: function (index, value) {
            this._dictionary.set(index, value);
        },
        containsKey: function (index) {
            return this._dictionary.containsKey(index);
        }
    }; });

    Bridge.define("TypeScript.Issues.N2264", {
        config: {
            properties: {
                Values: null
            }
        },
        ctor: function (queryParameters) {
            if (queryParameters === void 0) { queryParameters = null; }

            this.$initialize();
            this.setValues(queryParameters);
        }
    });

    Bridge.define("TypeScript.Issues.N2438", {
        isDefaultCtor: false,
        config: {
            properties: {
                Attribute: 0
            }
        },
        ctor: function () {
            this.$initialize();
            this.isDefaultCtor = true;
        },
        $ctor1: function (arg) {
            this.$initialize();
            this.setAttribute(arg);
        }
    });

    Bridge.define("TypeScript.Issues.N1640.GamePlay", {
        inherits: [TypeScript.Issues.N1640.IGamePlay],
        config: {
            events: {
                OnGameEvent: null
            },
            alias: [
            "startGame", "TypeScript$Issues$N1640$IGamePlay$startGame",
            "addOnGameEvent", "TypeScript$Issues$N1640$IGamePlay$addOnGameEvent",
            "removeOnGameEvent", "TypeScript$Issues$N1640$IGamePlay$removeOnGameEvent"
            ]
        },
        startGame: function (s) {
            if (!Bridge.staticEquals(this.OnGameEvent, null)) {
                this.OnGameEvent(this, s);
            }
        },
        subscribe: function (handler) {
            this.addOnGameEvent(handler);
        }
    });

    Bridge.define("TypeScript.Issues.N2029", {
        inherits: [TypeScript.Issues.N2029Interface$1(System.Int32)],
        config: {
            properties: {
                Value1: 0
            },
            alias: [
            "getValue1", "TypeScript$Issues$N2029Interface$1$System$Int32$getValue1",
            "setValue1", "TypeScript$Issues$N2029Interface$1$System$Int32$setValue1"
            ]
        }
    });
});
