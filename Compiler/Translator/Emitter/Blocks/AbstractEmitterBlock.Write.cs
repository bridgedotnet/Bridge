using Bridge.Contract;
using Bridge.Contract.Constants;

using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;
using System.Text.RegularExpressions;

namespace Bridge.Translator
{
    public partial class AbstractEmitterBlock
    {
        public virtual void Indent()
        {
            ++this.Emitter.Level;
        }

        public virtual void Outdent()
        {
            if (this.Emitter.Level > 0)
            {
                this.Emitter.Level--;
            }
        }

        public virtual void WriteIndent()
        {
            if (!this.Emitter.IsNewLine)
            {
                return;
            }

            for (var i = 0; i < this.Emitter.Level; i++)
            {
                this.Emitter.Output.Append(Bridge.Translator.Emitter.INDENT);
            }

            this.Emitter.IsNewLine = false;
        }

        public virtual void WriteNewLine()
        {
            this.Emitter.Output.Append(Bridge.Translator.Emitter.NEW_LINE);
            this.Emitter.IsNewLine = true;
        }

        public virtual void BeginBlock()
        {
            this.WriteOpenBrace();
            this.WriteNewLine();
            this.Indent();
        }

        public virtual void EndBlock()
        {
            this.Outdent();
            this.WriteCloseBrace();
        }

        public virtual void Write(object value)
        {
            this.WriteIndent();
            this.Emitter.Output.Append(value);
        }

        public virtual void Write(params object[] values)
        {
            foreach (var item in values)
            {
                this.Write(item);
            }
        }

        public virtual void WriteScript(object value)
        {
            this.WriteIndent();
            var s = AbstractEmitterBlock.ToJavaScript(value, this.Emitter);

            this.Emitter.Output.Append(s);
        }

        public static string ToJavaScript(object value, IEmitter emitter)
        {
            string s = null;

            if (value is double)
            {
                double d = (double) value;
                if (double.IsNaN(d))
                {
                    s = JS.Types.Number.NaN;
                }
                else if (double.IsPositiveInfinity(d))
                {
                    s = JS.Types.Number.Infinity;
                }
                else if (double.IsNegativeInfinity(d))
                {
                    s = JS.Types.Number.InfinityNegative;
                }
                else
                {
                    s = emitter.ToJavaScript(value);
                }
            }
            else if (value is float)
            {
                float f = (float)value;
                if (float.IsNaN(f))
                {
                    s = JS.Types.Number.NaN;
                }
                else if (float.IsPositiveInfinity(f))
                {
                    s = JS.Types.Number.Infinity;
                }
                else if (float.IsNegativeInfinity(f))
                {
                    s = JS.Types.Number.InfinityNegative;
                }
                else
                {
                    s = emitter.ToJavaScript(value);
                }
            }
            else if (value is char)
            {
                s = emitter.ToJavaScript((int)(char)value);
            }
            else if (value is decimal)
            {
                s = JS.Types.SYSTEM_DECIMAL + "(" + AbstractEmitterBlock.DecimalConstant((decimal)value, emitter) + ")";
            }
            else if (value is long)
            {
                s = JS.Types.System.Int64.NAME + "(" + AbstractEmitterBlock.LongConstant((long)value, emitter) + ")";
            }
            else if (value is ulong)
            {
                s = JS.Types.SYSTEM_UInt64 + "(" + AbstractEmitterBlock.ULongConstant((ulong)value, emitter) + ")";
            }
            else
            {
                s = emitter.ToJavaScript(value);
            }
            return s;
        }

        public virtual void WriteLines(IEnumerable<string> lines)
        {
            foreach (var line in lines)
            {
                this.Write(line.Replace(Bridge.Translator.Emitter.CRLF, Bridge.Translator.Emitter.NEW_LINE));
                this.WriteNewLine();
            }
        }

        public virtual void WriteLines(params string[] lines)
        {
            this.WriteLines((IEnumerable<string>)lines);
        }

        public static string DecimalConstant(decimal value, IEmitter emitter)
        {
            string s = null;
            bool similar = false;

            try
            {
                similar = (decimal)(double)value == value;
            }
            catch
            {
            }

            if (similar)
            {
                s = emitter.ToJavaScript((double)value);
                if (CultureInfo.InstalledUICulture.CompareInfo.IndexOf(s, "e", CompareOptions.IgnoreCase) > -1)
                {
                    s = emitter.ToJavaScript(s);
                }
            }
            else
            {
                s = emitter.ToJavaScript(value.ToString(CultureInfo.InvariantCulture));
            }

            return s;
        }

