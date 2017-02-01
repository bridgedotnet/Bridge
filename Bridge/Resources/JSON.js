//TODO: Remove when issues are fixed.
System.Object = Object; // https://github.com/bridgedotnet/Bridge/issues/2069
System.Boolean = Boolean; // https://github.com/bridgedotnet/Bridge/issues/2062
System.DateTime = Date; // https://github.com/bridgedotnet/Bridge/issues/2064
// ---

Bridge.serialize = function(obj) {
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

        if (type === System.Int64) {
            return obj.toString();
        } else if (type === System.UInt64) {
            return obj.toString();
        } else if (type === System.Decimal) {
            return obj.toString();
        } else if (type === System.DateTime) {
            return obj.toJSON();
        } else if (Bridge.isArray(null, type)) {
            var arr = [];

            for(var i = 0; i < obj.length; i++) {
                arr.push(Bridge.serialize(obj[i]));
            }

            return obj;
        } else if (Bridge.Reflection.isEnum(type)) {
            return obj.toString();
        } else if (Bridge.Reflection.isAssignableFrom(System.Collections.IList, type)) {
            var arr = [];

            for(var i = 0; i < obj.getCount(); i++) {
                arr.push(Bridge.serialize(obj.getItem(i)));
            }

            return arr;
        } else if (Bridge.Reflection.isAssignableFrom(System.Collections.IDictionary, type)) {
            var dict = {};

            for(var each in dict.entries) {
                dict[each] = Bridge.serialize(dict.get(each));
            }

            return dict;
        } else {
            var raw = {};

            if (Bridge.Reflection.getBaseType(type) !== System.Object) {
                raw["$type"] = Bridge.getTypeName();
            }

            var fields = Bridge.Reflection.getMembers(type, 4, 4);

            for (var i = 0; i < fields.length; i++) {
                raw[fields[i].n] = Bridge.serialize(Bridge.Reflection.fieldAccess(fields[i], obj));
            }

            var properties = Bridge.Reflection.getMembers(type, 16, 28);

            for (var i = 0; i < properties.length; i++) {
                if (!!properties[i].g) {
                    raw[properties[i].n] = Bridge.serialize(Bridge.Reflection.midel(properties[i].g, obj)());
                }
            }

            return raw;
        }
    } else {
        return obj;
    }
};

Bridge.populate = function(obj, raw) {
    if (obj === null) {
        return;
    } else if (obj === false) {
        return;
    } else if (obj === true) {
        return;
    } else if (typeof obj === "number") {
        return;
    } else if (typeof obj === "string") {
        return;
    } else if (typeof obj === "object") {
        var type = Bridge.getType(obj);

        if (Bridge.isArray(null, type)) {
            obj.length = 0;
            
            if(raw.length === undefined) {
                return;
            }
            
            for(var i = 0; i < raw.length; i++) {
                obj.push(Bridge.deserialize(raw[i], type.$typeElement));
            }
        } else if (Bridge.Reflection.isAssignableFrom(System.Collections.IList, type)) {
            var typeElement = Bridge.Reflection.getGenericArguments(type)[0];

            obj.clear();
            
            if(raw.length === undefined) {
                return;
            }

            for(var i = 0; i < raw.length; i++) {
                obj.add(Bridge.deserialize(raw[i], typeElement));
            }
        } else if (Bridge.Reflection.isAssignableFrom(System.Collections.IDictionary, type)) {
            var typesGeneric = Bridge.Reflection.getGenericArguments(type);
            var typeKey = typesGeneric[0];
            var typeValue = typesGeneric[1];

            obj.clear();

            for(var each in raw) {
                obj.add(each, Bridge.deserialize(raw[each], typeValue));
            }
        } else {
            if (raw["$type"] !== undefined) {
                type = Bridge.Reflection.getType(raw["$type"].split(",")[0]);
            }

            if (type === null) {
                throw TypeError(System.String.concat("Cannot find type: ", raw["$type"]));
            }

            var fields = Bridge.Reflection.getMembers(type, 4, 4);

            for (var i = 0; i < fields.length; i++) {
                var value = raw[fields[i].n];

                if (value !== undefined) {
                    Bridge.Reflection.fieldAccess(fields[i], obj, Bridge.deserialize(value, fields[i].rt));
                }
            }

            var properties = Bridge.Reflection.getMembers(type, 16, 4);

            for (var i = 0; i < properties.length; i++) {
                var value = raw[properties[i].n];

                if (value !== undefined && !!properties[i].s) {
                    Bridge.Reflection.midel(properties[i].s, obj)(Bridge.deserialize(value, properties[i].rt));
                }
            }
        }
    }
};

