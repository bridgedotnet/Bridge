    Bridge.define("System.ParseFlags", {
        $kind: "enum",
        statics: {
            fields: {
                HaveYear: 1,
                HaveMonth: 2,
                HaveDay: 4,
                HaveHour: 8,
                HaveMinute: 16,
                HaveSecond: 32,
                HaveTime: 64,
                HaveDate: 128,
                TimeZoneUsed: 256,
                TimeZoneUtc: 512,
                ParsedMonthName: 1024,
                CaptureOffset: 2048,
                YearDefault: 4096,
                Rfc1123Pattern: 8192,
                UtcSortPattern: 16384
            }
        },
        $flags: true
    });
