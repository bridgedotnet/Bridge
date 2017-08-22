// ==++==
//
//   Copyright (c) Microsoft Corporation.  All rights reserved.
//
// ==--==

namespace System
{
    // This enum is used to indentify DateTime instances in cases when they are known to be in local time,
    // UTC time or if this information has not been specified or is not applicable.

    [Serializable]
    //[System.Runtime.InteropServices.ComVisible(true)]
    public enum DateTimeKind
    {
        /// <summary>
        /// The time represented is not specified as either local time or Coordinated Universal Time (UTC).
        /// </summary>
        Unspecified = 0,

        /// <summary>
        /// The time represented is UTC.
        /// </summary>
        Utc = 1,

        /// <summary>
        /// The time represented is local time.
        /// </summary>
        Local = 2
    }
}