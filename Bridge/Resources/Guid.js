    Bridge.define("System.Guid", {
        inherits: function () {
            return [System.IComparable$1(System.Guid), System.IEquatable$1(System.Guid), System.IFormattable];
        },

        $kind: "struct",

        statics: {
            $valid: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/ig,
            $split: /^(.{8})(.{4})(.{4})(.{4})(.{12})$/,
            empty: '00000000-0000-0000-0000-000000000000',

            config: {
                alias: [
                    "equalsT", "System$IEquatable$1$System$Guid$equalsT",
                    "compareTo", "System$IComparable$1$System$Guid$compareTo",
                    "format", "System$IFormattable$format"
                ],
                init: function () {
                    this.$rng = new System.Random();
                }
            },

            instanceOf: function (instance) {
                return typeof (instance) === 'string' && instance.match(System.Guid.$valid);
            },

            getDefaultValue: function () {
                return System.Guid.empty;
            },

            parse: function (uuid, format) {
                var r = {};

                if (System.Guid.tryParse(uuid, format, r)) {
                    return r.v;
                }

                throw new System.FormatException('Unable to parse UUID');
            },

            tryParse: function (uuid, format, r) {
                var m;
                r.v = System.Guid.empty;

                if (!Bridge.hasValue(uuid)) {
                    throw new System.ArgumentNullException('uuid');
                }

                if (!format) {
                    m = /^[{(]?([0-9a-f]{8})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{12})[)}]?$/ig.exec(uuid);

                    if (m) {
                        r.v = m.slice(1).join('-').toLowerCase();

                        return true;
                    }
                } else {
                    format = format.toUpperCase();

                    if (format === 'N') {
                        m = System.Guid.$split.exec(uuid);

                        if (!m) {
                            return false;
                        }

                        uuid = m.slice(1).join('-');
                    } else if (format === 'B' || format === 'P') {
                        var b = format === 'B';

                        if (uuid[0] !== (b ? '{' : '(') || uuid[uuid.length - 1] !== (b ? '}' : ')')) {
                            return false;
                        }

                        uuid = uuid.substr(1, uuid.length - 2);
                    }

                    if (uuid.match(System.Guid.$valid)) {
                        r.v = uuid.toLowerCase();

                        return true;
                    }
                }
                return false;
            },

            format: function (uuid, format) {
                switch (format) {
                case 'n':
                case 'N':
                    return uuid.replace(/-/g, '');
                case 'b':
                case 'B':
                    return '{' + uuid + '}';
                case 'p':
                case 'P':
                    return '(' + uuid + ')';
                default:
                    return uuid;
                }
            },

            fromBytes: function (b) {
                if (!b || b.length !== 16) {
                    throw new System.ArgumentException('b', 'Must be 16 bytes');
                }

                var s = b.map(function (x) {
                    return Bridge.Int.format(x & 0xff, 'x2');
                }).join('');

                return System.Guid.$split.exec(s).slice(1).join('-');
            },

            newGuid: function () {
                var a = Array(16);

                System.Guid.$rng.nextBytes(a);
                a[6] = a[6] & 0x0f | 0x40;
                a[8] = a[8] & 0xbf | 0x80;

                return System.Guid.fromBytes(a);
            },

            getBytes: function (uuid) {
                var a = Array(16);
                var s = uuid.replace(/-/g, '');

                for (var i = 0; i < 16; i++) {
                    a[i] = parseInt(s.substr(i * 2, 2), 16);
                }

                return a;
            }
        }
    });
