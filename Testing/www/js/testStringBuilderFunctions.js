/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.TestStringBuilderFunctions', {
    statics: {
        stringBuilders: function (assert) {
            assert.expect(21);

            // TEST constructors
            var sb = new Bridge.Text.StringBuilder();
            var sb1 = new Bridge.Text.StringBuilder("", 128);
            assert.deepEqual(sb.toString(), "", "StringBuilder() .ctor");
            assert.deepEqual(sb.toString(), sb1.toString(), "StringBuilder(capacity) .ctor");

            sb = new Bridge.Text.StringBuilder("foo");
            sb1 = new Bridge.Text.StringBuilder("foo", 2);
            assert.deepEqual(sb.toString(), "foo", "StringBuilder(string) .ctor");
            assert.deepEqual(sb.toString(), sb1.toString(), "StringBuilder(string, capacity) .ctor");

            sb = new Bridge.Text.StringBuilder("foo bar", 4, 3);
            assert.deepEqual(sb.toString(), "bar", "StringBuilder(string) .ctor");

            // TEST properties

            // Capacity
            sb = new Bridge.Text.StringBuilder("", 128);
            assert.deepEqual(sb.getCapacity(), 128, ".Capacity");
            sb = new Bridge.Text.StringBuilder("foo", 2);
            assert.deepEqual(sb.getCapacity(), 16, ".Capacity");
            sb.setCapacity(10);
            assert.deepEqual(sb.getCapacity(), 10, ".Capacity");

            // Length
            assert.deepEqual(sb.getLength(), ("foo").length, ".Length");

            // TEST methods

            // Clear
            sb.clear();
            assert.deepEqual(sb.getLength(), 0, ".Clear()");
            assert.deepEqual(sb.toString(), "", ".Clear()");

            // Append
            sb.append("foo");
            sb.append("foo bar", 3, 4);
            sb.append(true);
            sb.append(String.fromCharCode(61));
            sb.append(123);
            assert.deepEqual(sb.toString(), "foo bartrue=123", ".Append()");

            // AppendLine
            sb.appendLine();
            assert.deepEqual(sb.toString(), "foo bartrue=123\r\n", ".AppendLine()");
            sb.appendLine("foo bar");
            assert.deepEqual(sb.toString(), "foo bartrue=123\r\nfoo bar\r\n", ".AppendLine(string)");

            // AppendFormat
            sb.appendFormat("({0}, {1})", "foo", false);
            assert.deepEqual(sb.toString(), "foo bartrue=123\r\nfoo bar\r\n(foo, false)", ".AppendFormat(format, args)");

            // Insert
            sb.insert(0, 56.7);
            assert.deepEqual(sb.toString(), "56.7foo bartrue=123\r\nfoo bar\r\n(foo, false)", ".Insert()");

            // Remove
            sb.remove(4, 7);
            assert.deepEqual(sb.toString(), "56.7true=123\r\nfoo bar\r\n(foo, false)", ".Remove(start, length)");

            // Replace
            sb.replace("foo bar", "bar foo");
            assert.deepEqual(sb.toString(), "56.7true=123\r\nbar foo\r\n(foo, false)", ".Replace(string, string)");
            sb.replace(String.fromCharCode(13), String.fromCharCode(10));
            assert.deepEqual(sb.toString(), "56.7true=123\n\nbar foo\n\n(foo, false)", ".Replace(char, char)");
            sb.replace(String.fromCharCode(102), String.fromCharCode(70), 23, 6);
            assert.deepEqual(sb.toString(), "56.7true=123\n\nbar foo\n\n(Foo, false)", ".Replace(char, char, start, length)");
            sb.replace("Foo", "foo", 23, 6);
            assert.deepEqual(sb.toString(), "56.7true=123\n\nbar foo\n\n(foo, false)", ".Replace(string, string, start, length)");
        }
    }
});



Bridge.init();