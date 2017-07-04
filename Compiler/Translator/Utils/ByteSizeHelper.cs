using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.Translator.Utils
{
    public class ByteSizeHelper
    {
        private const long BitsInByte = 8;
        private const long BytesInKilobyte = 1024;
        private const long BytesInMegabyte = 1048576;
        private const long BytesInGigabyte = 1073741824;
        private const long BytesInTerabyte = 1099511627776;

        private const string BitSymbol = "b";
        private const string ByteSymbol = "B";
        private const string KilobyteSymbol = "KB";
        private const string MegabyteSymbol = "MB";
        private const string GigabyteSymbol = "GB";
        private const string TerabyteSymbol = "TB";

        private static string GetLargestWholeNumberSymbol(long bits = 0, double bytes = 0, double kilobytes = 0, double megabytes = 0, double gigabytes = 0, double terabytes = 0)
        {
            if (Math.Abs(terabytes) >= 1)
            {
                return TerabyteSymbol;
            }

            if (Math.Abs(gigabytes) >= 1)
            {
                return GigabyteSymbol;
            }

            if (Math.Abs(megabytes) >= 1)
            {
                return MegabyteSymbol;
            }

            if (Math.Abs(kilobytes) >= 1)
            {
                return KilobyteSymbol;
            }

            if (Math.Abs(bytes) >= 1)
            {
                return ByteSymbol;
            }

            return BitSymbol;
        }

        private static double GetLargestWholeNumberValue(long bits = 0, double bytes = 0, double kilobytes = 0, double megabytes = 0, double gigabytes = 0, double terabytes = 0)
        {
            // Absolute value is used to deal with negative values
            if (Math.Abs(terabytes) >= 1)
            {
                return terabytes;
            }

            if (Math.Abs(gigabytes) >= 1)
            {
                return gigabytes;
            }

            if (Math.Abs(megabytes) >= 1)
            {
                return megabytes;
            }

            if (Math.Abs(kilobytes) >= 1)
            {
                return kilobytes;
            }

            if (Math.Abs(bytes) >= 1)
            {
                return bytes;
            }

            return bits;
        }

        public static string ToSizeInBytes(double number, string format = null)
        {
            // Get ceiling because bis are whole units
            var bits = (long)Math.Ceiling(number * BitsInByte);

            var bytes = number;
            var kilobytes = number / BytesInKilobyte;
            var megabytes = number / BytesInMegabyte;
            var gigabytes = number / BytesInGigabyte;
            var terabytes = number / BytesInTerabyte;

            var n = GetLargestWholeNumberValue(bits, bytes, kilobytes, megabytes, gigabytes, terabytes);
            var s = GetLargestWholeNumberSymbol(bits, bytes, kilobytes, megabytes, gigabytes, terabytes);

            if (format == null)
            {
                return string.Format("{0} {1}", n, s);
            }

            return ToSizeInBytesFormatted(format, n, s, bits, bytes, kilobytes, megabytes, gigabytes, terabytes);
        }

        private static string ToSizeInBytesFormatted(string format, double largestNumber, string largestSymbol, long bits = 0, double bytes = 0, double kilobytes = 0, double megabytes = 0, double gigabytes = 0, double terabytes = 0)
        {
            if (!format.Contains("#") && !format.Contains("0"))
            {
                format = "0.## " + format;
            }

            Func<string, bool> has = s => format.IndexOf(s, StringComparison.CurrentCultureIgnoreCase) != -1;
            Func<double, string> output = n => n.ToString(format);

            if (has(TerabyteSymbol))
                return output(terabytes);
            if (has(GigabyteSymbol))
                return output(gigabytes);
            if (has(MegabyteSymbol))
                return output(megabytes);
            if (has(KilobyteSymbol))
                return output(kilobytes);

            if (format.IndexOf(ByteSymbol, StringComparison.Ordinal) != -1)
            {
                return output(bytes);
            }

            if (format.IndexOf(BitSymbol, StringComparison.Ordinal) != -1)
            {
                return output(bits);
            }

            var formattedLargeWholeNumberValue = largestNumber.ToString(format);

            formattedLargeWholeNumberValue = formattedLargeWholeNumberValue.Equals(string.Empty)
                                              ? "0"
                                              : formattedLargeWholeNumberValue;

            return string.Format("{0} {1}", formattedLargeWholeNumberValue, largestSymbol);
        }
    }
}
