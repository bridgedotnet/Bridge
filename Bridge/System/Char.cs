using Bridge;

namespace System 
{
    [Ignore]
    [Name("Bridge.Int")]
    public struct Char : IComparable, IComparable<Char>, IEquatable<Char>, IFormattable 
    {
		private Char(int i) 
        {
		}

        [InlineConst]
		public const char MinValue = '\0';

        [InlineConst]
		public const char MaxValue = '\xFFFF';

        [Template("Bridge.Int.format({this}, {format})")]
		public string Format(string format) 
        {
			return null;
		}

        [Template("Bridge.Int.format({this}, {format}, {provider})")]
        public string Format(string format, IFormatProvider provider)
        {
            return null;
        }

		[Template("{s}.charCodeAt(0)")]
		public static char Parse(string s) 
        {
			return '\0';
		}       

		[Template("String.fromCharCode({this})")]
		public override string ToString() 
        {
			return null;
		}

        [Template("Bridge.Int.format({this}, {format})")]
		public string ToString(string format) 
        {
			return null;
		}

        [Template("Bridge.Int.format({this}, {format}, {provider})")]
        public string ToString(string format, IFormatProvider provider)
        {
            return null;
        }
        
		[Template("Bridge.compare({this}, {other})")]
		public int CompareTo(char other) 
        {
			return 0;
		}

        [Template("Bridge.compare({this}, {obj})")]
        public int CompareTo(object obj)
        {
            return 0;
        }

        [Template("Bridge.equalsT({this}, {other})")]
		public bool Equals(char other) 
        {
			return false;
		}

        [Template("Bridge.isLower({ch})")]
		public static bool IsLower(char ch) 
        {
			return false;
		}

        [Template("Bridge.isUpper({ch})")]
		public static bool IsUpper(char ch) 
        {
			return false;
		}

        [Template("String.fromCharCode({ch}).toLowerCase().charCodeAt(0)")]
		public static char ToLower(char ch) 
        {
			return (char)0;
		}

        [Template("String.fromCharCode({ch}).toUpperCase().charCodeAt(0)")]
		public static char ToUpper(char ch) 
        {
			return (char)0;
		}

        [Template("String.isDigit({ch})")]
		public static bool IsDigit(char ch) 
        {
			return false;
		}

        [Template("String.isDigit({ch}).charAt({index})")]
        public static bool IsDigit(char ch, int index)
        {
            return false;
        }

        [Template("/\\s/.test(String.fromCharCode({ch}))")]
		public static bool IsWhiteSpace(char ch) 
        {
			return false;
		}
	}
}
