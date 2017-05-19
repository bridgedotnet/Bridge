using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;

namespace Bridge.Translator
{
    public class SourceMapBuilder
    {
        private const int VLQBaseShift = 5;
        private const int VLQBaseMask = (1 << 5) - 1;
        private const int VLQContinuationBit = 1 << 5;
        private const int VLQContinuationMask = 1 << 5;
        private const string Base64Digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

        private readonly string _scriptFileName;
        private readonly string _sourceRoot;

        private readonly List<SourceMapEntry> _entries;

        private readonly Dictionary<string, int> _sourceUrlMap;
        public List<string> SourceUrlList
        {
            get;
        }

        private readonly Dictionary<string, int> _sourceNameMap;
        public List<string> SourceNameList
        {
            get;
        }

        private int _previousTargetLine;
        private int _previousTargetColumn;
        private int _previousSourceUrlIndex;
        private int _previousSourceLine;
        private int _previousSourceColumn;
        private int _previousSourceNameIndex;
        private bool _firstEntryInLine;

        public SourceMapBuilder(string scriptFileName, string sourceRoot)
        {
            this._scriptFileName = scriptFileName;
            this._sourceRoot = sourceRoot;

            _entries = new List<SourceMapEntry>();

            _sourceUrlMap = new Dictionary<string, int>();
            this.SourceUrlList = new List<string>();
            _sourceNameMap = new Dictionary<string, int>();
            this.SourceNameList = new List<string>();

            _previousTargetLine = 0;
            _previousTargetColumn = 0;
            _previousSourceUrlIndex = 0;
            _previousSourceLine = 0;
            _previousSourceColumn = 0;
            _previousSourceNameIndex = 0;
            _firstEntryInLine = true;
        }

        public void AddMapping(int scriptLine, int scriptColumn, SourceLocation sourceLocation)
        {
            if (_entries.Count > 0 && (scriptLine == _entries[_entries.Count - 1].ScriptLine))
            {
                if (SameAsPreviousLocation(sourceLocation))
                {
                    // The entry points to the same source location as the previous entry in the same line, hence it is not needed for the source map.
                    return;
                }
            }

            if (sourceLocation != null)
            {
                UpdatePreviousSourceLocation(sourceLocation);
            }

            _entries.Add(new SourceMapEntry(sourceLocation, scriptLine, scriptColumn));
        }

        public string Build(string[] sourcesContent, Bridge.Contract.UnicodeNewline? forceEol = null)
        {
            ResetPreviousSourceLocation();

            var mappingsBuffer = new StringBuilder();
            _entries.ForEach(entry => WriteEntry(entry, mappingsBuffer));

            var buffer = new StringBuilder();

            var nl = Emitter.NEW_LINE;

            buffer.Append("{" + nl);
            buffer.Append("  \"version\": 3," + nl);
            buffer.AppendFormat("  \"file\": \"{0}\"," + nl, _scriptFileName);
            buffer.Append("  \"sourceRoot\": \"" + _sourceRoot + "\"," + nl);
            buffer.Append("  \"sources\": ");
            PrintStringListOn(this.SourceUrlList, buffer);
            buffer.Append("," + nl);
            buffer.Append("  \"names\": ");
            PrintStringListOn(this.SourceNameList, buffer);
            buffer.Append("," + nl);
            buffer.Append("  \"mappings\": \"");
            buffer.Append(mappingsBuffer);
            buffer.Append("\"");

            if (sourcesContent != null)
            {
                if (forceEol.HasValue)
                {
                    sourcesContent = sourcesContent.Select(x => TextHelper.NormilizeEols(x, forceEol.Value)).ToArray();
                }

                buffer.Append("," + nl);
                buffer.Append("  \"sourcesContent\": ");
                buffer.Append(JsonConvert.SerializeObject(sourcesContent));
            }

            buffer.Append(nl + "}" + nl);
            return buffer.ToString();
        }

        private void ResetPreviousSourceLocation()
        {
            _previousSourceUrlIndex = 0;
            _previousSourceLine = 0;
            _previousSourceColumn = 0;
            _previousSourceNameIndex = 0;
        }

        private void UpdatePreviousSourceLocation(SourceLocation sourceLocation)
        {
            _previousSourceLine = sourceLocation.Line;
            _previousSourceColumn = sourceLocation.Column;
            string sourceUrl = sourceLocation.SourceUrl;
            _previousSourceUrlIndex = IndexOf(this.SourceUrlList, sourceUrl, _sourceUrlMap);
            string sourceName = sourceLocation.SourceName;

            if (sourceName != null)
            {
                _previousSourceNameIndex = IndexOf(this.SourceNameList, sourceName, _sourceNameMap);
            }
        }

