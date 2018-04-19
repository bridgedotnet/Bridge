    Bridge.define("System.Runtime.CompilerServices.FormattableStringFactory.ConcreteFormattableString", {
        inherits: [System.FormattableString],
        $kind: "nested class",
        fields: {
            _format: null,
            _arguments: null
        },
        props: {
            Format: {
                get: function () {
                    return this._format;
                }
            },
            ArgumentCount: {
                get: function () {
                    return this._arguments.length;
                }
            }
        },
        ctors: {
            ctor: function (format, $arguments) {
                this.$initialize();
                System.FormattableString.ctor.call(this);
                this._format = format;
                this._arguments = $arguments;
            }
        },
        methods: {
            GetArguments: function () {
                return this._arguments;
            },
            GetArgument: function (index) {
                return this._arguments[System.Array.index(index, this._arguments)];
            },
            ToString: function (formatProvider) {
                return System.String.formatProvider.apply(System.String, [formatProvider, this._format].concat(this._arguments));
            }
        }
    });
