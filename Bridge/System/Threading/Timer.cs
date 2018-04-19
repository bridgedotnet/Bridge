namespace System.Threading
{
    /// <summary>
    /// Represents the method that handles calls from a Timer.
    /// </summary>
    /// <param name="state">An object containing application-specific information relevant to the method invoked by this delegate, or null.</param>
    /// <remarks>
    /// Use a TimerCallback delegate to specify the method that is called by a Timer.
    /// This method does not execute in the thread that created the timer;
    /// it executes in a separate thread pool thread that is provided by the system.
    /// The TimerCallback delegate invokes the method once after the start time elapses,
    /// and continues to invoke it once per timer interval until the Dispose method is called,
    /// or until the Timer.Change method is called with the interval value Infinite.
    /// The timer delegate is specified when the timer is constructed, and cannot be changed.
    /// The start time for a Timer is passed in the dueTime parameter of the Timer constructors, and the period is passed in the period parameter.
    /// For an example that demonstrates creating and using a TimerCallback delegate, see System.Threading.Timer.
    /// </remarks>
    public delegate void TimerCallback(Object state);

    /// <summary>
    /// Provides a mechanism for executing a method at specified intervals. This class cannot be inherited.
    /// </summary>
    /// <remarks>
    /// <example>
    /// <code>
    /// TimerCallback callback = (o) => { Html5.Window.Alert(o.ToString()); };
    /// var timer = new Timer(callback, "SomeState", 500, 500);
    /// await Task.Delay(200); // It allows the timer to work
    /// timer.Change(-1, 200); // Stops the timer
    /// timer.Dispose() // Stops the timer "forever"
    /// </code>
    /// Timer implemented based on setTimeout() see https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout#Notes.
    /// It's important to note that the function or code snippet cannot be executed until the thread that called setTimeout() has terminated.
    /// The delegate specified by the callback parameter is invoked once after dueTime elapses,
    /// and thereafter each time the period time interval elapses.
    /// If dueTime is zero (0), callback is invoked immediately. If dueTime is Timeout.Infinite, callback is not invoked;
    /// the timer is disabled, but can be re-enabled by calling the Change method.
    /// Successive setTimeout() calls with delay smaller than the "minimum delay" limit are forced to use at least the minimum delay.
    /// The minimum delay, DOM_MIN_TIMEOUT_VALUE, is 4 ms (stored in a preference in Firefox: dom.min_timeout_value),
    /// with a DOM_CLAMP_TIMEOUT_NESTING_LEVEL of 5.
    /// If period is zero (0) or Timeout.Infinite and dueTime is not Timeout.Infinite, callback is invoked once;
    /// the periodic behavior of the timer is disabled, but can be re-enabled using the Change method.
    /// </example>
    /// </remarks>
    public sealed class Timer : IDisposable
    {
        private const UInt32 MAX_SUPPORTED_TIMEOUT = (uint)0xfffffffe;
        private const string EXC_LESS = "Number must be either non-negative and less than or equal to Int32.MaxValue or -1.";
        private const string EXC_MORE = "Time-out interval must be less than 2^32-2.";
        private const string EXC_DISPOSED = "The timer has been already disposed.";

        //
        // Timeout.UnsignedInfinite if we are not going to fire
        //
        internal long dueTime;

        //
        // Timeout.UnsignedInfinite if we are a single-shot timer.  Otherwise, the repeat interval.
        //
        internal long period;

        private TimerCallback timerCallback;
        private Object state;
        private int? id;
        private bool disposed;

        /// <summary>
        /// Initializes a new instance of the Timer class, using a 32-bit signed integer to specify the time interval.
        /// The delegate specified by the callback parameter is invoked once after dueTime elapses, and thereafter each time the period time interval elapses.
        /// If dueTime is zero (0), callback is invoked immediately.If dueTime is Timeout.Infinite, callback is not invoked; the timer is disabled, but can be re-enabled by calling the Change method.
        /// </summary>
        /// <param name="callback">A TimerCallback delegate representing a method to be executed.</param>
        /// <param name="state">An object containing information to be used by the callback method, or null.</param>
        /// <param name="dueTime">The amount of time to delay before callback is invoked, in milliseconds. Specify Timeout.Infinite to prevent the timer from starting. Specify zero (0) to start the timer immediately.</param>
        /// <param name="period">The time interval between invocations of callback, in milliseconds. Specify Timeout.Infinite to disable periodic signaling.</param>
        public Timer(TimerCallback callback, Object state, int dueTime, int period)
        {
            TimerSetup(callback, state, dueTime, period);
        }

        /// <summary>
        /// Initializes a new instance of the Timer class, using TimeSpan values to measure time intervals.
        /// The delegate specified by the callback parameter is invoked once after dueTime elapses, and thereafter each time the period time interval elapses.
        /// If dueTime is zero (0), callback is invoked immediately.If dueTime is negative one (-1) milliseconds, callback is not invoked; the timer is disabled, but can be re-enabled by calling the Change method.
        /// </summary>
        /// <param name="callback">A TimerCallback delegate representing a method to be executed.</param>
        /// <param name="state">An object containing information to be used by the callback method, or null.</param>
        /// <param name="dueTime">The amount of time to delay before callback is invoked, in milliseconds. Specify Timeout.Infinite to prevent the timer from starting. Specify zero (0) to start the timer immediately.</param>
        /// <param name="period">The time interval between invocations of callback, in milliseconds. Specify Timeout.Infinite to disable periodic signaling.</param>
        public Timer(TimerCallback callback, Object state, TimeSpan dueTime, TimeSpan period)
        {
            var dueTm = (long)dueTime.TotalMilliseconds;
            var periodTm = (long)period.TotalMilliseconds;

            TimerSetup(callback, state, dueTm, periodTm);
        }

        /// <summary>
        /// Initializes a new instance of the Timer class, using 32-bit unsigned integers to measure time intervals.
        /// The delegate specified by the callback parameter is invoked once after dueTime elapses, and thereafter each time the period time interval elapses.
        /// If dueTime is zero (0), callback is invoked immediately.If dueTime is Timeout.Infinite, callback is not invoked; the timer is disabled, but can be re-enabled by calling the Change method.
        /// </summary>
        /// <param name="callback">A TimerCallback delegate representing a method to be executed.</param>
        /// <param name="state">An object containing information to be used by the callback method, or null.</param>
        /// <param name="dueTime">The amount of time to delay before callback is invoked, in milliseconds. Specify Timeout.Infinite to prevent the timer from starting. Specify zero (0) to start the timer immediately.</param>
        /// <param name="period">The time interval between invocations of callback, in milliseconds. Specify Timeout.Infinite to disable periodic signaling.</param>
        [CLSCompliant(false)]
        public Timer(TimerCallback callback, Object state, UInt32 dueTime, UInt32 period)
        {
            TimerSetup(callback, state, dueTime, period);
        }

        /// <summary>
        /// Initializes a new instance of the Timer class, using 64-bit signed integers to measure time intervals.
        /// The delegate specified by the callback parameter is invoked once after dueTime elapses, and thereafter each time the period time interval elapses.
        /// If dueTime is zero (0), callback is invoked immediately.If dueTime is Timeout.Infinite, callback is not invoked; the timer is disabled, but can be re-enabled by calling the Change method.
        /// </summary>
        /// <param name="callback">A TimerCallback delegate representing a method to be executed.</param>
        /// <param name="state">An object containing information to be used by the callback method, or null.</param>
        /// <param name="dueTime">The amount of time to delay before callback is invoked, in milliseconds. Specify Timeout.Infinite to prevent the timer from starting. Specify zero (0) to start the timer immediately.</param>
        /// <param name="period">The time interval between invocations of callback, in milliseconds. Specify Timeout.Infinite to disable periodic signaling.</param>
        public Timer(TimerCallback callback, Object state, long dueTime, long period)
        {
            TimerSetup(callback, state, dueTime, period);
        }

        /// <summary>
        /// Initializes a new instance of the Timer class with an infinite period and an infinite due time, using the newly created Timer object as the state object.
        /// Call this constructor when you want to use the Timer object itself as the state object. After creating the timer, use the Change method to set the interval and due time.
        /// This constructor specifies an infinite due time before the first callback and an infinite interval between callbacks, in order to prevent the first callback from occurring before the Timer object is assigned to the state object.
        /// </summary>
        /// <param name="callback">A TimerCallback delegate representing a method to be executed.</param>
        public Timer(TimerCallback callback)
        {
            int dueTime = -1;    // we want timer to be registered, but not activated.  Requires caller to call
            int period = -1;    // Change after a timer instance is created.  This is to avoid the potential
                                // for a timer to be fired before the returned value is assigned to the variable,
                                // potentially causing the callback to reference a bogus value (if passing the timer to the callback).

            TimerSetup(callback, this, dueTime, period);
        }

        private bool TimerSetup(TimerCallback callback, Object state, long dueTime, long period)
        {
            if (this.disposed)
            {
                throw new InvalidOperationException(EXC_DISPOSED);
            }

            if (callback == null)
                throw new ArgumentNullException("TimerCallback");

            if (dueTime < -1)
                throw new ArgumentOutOfRangeException("dueTime", EXC_LESS);
            if (period < -1)
                throw new ArgumentOutOfRangeException("period", EXC_LESS);
            if (dueTime > MAX_SUPPORTED_TIMEOUT)
                throw new ArgumentOutOfRangeException("dueTime", EXC_MORE);
            if (period > MAX_SUPPORTED_TIMEOUT)
                throw new ArgumentOutOfRangeException("period", EXC_MORE);

            this.dueTime = dueTime;
            this.period = period;

            this.state = state;
            this.timerCallback = callback;

            return this.RunTimer(this.dueTime);
        }

        private void HandleCallback()
        {
            if (this.disposed)
            {
                return;
            }

            if (this.timerCallback != null)
            {
                var myId = this.id;
                this.timerCallback(this.state);

                // timerCallback may call Change(). To prevent double call we can check if timer changed
                if (this.id == myId)
                {
                    this.RunTimer(this.period, false);
                }
            }
        }

        private bool RunTimer(long period, bool checkDispose = true)
        {
            if (checkDispose && this.disposed)
            {
                throw new InvalidOperationException(EXC_DISPOSED);
            }

            if (period != -1 && !this.disposed)
            {
                var p = Bridge.Script.Write<int>("{period}.toNumber();", period);
                this.id = Global.SetTimeout(this.HandleCallback, p);
                return true;
            }

            return false;
        }

        /// <summary>
        /// Changes the start time and the interval between method invocations for a timer, using 32-bit signed integers to measure time intervals.
        /// </summary>
        /// <param name="dueTime">The amount of time to delay before the invoking the callback method specified when the Timer was constructed, in milliseconds. Specify Timeout.Infinite to prevent the timer from restarting. Specify zero (0) to restart the timer immediately.</param>
        /// <param name="period">The time interval between invocations of the callback method specified when the Timer was constructed, in milliseconds. Specify Timeout.Infinite to disable periodic signaling.</param>
        /// <returns>true if the timer was successfully updated; otherwise, false.</returns>
        public bool Change(int dueTime, int period)
        {
            return ChangeTimer(dueTime, period);
        }

        /// <summary>
        /// Changes the start time and the interval between method invocations for a timer, using TimeSpan values to measure time intervals.
        /// </summary>
        /// <param name="dueTime">A TimeSpan representing the amount of time to delay before invoking the callback method specified when the Timer was constructed. Specify negative one (-1) milliseconds to prevent the timer from restarting. Specify zero (0) to restart the timer immediately.</param>
        /// <param name="period">The time interval between invocations of the callback method specified when the Timer was constructed. Specify negative one (-1) milliseconds to disable periodic signaling.</param>
        /// <returns>true if the timer was successfully updated; otherwise, false.</returns>
        public bool Change(TimeSpan dueTime, TimeSpan period)
        {
            return ChangeTimer((long)dueTime.TotalMilliseconds, (long)period.TotalMilliseconds);
        }

        /// <summary>
        /// Changes the start time and the interval between method invocations for a timer, using 32-bit unsigned integers to measure time intervals.
        /// </summary>
        /// <param name="dueTime">The amount of time to delay before the invoking the callback method specified when the Timer was constructed, in milliseconds. Specify Timeout.Infinite to prevent the timer from restarting. Specify zero (0) to restart the timer immediately.</param>
        /// <param name="period">The time interval between invocations of the callback method specified when the Timer was constructed, in milliseconds. Specify Timeout.Infinite to disable periodic signaling.</param>
        /// <returns>true if the timer was successfully updated; otherwise, false.</returns>
        [CLSCompliant(false)]
        public bool Change(UInt32 dueTime, UInt32 period)
        {
            return ChangeTimer(dueTime, period);
        }

        /// <summary>
        /// Changes the start time and the interval between method invocations for a timer, using 64-bit signed integers to measure time intervals.
        /// </summary>
        /// <param name="dueTime">The amount of time to delay before the invoking the callback method specified when the Timer was constructed, in milliseconds. Specify Timeout.Infinite to prevent the timer from restarting. Specify zero (0) to restart the timer immediately.</param>
        /// <param name="period">The time interval between invocations of the callback method specified when the Timer was constructed, in milliseconds. Specify Timeout.Infinite to disable periodic signaling.</param>
        /// <returns>true if the timer was successfully updated; otherwise, false.</returns>
        public bool Change(long dueTime, long period)
        {
            return ChangeTimer(dueTime, period);
        }

        private bool ChangeTimer(long dueTime, long period)
        {
            ClearTimeout();
            return TimerSetup(this.timerCallback, this.state, dueTime, period);
        }

        private void ClearTimeout()
        {
            if (this.id.HasValue)
            {
                Global.ClearTimeout(this.id.Value);
                this.id = null;
            }
        }

        /// <summary>
        /// Releases all resources used by the current instance of Timer.
        /// Callbacks will not be called after Timer is disposed
        /// </summary>
        public void Dispose()
        {
            this.ClearTimeout();
            this.disposed = true;
        }

        [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
        [Bridge.External]
        [Bridge.Name("Bridge.global")]
        internal class Global
        {
            public static extern int SetTimeout(Action handler, int delay);

            public static extern void ClearTimeout(int timeoutID);
        }
    }
}
