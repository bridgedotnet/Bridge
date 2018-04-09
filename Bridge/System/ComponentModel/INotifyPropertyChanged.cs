namespace System.ComponentModel
{
    [Bridge.External]
    public interface INotifyPropertyChanged : Bridge.IBridgeClass
    {
        event PropertyChangedEventHandler PropertyChanged;
    }

    [Bridge.Name("Function")]
    public delegate void PropertyChangedEventHandler(object sender, PropertyChangedEventArgs e);

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    public class PropertyChangedEventArgs : Bridge.IBridgeClass
    {
        public PropertyChangedEventArgs(string propertyName)
        {
        }

        public PropertyChangedEventArgs(string propertyName, object newValue)
        {
        }

        public PropertyChangedEventArgs(string propertyName, object newValue, object oldValue)
        {
        }

        public readonly string PropertyName;
        public readonly object OldValue;
        public readonly object NewValue;
    }
}