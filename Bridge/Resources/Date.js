    Bridge.define("System.DayOfWeek", {
        $kind: "enum",
        $statics: {
            Sunday: 0,
            Monday: 1,
            Tuesday: 2,
            Wednesday: 3,
            Thursday: 4,
            Friday: 5,
            Saturday: 6
        }
    });

    Bridge.define("System.DateTime", {
        inherits: [System.IComparable, System.IFormattable],

        statics: {
            offset: 62135596800000,
            timezoneOffset: null,

            getTimezoneOffset: function () {
                var winter = System.DateTime.today();
                winter.setMonth(0);
                winter.setDate(1);

                System.DateTime.timezoneOffset = winter.getTimezoneOffset() * 60 * 1000;

                System.DateTime.getTimezoneOffset = function() {
                    return System.DateTime.timezoneOffset;
                };

                return System.DateTime.timezoneOffset;
            },

            getOffset: function () {
                System.DateTime.offset = System.DateTime.offset - System.DateTime.getTimezoneOffset();

                System.DateTime.getOffset = function () {
                    return System.DateTime.offset;
                };

                return System.DateTime.offset;
            },

            $is: function (instance) {
                return Bridge.isDate(instance);
            },

            createInstance: function () {
                return System.DateTime.getDefaultValue();
            },

            getDefaultValue: function () {
                return new Date(-System.DateTime.getOffset());
            },

            getMaxValue: function () {
                return new Date(253402289999000 + System.DateTime.getTimezoneOffset());
            },

            fromTicks: function (value) {
               if (System.Int64.is64Bit(value)) {
                   value = value.div(10000).toNumber();
               } else {
                   value = value / 10000;
               }

               return new Date(value - System.DateTime.getOffset());
            },

            getTicks: function(dt) {
               return System.Int64(dt.getTime()).add(System.DateTime.getOffset()).mul(10000);
            },

            utc: function(year, month, day, hours, minutes, seconds, ms) {
                var utd = Date.UTC(year, month - 1, day || 0, hours || 0, minutes || 0, seconds || 0, ms || 0);
                return System.Int64(utd).add(System.DateTime.getOffset()).mul(10000);
            },

            utcNow: function () {
                var d = new Date();

                return new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());
            },

            today: function () {
                var d = new Date();

                return new Date(d.getFullYear(), d.getMonth(), d.getDate());
            },

            timeOfDay: function (dt) {
                return new System.TimeSpan((dt - new Date(dt.getFullYear(), dt.getMonth(), dt.getDate())) * 10000);
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

            format: function (date, format, provider) {
                var me = this,
                    df = (provider || System.Globalization.CultureInfo.getCurrentCulture()).getFormat(System.Globalization.DateTimeFormatInfo),
                    year = date.getFullYear(),
                    month = date.getMonth(),
                    dayOfMonth = date.getDate(),
                    dayOfWeek = date.getDay(),
                    hour = date.getHours(),
                    minute = date.getMinutes(),
                    second = date.getSeconds(),
                    millisecond = date.getMilliseconds(),
                    timezoneOffset = date.getTimezoneOffset(),
                    formats;

                format = format || "G";

                if (format.length === 1) {
                    formats = df.getAllDateTimePatterns(format, true);
                    format = formats ? formats[0] : format;
                } else if (format.length === 2 && format.charAt(0) === "%") {
                    format = format.charAt(1);
                }

                var needRemoveDot = false;

                format = format.replace(/(\\.|'[^']*'|"[^"]*"|d{1,4}|M{1,4}|yyyy|yy|y|HH?|hh?|mm?|ss?|tt?|u|f{1,7}|F{1,7}|z{1,3}|\:|\/)/g,
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
                                if (me.isUseGenitiveForm(format, index, 4, "d")) {
                                    part = df.monthGenitiveNames[month];
                                } else {
                                    part = df.monthNames[month];
                                }

                                break;
                            case "MMM":
                                if (me.isUseGenitiveForm(format, index, 3, "d")) {
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
                                part = year;

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
                            
                            case "u":
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
                                part = timezoneOffset / 60;
                                part = ((part >= 0) ? "-" : "+") + System.String.alignString(Math.floor(Math.abs(part)).toString(), 2, "0", 2);

                                if (match === "zzz") {
                                    part += df.timeSeparator + System.String.alignString(Math.floor(Math.abs(timezoneOffset % 60)).toString(), 2, "0", 2);
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

                if (needRemoveDot && System.String.endsWith(format, ".")) {
                    format = format.substring(0, format.length - 1);
                }

                return format;
            },

            parse: function (value, provider, utc, silent) {
                var dt = this.parseExact(value, null, provider, utc, true);

                if (dt !== null) {
                    return dt;
                }

                dt = Date.parse(value);

                if (!isNaN(dt)) {
                    return new Date(dt);
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

                var df = (provider || System.Globalization.CultureInfo.getCurrentCulture()).getFormat(System.Globalization.DateTimeFormatInfo),
                    am = df.amDesignator,
                    pm = df.pmDesignator,
                    idx = 0,
                    index = 0,
                    i = 0,
                    c,
                    token,
                    year = 0,
                    month = 1,
                    date = 1,
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

                        if ((!inQuotes && ((token === ":" && name !== df.timeSeparator) ||
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

                if (hh < 12 && tt === pm) {
                    hh = hh - 0 + 12;
                } else if (hh > 11 && tt === am) {
                    hh -= 12;
                }

                if (zzh === 0 && zzm === 0 && !utc) {
                    return new Date(year, month - 1, date, hh, mm, ss, ff);
                }

                return new Date(Date.UTC(year, month - 1, date, hh - zzh, mm - zzm, ss, ff));
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

            tryParseExact: function (value, format, provider, result, utc) {
                result.v = this.parseExact(value, format, provider, utc, true);

                if (result.v == null) {
                    result.v = System.DateTime.getDefaultValue();

                    return false;
                }

                return true;
            },

            isDaylightSavingTime: function (dt) {
                var temp = System.DateTime.today();

                temp.setMonth(0);
                temp.setDate(1);

                return temp.getTimezoneOffset() !== dt.getTimezoneOffset();
            },

             toUTC: function (date) {
                var year = date.getUTCFullYear(),
                    dt = new Date(year,
                        date.getUTCMonth(),
                        date.getUTCDate(),
                        date.getUTCHours(),
                        date.getUTCMinutes(),
                        date.getUTCSeconds(),
                        date.getUTCMilliseconds()
                    );

                if (year < 100) {
                    dt.setFullYear(year);
                }

                return dt;
             },

            toLocal: function (date) {
                var year = date.getFullYear(),
                    dt = new Date(Date.UTC(year,
                        date.getMonth(),
                        date.getDate(),
                        date.getHours(),
                        date.getMinutes(),
                        date.getSeconds(),
                        date.getMilliseconds())
                    );

                if (year < 100) {
                    dt.setFullYear(year);
                }

                return dt;
            },

            dateAddSubTimespan: function (d, t, direction) {
                var result = new Date(d.getTime());

                result.setDate(result.getDate() + (direction * t.getDays()));
                result.setHours(result.getHours() + (direction * t.getHours()));
                result.setMinutes(result.getMinutes() + (direction * t.getMinutes()));
                result.setSeconds(result.getSeconds() + (direction * t.getSeconds()));
                result.setMilliseconds(result.getMilliseconds() + (direction * t.getMilliseconds()));

                return result;
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

    System.DateTime.$kind = "";
    Bridge.Class.addExtend(System.DateTime, [System.IComparable$1(System.DateTime), System.IEquatable$1(System.DateTime)]);
