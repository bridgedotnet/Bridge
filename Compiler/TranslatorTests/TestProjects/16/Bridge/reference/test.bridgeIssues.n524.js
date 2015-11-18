/* global Bridge */

"use strict";

Bridge.define('Test.BridgeIssues.N524.Bridge524', {
    statics: {
        callAsGetter: function () {
            var list = new Test.BridgeIssues.N524.Bridge524.ImmutableList$1(Bridge.Int)();
            var firstValue = list.get(0);
        }
    }
});



Bridge.init();