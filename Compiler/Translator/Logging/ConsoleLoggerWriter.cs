using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Bridge.Contract;

namespace Bridge.Translator.Logging
{
    public class ConsoleLoggerWriter : ILogger
    {
        public void Error(string message)
        {
            Console.ForegroundColor = ConsoleColor.Red;
            OutputMessage(message);
        }

        public void Warn(string message)
        {
            Console.ForegroundColor = ConsoleColor.DarkYellow;
            OutputMessage(message);
        }

        public void Info(string message)
        {
            Console.ForegroundColor = ConsoleColor.Gray;
            OutputMessage(message);
        }

        public void Trace(string message)
        {
            Console.ForegroundColor = ConsoleColor.Green;
            OutputMessage(message);
        }

        private void OutputMessage(string message)
        {
            Console.WriteLine(message);
            Console.ResetColor();
        }
    }
}
