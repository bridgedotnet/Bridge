/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.Data', {
    config: {
        properties: {
            Count: 0
        }
    }
});

Bridge.define('ClientTestLibrary.TestTryCatchFinallyBlocks', {
    statics: {
        config: {
            properties: {
                IsATry: false,
                IsACatch: false,
                IsAFinally: false,
                IsBTry: false,
                IsBCatch: false,
                IsBFinally: false,
                IsCTry: false,
                IsCCatch: false,
                IsCFinally: false,
                IsDTry: false,
                IsDCatch: false,
                IsDFinally: false
            }
        },
        simpleTryCatchFinally: function (assert) {
            assert.expect(1);

            var data = new ClientTestLibrary.Data();
            ClientTestLibrary.TestTryCatchFinallyBlocks.tryCatchFinally(data);

            assert.equal(data.getCount(), 2, "TryCatchFinally() executes");
        },
        caughtExceptions: function (assert) {
            assert.expect(4);

            var data = new ClientTestLibrary.Data();
            ClientTestLibrary.TestTryCatchFinallyBlocks.tryCatchFinallyWithCaughtException(data);

            assert.equal(data.getCount(), 7, "Exception catch, Finally works");

            data = new ClientTestLibrary.Data();
            ClientTestLibrary.TestTryCatchFinallyBlocks.tryCatchFinallyWithCaughtTypedException(data);

            assert.equal(data.getCount(), 7, "Typed exception catch, Finally works");

            data = new ClientTestLibrary.Data();
            var exceptionMessage = ClientTestLibrary.TestTryCatchFinallyBlocks.tryCatchFinallyWithCaughtArgumentException(data);

            assert.equal(exceptionMessage, "catch me", "Typed exception catch with exception message");
            assert.equal(data.getCount(), 7, "Typed exception catch with exception message, Finally works");
        },
        thrownExceptions: function (assert) {
            assert.expect(16);

            //#230
            assert.throws(ClientTestLibrary.TestTryCatchFinallyBlocks.tryCatchFinallyWithNotCaughtTypedException, "catch me", "A. Typed exception is not caught");
            assert.ok(ClientTestLibrary.TestTryCatchFinallyBlocks.getIsATry(), "A. exception not caught - try section called");
            assert.ok(!ClientTestLibrary.TestTryCatchFinallyBlocks.getIsACatch(), "A. exception not caught - catch section not called");
            assert.ok(ClientTestLibrary.TestTryCatchFinallyBlocks.getIsAFinally(), "A. exception not caught - finally section called");

            //#229
            assert.throws(ClientTestLibrary.TestTryCatchFinallyBlocks.tryCatchWithNotCaughtTypedExceptionAndArgument, "catch me", "[#229] B. Typed exception is not caught; and argument");
            assert.ok(ClientTestLibrary.TestTryCatchFinallyBlocks.getIsBTry(), "B. exception not caught - try section called");
            assert.ok(!ClientTestLibrary.TestTryCatchFinallyBlocks.getIsBCatch(), "B. exception not caught - catch section not called");
            assert.ok(ClientTestLibrary.TestTryCatchFinallyBlocks.getIsBFinally(), "B. exception not caught - finally section called");

            //#231
            assert.throws(ClientTestLibrary.TestTryCatchFinallyBlocks.tryCatchWithRethrow, "catch me", "[#231] C. Rethrow");
            assert.ok(ClientTestLibrary.TestTryCatchFinallyBlocks.getIsCTry(), "C. exception caught and re-thrown  - try section called");
            assert.ok(ClientTestLibrary.TestTryCatchFinallyBlocks.getIsCCatch(), "C. exception caught and re-thrown  - catch section called");
            assert.ok(ClientTestLibrary.TestTryCatchFinallyBlocks.getIsCFinally(), "C. exception caught and re-thrown  - finally section called");

            assert.throws(ClientTestLibrary.TestTryCatchFinallyBlocks.tryCatchWithRethrowEx, function (error) {
                return error.toString() === "catch me";
            }, "D. Rethrow with parameter");
            assert.ok(ClientTestLibrary.TestTryCatchFinallyBlocks.getIsDTry(), "D. exception caught and re-thrown  - try section called");
            assert.ok(ClientTestLibrary.TestTryCatchFinallyBlocks.getIsDCatch(), "D. exception caught and re-thrown  - catch section called");
            assert.ok(ClientTestLibrary.TestTryCatchFinallyBlocks.getIsDFinally(), "D. exception caught and re-thrown  - finally section called");
        },
        tryCatchFinally: function (data) {
            try {
                data.setCount(data.getCount()+1);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
            }
            finally {
                data.setCount(data.getCount()+1);
            }
        },
        tryCatchFinallyWithCaughtException: function (data) {
            try {
                data.setCount(data.getCount() + 1);
                throw new Bridge.Exception();
                data.setCount(data.getCount() - 1);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                data.setCount(data.getCount() + 2);
            }
            finally {
                data.setCount(data.getCount() + 4);
            }
        },
        tryCatchFinallyWithCaughtTypedException: function (data) {
            try {
                data.setCount(data.getCount() + 1);
                throw new Bridge.Exception("catch me");
                data.setCount(data.getCount() - 1);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                data.setCount(data.getCount() + 2);
            }
            finally {
                data.setCount(data.getCount() + 4);
            }
        },
        tryCatchFinallyWithCaughtArgumentException: function (data) {
            try {
                data.setCount(data.getCount() + 1);
                throw new Bridge.ArgumentException("catch me");
                data.setCount(data.getCount() - 1);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                var ex;
                if (Bridge.is($e, Bridge.ArgumentException)) {
                    ex = $e;
                    data.setCount(data.getCount() + 2);

                    return ex.getMessage();
                }
                else {
                    throw $e;
                }
            }
            finally {
                data.setCount(data.getCount() + 4);
            }
        },
        tryCatchFinallyWithNotCaughtTypedException: function () {
            ClientTestLibrary.TestTryCatchFinallyBlocks.setIsATry(false);
            ClientTestLibrary.TestTryCatchFinallyBlocks.setIsACatch(false);
            ClientTestLibrary.TestTryCatchFinallyBlocks.setIsAFinally(false);

            try {
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsATry(true);
                throw new Bridge.Exception("catch me");
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsATry(false);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                if (Bridge.is($e, Bridge.ArgumentException)) {
                    ClientTestLibrary.TestTryCatchFinallyBlocks.setIsACatch(true);
                }
                else {
                    throw $e;
                }
            }
            finally {
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsAFinally(true);
            }
        },
        tryCatchWithNotCaughtTypedExceptionAndArgument: function () {
            ClientTestLibrary.TestTryCatchFinallyBlocks.setIsBTry(false);
            ClientTestLibrary.TestTryCatchFinallyBlocks.setIsBCatch(false);
            ClientTestLibrary.TestTryCatchFinallyBlocks.setIsBFinally(false);

            try {
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsBTry(true);
                throw new Bridge.Exception("catch me");
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsBTry(false);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                var ex;
                if (Bridge.is($e, Bridge.InvalidCastException)) {
                    ex = $e;
                    var s = ex.getMessage();
                    ClientTestLibrary.TestTryCatchFinallyBlocks.setIsBCatch(true);
                }
                else {
                    throw $e;
                }
            }
            finally {
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsBFinally(true);
            }
        },
        tryCatchWithRethrow: function () {
            ClientTestLibrary.TestTryCatchFinallyBlocks.setIsCTry(false);
            ClientTestLibrary.TestTryCatchFinallyBlocks.setIsCCatch(false);
            ClientTestLibrary.TestTryCatchFinallyBlocks.setIsCFinally(false);

            try {
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsCTry(true);
                throw new Bridge.InvalidOperationException("catch me");
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsCTry(false);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsCCatch(true);
                throw $e;
            }
            finally {
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsCFinally(true);
            }
        },
        tryCatchWithRethrowEx: function () {
            ClientTestLibrary.TestTryCatchFinallyBlocks.setIsDTry(false);
            ClientTestLibrary.TestTryCatchFinallyBlocks.setIsDCatch(false);
            ClientTestLibrary.TestTryCatchFinallyBlocks.setIsDFinally(false);

            try {
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsDTry(true);
                throw new Bridge.ArgumentException("catch me");
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsDTry(false);
            }
            catch (ex) {
                ex = Bridge.Exception.create(ex);
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsDCatch(true);
                throw ex;
            }
            finally {
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsDFinally(true);
            }
        }
    }
});



Bridge.init();