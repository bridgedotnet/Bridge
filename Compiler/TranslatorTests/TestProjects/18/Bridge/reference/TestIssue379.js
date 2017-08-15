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
            TestDataIgnore: function TestDataIgnore () {
                var $t;
                var d1 = TestIssue379.DataIgnore.ctor();
                var d2 = ($t = TestIssue379.DataIgnore.ctor(), $t.Int1 = 1, $t.Int2 = 22, $t.Str3 = "3", $t.Str4 = "Str44", $t.IntNull5 = 5, $t.IntNull6 = 66, $t.Decimal7 = System.Decimal(7), $t.Decimal8 = System.Decimal(88), $t);

                var d3 = TestIssue379.DataIgnore.$ctor1(0);
                var d4 = ($t = TestIssue379.DataIgnore.$ctor1(0), $t.Int1 = 1, $t.Int2 = 22, $t.Str3 = "3", $t.Str4 = "Str44", $t.IntNull5 = 5, $t.IntNull6 = 66, $t.Decimal7 = System.Decimal(7), $t.Decimal8 = System.Decimal(88), $t);

                var d5 = TestIssue379.DataIgnore.$ctor1(2);
                var d6 = ($t = TestIssue379.DataIgnore.$ctor1(2), $t.Int1 = 1, $t.Int2 = 22, $t.Str3 = "3", $t.Str4 = "Str44", $t.IntNull5 = 5, $t.IntNull6 = 66, $t.Decimal7 = System.Decimal(7), $t.Decimal8 = System.Decimal(88), $t);

                var d7 = TestIssue379.DataIgnore.$ctor1(1);
                var d8 = ($t = TestIssue379.DataIgnore.$ctor1(1), $t.Int1 = 1, $t.Int2 = 22, $t.Str3 = "3", $t.Str4 = "Str44", $t.IntNull5 = 5, $t.IntNull6 = 66, $t.Decimal7 = System.Decimal(7), $t.Decimal8 = System.Decimal(88), $t);
            },
            TestDataDefaultValue: function TestDataDefaultValue () {
                var $t;
                var d1 = TestIssue379.DataDefaultValue.ctor();
                var d2 = ($t = TestIssue379.DataDefaultValue.ctor(), $t.Int1 = 1, $t.Int2 = 22, $t.Str3 = "3", $t.Str4 = "Str44", $t.IntNull5 = 5, $t.IntNull6 = 66, $t.Decimal7 = System.Decimal(7), $t.Decimal8 = System.Decimal(88), $t);

                var d3 = TestIssue379.DataDefaultValue.$ctor1(0);
                var d4 = ($t = TestIssue379.DataDefaultValue.$ctor1(0), $t.Int1 = 1, $t.Int2 = 22, $t.Str3 = "3", $t.Str4 = "Str44", $t.IntNull5 = 5, $t.IntNull6 = 66, $t.Decimal7 = System.Decimal(7), $t.Decimal8 = System.Decimal(88), $t);

                var d5 = TestIssue379.DataDefaultValue.$ctor1(2);
                var d6 = ($t = TestIssue379.DataDefaultValue.$ctor1(2), $t.Int1 = 1, $t.Int2 = 22, $t.Str3 = "3", $t.Str4 = "Str44", $t.IntNull5 = 5, $t.IntNull6 = 66, $t.Decimal7 = System.Decimal(7), $t.Decimal8 = System.Decimal(88), $t);

                var d7 = TestIssue379.DataDefaultValue.$ctor1(1);
                var d8 = ($t = TestIssue379.DataDefaultValue.$ctor1(1), $t.Int1 = 1, $t.Int2 = 22, $t.Str3 = "3", $t.Str4 = "Str44", $t.IntNull5 = 5, $t.IntNull6 = 66, $t.Decimal7 = System.Decimal(7), $t.Decimal8 = System.Decimal(88), $t);
            },
            TestDataInitializer: function TestDataInitializer () {
                var $t;
                var d1 = TestIssue379.DataInitializer.ctor();
                var d2 = ($t = TestIssue379.DataInitializer.ctor(), $t.Int1 = 1, $t.Int2 = 22, $t.Str3 = "3", $t.Str4 = "Str44", $t.IntNull5 = 5, $t.IntNull6 = 66, $t.Decimal7 = System.Decimal(7), $t.Decimal8 = System.Decimal(88), $t);

                var d3 = TestIssue379.DataInitializer.$ctor1(0);
                var d4 = ($t = TestIssue379.DataInitializer.$ctor1(0), $t.Int1 = 1, $t.Int2 = 22, $t.Str3 = "3", $t.Str4 = "Str44", $t.IntNull5 = 5, $t.IntNull6 = 66, $t.Decimal7 = System.Decimal(7), $t.Decimal8 = System.Decimal(88), $t);

                var d5 = TestIssue379.DataInitializer.$ctor1(2);
                var d6 = ($t = TestIssue379.DataInitializer.$ctor1(2), $t.Int1 = 1, $t.Int2 = 22, $t.Str3 = "3", $t.Str4 = "Str44", $t.IntNull5 = 5, $t.IntNull6 = 66, $t.Decimal7 = System.Decimal(7), $t.Decimal8 = System.Decimal(88), $t);

                var d7 = TestIssue379.DataInitializer.$ctor1(1);
                var d8 = ($t = TestIssue379.DataInitializer.$ctor1(1), $t.Int1 = 1, $t.Int2 = 22, $t.Str3 = "3", $t.Str4 = "Str44", $t.IntNull5 = 5, $t.IntNull6 = 66, $t.Decimal7 = System.Decimal(7), $t.Decimal8 = System.Decimal(88), $t);
            }
        }
    });
