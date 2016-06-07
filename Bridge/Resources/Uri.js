    // @source Uri.js

    Bridge.define("System.Uri", {
        constructor: function (uriString) {
            this.absoluteUri = uriString;
        },

        getAbsoluteUri: function () {
            return this.absoluteUri;
        }
    });
