    Bridge.define("System.TimeSpan", {
        inherits: [System.IComparable],

        config: {
            alias: [
                "compareTo", ["System$IComparable$compareTo", "System$IComparable$1$compareTo", "System$IComparable$1System$TimeSpan$compareTo"]
            ]
        },

        $kind: "struct",
        statics: {
            fromDays: function (value) {
                return new System.TimeSpan(value * 864e9);
            },

            fromHours: function (value) {
                return new System.TimeSpan(value * 36e9);
            },

            fromMilliseconds: function (value) {
                return new System.TimeSpan(value * 1e4);
            },

            fromMinutes: function (value) {
                return new System.TimeSpan(value * 6e8);
            },

            fromSeconds: function (value) {
                return new System.TimeSpan(value * 1e7);
            },

            fromTicks: function (value) {
                return new System.TimeSpan(value);
            },

            ctor: function () {
                this.zero = new System.TimeSpan(System.Int64.Zero);
                this.maxValue = new System.TimeSpan(System.Int64.MaxValue);
                this.minValue = new System.TimeSpan(System.Int64.MinValue);
            },

            getDefaultValue: function () {
                return new System.TimeSpan(System.Int64.Zero);
            },

            neg: function (t) {
                return Bridge.hasValue(t) ? (new System.TimeSpan(t.ticks.neg())) : null;
            },

            sub: function (t1, t2) {
                return Bridge.hasValue$1(t1, t2) ? (new System.TimeSpan(t1.ticks.sub(t2.ticks))) : null;
            },

            eq: function (t1, t2) {
                if (t1 === null && t2 === null) {
                    return true;
                }

                return Bridge.hasValue$1(t1, t2) ? (t1.ticks.eq(t2.ticks)) : false;
            },

            neq: function (t1, t2) {
                if (t1 === null && t2 === null) {
                    return false;
                }

                return Bridge.hasValue$1(t1, t2) ? (t1.ticks.ne(t2.ticks)) : true;
            },

            plus: function (t) {
                return Bridge.hasValue(t) ? (new System.TimeSpan(t.ticks)) : null;
            },

            add: function (t1, t2) {
                return Bridge.hasValue$1(t1, t2) ? (new System.TimeSpan(t1.ticks.add(t2.ticks))) : null;
            },

            gt: function (a, b) {
                return Bridge.hasValue$1(a, b) ? (a.ticks.gt(b.ticks)) : false;
            },

            gte: function (a, b) {
                return Bridge.hasValue$1(a, b) ? (a.ticks.gte(b.ticks)) : false;
            },

            lt: function (a, b) {
                return Bridge.hasValue$1(a, b) ? (a.ticks.lt(b.ticks)) : false;
            },

            lte: function (a, b) {
                return Bridge.hasValue$1(a, b) ? (a.ticks.lte(b.ticks)) : false;
            },

            timeSpanWithDays: /^(\-)?(\d+)[\.|:](\d+):(\d+):(\d+)(\.\d+)?/,
            timeSpanNoDays: /^(\-)?(\d+):(\d+):(\d+)(\.\d+)?/,

            parse: function(value) {
                var match,
                    milliseconds;

                function parseMilliseconds(value) {
                    return value ? parseFloat('0' + value) * 1000 : 0;
                }

                if ((match = value.match(System.TimeSpan.timeSpanWithDays))) {
                    var ts = new System.TimeSpan(match[2], match[3], match[4], match[5], parseMilliseconds(match[6]));

                    return match[1] ? new System.TimeSpan(ts.ticks.neg()) : ts;
                }

                if ((match = value.match(System.TimeSpan.timeSpanNoDays))) {
                    var ts = new System.TimeSpan(0, match[2], match[3], match[4], parseMilliseconds(match[5]));

                    return match[1] ? new System.TimeSpan(ts.ticks.neg()) : ts;
                }

                return null;
            },

            tryParse: function (value, provider, result) {
                result.v = this.parse(value);

                if (result.v == null) {
                    result.v = this.minValue;

                    return false;
                }

                return true;
            }
        },

        ctor: function () {
            this.$initialize();
            this.ticks = System.Int64.Zero;

            if (arguments.length === 1) {
                this.ticks = arguments[0] instanceof System.Int64 ? arguments[0] : new System.Int64(arguments[0]);
            } else if (arguments.length === 3) {
                this.ticks = new System.Int64(arguments[0]).mul(60).add(arguments[1]).mul(60).add(arguments[2]).mul(1e7);
            } else if (arguments.length === 4) {
                this.ticks = new System.Int64(arguments[0]).mul(24).add(arguments[1]).mul(60).add(arguments[2]).mul(60).add(arguments[3]).mul(1e7);
            } else if (arguments.length === 5) {
                this.ticks = new System.Int64(arguments[0]).mul(24).add(arguments[1]).mul(60).add(arguments[2]).mul(60).add(arguments[3]).mul(1e3).add(arguments[4]).mul(1e4);
            }
        },

        TimeToTicks: function (hour, minute, second) {
            var totalSeconds = System.Int64(hour).mul("3600").add(System.Int64(minute).mul("60")).add(System.Int64(second));
            return totalSeconds.mul("10000000");
        },

        getTicks: function () {
            return this.ticks;
        },

        getDays: function () {
            return this.ticks.div(864e9).toNumber();
        },

        getHours: function () {
            return this.ticks.div(36e9).mod(24).toNumber();
        },

        getMilliseconds: function () {
            return this.ticks.div(1e4).mod(1e3).toNumber();
        },

        getMinutes: function () {
            return this.ticks.div(6e8).mod(60).toNumber();
        },

        getSeconds: function () {
            return this.ticks.div(1e7).mod(60).toNumber();
        },

        getTotalDays: function () {
            return this.ticks.toNumberDivided(864e9);
        },

        getTotalHours: function () {
            return this.ticks.toNumberDivided(36e9);
        },

        getTotalMilliseconds: function () {
            return this.ticks.toNumberDivided(1e4);
        },

        getTotalMinutes: function () {
            return this.ticks.toNumberDivided(6e8);
        },

        getTotalSeconds: function () {
            return this.ticks.toNumberDivided(1e7);
        },

        get12HourHour: function () {
            return (this.getHours() > 12) ? this.getHours() - 12 : (this.getHours() === 0) ? 12 : this.getHours();
        },

        add: function (ts) {
            return new System.TimeSpan(this.ticks.add(ts.ticks));
        },

        subtract: function (ts) {
            return new System.TimeSpan(this.ticks.sub(ts.ticks));
        },

        duration: function () {
            return new System.TimeSpan(this.ticks.abs());
        },

        negate: function () {
            return new System.TimeSpan(this.ticks.neg());
        },

        compareTo: function (other) {
            return this.ticks.compareTo(other.ticks);
        },

        equals: function (other) {
            return Bridge.is(other, System.TimeSpan) ? other.ticks.eq(this.ticks) : false;
        },

        equalsT: function (other) {
            return other.ticks.eq(this.ticks);
        },

        format: function (formatStr, provider) {
            return this.toString(formatStr, provider);
        },

        getHashCode: function () {
            return this.ticks.getHashCode();
        },

        toString: function (formatStr, provider) {
            var ticks = this.ticks,
                result = "",
                me = this,
                dtInfo = (provider || System.Globalization.CultureInfo.getCurrentCulture()).getFormat(System.Globalization.DateTimeFormatInfo),
                format = function (t, n, dir, cut) {
                    return System.String.alignString(Math.abs(t | 0).toString(), n || 2, "0", dir || 2, cut || false);
                },
                isNeg = ticks < 0;

            if (formatStr) {
                return formatStr.replace(/(\\.|'[^']*'|"[^"]*"|dd?|HH?|hh?|mm?|ss?|tt?|f{1,7}|\:|\/)/g,
                    function (match, group, index) {
                        var part = match;

                        switch (match) {
                            case "d":
                                return me.getDays();
                            case "dd":
                                return format(me.getDays());
                            case "H":
                                return me.getHours();
                            case "HH":
                                return format(me.getHours());
                            case "h":
                                return me.get12HourHour();
                            case "hh":
                                return format(me.get12HourHour());
                            case "m":
                                return me.getMinutes();
                            case "mm":
                                return format(me.getMinutes());
                            case "s":
                                return me.getSeconds();
                            case "ss":
                                return format(me.getSeconds());
                            case "t":
                                return ((me.getHours() < 12) ? dtInfo.amDesignator : dtInfo.pmDesignator).substring(0, 1);
                            case "tt":
                                return (me.getHours() < 12) ? dtInfo.amDesignator : dtInfo.pmDesignator;
                            case "f":
                            case "ff":
                            case "fff":
                            case "ffff":
                            case "fffff":
                            case "ffffff":
                            case "fffffff":
                                return format(me.getMilliseconds(), match.length, 1, true);
                            default:
                                return match.substr(1, match.length - 1 - (match.charAt(0) !== "\\"));
                        }
                    }
                );
            }

            if (ticks.abs().gte(864e9)) {
                result += format(ticks.toNumberDivided(864e9), 1) + ".";
                ticks = ticks.mod(864e9);
            }

            result += format(ticks.toNumberDivided(36e9)) + ":";
            ticks = ticks.mod(36e9);
            result += format(ticks.toNumberDivided(6e8) | 0) + ":";
            ticks = ticks.mod(6e8);
            result += format(ticks.toNumberDivided(1e7));
            ticks = ticks.mod(1e7);

            if (ticks.gt(0)) {
                result += "." + format(ticks.toNumber(), 7);
            }

            return (isNeg ? "-" : "") + result;
        }
    });

    Bridge.Class.addExtend(System.TimeSpan, [System.IComparable$1(System.TimeSpan), System.IEquatable$1(System.TimeSpan)]);
