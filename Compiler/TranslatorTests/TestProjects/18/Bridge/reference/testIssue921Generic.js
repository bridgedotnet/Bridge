    Bridge.define("TestIssue921Generic.Issue921Generic$1", function (T) { return {
        lambaLiftingGeneric: function () {
            return System.Linq.Enumerable.from([1]).select(function (value) {
                    return Bridge.getDefaultValue(T);
                });
        }
    }; });
