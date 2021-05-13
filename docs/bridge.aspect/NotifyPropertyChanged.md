# NotifyPropertyChanged Attribute

## NotifyPropertyChanged

```csharp Example ([Deck.NET](https://deck.net/af17727256ef60c2c76206837a6c6eac))
using System;
using System.ComponentModel;
using Bridge.Aspect;

namespace Demo
{
    public class App
    {
        public static void Main()
        {
            var person = new Person();

            person.PropertyChanged += Person_PropertyChanged;
            person.FirstName = "Frank";
            person.LastName = "Finch";
            
            person.FirstName = "Sally";
            person.LastName = "Summer";
        }

        private static void Person_PropertyChanged(object sender, PropertyChangedEventArgs e)
        {
            Console.WriteLine(e.PropertyName);
            Console.WriteLine(" - Old Value: " + e.OldValue);
            Console.WriteLine(" - New Value: " + e.NewValue);
        }
    }

    public class Person : Base
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
    
    [NotifyPropertyChanged(Inheritance = MulticastInheritance.All)]
    public class Base : INotifyPropertyChanged
    {
        public event PropertyChangedEventHandler PropertyChanged;

        protected virtual void OnPropertyChanged(string propertyName, object newValue, object oldValue)
        {
            PropertyChanged(this, new PropertyChangedEventArgs(propertyName, newValue, oldValue));
        }
    }
}
```

``` Output
FirstName
 - Old Value: 
 - New Value: Frank
LastName
 - Old Value: 
 - New Value: Finch
FirstName
 - Old Value: Frank
 - New Value: Sally
LastName
 - Old Value: Finch
 - New Value: Summer
```

## Automatically Implement INotifyPropertyChanged

This example demonstrates how to configure your class to implement the **INotifyPropertyChanged** interface.

```csharp Example ([Deck.NET](https://deck.net/3d3531b94d6ec391f50f2f4c58d9e306))
using System;
using System.ComponentModel;
using Bridge;
using Bridge.Aspect;

namespace Demo
{
    [NotifyPropertyChanged]
    public class Customer
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string FullName => $"{FirstName} {LastName}";
    }

    public class Program
    {
        public static void Main()
        {
            var customer = new Customer();
            customer.As<INotifyPropertyChanged>().PropertyChanged += Customer_PropertyChanged;
            customer.FirstName = "John";
            customer.LastName = "Doe";
        }

        private static void Customer_PropertyChanged(object sender, PropertyChangedEventArgs e)
        {
            Console.WriteLine("Changed: " + e.PropertyName);
        }
    }
}
```

``` Output
Changed: FirstName
Changed: LastName
```

This example has added the `[NotifyPropertyChanged]` attribute to one class. If you need to implement `[NotifyPropertyChanged]` on many different classes in your codebase, please use  aspect multicasting.

Since the **INotifyPropertyChanged** interface is implemented by **Bridge.Aspect** at run time, the interface will not be visible to Intellisense. The same is true for the **PropertyChanged** event.

There are two ways to access the **INotifyPropertyChanged** interface from your code:

- You can cast your object to **INotifyPropertyChanged**.

```csharp
((INotifyPropertyChanged) customer).PropertyChanged += Customer_OnPropertyChanged;
```

- You can use the `.As` extension method. The benefit of using this method is that the cast operation will not be translated to JavaScript. You must ensure that aspect is applied to the instance.

```csharp
customer.As<INotifyPropertyChanged>().PropertyChanged += Customer_PropertyChanged;
```

## Properties That Depend On Other Members

If a property depends on another property or field in the same class, then you can use the `[NotificationDependency]` attribute to instruct **Bridge.Aspect** to raise an event if one of the dependencies is changed.

```csharp Example ([Deck.NET](https://deck.net/78503d0d1851efb2f42dfe84033e7fa1))
using System;
using System.ComponentModel;
using Bridge;
using Bridge.Aspect;

namespace Demo
{
    [NotifyPropertyChanged]
    public class Customer
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        [NotificationDependency("FirstName")]
        [NotificationDependency("LastName")]
        public string FullName => $"{FirstName} {LastName}";
    }

    public class Program
    {
        public static void Main()
        {
            var customer = new Customer();
            customer.As<INotifyPropertyChanged>().PropertyChanged += Customer_PropertyChanged;
            customer.FirstName = "John";
            customer.LastName = "Doe";
        }

        private static void Customer_PropertyChanged(object sender, PropertyChangedEventArgs e)
        {
            Console.WriteLine("Changed: " + e.PropertyName);
        }
    }
}
```

