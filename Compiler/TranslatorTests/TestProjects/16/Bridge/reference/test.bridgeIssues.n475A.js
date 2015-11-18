/* global Bridge */

"use strict";

Bridge.define('Test.BridgeIssues.N475A.Bridge475Event', {
    config: {
        properties: {
            Data: 0
        }
    },
    preventDefault: function () {
        this.setData(77);
    }
});

Bridge.define('Test.BridgeIssues.N475A.Bridge475Extension1', {
    statics: {
        keyDown: function (T) {
            return Bridge.fn.bind(this, function (entity, handler) {
                return null;
            });
        }
    }
});

Bridge.define('Test.BridgeIssues.N475A.Bridge475Extension2', {
    statics: {
        keyDown: function (T) {
            return Bridge.fn.bind(this, function (entity, handler) {
                return null;
            });
        }
    }
});

Bridge.define('Test.BridgeIssues.N475A.Test', {
    statics: {
        n475: function () {
            var b = new Test.BridgeIssues.N475A.Bridge475();

            Test.BridgeIssues.N475A.Bridge475Extension1.keyDown(Test.BridgeIssues.N475A.Bridge475Event)(b, function (ev) {
                ev.preventDefault();
            });

            b.keyDown(4);

            Test.BridgeIssues.N475A.Bridge475Extension2.keyDown(Bridge.Decimal)(b, "5");
        }
    }
});



Bridge.init();