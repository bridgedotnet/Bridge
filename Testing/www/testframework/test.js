/* global Bridge */

"use strict";

/* global Bridge */

"use strict";

Bridge.define('Bridge.Test.Assert', {
    statics: {
        assert: null,
        areEqual: function (actual, expected) {
            Bridge.Test.Assert.assert.deepEqual(actual, expected);
        },
        areEqual$1: function (actual, expected, description) {
            Bridge.Test.Assert.assert.deepEqual(actual, expected, description);
        },
        areStrictEqual: function (actual, expected) {
            Bridge.Test.Assert.assert.strictEqual(actual, expected);
        },
        areStrictEqual$1: function (actual, expected, description) {
            Bridge.Test.Assert.assert.strictEqual(actual, expected, description);
        },
        areNotEqual: function (actual, expected) {
            Bridge.Test.Assert.assert.notDeepEqual(actual, expected);
        },
        areNotEqual$1: function (actual, expected, description) {
            Bridge.Test.Assert.assert.notDeepEqual(actual, expected, description);
        },
        $true: function (condition) {
            Bridge.Test.Assert.assert.ok(condition);
        },
        true$1: function (condition, message) {
            Bridge.Test.Assert.assert.ok(condition, message);
        },
        $false: function (condition) {
            Bridge.Test.Assert.assert.notOk(condition);
        },
        false$1: function (condition, message) {
            Bridge.Test.Assert.assert.notOk(condition, message);
        },
        fail: function () {
            Bridge.Test.Assert.assert.ok(false);
        },
        fail$1: function (message) {
            Bridge.Test.Assert.assert.notOk(true, message);
        },
        $throws: function (block) {
            Bridge.Test.Assert.assert.throws(block, "");
        },
        throws$5: function (block, message) {
            Bridge.Test.Assert.assert.throws(block, message);
        },
        throws$3: function (block, expected) {
            Bridge.Test.Assert.assert.throws(block, expected);
        },
        throws$4: function (block, expected, message) {
            Bridge.Test.Assert.assert.throws(block, expected, message);
        },
        throws$1: function (block, expected) {
            Bridge.Test.Assert.assert.throws(block, expected);
        },
        throws$2: function (block, expected, message) {
            Bridge.Test.Assert.assert.throws(block, expected, message);
        },
        $null: function (anObject) {
            Bridge.Test.Assert.assert.ok(anObject === null);
        },
        null$1: function (anObject, message) {
            Bridge.Test.Assert.assert.ok(anObject === null, message);
        },
        notNull: function (anObject) {
            Bridge.Test.Assert.assert.notOk(anObject === null);
        },
        notNull$1: function (anObject, message) {
            Bridge.Test.Assert.assert.notOk(anObject === null, message);
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests', {
    statics: {
        config: {
            init: function () {
                Bridge.ready(this.run);
            }
        },
        run: function () {
            QUnit.module("Collections");
            QUnit.test("Array - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.typePropertiesAreCorrect);
            QUnit.test("Array - LengthWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.lengthWorks);
            QUnit.test("Array - RankIsOne", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.rankIsOne);
            QUnit.test("Array - GetLengthWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.getLengthWorks);
            QUnit.test("Array - GetLowerBound", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.getLowerBound);
            QUnit.test("Array - GetUpperBoundWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.getUpperBoundWorks);
            QUnit.test("Array - GettingValueByIndexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.gettingValueByIndexWorks);
            QUnit.test("Array - GetValueWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.getValueWorks);
            QUnit.test("Array - SettingValueByIndexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.settingValueByIndexWorks);
            QUnit.test("Array - SetValueWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.setValueWorks);
            QUnit.test("Array - ForeachWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.foreachWorks);
            QUnit.test("Array - CloneWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.cloneWorks);
            QUnit.test("Array - ConcatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.concatWorks);
            QUnit.test("Array - ContainsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.containsWorks);
            QUnit.test("Array - ContainsUsesEqualsMethod", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.containsUsesEqualsMethod);
            QUnit.test("Array - AllWithArrayItemFilterCallbackWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.allWithArrayItemFilterCallbackWorks);
            QUnit.test("Array - SliceWithoutEndWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.sliceWithoutEndWorks);
            QUnit.test("Array - ForeachWithArrayItemCallbackWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.foreachWithArrayItemCallbackWorks);
            QUnit.test("Array - ForeachWithArrayCallbackWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.foreachWithArrayCallbackWorks);
            QUnit.test("Array - IndexOfWithoutStartIndexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.indexOfWithoutStartIndexWorks);
            QUnit.test("Array - IndexOfWithoutStartIndexUsesEqualsMethod", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.indexOfWithoutStartIndexUsesEqualsMethod);
            QUnit.test("Array - IndexOfWithStartIndexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.indexOfWithStartIndexWorks);
            QUnit.test("Array - JoinWithoutDelimiterWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.joinWithoutDelimiterWorks);
            QUnit.test("Array - ReverseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.reverseWorks);
            QUnit.test("Array - AnyWithArrayItemFilterCallbackWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.anyWithArrayItemFilterCallbackWorks);
            QUnit.test("Array - BinarySearch1Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.binarySearch1Works);
            QUnit.test("Array - BinarySearch2Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.binarySearch2Works);
            QUnit.test("Array - BinarySearch3Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.binarySearch3Works);
            QUnit.test("Array - BinarySearch4Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.binarySearch4Works);
            QUnit.test("Array - BinarySearchExceptionsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.binarySearchExceptionsWorks);
            QUnit.test("Array - SortWithDefaultCompareWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.sortWithDefaultCompareWorks);
            QUnit.test("Array - Sort1Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.sort1Works);
            QUnit.test("Array - Sort2Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.sort2Works);
            QUnit.test("Array - Sort3Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.sort3Works);
            QUnit.test("Array - Sort4Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.sort4Works);
            QUnit.test("Array - SortExceptionsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.sortExceptionsWorks);
            QUnit.test("Array - ForeachWhenCastToIListWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.foreachWhenCastToIListWorks);
            QUnit.test("Array - ICollectionCountWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.iCollectionCountWorks);
            QUnit.test("Array - ICollectionAddWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.iCollectionAddWorks);
            QUnit.test("Array - ICollectionClearWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.iCollectionClearWorks);
            QUnit.test("Array - ICollectionContainsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.iCollectionContainsWorks);
            QUnit.test("Array - ICollectionContainsUsesEqualsMethod", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.iCollectionContainsUsesEqualsMethod);
            QUnit.test("Array - ICollectionRemoveWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.iCollectionRemoveWorks);
            QUnit.test("Array - IListIndexingWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.iListIndexingWorks);
            QUnit.test("Array - IListIndexOfWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.iListIndexOfWorks);
            QUnit.test("Array - IListIndexOfUsesEqualsMethod", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.iListIndexOfUsesEqualsMethod);
            QUnit.test("Array - IListInsertWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.iListInsertWorks);
            QUnit.test("Array - IListRemoveAtWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.iListRemoveAtWorks);
            QUnit.test("GenericDictionary - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.typePropertiesAreCorrect);
            QUnit.test("GenericDictionary - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.defaultConstructorWorks);
            QUnit.test("GenericDictionary - CapacityConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.capacityConstructorWorks);
            QUnit.test("GenericDictionary - CapacityAndEqualityComparerWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.capacityAndEqualityComparerWorks);
            QUnit.test("GenericDictionary - EqualityComparerOnlyConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.equalityComparerOnlyConstructorWorks);
            QUnit.test("GenericDictionary - CountWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.countWorks);
            QUnit.test("GenericDictionary - KeysWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.keysWorks);
            QUnit.test("GenericDictionary - ValuesWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.valuesWorks);
            QUnit.test("GenericDictionary - IndexerGetterWorksForExistingItems", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.indexerGetterWorksForExistingItems);
            QUnit.test("GenericDictionary - IndexerSetterWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.indexerSetterWorks);
            QUnit.test("GenericDictionary - IndexerGetterThrowsForNonExistingItems", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.indexerGetterThrowsForNonExistingItems);
            QUnit.test("GenericDictionary - AddWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.addWorks);
            QUnit.test("GenericDictionary - AddThrowsIfItemAlreadyExists", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.addThrowsIfItemAlreadyExists);
            QUnit.test("GenericDictionary - ClearWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.clearWorks);
            QUnit.test("GenericDictionary - ContainsKeyWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.containsKeyWorks);
            QUnit.test("GenericDictionary - EnumeratingWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.enumeratingWorks);
            QUnit.test("GenericDictionary - RemoveWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.removeWorks);
            QUnit.test("GenericDictionary - TryGetValueWithIntKeysWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.tryGetValueWithIntKeysWorks);
            QUnit.test("GenericDictionary - TryGetValueWithObjectKeysWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.tryGetValueWithObjectKeysWorks);
            QUnit.test("GenericDictionary - CanUseCustomComparer", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.canUseCustomComparer);
            QUnit.test("ICollection - ArrayImplementsICollection", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.arrayImplementsICollection);
            QUnit.test("ICollection - CustomClassThatShouldImplementICollectionDoesSo", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.customClassThatShouldImplementICollectionDoesSo);
            QUnit.test("ICollection - ArrayCastToICollectionCountWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.arrayCastToICollectionCountWorks);
            QUnit.test("ICollection - ClassImplementingICollectionCountWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.classImplementingICollectionCountWorks);
            QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionCountWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.classImplementingICollectionCastToICollectionCountWorks);
            QUnit.test("ICollection - ClassImplementingICollectionAddWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.classImplementingICollectionAddWorks);
            QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionAddWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.classImplementingICollectionCastToICollectionAddWorks);
            QUnit.test("ICollection - ClassImplementingICollectionClearWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.classImplementingICollectionClearWorks);
            QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionClearWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.classImplementingICollectionCastToICollectionClearWorks);
            QUnit.test("ICollection - ArrayCastToICollectionContainsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.arrayCastToICollectionContainsWorks);
            QUnit.test("ICollection - ClassImplementingICollectionContainsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.classImplementingICollectionContainsWorks);
            QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionContainsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.classImplementingICollectionCastToICollectionContainsWorks);
            QUnit.test("ICollection - ClassImplementingICollectionRemoveWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.classImplementingICollectionRemoveWorks);
            QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionRemoveWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.classImplementingICollectionCastToICollectionRemoveWorks);
            QUnit.test("IDictionary - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.typePropertiesAreCorrect);
            QUnit.test("IDictionary - ClassImplementsInterfaces", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.classImplementsInterfaces);
            QUnit.test("IDictionary - CountWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.countWorks);
            QUnit.test("IDictionary - KeysWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.keysWorks);
            QUnit.test("IDictionary - GetItemWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.getItemWorks);
            QUnit.test("IDictionary - ValuesWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.valuesWorks);
            QUnit.test("IDictionary - ContainsKeyWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.containsKeyWorks);
            QUnit.test("IDictionary - TryGetValueWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.tryGetValueWorks);
            QUnit.test("IDictionary - AddWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.addWorks);
            QUnit.test("IDictionary - ClearWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.clearWorks);
            QUnit.test("IDictionary - RemoveWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.removeWorks);
            QUnit.test("IDictionary - SetItemWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.setItemWorks);
            QUnit.test("IEnumerable - ArrayImplementsIEnumerable", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.arrayImplementsIEnumerable);
            QUnit.test("IEnumerable - CustomClassThatShouldImplementIEnumerableDoesSo", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.customClassThatShouldImplementIEnumerableDoesSo);
            QUnit.test("IEnumerable - ArrayGetEnumeratorMethodWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.arrayGetEnumeratorMethodWorks);
            QUnit.test("IEnumerable - ArrayCastToIEnumerableCanBeEnumerated", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.arrayCastToIEnumerableCanBeEnumerated);
            QUnit.test("IEnumerable - ClassImplementingIEnumerableCanBeEnumerated", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.classImplementingIEnumerableCanBeEnumerated);
            QUnit.test("IEnumerable - ClassImplementingIEnumerableCastToIEnumerableCanBeEnumerated", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.classImplementingIEnumerableCastToIEnumerableCanBeEnumerated);
            QUnit.test("IList - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.typePropertiesAreCorrect);
            QUnit.test("IList - ArrayImplementsIList", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.arrayImplementsIList);
            QUnit.test("IList - CustomClassThatShouldImplementIListDoesSo", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.customClassThatShouldImplementIListDoesSo);
            QUnit.test("IList - ArrayCastToIListGetItemWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.arrayCastToIListGetItemWorks);
            QUnit.test("IList - ClassImplementingIListGetItemWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.classImplementingIListGetItemWorks);
            QUnit.test("IList - ClassImplementingIListCastToIListGetItemWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.classImplementingIListCastToIListGetItemWorks);
            QUnit.test("IList - ArrayCastToIListSetItemWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.arrayCastToIListSetItemWorks);
            QUnit.test("IList - ClassImplementingIListSetItemWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.classImplementingIListSetItemWorks);
            QUnit.test("IList - ClassImplementingIListCastToIListSetItemWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.classImplementingIListCastToIListSetItemWorks);
            QUnit.test("IList - ArrayCastToIListIndexOfWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.arrayCastToIListIndexOfWorks);
            QUnit.test("IList - ClassImplementingIListIndexOfWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.classImplementingIListIndexOfWorks);
            QUnit.test("IList - ClassImplementingIListCastToIListIndexOfWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.classImplementingIListCastToIListIndexOfWorks);
            QUnit.test("IList - ClassImplementingIListInsertWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.classImplementingIListInsertWorks);
            QUnit.test("IList - ClassImplementingIListCastToIListInsertWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.classImplementingIListCastToIListInsertWorks);
            QUnit.test("IList - ClassImplementingIListRemoveAtWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.classImplementingIListRemoveAtWorks);
            QUnit.test("IList - ClassImplementingIListCastToIListRemoveAtWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.classImplementingIListCastToIListRemoveAtWorks);
            QUnit.test("IteratorBlock - TypeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.typeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable);
            QUnit.test("IteratorBlock - EnumeratingIEnumeratorIteratorToEndWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.enumeratingIEnumeratorIteratorToEndWorks);
            QUnit.test("IteratorBlock - PrematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.prematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks);
            QUnit.test("IteratorBlock - ExceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks Exception thrown not caught", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.exceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks);
            QUnit.test("IteratorBlock - TypeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.typeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface);
            QUnit.test("IteratorBlock - EnumeratingIEnumerableIteratorToEndWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.enumeratingIEnumerableIteratorToEndWorks);
            QUnit.test("IteratorBlock - PrematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.prematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks);
            QUnit.test("IteratorBlock - ExceptionInIEnumerableIteratorBodyExecutesFinallyBlocks exception thrown not caught", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.exceptionInIEnumerableIteratorBodyExecutesFinallyBlocks);
            QUnit.test("IteratorBlock - EnumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.enumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters);
            QUnit.test("IteratorBlock - DifferentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.differentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals);
            QUnit.test("List - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.typePropertiesAreCorrect);
            QUnit.test("List - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.defaultConstructorWorks);
            QUnit.test("List - ConstructorWithCapacityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.constructorWithCapacityWorks);
            QUnit.test("List - ConstructingFromArrayWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.constructingFromArrayWorks);
            QUnit.test("List - ConstructingFromListWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.constructingFromListWorks);
            QUnit.test("List - ConstructingFromIEnumerableWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.constructingFromIEnumerableWorks);
            QUnit.test("List - CountWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.countWorks);
            QUnit.test("List - IndexingWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.indexingWorks);
            QUnit.test("List - ForeachWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.foreachWorks);
            QUnit.test("List - GetEnumeratorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.getEnumeratorWorks);
            QUnit.test("List - AddWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.addWorks);
            QUnit.test("List - AddRangeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.addRangeWorks);
            QUnit.test("List - BinarySearch1Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.binarySearch1Works);
            QUnit.test("List - BinarySearch2Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.binarySearch2Works);
            QUnit.test("List - BinarySearch3Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.binarySearch3Works);
            QUnit.test("List - BinarySearch4Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.binarySearch4Works);
            QUnit.test("List - ClearWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.clearWorks);
            QUnit.test("List - ContainsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.containsWorks);
            QUnit.test("List - ContainsUsesEqualsMethod", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.containsUsesEqualsMethod);
            QUnit.test("List - SliceWithoutEndWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.sliceWithoutEndWorks);
            QUnit.test("List - SliceWithEndWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.sliceWithEndWorks);
            QUnit.test("List - ForeachWithListItemCallbackWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.foreachWithListItemCallbackWorks);
            QUnit.test("List - ForeachWithListCallbackWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.foreachWithListCallbackWorks);
            QUnit.test("List - IndexOfWithoutStartIndexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.indexOfWithoutStartIndexWorks);
            QUnit.test("List - IndexOfWithoutStartIndexUsesEqualsMethod", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.indexOfWithoutStartIndexUsesEqualsMethod);
            QUnit.test("List - IndexOfWithStartIndexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.indexOfWithStartIndexWorks);
            QUnit.test("List - IndexOfWithStartIndexUsesEqualsMethod", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.indexOfWithStartIndexUsesEqualsMethod);
            QUnit.test("List - InsertWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.insertWorks);
            QUnit.test("List - InsertRangeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.insertRangeWorks);
            QUnit.test("List - JoinWithoutDelimiterWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.joinWithoutDelimiterWorks);
            QUnit.test("List - JoinWithDelimiterWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.joinWithDelimiterWorks);
            QUnit.test("List - RemoveWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.removeWorks);
            QUnit.test("List - RemoveReturnsFalseIfTheElementWasNotFound", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.removeReturnsFalseIfTheElementWasNotFound);
            QUnit.test("List - RemoveCanRemoveNullItem", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.removeCanRemoveNullItem);
            QUnit.test("List - RemoveUsesEqualsMethod", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.removeUsesEqualsMethod);
            QUnit.test("List - RemoveAtWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.removeAtWorks);
            QUnit.test("List - RemoveRangeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.removeRangeWorks);
            QUnit.test("List - ReverseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.reverseWorks);
            QUnit.test("List - SortWithDefaultCompareWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.sortWithDefaultCompareWorks);
            QUnit.test("List - SortWithCompareCallbackWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.sortWithCompareCallbackWorks);
            QUnit.test("List - SortWithIComparerWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.sortWithIComparerWorks);
            QUnit.test("List - ForeachWhenCastToIEnumerableWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.foreachWhenCastToIEnumerableWorks);
            QUnit.test("List - IEnumerableGetEnumeratorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.iEnumerableGetEnumeratorWorks);
            QUnit.test("List - ICollectionCountWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.iCollectionCountWorks);
            QUnit.test("List - ICollectionAddWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.iCollectionAddWorks);
            QUnit.test("List - ICollectionClearWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.iCollectionClearWorks);
            QUnit.test("List - ICollectionContainsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.iCollectionContainsWorks);
            QUnit.test("List - ICollectionContainsUsesEqualsMethod", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.iCollectionContainsUsesEqualsMethod);
            QUnit.test("List - ICollectionRemoveWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.iCollectionRemoveWorks);
            QUnit.test("List - ICollectionRemoveCanRemoveNullItem", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.iCollectionRemoveCanRemoveNullItem);
            QUnit.test("List - ICollectionRemoveUsesEqualsMethod", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.iCollectionRemoveUsesEqualsMethod);
            QUnit.test("List - IListIndexingWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.iListIndexingWorks);
            QUnit.test("List - IListIndexOfWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.iListIndexOfWorks);
            QUnit.test("List - IListIndexOfUsesEqualsMethod", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.iListIndexOfUsesEqualsMethod);
            QUnit.test("List - IListInsertWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.iListInsertWorks);
            QUnit.test("List - IListRemoveAtWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.iListRemoveAtWorks);
            QUnit.test("List - ToArrayWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.toArrayWorks);
            QUnit.test("MultidimArray - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.typePropertiesAreCorrect);
            QUnit.test("MultidimArray - LengthWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.lengthWorks);
            QUnit.test("MultidimArray - GetValueWorksForUninitializedElement", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.getValueWorksForUninitializedElement);
            QUnit.test("MultidimArray - GetValueByIndexWorksForUninitializedElement", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.getValueByIndexWorksForUninitializedElement);
            QUnit.test("MultidimArray - SettingValueByIndexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.settingValueByIndexWorks);
            QUnit.test("MultidimArray - SetValueWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.setValueWorks);
            QUnit.test("MultidimArray - GetValueWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.getValueWorks);
            QUnit.test("MultidimArray - GettingValueByIndexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.gettingValueByIndexWorks);
            QUnit.test("MultidimArray - RankWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.rankWorks);
            QUnit.test("MultidimArray - GetValueWithIndexOutOfRangeThrowsAnException", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.getValueWithIndexOutOfRangeThrowsAnException);
            QUnit.test("MultidimArray - SetValueWithIndexOutOfRangeThrowsAnException", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.setValueWithIndexOutOfRangeThrowsAnException);
            QUnit.module("Comparer");
            QUnit.test("TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests.typePropertiesAreCorrect);
            QUnit.test("DefaultComparerCanOrderNumbers", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests.defaultComparerCanOrderNumbers);
            QUnit.test("DefaultComparerCanOrderNullValues", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests.defaultComparerCanOrderNullValues);
            QUnit.test("DefaultComparerUsesCompareMethodIfClassImplementsIComparable", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests.defaultComparerUsesCompareMethodIfClassImplementsIComparable);
            QUnit.test("CreateWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests.createWorks);
            QUnit.module("Date and time");
            QUnit.test("DateTimeFormatInfo - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests.typePropertiesAreCorrect);
            QUnit.test("DateTimeFormatInfo - GetFormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests.getFormatWorks);
            QUnit.test("DateTimeFormatInfo - InvariantWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests.invariantWorks);
            QUnit.test("DateTime - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.typePropertiesAreCorrect);
            QUnit.test("DateTime - DefaultConstructorReturnsTodaysDate", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.defaultConstructorReturnsTodaysDate);
            QUnit.test("DateTime - CreatingInstanceReturnsTodaysDate", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.creatingInstanceReturnsTodaysDate);
            QUnit.test("DateTime - MillisecondSinceEpochConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.millisecondSinceEpochConstructorWorks);
            QUnit.test("DateTime - StringConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.stringConstructorWorks);
            QUnit.test("DateTime - YMDConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.yMDConstructorWorks);
            QUnit.test("DateTime - YMDHConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.yMDHConstructorWorks);
            QUnit.test("DateTime - YMDHNConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.yMDHNConstructorWorks);
            QUnit.test("DateTime - YMDHNSConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.yMDHNSConstructorWorks);
            QUnit.test("DateTime - YMDHNSUConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.yMDHNSUConstructorWorks);
            QUnit.test("DateTime - NowWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.nowWorks);
            QUnit.test("DateTime - UTCNowWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.uTCNowWorks);
            QUnit.test("DateTime - ToUniversalWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.toUniversalWorks);
            QUnit.test("DateTime - ToLocalWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.toLocalWorks);
            QUnit.test("DateTime - TodayWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.todayWorks);
            QUnit.test("DateTime - FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.formatWorks);
            QUnit.test("DateTime - LocaleFormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.localeFormatWorks);
            QUnit.test("DateTime - GetFullYearWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getFullYearWorks);
            QUnit.test("DateTime - GetMonthWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getMonthWorks);
            QUnit.test("DateTime - GetDateWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getDateWorks);
            QUnit.test("DateTime - GetHoursWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getHoursWorks);
            QUnit.test("DateTime - GetMinutesWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getMinutesWorks);
            QUnit.test("DateTime - GetSecondsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getSecondsWorks);
            QUnit.test("DateTime - GetMillisecondsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getMillisecondsWorks);
            QUnit.test("DateTime - GetDayWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getDayWorks);
            QUnit.test("DateTime - GetTimeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getTimeWorks);
            QUnit.test("DateTime - ValueOfWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.valueOfWorks);
            QUnit.test("DateTime - GetTimezoneOffsetWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getTimezoneOffsetWorks);
            QUnit.test("DateTime - GetUTCFullYearWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getUTCFullYearWorks);
            QUnit.test("DateTime - GetUtcMonthWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getUtcMonthWorks);
            QUnit.test("DateTime - GetUTCDateWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getUTCDateWorks);
            QUnit.test("DateTime - GetUTCHoursWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getUTCHoursWorks);
            QUnit.test("DateTime - GetUTCMinutesWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getUTCMinutesWorks);
            QUnit.test("DateTime - GetUTCSecondsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getUTCSecondsWorks);
            QUnit.test("DateTime - GetUTCMillisecondsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getUTCMillisecondsWorks);
            QUnit.test("DateTime - GetUTCDayWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getUTCDayWorks);
            QUnit.test("DateTime - ParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.parseWorks);
            QUnit.test("DateTime - ParseExactWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.parseExactWorks);
            QUnit.test("DateTime - ParseExactWithCultureWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.parseExactWithCultureWorks);
            QUnit.test("DateTime - ParseExactUTCWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.parseExactUTCWorks);
            QUnit.test("DateTime - ParseExactUTCWithCultureWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.parseExactUTCWithCultureWorks);
            QUnit.test("DateTime - ToDateStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.toDateStringWorks);
            QUnit.test("DateTime - ToTimeStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.toTimeStringWorks);
            QUnit.test("DateTime - ToUTCStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.toUTCStringWorks);
            QUnit.test("DateTime - ToLocaleDateStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.toLocaleDateStringWorks);
            QUnit.test("DateTime - ToLocaleTimeStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.toLocaleTimeStringWorks);
            QUnit.test("DateTime - SubtractingDatesWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.subtractingDatesWorks);
            QUnit.test("DateTime - SubtractMethodReturningTimeSpanWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.subtractMethodReturningTimeSpanWorks);
            QUnit.test("DateTime - DateEqualityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.dateEqualityWorks);
            QUnit.test("DateTime - DateInequalityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.dateInequalityWorks);
            QUnit.test("DateTime - DateLessThanWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.dateLessThanWorks);
            QUnit.test("DateTime - DateLessEqualWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.dateLessEqualWorks);
            QUnit.test("DateTime - DateGreaterThanWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.dateGreaterThanWorks);
            QUnit.test("DateTime - DateGreaterEqualWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.dateGreaterEqualWorks);
            QUnit.test("DateTime - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getHashCodeWorks);
            QUnit.test("DateTime - EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.equalsWorks);
            QUnit.test("DateTime - DateTimeEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.dateTimeEqualsWorks);
            QUnit.test("DateTime - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.compareToWorks);
            QUnit.test("TimeSpan - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.typePropertiesAreCorrect);
            QUnit.test("TimeSpan - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.defaultConstructorWorks);
            QUnit.test("TimeSpan - DefaultValueWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.defaultValueWorks);
            QUnit.test("TimeSpan - ZeroWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.zeroWorks);
            QUnit.test("TimeSpan - CreatingInstanceReturnsTimeSpanWithZeroValue", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.creatingInstanceReturnsTimeSpanWithZeroValue);
            QUnit.test("TimeSpan - ParameterConstructorsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.parameterConstructorsWorks);
            QUnit.test("TimeSpan - FactoryMethodsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.factoryMethodsWork);
            QUnit.test("TimeSpan - PropertiesWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.propertiesWork);
            QUnit.test("TimeSpan - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.compareToWorks);
            QUnit.test("TimeSpan - CompareWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.compareWorks);
            QUnit.test("TimeSpan - StaticEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.staticEqualsWorks);
            QUnit.test("TimeSpan - EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.equalsWorks);
            QUnit.test("TimeSpan - ToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.toStringWorks);
            QUnit.test("TimeSpan - AddWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.addWorks);
            QUnit.test("TimeSpan - SubtractWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.subtractWorks);
            QUnit.test("TimeSpan - DurationWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.durationWorks);
            QUnit.test("TimeSpan - NegateWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.negateWorks);
            QUnit.test("TimeSpan - ComparisonOperatorsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.comparisonOperatorsWork);
            QUnit.test("TimeSpan - AdditionOperatorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.additionOperatorWorks);
            QUnit.test("TimeSpan - SubtractionOperatorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.subtractionOperatorWorks);
            QUnit.test("TimeSpan - UnaryPlusWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.unaryPlusWorks);
            QUnit.test("TimeSpan - UnaryMinusWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.unaryMinusWorks);
            QUnit.module("Decimal Math");
            QUnit.test("TestSubtractOperator", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.testSubtractOperator);
            QUnit.test("TestRemainderOperator", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.testRemainderOperator);
            QUnit.test("TestMultiplyOperator", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.testMultiplyOperator);
            QUnit.test("TestDivideOperator", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.testDivideOperator);
            QUnit.test("TestAddOperator", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.testAddOperator);
            QUnit.test("TestAddMethod", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.testAddMethod);
            QUnit.test("TestDivideMethod", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.testDivideMethod);
            QUnit.test("TestMultiplyMethod", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.testMultiplyMethod);
            QUnit.test("TestRemainderMethod", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.testRemainderMethod);
            QUnit.test("TestSubtractMethod", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.testSubtractMethod);
            QUnit.test("TestCeilingMethod", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.testCeilingMethod);
            QUnit.test("TestFloorMethod", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.testFloorMethod);
            QUnit.module("Enum");
            QUnit.test("Enum - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests.typePropertiesAreCorrect);
            QUnit.test("Enum - FirstValueOfEnumIsZero", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests.firstValueOfEnumIsZero);
            QUnit.test("Enum - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests.getHashCodeWorks);
            QUnit.test("Enum - EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests.equalsWorks);
            QUnit.module("EqualityComparer");
            QUnit.test("TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests.typePropertiesAreCorrect);
            QUnit.test("DefaultComparerCanGetHashCodeOfNumber", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests.defaultComparerCanGetHashCodeOfNumber);
            QUnit.test("DefaultComparerReturnsZeroAsHashCodeForNullAndUndefined", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests.defaultComparerReturnsZeroAsHashCodeForNullAndUndefined);
            QUnit.test("DefaultComparerCanDetermineEquality", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests.defaultComparerCanDetermineEquality);
            QUnit.test("DefaultComparerInvokesOverriddenGetHashCode", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests.defaultComparerInvokesOverriddenGetHashCode);
            QUnit.test("DefaultComparerInvokesOverriddenEquals", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests.defaultComparerInvokesOverriddenEquals);
            QUnit.module("Exceptions");
            QUnit.test("ArgumentException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.typePropertiesAreCorrect);
            QUnit.test("ArgumentException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.defaultConstructorWorks);
            QUnit.test("ArgumentException - ConstructorWithMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.constructorWithMessageWorks);
            QUnit.test("ArgumentException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("ArgumentException - ConstructorWithMessageAndParamNameWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.constructorWithMessageAndParamNameWorks);
            QUnit.test("ArgumentException - ConstructorWithMessageAndParamNameAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.constructorWithMessageAndParamNameAndInnerExceptionWorks);
            QUnit.test("ArgumentNullException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.typePropertiesAreCorrect);
            QUnit.test("ArgumentNullException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.defaultConstructorWorks);
            QUnit.test("ArgumentNullException - ConstructorWithParamNameWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.constructorWithParamNameWorks);
            QUnit.test("ArgumentNullException - ConstructorWithParamNameAndMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.constructorWithParamNameAndMessageWorks);
            QUnit.test("ArgumentNullException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("ArgumentOutOfRangeException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.typePropertiesAreCorrect);
            QUnit.test("ArgumentOutOfRangeException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.defaultConstructorWorks);
            QUnit.test("ArgumentOutOfRangeException - ConstructorWithParamNameWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.constructorWithParamNameWorks);
            QUnit.test("ArgumentOutOfRangeException - ConstructorWithParamNameAndMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.constructorWithParamNameAndMessageWorks);
            QUnit.test("ArgumentOutOfRangeException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("ArgumentOutOfRangeException - ConstructorWithParamNameAndActualValueAndMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.constructorWithParamNameAndActualValueAndMessageWorks);
            QUnit.test("ArgumentOutOfRangeException - RangeErrorIsConvertedToArgumentOutOfRangeException", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.rangeErrorIsConvertedToArgumentOutOfRangeException);
            QUnit.test("ArithmeticException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.typePropertiesAreCorrect);
            QUnit.test("ArithmeticException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.defaultConstructorWorks);
            QUnit.test("ArithmeticException - ConstructorWithMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.constructorWithMessageWorks);
            QUnit.test("ArithmeticException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("DivideByZeroException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.typePropertiesAreCorrect);
            QUnit.test("DivideByZeroException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.defaultConstructorWorks);
            QUnit.test("DivideByZeroException - ConstructorWithMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.constructorWithMessageWorks);
            QUnit.test("DivideByZeroException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("Exception - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.typePropertiesAreCorrect);
            QUnit.test("Exception - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.defaultConstructorWorks);
            QUnit.test("Exception - ConstructorWithMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.constructorWithMessageWorks);
            QUnit.test("Exception - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("Exception - MessagePropertyCanBeOverridden", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.messagePropertyCanBeOverridden);
            QUnit.test("Exception - InnerExceptionPropertyCanBeOverridden", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.innerExceptionPropertyCanBeOverridden);
            QUnit.test("FormatException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.typePropertiesAreCorrect);
            QUnit.test("FormatException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.defaultConstructorWorks);
            QUnit.test("FormatException - ConstructorWithMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.constructorWithMessageWorks);
            QUnit.test("FormatException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("InvalidCastException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.typePropertiesAreCorrect);
            QUnit.test("InvalidCastException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.defaultConstructorWorks);
            QUnit.test("InvalidCastException - ConstructorWithMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.constructorWithMessageWorks);
            QUnit.test("InvalidCastException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("InvalidOperationException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.typePropertiesAreCorrect);
            QUnit.test("InvalidOperationException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.defaultConstructorWorks);
            QUnit.test("InvalidOperationException - ConstructorWithMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.constructorWithMessageWorks);
            QUnit.test("InvalidOperationException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("KeyNotFoundException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.typePropertiesAreCorrect);
            QUnit.test("KeyNotFoundException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.defaultConstructorWorks);
            QUnit.test("KeyNotFoundException - ConstructorWithMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.constructorWithMessageWorks);
            QUnit.test("KeyNotFoundException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("NotImplementedException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.typePropertiesAreCorrect);
            QUnit.test("NotImplementedException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.defaultConstructorWorks);
            QUnit.test("NotImplementedException - ConstructorWithMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.constructorWithMessageWorks);
            QUnit.test("NotImplementedException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("NotSupportedException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.typePropertiesAreCorrect);
            QUnit.test("NotSupportedException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.defaultConstructorWorks);
            QUnit.test("NotSupportedException - ConstructorWithMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.constructorWithMessageWorks);
            QUnit.test("NotSupportedException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("NullReferenceException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.typePropertiesAreCorrect);
            QUnit.test("NullReferenceException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.defaultConstructorWorks);
            QUnit.test("NullReferenceException - ConstructorWithMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.constructorWithMessageWorks);
            QUnit.test("NullReferenceException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("NullReferenceException - AccessingAFieldOnANullObjectCausesANullReferenceException", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.accessingAFieldOnANullObjectCausesANullReferenceException);
            QUnit.test("OverflowException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.typePropertiesAreCorrect);
            QUnit.test("OverflowException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.defaultConstructorWorks);
            QUnit.test("OverflowException - ConstructorWithMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.constructorWithMessageWorks);
            QUnit.test("OverflowException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("RankException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests.typePropertiesAreCorrect);
            QUnit.test("RankException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests.defaultConstructorWorks);
            QUnit.test("RankException - ConstructorWithMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests.constructorWithMessageWorks);
            QUnit.test("Try/Catch/Finally - ThrowingAndCatchingExceptionsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests.throwingAndCatchingExceptionsWorks);
            QUnit.test("Try/Catch/Finally - ExceptionOfWrongTypeIsNotCaught", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests.exceptionOfWrongTypeIsNotCaught);
            QUnit.test("Try/Catch/Finally - CanCatchExceptionAsBaseType", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests.canCatchExceptionAsBaseType);
            QUnit.module("Math");
            QUnit.test("Math - ConstantsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.constantsWork);
            QUnit.test("Math - AbsOfDoubleWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.absOfDoubleWorks);
            QUnit.test("Math - AbsOfIntWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.absOfIntWorks);
            QUnit.test("Math - AbsOfLongWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.absOfLongWorks);
            QUnit.test("Math - AbsOfSbyteWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.absOfSbyteWorks);
            QUnit.test("Math - AbsOfShortWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.absOfShortWorks);
            QUnit.test("Math - AbsOfFloatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.absOfFloatWorks);
            QUnit.test("Math - AbsOfDecimalWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.absOfDecimalWorks);
            QUnit.test("Math - AcosWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.acosWorks);
            QUnit.test("Math - AsinWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.asinWorks);
            QUnit.test("Math - AtanWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.atanWorks);
            QUnit.test("Math - Atan2Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.atan2Works);
            QUnit.test("Math - CosWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.cosWorks);
            QUnit.test("Math - DivRemWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.divRemWorks);
            QUnit.test("Math - ExpWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.expWorks);
            QUnit.test("Math - FloorOfDoubleWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.floorOfDoubleWorks);
            QUnit.test("Math - FloorOfDecimalWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.floorOfDecimalWorks);
            QUnit.test("Math - LogWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.logWorks);
            QUnit.test("Math - MaxOfByteWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.maxOfByteWorks);
            QUnit.test("Math - MaxOfDecimalWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.maxOfDecimalWorks);
            QUnit.test("Math - MaxOfDoubleWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.maxOfDoubleWorks);
            QUnit.test("Math - MaxOfShortWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.maxOfShortWorks);
            QUnit.test("Math - MaxOfIntWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.maxOfIntWorks);
            QUnit.test("Math - MaxOfLongWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.maxOfLongWorks);
            QUnit.test("Math - MaxOfSByteWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.maxOfSByteWorks);
            QUnit.test("Math - MaxOfFloatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.maxOfFloatWorks);
            QUnit.test("Math - MaxOfUShortWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.maxOfUShortWorks);
            QUnit.test("Math - MaxOfUIntWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.maxOfUIntWorks);
            QUnit.test("Math - MaxOfULongWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.maxOfULongWorks);
            QUnit.test("Math - MinOfByteWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.minOfByteWorks);
            QUnit.test("Math - MinOfDecimalWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.minOfDecimalWorks);
            QUnit.test("Math - MinOfDoubleWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.minOfDoubleWorks);
            QUnit.test("Math - MinOfShortWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.minOfShortWorks);
            QUnit.test("Math - MinOfIntWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.minOfIntWorks);
            QUnit.test("Math - MinOfLongWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.minOfLongWorks);
            QUnit.test("Math - MinOfSByteWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.minOfSByteWorks);
            QUnit.test("Math - MinOfFloatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.minOfFloatWorks);
            QUnit.test("Math - MinOfUShortWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.minOfUShortWorks);
            QUnit.test("Math - MinOfUIntWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.minOfUIntWorks);
            QUnit.test("Math - MinOfULongWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.minOfULongWorks);
            QUnit.test("Math - PowWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.powWorks);
            QUnit.test("Math - RandomWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.randomWorks);
            QUnit.test("Math - RoundOfDoubleWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.roundOfDoubleWorks);
            QUnit.test("Math - RoundDecimalWithModeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.roundDecimalWithModeWorks);
            QUnit.test("Math - RoundDecimalWithPrecisionAndModeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.roundDecimalWithPrecisionAndModeWorks);
            QUnit.test("Math - RoundDoubleWithModeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.roundDoubleWithModeWorks);
            QUnit.test("Math - RoundDoubleWithPrecisionAndModeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.roundDoubleWithPrecisionAndModeWorks);
            QUnit.test("Math - JsRoundWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.jsRoundWorks);
            QUnit.test("Math - IEEERemainderWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.iEEERemainderWorks);
            QUnit.test("Math - SinWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.sinWorks);
            QUnit.test("Math - SqrtWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.sqrtWorks);
            QUnit.test("Math - TanWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.tanWorks);
            QUnit.module("Nullable");
            QUnit.test("Nullable - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.typePropertiesAreCorrect);
            QUnit.test("Nullable - ConvertingToNullableWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.convertingToNullableWorks);
            QUnit.test("Nullable - HasValueWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.hasValueWorks);
            QUnit.test("Nullable - BoxingWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.boxingWorks);
            QUnit.test("Nullable - UnboxingWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.unboxingWorks);
            QUnit.test("Nullable - ValueWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.valueWorks);
            QUnit.test("Nullable - UnboxingValueOfWrongTypeThrowsAnException", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.unboxingValueOfWrongTypeThrowsAnException);
            QUnit.test("Nullable - GetValueOrDefaultWithArgWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.getValueOrDefaultWithArgWorks);
            QUnit.test("Nullable - LiftedEqualityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedEqualityWorks);
            QUnit.test("Nullable - LiftedInequalityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedInequalityWorks);
            QUnit.test("Nullable - LiftedLessThanWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedLessThanWorks);
            QUnit.test("Nullable - LiftedGreaterThanWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedGreaterThanWorks);
            QUnit.test("Nullable - LiftedLessThanOrEqualWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedLessThanOrEqualWorks);
            QUnit.test("Nullable - LiftedGreaterThanOrEqualWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedGreaterThanOrEqualWorks);
            QUnit.test("Nullable - LiftedSubtractionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedSubtractionWorks);
            QUnit.test("Nullable - LiftedAdditionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedAdditionWorks);
            QUnit.test("Nullable - LiftedModWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedModWorks);
            QUnit.test("Nullable - LiftedFloatingPointDivisionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedFloatingPointDivisionWorks);
            QUnit.test("Nullable - LiftedIntegerDivisionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedIntegerDivisionWorks);
            QUnit.test("Nullable - LiftedMultiplicationWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedMultiplicationWorks);
            QUnit.test("Nullable - LiftedBitwiseAndWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedBitwiseAndWorks);
            QUnit.test("Nullable - LiftedBitwiseOrWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedBitwiseOrWorks);
            QUnit.test("Nullable - LiftedBitwiseXorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedBitwiseXorWorks);
            QUnit.test("Nullable - LiftedLeftShiftWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedLeftShiftWorks);
            QUnit.test("Nullable - LiftedSignedRightShiftWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedSignedRightShiftWorks);
            QUnit.test("Nullable - LiftedUnsignedRightShiftWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedUnsignedRightShiftWorks);
            QUnit.test("LiftedBooleanAndWorks #314", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedBooleanAndWorks);
            QUnit.test("LiftedBooleanOrWorks #314", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedBooleanOrWorks);
            QUnit.test("Nullable - LiftedBooleanNotWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedBooleanNotWorks);
            QUnit.test("Nullable - LiftedNegationWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedNegationWorks);
            QUnit.test("Nullable - LiftedUnaryPlusWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedUnaryPlusWorks);
            QUnit.test("Nullable - LiftedOnesComplementWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedOnesComplementWorks);
            QUnit.test("CoalesceWorks #314", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.coalesceWorks);
            QUnit.module("NumberFormatInfo");
            QUnit.test("TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests.typePropertiesAreCorrect);
            QUnit.test("GetFormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests.getFormatWorks);
            QUnit.test("InvariantWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests.invariantWorks);
            QUnit.module("Property accessor");
            QUnit.test("AccessorsCanBeInvokedInstance", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.accessorsCanBeInvokedInstance);
            QUnit.test("AccessorsCanBeInvokedStatic", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.accessorsCanBeInvokedStatic);
            QUnit.test("AccessorsCanBeInvokedGeneric", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.accessorsCanBeInvokedGeneric);
            QUnit.test("AccessorsCanBeInvokedGenericStatic", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.accessorsCanBeInvokedGenericStatic);
            QUnit.test("BaseAccessorsCanBeInvoked", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.baseAccessorsCanBeInvoked);
            QUnit.test("BaseAccessorsCanBeInvokedGeneric", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.baseAccessorsCanBeInvokedGeneric);
            QUnit.module("Regex");
            QUnit.test("TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.typePropertiesAreCorrect);
            QUnit.test("StringOnlyConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.stringOnlyConstructorWorks);
            QUnit.test("ConstructorWithFlagsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.constructorWithFlagsWorks);
            QUnit.test("GlobalFlagWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.globalFlagWorks);
            QUnit.test("IgnoreCaseFlagWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.ignoreCaseFlagWorks);
            QUnit.test("MultilineFlagWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.multilineFlagWorks);
            QUnit.test("PatternPropertyWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.patternPropertyWorks);
            QUnit.test("SourcePropertyWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.sourcePropertyWorks);
            QUnit.test("ExecWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.execWorks);
            QUnit.test("LastIndexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.lastIndexWorks);
            QUnit.test("TestWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.testWorks);
            QUnit.test("EscapeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.escapeWorks);
            QUnit.module("Simple types");
            QUnit.test("Boolean - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests.typePropertiesAreCorrect);
            QUnit.test("Boolean - DefaultValueIsFalse", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests.defaultValueIsFalse);
            QUnit.test("Boolean - CreatingInstanceReturnsFalse", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests.creatingInstanceReturnsFalse);
            QUnit.test("Boolean - DefaultConstructorReturnsFalse", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests.defaultConstructorReturnsFalse);
            QUnit.test("Boolean - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests.getHashCodeWorks);
            QUnit.test("Boolean - ObjectEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests.objectEqualsWorks);
            QUnit.test("Boolean - BoolEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests.boolEqualsWorks);
            QUnit.test("Byte - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.typePropertiesAreCorrect);
            QUnit.test("Byte - CastsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.castsWork);
            QUnit.test("Byte - DefaultValueIs0", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.defaultValueIs0);
            QUnit.test("Byte - DefaultConstructorReturnsZero", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.defaultConstructorReturnsZero);
            QUnit.test("Byte - ConstantsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.constantsWork);
            QUnit.test("Byte - FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.formatWorks);
            QUnit.test("Byte - IFormattableToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.iFormattableToStringWorks);
            QUnit.test("Byte - TryParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.tryParseWorks);
            QUnit.test("Byte - ParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.parseWorks);
            QUnit.test("Byte - ToStringWithoutRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.toStringWithoutRadixWorks);
            QUnit.test("Byte - ToStringWithRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.toStringWithRadixWorks);
            QUnit.test("Byte - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.getHashCodeWorks);
            QUnit.test("Byte - EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.equalsWorks);
            QUnit.test("Byte - IEquatableEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.iEquatableEqualsWorks);
            QUnit.test("Byte - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.compareToWorks);
            QUnit.test("Byte - IComparableCompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.iComparableCompareToWorks);
            QUnit.test("Char - TypePropertiesAreInt32", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.typePropertiesAreInt32);
            QUnit.test("Char - CastsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.castsWork);
            QUnit.test("Char - DefaultValueWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.defaultValueWorks);
            QUnit.test("Char - DefaultConstructorReturnsZero", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.defaultConstructorReturnsZero);
            QUnit.test("Char - ConstantsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.constantsWork);
            QUnit.test("Char - CharComparisonWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.charComparisonWorks);
            QUnit.test("Char - ParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.parseWorks);
            QUnit.test("Char - FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.formatWorks);
            QUnit.test("Char - IFormattableToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.iFormattableToStringWorks);
            QUnit.test("Char - ToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.toStringWorks);
            QUnit.test("Char - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.getHashCodeWorks);
            QUnit.test("Char - EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.equalsWorks);
            QUnit.test("Char - IEquatableEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.iEquatableEqualsWorks);
            QUnit.test("Char - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.compareToWorks);
            QUnit.test("Char - IsLowerWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.isLowerWorks);
            QUnit.test("Char - IsUpperWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.isUpperWorks);
            QUnit.test("Char - ToLowerWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.toLowerWorks);
            QUnit.test("Char - ToUpperWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.toUpperWorks);
            QUnit.test("Char - IsDigitWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.isDigitWorks);
            QUnit.test("Char - IsWhiteSpaceWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.isWhiteSpaceWorks);
            QUnit.test("Char - IsDigitWithStringAndIndexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.isDigitWithStringAndIndexWorks);
            QUnit.test("Char - IsWhiteSpaceWithStringAndIndexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.isWhiteSpaceWithStringAndIndexWorks);
            QUnit.test("Decimal - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.typePropertiesAreCorrect);
            QUnit.test("Decimal - DefaultValueIs0", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.defaultValueIs0);
            QUnit.test("Decimal - ConstantsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.constantsWork);
            QUnit.test("Decimal - ConvertingConstructorsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.convertingConstructorsWork);
            QUnit.test("Decimal - FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.formatWorks);
            QUnit.test("Decimal - IFormattableToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.iFormattableToStringWorks);
            QUnit.test("Decimal - ToStringWithoutRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.toStringWithoutRadixWorks);
            QUnit.test("Decimal - AddWithStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.addWithStringWorks);
            QUnit.test("Decimal - ConversionsToDecimalWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.conversionsToDecimalWork);
            QUnit.test("Decimal - ConversionsFromDecimalWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.conversionsFromDecimalWork);
            QUnit.test("Decimal - OperatorsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.operatorsWork);
            QUnit.test("Decimal - AddWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.addWorks);
            QUnit.test("Decimal - CeilingWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.ceilingWorks);
            QUnit.test("Decimal - DivideWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.divideWorks);
            QUnit.test("Decimal - FloorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.floorWorks);
            QUnit.test("Decimal - RemainderWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.remainderWorks);
            QUnit.test("Decimal - MultiplyWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.multiplyWorks);
            QUnit.test("Decimal - NegateWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.negateWorks);
            QUnit.test("Decimal - RoundWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.roundWorks);
            QUnit.test("Decimal - RoundWithModeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.roundWithModeWorks);
            QUnit.test("Decimal - SubtractWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.subtractWorks);
            QUnit.test("Decimal - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.getHashCodeWorks);
            QUnit.test("Decimal - ObjectEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.objectEqualsWorks);
            QUnit.test("Decimal - DecimalEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.decimalEqualsWorks);
            QUnit.test("Decimal - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.compareToWorks);
            QUnit.test("Decimal - FullCoalesceWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.fullCoalesceWorks);
            QUnit.test("Decimal - ShortCoalesceWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.shortCoalesceWorks);
            QUnit.test("Double - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.typePropertiesAreCorrect);
            QUnit.test("Double - DefaultValueIs0", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.defaultValueIs0);
            QUnit.test("Double - ConstantsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.constantsWork);
            QUnit.test("Double - DefaultConstructorReturnsZero", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.defaultConstructorReturnsZero);
            QUnit.test("Double - FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.formatWorks);
            QUnit.test("Double - IFormattableToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.iFormattableToStringWorks);
            QUnit.test("Double - ToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.toStringWorks);
            QUnit.test("Double - ToExponentialWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.toExponentialWorks);
            QUnit.test("Double - ToExponentialWithFractionalDigitsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.toExponentialWithFractionalDigitsWorks);
            QUnit.test("Double - ToFixed", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.toFixed);
            QUnit.test("Double - ToFixedWithFractionalDigitsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.toFixedWithFractionalDigitsWorks);
            QUnit.test("Double - ToPrecisionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.toPrecisionWorks);
            QUnit.test("Double - ToPrecisionWithPrecisionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.toPrecisionWithPrecisionWorks);
            QUnit.test("Double - IsPositiveInfinityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.isPositiveInfinityWorks);
            QUnit.test("Double - IsNegativeInfinityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.isNegativeInfinityWorks);
            QUnit.test("Double - IsInfinityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.isInfinityWorks);
            QUnit.test("Double - IsFiniteWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.isFiniteWorks);
            QUnit.test("Double - IsNaNWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.isNaNWorks);
            QUnit.test("Double - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.getHashCodeWorks);
            QUnit.test("Double - ObjectEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.objectEqualsWorks);
            QUnit.test("Double - DoubleEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.doubleEqualsWorks);
            QUnit.test("Double - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.compareToWorks);
            QUnit.test("Int16 - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.typePropertiesAreCorrect);
            QUnit.test("Int16 - CastsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.castsWork);
            QUnit.test("Int16 - DefaultValueIs0", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.defaultValueIs0);
            QUnit.test("Int16 - DefaultConstructorReturnsZero", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.defaultConstructorReturnsZero);
            QUnit.test("Int16 - ConstantsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.constantsWork);
            QUnit.test("Int16 - FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.formatWorks);
            QUnit.test("Int16 - IFormattableToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.iFormattableToStringWorks);
            QUnit.test("Int16 - TryParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.tryParseWorks);
            QUnit.test("Int16 - ParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.parseWorks);
            QUnit.test("Int16 - ToStringWithoutRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.toStringWithoutRadixWorks);
            QUnit.test("Int16 - ToStringWithRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.toStringWithRadixWorks);
            QUnit.test("Int16 - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.getHashCodeWorks);
            QUnit.test("Int16 - EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.equalsWorks);
            QUnit.test("Int16 - IEquatableEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.iEquatableEqualsWorks);
            QUnit.test("Int16 - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.compareToWorks);
            QUnit.test("Int16 - IComparableCompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.iComparableCompareToWorks);
            QUnit.test("Int32 - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.typePropertiesAreCorrect);
            QUnit.test("Int32 - CastsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.castsWork);
            QUnit.test("Int32 - TypeIsWorksForInt32", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.typeIsWorksForInt32);
            QUnit.test("Int32 - TypeAsWorksForInt32", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.typeAsWorksForInt32);
            QUnit.test("Int32 - UnboxingWorksForInt32", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.unboxingWorksForInt32);
            QUnit.test("Int32 - DefaultValueIs0", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.defaultValueIs0);
            QUnit.test("Int32 - DefaultConstructorReturnsZero", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.defaultConstructorReturnsZero);
            QUnit.test("Int32 - ConstantsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.constantsWork);
            QUnit.test("Int32 - FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.formatWorks);
            QUnit.test("Int32 - IFormattableToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.iFormattableToStringWorks);
            QUnit.test("Int32 - TryParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.tryParseWorks);
            QUnit.test("Int32 - ParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.parseWorks);
            QUnit.test("Int32 - ToStringWithoutRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.toStringWithoutRadixWorks);
            QUnit.test("Int32 - ToStringWithRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.toStringWithRadixWorks);
            QUnit.test("Int32 - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.getHashCodeWorks);
            QUnit.test("Int32 - EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.equalsWorks);
            QUnit.test("Int32 - IEquatableEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.iEquatableEqualsWorks);
            QUnit.test("Int32 - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.compareToWorks);
            QUnit.test("Int32 - IComparableCompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.iComparableCompareToWorks);
            QUnit.test("Int32 - IntegerDivisionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.integerDivisionWorks);
            QUnit.test("Int32 - IntegerModuloWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.integerModuloWorks);
            QUnit.test("Int32 - IntegerDivisionByZeroThrowsDivideByZeroException", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.integerDivisionByZeroThrowsDivideByZeroException);
            QUnit.test("Int32 - DoublesAreTruncatedWhenConvertedToIntegers", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.doublesAreTruncatedWhenConvertedToIntegers);
            QUnit.test("Int64 - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.typePropertiesAreCorrect);
            QUnit.test("Int64 - CastsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.castsWork);
            QUnit.test("Int64 - DefaultValueIs0", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.defaultValueIs0);
            QUnit.test("Int64 - DefaultConstructorReturnsZero", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.defaultConstructorReturnsZero);
            QUnit.test("Int64 - FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.formatWorks);
            QUnit.test("Int64 - IFormattableToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.iFormattableToStringWorks);
            QUnit.test("Int64 - TryParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.tryParseWorks);
            QUnit.test("Int64 - ParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.parseWorks);
            QUnit.test("Int64 - CastingOfLargeDoublesToInt64Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.castingOfLargeDoublesToInt64Works);
            QUnit.test("Int64 - DivisionOfLargeInt64Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.divisionOfLargeInt64Works);
            QUnit.test("Int64 - ToStringWithoutRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.toStringWithoutRadixWorks);
            QUnit.test("Int64 - ToStringWithRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.toStringWithRadixWorks);
            QUnit.test("Int64 - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.getHashCodeWorks);
            QUnit.test("Int64 - EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.equalsWorks);
            QUnit.test("Int64 - IEquatableEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.iEquatableEqualsWorks);
            QUnit.test("Int64 - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.compareToWorks);
            QUnit.test("Int64 - IComparableCompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.iComparableCompareToWorks);
            QUnit.test("Object - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.typePropertiesAreCorrect);
            QUnit.test("Object - CanGetHashCodeForObject", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.canGetHashCodeForObject);
            QUnit.test("Object - RepeatedCallsToGetHashCodeReturnsSameValue", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.repeatedCallsToGetHashCodeReturnsSameValue);
            QUnit.test("Object - ObjectIsEqualToItself", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.objectIsEqualToItself);
            QUnit.test("Object - ObjectIsNotEqualToOtherObject", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.objectIsNotEqualToOtherObject);
            QUnit.test("Object - StaticEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.staticEqualsWorks);
            QUnit.test("Object - ReferenceEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.referenceEqualsWorks);
            QUnit.test("Object - ToStringOverride", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.toStringOverride);
            QUnit.test("SByte - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.typePropertiesAreCorrect);
            QUnit.test("SByte - CastsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.castsWork);
            QUnit.test("SByte - DefaultValueIs0", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.defaultValueIs0);
            QUnit.test("SByte - DefaultConstructorReturnsZero", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.defaultConstructorReturnsZero);
            QUnit.test("SByte - ConstantsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.constantsWork);
            QUnit.test("SByte - FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.formatWorks);
            QUnit.test("SByte - IFormattableToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.iFormattableToStringWorks);
            QUnit.test("SByte - TryParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.tryParseWorks);
            QUnit.test("SByte - ParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.parseWorks);
            QUnit.test("SByte - ToStringWithoutRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.toStringWithoutRadixWorks);
            QUnit.test("SByte - ToStringWithRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.toStringWithRadixWorks);
            QUnit.test("SByte - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.getHashCodeWorks);
            QUnit.test("SByte - EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.equalsWorks);
            QUnit.test("SByte - IEquatableEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.iEquatableEqualsWorks);
            QUnit.test("SByte - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.compareToWorks);
            QUnit.test("SByte - IComparableCompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.iComparableCompareToWorks);
            QUnit.test("Float - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.typePropertiesAreCorrect);
            QUnit.test("Float - DefaultValueIs0", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.defaultValueIs0);
            QUnit.test("Float - ConstantsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.constantsWork);
            QUnit.test("Float - DefaultConstructorReturnsZero", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.defaultConstructorReturnsZero);
            QUnit.test("Float - FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.formatWorks);
            QUnit.test("Float - IFormattableToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.iFormattableToStringWorks);
            QUnit.test("Float - ToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.toStringWorks);
            QUnit.test("Float - ToExponentialWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.toExponentialWorks);
            QUnit.test("Float - ToExponentialWithFractionalDigitsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.toExponentialWithFractionalDigitsWorks);
            QUnit.test("Float - ToFixed", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.toFixed);
            QUnit.test("Float - ToFixedWithFractionalDigitsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.toFixedWithFractionalDigitsWorks);
            QUnit.test("Float - ToPrecisionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.toPrecisionWorks);
            QUnit.test("Float - ToPrecisionWithPrecisionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.toPrecisionWithPrecisionWorks);
            QUnit.test("Float - IsPositiveInfinityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.isPositiveInfinityWorks);
            QUnit.test("Float - IsNegativeInfinityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.isNegativeInfinityWorks);
            QUnit.test("Float - IsInfinityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.isInfinityWorks);
            QUnit.test("Float - IsFiniteWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.isFiniteWorks);
            QUnit.test("Float - IsNaNWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.isNaNWorks);
            QUnit.test("Float - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.getHashCodeWorks);
            QUnit.test("Float - EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.equalsWorks);
            QUnit.test("Float - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.compareToWorks);
            QUnit.test("Tuple - Tuple1Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.tuple1Works);
            QUnit.test("Tuple - Tuple2Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.tuple2Works);
            QUnit.test("Tuple - Tuple3Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.tuple3Works);
            QUnit.test("Tuple - Tuple4Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.tuple4Works);
            QUnit.test("Tuple - Tuple5Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.tuple5Works);
            QUnit.test("Tuple - Tuple6Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.tuple6Works);
            QUnit.test("Tuple - Tuple7Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.tuple7Works);
            QUnit.test("Tuple - Tuple8Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.tuple8Works);
            QUnit.test("UInt16 - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.typePropertiesAreCorrect);
            QUnit.test("UInt16 - CastsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.castsWork);
            QUnit.test("UInt16 - DefaultValueIs0", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.defaultValueIs0);
            QUnit.test("UInt16 - DefaultConstructorReturnsZero", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.defaultConstructorReturnsZero);
            QUnit.test("UInt16 - ConstantsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.constantsWork);
            QUnit.test("UInt16 - FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.formatWorks);
            QUnit.test("UInt16 - IFormattableToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.iFormattableToStringWorks);
            QUnit.test("UInt16 - TryParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.tryParseWorks);
            QUnit.test("UInt16 - ParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.parseWorks);
            QUnit.test("UInt16 - ToStringWithoutRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.toStringWithoutRadixWorks);
            QUnit.test("UInt16 - ToStringWithRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.toStringWithRadixWorks);
            QUnit.test("UInt16 - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.getHashCodeWorks);
            QUnit.test("UInt16 - EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.equalsWorks);
            QUnit.test("UInt16 - IEquatableEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.iEquatableEqualsWorks);
            QUnit.test("UInt16 - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.compareToWorks);
            QUnit.test("UInt16 - IComparableCompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.iComparableCompareToWorks);
            QUnit.test("UInt32 - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.typePropertiesAreCorrect);
            QUnit.test("UInt32 - CastsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.castsWork);
            QUnit.test("UInt32 - DefaultValueIs0", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.defaultValueIs0);
            QUnit.test("UInt32 - DefaultConstructorReturnsZero", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.defaultConstructorReturnsZero);
            QUnit.test("UInt32 - ConstantsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.constantsWork);
            QUnit.test("UInt32 - FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.formatWorks);
            QUnit.test("UInt32 - IFormattableToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.iFormattableToStringWorks);
            QUnit.test("UInt32 - TryParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.tryParseWorks);
            QUnit.test("UInt32 - ParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.parseWorks);
            QUnit.test("UInt32 - ToStringWithoutRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.toStringWithoutRadixWorks);
            QUnit.test("UInt32 - ToStringWithRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.toStringWithRadixWorks);
            QUnit.test("UInt32 - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.getHashCodeWorks);
            QUnit.test("UInt32 - EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.equalsWorks);
            QUnit.test("UInt32 - IEquatableEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.iEquatableEqualsWorks);
            QUnit.test("UInt32 - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.compareToWorks);
            QUnit.test("UInt32 - IComparableCompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.iComparableCompareToWorks);
            QUnit.test("UInt64 - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.typePropertiesAreCorrect);
            QUnit.test("UInt64 - CastsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.castsWork);
            QUnit.test("UInt64 - DefaultValueIs0", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.defaultValueIs0);
            QUnit.test("UInt64 - DefaultConstructorReturnsZero", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.defaultConstructorReturnsZero);
            QUnit.test("UInt64 - ConstantsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.constantsWork);
            QUnit.test("UInt64 - FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.formatWorks);
            QUnit.test("UInt64 - IFormattableToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.iFormattableToStringWorks);
            QUnit.test("UInt64 - CastingOfLargeValuesToUInt64Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.castingOfLargeValuesToUInt64Works);
            QUnit.test("UInt64 - DivisionOfLargeUInt64Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.divisionOfLargeUInt64Works);
            QUnit.test("UInt64 - TryParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.tryParseWorks);
            QUnit.test("UInt64 - ParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.parseWorks);
            QUnit.test("UInt64 - ToStringWithoutRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.toStringWithoutRadixWorks);
            QUnit.test("UInt64 - ToStringWithRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.toStringWithRadixWorks);
            QUnit.test("UInt64 - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.getHashCodeWorks);
            QUnit.test("UInt64 - EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.equalsWorks);
            QUnit.test("UInt64 - IEquatableEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.iEquatableEqualsWorks);
            QUnit.test("UInt64 - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.compareToWorks);
            QUnit.test("UInt64 - IComparableCompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.iComparableCompareToWorks);
            QUnit.module("String");
            QUnit.test("String - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.typePropertiesAreCorrect);
            QUnit.test("String - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.defaultConstructorWorks);
            QUnit.test("String - CopyConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.copyConstructorWorks);
            QUnit.test("String - CharAndCountConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.charAndCountConstructorWorks);
            QUnit.test("String - CharArrayConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.charArrayConstructorWorks);
            QUnit.test("String - EmptyFieldWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.emptyFieldWorks);
            QUnit.test("String - LengthPropertyWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.lengthPropertyWorks);
            QUnit.test("String - CharAtWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.charAtWorks);
            QUnit.test("String - CharCodeAtWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.charCodeAtWorks);
            QUnit.test("String - CompareWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.compareWorks);
            QUnit.test("String - CompareWithIgnoreCaseArgWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.compareWithIgnoreCaseArgWorks);
            QUnit.test("String - ConcatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.concatWorks);
            QUnit.test("String - ConcatWithObjectsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.concatWithObjectsWorks);
            QUnit.test("String - EndsWithCharWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.endsWithCharWorks);
            QUnit.test("String - EndsWithStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.endsWithStringWorks);
            QUnit.test("String - StaticEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.staticEqualsWorks);
            QUnit.test("String - FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.formatWorks);
            QUnit.test("String - FormatWorksWithIFormattable", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.formatWorksWithIFormattable);
            QUnit.test("String - FormatCanUseEscapedBraces", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.formatCanUseEscapedBraces);
            QUnit.test("String - FromCharCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.fromCharCodeWorks);
            QUnit.test("String - IndexOfCharWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.indexOfCharWorks);
            QUnit.test("String - IndexOfStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.indexOfStringWorks);
            QUnit.test("String - IndexOfCharWithStartIndexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.indexOfCharWithStartIndexWorks);
            QUnit.test("String - IndexOfCharWithStartIndexAndCountWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.indexOfCharWithStartIndexAndCountWorks);
            QUnit.test("String - IndexOfStringWithStartIndexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.indexOfStringWithStartIndexWorks);
            QUnit.test("String - IndexOfStringWithStartIndexAndCountWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.indexOfStringWithStartIndexAndCountWorks);
            QUnit.test("String - IndexOfAnyWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.indexOfAnyWorks);
            QUnit.test("String - IndexOfAnyWithStartIndexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.indexOfAnyWithStartIndexWorks);
            QUnit.test("String - IndexOfAnyWithStartIndexAndCountWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.indexOfAnyWithStartIndexAndCountWorks);
            QUnit.test("String - InsertWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.insertWorks);
            QUnit.test("String - IsNullOrEmptyWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.isNullOrEmptyWorks);
            QUnit.test("String - LastIndexOfCharWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.lastIndexOfCharWorks);
            QUnit.test("String - LastIndexOfStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.lastIndexOfStringWorks);
            QUnit.test("String - LastIndexOfCharWithStartIndexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.lastIndexOfCharWithStartIndexWorks);
            QUnit.test("String - LastIndexOfStringWithStartIndexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.lastIndexOfStringWithStartIndexWorks);
            QUnit.test("String - LastIndexOfCharWithStartIndexAndCountWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.lastIndexOfCharWithStartIndexAndCountWorks);
            QUnit.test("String - LastIndexOfStringWithStartIndexAndCountWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.lastIndexOfStringWithStartIndexAndCountWorks);
            QUnit.test("String - LastIndexOfAnyWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.lastIndexOfAnyWorks);
            QUnit.test("String - LastIndexOfAnyWithStartIndexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.lastIndexOfAnyWithStartIndexWorks);
            QUnit.test("String - LastIndexOfAnyWithStartIndexAndCountWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.lastIndexOfAnyWithStartIndexAndCountWorks);
            QUnit.test("String - LocaleCompareWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.localeCompareWorks);
            QUnit.test("String - MatchWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.matchWorks);
            QUnit.test("String - PadLeftWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.padLeftWorks);
            QUnit.test("String - PadLeftWithCharWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.padLeftWithCharWorks);
            QUnit.test("String - PadRightWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.padRightWorks);
            QUnit.test("String - PadRightWithCharWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.padRightWithCharWorks);
            QUnit.test("String - RemoveWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.removeWorks);
            QUnit.test("String - RemoveWithCountWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.removeWithCountWorks);
            QUnit.test("String - ReplaceWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.replaceWorks);
            QUnit.test("String - ReplaceCharWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.replaceCharWorks);
            QUnit.test("String - ReplaceRegexWithReplaceTextWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.replaceRegexWithReplaceTextWorks);
            QUnit.test("String - ReplaceRegexWithReplaceCallbackWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.replaceRegexWithReplaceCallbackWorks);
            QUnit.test("String - SearchWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.searchWorks);
            QUnit.test("String - SplitWithStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.splitWithStringWorks);
            QUnit.test("String - SplitWithCharWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.splitWithCharWorks);
            QUnit.test("String - JsSplitWithStringAndLimitWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.jsSplitWithStringAndLimitWorks);
            QUnit.test("String - JsSplitWithCharAndLimitWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.jsSplitWithCharAndLimitWorks);
            QUnit.test("String - SplitWithCharsAndLimitWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.splitWithCharsAndLimitWorks);
            QUnit.test("String - SplitWithCharsAndStringSplitOptionsAndLimitWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.splitWithCharsAndStringSplitOptionsAndLimitWorks);
            QUnit.test("String - SplitWithRegexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.splitWithRegexWorks);
            QUnit.test("String - SomeNetSplitTests", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.someNetSplitTests);
            QUnit.test("String - SplitWithCharsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.splitWithCharsWorks);
            QUnit.test("String - SplitWithStringsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.splitWithStringsWorks);
            QUnit.test("String - SplitWithStringsAndLimitWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.splitWithStringsAndLimitWorks);
            QUnit.test("String - StartsWithCharWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.startsWithCharWorks);
            QUnit.test("String - StartsWithStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.startsWithStringWorks);
            QUnit.test("String - SubstrWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.substrWorks);
            QUnit.test("String - SubstrWithLengthWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.substrWithLengthWorks);
            QUnit.test("String - SubstringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.substringWorks);
            QUnit.test("String - SubstringWithLengthWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.substringWithLengthWorks);
            QUnit.test("String - ToLowerCaseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.toLowerCaseWorks);
            QUnit.test("String - ToUpperCaseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.toUpperCaseWorks);
            QUnit.test("String - ToLowerWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.toLowerWorks);
            QUnit.test("String - ToUpperWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.toUpperWorks);
            QUnit.test("String - TrimWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.trimWorks);
            QUnit.test("String - TrimCharsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.trimCharsWorks);
            QUnit.test("String - TrimStartCharsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.trimStartCharsWorks);
            QUnit.test("String - TrimEndCharsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.trimEndCharsWorks);
            QUnit.test("String - TrimStartWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.trimStartWorks);
            QUnit.test("String - TrimEndWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.trimEndWorks);
            QUnit.test("String - StringEqualityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.stringEqualityWorks);
            QUnit.test("String - StringInequalityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.stringInequalityWorks);
            QUnit.test("String - StringIndexingWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.stringIndexingWorks);
            QUnit.test("String - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.getHashCodeWorks);
            QUnit.test("String - InstanceEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.instanceEqualsWorks);
            QUnit.test("String - IEquatableEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.iEquatableEqualsWorks);
            QUnit.test("String - StringEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.stringEqualsWorks);
            QUnit.test("String - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.compareToWorks);
            QUnit.test("String - IComparableCompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.iComparableCompareToWorks);
            QUnit.test("String - JoinWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.joinWorks);
            QUnit.test("String - ContainsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.containsWorks);
            QUnit.test("String - ToCharArrayWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.toCharArrayWorks);
            QUnit.test("StringBuilder - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.typePropertiesAreCorrect);
            QUnit.test("StringBuilder - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.defaultConstructorWorks);
            QUnit.test("StringBuilder - ConstructorWithCapacityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.constructorWithCapacityWorks);
            QUnit.test("StringBuilder - InitialTextConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.initialTextConstructorWorks);
            QUnit.test("StringBuilder - InitialTextConstructorWithCapacityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.initialTextConstructorWithCapacityWorks);
            QUnit.test("StringBuilder - SubstringConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.substringConstructorWorks);
            QUnit.test("StringBuilder - AppendBoolWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.appendBoolWorks);
            QUnit.test("StringBuilder - AppendCharWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.appendCharWorks);
            QUnit.test("StringBuilder - AppendIntWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.appendIntWorks);
            QUnit.test("StringBuilder - AppendDoubleWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.appendDoubleWorks);
            QUnit.test("StringBuilder - AppendObjectWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.appendObjectWorks);
            QUnit.test("StringBuilder - AppendStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.appendStringWorks);
            QUnit.test("StringBuilder - AppendLineWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.appendLineWorks);
            QUnit.test("StringBuilder - AppendLineStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.appendLineStringWorks);
            QUnit.test("StringBuilder - ClearWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.clearWorks);
            QUnit.test("StringBuilder - ToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.toStringWorks);
            QUnit.test("StringBuilder - LengthPropertyWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.lengthPropertyWorks);
            QUnit.module("Utilities");
            QUnit.test("Environment - NewLineIsAStringContainingOnlyTheNewLineChar", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests.newLineIsAStringContainingOnlyTheNewLineChar);
            QUnit.module("СultureInfo");
            QUnit.test("TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests.typePropertiesAreCorrect);
            QUnit.test("GetFormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests.getFormatWorks);
            QUnit.test("InvariantWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests.invariantWorks);
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.instance = new Bridge.ClientTest.ArrayTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        lengthWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.lengthWorks();
        },
        rankIsOne: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.rankIsOne();
        },
        getLengthWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.getLengthWorks();
        },
        getLowerBound: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.getLowerBound();
        },
        getUpperBoundWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.getUpperBoundWorks();
        },
        gettingValueByIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.gettingValueByIndexWorks();
        },
        getValueWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.getValueWorks();
        },
        settingValueByIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.settingValueByIndexWorks();
        },
        setValueWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.setValueWorks();
        },
        foreachWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.foreachWorks();
        },
        cloneWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.cloneWorks();
        },
        concatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.concatWorks();
        },
        containsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.containsWorks();
        },
        containsUsesEqualsMethod: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.containsUsesEqualsMethod();
        },
        allWithArrayItemFilterCallbackWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.allWithArrayItemFilterCallbackWorks();
        },
        sliceWithoutEndWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.sliceWithoutEndWorks();
        },
        foreachWithArrayItemCallbackWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.foreachWithArrayItemCallbackWorks();
        },
        foreachWithArrayCallbackWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.foreachWithArrayCallbackWorks();
        },
        indexOfWithoutStartIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.indexOfWithoutStartIndexWorks();
        },
        indexOfWithoutStartIndexUsesEqualsMethod: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.indexOfWithoutStartIndexUsesEqualsMethod();
        },
        indexOfWithStartIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.indexOfWithStartIndexWorks();
        },
        joinWithoutDelimiterWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.joinWithoutDelimiterWorks();
        },
        reverseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.reverseWorks();
        },
        anyWithArrayItemFilterCallbackWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.anyWithArrayItemFilterCallbackWorks();
        },
        binarySearch1Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.binarySearch1Works();
        },
        binarySearch2Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.binarySearch2Works();
        },
        binarySearch3Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.binarySearch3Works();
        },
        binarySearch4Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.binarySearch4Works();
        },
        binarySearchExceptionsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.binarySearchExceptionsWorks();
        },
        sortWithDefaultCompareWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.sortWithDefaultCompareWorks();
        },
        sort1Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.sort1Works();
        },
        sort2Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.sort2Works();
        },
        sort3Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.sort3Works();
        },
        sort4Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.sort4Works();
        },
        sortExceptionsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.sortExceptionsWorks();
        },
        foreachWhenCastToIListWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.foreachWhenCastToIListWorks();
        },
        iCollectionCountWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.iCollectionCountWorks();
        },
        iCollectionAddWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.iCollectionAddWorks();
        },
        iCollectionClearWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.iCollectionClearWorks();
        },
        iCollectionContainsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.iCollectionContainsWorks();
        },
        iCollectionContainsUsesEqualsMethod: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.iCollectionContainsUsesEqualsMethod();
        },
        iCollectionRemoveWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.iCollectionRemoveWorks();
        },
        iListIndexingWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.iListIndexingWorks();
        },
        iListIndexOfWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.iListIndexOfWorks();
        },
        iListIndexOfUsesEqualsMethod: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.iListIndexOfUsesEqualsMethod();
        },
        iListInsertWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.iListInsertWorks();
        },
        iListRemoveAtWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.iListRemoveAtWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.instance = new Bridge.ClientTest.Collections.Generic.GenericDictionaryTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        capacityConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.capacityConstructorWorks();
        },
        capacityAndEqualityComparerWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.capacityAndEqualityComparerWorks();
        },
        equalityComparerOnlyConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.equalityComparerOnlyConstructorWorks();
        },
        countWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.countWorks();
        },
        keysWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.keysWorks();
        },
        valuesWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.valuesWorks();
        },
        indexerGetterWorksForExistingItems: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.indexerGetterWorksForExistingItems();
        },
        indexerSetterWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.indexerSetterWorks();
        },
        indexerGetterThrowsForNonExistingItems: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            assert.expect(0);
            t.indexerGetterThrowsForNonExistingItems();
        },
        addWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.addWorks();
        },
        addThrowsIfItemAlreadyExists: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            assert.expect(0);
            t.addThrowsIfItemAlreadyExists();
        },
        clearWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.clearWorks();
        },
        containsKeyWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.containsKeyWorks();
        },
        enumeratingWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.enumeratingWorks();
        },
        removeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.removeWorks();
        },
        tryGetValueWithIntKeysWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.tryGetValueWithIntKeysWorks();
        },
        tryGetValueWithObjectKeysWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.tryGetValueWithObjectKeysWorks();
        },
        canUseCustomComparer: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.canUseCustomComparer();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.instance = new Bridge.ClientTest.Collections.Generic.ICollectionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.getInstance();
            return r;
        },
        arrayImplementsICollection: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.beforeTest(false, assert);
            t.arrayImplementsICollection();
        },
        customClassThatShouldImplementICollectionDoesSo: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.beforeTest(false, assert);
            t.customClassThatShouldImplementICollectionDoesSo();
        },
        arrayCastToICollectionCountWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.beforeTest(false, assert);
            t.arrayCastToICollectionCountWorks();
        },
        classImplementingICollectionCountWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.beforeTest(false, assert);
            t.classImplementingICollectionCountWorks();
        },
        classImplementingICollectionCastToICollectionCountWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.beforeTest(false, assert);
            t.classImplementingICollectionCastToICollectionCountWorks();
        },
        classImplementingICollectionAddWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.beforeTest(false, assert);
            t.classImplementingICollectionAddWorks();
        },
        classImplementingICollectionCastToICollectionAddWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.beforeTest(false, assert);
            t.classImplementingICollectionCastToICollectionAddWorks();
        },
        classImplementingICollectionClearWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.beforeTest(false, assert);
            t.classImplementingICollectionClearWorks();
        },
        classImplementingICollectionCastToICollectionClearWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.beforeTest(false, assert);
            t.classImplementingICollectionCastToICollectionClearWorks();
        },
        arrayCastToICollectionContainsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.beforeTest(false, assert);
            t.arrayCastToICollectionContainsWorks();
        },
        classImplementingICollectionContainsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.beforeTest(false, assert);
            t.classImplementingICollectionContainsWorks();
        },
        classImplementingICollectionCastToICollectionContainsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.beforeTest(false, assert);
            t.classImplementingICollectionCastToICollectionContainsWorks();
        },
        classImplementingICollectionRemoveWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.beforeTest(false, assert);
            t.classImplementingICollectionRemoveWorks();
        },
        classImplementingICollectionCastToICollectionRemoveWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.beforeTest(false, assert);
            t.classImplementingICollectionCastToICollectionRemoveWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.instance = new Bridge.ClientTest.Collections.Generic.IDictionaryTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        classImplementsInterfaces: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.beforeTest(false, assert);
            t.classImplementsInterfaces();
        },
        countWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.beforeTest(false, assert);
            t.countWorks();
        },
        keysWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.beforeTest(false, assert);
            t.keysWorks();
        },
        getItemWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.beforeTest(false, assert);
            t.getItemWorks();
        },
        valuesWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.beforeTest(false, assert);
            t.valuesWorks();
        },
        containsKeyWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.beforeTest(false, assert);
            t.containsKeyWorks();
        },
        tryGetValueWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.beforeTest(false, assert);
            t.tryGetValueWorks();
        },
        addWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.beforeTest(false, assert);
            t.addWorks();
        },
        clearWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.beforeTest(false, assert);
            t.clearWorks();
        },
        removeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.beforeTest(false, assert);
            t.removeWorks();
        },
        setItemWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.beforeTest(false, assert);
            t.setItemWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.instance = new Bridge.ClientTest.Collections.Generic.IEnumerableTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.getInstance();
            return r;
        },
        arrayImplementsIEnumerable: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.beforeTest(false, assert);
            t.arrayImplementsIEnumerable();
        },
        customClassThatShouldImplementIEnumerableDoesSo: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.beforeTest(false, assert);
            t.customClassThatShouldImplementIEnumerableDoesSo();
        },
        arrayGetEnumeratorMethodWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.beforeTest(false, assert);
            t.arrayGetEnumeratorMethodWorks();
        },
        arrayCastToIEnumerableCanBeEnumerated: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.beforeTest(false, assert);
            t.arrayCastToIEnumerableCanBeEnumerated();
        },
        classImplementingIEnumerableCanBeEnumerated: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.beforeTest(false, assert);
            t.classImplementingIEnumerableCanBeEnumerated();
        },
        classImplementingIEnumerableCastToIEnumerableCanBeEnumerated: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.beforeTest(false, assert);
            t.classImplementingIEnumerableCastToIEnumerableCanBeEnumerated();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.instance = new Bridge.ClientTest.Collections.Generic.IListTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        arrayImplementsIList: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.beforeTest(false, assert);
            t.arrayImplementsIList();
        },
        customClassThatShouldImplementIListDoesSo: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.beforeTest(false, assert);
            t.customClassThatShouldImplementIListDoesSo();
        },
        arrayCastToIListGetItemWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.beforeTest(false, assert);
            t.arrayCastToIListGetItemWorks();
        },
        classImplementingIListGetItemWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.beforeTest(false, assert);
            t.classImplementingIListGetItemWorks();
        },
        classImplementingIListCastToIListGetItemWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.beforeTest(false, assert);
            t.classImplementingIListCastToIListGetItemWorks();
        },
        arrayCastToIListSetItemWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.beforeTest(false, assert);
            t.arrayCastToIListSetItemWorks();
        },
        classImplementingIListSetItemWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.beforeTest(false, assert);
            t.classImplementingIListSetItemWorks();
        },
        classImplementingIListCastToIListSetItemWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.beforeTest(false, assert);
            t.classImplementingIListCastToIListSetItemWorks();
        },
        arrayCastToIListIndexOfWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.beforeTest(false, assert);
            t.arrayCastToIListIndexOfWorks();
        },
        classImplementingIListIndexOfWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.beforeTest(false, assert);
            t.classImplementingIListIndexOfWorks();
        },
        classImplementingIListCastToIListIndexOfWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.beforeTest(false, assert);
            t.classImplementingIListCastToIListIndexOfWorks();
        },
        classImplementingIListInsertWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.beforeTest(false, assert);
            t.classImplementingIListInsertWorks();
        },
        classImplementingIListCastToIListInsertWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.beforeTest(false, assert);
            t.classImplementingIListCastToIListInsertWorks();
        },
        classImplementingIListRemoveAtWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.beforeTest(false, assert);
            t.classImplementingIListRemoveAtWorks();
        },
        classImplementingIListCastToIListRemoveAtWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.beforeTest(false, assert);
            t.classImplementingIListCastToIListRemoveAtWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.instance = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.getInstance();
            return r;
        },
        typeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.beforeTest(false, assert);
            t.typeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable();
        },
        enumeratingIEnumeratorIteratorToEndWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.beforeTest(false, assert);
            t.enumeratingIEnumeratorIteratorToEndWorks();
        },
        prematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.beforeTest(false, assert);
            t.prematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks();
        },
        exceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.beforeTest(false, assert);
            t.exceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks();
        },
        typeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.beforeTest(false, assert);
            t.typeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface();
        },
        enumeratingIEnumerableIteratorToEndWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.beforeTest(false, assert);
            t.enumeratingIEnumerableIteratorToEndWorks();
        },
        prematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.beforeTest(false, assert);
            t.prematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks();
        },
        exceptionInIEnumerableIteratorBodyExecutesFinallyBlocks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.beforeTest(false, assert);
            t.exceptionInIEnumerableIteratorBodyExecutesFinallyBlocks();
        },
        enumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.beforeTest(false, assert);
            t.enumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters();
        },
        differentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.beforeTest(false, assert);
            t.differentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.instance = new Bridge.ClientTest.Collections.Generic.ListTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithCapacityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.constructorWithCapacityWorks();
        },
        constructingFromArrayWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.constructingFromArrayWorks();
        },
        constructingFromListWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.constructingFromListWorks();
        },
        constructingFromIEnumerableWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.constructingFromIEnumerableWorks();
        },
        countWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.countWorks();
        },
        indexingWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.indexingWorks();
        },
        foreachWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.foreachWorks();
        },
        getEnumeratorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.getEnumeratorWorks();
        },
        addWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.addWorks();
        },
        addRangeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.addRangeWorks();
        },
        binarySearch1Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.binarySearch1Works();
        },
        binarySearch2Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.binarySearch2Works();
        },
        binarySearch3Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.binarySearch3Works();
        },
        binarySearch4Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.binarySearch4Works();
        },
        clearWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.clearWorks();
        },
        containsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.containsWorks();
        },
        containsUsesEqualsMethod: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.containsUsesEqualsMethod();
        },
        sliceWithoutEndWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.sliceWithoutEndWorks();
        },
        sliceWithEndWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.sliceWithEndWorks();
        },
        foreachWithListItemCallbackWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.foreachWithListItemCallbackWorks();
        },
        foreachWithListCallbackWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.foreachWithListCallbackWorks();
        },
        indexOfWithoutStartIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.indexOfWithoutStartIndexWorks();
        },
        indexOfWithoutStartIndexUsesEqualsMethod: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.indexOfWithoutStartIndexUsesEqualsMethod();
        },
        indexOfWithStartIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.indexOfWithStartIndexWorks();
        },
        indexOfWithStartIndexUsesEqualsMethod: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.indexOfWithStartIndexUsesEqualsMethod();
        },
        insertWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.insertWorks();
        },
        insertRangeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.insertRangeWorks();
        },
        joinWithoutDelimiterWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.joinWithoutDelimiterWorks();
        },
        joinWithDelimiterWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.joinWithDelimiterWorks();
        },
        removeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.removeWorks();
        },
        removeReturnsFalseIfTheElementWasNotFound: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.removeReturnsFalseIfTheElementWasNotFound();
        },
        removeCanRemoveNullItem: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.removeCanRemoveNullItem();
        },
        removeUsesEqualsMethod: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.removeUsesEqualsMethod();
        },
        removeAtWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.removeAtWorks();
        },
        removeRangeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.removeRangeWorks();
        },
        reverseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.reverseWorks();
        },
        sortWithDefaultCompareWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.sortWithDefaultCompareWorks();
        },
        sortWithCompareCallbackWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.sortWithCompareCallbackWorks();
        },
        sortWithIComparerWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.sortWithIComparerWorks();
        },
        foreachWhenCastToIEnumerableWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.foreachWhenCastToIEnumerableWorks();
        },
        iEnumerableGetEnumeratorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.iEnumerableGetEnumeratorWorks();
        },
        iCollectionCountWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.iCollectionCountWorks();
        },
        iCollectionAddWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.iCollectionAddWorks();
        },
        iCollectionClearWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.iCollectionClearWorks();
        },
        iCollectionContainsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.iCollectionContainsWorks();
        },
        iCollectionContainsUsesEqualsMethod: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.iCollectionContainsUsesEqualsMethod();
        },
        iCollectionRemoveWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.iCollectionRemoveWorks();
        },
        iCollectionRemoveCanRemoveNullItem: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.iCollectionRemoveCanRemoveNullItem();
        },
        iCollectionRemoveUsesEqualsMethod: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.iCollectionRemoveUsesEqualsMethod();
        },
        iListIndexingWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.iListIndexingWorks();
        },
        iListIndexOfWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.iListIndexOfWorks();
        },
        iListIndexOfUsesEqualsMethod: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.iListIndexOfUsesEqualsMethod();
        },
        iListInsertWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.iListInsertWorks();
        },
        iListRemoveAtWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.iListRemoveAtWorks();
        },
        toArrayWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.toArrayWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.instance = new Bridge.ClientTest.MultidimArrayTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        lengthWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.beforeTest(false, assert);
            t.lengthWorks();
        },
        getValueWorksForUninitializedElement: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.beforeTest(false, assert);
            t.getValueWorksForUninitializedElement();
        },
        getValueByIndexWorksForUninitializedElement: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.beforeTest(false, assert);
            t.getValueByIndexWorksForUninitializedElement();
        },
        settingValueByIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.beforeTest(false, assert);
            t.settingValueByIndexWorks();
        },
        setValueWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.beforeTest(false, assert);
            t.setValueWorks();
        },
        getValueWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.beforeTest(false, assert);
            t.getValueWorks();
        },
        gettingValueByIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.beforeTest(false, assert);
            t.gettingValueByIndexWorks();
        },
        rankWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.beforeTest(false, assert);
            t.rankWorks();
        },
        getValueWithIndexOutOfRangeThrowsAnException: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.beforeTest(false, assert);
            t.getValueWithIndexOutOfRangeThrowsAnException();
        },
        setValueWithIndexOutOfRangeThrowsAnException: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMultidimArrayTests.beforeTest(false, assert);
            t.setValueWithIndexOutOfRangeThrowsAnException();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests.instance = new Bridge.ClientTest.Collections.Generic.ComparerTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultComparerCanOrderNumbers: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests.beforeTest(false, assert);
            t.defaultComparerCanOrderNumbers();
        },
        defaultComparerCanOrderNullValues: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests.beforeTest(false, assert);
            t.defaultComparerCanOrderNullValues();
        },
        defaultComparerUsesCompareMethodIfClassImplementsIComparable: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests.beforeTest(false, assert);
            t.defaultComparerUsesCompareMethodIfClassImplementsIComparable();
        },
        createWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests.beforeTest(false, assert);
            t.createWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests.instance = new Bridge.ClientTest.DateTimeFormatInfoTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        getFormatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests.beforeTest(false, assert);
            t.getFormatWorks();
        },
        invariantWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests.beforeTest(false, assert);
            t.invariantWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.instance = new Bridge.ClientTest.SimpleTypes.JsDateTimeTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorReturnsTodaysDate: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.defaultConstructorReturnsTodaysDate();
        },
        creatingInstanceReturnsTodaysDate: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.creatingInstanceReturnsTodaysDate();
        },
        millisecondSinceEpochConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.millisecondSinceEpochConstructorWorks();
        },
        stringConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.stringConstructorWorks();
        },
        yMDConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.yMDConstructorWorks();
        },
        yMDHConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.yMDHConstructorWorks();
        },
        yMDHNConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.yMDHNConstructorWorks();
        },
        yMDHNSConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.yMDHNSConstructorWorks();
        },
        yMDHNSUConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.yMDHNSUConstructorWorks();
        },
        nowWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.nowWorks();
        },
        uTCNowWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.uTCNowWorks();
        },
        toUniversalWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.toUniversalWorks();
        },
        toLocalWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.toLocalWorks();
        },
        todayWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.todayWorks();
        },
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.formatWorks();
        },
        localeFormatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.localeFormatWorks();
        },
        getFullYearWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getFullYearWorks();
        },
        getMonthWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getMonthWorks();
        },
        getDateWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getDateWorks();
        },
        getHoursWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getHoursWorks();
        },
        getMinutesWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getMinutesWorks();
        },
        getSecondsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getSecondsWorks();
        },
        getMillisecondsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getMillisecondsWorks();
        },
        getDayWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getDayWorks();
        },
        getTimeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getTimeWorks();
        },
        valueOfWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.valueOfWorks();
        },
        getTimezoneOffsetWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getTimezoneOffsetWorks();
        },
        getUTCFullYearWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getUTCFullYearWorks();
        },
        getUtcMonthWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getUtcMonthWorks();
        },
        getUTCDateWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getUTCDateWorks();
        },
        getUTCHoursWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getUTCHoursWorks();
        },
        getUTCMinutesWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getUTCMinutesWorks();
        },
        getUTCSecondsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getUTCSecondsWorks();
        },
        getUTCMillisecondsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getUTCMillisecondsWorks();
        },
        getUTCDayWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getUTCDayWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.parseWorks();
        },
        parseExactWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.parseExactWorks();
        },
        parseExactWithCultureWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.parseExactWithCultureWorks();
        },
        parseExactUTCWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.parseExactUTCWorks();
        },
        parseExactUTCWithCultureWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.parseExactUTCWithCultureWorks();
        },
        toDateStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.toDateStringWorks();
        },
        toTimeStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.toTimeStringWorks();
        },
        toUTCStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.toUTCStringWorks();
        },
        toLocaleDateStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.toLocaleDateStringWorks();
        },
        toLocaleTimeStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.toLocaleTimeStringWorks();
        },
        subtractingDatesWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.subtractingDatesWorks();
        },
        subtractMethodReturningTimeSpanWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.subtractMethodReturningTimeSpanWorks();
        },
        dateEqualityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.dateEqualityWorks();
        },
        dateInequalityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.dateInequalityWorks();
        },
        dateLessThanWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.dateLessThanWorks();
        },
        dateLessEqualWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.dateLessEqualWorks();
        },
        dateGreaterThanWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.dateGreaterThanWorks();
        },
        dateGreaterEqualWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.dateGreaterEqualWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.equalsWorks();
        },
        dateTimeEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.dateTimeEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.compareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.instance = new Bridge.ClientTest.SimpleTypes.TimeSpanTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        defaultValueWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.defaultValueWorks();
        },
        zeroWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.zeroWorks();
        },
        creatingInstanceReturnsTimeSpanWithZeroValue: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.creatingInstanceReturnsTimeSpanWithZeroValue();
        },
        parameterConstructorsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.parameterConstructorsWorks();
        },
        factoryMethodsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.factoryMethodsWork();
        },
        propertiesWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.propertiesWork();
        },
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.compareToWorks();
        },
        compareWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.compareWorks();
        },
        staticEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.staticEqualsWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.equalsWorks();
        },
        toStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.toStringWorks();
        },
        addWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.addWorks();
        },
        subtractWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.subtractWorks();
        },
        durationWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.durationWorks();
        },
        negateWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.negateWorks();
        },
        comparisonOperatorsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.comparisonOperatorsWork();
        },
        additionOperatorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.additionOperatorWorks();
        },
        subtractionOperatorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.subtractionOperatorWorks();
        },
        unaryPlusWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.unaryPlusWorks();
        },
        unaryMinusWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.unaryMinusWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.instance = new Bridge.ClientTest.DecimalMathTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.getInstance();
            return r;
        },
        testSubtractOperator: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.beforeTest(true, assert);
            Bridge.ClientTest.DecimalMathTests.testSubtractOperator();
        },
        testRemainderOperator: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.beforeTest(true, assert);
            Bridge.ClientTest.DecimalMathTests.testRemainderOperator();
        },
        testMultiplyOperator: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.beforeTest(true, assert);
            Bridge.ClientTest.DecimalMathTests.testMultiplyOperator();
        },
        testDivideOperator: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.beforeTest(true, assert);
            Bridge.ClientTest.DecimalMathTests.testDivideOperator();
        },
        testAddOperator: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.beforeTest(true, assert);
            Bridge.ClientTest.DecimalMathTests.testAddOperator();
        },
        testAddMethod: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.beforeTest(true, assert);
            Bridge.ClientTest.DecimalMathTests.testAddMethod();
        },
        testDivideMethod: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.beforeTest(true, assert);
            Bridge.ClientTest.DecimalMathTests.testDivideMethod();
        },
        testMultiplyMethod: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.beforeTest(true, assert);
            Bridge.ClientTest.DecimalMathTests.testMultiplyMethod();
        },
        testRemainderMethod: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.beforeTest(true, assert);
            Bridge.ClientTest.DecimalMathTests.testRemainderMethod();
        },
        testSubtractMethod: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.beforeTest(true, assert);
            Bridge.ClientTest.DecimalMathTests.testSubtractMethod();
        },
        testCeilingMethod: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.beforeTest(true, assert);
            Bridge.ClientTest.DecimalMathTests.testCeilingMethod();
        },
        testFloorMethod: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDecimalMathTests.beforeTest(true, assert);
            Bridge.ClientTest.DecimalMathTests.testFloorMethod();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests.instance = new Bridge.ClientTest.SimpleTypes.EnumTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        firstValueOfEnumIsZero: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests.beforeTest(false, assert);
            t.firstValueOfEnumIsZero();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests.beforeTest(false, assert);
            t.equalsWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests.instance = new Bridge.ClientTest.Collections.Generic.EqualityComparerTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultComparerCanGetHashCodeOfNumber: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests.beforeTest(false, assert);
            t.defaultComparerCanGetHashCodeOfNumber();
        },
        defaultComparerReturnsZeroAsHashCodeForNullAndUndefined: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests.beforeTest(false, assert);
            t.defaultComparerReturnsZeroAsHashCodeForNullAndUndefined();
        },
        defaultComparerCanDetermineEquality: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests.beforeTest(false, assert);
            t.defaultComparerCanDetermineEquality();
        },
        defaultComparerInvokesOverriddenGetHashCode: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests.beforeTest(false, assert);
            t.defaultComparerInvokesOverriddenGetHashCode();
        },
        defaultComparerInvokesOverriddenEquals: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericEqualityComparerTests.beforeTest(false, assert);
            t.defaultComparerInvokesOverriddenEquals();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.instance = new Bridge.ClientTest.Exceptions.ArgumentExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        },
        constructorWithMessageAndParamNameWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndParamNameWorks();
        },
        constructorWithMessageAndParamNameAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndParamNameAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.instance = new Bridge.ClientTest.Exceptions.ArgumentNullExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithParamNameWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.beforeTest(false, assert);
            t.constructorWithParamNameWorks();
        },
        constructorWithParamNameAndMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.beforeTest(false, assert);
            t.constructorWithParamNameAndMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.instance = new Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithParamNameWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.beforeTest(false, assert);
            t.constructorWithParamNameWorks();
        },
        constructorWithParamNameAndMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.beforeTest(false, assert);
            t.constructorWithParamNameAndMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        },
        constructorWithParamNameAndActualValueAndMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.beforeTest(false, assert);
            t.constructorWithParamNameAndActualValueAndMessageWorks();
        },
        rangeErrorIsConvertedToArgumentOutOfRangeException: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.beforeTest(false, assert);
            assert.expect(1);
            t.rangeErrorIsConvertedToArgumentOutOfRangeException();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.instance = new Bridge.ClientTest.Exceptions.ArithmeticExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.instance = new Bridge.ClientTest.Exceptions.DivideByZeroExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.instance = new Bridge.ClientTest.Exceptions.ExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        },
        messagePropertyCanBeOverridden: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.beforeTest(false, assert);
            t.messagePropertyCanBeOverridden();
        },
        innerExceptionPropertyCanBeOverridden: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.beforeTest(false, assert);
            t.innerExceptionPropertyCanBeOverridden();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.instance = new Bridge.ClientTest.Exceptions.FormatExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.instance = new Bridge.ClientTest.Exceptions.InvalidCastExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.instance = new Bridge.ClientTest.Exceptions.InvalidOperationExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.instance = new Bridge.ClientTest.Exceptions.KeyNotFoundExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.instance = new Bridge.ClientTest.Exceptions.NotImplementedExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.instance = new Bridge.ClientTest.Exceptions.NotSupportedExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.instance = new Bridge.ClientTest.Exceptions.NullReferenceExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        },
        accessingAFieldOnANullObjectCausesANullReferenceException: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.beforeTest(false, assert);
            assert.expect(1);
            t.accessingAFieldOnANullObjectCausesANullReferenceException();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.instance = new Bridge.ClientTest.Exceptions.OverflowExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests.instance = new Bridge.ClientTest.Exceptions.RankExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsRankExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests.instance = new Bridge.ClientTest.ExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests.getInstance();
            return r;
        },
        throwingAndCatchingExceptionsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests.beforeTest(false, assert);
            t.throwingAndCatchingExceptionsWorks();
        },
        exceptionOfWrongTypeIsNotCaught: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests.beforeTest(false, assert);
            t.exceptionOfWrongTypeIsNotCaught();
        },
        canCatchExceptionAsBaseType: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests.beforeTest(false, assert);
            t.canCatchExceptionAsBaseType();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.instance = new Bridge.ClientTest.MathTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.getInstance();
            return r;
        },
        constantsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.constantsWork();
        },
        absOfDoubleWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.absOfDoubleWorks();
        },
        absOfIntWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.absOfIntWorks();
        },
        absOfLongWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.absOfLongWorks();
        },
        absOfSbyteWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.absOfSbyteWorks();
        },
        absOfShortWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.absOfShortWorks();
        },
        absOfFloatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.absOfFloatWorks();
        },
        absOfDecimalWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.absOfDecimalWorks();
        },
        acosWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.acosWorks();
        },
        asinWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.asinWorks();
        },
        atanWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.atanWorks();
        },
        atan2Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.atan2Works();
        },
        cosWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.cosWorks();
        },
        divRemWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.divRemWorks();
        },
        expWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.expWorks();
        },
        floorOfDoubleWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.floorOfDoubleWorks();
        },
        floorOfDecimalWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.floorOfDecimalWorks();
        },
        logWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.logWorks();
        },
        maxOfByteWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.maxOfByteWorks();
        },
        maxOfDecimalWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.maxOfDecimalWorks();
        },
        maxOfDoubleWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.maxOfDoubleWorks();
        },
        maxOfShortWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.maxOfShortWorks();
        },
        maxOfIntWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.maxOfIntWorks();
        },
        maxOfLongWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.maxOfLongWorks();
        },
        maxOfSByteWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.maxOfSByteWorks();
        },
        maxOfFloatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.maxOfFloatWorks();
        },
        maxOfUShortWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.maxOfUShortWorks();
        },
        maxOfUIntWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.maxOfUIntWorks();
        },
        maxOfULongWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.maxOfULongWorks();
        },
        minOfByteWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.minOfByteWorks();
        },
        minOfDecimalWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.minOfDecimalWorks();
        },
        minOfDoubleWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.minOfDoubleWorks();
        },
        minOfShortWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.minOfShortWorks();
        },
        minOfIntWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.minOfIntWorks();
        },
        minOfLongWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.minOfLongWorks();
        },
        minOfSByteWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.minOfSByteWorks();
        },
        minOfFloatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.minOfFloatWorks();
        },
        minOfUShortWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.minOfUShortWorks();
        },
        minOfUIntWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.minOfUIntWorks();
        },
        minOfULongWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.minOfULongWorks();
        },
        powWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.powWorks();
        },
        randomWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.randomWorks();
        },
        roundOfDoubleWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.roundOfDoubleWorks();
        },
        roundDecimalWithModeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.roundDecimalWithModeWorks();
        },
        roundDecimalWithPrecisionAndModeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.roundDecimalWithPrecisionAndModeWorks();
        },
        roundDoubleWithModeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.roundDoubleWithModeWorks();
        },
        roundDoubleWithPrecisionAndModeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.roundDoubleWithPrecisionAndModeWorks();
        },
        jsRoundWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.jsRoundWorks();
        },
        iEEERemainderWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.iEEERemainderWorks();
        },
        sinWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.sinWorks();
        },
        sqrtWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.sqrtWorks();
        },
        tanWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.tanWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.instance = new Bridge.ClientTest.NullableTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        convertingToNullableWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.convertingToNullableWorks();
        },
        hasValueWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.hasValueWorks();
        },
        boxingWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.boxingWorks();
        },
        unboxingWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.unboxingWorks();
        },
        valueWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.valueWorks();
        },
        unboxingValueOfWrongTypeThrowsAnException: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.unboxingValueOfWrongTypeThrowsAnException();
        },
        getValueOrDefaultWithArgWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.getValueOrDefaultWithArgWorks();
        },
        liftedEqualityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedEqualityWorks();
        },
        liftedInequalityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedInequalityWorks();
        },
        liftedLessThanWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedLessThanWorks();
        },
        liftedGreaterThanWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedGreaterThanWorks();
        },
        liftedLessThanOrEqualWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedLessThanOrEqualWorks();
        },
        liftedGreaterThanOrEqualWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedGreaterThanOrEqualWorks();
        },
        liftedSubtractionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedSubtractionWorks();
        },
        liftedAdditionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedAdditionWorks();
        },
        liftedModWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedModWorks();
        },
        liftedFloatingPointDivisionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedFloatingPointDivisionWorks();
        },
        liftedIntegerDivisionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedIntegerDivisionWorks();
        },
        liftedMultiplicationWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedMultiplicationWorks();
        },
        liftedBitwiseAndWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedBitwiseAndWorks();
        },
        liftedBitwiseOrWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedBitwiseOrWorks();
        },
        liftedBitwiseXorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedBitwiseXorWorks();
        },
        liftedLeftShiftWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedLeftShiftWorks();
        },
        liftedSignedRightShiftWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedSignedRightShiftWorks();
        },
        liftedUnsignedRightShiftWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedUnsignedRightShiftWorks();
        },
        liftedBooleanAndWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedBooleanAndWorks();
        },
        liftedBooleanOrWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedBooleanOrWorks();
        },
        liftedBooleanNotWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedBooleanNotWorks();
        },
        liftedNegationWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedNegationWorks();
        },
        liftedUnaryPlusWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedUnaryPlusWorks();
        },
        liftedOnesComplementWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedOnesComplementWorks();
        },
        coalesceWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.coalesceWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests.instance = new Bridge.ClientTest.NumberFormatInfoTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        getFormatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests.beforeTest(false, assert);
            t.getFormatWorks();
        },
        invariantWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests.beforeTest(false, assert);
            t.invariantWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.instance = new Bridge.ClientTest.PropertyAccessorTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.getInstance();
            return r;
        },
        accessorsCanBeInvokedInstance: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.beforeTest(false, assert);
            t.accessorsCanBeInvokedInstance();
        },
        accessorsCanBeInvokedStatic: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.beforeTest(false, assert);
            t.accessorsCanBeInvokedStatic();
        },
        accessorsCanBeInvokedGeneric: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.beforeTest(false, assert);
            t.accessorsCanBeInvokedGeneric();
        },
        accessorsCanBeInvokedGenericStatic: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.beforeTest(false, assert);
            t.accessorsCanBeInvokedGenericStatic();
        },
        baseAccessorsCanBeInvoked: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.beforeTest(false, assert);
            t.baseAccessorsCanBeInvoked();
        },
        baseAccessorsCanBeInvokedGeneric: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.beforeTest(false, assert);
            t.baseAccessorsCanBeInvokedGeneric();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.instance = new Bridge.ClientTest.Text.RegularExpressions.RegexTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        stringOnlyConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.beforeTest(false, assert);
            t.stringOnlyConstructorWorks();
        },
        constructorWithFlagsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.beforeTest(false, assert);
            t.constructorWithFlagsWorks();
        },
        globalFlagWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.beforeTest(false, assert);
            t.globalFlagWorks();
        },
        ignoreCaseFlagWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.beforeTest(false, assert);
            t.ignoreCaseFlagWorks();
        },
        multilineFlagWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.beforeTest(false, assert);
            t.multilineFlagWorks();
        },
        patternPropertyWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.beforeTest(false, assert);
            t.patternPropertyWorks();
        },
        sourcePropertyWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.beforeTest(false, assert);
            t.sourcePropertyWorks();
        },
        execWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.beforeTest(false, assert);
            t.execWorks();
        },
        lastIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.beforeTest(false, assert);
            t.lastIndexWorks();
        },
        testWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.beforeTest(false, assert);
            t.testWorks();
        },
        escapeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.beforeTest(true, assert);
            Bridge.ClientTest.Text.RegularExpressions.RegexTests.escapeWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests.instance = new Bridge.ClientTest.SimpleTypes.BooleanTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultValueIsFalse: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests.beforeTest(false, assert);
            t.defaultValueIsFalse();
        },
        creatingInstanceReturnsFalse: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests.beforeTest(false, assert);
            t.creatingInstanceReturnsFalse();
        },
        defaultConstructorReturnsFalse: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests.beforeTest(false, assert);
            t.defaultConstructorReturnsFalse();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        objectEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests.beforeTest(false, assert);
            t.objectEqualsWorks();
        },
        boolEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesBooleanTests.beforeTest(false, assert);
            t.boolEqualsWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.instance = new Bridge.ClientTest.SimpleTypes.ByteTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        castsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.castsWork();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.defaultValueIs0();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        constantsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.constantsWork();
        },
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        tryParseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.tryParseWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.parseWorks();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.instance = new Bridge.ClientTest.SimpleTypes.CharTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.getInstance();
            return r;
        },
        typePropertiesAreInt32: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.typePropertiesAreInt32();
        },
        castsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.castsWork();
        },
        defaultValueWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.defaultValueWorks();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        constantsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.constantsWork();
        },
        charComparisonWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.charComparisonWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.parseWorks();
        },
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        toStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.toStringWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.compareToWorks();
        },
        isLowerWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.isLowerWorks();
        },
        isUpperWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.isUpperWorks();
        },
        toLowerWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.toLowerWorks();
        },
        toUpperWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.toUpperWorks();
        },
        isDigitWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.isDigitWorks();
        },
        isWhiteSpaceWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.isWhiteSpaceWorks();
        },
        isDigitWithStringAndIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.isDigitWithStringAndIndexWorks();
        },
        isWhiteSpaceWithStringAndIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.isWhiteSpaceWithStringAndIndexWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.instance = new Bridge.ClientTest.SimpleTypes.DecimalTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.defaultValueIs0();
        },
        constantsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.constantsWork();
        },
        convertingConstructorsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.convertingConstructorsWork();
        },
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        addWithStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.addWithStringWorks();
        },
        conversionsToDecimalWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.conversionsToDecimalWork();
        },
        conversionsFromDecimalWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.conversionsFromDecimalWork();
        },
        operatorsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.operatorsWork();
        },
        addWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.addWorks();
        },
        ceilingWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.ceilingWorks();
        },
        divideWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.divideWorks();
        },
        floorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.floorWorks();
        },
        remainderWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.remainderWorks();
        },
        multiplyWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.multiplyWorks();
        },
        negateWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.negateWorks();
        },
        roundWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.roundWorks();
        },
        roundWithModeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.roundWithModeWorks();
        },
        subtractWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.subtractWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        objectEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.objectEqualsWorks();
        },
        decimalEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.decimalEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.compareToWorks();
        },
        fullCoalesceWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.fullCoalesceWorks();
        },
        shortCoalesceWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.shortCoalesceWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.instance = new Bridge.ClientTest.SimpleTypes.DoubleTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.defaultValueIs0();
        },
        constantsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.constantsWork();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        toStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.toStringWorks();
        },
        toExponentialWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.toExponentialWorks();
        },
        toExponentialWithFractionalDigitsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.toExponentialWithFractionalDigitsWorks();
        },
        toFixed: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.toFixed();
        },
        toFixedWithFractionalDigitsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.toFixedWithFractionalDigitsWorks();
        },
        toPrecisionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.toPrecisionWorks();
        },
        toPrecisionWithPrecisionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.toPrecisionWithPrecisionWorks();
        },
        isPositiveInfinityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.isPositiveInfinityWorks();
        },
        isNegativeInfinityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.isNegativeInfinityWorks();
        },
        isInfinityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.isInfinityWorks();
        },
        isFiniteWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.isFiniteWorks();
        },
        isNaNWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.isNaNWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        objectEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.objectEqualsWorks();
        },
        doubleEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.doubleEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.compareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.instance = new Bridge.ClientTest.SimpleTypes.Int16Tests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        castsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.castsWork();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.defaultValueIs0();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        constantsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.constantsWork();
        },
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        tryParseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.tryParseWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.parseWorks();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.instance = new Bridge.ClientTest.SimpleTypes.Int32Tests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        castsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.castsWork();
        },
        typeIsWorksForInt32: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.typeIsWorksForInt32();
        },
        typeAsWorksForInt32: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.typeAsWorksForInt32();
        },
        unboxingWorksForInt32: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.unboxingWorksForInt32();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.defaultValueIs0();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        constantsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.constantsWork();
        },
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        tryParseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.tryParseWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.parseWorks();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.iComparableCompareToWorks();
        },
        integerDivisionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.integerDivisionWorks();
        },
        integerModuloWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.integerModuloWorks();
        },
        integerDivisionByZeroThrowsDivideByZeroException: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.integerDivisionByZeroThrowsDivideByZeroException();
        },
        doublesAreTruncatedWhenConvertedToIntegers: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.doublesAreTruncatedWhenConvertedToIntegers();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.instance = new Bridge.ClientTest.SimpleTypes.Int64Tests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        castsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.castsWork();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.defaultValueIs0();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        tryParseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.tryParseWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.parseWorks();
        },
        castingOfLargeDoublesToInt64Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.castingOfLargeDoublesToInt64Works();
        },
        divisionOfLargeInt64Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.divisionOfLargeInt64Works();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.instance = new Bridge.ClientTest.SimpleTypes.ObjectTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        canGetHashCodeForObject: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.beforeTest(false, assert);
            t.canGetHashCodeForObject();
        },
        repeatedCallsToGetHashCodeReturnsSameValue: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.beforeTest(false, assert);
            t.repeatedCallsToGetHashCodeReturnsSameValue();
        },
        objectIsEqualToItself: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.beforeTest(false, assert);
            t.objectIsEqualToItself();
        },
        objectIsNotEqualToOtherObject: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.beforeTest(false, assert);
            t.objectIsNotEqualToOtherObject();
        },
        staticEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.beforeTest(false, assert);
            t.staticEqualsWorks();
        },
        referenceEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.beforeTest(false, assert);
            t.referenceEqualsWorks();
        },
        toStringOverride: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.beforeTest(false, assert);
            t.toStringOverride();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.instance = new Bridge.ClientTest.SimpleTypes.SByteTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        castsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.castsWork();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.defaultValueIs0();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        constantsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.constantsWork();
        },
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        tryParseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.tryParseWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.parseWorks();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.instance = new Bridge.ClientTest.SimpleTypes.SingleTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.defaultValueIs0();
        },
        constantsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.constantsWork();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        toStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.toStringWorks();
        },
        toExponentialWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.toExponentialWorks();
        },
        toExponentialWithFractionalDigitsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.toExponentialWithFractionalDigitsWorks();
        },
        toFixed: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.toFixed();
        },
        toFixedWithFractionalDigitsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.toFixedWithFractionalDigitsWorks();
        },
        toPrecisionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.toPrecisionWorks();
        },
        toPrecisionWithPrecisionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.toPrecisionWithPrecisionWorks();
        },
        isPositiveInfinityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.isPositiveInfinityWorks();
        },
        isNegativeInfinityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.isNegativeInfinityWorks();
        },
        isInfinityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.isInfinityWorks();
        },
        isFiniteWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.isFiniteWorks();
        },
        isNaNWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.isNaNWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.equalsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.compareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.instance = new Bridge.ClientTest.SimpleTypes.TupleTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.getInstance();
            return r;
        },
        tuple1Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.beforeTest(false, assert);
            t.tuple1Works();
        },
        tuple2Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.beforeTest(false, assert);
            t.tuple2Works();
        },
        tuple3Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.beforeTest(false, assert);
            t.tuple3Works();
        },
        tuple4Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.beforeTest(false, assert);
            t.tuple4Works();
        },
        tuple5Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.beforeTest(false, assert);
            t.tuple5Works();
        },
        tuple6Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.beforeTest(false, assert);
            t.tuple6Works();
        },
        tuple7Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.beforeTest(false, assert);
            t.tuple7Works();
        },
        tuple8Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.beforeTest(false, assert);
            t.tuple8Works();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.instance = new Bridge.ClientTest.SimpleTypes.UInt16Tests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        castsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.castsWork();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.defaultValueIs0();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        constantsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.constantsWork();
        },
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        tryParseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.tryParseWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.parseWorks();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.instance = new Bridge.ClientTest.SimpleTypes.UInt32Tests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        castsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.castsWork();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.defaultValueIs0();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        constantsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.constantsWork();
        },
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        tryParseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.tryParseWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.parseWorks();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.instance = new Bridge.ClientTest.SimpleTypes.UInt64Tests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        castsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.castsWork();
        },
        defaultValueIs0: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.defaultValueIs0();
        },
        defaultConstructorReturnsZero: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.defaultConstructorReturnsZero();
        },
        constantsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.constantsWork();
        },
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.formatWorks();
        },
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        castingOfLargeValuesToUInt64Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.castingOfLargeValuesToUInt64Works();
        },
        divisionOfLargeUInt64Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.divisionOfLargeUInt64Works();
        },
        tryParseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.tryParseWorks();
        },
        parseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.parseWorks();
        },
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.equalsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.instance = new Bridge.ClientTest.SimpleTypes.StringTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        copyConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.copyConstructorWorks();
        },
        charAndCountConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.charAndCountConstructorWorks();
        },
        charArrayConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.charArrayConstructorWorks();
        },
        emptyFieldWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.emptyFieldWorks();
        },
        lengthPropertyWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.lengthPropertyWorks();
        },
        charAtWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.charAtWorks();
        },
        charCodeAtWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.charCodeAtWorks();
        },
        compareWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.compareWorks();
        },
        compareWithIgnoreCaseArgWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.compareWithIgnoreCaseArgWorks();
        },
        concatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.concatWorks();
        },
        concatWithObjectsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.concatWithObjectsWorks();
        },
        endsWithCharWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.endsWithCharWorks();
        },
        endsWithStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.endsWithStringWorks();
        },
        staticEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.staticEqualsWorks();
        },
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.formatWorks();
        },
        formatWorksWithIFormattable: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.formatWorksWithIFormattable();
        },
        formatCanUseEscapedBraces: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.formatCanUseEscapedBraces();
        },
        fromCharCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.fromCharCodeWorks();
        },
        indexOfCharWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.indexOfCharWorks();
        },
        indexOfStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.indexOfStringWorks();
        },
        indexOfCharWithStartIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.indexOfCharWithStartIndexWorks();
        },
        indexOfCharWithStartIndexAndCountWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.indexOfCharWithStartIndexAndCountWorks();
        },
        indexOfStringWithStartIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.indexOfStringWithStartIndexWorks();
        },
        indexOfStringWithStartIndexAndCountWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.indexOfStringWithStartIndexAndCountWorks();
        },
        indexOfAnyWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.indexOfAnyWorks();
        },
        indexOfAnyWithStartIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.indexOfAnyWithStartIndexWorks();
        },
        indexOfAnyWithStartIndexAndCountWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.indexOfAnyWithStartIndexAndCountWorks();
        },
        insertWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.insertWorks();
        },
        isNullOrEmptyWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.isNullOrEmptyWorks();
        },
        lastIndexOfCharWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.lastIndexOfCharWorks();
        },
        lastIndexOfStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.lastIndexOfStringWorks();
        },
        lastIndexOfCharWithStartIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.lastIndexOfCharWithStartIndexWorks();
        },
        lastIndexOfStringWithStartIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.lastIndexOfStringWithStartIndexWorks();
        },
        lastIndexOfCharWithStartIndexAndCountWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.lastIndexOfCharWithStartIndexAndCountWorks();
        },
        lastIndexOfStringWithStartIndexAndCountWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.lastIndexOfStringWithStartIndexAndCountWorks();
        },
        lastIndexOfAnyWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.lastIndexOfAnyWorks();
        },
        lastIndexOfAnyWithStartIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.lastIndexOfAnyWithStartIndexWorks();
        },
        lastIndexOfAnyWithStartIndexAndCountWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.lastIndexOfAnyWithStartIndexAndCountWorks();
        },
        localeCompareWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.localeCompareWorks();
        },
        matchWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.matchWorks();
        },
        padLeftWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.padLeftWorks();
        },
        padLeftWithCharWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.padLeftWithCharWorks();
        },
        padRightWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.padRightWorks();
        },
        padRightWithCharWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.padRightWithCharWorks();
        },
        removeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.removeWorks();
        },
        removeWithCountWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.removeWithCountWorks();
        },
        replaceWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.replaceWorks();
        },
        replaceCharWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.replaceCharWorks();
        },
        replaceRegexWithReplaceTextWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.replaceRegexWithReplaceTextWorks();
        },
        replaceRegexWithReplaceCallbackWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.replaceRegexWithReplaceCallbackWorks();
        },
        searchWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.searchWorks();
        },
        splitWithStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.splitWithStringWorks();
        },
        splitWithCharWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.splitWithCharWorks();
        },
        jsSplitWithStringAndLimitWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.jsSplitWithStringAndLimitWorks();
        },
        jsSplitWithCharAndLimitWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.jsSplitWithCharAndLimitWorks();
        },
        splitWithCharsAndLimitWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.splitWithCharsAndLimitWorks();
        },
        splitWithCharsAndStringSplitOptionsAndLimitWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.splitWithCharsAndStringSplitOptionsAndLimitWorks();
        },
        splitWithRegexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.splitWithRegexWorks();
        },
        someNetSplitTests: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.someNetSplitTests();
        },
        splitWithCharsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.splitWithCharsWorks();
        },
        splitWithStringsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.splitWithStringsWorks();
        },
        splitWithStringsAndLimitWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.splitWithStringsAndLimitWorks();
        },
        startsWithCharWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.startsWithCharWorks();
        },
        startsWithStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.startsWithStringWorks();
        },
        substrWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.substrWorks();
        },
        substrWithLengthWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.substrWithLengthWorks();
        },
        substringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.substringWorks();
        },
        substringWithLengthWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.substringWithLengthWorks();
        },
        toLowerCaseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.toLowerCaseWorks();
        },
        toUpperCaseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.toUpperCaseWorks();
        },
        toLowerWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.toLowerWorks();
        },
        toUpperWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.toUpperWorks();
        },
        trimWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.trimWorks();
        },
        trimCharsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.trimCharsWorks();
        },
        trimStartCharsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.trimStartCharsWorks();
        },
        trimEndCharsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.trimEndCharsWorks();
        },
        trimStartWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.trimStartWorks();
        },
        trimEndWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.trimEndWorks();
        },
        stringEqualityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.stringEqualityWorks();
        },
        stringInequalityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.stringInequalityWorks();
        },
        stringIndexingWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.stringIndexingWorks();
        },
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        instanceEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.instanceEqualsWorks();
        },
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        stringEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.stringEqualsWorks();
        },
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.compareToWorks();
        },
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.iComparableCompareToWorks();
        },
        joinWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.joinWorks();
        },
        containsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.containsWorks();
        },
        toCharArrayWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.toCharArrayWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.instance = new Bridge.ClientTest.Text.StringBuilderTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        constructorWithCapacityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.constructorWithCapacityWorks();
        },
        initialTextConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.initialTextConstructorWorks();
        },
        initialTextConstructorWithCapacityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.initialTextConstructorWithCapacityWorks();
        },
        substringConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.substringConstructorWorks();
        },
        appendBoolWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.appendBoolWorks();
        },
        appendCharWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.appendCharWorks();
        },
        appendIntWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.appendIntWorks();
        },
        appendDoubleWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.appendDoubleWorks();
        },
        appendObjectWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.appendObjectWorks();
        },
        appendStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.appendStringWorks();
        },
        appendLineWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.appendLineWorks();
        },
        appendLineStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.appendLineStringWorks();
        },
        clearWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.clearWorks();
        },
        toStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.toStringWorks();
        },
        lengthPropertyWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.lengthPropertyWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests.instance = new Bridge.ClientTest.EnvironmentTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests.getInstance();
            return r;
        },
        newLineIsAStringContainingOnlyTheNewLineChar: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests.beforeTest(false, assert);
            t.newLineIsAStringContainingOnlyTheNewLineChar();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests.instance = new Bridge.ClientTest.CultureInfoTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests.getInstance();
            return r;
        },
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        getFormatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests.beforeTest(false, assert);
            t.getFormatWorks();
        },
        invariantWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests.beforeTest(false, assert);
            t.invariantWorks();
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIComparableTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIComparableTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIComparableTests.instance = new Bridge.ClientTest.IComparableTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIComparableTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIComparableTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIComparableTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIComparableTests.getInstance();
            return r;
        }
    }
});

Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIEquatableTests', {
    statics: {
        instance: null,
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIEquatableTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIEquatableTests.instance = new Bridge.ClientTest.IEquatableTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIEquatableTests.instance;
        },
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIEquatableTests.instance = value;
        },
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIEquatableTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestIEquatableTests.getInstance();
            return r;
        }
    }
});

Bridge.init();