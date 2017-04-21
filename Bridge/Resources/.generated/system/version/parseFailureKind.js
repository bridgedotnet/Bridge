    Bridge.define("System.Version.ParseFailureKind", {
        $kind: "enum",
        statics: {
            fields: {
                argumentNullException: 0,
                argumentException: 1,
                argumentOutOfRangeException: 2,
                formatException: 3
            }
        }
    });
