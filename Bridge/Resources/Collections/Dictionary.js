// @source /Collections/Dictionary.js

Bridge.define('System.Collections.Generic.KeyValuePair$2', function (TKey, TValue) {
    return {
        constructor: function (key, value) {
            this.key = key;
            this.value = value;
        },

        toString: function () {
            var s = "[";
            
            if (this.key != null) {
                s += this.key.toString();
            }

            s += ", ";

            if (this.value != null) {
                s += this.value.toString();
            }

            s += "]";

            return s;
        }
    };
});

Bridge.define('System.Collections.Generic.Dictionary$2', function (TKey, TValue) {
    return {
        inherits: [System.Collections.Generic.IDictionary$2(TKey, TValue)],

        config: {
            alias: [
                "getCount", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$getCount",
                "getKeys", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$getKeys",
                "getValues", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$getValues",
                "get", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$getItem",
                "set", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$setItem",
                "add", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$add",
                "containsKey", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$containsKey",
                "getEnumerator", "System$Collections$Generic$IEnumerable$1$System$Collections$Generic$KeyValuePair$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$getEnumerator",
                "remove", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$remove",
                "tryGetValue", "System$Collections$Generic$IDictionary$2$" + Bridge.getTypeAlias(TKey) + "$" + Bridge.getTypeAlias(TValue) + "$tryGetValue"
            ]
        },

        constructor: function (obj, comparer) {
            this.comparer = comparer || System.Collections.Generic.EqualityComparer$1.$default;
            this.clear();

            if (Bridge.is(obj, System.Collections.Generic.Dictionary$2(TKey, TValue))) {
                var e = Bridge.getEnumerator(obj),
                    c;

                while (e.moveNext()) {
                    c = e.getCurrent();
                    this.add(c.key, c.value);
                }
            } else if (Object.prototype.toString.call(obj) === '[object Object]') {
                var names = Bridge.getPropertyNames(obj),
                    name;

                for (var i = 0; i < names.length; i++) {
                    name = names[i];
                    this.add(name, obj[name]);
                }
            }
        },

        getKeys: function () {
            return new System.Collections.Generic.DictionaryCollection$1(TKey)(this, true);
        },

        getValues: function () {
            return new System.Collections.Generic.DictionaryCollection$1(TValue)(this, false);
        },

        clear: function () {
            this.entries = { };
            this.count = 0;
        },

        findEntry: function (key) {
            var hash = this.comparer.getHashCode2(key),
                entries,
                i;

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
                    var entries = this.entries[e];

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

            hash = this.comparer.getHashCode2(key);
            entry = new System.Collections.Generic.KeyValuePair$2(TKey, TValue)(key, value);

            if (this.entries[hash]) {
                this.entries[hash].push(entry);
            } else {
                this.entries[hash] = [entry];
            }

            this.count++;
        },

        setItem: function (key, value, add) {
            this.set(key, value, add);
        },

        add: function (key, value) {
            this.set(key, value, true);
        },

        remove: function (key) {
            var hash = this.comparer.getHashCode2(key),
                entries,
                i;

            if (!this.entries[hash]) {
                return false;
            }

            entries = this.entries[hash];

            for (i = 0; i < entries.length; i++) {
                if (this.comparer.equals2(entries[i].key, key)) {
                    entries.splice(i, 1);

                    if (entries.length == 0) {
                        delete this.entries[hash];
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
            var hashes = Bridge.getPropertyNames(this.entries),
                hashIndex = -1,
                keyIndex;

            return new Bridge.CustomEnumerator(function () {
                if (hashIndex < 0 || keyIndex >= (this.entries[hashes[hashIndex]].length - 1)) {
                    keyIndex = -1;
                    hashIndex++;
                }

                if (hashIndex >= hashes.length) {
                    return false;
                }

                keyIndex++;

                return true;
            }, function () {
                return fn(this.entries[hashes[hashIndex]][keyIndex]);
            }, function () {
                hashIndex = -1;
            }, null, this);
        },

        getEnumerator: function () {
            return this.getCustomEnumerator(function (e) {
                 return e;
            });
        }
    };
});

Bridge.define('System.Collections.Generic.DictionaryCollection$1', function (T) {
    return {
        inherits: [System.Collections.Generic.ICollection$1(T)],

        config: {
            alias: [
              "getEnumerator", "System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$getEnumerator",
              "getCount", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$getCount",
              "add", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$add",
              "clear", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$clear",
              "contains", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$contains",
              "remove", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$remove"
            ]
        },

        constructor: function (dictionary, keys) {
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
