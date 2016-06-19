(function (globals) {
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
            keyDown: function (T, entity, handler) {
                return null;
            }
        }
    });
    
    Bridge.define('Test.BridgeIssues.N475A.Bridge475Extension2', {
        statics: {
            keyDown: function (T, entity, handler) {
                return null;
            }
        }
    });
    
    Bridge.define('Test.BridgeIssues.N475A.Test', {
        statics: {
            n475: function () {
                var b = new Test.BridgeIssues.N475A.Bridge475();
    
                Test.BridgeIssues.N475A.Bridge475Extension1.keyDown(Test.BridgeIssues.N475A.Bridge475Event, b, $_.Test.BridgeIssues.N475A.Test.f1);
    
                b.keyDown(4);
    
                Test.BridgeIssues.N475A.Bridge475Extension2.keyDown(System.Decimal, b, "5");
            }
        }
    });
    
    var $_ = {};
    
    Bridge.ns("Test.BridgeIssues.N475A.Test", $_);
    
    Bridge.apply($_.Test.BridgeIssues.N475A.Test, {
        f1: function (ev) {
            ev.preventDefault();
        }
    });
    
    
    
    Bridge.init();
})(this);
