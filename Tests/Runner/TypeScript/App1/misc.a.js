(function (globals) {
    "use strict";

    Bridge.define('Misc.A.Class1', {
        getInt: function (i) {
            return i;
        }
    });
    
    Bridge.define('Misc.A.EnumTest', {
        doSomething: function (m) {
            return m;
        }
    });
    
    Bridge.define('Misc.A.EnumTest.EnumA', {
        $enum: true,
        statics: {
            m1: 0,
            m2: 1
        }
    });
    
    
    
    Bridge.init();
})(this);
