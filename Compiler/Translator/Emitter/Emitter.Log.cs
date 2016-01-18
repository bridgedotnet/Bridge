using Bridge.Contract;
using System;

namespace Bridge.Translator
{
    public partial class Emitter : ILog
    {
        public ILogger Log
        {
            get;
            set;
        }

        public virtual void LogWarning(string message)
        {
            if (this.Log != null)
            {
                this.Log.Warn(message);
            }
        }

        public virtual void LogError(string message)
        {
            if (this.Log != null)
            {
                this.Log.Error(message);
            }
        }

        public virtual void LogMessage(string message)
        {
            if (this.Log != null)
            {
                this.Log.Info(message);
            }
        }

        public virtual void LogMessage(string level, string message)
        {
            if (this.Log != null)
            {
                this.Log.Info(level + ": " + message);
            }
        }
    }
}
