    Bridge.define("System.Diagnostics.Debugger", {
        statics: {
            fields: {
                DefaultCategory: null
            },
            props: {
                IsAttached: {
                    get: function () {
                        return true;
                    }
                }
            },
            methods: {
                Break: function () {
                    debugger;
                },
                IsLogging: function () {
                    return true;
                },
                Launch: function () {
                    return true;
                },
                Log: function (level, category, message) { },
                NotifyOfCrossThreadDependency: function () { }
            }
        }
    });
