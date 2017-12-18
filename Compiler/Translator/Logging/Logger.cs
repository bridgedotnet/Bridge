using Bridge.Contract;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.Translator.Logging
{
    public class Logger : ILogger
    {
        public bool AlwaysLogErrors { get { return false; } }
        public string Name { get; set; }
        public List<ILogger> LoggerWriters { get; private set; }
        public bool UseTimeStamp { get; set; }

        private bool bufferedMode;

        public bool BufferedMode
        {
            get { return bufferedMode; }
            set
            {
                LoggerWriters.ForEach(x => x.BufferedMode = value);
                bufferedMode = value;
            }
        }

        private LoggerLevel loggerLevel;

        public LoggerLevel LoggerLevel
        {
            get { return loggerLevel; }
            set
            {
                if (value < LoggerLevel.None)
                {
                    value = LoggerLevel.None;
                }

                loggerLevel = value;

                LoggerWriters.ForEach(x => x.LoggerLevel = value);
            }
        }

        public Logger(string name, bool useTimeStamp, LoggerLevel loggerLevel, bool bufferedMode, params ILogger[] loggerWriters)
        {
            this.Name = name ?? string.Empty;

            this.LoggerWriters = loggerWriters.Where(x => x != null).ToList();

            this.UseTimeStamp = useTimeStamp;
            this.LoggerLevel = loggerLevel;
            this.BufferedMode = bufferedMode;
        }

        public Logger(string name, bool useTimeStamp, params ILogger[] loggers)
            : this(name, useTimeStamp, LoggerLevel.None, false, loggers)
        {
        }

        public FileLoggerWriter GetFileLogger()
        {
            return (FileLoggerWriter)LoggerWriters.Where(x => x is FileLoggerWriter).FirstOrDefault();
        }

        public void Flush()
        {
            LoggerWriters.ForEach(x => x.Flush());
        }

        public void Error(string message)
        {
            string wrappedMessage;

            foreach (var logger in this.LoggerWriters)
            {
                var alwaysLogErrors = logger.AlwaysLogErrors;

                if ((wrappedMessage = CheckIfCanLog(message, LoggerLevel.Error, alwaysLogErrors)) != null)
                {
                    logger.Error(wrappedMessage);
                }
            }

        }

        public void Error(string message, string file, int lineNumber, int columnNumber, int endLineNumber, int endColumnNumber)
        {
            string wrappedMessage;

            foreach (var logger in this.LoggerWriters)
            {
                var alwaysLogErrors = logger.AlwaysLogErrors;

                if ((wrappedMessage = CheckIfCanLog(message, LoggerLevel.Error, alwaysLogErrors)) != null)
                {
                    logger.Error(wrappedMessage, file, lineNumber, columnNumber, endLineNumber, endColumnNumber);
                }
            }
        }

        public void Warn(string message)
        {
            string wrappedMessage;

            if ((wrappedMessage = CheckIfCanLog(message, LoggerLevel.Warning)) != null)
            {
                foreach (var logger in this.LoggerWriters)
                {
                    logger.Warn(wrappedMessage);
                }
            }
        }

        public void Info(string message)
        {
            string wrappedMessage;

            if ((wrappedMessage = CheckIfCanLog(message, LoggerLevel.Info)) != null)
            {
                foreach (var logger in this.LoggerWriters)
                {
                    logger.Info(wrappedMessage);
                }
            }
        }

        public void Trace(string message)
        {
            string wrappedMessage;

            if ((wrappedMessage = CheckIfCanLog(message, LoggerLevel.Trace)) != null)
            {
                foreach (var logger in this.LoggerWriters)
                {
                    logger.Trace(wrappedMessage);
                }
            }
        }

        private string CheckIfCanLog(string message, LoggerLevel level, bool alwaysLogErrors = false)
        {
            //if (this.LoggerLevel >= level)
            //{
            //    return null;
            //}

            return this.WrapMessage(message, level, alwaysLogErrors);
        }

        private string WrapMessage(string message, LoggerLevel logLevel, bool alwaysLogErrors)
        {
            if ((this.LoggerLevel <= 0 && !alwaysLogErrors)
                || string.IsNullOrEmpty(message))
            {
                return null;
            }

            if (!this.UseTimeStamp)
            {
                return message;
            }

            var d = DateTime.Now.ToString("s") + ":" + DateTime.Now.Millisecond.ToString("D3") + " ";

            string wrappedMessage = string.Format(
                "{0}\t{1}\t{2}\t{3}",
                d,
                logLevel,
                this.Name,
                message);

            return wrappedMessage;
        }
    }
}