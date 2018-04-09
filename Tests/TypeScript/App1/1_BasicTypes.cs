namespace BasicTypes
{
    public enum Color
    {
        Red,
        Green,
        Blue
    };

    public class BasicTypes
    {
        public bool BoolValue = true;
        public int IntegerValue = -1000;
        public float FloatValue = (float)2.3;
        public string StringValue = "Some string value";
        public int[] IntegerArray = new int[] { 1, 2, 3 };
        public string[] StringArray = new string[] { "1", "2", "3" };
        public Color[] ColorArray = new Color[] { Color.Blue, Color.Green, Color.Red };

        public int[][] TwoDimensionalArray = new int[][]
        {
            new int[] { 1, 2, 3 },
            new int[] { 5, 8 }
        };

        // TODO
        // list of int[]
        public Color ColorValue = Color.Green;

        public object AnyValueString = "AnyValueString";
        public object AnyValueInteger = 1;
        public dynamic DynamicValueInteger = 7;

        public object UndefinedValue = Bridge.Script.Undefined;

        public void VoidFunction()
        {
        }
    }

    public class Keywords
    {
        public string Break = "break";
        public string Case = "case";
        public string Catch = "catch";
        public string Class = "class";
        public string Const = "const";
        public string Continue = "continue";
        public string Debugger = "debugger";
        public string Default = "default";
        public string Delete = "delete";
        public string Do = "do";
        public string Else = "else";
        public string Enum = "enum";
        public string Export = "export";
        public string Extends = "extends";
        public string False = "false";
        public string Finally = "finally";
        public string For = "for";
        public string Function = "function";
        public string If = "if";
        public string Import = "import";
        public string In = "in";
        public string Instanceof = "instanceof";
        public string New = "new";
        public string Null = "null";
        public string Return = "return";
        public string Super = "super";
        public string Switch = "switch";
        public string This = "this";
        public string Throw = "throw";
        public string True = "true";
        public string Try = "try";
        public string Typeof = "typeof";
        public string Var = "var";
        public string Void = "void";
        public string While = "while";
        public string With = "with";
        public string As = "as";
        public string Implements = "implements";
        public string Interface = "interface";
        public string Let = "let";
        public string Package = "package";
        public string Private = "private";
        public string Protected = "protected";
        public string Public = "public";
        public string Static = "static";
        public string Yield = "yield";
        public string Any = "any";
        public string Boolean = "boolean";
        public string constructor = "constructor";
        public new string Constructor = "new constructor";
        public string Declare = "declare";
        public string Get = "get";
        public string Module = "module";
        public string Require = "require";
        public string Number = "number";
        public string Set = "set";
        public string String = "string";
        public string Symbol = "symbol";
        public string Type = "type";
        public string From = "from";
        public string Of = "of";
    }
}
