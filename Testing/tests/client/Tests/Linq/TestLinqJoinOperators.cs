using Bridge.QUnit;
using ClientTestLibrary.Utilities;
using System.Linq;

namespace ClientTestLibrary.Linq
{
    class TestLinqJoinOperators
    {
        public static void Test(Assert assert)
        {
            assert.Expect(5);

            // TEST
            var persons =
                   (from p in Person.GetPersons()
                    join g in Group.GetGroups() on p.Group equals g.Name
                    select new { Name = p.Name, Limit = g.Limit }).ToArray();

            var personsExpected = new object[] {
                 new { Name = "Frank", Limit = 1000},
                 new { Name = "Zeppa", Limit = 800},
                 new { Name = "John", Limit = 400},
                 new { Name = "Billy", Limit = 800},
                 new { Name = "Dora", Limit = 400},
                 new { Name = "Ian", Limit = 400},
                 new { Name = "Mary", Limit = 400}
                 };

            assert.DeepEqual(persons, personsExpected, "Join Persons and Groups");

            // TEST
            var personsByLambda = Person.GetPersons()
                                    .Join(Group.GetGroups(),
                                          p => p.Group,
                                          g => g.Name,
                                          (p, g) => new { Name = p.Name, Limit = g.Limit })
                                    .ToArray();

            var personsByLambdaExpected = new object[] {
                 new { Name = "Frank", Limit = 1000},
                 new { Name = "Zeppa", Limit = 800},
                 new { Name = "John", Limit = 400},
                 new { Name = "Billy", Limit = 800},
                 new { Name = "Dora", Limit = 400},
                 new { Name = "Ian", Limit = 400},
                 new { Name = "Mary", Limit = 400}
            };

            assert.DeepEqual(personsByLambda, personsByLambdaExpected, "Join Persons and Groups by lambda");

            // TEST
            var groupJoin = (from g in Group.GetGroups()
                             join p in Person.GetPersons() on g.Name equals p.Group into pg
                             select new { Group = g.Name, Persons = pg.Select(x => x.Name).ToArray() })
                             .ToArray();

            var groupJoinExpected = new object[] {
                new { Group = "A", Persons = new [] {"Frank"} },
                new { Group = "B", Persons = new [] {"John", "Dora", "Ian", "Mary"} },
                new { Group = "C", Persons = new [] {"Zeppa", "Billy"} },
                new { Group = "D", Persons = new string [] {} }
            };

            assert.DeepEqual(groupJoin, groupJoinExpected, "Grouped join Persons and Groups");

            // TEST
            var groupJoinWithDefault =
                            (from g in Group.GetGroups()
                             join p in Person.GetPersons() on g.Name equals p.Group into pg
                             from ep in pg.DefaultIfEmpty() // DefaultIfEmpty preserves left-hand elements that have no matches on the right side
                             select new
                             {
                                 GroupName = g.Name,
                                 PersonName = ep != null ? ep.Name : string.Empty,
                             }
                            ).ToArray();

            var groupJoinWithDefaultExpected = new object[] {
                new { GroupName = "A", PersonName = "Frank" },
                new { GroupName = "B", PersonName = "John" },
                new { GroupName = "B", PersonName = "Dora" },
                new { GroupName = "B", PersonName = "Ian" },
                new { GroupName = "B", PersonName = "Mary" },
                new { GroupName = "C", PersonName = "Zeppa" },
                new { GroupName = "C", PersonName = "Billy" },
                new { GroupName = "D", PersonName = string.Empty }
            };

            assert.DeepEqual(groupJoinWithDefault, groupJoinWithDefaultExpected, "Grouped join Persons and Groups with DefaultIfEmpty");

            // TEST
            var groupJoinWithDefaultAndComplexEquals =
                           (from g in Group.GetGroups()
                            join p in Person.GetPersons() on new { Name = g.Name, Digit = 1 } equals new { Name = p.Group, Digit = 1 } into pg
                            from ep in pg.DefaultIfEmpty() // DefaultIfEmpty preserves left-hand elements that have no matches on the right side
                            orderby ep != null ? ep.Name : null descending
                            select new
                            {
                                GroupName = g != null ? g.Name : null,
                                PersonName = ep != null ? ep.Name : null,
                            }
                           ).ToArray();

            var groupJoinWithDefaultAndComplexEqualsExpected = new object[] {
                new { GroupName = "C", PersonName = "Zeppa" },
                new { GroupName = "B", PersonName = "Mary" },
                new { GroupName = "B", PersonName = "John" },
                new { GroupName = "B", PersonName = "Ian" },
                new { GroupName = "A", PersonName = "Frank" },
                new { GroupName = "B", PersonName = "Dora" },
                new { GroupName = "C", PersonName = "Billy" },
                new { GroupName = "D", PersonName = (string)null }
            };

            assert.DeepEqual(groupJoinWithDefaultAndComplexEquals, groupJoinWithDefaultAndComplexEqualsExpected, "Issue #209. Grouped join Persons and Groups with DefaultIfEmpty, complex equals and ordering");
        }
    }
}
