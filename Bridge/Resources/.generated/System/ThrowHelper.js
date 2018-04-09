    Bridge.define("System.ThrowHelper", {
        statics: {
            methods: {
                ThrowArrayTypeMismatchException: function () {
                    throw new System.ArrayTypeMismatchException.ctor();
                },
                ThrowInvalidTypeWithPointersNotSupported: function (targetType) {
                    throw new System.ArgumentException.$ctor1(System.SR.Format("Cannot use type '{0}'. Only value types without pointers or references are supported.", targetType));
                },
                ThrowIndexOutOfRangeException: function () {
                    throw new System.IndexOutOfRangeException.ctor();
                },
                ThrowArgumentOutOfRangeException: function () {
                    throw new System.ArgumentOutOfRangeException.ctor();
                },
                ThrowArgumentOutOfRangeException$1: function (argument) {
                    throw new System.ArgumentOutOfRangeException.$ctor1(System.ThrowHelper.GetArgumentName(argument));
                },
                ThrowArgumentOutOfRangeException$2: function (argument, resource) {
                    throw System.ThrowHelper.GetArgumentOutOfRangeException(argument, resource);
                },
                ThrowArgumentOutOfRangeException$3: function (argument, paramNumber, resource) {
                    throw System.ThrowHelper.GetArgumentOutOfRangeException$1(argument, paramNumber, resource);
                },
                ThrowArgumentException_DestinationTooShort: function () {
                    throw new System.ArgumentException.$ctor1("Destination is too short.");
                },
                ThrowArgumentException_OverlapAlignmentMismatch: function () {
                    throw new System.ArgumentException.$ctor1("Overlapping spans have mismatching alignment.");
                },
                ThrowArgumentOutOfRange_IndexException: function () {
                    throw System.ThrowHelper.GetArgumentOutOfRangeException(System.ExceptionArgument.index, System.ExceptionResource.ArgumentOutOfRange_Index);
                },
                ThrowIndexArgumentOutOfRange_NeedNonNegNumException: function () {
                    throw System.ThrowHelper.GetArgumentOutOfRangeException(System.ExceptionArgument.index, System.ExceptionResource.ArgumentOutOfRange_NeedNonNegNum);
                },
                ThrowLengthArgumentOutOfRange_ArgumentOutOfRange_NeedNonNegNum: function () {
                    throw System.ThrowHelper.GetArgumentOutOfRangeException(System.ExceptionArgument.$length, System.ExceptionResource.ArgumentOutOfRange_NeedNonNegNum);
                },
                ThrowStartIndexArgumentOutOfRange_ArgumentOutOfRange_Index: function () {
                    throw System.ThrowHelper.GetArgumentOutOfRangeException(System.ExceptionArgument.startIndex, System.ExceptionResource.ArgumentOutOfRange_Index);
                },
                ThrowCountArgumentOutOfRange_ArgumentOutOfRange_Count: function () {
                    throw System.ThrowHelper.GetArgumentOutOfRangeException(System.ExceptionArgument.count, System.ExceptionResource.ArgumentOutOfRange_Count);
                },
                ThrowWrongKeyTypeArgumentException: function (T, key, targetType) {
                    throw System.ThrowHelper.GetWrongKeyTypeArgumentException(key, targetType);
                },
                ThrowWrongValueTypeArgumentException: function (T, value, targetType) {
                    throw System.ThrowHelper.GetWrongValueTypeArgumentException(value, targetType);
                },
                GetAddingDuplicateWithKeyArgumentException: function (key) {
                    return new System.ArgumentException.$ctor1(System.SR.Format("An item with the same key has already been added. Key: {0}", key));
                },
                ThrowAddingDuplicateWithKeyArgumentException: function (T, key) {
                    throw System.ThrowHelper.GetAddingDuplicateWithKeyArgumentException(key);
                },
                ThrowKeyNotFoundException: function (T, key) {
                    throw System.ThrowHelper.GetKeyNotFoundException(key);
                },
                ThrowArgumentException: function (resource) {
                    throw System.ThrowHelper.GetArgumentException(resource);
                },
                ThrowArgumentException$1: function (resource, argument) {
                    throw System.ThrowHelper.GetArgumentException$1(resource, argument);
                },
                GetArgumentNullException: function (argument) {
                    return new System.ArgumentNullException.$ctor1(System.ThrowHelper.GetArgumentName(argument));
                },
                ThrowArgumentNullException: function (argument) {
                    throw System.ThrowHelper.GetArgumentNullException(argument);
                },
                ThrowArgumentNullException$2: function (resource) {
                    throw new System.ArgumentNullException.$ctor1(System.ThrowHelper.GetResourceString(resource));
                },
                ThrowArgumentNullException$1: function (argument, resource) {
                    throw new System.ArgumentNullException.$ctor3(System.ThrowHelper.GetArgumentName(argument), System.ThrowHelper.GetResourceString(resource));
                },
                ThrowInvalidOperationException: function (resource) {
                    throw System.ThrowHelper.GetInvalidOperationException(resource);
                },
                ThrowInvalidOperationException$1: function (resource, e) {
                    throw new System.InvalidOperationException.$ctor2(System.ThrowHelper.GetResourceString(resource), e);
                },
                ThrowInvalidOperationException_OutstandingReferences: function () {
                    System.ThrowHelper.ThrowInvalidOperationException(System.ExceptionResource.Memory_OutstandingReferences);
                },
                ThrowSerializationException: function (resource) {
                    throw new System.Runtime.Serialization.SerializationException.$ctor1(System.ThrowHelper.GetResourceString(resource));
                },
                ThrowSecurityException: function (resource) {
                    throw new System.Security.SecurityException.$ctor1(System.ThrowHelper.GetResourceString(resource));
                },
                ThrowRankException: function (resource) {
                    throw new System.RankException.$ctor1(System.ThrowHelper.GetResourceString(resource));
                },
                ThrowNotSupportedException$1: function (resource) {
                    throw new System.NotSupportedException.$ctor1(System.ThrowHelper.GetResourceString(resource));
                },
                ThrowNotSupportedException: function () {
                    throw new System.NotSupportedException.ctor();
                },
                ThrowUnauthorizedAccessException: function (resource) {
                    throw new System.UnauthorizedAccessException.$ctor1(System.ThrowHelper.GetResourceString(resource));
                },
                ThrowObjectDisposedException$1: function (objectName, resource) {
                    throw new System.ObjectDisposedException.$ctor3(objectName, System.ThrowHelper.GetResourceString(resource));
                },
                ThrowObjectDisposedException: function (resource) {
                    throw new System.ObjectDisposedException.$ctor3(null, System.ThrowHelper.GetResourceString(resource));
                },
                ThrowObjectDisposedException_MemoryDisposed: function () {
                    throw new System.ObjectDisposedException.$ctor3("OwnedMemory<T>", System.ThrowHelper.GetResourceString(System.ExceptionResource.MemoryDisposed));
                },
                ThrowAggregateException: function (exceptions) {
                    throw new System.AggregateException(null, exceptions);
                },
                ThrowOutOfMemoryException: function () {
                    throw new System.OutOfMemoryException.ctor();
                },
                ThrowArgumentException_Argument_InvalidArrayType: function () {
                    throw System.ThrowHelper.GetArgumentException(System.ExceptionResource.Argument_InvalidArrayType);
                },
                ThrowInvalidOperationException_InvalidOperation_EnumNotStarted: function () {
                    throw System.ThrowHelper.GetInvalidOperationException(System.ExceptionResource.InvalidOperation_EnumNotStarted);
                },
                ThrowInvalidOperationException_InvalidOperation_EnumEnded: function () {
                    throw System.ThrowHelper.GetInvalidOperationException(System.ExceptionResource.InvalidOperation_EnumEnded);
                },
                ThrowInvalidOperationException_EnumCurrent: function (index) {
                    throw System.ThrowHelper.GetInvalidOperationException_EnumCurrent(index);
                },
                ThrowInvalidOperationException_InvalidOperation_EnumFailedVersion: function () {
                    throw System.ThrowHelper.GetInvalidOperationException(System.ExceptionResource.InvalidOperation_EnumFailedVersion);
                },
                ThrowInvalidOperationException_InvalidOperation_EnumOpCantHappen: function () {
                    throw System.ThrowHelper.GetInvalidOperationException(System.ExceptionResource.InvalidOperation_EnumOpCantHappen);
                },
                ThrowInvalidOperationException_InvalidOperation_NoValue: function () {
                    throw System.ThrowHelper.GetInvalidOperationException(System.ExceptionResource.InvalidOperation_NoValue);
                },
                ThrowArraySegmentCtorValidationFailedExceptions: function (array, offset, count) {
                    throw System.ThrowHelper.GetArraySegmentCtorValidationFailedException(array, offset, count);
                },
                GetArraySegmentCtorValidationFailedException: function (array, offset, count) {
                    if (array == null) {
                        return System.ThrowHelper.GetArgumentNullException(System.ExceptionArgument.array);
                    }
                    if (offset < 0) {
                        return System.ThrowHelper.GetArgumentOutOfRangeException(System.ExceptionArgument.offset, System.ExceptionResource.ArgumentOutOfRange_NeedNonNegNum);
                    }
                    if (count < 0) {
                        return System.ThrowHelper.GetArgumentOutOfRangeException(System.ExceptionArgument.count, System.ExceptionResource.ArgumentOutOfRange_NeedNonNegNum);
                    }

                    return System.ThrowHelper.GetArgumentException(System.ExceptionResource.Argument_InvalidOffLen);
                },
                GetArgumentException: function (resource) {
                    return new System.ArgumentException.$ctor1(System.ThrowHelper.GetResourceString(resource));
                },
                GetArgumentException$1: function (resource, argument) {
                    return new System.ArgumentException.$ctor3(System.ThrowHelper.GetResourceString(resource), System.ThrowHelper.GetArgumentName(argument));
                },
                GetInvalidOperationException: function (resource) {
                    return new System.InvalidOperationException.$ctor1(System.ThrowHelper.GetResourceString(resource));
                },
                GetWrongKeyTypeArgumentException: function (key, targetType) {
                    return new System.ArgumentException.$ctor3(System.SR.Format$1("The value \"{0}\" is not of type \"{1}\" and cannot be used in this generic collection.", key, targetType), "key");
                },
                GetWrongValueTypeArgumentException: function (value, targetType) {
                    return new System.ArgumentException.$ctor3(System.SR.Format$1("The value \"{0}\" is not of type \"{1}\" and cannot be used in this generic collection.", value, targetType), "value");
                },
                GetKeyNotFoundException: function (key) {
                    return new System.Collections.Generic.KeyNotFoundException.$ctor1(System.SR.Format("The given key '{0}' was not present in the dictionary.", Bridge.toString(key)));
                },
                GetArgumentOutOfRangeException: function (argument, resource) {
                    return new System.ArgumentOutOfRangeException.$ctor4(System.ThrowHelper.GetArgumentName(argument), System.ThrowHelper.GetResourceString(resource));
                },
                GetArgumentOutOfRangeException$1: function (argument, paramNumber, resource) {
                    return new System.ArgumentOutOfRangeException.$ctor4((System.ThrowHelper.GetArgumentName(argument) || "") + "[" + (Bridge.toString(paramNumber) || "") + "]", System.ThrowHelper.GetResourceString(resource));
                },
                GetInvalidOperationException_EnumCurrent: function (index) {
                    return System.ThrowHelper.GetInvalidOperationException(index < 0 ? System.ExceptionResource.InvalidOperation_EnumNotStarted : System.ExceptionResource.InvalidOperation_EnumEnded);
                },
                IfNullAndNullsAreIllegalThenThrow: function (T, value, argName) {
                    if (!(Bridge.getDefaultValue(T) == null) && value == null) {
                        System.ThrowHelper.ThrowArgumentNullException(argName);
                    }
                },
                GetArgumentName: function (argument) {

                    return System.Enum.toString(System.ExceptionArgument, argument);
                },
                GetResourceString: function (resource) {

                    return System.SR.GetResourceString(System.Enum.toString(System.ExceptionResource, resource));
                },
                ThrowNotSupportedExceptionIfNonNumericType: function (T) {
                    if (!Bridge.referenceEquals(T, System.Byte) && !Bridge.referenceEquals(T, System.SByte) && !Bridge.referenceEquals(T, System.Int16) && !Bridge.referenceEquals(T, System.UInt16) && !Bridge.referenceEquals(T, System.Int32) && !Bridge.referenceEquals(T, System.UInt32) && !Bridge.referenceEquals(T, System.Int64) && !Bridge.referenceEquals(T, System.UInt64) && !Bridge.referenceEquals(T, System.Single) && !Bridge.referenceEquals(T, System.Double)) {
                        throw new System.NotSupportedException.$ctor1("Specified type is not supported");
                    }
                }
            }
        }
    });
