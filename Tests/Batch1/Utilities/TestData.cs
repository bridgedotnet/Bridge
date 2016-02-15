using Bridge;
using System.Collections.Generic;

namespace Bridge.ClientTest.Utilities
{
    public class Person
    {
        public int ID
        {
            get;
            set;
        }

        public string Name
        {
            get;
            set;
        }

        public string City
        {
            get;
            set;
        }

        public int Count
        {
            get;
            set;
        }

        public string Group
        {
            get;
            set;
        }

        public static List<Person> GetPersons()
        {
            var persons = new List<Person>();

            persons.Add(new Person()
            {
                ID = 1,
                Name = "Frank",
                City = "Edmonton",
                Count = 300,
                Group = "A"
            });
            persons.Add(new Person()
            {
                ID = 2,
                Name = "Zeppa",
                City = "Tokyo",
                Count = 100,
                Group = "C"
            });
            persons.Add(new Person()
            {
                ID = 3,
                Name = "John",
                City = "Lisbon",
                Count = 700,
                Group = "B"
            });
            persons.Add(new Person()
            {
                ID = 4,
                Name = "Billy",
                City = "Paris",
                Count = 500,
                Group = "C"
            });
            persons.Add(new Person()
            {
                ID = 5,
                Name = "Dora",
                City = "Budapest",
                Count = 50,
                Group = "B"
            });
            persons.Add(new Person()
            {
                ID = 6,
                Name = "Ian",
                City = "Rome",
                Count = 550,
                Group = "B"
            });
            persons.Add(new Person()
            {
                ID = 7,
                Name = "Mary",
                City = "Dortmund",
                Count = 700,
                Group = "B"
            });
            persons.Add(new Person()
            {
                ID = 8,
                Name = "Nemo",
                City = "Ocean",
                Count = 3000,
                Group = null
            });

            return persons;
        }
    }
    public class Group
    {
        public string Name
        {
            get;
            set;
        }

        public int Limit
        {
            get;
            set;
        }

        public static List<Group> GetGroups()
        {
            var groups = new List<Group>();
            groups.Add(new Group()
            {
                Name = "A",
                Limit = 1000
            });
            groups.Add(new Group()
            {
                Name = "B",
                Limit = 400
            });
            groups.Add(new Group()
            {
                Name = "C",
                Limit = 800
            });
            groups.Add(new Group()
            {
                Name = "D",
                Limit = 200
            });

            return groups;
        }
    }
}
