    Bridge.define("System.FormattableStringImpl", {
        inherits: [System.FormattableString],
        args: null,
        format$1: null,
        config: {
            properties: {
                argumentCount: {
                    get: function () {
                        return this.args.length;
                    }
                },
                format: {
                    get: function () {
                        return this.format$1;
                    }
                }
            }
        },
        ctor: function (format, args) {
            if (args === void 0) { args = []; }

            this.$initialize();
            System.FormattableString.ctor.call(this);
            this.format$1 = format;
            this.args = args;
        },
        getArgument: function (index) {
            return this.args[System.Array.index(index, this.args)];
        },
        getArguments: function () {
            return this.args;
        },
        toString$1: function (formatProvider) {
            return System.String.formatProvider.apply(System.String, [formatProvider, this.format$1].concat(this.args));
        }
    });
