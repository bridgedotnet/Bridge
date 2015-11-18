/* global Bridge */

"use strict";

Bridge.define('Functions.DelegateClass', {
    methodVoidDelegate: null,
    methodStringDelegate: null,
    methodStringDelegateIntResult: null
});

Bridge.define('Functions.DelegateInterface');

Bridge.define('Functions.Delegates');

Bridge.define('Functions.Parameters', {
    getSomething: function (i) {
        if (i === void 0) { i = 5; }
        return i;
    },
    join: function (numbers) {
        var s = "";
        for (var i = 0; i < numbers.length; i++) {
            s = s + numbers[i];
        }

        return s;
    }
});



Bridge.init();