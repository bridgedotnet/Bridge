    Bridge.define("System.Uri", {
        constructor: function (uriString) {
            this.$initialize();
            this.absoluteUri = uriString;
        },

        getAbsoluteUri: function () {
            return this.absoluteUri;
        }
    });
