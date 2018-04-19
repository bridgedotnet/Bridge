namespace Classes
{
    public struct Point
    {
        public int X;
        public int Y;

        public Point(int x, int y)
        {
            this.X = x;
            this.Y = y;
        }
    }

    public static class StaticClass
    {
        public static Point Move(Point p, int dx, int dy)
        {
            return new Point(p.X + dx, p.Y + dy);
        }
    }

    public class MovePoint
    {
        public Point Point
        {
            get;
            set;
        }

        public void Move(int dx, int dy)
        {
            this.Point = MovePoint.Move(this.Point, dx, dy);
        }

        private static Point Move(Point p, int dx, int dy)
        {
            return StaticClass.Move(p, dx, dy);
        }
    }

    public class Animal
    {
        private string Name;

        public Animal()
        {
            this.Name = "Animal";
        }

        public Animal(string name)
        {
            this.Name = name;
        }

        public string GetName()
        {
            return this.Name;
        }

        public virtual int Move()
        {
            return 1;
        }
    }

    public class Snake : Animal
    {
        public Snake(string name)
            : base(name)
        {
        }

        public override int Move()
        {
            return 5;
        }
    }

    public class Dog : Animal
    {
        public Dog(string name)
            : base(name)
        {
        }

        public new int Move()
        {
            return 20;
        }
    }

    public class Employee : Animal
    {
        private string Name;
        private int Id;

        public Employee(string name, int id)
            : base(name)
        {
            this.Name = name;
            this.Id = id;
        }
    }
}
