using Bridge;

namespace Bridge.ClientTest
{
    public interface IItem
    {
        object Value { get; }
    }

    public interface IWriteableItem : IItem
    {
        bool SetValue(object value);
    }

    public static class ClassLibraryTest
    {
        public static void Test(IWriteableItem item)
        {
            item.SetValue(2);
        }
    }
}