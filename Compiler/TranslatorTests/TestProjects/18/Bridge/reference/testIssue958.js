(function (globals) {
    "use strict";

    Bridge.define('TestIssue958.IMessage', {
        $interface: true
    });
    
    Bridge.define('TestIssue958.Issue958', {
        statics: {
            main1: function () {
                var message = new TestIssue958.SetValue("Hi!");
                TestIssue958.Issue958.processMessage(message);
            },
            processMessage: function (message) {
                // The call should have generic type as function parameter
                TestIssue958.MessageExtensions.if(TestIssue958.SetValue, TestIssue958.MessageExtensions.if(TestIssue958.SetName, message, $_.TestIssue958.Issue958.f1), $_.TestIssue958.Issue958.f2);
            }
        }
    });
    
    var $_ = {};
    
    Bridge.ns("TestIssue958.Issue958", $_);
    
    Bridge.apply($_.TestIssue958.Issue958, {
        f1: function (action) {
            System.Console.log("Name: " + action.getName());
        },
        f2: function (action) {
            System.Console.log("Value: " + action.getValue());
        }
    });
    
    Bridge.define('TestIssue958.MessageExtensions', {
        statics: {
            if: function (T, source, work) {
                if (Bridge.is(source, T)) {
                    work(Bridge.cast(source, T));
                }
                return source;
            }
        }
    });
    
    Bridge.define('TestIssue958.SetName', {
        inherits: [TestIssue958.IMessage],
        config: {
            properties: {
                Name: null
            }
        },
        constructor: function (name) {
            this.setName(name);
        }
    });
    
    Bridge.define('TestIssue958.SetValue', {
        inherits: [TestIssue958.IMessage],
        config: {
            properties: {
                Value: null
            }
        },
        constructor: function (value) {
            this.setValue(value);
        }
    });
    
    
    
    Bridge.init();
})(this);
