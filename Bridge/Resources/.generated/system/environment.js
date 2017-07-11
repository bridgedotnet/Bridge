    Bridge.define("System.Environment", {
        statics: {
            fields: {
                variables: null
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
                        return System.Environment.getCommandLineArgs().join(" ");
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
                    System.Environment.variables = new (System.Collections.Generic.Dictionary$2(System.String,System.String)).ctor();
                    System.Environment.patchDictionary(System.Environment.variables);
                }
            },
            methods: {
                patchDictionary: function (d) {
                    d.noKeyCheck = true;

                    return d;
                },
                exit: function (exitCode) {
                    System.Environment.ExitCode = exitCode;
                },
                expandEnvironmentVariables: function (name) {
                    var $t;
                    if (name == null) {
                        throw new System.ArgumentNullException(name);
                    }

                    // Case sensitive
                    $t = Bridge.getEnumerator(System.Environment.variables);
                    try {
                        while ($t.moveNext()) {
                            var pair = $t.Current;
                            name = System.String.replaceAll(name, System.String.concat("%", pair.key, "%"), pair.value);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$dispose();
                        }
                    }
                    return name;
                },
                failFast: function (message) {
                    throw new System.Exception(message);
                },
                failFast$1: function (message, exception) {
                    throw new System.Exception(message, exception);
                },
                getCommandLineArgs: function () {
                    var l = System.Environment.Location;

                    if (l) {
                        var args = new (System.Collections.Generic.List$1(System.String))();

                        var path = l.pathname;

                        if (!System.String.isNullOrEmpty(path)) {
                            args.add(path);
                        }

                        var search = l.search;

                        if (!System.String.isNullOrEmpty(search) && search.length > 1) {
                            var query = System.String.split(search.substr(1), [38].map(function(i) {{ return String.fromCharCode(i); }}));

                            for (var i = 0; i < query.length; i = (i + 1) | 0) {
                                var param = System.String.split(query[System.Array.index(i, query)], [61].map(function(i) {{ return String.fromCharCode(i); }}));

                                for (var j = 0; j < param.length; j = (j + 1) | 0) {
                                    args.add(param[System.Array.index(j, param)]);
                                }
                            }
                        }

                        return args.toArray();
                    }

                    return System.Array.init(0, null, System.String);
                },
                getEnvironmentVariable: function (variable) {
                    if (variable == null) {
                        throw new System.ArgumentNullException("variable");
                    }

                    var r = { };

                    if (System.Environment.variables.tryGetValue(variable.toLowerCase(), r)) {
                        return r.v;
                    }

                    return null;
                },
                getEnvironmentVariable$1: function (variable, target) {
                    return System.Environment.getEnvironmentVariable(variable);
                },
                getEnvironmentVariables: function () {
                    return System.Environment.patchDictionary(new (System.Collections.Generic.Dictionary$2(System.String,System.String)).$ctor1(System.Environment.variables));
                },
                getEnvironmentVariables$1: function (target) {
                    return System.Environment.getEnvironmentVariables();
                },
                getLogicalDrives: function () {
                    return System.Array.init(0, null, System.String);
                },
                setEnvironmentVariable: function (variable, value) {
                    if (variable == null) {
                        throw new System.ArgumentNullException("variable");
                    }

                    if (System.String.isNullOrEmpty(variable) || System.String.startsWith(variable, String.fromCharCode(0)) || System.String.contains(variable,"=") || variable.length > 32767) {
                        throw new System.ArgumentException("Incorrect variable (cannot be empty, contain zero character nor equal sign, be longer than 32767).");
                    }

                    variable = variable.toLowerCase();

                    if (System.String.isNullOrEmpty(value)) {
                        if (System.Environment.variables.containsKey(variable)) {
                            System.Environment.variables.remove(variable);
                        }
                    } else {
                        System.Environment.variables.setItem(variable, value);
                    }
                },
                setEnvironmentVariable$1: function (variable, value, target) {
                    System.Environment.setEnvironmentVariable(variable, value);
                }
            }
        }
    });
