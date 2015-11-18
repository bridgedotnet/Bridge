// @source Exception.js

Bridge.define("Bridge.Exception", {
    constructor: function (message, innerException) {
        this.message = message;
        this.innerException = innerException;
        this.errorStack = new Error();
        this.data = new Bridge.Dictionary$2(Object, Object)();
    },

    getMessage: function () {
        return this.message;
    },

    getInnerException: function () {
        return this.innerException;
    },

    getStackTrace: function () {
        return this.errorStack.stack;
    },

    getData: function () {
        return this.data;
    },

    toString: function () {
        return this.getMessage();
    },

    statics: {
        create: function (error) {
            if (Bridge.is(error, Bridge.Exception)) {
                return error;
            }

            if (error instanceof TypeError) {
                return new Bridge.NullReferenceException(error.message, new Bridge.ErrorException(error));
            } else if (error instanceof RangeError) {
                return new Bridge.ArgumentOutOfRangeException(null, error.message, new Bridge.ErrorException(error));
            } else if (error instanceof Error) {
                return new Bridge.ErrorException(error);
            } else {
                return new Bridge.Exception(error ? error.toString() : null);
            }
        }
    }
});

Bridge.define("Bridge.ErrorException", {
    inherits: [Bridge.Exception],

    constructor: function (error) {
        Bridge.Exception.prototype.$constructor.call(this, error.message);
        this.errorStack = error;
        this.error = error;
    },

    getError: function () {
        return this.error;
    }
});

Bridge.define("Bridge.ArgumentException", {
    inherits: [Bridge.Exception],

    constructor: function (message, paramName, innerException) {
        Bridge.Exception.prototype.$constructor.call(this, message || "Value does not fall within the expected range.", innerException);
        this.paramName = paramName;
    },

    getParamName: function () {
        return this.paramName;
    }
});

Bridge.define("Bridge.ArgumentNullException", {
    inherits: [Bridge.ArgumentException],

    constructor: function (paramName, message, innerException) {
        if (!message) {
            message = "Value cannot be null.";

            if (paramName) {
                message += "\nParameter name: " + paramName;
            }
        }

        Bridge.ArgumentException.prototype.$constructor.call(this, message, paramName, innerException);
    }
});

Bridge.define("Bridge.ArgumentOutOfRangeException", {
    inherits: [Bridge.ArgumentException],

    constructor: function (paramName, message, innerException, actualValue) {
        if (!message) {
            message = "Value is out of range.";

            if (paramName) {
                message += "\nParameter name: " + paramName;
            }
        }

        Bridge.ArgumentException.prototype.$constructor.call(this, message, paramName, innerException);

        this.actualValue = actualValue;
    },

    getActualValue: function () {
        return this.actualValue;
    }
});

Bridge.define("Bridge.CultureNotFoundException", {
    inherits: [Bridge.ArgumentException],

    constructor: function (paramName, invalidCultureName, message, innerException) {
        if (!message) {
            message = "Culture is not supported.";

            if (paramName) {
                message += "\nParameter name: " + paramName;
            }

            if (invalidCultureName) {
                message += "\n" + invalidCultureName + " is an invalid culture identifier.";
            }
        }

        Bridge.ArgumentException.prototype.$constructor.call(this, message, paramName, innerException);

        this.invalidCultureName = invalidCultureName;
    },

    getInvalidCultureName: function () {
        return this.invalidCultureName;
    }
});

Bridge.define("Bridge.KeyNotFoundException", {
    inherits: [Bridge.Exception],

    constructor: function (message, innerException) {
        Bridge.Exception.prototype.$constructor.call(this, message || "Key not found.", innerException);
    }
});

Bridge.define("Bridge.ArithmeticException", {
    inherits: [Bridge.Exception],

    constructor: function (message, innerException) {
        Bridge.Exception.prototype.$constructor.call(this, message || "Overflow or underflow in the arithmetic operation.", innerException);
    }
});

Bridge.define("Bridge.DivideByZeroException", {
    inherits: [Bridge.ArithmeticException],

    constructor: function (message, innerException) {
        Bridge.ArithmeticException.prototype.$constructor.call(this, message || "Division by 0.", innerException);
    }
});

Bridge.define("Bridge.OverflowException", {
    inherits: [Bridge.ArithmeticException],

    constructor: function (message, innerException) {
        Bridge.ArithmeticException.prototype.$constructor.call(this, message || "Arithmetic operation resulted in an overflow.", innerException);
    }
});

Bridge.define("Bridge.FormatException", {
    inherits: [Bridge.Exception],

    constructor: function (message, innerException) {
        Bridge.Exception.prototype.$constructor.call(this, message || "Invalid format.", innerException);
    }
});

Bridge.define("Bridge.InvalidCastException", {
    inherits: [Bridge.Exception],

    constructor: function (message, innerException) {
        Bridge.Exception.prototype.$constructor.call(this, message || "The cast is not valid.", innerException);
    }
});

Bridge.define("Bridge.InvalidOperationException", {
    inherits: [Bridge.Exception],

    constructor: function (message, innerException) {
        Bridge.Exception.prototype.$constructor.call(this, message || "Operation is not valid due to the current state of the object.", innerException);
    }
});

Bridge.define("Bridge.NotImplementedException", {
    inherits: [Bridge.Exception],

    constructor: function (message, innerException) {
        Bridge.Exception.prototype.$constructor.call(this, message || "The method or operation is not implemented.", innerException);
    }
});

Bridge.define("Bridge.NotSupportedException", {
    inherits: [Bridge.Exception],

    constructor: function (message, innerException) {
        Bridge.Exception.prototype.$constructor.call(this, message || "Specified method is not supported.", innerException);
    }
});

Bridge.define("Bridge.NullReferenceException", {
    inherits: [Bridge.Exception],

    constructor: function (message, innerException) {
        Bridge.Exception.prototype.$constructor.call(this, message || "Object is null.", innerException);
    }
});

Bridge.define("Bridge.RankException", {
    inherits: [Bridge.Exception],

    constructor: function (message, innerException) {
        Bridge.Exception.prototype.$constructor.call(this, message || "Attempted to operate on an array with the incorrect number of dimensions.", innerException);
    }
});