        private bool SameAsPreviousLocation(SourceLocation sourceLocation)
        {
            if (sourceLocation == null)
            {
                return true;
            }

            int sourceUrlIndex = IndexOf(this.SourceUrlList, sourceLocation.SourceUrl, _sourceUrlMap);

            return sourceUrlIndex == _previousSourceUrlIndex &&
                   sourceLocation.Line == _previousSourceLine &&
                   sourceLocation.Column == _previousSourceColumn;
        }

        private static string EscapeQuotedStringLiteral(string s, bool forJson)
        {
            bool singleQuoted;
            if (forJson)
            {
                singleQuoted = false;
            }
            else
            {
                int n = 0;
                foreach (char ch in s)
                {
                    if (ch == '\'')
                        n++;
                    else if (ch == '\"')
                        n--;
                }
                singleQuoted = n < 1;
            }

            var sb = new StringBuilder();
            sb.Append(singleQuoted ? '\'' : '\"');

            foreach (char ch in s)
            {
                switch (ch)
                {
                    case '\b': sb.Append("\\b"); break;
                    case '\f': sb.Append("\\f"); break;
                    case '\n': sb.Append("\\n"); break;
                    case '\0': sb.Append("\\0"); break;
                    case '\r': sb.Append("\\r"); break;
                    case '\t': sb.Append("\\t"); break;
                    case '\v': sb.Append("\\v"); break;
                    case '\\': sb.Append("\\\\"); break;
                    case '\'': sb.Append(singleQuoted ? "\\\'" : "\'"); break;
                    case '\"': sb.Append(!singleQuoted ? "\\\"" : "\""); break;
                    default:
                        if (ch >= 0x20)
                        {
                            sb.Append(ch);
                        }
                        else
                        {
                            sb.Append("\\x" + ((int)ch).ToString("x"));
                        }
                        break;
                }
            }

            sb.Append(singleQuoted ? '\'' : '\"');
            return sb.ToString();
        }

        private void PrintStringListOn(List<string> strings, StringBuilder buffer)
        {
            bool first = true;

            buffer.Append("[");
            foreach (string str in strings)
            {
                if (!first)
                {
                    buffer.Append(",");
                }

                buffer.Append(SourceMapBuilder.EscapeQuotedStringLiteral(str, true));
                first = false;
            }

            buffer.Append("]");
        }

        private void WriteEntry(SourceMapEntry entry, StringBuilder output)
        {
            int targetLine = entry.ScriptLine;
            int targetColumn = entry.ScriptColumn;

            if (targetLine > _previousTargetLine)
            {
                for (int i = _previousTargetLine; i < targetLine; ++i)
                {
                    output.Append(";");
                }

                _previousTargetLine = targetLine;
                _previousTargetColumn = 0;
                _firstEntryInLine = true;
            }

            if (!_firstEntryInLine)
            {
                output.Append(",");
            }

            _firstEntryInLine = false;

            EncodeVLQ(output, targetColumn - _previousTargetColumn);
            _previousTargetColumn = targetColumn;

            if (entry.SourceLocation == null)
            {
                return;
            }

            string sourceUrl = entry.SourceLocation.SourceUrl;
            int sourceLine = entry.SourceLocation.Line;
            int sourceColumn = entry.SourceLocation.Column;
            string sourceName = entry.SourceLocation.SourceName;

            int sourceUrlIndex = IndexOf(this.SourceUrlList, sourceUrl, _sourceUrlMap);
            EncodeVLQ(output, sourceUrlIndex - _previousSourceUrlIndex);
            EncodeVLQ(output, sourceLine - _previousSourceLine);
            EncodeVLQ(output, sourceColumn - _previousSourceColumn);

            if (sourceName != null)
            {
                int sourceNameIndex = IndexOf(this.SourceNameList, sourceName, _sourceNameMap);
                EncodeVLQ(output, sourceNameIndex - _previousSourceNameIndex);
            }

            // Update previous source location to ensure the next indices are relative
            // to those if [entry.sourceLocation].
            UpdatePreviousSourceLocation(entry.SourceLocation);
        }

        private static int IndexOf(List<string> list, string value, Dictionary<string, int> map)
        {
            int result;
            if (map.TryGetValue(value, out result))
            {
                return result;
            }

            int index = list.Count;
            list.Add(value);

            return map[value] = index;
        }

        private static void EncodeVLQ(StringBuilder output, int value)
        {
            int signBit = 0;
            if (value < 0)
            {
                signBit = 1;
                value = -value;
            }

            value = (value << 1) | signBit;

            do
            {
                int digit = value & VLQBaseMask;
                value >>= VLQBaseShift;
                if (value > 0)
                {
                    digit |= VLQContinuationBit;
                }
                output.Append(Base64Digits[digit]);
            } while (value > 0);
        }
    }
}
