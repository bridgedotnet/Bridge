using Bridge;

//#2141
namespace TestIssue2141
{
    [External]
    [ObjectLiteral]
    public class Config1
    {
        public string Id
        {
            get; set;
        }
    }

    [Name("Options1")]
    [External]
    [ObjectLiteral]
    public class Config1Name
    {
        public string Id
        {
            get; set;
        }
    }

    [ObjectLiteral]
    public class Config2
    {
        public string Id
        {
            get; set;
        }
    }

    [Name("Options2")]
    [ObjectLiteral]
    public class Config2Name
    {
        public string Id
        {
            get; set;
        }
    }

    [ObjectLiteral(ObjectCreateMode.Constructor)]
    public class Config3
    {
        public string Id
        {
            get; set;
        }
    }

    [Name("Options3")]
    [ObjectLiteral(ObjectCreateMode.Constructor)]
    public class Config3Name
    {
        public string Id
        {
            get; set;
        }
    }

    [External]
    [ObjectLiteral(ObjectCreateMode.Constructor)]
    public class Config4
    {
        public string Id
        {
            get; set;
        }
    }

    [Name("Options4")]
    [External]
    [ObjectLiteral(ObjectCreateMode.Constructor)]
    public class Config4Name
    {
        public string Id
        {
            get; set;
        }
    }

    class Bridge2141
    {
        public static void Test()
        {
            // #2141 Skip writing type information to [External] [ObjectLiteral]

            // These below should NOT contain Bridge.literal call
            var c1 = new Config1() { Id = "1" };
            // These below should NOT contain Bridge.literal call as [Name] used
            // { id: "1Name" }
            var c1Name = new Config1Name() { Id = "1Name" };

            // These below should NOT contain Bridge.literal call
            // ({ id: "..." });
            var c2 = new Config2() { Id = "2" };
            var c2Name = new Config2Name() { Id = "2Name" };

            // These below should NOT contain Bridge.literal call
            // Bridge.merge(.ctor(), { id: "..." });
            var c3 = new Config3() { Id = "3" };
            var c3Name = new Config3Name() { Id = "3Name" };

            // These below should NOT contain Bridge.literal call
            // Bridge.merge(Config4(), { id: "4" });
            var c4 = new Config4() { Id = "4" };
            // Bridge.merge(Options4(), { id: "4Name" });
            var c4Name = new Config4Name() { Id = "4Name" };
        }
    }
}
