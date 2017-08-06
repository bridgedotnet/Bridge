// ==++==
//
//   Copyright (c) Microsoft Corporation.  All rights reserved.
//
// ==--==
/*============================================================
**
** Class: DayOfWeek
**
**
** Purpose: Enum for the day of the week.
**
**
============================================================*/

namespace System
{
    /// <summary>
    /// Specifies the day of the week.
    /// </summary>
    [Serializable]
    //[System.Runtime.InteropServices.ComVisible(true)]
    public enum DayOfWeek
    {
        /// <summary>
        /// Indicates Sunday.
        /// </summary>
        Sunday = 0,

        /// <summary>
        /// Indicates Monday.
        /// </summary>
        Monday = 1,

        /// <summary>
        /// Indicates Tuesday.
        /// </summary>
        Tuesday = 2,

        /// <summary>
        /// Indicates Wednesday.
        /// </summary>
        Wednesday = 3,

        /// <summary>
        /// Indicates Thursday.
        /// </summary>
        Thursday = 4,

        /// <summary>
        /// Indicates Friday.
        /// </summary>
        Friday = 5,

        /// <summary>
        /// Indicates Saturday.
        /// </summary>
        Saturday = 6
    }
}