using Bridge;
using Bridge.QUnit;
using System;
using System.Text;

namespace ClientTestLibrary
{
    // Tests DateTime functions
    class TestStringBuilderFunctions
    {
        // StringBuilder functions
        public static void StringBuilders(Assert assert)
        {
            assert.Expect(21);

            // TEST constructors
            StringBuilder sb = new StringBuilder();
            var sb1 = new StringBuilder(128);
            assert.DeepEqual(sb.ToString(), string.Empty, "StringBuilder() .ctor");
            assert.DeepEqual(sb.ToString(), sb1.ToString(), "StringBuilder(capacity) .ctor");

            sb = new StringBuilder("foo");
            sb1 = new StringBuilder("foo", 2);
            assert.DeepEqual(sb.ToString(), "foo", "StringBuilder(string) .ctor");
            assert.DeepEqual(sb.ToString(), sb1.ToString(), "StringBuilder(string, capacity) .ctor");

            sb = new StringBuilder("foo bar", 4, 3);
            assert.DeepEqual(sb.ToString(), "bar", "StringBuilder(string) .ctor");

            // TEST properties

            // Capacity
            sb = new StringBuilder(128);
            assert.DeepEqual(sb.Capacity, 128, ".Capacity");
            sb = new StringBuilder("foo", 2);
            assert.DeepEqual(sb.Capacity, 16, ".Capacity");
            sb.Capacity = 10;
            assert.DeepEqual(sb.Capacity, 10, ".Capacity");

            // Length
            assert.DeepEqual(sb.Length, "foo".Length, ".Length");

            // TEST methods

            // Clear
            sb.Clear();
            assert.DeepEqual(sb.Length, 0, ".Clear()");
            assert.DeepEqual(sb.ToString(), string.Empty, ".Clear()");

            // Append
            sb.Append("foo");
            sb.Append("foo bar", 3, 4);
            sb.Append(true);
            sb.Append('=');
            sb.Append(123);
            assert.DeepEqual(sb.ToString(), "foo bartrue=123", ".Append()");

            // AppendLine
            sb.AppendLine();
            assert.DeepEqual(sb.ToString(), "foo bartrue=123\r\n", ".AppendLine()");
            sb.AppendLine("foo bar");
            assert.DeepEqual(sb.ToString(), "foo bartrue=123\r\nfoo bar\r\n", ".AppendLine(string)");

            // AppendFormat
            sb.AppendFormat("({0}, {1})", "foo", false);
            assert.DeepEqual(sb.ToString(), "foo bartrue=123\r\nfoo bar\r\n(foo, false)", ".AppendFormat(format, args)");

            // Insert
            sb.Insert(0, 56.7);
            assert.DeepEqual(sb.ToString(), "56.7foo bartrue=123\r\nfoo bar\r\n(foo, false)", ".Insert()");

            // Remove
            sb.Remove(4, 7);
            assert.DeepEqual(sb.ToString(), "56.7true=123\r\nfoo bar\r\n(foo, false)", ".Remove(start, length)");

            // Replace
            sb.Replace("foo bar", "bar foo");
            assert.DeepEqual(sb.ToString(), "56.7true=123\r\nbar foo\r\n(foo, false)", ".Replace(string, string)");
            sb.Replace('\r', '\n');
            assert.DeepEqual(sb.ToString(), "56.7true=123\n\nbar foo\n\n(foo, false)", ".Replace(char, char)");
            sb.Replace('f', 'F', 23, 6);
            assert.DeepEqual(sb.ToString(), "56.7true=123\n\nbar foo\n\n(Foo, false)", ".Replace(char, char, start, length)");
            sb.Replace("Foo", "foo", 23, 6);
            assert.DeepEqual(sb.ToString(), "56.7true=123\n\nbar foo\n\n(foo, false)", ".Replace(string, string, start, length)");
        }
    }
}
