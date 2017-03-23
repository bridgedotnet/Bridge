using Bridge;

namespace System.ComponentModel
{
    [External]
    public interface INotifyPropertyChanged : IBridgeClass
    {
        event PropertyChangedEventHandler PropertyChanged;
    }

    [Name("Function")]
    public delegate void PropertyChangedEventHandler(object sender, PropertyChangedEventArgs e);

    [External]
    public class PropertyChangedEventArgs : IBridgeClass
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