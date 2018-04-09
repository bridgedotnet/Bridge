namespace Interfaces
{
    //public struct Point
    //{
    //    public int X;
    //    public int Y;

    //    public Point(int x, int y)
    //    {
    //        this.X = x;
    //        this.Y = y;
    //    }
    //}

    public interface Interface1
    {
        int Property
        {
            get;
            set;
        }
    }

    public interface Interface2 : Interface1
    {
        void Method1();

        void Method2(string i);

        int Method3();

        bool Method4(Interface1 i);
    }

    public interface Interface3 : Interface2
    {
        Interface2 Method5(Interface3 i);
    }

    public interface Interface4
    {
        // #291
        void Method6(out bool b);

        void Method7(int i, out bool b);

        void Method8(ref string s);

        void Method9(int i, ref string s);

        void Method10(int i, ref bool b, ref string s);
    }

    public interface Interface6
    {
        int Property
        {
            get;
            set;
        }

        int GetProperty();

        void SetProperty(string s);

        void SetProperty(int i);
    }

    public interface Interface61
    {
        int Property
        {
            get;
            set;
        }
    }

    public interface Interface62
    {
        int GetProperty();

        void SetProperty(string s);

        void SetProperty(int i);
    }

    public class Class1 : Interface1
    {
        public int Field = 200;

        private int property = 100;

        public int Property
        {
            get
            {
                return this.property;
            }
            set
            {
                this.property = value;
            }
        }
    }

    public class Class2 : Class1, Interface2
    {
        public void Method1()
        {
            Field = 1;
            Property = 2;
        }

        public void Method2(string s)
        {
            Field = s.Length;
        }

        public int Method3()
        {
            return Field;
        }

        public bool Method4(Interface1 i)
        {
            Field = i.Property;

            return true;
        }
    }

    public class Class3 : Class2, Interface3
    {
        public Interface2 Method5(Interface3 i)
        {
            return i;
        }
    }

    public class Class4 : Interface4
    {
        public void Method6(out bool b)
        {
            b = true;
        }

        public void Method7(int i, out bool b)
        {
            b = true;
        }

        public void Method8(ref string s)
        {
            s = s + "Method8";
        }

        public void Method9(int i, ref string s)
        {
            s = s + i;
        }

        public void Method10(int i, ref bool b, ref string s)
        {
            b = true;
            s = s + i;
        }
    }

    public class Class6 : Interface6
    {
        public int Property
        {
            get;
            set;
        }

        public int MethodProperty
        {
            get;
            set;
        }

        public int GetProperty()
        {
            return this.MethodProperty;
        }

        public void SetProperty(string s)
        {
            this.MethodProperty = s.Length;
        }

        public void SetProperty(int i)
        {
            this.MethodProperty = i;
        }
    }

    // TODO Issue?
    // Cannot translate interface (interfaces.Interface61) member '[Property interfaces.Class63_1.Property]' in 'interfaces.Class63_1' due name conflicts. Please rename methods or refactor your code    at Bridge.Contract.OverloadsCollection.GetOverloadName(IMember definition) in c:\NET\Bridge\Builder\Contract\OverloadsCollection.cs:line 865

    //public class Class63_1 : Interface61, Interface62
    //{
    //    public int Property { get; set; }

    //    public int MethodProperty { get; set; }

    //    public int GetProperty()
    //    {
    //        return this.MethodProperty;
    //    }
    //    public void SetProperty(string s)
    //    {
    //        this.MethodProperty = s.Length;
    //    }
    //    public void SetProperty(int i)
    //    {
    //        this.MethodProperty = i;
    //    }
    //}
}
