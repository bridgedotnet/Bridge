    Bridge.define("System.Collections.Generic.IDictionaryDebugView$2", function (K, V) { return {
        fields: {
            _dict: null
        },
        props: {
            Items: {
                get: function () {
                    var items = System.Array.init(System.Array.getCount(this._dict, System.Collections.Generic.KeyValuePair$2(K,V)), function (){
                        return new (System.Collections.Generic.KeyValuePair$2(K,V))();
                    }, System.Collections.Generic.KeyValuePair$2(K,V));
                    System.Array.copyTo(this._dict, items, 0, System.Collections.Generic.KeyValuePair$2(K,V));
                    return items;
                }
            }
        },
        ctors: {
            ctor: function (dictionary) {
                this.$initialize();
                if (dictionary == null) {
                    throw new System.ArgumentNullException.$ctor1("dictionary");
                }

                this._dict = dictionary;
            }
        }
    }; });
