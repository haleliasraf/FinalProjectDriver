using System;
using System.Collections.Generic;

namespace DL.Models;

public  class Driver
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Phon { get; set; }

    public string? TypeTaxis { get; set; }

    public virtual ICollection<Ship> Ships { get; set; } = new List<Ship>();

    public virtual ICollection<UpcomingTravel> UpcomingTravels { get; set; } = new List<UpcomingTravel>();
}