Bridge.deserialize = function(raw, type) {
    if (raw === null) {
        if (type === System.Boolean) {
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
        } else if (type === String) { // TODO: https://github.com/bridgedotnet/Bridge/issues/2066
            return null;
        } else if (type === System.DateTime) {
            return new System.DateTime(-62135596800000); //TODO: Change to suit the newer version of DateTime.
        } else if (Bridge.Reflection.isEnum(type)) {
            return System.Enum.parse(type, 0);
        } else {
            return null;
        }
    } else if (raw === false) {
        if (type === System.Boolean) {
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
        } else if (type === String) { // TODO: https://github.com/bridgedotnet/Bridge/issues/2066
            return "false";
        } else if (type === System.DateTime) {
            return new System.DateTime(-62135596800000); //TODO: Change to suit the newer version of DateTime.
        } else if (Bridge.Reflection.isEnum(type)) {
            return System.Enum.parse(type, 0);
        } else {
            return null;
        }
    } else if (raw === true) {
        if (type === System.Boolean) {
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
        } else if (type === String) { // TODO: https://github.com/bridgedotnet/Bridge/issues/2066
            return "true";
        } else if (type === System.DateTime) {
            return new System.DateTime(-62135596800000 + 1); //TODO: Change to suit the newer version of DateTime.
        } else if (Bridge.Reflection.isEnum(type)) {
            return System.Enum.parse(type, 1);
        } else {
            return null;
        }
    } else if (typeof raw === "number") {
        if (type === System.Boolean) {
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
        } else if (type === String) { // TODO: https://github.com/bridgedotnet/Bridge/issues/2066
            return raw.toString();
        } else if (type === System.DateTime) {
            return new System.DateTime(-62135596800000 + System.Int64(raw | 0).div(10000)); //TODO: Change to suit the newer version of DateTime.
        } else {
            return null;
        }
    } else if (typeof raw === "string") {
        if (type === System.Boolean) {
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
        } else if (type === String) { // TODO: https://github.com/bridgedotnet/Bridge/issues/2066
            return raw;
        } else if (type === System.DateTime) {
            return new System.DateTime(raw); //TODO: Change to suit the newer version of DateTime.
        } else if (Bridge.Reflection.isEnum(type)) {
            return System.Enum.parse(type, raw);
        } else {
            return null;
        }
    } else if (typeof raw === "object") {
        if (type == System.Boolean) {
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
        } else if (type === String) { // TODO: https://github.com/bridgedotnet/Bridge/issues/2066
            return raw.toString();
        } else if (type === System.DateTime) {
            return new System.DateTime(-62135596800000); //TODO: Change to suit the newer version of DateTime.
        } else if (Bridge.Reflection.isEnum(type)) {
            return System.Enum.parse(type, 0);
        } else if (Bridge.isArray(null, type)) {
            if (raw.length === undefined) {
                return [ ];
            }

            var arr = new Array();
            System.Array.type(type.$elementType, type.$elementType || 1, arr);

            for(var i = 0; i < raw.length; i++) {
                arr[i] = Bridge.deserialize(raw[i], type.$elementType);
            }

            return raw;
        } else if (Bridge.Reflection.isAssignableFrom(System.Collections.IList, type)) {
            var typeElement = Bridge.Reflection.getGenericArguments(type)[0];
            var list = Bridge.createInstance(type);

            if(raw.length === undefined) {
                return list;
            }

            for(var i = 0; i < raw.length; i++) {
                list.add(Bridge.deserialize(raw[i], typeElement));
            }

            return list;
        } else if (Bridge.Reflection.isAssignableFrom(System.Collections.IDictionary, type)) {
            var typesGeneric = Bridge.Reflection.getGenericArguments(type);
            var typeKey = typesGeneric[0];
            var typeValue = typesGeneric[1];

            var dictionary = Bridge.createInstance(type);

            for(var each in raw)
            {
                dictionary.add(each, Bridge.deserialize(raw[each], typeValue));
            }

            return dictionary;
        } else {
            if (raw["$type"] !== undefined) {
                type = Bridge.Reflection.getType(raw["$type"].split(",")[0]);
            }

            if (type === null) {
                throw TypeError(System.String.concat("Cannot find type: ", raw["$type"]));
            }

            var o = Bridge.createInstance(type);

            var fields = Bridge.Reflection.getMembers(type, 4, 4);

            for (var i = 0; i < fields.length; i++) {
                var value = raw[fields[i].n];

                if (value !== undefined) {
                    Bridge.Reflection.fieldAccess(fields[i], o, Bridge.deserialize(value, fields[i].rt));
                }
            }

            var properties = Bridge.Reflection.getMembers(type, 16, 4);

            for (var i = 0; i < properties.length; i++) {
                var value = raw[properties[i].n];

                if (value !== undefined && !!properties[i].s) {
                    Bridge.Reflection.midel(properties[i].s, o)(Bridge.deserialize(value, properties[i].rt));
                }
            }

            return o;
        }
    }
};
