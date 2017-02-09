    Bridge.define("TestIssue2077.Tests", {
        statics: {
            checkUnboxAttribute: function () {
                var o = Bridge.box(1, System.Int32);
                var i = 1;
                var s = "2";

                var ext1 = new TestIssue2077.Ext1();

                // Should have Bridge.unbox(o) in method calls for object parameters
                ext1.doSomething(Bridge.unbox(o), 1);
                TestIssue2077.Ext1.doSomethingStatic(Bridge.unbox(o), i, 1, s, "s");

                // Should NOT have Bridge.unbox(o) in method calls
                ext1.overriddenUnbox(o);
                TestIssue2077.Ext1.overriddenUnboxStatic(o);

                var ext2 = new TestIssue2077.Ext2();

                // Should NOT have Bridge.unbox(o) in method calls for object parameters
                ext2.doSomething(o, 2);
                TestIssue2077.Ext2.doSomethingStatic(o, i, 1, s, "s");

                // Should have Bridge.unbox(o) in method calls
                ext2.overriddenUnbox(Bridge.unbox(o));
                TestIssue2077.Ext2.overriddenUnboxStatic(Bridge.unbox(o));

                var ext3 = new TestIssue2077.Ext3();

                // Should have Bridge.unbox(o) in method calls for object parameters
                ext3.doSomething(Bridge.unbox(o), 3);
                TestIssue2077.Ext3.doSomethingStatic(Bridge.unbox(o), i, 1, s, "s");

                // Should NOT have Bridge.unbox(o) in method calls
                ext3.overriddenUnbox(o);
                TestIssue2077.Ext3.overriddenUnboxStatic(o);
            }
        }
    });
