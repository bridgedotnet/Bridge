    Bridge.define("System.Environment", {
        statics: {
            fields: {
                Variables: null
            },
            props: {
                Location: {
                    get: function () {
                        var g = Bridge.global;

                        if (g && g.location) {
                            return g.location;
                        }

                        return null;
                    }
                },
                CommandLine: {
                    get: function () {
                        return System.Environment.GetCommandLineArgs().join(" ");
                    }
                },
                CurrentDirectory: {
                    get: function () {
                        var l = System.Environment.Location;

                        return l ? l.pathname : "";
                    },
                    set: function (value) {
                        var l = System.Environment.Location;

                        if (l) {
                            l.pathname = value;
                        }
                    }
                },
                ExitCode: 0,
                Is64BitOperatingSystem: {
                    get: function () {
                        var n = Bridge.global ? Bridge.global.navigator : null;

                        if (n && (!Bridge.referenceEquals(n.userAgent.indexOf("WOW64"), -1) || !Bridge.referenceEquals(n.userAgent.indexOf("Win64"), -1))) {
                            return true;
                        }

                        return false;
                    }
                },
                ProcessorCount: {
                    get: function () {
                        var n = Bridge.global ? Bridge.global.navigator : null;

                        if (n && n.hardwareConcurrency) {
                            return n.hardwareConcurrency;
                        }

                        return 1;
                    }
                },
                StackTrace: {
                    get: function () {
                        var err = new Error();
                        var s = err.stack;

                        if (!System.String.isNullOrEmpty(s)) {
                            if (System.String.indexOf(s, "at") >= 0) {
                                return s.substr(System.String.indexOf(s, "at"));
                            }
                        }

                        return "";
                    }
                },
                Version: {
                    get: function () {
                        var s = Bridge.SystemAssembly.compiler;

                        var v = { };

                        if (System.Version.tryParse(s, v)) {
                            return v.v;
                        }

                        return new System.Version.ctor();
                    }
                }
            },
            ctors: {
                init: function () {
                    this.ExitCode = 0;
                },
                ctor: function () {
                    System.Environment.Variables = new (System.Collections.Generic.Dictionary$2(System.String,System.String))();
                    System.Environment.PatchDictionary(System.Environment.Variables);
                }
            },
            methods: {
                GetResourceString: function (key) {
                    return key;
                },
                GetResourceString$1: function (key, values) {
                    if (values === void 0) { values = []; }
                    var s = System.Environment.GetResourceString(key);
                    return System.String.formatProvider.apply(System.String, [System.Globalization.CultureInfo.getCurrentCulture(), s].concat(values));
                },
                PatchDictionary: function (d) {
                    d.noKeyCheck = true;

                    return d;
                },
                Exit: function (exitCode) {
                    System.Environment.ExitCode = exitCode;
                },
                ExpandEnvironmentVariables: function (name) {
                    var $t;
                    if (name == null) {
                        throw new System.ArgumentNullException.$ctor1(name);
                    }

                    $t = Bridge.getEnumerator(System.Environment.Variables);
                    try {
                        while ($t.moveNext()) {
                            var pair = $t.Current;
                            name = System.String.replaceAll(name, "%" + (pair.key || "") + "%", pair.value);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    return name;
                },
                FailFast: function (message) {
                    throw new System.Exception(message);
                },
                FailFast$1: function (message, exception) {
                    throw new System.Exception(message, exception);
                },
                GetCommandLineArgs: function () {
                    var l = System.Environment.Location;

                    if (l) {
                        var args = new (System.Collections.Generic.List$1(System.String)).ctor();

                        var path = l.pathname;

                        if (!System.String.isNullOrEmpty(path)) {
                            args.add(path);
                        }

                        var search = l.search;

                        if (!System.String.isNullOrEmpty(search) && search.length > 1) {
                            var query = System.String.split(search.substr(1), [38].map(function (i) {{ return String.fromCharCode(i); }}));

                            for (var i = 0; i < query.length; i = (i + 1) | 0) {
                                var param = System.String.split(query[System.Array.index(i, query)], [61].map(function (i) {{ return String.fromCharCode(i); }}));

                                for (var j = 0; j < param.length; j = (j + 1) | 0) {
                                    args.add(param[System.Array.index(j, param)]);
                                }
                            }
                        }

                        return args.ToArray();
                    }

                    return System.Array.init(0, null, System.String);
                },
                GetEnvironmentVariable: function (variable) {
                    if (variable == null) {
                        throw new System.ArgumentNullException.$ctor1("variable");
                    }

                    var r = { };

                    if (System.Environment.Variables.tryGetValue(variable.toLowerCase(), r)) {
                        return r.v;
                    }

                    return null;
                },
                GetEnvironmentVariable$1: function (variable, target) {
                    return System.Environment.GetEnvironmentVariable(variable);
                },
                GetEnvironmentVariables: function () {
                    return System.Environment.PatchDictionary(new (System.Collections.Generic.Dictionary$2(System.String,System.String))(System.Environment.Variables));
                },
                GetEnvironmentVariables$1: function (target) {
                    return System.Environment.GetEnvironmentVariables();
                },
                GetLogicalDrives: function () {
                    return System.Array.init(0, null, System.String);
                },
                SetEnvironmentVariable: function (variable, value) {
                    if (variable == null) {
                        throw new System.ArgumentNullException.$ctor1("variable");
                    }

                    if (System.String.isNullOrEmpty(variable) || System.String.startsWith(variable, String.fromCharCode(0)) || System.String.contains(variable,"=") || variable.length > 32767) {
                        throw new System.ArgumentException.$ctor1("Incorrect variable (cannot be empty, contain zero character nor equal sign, be longer than 32767).");
                    }

                    variable = variable.toLowerCase();

                    if (System.String.isNullOrEmpty(value)) {
                        if (System.Environment.Variables.containsKey(variable)) {
                            System.Environment.Variables.remove(variable);
                        }
                    } else {
                        System.Environment.Variables.set(variable, value);
                    }
                },
                SetEnvironmentVariable$1: function (variable, value, target) {
                    System.Environment.SetEnvironmentVariable(variable, value);
                }
            }
        }
    });
