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
            SeedArray: null
        },
        ctors: {
            init: function () {
                this.SeedArray = System.Array.init(56, 0, System.Int32);
            },
            ctor: function () {
                System.Random.$ctor1.call(this, System.Int64.clip32(System.DateTime.getTicks(System.DateTime.getNow())));
            },
            $ctor1: function (seed) {
                this.$initialize();
                var ii;
                var mj, mk;

                var subtraction = (seed === -2147483648) ? 2147483647 : Math.abs(seed);
                mj = (System.Random.MSEED - subtraction) | 0;
                this.SeedArray[System.Array.index(55, this.SeedArray)] = mj;
                mk = 1;
                for (var i = 1; i < 55; i = (i + 1) | 0) {
                    ii = (Bridge.Int.mul(21, i)) % 55;
                    this.SeedArray[System.Array.index(ii, this.SeedArray)] = mk;
                    mk = (mj - mk) | 0;
                    if (mk < 0) {
                        mk = (mk + System.Random.MBIG) | 0;
                    }
                    mj = this.SeedArray[System.Array.index(ii, this.SeedArray)];
                }
                for (var k = 1; k < 5; k = (k + 1) | 0) {
                    for (var i1 = 1; i1 < 56; i1 = (i1 + 1) | 0) {
                        this.SeedArray[System.Array.index(i1, this.SeedArray)] = (this.SeedArray[System.Array.index(i1, this.SeedArray)] - this.SeedArray[System.Array.index(((1 + (((i1 + 30) | 0)) % 55) | 0), this.SeedArray)]) | 0;
                        if (this.SeedArray[System.Array.index(i1, this.SeedArray)] < 0) {
                            this.SeedArray[System.Array.index(i1, this.SeedArray)] = (this.SeedArray[System.Array.index(i1, this.SeedArray)] + System.Random.MBIG) | 0;
                        }
                    }
                }
                this.inext = 0;
                this.inextp = 21;
                seed = 1;
            }
        },
        methods: {
            Sample: function () {
                return (this.InternalSample() * (4.6566128752457969E-10));
            },
            InternalSample: function () {
                var retVal;
                var locINext = this.inext;
                var locINextp = this.inextp;

                if (((locINext = (locINext + 1) | 0)) >= 56) {
                    locINext = 1;
                }

                if (((locINextp = (locINextp + 1) | 0)) >= 56) {
                    locINextp = 1;
                }

                retVal = (this.SeedArray[System.Array.index(locINext, this.SeedArray)] - this.SeedArray[System.Array.index(locINextp, this.SeedArray)]) | 0;

                if (retVal === System.Random.MBIG) {
                    retVal = (retVal - 1) | 0;
                }

                if (retVal < 0) {
                    retVal = (retVal + System.Random.MBIG) | 0;
                }

                this.SeedArray[System.Array.index(locINext, this.SeedArray)] = retVal;

                this.inext = locINext;
                this.inextp = locINextp;

                return retVal;
            },
            Next: function () {
                return this.InternalSample();
            },
            Next$2: function (minValue, maxValue) {
                if (minValue > maxValue) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("minValue", "'minValue' cannot be greater than maxValue.");
                }

                var range = System.Int64(maxValue).sub(System.Int64(minValue));
                if (range.lte(System.Int64(2147483647))) {
                    return (((Bridge.Int.clip32((this.Sample() * System.Int64.toNumber(range))) + minValue) | 0));
                } else {
                    return System.Int64.clip32(Bridge.Int.clip64((this.GetSampleForLargeRange() * System.Int64.toNumber(range))).add(System.Int64(minValue)));
                }
            },
            Next$1: function (maxValue) {
                if (maxValue < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("maxValue", "'maxValue' must be greater than zero.");
                }
                return Bridge.Int.clip32(this.Sample() * maxValue);
            },
            GetSampleForLargeRange: function () {

                var result = this.InternalSample();
                var negative = (this.InternalSample() % 2 === 0) ? true : false;
                if (negative) {
                    result = (-result) | 0;
                }
                var d = result;
                d += (2147483646);
                d /= 4294967293;
                return d;
            },
            NextDouble: function () {
                return this.Sample();
            },
            NextBytes: function (buffer) {
                if (buffer == null) {
                    throw new System.ArgumentNullException.$ctor1("buffer");
                }
                for (var i = 0; i < buffer.length; i = (i + 1) | 0) {
                    buffer[System.Array.index(i, buffer)] = (this.InternalSample() % (256)) & 255;
                }
            }
        }
    });
