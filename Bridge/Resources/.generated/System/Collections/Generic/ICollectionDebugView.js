    Bridge.define("System.Collections.Generic.ICollectionDebugView$1", function (T) { return {
        fields: {
            _collection: null
        },
        props: {
            Items: {
                get: function () {
                    var items = System.Array.init(System.Array.getCount(this._collection, T), function (){
                        return Bridge.getDefaultValue(T);
                    }, T);
                    System.Array.copyTo(this._collection, items, 0, T);
                    return items;
                }
            }
        },
        ctors: {
            ctor: function (collection) {
                this.$initialize();
                if (collection == null) {
                    throw new System.ArgumentNullException.$ctor1("collection");
                }

                this._collection = collection;
            }
        }
    }; });
