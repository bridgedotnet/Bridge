// http://referencesource.microsoft.com/#mscorlib/system/random.cs,bb77e610694e64ca

// ==++==
//
//   Copyright (c) Microsoft Corporation.  All rights reserved.
//
// ==--==
/*============================================================
**
** Class:  Random
**
**
** Purpose: A random number generator.
**
**
===========================================================*/

using System.Diagnostics.Contracts;

namespace System
{
    /// <summary>
    /// A random number generator
    /// </summary>
    public class Random
    {
        private const int MBIG = Int32.MaxValue;

        private const int MSEED = 161803398;
        private const int MZ = 0;

        private int inext;

        private int inextp;
        private int[] SeedArray = new int[56];

        /// <summary>
        /// Initializes a new instance of the Random class, using a time-dependent default seed value.
        /// </summary>
        public Random()
          : this((int)DateTime.Now.Ticks)
        {
        }

        /// <summary>
        /// Initializes a new instance of the Random class, using the specified seed value.
        /// </summary>
        /// <param name="seed">A number used to calculate a starting value for the pseudo-random number sequence. If a negative number is specified, the absolute value of the number is used.</param>
        public Random(int seed)
        {
            int ii;
            int mj, mk;

            //Initialize our Seed array.
            //This algorithm comes from Numerical Recipes in C (2nd Ed.)
            int subtraction = (seed == Int32.MinValue) ? Int32.MaxValue : Math.Abs(seed);
            mj = MSEED - subtraction;
            SeedArray[55] = mj;
            mk = 1;
            for (int i = 1; i < 55; i++)
            {  //Apparently the range [1..55] is special (Knuth) and so we're wasting the 0'th position.
                ii = (21 * i) % 55;
                SeedArray[ii] = mk;
                mk = mj - mk;
                if (mk < 0)
                {
                    mk += MBIG;
                }
                mj = SeedArray[ii];
            }
            for (int k = 1; k < 5; k++)
            {
                for (int i = 1; i < 56; i++)
                {
                    SeedArray[i] -= SeedArray[1 + (i + 30) % 55];
                    if (SeedArray[i] < 0)
                    {
                        SeedArray[i] += MBIG;
                    }
                }
            }
            inext = 0;
            inextp = 21;
            seed = 1;
        }

        /// <summary>
        /// Returns a random floating-point number between 0.0 and 1.0.
        /// </summary>
        protected virtual double Sample()
        {
            //Including this division at the end gives us significantly improved
            //random number distribution.
            return (InternalSample() * (1.0 / MBIG));
        }

        private int InternalSample()
        {
            int retVal;
            int locINext = inext;
            int locINextp = inextp;

            if (++locINext >= 56)
            {
                locINext = 1;
            }

            if (++locINextp >= 56)
            {
                locINextp = 1;
            }

            retVal = SeedArray[locINext] - SeedArray[locINextp];

            if (retVal == MBIG)
            {
                retVal--;
            }

            if (retVal < 0)
            {
                retVal += MBIG;
            }

            SeedArray[locINext] = retVal;

            inext = locINext;
            inextp = locINextp;

            return retVal;
        }

        /// <summary>
        /// Returns a non-negative random integer.
        /// </summary>
        /// <returns>A 32-bit signed integer that is greater than or equal to 0 and less than Int32.MaxValue.</returns>
        public virtual int Next()
        {
            return InternalSample();
        }

        private double GetSampleForLargeRange()
        {
            // The distribution of double value returned by Sample
            // is not distributed well enough for a large range.
            // If we use Sample for a range [Int32.MinValue..Int32.MaxValue)
            // We will end up getting even numbers only.

            int result = InternalSample();
            // Note we can't use addition here. The distribution will be bad if we do that.
            bool negative = (InternalSample() % 2 == 0) ? true : false;  // decide the sign based on second sample
            if (negative)
            {
                result = -result;
            }
            double d = result;
            d += (Int32.MaxValue - 1); // get a number in range [0 .. 2 * Int32MaxValue - 1)
            d /= 2 * (uint)Int32.MaxValue - 1;
            return d;
        }

        /// <summary>
        /// Returns a random integer that is within a specified range.
        /// </summary>
        /// <param name="minValue">The inclusive lower bound of the random number returned.</param>
        /// <param name="maxValue">The exclusive upper bound of the random number returned. maxValue must be greater than or equal to minValue.</param>
        /// <returns>A 32-bit signed integer greater than or equal to minValue and less than maxValue; that is, the range of return values includes minValue but not maxValue. If minValue equals maxValue, minValue is returned.</returns>
        public virtual int Next(int minValue, int maxValue)
        {
            if (minValue > maxValue)
            {
                throw new ArgumentOutOfRangeException("minValue", "'minValue' cannot be greater than maxValue.");
            }
            Contract.EndContractBlock();

            long range = (long)maxValue - minValue;
            if (range <= (long)Int32.MaxValue)
            {
                return ((int)(Sample() * range) + minValue);
            }
            else
            {
                return (int)((long)(GetSampleForLargeRange() * range) + minValue);
            }
        }

        /// <summary>
        /// Returns a non-negative random integer that is less than the specified maximum.
        /// </summary>
        /// <param name="maxValue">The exclusive upper bound of the random number to be generated. maxValue must be greater than or equal to 0</param>
        /// <returns>A 32-bit signed integer that is greater than or equal to 0, and less than maxValue; that is, the range of return values ordinarily includes 0 but not maxValue. However, if maxValue equals 0, maxValue is returned.</returns>
        public virtual int Next(int maxValue)
        {
            if (maxValue < 0)
            {
                throw new ArgumentOutOfRangeException("maxValue", "'maxValue' must be greater than zero.");
            }
            Contract.EndContractBlock();
            return (int)(Sample() * maxValue);
        }

        /// <summary>
        /// Returns a random floating-point number that is greater than or equal to 0.0, and less than 1.0.
        /// </summary>
        /// <returns>A double-precision floating point number that is greater than or equal to 0.0, and less than 1.0.</returns>
        public virtual double NextDouble()
        {
            return Sample();
        }

        /// <summary>
        /// Fills the elements of a specified array of bytes with random numbers.
        /// </summary>
        /// <param name="buffer">An array of bytes to contain random numbers.</param>
        public virtual void NextBytes(byte[] buffer)
        {
            if (buffer == null)
            {
                throw new ArgumentNullException("buffer");
            }
            Contract.EndContractBlock();
            for (int i = 0; i < buffer.Length; i++)
            {
                buffer[i] = (byte)(InternalSample() % (Byte.MaxValue + 1));
            }
        }
    }
}
