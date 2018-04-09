namespace Generics
{
    // TODO Check reserved words
    public class SimpleGeneric<T>
    {
        public T GetSomething(T input)
        {
            return input;
        }

        public T Instance;

        public SimpleGeneric(T instance)
        {
            this.Instance = instance;
        }
    }

    public class SimpleDoubleGeneric<T, K>
    {
        public T GetSomething(T input)
        {
            return input;
        }

        public K GetSomethingMore(K input)
        {
            return input;
        }

        public T InstanceT;
        public K InstanceK;

        public SimpleDoubleGeneric()
        {
        }

        public SimpleDoubleGeneric(T instanceT, K instanceK)
        {
            this.InstanceT = instanceT;
            this.InstanceK = instanceK;
        }
    }

    public class INamedEntity
    {
        private string Name
        {
            get;
            set;
        }
    }

    public class NamedEntity : INamedEntity
    {
        public string Name
        {
            get;
            set;
        }
    }

    public class GenericINamedEntity<T> where T : INamedEntity
    {
        public T GetSomething(T input)
        {
            return input;
        }

        public T Instance;

        public GenericINamedEntity(T instance)
        {
            this.Instance = instance;
        }
    }

    public class GenericNamedEntity<T> where T : NamedEntity
    {
        public T GetSomething(T input)
        {
            return input;
        }

        public T Instance;

        public GenericNamedEntity(T instance)
        {
            this.Instance = instance;
        }
    }

    public class GenericClass<T> where T : class
    {
        public T GetSomething(T input)
        {
            return input;
        }

        public T Instance;

        public GenericClass(T instance)
        {
            this.Instance = instance;
        }
    }

    public class GenericStruct<T> where T : struct
    {
        public T GetSomething(T input)
        {
            return input;
        }

        public T Instance;

        public GenericStruct(T instance)
        {
            this.Instance = instance;
        }
    }

    public class GenericNew<T> where T : new()
    {
        public T GetSomething(T input)
        {
            return input;
        }

        public T Instance;

        public GenericNew(T instance)
        {
            this.Instance = instance;
        }
    }

    public class GenericNewAndClass<T> where T : class, new()
    {
        public T GetSomething(T input)
        {
            return input;
        }

        public T Instance;

        public GenericNewAndClass(T instance)
        {
            this.Instance = instance;
        }
    }

    public class NewClass
    {
        public int Data;

        public NewClass()
        {
            this.Data = 30;
        }
    }

    public class implementation
    {
        public static SimpleGeneric<int> SimpleGenericInt = new SimpleGeneric<int>(1);
        public static SimpleDoubleGeneric<int, string> SimpleDoubleGenericIntString = new SimpleDoubleGeneric<int, string>();
        public static GenericINamedEntity<INamedEntity> GenericINamedEntity = new GenericINamedEntity<INamedEntity>(new NamedEntity());
        public static GenericNamedEntity<NamedEntity> GenericNamedEntity = new GenericNamedEntity<NamedEntity>(new NamedEntity());
        public static GenericClass<object> GenericClassObject = new GenericClass<object>(2);
        public static GenericClass<NamedEntity> GenericClassNamedEntity = new GenericClass<NamedEntity>(new NamedEntity());
        public static GenericNew<NewClass> GenericNew = new GenericNew<NewClass>(new NewClass());
        public static GenericNewAndClass<NewClass> GenericNewAndClass = new GenericNewAndClass<NewClass>(new NewClass());
    }
}
