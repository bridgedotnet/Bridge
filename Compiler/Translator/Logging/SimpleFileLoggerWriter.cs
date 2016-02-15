using System;
using System.IO;
using System.Text;

using Bridge.Contract;

namespace Bridge.Translator.Logging
{
    public class SimpleFileLoggerWriter : ILogger, IDisposable
    {
        public string BaseDirectory { get; private set; }
        public string FullName { get; private set; }


        private const string LoggerFileName = "bridge.log";
        private const int LoggerFileMaxLength = 16 * 1024 * 1024;

        public SimpleFileLoggerWriter()
        {
            CreateLogger();
        }

        public SimpleFileLoggerWriter(string baseDir)
        {
            this.BaseDirectory = Path.GetDirectoryName(baseDir);

            CreateLogger();
        }

        private void CreateLogger()
        {
            if (string.IsNullOrEmpty(this.BaseDirectory))
            {
                this.FullName = LoggerFileName;
            }
            else
            {
                this.FullName = Path.Combine(this.BaseDirectory, LoggerFileName);
            }

            try
            {
                var loggerFile = new FileInfo(this.FullName);

                if (!loggerFile.Directory.Exists)
                {
                    loggerFile.Directory.Create();
                }

                if (loggerFile.Exists && loggerFile.Length > LoggerFileMaxLength)
                {
                    loggerFile.Delete();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
        }

        private void WriteToLogFile(string message, bool useWriteLine)
        {
            try
            {
                FileInfo file = new FileInfo(this.FullName);
                using (Stream stream = file.Open(FileMode.Append, FileAccess.Write, FileShare.Write | FileShare.ReadWrite | FileShare.Delete))
                {
                    using (StreamWriter writer = new StreamWriter(stream, Encoding.UTF8))
                    {
                        stream.Position = stream.Length;

                        if (useWriteLine)
                        {
                            writer.WriteLine(message);
                        }
                        else
                        {
                            writer.Write(message);
                        }

                        writer.Flush();
                    }
                }
            }
            catch (Exception ex)
            {
                WriteLine(ex.ToString());
            }
        }


        private void WriteLine(string s)
        {
            WriteToLogFile(s, true);
        }

        public void Error(string message)
        {
            WriteLine(message);
        }

        public void Warn(string message)
        {
            WriteLine(message);
        }

        public void Info(string message)
        {
            WriteLine(message);
        }

        public void Trace(string message)
        {
            WriteLine(message);
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
    }
}
