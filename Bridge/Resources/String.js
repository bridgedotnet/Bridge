    var string = {
        is: function (obj, type) {
            if (!Bridge.isString(obj)) {
                return false;
            }

            if ((obj.constructor === type) || (obj instanceof type)) {
                return true;
            }

            if (type === System.ICloneable ||
                type === System.Collections.IEnumerable ||
                type === System.Collections.Generic.IEnumerable$1(System.Char) ||
                type === System.IComparable$1(String) ||
                type === System.IEquatable$1(String)) {
                return true;
            }

            return false;
        },

        lastIndexOf: function (s, search, startIndex, count) {
            var index = s.lastIndexOf(search, startIndex);

            return (index < (startIndex - count + 1)) ? -1 : index;
        },

        lastIndexOfAny: function (s, chars, startIndex, count) {
            var length = s.length;

            if (!length) {
                return -1;
            }

            chars = String.fromCharCode.apply(null, chars);
            startIndex = startIndex || length - 1;
            count = count || length;

            var endIndex = startIndex - count + 1;

            if (endIndex < 0) {
                endIndex = 0;
            }

            for (var i = startIndex; i >= endIndex; i--) {
                if (chars.indexOf(s.charAt(i)) >= 0) {
                    return i;
                }
            }

            return -1;
        },

        isNullOrWhiteSpace: function (s) {
            if (!s) {
                return true;
            }

            return System.Char.isWhiteSpace(s);
        },

        isNullOrEmpty: function (s) {
            return !s;
        },

        fromCharCount: function (c, count) {
            if (count >= 0) {
                return String(Array(count + 1).join(String.fromCharCode(c)));
            } else {
                throw new System.ArgumentOutOfRangeException("count", "cannot be less than zero");
            }
        },

        format: function (format) {
            return System.String._format(System.Globalization.CultureInfo.getCurrentCulture(), format, Array.prototype.slice.call(arguments, 1));
        },

        formatProvider: function (provider, format) {
            return System.String._format(provider, format, Array.prototype.slice.call(arguments, 2));
        },

        _format: function (provider, format, values) {
            var me = this,
                _formatRe = /(\{+)((\d+|[a-zA-Z_$]\w+(?:\.[a-zA-Z_$]\w+|\[\d+\])*)(?:\,(-?\d*))?(?:\:([^\}]*))?)(\}+)|(\{+)|(\}+)/g,
                args = values,
                fn = this.decodeBraceSequence;

            return format.replace(_formatRe, function (m, openBrace, elementContent, index, align, format, closeBrace, repeatOpenBrace, repeatCloseBrace) {
                if (repeatOpenBrace) {
                    return fn(repeatOpenBrace);
                }

                if (repeatCloseBrace) {
                    return fn(repeatCloseBrace);
                }

                if (openBrace.length % 2 === 0 || closeBrace.length % 2 === 0) {
                    return fn(openBrace) + elementContent + fn(closeBrace);
                }

                return fn(openBrace, true) + me.handleElement(provider, index, align, format, args) + fn(closeBrace, true);
            });
        },

        handleElement: function (provider, index, alignment, formatStr, args) {
            var value;

            index = parseInt(index, 10);

            if (index > args.length - 1) {
                throw new System.FormatException("Input string was not in a correct format.");
            }

            value = args[index];

            if (value == null) {
                value = "";
            }

            if (formatStr && Bridge.is(value, System.IFormattable)) {
                value = Bridge.format(value, formatStr, provider);
            } else {
                value = "" + value;
            }

            if (alignment) {
                alignment = parseInt(alignment, 10);

                if (!Bridge.isNumber(alignment)) {
                    alignment = null;
                }
            }

            return System.String.alignString(value.toString(), alignment);
        },

        decodeBraceSequence: function (braces, remove) {
            return braces.substr(0, (braces.length + (remove ? 0 : 1)) / 2);
        },

        alignString: function (str, alignment, pad, dir) {
            if (!alignment) {
                return str;
            }

            if (!pad) {
                pad = " ";
            }

            if (Bridge.isNumber(pad)) {
                pad = String.fromCharCode(pad);
            }

            if (!dir) {
                dir = alignment < 0 ? 1 : 2;
            }

            alignment = Math.abs(alignment);

            if (alignment + 1 >= str.length) {
                switch (dir) {
                    case 2:
                        str = Array(alignment + 1 - str.length).join(pad) + str;
                        break;

                    case 3:
                        var padlen = alignment - str.length,
                            right = Math.ceil(padlen / 2),
                            left = padlen - right;

                        str = Array(left + 1).join(pad) + str + Array(right + 1).join(pad);
                        break;

                    case 1:
                    default:
                        str = str + Array(alignment + 1 - str.length).join(pad);
                        break;
                }
            }

            return str;
        },

        startsWith: function (str, prefix) {
            if (!prefix.length) {
                return true;
            }

            if (prefix.length > str.length) {
                return false;
            }

            prefix = System.String.escape(prefix);

            return str.match("^" + prefix) !== null;
        },

        endsWith: function (str, suffix) {
            if (!suffix.length) {
                return true;
            }

            if (suffix.length > str.length) {
                return false;
            }

            suffix = System.String.escape(suffix);

            return str.match(suffix + "$") !== null;
        },

        contains: function (str, value) {
            if (value == null) {
                throw new System.ArgumentNullException();
            }

            if (str == null) {
                return false;
            }

            return str.indexOf(value) > -1;
        },

        indexOfAny: function (str, anyOf) {
            if (anyOf == null) {
                throw new System.ArgumentNullException();
            }

            if (str == null || str === "") {
                return -1;
            }

            var startIndex = (arguments.length > 2) ? arguments[2] : 0;

            if (startIndex < 0) {
                throw new System.ArgumentOutOfRangeException("startIndex", "startIndex cannot be less than zero");
            }

            var length = (arguments.length > 3) ? arguments[3] : str.length - startIndex;

            if (length < 0) {
                throw new System.ArgumentOutOfRangeException("length", "must be non-negative");
            }

            if (length > str.length - startIndex) {
                throw new System.ArgumentOutOfRangeException("Index and length must refer to a location within the string");
            }

            var s = str.substr(startIndex, length);

            for (var i = 0; i < anyOf.length; i++) {
                var c = String.fromCharCode(anyOf[i]),
                    index = s.indexOf(c);

                if (index > -1) {
                    return index + startIndex;
                }
            }

            return -1;
        },

        indexOf: function (str, value) {
            if (value == null) {
                throw new System.ArgumentNullException();
            }

            if (str == null || str === "") {
                return -1;
            }

            var startIndex = (arguments.length > 2) ? arguments[2] : 0;

            if (startIndex < 0 || startIndex > str.length) {
                throw new System.ArgumentOutOfRangeException("startIndex", "startIndex cannot be less than zero and must refer to a location within the string");
            }

            if (value === "") {
                return (arguments.length > 2) ? startIndex : 0;
            }

            var length = (arguments.length > 3) ? arguments[3] : str.length - startIndex;

            if (length < 0) {
                throw new System.ArgumentOutOfRangeException("length", "must be non-negative");
            }

            if (length > str.length - startIndex) {
                throw new System.ArgumentOutOfRangeException("Index and length must refer to a location within the string");
            }

            var s = str.substr(startIndex, length),
                index = (arguments.length === 5 && arguments[4] % 2 !== 0) ? s.toLocaleUpperCase().indexOf(value.toLocaleUpperCase()) : s.indexOf(value);

            if (index > -1) {
                if (arguments.length === 5) {
                    // StringComparison
                    return (System.String.compare(value, s.substr(index, value.length), arguments[4]) === 0) ? index + startIndex : -1;
                } else {
                    return index + startIndex;
                }
            }

            return -1;
        },

        equals: function () {
            return System.String.compare.apply(this, arguments) === 0;
        },

        compare: function (strA, strB) {
            if (strA == null) {
                return (strB == null) ? 0 : -1;
            }

            if (strB == null) {
                return 1;
            }

            if (arguments.length >= 3) {
                if (!Bridge.isBoolean(arguments[2])) {
                    // StringComparison
                    switch (arguments[2]) {
                        case 1: // CurrentCultureIgnoreCase
                            return strA.localeCompare(strB, System.Globalization.CultureInfo.getCurrentCulture().name, {
                                sensitivity: "accent"
                            });
                        case 2: // InvariantCulture
                            return strA.localeCompare(strB, System.Globalization.CultureInfo.invariantCulture.name);
                        case 3: // InvariantCultureIgnoreCase
                            return strA.localeCompare(strB, System.Globalization.CultureInfo.invariantCulture.name, {
                                sensitivity: "accent"
                            });
                        case 4: // Ordinal
                            return (strA === strB) ? 0 : ((strA > strB) ? 1 : -1);
                        case 5: // OrdinalIgnoreCase
                            return (strA.toUpperCase() === strB.toUpperCase()) ? 0 : ((strA.toUpperCase() > strB.toUpperCase()) ? 1 : -1);
                        case 0: // CurrentCulture
                        default:
                            break;
                    }
                } else {
                    // ignoreCase
                    if (arguments[2]) {
                        strA = strA.toLocaleUpperCase();
                        strB = strB.toLocaleUpperCase();
                    }

                    if (arguments.length === 4) {
                        // CultureInfo
                        return strA.localeCompare(strB, arguments[3].name);
                    }
                }
            }

            return strA.localeCompare(strB);
        },

        toCharArray: function (str, startIndex, length) {
            if (startIndex < 0 || startIndex > str.length || startIndex > str.length - length) {
                throw new System.ArgumentOutOfRangeException("startIndex", "startIndex cannot be less than zero and must refer to a location within the string");
            }

            if (length < 0) {
                throw new System.ArgumentOutOfRangeException("length", "must be non-negative");
            }

            if (!Bridge.hasValue(startIndex)) {
                startIndex = 0;
            }

            if (!Bridge.hasValue(length)) {
                length = str.length;
            }

            var arr = [];

            for (var i = startIndex; i < startIndex + length; i++) {
                arr.push(str.charCodeAt(i));
            }

            return arr;
        },

        escape: function (str) {
            return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        },

        replaceAll: function (str, a, b) {
            var reg = new RegExp(System.String.escape(a), "g");

            return str.replace(reg, b);
        },

        insert: function (index, strA, strB) {
            return index > 0 ? (strA.substring(0, index) + strB + strA.substring(index, strA.length)) : (strB + strA);
        },

        remove: function (s, index, count) {
            if (s == null) {
                throw new System.NullReferenceException();
            }

            if (index < 0) {
                throw new System.ArgumentOutOfRangeException("startIndex", "StartIndex cannot be less than zero");
            }

            if (count != null) {
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count", "Count cannot be less than zero");
                }

                if (count > s.length - index) {
                    throw new System.ArgumentOutOfRangeException("count", "Index and count must refer to a location within the string");
                }
            } else {
                if (index >= s.length) {
                    throw new System.ArgumentOutOfRangeException("startIndex", "startIndex must be less than length of string");
                }
            }

            if (count == null || ((index + count) > s.length)) {
                return s.substr(0, index);
            }

            return s.substr(0, index) + s.substr(index + count);
        },

        split: function (s, strings, limit, options) {
            var re = (!Bridge.hasValue(strings) || strings.length === 0) ? new RegExp("\\s", "g") : new RegExp(strings.map(System.String.escape).join('|'), 'g'),
                res = [],
                m,
                i;

            for (i = 0;; i = re.lastIndex) {
                if (m = re.exec(s)) {
                    if (options !== 1 || m.index > i) {
                        if (res.length === limit - 1) {
                            res.push(s.substr(i));

                            return res;
                        } else {
                            res.push(s.substring(i, m.index));
                        }
                    }
                } else {
                    if (options !== 1 || i !== s.length) {
                        res.push(s.substr(i));
                    }

                    return res;
                }
            }
        },

        trimEnd: function (s, chars) {
            return s.replace(chars ? new RegExp('[' + System.String.escape(String.fromCharCode.apply(null, chars)) + ']+$') : /\s*$/, '');
        },

        trimStart: function (s, chars) {
            return s.replace(chars ? new RegExp('^[' + System.String.escape(String.fromCharCode.apply(null, chars)) + ']+') : /^\s*/, '');
        },

        trim: function (s, chars) {
            return System.String.trimStart(System.String.trimEnd(s, chars), chars);
        },

        concat: function () {
            var s = "";
            for (var i = 0; i < arguments.length; i++) {
                var tmp = arguments[i];
                s += tmp == null ? "" : tmp;
            }

            return s;
        }
    };

    System.String = string;
