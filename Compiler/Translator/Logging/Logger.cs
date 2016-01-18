using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Bridge.Contract;

namespace Bridge.Translator.Logging
{
    public class Logger : ILogger
    {
        public string Name { get; set; }
        public List<ILogger> LoggerWriters { get; private set; }
        public bool UseTimeStamp { get; set; }

        private LoggerLevel loggerLevel;
        public LoggerLevel LoggerLevel
        {
            get { return this.loggerLevel; }
            set
            {
                if (value <= 0)
                {
                    this.loggerLevel = 0;
                }
                else
                {
                    var maxValue = LoggerLevel.Trace;
                    if (value > maxValue)
                    {
                        this.loggerLevel = maxValue;
                    }
                    else
                    {
                        this.loggerLevel = value;
                    }
                }
            }
        }

        public Logger(string name, bool useTimeStamp, LoggerLevel loggerLevel, params ILogger[] loggerWriters)
        {
            this.Name = name ?? string.Empty;

            if (loggerLevel == 0)
            {
                loggerLevel = LoggerLevel.Info;
            }

            this.LoggerWriters = loggerWriters.Where(x => x != null).ToList();
            this.UseTimeStamp = useTimeStamp;
            this.LoggerLevel = loggerLevel;
        }

        public Logger(string name, bool useTimeStamp, params ILogger[] loggers)
            : this(name, useTimeStamp, 0, loggers)
        {
        }

        public void Error(string message)
        {
            string wrappedMessage;

            var level = LoggerLevel.Error;
            if (this.LoggerLevel >= level && (wrappedMessage = this.WrapMessage(message, level)) != null)
            {
                foreach (var logger in this.LoggerWriters)
                {
                    logger.Error(wrappedMessage);
                }
            }
        }

        public void Warn(string message)
        {
            string wrappedMessage;

            var level = LoggerLevel.Warning;
            if (this.LoggerLevel >= level && (wrappedMessage = this.WrapMessage(message, level)) != null)
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

            var level = LoggerLevel.Info;
            if (this.LoggerLevel >= level && (wrappedMessage = this.WrapMessage(message, level)) != null)
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

            var level = LoggerLevel.Trace;
            if (this.LoggerLevel >= level && (wrappedMessage = this.WrapMessage(message, level)) != null)
            {
                foreach (var logger in this.LoggerWriters)
                {
                    logger.Trace(wrappedMessage);
                }
            }
        }

        private string WrapMessage(string message, LoggerLevel logLevel)
        {
            if (this.LoggerLevel <= 0 || string.IsNullOrEmpty(message))
            {
                return null;
            }

            string wrappedMessage = string.Empty;

            if (!string.IsNullOrEmpty(this.Name))
            {
                wrappedMessage += this.Name + ": ";
            }

            wrappedMessage += logLevel + " ";

            if (this.UseTimeStamp)
            {
                wrappedMessage += DateTime.Now.ToString("s") + " ";
            }

            wrappedMessage += message;

            return wrappedMessage;
        }

    }
}
