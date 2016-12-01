    Bridge.define("System.Attribute", {
        statics: {
            getCustomAttributes: function (o, t, b) {
                if (o == null) {
                    throw new System.ArgumentNullException("element");
                }

                if (t == null)
                {
                    throw new System.ArgumentNullException("attributeType");
                }

                var r = o.at || [];

                if (!t) {
                    return r;
                }

                return r.filter(function (a) { return Bridge.is(a, t); });
            },

            getCustomAttributes$1: function (a, t, b) {
                if (a == null) {
                    throw new System.ArgumentNullException("element");
                }

                if (t == null)
                {
                    throw new System. ArgumentNullException("attributeType");
                }

                return a.getCustomAttributes(t || b);
            }
        }
    });
