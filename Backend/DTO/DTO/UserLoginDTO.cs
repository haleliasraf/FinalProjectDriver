using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DTO.DTO;

public partial class UserLoginDTO
{
    [EmailAddress]
    public string? Email { get; set; }

    public string Password { get; set; } = null!;

}