        public static string LongConstant(long value, IEmitter emitter)
        {
            if (value > Int32.MaxValue || value < Int32.MinValue)
            {
                int l1 = (int)(value & uint.MaxValue);
                int l2 = (int)(value >> 32);

                return emitter.ToJavaScript(new int[] { l1, l2 });
            }

            return emitter.ToJavaScript(value);
        }

        public static string ULongConstant(ulong value, IEmitter emitter)
        {
            if (value > UInt32.MaxValue)
            {
                int l1 = (int)(value & uint.MaxValue);
                int l2 = (int)(value >> 32);

                return emitter.ToJavaScript(new int[] { l1, l2 });
            }

            return emitter.ToJavaScript(value);
        }

        public virtual void WriteCall(object callee = null)
        {
            this.WriteDot();

            if (callee == null)
            {
                this.Write(JS.Funcs.CALL);
            }
            else
            {
                this.Write(JS.Funcs.CALL);
                this.WriteOpenParentheses();
                this.Write(callee);
                this.WriteCloseParentheses();
            }
        }

        public virtual void WriteComma()
        {
            this.WriteComma(false);
        }

        public virtual void WriteComma(bool newLine)
        {
            this.Write(",");

            if (newLine)
            {
                this.WriteNewLine();
            }
            else
            {
                this.WriteSpace();
            }
        }

        public static string GetThisAlias(IEmitter emitter)
        {
            return "this";
        }

        public virtual void WriteThis()
        {
            this.Write(AbstractEmitterBlock.GetThisAlias(this.Emitter));
            this.Emitter.ThisRefCounter++;
        }

        public virtual void WriteSpace()
        {
            this.WriteSpace(true);
        }

        public virtual void WriteSpace(bool addSpace)
        {
            if (addSpace)
            {
                this.Write(" ");
            }
        }

        public virtual void WriteDot()
        {
            this.Write(".");
        }

        public virtual void WriteColon()
        {
            this.Write(": ");
        }

        public virtual void WriteSemiColon()
        {
            this.WriteSemiColon(false);
        }

        public virtual void WriteSemiColon(bool newLine)
        {
            if (this.Emitter.SkipSemiColon)
            {
                this.Emitter.SkipSemiColon = false;
                return;
            }

            this.Write(";");

            if (newLine)
            {
                this.WriteNewLine();
            }
        }

        public virtual void WriteNew()
        {
            this.Write("new ");
        }

        public virtual void WriteVar(bool ignoreAsync = false)
        {
            if (!this.Emitter.IsAsync || ignoreAsync)
            {
                this.Write("var ");
            }
        }

        public virtual void WriteIf()
        {
            this.Write("if ");
        }

        public virtual void WriteElse()
        {
            this.Write("else ");
        }

        public virtual void WriteWhile()
        {
            this.Write("while ");
        }

        public virtual void WriteFor()
        {
            this.Write("for ");
        }

        public virtual void WriteThrow()
        {
            this.Write("throw ");
        }

        public virtual void WriteTry()
        {
            this.Write("try ");
        }

        public virtual void WriteCatch()
        {
            this.Write("catch ");
        }

        public virtual void WriteFinally()
        {
            this.Write("finally ");
        }

        public virtual void WriteDo()
        {
            this.Write("do");
        }

        public virtual void WriteSwitch()
        {
            this.Write("switch ");
        }

        public virtual void WriteReturn(bool addSpace)
        {
            this.Write("return");
            this.WriteSpace(addSpace);
        }

        public virtual void WriteOpenBracket()
        {
            this.WriteOpenBracket(false);
        }

        public virtual void WriteOpenBracket(bool addSpace)
        {
            this.Write("[");
            this.WriteSpace(addSpace);
        }

        public virtual void WriteCloseBracket()
        {
            this.WriteCloseBracket(false);
        }

        public virtual void WriteCloseBracket(bool addSpace)
        {
            this.WriteSpace(addSpace);
            this.Write("]");
        }

        public virtual void WriteOpenParentheses()
        {
            this.WriteOpenParentheses(false);
        }

        public virtual void WriteOpenParentheses(bool addSpace)
        {
            this.Write("(");
            this.WriteSpace(addSpace);
        }

        public virtual void WriteCloseParentheses()
        {
            this.WriteCloseParentheses(false);
        }

        public virtual void WriteCloseParentheses(bool addSpace)
        {
            this.WriteSpace(addSpace);
            this.Write(")");
        }

