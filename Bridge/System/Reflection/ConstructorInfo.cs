namespace System.Reflection
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Unbox(true)]
    public abstract partial class ConstructorInfo : MethodBase
    {
        [Bridge.Template("Bridge.Reflection.invokeCI({this}, {arguments:array})")]
        public extern object Invoke(params object[] arguments);

        /// <summary>
        /// Script name of the constructor. Null for the unnamed constructor and for constructors with special implementations
        /// </summary>
        [Bridge.Name("sn")]
        public extern string ScriptName
        {
            get;
            private set;
        }

        /// <summary>
        /// True if the constructor is a normal method that returns the created instance and should be invoked without the 'new' operator
        /// </summary>
        public extern bool IsStaticMethod
        {
            [Bridge.Template("({this}.sm || false)")]
            get;
            [Bridge.Template("{this}.sm = {value}")]
            private set;
        }

        /// <summary>
        /// For constructors with a special implementation (eg. [Bridge.Template]), contains a delegate that can be invoked to create an instance.
        /// </summary>
        [Bridge.Name("def")]
        public extern Delegate SpecialImplementation
        {
            get;
            private set;
        }

        /// <summary>
        /// Whether the [ExpandParams] attribute was specified on the constructor.
        /// </summary>
        public extern bool IsExpandParams {[Bridge.Template("{this}.exp || false")] get;[Bridge.Template("{this}.exp = {value}")] private set; }

        internal extern ConstructorInfo();
    }
}