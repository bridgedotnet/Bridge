    Bridge.define("TestIssue2077.Tests", {
        statics: {
            methods: {
                CheckUnboxAttribute: function CheckUnboxAttribute () {
                    var o = Bridge.box(1, System.Int32);
                    var i = 1;
                    var s = "2";

                    var ext1 = new TestIssue2077.Ext1();

                    // Should have Bridge.unbox(o) in method calls for object parameters
                    ext1.DoSomething(Bridge.unbox(o), 1);
                    TestIssue2077.Ext1.DoSomethingStatic(Bridge.unbox(o), i, 1, s, "s");

                    // Should NOT have Bridge.unbox(o) in method calls
                    ext1.OverriddenUnbox(o);
                    TestIssue2077.Ext1.OverriddenUnboxStatic(o);

                    var ext2 = new TestIssue2077.Ext2();

                    // Should NOT have Bridge.unbox(o) in method calls for object parameters
                    ext2.DoSomething(o, 2);
                    TestIssue2077.Ext2.DoSomethingStatic(o, i, 1, s, "s");

                    // Should have Bridge.unbox(o) in method calls
                    ext2.OverriddenUnbox(Bridge.unbox(o));
                    TestIssue2077.Ext2.OverriddenUnboxStatic(Bridge.unbox(o));

                    var ext3 = new TestIssue2077.Ext3();

                    // Should have Bridge.unbox(o) in method calls for object parameters
                    ext3.DoSomething(Bridge.unbox(o), 3);
                    TestIssue2077.Ext3.DoSomethingStatic(Bridge.unbox(o), i, 1, s, "s");

                    // Should NOT have Bridge.unbox(o) in method calls
                    ext3.OverriddenUnbox(o);
                    TestIssue2077.Ext3.OverriddenUnboxStatic(o);
                }
            }
        }
    });
