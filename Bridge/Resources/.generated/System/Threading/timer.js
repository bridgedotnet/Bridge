    Bridge.define("System.Threading.Timer", {
        inherits: [System.IDisposable],
        statics: {
            fields: {
                MAX_SUPPORTED_TIMEOUT: 0,
                EXC_LESS: null,
                EXC_MORE: null,
                EXC_DISPOSED: null
            },
            ctors: {
                init: function () {
                    this.MAX_SUPPORTED_TIMEOUT = 4294967294;
                    this.EXC_LESS = "Number must be either non-negative and less than or equal to Int32.MaxValue or -1.";
                    this.EXC_MORE = "Time-out interval must be less than 2^32-2.";
                    this.EXC_DISPOSED = "The timer has been already disposed.";
                }
            }
        },
        fields: {
            dueTime: System.Int64(0),
            period: System.Int64(0),
            timerCallback: null,
            state: null,
            id: null,
            disposed: false
        },
        alias: ["Dispose", "System$IDisposable$Dispose"],
        ctors: {
            $ctor1: function (callback, state, dueTime, period) {
                this.$initialize();
                this.TimerSetup(callback, state, System.Int64(dueTime), System.Int64(period));
            },
            $ctor3: function (callback, state, dueTime, period) {
                this.$initialize();
                var dueTm = Bridge.Int.clip64(dueTime.getTotalMilliseconds());
                var periodTm = Bridge.Int.clip64(period.getTotalMilliseconds());

                this.TimerSetup(callback, state, dueTm, periodTm);
            },
            $ctor4: function (callback, state, dueTime, period) {
                this.$initialize();
                this.TimerSetup(callback, state, System.Int64(dueTime), System.Int64(period));
            },
            $ctor2: function (callback, state, dueTime, period) {
                this.$initialize();
                this.TimerSetup(callback, state, dueTime, period);
            },
            ctor: function (callback) {
                this.$initialize();
                var dueTime = -1;
                var period = -1;

                this.TimerSetup(callback, this, System.Int64(dueTime), System.Int64(period));
            }
        },
        methods: {
            TimerSetup: function (callback, state, dueTime, period) {
                if (this.disposed) {
                    throw new System.InvalidOperationException.$ctor1(System.Threading.Timer.EXC_DISPOSED);
                }

                if (Bridge.staticEquals(callback, null)) {
                    throw new System.ArgumentNullException.$ctor1("TimerCallback");
                }

                if (dueTime.lt(System.Int64(-1))) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("dueTime", System.Threading.Timer.EXC_LESS);
                }
                if (period.lt(System.Int64(-1))) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("period", System.Threading.Timer.EXC_LESS);
                }
                if (dueTime.gt(System.Int64(System.Threading.Timer.MAX_SUPPORTED_TIMEOUT))) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("dueTime", System.Threading.Timer.EXC_MORE);
                }
                if (period.gt(System.Int64(System.Threading.Timer.MAX_SUPPORTED_TIMEOUT))) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("period", System.Threading.Timer.EXC_MORE);
                }

                this.dueTime = dueTime;
                this.period = period;

                this.state = state;
                this.timerCallback = callback;

                return this.RunTimer(this.dueTime);
            },
            HandleCallback: function () {
                if (this.disposed) {
                    return;
                }

                if (!Bridge.staticEquals(this.timerCallback, null)) {
                    var myId = this.id;
                    this.timerCallback(this.state);

                    if (System.Nullable.eq(this.id, myId)) {
                        this.RunTimer(this.period, false);
                    }
                }
            },
            RunTimer: function (period, checkDispose) {
                if (checkDispose === void 0) { checkDispose = true; }
                if (checkDispose && this.disposed) {
                    throw new System.InvalidOperationException.$ctor1(System.Threading.Timer.EXC_DISPOSED);
                }

                if (period.ne(System.Int64(-1)) && !this.disposed) {
                    var p = period.toNumber();
                    this.id = Bridge.global.setTimeout(Bridge.fn.cacheBind(this, this.HandleCallback), p);
                    return true;
                }

                return false;
            },
            Change: function (dueTime, period) {
                return this.ChangeTimer(System.Int64(dueTime), System.Int64(period));
            },
            Change$2: function (dueTime, period) {
                return this.ChangeTimer(Bridge.Int.clip64(dueTime.getTotalMilliseconds()), Bridge.Int.clip64(period.getTotalMilliseconds()));
            },
            Change$3: function (dueTime, period) {
                return this.ChangeTimer(System.Int64(dueTime), System.Int64(period));
            },
            Change$1: function (dueTime, period) {
                return this.ChangeTimer(dueTime, period);
            },
            ChangeTimer: function (dueTime, period) {
                this.ClearTimeout();
                return this.TimerSetup(this.timerCallback, this.state, dueTime, period);
            },
            ClearTimeout: function () {
                if (System.Nullable.hasValue(this.id)) {
                    Bridge.global.clearTimeout(System.Nullable.getValue(this.id));
                    this.id = null;
                }
            },
            Dispose: function () {
                this.ClearTimeout();
                this.disposed = true;
            }
        }
    });
