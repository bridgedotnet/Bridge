    Bridge.define("System.Text.EncodingInfo", {
        props: {
            CodePage: 0,
            Name: null,
            DisplayName: null
        },
        ctors: {
            ctor: function (codePage, name, displayName) {
                var $t;
                this.$initialize();
                this.CodePage = codePage;
                this.Name = name;
                this.DisplayName = ($t = displayName, $t != null ? $t : name);
            }
        },
        methods: {
            GetEncoding: function () {
                return System.Text.Encoding.GetEncoding(this.CodePage);
            },
            getHashCode: function () {
                return this.CodePage;
            },
            equals: function (o) {
                var that = Bridge.as(o, System.Text.EncodingInfo);
                return System.Nullable.eq(this.CodePage, (that != null ? that.CodePage : null));
            }
        }
    });
