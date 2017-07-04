/**
 * @compiler Bridge.NET 16.0.0-beta4
 */
Bridge.assembly("Bridge.Test.Bridge.ClientTest.Batch3", function ($asm, globals) {
    

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner", {
        main: function Main () {
            Bridge.Test.Runtime.ContextHelper.Init();
            QUnit.module("Issues3");
            QUnit.test("#69 - ThisKeywordInStructConstructorWorks", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge069.ThisKeywordInStructConstructorWorks);
            QUnit.test("#1000 - TestStaticViaChild", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1000.TestStaticViaChild);
            QUnit.test("#1001 - TestDefaultValues", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1001.TestDefaultValues);
            QUnit.test("#1003 - TestGenericLambdasToLifting", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1003.TestGenericLambdasToLifting);
            QUnit.test("#1012 - TestSleepZero", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1012.TestSleepZero);
            QUnit.test("#1012 - TestSleepInt", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1012.TestSleepInt);
            QUnit.test("#1012 - TestSleepTimeSpan", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1012.TestSleepTimeSpan);
            QUnit.test("#1012 - TestSleepThrows", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1012.TestSleepThrows);
            QUnit.test("#1020 - TestFlagEnumWithReference", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1020.TestFlagEnumWithReference);
            QUnit.test("#1020 - TestEnumWithReference", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1020.TestEnumWithReference);
            QUnit.test("#1024 - TestConstructorOptionalParameter", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1024.TestConstructorOptionalParameter);
            QUnit.test("#1025 - TestC1", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.TestC1);
            QUnit.test("#1025 - TestC2", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.TestC2);
            QUnit.test("#1025 - TestC3", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.TestC3);
            QUnit.test("#1025 - TestI3", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.TestI3);
            QUnit.test("#1025 - TestI4", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.TestI4);
            QUnit.test("#1025 - TestI5", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.TestI5);
            QUnit.test("#1025 - TestI6", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.TestI6);
            QUnit.test("#1025 - TestI7", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.TestI7);
            QUnit.test("#1025 - TestI8", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.TestI8);
            QUnit.test("#1025 - TestI10", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.TestI10);
            QUnit.test("#1025 - TestI10_1", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.TestI10_1);
            QUnit.test("#1025 - TestI10_2", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.TestI10_2);
            QUnit.test("#1025 - TestI11", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.TestI11);
            QUnit.test("#1025 - TestI11_1", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025.TestI11_1);
            QUnit.test("#1026 - TestReservedWordIfRefOut", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1026.TestReservedWordIfRefOut);
            QUnit.test("#1027 - TestNonBridgeInherits", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1027.TestNonBridgeInherits);
            QUnit.test("#1029 - TestNullableMethods", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1029.TestNullableMethods);
            QUnit.test("#1039 - TestMoreThanDecimalDigitsFromTotalHours", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1039.TestMoreThanDecimalDigitsFromTotalHours);
            QUnit.test("#1041 - Decimal TestPropertyOps", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Decimal.TestPropertyOps);
            QUnit.test("#1041 - Decimal TestIndexerOps", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Decimal.TestIndexerOps);
            QUnit.test("#1041 - Decimal TestDictOps", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Decimal.TestDictOps);
            QUnit.test("#1041 - Decimal TestVariableOps", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Decimal.TestVariableOps);
            QUnit.test("#1041 - Integer TestPropertyOps", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Integer.TestPropertyOps);
            QUnit.test("#1041 - Integer TestIndexerOps", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Integer.TestIndexerOps);
            QUnit.test("#1041 - Integer TestDictOps", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Integer.TestDictOps);
            QUnit.test("#1041 - Integer TestVariableOps", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Integer.TestVariableOps);
            QUnit.test("#1051 - TestInlinePopertyWithValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1051.TestInlinePopertyWithValue);
            QUnit.test("#1053 - TestFieldPropertyWithInterface", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1053.TestFieldPropertyWithInterface);
            QUnit.test("#1058 - TestNameLowerCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1058.TestNameLowerCase);
            QUnit.test("#1058 - TestNameNotChanged", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1058.TestNameNotChanged);
            QUnit.test("#1059 - TestEnumNameModes", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1059.TestEnumNameModes);
            QUnit.test("#1061 - TestIsDigitFromLinq", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1061.TestIsDigitFromLinq);
            QUnit.test("#1065 - TestDecimalLongWithDictionary", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1065.TestDecimalLongWithDictionary);
            QUnit.test("#1066 - TestInlinePopertyWithValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1066.TestInlinePopertyWithValue);
            QUnit.test("#1067 - TestInlinePopertyWithValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1067.TestInlinePopertyWithValue);
            QUnit.test("#1071 - TestParamsForCtor", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1071.TestParamsForCtor);
            QUnit.test("#1172 - TestNameForProperty", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1072.TestNameForProperty);
            QUnit.test("#1076 - TestInlineConstantAsMemberReference", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1076.TestInlineConstantAsMemberReference);
            QUnit.test("#1076 - TestInlineBridgeNumericConstantsAsMemberReference", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1076.TestInlineBridgeNumericConstantsAsMemberReference);
            QUnit.test("#1081 - TestTimeSpanMsFormat", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1081.TestTimeSpanMsFormat);
            QUnit.test("#1083 - TestExternalEnum", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1083.TestExternalEnum);
            QUnit.test("#1085 - TestInlineArrayExpand", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1085.TestInlineArrayExpand);
            QUnit.test("#1096 - TestClippingIssues", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1096.TestClippingIssues);
            QUnit.test("#1098 - TestInlineConstantAsMemberReference", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1098.TestInlineConstantAsMemberReference);
            QUnit.test("#1103 - TestPropertyOps", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1103.TestPropertyOps);
            QUnit.test("#1105 - TestStaticInitForNestedClasses", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1105.TestStaticInitForNestedClasses);
            QUnit.test("#1109 - TestTemplateOnProperty", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1109.TestTemplateOnProperty);
            QUnit.test("#1110 - TestOverflowForConditionInParenthesized", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1110.TestOverflowForConditionInParenthesized);
            QUnit.test("#1110 - TestOverflowForIndexer", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1110.TestOverflowForIndexer);
            QUnit.test("#1110 - TestOverflowForBitwise", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1110.TestOverflowForBitwise);
            QUnit.test("#1120 - TestEnumDoesNotGenerateValuesAsPowerOfTwo", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1120.TestEnumDoesNotGenerateValuesAsPowerOfTwo);
            QUnit.test("#1120 - TestFlagEnumDoesNotGenerateValuesAsPowerOfTwo", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1120.TestFlagEnumDoesNotGenerateValuesAsPowerOfTwo);
            QUnit.test("#1128 - TestNestedClassesWithInterface", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1128.TestNestedClassesWithInterface);
            QUnit.test("#1130 - TestUlongDivision", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1130.TestUlongDivision);
            QUnit.test("#1140 - TestDefaultNullable", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1140.TestDefaultNullable);
            QUnit.test("#1141 - TestLongDivisionInfiniteLoopFixed", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1141.TestLongDivisionInfiniteLoopFixed);
            QUnit.test("#1144 - TestStringFormat", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1144.TestStringFormat);
            QUnit.test("#1146 - TestLongIssues", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1146.TestLongIssues);
            QUnit.test("#1149 - TestBitwiseOrAnd", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1149.TestBitwiseOrAnd);
            QUnit.test("#1160 - TestBitwiseOrAnd", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1160.TestBitwiseOrAnd);
            QUnit.test("#1170 - TestAsyncUsing", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1170.TestAsyncUsing);
            QUnit.test("#1170 - TestAsyncUsingWithException", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1170.TestAsyncUsingWithException);
            QUnit.test("#1171 - TestLinqEnumerableInList", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1171.TestLinqEnumerableInList);
            QUnit.test("#1175 - TestNullComparing", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1175.TestNullComparing);
            QUnit.test("#1176 - TestFunctionLifting", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1176.TestFunctionLifting);
            QUnit.test("#1177 - TestImplicitCast", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1177.TestImplicitCast);
            QUnit.test("#1180 - TestStructClone", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1180.TestStructClone);
            QUnit.test("#1184 - TestGetTypeForNumberTypes", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1184.TestGetTypeForNumberTypes);
            QUnit.test("#1186 - TestLambdasInField", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1186.TestLambdasInField);
            QUnit.test("#1189 - TestTaskNumber", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1189.TestTaskNumber);
            QUnit.test("#1193 - TestAssemblyVersionMarker", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1193.TestAssemblyVersionMarker);
            QUnit.test("#1197 - TestGetHashCodeOnDictionary", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1197.TestGetHashCodeOnDictionary);
            QUnit.test("#1199 - TestEventNameCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1199.TestEventNameCase);
            QUnit.test("#1202 - TestRefOutStaticIntField", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202.TestRefOutStaticIntField);
            QUnit.test("#1202 - TestRefOutLocal1DIntArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202.TestRefOutLocal1DIntArray);
            QUnit.test("#1202 - TestRefOutStatic1DIntArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202.TestRefOutStatic1DIntArray);
            QUnit.test("#1202 - TestRefOutLocal2DIntArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202.TestRefOutLocal2DIntArray);
            QUnit.test("#1202 - TestRefOutStaticDecimalField", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202.TestRefOutStaticDecimalField);
            QUnit.test("#1202 - TestRefOutLocal1DDecimalArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202.TestRefOutLocal1DDecimalArray);
            QUnit.test("#1202 - TestRefOutLocal2DDecimalArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202.TestRefOutLocal2DDecimalArray);
            QUnit.test("#1202 - TestInlineOutStaticIntField", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202.TestInlineOutStaticIntField);
            QUnit.test("#1202 - TestInlineOutStatic1DIntArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202.TestInlineOutStatic1DIntArray);
            QUnit.test("#1202 - TestInlineOutLocal2DIntArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202.TestInlineOutLocal2DIntArray);
            QUnit.test("#1203 - TestLiftedFunctionsInsideInitMethod", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1203.TestLiftedFunctionsInsideInitMethod);
            QUnit.test("#1206 - TestDocumentURLProperty", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1206.TestDocumentURLProperty);
            QUnit.test("#1217 - TestTypeInferenceWithNamedArguments", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1217.TestTypeInferenceWithNamedArguments);
            QUnit.test("#1219 - TestLongJSON", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1219.TestLongJSON);
            QUnit.test("#122 - Test2DArrayConstruction", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge122.Test2DArrayConstruction);
            QUnit.test("#1220 - TestConstInGenericClass", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1220.TestConstInGenericClass);
            QUnit.test("#1226 - TestSinh", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1226.TestSinh);
            QUnit.test("#1226 - TestCosh", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1226.TestCosh);
            QUnit.test("#1226 - TestTanh", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1226.TestTanh);
            QUnit.test("#1231 - TestAutoGeneratedStructMethodName", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1231.TestAutoGeneratedStructMethodName);
            QUnit.test("#1232 - TestParamsInThisCtorInit", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1232.TestParamsInThisCtorInit);
            QUnit.test("#1232 - TestExtendedParamsInThisCtorInit", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1232.TestExtendedParamsInThisCtorInit);
            QUnit.test("#1249 - TestEnumOverflow", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1249.TestEnumOverflow);
            QUnit.test("#1253 - TestDefaultEnumMode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1253.TestDefaultEnumMode);
            QUnit.test("#1256 - TestCaseBooleanIsLet", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1256.TestCaseBooleanIsLet);
            QUnit.test("#1256 - TestReservedFields", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1256.TestReservedFields);
            QUnit.test("#1256 - TestReservedMethods", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1256.TestReservedMethods);
            QUnit.test("#1260 - TestStringTrim", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1260.TestStringTrim);
            QUnit.test("#1260 - TestStringTrimStart", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1260.TestStringTrimStart);
            QUnit.test("#1260 - TestStringTrimEnd", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1260.TestStringTrimEnd);
            QUnit.test("#1264 - TestDefaultGetHashCodeIsRepeatable", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1264.TestDefaultGetHashCodeIsRepeatable);
            QUnit.test("#1266 - TestArrayToEnumerable", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1266.TestArrayToEnumerable);
            QUnit.test("#1296 - TestImplicitOperator", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1296.TestImplicitOperator);
            QUnit.test("#1296 - TestIgnoreCast", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1296.TestIgnoreCast);
            QUnit.test("#1296 - TestExternalImplicit", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1296.TestExternalImplicit);
            QUnit.test("#1298 - TestLongSwitch", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1298.TestLongSwitch);
            QUnit.test("#1304 - TestWriteFormatString", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1304.TestWriteFormatString);
            QUnit.test("#1304 - TestWriteLineFormatString", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1304.TestWriteLineFormatString);
            QUnit.test("#1305 - TestAsyncIntReturnWithAssigmentFromResult", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1305.TestAsyncIntReturnWithAssigmentFromResult);
            QUnit.test("#1305 - TestAsyncDataClassReturnWithAssigmentFromResult", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1305.TestAsyncDataClassReturnWithAssigmentFromResult);
            QUnit.test("#1305 - TestAsyncDataStructReturnWithAssigmentFromResult", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1305.TestAsyncDataStructReturnWithAssigmentFromResult);
            QUnit.test("#1311 - TestEnumNumberParsing", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1311.TestEnumNumberParsing);
            QUnit.test("#1313 - TestInterfaceDefaultParameter", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1313.TestInterfaceDefaultParameter);
            QUnit.test("#1313 - TestClassNotDefaultParameter", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1313.TestClassNotDefaultParameter);
            QUnit.test("#1316 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1316.TestUseCase);
            QUnit.test("#1316 - TestStringConcatObject", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1316.TestStringConcatObject);
            QUnit.test("#1316 - TestStringConcatEnumerableString", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1316.TestStringConcatEnumerableString);
            QUnit.test("#1316 - TestStringConcatEnumerableGeneric", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1316.TestStringConcatEnumerableGeneric);
            QUnit.test("#1328 - TestOptionalParamsForClasses", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1328.TestOptionalParamsForClasses);
            QUnit.test("#1328 - TestOptionalParamsForStructs", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1328.TestOptionalParamsForStructs);
            QUnit.test("#1339 - TestAccessingConstantsFromDerivedClass", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1339.TestAccessingConstantsFromDerivedClass);
            QUnit.test("#1340 - TestStructGenericMembersDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.TestStructGenericMembersDefaultValue);
            QUnit.test("#1340 - TestStructTwoGenericMembersDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.TestStructTwoGenericMembersDefaultValue);
            QUnit.test("#1340 - TestClassGenericMembersDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.TestClassGenericMembersDefaultValue);
            QUnit.test("#1340 - TestClassTwoGenericMembersDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.TestClassTwoGenericMembersDefaultValue);
            QUnit.test("#1340 - TestClass1TwoGenericInheritedMembersDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.TestClass1TwoGenericInheritedMembersDefaultValue);
            QUnit.test("#1340 - TestClass2TwoGenericInheritedMembersDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.TestClass2TwoGenericInheritedMembersDefaultValue);
            QUnit.test("#1340 - TestClass3TwoGenericInheritedMembersDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.TestClass3TwoGenericInheritedMembersDefaultValue);
            QUnit.test("#1340 - TestStructStaticIntArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.TestStructStaticIntArray);
            QUnit.test("#1340 - TestStructStaticLongArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.TestStructStaticLongArray);
            QUnit.test("#1340 - TestStructStaticStringArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.TestStructStaticStringArray);
            QUnit.test("#1340 - TestStaticClassGenericMembersDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.TestStaticClassGenericMembersDefaultValue);
            QUnit.test("#1340 - TestStaticClassTwoGenericMembersDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.TestStaticClassTwoGenericMembersDefaultValue);
            QUnit.test("#1340 - TestStaticClass1TwoGenericInheritedMembersDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.TestStaticClass1TwoGenericInheritedMembersDefaultValue);
            QUnit.test("#1340 - TestStaticClass2TwoGenericInheritedMembersDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.TestStaticClass2TwoGenericInheritedMembersDefaultValue);
            QUnit.test("#1340 - TestStaticClass3TwoGenericInheritedMembersDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340.TestStaticClass3TwoGenericInheritedMembersDefaultValue);
            QUnit.test("#1341 - TestPlainObject", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341.TestPlainObject);
            QUnit.test("#1341 - TestAnonymousTypeCreation", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341.TestAnonymousTypeCreation);
            QUnit.test("#1341 - TestDiffStructHashCode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341.TestDiffStructHashCode);
            QUnit.test("#1341 - TestDiffAnonymousTypesHashCode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341.TestDiffAnonymousTypesHashCode);
            QUnit.test("#1341 - Test1AnonymousType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341.Test1AnonymousType);
            QUnit.test("#1341 - Test2AnonymousType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341.Test2AnonymousType);
            QUnit.test("#1341 - Test3AnonymousType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341.Test3AnonymousType);
            QUnit.test("#1341 - Test4AnonymousType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341.Test4AnonymousType);
            QUnit.test("#1341 - Test5AnonymousType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341.Test5AnonymousType);
            QUnit.test("#1343 - TestDoubleTemplate", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1343.TestDoubleTemplate);
            QUnit.test("#1343 - TestInlineInGetHashCode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1343.TestInlineInGetHashCode);
            QUnit.test("#1344 - TestLocalVariableWithNameProto", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1344.TestLocalVariableWithNameProto);
            QUnit.test("#1345 - TestBoolInConsole", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1345.TestBoolInConsole);
            QUnit.test("#1348 - TestVoidTypeOf", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1348.TestVoidTypeOf);
            QUnit.test("#1355 - TestLocalVariableWithNameWindow", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1355.TestLocalVariableWithNameWindow);
            QUnit.test("#1374 - TestConvertAllForIntListStaticMethod", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374.TestConvertAllForIntListStaticMethod);
            QUnit.test("#1374 - TestConvertAllForIntListInstanceMethod", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374.TestConvertAllForIntListInstanceMethod);
            QUnit.test("#1374 - TestConvertAllForIntListLambda", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374.TestConvertAllForIntListLambda);
            QUnit.test("#1374 - TestConvertAllForNullConverter", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374.TestConvertAllForNullConverter);
            QUnit.test("#1374 - TestConvertAllForNullArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374.TestConvertAllForNullArray);
            QUnit.test("#1378 - TestAssigmentWithMinusOperator", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378.TestAssigmentWithMinusOperator);
            QUnit.test("#1378 - TestAssigmentWithPlusOperator", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378.TestAssigmentWithPlusOperator);
            QUnit.test("#1378 - TestAssigmentWithOverloadMinusOperator", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378.TestAssigmentWithOverloadMinusOperator);
            QUnit.test("#1378 - TestAssigmentWithOverloadPlusOperator", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378.TestAssigmentWithOverloadPlusOperator);
            QUnit.test("#1378 - TestAssigmentWithConditionalPlusOperator", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378.TestAssigmentWithConditionalPlusOperator);
            QUnit.test("#1378 - TestAssigmentWithConditionalMinusOperator", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378.TestAssigmentWithConditionalMinusOperator);
            QUnit.test("#1379 - TestNanFiniteType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1379.TestNanFiniteType);
            QUnit.test("#1381 - TestReservedWordsUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1381.TestReservedWordsUseCase);
            QUnit.test("#1381 - TestReservedWordsNewBatch", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1381.TestReservedWordsNewBatch);
            QUnit.test("#1385 - TestIsTypedArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1385.TestIsTypedArray);
            QUnit.test("#1389 - TestParamsIndexer", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1389.TestParamsIndexer);
            QUnit.test("#1390 - TestFieldInitializer", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1390.TestFieldInitializer);
            QUnit.test("#1391 - TestStaticCtorOrder", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1391.TestStaticCtorOrder);
            QUnit.test("#1391 - TestStaticCtorOrderForClassHavingReady", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1391Ready.TestStaticCtorOrderForClassHavingReady);
            QUnit.test("#1402 - TestLongClipping", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1402.TestLongClipping);
            QUnit.test("#1410 - TestSetterOnly", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1410.TestSetterOnly);
            QUnit.test("#1410 - TestIndexer", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1410.TestIndexer);
            QUnit.test("#1410 - TestAssigmentWithOp", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1410.TestAssigmentWithOp);
            QUnit.test("#1411 - TestTemplateCtorThing", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1411.TestTemplateCtorThing);
            QUnit.test("#1411 - TestTemplateCtorDoodad", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1411.TestTemplateCtorDoodad);
            QUnit.test("#1411 - TestTemplateCtorGizmo", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1411.TestTemplateCtorGizmo);
            QUnit.test("#1428 - TestEqOperatorWithNull", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1428.TestEqOperatorWithNull);
            QUnit.test("#1429 - TestEqOperatorWithNull", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1429.TestEqOperatorWithNull);
            QUnit.test("#1430 - TestNestedNamespaceSupport", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1430.TestNestedNamespaceSupport);
            QUnit.test("#1448 - TestPlainForNonAnonymous", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1448.TestPlainForNonAnonymous);
            QUnit.test("#1448 - TestObjectLiteralProperty", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1448.TestObjectLiteralProperty);
            QUnit.test("#1448 - TestToObjectLiteralAlias", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1448.TestToObjectLiteralAlias);
            QUnit.test("#1458 - TestConsoleWriteLineForLong", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1458.TestConsoleWriteLineForLong);
            QUnit.test("#1459 - TestHtmlElements", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1459.TestHtmlElements);
            QUnit.test("#1467 - TestForeachTypeChecking", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1467.TestForeachTypeChecking);
            QUnit.test("#1472 - TestMultiplyThisInTemplate", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1472.TestMultiplyThisInTemplate);
            QUnit.test("#1472 - TestSimpleMultipleKeyTemplate", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1472.TestSimpleMultipleKeyTemplate);
            QUnit.test("#1476 - TestEscapedBrackets", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1476.TestEscapedBrackets);
            QUnit.test("#1480 - TestOverloadUnaryOperator", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1480.TestOverloadUnaryOperator);
            QUnit.test("#1485 - TestConstructorName", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1485.TestConstructorName);
            QUnit.test("#1486 - TestStaticLongInitialization", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1486.TestStaticLongInitialization);
            QUnit.test("#1486 - TestLocalLongInitialization", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1486.TestLocalLongInitialization);
            QUnit.test("#1486 - TestStaticUlongInitialization", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1486.TestStaticUlongInitialization);
            QUnit.test("#1486 - TestLocalUlongInitialization", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1486.TestLocalUlongInitialization);
            QUnit.test("#1489 - TestLongEnum", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1489.TestLongEnum);
            QUnit.test("#1489 - TestIntEnum", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1489.TestIntEnum);
            QUnit.test("#1490 - TestEnumLong", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1490.TestEnumLong);
            QUnit.test("#1492 - TestEnumLong", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1492.TestEnumLong);
            QUnit.test("#1493 - TestEnumLong", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1493.TestEnumLong);
            QUnit.test("#1499 - TestObjectStringCoalesceWorks", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1499.TestObjectStringCoalesceWorks);
            QUnit.test("#1501 - TestPropertyChangedEventArgs", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1501.TestPropertyChangedEventArgs);
            QUnit.test("#1509 - TestPreformanceNowIsDouble", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1509.TestPreformanceNowIsDouble);
            QUnit.test("#1510 - TestPropertyChangedEventArgs", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1510.TestPropertyChangedEventArgs);
            QUnit.test("#1511 - TestOverloadedConstructorCallWithOptionalParameters", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1511.TestOverloadedConstructorCallWithOptionalParameters);
            QUnit.test("#1512 - TestParametersReservedNames", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1512.TestParametersReservedNames);
            QUnit.test("#1517 - TestEqualTuples", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1517.TestEqualTuples);
            QUnit.test("#1517 - TestInequalTuples", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1517.TestInequalTuples);
            QUnit.test("#1518 - TestDefaultConstructorForTypeParameter", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1518.TestDefaultConstructorForTypeParameter);
            QUnit.test("#1519 - TestRefOutLocalVars", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1519.TestRefOutLocalVars);
            QUnit.test("#1520 - TestStaticDecimalInitialization", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1520.TestStaticDecimalInitialization);
            QUnit.test("#1520 - TestLocalDecimalInitialization", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1520.TestLocalDecimalInitialization);
            QUnit.test("#1520 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1520.TestUseCase);
            QUnit.test("#1521 - TestDecimalTrueInConditionalBlock", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1521.TestDecimalTrueInConditionalBlock);
            QUnit.test("#1522 - TestAssignIntToDecimal", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1522.TestAssignIntToDecimal);
            QUnit.test("#1523 - TestAssignDecimalToInt", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1523.TestAssignDecimalToInt);
            QUnit.test("#1524 - TestDecimalWithIntOps", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1524.TestDecimalWithIntOps);
            QUnit.test("#1526 - TestOutInClassMembers", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1526.TestOutInClassMembers);
            QUnit.test("#1526 - TestRefInClassMembers", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1526.TestRefInClassMembers);
            QUnit.test("#1527 - TestScriptAttributeWithReference", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1527.TestScriptAttributeWithReference);
            QUnit.test("#1530 - TestObjectLiteralPropertyImplementingInterface", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1530.TestObjectLiteralPropertyImplementingInterface);
            QUnit.test("#1530 - TestObjectLiteralFieldImplementingInterface", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1530.TestObjectLiteralFieldImplementingInterface);
            QUnit.test("#1533 - TestStringNullConcationation", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1533.TestStringNullConcationation);
            QUnit.test("#1535 - TestAsyncLambdaAssignmentExpression", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1535.TestAsyncLambdaAssignmentExpression);
            QUnit.test("#1536 - TestEventNameConflict", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1536.TestEventNameConflict);
            QUnit.test("#1536 - TestPropertyNameConflict", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1536.TestPropertyNameConflict);
            QUnit.test("#1538 - TestOutParameterInIndexer", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1538.TestOutParameterInIndexer);
            QUnit.test("#156 - TestArrayIndexOutOfRangeException", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge156.TestArrayIndexOutOfRangeException);
            QUnit.test("#156 - Test1DArrayIndexOutOfRangeExceptionIndexAsVariable", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge156.Test1DArrayIndexOutOfRangeExceptionIndexAsVariable);
            QUnit.test("#156 - Test2DArrayIndexOutOfRangeExceptionIndexAsVariable", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge156.Test2DArrayIndexOutOfRangeExceptionIndexAsVariable);
            QUnit.test("#1566 - TestMathLog10", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1566.TestMathLog10);
            QUnit.test("#1566 - TestMathLogWithBase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1566.TestMathLogWithBase);
            QUnit.test("#1566 - TestMathLog", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1566.TestMathLog);
            QUnit.test("#1579 - TestNullableDecimalToFloatDouble", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1579.TestNullableDecimalToFloatDouble);
            QUnit.test("#1599 - TestCustomIEnumerableForStringJoin", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1599.TestCustomIEnumerableForStringJoin);
            QUnit.test("#1600 - TestPositiveInfinity", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1600.TestPositiveInfinity);
            QUnit.test("#1627 - ForeachWithListItemCallbackWorks", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1627.ForeachWithListItemCallbackWorks);
            QUnit.test("#1641 - TestOutInAsync", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1641.TestOutInAsync);
            QUnit.test("#1653 - TestLiftedFunctionsWithGenericInvocation", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1653.TestLiftedFunctionsWithGenericInvocation);
            QUnit.test("#1684 - TestStaticInitializationForGenericClass", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1684.TestStaticInitializationForGenericClass);
            QUnit.test("#1698 - TestReflectionForNativeTypes", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1698.TestReflectionForNativeTypes);
            QUnit.test("#1700 - TestULongAsIndex", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1700.TestULongAsIndex);
            QUnit.test("#1700 - TestLongAsIndex", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1700.TestLongAsIndex);
            QUnit.test("#1702 - TestFieldWithItemName", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1702.TestFieldWithItemName);
            QUnit.test("#1704 - TestBaseMethodWithOptionalParams", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1704.TestBaseMethodWithOptionalParams);
            QUnit.test("#1709 - TestGenericMethodWithoutTypeArgument", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1709.TestGenericMethodWithoutTypeArgument);
            QUnit.test("#1711 - TestImplicitOperatorOrder", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1711.TestImplicitOperatorOrder);
            QUnit.test("#1712 - TestCollectionAddWithExtensionMethod", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1712.TestCollectionAddWithExtensionMethod);
            QUnit.test("#1712 - TestCollectionWithAdd_BeforeCS6", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1712.TestCollectionWithAdd_BeforeCS6);
            QUnit.test("#1712 - TestCollectionWithAdd_CS6", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1712.TestCollectionWithAdd_CS6);
            QUnit.test("#1713 - TestOverloadResolution", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1713.TestOverloadResolution);
            QUnit.test("#1713 - TestOverloadResolutionMSDN1", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1713MSDN.TestOverloadResolutionMSDN1);
            QUnit.test("#1713 - TestOverloadResolutionMSDN2", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1713MSDN.TestOverloadResolutionMSDN2);
            QUnit.test("#1715 - TestCollectionInitializerWithAdd", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1715.TestCollectionInitializerWithAdd);
            QUnit.test("#1721 - TestDelegateEquals", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1721.TestDelegateEquals);
            QUnit.test("#1722 - TestDelegateCreationOfGenericMethods", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1722.TestDelegateCreationOfGenericMethods);
            QUnit.test("#1722 - TestDelegateCreationOfGenericMethodsWithLambda", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1722.TestDelegateCreationOfGenericMethodsWithLambda);
            QUnit.test("#1735 - TestTryGetValueOutDelegateParameter", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1735.TestTryGetValueOutDelegateParameter);
            QUnit.test("#1735 - TestOutDelegateParameter", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1735.TestOutDelegateParameter);
            QUnit.test("#1735 - TestReferenceDelegateParameter", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1735.TestReferenceDelegateParameter);
            QUnit.test("#1737 - TestTypeFullName", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1737.TestTypeFullName);
            QUnit.test("#1741 - TestNumbersHashCode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1741.TestNumbersHashCode);
            QUnit.test("#1744 - TestMethodInvocationWithParams", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1744.TestMethodInvocationWithParams);
            QUnit.test("#1754 - TestAllUpperCaseNames", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1754.TestAllUpperCaseNames);
            QUnit.test("#1767 - TestBaseIndexer", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1767.TestBaseIndexer);
            QUnit.test("#1768 - TestImplicitImplementation", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1768.TestImplicitImplementation);
            QUnit.test("#1768 - TestExplicitImplementation", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1768.TestExplicitImplementation);
            QUnit.test("#1768 - TestListImplicitImplementation", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1768.TestListImplicitImplementation);
            QUnit.test("#1768 - TestListExplicitImplementation", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1768.TestListExplicitImplementation);
            QUnit.test("#1775 - TestSumForEmpty", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1775.TestSumForEmpty);
            QUnit.test("#1776 - TestTupleHashCode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1776.TestTupleHashCode);
            QUnit.test("#1787 - TestNamedParams", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1787.TestNamedParams);
            QUnit.test("#1802 - TestReservedWordsAsMethodName", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1802.TestReservedWordsAsMethodName);
            QUnit.test("#1803 - TestCollectionInitializerWithStaticMember", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1803.TestCollectionInitializerWithStaticMember);
            QUnit.test("#1804 - TestStructClone", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1804.TestStructClone);
            QUnit.test("#1810 - TestInterfaceIndexersAndCopyToAndIsReadOnly", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1810.TestInterfaceIndexersAndCopyToAndIsReadOnly);
            QUnit.test("#1812 - TestDoubleConversion", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1812.TestDoubleConversion);
            QUnit.test("#1813 - TestAddStaticMethod", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1813.TestAddStaticMethod);
            QUnit.test("#1814 - TestNamespaceConflictResolution", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1814.TestNamespaceConflictResolution);
            QUnit.test("#1819 - TestObjectLiteralWithInheritance", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1819.TestObjectLiteralWithInheritance);
            QUnit.test("#1821 - TestInterfaceMember1", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1821.TestInterfaceMember1);
            QUnit.test("#1821 - TestInterfaceMember2", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1821.TestInterfaceMember2);
            QUnit.test("#1832 - TestInitWithTempVars", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1832.TestInitWithTempVars);
            QUnit.test("#1833 - TestInheritedPropertyInLiteral", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1833.TestInheritedPropertyInLiteral);
            QUnit.test("#1834 - TestIgnoreGenericInterface", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1834.TestIgnoreGenericInterface);
            QUnit.test("#1835 - TestGenericMethodWithAnonTypeArg", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1835.TestGenericMethodWithAnonTypeArg);
            QUnit.test("#1842 - TestTypeOfConversion", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1842.TestTypeOfConversion);
            QUnit.test("#1845 - TestCtorMemberName", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1845.TestCtorMemberName);
            QUnit.test("#1846 - TestImplicitOperatorInForeachLoop", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1846.TestImplicitOperatorInForeachLoop);
            QUnit.test("#1847 - TestActivatorCreateInstanceCallProtectedConstructor", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1847.TestActivatorCreateInstanceCallProtectedConstructor);
            QUnit.test("#1848 - TestExternalInterfaceProperty", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1848.TestExternalInterfaceProperty);
            QUnit.test("#1850 - TestImplicitInterface", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1850.TestImplicitInterface);
            QUnit.test("#1852 - TestCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1852.TestCase);
            QUnit.test("#1853 - TestContainsUseEquals", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1853.TestContainsUseEquals);
            QUnit.test("#1854 - TestCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1854.TestCase);
            QUnit.test("#1856 - TestCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1856.TestCase);
            QUnit.test("#1863 - TestTrueFalseOperators", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1863.TestTrueFalseOperators);
            QUnit.test("#1865 - TestObjectLiteralInterface", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1865.TestObjectLiteralInterface);
            QUnit.test("#1869 - TestGenericTypeDefinition", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1869.TestGenericTypeDefinition);
            QUnit.test("#1871 - TestErrorCommentNotThrowCompilerException", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1871.TestErrorCommentNotThrowCompilerException);
            QUnit.test("#1872 - TestAsyncWithAnonymousDelegate", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1872.TestAsyncWithAnonymousDelegate);
            QUnit.test("#1875 - TestDictionaryWithLongVariableAsKey", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1875.TestDictionaryWithLongVariableAsKey);
            QUnit.test("#1878 - TestSumDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1878.TestSumDefaultValue);
            QUnit.test("#1880 - TestDefaultValuesWithTemplates", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1880.TestDefaultValuesWithTemplates);
            QUnit.test("#1882 - TestGenericClassCastForArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1882.TestGenericClassCastForArray);
            QUnit.test("#1882 - TestGenericClassCastForList", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1882.TestGenericClassCastForList);
            QUnit.test("#1884 - TestCollectionInitilizers", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1884.TestCollectionInitilizers);
            QUnit.test("#1886 - TestCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1886.TestCase);
            QUnit.test("#1892 - TestCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1892.TestCase);
            QUnit.test("#1896 - TestHexStringToInt", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1896.TestHexStringToInt);
            QUnit.test("#1897 - TestNestedNotEscapedBracketsInRegex", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1897.TestNestedNotEscapedBracketsInRegex);
            QUnit.test("#1899 - TestPropertyAndMethodNameConflict", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1899.TestPropertyAndMethodNameConflict);
            QUnit.test("#1900 - TestOutParamInMetadata", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1900.TestOutParamInMetadata);
            QUnit.test("#1904 - TestDateTimeConstructorConvertsValueToMs", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1904.TestDateTimeConstructorConvertsValueToMs);
            QUnit.test("#1906 - TestIsOperatorInaccuracy", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1906.TestIsOperatorInaccuracy);
            QUnit.test("#1909 - TestActivatorEnumCreation", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1909.TestActivatorEnumCreation);
            QUnit.test("#1910 - TestGenericTypeCasting", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1910.TestGenericTypeCasting);
            QUnit.test("#1911 - TestExtensionMethodOfBaseClass", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1911.TestExtensionMethodOfBaseClass);
            QUnit.test("#1911 - TestExtensionMethodOfBaseClassLinqCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1911.TestExtensionMethodOfBaseClassLinqCase);
            QUnit.test("#1912 - TestExtentionMethod", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1912.TestExtentionMethod);
            QUnit.test("#1913 - TestIsSubclassOfTemplate", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1913.TestIsSubclassOfTemplate);
            QUnit.test("#1914 - TestCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1914.TestCase);
            QUnit.test("#1915 - TestImplementingExternalInterface", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1915.TestImplementingExternalInterface);
            QUnit.test("#1920 - TestGeneratedStringConcatenation", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1920.TestGeneratedStringConcatenation);
            QUnit.test("#1933 - TestRounding", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1933.TestRounding);
            QUnit.test("#1934 - TestEscapeSequencesInRegex", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1934.TestEscapeSequencesInRegex);
            QUnit.test("#1938 - TestIsArrayTemplate", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1938.TestIsArrayTemplate);
            QUnit.test("#1948 - TestCollectionLikeInitialization", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1948.TestCollectionLikeInitialization);
            QUnit.test("#1951 - TestBindFunctionNoMemoryLeaks", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1951.TestBindFunctionNoMemoryLeaks);
            QUnit.test("#1955 - TestScriptAttributeForExternMethods", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1955.TestScriptAttributeForExternMethods);
            QUnit.test("#1964 - TestStringIsNullOrWhiteSpaceCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1964.TestStringIsNullOrWhiteSpaceCase);
            QUnit.test("#1965 - TestIsClassForNumberTypes", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1965.TestIsClassForNumberTypes);
            QUnit.test("#1966 - TestDoubleInfinityGetHashCode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1966.TestDoubleInfinityGetHashCode);
            QUnit.test("#1968 - TestGenericNullable", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1968.TestGenericNullable);
            QUnit.test("#1969 - TestStaticConstructorsForBaseClasses", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1969.TestStaticConstructorsForBaseClasses);
            QUnit.test("#1970 - TestRunClassConstructor", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1970.TestRunClassConstructor);
            QUnit.test("#1996 - TestTemplateForGetEnumerator", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1996.TestTemplateForGetEnumerator);
            QUnit.test("#2003 - TestThisIsBindInTemplatedMemberMethods", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2003.TestThisIsBindInTemplatedMemberMethods);
            QUnit.test("#2011 - TestOverloadSelectionWhenNullCoalescingOperator", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2011.TestOverloadSelectionWhenNullCoalescingOperator);
            QUnit.test("#2013 - TestSubscriptionToEventDefinedInGenericInterfaceViaExtensionMethod", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2013.TestSubscriptionToEventDefinedInGenericInterfaceViaExtensionMethod);
            QUnit.test("#2019 - TestLambdaExpressionsInGenericMethod", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2019.TestLambdaExpressionsInGenericMethod);
            QUnit.test("#2024 - TestAccessEnumInAnotherClassUsingStatic", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2024.TestAccessEnumInAnotherClassUsingStatic);
            QUnit.test("#2027 - TestToStringForEnumWhenConcatWithString", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2027.TestToStringForEnumWhenConcatWithString);
            QUnit.test("#2033 - TestClassEnumPropertiesInitialization", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2033.TestClassEnumPropertiesInitialization);
            QUnit.test("#2038 - TestIncrementAssignmentInStructs", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2038.TestIncrementAssignmentInStructs);
            QUnit.test("#2039 - TestNaNToString", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2039.TestNaNToString);
            QUnit.test("#2042 - TestAppDomain", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2042.TestAppDomain);
            QUnit.test("#2045 - TestDoubleEscapingInterpolation", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2045.TestDoubleEscapingInterpolation);
            QUnit.test("#2046 - TestSafeNavigationOperator", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2046.TestSafeNavigationOperator);
            QUnit.test("#2048 - TestUnaryOperatorBlockCompilationError", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2048.TestUnaryOperatorBlockCompilationError);
            QUnit.test("#2049 - TestNullableGetUnderlyingType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2049.TestNullableGetUnderlyingType);
            QUnit.test("#2050 - TestIList", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2050.TestIList);
            QUnit.test("#2050 - TestIDictionary", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2050.TestIDictionary);
            QUnit.test("#2051 - TestGetElementType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2051.TestGetElementType);
            QUnit.test("#2052 - TestArrayCreateInstance", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2052.TestArrayCreateInstance);
            QUnit.test("#2052 - TestArrayCreateInstanceShouldThrow", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2052.TestArrayCreateInstanceShouldThrow);
            QUnit.test("#2056 - TestArrayCasting", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2056.TestArrayCasting);
            QUnit.test("#2056 - TestArrayTypeName", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2056.TestArrayTypeName);
            QUnit.test("#2067 - TestGetGenericTypeDefinition", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2067.TestGetGenericTypeDefinition);
            QUnit.test("#2068 - TestGetGenericTypeDefinition", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2068.TestGetGenericTypeDefinition);
            QUnit.test("#2073 - TestUserDefinedWithStringConcat", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2073.TestUserDefinedWithStringConcat);
            QUnit.test("#2076 - TestLinqGlobalPollution", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2076.TestLinqGlobalPollution);
            QUnit.test("#1290 - TestBoxedChar", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1290.TestBoxedChar);
            QUnit.test("#1292 - TestBoxedChar", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1292.TestBoxedChar);
            QUnit.test("#1248 #1301 #2055 - TestBoxedNumbers", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1301.TestBoxedNumbers);
            QUnit.test("#1309 - TestBoxedBooleans", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1309.TestBoxedBooleans);
            QUnit.test("#1312 - TestStringFormatForEnums", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1312.TestStringFormatForEnums);
            QUnit.test("#1317 - TestStringFormatForEnums", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1317.TestStringFormatForEnums);
            QUnit.test("#1347 - TestFixed", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1347.TestFixed);
            QUnit.test("#1357 - TestBoxedValueType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1357.TestBoxedValueType);
            QUnit.test("#1514 - TestBoxedChar", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1514.TestBoxedChar);
            QUnit.test("#2065 - TestBoxedEnum", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2065.TestBoxedEnum);
            QUnit.test("#2079 - TestQueryAsArgument", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2079.TestQueryAsArgument);
            QUnit.test("#2080 - TestAssigmentOrWithProperty", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2080.TestAssigmentOrWithProperty);
            QUnit.test("#2080 - TestAssigmentOrWithPropertyChangingCounter", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2080.TestAssigmentOrWithPropertyChangingCounter);
            QUnit.test("#2081 - TestReturnFromCatch", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2081.TestReturnFromCatch);
            QUnit.test("#2088 - TestObjectLiteralReflection", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2088.TestObjectLiteralReflection);
            QUnit.test("#2092 - TestIgnoreGenericForDelegate", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2092.TestIgnoreGenericForDelegate);
            QUnit.test("#2094 - TestGenericMethodAsDelegate", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2094.TestGenericMethodAsDelegate);
            QUnit.test("#2106 - TestGenericMethodInObjectLiteral", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2106.TestGenericMethodInObjectLiteral);
            QUnit.test("#2114 - TestNonStandardNames", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2114.TestNonStandardNames);
            QUnit.test("#2114 - TestFieldTemplates", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2114.TestFieldTemplates);
            QUnit.test("#2121 - TestLongAsDictionaryKey", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2121.TestLongAsDictionaryKey);
            QUnit.test("#2127 - TestNumberFormatInfoNaNSymbol", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2127.TestNumberFormatInfoNaNSymbol);
            QUnit.test("#2135 - TestNestedTypesNames", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2135.TestNestedTypesNames);
            QUnit.test("#2137 - TestPropertiesWithNonPrimitiveInitializers", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2137.TestPropertiesWithNonPrimitiveInitializers);
            QUnit.test("#2138 - TestGenericInterfaceIndexer", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2138.TestGenericInterfaceIndexer);
            QUnit.test("#2141 - TestExternalObjectLiteral", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2141.TestExternalObjectLiteral);
            QUnit.test("#2143 - TestIgnoreGenericForNestedClass", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2143.TestIgnoreGenericForNestedClass);
            QUnit.test("#2146 - TestCharDefaultValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2146.TestCharDefaultValue);
            QUnit.test("#2147 - TestLinqExcept", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2147.TestLinqExcept);
            QUnit.test("#2156 - TestLinqIntersect", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2156.TestLinqIntersect);
            QUnit.test("#2157 - TestCreatingGenericInstanceWithInitializer", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2157.TestCreatingGenericInstanceWithInitializer);
            QUnit.test("#2159 - TestBaseTypeForGenericDefinition", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2159.TestBaseTypeForGenericDefinition);
            QUnit.test("#2160 - TestBaseTypeForGenericDefinition", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2160.TestBaseTypeForGenericDefinition);
            QUnit.test("#2163 - TestDecimalToFormat", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2163.TestDecimalToFormat);
            QUnit.test("#2167 - TestMerge", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2167.TestMerge);
            QUnit.test("#2174 - TestGenericComparerDefault", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2174.TestGenericComparerDefault);
            QUnit.test("#2176 - TestExternalObjectLiteralConstructorMode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2176.TestExternalObjectLiteralConstructorMode);
            QUnit.test("#2181 - TestStringPadForEmptyString", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2181.TestStringPadForEmptyString);
            QUnit.test("#2186 - TestConsoleWriteLineParameterless", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2186.TestConsoleWriteLineParameterless);
            QUnit.test("#2189 - TestInheritanceFromExternalAndBaseCtor", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2189.TestInheritanceFromExternalAndBaseCtor);
            QUnit.test("#2190 - TestInternalsVisibleTo", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2190.TestInternalsVisibleTo);
            QUnit.test("#2192 - TestIntersection", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2192.TestIntersection);
            QUnit.test("#2195 - TestGenericInvocationInTryBlock", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2195.TestGenericInvocationInTryBlock);
            QUnit.test("#2199 - TestTypeParameterName", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2199.TestTypeParameterName);
            QUnit.test("#2200 - TestSequence", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2200.TestSequence);
            QUnit.test("#2203 - TestLocalVarsRenaming", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2203.TestLocalVarsRenaming);
            QUnit.test("#2204 - TestDecimalToString", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2204.TestDecimalToString);
            QUnit.test("#2207 - TestDefaultOptionalParam", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2207.TestDefaultOptionalParam);
            QUnit.test("#2210 - TestTypeOrdering", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2210.TestTypeOrdering);
            QUnit.test("#2211 - TestConditionAccess", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2211.TestConditionAccess);
            QUnit.test("#2212 - TestDelegateBindCache", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2212.TestDelegateBindCache);
            QUnit.test("#2213 - TestCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2213.TestCase);
            QUnit.test("#2214 - TestCheckedULong", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2214.TestCheckedULong);
            QUnit.test("#2216 - TestExternalInterface", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2216.TestExternalInterface);
            QUnit.test("#2220 - TestHasElementType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2220.TestHasElementType);
            QUnit.test("#2221 - TestMakeArrayType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2221.TestMakeArrayType);
            QUnit.test("#2222 - TestGetTypeWithNullArgument", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2222.TestGetTypeWithNullArgument);
            QUnit.test("#2225 - TestVolatile", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2225.TestVolatile);
            QUnit.test("#2243 - TestElementHiddenField", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2243.TestElementHiddenField);
            QUnit.test("#2246 - TestEntryPoint", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2246.TestEntryPoint);
            QUnit.test("#2249 - TestPropertyInitializerWithDirective", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2249.TestPropertyInitializerWithDirective);
            QUnit.test("#2251 - TestListGetRange", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2251.TestListGetRange);
            QUnit.test("#2278 - TestGenericInterface", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2278.TestGenericInterface);
            QUnit.test("#2279 - TestPropertyWithInitializerAndNestedClass", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2279.TestPropertyWithInitializerAndNestedClass);
            QUnit.test("#2280 - TestGetTypeInIgnoreGenericMethod", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2280.TestGetTypeInIgnoreGenericMethod);
            QUnit.test("#2281 - TestFieldMerge", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2281.TestFieldMerge);
            QUnit.test("#2284 - TestNameAttrOnProperty", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2284.TestNameAttrOnProperty);
            QUnit.test("#2293 - TestAttributeUsage", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2293.TestAttributeUsage);
            QUnit.test("#2298 - TestGenericInterfaceWithNestedTypeParameters", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2298.TestGenericInterfaceWithNestedTypeParameters);
            QUnit.test("#2310 - TestBridgeFields", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2310.TestBridgeFields);
            QUnit.test("#2313 - TestExternalInterfaceOverloadedMembers", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2313.TestExternalInterfaceOverloadedMembers);
            QUnit.test("#2313 - TestExternalClassInheritingInterface", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2313.TestExternalClassInheritingInterface);
            QUnit.test("#2313 - TestExternalInheritingInterfaces", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2313.TestExternalInheritingInterfaces);
            QUnit.test("#2318 - TestBoxing", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2318.TestBoxing);
            QUnit.test("#2320 - TestReadyAndMain", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2320.TestReadyAndMain);
            QUnit.test("#2322 - TestSequence", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2322.TestSequence);
            QUnit.test("#2327 - TestEnumInterfaces", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2327.TestEnumInterfaces);
            QUnit.test("#2330 - TestMultipleTryCatchBlocks", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2330.TestMultipleTryCatchBlocks);
            QUnit.test("#2337 - TestFDateModifier", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2337.TestFDateModifier);
            QUnit.test("#2338 - TestGenericGetType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2338.TestGenericGetType);
            QUnit.test("#2342 - TestCastParanthesize", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2342.TestCastParanthesize);
            QUnit.test("#2343 - TestBoxedEqualsAndGetHashCode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2343.TestBoxedEqualsAndGetHashCode);
            QUnit.test("#2344 - TestHtmlElementName", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2344.TestHtmlElementName);
            QUnit.test("#2345 - TestArrayAsIList", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2345.TestArrayAsIList);
            QUnit.test("#2345 - TestByteArrayAsIList", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2345.TestByteArrayAsIList);
            QUnit.test("#2345 - TestLongArrayAsIList", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2345.TestLongArrayAsIList);
            QUnit.test("#2345 - TestDecimalArrayAsIList", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2345.TestDecimalArrayAsIList);
            QUnit.test("#2345 - TestStructArrayAsIList", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2345.TestStructArrayAsIList);
            QUnit.test("#2345 - TestStringArrayAsIList", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2345.TestStringArrayAsIList);
            QUnit.test("#2347 - TestG17FormatSpecifier", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2347.TestG17FormatSpecifier);
            QUnit.test("#2349 - TestExternalIgnoreGenericClass", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2349.TestExternalIgnoreGenericClass);
            QUnit.test("#2352 - TestOperatorOnAnonymousType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2352.TestOperatorOnAnonymousType);
            QUnit.test("#2355 - TestLinqGrouping", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2355.TestLinqGrouping);
            QUnit.test("#2355 - TestLinqLookup", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2355.TestLinqLookup);
            QUnit.test("#2355 - TestLinqOrderedEnumerable", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2355.TestLinqOrderedEnumerable);
            QUnit.test("#2359 - TestNullableCompareEquals", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2359.TestNullableCompareEquals);
            QUnit.test("#2369 - TestArrayTypeAlias", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2369.TestArrayTypeAlias);
            QUnit.test("#2374 - TestPropertyInitializer", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2374.TestPropertyInitializer);
            QUnit.test("#2375 - TestNameofWithReflection", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2375.TestNameofWithReflection);
            QUnit.test("#2386 - TestStructBoxingOperations", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2386.TestStructBoxingOperations);
            QUnit.test("#2393 - TestLambdaInLiteral", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2393.TestLambdaInLiteral);
            QUnit.test("#2399 - TestSqrt", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2399.TestSqrt);
            QUnit.test("#2401 - TestArrayInitializer", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2401.TestArrayInitializer);
            QUnit.test("#2419 - TestExternalEnum", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2419.TestExternalEnum);
            QUnit.test("#2430 - TestPropertyInitializer", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2430.TestPropertyInitializer);
            QUnit.test("#2443 - TestNaNCompareForDouble", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2443.TestNaNCompareForDouble);
            QUnit.test("#2443 - TestNaNCompareForFloat", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2443.TestNaNCompareForFloat);
            QUnit.test("#2445 - TestEmptyForLoop", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2445.TestEmptyForLoop);
            QUnit.test("#2446 - TestDoubleMinValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2446.TestDoubleMinValue);
            QUnit.test("#2454 - TestForEachClone", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2454.TestForEachClone);
            QUnit.test("#2456 - TestIsArrayFromIFrame", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2456.TestIsArrayFromIFrame);
            QUnit.test("#2458 - TestGetBaseException", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2458.TestGetBaseException);
            QUnit.test("#2462 - TestReturnInAsync", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2462.TestReturnInAsync);
            QUnit.test("#2467 - TestPropertyInitializerInStruct", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2467.TestPropertyInitializerInStruct);
            QUnit.test("#2469 - TestLambdaLiftingWithStaticGenericMember", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2469.TestLambdaLiftingWithStaticGenericMember);
            QUnit.test("#2481 - TestReturnInAsyncUsing", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2481.TestReturnInAsyncUsing);
            QUnit.test("#2486 - TestGenericArrayInterface", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2486.TestGenericArrayInterface);
            QUnit.test("#2489 - TestReflectableInherits", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2489.TestReflectableInherits);
            QUnit.test("#2497 - TestPropertyInitializerWithDirective", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2497.TestPropertyInitializerWithDirective);
            QUnit.test("#2499 - TestArraySortComparison", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2499.TestArraySortComparison);
            QUnit.test("#2499 - TestArraySortComparisonWithEntity", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2499.TestArraySortComparisonWithEntity);
            QUnit.test("#2502 - TestAsyncBreak", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2502.TestAsyncBreak);
            QUnit.test("#2505 - TestNegativeNumberToULong", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2505.TestNegativeNumberToULong);
            QUnit.test("#2515 - TestPreprocessorConditionalAccess", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2515.TestPreprocessorConditionalAccess);
            QUnit.test("#2523 - TestAsyncConditionalAccess", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2523.TestAsyncConditionalAccess);
            QUnit.test("#2523 - TestAsyncConditionalAccessWorkaround", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2523.TestAsyncConditionalAccessWorkaround);
            QUnit.test("#2525 - TestCastAttribute", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2525.TestCastAttribute);
            QUnit.test("#2538 - TestArraySegment", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2538.TestArraySegment);
            QUnit.test("#2550 - TestExplictImplementationReflectability", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2550.TestExplictImplementationReflectability);
            QUnit.test("#2558 - TestEnumReflection", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2558.TestEnumReflection);
            QUnit.test("#2565 - TestLambdaInAsyncLoop", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2565.TestLambdaInAsyncLoop);
            QUnit.test("#2571 - TestContainsFunction", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2571.TestContainsFunction);
            QUnit.test("#2574 - TestOperatorTemplate", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2574.TestOperatorTemplate);
            QUnit.test("#2584 - TestBindingFlags", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2584.TestBindingFlags);
            QUnit.test("#2587 - TestNamedParams", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2587.TestNamedParams);
            QUnit.test("#2591 - TestEntryPointCustomName", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2591.TestEntryPointCustomName);
            QUnit.test("#2592 - TestStackTrace", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2592.TestStackTrace);
            QUnit.test("#2610 - TestLambdaLifting", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2610.TestLambdaLifting);
            QUnit.test("#2614 - TestInitializers", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2614.TestInitializers);
            QUnit.test("#2632 - TestTemplateIdentifier", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2632.TestTemplateIdentifier);
            QUnit.test("#2633 - TestAsyncCaptureVariable", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2633.TestAsyncCaptureVariable);
            QUnit.test("#2635 - TestInitializers", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2635.TestInitializers);
            QUnit.test("#2636 - TestUsingStatic", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2636.TestUsingStatic);
            QUnit.test("#2638 - TestContrvariance", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2638.TestContrvariance);
            QUnit.test("#2638A - TestG1", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2638A.TestG1);
            QUnit.test("#2638A - TestG2", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2638A.TestG2);
            QUnit.test("#2638A - TestG3", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2638A.TestG3);
            QUnit.test("#2638A - TestG4", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2638A.TestG4);
            QUnit.test("#2638A - TestG5", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2638A.TestG5);
            QUnit.test("#2638A - TestG6", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2638A.TestG6);
            QUnit.test("#2638A - TestG7", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2638A.TestG7);
            QUnit.test("#2638A - TestG8", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2638A.TestG8);
            QUnit.test("#2644 - TestMax", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2644.TestMax);
            QUnit.test("#2644 - TestMin", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2644.TestMin);
            QUnit.test("#2657 - TestRoundtripFormat", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2657.TestRoundtripFormat);
            QUnit.test("#2667 - TestOrder", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2667.TestOrder);
            QUnit.test("#2671 - TestInterfaceIndexer", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2671.TestInterfaceIndexer);
            QUnit.test("#2685 - TestPartialClasses", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2685.TestPartialClasses);
            QUnit.test("#2686 - TestCapturedReferenceVariable", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2686.TestCapturedReferenceVariable);
            QUnit.test("#2686 - TestChangeableCapturedReferenceVariable", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2686.TestChangeableCapturedReferenceVariable);
            QUnit.test("#2688 - TestCaseNull", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2688.TestCaseNull);
            QUnit.test("#2689 - TestAsyncConditionalExpression1", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689.TestAsyncConditionalExpression1);
            QUnit.test("#2689 - TestAsyncConditionalExpression2", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689.TestAsyncConditionalExpression2);
            QUnit.test("#2689 - TestAsyncConditionalExpression3", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689.TestAsyncConditionalExpression3);
            QUnit.test("#2689 - TestAsyncConditionalExpression4", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689.TestAsyncConditionalExpression4);
            QUnit.test("#2689 - TestAsyncConditionalExpression5", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689.TestAsyncConditionalExpression5);
            QUnit.test("#2689 - TestAsyncConditionalExpression6", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689.TestAsyncConditionalExpression6);
            QUnit.test("#2689 - TestAsyncConditionalExpression7", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689.TestAsyncConditionalExpression7);
            QUnit.test("#2689 - TestAsyncConditionalExpression8", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689.TestAsyncConditionalExpression8);
            QUnit.test("#2689 - TestAsyncConditionalExpression9", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689.TestAsyncConditionalExpression9);
            QUnit.test("#2689 - TestAsyncConditionalExpression10", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689.TestAsyncConditionalExpression10);
            QUnit.test("#2689 - TestAsyncBinaryExpression1", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689.TestAsyncBinaryExpression1);
            QUnit.test("#2689 - TestAsyncBinaryExpression2", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689.TestAsyncBinaryExpression2);
            QUnit.test("#2689 - TestAsyncBinaryExpression3", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689.TestAsyncBinaryExpression3);
            QUnit.test("#2689 - TestAsyncBinaryExpression4", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689.TestAsyncBinaryExpression4);
            QUnit.test("#2689 - TestAsyncBinaryExpression5", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689.TestAsyncBinaryExpression5);
            QUnit.test("#2689 - TestAsyncBinaryExpression6", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689.TestAsyncBinaryExpression6);
            QUnit.test("#2689 - TestAsyncBinaryExpression7", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689.TestAsyncBinaryExpression7);
            QUnit.test("#2689 - TestAsyncBinaryExpression8", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689.TestAsyncBinaryExpression8);
            QUnit.test("#2689 - TestAsyncBinaryExpression9", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689.TestAsyncBinaryExpression9);
            QUnit.test("#2689 - TestAsyncBinaryExpression10", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689.TestAsyncBinaryExpression10);
            QUnit.test("#2692 - TestUnusedGotoLabel", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2692.TestUnusedGotoLabel);
            QUnit.test("#2693 - TestListCapacity", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2693.TestListCapacity);
            QUnit.test("#2703 - TestDoubleGetHashCode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2703.TestDoubleGetHashCode);
            QUnit.test("#2703 - TestSingleGetHashCode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2703.TestSingleGetHashCode);
            QUnit.test("#2705 - TestCatchWithoutVariable", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2705.TestCatchWithoutVariable);
            QUnit.test("#2712 - TestLambda", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2712.TestLambda);
            QUnit.test("#2713 - TestConventionForNestedClass", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2713.TestConventionForNestedClass);
            QUnit.test("#2716 - TestDelegateWithOptionalParameter", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2716.TestDelegateWithOptionalParameter);
            QUnit.test("#2720 - TestAsyncAssignmentForLong", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2720.TestAsyncAssignmentForLong);
            QUnit.test("#2720 - TestAsyncAssignmentForDecimal", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2720.TestAsyncAssignmentForDecimal);
            QUnit.test("#2722 - TestEnumParsing", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2722.TestEnumParsing);
            QUnit.test("#2723 - TestAmbigiousSymbols", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2723.TestAmbigiousSymbols);
            QUnit.test("#2735 - TestExternalInheritanceWithoutCtor", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2735.TestExternalInheritanceWithoutCtor);
            QUnit.test("#2738 - TestAmbigiousSymbols", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2738.TestAmbigiousSymbols);
            QUnit.test("#2745 - TestFieldInitialization", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2745.TestFieldInitialization);
            QUnit.test("#2749 - TestExtensionMethodBoxing", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2749.TestExtensionMethodBoxing);
            QUnit.test("#2759 - TestOrder", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2759.TestOrder);
            QUnit.test("#2763 - TestAsyncArgument", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2763.TestAsyncArgument);
            QUnit.test("#2764 - TestNonGenericClassName", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2764.TestNonGenericClassName);
            QUnit.test("#2770 - TestExternalMethodName", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2770.TestExternalMethodName);
            QUnit.test("#2770 - TestExternalMethodOverload", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2770.TestExternalMethodOverload);
            QUnit.test("#2770 - TestExternalClass", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2770.TestExternalClass);
            QUnit.test("#2792 - TestOverridenReadOnlyProperty", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2792.TestOverridenReadOnlyProperty);
            QUnit.test("#2793 - TestAsyncBlockStatement", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2793.TestAsyncBlockStatement);
            QUnit.test("#2794 - TestTemplateTokens", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2794.TestTemplateTokens);
            QUnit.test("#2794 - TestNameTokens", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2794.TestNameTokens);
            QUnit.test("#2795 - TestVirtualClass", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2795.TestVirtualClass);
            QUnit.test("#2795 - TestVirtualInterface", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2795.TestVirtualInterface);
            QUnit.test("#2802 - TestLocalesWithoutAmPm", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2802.TestLocalesWithoutAmPm);
            QUnit.test("#2818 - TestFnProperty", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2818.TestFnProperty);
            QUnit.test("#2840 - TestScope", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2840.TestScope);
            QUnit.test("#2844 - TestPropertyInitialization", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2844.TestPropertyInitialization);
            QUnit.test("#2847 - TestCommonSwitch", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2847.TestCommonSwitch);
            QUnit.test("#2847 - TestAsyncSwitch", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2847.TestAsyncSwitch);
            QUnit.test("#2855 - TestVirtualNestedClasses", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2855.TestVirtualNestedClasses);
            QUnit.test("#2859 - TestContractAssertWithThis", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2859.TestContractAssertWithThis);
            QUnit.test("#2871 - TestCloneOnAssignment", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2871.TestCloneOnAssignment);
            QUnit.test("#2874 - TestExternalOverriding", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2874.TestExternalOverriding);
            QUnit.test("#2886 - Test2DArrayDefValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2886.Test2DArrayDefValue);
            QUnit.test("#2898 - TestCreateDelegate", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2898.TestCreateDelegate);
            QUnit.test("#2898 - TestCreateDelegateReflection", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2898_2.TestCreateDelegateReflection);
            QUnit.test("#2899 - TestDelegateCombining", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2899.TestDelegateCombining);
            QUnit.test("#2901 - TestDelegateRemoving", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2901.TestDelegateRemoving);
            QUnit.test("#2903 - TestGetInvocationList", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2903.TestGetInvocationList);
            QUnit.test("#2904 - TestGetInvocationList", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2904.TestGetInvocationList);
            QUnit.test("#2911 - TestGenericHtmlClass", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2911.TestGenericHtmlClass);
            QUnit.test("#2915 - TestLocalesWithoutColonInTime", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2915.TestLocalesWithoutColonInTime);
            QUnit.test("#2916 - TestIndexerClone", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2916.TestIndexerClone);
            QUnit.test("#381 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge381.TestUseCase);
            QUnit.test("#447 - CheckInlineExpression", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge447.CheckInlineExpression);
            QUnit.test("#447 - CheckInlineCalls", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge447.CheckInlineCalls);
            QUnit.test("#472 - Test", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge472.Test);
            QUnit.test("#479 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge479.TestUseCase);
            QUnit.test("#483 - TestPropertyWithNameSameAsType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge483.TestPropertyWithNameSameAsType);
            QUnit.test("#485 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge485.TestUseCase);
            QUnit.test("#495 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge495.TestUseCase);
            QUnit.test("#502 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge502.TestUseCase);
            QUnit.test("#503 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge503.TestUseCase);
            QUnit.test("#508 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge508.TestUseCase);
            QUnit.test("#514 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge514.TestUseCase);
            QUnit.test("#514 - TestRelated", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge514.TestRelated);
            QUnit.test("#520 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge520.TestUseCase);
            QUnit.test("#522 - TestUseCase1", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge522.TestUseCase1);
            QUnit.test("#522 - TestUseCase2", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge522.TestUseCase2);
            QUnit.test("#532 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge532.TestUseCase);
            QUnit.test("#537 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge537.TestUseCase);
            QUnit.test("#538 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge538.TestUseCase);
            QUnit.test("#546 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge546.TestUseCase);
            QUnit.test("#546 - TestRelated", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge546.TestRelated);
            QUnit.test("#548 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge548.TestUseCase);
            QUnit.test("#549 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge549.TestUseCase);
            QUnit.test("#550 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge550.TestUseCase);
            QUnit.test("#554 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge554.TestUseCase);
            QUnit.test("#555 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge555.TestUseCase);
            QUnit.test("#558 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge558.TestUseCase);
            QUnit.test("#559 - TestUseCase1", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge559.TestUseCase1);
            QUnit.test("#559 - TestUseCase2", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge559.TestUseCase2);
            QUnit.test("#559 - TestUseCase3", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge559.TestUseCase3);
            QUnit.test("#563 - TesForeach", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge563.TesForeach);
            QUnit.test("#563 - TesFor", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge563.TesFor);
            QUnit.test("#566 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge566.TestUseCase);
            QUnit.test("#572 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge572.TestUseCase);
            QUnit.test("#577 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge577.TestUseCase);
            QUnit.test("#578 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge578.TestUseCase);
            QUnit.test("#580 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge580.TestUseCase);
            QUnit.test("#582 - TestAddTimeSpan", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582.TestAddTimeSpan);
            QUnit.test("#582 - TestAddTicks", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582.TestAddTicks);
            QUnit.test("#582 - TestTicks", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582.TestTicks);
            QUnit.test("#582 - TestSubtractTimeSpan", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582.TestSubtractTimeSpan);
            QUnit.test("#582 - TestTimeOfDay", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582.TestTimeOfDay);
            QUnit.test("#583 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge583.TestUseCase);
            QUnit.test("#586 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge586.TestUseCase);
            QUnit.test("#588 - TestUseCase1", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge588.TestUseCase1);
            QUnit.test("#588 - TestUseCase2", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge588C.TestUseCase2);
            QUnit.test("#592 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge592.TestUseCase);
            QUnit.test("#595 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge595.TestUseCase);
            QUnit.test("#597 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge597.TestUseCase);
            QUnit.test("#603 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge603.TestUseCase);
            QUnit.test("#603 - TestRelated", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge603.TestRelated);
            QUnit.test("#606 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge606.TestUseCase);
            QUnit.test("#607 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge607.TestUseCase);
            QUnit.test("#608 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge608.TestUseCase);
            QUnit.test("#615 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge615.TestUseCase);
            QUnit.test("#623 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge623.TestUseCase);
            QUnit.test("#625 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge625.TestUseCase);
            QUnit.test("#634 - TestUseCase1", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge634.TestUseCase1);
            QUnit.test("#634 - TestUseCase2", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge634.TestUseCase2);
            QUnit.test("#635 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge635.TestUseCase);
            QUnit.test("#637 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge637.TestUseCase);
            QUnit.test("#647 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge647.TestUseCase);
            QUnit.test("#648 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge648.TestUseCase);
            QUnit.test("#652 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge652.TestUseCase);
            QUnit.test("#655 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge655.TestUseCase);
            QUnit.test("#658 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge658.TestUseCase);
            QUnit.test("#660 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge660.TestUseCase);
            QUnit.test("#661 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge661.TestUseCase);
            QUnit.test("#664 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge664.TestUseCase);
            QUnit.test("#666 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge666.TestUseCase);
            QUnit.test("#671 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge671.TestUseCase);
            QUnit.test("#674 - TestUndefinedToReferenceType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge674.TestUndefinedToReferenceType);
            QUnit.test("#674 - TestUndefinedToValueType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge674.TestUndefinedToValueType);
            QUnit.test("#675 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge675.TestUseCase);
            QUnit.test("#687 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge687.TestUseCase);
            QUnit.test("#689 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge689.TestUseCase);
            QUnit.test("#690 - TestUseCaseForInstance", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge690.TestUseCaseForInstance);
            QUnit.test("#690 - TestUseCaseForStatic", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge690.TestUseCaseForStatic);
            QUnit.test("#691 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge691.TestUseCase);
            QUnit.test("#692 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge692.TestUseCase);
            QUnit.test("#693 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge693.TestUseCase);
            QUnit.test("#694 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge694.TestUseCase);
            QUnit.test("#696 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge696.TestUseCase);
            QUnit.test("#699 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge699.TestUseCase);
            QUnit.test("#706 - TestFieldPropertyWithInitializer", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge706.TestFieldPropertyWithInitializer);
            QUnit.test("#708 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge708.TestUseCase);
            QUnit.test("#721 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge721.TestUseCase);
            QUnit.test("#722 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge722.TestUseCase);
            QUnit.test("#726 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge726.TestUseCase);
            QUnit.test("# 732- TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge732.TestUseCase);
            QUnit.test("#733 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge733.TestUseCase);
            QUnit.test("#743 - TestInlineMethodsAsReference", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge743.TestInlineMethodsAsReference);
            QUnit.test("#751 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge751.TestUseCase);
            QUnit.test("#758 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge758.TestUseCase);
            QUnit.test("#760 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge760.TestUseCase);
            QUnit.test("#762 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge762.TestUseCase);
            QUnit.test("#772 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge772.TestUseCase);
            QUnit.test("#777 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge777.TestUseCase);
            QUnit.test("#782 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge782.TestUseCase);
            QUnit.test("#785 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge785.TestUseCase);
            QUnit.test("#786 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge786.TestUseCase);
            QUnit.test("#788 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge788.TestUseCase);
            QUnit.test("#789 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge789.TestUseCase);
            QUnit.test("#793 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge793.TestUseCase);
            QUnit.test("#795 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge795.TestUseCase);
            QUnit.test("#795 - TestRelated", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge795.TestRelated);
            QUnit.test("#796 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge796.TestUseCase);
            QUnit.test("#815 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge815.TestUseCase);
            QUnit.test("#816 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge816.TestUseCase);
            QUnit.test("#817 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge817.TestUseCase);
            QUnit.test("#818 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge818.TestUseCase);
            QUnit.test("#821 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge821.TestUseCase);
            QUnit.test("#823 - GetTicksReturnsCorrectValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge823.GetTicksReturnsCorrectValue);
            QUnit.test("#826 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge826.TestUseCase);
            QUnit.test("#830 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge830.TestUseCase);
            QUnit.test("#835 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge835.TestUseCase);
            QUnit.test("#841 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge841.TestUseCase);
            QUnit.test("#844 - NullableAndSimpleDateTimeToStringEquals", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge844.NullableAndSimpleDateTimeToStringEquals);
            QUnit.test("#849 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge849.TestUseCase);
            QUnit.test("#857 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge857.TestUseCase);
            QUnit.test("#861 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge861.TestUseCase);
            QUnit.test("#863 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge863.TestUseCase);
            QUnit.test("#874 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge874.TestUseCase);
            QUnit.test("#881 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge881.TestUseCase);
            QUnit.test("#882 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge882.TestUseCase);
            QUnit.test("#883 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge883.TestUseCase);
            QUnit.test("#889 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge889.TestUseCase);
            QUnit.test("#889 - TestMakeEnumerable", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge889.TestMakeEnumerable);
            QUnit.test("#892 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge892.TestUseCase);
            QUnit.test("#893 - EnumToStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge893.EnumToStringWorks);
            QUnit.test("#898 - TestDecimalConversion", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge898.TestDecimalConversion);
            QUnit.test("#898 - TestDoubleConversion", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge898.TestDoubleConversion);
            QUnit.test("#905 - DayOfWeekFixed", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge905.DayOfWeekFixed);
            QUnit.test("#906 - TestIfAsyncMethod", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge906.TestIfAsyncMethod);
            QUnit.test("#906 - TestIfElseAsyncMethod", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge906.TestIfElseAsyncMethod);
            QUnit.test("#907 - TestStringSpitWithNullParameterFixed", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge907.TestStringSpitWithNullParameterFixed);
            QUnit.test("#912 - TestAsyncMethodInBlock", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge912.TestAsyncMethodInBlock);
            QUnit.test("#913 - TestNullableDateTimeGreaterThanWorks", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge913.TestNullableDateTimeGreaterThanWorks);
            QUnit.test("#918 - TestDynamicAsyncResult", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge918.TestDynamicAsyncResult);
            QUnit.test("#922 - TestLinqDecimal", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge922.TestLinqDecimal);
            QUnit.test("#928 - TestAsyncMethod", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge928.TestAsyncMethod);
            QUnit.test("#929 - TestAsyncException", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge929.TestAsyncException);
            QUnit.test("#930 - TestAsyncException", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge930.TestAsyncException);
            QUnit.test("#933 - TestBooleanInIfStatement", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge933.TestBooleanInIfStatement);
            QUnit.test("#952 - TestDoubleMinValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge952.TestDoubleMinValue);
            QUnit.test("#968 - TestDecimalDoesNotParseIncorrectValue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge968.TestDecimalDoesNotParseIncorrectValue);
            QUnit.test("#968 - TestDecimalParsesCorrectValues", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge968.TestDecimalParsesCorrectValues);
            QUnit.test("#975 - TestCastToLongWorksForBigNumberInIE", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge975.TestCastToLongWorksForBigNumberInIE);
            QUnit.test("#989 - DateTimeToISOStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge989.DateTimeToISOStringWorks);
            QUnit.test("#989 - DateToISOStringWorks", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge989.DateToISOStringWorks);
            QUnit.test("#991 - TestMultiplyAssignment", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge991.TestMultiplyAssignment);
            QUnit.test("#997 - TestConvertAllForIntList", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge997.TestConvertAllForIntList);
            QUnit.test("#997 - TestConvertAllForNullConverter", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge997.TestConvertAllForNullConverter);
            QUnit.test("#999 - TestNestedLambdasToLifting", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge999.TestNestedLambdasToLifting);
            QUnit.test("#999 - TestNestedLambdasToLiftingInForeach", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge999_1.TestNestedLambdasToLiftingInForeach);
            QUnit.test("#1122 - TestClippingInDefaultOverflowMode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122.TestClippingInDefaultOverflowMode);
            QUnit.test("#1122 - TestIntegerDivisionInDefaultMode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122.TestIntegerDivisionInDefaultMode);
            QUnit.test("#1122 - TestInfinityCastDefaultOverflowMode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122.TestInfinityCastDefaultOverflowMode);
            QUnit.test("#1122 - TestInfinityCastWithNullable1DefaultOverflowMode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122.TestInfinityCastWithNullable1DefaultOverflowMode);
            QUnit.test("#1122 - TestInfinityCastWithNullable2DefaultOverflowMode", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122.TestInfinityCastWithNullable2DefaultOverflowMode);
            QUnit.test("#2460 - TestSequenceInheritance", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N2460.TestSequenceInheritance);
            QUnit.test("#169", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N169);
            QUnit.test("#240", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N240);
            QUnit.test("#264", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N264);
            QUnit.test("#266", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N266);
            QUnit.test("#272", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N272);
            QUnit.test("#273", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N273);
            QUnit.test("#277", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N277);
            QUnit.test("#294", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N294);
            QUnit.test("#304", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N304);
            QUnit.test("#305", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N305);
            QUnit.test("#306", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N306);
            QUnit.test("#329", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N329);
            QUnit.test("#335", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N335);
            QUnit.test("#336", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N336);
            QUnit.test("#337", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N337);
            QUnit.test("#338", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N338);
            QUnit.test("#339", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N339);
            QUnit.test("#340", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N340);
            QUnit.test("#341", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N341);
            QUnit.test("#342", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N342);
            QUnit.test("#349", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N349);
            QUnit.test("#377", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N377);
            QUnit.test("#383", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N383);
            QUnit.test("#393", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N393);
            QUnit.test("#395", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N395);
            QUnit.test("#406", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N406);
            QUnit.test("#407", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N407);
            QUnit.test("#409", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N409);
            QUnit.test("#410", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N410);
            QUnit.test("#418", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N418);
            QUnit.test("#422", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N422);
            QUnit.test("#428", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N428);
            QUnit.test("#435", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N435);
            QUnit.test("#436", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N436);
            QUnit.test("#438", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N438);
            QUnit.test("#439", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N439);
            QUnit.test("#442", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N442);
            QUnit.test("#460", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N460);
            QUnit.test("#467", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N467);
            QUnit.test("#469", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N469);
            QUnit.test("#470", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N470);
            QUnit.test("#499", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues.N499);
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge069", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge069)],
        statics: {
            methods: {
                ThisKeywordInStructConstructorWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge069).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge069, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ThisKeywordInStructConstructorWorks()", $t.Line = "22", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge069.ThisKeywordInStructConstructorWorks();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge069", $t.File = "Batch3\\BridgeIssues\\0100\\N069.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1000", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1000)],
        statics: {
            methods: {
                TestStaticViaChild: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1000).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1000, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStaticViaChild()", $t.Line = "22", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1000.TestStaticViaChild();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1000", $t.File = "Batch3\\BridgeIssues\\1000\\N1000.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1001", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001)],
        statics: {
            methods: {
                TestDefaultValues: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1001, 4, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDefaultValues()", $t.Line = "29", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001.TestDefaultValues();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001", $t.File = "Batch3\\BridgeIssues\\1000\\N1001.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1003", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1003)],
        statics: {
            methods: {
                TestGenericLambdasToLifting: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1003).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1003, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGenericLambdasToLifting()", $t.Line = "26", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1003.TestGenericLambdasToLifting();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1003", $t.File = "Batch3\\BridgeIssues\\1000\\N1003.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1012", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012)],
        statics: {
            methods: {
                TestSleepZero: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1012, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestSleepZero()", $t.Line = "16", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012.TestSleepZero();
                },
                TestSleepInt: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1012, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestSleepInt()", $t.Line = "33", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012.TestSleepInt();
                },
                TestSleepTimeSpan: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1012, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestSleepTimeSpan()", $t.Line = "50", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012.TestSleepTimeSpan();
                },
                TestSleepThrows: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1012, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestSleepThrows()", $t.Line = "67", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012.TestSleepThrows();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012", $t.File = "Batch3\\BridgeIssues\\1000\\N1012.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1020", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020)],
        statics: {
            methods: {
                TestFlagEnumWithReference: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1020, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestFlagEnumWithReference()", $t.Line = "26", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020.TestFlagEnumWithReference();
                },
                TestEnumWithReference: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1020, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestEnumWithReference()", $t.Line = "32", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020.TestEnumWithReference();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020", $t.File = "Batch3\\BridgeIssues\\1000\\N1020.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1024", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1024)],
        statics: {
            methods: {
                TestConstructorOptionalParameter: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1024).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1024, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestConstructorOptionalParameter()", $t.Line = "32", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1024.TestConstructorOptionalParameter();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1024", $t.File = "Batch3\\BridgeIssues\\1000\\N1024.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025)],
        statics: {
            methods: {
                TestC1: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestC1()", $t.Line = "321", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestC1();
                },
                TestC2: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestC2()", $t.Line = "335", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestC2();
                },
                TestC3: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestC3()", $t.Line = "349", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestC3();
                },
                TestI3: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestI3()", $t.Line = "372", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestI3();
                },
                TestI4: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestI4()", $t.Line = "388", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestI4();
                },
                TestI5: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestI5()", $t.Line = "398", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestI5();
                },
                TestI6: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestI6()", $t.Line = "409", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestI6();
                },
                TestI7: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestI7()", $t.Line = "423", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestI7();
                },
                TestI8: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestI8()", $t.Line = "443", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestI8();
                },
                TestI10: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestI10()", $t.Line = "466", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestI10();
                },
                TestI10_1: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestI10_1()", $t.Line = "485", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestI10_1();
                },
                TestI10_2: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestI10_2()", $t.Line = "504", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestI10_2();
                },
                TestI11: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestI11()", $t.Line = "545", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestI11();
                },
                TestI11_1: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestI11_1()", $t.Line = "560", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestI11_1();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025", $t.File = "Batch3\\BridgeIssues\\1000\\N1025.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1026", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1026)],
        statics: {
            methods: {
                TestReservedWordIfRefOut: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1026).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1026, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestReservedWordIfRefOut()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1026.TestReservedWordIfRefOut();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1026", $t.File = "Batch3\\BridgeIssues\\1000\\N1026.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1027", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1027)],
        statics: {
            methods: {
                TestNonBridgeInherits: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1027).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1027, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNonBridgeInherits()", $t.Line = "56", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1027.TestNonBridgeInherits();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1027", $t.File = "Batch3\\BridgeIssues\\1000\\N1027.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1029", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1029)],
        statics: {
            methods: {
                TestNullableMethods: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1029).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1029, 6, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNullableMethods()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1029.TestNullableMethods();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1029", $t.File = "Batch3\\BridgeIssues\\1000\\N1029.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1039", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1039)],
        statics: {
            methods: {
                TestMoreThanDecimalDigitsFromTotalHours: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1039).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1039, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestMoreThanDecimalDigitsFromTotalHours()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1039.TestMoreThanDecimalDigitsFromTotalHours();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1039", $t.File = "Batch3\\BridgeIssues\\1000\\N1039.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Decimal", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal)],
        statics: {
            methods: {
                TestPropertyOps: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Decimal, 24, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestPropertyOps()", $t.Line = "163", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.TestPropertyOps();
                },
                TestIndexerOps: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Decimal, 24, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIndexerOps()", $t.Line = "193", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.TestIndexerOps();
                },
                TestDictOps: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Decimal, 24, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDictOps()", $t.Line = "224", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.TestDictOps();
                },
                TestVariableOps: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Decimal, 24, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestVariableOps()", $t.Line = "254", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.TestVariableOps();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal", $t.File = "Batch3\\BridgeIssues\\1000\\N1041.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Integer", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer)],
        statics: {
            methods: {
                TestPropertyOps: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Integer, 12, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestPropertyOps()", $t.Line = "13", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.TestPropertyOps();
                },
                TestIndexerOps: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Integer, 12, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIndexerOps()", $t.Line = "43", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.TestIndexerOps();
                },
                TestDictOps: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Integer, 12, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDictOps()", $t.Line = "74", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.TestDictOps();
                },
                TestVariableOps: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Integer, 12, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestVariableOps()", $t.Line = "104", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.TestVariableOps();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer", $t.File = "Batch3\\BridgeIssues\\1000\\N1041.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1051", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1051)],
        statics: {
            methods: {
                TestInlinePopertyWithValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1051).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1051, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInlinePopertyWithValue()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1051.TestInlinePopertyWithValue();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1051", $t.File = "Batch3\\BridgeIssues\\1000\\N1051.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1053", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1053)],
        statics: {
            methods: {
                TestFieldPropertyWithInterface: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1053).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1053, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestFieldPropertyWithInterface()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1053.TestFieldPropertyWithInterface();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1053", $t.File = "Batch3\\BridgeIssues\\1000\\N1053.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1058", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058)],
        statics: {
            methods: {
                TestNameLowerCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1058, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNameLowerCase()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058.TestNameLowerCase();
                },
                TestNameNotChanged: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1058, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNameNotChanged()", $t.Line = "18", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058.TestNameNotChanged();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058", $t.File = "Batch3\\BridgeIssues\\1000\\N1058.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1059", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059)],
        statics: {
            methods: {
                TestEnumNameModes: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1059, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestEnumNameModes()", $t.Line = "38", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059.TestEnumNameModes();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059", $t.File = "Batch3\\BridgeIssues\\1000\\N1059.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1061", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1061)],
        statics: {
            methods: {
                TestIsDigitFromLinq: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1061).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1061, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIsDigitFromLinq()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1061.TestIsDigitFromLinq();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1061", $t.File = "Batch3\\BridgeIssues\\1000\\N1061.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1065", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1065)],
        statics: {
            methods: {
                TestDecimalLongWithDictionary: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1065).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1065, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDecimalLongWithDictionary()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1065.TestDecimalLongWithDictionary();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1065", $t.File = "Batch3\\BridgeIssues\\1000\\N1065.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1066", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1066)],
        statics: {
            methods: {
                TestInlinePopertyWithValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1066).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1066, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInlinePopertyWithValue()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1066.TestInlinePopertyWithValue();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1066", $t.File = "Batch3\\BridgeIssues\\1000\\N1066.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1067", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1067)],
        statics: {
            methods: {
                TestInlinePopertyWithValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1067).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1067, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInlinePopertyWithValue()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1067.TestInlinePopertyWithValue();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1067", $t.File = "Batch3\\BridgeIssues\\1000\\N1067.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1071", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071)],
        statics: {
            methods: {
                TestParamsForCtor: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1071, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestParamsForCtor()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071.TestParamsForCtor();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071", $t.File = "Batch3\\BridgeIssues\\1000\\N1071.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1072", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1072)],
        statics: {
            methods: {
                TestNameForProperty: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1072).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1072, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNameForProperty()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1072.TestNameForProperty();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1072", $t.File = "Batch3\\BridgeIssues\\1100\\N1172.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1076", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1076)],
        statics: {
            methods: {
                TestInlineConstantAsMemberReference: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1076).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1076, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInlineConstantAsMemberReference()", $t.Line = "13", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1076.TestInlineConstantAsMemberReference();
                },
                TestInlineBridgeNumericConstantsAsMemberReference: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1076).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1076, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInlineBridgeNumericConstantsAsMemberReference()", $t.Line = "19", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1076.TestInlineBridgeNumericConstantsAsMemberReference();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1076", $t.File = "Batch3\\BridgeIssues\\1000\\N1076.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1081", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1081)],
        statics: {
            methods: {
                TestTimeSpanMsFormat: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1081).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1081, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestTimeSpanMsFormat()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1081.TestTimeSpanMsFormat();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1081", $t.File = "Batch3\\BridgeIssues\\1000\\N1081.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1083", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1083)],
        statics: {
            methods: {
                TestExternalEnum: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1083).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1083, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestExternalEnum()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1083.TestExternalEnum();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1083", $t.File = "Batch3\\BridgeIssues\\1000\\N1083.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1085", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1085)],
        statics: {
            methods: {
                TestInlineArrayExpand: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1085).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1085, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInlineArrayExpand()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1085.TestInlineArrayExpand();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1085", $t.File = "Batch3\\BridgeIssues\\1000\\N1085.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1096", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1096)],
        statics: {
            methods: {
                TestClippingIssues: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1096).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1096, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestClippingIssues()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1096.TestClippingIssues();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1096", $t.File = "Batch3\\BridgeIssues\\1000\\N1096.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1098", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1098)],
        statics: {
            methods: {
                TestInlineConstantAsMemberReference: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1098).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1098, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInlineConstantAsMemberReference()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1098.TestInlineConstantAsMemberReference();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1098", $t.File = "Batch3\\BridgeIssues\\1000\\N1098.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1103", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1103)],
        statics: {
            methods: {
                TestPropertyOps: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1103).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1103, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestPropertyOps()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1103.TestPropertyOps();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1103", $t.File = "Batch3\\BridgeIssues\\1100\\N1103.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1105", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105)],
        statics: {
            methods: {
                TestStaticInitForNestedClasses: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1105, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStaticInitForNestedClasses()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105.TestStaticInitForNestedClasses();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105", $t.File = "Batch3\\BridgeIssues\\1100\\N1105.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1109", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1109)],
        statics: {
            methods: {
                TestTemplateOnProperty: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1109).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1109, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestTemplateOnProperty()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1109.TestTemplateOnProperty();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1109", $t.File = "Batch3\\BridgeIssues\\1100\\N1109.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1110", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110)],
        statics: {
            methods: {
                TestOverflowForConditionInParenthesized: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1110, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestOverflowForConditionInParenthesized()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110.TestOverflowForConditionInParenthesized();
                },
                TestOverflowForIndexer: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1110, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestOverflowForIndexer()", $t.Line = "18", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110.TestOverflowForIndexer();
                },
                TestOverflowForBitwise: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1110, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestOverflowForBitwise()", $t.Line = "28", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110.TestOverflowForBitwise();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110", $t.File = "Batch3\\BridgeIssues\\1100\\N1110.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1120", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1120)],
        statics: {
            methods: {
                TestEnumDoesNotGenerateValuesAsPowerOfTwo: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1120).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1120, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestEnumDoesNotGenerateValuesAsPowerOfTwo()", $t.Line = "22", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1120.TestEnumDoesNotGenerateValuesAsPowerOfTwo();
                },
                TestFlagEnumDoesNotGenerateValuesAsPowerOfTwo: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1120).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1120, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestFlagEnumDoesNotGenerateValuesAsPowerOfTwo()", $t.Line = "43", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1120.TestFlagEnumDoesNotGenerateValuesAsPowerOfTwo();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1120", $t.File = "Batch3\\BridgeIssues\\1100\\N1120.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1128", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128)],
        statics: {
            methods: {
                TestNestedClassesWithInterface: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1128, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNestedClassesWithInterface()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.TestNestedClassesWithInterface();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128", $t.File = "Batch3\\BridgeIssues\\1100\\N1128.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1130", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1130)],
        statics: {
            methods: {
                TestUlongDivision: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1130).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1130, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUlongDivision()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1130.TestUlongDivision();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1130", $t.File = "Batch3\\BridgeIssues\\1100\\N1130.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1140", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1140)],
        statics: {
            methods: {
                TestDefaultNullable: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1140).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1140, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDefaultNullable()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1140.TestDefaultNullable();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1140", $t.File = "Batch3\\BridgeIssues\\1100\\N1140.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1141", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1141)],
        statics: {
            methods: {
                TestLongDivisionInfiniteLoopFixed: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1141).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1141, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLongDivisionInfiniteLoopFixed()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1141.TestLongDivisionInfiniteLoopFixed();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1141", $t.File = "Batch3\\BridgeIssues\\1100\\N1141.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1144", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1144)],
        statics: {
            methods: {
                TestStringFormat: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1144).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1144, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStringFormat()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1144.TestStringFormat();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1144", $t.File = "Batch3\\BridgeIssues\\1100\\N1144.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1146", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1146)],
        statics: {
            methods: {
                TestLongIssues: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1146).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1146, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLongIssues()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1146.TestLongIssues();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1146", $t.File = "Batch3\\BridgeIssues\\1100\\N1146.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1149", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1149)],
        statics: {
            methods: {
                TestBitwiseOrAnd: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1149).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1149, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestBitwiseOrAnd()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1149.TestBitwiseOrAnd();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1149", $t.File = "Batch3\\BridgeIssues\\1100\\N1149.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1160", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1160)],
        statics: {
            methods: {
                TestBitwiseOrAnd: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1160).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1160, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestBitwiseOrAnd()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1160.TestBitwiseOrAnd();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1160", $t.File = "Batch3\\BridgeIssues\\1100\\N1160.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1170", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170)],
        statics: {
            methods: {
                TestAsyncUsing: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1170, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncUsing()", $t.Line = "13", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170.TestAsyncUsing();
                },
                TestAsyncUsingWithException: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1170, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncUsingWithException()", $t.Line = "49", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170.TestAsyncUsingWithException();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170", $t.File = "Batch3\\BridgeIssues\\1100\\N1170.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1171", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1171)],
        statics: {
            methods: {
                TestLinqEnumerableInList: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1171).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1171, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLinqEnumerableInList()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1171.TestLinqEnumerableInList();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1171", $t.File = "Batch3\\BridgeIssues\\1100\\N1171.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1175", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1175)],
        statics: {
            methods: {
                TestNullComparing: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1175).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1175, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNullComparing()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1175.TestNullComparing();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1175", $t.File = "Batch3\\BridgeIssues\\1100\\N1175.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1176", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1176)],
        statics: {
            methods: {
                TestFunctionLifting: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1176).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1176, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestFunctionLifting()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1176.TestFunctionLifting();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1176", $t.File = "Batch3\\BridgeIssues\\1100\\N1176.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1177", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1177)],
        statics: {
            methods: {
                TestImplicitCast: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1177).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1177, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestImplicitCast()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1177.TestImplicitCast();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1177", $t.File = "Batch3\\BridgeIssues\\1100\\N1177.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1180", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1180)],
        statics: {
            methods: {
                TestStructClone: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1180).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1180, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStructClone()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1180.TestStructClone();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1180", $t.File = "Batch3\\BridgeIssues\\1100\\N1180.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1184", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1184)],
        statics: {
            methods: {
                TestGetTypeForNumberTypes: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1184).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1184, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGetTypeForNumberTypes()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1184.TestGetTypeForNumberTypes();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1184", $t.File = "Batch3\\BridgeIssues\\1100\\N1184.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1186", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1186)],
        statics: {
            methods: {
                TestLambdasInField: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1186).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1186, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLambdasInField()", $t.Line = "13", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1186.TestLambdasInField();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1186", $t.File = "Batch3\\BridgeIssues\\1100\\N1186.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1189", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1189)],
        statics: {
            methods: {
                TestTaskNumber: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1189).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1189, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestTaskNumber()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1189.TestTaskNumber();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1189", $t.File = "Batch3\\BridgeIssues\\1100\\N1189.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1193", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1193)],
        statics: {
            methods: {
                TestAssemblyVersionMarker: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1193).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1193, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAssemblyVersionMarker()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1193.TestAssemblyVersionMarker();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1193", $t.File = "Batch3\\BridgeIssues\\1100\\N1193.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1197", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1197)],
        statics: {
            methods: {
                TestGetHashCodeOnDictionary: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1197).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1197, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGetHashCodeOnDictionary()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1197.TestGetHashCodeOnDictionary();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1197", $t.File = "Batch3\\BridgeIssues\\1100\\N1197.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1199", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1199)],
        statics: {
            methods: {
                TestEventNameCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1199).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1199, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestEventNameCase()", $t.Line = "21", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1199.TestEventNameCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1199", $t.File = "Batch3\\BridgeIssues\\1100\\N1199.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202)],
        statics: {
            methods: {
                TestRefOutStaticIntField: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestRefOutStaticIntField()", $t.Line = "33", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.TestRefOutStaticIntField();
                },
                TestRefOutLocal1DIntArray: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestRefOutLocal1DIntArray()", $t.Line = "45", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.TestRefOutLocal1DIntArray();
                },
                TestRefOutStatic1DIntArray: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestRefOutStatic1DIntArray()", $t.Line = "63", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.TestRefOutStatic1DIntArray();
                },
                TestRefOutLocal2DIntArray: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestRefOutLocal2DIntArray()", $t.Line = "81", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.TestRefOutLocal2DIntArray();
                },
                TestRefOutStaticDecimalField: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestRefOutStaticDecimalField()", $t.Line = "99", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.TestRefOutStaticDecimalField();
                },
                TestRefOutLocal1DDecimalArray: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestRefOutLocal1DDecimalArray()", $t.Line = "111", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.TestRefOutLocal1DDecimalArray();
                },
                TestRefOutLocal2DDecimalArray: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestRefOutLocal2DDecimalArray()", $t.Line = "123", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.TestRefOutLocal2DDecimalArray();
                },
                TestInlineOutStaticIntField: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInlineOutStaticIntField()", $t.Line = "135", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.TestInlineOutStaticIntField();
                },
                TestInlineOutStatic1DIntArray: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInlineOutStatic1DIntArray()", $t.Line = "149", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.TestInlineOutStatic1DIntArray();
                },
                TestInlineOutLocal2DIntArray: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInlineOutLocal2DIntArray()", $t.Line = "162", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.TestInlineOutLocal2DIntArray();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202", $t.File = "Batch3\\BridgeIssues\\1200\\N1202.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1203", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1203)],
        statics: {
            methods: {
                TestLiftedFunctionsInsideInitMethod: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1203).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1203, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLiftedFunctionsInsideInitMethod()", $t.Line = "22", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1203.TestLiftedFunctionsInsideInitMethod();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1203", $t.File = "Batch3\\BridgeIssues\\1200\\N1203.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1206", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1206)],
        statics: {
            methods: {
                TestDocumentURLProperty: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1206).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1206, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDocumentURLProperty()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1206.TestDocumentURLProperty();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1206", $t.File = "Batch3\\BridgeIssues\\1200\\N1206.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1217", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217)],
        statics: {
            methods: {
                TestTypeInferenceWithNamedArguments: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1217, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestTypeInferenceWithNamedArguments()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217.TestTypeInferenceWithNamedArguments();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217", $t.File = "Batch3\\BridgeIssues\\1200\\N1217.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1219", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1219)],
        statics: {
            methods: {
                TestLongJSON: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1219).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1219, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLongJSON()", $t.Line = "25", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1219.TestLongJSON();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1219", $t.File = "Batch3\\BridgeIssues\\1200\\N1219.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge122", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge122)],
        statics: {
            methods: {
                Test2DArrayConstruction: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge122).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge122, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Test2DArrayConstruction()", $t.Line = "17", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge122.Test2DArrayConstruction();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge122", $t.File = "Batch3\\BridgeIssues\\0100\\N122.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1220", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1220)],
        statics: {
            methods: {
                TestConstInGenericClass: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1220).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1220, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestConstInGenericClass()", $t.Line = "14", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1220.TestConstInGenericClass();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1220", $t.File = "Batch3\\BridgeIssues\\1200\\N1220.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1226", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226)],
        statics: {
            methods: {
                TestSinh: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1226, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestSinh()", $t.Line = "36", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.TestSinh();
                },
                TestCosh: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1226, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCosh()", $t.Line = "51", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.TestCosh();
                },
                TestTanh: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1226, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestTanh()", $t.Line = "66", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.TestTanh();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226", $t.File = "Batch3\\BridgeIssues\\1200\\N1226.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1231", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1231)],
        statics: {
            methods: {
                TestAutoGeneratedStructMethodName: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1231).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1231, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAutoGeneratedStructMethodName()", $t.Line = "27", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1231.TestAutoGeneratedStructMethodName();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1231", $t.File = "Batch3\\BridgeIssues\\1200\\N1231.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1232", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232)],
        statics: {
            methods: {
                TestParamsInThisCtorInit: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1232, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestParamsInThisCtorInit()", $t.Line = "51", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232.TestParamsInThisCtorInit();
                },
                TestExtendedParamsInThisCtorInit: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1232, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestExtendedParamsInThisCtorInit()", $t.Line = "76", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232.TestExtendedParamsInThisCtorInit();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232", $t.File = "Batch3\\BridgeIssues\\1200\\N1232.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1249", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1249)],
        statics: {
            methods: {
                TestEnumOverflow: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1249).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1249, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestEnumOverflow()", $t.Line = "16", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1249.TestEnumOverflow();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1249", $t.File = "Batch3\\BridgeIssues\\1200\\N1249.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1253", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1253)],
        statics: {
            methods: {
                TestDefaultEnumMode: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1253).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1253, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDefaultEnumMode()", $t.Line = "18", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1253.TestDefaultEnumMode();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1253", $t.File = "Batch3\\BridgeIssues\\1200\\N1253.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1256", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256)],
        statics: {
            methods: {
                TestCaseBooleanIsLet: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1256, 7, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCaseBooleanIsLet()", $t.Line = "480", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256.TestCaseBooleanIsLet();
                },
                TestReservedFields: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1256, 67, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestReservedFields()", $t.Line = "496", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256.TestReservedFields();
                },
                TestReservedMethods: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1256, 67, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestReservedMethods()", $t.Line = "504", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256.TestReservedMethods();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256", $t.File = "Batch3\\BridgeIssues\\1200\\N1256.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1260", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260)],
        statics: {
            methods: {
                TestStringTrim: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1260, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStringTrim()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260.TestStringTrim();
                },
                TestStringTrimStart: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1260, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStringTrimStart()", $t.Line = "22", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260.TestStringTrimStart();
                },
                TestStringTrimEnd: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1260, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStringTrimEnd()", $t.Line = "35", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260.TestStringTrimEnd();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260", $t.File = "Batch3\\BridgeIssues\\1200\\N1260.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1264", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1264)],
        statics: {
            methods: {
                TestDefaultGetHashCodeIsRepeatable: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1264).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1264, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDefaultGetHashCodeIsRepeatable()", $t.Line = "16", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1264.TestDefaultGetHashCodeIsRepeatable();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1264", $t.File = "Batch3\\BridgeIssues\\1200\\N1264.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1266", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1266)],
        statics: {
            methods: {
                TestArrayToEnumerable: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1266).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1266, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestArrayToEnumerable()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1266.TestArrayToEnumerable();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1266", $t.File = "Batch3\\BridgeIssues\\1200\\N1266.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1290", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1290)],
        statics: {
            methods: {
                TestBoxedChar: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1290).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1290, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestBoxedChar()", $t.Line = "147", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1290.TestBoxedChar();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1290", $t.File = "Batch3\\BridgeIssues\\2000\\N2077.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1292", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1292)],
        statics: {
            methods: {
                TestBoxedChar: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1292).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1292, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestBoxedChar()", $t.Line = "135", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1292.TestBoxedChar();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1292", $t.File = "Batch3\\BridgeIssues\\2000\\N2077.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1296", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296)],
        statics: {
            methods: {
                TestImplicitOperator: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1296, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestImplicitOperator()", $t.Line = "95", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.TestImplicitOperator();
                },
                TestIgnoreCast: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1296, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIgnoreCast()", $t.Line = "105", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.TestIgnoreCast();
                },
                TestExternalImplicit: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1296, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestExternalImplicit()", $t.Line = "113", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.TestExternalImplicit();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296", $t.File = "Batch3\\BridgeIssues\\1200\\N1296.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1298", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1298)],
        statics: {
            methods: {
                TestLongSwitch: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1298).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1298, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLongSwitch()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1298.TestLongSwitch();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1298", $t.File = "Batch3\\BridgeIssues\\1200\\N1298.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1301", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1301)],
        statics: {
            methods: {
                TestBoxedNumbers: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1301).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1301, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestBoxedNumbers()", $t.Line = "159", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1301.TestBoxedNumbers();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1301", $t.File = "Batch3\\BridgeIssues\\2000\\N2077.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1304", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304)],
        statics: {
            methods: {
                TestWriteFormatString: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1304, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestWriteFormatString()", $t.Line = "37", $t));
                    try {
                        Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304.TestWriteFormatString();
                    }
                    finally {
                        t.TearDown();
                    }
                },
                TestWriteLineFormatString: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1304, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestWriteLineFormatString()", $t.Line = "64", $t));
                    try {
                        Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304.TestWriteLineFormatString();
                    }
                    finally {
                        t.TearDown();
                    }
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304", $t.File = "Batch3\\BridgeIssues\\1300\\N1304.cs", $t);
                }
                return this.context;
            },
            SetUp: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304.ClearOutput();
            },
            TearDown: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304.ResetOutput();
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1305", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305)],
        statics: {
            methods: {
                TestAsyncIntReturnWithAssigmentFromResult: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1305, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncIntReturnWithAssigmentFromResult()", $t.Line = "15", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.TestAsyncIntReturnWithAssigmentFromResult();
                },
                TestAsyncDataClassReturnWithAssigmentFromResult: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1305, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncDataClassReturnWithAssigmentFromResult()", $t.Line = "27", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.TestAsyncDataClassReturnWithAssigmentFromResult();
                },
                TestAsyncDataStructReturnWithAssigmentFromResult: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1305, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncDataStructReturnWithAssigmentFromResult()", $t.Line = "41", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.TestAsyncDataStructReturnWithAssigmentFromResult();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305", $t.File = "Batch3\\BridgeIssues\\1300\\N1305.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1309", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1309)],
        statics: {
            methods: {
                TestBoxedBooleans: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1309).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1309, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestBoxedBooleans()", $t.Line = "39", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1309.TestBoxedBooleans();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1309", $t.File = "Batch3\\BridgeIssues\\2000\\N2077.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1311", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1311)],
        statics: {
            methods: {
                TestEnumNumberParsing: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1311).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1311, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestEnumNumberParsing()", $t.Line = "19", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1311.TestEnumNumberParsing();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1311", $t.File = "Batch3\\BridgeIssues\\1300\\N1311.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1312", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1312)],
        statics: {
            methods: {
                TestStringFormatForEnums: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1312).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1312, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStringFormatForEnums()", $t.Line = "68", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1312.TestStringFormatForEnums();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1312", $t.File = "Batch3\\BridgeIssues\\2000\\N2077.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1313", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313)],
        statics: {
            methods: {
                TestInterfaceDefaultParameter: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1313, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInterfaceDefaultParameter()", $t.Line = "22", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313.TestInterfaceDefaultParameter();
                },
                TestClassNotDefaultParameter: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1313, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestClassNotDefaultParameter()", $t.Line = "29", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313.TestClassNotDefaultParameter();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313", $t.File = "Batch3\\BridgeIssues\\1300\\N1313.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1316", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1316, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316.TestUseCase();
                },
                TestStringConcatObject: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1316, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStringConcatObject()", $t.Line = "20", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316.TestStringConcatObject();
                },
                TestStringConcatEnumerableString: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1316, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStringConcatEnumerableString()", $t.Line = "34", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316.TestStringConcatEnumerableString();
                },
                TestStringConcatEnumerableGeneric: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1316, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStringConcatEnumerableGeneric()", $t.Line = "53", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316.TestStringConcatEnumerableGeneric();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316", $t.File = "Batch3\\BridgeIssues\\1300\\N1316.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1317", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1317)],
        statics: {
            methods: {
                TestStringFormatForEnums: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1317).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1317, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStringFormatForEnums()", $t.Line = "94", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1317.TestStringFormatForEnums();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1317", $t.File = "Batch3\\BridgeIssues\\2000\\N2077.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1328", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328)],
        statics: {
            methods: {
                TestOptionalParamsForClasses: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1328, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestOptionalParamsForClasses()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.TestOptionalParamsForClasses();
                },
                TestOptionalParamsForStructs: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1328, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestOptionalParamsForStructs()", $t.Line = "25", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.TestOptionalParamsForStructs();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328", $t.File = "Batch3\\BridgeIssues\\1300\\N1328.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1339", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339)],
        statics: {
            methods: {
                TestAccessingConstantsFromDerivedClass: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1339, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAccessingConstantsFromDerivedClass()", $t.Line = "31", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339.TestAccessingConstantsFromDerivedClass();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339", $t.File = "Batch3\\BridgeIssues\\1300\\N1339.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340)],
        statics: {
            methods: {
                TestStructGenericMembersDefaultValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStructGenericMembersDefaultValue()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestStructGenericMembersDefaultValue();
                },
                TestStructTwoGenericMembersDefaultValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStructTwoGenericMembersDefaultValue()", $t.Line = "52", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestStructTwoGenericMembersDefaultValue();
                },
                TestClassGenericMembersDefaultValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestClassGenericMembersDefaultValue()", $t.Line = "71", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestClassGenericMembersDefaultValue();
                },
                TestClassTwoGenericMembersDefaultValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestClassTwoGenericMembersDefaultValue()", $t.Line = "114", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestClassTwoGenericMembersDefaultValue();
                },
                TestClass1TwoGenericInheritedMembersDefaultValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestClass1TwoGenericInheritedMembersDefaultValue()", $t.Line = "133", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestClass1TwoGenericInheritedMembersDefaultValue();
                },
                TestClass2TwoGenericInheritedMembersDefaultValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestClass2TwoGenericInheritedMembersDefaultValue()", $t.Line = "152", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestClass2TwoGenericInheritedMembersDefaultValue();
                },
                TestClass3TwoGenericInheritedMembersDefaultValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestClass3TwoGenericInheritedMembersDefaultValue()", $t.Line = "161", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestClass3TwoGenericInheritedMembersDefaultValue();
                },
                TestStructStaticIntArray: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStructStaticIntArray()", $t.Line = "172", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestStructStaticIntArray();
                },
                TestStructStaticLongArray: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStructStaticLongArray()", $t.Line = "194", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestStructStaticLongArray();
                },
                TestStructStaticStringArray: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStructStaticStringArray()", $t.Line = "216", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestStructStaticStringArray();
                },
                TestStaticClassGenericMembersDefaultValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStaticClassGenericMembersDefaultValue()", $t.Line = "289", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestStaticClassGenericMembersDefaultValue();
                },
                TestStaticClassTwoGenericMembersDefaultValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStaticClassTwoGenericMembersDefaultValue()", $t.Line = "318", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestStaticClassTwoGenericMembersDefaultValue();
                },
                TestStaticClass1TwoGenericInheritedMembersDefaultValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStaticClass1TwoGenericInheritedMembersDefaultValue()", $t.Line = "331", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestStaticClass1TwoGenericInheritedMembersDefaultValue();
                },
                TestStaticClass2TwoGenericInheritedMembersDefaultValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStaticClass2TwoGenericInheritedMembersDefaultValue()", $t.Line = "344", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestStaticClass2TwoGenericInheritedMembersDefaultValue();
                },
                TestStaticClass3TwoGenericInheritedMembersDefaultValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStaticClass3TwoGenericInheritedMembersDefaultValue()", $t.Line = "351", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestStaticClass3TwoGenericInheritedMembersDefaultValue();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340", $t.File = "Batch3\\BridgeIssues\\1300\\N1340.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341)],
        statics: {
            methods: {
                TestPlainObject: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestPlainObject()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.TestPlainObject();
                },
                TestAnonymousTypeCreation: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAnonymousTypeCreation()", $t.Line = "56", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.TestAnonymousTypeCreation();
                },
                TestDiffStructHashCode: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDiffStructHashCode()", $t.Line = "99", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.TestDiffStructHashCode();
                },
                TestDiffAnonymousTypesHashCode: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDiffAnonymousTypesHashCode()", $t.Line = "112", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.TestDiffAnonymousTypesHashCode();
                },
                Test1AnonymousType: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Test1AnonymousType()", $t.Line = "149", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.Test1AnonymousType();
                },
                Test2AnonymousType: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Test2AnonymousType()", $t.Line = "164", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.Test2AnonymousType();
                },
                Test3AnonymousType: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Test3AnonymousType()", $t.Line = "179", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.Test3AnonymousType();
                },
                Test4AnonymousType: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Test4AnonymousType()", $t.Line = "194", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.Test4AnonymousType();
                },
                Test5AnonymousType: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Test5AnonymousType()", $t.Line = "209", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.Test5AnonymousType();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341", $t.File = "Batch3\\BridgeIssues\\1300\\N1341.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1343", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343)],
        statics: {
            methods: {
                TestDoubleTemplate: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1343, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDoubleTemplate()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343.TestDoubleTemplate();
                },
                TestInlineInGetHashCode: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1343, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInlineInGetHashCode()", $t.Line = "18", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343.TestInlineInGetHashCode();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343", $t.File = "Batch3\\BridgeIssues\\1300\\N1343.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1344", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1344)],
        statics: {
            methods: {
                TestLocalVariableWithNameProto: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1344).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1344, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLocalVariableWithNameProto()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1344.TestLocalVariableWithNameProto();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1344", $t.File = "Batch3\\BridgeIssues\\1300\\N1344.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1345", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1345)],
        statics: {
            methods: {
                TestBoolInConsole: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1345).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1345, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestBoolInConsole()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1345.TestBoolInConsole();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1345", $t.File = "Batch3\\BridgeIssues\\1300\\N1345.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1347", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1347)],
        statics: {
            methods: {
                TestFixed: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1347).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1347, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestFixed()", $t.Line = "200", $t));
                    t.Fixture.TestFixed();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1347", $t.File = "Batch3\\BridgeIssues\\2000\\N2077.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1348", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1348)],
        statics: {
            methods: {
                TestVoidTypeOf: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1348).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1348, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestVoidTypeOf()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1348.TestVoidTypeOf();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1348", $t.File = "Batch3\\BridgeIssues\\1300\\N1348.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1355", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1355)],
        statics: {
            methods: {
                TestLocalVariableWithNameWindow: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1355).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1355, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLocalVariableWithNameWindow()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1355.TestLocalVariableWithNameWindow();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1355", $t.File = "Batch3\\BridgeIssues\\1300\\N1355.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1357", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1357)],
        statics: {
            methods: {
                TestBoxedValueType: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1357).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1357, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestBoxedValueType()", $t.Line = "117", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1357.TestBoxedValueType();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1357", $t.File = "Batch3\\BridgeIssues\\2000\\N2077.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374)],
        statics: {
            methods: {
                TestConvertAllForIntListStaticMethod: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestConvertAllForIntListStaticMethod()", $t.Line = "28", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.TestConvertAllForIntListStaticMethod();
                },
                TestConvertAllForIntListInstanceMethod: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestConvertAllForIntListInstanceMethod()", $t.Line = "38", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.TestConvertAllForIntListInstanceMethod();
                },
                TestConvertAllForIntListLambda: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestConvertAllForIntListLambda()", $t.Line = "48", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.TestConvertAllForIntListLambda();
                },
                TestConvertAllForNullConverter: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestConvertAllForNullConverter()", $t.Line = "56", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.TestConvertAllForNullConverter();
                },
                TestConvertAllForNullArray: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestConvertAllForNullArray()", $t.Line = "66", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.TestConvertAllForNullArray();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374", $t.File = "Batch3\\BridgeIssues\\1300\\N1374.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378)],
        statics: {
            methods: {
                TestAssigmentWithMinusOperator: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAssigmentWithMinusOperator()", $t.Line = "39", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.TestAssigmentWithMinusOperator();
                },
                TestAssigmentWithPlusOperator: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAssigmentWithPlusOperator()", $t.Line = "51", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.TestAssigmentWithPlusOperator();
                },
                TestAssigmentWithOverloadMinusOperator: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAssigmentWithOverloadMinusOperator()", $t.Line = "63", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.TestAssigmentWithOverloadMinusOperator();
                },
                TestAssigmentWithOverloadPlusOperator: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAssigmentWithOverloadPlusOperator()", $t.Line = "71", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.TestAssigmentWithOverloadPlusOperator();
                },
                TestAssigmentWithConditionalPlusOperator: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAssigmentWithConditionalPlusOperator()", $t.Line = "79", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.TestAssigmentWithConditionalPlusOperator();
                },
                TestAssigmentWithConditionalMinusOperator: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAssigmentWithConditionalMinusOperator()", $t.Line = "94", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.TestAssigmentWithConditionalMinusOperator();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378", $t.File = "Batch3\\BridgeIssues\\1300\\N1378.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1379", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1379)],
        statics: {
            methods: {
                TestNanFiniteType: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1379).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1379, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNanFiniteType()", $t.Line = "19", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1379.TestNanFiniteType();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1379", $t.File = "Batch3\\BridgeIssues\\1300\\N1379.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1381", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1381)],
        statics: {
            methods: {
                TestReservedWordsUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1381).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1381, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestReservedWordsUseCase()", $t.Line = "13", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1381.TestReservedWordsUseCase();
                },
                TestReservedWordsNewBatch: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1381).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1381, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestReservedWordsNewBatch()", $t.Line = "82", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1381.TestReservedWordsNewBatch();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1381", $t.File = "Batch3\\BridgeIssues\\1300\\N1381.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1385", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1385)],
        statics: {
            methods: {
                TestIsTypedArray: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1385).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1385, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIsTypedArray()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1385.TestIsTypedArray();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1385", $t.File = "Batch3\\BridgeIssues\\1300\\N1385.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1389", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1389)],
        statics: {
            methods: {
                TestParamsIndexer: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1389).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1389, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestParamsIndexer()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1389.TestParamsIndexer();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1389", $t.File = "Batch3\\BridgeIssues\\1300\\N1389.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1390", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1390)],
        statics: {
            methods: {
                TestFieldInitializer: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1390).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1390, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestFieldInitializer()", $t.Line = "27", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1390.TestFieldInitializer();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1390", $t.File = "Batch3\\BridgeIssues\\1300\\N1390.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1391", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391)],
        statics: {
            methods: {
                TestStaticCtorOrder: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1391, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStaticCtorOrder()", $t.Line = "40", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391.TestStaticCtorOrder();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391", $t.File = "Batch3\\BridgeIssues\\1300\\N1391.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1391Ready", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391Ready)],
        statics: {
            methods: {
                TestStaticCtorOrderForClassHavingReady: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391Ready).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1391Ready, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStaticCtorOrderForClassHavingReady()", $t.Line = "56", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391Ready.TestStaticCtorOrderForClassHavingReady();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391Ready", $t.File = "Batch3\\BridgeIssues\\1300\\N1391.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1402", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1402)],
        statics: {
            methods: {
                TestLongClipping: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1402).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1402, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLongClipping()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1402.TestLongClipping();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1402", $t.File = "Batch3\\BridgeIssues\\1400\\N1402.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1410", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410)],
        statics: {
            methods: {
                TestSetterOnly: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1410, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestSetterOnly()", $t.Line = "49", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410.TestSetterOnly();
                },
                TestIndexer: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1410, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIndexer()", $t.Line = "55", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410.TestIndexer();
                },
                TestAssigmentWithOp: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1410, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAssigmentWithOp()", $t.Line = "64", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410.TestAssigmentWithOp();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410", $t.File = "Batch3\\BridgeIssues\\1400\\N1410.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1411", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411)],
        statics: {
            methods: {
                TestTemplateCtorThing: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1411, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestTemplateCtorThing()", $t.Line = "56", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411.TestTemplateCtorThing();
                },
                TestTemplateCtorDoodad: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1411, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestTemplateCtorDoodad()", $t.Line = "66", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411.TestTemplateCtorDoodad();
                },
                TestTemplateCtorGizmo: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1411, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestTemplateCtorGizmo()", $t.Line = "78", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411.TestTemplateCtorGizmo();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411", $t.File = "Batch3\\BridgeIssues\\1400\\N1411.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1428", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1428)],
        statics: {
            methods: {
                TestEqOperatorWithNull: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1428).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1428, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestEqOperatorWithNull()", $t.Line = "19", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1428.TestEqOperatorWithNull();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1428", $t.File = "Batch3\\BridgeIssues\\1400\\N1428.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1429", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1429)],
        statics: {
            methods: {
                TestEqOperatorWithNull: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1429).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1429, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestEqOperatorWithNull()", $t.Line = "21", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1429.TestEqOperatorWithNull();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1429", $t.File = "Batch3\\BridgeIssues\\1400\\N1429.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1430", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1430)],
        statics: {
            methods: {
                TestNestedNamespaceSupport: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1430).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1430, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNestedNamespaceSupport()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1430.TestNestedNamespaceSupport();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1430", $t.File = "Batch3\\BridgeIssues\\1400\\N1430.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1448", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448)],
        statics: {
            methods: {
                TestPlainForNonAnonymous: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1448, 7, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestPlainForNonAnonymous()", $t.Line = "31", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448.TestPlainForNonAnonymous();
                },
                TestObjectLiteralProperty: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1448, 7, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestObjectLiteralProperty()", $t.Line = "47", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448.TestObjectLiteralProperty();
                },
                TestToObjectLiteralAlias: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1448, 7, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestToObjectLiteralAlias()", $t.Line = "63", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448.TestToObjectLiteralAlias();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448", $t.File = "Batch3\\BridgeIssues\\1400\\N1448.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1458", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1458)],
        statics: {
            methods: {
                TestConsoleWriteLineForLong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1458).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1458, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestConsoleWriteLineForLong()", $t.Line = "35", $t));
                    try {
                        Bridge.ClientTest.Batch3.BridgeIssues.Bridge1458.TestConsoleWriteLineForLong();
                    }
                    finally {
                        t.TearDown();
                    }
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1458", $t.File = "Batch3\\BridgeIssues\\1400\\N1458.cs", $t);
                }
                return this.context;
            },
            SetUp: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1458.ClearOutput();
            },
            TearDown: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1458.ResetOutput();
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1459", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1459)],
        statics: {
            methods: {
                TestHtmlElements: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1459).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1459, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestHtmlElements()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1459.TestHtmlElements();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1459", $t.File = "Batch3\\BridgeIssues\\1400\\N1459.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1467", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1467)],
        statics: {
            methods: {
                TestForeachTypeChecking: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1467).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1467, 7, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestForeachTypeChecking()", $t.Line = "32", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1467.TestForeachTypeChecking();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1467", $t.File = "Batch3\\BridgeIssues\\1400\\N1467.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1472", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1472)],
        statics: {
            methods: {
                TestMultiplyThisInTemplate: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1472).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1472, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestMultiplyThisInTemplate()", $t.Line = "18", $t));
                    t.Fixture.TestMultiplyThisInTemplate();
                },
                TestSimpleMultipleKeyTemplate: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1472).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1472, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestSimpleMultipleKeyTemplate()", $t.Line = "26", $t));
                    t.Fixture.TestSimpleMultipleKeyTemplate();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1472", $t.File = "Batch3\\BridgeIssues\\1400\\N1472.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1476", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1476)],
        statics: {
            methods: {
                TestEscapedBrackets: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1476).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1476, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestEscapedBrackets()", $t.Line = "11", $t));
                    t.Fixture.TestEscapedBrackets();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1476", $t.File = "Batch3\\BridgeIssues\\1400\\N1476.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1480", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1480)],
        statics: {
            methods: {
                TestOverloadUnaryOperator: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1480).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1480, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestOverloadUnaryOperator()", $t.Line = "31", $t));
                    t.Fixture.TestOverloadUnaryOperator();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1480", $t.File = "Batch3\\BridgeIssues\\1400\\N1480.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1485", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1485)],
        statics: {
            methods: {
                TestConstructorName: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1485).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1485, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestConstructorName()", $t.Line = "9", $t));
                    t.Fixture.TestConstructorName();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1485", $t.File = "Batch3\\BridgeIssues\\1400\\N1485.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1486", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486)],
        statics: {
            methods: {
                TestStaticLongInitialization: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1486, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStaticLongInitialization()", $t.Line = "13", $t));
                    t.Fixture.TestStaticLongInitialization();
                },
                TestLocalLongInitialization: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1486, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLocalLongInitialization()", $t.Line = "22", $t));
                    t.Fixture.TestLocalLongInitialization();
                },
                TestStaticUlongInitialization: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1486, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStaticUlongInitialization()", $t.Line = "32", $t));
                    t.Fixture.TestStaticUlongInitialization();
                },
                TestLocalUlongInitialization: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1486, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLocalUlongInitialization()", $t.Line = "41", $t));
                    t.Fixture.TestLocalUlongInitialization();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486", $t.File = "Batch3\\BridgeIssues\\1400\\N1486.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1489", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1489)],
        statics: {
            methods: {
                TestLongEnum: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1489).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1489, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLongEnum()", $t.Line = "15", $t));
                    t.Fixture.TestLongEnum();
                },
                TestIntEnum: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1489).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1489, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIntEnum()", $t.Line = "29", $t));
                    t.Fixture.TestIntEnum();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1489", $t.File = "Batch3\\BridgeIssues\\1400\\N1489.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1490", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1490)],
        statics: {
            methods: {
                TestEnumLong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1490).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1490, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestEnumLong()", $t.Line = "19", $t));
                    t.Fixture.TestEnumLong();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1490", $t.File = "Batch3\\BridgeIssues\\1400\\N1490.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1492", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1492)],
        statics: {
            methods: {
                TestEnumLong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1492).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1492, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestEnumLong()", $t.Line = "14", $t));
                    t.Fixture.TestEnumLong();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1492", $t.File = "Batch3\\BridgeIssues\\1400\\N1492.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1493", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1493)],
        statics: {
            methods: {
                TestEnumLong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1493).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1493, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestEnumLong()", $t.Line = "14", $t));
                    t.Fixture.TestEnumLong();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1493", $t.File = "Batch3\\BridgeIssues\\1400\\N1493.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1499", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1499)],
        statics: {
            methods: {
                TestObjectStringCoalesceWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1499).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1499, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestObjectStringCoalesceWorks()", $t.Line = "9", $t));
                    t.Fixture.TestObjectStringCoalesceWorks();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1499", $t.File = "Batch3\\BridgeIssues\\1400\\N1499.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1501", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1501)],
        statics: {
            methods: {
                TestPropertyChangedEventArgs: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1501).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1501, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestPropertyChangedEventArgs()", $t.Line = "11", $t));
                    t.Fixture.TestPropertyChangedEventArgs();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1501", $t.File = "Batch3\\BridgeIssues\\1500\\N1501.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1509", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1509)],
        statics: {
            methods: {
                TestPreformanceNowIsDouble: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1509).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1509, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestPreformanceNowIsDouble()", $t.Line = "9", $t));
                    t.Fixture.TestPreformanceNowIsDouble();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1509", $t.File = "Batch3\\BridgeIssues\\1500\\N1509.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1510", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1510)],
        statics: {
            methods: {
                TestPropertyChangedEventArgs: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1510).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1510, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestPropertyChangedEventArgs()", $t.Line = "11", $t));
                    t.Fixture.TestPropertyChangedEventArgs();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1510", $t.File = "Batch3\\BridgeIssues\\1500\\N1510.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1511", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1511)],
        statics: {
            methods: {
                TestOverloadedConstructorCallWithOptionalParameters: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1511).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1511, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestOverloadedConstructorCallWithOptionalParameters()", $t.Line = "62", $t));
                    t.Fixture.TestOverloadedConstructorCallWithOptionalParameters();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1511", $t.File = "Batch3\\BridgeIssues\\1500\\N1511.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1512", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1512)],
        statics: {
            methods: {
                TestParametersReservedNames: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1512).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1512, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestParametersReservedNames()", $t.Line = "19", $t));
                    t.Fixture.TestParametersReservedNames();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1512", $t.File = "Batch3\\BridgeIssues\\1500\\N1512.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1514", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1514)],
        statics: {
            methods: {
                TestBoxedChar: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1514).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1514, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestBoxedChar()", $t.Line = "186", $t));
                    t.Fixture.TestBoxedChar();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1514", $t.File = "Batch3\\BridgeIssues\\2000\\N2077.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1517", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1517)],
        statics: {
            methods: {
                TestEqualTuples: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1517).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1517, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestEqualTuples()", $t.Line = "10", $t));
                    t.Fixture.TestEqualTuples();
                },
                TestInequalTuples: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1517).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1517, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInequalTuples()", $t.Line = "26", $t));
                    t.Fixture.TestInequalTuples();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1517", $t.File = "Batch3\\BridgeIssues\\1500\\N1517.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1518", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1518)],
        statics: {
            methods: {
                TestDefaultConstructorForTypeParameter: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1518).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1518, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDefaultConstructorForTypeParameter()", $t.Line = "15", $t));
                    t.Fixture.TestDefaultConstructorForTypeParameter();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1518", $t.File = "Batch3\\BridgeIssues\\1500\\N1518.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1519", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1519)],
        statics: {
            methods: {
                TestRefOutLocalVars: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1519).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1519, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestRefOutLocalVars()", $t.Line = "10", $t));
                    t.Fixture.TestRefOutLocalVars();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1519", $t.File = "Batch3\\BridgeIssues\\1500\\N1519.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1520", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1520)],
        statics: {
            methods: {
                TestStaticDecimalInitialization: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1520).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1520, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStaticDecimalInitialization()", $t.Line = "12", $t));
                    t.Fixture.TestStaticDecimalInitialization();
                },
                TestLocalDecimalInitialization: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1520).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1520, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLocalDecimalInitialization()", $t.Line = "21", $t));
                    t.Fixture.TestLocalDecimalInitialization();
                },
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1520).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1520, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "31", $t));
                    t.Fixture.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1520", $t.File = "Batch3\\BridgeIssues\\1500\\N1520.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1521", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1521)],
        statics: {
            methods: {
                TestDecimalTrueInConditionalBlock: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1521).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1521, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDecimalTrueInConditionalBlock()", $t.Line = "11", $t));
                    t.Fixture.TestDecimalTrueInConditionalBlock();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1521", $t.File = "Batch3\\BridgeIssues\\1500\\N1521.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1522", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1522)],
        statics: {
            methods: {
                TestAssignIntToDecimal: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1522).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1522, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAssignIntToDecimal()", $t.Line = "11", $t));
                    t.Fixture.TestAssignIntToDecimal();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1522", $t.File = "Batch3\\BridgeIssues\\1500\\N1522.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1523", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1523)],
        statics: {
            methods: {
                TestAssignDecimalToInt: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1523).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1523, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAssignDecimalToInt()", $t.Line = "9", $t));
                    t.Fixture.TestAssignDecimalToInt();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1523", $t.File = "Batch3\\BridgeIssues\\1500\\N1523.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1524", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1524)],
        statics: {
            methods: {
                TestDecimalWithIntOps: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1524).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1524, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDecimalWithIntOps()", $t.Line = "9", $t));
                    t.Fixture.TestDecimalWithIntOps();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1524", $t.File = "Batch3\\BridgeIssues\\1500\\N1524.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1526", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1526)],
        statics: {
            methods: {
                TestOutInClassMembers: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1526).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1526, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestOutInClassMembers()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1526.TestOutInClassMembers();
                },
                TestRefInClassMembers: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1526).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1526, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestRefInClassMembers()", $t.Line = "47", $t));
                    t.Fixture.TestRefInClassMembers();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1526", $t.File = "Batch3\\BridgeIssues\\1500\\N1526.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1527", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1527)],
        statics: {
            methods: {
                TestScriptAttributeWithReference: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1527).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1527, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestScriptAttributeWithReference()", $t.Line = "15", $t));
                    t.Fixture.TestScriptAttributeWithReference();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1527", $t.File = "Batch3\\BridgeIssues\\1500\\N1527.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1530", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1530)],
        statics: {
            methods: {
                TestObjectLiteralPropertyImplementingInterface: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1530).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1530, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestObjectLiteralPropertyImplementingInterface()", $t.Line = "41", $t));
                    t.Fixture.TestObjectLiteralPropertyImplementingInterface();
                },
                TestObjectLiteralFieldImplementingInterface: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1530).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1530, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestObjectLiteralFieldImplementingInterface()", $t.Line = "51", $t));
                    t.Fixture.TestObjectLiteralFieldImplementingInterface();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1530", $t.File = "Batch3\\BridgeIssues\\1500\\N1530.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1533", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1533)],
        statics: {
            methods: {
                TestStringNullConcationation: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1533).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1533, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStringNullConcationation()", $t.Line = "9", $t));
                    t.Fixture.TestStringNullConcationation();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1533", $t.File = "Batch3\\BridgeIssues\\1500\\N1533.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1535", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1535)],
        statics: {
            methods: {
                TestAsyncLambdaAssignmentExpression: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1535).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1535, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncLambdaAssignmentExpression()", $t.Line = "13", $t));
                    t.Fixture.TestAsyncLambdaAssignmentExpression();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1535", $t.File = "Batch3\\BridgeIssues\\1500\\N1535.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1536", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1536)],
        statics: {
            methods: {
                TestEventNameConflict: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1536).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1536, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestEventNameConflict()", $t.Line = "30", $t));
                    t.Fixture.TestEventNameConflict();
                },
                TestPropertyNameConflict: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1536).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1536, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestPropertyNameConflict()", $t.Line = "39", $t));
                    t.Fixture.TestPropertyNameConflict();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1536", $t.File = "Batch3\\BridgeIssues\\1500\\N1536.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1538", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1538)],
        statics: {
            methods: {
                TestOutParameterInIndexer: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1538).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1538, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestOutParameterInIndexer()", $t.Line = "9", $t));
                    t.Fixture.TestOutParameterInIndexer();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1538", $t.File = "Batch3\\BridgeIssues\\1500\\N1538.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge156", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge156)],
        statics: {
            methods: {
                TestArrayIndexOutOfRangeException: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge156).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge156, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestArrayIndexOutOfRangeException()", $t.Line = "13", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge156.TestArrayIndexOutOfRangeException();
                },
                Test1DArrayIndexOutOfRangeExceptionIndexAsVariable: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge156).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge156, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Test1DArrayIndexOutOfRangeExceptionIndexAsVariable()", $t.Line = "61", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge156.Test1DArrayIndexOutOfRangeExceptionIndexAsVariable();
                },
                Test2DArrayIndexOutOfRangeExceptionIndexAsVariable: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge156).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge156, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Test2DArrayIndexOutOfRangeExceptionIndexAsVariable()", $t.Line = "82", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge156.Test2DArrayIndexOutOfRangeExceptionIndexAsVariable();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge156", $t.File = "Batch3\\BridgeIssues\\0100\\N156.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1566", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1566)],
        statics: {
            methods: {
                TestMathLog10: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1566).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1566, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestMathLog10()", $t.Line = "13", $t));
                    t.Fixture.TestMathLog10();
                },
                TestMathLogWithBase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1566).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1566, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestMathLogWithBase()", $t.Line = "24", $t));
                    t.Fixture.TestMathLogWithBase();
                },
                TestMathLog: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1566).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1566, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestMathLog()", $t.Line = "36", $t));
                    t.Fixture.TestMathLog();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1566", $t.File = "Batch3\\BridgeIssues\\1500\\N1566.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1579", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1579)],
        statics: {
            methods: {
                TestNullableDecimalToFloatDouble: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1579).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1579, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNullableDecimalToFloatDouble()", $t.Line = "12", $t));
                    t.Fixture.TestNullableDecimalToFloatDouble();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1579", $t.File = "Batch3\\BridgeIssues\\1500\\N1579.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1599", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1599)],
        statics: {
            methods: {
                TestCustomIEnumerableForStringJoin: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1599).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1599, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCustomIEnumerableForStringJoin()", $t.Line = "12", $t));
                    t.Fixture.TestCustomIEnumerableForStringJoin();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1599", $t.File = "Batch3\\BridgeIssues\\1500\\N1599.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1600", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1600)],
        statics: {
            methods: {
                TestPositiveInfinity: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1600).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1600, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestPositiveInfinity()", $t.Line = "14", $t));
                    t.Fixture.TestPositiveInfinity();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1600", $t.File = "Batch3\\BridgeIssues\\1600\\N1600.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1627", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1627)],
        statics: {
            methods: {
                ForeachWithListItemCallbackWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1627).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1627, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "ForeachWithListItemCallbackWorks()", $t.Line = "13", $t));
                    t.Fixture.ForeachWithListItemCallbackWorks();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1627", $t.File = "Batch3\\BridgeIssues\\1600\\N1627.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1641", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1641)],
        statics: {
            methods: {
                TestOutInAsync: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1641).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1641, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestOutInAsync()", $t.Line = "14", $t));
                    t.Fixture.TestOutInAsync();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1641", $t.File = "Batch3\\BridgeIssues\\1600\\N1641.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1653", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1653)],
        statics: {
            methods: {
                TestLiftedFunctionsWithGenericInvocation: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1653).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1653, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLiftedFunctionsWithGenericInvocation()", $t.Line = "38", $t));
                    t.Fixture.TestLiftedFunctionsWithGenericInvocation();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1653", $t.File = "Batch3\\BridgeIssues\\1600\\N1653.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1684", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1684)],
        statics: {
            methods: {
                TestStaticInitializationForGenericClass: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1684).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1684, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStaticInitializationForGenericClass()", $t.Line = "36", $t));
                    t.Fixture.TestStaticInitializationForGenericClass();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1684", $t.File = "Batch3\\BridgeIssues\\1600\\N1684.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1698", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1698)],
        statics: {
            methods: {
                TestReflectionForNativeTypes: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1698).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1698, 14, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestReflectionForNativeTypes()", $t.Line = "39", $t));
                    try {
                        t.Fixture.TestReflectionForNativeTypes();
                    }
                    finally {
                        t.TearDown();
                    }
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1698", $t.File = "Batch3\\BridgeIssues\\1600\\N1698.cs", $t);
                }
                return this.context;
            },
            SetUp: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1698.ClearOutput();
            },
            TearDown: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1698.ResetOutput();
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1700", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1700)],
        statics: {
            methods: {
                TestULongAsIndex: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1700).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1700, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestULongAsIndex()", $t.Line = "9", $t));
                    t.Fixture.TestULongAsIndex();
                },
                TestLongAsIndex: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1700).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1700, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLongAsIndex()", $t.Line = "22", $t));
                    t.Fixture.TestLongAsIndex();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1700", $t.File = "Batch3\\BridgeIssues\\1700\\N1700.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1702", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1702)],
        statics: {
            methods: {
                TestFieldWithItemName: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1702).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1702, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestFieldWithItemName()", $t.Line = "63", $t));
                    t.Fixture.TestFieldWithItemName();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1702", $t.File = "Batch3\\BridgeIssues\\1700\\N1702.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1704", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1704)],
        statics: {
            methods: {
                TestBaseMethodWithOptionalParams: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1704).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1704, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestBaseMethodWithOptionalParams()", $t.Line = "28", $t));
                    t.Fixture.TestBaseMethodWithOptionalParams();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1704", $t.File = "Batch3\\BridgeIssues\\1700\\N1704.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1709", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1709)],
        statics: {
            methods: {
                TestGenericMethodWithoutTypeArgument: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1709).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1709, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGenericMethodWithoutTypeArgument()", $t.Line = "17", $t));
                    t.Fixture.TestGenericMethodWithoutTypeArgument();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1709", $t.File = "Batch3\\BridgeIssues\\1700\\N1709.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1711", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1711)],
        statics: {
            methods: {
                TestImplicitOperatorOrder: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1711).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1711, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestImplicitOperatorOrder()", $t.Line = "40", $t));
                    t.Fixture.TestImplicitOperatorOrder();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1711", $t.File = "Batch3\\BridgeIssues\\1700\\N1711.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1712", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712)],
        statics: {
            methods: {
                TestCollectionAddWithExtensionMethod: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1712, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCollectionAddWithExtensionMethod()", $t.Line = "64", $t));
                    t.Fixture.TestCollectionAddWithExtensionMethod();
                },
                TestCollectionWithAdd_BeforeCS6: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1712, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCollectionWithAdd_BeforeCS6()", $t.Line = "76", $t));
                    t.Fixture.TestCollectionWithAdd_BeforeCS6();
                },
                TestCollectionWithAdd_CS6: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1712, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCollectionWithAdd_CS6()", $t.Line = "85", $t));
                    t.Fixture.TestCollectionWithAdd_CS6();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712", $t.File = "Batch3\\BridgeIssues\\1700\\N1712.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1713", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713)],
        statics: {
            methods: {
                TestOverloadResolution: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1713, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestOverloadResolution()", $t.Line = "32", $t));
                    t.Fixture.TestOverloadResolution();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713", $t.File = "Batch3\\BridgeIssues\\1700\\N1713.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1713MSDN", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN)],
        statics: {
            methods: {
                TestOverloadResolutionMSDN1: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1713MSDN, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestOverloadResolutionMSDN1()", $t.Line = "60", $t));
                    t.Fixture.TestOverloadResolutionMSDN1();
                },
                TestOverloadResolutionMSDN2: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1713MSDN, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestOverloadResolutionMSDN2()", $t.Line = "93", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.TestOverloadResolutionMSDN2();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN", $t.File = "Batch3\\BridgeIssues\\1700\\N1713.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1715", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1715)],
        statics: {
            methods: {
                TestCollectionInitializerWithAdd: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1715).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1715, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCollectionInitializerWithAdd()", $t.Line = "35", $t));
                    t.Fixture.TestCollectionInitializerWithAdd();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1715", $t.File = "Batch3\\BridgeIssues\\1700\\N1715.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1721", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1721)],
        statics: {
            methods: {
                TestDelegateEquals: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1721).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1721, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDelegateEquals()", $t.Line = "19", $t));
                    t.Fixture.TestDelegateEquals();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1721", $t.File = "Batch3\\BridgeIssues\\1700\\N1721.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1722", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1722)],
        statics: {
            methods: {
                TestDelegateCreationOfGenericMethods: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1722).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1722, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDelegateCreationOfGenericMethods()", $t.Line = "27", $t));
                    t.Fixture.TestDelegateCreationOfGenericMethods();
                },
                TestDelegateCreationOfGenericMethodsWithLambda: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1722).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1722, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDelegateCreationOfGenericMethodsWithLambda()", $t.Line = "34", $t));
                    t.Fixture.TestDelegateCreationOfGenericMethodsWithLambda();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1722", $t.File = "Batch3\\BridgeIssues\\1700\\N1722.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1735", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1735)],
        statics: {
            methods: {
                TestTryGetValueOutDelegateParameter: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1735).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1735, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestTryGetValueOutDelegateParameter()", $t.Line = "14", $t));
                    t.Fixture.TestTryGetValueOutDelegateParameter();
                },
                TestOutDelegateParameter: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1735).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1735, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestOutDelegateParameter()", $t.Line = "30", $t));
                    t.Fixture.TestOutDelegateParameter();
                },
                TestReferenceDelegateParameter: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1735).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1735, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestReferenceDelegateParameter()", $t.Line = "45", $t));
                    t.Fixture.TestReferenceDelegateParameter();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1735", $t.File = "Batch3\\BridgeIssues\\1700\\N1735.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1737", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1737)],
        statics: {
            methods: {
                TestTypeFullName: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1737).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1737, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestTypeFullName()", $t.Line = "17", $t));
                    t.Fixture.TestTypeFullName();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1737", $t.File = "Batch3\\BridgeIssues\\1700\\N1737.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1741", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1741)],
        statics: {
            methods: {
                TestNumbersHashCode: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1741).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1741, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNumbersHashCode()", $t.Line = "9", $t));
                    t.Fixture.TestNumbersHashCode();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1741", $t.File = "Batch3\\BridgeIssues\\1700\\N1741.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1744", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1744)],
        statics: {
            methods: {
                TestMethodInvocationWithParams: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1744).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1744, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestMethodInvocationWithParams()", $t.Line = "9", $t));
                    t.Fixture.TestMethodInvocationWithParams();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1744", $t.File = "Batch3\\BridgeIssues\\1700\\N1744.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1754", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1754)],
        statics: {
            methods: {
                TestAllUpperCaseNames: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1754).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1754, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAllUpperCaseNames()", $t.Line = "73", $t));
                    t.Fixture.TestAllUpperCaseNames();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1754", $t.File = "Batch3\\BridgeIssues\\1700\\N1754.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1767", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1767)],
        statics: {
            methods: {
                TestBaseIndexer: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1767).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1767, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestBaseIndexer()", $t.Line = "44", $t));
                    t.Fixture.TestBaseIndexer();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1767", $t.File = "Batch3\\BridgeIssues\\1700\\N1767.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1768", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1768)],
        statics: {
            methods: {
                TestImplicitImplementation: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1768).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1768, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestImplicitImplementation()", $t.Line = "226", $t));
                    t.Fixture.TestImplicitImplementation();
                },
                TestExplicitImplementation: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1768).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1768, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestExplicitImplementation()", $t.Line = "235", $t));
                    t.Fixture.TestExplicitImplementation();
                },
                TestListImplicitImplementation: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1768).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1768, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestListImplicitImplementation()", $t.Line = "249", $t));
                    t.Fixture.TestListImplicitImplementation();
                },
                TestListExplicitImplementation: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1768).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1768, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestListExplicitImplementation()", $t.Line = "266", $t));
                    t.Fixture.TestListExplicitImplementation();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1768", $t.File = "Batch3\\BridgeIssues\\1700\\N1768.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1775", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1775)],
        statics: {
            methods: {
                TestSumForEmpty: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1775).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1775, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestSumForEmpty()", $t.Line = "13", $t));
                    t.Fixture.TestSumForEmpty();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1775", $t.File = "Batch3\\BridgeIssues\\1700\\N1775.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1776", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1776)],
        statics: {
            methods: {
                TestTupleHashCode: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1776).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1776, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestTupleHashCode()", $t.Line = "12", $t));
                    t.Fixture.TestTupleHashCode();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1776", $t.File = "Batch3\\BridgeIssues\\1700\\N1776.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1787", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1787)],
        statics: {
            methods: {
                TestNamedParams: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1787).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1787, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNamedParams()", $t.Line = "40", $t));
                    t.Fixture.TestNamedParams();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1787", $t.File = "Batch3\\BridgeIssues\\1700\\N1787.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1802", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1802)],
        statics: {
            methods: {
                TestReservedWordsAsMethodName: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1802).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1802, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestReservedWordsAsMethodName()", $t.Line = "394", $t));
                    t.Fixture.TestReservedWordsAsMethodName();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1802", $t.File = "Batch3\\BridgeIssues\\1800\\N1802.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1803", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1803)],
        statics: {
            methods: {
                TestCollectionInitializerWithStaticMember: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1803).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1803, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCollectionInitializerWithStaticMember()", $t.Line = "41", $t));
                    t.Fixture.TestCollectionInitializerWithStaticMember();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1803", $t.File = "Batch3\\BridgeIssues\\1800\\N1803.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1804", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1804)],
        statics: {
            methods: {
                TestStructClone: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1804).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1804, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStructClone()", $t.Line = "25", $t));
                    t.Fixture.TestStructClone();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1804", $t.File = "Batch3\\BridgeIssues\\1800\\N1804.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1810", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1810)],
        statics: {
            methods: {
                TestInterfaceIndexersAndCopyToAndIsReadOnly: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1810).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1810, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInterfaceIndexersAndCopyToAndIsReadOnly()", $t.Line = "15", $t));
                    t.Fixture.TestInterfaceIndexersAndCopyToAndIsReadOnly();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1810", $t.File = "Batch3\\BridgeIssues\\1800\\N1810.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1812", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1812)],
        statics: {
            methods: {
                TestDoubleConversion: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1812).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1812, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDoubleConversion()", $t.Line = "39", $t));
                    t.Fixture.TestDoubleConversion();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1812", $t.File = "Batch3\\BridgeIssues\\1800\\N1812.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1813", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1813)],
        statics: {
            methods: {
                TestAddStaticMethod: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1813).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1813, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAddStaticMethod()", $t.Line = "21", $t));
                    t.Fixture.TestAddStaticMethod();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1813", $t.File = "Batch3\\BridgeIssues\\1800\\N1813.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1814", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1814)],
        statics: {
            methods: {
                TestNamespaceConflictResolution: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1814).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1814, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNamespaceConflictResolution()", $t.Line = "30", $t));
                    t.Fixture.TestNamespaceConflictResolution();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1814", $t.File = "Batch3\\BridgeIssues\\1800\\N1814.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1819", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1819)],
        statics: {
            methods: {
                TestObjectLiteralWithInheritance: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1819).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1819, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestObjectLiteralWithInheritance()", $t.Line = "26", $t));
                    t.Fixture.TestObjectLiteralWithInheritance();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1819", $t.File = "Batch3\\BridgeIssues\\1800\\N1819.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1821", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1821)],
        statics: {
            methods: {
                TestInterfaceMember1: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1821).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1821, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInterfaceMember1()", $t.Line = "81", $t));
                    t.Fixture.TestInterfaceMember1();
                },
                TestInterfaceMember2: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1821).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1821, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInterfaceMember2()", $t.Line = "89", $t));
                    t.Fixture.TestInterfaceMember2();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1821", $t.File = "Batch3\\BridgeIssues\\1800\\N1821.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1832", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1832)],
        statics: {
            methods: {
                TestInitWithTempVars: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1832).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1832, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInitWithTempVars()", $t.Line = "16", $t));
                    t.Fixture.TestInitWithTempVars();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1832", $t.File = "Batch3\\BridgeIssues\\1800\\N1832.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1833", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1833)],
        statics: {
            methods: {
                TestInheritedPropertyInLiteral: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1833).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1833, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInheritedPropertyInLiteral()", $t.Line = "20", $t));
                    t.Fixture.TestInheritedPropertyInLiteral();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1833", $t.File = "Batch3\\BridgeIssues\\1800\\N1833.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1834", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1834)],
        statics: {
            methods: {
                TestIgnoreGenericInterface: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1834).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1834, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIgnoreGenericInterface()", $t.Line = "29", $t));
                    t.Fixture.TestIgnoreGenericInterface();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1834", $t.File = "Batch3\\BridgeIssues\\1800\\N1834.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1835", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1835)],
        statics: {
            methods: {
                TestGenericMethodWithAnonTypeArg: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1835).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1835, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGenericMethodWithAnonTypeArg()", $t.Line = "14", $t));
                    t.Fixture.TestGenericMethodWithAnonTypeArg();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1835", $t.File = "Batch3\\BridgeIssues\\1800\\N1835.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1842", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1842)],
        statics: {
            methods: {
                TestTypeOfConversion: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1842).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1842, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestTypeOfConversion()", $t.Line = "25", $t));
                    t.Fixture.TestTypeOfConversion();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1842", $t.File = "Batch3\\BridgeIssues\\1800\\N1842.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1845", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1845)],
        statics: {
            methods: {
                TestCtorMemberName: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1845).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1845, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCtorMemberName()", $t.Line = "56", $t));
                    t.Fixture.TestCtorMemberName();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1845", $t.File = "Batch3\\BridgeIssues\\1800\\N1845.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1846", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1846)],
        statics: {
            methods: {
                TestImplicitOperatorInForeachLoop: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1846).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1846, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestImplicitOperatorInForeachLoop()", $t.Line = "22", $t));
                    t.Fixture.TestImplicitOperatorInForeachLoop();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1846", $t.File = "Batch3\\BridgeIssues\\1800\\N1846.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1847", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1847)],
        statics: {
            methods: {
                TestActivatorCreateInstanceCallProtectedConstructor: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1847).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1847, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestActivatorCreateInstanceCallProtectedConstructor()", $t.Line = "27", $t));
                    t.Fixture.TestActivatorCreateInstanceCallProtectedConstructor();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1847", $t.File = "Batch3\\BridgeIssues\\1800\\N1847.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1848", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1848)],
        statics: {
            methods: {
                TestExternalInterfaceProperty: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1848).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1848, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestExternalInterfaceProperty()", $t.Line = "29", $t));
                    t.Fixture.TestExternalInterfaceProperty();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1848", $t.File = "Batch3\\BridgeIssues\\1800\\N1848.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1850", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1850)],
        statics: {
            methods: {
                TestImplicitInterface: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1850).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1850, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestImplicitInterface()", $t.Line = "25", $t));
                    t.Fixture.TestImplicitInterface();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1850", $t.File = "Batch3\\BridgeIssues\\1800\\N1850.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1852", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1852)],
        statics: {
            methods: {
                TestCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1852).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1852, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCase()", $t.Line = "39", $t));
                    t.Fixture.TestCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1852", $t.File = "Batch3\\BridgeIssues\\1800\\N1852.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1853", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1853)],
        statics: {
            methods: {
                TestContainsUseEquals: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1853).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1853, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestContainsUseEquals()", $t.Line = "24", $t));
                    t.Fixture.TestContainsUseEquals();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1853", $t.File = "Batch3\\BridgeIssues\\1800\\N1853.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1854", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1854)],
        statics: {
            methods: {
                TestCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1854).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1854, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCase()", $t.Line = "56", $t));
                    t.Fixture.TestCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1854", $t.File = "Batch3\\BridgeIssues\\1800\\N1854.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1856", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1856)],
        statics: {
            methods: {
                TestCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1856).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1856, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCase()", $t.Line = "68", $t));
                    t.Fixture.TestCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1856", $t.File = "Batch3\\BridgeIssues\\1800\\N1856.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1863", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1863)],
        statics: {
            methods: {
                TestTrueFalseOperators: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1863).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1863, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestTrueFalseOperators()", $t.Line = "77", $t));
                    t.Fixture.TestTrueFalseOperators();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1863", $t.File = "Batch3\\BridgeIssues\\1800\\N1863.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1865", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1865)],
        statics: {
            methods: {
                TestObjectLiteralInterface: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1865).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1865, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestObjectLiteralInterface()", $t.Line = "40", $t));
                    t.Fixture.TestObjectLiteralInterface();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1865", $t.File = "Batch3\\BridgeIssues\\1800\\N1865.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1869", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1869)],
        statics: {
            methods: {
                TestGenericTypeDefinition: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1869).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1869, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGenericTypeDefinition()", $t.Line = "17", $t));
                    t.Fixture.TestGenericTypeDefinition();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1869", $t.File = "Batch3\\BridgeIssues\\1800\\N1869.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1871", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1871)],
        statics: {
            methods: {
                TestErrorCommentNotThrowCompilerException: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1871).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1871, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestErrorCommentNotThrowCompilerException()", $t.Line = "21", $t));
                    t.Fixture.TestErrorCommentNotThrowCompilerException();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1871", $t.File = "Batch3\\BridgeIssues\\1800\\N1871.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1872", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1872)],
        statics: {
            methods: {
                TestAsyncWithAnonymousDelegate: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1872).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1872, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncWithAnonymousDelegate()", $t.Line = "11", $t));
                    t.Fixture.TestAsyncWithAnonymousDelegate();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1872", $t.File = "Batch3\\BridgeIssues\\1800\\N1872.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1875", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1875)],
        statics: {
            methods: {
                TestDictionaryWithLongVariableAsKey: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1875).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1875, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDictionaryWithLongVariableAsKey()", $t.Line = "15", $t));
                    t.Fixture.TestDictionaryWithLongVariableAsKey();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1875", $t.File = "Batch3\\BridgeIssues\\1800\\N1875.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1878", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1878)],
        statics: {
            methods: {
                TestSumDefaultValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1878).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1878, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestSumDefaultValue()", $t.Line = "17", $t));
                    t.Fixture.TestSumDefaultValue();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1878", $t.File = "Batch3\\BridgeIssues\\1800\\N1878.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1880", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1880)],
        statics: {
            methods: {
                TestDefaultValuesWithTemplates: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1880).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1880, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDefaultValuesWithTemplates()", $t.Line = "18", $t));
                    t.Fixture.TestDefaultValuesWithTemplates();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1880", $t.File = "Batch3\\BridgeIssues\\1800\\N1880.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1882", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1882)],
        statics: {
            methods: {
                TestGenericClassCastForArray: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1882).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1882, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGenericClassCastForArray()", $t.Line = "48", $t));
                    t.Fixture.TestGenericClassCastForArray();
                },
                TestGenericClassCastForList: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1882).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1882, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGenericClassCastForList()", $t.Line = "72", $t));
                    t.Fixture.TestGenericClassCastForList();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1882", $t.File = "Batch3\\BridgeIssues\\1800\\N1882.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1884", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1884)],
        statics: {
            methods: {
                TestCollectionInitilizers: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1884).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1884, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCollectionInitilizers()", $t.Line = "41", $t));
                    t.Fixture.TestCollectionInitilizers();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1884", $t.File = "Batch3\\BridgeIssues\\1800\\N1884.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1886", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1886)],
        statics: {
            methods: {
                TestCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1886).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1886, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCase()", $t.Line = "10", $t));
                    t.Fixture.TestCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1886", $t.File = "Batch3\\BridgeIssues\\1800\\N1886.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1892", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1892)],
        statics: {
            methods: {
                TestCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1892).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1892, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCase()", $t.Line = "83", $t));
                    t.Fixture.TestCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1892", $t.File = "Batch3\\BridgeIssues\\1800\\N1892.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1896", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1896)],
        statics: {
            methods: {
                TestHexStringToInt: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1896).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1896, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestHexStringToInt()", $t.Line = "10", $t));
                    t.Fixture.TestHexStringToInt();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1896", $t.File = "Batch3\\BridgeIssues\\1800\\N1896.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1897", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1897)],
        statics: {
            methods: {
                TestNestedNotEscapedBracketsInRegex: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1897).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1897, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNestedNotEscapedBracketsInRegex()", $t.Line = "10", $t));
                    t.Fixture.TestNestedNotEscapedBracketsInRegex();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1897", $t.File = "Batch3\\BridgeIssues\\1800\\N1897.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1899", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1899)],
        statics: {
            methods: {
                TestPropertyAndMethodNameConflict: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1899).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1899, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestPropertyAndMethodNameConflict()", $t.Line = "191", $t));
                    t.Fixture.TestPropertyAndMethodNameConflict();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1899", $t.File = "Batch3\\BridgeIssues\\1800\\N1899.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1900", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1900)],
        statics: {
            methods: {
                TestOutParamInMetadata: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1900).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1900, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestOutParamInMetadata()", $t.Line = "41", $t));
                    t.Fixture.TestOutParamInMetadata();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1900", $t.File = "Batch3\\BridgeIssues\\1900\\N1900.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1904", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1904)],
        statics: {
            methods: {
                TestDateTimeConstructorConvertsValueToMs: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1904).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1904, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDateTimeConstructorConvertsValueToMs()", $t.Line = "10", $t));
                    t.Fixture.TestDateTimeConstructorConvertsValueToMs();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1904", $t.File = "Batch3\\BridgeIssues\\1900\\N1904.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1906", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1906)],
        statics: {
            methods: {
                TestIsOperatorInaccuracy: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1906).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1906, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIsOperatorInaccuracy()", $t.Line = "9", $t));
                    t.Fixture.TestIsOperatorInaccuracy();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1906", $t.File = "Batch3\\BridgeIssues\\1900\\N1906.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1909", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1909)],
        statics: {
            methods: {
                TestActivatorEnumCreation: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1909).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1909, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestActivatorEnumCreation()", $t.Line = "15", $t));
                    t.Fixture.TestActivatorEnumCreation();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1909", $t.File = "Batch3\\BridgeIssues\\1900\\N1909.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1910", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1910)],
        statics: {
            methods: {
                TestGenericTypeCasting: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1910).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1910, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGenericTypeCasting()", $t.Line = "27", $t));
                    t.Fixture.TestGenericTypeCasting();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1910", $t.File = "Batch3\\BridgeIssues\\1900\\N1910.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1911", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1911)],
        statics: {
            methods: {
                TestExtensionMethodOfBaseClass: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1911).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1911, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestExtensionMethodOfBaseClass()", $t.Line = "36", $t));
                    t.Fixture.TestExtensionMethodOfBaseClass();
                },
                TestExtensionMethodOfBaseClassLinqCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1911).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1911, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestExtensionMethodOfBaseClassLinqCase()", $t.Line = "44", $t));
                    t.Fixture.TestExtensionMethodOfBaseClassLinqCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1911", $t.File = "Batch3\\BridgeIssues\\1900\\N1911.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1912", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1912)],
        statics: {
            methods: {
                TestExtentionMethod: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1912).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1912, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestExtentionMethod()", $t.Line = "9", $t));
                    t.Fixture.TestExtentionMethod();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1912", $t.File = "Batch3\\BridgeIssues\\1900\\N1912.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1913", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1913)],
        statics: {
            methods: {
                TestIsSubclassOfTemplate: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1913).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1913, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIsSubclassOfTemplate()", $t.Line = "10", $t));
                    t.Fixture.TestIsSubclassOfTemplate();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1913", $t.File = "Batch3\\BridgeIssues\\1900\\N1913.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1914", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1914)],
        statics: {
            methods: {
                TestCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1914).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1914, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCase()", $t.Line = "11", $t));
                    t.Fixture.TestCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1914", $t.File = "Batch3\\BridgeIssues\\1900\\N1914.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1915", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1915)],
        statics: {
            methods: {
                TestImplementingExternalInterface: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1915).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1915, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestImplementingExternalInterface()", $t.Line = "30", $t));
                    t.Fixture.TestImplementingExternalInterface();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1915", $t.File = "Batch3\\BridgeIssues\\1900\\N1915.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1920", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1920)],
        statics: {
            methods: {
                TestGeneratedStringConcatenation: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1920).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1920, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGeneratedStringConcatenation()", $t.Line = "9", $t));
                    t.Fixture.TestGeneratedStringConcatenation();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1920", $t.File = "Batch3\\BridgeIssues\\1900\\N1920.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1933", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1933)],
        statics: {
            methods: {
                TestRounding: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1933).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1933, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestRounding()", $t.Line = "10", $t));
                    t.Fixture.TestRounding();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1933", $t.File = "Batch3\\BridgeIssues\\1900\\N1933.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1934", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1934)],
        statics: {
            methods: {
                TestEscapeSequencesInRegex: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1934).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1934, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestEscapeSequencesInRegex()", $t.Line = "10", $t));
                    t.Fixture.TestEscapeSequencesInRegex();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1934", $t.File = "Batch3\\BridgeIssues\\1900\\N1934.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1938", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1938)],
        statics: {
            methods: {
                TestIsArrayTemplate: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1938).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1938, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIsArrayTemplate()", $t.Line = "10", $t));
                    t.Fixture.TestIsArrayTemplate();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1938", $t.File = "Batch3\\BridgeIssues\\1900\\N1938.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1948", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1948)],
        statics: {
            methods: {
                TestCollectionLikeInitialization: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1948).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1948, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCollectionLikeInitialization()", $t.Line = "40", $t));
                    t.Fixture.TestCollectionLikeInitialization();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1948", $t.File = "Batch3\\BridgeIssues\\1900\\N1948.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1951", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1951)],
        statics: {
            methods: {
                TestBindFunctionNoMemoryLeaks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1951).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1951, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestBindFunctionNoMemoryLeaks()", $t.Line = "30", $t));
                    t.Fixture.TestBindFunctionNoMemoryLeaks();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1951", $t.File = "Batch3\\BridgeIssues\\1900\\N1951.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1955", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1955)],
        statics: {
            methods: {
                TestScriptAttributeForExternMethods: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1955).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1955, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestScriptAttributeForExternMethods()", $t.Line = "26", $t));
                    t.Fixture.TestScriptAttributeForExternMethods();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1955", $t.File = "Batch3\\BridgeIssues\\1900\\N1955.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1964", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1964)],
        statics: {
            methods: {
                TestStringIsNullOrWhiteSpaceCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1964).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1964, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStringIsNullOrWhiteSpaceCase()", $t.Line = "27", $t));
                    t.Fixture.TestStringIsNullOrWhiteSpaceCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1964", $t.File = "Batch3\\BridgeIssues\\1900\\N1964.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1965", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1965)],
        statics: {
            methods: {
                TestIsClassForNumberTypes: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1965).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1965, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIsClassForNumberTypes()", $t.Line = "10", $t));
                    t.Fixture.TestIsClassForNumberTypes();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1965", $t.File = "Batch3\\BridgeIssues\\1900\\N1965.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1966", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1966)],
        statics: {
            methods: {
                TestDoubleInfinityGetHashCode: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1966).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1966, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDoubleInfinityGetHashCode()", $t.Line = "10", $t));
                    t.Fixture.TestDoubleInfinityGetHashCode();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1966", $t.File = "Batch3\\BridgeIssues\\1900\\N1966.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1968", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1968)],
        statics: {
            methods: {
                TestGenericNullable: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1968).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1968, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGenericNullable()", $t.Line = "10", $t));
                    t.Fixture.TestGenericNullable();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1968", $t.File = "Batch3\\BridgeIssues\\1900\\N1968.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1969", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1969)],
        statics: {
            methods: {
                TestStaticConstructorsForBaseClasses: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1969).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1969, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStaticConstructorsForBaseClasses()", $t.Line = "40", $t));
                    t.Fixture.TestStaticConstructorsForBaseClasses();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1969", $t.File = "Batch3\\BridgeIssues\\1900\\N1969.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1970", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1970)],
        statics: {
            methods: {
                TestRunClassConstructor: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1970).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1970, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestRunClassConstructor()", $t.Line = "21", $t));
                    t.Fixture.TestRunClassConstructor();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1970", $t.File = "Batch3\\BridgeIssues\\1900\\N1970.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1996", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1996)],
        statics: {
            methods: {
                TestTemplateForGetEnumerator: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1996).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1996, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestTemplateForGetEnumerator()", $t.Line = "24", $t));
                    t.Fixture.TestTemplateForGetEnumerator();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1996", $t.File = "Batch3\\BridgeIssues\\1900\\N1996.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2003", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2003)],
        statics: {
            methods: {
                TestThisIsBindInTemplatedMemberMethods: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2003).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2003, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestThisIsBindInTemplatedMemberMethods()", $t.Line = "28", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2003.TestThisIsBindInTemplatedMemberMethods();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2003", $t.File = "Batch3\\BridgeIssues\\2000\\N2003.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2011", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2011)],
        statics: {
            methods: {
                TestOverloadSelectionWhenNullCoalescingOperator: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2011).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2011, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestOverloadSelectionWhenNullCoalescingOperator()", $t.Line = "59", $t));
                    t.Fixture.TestOverloadSelectionWhenNullCoalescingOperator();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2011", $t.File = "Batch3\\BridgeIssues\\2000\\N2011.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2013", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2013)],
        statics: {
            methods: {
                TestSubscriptionToEventDefinedInGenericInterfaceViaExtensionMethod: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2013).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2013, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestSubscriptionToEventDefinedInGenericInterfaceViaExtensionMethod()", $t.Line = "34", $t));
                    t.Fixture.TestSubscriptionToEventDefinedInGenericInterfaceViaExtensionMethod();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2013", $t.File = "Batch3\\BridgeIssues\\2000\\N2013.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2019", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2019)],
        statics: {
            methods: {
                TestLambdaExpressionsInGenericMethod: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2019).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2019, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLambdaExpressionsInGenericMethod()", $t.Line = "48", $t));
                    t.Fixture.TestLambdaExpressionsInGenericMethod();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2019", $t.File = "Batch3\\BridgeIssues\\2000\\N2019.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2024", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2024)],
        statics: {
            methods: {
                TestAccessEnumInAnotherClassUsingStatic: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2024).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2024, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAccessEnumInAnotherClassUsingStatic()", $t.Line = "23", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2024.TestAccessEnumInAnotherClassUsingStatic();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2024", $t.File = "Batch3\\BridgeIssues\\2000\\N2024.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2027", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2027)],
        statics: {
            methods: {
                TestToStringForEnumWhenConcatWithString: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2027).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2027, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestToStringForEnumWhenConcatWithString()", $t.Line = "22", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2027.TestToStringForEnumWhenConcatWithString();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2027", $t.File = "Batch3\\BridgeIssues\\2000\\N2027.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2033", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2033)],
        statics: {
            methods: {
                TestClassEnumPropertiesInitialization: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2033).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2033, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestClassEnumPropertiesInitialization()", $t.Line = "20", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2033.TestClassEnumPropertiesInitialization();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2033", $t.File = "Batch3\\BridgeIssues\\2000\\N2033.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2038", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2038)],
        statics: {
            methods: {
                TestIncrementAssignmentInStructs: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2038).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2038, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIncrementAssignmentInStructs()", $t.Line = "35", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2038.TestIncrementAssignmentInStructs();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2038", $t.File = "Batch3\\BridgeIssues\\2000\\N2038.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2039", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2039)],
        statics: {
            methods: {
                TestNaNToString: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2039).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2039, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNaNToString()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2039.TestNaNToString();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2039", $t.File = "Batch3\\BridgeIssues\\2000\\N2039.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2042", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2042)],
        statics: {
            methods: {
                TestAppDomain: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2042).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2042, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAppDomain()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2042.TestAppDomain();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2042", $t.File = "Batch3\\BridgeIssues\\2000\\N2042.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2045", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2045)],
        statics: {
            methods: {
                TestDoubleEscapingInterpolation: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2045).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2045, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDoubleEscapingInterpolation()", $t.Line = "9", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2045.TestDoubleEscapingInterpolation();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2045", $t.File = "Batch3\\BridgeIssues\\2000\\N2045.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2046", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2046)],
        statics: {
            methods: {
                TestSafeNavigationOperator: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2046).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2046, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestSafeNavigationOperator()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2046.TestSafeNavigationOperator();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2046", $t.File = "Batch3\\BridgeIssues\\2000\\N2046.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2048", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2048)],
        statics: {
            methods: {
                TestUnaryOperatorBlockCompilationError: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2048).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2048, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUnaryOperatorBlockCompilationError()", $t.Line = "19", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2048.TestUnaryOperatorBlockCompilationError();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2048", $t.File = "Batch3\\BridgeIssues\\2000\\N2048.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2049", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2049)],
        statics: {
            methods: {
                TestNullableGetUnderlyingType: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2049).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2049, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNullableGetUnderlyingType()", $t.Line = "13", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2049.TestNullableGetUnderlyingType();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2049", $t.File = "Batch3\\BridgeIssues\\2000\\N2049.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2050", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2050)],
        statics: {
            methods: {
                TestIList: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2050).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2050, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIList()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2050.TestIList();
                },
                TestIDictionary: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2050).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2050, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIDictionary()", $t.Line = "41", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2050.TestIDictionary();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2050", $t.File = "Batch3\\BridgeIssues\\2000\\N2050.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2051", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2051)],
        statics: {
            methods: {
                TestGetElementType: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2051).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2051, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGetElementType()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2051.TestGetElementType();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2051", $t.File = "Batch3\\BridgeIssues\\2000\\N2051.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2052", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2052)],
        statics: {
            methods: {
                TestArrayCreateInstance: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2052).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2052, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestArrayCreateInstance()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2052.TestArrayCreateInstance();
                },
                TestArrayCreateInstanceShouldThrow: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2052).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2052, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestArrayCreateInstanceShouldThrow()", $t.Line = "89", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2052.TestArrayCreateInstanceShouldThrow();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2052", $t.File = "Batch3\\BridgeIssues\\2000\\N2052.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2056", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2056)],
        statics: {
            methods: {
                TestArrayCasting: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2056).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2056, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestArrayCasting()", $t.Line = "22", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2056.TestArrayCasting();
                },
                TestArrayTypeName: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2056).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2056, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestArrayTypeName()", $t.Line = "78", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2056.TestArrayTypeName();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2056", $t.File = "Batch3\\BridgeIssues\\2000\\N2056.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2065", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge2065)],
        statics: {
            methods: {
                TestBoxedEnum: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge2065).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2065, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestBoxedEnum()", $t.Line = "23", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge2065.TestBoxedEnum();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge2065", $t.File = "Batch3\\BridgeIssues\\2000\\N2077.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2067", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2067)],
        statics: {
            methods: {
                TestGetGenericTypeDefinition: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2067).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2067, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGetGenericTypeDefinition()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2067.TestGetGenericTypeDefinition();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2067", $t.File = "Batch3\\BridgeIssues\\2000\\N2067.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2068", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2068)],
        statics: {
            methods: {
                TestGetGenericTypeDefinition: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2068).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2068, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGetGenericTypeDefinition()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2068.TestGetGenericTypeDefinition();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2068", $t.File = "Batch3\\BridgeIssues\\2000\\N2068.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2073", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2073)],
        statics: {
            methods: {
                TestUserDefinedWithStringConcat: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2073).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2073, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUserDefinedWithStringConcat()", $t.Line = "34", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2073.TestUserDefinedWithStringConcat();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2073", $t.File = "Batch3\\BridgeIssues\\2000\\N2073.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2076", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2076)],
        statics: {
            methods: {
                TestLinqGlobalPollution: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2076).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2076, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLinqGlobalPollution()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2076.TestLinqGlobalPollution();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2076", $t.File = "Batch3\\BridgeIssues\\2000\\N2076.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2079", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2079)],
        statics: {
            methods: {
                TestQueryAsArgument: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2079).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2079, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestQueryAsArgument()", $t.Line = "42", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2079.TestQueryAsArgument();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2079", $t.File = "Batch3\\BridgeIssues\\2000\\N2079.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2080", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2080)],
        statics: {
            methods: {
                TestAssigmentOrWithProperty: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2080).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2080, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAssigmentOrWithProperty()", $t.Line = "24", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2080.TestAssigmentOrWithProperty();
                },
                TestAssigmentOrWithPropertyChangingCounter: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2080).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2080, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAssigmentOrWithPropertyChangingCounter()", $t.Line = "64", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2080.TestAssigmentOrWithPropertyChangingCounter();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2080", $t.File = "Batch3\\BridgeIssues\\2000\\N2080.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2081", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2081)],
        statics: {
            methods: {
                TestReturnFromCatch: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2081).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2081, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestReturnFromCatch()", $t.Line = "35", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2081.TestReturnFromCatch();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2081", $t.File = "Batch3\\BridgeIssues\\2000\\N2081.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2088", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2088)],
        statics: {
            methods: {
                TestObjectLiteralReflection: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2088).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2088, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestObjectLiteralReflection()", $t.Line = "40", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2088.TestObjectLiteralReflection();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2088", $t.File = "Batch3\\BridgeIssues\\2000\\N2088.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2092", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2092)],
        statics: {
            methods: {
                TestIgnoreGenericForDelegate: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2092).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2092, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIgnoreGenericForDelegate()", $t.Line = "24", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2092.TestIgnoreGenericForDelegate();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2092", $t.File = "Batch3\\BridgeIssues\\2000\\N2092.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2094", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2094)],
        statics: {
            methods: {
                TestGenericMethodAsDelegate: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2094).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2094, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGenericMethodAsDelegate()", $t.Line = "30", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2094.TestGenericMethodAsDelegate();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2094", $t.File = "Batch3\\BridgeIssues\\2000\\N2094.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2106", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2106)],
        statics: {
            methods: {
                TestGenericMethodInObjectLiteral: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2106).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2106, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGenericMethodInObjectLiteral()", $t.Line = "25", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2106.TestGenericMethodInObjectLiteral();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2106", $t.File = "Batch3\\BridgeIssues\\2100\\N2106.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2114", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2114)],
        statics: {
            methods: {
                TestNonStandardNames: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2114).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2114, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNonStandardNames()", $t.Line = "102", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2114.TestNonStandardNames();
                },
                TestFieldTemplates: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2114).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2114, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestFieldTemplates()", $t.Line = "124", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2114.TestFieldTemplates();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2114", $t.File = "Batch3\\BridgeIssues\\2100\\N2114.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2121", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2121)],
        statics: {
            methods: {
                TestLongAsDictionaryKey: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2121).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2121, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLongAsDictionaryKey()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2121.TestLongAsDictionaryKey();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2121", $t.File = "Batch3\\BridgeIssues\\2100\\N2121.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2127", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2127)],
        statics: {
            methods: {
                TestNumberFormatInfoNaNSymbol: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2127).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2127, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNumberFormatInfoNaNSymbol()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2127.TestNumberFormatInfoNaNSymbol();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2127", $t.File = "Batch3\\BridgeIssues\\2100\\N2127.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2135", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2135)],
        statics: {
            methods: {
                TestNestedTypesNames: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2135).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2135, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNestedTypesNames()", $t.Line = "56", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2135.TestNestedTypesNames();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2135", $t.File = "Batch3\\BridgeIssues\\2100\\N2135.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2137", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2137)],
        statics: {
            methods: {
                TestPropertiesWithNonPrimitiveInitializers: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2137).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2137, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestPropertiesWithNonPrimitiveInitializers()", $t.Line = "21", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2137.TestPropertiesWithNonPrimitiveInitializers();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2137", $t.File = "Batch3\\BridgeIssues\\2100\\N2137.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2138", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2138)],
        statics: {
            methods: {
                TestGenericInterfaceIndexer: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2138).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2138, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGenericInterfaceIndexer()", $t.Line = "129", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2138.TestGenericInterfaceIndexer();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2138", $t.File = "Batch3\\BridgeIssues\\2100\\N2138.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2141", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2141)],
        statics: {
            methods: {
                TestExternalObjectLiteral: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2141).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2141, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestExternalObjectLiteral()", $t.Line = "17", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2141.TestExternalObjectLiteral();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2141", $t.File = "Batch3\\BridgeIssues\\2100\\N2141.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2143", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2143)],
        statics: {
            methods: {
                TestIgnoreGenericForNestedClass: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2143).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2143, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIgnoreGenericForNestedClass()", $t.Line = "42", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2143.TestIgnoreGenericForNestedClass();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2143", $t.File = "Batch3\\BridgeIssues\\2100\\N2143.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2146", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2146)],
        statics: {
            methods: {
                TestCharDefaultValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2146).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2146, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCharDefaultValue()", $t.Line = "20", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2146.TestCharDefaultValue();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2146", $t.File = "Batch3\\BridgeIssues\\2100\\N2146.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2147", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2147)],
        statics: {
            methods: {
                TestLinqExcept: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2147).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2147, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLinqExcept()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2147.TestLinqExcept();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2147", $t.File = "Batch3\\BridgeIssues\\2100\\N2147.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2156", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2156)],
        statics: {
            methods: {
                TestLinqIntersect: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2156).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2156, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLinqIntersect()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2156.TestLinqIntersect();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2156", $t.File = "Batch3\\BridgeIssues\\2100\\N2156.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2157", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2157)],
        statics: {
            methods: {
                TestCreatingGenericInstanceWithInitializer: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2157).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2157, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCreatingGenericInstanceWithInitializer()", $t.Line = "47", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2157.TestCreatingGenericInstanceWithInitializer();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2157", $t.File = "Batch3\\BridgeIssues\\2100\\N2157.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2159", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2159)],
        statics: {
            methods: {
                TestBaseTypeForGenericDefinition: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2159).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2159, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestBaseTypeForGenericDefinition()", $t.Line = "17", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2159.TestBaseTypeForGenericDefinition();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2159", $t.File = "Batch3\\BridgeIssues\\2100\\N2160.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2160", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2160)],
        statics: {
            methods: {
                TestBaseTypeForGenericDefinition: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2160).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2160, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestBaseTypeForGenericDefinition()", $t.Line = "18", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2160.TestBaseTypeForGenericDefinition();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2160", $t.File = "Batch3\\BridgeIssues\\2100\\N2159.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2163", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2163)],
        statics: {
            methods: {
                TestDecimalToFormat: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2163).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2163, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDecimalToFormat()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2163.TestDecimalToFormat();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2163", $t.File = "Batch3\\BridgeIssues\\2100\\N2163.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2167", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2167)],
        statics: {
            methods: {
                TestMerge: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2167).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2167, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestMerge()", $t.Line = "18", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2167.TestMerge();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2167", $t.File = "Batch3\\BridgeIssues\\2100\\N2167.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2174", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2174)],
        statics: {
            methods: {
                TestGenericComparerDefault: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2174).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2174, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGenericComparerDefault()", $t.Line = "35", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2174.TestGenericComparerDefault();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2174", $t.File = "Batch3\\BridgeIssues\\2100\\N2174.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2176", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2176)],
        statics: {
            methods: {
                TestExternalObjectLiteralConstructorMode: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2176).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2176, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestExternalObjectLiteralConstructorMode()", $t.Line = "38", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2176.TestExternalObjectLiteralConstructorMode();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2176", $t.File = "Batch3\\BridgeIssues\\2100\\N2176.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2181", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2181)],
        statics: {
            methods: {
                TestStringPadForEmptyString: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2181).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2181, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStringPadForEmptyString()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2181.TestStringPadForEmptyString();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2181", $t.File = "Batch3\\BridgeIssues\\2100\\N2181.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2186", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2186)],
        statics: {
            methods: {
                TestConsoleWriteLineParameterless: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2186).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2186, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestConsoleWriteLineParameterless()", $t.Line = "37", $t));
                    try {
                        Bridge.ClientTest.Batch3.BridgeIssues.Bridge2186.TestConsoleWriteLineParameterless();
                    }
                    finally {
                        t.TearDown();
                    }
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2186", $t.File = "Batch3\\BridgeIssues\\2100\\N2186.cs", $t);
                }
                return this.context;
            },
            SetUp: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2186.ClearOutput();
            },
            TearDown: function () {
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2186.ResetOutput();
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2189", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2189)],
        statics: {
            methods: {
                TestInheritanceFromExternalAndBaseCtor: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2189).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2189, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInheritanceFromExternalAndBaseCtor()", $t.Line = "44", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2189.TestInheritanceFromExternalAndBaseCtor();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2189", $t.File = "Batch3\\BridgeIssues\\2100\\N2189.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2190", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2190)],
        statics: {
            methods: {
                TestInternalsVisibleTo: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2190).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2190, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInternalsVisibleTo()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2190.TestInternalsVisibleTo();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2190", $t.File = "Batch3\\BridgeIssues\\2100\\N2190.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2192", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2192)],
        statics: {
            methods: {
                TestIntersection: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2192).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2192, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIntersection()", $t.Line = "48", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2192.TestIntersection();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2192", $t.File = "Batch3\\BridgeIssues\\2100\\N2192.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2195", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2195)],
        statics: {
            methods: {
                TestGenericInvocationInTryBlock: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2195).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2195, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGenericInvocationInTryBlock()", $t.Line = "16", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2195.TestGenericInvocationInTryBlock();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2195", $t.File = "Batch3\\BridgeIssues\\2100\\N2195.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2199", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2199)],
        statics: {
            methods: {
                TestTypeParameterName: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2199).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2199, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestTypeParameterName()", $t.Line = "18", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2199.TestTypeParameterName();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2199", $t.File = "Batch3\\BridgeIssues\\2100\\N2199.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2200", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2200)],
        statics: {
            methods: {
                TestSequence: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2200).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2200, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestSequence()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2200.TestSequence();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2200", $t.File = "Batch3\\BridgeIssues\\2200\\N2200.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2203", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2203)],
        statics: {
            methods: {
                TestLocalVarsRenaming: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2203).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2203, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLocalVarsRenaming()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2203.TestLocalVarsRenaming();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2203", $t.File = "Batch3\\BridgeIssues\\2200\\N2203.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2204", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2204)],
        statics: {
            methods: {
                TestDecimalToString: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2204).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2204, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDecimalToString()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2204.TestDecimalToString();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2204", $t.File = "Batch3\\BridgeIssues\\2200\\N2204.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2207", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2207)],
        statics: {
            methods: {
                TestDefaultOptionalParam: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2207).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2207, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDefaultOptionalParam()", $t.Line = "31", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2207.TestDefaultOptionalParam();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2207", $t.File = "Batch3\\BridgeIssues\\2200\\N2207.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2210", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2210)],
        statics: {
            methods: {
                TestTypeOrdering: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2210).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2210, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestTypeOrdering()", $t.Line = "55", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2210.TestTypeOrdering();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2210", $t.File = "Batch3\\BridgeIssues\\2200\\N2210.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2211", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2211)],
        statics: {
            methods: {
                TestConditionAccess: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2211).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2211, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestConditionAccess()", $t.Line = "17", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2211.TestConditionAccess();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2211", $t.File = "Batch3\\BridgeIssues\\2200\\N2211.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2212", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2212)],
        statics: {
            methods: {
                TestDelegateBindCache: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2212).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2212, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDelegateBindCache()", $t.Line = "38", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2212.TestDelegateBindCache();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2212", $t.File = "Batch3\\BridgeIssues\\2200\\N2212.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2213", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2213)],
        statics: {
            methods: {
                TestCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2213).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2213, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCase()", $t.Line = "27", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2213.TestCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2213", $t.File = "Batch3\\BridgeIssues\\2200\\N2213.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2214", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2214)],
        statics: {
            methods: {
                TestCheckedULong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2214).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2214, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCheckedULong()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2214.TestCheckedULong();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2214", $t.File = "Batch3\\BridgeIssues\\2200\\N2214.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2216", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2216)],
        statics: {
            methods: {
                TestExternalInterface: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2216).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2216, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestExternalInterface()", $t.Line = "34", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2216.TestExternalInterface();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2216", $t.File = "Batch3\\BridgeIssues\\2200\\N2216.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2220", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2220)],
        statics: {
            methods: {
                TestHasElementType: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2220).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2220, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestHasElementType()", $t.Line = "16", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2220.TestHasElementType();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2220", $t.File = "Batch3\\BridgeIssues\\2200\\N2220.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2221", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2221)],
        statics: {
            methods: {
                TestMakeArrayType: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2221).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2221, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestMakeArrayType()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2221.TestMakeArrayType();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2221", $t.File = "Batch3\\BridgeIssues\\2200\\N2221.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2222", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2222)],
        statics: {
            methods: {
                TestGetTypeWithNullArgument: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2222).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2222, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGetTypeWithNullArgument()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2222.TestGetTypeWithNullArgument();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2222", $t.File = "Batch3\\BridgeIssues\\2200\\N2222.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2225", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2225)],
        statics: {
            methods: {
                TestVolatile: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2225).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2225, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestVolatile()", $t.Line = "20", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2225.TestVolatile();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2225", $t.File = "Batch3\\BridgeIssues\\2200\\N2225.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2243", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2243)],
        statics: {
            methods: {
                TestElementHiddenField: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2243).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2243, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestElementHiddenField()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2243.TestElementHiddenField();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2243", $t.File = "Batch3\\BridgeIssues\\2200\\N2243.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2246", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2246)],
        statics: {
            methods: {
                TestEntryPoint: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2246).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2246, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestEntryPoint()", $t.Line = "23", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2246.TestEntryPoint();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2246", $t.File = "Batch3\\BridgeIssues\\2200\\N2246.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2249", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2249)],
        statics: {
            methods: {
                TestPropertyInitializerWithDirective: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2249).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2249, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestPropertyInitializerWithDirective()", $t.Line = "22", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2249.TestPropertyInitializerWithDirective();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2249", $t.File = "Batch3\\BridgeIssues\\2200\\N2249.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2251", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2251)],
        statics: {
            methods: {
                TestListGetRange: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2251).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2251, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestListGetRange()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2251.TestListGetRange();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2251", $t.File = "Batch3\\BridgeIssues\\2200\\N2251.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2278", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2278)],
        statics: {
            methods: {
                TestGenericInterface: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2278).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2278, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGenericInterface()", $t.Line = "28", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2278.TestGenericInterface();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2278", $t.File = "Batch3\\BridgeIssues\\2200\\N2278.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2279", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2279)],
        statics: {
            methods: {
                TestPropertyWithInitializerAndNestedClass: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2279).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2279, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestPropertyWithInitializerAndNestedClass()", $t.Line = "22", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2279.TestPropertyWithInitializerAndNestedClass();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2279", $t.File = "Batch3\\BridgeIssues\\2200\\N2279.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2280", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2280)],
        statics: {
            methods: {
                TestGetTypeInIgnoreGenericMethod: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2280).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2280, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGetTypeInIgnoreGenericMethod()", $t.Line = "22", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2280.TestGetTypeInIgnoreGenericMethod();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2280", $t.File = "Batch3\\BridgeIssues\\2200\\N2280.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2281", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2281)],
        statics: {
            methods: {
                TestFieldMerge: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2281).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2281, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestFieldMerge()", $t.Line = "42", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2281.TestFieldMerge();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2281", $t.File = "Batch3\\BridgeIssues\\2200\\N2281.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2284", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2284)],
        statics: {
            methods: {
                TestNameAttrOnProperty: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2284).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2284, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNameAttrOnProperty()", $t.Line = "60", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2284.TestNameAttrOnProperty();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2284", $t.File = "Batch3\\BridgeIssues\\2200\\N2284.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2293", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2293)],
        statics: {
            methods: {
                TestAttributeUsage: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2293).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2293, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAttributeUsage()", $t.Line = "19", $t));
                    t.Fixture.TestAttributeUsage();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2293", $t.File = "Batch3\\BridgeIssues\\2200\\N2293.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2298", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2298)],
        statics: {
            methods: {
                TestGenericInterfaceWithNestedTypeParameters: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2298).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2298, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGenericInterfaceWithNestedTypeParameters()", $t.Line = "68", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2298.TestGenericInterfaceWithNestedTypeParameters();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2298", $t.File = "Batch3\\BridgeIssues\\2200\\N2298.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2310", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2310)],
        statics: {
            methods: {
                TestBridgeFields: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2310).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2310, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestBridgeFields()", $t.Line = "101", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2310.TestBridgeFields();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2310", $t.File = "Batch3\\BridgeIssues\\2300\\N2310.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2313", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2313)],
        statics: {
            methods: {
                TestExternalInterfaceOverloadedMembers: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2313).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2313, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestExternalInterfaceOverloadedMembers()", $t.Line = "19", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2313.TestExternalInterfaceOverloadedMembers();
                },
                TestExternalClassInheritingInterface: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2313).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2313, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestExternalClassInheritingInterface()", $t.Line = "56", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2313.TestExternalClassInheritingInterface();
                },
                TestExternalInheritingInterfaces: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2313).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2313, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestExternalInheritingInterfaces()", $t.Line = "100", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2313.TestExternalInheritingInterfaces();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2313", $t.File = "Batch3\\BridgeIssues\\2300\\N2313.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2318", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2318)],
        statics: {
            methods: {
                TestBoxing: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2318).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2318, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestBoxing()", $t.Line = "25", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2318.TestBoxing();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2318", $t.File = "Batch3\\BridgeIssues\\2300\\N2318.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2320", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2320)],
        statics: {
            methods: {
                TestReadyAndMain: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2320).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2320, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestReadyAndMain()", $t.Line = "19", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2320.TestReadyAndMain();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2320", $t.File = "Batch3\\BridgeIssues\\2300\\N2320.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2322", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2322)],
        statics: {
            methods: {
                TestSequence: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2322).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2322, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestSequence()", $t.Line = "31", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2322.TestSequence();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2322", $t.File = "Batch3\\BridgeIssues\\2300\\N2322.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2327", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2327)],
        statics: {
            methods: {
                TestEnumInterfaces: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2327).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2327, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestEnumInterfaces()", $t.Line = "15", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2327.TestEnumInterfaces();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2327", $t.File = "Batch3\\BridgeIssues\\2300\\N2327.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2330", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2330)],
        statics: {
            methods: {
                TestMultipleTryCatchBlocks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2330).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2330, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestMultipleTryCatchBlocks()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2330.TestMultipleTryCatchBlocks();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2330", $t.File = "Batch3\\BridgeIssues\\2300\\N2330.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2337", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2337)],
        statics: {
            methods: {
                TestFDateModifier: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2337).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2337, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestFDateModifier()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2337.TestFDateModifier();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2337", $t.File = "Batch3\\BridgeIssues\\2300\\N2337.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2338", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2338)],
        statics: {
            methods: {
                TestGenericGetType: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2338).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2338, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGenericGetType()", $t.Line = "20", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2338.TestGenericGetType();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2338", $t.File = "Batch3\\BridgeIssues\\2300\\N2338.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2342", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2342)],
        statics: {
            methods: {
                TestCastParanthesize: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2342).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2342, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCastParanthesize()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2342.TestCastParanthesize();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2342", $t.File = "Batch3\\BridgeIssues\\2300\\N2342.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2343", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2343)],
        statics: {
            methods: {
                TestBoxedEqualsAndGetHashCode: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2343).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2343, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestBoxedEqualsAndGetHashCode()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2343.TestBoxedEqualsAndGetHashCode();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2343", $t.File = "Batch3\\BridgeIssues\\2300\\N2343.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2344", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2344)],
        statics: {
            methods: {
                TestHtmlElementName: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2344).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2344, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestHtmlElementName()", $t.Line = "45", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2344.TestHtmlElementName();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2344", $t.File = "Batch3\\BridgeIssues\\2300\\N2344.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2345", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345)],
        statics: {
            methods: {
                TestArrayAsIList: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2345, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestArrayAsIList()", $t.Line = "16", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345.TestArrayAsIList();
                },
                TestByteArrayAsIList: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2345, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestByteArrayAsIList()", $t.Line = "36", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345.TestByteArrayAsIList();
                },
                TestLongArrayAsIList: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2345, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLongArrayAsIList()", $t.Line = "54", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345.TestLongArrayAsIList();
                },
                TestDecimalArrayAsIList: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2345, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDecimalArrayAsIList()", $t.Line = "76", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345.TestDecimalArrayAsIList();
                },
                TestStructArrayAsIList: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2345, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStructArrayAsIList()", $t.Line = "98", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345.TestStructArrayAsIList();
                },
                TestStringArrayAsIList: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2345, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStringArrayAsIList()", $t.Line = "115", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345.TestStringArrayAsIList();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345", $t.File = "Batch3\\BridgeIssues\\2300\\N2345.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2347", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2347)],
        statics: {
            methods: {
                TestG17FormatSpecifier: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2347).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2347, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestG17FormatSpecifier()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2347.TestG17FormatSpecifier();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2347", $t.File = "Batch3\\BridgeIssues\\2300\\N2347.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2349", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2349)],
        statics: {
            methods: {
                TestExternalIgnoreGenericClass: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2349).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2349, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestExternalIgnoreGenericClass()", $t.Line = "17", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2349.TestExternalIgnoreGenericClass();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2349", $t.File = "Batch3\\BridgeIssues\\2300\\N2349.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2352", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2352)],
        statics: {
            methods: {
                TestOperatorOnAnonymousType: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2352).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2352, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestOperatorOnAnonymousType()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2352.TestOperatorOnAnonymousType();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2352", $t.File = "Batch3\\BridgeIssues\\2300\\N2352.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2355", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2355)],
        statics: {
            methods: {
                TestLinqGrouping: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2355).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2355, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLinqGrouping()", $t.Line = "50", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2355.TestLinqGrouping();
                },
                TestLinqLookup: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2355).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2355, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLinqLookup()", $t.Line = "62", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2355.TestLinqLookup();
                },
                TestLinqOrderedEnumerable: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2355).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2355, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLinqOrderedEnumerable()", $t.Line = "72", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2355.TestLinqOrderedEnumerable();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2355", $t.File = "Batch3\\BridgeIssues\\2300\\N2355.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2359", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2359)],
        statics: {
            methods: {
                TestNullableCompareEquals: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2359).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2359, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNullableCompareEquals()", $t.Line = "21", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2359.TestNullableCompareEquals();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2359", $t.File = "Batch3\\BridgeIssues\\2300\\N2359.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2369", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2369)],
        statics: {
            methods: {
                TestArrayTypeAlias: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2369).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2369, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestArrayTypeAlias()", $t.Line = "52", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2369.TestArrayTypeAlias();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2369", $t.File = "Batch3\\BridgeIssues\\2300\\N2369.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2374", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2374)],
        statics: {
            methods: {
                TestPropertyInitializer: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2374).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2374, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestPropertyInitializer()", $t.Line = "18", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2374.TestPropertyInitializer();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2374", $t.File = "Batch3\\BridgeIssues\\2300\\N2374.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2375", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2375)],
        statics: {
            methods: {
                TestNameofWithReflection: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2375).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2375, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNameofWithReflection()", $t.Line = "18", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2375.TestNameofWithReflection();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2375", $t.File = "Batch3\\BridgeIssues\\2300\\N2375.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2386", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2386)],
        statics: {
            methods: {
                TestStructBoxingOperations: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2386).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2386, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStructBoxingOperations()", $t.Line = "37", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2386.TestStructBoxingOperations();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2386", $t.File = "Batch3\\BridgeIssues\\2300\\N2386.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2393", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2393)],
        statics: {
            methods: {
                TestLambdaInLiteral: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2393).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2393, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLambdaInLiteral()", $t.Line = "31", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2393.TestLambdaInLiteral();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2393", $t.File = "Batch3\\BridgeIssues\\2300\\N2393.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2399", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2399)],
        statics: {
            methods: {
                TestSqrt: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2399).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2399, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestSqrt()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2399.TestSqrt();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2399", $t.File = "Batch3\\BridgeIssues\\2300\\N2399.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2401", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2401)],
        statics: {
            methods: {
                TestArrayInitializer: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2401).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2401, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestArrayInitializer()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2401.TestArrayInitializer();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2401", $t.File = "Batch3\\BridgeIssues\\2400\\N2401.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2419", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2419)],
        statics: {
            methods: {
                TestExternalEnum: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2419).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2419, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestExternalEnum()", $t.Line = "26", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2419.TestExternalEnum();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2419", $t.File = "Batch3\\BridgeIssues\\2400\\N2420.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2430", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2430)],
        statics: {
            methods: {
                TestPropertyInitializer: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2430).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2430, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestPropertyInitializer()", $t.Line = "75", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2430.TestPropertyInitializer();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2430", $t.File = "Batch3\\BridgeIssues\\2400\\N2430.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2443", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2443)],
        statics: {
            methods: {
                TestNaNCompareForDouble: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2443).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2443, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNaNCompareForDouble()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2443.TestNaNCompareForDouble();
                },
                TestNaNCompareForFloat: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2443).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2443, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNaNCompareForFloat()", $t.Line = "60", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2443.TestNaNCompareForFloat();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2443", $t.File = "Batch3\\BridgeIssues\\2400\\N2443.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2445", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2445)],
        statics: {
            methods: {
                TestEmptyForLoop: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2445).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2445, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestEmptyForLoop()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2445.TestEmptyForLoop();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2445", $t.File = "Batch3\\BridgeIssues\\2400\\N2445.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2446", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2446)],
        statics: {
            methods: {
                TestDoubleMinValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2446).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2446, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDoubleMinValue()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2446.TestDoubleMinValue();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2446", $t.File = "Batch3\\BridgeIssues\\2400\\N2446.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2454", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2454)],
        statics: {
            methods: {
                TestForEachClone: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2454).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2454, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestForEachClone()", $t.Line = "44", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2454.TestForEachClone();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2454", $t.File = "Batch3\\BridgeIssues\\2400\\N2454.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2456", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2456)],
        statics: {
            methods: {
                TestIsArrayFromIFrame: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2456).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2456, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIsArrayFromIFrame()", $t.Line = "21", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2456.TestIsArrayFromIFrame();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2456", $t.File = "Batch3\\BridgeIssues\\2400\\N2456.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2458", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2458)],
        statics: {
            methods: {
                TestGetBaseException: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2458).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2458, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGetBaseException()", $t.Line = "51", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2458.TestGetBaseException();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2458", $t.File = "Batch3\\BridgeIssues\\2400\\N2458.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2462", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2462)],
        statics: {
            methods: {
                TestReturnInAsync: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2462).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2462, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestReturnInAsync()", $t.Line = "28", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2462.TestReturnInAsync();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2462", $t.File = "Batch3\\BridgeIssues\\2400\\N2462.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2467", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2467)],
        statics: {
            methods: {
                TestPropertyInitializerInStruct: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2467).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2467, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestPropertyInitializerInStruct()", $t.Line = "23", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2467.TestPropertyInitializerInStruct();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2467", $t.File = "Batch3\\BridgeIssues\\2400\\N2467.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2469", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2469)],
        statics: {
            methods: {
                TestLambdaLiftingWithStaticGenericMember: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2469).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2469, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLambdaLiftingWithStaticGenericMember()", $t.Line = "31", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2469.TestLambdaLiftingWithStaticGenericMember();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2469", $t.File = "Batch3\\BridgeIssues\\2400\\N2469.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2481", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2481)],
        statics: {
            methods: {
                TestReturnInAsyncUsing: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2481).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2481, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestReturnInAsyncUsing()", $t.Line = "44", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2481.TestReturnInAsyncUsing();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2481", $t.File = "Batch3\\BridgeIssues\\2400\\N2481.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2486", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2486)],
        statics: {
            methods: {
                TestGenericArrayInterface: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2486).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2486, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGenericArrayInterface()", $t.Line = "50", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2486.TestGenericArrayInterface();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2486", $t.File = "Batch3\\BridgeIssues\\2400\\N2486.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2489", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2489)],
        statics: {
            methods: {
                TestReflectableInherits: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2489).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2489, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestReflectableInherits()", $t.Line = "35", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2489.TestReflectableInherits();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2489", $t.File = "Batch3\\BridgeIssues\\2400\\N2489.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2497", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2497)],
        statics: {
            methods: {
                TestPropertyInitializerWithDirective: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2497).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2497, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestPropertyInitializerWithDirective()", $t.Line = "189", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2497.TestPropertyInitializerWithDirective();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2497", $t.File = "Batch3\\BridgeIssues\\2400\\N2497.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2499", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2499)],
        statics: {
            methods: {
                TestArraySortComparison: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2499).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2499, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestArraySortComparison()", $t.Line = "30", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2499.TestArraySortComparison();
                },
                TestArraySortComparisonWithEntity: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2499).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2499, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestArraySortComparisonWithEntity()", $t.Line = "58", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2499.TestArraySortComparisonWithEntity();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2499", $t.File = "Batch3\\BridgeIssues\\2400\\N2499.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2502", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2502)],
        statics: {
            methods: {
                TestAsyncBreak: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2502).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2502, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncBreak()", $t.Line = "37", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2502.TestAsyncBreak();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2502", $t.File = "Batch3\\BridgeIssues\\2500\\N2502.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2505", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2505)],
        statics: {
            methods: {
                TestNegativeNumberToULong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2505).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2505, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNegativeNumberToULong()", $t.Line = "15", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2505.TestNegativeNumberToULong();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2505", $t.File = "Batch3\\BridgeIssues\\2500\\N2505.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2515", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2515)],
        statics: {
            methods: {
                TestPreprocessorConditionalAccess: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2515).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2515, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestPreprocessorConditionalAccess()", $t.Line = "15", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2515.TestPreprocessorConditionalAccess();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2515", $t.File = "Batch3\\BridgeIssues\\2500\\N2515.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2523", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2523)],
        statics: {
            methods: {
                TestAsyncConditionalAccess: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2523).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2523, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncConditionalAccess()", $t.Line = "42", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2523.TestAsyncConditionalAccess();
                },
                TestAsyncConditionalAccessWorkaround: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2523).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2523, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncConditionalAccessWorkaround()", $t.Line = "51", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2523.TestAsyncConditionalAccessWorkaround();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2523", $t.File = "Batch3\\BridgeIssues\\2500\\N2523.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2525", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2525)],
        statics: {
            methods: {
                TestCastAttribute: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2525).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2525, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCastAttribute()", $t.Line = "25", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2525.TestCastAttribute();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2525", $t.File = "Batch3\\BridgeIssues\\2500\\N2525.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2538", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2538)],
        statics: {
            methods: {
                TestArraySegment: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2538).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2538, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestArraySegment()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2538.TestArraySegment();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2538", $t.File = "Batch3\\BridgeIssues\\2500\\N2538.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2550", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2550)],
        statics: {
            methods: {
                TestExplictImplementationReflectability: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2550).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2550, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestExplictImplementationReflectability()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2550.TestExplictImplementationReflectability();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2550", $t.File = "Batch3\\BridgeIssues\\2500\\N2550.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2558", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2558)],
        statics: {
            methods: {
                TestEnumReflection: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2558).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2558, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestEnumReflection()", $t.Line = "27", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2558.TestEnumReflection();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2558", $t.File = "Batch3\\BridgeIssues\\2500\\N2558.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2565", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2565)],
        statics: {
            methods: {
                TestLambdaInAsyncLoop: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2565).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2565, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLambdaInAsyncLoop()", $t.Line = "17", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2565.TestLambdaInAsyncLoop();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2565", $t.File = "Batch3\\BridgeIssues\\2500\\N2565.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2571", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2571)],
        statics: {
            methods: {
                TestContainsFunction: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2571).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2571, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestContainsFunction()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2571.TestContainsFunction();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2571", $t.File = "Batch3\\BridgeIssues\\2500\\N2571.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2574", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2574)],
        statics: {
            methods: {
                TestOperatorTemplate: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2574).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2574, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestOperatorTemplate()", $t.Line = "23", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2574.TestOperatorTemplate();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2574", $t.File = "Batch3\\BridgeIssues\\2500\\N2574.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2584", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2584)],
        statics: {
            methods: {
                TestBindingFlags: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2584).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2584, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestBindingFlags()", $t.Line = "30", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2584.TestBindingFlags();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2584", $t.File = "Batch3\\BridgeIssues\\2500\\N2584.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2587", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2587)],
        statics: {
            methods: {
                TestNamedParams: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2587).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2587, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNamedParams()", $t.Line = "18", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2587.TestNamedParams();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2587", $t.File = "Batch3\\BridgeIssues\\2500\\N2587.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2591", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2591)],
        statics: {
            methods: {
                TestEntryPointCustomName: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2591).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2591, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestEntryPointCustomName()", $t.Line = "17", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2591.TestEntryPointCustomName();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2591", $t.File = "Batch3\\BridgeIssues\\2500\\N2591.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2592", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2592)],
        statics: {
            methods: {
                TestStackTrace: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2592).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2592, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStackTrace()", $t.Line = "35", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2592.TestStackTrace();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2592", $t.File = "Batch3\\BridgeIssues\\2500\\N2592.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2610", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2610)],
        statics: {
            methods: {
                TestLambdaLifting: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2610).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2610, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLambdaLifting()", $t.Line = "60", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2610.TestLambdaLifting();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2610", $t.File = "Batch3\\BridgeIssues\\2600\\N2610.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2614", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2614)],
        statics: {
            methods: {
                TestInitializers: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2614).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2614, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInitializers()", $t.Line = "21", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2614.TestInitializers();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2614", $t.File = "Batch3\\BridgeIssues\\2600\\N2614.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2632", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2632)],
        statics: {
            methods: {
                TestTemplateIdentifier: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2632).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2632, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestTemplateIdentifier()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2632.TestTemplateIdentifier();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2632", $t.File = "Batch3\\BridgeIssues\\2600\\N2632.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2633", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2633)],
        statics: {
            methods: {
                TestAsyncCaptureVariable: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2633).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2633, 10, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncCaptureVariable()", $t.Line = "18", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2633.TestAsyncCaptureVariable();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2633", $t.File = "Batch3\\BridgeIssues\\2600\\N2633.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2635", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2635)],
        statics: {
            methods: {
                TestInitializers: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2635).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2635, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInitializers()", $t.Line = "55", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2635.TestInitializers();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2635", $t.File = "Batch3\\BridgeIssues\\2600\\N2635.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2636", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2636)],
        statics: {
            methods: {
                TestUsingStatic: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2636).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2636, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUsingStatic()", $t.Line = "13", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2636.TestUsingStatic();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2636", $t.File = "Batch3\\BridgeIssues\\2600\\N2636.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2638", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2638)],
        statics: {
            methods: {
                TestContrvariance: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2638).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2638, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestContrvariance()", $t.Line = "37", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2638.TestContrvariance();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2638", $t.File = "Batch3\\BridgeIssues\\2600\\N2638.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2638A", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2638A)],
        statics: {
            methods: {
                TestG1: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2638A).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2638A, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestG1()", $t.Line = "91", $t));
                    t.Fixture.TestG1();
                },
                TestG2: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2638A).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2638A, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestG2()", $t.Line = "164", $t));
                    t.Fixture.TestG2();
                },
                TestG3: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2638A).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2638A, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestG3()", $t.Line = "244", $t));
                    t.Fixture.TestG3();
                },
                TestG4: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2638A).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2638A, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestG4()", $t.Line = "317", $t));
                    t.Fixture.TestG4();
                },
                TestG5: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2638A).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2638A, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestG5()", $t.Line = "397", $t));
                    t.Fixture.TestG5();
                },
                TestG6: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2638A).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2638A, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestG6()", $t.Line = "475", $t));
                    t.Fixture.TestG6();
                },
                TestG7: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2638A).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2638A, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestG7()", $t.Line = "560", $t));
                    t.Fixture.TestG7();
                },
                TestG8: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2638A).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2638A, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestG8()", $t.Line = "638", $t));
                    t.Fixture.TestG8();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2638A", $t.File = "Batch3\\BridgeIssues\\2600\\N2638A.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2644", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2644)],
        statics: {
            methods: {
                TestMax: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2644).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2644, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestMax()", $t.Line = "16", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2644.TestMax();
                },
                TestMin: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2644).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2644, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestMin()", $t.Line = "75", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2644.TestMin();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2644", $t.File = "Batch3\\BridgeIssues\\2600\\N2644.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2657", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2657)],
        statics: {
            methods: {
                TestRoundtripFormat: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2657).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2657, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestRoundtripFormat()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2657.TestRoundtripFormat();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2657", $t.File = "Batch3\\BridgeIssues\\2600\\N2657.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2667", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2667)],
        statics: {
            methods: {
                TestOrder: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2667).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2667, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestOrder()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2667.TestOrder();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2667", $t.File = "Batch3\\BridgeIssues\\2600\\N2667.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2671", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2671)],
        statics: {
            methods: {
                TestInterfaceIndexer: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2671).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2671, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInterfaceIndexer()", $t.Line = "22", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2671.TestInterfaceIndexer();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2671", $t.File = "Batch3\\BridgeIssues\\2600\\N2671.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2685", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2685)],
        statics: {
            methods: {
                TestPartialClasses: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2685).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2685, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestPartialClasses()", $t.Line = "51", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2685.TestPartialClasses();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2685", $t.File = "Batch3\\BridgeIssues\\2600\\N2685.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2686", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2686)],
        statics: {
            methods: {
                TestCapturedReferenceVariable: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2686).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2686, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCapturedReferenceVariable()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2686.TestCapturedReferenceVariable();
                },
                TestChangeableCapturedReferenceVariable: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2686).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2686, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestChangeableCapturedReferenceVariable()", $t.Line = "27", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2686.TestChangeableCapturedReferenceVariable();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2686", $t.File = "Batch3\\BridgeIssues\\2600\\N2686.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2688", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2688)],
        statics: {
            methods: {
                TestCaseNull: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2688).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2688, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCaseNull()", $t.Line = "14", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2688.TestCaseNull();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2688", $t.File = "Batch3\\BridgeIssues\\2600\\N2688.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689)],
        statics: {
            methods: {
                TestAsyncConditionalExpression1: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncConditionalExpression1()", $t.Line = "40", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689.TestAsyncConditionalExpression1();
                },
                TestAsyncConditionalExpression2: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncConditionalExpression2()", $t.Line = "54", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689.TestAsyncConditionalExpression2();
                },
                TestAsyncConditionalExpression3: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncConditionalExpression3()", $t.Line = "68", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689.TestAsyncConditionalExpression3();
                },
                TestAsyncConditionalExpression4: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncConditionalExpression4()", $t.Line = "82", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689.TestAsyncConditionalExpression4();
                },
                TestAsyncConditionalExpression5: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncConditionalExpression5()", $t.Line = "96", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689.TestAsyncConditionalExpression5();
                },
                TestAsyncConditionalExpression6: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncConditionalExpression6()", $t.Line = "111", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689.TestAsyncConditionalExpression6();
                },
                TestAsyncConditionalExpression7: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncConditionalExpression7()", $t.Line = "126", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689.TestAsyncConditionalExpression7();
                },
                TestAsyncConditionalExpression8: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncConditionalExpression8()", $t.Line = "141", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689.TestAsyncConditionalExpression8();
                },
                TestAsyncConditionalExpression9: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncConditionalExpression9()", $t.Line = "156", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689.TestAsyncConditionalExpression9();
                },
                TestAsyncConditionalExpression10: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncConditionalExpression10()", $t.Line = "170", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689.TestAsyncConditionalExpression10();
                },
                TestAsyncBinaryExpression1: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncBinaryExpression1()", $t.Line = "184", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689.TestAsyncBinaryExpression1();
                },
                TestAsyncBinaryExpression2: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncBinaryExpression2()", $t.Line = "198", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689.TestAsyncBinaryExpression2();
                },
                TestAsyncBinaryExpression3: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncBinaryExpression3()", $t.Line = "212", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689.TestAsyncBinaryExpression3();
                },
                TestAsyncBinaryExpression4: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncBinaryExpression4()", $t.Line = "226", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689.TestAsyncBinaryExpression4();
                },
                TestAsyncBinaryExpression5: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncBinaryExpression5()", $t.Line = "240", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689.TestAsyncBinaryExpression5();
                },
                TestAsyncBinaryExpression6: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncBinaryExpression6()", $t.Line = "254", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689.TestAsyncBinaryExpression6();
                },
                TestAsyncBinaryExpression7: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncBinaryExpression7()", $t.Line = "268", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689.TestAsyncBinaryExpression7();
                },
                TestAsyncBinaryExpression8: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncBinaryExpression8()", $t.Line = "282", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689.TestAsyncBinaryExpression8();
                },
                TestAsyncBinaryExpression9: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncBinaryExpression9()", $t.Line = "296", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689.TestAsyncBinaryExpression9();
                },
                TestAsyncBinaryExpression10: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2689, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncBinaryExpression10()", $t.Line = "310", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689.TestAsyncBinaryExpression10();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2689", $t.File = "Batch3\\BridgeIssues\\2600\\N2689.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2692", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2692)],
        statics: {
            methods: {
                TestUnusedGotoLabel: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2692).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2692, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUnusedGotoLabel()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2692.TestUnusedGotoLabel();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2692", $t.File = "Batch3\\BridgeIssues\\2600\\N2692.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2693", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2693)],
        statics: {
            methods: {
                TestListCapacity: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2693).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2693, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestListCapacity()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2693.TestListCapacity();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2693", $t.File = "Batch3\\BridgeIssues\\2600\\N2693.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2703", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2703)],
        statics: {
            methods: {
                TestDoubleGetHashCode: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2703).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2703, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDoubleGetHashCode()", $t.Line = "45", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2703.TestDoubleGetHashCode();
                },
                TestSingleGetHashCode: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2703).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2703, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestSingleGetHashCode()", $t.Line = "64", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2703.TestSingleGetHashCode();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2703", $t.File = "Batch3\\BridgeIssues\\2700\\N2703.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2705", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2705)],
        statics: {
            methods: {
                TestCatchWithoutVariable: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2705).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2705, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCatchWithoutVariable()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2705.TestCatchWithoutVariable();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2705", $t.File = "Batch3\\BridgeIssues\\2700\\N2705.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2712", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2712)],
        statics: {
            methods: {
                TestLambda: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2712).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2712, 4, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLambda()", $t.Line = "48", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2712.TestLambda();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2712", $t.File = "Batch3\\BridgeIssues\\2700\\N2712.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2713", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.bridge2713)],
        statics: {
            methods: {
                TestConventionForNestedClass: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.bridge2713).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2713, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestConventionForNestedClass()", $t.Line = "33", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.bridge2713.TestConventionForNestedClass();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2713", $t.File = "Batch3\\BridgeIssues\\2700\\N2713.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2716", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2716)],
        statics: {
            methods: {
                TestDelegateWithOptionalParameter: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2716).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2716, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDelegateWithOptionalParameter()", $t.Line = "18", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2716.TestDelegateWithOptionalParameter();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2716", $t.File = "Batch3\\BridgeIssues\\2700\\N2716.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2720", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2720)],
        statics: {
            methods: {
                TestAsyncAssignmentForLong: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2720).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2720, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncAssignmentForLong()", $t.Line = "24", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2720.TestAsyncAssignmentForLong();
                },
                TestAsyncAssignmentForDecimal: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2720).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2720, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncAssignmentForDecimal()", $t.Line = "39", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2720.TestAsyncAssignmentForDecimal();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2720", $t.File = "Batch3\\BridgeIssues\\2700\\N2720.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2722", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2722)],
        statics: {
            methods: {
                TestEnumParsing: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2722).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2722, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestEnumParsing()", $t.Line = "19", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2722.TestEnumParsing();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2722", $t.File = "Batch3\\BridgeIssues\\2700\\N2722.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2723", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2723)],
        statics: {
            methods: {
                TestAmbigiousSymbols: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2723).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2723, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAmbigiousSymbols()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2723.TestAmbigiousSymbols();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2723", $t.File = "Batch3\\BridgeIssues\\2700\\N2723.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2735", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2735)],
        statics: {
            methods: {
                TestExternalInheritanceWithoutCtor: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2735).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2735, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestExternalInheritanceWithoutCtor()", $t.Line = "48", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2735.TestExternalInheritanceWithoutCtor();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2735", $t.File = "Batch3\\BridgeIssues\\2700\\N2735.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2738", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2738)],
        statics: {
            methods: {
                TestAmbigiousSymbols: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2738).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2738, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAmbigiousSymbols()", $t.Line = "13", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2738.TestAmbigiousSymbols();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2738", $t.File = "Batch3\\BridgeIssues\\2700\\N2738.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2745", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2745)],
        statics: {
            methods: {
                TestFieldInitialization: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2745).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2745, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestFieldInitialization()", $t.Line = "38", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2745.TestFieldInitialization();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2745", $t.File = "Batch3\\BridgeIssues\\2700\\N2745.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2749", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2749)],
        statics: {
            methods: {
                TestExtensionMethodBoxing: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2749).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2749, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestExtensionMethodBoxing()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2749.TestExtensionMethodBoxing();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2749", $t.File = "Batch3\\BridgeIssues\\2700\\N2749.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2759", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2759)],
        statics: {
            methods: {
                TestOrder: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2759).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2759, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestOrder()", $t.Line = "43", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2759.TestOrder();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2759", $t.File = "Batch3\\BridgeIssues\\2700\\N2759.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2763", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2763)],
        statics: {
            methods: {
                TestAsyncArgument: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2763).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2763, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncArgument()", $t.Line = "13", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2763.TestAsyncArgument();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2763", $t.File = "Batch3\\BridgeIssues\\2700\\N2763.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2764", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2764)],
        statics: {
            methods: {
                TestNonGenericClassName: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2764).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2764, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNonGenericClassName()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2764.TestNonGenericClassName();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2764", $t.File = "Batch3\\BridgeIssues\\2700\\N2764.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2770", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2770)],
        statics: {
            methods: {
                TestExternalMethodName: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2770).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2770, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestExternalMethodName()", $t.Line = "43", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2770.TestExternalMethodName();
                },
                TestExternalMethodOverload: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2770).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2770, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestExternalMethodOverload()", $t.Line = "52", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2770.TestExternalMethodOverload();
                },
                TestExternalClass: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2770).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2770, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestExternalClass()", $t.Line = "61", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2770.TestExternalClass();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2770", $t.File = "Batch3\\BridgeIssues\\2700\\N2770.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2792", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2792)],
        statics: {
            methods: {
                TestOverridenReadOnlyProperty: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2792).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2792, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestOverridenReadOnlyProperty()", $t.Line = "28", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2792.TestOverridenReadOnlyProperty();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2792", $t.File = "Batch3\\BridgeIssues\\2700\\N2792.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2793", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2793)],
        statics: {
            methods: {
                TestAsyncBlockStatement: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2793).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2793, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncBlockStatement()", $t.Line = "13", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2793.TestAsyncBlockStatement();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2793", $t.File = "Batch3\\BridgeIssues\\2700\\N2793.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2794", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2794)],
        statics: {
            methods: {
                TestTemplateTokens: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2794).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2794, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestTemplateTokens()", $t.Line = "53", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2794.TestTemplateTokens();
                },
                TestNameTokens: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2794).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2794, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNameTokens()", $t.Line = "61", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2794.TestNameTokens();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2794", $t.File = "Batch3\\BridgeIssues\\2700\\N2794.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2795", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2795)],
        statics: {
            methods: {
                TestVirtualClass: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2795).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2795, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestVirtualClass()", $t.Line = "43", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2795.TestVirtualClass();
                },
                TestVirtualInterface: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2795).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2795, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestVirtualInterface()", $t.Line = "58", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2795.TestVirtualInterface();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2795", $t.File = "Batch3\\BridgeIssues\\2700\\N2795.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2802", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2802)],
        statics: {
            methods: {
                TestLocalesWithoutAmPm: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2802).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2802, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLocalesWithoutAmPm()", $t.Line = "13", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2802.TestLocalesWithoutAmPm();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2802", $t.File = "Batch3\\BridgeIssues\\2800\\N2802.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2818", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2818)],
        statics: {
            methods: {
                TestFnProperty: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2818).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2818, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestFnProperty()", $t.Line = "51", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2818.TestFnProperty();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2818", $t.File = "Batch3\\BridgeIssues\\2800\\N2818.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2840", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2840)],
        statics: {
            methods: {
                TestScope: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2840).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2840, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestScope()", $t.Line = "53", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2840.TestScope();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2840", $t.File = "Batch3\\BridgeIssues\\2800\\N2840.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2844", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2844)],
        statics: {
            methods: {
                TestPropertyInitialization: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2844).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2844, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestPropertyInitialization()", $t.Line = "45", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2844.TestPropertyInitialization();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2844", $t.File = "Batch3\\BridgeIssues\\2800\\N2844.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2847", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2847)],
        statics: {
            methods: {
                TestCommonSwitch: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2847).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2847, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCommonSwitch()", $t.Line = "61", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2847.TestCommonSwitch();
                },
                TestAsyncSwitch: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2847).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2847, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncSwitch()", $t.Line = "67", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2847.TestAsyncSwitch();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2847", $t.File = "Batch3\\BridgeIssues\\2800\\N2847.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2855", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2855)],
        statics: {
            methods: {
                TestVirtualNestedClasses: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2855).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2855, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestVirtualNestedClasses()", $t.Line = "33", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2855.TestVirtualNestedClasses();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2855", $t.File = "Batch3\\BridgeIssues\\2800\\N2855.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2859", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2859)],
        statics: {
            methods: {
                TestContractAssertWithThis: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2859).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2859, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestContractAssertWithThis()", $t.Line = "28", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2859.TestContractAssertWithThis();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2859", $t.File = "Batch3\\BridgeIssues\\2800\\N2859.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2871", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2871)],
        statics: {
            methods: {
                TestCloneOnAssignment: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2871).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2871, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCloneOnAssignment()", $t.Line = "32", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2871.TestCloneOnAssignment();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2871", $t.File = "Batch3\\BridgeIssues\\2800\\N2871.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2874", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2874)],
        statics: {
            methods: {
                TestExternalOverriding: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2874).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2874, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestExternalOverriding()", $t.Line = "104", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2874.TestExternalOverriding();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2874", $t.File = "Batch3\\BridgeIssues\\2800\\N2874.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2886", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2886)],
        statics: {
            methods: {
                Test2DArrayDefValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2886).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2886, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Test2DArrayDefValue()", $t.Line = "18", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2886.Test2DArrayDefValue();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2886", $t.File = "Batch3\\BridgeIssues\\2800\\N2886.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2898", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2898)],
        statics: {
            methods: {
                TestCreateDelegate: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2898).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2898, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCreateDelegate()", $t.Line = "42", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2898.TestCreateDelegate();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2898", $t.File = "Batch3\\BridgeIssues\\2800\\N2898.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2898_2", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2898_2)],
        statics: {
            methods: {
                TestCreateDelegateReflection: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2898_2).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2898_2, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCreateDelegateReflection()", $t.Line = "85", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2898_2.TestCreateDelegateReflection();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2898_2", $t.File = "Batch3\\BridgeIssues\\2800\\N2898.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2899", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2899)],
        statics: {
            methods: {
                TestDelegateCombining: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2899).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2899, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDelegateCombining()", $t.Line = "25", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2899.TestDelegateCombining();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2899", $t.File = "Batch3\\BridgeIssues\\2800\\N2899.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2901", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2901)],
        statics: {
            methods: {
                TestDelegateRemoving: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2901).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2901, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDelegateRemoving()", $t.Line = "13", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2901.TestDelegateRemoving();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2901", $t.File = "Batch3\\BridgeIssues\\2900\\N2901.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2903", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2903)],
        statics: {
            methods: {
                TestGetInvocationList: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2903).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2903, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGetInvocationList()", $t.Line = "35", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2903.TestGetInvocationList();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2903", $t.File = "Batch3\\BridgeIssues\\2900\\N2903.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2904", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2904)],
        statics: {
            methods: {
                TestGetInvocationList: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2904).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2904, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGetInvocationList()", $t.Line = "41", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2904.TestGetInvocationList();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2904", $t.File = "Batch3\\BridgeIssues\\2900\\N2904.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2911", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2911)],
        statics: {
            methods: {
                TestGenericHtmlClass: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2911).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2911, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestGenericHtmlClass()", $t.Line = "15", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2911.TestGenericHtmlClass();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2911", $t.File = "Batch3\\BridgeIssues\\2900\\N2911.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2915", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2915)],
        statics: {
            methods: {
                TestLocalesWithoutColonInTime: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2915).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2915, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLocalesWithoutColonInTime()", $t.Line = "13", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2915.TestLocalesWithoutColonInTime();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2915", $t.File = "Batch3\\BridgeIssues\\2900\\N2915.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2916", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2916)],
        statics: {
            methods: {
                TestIndexerClone: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2916).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2916, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIndexerClone()", $t.Line = "45", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2916.TestIndexerClone();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2916", $t.File = "Batch3\\BridgeIssues\\2900\\N2916.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge381", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge381)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge381).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge381, 6, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "30", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge381.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge381", $t.File = "Batch3\\BridgeIssues\\0300\\N381.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge447", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge447)],
        statics: {
            methods: {
                CheckInlineExpression: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge447).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge447, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CheckInlineExpression()", $t.Line = "23", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge447.CheckInlineExpression();
                },
                CheckInlineCalls: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge447).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge447, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "CheckInlineCalls()", $t.Line = "31", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge447.CheckInlineCalls();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge447", $t.File = "Batch3\\BridgeIssues\\0400\\N447.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge472", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge472)],
        statics: {
            methods: {
                Test: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge472).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge472, 10, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "Test()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge472.Test();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge472", $t.File = "Batch3\\BridgeIssues\\0400\\N472.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge479", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge479)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge479).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge479, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge479.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge479", $t.File = "Batch3\\BridgeIssues\\0400\\N479.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge483", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge483)],
        statics: {
            methods: {
                TestPropertyWithNameSameAsType: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge483).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge483, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestPropertyWithNameSameAsType()", $t.Line = "10", $t));
                    t.Fixture.TestPropertyWithNameSameAsType();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge483", $t.File = "Batch3\\BridgeIssues\\0400\\N483.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge485", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge485)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge485).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge485, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "13", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge485.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge485", $t.File = "Batch3\\BridgeIssues\\0400\\N485.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge495", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge495)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge495).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge495, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge495.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge495", $t.File = "Batch3\\BridgeIssues\\0400\\N495.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge502", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge502)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge502).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge502, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge502.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge502", $t.File = "Batch3\\BridgeIssues\\0500\\N502.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge503", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge503)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge503).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge503, 4, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge503.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge503", $t.File = "Batch3\\BridgeIssues\\0500\\N503.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge508", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge508)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge508).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge508, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "15", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge508.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge508", $t.File = "Batch3\\BridgeIssues\\0500\\N508.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge514", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge514)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge514).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge514, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge514.TestUseCase();
                },
                TestRelated: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge514).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge514, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestRelated()", $t.Line = "22", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge514.TestRelated();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge514", $t.File = "Batch3\\BridgeIssues\\0500\\N514.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge520", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge520)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge520).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge520, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "29", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge520.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge520", $t.File = "Batch3\\BridgeIssues\\0500\\N520.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge522", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge522)],
        statics: {
            methods: {
                TestUseCase1: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge522).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge522, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase1()", $t.Line = "42", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge522.TestUseCase1();
                },
                TestUseCase2: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge522).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge522, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase2()", $t.Line = "54", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge522.TestUseCase2();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge522", $t.File = "Batch3\\BridgeIssues\\0500\\N522.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge532", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge532)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge532).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge532, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge532.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge532", $t.File = "Batch3\\BridgeIssues\\0500\\N532.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge537", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge537)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge537).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge537, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "15", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge537.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge537", $t.File = "Batch3\\BridgeIssues\\0500\\N537A.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge538", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge538)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge538).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge538, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge538.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge538", $t.File = "Batch3\\BridgeIssues\\0500\\N538.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge546", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge546)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge546).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge546, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge546.TestUseCase();
                },
                TestRelated: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge546).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge546, 5, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestRelated()", $t.Line = "23", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge546.TestRelated();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge546", $t.File = "Batch3\\BridgeIssues\\0500\\N546.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge548", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge548)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge548).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge548, 18, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "15", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge548.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge548", $t.File = "Batch3\\BridgeIssues\\0500\\N548.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge549", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge549)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge549).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge549, 153, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "15", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge549.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge549", $t.File = "Batch3\\BridgeIssues\\0500\\N549.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge550", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge550)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge550).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge550, 10, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "17", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge550.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge550", $t.File = "Batch3\\BridgeIssues\\0500\\N550.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge554", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge554)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge554).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge554, 4, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge554.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge554", $t.File = "Batch3\\BridgeIssues\\0500\\N554.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge555", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge555)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge555).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge555, 15, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge555.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge555", $t.File = "Batch3\\BridgeIssues\\0500\\N555.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge558", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge558)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge558).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge558, 4, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "36", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge558.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge558", $t.File = "Batch3\\BridgeIssues\\0500\\N558.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge559", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge559)],
        statics: {
            methods: {
                TestUseCase1: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge559).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge559, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase1()", $t.Line = "83", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge559.TestUseCase1();
                },
                TestUseCase2: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge559).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge559, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase2()", $t.Line = "91", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge559.TestUseCase2();
                },
                TestUseCase3: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge559).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge559, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase3()", $t.Line = "99", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge559.TestUseCase3();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge559", $t.File = "Batch3\\BridgeIssues\\0500\\N559.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge563", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge563)],
        statics: {
            methods: {
                TesForeach: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge563).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge563, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TesForeach()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge563.TesForeach();
                },
                TesFor: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge563).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge563, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TesFor()", $t.Line = "45", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge563.TesFor();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge563", $t.File = "Batch3\\BridgeIssues\\0500\\N563.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge566", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge566)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge566).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge566, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "30", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge566.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge566", $t.File = "Batch3\\BridgeIssues\\0500\\N566.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge572", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge572)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge572).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge572, 4, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge572.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge572", $t.File = "Batch3\\BridgeIssues\\0500\\N572.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge577", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge577)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge577).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge577, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "32", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge577.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge577", $t.File = "Batch3\\BridgeIssues\\0500\\N577.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge578", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge578)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge578).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge578, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge578.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge578", $t.File = "Batch3\\BridgeIssues\\0500\\N578.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge580", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge580)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge580).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge580, 10, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge580.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge580", $t.File = "Batch3\\BridgeIssues\\0500\\N580.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge582)],
        statics: {
            methods: {
                TestAddTimeSpan: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge582).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582, 6, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAddTimeSpan()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge582.TestAddTimeSpan();
                },
                TestAddTicks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge582).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582, 6, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAddTicks()", $t.Line = "26", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge582.TestAddTicks();
                },
                TestTicks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge582).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582, 7, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestTicks()", $t.Line = "40", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge582.TestTicks();
                },
                TestSubtractTimeSpan: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge582).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestSubtractTimeSpan()", $t.Line = "57", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge582.TestSubtractTimeSpan();
                },
                TestTimeOfDay: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge582).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582, 6, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestTimeOfDay()", $t.Line = "89", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge582.TestTimeOfDay();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge582", $t.File = "Batch3\\BridgeIssues\\0500\\N582.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge583", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge583)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge583).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge583, 120, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge583.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge583", $t.File = "Batch3\\BridgeIssues\\0500\\N583.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge586", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge586)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge586).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge586, 4, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "53", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge586.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge586", $t.File = "Batch3\\BridgeIssues\\0500\\N586.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge588", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge588)],
        statics: {
            methods: {
                TestUseCase1: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge588).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge588, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase1()", $t.Line = "76", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge588.TestUseCase1();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge588", $t.File = "Batch3\\BridgeIssues\\0500\\N588.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge588C", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C)],
        statics: {
            methods: {
                TestUseCase2: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge588C, 9, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase2()", $t.Line = "52", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C.TestUseCase2();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C", $t.File = "Batch3\\BridgeIssues\\0500\\N588.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge592", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge592)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge592).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge592, 6, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge592.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge592", $t.File = "Batch3\\BridgeIssues\\0500\\N592.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge595", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge595)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge595).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge595, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "54", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge595.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge595", $t.File = "Batch3\\BridgeIssues\\0500\\N595.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge597", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge597)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge597).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge597, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "30", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge597.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge597", $t.File = "Batch3\\BridgeIssues\\0500\\N597.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge603", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge603)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge603).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge603, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "72", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge603.TestUseCase();
                },
                TestRelated: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge603).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge603, 5, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestRelated()", $t.Line = "82", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge603.TestRelated();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge603", $t.File = "Batch3\\BridgeIssues\\0600\\N603.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge606", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge606)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge606).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge606, 5, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "42", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge606.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge606", $t.File = "Batch3\\BridgeIssues\\0600\\N606.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge607", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge607)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge607).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge607, 5, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "35", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge607.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge607", $t.File = "Batch3\\BridgeIssues\\0600\\N607.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge608", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge608)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge608).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge608, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "35", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge608.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge608", $t.File = "Batch3\\BridgeIssues\\0600\\N608.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge615", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge615)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge615).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge615, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "23", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge615.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge615", $t.File = "Batch3\\BridgeIssues\\0600\\N615.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge623", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge623)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge623).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge623, 8, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "57", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge623.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge623", $t.File = "Batch3\\BridgeIssues\\0600\\N623.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge625", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge625)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge625).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge625, 5, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "27", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge625.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge625", $t.File = "Batch3\\BridgeIssues\\0600\\N625.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge634", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge634)],
        statics: {
            methods: {
                TestUseCase1: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge634).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge634, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase1()", $t.Line = "95", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge634.TestUseCase1();
                },
                TestUseCase2: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge634).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge634, 21, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase2()", $t.Line = "114", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge634.TestUseCase2();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge634", $t.File = "Batch3\\BridgeIssues\\0600\\N634.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge635", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge635)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge635).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge635, 4, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "28", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge635.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge635", $t.File = "Batch3\\BridgeIssues\\0600\\N635.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge637", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge637)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge637).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge637, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "15", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge637.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge637", $t.File = "Batch3\\BridgeIssues\\0600\\N637.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge647", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge647)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge647).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge647, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "29", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge647.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge647", $t.File = "Batch3\\BridgeIssues\\0600\\N647.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge648", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge648)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge648).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge648, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "26", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge648.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge648", $t.File = "Batch3\\BridgeIssues\\0600\\N648.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge652", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge652)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge652).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge652, 4, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "62", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge652.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge652", $t.File = "Batch3\\BridgeIssues\\0600\\N652.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge655", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge655)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge655).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge655, 12, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "34", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge655.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge655", $t.File = "Batch3\\BridgeIssues\\0600\\N655.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge658", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge658)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge658).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge658, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge658.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge658", $t.File = "Batch3\\BridgeIssues\\0600\\N658.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge660", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge660)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge660).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge660, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "63", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge660.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge660", $t.File = "Batch3\\BridgeIssues\\0600\\N660.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge661", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge661)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge661).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge661, 6, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "20", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge661.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge661", $t.File = "Batch3\\BridgeIssues\\0600\\N661.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge664", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge664)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge664).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge664, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "42", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge664.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge664", $t.File = "Batch3\\BridgeIssues\\0600\\N664.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge666", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge666)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge666).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge666, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge666.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge666", $t.File = "Batch3\\BridgeIssues\\0600\\N666.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge671", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge671)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge671).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge671, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "39", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge671.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge671", $t.File = "Batch3\\BridgeIssues\\0600\\N671.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge674", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge674)],
        statics: {
            methods: {
                TestUndefinedToReferenceType: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge674).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge674, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUndefinedToReferenceType()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge674.TestUndefinedToReferenceType();
                },
                TestUndefinedToValueType: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge674).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge674, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUndefinedToValueType()", $t.Line = "21", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge674.TestUndefinedToValueType();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge674", $t.File = "Batch3\\BridgeIssues\\0600\\N674.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge675", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge675)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge675).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge675, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge675.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge675", $t.File = "Batch3\\BridgeIssues\\0600\\N675.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge687", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge687)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge687).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge687, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge687.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge687", $t.File = "Batch3\\BridgeIssues\\0600\\N687.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge689", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge689)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge689).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge689, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge689.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge689", $t.File = "Batch3\\BridgeIssues\\0600\\N689.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge690", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge690)],
        statics: {
            methods: {
                TestUseCaseForInstance: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge690).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge690, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCaseForInstance()", $t.Line = "43", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge690.TestUseCaseForInstance();
                },
                TestUseCaseForStatic: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge690).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge690, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCaseForStatic()", $t.Line = "54", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge690.TestUseCaseForStatic();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge690", $t.File = "Batch3\\BridgeIssues\\0600\\N690.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge691", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge691)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge691).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge691, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge691.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge691", $t.File = "Batch3\\BridgeIssues\\0600\\N691.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge692", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge692)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge692).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge692, 8, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "89", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge692", $t.File = "Batch3\\BridgeIssues\\0600\\N692.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge693", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge693)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge693).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge693, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "28", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge693.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge693", $t.File = "Batch3\\BridgeIssues\\0600\\N693.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge694", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge694)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge694).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge694, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge694.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge694", $t.File = "Batch3\\BridgeIssues\\0600\\N694.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge696", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge696)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge696).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge696, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "13", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge696.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge696", $t.File = "Batch3\\BridgeIssues\\0600\\N696.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge699", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge699)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge699).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge699, 5, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge699.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge699", $t.File = "Batch3\\BridgeIssues\\0600\\N699.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge706", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge706)],
        statics: {
            methods: {
                TestFieldPropertyWithInitializer: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge706).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge706, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestFieldPropertyWithInitializer()", $t.Line = "17", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge706.TestFieldPropertyWithInitializer();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge706", $t.File = "Batch3\\BridgeIssues\\0700\\N706.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge708", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge708)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge708).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge708, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge708.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge708", $t.File = "Batch3\\BridgeIssues\\0700\\N708.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge721", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge721)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge721).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge721, 4, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge721.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge721", $t.File = "Batch3\\BridgeIssues\\0700\\N721.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge722", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge722)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge722).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge722, 9, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "31", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge722.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge722", $t.File = "Batch3\\BridgeIssues\\0700\\N722.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge726", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge726)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge726).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge726, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge726.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge726", $t.File = "Batch3\\BridgeIssues\\0700\\N726.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge732", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge732)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge732).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge732, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge732.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge732", $t.File = "Batch3\\BridgeIssues\\0700\\N732.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge733", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge733)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge733).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge733, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "18", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge733.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge733", $t.File = "Batch3\\BridgeIssues\\0700\\N733.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge743", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge743)],
        statics: {
            methods: {
                TestInlineMethodsAsReference: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge743).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge743, 9, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInlineMethodsAsReference()", $t.Line = "34", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge743.TestInlineMethodsAsReference();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge743", $t.File = "Batch3\\BridgeIssues\\0700\\N743.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge751", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge751)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge751).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge751, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge751.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge751", $t.File = "Batch3\\BridgeIssues\\0700\\N751.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge758", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge758)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge758).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge758, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge758.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge758", $t.File = "Batch3\\BridgeIssues\\0700\\N758.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge760", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge760)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge760).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge760, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge760.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge760", $t.File = "Batch3\\BridgeIssues\\0700\\N760.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge762", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge762)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge762).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge762, 4, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "19", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge762.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge762", $t.File = "Batch3\\BridgeIssues\\0700\\N762.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge772", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge772)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge772).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge772, 10, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge772.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge772", $t.File = "Batch3\\BridgeIssues\\0700\\N772.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge777", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge777)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge777).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge777, 4, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "33", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge777.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge777", $t.File = "Batch3\\BridgeIssues\\0700\\N777.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge782", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge782)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge782).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge782, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge782.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge782", $t.File = "Batch3\\BridgeIssues\\0700\\N782.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge785", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge785)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge785).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge785, 7, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "30", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge785.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge785", $t.File = "Batch3\\BridgeIssues\\0700\\N785.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge786", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge786)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge786).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge786, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge786.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge786", $t.File = "Batch3\\BridgeIssues\\0700\\N786.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge788", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge788)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge788).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge788, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge788.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge788", $t.File = "Batch3\\BridgeIssues\\0700\\N788.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge789", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge789)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge789).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge789, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge789.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge789", $t.File = "Batch3\\BridgeIssues\\0700\\N789.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge793", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge793)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge793).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge793, 5, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge793.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge793", $t.File = "Batch3\\BridgeIssues\\0700\\N793.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge795", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge795)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge795).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge795, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "99", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge795.TestUseCase();
                },
                TestRelated: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge795).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge795, 16, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestRelated()", $t.Line = "108", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge795.TestRelated();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge795", $t.File = "Batch3\\BridgeIssues\\0700\\N795.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge796", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge796)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge796).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge796, 5, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge796.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge796", $t.File = "Batch3\\BridgeIssues\\0700\\N796.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge815", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge815)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge815).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge815, 7, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge815.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge815", $t.File = "Batch3\\BridgeIssues\\0800\\N815.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge816", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge816)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge816).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge816, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge816.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge816", $t.File = "Batch3\\BridgeIssues\\0800\\N816.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge817", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge817)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge817).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge817, 4, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge817.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge817", $t.File = "Batch3\\BridgeIssues\\0800\\N817.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge818", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge818)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge818).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge818, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge818.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge818", $t.File = "Batch3\\BridgeIssues\\0800\\N818.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge821", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge821)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge821).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge821, 9, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge821.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge821", $t.File = "Batch3\\BridgeIssues\\0800\\N821.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge823", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge823)],
        statics: {
            methods: {
                GetTicksReturnsCorrectValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge823).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge823, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "GetTicksReturnsCorrectValue()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge823.GetTicksReturnsCorrectValue();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge823", $t.File = "Batch3\\BridgeIssues\\0800\\N823.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge826", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge826)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge826).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge826, 5, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "55", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge826.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge826", $t.File = "Batch3\\BridgeIssues\\0800\\N826.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge830", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge830)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge830).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge830, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "35", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge830.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge830", $t.File = "Batch3\\BridgeIssues\\0800\\N830.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge835", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge835)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge835).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge835, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge835.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge835", $t.File = "Batch3\\BridgeIssues\\0800\\N835.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge841", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge841)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge841).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge841, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge841.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge841", $t.File = "Batch3\\BridgeIssues\\0800\\N841.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge844", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge844)],
        statics: {
            methods: {
                NullableAndSimpleDateTimeToStringEquals: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge844).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge844, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "NullableAndSimpleDateTimeToStringEquals()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge844.NullableAndSimpleDateTimeToStringEquals();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge844", $t.File = "Batch3\\BridgeIssues\\0800\\N844.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge849", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge849)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge849).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge849, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "18", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge849.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge849", $t.File = "Batch3\\BridgeIssues\\0800\\N849.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge857", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge857)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge857).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge857, 8, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "36", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge857.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge857", $t.File = "Batch3\\BridgeIssues\\0800\\N857.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge861", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge861)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge861).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge861, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "27", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge861.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge861", $t.File = "Batch3\\BridgeIssues\\0800\\N861.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge863", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge863)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge863).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge863, 4, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge863.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge863", $t.File = "Batch3\\BridgeIssues\\0800\\N863.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge874", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge874)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge874).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge874, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge874.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge874", $t.File = "Batch3\\BridgeIssues\\0800\\N874.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge881", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge881)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge881).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge881, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "15", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge881.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge881", $t.File = "Batch3\\BridgeIssues\\0800\\N881.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge882", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge882)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge882).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge882, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "46", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge882.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge882", $t.File = "Batch3\\BridgeIssues\\0800\\N882.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge883", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge883)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge883).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge883, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "36", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge883.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge883", $t.File = "Batch3\\BridgeIssues\\0800\\N883.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge889", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge889)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge889).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge889, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "18", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge889.TestUseCase();
                },
                TestMakeEnumerable: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge889).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge889, 8, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestMakeEnumerable()", $t.Line = "30", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge889.TestMakeEnumerable();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge889", $t.File = "Batch3\\BridgeIssues\\0800\\N889.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge892", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge892)],
        statics: {
            methods: {
                TestUseCase: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge892).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge892, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestUseCase()", $t.Line = "17", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge892.TestUseCase();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge892", $t.File = "Batch3\\BridgeIssues\\0800\\N892.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge893", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge893)],
        statics: {
            methods: {
                EnumToStringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge893).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge893, 5, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "EnumToStringWorks()", $t.Line = "24", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge893.EnumToStringWorks();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge893", $t.File = "Batch3\\BridgeIssues\\0800\\N893.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge898", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge898)],
        statics: {
            methods: {
                TestDecimalConversion: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge898).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge898, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDecimalConversion()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge898.TestDecimalConversion();
                },
                TestDoubleConversion: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge898).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge898, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDoubleConversion()", $t.Line = "20", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge898.TestDoubleConversion();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge898", $t.File = "Batch3\\BridgeIssues\\0800\\N898.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge905", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge905)],
        statics: {
            methods: {
                DayOfWeekFixed: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge905).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge905, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DayOfWeekFixed()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge905.DayOfWeekFixed();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge905", $t.File = "Batch3\\BridgeIssues\\0900\\N905.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge906", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge906)],
        statics: {
            methods: {
                TestIfAsyncMethod: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge906).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge906, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIfAsyncMethod()", $t.Line = "16", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge906.TestIfAsyncMethod();
                },
                TestIfElseAsyncMethod: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge906).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge906, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIfElseAsyncMethod()", $t.Line = "40", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge906.TestIfElseAsyncMethod();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge906", $t.File = "Batch3\\BridgeIssues\\0900\\N906.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge907", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge907)],
        statics: {
            methods: {
                TestStringSpitWithNullParameterFixed: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge907).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge907, 6, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestStringSpitWithNullParameterFixed()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge907.TestStringSpitWithNullParameterFixed();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge907", $t.File = "Batch3\\BridgeIssues\\0900\\N907.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge912", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge912)],
        statics: {
            methods: {
                TestAsyncMethodInBlock: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge912).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge912, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncMethodInBlock()", $t.Line = "17", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge912.TestAsyncMethodInBlock();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge912", $t.File = "Batch3\\BridgeIssues\\0900\\N912.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge913", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge913)],
        statics: {
            methods: {
                TestNullableDateTimeGreaterThanWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge913).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge913, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNullableDateTimeGreaterThanWorks()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge913.TestNullableDateTimeGreaterThanWorks();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge913", $t.File = "Batch3\\BridgeIssues\\0900\\N913.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge918", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge918)],
        statics: {
            methods: {
                TestDynamicAsyncResult: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge918).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge918, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDynamicAsyncResult()", $t.Line = "17", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge918.TestDynamicAsyncResult();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge918", $t.File = "Batch3\\BridgeIssues\\0900\\N918.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge922", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge922)],
        statics: {
            methods: {
                TestLinqDecimal: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge922).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge922, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestLinqDecimal()", $t.Line = "11", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge922.TestLinqDecimal();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge922", $t.File = "Batch3\\BridgeIssues\\0900\\N922.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge928", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge928)],
        statics: {
            methods: {
                TestAsyncMethod: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge928).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge928, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncMethod()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge928.TestAsyncMethod();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge928", $t.File = "Batch3\\BridgeIssues\\0900\\N928.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge929", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge929)],
        statics: {
            methods: {
                TestAsyncException: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge929).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge929, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncException()", $t.Line = "14", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge929.TestAsyncException();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge929", $t.File = "Batch3\\BridgeIssues\\0900\\N929.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge930", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge930)],
        statics: {
            methods: {
                TestAsyncException: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge930).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge930, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestAsyncException()", $t.Line = "31", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge930.TestAsyncException();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge930", $t.File = "Batch3\\BridgeIssues\\0900\\N930.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge933", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge933)],
        statics: {
            methods: {
                TestBooleanInIfStatement: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge933).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge933, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestBooleanInIfStatement()", $t.Line = "15", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge933.TestBooleanInIfStatement();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge933", $t.File = "Batch3\\BridgeIssues\\0900\\N933.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge952", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge952)],
        statics: {
            methods: {
                TestDoubleMinValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge952).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge952, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDoubleMinValue()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge952.TestDoubleMinValue();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge952", $t.File = "Batch3\\BridgeIssues\\0900\\N952.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge968", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge968)],
        statics: {
            methods: {
                TestDecimalDoesNotParseIncorrectValue: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge968).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge968, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDecimalDoesNotParseIncorrectValue()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge968.TestDecimalDoesNotParseIncorrectValue();
                },
                TestDecimalParsesCorrectValues: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge968).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge968, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestDecimalParsesCorrectValues()", $t.Line = "19", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge968.TestDecimalParsesCorrectValues();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge968", $t.File = "Batch3\\BridgeIssues\\0900\\N968.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge975", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge975)],
        statics: {
            methods: {
                TestCastToLongWorksForBigNumberInIE: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge975).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge975, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestCastToLongWorksForBigNumberInIE()", $t.Line = "10", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge975.TestCastToLongWorksForBigNumberInIE();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge975", $t.File = "Batch3\\BridgeIssues\\0900\\N975.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge989", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge989)],
        statics: {
            methods: {
                DateTimeToISOStringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge989).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge989, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DateTimeToISOStringWorks()", $t.Line = "12", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge989.DateTimeToISOStringWorks();
                },
                DateToISOStringWorks: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge989).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge989, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "DateToISOStringWorks()", $t.Line = "27", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge989.DateToISOStringWorks();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge989", $t.File = "Batch3\\BridgeIssues\\0900\\N989.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge991", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge991)],
        statics: {
            methods: {
                TestMultiplyAssignment: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge991).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge991, 14, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestMultiplyAssignment()", $t.Line = "17", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge991.TestMultiplyAssignment();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge991", $t.File = "Batch3\\BridgeIssues\\0900\\N991.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge997", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge997)],
        statics: {
            methods: {
                TestConvertAllForIntList: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge997).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge997, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestConvertAllForIntList()", $t.Line = "13", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge997.TestConvertAllForIntList();
                },
                TestConvertAllForNullConverter: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge997).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge997, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestConvertAllForNullConverter()", $t.Line = "21", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge997.TestConvertAllForNullConverter();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge997", $t.File = "Batch3\\BridgeIssues\\0900\\N997.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge999", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge999)],
        statics: {
            methods: {
                TestNestedLambdasToLifting: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge999).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge999, 12, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNestedLambdasToLifting()", $t.Line = "14", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge999.TestNestedLambdasToLifting();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge999", $t.File = "Batch3\\BridgeIssues\\0900\\N999.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge999_1", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge999_1)],
        statics: {
            methods: {
                TestNestedLambdasToLiftingInForeach: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge999_1).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge999_1, 5, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestNestedLambdasToLiftingInForeach()", $t.Line = "66", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge999_1.TestNestedLambdasToLiftingInForeach();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.Bridge999_1", $t.File = "Batch3\\BridgeIssues\\0900\\N999.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N1122)],
        statics: {
            methods: {
                TestClippingInDefaultOverflowMode: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N1122).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122, 4, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestClippingInDefaultOverflowMode()", $t.Line = "20", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.N1122.TestClippingInDefaultOverflowMode();
                },
                TestIntegerDivisionInDefaultMode: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N1122).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122, 4, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestIntegerDivisionInDefaultMode()", $t.Line = "38", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.N1122.TestIntegerDivisionInDefaultMode();
                },
                TestInfinityCastDefaultOverflowMode: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N1122).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122, 16, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInfinityCastDefaultOverflowMode()", $t.Line = "56", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.N1122.TestInfinityCastDefaultOverflowMode();
                },
                TestInfinityCastWithNullable1DefaultOverflowMode: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N1122).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122, 16, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInfinityCastWithNullable1DefaultOverflowMode()", $t.Line = "104", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.N1122.TestInfinityCastWithNullable1DefaultOverflowMode();
                },
                TestInfinityCastWithNullable2DefaultOverflowMode: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N1122).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122, 16, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestInfinityCastWithNullable2DefaultOverflowMode()", $t.Line = "152", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.N1122.TestInfinityCastWithNullable2DefaultOverflowMode();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.N1122", $t.File = "Batch3\\BridgeIssues\\1100\\N1122.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N2460", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N2460)],
        statics: {
            methods: {
                TestSequenceInheritance: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N2460).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N2460, void 0, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "TestSequenceInheritance()", $t.Line = "20", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.N2460.TestSequenceInheritance();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.N2460", $t.File = "Batch3\\BridgeIssues\\2400\\N2460.cs", $t);
                }
                return this.context;
            }
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues)],
        statics: {
            methods: {
                N169: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N169()", $t.Line = "520", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N169();
                },
                N240: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N240()", $t.Line = "533", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N240();
                },
                N264: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N264()", $t.Line = "544", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N264();
                },
                N266: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N266()", $t.Line = "555", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N266();
                },
                N272: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N272()", $t.Line = "563", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N272();
                },
                N273: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 4, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N273()", $t.Line = "573", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N273();
                },
                N277: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N277()", $t.Line = "593", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N277();
                },
                N294: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N294()", $t.Line = "600", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N294();
                },
                N304: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N304()", $t.Line = "610", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N304();
                },
                N305: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N305()", $t.Line = "624", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N305();
                },
                N306: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N306()", $t.Line = "639", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N306();
                },
                N329: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 5, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N329()", $t.Line = "655", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N329();
                },
                N335: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N335()", $t.Line = "670", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N335();
                },
                N336: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N336()", $t.Line = "678", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N336();
                },
                N337: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 4, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N337()", $t.Line = "691", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N337();
                },
                N338: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N338()", $t.Line = "706", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N338();
                },
                N339: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N339()", $t.Line = "717", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N339();
                },
                N340: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 6, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N340()", $t.Line = "727", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N340();
                },
                N341: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 4, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N341()", $t.Line = "743", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N341();
                },
                N342: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N342()", $t.Line = "786", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N342();
                },
                N349: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 5, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N349()", $t.Line = "801", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N349();
                },
                N377: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 6, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N377()", $t.Line = "817", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N377();
                },
                N383: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N383()", $t.Line = "837", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N383();
                },
                N393: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N393()", $t.Line = "858", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N393();
                },
                N395: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N395()", $t.Line = "877", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N395();
                },
                N406: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N406()", $t.Line = "902", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N406();
                },
                N407: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N407()", $t.Line = "950", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N407();
                },
                N409: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N409()", $t.Line = "970", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N409();
                },
                N410: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 38, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N410()", $t.Line = "997", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N410();
                },
                N418: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N418()", $t.Line = "1111", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N418();
                },
                N422: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N422()", $t.Line = "1122", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N422();
                },
                N428: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N428()", $t.Line = "1135", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N428();
                },
                N435: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N435()", $t.Line = "1145", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N435();
                },
                N436: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 3, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N436()", $t.Line = "1154", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N436();
                },
                N438: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N438()", $t.Line = "1168", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N438();
                },
                N439: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N439()", $t.Line = "1177", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N439();
                },
                N442: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N442()", $t.Line = "1195", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N442();
                },
                N460: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N460()", $t.Line = "1206", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N460();
                },
                N467: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N467()", $t.Line = "1216", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N467();
                },
                N469: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N469()", $t.Line = "1233", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N469();
                },
                N470: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 16, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N470()", $t.Line = "1253", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N470();
                },
                N499: function (assert) {
                    var $t;
                    var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, ($t = new Bridge.Test.Runtime.TestContext(), $t.Method = "N499()", $t.Line = "1320", $t));
                    Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N499();
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
                    this.context = ($t = new Bridge.Test.Runtime.FixtureContext(), $t.Project = "Batch3", $t.ClassName = "Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues", $t.File = "Batch3\\BridgeIssues\\TestBridgeIssues.cs", $t);
                }
                return this.context;
            }
        }
    });
});
