namespace System
{
    public abstract class FormattableString : IFormattable
    {
        protected extern FormattableString();

        public abstract int ArgumentCount
        {
            get;
        }

        public abstract string Format
        {
            get;
        }

        public abstract object GetArgument(int index);

        public abstract object[] GetArguments();

        public override string ToString()
        {
            return this.ToString(Globalization.CultureInfo.CurrentCulture);
        }

        public abstract string ToString(IFormatProvider formatProvider);

        string IFormattable.ToString(string format, IFormatProvider formatProvider)
        {
            return this.ToString(formatProvider);
        }

        public static string Invariant(FormattableString formattable)
        {
            return formattable.ToString(Globalization.CultureInfo.InvariantCulture);
        }
    }

    internal class FormattableStringImpl : FormattableString
    {
        private object[] args;

        public override int ArgumentCount
        {
            get
            {
                return args.Length;
            }
        }

        private string format;

        public override string Format
        {
            get
            {
                return this.format;
            }
        }

        public FormattableStringImpl(string format, params object[] args)
        {
            this.format = format;
            this.args = args;
        }

        public override object GetArgument(int index)
        {
            return this.args[index];
        }

        public override object[] GetArguments()
        {
            return this.args;
        }

        public override string ToString(IFormatProvider formatProvider)
        {
            return string.Format(formatProvider, this.format, args);
        }
    }
}
