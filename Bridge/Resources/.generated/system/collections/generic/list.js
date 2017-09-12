    Bridge.define("System.Collections.Generic.List$1", function (T) { return {
        inherits: [System.Collections.Generic.IList$1(T),System.Collections.IList,System.Collections.Generic.IReadOnlyList$1(T)],
        statics: {
            fields: {
                _defaultCapacity: 0,
                _emptyArray: null
            },
            ctors: {
                init: function () {
                    this._defaultCapacity = 4;
                    this._emptyArray = System.Array.init(0, function (){
                        return Bridge.getDefaultValue(T);
                    }, T);
                }
            },
            methods: {
                isCompatibleObject: function (value) {
                    // Non-null values are fine.  Only accept nulls if T is a class or Nullable<U>.
                    // Note that default(T) is not equal to null for value types except when T is Nullable<U>. 
                    return ((Bridge.is(value, T)) || (value == null && Bridge.getDefaultValue(T) == null));
                }
            }
        },
        fields: {
            _items: null,
            _size: 0,
            _version: 0
        },
        props: {
            Capacity: {
                get: function () {
                    return this._items.length;
                },
                set: function (value) {
                    if (value < this._size) {
                        throw new System.ArgumentOutOfRangeException("value");
                    }

                    if (value !== this._items.length) {
                        if (value > 0) {
                            var newItems = System.Array.init(value, function (){
                                return Bridge.getDefaultValue(T);
                            }, T);
                            if (this._size > 0) {
                                System.Array.copy(this._items, 0, newItems, 0, this._size);
                            }
                            this._items = newItems;
                        } else {
                            this._items = System.Collections.Generic.List$1(T)._emptyArray;
                        }
                    }
                }
            },
            Count: {
                get: function () {
                    return this._size;
                }
            },
            System$Collections$Generic$ICollection$1$IsReadOnly: {
                get: function () {
                    return false;
                }
            },
            System$Collections$IList$IsReadOnly: {
                get: function () {
                    return false;
                }
            }
        },
        alias: [
            "Count", "System$Collections$Generic$IReadOnlyCollection$1$" + Bridge.getTypeAlias(T) + "$Count",
            "Count", "System$Collections$ICollection$Count",
            "Count", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$Count",
            "System$Collections$Generic$ICollection$1$IsReadOnly", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$IsReadOnly",
            "getItem", "System$Collections$Generic$IReadOnlyList$1$" + Bridge.getTypeAlias(T) + "$getItem",
            "setItem", "System$Collections$Generic$IReadOnlyList$1$" + Bridge.getTypeAlias(T) + "$setItem",
            "getItem", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$getItem",
            "setItem", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$setItem",
            "add", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$add",
            "clear", "System$Collections$IList$clear",
            "clear", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$clear",
            "contains", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$contains",
            "copyTo", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$copyTo",
            "System$Collections$Generic$IEnumerable$1$getEnumerator", "System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$getEnumerator",
            "indexOf", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$indexOf",
            "insert", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$insert",
            "remove", "System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$remove",
            "removeAt", "System$Collections$IList$removeAt",
            "removeAt", "System$Collections$Generic$IList$1$" + Bridge.getTypeAlias(T) + "$removeAt"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                this._items = System.Collections.Generic.List$1(T)._emptyArray;
            },
            $ctor2: function (capacity) {
                this.$initialize();
                if (capacity < 0) {
                    throw new System.ArgumentOutOfRangeException("capacity");
                }

                if (capacity === 0) {
                    this._items = System.Collections.Generic.List$1(T)._emptyArray;
                } else {
                    this._items = System.Array.init(capacity, function (){
                        return Bridge.getDefaultValue(T);
                    }, T);
                }
            },
            $ctor1: function (collection) {
                this.$initialize();
                if (collection == null) {
                    throw new System.ArgumentNullException("collection");
                }

                var c = Bridge.as(collection, System.Collections.Generic.ICollection$1(T));
                if (c != null) {
                    var count = System.Array.getCount(c, T);
                    if (count === 0) {
                        this._items = System.Collections.Generic.List$1(T)._emptyArray;
                    } else {
                        this._items = System.Array.init(count, function (){
                            return Bridge.getDefaultValue(T);
                        }, T);
                        System.Array.copyTo(c, this._items, 0, T);
                        this._size = count;
                    }
                } else {
                    this._size = 0;
                    this._items = System.Collections.Generic.List$1(T)._emptyArray;
                    // This enumerable could be empty.  Let Add allocate a new array, if needed.
                    // Note it will also go to _defaultCapacity first, not 1, then 2, etc.

                    var en = Bridge.getEnumerator(collection, T);
                    try {
                        while (en.System$Collections$IEnumerator$moveNext()) {
                            this.add(en[Bridge.geti(en, "System$Collections$Generic$IEnumerator$1$" + Bridge.getTypeAlias(T) + "$Current$1", "System$Collections$Generic$IEnumerator$1$Current$1")]);
                        }
                    }
                    finally {
                        if (Bridge.hasValue(en)) {
                            en.System$IDisposable$dispose();
                        }
                    }
                }
            }
        },
        methods: {
            getItem: function (index) {
                // Following trick can reduce the range check by one
                if ((index >>> 0) >= (this._size >>> 0)) {
                    throw new System.ArgumentOutOfRangeException();
                }
                return this._items[System.Array.index(index, this._items)];
            },
            setItem: function (index, value) {
                if ((index >>> 0) >= (this._size >>> 0)) {
                    throw new System.ArgumentOutOfRangeException();
                }
                this._items[System.Array.index(index, this._items)] = value;
                this._version = (this._version + 1) | 0;
            },
            System$Collections$IList$getItem: function (index) {
                return this.getItem(index);
            },
            System$Collections$IList$setItem: function (index, value) {
                if (value == null && !(Bridge.getDefaultValue(T) == null)) {
                    throw new System.ArgumentNullException("value");
                }

                try {
                    this.setItem(index, Bridge.cast(Bridge.unbox(value), T));
                }
                catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    if (Bridge.is($e1, System.InvalidCastException)) {
                        throw new System.ArgumentException("value");
                    } else {
                        throw $e1;
                    }
                }
            },
            add: function (item) {
                if (this._size === this._items.length) {
                    this.ensureCapacity(((this._size + 1) | 0));
                }
                this._items[System.Array.index(Bridge.identity(this._size, (this._size = (this._size + 1) | 0)), this._items)] = item;
                this._version = (this._version + 1) | 0;
            },
            System$Collections$IList$add: function (item) {
                if (item == null && !(Bridge.getDefaultValue(T) == null)) {
                    throw new System.ArgumentNullException("item");
                }

                try {
                    this.add(Bridge.cast(Bridge.unbox(item), T));
                }
                catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    if (Bridge.is($e1, System.InvalidCastException)) {
                        throw new System.ArgumentException("item");
                    } else {
                        throw $e1;
                    }
                }

                return ((this.Count - 1) | 0);
            },
            addRange: function (collection) {
                this.insertRange(this._size, collection);
            },
            asReadOnly: function () {
                return new (System.Collections.ObjectModel.ReadOnlyCollection$1(T))(this);
            },
            binarySearch$2: function (index, count, item, comparer) {
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException("index");
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count");
                }
                if (((this._size - index) | 0) < count) {
                    throw new System.ArgumentException();
                }

                return System.Array.binarySearch(this._items, index, count, item, comparer);
            },
            binarySearch: function (item) {
                return this.binarySearch$2(0, this.Count, item, null);
            },
            binarySearch$1: function (item, comparer) {
                return this.binarySearch$2(0, this.Count, item, comparer);
            },
            clear: function () {
                if (this._size > 0) {
                    System.Array.fill(this._items, Bridge.getDefaultValue(T), 0, this._size); // Don't need to doc this but we clear the elements so that the gc can reclaim the references.
                    this._size = 0;
                }
                this._version = (this._version + 1) | 0;
            },
            contains: function (item) {
                if (item == null) {
                    for (var i = 0; i < this._size; i = (i + 1) | 0) {
                        if (this._items[System.Array.index(i, this._items)] == null) {
                            return true;
                        }
                    }
                    return false;
                } else {
                    var c = System.Collections.Generic.EqualityComparer$1(T).def;
                    for (var i1 = 0; i1 < this._size; i1 = (i1 + 1) | 0) {
                        if (c.equals2(this._items[System.Array.index(i1, this._items)], item)) {
                            return true;
                        }
                    }
                    return false;
                }
            },
            System$Collections$IList$contains: function (item) {
                if (System.Collections.Generic.List$1(T).isCompatibleObject(item)) {
                    return this.contains(Bridge.cast(Bridge.unbox(item), T));
                }
                return false;
            },
            convertAll: function (TOutput, converter) {
                if (Bridge.staticEquals(converter, null)) {
                    throw new System.ArgumentNullException("converter");
                }

                var list = new (System.Collections.Generic.List$1(TOutput)).$ctor2(this._size);
                for (var i = 0; i < this._size; i = (i + 1) | 0) {
                    list._items[System.Array.index(i, list._items)] = converter(this._items[System.Array.index(i, this._items)]);
                }
                list._size = this._size;
                return list;
            },
            copyTo$1: function (array) {
                this.copyTo(array, 0);
            },
            System$Collections$ICollection$copyTo: function (array, arrayIndex) {
                if ((array != null) && (System.Array.getRank(array) !== 1)) {
                    throw new System.ArgumentException("array");
                }

                System.Array.copy(this._items, 0, array, arrayIndex, this._size);
            },
            copyTo$2: function (index, array, arrayIndex, count) {
                if (((this._size - index) | 0) < count) {
                    throw new System.ArgumentException();
                }

                // Delegate rest of error checking to Array.Copy.
                System.Array.copy(this._items, index, array, arrayIndex, count);
            },
            copyTo: function (array, arrayIndex) {
                // Delegate rest of error checking to Array.Copy.
                System.Array.copy(this._items, 0, array, arrayIndex, this._size);
            },
            ensureCapacity: function (min) {
                if (this._items.length < min) {
                    var newCapacity = this._items.length === 0 ? System.Collections.Generic.List$1(T)._defaultCapacity : Bridge.Int.mul(this._items.length, 2);
                    // Allow the list to grow to maximum possible capacity (~2G elements) before encountering overflow.
                    // Note that this check works even when _items.Length overflowed thanks to the (uint) cast
                    if ((newCapacity >>> 0) > 2146435071) {
                        newCapacity = 2146435071;
                    }
                    if (newCapacity < min) {
                        newCapacity = min;
                    }
                    this.Capacity = newCapacity;
                }
            },
            exists: function (match) {
                return this.findIndex$2(match) !== -1;
            },
            find: function (match) {
                if (Bridge.staticEquals(match, null)) {
                    throw new System.ArgumentNullException("match");
                }

                for (var i = 0; i < this._size; i = (i + 1) | 0) {
                    if (match(this._items[System.Array.index(i, this._items)])) {
                        return this._items[System.Array.index(i, this._items)];
                    }
                }
                return Bridge.getDefaultValue(T);
            },
            findAll: function (match) {
                if (Bridge.staticEquals(match, null)) {
                    throw new System.ArgumentNullException("match");
                }

                var list = new (System.Collections.Generic.List$1(T)).ctor();
                for (var i = 0; i < this._size; i = (i + 1) | 0) {
                    if (match(this._items[System.Array.index(i, this._items)])) {
                        list.add(this._items[System.Array.index(i, this._items)]);
                    }
                }
                return list;
            },
            findIndex$2: function (match) {
                return this.findIndex(0, this._size, match);
            },
            findIndex$1: function (startIndex, match) {
                return this.findIndex(startIndex, ((this._size - startIndex) | 0), match);
            },
            findIndex: function (startIndex, count, match) {
                if ((startIndex >>> 0) > (this._size >>> 0)) {
                    throw new System.ArgumentOutOfRangeException("startIndex");
                }

                if (count < 0 || startIndex > ((this._size - count) | 0)) {
                    throw new System.ArgumentOutOfRangeException("count");
                }

                if (Bridge.staticEquals(match, null)) {
                    throw new System.ArgumentNullException("match");
                }

                var endIndex = (startIndex + count) | 0;
                for (var i = startIndex; i < endIndex; i = (i + 1) | 0) {
                    if (match(this._items[System.Array.index(i, this._items)])) {
                        return i;
                    }
                }
                return -1;
            },
            findLast: function (match) {
                if (Bridge.staticEquals(match, null)) {
                    throw new System.ArgumentNullException("match");
                }

                for (var i = (this._size - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    if (match(this._items[System.Array.index(i, this._items)])) {
                        return this._items[System.Array.index(i, this._items)];
                    }
                }
                return Bridge.getDefaultValue(T);
            },
            findLastIndex$2: function (match) {
                return this.findLastIndex(((this._size - 1) | 0), this._size, match);
            },
            findLastIndex$1: function (startIndex, match) {
                return this.findLastIndex(startIndex, ((startIndex + 1) | 0), match);
            },
            findLastIndex: function (startIndex, count, match) {
                if (Bridge.staticEquals(match, null)) {
                    throw new System.ArgumentNullException("match");
                }

                if (this._size === 0) {
                    // Special case for 0 length List
                    if (startIndex !== -1) {
                        throw new System.ArgumentOutOfRangeException("startIndex");
                    }
                } else {
                    // Make sure we're not out of range            
                    if ((startIndex >>> 0) >= (this._size >>> 0)) {
                        throw new System.ArgumentOutOfRangeException("startIndex");
                    }
                }

                // 2nd have of this also catches when startIndex == MAXINT, so MAXINT - 0 + 1 == -1, which is < 0.
                if (count < 0 || ((((startIndex - count) | 0) + 1) | 0) < 0) {
                    throw new System.ArgumentOutOfRangeException("count");
                }

                var endIndex = (startIndex - count) | 0;
                for (var i = startIndex; i > endIndex; i = (i - 1) | 0) {
                    if (match(this._items[System.Array.index(i, this._items)])) {
                        return i;
                    }
                }
                return -1;
            },
            forEach: function (action) {
                if (Bridge.staticEquals(action, null)) {
                    throw new System.ArgumentNullException("match");
                }

                var version = this._version;

                for (var i = 0; i < this._size; i = (i + 1) | 0) {
                    if (version !== this._version) {
                        break;
                    }
                    action(this._items[System.Array.index(i, this._items)]);
                }

                if (version !== this._version) {
                    throw new System.InvalidOperationException();
                }
            },
            getEnumerator: function () {
                return new (System.Collections.Generic.List$1.Enumerator(T)).$ctor1(this);
            },
            System$Collections$Generic$IEnumerable$1$getEnumerator: function () {
                return new (System.Collections.Generic.List$1.Enumerator(T)).$ctor1(this).$clone();
            },
            System$Collections$IEnumerable$getEnumerator: function () {
                return new (System.Collections.Generic.List$1.Enumerator(T)).$ctor1(this).$clone();
            },
            getRange: function (index, count) {
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException("index");
                }

                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count");
                }

                if (((this._size - index) | 0) < count) {
                    throw new System.ArgumentException();
                }

                var list = new (System.Collections.Generic.List$1(T)).$ctor2(count);
                System.Array.copy(this._items, index, list._items, 0, count);
                list._size = count;
                return list;
            },
            indexOf: function (item) {
                return System.Array.indexOfT(this._items, item, 0, this._size);
            },
            System$Collections$IList$indexOf: function (item) {
                if (System.Collections.Generic.List$1(T).isCompatibleObject(item)) {
                    return this.indexOf(Bridge.cast(Bridge.unbox(item), T));
                }
                return -1;
            },
            indexOf$1: function (item, index) {
                if (index > this._size) {
                    throw new System.ArgumentOutOfRangeException("index");
                }
                return System.Array.indexOfT(this._items, item, index, ((this._size - index) | 0));
            },
            indexOf$2: function (item, index, count) {
                if (index > this._size) {
                    throw new System.ArgumentOutOfRangeException("index");
                }

                if (count < 0 || index > ((this._size - count) | 0)) {
                    throw new System.ArgumentOutOfRangeException("count");
                }

                return System.Array.indexOfT(this._items, item, index, count);
            },
            insert: function (index, item) {
                // Note that insertions at the end are legal.
                if ((index >>> 0) > (this._size >>> 0)) {
                    throw new System.ArgumentOutOfRangeException("index");
                }
                if (this._size === this._items.length) {
                    this.ensureCapacity(((this._size + 1) | 0));
                }
                if (index < this._size) {
                    System.Array.copy(this._items, index, this._items, ((index + 1) | 0), ((this._size - index) | 0));
                }
                this._items[System.Array.index(index, this._items)] = item;
                this._size = (this._size + 1) | 0;
                this._version = (this._version + 1) | 0;
            },
            System$Collections$IList$insert: function (index, item) {
                if (item == null && !(Bridge.getDefaultValue(T) == null)) {
                    throw new System.ArgumentNullException("item");
                }

                try {
                    this.insert(index, Bridge.cast(Bridge.unbox(item), T));
                }
                catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    if (Bridge.is($e1, System.InvalidCastException)) {
                        throw new System.ArgumentException("item");
                    } else {
                        throw $e1;
                    }
                }
            },
            insertRange: function (index, collection) {
                if (collection == null) {
                    throw new System.ArgumentNullException("collection");
                }

                if ((index >>> 0) > (this._size >>> 0)) {
                    throw new System.ArgumentOutOfRangeException("index");
                }

                var c = Bridge.as(collection, System.Collections.Generic.ICollection$1(T));
                if (c != null) { // if collection is ICollection<T>
                    var count = System.Array.getCount(c, T);
                    if (count > 0) {
                        this.ensureCapacity(((this._size + count) | 0));
                        if (index < this._size) {
                            System.Array.copy(this._items, index, this._items, ((index + count) | 0), ((this._size - index) | 0));
                        }

                        // If we're inserting a List into itself, we want to be able to deal with that.
                        if (Bridge.referenceEquals(this, c)) {
                            // Copy first part of _items to insert location
                            System.Array.copy(this._items, 0, this._items, index, index);
                            // Copy last part of _items back to inserted location
                            System.Array.copy(this._items, ((index + count) | 0), this._items, Bridge.Int.mul(index, 2), ((this._size - index) | 0));
                        } else {
                            var itemsToInsert = System.Array.init(count, function (){
                                return Bridge.getDefaultValue(T);
                            }, T);
                            System.Array.copyTo(c, itemsToInsert, 0, T);
                            System.Array.copy(itemsToInsert, 0, this._items, index, itemsToInsert.length);
                        }
                        this._size = (this._size + count) | 0;
                    }
                } else {
                    var en = Bridge.getEnumerator(collection, T);
                    try {
                        while (en.System$Collections$IEnumerator$moveNext()) {
                            this.insert(Bridge.identity(index, (index = (index + 1) | 0)), en[Bridge.geti(en, "System$Collections$Generic$IEnumerator$1$" + Bridge.getTypeAlias(T) + "$Current$1", "System$Collections$Generic$IEnumerator$1$Current$1")]);
                        }
                    }
                    finally {
                        if (Bridge.hasValue(en)) {
                            en.System$IDisposable$dispose();
                        }
                    }
                }
                this._version = (this._version + 1) | 0;
            },
            lastIndexOf: function (item) {
                if (this._size === 0) { // Special case for empty list
                    return -1;
                } else {
                    return this.lastIndexOf$2(item, ((this._size - 1) | 0), this._size);
                }
            },
            lastIndexOf$1: function (item, index) {
                if (index >= this._size) {
                    throw new System.ArgumentOutOfRangeException("index");
                }
                return this.lastIndexOf$2(item, index, ((index + 1) | 0));
            },
            lastIndexOf$2: function (item, index, count) {
                if ((this.Count !== 0) && (index < 0)) {
                    throw new System.ArgumentOutOfRangeException("index");
                }

                if ((this.Count !== 0) && (count < 0)) {
                    throw new System.ArgumentOutOfRangeException("count");
                }

                if (this._size === 0) { // Special case for empty list
                    return -1;
                }

                if (index >= this._size) {
                    throw new System.ArgumentOutOfRangeException("index");
                }

                if (count > ((index + 1) | 0)) {
                    throw new System.ArgumentOutOfRangeException("count");
                }

                return System.Array.lastIndexOfT(this._items, item, index, count);
            },
            remove: function (item) {
                var index = this.indexOf(item);
                if (index >= 0) {
                    this.removeAt(index);
                    return true;
                }

                return false;
            },
            System$Collections$IList$remove: function (item) {
                if (System.Collections.Generic.List$1(T).isCompatibleObject(item)) {
                    this.remove(Bridge.cast(Bridge.unbox(item), T));
                }
            },
            removeAll: function (match) {
                if (Bridge.staticEquals(match, null)) {
                    throw new System.ArgumentNullException("match");
                }

                var freeIndex = 0; // the first free slot in items array

                // Find the first item which needs to be removed.
                while (freeIndex < this._size && !match(this._items[System.Array.index(freeIndex, this._items)])) {
                    freeIndex = (freeIndex + 1) | 0;
                }
                if (freeIndex >= this._size) {
                    return 0;
                }

                var current = (freeIndex + 1) | 0;
                while (current < this._size) {
                    // Find the first item which needs to be kept.
                    while (current < this._size && match(this._items[System.Array.index(current, this._items)])) {
                        current = (current + 1) | 0;
                    }

                    if (current < this._size) {
                        // copy item to the free slot.
                        this._items[System.Array.index(Bridge.identity(freeIndex, (freeIndex = (freeIndex + 1) | 0)), this._items)] = this._items[System.Array.index(Bridge.identity(current, (current = (current + 1) | 0)), this._items)];
                    }
                }

                System.Array.fill(this._items, Bridge.getDefaultValue(T), freeIndex, ((this._size - freeIndex) | 0));
                var result = (this._size - freeIndex) | 0;
                this._size = freeIndex;
                this._version = (this._version + 1) | 0;
                return result;
            },
            removeAt: function (index) {
                if ((index >>> 0) >= (this._size >>> 0)) {
                    throw new System.ArgumentOutOfRangeException();
                }
                this._size = (this._size - 1) | 0;
                if (index < this._size) {
                    System.Array.copy(this._items, ((index + 1) | 0), this._items, index, ((this._size - index) | 0));
                }
                this._items[System.Array.index(this._size, this._items)] = Bridge.getDefaultValue(T);
                this._version = (this._version + 1) | 0;
            },
            removeRange: function (index, count) {
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException("index");
                }

                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count");
                }

                if (((this._size - index) | 0) < count) {
                    throw new System.ArgumentException();
                }

                if (count > 0) {
                    var i = this._size;
                    this._size = (this._size - count) | 0;
                    if (index < this._size) {
                        System.Array.copy(this._items, ((index + count) | 0), this._items, index, ((this._size - index) | 0));
                    }
                    System.Array.fill(this._items, Bridge.getDefaultValue(T), this._size, count);
                    this._version = (this._version + 1) | 0;
                }
            },
            reverse: function () {
                this.reverse$1(0, this.Count);
            },
            reverse$1: function (index, count) {
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException("index");
                }

                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count");
                }

                if (((this._size - index) | 0) < count) {
                    throw new System.ArgumentException();
                }
                System.Array.reverse(this._items, index, count);
                this._version = (this._version + 1) | 0;
            },
            sort: function () {
                this.sort$3(0, this.Count, null);
            },
            sort$1: function (comparer) {
                this.sort$3(0, this.Count, comparer);
            },
            sort$3: function (index, count, comparer) {
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException("index");
                }

                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count");
                }

                if (((this._size - index) | 0) < count) {
                    throw new System.ArgumentException();
                }

                System.Array.sort(this._items, index, count, comparer);
                this._version = (this._version + 1) | 0;
            },
            sort$2: function (comparison) {
                if (Bridge.staticEquals(comparison, null)) {
                    throw new System.ArgumentNullException("comparison");
                }

                if (this._size > 0) {
                    System.Array.sort(this._items, comparison);
                }
            },
            toArray: function () {

                var array = System.Array.init(this._size, function (){
                    return Bridge.getDefaultValue(T);
                }, T);
                System.Array.copy(this._items, 0, array, 0, this._size);
                return array;
            },
            trimExcess: function () {
                var threshold = Bridge.Int.clip32(this._items.length * 0.9);
                if (this._size < threshold) {
                    this.Capacity = this._size;
                }
            },
            trueForAll: function (match) {
                if (Bridge.staticEquals(match, null)) {
                    throw new System.ArgumentNullException("match");
                }

                for (var i = 0; i < this._size; i = (i + 1) | 0) {
                    if (!match(this._items[System.Array.index(i, this._items)])) {
                        return false;
                    }
                }
                return true;
            },
            toJSON: function () {
                var newItems = System.Array.init(this._size, function (){
                    return Bridge.getDefaultValue(T);
                }, T);
                if (this._size > 0) {
                    System.Array.copy(this._items, 0, newItems, 0, this._size);
                }

                return newItems;
            }
        }
    }; });
