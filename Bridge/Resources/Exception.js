Bridge.define("System.Exception", {
        config: {
            properties: {
                Message: {
                    get: function() {
                        return this.message;
                    }
                },

                InnerException: {
                    get: function () {
                        return this.innerException;
                    }
                },

                StackTrace: {
                    get: function () {
                        return this.errorStack.stack;
                    }
                },

                Data: {
                    get: function () {
                        return this.data;
                    }
                }
            }
        },

        ctor: function (message, innerException) {
            this.$initialize();
            this.message = message ? message : ("Exception of type '" + Bridge.getTypeName(this) + "' was thrown.");
            this.innerException = innerException ? innerException : null;
            this.errorStack = new Error(this.message);
            this.data = new (System.Collections.Generic.Dictionary$2(System.Object, System.Object))();
        },

        getBaseException: function() {
            var inner = this.innerException;
            var back = this;
            
            while (inner != null) {
                back = inner;
                inner = inner.innerException;
            }
            
            return back;  
        },

        toString: function () {
            var builder = Bridge.getTypeName(this);

            if (this.Message != null) {
                builder += ": " + this.Message + "\n";
            } else {
                builder += "\n";
            }
                
            if (this.StackTrace != null) {
                builder += this.StackTrace + "\n";
            }
                
            return builder;
        },

        statics: {
            create: function (error) {
                if (Bridge.is(error, System.Exception)) {
                    return error;
                }

                var ex;

                if (error instanceof TypeError) {
                    ex = new System.NullReferenceException(error.message, new Bridge.ErrorException(error));
                } else if (error instanceof RangeError) {
                    ex = new System.ArgumentOutOfRangeException(null, error.message, new Bridge.ErrorException(error));
                } else if (error instanceof Error) {
                    return new Bridge.ErrorException(error);
                } else if (error && error.error && error.error.stack) {
                    ex = new System.Exception(error.error.stack);
                } else {
                    ex = new System.Exception(error ? error.message ? error.message : error.toString() : null);
                }

                ex.errorStack = error;

                return ex;
            }
        }
    });

    Bridge.define("System.SystemException", {
        inherits: [System.Exception],

        ctor: function (message, innerException) {
            this.$initialize();
            System.Exception.ctor.call(this, message || "System error.", innerException);
        }
    });

    Bridge.define("System.OutOfMemoryException", {
        inherits: [System.SystemException],

        ctor: function (message, innerException) {
            this.$initialize();

            if (!message) {
                message = "Insufficient memory to continue the execution of the program.";
            }

            System.SystemException.ctor.call(this, message, innerException);
        }
    });

    Bridge.define("System.IndexOutOfRangeException", {
        inherits: [System.SystemException],

        ctor: function (message, innerException) {
            this.$initialize();

            if (!message) {
                message = "Index was outside the bounds of the array.";
            }

            System.SystemException.ctor.call(this, message, innerException);
        }
    });

    Bridge.define("System.TimeoutException", {
        inherits: [System.SystemException],

        ctor: function (message, innerException) {
            this.$initialize();

            if (!message) {
                message = "The operation has timed out.";
            }

            System.SystemException.ctor.call(this, message, innerException);
        }
    });

    Bridge.define("System.RegexMatchTimeoutException", {
        inherits: [System.TimeoutException],

        _regexInput: "",

        _regexPattern: "",

        _matchTimeout: null,

        config: {
            init: function () {
                this._matchTimeout = System.TimeSpan.fromTicks(-1);
            }
        },

        ctor: function (message, innerException, matchTimeout) {
            this.$initialize();

            if (arguments.length == 3) {
                this._regexInput = message;
                this._regexPattern = innerException;
                this._matchTimeout = matchTimeout;

                message = "The RegEx engine has timed out while trying to match a pattern to an input string. This can occur for many reasons, including very large inputs or excessive backtracking caused by nested quantifiers, back-references and other factors.";
                innerException = null;
            }

            System.TimeoutException.ctor.call(this, message, innerException);
        },

        getPattern: function () {
            return this._regexPattern;
        },

        getInput: function () {
            return this._regexInput;
        },

        getMatchTimeout: function () {
            return this._matchTimeout;
        }
    });

    Bridge.define("Bridge.ErrorException", {
        inherits: [System.Exception],

        ctor: function (error) {
            this.$initialize();
            System.Exception.ctor.call(this, error.message);
            this.errorStack = error;
            this.error = error;
        },

        getError: function () {
            return this.error;
        }
    });

    Bridge.define("System.ArgumentException", {
        inherits: [System.Exception],

        config: {
            properties: {
                ParamName: {
                    get: function() {
                        return this.paramName;
                    }
                }
            }  
        },

        ctor: function (message, paramName, innerException) {
            this.$initialize();
            System.Exception.ctor.call(this, message || "Value does not fall within the expected range.", innerException);
            this.paramName = paramName ? paramName : null;
        }
    });

    Bridge.define("System.ArgumentNullException", {
        inherits: [System.ArgumentException],

        ctor: function (paramName, message, innerException) {
            this.$initialize();

            if (!message) {
                message = "Value cannot be null.";

                if (paramName) {
                    message += "\nParameter name: " + paramName;
                }
            }

            System.ArgumentException.ctor.call(this, message, paramName, innerException);
        }
    });

    Bridge.define("System.ArgumentOutOfRangeException", {
        inherits: [System.ArgumentException],

        config: {
            properties: {
                ActualValue: {
                    get: function () {
                        return this.actualValue;
                    }
                }
            }
        },

        ctor: function (paramName, message, innerException, actualValue) {
            this.$initialize();

            if (!message) {
                message = "Value is out of range.";

                if (paramName) {
                    message += "\nParameter name: " + paramName;
                }
            }

            System.ArgumentException.ctor.call(this, message, paramName, innerException);

            this.actualValue = actualValue ? actualValue : null;
        }
    });

    Bridge.define("System.Globalization.CultureNotFoundException", {
        inherits: [System.ArgumentException],

        ctor: function (paramName, invalidCultureName, message, innerException, invalidCultureId) {
            this.$initialize();

            if (!message) {
                message = "Culture is not supported.";

                if (paramName) {
                    message += "\nParameter name: " + paramName;
                }

                if (invalidCultureName) {
                    message += "\n" + invalidCultureName + " is an invalid culture identifier.";
                }
            }

            System.ArgumentException.ctor.call(this, message, paramName, innerException);

            this.invalidCultureName = invalidCultureName ? invalidCultureName : null;
            this.invalidCultureId = invalidCultureId ? invalidCultureId : null;
        },

        getInvalidCultureName: function () {
            return this.invalidCultureName;
        },

        getInvalidCultureId: function () {
            return this.invalidCultureId;
        }
    });

    Bridge.define("System.Collections.Generic.KeyNotFoundException", {
        inherits: [System.Exception],

        ctor: function (message, innerException) {
            this.$initialize();
            System.Exception.ctor.call(this, message || "Key not found.", innerException);
        }
    });

    Bridge.define("System.ArithmeticException", {
        inherits: [System.Exception],

        ctor: function (message, innerException) {
            this.$initialize();
            System.Exception.ctor.call(this, message || "Overflow or underflow in the arithmetic operation.", innerException);
        }
    });

    Bridge.define("System.DivideByZeroException", {
        inherits: [System.ArithmeticException],

        ctor: function (message, innerException) {
            this.$initialize();
            System.ArithmeticException.ctor.call(this, message || "Attempted to divide by zero.", innerException);
        }
    });

    Bridge.define("System.OverflowException", {
        inherits: [System.ArithmeticException],

        ctor: function (message, innerException) {
            this.$initialize();
            System.ArithmeticException.ctor.call(this, message || "Arithmetic operation resulted in an overflow.", innerException);
        }
    });

    Bridge.define("System.FormatException", {
        inherits: [System.Exception],

        ctor: function (message, innerException) {
            this.$initialize();
            System.Exception.ctor.call(this, message || "Invalid format.", innerException);
        }
    });

    Bridge.define("System.InvalidCastException", {
        inherits: [System.Exception],

        ctor: function (message, innerException) {
            this.$initialize();
            System.Exception.ctor.call(this, message || "The cast is not valid.", innerException);
        }
    });

    Bridge.define("System.InvalidOperationException", {
        inherits: [System.Exception],

        ctor: function (message, innerException) {
            this.$initialize();
            System.Exception.ctor.call(this, message || "Operation is not valid due to the current state of the object.", innerException);
        }
    });

    Bridge.define("System.NotImplementedException", {
        inherits: [System.Exception],

        ctor: function (message, innerException) {
            this.$initialize();
            System.Exception.ctor.call(this, message || "The method or operation is not implemented.", innerException);
        }
    });

    Bridge.define("System.NotSupportedException", {
        inherits: [System.Exception],

        ctor: function (message, innerException) {
            this.$initialize();
            System.Exception.ctor.call(this, message || "Specified method is not supported.", innerException);
        }
    });

    Bridge.define("System.NullReferenceException", {
        inherits: [System.Exception],

        ctor: function (message, innerException) {
            this.$initialize();
            System.Exception.ctor.call(this, message || "Object is null.", innerException);
        }
    });

    Bridge.define("System.RankException", {
        inherits: [System.Exception],

        ctor: function (message, innerException) {
            this.$initialize();
            System.Exception.ctor.call(this, message || "Attempted to operate on an array with the incorrect number of dimensions.", innerException);
        }
    });

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

    Bridge.define("System.OperationCanceledException", {
        inherits: [System.Exception],

        ctor: function (message, token, innerException) {
            this.$initialize();
            System.Exception.ctor.call(this, message || "Operation was canceled.", innerException);
            this.cancellationToken = token || System.Threading.CancellationToken.none;
        }
    });

    Bridge.define("System.Threading.Tasks.TaskCanceledException", {
        inherits: [System.OperationCanceledException],

        ctor: function (message, task, innerException) {
            this.$initialize();
            System.OperationCanceledException.ctor.call(this, message || "A task was canceled.", null, innerException);
            this.task = task || null;
        }
    });

    Bridge.define("System.AggregateException", {
        inherits: [System.Exception],

        ctor: function (message, innerExceptions) {
            this.$initialize();
            this.innerExceptions = new(System.Collections.ObjectModel.ReadOnlyCollection$1(System.Exception))(Bridge.hasValue(innerExceptions) ? Bridge.toArray(innerExceptions) : []);
            System.Exception.ctor.call(this, message || 'One or more errors occurred.', this.innerExceptions.items.length ? this.innerExceptions.items[0] : null);
        },

        handle: function (predicate) {
            if (!Bridge.hasValue(predicate)) {
                throw new System.ArgumentNullException("predicate");
            }

            var count = this.innerExceptions.getCount(),
                unhandledExceptions = [];

            for (var i = 0; i < count; i++) {
                if (!predicate(this.innerExceptions.get(i))) {
                    unhandledExceptions.push(this.innerExceptions.get(i));
                }
            }

            if (unhandledExceptions.length > 0) {
                throw new System.AggregateException(this.Message, unhandledExceptions);
            }
        },

        getBaseException: function() {
            var back = this;
            var backAsAggregate = this;
            while (backAsAggregate != null && backAsAggregate.innerExceptions.getCount() === 1)
            {
                back = back.InnerException;
                backAsAggregate = Bridge.as(back, System.AggregateException);
            }
            return back;  
        },

        flatten: function () {
            // Initialize a collection to contain the flattened exceptions.
            var flattenedExceptions = new(System.Collections.Generic.List$1(System.Exception))();

            // Create a list to remember all aggregates to be flattened, this will be accessed like a FIFO queue
            var exceptionsToFlatten = new(System.Collections.Generic.List$1(System.AggregateException))();
            exceptionsToFlatten.add(this);
            var nDequeueIndex = 0;

            // Continue removing and recursively flattening exceptions, until there are no more.
            while (exceptionsToFlatten.getCount() > nDequeueIndex) {
                // dequeue one from exceptionsToFlatten
                var currentInnerExceptions = exceptionsToFlatten.getItem(nDequeueIndex++).innerExceptions;

                for (var i = 0; i < currentInnerExceptions.getCount(); i++) {
                    var currentInnerException = currentInnerExceptions.get(i);

                    if (!Bridge.hasValue(currentInnerException)) {
                        continue;
                    }

                    var currentInnerAsAggregate = Bridge.as(currentInnerException, System.AggregateException);

                    // If this exception is an aggregate, keep it around for later.  Otherwise,
                    // simply add it to the list of flattened exceptions to be returned.
                    if (Bridge.hasValue(currentInnerAsAggregate)) {
                        exceptionsToFlatten.add(currentInnerAsAggregate);
                    } else {
                        flattenedExceptions.add(currentInnerException);
                    }
                }
            }

            return new System.AggregateException(this.Message, flattenedExceptions);
        }
    });

    Bridge.define("System.Reflection.AmbiguousMatchException", {
        inherits: [System.Exception],

        ctor: function (message, innerException) {
            this.$initialize();
            System.Exception.ctor.call(this, message || "Ambiguous match.", innerException);
        }
    });
