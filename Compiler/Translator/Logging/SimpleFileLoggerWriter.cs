using System;
using System.IO;
using System.Text;

using Bridge.Contract;

namespace Bridge.Translator.Logging
{
    public sealed class SimpleFileLoggerWriter : ILogger, IDisposable
    {
        public static SimpleFileLoggerWriter Instance
        {
            get
            {
                return Nested.instance;
            }
        }

        private class Nested
        {
            // Explicit static constructor to tell C# compiler not to mark type as beforefieldinit
            static Nested()
            {
            }

            internal static readonly SimpleFileLoggerWriter instance = new SimpleFileLoggerWriter();
        }

        private TextWriter Writer
        {
            get;
            set;
        }

        private const string LoggerFileName = "bridge.log";
        private const int LoggerFileMaxLength = 16 * 1024 * 1024;

        private SimpleFileLoggerWriter()
        {
            var loggerFile = new FileInfo(LoggerFileName);

            if (loggerFile.Exists && loggerFile.Length > LoggerFileMaxLength)
            {
                loggerFile.Delete();
            }

            Writer = new StreamWriter(
                File.Open(LoggerFileName, FileMode.Append, FileAccess.Write, FileShare.ReadWrite | FileShare.Delete),
                Encoding.UTF8
            );
        }

        private void Write(string s)
        {
            Writer.Write(s);
            Writer.Flush();
        }

        private void Write(string format, params object[] arg)
        {
            Writer.Write(format, arg);
            Writer.Flush();
        }

        private void WriteLine(string s)
        {
            Writer.WriteLine(s);
            Writer.Flush();
        }

        private void WriteLine(string format, params object[] arg)
        {
            Writer.WriteLine(format, arg);
            Writer.Flush();
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
            Writer.Close();
        }
    }
}
