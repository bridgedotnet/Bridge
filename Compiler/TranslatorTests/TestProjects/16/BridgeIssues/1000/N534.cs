namespace Test.BridgeIssues.N534
{
    public class Bridge534
    {
        internal const int IntValue1 = 1;
        internal const int IntValue2 = IntValue1 + 1;

        internal const string StringValue1 = "3";
        internal const string StringValue2 = StringValue1 + "4";

        internal const decimal DecimalValue1 = 5m;
        internal const decimal DecimalValue2 = DecimalValue1 + 6m;

    }
}
