    Bridge.define('System.FormattableStringImpl', {
        inherits: [System.FormattableString],
        args: null,
        format$1: null,
        constructor: function (format, args) {
            if (args === void 0) { args = []; }
    
            this.$initialize();
            System.FormattableString.$constructor.call(this);
            this.format$1 = format;
            this.args = args;
        },
        getArgumentCount: function () {
            return this.args.length;
        },
        getFormat: function () {
            return this.format$1;
        },
        getArgument: function (index) {
            return this.args[index];
        },
        getArguments: function () {
            return this.args;
        },
        toString$1: function (formatProvider) {
            return System.String.formatProvider.apply(System.String, [formatProvider, this.format$1].concat(this.args));
        }
    });