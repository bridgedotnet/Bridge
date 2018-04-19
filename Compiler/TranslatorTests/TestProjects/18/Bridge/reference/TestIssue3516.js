    Bridge.define("TestIssue3516.ExternalCastRuleTest", {
        statics: {
            methods: {
                DefaultExternalCast: function DefaultExternalCast () {
                    var obj = "test";
                    var el = Bridge.cast(obj, ExternalNS3516.ExternalClass3516);
                },
                PlainExternalCast: function PlainExternalCast () {
                    var obj = "test";
                    var el = obj;
                },
                ManagedExternalCast: function ManagedExternalCast () {
                    var obj = "test";
                    var el = Bridge.cast(obj, ExternalNS3516.ExternalClass3516);
                }
            }
        }
    });
