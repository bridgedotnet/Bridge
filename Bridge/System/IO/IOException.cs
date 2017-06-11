using Bridge;
using System;
using System.Runtime.InteropServices;
//using System.Runtime.Serialization;

namespace System.IO
{
    
    [ComVisible(true)]
    [Serializable]
    [FileName("io.js")]
    public class IOException : Exception
    {
        //[NonSerialized]
        private string _maybeFullPath;

        
        public IOException()/* : base(/*Environment.GetResourceString("Arg_IOException")*//*)*/
        {
            //base.SetErrorCode(-2146232800);
        }

        
        public IOException(string message)/* : base(message)*/
        {
            //base.SetErrorCode(-2146232800);
        }

        
        public IOException(string message, int hresult) : base(message)
        {
            //base.SetErrorCode(hresult);
        }

        internal IOException(string message, int hresult, string maybeFullPath) : base(message)
        {
            //base.SetErrorCode(hresult);
            this._maybeFullPath = maybeFullPath;
        }

        
        public IOException(string message, Exception innerException) : base(message, innerException)
        {
            //base.SetErrorCode(-2146232800);
        }

        //protected IOException(SerializationInfo info, StreamingContext context) : base(info, context)
        //{
        //}
    }
}