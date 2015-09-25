// @source Integer.js

/*(function() {
    var createIntType = function(name, min, max) {
        var type = Bridge.define(name, {
            inherits: [Bridge.IComparable, Bridge.IFormattable],
            statics: {
                min: min,
                max: max,

                instanceOf: function (instance) {
                    return typeof(instance) === 'number' && Math.round(instance, 0) == instance && instance >= min && instance <= max;
                },
                getDefaultValue: function () {
                    return 0;
                },
                parse: function(s) {
                    return Bridge.Int.parseInt(s, min, max);
                },
                tryParse: function(s, result) {
                    return Bridge.Int.tryParseInt(s, result, min, max);
                },
                format: function(number, format, provider) {
                    return Bridge.Int.format(number, format, provider);
                }
            }
        });

        Bridge.Class.addExtend(type, [Bridge.IComparable$1(type), Bridge.IEquatable$1(type)]);
    };

    createIntType('Bridge.Byte', 0, 255);
    createIntType('Bridge.SByte', -128, 127);
    createIntType('Bridge.Int16', -32768, 32767);
    createIntType('Bridge.UInt16', 0, 65535);
    createIntType('Bridge.Int32', -2147483648, 2147483647);
    createIntType('Bridge.UInt32', 0, 4294967295);
    createIntType('Bridge.Int64', -9223372036854775808, 9223372036854775807);
    createIntType('Bridge.UInt64', 0, 18446744073709551615);
    createIntType('Bridge.Char', 0, 65535);

    Bridge.Char.tryParse = function (s, result) {
        var b = s && s.length === 1;
        result.v = b ? s.charCodeAt(0) : 0;
        return b;
    };

    Bridge.Char.parse = function(s) {
        if (!Bridge.hasValue(s)) {
            throw new Bridge.ArgumentNullException('s');
        }

        if (s.length !== 1) {
            throw new Bridge.FormatException();
        }
        return s.charCodeAt(0);
    };
})();*/

