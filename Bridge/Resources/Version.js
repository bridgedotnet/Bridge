// @source Version.js

Bridge.define("Bridge.Version", {
    inherits: function() {
        return [Bridge.ICloneable, Bridge.IComparable$1(Bridge.Version), Bridge.IEquatable$1(Bridge.Version)];
    },

    statics: {
        separatorsArray: ".",

        config: {
            init: function() {
                this.ZERO_CHAR_VALUE = Bridge.cast(48, Bridge.Int);
            }
        },

        appendPositiveNumber: function(num, sb) {
            var index = sb.getLength();
            var reminder;

            do {
                reminder = num % 10;
                num = Bridge.Int.div(num, 10);
                sb.insert(index, String.fromCharCode(Bridge.cast((Bridge.Version.ZERO_CHAR_VALUE + reminder), Bridge.Int)));
            } while (num > 0);
        },

        parse: function(input) {
            if (input === null) {
                throw new Bridge.ArgumentNullException("input");
            }

            var r = { v: new Bridge.Version.VersionResult() };

            r.v.init("input", true);

            if (!Bridge.Version.tryParseVersion(input, r)) {
                throw r.v.getVersionParseException();
            }

            return r.v.m_parsedVersion;
        },

        tryParse: function(input, result) {
            var r = { v: new Bridge.Version.VersionResult() };

            r.v.init("input", false);

            var b = Bridge.Version.tryParseVersion(input, r);

            result.v = r.v.m_parsedVersion;

            return b;
        },

        tryParseVersion: function(version, result) {
            var major = {}, minor = {}, build = {}, revision = {};

            if (version === null) {
                result.v.setFailure(Bridge.Version.ParseFailureKind.argumentNullException);
                return false;
            }

            var parsedComponents = version.split(Bridge.Version.separatorsArray);
            var parsedComponentsLength = parsedComponents.length;

            if ((parsedComponentsLength < 2) || (parsedComponentsLength > 4)) {
                result.v.setFailure(Bridge.Version.ParseFailureKind.argumentException);

                return false;
            }

            if (!Bridge.Version.tryParseComponent(parsedComponents[0], "version", result, major)) {
                return false;
            }

            if (!Bridge.Version.tryParseComponent(parsedComponents[1], "version", result, minor)) {
                return false;
            }

            parsedComponentsLength -= 2;

            if (parsedComponentsLength > 0) {
                if (!Bridge.Version.tryParseComponent(parsedComponents[2], "build", result, build)) {
                    return false;
                }

                parsedComponentsLength--;

                if (parsedComponentsLength > 0) {
                    if (!Bridge.Version.tryParseComponent(parsedComponents[3], "revision", result, revision)) {
                        return false;
                    } else {
                        result.v.m_parsedVersion = new Bridge.Version("constructor$3", major.v, minor.v, build.v, revision.v);
                    }
                } else {
                    result.v.m_parsedVersion = new Bridge.Version("constructor$2", major.v, minor.v, build.v);
                }
            } else {
                result.v.m_parsedVersion = new Bridge.Version("constructor$1", major.v, minor.v);
            }

            return true;
        },

        tryParseComponent: function(component, componentName, result, parsedComponent) {
            if (!Bridge.Int.tryParseInt(component, parsedComponent, -2147483648, 2147483647)) {
                result.v.setFailure$1(Bridge.Version.ParseFailureKind.formatException, component);

                return false;
            }

            if (parsedComponent.v < 0) {
                result.v.setFailure$1(Bridge.Version.ParseFailureKind.argumentOutOfRangeException, componentName);

                return false;
            }

            return true;
        },

        op_Equality: function(v1, v2) {
            if (v1 === null) {
                return v2 === null;
            }

            return v1.equals(v2);
        },

        op_Inequality: function(v1, v2) {
            return !(Bridge.Version.op_Equality(v1, v2));
        },

        op_LessThan: function(v1, v2) {
            if (v1 === null && v2 === null) {
                return false;
            }

            if (v2 === null) {
                return (v1.compareTo(v2) < 0);
            }

            return (v2.compareTo(v1) > 0);
        },

        op_LessThanOrEqual: function(v1, v2) {
            if (v1 === null && v2 === null) {
                return false;
            }

            if (v2 === null) {
                return (v1.compareTo(v2) <= 0);
            }

            return (v2.compareTo(v1) >= 0);
        },

        op_GreaterThan: function(v1, v2) {
            return (Bridge.Version.op_LessThan(v2, v1));
        },

        op_GreaterThanOrEqual: function(v1, v2) {
            return (Bridge.Version.op_LessThanOrEqual(v2, v1));
        }
    },

    _Major: 0,
    _Minor: 0,

    config: {
        init: function() {
            this._Build = -1;
            this._Revision = -1;
        }
    },

    constructor$3: function(major, minor, build, revision) {
        if (major < 0) {
            throw new Bridge.ArgumentOutOfRangeException("major", "Cannot be < 0");
        }

        if (minor < 0) {
            throw new Bridge.ArgumentOutOfRangeException("minor", "Cannot be < 0");
        }

        if (build < 0) {
            throw new Bridge.ArgumentOutOfRangeException("build", "Cannot be < 0");
        }

        if (revision < 0) {
            throw new Bridge.ArgumentOutOfRangeException("revision", "Cannot be < 0");
        }

        this._Major = major;
        this._Minor = minor;
        this._Build = build;
        this._Revision = revision;
    },

    constructor$2: function(major, minor, build) {
        if (major < 0) {
            throw new Bridge.ArgumentOutOfRangeException("major", "Cannot be < 0");
        }

        if (minor < 0) {
            throw new Bridge.ArgumentOutOfRangeException("minor", "Cannot be < 0");
        }

        if (build < 0) {
            throw new Bridge.ArgumentOutOfRangeException("build", "Cannot be < 0");
        }

        this._Major = major;
        this._Minor = minor;
        this._Build = build;
    },

    constructor$1: function(major, minor) {
        if (major < 0) {
            throw new Bridge.ArgumentOutOfRangeException("major", "Cannot be < 0");
        }

        if (minor < 0) {
            throw new Bridge.ArgumentOutOfRangeException("minor", "Cannot be < 0");
        }

        this._Major = major;
        this._Minor = minor;
    },

    constructor$4: function(version) {
        var v = Bridge.Version.parse(version);

        this._Major = v.getMajor();
        this._Minor = v.getMinor();
        this._Build = v.getBuild();
        this._Revision = v.getRevision();
    },

    constructor: function() {
        this._Major = 0;
        this._Minor = 0;
    },

    getMajor: function() {
        return this._Major;
    },

    getMinor: function() {
        return this._Minor;
    },

    getBuild: function() {
        return this._Build;
    },

    getRevision: function() {
        return this._Revision;
    },

    getMajorRevision: function() {
        return this._Revision >> 16;
    },

    getMinorRevision: function() {
        var n = this._Revision & 65535;

        if (n > 32767) {
            n = -((n & 32767) ^ 32767) - 1;
        }

        return n;
    },

    clone: function() {
        var v = new Bridge.Version("constructor");

        v._Major = this._Major;
        v._Minor = this._Minor;
        v._Build = this._Build;
        v._Revision = this._Revision;

        return (v);
    },

    compareInternal: function(v) {
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

    compareTo$1: function(version) {
        if (version === null) {
            return 1;
        }

        var v = Bridge.as(version, Bridge.Version);

        if (v === null) {
            throw new Bridge.ArgumentException("version should be of Bridge.Version type");
        }

        return this.compareInternal(v);
    },

    compareTo: function(value) {
        if (value === null) {
            return 1;
        }

        return this.compareInternal(value);
    },
    equals$1: function (obj) {
        var v = Bridge.as(obj, Bridge.Version);

        if (v === null) {
            return false;
        }

        // check that major, minor, build & revision numbers match
        if ((this._Major !== v._Major) || (this._Minor !== v._Minor) || (this._Build !== v._Build) || (this._Revision !== v._Revision)) {
            return false;
        }

        return true;
    },
    equals: function(v) {
        return this.equals$1(v);
    },
    getHashCode: function () {
        // Let's assume that most version numbers will be pretty small and just OR some lower order bits together.
        var accumulator = 0;

        accumulator |= (this._Major & 15) << 28;
        accumulator |= (this._Minor & 255) << 20;
        accumulator |= (this._Build & 255) << 12;
        accumulator |= (this._Revision & 4095);

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
                sb = new Bridge.Text.StringBuilder();
                Bridge.Version.appendPositiveNumber(this._Major, sb);
                sb.append(String.fromCharCode(46));
                Bridge.Version.appendPositiveNumber(this._Minor, sb);

                return sb.toString();
            default:
                if (this._Build === -1) {
                    throw new Bridge.ArgumentException("Build should be > 0 if fieldCount > 2", "fieldCount");
                }

                if (fieldCount === 3) {
                    sb = new Bridge.Text.StringBuilder();
                    Bridge.Version.appendPositiveNumber(this._Major, sb);
                    sb.append(String.fromCharCode(46));
                    Bridge.Version.appendPositiveNumber(this._Minor, sb);
                    sb.append(String.fromCharCode(46));
                    Bridge.Version.appendPositiveNumber(this._Build, sb);

                    return sb.toString();
                }

                if (this._Revision === -1) {
                    throw new Bridge.ArgumentException("Revision should be > 0 if fieldCount > 3", "fieldCount");
                }

                if (fieldCount === 4) {
                    sb = new Bridge.Text.StringBuilder();
                    Bridge.Version.appendPositiveNumber(this._Major, sb);
                    sb.append(String.fromCharCode(46));
                    Bridge.Version.appendPositiveNumber(this._Minor, sb);
                    sb.append(String.fromCharCode(46));
                    Bridge.Version.appendPositiveNumber(this._Build, sb);
                    sb.append(String.fromCharCode(46));
                    Bridge.Version.appendPositiveNumber(this._Revision, sb);

                    return sb.toString();
                }

                throw new Bridge.ArgumentException("Should be < 5", "fieldCount");
        }
    }
});