``` Output
Changed: FirstName
Changed: LastName
Changed: FullName
```

Since the `FullName` property has a getter only, the aspect cannot track changes. Therefore it is required to define dependencies which affect this property. The `[NotificationDependency]` attribute accepts the name of the field or property. You can apply multiple dependencies to one member.

## Properties That Depend On Other Objects

It is very common for the properties of one class to be dependent on the properties of another class. By default, the aspect doesn’t track changes in properties of another class to narrow events from particular class, therefore it is required to configure *RaiseOnSubPropertiesChange* property in the aspect.

```csharp Example ([Deck.NET](https://deck.net/e2c1c9a9c93673402389bd9e85f089e6))
using System;
using System.ComponentModel;
using Bridge;
using Bridge.Aspect;

namespace Demo
{
    [NotifyPropertyChanged]
    public class Contacts
    {
        public string Phone  { get; set; }
        public string Mobile { get; set; }
        public string Email  { get; set; }
    }

    [NotifyPropertyChanged(RaiseOnSubPropertiesChange = true)]
    public class Customer
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public Contacts Contacts
        {
            get; set;
        }
    }

    public class Program
    {
        public static void Main()
        {
            var customer = new Customer();
            customer.As<INotifyPropertyChanged>().PropertyChanged += Customer_PropertyChanged;
            customer.Contacts = new Contacts();
            customer.Contacts.Phone = "+1 800 123456";
            customer.Contacts.Email = "john@doe.com";
        }

        private static void Customer_PropertyChanged(object sender, PropertyChangedEventArgs e)
        {
            Console.WriteLine("Changed: " + e.PropertyName);
        }
    }
}
```

``` Output
Changed: Contacts
Changed: Contacts.Phone
Changed: Contacts.Email
```

In this example, we set `RaiseOnSubPropertiesChange = true` for the **NotifyPropertyChanged** aspect of the **Customer** class. It instructs the aspect to track changes inside the **Contacts** instance. Please note that **Contacts** class must be also trackable by applying the **NotifyPropertyChanged** aspect to the class. The `PropertyName` of `PropertyChangedEventArgs` parameter will contain a dot to separate main and sub properties (such as, Contact.Phone)

If `Contacts` is updated by object initializer then such code is considered an atomic operation, only one message (`Changed: Contacts`) will be triggered. For example:

```csharp
customer.Contacts = new Contacts
{
    Phone = "+1 800 123456",
    Email = "john@doe.com"
};
```

## Implementing INotifyPropertyChanged

The **INotifyPropertyChanged** interface can be implemented if you want to manually handle an event inside your class.

```csharp Example ([Deck.NET](https://deck.net/40ff2d89c61d46ed8b00724ee74342e3))
using System;
using System.ComponentModel;
using Bridge;
using Bridge.Aspect;

namespace Demo
{
    [NotifyPropertyChanged]
    public class Customer: INotifyPropertyChanged
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public Customer()
        {
            this.PropertyChanged += Customer_PropertyChanged;
        }

        private void Customer_PropertyChanged(object sender, PropertyChangedEventArgs e)
        {
            Console.WriteLine("Changed: " + e.PropertyName);
        }

        public event PropertyChangedEventHandler PropertyChanged;
    }

    public class Program
    {
        public static void Main()
        {
            var customer = new Customer
            {
                FirstName = "John",
                LastName = "Doe"
            };
        }
    }
}
```

``` Output
Changed: FirstName
Changed: LastName
```

## Ignore Changes To Properties

Use the `[IgnoreAutoChangeNotification]` to prevent a **PropertyChanged** event from being invoked when setting a property.

```csharp Example ([Deck.NET](https://deck.net/99d9ba75cd1b21e92d74ec45f406648a))
[NotifyPropertyChanged]
public class Customer
{
    public string FirstName { get; set; }
    public string LastName { get; set; }

    [IgnoreAutoChangeNotification]
    public string Country { get; set; }
}
```

``` Output
Changed: FirstName
```

## Raise Event On Any Changes

