    Bridge.define("System.IO.Stream.SynchronousAsyncResult", {
        inherits: [System.IAsyncResult],
        $kind: "nested class",
        statics: {
            methods: {
                EndRead: function (asyncResult) {

                    var ar = Bridge.as(asyncResult, System.IO.Stream.SynchronousAsyncResult);
                    if (ar == null || ar._isWrite) {
                        System.IO.__Error.WrongAsyncResult();
                    }

                    if (ar._endXxxCalled) {
                        System.IO.__Error.EndReadCalledTwice();
                    }

                    ar._endXxxCalled = true;

                    ar.ThrowIfError();
                    return ar._bytesRead;
                },
                EndWrite: function (asyncResult) {

                    var ar = Bridge.as(asyncResult, System.IO.Stream.SynchronousAsyncResult);
                    if (ar == null || !ar._isWrite) {
                        System.IO.__Error.WrongAsyncResult();
                    }

                    if (ar._endXxxCalled) {
                        System.IO.__Error.EndWriteCalledTwice();
                    }

                    ar._endXxxCalled = true;

                    ar.ThrowIfError();
                }
            }
        },
        fields: {
            _stateObject: null,
            _isWrite: false,
            _exceptionInfo: null,
            _endXxxCalled: false,
            _bytesRead: 0
        },
        props: {
            IsCompleted: {
                get: function () {
                    return true;
                }
            },
            AsyncState: {
                get: function () {
                    return this._stateObject;
                }
            },
            CompletedSynchronously: {
                get: function () {
                    return true;
                }
            }
        },
        alias: [
            "IsCompleted", "System$IAsyncResult$IsCompleted",
            "AsyncState", "System$IAsyncResult$AsyncState",
            "CompletedSynchronously", "System$IAsyncResult$CompletedSynchronously"
        ],
        ctors: {
            $ctor1: function (bytesRead, asyncStateObject) {
                this.$initialize();
                this._bytesRead = bytesRead;
                this._stateObject = asyncStateObject;
            },
            $ctor2: function (asyncStateObject) {
                this.$initialize();
                this._stateObject = asyncStateObject;
                this._isWrite = true;
            },
            ctor: function (ex, asyncStateObject, isWrite) {
                this.$initialize();
                this._exceptionInfo = ex;
                this._stateObject = asyncStateObject;
                this._isWrite = isWrite;
            }
        },
        methods: {
            ThrowIfError: function () {
                if (this._exceptionInfo != null) {
                    throw this._exceptionInfo;
                }
            }
        }
    });
