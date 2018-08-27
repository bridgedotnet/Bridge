    Bridge.define("System.IO.ReadLinesIterator", {
        inherits: [System.IO.Iterator$1(System.String)],
        statics: {
            methods: {
                CreateIterator: function (path, encoding) {
                    return System.IO.ReadLinesIterator.CreateIterator$1(path, encoding, null);
                },
                CreateIterator$1: function (path, encoding, reader) {
                    return new System.IO.ReadLinesIterator(path, encoding, reader || new System.IO.StreamReader.$ctor9(path, encoding));
                }
            }
        },
        fields: {
            _path: null,
            _encoding: null,
            _reader: null
        },
        alias: ["moveNext", "System$Collections$IEnumerator$moveNext"],
        ctors: {
            ctor: function (path, encoding, reader) {
                this.$initialize();
                System.IO.Iterator$1(System.String).ctor.call(this);

                this._path = path;
                this._encoding = encoding;
                this._reader = reader;
            }
        },
        methods: {
            moveNext: function () {
                if (this._reader != null) {
                    this.current = this._reader.ReadLine();
                    if (this.current != null) {
                        return true;
                    }

                    this.Dispose();
                }

                return false;
            },
            Clone: function () {
                return System.IO.ReadLinesIterator.CreateIterator$1(this._path, this._encoding, this._reader);
            },
            Dispose$1: function (disposing) {
                try {
                    if (disposing) {
                        if (this._reader != null) {
                            this._reader.Dispose();
                        }
                    }
                } finally {
                    this._reader = null;
                    System.IO.Iterator$1(System.String).prototype.Dispose$1.call(this, disposing);
                }
            }
        }
    });
