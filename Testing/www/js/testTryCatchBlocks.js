/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.TestTryCatchBlocks', {
    statics: {
        config: {
            properties: {
                IsATry: false,
                IsACatch: false,
                IsBTry: false,
                IsBCatch: false,
                IsCTry: false,
                IsCCatch: false,
                IsDTry: false,
                IsDCatch: false
            }
        },
        simpleTryCatch: function (assert) {
            assert.expect(1);

            var result = ClientTestLibrary.TestTryCatchBlocks.tryCatch("Good");

            assert.equal(result, "Good", "TryCatch() executes");
        },
        caughtExceptions: function (assert) {
            assert.expect(3);

            ClientTestLibrary.TestTryCatchBlocks.tryCatchWithCaughtException();
            assert.ok(true, "Exception catch");

            ClientTestLibrary.TestTryCatchBlocks.tryCatchWithCaughtTypedException();
            assert.ok(true, "Typed exception catch");

            var exceptionMessage = ClientTestLibrary.TestTryCatchBlocks.tryCatchWithCaughtArgumentException();
            assert.deepEqual(exceptionMessage, "catch me", "Typed exception catch with exception message");
        },
        thrownExceptions: function (assert) {
            assert.expect(12);

            // #230
            assert.throws(ClientTestLibrary.TestTryCatchBlocks.tryCatchWithNotCaughtTypedException, "catch me", "A.Typed exception is not Caught");
            assert.ok(ClientTestLibrary.TestTryCatchBlocks.getIsATry(), "A. exception not caught - try section called");
            assert.ok(!ClientTestLibrary.TestTryCatchBlocks.getIsACatch(), "A. exception not caught - catch section not called");

            // #229
            assert.throws(ClientTestLibrary.TestTryCatchBlocks.tryCatchWithNotCaughtTypedExceptionAndArgument, "catch me", "[#229] B. Typed exception is not Caught; and argument");
            assert.ok(ClientTestLibrary.TestTryCatchBlocks.getIsBTry(), "[#229] B. exception not caught - try section called");
            assert.ok(!ClientTestLibrary.TestTryCatchBlocks.getIsBCatch(), "B. exception not caught - catch section not called");

            // #231
            assert.throws(ClientTestLibrary.TestTryCatchBlocks.tryCatchWithRethrow, "catch me", "[#231] C. Rethrow");
            assert.ok(ClientTestLibrary.TestTryCatchBlocks.getIsCTry(), "C. exception caught and re-thrown - try section called");
            assert.ok(ClientTestLibrary.TestTryCatchBlocks.getIsCCatch(), "C. exception caught and re-thrown - catch section called");

            assert.throws(ClientTestLibrary.TestTryCatchBlocks.tryCatchWithRethrowEx, function (error) {
                return error.toString() === "catch me";
            }, "D. Rethrow with parameter");
            assert.ok(ClientTestLibrary.TestTryCatchBlocks.getIsDTry(), "D. exception caught and re-thrown  - try section called");
            assert.ok(ClientTestLibrary.TestTryCatchBlocks.getIsDCatch(), "D. exception caught and re-thrown  - catch section called");
        },
        bridge320: function (assert) {
            assert.expect(1);

            var exceptionMessage = "";

            try {
                "someString".SomeNotExistingMethod();
            }
            catch (ex) {
                ex = Bridge.Exception.create(ex);
                exceptionMessage = ex.getMessage();
            }

            // var expectedMessage = Utilities.BrowserHelper.IsPhantomJs()
            //    ? "undefined is not a constructor (evaluating '\"someString\".SomeNotExistingMethod()')"
            //    : "\"someString\".SomeNotExistingMethod is not a function";

            assert.ok(Bridge.String.contains(exceptionMessage,"SomeNotExistingMethod"), "ex.Message works on built-in JavaScript type");
        },
        bridge343: function (assert) {
            assert.expect(1);

            var exceptionMessage = "";

            var i = 0;

            try {
                var r = Bridge.Int.div(10, i);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                var ex;
                if (Bridge.is($e, Bridge.ArgumentException)) {
                }
                else {
                    ex = $e;
                    exceptionMessage = ex.getMessage();
                }
            }

            assert.ok(!Bridge.String.isNullOrEmpty(exceptionMessage), "Double catch block with general Exception works");
        },
        tryCatch: function (s) {
            try {
                return s;
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                return "";
            }
        },
        tryCatchWithCaughtException: function () {
            try {
                throw new Bridge.Exception();
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
            }
        },
        tryCatchWithCaughtTypedException: function () {
            try {
                throw new Bridge.Exception();
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
            }
        },
        tryCatchWithCaughtArgumentException: function () {
            try {
                throw new Bridge.ArgumentException("catch me");
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                var ex;
                if (Bridge.is($e, Bridge.ArgumentException)) {
                    ex = $e;
                    return ex.getMessage();
                }
                else {
                    throw $e;
                }
            }
        },
        tryCatchWithNotCaughtTypedException: function () {
            ClientTestLibrary.TestTryCatchBlocks.setIsATry(false);
            ClientTestLibrary.TestTryCatchBlocks.setIsACatch(false);

            try {
                ClientTestLibrary.TestTryCatchBlocks.setIsATry(true);
                throw new Bridge.Exception("catch me");
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                if (Bridge.is($e, Bridge.ArgumentException)) {
                    ClientTestLibrary.TestTryCatchBlocks.setIsATry(true);
                }
                else {
                    throw $e;
                }
            }

            ClientTestLibrary.TestTryCatchBlocks.setIsATry(false);
        },
        tryCatchWithNotCaughtTypedExceptionAndArgument: function () {
            ClientTestLibrary.TestTryCatchBlocks.setIsBTry(false);
            ClientTestLibrary.TestTryCatchBlocks.setIsBCatch(false);

            try {
                ClientTestLibrary.TestTryCatchBlocks.setIsBTry(true);
                throw new Bridge.Exception("catch me");
                ClientTestLibrary.TestTryCatchBlocks.setIsBTry(false);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                var ex;
                if (Bridge.is($e, Bridge.InvalidCastException)) {
                    ex = $e;
                    ClientTestLibrary.TestTryCatchBlocks.setIsBCatch(true);
                    var s = ex.getMessage();
                }
                else {
                    throw $e;
                }
            }

            ClientTestLibrary.TestTryCatchBlocks.setIsBTry(false);
        },
        tryCatchWithRethrow: function () {
            ClientTestLibrary.TestTryCatchBlocks.setIsCTry(false);
            ClientTestLibrary.TestTryCatchBlocks.setIsCCatch(false);

            try {
                ClientTestLibrary.TestTryCatchBlocks.setIsCTry(true);
                throw new Bridge.InvalidOperationException("catch me");
                ClientTestLibrary.TestTryCatchBlocks.setIsCTry(false);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                ClientTestLibrary.TestTryCatchBlocks.setIsCCatch(true);
                throw $e;
            }

            ClientTestLibrary.TestTryCatchBlocks.setIsCTry(false);
        },
        tryCatchWithRethrowEx: function () {
            ClientTestLibrary.TestTryCatchBlocks.setIsDTry(false);
            ClientTestLibrary.TestTryCatchBlocks.setIsDCatch(false);

            try {
                ClientTestLibrary.TestTryCatchBlocks.setIsDTry(true);
                throw new Bridge.ArgumentException("catch me");
                ClientTestLibrary.TestTryCatchBlocks.setIsDTry(false);
            }
            catch (ex) {
                ex = Bridge.Exception.create(ex);
                ClientTestLibrary.TestTryCatchBlocks.setIsDCatch(true);
                throw ex;
            }

            ClientTestLibrary.TestTryCatchBlocks.setIsDTry(false);
        }
    }
});



Bridge.init();