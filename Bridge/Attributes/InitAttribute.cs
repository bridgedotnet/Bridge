using System;

namespace Bridge
{
    [NonScriptable]
    [AttributeUsage(AttributeTargets.Method)]
    public class InitAttribute : Attribute
    {
        public InitAttribute()
        {
        }

        public InitAttribute(InitPosition position)
        {
        }
    }

    [NonScriptable]
    public enum InitPosition
    {
        /// <summary>
        /// Emit this Method body immediately after this class defintion (default)
        /// </summary>
        After = 0,

        /// <summary>
        /// Emit this Method body Immediately before this class definition
        /// </summary>
        Before = 1,

        /// <summary>
        /// Emit the contents of this Method body directly to the Top of the file.
        /// </summary>
        Top = 2,

        /// <summary>
        /// Emit the contents of this Method body directly to the Bottom of the file.
        /// </summary>
        Bottom = 3
    }
}