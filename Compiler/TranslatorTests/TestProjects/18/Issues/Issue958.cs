using Bridge;

using System;
using System.Collections.Generic;
using System.Linq;

//#958
namespace TestIssue958
{
    public class Issue958
    {
        public static void Main1()
        {
            var message = new SetValue("Hi!");
            ProcessMessage(message);
        }

        private static void ProcessMessage(IMessage message)
        {
            // The call should have generic type as function parameter
            message
                .If<SetName>(action => Console.WriteLine("Name: " + action.Name))
                .If<SetValue>(action => Console.WriteLine("Value: " + action.Value));
        }
    }

    public static class MessageExtensions
    {
        // Should have generic type as function parameter
        public static IMessage If<T>(this IMessage source, Action<T> work) where T : IMessage
        {
            if (source is T)
                work((T)source);
            return source;
        }
    }

    public sealed class SetName : IMessage
    {
        public SetName(string name)
        {
            Name = name;
        }
        public string Name { get; private set; }
    }

    public sealed class SetValue : IMessage
    {
        public SetValue(string value)
        {
            Value = value;
        }
        public string Value { get; private set; }
    }

    public interface IMessage { }
}
