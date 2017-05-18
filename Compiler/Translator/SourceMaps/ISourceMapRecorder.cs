using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.Translator
{
    public interface ISourceMapRecorder
    {
        /// <summary>
        /// Record a source location. If the <paramref name="sourcePath"/> is null and <paramref name="sourceLine"/> and <paramref name="sourceCol"/> are both 0 it means that no source information is available.
        /// </summary>
        /// <param name="scriptLine">1-based line number in the generated script.</param>
        /// <param name="scriptCol">1-based column in the generated script.</param>
        /// <param name="sourcePath">Path to the source file.</param>
        /// <param name="sourceLine">1-base line number in the source file.</param>
        /// <param name="sourceCol">1-based column number in the source file</param>
        void RecordLocation(int scriptLine, int scriptCol, string sourcePath, int sourceLine, int sourceCol);
    }
}
