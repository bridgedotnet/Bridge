    Bridge.define("System.Version.VersionResult", {
        $kind: "nested struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new System.Version.VersionResult(); }
            }
        },
        fields: {
            m_parsedVersion: null,
            m_failure: 0,
            m_exceptionArgument: null,
            m_argumentName: null,
            m_canThrow: false
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
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
                    case System.Version.ParseFailureKind.ArgumentNullException: 
                        return new System.ArgumentNullException.$ctor1(this.m_argumentName);
                    case System.Version.ParseFailureKind.ArgumentException: 
                        return new System.ArgumentException.$ctor1("VersionString");
                    case System.Version.ParseFailureKind.ArgumentOutOfRangeException: 
                        return new System.ArgumentOutOfRangeException.$ctor4(this.m_exceptionArgument, "Cannot be < 0");
                    case System.Version.ParseFailureKind.FormatException: 
                        try {
                            System.Int32.parse(this.m_exceptionArgument);
                        } catch ($e1) {
                            $e1 = System.Exception.create($e1);
                            var e;
                            if (Bridge.is($e1, System.FormatException)) {
                                e = $e1;
                                return e;
                            } else if (Bridge.is($e1, System.OverflowException)) {
                                e = $e1;
                                return e;
                            } else {
                                throw $e1;
                            }
                        }
                        return new System.FormatException.$ctor1("InvalidString");
                    default: 
                        return new System.ArgumentException.$ctor1("VersionString");
                }
            },
            getHashCode: function () {
                var h = Bridge.addHash([5139482776, this.m_parsedVersion, this.m_failure, this.m_exceptionArgument, this.m_argumentName, this.m_canThrow]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, System.Version.VersionResult)) {
                    return false;
                }
                return Bridge.equals(this.m_parsedVersion, o.m_parsedVersion) && Bridge.equals(this.m_failure, o.m_failure) && Bridge.equals(this.m_exceptionArgument, o.m_exceptionArgument) && Bridge.equals(this.m_argumentName, o.m_argumentName) && Bridge.equals(this.m_canThrow, o.m_canThrow);
            },
            $clone: function (to) {
                var s = to || new System.Version.VersionResult();
                s.m_parsedVersion = this.m_parsedVersion;
                s.m_failure = this.m_failure;
                s.m_exceptionArgument = this.m_exceptionArgument;
                s.m_argumentName = this.m_argumentName;
                s.m_canThrow = this.m_canThrow;
                return s;
            }
        }
    });
