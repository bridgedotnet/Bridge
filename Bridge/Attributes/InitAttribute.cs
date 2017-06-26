using System;

namespace Bridge
{
    [External]
    [AttributeUsage(AttributeTargets.Method)]
    [NonScriptable]
    public class InitAttribute : Attribute
    {
        public extern InitAttribute();

        public extern InitAttribute(InitPosition position);
    }

    [External]
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