    Bridge.define("Bridge.Collections.EnumerableHelpers", {
        statics: {
            methods: {
                toArray: function (T, source) {
                    var count = { };
                    var results = { v : Bridge.Collections.EnumerableHelpers.toArray$1(T, source, count) };
                    System.Array.resize(results, count.v, Bridge.getDefaultValue(T));
                    return results.v;
                },
                toArray$1: function (T, source, length) {
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
                                    // MaxArrayLength is defined in Array.MaxArrayLength and in gchelpers in CoreCLR.
                                    // It represents the maximum number of elements that can be in an array where
                                    // the size of the element is greater than one byte; a separate, slightly larger constant,
                                    // is used when the size of the element is one.
                                    var MaxArrayLength = 2146435071;

                                    // This is the same growth logic as in List<T>:
                                    // If the array is currently empty, we make it a default size.  Otherwise, we attempt to
                                    // double the size of the array.  Doubling will overflow once the size of the array reaches
                                    // 2^30, since doubling to 2^31 is 1 larger than Int32.MaxValue.  In that case, we instead
                                    // constrain the length to be MaxArrayLength (this overflow check works because of of the
                                    // cast to uint).  Because a slightly larger constant is used when T is one byte in size, we
                                    // could then end up in a situation where arr.Length is MaxArrayLength or slightly larger, such
                                    // that we constrain newLength to be MaxArrayLength but the needed number of elements is actually
                                    // larger than that.  For that case, we then ensure that the newLength is large enough to hold
                                    // the desired capacity.  This does mean that in the very rare case where we've grown to such a
                                    // large size, each new element added after MaxArrayLength will end up doing a resize.
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
                            en.System$IDisposable$dispose();
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
