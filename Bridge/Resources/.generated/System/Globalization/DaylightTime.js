    Bridge.define("System.Globalization.DaylightTime", {
        fields: {
            _start: null,
            _end: null,
            _delta: null
        },
        props: {
            Start: {
                get: function () {
                    return this._start;
                }
            },
            End: {
                get: function () {
                    return this._end;
                }
            },
            Delta: {
                get: function () {
                    return this._delta;
                }
            }
        },
        ctors: {
            init: function () {
                this._start = System.DateTime.getDefaultValue();
                this._end = System.DateTime.getDefaultValue();
                this._delta = new System.TimeSpan();
            },
            ctor: function () {
                this.$initialize();
            },
            $ctor1: function (start, end, delta) {
                this.$initialize();
                this._start = start;
                this._end = end;
                this._delta = delta;
            }
        }
    });
