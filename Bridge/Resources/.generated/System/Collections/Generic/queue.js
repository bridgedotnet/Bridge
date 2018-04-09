    Bridge.define("System.Collections.Generic.Queue$1", function (T) { return {
        inherits: [System.Collections.Generic.IEnumerable$1(T),System.Collections.ICollection,System.Collections.Generic.IReadOnlyCollection$1(T)],
        statics: {
            fields: {
                MinimumGrow: 0,
                GrowFactor: 0,
                DefaultCapacity: 0
            },
            ctors: {
                init: function () {
                    this.MinimumGrow = 4;
                    this.GrowFactor = 200;
                    this.DefaultCapacity = 4;
                }
            }
        },
        fields: {
            _array: null,
            _head: 0,
            _tail: 0,
            _size: 0,
            _version: 0
        },
        props: {
            Count: {
                get: function () {
                    return this._size;
                }
            },
            System$Collections$ICollection$IsSynchronized: {
                get: function () {
                    return false;
                }
            },
            System$Collections$ICollection$SyncRoot: {
                get: function () {
                    return this;
                }
            },
            IsReadOnly: {
                get: function () {
                    return false;
                }
            }
        },
        alias: [
            "Count", ["System$Collections$Generic$IReadOnlyCollection$1$" + Bridge.getTypeAlias(T) + "$Count", "System$Collections$Generic$IReadOnlyCollection$1$Count"],
            "Count", "System$Collections$ICollection$Count",
            "copyTo", "System$Collections$ICollection$copyTo",
            "System$Collections$Generic$IEnumerable$1$GetEnumerator", "System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$GetEnumerator"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                this._array = System.Array.init(0, function (){
                    return Bridge.getDefaultValue(T);
                }, T);
            },
            $ctor2: function (capacity) {
                this.$initialize();
                if (capacity < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("capacity", "Non-negative number required.");
                }
                this._array = System.Array.init(capacity, function (){
                    return Bridge.getDefaultValue(T);
                }, T);
            },
            $ctor1: function (collection) {
                this.$initialize();
                if (collection == null) {
                    throw new System.ArgumentNullException.$ctor1("collection");
                }

                this._array = System.Array.init(System.Collections.Generic.Queue$1(T).DefaultCapacity, function (){
                    return Bridge.getDefaultValue(T);
                }, T);

                var en = Bridge.getEnumerator(collection, T);
                try {
                    while (en.System$Collections$IEnumerator$moveNext()) {
                        this.Enqueue(en[Bridge.geti(en, "System$Collections$Generic$IEnumerator$1$" + Bridge.getTypeAlias(T) + "$Current$1", "System$Collections$Generic$IEnumerator$1$Current$1")]);
                    }
                }
                finally {
                    if (Bridge.hasValue(en)) {
                        en.System$IDisposable$Dispose();
                    }
                }
            }
        },
        methods: {
            copyTo: function (array, index) {
                if (array == null) {
                    throw new System.ArgumentNullException.$ctor1("array");
                }

                if (System.Array.getRank(array) !== 1) {
                    throw new System.ArgumentException.$ctor1("Only single dimensional arrays are supported for the requested action.");
                }

                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("index");
                }

                var arrayLen = array.length;
                if (((arrayLen - index) | 0) < this._size) {
                    throw new System.ArgumentException.$ctor1("Offset and length were out of bounds for the array or count is greater than the number of elements from index to the end of the source collection.");
                }

                var numToCopy = this._size;
                if (numToCopy === 0) {
                    return;
                }

                var firstPart = (((this._array.length - this._head) | 0) < numToCopy) ? ((this._array.length - this._head) | 0) : numToCopy;
                System.Array.copy(this._array, this._head, array, index, firstPart);

                numToCopy = (numToCopy - firstPart) | 0;
                if (numToCopy > 0) {
                    System.Array.copy(this._array, 0, array, ((((index + this._array.length) | 0) - this._head) | 0), numToCopy);
                }
            },
            CopyTo: function (array, arrayIndex) {
                if (array == null) {
                    throw new System.ArgumentNullException.$ctor1("array");
                }

                if (arrayIndex < 0 || arrayIndex > array.length) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("arrayIndex", "Index was out of range. Must be non-negative and less than the size of the collection.");
                }

                var arrayLen = array.length;
                if (((arrayLen - arrayIndex) | 0) < this._size) {
                    throw new System.ArgumentException.$ctor1("Offset and length were out of bounds for the array or count is greater than the number of elements from index to the end of the source collection.");
                }

                var numToCopy = (((arrayLen - arrayIndex) | 0) < this._size) ? (((arrayLen - arrayIndex) | 0)) : this._size;
                if (numToCopy === 0) {
                    return;
                }

                var firstPart = (((this._array.length - this._head) | 0) < numToCopy) ? ((this._array.length - this._head) | 0) : numToCopy;
                System.Array.copy(this._array, this._head, array, arrayIndex, firstPart);
                numToCopy = (numToCopy - firstPart) | 0;
                if (numToCopy > 0) {
                    System.Array.copy(this._array, 0, array, ((((arrayIndex + this._array.length) | 0) - this._head) | 0), numToCopy);
                }
            },
            Clear: function () {
                if (this._head < this._tail) {
                    System.Array.fill(this._array, Bridge.getDefaultValue(T), this._head, this._size);
                } else {
                    System.Array.fill(this._array, Bridge.getDefaultValue(T), this._head, ((this._array.length - this._head) | 0));
                    System.Array.fill(this._array, Bridge.getDefaultValue(T), 0, this._tail);
                }

                this._head = 0;
                this._tail = 0;
                this._size = 0;
                this._version = (this._version + 1) | 0;
            },
            Enqueue: function (item) {
                if (this._size === this._array.length) {
                    var newcapacity = (Bridge.Int.div(Bridge.Int.mul(this._array.length, System.Collections.Generic.Queue$1(T).GrowFactor), 100)) | 0;
                    if (newcapacity < ((this._array.length + System.Collections.Generic.Queue$1(T).MinimumGrow) | 0)) {
                        newcapacity = (this._array.length + System.Collections.Generic.Queue$1(T).MinimumGrow) | 0;
                    }
                    this.SetCapacity(newcapacity);
                }

                this._array[System.Array.index(this._tail, this._array)] = item;
                this._tail = this.MoveNext(this._tail);
                this._size = (this._size + 1) | 0;
                this._version = (this._version + 1) | 0;
            },
            GetEnumerator: function () {
                return new (System.Collections.Generic.Queue$1.Enumerator(T)).$ctor1(this);
            },
            System$Collections$Generic$IEnumerable$1$GetEnumerator: function () {
                return new (System.Collections.Generic.Queue$1.Enumerator(T)).$ctor1(this).$clone();
            },
            System$Collections$IEnumerable$GetEnumerator: function () {
                return new (System.Collections.Generic.Queue$1.Enumerator(T)).$ctor1(this).$clone();
            },
            Dequeue: function () {
                if (this._size === 0) {
                    throw new System.InvalidOperationException.$ctor1("Queue empty.");
                }

                var removed = this._array[System.Array.index(this._head, this._array)];
                this._array[System.Array.index(this._head, this._array)] = Bridge.getDefaultValue(T);
                this._head = this.MoveNext(this._head);
                this._size = (this._size - 1) | 0;
                this._version = (this._version + 1) | 0;
                return removed;
            },
            Peek: function () {
                if (this._size === 0) {
                    throw new System.InvalidOperationException.$ctor1("Queue empty.");
                }

                return this._array[System.Array.index(this._head, this._array)];
            },
            Contains: function (item) {
                var index = this._head;
                var count = this._size;

                var c = System.Collections.Generic.EqualityComparer$1(T).def;
                while (Bridge.identity(count, (count = (count - 1) | 0)) > 0) {
                    if (item == null) {
                        if (this._array[System.Array.index(index, this._array)] == null) {
                            return true;
                        }
                    } else if (this._array[System.Array.index(index, this._array)] != null && c.equals2(this._array[System.Array.index(index, this._array)], item)) {
                        return true;
                    }
                    index = this.MoveNext(index);
                }

                return false;
            },
            GetElement: function (i) {
                return this._array[System.Array.index((((this._head + i) | 0)) % this._array.length, this._array)];
            },
            ToArray: function () {
                var arr = System.Array.init(this._size, function (){
                    return Bridge.getDefaultValue(T);
                }, T);
                if (this._size === 0) {
                    return arr;
                }

                if (this._head < this._tail) {
                    System.Array.copy(this._array, this._head, arr, 0, this._size);
                } else {
                    System.Array.copy(this._array, this._head, arr, 0, ((this._array.length - this._head) | 0));
                    System.Array.copy(this._array, 0, arr, ((this._array.length - this._head) | 0), this._tail);
                }

                return arr;
            },
            SetCapacity: function (capacity) {
                var newarray = System.Array.init(capacity, function (){
                    return Bridge.getDefaultValue(T);
                }, T);
                if (this._size > 0) {
                    if (this._head < this._tail) {
                        System.Array.copy(this._array, this._head, newarray, 0, this._size);
                    } else {
                        System.Array.copy(this._array, this._head, newarray, 0, ((this._array.length - this._head) | 0));
                        System.Array.copy(this._array, 0, newarray, ((this._array.length - this._head) | 0), this._tail);
                    }
                }

                this._array = newarray;
                this._head = 0;
                this._tail = (this._size === capacity) ? 0 : this._size;
                this._version = (this._version + 1) | 0;
            },
            MoveNext: function (index) {
                var tmp = (index + 1) | 0;
                return (tmp === this._array.length) ? 0 : tmp;
            },
            TrimExcess: function () {
                var threshold = Bridge.Int.clip32(this._array.length * 0.9);
                if (this._size < threshold) {
                    this.SetCapacity(this._size);
                }
            }
        }
    }; });
