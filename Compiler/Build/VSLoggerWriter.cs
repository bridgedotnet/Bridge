using Bridge.Contract;
using Microsoft.Build.Utilities;
using System;

namespace Bridge.Build
{
    public class VSLoggerWriter : ILogger
    {
        public bool AlwaysLogErrors { get { return true; } }

        public bool BufferedMode { get; set; }

        public LoggerLevel LoggerLevel { get; set; }

        public TaskLoggingHelper Log { get; set; }

        public VSLoggerWriter(TaskLoggingHelper taskLoggingHelper)
        {
            if (taskLoggingHelper == null)
            {
                throw new ArgumentNullException("taskLoggingHelper");
            }

            this.Log = taskLoggingHelper;
        }

        public void Flush()
        {
        }

        public void Error(string message)
        {
            if (!this.CheckLoggerLevel(LoggerLevel.Error))
            {
                return;
            }

            DebugMessage(message);
            this.Log.LogError(message);
        }

        public void Error(string message, string file, int lineNumber, int columnNumber, int endLineNumber, int endColumnNumber)
        {
            if (!this.CheckLoggerLevel(LoggerLevel.Error))
            {
                return;
            }

            DebugMessage(message);
            this.Log.LogError(null, null, null, file, lineNumber, columnNumber, endLineNumber, endColumnNumber, message);
        }

        public void Warn(string message)
        {
            if (!this.CheckLoggerLevel(LoggerLevel.Warning))
            {
                return;
            }

            DebugMessage(message);
            this.Log.LogWarning(message);
        }

        public void Info(string message)
        {
            if (!this.CheckLoggerLevel(LoggerLevel.Info))
            {
                return;
            }

            DebugMessage(message);
            this.Log.LogMessage(Microsoft.Build.Framework.MessageImportance.High, message);
        }

        public void Trace(string message)
        {
            if (!this.CheckLoggerLevel(LoggerLevel.Trace))
            {
                return;
            }

            DebugMessage(message);
            this.Log.LogMessage(Microsoft.Build.Framework.MessageImportance.High, message);
        }

        private bool CheckLoggerLevel(LoggerLevel level)
        {
            return (level <= this.LoggerLevel) || (level == LoggerLevel.Error && this.AlwaysLogErrors);
        }

        private void DebugMessage(string message)
        {
            //Debug.WriteLine(message);
        }
    }
}