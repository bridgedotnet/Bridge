/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.TestMethodParametersClass', {
    statics: {
        methodDefault: function (i) {
            if (i === void 0) { i = 5; }
            return i;
        },
        methodParams: function (n) {
            var sum = 0;
            for (var i = 0; i < n.length; i++) {
                sum += n[i];
            }

            return sum;
        },
        test: function (assert) {
            assert.expect(3);

            assert.equal(ClientTestLibrary.TestMethodParametersClass.methodDefault(), 5, "Default parameter - 5");
            assert.equal(ClientTestLibrary.TestMethodParametersClass.methodDefault(10), 10, "Default parameter - 10");

            assert.equal(ClientTestLibrary.TestMethodParametersClass.methodParams([1, 2, 3]), 6, "params int[]");
        }
    }
});



Bridge.init();