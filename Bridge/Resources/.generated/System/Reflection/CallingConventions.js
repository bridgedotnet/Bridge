    Bridge.define("System.Reflection.CallingConventions", {
        $kind: "enum",
        statics: {
            fields: {
                Standard: 1,
                VarArgs: 2,
                Any: 3,
                HasThis: 32,
                ExplicitThis: 64
            }
        },
        $flags: true
    });
