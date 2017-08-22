using Bridge.Contract;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace Bridge.Translator.Logging
{
    public class FileLoggerWriter : ILogger, IDisposable
    {
        private class BufferedMessage
        {
            public LoggerLevel LoggerLevel;
            public string Message;
            public bool UseWriteLine;
        }

        private const string LoggerFileName = "bridge.log";
        private const int LoggerFileMaxLength = 16 * 1024 * 1024;
        private const int MaxInitializationCount = 5;

        private bool IsInitializedSuccessfully { get; set; }
        private int InitializationCount { get; set; }
        private bool IsCleanedUp { get; set; }
        private Queue<BufferedMessage> Buffer { get; set; }

        public bool AlwaysLogErrors { get { return false; } }
        public string BaseDirectory { get; private set; }
        public string FullName { get; private set; }
        public string FileName { get; private set; }
        public long MaxLogFileSize { get; private set; }

        public bool BufferedMode { get; set; }
        public LoggerLevel LoggerLevel { get; set; }

        public FileLoggerWriter(string baseDir, string fileName, long? maxSize)
        {
            Buffer = new Queue<BufferedMessage>();
            SetParameters(baseDir, fileName, maxSize);
        }

        public FileLoggerWriter() : this(null, null, null)
        {
        }

        public FileLoggerWriter(string baseDir) : this(baseDir, null, null)
        {
        }

        public void SetParameters(string baseDir, string fileName, long? maxSize)
        {
            IsInitializedSuccessfully = false;
            IsCleanedUp = false;
            InitializationCount = 0;

            if (string.IsNullOrEmpty(baseDir))
            {
                this.BaseDirectory = null;
            }
            else
            {
                this.BaseDirectory = (new FileHelper()).GetDirectoryAndFilenamePathComponents(baseDir)[0];
            }

            this.FileName = string.IsNullOrEmpty(fileName) ? LoggerFileName : Path.GetFileName(fileName);
            this.MaxLogFileSize = !maxSize.HasValue || maxSize.Value <= 0 ? LoggerFileMaxLength : maxSize.Value;

            if (string.IsNullOrEmpty(this.BaseDirectory))
            {
                this.FullName = FileName;
            }
            else
            {
                this.FullName = Path.Combine(this.BaseDirectory, FileName);
            }
        }

        private bool CanBeInitialized
        {
            get { return InitializationCount < MaxInitializationCount; }
        }

        private bool CheckDirectoryAndLoggerSize()
        {
            if (IsInitializedSuccessfully)
            {
                return true;
            }

            if (!CanBeInitialized)
            {
                Buffer.Clear();
                return false;
            }

            InitializationCount++;

            try
            {
                var loggerFile = new FileInfo(this.FullName);

                if (!loggerFile.Directory.Exists)
                {
                    loggerFile.Directory.Create();
                }

                // Uncomment this lines if max file size logic required and handle fileMode in Flush()
                //if (loggerFile.Exists && loggerFile.Length > MaxLogFileSize)
                //{
                //    loggerFile.Delete();
                //}

                IsInitializedSuccessfully = true;
            }
            catch (System.Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }

            return IsInitializedSuccessfully;
        }

        private void WriteOrBuffer(LoggerLevel level, string message, bool useWriteLine)
        {
            if (!(IsInitializedSuccessfully || CanBeInitialized))
            {
                return;
            }

            Buffer.Enqueue(new BufferedMessage() { LoggerLevel = level, Message = message, UseWriteLine = useWriteLine });

            if (BufferedMode)
            {
                return;
            }

            Flush();
        }

        private void WriteOrBufferLine(LoggerLevel level, string s)
        {
            WriteOrBuffer(level, s, true);
        }

        private bool CheckLoggerLevel(LoggerLevel level)
        {
            return level <= LoggerLevel;
        }

        public void Flush()
        {
            if (!CheckDirectoryAndLoggerSize())
            {
                return;
            }

            if (Buffer.Any(x => CheckLoggerLevel(x.LoggerLevel)))
            {
                try
                {
                    var fileMode = FileMode.Append;

                    if (!IsCleanedUp)
                    {
                        fileMode = FileMode.Create;
                        IsCleanedUp = true;
                    }

                    FileInfo file = new FileInfo(this.FullName);

                    using (Stream stream = file.Open(fileMode, FileAccess.Write, FileShare.Write | FileShare.ReadWrite | FileShare.Delete))
                    {
                        using (StreamWriter writer = new StreamWriter(stream, Encoding.UTF8))
                        {
                            stream.Position = stream.Length;

                            BufferedMessage message;

                            while (Buffer.Count > 0)
                            {
                                message = Buffer.Dequeue();

                                if (!CheckLoggerLevel(message.LoggerLevel))
                                {
                                    continue;
                                }

                                if (message.UseWriteLine)
                                {
                                    writer.WriteLine(message.Message);
                                }
                                else
                                {
                                    writer.Write(message.Message);
                                }

                                writer.Flush();
                            }
                        }
                    }
                }
                catch (System.Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }
            }
            else
            {
                Buffer.Clear();
            }
        }

        public void Error(string message)
        {
            WriteOrBufferLine(LoggerLevel.Error, message);
        }

        public void Warn(string message)
        {
            WriteOrBufferLine(LoggerLevel.Warning, message);
        }

        public void Info(string message)
        {
            WriteOrBufferLine(LoggerLevel.Info, message);
        }

        public void Trace(string message)
        {
            WriteOrBufferLine(LoggerLevel.Trace, message);
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            return;
        }

        ~FileLoggerWriter()
        {
            this.Dispose(false);
        }
    }
}