        public virtual void WriteOpenCloseParentheses()
        {
            this.WriteOpenCloseParentheses(false);
        }

        public virtual void WriteOpenCloseParentheses(bool addSpace)
        {
            this.Write("()");
            this.WriteSpace(addSpace);
        }

        public virtual void WriteOpenBrace()
        {
            this.WriteOpenBrace(false);
        }

        public virtual void WriteOpenBrace(bool addSpace)
        {
            this.Write("{");
            this.WriteSpace(addSpace);
        }

        public virtual void WriteCloseBrace()
        {
            this.WriteCloseBrace(false);
        }

        public virtual void WriteCloseBrace(bool addSpace)
        {
            this.WriteSpace(addSpace);
            this.Write("}");
        }

        public virtual void WriteOpenCloseBrace()
        {
            this.Write("{ }");
        }

        public virtual void WriteFunction()
        {
            this.Write("function ");
        }

        public virtual void PushWriter(string format, Action callback = null, string thisArg = null, int[] ignoreRange = null)
        {
            this.Emitter.Writers.Push(new Writer { InlineCode = format, Output = this.Emitter.Output, IsNewLine = this.Emitter.IsNewLine, Callback = callback, ThisArg = thisArg, IgnoreRange = ignoreRange });
            this.Emitter.IsNewLine = false;
            this.Emitter.Output = new StringBuilder();
        }

        public virtual string PopWriter(bool preventWrite = false)
        {
            string result = this.Emitter.Output.ToString();
            var writer = this.Emitter.Writers.Pop();
            this.Emitter.Output = writer.Output;
            result = writer.InlineCode != null ? string.Format(writer.InlineCode, result) : result;
            this.Emitter.IsNewLine = writer.IsNewLine;

            if (!preventWrite)
            {
                this.Write(result);
            }

            if (writer.Callback != null)
            {
                writer.Callback.Invoke();
            }

            return result;
        }

        public virtual string WriteIndentToString(string value)
        {
            return WriteIndentToString(value, this.Emitter.Level);
        }

        public static string WriteIndentToString(string value, int level)
        {
            StringBuilder output = new StringBuilder();

            for (var i = 0; i < level; i++)
            {
                output.Append(Bridge.Translator.Emitter.INDENT);
            }

            string indent = output.ToString();

            return Regex.Replace(value, Bridge.Translator.Emitter.NEW_LINE + "(?!\\s*$)(.+)", (m) =>
            {
                return Bridge.Translator.Emitter.NEW_LINE + indent + m.Groups[1].Value;
            }, RegexOptions.Multiline);
        }

        public static string RemoveIndentFromString(string value, int offset)
        {
            StringBuilder output = new StringBuilder();
            string indentWhiteSpaces = new string(' ', offset);

            int level = offset / 4;
            for (var i = 0; i < level; i++)
            {
                output.Append(Bridge.Translator.Emitter.TAB);
            }

            var needSpaces = offset % 4;
            if (needSpaces > 0)
            {
                output.Append(new string(' ', needSpaces));
            }

            string indentTabs = output.ToString();

            value = value.Replace(Bridge.Translator.Emitter.NEW_LINE + indentWhiteSpaces, Bridge.Translator.Emitter.NEW_LINE);
            return value.Replace(Bridge.Translator.Emitter.NEW_LINE + indentTabs, Bridge.Translator.Emitter.NEW_LINE);
        }

        public virtual void EnsureComma(bool newLine = true)
        {
            if (this.Emitter.Comma)
            {
                this.WriteComma(newLine);
                this.Emitter.Comma = false;
            }
        }

        public IWriterInfo SaveWriter()
        {
            /*if (this.Emitter.LastSavedWriter != null && this.Emitter.LastSavedWriter.Output == this.Emitter.Output)
            {
                this.Emitter.LastSavedWriter.IsNewLine = this.Emitter.IsNewLine;
                this.Emitter.LastSavedWriter.Level = this.Emitter.Level;
                this.Emitter.LastSavedWriter.Comma = this.Emitter.Comma;
                return this.Emitter.LastSavedWriter;
            }*/

            var info = new WriterInfo
            {
                Output = this.Emitter.Output,
                IsNewLine = this.Emitter.IsNewLine,
                Level = this.Emitter.Level,
                Comma = this.Emitter.Comma
            };

            this.Emitter.LastSavedWriter = info;

            return info;
        }

        public bool RestoreWriter(IWriterInfo writer)
        {
            if (this.Emitter.Output != writer.Output)
            {
                this.Emitter.Output = writer.Output;
                this.Emitter.IsNewLine = writer.IsNewLine;
                this.Emitter.Level = writer.Level;
                this.Emitter.Comma = writer.Comma;

                return true;
            }

            return false;
        }

