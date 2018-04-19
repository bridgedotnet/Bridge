    Bridge.define("System.Text.StringBuilderCache", {
        statics: {
            fields: {
                MAX_BUILDER_SIZE: 0,
                DEFAULT_CAPACITY: 0,
                t_cachedInstance: null
            },
            ctors: {
                init: function () {
                    this.MAX_BUILDER_SIZE = 260;
                    this.DEFAULT_CAPACITY = 16;
                }
            },
            methods: {
                Acquire: function (capacity) {
                    if (capacity === void 0) { capacity = 16; }
                    if (capacity <= System.Text.StringBuilderCache.MAX_BUILDER_SIZE) {
                        var sb = System.Text.StringBuilderCache.t_cachedInstance;
                        if (sb != null) {
                            if (capacity <= sb.getCapacity()) {
                                System.Text.StringBuilderCache.t_cachedInstance = null;
                                sb.clear();
                                return sb;
                            }
                        }
                    }
                    return new System.Text.StringBuilder("", capacity);
                },
                Release: function (sb) {
                    if (sb.getCapacity() <= System.Text.StringBuilderCache.MAX_BUILDER_SIZE) {
                        System.Text.StringBuilderCache.t_cachedInstance = sb;
                    }
                },
                GetStringAndRelease: function (sb) {
                    var result = sb.toString();
                    System.Text.StringBuilderCache.Release(sb);
                    return result;
                }
            }
        }
    });
