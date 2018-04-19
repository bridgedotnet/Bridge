namespace System.ComponentModel.DataAnnotations
{
    /// <summary>
    /// Sets the display column, the sort column, and the sort order for when a table is used as a parent table in FK
    /// relationships.
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.Class, Inherited = true, AllowMultiple = false)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public class DisplayColumnAttribute : Attribute
    {
        public extern DisplayColumnAttribute(string displayColumn);

        public extern DisplayColumnAttribute(string displayColumn, string sortColumn);

        public extern DisplayColumnAttribute(string displayColumn, string sortColumn, bool sortDescending);

        public extern string DisplayColumn { get; }

        public extern string SortColumn { get; }

        public extern bool SortDescending { get; }
    }
}
