    Bridge.define("System.AggregateException", {
        inherits: [System.Exception],

        ctor: function (message, innerExceptions) {
            this.$initialize();
            this.innerExceptions = new(System.Collections.ObjectModel.ReadOnlyCollection$1(System.Exception))(Bridge.hasValue(innerExceptions) ? Bridge.toArray(innerExceptions) : []);
            System.Exception.ctor.call(this, message || 'One or more errors occurred.', this.innerExceptions.Count > 0 ? this.innerExceptions.getItem(0) : null);
        },

        handle: function (predicate) {
            if (!Bridge.hasValue(predicate)) {
                throw new System.ArgumentNullException.$ctor1("predicate");
            }

            var count = this.innerExceptions.Count,
                unhandledExceptions = [];

            for (var i = 0; i < count; i++) {
                if (!predicate(this.innerExceptions.get(i))) {
                    unhandledExceptions.push(this.innerExceptions.getItem(i));
                }
            }

            if (unhandledExceptions.length > 0) {
                throw new System.AggregateException(this.Message, unhandledExceptions);
            }
        },

        getBaseException: function () {
            var back = this;
            var backAsAggregate = this;

            while (backAsAggregate != null && backAsAggregate.innerExceptions.Count === 1)
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
            while (exceptionsToFlatten.Count > nDequeueIndex) {
                // dequeue one from exceptionsToFlatten
                var currentInnerExceptions = exceptionsToFlatten.getItem(nDequeueIndex++).innerExceptions,
                    count = currentInnerExceptions.Count;

                for (var i = 0; i < count; i++) {
                    var currentInnerException = currentInnerExceptions.getItem(i);

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

