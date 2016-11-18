    Bridge.define("System.FormattableStringImpl", {
        inherits: [System.FormattableString],
        args: null,
        format: null,
        ctor: function (format, args) {
            if (args === void 0) { args = []; }

            this.$initialize();
            System.FormattableString.ctor.call(this);
            this.format = format;
            this.args = args;
        },
        getArgumentCount: function () {
            return this.args.length;
        },
        getFormat: function () {
            return this.format;
        },
        getArgument: function (index) {
            return this.args[index];
        },
        getArguments: function () {
            return this.args;
        },
        toString$1: function (formatProvider) {
            return System.String.formatProvider.apply(System.String, [formatProvider, this.format].concat(this.args));
        }
    });

    var $box_ = {};

    Bridge.ns("System.Char", $box_);

    Bridge.apply($box_.System.Char, {
        toString: function(obj) {return String.fromCharCode(obj);}
    });
