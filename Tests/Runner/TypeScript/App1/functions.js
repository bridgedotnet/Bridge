﻿(function (globals) {
    "use strict";

    Bridge.define('Functions.DelegateClass', {
        methodVoidDelegate: null,
        methodStringDelegate: null,
        methodStringDelegateIntResult: null
    });
    
    Bridge.define('Functions.DelegateInterface', {
        $interface: true
    });
    
    Bridge.define('Functions.Delegates');
    
    Bridge.define('Functions.Parameters', {
        getSomething: function (i) {
            if (i === void 0) { i = 5; }
            return i;
        },
        join: function (numbers) {
            if (numbers === void 0) { numbers = []; }
            var s = "";
            for (var i = 0; i < numbers.length; i = (i + 1) | 0) {
                s = s + numbers[i];
            }
    
            return s;
        }
    });
    
    
    
    Bridge.init();
})(this);
