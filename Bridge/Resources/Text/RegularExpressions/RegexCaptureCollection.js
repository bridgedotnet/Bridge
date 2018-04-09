    Bridge.define("System.Text.RegularExpressions.CaptureCollection", {
        inherits: function () {
            return [System.Collections.ICollection];
        },

        config: {
            properties: {
                Count: {
                    get: function () {
                        return this._capcount;
                    }
                }
            },

            alias: [
            "GetEnumerator", "System$Collections$IEnumerable$GetEnumerator",
            "getCount", "System$Collections$ICollection$getCount",
            "Count", "System$Collections$ICollection$Count",
            "copyTo", "System$Collections$ICollection$copyTo"
            ]
        },

        _group: null,
        _capcount: 0,
        _captures: null,

        ctor: function (group) {
            this.$initialize();
            this._group = group;
            this._capcount = group._capcount;
        },

        getSyncRoot: function () {
            return this._group;
        },

        getIsSynchronized: function () {
            return false;
        },

        getIsReadOnly: function () {
            return true;
        },

        getCount: function () {
            return this._capcount;
        },

        get: function (i) {
            if (i === this._capcount - 1 && i >= 0) {
                return this._group;
            }

            if (i >= this._capcount || i < 0) {
                throw new System.ArgumentOutOfRangeException.$ctor1("i");
            }

            this._ensureCapturesInited();

            return this._captures[i];
        },

        copyTo: function (array, arrayIndex) {
            if (array == null) {
                throw new System.ArgumentNullException.$ctor1("array");
            }

            if (array.length < arrayIndex + this._capcount) {
                throw new System.IndexOutOfRangeException();
            }

            var capture;
            var i;
            var j;

            for (i = arrayIndex, j = 0; j < this._capcount; i++, j++) {
                capture = this.get(j);
                System.Array.set(array, capture, [i]);
            }
        },

        GetEnumerator: function () {
            return new System.Text.RegularExpressions.CaptureEnumerator(this);
        },

        _ensureCapturesInited: function () {
            // first time a capture is accessed, compute them all
            if (this._captures == null) {
                var captures = [];
                var j;

                captures.length = this._capcount;

                for (j = 0; j < this._capcount - 1; j++) {
                    var index = this._group._caps[j * 2];
                    var length = this._group._caps[j * 2 + 1];

                    captures[j] = new System.Text.RegularExpressions.Capture(this._group._text, index, length);
                }

                if (this._capcount > 0) {
                    captures[this._capcount - 1] = this._group;
                }

                this._captures = captures;
            }
        }
    });

    Bridge.define("System.Text.RegularExpressions.CaptureEnumerator", {
        inherits: function () {
            return [System.Collections.IEnumerator];
        },

        config: {
            properties: {
                Current: {
                    get: function () {
                        return this.getCurrent();
                    }
                }
            },
            alias: [
                "getCurrent", "System$Collections$IEnumerator$getCurrent",
                "moveNext", "System$Collections$IEnumerator$moveNext",
                "reset", "System$Collections$IEnumerator$reset",
                "Current", "System$Collections$IEnumerator$Current"
            ]
        },

        _captureColl: null,
        _curindex: 0,

        ctor: function (captureColl) {
            this.$initialize();
            this._curindex = -1;
            this._captureColl = captureColl;
        },

        moveNext: function () {
            var size = this._captureColl.getCount();

            if (this._curindex >= size) {
                return false;
            }

            this._curindex++;
            return (this._curindex < size);
        },

        getCurrent: function () {
            return this.getCapture();
        },

        getCapture: function () {
            if (this._curindex < 0 || this._curindex >= this._captureColl.getCount()) {
                throw new System.InvalidOperationException.$ctor1("Enumeration has either not started or has already finished.");
            }

            return this._captureColl.get(this._curindex);
        },

        reset: function () {
            this._curindex = -1;
        }
    });
