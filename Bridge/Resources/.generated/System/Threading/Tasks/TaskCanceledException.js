    Bridge.define("System.Threading.Tasks.TaskCanceledException", {
        inherits: [System.OperationCanceledException],
        fields: {
            _canceledTask: null
        },
        props: {
            Task: {
                get: function () {
                    return this._canceledTask;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.OperationCanceledException.$ctor1.call(this, "A task was canceled.");
            },
            $ctor1: function (message) {
                this.$initialize();
                System.OperationCanceledException.$ctor1.call(this, message);
            },
            $ctor2: function (message, innerException) {
                this.$initialize();
                System.OperationCanceledException.$ctor2.call(this, message, innerException);
            },
            $ctor3: function (task) {
                this.$initialize();
                System.OperationCanceledException.$ctor4.call(this, "A task was canceled.", task != null ? new System.Threading.CancellationToken() : new System.Threading.CancellationToken());
                this._canceledTask = task;
            }
        }
    });
