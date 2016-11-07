namespace TypeScript.Issues
{
    public class N2030Attribute : System.Attribute
    {
        private bool _isUnspecified;

        public N2030Attribute(bool IsUnspecified)
        {
            this._isUnspecified = IsUnspecified;
        }

        public bool IsUnspecified
        {
            get
            {
                return _isUnspecified;
            }
        }
    }
}