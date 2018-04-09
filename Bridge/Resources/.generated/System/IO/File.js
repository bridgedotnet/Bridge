    Bridge.define("System.IO.File", {
        statics: {
            methods: {
                OpenText: function (path) {
                    if (path == null) {
                        throw new System.ArgumentNullException.$ctor1("path");
                    }
                    return new System.IO.StreamReader.$ctor7(path);
                },
                OpenRead: function (path) {
                    return new System.IO.FileStream.$ctor1(path, 3);
                },
                ReadAllText: function (path) {
                    if (path == null) {
                        throw new System.ArgumentNullException.$ctor1("path");
                    }
                    if (path.length === 0) {
                        throw new System.ArgumentException.$ctor1("Argument_EmptyPath");
                    }

                    return System.IO.File.InternalReadAllText(path, System.Text.Encoding.UTF8, true);
                },
                ReadAllText$1: function (path, encoding) {
                    if (path == null) {
                        throw new System.ArgumentNullException.$ctor1("path");
                    }
                    if (encoding == null) {
                        throw new System.ArgumentNullException.$ctor1("encoding");
                    }
                    if (path.length === 0) {
                        throw new System.ArgumentException.$ctor1("Argument_EmptyPath");
                    }

                    return System.IO.File.InternalReadAllText(path, encoding, true);
                },
                InternalReadAllText: function (path, encoding, checkHost) {

                    var sr = new System.IO.StreamReader.$ctor12(path, encoding, true, System.IO.StreamReader.DefaultBufferSize, checkHost);
                    try {
                        return sr.ReadToEnd();
                    }
                    finally {
                        if (Bridge.hasValue(sr)) {
                            sr.System$IDisposable$Dispose();
                        }
                    }
                },
                ReadAllBytes: function (path) {
                    return System.IO.File.InternalReadAllBytes(path, true);
                },
                InternalReadAllBytes: function (path, checkHost) {
                    var bytes;
                    var fs = new System.IO.FileStream.$ctor1(path, 3);
                    try {
                        var index = 0;
                        var fileLength = fs.Length;
                        if (fileLength.gt(System.Int64(2147483647))) {
                            throw new System.IO.IOException.$ctor1("IO.IO_FileTooLong2GB");
                        }
                        var count = System.Int64.clip32(fileLength);
                        bytes = System.Array.init(count, 0, System.Byte);
                        while (count > 0) {
                            var n = fs.Read(bytes, index, count);
                            if (n === 0) {
                                System.IO.__Error.EndOfFile();
                            }
                            index = (index + n) | 0;
                            count = (count - n) | 0;
                        }
                    }
                    finally {
                        if (Bridge.hasValue(fs)) {
                            fs.System$IDisposable$Dispose();
                        }
                    }
                    return bytes;
                },
                ReadAllLines: function (path) {
                    if (path == null) {
                        throw new System.ArgumentNullException.$ctor1("path");
                    }
                    if (path.length === 0) {
                        throw new System.ArgumentException.$ctor1("Argument_EmptyPath");
                    }

                    return System.IO.File.InternalReadAllLines(path, System.Text.Encoding.UTF8);
                },
                ReadAllLines$1: function (path, encoding) {
                    if (path == null) {
                        throw new System.ArgumentNullException.$ctor1("path");
                    }
                    if (encoding == null) {
                        throw new System.ArgumentNullException.$ctor1("encoding");
                    }
                    if (path.length === 0) {
                        throw new System.ArgumentException.$ctor1("Argument_EmptyPath");
                    }

                    return System.IO.File.InternalReadAllLines(path, encoding);
                },
                InternalReadAllLines: function (path, encoding) {

                    var line;
                    var lines = new (System.Collections.Generic.List$1(System.String)).ctor();

                    var sr = new System.IO.StreamReader.$ctor9(path, encoding);
                    try {
                        while (((line = sr.ReadLine())) != null) {
                            lines.add(line);
                        }
                    }
                    finally {
                        if (Bridge.hasValue(sr)) {
                            sr.System$IDisposable$Dispose();
                        }
                    }

                    return lines.ToArray();
                },
                ReadLines: function (path) {
                    if (path == null) {
                        throw new System.ArgumentNullException.$ctor1("path");
                    }
                    if (path.length === 0) {
                        throw new System.ArgumentException.$ctor3("Argument_EmptyPath", "path");
                    }

                    return System.IO.ReadLinesIterator.CreateIterator(path, System.Text.Encoding.UTF8);
                },
                ReadLines$1: function (path, encoding) {
                    if (path == null) {
                        throw new System.ArgumentNullException.$ctor1("path");
                    }
                    if (encoding == null) {
                        throw new System.ArgumentNullException.$ctor1("encoding");
                    }
                    if (path.length === 0) {
                        throw new System.ArgumentException.$ctor3("Argument_EmptyPath", "path");
                    }

                    return System.IO.ReadLinesIterator.CreateIterator(path, encoding);
                }
            }
        }
    });
