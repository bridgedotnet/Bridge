    Bridge.define("System.IO.FileStream", {
        inherits: [System.IO.Stream],
        fields: {
            _isOpen: false,
            internal: null,
            _buffer: null
        },
        props: {
            CanRead: {
                get: function () {
                    return true;
                }
            },
            CanSeek: {
                get: function () {
                    return false;
                }
            },
            CanWrite: {
                get: function () {
                    return false;
                }
            },
            Length: {
                get: function () {
                    return Bridge.Int.clip64(this._buffer.byteLength);
                }
            },
            Position: System.Int64(0)
        },
        ctors: {
            ctor: function (file) {
                this.$initialize();
                System.IO.Stream.ctor.call(this);
                this.internal = file;
            }
        },
        methods: {
            load: function () {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    completer, 
                    fileReader, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        this._isOpen = false;
                                        completer = new System.Threading.Tasks.TaskCompletionSource();
                                        fileReader = new FileReader();
                                        fileReader.onload = function () {
                                            return completer.setResult(Bridge.cast(fileReader.result, ArrayBuffer));
                                        };
                                        fileReader.readAsArrayBuffer(this.internal);
                                        $task1 = completer.task;
                                        $step = 1;
                                        $task1.continueWith($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        this._buffer = new Uint8Array($taskResult1);
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            flush: function () {
                throw new System.NotImplementedException();
            },
            read: function (buffer, offset, count) {
                if (buffer == null) {
                    throw new System.ArgumentNullException("buffer");
                }
                if (offset < 0) {
                    throw new System.ArgumentOutOfRangeException("offset");
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count");
                }
                if (this.Length.sub(System.Int64(offset)).lt(System.Int64(count))) {
                    throw new System.ArgumentException();
                }
                if (!this._isOpen) {
                    throw new System.Exception();
                }
                var num = this.Length.sub(this.Position);
                if (num.gt(System.Int64(count))) {
                    num = System.Int64(count);
                }
                if (num.lte(System.Int64(0))) {
                    return 0;
                }
                if (num.gt(System.Int64(8))) {
                    for (var n = 0; System.Int64(n).lt(num); n = (n + 1) | 0) {
                        buffer[System.Array.index(((n + offset) | 0), buffer)] = this._buffer[System.Array.index(System.Int64.toNumber(this.Position.add(System.Int64(n))), this._buffer)];
                    }
                } else {
                    var num1 = num;
                    while (true) {
                        var num2 = num1.sub(System.Int64(1));
                        num1 = num2;
                        if (num2.lt(System.Int64(0))) {
                            break;
                        }
                        buffer[System.Array.index(System.Int64.toNumber(System.Int64(offset).add(num1)), buffer)] = this._buffer[System.Array.index(System.Int64.toNumber(this.Position.add(num1)), this._buffer)];
                    }
                }
                this.Position = this.Position.add(num);
                return System.Int64.clip32(num);
            },
            seek: function (offset, origin) {
                throw new System.NotImplementedException();
            },
            setLength: function (value) {
                throw new System.NotImplementedException();
            },
            write: function (buffer, offset, count) {
                throw new System.NotImplementedException();
            }
        }
    });
