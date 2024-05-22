using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DTO.DTO;

public  class UserDTO
{
    public int Id { get; set; }

    public string Phone { get; set; } = null!;

    public string Password { get; set; } = null!;

    public int Level { get; set; }

    public string FirstName { get; set; } = null!;

    [EmailAddress]
    public string? Email { get; set; }

    public string? LastName { get; set; }

    //public virtual ICollection<ShipDTO> Ships { get; set; } = new List<ShipDTO>();

    //public virtual ICollection<UpcomingTravelDTO> UpcomingTravels { get; set; } = new List<UpcomingTravelDTO>();
}
