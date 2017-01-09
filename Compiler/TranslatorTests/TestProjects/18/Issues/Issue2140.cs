using Bridge;

//#2140
namespace TestIssue2140
{
    [Enum(Emit.Name)]
    public enum EnumName
    {
        Value1 = 1
    }

    [Enum(Emit.Value)]
    public enum EnumValue
    {
        Value1 = 1
    }

    class Bridge2140
    {
        public static void Test()
        {
            // #2140 Enum value (number) is emitted for '[Enum(Emit.Name)]' attribute

            // Should be Value1
            var a1 = EnumName.Value1;
            int a2 = (int)EnumName.Value1;

            // Should be number
            var b1 = EnumValue.Value1;
            int b2 = (int)EnumValue.Value1;
        }
    }
}
