using Bridge;

namespace TestIssue379
{
    [ObjectLiteral(ObjectInitializationMode.Ignore, ObjectCreateMode.Constructor)]
    public class DataIgnore
    {
        public DataIgnore()
        {
        }

        public DataIgnore(ObjectInitializationMode mode)
        {

        }

        public int Int1;
        public int Int2 = 2;
        public string Str3;
        public string Str4 = "Str4";
        public int? IntNull5;
        public int? IntNull6 = 6;
        public decimal Decimal7;
        public decimal Decimal8 = 8;
    }


    [ObjectLiteral(ObjectInitializationMode.DefaultValue, ObjectCreateMode.Constructor)]
    public class DataDefaultValue
    {
        public DataDefaultValue()
        {
        }

        public DataDefaultValue(ObjectInitializationMode mode)
        {

        }

        public int Int1;
        public int Int2 = 2;
        public string Str3;
        public string Str4 = "Str4";
        public int? IntNull5;
        public int? IntNull6 = 6;
        public decimal Decimal7;
        public decimal Decimal8 = 8;
    }

    [ObjectLiteral(ObjectInitializationMode.Initializer, ObjectCreateMode.Constructor)]
    public class DataInitializer
    {
        public DataInitializer()
        {
        }

        public DataInitializer(ObjectInitializationMode mode)
        {

        }

        public int Int1;
        public int Int2 = 2;
        public string Str3;
        public string Str4 = "Str4";
        public int? IntNull5;
        public int? IntNull6 = 6;
        public decimal Decimal7;
        public decimal Decimal8 = 8;
    }


    public class Tests
    {
        public void TestDataIgnore()
        {
            var d1 = new DataIgnore();
            var d2 = new DataIgnore() { Int1 = 1, Int2 = 22, Str3 = "3", Str4 = "Str44", IntNull5 = 5, IntNull6 = 66, Decimal7 = 7, Decimal8 = 88};

            var d3 = new DataIgnore(ObjectInitializationMode.Ignore);
            var d4 = new DataIgnore(ObjectInitializationMode.Ignore) { Int1 = 1, Int2 = 22, Str3 = "3", Str4 = "Str44", IntNull5 = 5, IntNull6 = 66, Decimal7 = 7, Decimal8 = 88 };

            var d5 = new DataIgnore(ObjectInitializationMode.DefaultValue);
            var d6 = new DataIgnore(ObjectInitializationMode.DefaultValue) { Int1 = 1, Int2 = 22, Str3 = "3", Str4 = "Str44", IntNull5 = 5, IntNull6 = 66, Decimal7 = 7, Decimal8 = 88 };

            var d7 = new DataIgnore(ObjectInitializationMode.Initializer);
            var d8 = new DataIgnore(ObjectInitializationMode.Initializer) { Int1 = 1, Int2 = 22, Str3 = "3", Str4 = "Str44", IntNull5 = 5, IntNull6 = 66, Decimal7 = 7, Decimal8 = 88 };
        }

        public void TestDataDefaultValue()
        {
            var d1 = new DataDefaultValue();
            var d2 = new DataDefaultValue() { Int1 = 1, Int2 = 22, Str3 = "3", Str4 = "Str44", IntNull5 = 5, IntNull6 = 66, Decimal7 = 7, Decimal8 = 88 };

            var d3 = new DataDefaultValue(ObjectInitializationMode.Ignore);
            var d4 = new DataDefaultValue(ObjectInitializationMode.Ignore) { Int1 = 1, Int2 = 22, Str3 = "3", Str4 = "Str44", IntNull5 = 5, IntNull6 = 66, Decimal7 = 7, Decimal8 = 88 };

            var d5 = new DataDefaultValue(ObjectInitializationMode.DefaultValue);
            var d6 = new DataDefaultValue(ObjectInitializationMode.DefaultValue) { Int1 = 1, Int2 = 22, Str3 = "3", Str4 = "Str44", IntNull5 = 5, IntNull6 = 66, Decimal7 = 7, Decimal8 = 88 };

            var d7 = new DataDefaultValue(ObjectInitializationMode.Initializer);
            var d8 = new DataDefaultValue(ObjectInitializationMode.Initializer) { Int1 = 1, Int2 = 22, Str3 = "3", Str4 = "Str44", IntNull5 = 5, IntNull6 = 66, Decimal7 = 7, Decimal8 = 88 };
        }

        public void TestDataInitializer()
        {
            var d1 = new DataInitializer();
            var d2 = new DataInitializer() { Int1 = 1, Int2 = 22, Str3 = "3", Str4 = "Str44", IntNull5 = 5, IntNull6 = 66, Decimal7 = 7, Decimal8 = 88 };

            var d3 = new DataInitializer(ObjectInitializationMode.Ignore);
            var d4 = new DataInitializer(ObjectInitializationMode.Ignore) { Int1 = 1, Int2 = 22, Str3 = "3", Str4 = "Str44", IntNull5 = 5, IntNull6 = 66, Decimal7 = 7, Decimal8 = 88 };

            var d5 = new DataInitializer(ObjectInitializationMode.DefaultValue);
            var d6 = new DataInitializer(ObjectInitializationMode.DefaultValue) { Int1 = 1, Int2 = 22, Str3 = "3", Str4 = "Str44", IntNull5 = 5, IntNull6 = 66, Decimal7 = 7, Decimal8 = 88 };

            var d7 = new DataInitializer(ObjectInitializationMode.Initializer);
            var d8 = new DataInitializer(ObjectInitializationMode.Initializer) { Int1 = 1, Int2 = 22, Str3 = "3", Str4 = "Str44", IntNull5 = 5, IntNull6 = 66, Decimal7 = 7, Decimal8 = 88 };
        }
    }
}
