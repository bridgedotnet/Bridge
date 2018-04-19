    Bridge.define("System.Globalization.SortVersion", {
        inherits: function () { return [System.IEquatable$1(System.Globalization.SortVersion)]; },
        statics: {
            methods: {
                op_Equality: function (left, right) {
                    if (left != null) {
                        return left.equalsT(right);
                    }

                    if (right != null) {
                        return right.equalsT(left);
                    }

                    return true;
                },
                op_Inequality: function (left, right) {
                    return !(System.Globalization.SortVersion.op_Equality(left, right));
                }
            }
        },
        fields: {
            m_NlsVersion: 0,
            m_SortId: null
        },
        props: {
            FullVersion: {
                get: function () {
                    return this.m_NlsVersion;
                }
            },
            SortId: {
                get: function () {
                    return this.m_SortId;
                }
            }
        },
        alias: ["equalsT", "System$IEquatable$1$System$Globalization$SortVersion$equalsT"],
        ctors: {
            init: function () {
                this.m_SortId = new System.Guid();
            },
            ctor: function (fullVersion, sortId) {
                this.$initialize();
                this.m_SortId = sortId;
                this.m_NlsVersion = fullVersion;
            },
            $ctor1: function (nlsVersion, effectiveId, customVersion) {
                this.$initialize();
                this.m_NlsVersion = nlsVersion;

                if (System.Guid.op_Equality(customVersion, System.Guid.Empty)) {
                    var b1 = (effectiveId >> 24) & 255;
                    var b2 = ((effectiveId & 16711680) >> 16) & 255;
                    var b3 = ((effectiveId & 65280) >> 8) & 255;
                    var b4 = (effectiveId & 255) & 255;
                    customVersion = new System.Guid.$ctor2(0, 0, 0, 0, 0, 0, 0, b1, b2, b3, b4);
                }

                this.m_SortId = customVersion;
            }
        },
        methods: {
            equals: function (obj) {
                var n = Bridge.as(obj, System.Globalization.SortVersion);
                if (System.Globalization.SortVersion.op_Inequality(n, null)) {
                    return this.equalsT(n);
                }

                return false;
            },
            equalsT: function (other) {
                if (System.Globalization.SortVersion.op_Equality(other, null)) {
                    return false;
                }

                return this.m_NlsVersion === other.m_NlsVersion && System.Guid.op_Equality(this.m_SortId, other.m_SortId);
            },
            getHashCode: function () {
                return Bridge.Int.mul(this.m_NlsVersion, 7) | this.m_SortId.getHashCode();
            }
        }
    });
