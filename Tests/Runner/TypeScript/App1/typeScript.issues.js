Bridge.assembly("TypeScriptTest", function ($asm, globals) {
    "use strict";

    Bridge.define("TypeScript.Issues.N1060");

    Bridge.define("TypeScript.Issues.N1060.B$1", function (T) { return {
        methods: {
            GetC: function () {
                return new (TypeScript.Issues.N1060.B$1.C(T))();
            }
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
        fields: {
            _isUnspecified: false
        },
        props: {
            IsUnspecified: {
                get: function () {
                    return this._isUnspecified;
                }
            }
        },
        ctors: {
            ctor: function (IsUnspecified) {
                this.$initialize();
                System.Attribute.ctor.call(this);
                this._isUnspecified = IsUnspecified;
            }
        }
    });

    Bridge.define("TypeScript.Issues.N2031DictionaryMap$2", function (T1, T2) { return {
        fields: {
            _forward: null,
            _reverse: null
        },
        props: {
            Forward: null,
            Reverse: null
        },
        ctors: {
            init: function () {
                this._forward = new (System.Collections.Generic.Dictionary$2(T1,T2))();
                this._reverse = new (System.Collections.Generic.Dictionary$2(T2,T1))();
            },
            ctor: function () {
                this.$initialize();
                this.Forward = new (TypeScript.Issues.N2031DictionaryMap$2.Indexer$2(T1,T2,T1,T2))(this._forward);
                this.Reverse = new (TypeScript.Issues.N2031DictionaryMap$2.Indexer$2(T1,T2,T2,T1))(this._reverse);
            },
            $ctor1: function (initialValues) {
                if (initialValues === void 0) { initialValues = []; }

                TypeScript.Issues.N2031DictionaryMap$2(T1,T2).ctor.call(this);
                var $t;
                $t = Bridge.getEnumerator(initialValues);
                try {
                    while ($t.moveNext()) {
                        var value = $t.Current;
                        this.Add(value.key, value.value);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$dispose();
                    }
                }}
    },
    methods: {
        Add: function (t1, t2) {
            this._forward.add(t1, t2);
            this._reverse.add(t2, t1);
        }
    }
    }; });

    Bridge.define("TypeScript.Issues.N2031DictionaryMap$2.Indexer$2", function (T1, T2, T3, T4) { return {
        fields: {
            _dictionary: null
        },
        ctors: {
            ctor: function (dictionary) {
                this.$initialize();
                this._dictionary = dictionary;
            }
        },
        methods: {
            getItem: function (index) {
                return this._dictionary.get(index);
            },
            setItem: function (index, value) {
                this._dictionary.set(index, value);
            },
            ContainsKey: function (index) {
                return this._dictionary.containsKey(index);
            }
        }
    }; });

    Bridge.define("TypeScript.Issues.N2264", {
        props: {
            Values: null
        },
        ctors: {
            ctor: function (queryParameters) {
                if (queryParameters === void 0) { queryParameters = null; }

                this.$initialize();
                this.Values = queryParameters;
            }
        }
    });

    Bridge.define("TypeScript.Issues.N2438", {
        fields: {
            isDefaultCtor: false
        },
        props: {
            Attribute: 0
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                this.isDefaultCtor = true;
            },
            $ctor1: function (arg) {
                this.$initialize();
                this.Attribute = arg;
            }
        }
    });

    Bridge.define("TypeScript.Issues.N2463", {
        statics: {
            methods: {
                Do: function (dummy) {
                    dummy.Nothing = (dummy.Nothing + 1) | 0;
                    return dummy;
                }
            }
        }
    });

    Bridge.define("TypeScript.Issues.N2474");

    Bridge.define("TypeScript.Issues.N2474.Enum", {
        $kind: "enum",
        statics: {
            fields: {
                Value: 1
            }
        }
    });

    Bridge.define("TypeScript.Issues.N2474.NameEnum", {
        $kind: "enum",
        statics: {
            fields: {
                value: 3
            }
        }
    });

    Bridge.define("TypeScript.Issues.N2474.NameLowerCase", {
        $kind: "enum",
        statics: {
            fields: {
                value: 4
            }
        }
    });

    Bridge.define("TypeScript.Issues.N2474.NamePreserveCase", {
        $kind: "enum",
        statics: {
            fields: {
                Value: 5
            }
        }
    });

    Bridge.define("TypeScript.Issues.N2474.NameUpperCase", {
        $kind: "enum",
        statics: {
            fields: {
                VALUE: 6
            }
        }
    });

    Bridge.define("TypeScript.Issues.N2474.StringName", {
        $kind: "enum",
        statics: {
            fields: {
                value: "value"
            }
        },
        $utype: System.String
    });

    Bridge.define("TypeScript.Issues.N2474.StringNameLowerCase", {
        $kind: "enum",
        statics: {
            fields: {
                value: "value"
            }
        },
        $utype: System.String
    });

    Bridge.define("TypeScript.Issues.N2474.StringNamePreserveCase", {
        $kind: "enum",
        statics: {
            fields: {
                Value: "Value"
            }
        },
        $utype: System.String
    });

    Bridge.define("TypeScript.Issues.N2474.StringNameUpperCase", {
        $kind: "enum",
        statics: {
            fields: {
                VALUE: "VALUE"
            }
        },
        $utype: System.String
    });

    Bridge.define("TypeScript.Issues.N2474.ValueEnum", {
        $kind: "enum",
        statics: {
            fields: {
                Value: 2
            }
        }
    });

    Bridge.define("TypeScript.Issues.N2493Operation3", {
        methods: {
            Add: function (n) {
                return ((n + 3) | 0);
            }
        }
    });

    Bridge.define("TypeScript.Issues.N2653IZig", {
        $kind: "interface"
    });

    Bridge.define("TypeScript.Issues.N2661C", {
        fields: {
            fn: null
        }
    });

    Bridge.define("TypeScript.Issues.N2911", {
        statics: {
            methods: {
                initButton_Clicked: function (arg) {
                    // Should build non generic TS initButton_Clicked(arg: MouseEvent): void;
                }
            }
        }
    });

    Bridge.define("TypeScript.Issues.N1640.GamePlay", {
        inherits: [TypeScript.Issues.N1640.IGamePlay],
        events: {
            OnGameEvent: null
        },
        alias: [
            "StartGame", "TypeScript$Issues$N1640$IGamePlay$StartGame",
            "addOnGameEvent", "TypeScript$Issues$N1640$IGamePlay$addOnGameEvent",
            "removeOnGameEvent", "TypeScript$Issues$N1640$IGamePlay$removeOnGameEvent"
        ],
        methods: {
            StartGame: function (s) {
                if (!Bridge.staticEquals(this.OnGameEvent, null)) {
                    this.OnGameEvent(this, s);
                }
            },
            Subscribe: function (handler) {
                this.addOnGameEvent(handler);
            }
        }
    });

    Bridge.define("TypeScript.Issues.N2029", {
        inherits: [TypeScript.Issues.N2029Interface$1(System.Int32)],
        props: {
            Value1: 0
        },
        alias: ["Value1", "TypeScript$Issues$N2029Interface$1$System$Int32$Value1"]
    });

    Bridge.define("TypeScript.Issues.N2653Zig", {
        inherits: [TypeScript.Issues.N2653IZig],
        alias: ["zag", "TypeScript$Issues$N2653IZig$zag"],
        methods: {
            zag: function () {
                return 1;
            }
        }
    });
});
