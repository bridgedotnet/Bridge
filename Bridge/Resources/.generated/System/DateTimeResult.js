    Bridge.define("System.DateTimeResult", {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new System.DateTimeResult(); }
            }
        },
        fields: {
            Year: 0,
            Month: 0,
            Day: 0,
            Hour: 0,
            Minute: 0,
            Second: 0,
            fraction: 0,
            era: 0,
            flags: 0,
            timeZoneOffset: null,
            calendar: null,
            parsedDate: null,
            failure: 0,
            failureMessageID: null,
            failureMessageFormatArgument: null,
            failureArgumentName: null
        },
        ctors: {
            init: function () {
                this.timeZoneOffset = new System.TimeSpan();
                this.parsedDate = System.DateTime.getDefaultValue();
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            Init: function () {
                this.Year = -1;
                this.Month = -1;
                this.Day = -1;
                this.fraction = -1;
                this.era = -1;
            },
            SetDate: function (year, month, day) {
                this.Year = year;
                this.Month = month;
                this.Day = day;
            },
            SetFailure: function (failure, failureMessageID, failureMessageFormatArgument) {
                this.failure = failure;
                this.failureMessageID = failureMessageID;
                this.failureMessageFormatArgument = failureMessageFormatArgument;
            },
            SetFailure$1: function (failure, failureMessageID, failureMessageFormatArgument, failureArgumentName) {
                this.failure = failure;
                this.failureMessageID = failureMessageID;
                this.failureMessageFormatArgument = failureMessageFormatArgument;
                this.failureArgumentName = failureArgumentName;
            },
            getHashCode: function () {
                var h = Bridge.addHash([5374321750, this.Year, this.Month, this.Day, this.Hour, this.Minute, this.Second, this.fraction, this.era, this.flags, this.timeZoneOffset, this.calendar, this.parsedDate, this.failure, this.failureMessageID, this.failureMessageFormatArgument, this.failureArgumentName]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, System.DateTimeResult)) {
                    return false;
                }
                return Bridge.equals(this.Year, o.Year) && Bridge.equals(this.Month, o.Month) && Bridge.equals(this.Day, o.Day) && Bridge.equals(this.Hour, o.Hour) && Bridge.equals(this.Minute, o.Minute) && Bridge.equals(this.Second, o.Second) && Bridge.equals(this.fraction, o.fraction) && Bridge.equals(this.era, o.era) && Bridge.equals(this.flags, o.flags) && Bridge.equals(this.timeZoneOffset, o.timeZoneOffset) && Bridge.equals(this.calendar, o.calendar) && Bridge.equals(this.parsedDate, o.parsedDate) && Bridge.equals(this.failure, o.failure) && Bridge.equals(this.failureMessageID, o.failureMessageID) && Bridge.equals(this.failureMessageFormatArgument, o.failureMessageFormatArgument) && Bridge.equals(this.failureArgumentName, o.failureArgumentName);
            },
            $clone: function (to) {
                var s = to || new System.DateTimeResult();
                s.Year = this.Year;
                s.Month = this.Month;
                s.Day = this.Day;
                s.Hour = this.Hour;
                s.Minute = this.Minute;
                s.Second = this.Second;
                s.fraction = this.fraction;
                s.era = this.era;
                s.flags = this.flags;
                s.timeZoneOffset = this.timeZoneOffset;
                s.calendar = this.calendar;
                s.parsedDate = this.parsedDate;
                s.failure = this.failure;
                s.failureMessageID = this.failureMessageID;
                s.failureMessageFormatArgument = this.failureMessageFormatArgument;
                s.failureArgumentName = this.failureArgumentName;
                return s;
            }
        }
    });
