    Bridge.define("System.Security.SecurityException", {
        inherits: [System.SystemException],
        statics: {
            fields: {
                DemandedName: null,
                GrantedSetName: null,
                RefusedSetName: null,
                DeniedName: null,
                PermitOnlyName: null,
                UrlName: null
            },
            ctors: {
                init: function () {
                    this.DemandedName = "Demanded";
                    this.GrantedSetName = "GrantedSet";
                    this.RefusedSetName = "RefusedSet";
                    this.DeniedName = "Denied";
                    this.PermitOnlyName = "PermitOnly";
                    this.UrlName = "Url";
                }
            }
        },
        props: {
            Demanded: null,
            DenySetInstance: null,
            GrantedSet: null,
            Method: null,
            PermissionState: null,
            PermissionType: null,
            PermitOnlySetInstance: null,
            RefusedSet: null,
            Url: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.SystemException.$ctor1.call(this, "Security error.");
                this.HResult = -2146233078;
            },
            $ctor1: function (message) {
                this.$initialize();
                System.SystemException.$ctor1.call(this, message);
                this.HResult = -2146233078;
            },
            $ctor2: function (message, inner) {
                this.$initialize();
                System.SystemException.$ctor2.call(this, message, inner);
                this.HResult = -2146233078;
            },
            $ctor3: function (message, type) {
                this.$initialize();
                System.SystemException.$ctor1.call(this, message);
                this.HResult = -2146233078;
                this.PermissionType = type;
            },
            $ctor4: function (message, type, state) {
                this.$initialize();
                System.SystemException.$ctor1.call(this, message);
                this.HResult = -2146233078;
                this.PermissionType = type;
                this.PermissionState = state;
            }
        },
        methods: {
            toString: function () {
                return Bridge.toString(this);
            }
        }
    });
