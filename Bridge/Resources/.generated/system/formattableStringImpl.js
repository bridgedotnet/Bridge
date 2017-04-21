    Bridge.define("System.FormattableStringImpl", {
        inherits: [System.FormattableString],
        fields: {
            args: null,
            format: null
        },
        props: {
            ArgumentCount: {
                get: function () {
                    return this.args.length;
                }
            },
            Format: {
                get: function () {
                    return this.format;
                }
            }
        },
        ctors: {
            ctor: function (format, args) {
                if (args === void 0) { args = []; }

                this.$initialize();
                System.FormattableString.ctor.call(this);
                this.format = format;
                this.args = args;
            }
        },
        methods: {
            getArgument: function (index) {
                return this.args[System.Array.index(index, this.args)];
            },
            getArguments: function () {
                return this.args;
            },
            toString$1: function (formatProvider) {
                return System.String.formatProvider.apply(System.String, [formatProvider, this.format].concat(this.args));
            }
        }
    });
