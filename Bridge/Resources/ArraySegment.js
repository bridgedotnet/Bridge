    // @source ArraySegment.js

    Bridge.Class.generic('System.ArraySegment$1', function (T) {
        var $$name = Bridge.Class.genericName('System.ArraySegment$1', T);

        return Bridge.Class.cache[$$name] || (Bridge.Class.cache[$$name] = Bridge.define($$name, {
            constructor: function (array, offset, count) {
                this.array = array;
                this.offset = offset || 0;
                this.count = count || array.length;
            },

            getArray: function () {
                return this.array;
            },

            getCount: function () {
                return this.count;
            },

            getOffset: function () {
                return this.offset;
            }
        }));
    });
