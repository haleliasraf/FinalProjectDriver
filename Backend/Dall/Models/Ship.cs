using System;
using System.Collections.Generic;

namespace DL.Models;

public partial class Ship
{
    public int Id { get; set; }

    public string? ShipAdress { get; set; }

    public int UserId { get; set; }

    public string? Url { get; set; }

    public string? Name { get; set; }

    public DateTime Date { get; set; }

    public int StatusId { get; set; }

    public int? DriverId { get; set; }

    public string? ShipSdress { get; set; }

    public DateOnly? DateReceived { get; set; }

    public DateOnly? Date1 { get; set; }

    public virtual Driver? Driver { get; set; }

    public virtual Status Status { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
