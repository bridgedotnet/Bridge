    Bridge.define('System.RegexMatchTimeoutException', {
        inherits: [System.TimeoutException],
        config: {
            properties: {
                Pattern: null,
                Input: null,
                MatchTimeout: null
            },
            init: function () {
                this.MatchTimeout = new System.TimeSpan();
            }
        }
    });
