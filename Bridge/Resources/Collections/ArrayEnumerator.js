    Bridge.define('Bridge.ArrayEnumerator', {
        inherits: [System.Collections.IEnumerator, System.IDisposable],

        $isArrayEnumerator: true,

        config: {
            alias: [
                "getCurrent", "System$Collections$IEnumerator$getCurrent",
                "moveNext", "System$Collections$IEnumerator$moveNext",
                "reset", "System$Collections$IEnumerator$reset",
                "dispose", "System$IDisposable$dispose"
            ]
        },

        ctor: function (array, T) {
            this.$initialize();
            this.array = array;
            this.reset();

            if (T) {
                this["System$Collections$Generic$IEnumerator$1$" + Bridge.getTypeAlias(T) + "$getCurrent$1"] = this.getCurrent;
            }
        },

        moveNext: function () {
            this.index++;

            return this.index < this.array.length;
        },

        getCurrent: function () {
            return this.array[this.index];
        },

        getCurrent$1: function () {
            return this.array[this.index];
        },

        reset: function () {
            this.index = -1;
        },

        dispose: Bridge.emptyFn
    });

    Bridge.define('Bridge.ArrayEnumerable', {
        inherits: [System.Collections.IEnumerable],

        config: {
            alias: [
                "getEnumerator", "System$Collections$IEnumerable$getEnumerator"
            ]
        },

        ctor: function (array) {
            this.$initialize();
            this.array = array;
        },

        getEnumerator: function () {
            return new Bridge.ArrayEnumerator(this.array);
        }
    });

    Bridge.define('Bridge.ObjectEnumerator', {
        inherits: [System.Collections.IEnumerator, System.IDisposable],

        statics: {
            clearKeys: function(d) {
                for (var n in d) {
                    if (d.hasOwnProperty(n))
                        delete d[n];
                }
            },

            mkdict: function ()
            {
                var a = (arguments.length !== 1 ? arguments : arguments[0]);
                var r = {};
                for (var i = 0; i < a.length; i += 2) {
                    r[a[i]] = a[i + 1];
                }

                return r;
            }
        },

        ctor: function (o) {
            this._keys = Object.keys(o);
            this._index = -1;
            this._object = o;
        },

        moveNext: function () {
            this._index++;
            return this._index < this._keys.length;
        },
        reset: function () {
            this._index = -1;
        },
        getCurrent$1: function () {
            return this.getCurrent();
        },
        getCurrent: function() {
            if (this._index < 0 || this._index >= this._keys.length) {
                throw new System.InvalidOperationException('Invalid operation');
            }
                
            var k = this._keys[this._index];
            return { key: k, value: this._object[k] };
        },
        dispose: Bridge.emptyFn
    });