By default, aspect compares values before and after setter invocation and raises an event only if values are different. You can change this behaviour using the property `RaiseOnChange = false`.

```csharp Example ([Deck.NET](https://deck.net/e31c2c80b062e5b953bfce1dca249bce))
using System;
using System.ComponentModel;
using Bridge;
using Bridge.Aspect;

namespace Demo
{
    [NotifyPropertyChanged]
    public class Customer: INotifyPropertyChanged
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public Customer()
        {
            this.PropertyChanged += Customer_PropertyChanged;
        }

        private void Customer_PropertyChanged(object sender, PropertyChangedEventArgs e)
        {
            Console.WriteLine("Changed: " + e.PropertyName);
        }

        public event PropertyChangedEventHandler PropertyChanged;
    }

    public class Program
    {
        public static void Main()
        {
            var customer = new Customer();
            customer.FirstName = "John";
            customer.FirstName = "John";
        }
    }
}
```

``` Output
Changed: FirstName
```

As you see, we change `FirstName` twice with the same value, although only a single event will be raised. The aspect sees that the second value is the same. If set `RaiseOnChange = false`, then both changes will trigger the event.

```csharp Example ([Deck.NET](https://deck.net/c48a2df6355ae448f66e57fb7d44bd06))
[NotifyPropertyChanged(RaiseOnChange = false)]
```

``` Output
Changed: FirstName
Changed: FirstName
```

## Handle Event Raising

You can extend the **NotifyPropertyChangedAttribute** class to implement your own custom logic. For example, in the following sample an event is swallowed for properties which accept a value with **Object** type.

```csharp Example ([Deck.NET](https://deck.net/dbfa9447ef388937a6403bc058c87c6f))
using System;
using System.ComponentModel;
using Bridge;
using Bridge.Aspect;

namespace Demo
{
    public class MyNotifyPropertyChangedAttribute : NotifyPropertyChangedAttribute
    {
        protected override void BeforeEvent(NotifyPropertyChangedAspectEventArgs eventArgs)
        {
            if (eventArgs.Value == null || eventArgs.Value.GetType() == typeof(object))
            {
                Console.WriteLine($"The event for {eventArgs.PropertyName} is swallowed");
                eventArgs.Flow = AspectFlow.Return;
            }
        }
    }

    [MyNotifyPropertyChanged]
    public class Customer: INotifyPropertyChanged
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public object CustomProperty { get; set; }

        public Customer()
        {
            this.PropertyChanged += Customer_PropertyChanged;
        }

        private void Customer_PropertyChanged(object sender, PropertyChangedEventArgs e)
        {
            Console.WriteLine("Changed: " + e.PropertyName);
        }

        public event PropertyChangedEventHandler PropertyChanged;
    }

    public class Program
    {
        public static void Main()
        {
            var customer = new Customer
            {
                FirstName = "John",
                CustomProperty = new object()
            };
        }
    }
}
```

``` Output
Changed: FirstName
The event for CustomProperty is swallowed
```

## Suspend And Resume Events

You can manually suspend events, make batch changes, then resume events and raise only one event manually.

```csharp Example ([Deck.NET](https://deck.net/0240ce5d6833b7d65ff04c2240d05d71))
using System;
using System.ComponentModel;
using System.Runtime.CompilerServices;
using Bridge;
using Bridge.Aspect;

namespace Demo
{
    [NotifyPropertyChanged]
    public class Customer: INotifyPropertyChanged
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public Customer()
        {
            this.PropertyChanged += Customer_PropertyChanged;
        }

        private void Customer_PropertyChanged(object sender, PropertyChangedEventArgs e)
        {
            Console.WriteLine("Changed: " + e.PropertyName);
        }

        public event PropertyChangedEventHandler PropertyChanged;

        public virtual void OnPropertyChanged(string propertyName = null)
        {
            this.PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName ?? "[none]"));
        }
    }

    public class Program
    {
        public static void Main()
        {
            var customer = new Customer();

            NotifyPropertyChangedAttribute.SuspendEvents();
            customer.FirstName = "John";
            customer.LastName = "Doe";
            NotifyPropertyChangedAttribute.ResumeEvents();

            customer.OnPropertyChanged(null);
        }
    }
}
```

``` Output
Changed: [none]
```