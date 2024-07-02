using System;
using System.Collections.Generic;

namespace DL.Models;

public partial class Status
{
    public int Id { get; set; }

    public string? Description { get; set; }

    public virtual ICollection<Contact> Contacts { get; set; } = new List<Contact>();

    public virtual ICollection<Ship> Ships { get; set; } = new List<Ship>();

    public virtual ICollection<UpcomingTravel> UpcomingTravels { get; set; } = new List<UpcomingTravel>();
}
