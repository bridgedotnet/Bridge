// @source Enum.js

(function () {
    var enumMethods = {
        nameEquals: function (n1, n2, ignoreCase) {
            if (ignoreCase) {
                return n1.toLowerCase() === n2.toLowerCase();
            }

            return (n1.charAt(0).toLowerCase() + n1.slice(1)) === (n2.charAt(0).toLowerCase() + n2.slice(1));
        },

        checkEnumType: function(enumType) {
            if (!enumType) {
                throw new Bridge.ArgumentNullException("enumType");
            }

            if (!enumType.prototype.enum) {
                throw new Bridge.ArgumentException("", "enumType");
            }
        },

        toName: function(name) {
            return name.charAt(0).toUpperCase() + name.slice(1);
        },

        parse: function(enumType, s, ignoreCase, silent) {
            var values = enumType;

            Bridge.Enum.checkEnumType(enumType);

            if (!enumType.prototype.flags) {
                for (var f in values) {
                    if (enumMethods.nameEquals(f, s, ignoreCase)) {
                        return values[f];
                    }
                }
            }
            else {
                var parts = s.split(',');
                var value = 0;
                var parsed = true;

                for (var i = parts.length - 1; i >= 0; i--) {
                    var part = parts[i].trim();
                    var found = false;

                    for (var f in values) {
                        if (enumMethods.nameEquals(f, part, ignoreCase)) {
                            value |= values[f];
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        parsed = false;
                        break;
                    }
                }

                if (parsed) {
                    return value;
                }
            }

            if (silent !== true) {
                throw new Bridge.ArgumentException('Invalid Enumeration Value');
            }

            return null;
        },

        toString: function (enumType, value, forceFlags) {
            Bridge.Enum.checkEnumType(enumType);

            var values = enumType;
            if ((!enumType.prototype.flags && forceFlags !== true) || (value === 0)) {
                for (var i in values) {
                    if (values[i] === value) {
                        return enumMethods.toName(i);
                    }
                }
                //throw new Bridge.ArgumentException('Invalid Enumeration Value');
                return value.toString();
            }
            else {
                var parts = [];
                for (var i in values) {
                    if (values[i] & value) {
                        parts.push(enumMethods.toName(i));
                    }
                }
                if (!parts.length) {
                    //throw new Bridge.ArgumentException('Invalid Enumeration Value');
                    return value.toString();
                }
                return parts.join(', ');
            }
        },

        getValues: function (enumType) {
            Bridge.Enum.checkEnumType(enumType);
            var parts = [];
            var values = enumType;
            for (var i in values) {
                if (values.hasOwnProperty(i) && i.indexOf("$") < 0)
                    parts.push(values[i]);
            }
            return parts;
        },

        format: function (enumType, value, format) {
            Bridge.Enum.checkEnumType(enumType);

            var name;
            if (!Bridge.hasValue(value) && (name = "value") || !Bridge.hasValue(format) && (name = "format")) {
                throw new Bridge.ArgumentNullException(name);
            }

            switch (format) {
                case "G":
                case "g":
                    return Bridge.Enum.toString(enumType, value);
                case "x":
                case "X":
                    return value.toString(16);
                case "d":
                case "D":
                    return value.toString();
                case "f":
                case "F":
                    return Bridge.Enum.toString(enumType, value, true);
                default:
                    throw new Bridge.FormatException();
            }
        },

        getNames: function (enumType) {
            Bridge.Enum.checkEnumType(enumType);
            var parts = [];
            var values = enumType;
            for (var i in values) {
                if (values.hasOwnProperty(i) && i.indexOf("$") < 0)
                    parts.push(enumMethods.toName(i));
            }
            return parts;
        },

        getName: function (enumType, value) {
            Bridge.Enum.checkEnumType(enumType);
            var values = enumType;
            for (var i in values) {
                if (values[i] === value) {
                    return i.charAt(0).toUpperCase() + i.slice(1);
                }
            }

            return null;
        },

        hasFlag: function(value, flag) {
            return !!(value & flag);
        },

        isDefined: function (enumType, value) {
            Bridge.Enum.checkEnumType(enumType);
            var values = enumType;
            var isString = Bridge.isString(value);
            for (var i in values) {
                if (isString ? enumMethods.nameEquals(i, value, false) : values[i] === value) {
                    return true;
                }
            }

            return false;
        },

        tryParse: function (enumType, value, result, ignoreCase) {
            result.v = 0;
            result.v = enumMethods.parse(enumType, value, ignoreCase, true);

            if (result.v == null) {
                return false;
            }

            return true;
        }
    };

    Bridge.Enum = enumMethods;
})();
