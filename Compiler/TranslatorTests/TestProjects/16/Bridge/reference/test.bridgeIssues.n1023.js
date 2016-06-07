(function (globals) {
    "use strict";

    Bridge.define('Test.BridgeIssues.N1023.Optional$1', function (T) { return {
        statics: {
            getDefaultValue: function () { return new Test.BridgeIssues.N1023.Optional$1(T)(); }
        },
        config: {
            properties: {
                Value: Bridge.getDefaultValue(T)
            }
        },
        constructor$1: function (value) {
            Test.BridgeIssues.N1023.Optional$1(T).prototype.$constructor.call(this);
    
            this.setValue(value);
        },
        constructor: function () {
        },
        $struct: true,
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + -1412376807;
            hash = hash * 23 + (this.Value == null ? 0 : Bridge.getHashCode(this.Value));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, Test.BridgeIssues.N1023.Optional$1(T))) {
                return false;
            }
            return Bridge.equals(this.Value, o.Value);
        },
        $clone: function (to) {
            var s = to || new Test.BridgeIssues.N1023.Optional$1(T)();
            s.Value = this.Value;
            return s;
        }
    }; });
    
    Bridge.define('Test.BridgeIssues.N1023.PersonDetails', {
        config: {
            properties: {
                Name: null
            },
            init: function () {
                this.Name = new Test.BridgeIssues.N1023.Optional$1(String)();
            }
        },
        constructor: function (name) {
            this.setName(name.$clone());
        }
    });
    
    
    
    Bridge.init();
})(this);
