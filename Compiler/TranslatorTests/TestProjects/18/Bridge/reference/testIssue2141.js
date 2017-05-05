    Bridge.define("TestIssue2141.Bridge2141", {
        statics: {
            methods: {
                Test: function Test() {
                    var $t;
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
                    var c3 = ($t=TestIssue2141.Config3.ctor(), $t.Id = "3", $t);
                    var c3Name = ($t=Options3.ctor(), $t.Id = "3Name", $t);

                    // These below should NOT contain Bridge.literal call
                    // Bridge.merge(Config4(), { id: "4" });
                    var c4 = ($t=TestIssue2141.Config4(), $t.Id = "4", $t);
                    // Bridge.merge(Options4(), { id: "4Name" });
                    var c4Name = ($t=Options4(), $t.Id = "4Name", $t);
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
