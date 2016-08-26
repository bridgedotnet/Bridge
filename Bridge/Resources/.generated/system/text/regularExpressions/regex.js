    Bridge.define('System.Text.RegularExpressions.Regex', {
        statics: {

        },
        config: {
            properties: {
                MatchTimeout: null,
                Options: 0,
                RightToLeft: false
            },
            init: function () {
                this.MatchTimeout = new System.TimeSpan();
            }
        }
    });
