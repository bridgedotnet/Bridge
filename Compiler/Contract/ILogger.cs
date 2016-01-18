namespace Bridge.Contract
{
    public interface ILogger
    {
        void Warn(string message);

        void Error(string message);

        void Info(string message);

        void Trace(string message);
    }
}
