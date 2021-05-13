# Development Policies

## Obsolete Attribute And Breaking Changes

The goal is to never have to use the [ObsoleteAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.obsoleteattribute), but sometimes it's required.

Any use of `[Obsolete]` attribute must include a message with instructions on how to modify existing code to now comply with new api.

If the `[Obsolete]` attribute is applied, as Bridge proceeds through subsequent minor and major releases, the state of `[Obsolete]` will track the escalation steps outlined in the following table:

!!!
When the `[Obsolete]` attribute is first applied, a new [Issue](https://github.com/bridgedotnet/Bridge/issues) is to be pre-created documenting each step of this process. The future [milestone](https://github.com/bridgedotnet/Bridge/issues) of each Issue is to be set at that time. 
!!!

| Phase | Release | Description | Compiler Message |
| --- | --- | --- | --- |
| :confused:   | Current | `[Obsolete("descriptive message on how to work-around change. See Issue #1234 for more information.")]` | Warning – compilation will continue | 
| :angry:   | Next Major | `[Obsolete("descriptive message on how to work-around change. See Issue #1234 for more information.", true)]` | Error – compilation will fail |
| :rage:   | Next Next Major | The obsolete Class or Member is removed from source | Breaking Change – compilation will fail |

For instance, if the `[Obsolete]` attribute is applied to a Method in Bridge 15.8, the compiler will throw a `Warning` message, but compilation will continue:

```csharp
[Obsolete("Please use DoSomethingElse(). See Issue #1234 for more information.")]
public void DoSomething() { }
```

Then in Bridge 16.0 (Next major release), the `error` flag will be set. The compiler will throw an `Error` message, and compilation will fail:

```csharp
[Obsolete("Please use DoSomethingElse(). See Issue #1234 for more information.", true)]
public void DoSomething() { }
```

Then in Bridge 17.0 (Next Next Major release), the `DoSomething` Method would be completely removed from the project.

```csharp
// Nothing to see here
```
