Bridge.define("System.ValueType", {
    statics: {
        methods: {
            $is: function (obj) {
                return Bridge.Reflection.isValueType(Bridge.getType(obj));
            }
        }
    }
});
