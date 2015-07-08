// @source String.js

(function () {
    var string = {
        isNullOrWhiteSpace: function (value) {
            return value === null || value.match(/^ *$/) !== null;
        },

        isNullOrEmpty: function (value) {
            return Bridge.isEmpty(value, false);
        },

        fromCharCount: function (c, count) {
            if (count >= 0) {
                return String(Array(count + 1).join(String.fromCharCode(c)));
            }
            else {
                throw new Bridge.ArgumentOutOfRangeException("count", "cannot be less than zero");
            }
        },

        format: function (format) {
            var me = this,
                _formatRe = /(\{+)((\d+|[a-zA-Z_$]\w+(?:\.[a-zA-Z_$]\w+|\[\d+\])*)(?:\,(-?\d*))?(?:\:([^\}]*))?)(\}+)|(\{+)|(\}+)/g,
                args = Array.prototype.slice.call(arguments, 1),
                fn = this.decodeBraceSequence;

            return format.replace(_formatRe, function (m, openBrace, elementContent, index, align, format, closeBrace, repeatOpenBrace, repeatCloseBrace) {
                if (repeatOpenBrace) {
                    return fn(repeatOpenBrace);
                }

                if (repeatCloseBrace) {
                    return fn(repeatCloseBrace);
                }

                if (openBrace.length % 2 == 0 || closeBrace.length % 2 == 0) {
                    return fn(openBrace) + elementContent + fn(closeBrace);
                }

                return fn(openBrace, true) + me.handleElement(index, align, format, args) + fn(closeBrace, true);
            });
        },

        handleElement: function (index, alignment, formatStr, args) {
            var value;

            index = parseInt(index, 10)

            if (index > args.length - 1) {
                throw new Bridge.FormatException("Input string was not in a correct format.");
            }

            value = args[index];

            if (value == null)
            {
                value = "";
            }

            if (formatStr && Bridge.is(value, Bridge.IFormattable)) {
                value = Bridge.format(value, formatStr);
            }
            else {
                value = "" + value;
            }

            if (alignment) {
                alignment = parseInt(alignment, 10);
                if (!Bridge.isNumber(alignment)) {
                    alignment = null;
                }
            }

            return Bridge.String.alignString(value.toString(), alignment);
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

            return str.match("^" + prefix) !== null;
        },

        endsWith: function (str, suffix) {
            if (!suffix.length) {
                return true;
            }

            if (suffix.length > str.length) {
                return false;
            }

            return str.match(suffix + "$") !== null;
        },

        contains: function (str, value) {
            if (value == null) {
                throw new Bridge.ArgumentNullException();
            }

            if (str == null) {
                return false;
            }

            return str.indexOf(value) > -1;
        },

        indexOfAny: function (str, anyOf) {
            if (anyOf == null) {
                throw new Bridge.ArgumentNullException();
            }

            if (str == null || str == "") {
                return -1;
            }

            var startIndex = (arguments.length > 2) ? arguments[2] : 0;

            if (startIndex < 0) {
                throw new Bridge.ArgumentOutOfRangeException("startIndex", "startIndex cannot be less than zero");
            }

            var length = (arguments.length > 3) ? arguments[3] : str.length - startIndex;

            if (length < 0) {
                throw new Bridge.ArgumentOutOfRangeException("length", "must be non-negative");
            }

            if (length > str.length - startIndex) {
                throw new Bridge.ArgumentOutOfRangeException("Index and length must refer to a location within the string");
            }

            var s = str.substr(startIndex, length);

            for (var i = 0; i < anyOf.length; i++) {
                var c = String.fromCharCode(anyOf[i]);

                var index = s.indexOf(c);
                if (index > -1) {
                    return index + startIndex;
                }
            }

            return -1;
        },

        indexOf: function (str, value) {
            if (value == null) {
                throw new Bridge.ArgumentNullException();
            }

            if (str == null || str == "") {
                return -1;
            }

            var startIndex = (arguments.length > 2) ? arguments[2] : 0;

            if (startIndex < 0 || startIndex > str.length) {
                throw new Bridge.ArgumentOutOfRangeException("startIndex", "startIndex cannot be less than zero and must refer to a location within the string");
            }

            if (value == "") {
                return (arguments.length > 2) ? startIndex : 0;
            }

            var length = (arguments.length > 3) ? arguments[3] : str.length - startIndex;

            if (length < 0) {
                throw new Bridge.ArgumentOutOfRangeException("length", "must be non-negative");
            }

            if (length > str.length - startIndex) {
                throw new Bridge.ArgumentOutOfRangeException("Index and length must refer to a location within the string");
            }

            var s = str.substr(startIndex, length);

            var index = (arguments.length == 5 && arguments[4] % 2 != 0) ? s.toLocaleUpperCase().indexOf(value.toLocaleUpperCase()) : s.indexOf(value);

            if (index > -1) {
                if (arguments.length == 5) {
                    // StringComparison
                    return (Bridge.String.compare(value, s.substr(index, value.length), arguments[4]) == 0) ? index + startIndex : -1;
                }
                else {
                    return index + startIndex;
                }
            }

            return -1;
        },

        compare: function (strA, strB) {
            if (strA == null) {
                return (strB == null) ? 0 : -1;
            }

            if (strB == null) {
                return (strA == null) ? 0 : 1;
            }

            if (arguments.length >= 3) {
                if (!Bridge.isBoolean(arguments[2])) {
                    // StringComparison
                    switch (arguments[2]) {
                        case 1: // CurrentCultureIgnoreCase
                            return strA.localeCompare(strB, Bridge.CultureInfo.getCurrentCulture().name, { sensitivity: 'accent' });
                            break;
                        case 2: // InvariantCulture
                            return strA.localeCompare(strB, Bridge.CultureInfo.invariantCulture.name);
                            break;
                        case 3: // InvariantCultureIgnoreCase
                            return strA.localeCompare(strB, Bridge.CultureInfo.invariantCulture.name, { sensitivity: 'accent' });
                            break;
                        case 4: // Ordinal
                            return (strA === strB) ? 0 : ((strA > strB) ? 1 : -1);
                            break;
                        case 5: // OrdinalIgnoreCase
                            return (strA.toUpperCase() === strB.toUpperCase()) ? 0 : ((strA.toUpperCase() > strB.toUpperCase()) ? 1 : -1);
                            break;
                        case 0: // CurrentCulture
                        default:
                            break;
                    }
                }
                else {
                    // ignoreCase
                    if (arguments[2]) {
                        strA = strA.toLocaleUpperCase();
                        strB = strB.toLocaleUpperCase();
                    }

                    if (arguments.length == 4) {
                        // CultureInfo
                        return strA.localeCompare(strB, arguments[3].name);
                    }
                }
            }

            return strA.localeCompare(strB);
        },

        toCharArray: function (str, startIndex, length) {
            if (startIndex < 0 || startIndex > str.length || startIndex > str.length - length) {
                throw new Bridge.ArgumentOutOfRangeException("startIndex", "startIndex cannot be less than zero and must refer to a location within the string");
            }

            if (length < 0) {
                throw new Bridge.ArgumentOutOfRangeException("length", "must be non-negative");
            }

            var arr = [];

            for (var i = startIndex; i < startIndex + length; i++) {
                arr.push(str.charCodeAt(i));
            }

            return arr;
        },

        concatArray: function () {
            if (arguments.length == 0) {
                throw new Bridge.ArgumentNullException();
            }

            var sb = new Bridge.Text.StringBuilder();

            for (var i = 0; i < arguments.length; i++) {
                sb.append(arguments[i]);
            }

            return sb.toString();
        }
    };

    Bridge.String = string;
})();