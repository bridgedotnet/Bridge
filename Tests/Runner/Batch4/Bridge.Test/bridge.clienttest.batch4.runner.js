/**
 * @compiler Bridge.NET 16.0.0-beta5
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
            QUnit.test("RefParameterTests - CanUseReferenceToThis_SPI_1569", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RefParameterTests.CanUseReferenceToThis_SPI_1569);
            QUnit.test("RuntimeHelpersTests - GetHashCodeCallsGetHashCodeNonVirtually_SPI_1570", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RuntimeHelpersTests.GetHashCodeCallsGetHashCodeNonVirtually_SPI_1570);
            QUnit.test("JsonTests - NonGenericParseWorks_SPI_1574", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.JsonTests.NonGenericParseWorks_SPI_1574);
            QUnit.test("JsonTests - GenericParseWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.JsonTests.GenericParseWorks);
            QUnit.test("JsonTests - NonGenericParseWithCallbackWorks_SPI_1574", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.JsonTests.NonGenericParseWithCallbackWorks_SPI_1574);
            QUnit.test("JsonTests - GenericParseWithCallbackWorks_SPI_1574", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.JsonTests.GenericParseWithCallbackWorks_SPI_1574);
            QUnit.test("ByteTests - TryParseWorks_SPI_1592", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ByteTests.TryParseWorks_SPI_1592);
            QUnit.test("CharTests - TypePropertiesAreInt32_SPI_1603", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CharTests.TypePropertiesAreInt32_SPI_1603);
            QUnit.test("DateTests - TypePropertiesAreCorrect_SPI_1608_1609", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.TypePropertiesAreCorrect_SPI_1608_1609);
            QUnit.test("DateTests - DefaultConstructorReturnsTodaysDate", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.DefaultConstructorReturnsTodaysDate);
            QUnit.test("DateTests - CreatingInstanceReturnsTodaysDate_SPI_1604", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.CreatingInstanceReturnsTodaysDate_SPI_1604);
            QUnit.test("DateTests - MillisecondSinceEpochConstructorWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.MillisecondSinceEpochConstructorWorks);
            QUnit.test("DateTests - StringConstructorWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.StringConstructorWorks);
            QUnit.test("DateTests - YMDConstructorWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.YMDConstructorWorks);
            QUnit.test("DateTests - YMDHConstructorWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.YMDHConstructorWorks);
            QUnit.test("DateTests - YMDHNConstructorWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.YMDHNConstructorWorks);
            QUnit.test("DateTests - YMDHNSConstructorWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.YMDHNSConstructorWorks);
            QUnit.test("DateTests - YMDHNSUConstructorWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.YMDHNSUConstructorWorks);
            QUnit.test("DateTests - NowWorks_SPI_1624", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.NowWorks_SPI_1624);
            QUnit.test("DateTests - GetFullYearWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.GetFullYearWorks);
            QUnit.test("DateTests - GetMonthWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.GetMonthWorks);
            QUnit.test("DateTests - GetDateWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.GetDateWorks);
            QUnit.test("DateTests - GetHoursWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.GetHoursWorks);
            QUnit.test("DateTests - GetMinutesWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.GetMinutesWorks);
            QUnit.test("DateTests - GetSecondsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.GetSecondsWorks);
            QUnit.test("DateTests - GetMillisecondsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.GetMillisecondsWorks);
            QUnit.test("DateTests - GetDayWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.GetDayWorks);
            QUnit.test("DateTests - GetTimeWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.GetTimeWorks);
            QUnit.test("DateTests - ValueOfWorks_SPI_1624", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.ValueOfWorks_SPI_1624);
            QUnit.test("DateTests - GetTimezoneOffsetWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.GetTimezoneOffsetWorks);
            QUnit.test("DateTests - GetUtcFullYearWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.GetUtcFullYearWorks);
            QUnit.test("DateTests - GetUtcMonthWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.GetUtcMonthWorks);
            QUnit.test("DateTests - GetUtcDateWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.GetUtcDateWorks);
            QUnit.test("DateTests - GetUtcHoursWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.GetUtcHoursWorks);
            QUnit.test("DateTests - GetUtcMinutesWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.GetUtcMinutesWorks);
            QUnit.test("DateTests - GetUtcSecondsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.GetUtcSecondsWorks);
            QUnit.test("DateTests - GetUtcMillisecondsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.GetUtcMillisecondsWorks);
            QUnit.test("DateTests - GetUtcDayWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.GetUtcDayWorks);
            QUnit.test("DateTests - ParseWorks_SPI_1624", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.ParseWorks_SPI_1624);
            QUnit.test("DateTests - ToLocaleDateStringIsWorking_1624", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.ToLocaleDateStringIsWorking_1624);
            QUnit.test("DateTests - ToDateStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.ToDateStringWorks);
            QUnit.test("DateTests - ToTimeStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.ToTimeStringWorks);
            QUnit.test("DateTests - ToUtcStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.ToUtcStringWorks);
            QUnit.test("DateTests - ToLocaleDateStringWorks_SPI_1624", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.ToLocaleDateStringWorks_SPI_1624);
            QUnit.test("DateTests - DateUTCIsWorking_SPI_1624", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.DateUTCIsWorking_SPI_1624);
            QUnit.test("DateTests - ToLocaleTimeStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.ToLocaleTimeStringWorks);
            QUnit.test("DateTests - SubtractingDatesWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.SubtractingDatesWorks);
            QUnit.test("DateTests - DateEqualityWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.DateEqualityWorks);
            QUnit.test("DateTests - DateInequalityWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.DateInequalityWorks);
            QUnit.test("DateTests - DateLessThanWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.DateLessThanWorks);
            QUnit.test("DateTests - DateLessEqualWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.DateLessEqualWorks);
            QUnit.test("DateTests - DateGreaterThanWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.DateGreaterThanWorks);
            QUnit.test("DateTests - DateGreaterEqualWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.DateGreaterEqualWorks);
            QUnit.test("DateTests - SetFullYearWithOneParameterWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.SetFullYearWithOneParameterWorks);
            QUnit.test("DateTests - SetFullYearWithTwoParametersWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.SetFullYearWithTwoParametersWorks);
            QUnit.test("DateTests - SetFullYearWithThreeParametersWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.SetFullYearWithThreeParametersWorks);
            QUnit.test("DateTests - SetMonthWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.SetMonthWorks);
            QUnit.test("DateTests - SetDateWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.SetDateWorks);
            QUnit.test("DateTests - SetHoursWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.SetHoursWorks);
            QUnit.test("DateTests - SetMinutesWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.SetMinutesWorks);
            QUnit.test("DateTests - SetSecondsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.SetSecondsWorks);
            QUnit.test("DateTests - SetMillisecondsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.SetMillisecondsWorks);
            QUnit.test("DateTests - SetTimeWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.SetTimeWorks);
            QUnit.test("DateTests - SetTimeAsDoubleWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.SetTimeAsDoubleWorks);
            QUnit.test("DateTests - SetUtcFullYearWithOneParameterWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.SetUtcFullYearWithOneParameterWorks);
            QUnit.test("DateTests - SetUtcFullYearWithTwoParametersWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.SetUtcFullYearWithTwoParametersWorks);
            QUnit.test("DateTests - SetUtcFullYearWithThreeParametersWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.SetUtcFullYearWithThreeParametersWorks);
            QUnit.test("DateTests - SetUtcMonthWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.SetUtcMonthWorks);
            QUnit.test("DateTests - SetUtcDateWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.SetUtcDateWorks);
            QUnit.test("DateTests - SetUtcHoursWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.SetUtcHoursWorks);
            QUnit.test("DateTests - SetUtcMinutesWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.SetUtcMinutesWorks);
            QUnit.test("DateTests - SetUtcSecondsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.SetUtcSecondsWorks);
            QUnit.test("DateTests - SetUtcMillisecondsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.SetUtcMillisecondsWorks);
            QUnit.test("DateTests - GetHashCodeWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.GetHashCodeWorks);
            QUnit.test("DateTests - EqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests.EqualsWorks);
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
            QUnit.test("DoubleTests - TypePropertiesAreCorrect_SPI_1717", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests.TypePropertiesAreCorrect_SPI_1717);
            QUnit.test("DoubleTests - DefaultValueIs0", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests.DefaultValueIs0);
            QUnit.test("DoubleTests - CreatingInstanceReturnsZero", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests.CreatingInstanceReturnsZero);
            QUnit.test("DoubleTests - ConstantsWork", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests.ConstantsWork);
            QUnit.test("DoubleTests - DefaultConstructorReturnsZero", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests.DefaultConstructorReturnsZero);
            QUnit.test("DoubleTests - FormatWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests.FormatWorks);
            QUnit.test("DoubleTests - ToStringWithFormatWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests.ToStringWithFormatWorks);
            QUnit.test("DoubleTests - ToStringWithFormatAndProviderWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests.ToStringWithFormatAndProviderWorks);
            QUnit.test("DoubleTests - IFormattableToStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests.IFormattableToStringWorks);
            QUnit.test("DoubleTests - ToStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests.ToStringWorks);
            QUnit.test("DoubleTests - ToExponentialWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests.ToExponentialWorks);
            QUnit.test("DoubleTests - ToExponentialWithFractionalDigitsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests.ToExponentialWithFractionalDigitsWorks);
            QUnit.test("DoubleTests - ToFixed", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests.ToFixed);
            QUnit.test("DoubleTests - ToFixedWithFractionalDigitsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests.ToFixedWithFractionalDigitsWorks);
            QUnit.test("DoubleTests - ToPrecisionWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests.ToPrecisionWorks);
            QUnit.test("DoubleTests - ToPrecisionWithPrecisionWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests.ToPrecisionWithPrecisionWorks);
            QUnit.test("DoubleTests - IsPositiveInfinityWorks_SPI_1600", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests.IsPositiveInfinityWorks_SPI_1600);
            QUnit.test("DoubleTests - IsNegativeInfinityWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests.IsNegativeInfinityWorks);
            QUnit.test("DoubleTests - IsInfinityWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests.IsInfinityWorks);
            QUnit.test("DoubleTests - IsFiniteWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests.IsFiniteWorks);
            QUnit.test("DoubleTests - IsNaNWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests.IsNaNWorks);
            QUnit.test("DoubleTests - GetHashCodeWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests.GetHashCodeWorks);
            QUnit.test("DoubleTests - EqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests.EqualsWorks);
            QUnit.test("DoubleTests - IEquatableEqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests.IEquatableEqualsWorks);
            QUnit.test("DoubleTests - CompareToWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests.CompareToWorks);
            QUnit.test("DoubleTests - IComparableCompareToWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests.IComparableCompareToWorks);
            QUnit.test("Int16Tests - TypePropertiesAreCorrect_SPI_1717", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests.TypePropertiesAreCorrect_SPI_1717);
            QUnit.test("Int16Tests - CastsWork", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests.CastsWork);
            QUnit.test("Int16Tests - DefaultValueIs0", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests.DefaultValueIs0);
            QUnit.test("Int16Tests - DefaultConstructorReturnsZero", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests.DefaultConstructorReturnsZero);
            QUnit.test("Int16Tests - CreatingInstanceReturnsZero", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests.CreatingInstanceReturnsZero);
            QUnit.test("Int16Tests - ConstantsWork", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests.ConstantsWork);
            QUnit.test("Int16Tests - FormatWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests.FormatWorks);
            QUnit.test("Int16Tests - ToStringWithFormatWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests.ToStringWithFormatWorks);
            QUnit.test("Int16Tests - ToStringWithFormatAndProviderWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests.ToStringWithFormatAndProviderWorks);
            QUnit.test("Int16Tests - IFormattableToStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests.IFormattableToStringWorks);
            QUnit.test("Int16Tests - TryParseWorks_SPI_1592", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests.TryParseWorks_SPI_1592);
            QUnit.test("Int16Tests - ParseWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests.ParseWorks);
            QUnit.test("Int16Tests - ToStringWithoutRadixWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests.ToStringWithoutRadixWorks);
            QUnit.test("Int16Tests - ToStringWithRadixWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests.ToStringWithRadixWorks);
            QUnit.test("Int16Tests - GetHashCodeWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests.GetHashCodeWorks);
            QUnit.test("Int16Tests - EqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests.EqualsWorks);
            QUnit.test("Int16Tests - IEquatableEqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests.IEquatableEqualsWorks);
            QUnit.test("Int16Tests - CompareToWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests.CompareToWorks);
            QUnit.test("Int16Tests - IComparableCompareToWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests.IComparableCompareToWorks);
            QUnit.test("Int32Tests - TypePropertiesAreCorrect_SPI_1717", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.TypePropertiesAreCorrect_SPI_1717);
            QUnit.test("Int32Tests - CastsWork", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.CastsWork);
            QUnit.test("Int32Tests - TypeIsWorksForInt32", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.TypeIsWorksForInt32);
            QUnit.test("Int32Tests - TypeAsWorksForInt32", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.TypeAsWorksForInt32);
            QUnit.test("Int32Tests - UnboxingWorksForInt32", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.UnboxingWorksForInt32);
            QUnit.test("Int32Tests - DefaultValueIs0", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.DefaultValueIs0);
            QUnit.test("Int32Tests - DefaultConstructorReturnsZero", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.DefaultConstructorReturnsZero);
            QUnit.test("Int32Tests - CreatingInstanceReturnsZero", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.CreatingInstanceReturnsZero);
            QUnit.test("Int32Tests - ConstantsWork", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.ConstantsWork);
            QUnit.test("Int32Tests - FormatWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.FormatWorks);
            QUnit.test("Int32Tests - ToStringWithFormatWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.ToStringWithFormatWorks);
            QUnit.test("Int32Tests - ToStringWithFormatAndProviderWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.ToStringWithFormatAndProviderWorks);
            QUnit.test("Int32Tests - IFormattableToStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.IFormattableToStringWorks);
            QUnit.test("Int32Tests - TryParseWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.TryParseWorks);
            QUnit.test("Int32Tests - ParseWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.ParseWorks);
            QUnit.test("Int32Tests - ToStringWithoutRadixWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.ToStringWithoutRadixWorks);
            QUnit.test("Int32Tests - ToStringWithRadixWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.ToStringWithRadixWorks);
            QUnit.test("Int32Tests - GetHashCodeWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.GetHashCodeWorks);
            QUnit.test("Int32Tests - EqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.EqualsWorks);
            QUnit.test("Int32Tests - IEquatableEqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.IEquatableEqualsWorks);
            QUnit.test("Int32Tests - CompareToWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.CompareToWorks);
            QUnit.test("Int32Tests - IComparableCompareToWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.IComparableCompareToWorks);
            QUnit.test("Int32Tests - IntegerDivisionWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.IntegerDivisionWorks);
            QUnit.test("Int32Tests - IntegerModuloWorks_SPI_1602", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.IntegerModuloWorks_SPI_1602);
            QUnit.test("Int32Tests - IntegerDivisionByZeroThrowsDivideByZeroException", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.IntegerDivisionByZeroThrowsDivideByZeroException);
            QUnit.test("Int32Tests - DoublesAreTruncatedWhenConvertedToIntegers", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests.DoublesAreTruncatedWhenConvertedToIntegers);
            QUnit.test("Int64Tests - TypePropertiesAreCorrect_SPI_1717", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests.TypePropertiesAreCorrect_SPI_1717);
            QUnit.test("Int64Tests - CastsWork", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests.CastsWork);
            QUnit.test("Int64Tests - DefaultValueIs0", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests.DefaultValueIs0);
            QUnit.test("Int64Tests - DefaultConstructorReturnsZero", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests.DefaultConstructorReturnsZero);
            QUnit.test("Int64Tests - CreatingInstanceReturnsZero", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests.CreatingInstanceReturnsZero);
            QUnit.test("Int64Tests - FormatWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests.FormatWorks);
            QUnit.test("Int64Tests - ToStringWithFormatWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests.ToStringWithFormatWorks);
            QUnit.test("Int64Tests - ToStringWithFormatAndProviderWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests.ToStringWithFormatAndProviderWorks);
            QUnit.test("Int64Tests - IFormattableToStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests.IFormattableToStringWorks);
            QUnit.test("Int64Tests - TryParseWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests.TryParseWorks);
            QUnit.test("Int64Tests - ParseWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests.ParseWorks);
            QUnit.test("Int64Tests - CastingOfLargeDoublesToInt64Works", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests.CastingOfLargeDoublesToInt64Works);
            QUnit.test("Int64Tests - DivisionOfLargeInt64Works", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests.DivisionOfLargeInt64Works);
            QUnit.test("Int64Tests - ToStringWithoutRadixWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests.ToStringWithoutRadixWorks);
            QUnit.test("Int64Tests - ToStringWithRadixWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests.ToStringWithRadixWorks);
            QUnit.test("Int64Tests - GetHashCodeWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests.GetHashCodeWorks);
            QUnit.test("Int64Tests - EqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests.EqualsWorks);
            QUnit.test("Int64Tests - IEquatableEqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests.IEquatableEqualsWorks);
            QUnit.test("Int64Tests - CompareToWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests.CompareToWorks);
            QUnit.test("Int64Tests - IComparableCompareToWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests.IComparableCompareToWorks);
            QUnit.test("ObjectTests - TypePropertiesAreCorrect", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ObjectTests.TypePropertiesAreCorrect);
            QUnit.test("ObjectTests - CanGetHashCodeForObject", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ObjectTests.CanGetHashCodeForObject);
            QUnit.test("ObjectTests - RepeatedCallsToGetHashCodeReturnsSameValue", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ObjectTests.RepeatedCallsToGetHashCodeReturnsSameValue);
            QUnit.test("ObjectTests - ObjectIsEqualToItself", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ObjectTests.ObjectIsEqualToItself);
            QUnit.test("ObjectTests - ObjectIsNotEqualToOtherObject", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ObjectTests.ObjectIsNotEqualToOtherObject);
            QUnit.test("ObjectTests - StaticEqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ObjectTests.StaticEqualsWorks);
            QUnit.test("ObjectTests - ReferenceEqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ObjectTests.ReferenceEqualsWorks);
            QUnit.test("ObjectTests - ToStringOverride", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ObjectTests.ToStringOverride);
            QUnit.test("SByteTests - TypePropertiesAreCorrect_SPI_1717", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests.TypePropertiesAreCorrect_SPI_1717);
            QUnit.test("SByteTests - CastsWork", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests.CastsWork);
            QUnit.test("SByteTests - DefaultValueIs0", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests.DefaultValueIs0);
            QUnit.test("SByteTests - DefaultConstructorReturnsZero", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests.DefaultConstructorReturnsZero);
            QUnit.test("SByteTests - CreatingInstanceReturnsZero", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests.CreatingInstanceReturnsZero);
            QUnit.test("SByteTests - ConstantsWork", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests.ConstantsWork);
            QUnit.test("SByteTests - FormatWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests.FormatWorks);
            QUnit.test("SByteTests - ToStringWithFormatWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests.ToStringWithFormatWorks);
            QUnit.test("SByteTests - ToStringWithFormatAndProviderWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests.ToStringWithFormatAndProviderWorks);
            QUnit.test("SByteTests - IFormattableToStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests.IFormattableToStringWorks);
            QUnit.test("SByteTests - TryParseWorks_SPI_1592", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests.TryParseWorks_SPI_1592);
            QUnit.test("SByteTests - ParseWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests.ParseWorks);
            QUnit.test("SByteTests - ToStringWithoutRadixWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests.ToStringWithoutRadixWorks);
            QUnit.test("SByteTests - ToStringWithRadixWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests.ToStringWithRadixWorks);
            QUnit.test("SByteTests - GetHashCodeWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests.GetHashCodeWorks);
            QUnit.test("SByteTests - EqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests.EqualsWorks);
            QUnit.test("SByteTests - IEquatableEqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests.IEquatableEqualsWorks);
            QUnit.test("SByteTests - CompareToWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests.CompareToWorks);
            QUnit.test("SByteTests - IComparableCompareToWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests.IComparableCompareToWorks);
            QUnit.test("SingleTests - TypePropertiesAreCorrect_SPI_1717", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests.TypePropertiesAreCorrect_SPI_1717);
            QUnit.test("SingleTests - DefaultValueIs0", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests.DefaultValueIs0);
            QUnit.test("SingleTests - CreatingInstanceReturnsZero", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests.CreatingInstanceReturnsZero);
            QUnit.test("SingleTests - ConstantsWork", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests.ConstantsWork);
            QUnit.test("SingleTests - DefaultConstructorReturnsZero", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests.DefaultConstructorReturnsZero);
            QUnit.test("SingleTests - FormatWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests.FormatWorks);
            QUnit.test("SingleTests - ToStringWithFormatWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests.ToStringWithFormatWorks);
            QUnit.test("SingleTests - ToStringWithFormatAndProviderWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests.ToStringWithFormatAndProviderWorks);
            QUnit.test("SingleTests - IFormattableToStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests.IFormattableToStringWorks);
            QUnit.test("SingleTests - ToStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests.ToStringWorks);
            QUnit.test("SingleTests - ToExponentialWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests.ToExponentialWorks);
            QUnit.test("SingleTests - ToExponentialWithFractionalDigitsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests.ToExponentialWithFractionalDigitsWorks);
            QUnit.test("SingleTests - ToFixed", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests.ToFixed);
            QUnit.test("SingleTests - ToFixedWithFractionalDigitsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests.ToFixedWithFractionalDigitsWorks);
            QUnit.test("SingleTests - ToPrecisionWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests.ToPrecisionWorks);
            QUnit.test("SingleTests - ToPrecisionWithPrecisionWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests.ToPrecisionWithPrecisionWorks);
            QUnit.test("SingleTests - IsPositiveInfinityWorks_SPI_1600", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests.IsPositiveInfinityWorks_SPI_1600);
            QUnit.test("SingleTests - IsNegativeInfinityWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests.IsNegativeInfinityWorks);
            QUnit.test("SingleTests - IsInfinityWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests.IsInfinityWorks);
            QUnit.test("SingleTests - IsFiniteWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests.IsFiniteWorks);
            QUnit.test("SingleTests - IsNaNWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests.IsNaNWorks);
            QUnit.test("SingleTests - GetHashCodeWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests.GetHashCodeWorks);
            QUnit.test("SingleTests - EqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests.EqualsWorks);
            QUnit.test("SingleTests - IEquatableEqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests.IEquatableEqualsWorks);
            QUnit.test("SingleTests - CompareToWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests.CompareToWorks);
            QUnit.test("SingleTests - IComparableCompareToWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests.IComparableCompareToWorks);
            QUnit.test("StringTests - TypePropertiesAreCorrect_SPI_1597", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.TypePropertiesAreCorrect_SPI_1597);
            QUnit.test("StringTests - DefaultConstructorWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.DefaultConstructorWorks);
            QUnit.test("StringTests - CharAndCountConstructorWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.CharAndCountConstructorWorks);
            QUnit.test("StringTests - CharArrayConstructorWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.CharArrayConstructorWorks);
            QUnit.test("StringTests - CharArrayWithStartIndexAndLengthConstructorWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.CharArrayWithStartIndexAndLengthConstructorWorks);
            QUnit.test("StringTests - EmptyFieldWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.EmptyFieldWorks);
            QUnit.test("StringTests - LengthPropertyWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.LengthPropertyWorks);
            QUnit.test("StringTests - CharAtWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.CharAtWorks);
            QUnit.test("StringTests - JsCharAtWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.JsCharAtWorks);
            QUnit.test("StringTests - CharCodeAtWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.CharCodeAtWorks);
            QUnit.test("StringTests - CompareToWithIgnoreCaseArgWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.CompareToWithIgnoreCaseArgWorks);
            QUnit.test("StringTests - CompareWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.CompareWorks);
            QUnit.test("StringTests - CompareWithIgnoreCaseArgWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.CompareWithIgnoreCaseArgWorks);
            QUnit.test("StringTests - ConcatWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.ConcatWorks);
            QUnit.test("StringTests - ConcatWithObjectsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.ConcatWithObjectsWorks);
            QUnit.test("StringTests - EndsWithStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.EndsWithStringWorks);
            QUnit.test("StringTests - StaticEqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.StaticEqualsWorks);
            QUnit.test("StringTests - FormatWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.FormatWorks);
            QUnit.test("StringTests - FormatWorksWithIFormattable_SPI_1598", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.FormatWorksWithIFormattable_SPI_1598);
            QUnit.test("StringTests - FormatWorksWithIFormattableAndFormatProvider_SPI_1598", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.FormatWorksWithIFormattableAndFormatProvider_SPI_1598);
            QUnit.test("StringTests - FormatCanUseEscapedBraces", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.FormatCanUseEscapedBraces);
            QUnit.test("StringTests - FromCharCodeWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.FromCharCodeWorks);
            QUnit.test("StringTests - IndexOfCharWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.IndexOfCharWorks);
            QUnit.test("StringTests - IndexOfStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.IndexOfStringWorks);
            QUnit.test("StringTests - IndexOfCharWithStartIndexWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.IndexOfCharWithStartIndexWorks);
            QUnit.test("StringTests - IndexOfCharWithStartIndexAndCountWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.IndexOfCharWithStartIndexAndCountWorks);
            QUnit.test("StringTests - IndexOfStringWithStartIndexWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.IndexOfStringWithStartIndexWorks);
            QUnit.test("StringTests - IndexOfStringWithStartIndexAndCountWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.IndexOfStringWithStartIndexAndCountWorks);
            QUnit.test("StringTests - IndexOfAnyWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.IndexOfAnyWorks);
            QUnit.test("StringTests - IndexOfAnyWithStartIndexWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.IndexOfAnyWithStartIndexWorks);
            QUnit.test("StringTests - IndexOfAnyWithStartIndexAndCountWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.IndexOfAnyWithStartIndexAndCountWorks);
            QUnit.test("StringTests - InsertWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.InsertWorks);
            QUnit.test("StringTests - IsNullOrEmptyWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.IsNullOrEmptyWorks);
            QUnit.test("StringTests - LastIndexOfCharWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.LastIndexOfCharWorks);
            QUnit.test("StringTests - LastIndexOfStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.LastIndexOfStringWorks);
            QUnit.test("StringTests - LastIndexOfCharWithStartIndexWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.LastIndexOfCharWithStartIndexWorks);
            QUnit.test("StringTests - LastIndexOfStringWithStartIndexWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.LastIndexOfStringWithStartIndexWorks);
            QUnit.test("StringTests - LastIndexOfCharWithStartIndexAndCountWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.LastIndexOfCharWithStartIndexAndCountWorks);
            QUnit.test("StringTests - LastIndexOfStringWithStartIndexAndCountWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.LastIndexOfStringWithStartIndexAndCountWorks);
            QUnit.test("StringTests - LastIndexOfAnyWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.LastIndexOfAnyWorks);
            QUnit.test("StringTests - LastIndexOfAnyWithStartIndexWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.LastIndexOfAnyWithStartIndexWorks);
            QUnit.test("StringTests - LastIndexOfAnyWithStartIndexAndCountWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.LastIndexOfAnyWithStartIndexAndCountWorks);
            QUnit.test("StringTests - LocaleCompareWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.LocaleCompareWorks);
            QUnit.test("StringTests - PadLeftWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.PadLeftWorks);
            QUnit.test("StringTests - PadLeftWithCharWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.PadLeftWithCharWorks);
            QUnit.test("StringTests - PadRightWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.PadRightWorks);
            QUnit.test("StringTests - PadRightWithCharWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.PadRightWithCharWorks);
            QUnit.test("StringTests - RemoveWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.RemoveWorks);
            QUnit.test("StringTests - RemoveWithCountWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.RemoveWithCountWorks);
            QUnit.test("StringTests - ReplaceWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.ReplaceWorks);
            QUnit.test("StringTests - ReplaceCharWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.ReplaceCharWorks);
            QUnit.test("StringTests - ReplaceRegexWithReplaceCallbackWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.ReplaceRegexWithReplaceCallbackWorks);
            QUnit.test("StringTests - SearchWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.SearchWorks);
            QUnit.test("StringTests - SplitWithStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.SplitWithStringWorks);
            QUnit.test("StringTests - SplitWithCharWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.SplitWithCharWorks);
            QUnit.test("StringTests - SplitWithCharsAndLimitWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.SplitWithCharsAndLimitWorks);
            QUnit.test("StringTests - SplitWithCharsAndStringSplitOptionsAndLimitWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.SplitWithCharsAndStringSplitOptionsAndLimitWorks);
            QUnit.test("StringTests - SomeNetSplitTests", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.SomeNetSplitTests);
            QUnit.test("StringTests - SplitWithCharsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.SplitWithCharsWorks);
            QUnit.test("StringTests - SplitWithStringsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.SplitWithStringsWorks);
            QUnit.test("StringTests - SplitWithStringsAndLimitWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.SplitWithStringsAndLimitWorks);
            QUnit.test("StringTests - StartsWithStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.StartsWithStringWorks);
            QUnit.test("StringTests - SubstrWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.SubstrWorks);
            QUnit.test("StringTests - SubstrWithLengthWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.SubstrWithLengthWorks);
            QUnit.test("StringTests - SubstringWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.SubstringWorks);
            QUnit.test("StringTests - SubstringWithLengthWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.SubstringWithLengthWorks);
            QUnit.test("StringTests - JavaScriptSubstringWithEndIndexWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.JavaScriptSubstringWithEndIndexWorks);
            QUnit.test("StringTests - ToLowerWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.ToLowerWorks);
            QUnit.test("StringTests - ToUpperWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.ToUpperWorks);
            QUnit.test("StringTests - TrimWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.TrimWorks);
            QUnit.test("StringTests - TrimCharsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.TrimCharsWorks);
            QUnit.test("StringTests - TrimStartCharsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.TrimStartCharsWorks);
            QUnit.test("StringTests - TrimEndCharsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.TrimEndCharsWorks);
            QUnit.test("StringTests - TrimStartWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.TrimStartWorks);
            QUnit.test("StringTests - TrimEndWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.TrimEndWorks);
            QUnit.test("StringTests - StringEqualityWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.StringEqualityWorks);
            QUnit.test("StringTests - StringInequalityWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.StringInequalityWorks);
            QUnit.test("StringTests - StringIndexingWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.StringIndexingWorks);
            QUnit.test("StringTests - GetHashCodeWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.GetHashCodeWorks);
            QUnit.test("StringTests - InstanceEqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.InstanceEqualsWorks);
            QUnit.test("StringTests - IEquatableEqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.IEquatableEqualsWorks);
            QUnit.test("StringTests - CompareToWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.CompareToWorks);
            QUnit.test("StringTests - IComparableCompareToWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.IComparableCompareToWorks);
            QUnit.test("StringTests - JoinWorks_SPI_1599", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.JoinWorks_SPI_1599);
            QUnit.test("StringTests - ContainsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.ContainsWorks);
            QUnit.test("StringTests - ToCharArrayWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests.ToCharArrayWorks);
            QUnit.test("TimeSpanTests - TypePropertiesAreCorrect_SPI_1717", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests.TypePropertiesAreCorrect_SPI_1717);
            QUnit.test("TimeSpanTests - DefaultConstructorWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests.DefaultConstructorWorks);
            QUnit.test("TimeSpanTests - DefaultValueWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests.DefaultValueWorks);
            QUnit.test("TimeSpanTests - ZeroWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests.ZeroWorks);
            QUnit.test("TimeSpanTests - CreatingInstanceReturnsTimeSpanWithZeroValue", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests.CreatingInstanceReturnsTimeSpanWithZeroValue);
            QUnit.test("TimeSpanTests - ParameterConstructorsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests.ParameterConstructorsWorks);
            QUnit.test("TimeSpanTests - FactoryMethodsWork", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests.FactoryMethodsWork);
            QUnit.test("TimeSpanTests - PropertiesWork", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests.PropertiesWork);
            QUnit.test("TimeSpanTests - CompareToWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests.CompareToWorks);
            QUnit.test("TimeSpanTests - CompareWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests.CompareWorks);
            QUnit.test("TimeSpanTests - StaticEqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests.StaticEqualsWorks);
            QUnit.test("TimeSpanTests - EqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests.EqualsWorks);
            QUnit.test("TimeSpanTests - IEquatableEqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests.IEquatableEqualsWorks);
            QUnit.test("TimeSpanTests - ToStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests.ToStringWorks);
            QUnit.test("TimeSpanTests - AddWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests.AddWorks);
            QUnit.test("TimeSpanTests - SubtractWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests.SubtractWorks);
            QUnit.test("TimeSpanTests - DurationWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests.DurationWorks);
            QUnit.test("TimeSpanTests - NegateWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests.NegateWorks);
            QUnit.test("TimeSpanTests - ComparisonOperatorsWork", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests.ComparisonOperatorsWork);
            QUnit.test("TimeSpanTests - AdditionOperatorWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests.AdditionOperatorWorks);
            QUnit.test("TimeSpanTests - SubtractionOperatorWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests.SubtractionOperatorWorks);
            QUnit.test("TimeSpanTests - UnaryPlusWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests.UnaryPlusWorks);
            QUnit.test("TimeSpanTests - UnaryMinusWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests.UnaryMinusWorks);
            QUnit.test("TupleTests - Tuple1Works", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TupleTests.Tuple1Works);
            QUnit.test("TupleTests - Tuple2Works", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TupleTests.Tuple2Works);
            QUnit.test("TupleTests - Tuple3Works", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TupleTests.Tuple3Works);
            QUnit.test("TupleTests - Tuple4Works", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TupleTests.Tuple4Works);
            QUnit.test("TupleTests - Tuple5Works", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TupleTests.Tuple5Works);
            QUnit.test("TupleTests - Tuple6Works", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TupleTests.Tuple6Works);
            QUnit.test("TupleTests - Tuple7Works", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TupleTests.Tuple7Works);
            QUnit.test("TupleTests - Tuple8Works", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TupleTests.Tuple8Works);
            QUnit.test("UInt16Tests - TypePropertiesAreCorrect_SPI_1717", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests.TypePropertiesAreCorrect_SPI_1717);
            QUnit.test("UInt16Tests - CastsWork", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests.CastsWork);
            QUnit.test("UInt16Tests - DefaultValueIs0", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests.DefaultValueIs0);
            QUnit.test("UInt16Tests - DefaultConstructorReturnsZero", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests.DefaultConstructorReturnsZero);
            QUnit.test("UInt16Tests - CreatingInstanceReturnsZero", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests.CreatingInstanceReturnsZero);
            QUnit.test("UInt16Tests - ConstantsWork", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests.ConstantsWork);
            QUnit.test("UInt16Tests - FormatWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests.FormatWorks);
            QUnit.test("UInt16Tests - ToStringWithFormatWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests.ToStringWithFormatWorks);
            QUnit.test("UInt16Tests - ToStringWithFormatAndProviderWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests.ToStringWithFormatAndProviderWorks);
            QUnit.test("UInt16Tests - IFormattableToStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests.IFormattableToStringWorks);
            QUnit.test("UInt16Tests - TryParseWorks_SPI_1592", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests.TryParseWorks_SPI_1592);
            QUnit.test("UInt16Tests - ParseWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests.ParseWorks);
            QUnit.test("UInt16Tests - ToStringWithoutRadixWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests.ToStringWithoutRadixWorks);
            QUnit.test("UInt16Tests - ToStringWithRadixWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests.ToStringWithRadixWorks);
            QUnit.test("UInt16Tests - GetHashCodeWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests.GetHashCodeWorks);
            QUnit.test("UInt16Tests - EqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests.EqualsWorks);
            QUnit.test("UInt16Tests - IEquatableEqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests.IEquatableEqualsWorks);
            QUnit.test("UInt16Tests - CompareToWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests.CompareToWorks);
            QUnit.test("UInt16Tests - IComparableCompareToWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests.IComparableCompareToWorks);
            QUnit.test("UInt32Tests - TypePropertiesAreCorrect_SPI_1717", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests.TypePropertiesAreCorrect_SPI_1717);
            QUnit.test("UInt32Tests - CastsWork", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests.CastsWork);
            QUnit.test("UInt32Tests - DefaultValueIs0", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests.DefaultValueIs0);
            QUnit.test("UInt32Tests - DefaultConstructorReturnsZero", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests.DefaultConstructorReturnsZero);
            QUnit.test("UInt32Tests - CreatingInstanceReturnsZero", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests.CreatingInstanceReturnsZero);
            QUnit.test("UInt32Tests - ConstantsWork", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests.ConstantsWork);
            QUnit.test("UInt32Tests - FormatWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests.FormatWorks);
            QUnit.test("UInt32Tests - ToStringWithFormatWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests.ToStringWithFormatWorks);
            QUnit.test("UInt32Tests - ToStringWithFormatAndProviderWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests.ToStringWithFormatAndProviderWorks);
            QUnit.test("UInt32Tests - IFormattableToStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests.IFormattableToStringWorks);
            QUnit.test("UInt32Tests - TryParseWorks_SPI_1592", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests.TryParseWorks_SPI_1592);
            QUnit.test("UInt32Tests - ParseWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests.ParseWorks);
            QUnit.test("UInt32Tests - ToStringWithoutRadixWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests.ToStringWithoutRadixWorks);
            QUnit.test("UInt32Tests - ToStringWithRadixWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests.ToStringWithRadixWorks);
            QUnit.test("UInt32Tests - GetHashCodeWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests.GetHashCodeWorks);
            QUnit.test("UInt32Tests - EqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests.EqualsWorks);
            QUnit.test("UInt32Tests - IEquatableEqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests.IEquatableEqualsWorks);
            QUnit.test("UInt32Tests - CompareToWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests.CompareToWorks);
            QUnit.test("UInt32Tests - IComparableCompareToWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests.IComparableCompareToWorks);
            QUnit.test("UInt64Tests - TypePropertiesAreCorrect_SPI_1717", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests.TypePropertiesAreCorrect_SPI_1717);
            QUnit.test("UInt64Tests - CastsWork", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests.CastsWork);
            QUnit.test("UInt64Tests - DefaultValueIs0", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests.DefaultValueIs0);
            QUnit.test("UInt64Tests - DefaultConstructorReturnsZero", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests.DefaultConstructorReturnsZero);
            QUnit.test("UInt64Tests - CreatingInstanceReturnsZero", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests.CreatingInstanceReturnsZero);
            QUnit.test("UInt64Tests - ConstantsWork", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests.ConstantsWork);
            QUnit.test("UInt64Tests - FormatWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests.FormatWorks);
            QUnit.test("UInt64Tests - ToStringWithFormatWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests.ToStringWithFormatWorks);
            QUnit.test("UInt64Tests - ToStringWithFormatAndProviderWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests.ToStringWithFormatAndProviderWorks);
            QUnit.test("UInt64Tests - IFormattableToStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests.IFormattableToStringWorks);
            QUnit.test("UInt64Tests - CastingOfLargeValuesToUInt64Works_SPI_1591", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests.CastingOfLargeValuesToUInt64Works_SPI_1591);
            QUnit.test("UInt64Tests - DivisionOfLargeUInt64Works", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests.DivisionOfLargeUInt64Works);
            QUnit.test("UInt64Tests - TryParseWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests.TryParseWorks);
            QUnit.test("UInt64Tests - ParseWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests.ParseWorks);
            QUnit.test("UInt64Tests - ToStringWithoutRadixWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests.ToStringWithoutRadixWorks);
            QUnit.test("UInt64Tests - ToStringWithRadixWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests.ToStringWithRadixWorks);
            QUnit.test("UInt64Tests - GetHashCodeWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests.GetHashCodeWorks);
            QUnit.test("UInt64Tests - EqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests.EqualsWorks);
            QUnit.test("UInt64Tests - IEquatableEqualsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests.IEquatableEqualsWorks);
            QUnit.test("UInt64Tests - CompareToWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests.CompareToWorks);
            QUnit.test("UInt64Tests - IComparableCompareToWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests.IComparableCompareToWorks);
            QUnit.test("RegexTests - TypePropertiesAreCorrect", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RegexTests.TypePropertiesAreCorrect);
            QUnit.test("RegexTests - StringOnlyConstructorWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RegexTests.StringOnlyConstructorWorks);
            QUnit.test("RegexTests - ConstructorWithFlagsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RegexTests.ConstructorWithFlagsWorks);
            QUnit.test("RegexTests - GlobalFlagWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RegexTests.GlobalFlagWorks);
            QUnit.test("RegexTests - IgnoreCaseFlagWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RegexTests.IgnoreCaseFlagWorks);
            QUnit.test("RegexTests - MultilineFlagWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RegexTests.MultilineFlagWorks);
            QUnit.test("RegexTests - PatternPropertyWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RegexTests.PatternPropertyWorks);
            QUnit.test("RegexTests - SourcePropertyWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RegexTests.SourcePropertyWorks);
            QUnit.test("RegexTests - ExecWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RegexTests.ExecWorks);
            QUnit.test("RegexTests - LastIndexWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RegexTests.LastIndexWorks);
            QUnit.test("RegexTests - TestWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RegexTests.TestWorks);
            QUnit.test("AsyncTests - AsyncVoid", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.AsyncTests.AsyncVoid);
            QUnit.test("AsyncTests - AsyncTask", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.AsyncTests.AsyncTask);
            QUnit.test("AsyncTests - AsyncTaskBodyThrowsException", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.AsyncTests.AsyncTaskBodyThrowsException);
            QUnit.test("AsyncTests - AwaitTaskThatFaults", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.AsyncTests.AwaitTaskThatFaults);
            QUnit.test("AsyncTests - AggregateExceptionsAreUnwrappedWhenAwaitingTask", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.AsyncTests.AggregateExceptionsAreUnwrappedWhenAwaitingTask);
            QUnit.test("AsyncTests - AsyncTaskThatReturnsValue", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.AsyncTests.AsyncTaskThatReturnsValue);
            QUnit.test("CancellationTokenTests - TypePropertiesForCancellationTokenSourceAreCorrect", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.TypePropertiesForCancellationTokenSourceAreCorrect);
            QUnit.test("CancellationTokenTests - TypePropertiesForCancellationTokenAreCorrect", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.TypePropertiesForCancellationTokenAreCorrect);
            QUnit.test("CancellationTokenTests - TypePropertiesForCancellationTokenRegistrationAreCorrect", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.TypePropertiesForCancellationTokenRegistrationAreCorrect);
            QUnit.test("CancellationTokenTests - CancellationTokenCreatedWithDefaultConstructorIsNotCanceledAndCannotBe", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.CancellationTokenCreatedWithDefaultConstructorIsNotCanceledAndCannotBe);
            QUnit.test("CancellationTokenTests - CancellationTokenCreatedWithFalseArgumentToConstructorIsNotCanceledAndCannotBe", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.CancellationTokenCreatedWithFalseArgumentToConstructorIsNotCanceledAndCannotBe);
            QUnit.test("CancellationTokenTests - CancellationTokenCreatedWithTrueArgumentToConstructorIsCanceled", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.CancellationTokenCreatedWithTrueArgumentToConstructorIsCanceled);
            QUnit.test("CancellationTokenTests - CancellationTokenNoneIsNotCancelledAndCannotBe", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.CancellationTokenNoneIsNotCancelledAndCannotBe);
            QUnit.test("CancellationTokenTests - CreatingADefaultCancellationTokenReturnsACancellationTokenThatIsNotCancelled", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.CreatingADefaultCancellationTokenReturnsACancellationTokenThatIsNotCancelled);
            QUnit.test("CancellationTokenTests - ActivatorCreateForCancellationTokenReturnsACancellationTokenThatIsNotCancelled", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.ActivatorCreateForCancellationTokenReturnsACancellationTokenThatIsNotCancelled);
            QUnit.test("CancellationTokenTests - CanBeCanceledIsTrueForTokenCreatedForCancellationTokenSource", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.CanBeCanceledIsTrueForTokenCreatedForCancellationTokenSource);
            QUnit.test("CancellationTokenTests - IsCancellationRequestedForTokenCreatedForCancellationTokenSourceIsSetByTheCancelMethod", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.IsCancellationRequestedForTokenCreatedForCancellationTokenSourceIsSetByTheCancelMethod);
            QUnit.test("CancellationTokenTests - ThrowIfCancellationRequestedForTokenCreatedForCancellationTokenSourceThrowsAfterTheCancelMethodIsCalled", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.ThrowIfCancellationRequestedForTokenCreatedForCancellationTokenSourceThrowsAfterTheCancelMethodIsCalled);
            QUnit.test("CancellationTokenTests - CancelWithoutArgumentsWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.CancelWithoutArgumentsWorks);
            QUnit.test("CancellationTokenTests - CancelWorksWhenThrowOnFirstExceptionIsFalse", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.CancelWorksWhenThrowOnFirstExceptionIsFalse);
            QUnit.test("CancellationTokenTests - CancelWorksWhenThrowOnFirstExceptionIsTrue", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.CancelWorksWhenThrowOnFirstExceptionIsTrue);
            QUnit.test("CancellationTokenTests - RegisterOnACancelledSourceWithoutContextInvokesTheCallback", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.RegisterOnACancelledSourceWithoutContextInvokesTheCallback);
            QUnit.test("CancellationTokenTests - RegisterWithArgumentOnACancelledSourceInvokesTheCallback", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.RegisterWithArgumentOnACancelledSourceInvokesTheCallback);
            QUnit.test("CancellationTokenTests - RegisterOnACancelledSourceWithoutContextRethrowsAThrownException", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.RegisterOnACancelledSourceWithoutContextRethrowsAThrownException);
            QUnit.test("CancellationTokenTests - RegisterOnACancelledSourceWithContextRethrowsAThrownException", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.RegisterOnACancelledSourceWithContextRethrowsAThrownException);
            QUnit.test("CancellationTokenTests - RegisterOverloadsWithUseSynchronizationContextWork", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.RegisterOverloadsWithUseSynchronizationContextWork);
            QUnit.test("CancellationTokenTests - RegisterOnCancellationTokenCreatedNonCancelledDoesNothing", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.RegisterOnCancellationTokenCreatedNonCancelledDoesNothing);
            QUnit.test("CancellationTokenTests - RegisterOnCancellationTokenCreatedCancelledInvokesTheActionImmediately", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.RegisterOnCancellationTokenCreatedCancelledInvokesTheActionImmediately);
            QUnit.test("CancellationTokenTests - DuplicateCancelDoesNotCauseCallbacksToBeCalledTwice", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.DuplicateCancelDoesNotCauseCallbacksToBeCalledTwice);
            QUnit.test("CancellationTokenTests - RegistrationsCanBeCompared", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.RegistrationsCanBeCompared);
            QUnit.test("CancellationTokenTests - RegistrationsCanBeUnregistered", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.RegistrationsCanBeUnregistered);
            QUnit.test("CancellationTokenTests - CreatingADefaultCancellationTokenRegistrationReturnsARegistrationThatCanBeDisposedWithoutHarm", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.CreatingADefaultCancellationTokenRegistrationReturnsARegistrationThatCanBeDisposedWithoutHarm);
            QUnit.test("CancellationTokenTests - LinkedSourceWithTwoTokensWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.LinkedSourceWithTwoTokensWorks);
            QUnit.test("CancellationTokenTests - LinkedSourceWithThreeTokensWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests.LinkedSourceWithThreeTokensWorks);
            QUnit.test("PromiseTests - TaskFromPromiseWithoutResultFactoryWorksWhenPromiseCompletes", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.PromiseTests.TaskFromPromiseWithoutResultFactoryWorksWhenPromiseCompletes);
            QUnit.test("PromiseTests - TaskFromPromiseWithResultFactoryWorksWhenPromiseCompletes", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.PromiseTests.TaskFromPromiseWithResultFactoryWorksWhenPromiseCompletes);
            QUnit.test("PromiseTests - TaskFromPromiseWorksWhenPromiseFails", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.PromiseTests.TaskFromPromiseWorksWhenPromiseFails);
            QUnit.test("PromiseTests - CompletingPromiseCanBeAwaited", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.PromiseTests.CompletingPromiseCanBeAwaited);
            QUnit.test("PromiseTests - FailingPromiseCanBeAwaited", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.PromiseTests.FailingPromiseCanBeAwaited);
            QUnit.test("PromiseTests - TaskFromPromiseWithProgressWithoutResultFactoryWorksWhenPromiseProgressesAndCompletes", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.PromiseTests.TaskFromPromiseWithProgressWithoutResultFactoryWorksWhenPromiseProgressesAndCompletes);
            QUnit.test("TaskTests - TaskCompletionSourceTypePropertiesAreCorrect", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.TaskCompletionSourceTypePropertiesAreCorrect);
            QUnit.test("TaskTests - TaskTypePropertiesAreCorrect", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.TaskTypePropertiesAreCorrect);
            QUnit.test("TaskTests - TaskCompletionSourceWorksWhenSettingResult", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.TaskCompletionSourceWorksWhenSettingResult);
            QUnit.test("TaskTests - TaskCompletionSourceWorksWhenSettingASingleException", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.TaskCompletionSourceWorksWhenSettingASingleException);
            QUnit.test("TaskTests - TaskCompletionSourceWorksWhenSettingTwoExceptions", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.TaskCompletionSourceWorksWhenSettingTwoExceptions);
            QUnit.test("TaskTests - TaskCompletionSourceWorksWhenCancelling", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.TaskCompletionSourceWorksWhenCancelling);
            QUnit.test("TaskTests - CancelledTaskThrowsTaskCanceledExceptionWhenAwaited", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.CancelledTaskThrowsTaskCanceledExceptionWhenAwaited);
            QUnit.test("TaskTests - CancelledTaskThrowsAggregateExceptionWithTaskCanceledExceptionWhenResultIsAccessed", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.CancelledTaskThrowsAggregateExceptionWithTaskCanceledExceptionWhenResultIsAccessed);
            QUnit.test("TaskTests - SetResultFailsWhenTheTaskIsCompleted", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.SetResultFailsWhenTheTaskIsCompleted);
            QUnit.test("TaskTests - SetCanceledFailsWhenTheTaskIsCompleted", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.SetCanceledFailsWhenTheTaskIsCompleted);
            QUnit.test("TaskTests - SetExceptionFailsWhenTheTaskIsCompleted", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.SetExceptionFailsWhenTheTaskIsCompleted);
            QUnit.test("TaskTests - CompletedTaskHasCorrectIsXProperties", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.CompletedTaskHasCorrectIsXProperties);
            QUnit.test("TaskTests - CancelledTaskHasCorrectIsXProperties", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.CancelledTaskHasCorrectIsXProperties);
            QUnit.test("TaskTests - FaultedTaskHasCorrectIsXProperties", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.FaultedTaskHasCorrectIsXProperties);
            QUnit.test("TaskTests - TrySetResultReturnsFalseWhenTheTaskIsCompleted", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.TrySetResultReturnsFalseWhenTheTaskIsCompleted);
            QUnit.test("TaskTests - TrySetCanceledReturnsFalseWhenTheTaskIsCompleted", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.TrySetCanceledReturnsFalseWhenTheTaskIsCompleted);
            QUnit.test("TaskTests - TrySetExceptionReturnsFalseWhenTheTaskIsCompleted", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.TrySetExceptionReturnsFalseWhenTheTaskIsCompleted);
            QUnit.test("TaskTests - ContinueWithForNonGenericTaskWorkWithNoResultAndNoException", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.ContinueWithForNonGenericTaskWorkWithNoResultAndNoException);
            QUnit.test("TaskTests - ContinueWithWhenCallbackThrowsAnException", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.ContinueWithWhenCallbackThrowsAnException);
            QUnit.test("TaskTests - ExceptionInTaskBodyAppearsInTheExceptionMemberForNonGenericTask", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.ExceptionInTaskBodyAppearsInTheExceptionMemberForNonGenericTask);
            QUnit.test("TaskTests - ContinueWithForNonGenericTaskCanReturnAValue", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.ContinueWithForNonGenericTaskCanReturnAValue);
            QUnit.test("TaskTests - ContinueWithWithNoReturnValueForGenericTaskWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.ContinueWithWithNoReturnValueForGenericTaskWorks);
            QUnit.test("TaskTests - ContinueWithForGenericTaskCanReturnAValue", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.ContinueWithForGenericTaskCanReturnAValue);
            QUnit.test("TaskTests - DelayWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.DelayWorks);
            QUnit.test("TaskTests - FromResultWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.FromResultWorks);
            QUnit.test("TaskTests - RunWithoutResultWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.RunWithoutResultWorks);
            QUnit.test("TaskTests - RunWithResultWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.RunWithResultWorks);
            QUnit.test("TaskTests - RunWorksWhenBodyThrows", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.RunWorksWhenBodyThrows);
            QUnit.test("TaskTests - WhenAllParamArrayWithResultWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.WhenAllParamArrayWithResultWorks);
            QUnit.test("TaskTests - WhenAllEnumerableWithResultWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.WhenAllEnumerableWithResultWorks);
            QUnit.test("TaskTests - WhenAllParamArrayWithoutResultWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.WhenAllParamArrayWithoutResultWorks);
            QUnit.test("TaskTests - WhenAllEnumerableWithoutResultWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.WhenAllEnumerableWithoutResultWorks);
            QUnit.test("TaskTests - WhenAllShouldHaveAnErrorIfAnyIncludedTaskFaulted", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.WhenAllShouldHaveAnErrorIfAnyIncludedTaskFaulted);
            QUnit.test("TaskTests - WhenAllShouldBeCancelledIfNoTaskWasFaultedButSomeWasCancelled", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.WhenAllShouldBeCancelledIfNoTaskWasFaultedButSomeWasCancelled);
            QUnit.test("TaskTests - WhenAnyParamArrayWithResultWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.WhenAnyParamArrayWithResultWorks);
            QUnit.test("TaskTests - WhenAnyEnumerableWithResultWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.WhenAnyEnumerableWithResultWorks);
            QUnit.test("TaskTests - WhenAnyParamArrayWithoutResultWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.WhenAnyParamArrayWithoutResultWorks);
            QUnit.test("TaskTests - WhenAnyEnumerableWithoutResultWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.WhenAnyEnumerableWithoutResultWorks);
            QUnit.test("TaskTests - WhenAnyFaultsIfTheFirstTaskFaulted", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.WhenAnyFaultsIfTheFirstTaskFaulted);
            QUnit.test("TaskTests - WhenAnyIsCancelledIfTheFirstTaskWasCancelled", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.WhenAnyIsCancelledIfTheFirstTaskWasCancelled);
            QUnit.test("TaskTests - ConstructorWithOnlyActionWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.ConstructorWithOnlyActionWorks);
            QUnit.test("TaskTests - ConstructorWithActionAndStateWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.ConstructorWithActionAndStateWorks);
            QUnit.test("TaskTests - ExceptionInManuallyCreatedTaskIsStoredOnTheTask", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.ExceptionInManuallyCreatedTaskIsStoredOnTheTask);
            QUnit.test("TaskTests - ConstructorWithOnlyFunctionWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.ConstructorWithOnlyFunctionWorks);
            QUnit.test("TaskTests - ConstructorWithFunctionAndStateWorks", Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests.ConstructorWithFunctionAndStateWorks);
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

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.AsyncTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.AsyncTests)],
        statics: {
            methods: {
                AsyncVoid: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.AsyncTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.AsyncTests, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "AsyncVoid()", $t.Line = "11", $t));
                    t.Fixture.AsyncVoid();
                },
                AsyncTask: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.AsyncTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.AsyncTests, 7, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "AsyncTask()", $t.Line = "42", $t));
                    t.Fixture.AsyncTask();
                },
                AsyncTaskBodyThrowsException: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.AsyncTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.AsyncTests, 8, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "AsyncTaskBodyThrowsException()", $t.Line = "78", $t));
                    t.Fixture.AsyncTaskBodyThrowsException();
                },
                AwaitTaskThatFaults: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.AsyncTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.AsyncTests, 8, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "AwaitTaskThatFaults()", $t.Line = "117", $t));
                    t.Fixture.AwaitTaskThatFaults();
                },
                AggregateExceptionsAreUnwrappedWhenAwaitingTask: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.AsyncTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.AsyncTests, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "AggregateExceptionsAreUnwrappedWhenAwaitingTask()", $t.Line = "155", $t));
                    t.Fixture.AggregateExceptionsAreUnwrappedWhenAwaitingTask();
                },
                AsyncTaskThatReturnsValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.AsyncTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.AsyncTests, 8, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "AsyncTaskThatReturnsValue()", $t.Line = "191", $t));
                    t.Fixture.AsyncTaskThatReturnsValue();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.Threading.AsyncTests", $t.File = "Batch4\\Threading\\Tasks\\AsyncTests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ByteTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.ByteTests)],
        statics: {
            methods: {
                TryParseWorks_SPI_1592: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.ByteTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ByteTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TryParseWorks_SPI_1592()", $t.Line = "10", $t));
                    t.Fixture.TryParseWorks_SPI_1592();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.SimpleTypes.ByteTests", $t.File = "Batch4\\SimpleTypes\\ByteTests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests)],
        statics: {
            methods: {
                TypePropertiesForCancellationTokenSourceAreCorrect: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypePropertiesForCancellationTokenSourceAreCorrect()", $t.Line = "14", $t));
                    t.Fixture.TypePropertiesForCancellationTokenSourceAreCorrect();
                },
                TypePropertiesForCancellationTokenAreCorrect: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypePropertiesForCancellationTokenAreCorrect()", $t.Line = "23", $t));
                    t.Fixture.TypePropertiesForCancellationTokenAreCorrect();
                },
                TypePropertiesForCancellationTokenRegistrationAreCorrect: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypePropertiesForCancellationTokenRegistrationAreCorrect()", $t.Line = "33", $t));
                    t.Fixture.TypePropertiesForCancellationTokenRegistrationAreCorrect();
                },
                CancellationTokenCreatedWithDefaultConstructorIsNotCanceledAndCannotBe: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CancellationTokenCreatedWithDefaultConstructorIsNotCanceledAndCannotBe()", $t.Line = "44", $t));
                    t.Fixture.CancellationTokenCreatedWithDefaultConstructorIsNotCanceledAndCannotBe();
                },
                CancellationTokenCreatedWithFalseArgumentToConstructorIsNotCanceledAndCannotBe: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CancellationTokenCreatedWithFalseArgumentToConstructorIsNotCanceledAndCannotBe()", $t.Line = "53", $t));
                    t.Fixture.CancellationTokenCreatedWithFalseArgumentToConstructorIsNotCanceledAndCannotBe();
                },
                CancellationTokenCreatedWithTrueArgumentToConstructorIsCanceled: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CancellationTokenCreatedWithTrueArgumentToConstructorIsCanceled()", $t.Line = "62", $t));
                    t.Fixture.CancellationTokenCreatedWithTrueArgumentToConstructorIsCanceled();
                },
                CancellationTokenNoneIsNotCancelledAndCannotBe: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CancellationTokenNoneIsNotCancelledAndCannotBe()", $t.Line = "71", $t));
                    t.Fixture.CancellationTokenNoneIsNotCancelledAndCannotBe();
                },
                CreatingADefaultCancellationTokenReturnsACancellationTokenThatIsNotCancelled: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CreatingADefaultCancellationTokenReturnsACancellationTokenThatIsNotCancelled()", $t.Line = "79", $t));
                    t.Fixture.CreatingADefaultCancellationTokenReturnsACancellationTokenThatIsNotCancelled();
                },
                ActivatorCreateForCancellationTokenReturnsACancellationTokenThatIsNotCancelled: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ActivatorCreateForCancellationTokenReturnsACancellationTokenThatIsNotCancelled()", $t.Line = "88", $t));
                    t.Fixture.ActivatorCreateForCancellationTokenReturnsACancellationTokenThatIsNotCancelled();
                },
                CanBeCanceledIsTrueForTokenCreatedForCancellationTokenSource: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CanBeCanceledIsTrueForTokenCreatedForCancellationTokenSource()", $t.Line = "97", $t));
                    t.Fixture.CanBeCanceledIsTrueForTokenCreatedForCancellationTokenSource();
                },
                IsCancellationRequestedForTokenCreatedForCancellationTokenSourceIsSetByTheCancelMethod: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IsCancellationRequestedForTokenCreatedForCancellationTokenSourceIsSetByTheCancelMethod()", $t.Line = "104", $t));
                    t.Fixture.IsCancellationRequestedForTokenCreatedForCancellationTokenSourceIsSetByTheCancelMethod();
                },
                ThrowIfCancellationRequestedForTokenCreatedForCancellationTokenSourceThrowsAfterTheCancelMethodIsCalled: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ThrowIfCancellationRequestedForTokenCreatedForCancellationTokenSourceThrowsAfterTheCancelMethodIsCalled()", $t.Line = "115", $t));
                    t.Fixture.ThrowIfCancellationRequestedForTokenCreatedForCancellationTokenSourceThrowsAfterTheCancelMethodIsCalled();
                },
                CancelWithoutArgumentsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CancelWithoutArgumentsWorks()", $t.Line = "124", $t));
                    t.Fixture.CancelWithoutArgumentsWorks();
                },
                CancelWorksWhenThrowOnFirstExceptionIsFalse: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CancelWorksWhenThrowOnFirstExceptionIsFalse()", $t.Line = "169", $t));
                    t.Fixture.CancelWorksWhenThrowOnFirstExceptionIsFalse();
                },
                CancelWorksWhenThrowOnFirstExceptionIsTrue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CancelWorksWhenThrowOnFirstExceptionIsTrue()", $t.Line = "215", $t));
                    t.Fixture.CancelWorksWhenThrowOnFirstExceptionIsTrue();
                },
                RegisterOnACancelledSourceWithoutContextInvokesTheCallback: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "RegisterOnACancelledSourceWithoutContextInvokesTheCallback()", $t.Line = "259", $t));
                    t.Fixture.RegisterOnACancelledSourceWithoutContextInvokesTheCallback();
                },
                RegisterWithArgumentOnACancelledSourceInvokesTheCallback: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "RegisterWithArgumentOnACancelledSourceInvokesTheCallback()", $t.Line = "269", $t));
                    t.Fixture.RegisterWithArgumentOnACancelledSourceInvokesTheCallback();
                },
                RegisterOnACancelledSourceWithoutContextRethrowsAThrownException: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "RegisterOnACancelledSourceWithoutContextRethrowsAThrownException()", $t.Line = "284", $t));
                    t.Fixture.RegisterOnACancelledSourceWithoutContextRethrowsAThrownException();
                },
                RegisterOnACancelledSourceWithContextRethrowsAThrownException: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "RegisterOnACancelledSourceWithContextRethrowsAThrownException()", $t.Line = "304", $t));
                    t.Fixture.RegisterOnACancelledSourceWithContextRethrowsAThrownException();
                },
                RegisterOverloadsWithUseSynchronizationContextWork: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "RegisterOverloadsWithUseSynchronizationContextWork()", $t.Line = "326", $t));
                    t.Fixture.RegisterOverloadsWithUseSynchronizationContextWork();
                },
                RegisterOnCancellationTokenCreatedNonCancelledDoesNothing: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "RegisterOnCancellationTokenCreatedNonCancelledDoesNothing()", $t.Line = "356", $t));
                    t.Fixture.RegisterOnCancellationTokenCreatedNonCancelledDoesNothing();
                },
                RegisterOnCancellationTokenCreatedCancelledInvokesTheActionImmediately: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "RegisterOnCancellationTokenCreatedCancelledInvokesTheActionImmediately()", $t.Line = "367", $t));
                    t.Fixture.RegisterOnCancellationTokenCreatedCancelledInvokesTheActionImmediately();
                },
                DuplicateCancelDoesNotCauseCallbacksToBeCalledTwice: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DuplicateCancelDoesNotCauseCallbacksToBeCalledTwice()", $t.Line = "384", $t));
                    t.Fixture.DuplicateCancelDoesNotCauseCallbacksToBeCalledTwice();
                },
                RegistrationsCanBeCompared: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "RegistrationsCanBeCompared()", $t.Line = "396", $t));
                    t.Fixture.RegistrationsCanBeCompared();
                },
                RegistrationsCanBeUnregistered: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "RegistrationsCanBeUnregistered()", $t.Line = "418", $t));
                    t.Fixture.RegistrationsCanBeUnregistered();
                },
                CreatingADefaultCancellationTokenRegistrationReturnsARegistrationThatCanBeDisposedWithoutHarm: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CreatingADefaultCancellationTokenRegistrationReturnsARegistrationThatCanBeDisposedWithoutHarm()", $t.Line = "446", $t));
                    t.Fixture.CreatingADefaultCancellationTokenRegistrationReturnsARegistrationThatCanBeDisposedWithoutHarm();
                },
                LinkedSourceWithTwoTokensWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "LinkedSourceWithTwoTokensWorks()", $t.Line = "455", $t));
                    t.Fixture.LinkedSourceWithTwoTokensWorks();
                },
                LinkedSourceWithThreeTokensWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.CancellationTokenTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.CancellationTokenTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "LinkedSourceWithThreeTokensWorks()", $t.Line = "479", $t));
                    t.Fixture.LinkedSourceWithThreeTokensWorks();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.Threading.CancellationTokenTests", $t.File = "Batch4\\Threading\\CancellationTokenTests.cs", $t);
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
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Exceptions.ContractExceptionTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ContractExceptionTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypePropertiesAreCorrect()", $t.Line = "10", $t));
                    t.Fixture.TypePropertiesAreCorrect();
                },
                DefaultConstructorWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Exceptions.ContractExceptionTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ContractExceptionTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultConstructorWorks()", $t.Line = "24", $t));
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
                TypePropertiesAreCorrect_SPI_1608_1609: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypePropertiesAreCorrect_SPI_1608_1609()", $t.Line = "10", $t));
                    t.Fixture.TypePropertiesAreCorrect_SPI_1608_1609();
                },
                DefaultConstructorReturnsTodaysDate: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultConstructorReturnsTodaysDate()", $t.Line = "28", $t));
                    t.Fixture.DefaultConstructorReturnsTodaysDate();
                },
                CreatingInstanceReturnsTodaysDate_SPI_1604: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CreatingInstanceReturnsTodaysDate_SPI_1604()", $t.Line = "35", $t));
                    t.Fixture.CreatingInstanceReturnsTodaysDate_SPI_1604();
                },
                MillisecondSinceEpochConstructorWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "MillisecondSinceEpochConstructorWorks()", $t.Line = "42", $t));
                    t.Fixture.MillisecondSinceEpochConstructorWorks();
                },
                StringConstructorWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "StringConstructorWorks()", $t.Line = "49", $t));
                    t.Fixture.StringConstructorWorks();
                },
                YMDConstructorWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "YMDConstructorWorks()", $t.Line = "58", $t));
                    t.Fixture.YMDConstructorWorks();
                },
                YMDHConstructorWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "YMDHConstructorWorks()", $t.Line = "67", $t));
                    t.Fixture.YMDHConstructorWorks();
                },
                YMDHNConstructorWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "YMDHNConstructorWorks()", $t.Line = "77", $t));
                    t.Fixture.YMDHNConstructorWorks();
                },
                YMDHNSConstructorWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "YMDHNSConstructorWorks()", $t.Line = "88", $t));
                    t.Fixture.YMDHNSConstructorWorks();
                },
                YMDHNSUConstructorWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "YMDHNSUConstructorWorks()", $t.Line = "100", $t));
                    t.Fixture.YMDHNSUConstructorWorks();
                },
                NowWorks_SPI_1624: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "NowWorks_SPI_1624()", $t.Line = "114", $t));
                    t.Fixture.NowWorks_SPI_1624();
                },
                GetFullYearWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetFullYearWorks()", $t.Line = "215", $t));
                    t.Fixture.GetFullYearWorks();
                },
                GetMonthWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetMonthWorks()", $t.Line = "222", $t));
                    t.Fixture.GetMonthWorks();
                },
                GetDateWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetDateWorks()", $t.Line = "229", $t));
                    t.Fixture.GetDateWorks();
                },
                GetHoursWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetHoursWorks()", $t.Line = "236", $t));
                    t.Fixture.GetHoursWorks();
                },
                GetMinutesWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetMinutesWorks()", $t.Line = "243", $t));
                    t.Fixture.GetMinutesWorks();
                },
                GetSecondsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetSecondsWorks()", $t.Line = "250", $t));
                    t.Fixture.GetSecondsWorks();
                },
                GetMillisecondsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetMillisecondsWorks()", $t.Line = "257", $t));
                    t.Fixture.GetMillisecondsWorks();
                },
                GetDayWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetDayWorks()", $t.Line = "264", $t));
                    t.Fixture.GetDayWorks();
                },
                GetTimeWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetTimeWorks()", $t.Line = "271", $t));
                    t.Fixture.GetTimeWorks();
                },
                ValueOfWorks_SPI_1624: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ValueOfWorks_SPI_1624()", $t.Line = "279", $t));
                    t.Fixture.ValueOfWorks_SPI_1624();
                },
                GetTimezoneOffsetWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetTimezoneOffsetWorks()", $t.Line = "287", $t));
                    t.Fixture.GetTimezoneOffsetWorks();
                },
                GetUtcFullYearWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetUtcFullYearWorks()", $t.Line = "294", $t));
                    t.Fixture.GetUtcFullYearWorks();
                },
                GetUtcMonthWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetUtcMonthWorks()", $t.Line = "301", $t));
                    t.Fixture.GetUtcMonthWorks();
                },
                GetUtcDateWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetUtcDateWorks()", $t.Line = "308", $t));
                    t.Fixture.GetUtcDateWorks();
                },
                GetUtcHoursWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetUtcHoursWorks()", $t.Line = "315", $t));
                    t.Fixture.GetUtcHoursWorks();
                },
                GetUtcMinutesWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetUtcMinutesWorks()", $t.Line = "323", $t));
                    t.Fixture.GetUtcMinutesWorks();
                },
                GetUtcSecondsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetUtcSecondsWorks()", $t.Line = "330", $t));
                    t.Fixture.GetUtcSecondsWorks();
                },
                GetUtcMillisecondsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetUtcMillisecondsWorks()", $t.Line = "337", $t));
                    t.Fixture.GetUtcMillisecondsWorks();
                },
                GetUtcDayWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetUtcDayWorks()", $t.Line = "344", $t));
                    t.Fixture.GetUtcDayWorks();
                },
                ParseWorks_SPI_1624: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ParseWorks_SPI_1624()", $t.Line = "352", $t));
                    t.Fixture.ParseWorks_SPI_1624();
                },
                ToLocaleDateStringIsWorking_1624: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToLocaleDateStringIsWorking_1624()", $t.Line = "373", $t));
                    t.Fixture.ToLocaleDateStringIsWorking_1624();
                },
                ToDateStringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToDateStringWorks()", $t.Line = "465", $t));
                    t.Fixture.ToDateStringWorks();
                },
                ToTimeStringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToTimeStringWorks()", $t.Line = "473", $t));
                    t.Fixture.ToTimeStringWorks();
                },
                ToUtcStringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToUtcStringWorks()", $t.Line = "481", $t));
                    t.Fixture.ToUtcStringWorks();
                },
                ToLocaleDateStringWorks_SPI_1624: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToLocaleDateStringWorks_SPI_1624()", $t.Line = "489", $t));
                    t.Fixture.ToLocaleDateStringWorks_SPI_1624();
                },
                DateUTCIsWorking_SPI_1624: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DateUTCIsWorking_SPI_1624()", $t.Line = "497", $t));
                    t.Fixture.DateUTCIsWorking_SPI_1624();
                },
                ToLocaleTimeStringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToLocaleTimeStringWorks()", $t.Line = "532", $t));
                    t.Fixture.ToLocaleTimeStringWorks();
                },
                SubtractingDatesWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SubtractingDatesWorks()", $t.Line = "586", $t));
                    t.Fixture.SubtractingDatesWorks();
                },
                DateEqualityWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DateEqualityWorks()", $t.Line = "600", $t));
                    t.Fixture.DateEqualityWorks();
                },
                DateInequalityWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DateInequalityWorks()", $t.Line = "610", $t));
                    t.Fixture.DateInequalityWorks();
                },
                DateLessThanWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DateLessThanWorks()", $t.Line = "620", $t));
                    t.Fixture.DateLessThanWorks();
                },
                DateLessEqualWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DateLessEqualWorks()", $t.Line = "628", $t));
                    t.Fixture.DateLessEqualWorks();
                },
                DateGreaterThanWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DateGreaterThanWorks()", $t.Line = "636", $t));
                    t.Fixture.DateGreaterThanWorks();
                },
                DateGreaterEqualWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DateGreaterEqualWorks()", $t.Line = "644", $t));
                    t.Fixture.DateGreaterEqualWorks();
                },
                SetFullYearWithOneParameterWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SetFullYearWithOneParameterWorks()", $t.Line = "652", $t));
                    t.Fixture.SetFullYearWithOneParameterWorks();
                },
                SetFullYearWithTwoParametersWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SetFullYearWithTwoParametersWorks()", $t.Line = "660", $t));
                    t.Fixture.SetFullYearWithTwoParametersWorks();
                },
                SetFullYearWithThreeParametersWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SetFullYearWithThreeParametersWorks()", $t.Line = "669", $t));
                    t.Fixture.SetFullYearWithThreeParametersWorks();
                },
                SetMonthWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SetMonthWorks()", $t.Line = "679", $t));
                    t.Fixture.SetMonthWorks();
                },
                SetDateWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SetDateWorks()", $t.Line = "687", $t));
                    t.Fixture.SetDateWorks();
                },
                SetHoursWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SetHoursWorks()", $t.Line = "695", $t));
                    t.Fixture.SetHoursWorks();
                },
                SetMinutesWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SetMinutesWorks()", $t.Line = "703", $t));
                    t.Fixture.SetMinutesWorks();
                },
                SetSecondsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SetSecondsWorks()", $t.Line = "711", $t));
                    t.Fixture.SetSecondsWorks();
                },
                SetMillisecondsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SetMillisecondsWorks()", $t.Line = "719", $t));
                    t.Fixture.SetMillisecondsWorks();
                },
                SetTimeWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SetTimeWorks()", $t.Line = "727", $t));
                    t.Fixture.SetTimeWorks();
                },
                SetTimeAsDoubleWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SetTimeAsDoubleWorks()", $t.Line = "735", $t));
                    t.Fixture.SetTimeAsDoubleWorks();
                },
                SetUtcFullYearWithOneParameterWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SetUtcFullYearWithOneParameterWorks()", $t.Line = "743", $t));
                    t.Fixture.SetUtcFullYearWithOneParameterWorks();
                },
                SetUtcFullYearWithTwoParametersWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SetUtcFullYearWithTwoParametersWorks()", $t.Line = "751", $t));
                    t.Fixture.SetUtcFullYearWithTwoParametersWorks();
                },
                SetUtcFullYearWithThreeParametersWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SetUtcFullYearWithThreeParametersWorks()", $t.Line = "760", $t));
                    t.Fixture.SetUtcFullYearWithThreeParametersWorks();
                },
                SetUtcMonthWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SetUtcMonthWorks()", $t.Line = "770", $t));
                    t.Fixture.SetUtcMonthWorks();
                },
                SetUtcDateWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SetUtcDateWorks()", $t.Line = "780", $t));
                    t.Fixture.SetUtcDateWorks();
                },
                SetUtcHoursWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SetUtcHoursWorks()", $t.Line = "788", $t));
                    t.Fixture.SetUtcHoursWorks();
                },
                SetUtcMinutesWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SetUtcMinutesWorks()", $t.Line = "796", $t));
                    t.Fixture.SetUtcMinutesWorks();
                },
                SetUtcSecondsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SetUtcSecondsWorks()", $t.Line = "804", $t));
                    t.Fixture.SetUtcSecondsWorks();
                },
                SetUtcMillisecondsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SetUtcMillisecondsWorks()", $t.Line = "812", $t));
                    t.Fixture.SetUtcMillisecondsWorks();
                },
                GetHashCodeWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetHashCodeWorks()", $t.Line = "820", $t));
                    t.Fixture.GetHashCodeWorks();
                },
                EqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DateTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DateTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "EqualsWorks()", $t.Line = "829", $t));
                    t.Fixture.EqualsWorks();
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
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ConversionsToDecimalWork_SPI_1580()", $t.Line = "27", $t));
                    t.Fixture.ConversionsToDecimalWork_SPI_1580();
                },
                NullableConversionsToDecimalWork_SPI_1580_1581_1587: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "NullableConversionsToDecimalWork_SPI_1580_1581_1587()", $t.Line = "62", $t));
                    t.Fixture.NullableConversionsToDecimalWork_SPI_1580_1581_1587();
                },
                DecimalToSByte_SPI_1580: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DecimalToSByte_SPI_1580()", $t.Line = "156", $t));
                    t.Fixture.DecimalToSByte_SPI_1580();
                },
                DecimalToByte_SPI_1580: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DecimalToByte_SPI_1580()", $t.Line = "185", $t));
                    t.Fixture.DecimalToByte_SPI_1580();
                },
                DecimalToShort_SPI_1580: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DecimalToShort_SPI_1580()", $t.Line = "214", $t));
                    t.Fixture.DecimalToShort_SPI_1580();
                },
                DecimalToUShort_SPI_1580: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DecimalToUShort_SPI_1580()", $t.Line = "243", $t));
                    t.Fixture.DecimalToUShort_SPI_1580();
                },
                DecimalToInt_SPI_1580: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DecimalToInt_SPI_1580()", $t.Line = "272", $t));
                    t.Fixture.DecimalToInt_SPI_1580();
                },
                DecimalToUInt_SPI_1580: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DecimalToUInt_SPI_1580()", $t.Line = "301", $t));
                    t.Fixture.DecimalToUInt_SPI_1580();
                },
                DecimalToLong_SPI_1578: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DecimalToLong_SPI_1578()", $t.Line = "330", $t));
                    t.Fixture.DecimalToLong_SPI_1578();
                },
                DecimalToULong_SPI_1584_1585: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DecimalToULong_SPI_1584_1585()", $t.Line = "342", $t));
                    t.Fixture.DecimalToULong_SPI_1584_1585();
                },
                NullableDecimalToLong_SPI_1582: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "NullableDecimalToLong_SPI_1582()", $t.Line = "376", $t));
                    t.Fixture.NullableDecimalToLong_SPI_1582();
                },
                NullableDecimalToULong_SPI_1582: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "NullableDecimalToULong_SPI_1582()", $t.Line = "393", $t));
                    t.Fixture.NullableDecimalToULong_SPI_1582();
                },
                OperatorsWork_SPI_1583: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "OperatorsWork_SPI_1583()", $t.Line = "418", $t));
                    t.Fixture.OperatorsWork_SPI_1583();
                },
                LiftedOperatorsWork_SPI_1583: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "LiftedOperatorsWork_SPI_1583()", $t.Line = "464", $t));
                    t.Fixture.LiftedOperatorsWork_SPI_1583();
                },
                ParseWorks_SPI_1586: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ParseWorks_SPI_1586()", $t.Line = "556", $t));
                    t.Fixture.ParseWorks_SPI_1586();
                },
                TryParseWorks_SPI_1586: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TryParseWorks_SPI_1586()", $t.Line = "580", $t));
                    t.Fixture.TryParseWorks_SPI_1586();
                },
                ImplementationTests_SPI_1588_1590_1650: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DecimalTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DecimalTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ImplementationTests_SPI_1588_1590_1650()", $t.Line = "631", $t));
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

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests)],
        statics: {
            methods: {
                TypePropertiesAreCorrect_SPI_1717: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypePropertiesAreCorrect_SPI_1717()", $t.Line = "10", $t));
                    t.Fixture.TypePropertiesAreCorrect_SPI_1717();
                },
                DefaultValueIs0: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultValueIs0()", $t.Line = "37", $t));
                    t.Fixture.DefaultValueIs0();
                },
                CreatingInstanceReturnsZero: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CreatingInstanceReturnsZero()", $t.Line = "43", $t));
                    t.Fixture.CreatingInstanceReturnsZero();
                },
                ConstantsWork: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ConstantsWork()", $t.Line = "49", $t));
                    t.Fixture.ConstantsWork();
                },
                DefaultConstructorReturnsZero: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultConstructorReturnsZero()", $t.Line = "63", $t));
                    t.Fixture.DefaultConstructorReturnsZero();
                },
                FormatWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "FormatWorks()", $t.Line = "69", $t));
                    t.Fixture.FormatWorks();
                },
                ToStringWithFormatWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithFormatWorks()", $t.Line = "75", $t));
                    t.Fixture.ToStringWithFormatWorks();
                },
                ToStringWithFormatAndProviderWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithFormatAndProviderWorks()", $t.Line = "81", $t));
                    t.Fixture.ToStringWithFormatAndProviderWorks();
                },
                IFormattableToStringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IFormattableToStringWorks()", $t.Line = "87", $t));
                    t.Fixture.IFormattableToStringWorks();
                },
                ToStringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWorks()", $t.Line = "100", $t));
                    t.Fixture.ToStringWorks();
                },
                ToExponentialWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToExponentialWorks()", $t.Line = "106", $t));
                    t.Fixture.ToExponentialWorks();
                },
                ToExponentialWithFractionalDigitsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToExponentialWithFractionalDigitsWorks()", $t.Line = "112", $t));
                    t.Fixture.ToExponentialWithFractionalDigitsWorks();
                },
                ToFixed: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToFixed()", $t.Line = "118", $t));
                    t.Fixture.ToFixed();
                },
                ToFixedWithFractionalDigitsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToFixedWithFractionalDigitsWorks()", $t.Line = "124", $t));
                    t.Fixture.ToFixedWithFractionalDigitsWorks();
                },
                ToPrecisionWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToPrecisionWorks()", $t.Line = "130", $t));
                    t.Fixture.ToPrecisionWorks();
                },
                ToPrecisionWithPrecisionWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToPrecisionWithPrecisionWorks()", $t.Line = "136", $t));
                    t.Fixture.ToPrecisionWithPrecisionWorks();
                },
                IsPositiveInfinityWorks_SPI_1600: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IsPositiveInfinityWorks_SPI_1600()", $t.Line = "142", $t));
                    t.Fixture.IsPositiveInfinityWorks_SPI_1600();
                },
                IsNegativeInfinityWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IsNegativeInfinityWorks()", $t.Line = "154", $t));
                    t.Fixture.IsNegativeInfinityWorks();
                },
                IsInfinityWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IsInfinityWorks()", $t.Line = "164", $t));
                    t.Fixture.IsInfinityWorks();
                },
                IsFiniteWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IsFiniteWorks()", $t.Line = "174", $t));
                    t.Fixture.IsFiniteWorks();
                },
                IsNaNWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IsNaNWorks()", $t.Line = "183", $t));
                    t.Fixture.IsNaNWorks();
                },
                GetHashCodeWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetHashCodeWorks()", $t.Line = "192", $t));
                    t.Fixture.GetHashCodeWorks();
                },
                EqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "EqualsWorks()", $t.Line = "201", $t));
                    t.Fixture.EqualsWorks();
                },
                IEquatableEqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IEquatableEqualsWorks()", $t.Line = "210", $t));
                    t.Fixture.IEquatableEqualsWorks();
                },
                CompareToWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CompareToWorks()", $t.Line = "224", $t));
                    t.Fixture.CompareToWorks();
                },
                IComparableCompareToWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.DoubleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IComparableCompareToWorks()", $t.Line = "233", $t));
                    t.Fixture.IComparableCompareToWorks();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.SimpleTypes.DoubleTests", $t.File = "Batch4\\SimpleTypes\\DoubleTests.cs", $t);
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

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int16Tests)],
        statics: {
            methods: {
                TypePropertiesAreCorrect_SPI_1717: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypePropertiesAreCorrect_SPI_1717()", $t.Line = "10", $t));
                    t.Fixture.TypePropertiesAreCorrect_SPI_1717();
                },
                CastsWork: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CastsWork()", $t.Line = "35", $t));
                    t.Fixture.CastsWork();
                },
                DefaultValueIs0: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultValueIs0()", $t.Line = "91", $t));
                    t.Fixture.DefaultValueIs0();
                },
                DefaultConstructorReturnsZero: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultConstructorReturnsZero()", $t.Line = "97", $t));
                    t.Fixture.DefaultConstructorReturnsZero();
                },
                CreatingInstanceReturnsZero: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CreatingInstanceReturnsZero()", $t.Line = "103", $t));
                    t.Fixture.CreatingInstanceReturnsZero();
                },
                ConstantsWork: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ConstantsWork()", $t.Line = "109", $t));
                    t.Fixture.ConstantsWork();
                },
                FormatWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "FormatWorks()", $t.Line = "116", $t));
                    t.Fixture.FormatWorks();
                },
                ToStringWithFormatWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithFormatWorks()", $t.Line = "122", $t));
                    t.Fixture.ToStringWithFormatWorks();
                },
                ToStringWithFormatAndProviderWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithFormatAndProviderWorks()", $t.Line = "128", $t));
                    t.Fixture.ToStringWithFormatAndProviderWorks();
                },
                IFormattableToStringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IFormattableToStringWorks()", $t.Line = "134", $t));
                    t.Fixture.IFormattableToStringWorks();
                },
                TryParseWorks_SPI_1592: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TryParseWorks_SPI_1592()", $t.Line = "147", $t));
                    t.Fixture.TryParseWorks_SPI_1592();
                },
                ParseWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ParseWorks()", $t.Line = "182", $t));
                    t.Fixture.ParseWorks();
                },
                ToStringWithoutRadixWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithoutRadixWorks()", $t.Line = "194", $t));
                    t.Fixture.ToStringWithoutRadixWorks();
                },
                ToStringWithRadixWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithRadixWorks()", $t.Line = "200", $t));
                    t.Fixture.ToStringWithRadixWorks();
                },
                GetHashCodeWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetHashCodeWorks()", $t.Line = "207", $t));
                    t.Fixture.GetHashCodeWorks();
                },
                EqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "EqualsWorks()", $t.Line = "215", $t));
                    t.Fixture.EqualsWorks();
                },
                IEquatableEqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IEquatableEqualsWorks()", $t.Line = "224", $t));
                    t.Fixture.IEquatableEqualsWorks();
                },
                CompareToWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CompareToWorks()", $t.Line = "238", $t));
                    t.Fixture.CompareToWorks();
                },
                IComparableCompareToWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IComparableCompareToWorks()", $t.Line = "246", $t));
                    t.Fixture.IComparableCompareToWorks();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.SimpleTypes.Int16Tests", $t.File = "Batch4\\SimpleTypes\\Int16Tests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests)],
        statics: {
            methods: {
                TypePropertiesAreCorrect_SPI_1717: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypePropertiesAreCorrect_SPI_1717()", $t.Line = "12", $t));
                    t.Fixture.TypePropertiesAreCorrect_SPI_1717();
                },
                CastsWork: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CastsWork()", $t.Line = "37", $t));
                    t.Fixture.CastsWork();
                },
                TypeIsWorksForInt32: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypeIsWorksForInt32()", $t.Line = "88", $t));
                    t.Fixture.TypeIsWorksForInt32();
                },
                TypeAsWorksForInt32: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypeAsWorksForInt32()", $t.Line = "97", $t));
                    t.Fixture.TypeAsWorksForInt32();
                },
                UnboxingWorksForInt32: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "UnboxingWorksForInt32()", $t.Line = "106", $t));
                    t.Fixture.UnboxingWorksForInt32();
                },
                DefaultValueIs0: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultValueIs0()", $t.Line = "130", $t));
                    t.Fixture.DefaultValueIs0();
                },
                DefaultConstructorReturnsZero: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultConstructorReturnsZero()", $t.Line = "136", $t));
                    t.Fixture.DefaultConstructorReturnsZero();
                },
                CreatingInstanceReturnsZero: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CreatingInstanceReturnsZero()", $t.Line = "142", $t));
                    t.Fixture.CreatingInstanceReturnsZero();
                },
                ConstantsWork: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ConstantsWork()", $t.Line = "148", $t));
                    t.Fixture.ConstantsWork();
                },
                FormatWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "FormatWorks()", $t.Line = "155", $t));
                    t.Fixture.FormatWorks();
                },
                ToStringWithFormatWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithFormatWorks()", $t.Line = "161", $t));
                    t.Fixture.ToStringWithFormatWorks();
                },
                ToStringWithFormatAndProviderWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithFormatAndProviderWorks()", $t.Line = "167", $t));
                    t.Fixture.ToStringWithFormatAndProviderWorks();
                },
                IFormattableToStringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IFormattableToStringWorks()", $t.Line = "173", $t));
                    t.Fixture.IFormattableToStringWorks();
                },
                TryParseWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TryParseWorks()", $t.Line = "186", $t));
                    t.Fixture.TryParseWorks();
                },
                ParseWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ParseWorks()", $t.Line = "215", $t));
                    t.Fixture.ParseWorks();
                },
                ToStringWithoutRadixWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithoutRadixWorks()", $t.Line = "229", $t));
                    t.Fixture.ToStringWithoutRadixWorks();
                },
                ToStringWithRadixWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithRadixWorks()", $t.Line = "235", $t));
                    t.Fixture.ToStringWithRadixWorks();
                },
                GetHashCodeWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetHashCodeWorks()", $t.Line = "242", $t));
                    t.Fixture.GetHashCodeWorks();
                },
                EqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "EqualsWorks()", $t.Line = "250", $t));
                    t.Fixture.EqualsWorks();
                },
                IEquatableEqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IEquatableEqualsWorks()", $t.Line = "259", $t));
                    t.Fixture.IEquatableEqualsWorks();
                },
                CompareToWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CompareToWorks()", $t.Line = "273", $t));
                    t.Fixture.CompareToWorks();
                },
                IComparableCompareToWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IComparableCompareToWorks()", $t.Line = "281", $t));
                    t.Fixture.IComparableCompareToWorks();
                },
                IntegerDivisionWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IntegerDivisionWorks()", $t.Line = "289", $t));
                    t.Fixture.IntegerDivisionWorks();
                },
                IntegerModuloWorks_SPI_1602: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IntegerModuloWorks_SPI_1602()", $t.Line = "303", $t));
                    t.Fixture.IntegerModuloWorks_SPI_1602();
                },
                IntegerDivisionByZeroThrowsDivideByZeroException: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IntegerDivisionByZeroThrowsDivideByZeroException()", $t.Line = "318", $t));
                    t.Fixture.IntegerDivisionByZeroThrowsDivideByZeroException();
                },
                DoublesAreTruncatedWhenConvertedToIntegers: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DoublesAreTruncatedWhenConvertedToIntegers()", $t.Line = "328", $t));
                    t.Fixture.DoublesAreTruncatedWhenConvertedToIntegers();
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

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int64Tests)],
        statics: {
            methods: {
                TypePropertiesAreCorrect_SPI_1717: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypePropertiesAreCorrect_SPI_1717()", $t.Line = "10", $t));
                    t.Fixture.TypePropertiesAreCorrect_SPI_1717();
                },
                CastsWork: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CastsWork()", $t.Line = "34", $t));
                    t.Fixture.CastsWork();
                },
                DefaultValueIs0: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultValueIs0()", $t.Line = "76", $t));
                    t.Fixture.DefaultValueIs0();
                },
                DefaultConstructorReturnsZero: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultConstructorReturnsZero()", $t.Line = "82", $t));
                    t.Fixture.DefaultConstructorReturnsZero();
                },
                CreatingInstanceReturnsZero: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CreatingInstanceReturnsZero()", $t.Line = "88", $t));
                    t.Fixture.CreatingInstanceReturnsZero();
                },
                FormatWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "FormatWorks()", $t.Line = "94", $t));
                    t.Fixture.FormatWorks();
                },
                ToStringWithFormatWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithFormatWorks()", $t.Line = "100", $t));
                    t.Fixture.ToStringWithFormatWorks();
                },
                ToStringWithFormatAndProviderWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithFormatAndProviderWorks()", $t.Line = "106", $t));
                    t.Fixture.ToStringWithFormatAndProviderWorks();
                },
                IFormattableToStringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IFormattableToStringWorks()", $t.Line = "112", $t));
                    t.Fixture.IFormattableToStringWorks();
                },
                TryParseWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TryParseWorks()", $t.Line = "125", $t));
                    t.Fixture.TryParseWorks();
                },
                ParseWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ParseWorks()", $t.Line = "162", $t));
                    t.Fixture.ParseWorks();
                },
                CastingOfLargeDoublesToInt64Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CastingOfLargeDoublesToInt64Works()", $t.Line = "175", $t));
                    t.Fixture.CastingOfLargeDoublesToInt64Works();
                },
                DivisionOfLargeInt64Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DivisionOfLargeInt64Works()", $t.Line = "183", $t));
                    t.Fixture.DivisionOfLargeInt64Works();
                },
                ToStringWithoutRadixWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithoutRadixWorks()", $t.Line = "191", $t));
                    t.Fixture.ToStringWithoutRadixWorks();
                },
                ToStringWithRadixWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithRadixWorks()", $t.Line = "197", $t));
                    t.Fixture.ToStringWithRadixWorks();
                },
                GetHashCodeWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetHashCodeWorks()", $t.Line = "204", $t));
                    t.Fixture.GetHashCodeWorks();
                },
                EqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "EqualsWorks()", $t.Line = "213", $t));
                    t.Fixture.EqualsWorks();
                },
                IEquatableEqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IEquatableEqualsWorks()", $t.Line = "222", $t));
                    t.Fixture.IEquatableEqualsWorks();
                },
                CompareToWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CompareToWorks()", $t.Line = "236", $t));
                    t.Fixture.CompareToWorks();
                },
                IComparableCompareToWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.Int64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.Int64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IComparableCompareToWorks()", $t.Line = "244", $t));
                    t.Fixture.IComparableCompareToWorks();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.SimpleTypes.Int64Tests", $t.File = "Batch4\\SimpleTypes\\Int64Tests.cs", $t);
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
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Serialization.JsonTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.JsonTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "NonGenericParseWorks_SPI_1574()", $t.Line = "28", $t));
                    t.Fixture.NonGenericParseWorks_SPI_1574();
                },
                GenericParseWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Serialization.JsonTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.JsonTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GenericParseWorks()", $t.Line = "45", $t));
                    t.Fixture.GenericParseWorks();
                },
                NonGenericParseWithCallbackWorks_SPI_1574: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Serialization.JsonTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.JsonTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "NonGenericParseWithCallbackWorks_SPI_1574()", $t.Line = "54", $t));
                    t.Fixture.NonGenericParseWithCallbackWorks_SPI_1574();
                },
                GenericParseWithCallbackWorks_SPI_1574: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Serialization.JsonTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.JsonTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GenericParseWithCallbackWorks_SPI_1574()", $t.Line = "78", $t));
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

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ObjectTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.ObjectTests)],
        statics: {
            methods: {
                TypePropertiesAreCorrect: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.ObjectTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ObjectTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypePropertiesAreCorrect()", $t.Line = "20", $t));
                    t.Fixture.TypePropertiesAreCorrect();
                },
                CanGetHashCodeForObject: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.ObjectTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ObjectTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CanGetHashCodeForObject()", $t.Line = "28", $t));
                    t.Fixture.CanGetHashCodeForObject();
                },
                RepeatedCallsToGetHashCodeReturnsSameValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.ObjectTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ObjectTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "RepeatedCallsToGetHashCodeReturnsSameValue()", $t.Line = "36", $t));
                    t.Fixture.RepeatedCallsToGetHashCodeReturnsSameValue();
                },
                ObjectIsEqualToItself: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.ObjectTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ObjectTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ObjectIsEqualToItself()", $t.Line = "43", $t));
                    t.Fixture.ObjectIsEqualToItself();
                },
                ObjectIsNotEqualToOtherObject: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.ObjectTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ObjectTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ObjectIsNotEqualToOtherObject()", $t.Line = "50", $t));
                    t.Fixture.ObjectIsNotEqualToOtherObject();
                },
                StaticEqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.ObjectTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ObjectTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "StaticEqualsWorks()", $t.Line = "56", $t));
                    t.Fixture.StaticEqualsWorks();
                },
                ReferenceEqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.ObjectTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ObjectTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ReferenceEqualsWorks()", $t.Line = "67", $t));
                    t.Fixture.ReferenceEqualsWorks();
                },
                ToStringOverride: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.ObjectTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.ObjectTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringOverride()", $t.Line = "79", $t));
                    t.Fixture.ToStringOverride();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.SimpleTypes.ObjectTests", $t.File = "Batch4\\SimpleTypes\\ObjectTests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.PromiseTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.PromiseTests)],
        statics: {
            methods: {
                TaskFromPromiseWithoutResultFactoryWorksWhenPromiseCompletes: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.PromiseTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.PromiseTests, 7, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TaskFromPromiseWithoutResultFactoryWorksWhenPromiseCompletes()", $t.Line = "156", $t));
                    t.Fixture.TaskFromPromiseWithoutResultFactoryWorksWhenPromiseCompletes();
                },
                TaskFromPromiseWithResultFactoryWorksWhenPromiseCompletes: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.PromiseTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.PromiseTests, 7, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TaskFromPromiseWithResultFactoryWorksWhenPromiseCompletes()", $t.Line = "188", $t));
                    t.Fixture.TaskFromPromiseWithResultFactoryWorksWhenPromiseCompletes();
                },
                TaskFromPromiseWorksWhenPromiseFails: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.PromiseTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.PromiseTests, 10, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TaskFromPromiseWorksWhenPromiseFails()", $t.Line = "227", $t));
                    t.Fixture.TaskFromPromiseWorksWhenPromiseFails();
                },
                CompletingPromiseCanBeAwaited: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.PromiseTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.PromiseTests, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CompletingPromiseCanBeAwaited()", $t.Line = "262", $t));
                    t.Fixture.CompletingPromiseCanBeAwaited();
                },
                FailingPromiseCanBeAwaited: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.PromiseTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.PromiseTests, 4, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "FailingPromiseCanBeAwaited()", $t.Line = "284", $t));
                    t.Fixture.FailingPromiseCanBeAwaited();
                },
                TaskFromPromiseWithProgressWithoutResultFactoryWorksWhenPromiseProgressesAndCompletes: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.PromiseTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.PromiseTests, 9, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TaskFromPromiseWithProgressWithoutResultFactoryWorksWhenPromiseProgressesAndCompletes()", $t.Line = "332", $t));
                    t.Fixture.TaskFromPromiseWithProgressWithoutResultFactoryWorksWhenPromiseProgressesAndCompletes();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.Threading.PromiseTests", $t.File = "Batch4\\Threading\\Tasks\\PromiseTests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RefParameterTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.RefParameterTests)],
        statics: {
            methods: {
                CanUseReferenceToThis_SPI_1569: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.RefParameterTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RefParameterTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CanUseReferenceToThis_SPI_1569()", $t.Line = "82", $t));
                    t.Fixture.CanUseReferenceToThis_SPI_1569();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.RefParameterTests", $t.File = "Batch4\\RefParameterTests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RegexTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Text.RegularExpressions.RegexTests)],
        statics: {
            methods: {
                TypePropertiesAreCorrect: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Text.RegularExpressions.RegexTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RegexTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypePropertiesAreCorrect()", $t.Line = "9", $t));
                    t.Fixture.TypePropertiesAreCorrect();
                },
                StringOnlyConstructorWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Text.RegularExpressions.RegexTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RegexTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "StringOnlyConstructorWorks()", $t.Line = "18", $t));
                    t.Fixture.StringOnlyConstructorWorks();
                },
                ConstructorWithFlagsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Text.RegularExpressions.RegexTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RegexTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ConstructorWithFlagsWorks()", $t.Line = "26", $t));
                    t.Fixture.ConstructorWithFlagsWorks();
                },
                GlobalFlagWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Text.RegularExpressions.RegexTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RegexTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GlobalFlagWorks()", $t.Line = "34", $t));
                    t.Fixture.GlobalFlagWorks();
                },
                IgnoreCaseFlagWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Text.RegularExpressions.RegexTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RegexTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IgnoreCaseFlagWorks()", $t.Line = "41", $t));
                    t.Fixture.IgnoreCaseFlagWorks();
                },
                MultilineFlagWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Text.RegularExpressions.RegexTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RegexTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "MultilineFlagWorks()", $t.Line = "48", $t));
                    t.Fixture.MultilineFlagWorks();
                },
                PatternPropertyWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Text.RegularExpressions.RegexTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RegexTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "PatternPropertyWorks()", $t.Line = "55", $t));
                    t.Fixture.PatternPropertyWorks();
                },
                SourcePropertyWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Text.RegularExpressions.RegexTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RegexTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SourcePropertyWorks()", $t.Line = "61", $t));
                    t.Fixture.SourcePropertyWorks();
                },
                ExecWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Text.RegularExpressions.RegexTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RegexTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ExecWorks()", $t.Line = "67", $t));
                    t.Fixture.ExecWorks();
                },
                LastIndexWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Text.RegularExpressions.RegexTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RegexTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "LastIndexWorks()", $t.Line = "77", $t));
                    t.Fixture.LastIndexWorks();
                },
                TestWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Text.RegularExpressions.RegexTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.RegexTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestWorks()", $t.Line = "85", $t));
                    t.Fixture.TestWorks();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.Text.RegularExpressions.RegexTests", $t.File = "Batch4\\Text\\RegularExpressions\\RegexTests.cs", $t);
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

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SByteTests)],
        statics: {
            methods: {
                TypePropertiesAreCorrect_SPI_1717: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SByteTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypePropertiesAreCorrect_SPI_1717()", $t.Line = "10", $t));
                    t.Fixture.TypePropertiesAreCorrect_SPI_1717();
                },
                CastsWork: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SByteTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CastsWork()", $t.Line = "35", $t));
                    t.Fixture.CastsWork();
                },
                DefaultValueIs0: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SByteTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultValueIs0()", $t.Line = "91", $t));
                    t.Fixture.DefaultValueIs0();
                },
                DefaultConstructorReturnsZero: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SByteTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultConstructorReturnsZero()", $t.Line = "97", $t));
                    t.Fixture.DefaultConstructorReturnsZero();
                },
                CreatingInstanceReturnsZero: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SByteTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CreatingInstanceReturnsZero()", $t.Line = "103", $t));
                    t.Fixture.CreatingInstanceReturnsZero();
                },
                ConstantsWork: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SByteTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ConstantsWork()", $t.Line = "109", $t));
                    t.Fixture.ConstantsWork();
                },
                FormatWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SByteTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "FormatWorks()", $t.Line = "116", $t));
                    t.Fixture.FormatWorks();
                },
                ToStringWithFormatWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SByteTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithFormatWorks()", $t.Line = "122", $t));
                    t.Fixture.ToStringWithFormatWorks();
                },
                ToStringWithFormatAndProviderWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SByteTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithFormatAndProviderWorks()", $t.Line = "128", $t));
                    t.Fixture.ToStringWithFormatAndProviderWorks();
                },
                IFormattableToStringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SByteTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IFormattableToStringWorks()", $t.Line = "134", $t));
                    t.Fixture.IFormattableToStringWorks();
                },
                TryParseWorks_SPI_1592: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SByteTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TryParseWorks_SPI_1592()", $t.Line = "147", $t));
                    t.Fixture.TryParseWorks_SPI_1592();
                },
                ParseWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SByteTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ParseWorks()", $t.Line = "181", $t));
                    t.Fixture.ParseWorks();
                },
                ToStringWithoutRadixWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SByteTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithoutRadixWorks()", $t.Line = "193", $t));
                    t.Fixture.ToStringWithoutRadixWorks();
                },
                ToStringWithRadixWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SByteTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithRadixWorks()", $t.Line = "199", $t));
                    t.Fixture.ToStringWithRadixWorks();
                },
                GetHashCodeWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SByteTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetHashCodeWorks()", $t.Line = "206", $t));
                    t.Fixture.GetHashCodeWorks();
                },
                EqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SByteTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "EqualsWorks()", $t.Line = "214", $t));
                    t.Fixture.EqualsWorks();
                },
                IEquatableEqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SByteTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IEquatableEqualsWorks()", $t.Line = "223", $t));
                    t.Fixture.IEquatableEqualsWorks();
                },
                CompareToWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SByteTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CompareToWorks()", $t.Line = "237", $t));
                    t.Fixture.CompareToWorks();
                },
                IComparableCompareToWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SByteTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SByteTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IComparableCompareToWorks()", $t.Line = "245", $t));
                    t.Fixture.IComparableCompareToWorks();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.SimpleTypes.SByteTests", $t.File = "Batch4\\SimpleTypes\\SByteTests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests)],
        statics: {
            methods: {
                TypePropertiesAreCorrect_SPI_1717: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypePropertiesAreCorrect_SPI_1717()", $t.Line = "10", $t));
                    t.Fixture.TypePropertiesAreCorrect_SPI_1717();
                },
                DefaultValueIs0: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultValueIs0()", $t.Line = "37", $t));
                    t.Fixture.DefaultValueIs0();
                },
                CreatingInstanceReturnsZero: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CreatingInstanceReturnsZero()", $t.Line = "43", $t));
                    t.Fixture.CreatingInstanceReturnsZero();
                },
                ConstantsWork: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ConstantsWork()", $t.Line = "49", $t));
                    t.Fixture.ConstantsWork();
                },
                DefaultConstructorReturnsZero: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultConstructorReturnsZero()", $t.Line = "61", $t));
                    t.Fixture.DefaultConstructorReturnsZero();
                },
                FormatWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "FormatWorks()", $t.Line = "67", $t));
                    t.Fixture.FormatWorks();
                },
                ToStringWithFormatWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithFormatWorks()", $t.Line = "73", $t));
                    t.Fixture.ToStringWithFormatWorks();
                },
                ToStringWithFormatAndProviderWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithFormatAndProviderWorks()", $t.Line = "79", $t));
                    t.Fixture.ToStringWithFormatAndProviderWorks();
                },
                IFormattableToStringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IFormattableToStringWorks()", $t.Line = "85", $t));
                    t.Fixture.IFormattableToStringWorks();
                },
                ToStringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWorks()", $t.Line = "98", $t));
                    t.Fixture.ToStringWorks();
                },
                ToExponentialWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToExponentialWorks()", $t.Line = "104", $t));
                    t.Fixture.ToExponentialWorks();
                },
                ToExponentialWithFractionalDigitsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToExponentialWithFractionalDigitsWorks()", $t.Line = "110", $t));
                    t.Fixture.ToExponentialWithFractionalDigitsWorks();
                },
                ToFixed: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToFixed()", $t.Line = "116", $t));
                    t.Fixture.ToFixed();
                },
                ToFixedWithFractionalDigitsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToFixedWithFractionalDigitsWorks()", $t.Line = "122", $t));
                    t.Fixture.ToFixedWithFractionalDigitsWorks();
                },
                ToPrecisionWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToPrecisionWorks()", $t.Line = "128", $t));
                    t.Fixture.ToPrecisionWorks();
                },
                ToPrecisionWithPrecisionWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToPrecisionWithPrecisionWorks()", $t.Line = "134", $t));
                    t.Fixture.ToPrecisionWithPrecisionWorks();
                },
                IsPositiveInfinityWorks_SPI_1600: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IsPositiveInfinityWorks_SPI_1600()", $t.Line = "140", $t));
                    t.Fixture.IsPositiveInfinityWorks_SPI_1600();
                },
                IsNegativeInfinityWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IsNegativeInfinityWorks()", $t.Line = "152", $t));
                    t.Fixture.IsNegativeInfinityWorks();
                },
                IsInfinityWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IsInfinityWorks()", $t.Line = "162", $t));
                    t.Fixture.IsInfinityWorks();
                },
                IsFiniteWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IsFiniteWorks()", $t.Line = "172", $t));
                    t.Fixture.IsFiniteWorks();
                },
                IsNaNWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IsNaNWorks()", $t.Line = "181", $t));
                    t.Fixture.IsNaNWorks();
                },
                GetHashCodeWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetHashCodeWorks()", $t.Line = "190", $t));
                    t.Fixture.GetHashCodeWorks();
                },
                EqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "EqualsWorks()", $t.Line = "199", $t));
                    t.Fixture.EqualsWorks();
                },
                IEquatableEqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IEquatableEqualsWorks()", $t.Line = "208", $t));
                    t.Fixture.IEquatableEqualsWorks();
                },
                CompareToWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CompareToWorks()", $t.Line = "222", $t));
                    t.Fixture.CompareToWorks();
                },
                IComparableCompareToWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.SingleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.SingleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IComparableCompareToWorks()", $t.Line = "231", $t));
                    t.Fixture.IComparableCompareToWorks();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.SimpleTypes.SingleTests", $t.File = "Batch4\\SimpleTypes\\SingleTests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests)],
        statics: {
            methods: {
                TypePropertiesAreCorrect_SPI_1597: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypePropertiesAreCorrect_SPI_1597()", $t.Line = "50", $t));
                    t.Fixture.TypePropertiesAreCorrect_SPI_1597();
                },
                DefaultConstructorWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultConstructorWorks()", $t.Line = "69", $t));
                    t.Fixture.DefaultConstructorWorks();
                },
                CharAndCountConstructorWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CharAndCountConstructorWorks()", $t.Line = "75", $t));
                    t.Fixture.CharAndCountConstructorWorks();
                },
                CharArrayConstructorWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CharArrayConstructorWorks()", $t.Line = "81", $t));
                    t.Fixture.CharArrayConstructorWorks();
                },
                CharArrayWithStartIndexAndLengthConstructorWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CharArrayWithStartIndexAndLengthConstructorWorks()", $t.Line = "87", $t));
                    t.Fixture.CharArrayWithStartIndexAndLengthConstructorWorks();
                },
                EmptyFieldWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "EmptyFieldWorks()", $t.Line = "93", $t));
                    t.Fixture.EmptyFieldWorks();
                },
                LengthPropertyWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "LengthPropertyWorks()", $t.Line = "99", $t));
                    t.Fixture.LengthPropertyWorks();
                },
                CharAtWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CharAtWorks()", $t.Line = "106", $t));
                    t.Fixture.CharAtWorks();
                },
                JsCharAtWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "JsCharAtWorks()", $t.Line = "113", $t));
                    t.Fixture.JsCharAtWorks();
                },
                CharCodeAtWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CharCodeAtWorks()", $t.Line = "120", $t));
                    t.Fixture.CharCodeAtWorks();
                },
                CompareToWithIgnoreCaseArgWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CompareToWithIgnoreCaseArgWorks()", $t.Line = "126", $t));
                    t.Fixture.CompareToWithIgnoreCaseArgWorks();
                },
                CompareWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CompareWorks()", $t.Line = "139", $t));
                    t.Fixture.CompareWorks();
                },
                CompareWithIgnoreCaseArgWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CompareWithIgnoreCaseArgWorks()", $t.Line = "151", $t));
                    t.Fixture.CompareWithIgnoreCaseArgWorks();
                },
                ConcatWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ConcatWorks()", $t.Line = "166", $t));
                    t.Fixture.ConcatWorks();
                },
                ConcatWithObjectsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ConcatWithObjectsWorks()", $t.Line = "179", $t));
                    t.Fixture.ConcatWithObjectsWorks();
                },
                EndsWithStringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "EndsWithStringWorks()", $t.Line = "229", $t));
                    t.Fixture.EndsWithStringWorks();
                },
                StaticEqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "StaticEqualsWorks()", $t.Line = "236", $t));
                    t.Fixture.StaticEqualsWorks();
                },
                FormatWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "FormatWorks()", $t.Line = "277", $t));
                    t.Fixture.FormatWorks();
                },
                FormatWorksWithIFormattable_SPI_1598: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "FormatWorksWithIFormattable_SPI_1598()", $t.Line = "296", $t));
                    t.Fixture.FormatWorksWithIFormattable_SPI_1598();
                },
                FormatWorksWithIFormattableAndFormatProvider_SPI_1598: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "FormatWorksWithIFormattableAndFormatProvider_SPI_1598()", $t.Line = "304", $t));
                    t.Fixture.FormatWorksWithIFormattableAndFormatProvider_SPI_1598();
                },
                FormatCanUseEscapedBraces: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "FormatCanUseEscapedBraces()", $t.Line = "312", $t));
                    t.Fixture.FormatCanUseEscapedBraces();
                },
                FromCharCodeWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "FromCharCodeWorks()", $t.Line = "318", $t));
                    t.Fixture.FromCharCodeWorks();
                },
                IndexOfCharWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IndexOfCharWorks()", $t.Line = "344", $t));
                    t.Fixture.IndexOfCharWorks();
                },
                IndexOfStringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IndexOfStringWorks()", $t.Line = "351", $t));
                    t.Fixture.IndexOfStringWorks();
                },
                IndexOfCharWithStartIndexWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IndexOfCharWithStartIndexWorks()", $t.Line = "358", $t));
                    t.Fixture.IndexOfCharWithStartIndexWorks();
                },
                IndexOfCharWithStartIndexAndCountWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IndexOfCharWithStartIndexAndCountWorks()", $t.Line = "365", $t));
                    t.Fixture.IndexOfCharWithStartIndexAndCountWorks();
                },
                IndexOfStringWithStartIndexWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IndexOfStringWithStartIndexWorks()", $t.Line = "373", $t));
                    t.Fixture.IndexOfStringWithStartIndexWorks();
                },
                IndexOfStringWithStartIndexAndCountWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IndexOfStringWithStartIndexAndCountWorks()", $t.Line = "380", $t));
                    t.Fixture.IndexOfStringWithStartIndexAndCountWorks();
                },
                IndexOfAnyWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IndexOfAnyWorks()", $t.Line = "388", $t));
                    t.Fixture.IndexOfAnyWorks();
                },
                IndexOfAnyWithStartIndexWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IndexOfAnyWithStartIndexWorks()", $t.Line = "397", $t));
                    t.Fixture.IndexOfAnyWithStartIndexWorks();
                },
                IndexOfAnyWithStartIndexAndCountWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IndexOfAnyWithStartIndexAndCountWorks()", $t.Line = "406", $t));
                    t.Fixture.IndexOfAnyWithStartIndexAndCountWorks();
                },
                InsertWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "InsertWorks()", $t.Line = "416", $t));
                    t.Fixture.InsertWorks();
                },
                IsNullOrEmptyWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IsNullOrEmptyWorks()", $t.Line = "422", $t));
                    t.Fixture.IsNullOrEmptyWorks();
                },
                LastIndexOfCharWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "LastIndexOfCharWorks()", $t.Line = "431", $t));
                    t.Fixture.LastIndexOfCharWorks();
                },
                LastIndexOfStringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "LastIndexOfStringWorks()", $t.Line = "438", $t));
                    t.Fixture.LastIndexOfStringWorks();
                },
                LastIndexOfCharWithStartIndexWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "LastIndexOfCharWithStartIndexWorks()", $t.Line = "445", $t));
                    t.Fixture.LastIndexOfCharWithStartIndexWorks();
                },
                LastIndexOfStringWithStartIndexWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "LastIndexOfStringWithStartIndexWorks()", $t.Line = "452", $t));
                    t.Fixture.LastIndexOfStringWithStartIndexWorks();
                },
                LastIndexOfCharWithStartIndexAndCountWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "LastIndexOfCharWithStartIndexAndCountWorks()", $t.Line = "459", $t));
                    t.Fixture.LastIndexOfCharWithStartIndexAndCountWorks();
                },
                LastIndexOfStringWithStartIndexAndCountWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "LastIndexOfStringWithStartIndexAndCountWorks()", $t.Line = "467", $t));
                    t.Fixture.LastIndexOfStringWithStartIndexAndCountWorks();
                },
                LastIndexOfAnyWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "LastIndexOfAnyWorks()", $t.Line = "475", $t));
                    t.Fixture.LastIndexOfAnyWorks();
                },
                LastIndexOfAnyWithStartIndexWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "LastIndexOfAnyWithStartIndexWorks()", $t.Line = "484", $t));
                    t.Fixture.LastIndexOfAnyWithStartIndexWorks();
                },
                LastIndexOfAnyWithStartIndexAndCountWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "LastIndexOfAnyWithStartIndexAndCountWorks()", $t.Line = "493", $t));
                    t.Fixture.LastIndexOfAnyWithStartIndexAndCountWorks();
                },
                LocaleCompareWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "LocaleCompareWorks()", $t.Line = "504", $t));
                    t.Fixture.LocaleCompareWorks();
                },
                PadLeftWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "PadLeftWorks()", $t.Line = "531", $t));
                    t.Fixture.PadLeftWorks();
                },
                PadLeftWithCharWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "PadLeftWithCharWorks()", $t.Line = "537", $t));
                    t.Fixture.PadLeftWithCharWorks();
                },
                PadRightWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "PadRightWorks()", $t.Line = "543", $t));
                    t.Fixture.PadRightWorks();
                },
                PadRightWithCharWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "PadRightWithCharWorks()", $t.Line = "549", $t));
                    t.Fixture.PadRightWithCharWorks();
                },
                RemoveWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "RemoveWorks()", $t.Line = "555", $t));
                    t.Fixture.RemoveWorks();
                },
                RemoveWithCountWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "RemoveWithCountWorks()", $t.Line = "561", $t));
                    t.Fixture.RemoveWithCountWorks();
                },
                ReplaceWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ReplaceWorks()", $t.Line = "567", $t));
                    t.Fixture.ReplaceWorks();
                },
                ReplaceCharWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ReplaceCharWorks()", $t.Line = "574", $t));
                    t.Fixture.ReplaceCharWorks();
                },
                ReplaceRegexWithReplaceCallbackWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ReplaceRegexWithReplaceCallbackWorks()", $t.Line = "593", $t));
                    t.Fixture.ReplaceRegexWithReplaceCallbackWorks();
                },
                SearchWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SearchWorks()", $t.Line = "599", $t));
                    t.Fixture.SearchWorks();
                },
                SplitWithStringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SplitWithStringWorks()", $t.Line = "607", $t));
                    t.Fixture.SplitWithStringWorks();
                },
                SplitWithCharWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SplitWithCharWorks()", $t.Line = "613", $t));
                    t.Fixture.SplitWithCharWorks();
                },
                SplitWithCharsAndLimitWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SplitWithCharsAndLimitWorks()", $t.Line = "633", $t));
                    t.Fixture.SplitWithCharsAndLimitWorks();
                },
                SplitWithCharsAndStringSplitOptionsAndLimitWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SplitWithCharsAndStringSplitOptionsAndLimitWorks()", $t.Line = "639", $t));
                    t.Fixture.SplitWithCharsAndStringSplitOptionsAndLimitWorks();
                },
                SomeNetSplitTests: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SomeNetSplitTests()", $t.Line = "658", $t));
                    t.Fixture.SomeNetSplitTests();
                },
                SplitWithCharsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SplitWithCharsWorks()", $t.Line = "690", $t));
                    t.Fixture.SplitWithCharsWorks();
                },
                SplitWithStringsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SplitWithStringsWorks()", $t.Line = "698", $t));
                    t.Fixture.SplitWithStringsWorks();
                },
                SplitWithStringsAndLimitWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SplitWithStringsAndLimitWorks()", $t.Line = "705", $t));
                    t.Fixture.SplitWithStringsAndLimitWorks();
                },
                StartsWithStringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "StartsWithStringWorks()", $t.Line = "719", $t));
                    t.Fixture.StartsWithStringWorks();
                },
                SubstrWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SubstrWorks()", $t.Line = "727", $t));
                    t.Fixture.SubstrWorks();
                },
                SubstrWithLengthWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SubstrWithLengthWorks()", $t.Line = "734", $t));
                    t.Fixture.SubstrWithLengthWorks();
                },
                SubstringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SubstringWorks()", $t.Line = "740", $t));
                    t.Fixture.SubstringWorks();
                },
                SubstringWithLengthWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SubstringWithLengthWorks()", $t.Line = "746", $t));
                    t.Fixture.SubstringWithLengthWorks();
                },
                JavaScriptSubstringWithEndIndexWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "JavaScriptSubstringWithEndIndexWorks()", $t.Line = "753", $t));
                    t.Fixture.JavaScriptSubstringWithEndIndexWorks();
                },
                ToLowerWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToLowerWorks()", $t.Line = "787", $t));
                    t.Fixture.ToLowerWorks();
                },
                ToUpperWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToUpperWorks()", $t.Line = "793", $t));
                    t.Fixture.ToUpperWorks();
                },
                TrimWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TrimWorks()", $t.Line = "799", $t));
                    t.Fixture.TrimWorks();
                },
                TrimCharsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TrimCharsWorks()", $t.Line = "805", $t));
                    t.Fixture.TrimCharsWorks();
                },
                TrimStartCharsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TrimStartCharsWorks()", $t.Line = "811", $t));
                    t.Fixture.TrimStartCharsWorks();
                },
                TrimEndCharsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TrimEndCharsWorks()", $t.Line = "817", $t));
                    t.Fixture.TrimEndCharsWorks();
                },
                TrimStartWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TrimStartWorks()", $t.Line = "823", $t));
                    t.Fixture.TrimStartWorks();
                },
                TrimEndWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TrimEndWorks()", $t.Line = "829", $t));
                    t.Fixture.TrimEndWorks();
                },
                StringEqualityWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "StringEqualityWorks()", $t.Line = "835", $t));
                    t.Fixture.StringEqualityWorks();
                },
                StringInequalityWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "StringInequalityWorks()", $t.Line = "845", $t));
                    t.Fixture.StringInequalityWorks();
                },
                StringIndexingWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "StringIndexingWorks()", $t.Line = "855", $t));
                    t.Fixture.StringIndexingWorks();
                },
                GetHashCodeWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetHashCodeWorks()", $t.Line = "865", $t));
                    t.Fixture.GetHashCodeWorks();
                },
                InstanceEqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "InstanceEqualsWorks()", $t.Line = "875", $t));
                    t.Fixture.InstanceEqualsWorks();
                },
                IEquatableEqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IEquatableEqualsWorks()", $t.Line = "886", $t));
                    t.Fixture.IEquatableEqualsWorks();
                },
                CompareToWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CompareToWorks()", $t.Line = "904", $t));
                    t.Fixture.CompareToWorks();
                },
                IComparableCompareToWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IComparableCompareToWorks()", $t.Line = "915", $t));
                    t.Fixture.IComparableCompareToWorks();
                },
                JoinWorks_SPI_1599: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "JoinWorks_SPI_1599()", $t.Line = "926", $t));
                    t.Fixture.JoinWorks_SPI_1599();
                },
                ContainsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ContainsWorks()", $t.Line = "942", $t));
                    t.Fixture.ContainsWorks();
                },
                ToCharArrayWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.StringTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.StringTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToCharArrayWorks()", $t.Line = "951", $t));
                    t.Fixture.ToCharArrayWorks();
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

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests)],
        statics: {
            methods: {
                TaskCompletionSourceTypePropertiesAreCorrect: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TaskCompletionSourceTypePropertiesAreCorrect()", $t.Line = "18", $t));
                    t.Fixture.TaskCompletionSourceTypePropertiesAreCorrect();
                },
                TaskTypePropertiesAreCorrect: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 5, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TaskTypePropertiesAreCorrect()", $t.Line = "26", $t));
                    t.Fixture.TaskTypePropertiesAreCorrect();
                },
                TaskCompletionSourceWorksWhenSettingResult: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 10, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TaskCompletionSourceWorksWhenSettingResult()", $t.Line = "40", $t));
                    t.Fixture.TaskCompletionSourceWorksWhenSettingResult();
                },
                TaskCompletionSourceWorksWhenSettingASingleException: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 12, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TaskCompletionSourceWorksWhenSettingASingleException()", $t.Line = "77", $t));
                    t.Fixture.TaskCompletionSourceWorksWhenSettingASingleException();
                },
                TaskCompletionSourceWorksWhenSettingTwoExceptions: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 14, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TaskCompletionSourceWorksWhenSettingTwoExceptions()", $t.Line = "124", $t));
                    t.Fixture.TaskCompletionSourceWorksWhenSettingTwoExceptions();
                },
                TaskCompletionSourceWorksWhenCancelling: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 10, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TaskCompletionSourceWorksWhenCancelling()", $t.Line = "172", $t));
                    t.Fixture.TaskCompletionSourceWorksWhenCancelling();
                },
                CancelledTaskThrowsTaskCanceledExceptionWhenAwaited: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CancelledTaskThrowsTaskCanceledExceptionWhenAwaited()", $t.Line = "214", $t));
                    t.Fixture.CancelledTaskThrowsTaskCanceledExceptionWhenAwaited();
                },
                CancelledTaskThrowsAggregateExceptionWithTaskCanceledExceptionWhenResultIsAccessed: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CancelledTaskThrowsAggregateExceptionWithTaskCanceledExceptionWhenResultIsAccessed()", $t.Line = "249", $t));
                    t.Fixture.CancelledTaskThrowsAggregateExceptionWithTaskCanceledExceptionWhenResultIsAccessed();
                },
                SetResultFailsWhenTheTaskIsCompleted: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SetResultFailsWhenTheTaskIsCompleted()", $t.Line = "270", $t));
                    t.Fixture.SetResultFailsWhenTheTaskIsCompleted();
                },
                SetCanceledFailsWhenTheTaskIsCompleted: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SetCanceledFailsWhenTheTaskIsCompleted()", $t.Line = "278", $t));
                    t.Fixture.SetCanceledFailsWhenTheTaskIsCompleted();
                },
                SetExceptionFailsWhenTheTaskIsCompleted: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SetExceptionFailsWhenTheTaskIsCompleted()", $t.Line = "286", $t));
                    t.Fixture.SetExceptionFailsWhenTheTaskIsCompleted();
                },
                CompletedTaskHasCorrectIsXProperties: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CompletedTaskHasCorrectIsXProperties()", $t.Line = "295", $t));
                    t.Fixture.CompletedTaskHasCorrectIsXProperties();
                },
                CancelledTaskHasCorrectIsXProperties: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CancelledTaskHasCorrectIsXProperties()", $t.Line = "305", $t));
                    t.Fixture.CancelledTaskHasCorrectIsXProperties();
                },
                FaultedTaskHasCorrectIsXProperties: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "FaultedTaskHasCorrectIsXProperties()", $t.Line = "315", $t));
                    t.Fixture.FaultedTaskHasCorrectIsXProperties();
                },
                TrySetResultReturnsFalseWhenTheTaskIsCompleted: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TrySetResultReturnsFalseWhenTheTaskIsCompleted()", $t.Line = "325", $t));
                    t.Fixture.TrySetResultReturnsFalseWhenTheTaskIsCompleted();
                },
                TrySetCanceledReturnsFalseWhenTheTaskIsCompleted: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TrySetCanceledReturnsFalseWhenTheTaskIsCompleted()", $t.Line = "333", $t));
                    t.Fixture.TrySetCanceledReturnsFalseWhenTheTaskIsCompleted();
                },
                TrySetExceptionReturnsFalseWhenTheTaskIsCompleted: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TrySetExceptionReturnsFalseWhenTheTaskIsCompleted()", $t.Line = "341", $t));
                    t.Fixture.TrySetExceptionReturnsFalseWhenTheTaskIsCompleted();
                },
                ContinueWithForNonGenericTaskWorkWithNoResultAndNoException: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 10, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ContinueWithForNonGenericTaskWorkWithNoResultAndNoException()", $t.Line = "350", $t));
                    t.Fixture.ContinueWithForNonGenericTaskWorkWithNoResultAndNoException();
                },
                ContinueWithWhenCallbackThrowsAnException: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 6, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ContinueWithWhenCallbackThrowsAnException()", $t.Line = "392", $t));
                    t.Fixture.ContinueWithWhenCallbackThrowsAnException();
                },
                ExceptionInTaskBodyAppearsInTheExceptionMemberForNonGenericTask: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 8, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ExceptionInTaskBodyAppearsInTheExceptionMemberForNonGenericTask()", $t.Line = "430", $t));
                    t.Fixture.ExceptionInTaskBodyAppearsInTheExceptionMemberForNonGenericTask();
                },
                ContinueWithForNonGenericTaskCanReturnAValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 11, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ContinueWithForNonGenericTaskCanReturnAValue()", $t.Line = "471", $t));
                    t.Fixture.ContinueWithForNonGenericTaskCanReturnAValue();
                },
                ContinueWithWithNoReturnValueForGenericTaskWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 10, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ContinueWithWithNoReturnValueForGenericTaskWorks()", $t.Line = "516", $t));
                    t.Fixture.ContinueWithWithNoReturnValueForGenericTaskWorks();
                },
                ContinueWithForGenericTaskCanReturnAValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 11, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ContinueWithForGenericTaskCanReturnAValue()", $t.Line = "558", $t));
                    t.Fixture.ContinueWithForGenericTaskCanReturnAValue();
                },
                DelayWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 6, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DelayWorks()", $t.Line = "603", $t));
                    t.Fixture.DelayWorks();
                },
                FromResultWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "FromResultWorks()", $t.Line = "636", $t));
                    t.Fixture.FromResultWorks();
                },
                RunWithoutResultWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 6, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "RunWithoutResultWorks()", $t.Line = "645", $t));
                    t.Fixture.RunWithoutResultWorks();
                },
                RunWithResultWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 7, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "RunWithResultWorks()", $t.Line = "676", $t));
                    t.Fixture.RunWithResultWorks();
                },
                RunWorksWhenBodyThrows: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 7, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "RunWorksWhenBodyThrows()", $t.Line = "709", $t));
                    t.Fixture.RunWorksWhenBodyThrows();
                },
                WhenAllParamArrayWithResultWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 13, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "WhenAllParamArrayWithResultWorks()", $t.Line = "742", $t));
                    t.Fixture.WhenAllParamArrayWithResultWorks();
                },
                WhenAllEnumerableWithResultWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 13, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "WhenAllEnumerableWithResultWorks()", $t.Line = "799", $t));
                    t.Fixture.WhenAllEnumerableWithResultWorks();
                },
                WhenAllParamArrayWithoutResultWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 12, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "WhenAllParamArrayWithoutResultWorks()", $t.Line = "856", $t));
                    t.Fixture.WhenAllParamArrayWithoutResultWorks();
                },
                WhenAllEnumerableWithoutResultWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 12, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "WhenAllEnumerableWithoutResultWorks()", $t.Line = "912", $t));
                    t.Fixture.WhenAllEnumerableWithoutResultWorks();
                },
                WhenAllShouldHaveAnErrorIfAnyIncludedTaskFaulted: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 17, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "WhenAllShouldHaveAnErrorIfAnyIncludedTaskFaulted()", $t.Line = "968", $t));
                    t.Fixture.WhenAllShouldHaveAnErrorIfAnyIncludedTaskFaulted();
                },
                WhenAllShouldBeCancelledIfNoTaskWasFaultedButSomeWasCancelled: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 12, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "WhenAllShouldBeCancelledIfNoTaskWasFaultedButSomeWasCancelled()", $t.Line = "1038", $t));
                    t.Fixture.WhenAllShouldBeCancelledIfNoTaskWasFaultedButSomeWasCancelled();
                },
                WhenAnyParamArrayWithResultWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 10, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "WhenAnyParamArrayWithResultWorks()", $t.Line = "1093", $t));
                    t.Fixture.WhenAnyParamArrayWithResultWorks();
                },
                WhenAnyEnumerableWithResultWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 10, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "WhenAnyEnumerableWithResultWorks()", $t.Line = "1141", $t));
                    t.Fixture.WhenAnyEnumerableWithResultWorks();
                },
                WhenAnyParamArrayWithoutResultWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 9, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "WhenAnyParamArrayWithoutResultWorks()", $t.Line = "1188", $t));
                    t.Fixture.WhenAnyParamArrayWithoutResultWorks();
                },
                WhenAnyEnumerableWithoutResultWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 9, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "WhenAnyEnumerableWithoutResultWorks()", $t.Line = "1235", $t));
                    t.Fixture.WhenAnyEnumerableWithoutResultWorks();
                },
                WhenAnyFaultsIfTheFirstTaskFaulted: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 9, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "WhenAnyFaultsIfTheFirstTaskFaulted()", $t.Line = "1282", $t));
                    t.Fixture.WhenAnyFaultsIfTheFirstTaskFaulted();
                },
                WhenAnyIsCancelledIfTheFirstTaskWasCancelled: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 8, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "WhenAnyIsCancelledIfTheFirstTaskWasCancelled()", $t.Line = "1330", $t));
                    t.Fixture.WhenAnyIsCancelledIfTheFirstTaskWasCancelled();
                },
                ConstructorWithOnlyActionWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 7, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ConstructorWithOnlyActionWorks()", $t.Line = "1375", $t));
                    t.Fixture.ConstructorWithOnlyActionWorks();
                },
                ConstructorWithActionAndStateWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 8, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ConstructorWithActionAndStateWorks()", $t.Line = "1414", $t));
                    t.Fixture.ConstructorWithActionAndStateWorks();
                },
                ExceptionInManuallyCreatedTaskIsStoredOnTheTask: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 8, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ExceptionInManuallyCreatedTaskIsStoredOnTheTask()", $t.Line = "1456", $t));
                    t.Fixture.ExceptionInManuallyCreatedTaskIsStoredOnTheTask();
                },
                ConstructorWithOnlyFunctionWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 8, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ConstructorWithOnlyFunctionWorks()", $t.Line = "1498", $t));
                    t.Fixture.ConstructorWithOnlyFunctionWorks();
                },
                ConstructorWithFunctionAndStateWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.Threading.TaskTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TaskTests, 9, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ConstructorWithFunctionAndStateWorks()", $t.Line = "1540", $t));
                    t.Fixture.ConstructorWithFunctionAndStateWorks();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.Threading.TaskTests", $t.File = "Batch4\\Threading\\Tasks\\TaskTests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TimeSpanTests)],
        statics: {
            methods: {
                TypePropertiesAreCorrect_SPI_1717: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TimeSpanTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypePropertiesAreCorrect_SPI_1717()", $t.Line = "9", $t));
                    t.Fixture.TypePropertiesAreCorrect_SPI_1717();
                },
                DefaultConstructorWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TimeSpanTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultConstructorWorks()", $t.Line = "27", $t));
                    t.Fixture.DefaultConstructorWorks();
                },
                DefaultValueWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TimeSpanTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultValueWorks()", $t.Line = "34", $t));
                    t.Fixture.DefaultValueWorks();
                },
                ZeroWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TimeSpanTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ZeroWorks()", $t.Line = "41", $t));
                    t.Fixture.ZeroWorks();
                },
                CreatingInstanceReturnsTimeSpanWithZeroValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TimeSpanTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CreatingInstanceReturnsTimeSpanWithZeroValue()", $t.Line = "48", $t));
                    t.Fixture.CreatingInstanceReturnsTimeSpanWithZeroValue();
                },
                ParameterConstructorsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TimeSpanTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ParameterConstructorsWorks()", $t.Line = "55", $t));
                    t.Fixture.ParameterConstructorsWorks();
                },
                FactoryMethodsWork: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TimeSpanTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "FactoryMethodsWork()", $t.Line = "75", $t));
                    t.Fixture.FactoryMethodsWork();
                },
                PropertiesWork: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TimeSpanTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "PropertiesWork()", $t.Line = "103", $t));
                    t.Fixture.PropertiesWork();
                },
                CompareToWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TimeSpanTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CompareToWorks()", $t.Line = "120", $t));
                    t.Fixture.CompareToWorks();
                },
                CompareWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TimeSpanTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CompareWorks()", $t.Line = "133", $t));
                    t.Fixture.CompareWorks();
                },
                StaticEqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TimeSpanTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "StaticEqualsWorks()", $t.Line = "146", $t));
                    t.Fixture.StaticEqualsWorks();
                },
                EqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TimeSpanTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "EqualsWorks()", $t.Line = "157", $t));
                    t.Fixture.EqualsWorks();
                },
                IEquatableEqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TimeSpanTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IEquatableEqualsWorks()", $t.Line = "168", $t));
                    t.Fixture.IEquatableEqualsWorks();
                },
                ToStringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TimeSpanTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWorks()", $t.Line = "179", $t));
                    t.Fixture.ToStringWorks();
                },
                AddWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TimeSpanTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "AddWorks()", $t.Line = "192", $t));
                    t.Fixture.AddWorks();
                },
                SubtractWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TimeSpanTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SubtractWorks()", $t.Line = "202", $t));
                    t.Fixture.SubtractWorks();
                },
                DurationWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TimeSpanTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DurationWorks()", $t.Line = "212", $t));
                    t.Fixture.DurationWorks();
                },
                NegateWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TimeSpanTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "NegateWorks()", $t.Line = "224", $t));
                    t.Fixture.NegateWorks();
                },
                ComparisonOperatorsWork: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TimeSpanTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ComparisonOperatorsWork()", $t.Line = "241", $t));
                    t.Fixture.ComparisonOperatorsWork();
                },
                AdditionOperatorWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TimeSpanTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "AdditionOperatorWorks()", $t.Line = "278", $t));
                    t.Fixture.AdditionOperatorWorks();
                },
                SubtractionOperatorWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TimeSpanTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "SubtractionOperatorWorks()", $t.Line = "288", $t));
                    t.Fixture.SubtractionOperatorWorks();
                },
                UnaryPlusWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TimeSpanTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "UnaryPlusWorks()", $t.Line = "298", $t));
                    t.Fixture.UnaryPlusWorks();
                },
                UnaryMinusWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TimeSpanTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TimeSpanTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "UnaryMinusWorks()", $t.Line = "307", $t));
                    t.Fixture.UnaryMinusWorks();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.SimpleTypes.TimeSpanTests", $t.File = "Batch4\\SimpleTypes\\TimeSpanTests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TupleTests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TupleTests)],
        statics: {
            methods: {
                Tuple1Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TupleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TupleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Tuple1Works()", $t.Line = "9", $t));
                    t.Fixture.Tuple1Works();
                },
                Tuple2Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TupleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TupleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Tuple2Works()", $t.Line = "19", $t));
                    t.Fixture.Tuple2Works();
                },
                Tuple3Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TupleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TupleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Tuple3Works()", $t.Line = "30", $t));
                    t.Fixture.Tuple3Works();
                },
                Tuple4Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TupleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TupleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Tuple4Works()", $t.Line = "42", $t));
                    t.Fixture.Tuple4Works();
                },
                Tuple5Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TupleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TupleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Tuple5Works()", $t.Line = "55", $t));
                    t.Fixture.Tuple5Works();
                },
                Tuple6Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TupleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TupleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Tuple6Works()", $t.Line = "69", $t));
                    t.Fixture.Tuple6Works();
                },
                Tuple7Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TupleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TupleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Tuple7Works()", $t.Line = "84", $t));
                    t.Fixture.Tuple7Works();
                },
                Tuple8Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.TupleTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.TupleTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Tuple8Works()", $t.Line = "100", $t));
                    t.Fixture.Tuple8Works();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.SimpleTypes.TupleTests", $t.File = "Batch4\\SimpleTypes\\TupleTests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests)],
        statics: {
            methods: {
                TypePropertiesAreCorrect_SPI_1717: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypePropertiesAreCorrect_SPI_1717()", $t.Line = "10", $t));
                    t.Fixture.TypePropertiesAreCorrect_SPI_1717();
                },
                CastsWork: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CastsWork()", $t.Line = "35", $t));
                    t.Fixture.CastsWork();
                },
                DefaultValueIs0: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultValueIs0()", $t.Line = "91", $t));
                    t.Fixture.DefaultValueIs0();
                },
                DefaultConstructorReturnsZero: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultConstructorReturnsZero()", $t.Line = "97", $t));
                    t.Fixture.DefaultConstructorReturnsZero();
                },
                CreatingInstanceReturnsZero: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CreatingInstanceReturnsZero()", $t.Line = "103", $t));
                    t.Fixture.CreatingInstanceReturnsZero();
                },
                ConstantsWork: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ConstantsWork()", $t.Line = "109", $t));
                    t.Fixture.ConstantsWork();
                },
                FormatWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "FormatWorks()", $t.Line = "116", $t));
                    t.Fixture.FormatWorks();
                },
                ToStringWithFormatWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithFormatWorks()", $t.Line = "122", $t));
                    t.Fixture.ToStringWithFormatWorks();
                },
                ToStringWithFormatAndProviderWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithFormatAndProviderWorks()", $t.Line = "128", $t));
                    t.Fixture.ToStringWithFormatAndProviderWorks();
                },
                IFormattableToStringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IFormattableToStringWorks()", $t.Line = "134", $t));
                    t.Fixture.IFormattableToStringWorks();
                },
                TryParseWorks_SPI_1592: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TryParseWorks_SPI_1592()", $t.Line = "147", $t));
                    t.Fixture.TryParseWorks_SPI_1592();
                },
                ParseWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ParseWorks()", $t.Line = "181", $t));
                    t.Fixture.ParseWorks();
                },
                ToStringWithoutRadixWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithoutRadixWorks()", $t.Line = "193", $t));
                    t.Fixture.ToStringWithoutRadixWorks();
                },
                ToStringWithRadixWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithRadixWorks()", $t.Line = "199", $t));
                    t.Fixture.ToStringWithRadixWorks();
                },
                GetHashCodeWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetHashCodeWorks()", $t.Line = "206", $t));
                    t.Fixture.GetHashCodeWorks();
                },
                EqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "EqualsWorks()", $t.Line = "214", $t));
                    t.Fixture.EqualsWorks();
                },
                IEquatableEqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IEquatableEqualsWorks()", $t.Line = "223", $t));
                    t.Fixture.IEquatableEqualsWorks();
                },
                CompareToWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CompareToWorks()", $t.Line = "237", $t));
                    t.Fixture.CompareToWorks();
                },
                IComparableCompareToWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt16Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IComparableCompareToWorks()", $t.Line = "245", $t));
                    t.Fixture.IComparableCompareToWorks();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.SimpleTypes.UInt16Tests", $t.File = "Batch4\\SimpleTypes\\UInt16Tests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests)],
        statics: {
            methods: {
                TypePropertiesAreCorrect_SPI_1717: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypePropertiesAreCorrect_SPI_1717()", $t.Line = "10", $t));
                    t.Fixture.TypePropertiesAreCorrect_SPI_1717();
                },
                CastsWork: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CastsWork()", $t.Line = "35", $t));
                    t.Fixture.CastsWork();
                },
                DefaultValueIs0: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultValueIs0()", $t.Line = "91", $t));
                    t.Fixture.DefaultValueIs0();
                },
                DefaultConstructorReturnsZero: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultConstructorReturnsZero()", $t.Line = "97", $t));
                    t.Fixture.DefaultConstructorReturnsZero();
                },
                CreatingInstanceReturnsZero: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CreatingInstanceReturnsZero()", $t.Line = "103", $t));
                    t.Fixture.CreatingInstanceReturnsZero();
                },
                ConstantsWork: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ConstantsWork()", $t.Line = "109", $t));
                    t.Fixture.ConstantsWork();
                },
                FormatWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "FormatWorks()", $t.Line = "116", $t));
                    t.Fixture.FormatWorks();
                },
                ToStringWithFormatWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithFormatWorks()", $t.Line = "122", $t));
                    t.Fixture.ToStringWithFormatWorks();
                },
                ToStringWithFormatAndProviderWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithFormatAndProviderWorks()", $t.Line = "128", $t));
                    t.Fixture.ToStringWithFormatAndProviderWorks();
                },
                IFormattableToStringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IFormattableToStringWorks()", $t.Line = "134", $t));
                    t.Fixture.IFormattableToStringWorks();
                },
                TryParseWorks_SPI_1592: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TryParseWorks_SPI_1592()", $t.Line = "147", $t));
                    t.Fixture.TryParseWorks_SPI_1592();
                },
                ParseWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ParseWorks()", $t.Line = "177", $t));
                    t.Fixture.ParseWorks();
                },
                ToStringWithoutRadixWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithoutRadixWorks()", $t.Line = "189", $t));
                    t.Fixture.ToStringWithoutRadixWorks();
                },
                ToStringWithRadixWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithRadixWorks()", $t.Line = "195", $t));
                    t.Fixture.ToStringWithRadixWorks();
                },
                GetHashCodeWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetHashCodeWorks()", $t.Line = "202", $t));
                    t.Fixture.GetHashCodeWorks();
                },
                EqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "EqualsWorks()", $t.Line = "210", $t));
                    t.Fixture.EqualsWorks();
                },
                IEquatableEqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IEquatableEqualsWorks()", $t.Line = "219", $t));
                    t.Fixture.IEquatableEqualsWorks();
                },
                CompareToWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CompareToWorks()", $t.Line = "233", $t));
                    t.Fixture.CompareToWorks();
                },
                IComparableCompareToWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt32Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IComparableCompareToWorks()", $t.Line = "241", $t));
                    t.Fixture.IComparableCompareToWorks();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.SimpleTypes.UInt32Tests", $t.File = "Batch4\\SimpleTypes\\UInt32Tests.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests)],
        statics: {
            methods: {
                TypePropertiesAreCorrect_SPI_1717: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TypePropertiesAreCorrect_SPI_1717()", $t.Line = "10", $t));
                    t.Fixture.TypePropertiesAreCorrect_SPI_1717();
                },
                CastsWork: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CastsWork()", $t.Line = "33", $t));
                    t.Fixture.CastsWork();
                },
                DefaultValueIs0: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultValueIs0()", $t.Line = "79", $t));
                    t.Fixture.DefaultValueIs0();
                },
                DefaultConstructorReturnsZero: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultConstructorReturnsZero()", $t.Line = "85", $t));
                    t.Fixture.DefaultConstructorReturnsZero();
                },
                CreatingInstanceReturnsZero: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CreatingInstanceReturnsZero()", $t.Line = "91", $t));
                    t.Fixture.CreatingInstanceReturnsZero();
                },
                ConstantsWork: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ConstantsWork()", $t.Line = "97", $t));
                    t.Fixture.ConstantsWork();
                },
                FormatWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "FormatWorks()", $t.Line = "103", $t));
                    t.Fixture.FormatWorks();
                },
                ToStringWithFormatWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithFormatWorks()", $t.Line = "109", $t));
                    t.Fixture.ToStringWithFormatWorks();
                },
                ToStringWithFormatAndProviderWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithFormatAndProviderWorks()", $t.Line = "115", $t));
                    t.Fixture.ToStringWithFormatAndProviderWorks();
                },
                IFormattableToStringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IFormattableToStringWorks()", $t.Line = "121", $t));
                    t.Fixture.IFormattableToStringWorks();
                },
                CastingOfLargeValuesToUInt64Works_SPI_1591: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CastingOfLargeValuesToUInt64Works_SPI_1591()", $t.Line = "134", $t));
                    t.Fixture.CastingOfLargeValuesToUInt64Works_SPI_1591();
                },
                DivisionOfLargeUInt64Works: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DivisionOfLargeUInt64Works()", $t.Line = "143", $t));
                    t.Fixture.DivisionOfLargeUInt64Works();
                },
                TryParseWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TryParseWorks()", $t.Line = "150", $t));
                    t.Fixture.TryParseWorks();
                },
                ParseWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ParseWorks()", $t.Line = "183", $t));
                    t.Fixture.ParseWorks();
                },
                ToStringWithoutRadixWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithoutRadixWorks()", $t.Line = "195", $t));
                    t.Fixture.ToStringWithoutRadixWorks();
                },
                ToStringWithRadixWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ToStringWithRadixWorks()", $t.Line = "201", $t));
                    t.Fixture.ToStringWithRadixWorks();
                },
                GetHashCodeWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetHashCodeWorks()", $t.Line = "208", $t));
                    t.Fixture.GetHashCodeWorks();
                },
                EqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "EqualsWorks()", $t.Line = "216", $t));
                    t.Fixture.EqualsWorks();
                },
                IEquatableEqualsWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IEquatableEqualsWorks()", $t.Line = "225", $t));
                    t.Fixture.IEquatableEqualsWorks();
                },
                CompareToWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CompareToWorks()", $t.Line = "239", $t));
                    t.Fixture.CompareToWorks();
                },
                IComparableCompareToWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UInt64Tests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "IComparableCompareToWorks()", $t.Line = "247", $t));
                    t.Fixture.IComparableCompareToWorks();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch4", $t.ClassName = "Bridge.ClientTest.Batch4.SimpleTypes.UInt64Tests", $t.File = "Batch4\\SimpleTypes\\UInt64Tests.cs", $t);
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
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.UserDefinedStructTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UserDefinedStructTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultValueOfStructWithInlineCodeDefaultConstructorWorks_SPI_1610()", $t.Line = "186", $t));
                    t.Fixture.DefaultValueOfStructWithInlineCodeDefaultConstructorWorks_SPI_1610();
                },
                DefaultValueOfStructWithInlineCodeDefaultConstructorWorksGeneric_SPI_1610: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.UserDefinedStructTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UserDefinedStructTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DefaultValueOfStructWithInlineCodeDefaultConstructorWorksGeneric_SPI_1610()", $t.Line = "196", $t));
                    t.Fixture.DefaultValueOfStructWithInlineCodeDefaultConstructorWorksGeneric_SPI_1610();
                },
                CanLiftUserDefinedConversionOperator_SPI_1611: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.UserDefinedStructTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UserDefinedStructTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CanLiftUserDefinedConversionOperator_SPI_1611()", $t.Line = "206", $t));
                    t.Fixture.CanLiftUserDefinedConversionOperator_SPI_1611();
                },
                AutoEventBackingFieldsAreClonedWhenValueTypeIsCopied_SPI_1612: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch4.UserDefinedStructTests).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch4Runner.UserDefinedStructTests, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "AutoEventBackingFieldsAreClonedWhenValueTypeIsCopied_SPI_1612()", $t.Line = "219", $t));
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
