    Bridge.define('System.Collections.Generic.Dictionary$2', function (TKey, TValue) {
        return {
            inherits: [System.Collections.Generic.IDictionary$2(TKey, TValue),
                System.Collections.IDictionary,
                System.Collections.Generic.IReadOnlyDictionary$2(TKey, TValue)],

            config: {
                properties: {
                    Keys: {
                        get: function () {
                            return this.getKeys();
                        }
                    },

                    Values: {
                        get: function () {
                            return this.getValues();
                        }
                    },

                    IsReadOnly: {
                        get: function () {
                            return this.getIsReadOnly();
                        }
                    }
                },
                alias: [
                    "getCount", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(System.Collections.Generic.KeyValuePair$2(TKey, TValue)) + "$getCount",
                    "getKeys", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$getKeys",
                    "getValues", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$getValues",
                    "Keys", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$Keys",
                    "Values", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$Values",
                    "get", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$getItem",
                    "set", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$setItem",
                    "add", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$add",
                    "containsKey", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$containsKey",
                    "getEnumerator", ["System$Collections$Generic$IEnumerable$1$System$Collections$Generic$KeyValuePair$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$getEnumerator", "System$Collections$Generic$IEnumerable$1$getEnumerator"],
                    "remove", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$remove",
                    "tryGetValue", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$tryGetValue",
                    "getIsReadOnly", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(System.Collections.Generic.KeyValuePair$2(TKey, TValue)) + "$getIsReadOnly",
                    "IsReadOnly", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(System.Collections.Generic.KeyValuePair$2(TKey, TValue)) + "$IsReadOnly",
                    "addPair", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(System.Collections.Generic.KeyValuePair$2(TKey, TValue)) + "$add",
                    "copyTo", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(System.Collections.Generic.KeyValuePair$2(TKey, TValue)) + "$copyTo",
                    "clear", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(System.Collections.Generic.KeyValuePair$2(TKey, TValue)) + "$clear",
                    "containsPair", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(System.Collections.Generic.KeyValuePair$2(TKey, TValue)) + "$contains",
                    "removePair", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(System.Collections.Generic.KeyValuePair$2(TKey, TValue)) + "$remove",
                    "copyTo", "System$Collections$ICollection$copyTo",
                    "get", "System$Collections$IDictionary$getItem",
                    "set", "System$Collections$IDictionary$setItem",
                    "containsKey", "System$Collections$IDictionary$containsKey",
                    "add", "System$Collections$IDictionary$add",
                    "remove", "System$Collections$IDictionary$remove",
                    "getIsReadOnly", "System$Collections$IDictionary$getIsReadOnly",
                    "getKeys", "System$Collections$IDictionary$getKeys",
                    "getValues", "System$Collections$IDictionary$getValues",
                    "IsReadOnly", "System$Collections$IDictionary$IsReadOnly",
                    "Keys", "System$Collections$IDictionary$Keys",
                    "Values", "System$Collections$IDictionary$Values",
                    "get", "System$Collections$Generic$IReadOnlyDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$getItem",
                    "Keys", "System$Collections$Generic$IReadOnlyDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$Keys",
                    "getKeys", "System$Collections$Generic$IReadOnlyDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$getKeys",
                    "getValues", "System$Collections$Generic$IReadOnlyDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$getValues",
                    "Values", "System$Collections$Generic$IReadOnlyDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$Values",
                    "containsKey", "System$Collections$Generic$IReadOnlyDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$containsKey",
                    "tryGetValue", "System$Collections$Generic$IReadOnlyDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$tryGetValue"
                ]
            },

            noKeyCheck: false,

            ctor: function (obj, comparer) {
                this.$initialize();
                this.comparer = comparer || System.Collections.Generic.EqualityComparer$1(TKey).def;
                this.clear();
                this.isSimpleKey = ((TKey === System.String) || (TKey.$number === true && TKey !== System.Int64 && TKey !== System.UInt64) || (TKey === System.Char)) && (this.comparer === System.Collections.Generic.EqualityComparer$1(TKey).def);

                if (Bridge.is(obj, System.Collections.Generic.Dictionary$2(TKey, TValue))) {
                    var e = Bridge.getEnumerator(obj),
                        c;

                    while (e.moveNext()) {
                        c = e.Current;
                        this.add(c.key, c.value);
                    }
                } else if (Object.prototype.toString.call(obj) === '[object Object]') {
                    var names = Object.keys(obj),
                        name;

                    for (var i = 0; i < names.length; i++) {
                        name = names[i];
                        this.add(name, obj[name]);
                    }
                }
            },

            containsPair: function (pair) {
                var entry = this.findEntry(pair.key);
                return entry && this.comparer.equals2(entry.value, pair.value);
            },

            removePair: function (pair) {
                var entry = this.findEntry(pair.key);
                if (entry && this.comparer.equals2(entry.value, pair.value)) {
                    this.remove(pair.key);
                    return true;
                }

                return false;
            },

            copyTo: function (array, arrayIndex) {
                var items = System.Linq.Enumerable.from(this).toArray();
                System.Array.copy(items, 0, array, arrayIndex, items.length);
            },

            getIsReadOnly: function () {
                return !!this.readOnly;
            },

            getKeys: function () {
                if (this.isSimpleKey) {
                    return System.Array.init(this.keys, TKey);
                }

                return new (System.Collections.Generic.DictionaryCollection$1(TKey))(this, true);
            },

            getValues: function () {
                if (this.isSimpleKey) {
                    var values = [];

                    for (var i = 0; i < this.keys.length; i++) {
                        values.push(this.entries[this.keys[i]].value);
                    }

                    return System.Array.init(values, TValue);
                }

                return new (System.Collections.Generic.DictionaryCollection$1(TValue))(this, false);
            },

            clear: function () {
                this.entries = {};
                this.keys = [];
                this.count = 0;
            },

            findEntry: function (key) {
                var hash, entries, i;

                if (this.isSimpleKey) {
                    if (this.entries.hasOwnProperty(key)) {
                        return this.entries[key];
                    }
                    return;
                }

                hash = this.comparer.getHashCode2(key);

                if (Bridge.isDefined(this.entries[hash])) {
                    entries = this.entries[hash];

                    for (i = 0; i < entries.length; i++) {
                        if (this.comparer.equals2(entries[i].key, key)) {
                            return entries[i];
                        }
                    }
                }
            },

            containsKey: function (key) {
                return !!this.findEntry(key);
            },

            containsValue: function (value) {
                var e, i;

                for (e in this.entries) {
                    if (this.entries.hasOwnProperty(e)) {
                        var entries = this.isSimpleKey ? [this.entries[e]] : this.entries[e];

                        for (i = 0; i < entries.length; i++) {
                            if (this.comparer.equals2(entries[i].value, value)) {
                                return true;
                            }
                        }
                    }
                }

                return false;
            },

            get: function (key) {
                var entry = this.findEntry(key);

                if (!entry) {
                    if (this.noKeyCheck) {
                        return Bridge.getDefaultValue(TValue);
                    }

                    throw new System.Collections.Generic.KeyNotFoundException('Key ' + key + ' does not exist.');
                }

                return entry.value;
            },

            getItem: function (key) {
                return this.get(key);
            },

            set: function (key, value, add) {
                var entry = this.findEntry(key),
                    hash;

                if (entry) {
                    if (add) {
                        throw new System.ArgumentException('Key ' + key + ' already exists.');
                    }

                    entry.value = value;
                    return;
                }

                entry = new (System.Collections.Generic.KeyValuePair$2(TKey, TValue))(key, value);

                if (this.isSimpleKey) {
                    this.entries[key] = entry;
                    this.keys.push(key);
                }
                else {
                    hash = this.comparer.getHashCode2(key);

                    if (this.entries[hash]) {
                        this.entries[hash].push(entry);
                    } else {
                        this.entries[hash] = [entry];
                        this.keys.push(hash);
                    }
                }

                this.count++;
            },

            setItem: function (key, value, add) {
                this.set(key, value, add);
            },

            add: function (key, value) {
                this.set(key, value, true);
            },

            addPair: function (pair) {
                this.set(pair.key, pair.value, true);
            },

            remove: function (key) {
                var hash, entries, i;

                if (this.isSimpleKey) {
                    if (this.entries.hasOwnProperty(key)) {
                        delete this.entries[key];
                        this.keys.splice(this.keys.indexOf(key), 1);
                        this.count--;
                        return true;
                    }
                    return false;
                }

                hash = this.comparer.getHashCode2(key);

                if (!this.entries[hash]) {
                    return false;
                }

                entries = this.entries[hash];

                for (i = 0; i < entries.length; i++) {
                    if (this.comparer.equals2(entries[i].key, key)) {
                        entries.splice(i, 1);

                        if (entries.length == 0) {
                            delete this.entries[hash];
                            this.keys.splice(this.keys.indexOf(hash), 1);
                        }

                        this.count--;

                        return true;
                    }
                }

                return false;
            },

            getCount: function () {
                return this.count;
            },

            getComparer: function () {
                return this.comparer;
            },

            tryGetValue: function (key, value) {
                var entry = this.findEntry(key);

                value.v = entry ? entry.value : Bridge.getDefaultValue(TValue);

                return !!entry;
            },

            getCustomEnumerator: function (fn) {
                var hashes = this.keys,
                    hashIndex = -1,
                    keyIndex;

                return new Bridge.CustomEnumerator(function () {
                    if (hashIndex < 0 || this.isSimpleKey || keyIndex >= (this.entries[hashes[hashIndex]].length - 1)) {
                        keyIndex = -1;
                        hashIndex++;
                    }

                    if (hashIndex >= hashes.length) {
                        return false;
                    }

                    keyIndex++;

                    return true;
                }, function () {
                    if (hashIndex < 0 || hashIndex >= hashes.length) {
                        return new (System.Collections.Generic.KeyValuePair$2(TKey, TValue))()
                    }

                    return fn(this.isSimpleKey ? this.entries[hashes[hashIndex]] : this.entries[hashes[hashIndex]][keyIndex]);
                }, function () {
                    hashIndex = -1;
                }, null, this, System.Collections.Generic.KeyValuePair$2(TKey, TValue));
            },

            getEnumerator: function () {
                return this.getCustomEnumerator(function (e) {
                    return e;
                });
            }
        };
    });

    System.Collections.Generic.Dictionary$2.getTypeParameters = function (type) {
        var interfaceType;
        if (System.String.startsWith(type.$$name, "System.Collections.Generic.IDictionary")) {
            interfaceType = type;
        } else {
            var interfaces = Bridge.Reflection.getInterfaces(type);

            for (var j = 0; j < interfaces.length; j++) {
                if (System.String.startsWith(interfaces[j].$$name, "System.Collections.Generic.IDictionary")) {
                    interfaceType = interfaces[j];
                    break;
                }
            }
        }

        var typesGeneric = interfaceType ? Bridge.Reflection.getGenericArguments(interfaceType) : null;
        var typeKey = typesGeneric ? typesGeneric[0] : null;
        var typeValue = typesGeneric ? typesGeneric[1] : null;

        return [typeKey, typeValue];
    };

    Bridge.define('System.Collections.Generic.DictionaryCollection$1', function (T) {
        return {
            inherits: [System.Collections.Generic.ICollection$1(T)],

            config: {
                alias: [
                  "getEnumerator", ["System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$getEnumerator", "System$Collections$Generic$IEnumerable$1$getEnumerator"],
                  "getCount", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$getCount",
                  "add", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$add",
                  "clear", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$clear",
                  "contains", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$contains",
                  "remove", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$remove"
                ]
            },

            ctor: function (dictionary, keys) {
                this.$initialize();
                this.dictionary = dictionary;
                this.keys = keys;
            },

            getCount: function () {
                return this.dictionary.getCount();
            },

            getEnumerator: function () {
                return this.dictionary.getCustomEnumerator(this.keys ? function (e) {
                    return e.key;
                } : function (e) {
                    return e.value;
                });
            },

            contains: function (value) {
                return this.keys ? this.dictionary.containsKey(value) : this.dictionary.containsValue(value);
            },

            add: function (v) {
                throw new System.NotSupportedException();
            },

            clear: function () {
                throw new System.NotSupportedException();
            },

            remove: function () {
                throw new System.NotSupportedException();
            }
        };
    });
