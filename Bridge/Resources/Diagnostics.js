    System.Diagnostics.Debug = {
        writeln: function (text) {
            Bridge.Console.debug(text);
        },

        _fail: function (message) {
            System.Diagnostics.Debug.writeln(message);
            debugger;
        },

        assert: function (condition, message) {
            if (!condition) {
                message = 'Assert failed: ' + message;

                if (confirm(message + '\r\n\r\nBreak into debugger?')) {
                    System.Diagnostics.Debug._fail(message);
                }
            }
        },

        fail: function (message) {
            System.Diagnostics.Debug._fail(message);
        }
    }

    Bridge.define("System.Diagnostics.Stopwatch", {
        ctor: function () {
            this.$initialize();
            this._stopTime = System.Int64.Zero;
            this._startTime = System.Int64.Zero;
            this.isRunning = false;
        },

        reset: function () {
            this._stopTime = this._startTime = System.Diagnostics.Stopwatch.getTimestamp();
            this.isRunning = false;
        },

        ticks: function () {
            return (this.isRunning ? System.Diagnostics.Stopwatch.getTimestamp() : this._stopTime).sub(this._startTime);
        },

        milliseconds: function () {
            return this.ticks().mul(1000).div(System.Diagnostics.Stopwatch.frequency);
        },

        timeSpan: function () {
            return new System.TimeSpan(this.milliseconds().mul(10000));
        },

        start: function () {
            if (this.isRunning) {
                return;
            }

            this._startTime = System.Diagnostics.Stopwatch.getTimestamp();
            this.isRunning = true;
        },

        stop: function () {
            if (!this.isRunning) {
                return;
            }

            this._stopTime = System.Diagnostics.Stopwatch.getTimestamp();
            this.isRunning = false;
        },

        restart: function () {
            this.isRunning = false;
            this.start();
        },

        statics: {
            startNew: function () {
                var s = new System.Diagnostics.Stopwatch();

                s.start();

                return s;
            }
        }
    });

    if (typeof (window) !== 'undefined' && window.performance && window.performance.now) {
        System.Diagnostics.Stopwatch.frequency = new System.Int64(1e6);
        System.Diagnostics.Stopwatch.isHighResolution = true;
        System.Diagnostics.Stopwatch.getTimestamp = function () {
            return new System.Int64(Math.round(window.performance.now() * 1000));
        };
    } else if (typeof (process) !== 'undefined' && process.hrtime) {
        System.Diagnostics.Stopwatch.frequency = new System.Int64(1e9);
        System.Diagnostics.Stopwatch.isHighResolution = true;
        System.Diagnostics.Stopwatch.getTimestamp = function () {
            var hr = process.hrtime();
            return new System.Int64(hr[0]).mul(1e9).add(hr[1]);
        };
    } else {
        System.Diagnostics.Stopwatch.frequency = new System.Int64(1e3);
        System.Diagnostics.Stopwatch.isHighResolution = false;
        System.Diagnostics.Stopwatch.getTimestamp = function () {
            return new System.Int64(new Date().valueOf());
        };
    }

    System.Diagnostics.Contracts.Contract = {
        reportFailure: function (failureKind, userMessage, condition, innerException, TException) {
            var conditionText = condition.toString();

            conditionText = conditionText.substring(conditionText.indexOf("return") + 7);
            conditionText = conditionText.substr(0, conditionText.lastIndexOf(";"));

            var failureMessage = (conditionText) ? "Contract '" + conditionText + "' failed" : "Contract failed";
            var displayMessage = (userMessage) ? failureMessage + ": " + userMessage : failureMessage;

            if (TException) {
                throw new TException(conditionText, userMessage);
            } else {
                throw new System.Diagnostics.Contracts.ContractException(failureKind, displayMessage, userMessage, conditionText, innerException);
            }
        },
        assert: function (failureKind, condition, message) {
            if (!condition()) {
                System.Diagnostics.Contracts.Contract.reportFailure(failureKind, message, condition, null);
            }
        },
        requires: function (TException, condition, message) {
            if (!condition()) {
                System.Diagnostics.Contracts.Contract.reportFailure(0, message, condition, null, TException);
            }
        },
        forAll: function (fromInclusive, toExclusive, predicate) {
            if (!predicate) {
                throw new System.ArgumentNullException("predicate");
            }

            for (; fromInclusive < toExclusive; fromInclusive++) {
                if (!predicate(fromInclusive)) {
                    return false;
                }
            }

            return true;
        },
        forAll$1: function (collection, predicate) {
            if (!collection) {
                throw new System.ArgumentNullException("collection");
            }

            if (!predicate) {
                throw new System.ArgumentNullException("predicate");
            }

            var enumerator = Bridge.getEnumerator(collection);

            try {
                while (enumerator.moveNext()) {
                    if (!predicate(enumerator.getCurrent())) {
                        return false;
                    }
                }
                return true;
            } finally {
                enumerator.dispose();
            }
        },
        exists: function (fromInclusive, toExclusive, predicate) {
            if (!predicate) {
                throw new System.ArgumentNullException("predicate");
            }

            for (; fromInclusive < toExclusive; fromInclusive++) {
                if (predicate(fromInclusive)) {
                    return true;
                }
            }

            return false;
        },
        exists$1: function (collection, predicate) {
            if (!collection) {
                throw new System.ArgumentNullException("collection");
            }

            if (!predicate) {
                throw new System.ArgumentNullException("predicate");
            }

            var enumerator = Bridge.getEnumerator(collection);

            try {
                while (enumerator.moveNext()) {
                    if (predicate(enumerator.getCurrent())) {
                        return true;
                    }
                }
                return false;
            } finally {
                enumerator.dispose();
            }
        }
    };

    Bridge.define("System.Diagnostics.Contracts.ContractFailureKind", {
        $kind: "enum",
        $statics: {
            precondition: 0,
            postcondition: 1,
            postconditionOnException: 2,
            invarian: 3,
            assert: 4,
            assume: 5
        }
    });

    Bridge.define("System.Diagnostics.Contracts.ContractException", {
        inherits: [System.Exception],

        ctor: function (failureKind, failureMessage, userMessage, condition, innerException) {
            this.$initialize();
            System.Exception.ctor.call(this, failureMessage, innerException);
            this._kind = failureKind;
            this._failureMessage = failureMessage || null;
            this._userMessage = userMessage || null;
            this._condition = condition || null;
        },

        getKind: function () {
            return this._kind;
        },
        getFailure: function () {
            return this._failureMessage;
        },
        getUserMessage: function () {
            return this._userMessage;
        },
        getCondition: function () {
            return this._condition;
        }
    });
