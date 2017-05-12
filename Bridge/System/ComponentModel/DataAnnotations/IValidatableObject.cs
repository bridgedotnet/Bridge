using System.Collections.Generic;
using Bridge;

namespace System.ComponentModel.DataAnnotations
{
    [External]
    [NonScriptable]
    public interface IValidatableObject
    {
        IEnumerable<ValidationResult> Validate(ValidationContext validationContext);
    }
}