Bridge.define('Bridge.Int', {
    inherits: [Bridge.IComparable, Bridge.IFormattable],
    statics: {
        instanceOf: function (instance) {
            return typeof(instance) === 'number' && isFinite(instance) && Math.round(instance, 0) == instance;
        },

        getDefaultValue: function () {
            return 0;
        },

        format: function (number, format, provider) {
            var nf = (provider || Bridge.CultureInfo.getCurrentCulture()).getFormat(Bridge.NumberFormatInfo),
                decimalSeparator = nf.numberDecimalSeparator,
                groupSeparator = nf.numberGroupSeparator,
                match,
                precision,
                groups,
                fs;

            if (!isFinite(number)) {
                return Number.NEGATIVE_INFINITY == number ? nf.negativeInfinitySymbol : nf.positiveInfinitySymbol;
            }

            if (!format) {
                return this.defaultFormat(number, 0, 0, 15, nf, true);
            }

            match = format.match(/^([a-zA-Z])(\d*)$/);

            if (match) {
                fs = match[1].toUpperCase();
                precision = parseInt(match[2], 10);
                precision = precision > 15 ? 15 : precision;

                switch (fs) {
                    case "D":
                        return this.defaultFormat(number, isNaN(precision) ? 1 : precision, 0, 0, nf, true);
                    case "F":
                    case "N":
                        if (isNaN(precision)) {
                            precision = nf.numberDecimalDigits;
                        }
                        return this.defaultFormat(number, 1, precision, precision, nf, fs == "F");
                    case "G":
                    case "E":
                        var exponent = 0,
                            coefficient = Math.abs(number),
                            exponentPrefix = match[1],
                            exponentPrecision = 3,
                            minDecimals,
                            maxDecimals;

                        while (coefficient >= 10) {
                            coefficient /= 10;
                            exponent++;
                        }

                        while (coefficient != 0 && coefficient < 1) {
                            coefficient *= 10;
                            exponent--;
                        }

                        if (fs == "G") {
                            if (exponent > -5 && (!precision || exponent < precision)) {
                                minDecimals = precision ? precision - (exponent > 0 ? exponent + 1 : 1) : 0;
                                maxDecimals = precision ? precision - (exponent > 0 ? exponent + 1 : 1) : 10;
                                return this.defaultFormat(number, 1, minDecimals, maxDecimals, nf, true);
                            }

                            exponentPrefix = exponentPrefix == "G" ? "E" : "e";
                            exponentPrecision = 2;
                            minDecimals = (precision || 1) - 1;
                            maxDecimals = (precision || 11) - 1;
                        } else {
                            minDecimals = maxDecimals = isNaN(precision) ? 6 : precision;
                        }

                        if (exponent >= 0) {
                            exponentPrefix += nf.positiveSign;
                        }
                        else {
                            exponentPrefix += nf.negativeSign;
                            exponent = -exponent;
                        }

                        if (number < 0) {
                            coefficient *= -1;
                        }

                        return this.defaultFormat(coefficient, 1, minDecimals, maxDecimals, nf) + exponentPrefix + this.defaultFormat(exponent, exponentPrecision, 0, 0, nf, true);
                    case "P":
                        if (isNaN(precision)) {
                            precision = nf.percentDecimalDigits;
                        }

                        return this.defaultFormat(number * 100, 1, precision, precision, nf, false, "percent");
                    case "X":
                        var result = Math.round(number).toString(16);

                        if (match[1] == "X") {
                            result = result.toUpperCase();
                        }

                        precision -= result.length;

                        while (precision-- > 0) {
                            result = "0" + result;
                        }

                        return result;
                    case "C":
                        if (isNaN(precision)) {
                            precision = nf.currencyDecimalDigits;
                        }

                        return this.defaultFormat(number, 1, precision, precision, nf, false, "currency");
                    case "R":
                        return "" + number;
                }
            }

            if (format.indexOf(",.") !== -1 || Bridge.String.endsWith(format, ",")) {
                var count = 0,
                    index = format.indexOf(",.");

                if (index == -1) {
                    index = format.length - 1;
                }

                while (index > -1 && format.charAt(index) == ",") {
                    count++;
                    index--;
                }

                number /= Math.pow(1000, count);
            }

            if (format.indexOf("%") !== -1) {
                number *= 100;
            }

            groups = format.split(";");

            if (number < 0 && groups.length > 1) {
                number *= -1;
                format = groups[1];
            } else {
                format = groups[!number && groups.length > 2 ? 2 : 0];
            }

            return this.customFormat(number, format, nf, !format.match(/^[^\.]*[0#],[0#]/));
        },

        defaultFormat: function (number, minIntLen, minDecLen, maxDecLen, provider, noGroup, name) {
            name = name || "number";

            var nf = (provider || Bridge.CultureInfo.getCurrentCulture()).getFormat(Bridge.NumberFormatInfo),
                str,
                decimalIndex,
                negPattern,
                roundingFactor,
                groupIndex,
                groupSize,
                groups = nf[name + "GroupSizes"],
                decimalPart,
                index,
                done,
                startIndex,
                length,
                part,
                sep,
                buffer = "";

            roundingFactor = Math.pow(10, maxDecLen);
            str = "" + (Math.round(Math.abs(number) * roundingFactor) / roundingFactor);

            decimalIndex = str.indexOf(".");

            if (decimalIndex > 0) {
                decimalPart = nf[name + "DecimalSeparator"] + str.substr(decimalIndex + 1);
                str = str.substr(0, decimalIndex);
            }

            if (str.length < minIntLen) {
                str = Array(minIntLen - str.length + 1).join("0") + str;
            }

            if (decimalPart) {
                if ((decimalPart.length - 1) < minDecLen) {
                    decimalPart += Array(minDecLen - decimalPart.length + 2).join("0");
                }

                if (maxDecLen == 0) {
                    decimalPart = null;
                }
                else if ((decimalPart.length - 1) > maxDecLen) {
                    decimalPart = decimalPart.substr(0, maxDecLen + 1);
                }
            }

            groupIndex = 0;
            groupSize = groups[groupIndex];

            if (str.length < groupSize) {
                buffer = str;

                if (decimalPart) {
                    buffer += decimalPart;
                }
            }
            else {
                index = str.length;
                done = false;
                sep = noGroup ? "" : nf[name + "GroupSeparator"];

                while (!done) {
                    length = groupSize;
                    startIndex = index - length;

                    if (startIndex < 0) {
                        groupSize += startIndex;
                        length += startIndex;
                        startIndex = 0;
                        done = true;
                    }

                    if (!length) {
                        break;
                    }

                    part = str.substr(startIndex, length);

                    if (buffer.length) {
                        buffer = part + sep + buffer;
                    }
                    else {
                        buffer = part;
                    }

                    index -= length;

                    if (groupIndex < groups.length - 1) {
                        groupIndex++;
                        groupSize = groups[groupIndex];
                    }
                }

                if (decimalPart) {
                    buffer += decimalPart;
                }
            }

            if (number < 0) {
                negPattern = Bridge.NumberFormatInfo[name + "NegativePatterns"][nf[name + "NegativePattern"]];

                return negPattern.replace("-", nf.negativeSign).replace("%", nf.percentSymbol).replace("$", nf.currencySymbol).replace("n", buffer);
            }
            else if (Bridge.NumberFormatInfo[name + "PositivePatterns"]) {
                negPattern = Bridge.NumberFormatInfo[name + "PositivePatterns"][nf[name + "PositivePattern"]];

                return negPattern.replace("%", nf.percentSymbol).replace("$", nf.currencySymbol).replace("n", buffer);
            }

            return buffer;
        },

        customFormat: function (number, format, nf, noGroup) {
            var digits = 0,
                forcedDigits = -1,
                integralDigits = -1,
                decimals = 0,
                forcedDecimals = -1,
                atDecimals = 0,
                unused = 1,
                c, i, f,
                endIndex,
                roundingFactor,
                decimalIndex,
                isNegative = false,
                name,
                groupCfg,
                buffer = "";

            name = "number";

            if (format.indexOf("%") !== -1) {
                name = "percent";
            }
            else if (format.indexOf("$") !== -1) {
                name = "currency";
            }

            for (i = 0; i < format.length; i++) {
                c = format.charAt(i);

                if (c == "'" || c == '"') {
                    i = format.indexOf(c, i + 1);

                    if (i < 0) {
                        break;
                    }
                } else if (c == "\\") {
                    i++;
                } else {
                    if (c == "0" || c == "#") {
                        decimals += atDecimals;

                        if (c == "0") {
                            if (atDecimals) {
                                forcedDecimals = decimals;
                            } else if (forcedDigits < 0) {
                                forcedDigits = digits;
                            }
                        }

                        digits += !atDecimals;
                    }

                    atDecimals = atDecimals || c == ".";
                }
            }
            forcedDigits = forcedDigits < 0 ? 1 : digits - forcedDigits;

            if (number < 0) {
                isNegative = true;
            }

            roundingFactor = Math.pow(10, decimals);
            number = "" + (Math.round(Math.abs(number) * roundingFactor) / roundingFactor);

            decimalIndex = number.indexOf(".");
            integralDigits = decimalIndex < 0 ? number.length : decimalIndex;
            i = integralDigits - digits;

            groupCfg = {
                groupIndex: Math.max(integralDigits, forcedDigits),
                sep: noGroup ? "" : nf[name + "GroupSeparator"]
            };

            var inString = 0;

            for (f = 0; f < format.length; f++) {
                c = format.charAt(f);

                if (c == "'" || c == '"') {
                    endIndex = format.indexOf(c, f + 1);

                    buffer += format.substring(f + 1, endIndex < 0 ? format.length : endIndex);

                    if (endIndex < 0) {
                        break;
                    }

                    f = endIndex;
                } else if (c == "\\") {
                    buffer += format.charAt(f + 1);
                    f++;
                } else if (c == "#" || c == "0") {
                    groupCfg.buffer = buffer;

                    if (i < integralDigits) {
                        if (i >= 0) {
                            if (unused) {
                                this.addGroup(number.substr(0, i), groupCfg);
                            }

                            this.addGroup(number.charAt(i), groupCfg);
                        } else if (i >= integralDigits - forcedDigits) {
                            this.addGroup("0", groupCfg);
                        }
                        unused = 0;
                    } else if (forcedDecimals-- > 0 || i < number.length) {
                        this.addGroup(i >= number.length ? "0" : number.charAt(i), groupCfg);
                    }

                    buffer = groupCfg.buffer;

                    i++;
                } else if (c == ".") {
                    if (number.length > ++i || forcedDecimals > 0) {
                        buffer += nf[name + "DecimalSeparator"];
                    }
                } else if (c !== ",") {
                    buffer += c;
                }
            }

            if (isNegative < 0) {
                buffer = "-" + buffer;
            }

            return buffer;
        },

        addGroup: function (value, cfg) {
            var buffer = cfg.buffer,
                sep = cfg.sep,
                groupIndex = cfg.groupIndex;

            for (var i = 0, length = value.length; i < length; i++) {
                buffer += value.charAt(i);

                if (sep && groupIndex > 1 && groupIndex-- % 3 == 1) {
                    buffer += sep;
                }
            }

            cfg.buffer = buffer;
            cfg.groupIndex = groupIndex;
        },

        parseFloat: function (str, provider) {
            if (str == null) {
                throw new Bridge.ArgumentNullException("str");
            }

            var nfInfo = (provider || Bridge.CultureInfo.getCurrentCulture()).getFormat(Bridge.NumberFormatInfo),
                result = parseFloat(str.replace(nfInfo.numberDecimalSeparator, '.'));

            if (isNaN(result) && str !== nfInfo.nanSymbol) {
                if (str == nfInfo.negativeInfinitySymbol) {
                    return Number.NEGATIVE_INFINITY;
                }

                if (str == nfInfo.positiveInfinitySymbol) {
                    return Number.POSITIVE_INFINITY;
                }

                throw new Bridge.FormatException("Input string was not in a correct format.");
            }

            return result;
        },

        tryParseFloat: function (str, provider, result) {
            result.v = 0;

            if (str == null) {
                return false;
            }

            var nfInfo = (provider || Bridge.CultureInfo.getCurrentCulture()).getFormat(Bridge.NumberFormatInfo);

            result.v = parseFloat(str.replace(nfInfo.numberDecimalSeparator, '.'));

            if (isNaN(result.v) && str !== nfInfo.nanSymbol) {
                if (str == nfInfo.negativeInfinitySymbol) {
                    result.v = Number.NEGATIVE_INFINITY;
                    return true;
                }

                if (str == nfInfo.positiveInfinitySymbol) {
                    result.v = Number.POSITIVE_INFINITY;
                    return true;
                }

                return false;
            }

            return true;
        },

        parseInt: function (str, min, max, radix) {
            if (str == null) {
                throw new Bridge.ArgumentNullException("str");
            }

            if (!/^[+-]?[0-9]+$/.test(str)) {
                throw new Bridge.FormatException("Input string was not in a correct format.");
            }

            var result = parseInt(str, radix || 10);

            if (isNaN(result)) {
                throw new Bridge.FormatException("Input string was not in a correct format.");
            }

            if (result < min || result > max) {
                throw new Bridge.OverflowException();
            }

            return result;
        },

        tryParseInt: function (str, result, min, max, radix) {
            result.v = 0;

            if (!/^[+-]?[0-9]+$/.test(str)) {
                return false;
            }

            result.v = parseInt(str, radix || 10);

            if (result.v < min || result.v > max) {
                return false;
            }

            return true;
        },

        trunc: function (num) {
            if (!Bridge.isNumber(num)) {
                return null;
            }

            return num > 0 ? Math.floor(num) : Math.ceil(num);
        },

        div: function (x, y) {
            if (!Bridge.isNumber(x) || !Bridge.isNumber(y)) {
                return null;
            }

            if (y === 0) {
                throw new Bridge.DivideByZeroException();
            }

            return this.trunc(x / y);
        },

        mod: function (x, y) {
            if (!Bridge.isNumber(x) || !Bridge.isNumber(y)) {
                return null;
            }

            if (y === 0) {
                throw new Bridge.DivideByZeroException();
            }
            return x % y;
        },

        check: function(x, type) {
            if (Bridge.isNumber(x) && !type.instanceOf(x)) {
                throw new Bridge.OverflowException();
            }

            return x;
        },

        sxb: function (x) {
            return x | (x & 0x80 ? 0xffffff00 : 0);
        },

        sxs: function (x) {
            return x | (x & 0x8000 ? 0xffff0000 : 0);
        },

        clip8: function (x) {
            return Bridge.isNumber(x) ? Bridge.Int.sxb(x & 0xff) : null;
        },

        clipu8: function (x) {
            return Bridge.isNumber(x) ? x & 0xff : null;
        },

        clip16: function (x) {
            return Bridge.isNumber(x) ? Bridge.Int.sxs(x & 0xffff) : null;
        },

        clipu16: function (x) {
            return Bridge.isNumber(x) ? x & 0xffff : null;
        },

        clip32: function (x) {
            return Bridge.isNumber(x) ? x | 0 : null;
        },

        clipu32: function (x) {
            return Bridge.isNumber(x) ? x >>> 0 : null;
        },

        clip64: function (x) {
            return Bridge.isNumber(x) ? (Math.floor(x / 0x100000000) | 0) * 0x100000000 + (x >>> 0) : null;
        },

        clipu64: function (x) {
            return Bridge.isNumber(x) ? (Math.floor(x / 0x100000000) >>> 0) * 0x100000000 + (x >>> 0) : null;
        }
    }
});

Bridge.Class.addExtend(Bridge.Int, [Bridge.IComparable$1(Bridge.Int), Bridge.IEquatable$1(Bridge.Int)]);
