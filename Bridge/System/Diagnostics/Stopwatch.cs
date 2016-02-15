using Bridge;

namespace System.Diagnostics
{
    [External]
    [Namespace("Bridge")]
    public class Stopwatch
    {
        public static readonly long Frequency = 0;
        public static readonly bool IsHighResolution = false;

        public static extern Stopwatch StartNew();

        public extern TimeSpan Elapsed
        {
            [Name("timeSpan")]
            get;
        }

        public extern long ElapsedMilliseconds
        {
            [Name("milliseconds")]
            get;
        }

        public extern long ElapsedTicks
        {
            [Name("ticks")]
            get;
        }

        [FieldProperty]
        public extern bool IsRunning
        {
            get;
        }

        public extern void Reset();

        public extern void Start();

        public extern void Stop();

        public extern void Restart();

        public extern static long GetTimestamp();
    }
}