        public StringBuilder NewWriter()
        {
            this.Emitter.Output = new StringBuilder();
            this.Emitter.IsNewLine = false;
            this.Emitter.Level = 0;
            this.Emitter.Comma = false;

            return this.Emitter.Output;
        }

        public int GetNumberOfEmptyLinesAtEnd()
        {
            return AbstractEmitterBlock.GetNumberOfEmptyLinesAtEnd(this.Emitter.Output);
        }

        public static int GetNumberOfEmptyLinesAtEnd(StringBuilder buffer)
        {
            int count = 0;
            bool lastNewLineFound = false;
            int i = buffer.Length - 1;
            var charArray = buffer.ToString().ToCharArray();

            while (i >= 0)
            {
                char c = charArray[i];

                if (!Char.IsWhiteSpace(c))
                {
                    return count;
                }

                if (c == Bridge.Translator.Emitter.NEW_LINE_CHAR)
                {
                    if (!lastNewLineFound)
                    {
                        lastNewLineFound = true;
                    }
                    else
                    {
                        count++;
                        ;
                    }
                }
                i--;
            }

            return count;
        }

        public bool IsOnlyWhitespaceOnPenultimateLine(bool lastTwoLines = true)
        {
            return AbstractEmitterBlock.IsOnlyWhitespaceOnPenultimateLine(this.Emitter.Output, lastTwoLines);
        }

        public static bool IsOnlyWhitespaceOnPenultimateLine(StringBuilder buffer, bool lastTwoLines = true)
        {
            int i = buffer.Length - 1;
            var charArray = buffer.ToString().ToCharArray();

            while (i >= 0)
            {
                char c = charArray[i];

                if (!Char.IsWhiteSpace(c))
                {
                    return false;
                }

                if (c == Bridge.Translator.Emitter.NEW_LINE_CHAR)
                {
                    if (lastTwoLines)
                    {
                        lastTwoLines = false;
                    }
                    else
                    {
                        return true;
                    }
                }

                i--;
            }

            return true;
        }

        public bool RemovePenultimateEmptyLines(bool withLast = false)
        {
            if (this.Emitter.Output != null)
            {
                return AbstractMethodBlock.RemovePenultimateEmptyLines(this.Emitter.Output, withLast);
            }

            return false;
        }

        public static bool RemovePenultimateEmptyLines(StringBuilder buffer, bool withLast = false)
        {
            bool removed = false;
            if (buffer.Length != 0)
            {
                int length = buffer.Length;
                int i = length - 1;
                var charArray = buffer.ToString().ToCharArray();
                int start = -1;
                int end = -1;
                bool firstCR = true;

                while (Char.IsWhiteSpace(charArray[i]) && (i > -1))
                {
                    if (charArray[i] == Bridge.Translator.Emitter.NEW_LINE_CHAR)
                    {
                        if (firstCR)
                        {
                            firstCR = false;
                            end = i;

                            if (withLast)
                            {
                                start = i;
                            }
                        }
                        else
                        {
                            start = i;
                        }
                    }

                    i--;
                }

                if (start > -1 && end > -1)
                {
                    buffer.Remove(start, end - start + 1);
                    removed = true;
                }
            }
            return removed;
        }

        public static bool IsReturnLast(string str)
        {
            str = str.TrimEnd();
            return str.EndsWith("return;");
        }

        public static bool IsContinueLast(string str)
        {
            str = str.TrimEnd();
            return str.EndsWith("continue;");
        }

        public static bool IsJumpStatementLast(string str)
        {
            str = str.TrimEnd();
            return str.EndsWith("continue;") || str.EndsWith("return;") || str.EndsWith("break;");
        }
    }

    public class WriterInfo : IWriterInfo
    {
        public StringBuilder Output
        {
            get;
            set;
        }

        public bool IsNewLine
        {
            get;
            set;
        }

        public int Level
        {
            get;
            set;
        }

        public bool Comma
        {
            get;
            set;
        }
    }

    public class Writer : IWriter
    {
        public StringBuilder Output
        {
            get;
            set;
        }

        public bool IsNewLine
        {
            get;
            set;
        }

        public string InlineCode
        {
            get;
            set;
        }

        public Action Callback
        {
            get;
            set;
        }

        public string ThisArg
        {
            get;
            set;
        }

        public int[] IgnoreRange
        {
            get; set;
        }
    }
}