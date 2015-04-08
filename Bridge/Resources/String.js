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
            return str.indexOf(value) > -1;
        }
    };

    Bridge.String = string;
})();
