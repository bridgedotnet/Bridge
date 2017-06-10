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
        alias: ["dispose", "System$IDisposable$dispose"],
        ctors: {
            $ctor1: function (callback, state, dueTime, period) {
                this.$initialize();
                this.timerSetup(callback, state, System.Int64(dueTime), System.Int64(period));
            },
            $ctor3: function (callback, state, dueTime, period) {
                this.$initialize();
                var dueTm = Bridge.Int.clip64(dueTime.getTotalMilliseconds());
                var periodTm = Bridge.Int.clip64(period.getTotalMilliseconds());

                this.timerSetup(callback, state, dueTm, periodTm);
            },
            $ctor4: function (callback, state, dueTime, period) {
                this.$initialize();
                this.timerSetup(callback, state, System.Int64(dueTime), System.Int64(period));
            },
            $ctor2: function (callback, state, dueTime, period) {
                this.$initialize();
                this.timerSetup(callback, state, dueTime, period);
            },
            ctor: function (callback) {
                this.$initialize();
                var dueTime = -1; // we want timer to be registered, but not activated.  Requires caller to call
                var period = -1; // Change after a timer instance is created.  This is to avoid the potential
                // for a timer to be fired before the returned value is assigned to the variable,
                // potentially causing the callback to reference a bogus value (if passing the timer to the callback).

                this.timerSetup(callback, this, System.Int64(dueTime), System.Int64(period));
            }
        },
        methods: {
            timerSetup: function (callback, state, dueTime, period) {
                if (this.disposed) {
                    throw new System.InvalidOperationException(System.Threading.Timer.EXC_DISPOSED);
                }

                if (Bridge.staticEquals(callback, null)) {
                    throw new System.ArgumentNullException("TimerCallback");
                }

                if (dueTime.lt(System.Int64(-1))) {
                    throw new System.ArgumentOutOfRangeException("dueTime", System.Threading.Timer.EXC_LESS);
                }
                if (period.lt(System.Int64(-1))) {
                    throw new System.ArgumentOutOfRangeException("period", System.Threading.Timer.EXC_LESS);
                }
                if (dueTime.gt(System.Int64(System.Threading.Timer.MAX_SUPPORTED_TIMEOUT))) {
                    throw new System.ArgumentOutOfRangeException("dueTime", System.Threading.Timer.EXC_MORE);
                }
                if (period.gt(System.Int64(System.Threading.Timer.MAX_SUPPORTED_TIMEOUT))) {
                    throw new System.ArgumentOutOfRangeException("period", System.Threading.Timer.EXC_MORE);
                }

                this.dueTime = dueTime;
                this.period = period;

                this.state = state;
                this.timerCallback = callback;

                return this.runTimer(this.dueTime);
            },
            handleCallback: function () {
                if (this.disposed) {
                    return;
                }

                if (!Bridge.staticEquals(this.timerCallback, null)) {
                    var myId = this.id;
                    this.timerCallback(this.state);

                    // timerCallback may call Change(). To prevent double call we can check if timer changed
                    if (System.Nullable.eq(this.id, myId)) {
                        this.runTimer(this.period, false);
                    }
                }
            },
            runTimer: function (period, checkDispose) {
                if (checkDispose === void 0) { checkDispose = true; }
                if (checkDispose && this.disposed) {
                    throw new System.InvalidOperationException(System.Threading.Timer.EXC_DISPOSED);
                }

                if (period.ne(System.Int64(-1)) && !this.disposed) {
                    var p = period.toNumber();
                    this.id = Bridge.global.setTimeout(Bridge.fn.cacheBind(this, this.handleCallback), p);
                    return true;
                }

                return false;
            },
            change: function (dueTime, period) {
                return this.changeTimer(System.Int64(dueTime), System.Int64(period));
            },
            change$2: function (dueTime, period) {
                return this.changeTimer(Bridge.Int.clip64(dueTime.getTotalMilliseconds()), Bridge.Int.clip64(period.getTotalMilliseconds()));
            },
            change$3: function (dueTime, period) {
                return this.changeTimer(System.Int64(dueTime), System.Int64(period));
            },
            change$1: function (dueTime, period) {
                return this.changeTimer(dueTime, period);
            },
            changeTimer: function (dueTime, period) {
                this.clearTimeout();
                return this.timerSetup(this.timerCallback, this.state, dueTime, period);
            },
            clearTimeout: function () {
                if (System.Nullable.hasValue(this.id)) {
                    Bridge.global.clearTimeout(System.Nullable.getValue(this.id));
                    this.id = null;
                }
            },
            dispose: function () {
                this.clearTimeout();
                this.disposed = true;
            }
        }
    });
