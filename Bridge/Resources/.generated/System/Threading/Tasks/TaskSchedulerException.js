    Bridge.define("System.Threading.Tasks.TaskSchedulerException", {
        inherits: [System.Exception],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Exception.ctor.call(this, "An exception was thrown by a TaskScheduler.");
            },
            $ctor2: function (message) {
                this.$initialize();
                System.Exception.ctor.call(this, message);
            },
            $ctor1: function (innerException) {
                this.$initialize();
                System.Exception.ctor.call(this, "An exception was thrown by a TaskScheduler.", innerException);
            },
            $ctor3: function (message, innerException) {
                this.$initialize();
                System.Exception.ctor.call(this, message, innerException);
            }
        }
    });
