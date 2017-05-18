using System;

namespace Bridge.Translator
{
    public class SourceMapEntry
    {
        public int ScriptLine
        {
            get; private set;
        }
        public int ScriptColumn
        {
            get; private set;
        }
        public SourceLocation SourceLocation
        {
            get; private set;
        }

        public SourceMapEntry(SourceLocation sourceLocation, int scriptLine, int scriptColumn)
        {
            this.SourceLocation = sourceLocation;
            this.ScriptLine = scriptLine;
            this.ScriptColumn = scriptColumn;
        }
    }
}
