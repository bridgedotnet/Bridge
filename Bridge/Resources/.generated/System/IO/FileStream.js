    Bridge.define("System.IO.FileStream", {
        inherits: [System.IO.Stream],
        statics: {
            methods: {
                FromFile: function (file) {
                    var completer = new System.Threading.Tasks.TaskCompletionSource();
                    var fileReader = new FileReader();
                    fileReader.onload = function () {
                        completer.setResult(new System.IO.FileStream.ctor(fileReader.result, file.name));
                    };
                    fileReader.onerror = function (e) {
                        completer.setException(new System.SystemException.$ctor1(Bridge.unbox(e).target.error.As()));
                    };
                    fileReader.readAsArrayBuffer(file);

                    return completer.task;
                },
                ReadBytes: function (path) {
                    if (Bridge.isNode) {
                        var fs = require("fs");
                        return Bridge.cast(fs.readFileSync(path), ArrayBuffer);
                    } else {
                        var req = new XMLHttpRequest();
                        req.open("GET", path, false);
                        req.overrideMimeType("text/plain; charset=x-user-defined");
                        req.send(null);
                        if (req.status !== 200) {
                            throw new System.IO.IOException.$ctor1(System.String.concat("Status of request to " + (path || "") + " returned status: ", req.status));
                        }

                        var text = req.responseText;
                        var resultArray = new Uint8Array(text.length);
                        System.String.toCharArray(text, 0, text.length).forEach(function (v, index, array) {
                                var $t;
                                return ($t = (v & 255) & 255, resultArray[index] = $t, $t);
                            });
                        return resultArray.buffer;
                    }
                },
                ReadBytesAsync: function (path) {
                    var tcs = new System.Threading.Tasks.TaskCompletionSource();

                    if (Bridge.isNode) {
                        var fs = require("fs");
                        fs.readFile(path, function (err, data) {
                            if (err != null) {
                                throw new System.IO.IOException.ctor();
                            }

                            tcs.setResult(data);
                        });
                    } else {
                        var req = new XMLHttpRequest();
                        req.open("GET", path, true);
                        req.overrideMimeType("text/plain; charset=binary-data");
                        req.send(null);

                        req.onreadystatechange = function () {
                        if (req.readyState !== 4) {
                            return;
                        }

                        if (req.status !== 200) {
                            throw new System.IO.IOException.$ctor1(System.String.concat("Status of request to " + (path || "") + " returned status: ", req.status));
                        }

                        var text = req.responseText;
                        var resultArray = new Uint8Array(text.length);
                        System.String.toCharArray(text, 0, text.length).forEach(function (v, index, array) {
                                var $t;
                                return ($t = (v & 255) & 255, resultArray[index] = $t, $t);
                            });
                        tcs.setResult(resultArray.buffer);
                        };
                    }

                    return tcs.task;
                }
            }
        },
        fields: {
            name: null,
            _buffer: null
        },
        props: {
            CanRead: {
                get: function () {
                    return true;
                }
            },
            CanWrite: {
                get: function () {
                    return false;
                }
            },
            CanSeek: {
                get: function () {
                    return false;
                }
            },
            IsAsync: {
                get: function () {
                    return false;
                }
            },
            Name: {
                get: function () {
                    return this.name;
                }
            },
            Length: {
                get: function () {
                    return System.Int64(this.GetInternalBuffer().byteLength);
                }
            },
            Position: System.Int64(0)
        },
        ctors: {
            $ctor1: function (path, mode) {
                this.$initialize();
                System.IO.Stream.ctor.call(this);
                this.name = path;
            },
            ctor: function (buffer, name) {
                this.$initialize();
                System.IO.Stream.ctor.call(this);
                this._buffer = buffer;
                this.name = name;
            }
        },
        methods: {
            Flush: function () { },
            Seek: function (offset, origin) {
                throw new System.NotImplementedException.ctor();
            },
            SetLength: function (value) {
                throw new System.NotImplementedException.ctor();
            },
            Write: function (buffer, offset, count) {
                throw new System.NotImplementedException.ctor();
            },
            GetInternalBuffer: function () {
                if (this._buffer == null) {
                    this._buffer = System.IO.FileStream.ReadBytes(this.name);

                }

                return this._buffer;
            },
            EnsureBufferAsync: function () {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3], $step);
                                switch ($step) {
                                    case 0: {
                                        if (this._buffer == null) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                    }
                                    case 1: {
                                        $task1 = System.IO.FileStream.ReadBytesAsync(this.name);
                                        $step = 2;
                                        $task1.continueWith($asyncBody);
                                        return;
                                    }
                                    case 2: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        this._buffer = $taskResult1;
                                        $step = 3;
                                        continue;
                                    }
                                    case 3: {
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
            Read: function (buffer, offset, count) {
                if (buffer == null) {
                    throw new System.ArgumentNullException.$ctor1("buffer");
                }

                if (offset < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("offset");
                }

                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("count");
                }

                if ((((buffer.length - offset) | 0)) < count) {
                    throw new System.ArgumentException.ctor();
                }

                var num = this.Length.sub(this.Position);
                if (num.gt(System.Int64(count))) {
                    num = System.Int64(count);
                }

                if (num.lte(System.Int64(0))) {
                    return 0;
                }

                var byteBuffer = new Uint8Array(this.GetInternalBuffer());
                if (num.gt(System.Int64(8))) {
                    for (var n = 0; System.Int64(n).lt(num); n = (n + 1) | 0) {
                        buffer[System.Array.index(((n + offset) | 0), buffer)] = byteBuffer[this.Position.add(System.Int64(n))];
                    }
                } else {
                    var num1 = num;
                    while (true) {
                        var num2 = num1.sub(System.Int64(1));
                        num1 = num2;
                        if (num2.lt(System.Int64(0))) {
                            break;
                        }
                        buffer[System.Array.index(System.Int64.toNumber(System.Int64(offset).add(num1)), buffer)] = byteBuffer[this.Position.add(num1)];
                    }
                }
                this.Position = this.Position.add(num);
                return System.Int64.clip32(num);
            }
        }
    });
