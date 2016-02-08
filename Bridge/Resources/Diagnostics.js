Bridge.Debug = {
    writeln: function (text) {
        var global = Bridge.global;
        if (global.console) {
            if (global.console.debug) {
                global.console.debug(text);
                return;
            }
            else if (global.console.log) {
                global.console.log(text);
                return;
            }
        }
        else if (global.opera && global.opera.postError) {
            global.opera.postError(text);
            return;
        }
    },

    _fail: function (message) {
        Bridge.Debug.writeln(message);
        debugger;
    },

    assert: function (condition, message) {
        if (!condition) {
            message = 'Assert failed: ' + message;
            if (confirm(message + '\r\n\r\nBreak into debugger?')) {
                Bridge.Debug._fail(message);
            }
        }
    },

    fail: function (message) {
        Bridge.Debug._fail(message);
    }
}

Bridge.define("Bridge.Stopwatch", {
    constructor: function () {
        this._stopTime = 0;
        this._startTime = 0;
        this.isRunning = false;
    },

    reset: function () {
        this._stopTime = this._startTime = Bridge.Stopwatch.getTimestamp();
        this.isRunning = false;
    },

    ticks: function () {
        return (this.isRunning ? Bridge.Stopwatch.getTimestamp() : this._stopTime) - this._startTime;
    },

    milliseconds: function () {
        return Math.round(this.ticks() / Bridge.Stopwatch.frequency * 1000);
    },

    timeSpan: function () {
        return new Bridge.TimeSpan(this.milliseconds() * 10000);
    },

    start: function () {
        if (this.isRunning)
            return;
        this._startTime = Bridge.Stopwatch.getTimestamp();
        this.isRunning = true;
    },

    stop: function () {
        if (!this.isRunning)
            return;
        this._stopTime = Bridge.Stopwatch.getTimestamp();
        this.isRunning = false;
    },

    restart: function () {
        this.isRunning = false;
        this.start();
    },

    statics: {
        startNew: function () {
            var s = new Bridge.Stopwatch();
            s.start();
            return s;
        }
    }
});

if (typeof (window) !== 'undefined' && window.performance && window.performance.now) {
    Bridge.Stopwatch.frequency = 1e6;
    Bridge.Stopwatch.isHighResolution = true;
    Bridge.Stopwatch.getTimestamp = function () { return Math.round(window.performance.now() * 1000); };
}
else if (typeof (process) !== 'undefined' && process.hrtime) {
    Bridge.Stopwatch.frequency = 1e9;
    Bridge.Stopwatch.isHighResolution = true;
    Bridge.Stopwatch.getTimestamp = function () { var hr = process.hrtime(); return hr[0] * 1e9 + hr[1]; };
}
else {
    Bridge.Stopwatch.frequency = 1e3;
    Bridge.Stopwatch.isHighResolution = false;
    Bridge.Stopwatch.getTimestamp = function () { return new Date().valueOf(); };
}

Bridge.Contract = {
	reportFailure: function (failureKind, userMessage, condition, innerException, TException) {
		var conditionText = condition.toString();
		conditionText = conditionText.substring(conditionText.indexOf("return") + 7);
		conditionText = conditionText.substr(0, conditionText.lastIndexOf(";"));

		var failureMessage = (conditionText) ? "Contract '" + conditionText + "' failed" : "Contract failed";
		var displayMessage = (userMessage) ? failureMessage + ": " + userMessage : failureMessage;

		if (TException) {
			throw new TException(conditionText, userMessage);
		}
		else {
			throw new Bridge.ContractException(failureKind, displayMessage, userMessage, conditionText, innerException);
		}
	},
	assert: function (failureKind, condition, message) {
		if (!condition()) {
			Bridge.Contract.reportFailure(failureKind, message, condition, null);
		}
	},
	requires: function (TException, condition, message) {
		if (!condition()) {
			Bridge.Contract.reportFailure(0, message, condition, null, TException);
		}
	},
	forAll: function (fromInclusive, toExclusive, predicate) {
		if (!predicate) {
			throw new Bridge.ArgumentNullException("predicate");
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
			throw new Bridge.ArgumentNullException("collection");
		}
		if (!predicate) {
			throw new Bridge.ArgumentNullException("predicate");
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
			throw new Bridge.ArgumentNullException("predicate");
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
			throw new Bridge.ArgumentNullException("collection");
		}
		if (!predicate) {
			throw new Bridge.ArgumentNullException("predicate");
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

Bridge.define("Bridge.ContractFailureKind", {
    $enum: true,
    $statics: {
        precondition: 0,
        postcondition: 1,
        postconditionOnException: 2,
        invarian: 3,
        assert: 4,
        assume: 5
    }
});

Bridge.define("Bridge.ContractException", {
    inherits: [Bridge.Exception],

    constructor: function (failureKind, failureMessage, userMessage, condition, innerException) {
        Bridge.Exception.prototype.$constructor.call(this, failureMessage, innerException);
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
	getCondition: function() {
		return this._condition;
	}
});