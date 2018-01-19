using Bridge;

namespace Issue3278
{
    /// <summary>
    /// This will check against multiple properties output to typescript file
    /// while AutoProperty rule is set to 'plain' as reported in github issue
    /// bridgedotnet/Bridge#3278
    /// </summary>
    [Rules(AutoProperty = AutoPropertyRule.Plain)]
    public class Program
    {
        public string TestProp { get; }
    }
}
