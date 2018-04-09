    Bridge.define("System.Text.RegularExpressions.RegexEnginePass", {
        index: 0,
        tokens: null,
        probe: null,

        onHold: false,
        onHoldTextIndex: -1,
        alternationHandled: false,

        settings: null,

        ctor: function (index, tokens, settings) {
            this.$initialize();

            this.index = index;
            this.tokens = tokens;
            this.settings = settings;
        },

        clearState: function (settings) {
            this.index = 0;
            this.probe = null;
            this.onHold = false;
            this.onHoldTextIndex = -1;
            this.alternationHandled = false;
            this.settings = settings;
        },

        clone: function () {
            var cloned = new System.Text.RegularExpressions.RegexEnginePass(this.index, this.tokens, this.settings);

            cloned.onHold = this.onHold;
            cloned.onHoldTextIndex = this.onHoldTextIndex;
            cloned.alternationHandled = this.alternationHandled;
            cloned.probe = this.probe != null ? this.probe.clone() : null;

            return cloned;
        }
    });
