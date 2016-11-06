    var _boolean = {
        trueString: "True",
        falseString: "False",

        is: function (obj, type) {
            if (type === System.IComparable ||
                type === System.IEquatable$1(Boolean) ||
                type === System.IComparable$1(Boolean)) {
                return true;
            }

            return false;
        },

        $is: function (instance) {
            return typeof (instance) === "boolean";
        },

        getDefaultValue: function () {
            return false;
        },

        toString: function (v) {
            return v ? System.Boolean.trueString : System.Boolean.falseString;
        },

        parse: function (value) {
            if (!Bridge.hasValue(value)) {
                throw new System.ArgumentNullException("value");
            }

            var result = {
                v: false
            };

            if (!System.Boolean.tryParse(value, result)) {
                throw new System.FormatException("Bad format for Boolean value");
            }

            return result.v;
        },

        tryParse: function (value, result) {
            result.v = false;

            if (!Bridge.hasValue(value)) {
                return false;
            }

            if (System.String.equals(System.Boolean.trueString, value, 5)) {
                result.v = true;
                return true;
            }

            if (System.String.equals(System.Boolean.falseString, value, 5)) {
                result.v = false;
                return true;
            }

            var start = 0,
                end = value.length - 1;

            while (start < value.length) {
                if (!System.Char.isWhiteSpace(value[start]) && !System.Char.isNull(value.charCodeAt(start))) {
                    break;
                }

                start++;
            }

            while (end >= start) {
                if (!System.Char.isWhiteSpace(value[end]) && !System.Char.isNull(value.charCodeAt(end))) {
                    break;
                }

                end--;
            }

            value = value.substr(start, end - start + 1);

            if (System.String.equals(System.Boolean.trueString, value, 5)) {
                result.v = true;
                return true;
            }

            if (System.String.equals(System.Boolean.falseString, value, 5)) {
                result.v = false;
                return true;
            }

            return false;
        }
    };

    System.Boolean = _boolean;
