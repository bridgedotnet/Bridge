
    Bridge.define('TestIssue1035.StructBridge1035', {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new TestIssue1035.StructBridge1035(); }
        },
        config: {
            properties: {
                Data: 0
            }
        },
        ctor: function () {
            this.$initialize();
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + 6481214800;
            hash = hash * 23 + (this.Data == null ? 0 : Bridge.getHashCode(this.Data));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o, TestIssue1035.StructBridge1035)) {
                return false;
            }
            return Bridge.equals(this.Data, o.Data);
        },
        $clone: function (to) { return this; }
    });

    Bridge.define('TestIssue379.DataDefaultValue', {
        $literal: true,
        ctor: function () {
            var $this = {};
            (function(){
                this.int1 = 0;
                this.int2 = 2;
                this.str3 = null;
                this.str4 = "Str4";
                this.intNull5 = null;
                this.intNull6 = 6;
                this.decimal7 = System.Decimal(0.0);
                this.decimal8 = System.Decimal(8);
            }).call($this);
            return $this;
        },
        $ctor1: function (mode) {
            var $this = {};
            (function(){
                this.int1 = 0;
                this.int2 = 2;
                this.str3 = null;
                this.str4 = "Str4";
                this.intNull5 = null;
                this.intNull6 = 6;
                this.decimal7 = System.Decimal(0.0);
                this.decimal8 = System.Decimal(8);

            }).call($this);
            return $this;
        }
    });

    Bridge.define('TestIssue379.DataIgnore', {
        $literal: true,
        ctor: function () {
            var $this = {};
            (function(){
                this.int1 = 0;
                this.int2 = 2;
                this.str3 = null;
                this.str4 = "Str4";
                this.intNull5 = null;
                this.intNull6 = 6;
                this.decimal7 = System.Decimal(0.0);
                this.decimal8 = System.Decimal(8);
            }).call($this);
            return $this;
        },
        $ctor1: function (mode) {
            var $this = {};
            (function(){
                this.int1 = 0;
                this.int2 = 2;
                this.str3 = null;
                this.str4 = "Str4";
                this.intNull5 = null;
                this.intNull6 = 6;
                this.decimal7 = System.Decimal(0.0);
                this.decimal8 = System.Decimal(8);

            }).call($this);
            return $this;
        }
    });

    Bridge.define('TestIssue379.DataInitializer', {
        $literal: true,
        ctor: function () {
            var $this = {};
            (function(){
                this.int1 = 0;
                this.int2 = 2;
                this.str3 = null;
                this.str4 = "Str4";
                this.intNull5 = null;
                this.intNull6 = 6;
                this.decimal7 = System.Decimal(0.0);
                this.decimal8 = System.Decimal(8);
            }).call($this);
            return $this;
        },
        $ctor1: function (mode) {
            var $this = {};
            (function(){
                this.int1 = 0;
                this.int2 = 2;
                this.str3 = null;
                this.str4 = "Str4";
                this.intNull5 = null;
                this.intNull6 = 6;
                this.decimal7 = System.Decimal(0.0);
                this.decimal8 = System.Decimal(8);

            }).call($this);
            return $this;
        }
    });

    Bridge.define('TestIssue379.Tests', {
        testDataIgnore: function () {
            var d1 = TestIssue379.DataIgnore.ctor();
            var d2 = Bridge.merge(TestIssue379.DataIgnore.ctor(), {
                int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88)
            } );

            var d3 = TestIssue379.DataIgnore.$ctor1(0);
            var d4 = Bridge.merge(TestIssue379.DataIgnore.$ctor1(0), {
                int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88)
            } );

            var d5 = TestIssue379.DataIgnore.$ctor1(2);
            var d6 = Bridge.merge(TestIssue379.DataIgnore.$ctor1(2), {
                int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88)
            } );

            var d7 = TestIssue379.DataIgnore.$ctor1(1);
            var d8 = Bridge.merge(TestIssue379.DataIgnore.$ctor1(1), {
                int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88)
            } );
        },
        testDataDefaultValue: function () {
            var d1 = TestIssue379.DataDefaultValue.ctor();
            var d2 = Bridge.merge(TestIssue379.DataDefaultValue.ctor(), {
                int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88)
            } );

            var d3 = TestIssue379.DataDefaultValue.$ctor1(0);
            var d4 = Bridge.merge(TestIssue379.DataDefaultValue.$ctor1(0), {
                int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88)
            } );

            var d5 = TestIssue379.DataDefaultValue.$ctor1(2);
            var d6 = Bridge.merge(TestIssue379.DataDefaultValue.$ctor1(2), {
                int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88)
            } );

            var d7 = TestIssue379.DataDefaultValue.$ctor1(1);
            var d8 = Bridge.merge(TestIssue379.DataDefaultValue.$ctor1(1), {
                int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88)
            } );
        },
        testDataInitializer: function () {
            var d1 = TestIssue379.DataInitializer.ctor();
            var d2 = Bridge.merge(TestIssue379.DataInitializer.ctor(), {
                int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88)
            } );

            var d3 = TestIssue379.DataInitializer.$ctor1(0);
            var d4 = Bridge.merge(TestIssue379.DataInitializer.$ctor1(0), {
                int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88)
            } );

            var d5 = TestIssue379.DataInitializer.$ctor1(2);
            var d6 = Bridge.merge(TestIssue379.DataInitializer.$ctor1(2), {
                int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88)
            } );

            var d7 = TestIssue379.DataInitializer.$ctor1(1);
            var d8 = Bridge.merge(TestIssue379.DataInitializer.$ctor1(1), {
                int1: 1, int2: 22, str3: "3", str4: "Str44", intNull5: 5, intNull6: 66, decimal7: System.Decimal(7), decimal8: System.Decimal(88)
            } );
        }
    });