Bridge.define("Bridge.Version.ParseFailureKind", {
    statics: {
        argumentNullException: 0,
        argumentException: 1,
        argumentOutOfRangeException: 2,
        formatException: 3
    }
});

Bridge.define("Bridge.Version.VersionResult", {
    m_parsedVersion: null,
    m_failure: 0,
    m_exceptionArgument: null,
    m_argumentName: null,
    m_canThrow: false,
    constructor: function () {
    },

    init: function (argumentName, canThrow) {
        this.m_canThrow = canThrow;
        this.m_argumentName = argumentName;
    },

    setFailure: function (failure) {
        this.setFailure$1(failure, "");
    },

    setFailure$1: function (failure, argument) {
        this.m_failure = failure;
        this.m_exceptionArgument = argument;

        if (this.m_canThrow) {
            throw this.getVersionParseException();
        }
    },

    getVersionParseException: function () {
        switch (this.m_failure) {
            case Bridge.Version.ParseFailureKind.argumentNullException:
                return new Bridge.ArgumentNullException(this.m_argumentName);
            case Bridge.Version.ParseFailureKind.argumentException:
                return new Bridge.ArgumentException("VersionString");
            case Bridge.Version.ParseFailureKind.argumentOutOfRangeException:
                return new Bridge.ArgumentOutOfRangeException(this.m_exceptionArgument, "Cannot be < 0");
            case Bridge.Version.ParseFailureKind.formatException:
                try {
                    Bridge.Int.parseInt(this.m_exceptionArgument, -2147483648, 2147483647);
                }
                catch ($e) {
                    $e = Bridge.Exception.create($e);
                    var e;

                    if (Bridge.is($e, Bridge.FormatException)) {
                        e = $e;

                        return e;
                    } else if (Bridge.is($e, Bridge.OverflowException)) {
                        e = $e;

                        return e;
                    } else {
                        throw $e;
                    }
                }
                return new Bridge.FormatException("InvalidString");
            default:
                return new Bridge.ArgumentException("VersionString");
        }
    },

    getHashCode: function () {
        var hash = 17;

        hash = hash * 23 + (this.m_parsedVersion == null ? 0 : Bridge.getHashCode(this.m_parsedVersion));
        hash = hash * 23 + (this.m_failure == null ? 0 : Bridge.getHashCode(this.m_failure));
        hash = hash * 23 + (this.m_exceptionArgument == null ? 0 : Bridge.getHashCode(this.m_exceptionArgument));
        hash = hash * 23 + (this.m_argumentName == null ? 0 : Bridge.getHashCode(this.m_argumentName));
        hash = hash * 23 + (this.m_canThrow == null ? 0 : Bridge.getHashCode(this.m_canThrow));

        return hash;
    },

    equals: function (o) {
        if (!Bridge.is(o, Bridge.Version.VersionResult)) {
            return false;
        }

        return Bridge.equals(this.m_parsedVersion, o.m_parsedVersion) && Bridge.equals(this.m_failure, o.m_failure) && Bridge.equals(this.m_exceptionArgument, o.m_exceptionArgument) && Bridge.equals(this.m_argumentName, o.m_argumentName) && Bridge.equals(this.m_canThrow, o.m_canThrow);
    },

    $clone: function (to) {
        var s = to || new Bridge.Version.VersionResult();

        s.m_parsedVersion = this.m_parsedVersion;
        s.m_failure = this.m_failure;
        s.m_exceptionArgument = this.m_exceptionArgument;
        s.m_argumentName = this.m_argumentName;
        s.m_canThrow = this.m_canThrow;

        return s;
    }
});
