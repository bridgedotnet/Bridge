//#1023
namespace Test.BridgeIssues.N1023
{
    public struct Optional<T>
    {
        public Optional(T value) : this()
        {
            Value = value;
        }

        public T Value { get; private set; }
    }

    public class PersonDetails
    {
        public PersonDetails(Optional<string> name)
        {
            Name = name;
        }

        public Optional<string> Name { get; private set; }
    }
}
