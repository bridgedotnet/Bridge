// Console WebAPI by Mozilla Contributors is licensed under CC-BY-SA 2.5.
// https://developer.mozilla.org/en-US/docs/Web/API/Console

namespace Bridge.Html5
{
    /// <summary>
    /// The console object provides access to the browser's debugging console (e.g. the Web Console in Firefox). The specifics of how it works vary from browser to browser, but there is a de facto set of features that are typically provided.
    /// </summary>
    [External]
    [Name("console")]
    public static class Console
    {
        [Name("log")]
        public static void WriteLine(string message)
        {
        }

        [Template("console.log(Bridge.String.format({message}, {args}))")]
        public static void WriteLine(string message, params object[] args)
        {
        }

        [Template("console.log()")]
        public static void WriteLine()
        {
        }

        [Template("console.log({value})")]
        public static void WriteLine(bool value)
        {
        }

        [Template("console.log(String.fromCharCode({value}))")]
        public static void WriteLine(char value)
        {
        }

        [Template("console.log({value}.toString())")]
        public static void WriteLine(decimal value)
        {
        }

        [Template("console.log({value} && {value}.toString())")]
        public static void WriteLine(decimal? value)
        {
        }

        [Template("console.log({value})")]
        public static void WriteLine(double value)
        {
        }

        [Template("console.log({value})")]
        public static void WriteLine(float value)
        {
        }

        [Template("console.log({value})")]
        public static void WriteLine(int value)
        {
        }

        [Template("console.log({value})")]
        public static void WriteLine(long value)
        {
        }

        [Template("console.log({value})")]
        public static void WriteLine(object value)
        {
        }

        [Template("console.log({value})")]
        public static void WriteLine(uint value)
        {
        }

        [Template("console.log({value})")]
        public static void WriteLine(ulong value)
        {
        }

        /// <summary>
        /// ReadLine uses the native JavaScript prompt() to dialog with an optional message prompting the user to input some text.
        /// </summary>
        /// <param name="text">text is a string of text to display to the user. This parameter is optional and can be omitted if there is nothing to show in the prompt window.</param>
        /// <param name="value">value is a string containing the default value displayed in the text input field. It is an optional parameter. Note that in Internet Explorer 7 and 8, if you do not provide this parameter, the string "undefined" is the default value.</param>
        /// <returns>result is a string containing the text entered by the user, or the value null.</returns>
        [Template("prompt({text},{value})")]
        public static string ReadLine(string text, string value)
        {
            return null;
        }

        /// <summary>
        /// ReadLine uses the native JavaScript prompt() to display a dialog with an optional message prompting the user to input some text.
        /// </summary>
        /// <param name="text">text is a string of text to display to the user. This parameter is optional and can be omitted if there is nothing to show in the prompt window.</param>
        /// <returns>result is a string containing the text entered by the user, or the value null.</returns>
        [Template("prompt({text})")]
        public static string ReadLine(string text)
        {
            return null;
        }

        /// <summary>
        /// ReadLine uses the native JavaScript prompt() to display a dialog with an optional message prompting the user to input some text.
        /// </summary>
        /// <returns>result is a string containing the text entered by the user, or the value null.</returns>
        [Template("prompt()")]
        public static string ReadLine()
        {
            return null;
        }

        /// <summary>
        /// Read uses the native JavaScript prompt() to display a dialog with an optional message prompting the user to input some text.
        /// </summary>
        /// <returns>result is a string containing the text entered by the user, or the value null.</returns>
        [Template("prompt()")]
        public static string Read()
        {
            return null;
        }

        /// <summary>
        /// Log a message and stack trace to console if first argument is false.
        /// </summary>
        /// <param name="expression">If false then message is shown</param>
        /// <param name="message">A JavaScript string containing zero or more substitution strings.</param>
        /// <param name="args">JavaScript objects with which to replace substitution strings within msg. This gives you additional control over the format of the output.</param>
        public static void Assert(bool expression, object message, params object[] args)
        {
        }

        /// <summary>
        /// Log a message and stack trace to console if first argument is false.
        /// </summary>
        /// <param name="expression">If false then message is shown</param>
        /// <param name="message">A JavaScript string containing zero or more substitution strings.</param>
        public static void Assert(bool expression, object message)
        {
        }

