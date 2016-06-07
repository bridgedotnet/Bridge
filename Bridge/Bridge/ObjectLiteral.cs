namespace Bridge
{
    [External]
    [Name("Object")]
    public sealed class ObjectLiteral
    {
        [Template("{o:plain}")]
        public extern ObjectLiteral(object o);
    }
}