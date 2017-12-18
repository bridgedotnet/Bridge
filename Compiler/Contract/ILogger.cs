namespace Bridge.Contract
{
    public interface ILogger
    {
        bool AlwaysLogErrors { get; }

        bool BufferedMode { get; set; }

        void Flush();

        LoggerLevel LoggerLevel { get; set; }

        void Warn(string message);

        void Error(string message);

        void Error(string message, string file, int lineNumber, int columnNumber, int endLineNumber, int endColumnNumber);

        void Info(string message);

        void Trace(string message);
    }
}