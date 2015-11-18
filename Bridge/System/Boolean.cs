using Bridge;

namespace System
{
    [External]
    [Name("Boolean")]
    //[Constructor("!!")]
    public struct Boolean
    {
        [Template("!!")]
        public Boolean(object value)
        {
        }
    }
}