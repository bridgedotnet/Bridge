    Bridge.define("TestIssue2141.Bridge2141", {
        statics: {
            test: function () {
                // #2141 Skip writing type information to [External] [ObjectLiteral]

                // These below should NOT contain Bridge.literal call
                var c1 = { id: "1" };
                // These below should NOT contain Bridge.literal call as [Name] used
                // { id: "1Name" }
                var c1Name = { id: "1Name" };

                // These below should NOT contain Bridge.literal call
                // ({ id: "..." });
                var c2 = { id: "2" };
                var c2Name = { id: "2Name" };

                // These below should NOT contain Bridge.literal call
                // Bridge.merge(.ctor(), { id: "..." });
                var c3 = Bridge.merge(TestIssue2141.Config3.ctor(), {
                    id: "3"
                } );
                var c3Name = Bridge.merge(Options3.ctor(), {
                    id: "3Name"
                } );

                // These below should NOT contain Bridge.literal call
                // Bridge.merge(Config4(), { id: "4" });
                var c4 = Bridge.merge(TestIssue2141.Config4(), {
                    id: "4"
                } );
                // Bridge.merge(Options4(), { id: "4Name" });
                var c4Name = Bridge.merge(Options4(), {
                    id: "4Name"
                } );
            }
        }
    });

    Bridge.define("TestIssue2141.Config3", {
        $literal: true,
        ctor: function () {
            var $this = {};
            $this.$getType = function() { return TestIssue2141.Config3; };
            (function(){
                this.id = null;
            }).call($this);
            return $this;
        }
    });

    Bridge.define("Options3", {
        $literal: true,
        ctor: function () {
            var $this = {};
            $this.$getType = function() { return Options3; };
            (function(){
                this.id = null;
            }).call($this);
            return $this;
        }
    });
