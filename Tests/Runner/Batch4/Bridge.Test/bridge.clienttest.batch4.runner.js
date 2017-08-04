/**
 * @compiler Bridge.NET 16.0.0
 */
Bridge.assembly("Bridge.Test.Bridge.ClientTest.Batch4", function ($asm, globals) {
    

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner", {
        main: function Main () {
            Bridge.Test.Runtime.ContextHelper.Init();
            QUnit.test("ActivatorTests - CreateInstanceWithNoArgumentsWorksForClassWithJsonDefaultConstructor", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ActivatorTests.CreateInstanceWithNoArgumentsWorksForClassWithJsonDefaultConstructor);
            QUnit.test("AppDomainTests - GetAssembliesWorks_SPI_1646", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.AppDomainTests.GetAssembliesWorks_SPI_1646);
            QUnit.test("DelegateTests - CreateWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DelegateTests.CreateWorks);
            QUnit.test("DelegateTests - RemoveDoesNotAffectOriginal_SPI_1563", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DelegateTests.RemoveDoesNotAffectOriginal_SPI_1563);
            QUnit.test("DelegateTests - RemoveWorksWithMethodGroupConversion_SPI_1563", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DelegateTests.RemoveWorksWithMethodGroupConversion_SPI_1563);
            QUnit.test("DelegateTests - CloneWorks_SPI_1563", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DelegateTests.CloneWorks_SPI_1563);
            QUnit.test("DelegateTests - CloningDelegateToTheSameTypeCreatesANewClone_SPI_1563", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DelegateTests.CloningDelegateToTheSameTypeCreatesANewClone_SPI_1563);
            QUnit.test("DelegateTests - EqualityAndInequalityOperatorsAndEqualsMethod_SPI_1563", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DelegateTests.EqualityAndInequalityOperatorsAndEqualsMethod_SPI_1563);
            QUnit.test("ContractExceptionTests - TypePropertiesAreCorrect", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ContractExceptionTests.TypePropertiesAreCorrect);
            QUnit.test("ContractExceptionTests - DefaultConstructorWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ContractExceptionTests.DefaultConstructorWorks);
            QUnit.test("ErrorExceptionTests - TypePropertiesAreCorrect_SPI_1564", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ErrorExceptionTests.TypePropertiesAreCorrect_SPI_1564);
            QUnit.test("ErrorExceptionTests - ErrorOnlyConstructorWorks_SPI_1564", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ErrorExceptionTests.ErrorOnlyConstructorWorks_SPI_1564);
            QUnit.test("ErrorExceptionTests - ErrorAndMessageAndInnerExceptionConstructorWorks_SPI_1564", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ErrorExceptionTests.ErrorAndMessageAndInnerExceptionConstructorWorks_SPI_1564);
            QUnit.test("FormattableStringTests - ToStringWithFormatProviderWorks_SPI_1651", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.FormattableStringTests.ToStringWithFormatProviderWorks_SPI_1651);
            QUnit.test("FormattableStringTests - IFormattableToStringWorks_SPI_1633_1651", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.FormattableStringTests.IFormattableToStringWorks_SPI_1633_1651);
            QUnit.test("RuntimeHelpersTests - GetHashCodeCallsGetHashCodeNonVirtually_SPI_1570", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RuntimeHelpersTests.GetHashCodeCallsGetHashCodeNonVirtually_SPI_1570);
            QUnit.test("JsonTests - NonGenericParseWorks_SPI_1574", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.JsonTests.NonGenericParseWorks_SPI_1574);
            QUnit.test("JsonTests - GenericParseWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.JsonTests.GenericParseWorks);
            QUnit.test("JsonTests - NonGenericParseWithCallbackWorks_SPI_1574", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.JsonTests.NonGenericParseWithCallbackWorks_SPI_1574);
            QUnit.test("JsonTests - GenericParseWithCallbackWorks_SPI_1574", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.JsonTests.GenericParseWithCallbackWorks_SPI_1574);
            QUnit.test("CharTests - TypePropertiesAreInt32_SPI_1603", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CharTests.TypePropertiesAreInt32_SPI_1603);
            QUnit.test("Date - ParseWorks_SPI_1624", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.ParseWorks_SPI_1624);
            QUnit.test("DecimalTests - ConversionsToDecimalWork_SPI_1580", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests.ConversionsToDecimalWork_SPI_1580);
            QUnit.test("DecimalTests - NullableConversionsToDecimalWork_SPI_1580_1581_1587", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests.NullableConversionsToDecimalWork_SPI_1580_1581_1587);
            QUnit.test("DecimalTests - DecimalToSByte_SPI_1580", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests.DecimalToSByte_SPI_1580);
            QUnit.test("DecimalTests - DecimalToByte_SPI_1580", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests.DecimalToByte_SPI_1580);
            QUnit.test("DecimalTests - DecimalToShort_SPI_1580", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests.DecimalToShort_SPI_1580);
            QUnit.test("DecimalTests - DecimalToUShort_SPI_1580", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests.DecimalToUShort_SPI_1580);
            QUnit.test("DecimalTests - DecimalToInt_SPI_1580", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests.DecimalToInt_SPI_1580);
            QUnit.test("DecimalTests - DecimalToUInt_SPI_1580", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests.DecimalToUInt_SPI_1580);
            QUnit.test("DecimalTests - DecimalToLong_SPI_1578", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests.DecimalToLong_SPI_1578);
            QUnit.test("DecimalTests - DecimalToULong_SPI_1584_1585", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests.DecimalToULong_SPI_1584_1585);
            QUnit.test("DecimalTests - NullableDecimalToLong_SPI_1582", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests.NullableDecimalToLong_SPI_1582);
            QUnit.test("DecimalTests - NullableDecimalToULong_SPI_1582", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests.NullableDecimalToULong_SPI_1582);
            QUnit.test("DecimalTests - OperatorsWork_SPI_1583", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests.OperatorsWork_SPI_1583);
            QUnit.test("DecimalTests - LiftedOperatorsWork_SPI_1583", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests.LiftedOperatorsWork_SPI_1583);
            QUnit.test("DecimalTests - ParseWorks_SPI_1586", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests.ParseWorks_SPI_1586);
            QUnit.test("DecimalTests - TryParseWorks_SPI_1586", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests.TryParseWorks_SPI_1586);
            QUnit.test("DecimalTests - ImplementationTests_SPI_1588_1590_1650", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests.ImplementationTests_SPI_1588_1590_1650);
            QUnit.test("Int32Tests - IntegerModuloWorks_SPI_1602", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.IntegerModuloWorks_SPI_1602);
            QUnit.test("StringTests - FormatWorksWithIFormattable_SPI_1598", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.FormatWorksWithIFormattable_SPI_1598);
            QUnit.test("StringTests - FormatWorksWithIFormattableAndFormatProvider_SPI_1598", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.FormatWorksWithIFormattableAndFormatProvider_SPI_1598);
            QUnit.test("UserDefinedStructTests - DefaultValueOfStructWithInlineCodeDefaultConstructorWorks_SPI_1610", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UserDefinedStructTests.DefaultValueOfStructWithInlineCodeDefaultConstructorWorks_SPI_1610);
            QUnit.test("UserDefinedStructTests - DefaultValueOfStructWithInlineCodeDefaultConstructorWorksGeneric_SPI_1610", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UserDefinedStructTests.DefaultValueOfStructWithInlineCodeDefaultConstructorWorksGeneric_SPI_1610);
            QUnit.test("UserDefinedStructTests - CanLiftUserDefinedConversionOperator_SPI_1611", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UserDefinedStructTests.CanLiftUserDefinedConversionOperator_SPI_1611);
            QUnit.test("UserDefinedStructTests - AutoEventBackingFieldsAreClonedWhenValueTypeIsCopied_SPI_1612", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UserDefinedStructTests.AutoEventBackingFieldsAreClonedWhenValueTypeIsCopied_SPI_1612);
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ActivatorTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.ActivatorTests)],
        statics: {
            methods: {
                CreateInstanceWithNoArgumentsWorksForClassWithJsonDefaultConstructor: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.ActivatorTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ActivatorTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CreateInstanceWithNoArgumentsWorksForClassWithJsonDefaultConstructor()", $t.Line = "23", $t));
                    t.Fixture.CreateInstanceWithNoArgumentsWorksForClassWithJsonDefaultConstructor();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.ActivatorTests", $t.File = "Batch4\\ActivatorTests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.AppDomainTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.AppDomainTests)],
        statics: {
            methods: {
                GetAssembliesWorks_SPI_1646: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.AppDomainTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.AppDomainTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetAssembliesWorks_SPI_1646()", $t.Line = "9", $t));
                    t.Fixture.GetAssembliesWorks_SPI_1646();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.AppDomainTests", $t.File = "Batch4\\AppDomainTests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CharTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.CharTests)],
        statics: {
            methods: {
                TypePropertiesAreInt32_SPI_1603: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.CharTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CharTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypePropertiesAreInt32_SPI_1603()", $t.Line = "9", $t));
                    t.Fixture.TypePropertiesAreInt32_SPI_1603();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.SimpleTypes.CharTests", $t.File = "Batch4\\SimpleTypes\\CharTests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ContractExceptionTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Exceptions.ContractExceptionTests)],
        statics: {
            methods: {
                TypePropertiesAreCorrect: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Exceptions.ContractExceptionTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ContractExceptionTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypePropertiesAreCorrect()", $t.Line = "11", $t));
                    t.Fixture.TypePropertiesAreCorrect();
                },
                DefaultConstructorWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Exceptions.ContractExceptionTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ContractExceptionTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultConstructorWorks()", $t.Line = "25", $t));
                    t.Fixture.DefaultConstructorWorks();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.Exceptions.ContractExceptionTests", $t.File = "Batch4\\Exceptions\\ContractExceptionTests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests)],
        statics: {
            methods: {
                ParseWorks_SPI_1624: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ParseWorks_SPI_1624()", $t.Line = "12", $t));
                    t.Fixture.ParseWorks_SPI_1624();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.SimpleTypes.DateTests", $t.File = "Batch4\\SimpleTypes\\JsDateTests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests)],
        statics: {
            methods: {
                ConversionsToDecimalWork_SPI_1580: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ConversionsToDecimalWork_SPI_1580()", $t.Line = "16", $t));
                    t.Fixture.ConversionsToDecimalWork_SPI_1580();
                },
                NullableConversionsToDecimalWork_SPI_1580_1581_1587: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "NullableConversionsToDecimalWork_SPI_1580_1581_1587()", $t.Line = "40", $t));
                    t.Fixture.NullableConversionsToDecimalWork_SPI_1580_1581_1587();
                },
                DecimalToSByte_SPI_1580: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DecimalToSByte_SPI_1580()", $t.Line = "113", $t));
                    t.Fixture.DecimalToSByte_SPI_1580();
                },
                DecimalToByte_SPI_1580: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DecimalToByte_SPI_1580()", $t.Line = "128", $t));
                    t.Fixture.DecimalToByte_SPI_1580();
                },
                DecimalToShort_SPI_1580: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DecimalToShort_SPI_1580()", $t.Line = "143", $t));
                    t.Fixture.DecimalToShort_SPI_1580();
                },
                DecimalToUShort_SPI_1580: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DecimalToUShort_SPI_1580()", $t.Line = "158", $t));
                    t.Fixture.DecimalToUShort_SPI_1580();
                },
                DecimalToInt_SPI_1580: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DecimalToInt_SPI_1580()", $t.Line = "173", $t));
                    t.Fixture.DecimalToInt_SPI_1580();
                },
                DecimalToUInt_SPI_1580: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DecimalToUInt_SPI_1580()", $t.Line = "188", $t));
                    t.Fixture.DecimalToUInt_SPI_1580();
                },
                DecimalToLong_SPI_1578: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DecimalToLong_SPI_1578()", $t.Line = "203", $t));
                    t.Fixture.DecimalToLong_SPI_1578();
                },
                DecimalToULong_SPI_1584_1585: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DecimalToULong_SPI_1584_1585()", $t.Line = "213", $t));
                    t.Fixture.DecimalToULong_SPI_1584_1585();
                },
                NullableDecimalToLong_SPI_1582: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "NullableDecimalToLong_SPI_1582()", $t.Line = "233", $t));
                    t.Fixture.NullableDecimalToLong_SPI_1582();
                },
                NullableDecimalToULong_SPI_1582: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "NullableDecimalToULong_SPI_1582()", $t.Line = "250", $t));
                    t.Fixture.NullableDecimalToULong_SPI_1582();
                },
                OperatorsWork_SPI_1583: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "OperatorsWork_SPI_1583()", $t.Line = "275", $t));
                    t.Fixture.OperatorsWork_SPI_1583();
                },
                LiftedOperatorsWork_SPI_1583: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "LiftedOperatorsWork_SPI_1583()", $t.Line = "293", $t));
                    t.Fixture.LiftedOperatorsWork_SPI_1583();
                },
                ParseWorks_SPI_1586: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ParseWorks_SPI_1586()", $t.Line = "312", $t));
                    t.Fixture.ParseWorks_SPI_1586();
                },
                TryParseWorks_SPI_1586: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TryParseWorks_SPI_1586()", $t.Line = "327", $t));
                    t.Fixture.TryParseWorks_SPI_1586();
                },
                ImplementationTests_SPI_1588_1590_1650: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ImplementationTests_SPI_1588_1590_1650()", $t.Line = "347", $t));
                    t.Fixture.ImplementationTests_SPI_1588_1590_1650();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests", $t.File = "Batch4\\SimpleTypes\\DecimalTests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DelegateTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.DelegateTests)],
        statics: {
            methods: {
                CreateWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.DelegateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DelegateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CreateWorks()", $t.Line = "38", $t));
                    t.Fixture.CreateWorks();
                },
                RemoveDoesNotAffectOriginal_SPI_1563: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.DelegateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DelegateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "RemoveDoesNotAffectOriginal_SPI_1563()", $t.Line = "48", $t));
                    t.Fixture.RemoveDoesNotAffectOriginal_SPI_1563();
                },
                RemoveWorksWithMethodGroupConversion_SPI_1563: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.DelegateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DelegateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "RemoveWorksWithMethodGroupConversion_SPI_1563()", $t.Line = "74", $t));
                    t.Fixture.RemoveWorksWithMethodGroupConversion_SPI_1563();
                },
                CloneWorks_SPI_1563: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.DelegateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DelegateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CloneWorks_SPI_1563()", $t.Line = "90", $t));
                    t.Fixture.CloneWorks_SPI_1563();
                },
                CloningDelegateToTheSameTypeCreatesANewClone_SPI_1563: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.DelegateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DelegateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CloningDelegateToTheSameTypeCreatesANewClone_SPI_1563()", $t.Line = "126", $t));
                    t.Fixture.CloningDelegateToTheSameTypeCreatesANewClone_SPI_1563();
                },
                EqualityAndInequalityOperatorsAndEqualsMethod_SPI_1563: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.DelegateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DelegateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "EqualityAndInequalityOperatorsAndEqualsMethod_SPI_1563()", $t.Line = "158", $t));
                    t.Fixture.EqualityAndInequalityOperatorsAndEqualsMethod_SPI_1563();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.DelegateTests", $t.File = "Batch4\\DelegateTests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ErrorExceptionTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Exceptions.ErrorExceptionTests)],
        statics: {
            methods: {
                TypePropertiesAreCorrect_SPI_1564: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Exceptions.ErrorExceptionTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ErrorExceptionTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypePropertiesAreCorrect_SPI_1564()", $t.Line = "9", $t));
                    t.Fixture.TypePropertiesAreCorrect_SPI_1564();
                },
                ErrorOnlyConstructorWorks_SPI_1564: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Exceptions.ErrorExceptionTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ErrorExceptionTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ErrorOnlyConstructorWorks_SPI_1564()", $t.Line = "30", $t));
                    t.Fixture.ErrorOnlyConstructorWorks_SPI_1564();
                },
                ErrorAndMessageAndInnerExceptionConstructorWorks_SPI_1564: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Exceptions.ErrorExceptionTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ErrorExceptionTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ErrorAndMessageAndInnerExceptionConstructorWorks_SPI_1564()", $t.Line = "62", $t));
                    t.Fixture.ErrorAndMessageAndInnerExceptionConstructorWorks_SPI_1564();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.Exceptions.ErrorExceptionTests", $t.File = "Batch4\\Exceptions\\JsErrorExceptionTests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.FormattableStringTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.FormattableStringTests)],
        statics: {
            methods: {
                ToStringWithFormatProviderWorks_SPI_1651: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.FormattableStringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.FormattableStringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithFormatProviderWorks_SPI_1651()", $t.Line = "28", $t));
                    t.Fixture.ToStringWithFormatProviderWorks_SPI_1651();
                },
                IFormattableToStringWorks_SPI_1633_1651: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.FormattableStringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.FormattableStringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IFormattableToStringWorks_SPI_1633_1651()", $t.Line = "36", $t));
                    t.Fixture.IFormattableToStringWorks_SPI_1633_1651();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.FormattableStringTests", $t.File = "Batch4\\FormattableStringTests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests)],
        statics: {
            methods: {
                IntegerModuloWorks_SPI_1602: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IntegerModuloWorks_SPI_1602()", $t.Line = "12", $t));
                    t.Fixture.IntegerModuloWorks_SPI_1602();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests", $t.File = "Batch4\\SimpleTypes\\Int32Tests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.JsonTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Serialization.JsonTests)],
        statics: {
            methods: {
                NonGenericParseWorks_SPI_1574: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Serialization.JsonTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.JsonTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "NonGenericParseWorks_SPI_1574()", $t.Line = "21", $t));
                    t.Fixture.NonGenericParseWorks_SPI_1574();
                },
                GenericParseWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Serialization.JsonTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.JsonTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GenericParseWorks()", $t.Line = "38", $t));
                    t.Fixture.GenericParseWorks();
                },
                NonGenericParseWithCallbackWorks_SPI_1574: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Serialization.JsonTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.JsonTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "NonGenericParseWithCallbackWorks_SPI_1574()", $t.Line = "46", $t));
                    t.Fixture.NonGenericParseWithCallbackWorks_SPI_1574();
                },
                GenericParseWithCallbackWorks_SPI_1574: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Serialization.JsonTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.JsonTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GenericParseWithCallbackWorks_SPI_1574()", $t.Line = "69", $t));
                    t.Fixture.GenericParseWithCallbackWorks_SPI_1574();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.Serialization.JsonTests", $t.File = "Batch4\\Serialization\\JsonTests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RuntimeHelpersTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Runtime.CompilerServices.RuntimeHelpersTests)],
        statics: {
            methods: {
                GetHashCodeCallsGetHashCodeNonVirtually_SPI_1570: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Runtime.CompilerServices.RuntimeHelpersTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RuntimeHelpersTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetHashCodeCallsGetHashCodeNonVirtually_SPI_1570()", $t.Line = "17", $t));
                    t.Fixture.GetHashCodeCallsGetHashCodeNonVirtually_SPI_1570();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.Runtime.CompilerServices.RuntimeHelpersTests", $t.File = "Batch4\\Runtime\\CompilerServices\\RuntimeHelpersTests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests)],
        statics: {
            methods: {
                FormatWorksWithIFormattable_SPI_1598: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "FormatWorksWithIFormattable_SPI_1598()", $t.Line = "30", $t));
                    t.Fixture.FormatWorksWithIFormattable_SPI_1598();
                },
                FormatWorksWithIFormattableAndFormatProvider_SPI_1598: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "FormatWorksWithIFormattableAndFormatProvider_SPI_1598()", $t.Line = "37", $t));
                    t.Fixture.FormatWorksWithIFormattableAndFormatProvider_SPI_1598();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.SimpleTypes.StringTests", $t.File = "Batch4\\SimpleTypes\\StringTests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UserDefinedStructTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.UserDefinedStructTests)],
        statics: {
            methods: {
                DefaultValueOfStructWithInlineCodeDefaultConstructorWorks_SPI_1610: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.UserDefinedStructTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UserDefinedStructTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultValueOfStructWithInlineCodeDefaultConstructorWorks_SPI_1610()", $t.Line = "109", $t));
                    t.Fixture.DefaultValueOfStructWithInlineCodeDefaultConstructorWorks_SPI_1610();
                },
                DefaultValueOfStructWithInlineCodeDefaultConstructorWorksGeneric_SPI_1610: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.UserDefinedStructTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UserDefinedStructTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultValueOfStructWithInlineCodeDefaultConstructorWorksGeneric_SPI_1610()", $t.Line = "119", $t));
                    t.Fixture.DefaultValueOfStructWithInlineCodeDefaultConstructorWorksGeneric_SPI_1610();
                },
                CanLiftUserDefinedConversionOperator_SPI_1611: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.UserDefinedStructTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UserDefinedStructTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CanLiftUserDefinedConversionOperator_SPI_1611()", $t.Line = "129", $t));
                    t.Fixture.CanLiftUserDefinedConversionOperator_SPI_1611();
                },
                AutoEventBackingFieldsAreClonedWhenValueTypeIsCopied_SPI_1612: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.UserDefinedStructTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UserDefinedStructTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "AutoEventBackingFieldsAreClonedWhenValueTypeIsCopied_SPI_1612()", $t.Line = "142", $t));
                    t.Fixture.AutoEventBackingFieldsAreClonedWhenValueTypeIsCopied_SPI_1612();
                }
            }
        },
        fields: {
            context: null
        },
        methods: {
            GetContext: function () {
                var $t;
                if (this.context == null) {
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.UserDefinedStructTests", $t.File = "Batch4\\UserDefinedStructTests.cs", $t);
                }
                return this.context;
            }
        }
    });
});
