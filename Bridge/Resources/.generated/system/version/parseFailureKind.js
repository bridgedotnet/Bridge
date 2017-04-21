    Bridge.define("System.Version.ParseFailureKind", {
        $kind: "enum",
        statics: {
            fields: {
                ArgumentNullException: 0,
                ArgumentException: 1,
                ArgumentOutOfRangeException: 2,
                FormatException: 3
            }
        }
    });
