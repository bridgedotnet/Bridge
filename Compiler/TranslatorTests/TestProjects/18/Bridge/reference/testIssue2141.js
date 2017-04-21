    Bridge.define("TestIssue2141.Bridge2141", {
        statics: {
            methods: {
                Test: function Test() {
                    // #2141 Skip writing type information to [External] [ObjectLiteral]

                    // These below should NOT contain Bridge.literal call
                    var c1 = { Id: "1" };
                    // These below should NOT contain Bridge.literal call as [Name] used
                    // { id: "1Name" }
                    var c1Name = { Id: "1Name" };

                    // These below should NOT contain Bridge.literal call
                    // ({ id: "..." });
                    var c2 = { Id: "2" };
                    var c2Name = { Id: "2Name" };

                    // These below should NOT contain Bridge.literal call
                    // Bridge.merge(.ctor(), { id: "..." });
                    var c3 = Bridge.merge(TestIssue2141.Config3.ctor(), {
                        Id: "3"
                    } );
                    var c3Name = Bridge.merge(Options3.ctor(), {
                        Id: "3Name"
                    } );

                    // These below should NOT contain Bridge.literal call
                    // Bridge.merge(Config4(), { id: "4" });
                    var c4 = Bridge.merge(TestIssue2141.Config4(), {
                        Id: "4"
                    } );
                    // Bridge.merge(Options4(), { id: "4Name" });
                    var c4Name = Bridge.merge(Options4(), {
                        Id: "4Name"
                    } );
                }
            }
        }
    });

    Bridge.define("TestIssue2141.Config3", {
        $literal: true,
        ctors: {
            ctor: function () {
                var $this = {};
                $this.$getType = function () { return TestIssue2141.Config3; };
                (function (){
                    this.Id = null;
                }).call($this);
                return $this;
            }
        }
    });
