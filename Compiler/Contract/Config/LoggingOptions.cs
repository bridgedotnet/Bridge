namespace Bridge.Contract
{
    public class LoggingOptions
    {
        public LoggerLevel? Level
        {
            get; set;
        }

        public bool? TimeStamps
        {
            get; set;
        }

        public long? MaxSize
        {
            get; set;
        }

        public string Folder
        {
            get; set;
        }

        public string FileName
        {
            get; set;
        }
    }
 }
