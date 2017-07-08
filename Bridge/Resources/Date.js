    Bridge.define("System.DateTime", {
        inherits: function () { return [System.IComparable, System.IComparable$1(System.DateTime), System.IEquatable$1(System.DateTime), System.IFormattable]; },
        $kind: "struct",
        fields: {
            kind: 2
        },
        methods: {
            $clone: function (to) { return this; }
        },
        statics: {
            // Difference in Milliseconds from 1-Jan-0001 to 1-Jan-1970 at UTC
            minOffset: -62135596800000,

            // Difference in Milliseconds from 1-Jan-1970 to 9999-12-31T23:59:59.999
            maxOffset: 253402300799999,

            $is: function (instance) {
                return Bridge.isDate(instance);
            },

            // UTC Min Value
            getMinValue: function () {
                var d = new Date(System.DateTime.minOffset);

                d.kind = 1;

                return d;
            },

            // UTC Max Value
            getMaxValue: function () {
                var d = new Date(System.DateTime.maxOffset);

                d.kind = 1;

                return d;
            },

            getDefaultValue: function () {
                var d = System.DateTime.getMinValue();

                d = new Date(d.getTime() + (d.getTimezoneOffset() * 60 * 1000));

                d.kind = 2;

                return d;
            },

            create: function (year, month, day, hour, minute, second, millisecond, kind) {
                year = (year !== undefined) ? year : new Date().getFullYear();
                month = (month !== undefined) ? month : new Date().getMonth() + 1;
                day = (day !== undefined) ? day : 1;
                hour = (hour !== undefined) ? hour : 0;
                minute = (minute !== undefined) ? minute : 0;
                second = (second !== undefined) ? second : 0;
                millisecond = (millisecond !== undefined) ? millisecond : 0;
                kind = (kind !== undefined) ? kind : 2;

                var d;

                if (kind === 1) {
                    d = System.DateTime.getMinValue();
                    d.setFullYear(year);
                    d.setMonth(month - 1);
                    d.setDate(day);
                    d.setHours(hour);
                    d.setMinutes(minute);
                    d.setSeconds(second);
                    d.setMilliseconds(millisecond);
                    d = new Date(d.getTime() - (d.getTimezoneOffset() * 60 * 1000))
                } else {
                    d = new Date(year, month - 1, day, hour, minute, second, millisecond);
                    d.setFullYear(year);
                }

                d.kind = kind;

                return d;
            },

            create$1: function (date, kind) {
                kind = (kind !== undefined) ? kind : 2;

                var d;

                if (kind === 1) {
                    d = System.DateTime.create(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds(), 1);
                    d.setFullYear(date.getUTCFullYear);
                } else {
                    d = System.DateTime.create(date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds(), kind);
                    d.setFullYear(date.getFullYear);
                }
                

                return d;
            },

            create$2: function (ticks, kind) {
                kind = (kind !== undefined) ? kind : 2;

                ticks = System.Int64.is64Bit(ticks) ? ticks.div(10000).toNumber() : ticks / 10000;

                var d = new Date(ticks + System.DateTime.minOffset);

                d.kind = kind;

                return d;
            },

            // Get the number of ticks since 0001-01-01T00:00:00.0000000 UTC
            getTicks: function (d) {
                d.kind = (d.kind !== undefined) ? d.kind : 2;

                var offset = 0;

                if (d.kind !== 1) {
                    offset = d.getTimezoneOffset() * 60 * 1000;
                }

                return System.Int64(d.getTime()).add(-System.DateTime.minOffset - offset).mul(10000);
            },

            today: function () {
                var d = new Date();

                var d2 = new Date(d.getFullYear(), d.getMonth(), d.getDate());

                d2.kind = 2;

                return d2;
            },

            now: function () {
                var d = new Date();

                d.kind = 2;

                return d;
            },

            utcNow: function () {
                return System.DateTime.create$1(new Date(), 1);
            },

            timeOfDay: function (d) {
                var d1 = new Date(d.getFullYear(), d.getMonth(), d.getDate());
                d1.setFullYear(d.getFullYear);

                return new System.TimeSpan((d - d1) * 10000);
            },

            toUniversalTime: function (d) {
                var d1 = new Date(d.getTime());

                d1.kind = 1;

                return d1;
            },

            toLocalTime: function (d) {
                var d1 = new Date(d.getTime());

                d1.kind = 2;

                return d1;
            },

            getKind: function (d) {
                var kind = (d.kind !== undefined) ? d.kind : 2;

                return kind;
            },

            specifyKind: function (d, kind) {
                return System.DateTime.create$2(d.getTime() * 10000, kind);
            },

            isUseGenitiveForm: function (format, index, tokenLen, patternToMatch) {
                var i,
                    repeat = 0;

                for (i = index - 1; i >= 0 && format[i] !== patternToMatch; i--) { }

                if (i >= 0) {
                    while (--i >= 0 && format[i] === patternToMatch) {
                        repeat++;
                    }

                    if (repeat <= 1) {
                        return true;
                    }
                }

                for (i = index + tokenLen; i < format.length && format[i] !== patternToMatch; i++) { }

                if (i < format.length) {
                    repeat = 0;

                    while (++i < format.length && format[i] === patternToMatch) {
                        repeat++;
                    }

                    if (repeat <= 1) {
                        return true;
                    }
                }

                return false;
            },

            format: function (d, f, p) {
                var me = this,
                    kind = d.kind || 2,
                    isUtc = (kind === 1),
                    df = (p || System.Globalization.CultureInfo.getCurrentCulture()).getFormat(System.Globalization.DateTimeFormatInfo),
                    year = isUtc ? d.getUTCFullYear() : d.getFullYear(),
                    month = isUtc ? d.getUTCMonth() : d.getMonth(),
                    dayOfMonth = isUtc ? d.getUTCDate() : d.getDate(),
                    dayOfWeek = isUtc ? d.getUTCDay() : d.getDay(),
                    hour = isUtc ? d.getUTCHours() : d.getHours(),
                    minute = isUtc ? d.getUTCMinutes() : d.getMinutes(),
                    second = isUtc ? d.getUTCSeconds() : d.getSeconds(),
                    millisecond = isUtc ? d.getUTCMilliseconds() : d.getMilliseconds(),
                    timezoneOffset = d.getTimezoneOffset(),
                    formats;

                f = f || "G";

                if (f.length === 1) {
                    formats = df.getAllDateTimePatterns(f, true);
                    f = formats ? formats[0] : f;
                } else if (f.length === 2 && f.charAt(0) === "%") {
                    f = f.charAt(1);
                }

                var needRemoveDot = false;

                f = f.replace(/(\\.|'[^']*'|"[^"]*"|d{1,4}|M{1,4}|yyyy|yy|y|HH?|hh?|mm?|ss?|tt?|u|f{1,7}|F{1,7}|z{1,3}|\:|\/)/g,
                    function (match, group, index) {
                        var part = match;

                        switch (match) {
                            case "dddd":
                                part = df.dayNames[dayOfWeek];

                                break;
                            case "ddd":
                                part = df.abbreviatedDayNames[dayOfWeek];

                                break;
                            case "dd":
                                part = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;

                                break;
                            case "d":
                                part = dayOfMonth;

                                break;
                            case "MMMM":
                                if (me.isUseGenitiveForm(f, index, 4, "d")) {
                                    part = df.monthGenitiveNames[month];
                                } else {
                                    part = df.monthNames[month];
                                }

                                break;
                            case "MMM":
                                if (me.isUseGenitiveForm(f, index, 3, "d")) {
                                    part = df.abbreviatedMonthGenitiveNames[month];
                                } else {
                                    part = df.abbreviatedMonthNames[month];
                                }

                                break;
                            case "MM":
                                part = (month + 1) < 10 ? "0" + (month + 1) : (month + 1);

                                break;
                            case "M":
                                part = month + 1;

                                break;
                            case "yyyy":
                                part = ("0000" + year).substring(year.toString().length);

                                break;
                            case "yy":
                                part = (year % 100).toString();

                                if (part.length === 1) {
                                    part = "0" + part;
                                }

                                break;
                            case "y":
                                part = year % 100;

                                break;
                            case "h":
                            case "hh":
                                part = hour % 12;

                                if (!part) {
                                    part = "12";
                                } else if (match === "hh" && part.length === 1) {
                                    part = "0" + part;
                                }

                                break;
                            case "HH":
                                part = hour.toString();

                                if (part.length === 1) {
                                    part = "0" + part;
                                }

                                break;
                            case "H":
                                part = hour;
                                break;
                            case "mm":
                                part = minute.toString();

                                if (part.length === 1) {
                                    part = "0" + part;
                                }

                                break;
                            case "m":
                                part = minute;

                                break;
                            case "ss":
                                part = second.toString();

                                if (part.length === 1) {
                                    part = "0" + part;
                                }

                                break;
                            case "s":
                                part = second;
                                break;
                            case "t":
                            case "tt":
                                part = (hour < 12) ? df.amDesignator : df.pmDesignator;

                                if (match === "t") {
                                    part = part.charAt(0);
                                }

                                break;
                             case "F":
                             case "FF":
                             case "FFF":
                             case "FFFF":
                             case "FFFFF":
                             case "FFFFFF":
                             case "FFFFFFF":
                                 part = millisecond.toString();
                                 if (part.length < 3) {
                                     part = Array(4 - part.length).join("0") + part;
                                 }

                                 part = part.substr(0, match.length);

                                 var c = '0';
                                 var i = part.length - 1;
                                 for (; i >= 0 && part.charAt(i) === c; i--);
                                 part = part.substring(0, i + 1);
                                 needRemoveDot = part.length == 0;

                                 break;
                            case "f":
                            case "ff":
                            case "fff":
                            case "ffff":
                            case "fffff":
                            case "ffffff":
                            case "fffffff":
                                part = millisecond.toString();

                                if (part.length < 3) {
                                     part = Array(4 - part.length).join("0") + part;
                                }

                                var ln = match === "u" ? 7 : match.length;
                                if (part.length < ln) {
                                    part = part + Array(8 - part.length).join("0");
                                }

                                part = part.substr(0, ln);

                                break;
                            case "z":
                                part = timezoneOffset / 60;
                                part = ((part >= 0) ? "-" : "+") + Math.floor(Math.abs(part));

                                break;
                            case "zz":
                            case "zzz":
                                if (kind === 0) {
                                    part = "";
                                } else if (kind === 1) {
                                    part = "Z";
                                } else {
                                    part = timezoneOffset / 60;
                                    part = ((part >= 0) ? "-" : "+") + System.String.alignString(Math.floor(Math.abs(part)).toString(), 2, "0", 2);

                                    if (match === "zzz") {
                                        part += df.timeSeparator + System.String.alignString(Math.floor(Math.abs(timezoneOffset % 60)).toString(), 2, "0", 2);
                                    }
                                }

                                break;
                            case ":":
                                part = df.timeSeparator;

                                break;
                            case "/":
                                part = df.dateSeparator;

                                break;
                            default:
                                part = match.substr(1, match.length - 1 - (match.charAt(0) !== "\\"));

                                break;
                        }

                        return part;
                    });

                if (needRemoveDot && System.String.endsWith(f, ".")) {
                    f = f.substring(0, f.length - 1);
                }

                return f;
            },

            parse: function (value, provider, utc, silent) {
                var d = this.parseExact(value, null, provider, utc, true);

                if (d !== null) {
                    return d;
                }

                d = Date.parse(value);

                if (!isNaN(d)) {
                    return new Date(d);
                } else if (!silent) {
                    throw new System.FormatException("String does not contain a valid string representation of a date and time.");
                }
            },

            parseExact: function (str, format, provider, utc, silent) {
                if (!format) {
                    format = ["G", "g", "F", "f", "D", "d", "R", "r", "s", "S", "U", "u", "O", "o", "Y", "y", "M", "m", "T", "t"];
                }

                if (Bridge.isArray(format)) {
                    var j = 0,
                        d;

                    for (j; j < format.length; j++) {
                        d = System.DateTime.parseExact(str, format[j], provider, utc, true);

                        if (d != null) {
                            return d;
                        }
                    }

                    if (silent) {
                        return null;
                    }

                    throw new System.FormatException("String does not contain a valid string representation of a date and time.");
                }

                var now = new Date(),
                    df = (provider || System.Globalization.CultureInfo.getCurrentCulture()).getFormat(System.Globalization.DateTimeFormatInfo),
                    am = df.amDesignator,
                    pm = df.pmDesignator,
                    idx = 0,
                    index = 0,
                    i = 0,
                    c,
                    token,
                    year = now.getFullYear(),
                    month = now.getMonth() + 1,
                    date = now.getDate(),
                    hh = 0,
                    mm = 0,
                    ss = 0,
                    ff = 0,
                    tt = "",
                    zzh = 0,
                    zzm = 0,
                    zzi,
                    sign,
                    neg,
                    names,
                    name,
                    invalid = false,
                    inQuotes = false,
                    tokenMatched,
                    formats;

                if (str == null) {
                    throw new System.ArgumentNullException("str");
                }

                format = format || "G";

                if (format.length === 1) {
                    formats = df.getAllDateTimePatterns(format, true);
                    format = formats ? formats[0] : format;
                } else if (format.length === 2 && format.charAt(0) === "%") {
                    format = format.charAt(1);
                }

                while (index < format.length) {
                    c = format.charAt(index);
                    token = "";

                    if (inQuotes === "\\") {
                        token += c;
                        index++;
                    } else {
                        while ((format.charAt(index) === c) && (index < format.length)) {
                            token += c;
                            index++;
                        }
                    }

                    tokenMatched = true;

                    if (!inQuotes) {
                        if (token === "yyyy" || token === "yy" || token === "y") {
                            if (token === "yyyy") {
                                year = this.subparseInt(str, idx, 4, 4);
                            } else if (token === "yy") {
                                year = this.subparseInt(str, idx, 2, 2);
                            } else if (token === "y") {
                                year = this.subparseInt(str, idx, 2, 4);
                            }

                            if (year == null) {
                                invalid = true;
                                break;
                            }

                            idx += year.length;

                            if (year.length === 2) {
                                year = ~~year;
                                year = (year > 30 ? 1900 : 2000) + year;
                            }
                        } else if (token === "MMM" || token === "MMMM") {
                            month = 0;

                            if (token === "MMM") {
                                if (this.isUseGenitiveForm(format, index, 3, "d")) {
                                    names = df.abbreviatedMonthGenitiveNames;
                                } else {
                                    names = df.abbreviatedMonthNames;
                                }
                            } else {
                                if (this.isUseGenitiveForm(format, index, 4, "d")) {
                                    names = df.monthGenitiveNames;
                                } else {
                                    names = df.monthNames;
                                }
                            }

                            for (i = 0; i < names.length; i++) {
                                name = names[i];

                                if (str.substring(idx, idx + name.length).toLowerCase() === name.toLowerCase()) {
                                    month = (i % 12) + 1;
                                    idx += name.length;

                                    break;
                                }
                            }

                            if ((month < 1) || (month > 12)) {
                                invalid = true;

                                break;
                            }
                        } else if (token === "MM" || token === "M") {
                            month = this.subparseInt(str, idx, token.length, 2);

                            if (month == null || month < 1 || month > 12) {
                                invalid = true;

                                break;
                            }

                            idx += month.length;
                        } else if (token === "dddd" || token === "ddd") {
                            names = token === "ddd" ? df.abbreviatedDayNames : df.dayNames;

                            for (i = 0; i < names.length; i++) {
                                name = names[i];

                                if (str.substring(idx, idx + name.length).toLowerCase() === name.toLowerCase()) {
                                    idx += name.length;

                                    break;
                                }
                            }
                        } else if (token === "dd" || token === "d") {
                            date = this.subparseInt(str, idx, token.length, 2);

                            if (date == null || date < 1 || date > 31) {
                                invalid = true;

                                break;
                            }

                            idx += date.length;
                        } else if (token === "hh" || token === "h") {
                            hh = this.subparseInt(str, idx, token.length, 2);

                            if (hh == null || hh < 1 || hh > 12) {
                                invalid = true;

                                break;
                            }

                            idx += hh.length;
                        } else if (token === "HH" || token === "H") {
                            hh = this.subparseInt(str, idx, token.length, 2);

                            if (hh == null || hh < 0 || hh > 23) {
                                invalid = true;

                                break;
                            }

                            idx += hh.length;
                        } else if (token === "mm" || token === "m") {
                            mm = this.subparseInt(str, idx, token.length, 2);

                            if (mm == null || mm < 0 || mm > 59) {
                                return null;
                            }

                            idx += mm.length;
                        } else if (token === "ss" || token === "s") {
                            ss = this.subparseInt(str, idx, token.length, 2);

                            if (ss == null || ss < 0 || ss > 59) {
                                invalid = true;

                                break;
                            }

                            idx += ss.length;
                        } else if (token === "u") {
                            ff = this.subparseInt(str, idx, 1, 7);

                            if (ff == null) {
                                invalid = true;

                                break;
                            }

                            idx += ff.length;

                            if (ff.length > 3) {
                                ff = ff.substring(0, 3);
                            }
                        } else if (token === "fffffff" || token === "ffffff" || token === "fffff" || token === "ffff" || token === "fff" || token === "ff" || token === "f") {
                            ff = this.subparseInt(str, idx, token.length, 7);

                            if (ff == null) {
                                invalid = true;

                                break;
                            }

                            idx += ff.length;

                            if (ff.length > 3) {
                                ff = ff.substring(0, 3);
                            }
                        } else if (token === "t") {
                            if (str.substring(idx, idx + 1).toLowerCase() === am.charAt(0).toLowerCase()) {
                                tt = am;
                            } else if (str.substring(idx, idx + 1).toLowerCase() === pm.charAt(0).toLowerCase()) {
                                tt = pm;
                            } else {
                                invalid = true;

                                break;
                            }

                            idx += 1;
                        } else if (token === "tt") {
                            if (str.substring(idx, idx + 2).toLowerCase() === am.toLowerCase()) {
                                tt = am;
                            } else if (str.substring(idx, idx + 2).toLowerCase() === pm.toLowerCase()) {
                                tt = pm;
                            } else {
                                invalid = true;

                                break;
                            }

                            idx += 2;
                        } else if (token === "z" || token === "zz") {
                            sign = str.charAt(idx);

                            if (sign === "-") {
                                neg = true;
                            } else if (sign === "+") {
                                neg = false;
                            } else {
                                invalid = true;

                                break;
                            }

                            idx++;

                            zzh = this.subparseInt(str, idx, 1, 2);

                            if (zzh == null || zzh > 14) {
                                invalid = true;

                                break;
                            }

                            idx += zzh.length;

                            if (neg) {
                                zzh = -zzh;
                            }
                        } else if (token === "zzz") {
                            name = str.substring(idx, idx + 6);
                            idx += 6;

                            if (name.length !== 6) {
                                invalid = true;

                                break;
                            }

                            sign = name.charAt(0);

                            if (sign === "-") {
                                neg = true;
                            } else if (sign === "+") {
                                neg = false;
                            } else {
                                invalid = true;

                                break;
                            }

                            zzi = 1;
                            zzh = this.subparseInt(name, zzi, 1, 2);

                            if (zzh == null || zzh > 14) {
                                invalid = true;

                                break;
                            }

                            zzi += zzh.length;

                            if (neg) {
                                zzh = -zzh;
                            }

                            if (name.charAt(zzi) !== df.timeSeparator) {
                                invalid = true;

                                break;
                            }

                            zzi++;

                            zzm = this.subparseInt(name, zzi, 1, 2);

                            if (zzm == null || zzh > 59) {
                                invalid = true;

                                break;
                            }
                        } else {
                            tokenMatched = false;
                        }
                    }

                    if (inQuotes || !tokenMatched) {
                        name = str.substring(idx, idx + token.length);

                        if (!inQuotes && name === ":" && (token === df.timeSeparator || token === ":")) {

                        } else if ((!inQuotes && ((token === ":" && name !== df.timeSeparator) ||
                            (token === "/" && name !== df.dateSeparator))) ||
                            (name !== token && token !== "'" && token !== '"' && token !== "\\")) {
                            invalid = true;

                            break;
                        }

                        if (inQuotes === "\\") {
                            inQuotes = false;
                        }

                        if (token !== "'" && token !== '"' && token !== "\\") {
                            idx += token.length;
                        } else {
                            if (inQuotes === false) {
                                inQuotes = token;
                            } else {
                                if (inQuotes !== token) {
                                    invalid = true;
                                    break;
                                }

                                inQuotes = false;
                            }
                        }
                    }
                }

                if (inQuotes) {
                    invalid = true;
                }

                if (!invalid) {
                    if (idx !== str.length) {
                        invalid = true;
                    } else if (month === 2) {
                        if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
                            if (date > 29) {
                                invalid = true;
                            }
                        } else if (date > 28) {
                            invalid = true;
                        }
                    } else if ((month === 4) || (month === 6) || (month === 9) || (month === 11)) {
                        if (date > 30) {
                            invalid = true;
                        }
                    }
                }

                if (invalid) {
                    if (silent) {
                        return null;
                    }

                    throw new System.FormatException("String does not contain a valid string representation of a date and time.");
                }

                if (tt) {
                    if (hh < 12 && tt === pm) {
                        hh = hh - 0 + 12;
                    } else if (hh > 11 && tt === am) {
                        hh -= 12;
                    }
                }

                if (zzh === 0 && zzm === 0 && !utc) {
                    return System.DateTime.create(year, month, date, hh, mm, ss, ff, 2);
                }

                return System.DateTime.create(year, month, date, hh - zzh, mm - zzm, ss, ff, 1);
            },

            subparseInt: function (str, index, min, max) {
                var x,
                    token;

                for (x = max; x >= min; x--) {
                    token = str.substring(index, index + x);

                    if (token.length < min) {
                        return null;
                    }

                    if (/^\d+$/.test(token)) {
                        return token;
                    }
                }

                return null;
            },

            tryParse: function (value, provider, result, utc) {
                result.v = this.parse(value, provider, utc, true);

                if (result.v == null) {
                    result.v = System.DateTime.getDefaultValue();

                    return false;
                }

                return true;
            },

            tryParseExact: function (v, f, p, r, utc) {
                r.v = this.parseExact(v, f, p, utc, true);

                if (r.v == null) {
                    r.v = System.DateTime.getDefaultValue();

                    return false;
                }

                return true;
            },

            isDaylightSavingTime: function (d) {
                var temp = System.DateTime.today();

                temp.setMonth(0);
                temp.setDate(1);

                return temp.getTimezoneOffset() !== d.getTimezoneOffset();
            },

            dateAddSubTimespan: function (d, t, direction) {
                var r = new Date(d.getTime());

                r.setDate(r.getDate() + (direction * t.getDays()));
                r.setHours(r.getHours() + (direction * t.getHours()));
                r.setMinutes(r.getMinutes() + (direction * t.getMinutes()));
                r.setSeconds(r.getSeconds() + (direction * t.getSeconds()));
                r.setMilliseconds(r.getMilliseconds() + (direction * t.getMilliseconds()));

                return r;
            },

            subdt: function (d, t) {
                return Bridge.hasValue$1(d, t) ? this.dateAddSubTimespan(d, t, -1) : null;
            },

            adddt: function (d, t) {
                return Bridge.hasValue$1(d, t) ? this.dateAddSubTimespan(d, t, 1) : null;
            },

            subdd: function (a, b) {
                return Bridge.hasValue$1(a, b) ? (new System.TimeSpan((a - b) * 10000)) : null;
            },

            addYears: function (d, v) {
                d = (d !== undefined) ? d : System.DateTime.getDefaultValue();
                v = (v !== undefined) ? v : 0;

                d.kind = (d.kind !== undefined) ? d.kind : 2;

                var d1 = new Date(d.getTime());

                d1.setFullYear(d.getFullYear() + v);
                
                d1.kind = d.kind;

                return d1;
            },

            addMonths: function (d, v) {
                d = (d !== undefined) ? d : System.DateTime.getDefaultValue();
                v = (v !== undefined) ? v : 0;

                d.kind = (d.kind !== undefined) ? d.kind : 2;

                var d1 = new Date(d.getTime());

                d1.setMonth(d.getMonth() + v);

                d1.kind = d.kind;

                return d1;
            },

            addDays: function (d, v) {
                d = (d !== undefined) ? d : System.DateTime.getDefaultValue();
                v = (v !== undefined) ? v : 0;

                d.kind = (d.kind !== undefined) ? d.kind : 2;

                var d1 = new Date(d.getTime() + Math.round(v * 864e5));

                d1.kind = d.kind;

                return d1;
            },

            addHours: function (d, v) {
                d = (d !== undefined) ? d : System.DateTime.getDefaultValue();
                v = (v !== undefined) ? v : 0;

                d.kind = (d.kind !== undefined) ? d.kind : 2;

                var d1 = new Date(d.getTime() + Math.round(v * 36e5));

                d1.kind = d.kind;

                return d1;
            },

            addMinutes: function (d, v) {
                d = (d !== undefined) ? d : System.DateTime.getDefaultValue();
                v = (v !== undefined) ? v : 0;

                d.kind = (d.kind !== undefined) ? d.kind : 2;

                var d1 = new Date(d.getTime() + Math.round(v * 6e4));

                d1.kind = d.kind;

                return d1;
            },

            addSeconds: function (d, v) {
                d = (d !== undefined) ? d : System.DateTime.getDefaultValue();
                v = (v !== undefined) ? v : 0;

                d.kind = (d.kind !== undefined) ? d.kind : 2;

                var d1 = new Date(d.getTime() + Math.round(v * 1e3));
                
                d1.kind = d.kind;

                return d1;
            },

            addMilliseconds: function (d, v) {
                d = (d !== undefined) ? d : System.DateTime.getDefaultValue();
                v = (v !== undefined) ? v : 0;

                d.kind = (d.kind !== undefined) ? d.kind : 2;

                var d1 = new Date(d.getTime() + Math.round(v));

                d1.kind = d.kind;

                return d1;
            },

            addTicks: function (d, v) {
                d = (d !== undefined) ? d : System.DateTime.getDefaultValue();
                v = (v !== undefined) ? v : 0;

                return System.DateTime.addMilliseonds(d, v / 10000);
            },

            add: function (d, value) {
                d.kind = (d.kind !== undefined) ? d.kind : 2;

                var d1 = new Date(d.getTime() + value.ticks.div(10000).toNumber());

                d1.kind = d.kind;

                return d1;
            },

            subtract: function (d, value) {
                d.kind = (d.kind !== undefined) ? d.kind : 2;

                var d1 = new Date(d.getTime() - value.ticks.div(10000).toNumber());

                d1.kind = d.kind;

                return d1;
            },

            getIsLeapYear: function (year) {
                return new Date(year, 2, - 1).getDate() === 28;
            },

            getDaysInMonth: function (year, month) {
                return new Date(year, month, - 1).getDate() + 1;
            },

            getDayOfYear: function (d) {
                var ny = new Date(d.getTime());

                ny.setMonth(0);
                ny.setDate(1);
                ny.setHours(0);
                ny.setMinutes(0);
                ny.setMilliseconds(0);

                return Math.ceil((d - ny) / 864e5);
            },

            getDate: function (d) {
                d.kind = (d.kind !== undefined) ? d.kind : 2;

                d.setHours(0);
                d.setMinutes(0);
                d.setSeconds(0);
                d.setMilliseconds(0);

                return d;
            },

            getDayOfWeek: function (d) {
                d.kind = (d.kind !== undefined) ? d.kind : 2;

                return (d.kind === 1) ? d.getUTCDay() : d.getDay();
            },

            getYear: function (d) {
                d.kind = (d.kind !== undefined) ? d.kind : 2;

                return (d.kind === 1) ? d.getUTCFullYear() : d.getFullYear();
            },

            getMonth: function (d) {
                d.kind = (d.kind !== undefined) ? d.kind : 2;

                return ((d.kind === 1) ? d.getUTCMonth() : d.getMonth()) + 1;
            },

            getDay: function (d) {
                d.kind = (d.kind !== undefined) ? d.kind : 2;

                return (d.kind === 1) ? d.getUTCDate() : d.getDate();
            },

            getHour: function (d) {
                d.kind = (d.kind !== undefined) ? d.kind : 2;

                return (d.kind === 1) ? d.getUTCHours() : d.getHours();
            },

            getMinute: function (d) {
                d.kind = (d.kind !== undefined) ? d.kind : 2;

                return (d.kind === 1) ? d.getUTCMinutes() : d.getMinutes();
            },

            getSecond: function (d) {
                d.kind = (d.kind !== undefined) ? d.kind : 2;

                return (d.kind === 1) ? d.getUTCSeconds() : d.getSeconds();
            },

            getMillisecond: function (d) {
                d.kind = (d.kind !== undefined) ? d.kind : 2;

                return (d.kind === 1) ? d.getUTCMilliseconds() : d.getMilliseconds();
            },

            gt: function (a, b) {
                return Bridge.hasValue$1(a, b) ? (a > b) : false;
            },

            gte: function (a, b) {
                return Bridge.hasValue$1(a, b) ? (a >= b) : false;
            },

            lt: function (a, b) {
                return Bridge.hasValue$1(a, b) ? (a < b) : false;
            },

            lte: function (a, b) {
                return Bridge.hasValue$1(a, b) ? (a <= b) : false;
            }
        }
    });