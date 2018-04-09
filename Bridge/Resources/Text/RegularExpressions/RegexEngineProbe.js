    Bridge.define("System.Text.RegularExpressions.RegexEngineProbe", {
        min: 0,
        max: 0,
        value: 0,
        isLazy: false,
        forced: false,

        ctor: function (min, max, value, isLazy) {
            this.$initialize();

            this.min = min;
            this.max = max;
            this.value = value;
            this.isLazy = isLazy;
            this.forced = false;
        },

        clone: function () {
            var cloned = new System.Text.RegularExpressions.RegexEngineProbe(this.min, this.max, this.value, this.isLazy);

            cloned.forced = this.forced;

            return cloned;
        }
    });
