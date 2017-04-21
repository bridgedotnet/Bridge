    Bridge.define("TestIssue379.DataDefaultValue", {
        $literal: true,
        ctors: {
            ctor: function () {
                var $this = {};
                $this.$getType = function () { return TestIssue379.DataDefaultValue; };
                (function (){
                    this.Int1 = 0;
                    this.Int2 = 2;
                    this.Str3 = null;
                    this.Str4 = "Str4";
                    this.IntNull5 = null;
                    this.IntNull6 = 6;
                    this.Decimal7 = System.Decimal(0.0);
                    this.Decimal8 = System.Decimal(8);
                }).call($this);
                return $this;
            },
            $ctor1: function (mode) {
                var $this = {};
                $this.$getType = function () { return TestIssue379.DataDefaultValue; };
                (function (){
                    this.Int1 = 0;
                    this.Int2 = 2;
                    this.Str3 = null;
                    this.Str4 = "Str4";
                    this.IntNull5 = null;
                    this.IntNull6 = 6;
                    this.Decimal7 = System.Decimal(0.0);
                    this.Decimal8 = System.Decimal(8);

                }).call($this);
                return $this;
            }
        }
    });

    Bridge.define("TestIssue379.DataIgnore", {
        $literal: true,
        ctors: {
            ctor: function () {
                var $this = {};
                $this.$getType = function () { return TestIssue379.DataIgnore; };
                (function (){
                    this.Int1 = 0;
                    this.Int2 = 2;
                    this.Str3 = null;
                    this.Str4 = "Str4";
                    this.IntNull5 = null;
                    this.IntNull6 = 6;
                    this.Decimal7 = System.Decimal(0.0);
                    this.Decimal8 = System.Decimal(8);
                }).call($this);
                return $this;
            },
            $ctor1: function (mode) {
                var $this = {};
                $this.$getType = function () { return TestIssue379.DataIgnore; };
                (function (){
                    this.Int1 = 0;
                    this.Int2 = 2;
                    this.Str3 = null;
                    this.Str4 = "Str4";
                    this.IntNull5 = null;
                    this.IntNull6 = 6;
                    this.Decimal7 = System.Decimal(0.0);
                    this.Decimal8 = System.Decimal(8);

                }).call($this);
                return $this;
            }
        }
    });

    Bridge.define("TestIssue379.DataInitializer", {
        $literal: true,
        ctors: {
            ctor: function () {
                var $this = {};
                $this.$getType = function () { return TestIssue379.DataInitializer; };
                (function (){
                    this.Int1 = 0;
                    this.Int2 = 2;
                    this.Str3 = null;
                    this.Str4 = "Str4";
                    this.IntNull5 = null;
                    this.IntNull6 = 6;
                    this.Decimal7 = System.Decimal(0.0);
                    this.Decimal8 = System.Decimal(8);
                }).call($this);
                return $this;
            },
            $ctor1: function (mode) {
                var $this = {};
                $this.$getType = function () { return TestIssue379.DataInitializer; };
                (function (){
                    this.Int1 = 0;
                    this.Int2 = 2;
                    this.Str3 = null;
                    this.Str4 = "Str4";
                    this.IntNull5 = null;
                    this.IntNull6 = 6;
                    this.Decimal7 = System.Decimal(0.0);
                    this.Decimal8 = System.Decimal(8);

                }).call($this);
                return $this;
            }
        }
    });

    Bridge.define("TestIssue379.Tests", {
        methods: {
            TestDataIgnore: function TestDataIgnore() {
                var d1 = TestIssue379.DataIgnore.ctor();
                var d2 = Bridge.merge(TestIssue379.DataIgnore.ctor(), {
                    Int1: 1, Int2: 22, Str3: "3", Str4: "Str44", IntNull5: 5, IntNull6: 66, Decimal7: System.Decimal(7), Decimal8: System.Decimal(88)
                } );

                var d3 = TestIssue379.DataIgnore.$ctor1(0);
                var d4 = Bridge.merge(TestIssue379.DataIgnore.$ctor1(0), {
                    Int1: 1, Int2: 22, Str3: "3", Str4: "Str44", IntNull5: 5, IntNull6: 66, Decimal7: System.Decimal(7), Decimal8: System.Decimal(88)
                } );

                var d5 = TestIssue379.DataIgnore.$ctor1(2);
                var d6 = Bridge.merge(TestIssue379.DataIgnore.$ctor1(2), {
                    Int1: 1, Int2: 22, Str3: "3", Str4: "Str44", IntNull5: 5, IntNull6: 66, Decimal7: System.Decimal(7), Decimal8: System.Decimal(88)
                } );

                var d7 = TestIssue379.DataIgnore.$ctor1(1);
                var d8 = Bridge.merge(TestIssue379.DataIgnore.$ctor1(1), {
                    Int1: 1, Int2: 22, Str3: "3", Str4: "Str44", IntNull5: 5, IntNull6: 66, Decimal7: System.Decimal(7), Decimal8: System.Decimal(88)
                } );
            },
            TestDataDefaultValue: function TestDataDefaultValue() {
                var d1 = TestIssue379.DataDefaultValue.ctor();
                var d2 = Bridge.merge(TestIssue379.DataDefaultValue.ctor(), {
                    Int1: 1, Int2: 22, Str3: "3", Str4: "Str44", IntNull5: 5, IntNull6: 66, Decimal7: System.Decimal(7), Decimal8: System.Decimal(88)
                } );

                var d3 = TestIssue379.DataDefaultValue.$ctor1(0);
                var d4 = Bridge.merge(TestIssue379.DataDefaultValue.$ctor1(0), {
                    Int1: 1, Int2: 22, Str3: "3", Str4: "Str44", IntNull5: 5, IntNull6: 66, Decimal7: System.Decimal(7), Decimal8: System.Decimal(88)
                } );

                var d5 = TestIssue379.DataDefaultValue.$ctor1(2);
                var d6 = Bridge.merge(TestIssue379.DataDefaultValue.$ctor1(2), {
                    Int1: 1, Int2: 22, Str3: "3", Str4: "Str44", IntNull5: 5, IntNull6: 66, Decimal7: System.Decimal(7), Decimal8: System.Decimal(88)
                } );

                var d7 = TestIssue379.DataDefaultValue.$ctor1(1);
                var d8 = Bridge.merge(TestIssue379.DataDefaultValue.$ctor1(1), {
                    Int1: 1, Int2: 22, Str3: "3", Str4: "Str44", IntNull5: 5, IntNull6: 66, Decimal7: System.Decimal(7), Decimal8: System.Decimal(88)
                } );
            },
            TestDataInitializer: function TestDataInitializer() {
                var d1 = TestIssue379.DataInitializer.ctor();
                var d2 = Bridge.merge(TestIssue379.DataInitializer.ctor(), {
                    Int1: 1, Int2: 22, Str3: "3", Str4: "Str44", IntNull5: 5, IntNull6: 66, Decimal7: System.Decimal(7), Decimal8: System.Decimal(88)
                } );

                var d3 = TestIssue379.DataInitializer.$ctor1(0);
                var d4 = Bridge.merge(TestIssue379.DataInitializer.$ctor1(0), {
                    Int1: 1, Int2: 22, Str3: "3", Str4: "Str44", IntNull5: 5, IntNull6: 66, Decimal7: System.Decimal(7), Decimal8: System.Decimal(88)
                } );

                var d5 = TestIssue379.DataInitializer.$ctor1(2);
                var d6 = Bridge.merge(TestIssue379.DataInitializer.$ctor1(2), {
                    Int1: 1, Int2: 22, Str3: "3", Str4: "Str44", IntNull5: 5, IntNull6: 66, Decimal7: System.Decimal(7), Decimal8: System.Decimal(88)
                } );

                var d7 = TestIssue379.DataInitializer.$ctor1(1);
                var d8 = Bridge.merge(TestIssue379.DataInitializer.$ctor1(1), {
                    Int1: 1, Int2: 22, Str3: "3", Str4: "Str44", IntNull5: 5, IntNull6: 66, Decimal7: System.Decimal(7), Decimal8: System.Decimal(88)
                } );
            }
        }
    });
