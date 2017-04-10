/**
 * @compiler Bridge.NET 16.0.0
 */
Bridge.assembly("Bridge.Test.Bridge.ClientTest.Batch3", function ($asm, globals) {
    

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner", {
        $main: function () {
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
            QUnit.test("#1058 - TestNameTrue", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1058.TestNameTrue);
            QUnit.test("#1058 - TestNameFalse", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1058.TestNameFalse);
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
            QUnit.test("#1134 - TestJsonArrayParse", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1134.TestJsonArrayParse);
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
            QUnit.test("#1241 - TestMarkElement", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1241.TestMarkElement);
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
            QUnit.test("#1438 - TestJSONParse", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1438.TestJSONParse);
            QUnit.test("#1438 - TestJSONParseAsArray", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1438.TestJSONParseAsArray);
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
            QUnit.test("#381 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge381.TestUseCase);
            QUnit.test("#447 - CheckInlineExpression", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge447.CheckInlineExpression);
            QUnit.test("#447 - CheckInlineCalls", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge447.CheckInlineCalls);
            QUnit.test("#472 - Test", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge472.Test);
            QUnit.test("#479 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge479.TestUseCase);
            QUnit.test("#483 - TestPropertyWithNameSameAsType", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge483.TestPropertyWithNameSameAsType);
            QUnit.test("#485 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge485.TestUseCase);
            QUnit.test("#495 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge495.TestUseCase);
            QUnit.test("#501 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge501.TestUseCase);
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
            QUnit.test("#544 - TestUseCase", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge544.TestUseCase);
            QUnit.test("#544 - TestRelated", Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge544.TestRelated);
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
            ThisKeywordInStructConstructorWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge069).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge069, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "ThisKeywordInStructConstructorWorks()",
                    Line: "22"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge069.ThisKeywordInStructConstructorWorks();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge069",
                    File: "Batch3\\BridgeIssues\\0100\\N069.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1000", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1000)],
        statics: {
            TestStaticViaChild: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1000).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1000, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStaticViaChild()",
                    Line: "22"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1000.TestStaticViaChild();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1000",
                    File: "Batch3\\BridgeIssues\\1000\\N1000.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1001", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001)],
        statics: {
            TestDefaultValues: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1001, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDefaultValues()",
                    Line: "29"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001.TestDefaultValues();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1001",
                    File: "Batch3\\BridgeIssues\\1000\\N1001.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1003", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1003)],
        statics: {
            TestGenericLambdasToLifting: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1003).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1003, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestGenericLambdasToLifting()",
                    Line: "26"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1003.TestGenericLambdasToLifting();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1003",
                    File: "Batch3\\BridgeIssues\\1000\\N1003.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1012", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012)],
        statics: {
            TestSleepZero: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1012, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestSleepZero()",
                    Line: "16"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012.TestSleepZero();
            },
            TestSleepInt: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1012, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestSleepInt()",
                    Line: "33"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012.TestSleepInt();
            },
            TestSleepTimeSpan: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1012, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestSleepTimeSpan()",
                    Line: "50"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012.TestSleepTimeSpan();
            },
            TestSleepThrows: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1012, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestSleepThrows()",
                    Line: "67"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012.TestSleepThrows();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1012",
                    File: "Batch3\\BridgeIssues\\1000\\N1012.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1020", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020)],
        statics: {
            TestFlagEnumWithReference: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1020, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestFlagEnumWithReference()",
                    Line: "26"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020.TestFlagEnumWithReference();
            },
            TestEnumWithReference: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1020, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestEnumWithReference()",
                    Line: "32"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020.TestEnumWithReference();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1020",
                    File: "Batch3\\BridgeIssues\\1000\\N1020.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1024", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1024)],
        statics: {
            TestConstructorOptionalParameter: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1024).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1024, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestConstructorOptionalParameter()",
                    Line: "32"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1024.TestConstructorOptionalParameter();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1024",
                    File: "Batch3\\BridgeIssues\\1000\\N1024.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025)],
        statics: {
            TestC1: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestC1()",
                    Line: "321"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestC1();
            },
            TestC2: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestC2()",
                    Line: "335"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestC2();
            },
            TestC3: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestC3()",
                    Line: "349"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestC3();
            },
            TestI3: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestI3()",
                    Line: "372"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestI3();
            },
            TestI4: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestI4()",
                    Line: "388"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestI4();
            },
            TestI5: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestI5()",
                    Line: "398"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestI5();
            },
            TestI6: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestI6()",
                    Line: "409"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestI6();
            },
            TestI7: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestI7()",
                    Line: "423"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestI7();
            },
            TestI8: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestI8()",
                    Line: "443"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestI8();
            },
            TestI10: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestI10()",
                    Line: "466"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestI10();
            },
            TestI10_1: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestI10_1()",
                    Line: "485"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestI10_1();
            },
            TestI10_2: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestI10_2()",
                    Line: "504"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestI10_2();
            },
            TestI11: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestI11()",
                    Line: "545"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestI11();
            },
            TestI11_1: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1025, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestI11_1()",
                    Line: "560"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025.TestI11_1();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1025",
                    File: "Batch3\\BridgeIssues\\1000\\N1025.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1026", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1026)],
        statics: {
            TestReservedWordIfRefOut: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1026).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1026, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestReservedWordIfRefOut()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1026.TestReservedWordIfRefOut();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1026",
                    File: "Batch3\\BridgeIssues\\1000\\N1026.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1027", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1027)],
        statics: {
            TestNonBridgeInherits: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1027).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1027, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNonBridgeInherits()",
                    Line: "56"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1027.TestNonBridgeInherits();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1027",
                    File: "Batch3\\BridgeIssues\\1000\\N1027.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1029", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1029)],
        statics: {
            TestNullableMethods: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1029).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1029, 6, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNullableMethods()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1029.TestNullableMethods();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1029",
                    File: "Batch3\\BridgeIssues\\1000\\N1029.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1039", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1039)],
        statics: {
            TestMoreThanDecimalDigitsFromTotalHours: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1039).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1039, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestMoreThanDecimalDigitsFromTotalHours()",
                    Line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1039.TestMoreThanDecimalDigitsFromTotalHours();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1039",
                    File: "Batch3\\BridgeIssues\\1000\\N1039.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Decimal", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal)],
        statics: {
            TestPropertyOps: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Decimal, 24, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestPropertyOps()",
                    Line: "163"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.TestPropertyOps();
            },
            TestIndexerOps: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Decimal, 24, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestIndexerOps()",
                    Line: "193"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.TestIndexerOps();
            },
            TestDictOps: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Decimal, 24, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDictOps()",
                    Line: "224"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.TestDictOps();
            },
            TestVariableOps: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Decimal, 24, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestVariableOps()",
                    Line: "254"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal.TestVariableOps();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Decimal",
                    File: "Batch3\\BridgeIssues\\1000\\N1041.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Integer", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer)],
        statics: {
            TestPropertyOps: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Integer, 12, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestPropertyOps()",
                    Line: "13"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.TestPropertyOps();
            },
            TestIndexerOps: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Integer, 12, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestIndexerOps()",
                    Line: "43"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.TestIndexerOps();
            },
            TestDictOps: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Integer, 12, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDictOps()",
                    Line: "74"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.TestDictOps();
            },
            TestVariableOps: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1041Integer, 12, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestVariableOps()",
                    Line: "104"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer.TestVariableOps();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1041.Bridge1041Integer",
                    File: "Batch3\\BridgeIssues\\1000\\N1041.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1051", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1051)],
        statics: {
            TestInlinePopertyWithValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1051).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1051, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestInlinePopertyWithValue()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1051.TestInlinePopertyWithValue();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1051",
                    File: "Batch3\\BridgeIssues\\1000\\N1051.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1053", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1053)],
        statics: {
            TestFieldPropertyWithInterface: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1053).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1053, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestFieldPropertyWithInterface()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1053.TestFieldPropertyWithInterface();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1053",
                    File: "Batch3\\BridgeIssues\\1000\\N1053.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1058", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058)],
        statics: {
            TestNameTrue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1058, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNameTrue()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058.TestNameTrue();
            },
            TestNameFalse: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1058, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNameFalse()",
                    Line: "17"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058.TestNameFalse();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1058",
                    File: "Batch3\\BridgeIssues\\1000\\N1058.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1059", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059)],
        statics: {
            TestEnumNameModes: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1059, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestEnumNameModes()",
                    Line: "38"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059.TestEnumNameModes();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1059",
                    File: "Batch3\\BridgeIssues\\1000\\N1059.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1061", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1061)],
        statics: {
            TestIsDigitFromLinq: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1061).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1061, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestIsDigitFromLinq()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1061.TestIsDigitFromLinq();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1061",
                    File: "Batch3\\BridgeIssues\\1000\\N1061.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1065", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1065)],
        statics: {
            TestDecimalLongWithDictionary: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1065).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1065, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDecimalLongWithDictionary()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1065.TestDecimalLongWithDictionary();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1065",
                    File: "Batch3\\BridgeIssues\\1000\\N1065.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1066", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1066)],
        statics: {
            TestInlinePopertyWithValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1066).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1066, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestInlinePopertyWithValue()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1066.TestInlinePopertyWithValue();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1066",
                    File: "Batch3\\BridgeIssues\\1000\\N1066.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1067", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1067)],
        statics: {
            TestInlinePopertyWithValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1067).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1067, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestInlinePopertyWithValue()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1067.TestInlinePopertyWithValue();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1067",
                    File: "Batch3\\BridgeIssues\\1000\\N1067.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1071", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071)],
        statics: {
            TestParamsForCtor: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1071, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestParamsForCtor()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071.TestParamsForCtor();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1071",
                    File: "Batch3\\BridgeIssues\\1000\\N1071.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1072", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1072)],
        statics: {
            TestNameForProperty: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1072).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1072, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNameForProperty()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1072.TestNameForProperty();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1072",
                    File: "Batch3\\BridgeIssues\\1100\\N1172.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1076", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1076)],
        statics: {
            TestInlineConstantAsMemberReference: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1076).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1076, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestInlineConstantAsMemberReference()",
                    Line: "13"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1076.TestInlineConstantAsMemberReference();
            },
            TestInlineBridgeNumericConstantsAsMemberReference: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1076).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1076, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestInlineBridgeNumericConstantsAsMemberReference()",
                    Line: "19"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1076.TestInlineBridgeNumericConstantsAsMemberReference();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1076",
                    File: "Batch3\\BridgeIssues\\1000\\N1076.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1081", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1081)],
        statics: {
            TestTimeSpanMsFormat: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1081).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1081, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestTimeSpanMsFormat()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1081.TestTimeSpanMsFormat();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1081",
                    File: "Batch3\\BridgeIssues\\1000\\N1081.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1083", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1083)],
        statics: {
            TestExternalEnum: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1083).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1083, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestExternalEnum()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1083.TestExternalEnum();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1083",
                    File: "Batch3\\BridgeIssues\\1000\\N1083.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1085", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1085)],
        statics: {
            TestInlineArrayExpand: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1085).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1085, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestInlineArrayExpand()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1085.TestInlineArrayExpand();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1085",
                    File: "Batch3\\BridgeIssues\\1000\\N1085.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1096", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1096)],
        statics: {
            TestClippingIssues: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1096).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1096, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestClippingIssues()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1096.TestClippingIssues();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1096",
                    File: "Batch3\\BridgeIssues\\1000\\N1096.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1098", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1098)],
        statics: {
            TestInlineConstantAsMemberReference: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1098).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1098, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestInlineConstantAsMemberReference()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1098.TestInlineConstantAsMemberReference();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1098",
                    File: "Batch3\\BridgeIssues\\1000\\N1098.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1103", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1103)],
        statics: {
            TestPropertyOps: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1103).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1103, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestPropertyOps()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1103.TestPropertyOps();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1103",
                    File: "Batch3\\BridgeIssues\\1100\\N1103.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1105", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105)],
        statics: {
            TestStaticInitForNestedClasses: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1105, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStaticInitForNestedClasses()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105.TestStaticInitForNestedClasses();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1105",
                    File: "Batch3\\BridgeIssues\\1100\\N1105.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1109", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1109)],
        statics: {
            TestTemplateOnProperty: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1109).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1109, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestTemplateOnProperty()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1109.TestTemplateOnProperty();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1109",
                    File: "Batch3\\BridgeIssues\\1100\\N1109.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1110", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110)],
        statics: {
            TestOverflowForConditionInParenthesized: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1110, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestOverflowForConditionInParenthesized()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110.TestOverflowForConditionInParenthesized();
            },
            TestOverflowForIndexer: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1110, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestOverflowForIndexer()",
                    Line: "18"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110.TestOverflowForIndexer();
            },
            TestOverflowForBitwise: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1110, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestOverflowForBitwise()",
                    Line: "28"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110.TestOverflowForBitwise();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1110",
                    File: "Batch3\\BridgeIssues\\1100\\N1110.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1120", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1120)],
        statics: {
            TestEnumDoesNotGenerateValuesAsPowerOfTwo: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1120).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1120, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestEnumDoesNotGenerateValuesAsPowerOfTwo()",
                    Line: "22"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1120.TestEnumDoesNotGenerateValuesAsPowerOfTwo();
            },
            TestFlagEnumDoesNotGenerateValuesAsPowerOfTwo: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1120).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1120, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestFlagEnumDoesNotGenerateValuesAsPowerOfTwo()",
                    Line: "43"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1120.TestFlagEnumDoesNotGenerateValuesAsPowerOfTwo();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1120",
                    File: "Batch3\\BridgeIssues\\1100\\N1120.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1128", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128)],
        statics: {
            TestNestedClassesWithInterface: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1128, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNestedClassesWithInterface()",
                    Line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128.TestNestedClassesWithInterface();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1128",
                    File: "Batch3\\BridgeIssues\\1100\\N1128.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1130", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1130)],
        statics: {
            TestUlongDivision: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1130).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1130, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUlongDivision()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1130.TestUlongDivision();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1130",
                    File: "Batch3\\BridgeIssues\\1100\\N1130.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1134", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1134)],
        statics: {
            TestJsonArrayParse: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1134).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1134, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestJsonArrayParse()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1134.TestJsonArrayParse();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1134",
                    File: "Batch3\\BridgeIssues\\1100\\N1134.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1140", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1140)],
        statics: {
            TestDefaultNullable: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1140).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1140, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDefaultNullable()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1140.TestDefaultNullable();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1140",
                    File: "Batch3\\BridgeIssues\\1100\\N1140.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1141", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1141)],
        statics: {
            TestLongDivisionInfiniteLoopFixed: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1141).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1141, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLongDivisionInfiniteLoopFixed()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1141.TestLongDivisionInfiniteLoopFixed();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1141",
                    File: "Batch3\\BridgeIssues\\1100\\N1141.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1144", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1144)],
        statics: {
            TestStringFormat: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1144).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1144, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStringFormat()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1144.TestStringFormat();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1144",
                    File: "Batch3\\BridgeIssues\\1100\\N1144.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1146", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1146)],
        statics: {
            TestLongIssues: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1146).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1146, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLongIssues()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1146.TestLongIssues();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1146",
                    File: "Batch3\\BridgeIssues\\1100\\N1146.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1149", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1149)],
        statics: {
            TestBitwiseOrAnd: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1149).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1149, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestBitwiseOrAnd()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1149.TestBitwiseOrAnd();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1149",
                    File: "Batch3\\BridgeIssues\\1100\\N1149.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1160", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1160)],
        statics: {
            TestBitwiseOrAnd: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1160).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1160, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestBitwiseOrAnd()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1160.TestBitwiseOrAnd();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1160",
                    File: "Batch3\\BridgeIssues\\1100\\N1160.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1170", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170)],
        statics: {
            TestAsyncUsing: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1170, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAsyncUsing()",
                    Line: "13"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170.TestAsyncUsing();
            },
            TestAsyncUsingWithException: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1170, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAsyncUsingWithException()",
                    Line: "49"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170.TestAsyncUsingWithException();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1170",
                    File: "Batch3\\BridgeIssues\\1100\\N1170.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1171", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1171)],
        statics: {
            TestLinqEnumerableInList: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1171).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1171, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLinqEnumerableInList()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1171.TestLinqEnumerableInList();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1171",
                    File: "Batch3\\BridgeIssues\\1100\\N1171.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1175", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1175)],
        statics: {
            TestNullComparing: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1175).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1175, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNullComparing()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1175.TestNullComparing();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1175",
                    File: "Batch3\\BridgeIssues\\1100\\N1175.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1176", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1176)],
        statics: {
            TestFunctionLifting: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1176).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1176, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestFunctionLifting()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1176.TestFunctionLifting();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1176",
                    File: "Batch3\\BridgeIssues\\1100\\N1176.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1177", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1177)],
        statics: {
            TestImplicitCast: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1177).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1177, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestImplicitCast()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1177.TestImplicitCast();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1177",
                    File: "Batch3\\BridgeIssues\\1100\\N1177.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1180", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1180)],
        statics: {
            TestStructClone: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1180).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1180, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStructClone()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1180.TestStructClone();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1180",
                    File: "Batch3\\BridgeIssues\\1100\\N1180.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1184", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1184)],
        statics: {
            TestGetTypeForNumberTypes: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1184).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1184, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestGetTypeForNumberTypes()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1184.TestGetTypeForNumberTypes();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1184",
                    File: "Batch3\\BridgeIssues\\1100\\N1184.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1186", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1186)],
        statics: {
            TestLambdasInField: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1186).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1186, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLambdasInField()",
                    Line: "13"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1186.TestLambdasInField();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1186",
                    File: "Batch3\\BridgeIssues\\1100\\N1186.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1189", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1189)],
        statics: {
            TestTaskNumber: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1189).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1189, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestTaskNumber()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1189.TestTaskNumber();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1189",
                    File: "Batch3\\BridgeIssues\\1100\\N1189.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1193", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1193)],
        statics: {
            TestAssemblyVersionMarker: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1193).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1193, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAssemblyVersionMarker()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1193.TestAssemblyVersionMarker();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1193",
                    File: "Batch3\\BridgeIssues\\1100\\N1193.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1197", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1197)],
        statics: {
            TestGetHashCodeOnDictionary: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1197).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1197, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestGetHashCodeOnDictionary()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1197.TestGetHashCodeOnDictionary();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1197",
                    File: "Batch3\\BridgeIssues\\1100\\N1197.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1199", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1199)],
        statics: {
            TestEventNameCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1199).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1199, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestEventNameCase()",
                    Line: "21"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1199.TestEventNameCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1199",
                    File: "Batch3\\BridgeIssues\\1100\\N1199.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202)],
        statics: {
            TestRefOutStaticIntField: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestRefOutStaticIntField()",
                    Line: "33"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.TestRefOutStaticIntField();
            },
            TestRefOutLocal1DIntArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestRefOutLocal1DIntArray()",
                    Line: "45"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.TestRefOutLocal1DIntArray();
            },
            TestRefOutStatic1DIntArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestRefOutStatic1DIntArray()",
                    Line: "63"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.TestRefOutStatic1DIntArray();
            },
            TestRefOutLocal2DIntArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestRefOutLocal2DIntArray()",
                    Line: "81"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.TestRefOutLocal2DIntArray();
            },
            TestRefOutStaticDecimalField: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestRefOutStaticDecimalField()",
                    Line: "99"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.TestRefOutStaticDecimalField();
            },
            TestRefOutLocal1DDecimalArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestRefOutLocal1DDecimalArray()",
                    Line: "111"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.TestRefOutLocal1DDecimalArray();
            },
            TestRefOutLocal2DDecimalArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestRefOutLocal2DDecimalArray()",
                    Line: "123"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.TestRefOutLocal2DDecimalArray();
            },
            TestInlineOutStaticIntField: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestInlineOutStaticIntField()",
                    Line: "135"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.TestInlineOutStaticIntField();
            },
            TestInlineOutStatic1DIntArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestInlineOutStatic1DIntArray()",
                    Line: "149"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.TestInlineOutStatic1DIntArray();
            },
            TestInlineOutLocal2DIntArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1202, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestInlineOutLocal2DIntArray()",
                    Line: "162"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202.TestInlineOutLocal2DIntArray();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1202",
                    File: "Batch3\\BridgeIssues\\1200\\N1202.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1203", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1203)],
        statics: {
            TestLiftedFunctionsInsideInitMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1203).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1203, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLiftedFunctionsInsideInitMethod()",
                    Line: "22"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1203.TestLiftedFunctionsInsideInitMethod();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1203",
                    File: "Batch3\\BridgeIssues\\1200\\N1203.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1206", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1206)],
        statics: {
            TestDocumentURLProperty: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1206).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1206, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDocumentURLProperty()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1206.TestDocumentURLProperty();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1206",
                    File: "Batch3\\BridgeIssues\\1200\\N1206.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1217", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217)],
        statics: {
            TestTypeInferenceWithNamedArguments: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1217, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestTypeInferenceWithNamedArguments()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217.TestTypeInferenceWithNamedArguments();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1217",
                    File: "Batch3\\BridgeIssues\\1200\\N1217.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1219", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1219)],
        statics: {
            TestLongJSON: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1219).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1219, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLongJSON()",
                    Line: "25"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1219.TestLongJSON();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1219",
                    File: "Batch3\\BridgeIssues\\1200\\N1219.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge122", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge122)],
        statics: {
            Test2DArrayConstruction: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge122).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge122, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "Test2DArrayConstruction()",
                    Line: "17"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge122.Test2DArrayConstruction();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge122",
                    File: "Batch3\\BridgeIssues\\0100\\N122.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1220", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1220)],
        statics: {
            TestConstInGenericClass: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1220).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1220, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestConstInGenericClass()",
                    Line: "14"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1220.TestConstInGenericClass();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1220",
                    File: "Batch3\\BridgeIssues\\1200\\N1220.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1226", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226)],
        statics: {
            TestSinh: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1226, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestSinh()",
                    Line: "36"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.TestSinh();
            },
            TestCosh: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1226, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestCosh()",
                    Line: "51"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.TestCosh();
            },
            TestTanh: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1226, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestTanh()",
                    Line: "66"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226.TestTanh();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1226",
                    File: "Batch3\\BridgeIssues\\1200\\N1226.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1231", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1231)],
        statics: {
            TestAutoGeneratedStructMethodName: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1231).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1231, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAutoGeneratedStructMethodName()",
                    Line: "27"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1231.TestAutoGeneratedStructMethodName();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1231",
                    File: "Batch3\\BridgeIssues\\1200\\N1231.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1232", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232)],
        statics: {
            TestParamsInThisCtorInit: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1232, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestParamsInThisCtorInit()",
                    Line: "51"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232.TestParamsInThisCtorInit();
            },
            TestExtendedParamsInThisCtorInit: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1232, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestExtendedParamsInThisCtorInit()",
                    Line: "76"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232.TestExtendedParamsInThisCtorInit();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1232",
                    File: "Batch3\\BridgeIssues\\1200\\N1232.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1241", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1241)],
        statics: {
            TestMarkElement: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1241).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1241, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestMarkElement()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1241.TestMarkElement();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1241",
                    File: "Batch3\\BridgeIssues\\1200\\N1241.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1249", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1249)],
        statics: {
            TestEnumOverflow: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1249).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1249, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestEnumOverflow()",
                    Line: "16"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1249.TestEnumOverflow();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1249",
                    File: "Batch3\\BridgeIssues\\1200\\N1249.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1253", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1253)],
        statics: {
            TestDefaultEnumMode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1253).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1253, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDefaultEnumMode()",
                    Line: "18"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1253.TestDefaultEnumMode();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1253",
                    File: "Batch3\\BridgeIssues\\1200\\N1253.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1256", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256)],
        statics: {
            TestCaseBooleanIsLet: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1256, 7, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestCaseBooleanIsLet()",
                    Line: "480"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256.TestCaseBooleanIsLet();
            },
            TestReservedFields: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1256, 67, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestReservedFields()",
                    Line: "496"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256.TestReservedFields();
            },
            TestReservedMethods: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1256, 67, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestReservedMethods()",
                    Line: "504"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256.TestReservedMethods();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256",
                    File: "Batch3\\BridgeIssues\\1200\\N1256.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1260", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260)],
        statics: {
            TestStringTrim: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1260, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStringTrim()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260.TestStringTrim();
            },
            TestStringTrimStart: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1260, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStringTrimStart()",
                    Line: "22"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260.TestStringTrimStart();
            },
            TestStringTrimEnd: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1260, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStringTrimEnd()",
                    Line: "35"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260.TestStringTrimEnd();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1260",
                    File: "Batch3\\BridgeIssues\\1200\\N1260.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1264", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1264)],
        statics: {
            TestDefaultGetHashCodeIsRepeatable: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1264).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1264, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDefaultGetHashCodeIsRepeatable()",
                    Line: "16"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1264.TestDefaultGetHashCodeIsRepeatable();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1264",
                    File: "Batch3\\BridgeIssues\\1200\\N1264.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1266", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1266)],
        statics: {
            TestArrayToEnumerable: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1266).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1266, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestArrayToEnumerable()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1266.TestArrayToEnumerable();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1266",
                    File: "Batch3\\BridgeIssues\\1200\\N1266.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1290", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1290)],
        statics: {
            TestBoxedChar: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1290).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1290, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestBoxedChar()",
                    Line: "146"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1290.TestBoxedChar();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1290",
                    File: "Batch3\\BridgeIssues\\2000\\N2077.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1292", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1292)],
        statics: {
            TestBoxedChar: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1292).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1292, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestBoxedChar()",
                    Line: "134"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1292.TestBoxedChar();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1292",
                    File: "Batch3\\BridgeIssues\\2000\\N2077.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1296", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296)],
        statics: {
            TestImplicitOperator: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1296, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestImplicitOperator()",
                    Line: "95"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.TestImplicitOperator();
            },
            TestIgnoreCast: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1296, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestIgnoreCast()",
                    Line: "105"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.TestIgnoreCast();
            },
            TestExternalImplicit: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1296, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestExternalImplicit()",
                    Line: "113"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296.TestExternalImplicit();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1296",
                    File: "Batch3\\BridgeIssues\\1200\\N1296.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1298", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1298)],
        statics: {
            TestLongSwitch: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1298).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1298, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLongSwitch()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1298.TestLongSwitch();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1298",
                    File: "Batch3\\BridgeIssues\\1200\\N1298.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1301", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1301)],
        statics: {
            TestBoxedNumbers: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1301).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1301, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestBoxedNumbers()",
                    Line: "158"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1301.TestBoxedNumbers();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1301",
                    File: "Batch3\\BridgeIssues\\2000\\N2077.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1304", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304)],
        statics: {
            TestWriteFormatString: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1304, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestWriteFormatString()",
                    Line: "36"
                } ));
                try {
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304.TestWriteFormatString();
                }
                finally {
                    t.TearDown();
                }
            },
            TestWriteLineFormatString: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1304, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestWriteLineFormatString()",
                    Line: "59"
                } ));
                try {
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304.TestWriteLineFormatString();
                }
                finally {
                    t.TearDown();
                }
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304",
                    File: "Batch3\\BridgeIssues\\1300\\N1304.cs"
                } );
            }
            return this.context;
        },
        SetUp: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304.ClearOutput();
        },
        TearDown: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1304.ResetOutput();
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1305", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305)],
        statics: {
            TestAsyncIntReturnWithAssigmentFromResult: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1305, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAsyncIntReturnWithAssigmentFromResult()",
                    Line: "15"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.TestAsyncIntReturnWithAssigmentFromResult();
            },
            TestAsyncDataClassReturnWithAssigmentFromResult: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1305, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAsyncDataClassReturnWithAssigmentFromResult()",
                    Line: "27"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.TestAsyncDataClassReturnWithAssigmentFromResult();
            },
            TestAsyncDataStructReturnWithAssigmentFromResult: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1305, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAsyncDataStructReturnWithAssigmentFromResult()",
                    Line: "41"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305.TestAsyncDataStructReturnWithAssigmentFromResult();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1305",
                    File: "Batch3\\BridgeIssues\\1300\\N1305.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1309", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1309)],
        statics: {
            TestBoxedBooleans: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1309).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1309, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestBoxedBooleans()",
                    Line: "38"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1309.TestBoxedBooleans();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1309",
                    File: "Batch3\\BridgeIssues\\2000\\N2077.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1311", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1311)],
        statics: {
            TestEnumNumberParsing: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1311).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1311, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestEnumNumberParsing()",
                    Line: "19"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1311.TestEnumNumberParsing();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1311",
                    File: "Batch3\\BridgeIssues\\1300\\N1311.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1312", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1312)],
        statics: {
            TestStringFormatForEnums: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1312).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1312, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStringFormatForEnums()",
                    Line: "67"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1312.TestStringFormatForEnums();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1312",
                    File: "Batch3\\BridgeIssues\\2000\\N2077.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1313", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313)],
        statics: {
            TestInterfaceDefaultParameter: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1313, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestInterfaceDefaultParameter()",
                    Line: "22"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313.TestInterfaceDefaultParameter();
            },
            TestClassNotDefaultParameter: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1313, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestClassNotDefaultParameter()",
                    Line: "29"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313.TestClassNotDefaultParameter();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1313",
                    File: "Batch3\\BridgeIssues\\1300\\N1313.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1316", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1316, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316.TestUseCase();
            },
            TestStringConcatObject: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1316, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStringConcatObject()",
                    Line: "20"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316.TestStringConcatObject();
            },
            TestStringConcatEnumerableString: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1316, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStringConcatEnumerableString()",
                    Line: "34"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316.TestStringConcatEnumerableString();
            },
            TestStringConcatEnumerableGeneric: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1316, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStringConcatEnumerableGeneric()",
                    Line: "53"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316.TestStringConcatEnumerableGeneric();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1316",
                    File: "Batch3\\BridgeIssues\\1300\\N1316.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1317", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1317)],
        statics: {
            TestStringFormatForEnums: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1317).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1317, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStringFormatForEnums()",
                    Line: "93"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1317.TestStringFormatForEnums();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1317",
                    File: "Batch3\\BridgeIssues\\2000\\N2077.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1328", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328)],
        statics: {
            TestOptionalParamsForClasses: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1328, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestOptionalParamsForClasses()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.TestOptionalParamsForClasses();
            },
            TestOptionalParamsForStructs: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1328, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestOptionalParamsForStructs()",
                    Line: "25"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328.TestOptionalParamsForStructs();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1328",
                    File: "Batch3\\BridgeIssues\\1300\\N1328.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1339", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339)],
        statics: {
            TestAccessingConstantsFromDerivedClass: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1339, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAccessingConstantsFromDerivedClass()",
                    Line: "31"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339.TestAccessingConstantsFromDerivedClass();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1339",
                    File: "Batch3\\BridgeIssues\\1300\\N1339.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340)],
        statics: {
            TestStructGenericMembersDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStructGenericMembersDefaultValue()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestStructGenericMembersDefaultValue();
            },
            TestStructTwoGenericMembersDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStructTwoGenericMembersDefaultValue()",
                    Line: "52"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestStructTwoGenericMembersDefaultValue();
            },
            TestClassGenericMembersDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestClassGenericMembersDefaultValue()",
                    Line: "71"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestClassGenericMembersDefaultValue();
            },
            TestClassTwoGenericMembersDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestClassTwoGenericMembersDefaultValue()",
                    Line: "114"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestClassTwoGenericMembersDefaultValue();
            },
            TestClass1TwoGenericInheritedMembersDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestClass1TwoGenericInheritedMembersDefaultValue()",
                    Line: "133"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestClass1TwoGenericInheritedMembersDefaultValue();
            },
            TestClass2TwoGenericInheritedMembersDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestClass2TwoGenericInheritedMembersDefaultValue()",
                    Line: "152"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestClass2TwoGenericInheritedMembersDefaultValue();
            },
            TestClass3TwoGenericInheritedMembersDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestClass3TwoGenericInheritedMembersDefaultValue()",
                    Line: "161"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestClass3TwoGenericInheritedMembersDefaultValue();
            },
            TestStructStaticIntArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStructStaticIntArray()",
                    Line: "172"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestStructStaticIntArray();
            },
            TestStructStaticLongArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStructStaticLongArray()",
                    Line: "194"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestStructStaticLongArray();
            },
            TestStructStaticStringArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStructStaticStringArray()",
                    Line: "216"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestStructStaticStringArray();
            },
            TestStaticClassGenericMembersDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStaticClassGenericMembersDefaultValue()",
                    Line: "289"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestStaticClassGenericMembersDefaultValue();
            },
            TestStaticClassTwoGenericMembersDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStaticClassTwoGenericMembersDefaultValue()",
                    Line: "318"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestStaticClassTwoGenericMembersDefaultValue();
            },
            TestStaticClass1TwoGenericInheritedMembersDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStaticClass1TwoGenericInheritedMembersDefaultValue()",
                    Line: "331"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestStaticClass1TwoGenericInheritedMembersDefaultValue();
            },
            TestStaticClass2TwoGenericInheritedMembersDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStaticClass2TwoGenericInheritedMembersDefaultValue()",
                    Line: "344"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestStaticClass2TwoGenericInheritedMembersDefaultValue();
            },
            TestStaticClass3TwoGenericInheritedMembersDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1340, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStaticClass3TwoGenericInheritedMembersDefaultValue()",
                    Line: "351"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340.TestStaticClass3TwoGenericInheritedMembersDefaultValue();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1340",
                    File: "Batch3\\BridgeIssues\\1300\\N1340.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341)],
        statics: {
            TestPlainObject: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestPlainObject()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.TestPlainObject();
            },
            TestAnonymousTypeCreation: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAnonymousTypeCreation()",
                    Line: "56"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.TestAnonymousTypeCreation();
            },
            TestDiffStructHashCode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDiffStructHashCode()",
                    Line: "99"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.TestDiffStructHashCode();
            },
            TestDiffAnonymousTypesHashCode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDiffAnonymousTypesHashCode()",
                    Line: "112"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.TestDiffAnonymousTypesHashCode();
            },
            Test1AnonymousType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "Test1AnonymousType()",
                    Line: "149"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.Test1AnonymousType();
            },
            Test2AnonymousType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "Test2AnonymousType()",
                    Line: "164"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.Test2AnonymousType();
            },
            Test3AnonymousType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "Test3AnonymousType()",
                    Line: "179"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.Test3AnonymousType();
            },
            Test4AnonymousType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "Test4AnonymousType()",
                    Line: "194"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.Test4AnonymousType();
            },
            Test5AnonymousType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1341, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "Test5AnonymousType()",
                    Line: "209"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341.Test5AnonymousType();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1341",
                    File: "Batch3\\BridgeIssues\\1300\\N1341.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1343", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343)],
        statics: {
            TestDoubleTemplate: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1343, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDoubleTemplate()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343.TestDoubleTemplate();
            },
            TestInlineInGetHashCode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1343, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestInlineInGetHashCode()",
                    Line: "18"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343.TestInlineInGetHashCode();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1343",
                    File: "Batch3\\BridgeIssues\\1300\\N1343.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1344", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1344)],
        statics: {
            TestLocalVariableWithNameProto: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1344).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1344, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLocalVariableWithNameProto()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1344.TestLocalVariableWithNameProto();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1344",
                    File: "Batch3\\BridgeIssues\\1300\\N1344.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1345", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1345)],
        statics: {
            TestBoolInConsole: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1345).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1345, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestBoolInConsole()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1345.TestBoolInConsole();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1345",
                    File: "Batch3\\BridgeIssues\\1300\\N1345.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1347", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1347)],
        statics: {
            TestFixed: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1347).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1347, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestFixed()",
                    Line: "199"
                } ));
                t.Fixture.TestFixed();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1347",
                    File: "Batch3\\BridgeIssues\\2000\\N2077.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1348", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1348)],
        statics: {
            TestVoidTypeOf: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1348).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1348, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestVoidTypeOf()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1348.TestVoidTypeOf();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1348",
                    File: "Batch3\\BridgeIssues\\1300\\N1348.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1355", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1355)],
        statics: {
            TestLocalVariableWithNameWindow: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1355).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1355, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLocalVariableWithNameWindow()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1355.TestLocalVariableWithNameWindow();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1355",
                    File: "Batch3\\BridgeIssues\\1300\\N1355.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1357", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1357)],
        statics: {
            TestBoxedValueType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1357).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1357, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestBoxedValueType()",
                    Line: "116"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1357.TestBoxedValueType();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1357",
                    File: "Batch3\\BridgeIssues\\2000\\N2077.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374)],
        statics: {
            TestConvertAllForIntListStaticMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestConvertAllForIntListStaticMethod()",
                    Line: "28"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.TestConvertAllForIntListStaticMethod();
            },
            TestConvertAllForIntListInstanceMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestConvertAllForIntListInstanceMethod()",
                    Line: "38"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.TestConvertAllForIntListInstanceMethod();
            },
            TestConvertAllForIntListLambda: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestConvertAllForIntListLambda()",
                    Line: "48"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.TestConvertAllForIntListLambda();
            },
            TestConvertAllForNullConverter: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestConvertAllForNullConverter()",
                    Line: "56"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.TestConvertAllForNullConverter();
            },
            TestConvertAllForNullArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1374, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestConvertAllForNullArray()",
                    Line: "66"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374.TestConvertAllForNullArray();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1374",
                    File: "Batch3\\BridgeIssues\\1300\\N1374.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378)],
        statics: {
            TestAssigmentWithMinusOperator: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAssigmentWithMinusOperator()",
                    Line: "39"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.TestAssigmentWithMinusOperator();
            },
            TestAssigmentWithPlusOperator: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAssigmentWithPlusOperator()",
                    Line: "51"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.TestAssigmentWithPlusOperator();
            },
            TestAssigmentWithOverloadMinusOperator: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAssigmentWithOverloadMinusOperator()",
                    Line: "63"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.TestAssigmentWithOverloadMinusOperator();
            },
            TestAssigmentWithOverloadPlusOperator: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAssigmentWithOverloadPlusOperator()",
                    Line: "71"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.TestAssigmentWithOverloadPlusOperator();
            },
            TestAssigmentWithConditionalPlusOperator: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAssigmentWithConditionalPlusOperator()",
                    Line: "79"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.TestAssigmentWithConditionalPlusOperator();
            },
            TestAssigmentWithConditionalMinusOperator: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1378, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAssigmentWithConditionalMinusOperator()",
                    Line: "94"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378.TestAssigmentWithConditionalMinusOperator();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1378",
                    File: "Batch3\\BridgeIssues\\1300\\N1378.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1379", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1379)],
        statics: {
            TestNanFiniteType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1379).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1379, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNanFiniteType()",
                    Line: "19"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1379.TestNanFiniteType();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1379",
                    File: "Batch3\\BridgeIssues\\1300\\N1379.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1381", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1381)],
        statics: {
            TestReservedWordsUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1381).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1381, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestReservedWordsUseCase()",
                    Line: "13"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1381.TestReservedWordsUseCase();
            },
            TestReservedWordsNewBatch: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1381).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1381, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestReservedWordsNewBatch()",
                    Line: "82"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1381.TestReservedWordsNewBatch();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1381",
                    File: "Batch3\\BridgeIssues\\1300\\N1381.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1385", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1385)],
        statics: {
            TestIsTypedArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1385).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1385, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestIsTypedArray()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1385.TestIsTypedArray();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1385",
                    File: "Batch3\\BridgeIssues\\1300\\N1385.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1389", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1389)],
        statics: {
            TestParamsIndexer: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1389).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1389, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestParamsIndexer()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1389.TestParamsIndexer();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1389",
                    File: "Batch3\\BridgeIssues\\1300\\N1389.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1391", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391)],
        statics: {
            TestStaticCtorOrder: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1391, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStaticCtorOrder()",
                    Line: "41"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391.TestStaticCtorOrder();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391",
                    File: "Batch3\\BridgeIssues\\1300\\N1391.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1391Ready", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391Ready)],
        statics: {
            TestStaticCtorOrderForClassHavingReady: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391Ready).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1391Ready, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStaticCtorOrderForClassHavingReady()",
                    Line: "57"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391Ready.TestStaticCtorOrderForClassHavingReady();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1391Ready",
                    File: "Batch3\\BridgeIssues\\1300\\N1391.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1402", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1402)],
        statics: {
            TestLongClipping: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1402).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1402, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLongClipping()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1402.TestLongClipping();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1402",
                    File: "Batch3\\BridgeIssues\\1400\\N1402.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1410", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410)],
        statics: {
            TestSetterOnly: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1410, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestSetterOnly()",
                    Line: "49"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410.TestSetterOnly();
            },
            TestIndexer: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1410, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestIndexer()",
                    Line: "55"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410.TestIndexer();
            },
            TestAssigmentWithOp: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1410, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAssigmentWithOp()",
                    Line: "64"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410.TestAssigmentWithOp();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1410",
                    File: "Batch3\\BridgeIssues\\1400\\N1410.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1411", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411)],
        statics: {
            TestTemplateCtorThing: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1411, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestTemplateCtorThing()",
                    Line: "56"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411.TestTemplateCtorThing();
            },
            TestTemplateCtorDoodad: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1411, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestTemplateCtorDoodad()",
                    Line: "66"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411.TestTemplateCtorDoodad();
            },
            TestTemplateCtorGizmo: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1411, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestTemplateCtorGizmo()",
                    Line: "78"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411.TestTemplateCtorGizmo();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1411",
                    File: "Batch3\\BridgeIssues\\1400\\N1411.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1428", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1428)],
        statics: {
            TestEqOperatorWithNull: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1428).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1428, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestEqOperatorWithNull()",
                    Line: "19"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1428.TestEqOperatorWithNull();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1428",
                    File: "Batch3\\BridgeIssues\\1400\\N1428.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1429", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1429)],
        statics: {
            TestEqOperatorWithNull: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1429).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1429, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestEqOperatorWithNull()",
                    Line: "21"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1429.TestEqOperatorWithNull();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1429",
                    File: "Batch3\\BridgeIssues\\1400\\N1429.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1430", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1430)],
        statics: {
            TestNestedNamespaceSupport: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1430).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1430, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNestedNamespaceSupport()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1430.TestNestedNamespaceSupport();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1430",
                    File: "Batch3\\BridgeIssues\\1400\\N1430.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1438", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1438)],
        statics: {
            TestJSONParse: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1438).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1438, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestJSONParse()",
                    Line: "21"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1438.TestJSONParse();
            },
            TestJSONParseAsArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1438).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1438, 7, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestJSONParseAsArray()",
                    Line: "35"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1438.TestJSONParseAsArray();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1438",
                    File: "Batch3\\BridgeIssues\\1400\\N1438.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1448", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448)],
        statics: {
            TestPlainForNonAnonymous: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1448, 7, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestPlainForNonAnonymous()",
                    Line: "31"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448.TestPlainForNonAnonymous();
            },
            TestObjectLiteralProperty: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1448, 7, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestObjectLiteralProperty()",
                    Line: "47"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448.TestObjectLiteralProperty();
            },
            TestToObjectLiteralAlias: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1448, 7, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestToObjectLiteralAlias()",
                    Line: "63"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448.TestToObjectLiteralAlias();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1448",
                    File: "Batch3\\BridgeIssues\\1400\\N1448.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1458", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1458)],
        statics: {
            TestConsoleWriteLineForLong: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1458).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1458, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestConsoleWriteLineForLong()",
                    Line: "35"
                } ));
                try {
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge1458.TestConsoleWriteLineForLong();
                }
                finally {
                    t.TearDown();
                }
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1458",
                    File: "Batch3\\BridgeIssues\\1400\\N1458.cs"
                } );
            }
            return this.context;
        },
        SetUp: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1458.ClearOutput();
        },
        TearDown: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1458.ResetOutput();
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1459", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1459)],
        statics: {
            TestHtmlElements: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1459).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1459, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestHtmlElements()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1459.TestHtmlElements();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1459",
                    File: "Batch3\\BridgeIssues\\1400\\N1459.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1467", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1467)],
        statics: {
            TestForeachTypeChecking: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1467).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1467, 7, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestForeachTypeChecking()",
                    Line: "32"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1467.TestForeachTypeChecking();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1467",
                    File: "Batch3\\BridgeIssues\\1400\\N1467.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1472", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1472)],
        statics: {
            TestMultiplyThisInTemplate: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1472).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1472, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestMultiplyThisInTemplate()",
                    Line: "18"
                } ));
                t.Fixture.TestMultiplyThisInTemplate();
            },
            TestSimpleMultipleKeyTemplate: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1472).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1472, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestSimpleMultipleKeyTemplate()",
                    Line: "26"
                } ));
                t.Fixture.TestSimpleMultipleKeyTemplate();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1472",
                    File: "Batch3\\BridgeIssues\\1400\\N1472.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1476", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1476)],
        statics: {
            TestEscapedBrackets: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1476).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1476, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestEscapedBrackets()",
                    Line: "11"
                } ));
                t.Fixture.TestEscapedBrackets();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1476",
                    File: "Batch3\\BridgeIssues\\1400\\N1476.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1480", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1480)],
        statics: {
            TestOverloadUnaryOperator: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1480).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1480, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestOverloadUnaryOperator()",
                    Line: "31"
                } ));
                t.Fixture.TestOverloadUnaryOperator();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1480",
                    File: "Batch3\\BridgeIssues\\1400\\N1480.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1485", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1485)],
        statics: {
            TestConstructorName: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1485).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1485, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestConstructorName()",
                    Line: "9"
                } ));
                t.Fixture.TestConstructorName();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1485",
                    File: "Batch3\\BridgeIssues\\1400\\N1485.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1486", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486)],
        statics: {
            TestStaticLongInitialization: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1486, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStaticLongInitialization()",
                    Line: "13"
                } ));
                t.Fixture.TestStaticLongInitialization();
            },
            TestLocalLongInitialization: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1486, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLocalLongInitialization()",
                    Line: "22"
                } ));
                t.Fixture.TestLocalLongInitialization();
            },
            TestStaticUlongInitialization: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1486, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStaticUlongInitialization()",
                    Line: "32"
                } ));
                t.Fixture.TestStaticUlongInitialization();
            },
            TestLocalUlongInitialization: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1486, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLocalUlongInitialization()",
                    Line: "41"
                } ));
                t.Fixture.TestLocalUlongInitialization();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1486",
                    File: "Batch3\\BridgeIssues\\1400\\N1486.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1489", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1489)],
        statics: {
            TestLongEnum: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1489).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1489, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLongEnum()",
                    Line: "15"
                } ));
                t.Fixture.TestLongEnum();
            },
            TestIntEnum: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1489).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1489, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestIntEnum()",
                    Line: "29"
                } ));
                t.Fixture.TestIntEnum();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1489",
                    File: "Batch3\\BridgeIssues\\1400\\N1489.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1490", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1490)],
        statics: {
            TestEnumLong: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1490).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1490, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestEnumLong()",
                    Line: "19"
                } ));
                t.Fixture.TestEnumLong();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1490",
                    File: "Batch3\\BridgeIssues\\1400\\N1490.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1492", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1492)],
        statics: {
            TestEnumLong: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1492).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1492, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestEnumLong()",
                    Line: "14"
                } ));
                t.Fixture.TestEnumLong();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1492",
                    File: "Batch3\\BridgeIssues\\1400\\N1492.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1493", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1493)],
        statics: {
            TestEnumLong: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1493).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1493, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestEnumLong()",
                    Line: "14"
                } ));
                t.Fixture.TestEnumLong();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1493",
                    File: "Batch3\\BridgeIssues\\1400\\N1493.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1499", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1499)],
        statics: {
            TestObjectStringCoalesceWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1499).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1499, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestObjectStringCoalesceWorks()",
                    Line: "9"
                } ));
                t.Fixture.TestObjectStringCoalesceWorks();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1499",
                    File: "Batch3\\BridgeIssues\\1400\\N1499.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1501", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1501)],
        statics: {
            TestPropertyChangedEventArgs: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1501).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1501, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestPropertyChangedEventArgs()",
                    Line: "11"
                } ));
                t.Fixture.TestPropertyChangedEventArgs();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1501",
                    File: "Batch3\\BridgeIssues\\1500\\N1501.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1509", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1509)],
        statics: {
            TestPreformanceNowIsDouble: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1509).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1509, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestPreformanceNowIsDouble()",
                    Line: "9"
                } ));
                t.Fixture.TestPreformanceNowIsDouble();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1509",
                    File: "Batch3\\BridgeIssues\\1500\\N1509.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1510", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1510)],
        statics: {
            TestPropertyChangedEventArgs: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1510).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1510, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestPropertyChangedEventArgs()",
                    Line: "11"
                } ));
                t.Fixture.TestPropertyChangedEventArgs();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1510",
                    File: "Batch3\\BridgeIssues\\1500\\N1510.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1511", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1511)],
        statics: {
            TestOverloadedConstructorCallWithOptionalParameters: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1511).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1511, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestOverloadedConstructorCallWithOptionalParameters()",
                    Line: "62"
                } ));
                t.Fixture.TestOverloadedConstructorCallWithOptionalParameters();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1511",
                    File: "Batch3\\BridgeIssues\\1500\\N1511.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1512", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1512)],
        statics: {
            TestParametersReservedNames: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1512).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1512, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestParametersReservedNames()",
                    Line: "19"
                } ));
                t.Fixture.TestParametersReservedNames();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1512",
                    File: "Batch3\\BridgeIssues\\1500\\N1512.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1514", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1514)],
        statics: {
            TestBoxedChar: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1514).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1514, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestBoxedChar()",
                    Line: "185"
                } ));
                t.Fixture.TestBoxedChar();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge1514",
                    File: "Batch3\\BridgeIssues\\2000\\N2077.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1517", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1517)],
        statics: {
            TestEqualTuples: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1517).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1517, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestEqualTuples()",
                    Line: "10"
                } ));
                t.Fixture.TestEqualTuples();
            },
            TestInequalTuples: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1517).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1517, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestInequalTuples()",
                    Line: "26"
                } ));
                t.Fixture.TestInequalTuples();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1517",
                    File: "Batch3\\BridgeIssues\\1500\\N1517.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1518", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1518)],
        statics: {
            TestDefaultConstructorForTypeParameter: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1518).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1518, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDefaultConstructorForTypeParameter()",
                    Line: "15"
                } ));
                t.Fixture.TestDefaultConstructorForTypeParameter();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1518",
                    File: "Batch3\\BridgeIssues\\1500\\N1518.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1519", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1519)],
        statics: {
            TestRefOutLocalVars: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1519).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1519, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestRefOutLocalVars()",
                    Line: "10"
                } ));
                t.Fixture.TestRefOutLocalVars();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1519",
                    File: "Batch3\\BridgeIssues\\1500\\N1519.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1520", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1520)],
        statics: {
            TestStaticDecimalInitialization: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1520).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1520, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStaticDecimalInitialization()",
                    Line: "12"
                } ));
                t.Fixture.TestStaticDecimalInitialization();
            },
            TestLocalDecimalInitialization: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1520).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1520, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLocalDecimalInitialization()",
                    Line: "21"
                } ));
                t.Fixture.TestLocalDecimalInitialization();
            },
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1520).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1520, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "31"
                } ));
                t.Fixture.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1520",
                    File: "Batch3\\BridgeIssues\\1500\\N1520.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1521", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1521)],
        statics: {
            TestDecimalTrueInConditionalBlock: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1521).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1521, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDecimalTrueInConditionalBlock()",
                    Line: "11"
                } ));
                t.Fixture.TestDecimalTrueInConditionalBlock();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1521",
                    File: "Batch3\\BridgeIssues\\1500\\N1521.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1522", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1522)],
        statics: {
            TestAssignIntToDecimal: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1522).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1522, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAssignIntToDecimal()",
                    Line: "11"
                } ));
                t.Fixture.TestAssignIntToDecimal();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1522",
                    File: "Batch3\\BridgeIssues\\1500\\N1522.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1523", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1523)],
        statics: {
            TestAssignDecimalToInt: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1523).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1523, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAssignDecimalToInt()",
                    Line: "9"
                } ));
                t.Fixture.TestAssignDecimalToInt();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1523",
                    File: "Batch3\\BridgeIssues\\1500\\N1523.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1524", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1524)],
        statics: {
            TestDecimalWithIntOps: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1524).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1524, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDecimalWithIntOps()",
                    Line: "9"
                } ));
                t.Fixture.TestDecimalWithIntOps();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1524",
                    File: "Batch3\\BridgeIssues\\1500\\N1524.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1526", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1526)],
        statics: {
            TestOutInClassMembers: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1526).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1526, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestOutInClassMembers()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1526.TestOutInClassMembers();
            },
            TestRefInClassMembers: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1526).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1526, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestRefInClassMembers()",
                    Line: "47"
                } ));
                t.Fixture.TestRefInClassMembers();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1526",
                    File: "Batch3\\BridgeIssues\\1500\\N1526.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1527", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1527)],
        statics: {
            TestScriptAttributeWithReference: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1527).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1527, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestScriptAttributeWithReference()",
                    Line: "15"
                } ));
                t.Fixture.TestScriptAttributeWithReference();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1527",
                    File: "Batch3\\BridgeIssues\\1500\\N1527.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1530", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1530)],
        statics: {
            TestObjectLiteralPropertyImplementingInterface: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1530).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1530, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestObjectLiteralPropertyImplementingInterface()",
                    Line: "22"
                } ));
                t.Fixture.TestObjectLiteralPropertyImplementingInterface();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1530",
                    File: "Batch3\\BridgeIssues\\1500\\N1530.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1533", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1533)],
        statics: {
            TestStringNullConcationation: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1533).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1533, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStringNullConcationation()",
                    Line: "9"
                } ));
                t.Fixture.TestStringNullConcationation();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1533",
                    File: "Batch3\\BridgeIssues\\1500\\N1533.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1535", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1535)],
        statics: {
            TestAsyncLambdaAssignmentExpression: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1535).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1535, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAsyncLambdaAssignmentExpression()",
                    Line: "13"
                } ));
                t.Fixture.TestAsyncLambdaAssignmentExpression();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1535",
                    File: "Batch3\\BridgeIssues\\1500\\N1535.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1536", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1536)],
        statics: {
            TestEventNameConflict: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1536).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1536, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestEventNameConflict()",
                    Line: "30"
                } ));
                t.Fixture.TestEventNameConflict();
            },
            TestPropertyNameConflict: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1536).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1536, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestPropertyNameConflict()",
                    Line: "39"
                } ));
                t.Fixture.TestPropertyNameConflict();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1536",
                    File: "Batch3\\BridgeIssues\\1500\\N1536.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1538", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1538)],
        statics: {
            TestOutParameterInIndexer: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1538).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1538, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestOutParameterInIndexer()",
                    Line: "9"
                } ));
                t.Fixture.TestOutParameterInIndexer();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1538",
                    File: "Batch3\\BridgeIssues\\1500\\N1538.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge156", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge156)],
        statics: {
            TestArrayIndexOutOfRangeException: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge156).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge156, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestArrayIndexOutOfRangeException()",
                    Line: "13"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge156.TestArrayIndexOutOfRangeException();
            },
            Test1DArrayIndexOutOfRangeExceptionIndexAsVariable: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge156).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge156, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "Test1DArrayIndexOutOfRangeExceptionIndexAsVariable()",
                    Line: "61"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge156.Test1DArrayIndexOutOfRangeExceptionIndexAsVariable();
            },
            Test2DArrayIndexOutOfRangeExceptionIndexAsVariable: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge156).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge156, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "Test2DArrayIndexOutOfRangeExceptionIndexAsVariable()",
                    Line: "82"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge156.Test2DArrayIndexOutOfRangeExceptionIndexAsVariable();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge156",
                    File: "Batch3\\BridgeIssues\\0100\\N156.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1566", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1566)],
        statics: {
            TestMathLog10: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1566).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1566, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestMathLog10()",
                    Line: "13"
                } ));
                t.Fixture.TestMathLog10();
            },
            TestMathLogWithBase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1566).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1566, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestMathLogWithBase()",
                    Line: "24"
                } ));
                t.Fixture.TestMathLogWithBase();
            },
            TestMathLog: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1566).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1566, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestMathLog()",
                    Line: "36"
                } ));
                t.Fixture.TestMathLog();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1566",
                    File: "Batch3\\BridgeIssues\\1500\\N1566.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1579", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1579)],
        statics: {
            TestNullableDecimalToFloatDouble: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1579).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1579, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNullableDecimalToFloatDouble()",
                    Line: "12"
                } ));
                t.Fixture.TestNullableDecimalToFloatDouble();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1579",
                    File: "Batch3\\BridgeIssues\\1500\\N1579.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1599", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1599)],
        statics: {
            TestCustomIEnumerableForStringJoin: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1599).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1599, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestCustomIEnumerableForStringJoin()",
                    Line: "12"
                } ));
                t.Fixture.TestCustomIEnumerableForStringJoin();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1599",
                    File: "Batch3\\BridgeIssues\\1500\\N1599.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1600", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1600)],
        statics: {
            TestPositiveInfinity: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1600).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1600, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestPositiveInfinity()",
                    Line: "14"
                } ));
                t.Fixture.TestPositiveInfinity();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1600",
                    File: "Batch3\\BridgeIssues\\1600\\N1600.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1641", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1641)],
        statics: {
            TestOutInAsync: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1641).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1641, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestOutInAsync()",
                    Line: "14"
                } ));
                t.Fixture.TestOutInAsync();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1641",
                    File: "Batch3\\BridgeIssues\\1600\\N1641.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1653", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1653)],
        statics: {
            TestLiftedFunctionsWithGenericInvocation: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1653).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1653, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLiftedFunctionsWithGenericInvocation()",
                    Line: "38"
                } ));
                t.Fixture.TestLiftedFunctionsWithGenericInvocation();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1653",
                    File: "Batch3\\BridgeIssues\\1600\\N1653.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1684", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1684)],
        statics: {
            TestStaticInitializationForGenericClass: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1684).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1684, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStaticInitializationForGenericClass()",
                    Line: "36"
                } ));
                t.Fixture.TestStaticInitializationForGenericClass();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1684",
                    File: "Batch3\\BridgeIssues\\1600\\N1684.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1698", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1698)],
        statics: {
            TestReflectionForNativeTypes: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1698).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1698, 14, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestReflectionForNativeTypes()",
                    Line: "39"
                } ));
                try {
                    t.Fixture.TestReflectionForNativeTypes();
                }
                finally {
                    t.TearDown();
                }
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1698",
                    File: "Batch3\\BridgeIssues\\1600\\N1698.cs"
                } );
            }
            return this.context;
        },
        SetUp: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1698.ClearOutput();
        },
        TearDown: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge1698.ResetOutput();
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1700", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1700)],
        statics: {
            TestULongAsIndex: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1700).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1700, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestULongAsIndex()",
                    Line: "9"
                } ));
                t.Fixture.TestULongAsIndex();
            },
            TestLongAsIndex: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1700).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1700, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLongAsIndex()",
                    Line: "22"
                } ));
                t.Fixture.TestLongAsIndex();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1700",
                    File: "Batch3\\BridgeIssues\\1700\\N1700.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1702", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1702)],
        statics: {
            TestFieldWithItemName: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1702).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1702, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestFieldWithItemName()",
                    Line: "63"
                } ));
                t.Fixture.TestFieldWithItemName();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1702",
                    File: "Batch3\\BridgeIssues\\1700\\N1702.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1704", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1704)],
        statics: {
            TestBaseMethodWithOptionalParams: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1704).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1704, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestBaseMethodWithOptionalParams()",
                    Line: "28"
                } ));
                t.Fixture.TestBaseMethodWithOptionalParams();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1704",
                    File: "Batch3\\BridgeIssues\\1700\\N1704.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1709", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1709)],
        statics: {
            TestGenericMethodWithoutTypeArgument: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1709).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1709, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestGenericMethodWithoutTypeArgument()",
                    Line: "17"
                } ));
                t.Fixture.TestGenericMethodWithoutTypeArgument();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1709",
                    File: "Batch3\\BridgeIssues\\1700\\N1709.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1711", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1711)],
        statics: {
            TestImplicitOperatorOrder: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1711).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1711, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestImplicitOperatorOrder()",
                    Line: "40"
                } ));
                t.Fixture.TestImplicitOperatorOrder();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1711",
                    File: "Batch3\\BridgeIssues\\1700\\N1711.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1712", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712)],
        statics: {
            TestCollectionAddWithExtensionMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1712, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestCollectionAddWithExtensionMethod()",
                    Line: "64"
                } ));
                t.Fixture.TestCollectionAddWithExtensionMethod();
            },
            TestCollectionWithAdd_BeforeCS6: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1712, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestCollectionWithAdd_BeforeCS6()",
                    Line: "76"
                } ));
                t.Fixture.TestCollectionWithAdd_BeforeCS6();
            },
            TestCollectionWithAdd_CS6: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1712, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestCollectionWithAdd_CS6()",
                    Line: "85"
                } ));
                t.Fixture.TestCollectionWithAdd_CS6();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1712",
                    File: "Batch3\\BridgeIssues\\1700\\N1712.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1713", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713)],
        statics: {
            TestOverloadResolution: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1713, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestOverloadResolution()",
                    Line: "32"
                } ));
                t.Fixture.TestOverloadResolution();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713",
                    File: "Batch3\\BridgeIssues\\1700\\N1713.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1713MSDN", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN)],
        statics: {
            TestOverloadResolutionMSDN1: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1713MSDN, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestOverloadResolutionMSDN1()",
                    Line: "60"
                } ));
                t.Fixture.TestOverloadResolutionMSDN1();
            },
            TestOverloadResolutionMSDN2: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1713MSDN, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestOverloadResolutionMSDN2()",
                    Line: "93"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN.TestOverloadResolutionMSDN2();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1713MSDN",
                    File: "Batch3\\BridgeIssues\\1700\\N1713.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1715", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1715)],
        statics: {
            TestCollectionInitializerWithAdd: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1715).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1715, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestCollectionInitializerWithAdd()",
                    Line: "35"
                } ));
                t.Fixture.TestCollectionInitializerWithAdd();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1715",
                    File: "Batch3\\BridgeIssues\\1700\\N1715.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1721", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1721)],
        statics: {
            TestDelegateEquals: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1721).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1721, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDelegateEquals()",
                    Line: "19"
                } ));
                t.Fixture.TestDelegateEquals();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1721",
                    File: "Batch3\\BridgeIssues\\1700\\N1721.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1722", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1722)],
        statics: {
            TestDelegateCreationOfGenericMethods: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1722).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1722, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDelegateCreationOfGenericMethods()",
                    Line: "27"
                } ));
                t.Fixture.TestDelegateCreationOfGenericMethods();
            },
            TestDelegateCreationOfGenericMethodsWithLambda: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1722).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1722, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDelegateCreationOfGenericMethodsWithLambda()",
                    Line: "34"
                } ));
                t.Fixture.TestDelegateCreationOfGenericMethodsWithLambda();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1722",
                    File: "Batch3\\BridgeIssues\\1700\\N1722.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1735", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1735)],
        statics: {
            TestTryGetValueOutDelegateParameter: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1735).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1735, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestTryGetValueOutDelegateParameter()",
                    Line: "14"
                } ));
                t.Fixture.TestTryGetValueOutDelegateParameter();
            },
            TestOutDelegateParameter: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1735).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1735, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestOutDelegateParameter()",
                    Line: "30"
                } ));
                t.Fixture.TestOutDelegateParameter();
            },
            TestReferenceDelegateParameter: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1735).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1735, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestReferenceDelegateParameter()",
                    Line: "45"
                } ));
                t.Fixture.TestReferenceDelegateParameter();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1735",
                    File: "Batch3\\BridgeIssues\\1700\\N1735.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1737", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1737)],
        statics: {
            TestTypeFullName: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1737).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1737, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestTypeFullName()",
                    Line: "17"
                } ));
                t.Fixture.TestTypeFullName();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1737",
                    File: "Batch3\\BridgeIssues\\1700\\N1737.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1741", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1741)],
        statics: {
            TestNumbersHashCode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1741).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1741, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNumbersHashCode()",
                    Line: "9"
                } ));
                t.Fixture.TestNumbersHashCode();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1741",
                    File: "Batch3\\BridgeIssues\\1700\\N1741.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1744", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1744)],
        statics: {
            TestMethodInvocationWithParams: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1744).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1744, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestMethodInvocationWithParams()",
                    Line: "9"
                } ));
                t.Fixture.TestMethodInvocationWithParams();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1744",
                    File: "Batch3\\BridgeIssues\\1700\\N1744.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1754", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1754)],
        statics: {
            TestAllUpperCaseNames: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1754).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1754, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAllUpperCaseNames()",
                    Line: "73"
                } ));
                t.Fixture.TestAllUpperCaseNames();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1754",
                    File: "Batch3\\BridgeIssues\\1700\\N1754.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1767", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1767)],
        statics: {
            TestBaseIndexer: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1767).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1767, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestBaseIndexer()",
                    Line: "44"
                } ));
                t.Fixture.TestBaseIndexer();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1767",
                    File: "Batch3\\BridgeIssues\\1700\\N1767.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1768", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1768)],
        statics: {
            TestImplicitImplementation: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1768).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1768, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestImplicitImplementation()",
                    Line: "226"
                } ));
                t.Fixture.TestImplicitImplementation();
            },
            TestExplicitImplementation: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1768).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1768, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestExplicitImplementation()",
                    Line: "235"
                } ));
                t.Fixture.TestExplicitImplementation();
            },
            TestListImplicitImplementation: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1768).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1768, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestListImplicitImplementation()",
                    Line: "249"
                } ));
                t.Fixture.TestListImplicitImplementation();
            },
            TestListExplicitImplementation: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1768).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1768, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestListExplicitImplementation()",
                    Line: "266"
                } ));
                t.Fixture.TestListExplicitImplementation();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1768",
                    File: "Batch3\\BridgeIssues\\1700\\N1768.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1775", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1775)],
        statics: {
            TestSumForEmpty: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1775).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1775, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestSumForEmpty()",
                    Line: "13"
                } ));
                t.Fixture.TestSumForEmpty();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1775",
                    File: "Batch3\\BridgeIssues\\1700\\N1775.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1776", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1776)],
        statics: {
            TestTupleHashCode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1776).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1776, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestTupleHashCode()",
                    Line: "12"
                } ));
                t.Fixture.TestTupleHashCode();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1776",
                    File: "Batch3\\BridgeIssues\\1700\\N1776.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1787", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1787)],
        statics: {
            TestNamedParams: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1787).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1787, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNamedParams()",
                    Line: "40"
                } ));
                t.Fixture.TestNamedParams();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1787",
                    File: "Batch3\\BridgeIssues\\1700\\N1787.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1802", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1802)],
        statics: {
            TestReservedWordsAsMethodName: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1802).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1802, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestReservedWordsAsMethodName()",
                    Line: "394"
                } ));
                t.Fixture.TestReservedWordsAsMethodName();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1802",
                    File: "Batch3\\BridgeIssues\\1800\\N1802.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1803", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1803)],
        statics: {
            TestCollectionInitializerWithStaticMember: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1803).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1803, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestCollectionInitializerWithStaticMember()",
                    Line: "41"
                } ));
                t.Fixture.TestCollectionInitializerWithStaticMember();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1803",
                    File: "Batch3\\BridgeIssues\\1800\\N1803.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1804", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1804)],
        statics: {
            TestStructClone: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1804).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1804, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStructClone()",
                    Line: "25"
                } ));
                t.Fixture.TestStructClone();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1804",
                    File: "Batch3\\BridgeIssues\\1800\\N1804.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1810", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1810)],
        statics: {
            TestInterfaceIndexersAndCopyToAndIsReadOnly: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1810).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1810, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestInterfaceIndexersAndCopyToAndIsReadOnly()",
                    Line: "15"
                } ));
                t.Fixture.TestInterfaceIndexersAndCopyToAndIsReadOnly();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1810",
                    File: "Batch3\\BridgeIssues\\1800\\N1810.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1812", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1812)],
        statics: {
            TestDoubleConversion: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1812).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1812, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDoubleConversion()",
                    Line: "39"
                } ));
                t.Fixture.TestDoubleConversion();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1812",
                    File: "Batch3\\BridgeIssues\\1800\\N1812.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1813", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1813)],
        statics: {
            TestAddStaticMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1813).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1813, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAddStaticMethod()",
                    Line: "21"
                } ));
                t.Fixture.TestAddStaticMethod();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1813",
                    File: "Batch3\\BridgeIssues\\1800\\N1813.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1814", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1814)],
        statics: {
            TestNamespaceConflictResolution: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1814).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1814, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNamespaceConflictResolution()",
                    Line: "30"
                } ));
                t.Fixture.TestNamespaceConflictResolution();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1814",
                    File: "Batch3\\BridgeIssues\\1800\\N1814.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1819", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1819)],
        statics: {
            TestObjectLiteralWithInheritance: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1819).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1819, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestObjectLiteralWithInheritance()",
                    Line: "26"
                } ));
                t.Fixture.TestObjectLiteralWithInheritance();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1819",
                    File: "Batch3\\BridgeIssues\\1800\\N1819.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1821", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1821)],
        statics: {
            TestInterfaceMember1: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1821).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1821, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestInterfaceMember1()",
                    Line: "81"
                } ));
                t.Fixture.TestInterfaceMember1();
            },
            TestInterfaceMember2: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1821).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1821, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestInterfaceMember2()",
                    Line: "89"
                } ));
                t.Fixture.TestInterfaceMember2();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1821",
                    File: "Batch3\\BridgeIssues\\1800\\N1821.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1832", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1832)],
        statics: {
            TestInitWithTempVars: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1832).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1832, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestInitWithTempVars()",
                    Line: "16"
                } ));
                t.Fixture.TestInitWithTempVars();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1832",
                    File: "Batch3\\BridgeIssues\\1800\\N1832.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1833", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1833)],
        statics: {
            TestInheritedPropertyInLiteral: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1833).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1833, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestInheritedPropertyInLiteral()",
                    Line: "20"
                } ));
                t.Fixture.TestInheritedPropertyInLiteral();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1833",
                    File: "Batch3\\BridgeIssues\\1800\\N1833.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1834", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1834)],
        statics: {
            TestIgnoreGenericInterface: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1834).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1834, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestIgnoreGenericInterface()",
                    Line: "29"
                } ));
                t.Fixture.TestIgnoreGenericInterface();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1834",
                    File: "Batch3\\BridgeIssues\\1800\\N1834.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1835", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1835)],
        statics: {
            TestGenericMethodWithAnonTypeArg: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1835).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1835, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestGenericMethodWithAnonTypeArg()",
                    Line: "14"
                } ));
                t.Fixture.TestGenericMethodWithAnonTypeArg();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1835",
                    File: "Batch3\\BridgeIssues\\1800\\N1835.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1842", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1842)],
        statics: {
            TestTypeOfConversion: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1842).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1842, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestTypeOfConversion()",
                    Line: "25"
                } ));
                t.Fixture.TestTypeOfConversion();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1842",
                    File: "Batch3\\BridgeIssues\\1800\\N1842.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1845", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1845)],
        statics: {
            TestCtorMemberName: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1845).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1845, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestCtorMemberName()",
                    Line: "56"
                } ));
                t.Fixture.TestCtorMemberName();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1845",
                    File: "Batch3\\BridgeIssues\\1800\\N1845.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1846", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1846)],
        statics: {
            TestImplicitOperatorInForeachLoop: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1846).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1846, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestImplicitOperatorInForeachLoop()",
                    Line: "22"
                } ));
                t.Fixture.TestImplicitOperatorInForeachLoop();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1846",
                    File: "Batch3\\BridgeIssues\\1800\\N1846.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1847", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1847)],
        statics: {
            TestActivatorCreateInstanceCallProtectedConstructor: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1847).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1847, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestActivatorCreateInstanceCallProtectedConstructor()",
                    Line: "27"
                } ));
                t.Fixture.TestActivatorCreateInstanceCallProtectedConstructor();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1847",
                    File: "Batch3\\BridgeIssues\\1800\\N1847.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1848", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1848)],
        statics: {
            TestExternalInterfaceProperty: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1848).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1848, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestExternalInterfaceProperty()",
                    Line: "29"
                } ));
                t.Fixture.TestExternalInterfaceProperty();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1848",
                    File: "Batch3\\BridgeIssues\\1800\\N1848.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1850", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1850)],
        statics: {
            TestImplicitInterface: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1850).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1850, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestImplicitInterface()",
                    Line: "25"
                } ));
                t.Fixture.TestImplicitInterface();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1850",
                    File: "Batch3\\BridgeIssues\\1800\\N1850.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1852", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1852)],
        statics: {
            TestCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1852).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1852, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestCase()",
                    Line: "39"
                } ));
                t.Fixture.TestCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1852",
                    File: "Batch3\\BridgeIssues\\1800\\N1852.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1853", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1853)],
        statics: {
            TestContainsUseEquals: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1853).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1853, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestContainsUseEquals()",
                    Line: "24"
                } ));
                t.Fixture.TestContainsUseEquals();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1853",
                    File: "Batch3\\BridgeIssues\\1800\\N1853.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1854", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1854)],
        statics: {
            TestCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1854).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1854, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestCase()",
                    Line: "56"
                } ));
                t.Fixture.TestCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1854",
                    File: "Batch3\\BridgeIssues\\1800\\N1854.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1856", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1856)],
        statics: {
            TestCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1856).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1856, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestCase()",
                    Line: "68"
                } ));
                t.Fixture.TestCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1856",
                    File: "Batch3\\BridgeIssues\\1800\\N1856.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1863", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1863)],
        statics: {
            TestTrueFalseOperators: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1863).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1863, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestTrueFalseOperators()",
                    Line: "77"
                } ));
                t.Fixture.TestTrueFalseOperators();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1863",
                    File: "Batch3\\BridgeIssues\\1800\\N1863.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1865", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1865)],
        statics: {
            TestObjectLiteralInterface: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1865).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1865, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestObjectLiteralInterface()",
                    Line: "40"
                } ));
                t.Fixture.TestObjectLiteralInterface();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1865",
                    File: "Batch3\\BridgeIssues\\1800\\N1865.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1869", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1869)],
        statics: {
            TestGenericTypeDefinition: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1869).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1869, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestGenericTypeDefinition()",
                    Line: "17"
                } ));
                t.Fixture.TestGenericTypeDefinition();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1869",
                    File: "Batch3\\BridgeIssues\\1800\\N1869.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1871", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1871)],
        statics: {
            TestErrorCommentNotThrowCompilerException: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1871).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1871, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestErrorCommentNotThrowCompilerException()",
                    Line: "21"
                } ));
                t.Fixture.TestErrorCommentNotThrowCompilerException();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1871",
                    File: "Batch3\\BridgeIssues\\1800\\N1871.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1872", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1872)],
        statics: {
            TestAsyncWithAnonymousDelegate: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1872).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1872, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAsyncWithAnonymousDelegate()",
                    Line: "11"
                } ));
                t.Fixture.TestAsyncWithAnonymousDelegate();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1872",
                    File: "Batch3\\BridgeIssues\\1800\\N1872.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1875", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1875)],
        statics: {
            TestDictionaryWithLongVariableAsKey: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1875).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1875, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDictionaryWithLongVariableAsKey()",
                    Line: "15"
                } ));
                t.Fixture.TestDictionaryWithLongVariableAsKey();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1875",
                    File: "Batch3\\BridgeIssues\\1800\\N1875.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1878", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1878)],
        statics: {
            TestSumDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1878).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1878, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestSumDefaultValue()",
                    Line: "17"
                } ));
                t.Fixture.TestSumDefaultValue();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1878",
                    File: "Batch3\\BridgeIssues\\1800\\N1878.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1880", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1880)],
        statics: {
            TestDefaultValuesWithTemplates: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1880).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1880, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDefaultValuesWithTemplates()",
                    Line: "18"
                } ));
                t.Fixture.TestDefaultValuesWithTemplates();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1880",
                    File: "Batch3\\BridgeIssues\\1800\\N1880.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1882", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1882)],
        statics: {
            TestGenericClassCastForArray: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1882).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1882, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestGenericClassCastForArray()",
                    Line: "48"
                } ));
                t.Fixture.TestGenericClassCastForArray();
            },
            TestGenericClassCastForList: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1882).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1882, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestGenericClassCastForList()",
                    Line: "72"
                } ));
                t.Fixture.TestGenericClassCastForList();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1882",
                    File: "Batch3\\BridgeIssues\\1800\\N1882.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1884", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1884)],
        statics: {
            TestCollectionInitilizers: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1884).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1884, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestCollectionInitilizers()",
                    Line: "41"
                } ));
                t.Fixture.TestCollectionInitilizers();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1884",
                    File: "Batch3\\BridgeIssues\\1800\\N1884.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1886", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1886)],
        statics: {
            TestCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1886).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1886, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestCase()",
                    Line: "10"
                } ));
                t.Fixture.TestCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1886",
                    File: "Batch3\\BridgeIssues\\1800\\N1886.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1892", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1892)],
        statics: {
            TestCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1892).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1892, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestCase()",
                    Line: "83"
                } ));
                t.Fixture.TestCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1892",
                    File: "Batch3\\BridgeIssues\\1800\\N1892.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1896", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1896)],
        statics: {
            TestHexStringToInt: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1896).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1896, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestHexStringToInt()",
                    Line: "10"
                } ));
                t.Fixture.TestHexStringToInt();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1896",
                    File: "Batch3\\BridgeIssues\\1800\\N1896.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1897", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1897)],
        statics: {
            TestNestedNotEscapedBracketsInRegex: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1897).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1897, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNestedNotEscapedBracketsInRegex()",
                    Line: "10"
                } ));
                t.Fixture.TestNestedNotEscapedBracketsInRegex();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1897",
                    File: "Batch3\\BridgeIssues\\1800\\N1897.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1899", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1899)],
        statics: {
            TestPropertyAndMethodNameConflict: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1899).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1899, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestPropertyAndMethodNameConflict()",
                    Line: "191"
                } ));
                t.Fixture.TestPropertyAndMethodNameConflict();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1899",
                    File: "Batch3\\BridgeIssues\\1800\\N1899.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1900", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1900)],
        statics: {
            TestOutParamInMetadata: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1900).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1900, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestOutParamInMetadata()",
                    Line: "40"
                } ));
                t.Fixture.TestOutParamInMetadata();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1900",
                    File: "Batch3\\BridgeIssues\\1900\\N1900.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1904", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1904)],
        statics: {
            TestDateTimeConstructorConvertsValueToMs: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1904).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1904, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDateTimeConstructorConvertsValueToMs()",
                    Line: "10"
                } ));
                t.Fixture.TestDateTimeConstructorConvertsValueToMs();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1904",
                    File: "Batch3\\BridgeIssues\\1900\\N1904.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1906", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1906)],
        statics: {
            TestIsOperatorInaccuracy: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1906).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1906, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestIsOperatorInaccuracy()",
                    Line: "9"
                } ));
                t.Fixture.TestIsOperatorInaccuracy();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1906",
                    File: "Batch3\\BridgeIssues\\1900\\N1906.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1909", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1909)],
        statics: {
            TestActivatorEnumCreation: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1909).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1909, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestActivatorEnumCreation()",
                    Line: "15"
                } ));
                t.Fixture.TestActivatorEnumCreation();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1909",
                    File: "Batch3\\BridgeIssues\\1900\\N1909.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1910", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1910)],
        statics: {
            TestGenericTypeCasting: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1910).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1910, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestGenericTypeCasting()",
                    Line: "27"
                } ));
                t.Fixture.TestGenericTypeCasting();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1910",
                    File: "Batch3\\BridgeIssues\\1900\\N1910.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1911", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1911)],
        statics: {
            TestExtensionMethodOfBaseClass: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1911).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1911, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestExtensionMethodOfBaseClass()",
                    Line: "36"
                } ));
                t.Fixture.TestExtensionMethodOfBaseClass();
            },
            TestExtensionMethodOfBaseClassLinqCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1911).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1911, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestExtensionMethodOfBaseClassLinqCase()",
                    Line: "44"
                } ));
                t.Fixture.TestExtensionMethodOfBaseClassLinqCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1911",
                    File: "Batch3\\BridgeIssues\\1900\\N1911.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1912", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1912)],
        statics: {
            TestExtentionMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1912).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1912, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestExtentionMethod()",
                    Line: "9"
                } ));
                t.Fixture.TestExtentionMethod();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1912",
                    File: "Batch3\\BridgeIssues\\1900\\N1912.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1913", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1913)],
        statics: {
            TestIsSubclassOfTemplate: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1913).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1913, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestIsSubclassOfTemplate()",
                    Line: "10"
                } ));
                t.Fixture.TestIsSubclassOfTemplate();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1913",
                    File: "Batch3\\BridgeIssues\\1900\\N1913.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1914", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1914)],
        statics: {
            TestCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1914).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1914, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestCase()",
                    Line: "11"
                } ));
                t.Fixture.TestCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1914",
                    File: "Batch3\\BridgeIssues\\1900\\N1914.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1915", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1915)],
        statics: {
            TestImplementingExternalInterface: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1915).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1915, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestImplementingExternalInterface()",
                    Line: "30"
                } ));
                t.Fixture.TestImplementingExternalInterface();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1915",
                    File: "Batch3\\BridgeIssues\\1900\\N1915.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1920", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1920)],
        statics: {
            TestGeneratedStringConcatenation: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1920).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1920, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestGeneratedStringConcatenation()",
                    Line: "9"
                } ));
                t.Fixture.TestGeneratedStringConcatenation();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1920",
                    File: "Batch3\\BridgeIssues\\1900\\N1920.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1933", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1933)],
        statics: {
            TestRounding: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1933).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1933, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestRounding()",
                    Line: "10"
                } ));
                t.Fixture.TestRounding();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1933",
                    File: "Batch3\\BridgeIssues\\1900\\N1933.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1934", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1934)],
        statics: {
            TestEscapeSequencesInRegex: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1934).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1934, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestEscapeSequencesInRegex()",
                    Line: "10"
                } ));
                t.Fixture.TestEscapeSequencesInRegex();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1934",
                    File: "Batch3\\BridgeIssues\\1900\\N1934.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1938", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1938)],
        statics: {
            TestIsArrayTemplate: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1938).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1938, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestIsArrayTemplate()",
                    Line: "10"
                } ));
                t.Fixture.TestIsArrayTemplate();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1938",
                    File: "Batch3\\BridgeIssues\\1900\\N1938.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1948", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1948)],
        statics: {
            TestCollectionLikeInitialization: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1948).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1948, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestCollectionLikeInitialization()",
                    Line: "40"
                } ));
                t.Fixture.TestCollectionLikeInitialization();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1948",
                    File: "Batch3\\BridgeIssues\\1900\\N1948.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1951", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1951)],
        statics: {
            TestBindFunctionNoMemoryLeaks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1951).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1951, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestBindFunctionNoMemoryLeaks()",
                    Line: "30"
                } ));
                t.Fixture.TestBindFunctionNoMemoryLeaks();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1951",
                    File: "Batch3\\BridgeIssues\\1900\\N1951.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1955", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1955)],
        statics: {
            TestScriptAttributeForExternMethods: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1955).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1955, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestScriptAttributeForExternMethods()",
                    Line: "26"
                } ));
                t.Fixture.TestScriptAttributeForExternMethods();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1955",
                    File: "Batch3\\BridgeIssues\\1900\\N1955.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1964", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1964)],
        statics: {
            TestStringIsNullOrWhiteSpaceCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1964).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1964, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStringIsNullOrWhiteSpaceCase()",
                    Line: "27"
                } ));
                t.Fixture.TestStringIsNullOrWhiteSpaceCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1964",
                    File: "Batch3\\BridgeIssues\\1900\\N1964.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1965", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1965)],
        statics: {
            TestIsClassForNumberTypes: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1965).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1965, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestIsClassForNumberTypes()",
                    Line: "10"
                } ));
                t.Fixture.TestIsClassForNumberTypes();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1965",
                    File: "Batch3\\BridgeIssues\\1900\\N1965.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1966", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1966)],
        statics: {
            TestDoubleInfinityGetHashCode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1966).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1966, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDoubleInfinityGetHashCode()",
                    Line: "10"
                } ));
                t.Fixture.TestDoubleInfinityGetHashCode();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1966",
                    File: "Batch3\\BridgeIssues\\1900\\N1966.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1968", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1968)],
        statics: {
            TestGenericNullable: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1968).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1968, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestGenericNullable()",
                    Line: "10"
                } ));
                t.Fixture.TestGenericNullable();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1968",
                    File: "Batch3\\BridgeIssues\\1900\\N1968.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1969", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1969)],
        statics: {
            TestStaticConstructorsForBaseClasses: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1969).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1969, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStaticConstructorsForBaseClasses()",
                    Line: "40"
                } ));
                t.Fixture.TestStaticConstructorsForBaseClasses();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1969",
                    File: "Batch3\\BridgeIssues\\1900\\N1969.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1970", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1970)],
        statics: {
            TestRunClassConstructor: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1970).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1970, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestRunClassConstructor()",
                    Line: "21"
                } ));
                t.Fixture.TestRunClassConstructor();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1970",
                    File: "Batch3\\BridgeIssues\\1900\\N1970.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1996", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1996)],
        statics: {
            TestTemplateForGetEnumerator: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge1996).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge1996, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestTemplateForGetEnumerator()",
                    Line: "24"
                } ));
                t.Fixture.TestTemplateForGetEnumerator();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge1996",
                    File: "Batch3\\BridgeIssues\\1900\\N1996.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2003", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2003)],
        statics: {
            TestThisIsBindInTemplatedMemberMethods: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2003).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2003, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestThisIsBindInTemplatedMemberMethods()",
                    Line: "28"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2003.TestThisIsBindInTemplatedMemberMethods();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2003",
                    File: "Batch3\\BridgeIssues\\2000\\N2003.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2011", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2011)],
        statics: {
            TestOverloadSelectionWhenNullCoalescingOperator: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2011).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2011, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestOverloadSelectionWhenNullCoalescingOperator()",
                    Line: "59"
                } ));
                t.Fixture.TestOverloadSelectionWhenNullCoalescingOperator();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2011",
                    File: "Batch3\\BridgeIssues\\2000\\N2011.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2013", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2013)],
        statics: {
            TestSubscriptionToEventDefinedInGenericInterfaceViaExtensionMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2013).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2013, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestSubscriptionToEventDefinedInGenericInterfaceViaExtensionMethod()",
                    Line: "34"
                } ));
                t.Fixture.TestSubscriptionToEventDefinedInGenericInterfaceViaExtensionMethod();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2013",
                    File: "Batch3\\BridgeIssues\\2000\\N2013.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2019", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2019)],
        statics: {
            TestLambdaExpressionsInGenericMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2019).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2019, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLambdaExpressionsInGenericMethod()",
                    Line: "49"
                } ));
                t.Fixture.TestLambdaExpressionsInGenericMethod();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2019",
                    File: "Batch3\\BridgeIssues\\2000\\N2019.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2024", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2024)],
        statics: {
            TestAccessEnumInAnotherClassUsingStatic: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2024).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2024, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAccessEnumInAnotherClassUsingStatic()",
                    Line: "23"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2024.TestAccessEnumInAnotherClassUsingStatic();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2024",
                    File: "Batch3\\BridgeIssues\\2000\\N2024.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2027", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2027)],
        statics: {
            TestToStringForEnumWhenConcatWithString: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2027).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2027, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestToStringForEnumWhenConcatWithString()",
                    Line: "22"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2027.TestToStringForEnumWhenConcatWithString();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2027",
                    File: "Batch3\\BridgeIssues\\2000\\N2027.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2033", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2033)],
        statics: {
            TestClassEnumPropertiesInitialization: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2033).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2033, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestClassEnumPropertiesInitialization()",
                    Line: "20"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2033.TestClassEnumPropertiesInitialization();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2033",
                    File: "Batch3\\BridgeIssues\\2000\\N2033.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2038", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2038)],
        statics: {
            TestIncrementAssignmentInStructs: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2038).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2038, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestIncrementAssignmentInStructs()",
                    Line: "35"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2038.TestIncrementAssignmentInStructs();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2038",
                    File: "Batch3\\BridgeIssues\\2000\\N2038.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2039", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2039)],
        statics: {
            TestNaNToString: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2039).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2039, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNaNToString()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2039.TestNaNToString();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2039",
                    File: "Batch3\\BridgeIssues\\2000\\N2039.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2042", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2042)],
        statics: {
            TestAppDomain: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2042).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2042, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAppDomain()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2042.TestAppDomain();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2042",
                    File: "Batch3\\BridgeIssues\\2000\\N2042.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2045", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2045)],
        statics: {
            TestDoubleEscapingInterpolation: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2045).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2045, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDoubleEscapingInterpolation()",
                    Line: "9"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2045.TestDoubleEscapingInterpolation();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2045",
                    File: "Batch3\\BridgeIssues\\2000\\N2045.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2046", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2046)],
        statics: {
            TestSafeNavigationOperator: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2046).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2046, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestSafeNavigationOperator()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2046.TestSafeNavigationOperator();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2046",
                    File: "Batch3\\BridgeIssues\\2000\\N2046.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2048", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2048)],
        statics: {
            TestUnaryOperatorBlockCompilationError: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2048).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2048, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUnaryOperatorBlockCompilationError()",
                    Line: "19"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2048.TestUnaryOperatorBlockCompilationError();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2048",
                    File: "Batch3\\BridgeIssues\\2000\\N2048.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2049", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2049)],
        statics: {
            TestNullableGetUnderlyingType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2049).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2049, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNullableGetUnderlyingType()",
                    Line: "13"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2049.TestNullableGetUnderlyingType();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2049",
                    File: "Batch3\\BridgeIssues\\2000\\N2049.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2050", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2050)],
        statics: {
            TestIList: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2050).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2050, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestIList()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2050.TestIList();
            },
            TestIDictionary: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2050).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2050, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestIDictionary()",
                    Line: "41"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2050.TestIDictionary();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2050",
                    File: "Batch3\\BridgeIssues\\2000\\N2050.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2051", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2051)],
        statics: {
            TestGetElementType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2051).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2051, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestGetElementType()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2051.TestGetElementType();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2051",
                    File: "Batch3\\BridgeIssues\\2000\\N2051.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2052", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2052)],
        statics: {
            TestArrayCreateInstance: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2052).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2052, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestArrayCreateInstance()",
                    Line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2052.TestArrayCreateInstance();
            },
            TestArrayCreateInstanceShouldThrow: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2052).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2052, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestArrayCreateInstanceShouldThrow()",
                    Line: "89"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2052.TestArrayCreateInstanceShouldThrow();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2052",
                    File: "Batch3\\BridgeIssues\\2000\\N2052.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2056", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2056)],
        statics: {
            TestArrayCasting: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2056).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2056, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestArrayCasting()",
                    Line: "22"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2056.TestArrayCasting();
            },
            TestArrayTypeName: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2056).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2056, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestArrayTypeName()",
                    Line: "78"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2056.TestArrayTypeName();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2056",
                    File: "Batch3\\BridgeIssues\\2000\\N2056.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2065", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge2065)],
        statics: {
            TestBoxedEnum: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge2065).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2065, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestBoxedEnum()",
                    Line: "22"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge2065.TestBoxedEnum();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2077.Bridge2065",
                    File: "Batch3\\BridgeIssues\\2000\\N2077.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2067", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2067)],
        statics: {
            TestGetGenericTypeDefinition: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2067).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2067, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestGetGenericTypeDefinition()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2067.TestGetGenericTypeDefinition();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2067",
                    File: "Batch3\\BridgeIssues\\2000\\N2067.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2068", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2068)],
        statics: {
            TestGetGenericTypeDefinition: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2068).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2068, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestGetGenericTypeDefinition()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2068.TestGetGenericTypeDefinition();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2068",
                    File: "Batch3\\BridgeIssues\\2000\\N2068.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2073", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2073)],
        statics: {
            TestUserDefinedWithStringConcat: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2073).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2073, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUserDefinedWithStringConcat()",
                    Line: "34"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2073.TestUserDefinedWithStringConcat();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2073",
                    File: "Batch3\\BridgeIssues\\2000\\N2073.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2076", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2076)],
        statics: {
            TestLinqGlobalPollution: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2076).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2076, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLinqGlobalPollution()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2076.TestLinqGlobalPollution();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2076",
                    File: "Batch3\\BridgeIssues\\2000\\N2076.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2079", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2079)],
        statics: {
            TestQueryAsArgument: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2079).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2079, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestQueryAsArgument()",
                    Line: "42"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2079.TestQueryAsArgument();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2079",
                    File: "Batch3\\BridgeIssues\\2000\\N2079.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2080", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2080)],
        statics: {
            TestAssigmentOrWithProperty: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2080).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2080, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAssigmentOrWithProperty()",
                    Line: "24"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2080.TestAssigmentOrWithProperty();
            },
            TestAssigmentOrWithPropertyChangingCounter: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2080).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2080, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAssigmentOrWithPropertyChangingCounter()",
                    Line: "64"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2080.TestAssigmentOrWithPropertyChangingCounter();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2080",
                    File: "Batch3\\BridgeIssues\\2000\\N2080.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2081", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2081)],
        statics: {
            TestReturnFromCatch: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2081).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2081, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestReturnFromCatch()",
                    Line: "35"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2081.TestReturnFromCatch();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2081",
                    File: "Batch3\\BridgeIssues\\2000\\N2081.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2088", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2088)],
        statics: {
            TestObjectLiteralReflection: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2088).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2088, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestObjectLiteralReflection()",
                    Line: "40"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2088.TestObjectLiteralReflection();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2088",
                    File: "Batch3\\BridgeIssues\\2000\\N2088.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2092", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2092)],
        statics: {
            TestIgnoreGenericForDelegate: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2092).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2092, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestIgnoreGenericForDelegate()",
                    Line: "24"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2092.TestIgnoreGenericForDelegate();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2092",
                    File: "Batch3\\BridgeIssues\\2000\\N2092.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2094", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2094)],
        statics: {
            TestGenericMethodAsDelegate: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2094).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2094, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestGenericMethodAsDelegate()",
                    Line: "30"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2094.TestGenericMethodAsDelegate();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2094",
                    File: "Batch3\\BridgeIssues\\2000\\N2094.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2106", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2106)],
        statics: {
            TestGenericMethodInObjectLiteral: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2106).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2106, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestGenericMethodInObjectLiteral()",
                    Line: "25"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2106.TestGenericMethodInObjectLiteral();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2106",
                    File: "Batch3\\BridgeIssues\\2100\\N2106.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2114", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2114)],
        statics: {
            TestNonStandardNames: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2114).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2114, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNonStandardNames()",
                    Line: "102"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2114.TestNonStandardNames();
            },
            TestFieldTemplates: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2114).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2114, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestFieldTemplates()",
                    Line: "124"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2114.TestFieldTemplates();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2114",
                    File: "Batch3\\BridgeIssues\\2100\\N2114.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2121", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2121)],
        statics: {
            TestLongAsDictionaryKey: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2121).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2121, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLongAsDictionaryKey()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2121.TestLongAsDictionaryKey();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2121",
                    File: "Batch3\\BridgeIssues\\2100\\N2121.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2127", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2127)],
        statics: {
            TestNumberFormatInfoNaNSymbol: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2127).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2127, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNumberFormatInfoNaNSymbol()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2127.TestNumberFormatInfoNaNSymbol();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2127",
                    File: "Batch3\\BridgeIssues\\2100\\N2127.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2135", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2135)],
        statics: {
            TestNestedTypesNames: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2135).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2135, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNestedTypesNames()",
                    Line: "56"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2135.TestNestedTypesNames();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2135",
                    File: "Batch3\\BridgeIssues\\2100\\N2135.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2137", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2137)],
        statics: {
            TestPropertiesWithNonPrimitiveInitializers: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2137).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2137, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestPropertiesWithNonPrimitiveInitializers()",
                    Line: "21"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2137.TestPropertiesWithNonPrimitiveInitializers();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2137",
                    File: "Batch3\\BridgeIssues\\2100\\N2137.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2138", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2138)],
        statics: {
            TestGenericInterfaceIndexer: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2138).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2138, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestGenericInterfaceIndexer()",
                    Line: "119"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2138.TestGenericInterfaceIndexer();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2138",
                    File: "Batch3\\BridgeIssues\\2100\\N2138.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2141", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2141)],
        statics: {
            TestExternalObjectLiteral: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2141).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2141, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestExternalObjectLiteral()",
                    Line: "17"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2141.TestExternalObjectLiteral();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2141",
                    File: "Batch3\\BridgeIssues\\2100\\N2141.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2143", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2143)],
        statics: {
            TestIgnoreGenericForNestedClass: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2143).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2143, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestIgnoreGenericForNestedClass()",
                    Line: "43"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2143.TestIgnoreGenericForNestedClass();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2143",
                    File: "Batch3\\BridgeIssues\\2100\\N2143.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2146", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2146)],
        statics: {
            TestCharDefaultValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2146).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2146, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestCharDefaultValue()",
                    Line: "21"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2146.TestCharDefaultValue();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2146",
                    File: "Batch3\\BridgeIssues\\2100\\N2146.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2147", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2147)],
        statics: {
            TestLinqExcept: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2147).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2147, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLinqExcept()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2147.TestLinqExcept();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2147",
                    File: "Batch3\\BridgeIssues\\2100\\N2147.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2156", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2156)],
        statics: {
            TestLinqIntersect: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2156).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2156, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLinqIntersect()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2156.TestLinqIntersect();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2156",
                    File: "Batch3\\BridgeIssues\\2100\\N2156.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2157", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2157)],
        statics: {
            TestCreatingGenericInstanceWithInitializer: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2157).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2157, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestCreatingGenericInstanceWithInitializer()",
                    Line: "47"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2157.TestCreatingGenericInstanceWithInitializer();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2157",
                    File: "Batch3\\BridgeIssues\\2100\\N2157.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2159", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2159)],
        statics: {
            TestBaseTypeForGenericDefinition: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2159).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2159, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestBaseTypeForGenericDefinition()",
                    Line: "18"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2159.TestBaseTypeForGenericDefinition();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2159",
                    File: "Batch3\\BridgeIssues\\2100\\N2160.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2160", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2160)],
        statics: {
            TestBaseTypeForGenericDefinition: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2160).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2160, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestBaseTypeForGenericDefinition()",
                    Line: "19"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2160.TestBaseTypeForGenericDefinition();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2160",
                    File: "Batch3\\BridgeIssues\\2100\\N2159.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2163", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2163)],
        statics: {
            TestDecimalToFormat: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2163).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2163, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDecimalToFormat()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2163.TestDecimalToFormat();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2163",
                    File: "Batch3\\BridgeIssues\\2100\\N2163.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2167", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2167)],
        statics: {
            TestMerge: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2167).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2167, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestMerge()",
                    Line: "18"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2167.TestMerge();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2167",
                    File: "Batch3\\BridgeIssues\\2100\\N2167.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2174", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2174)],
        statics: {
            TestGenericComparerDefault: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2174).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2174, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestGenericComparerDefault()",
                    Line: "35"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2174.TestGenericComparerDefault();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2174",
                    File: "Batch3\\BridgeIssues\\2100\\N2174.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2176", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2176)],
        statics: {
            TestExternalObjectLiteralConstructorMode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2176).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2176, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestExternalObjectLiteralConstructorMode()",
                    Line: "36"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2176.TestExternalObjectLiteralConstructorMode();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2176",
                    File: "Batch3\\BridgeIssues\\2100\\N2176.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2181", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2181)],
        statics: {
            TestStringPadForEmptyString: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2181).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2181, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStringPadForEmptyString()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2181.TestStringPadForEmptyString();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2181",
                    File: "Batch3\\BridgeIssues\\2100\\N2181.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2186", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2186)],
        statics: {
            TestConsoleWriteLineParameterless: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2186).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2186, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestConsoleWriteLineParameterless()",
                    Line: "36"
                } ));
                try {
                    Bridge.ClientTest.Batch3.BridgeIssues.Bridge2186.TestConsoleWriteLineParameterless();
                }
                finally {
                    t.TearDown();
                }
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2186",
                    File: "Batch3\\BridgeIssues\\2100\\N2186.cs"
                } );
            }
            return this.context;
        },
        SetUp: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge2186.ClearOutput();
        },
        TearDown: function () {
            Bridge.ClientTest.Batch3.BridgeIssues.Bridge2186.ResetOutput();
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2189", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2189)],
        statics: {
            TestInheritanceFromExternalAndBaseCtor: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2189).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2189, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestInheritanceFromExternalAndBaseCtor()",
                    Line: "44"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2189.TestInheritanceFromExternalAndBaseCtor();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2189",
                    File: "Batch3\\BridgeIssues\\2100\\N2189.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2190", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2190)],
        statics: {
            TestInternalsVisibleTo: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2190).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2190, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestInternalsVisibleTo()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2190.TestInternalsVisibleTo();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2190",
                    File: "Batch3\\BridgeIssues\\2100\\N2190.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2192", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2192)],
        statics: {
            TestIntersection: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2192).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2192, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestIntersection()",
                    Line: "48"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2192.TestIntersection();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2192",
                    File: "Batch3\\BridgeIssues\\2100\\N2192.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2195", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2195)],
        statics: {
            TestGenericInvocationInTryBlock: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2195).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2195, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestGenericInvocationInTryBlock()",
                    Line: "16"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2195.TestGenericInvocationInTryBlock();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2195",
                    File: "Batch3\\BridgeIssues\\2100\\N2195.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2199", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2199)],
        statics: {
            TestTypeParameterName: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2199).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2199, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestTypeParameterName()",
                    Line: "18"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2199.TestTypeParameterName();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2199",
                    File: "Batch3\\BridgeIssues\\2100\\N2199.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2200", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2200)],
        statics: {
            TestSequence: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2200).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2200, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestSequence()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2200.TestSequence();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2200",
                    File: "Batch3\\BridgeIssues\\2200\\N2200.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2203", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2203)],
        statics: {
            TestLocalVarsRenaming: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2203).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2203, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLocalVarsRenaming()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2203.TestLocalVarsRenaming();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2203",
                    File: "Batch3\\BridgeIssues\\2200\\N2203.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2204", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2204)],
        statics: {
            TestDecimalToString: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2204).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2204, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDecimalToString()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2204.TestDecimalToString();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2204",
                    File: "Batch3\\BridgeIssues\\2200\\N2204.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2207", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2207)],
        statics: {
            TestDefaultOptionalParam: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2207).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2207, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDefaultOptionalParam()",
                    Line: "31"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2207.TestDefaultOptionalParam();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2207",
                    File: "Batch3\\BridgeIssues\\2200\\N2207.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2210", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2210)],
        statics: {
            TestTypeOrdering: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2210).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2210, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestTypeOrdering()",
                    Line: "55"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2210.TestTypeOrdering();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2210",
                    File: "Batch3\\BridgeIssues\\2200\\N2210.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2211", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2211)],
        statics: {
            TestConditionAccess: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2211).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2211, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestConditionAccess()",
                    Line: "17"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2211.TestConditionAccess();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2211",
                    File: "Batch3\\BridgeIssues\\2200\\N2211.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2212", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2212)],
        statics: {
            TestDelegateBindCache: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2212).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2212, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDelegateBindCache()",
                    Line: "38"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2212.TestDelegateBindCache();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2212",
                    File: "Batch3\\BridgeIssues\\2200\\N2212.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2213", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2213)],
        statics: {
            TestCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2213).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2213, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestCase()",
                    Line: "27"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2213.TestCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2213",
                    File: "Batch3\\BridgeIssues\\2200\\N2213.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2214", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2214)],
        statics: {
            TestCheckedULong: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2214).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2214, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestCheckedULong()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2214.TestCheckedULong();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2214",
                    File: "Batch3\\BridgeIssues\\2200\\N2214.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2216", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2216)],
        statics: {
            TestExternalInterface: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2216).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2216, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestExternalInterface()",
                    Line: "34"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2216.TestExternalInterface();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2216",
                    File: "Batch3\\BridgeIssues\\2200\\N2216.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2220", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2220)],
        statics: {
            TestHasElementType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2220).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2220, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestHasElementType()",
                    Line: "16"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2220.TestHasElementType();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2220",
                    File: "Batch3\\BridgeIssues\\2200\\N2220.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2221", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2221)],
        statics: {
            TestMakeArrayType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2221).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2221, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestMakeArrayType()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2221.TestMakeArrayType();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2221",
                    File: "Batch3\\BridgeIssues\\2200\\N2221.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2222", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2222)],
        statics: {
            TestGetTypeWithNullArgument: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2222).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2222, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestGetTypeWithNullArgument()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2222.TestGetTypeWithNullArgument();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2222",
                    File: "Batch3\\BridgeIssues\\2200\\N2222.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2225", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2225)],
        statics: {
            TestVolatile: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2225).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2225, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestVolatile()",
                    Line: "20"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2225.TestVolatile();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2225",
                    File: "Batch3\\BridgeIssues\\2200\\N2225.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2243", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2243)],
        statics: {
            TestElementHiddenField: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2243).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2243, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestElementHiddenField()",
                    Line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2243.TestElementHiddenField();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2243",
                    File: "Batch3\\BridgeIssues\\2200\\N2243.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2246", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2246)],
        statics: {
            TestEntryPoint: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2246).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2246, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestEntryPoint()",
                    Line: "23"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2246.TestEntryPoint();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2246",
                    File: "Batch3\\BridgeIssues\\2200\\N2246.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2249", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2249)],
        statics: {
            TestPropertyInitializerWithDirective: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2249).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2249, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestPropertyInitializerWithDirective()",
                    Line: "22"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2249.TestPropertyInitializerWithDirective();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2249",
                    File: "Batch3\\BridgeIssues\\2200\\N2249.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2251", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2251)],
        statics: {
            TestListGetRange: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2251).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2251, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestListGetRange()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2251.TestListGetRange();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2251",
                    File: "Batch3\\BridgeIssues\\2200\\N2251.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2278", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2278)],
        statics: {
            TestGenericInterface: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2278).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2278, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestGenericInterface()",
                    Line: "28"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2278.TestGenericInterface();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2278",
                    File: "Batch3\\BridgeIssues\\2200\\N2278.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2279", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2279)],
        statics: {
            TestPropertyWithInitializerAndNestedClass: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2279).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2279, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestPropertyWithInitializerAndNestedClass()",
                    Line: "22"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2279.TestPropertyWithInitializerAndNestedClass();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2279",
                    File: "Batch3\\BridgeIssues\\2200\\N2279.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2280", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2280)],
        statics: {
            TestGetTypeInIgnoreGenericMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2280).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2280, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestGetTypeInIgnoreGenericMethod()",
                    Line: "22"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2280.TestGetTypeInIgnoreGenericMethod();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2280",
                    File: "Batch3\\BridgeIssues\\2200\\N2280.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2281", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2281)],
        statics: {
            TestFieldMerge: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2281).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2281, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestFieldMerge()",
                    Line: "42"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2281.TestFieldMerge();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2281",
                    File: "Batch3\\BridgeIssues\\2200\\N2281.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2284", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2284)],
        statics: {
            TestNameAttrOnProperty: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2284).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2284, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNameAttrOnProperty()",
                    Line: "60"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2284.TestNameAttrOnProperty();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2284",
                    File: "Batch3\\BridgeIssues\\2200\\N2284.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2293", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2293)],
        statics: {
            TestAttributeUsage: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2293).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2293, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAttributeUsage()",
                    Line: "19"
                } ));
                t.Fixture.TestAttributeUsage();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2293",
                    File: "Batch3\\BridgeIssues\\2200\\N2293.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2298", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2298)],
        statics: {
            TestGenericInterfaceWithNestedTypeParameters: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2298).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2298, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestGenericInterfaceWithNestedTypeParameters()",
                    Line: "68"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2298.TestGenericInterfaceWithNestedTypeParameters();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2298",
                    File: "Batch3\\BridgeIssues\\2200\\N2298.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2310", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2310)],
        statics: {
            TestBridgeFields: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2310).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2310, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestBridgeFields()",
                    Line: "88"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2310.TestBridgeFields();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2310",
                    File: "Batch3\\BridgeIssues\\2300\\N2310.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2313", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2313)],
        statics: {
            TestExternalInterfaceOverloadedMembers: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2313).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2313, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestExternalInterfaceOverloadedMembers()",
                    Line: "19"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2313.TestExternalInterfaceOverloadedMembers();
            },
            TestExternalClassInheritingInterface: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2313).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2313, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestExternalClassInheritingInterface()",
                    Line: "56"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2313.TestExternalClassInheritingInterface();
            },
            TestExternalInheritingInterfaces: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2313).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2313, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestExternalInheritingInterfaces()",
                    Line: "100"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2313.TestExternalInheritingInterfaces();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2313",
                    File: "Batch3\\BridgeIssues\\2300\\N2313.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2318", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2318)],
        statics: {
            TestBoxing: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2318).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2318, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestBoxing()",
                    Line: "25"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2318.TestBoxing();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2318",
                    File: "Batch3\\BridgeIssues\\2300\\N2318.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2320", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2320)],
        statics: {
            TestReadyAndMain: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2320).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2320, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestReadyAndMain()",
                    Line: "19"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2320.TestReadyAndMain();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2320",
                    File: "Batch3\\BridgeIssues\\2300\\N2320.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2322", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2322)],
        statics: {
            TestSequence: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2322).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2322, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestSequence()",
                    Line: "31"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2322.TestSequence();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2322",
                    File: "Batch3\\BridgeIssues\\2300\\N2322.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2327", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2327)],
        statics: {
            TestEnumInterfaces: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2327).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2327, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestEnumInterfaces()",
                    Line: "15"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2327.TestEnumInterfaces();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2327",
                    File: "Batch3\\BridgeIssues\\2300\\N2327.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2330", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2330)],
        statics: {
            TestMultipleTryCatchBlocks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2330).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2330, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestMultipleTryCatchBlocks()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2330.TestMultipleTryCatchBlocks();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2330",
                    File: "Batch3\\BridgeIssues\\2300\\N2330.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2337", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2337)],
        statics: {
            TestFDateModifier: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2337).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2337, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestFDateModifier()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2337.TestFDateModifier();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2337",
                    File: "Batch3\\BridgeIssues\\2300\\N2337.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2338", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2338)],
        statics: {
            TestGenericGetType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2338).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2338, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestGenericGetType()",
                    Line: "20"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2338.TestGenericGetType();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2338",
                    File: "Batch3\\BridgeIssues\\2300\\N2338.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2342", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2342)],
        statics: {
            TestCastParanthesize: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2342).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2342, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestCastParanthesize()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2342.TestCastParanthesize();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2342",
                    File: "Batch3\\BridgeIssues\\2300\\N2342.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2343", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2343)],
        statics: {
            TestBoxedEqualsAndGetHashCode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2343).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2343, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestBoxedEqualsAndGetHashCode()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2343.TestBoxedEqualsAndGetHashCode();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2343",
                    File: "Batch3\\BridgeIssues\\2300\\N2343.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2344", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2344)],
        statics: {
            TestHtmlElementName: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2344).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2344, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestHtmlElementName()",
                    Line: "45"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2344.TestHtmlElementName();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2344",
                    File: "Batch3\\BridgeIssues\\2300\\N2344.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2345", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345)],
        statics: {
            TestArrayAsIList: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2345, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestArrayAsIList()",
                    Line: "16"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345.TestArrayAsIList();
            },
            TestByteArrayAsIList: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2345, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestByteArrayAsIList()",
                    Line: "36"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345.TestByteArrayAsIList();
            },
            TestLongArrayAsIList: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2345, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLongArrayAsIList()",
                    Line: "54"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345.TestLongArrayAsIList();
            },
            TestDecimalArrayAsIList: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2345, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDecimalArrayAsIList()",
                    Line: "76"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345.TestDecimalArrayAsIList();
            },
            TestStructArrayAsIList: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2345, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStructArrayAsIList()",
                    Line: "98"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345.TestStructArrayAsIList();
            },
            TestStringArrayAsIList: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2345, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStringArrayAsIList()",
                    Line: "115"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345.TestStringArrayAsIList();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2345",
                    File: "Batch3\\BridgeIssues\\2300\\N2345.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2347", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2347)],
        statics: {
            TestG17FormatSpecifier: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2347).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2347, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestG17FormatSpecifier()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2347.TestG17FormatSpecifier();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2347",
                    File: "Batch3\\BridgeIssues\\2300\\N2347.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2349", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2349)],
        statics: {
            TestExternalIgnoreGenericClass: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2349).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2349, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestExternalIgnoreGenericClass()",
                    Line: "17"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2349.TestExternalIgnoreGenericClass();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2349",
                    File: "Batch3\\BridgeIssues\\2300\\N2349.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2352", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2352)],
        statics: {
            TestOperatorOnAnonymousType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2352).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2352, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestOperatorOnAnonymousType()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2352.TestOperatorOnAnonymousType();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2352",
                    File: "Batch3\\BridgeIssues\\2300\\N2352.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2355", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2355)],
        statics: {
            TestLinqGrouping: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2355).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2355, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLinqGrouping()",
                    Line: "50"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2355.TestLinqGrouping();
            },
            TestLinqLookup: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2355).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2355, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLinqLookup()",
                    Line: "62"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2355.TestLinqLookup();
            },
            TestLinqOrderedEnumerable: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2355).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2355, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLinqOrderedEnumerable()",
                    Line: "72"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2355.TestLinqOrderedEnumerable();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2355",
                    File: "Batch3\\BridgeIssues\\2300\\N2355.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2359", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2359)],
        statics: {
            TestNullableCompareEquals: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2359).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2359, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNullableCompareEquals()",
                    Line: "21"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2359.TestNullableCompareEquals();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2359",
                    File: "Batch3\\BridgeIssues\\2300\\N2359.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2369", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2369)],
        statics: {
            TestArrayTypeAlias: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2369).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2369, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestArrayTypeAlias()",
                    Line: "52"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2369.TestArrayTypeAlias();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2369",
                    File: "Batch3\\BridgeIssues\\2300\\N2369.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2374", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2374)],
        statics: {
            TestPropertyInitializer: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2374).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2374, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestPropertyInitializer()",
                    Line: "18"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2374.TestPropertyInitializer();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2374",
                    File: "Batch3\\BridgeIssues\\2300\\N2374.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2375", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2375)],
        statics: {
            TestNameofWithReflection: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2375).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2375, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNameofWithReflection()",
                    Line: "18"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2375.TestNameofWithReflection();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2375",
                    File: "Batch3\\BridgeIssues\\2300\\N2375.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2386", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2386)],
        statics: {
            TestStructBoxingOperations: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2386).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2386, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStructBoxingOperations()",
                    Line: "37"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2386.TestStructBoxingOperations();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2386",
                    File: "Batch3\\BridgeIssues\\2300\\N2386.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2393", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2393)],
        statics: {
            TestLambdaInLiteral: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2393).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2393, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLambdaInLiteral()",
                    Line: "31"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2393.TestLambdaInLiteral();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2393",
                    File: "Batch3\\BridgeIssues\\2300\\N2393.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2399", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2399)],
        statics: {
            TestSqrt: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2399).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2399, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestSqrt()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2399.TestSqrt();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2399",
                    File: "Batch3\\BridgeIssues\\2300\\N2399.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2401", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2401)],
        statics: {
            TestArrayInitializer: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2401).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2401, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestArrayInitializer()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2401.TestArrayInitializer();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2401",
                    File: "Batch3\\BridgeIssues\\2400\\N2401.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2419", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2419)],
        statics: {
            TestExternalEnum: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2419).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2419, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestExternalEnum()",
                    Line: "26"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2419.TestExternalEnum();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2419",
                    File: "Batch3\\BridgeIssues\\2400\\N2420.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2430", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2430)],
        statics: {
            TestPropertyInitializer: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2430).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2430, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestPropertyInitializer()",
                    Line: "48"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2430.TestPropertyInitializer();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2430",
                    File: "Batch3\\BridgeIssues\\2400\\N2430.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2443", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2443)],
        statics: {
            TestNaNCompareForDouble: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2443).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2443, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNaNCompareForDouble()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2443.TestNaNCompareForDouble();
            },
            TestNaNCompareForFloat: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2443).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2443, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNaNCompareForFloat()",
                    Line: "60"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2443.TestNaNCompareForFloat();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2443",
                    File: "Batch3\\BridgeIssues\\2400\\N2443.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2445", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2445)],
        statics: {
            TestEmptyForLoop: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2445).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2445, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestEmptyForLoop()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2445.TestEmptyForLoop();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2445",
                    File: "Batch3\\BridgeIssues\\2400\\N2445.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2446", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2446)],
        statics: {
            TestDoubleMinValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2446).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2446, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDoubleMinValue()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2446.TestDoubleMinValue();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2446",
                    File: "Batch3\\BridgeIssues\\2400\\N2446.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2454", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2454)],
        statics: {
            TestForEachClone: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2454).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2454, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestForEachClone()",
                    Line: "44"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2454.TestForEachClone();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2454",
                    File: "Batch3\\BridgeIssues\\2400\\N2454.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2456", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2456)],
        statics: {
            TestIsArrayFromIFrame: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2456).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2456, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestIsArrayFromIFrame()",
                    Line: "21"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2456.TestIsArrayFromIFrame();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2456",
                    File: "Batch3\\BridgeIssues\\2400\\N2456.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2458", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2458)],
        statics: {
            TestGetBaseException: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2458).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2458, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestGetBaseException()",
                    Line: "51"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2458.TestGetBaseException();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2458",
                    File: "Batch3\\BridgeIssues\\2400\\N2458.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2462", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2462)],
        statics: {
            TestReturnInAsync: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2462).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2462, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestReturnInAsync()",
                    Line: "28"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2462.TestReturnInAsync();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2462",
                    File: "Batch3\\BridgeIssues\\2400\\N2462.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2467", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2467)],
        statics: {
            TestPropertyInitializerInStruct: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2467).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2467, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestPropertyInitializerInStruct()",
                    Line: "23"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2467.TestPropertyInitializerInStruct();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2467",
                    File: "Batch3\\BridgeIssues\\2400\\N2467.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2469", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2469)],
        statics: {
            TestLambdaLiftingWithStaticGenericMember: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2469).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2469, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLambdaLiftingWithStaticGenericMember()",
                    Line: "31"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2469.TestLambdaLiftingWithStaticGenericMember();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2469",
                    File: "Batch3\\BridgeIssues\\2400\\N2469.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2481", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2481)],
        statics: {
            TestReturnInAsyncUsing: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2481).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2481, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestReturnInAsyncUsing()",
                    Line: "44"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2481.TestReturnInAsyncUsing();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2481",
                    File: "Batch3\\BridgeIssues\\2400\\N2481.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2486", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2486)],
        statics: {
            TestGenericArrayInterface: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2486).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2486, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestGenericArrayInterface()",
                    Line: "50"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2486.TestGenericArrayInterface();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2486",
                    File: "Batch3\\BridgeIssues\\2400\\N2486.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2489", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2489)],
        statics: {
            TestReflectableInherits: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2489).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2489, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestReflectableInherits()",
                    Line: "35"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2489.TestReflectableInherits();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2489",
                    File: "Batch3\\BridgeIssues\\2400\\N2489.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2497", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2497)],
        statics: {
            TestPropertyInitializerWithDirective: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2497).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2497, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestPropertyInitializerWithDirective()",
                    Line: "189"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2497.TestPropertyInitializerWithDirective();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2497",
                    File: "Batch3\\BridgeIssues\\2400\\N2497.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2499", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2499)],
        statics: {
            TestArraySortComparison: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2499).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2499, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestArraySortComparison()",
                    Line: "30"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2499.TestArraySortComparison();
            },
            TestArraySortComparisonWithEntity: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2499).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2499, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestArraySortComparisonWithEntity()",
                    Line: "58"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2499.TestArraySortComparisonWithEntity();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2499",
                    File: "Batch3\\BridgeIssues\\2400\\N2499.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2502", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2502)],
        statics: {
            TestAsyncBreak: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2502).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2502, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAsyncBreak()",
                    Line: "37"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2502.TestAsyncBreak();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2502",
                    File: "Batch3\\BridgeIssues\\2500\\N2502.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2505", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2505)],
        statics: {
            TestNegativeNumberToULong: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge2505).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge2505, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNegativeNumberToULong()",
                    Line: "15"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge2505.TestNegativeNumberToULong();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge2505",
                    File: "Batch3\\BridgeIssues\\2500\\N2505.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge381", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge381)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge381).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge381, 6, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "30"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge381.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge381",
                    File: "Batch3\\BridgeIssues\\0300\\N381.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge447", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge447)],
        statics: {
            CheckInlineExpression: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge447).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge447, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "CheckInlineExpression()",
                    Line: "23"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge447.CheckInlineExpression();
            },
            CheckInlineCalls: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge447).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge447, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "CheckInlineCalls()",
                    Line: "31"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge447.CheckInlineCalls();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge447",
                    File: "Batch3\\BridgeIssues\\0400\\N447.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge472", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge472)],
        statics: {
            Test: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge472).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge472, 10, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "Test()",
                    Line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge472.Test();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge472",
                    File: "Batch3\\BridgeIssues\\0400\\N472.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge479", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge479)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge479).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge479, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge479.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge479",
                    File: "Batch3\\BridgeIssues\\0400\\N479.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge483", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge483)],
        statics: {
            TestPropertyWithNameSameAsType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge483).BeforeTest(true, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge483, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestPropertyWithNameSameAsType()",
                    Line: "10"
                } ));
                t.Fixture.TestPropertyWithNameSameAsType();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge483",
                    File: "Batch3\\BridgeIssues\\0400\\N483.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge485", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge485)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge485).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge485, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "13"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge485.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge485",
                    File: "Batch3\\BridgeIssues\\0400\\N485.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge495", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge495)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge495).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge495, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge495.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge495",
                    File: "Batch3\\BridgeIssues\\0400\\N495.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge501", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge501)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge501).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge501, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "25"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge501.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge501",
                    File: "Batch3\\BridgeIssues\\0500\\N501.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge502", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge502)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge502).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge502, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge502.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge502",
                    File: "Batch3\\BridgeIssues\\0500\\N502.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge503", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge503)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge503).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge503, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge503.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge503",
                    File: "Batch3\\BridgeIssues\\0500\\N503.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge508", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge508)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge508).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge508, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "15"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge508.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge508",
                    File: "Batch3\\BridgeIssues\\0500\\N508.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge514", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge514)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge514).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge514, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge514.TestUseCase();
            },
            TestRelated: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge514).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge514, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestRelated()",
                    Line: "22"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge514.TestRelated();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge514",
                    File: "Batch3\\BridgeIssues\\0500\\N514.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge520", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge520)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge520).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge520, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "29"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge520.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge520",
                    File: "Batch3\\BridgeIssues\\0500\\N520.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge522", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge522)],
        statics: {
            TestUseCase1: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge522).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge522, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase1()",
                    Line: "42"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge522.TestUseCase1();
            },
            TestUseCase2: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge522).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge522, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase2()",
                    Line: "54"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge522.TestUseCase2();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge522",
                    File: "Batch3\\BridgeIssues\\0500\\N522.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge532", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge532)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge532).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge532, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge532.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge532",
                    File: "Batch3\\BridgeIssues\\0500\\N532.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge537", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge537)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge537).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge537, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "15"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge537.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge537",
                    File: "Batch3\\BridgeIssues\\0500\\N537A.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge538", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge538)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge538).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge538, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge538.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge538",
                    File: "Batch3\\BridgeIssues\\0500\\N538.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge544", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge544)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge544).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge544, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge544.TestUseCase();
            },
            TestRelated: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge544).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge544, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestRelated()",
                    Line: "19"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge544.TestRelated();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge544",
                    File: "Batch3\\BridgeIssues\\0500\\N544.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge546", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge546)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge546).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge546, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge546.TestUseCase();
            },
            TestRelated: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge546).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge546, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestRelated()",
                    Line: "23"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge546.TestRelated();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge546",
                    File: "Batch3\\BridgeIssues\\0500\\N546.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge548", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge548)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge548).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge548, 18, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "15"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge548.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge548",
                    File: "Batch3\\BridgeIssues\\0500\\N548.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge549", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge549)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge549).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge549, 153, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "15"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge549.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge549",
                    File: "Batch3\\BridgeIssues\\0500\\N549.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge550", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge550)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge550).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge550, 10, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "17"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge550.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge550",
                    File: "Batch3\\BridgeIssues\\0500\\N550.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge554", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge554)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge554).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge554, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge554.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge554",
                    File: "Batch3\\BridgeIssues\\0500\\N554.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge555", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge555)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge555).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge555, 15, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge555.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge555",
                    File: "Batch3\\BridgeIssues\\0500\\N555.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge558", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge558)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge558).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge558, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "36"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge558.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge558",
                    File: "Batch3\\BridgeIssues\\0500\\N558.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge559", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge559)],
        statics: {
            TestUseCase1: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge559).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge559, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase1()",
                    Line: "83"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge559.TestUseCase1();
            },
            TestUseCase2: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge559).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge559, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase2()",
                    Line: "91"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge559.TestUseCase2();
            },
            TestUseCase3: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge559).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge559, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase3()",
                    Line: "99"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge559.TestUseCase3();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge559",
                    File: "Batch3\\BridgeIssues\\0500\\N559.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge563", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge563)],
        statics: {
            TesForeach: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge563).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge563, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TesForeach()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge563.TesForeach();
            },
            TesFor: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge563).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge563, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TesFor()",
                    Line: "45"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge563.TesFor();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge563",
                    File: "Batch3\\BridgeIssues\\0500\\N563.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge566", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge566)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge566).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge566, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "30"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge566.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge566",
                    File: "Batch3\\BridgeIssues\\0500\\N566.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge572", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge572)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge572).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge572, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge572.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge572",
                    File: "Batch3\\BridgeIssues\\0500\\N572.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge577", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge577)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge577).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge577, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "32"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge577.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge577",
                    File: "Batch3\\BridgeIssues\\0500\\N577.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge578", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge578)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge578).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge578, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge578.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge578",
                    File: "Batch3\\BridgeIssues\\0500\\N578.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge580", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge580)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge580).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge580, 10, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge580.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge580",
                    File: "Batch3\\BridgeIssues\\0500\\N580.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge582)],
        statics: {
            TestAddTimeSpan: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge582).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582, 6, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAddTimeSpan()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge582.TestAddTimeSpan();
            },
            TestAddTicks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge582).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582, 6, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAddTicks()",
                    Line: "26"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge582.TestAddTicks();
            },
            TestTicks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge582).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582, 7, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestTicks()",
                    Line: "40"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge582.TestTicks();
            },
            TestSubtractTimeSpan: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge582).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestSubtractTimeSpan()",
                    Line: "57"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge582.TestSubtractTimeSpan();
            },
            TestTimeOfDay: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge582).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge582, 6, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestTimeOfDay()",
                    Line: "89"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge582.TestTimeOfDay();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge582",
                    File: "Batch3\\BridgeIssues\\0500\\N582.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge583", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge583)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge583).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge583, 120, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge583.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge583",
                    File: "Batch3\\BridgeIssues\\0500\\N583.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge586", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge586)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge586).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge586, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "53"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge586.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge586",
                    File: "Batch3\\BridgeIssues\\0500\\N586.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge588", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge588)],
        statics: {
            TestUseCase1: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge588).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge588, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase1()",
                    Line: "76"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge588.TestUseCase1();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge588",
                    File: "Batch3\\BridgeIssues\\0500\\N588.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge588C", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C)],
        statics: {
            TestUseCase2: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge588C, 9, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase2()",
                    Line: "52"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C.TestUseCase2();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge588C",
                    File: "Batch3\\BridgeIssues\\0500\\N588.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge592", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge592)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge592).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge592, 6, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge592.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge592",
                    File: "Batch3\\BridgeIssues\\0500\\N592.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge595", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge595)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge595).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge595, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "54"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge595.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge595",
                    File: "Batch3\\BridgeIssues\\0500\\N595.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge597", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge597)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge597).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge597, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "30"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge597.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge597",
                    File: "Batch3\\BridgeIssues\\0500\\N597.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge603", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge603)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge603).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge603, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "72"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge603.TestUseCase();
            },
            TestRelated: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge603).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge603, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestRelated()",
                    Line: "82"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge603.TestRelated();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge603",
                    File: "Batch3\\BridgeIssues\\0600\\N603.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge606", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge606)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge606).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge606, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "42"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge606.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge606",
                    File: "Batch3\\BridgeIssues\\0600\\N606.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge607", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge607)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge607).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge607, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "35"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge607.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge607",
                    File: "Batch3\\BridgeIssues\\0600\\N607.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge608", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge608)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge608).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge608, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "35"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge608.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge608",
                    File: "Batch3\\BridgeIssues\\0600\\N608.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge615", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge615)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge615).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge615, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "23"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge615.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge615",
                    File: "Batch3\\BridgeIssues\\0600\\N615.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge623", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge623)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge623).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge623, 8, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "57"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge623.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge623",
                    File: "Batch3\\BridgeIssues\\0600\\N623.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge625", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge625)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge625).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge625, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "27"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge625.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge625",
                    File: "Batch3\\BridgeIssues\\0600\\N625.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge634", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge634)],
        statics: {
            TestUseCase2: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge634).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge634, 21, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase2()",
                    Line: "94"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge634.TestUseCase2();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge634",
                    File: "Batch3\\BridgeIssues\\0600\\N634.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge635", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge635)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge635).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge635, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "28"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge635.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge635",
                    File: "Batch3\\BridgeIssues\\0600\\N635.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge637", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge637)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge637).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge637, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "15"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge637.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge637",
                    File: "Batch3\\BridgeIssues\\0600\\N637.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge647", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge647)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge647).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge647, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "29"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge647.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge647",
                    File: "Batch3\\BridgeIssues\\0600\\N647.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge648", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge648)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge648).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge648, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "26"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge648.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge648",
                    File: "Batch3\\BridgeIssues\\0600\\N648.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge652", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge652)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge652).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge652, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "62"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge652.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge652",
                    File: "Batch3\\BridgeIssues\\0600\\N652.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge655", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge655)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge655).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge655, 12, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "34"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge655.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge655",
                    File: "Batch3\\BridgeIssues\\0600\\N655.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge658", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge658)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge658).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge658, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge658.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge658",
                    File: "Batch3\\BridgeIssues\\0600\\N658.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge660", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge660)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge660).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge660, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "63"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge660.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge660",
                    File: "Batch3\\BridgeIssues\\0600\\N660.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge661", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge661)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge661).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge661, 6, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "20"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge661.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge661",
                    File: "Batch3\\BridgeIssues\\0600\\N661.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge664", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge664)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge664).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge664, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "42"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge664.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge664",
                    File: "Batch3\\BridgeIssues\\0600\\N664.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge666", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge666)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge666).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge666, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge666.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge666",
                    File: "Batch3\\BridgeIssues\\0600\\N666.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge671", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge671)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge671).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge671, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "39"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge671.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge671",
                    File: "Batch3\\BridgeIssues\\0600\\N671.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge674", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge674)],
        statics: {
            TestUndefinedToReferenceType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge674).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge674, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUndefinedToReferenceType()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge674.TestUndefinedToReferenceType();
            },
            TestUndefinedToValueType: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge674).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge674, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUndefinedToValueType()",
                    Line: "21"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge674.TestUndefinedToValueType();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge674",
                    File: "Batch3\\BridgeIssues\\0600\\N674.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge675", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge675)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge675).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge675, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge675.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge675",
                    File: "Batch3\\BridgeIssues\\0600\\N675.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge687", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge687)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge687).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge687, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge687.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge687",
                    File: "Batch3\\BridgeIssues\\0600\\N687.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge689", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge689)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge689).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge689, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge689.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge689",
                    File: "Batch3\\BridgeIssues\\0600\\N689.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge690", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge690)],
        statics: {
            TestUseCaseForInstance: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge690).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge690, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCaseForInstance()",
                    Line: "43"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge690.TestUseCaseForInstance();
            },
            TestUseCaseForStatic: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge690).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge690, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCaseForStatic()",
                    Line: "54"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge690.TestUseCaseForStatic();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge690",
                    File: "Batch3\\BridgeIssues\\0600\\N690.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge691", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge691)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge691).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge691, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge691.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge691",
                    File: "Batch3\\BridgeIssues\\0600\\N691.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge692", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge692)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge692).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge692, 8, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "89"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge692.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge692",
                    File: "Batch3\\BridgeIssues\\0600\\N692.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge693", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge693)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge693).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge693, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "28"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge693.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge693",
                    File: "Batch3\\BridgeIssues\\0600\\N693.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge694", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge694)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge694).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge694, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge694.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge694",
                    File: "Batch3\\BridgeIssues\\0600\\N694.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge696", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge696)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge696).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge696, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "13"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge696.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge696",
                    File: "Batch3\\BridgeIssues\\0600\\N696.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge699", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge699)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge699).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge699, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge699.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge699",
                    File: "Batch3\\BridgeIssues\\0600\\N699.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge708", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge708)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge708).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge708, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge708.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge708",
                    File: "Batch3\\BridgeIssues\\0700\\N708.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge721", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge721)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge721).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge721, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge721.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge721",
                    File: "Batch3\\BridgeIssues\\0700\\N721.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge722", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge722)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge722).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge722, 9, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "31"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge722.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge722",
                    File: "Batch3\\BridgeIssues\\0700\\N722.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge726", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge726)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge726).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge726, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge726.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge726",
                    File: "Batch3\\BridgeIssues\\0700\\N726.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge732", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge732)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge732).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge732, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge732.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge732",
                    File: "Batch3\\BridgeIssues\\0700\\N732.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge733", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge733)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge733).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge733, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "18"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge733.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge733",
                    File: "Batch3\\BridgeIssues\\0700\\N733.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge743", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge743)],
        statics: {
            TestInlineMethodsAsReference: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge743).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge743, 9, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestInlineMethodsAsReference()",
                    Line: "34"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge743.TestInlineMethodsAsReference();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge743",
                    File: "Batch3\\BridgeIssues\\0700\\N743.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge751", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge751)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge751).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge751, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge751.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge751",
                    File: "Batch3\\BridgeIssues\\0700\\N751.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge758", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge758)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge758).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge758, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge758.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge758",
                    File: "Batch3\\BridgeIssues\\0700\\N758.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge760", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge760)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge760).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge760, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge760.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge760",
                    File: "Batch3\\BridgeIssues\\0700\\N760.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge762", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge762)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge762).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge762, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "19"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge762.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge762",
                    File: "Batch3\\BridgeIssues\\0700\\N762.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge772", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge772)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge772).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge772, 10, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge772.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge772",
                    File: "Batch3\\BridgeIssues\\0700\\N772.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge777", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge777)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge777).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge777, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "33"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge777.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge777",
                    File: "Batch3\\BridgeIssues\\0700\\N777.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge782", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge782)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge782).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge782, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge782.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge782",
                    File: "Batch3\\BridgeIssues\\0700\\N782.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge785", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge785)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge785).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge785, 7, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "30"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge785.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge785",
                    File: "Batch3\\BridgeIssues\\0700\\N785.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge786", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge786)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge786).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge786, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge786.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge786",
                    File: "Batch3\\BridgeIssues\\0700\\N786.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge788", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge788)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge788).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge788, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge788.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge788",
                    File: "Batch3\\BridgeIssues\\0700\\N788.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge789", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge789)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge789).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge789, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge789.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge789",
                    File: "Batch3\\BridgeIssues\\0700\\N789.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge793", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge793)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge793).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge793, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge793.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge793",
                    File: "Batch3\\BridgeIssues\\0700\\N793.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge795", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge795)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge795).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge795, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "99"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge795.TestUseCase();
            },
            TestRelated: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge795).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge795, 16, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestRelated()",
                    Line: "108"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge795.TestRelated();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge795",
                    File: "Batch3\\BridgeIssues\\0700\\N795.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge796", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge796)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge796).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge796, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge796.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge796",
                    File: "Batch3\\BridgeIssues\\0700\\N796.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge815", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge815)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge815).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge815, 7, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge815.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge815",
                    File: "Batch3\\BridgeIssues\\0800\\N815.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge816", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge816)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge816).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge816, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge816.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge816",
                    File: "Batch3\\BridgeIssues\\0800\\N816.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge817", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge817)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge817).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge817, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge817.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge817",
                    File: "Batch3\\BridgeIssues\\0800\\N817.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge818", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge818)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge818).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge818, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge818.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge818",
                    File: "Batch3\\BridgeIssues\\0800\\N818.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge821", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge821)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge821).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge821, 9, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge821.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge821",
                    File: "Batch3\\BridgeIssues\\0800\\N821.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge823", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge823)],
        statics: {
            GetTicksReturnsCorrectValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge823).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge823, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "GetTicksReturnsCorrectValue()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge823.GetTicksReturnsCorrectValue();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge823",
                    File: "Batch3\\BridgeIssues\\0800\\N823.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge826", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge826)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge826).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge826, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "55"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge826.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge826",
                    File: "Batch3\\BridgeIssues\\0800\\N826.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge830", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge830)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge830).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge830, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "35"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge830.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge830",
                    File: "Batch3\\BridgeIssues\\0800\\N830.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge835", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge835)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge835).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge835, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge835.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge835",
                    File: "Batch3\\BridgeIssues\\0800\\N835.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge841", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge841)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge841).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge841, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge841.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge841",
                    File: "Batch3\\BridgeIssues\\0800\\N841.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge844", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge844)],
        statics: {
            NullableAndSimpleDateTimeToStringEquals: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge844).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge844, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "NullableAndSimpleDateTimeToStringEquals()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge844.NullableAndSimpleDateTimeToStringEquals();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge844",
                    File: "Batch3\\BridgeIssues\\0800\\N844.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge849", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge849)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge849).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge849, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "18"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge849.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge849",
                    File: "Batch3\\BridgeIssues\\0800\\N849.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge857", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge857)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge857).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge857, 8, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "36"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge857.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge857",
                    File: "Batch3\\BridgeIssues\\0800\\N857.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge861", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge861)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge861).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge861, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "27"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge861.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge861",
                    File: "Batch3\\BridgeIssues\\0800\\N861.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge863", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge863)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge863).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge863, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge863.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge863",
                    File: "Batch3\\BridgeIssues\\0800\\N863.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge874", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge874)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge874).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge874, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge874.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge874",
                    File: "Batch3\\BridgeIssues\\0800\\N874.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge881", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge881)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge881).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge881, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "15"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge881.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge881",
                    File: "Batch3\\BridgeIssues\\0800\\N881.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge882", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge882)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge882).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge882, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "46"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge882.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge882",
                    File: "Batch3\\BridgeIssues\\0800\\N882.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge883", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge883)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge883).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge883, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "36"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge883.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge883",
                    File: "Batch3\\BridgeIssues\\0800\\N883.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge889", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge889)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge889).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge889, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "18"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge889.TestUseCase();
            },
            TestMakeEnumerable: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge889).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge889, 8, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestMakeEnumerable()",
                    Line: "30"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge889.TestMakeEnumerable();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge889",
                    File: "Batch3\\BridgeIssues\\0800\\N889.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge892", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge892)],
        statics: {
            TestUseCase: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge892).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge892, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestUseCase()",
                    Line: "17"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge892.TestUseCase();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge892",
                    File: "Batch3\\BridgeIssues\\0800\\N892.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge893", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge893)],
        statics: {
            EnumToStringWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge893).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge893, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "EnumToStringWorks()",
                    Line: "24"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge893.EnumToStringWorks();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge893",
                    File: "Batch3\\BridgeIssues\\0800\\N893.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge898", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge898)],
        statics: {
            TestDecimalConversion: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge898).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge898, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDecimalConversion()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge898.TestDecimalConversion();
            },
            TestDoubleConversion: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge898).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge898, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDoubleConversion()",
                    Line: "20"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge898.TestDoubleConversion();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge898",
                    File: "Batch3\\BridgeIssues\\0800\\N898.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge905", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge905)],
        statics: {
            DayOfWeekFixed: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge905).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge905, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "DayOfWeekFixed()",
                    Line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge905.DayOfWeekFixed();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge905",
                    File: "Batch3\\BridgeIssues\\0900\\N905.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge906", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge906)],
        statics: {
            TestIfAsyncMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge906).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge906, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestIfAsyncMethod()",
                    Line: "16"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge906.TestIfAsyncMethod();
            },
            TestIfElseAsyncMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge906).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge906, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestIfElseAsyncMethod()",
                    Line: "40"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge906.TestIfElseAsyncMethod();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge906",
                    File: "Batch3\\BridgeIssues\\0900\\N906.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge907", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge907)],
        statics: {
            TestStringSpitWithNullParameterFixed: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge907).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge907, 6, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestStringSpitWithNullParameterFixed()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge907.TestStringSpitWithNullParameterFixed();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge907",
                    File: "Batch3\\BridgeIssues\\0900\\N907.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge912", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge912)],
        statics: {
            TestAsyncMethodInBlock: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge912).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge912, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAsyncMethodInBlock()",
                    Line: "17"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge912.TestAsyncMethodInBlock();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge912",
                    File: "Batch3\\BridgeIssues\\0900\\N912.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge913", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge913)],
        statics: {
            TestNullableDateTimeGreaterThanWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge913).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge913, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNullableDateTimeGreaterThanWorks()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge913.TestNullableDateTimeGreaterThanWorks();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge913",
                    File: "Batch3\\BridgeIssues\\0900\\N913.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge918", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge918)],
        statics: {
            TestDynamicAsyncResult: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge918).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge918, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDynamicAsyncResult()",
                    Line: "17"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge918.TestDynamicAsyncResult();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge918",
                    File: "Batch3\\BridgeIssues\\0900\\N918.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge922", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge922)],
        statics: {
            TestLinqDecimal: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge922).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge922, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestLinqDecimal()",
                    Line: "11"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge922.TestLinqDecimal();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge922",
                    File: "Batch3\\BridgeIssues\\0900\\N922.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge928", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge928)],
        statics: {
            TestAsyncMethod: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge928).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge928, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAsyncMethod()",
                    Line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge928.TestAsyncMethod();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge928",
                    File: "Batch3\\BridgeIssues\\0900\\N928.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge929", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge929)],
        statics: {
            TestAsyncException: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge929).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge929, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAsyncException()",
                    Line: "14"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge929.TestAsyncException();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge929",
                    File: "Batch3\\BridgeIssues\\0900\\N929.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge930", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge930)],
        statics: {
            TestAsyncException: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge930).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge930, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestAsyncException()",
                    Line: "31"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge930.TestAsyncException();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge930",
                    File: "Batch3\\BridgeIssues\\0900\\N930.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge933", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge933)],
        statics: {
            TestBooleanInIfStatement: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge933).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge933, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestBooleanInIfStatement()",
                    Line: "15"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge933.TestBooleanInIfStatement();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge933",
                    File: "Batch3\\BridgeIssues\\0900\\N933.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge952", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge952)],
        statics: {
            TestDoubleMinValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge952).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge952, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDoubleMinValue()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge952.TestDoubleMinValue();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge952",
                    File: "Batch3\\BridgeIssues\\0900\\N952.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge968", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge968)],
        statics: {
            TestDecimalDoesNotParseIncorrectValue: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge968).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge968, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDecimalDoesNotParseIncorrectValue()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge968.TestDecimalDoesNotParseIncorrectValue();
            },
            TestDecimalParsesCorrectValues: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge968).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge968, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestDecimalParsesCorrectValues()",
                    Line: "19"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge968.TestDecimalParsesCorrectValues();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge968",
                    File: "Batch3\\BridgeIssues\\0900\\N968.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge975", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge975)],
        statics: {
            TestCastToLongWorksForBigNumberInIE: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge975).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge975, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestCastToLongWorksForBigNumberInIE()",
                    Line: "10"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge975.TestCastToLongWorksForBigNumberInIE();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge975",
                    File: "Batch3\\BridgeIssues\\0900\\N975.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge989", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge989)],
        statics: {
            DateTimeToISOStringWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge989).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge989, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "DateTimeToISOStringWorks()",
                    Line: "12"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge989.DateTimeToISOStringWorks();
            },
            DateToISOStringWorks: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge989).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge989, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "DateToISOStringWorks()",
                    Line: "27"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge989.DateToISOStringWorks();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge989",
                    File: "Batch3\\BridgeIssues\\0900\\N989.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge991", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge991)],
        statics: {
            TestMultiplyAssignment: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge991).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge991, 14, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestMultiplyAssignment()",
                    Line: "17"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge991.TestMultiplyAssignment();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge991",
                    File: "Batch3\\BridgeIssues\\0900\\N991.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge997", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge997)],
        statics: {
            TestConvertAllForIntList: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge997).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge997, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestConvertAllForIntList()",
                    Line: "13"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge997.TestConvertAllForIntList();
            },
            TestConvertAllForNullConverter: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge997).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge997, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestConvertAllForNullConverter()",
                    Line: "21"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge997.TestConvertAllForNullConverter();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge997",
                    File: "Batch3\\BridgeIssues\\0900\\N997.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge999", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge999)],
        statics: {
            TestNestedLambdasToLifting: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge999).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge999, 12, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNestedLambdasToLifting()",
                    Line: "14"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge999.TestNestedLambdasToLifting();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge999",
                    File: "Batch3\\BridgeIssues\\0900\\N999.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge999_1", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge999_1)],
        statics: {
            TestNestedLambdasToLiftingInForeach: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.Bridge999_1).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.Bridge999_1, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestNestedLambdasToLiftingInForeach()",
                    Line: "66"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.Bridge999_1.TestNestedLambdasToLiftingInForeach();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.Bridge999_1",
                    File: "Batch3\\BridgeIssues\\0900\\N999.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N1122)],
        statics: {
            TestClippingInDefaultOverflowMode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N1122).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestClippingInDefaultOverflowMode()",
                    Line: "20"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.TestClippingInDefaultOverflowMode();
            },
            TestIntegerDivisionInDefaultMode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N1122).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestIntegerDivisionInDefaultMode()",
                    Line: "38"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.TestIntegerDivisionInDefaultMode();
            },
            TestInfinityCastDefaultOverflowMode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N1122).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122, 16, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestInfinityCastDefaultOverflowMode()",
                    Line: "56"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.TestInfinityCastDefaultOverflowMode();
            },
            TestInfinityCastWithNullable1DefaultOverflowMode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N1122).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122, 16, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestInfinityCastWithNullable1DefaultOverflowMode()",
                    Line: "104"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.TestInfinityCastWithNullable1DefaultOverflowMode();
            },
            TestInfinityCastWithNullable2DefaultOverflowMode: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N1122).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N1122, 16, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestInfinityCastWithNullable2DefaultOverflowMode()",
                    Line: "152"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.N1122.TestInfinityCastWithNullable2DefaultOverflowMode();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.N1122",
                    File: "Batch3\\BridgeIssues\\1100\\N1122.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N2460", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N2460)],
        statics: {
            TestSequenceInheritance: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.N2460).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.N2460, void 0, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "TestSequenceInheritance()",
                    Line: "20"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.N2460.TestSequenceInheritance();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.N2460",
                    File: "Batch3\\BridgeIssues\\2400\\N2460.cs"
                } );
            }
            return this.context;
        }
    });

    Bridge.define("Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues", {
        inherits: [Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues)],
        statics: {
            N169: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N169()",
                    Line: "520"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N169();
            },
            N240: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N240()",
                    Line: "533"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N240();
            },
            N264: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N264()",
                    Line: "544"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N264();
            },
            N266: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N266()",
                    Line: "555"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N266();
            },
            N272: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N272()",
                    Line: "563"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N272();
            },
            N273: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N273()",
                    Line: "573"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N273();
            },
            N277: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N277()",
                    Line: "593"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N277();
            },
            N294: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N294()",
                    Line: "600"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N294();
            },
            N304: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N304()",
                    Line: "610"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N304();
            },
            N305: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N305()",
                    Line: "624"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N305();
            },
            N306: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N306()",
                    Line: "639"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N306();
            },
            N329: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N329()",
                    Line: "655"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N329();
            },
            N335: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N335()",
                    Line: "670"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N335();
            },
            N336: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N336()",
                    Line: "678"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N336();
            },
            N337: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N337()",
                    Line: "691"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N337();
            },
            N338: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N338()",
                    Line: "706"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N338();
            },
            N339: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N339()",
                    Line: "717"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N339();
            },
            N340: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 6, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N340()",
                    Line: "727"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N340();
            },
            N341: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 4, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N341()",
                    Line: "743"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N341();
            },
            N342: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N342()",
                    Line: "786"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N342();
            },
            N349: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 5, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N349()",
                    Line: "801"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N349();
            },
            N377: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 6, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N377()",
                    Line: "817"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N377();
            },
            N383: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N383()",
                    Line: "837"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N383();
            },
            N393: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N393()",
                    Line: "858"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N393();
            },
            N395: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N395()",
                    Line: "877"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N395();
            },
            N406: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N406()",
                    Line: "902"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N406();
            },
            N407: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N407()",
                    Line: "950"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N407();
            },
            N409: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N409()",
                    Line: "970"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N409();
            },
            N410: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 38, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N410()",
                    Line: "997"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N410();
            },
            N418: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N418()",
                    Line: "1111"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N418();
            },
            N422: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N422()",
                    Line: "1122"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N422();
            },
            N428: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N428()",
                    Line: "1135"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N428();
            },
            N435: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N435()",
                    Line: "1145"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N435();
            },
            N436: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 3, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N436()",
                    Line: "1154"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N436();
            },
            N438: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N438()",
                    Line: "1168"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N438();
            },
            N439: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N439()",
                    Line: "1177"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N439();
            },
            N442: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 2, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N442()",
                    Line: "1195"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N442();
            },
            N460: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N460()",
                    Line: "1206"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N460();
            },
            N467: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N467()",
                    Line: "1216"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N467();
            },
            N469: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N469()",
                    Line: "1233"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N469();
            },
            N470: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 16, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N470()",
                    Line: "1253"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N470();
            },
            N499: function (assert) {
                var t = Bridge.Test.Runtime.TestFixture$1(Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues).BeforeTest(false, assert, Bridge.Test.Runtime.BridgeClientTestBatch3Runner.TestBridgeIssues, 1, Bridge.merge(new Bridge.Test.Runtime.TestContext(), {
                    Method: "N499()",
                    Line: "1320"
                } ));
                Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues.N499();
            }
        },
        context: null,
        GetContext: function () {
            if (this.context == null) {
                this.context = Bridge.merge(new Bridge.Test.Runtime.FixtureContext(), {
                    Project: "Batch3",
                    ClassName: "Bridge.ClientTest.Batch3.BridgeIssues.TestBridgeIssues",
                    File: "Batch3\\BridgeIssues\\TestBridgeIssues.cs"
                } );
            }
            return this.context;
        }
    });
});
