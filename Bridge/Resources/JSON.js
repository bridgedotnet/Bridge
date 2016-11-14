Bridge.serialize = function(obj) {
    //TODO: Check for Serializable and other attributes when https://github.com/bridgedotnet/Bridge/issues/2043 is fixed.
    
    if (obj === null) {
        return null;
    } else if (obj === false) {
        return false;
    } else if (obj === true) {
        return true;
    } else if (typeof obj === "number") {
        return obj;
    } else if (typeof obj === "string") {
        return obj;
    } else if (typeof obj === "object") {
        var type = Bridge.getType(obj);

        if (type === Object) {
            return obj;
        } else if (type === System.Int64) {
            return obj.toString();
        } else if (type === System.UInt64) {
            return obj.toString();
        } else if (type === System.Decimal) {
            return obj.toString();
        } else if (type === Date) { //TODO: Change to System.DateTime when https://github.com/bridgedotnet/Bridge/issues/2064 is fixed.
            return obj.toJSON();
        } else if (type === Array) {
            //TODO: Implement when the following issues are fixed:
            // - https://github.com/bridgedotnet/Bridge/issues/2051
            // - https://github.com/bridgedotnet/Bridge/issues/2052
            // - https://github.com/bridgedotnet/Bridge/issues/2056
            return obj;
        } else if (Bridge.Reflection.isEnum(type)) {
            return obj.toString();
        } else if (Bridge.Reflection.getGenericTypeDefinition(type) === System.Collections.Generic.List$1) {
            //TODO: Check if type inherits IList when https://github.com/bridgedotnet/Bridge/issues/2050 is fixed.
            var arr = [];

            for(var i = 0; i < obj.getCount(); i++) {
                arr.push(Bridge.serialize(obj.getItem(i)));
            }

            return arr;
        } else if (Bridge.Reflection.getGenericTypeDefinition(type) === System.Collections.Generic.Dictionary$2) {
            //TODO: Check if type inherits IList when https://github.com/bridgedotnet/Bridge/issues/2050 is fixed.
            var dict = {};

            for(var each in dict.entries) {
                dict[each] = Bridge.serialize(dict.get(each));
            }

            return dict;
        } else {
            var raw = {};

            if (Bridge.Reflection.getBaseType(type) !== Object) {
                raw["@type"] = Bridge.serialize(type);
            }

            var fields = Bridge.Reflection.getMembers(type, 4, 4);

            for (var i = 0; i < fields.length; i++) {
                raw[fields[i].name] = Bridge.serialize(Bridge.Reflection.fieldAccess(fields[i], obj));
            }

            var properties = Bridge.Reflection.getMembers(type, 16, 28);

            for (var i = 0; i < properties.length; i++) {
                if (!!properties[i].getter) {
                    raw[properties[i].name] = Bridge.serialize(Bridge.Reflection.midel(properties[i].getter, obj)());
                }
            }

            return raw;
        }
    } else {
        return obj;
    }
};

