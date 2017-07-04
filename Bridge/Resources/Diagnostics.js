    System.Diagnostics.Debug = {
        writeln: function (text) {
            if (Bridge.global.console && Bridge.global.console.debug) {
                Bridge.global.console.debug(text);
            }
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
            this.reset();
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

            var endTimeStamp = System.Diagnostics.Stopwatch.getTimestamp();
            var elapsedThisPeriod = endTimeStamp.sub(this._startTime);
            this._elapsed = this._elapsed.add(elapsedThisPeriod);
            this.isRunning = false;
        },

        reset: function () {
            this._startTime = System.Int64.Zero;
            this._elapsed = System.Int64.Zero;
            this.isRunning = false;
        },

        restart: function () {
            this.isRunning = false;
            this._elapsed = System.Int64.Zero;
            this._startTime = System.Diagnostics.Stopwatch.getTimestamp();
            this.start();
        },

        ticks: function () {
            var timeElapsed = this._elapsed;

            if (this.isRunning)
            {
                var currentTimeStamp = System.Diagnostics.Stopwatch.getTimestamp();
                var elapsedUntilNow = currentTimeStamp.sub(this._startTime);
                timeElapsed = timeElapsed.add(elapsedUntilNow);
            }
            return timeElapsed;
        },

        milliseconds: function () {
            return this.ticks().mul(1000).div(System.Diagnostics.Stopwatch.frequency);
        },

        timeSpan: function () {
            return new System.TimeSpan(this.milliseconds().mul(10000));
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

            var failureMessage = (conditionText) ? "Contract '" + conditionText + "' failed" : "Contract failed",
                displayMessage = (userMessage) ? failureMessage + ": " + userMessage : failureMessage;

            if (TException) {
                throw new TException(conditionText, userMessage);
            } else {
                throw new System.Diagnostics.Contracts.ContractException(failureKind, displayMessage, userMessage, conditionText, innerException);
            }
        },
        assert: function (failureKind, scope, condition, message) {
            if (!condition.call(scope)) {
                System.Diagnostics.Contracts.Contract.reportFailure(failureKind, message, condition, null);
            }
        },
        requires: function (TException, scope, condition, message) {
            if (!condition.call(scope)) {
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
                    if (!predicate(enumerator.Current)) {
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
                    if (predicate(enumerator.Current)) {
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

        config: {
            properties: {
                Kind: {
                    get: function() {
                        return this._kind;
                    }
                },

                Failure: {
                    get: function () {
                        return this._failureMessage;
                    }
                },

                UserMessage: {
                    get: function () {
                        return this._userMessage;
                    }
                },

                Condition: {
                    get: function () {
                        return this._condition;
                    }
                }
            }  
        },

        ctor: function (failureKind, failureMessage, userMessage, condition, innerException) {
            this.$initialize();
            System.Exception.ctor.call(this, failureMessage, innerException);
            this._kind = failureKind;
            this._failureMessage = failureMessage || null;
            this._userMessage = userMessage || null;
            this._condition = condition || null;
        }
    });
