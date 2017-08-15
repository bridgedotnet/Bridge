using System.Collections.Generic;
using System.Linq;

//#921
namespace TestIssue921Static
{

    public class Issue921Static
    {
        private static readonly int _offset;

        public static string Name { get; set; }

        static Issue921Static()
        {
            _offset = 10;
        }

        private static decimal ComputeValue(decimal d)
        {
            return d + 10;
        }

        private delegate int ComputeSomething(int i);
        private delegate string StringifySomething(int i);

        public static IEnumerable<int> LambaLiftingWithReadOnlyField()
        {
            var localValue = 456;
            return
                new[] { 1, 2, 3 }
                // Simple lift (single-variable)
                .Select(value => value + 1)
                // Simple lift (single-variable) - repeat
                .Select(value => value + 1)
                // Simple lift (two-variable)
                .Select((value, index) => value + index)
                // Lift and bind (single-variable)
                .Select(value => value + _offset)
                // Lift and bind (two-variable)
                .Select((value, index) => value + index + _offset)
                // Non-lift
                .Select(value => value + localValue);
        }

        public static IEnumerable<string> LambaLiftingWithProperty()
        {
            var localValue = "What a name";

            return
                new[] { "one", "two", "three" }
                // Simple lift (single-variable)
                .Select(value => value + 1)
                // Simple lift (single-variable) - repeat
                .Select(value => value + 1)
                // Simple lift (two-variable)
                .Select((value, index) => value + index)
                // Lift and bind (single-variable)
                .Select(value => value + Name)
                // Lift and bind (two-variable)
                .Select((value, index) => value + index + Name)
                // Non-lift
                .Select(value => value + localValue);
        }

        public static IEnumerable<decimal> LambaLiftingWithInstanceMethod()
        {
            var localValue = 10m;

            return
                new[] { 1m, 2m, 3m }
                // Simple lift (single-variable)
                .Select(value => value + 1)
                // Simple lift (single-variable) - repeat
                .Select(value => value + 1)
                // Simple lift (two-variable)
                .Select((value, index) => value + ComputeValue((decimal)index))
                // Lift and bind (single-variable)
                .Select(value => value + ComputeValue(100m))
                // Lift and bind (two-variable)
                .Select((value, index) => value + index + ComputeValue(200m))
                // Non-lift
                .Select(value => value + localValue);
        }

        public static IEnumerable<int> LambaLiftingWithDelegate()
        {
            // Lift
            ComputeSomething addThousand = (i) => i + 1000;

            var localValue = 123;

            return
                new[] { 1, 2, 3 }
                // Non-lift
                .Select(value => addThousand(value + 1))
                // Non-lift
                .Select(value => addThousand(value + 1))
                // Non-lift
                .Select((value, index) => addThousand(value + index))
                // Non-lift
                .Select(value => addThousand(value) + _offset)
                // Non-lift
                .Select((value, index) => addThousand(value) + index + _offset)
                // Non-lift
                .Select(value => addThousand(value + addThousand(localValue)));
        }

        public static IEnumerable<string> LambaLiftingWithDelegateChangingType()
        {
            // Lift
            StringifySomething toString = (i) => i.ToString();

            var localValue = 7;

            return
                new[] { 1, 2, 3 }
                // Non-lift
                .Select(value => toString(value + 1))
                // Non-lift
                .Select(value => toString(value.Length))
                // Non-lift
                .Select((value, index) => toString(value.Length + index))
                // Non-lift
                .Select(value => toString(value.Length) + _offset)
                // Non-lift
                .Select((value, index) => toString(value.Length) + index + _offset)
                // Non-lift
                .Select(value => toString(value.Length + toString(localValue).Length));
        }
    }
}