Bridge.deserialize = function(raw, type) {
    if (raw === null) {
        if (type === Boolean) { //TODO: Change to System.Boolean when https://github.com/bridgedotnet/Bridge/issues/2062 is fixed.
            return false;
        } else if (type === System.SByte) {
            return 0;
        } else if (type === System.Byte) {
            return 0;
        } else if (type === System.Int16) {
            return 0;
        } else if (type === System.UInt16) {
            return 0;
        } else if (type === System.Int32) {
            return 0;
        } else if (type === System.UInt32) {
            return 0;
        } else if (type === System.Int64) {
            return System.Int64(0);
        } else if (type === System.UInt64) {
            return System.UInt64(0);
        } else if (type === System.Single) {
            return 0.0;
        } else if (type === System.Double) {
            return 0.0;
        } else if (type === System.Decimal) {
            return System.Decimal(0.0);
        } else if (type === System.Char) {
            return 0;
        } else if (type === String) { //TODO: Change to System.String when https://github.com/bridgedotnet/Bridge/issues/2066 is fixed.
            return null;
        } else if (type === Date) { //TODO: Change to System.DateTime when https://github.com/bridgedotnet/Bridge/issues/2064 is fixed.
            return new Date(-62135596800000);
        } else if (Bridge.Reflection.isEnum(type)) {
            return System.Enum.parse(type, 0);
        } else {
            return null;
        }
    } else if (raw === false) {
        if (type === Boolean) { //TODO: Change to System.Boolean when https://github.com/bridgedotnet/Bridge/issues/2062 is fixed.
            return false;
        } else if (type === System.SByte) {
            return 0;
        } else if (type === System.Byte) {
            return 0;
        } else if (type === System.Int16) {
            return 0;
        } else if (type === System.UInt16) {
            return 0;
        } else if (type === System.Int32) {
            return 0;
        } else if (type === System.UInt32) {
            return 0;
        } else if (type === System.Int64) {
            return System.Int64(0);
        } else if (type === System.UInt64) {
            return System.UInt64(0);
        } else if (type === System.Single) {
            return 0.0;
        } else if (type === System.Double) {
            return 0.0;
        } else if (type === System.Decimal) {
            return System.Decimal(0.0);
        } else if (type === System.Char) {
            return 0;
        } else if (type === String) { //TODO: Change to System.String when https://github.com/bridgedotnet/Bridge/issues/2066 is fixed.
            return "false";
        } else if (type === Date) { //TODO: Change to System.DateTime when https://github.com/bridgedotnet/Bridge/issues/2064 is fixed.
            return new Date(-62135596800000);
        } else if (Bridge.Reflection.isEnum(type)) {
            return System.Enum.parse(type, 0);
        } else {
            return null;
        }
    } else if (raw === true) {
        if (type === Boolean) { //TODO: Change to System.Boolean when https://github.com/bridgedotnet/Bridge/issues/2062 is fixed.
            return true;
        } else if (type === System.SByte) {
            return 1;
        } else if (type === System.Byte) {
            return 1;
        } else if (type === System.Int16) {
            return 1;
        } else if (type === System.UInt16) {
            return 1;
        } else if (type === System.Int32) {
            return 1;
        } else if (type === System.UInt32) {
            return 1;
        } else if (type === System.Int64) {
            return System.Int64(1);
        } else if (type === System.UInt64) {
            return System.UInt64(1);
        } else if (type === System.Single) {
            return 1.0;
        } else if (type === System.Double) {
            return 1.0;
        } else if (type === System.Decimal) {
            return System.Decimal(1.0);
        } else if (type === System.Char) {
            return 1;
        } else if (type === String) { //TODO: Change to System.String when https://github.com/bridgedotnet/Bridge/issues/2066 is fixed.
            return "true";
        } else if (type === Date) { //TODO: Change to System.DateTime when https://github.com/bridgedotnet/Bridge/issues/2064 is fixed.
            return new Date(-62135596800000 + 1);
        } else if (Bridge.Reflection.isEnum(type)) {
            return System.Enum.parse(type, 1);
        } else {
            return null;
        }
    } else if (typeof raw === "number") {
        if (type === Boolean) { //TODO: Change to System.Boolean when https://github.com/bridgedotnet/Bridge/issues/2062 is fixed.
            return raw !== 0;
        } else if (type === System.SByte) {
            return raw | 0;
        } else if (type === System.Byte) {
            return raw >>> 0;
        } else if (type === System.Int16) {
            return raw | 0;
        } else if (type === System.UInt16) {
            return raw >>> 0;
        } else if (type === System.Int32) {
            return raw | 0;
        } else if (type === System.UInt32) {
            return raw >>> 0;
        } else if (type === System.Int64) {
            return System.Int64(raw | 0);
        } else if (type === System.UInt64) {
            return System.UInt64(raw >>> 0);
        } else if (type === System.Single) {
            return raw;
        } else if (type === System.Double) {
            return raw;
        } else if (type === System.Decimal) {
            return System.Decimal(raw);
        } else if (type === System.Char) {
            return raw | 0;
        } else if (type === String) { //TODO: Change to System.String when https://github.com/bridgedotnet/Bridge/issues/2066 is fixed.
            return raw.toString();
        } else if (type === Date) { //TODO: Change to System.DateTime when https://github.com/bridgedotnet/Bridge/issues/2064 is fixed.
            return new Date(-62135596800000 + System.Int64(raw | 0).div(10000));
        } else {
            return null;
        }
    } else if (typeof raw === "string") {
        if (type === Boolean) { //TODO: Change to System.Boolean when https://github.com/bridgedotnet/Bridge/issues/2062 is fixed.
            return raw !== "";
        } else if (type === System.SByte) {
            return raw | 0;
        } else if (type === System.Byte) {
            return raw >>> 0;
        } else if (type === System.Int16) {
            return raw | 0;
        } else if (type === System.UInt16) {
            return raw >>> 0;
        } else if (type === System.Int32) {
            return raw | 0;
        } else if (type === System.UInt32) {
            return raw >>> 0;
        } else if (type === System.Int64) {
            return System.Int64(raw | 0);
        } else if (type === System.UInt64) {
            return System.UInt64(raw | 0);
        } else if (type === System.Single) {
            return parseFloat(raw);
        } else if (type === System.Double) {
            return parseFloat(raw);
        } else if (type === System.Decimal) {
            try {
                return System.Decimal.parse(raw);
            } catch(ex) {
                return System.Decimal(0);
            }
        } else if (type === System.Char) {
            if (raw.length === 0) {
                return 0;
            }

            return raw.charCodeAt(0);
        } else if (type === String) { //TODO: Change to System.String when https://github.com/bridgedotnet/Bridge/issues/2066 is fixed.
            return raw;
        } else if (type === Date) { //TODO: Change to System.DateTime when https://github.com/bridgedotnet/Bridge/issues/2064 is fixed.
            return new Date(raw);
        } else if (Bridge.Reflection.isEnum(type)) {
            return System.Enum.parse(type, raw);
        } else {
            return null;
        }
    } else if (typeof raw === "object") {
        if (type == Boolean) { //TODO: Change to System.Boolean when https://github.com/bridgedotnet/Bridge/issues/2062 is fixed.
            return false;
        } else if (type === System.SByte) {
            return 0;
        } else if (type === System.Byte) {
            return 0;
        } else if (type === System.Int16) {
            return 0;
        } else if (type === System.UInt16) {
            return 0;
        } else if (type === System.Int32) {
            return 0;
        } else if (type === System.UInt32) {
            return 0;
        } else if (type === System.Int64) {
            return System.Int64(0);
        } else if (type === System.UInt64) {
            return System.UInt64(0);
        } else if (type === System.Single) {
            return 0.0;
        } else if (type === System.Double) {
            return 0.0;
        } else if (type === System.Decimal) {
            return System.Decimal(0.0);
        } else if (type === System.Char) {
            return 0;
        } else if (type === String) { //TODO: Change to System.String when https://github.com/bridgedotnet/Bridge/issues/2066 is fixed.
            return raw.toString();
        } else if (type === Date) { //TODO: Change to System.DateTime when https://github.com/bridgedotnet/Bridge/issues/2064 is fixed.
            return new Date(-62135596800000);
        } else if (Bridge.Reflection.isEnum(type)) {
            return System.Enum.parse(type, 0);
        } else if (type === Array) {
            if (raw.length === undefined) {
                return [ ];
            }

            return raw;
        } else if (Bridge.Reflection.getGenericTypeDefinition(type) === System.Collections.Generic.List$1) {
            //TODO: Check if type inherits IList when https://github.com/bridgedotnet/Bridge/issues/2050 is fixed.
            var typeElement = Bridge.Reflection.getGenericArguments(type)[0];
            var list = Bridge.createInstance(type);

            if(raw.length === undefined) {
                return list;
            }

            for(var i = 0; i < raw.length; i++) {
                list.add(Bridge.deserialize(raw[i], typeElement));
            }

            return list;
        } else if (Bridge.Reflection.getGenericTypeDefinition(type) === System.Collections.Generic.Dictionary$2) {
            //TODO: Check if type inherits IList when https://github.com/bridgedotnet/Bridge/issues/2050 is fixed.
            var typesGeneric = Bridge.Reflection.getGenericArguments(type);
            var typeKey = typesGeneric[0];
            var typeValue = typesGeneric[1];

            var dictionary = Bridge.createInstance(type);

            for(var each in raw)
            {
                dictionary.add(each, Bridge.deserialize(raw[each]));
            }

            return dictionary;
        } else {
            if (raw["@type"] !== undefined) {
                type = Bridge.Reflection.getType(raw["@type"], Bridge.Reflection.getTypeAssembly(type));
            }

            if (type === null) {
                throw TypeError(System.String.concat("Cannot find type: ", raw["@type"]));
            }

            var o = Bridge.createInstance(type);

            var fields = Bridge.Reflection.getMembers(type, 4, 4);

            for (var i = 0; i < fields.length; i++) {
                var value = raw[fields[i].name];

                if (value !== undefined) {
                    Bridge.Reflection.fieldAccess(fields[i], o, Bridge.deserialize(value, fields[i].returnType));
                }
            }

            var properties = Bridge.Reflection.getMembers(type, 16, 4);

            for (var i = 0; i < properties.length; i++) {
                var value = raw[properties[i].name];

                if (value !== undefined && !!properties[i].setter) {
                    Bridge.Reflection.midel(properties[i].setter, o)(Bridge.deserialize(value, properties[i].returnType));
                }
            }

            return o;
        }
    }
};
