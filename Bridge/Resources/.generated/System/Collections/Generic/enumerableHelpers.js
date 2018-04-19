    Bridge.define("Bridge.Collections.EnumerableHelpers", {
        statics: {
            methods: {
                ToArray: function (T, source) {
                    var count = { };
                    var results = { v : Bridge.Collections.EnumerableHelpers.ToArray$1(T, source, count) };
                    System.Array.resize(results, count.v, Bridge.getDefaultValue(T));
                    return results.v;
                },
                ToArray$1: function (T, source, length) {
                    var en = Bridge.getEnumerator(source, T);
                    try {
                        if (en.System$Collections$IEnumerator$moveNext()) {
                            var DefaultCapacity = 4;
                            var arr = { v : System.Array.init(DefaultCapacity, function (){
                                return Bridge.getDefaultValue(T);
                            }, T) };
                            arr.v[System.Array.index(0, arr.v)] = en[Bridge.geti(en, "System$Collections$Generic$IEnumerator$1$" + Bridge.getTypeAlias(T) + "$Current$1", "System$Collections$Generic$IEnumerator$1$Current$1")];
                            var count = 1;

                            while (en.System$Collections$IEnumerator$moveNext()) {
                                if (count === arr.v.length) {
                                    var MaxArrayLength = 2146435071;

                                    var newLength = count << 1;
                                    if ((newLength >>> 0) > MaxArrayLength) {
                                        newLength = MaxArrayLength <= count ? ((count + 1) | 0) : MaxArrayLength;
                                    }

                                    System.Array.resize(arr, newLength, Bridge.getDefaultValue(T));
                                }

                                arr.v[System.Array.index(Bridge.identity(count, (count = (count + 1) | 0)), arr.v)] = en[Bridge.geti(en, "System$Collections$Generic$IEnumerator$1$" + Bridge.getTypeAlias(T) + "$Current$1", "System$Collections$Generic$IEnumerator$1$Current$1")];
                            }

                            length.v = count;
                            return arr.v;
                        }
                    }
                    finally {
                        if (Bridge.hasValue(en)) {
                            en.System$IDisposable$Dispose();
                        }
                    }

                    length.v = 0;
                    return System.Array.init(0, function (){
                        return Bridge.getDefaultValue(T);
                    }, T);
                }
            }
        }
    });