        /// <summary>
        /// Log a message and stack trace to console if first argument is false.
        /// </summary>
        /// <param name="expression">If false then message is shown</param>
        public static void Assert(bool expression)
        {
        }

        /// <summary>
        /// Outputs a message to the Web Console.
        /// </summary>
        /// <param name="message">A JavaScript string containing zero or more substitution strings.</param>
        public static void Log(object message)
        {
        }

        /// <summary>
        /// Outputs a message to the Web Console.
        /// </summary>
        /// <param name="message">A JavaScript string containing zero or more substitution strings.</param>
        /// <param name="args">JavaScript objects with which to replace substitution strings within msg. This gives you additional control over the format of the output.</param>
        public static void Log(object message, params object[] args)
        {
        }

        /// <summary>
        /// An alias for log(); this was added to improve compatibility with existing sites already using debug(). However, you should use console.log() instead.
        /// </summary>
        /// <param name="message">A JavaScript string containing zero or more substitution strings.</param>
        public static void Debug(object message)
        {
        }

        /// <summary>
        /// An alias for log(); this was added to improve compatibility with existing sites already using debug(). However, you should use console.log() instead.
        /// </summary>
        /// <param name="message">A JavaScript string containing zero or more substitution strings.</param>
        /// <param name="args"></param>
        public static void Debug(object message, params object[] args)
        {
        }

        /// <summary>
        /// Outputs an informational message to the Web Console. In Firefox, a small "i" icon is displayed next to these items in the Web Console's log.
        /// </summary>
        /// <param name="message">A JavaScript string containing zero or more substitution strings.</param>
        public static void Info(object message)
        {
        }

        /// <summary>
        /// Outputs an informational message to the Web Console. In Firefox, a small "i" icon is displayed next to these items in the Web Console's log.
        /// </summary>
        /// <param name="message">A JavaScript string containing zero or more substitution strings.</param>
        /// <param name="args">JavaScript objects with which to replace substitution strings within msg. This gives you additional control over the format of the output.</param>
        public static void Info(object message, params object[] args)
        {
        }

        /// <summary>
        /// Outputs a warning message to the Web Console.
        /// </summary>
        /// <param name="message">A JavaScript string containing zero or more substitution strings.</param>
        public static void Warn(object message)
        {
        }

        /// <summary>
        /// Outputs a warning message to the Web Console.
        /// </summary>
        /// <param name="message">A JavaScript string containing zero or more substitution strings.</param>
        /// <param name="args">JavaScript objects with which to replace substitution strings within msg. This gives you additional control over the format of the output.</param>
        public static void Warn(object message, params object[] args)
        {
        }

        /// <summary>
        /// Outputs an error message to the Web Console.
        /// </summary>
        /// <param name="message">A JavaScript string containing zero or more substitution strings.</param>
        public static void Error(object message)
        {
        }

        /// <summary>
        /// Outputs an error message to the Web Console.
        /// </summary>
        /// <param name="message">A JavaScript string containing zero or more substitution strings.</param>
        /// <param name="args">JavaScript objects with which to replace substitution strings within msg. This gives you additional control over the format of the output.</param>
        public static void Error(object message, params object[] args)
        {
        }

        /// <summary>
        /// Clears the console.
        /// </summary>
        public static void Clear()
        {
        }

        /// <summary>
        /// Outputs a stack trace.
        /// </summary>
        public static void Trace()
        {
        }

        /// <summary>
        /// Creates a new inline group, indenting all following output by another level. To move back out a level, call groupEnd().
        /// </summary>
        /// <param name="message">A JavaScript string containing zero or more substitution strings.</param>
        public static void Group(object message)
        {
        }

        /// <summary>
        /// Creates a new inline group, indenting all following output by another level. To move back out a level, call groupEnd().
        /// </summary>
        /// <param name="message">A JavaScript string containing zero or more substitution strings.</param>
        /// <param name="args">JavaScript objects with which to replace substitution strings within msg.</param>
        public static void Group(object message, params object[] args)
        {
        }

