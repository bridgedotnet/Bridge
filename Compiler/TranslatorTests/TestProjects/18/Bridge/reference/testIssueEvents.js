﻿(function (globals) {
    "use strict";

    Bridge.define('TestIssueEvents.IssueEvents', {
        statics: {
            config: {
                init: function () {
                    Bridge.ready(this.main);
                }
            },
            main: function () {
                var wrong = new TestIssueEvents.IssueEvents.NotWorking$1(Bridge.Int32)();
                wrong.IsNotWorking = Bridge.fn.combine(wrong.IsNotWorking, $_.TestIssueEvents.IssueEvents.f1);
            }
        }
    });
    
    var $_ = {};
    
    Bridge.ns("TestIssueEvents.IssueEvents", $_)
    
    Bridge.apply($_.TestIssueEvents.IssueEvents, {
        f1: function () {
            return true;
        }
    });
    
    Bridge.define('TestIssueEvents.IssueEvents.NotWorking$1', function (T) { return {
        config: {
            events: {
                IsNotWorking: null
            }
        }
    }; });
    
    
    
    Bridge.init();
})(this);
