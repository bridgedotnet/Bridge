    Bridge.define("System.Uri", {
        ctor: function (uriString) {
            this.$initialize();
            this.absoluteUri = uriString;
        },

        getAbsoluteUri: function () {
            return this.absoluteUri;
        },

        toJSON: function () {
            return this.absoluteUri;
        }
    });
