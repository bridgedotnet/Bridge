# Validation Attributes

## Validation Attribute Targets

Validation Attributes can be applied to:

* [Method parameters](#validating-method-parameters-deck)
* [Indexers](#validating-indexers-deck) having a setter
* [Properties](#validating-properties-deck) having a setter, and Auto Properties in [Managed mode](../attributes/Attribute_Reference.md#rules)

### Validating Method Parameters

```csharp Example ([Deck.NET](https://deck.net/bde8d95838868af7b6cb7ae5cb13a876))
using System;
using Bridge.Aspect;

namespace Demo
{
    public class Program
    {
        public static void Main()
        {
            var person = new User();

            // Set a correct email address:
            person.SetEmail("correct@email.com");
            Console.WriteLine(person.Email);

            // Set an incorrect email address:
            try
            {
                person.SetEmail("incorrect_email");
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine("[Error]:" + ex.Message);
            }

            // The incorrect email address was not applied:
            Console.WriteLine(person.Email);
        }
    }

    public class User
    {
        public string Email { get; private set; }

        public void SetEmail([Email] string email)
        {
            Email = email;
        }
    }
}
```

### Validating Indexers

```csharp Example ([Deck.NET](https://deck.net/103e6e6df0dcadbe037dd9fbe786b0a7))
using System;
using System.Collections.Generic;
using Bridge.Aspect;

namespace Demo
{
    public class Program
    {
        public static void Main()
        {
            var emails = new UserEmails();

            // Set a correct email address:
            emails[UserEmailKind.Primary] = "correct@email.com";
            Console.WriteLine(emails[UserEmailKind.Primary]);

            // Set an incorrect email address:
            try
            {
                emails[UserEmailKind.Primary] = "incorrect_email";
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine("[Error]:" + ex.Message);
            }

            // The incorrect email address was not applied:
            Console.WriteLine(emails[UserEmailKind.Primary]);
        }
    }

    public class UserEmails
    {
        private Dictionary<UserEmailKind, string> _emails = new Dictionary<UserEmailKind, string>();

        [Email]
        public string this[UserEmailKind kind]
        {
            get
            {
                string email;
                _emails.TryGetValue(kind, out email);
                return email;
            }
            set
            {
                _emails[kind] = value;
            }
        }
    }

    public enum UserEmailKind
    {
        Primary,
        Secondary
    }
}
```

### Validating Properties

```csharp Example ([Deck.NET](https://deck.net/678926267d32ac5e5bef07647b53681f))
using System;
using Bridge;
using Bridge.Aspect;

namespace Demo
{
    public class Program
    {
        public static void Main()
        {
            var person = new User();

            // Set a correct email address:
            person.Email = "correct@email.com";
            Console.WriteLine(person.Email);

            // Set an incorrect email address:
            try
            {
                person.Email = "incorrect_email";
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine("[Error]:" + ex.Message);
            }

            // The incorrect email address was not applied:
            Console.WriteLine(person.Email);
        }
    }

    // "Managed" mode is required to make Validation
    // working when applied to Auto Properties
    [Rules(AutoProperty = AutoPropertyRule.Managed)]
    public class User
    {
        [Email]
        public string Email { get; set; }
    }
}
```

## CreditCard

Value should be a valid credit card number or `NULL`. If the type of a credit card is specified, the value format will be validated against that type. 

Supported types are listed in **CreditCardType** enumeration:

| Value | 
| --- |
| Default (empty) | 
| Visa | 
| MasterCard | 
| Discover | 
| AmericanExpress | 
| DinersClub | 

If **CreditCardType** is not set, the common set of parameters will be validated for length, symbols, and checksum.

```csharp
public void SetVisa([CreditCard(CreditCardType.Visa)] string value) { }

// Correct values for Visa credit cards:
SetVisa("4532-8942-9999-5204");
SetVisa("4539 3255 0512 8366");
SetVisa("4916805102274963");

// Incorrect values:
SetVisa("491680510227496W");
SetVisa("5553493980783036");
```

## Email

Value should be a valid email address or `null`. 

The following regular expression demonstrates validating an email.

```regex Example
/^(")?(?:[^\."])(?:(?:[\.])?(?:[\w\-!#$%&'*+/=?^_`{|}~]))*\1@(\w[\-\w]*\.){1,5}([A-Za-z]){2,6}$/
```

```csharp
public void SetEmail([Email] string value) { }

// Correct email address:
SetEmail("hello@object.net");

// Incorrect email addresses:
SetEmail("helloobject.net");
SetEmail("hello@object");
```

## Url

Value should be a valid Url address or `null`. 

The following sample demonstrates using a regular expression for url validation.

```regex Example
/(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:\.\d{1,3}){3})(?!(?:\.\d{1,3}){2})(?!\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/
```

```csharp
public void SetUrl([Url] string value) { }

// Correct Url addresses:
SetUrl("https://bridge.net/");
SetUrl("https://bridge.net");
SetUrl("www.bridge.net");
SetUrl("ftp://bridge.net/");
SetUrl("http://127.0.0.1/");

// Incorrect Url addresses:
SetUrl("http:\\bridge.net/");
SetUrl("www. blog.bridge.net");
SetUrl("www.blog.bridge.net!");
```

## GreaterThan

Value should be greater than the configured value.

```csharp
[GreaterThan]
```

## LessThan

Value should be less than the configured value.

```csharp
[LessThan]
```

## NotEmpty

Value should not be empty (not null and not empty collection/array).

```csharp
[NotEmpty]
```

## NotNull

Value should not be null.

```csharp
[NotNull]
```

## Positive

Value should be >= 0.

```csharp
[Positive]
```

## Negative

Value should be < 0.

```csharp
[Negative]
```

## Range

Value should be within configured range.

```csharp
[Range]
```

## Required

Length of parameter should be within the configured string (null parameter value is valid).

```csharp
[Required]
```

## Length

Value should not be empty or whitespace.

```csharp
[Length]
```

## RegularExpression

Parameter should match regex pattern.

```csharp
[RegularExpression]
```

## Validator

Accept class which implements **IParameterValidator** and use for validation.

```csharp
[Validator]
```