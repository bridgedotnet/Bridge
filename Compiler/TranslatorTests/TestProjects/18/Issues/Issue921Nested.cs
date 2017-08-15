using System;
using System.Collections.Generic;
using System.Linq;

//#921
namespace TestIssue921Nested
{
    public class Issue921NestedOuter
    {
        public class Issue921Nested
        {
            public readonly int _offset;

            public string Name { get; set; }

            public static string NameStatic { get; set; }
            public static int IntStatic { get; set; }

            public Issue921Nested(int offset)
            {
                _offset = offset;
                NameStatic = "Static";
            }

            public decimal ComputeValue(decimal d)
            {
                return d + 10;
            }

            public Func<int, int> ComputeNumber = (i) => 2 * i + IntStatic;
            public Func<int, int, int> ComputeTwoNumbers = (i, j) => i + j + IntStatic;
            public Action<int, int, int> DoWithNumbers = (i, j, k) => { var x = i + j + k + IntStatic; };

            public static Func<int, int> ComputeNumberStatic = (i) => 3 * i + IntStatic;

            private delegate int ComputeSomething(int i);
            private delegate string StringifySomething(int i);

            public IEnumerable<int> LambaLiftingWithReadOnlyField()
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

            public IEnumerable<string> LambaLiftingWithProperty()
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

            public IEnumerable<string> LambaLiftingWithStaticProperty()
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
                    .Select((value, index) => value + index + NameStatic)
                    // Non-lift
                    .Select(value => value + localValue);
            }

            public IEnumerable<decimal> LambaLiftingWithInstanceMethod()
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

            public IEnumerable<int> LambaLiftingWithDelegate()
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

            public IEnumerable<string> LambaLiftingWithDelegateChangingType()
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

        public void UseAField1()
        {
            var n = new Issue921Nested(100);

            var t = n.Name.Select(x => x);
        }

        public void UseAField2()
        {
            var n = new Issue921Nested(200);

            var t = n.Name.Select(x => x);
        }

        public void UseNestedFunOneInt()
        {
            var n = new Issue921Nested(300);

            new[] { 1, 2, 3 }.Select(x => n.ComputeNumber(x));
        }

        public void UseNestedFuncTwoInts()
        {
            var n = new Issue921Nested(400);

            new[] { 1, 2, 3 }.Select((x, i) => n.ComputeTwoNumbers(x, i));
        }

        public void UseNestedActionTwoInts()
        {
            var n = new Issue921Nested(400);

            foreach (var item in new[] { 1, 2, 3 })
            {
                n.DoWithNumbers(item, item, item);
            }
        }

        public void UseNestedFunOneIntStatic()
        {
            var n = new Issue921Nested(500);

            new[] { 1, 2, 3 }.Select(x => Issue921Nested.ComputeNumberStatic(x));
        }
    }
}
