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
                var $t, $t1, $t2, $t3;
                var d1 = TestIssue379.DataIgnore.ctor();
                var d2 = ($t=TestIssue379.DataIgnore.ctor(), $t.Int1 = 1, $t.Int2 = 22, $t.Str3 = "3", $t.Str4 = "Str44", $t.IntNull5 = 5, $t.IntNull6 = 66, $t.Decimal7 = System.Decimal(7), $t.Decimal8 = System.Decimal(88), $t);

                var d3 = TestIssue379.DataIgnore.$ctor1(0);
                var d4 = ($t1=TestIssue379.DataIgnore.$ctor1(0), $t1.Int1 = 1, $t1.Int2 = 22, $t1.Str3 = "3", $t1.Str4 = "Str44", $t1.IntNull5 = 5, $t1.IntNull6 = 66, $t1.Decimal7 = System.Decimal(7), $t1.Decimal8 = System.Decimal(88), $t1);

                var d5 = TestIssue379.DataIgnore.$ctor1(2);
                var d6 = ($t2=TestIssue379.DataIgnore.$ctor1(2), $t2.Int1 = 1, $t2.Int2 = 22, $t2.Str3 = "3", $t2.Str4 = "Str44", $t2.IntNull5 = 5, $t2.IntNull6 = 66, $t2.Decimal7 = System.Decimal(7), $t2.Decimal8 = System.Decimal(88), $t2);

                var d7 = TestIssue379.DataIgnore.$ctor1(1);
                var d8 = ($t3=TestIssue379.DataIgnore.$ctor1(1), $t3.Int1 = 1, $t3.Int2 = 22, $t3.Str3 = "3", $t3.Str4 = "Str44", $t3.IntNull5 = 5, $t3.IntNull6 = 66, $t3.Decimal7 = System.Decimal(7), $t3.Decimal8 = System.Decimal(88), $t3);
            },
            TestDataDefaultValue: function TestDataDefaultValue() {
                var $t, $t1, $t2, $t3;
                var d1 = TestIssue379.DataDefaultValue.ctor();
                var d2 = ($t=TestIssue379.DataDefaultValue.ctor(), $t.Int1 = 1, $t.Int2 = 22, $t.Str3 = "3", $t.Str4 = "Str44", $t.IntNull5 = 5, $t.IntNull6 = 66, $t.Decimal7 = System.Decimal(7), $t.Decimal8 = System.Decimal(88), $t);

                var d3 = TestIssue379.DataDefaultValue.$ctor1(0);
                var d4 = ($t1=TestIssue379.DataDefaultValue.$ctor1(0), $t1.Int1 = 1, $t1.Int2 = 22, $t1.Str3 = "3", $t1.Str4 = "Str44", $t1.IntNull5 = 5, $t1.IntNull6 = 66, $t1.Decimal7 = System.Decimal(7), $t1.Decimal8 = System.Decimal(88), $t1);

                var d5 = TestIssue379.DataDefaultValue.$ctor1(2);
                var d6 = ($t2=TestIssue379.DataDefaultValue.$ctor1(2), $t2.Int1 = 1, $t2.Int2 = 22, $t2.Str3 = "3", $t2.Str4 = "Str44", $t2.IntNull5 = 5, $t2.IntNull6 = 66, $t2.Decimal7 = System.Decimal(7), $t2.Decimal8 = System.Decimal(88), $t2);

                var d7 = TestIssue379.DataDefaultValue.$ctor1(1);
                var d8 = ($t3=TestIssue379.DataDefaultValue.$ctor1(1), $t3.Int1 = 1, $t3.Int2 = 22, $t3.Str3 = "3", $t3.Str4 = "Str44", $t3.IntNull5 = 5, $t3.IntNull6 = 66, $t3.Decimal7 = System.Decimal(7), $t3.Decimal8 = System.Decimal(88), $t3);
            },
            TestDataInitializer: function TestDataInitializer() {
                var $t, $t1, $t2, $t3;
                var d1 = TestIssue379.DataInitializer.ctor();
                var d2 = ($t=TestIssue379.DataInitializer.ctor(), $t.Int1 = 1, $t.Int2 = 22, $t.Str3 = "3", $t.Str4 = "Str44", $t.IntNull5 = 5, $t.IntNull6 = 66, $t.Decimal7 = System.Decimal(7), $t.Decimal8 = System.Decimal(88), $t);

                var d3 = TestIssue379.DataInitializer.$ctor1(0);
                var d4 = ($t1=TestIssue379.DataInitializer.$ctor1(0), $t1.Int1 = 1, $t1.Int2 = 22, $t1.Str3 = "3", $t1.Str4 = "Str44", $t1.IntNull5 = 5, $t1.IntNull6 = 66, $t1.Decimal7 = System.Decimal(7), $t1.Decimal8 = System.Decimal(88), $t1);

                var d5 = TestIssue379.DataInitializer.$ctor1(2);
                var d6 = ($t2=TestIssue379.DataInitializer.$ctor1(2), $t2.Int1 = 1, $t2.Int2 = 22, $t2.Str3 = "3", $t2.Str4 = "Str44", $t2.IntNull5 = 5, $t2.IntNull6 = 66, $t2.Decimal7 = System.Decimal(7), $t2.Decimal8 = System.Decimal(88), $t2);

                var d7 = TestIssue379.DataInitializer.$ctor1(1);
                var d8 = ($t3=TestIssue379.DataInitializer.$ctor1(1), $t3.Int1 = 1, $t3.Int2 = 22, $t3.Str3 = "3", $t3.Str4 = "Str44", $t3.IntNull5 = 5, $t3.IntNull6 = 66, $t3.Decimal7 = System.Decimal(7), $t3.Decimal8 = System.Decimal(88), $t3);
            }
        }
    });
