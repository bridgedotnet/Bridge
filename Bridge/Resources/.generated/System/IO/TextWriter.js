    Bridge.define("System.IO.TextWriter", {
        inherits: [System.IDisposable],
        statics: {
            fields: {
                Null: null,
                InitialNewLine: null
            },
            ctors: {
                init: function () {
                    this.Null = new System.IO.TextWriter.NullTextWriter();
                    this.InitialNewLine = "\r\n";
                }
            },
            methods: {
                Synchronized: function (writer) {
                    if (writer == null) {
                        throw new System.ArgumentNullException.$ctor1("writer");
                    }

                    return writer;
                }
            }
        },
        fields: {
            CoreNewLine: null,
            InternalFormatProvider: null
        },
        props: {
            FormatProvider: {
                get: function () {
                    if (this.InternalFormatProvider == null) {
                        return System.Globalization.CultureInfo.getCurrentCulture();
                    } else {
                        return this.InternalFormatProvider;
                    }
                }
            },
            NewLine: {
                get: function () {
                    return System.String.fromCharArray(this.CoreNewLine);
                },
                set: function (value) {
                    if (value == null) {
                        value = System.IO.TextWriter.InitialNewLine;
                    }
                    this.CoreNewLine = System.String.toCharArray(value, 0, value.length);
                }
            }
        },
        alias: ["Dispose", "System$IDisposable$Dispose"],
        ctors: {
            init: function () {
                this.CoreNewLine = System.Array.init([13, 10], System.Char);
            },
            ctor: function () {
                this.$initialize();
                this.InternalFormatProvider = null;
            },
            $ctor1: function (formatProvider) {
                this.$initialize();
                this.InternalFormatProvider = formatProvider;
            }
        },
        methods: {
            Close: function () {
                this.Dispose$1(true);
            },
            Dispose$1: function (disposing) { },
            Dispose: function () {
                this.Dispose$1(true);
            },
            Flush: function () { },
            Write$1: function (value) { },
            Write$2: function (buffer) {
                if (buffer != null) {
                    this.Write$3(buffer, 0, buffer.length);
                }
            },
            Write$3: function (buffer, index, count) {
                if (buffer == null) {
                    throw new System.ArgumentNullException.$ctor1("buffer");
                }
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("index");
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("count");
                }
                if (((buffer.length - index) | 0) < count) {
                    throw new System.ArgumentException.ctor();
                }

                for (var i = 0; i < count; i = (i + 1) | 0) {
                    this.Write$1(buffer[System.Array.index(((index + i) | 0), buffer)]);
                }
            },
            Write: function (value) {
                this.Write$10(value ? System.Boolean.trueString : System.Boolean.falseString);
            },
            Write$6: function (value) {
                this.Write$10(System.Int32.format(value, "G", this.FormatProvider));
            },
            Write$15: function (value) {
                this.Write$10(System.UInt32.format(value, "G", this.FormatProvider));
            },
            Write$7: function (value) {
                this.Write$10(value.format("G", this.FormatProvider));
            },
            Write$16: function (value) {
                this.Write$10(value.format("G", this.FormatProvider));
            },
            Write$9: function (value) {
                this.Write$10(System.Single.format(value, "G", this.FormatProvider));
            },
            Write$5: function (value) {
                this.Write$10(System.Double.format(value, "G", this.FormatProvider));
            },
            Write$4: function (value) {
                this.Write$10(Bridge.Int.format(value, "G", this.FormatProvider));
            },
            Write$10: function (value) {
                if (value != null) {
                    this.Write$2(System.String.toCharArray(value, 0, value.length));
                }
            },
            Write$8: function (value) {
                if (value != null) {
                    var f = Bridge.as(value, System.IFormattable);
                    if (f != null) {
                        this.Write$10(Bridge.format(f, null, this.FormatProvider));
                    } else {
                        this.Write$10(Bridge.toString(value));
                    }
                }
            },
            Write$11: function (format, arg0) {
                this.Write$10(System.String.formatProvider(this.FormatProvider, format, [arg0]));
            },
            Write$12: function (format, arg0, arg1) {
                this.Write$10(System.String.formatProvider(this.FormatProvider, format, arg0, arg1));
            },
            Write$13: function (format, arg0, arg1, arg2) {
                this.Write$10(System.String.formatProvider(this.FormatProvider, format, arg0, arg1, arg2));
            },
            Write$14: function (format, arg) {
                if (arg === void 0) { arg = []; }
                this.Write$10(System.String.formatProvider.apply(System.String, [this.FormatProvider, format].concat(arg)));
            },
            WriteLine: function () {
                this.Write$2(this.CoreNewLine);
            },
            WriteLine$2: function (value) {
                this.Write$1(value);
                this.WriteLine();
            },
            WriteLine$3: function (buffer) {
                this.Write$2(buffer);
                this.WriteLine();
            },
            WriteLine$4: function (buffer, index, count) {
                this.Write$3(buffer, index, count);
                this.WriteLine();
            },
            WriteLine$1: function (value) {
                this.Write(value);
                this.WriteLine();
            },
            WriteLine$7: function (value) {
                this.Write$6(value);
                this.WriteLine();
            },
            WriteLine$16: function (value) {
                this.Write$15(value);
                this.WriteLine();
            },
            WriteLine$8: function (value) {
                this.Write$7(value);
                this.WriteLine();
            },
            WriteLine$17: function (value) {
                this.Write$16(value);
                this.WriteLine();
            },
            WriteLine$10: function (value) {
                this.Write$9(value);
                this.WriteLine();
            },
            WriteLine$6: function (value) {
                this.Write$5(value);
                this.WriteLine();
            },
            WriteLine$5: function (value) {
                this.Write$4(value);
                this.WriteLine();
            },
            WriteLine$11: function (value) {

                if (value == null) {
                    this.WriteLine();
                } else {
                    var vLen = value.length;
                    var nlLen = this.CoreNewLine.length;
                    var chars = System.Array.init(((vLen + nlLen) | 0), 0, System.Char);
                    System.String.copyTo(value, 0, chars, 0, vLen);
                    if (nlLen === 2) {
                        chars[System.Array.index(vLen, chars)] = this.CoreNewLine[System.Array.index(0, this.CoreNewLine)];
                        chars[System.Array.index(((vLen + 1) | 0), chars)] = this.CoreNewLine[System.Array.index(1, this.CoreNewLine)];
                    } else if (nlLen === 1) {
                        chars[System.Array.index(vLen, chars)] = this.CoreNewLine[System.Array.index(0, this.CoreNewLine)];
                    } else {
                        System.Array.copy(this.CoreNewLine, 0, chars, Bridge.Int.mul(vLen, 2), Bridge.Int.mul(nlLen, 2));
                    }
                    this.Write$3(chars, 0, ((vLen + nlLen) | 0));
                }
                /* 
                Write(value);  // We could call Write(String) on StreamWriter...
                WriteLine();
                */
            },
            WriteLine$9: function (value) {
                if (value == null) {
                    this.WriteLine();
                } else {
                    var f = Bridge.as(value, System.IFormattable);
                    if (f != null) {
                        this.WriteLine$11(Bridge.format(f, null, this.FormatProvider));
                    } else {
                        this.WriteLine$11(Bridge.toString(value));
                    }
                }
            },
            WriteLine$12: function (format, arg0) {
                this.WriteLine$11(System.String.formatProvider(this.FormatProvider, format, [arg0]));
            },
            WriteLine$13: function (format, arg0, arg1) {
                this.WriteLine$11(System.String.formatProvider(this.FormatProvider, format, arg0, arg1));
            },
            WriteLine$14: function (format, arg0, arg1, arg2) {
                this.WriteLine$11(System.String.formatProvider(this.FormatProvider, format, arg0, arg1, arg2));
            },
            WriteLine$15: function (format, arg) {
                if (arg === void 0) { arg = []; }
                this.WriteLine$11(System.String.formatProvider.apply(System.String, [this.FormatProvider, format].concat(arg)));
            }
        }
    });
