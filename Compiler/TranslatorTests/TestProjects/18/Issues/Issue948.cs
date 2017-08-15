using Bridge;

namespace TestIssue948
{
    public class Issue948
    {
        public static void Test()
        {
            Script.Write("// A comment");

            Script.Write("/* global Bridge */");

            Script.Write("var a = 5;/* global Bridge */");

            Script.Write("var b = 6; /* global Bridge */");

            Script.Write("var c = 7; /* global Bridge */;");

            Script.Write("var d = 8;// A comment");

            Script.Write("var e = 9; // A comment");

            Script.Write("var f = 10; // A comment;");

        }
    }
}

