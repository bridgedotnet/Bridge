using Bridge;

//#1035
namespace TestIssue2141
{
    [External]
    [ObjectLiteral]
    public class ConfigExternal
    {
        public int Id
        {
            get; set;
        }

        public string Name
        {
            get; set;
        }
    }

    [ObjectLiteral]
    public class ConfigPlain
    {
        public int Id
        {
            get; set;
        }

        public string Name
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
            var config1 = new ConfigExternal
            {
                Name = "external1"
            };

            var config2 = new ConfigExternal
            {
                Id = 2,
                Name = "external2"
            };

            // These below should contain Bridge.literal call
            var config3 = new ConfigPlain
            {
                Name = "plain3"
            };

            var config4 = new ConfigPlain
            {
                Id = 4,
                Name = "plain4"
            };
        }
    }
}
