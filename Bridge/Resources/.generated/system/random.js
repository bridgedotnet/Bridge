    Bridge.define("System.Random", {
        statics: {
            fields: {
                MBIG: 0,
                MSEED: 0,
                MZ: 0
            },
            ctors: {
                init: function () {
                    this.MBIG = 2147483647;
                    this.MSEED = 161803398;
                    this.MZ = 0;
                }
            }
        },
        fields: {
            inext: 0,
            inextp: 0,
            seedArray: null
        },
        ctors: {
            init: function () {
                this.seedArray = System.Array.init(56, 0, System.Int32);
            },
            ctor: function () {
                System.Random.$ctor1.call(this, System.Int64.clip32(System.DateTime.getTicks(System.DateTime.getNow())));
            },
            $ctor1: function (seed) {
                this.$initialize();
                var ii;
                var mj, mk;

                //Initialize our Seed array.
                //This algorithm comes from Numerical Recipes in C (2nd Ed.)
                var subtraction = (seed === -2147483648) ? 2147483647 : Math.abs(seed);
                mj = (System.Random.MSEED - subtraction) | 0;
                this.seedArray[System.Array.index(55, this.seedArray)] = mj;
                mk = 1;
                for (var i = 1; i < 55; i = (i + 1) | 0) { //Apparently the range [1..55] is special (Knuth) and so we're wasting the 0'th position.
                    ii = (Bridge.Int.mul(21, i)) % 55;
                    this.seedArray[System.Array.index(ii, this.seedArray)] = mk;
                    mk = (mj - mk) | 0;
                    if (mk < 0) {
                        mk = (mk + System.Random.MBIG) | 0;
                    }
                    mj = this.seedArray[System.Array.index(ii, this.seedArray)];
                }
                for (var k = 1; k < 5; k = (k + 1) | 0) {
                    for (var i1 = 1; i1 < 56; i1 = (i1 + 1) | 0) {
                        this.seedArray[System.Array.index(i1, this.seedArray)] = (this.seedArray[System.Array.index(i1, this.seedArray)] - this.seedArray[System.Array.index(((1 + (((i1 + 30) | 0)) % 55) | 0), this.seedArray)]) | 0;
                        if (this.seedArray[System.Array.index(i1, this.seedArray)] < 0) {
                            this.seedArray[System.Array.index(i1, this.seedArray)] = (this.seedArray[System.Array.index(i1, this.seedArray)] + System.Random.MBIG) | 0;
                        }
                    }
                }
                this.inext = 0;
                this.inextp = 21;
                seed = 1;
            }
        },
        methods: {
            sample: function () {
                //Including this division at the end gives us significantly improved
                //random number distribution.
                return (this.internalSample() * (4.6566128752457969E-10));
            },
            internalSample: function () {
                var retVal;
                var locINext = this.inext;
                var locINextp = this.inextp;

                if (((locINext = (locINext + 1) | 0)) >= 56) {
                    locINext = 1;
                }

                if (((locINextp = (locINextp + 1) | 0)) >= 56) {
                    locINextp = 1;
                }

                retVal = (this.seedArray[System.Array.index(locINext, this.seedArray)] - this.seedArray[System.Array.index(locINextp, this.seedArray)]) | 0;

                if (retVal === System.Random.MBIG) {
                    retVal = (retVal - 1) | 0;
                }

                if (retVal < 0) {
                    retVal = (retVal + System.Random.MBIG) | 0;
                }

                this.seedArray[System.Array.index(locINext, this.seedArray)] = retVal;

                this.inext = locINext;
                this.inextp = locINextp;

                return retVal;
            },
            next: function () {
                return this.internalSample();
            },
            next$2: function (minValue, maxValue) {
                if (minValue > maxValue) {
                    throw new System.ArgumentOutOfRangeException("minValue", "'minValue' cannot be greater than maxValue.");
                }

                var range = System.Int64(maxValue).sub(System.Int64(minValue));
                if (range.lte(System.Int64(2147483647))) {
                    return (((Bridge.Int.clip32((this.sample() * System.Int64.toNumber(range))) + minValue) | 0));
                } else {
                    return System.Int64.clip32(Bridge.Int.clip64((this.getSampleForLargeRange() * System.Int64.toNumber(range))).add(System.Int64(minValue)));
                }
            },
            next$1: function (maxValue) {
                if (maxValue < 0) {
                    throw new System.ArgumentOutOfRangeException("maxValue", "'maxValue' must be greater than zero.");
                }
                return Bridge.Int.clip32(this.sample() * maxValue);
            },
            getSampleForLargeRange: function () {
                // The distribution of double value returned by Sample
                // is not distributed well enough for a large range.
                // If we use Sample for a range [Int32.MinValue..Int32.MaxValue)
                // We will end up getting even numbers only.

                var result = this.internalSample();
                // Note we can't use addition here. The distribution will be bad if we do that.
                var negative = (this.internalSample() % 2 === 0) ? true : false; // decide the sign based on second sample
                if (negative) {
                    result = (-result) | 0;
                }
                var d = result;
                d += (2147483646); // get a number in range [0 .. 2 * Int32MaxValue - 1)
                d /= 4294967293;
                return d;
            },
            nextDouble: function () {
                return this.sample();
            },
            nextBytes: function (buffer) {
                if (buffer == null) {
                    throw new System.ArgumentNullException("buffer");
                }
                for (var i = 0; i < buffer.length; i = (i + 1) | 0) {
                    buffer[System.Array.index(i, buffer)] = (this.internalSample() % (256)) & 255;
                }
            }
        }
    });
