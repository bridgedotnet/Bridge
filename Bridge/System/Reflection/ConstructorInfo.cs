using Bridge;

namespace System.Reflection
{
    [External]
    public class ConstructorInfo : MethodBase
    {
        [Template("Bridge.Reflection.invokeCI({this}, {arguments:array})")]
        public extern object Invoke(params object[] arguments);

        /// <summary>
        /// Script name of the constructor. Null for the unnamed constructor and for constructors with special implementations
        /// </summary>
        [Name("sn")]
        [FieldProperty]
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
            [Template("({this}.sm || false)")]
            get;
            [Template("{this}.sm = {value}")]
            private set;
        }

        /// <summary>
        /// For constructors with a special implementation (eg. [Template]), contains a delegate that can be invoked to create an instance.
        /// </summary>
        [Name("def")]
        [FieldProperty]
        public extern Delegate SpecialImplementation
        {
            get;
            private set;
        }

        /// <summary>
		/// Whether the [ExpandParams] attribute was specified on the constructor.
		/// </summary>
		public extern bool IsExpandParams {[Template("{this}.exp || false")] get;[Template("{this}.exp = {value}")] private set; }

        internal extern ConstructorInfo();
    }
}