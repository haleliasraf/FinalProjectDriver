using System;
using System.Collections.Generic;

namespace DL.Models;

public  class UpcomingTravel
{
    public int Id { get; set; }

    public int AreaId { get; set; }

    public string? AdressExit { get; set; }

    public string? AdressGounn { get; set; }

    public int UserId { get; set; }

    public int Payment { get; set; }

    public DateTime Date { get; set; }

    public int DriverId { get; set; }

    public string? Time { get; set; }

    public string? Phone { get; set; }

    public int? Numpassenger { get; set; }

    public virtual Area Area { get; set; } = null!;

    public virtual Driver Driver { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
