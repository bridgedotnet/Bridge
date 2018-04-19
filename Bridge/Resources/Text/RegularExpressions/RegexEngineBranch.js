    Bridge.define("System.Text.RegularExpressions.RegexEngineBranch", {
        type: 0,
        value: 0,
        min: 0,
        max: 0,

        isStarted: false,
        isNotFailing: false,

        state: null,

        ctor: function (branchType, currVal, minVal, maxVal, parentState) {
            this.$initialize();

            this.type = branchType;

            this.value = currVal;
            this.min = minVal;
            this.max = maxVal;

            this.state = parentState != null ? parentState.clone() : new System.Text.RegularExpressions.RegexEngineState();
        },

        pushPass: function (index, tokens, settings) {
            var pass = new System.Text.RegularExpressions.RegexEnginePass(index, tokens, settings);

            this.state.passes.push(pass);
        },

        peekPass: function () {
            return this.state.passes[this.state.passes.length - 1];
        },

        popPass: function () {
            return this.state.passes.pop();
        },

        hasPass: function () {
            return this.state.passes.length > 0;
        },

        clone: function () {
            var cloned = new System.Text.RegularExpressions.RegexEngineBranch(this.type, this.value, this.min, this.max, this.state);

            cloned.isNotFailing = this.isNotFailing;

            return cloned;
        }
    });