        /// <summary>
        /// Creates a new inline group, indenting all following output by another level; unlike group(), this starts with the inline group collapsed, requiring the use of a disclosure button to expand it. To move back out a level, call groupEnd(). See Using groups in the console.
        /// </summary>
        /// <param name="message">A JavaScript string containing zero or more substitution strings.</param>
        public static void GroupCollapsed(object message)
        {
        }

        /// <summary>
        /// Creates a new inline group, indenting all following output by another level; unlike group(), this starts with the inline group collapsed, requiring the use of a disclosure button to expand it. To move back out a level, call groupEnd(). See Using groups in the console.
        /// </summary>
        /// <param name="message">A JavaScript string containing zero or more substitution strings.</param>
        /// <param name="args">JavaScript objects with which to replace substitution strings within msg.</param>
        public static void GroupCollapsed(object message, params object[] args)
        {
        }

        /// <summary>
        /// Exits the current inline group.
        /// </summary>
        public static void GroupEnd()
        {
        }

        /// <summary>
        /// Starts a timer with a name specified as an input parameter. Up to 10,000 simultaneous timers can run on a given page.
        /// </summary>
        /// <param name="name">The name to give the new timer. This will identify the timer; use the same name when calling console.timeEnd() to stop the timer and get the time output to the console.</param>
        public static void Time(object name)
        {
        }

        /// <summary>
        /// Stops the specified timer and logs the elapsed time in seconds since its start.
        /// </summary>
        /// <param name="name">The name of the timer to stop. Once stopped, the elapsed time is automatically displayed in the Web Console.</param>
        public static void TimeEnd(object name)
        {
        }

        /// <summary>
        /// This method adds an event to the Timeline during a recording session. This lets you visually correlate your code generated time stamp to other events, such as screen layout and paints, that are automatically added to the Timeline.
        /// </summary>
        /// <param name="name">Stamp name</param>
        public static void TimeStamp(object name)
        {
        }

        /// <summary>
        /// Starts the JavaScript profiler. You can specify an optional label for the profile.
        /// </summary>
        public static void Profile()
        {
        }

        /// <summary>
        /// Starts the JavaScript profiler. You can specify an optional label for the profile.
        /// </summary>
        /// <param name="profileLabel"></param>
        public static void Profile(string profileLabel)
        {
        }

        /// <summary>
        /// Stops the profiler.
        /// </summary>
        public static void ProfileEnd()
        {
        }

        /// <summary>
        /// Logs the number of times that this particular call to count() has been called. This function takes an optional argument label.
        /// If label is supplied, this function logs the number of times count() has been called with that particular label.
        /// If label is omitted, the function logs the number of times count() has been called at this particular line.
        /// </summary>
        public static void Count()
        {
        }

        /// <summary>
        /// Logs the number of times that this particular call to count() has been called. This function takes an optional argument label.
        /// If label is supplied, this function logs the number of times count() has been called with that particular label.
        /// If label is omitted, the function logs the number of times count() has been called at this particular line.
        /// </summary>
        /// <param name="label">Label value</param>
        public static void Count(string label)
        {
        }

        /// <summary>
        /// Displays an interactive listing of the properties of a specified JavaScript object. This listing lets you use disclosure triangles to examine the contents of child objects.
        /// </summary>
        /// <param name="obj">A JavaScript object whose properties should be output.</param>
        public static void Dir(object obj)
        {
        }

        /// <summary>
        /// Displays an XML/HTML Element representation of the specified object if possible or the JavaScript Object view if it is not.
        /// </summary>
        /// <param name="node">An XML/HTML Element</param>
        [Template("console.dirxml({node})")]
        public static void DirXml(Node node)
        {
        }

        /// <summary>
        /// Displays tabular data as a table.
        /// </summary>
        /// <param name="data">The data to display. This must be either an array or an object.</param>
        public static void Table(object data)
        {
        }

        /// <summary>
        /// Displays tabular data as a table.
        /// </summary>
        /// <param name="data">The data to display. This must be either an array or an object.</param>
        /// <param name="columns">An array containing the names of columns to include in the output.</param>
        public static void Table(object data, string[] columns)
        {
        }
    }
}
