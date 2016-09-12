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

        void Info(string message);

        void Trace(string message);
    }
}