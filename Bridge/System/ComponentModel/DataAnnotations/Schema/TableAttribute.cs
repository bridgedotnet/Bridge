using Bridge;

namespace System.ComponentModel.DataAnnotations.Schema
{
    /// <summary>
    /// Specifies the database table that a class is mapped to.
    /// </summary>
    [AttributeUsage(AttributeTargets.Class, AllowMultiple = false)]
    [External]
    [NonScriptable]
    public class TableAttribute : Attribute
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TableAttribute" /> class.
        /// </summary>
        /// <param name="name">The name of the table the class is mapped to.</param>
        public extern TableAttribute(string name);

        /// <summary>
        /// The name of the table the class is mapped to.
        /// </summary>
        public extern string Name { get; }

        /// <summary>
        /// The schema of the table the class is mapped to.
        /// </summary>
        public extern string Schema { get; set; }
    }
}
