    Bridge.define("System.ParseFailureKind", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                ArgumentNull: 1,
                Format: 2,
                FormatWithParameter: 3,
                FormatBadDateTimeCalendar: 4
            }
        }
    });
