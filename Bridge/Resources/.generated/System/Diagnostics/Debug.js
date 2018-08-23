    Bridge.define("System.Diagnostics.Debug", {
        statics: {
            fields: {
                s_lock: null,
                s_indentLevel: 0,
                s_indentSize: 0,
                s_needIndent: false,
                s_indentString: null,
                s_ShowAssertDialog: null,
                s_WriteCore: null,
                s_shouldWriteToStdErr: false
            },
            props: {
                AutoFlush: {
                    get: function () {
                        return true;
                    },
                    set: function (value) { }
                },
                IndentLevel: {
                    get: function () {
                        return System.Diagnostics.Debug.s_indentLevel;
                    },
                    set: function (value) {
                        System.Diagnostics.Debug.s_indentLevel = value < 0 ? 0 : value;
                    }
                },
                IndentSize: {
                    get: function () {
                        return System.Diagnostics.Debug.s_indentSize;
                    },
                    set: function (value) {
                        System.Diagnostics.Debug.s_indentSize = value < 0 ? 0 : value;
                    }
                }
            },
            ctors: {
                init: function () {
                    this.s_lock = { };
                    this.s_indentSize = 4;
                    this.s_ShowAssertDialog = System.Diagnostics.Debug.ShowAssertDialog;
                    this.s_WriteCore = System.Diagnostics.Debug.WriteCore;
                    this.s_shouldWriteToStdErr = Bridge.referenceEquals(System.Environment.GetEnvironmentVariable("COMPlus_DebugWriteToStdErr"), "1");
                }
            },
            methods: {
                Close: function () { },
                Flush: function () { },
                Indent: function () {
                    System.Diagnostics.Debug.IndentLevel = (System.Diagnostics.Debug.IndentLevel + 1) | 0;
                },
                Unindent: function () {
                    System.Diagnostics.Debug.IndentLevel = (System.Diagnostics.Debug.IndentLevel - 1) | 0;
                },
                Print: function (message) {
                    System.Diagnostics.Debug.Write$2(message);
                },
                Print$1: function (format, args) {
                    if (args === void 0) { args = []; }
                    System.Diagnostics.Debug.Write$2(System.String.formatProvider.apply(System.String, [null, format].concat(args)));
                },
                Assert: function (condition) {
                    System.Diagnostics.Debug.Assert$2(condition, "", "");
                },
                Assert$1: function (condition, message) {
                    System.Diagnostics.Debug.Assert$2(condition, message, "");
                },
                Assert$2: function (condition, message, detailMessage) {
                    if (!condition) {
                        var stackTrace;

                        try {
                            throw System.NotImplemented.ByDesign;
                        } catch ($e1) {
                            $e1 = System.Exception.create($e1);
                            stackTrace = "";
                        }

                        System.Diagnostics.Debug.WriteLine$2(System.Diagnostics.Debug.FormatAssert(stackTrace, message, detailMessage));
                        System.Diagnostics.Debug.s_ShowAssertDialog(stackTrace, message, detailMessage);
                    }
                },
                Assert$3: function (condition, message, detailMessageFormat, args) {
                    if (args === void 0) { args = []; }
                    System.Diagnostics.Debug.Assert$2(condition, message, System.String.format.apply(System.String, [detailMessageFormat].concat(args)));
                },
                Fail: function (message) {
                    System.Diagnostics.Debug.Assert$2(false, message, "");
                },
                Fail$1: function (message, detailMessage) {
                    System.Diagnostics.Debug.Assert$2(false, message, detailMessage);
                },
                FormatAssert: function (stackTrace, message, detailMessage) {
                    var newLine = (System.Diagnostics.Debug.GetIndentString() || "") + ("\n" || "");
                    return "---- DEBUG ASSERTION FAILED ----" + (newLine || "") + "---- Assert Short Message ----" + (newLine || "") + (message || "") + (newLine || "") + "---- Assert Long Message ----" + (newLine || "") + (detailMessage || "") + (newLine || "") + (stackTrace || "");
                },
                WriteLine$2: function (message) {
                    System.Diagnostics.Debug.Write$2((message || "") + ("\n" || ""));
                },
                WriteLine: function (value) {
                    System.Diagnostics.Debug.WriteLine$2(value != null ? Bridge.toString(value) : null);
                },
                WriteLine$1: function (value, category) {
                    System.Diagnostics.Debug.WriteLine$4(value != null ? Bridge.toString(value) : null, category);
                },
                WriteLine$3: function (format, args) {
                    if (args === void 0) { args = []; }
                    System.Diagnostics.Debug.WriteLine$2(System.String.formatProvider.apply(System.String, [null, format].concat(args)));
                },
                WriteLine$4: function (message, category) {
                    if (category == null) {
                        System.Diagnostics.Debug.WriteLine$2(message);
                    } else {
                        System.Diagnostics.Debug.WriteLine$2((category || "") + ":" + (message || ""));
                    }
                },
                Write$2: function (message) {
                    System.Diagnostics.Debug.s_lock;
                    {
                        if (message == null) {
                            System.Diagnostics.Debug.s_WriteCore("");
                            return;
                        }
                        if (System.Diagnostics.Debug.s_needIndent) {
                            message = (System.Diagnostics.Debug.GetIndentString() || "") + (message || "");
                            System.Diagnostics.Debug.s_needIndent = false;
                        }
                        System.Diagnostics.Debug.s_WriteCore(message);
                        if (System.String.endsWith(message, "\n")) {
                            System.Diagnostics.Debug.s_needIndent = true;
                        }
                    }
                },
                Write: function (value) {
                    System.Diagnostics.Debug.Write$2(value != null ? Bridge.toString(value) : null);
                },
                Write$3: function (message, category) {
                    if (category == null) {
                        System.Diagnostics.Debug.Write$2(message);
                    } else {
                        System.Diagnostics.Debug.Write$2((category || "") + ":" + (message || ""));
                    }
                },
                Write$1: function (value, category) {
                    System.Diagnostics.Debug.Write$3(value != null ? Bridge.toString(value) : null, category);
                },
                WriteIf$2: function (condition, message) {
                    if (condition) {
                        System.Diagnostics.Debug.Write$2(message);
                    }
                },
                WriteIf: function (condition, value) {
                    if (condition) {
                        System.Diagnostics.Debug.Write(value);
                    }
                },
                WriteIf$3: function (condition, message, category) {
                    if (condition) {
                        System.Diagnostics.Debug.Write$3(message, category);
                    }
                },
                WriteIf$1: function (condition, value, category) {
                    if (condition) {
                        System.Diagnostics.Debug.Write$1(value, category);
                    }
                },
                WriteLineIf: function (condition, value) {
                    if (condition) {
                        System.Diagnostics.Debug.WriteLine(value);
                    }
                },
                WriteLineIf$1: function (condition, value, category) {
                    if (condition) {
                        System.Diagnostics.Debug.WriteLine$1(value, category);
                    }
                },
                WriteLineIf$2: function (condition, message) {
                    if (condition) {
                        System.Diagnostics.Debug.WriteLine$2(message);
                    }
                },
                WriteLineIf$3: function (condition, message, category) {
                    if (condition) {
                        System.Diagnostics.Debug.WriteLine$4(message, category);
                    }
                },
                GetIndentString: function () {
                    var $t;
                    var indentCount = Bridge.Int.mul(System.Diagnostics.Debug.IndentSize, System.Diagnostics.Debug.IndentLevel);
                    if (System.Nullable.eq((System.Diagnostics.Debug.s_indentString != null ? System.Diagnostics.Debug.s_indentString.length : null), indentCount)) {
                        return System.Diagnostics.Debug.s_indentString;
                    }
                    return ($t = System.String.fromCharCount(32, indentCount), System.Diagnostics.Debug.s_indentString = $t, $t);
                },
                ShowAssertDialog: function (stackTrace, message, detailMessage) {
                    if (System.Diagnostics.Debugger.IsAttached) {
                        debugger;
                    } else {
                        var ex = new System.Diagnostics.Debug.DebugAssertException(message, detailMessage, stackTrace);
                        System.Environment.FailFast$1(ex.Message, ex);
                    }
                },
                WriteCore: function (message) {
                    System.Diagnostics.Debug.WriteToDebugger(message);

                    if (System.Diagnostics.Debug.s_shouldWriteToStdErr) {
                        System.Diagnostics.Debug.WriteToStderr(message);
                    }
                },
                WriteToDebugger: function (message) {
                    if (System.Diagnostics.Debugger.IsLogging()) {
                        System.Diagnostics.Debugger.Log(0, null, message);
                    } else {
                        System.Console.WriteLine(message);

                    }
                },
                WriteToStderr: function (message) {
                    System.Console.WriteLine(message);







                }
            }
        }
    });
