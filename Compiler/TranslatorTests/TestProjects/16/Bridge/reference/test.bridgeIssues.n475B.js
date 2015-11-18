/* global Bridge */

"use strict";

Bridge.define('Test.BridgeIssues.N475B.Bridge475Event', {
    config: {
        properties: {
            Data: 0
        }
    },
    preventDefault: function () {
        this.setData(77);
    }
});

Bridge.define('Test.BridgeIssues.N475B.Test', {
    statics: {
        n475: function () {
            var b = new Test.BridgeIssues.N475B.Bridge475();

            b.keyDown(function (ev) {
                ev.preventDefault();
            });

            b.keyDown(4);

            b.keyDown("5");
        }
    }
});



Bridge.init();