    Bridge.define("System.ObjectDisposedException", {
        inherits: [System.InvalidOperationException],
        fields: {
            _objectName: null
        },
        props: {
            Message: {
                get: function () {
                    var name = this.ObjectName;
                    if (name == null || name.length === 0) {
                        return Bridge.ensureBaseProperty(this, "Message").$System$Exception$Message;
                    }

                    var objectDisposed = System.SR.Format("Object name: '{0}'.", name);
                    return (Bridge.ensureBaseProperty(this, "Message").$System$Exception$Message || "") + ("\n" || "") + (objectDisposed || "");
                }
            },
            ObjectName: {
                get: function () {
                    if (this._objectName == null) {
                        return "";
                    }
                    return this._objectName;
                }
            }
        },
        ctors: {
            ctor: function () {
                System.ObjectDisposedException.$ctor3.call(this, null, "Cannot access a disposed object.");
            },
            $ctor1: function (objectName) {
                System.ObjectDisposedException.$ctor3.call(this, objectName, "Cannot access a disposed object.");
            },
            $ctor3: function (objectName, message) {
                this.$initialize();
                System.InvalidOperationException.$ctor1.call(this, message);
                this.HResult = -2146232798;
                this._objectName = objectName;
            },
            $ctor2: function (message, innerException) {
                this.$initialize();
                System.InvalidOperationException.$ctor2.call(this, message, innerException);
                this.HResult = -2146232798;
            }
        }
    });
