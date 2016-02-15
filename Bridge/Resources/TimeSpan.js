    // @source TimeSpan.js

    Bridge.define("Bridge.TimeSpan", {
        inherits: [Bridge.IComparable],
        statics: {
            fromDays: function (value) {
                return new Bridge.TimeSpan(value * 864e9);
            },

            fromHours: function (value) {
                return new Bridge.TimeSpan(value * 36e9);
            },

            fromMilliseconds: function (value) {
                return new Bridge.TimeSpan(value * 1e4);
            },

            fromMinutes: function (value) {
                return new Bridge.TimeSpan(value * 6e8);
            },

            fromSeconds: function (value) {
                return new Bridge.TimeSpan(value * 1e7);
            },

            fromTicks: function (value) {
                return new Bridge.TimeSpan(value);
            },

            constructor: function () {
                this.zero = new Bridge.TimeSpan(0);
                this.maxValue = new Bridge.TimeSpan(864e13);
                this.minValue = new Bridge.TimeSpan(-864e13);
            },

            getDefaultValue: function () {
                return new Bridge.TimeSpan(0);
            },

            neg: function (t) {
                return Bridge.hasValue(t) ? (new Bridge.TimeSpan(-t.ticks)) : null;
            },

            sub: function (t1, t2) {
                return Bridge.hasValue(t1) && Bridge.hasValue(t2) ? (new Bridge.TimeSpan(t1.ticks - t2.ticks)) : null;
            },

            eq: function(t1, t2) {
                return Bridge.hasValue(t1) && Bridge.hasValue(t2) ? (t1.ticks === t2.ticks) : null;
            },

            neq: function (t1, t2) {
                return Bridge.hasValue(t1) && Bridge.hasValue(t2) ? (t1.ticks !== t2.ticks) : null;
            },

            plus: function (t) {
                return Bridge.hasValue(t) ? (new Bridge.TimeSpan(t.ticks)) : null;
            },

            add: function (t1, t2) {
                return Bridge.hasValue(t1) && Bridge.hasValue(t2) ? (new Bridge.TimeSpan(t1.ticks + t2.ticks)) : null;
            },

            gt: function (a, b) {
                return Bridge.hasValue(a) && Bridge.hasValue(b) ? (a.ticks > b.ticks) : false;
            },

            gte: function (a, b) {
                return Bridge.hasValue(a) && Bridge.hasValue(b) ? (a.ticks >= b.ticks) : false;
            },

            lt: function (a, b) {
                return Bridge.hasValue(a) && Bridge.hasValue(b) ? (a.ticks < b.ticks) : false;
            },

            lte: function (a, b) {
                return Bridge.hasValue(a) && Bridge.hasValue(b) ? (a.ticks <= b.ticks) : false;
            }
        },

        constructor: function () {
            this.ticks = 0;

            if (arguments.length === 1) {
                this.ticks = arguments[0];
            } else if (arguments.length === 3) {
                this.ticks = (((arguments[0] * 60 + arguments[1]) * 60) + arguments[2]) * 1e7;
            } else if (arguments.length === 4) {
                this.ticks = ((((arguments[0] * 24 + arguments[1]) * 60 + arguments[2]) * 60) + arguments[3]) * 1e7;
            } else if (arguments.length === 5) {
                this.ticks = (((((arguments[0] * 24 + arguments[1]) * 60 + arguments[2]) * 60) + arguments[3]) * 1e3 + arguments[4]) * 1e4;
            }
        },

        getTicks: function () {
            return this.ticks;
        },

        getDays: function () {
            return this.ticks / 864e9 | 0;
        },

        getHours: function () {
            return this.ticks / 36e9 % 24 | 0;
        },

        getMilliseconds: function () {
            return this.ticks / 1e4 % 1e3 | 0;
        },

        getMinutes: function () {
            return this.ticks / 6e8 % 60 | 0;
        },

        getSeconds: function () {
            return this.ticks / 1e7 % 60 | 0;
        },

        getTotalDays: function () {
            return this.ticks / 864e9;
        },

        getTotalHours: function () {
            return this.ticks / 36e9;
        },

        getTotalMilliseconds: function () {
            return this.ticks / 1e4;
        },

        getTotalMinutes: function () {
            return this.ticks / 6e8;
        },

        getTotalSeconds: function () {
            return this.ticks / 1e7;
        },

        get12HourHour: function () {
            return (this.getHours() > 12) ? this.getHours() - 12 : (this.getHours() === 0) ? 12 : this.getHours();
        },

        add: function (ts) {
            return new Bridge.TimeSpan(this.ticks + ts.ticks);
        },

        subtract: function (ts) {
            return new Bridge.TimeSpan(this.ticks - ts.ticks);
        },

        duration: function () {
            return new Bridge.TimeSpan(Math.abs(this.ticks));
        },

        negate: function () {
            return new Bridge.TimeSpan(-this.ticks);
        },

        compareTo: function (other) {
            return this.ticks < other.ticks ? -1 : (this.ticks > other.ticks ? 1 : 0);
        },

        equals: function (other) {
            return other.ticks === this.ticks;
        },

        equalsT: function (other) {
            return other.ticks === this.ticks;
        },

        format: function (formatStr, provider) {
            return this.toString(formatStr, provider);
        },

        toString: function (formatStr, provider) {
            var ticks = this.ticks,
                result = "",
                me = this,
                dtInfo = (provider || Bridge.CultureInfo.getCurrentCulture()).getFormat(Bridge.DateTimeFormatInfo),
                format = function (t, n) {
                    return Bridge.String.alignString((t | 0).toString(), n || 2, "0", 2);
                };

            if (formatStr) {
                return formatStr.replace(/dd?|HH?|hh?|mm?|ss?|tt?/g,
                    function (formatStr) {
                        switch (formatStr) {
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
                        }
                    }
                );
            }

            if (Math.abs(ticks) >= 864e9) {
                result += format(ticks / 864e9) + ".";
                ticks %= 864e9;
            }

            result += format(ticks / 36e9) + ":";
            ticks %= 36e9;
            result += format(ticks / 6e8 | 0) + ":";
            ticks %= 6e8;
            result += format(ticks / 1e7);
            ticks %= 1e7;

            if (ticks > 0) {
                result += "." + format(ticks, 7);
            }

            return result;
        }
    });

    Bridge.Class.addExtend(Bridge.TimeSpan, [Bridge.IComparable$1(Bridge.TimeSpan), Bridge.IEquatable$1(Bridge.TimeSpan)]);
