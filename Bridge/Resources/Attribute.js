    Bridge.define("System.Attribute", {
        statics: {
            getCustomAttributes: function (o, type, inherit) {
                var r = o.at || [];

                if (!type) {
                    return r;
                }

                return r.filter(function (a) { return Bridge.is(a, type); });
            }
        }
    });
