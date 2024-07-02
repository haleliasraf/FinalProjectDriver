using System;
using System.Collections.Generic;

namespace DL.Models;

public partial class Area
{
    public int Id { get; set; }

    public string? Description { get; set; }

    public virtual ICollection<UpcomingTravel> UpcomingTravels { get; set; } = new List<UpcomingTravel>();
}
