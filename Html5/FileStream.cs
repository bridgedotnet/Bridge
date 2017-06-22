using Bridge;
using Bridge.Html5;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace System.IO
{
    [FileName("io.js"), External, Reflectable]
    public class FileStream : Stream
    {
        public extern FileStream (File file);
        /// <summary>
        /// Important: call this function to load the file stream. 
        /// </summary>
        public extern Task Load();
        public extern override bool CanRead { get; }

        public extern override bool CanSeek { get; }

        public extern override bool CanWrite { get; }
        
        public extern override long Length { get; }

        public extern override long Position { get; set; }

        public extern override void Flush();

        public extern override int Read([Out] byte[] buffer, int offset, int count);

        public extern override long Seek(long offset, SeekOrigin origin);

        public extern override void SetLength(long value);

        public extern override void Write(byte[] buffer, int offset, int count);
    }
}
