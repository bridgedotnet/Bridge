    Bridge.define("System.Version", {
        inherits: function () { return [System.ICloneable,System.IComparable$1(System.Version),System.IEquatable$1(System.Version)]; },
        statics: {
            fields: {
                separatorsArray: 0,
                ZERO_CHAR_VALUE: 0
            },
            ctors: {
                init: function () {
                    this.separatorsArray = 46;
                    this.ZERO_CHAR_VALUE = 48;
                }
            },
            methods: {
                appendPositiveNumber: function (num, sb) {
                    var index = sb.getLength();
                    var reminder;

                    do {
                        reminder = num % 10;
                        num = (Bridge.Int.div(num, 10)) | 0;
                        sb.insert(index, String.fromCharCode(((((System.Version.ZERO_CHAR_VALUE + reminder) | 0)) & 65535)));
                    } while (num > 0);
                },
                parse: function (input) {
                    if (input == null) {
                        throw new System.ArgumentNullException("input");
                    }

                    var r = { v : new System.Version.VersionResult() };
                    r.v.init("input", true);
                    if (!System.Version.tryParseVersion(input, r)) {
                        throw r.v.getVersionParseException();
                    }
                    return r.v.m_parsedVersion;
                },
                tryParse: function (input, result) {
                    var r = { v : new System.Version.VersionResult() };
                    r.v.init("input", false);
                    var b = System.Version.tryParseVersion(input, r);
                    result.v = r.v.m_parsedVersion;
                    return b;
                },
                tryParseVersion: function (version, result) {
                    var major = { }, minor = { }, build = { }, revision = { };

                    if (version == null) {
                        result.v.setFailure(System.Version.ParseFailureKind.ArgumentNullException);

                        return false;
                    }

                    var parsedComponents = System.String.split(version, [System.Version.separatorsArray].map(function(i) {{ return String.fromCharCode(i); }}));
                    var parsedComponentsLength = parsedComponents.length;

                    if ((parsedComponentsLength < 2) || (parsedComponentsLength > 4)) {
                        result.v.setFailure(System.Version.ParseFailureKind.ArgumentException);
                        return false;
                    }

                    if (!System.Version.tryParseComponent(parsedComponents[System.Array.index(0, parsedComponents)], "version", result, major)) {
                        return false;
                    }

                    if (!System.Version.tryParseComponent(parsedComponents[System.Array.index(1, parsedComponents)], "version", result, minor)) {
                        return false;
                    }

                    parsedComponentsLength = (parsedComponentsLength - 2) | 0;

                    if (parsedComponentsLength > 0) {
                        if (!System.Version.tryParseComponent(parsedComponents[System.Array.index(2, parsedComponents)], "build", result, build)) {
                            return false;
                        }

                        parsedComponentsLength = (parsedComponentsLength - 1) | 0;

                        if (parsedComponentsLength > 0) {
                            if (!System.Version.tryParseComponent(parsedComponents[System.Array.index(3, parsedComponents)], "revision", result, revision)) {
                                return false;
                            } else {
                                result.v.m_parsedVersion = new System.Version.$ctor3(major.v, minor.v, build.v, revision.v);
                            }
                        } else {
                            result.v.m_parsedVersion = new System.Version.$ctor2(major.v, minor.v, build.v);
                        }
                    } else {
                        result.v.m_parsedVersion = new System.Version.$ctor1(major.v, minor.v);
                    }

                    return true;
                },
                tryParseComponent: function (component, componentName, result, parsedComponent) {
                    if (!System.Int32.tryParse(component, parsedComponent)) {
                        result.v.setFailure$1(System.Version.ParseFailureKind.FormatException, component);
                        return false;
                    }

                    if (parsedComponent.v < 0) {
                        result.v.setFailure$1(System.Version.ParseFailureKind.ArgumentOutOfRangeException, componentName);
                        return false;
                    }

                    return true;
                },
                op_Equality: function (v1, v2) {
                    if (Bridge.referenceEquals(v1, null)) {
                        return Bridge.referenceEquals(v2, null);
                    }

                    return v1.equalsT(v2);
                },
                op_Inequality: function (v1, v2) {
                    return !(System.Version.op_Equality(v1, v2));
                },
                op_LessThan: function (v1, v2) {
                    if (v1 == null) {
                        throw new System.ArgumentNullException("v1");
                    }

                    return (v1.compareTo(v2) < 0);
                },
                op_LessThanOrEqual: function (v1, v2) {
                    if (v1 == null) {
                        throw new System.ArgumentNullException("v1");
                    }

                    return (v1.compareTo(v2) <= 0);
                },
                op_GreaterThan: function (v1, v2) {
                    return (System.Version.op_LessThan(v2, v1));
                },
                op_GreaterThanOrEqual: function (v1, v2) {
                    return (System.Version.op_LessThanOrEqual(v2, v1));
                }
            }
        },
        fields: {
            _Major: 0,
            _Minor: 0,
            _Build: 0,
            _Revision: 0
        },
        props: {
            Major: {
                get: function () {
                    return this._Major;
                }
            },
            Minor: {
                get: function () {
                    return this._Minor;
                }
            },
            Build: {
                get: function () {
                    return this._Build;
                }
            },
            Revision: {
                get: function () {
                    return this._Revision;
                }
            },
            MajorRevision: {
                get: function () {
                    return Bridge.Int.sxs((this._Revision >> 16) & 65535);
                }
            },
            MinorRevision: {
                get: function () {
                    return Bridge.Int.sxs((this._Revision & 65535) & 65535);
                }
            }
        },
        alias: [
            "clone", "System$ICloneable$clone",
            "compareTo", ["System$IComparable$1$System$Version$compareTo", "System$IComparable$1$compareTo"],
            "equalsT", "System$IEquatable$1$System$Version$equalsT"
        ],
        ctors: {
            init: function () {
                this._Build = -1;
                this._Revision = -1;
            },
            $ctor3: function (major, minor, build, revision) {
                this.$initialize();
                if (major < 0) {
                    throw new System.ArgumentOutOfRangeException("major", "Cannot be < 0");
                }

                if (minor < 0) {
                    throw new System.ArgumentOutOfRangeException("minor", "Cannot be < 0");
                }

                if (build < 0) {
                    throw new System.ArgumentOutOfRangeException("build", "Cannot be < 0");
                }

                if (revision < 0) {
                    throw new System.ArgumentOutOfRangeException("revision", "Cannot be < 0");
                }

                this._Major = major;
                this._Minor = minor;
                this._Build = build;
                this._Revision = revision;
            },
            $ctor2: function (major, minor, build) {
                this.$initialize();
                if (major < 0) {
                    throw new System.ArgumentOutOfRangeException("major", "Cannot be < 0");
                }

                if (minor < 0) {
                    throw new System.ArgumentOutOfRangeException("minor", "Cannot be < 0");
                }

                if (build < 0) {
                    throw new System.ArgumentOutOfRangeException("build", "Cannot be < 0");
                }

                this._Major = major;
                this._Minor = minor;
                this._Build = build;
            },
            $ctor1: function (major, minor) {
                this.$initialize();
                if (major < 0) {
                    throw new System.ArgumentOutOfRangeException("major", "Cannot be < 0");
                }

                if (minor < 0) {
                    throw new System.ArgumentOutOfRangeException("minor", "Cannot be < 0");
                }

                this._Major = major;
                this._Minor = minor;
            },
            $ctor4: function (version) {
                this.$initialize();
                var v = System.Version.parse(version);
                this._Major = v.Major;
                this._Minor = v.Minor;
                this._Build = v.Build;
                this._Revision = v.Revision;
            },
            ctor: function () {
                this.$initialize();
                this._Major = 0;
                this._Minor = 0;
            }
        },
        methods: {
            clone: function () {
                var v = new System.Version.ctor();
                v._Major = this._Major;
                v._Minor = this._Minor;
                v._Build = this._Build;
                v._Revision = this._Revision;
                return (v);
            },
            compareTo$1: function (version) {
                if (version == null) {
                    return 1;
                }

                var v = Bridge.as(version, System.Version);
                if (System.Version.op_Equality(v, null)) {
                    throw new System.ArgumentException("version should be of System.Version type");
                }

                if (this._Major !== v._Major) {
                    if (this._Major > v._Major) {
                        return 1;
                    } else {
                        return -1;
                    }
                }

                if (this._Minor !== v._Minor) {
                    if (this._Minor > v._Minor) {
                        return 1;
                    } else {
                        return -1;
                    }
                }

                if (this._Build !== v._Build) {
                    if (this._Build > v._Build) {
                        return 1;
                    } else {
                        return -1;
                    }
                }

                if (this._Revision !== v._Revision) {
                    if (this._Revision > v._Revision) {
                        return 1;
                    } else {
                        return -1;
                    }
                }

                return 0;
            },
            compareTo: function (value) {
                if (System.Version.op_Equality(value, null)) {
                    return 1;
                }

                if (this._Major !== value._Major) {
                    if (this._Major > value._Major) {
                        return 1;
                    } else {
                        return -1;
                    }
                }

                if (this._Minor !== value._Minor) {
                    if (this._Minor > value._Minor) {
                        return 1;
                    } else {
                        return -1;
                    }
                }

                if (this._Build !== value._Build) {
                    if (this._Build > value._Build) {
                        return 1;
                    } else {
                        return -1;
                    }
                }

                if (this._Revision !== value._Revision) {
                    if (this._Revision > value._Revision) {
                        return 1;
                    } else {
                        return -1;
                    }
                }

                return 0;
            },
            equals: function (obj) {
                return this.equalsT(Bridge.as(obj, System.Version));
            },
            equalsT: function (obj) {
                if (System.Version.op_Equality(obj, null)) {
                    return false;
                }

                // check that major, minor, build & revision numbers match
                if ((this._Major !== obj._Major) || (this._Minor !== obj._Minor) || (this._Build !== obj._Build) || (this._Revision !== obj._Revision)) {
                    return false;
                }

                return true;
            },
            getHashCode: function () {
                // Let's assume that most version numbers will be pretty small and just
                // OR some lower order bits together.

                var accumulator = 0;

                accumulator = accumulator | ((this._Major & 15) << 28);
                accumulator = accumulator | ((this._Minor & 255) << 20);
                accumulator = accumulator | ((this._Build & 255) << 12);
                accumulator = accumulator | (this._Revision & 4095);

                return accumulator;
            },
            toString: function () {
                if (this._Build === -1) {
                    return (this.toString$1(2));
                }
                if (this._Revision === -1) {
                    return (this.toString$1(3));
                }
                return (this.toString$1(4));
            },
            toString$1: function (fieldCount) {
                var sb;
                switch (fieldCount) {
                    case 0: 
                        return ("");
                    case 1: 
                        return (this._Major.toString());
                    case 2: 
                        sb = new System.Text.StringBuilder();
                        System.Version.appendPositiveNumber(this._Major, sb);
                        sb.append(String.fromCharCode(46));
                        System.Version.appendPositiveNumber(this._Minor, sb);
                        return sb.toString();
                    default: 
                        if (this._Build === -1) {
                            throw new System.ArgumentException("Build should be > 0 if fieldCount > 2", "fieldCount");
                        }
                        if (fieldCount === 3) {
                            sb = new System.Text.StringBuilder();
                            System.Version.appendPositiveNumber(this._Major, sb);
                            sb.append(String.fromCharCode(46));
                            System.Version.appendPositiveNumber(this._Minor, sb);
                            sb.append(String.fromCharCode(46));
                            System.Version.appendPositiveNumber(this._Build, sb);
                            return sb.toString();
                        }
                        if (this._Revision === -1) {
                            throw new System.ArgumentException("Revision should be > 0 if fieldCount > 3", "fieldCount");
                        }
                        if (fieldCount === 4) {
                            sb = new System.Text.StringBuilder();
                            System.Version.appendPositiveNumber(this._Major, sb);
                            sb.append(String.fromCharCode(46));
                            System.Version.appendPositiveNumber(this._Minor, sb);
                            sb.append(String.fromCharCode(46));
                            System.Version.appendPositiveNumber(this._Build, sb);
                            sb.append(String.fromCharCode(46));
                            System.Version.appendPositiveNumber(this._Revision, sb);
                            return sb.toString();
                        }
                        throw new System.ArgumentException("Should be < 5", "fieldCount");
                }
            }
        }
    });
