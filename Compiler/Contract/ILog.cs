namespace Bridge.Contract
{
    public interface ILog
    {
        void LogWarning(string message);

        void LogError(string message);

        void LogMessage(string message);

        void LogMessage(string level, string message);
    }
}