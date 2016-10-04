using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.IO;

namespace Bridge.Contract
{
    public class HashHelper
    {
        /// <summary>
        /// This function takes a string as input. It processes the string four bytes at a time,
        /// and interprets each of the four-byte chunks as a single long integer value.
        /// The integer values for the four-byte chunks are added together.
        /// In the end, the resulting sum is converted to the range 0 to M-1 using the modulus operator.
        /// http://research.cs.vt.edu/AVresearch/hashing/strings.php
        /// </summary>
        /// <param name="s">Input string</param>
        /// <param name="m">Modulus operator</param>
        /// <returns>Hash</returns>
        public long GetDeterministicHash(string s, long m)
        {
            int l = s.Length;
            long sum = 0;
            char[] c;
            long mult;
            var i = 0;
            var j = 0;
            while (true)
            {
                j = i + 4;

                if (j > l)
                {
                    j = l;
                }

                c = s.Substring(i, j - i).ToCharArray();
                mult = 1;
                for (int k = 0; k < c.Length; k++)
                {
                    sum += c[k] * mult;
                    mult *= 256;
                }

                i += 4;

                if (i >= l)
                {
                    break;
                }
            }

            return System.Math.Abs(sum) % m;
        }

        public long GetDeterministicHash(string s, bool throwOnError = false)
        {
            var m = 0xFFFFFFFFFF;
            long nameHash;

            if (throwOnError)
            {
                nameHash = this.GetDeterministicHash(s, m);
            }
            else
            {
                try
                {
                    // Just in case
                    nameHash = this.GetDeterministicHash(s, m);
                }
                catch
                {
                    nameHash = s.GetHashCode();
                }
            }

            return nameHash;
        }
    }
}