namespace Bridge
{
    [External]
    [Name("System.Object")]
    public sealed class ObjectLiteral
    {
        [Template("{o:plain}")]
        public extern ObjectLiteral(object o);
    }
}