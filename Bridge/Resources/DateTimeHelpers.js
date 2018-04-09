    Bridge.define("Bridge.DateTimeHelpers", {
        statics: {
            methods: {
                format: function (d, f, p) {
                    var me = this,
                        kind = d.kind || 0,
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

                    var removeDot = false;

                    f = f.replace(/(\\.|'[^']*'|"[^"]*"|d{1,4}|M{1,4}|yyyy|yy|y|HH?|hh?|mm?|ss?|tt?|u|f{1,7}|F{1,7}|K|z{1,3}|\:|\/)/g,
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

                                    var c = '0',
                                        i = part.length - 1;

                                    for (; i >= 0 && part.charAt(i) === c; i--);
                                    part = part.substring(0, i + 1);

                                    removeDot = part.length == 0;

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
                                case "K":
                                case "zz":
                                case "zzz":
                                    if (kind === 0) {
                                        part = "";
                                    } else if (kind === 1) {
                                        part = "Z";
                                    } else {
                                        part = timezoneOffset / 60;
                                        part = ((part > 0) ? "-" : "+") + System.String.alignString(Math.floor(Math.abs(part)).toString(), 2, "0", 2);

                                        if (match === "zzz" || match === "K") {
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

                    if (removeDot) {
                        if (System.String.endsWith(f, ".")) {
                            f = f.substring(0, f.length - 1);
                        } else if (System.String.endsWith(f, ".Z")) {
                            f = f.substring(0, f.length - 2) + "Z";
                        } else if (kind === 2 && f.match(/\.([+-])/g) !== null) {
                            f = f.replace(/\.([+-])/g, '$1');
                        }
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
                        throw new System.FormatException.$ctor1("String does not contain a valid string representation of a date and time.");
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
                            d = Bridge.DateTimeHelpers.parseExact(str, format[j], provider, utc, true);

                            if (d != null) {
                                return d;
                            }
                        }

                        if (silent) {
                            return null;
                        }

                        throw new System.FormatException.$ctor1("String does not contain a valid string representation of a date and time.");
                    } else {
                        // TODO: The code below assumes that there are no quotation marks around the UTC/Z format token (the format patterns
                        // used by Bridge appear to use quotation marks throughout (see universalSortableDateTimePattern), including
                        // in the recent Newtonsoft.Json.JsonConvert release).
                        // Until the above is sorted out, manually remove quotation marks to get UTC times parsed correctly.
                        format = format.replace("'Z'", "Z");
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
                        formats,
                        kind = 0,
                        adjust = false,
                        offset = 0;

                    if (str == null) {
                        throw new System.ArgumentNullException.$ctor1("str");
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
                            var nextChar = format.charAt(index + 1);
                            if (c === '.' && str.charAt(idx) !== c && (nextChar === 'F' || nextChar === 'f')) {
                                index++;
                                c = nextChar;
                            }

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
                            } else if (token.match(/f{1,7}/) !== null) {
                                ff = this.subparseInt(str, idx, token.length, 7);

                                if (ff == null) {
                                    invalid = true;

                                    break;
                                }

                                idx += ff.length;

                                if (ff.length > 3) {
                                    ff = ff.substring(0, 3);
                                }
                            } else if (token.match(/F{1,7}/) !== null) {
                                ff = this.subparseInt(str, idx, 0, 7);

                                if (ff !== null) {
                                    idx += ff.length;

                                    if (ff.length > 3) {
                                        ff = ff.substring(0, 3);
                                    }
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

                                offset = zzh * 60 * 60 * 1000;

                                if (neg) {
                                    offset = -offset;
                                }
                            } else if (token === "Z") {
                                var ch = str.substring(idx, idx + 1);
                                if (ch === "Z" || ch === "z") {
                                    kind = 1;
                                    idx += 1;
                                } else {
                                    invalid = true;
                                }

                                break;

                            } else if (token === "zzz" || token === "K") {
                                if (str.substring(idx, idx + 1) === "Z") {
                                    kind = 2;
                                    adjust = true;
                                    idx += 1;

                                    break;
                                }

                                name = str.substring(idx, idx + 6);

                                if (name === "") {
                                    kind = 0;

                                    break;
                                }

                                idx += name.length;

                                if (name.length !== 6 && name.length !== 5) {
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
                                zzh = this.subparseInt(name, zzi, 1, name.length === 6 ? 2 : 1);

                                if (zzh == null || zzh > 14) {
                                    invalid = true;

                                    break;
                                }

                                zzi += zzh.length;

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

                                offset = zzh * 60 * 60 * 1000 + zzm * 60 * 1000;

                                if (neg) {
                                    offset = -offset;
                                }

                                kind = 2;
                            } else {
                                tokenMatched = false;
                            }
                        }

                        if (inQuotes || !tokenMatched) {
                            name = str.substring(idx, idx + token.length);

                            if (!inQuotes && name === ":" && (token === df.timeSeparator || token === ":")) {

                            } else if ((!inQuotes && ((token === ":" && name !== df.timeSeparator) || (token === "/" && name !== df.dateSeparator))) || (name !== token && token !== "'" && token !== '"' && token !== "\\")) {
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

                        throw new System.FormatException.$ctor1("String does not contain a valid string representation of a date and time.");
                    }

                    if (tt) {
                        if (hh < 12 && tt === pm) {
                            hh = hh - 0 + 12;
                        } else if (hh > 11 && tt === am) {
                            hh -= 12;
                        }
                    }

                    var d = System.DateTime.create(year, month, date, hh, mm, ss, ff, kind);

                    if (kind === 2) {
                        if (adjust === true) {
                            d = new Date(d.getTime() - d.getTimezoneOffset() * 60 * 1000);
                            d.kind = kind;
                        } else if (offset !== 0) {
                            d = new Date(d.getTime() - d.getTimezoneOffset() * 60 * 1000);
                            d = System.DateTime.addMilliseconds(d, -offset);
                            d.kind = kind;
                        }
                    }

                    return d;
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
                        result.v = System.DateTime.getMinValue();

                        return false;
                    }

                    return true;
                },

                tryParseExact: function (v, f, p, r, utc) {
                    r.v = this.parseExact(v, f, p, utc, true);

                    if (r.v == null) {
                        r.v = System.DateTime.getMinValue();

                        return false;
                    }

                    return true;
                }
            }
        }
    });