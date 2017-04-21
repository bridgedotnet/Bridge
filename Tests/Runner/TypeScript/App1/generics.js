Bridge.assembly("TypeScriptTest", function ($asm, globals) {
    "use strict";

    Bridge.define("Generics.GenericClass$1", function (T) { return {
        fields: {
            Instance: Bridge.getDefaultValue(T)
        },
        ctors: {
            ctor: function (instance) {
                this.$initialize();
                this.Instance = instance;
            }
        },
        methods: {
            GetSomething: function (input) {
                return input;
            }
        }
    }; });

    Bridge.define("Generics.INamedEntity", {
        props: {
            Name: null
        }
    });

    Bridge.define("Generics.GenericNew$1", function (T) { return {
        fields: {
            Instance: Bridge.getDefaultValue(T)
        },
        ctors: {
            ctor: function (instance) {
                this.$initialize();
                this.Instance = instance;
            }
        },
        methods: {
            GetSomething: function (input) {
                return input;
            }
        }
    }; });

    Bridge.define("Generics.GenericNewAndClass$1", function (T) { return {
        fields: {
            Instance: Bridge.getDefaultValue(T)
        },
        ctors: {
            ctor: function (instance) {
                this.$initialize();
                this.Instance = instance;
            }
        },
        methods: {
            GetSomething: function (input) {
                return input;
            }
        }
    }; });

    Bridge.define("Generics.GenericStruct$1", function (T) { return {
        fields: {
            Instance: Bridge.getDefaultValue(T)
        },
        ctors: {
            ctor: function (instance) {
                this.$initialize();
                this.Instance = instance;
            }
        },
        methods: {
            GetSomething: function (input) {
                return input;
            }
        }
    }; });

    Bridge.define("Generics.implementation", {
        statics: {
            fields: {
                SimpleGenericInt: null,
                SimpleDoubleGenericIntString: null,
                GenericINamedEntity: null,
                GenericNamedEntity: null,
                GenericClassObject: null,
                GenericClassNamedEntity: null,
                GenericNew: null,
                GenericNewAndClass: null
            },
            ctors: {
                init: function () {
                    this.SimpleGenericInt = new (Generics.SimpleGeneric$1(System.Int32))(1);
                    this.SimpleDoubleGenericIntString = new (Generics.SimpleDoubleGeneric$2(System.Int32,System.String)).ctor();
                    this.GenericINamedEntity = new (Generics.GenericINamedEntity$1(Generics.INamedEntity))(new Generics.NamedEntity());
                    this.GenericNamedEntity = new (Generics.GenericNamedEntity$1(Generics.NamedEntity))(new Generics.NamedEntity());
                    this.GenericClassObject = new (Generics.GenericClass$1(System.Object))(Bridge.box(2, System.Int32));
                    this.GenericClassNamedEntity = new (Generics.GenericClass$1(Generics.NamedEntity))(new Generics.NamedEntity());
                    this.GenericNew = new (Generics.GenericNew$1(Generics.NewClass))(new Generics.NewClass());
                    this.GenericNewAndClass = new (Generics.GenericNewAndClass$1(Generics.NewClass))(new Generics.NewClass());
                }
            }
        }
    });

    Bridge.define("Generics.NewClass", {
        fields: {
            Data: 0
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                this.Data = 30;
            }
        }
    });

    Bridge.define("Generics.SimpleDoubleGeneric$2", function (T, K) { return {
        fields: {
            InstanceT: Bridge.getDefaultValue(T),
            InstanceK: Bridge.getDefaultValue(K)
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            },
            $ctor1: function (instanceT, instanceK) {
                this.$initialize();
                this.InstanceT = instanceT;
                this.InstanceK = instanceK;
            }
        },
        methods: {
            GetSomething: function (input) {
                return input;
            },
            GetSomethingMore: function (input) {
                return input;
            }
        }
    }; });

    Bridge.define("Generics.SimpleGeneric$1", function (T) { return {
        fields: {
            Instance: Bridge.getDefaultValue(T)
        },
        ctors: {
            ctor: function (instance) {
                this.$initialize();
                this.Instance = instance;
            }
        },
        methods: {
            GetSomething: function (input) {
                return input;
            }
        }
    }; });

    Bridge.define("Generics.GenericINamedEntity$1", function (T) { return {
        fields: {
            Instance: Bridge.getDefaultValue(T)
        },
        ctors: {
            ctor: function (instance) {
                this.$initialize();
                this.Instance = instance;
            }
        },
        methods: {
            GetSomething: function (input) {
                return input;
            }
        }
    }; });

    Bridge.define("Generics.NamedEntity", {
        inherits: [Generics.INamedEntity],
        props: {
            Name$1: null
        }
    });

    Bridge.define("Generics.GenericNamedEntity$1", function (T) { return {
        fields: {
            Instance: Bridge.getDefaultValue(T)
        },
        ctors: {
            ctor: function (instance) {
                this.$initialize();
                this.Instance = instance;
            }
        },
        methods: {
            GetSomething: function (input) {
                return input;
            }
        }
    }; });
});
