    Bridge.define("System.Version.ParseFailureKind", {
        $kind: "enum",
        statics: {
            argumentNullException: 0,
            argumentException: 1,
            argumentOutOfRangeException: 2,
            formatException: 3
        }
    });
