    Bridge.define("System.Collections.Generic.Stack$1", function (T) { return {
        inherits: [System.Collections.Generic.IEnumerable$1(T),System.Collections.ICollection,System.Collections.Generic.IReadOnlyCollection$1(T)],
        statics: {
            fields: {
                DefaultCapacity: 0
            },
            ctors: {
                init: function () {
                    this.DefaultCapacity = 4;
                }
            }
        },
        fields: {
            _array: null,
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
                var length = { };
                this._array = Bridge.Collections.EnumerableHelpers.ToArray$1(T, collection, length);
                this._size = length.v;
            }
        },
        methods: {
            Clear: function () {
                System.Array.fill(this._array, Bridge.getDefaultValue(T), 0, this._size);
                this._size = 0;
                this._version = (this._version + 1) | 0;
            },
            Contains: function (item) {
                var count = this._size;

                var c = System.Collections.Generic.EqualityComparer$1(T).def;
                while (Bridge.identity(count, (count = (count - 1) | 0)) > 0) {
                    if (item == null) {
                        if (this._array[System.Array.index(count, this._array)] == null) {
                            return true;
                        }
                    } else if (this._array[System.Array.index(count, this._array)] != null && c.equals2(this._array[System.Array.index(count, this._array)], item)) {
                        return true;
                    }
                }
                return false;
            },
            CopyTo: function (array, arrayIndex) {
                if (array == null) {
                    throw new System.ArgumentNullException.$ctor1("array");
                }

                if (arrayIndex < 0 || arrayIndex > array.length) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("arrayIndex", "Non-negative number required.");
                }

                if (((array.length - arrayIndex) | 0) < this._size) {
                    throw new System.ArgumentException.$ctor1("Offset and length were out of bounds for the array or count is greater than the number of elements from index to the end of the source collection.");
                }

                if (!Bridge.referenceEquals(array, this._array)) {
                    var srcIndex = 0;
                    var dstIndex = (arrayIndex + this._size) | 0;
                    for (var i = 0; i < this._size; i = (i + 1) | 0) {
                        array[System.Array.index(((dstIndex = (dstIndex - 1) | 0)), array)] = this._array[System.Array.index(Bridge.identity(srcIndex, (srcIndex = (srcIndex + 1) | 0)), this._array)];
                    }
                } else {
                    System.Array.copy(this._array, 0, array, arrayIndex, this._size);
                    System.Array.reverse(array, arrayIndex, this._size);
                }
            },
            copyTo: function (array, arrayIndex) {
                if (array == null) {
                    throw new System.ArgumentNullException.$ctor1("array");
                }

                if (System.Array.getRank(array) !== 1) {
                    throw new System.ArgumentException.$ctor1("Only single dimensional arrays are supported for the requested action.");
                }

                if (System.Array.getLower(array, 0) !== 0) {
                    throw new System.ArgumentException.$ctor1("The lower bound of target array must be zero.");
                }

                if (arrayIndex < 0 || arrayIndex > array.length) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("arrayIndex", "Non-negative number required.");
                }

                if (((array.length - arrayIndex) | 0) < this._size) {
                    throw new System.ArgumentException.$ctor1("Offset and length were out of bounds for the array or count is greater than the number of elements from index to the end of the source collection.");
                }

                try {
                    System.Array.copy(this._array, 0, array, arrayIndex, this._size);
                    System.Array.reverse(array, arrayIndex, this._size);
                }
                catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    throw new System.ArgumentException.$ctor1("Target array type is not compatible with the type of items in the collection.");
                }
            },
            GetEnumerator: function () {
                return new (System.Collections.Generic.Stack$1.Enumerator(T)).$ctor1(this);
            },
            System$Collections$Generic$IEnumerable$1$GetEnumerator: function () {
                return new (System.Collections.Generic.Stack$1.Enumerator(T)).$ctor1(this).$clone();
            },
            System$Collections$IEnumerable$GetEnumerator: function () {
                return new (System.Collections.Generic.Stack$1.Enumerator(T)).$ctor1(this).$clone();
            },
            TrimExcess: function () {
                var threshold = Bridge.Int.clip32(this._array.length * 0.9);
                if (this._size < threshold) {
                    var localArray = { v : this._array };
                    System.Array.resize(localArray, this._size, Bridge.getDefaultValue(T));
                    this._array = localArray.v;
                    this._version = (this._version + 1) | 0;
                }
            },
            Peek: function () {
                if (this._size === 0) {
                    throw new System.InvalidOperationException.$ctor1("Stack empty.");
                }
                return this._array[System.Array.index(((this._size - 1) | 0), this._array)];
            },
            Pop: function () {
                if (this._size === 0) {
                    throw new System.InvalidOperationException.$ctor1("Stack empty.");
                }
                this._version = (this._version + 1) | 0;
                var item = this._array[System.Array.index(((this._size = (this._size - 1) | 0)), this._array)];
                this._array[System.Array.index(this._size, this._array)] = Bridge.getDefaultValue(T);
                return item;
            },
            Push: function (item) {
                if (this._size === this._array.length) {
                    var localArray = { v : this._array };
                    System.Array.resize(localArray, (this._array.length === 0) ? System.Collections.Generic.Stack$1(T).DefaultCapacity : Bridge.Int.mul(2, this._array.length), Bridge.getDefaultValue(T));
                    this._array = localArray.v;
                }
                this._array[System.Array.index(Bridge.identity(this._size, (this._size = (this._size + 1) | 0)), this._array)] = item;
                this._version = (this._version + 1) | 0;
            },
            ToArray: function () {
                var objArray = System.Array.init(this._size, function (){
                    return Bridge.getDefaultValue(T);
                }, T);
                var i = 0;
                while (i < this._size) {
                    objArray[System.Array.index(i, objArray)] = this._array[System.Array.index(((((this._size - i) | 0) - 1) | 0), this._array)];
                    i = (i + 1) | 0;
                }
                return objArray;
            }
        }
    }; });
