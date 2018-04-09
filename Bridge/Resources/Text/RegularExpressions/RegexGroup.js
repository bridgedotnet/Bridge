    Bridge.define("System.Text.RegularExpressions.Group", {
        inherits: function () {
            return [System.Text.RegularExpressions.Capture];
        },

        statics: {
            config: {
                init: function () {
                    var empty = new System.Text.RegularExpressions.Group("", [], 0);

                    this.getEmpty = function () {
                        return empty;
                    }
                }
            },

            synchronized: function (group) {
                if (group == null) {
                    throw new System.ArgumentNullException.$ctor1("group");
                }

                // force Captures to be computed.
                var captures = group.getCaptures();

                if (captures.getCount() > 0) {
                    captures.get(0);
                }

                return group;
            }
        },

        _caps: null,
        _capcount: 0,
        _capColl: null,

        ctor: function (text, caps, capcount) {
            this.$initialize();
            var scope = System.Text.RegularExpressions;
            var index = capcount === 0 ? 0 : caps[(capcount - 1) * 2];
            var length = capcount === 0 ? 0 : caps[(capcount * 2) - 1];

            scope.Capture.ctor.call(this, text, index, length);

            this._caps = caps;
            this._capcount = capcount;
        },

        getSuccess: function () {
            return this._capcount !== 0;
        },

        getCaptures: function () {
            if (this._capColl == null) {
                this._capColl = new System.Text.RegularExpressions.CaptureCollection(this);
            }

            return this._capColl;
        }
    });
