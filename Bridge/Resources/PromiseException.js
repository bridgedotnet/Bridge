    Bridge.define("Bridge.PromiseException", {
        inherits: [System.Exception],

        ctor: function (args, message, innerException) {
            this.$initialize();
            this.arguments = System.Array.clone(args);

            if (message == null) {
                message = "Promise exception: [";
                message += this.arguments.map(function (item) { return item == null ? "null" : item.toString(); }).join(", ");
                message += "]";
            }

            System.Exception.ctor.call(this, message, innerException);
        },

        getArguments: function () {
            return this.arguments;
        }
    });
